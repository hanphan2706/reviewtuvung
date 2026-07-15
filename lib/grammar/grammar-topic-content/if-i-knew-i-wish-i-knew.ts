import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 39 — if I knew … I wish I knew ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 38 (if I do / if I did), Unit 40 (if I had known), Unit 41 (wish).
 */
export const U39_IF_I_KNEW_I_WISH_I_KNEW_TOPIC: GrammarTopicDetail = {
  slug: "u39-if-i-knew-i-wish-i-knew",
  title: "If I Knew … I Wish I Knew …",
  levelLabel: "Intermediate",
  kindLabel: "Conditional",
  sourceBook: "English Grammar in Use · Intermediate · Unit 39",
  sourceNote:
    "if + quá khứ / wish + quá khứ (nghĩa hiện tại); were/was; không if … would / wish … would have. Nên học kèm Units 38, 40, 41.",
  intro:
    "Unit này giúp bạn nắm If I Knew … I Wish I Knew …: If + quá khứ / wish + quá khứ (nghĩa hiện tại); were/was; không if … would / wish … would have. Nên học kèm Unit 38 (if I do / if I did), Unit 40 (if I had known), Unit 41 (wish + would).",
  structure: {
    affirmative:
      "If + S + V2…, S + would/'d + V | I wish + S + V2 / were / could…",
    negative:
      "If + S + didn't + V…, S + wouldn't + V | I wish + S + didn't / weren't…",
  },
  usagePoints: [
    {
      before: "if + quá khứ + would = ",
      strong: "tưởng tượng hiện tại (trái thực tế)",
      after: ": I'd phone him if I knew his number.",
    },
    {
      before: "wish + quá khứ = ",
      strong: "nuối tiếc hiện tại",
      after: ": I wish I knew Paul's phone number. (= I don't know it)",
    },
    {
      before: "So sánh ",
      strong: "I'm glad I live vs I wish I lived",
      after: ": I'm glad I live here. / I wish I lived here. (tôi không sống ở đây)",
    },
    {
      before: "Sau if/wish có thể dùng ",
      strong: "were hoặc was",
      after: ": If I were you… / I wish Anna were here. (hoặc was)",
    },
    {
      before: "Không dùng ",
      strong: "if … would",
      after: " / wish … would have: If I were rich, I would travel. (không: If I would be rich)",
    },
    {
      before: "could = ",
      strong: "would be able to / was able to",
      after: ": She could get a better job if she could speak another language. I wish I could help you.",
    },
  ],
  examples: [
    {
      english: "I'd phone him if I knew his number.",
      vietnamese: "Tôi sẽ gọi anh ấy nếu tôi biết số. (nhưng tôi không biết)",
    },
    {
      english: "There are many things I'd like to do if I had more time.",
      vietnamese: "Có nhiều việc tôi muốn làm nếu có thêm thời gian. (nhưng không có)",
    },
    {
      english: "I wish I knew Paul's phone number.",
      vietnamese: "Giá như tôi biết số điện thoại của Paul. (tiếc vì không biết)",
    },
    {
      english: "I wish there weren't so many people.",
      vietnamese: "Giá như đừng có nhiều người vậy. (thực tế có rất nhiều)",
    },
    {
      english: "If I were you, I wouldn't buy that coat.",
      vietnamese: "Nếu tôi là bạn, tôi sẽ không mua áo đó. (were hoặc was)",
    },
    {
      english: "I wish I could help you.",
      vietnamese: "Giá như tôi có thể giúp bạn. (= I wish I was able)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 430,
  },
};
