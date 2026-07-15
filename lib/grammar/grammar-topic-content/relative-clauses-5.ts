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
    "prep + whom/which; all/most of + whom/which; which (= cả câu trước), không what. Nên học kèm Units 92–95.",
  intro:
    "Unit này giúp bạn nắm Relative Clauses 5: Prep + whom/which; all/most of + whom/which; which (= cả câu trước), không what. Nên học kèm Units 92–95.",
  structure: {
    affirmative:
      ", prep + whom/which, … | , all/most/none of + whom/which, … | …, which (+ clause about whole idea)",
    negative:
      "not whom when prep is at end | not what for whole previous idea — use which",
  },
  usagePoints: [
    {
      before: "Giới từ + ",
      strong: "whom / which",
      after: " (trang trọng hơn): without which, with whom, of which…",
    },
    {
      before: "Nói: giữ giới từ ",
      strong: "sau động từ",
      after: " + who (không whom): who I spoke to…",
    },
    {
      before: "all of / most of / none of + ",
      strong: "whom (người) / which (vật)",
      after: ": none of which fitted him.",
    },
    {
      before: "the name/cause of which… = ",
      strong: "noun + of which",
      after: ": a hotel, the name of which I don't remember.",
    },
    {
      before: "which = ",
      strong: "cả ý trước",
      after: " (không what): …, which was a shame.",
    },
    {
      before: "Xem thêm ",
      strong: "all of / both of",
      after: " (Units 88–89) và relative Type 1–2 (92–95).",
    },
  ],
  examples: [
    {
      english: "Fortunately we had a good map, without which we would have got lost.",
      vietnamese: "without which = nếu không có bản đồ.",
    },
    {
      english: "Mr Lee, who I spoke to at the meeting, is interested in our proposal.",
      vietnamese: "giới từ cuối → who, không whom.",
    },
    {
      english: "Helen has three brothers, all of whom are married.",
      vietnamese: "all of whom = cả ba người.",
    },
    {
      english: "They asked me a lot of questions, most of which I couldn't answer.",
      vietnamese: "most of which = hầu hết các câu hỏi.",
    },
    {
      english: "Joe got the job, which surprised everybody.",
      vietnamese: "which = việc Joe được việc (không what).",
    },
    {
      english: "We stayed at a beautiful hotel, the name of which I don't remember now.",
      vietnamese: "the name of which…",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 459,
  },
};
