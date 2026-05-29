import type { EnViWiktionaryIndex, WiktionaryViByPos } from "@/lib/reading/wiktionary-vi-types";

const CJK_RE = /[\u4e00-\u9fff\u3400-\u4dbf]/;
const VI_RE = /[\u00c0-\u1ef9]/i;

const POS_MAP: Record<string, keyof WiktionaryViByPos> = {
  "danh từ": "noun",
  "động từ": "verb",
  "tính từ": "adjective",
  "trạng từ": "adverb",
  "giới từ": "preposition",
};

const SKIP_SECTION =
  /đồng nghĩa|nguồn gốc|phát âm|biến thể|thành ngữ|từ viết tắt|chú thích/i;

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&bull;/gi, "•")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function splitGlossParts(raw: string): string[] {
  const clean = decodeHtmlEntities(raw)
    .replace(/\([^)]{0,80}\)/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!clean || !VI_RE.test(clean) || CJK_RE.test(clean)) return [];

  return clean
    .split(/[,;；、]/)
    .map((p) => p.trim().replace(/^[-–—]\s*/, ""))
    .filter((p) => p.length >= 2 && p.length <= 56 && VI_RE.test(p) && !CJK_RE.test(p))
    .slice(0, 4);
}

function pushGloss(entry: WiktionaryViByPos, pos: keyof WiktionaryViByPos, gloss: string) {
  const parts = splitGlossParts(gloss);
  if (!parts.length) return;
  const bucket = entry[pos] ?? [];
  for (const p of parts) {
    if (!bucket.includes(p)) bucket.push(p);
  }
  entry[pos] = bucket.slice(0, 6);
}

/** Trích nghĩa VI ngắn từ HTML StarDict (tudien en-vi). */
export function extractViGlossesFromStardictHtml(html: string): WiktionaryViByPos {
  const entry: WiktionaryViByPos = {};
  const source = html;

  const defRe = /<b>\d+\.(?:&nbsp;|[\s\u00a0])+<\/b><b>([^<]+)<\/b>/gi;
  const posRe =
    /■\s*(?:\([^)]*\)\s*)?(danh từ|động từ|tính từ|trạng từ|giới từ)\b/gi;

  let currentPos: keyof WiktionaryViByPos = "word";
  let lastIndex = 0;
  let m: RegExpExecArray | null;

  const posMatches: { index: number; pos: keyof WiktionaryViByPos }[] = [];
  while ((m = posRe.exec(source)) !== null) {
    const label = m[1]!.toLowerCase();
    const mapped = POS_MAP[label];
    if (mapped) posMatches.push({ index: m.index, pos: mapped });
  }

  if (!posMatches.length) {
    while ((m = defRe.exec(source)) !== null) {
      pushGloss(entry, "word", m[1]!);
    }
    return entry;
  }

  for (let i = 0; i < posMatches.length; i++) {
    const start = posMatches[i]!.index;
    const end = posMatches[i + 1]?.index ?? source.length;
    const section = source.slice(start, end);
    if (SKIP_SECTION.test(section.slice(0, 80))) continue;

    currentPos = posMatches[i]!.pos;
    const sectionDefRe = /<b>\d+\.(?:&nbsp;|[\s\u00a0])+<\/b><b>([^<]+)<\/b>/gi;
    let dm: RegExpExecArray | null;
    while ((dm = sectionDefRe.exec(section)) !== null) {
      pushGloss(entry, currentPos, dm[1]!);
    }
    lastIndex = end;
  }

  if (!Object.keys(entry).length) {
    defRe.lastIndex = 0;
    while ((m = defRe.exec(source)) !== null) {
      pushGloss(entry, "word", m[1]!);
    }
  }

  return entry;
}

export function stardictEntryToIndexSlice(
  headword: string,
  html: string,
): EnViWiktionaryIndex | null {
  const byPos = extractViGlossesFromStardictHtml(html);
  const flat = Object.values(byPos).flat();
  if (!flat.length) return null;
  const key = headword.toLowerCase().trim();
  if (!key) return null;
  return { [key]: byPos };
}

export function isImportableHeadword(word: string, includePhrases: boolean): boolean {
  const w = word.trim();
  if (!w || w.length > 48) return false;
  if (includePhrases) return /^[a-z0-9][a-z0-9' -]*$/i.test(w);
  return /^[a-z][a-z'-]{0,31}$/i.test(w) && !/\s/.test(w);
}
