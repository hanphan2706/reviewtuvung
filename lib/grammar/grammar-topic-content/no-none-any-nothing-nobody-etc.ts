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
    "No + danh từ; none (of …); nothing/nobody/nowhere = not + any-; tránh phủ định kép; any = bất kỳ. Nên học kèm Unit 85.",
  intro:
    "Bài này giúp bạn dùng no, none, nothing, nobody… để nói không có gì hay không ai, tránh phủ định kép, và phân biệt với any khi nghĩa là bất kỳ. Nên học kèm Unit 85.",
  structure: {
    affirmative:
      "no + danh từ | none (of …) | nothing / nobody / nowhere | not + any / anybody / anything",
    negative:
      "Không nói I didn't say nothing (nói I didn't say anything) | Không dùng none + danh từ trực tiếp (nói none of …)",
  },
  usagePoints: [
    {
      before: "No đi với ",
      strong: "danh từ",
      after: ": no bus, no trouble, no shops.",
    },
    {
      before: "None nghĩa là ",
      strong: "không có",
      after: " và không đi kèm danh từ; dùng none of + the/this/them…",
    },
    {
      before: "Nothing, nobody, nowhere… tương đương ",
      strong: "not + anything/anybody/anywhere…",
      after: " — chỉ dùng một phủ định trong câu.",
    },
    {
      before: "Nobody/no-one đi với ",
      strong: "they/them/their",
      after: ".",
    },
    {
      before: "Any sau phủ định; any cũng có nghĩa ",
      strong: "bất kỳ",
      after: " (xem thêm Unit 85).",
    },
    {
      before: "Nowhere, nothing, nobody có thể ",
      strong: "trả lời ngắn",
      after: " một mình.",
    },
  ],
  examples: [
    {
      english: "There was no bus. There weren't any taxis. / There were no taxis.",
      vietnamese: "No + danh từ hoặc not + any đều được.",
    },
    {
      english: "'How much money do you have?' 'None.'",
      vietnamese: "None trả lời một mình, không đi kèm danh từ.",
    },
    {
      english: "I said nothing. = I didn't say anything.",
      vietnamese: "Chỉ dùng một phủ định, không nói didn't say nothing.",
    },
    {
      english: "Nobody knows. / Nowhere. I'm staying here.",
      vietnamese: "Nobody và nowhere có thể trả lời ngắn.",
    },
    {
      english: "You can take any bus. Anybody can do it.",
      vietnamese: "Any- ở đây nghĩa bất kỳ, không phải no-.",
    },
    {
      english: "None of the students were happy. / … was happy.",
      vietnamese: "Sau none of + số nhiều, động từ số ít hoặc số nhiều đều được.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 485,
  },
};
