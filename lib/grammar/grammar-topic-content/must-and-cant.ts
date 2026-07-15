import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 28 — must and can't (certainty).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Khác nghĩa must nghĩa vụ ở Units 31–32.
 */
export const U28_MUST_AND_CANT_TOPIC: GrammarTopicDetail = {
  slug: "u28-must-and-cant",
  title: "Must and Can't",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 28",
  sourceNote:
    "must and can't: suy đoán chắc chắn (hiện tại/quá khứ) — must have / can't have. Khác must nghĩa vụ ở Units 31–32. Nên học kèm Unit 27 (couldn't have).",
  intro:
    "Unit này giúp bạn nắm Must and Can't: Must and can't: suy đoán chắc chắn (hiện tại/quá khứ) — must have / can't have. Khác must nghĩa vụ ở Units 31–32. Nên học kèm Unit 26 (can't khả năng) và Unit 27 (couldn't have).",
  structure: {
    affirmative: "S + must + be / be -ing / V (chắc chắn) | S + must have + V3 / been -ing (quá khứ)",
    negative:
      "S + can't + be / be -ing / V (chắc không) | S + can't/couldn't have + V3 / been -ing",
  },
  usagePoints: [
    {
      before: "must = ",
      strong: "chắc chắn là đúng",
      after: " dựa trên bằng chứng logic: You've been travelling all day. You must be tired.",
    },
    {
      before: "can't = ",
      strong: "chắc chắn không thể",
      after: ": You've just had lunch. You can't be hungry already. They can't know many people.",
    },
    {
      before: "Cấu trúc hiện tại: must/can't + ",
      strong: "be / be -ing / V",
      after: ": She must be working late. You must be joking. He must live near here.",
    },
    {
      before: "Quá khứ: ",
      strong: "must have + V3",
      after: " = chắc đã xảy ra: They must have gone out. I must have dropped it somewhere.",
    },
    {
      before: "Quá khứ phủ định: ",
      strong: "can't have + V3",
      after: " = chắc đã không: She can't have got my message. He can't have been looking where he was going.",
    },
    {
      before: "Có thể dùng ",
      strong: "couldn't have",
      after: " thay cho can't have với cùng nghĩa suy đoán chắc chắn không: Sarah couldn't have got my message.",
    },
    {
      before: "Đừng nhầm với ",
      strong: "must nghĩa vụ",
      after: " (Units 31–32): You must be tired = suy đoán; You must phone her = bắt buộc/ý kiến cần làm.",
    },
  ],
  examples: [
    {
      english: "You've been travelling all day. You must be tired.",
      vietnamese: "Bạn đi đường cả ngày rồi. Chắc bạn mệt rồi.",
    },
    {
      english: "You've just had lunch. You can't be hungry already.",
      vietnamese: "Bạn vừa ăn trưa xong. Không thể đói ngay được.",
    },
    {
      english: "They must have gone out.",
      vietnamese: "Họ chắc đã đi ra ngoài.",
    },
    {
      english: "I must have dropped it somewhere.",
      vietnamese: "Chắc tôi đã làm rơi đâu đó.",
    },
    {
      english: "She can't have got my message.",
      vietnamese: "Cô ấy chắc chưa nhận được tin nhắn của tôi.",
    },
    {
      english: "He can't have been looking where he was going.",
      vietnamese: "Anh ấy chắc không nhìn đường.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
