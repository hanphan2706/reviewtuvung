export type ListeningFlowLocalizedOption = {
  key: string;
  labelEn: string;
  labelVi: string;
};

export type ListeningFlowDetailQuestion = {
  key: string;
  conversationEn: string;
  conversationVi: string;
  questionEn: string;
  questionVi: string;
  answerEn: string;
  answerVi: string;
};

export type ListeningFlowLessonContent = {
  predictionOptions: readonly ListeningFlowLocalizedOption[];
  gistOptions: readonly (ListeningFlowLocalizedOption & { correct?: boolean })[];
  detailQuestions: readonly ListeningFlowDetailQuestion[];
  memoryPlaceholder?: string;
  /** Override prompt bước câu hỏi (vd. hướng dẫn trong sách Basic IELTS). */
  detailPromptEn?: string;
  detailPromptVi?: string;
};

export type ResolvedFlowExerciseContent = {
  predictionOptions: readonly { key: string; label: string }[];
  gistOptions: readonly { key: string; label: string }[];
  gistCorrectKeys: readonly string[];
  detailQuestions: readonly {
    key: string;
    conversation: string;
    conversationNumber: number | null;
    question: string;
    answer: string;
  }[];
  memoryPlaceholder: string;
  detailPrompt: string | null;
};
