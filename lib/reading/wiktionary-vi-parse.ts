import type { WiktionaryViByPos } from "@/lib/reading/wiktionary-vi-types";

const POS_HEADER: Record<string, keyof WiktionaryViByPos> = {
  noun: "noun",
  verb: "verb",
  adjective: "adjective",
  adverb: "adverb",
  preposition: "preposition",
  conjunction: "word",
  pronoun: "word",
  interjection: "word",
  article: "word",
  determiner: "word",
};

function mapPosHeader(header: string): keyof WiktionaryViByPos {
  const key = header.toLowerCase().replace(/[^a-z].*$/, "").trim();
  return POS_HEADER[key] ?? "word";
}

function cleanViToken(raw: string): string {
  let vi = raw.trim();
  vi = vi.replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, "$1");
  vi = vi.replace(/<[^>]+>/g, "");
  vi = vi.split(",")[0]?.trim() ?? vi;
  if (vi.length > 80 || /[{}]/.test(vi)) return "";
  return vi;
}

/** Trích {{t|vi|…}} / {{tt|vi|…}} theo section ===POS=== trong wikitext EN Wiktionary. */
export function parseWiktionaryViFromWikitext(wikitext: string): WiktionaryViByPos {
  const out: WiktionaryViByPos = {};
  let currentPos: keyof WiktionaryViByPos = "word";

  const lines = wikitext.split("\n");
  for (const line of lines) {
    const h3 = line.match(/^===([^=].*?)===\s*$/);
    if (h3) {
      currentPos = mapPosHeader(h3[1] ?? "");
      continue;
    }

    const templates = line.matchAll(/\{\{(?:t|tt|t-check|tt\+)\|(?:vi|vi-tr)\|([^}|#\n]+)/gi);
    for (const m of templates) {
      const vi = cleanViToken(m[1] ?? "");
      if (!vi) continue;
      const bucket = out[currentPos] ?? [];
      if (!bucket.includes(vi)) bucket.push(vi);
      out[currentPos] = bucket;
    }

    for (const m of line.matchAll(/\|vi\|([^}|#\n]{2,60})/gi)) {
      const vi = cleanViToken(m[1] ?? "");
      if (!vi || vi.includes(":")) continue;
      const bucket = out[currentPos] ?? [];
      if (!bucket.includes(vi)) bucket.push(vi);
      out[currentPos] = bucket;
    }

    const bulletVi = line.match(/^\*\s*Vietnamese:\s*\{\{(?:t|tt)\+?\|vi\|([^}|#\n]+)/i);
    if (bulletVi) {
      const vi = cleanViToken(bulletVi[1] ?? "");
      if (vi) {
        const bucket = out[currentPos] ?? [];
        if (!bucket.includes(vi)) bucket.push(vi);
        out[currentPos] = bucket;
      }
    }
  }

  return out;
}
