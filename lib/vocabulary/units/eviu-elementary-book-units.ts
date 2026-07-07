import bookData from "@/lib/vocabulary/units/eviu-elementary-book-data.json";
import { buildBookFaithfulUnit, type BookUnitRecord } from "@/lib/vocabulary/units/eviu-book-unit-factory";
import { getCuratedExercisesForUnit } from "@/lib/vocabulary/units/eviu-elementary-curated-exercises-01-15";
import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";

/** 60 unit Elementary — tất cả unit đều curated (trừ 3 body-a1 và 10 food-a1 dùng file mẫu riêng). */
export const EVIU_ELEMENTARY_BOOK_UNITS: readonly VocabularyUnit[] = (
  bookData.units as BookUnitRecord[]
).map((record) => {
  const unit = buildBookFaithfulUnit(record);
  const curated = getCuratedExercisesForUnit(record.unitNumber);
  if (!curated) return unit;
  return { ...unit, exercises: [...curated] };
});

const BY_ID = new Map(EVIU_ELEMENTARY_BOOK_UNITS.map((unit) => [unit.id, unit]));

export function getEviuElementaryBookUnit(unitId: string): VocabularyUnit | null {
  return BY_ID.get(unitId) ?? null;
}
