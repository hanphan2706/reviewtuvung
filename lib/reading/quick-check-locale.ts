import type { QuickCheckQuiz } from "@/lib/reading/passage-quiz";

export type QuickCheckDisplay = {
  question: string;
  options: string[];
  explanation?: string;
};

export function resolveQuickCheckDisplay(
  quiz: QuickCheckQuiz,
  showTranslation: boolean,
): QuickCheckDisplay {
  const useVi =
    showTranslation && Boolean(quiz.questionVi?.trim()) && (quiz.optionsVi?.length ?? 0) >= 2;

  return {
    question: useVi ? (quiz.questionVi as string) : quiz.questionEn,
    options: useVi ? (quiz.optionsVi as string[]) : quiz.optionsEn,
    explanation: useVi ? quiz.explanationVi : quiz.explanationEn,
  };
}
