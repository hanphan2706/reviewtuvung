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
    "if + past + would / wish + past = nói về hiện tại trái thực tế (không phải quá khứ thật); were hoặc was; could = would be able to. KHÔNG dùng if … would hay wish … would have. Nên học kèm Units 38, 40, 41.",
  intro:
    "Bài này giúp bạn dùng if + quá khứ và I wish + quá khứ để nói về tình huống hiện tại trái thực tế, chọn were/was sau if và wish, và tránh if … would / wish … would have. Nên học kèm Unit 38 (if I do / if I did), Unit 40 (if I had known), Unit 41 (wish + would).",
  structure: {
    affirmative:
      "If + S + V2…, S + would/'d + V | I wish + S + V2 / were / could…",
    negative:
      "KHÔNG dùng if … would hay wish … would have → If I were rich, I would travel (không: If I would be rich) | I wish I didn't / weren't… (không: I wish I don't)",
  },
  usagePoints: [
    {
      before: "if + past + would = ",
      strong: "tưởng tượng hiện tại (trái thực tế)",
      after: ": I'd phone him if I knew his number. (= I don't know it)",
    },
    {
      before: "wish + past = ",
      strong: "tiếc vì hiện tại",
      after: ": I wish I knew Paul's phone number. (= I don't know it)",
    },
    {
      before: "I'm glad + present = ",
      strong: "tôi mừng vì thực tế",
      after: ": I'm glad I live here. (= tôi sống ở đây)",
    },
    {
      before: "I wish + past = ",
      strong: "tiếc vì không phải thực tế",
      after: ": I wish I lived here. (= tôi không sống ở đây)",
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
      vietnamese: "If + past + would = giả định hiện tại — thực tế tôi không biết số.",
    },
    {
      english: "There are many things I'd like to do if I had more time.",
      vietnamese: "If I had = nói về hiện tại trái thực tế — thực tế không có thêm thời gian.",
    },
    {
      english: "I wish I knew Paul's phone number.",
      vietnamese: "Wish + past = tiếc vì hiện tại — khác if I knew nhưng cùng nghĩa không biết.",
    },
    {
      english: "I wish there weren't so many people.",
      vietnamese: "Wish + weren't = tiếc vì thực tế có rất nhiều người.",
    },
    {
      english: "If I were you, I wouldn't buy that coat.",
      vietnamese: "Were (hoặc was) sau if khi nói giả định — tôi không phải bạn.",
    },
    {
      english: "I wish I could help you.",
      vietnamese: "Could = would be able to — giá như tôi có thể giúp (thực tế không thể).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 430,
  },
};
