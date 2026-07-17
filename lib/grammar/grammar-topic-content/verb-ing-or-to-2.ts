import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 57 — Verb + -ing or to … 2 (try, need, help).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 53–54, 56, 58.
 */
export const U57_VERB_ING_OR_TO_2_TOPIC: GrammarTopicDetail = {
  slug: "u57-verb-ing-or-to-2",
  title: "Verb + -ing or to … 2",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 57",
  sourceNote:
    "try to … (cố) khác try -ing (thử); need to … khác need -ing (= cần được…); help (to) do; can't help -ing. Nên học kèm Units 53–54, 56, 58.",
  intro:
    "Bài này giúp bạn phân biệt try to … với try -ing, need to … với need -ing (cần được làm gì), và nắm help (to) do cùng can't help -ing. Nên học kèm Units 53–54, 56 và 58.",
  structure: {
    affirmative:
      "try + to + V | try + V-ing | need + to + V | need + V-ing | help (+ O) (+ to) + V | can't help + V-ing",
    negative:
      "don't try to + V | don't need to + V | doesn't need + V-ing | can't help + V-ing",
  },
  usagePoints: [
    {
      before: "try + ",
      strong: "to …",
      after: " = cố gắng làm: I tried to move the table, but it was too heavy.",
    },
    {
      before: "try + ",
      strong: "-ing",
      after: " = thử một cách xem sao: Try pressing the green button.",
    },
    {
      before: "need + ",
      strong: "to …",
      after: " = cần phải làm: He needs to work harder. I need to charge my phone.",
    },
    {
      before: "something + ",
      strong: "needs -ing",
      after: " = cần được… (= needs to be …): My phone needs charging.",
    },
    {
      before: "help: ",
      strong: "(to) do",
      after: " — hai dạng đều đúng: Everybody helped (to) clean up.",
    },
    {
      before: "can't help + ",
      strong: "-ing",
      after: " = không thể kiềm / không thể không: I can't help feeling sorry for him.",
    },
  ],
  examples: [
    {
      english: "I was very tired. I tried to keep my eyes open, but I couldn't.",
      vietnamese: "Cố giữ mắt mở — try + to …",
    },
    {
      english: "The photocopier doesn't work. Try pressing the green button.",
      vietnamese: "Thử một cách khắc phục — try + -ing.",
    },
    {
      english: "I need to charge my phone. / My phone needs charging.",
      vietnamese: "Tôi cần sạc / Máy cần được sạc — need to … vs need -ing.",
    },
    {
      english: "Does your suit need cleaning?",
      vietnamese: "Áo có cần được giặt không? (= need to be cleaned)",
    },
    {
      english: "Everybody helped (to) clean up after the party.",
      vietnamese: "help + (to) do — có hoặc không to đều được.",
    },
    {
      english: "She tried to be serious, but she couldn't help laughing.",
      vietnamese: "Không nhịn được cười — can't help + -ing.",
    },
    {
      english: "I'm sorry I'm so nervous. I can't help it.",
      vietnamese: "can't help it = không thể làm khác được.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
