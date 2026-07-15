import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 86 — No/None/Any / Nothing/Nobody etc.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 85 (some and any).
 */
export const U86_NO_NONE_ANY_NOTHING_NOBODY_ETC_TOPIC: GrammarTopicDetail = {
  slug: "u86-no-none-any-nothing-nobody-etc",
  title: "No/None/Any / Nothing/Nobody etc.",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 86",
  sourceNote:
    "no + noun; none (of); nothing/nobody/nowhere = not + any-; không phủ định kép; any = bất kỳ. Nên học kèm Unit 85.",
  intro:
    "Unit này giúp bạn nắm No/None/Any / Nothing/Nobody etc.: No + noun; none (of); nothing/nobody/nowhere = not + any-; không phủ định kép; any = bất kỳ. Nên học kèm Unit 85.",
  structure: {
    affirmative:
      "no + N | none (of …) | nothing/nobody/nowhere | not + any/anybody/anything",
    negative:
      "not I didn't say nothing | not none + noun without of when answering with noun form",
  },
  usagePoints: [
    {
      before: "no + ",
      strong: "danh từ",
      after: ": no bus, no trouble, no shops.",
    },
    {
      before: "none = ",
      strong: "không có (không kèm noun)",
      after: "; none of + the/this/them…",
    },
    {
      before: "nothing/nobody… = ",
      strong: "not + anything/anybody…",
      after: " — một phủ định thôi.",
    },
    {
      before: "nobody/no-one + ",
      strong: "they/them/their",
      after: ".",
    },
    {
      before: "any sau phủ định; any cũng = ",
      strong: "bất kỳ",
      after: " (Unit 85D).",
    },
    {
      before: "Nowhere / Nothing / Nobody có thể ",
      strong: "trả lời ngắn",
      after: ".",
    },
  ],
  examples: [
    {
      english: "There was no bus. There weren't any taxis. / There were no taxis.",
      vietnamese: "no + N hoặc not + any.",
    },
    {
      english: "'How much money do you have?' 'None.'",
      vietnamese: "none không kèm danh từ.",
    },
    {
      english: "I said nothing. = I didn't say anything.",
      vietnamese: "không phủ định kép.",
    },
    {
      english: "Nobody knows. / Nowhere. I'm staying here.",
      vietnamese: "nobody / nowhere đứng một mình.",
    },
    {
      english: "You can take any bus. Anybody can do it.",
      vietnamese: "any- = bất kỳ (không phải no-).",
    },
    {
      english: "None of the students were happy. / … was happy.",
      vietnamese: "none of + số nhiều: động từ số ít hoặc số nhiều.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 485,
  },
};
