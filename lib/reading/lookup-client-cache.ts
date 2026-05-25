import type { ReadingLookupResult } from "@/lib/reading/lookup-types";

const CACHE_KEY = "reading-lookup-v1";
const TTL_MS = 1000 * 60 * 60 * 12;
const MAX_ENTRIES = 120;

type CacheEntry = { at: number; result: ReadingLookupResult };

function readStore(): Record<string, CacheEntry> {
  if (typeof sessionStorage === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, CacheEntry>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, CacheEntry>) {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(store));
  } catch {
    /* quota */
  }
}

export function getClientLookupCache(query: string): ReadingLookupResult | null {
  const key = query.trim().toLowerCase();
  const hit = readStore()[key];
  if (!hit) return null;
  if (Date.now() - hit.at > TTL_MS) return null;
  return { ...hit.result, query: query.trim() };
}

export function setClientLookupCache(query: string, result: ReadingLookupResult) {
  const key = query.trim().toLowerCase();
  const store = readStore();
  store[key] = { at: Date.now(), result: { ...result, query: query.trim() } };
  const keys = Object.keys(store).sort((a, b) => store[b]!.at - store[a]!.at);
  while (keys.length > MAX_ENTRIES) {
    const drop = keys.pop();
    if (drop) delete store[drop];
  }
  writeStore(store);
}
