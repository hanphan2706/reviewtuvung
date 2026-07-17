import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 92 — Relative Clauses 1 (who / that / which).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 93–96 (Relative clauses 2–5).
 */
export const U92_RELATIVE_CLAUSES_1_TOPIC: GrammarTopicDetail = {
  slug: "u92-relative-clauses-1",
  title: "Relative Clauses 1",
  levelLabel: "Intermediate",
  kindLabel: "Relative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 92",
  sourceNote:
    "Mệnh đề quan hệ xác định khi đại từ quan hệ là chủ ngữ: who/that (người), that/which (vật); không thêm đại từ thừa; phân biệt what và that. Nên học kèm Units 93–96.",
  intro:
    "Bài này giúp bạn dùng mệnh đề quan hệ xác định với who, that và which khi đại từ quan hệ đóng vai trò chủ ngữ, biết chọn đại từ cho người hay vật, và tránh thêm đại từ thừa trong mệnh đề. Nên học kèm Units 93–96.",
  structure: {
    affirmative:
      "Người: danh từ + who/that + V | Vật: danh từ + that/which + V | What + V = the thing(s) that…",
    negative:
      "Người: KHÔNG dùng which | Vật: KHÔNG dùng who | Trong mệnh đề quan hệ KHÔNG thêm he/she/they/it | KHÔNG nói Everything what…",
  },
  usagePoints: [
    {
      before: "Mệnh đề quan hệ ",
      strong: "chỉ rõ",
      after: " người hoặc vật nào: the woman who lives next door to me.",
    },
    {
      before: "Chỉ người thì dùng ",
      strong: "who hoặc that",
      after: " (không dùng which): An architect is someone who designs buildings.",
    },
    {
      before: "Chỉ vật thì dùng ",
      strong: "that hoặc which",
      after: " (không dùng who): Grace works for a company that/which makes furniture.",
    },
    {
      before: "Trong mệnh đề quan hệ ",
      strong: "KHÔNG",
      after: " thêm he, she, they hay it: Where are the keys that were on the table? (không nói: that they were…)",
    },
    {
      before: "What = ",
      strong: "the thing(s) that",
      after: ": What happened was my fault. Khác với Everything that happened…",
    },
    {
      before: "Với vật, ",
      strong: "that",
      after: " thường dùng hơn which; đôi khi bắt buộc dùng which — xem thêm Unit 95.",
    },
  ],
  examples: [
    {
      english: "Everybody who came to the party enjoyed it.",
      vietnamese: "Mệnh đề quan hệ chỉ những người đã đến buổi tiệc.",
    },
    {
      english: "The woman who/that lives next door to me is a doctor.",
      vietnamese: "Chỉ người nên dùng who hoặc that, không dùng which.",
    },
    {
      english: "I don't like stories that/which have unhappy endings.",
      vietnamese: "Chỉ vật nên dùng that hoặc which.",
    },
    {
      english: "I met a Canadian woman who is an English teacher.",
      vietnamese: "Gộp hai câu bằng mệnh đề quan hệ, không thêm she sau who.",
    },
    {
      english: "What happened was my fault. Everything that happened was my fault.",
      vietnamese: "Sau everything phải dùng that, không dùng what.",
    },
    {
      english: "Do you know anyone who wants to buy a car?",
      vietnamese: "Who đứng trước động từ vì là chủ ngữ trong mệnh đề quan hệ.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 468,
  },
};
