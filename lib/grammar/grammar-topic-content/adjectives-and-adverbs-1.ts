import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 100 — Adjectives and Adverbs 1 (quick/quickly).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 101 (well, fast, hard/hardly…); Unit 99C.
 */
export const U100_ADJECTIVES_AND_ADVERBS_1_TOPIC: GrammarTopicDetail = {
  slug: "u100-adjectives-and-adverbs-1",
  title: "Adjectives and Adverbs 1",
  levelLabel: "Intermediate",
  kindLabel: "Adverb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 100",
  sourceNote:
    "Thường thêm -ly để tạo trạng từ; tính từ mô tả danh từ/chủ ngữ, trạng từ mô tả hành động; trạng từ bổ nghĩa cho tính từ, trạng từ khác hoặc V3. Nên học kèm Unit 101.",
  intro:
    "Bài này giúp bạn phân biệt tính từ và trạng từ: tính từ mô tả danh từ hoặc chủ ngữ, còn trạng từ mô tả cách hành động diễn ra và có thể bổ nghĩa cho tính từ, trạng từ khác hoặc phân từ. Nên học kèm Unit 101 (well, fast, late, hard/hardly).",
  structure: {
    affirmative:
      "adj + noun | be/look/feel + adj | V + adv | adv + adj/adv | adv + past participle",
    negative:
      "KHÔNG nói a carefully driver → a careful driver | KHÔNG nói Drive careful → Drive carefully | KHÔNG nói serious injured → seriously injured",
  },
  usagePoints: [
    {
      before: "Thường thêm ",
      strong: "-ly",
      after: ": quickly, seriously, carefully, badly, heavily.",
    },
    {
      before: "Một số từ tận cùng bằng -ly vẫn là ",
      strong: "tính từ",
      after: ": friendly, lively, lonely, lovely…",
    },
    {
      before: "Tính từ đứng ",
      strong: "trước danh từ / sau be, look, feel…",
      after: ": Sam is a careful driver. Why do you look so serious?",
    },
    {
      before: "Trạng từ mô tả ",
      strong: "cách hành động diễn ra",
      after: ": Sam drove carefully. It was raining heavily.",
    },
    {
      before: "Trạng từ có thể bổ nghĩa cho tính từ hoặc trạng từ khác: ",
      strong: "reasonably cheap, incredibly quickly",
      after: ", terribly sorry…",
    },
    {
      before: "Trạng từ có thể bổ nghĩa cho phân từ: ",
      strong: "seriously injured, badly organised",
      after: " (KHÔNG nói: serious injured).",
    },
  ],
  examples: [
    {
      english: "Our holiday was too short — the time passed very quickly.",
      vietnamese: "Quickly là trạng từ mô tả cách thời gian trôi qua.",
    },
    {
      english: "Sam is a careful driver. Sam drove carefully along the narrow road.",
      vietnamese: "Careful mô tả driver; carefully mô tả hành động drove.",
    },
    {
      english: "Please be quiet. Please speak quietly.",
      vietnamese: "Sau be dùng tính từ quiet; sau speak dùng trạng từ quietly.",
    },
    {
      english: "It's a reasonably cheap restaurant. I'm terribly sorry.",
      vietnamese: "adv + adj.",
    },
    {
      english: "Two people were seriously injured in the accident.",
      vietnamese: "adv + past participle.",
    },
    {
      english: "She speaks perfect English. She speaks English perfectly.",
      vietnamese: "adj + noun vs verb + adv.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
