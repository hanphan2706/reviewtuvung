import type { VocabularyExercise } from "@/lib/vocabulary/vocabulary-unit-types";
import { MAX_VOCABULARY_UNIT_EXERCISES } from "@/lib/vocabulary/vocabulary-unit-types";

export function cloze(
  id: string,
  label: string,
  prompt: string,
  answer: string,
  alternatives?: readonly string[],
): VocabularyExercise {
  return {
    type: "fill-blank",
    id,
    label,
    prompt,
    answer,
    alternatives: alternatives ?? [answer.charAt(0).toUpperCase() + answer.slice(1)],
  };
}

export function mcq(
  id: string,
  label: string,
  question: string,
  correctKey: "a" | "b" | "c" | "d",
  options: readonly { key: string; label: string }[],
): VocabularyExercise {
  return { type: "mcq", id, label, question, options, correctKey };
}

export function match(
  id: string,
  instruction: string,
  pairs: readonly { left: string; right: string }[],
): VocabularyExercise {
  return { type: "match", id, instruction, pairs };
}

export function applyExercisePromptVi(
  exercises: readonly VocabularyExercise[],
  map: Readonly<Record<string, string>>,
): VocabularyExercise[] {
  return exercises.map((ex) => {
    const promptVi = map[ex.id];
    if (!promptVi) return ex;
    return { ...ex, promptVi };
  });
}

export function assertExerciseCount(unitNumber: number, exercises: readonly VocabularyExercise[]): void {
  if (exercises.length > MAX_VOCABULARY_UNIT_EXERCISES) {
    throw new Error(
      `Curated unit ${unitNumber} has ${exercises.length} exercises; max is ${MAX_VOCABULARY_UNIT_EXERCISES}.`,
    );
  }
}
