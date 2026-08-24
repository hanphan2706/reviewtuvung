import type { DictEntry } from "@/lib/reading/lookup-internal-types";
import {
  collectParaphrases,
  collectParaphrasesGlossaryOnly,
} from "@/lib/reading/collect-paraphrases";
import { collectScoredDefinitions, pickPronunciations } from "@/lib/reading/lookup-dictionary-utils";
import { curatedCollocationGloss } from "@/lib/reading/collocation-glossary";
import { toDictionaryHeadword } from "@/lib/reading/lemma-headword";
import {
  isLiteralDefinitionTranslation,
  isSuspiciousGloss,
  isSuspiciousPhraseTranslation,
  pickDisplayGlossVi,
} from "@/lib/reading/lookup-translation-quality";
import { resolveLookupForm } from "@/lib/reading/resolve-lookup-form";
import { ensureStardictIndexLoaded } from "@/lib/reading/stardict-index-loader";
import { isGoogleTranslateConfigured, translateGoogleVi } from "@/lib/reading/google-translate";
import { parseReadingSelection } from "@/lib/reading/parse-selection";
import { vietnameseGlossaryGloss } from "@/lib/reading/vietnamese-gloss-glossary";
import type {
  LookupParaphrase,
  LookupSense,
  ReadingLookupResult,
} from "@/lib/reading/lookup-types";
import type { ScoredDefinition } from "@/lib/reading/lookup-dictionary-utils";

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

const FETCH_TIMEOUT_MS = 2800;
const MYMEMORY_RETRY_TIMEOUT_MS = 4500;

async function fetchWithTimeout(
  url: string,
  init?: RequestInit,
  timeoutMs = FETCH_TIMEOUT_MS,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function lookupMyMemoryOnce(text: string, timeoutMs: number): Promise<string | null> {
  try {
    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.set("q", text.slice(0, 400));
    url.searchParams.set("langpair", "en|vi");
    const email = process.env.MYMEMORY_CONTACT_EMAIL?.trim();
    if (email) url.searchParams.set("de", email);

    const res = await fetchWithTimeout(url.toString(), undefined, timeoutMs);
    if (!res.ok) return null;

    const data = (await res.json()) as {
      responseData?: { translatedText?: string };
    };
    const translated = data.responseData?.translatedText?.trim();
    if (!translated || /MYMEMORY WARNING/i.test(translated)) return null;
    return translated;
  } catch {
    return null;
  }
}

/** MyMemory hay chậm lần đầu — không để timeout làm API 500. */
async function lookupMyMemory(text: string): Promise<string | null> {
  const hit = await lookupMyMemoryOnce(text, FETCH_TIMEOUT_MS);
  if (hit) return hit;
  await new Promise((r) => setTimeout(r, 200));
  return lookupMyMemoryOnce(text, MYMEMORY_RETRY_TIMEOUT_MS);
}

async function translateViBest(
  text: string,
  options?: { preferGoogle?: boolean; phrase?: boolean },
): Promise<{ vi: string; provider: string }> {
  const trimmed = text.trim();
  if (!trimmed) return { vi: "", provider: "" };
  const key = trimmed.toLowerCase();
  const hit = translateCache.get(key);
  if (hit) return { vi: hit, provider: "cached" };

  const rejectTranslation = (vi: string) =>
    options?.phrase
      ? isSuspiciousPhraseTranslation(trimmed, vi)
      : isSuspiciousGloss(trimmed, vi);

  const tryGoogle = async () => {
    const g = await translateGoogleVi(trimmed);
    if (!g || rejectTranslation(g)) return null;
    return g;
  };
  const tryMyMemory = async () => {
    const m = await lookupMyMemory(trimmed);
    if (!m || rejectTranslation(m)) return null;
    return m;
  };

  let vi: string | null = null;
  let provider = "";
  if (options?.preferGoogle) {
    vi = await tryGoogle();
    if (vi) provider = "GoogleTranslate";
    if (!vi) {
      vi = await tryMyMemory();
      if (vi) provider = "MyMemory";
    }
  } else {
    vi = await tryMyMemory();
    if (vi) provider = "MyMemory";
    if (!vi) {
      vi = await tryGoogle();
      if (vi) provider = "GoogleTranslate";
    }
  }

  if (vi) translateCache.set(key, vi);
  return { vi: vi ?? "", provider };
}

async function translateViCached(text: string, options?: { preferGoogle?: boolean }): Promise<string> {
  const { vi } = await translateViBest(text, options);
  return vi;
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
    const res = await fetchWithTimeout(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    return (await res.json()) as DictEntry[];
  } catch {
    return null;
  }
}

async function fetchDictionaryEntries(lemma: string, headword: string): Promise<DictEntry[] | null> {
  const primary = await fetchFreeDictionary(lemma);
  if (headword === lemma) return primary;

  const base = await fetchFreeDictionary(headword);
  if (!primary?.length) return base;
  if (!base?.length) return primary;
  return [...primary, ...base];
}

function glossaryGlossForLookup(
  lemma: string,
  headword: string,
  primaryPos: string,
): string | null {
  return vietnameseGlossaryGloss(lemma, primaryPos, headword);
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

/** Một lần dịch headword — dùng chung cho mọi sense (tra nhanh). */
async function resolveHeadwordGlossVi(
  lemma: string,
  headword: string,
  primaryPos: string,
): Promise<{ glossVi: string; glossViReliable: boolean }> {
  const fromGlossary = glossaryGlossForLookup(lemma, headword, primaryPos);
  if (fromGlossary) {
    return { glossVi: fromGlossary, glossViReliable: true };
  }

  const targets = [
    headword,
    lemma.toLowerCase().replace(/[^a-z'-]/g, ""),
  ].filter((t, i, arr) => t && t.length <= 28 && !/\s/.test(t) && arr.indexOf(t) === i);

  for (const target of targets) {
    const { vi: wordVi } = await translateViBest(target);
    if (wordVi && wordVi.length <= 48 && !isSuspiciousGloss(target, wordVi)) {
      return { glossVi: wordVi, glossViReliable: true };
    }
  }

  return { glossVi: "", glossViReliable: false };
}

function buildSensesFast(
  picked: ScoredDefinition[],
  headwordGloss: { glossVi: string; glossViReliable: boolean },
): LookupSense[] {
  return picked.map((item) => ({
    partOfSpeech: item.partOfSpeech,
    partOfSpeechVi: posVi(item.partOfSpeech),
    glossVi: headwordGloss.glossVi,
    glossViReliable: headwordGloss.glossViReliable,
    definitionEn: item.definitionEn,
    examples: item.exampleEn ? [{ en: item.exampleEn }] : [],
  }));
}

async function buildSensesFromDictionary(
  entries: DictEntry[],
  lemma: string,
  headword: string,
  translateHeadwordPromise?: ReturnType<typeof translateViBest>,
): Promise<{
  senses: LookupSense[];
  paraphrases: LookupParaphrase[];
}> {
  const picked = collectScoredDefinitions(entries, MAX_SENSES, lemma, headword);
  const primaryPos = picked[0]?.partOfSpeech ?? "word";

  const fromGlossary = glossaryGlossForLookup(lemma, headword, primaryPos);
  let headwordGloss: { glossVi: string; glossViReliable: boolean };
  if (fromGlossary) {
    headwordGloss = { glossVi: fromGlossary, glossViReliable: true };
  } else if (translateHeadwordPromise) {
    const { vi: wordVi } = await translateHeadwordPromise;
    headwordGloss =
      wordVi && wordVi.length <= 48 && !isSuspiciousGloss(headword, wordVi)
        ? { glossVi: wordVi, glossViReliable: true }
        : { glossVi: "", glossViReliable: false };
  } else {
    headwordGloss = await resolveHeadwordGlossVi(lemma, headword, primaryPos);
  }

  const senses = buildSensesFast(picked, headwordGloss);

  const paraEns = collectParaphrasesGlossaryOnly(lemma, primaryPos);
  const paraphrases: LookupParaphrase[] = paraEns.map((en) => ({ en }));

  return { senses, paraphrases };
}

/** Bổ sung paraphrase (Datamuse + dịch VI) — gọi nền sau khi popover đã hiện nghĩa chính. */
export async function enrichWordLookup(query: string): Promise<LookupParaphrase[]> {
  await ensureStardictIndexLoaded();
  const lemma = normalizeLemma(query);
  if (!lemma) return [];

  const cacheKey = `enrich:${lemma}`;
  const cached = getCachedLookup(cacheKey);
  if (cached?.paraphrases.length) return cached.paraphrases;

  const headword = toDictionaryHeadword(lemma);
  const entries = await fetchDictionaryEntries(lemma, headword);
  if (!entries?.length) return [];

  const picked = collectScoredDefinitions(entries, MAX_SENSES, lemma, headword);
  const primaryPos = picked[0]?.partOfSpeech ?? "word";
  const paraEns = await collectParaphrases(lemma, primaryPos);
  if (!paraEns.length) return [];

  const translated = await translateManyParallel(paraEns, 3);
  const paraphrases: LookupParaphrase[] = paraEns.map((en) => {
    const vi = translated.get(en);
    const { glossVi, reliable } = pickDisplayGlossVi(en, vi);
    if (!reliable || !glossVi) return { en };
    return { en, vi: glossVi };
  });

  setCachedLookup(cacheKey, {
    query,
    kind: "word",
    senses: [],
    paraphrases,
    source: "enrich",
  });

  return paraphrases;
}

async function lookupWord(query: string): Promise<ReadingLookupResult> {
  await ensureStardictIndexLoaded();
  const resolved = resolveLookupForm(query);
  const lemma = resolved?.surface ?? normalizeLemma(query);
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

  const headword = resolved?.headword ?? toDictionaryHeadword(lemma);
  const formNote = resolved?.formNote;

  const cacheKey = `word:${lemma}:${headword}`;
  const cached = getCachedLookup(cacheKey);
  if (cached) return { ...cached, query, formNote: cached.formNote ?? formNote };

  const translateHeadwordPromise = translateViBest(headword);
  const entries = await fetchDictionaryEntries(lemma, headword);
  if (!entries?.length) {
    const offlineGloss = glossaryGlossForLookup(lemma, headword, "word");
    if (offlineGloss) {
      const result: ReadingLookupResult = {
        query,
        kind: "word",
        headword: headword !== lemma ? headword : undefined,
        formNote,
        senses: [
          {
            partOfSpeech: "word",
            partOfSpeechVi: "từ",
            glossVi: offlineGloss,
            glossViReliable: true,
            definitionEn: query,
            examples: [],
          },
        ],
        paraphrases: [],
        source: "WiktionaryVI+StarDict",
      };
      setCachedLookup(cacheKey, result);
      return result;
    }

    const { glossVi, reliable } = pickDisplayGlossVi(query, await translateViCached(query));
    if (glossVi && glossVi !== query) {
      const result: ReadingLookupResult = {
        query,
        kind: "word",
        headword: headword !== lemma ? headword : undefined,
        formNote,
        senses: [
          {
            partOfSpeech: "word",
            partOfSpeechVi: "từ",
            glossVi,
            glossViReliable: reliable,
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
  const { senses, paraphrases } = await buildSensesFromDictionary(
    entries,
    lemma,
    headword,
    translateHeadwordPromise,
  );

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
    headword: headword !== lemma ? headword : undefined,
    formNote,
    pronunciation: Object.keys(pronunciation).length ? pronunciation : undefined,
    senses,
    paraphrases,
    source: "FreeDictionary+WiktionaryVI+StarDict+Datamuse+MyMemory",
  };
  setCachedLookup(cacheKey, result);
  return result;
}

async function lookupPhrase(query: string, preferGoogle = false): Promise<ReadingLookupResult> {
  const cacheKey = `phrase:${query.toLowerCase()}:${preferGoogle ? "g" : "m"}`;
  const cached = getCachedLookup(cacheKey);
  if (cached) return { ...cached, query };

  const curated = curatedCollocationGloss(query);
  if (curated) {
    const result: ReadingLookupResult = {
      query,
      kind: "phrase",
      phraseGlossVi: curated,
      senses: [],
      paraphrases: [],
      source: "PassageGlossary",
    };
    setCachedLookup(cacheKey, result);
    return result;
  }

  const { vi: glossVi, provider } = await translateViBest(query, {
    preferGoogle,
    phrase: true,
  });
  if (!glossVi || glossVi === query) {
    const googleHint =
      preferGoogle && !isGoogleTranslateConfigured()
        ? " (Google Translate chưa bật — đang dùng MyMemory miễn phí)"
        : "";
    return {
      query,
      kind: "phrase",
      error: `Không dịch được cụm này${googleHint}. Thử cụm ngắn hơn hoặc thử lại sau.`,
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
    source: provider || "Translate",
  };
  setCachedLookup(cacheKey, result);
  return result;
}

/** Cụm dài (5 từ trở lên): chỉ dịch (MyMemory trước; Google nếu có key). */
async function lookupTranslateOnly(query: string): Promise<ReadingLookupResult> {
  return lookupPhrase(query, false);
}

export async function lookupReadingTerm(query: string): Promise<ReadingLookupResult> {
  const text = query.trim();
  const parsed = parseReadingSelection(text);
  if (!parsed) {
    return {
      query: text.slice(0, 80),
      kind: "phrase",
      error: "Chọn từ hoặc cụm để tra.",
      senses: [],
      paraphrases: [],
      source: "",
    };
  }

  if (parsed.mode === "translate-only") return lookupTranslateOnly(parsed.query);
  if (parsed.mode === "phrase") return lookupPhrase(parsed.query);
  return lookupWord(parsed.query);
}
