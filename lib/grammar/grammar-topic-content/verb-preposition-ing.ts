import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 62 — Verb + Preposition + -ing.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 60 (preposition + -ing); decide to … ➜ Unit 54A; verb + preposition ➜ Units 132–136.
 */
export const U62_VERB_PREPOSITION_ING_TOPIC: GrammarTopicDetail = {
  slug: "u62-verb-preposition-ing",
  title: "Verb + Preposition + -ing",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 62",
  sourceNote:
    "succeed in / insist on / look forward to + -ing; accuse of, prevent from, thank for + object + -ing. Nên học kèm Unit 60.",
  intro:
    "Bài này giúp bạn nhớ các cặp động từ + giới từ thường gặp (succeed in, insist on, look forward to…) và mẫu verb + object + prep + -ing như accuse of, prevent from, thank for. Nên học kèm Unit 60.",
  structure: {
    affirmative:
      "V + prep + V-ing | V + object + prep + V-ing (accuse of, prevent from…)",
    negative:
      "V + prep + not + V-ing | accuse … of not + V-ing",
  },
  usagePoints: [
    {
      before: "Giới từ + động từ → ",
      strong: "-ing",
      after: ": We talked about going… You should apologise for not telling the truth.",
    },
    {
      before: "Các động từ thường gặp: ",
      strong: "succeed in, insist on, look forward to, feel like, dream of…",
      after: ": Has Paul succeeded in finding a job yet?",
    },
    {
      before: "Cũng dùng ",
      strong: "approve of / look forward to somebody doing",
      after: ": We're looking forward to Andy coming home.",
    },
    {
      before: "verb + object + prep + -ing: ",
      strong: "accuse of, congratulate on, prevent/stop from, thank for",
      after: ": He accused me of telling lies. I thanked everyone for helping me.",
    },
    {
      before: "stop somebody doing = ",
      strong: "stop somebody from doing",
      after: " (cả hai đều đúng).",
    },
    {
      before: "apologise ",
      strong: "to somebody for …",
      after: " (KHÔNG: apologise them): I apologised to them for keeping them waiting.",
    },
  ],
  examples: [
    {
      english: "We talked about going to South America.",
      vietnamese: "talk about + -ing — nói về việc làm gì.",
    },
    {
      english: "They insisted on paying for the meal.",
      vietnamese: "insist on + -ing — nhất định làm gì.",
    },
    {
      english: "Are you looking forward to going away?",
      vietnamese: "look forward to + -ing — mong chờ.",
    },
    {
      english: "What prevented you from coming to see us?",
      vietnamese: "prevent + object + from + -ing.",
    },
    {
      english: "He accused me of not telling the truth.",
      vietnamese: "accuse + object + of + -ing / not -ing.",
    },
    {
      english: "I apologised to them for keeping them waiting.",
      vietnamese: "apologise to somebody for … — không quên to trước người.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
