import { createServer } from "vite";
import { tunnelmole } from "tunnelmole";
import viteConfig from "./vite.config.ts";
import colors from "colors";
import qrcode from "qrcode_terminal";

// starting vite dev server
const viteServer = await createServer(viteConfig);

await viteServer.listen();

const port = viteServer.config.server.port;
console.log(
  `\n${colors.bgBlack("VITE")}\n`,
);
viteServer.printUrls();
viteServer.bindCLIShortcuts({ print: true });
console.log("\n");

// starting tunnelmole
let tunnelmoleUrl = "";
try {
  // XXX: tunnelmole is not handling errors properly
  tunnelmoleUrl = await tunnelmole({
    port,
  });
} catch (err) {
  console.error("Cannot reach tunnelmole. Offline? 🙃");
  console.log(err);
}

console.log("\n");
if (tunnelmoleUrl) {
  console.log(tunnelmoleUrl);
  qrcode.generate(tunnelmoleUrl);
}
