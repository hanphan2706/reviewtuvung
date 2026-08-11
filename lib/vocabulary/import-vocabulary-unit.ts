import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import type { Word } from "@/lib/types";
import { buildUnitDeckName } from "@/lib/vocabulary/vocabulary-unit-registry";
import type { VocabularyUnit, VocabularyWordPreset } from "@/lib/vocabulary/vocabulary-unit-types";

export type ImportVocabularyUnitOptions = {
  /** Bỏ từ đã có trong thư viện (so theo lemma chuẩn hóa). */
  skipGlobalDuplicates?: boolean;
  /** Nếu deck cùng tên đã tồn tại, thêm từ vào deck đó thay vì tạo mới. */
  reuseExistingDeckByName?: boolean;
};

export type ImportVocabularyUnitResult = {
  deckId: string;
  deckName: string;
  added: number;
  skipped: number;
  createdDeck: boolean;
};

export function normalizeVocabularyLemma(term: string): string {
  return htmlToPlainTrim(term).toLowerCase();
}

export function filterUnitWordsForImport(
  words: readonly VocabularyWordPreset[],
  existingWords: readonly Word[],
): { toAdd: VocabularyWordPreset[]; skipped: number } {
  const existing = new Set(existingWords.map((w) => normalizeVocabularyLemma(w.term)));
  const toAdd = words.filter((w) => !existing.has(normalizeVocabularyLemma(w.term)));
  return { toAdd, skipped: words.length - toAdd.length };
}

type ImportDeps = {
  decks: readonly { id: string; name: string }[];
  words: readonly Word[];
  createDeck: (name: string) => string;
  addWordToDeck: (deckId: string, term: string, definition: string, ipa?: string) => void;
};

export function ensureUnitDeck(
  unit: VocabularyUnit,
  deps: Pick<ImportDeps, "decks" | "createDeck">,
): { deckId: string; deckName: string; createdDeck: boolean } {
  const deckName = buildUnitDeckName(unit);
  const existingDeck = deps.decks.find((d) => d.name === deckName);
  if (existingDeck) {
    return { deckId: existingDeck.id, deckName, createdDeck: false };
  }
  const deckId = deps.createDeck(deckName);
  return { deckId, deckName, createdDeck: true };
}

export function importVocabularyUnit(
  unit: VocabularyUnit,
  deps: ImportDeps,
  opts: ImportVocabularyUnitOptions = {},
): ImportVocabularyUnitResult {
  const deckName = buildUnitDeckName(unit);
  const skipGlobalDuplicates = opts.skipGlobalDuplicates !== false;
  const reuseExistingDeckByName = opts.reuseExistingDeckByName !== false;

  const { toAdd, skipped } = skipGlobalDuplicates
    ? filterUnitWordsForImport(unit.words, deps.words)
    : { toAdd: [...unit.words], skipped: 0 };

  let deckId: string;
  let createdDeck = false;

  const existingDeck = reuseExistingDeckByName
    ? deps.decks.find((d) => d.name === deckName)
    : undefined;

  if (existingDeck) {
    deckId = existingDeck.id;
  } else {
    deckId = deps.createDeck(deckName);
    createdDeck = true;
  }

  let added = 0;
  const deckLemmaSet = new Set(
    deps.words.filter((w) => w.deckId === deckId).map((w) => normalizeVocabularyLemma(w.term)),
  );

  for (const preset of toAdd) {
    const lemma = normalizeVocabularyLemma(preset.term);
    if (deckLemmaSet.has(lemma)) continue;
    const definition = preset.example
      ? `${preset.definition}<br><b>${preset.example}</b>`
      : preset.definition;
    deps.addWordToDeck(deckId, preset.term, definition, preset.ipa);
    deckLemmaSet.add(lemma);
    added += 1;
  }

  return { deckId, deckName, added, skipped, createdDeck };
}
