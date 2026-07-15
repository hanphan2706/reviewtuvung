import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 59 — Prefer and Would Rather.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 58 (would like / prefer patterns).
 */
export const U59_PREFER_AND_WOULD_RATHER_TOPIC: GrammarTopicDetail = {
  slug: "u59-prefer-and-would-rather",
  title: "Prefer and Would Rather",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 59",
  sourceNote:
    "prefer to … / -ing; prefer A to B; prefer to do rather than…; would prefer to…; would rather + V; I'd rather you + past. Nên học kèm Unit 58.",
  intro:
    "Trong unit này bạn sẽ nắm: prefer to … / -ing; prefer A to B; prefer to do rather than…; would prefer to…; would rather + V; I'd rather you + past. Nên học kèm Unit 58 (would like / like patterns).",
  structure: {
    affirmative:
      "prefer + N/V-ing + to + N/V-ing | prefer + to + V + rather than (+ V) | would prefer + to + V | would rather + V | I'd rather + S + V2",
    negative:
      "I'd rather not + V | I'd rather + S + didn't + V | wouldn't prefer + to + V",
  },
  usagePoints: [
    {
      before: "Sở thích chung: ",
      strong: "prefer + -ing / to …",
      after: ": I prefer living / to live in the country.",
    },
    {
      before: "So sánh: ",
      strong: "prefer A to B",
      after: " / prefer doing to doing / prefer to do rather than (do).",
    },
    {
      before: "would prefer (tình huống cụ thể) + ",
      strong: "to …",
      after: ": Shall we go by train? I'd prefer to drive.",
    },
    {
      before: "I'd rather + ",
      strong: "V (không to)",
      after: ": I'd rather drive. I'd rather not go out this evening.",
    },
    {
      before: "I'd rather + ",
      strong: "somebody + quá khứ",
      after: " (nghĩa hiện tại): I'd rather you drove. I'd rather he did it today.",
    },
    {
      before: "I'd rather you ",
      strong: "didn't …",
      after: " = muốn bạn đừng: I'd rather you didn't tell anyone what I said.",
    },
  ],
  examples: [
    {
      english: "I prefer driving to travelling by train.",
      vietnamese: "Tôi thích lái xe hơn đi tàu.",
    },
    {
      english: "I prefer to drive rather than travel by train.",
      vietnamese: "Tôi thích lái xe hơn là đi tàu.",
    },
    {
      english: "'Shall we go by train?' 'I'd prefer to drive.' / 'I'd rather drive.'",
      vietnamese: "—'Mình đi tàu nhé?' —'Tôi thích lái xe hơn.'",
    },
    {
      english: "I'm tired. I'd rather not go out this evening.",
      vietnamese: "Tôi mệt. Tôi muốn không ra ngoài tối nay hơn.",
    },
    {
      english: "'Who's going to drive?' 'I'd rather you drove.'",
      vietnamese: "—'Ai lái?' —'Tôi muốn bạn lái hơn.' (quá khứ = hiện tại)",
    },
    {
      english: "I'd rather you didn't tell anyone what I said.",
      vietnamese: "Tôi muốn bạn đừng kể với ai những gì tôi nói.",
    },
    {
      english: "I'd rather stay at home tonight than go to the cinema.",
      vietnamese: "Tối nay tôi muốn ở nhà hơn là đi xem phim.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 450,
  },
};
