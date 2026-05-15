#!/usr/bin/env node
// Postinstall: download the platform-specific agentmail binary from GitHub Releases
// and extract it into bin/. Runs automatically on `npm install`.

const fs = require("fs");
const path = require("path");
const https = require("https");
const { execFileSync } = require("child_process");
const zlib = require("zlib");

const pkg = require("./package.json");
const VERSION = pkg.version;
const REPO = "agentmail-to/agentmail-cli-speakeasy";

// .goreleaser.yaml's archive name_template:
//   {{ .ProjectName }}_{{ title .Os }}_{{ x86_64 | arm64 }}.{tar.gz|zip}
// ProjectName comes from the goreleaser default (repo name) — we'll handle that
// by trying common candidates.

const PLAT_MAP = {
  darwin: "Darwin",
  linux: "Linux",
  win32: "Windows",
};

const ARCH_MAP = {
  x64: "x86_64",
  arm64: "arm64",
};

function fail(msg) {
  console.error(`\n[agentmail-cli-speakeasy] install failed: ${msg}`);
  console.error(
    `If your platform isn't supported, download a binary directly from`
  );
  console.error(`  https://github.com/${REPO}/releases/tag/v${VERSION}\n`);
  process.exit(1);
}

const platform = PLAT_MAP[process.platform];
const arch = ARCH_MAP[process.arch];
if (!platform || !arch) {
  fail(`unsupported platform ${process.platform}/${process.arch}`);
}

const isWindows = process.platform === "win32";
const ext = isWindows ? "zip" : "tar.gz";

// goreleaser uses ProjectName as the prefix in archive names. Default is the
// goreleaser project_name (defaults to repo basename). Try the most likely first.
const candidatePrefixes = ["agentmail-cli-speakeasy", "agentmail"];

// Downloaded binary lives next to cli.js (the shim).
const binDir = path.join(__dirname, "vendor");
fs.mkdirSync(binDir, { recursive: true });

function download(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "agentmail-cli-installer" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

async function tryDownload() {
  let lastErr;
  for (const prefix of candidatePrefixes) {
    const archiveName = `${prefix}_${platform}_${arch}.${ext}`;
    const url = `https://github.com/${REPO}/releases/download/v${VERSION}/${archiveName}`;
    try {
      console.log(`[agentmail-cli-speakeasy] downloading ${url}`);
      const buf = await download(url);
      return { buf, archiveName };
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

(async () => {
  let result;
  try {
    result = await tryDownload();
  } catch (e) {
    fail(`could not download binary: ${e.message}`);
  }

  const archivePath = path.join(__dirname, result.archiveName);
  fs.writeFileSync(archivePath, result.buf);

  try {
    if (isWindows) {
      // Use PowerShell Expand-Archive on Windows
      execFileSync(
        "powershell",
        [
          "-NoProfile",
          "-Command",
          `Expand-Archive -Force -Path '${archivePath}' -DestinationPath '${binDir}'`,
        ],
        { stdio: "inherit" }
      );
    } else {
      // tar is available on macOS and Linux
      execFileSync("tar", ["-xzf", archivePath, "-C", binDir], { stdio: "inherit" });
    }
  } catch (e) {
    fail(`could not extract archive: ${e.message}`);
  } finally {
    try {
      fs.unlinkSync(archivePath);
    } catch {}
  }

  // The archive contains the binary at its root. Make sure it's executable.
  const binName = isWindows ? "agentmail.exe" : "agentmail";
  const binPath = path.join(binDir, binName);
  if (!fs.existsSync(binPath)) {
    fail(
      `binary not found at ${binPath} after extraction. Archive contents may have changed.`
    );
  }
  if (!isWindows) {
    fs.chmodSync(binPath, 0o755);
  }
  console.log(`[agentmail-cli-speakeasy] installed ${binName} v${VERSION}`);
})();
