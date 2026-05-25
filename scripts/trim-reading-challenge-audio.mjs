#!/usr/bin/env node
/**
 * Remove Compass CD spoken intro ("Unit N") from reading-challenge-1 MP3s.
 * Default: trim first 5 seconds in place.
 */
import { execFileSync } from "node:child_process";
import { readdirSync, renameSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const AUDIO_DIR = join(ROOT, "public", "reading-audio");
const TRIM_SEC = Number(process.env.TRIM_SEC ?? "5");
const PATTERN = /^reading-challenge-1-p\d+\.mp3$/i;
const ffmpeg = process.env.FFMPEG ?? ffmpegInstaller.path;

const files = readdirSync(AUDIO_DIR)
  .filter((name) => PATTERN.test(name))
  .sort((a, b) => {
    const na = Number(a.match(/p(\d+)/i)?.[1] ?? 0);
    const nb = Number(b.match(/p(\d+)/i)?.[1] ?? 0);
    return na - nb;
  });

if (files.length === 0) {
  console.error(`No reading-challenge-1-p*.mp3 in ${AUDIO_DIR}`);
  process.exit(1);
}

for (const name of files) {
  const input = join(AUDIO_DIR, name);
  const tmp = join(AUDIO_DIR, `.trim-${name}`);
  execFileSync(
    ffmpeg,
    ["-y", "-ss", String(TRIM_SEC), "-i", input, "-acodec", "copy", tmp],
    { stdio: "inherit" },
  );
  unlinkSync(input);
  renameSync(tmp, input);
  console.log(`trimmed ${name} (-${TRIM_SEC}s)`);
}

console.log(`Done: ${files.length} file(s).`);
