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
    "adj/adv + enough; enough + noun; too vs not enough; enough/too + for / to…; too hot to eat (không … it). Nên học kèm Units 102, 104.",
  intro:
    "Unit này giúp bạn nắm Enough and Too: Adj/adv + enough; enough + noun; too vs not enough; enough/too + for / to…; too hot to eat (không … it). Nên học kèm Units 102 và 104.",
  structure: {
    affirmative:
      "adj/adv + enough | enough + noun | too + adj/adv | enough/too … for … | enough/too … to + V",
    negative:
      "not enough fit | not too hot to eat it | too much/many vs not enough…",
  },
  usagePoints: [
    {
      before: "adj/adv + ",
      strong: "enough",
      after: ": I'm not fit enough. We've waited long enough.",
    },
    {
      before: "enough + ",
      strong: "noun",
      after: " (hoặc một mình): enough money; We have enough.",
    },
    {
      before: "too… = ",
      strong: "quá nhiều",
      after: "; not … enough = chưa đủ.",
    },
    {
      before: "enough/too … ",
      strong: "for … / to do…",
      after: ": too small for you; enough experience to do the job.",
    },
    {
      before: "too + adj + ",
      strong: "to + V",
      after: " — không lặp tân ngữ: too hot to eat (không: to eat it).",
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
      vietnamese: "enough sau adj/adv.",
    },
    {
      english: "We have enough money. There weren't enough chairs.",
      vietnamese: "enough trước noun.",
    },
    {
      english: "You work too hard. You don't work hard enough.",
      vietnamese: "too vs not enough.",
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
