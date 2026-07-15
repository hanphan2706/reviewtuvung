import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 69 — Countable and Uncountable 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 70 (Countable and Uncountable 2).
 */
export const U69_COUNTABLE_AND_UNCOUNTABLE_1_TOPIC: GrammarTopicDetail = {
  slug: "u69-countable-and-uncountable-1",
  title: "Countable and Uncountable 1",
  levelLabel: "Intermediate",
  kindLabel: "Nouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 69",
  sourceNote:
    "Danh từ đếm được / không đếm được; a/an với đếm được số ít; some/any, many/few vs much/little. Nên học kèm Unit 70.",
  intro:
    "Danh từ đếm được / không đếm được; a/an với đếm được số ít; some/any, many/few vs much/little. Nên học kèm Unit 70.",
  structure: {
    affirmative:
      "a/an + singular countable | (some) + plural countable / uncountable | a … of + uncountable",
    negative:
      "no a/an with uncountable | no bare singular countable | many/few (plural) · much/little (uncountable)",
  },
  usagePoints: [
    {
      before: "Countable = ",
      strong: "đếm được",
      after: ": singular/plural, dùng số: a banana / bananas; one banana, two bananas.",
    },
    {
      before: "Uncountable = ",
      strong: "không đếm được",
      after: ": một dạng, không số nhiều, không số: rice, music, sand, money.",
    },
    {
      before: "a/an chỉ với ",
      strong: "danh từ đếm được số ít",
      after: ": a beach, an accident. Không: want banana / There's been accident.",
    },
    {
      before: "Không dùng a/an với ",
      strong: "uncountable",
      after: "; dùng a … of: a bowl / a packet of rice.",
    },
    {
      before: "some/any với ",
      strong: "số nhiều và uncountable",
      after: ": some songs / some music; any apples / any apple juice.",
    },
    {
      before: "many/few với ",
      strong: "số nhiều",
      after: "; much/little với uncountable: many pictures / much shopping; a few things / a little work.",
    },
  ],
  examples: [
    {
      english: "I eat a banana every day. I like bananas.",
      vietnamese: "Banana đếm được: số ít có a; số nhiều đứng một mình khi nói chung.",
    },
    {
      english: "I eat rice every day. I like rice.",
      vietnamese: "Rice không đếm được: không số nhiều, không a rice.",
    },
    {
      english: "Do you want a banana? There's been an accident.",
      vietnamese: "Số ít đếm được cần a/an — không để trống.",
    },
    {
      english: "We sang some songs. We listened to some music.",
      vietnamese: "some với số nhiều đếm được và với uncountable.",
    },
    {
      english: "We didn't take many pictures. We didn't do much shopping.",
      vietnamese: "many + số nhiều; much + uncountable.",
    },
    {
      english: "I have a few things to do. I have a little work to do.",
      vietnamese: "a few + số nhiều; a little + uncountable.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
