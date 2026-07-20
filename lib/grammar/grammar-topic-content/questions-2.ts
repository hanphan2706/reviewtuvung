import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 50 — Questions 2 (Do you know where…? / he asked me where…).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 49; reported speech ➜ Units 47–48.
 */
export const U50_QUESTIONS_2_TOPIC: GrammarTopicDetail = {
  slug: "u50-questions-2",
  title: "Questions 2",
  levelLabel: "Intermediate",
  kindLabel: "Question",
  sourceBook: "English Grammar in Use · Intermediate · Unit 50",
  sourceNote:
    "Câu hỏi gián tiếp (Do you know…?) giữ nguyên trật tự chủ ngữ + động từ, không đảo, không dùng do/does/did; if/whether khi không có từ hỏi. Nên học kèm Unit 49; Units 47–48.",
  intro:
    "Bài này giúp bạn giữ nguyên trật tự chủ ngữ trước động từ trong câu hỏi gián tiếp (Do you know where…?) và trong reported questions, bỏ do/does/did, và dùng if/whether khi câu hỏi không có từ hỏi. Nên học kèm Unit 49 (câu hỏi trực tiếp) và Units 47–48 (reported speech).",
  structure: {
    affirmative:
      "Do you know + question word + S + verb…? | asked if/whether + S + verb | asked + wh- + S + verb",
    negative:
      "KHÔNG đảo trợ động từ lên trước chủ ngữ trong câu hỏi gián tiếp → Do you know where Tom has gone? (không: where has Tom gone) | I don't know if/whether…",
  },
  usagePoints: [
    {
      before: "Câu hỏi nằm trong câu dài → ",
      strong: "S trước động từ",
      after: ": Do you know where Tom has gone? (không: where has Tom)",
    },
    {
      before: "do/does/did biến mất trong ",
      strong: "câu hỏi gián tiếp",
      after: ": … what time the film starts (không: does the film start)",
    },
    {
      before: "Không có wh- → ",
      strong: "if / whether",
      after: ": I don't know if anybody saw me.",
    },
    {
      before: "Reported questions: ",
      strong: "cùng word order",
      after: ": She asked if I was willing to travel.",
    },
    {
      before: "Trong reported, động từ ",
      strong: "thường past",
      after: ": how long I had been working; why I had applied / applied.",
    },
    {
      before: "Ví dụ: ",
      strong: "Could you tell me where…?",
      after: " I wonder how old Tom is.",
    },
  ],
  examples: [
    {
      english: "Do you know where Tom has gone?",
      vietnamese: "Where Tom has gone = giữ nguyên trật tự S trước V, không đảo.",
    },
    {
      english: "Do you know what time the film starts?",
      vietnamese: "The film starts = KHÔNG dùng does trong câu hỏi gián tiếp.",
    },
    {
      english: "I don't know if anybody saw me.",
      vietnamese: "If anybody saw = dùng if khi câu hỏi gốc không có từ hỏi.",
    },
    {
      english: "The police officer asked us where we were going.",
      vietnamese: "Where we were going = reported question giữ nguyên trật tự S–V.",
    },
    {
      english: "She asked if I was willing to travel.",
      vietnamese: "If I was willing = if/whether trong reported question.",
    },
    {
      english: "She wanted to know what I did in my spare time.",
      vietnamese: "What I did = did lùi từ do trong reported question.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 495,
  },
};
