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
    "succeed in -ing, insist on -ing, look forward to -ing…; accuse of, prevent from, thank for… Nên học kèm Unit 60 (preposition + -ing).",
  intro:
    "Trong unit này bạn sẽ nắm: succeed in -ing, insist on -ing, look forward to -ing…; accuse of, prevent from, thank for…. Nên học kèm Unit 60.",
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
      after: " (không: apologise them): I apologised to them for keeping them waiting.",
    },
  ],
  examples: [
    {
      english: "We talked about going to South America.",
      vietnamese: "Chúng tôi nói về việc đi Nam Mỹ.",
    },
    {
      english: "They insisted on paying for the meal.",
      vietnamese: "Họ nhất định trả tiền bữa ăn.",
    },
    {
      english: "Are you looking forward to going away?",
      vietnamese: "Bạn có mong được đi chơi không?",
    },
    {
      english: "What prevented you from coming to see us?",
      vietnamese: "Điều gì đã ngăn bạn đến thăm chúng tôi?",
    },
    {
      english: "He accused me of not telling the truth.",
      vietnamese: "Anh ấy buộc tội tôi không nói sự thật.",
    },
    {
      english: "I apologised to them for keeping them waiting.",
      vietnamese: "Tôi xin lỗi họ vì đã để họ phải chờ. (không: apologised them)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
