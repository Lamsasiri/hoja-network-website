const fs = require("node:fs");
const path = require("node:path");
const puppeteer = require("puppeteer-core");

const root = path.resolve(__dirname, "..");
const buildDir = path.join(root, ".next");
const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const defaultChrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const chromePath = process.env.CHROME_PATH || (fs.existsSync(defaultChrome) ? defaultChrome : undefined);

function builtRoutes() {
  const appManifestPath = path.join(buildDir, "server", "app-paths-manifest.json");
  const prerenderManifestPath = path.join(buildDir, "prerender-manifest.json");
  if (!fs.existsSync(appManifestPath) || !fs.existsSync(prerenderManifestPath)) {
    throw new Error("Next.js production build missing; run npm run build first.");
  }

  const appManifest = JSON.parse(fs.readFileSync(appManifestPath, "utf8"));
  const prerenderManifest = JSON.parse(fs.readFileSync(prerenderManifestPath, "utf8"));
  const pageTemplates = Object.keys(appManifest)
    .filter((route) => route.endsWith("/page"))
    .map((route) => route.slice(0, -"/page".length) || "/")
    .filter((route) => route !== "/_not-found");
  const pageTemplateSet = new Set(pageTemplates);
  const pages = pageTemplates.filter((route) => !route.includes("["));
  const prerendered = Object.entries(prerenderManifest.routes)
    .filter(([route, info]) => !route.includes("[") && pageTemplateSet.has(info.srcRoute || route))
    .map(([route]) => route);
  return [...new Set([...pages, ...prerendered])].sort((a, b) => a.localeCompare(b));
}

function normalizeRoute(value) {
  const route = new URL(value, baseUrl).pathname.replace(/\/$/, "") || "/";
  return decodeURIComponent(route);
}

async function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

async function main() {
  if (!fs.existsSync(buildDir)) throw new Error("Next.js production build missing; run npm run build first.");
  if (!chromePath) throw new Error("Chrome/Chromium not found. Set CHROME_PATH to its executable.");

  const routes = builtRoutes();
  const responsiveRoutes = routes;
  const routeSet = new Set(routes);
  const failures = [];
  const diagnostics = { console: [], page: [], requests: [], responseErrors: [], brokenImages: [], missingAlt: [], badLinks: [], localAssets: new Set() };
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    page.on("console", (message) => {
      if (message.type() === "error") diagnostics.console.push(message.text());
    });
    page.on("pageerror", (error) => diagnostics.page.push(error.message));
    page.on("requestfailed", (request) => diagnostics.requests.push(`${request.url()} (${request.failure()?.errorText || "failed"})`));
    page.on("response", (response) => {
      if (response.status() >= 400) diagnostics.responseErrors.push(`${response.status()} ${response.url()}`);
    });

    for (const route of routes) {
      let response;
      try {
        response = await page.goto(new URL(route, baseUrl).href, { waitUntil: "domcontentloaded", timeout: 20000 });
        await page.evaluate(async () => Promise.race([
          Promise.all(Array.from(document.images, (image) => image.decode().catch(() => undefined))),
          new Promise((resolve) => setTimeout(resolve, 2000)),
        ]));
      } catch (error) {
        failures.push(`Route ${route}: ${error.message}`);
        continue;
      }

      await assert(response && response.status() < 400, `Route ${route}: HTTP ${response?.status() ?? "no response"}`, failures);
      const result = await page.evaluate(() => ({
        hasHeading: Boolean(document.querySelector("h1")),
        brokenImages: Array.from(document.images)
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src),
        missingAlt: Array.from(document.images)
          .filter((image) => !image.hasAttribute("alt"))
          .map((image) => image.currentSrc || image.src),
        localAssets: Array.from(document.images)
          .map((image) => new URL(image.currentSrc || image.src).pathname)
          .filter((pathname) => pathname.startsWith("/assets/hoja/")),
        internalLinks: Array.from(document.querySelectorAll("a[href]"))
          .map((anchor) => anchor.href)
          .filter((href) => {
            const url = new URL(href);
            return url.origin === location.origin && !url.pathname.startsWith("/_next/") && !url.pathname.startsWith("/assets/");
          }),
      }));

      if (!result.hasHeading) failures.push(`Route ${route}: missing h1`);
      for (const image of result.brokenImages) diagnostics.brokenImages.push(`${route}: ${image}`);
      for (const image of result.missingAlt) diagnostics.missingAlt.push(`${route}: ${image}`);
      for (const asset of result.localAssets) diagnostics.localAssets.add(decodeURIComponent(asset.slice(1)));
      for (const href of result.internalLinks) {
        const pathname = normalizeRoute(href);
        if (!routeSet.has(pathname) && !["/sitemap.xml", "/robots.txt", "/llms.txt"].includes(pathname)) {
          diagnostics.badLinks.push(`${route} -> ${pathname}`);
        }
      }
    }

    for (const route of responsiveRoutes) {
      for (const width of [375, 390, 430, 768, 1024, 1366, 1440, 1920]) {
        await page.setViewport({ width, height: 900 });
        await page.goto(new URL(route, baseUrl).href, { waitUntil: "domcontentloaded", timeout: 20000 });
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
        if (overflow) failures.push(`Horizontal overflow at ${width}px on ${route}`);
        if (route === "/who-we-are" && width >= 1025) {
          const columnsOverlap = await page.evaluate(() => {
            const aside = document.querySelector("#content aside")?.getBoundingClientRect();
            const article = document.querySelector('#content [data-cid="n89"]')?.getBoundingClientRect();
            return Boolean(aside && article && article.right > aside.left + 1);
          });
          if (columnsOverlap) failures.push(`Mission text overlaps the sidebar at ${width}px on ${route}`);
        }
      }
    }

    if (routeSet.has("/")) {
      await page.setViewport({ width: 390, height: 844 });
      await page.goto(new URL("/", baseUrl).href, { waitUntil: "domcontentloaded" });
      await page.click("#rnav-button");
      const menuOpened = await page.$eval("#rnav-button", (summary) => summary.closest("details")?.open ?? false);
      if (!menuOpened) failures.push("Mobile navigation menu did not open");
      await page.click("#rnav-button");
      const menuClosed = await page.$eval("#rnav-button", (summary) => !(summary.closest("details")?.open ?? true));
      if (!menuClosed) failures.push("Mobile navigation menu did not close");

      await page.evaluate(() => localStorage.setItem("hoja_lang", "fr"));
      await page.reload({ waitUntil: "networkidle2" });
      await page.waitForFunction(() => document.documentElement.lang === "fr");
      await page.click("#rnav-button");
      const originalPath = await page.evaluate(() => location.pathname);
      const frenchHeading = await page.$eval("h1", (heading) => heading.textContent.trim());
      const englishSwitcherClicked = await page.$$eval('[aria-label="Switch to English"]', (elements) => {
        const visible = elements.find((element) => element.getClientRects().length > 0);
        if (!visible) return false;
        visible.click();
        return true;
      });
      if (!englishSwitcherClicked) failures.push("Visible English language switcher was not found");
      await page.waitForFunction(() => document.documentElement.lang === "en", { timeout: 10000 });
      const englishHeading = await page.$eval("h1", (heading) => heading.textContent.trim());
      if (englishHeading === frenchHeading) failures.push("Homepage heading did not change with the language selection");
      const frenchSwitcherClicked = await page.$$eval('[aria-label="Passer en Français"]', (elements) => {
        const visible = elements.find((element) => element.getClientRects().length > 0);
        if (!visible) return false;
        visible.click();
        return true;
      });
      if (!frenchSwitcherClicked) failures.push("Visible French language switcher was not found");
      await page.waitForFunction(() => document.documentElement.lang === "fr", { timeout: 10000 });
      const restoredFrenchHeading = await page.$eval("h1", (heading) => heading.textContent.trim());
      if (restoredFrenchHeading !== frenchHeading) failures.push("Homepage heading did not return to French");
      const finalPath = await page.evaluate(() => location.pathname);
      if (finalPath !== originalPath) failures.push("Language switcher changed the current route");
    }

    const redirectRoutes = new Set([
      "/founder",
      "/leadership",
      "/ignite-change",
      "/topic",
      "/partnership",
      "/our-network",
      "/who-we-are/governance-team",
      "/who-we-are/team",
      "/what-we-do/child-protection-safeguarding",
      "/what-we-do/artificial-intelligence-innovation",
      "/what-we-do/biomass-lake-kivu-ecosystem",
      "/what-we-do/economic-development-women-empowerment",
    ]);
    const languageRoutes = routes.filter((route) =>
      route !== "/news" &&
      !route.startsWith("/news/") &&
      !redirectRoutes.has(route)
    );
    const languageFailures = [];
    let bilingualRoutesChecked = 0;

    for (const route of languageRoutes) {
      try {
        await page.setViewport({ width: 1280, height: 900 });
        await page.goto(new URL(route, baseUrl).href, { waitUntil: "domcontentloaded", timeout: 15000 });
        await new Promise((resolve) => setTimeout(resolve, 200));
        const initialPath = normalizeRoute(page.url());
        if (initialPath !== route) continue;

        const initialHeading = await page.$eval("h1", (heading) => heading.textContent.trim()).catch(() => "");
        if (/^(redirecting|redirection vers|redirecting to)/i.test(initialHeading)) continue;
        bilingualRoutesChecked++;

        await page.evaluate(() => localStorage.setItem("hoja_lang", "fr"));
        await page.reload({ waitUntil: "domcontentloaded" });
        await page.waitForFunction(() => document.documentElement.lang === "fr", { timeout: 5000 });
        const frenchContent = await page.$eval("main", (main) => main.innerText.replace(/\s+/g, " ").trim()).catch(() => "");
        const englishClicked = await page.$$eval('[aria-label="Switch to English"]', (elements) => {
          const visible = elements.find((element) => element.getClientRects().length > 0);
          if (!visible) return false;
          visible.click();
          return true;
        });
        if (!englishClicked) {
          languageFailures.push(`${route}: visible English switcher missing`);
          continue;
        }
        await page.waitForFunction(() => document.documentElement.lang === "en", { timeout: 5000 });
        const englishContent = await page.$eval("main", (main) => main.innerText.replace(/\s+/g, " ").trim()).catch(() => "");
        if (!frenchContent || !englishContent || frenchContent === englishContent) {
          languageFailures.push(`${route}: main content did not change between French and English`);
        }

        const frenchClicked = await page.$$eval('[aria-label="Passer en Français"]', (elements) => {
          const visible = elements.find((element) => element.getClientRects().length > 0);
          if (!visible) return false;
          visible.click();
          return true;
        });
        if (!frenchClicked) languageFailures.push(`${route}: visible French switcher missing`);
        await page.waitForFunction(() => document.documentElement.lang === "fr", { timeout: 5000 });
        if (normalizeRoute(page.url()) !== route) languageFailures.push(`${route}: language switcher changed the current route`);
      } catch (error) {
        languageFailures.push(`${route}: ${error.message}`);
      }
    }
    failures.push(...languageFailures.map((item) => `Language check: ${item}`));

    if (routeSet.has("/donate")) {
      await page.goto(new URL("/donate", baseUrl).href, { waitUntil: "domcontentloaded" });
      await page.$$eval("button", (buttons) => buttons.find((button) => button.textContent.includes("Bitcoin"))?.click());
      if (!(await page.$$eval("h2", (headings) => headings.some((heading) => heading.textContent.includes("Bitcoin"))))) {
        failures.push("Bitcoin donation tab did not activate");
      }
      await page.$$eval("button", (buttons) => buttons.find((button) => button.textContent.includes("Tether"))?.click());
      if (!(await page.$$eval("h2", (headings) => headings.some((heading) => heading.textContent.includes("Tether"))))) {
        failures.push("USDT donation tab did not activate");
      }
    }

    if (routeSet.has("/contact")) {
      await page.goto(new URL("/contact", baseUrl).href, { waitUntil: "domcontentloaded" });
      const contactFormReady = await page.evaluate(() => {
        const form = document.querySelector("#contact-name")?.closest("form");
        return Boolean(form && form.querySelector("#contact-email[required]") && form.querySelector("#contact-subject[required]") && form.querySelector("#contact-message[required]") && form.querySelector('button[type="submit"]'));
      });
      if (!contactFormReady) failures.push("Contact form is missing required labeled fields or a submit button");
    }

    for (const item of diagnostics.console) failures.push(`Browser console: ${item}`);
    for (const item of diagnostics.page) failures.push(`Browser page error: ${item}`);
    for (const item of diagnostics.requests) failures.push(`Failed request: ${item}`);
    for (const item of diagnostics.responseErrors) failures.push(`HTTP error: ${item}`);
    for (const item of diagnostics.brokenImages) failures.push(`Broken image: ${item}`);
    for (const item of diagnostics.missingAlt) failures.push(`Image missing alt attribute: ${item}`);
    for (const item of diagnostics.badLinks) failures.push(`Broken internal link: ${item}`);

    if (process.env.AUDIT_ASSET_REPORT) {
      fs.writeFileSync(process.env.AUDIT_ASSET_REPORT, JSON.stringify([...diagnostics.localAssets].sort(), null, 2));
    }

    console.log(JSON.stringify({
      routesChecked: routes.length,
      responsiveRoutes: responsiveRoutes.length,
      bilingualRoutesChecked,
      bilingualRouteFailures: languageFailures,
      viewports: [375, 390, 430, 768, 1024, 1366, 1440, 1920],
      consoleErrors: diagnostics.console.length,
      pageErrors: diagnostics.page.length,
      failedRequests: diagnostics.requests.length,
      httpErrors: diagnostics.responseErrors.length,
      brokenImages: diagnostics.brokenImages.length,
      imagesMissingAlt: diagnostics.missingAlt.length,
      brokenInternalLinks: diagnostics.badLinks.length,
      localHojaAssetsUsed: [...diagnostics.localAssets].sort(),
      failures,
    }, null, 2));

    if (failures.length) process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
