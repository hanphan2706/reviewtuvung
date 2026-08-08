import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import { EVIU_PRE_UNITS_01_15 } from "@/lib/vocabulary/units/eviu-pre-units-01-15";
import { EVIU_PRE_UNITS_16_30 } from "@/lib/vocabulary/units/eviu-pre-units-16-30";
import { EVIU_PRE_UNITS_31_45 } from "@/lib/vocabulary/units/eviu-pre-units-31-45";
import { EVIU_PRE_UNITS_46_60 } from "@/lib/vocabulary/units/eviu-pre-units-46-60";
import { EVIU_PRE_UNITS_61_75 } from "@/lib/vocabulary/units/eviu-pre-units-61-75";
import { EVIU_PRE_UNITS_76_90 } from "@/lib/vocabulary/units/eviu-pre-units-76-90";
import { EVIU_PRE_UNITS_91_100 } from "@/lib/vocabulary/units/eviu-pre-units-91-100";
import { getCuratedPreExercisesForUnit } from "@/lib/vocabulary/units/eviu-pre-curated-index";

function unitNumberFromId(id: string): number {
  const match = id.match(/^eviu-pre-(\d+)-/);
  return match ? Number(match[1]) : 0;
}

/** Units 1–4: study-skills / meta-vocabulary — not topic vocabulary for the A2 hub. */
function isArchivedLearningUnit(unit: VocabularyUnit): boolean {
  const unitNumber = unitNumberFromId(unit.id);
  return unitNumber >= 1 && unitNumber <= 4;
}

/** Override auto-generated exercises with curated ones where available. */
function withCuratedExercises(units: readonly VocabularyUnit[]): VocabularyUnit[] {
  return units.map((unit) => {
    const curated = getCuratedPreExercisesForUnit(unitNumberFromId(unit.id));
    return curated ? { ...unit, exercises: [...curated] } : unit;
  });
}

const ALL_PRE_INTERMEDIATE_UNITS: readonly VocabularyUnit[] = withCuratedExercises([
  ...EVIU_PRE_UNITS_01_15,
  ...EVIU_PRE_UNITS_16_30,
  ...EVIU_PRE_UNITS_31_45,
  ...EVIU_PRE_UNITS_46_60,
  ...EVIU_PRE_UNITS_61_75,
  ...EVIU_PRE_UNITS_76_90,
  ...EVIU_PRE_UNITS_91_100,
]);

/**
 * Study-skills units (Pre-Int 1–4) kept for a future feature.
 * Not listed in the A2 hub / published catalog.
 */
export const EVIU_PRE_INTERMEDIATE_LEARNING_UNITS_ARCHIVED: readonly VocabularyUnit[] =
  ALL_PRE_INTERMEDIATE_UNITS.filter(isArchivedLearningUnit);

/** Pre-Intermediate topic units shown in the app (excludes archived learning units 1–4). */
export const EVIU_PRE_INTERMEDIATE_UNITS: readonly VocabularyUnit[] =
  ALL_PRE_INTERMEDIATE_UNITS.filter((unit) => !isArchivedLearningUnit(unit));

const UNITS_BY_ID = new Map(EVIU_PRE_INTERMEDIATE_UNITS.map((unit) => [unit.id, unit]));
const ARCHIVED_BY_ID = new Map(
  EVIU_PRE_INTERMEDIATE_LEARNING_UNITS_ARCHIVED.map((unit) => [unit.id, unit]),
);

export function getEviuPreIntermediateUnit(unitId: string): VocabularyUnit | null {
  return UNITS_BY_ID.get(unitId) ?? null;
}

/** Includes archived learning units — for future reuse / internal tooling. */
export function getEviuPreIntermediateUnitIncludingArchived(unitId: string): VocabularyUnit | null {
  return UNITS_BY_ID.get(unitId) ?? ARCHIVED_BY_ID.get(unitId) ?? null;
}

export function listEviuPreIntermediateUnits(): readonly VocabularyUnit[] {
  return EVIU_PRE_INTERMEDIATE_UNITS;
}

/** Published + archived learning units (dedupe / internal). */
export function listEviuPreIntermediateUnitsIncludingArchived(): readonly VocabularyUnit[] {
  return ALL_PRE_INTERMEDIATE_UNITS;
}
