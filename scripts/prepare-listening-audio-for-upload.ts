#!/usr/bin/env npx tsx
/**
 * Nén MP3 luyện nghe vượt giới hạn Supabase Free (50 MB / file).
 * Giữ tên file gốc để upload script và API không cần đổi.
 *
 * Cần ffmpeg trên PATH.
 */
import { execFile } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { listeningAudioUploadSourceDirs } from "@/lib/listening/listening-materials-paths";
import { isAllowedListeningAudioFile } from "@/lib/listening/listening-materials-urls";

const execFileAsync = promisify(execFile);

/** Dưới 50 MB (Supabase Free global limit). */
export const SUPABASE_FREE_MAX_BYTES = 50 * 1024 * 1024;
const TARGET_MAX_BYTES = 48 * 1024 * 1024;

const SOURCE_DIRS = listeningAudioUploadSourceDirs();

async function probeDurationSeconds(filePath: string): Promise<number> {
  const { stdout } = await execFileAsync("ffprobe", [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    filePath,
  ]);
  const seconds = Number.parseFloat(stdout.trim());
  if (!Number.isFinite(seconds) || seconds <= 0) {
    throw new Error(`Không đọc được duration: ${filePath}`);
  }
  return seconds;
}

function bitrateKbpsForTarget(durationSeconds: number, maxBytes: number): number {
  const bits = maxBytes * 8 * 0.92;
  const kbps = Math.floor(bits / durationSeconds / 1000);
  return Math.max(64, Math.min(192, kbps));
}

async function compressMp3(inputPath: string, outputPath: string, bitrateKbps: number): Promise<void> {
  await execFileAsync("ffmpeg", [
    "-y",
    "-hide_banner",
    "-loglevel",
    "error",
    "-i",
    inputPath,
    "-codec:a",
    "libmp3lame",
    "-b:a",
    `${bitrateKbps}k`,
    "-ac",
    "2",
    outputPath,
  ]);
}

async function prepareFile(filePath: string): Promise<boolean> {
  const size = fs.statSync(filePath).size;
  if (size <= TARGET_MAX_BYTES) {
    console.log(`skip ${path.basename(filePath)} (${(size / 1024 / 1024).toFixed(1)} MB)`);
    return false;
  }

  const duration = await probeDurationSeconds(filePath);
  const bitrateKbps = bitrateKbpsForTarget(duration, TARGET_MAX_BYTES);
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ".mp3");
  const tmpPath = path.join(dir, `${base}.upload-tmp.mp3`);
  const backupPath = path.join(dir, `${base}.source.mp3`);

  console.log(
    `compress ${path.basename(filePath)}: ${(size / 1024 / 1024).toFixed(1)} MB → ~${bitrateKbps} kbps`,
  );

  await compressMp3(filePath, tmpPath, bitrateKbps);
  const newSize = fs.statSync(tmpPath).size;
  if (newSize > SUPABASE_FREE_MAX_BYTES) {
    fs.unlinkSync(tmpPath);
    throw new Error(
      `${path.basename(filePath)} vẫn > 50 MB sau nén (${(newSize / 1024 / 1024).toFixed(1)} MB). Thử giảm bitrate hoặc nâng Supabase Pro.`,
    );
  }

  if (!fs.existsSync(backupPath)) {
    fs.renameSync(filePath, backupPath);
    console.log(`  backup → ${path.basename(backupPath)}`);
  }

  fs.renameSync(tmpPath, filePath);
  console.log(`  wrote ${path.basename(filePath)} (${(newSize / 1024 / 1024).toFixed(1)} MB)`);
  return true;
}

async function main(): Promise<void> {
  try {
    await execFileAsync("ffmpeg", ["-version"]);
  } catch {
    console.error("Cần cài ffmpeg (brew install ffmpeg).");
    process.exit(1);
  }

  const files = new Set<string>();
  for (const dir of SOURCE_DIRS) {
    let names: string[];
    try {
      names = fs.readdirSync(dir);
    } catch {
      continue;
    }
    for (const name of names) {
      if (isAllowedListeningAudioFile(name)) files.add(name);
    }
  }

  let changed = 0;
  for (const name of [...files].sort()) {
    const filePath =
      SOURCE_DIRS.map((dir) => path.join(dir, name)).find((candidate) => fs.existsSync(candidate)) ?? null;
    if (!filePath) continue;
    if (await prepareFile(filePath)) changed += 1;
  }

  console.log(changed ? `Done: ${changed} file(s) compressed.` : "Done: không file nào cần nén.");
}

const isDirectRun = process.argv[1]?.includes("prepare-listening-audio-for-upload");
if (isDirectRun) {
  void main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
