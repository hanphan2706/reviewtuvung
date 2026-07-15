import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 35 — I'd better … / it's time ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 33 (should 1) để so sánh had better và should.
 */
export const U35_ID_BETTER_ITS_TIME_TOPIC: GrammarTopicDetail = {
  slug: "u35-id-better-its-time",
  title: "I'd Better … / It's Time …",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 35",
  sourceNote:
    "I'd better / it's time: lời khuyên cụ thể có hậu quả; It's time we went (past form, nghĩa hiện tại). Nên học kèm Unit 33 (should).",
  intro:
    "I'd better / it's time: lời khuyên cụ thể có hậu quả; It's time we went (past form, nghĩa hiện tại). Nên học kèm Unit 33.",
  structure: {
    affirmative: "S + 'd/had better + V | It's time (for O) to + V | It's (about) time + S + past V",
    negative: "S + 'd better not + V",
  },
  usagePoints: [
    {
      before: "I'd better do = ",
      strong: "nên làm kẻo có vấn đề",
      after: ": I'd better go now or I'll be late. We'd better take an umbrella.",
    },
    {
      before: "Phủ định: ",
      strong: "I'd better not",
      after: ": You'd better not go out tonight. I'd better not disturb her.",
    },
    {
      before: "had better chỉ cho ",
      strong: "tình huống cụ thể",
      after: "; should dùng được cả chung: You should go out more often (không: had better).",
    },
    {
      before: "I'd better do ",
      strong: "(không to do)",
      after: "; had không phải quá khứ thật — dùng cho hiện tại/tương lai.",
    },
    {
      before: "It's time to… / for us to… = ",
      strong: "đến lúc làm",
      after: ": It's time to go home. It's time for us to go home.",
    },
    {
      before: "It's time + past = ",
      strong: "lẽ ra phải làm rồi",
      after: " (nghĩa hiện tại, thường phàn nàn): It's time we went home. It's about time he did something.",
    },
  ],
  examples: [
    {
      english: "I'd better go now or I'll be late.",
      vietnamese: "Tôi nên đi ngay kẻo muộn.",
    },
    {
      english: "You don't look well. You'd better not go out tonight.",
      vietnamese: "Bạn trông không khỏe. Tối nay tốt hơn đừng ra ngoài.",
    },
    {
      english: "You're always at home. You should go out more often.",
      vietnamese: "Bạn lúc nào cũng ở nhà. Bạn nên ra ngoài nhiều hơn (chung — không dùng had better).",
    },
    {
      english: "It's time to go home. / It's time for us to go home.",
      vietnamese: "Đến lúc về nhà rồi.",
    },
    {
      english: "It's late. It's time we went home.",
      vietnamese: "Muộn rồi. Đến lúc chúng ta về rồi (past form, nghĩa hiện tại).",
    },
    {
      english: "It's about time he did something instead of just talking.",
      vietnamese: "Đã đến lúc anh ấy làm gì đó thay vì chỉ nói.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
