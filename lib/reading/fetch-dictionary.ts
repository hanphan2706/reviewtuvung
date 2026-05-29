import {
  getClientLookupCache,
  setClientLookupCache,
} from "@/lib/reading/lookup-client-cache";
import type { LookupParaphrase, ReadingLookupResult } from "@/lib/reading/lookup-types";

export type DictionaryLookup = ReadingLookupResult;

function isRetryableLookupStatus(status: number): boolean {
  return status === 408 || status === 429 || status >= 500;
}

async function readLookupError(res: Response, query: string): Promise<ReadingLookupResult> {
  try {
    const data = (await res.json()) as ReadingLookupResult & { error?: string };
    if (typeof data.error === "string" && data.error) {
      return normalizeLookup(
        {
          query: typeof data.query === "string" ? data.query : query,
          kind: data.kind === "phrase" ? "phrase" : "word",
          error: data.error,
          senses: [],
          paraphrases: [],
          source: "",
        },
        query,
      );
    }
  } catch {
    /* not JSON */
  }
  return {
    query,
    kind: "word",
    error: "Lỗi mạng hoặc máy chủ tra từ. Thử chọn lại cụm.",
    senses: [],
    paraphrases: [],
    source: "",
  };
}

async function postLookup(path: string, query: string): Promise<ReadingLookupResult> {
  const maxAttempts = 2;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const res = await fetch(path, {
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
        const errResult = await readLookupError(res, query);
        if (attempt < maxAttempts - 1 && isRetryableLookupStatus(res.status)) {
          await new Promise((r) => setTimeout(r, 400));
          continue;
        }
        return errResult;
      }

      return (await res.json()) as ReadingLookupResult;
    } catch {
      if (attempt < maxAttempts - 1) {
        await new Promise((r) => setTimeout(r, 400));
        continue;
      }
      return {
        query,
        kind: "word",
        error: "Lỗi mạng hoặc máy chủ tra từ. Thử chọn lại cụm.",
        senses: [],
        paraphrases: [],
        source: "",
      };
    }
  }

  return {
    query,
    kind: "word",
    error: "Lỗi mạng hoặc máy chủ tra từ. Thử chọn lại cụm.",
    senses: [],
    paraphrases: [],
    source: "",
  };
}

function normalizeLookup(data: ReadingLookupResult, query: string): DictionaryLookup {
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

/** Tra từ/cụm — cache trình duyệt + API server. */
export async function fetchDictionaryEntry(query: string): Promise<DictionaryLookup> {
  const cached = getClientLookupCache(query);
  if (cached) return cached;

  const data = await postLookup("/api/reading/lookup", query);
  const result = normalizeLookup(data, query);
  if (!result.error) setClientLookupCache(query, result);
  return result;
}

/** Bổ sung paraphrase Datamuse + VI (chạy nền sau tra nhanh). */
export async function fetchDictionaryEnrich(query: string): Promise<LookupParaphrase[]> {
  const res = await fetch("/api/reading/lookup/enrich", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ q: query }),
  });
  if (!res.ok) return [];
  const data = (await res.json()) as { paraphrases?: LookupParaphrase[] };
  return Array.isArray(data.paraphrases) ? data.paraphrases : [];
}

export { parseReadingSelection, singleWordOrPhrase } from "@/lib/reading/parse-selection";
export type { ReadingSelectionMode } from "@/lib/reading/parse-selection";
