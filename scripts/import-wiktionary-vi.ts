/**
 * Import nghĩa tiếng Việt từ EN Wiktionary → data/dictionary/en-vi-wiktionary.json
 *
 * Chạy: npx tsx scripts/import-wiktionary-vi.ts
 * Tuỳ chọn: --words path/to/words.txt  --delay 300  --limit 200
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { READING_HUB_ARTICLES } from "../lib/reading/hub-articles";
import { toDictionaryHeadword } from "../lib/reading/lemma-headword";
import { parseWiktionaryViFromWikitext } from "../lib/reading/wiktionary-vi-parse";
import type { EnViWiktionaryIndex } from "../lib/reading/wiktionary-vi-types";

const OUT_PATH = join(process.cwd(), "data/dictionary/en-vi-wiktionary.json");
const API = "https://en.wiktionary.org/w/api.php";

const STOPWORDS = new Set(
  [
    "the",
    "and",
    "for",
    "are",
    "was",
    "were",
    "from",
    "that",
    "this",
    "with",
    "have",
    "has",
    "had",
    "not",
    "but",
    "they",
    "their",
    "them",
    "you",
    "your",
    "will",
    "would",
    "can",
    "could",
    "also",
    "into",
    "about",
    "when",
    "where",
    "which",
    "while",
    "who",
    "how",
    "few",
    "first",
    "than",
    "then",
    "there",
    "these",
    "those",
    "been",
    "being",
    "such",
    "only",
    "other",
    "more",
    "most",
    "some",
    "many",
    "much",
    "like",
    "just",
    "over",
    "after",
    "before",
    "between",
    "through",
    "during",
    "under",
    "above",
    "below",
  ].map((w) => w.toLowerCase()),
);

const ACADEMIC_SEED = [
  "include",
  "cause",
  "effect",
  "increase",
  "decrease",
  "important",
  "develop",
  "environment",
  "research",
  "study",
  "analysis",
  "significant",
  "available",
  "consider",
  "provide",
  "require",
  "support",
  "process",
  "structure",
  "technology",
  "education",
  "population",
  "economic",
  "political",
  "social",
  "medical",
  "scientific",
  "natural",
  "physical",
  "mental",
  "wrinkle",
  "organize",
  "aquatic",
  "manatee",
  "procrastination",
  "judgement",
  "stress",
  "wildlife",
  "psychology",
  "including",
  "included",
  "organised",
  "organized",
  "wrinkled",
  "manatees",
  "procrastinate",
  "judgment",
  "judgement",
  "umpire",
  "minor",
  "league",
  "argument",
  "present",
  "systematic",
  "judgement",
  "stress",
  "judging",
];

function tokenizeEnglish(text: string): string[] {
  return text
    .toLowerCase()
    .match(/[a-z][a-z'-]{2,}/g)
    ?.filter((w) => w.length <= 24) ?? [];
}

function seedFromHub(): string[] {
  const blob = READING_HUB_ARTICLES.map((a) => `${a.title} ${a.subheadline}`).join(" ");
  return tokenizeEnglish(blob);
}

function loadExisting(): EnViWiktionaryIndex {
  try {
    return JSON.parse(readFileSync(OUT_PATH, "utf8")) as EnViWiktionaryIndex;
  } catch {
    return {};
  }
}

function parseArgs(argv: string[]) {
  let wordsFile: string | null = null;
  let delayMs = 280;
  let limit = 0;
  let academicOnly = false;
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--words" && argv[i + 1]) {
      wordsFile = argv[++i];
    } else if (argv[i] === "--delay" && argv[i + 1]) {
      delayMs = Number(argv[++i]) || delayMs;
    } else if (argv[i] === "--limit" && argv[i + 1]) {
      limit = Number(argv[++i]) || 0;
    } else if (argv[i] === "--academic-only") {
      academicOnly = true;
    }
  }
  return { wordsFile, delayMs, limit, academicOnly };
}

function buildWordList(wordsFile: string | null, academicOnly: boolean): string[] {
  const set = new Set<string>(ACADEMIC_SEED.map((w) => w.toLowerCase()));
  if (!academicOnly) {
    for (const w of seedFromHub()) {
      if (STOPWORDS.has(w)) continue;
      if (w.length < 4) continue;
      set.add(toDictionaryHeadword(w));
      set.add(w);
    }
  }
  if (wordsFile) {
    const extra = readFileSync(wordsFile, "utf8");
    for (const w of tokenizeEnglish(extra)) {
      set.add(toDictionaryHeadword(w));
      set.add(w);
    }
  }
  return [...set].sort();
}

async function fetchWikitextOnce(title: string): Promise<string | null> {
  const url = new URL(API);
  url.searchParams.set("action", "query");
  url.searchParams.set("format", "json");
  url.searchParams.set("prop", "revisions");
  url.searchParams.set("rvprop", "content");
  url.searchParams.set("rvslots", "main");
  url.searchParams.set("titles", title);
  url.searchParams.set("origin", "*");

  const res = await fetch(url.toString(), {
    headers: { "User-Agent": "anthichtuhoc-dictionary-import/1.0 (educational; contact: local)" },
  });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    query?: { pages?: Record<string, { missing?: boolean; revisions?: { slots?: { main?: { "*": string } } }[] }> };
  };
  const pages = data.query?.pages ?? {};
  const page = Object.values(pages)[0];
  if (!page || page.missing) return null;
  return page.revisions?.[0]?.slots?.main?.["*"] ?? null;
}

async function fetchWikitext(word: string): Promise<string | null> {
  const titles = [word, word.charAt(0).toUpperCase() + word.slice(1), toDictionaryHeadword(word)];
  const seen = new Set<string>();
  for (const title of titles) {
    if (seen.has(title)) continue;
    seen.add(title);
    for (let attempt = 0; attempt < 2; attempt++) {
      const text = await fetchWikitextOnce(title);
      if (text) return text;
      await sleep(400);
    }
  }
  return null;
}

function mergeEntry(
  index: EnViWiktionaryIndex,
  headword: string,
  parsed: ReturnType<typeof parseWiktionaryViFromWikitext>,
): boolean {
  const hasAny = Object.values(parsed).some((arr) => arr?.length);
  if (!hasAny) return false;
  const prev = index[headword] ?? {};
  for (const [pos, list] of Object.entries(parsed)) {
    const key = pos as keyof typeof prev;
    const merged = [...new Set([...(prev[key] ?? []), ...(list ?? [])])];
    if (merged.length) prev[key] = merged;
  }
  index[headword] = prev;
  return true;
}

async function sleep(ms: number) {
  await new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const { wordsFile, delayMs, limit, academicOnly } = parseArgs(process.argv);
  const words = buildWordList(wordsFile, academicOnly);
  const toFetch = limit > 0 ? words.slice(0, limit) : words;

  const index = loadExisting();
  let added = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`Import Wiktionary VI → ${OUT_PATH}`);
  console.log(`Từ trong hàng đợi: ${toFetch.length} (đã có trong file: ${Object.keys(index).length})`);

  for (let i = 0; i < toFetch.length; i++) {
    const word = toFetch[i]!;
    const headword = toDictionaryHeadword(word);
    const key = headword.toLowerCase();

    if (index[key] && Object.values(index[key]).flat().length > 0) {
      skipped++;
      continue;
    }

    process.stdout.write(`[${i + 1}/${toFetch.length}] ${word} … `);
    const wikitext = await fetchWikitext(word);
    if (!wikitext) {
      failed++;
      console.log("miss");
    } else {
      const parsed = parseWiktionaryViFromWikitext(wikitext);
      if (mergeEntry(index, key, parsed)) {
        added++;
        console.log("ok");
      } else {
        failed++;
        console.log("no vi");
      }
    }

    await sleep(delayMs);
  }

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, `${JSON.stringify(index, null, 0)}\n`, "utf8");

  console.log(`\nXong. Thêm mới: ${added}, bỏ qua (đã có): ${skipped}, không có VI: ${failed}`);
  console.log(`Tổng headword trong file: ${Object.keys(index).length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
