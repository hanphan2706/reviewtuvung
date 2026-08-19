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

export type ListeningTranscriptClozeSegment =
  | { type: "text"; text: string }
  | { type: "gap"; gapId: string };

export type ListeningTranscriptClozeLine = {
  speaker: string | null;
  segments: readonly ListeningTranscriptClozeSegment[];
};

export type ListeningTranscriptGap = {
  id: string;
  answers: readonly string[];
  /** Visual word-count hint; defaults to words in the first answer. */
  wordSlots?: number;
};

export type ListeningTranscriptClozeExercise = {
  /** Số chỗ trống theo bài, không cap cứng (thường khoảng 10–18). */
  lines: readonly ListeningTranscriptClozeLine[];
  gaps: readonly ListeningTranscriptGap[];
};

export type ListeningKeywordParaphraseRow = {
  key: string;
  questionNumber: number;
  questionEn: string;
  questionVi: string;
  modelParaphraseEn: string;
  modelParaphraseVi: string;
  acceptedAnswers?: readonly string[];
  explanationEn?: string;
  explanationVi?: string;
};

export type ListeningFlowLessonContent = {
  predictionOptions: readonly ListeningFlowLocalizedOption[];
  gistOptions: readonly (ListeningFlowLocalizedOption & { correct?: boolean })[];
  detailQuestions: readonly ListeningFlowDetailQuestion[];
  memoryPlaceholder?: string;
  /** Override prompt bước câu hỏi (vd. hướng dẫn trong sách Basic IELTS). */
  detailPromptEn?: string;
  detailPromptVi?: string;
  transcriptCloze?: ListeningTranscriptClozeExercise;
  keywordParaphrases?: readonly ListeningKeywordParaphraseRow[];
};

export type ResolvedTranscriptClozeExercise = {
  lines: readonly ListeningTranscriptClozeLine[];
  gaps: readonly ListeningTranscriptGap[];
};

export type ResolvedKeywordParaphraseRow = {
  key: string;
  questionNumber: number;
  question: string;
  modelParaphrase: string;
  acceptedAnswers: readonly string[];
  explanation: string | null;
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
  transcriptCloze: ResolvedTranscriptClozeExercise | null;
  keywordParaphrases: readonly ResolvedKeywordParaphraseRow[];
};

export function listeningFlowHasCloze(content: ListeningFlowLessonContent | null | undefined): boolean {
  return Boolean(content?.transcriptCloze?.gaps.length);
}

export function listeningFlowHasKeyword(content: ListeningFlowLessonContent | null | undefined): boolean {
  return Boolean(content?.keywordParaphrases?.length);
}
