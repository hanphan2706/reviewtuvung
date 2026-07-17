/** Preset word for SRS — maps to `Word.term` / `Word.definition`. */
export type VocabularyWordPreset = {
  id: string;
  term: string;
  /** Nghĩa tiếng Việt (plain hoặc HTML ngắn). */
  definition: string;
  partOfSpeech?: string;
  ipa?: string;
  /** Câu ví dụ tiếng Anh — dùng khi import SRS. */
  example?: string;
};

export type VocabularyTheoryFeatureCard = {
  icon: "link" | "lightbulb" | "book";
  title: string;
  description: string;
};

export type VocabularyTheoryPrinciple = {
  number: string;
  title: string;
  body: string;
  /** Câu ví dụ — hiển thị xuống dòng, in đậm tím. */
  exampleHtml?: string;
};

export type VocabularyTheoryBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; html: string }
  | { type: "tip"; title: string; html: string }
  | { type: "table"; caption?: string; headers: readonly string[]; rows: readonly (readonly string[])[] }
  | { type: "feature-cards"; cards: readonly VocabularyTheoryFeatureCard[] }
  | { type: "principles"; items: readonly VocabularyTheoryPrinciple[] }
  | { type: "banner"; imageUrl: string; caption: string };

export type VocabularyStructureSection = {
  label: string;
  wordCount: number;
};

export type VocabularyUnitQuote = {
  text: string;
  author: string;
};

export type VocabularyExerciseFillBlank = {
  type: "fill-blank";
  id: string;
  label?: string;
  prompt: string;
  /** Giải thích / dịch tiếng Việt ngắn hiển thị dưới câu hỏi. */
  promptVi?: string;
  answer: string;
  alternatives?: readonly string[];
  /** Giải thích hiện sau khi kiểm tra đáp án. */
  explanation?: string;
  hint?: string;
  /**
   * Bảng từ / đáp án chọn sẵn (EGIU “Choose from the box”).
   * Chỉ hiển thị tham chiếu — vẫn gõ đáp án; khác `options` (MCQ).
   */
  choiceBank?: readonly string[];
  options?: readonly { key: string; label: string }[];
  correctKey?: string;
};

export type VocabularyExerciseMcq = {
  type: "mcq";
  id: string;
  label?: string;
  question: string;
  /** Giải thích / dịch tiếng Việt ngắn hiển thị dưới câu hỏi. */
  promptVi?: string;
  options: readonly { key: string; label: string }[];
  correctKey: string;
  explanation?: string;
};

export type VocabularyExerciseMatch = {
  type: "match";
  id: string;
  instruction: string;
  /** Giải thích / dịch tiếng Việt ngắn hiển thị dưới hướng dẫn. */
  promptVi?: string;
  pairs: readonly { left: string; right: string }[];
};

export type VocabularyExercise =
  | VocabularyExerciseFillBlank
  | VocabularyExerciseMcq
  | VocabularyExerciseMatch;

/** Mỗi unit từ vựng tối đa 20 bài tập (một match = một câu). */
export const MAX_VOCABULARY_UNIT_EXERCISES = 20;

/**
 * Unit lesson = lý thuyết + bài tập + preset SRS words.
 * Nội dung biên soạn gốc; metadata `sourceNote` chỉ mô tả khung tham khảo.
 */
export type VocabularyUnit = {
  id: string;
  topic: string;
  topicVi: string;
  level: string;
  title: string;
  titleVi: string;
  /** Lời giới thiệu ngắn hiển thị dạng blockquote dưới tiêu đề deck. */
  introVi?: string;
  description: string;
  sourceBook: string;
  sourceNote: string;
  structureSections: readonly VocabularyStructureSection[];
  quote?: VocabularyUnitQuote;
  theory: readonly VocabularyTheoryBlock[];
  exercises: readonly VocabularyExercise[];
  words: readonly VocabularyWordPreset[];
};
