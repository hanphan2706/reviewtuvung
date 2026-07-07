import { BODY_A1_SAMPLE_UNIT } from "@/lib/vocabulary/units/body-a1-sample";
import { EVIU_ELEMENTARY_BOOK_UNITS } from "@/lib/vocabulary/units/eviu-elementary-book-units";
import { FOOD_A1_SAMPLE_UNIT } from "@/lib/vocabulary/units/food-a1-sample";
import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import { MAX_VOCABULARY_UNIT_EXERCISES } from "@/lib/vocabulary/vocabulary-unit-types";

/** 60 unit EVIU Elementary — unit 3 + 10 mẫu bám sách; 58 unit còn lại từ book pipeline. */
export const EVIU_ELEMENTARY_UNITS: readonly VocabularyUnit[] = [
  ...EVIU_ELEMENTARY_BOOK_UNITS.filter((u) => u.id !== "body-a1" && u.id !== "food-a1"),
  BODY_A1_SAMPLE_UNIT,
  FOOD_A1_SAMPLE_UNIT,
].sort((a, b) => {
  const na = Number.parseInt(a.sourceBook.match(/Unit (\d+)/)?.[1] ?? "0", 10);
  const nb = Number.parseInt(b.sourceBook.match(/Unit (\d+)/)?.[1] ?? "0", 10);
  return na - nb;
});

const UNITS_BY_ID = new Map(EVIU_ELEMENTARY_UNITS.map((unit) => [unit.id, unit]));

for (const unit of EVIU_ELEMENTARY_UNITS) {
  if (unit.exercises.length > MAX_VOCABULARY_UNIT_EXERCISES) {
    throw new Error(
      `Vocabulary unit ${unit.id} has ${unit.exercises.length} exercises; max is ${MAX_VOCABULARY_UNIT_EXERCISES}.`,
    );
  }
}

export function getEviuElementaryUnit(unitId: string): VocabularyUnit | null {
  return UNITS_BY_ID.get(unitId) ?? null;
}

export function listEviuElementaryUnits(): readonly VocabularyUnit[] {
  return EVIU_ELEMENTARY_UNITS;
}
