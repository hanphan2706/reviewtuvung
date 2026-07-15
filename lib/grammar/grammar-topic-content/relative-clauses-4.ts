import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 95 — Relative Clauses 4 (extra information clauses 1).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 92–94, 96.
 */
export const U95_RELATIVE_CLAUSES_4_TOPIC: GrammarTopicDetail = {
  slug: "u95-relative-clauses-4",
  title: "Relative Clauses 4",
  levelLabel: "Intermediate",
  kindLabel: "Relative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 95",
  sourceNote:
    "Type 1 (xác định, không dấu phẩy) vs Type 2 (thêm thông tin, có dấu phẩy); that chỉ Type 1; không bỏ who/which ở Type 2. Nên học kèm Units 92–94, 96.",
  intro:
    "Type 1 (xác định, không dấu phẩy) vs Type 2 (thêm thông tin, có dấu phẩy); that chỉ Type 1; không bỏ who/which ở Type 2. Nên học kèm Units 92–94 và Unit 96.",
  structure: {
    affirmative:
      "Type 1: no commas; who/that/which; object pronoun optional | Type 2: , who/which/whom…, ; commas required",
    negative:
      "Type 2: not that | Type 2: don't drop who/which | Type 1: usually no commas",
  },
  usagePoints: [
    {
      before: "Type 1 = ",
      strong: "chỉ rõ ai/cái gì",
      after: " — không dấu phẩy: We know people who live in London.",
    },
    {
      before: "Type 2 = ",
      strong: "thêm thông tin",
      after: " — có dấu phẩy: Ben, who lives in Hong Kong, is an architect.",
    },
    {
      before: "Type 1: được dùng ",
      strong: "that",
      after: "; Type 2: không that → who/which.",
    },
    {
      before: "Type 1: bỏ who/that/which khi ",
      strong: "là tân ngữ",
      after: "; Type 2: không bỏ.",
    },
    {
      before: "Type 2: có thể ",
      strong: "whom",
      after: " (tân ngữ người): Chris, whom I hadn't seen for ages…",
    },
    {
      before: "Cả hai loại: ",
      strong: "whose / where",
      after: ": Lisa, whose car…; Sweden, where her daughter lives.",
    },
  ],
  examples: [
    {
      english: "The woman who lives next door to me is a doctor.",
      vietnamese: "Type 1 — xác định người nào.",
    },
    {
      english: "My brother Ben, who lives in Hong Kong, is an architect.",
      vietnamese: "Type 2 — thêm thông tin, có dấu phẩy.",
    },
    {
      english: "We stayed at the hotel (that) you recommended.",
      vietnamese: "Type 1 — that được; bỏ được khi là tân ngữ.",
    },
    {
      english: "We stayed at the Park Hotel, which a friend of ours recommended.",
      vietnamese: "Type 2 — which, không that, không bỏ.",
    },
    {
      english: "Anna told me about her new job, which she's enjoying a lot.",
      vietnamese: "Type 2 — không: that she's enjoying.",
    },
    {
      english: "Kate has just been to Sweden, where her daughter lives.",
      vietnamese: "where trong Type 2.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 477,
  },
};
