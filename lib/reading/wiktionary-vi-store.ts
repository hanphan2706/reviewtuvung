import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { EnViWiktionaryIndex, WiktionaryViByPos } from "@/lib/reading/wiktionary-vi-types";

const INDEX_PATH = join(process.cwd(), "data/dictionary/en-vi-wiktionary.json");

let indexCache: EnViWiktionaryIndex | null = null;

function loadIndex(): EnViWiktionaryIndex {
  if (indexCache) return indexCache;
  try {
    const raw = readFileSync(INDEX_PATH, "utf8");
    indexCache = JSON.parse(raw) as EnViWiktionaryIndex;
  } catch {
    indexCache = {};
  }
  return indexCache;
}

function normalizeLookupPos(primaryPos: string): keyof WiktionaryViByPos {
  const p = primaryPos.toLowerCase();
  if (p === "noun") return "noun";
  if (p === "verb") return "verb";
  if (p === "adjective" || p === "adj") return "adjective";
  if (p === "adverb" || p === "adv") return "adverb";
  if (p === "preposition" || p === "prep") return "preposition";
  return "word";
}

function pickGlossList(entry: WiktionaryViByPos, pos: string): string[] {
  const key = normalizeLookupPos(pos);
  const direct = entry[key];
  if (direct?.length) return direct;
  const any = Object.values(entry).flat();
  return any;
}

/** Nghĩa VI từ chỉ mục Wiktionary đã import (kiểu từ điển, không dịch máy câu EN). */
export function wiktionaryViGloss(
  lemma: string,
  primaryPos: string,
  headword?: string,
): string | null {
  const index = loadIndex();
  const keys = [lemma.toLowerCase(), headword?.toLowerCase()].filter(Boolean) as string[];

  for (const key of keys) {
    const entry = index[key];
    if (!entry) continue;
    const list = pickGlossList(entry, primaryPos);
    if (!list.length) continue;
    return [...new Set(list)].slice(0, 4).join("; ");
  }
  return null;
}

export function wiktionaryIndexSize(): number {
  return Object.keys(loadIndex()).length;
}
