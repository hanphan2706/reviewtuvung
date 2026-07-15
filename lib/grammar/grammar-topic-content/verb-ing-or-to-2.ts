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
    "try to … vs try -ing; need to … vs need -ing; help (to) do; can't help -ing. Nên học kèm Units 53–54, 56, 58.",
  intro:
    "Trong unit này bạn sẽ nắm: try to … vs try -ing; need to … vs need -ing; help (to) do; can't help -ing. Nên học kèm Units 53–54, 56 và 58.",
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
      after: " = cố gắng: I tried to move the table, but it was too heavy.",
    },
    {
      before: "try + ",
      strong: "-ing",
      after: " = thử xem: Try pressing the green button. I tried moving the table to the other side.",
    },
    {
      before: "need + ",
      strong: "to …",
      after: " = cần phải: He needs to work harder. I need to charge my phone.",
    },
    {
      before: "something + ",
      strong: "needs -ing",
      after: " (= needs to be …): My phone needs charging. Does your suit need cleaning?",
    },
    {
      before: "help: ",
      strong: "(to) do",
      after: " — hai dạng: Everybody helped (to) clean up. Can you help me (to) move…?",
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
      vietnamese: "Tôi rất mệt. Tôi cố mở mắt nhưng không được.",
    },
    {
      english: "The photocopier doesn't work. Try pressing the green button.",
      vietnamese: "Máy photocopy không chạy. Thử nhấn nút xanh xem.",
    },
    {
      english: "I need to charge my phone. / My phone needs charging.",
      vietnamese: "Tôi cần sạc điện thoại. / Điện thoại tôi cần được sạc.",
    },
    {
      english: "Does your suit need cleaning?",
      vietnamese: "Áo của bạn có cần giặt không? (= need to be cleaned)",
    },
    {
      english: "Everybody helped (to) clean up after the party.",
      vietnamese: "Mọi người giúp dọn sau buổi tiệc. (có/không to đều đúng)",
    },
    {
      english: "She tried to be serious, but she couldn't help laughing.",
      vietnamese: "Cô ấy cố nghiêm túc nhưng không nhịn được cười.",
    },
    {
      english: "I'm sorry I'm so nervous. I can't help it.",
      vietnamese: "Xin lỗi tôi quá lo. Tôi không thể không thế.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
