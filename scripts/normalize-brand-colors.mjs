#!/usr/bin/env node
/**
 * One-off normalizer: #FFFFFF/#fff → #FAFAFA, dark tones → #000001.
 * Skips hex codes that merely contain "fff" as substring (e.g. #fffaf2).
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "data"]);
const EXT = new Set([".css", ".tsx", ".ts", ".html", ".mjs"]);

const DARK_REPLACEMENTS = [
  [/#1[cC]1[bB]1[cC]/g, "#000001"],
  [/#1[bB]1[bB]1[eE]/g, "#000001"],
  [/#3[aA]3[aA]40/g, "#000001"],
  [/#000000/g, "#000001"],
];

function normalizeContent(text) {
  let out = text;

  out = out.replace(/#FFFFFF/g, "#FAFAFA").replace(/#ffffff/g, "#FAFAFA");

  // Standalone #fff not followed by more hex (avoids #fffaf2, #fff59d, …)
  out = out.replace(/#fff(?![0-9a-fA-F])/g, "#FAFAFA");

  for (const [pattern, replacement] of DARK_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }

  // Dark hover grays on buttons → black/90 (theme black = #000001)
  out = out.replace(/hover:bg-\[#333\]/g, "hover:bg-black/90");
  out = out.replace(/hover:bg-\[#000001\]/g, "hover:bg-black/90");
  out = out.replace(/hover:bg-black\/90/g, "hover:bg-black/90"); // idempotent

  return out;
}

async function walk(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, files);
    } else if (EXT.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

const files = await walk(ROOT);
let changed = 0;

for (const file of files) {
  if (file.endsWith("scripts/normalize-brand-colors.mjs")) continue;
  const before = await readFile(file, "utf8");
  const after = normalizeContent(before);
  if (after !== before) {
    await writeFile(file, after, "utf8");
    changed += 1;
    console.log(path.relative(ROOT, file));
  }
}

console.log(`\nUpdated ${changed} file(s).`);
