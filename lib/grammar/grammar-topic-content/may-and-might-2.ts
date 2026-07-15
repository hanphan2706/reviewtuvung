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
    "may and might 2: khả năng tương lai, might be -ing, might be able to / might have to, might as well. Nên học kèm Unit 29.",
  intro:
    "Unit này giúp bạn nắm May and Might 2: May and might 2: khả năng tương lai, might be -ing, might be able to / might have to, might as well. Nên học kèm Unit 29 trước.",
  structure: {
    affirmative:
      "S + may/might + V (tương lai) | S + might be -ing | S + might be able to / might have to + V | S + might/may as well + V",
    negative: "S + may not / might not (mightn't) + V",
  },
  usagePoints: [
    {
      before: "may / might + V = ",
      strong: "có lẽ sẽ",
      after: " trong tương lai: I may go to Ireland. It might rain later. Amy may not go out tonight.",
    },
    {
      before: "So sánh ",
      strong: "I'm going to (chắc) vs I may/might (có thể)",
      after: ": I'm going to buy a car (đã quyết) vs I may/might buy a car (chưa chắc).",
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
      vietnamese: "Có lẽ tôi sẽ đi Ireland.",
    },
    {
      english: "It might rain later.",
      vietnamese: "Có lẽ lát nữa mưa.",
    },
    {
      english: "Amy may not go out tonight.",
      vietnamese: "Có lẽ tối nay Amy không ra ngoài.",
    },
    {
      english: "If they paid me better, I might work harder.",
      vietnamese: "Nếu họ trả cao hơn, tôi có thể làm chăm hơn. (tình huống không thật)",
    },
    {
      english: "I might be watching the football on TV.",
      vietnamese: "Lúc đó có lẽ tôi đang xem bóng đá.",
    },
    {
      english: "We might as well walk.",
      vietnamese: "Thôi thì đi bộ luôn vậy.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
