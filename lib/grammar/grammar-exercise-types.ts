import type { VocabularyExercise } from "@/lib/vocabulary/vocabulary-unit-types";
import { MAX_VOCABULARY_UNIT_EXERCISES } from "@/lib/vocabulary/vocabulary-unit-types";

/** Grammar exercises reuse the same quiz shape as vocabulary units. */
export type GrammarExercise = VocabularyExercise;

export const MAX_GRAMMAR_TOPIC_EXERCISES = MAX_VOCABULARY_UNIT_EXERCISES;
