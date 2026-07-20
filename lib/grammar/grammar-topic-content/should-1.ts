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
    "should 1: lời khuyên và ý kiến, kỳ vọng, should have (đáng lẽ nên nhưng không), ought to ≈ should. Nên học kèm Unit 34.",
  intro:
    "Bài này giúp bạn dùng should cho lời khuyên, ý kiến và kỳ vọng, should have cho điều đáng lẽ nên làm nhưng không, và ought to như should. Nên học kèm Unit 34.",
  structure: {
    affirmative: "S + should / ought to + V | S + should have / ought to have + V3",
    negative:
      "shouldn't / ought not to = không nên | shouldn't have = đáng lẽ không nên (nhưng đã làm)",
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
      before: "should = ",
      strong: "nên",
      after: " (lời khuyên, yếu hơn): You should apologise.",
    },
    {
      before: "must / have to = ",
      strong: "phải / không còn lựa chọn",
      after: ": You must / have to apologise.",
    },
    {
      before: "should cũng diễn tả ",
      strong: "kỳ vọng / lẽ ra phải",
      after: ": She should be here by now. She should pass the exam.",
    },
    {
      before: "should have + V3 = ",
      strong: "đáng lẽ nên (nhưng không)",
      after: ": You should have come.",
    },
    {
      before: "shouldn't have + V3 = ",
      strong: "đáng lẽ không nên (nhưng đã)",
      after: ": I shouldn't have eaten so much.",
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
      vietnamese: "Should = lời khuyên nên đi ngủ — không bắt buộc như must.",
    },
    {
      english: "You shouldn't believe everything you read in newspapers.",
      vietnamese: "Shouldn't = không nên tin hết — lời khuyên phủ định.",
    },
    {
      english: "Where's Tina? She should be here by now.",
      vietnamese: "Should be = lẽ ra lúc này phải ở đây — kỳ vọng.",
    },
    {
      english: "You missed a great party. You should have come.",
      vietnamese: "Should have come = đáng lẽ nên đến — nhưng đã không.",
    },
    {
      english: "I'm feeling sick. I shouldn't have eaten so much.",
      vietnamese: "Shouldn't have eaten = đáng lẽ không nên ăn nhiều — nhưng đã ăn.",
    },
    {
      english: "It was a great party. You ought to have come.",
      vietnamese: "Ought to have = cùng nghĩa should have — có to sau ought.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
