import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 91 — Each and Every.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 90 (all / every / whole).
 */
export const U91_EACH_AND_EVERY_TOPIC: GrammarTopicDetail = {
  slug: "u91-each-and-every",
  title: "Each and Every",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 91",
  sourceNote:
    "each = từng cái một; every ≈ all; each cho 2; every cho tần suất; each of / every one of; everyone vs every one. Nên học kèm Unit 90.",
  intro:
    "Unit này giúp bạn nắm Each and Every: Each = từng cái một; every ≈ all; each cho 2; every cho tần suất; each of / every one of; everyone vs every one. Nên học kèm Unit 90.",
  structure: {
    affirmative:
      "each/every + N | each of + the/them… | every one (of …) | N + each | … each + V",
    negative:
      "not every of | not each day (for frequency) | not every team (for exactly two)",
  },
  usagePoints: [
    {
      before: "each = ",
      strong: "từng cái một",
      after: " (thường số nhỏ); every ≈ all (thường số lớn).",
    },
    {
      before: "Đúng hai thứ → ",
      strong: "each",
      after: " (không every): each team has eleven players.",
    },
    {
      before: "Tần suất → ",
      strong: "every day / every ten minutes",
      after: " (không each day).",
    },
    {
      before: "each of the/them…; ",
      strong: "every one of …",
      after: " (không: every of).",
    },
    {
      before: "Giá / phân phối: ",
      strong: "a pound each",
      after: "; were each given…",
    },
    {
      before: "everyone = everybody; ",
      strong: "every one",
      after: " = từng cái/người (hai từ).",
    },
  ],
  examples: [
    {
      english: "Each book was a different colour. Every window in the house was open.",
      vietnamese: "each từng cái; every ≈ all.",
    },
    {
      english: "In football, each team has eleven players.",
      vietnamese: "hai đội → each (không every).",
    },
    {
      english: "'How often do you use your car?' 'Every day.'",
      vietnamese: "tần suất → every.",
    },
    {
      english: "Each of the books was a different colour. I've read every one of them.",
      vietnamese: "each of… / every one of…",
    },
    {
      english: "Those oranges are 40 pence each. We paid 200 dollars each.",
      vietnamese: "each = mỗi cái / mỗi người.",
    },
    {
      english: "Everyone enjoyed the party. She goes to every one. (= every party)",
      vietnamese: "everyone vs every one.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 495,
  },
};
