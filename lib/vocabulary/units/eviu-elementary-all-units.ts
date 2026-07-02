import { FOOD_A1_SAMPLE_UNIT } from "@/lib/vocabulary/units/food-a1-sample";
import { EVIU_UNITS_01_15 } from "@/lib/vocabulary/units/eviu-units-01-15";
import { EVIU_UNITS_16_30 } from "@/lib/vocabulary/units/eviu-units-16-30";
import { EVIU_UNITS_31_45 } from "@/lib/vocabulary/units/eviu-units-31-45";
import { EVIU_UNITS_46_60 } from "@/lib/vocabulary/units/eviu-units-46-60";
import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";

/** 60 unit EVIU Elementary — nội dung đầy đủ (lý thuyết, từ, bài tập). */
export const EVIU_ELEMENTARY_UNITS: readonly VocabularyUnit[] = [
  ...EVIU_UNITS_01_15,
  FOOD_A1_SAMPLE_UNIT,
  ...EVIU_UNITS_16_30,
  ...EVIU_UNITS_31_45,
  ...EVIU_UNITS_46_60,
];

const UNITS_BY_ID = new Map(EVIU_ELEMENTARY_UNITS.map((unit) => [unit.id, unit]));

export function getEviuElementaryUnit(unitId: string): VocabularyUnit | null {
  return UNITS_BY_ID.get(unitId) ?? null;
}

export function listEviuElementaryUnits(): readonly VocabularyUnit[] {
  return EVIU_ELEMENTARY_UNITS;
}
