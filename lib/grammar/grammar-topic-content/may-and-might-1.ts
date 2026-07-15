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
    "may and might 1: khả năng hiện tại (may/might be…), quá khứ (may/might have…), phân biệt might not have vs couldn't have. Nên học kèm Unit 30.",
  intro:
    "Unit này giúp bạn nắm May and Might 1: May and might 1: khả năng hiện tại (may/might be…), quá khứ (may/might have…), phân biệt might not have vs couldn't have. Nên học kèm Unit 30 (may/might với tương lai và might as well) và Unit 27 (could).",
  structure: {
    affirmative: "S + may/might + V / be / be -ing | S + may/might have + V3",
    negative: "S + may not / might not + V | S + may/might not have + V3",
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
      before: "Phân biệt ",
      strong: "may be (2 từ) vs maybe (1 từ)",
      after: ": It may be true (= động từ). 'Is it true?' 'Maybe.' (= trạng từ).",
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
      after: "; might not have = có lẽ không: She couldn't have received it (không thể) vs She might not have received it (có lẽ chưa).",
    },
  ],
  examples: [
    {
      english: "It may be true. / It might be true.",
      vietnamese: "Có lẽ điều đó đúng.",
    },
    {
      english: "She might know.",
      vietnamese: "Có lẽ cô ấy biết.",
    },
    {
      english: "He may be in his office.",
      vietnamese: "Có lẽ anh ấy đang ở văn phòng.",
    },
    {
      english: "She may have been asleep.",
      vietnamese: "Có lẽ lúc đó cô ấy đang ngủ.",
    },
    {
      english: "You might have left it at work.",
      vietnamese: "Có lẽ bạn để quên ở chỗ làm.",
    },
    {
      english: "She might not have received it.",
      vietnamese: "Có lẽ cô ấy chưa nhận được. (khác couldn't have)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
