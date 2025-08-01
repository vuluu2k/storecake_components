import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const packageInfo = require("../package.json");
const { text } = require("./banner.json");

process.stdout.write(text.replace("${version}", packageInfo.version));
process.stdin.pipe(process.stdout);