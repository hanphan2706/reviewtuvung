import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 33 — Should 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 34 (should 2) để nắm các mẫu that … should / if … should.
 */
export const U33_SHOULD_1_TOPIC: GrammarTopicDetail = {
  slug: "u33-should-1",
  title: "Should 1",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 33",
  sourceNote:
    "Should 1: lời khuyên/ý kiến, kỳ vọng, should have (done), ought to ≈ should. Nên học kèm Unit 34 (should 2).",
  intro:
    "Should 1: lời khuyên/ý kiến, kỳ vọng, should have (done), ought to ≈ should. Nên học kèm Unit 34.",
  structure: {
    affirmative: "S + should / ought to + V | S + should have / ought to have + V3",
    negative: "S + shouldn't / ought not to + V | S + shouldn't have + V3",
  },
  usagePoints: [
    {
      before: "should = ",
      strong: "nên (lời khuyên / ý kiến)",
      after: ": You look tired. You should go to bed. You shouldn't believe everything you read.",
    },
    {
      before: "Thường với ",
      strong: "I think / I don't think / Do you think…?",
      after: ": I don't think you should work so hard. Do you think I should apply?",
    },
    {
      before: "Yếu hơn ",
      strong: "must / have to",
      after: ": You should apologise (= nên) vs You must / have to apologise (= không còn lựa chọn).",
    },
    {
      before: "should cũng diễn tả ",
      strong: "kỳ vọng / lẽ ra phải",
      after: ": She should be here by now. She should pass the exam.",
    },
    {
      before: "should have + V3 = ",
      strong: "đáng lẽ nên (nhưng không)",
      after: "; shouldn't have = đáng lẽ không nên (nhưng đã): You should have come. I shouldn't have eaten so much.",
    },
    {
      before: "ought to ≈ ",
      strong: "should",
      after: " (có to): You ought to apply. You ought to have come. (= should have come)",
    },
  ],
  examples: [
    {
      english: "You look tired. You should go to bed.",
      vietnamese: "Bạn trông mệt. Bạn nên đi ngủ.",
    },
    {
      english: "You shouldn't believe everything you read in newspapers.",
      vietnamese: "Bạn không nên tin hết những gì đọc được trên báo.",
    },
    {
      english: "Where's Tina? She should be here by now.",
      vietnamese: "Tina đâu rồi? Lẽ ra lúc này cô ấy phải ở đây rồi.",
    },
    {
      english: "You missed a great party. You should have come.",
      vietnamese: "Bạn đã bỏ lỡ một buổi tiệc hay. Đáng lẽ bạn nên đến.",
    },
    {
      english: "I'm feeling sick. I shouldn't have eaten so much.",
      vietnamese: "Tôi đang buồn nôn. Đáng lẽ tôi không nên ăn nhiều thế.",
    },
    {
      english: "It was a great party. You ought to have come.",
      vietnamese: "Buổi tiệc tuyệt thật. Đáng lẽ bạn nên đến. (= should have)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
