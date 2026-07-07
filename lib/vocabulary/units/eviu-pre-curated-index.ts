import type { VocabularyExercise } from "@/lib/vocabulary/vocabulary-unit-types";
import { applyExercisePromptVi } from "./eviu-elementary-curated-helpers";
import { CURATED_PRE_UNITS_01_15 } from "./eviu-pre-curated-exercises-01-15";
import { CURATED_PRE_UNITS_16_30 } from "./eviu-pre-curated-exercises-16-30";
import { CURATED_PRE_UNITS_31_45 } from "./eviu-pre-curated-exercises-31-45";
import { CURATED_PRE_UNITS_46_60 } from "./eviu-pre-curated-exercises-46-60";
import { CURATED_PRE_UNITS_61_75 } from "./eviu-pre-curated-exercises-61-75";
import { CURATED_PRE_UNITS_76_90 } from "./eviu-pre-curated-exercises-76-90";
import { CURATED_PRE_UNITS_91_100 } from "./eviu-pre-curated-exercises-91-100";
import { CURATED_PRE_PROMPT_VI_01_15 } from "./eviu-pre-curated-prompt-vi-01-15";
import { CURATED_PRE_PROMPT_VI_16_30 } from "./eviu-pre-curated-prompt-vi-16-30";
import { CURATED_PRE_PROMPT_VI_31_45 } from "./eviu-pre-curated-prompt-vi-31-45";
import { CURATED_PRE_PROMPT_VI_46_60 } from "./eviu-pre-curated-prompt-vi-46-60";
import { CURATED_PRE_PROMPT_VI_61_75 } from "./eviu-pre-curated-prompt-vi-61-75";
import { CURATED_PRE_PROMPT_VI_76_90 } from "./eviu-pre-curated-prompt-vi-76-90";
import { CURATED_PRE_PROMPT_VI_91_100 } from "./eviu-pre-curated-prompt-vi-91-100";

const CURATED_PRE_BY_UNIT: Readonly<Partial<Record<number, readonly VocabularyExercise[]>>> = {
  ...CURATED_PRE_UNITS_01_15,
  ...CURATED_PRE_UNITS_16_30,
  ...CURATED_PRE_UNITS_31_45,
  ...CURATED_PRE_UNITS_46_60,
  ...CURATED_PRE_UNITS_61_75,
  ...CURATED_PRE_UNITS_76_90,
  ...CURATED_PRE_UNITS_91_100,
};

const CURATED_PRE_PROMPT_VI: Readonly<Record<string, string>> = {
  ...CURATED_PRE_PROMPT_VI_01_15,
  ...CURATED_PRE_PROMPT_VI_16_30,
  ...CURATED_PRE_PROMPT_VI_31_45,
  ...CURATED_PRE_PROMPT_VI_46_60,
  ...CURATED_PRE_PROMPT_VI_61_75,
  ...CURATED_PRE_PROMPT_VI_76_90,
  ...CURATED_PRE_PROMPT_VI_91_100,
};

export function getCuratedPreExercisesForUnit(unitNumber: number): readonly VocabularyExercise[] | null {
  const exercises = CURATED_PRE_BY_UNIT[unitNumber];
  return exercises ? applyExercisePromptVi(exercises, CURATED_PRE_PROMPT_VI) : null;
}
