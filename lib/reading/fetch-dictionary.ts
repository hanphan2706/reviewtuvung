import type { ReadingLookupResult } from "@/lib/reading/lookup-types";

export type DictionaryLookup = ReadingLookupResult;

/** Tra từ/cụm qua API server (miễn phí: Free Dictionary + MyMemory). */
export async function fetchDictionaryEntry(query: string): Promise<DictionaryLookup> {
  const res = await fetch("/api/reading/lookup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ q: query }),
  });

  if (res.status === 401) {
    return {
      query,
      kind: "word",
      error: "Đăng nhập để tra từ khi đọc bài.",
      senses: [],
      paraphrases: [],
      source: "",
    };
  }

  if (!res.ok) {
    return {
      query,
      kind: "word",
      error: "Lỗi mạng hoặc máy chủ tra từ.",
      senses: [],
      paraphrases: [],
      source: "",
    };
  }

  const data = (await res.json()) as ReadingLookupResult;
  return {
    query: typeof data.query === "string" ? data.query : query,
    kind: data.kind === "phrase" ? "phrase" : "word",
    error: typeof data.error === "string" ? data.error : undefined,
    pronunciation: data.pronunciation,
    senses: Array.isArray(data.senses) ? data.senses : [],
    paraphrases: Array.isArray(data.paraphrases) ? data.paraphrases : [],
    phraseGlossVi: typeof data.phraseGlossVi === "string" ? data.phraseGlossVi : undefined,
    source: typeof data.source === "string" ? data.source : "",
  };
}

export function singleWordOrPhrase(text: string): string | null {
  const t = text.trim();
  if (t.length < 2 || t.length > 48) return null;
  if (/\n/.test(t)) return null;
  const words = t.split(/\s+/).filter(Boolean);
  if (words.length > 4) return null;
  return t;
}
