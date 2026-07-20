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
    "if + had + V3 + would have = quá khứ trái thực tế; wish + had… = tiếc về quá khứ; 'd = had hoặc would. KHÔNG dùng if … would have. Nên học kèm Units 39, 41.",
  intro:
    "Bài này giúp bạn nói về quá khứ trái thực tế bằng if + had + V3 và I wish + had + V3, hiểu 'd có thể là had hoặc would, và phân biệt would have (quá khứ) với would (nghĩa hiện tại). Nên học kèm Unit 39 và Unit 41.",
  structure: {
    affirmative:
      "If + S + had/'d + V3…, S + would have/'d have + V3 | I wish + S + had/'d + V3…",
    negative:
      "KHÔNG dùng if … would have → If I had seen you, I would have said hello (không: If I would have seen) | If + hadn't…, wouldn't have… / I wish + hadn't + V3",
  },
  usagePoints: [
    {
      before: "if + past + would = ",
      strong: "hiện tại trái thực tế (Unit 39)",
      after: ": If I was hungry, I would eat something. (= tôi không đói bây giờ)",
    },
    {
      before: "if + had + V3 + would have = ",
      strong: "quá khứ trái thực tế",
      after: ": If I had been hungry, I would have eaten something. (= tôi không đói hồi đó)",
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
      vietnamese: "If + had + would have = quá khứ trái thực tế — thực tế tôi không biết nên không đến.",
    },
    {
      english: "They would have gone out if they hadn't been so tired.",
      vietnamese: "Would have = đã ra ngoài nếu không mệt — thực tế họ mệt nên ở nhà.",
    },
    {
      english: "I would have taken some pictures if I'd had a camera with me.",
      vietnamese: "Had + V3 trong cả hai mệnh đề — thực tế không mang máy ảnh.",
    },
    {
      english: "I wish I'd known that Gary was ill.",
      vietnamese: "Wish + had = tiếc về quá khứ — khác if I'd known nhưng cùng nghĩa không biết.",
    },
    {
      english: "I feel sick. I wish I hadn't eaten so much.",
      vietnamese: "Wish + hadn't = tiếc vì đã ăn quá nhiều — không thể đổi quá khứ.",
    },
    {
      english: "If I'd gone to the party last night, I would be tired now.",
      vietnamese: "Would have (quá khứ) vs would (hiện tại) — đi tiệc tối qua → mệt bây giờ.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 440,
  },
};
