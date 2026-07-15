import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 41 — Wish.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 39 (I wish I knew), Unit 40 (I wish I had known); phân biệt wish vs hope.
 */
export const U41_WISH_TOPIC: GrammarTopicDetail = {
  slug: "u41-wish",
  title: "Wish",
  levelLabel: "Intermediate",
  kindLabel: "Wish",
  sourceBook: "English Grammar in Use · Intermediate · Unit 41",
  sourceNote:
    "wish somebody luck/success…; wish vs hope; wish + past / had; wish + could; wish + would (muốn đổi / phàn nàn). Nên học kèm Units 39–40.",
  intro:
    "Unit này giúp bạn nắm Wish: Wish somebody luck/success…; wish vs hope; wish + past / had; wish + could; wish + would (muốn đổi / phàn nàn). Nên học kèm Units 39–40.",
  structure: {
    affirmative:
      "wish + somebody + luck/success… | I wish + S + V2 / had + V3 / could… | I wish + S + would + V",
    negative:
      "I hope + S + don't/doesn't… (không: I wish S + V) | I wish + S + wouldn't + V | I wish + S + hadn't + V3",
  },
  usagePoints: [
    {
      before: "wish somebody ",
      strong: "luck / all the best / success",
      after: ": I wish you all the best. He wished me luck.",
    },
    {
      before: "Muốn việc gì xảy ra → dùng ",
      strong: "hope",
      after: " (không wish + hiện tại): I hope you feel better soon. (không: I wish you feel)",
    },
    {
      before: "wish + quá khứ = ",
      strong: "tiếc hiện tại",
      after: " (Unit 39): I wish I knew what to do. I wish you didn't have to go so soon.",
    },
    {
      before: "wish + had… = ",
      strong: "tiếc quá khứ",
      after: " (Unit 40): I wish I'd known about the party. I wish I hadn't said it.",
    },
    {
      before: "wish + would = ",
      strong: "muốn đổi / phàn nàn",
      after: ": I wish it would stop raining. I wish you wouldn't keep interrupting me.",
    },
    {
      before: "Không dùng wish + would cho ",
      strong: "tình trạng mong muốn",
      after: ": I wish Sarah was here. I wish I had a car. (không: would be / would have)",
    },
  ],
  examples: [
    {
      english: "I wish you all the best in the future.",
      vietnamese: "Tôi chúc bạn mọi điều tốt đẹp nhất trong tương lai.",
    },
    {
      english: "I'm sorry you're not well. I hope you feel better soon.",
      vietnamese: "Tiếc là bạn không khỏe. Tôi hy vọng bạn mau khá hơn. (không: I wish you feel)",
    },
    {
      english: "I wish I knew what to do about the problem.",
      vietnamese: "Giá như tôi biết phải làm gì với vấn đề này. (tiếc hiện tại)",
    },
    {
      english: "I wish I hadn't said it.",
      vietnamese: "Giá như tôi đừng nói thế. (tiếc quá khứ)",
    },
    {
      english: "I wish it would stop raining.",
      vietnamese: "Ước gì trời ngừng mưa. (muốn thay đổi — thường phàn nàn)",
    },
    {
      english: "I wish you wouldn't keep interrupting me.",
      vietnamese: "Ước gì bạn đừng cứ cắt ngang tôi mãi. (= please stop)",
    },
    {
      english: "I wish I had a car.",
      vietnamese: "Giá như tôi có xe. (không: I wish I would have a car)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 450,
  },
};
