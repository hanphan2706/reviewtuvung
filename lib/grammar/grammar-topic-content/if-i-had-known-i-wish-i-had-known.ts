import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 40 — if I had known … I wish I had known ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 39 (if I knew / I wish I knew), Unit 41 (wish).
 */
export const U40_IF_I_HAD_KNOWN_I_WISH_I_HAD_KNOWN_TOPIC: GrammarTopicDetail = {
  slug: "u40-if-i-had-known-i-wish-i-had-known",
  title: "If I Had Known … I Wish I Had Known …",
  levelLabel: "Intermediate",
  kindLabel: "Conditional",
  sourceBook: "English Grammar in Use · Intermediate · Unit 40",
  sourceNote:
    "if + had + V3 / wish + had + V3 (quá khứ trái thực tế); would have; 'd = had hoặc would. Nên học kèm Units 39, 41.",
  intro:
    "Unit này giúp bạn nắm If I Had Known … I Wish I Had Known …: If + had + V3 / wish + had + V3 (quá khứ trái thực tế); would have; 'd = had hoặc would. Nên học kèm Unit 39 và Unit 41.",
  structure: {
    affirmative:
      "If + S + had/'d + V3…, S + would have/'d have + V3 | I wish + S + had/'d + V3…",
    negative:
      "If + S + hadn't + V3…, S + wouldn't have + V3 | I wish + S + hadn't + V3…",
  },
  usagePoints: [
    {
      before: "if + had + V3 + would have = ",
      strong: "quá khứ trái thực tế",
      after: ": If I'd seen you, I would have said hello.",
    },
    {
      before: "So sánh ",
      strong: "hiện tại vs quá khứ",
      after: ": If I was hungry, I would eat… / If I had been hungry, I would have eaten…",
    },
    {
      before: "Không dùng ",
      strong: "if … would have",
      after: ": If I had seen you, I would have said hello. (không: If I would have seen)",
    },
    {
      before: "'d có thể là ",
      strong: "had hoặc would",
      after: ": If I'd seen you (= had), I'd have said hello (= would have).",
    },
    {
      before: "wish + had… = ",
      strong: "tiếc về quá khứ",
      after: ": I wish I'd known that Gary was ill. I wish I hadn't eaten so much.",
    },
    {
      before: "Cũng dùng ",
      strong: "could have / might have",
      after: ": If the weather hadn't been so bad, we would/could/might have gone out.",
    },
  ],
  examples: [
    {
      english: "If I'd known you were in hospital, I would have gone to visit you.",
      vietnamese: "Nếu tôi biết bạn nằm viện, tôi đã đến thăm. (nhưng không biết)",
    },
    {
      english: "They would have gone out if they hadn't been so tired.",
      vietnamese: "Họ đã ra ngoài nếu không mệt quá. (nhưng họ mệt)",
    },
    {
      english: "I would have taken some pictures if I'd had a camera with me.",
      vietnamese: "Tôi đã chụp ảnh nếu mang máy theo. (nhưng không có máy)",
    },
    {
      english: "I wish I'd known that Gary was ill.",
      vietnamese: "Giá như tôi biết Gary bị ốm. (tiếc vì không biết)",
    },
    {
      english: "I feel sick. I wish I hadn't eaten so much.",
      vietnamese: "Tôi thấy buồn nôn. Giá như đừng ăn nhiều vậy.",
    },
    {
      english: "If I'd gone to the party last night, I would be tired now.",
      vietnamese: "Nếu tối qua tôi đi tiệc, giờ tôi sẽ mệt. (would = hiện tại)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 440,
  },
};
