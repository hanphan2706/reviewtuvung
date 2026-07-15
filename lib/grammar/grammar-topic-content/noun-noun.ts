import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 80 — Noun + Noun.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 */
export const U80_NOUN_NOUN_TOPIC: GrammarTopicDetail = {
  slug: "u80-noun-noun",
  title: "Noun + Noun",
  levelLabel: "Intermediate",
  kindLabel: "Nouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 80",
  sourceNote:
    "Danh từ + danh từ (bus driver); chuỗi danh từ; coffee cup vs cup of coffee; a three-hour journey.",
  intro:
    "Danh từ + danh từ (bus driver); chuỗi danh từ; coffee cup vs cup of coffee; a three-hour journey.",
  structure: {
    affirmative:
      "N1 (sg) + N2 | N1 + N2 + N3… | number-unit + N (a three-hour journey)",
    negative:
      "no plural on measuring N before noun (not a three-hours flight) | coffee cup ≠ cup of coffee",
  },
  usagePoints: [
    {
      before: "N1 + N2: N1 như ",
      strong: "tính từ (loại gì)",
      after: ": bus driver, health problems, Paris hotel.",
    },
    {
      before: "Có thể ",
      strong: "chuỗi danh từ",
      after: ": hotel reception desk; school football team.",
    },
    {
      before: "N1 thường ",
      strong: "số ít",
      after: " dù nghĩa nhiều: car park, apple tree, ticket machine.",
    },
    {
      before: "a coffee cup ≠ ",
      strong: "a cup of coffee",
      after: " (loại cốc vs cốc đang đựng).",
    },
    {
      before: "Đo lường + danh từ: ",
      strong: "a three-hour journey",
      after: " / a ten-pound note / a six-year-old child.",
    },
    {
      before: "Sau số + đơn vị đứng ",
      strong: "một mình → số nhiều",
      after: ": The course lasted four weeks. It took two hours.",
    },
  ],
  examples: [
    {
      english: "A bus driver is someone who drives a bus. Income tax is tax on your income.",
      vietnamese: "noun + noun = loại người / loại thuế.",
    },
    {
      english: "You need a frying pan and a washing machine.",
      vietnamese: "-ing + noun = dụng cụ dùng để…",
    },
    {
      english: "I waited at the hotel reception desk.",
      vietnamese: "ba danh từ ghép.",
    },
    {
      english: "a coffee cup / a cup of coffee",
      vietnamese: "loại cốc vs một cốc cà phê.",
    },
    {
      english: "It was a four-week course. The course lasted four weeks.",
      vietnamese: "tính từ đo lường số ít có gạch nối; predicate dùng số nhiều.",
    },
    {
      english: "Sam has a six-year-old daughter. She is six years old.",
      vietnamese: "six-year-old + noun; be + six years old.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 435,
  },
};
