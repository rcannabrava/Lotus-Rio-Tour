import fs from "fs";
import path from "path";

const clientDir = "dist/client";

const deployConfig = path.join(".wrangler", "deploy", "config.json");
if (fs.existsSync(deployConfig)) {
  fs.rmSync(deployConfig);
  console.log(".wrangler/deploy/config.json removido");
}

const wranglerJson = path.join("dist/client", "wrangler.json");
if (fs.existsSync(wranglerJson)) {
  fs.rmSync(wranglerJson);
  console.log("wrangler.json removido do dist/client");
}

const files = fs.readdirSync(path.join(clientDir, "assets"));

const js = files.find((f) => f.startsWith("index-") && f.endsWith(".js") && !f.includes("CeRWHq"));

const css = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

if (!js || !css) {
  console.error("Assets não encontrados:", files);
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Luxury Private Tours in Rio | Lotus Rio Tour</title>
    <link rel="stylesheet" href="/assets/${css}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${js}"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(clientDir, "index.html"), html);
console.log("index.html gerado com:", js, css);
