import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 93 — Relative Clauses 2 (with / without who/that/which).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 92, 94–96.
 */
export const U93_RELATIVE_CLAUSES_2_TOPIC: GrammarTopicDetail = {
  slug: "u93-relative-clauses-2",
  title: "Relative Clauses 2",
  levelLabel: "Intermediate",
  kindLabel: "Relative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 93",
  sourceNote:
    "Đại từ quan hệ là chủ ngữ thì bắt buộc giữ; là tân ngữ thì có thể bỏ; giới từ thường đặt cuối mệnh đề; phân biệt what và that. Nên học kèm Unit 92 và Units 94–96.",
  intro:
    "Bài này giúp bạn biết khi nào phải giữ who, that hay which và khi nào có thể bỏ, đặt giới từ tự nhiên ở cuối mệnh đề quan hệ, và phân biệt what với that. Nên học kèm Unit 92 và Units 94–96.",
  structure: {
    affirmative:
      "Chủ ngữ: danh từ + who/that/which + V (bắt buộc giữ) | Tân ngữ: danh từ + (who/that/which) + S + V (có thể bỏ) | … + giới từ ở cuối mệnh đề",
    negative:
      "Khi là chủ ngữ: KHÔNG bỏ who/that/which | KHÔNG thêm them/it sau động từ | KHÔNG dùng what sau everything/all the money…",
  },
  usagePoints: [
    {
      before: "Khi who/that/which là ",
      strong: "chủ ngữ",
      after: " thì bắt buộc giữ: The people who work in the office are friendly.",
    },
    {
      before: "Khi who/that/which là ",
      strong: "tân ngữ",
      after: " thì có thể bỏ: Did you find the keys (that) you lost?",
    },
    {
      before: "Sau khi bỏ đại từ quan hệ tân ngữ thì ",
      strong: "KHÔNG",
      after: " thêm them hay it: the dress Lisa bought (không nói: bought it).",
    },
    {
      before: "Giới từ ",
      strong: "thường đặt cuối",
      after: " mệnh đề quan hệ: Do you know the woman Tom is talking to?",
    },
    {
      before: "Sau everything, all the money… dùng ",
      strong: "(that)",
      after: " hoặc bỏ that, không dùng what: all the money (that) I had.",
    },
    {
      before: "What = ",
      strong: "the thing(s) that",
      after: ": What they said was true.",
    },
  ],
  examples: [
    {
      english: "The woman who lives next door to me is a doctor.",
      vietnamese: "Who là chủ ngữ nên không được bỏ.",
    },
    {
      english: "The woman I wanted to see was away. / The woman who I wanted to see…",
      vietnamese: "Who là tân ngữ nên có thể bỏ trong nói thường.",
    },
    {
      english: "Did you find the keys you lost?",
      vietnamese: "Không thêm them sau lost.",
    },
    {
      english: "Are these the books you were looking for?",
      vietnamese: "Giới từ for đặt ở cuối mệnh đề quan hệ.",
    },
    {
      english: "I gave her all the money (that) I had. What they said was true.",
      vietnamese: "Sau all the money dùng that hoặc bỏ; what dùng riêng ở đầu câu.",
    },
    {
      english: "The bed I slept in wasn't comfortable.",
      vietnamese: "Mệnh đề quan hệ kèm giới từ in ở cuối.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 452,
  },
};
