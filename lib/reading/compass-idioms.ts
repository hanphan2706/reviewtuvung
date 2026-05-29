import type { PassageVocabItem } from "@/lib/reading/passage-vocabulary";

function cleanTerm(raw: string): string {
  return raw
    .replace(/^[\s♦•\uF0B7\-–]+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Parse khối IDIOMS trong file Compass .txt hoặc dạng `term [ definition ]`. */
export function parseCompassIdiomsText(text: string): PassageVocabItem[] {
  if (!text.trim()) return [];

  const items: PassageVocabItem[] = [];
  const seen = new Set<string>();

  const slice = (() => {
    const idx = text.search(/find these idioms/i);
    return idx >= 0 ? text.slice(idx) : text;
  })();

  const lines = slice.split("\n").map((l) => l.trim()).filter(Boolean);

  for (const line of lines) {
    if (/^idioms?$/i.test(line) || /find these idioms/i.test(line) || /^idiomatic/i.test(line)) {
      continue;
    }
    if (/^fill in the blank/i.test(line)) continue;

    const pipe = line.match(/^(.+?)\s*\|\s*(.+)$/);
    if (pipe?.[1] && pipe[2]) {
      const term = cleanTerm(pipe[1]);
      if (term && !seen.has(term.toLowerCase())) {
        seen.add(term.toLowerCase());
        items.push({
          term,
          definitionVi: pipe[2].trim(),
          level: "B1-B2",
        });
      }
      continue;
    }

    const bracket = line.match(/^(.+?)\s*\[\s*(.+?)\s*\]$/);
    if (bracket?.[1] && bracket[2]) {
      const term = cleanTerm(bracket[1]);
      if (term && !seen.has(term.toLowerCase())) {
        seen.add(term.toLowerCase());
        items.push({
          term,
          definitionVi: bracket[2].trim(),
          level: "B1-B2",
        });
      }
    }
  }

  return items;
}

/** Idioms từ file .txt trước; thiếu 5 thì bổ sung từ extra curated theo articleId. */
export function buildCompassPassageVocabulary(
  idiomsText: string,
  fallback: PassageVocabItem[] = [],
): PassageVocabItem[] {
  const fromIdioms = parseCompassIdiomsText(idiomsText);
  const out = [...fromIdioms];
  const seen = new Set(out.map((i) => i.term.toLowerCase()));

  for (const item of fallback) {
    if (out.length >= 5) break;
    const key = item.term.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }

  return out.slice(0, 5);
}
