import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 101 — Adjectives and Adverbs 2 (well, fast, late, hard/hardly).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 100.
 */
export const U101_ADJECTIVES_AND_ADVERBS_2_TOPIC: GrammarTopicDetail = {
  slug: "u101-adjectives-and-adverbs-2",
  title: "Adjectives and Adverbs 2",
  levelLabel: "Intermediate",
  kindLabel: "Adverb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 101",
  sourceNote:
    "Phân biệt good/well, hard/hardly và late/lately; fast/hard/late có dạng tính từ và trạng từ giống nhau; hardly = almost not. Nên học kèm Unit 100.",
  intro:
    "Bài này giúp bạn dùng đúng good và well, nhận ra fast/hard/late không thêm -ly khi làm trạng từ, và tránh nhầm hard với hardly hay late với lately vì nghĩa hoàn toàn khác nhau. Nên học kèm Unit 100.",
  structure: {
    affirmative:
      "good (adj) / well (adv, health) | fast/hard/late (adj=adv) | hardly + V | hardly any/ever…",
    negative:
      "Muốn nói làm việc chăm chỉ: KHÔNG nói work hardly → work hard | KHÔNG dùng good để mô tả cách làm → dùng well",
  },
  usagePoints: [
    {
      before: "good là ",
      strong: "tính từ",
      after: ": good English, The food is good.",
    },
    {
      before: "well là ",
      strong: "trạng từ / khỏe mạnh",
      after: ": speaks well, I'm well; well-known đứng trước danh từ.",
    },
    {
      before: "fast / hard / late có dạng ",
      strong: "tính từ và trạng từ giống nhau",
      after: ": a fast runner / run fast; work hard.",
    },
    {
      before: "late = muộn; lately = ",
      strong: "recently",
      after: " (gần đây) — hai từ KHÔNG cùng nghĩa.",
    },
    {
      before: "hard = chăm chỉ/mạnh; hardly = ",
      strong: "gần như không",
      after: ": He hardly tried. I can hardly read it.",
    },
    {
      before: "hardly ",
      strong: "any / anybody / anything / anywhere / ever",
      after: ": Hardly anybody passed. I hardly ever go out.",
    },
    {
      before: "It's hardly surprising… = ",
      strong: "chắc chắn không ngạc nhiên",
      after: " / hardly a crisis…",
    },
  ],
  examples: [
    {
      english: "Your English is good. You speak English well.",
      vietnamese: "Good mô tả danh từ English; well mô tả hành động speak.",
    },
    {
      english: "Sophie's father is a well-known writer. I'm very well, thanks.",
      vietnamese: "well-known; well = khỏe.",
    },
    {
      english: "Kate works hard. He hardly tried.",
      vietnamese: "Hard nghĩa là chăm chỉ; hardly nghĩa là gần như không.",
    },
    {
      english: "Sorry I'm late. Have you seen Kate lately?",
      vietnamese: "Late nghĩa là muộn; lately nghĩa là gần đây.",
    },
    {
      english: "I can hardly walk. There's hardly anything in the fridge.",
      vietnamese: "hardly + V; hardly anything.",
    },
    {
      english: "I hardly ever go out in the evenings.",
      vietnamese: "hardly ever = almost never.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 498,
  },
};
