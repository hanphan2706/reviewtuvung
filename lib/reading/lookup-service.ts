import type { DictEntry } from "@/lib/reading/lookup-internal-types";
import {
  collectParaphraseCandidates,
  collectScoredDefinitions,
  pickPronunciations,
} from "@/lib/reading/lookup-dictionary-utils";
import type {
  LookupParaphrase,
  LookupSense,
  ReadingLookupResult,
} from "@/lib/reading/lookup-types";

const POS_VI: Record<string, string> = {
  noun: "danh từ",
  verb: "động từ",
  adjective: "tính từ",
  adverb: "trạng từ",
  preposition: "giới từ",
  conjunction: "liên từ",
  pronoun: "đại từ",
  interjection: "thán từ",
};

const MAX_SENSES = 2;
const MAX_PARAPHRASES = 1;
const LOOKUP_CACHE_TTL_MS = 1000 * 60 * 60 * 12;

const translateCache = new Map<string, string>();
const lookupCache = new Map<string, { at: number; result: ReadingLookupResult }>();

function posVi(pos: string): string {
  return POS_VI[pos.toLowerCase()] ?? pos;
}

function normalizeLemma(word: string): string {
  return word
    .trim()
    .replace(/^[^a-zA-Z']+|[^a-zA-Z']+$/g, "")
    .toLowerCase();
}

async function lookupMyMemory(text: string): Promise<string | null> {
  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", text.slice(0, 400));
  url.searchParams.set("langpair", "en|vi");
  const email = process.env.MYMEMORY_CONTACT_EMAIL?.trim();
  if (email) url.searchParams.set("de", email);

  const res = await fetch(url.toString());
  if (!res.ok) return null;

  const data = (await res.json()) as {
    responseData?: { translatedText?: string };
  };
  const translated = data.responseData?.translatedText?.trim();
  if (!translated || /MYMEMORY WARNING/i.test(translated)) return null;
  return translated;
}

async function translateViCached(text: string): Promise<string> {
  const trimmed = text.trim();
  if (!trimmed) return "";
  const key = trimmed.toLowerCase();
  const hit = translateCache.get(key);
  if (hit) return hit;

  const translated = await lookupMyMemory(trimmed);
  const result = translated ?? trimmed;
  translateCache.set(key, result);
  return result;
}

async function translateManyParallel(texts: string[], concurrency = 4): Promise<Map<string, string>> {
  const unique = [...new Set(texts.map((t) => t.trim()).filter(Boolean))];
  const out = new Map<string, string>();

  for (const text of unique) {
    const key = text.toLowerCase();
    if (translateCache.has(key)) out.set(text, translateCache.get(key)!);
  }

  const pending = unique.filter((t) => !out.has(t));
  let index = 0;

  async function worker() {
    while (index < pending.length) {
      const text = pending[index++];
      const vi = await translateViCached(text);
      out.set(text, vi);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, pending.length || 1) }, () => worker()));
  return out;
}

async function fetchFreeDictionary(lemma: string): Promise<DictEntry[] | null> {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(lemma)}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    return (await res.json()) as DictEntry[];
  } catch {
    return null;
  }
}

function getCachedLookup(key: string): ReadingLookupResult | null {
  const hit = lookupCache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.at > LOOKUP_CACHE_TTL_MS) {
    lookupCache.delete(key);
    return null;
  }
  return hit.result;
}

function setCachedLookup(key: string, result: ReadingLookupResult) {
  lookupCache.set(key, { at: Date.now(), result });
}

async function buildSensesFromDictionary(entries: DictEntry[]): Promise<{
  senses: LookupSense[];
  paraphrases: LookupParaphrase[];
}> {
  const picked = collectScoredDefinitions(entries, MAX_SENSES);
  const primaryDefs = new Set(picked.map((p) => p.definitionEn.toLowerCase()));

  const toTranslate: string[] = [];
  for (const item of picked) {
    toTranslate.push(item.definitionEn);
    if (item.exampleEn) toTranslate.push(item.exampleEn);
  }

  const paraEns = collectParaphraseCandidates(entries, primaryDefs, MAX_PARAPHRASES);
  toTranslate.push(...paraEns);

  const translated = await translateManyParallel(toTranslate, 5);

  const senses: LookupSense[] = picked.map((item) => {
    const glossVi = translated.get(item.definitionEn) ?? item.definitionEn;
    const examples = item.exampleEn
      ? [
          {
            en: item.exampleEn,
            vi: translated.get(item.exampleEn),
          },
        ]
      : [];
    return {
      partOfSpeech: item.partOfSpeech,
      partOfSpeechVi: posVi(item.partOfSpeech),
      glossVi,
      definitionEn: item.definitionEn,
      examples,
    };
  });

  const paraphrases: LookupParaphrase[] = paraEns.map((en) => {
    const vi = translated.get(en);
    return { en, vi: vi && vi !== en ? vi : undefined };
  });

  return { senses, paraphrases };
}

async function lookupWord(query: string): Promise<ReadingLookupResult> {
  const lemma = normalizeLemma(query);
  if (!lemma) {
    return {
      query,
      kind: "word",
      error: "Không nhận diện được từ.",
      senses: [],
      paraphrases: [],
      source: "",
    };
  }

  const cacheKey = `word:${lemma}`;
  const cached = getCachedLookup(cacheKey);
  if (cached) return { ...cached, query };

  const entries = await fetchFreeDictionary(lemma);
  if (!entries?.length) {
    const glossVi = await translateViCached(query);
    if (glossVi && glossVi !== query) {
      const result: ReadingLookupResult = {
        query,
        kind: "word",
        senses: [
          {
            partOfSpeech: "word",
            partOfSpeechVi: "từ",
            glossVi,
            definitionEn: query,
            examples: [],
          },
        ],
        paraphrases: [],
        source: "MyMemory",
      };
      setCachedLookup(cacheKey, result);
      return result;
    }
    return {
      query,
      kind: "word",
      error: "Không tra được từ này. Thử dạng số ít hoặc từ khác.",
      senses: [],
      paraphrases: [],
      source: "",
    };
  }

  const pronunciation = pickPronunciations(entries[0]?.phonetics);
  const { senses, paraphrases } = await buildSensesFromDictionary(entries);

  if (!senses.length) {
    return {
      query,
      kind: "word",
      error: "Không có nghĩa phù hợp (đọc hiểu). Thử từ khác.",
      senses: [],
      paraphrases: [],
      source: "",
    };
  }

  const result: ReadingLookupResult = {
    query,
    kind: "word",
    pronunciation: Object.keys(pronunciation).length ? pronunciation : undefined,
    senses,
    paraphrases,
    source: "FreeDictionary+MyMemory",
  };
  setCachedLookup(cacheKey, result);
  return result;
}

async function lookupPhrase(query: string): Promise<ReadingLookupResult> {
  const cacheKey = `phrase:${query.toLowerCase()}`;
  const cached = getCachedLookup(cacheKey);
  if (cached) return { ...cached, query };

  const glossVi = await translateViCached(query);
  if (!glossVi || glossVi === query) {
    return {
      query,
      kind: "phrase",
      error: "Không dịch được cụm này. Thử cụm ngắn hơn.",
      senses: [],
      paraphrases: [],
      source: "",
    };
  }

  const result: ReadingLookupResult = {
    query,
    kind: "phrase",
    phraseGlossVi: glossVi,
    senses: [],
    paraphrases: [],
    source: "MyMemory",
  };
  setCachedLookup(cacheKey, result);
  return result;
}

export async function lookupReadingTerm(query: string): Promise<ReadingLookupResult> {
  const text = query.trim();
  if (text.length < 2) {
    return {
      query: text,
      kind: "word",
      error: "Chọn một từ hoặc cụm ngắn để tra.",
      senses: [],
      paraphrases: [],
      source: "",
    };
  }

  const isSingleWord = !/\s/.test(text);
  if (isSingleWord) return lookupWord(text);
  return lookupPhrase(text);
}
