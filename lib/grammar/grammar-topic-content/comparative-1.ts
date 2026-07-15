import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 105 — Comparative 1 (cheaper, more expensive etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 106–108 (comparative 2–3, superlative).
 */
export const U105_COMPARATIVE_1_TOPIC: GrammarTopicDetail = {
  slug: "u105-comparative-1",
  title: "Comparative 1",
  levelLabel: "Intermediate",
  kindLabel: "Comparative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 105",
  sourceNote:
    "Comparative: -er / more … ; irregular better/worse/further. Nên học kèm Units 106–108.",
  intro:
    "Trong unit này bạn sẽ nắm: Comparative: -er / more … ; irregular better/worse/further. Nên học kèm Units 106–108.",
  structure: {
    affirmative: "adj/adv + -er (+ than) | more + adj/adv (+ than) | better / worse / further",
    negative: "not + comparative | less + adj (xem Unit 107)",
  },
  usagePoints: [
    {
      before: "Từ ngắn (1 âm tiết) → ",
      strong: "-er",
      after: ": cheap → cheaper, fast → faster, thin → thinner.",
    },
    {
      before: "Từ hai âm tiết tận cùng ",
      strong: "-y → -ier",
      after: ": easy → easier, early → earlier, lucky → luckier.",
    },
    {
      before: "Từ dài hơn → ",
      strong: "more …",
      after: ": more serious, more expensive, more comfortable.",
    },
    {
      before: "Trạng từ tận cùng ",
      strong: "-ly → more …",
      after: ": more slowly, more carefully, more easily.",
    },
    {
      before: "Bất quy tắc: ",
      strong: "better / worse / further (farther)",
      after: ". further cũng = additional: any further news.",
    },
    {
      before: "clever / quiet / simple…: ",
      strong: "-er hoặc more …",
      after: " đều được: quieter / more quiet.",
    },
  ],
  examples: [
    {
      english: "Let's drive. It's cheaper than going by train.",
      vietnamese: "Lái xe đi. Rẻ hơn đi tàu.",
    },
    {
      english: "Going by train is more expensive than driving.",
      vietnamese: "Đi tàu đắt hơn lái xe.",
    },
    {
      english: "The exam was easier than I expected.",
      vietnamese: "Bài thi dễ hơn tôi nghĩ.",
    },
    {
      english: "Can you walk a bit more slowly?",
      vietnamese: "Bạn đi chậm lại một chút được không?",
    },
    {
      english: "I'd like to have a more reliable car.",
      vietnamese: "Tôi muốn có chiếc xe đáng tin cậy hơn.",
    },
    {
      english: "He did badly in the exam — worse than expected.",
      vietnamese: "Anh ấy làm bài kém — tệ hơn dự kiến.",
    },
    {
      english: "Let me know if you hear any further news.",
      vietnamese: "Báo tôi nếu bạn nghe thêm tin gì. (further = additional)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
