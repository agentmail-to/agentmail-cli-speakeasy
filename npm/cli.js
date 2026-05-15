#!/usr/bin/env node
// Thin shim that execs the downloaded native binary with the same args.
const path = require("path");
const { spawnSync } = require("child_process");

const isWindows = process.platform === "win32";
const binName = isWindows ? "agentmail.exe" : "agentmail";
const binPath = path.join(__dirname, "vendor", binName);

const result = spawnSync(binPath, process.argv.slice(2), {
  stdio: "inherit",
});

if (result.error) {
  console.error(
    `[agentmail-cli-speakeasy] failed to spawn ${binPath}: ${result.error.message}`
  );
  console.error(
    `Try reinstalling: npm install -g agentmail-cli-speakeasy`
  );
  process.exit(1);
}

process.exit(result.status ?? 1);
