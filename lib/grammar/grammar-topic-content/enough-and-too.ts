import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 103 — Enough and Too.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 102, 104.
 */
export const U103_ENOUGH_AND_TOO_TOPIC: GrammarTopicDetail = {
  slug: "u103-enough-and-too",
  title: "Enough and Too",
  levelLabel: "Intermediate",
  kindLabel: "Structure",
  sourceBook: "English Grammar in Use · Intermediate · Unit 103",
  sourceNote:
    "enough đứng sau tính từ/trạng từ nhưng trước danh từ; phân biệt too và not enough; enough/too + for / to…; không lặp tân ngữ sau too … to. Nên học kèm Units 102, 104.",
  intro:
    "Bài này giúp bạn đặt enough đúng vị trí, phân biệt too (quá mức cần thiết) với not … enough (chưa đủ), và dùng các mẫu enough/too … for … / to do mà không lặp tân ngữ. Nên học kèm Units 102 và 104.",
  structure: {
    affirmative:
      "adj/adv + enough | enough + noun | too + adj/adv | enough/too … for … | enough/too … to + V",
    negative:
      "KHÔNG nói enough fit → fit enough | KHÔNG lặp tân ngữ: too hot to eat, không to eat it | KHÔNG nhầm too với very",
  },
  usagePoints: [
    {
      before: "enough đứng sau ",
      strong: "tính từ / trạng từ",
      after: ": I'm not fit enough. We've waited long enough.",
    },
    {
      before: "enough đứng trước ",
      strong: "danh từ",
      after: " (hoặc một mình): enough money; We have enough.",
    },
    {
      before: "too … = ",
      strong: "quá mức cần thiết",
      after: ".",
    },
    {
      before: "not … enough = ",
      strong: "chưa đủ",
      after: ".",
    },
    {
      before: "Dùng enough/too … với ",
      strong: "for … / to do …",
      after: ": too small for you; enough experience to do the job.",
    },
    {
      before: "Sau too + tính từ + to + V, ",
      strong: "KHÔNG lặp tân ngữ",
      after: ": too hot to eat (KHÔNG nói: to eat it).",
    },
    {
      before: "too much/many vs ",
      strong: "not enough",
      after: ": too many people and not enough chairs.",
    },
  ],
  examples: [
    {
      english: "I'm not fit enough. We've waited long enough.",
      vietnamese: "Enough đứng sau tính từ fit và trạng từ long.",
    },
    {
      english: "We have enough money. There weren't enough chairs.",
      vietnamese: "Enough đứng trước danh từ money và chairs.",
    },
    {
      english: "You work too hard. You don't work hard enough.",
      vietnamese: "Too hard là quá sức; not hard enough là chưa đủ chăm chỉ.",
    },
    {
      english: "She's not old enough to have a driving licence.",
      vietnamese: "enough … to…",
    },
    {
      english: "It's too far to walk home from here.",
      vietnamese: "too … to…",
    },
    {
      english: "The food was too hot to eat. These boxes are too heavy to carry.",
      vietnamese: "không: to eat it / to carry them.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 461,
  },
};
