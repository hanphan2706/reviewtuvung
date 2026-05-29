/** Chỉ mục EN → VI trích từ Wiktionary (import offline). */

export type WiktionaryViByPos = Partial<
  Record<"noun" | "verb" | "adjective" | "adverb" | "preposition" | "word", string[]>
>;

/** headword (lowercase) → nghĩa VI theo loại từ */
export type EnViWiktionaryIndex = Record<string, WiktionaryViByPos>;
