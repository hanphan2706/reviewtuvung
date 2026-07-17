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
    "Dạng so sánh hơn với -er hoặc more; bất quy tắc better, worse, further; than khi so sánh hai đối tượng. Nên học kèm Units 106–108.",
  intro:
    "Bài này giúp bạn lập dạng so sánh hơn bằng -er hoặc more, nắm các dạng bất quy tắc better, worse, further, và cách dùng than khi so sánh hai đối tượng. Nên học kèm Units 106–108.",
  structure: {
    affirmative:
      "Tính từ/trạng từ ngắn + -er (+ than) | more + tính từ/trạng từ (+ than) | better / worse / further (farther)",
    negative:
      "Không dùng more với tính từ đã thêm -er | Muốn diễn tả mức thấp hơn, dùng less + tính từ (xem Unit 107)",
  },
  usagePoints: [
    {
      before: "Tính từ hoặc trạng từ một âm tiết thường thêm ",
      strong: "-er",
      after: ": cheaper, faster, thinner.",
    },
    {
      before: "Tính từ hai âm tiết tận cùng ",
      strong: "-y",
      after: " đổi thành -ier: easier, earlier, luckier.",
    },
    {
      before: "Tính từ hoặc trạng từ dài hơn dùng ",
      strong: "more …",
      after: ": more serious, more expensive, more comfortable.",
    },
    {
      before: "Trạng từ tận cùng ",
      strong: "-ly",
      after: " thường dùng more: more slowly, more carefully, more easily.",
    },
    {
      before: "Bất quy tắc: ",
      strong: "better / worse / further (farther)",
      after: ". Further còn nghĩa thêm nữa: any further news.",
    },
    {
      before: "Một số tính từ như clever, quiet, simple có thể dùng ",
      strong: "-er hoặc more …",
      after: " đều được: quieter hoặc more quiet.",
    },
  ],
  examples: [
    {
      english: "Let's drive. It's cheaper than going by train.",
      vietnamese: "So sánh hai cách đi: lái xe rẻ hơn đi tàu.",
    },
    {
      english: "Going by train is more expensive than driving.",
      vietnamese: "Tính từ dài dùng more expensive thay vì -er.",
    },
    {
      english: "The exam was easier than I expected.",
      vietnamese: "Bài thi dễ hơn so với dự đoán của tôi.",
    },
    {
      english: "Can you walk a bit more slowly?",
      vietnamese: "Trạng từ slowly dùng more để so sánh mức độ.",
    },
    {
      english: "I'd like to have a more reliable car.",
      vietnamese: "Muốn chiếc xe đáng tin cậy hơn chiếc hiện tại.",
    },
    {
      english: "He did badly in the exam — worse than expected.",
      vietnamese: "Worse là dạng bất quy tắc của bad.",
    },
    {
      english: "Let me know if you hear any further news.",
      vietnamese: "Further ở đây nghĩa là thêm nữa, không phải so sánh khoảng cách.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
