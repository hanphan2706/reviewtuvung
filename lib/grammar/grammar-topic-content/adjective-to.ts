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
    "hard/easy/impossible to …; nice of somebody to …; sorry/surprised/glad to …; the first/last/only to …; bound/sure/likely to …",
  intro:
    "Trong unit này bạn sẽ nắm: hard/easy/impossible to …; nice of somebody to …; sorry/surprised/glad to …; the first/last/only to …; bound/sure/likely to ….",
  structure: {
    affirmative:
      "It is + adj + to + V | S + is + adj + to + V | It's + adj + of somebody + to + V | be + the first/last/only + to + V",
    negative:
      "It isn't / isn't + adj + to + V | not likely to + V | không lặp tân ngữ: He is hard to understand (không: … understand him)",
  },
  usagePoints: [
    {
      before: "It is hard to understand him = ",
      strong: "He is hard to understand",
      after: " (không thêm him ở cuối).",
    },
    {
      before: "Cũng dùng với ",
      strong: "adjective + noun + to …",
      after: ": This is a difficult question to answer.",
    },
    {
      before: "",
      strong: "It's nice/kind/silly of somebody to …",
      after: ": It was nice of you to take me to the airport.",
    },
    {
      before: "Phản ứng: ",
      strong: "sorry / glad / surprised / disappointed + to …",
      after: ": I'm sorry to hear that. We were glad to get home.",
    },
    {
      before: "",
      strong: "the first / last / only / next + to …",
      after: ": I was the only one to arrive on time. You'll be the first to know.",
    },
    {
      before: "",
      strong: "bound / sure / (not) likely to …",
      after: ": She's bound to pass. It's not likely to rain.",
    },
  ],
  examples: [
    {
      english: "Do you think this water is safe to drink?",
      vietnamese: "Bạn nghĩ nước này uống có an toàn không? (không: to drink it)",
    },
    {
      english: "Nicola is interesting to talk to.",
      vietnamese: "Nói chuyện với Nicola rất thú vị. (không: to talk to her)",
    },
    {
      english: "It was nice of you to take me to the airport.",
      vietnamese: "Bạn thật tốt khi đưa tôi ra sân bay.",
    },
    {
      english: "Was Julia surprised to see you?",
      vietnamese: "Julia có ngạc nhiên khi gặp bạn không?",
    },
    {
      english: "I was the only one to arrive on time.",
      vietnamese: "Tôi là người duy nhất đến đúng giờ.",
    },
    {
      english: "She's bound to pass the exam.",
      vietnamese: "Cô ấy chắc chắn sẽ đậu kỳ thi.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
