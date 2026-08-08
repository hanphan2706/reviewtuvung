import { EVIU_UPPER_INTERMEDIATE_CATALOG } from "../eviu-upper-intermediate-catalog";
import { getElementaryVocabularyKeys, normalizeVocabularyKey } from "../eviu-vocabulary-dedup";
import type { VocabularyUnit } from "../vocabulary-unit-types";
import { MAX_VOCABULARY_UNIT_EXERCISES } from "../vocabulary-unit-types";
import {
  buildEviuUnit,
  buildVariedWordExercises,
  type UnitContentInput,
  type WordInput,
} from "./eviu-unit-builder";
import { listEviuPreIntermediateUnitsIncludingArchived } from "./eviu-pre-intermediate-all-units";

export function catalogFor(unitNumber: number) {
  const entry = EVIU_UPPER_INTERMEDIATE_CATALOG.find((item) => item.unitNumber === unitNumber);
  if (!entry) {
    throw new Error(`Missing upper-intermediate catalog entry for unit ${unitNumber}`);
  }
  return entry;
}

export function w(term: string, definition: string, example: string, partOfSpeech = "NOUN"): WordInput {
  return { term, definition, example, partOfSpeech };
}

type WordTuple = [term: string, definition: string, example: string, partOfSpeech?: string];

export function wordList(entries: readonly WordTuple[]): WordInput[] {
  return entries.map(([term, definition, example, partOfSpeech]) => w(term, definition, example, partOfSpeech ?? "NOUN"));
}

let lowerLevelKeysCache: Set<string> | null = null;

/** Lemma/cụm đã có ở Elementary hoặc Pre-Intermediate — bỏ khi ship Upper-Int. */
export function getLowerLevelVocabularyKeys(): ReadonlySet<string> {
  if (lowerLevelKeysCache) return lowerLevelKeysCache;

  const keys = new Set(getElementaryVocabularyKeys());
  for (const unit of listEviuPreIntermediateUnitsIncludingArchived()) {
    for (const word of unit.words) {
      const key = normalizeVocabularyKey(word.term);
      if (key) keys.add(key);
    }
  }
  lowerLevelKeysCache = keys;
  return keys;
}

export function filterWordsNotInLowerLevels(words: readonly WordInput[]): WordInput[] {
  const existing = getLowerLevelVocabularyKeys();
  return words.filter((word) => {
    const key = normalizeVocabularyKey(word.term);
    return key && !existing.has(key);
  });
}

function rebuildStructureSections(
  sections: UnitContentInput["structureSections"],
  totalWords: number,
): UnitContentInput["structureSections"] {
  if (sections.length === 0) return [];
  if (totalWords <= 0) {
    return sections.map((section) => ({ ...section, wordCount: 0 }));
  }

  const originalTotal = sections.reduce((sum, section) => sum + section.wordCount, 0);
  if (originalTotal === totalWords) return sections;
  if (originalTotal <= 0) {
    const base = Math.floor(totalWords / sections.length);
    let remainder = totalWords % sections.length;
    return sections.map((section) => {
      const extra = remainder > 0 ? 1 : 0;
      remainder -= extra;
      return { ...section, wordCount: base + extra };
    });
  }

  const scaled = sections.map((section) => {
    const raw = (section.wordCount / originalTotal) * totalWords;
    return { label: section.label, wordCount: Math.floor(raw), remainder: raw - Math.floor(raw) };
  });

  let assigned = scaled.reduce((sum, section) => sum + section.wordCount, 0);
  let remaining = totalWords - assigned;

  const order = [...scaled].sort((a, b) => b.remainder - a.remainder);
  for (let i = 0; i < order.length && remaining > 0; i += 1) {
    order[i].wordCount += 1;
    remaining -= 1;
  }

  assigned = order.reduce((sum, section) => sum + section.wordCount, 0);
  if (assigned !== totalWords) {
    order[0].wordCount += totalWords - assigned;
  }

  const byLabel = new Map(order.map((item) => [item.label, item.wordCount]));
  return sections.map((section) => ({ ...section, wordCount: byLabel.get(section.label) ?? 0 }));
}

export function upperUnit(unitNumber: number, content: UnitContentInput): VocabularyUnit {
  const catalog = catalogFor(unitNumber);
  const filteredWords = filterWordsNotInLowerLevels(content.words);
  const structureSections = rebuildStructureSections(content.structureSections, filteredWords.length);
  const manualExercises = content.exercises;
  const variedSlots = Math.max(0, MAX_VOCABULARY_UNIT_EXERCISES - manualExercises.length);
  const varied =
    filteredWords.length >= 4 && variedSlots > 0
      ? buildVariedWordExercises(unitNumber, filteredWords, variedSlots)
      : [];

  return buildEviuUnit(
    catalog,
    {
      ...content,
      words: filteredWords,
      structureSections,
      exercises: [...manualExercises, ...varied],
    },
    { series: "upper-intermediate" },
  );
}
