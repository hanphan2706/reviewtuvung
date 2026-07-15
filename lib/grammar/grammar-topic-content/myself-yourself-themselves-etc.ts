import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 82 — Myself/Yourself/Themselves etc.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 83 (on my own / by myself; a friend of mine).
 */
export const U82_MYSELF_YOURSELF_THEMSELVES_ETC_TOPIC: GrammarTopicDetail = {
  slug: "u82-myself-yourself-themselves-etc",
  title: "Myself/Yourself/Themselves etc.",
  levelLabel: "Intermediate",
  kindLabel: "Pronouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 82",
  sourceNote:
    "Đại từ phản thân khi chủ ngữ = tân ngữ; không sau feel/relax/concentrate/meet; -selves vs each other; nhấn mạnh. Nên học kèm Unit 83.",
  intro:
    "Đại từ phản thân khi chủ ngữ = tân ngữ; không sau feel/relax/concentrate/meet; -selves vs each other; nhấn mạnh. Nên học kèm Unit 83 (by myself / on my own).",
  structure: {
    affirmative:
      "S + V + myself/yourself/… | S + V + each other / one another | S + V + … myself (emphasis)",
    negative:
      "not pay for me (when S = object) | not concentrate yourself | not washed himself (thường)",
  },
  usagePoints: [
    {
      before: "Chủ ngữ = tân ngữ → ",
      strong: "myself / yourself / themselves …",
      after: ": He hurt himself. They enjoyed themselves.",
    },
    {
      before: "Không dùng -self sau ",
      strong: "feel / relax / concentrate / meet",
      after: ".",
    },
    {
      before: "themselves = nhìn chính họ; ",
      strong: "each other",
      after: " = lẫn nhau.",
    },
    {
      before: "Nhấn mạnh: ",
      strong: "I did it myself",
      after: " (= không ai khác làm).",
    },
    {
      before: "yourself (một người) / ",
      strong: "yourselves",
      after: " (nhiều người): Help yourself / Help yourselves.",
    },
    {
      before: "one another ≈ ",
      strong: "each other",
      after: ".",
    },
  ],
  examples: [
    {
      english: "I'll pay for myself. She really enjoyed herself.",
      vietnamese: "phản thân — chủ ngữ = tân ngữ.",
    },
    {
      english: "I feel nervous. I can't relax. What time shall we meet?",
      vietnamese: "không dùng -self sau feel / relax / meet.",
    },
    {
      english: "They looked at themselves in the mirror. They looked at each other.",
      vietnamese: "-selves vs each other.",
    },
    {
      english: "I repaired it myself. You can do it yourself.",
      vietnamese: "nhấn mạnh: tự mình làm.",
    },
    {
      english: "If you want more to eat, help yourselves.",
      vietnamese: "yourselves — nói với nhiều người.",
    },
    {
      english: "We'd never met before, so we introduced ourselves to each other.",
      vietnamese: "kết hợp ourselves + each other.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
