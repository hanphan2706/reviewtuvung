import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";

type GrammarClozeOptions = {
  promptVi?: string;
  alternatives?: readonly string[];
  explanation?: string;
  hint?: string;
};

/** Build a typed cloze item with primary answer + accepted variants. */
export function grammarCloze(
  id: string,
  label: string,
  prompt: string,
  answer: string,
  options: GrammarClozeOptions = {},
): GrammarExercise {
  const capitalized = answer.charAt(0).toUpperCase() + answer.slice(1);
  const baseAlts = new Set<string>([
    answer,
    capitalized,
    ...(options.alternatives ?? []),
  ]);

  return {
    type: "fill-blank",
    id,
    label,
    prompt,
    answer,
    alternatives: [...baseAlts].filter((value) => value !== answer),
    promptVi: options.promptVi,
    explanation: options.explanation,
    hint: options.hint,
  };
}
