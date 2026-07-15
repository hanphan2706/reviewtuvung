import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 73 — The 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–F.
 * Nên học kèm Units 72, 74–76 (chuỗi the).
 */
export const U73_THE_1_TOPIC: GrammarTopicDetail = {
  slug: "u73-the-1",
  title: "The 1",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 73",
  sourceNote:
    "the khi chỉ có một; the + siêu cấp; the same; world/sun/moon; cinema/radio/internet; bữa ăn; platform 5. Nên học kèm Units 72, 74–76.",
  intro:
    "Unit này giúp bạn nắm The 1: The khi chỉ có một; the + siêu cấp; the same; world/sun/moon; cinema/radio/internet; bữa ăn; platform 5. Nên học kèm Unit 72 và Units 74–76.",
  structure: {
    affirmative:
      "the + only one / superlative / same | the sun/moon/sky/sea… | the cinema / the radio / the internet",
    negative:
      "no the with breakfast/lunch/dinner (bare) | no the with platform 5 / page 15 / vitamin C | space (universe) without the",
  },
  usagePoints: [
    {
      before: "Chỉ có một → ",
      strong: "the",
      after: ": the equator, the tenth floor, the capital of…",
    },
    {
      before: "Siêu cấp → ",
      strong: "the + -est / most",
      after: ": What's the longest river in Europe?",
    },
    {
      before: "Luôn: ",
      strong: "the same",
      after: " (không: same colour).",
    },
    {
      before: "the sun / the moon / the sky / the sea; ",
      strong: "space",
      after: " (vũ trụ) không the; Earth (hành tinh) thường không the.",
    },
    {
      before: "the cinema / the theatre; ",
      strong: "TV",
      after: " không the; the radio; the internet; the television = chiếc TV.",
    },
    {
      before: "breakfast/lunch/dinner ",
      strong: "không the",
      after: "; nhưng a big breakfast / a nice lunch. platform 5, page 15 không the.",
    },
  ],
  examples: [
    {
      english: "Our apartment is on the tenth floor. Buenos Aires is the capital of Argentina.",
      vietnamese: "Chỉ có một tầng 10 / một thủ đô → the.",
    },
    {
      english: "Your sweater is the same colour as mine.",
      vietnamese: "the same (không: same colour).",
    },
    {
      english: "I love to look at the stars in the sky. There are millions of stars in space.",
      vietnamese: "the sky; space (vũ trụ) không the.",
    },
    {
      english: "I go to the cinema a lot, but I don't listen to the radio much.",
      vietnamese: "the cinema; the radio; so sánh watch TV.",
    },
    {
      english: "What did you have for breakfast? We had a very nice lunch.",
      vietnamese: "bữa ăn trần; có tính từ → a … lunch.",
    },
    {
      english: "Our train leaves from platform 5.",
      vietnamese: "platform + số → không the.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 485,
  },
};
