/**
 * Gộp từ vựng curated bài đọc + core glossary vào data/dictionary/en-vi-wiktionary.json
 * (không cần mạng — bổ sung offline trước khi chạy dictionary:import-vi).
 *
 * Chạy: npm run dictionary:merge-passage-vi
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { CORE_EN_VI_GLOSSARY } from "../lib/reading/core-en-vi-glossary";
import { listAllCuratedPassageVocab } from "../lib/reading/passage-vocabulary";
import { toDictionaryHeadword } from "../lib/reading/lemma-headword";
import type { EnViWiktionaryIndex, WiktionaryViByPos } from "../lib/reading/wiktionary-vi-types";

const OUT_PATH = join(process.cwd(), "data/dictionary/en-vi-wiktionary.json");

function loadExisting(): EnViWiktionaryIndex {
  try {
    return JSON.parse(readFileSync(OUT_PATH, "utf8")) as EnViWiktionaryIndex;
  } catch {
    return {};
  }
}

function mergeGloss(index: EnViWiktionaryIndex, headword: string, gloss: string): boolean {
  const key = headword.toLowerCase().trim();
  const clean = gloss.trim();
  if (!key || !clean || /\s/.test(key)) return false;

  const prev = index[key] ?? {};
  const bucket = prev.word ?? [];
  if (bucket.includes(clean)) return false;
  prev.word = [...bucket, clean];
  index[key] = prev;
  return true;
}

function mergeIndex(index: EnViWiktionaryIndex, source: EnViWiktionaryIndex): number {
  let added = 0;
  for (const [headword, byPos] of Object.entries(source)) {
    const key = headword.toLowerCase();
    const prev = index[key] ?? {};
    for (const [pos, list] of Object.entries(byPos) as [keyof WiktionaryViByPos, string[] | undefined][]) {
      if (!list?.length) continue;
      const merged = [...new Set([...(prev[pos] ?? []), ...list])];
      if (merged.length > (prev[pos]?.length ?? 0)) added++;
      prev[pos] = merged;
    }
    index[key] = prev;
  }
  return added;
}

function main() {
  const index = loadExisting();
  const before = Object.keys(index).length;
  let added = 0;

  for (const item of listAllCuratedPassageVocab()) {
    const term = item.term.trim();
    if (!term || /\s/.test(term)) continue;
    const headword = toDictionaryHeadword(term.toLowerCase());
    if (mergeGloss(index, headword, item.definitionVi)) added++;
  }

  mergeIndex(index, CORE_EN_VI_GLOSSARY);

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, `${JSON.stringify(index, null, 0)}\n`, "utf8");

  const after = Object.keys(index).length;
  console.log(`Merged passage + core → ${OUT_PATH}`);
  console.log(`Headwords: ${before} → ${after} (+${after - before}), new gloss rows: ${added}`);
}

main();
