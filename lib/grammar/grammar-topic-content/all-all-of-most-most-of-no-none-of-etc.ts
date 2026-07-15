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
    "all/some/most + noun (general); … of the/my/these… (specific); all/half ± of; … of it/us/them. Nên học kèm Unit 90.",
  intro:
    "Trong unit này bạn sẽ nắm: all/some/most + noun (general); … of the/my/these… (specific); all/half ± of; … of it/us/them. Nên học kèm Unit 90 (all / every / whole).",
  structure: {
    affirmative:
      "all/most/some + N (general) | all/most/some of + the/my/these… | … of it/us/them",
    negative:
      "not some of people | not all us | not the half",
  },
  usagePoints: [
    {
      before: "Chung (không xác định): ",
      strong: "most people / all cars",
      after: " — không of.",
    },
    {
      before: "Cụ thể: ",
      strong: "most of the people / some of these books",
      after: ".",
    },
    {
      before: "all / half: ",
      strong: "of tùy chọn",
      after: " trước the/my…: All (of) my friends.",
    },
    {
      before: "Trước it/us/you/them: ",
      strong: "bắt buộc of",
      after: ": all of us, none of them.",
    },
    {
      before: "none of + plural: động từ ",
      strong: "số ít hoặc số nhiều",
      after: ".",
    },
    {
      before: "some/most đứng ",
      strong: "một mình",
      after: " khi đã rõ danh từ.",
    },
  ],
  examples: [
    {
      english: "All cars have wheels. Some people learn more easily than others.",
      vietnamese: "chung — không of.",
    },
    {
      english: "Some of the people I work with are strange. None of this money is mine.",
      vietnamese: "cụ thể — có of.",
    },
    {
      english: "All my friends live near here. / All of my friends…",
      vietnamese: "all ± of.",
    },
    {
      english: "All of us were late. I've only read half of it.",
      vietnamese: "of bắt buộc trước đại từ.",
    },
    {
      english: "Most problems have a solution. We solved most of the problems we had.",
      vietnamese: "chung vs cụ thể.",
    },
    {
      english: "A few shops were open, but most were closed.",
      vietnamese: "most đứng một mình.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 475,
  },
};
