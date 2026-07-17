import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 88 — All / All of, Most / Most of, No / None of etc.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 90 (all / every / whole).
 */
export const U88_ALL_ALL_OF_MOST_MOST_OF_NO_NONE_OF_ETC_TOPIC: GrammarTopicDetail = {
  slug: "u88-all-all-of-most-most-of-no-none-of-etc",
  title: "All / All of, Most / Most of, No / None of etc.",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 88",
  sourceNote:
    "all/some/most + danh từ khi nói chung; … of the/my/these… khi nói về nhóm cụ thể; all/half có thể bỏ of; trước it/us/them phải có of. Nên học kèm Unit 90.",
  intro:
    "Bài này giúp bạn biết khi nào dùng all/most/some trực tiếp trước danh từ và khi nào phải thêm of, đặc biệt trước the, từ sở hữu và đại từ như us/them. Nên học kèm Unit 90 (all / every / whole).",
  structure: {
    affirmative:
      "Nói chung: all/most/some + N | Nhóm cụ thể: all/most/some of + the/my/these… | Đại từ: … of it/us/them",
    negative:
      "KHÔNG nói some of people (phải some people hoặc some of the people) | KHÔNG nói all us (phải all of us) | KHÔNG nói the half",
  },
  usagePoints: [
    {
      before: "Khi nói chung, dùng ",
      strong: "most people / all cars",
      after: " — KHÔNG thêm of.",
    },
    {
      before: "Khi nói về một nhóm cụ thể, dùng ",
      strong: "most of the people / some of these books",
      after: " — có of trước the/these/my…",
    },
    {
      before: "Với all / half trước the/my…, ",
      strong: "có thể bỏ of",
      after: ": All (of) my friends.",
    },
    {
      before: "Trước it/us/you/them, ",
      strong: "bắt buộc phải có of",
      after: ": all of us, none of them.",
    },
    {
      before: "Sau none of + danh từ số nhiều, động từ có thể ở ",
      strong: "số ít hoặc số nhiều",
      after: ": None of the shops was/were open.",
    },
    {
      before: "some/most có thể đứng ",
      strong: "một mình",
      after: " khi danh từ đã rõ từ ngữ cảnh.",
    },
  ],
  examples: [
    {
      english: "All cars have wheels. Some people learn more easily than others.",
      vietnamese: "Nói chung về xe và con người nên không dùng of.",
    },
    {
      english: "Some of the people I work with are strange. None of this money is mine.",
      vietnamese: "Nói về nhóm người và số tiền cụ thể nên có of.",
    },
    {
      english: "All my friends live near here. / All of my friends…",
      vietnamese: "Trước my, all có thể dùng có hoặc không có of.",
    },
    {
      english: "All of us were late. I've only read half of it.",
      vietnamese: "Trước us và it, of là bắt buộc.",
    },
    {
      english: "Most problems have a solution. We solved most of the problems we had.",
      vietnamese: "Most problems nói chung; most of the problems chỉ một nhóm cụ thể.",
    },
    {
      english: "A few shops were open, but most were closed.",
      vietnamese: "Most đứng một mình vì danh từ shops đã rõ.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 475,
  },
};
