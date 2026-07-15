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
    "who/that (người); that/which (vật); không he/she/they trong mệnh đề quan hệ; what ≠ that. Nên học kèm Units 93–96.",
  intro:
    "Unit này giúp bạn nắm Relative Clauses 1: Who/that (người); that/which (vật); không he/she/they trong mệnh đề quan hệ; what ≠ that. Nên học kèm Units 93–96.",
  structure: {
    affirmative:
      "noun + who/that + V (people) | noun + that/which + V (things) | What + V = the thing(s) that…",
    negative:
      "not which for people | not who for things | not he/she/they/it in the clause | not Everything what…",
  },
  usagePoints: [
    {
      before: "Relative clause ",
      strong: "chỉ rõ người/vật nào",
      after: ": the woman who lives next door to me.",
    },
    {
      before: "Người → ",
      strong: "who / that",
      after: " (không which): An architect is someone who designs buildings.",
    },
    {
      before: "Vật → ",
      strong: "that / which",
      after: " (không who): Grace works for a company that/which makes furniture.",
    },
    {
      before: "Không dùng ",
      strong: "he / she / they / it",
      after: " trong mệnh đề quan hệ: Where are the keys that were on the table?",
    },
    {
      before: "what = ",
      strong: "the thing(s) that",
      after: ": What happened was my fault. ≠ Everything that happened…",
    },
    {
      before: "that với vật ",
      strong: "thường hơn which",
      after: "; đôi khi bắt buộc which — Unit 95.",
    },
  ],
  examples: [
    {
      english: "Everybody who came to the party enjoyed it.",
      vietnamese: "who = những người đến buổi tiệc.",
    },
    {
      english: "The woman who/that lives next door to me is a doctor.",
      vietnamese: "Người → who hoặc that (không which).",
    },
    {
      english: "I don't like stories that/which have unhappy endings.",
      vietnamese: "Vật → that hoặc which.",
    },
    {
      english: "I met a Canadian woman who is an English teacher.",
      vietnamese: "Gộp hai câu — không: who she is…",
    },
    {
      english: "What happened was my fault. Everything that happened was my fault.",
      vietnamese: "what ≠ that sau everything.",
    },
    {
      english: "Do you know anyone who wants to buy a car?",
      vietnamese: "who + V trong mệnh đề quan hệ.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 468,
  },
};
