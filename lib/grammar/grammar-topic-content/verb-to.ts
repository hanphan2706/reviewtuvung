import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 54 — Verb + to … (decide to … / forget to … etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 53, 55–58.
 */
export const U54_VERB_TO_TOPIC: GrammarTopicDetail = {
  slug: "u54-verb-to",
  title: "Verb + to …",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 54",
  sourceNote:
    "offer/agree/decide/plan/hope/forget/manage… + to …; seem/appear/pretend/claim; what/how/where + to …. Nên học kèm Units 53, 55–58.",
  intro:
    "Bài này giúp bạn dùng to … sau decide, hope, manage, forget…, mở rộng với seem/appear/pretend/claim, và hỏi bằng what/how/where + to …. Nên học kèm Unit 53 (-ing) và Units 55–58.",
  structure: {
    affirmative:
      "decide/hope/manage… + to + V | seem/appear/pretend + to + V / to be -ing / to have + V3 | know/decide + what/how… + to + V",
    negative:
      "decide/promise… + not to + V | KHÔNG dùng to sau enjoy / suggest / think of | daren't + V (KHÔNG to)",
  },
  usagePoints: [
    {
      before: "Nhiều động từ theo sau bằng ",
      strong: "to …",
      after: ": We decided to take a taxi. I agreed to help him.",
    },
    {
      before: "Phủ định: ",
      strong: "not to …",
      after: ": We decided not to go out. I promised not to be late.",
    },
    {
      before: "KHÔNG dùng to sau ",
      strong: "enjoy / suggest / think of",
      after: ": I enjoy reading. Are you thinking of buying a car?",
    },
    {
      before: "seem / appear / pretend / claim + ",
      strong: "to … / to have done",
      after: ": They seem to have plenty of money. I seem to have lost my keys.",
    },
    {
      before: "Hỏi bằng ",
      strong: "what / how / where / whether + to …",
      after: ": Have you decided where to go? Can somebody show me how to use this camera?",
    },
    {
      before: "Với dare: ",
      strong: "dare (to) / daren't + V",
      after: ": I didn't dare (to) tell him. I daren't tell him. (KHÔNG: daren't to tell)",
    },
  ],
  examples: [
    {
      english: "It was a long way, so we decided to take a taxi home.",
      vietnamese: "Decide + to … = quyết định làm gì.",
    },
    {
      english: "We decided not to go out because of the weather.",
      vietnamese: "Phủ định: decide + not to …",
    },
    {
      english: "I waved to Karen, but failed to attract her attention.",
      vietnamese: "Fail + to … = không làm được việc gì.",
    },
    {
      english: "I pretended to be reading the newspaper.",
      vietnamese: "Pretend + to be -ing = giả vờ đang làm gì.",
    },
    {
      english: "Have you seen my keys? I seem to have lost them.",
      vietnamese: "Seem + to have + V3 = có vẻ đã xảy ra rồi.",
    },
    {
      english: "Do you know how to get to the airport from here?",
      vietnamese: "How + to … hỏi cách làm gì.",
    },
    {
      english: "I enjoy reading. (not enjoy to read)",
      vietnamese: "Enjoy thuộc Unit 53 — KHÔNG dùng to.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
