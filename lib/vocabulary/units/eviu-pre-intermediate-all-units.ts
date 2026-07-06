import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import { EVIU_PRE_UNITS_01_15 } from "@/lib/vocabulary/units/eviu-pre-units-01-15";
import { EVIU_PRE_UNITS_16_30 } from "@/lib/vocabulary/units/eviu-pre-units-16-30";
import { EVIU_PRE_UNITS_31_45 } from "@/lib/vocabulary/units/eviu-pre-units-31-45";
import { EVIU_PRE_UNITS_46_60 } from "@/lib/vocabulary/units/eviu-pre-units-46-60";
import { EVIU_PRE_UNITS_61_75 } from "@/lib/vocabulary/units/eviu-pre-units-61-75";
import { EVIU_PRE_UNITS_76_90 } from "@/lib/vocabulary/units/eviu-pre-units-76-90";
import { EVIU_PRE_UNITS_91_100 } from "@/lib/vocabulary/units/eviu-pre-units-91-100";

/** Pre-Intermediate units with full lesson content (units 1–100). */
export const EVIU_PRE_INTERMEDIATE_UNITS: readonly VocabularyUnit[] = [
  ...EVIU_PRE_UNITS_01_15,
  ...EVIU_PRE_UNITS_16_30,
  ...EVIU_PRE_UNITS_31_45,
  ...EVIU_PRE_UNITS_46_60,
  ...EVIU_PRE_UNITS_61_75,
  ...EVIU_PRE_UNITS_76_90,
  ...EVIU_PRE_UNITS_91_100,
];

const UNITS_BY_ID = new Map(EVIU_PRE_INTERMEDIATE_UNITS.map((unit) => [unit.id, unit]));

export function getEviuPreIntermediateUnit(unitId: string): VocabularyUnit | null {
  return UNITS_BY_ID.get(unitId) ?? null;
}

export function listEviuPreIntermediateUnits(): readonly VocabularyUnit[] {
  return EVIU_PRE_INTERMEDIATE_UNITS;
}
