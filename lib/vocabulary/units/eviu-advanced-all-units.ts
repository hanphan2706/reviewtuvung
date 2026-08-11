import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import { EVIU_ADVANCED_UNITS_01_08 } from "@/lib/vocabulary/units/eviu-advanced-units-01-08";
import { EVIU_ADVANCED_UNITS_09_15 } from "@/lib/vocabulary/units/eviu-advanced-units-09-15";
import { EVIU_ADVANCED_UNITS_16_30 } from "@/lib/vocabulary/units/eviu-advanced-units-16-30";
import { EVIU_ADVANCED_UNITS_31_45 } from "@/lib/vocabulary/units/eviu-advanced-units-31-45";
import { EVIU_ADVANCED_UNITS_46_60 } from "@/lib/vocabulary/units/eviu-advanced-units-46-60";
import { EVIU_ADVANCED_UNITS_61_75 } from "@/lib/vocabulary/units/eviu-advanced-units-61-75";
import { EVIU_ADVANCED_UNITS_76_90 } from "@/lib/vocabulary/units/eviu-advanced-units-76-90";
import { EVIU_ADVANCED_UNITS_91_101 } from "@/lib/vocabulary/units/eviu-advanced-units-91-101";

const ALL_UNITS: readonly VocabularyUnit[] = [
  ...EVIU_ADVANCED_UNITS_01_08,
  ...EVIU_ADVANCED_UNITS_09_15,
  ...EVIU_ADVANCED_UNITS_16_30,
  ...EVIU_ADVANCED_UNITS_31_45,
  ...EVIU_ADVANCED_UNITS_46_60,
  ...EVIU_ADVANCED_UNITS_61_75,
  ...EVIU_ADVANCED_UNITS_76_90,
  ...EVIU_ADVANCED_UNITS_91_101,
];

const BY_ID = new Map(ALL_UNITS.map((unit) => [unit.id, unit]));

export function listEviuAdvancedUnits(): readonly VocabularyUnit[] {
  return ALL_UNITS;
}

export function getEviuAdvancedUnit(unitId: string): VocabularyUnit | null {
  return BY_ID.get(unitId) ?? null;
}
