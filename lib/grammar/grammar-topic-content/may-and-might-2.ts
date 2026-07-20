import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 30 — may and might 2.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 29 (may and might 1).
 */
export const U30_MAY_AND_MIGHT_2_TOPIC: GrammarTopicDetail = {
  slug: "u30-may-and-might-2",
  title: "May and Might 2",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 30",
  sourceNote:
    "may / might 2: khả năng tương lai, might be -ing, might be able to / might have to, might as well. Nên học kèm Unit 29.",
  intro:
    "Bài này giúp bạn dùng may/might cho tương lai chưa chắc, might be -ing cho hành động đang/sẽ đang diễn ra, và might as well khi không còn lựa chọn tốt hơn. Nên học kèm Unit 29 trước.",
  structure: {
    affirmative:
      "S + may/might + V (tương lai) | S + might be -ing | S + might be able to / might have to + V | S + might/may as well + V",
    negative:
      "KHÔNG dùng may trong câu giả định không thật → might | may not / might not = có lẽ sẽ không",
  },
  usagePoints: [
    {
      before: "may / might + V = ",
      strong: "có lẽ sẽ",
      after: " trong tương lai: I may go to Ireland. It might rain later. Amy may not go out tonight.",
    },
    {
      before: "I'm going to = ",
      strong: "chắc / đã quyết",
      after: ": I'm going to buy a car.",
    },
    {
      before: "I may/might = ",
      strong: "có thể, chưa chắc",
      after: ": I may/might buy a car.",
    },
    {
      before: "Tình huống ",
      strong: "không thật",
      after: " → chỉ might (không may): If they paid me better, I might work harder.",
    },
    {
      before: "may/might be -ing = ",
      strong: "có lẽ đang / sẽ đang",
      after: ": Don't phone at 8.30 — I might be watching the football. Also: I might be going to Ireland soon (kế hoạch có thể).",
    },
    {
      before: "Các dạng mở rộng: ",
      strong: "might be able to / might have to",
      after: ": I might be able to help you. We might have to wait a long time.",
    },
    {
      before: "might/may as well = ",
      strong: "thôi thì làm luôn",
      after: " vì không có lựa chọn tốt hơn: We might as well walk. I might as well buy a new one.",
    },
  ],
  examples: [
    {
      english: "I may go to Ireland.",
      vietnamese: "May go = có lẽ sẽ đi — chưa quyết, khác going to.",
    },
    {
      english: "It might rain later.",
      vietnamese: "Might rain = có lẽ lát nữa mưa — khả năng tương lai.",
    },
    {
      english: "Amy may not go out tonight.",
      vietnamese: "May not go = có lẽ tối nay không ra — phủ định khả năng.",
    },
    {
      english: "If they paid me better, I might work harder.",
      vietnamese: "Might = câu giả định không thật — KHÔNG dùng may ở đây.",
    },
    {
      english: "I might be watching the football on TV.",
      vietnamese: "Might be -ing = có lẽ lúc đó đang xem bóng.",
    },
    {
      english: "We might as well walk.",
      vietnamese: "Might as well = thôi đi bộ luôn — không có phương án hay hơn.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
