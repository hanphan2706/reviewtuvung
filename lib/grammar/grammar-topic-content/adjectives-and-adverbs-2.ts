import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 101 — Adjectives and Adverbs 2 (well, fast, late, hard/hardly).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 100.
 */
export const U101_ADJECTIVES_AND_ADVERBS_2_TOPIC: GrammarTopicDetail = {
  slug: "u101-adjectives-and-adverbs-2",
  title: "Adjectives and Adverbs 2",
  levelLabel: "Intermediate",
  kindLabel: "Adverb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 101",
  sourceNote:
    "good/well; well-known…; fast/hard/late; hardly (= almost not); hardly any/ever. Nên học kèm Unit 100.",
  intro:
    "Trong unit này bạn sẽ nắm: good/well; well-known…; fast/hard/late; hardly (= almost not); hardly any/ever. Nên học kèm Unit 100.",
  structure: {
    affirmative:
      "good (adj) / well (adv, health) | fast/hard/late (adj=adv) | hardly + V | hardly any/ever…",
    negative:
      "not works hardly (= barely) when you mean hard | not know each other hardly | not good as adverb of manner",
  },
  usagePoints: [
    {
      before: "good → noun/be; ",
      strong: "well → động từ / khỏe / V3",
      after: ": plays well; well-known; I'm well.",
    },
    {
      before: "fast / hard / late: ",
      strong: "adj và adv giống form",
      after: ": a fast runner / run fast; work hard.",
    },
    {
      before: "lately = ",
      strong: "recently",
      after: "; late = muộn.",
    },
    {
      before: "hardly = ",
      strong: "almost not",
      after: ": He hardly tried. I can hardly read it.",
    },
    {
      before: "hardly ",
      strong: "any / anybody / anything / anywhere / ever",
      after: ": Hardly anybody passed. I hardly ever go out.",
    },
    {
      before: "It's hardly surprising… = ",
      strong: "chắc chắn không ngạc nhiên",
      after: " / hardly a crisis…",
    },
  ],
  examples: [
    {
      english: "Your English is good. You speak English well.",
      vietnamese: "good (adj) / well (adv).",
    },
    {
      english: "Sophie's father is a well-known writer. I'm very well, thanks.",
      vietnamese: "well-known; well = khỏe.",
    },
    {
      english: "Kate works hard. He hardly tried.",
      vietnamese: "hard ≠ hardly.",
    },
    {
      english: "Sorry I'm late. Have you seen Kate lately?",
      vietnamese: "late / lately.",
    },
    {
      english: "I can hardly walk. There's hardly anything in the fridge.",
      vietnamese: "hardly + V; hardly anything.",
    },
    {
      english: "I hardly ever go out in the evenings.",
      vietnamese: "hardly ever = almost never.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 498,
  },
};
