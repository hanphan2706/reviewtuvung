import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 79 — Singular and Plural.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 */
export const U79_SINGULAR_AND_PLURAL_TOPIC: GrammarTopicDetail = {
  slug: "u79-singular-and-plural",
  title: "Singular and Plural",
  levelLabel: "Intermediate",
  kindLabel: "Nouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 79",
  sourceNote:
    "trousers/glasses + cặp; -ics và news số ít; means/series/species; tập thể + động từ; money/time/distance số ít.",
  intro:
    "Unit này giúp bạn nắm Singular and Plural: Trousers/glasses + cặp; -ics và news số ít; means/series/species; tập thể + động từ; money/time/distance số ít.",
  structure: {
    affirmative:
      "plural noun (trousers…) + plural V | a pair of + … | -ics / news + singular V | collective ± singular/plural V | sum/time/distance + singular V",
    negative:
      "no trousers is | no a nice jeans | no The police is | no Three years are (time as one unit)",
  },
  usagePoints: [
    {
      before: "trousers / jeans / glasses / scissors → ",
      strong: "động từ số nhiều",
      after: "; hoặc a pair of…",
    },
    {
      before: "gymnastics / physics / news → ",
      strong: "số ít",
      after: ": Gymnastics is…; The news is…",
    },
    {
      before: "means / series / species: ",
      strong: "một dạng cho số ít và số nhiều",
      after: ".",
    },
    {
      before: "government / staff / team…: ",
      strong: "thường số nhiều",
      after: " khi nghĩ 'họ'; cũng có thể số ít.",
    },
    {
      before: "police + ",
      strong: "số nhiều",
      after: "; a police officer (không: a police). people + số nhiều.",
    },
    {
      before: "Số tiền / thời gian / khoảng cách → ",
      strong: "động từ số ít",
      after: ": Three years is a long time.",
    },
  ],
  examples: [
    {
      english: "My trousers are too long. I need a new pair of glasses.",
      vietnamese: "đồ hai phần → số nhiều / a pair of.",
    },
    {
      english: "Gymnastics is my favourite sport. I have some news for you. It's good!",
      vietnamese: "-ics và news → số ít.",
    },
    {
      english: "The government have decided to increase taxes.",
      vietnamese: "tập thể → thường số nhiều (have cũng đúng với wants).",
    },
    {
      english: "The police are investigating the crime.",
      vietnamese: "police luôn số nhiều.",
    },
    {
      english: "They are nice people. Many people don't have enough to eat.",
      vietnamese: "people số nhiều (không: persons / doesn't).",
    },
    {
      english: "Three years is a long time to be without a job. Two miles isn't very far.",
      vietnamese: "thời gian / khoảng cách → số ít.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 430,
  },
};
