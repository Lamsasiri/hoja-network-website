const fs = require("node:fs");
const path = require("node:path");
const puppeteer = require("puppeteer-core");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "out");
const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const defaultChrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const chromePath = process.env.CHROME_PATH || (fs.existsSync(defaultChrome) ? defaultChrome : undefined);

function exportedRoutes(directory = outputDir, prefix = "") {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.posix.join(prefix, entry.name);
    const absolute = path.join(directory, entry.name);

    if (entry.isDirectory()) return exportedRoutes(absolute, relative);
    if (!entry.isFile() || !entry.name.endsWith(".html") || entry.name === "404.html") return [];

    const route = relative.endsWith("/index.html")
      ? `/${relative.slice(0, -"/index.html".length)}`
      : relative === "index.html"
        ? "/"
        : `/${relative.slice(0, -".html".length)}`;

    return [route || "/"];
  });
}

function normalizeRoute(value) {
  const route = new URL(value, baseUrl).pathname.replace(/\/$/, "") || "/";
  return decodeURIComponent(route);
}

function routeHtmlPath(route) {
  const stem = route === "/" ? "index" : route.slice(1);
  const candidates = [path.join(outputDir, `${stem}.html`), path.join(outputDir, stem, "index.html")];
  return candidates.find((candidate) => fs.existsSync(candidate));
}

function redirectTarget(route) {
  const htmlPath = routeHtmlPath(route);
  if (!htmlPath) return null;
  const html = fs.readFileSync(htmlPath, "utf8");
  const meta = html.match(/http-equiv=["']refresh["'][^>]*content=["'][^"']*url=([^"']+)/i);
  const next = html.match(/NEXT_REDIRECT;(?:replace|push);([^;]+);/);
  const target = meta?.[1] || next?.[1];
  return target ? normalizeRoute(target) : null;
}

function exportedPathExists(route) {
  const candidate = path.resolve(outputDir, `.${route}`);
  if (!candidate.startsWith(`${outputDir}${path.sep}`)) return false;
  try {
    return fs.statSync(candidate).isFile();
  } catch {
    return false;
  }
}

async function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

async function main() {
  if (!fs.existsSync(outputDir)) throw new Error("Static export missing; run npm run build first.");
  if (!chromePath) throw new Error("Chrome/Chromium not found. Set CHROME_PATH to its executable.");

  const routes = exportedRoutes().sort((a, b) => a.localeCompare(b));
    const responsiveRoutes = routes.filter((route) => !redirectTarget(route));
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
        const target = redirectTarget(route);
        if (target) {
          response = await fetch(new URL(route, baseUrl));
          await assert(response.status < 400, `Route ${route}: HTTP ${response.status}`, failures);
          if (!routeSet.has(target)) failures.push(`Route ${route}: invalid or missing redirect target ${target}`);
          continue;
        }

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
        if (!routeSet.has(pathname) && !exportedPathExists(pathname)) diagnostics.badLinks.push(`${route} -> ${pathname}`);
      }
    }

    for (const route of responsiveRoutes) {
      for (const width of [390, 768, 1024, 1440]) {
        await page.setViewport({ width, height: 900 });
        await page.goto(new URL(route, baseUrl).href, { waitUntil: "domcontentloaded", timeout: 20000 });
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
        if (overflow) failures.push(`Horizontal overflow at ${width}px on ${route}`);
      }
    }

    if (routeSet.has("/")) {
      await page.setViewport({ width: 390, height: 844 });
      await page.goto(new URL("/", baseUrl).href, { waitUntil: "domcontentloaded" });
      await page.click("#rnav-button");
      const menuOpened = await page.$eval("#rnav-open", (input) => input.checked);
      if (!menuOpened) failures.push("Mobile navigation menu did not open");
      await page.click("#rnav-button");
      const menuClosed = await page.$eval("#rnav-open", (input) => !input.checked);
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

    const languageRoutes = routes.filter((route) =>
      route !== "/news" &&
      !route.startsWith("/news/") &&
      !redirectTarget(route) &&
      route !== "/founder"
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
      const contactAction = await page.$eval('form[action^="mailto:"]', (form) => form.getAttribute("action")).catch(() => null);
      if (!contactAction?.startsWith("mailto:")) failures.push("Contact form action is not the documented mailto flow");
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
      viewports: [390, 768, 1024, 1440],
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
