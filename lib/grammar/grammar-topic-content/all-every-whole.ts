import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 90 — All, Every, Whole.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 88 (all of…) và Unit 91 (each and every).
 */
export const U90_ALL_EVERY_WHOLE_TOPIC: GrammarTopicDetail = {
  slug: "u90-all-every-whole",
  title: "All, Every, Whole",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 90",
  sourceNote:
    "everybody/everything không all một mình; whole + singular; every day vs all day / the whole day; every time vs all the time. Nên học kèm Units 88, 91.",
  intro:
    "Unit này giúp bạn nắm All, Every, Whole: Everybody/everything không all một mình; whole + singular; every day vs all day / the whole day; every time vs all the time. Nên học kèm Unit 88 (all of) và Unit 91 (each/every).",
  structure: {
    affirmative:
      "everybody/everything | all + N / all of us | the whole + singular N | every + period | all day / the whole day",
    negative:
      "not all were happy | not the whole money | not all days | not all the day",
  },
  usagePoints: [
    {
      before: "Người / mọi thứ: ",
      strong: "everybody / everything",
      after: " (không chỉ all một mình).",
    },
    {
      before: "whole + ",
      strong: "danh từ số ít đếm được",
      after: ": the whole book / the whole team.",
    },
    {
      before: "Không đếm được → ",
      strong: "all the money / all the information",
      after: " (không: the whole money).",
    },
    {
      before: "every day = ",
      strong: "mỗi ngày",
      after: "; all day / the whole day = cả ngày.",
    },
    {
      before: "all the time ≠ ",
      strong: "every time",
      after: " (liên tục vs mỗi lần).",
    },
    {
      before: "everybody + ",
      strong: "động từ số ít",
      after: "; đại từ theo sau: they/their.",
    },
  ],
  examples: [
    {
      english: "Everybody had a great time. All I've eaten today is a banana.",
      vietnamese: "everybody; all = the only thing.",
    },
    {
      english: "I read the whole book. I read all the information carefully.",
      vietnamese: "whole + singular; all + uncountable.",
    },
    {
      english: "We went to the beach every day. We spent all day / the whole day on the beach.",
      vietnamese: "every day vs all day.",
    },
    {
      english: "They're at home all the time. Every time I see you, you look different.",
      vietnamese: "all the time vs every time.",
    },
    {
      english: "Everybody has arrived. Everybody said they enjoyed themselves.",
      vietnamese: "số ít + they.",
    },
    {
      english: "There's a bus every ten minutes.",
      vietnamese: "every + khoảng thời gian.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
