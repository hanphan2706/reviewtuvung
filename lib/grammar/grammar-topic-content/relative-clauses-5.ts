import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 96 — Relative Clauses 5 (extra information clauses 2).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 92–95.
 */
export const U96_RELATIVE_CLAUSES_5_TOPIC: GrammarTopicDetail = {
  slug: "u96-relative-clauses-5",
  title: "Relative Clauses 5",
  levelLabel: "Intermediate",
  kindLabel: "Relative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 96",
  sourceNote:
    "Giới từ + whom/which (trang trọng); all/most/some/none of whom/which; which chỉ cả ý câu trước, không dùng what. Nên học kèm Units 92–95.",
  intro:
    "Bài này giúp bạn dùng giới từ kèm whom/which trong mệnh đề thêm thông tin, cấu trúc all/most/some/none of whom/which, và which để nói về cả ý câu đứng trước. Nên học kèm Units 92–95.",
  structure: {
    affirmative:
      ", giới từ + whom/which, … | , all/most/some/none of + whom/which, … | …, which + mệnh đề (về cả ý trước)",
    negative:
      "Giới từ ở cuối mệnh đề: KHÔNG dùng whom | Muốn nói về cả ý câu trước: KHÔNG dùng what — dùng which",
  },
  usagePoints: [
    {
      before: "Trong mệnh đề thêm thông tin, giới từ đứng trước ",
      strong: "whom hoặc which",
      after: " (trang trọng hơn): without which, with whom, of which…",
    },
    {
      before: "Khi giới từ đặt ",
      strong: "cuối mệnh đề",
      after: " thì dùng who, không dùng whom: Mr Lee, who I spoke to at the meeting…",
    },
    {
      before: "All of / most of / some of / none of + ",
      strong: "whom (người) hoặc which (vật)",
      after: ": Helen has three brothers, all of whom are married.",
    },
    {
      before: "The name/cause of which… = ",
      strong: "danh từ + of which",
      after: ": a hotel, the name of which I don't remember.",
    },
    {
      before: "Which có thể chỉ ",
      strong: "cả ý câu trước",
      after: " (không dùng what): Joe got the job, which surprised everybody.",
    },
    {
      before: "Cấu trúc all of / both of xem thêm ",
      strong: "Units 88–89",
      after: "; loại mệnh đề quan hệ 1–2 xem Units 92–95.",
    },
  ],
  examples: [
    {
      english: "Fortunately we had a good map, without which we would have got lost.",
      vietnamese: "Without which nghĩa là nếu không có bản đồ đó.",
    },
    {
      english: "Mr Lee, who I spoke to at the meeting, is interested in our proposal.",
      vietnamese: "Giới từ ở cuối nên dùng who, không dùng whom.",
    },
    {
      english: "Helen has three brothers, all of whom are married.",
      vietnamese: "All of whom chỉ cả ba người anh.",
    },
    {
      english: "They asked me a lot of questions, most of which I couldn't answer.",
      vietnamese: "Most of which chỉ phần lớn các câu hỏi.",
    },
    {
      english: "Joe got the job, which surprised everybody.",
      vietnamese: "Which ám chỉ việc Joe được việc, không dùng what.",
    },
    {
      english: "We stayed at a beautiful hotel, the name of which I don't remember now.",
      vietnamese: "The name of which thay cho whose name trong văn trang trọng.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 459,
  },
};
