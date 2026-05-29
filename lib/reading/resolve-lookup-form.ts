import { toDictionaryHeadword } from "@/lib/reading/lemma-headword";

export type LookupFormResolution = {
  surface: string;
  headword: string;
  formNote?: string;
};

function normalizeSurface(word: string): string {
  return word
    .trim()
    .replace(/^[^a-zA-Z']+|[^a-zA-Z']+$/g, "")
    .toLowerCase();
}

function describeFormChange(surface: string, headword: string): string | undefined {
  if (surface === headword) return undefined;

  if (surface.endsWith("ing") && headword.length < surface.length) {
    return `Dạng -ing (${surface}) → từ gốc ${headword}`;
  }
  if (headword !== surface) {
    if (surface.endsWith("ed") || surface.endsWith("en") || surface === "built") {
      return `Dạng quá khứ / quá khứ phân từ (${surface}) → từ gốc ${headword}`;
    }
  }
  if (surface.endsWith("s") && !surface.endsWith("ss") && headword.length < surface.length) {
    return `Dạng số nhiều (${surface}) → từ gốc ${headword}`;
  }
  if (surface.endsWith("ies") && headword.endsWith("y")) {
    return `Dạng số nhiều (${surface}) → từ gốc ${headword}`;
  }

  return `${surface} → ${headword}`;
}

/** Chuẩn hoá từ bôi đen → headword tra từ điển + gợi ý dạng từ (UI). */
export function resolveLookupForm(raw: string): LookupFormResolution | null {
  const surface = normalizeSurface(raw);
  if (!surface) return null;
  const headword = toDictionaryHeadword(surface);
  return {
    surface,
    headword,
    formNote: describeFormChange(surface, headword),
  };
}
