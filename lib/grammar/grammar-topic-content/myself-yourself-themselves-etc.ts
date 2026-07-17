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
    "Đại từ phản thân khi chủ ngữ trùng tân ngữ; không dùng sau feel/relax/concentrate/meet; phân biệt -selves và each other; dùng để nhấn mạnh. Nên học kèm Unit 83.",
  intro:
    "Bài này giúp bạn dùng myself, yourself, themselves… khi chủ ngữ và tân ngữ là cùng một người, phân biệt với each other, và dùng đại từ phản thân để nhấn mạnh. Nên học kèm Unit 83.",
  structure: {
    affirmative:
      "chủ ngữ + động từ + myself/yourself/… | chủ ngữ + động từ + each other / one another | chủ ngữ + động từ + … + myself (nhấn mạnh)",
    negative:
      "Không nói I'll pay for me (khi chủ ngữ = tân ngữ) | Không nói concentrate yourself | Không nói washed himself (thường không dùng)",
  },
  usagePoints: [
    {
      before: "Khi chủ ngữ và tân ngữ là cùng một người thì dùng ",
      strong: "myself / yourself / themselves …",
      after: ": He hurt himself. They enjoyed themselves.",
    },
    {
      before: "Sau feel, relax, concentrate, meet thì ",
      strong: "KHÔNG",
      after: " dùng -self: I feel nervous. I can't relax. What time shall we meet?",
    },
    {
      before: "Themselves nghĩa là ",
      strong: "nhìn chính mình",
      after: "; each other nghĩa là lẫn nhau.",
    },
    {
      before: "Dùng để nhấn mạnh: ",
      strong: "I did it myself",
      after: " nghĩa là không ai khác làm thay.",
    },
    {
      before: "Yourself nói với ",
      strong: "một người",
      after: "; yourselves nói với nhiều người: Help yourself / Help yourselves.",
    },
    {
      before: "One another có nghĩa ",
      strong: "tương tự each other",
      after: ".",
    },
  ],
  examples: [
    {
      english: "I'll pay for myself. She really enjoyed herself.",
      vietnamese: "Đại từ phản thân khi chủ ngữ và tân ngữ trùng nhau.",
    },
    {
      english: "I feel nervous. I can't relax. What time shall we meet?",
      vietnamese: "Sau feel, relax và meet thì không dùng -self.",
    },
    {
      english: "They looked at themselves in the mirror. They looked at each other.",
      vietnamese: "Themselves là nhìn chính mình; each other là nhìn lẫn nhau.",
    },
    {
      english: "I repaired it myself. You can do it yourself.",
      vietnamese: "Dùng -self ở cuối câu để nhấn mạnh tự mình làm.",
    },
    {
      english: "If you want more to eat, help yourselves.",
      vietnamese: "Yourselves dùng khi nói với nhiều người.",
    },
    {
      english: "We'd never met before, so we introduced ourselves to each other.",
      vietnamese: "Kết hợp ourselves và each other trong cùng một câu.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
