import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 99 — Adjectives (order; after verbs; the first two…).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 100–101 (adjectives and adverbs).
 */
export const U99_ADJECTIVES_TOPIC: GrammarTopicDetail = {
  slug: "u99-adjectives",
  title: "Adjectives",
  levelLabel: "Intermediate",
  kindLabel: "Adjective",
  sourceBook: "English Grammar in Use · Intermediate · Unit 99",
  sourceNote:
    "opinion trước fact; thứ tự fact; sau be/look/feel…; the first two / next few…. Nên học kèm Units 100–101.",
  intro:
    "Unit này giúp bạn nắm Adjectives: Opinion trước fact; thứ tự fact; sau be/look/feel…; the first two / next few… Nên học kèm Units 100–101.",
  structure: {
    affirmative:
      "opinion + fact(s) + noun | be/look/feel/sound/taste/smell + adj | the first/next/last + number + noun",
    negative:
      "not fact before opinion (usually) | not Drive careful | not the two first days",
  },
  usagePoints: [
    {
      before: "Opinion ",
      strong: "trước",
      after: " fact: a nice long holiday; an interesting young man.",
    },
    {
      before: "Fact gợi ý: ",
      strong: "size → age → colour → origin → material",
      after: ": a small black plastic bag.",
    },
    {
      before: "Hai màu: ",
      strong: "and",
      after: "; tính từ khác trước danh từ thường không and: a long black dress.",
    },
    {
      before: "Sau ",
      strong: "be / look / feel / sound / taste / smell",
      after: ": She seems nice. The dinner smells good.",
    },
    {
      before: "Cách làm → ",
      strong: "trạng từ",
      after: " (Unit 100): Drive carefully. plays … well.",
    },
    {
      before: "the first two / the next few / the last ten… — ",
      strong: "không đảo số",
      after: " trước first/next/last.",
    },
  ],
  examples: [
    {
      english: "My brother lives in a nice new house.",
      vietnamese: "opinion (nice) trước fact (new).",
    },
    {
      english: "In the kitchen there was a beautiful large round wooden table.",
      vietnamese: "opinion + size + shape + material.",
    },
    {
      english: "a black and white dress; a long black dress",
      vietnamese: "hai màu + and; không long and black.",
    },
    {
      english: "You look tired. This tea tastes a bit strange.",
      vietnamese: "tính từ sau look / taste.",
    },
    {
      english: "Drive carefully! Suzanne plays the piano very well.",
      vietnamese: "trạng từ — Unit 100.",
    },
    {
      english: "I didn't enjoy the first two days of the course.",
      vietnamese: "the first two (không: the two first).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 492,
  },
};
