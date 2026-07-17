import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 94 — Relative Clauses 3 (whose / whom / where).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 92–93, 95–96.
 */
export const U94_RELATIVE_CLAUSES_3_TOPIC: GrammarTopicDetail = {
  slug: "u94-relative-clauses-3",
  title: "Relative Clauses 3",
  levelLabel: "Intermediate",
  kindLabel: "Relative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 94",
  sourceNote:
    "whose (sở hữu); whom (trang trọng, tân ngữ); where (nơi chốn); the day/time/reason (+ that/why). Nên học kèm Units 92–93 và Units 95–96.",
  intro:
    "Bài này giúp bạn dùng whose để nói sở hữu, whom trong văn trang trọng, where cho nơi chốn, và cách nối mệnh đề sau the day, the time hay the reason. Nên học kèm Units 92–93 và Units 95–96.",
  structure: {
    affirmative:
      "danh từ + whose + danh từ… | whom / giới từ + whom (trang trọng) | danh từ (nơi) + where + mệnh đề | the day/time/reason (+ that/why)…",
    negative:
      "KHÔNG nhầm whose với who's | Trong nói thường hiếm dùng whom — ưu tiên bỏ đại từ hoặc dùng who/that",
  },
  usagePoints: [
    {
      before: "Whose = ",
      strong: "của người đó",
      after: " (sở hữu): I felt someone whose brother I went to school with.",
    },
    {
      before: "Who chỉ người; ",
      strong: "whose",
      after: " chỉ sở hữu: a man who knows you / a man whose sister knows you.",
    },
    {
      before: "Who's = ",
      strong: "who is hoặc who has",
      after: " — khác hoàn toàn với whose: a friend who's learning Arabic.",
    },
    {
      before: "Whom dùng trong văn ",
      strong: "trang trọng",
      after: " khi là tân ngữ; nói thường thì bỏ hoặc dùng who: a person I admire / who I admire.",
    },
    {
      before: "Where = ",
      strong: "nơi chốn",
      after: ": the restaurant where we had lunch.",
    },
    {
      before: "The day / the reason… ",
      strong: "có thể thêm that hoặc why",
      after: ": That's the day I'm going away. The reason (why/that) I'm calling…",
    },
  ],
  examples: [
    {
      english: "We helped some people whose car had broken down.",
      vietnamese: "Whose car nghĩa là chiếc xe của họ.",
    },
    {
      english: "I have a friend who's learning Arabic. / whose sister is learning Arabic.",
      vietnamese: "Who's (who is) khác với whose (của ai).",
    },
    {
      english: "I met a friend whom I hadn't seen for years. / a friend I hadn't seen…",
      vietnamese: "Whom trang trọng; bỏ whom thì tự nhiên hơn trong nói thường.",
    },
    {
      english: "I recently went back to the town where I grew up.",
      vietnamese: "Where chỉ thị trấn nơi tôi lớn lên.",
    },
    {
      english: "That's the day I'm going away. The reason I'm calling is to ask your advice.",
      vietnamese: "The day và the reason có thể nối trực tiếp với mệnh đề.",
    },
    {
      english: "A pacifist is a person who believes that all wars are wrong.",
      vietnamese: "Who là chủ ngữ trong mệnh đề quan hệ.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 441,
  },
};
