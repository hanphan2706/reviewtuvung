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
    "everybody/everything thay cho all đứng một mình; whole + danh từ đếm được số ít; phân biệt every day với all day/the whole day và every time với all the time. Nên học kèm Units 88, 91.",
  intro:
    "Bài này giúp bạn phân biệt all, every và whole: dùng everybody/everything khi nói mọi người/mọi thứ, đặt whole trước danh từ đếm được số ít, và tránh nhầm every day với all day hay every time với all the time. Nên học kèm Unit 88 (all of) và Unit 91 (each/every).",
  structure: {
    affirmative:
      "everybody/everything | all + N / all of us | the whole + danh từ đếm được số ít | every + khoảng thời gian | all day / the whole day",
    negative:
      "KHÔNG dùng all đứng một mình thay everybody/everything | KHÔNG nói the whole money | KHÔNG nói all days | KHÔNG nói all the day",
  },
  usagePoints: [
    {
      before: "Khi nói mọi người / mọi thứ, dùng ",
      strong: "everybody / everything",
      after: " — KHÔNG dùng all đứng một mình.",
    },
    {
      before: "whole đi với ",
      strong: "danh từ số ít đếm được",
      after: ": the whole book / the whole team.",
    },
    {
      before: "Với danh từ không đếm được, dùng ",
      strong: "all the money / all the information",
      after: " (KHÔNG nói: the whole money).",
    },
    {
      before: "every day = ",
      strong: "mỗi ngày",
      after: ".",
    },
    {
      before: "all day / the whole day = ",
      strong: "suốt cả ngày",
      after: ".",
    },
    {
      before: "all the time = ",
      strong: "liên tục",
      after: ".",
    },
    {
      before: "every time = ",
      strong: "mỗi lần",
      after: " — KHÔNG cùng nghĩa với all the time.",
    },
    {
      before: "everybody đi với ",
      strong: "động từ số ít",
      after: "; khi nhắc lại có thể dùng they/their.",
    },
  ],
  examples: [
    {
      english: "Everybody had a great time. All I've eaten today is a banana.",
      vietnamese: "Everybody chỉ mọi người; all trong câu sau mang nghĩa the only thing.",
    },
    {
      english: "I read the whole book. I read all the information carefully.",
      vietnamese: "Whole đi với book số ít; information không đếm được nên dùng all.",
    },
    {
      english: "We went to the beach every day. We spent all day / the whole day on the beach.",
      vietnamese: "Every day là mỗi ngày; all day/the whole day là suốt cả ngày.",
    },
    {
      english: "They're at home all the time. Every time I see you, you look different.",
      vietnamese: "All the time nghĩa là liên tục; every time nghĩa là mỗi lần.",
    },
    {
      english: "Everybody has arrived. Everybody said they enjoyed themselves.",
      vietnamese: "Everybody dùng động từ số ít has; có thể dùng they khi nhắc lại.",
    },
    {
      english: "There's a bus every ten minutes.",
      vietnamese: "Every + khoảng thời gian diễn tả tần suất lặp lại.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
