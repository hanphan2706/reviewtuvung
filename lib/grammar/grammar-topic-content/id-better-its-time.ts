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
    "Bài này giúp bạn dùng I'd better cho lời khuyên cụ thể kèm hậu quả, phân biệt với should, và dùng It's time + past để nói đã đến lúc (thường phàn nàn). Nên học kèm Unit 33.",
  structure: {
    affirmative: "S + 'd/had better + V | It's time (for O) to + V | It's (about) time + S + past V",
    negative:
      "KHÔNG nói had better to do → had better do | KHÔNG dùng had better cho lời khuyên chung → should",
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
      before: "had better cho ",
      strong: "tình huống cụ thể",
      after: " có hậu quả: I'd better go now or I'll be late.",
    },
    {
      before: "should cho ",
      strong: "lời khuyên chung",
      after: ": You should go out more often (không: had better).",
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
      vietnamese: "Had better = nên đi ngay kẻo muộn — hậu quả cụ thể.",
    },
    {
      english: "You don't look well. You'd better not go out tonight.",
      vietnamese: "Had better not = tốt hơn đừng ra — lời khuyên cảnh báo.",
    },
    {
      english: "You're always at home. You should go out more often.",
      vietnamese: "Should = lời khuyên chung — KHÔNG dùng had better ở đây.",
    },
    {
      english: "It's time to go home. / It's time for us to go home.",
      vietnamese: "It's time to/for = đến lúc về — cấu trúc thông thường.",
    },
    {
      english: "It's late. It's time we went home.",
      vietnamese: "It's time + past (went) = đến lúc về rồi — nghĩa hiện tại, thường phàn nàn.",
    },
    {
      english: "It's about time he did something instead of just talking.",
      vietnamese: "It's about time + past = đã đến lúc anh ấy làm gì đó — nhấn trễ.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
