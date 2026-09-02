#!/usr/bin/env node
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const hint = spawn("npx", ["tsx", "scripts/print-lan-oauth-setup.ts"], {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
});

hint.on("close", (code) => {
  if (code !== 0) {
    console.warn("[dev:lan] Không chạy được lan:oauth-setup, vẫn khởi động Next…");
  }
  const next = spawn("npx", ["next", "dev", "--turbopack", "-H", "0.0.0.0"], {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  next.on("exit", (c) => process.exit(c ?? 0));
});
