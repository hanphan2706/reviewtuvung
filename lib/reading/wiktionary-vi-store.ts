import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { EnViWiktionaryIndex, WiktionaryViByPos } from "@/lib/reading/wiktionary-vi-types";
import { STARDICT_LOCAL_PATH } from "@/lib/reading/stardict-storage";

const WIKI_PATH = join(process.cwd(), "data/dictionary/en-vi-wiktionary.json");
const STARDICT_PATH = join(process.cwd(), STARDICT_LOCAL_PATH);

let wikiCache: EnViWiktionaryIndex | null = null;
let stardictCache: EnViWiktionaryIndex | null = null;

export function getStardictIndexCache(): EnViWiktionaryIndex | null {
  return stardictCache;
}

export function setStardictIndexCache(index: EnViWiktionaryIndex): void {
  stardictCache = index;
}

function loadWikiIndex(): EnViWiktionaryIndex {
  if (wikiCache) return wikiCache;
  try {
    const raw = readFileSync(WIKI_PATH, "utf8");
    wikiCache = JSON.parse(raw) as EnViWiktionaryIndex;
  } catch {
    wikiCache = {};
  }
  return wikiCache;
}

function loadStardictIndex(): EnViWiktionaryIndex {
  if (stardictCache) return stardictCache;
  try {
    const raw = readFileSync(STARDICT_PATH, "utf8");
    stardictCache = JSON.parse(raw) as EnViWiktionaryIndex;
  } catch {
    stardictCache = {};
  }
  return stardictCache;
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
  return Object.values(entry).flat();
}

export function pickViGlossFromIndex(
  index: EnViWiktionaryIndex,
  lemma: string,
  primaryPos: string,
  headword?: string,
): string | null {
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

/** Nghĩa VI từ chỉ mục Wiktionary (passage merge) rồi StarDict offline. */
export function wiktionaryViGloss(
  lemma: string,
  primaryPos: string,
  headword?: string,
): string | null {
  const fromWiki = pickViGlossFromIndex(loadWikiIndex(), lemma, primaryPos, headword);
  if (fromWiki) return fromWiki;
  return pickViGlossFromIndex(loadStardictIndex(), lemma, primaryPos, headword);
}

export function wiktionaryIndexSize(): number {
  return Object.keys(loadWikiIndex()).length;
}
