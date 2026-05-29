export type LookupPronunciation = {
  ipa?: string;
  audioUrl?: string;
};

export type LookupPronunciationPair = {
  us?: LookupPronunciation;
  uk?: LookupPronunciation;
};

export type LookupExample = {
  en: string;
  vi?: string;
};

export type LookupSense = {
  partOfSpeech: string;
  partOfSpeechVi: string;
  glossVi: string;
  /** false khi MyMemory trả bản dịch đáng ngờ — UI ưu tiên tiếng Anh. */
  glossViReliable?: boolean;
  definitionEn: string;
  examples: LookupExample[];
};

/** Từ/cụm thay thế gần nghĩa (paraphrase), không phải định nghĩa dài. */
export type LookupParaphrase = {
  en: string;
  vi?: string;
};

export type ReadingLookupResult = {
  query: string;
  kind: "word" | "phrase";
  error?: string;
  pronunciation?: LookupPronunciationPair;
  senses: LookupSense[];
  paraphrases: LookupParaphrase[];
  /** Cụm: nghĩa tiếng Việt (một khối). */
  phraseGlossVi?: string;
  source: string;
};

export function formatLookupForDeck(result: ReadingLookupResult): string {
  if (result.error) return result.error;
  if (result.kind === "phrase" && result.phraseGlossVi) {
    return result.phraseGlossVi;
  }
  const lines: string[] = [];
  for (const s of result.senses) {
    const pos = s.partOfSpeechVi || s.partOfSpeech;
    if (s.glossVi && s.glossViReliable !== false) lines.push(`(${pos}) ${s.glossVi}`);
    if (s.definitionEn) lines.push(`(${pos}) ${s.definitionEn}`);
    for (const ex of s.examples) {
      if (ex.en) lines.push(`Ex: ${ex.en}`);
      if (ex.vi) lines.push(ex.vi);
    }
  }
  if (result.paraphrases.length) {
    lines.push("Paraphrase:");
    for (const p of result.paraphrases) {
      lines.push(p.vi ? `${p.en} — ${p.vi}` : p.en);
    }
  }
  return lines.join("\n") || result.query;
}
