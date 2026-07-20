import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 29 — may and might 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 30 (may and might 2).
 */
export const U29_MAY_AND_MIGHT_1_TOPIC: GrammarTopicDetail = {
  slug: "u29-may-and-might-1",
  title: "May and Might 1",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 29",
  sourceNote:
    "may / might 1: khả năng hiện tại (may/might be…), quá khứ (may/might have…), phân biệt might not have với couldn't have. Nên học kèm Unit 30 và Unit 27.",
  intro:
    "Bài này giúp bạn dùng may và might để nói có lẽ (hiện tại và quá khứ), phân biệt may be với maybe, và chọn đúng giữa might not have và couldn't have. Nên học kèm Unit 30 (may/might với tương lai và might as well) và Unit 27 (could).",
  structure: {
    affirmative: "S + may/might + V / be / be -ing | S + may/might have + V3",
    negative:
      "KHÔNG nhầm may be (2 từ, động từ) với maybe (1 từ, trạng từ) | might not have (có lẽ chưa) ≠ couldn't have (chắc không thể đã)",
  },
  usagePoints: [
    {
      before: "may / might = ",
      strong: "có lẽ / perhaps",
      after: ": It may be true. / It might be true. She might know. He may be in his office.",
    },
    {
      before: "Phủ định: ",
      strong: "may not / might not",
      after: ": It may not be true. She might not know.",
    },
    {
      before: "may be = ",
      strong: "có lẽ (đúng)",
      after: " — hai từ, động từ: It may be true.",
    },
    {
      before: "maybe = ",
      strong: "có lẽ",
      after: " — một từ, trạng từ đứng đầu câu: 'Is it true?' 'Maybe.'",
    },
    {
      before: "Quá khứ: ",
      strong: "may/might have + V3",
      after: ": She may have been asleep. You might have left it at work. She might not have known about it.",
    },
    {
      before: "could khẳng định ≈ ",
      strong: "may / might",
      after: " (có thể đúng): It could be true. You could have left your phone at work.",
    },
    {
      before: "couldn't have = ",
      strong: "chắc chắn không đã xảy ra",
      after: ": She couldn't have received it.",
    },
    {
      before: "might not have = ",
      strong: "có lẽ chưa / có lẽ không",
      after: ": She might not have received it.",
    },
  ],
  examples: [
    {
      english: "It may be true. / It might be true.",
      vietnamese: "May/might be = có lẽ đúng — hai modal tương đương.",
    },
    {
      english: "She might know.",
      vietnamese: "Might know = có lẽ biết — kém chắc hơn must.",
    },
    {
      english: "He may be in his office.",
      vietnamese: "May be in = có lẽ đang ở văn phòng — may be là cụm động từ.",
    },
    {
      english: "She may have been asleep.",
      vietnamese: "May have been = có lẽ lúc đó đang ngủ — suy đoán quá khứ.",
    },
    {
      english: "You might have left it at work.",
      vietnamese: "Might have left = có lẽ để quên ở chỗ làm.",
    },
    {
      english: "She might not have received it.",
      vietnamese: "Might not have = có lẽ chưa nhận — khác couldn't have (chắc không thể).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
