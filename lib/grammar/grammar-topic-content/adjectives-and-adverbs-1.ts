import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 100 — Adjectives and Adverbs 1 (quick/quickly).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 101 (well, fast, hard/hardly…); Unit 99C.
 */
export const U100_ADJECTIVES_AND_ADVERBS_1_TOPIC: GrammarTopicDetail = {
  slug: "u100-adjectives-and-adverbs-1",
  title: "Adjectives and Adverbs 1",
  levelLabel: "Intermediate",
  kindLabel: "Adverb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 100",
  sourceNote:
    "adj + -ly → adv; adj trước noun / sau be-look…; adv sau động từ; adv + adj/adv/V3. Nên học kèm Unit 101.",
  intro:
    "Unit này giúp bạn nắm Adjectives and Adverbs 1: Adj + -ly → adv; adj trước noun / sau be-look…; adv sau động từ; adv + adj/adv/V3. Nên học kèm Unit 101 (well, fast, late, hard/hardly).",
  structure: {
    affirmative:
      "adj + noun | be/look/feel + adj | V + adv | adv + adj/adv | adv + past participle",
    negative:
      "not a carefully driver | not Drive careful | not raining heavy | not serious injured",
  },
  usagePoints: [
    {
      before: "Thường: adj + ",
      strong: "-ly → adv",
      after: ": quickly, seriously, carefully, badly, heavily.",
    },
    {
      before: "Một số -ly là ",
      strong: "tính từ",
      after: ": friendly, lively, lonely, lovely…",
    },
    {
      before: "Tính từ: ",
      strong: "trước noun / sau be-look…",
      after: ": Sam is a careful driver. Why do you look so serious?",
    },
    {
      before: "Trạng từ: ",
      strong: "cách làm động từ",
      after: ": Sam drove carefully. It was raining heavily.",
    },
    {
      before: "adv + adj/adv: ",
      strong: "reasonably cheap, incredibly quickly",
      after: ", terribly sorry…",
    },
    {
      before: "adv + V3: ",
      strong: "seriously injured, badly organised",
      after: " (không: serious injured).",
    },
  ],
  examples: [
    {
      english: "Our holiday was too short — the time passed very quickly.",
      vietnamese: "quickly = trạng từ.",
    },
    {
      english: "Sam is a careful driver. Sam drove carefully along the narrow road.",
      vietnamese: "careful (adj) vs carefully (adv).",
    },
    {
      english: "Please be quiet. Please speak quietly.",
      vietnamese: "be + adj; speak + adv.",
    },
    {
      english: "It's a reasonably cheap restaurant. I'm terribly sorry.",
      vietnamese: "adv + adj.",
    },
    {
      english: "Two people were seriously injured in the accident.",
      vietnamese: "adv + past participle.",
    },
    {
      english: "She speaks perfect English. She speaks English perfectly.",
      vietnamese: "adj + noun vs verb + adv.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
