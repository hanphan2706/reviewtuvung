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
    "Bài này giúp bạn nói sở thích bằng prefer và would rather: so sánh hai lựa chọn (prefer A to B), muốn lúc này (I'd prefer to / I'd rather), và mẫu I'd rather you + quá khứ khi muốn người khác làm (hoặc đừng làm) gì. Nên học kèm Unit 58 (would like / like patterns).",
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
      before: "So sánh hai lựa chọn: ",
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
      strong: "V (KHÔNG to)",
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
      vietnamese: "Thích A hơn B — prefer + -ing + to + -ing.",
    },
    {
      english: "I prefer to drive rather than travel by train.",
      vietnamese: "Cùng ý với câu trên — prefer to … rather than …",
    },
    {
      english: "'Shall we go by train?' 'I'd prefer to drive.' / 'I'd rather drive.'",
      vietnamese: "Muốn lúc này: I'd prefer to … hoặc I'd rather + V.",
    },
    {
      english: "I'm tired. I'd rather not go out this evening.",
      vietnamese: "Muốn không làm gì — I'd rather not + V.",
    },
    {
      english: "'Who's going to drive?' 'I'd rather you drove.'",
      vietnamese: "Muốn người khác lái — I'd rather + you + quá khứ (nghĩa hiện tại).",
    },
    {
      english: "I'd rather you didn't tell anyone what I said.",
      vietnamese: "Muốn người kia đừng kể — I'd rather you didn't …",
    },
    {
      english: "I'd rather stay at home tonight than go to the cinema.",
      vietnamese: "Ở nhà hơn đi xem phim — would rather … than …",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 450,
  },
};
