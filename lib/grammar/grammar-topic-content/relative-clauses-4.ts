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
    "Loại 1 (xác định, không dấu phẩy) và loại 2 (thêm thông tin, có dấu phẩy); that chỉ loại 1; loại 2 không bỏ who/which. Nên học kèm Units 92–94 và Unit 96.",
  intro:
    "Bài này giúp bạn phân biệt mệnh đề quan hệ xác định (loại 1) và mệnh đề quan hệ thêm thông tin (loại 2), biết khi nào dùng dấu phẩy, và quy tắc dùng that hay who/which. Nên học kèm Units 92–94 và Unit 96.",
  structure: {
    affirmative:
      "Loại 1: không dấu phẩy; who/that/which; tân ngữ có thể bỏ | Loại 2: , who/which/whom…, ; bắt buộc có dấu phẩy",
    negative:
      "Loại 2: KHÔNG dùng that | Loại 2: KHÔNG bỏ who/which | Loại 1: thường không có dấu phẩy",
  },
  usagePoints: [
    {
      before: "Loại 1 ",
      strong: "chỉ rõ",
      after: " ai hay cái gì — không dấu phẩy: We know people who live in London.",
    },
    {
      before: "Loại 2 ",
      strong: "thêm thông tin",
      after: " — có dấu phẩy: Ben, who lives in Hong Kong, is an architect.",
    },
    {
      before: "Loại 1 được dùng ",
      strong: "that",
      after: "; loại 2 chỉ dùng who hoặc which, không dùng that.",
    },
    {
      before: "Loại 1: bỏ who/that/which khi là ",
      strong: "tân ngữ",
      after: "; loại 2 thì không được bỏ.",
    },
    {
      before: "Loại 2 có thể dùng ",
      strong: "whom",
      after: " khi là tân ngữ chỉ người: Chris, whom I hadn't seen for ages…",
    },
    {
      before: "Cả hai loại đều dùng được ",
      strong: "whose và where",
      after: ": Lisa, whose car…; Sweden, where her daughter lives.",
    },
  ],
  examples: [
    {
      english: "The woman who lives next door to me is a doctor.",
      vietnamese: "Loại 1 — mệnh đề quan hệ xác định người phụ nữ nào.",
    },
    {
      english: "My brother Ben, who lives in Hong Kong, is an architect.",
      vietnamese: "Loại 2 — thêm thông tin về Ben, có dấu phẩy hai bên.",
    },
    {
      english: "We stayed at the hotel (that) you recommended.",
      vietnamese: "Loại 1 — that được dùng; bỏ được khi là tân ngữ.",
    },
    {
      english: "We stayed at the Park Hotel, which a friend of ours recommended.",
      vietnamese: "Loại 2 — dùng which, không dùng that, không bỏ đại từ.",
    },
    {
      english: "Anna told me about her new job, which she's enjoying a lot.",
      vietnamese: "Loại 2 không dùng that she's enjoying.",
    },
    {
      english: "Kate has just been to Sweden, where her daughter lives.",
      vietnamese: "Where dùng trong mệnh đề quan hệ loại 2.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 477,
  },
};
