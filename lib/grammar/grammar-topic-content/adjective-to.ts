import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 65 — Adjective + to ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * afraid/interested/sorry ➜ Unit 66; it … ➜ Unit 84C; enough/too + adjective ➜ Unit 103.
 */
export const U65_ADJECTIVE_TO_TOPIC: GrammarTopicDetail = {
  slug: "u65-adjective-to",
  title: "Adjective + to …",
  levelLabel: "Intermediate",
  kindLabel: "Structure",
  sourceBook: "English Grammar in Use · Intermediate · Unit 65",
  sourceNote:
    "hard/easy/impossible to …; nice of somebody to …; sorry/surprised/glad to …; the first/last/only to …; bound/sure/likely to …. Nên học kèm Unit 66.",
  intro:
    "Bài này giúp bạn dùng tính từ + to …: hard/easy/impossible to …, nice of somebody to …, sorry/glad/surprised to …, the first/last/only to …, và bound/sure/likely to …. Nên học kèm Unit 66 (afraid to / afraid of).",
  structure: {
    affirmative:
      "It is + adj + to + V | S + is + adj + to + V | It's + adj + of somebody + to + V | be + the first/last/only + to + V",
    negative:
      "KHÔNG lặp tân ngữ: He is hard to understand (không: … understand him) | not likely to + V",
  },
  usagePoints: [
    {
      before: "It is hard to understand him = ",
      strong: "He is hard to understand",
      after: " (KHÔNG thêm him ở cuối).",
    },
    {
      before: "Cũng dùng với ",
      strong: "adjective + noun + to …",
      after: ": This is a difficult question to answer.",
    },
    {
      before: "Đánh giá hành động của ai đó: ",
      strong: "It's nice/kind/silly of somebody to …",
      after: ": It was nice of you to take me to the airport.",
    },
    {
      before: "Phản ứng cảm xúc: ",
      strong: "sorry / glad / surprised / disappointed + to …",
      after: ": I'm sorry to hear that. We were glad to get home.",
    },
    {
      before: "Với thứ tự / số lượng: ",
      strong: "the first / last / only / next + to …",
      after: ": I was the only one to arrive on time. You'll be the first to know.",
    },
    {
      before: "Khả năng / chắc chắn: ",
      strong: "bound / sure / (not) likely to …",
      after: ": She's bound to pass. It's not likely to rain.",
    },
  ],
  examples: [
    {
      english: "Do you think this water is safe to drink?",
      vietnamese: "Safe to drink — KHÔNG lặp it: to drink it.",
    },
    {
      english: "Nicola is interesting to talk to.",
      vietnamese: "Interesting to talk to — KHÔNG thêm her ở cuối.",
    },
    {
      english: "It was nice of you to take me to the airport.",
      vietnamese: "Nice of somebody to … đánh giá hành động của người đó.",
    },
    {
      english: "Was Julia surprised to see you?",
      vietnamese: "Surprised to … = ngạc nhiên khi làm/gặp gì.",
    },
    {
      english: "I was the only one to arrive on time.",
      vietnamese: "The only one to … = người duy nhất làm gì.",
    },
    {
      english: "She's bound to pass the exam.",
      vietnamese: "Bound to … = chắc chắn sẽ xảy ra.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
