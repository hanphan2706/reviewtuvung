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
    "whose; whom (trang trọng) / bỏ whom; where; the day/time/reason (+ that/why). Nên học kèm Units 92–93, 95–96.",
  intro:
    "Unit này giúp bạn nắm Relative Clauses 3: Whose; whom (trang trọng) / bỏ whom; where; the day/time/reason (+ that/why). Nên học kèm Units 92–93 và 95–96.",
  structure: {
    affirmative:
      "noun + whose + noun… | whom / prep + whom (formal) | where + clause | the day/time/reason (+ that/why)…",
    negative:
      "don't confuse whose / who's | whom rare in speech — prefer leave out or who/that",
  },
  usagePoints: [
    {
      before: "whose = ",
      strong: "của người đó",
      after: ": I felt someone whose brother I went to school with.",
    },
    {
      before: "who vs ",
      strong: "whose",
      after: ": a man who knows you vs a man whose sister knows you.",
    },
    {
      before: "who's = ",
      strong: "who is / who has",
      after: " — khác whose: a friend who's learning Arabic.",
    },
    {
      before: "whom = trang trọng (tân ngữ); ",
      strong: "nói thường bỏ / dùng who",
      after: ": a person I admire / who I admire.",
    },
    {
      before: "where = ",
      strong: "nơi chốn",
      after: ": the restaurant where we had lunch.",
    },
    {
      before: "the day / the reason… ",
      strong: "(+ that / why)",
      after: ": That's the day I'm going away. The reason (why/that) I'm calling…",
    },
  ],
  examples: [
    {
      english: "We helped some people whose car had broken down.",
      vietnamese: "whose car = xe của họ.",
    },
    {
      english: "I have a friend who's learning Arabic. / whose sister is learning Arabic.",
      vietnamese: "who's ≠ whose.",
    },
    {
      english: "I met a friend whom I hadn't seen for years. / a friend I hadn't seen…",
      vietnamese: "whom trang trọng; bỏ whom thì thân mật hơn.",
    },
    {
      english: "I recently went back to the town where I grew up.",
      vietnamese: "where = nơi tôi lớn lên.",
    },
    {
      english: "That's the day I'm going away. The reason I'm calling is to ask your advice.",
      vietnamese: "the day / the reason + mệnh đề.",
    },
    {
      english: "A pacifist is a person who believes that all wars are wrong.",
      vietnamese: "who khi là chủ ngữ.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 441,
  },
};
