const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = path.resolve(__dirname, "out");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function insidePublic(relativePath) {
  const resolved = path.resolve(PUBLIC_DIR, `.${relativePath}`);
  return resolved.startsWith(`${PUBLIC_DIR}${path.sep}`) ? resolved : null;
}

function findExportedFile(pathname) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const candidates = [
    insidePublic(`${requested}.html`),
    insidePublic(path.join(requested, "index.html")),
    insidePublic(requested),
  ].filter(Boolean);

  return candidates.find((candidate) => {
    try {
      return fs.statSync(candidate).isFile();
    } catch {
      return false;
    }
  });
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400).end("Bad Request");
    return;
  }

  if (pathname.includes("\\") || pathname.split("/").includes("..")) {
    res.writeHead(400).end("Bad Request");
    return;
  }

  const filePath = findExportedFile(pathname);
  const resolvedFile = filePath || insidePublic("/404.html");
  if (!resolvedFile) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" }).end("Not Found");
    return;
  }

  const status = filePath ? 200 : 404;
  const contentType = MIME_TYPES[path.extname(resolvedFile).toLowerCase()] || "application/octet-stream";
  res.writeHead(status, { "content-type": contentType });
  const stream = fs.createReadStream(resolvedFile);
  stream.on("error", () => {
    if (!res.headersSent) res.writeHead(404);
    res.end("Not Found");
  });
  stream.pipe(res);
});

server.listen(PORT, () => {
  console.log(`HOJA Network static export available at http://localhost:${PORT}`);
});
