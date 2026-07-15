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
    "Câu hỏi gián tiếp (Do you know…?); if/whether; reported questions. Nên học kèm Unit 49; Units 47–48.",
  intro:
    "Câu hỏi gián tiếp (Do you know…?); if/whether; reported questions. Nên học kèm Unit 49 và Units 47–48.",
  structure: {
    affirmative:
      "Do you know + question word + S + verb…? | asked if/whether + S + verb | asked + wh- + S + verb",
    negative:
      "I don't know if/whether… | I wonder why she left… (không đảo)",
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
      vietnamese: "Bạn có biết Tom đã đi đâu không? (không: where has Tom gone)",
    },
    {
      english: "Do you know what time the film starts?",
      vietnamese: "Bạn có biết phim bắt đầu lúc mấy không?",
    },
    {
      english: "I don't know if anybody saw me.",
      vietnamese: "Tôi không biết có ai thấy tôi không. (if/whether)",
    },
    {
      english: "The police officer asked us where we were going.",
      vietnamese: "Cảnh sát hỏi chúng tôi đang đi đâu.",
    },
    {
      english: "She asked if I was willing to travel.",
      vietnamese: "Cô ấy hỏi liệu tôi có sẵn sàng đi công tác không.",
    },
    {
      english: "She wanted to know what I did in my spare time.",
      vietnamese: "Cô ấy muốn biết tôi làm gì lúc rảnh.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 495,
  },
};
