import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import { EVIU_UPPER_UNITS_05_19 } from "@/lib/vocabulary/units/eviu-upper-units-05-19";
import { EVIU_UPPER_UNITS_20_34 } from "@/lib/vocabulary/units/eviu-upper-units-20-34";
import { EVIU_UPPER_UNITS_35_49 } from "@/lib/vocabulary/units/eviu-upper-units-35-49";
import { EVIU_UPPER_UNITS_50_64 } from "@/lib/vocabulary/units/eviu-upper-units-50-64";
import { EVIU_UPPER_UNITS_65_79 } from "@/lib/vocabulary/units/eviu-upper-units-65-79";
import { EVIU_UPPER_UNITS_80_94 } from "@/lib/vocabulary/units/eviu-upper-units-80-94";
import { EVIU_UPPER_UNITS_95_101 } from "@/lib/vocabulary/units/eviu-upper-units-95-101";

/** Upper-Intermediate units with full lesson content (book units 5–101; 1–4 study-skills skipped). */
export const EVIU_UPPER_INTERMEDIATE_UNITS: readonly VocabularyUnit[] = [
  ...EVIU_UPPER_UNITS_05_19,
  ...EVIU_UPPER_UNITS_20_34,
  ...EVIU_UPPER_UNITS_35_49,
  ...EVIU_UPPER_UNITS_50_64,
  ...EVIU_UPPER_UNITS_65_79,
  ...EVIU_UPPER_UNITS_80_94,
  ...EVIU_UPPER_UNITS_95_101,
];

const UNITS_BY_ID = new Map(EVIU_UPPER_INTERMEDIATE_UNITS.map((unit) => [unit.id, unit]));

export function getEviuUpperIntermediateUnit(unitId: string): VocabularyUnit | null {
  return UNITS_BY_ID.get(unitId) ?? null;
}

export function listEviuUpperIntermediateUnits(): readonly VocabularyUnit[] {
  return EVIU_UPPER_INTERMEDIATE_UNITS;
}
