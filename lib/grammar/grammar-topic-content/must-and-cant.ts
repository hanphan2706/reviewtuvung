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
    "must / can't: suy đoán chắc chắn (hiện tại và quá khứ) — must have / can't have. Khác must nghĩa vụ ở Units 31–32. Nên học kèm Unit 27 (couldn't have).",
  intro:
    "Bài này giúp bạn dùng must và can't để suy đoán chắc chắn dựa trên bằng chứng logic, gồm must have / can't have cho quá khứ — khác hẳn must nghĩa vụ ở Units 31–32. Nên học kèm Unit 26 (can't khả năng) và Unit 27 (couldn't have).",
  structure: {
    affirmative: "S + must + be / be -ing / V (chắc chắn) | S + must have + V3 / been -ing (quá khứ)",
    negative:
      "KHÔNG nhầm must (suy đoán) với must (bắt buộc Unit 31–32) | can't / can't have / couldn't have = chắc không thể / chắc đã không",
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
      before: "must (suy đoán): ",
      strong: "You must be tired",
      after: " = chắc bạn mệt (dựa trên bằng chứng).",
    },
    {
      before: "must (nghĩa vụ, Unit 31–32): ",
      strong: "You must phone her",
      after: " = bạn phải/nên gọi (bắt buộc hoặc ý kiến cần làm).",
    },
  ],
  examples: [
    {
      english: "You've been travelling all day. You must be tired.",
      vietnamese: "Must be = chắc mệt rồi — suy đoán từ bằng chứng, không phải lệnh.",
    },
    {
      english: "You've just had lunch. You can't be hungry already.",
      vietnamese: "Can't be = chắc không thể đói ngay — logic phủ định.",
    },
    {
      english: "They must have gone out.",
      vietnamese: "Must have gone = chắc đã ra ngoài — suy đoán quá khứ.",
    },
    {
      english: "I must have dropped it somewhere.",
      vietnamese: "Must have dropped = chắc đã làm rơi đâu đó.",
    },
    {
      english: "She can't have got my message.",
      vietnamese: "Can't have got = chắc chưa nhận được — khác might not have (có lẽ chưa).",
    },
    {
      english: "He can't have been looking where he was going.",
      vietnamese: "Can't have been -ing = chắc không nhìn đường lúc đó.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
