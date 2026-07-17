import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 58 — Verb + -ing or to … 3 (like / would like etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 53–57; prefer → Unit 59.
 */
export const U58_VERB_ING_OR_TO_3_TOPIC: GrammarTopicDetail = {
  slug: "u58-verb-ing-or-to-3",
  title: "Verb + -ing or to … 3",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 58",
  sourceNote:
    "like/love/hate + -ing hoặc to …; tình huống đang có thường -ing; would like/love/hate/prefer + to …; would like to have done. Nên học kèm Units 53–57, 59.",
  intro:
    "Bài này giúp bạn dùng like/love/hate với -ing hoặc to …, phân biệt I like (thói quen) với I'd like (muốn lúc này), và nắm would like to have done khi tiếc việc đã không làm được. Nên học kèm Units 53–57 và Unit 59 (prefer / would rather).",
  structure: {
    affirmative:
      "like/love/hate + V-ing / to + V | would like/love/prefer + to + V | would like to have + V3 | would mind + V-ing",
    negative:
      "don't like + V-ing / to + V | wouldn't like + to + V | wouldn't like to have + V3 | wouldn't mind + V-ing",
  },
  usagePoints: [
    {
      before: "Thói quen: like / love / hate + ",
      strong: "-ing hoặc to …",
      after: " đều được: Stephanie hates flying / to fly.",
    },
    {
      before: "Tình huống đang có → thường dùng ",
      strong: "-ing",
      after: ": Paul likes living in Berlin. Do you like being a student?",
    },
    {
      before: "enjoy / mind chỉ ",
      strong: "+ -ing",
      after: " (KHÔNG + to): I enjoy cleaning the kitchen.",
    },
    {
      before: "would like / love / hate / prefer + ",
      strong: "to …",
      after: ": I'd like to go away. Would you prefer to eat now or later?",
    },
    {
      before: "I like ≠ ",
      strong: "I'd like",
      after: ": I like playing tennis (chung). I'd like to play tennis today (lúc này).",
    },
    {
      before: "would like to have + ",
      strong: "V3",
      after: " = tiếc đã không làm được: I would like to have gone to the party.",
    },
  ],
  examples: [
    {
      english: "Do you like getting up early? / Do you like to get up early?",
      vietnamese: "Thói quen — like + -ing hoặc to … đều được.",
    },
    {
      english: "Paul lives in Berlin now. He likes living there.",
      vietnamese: "Tình huống đang sống ở đó — thường dùng -ing.",
    },
    {
      english: "I'd like to go away for a few days.",
      vietnamese: "Muốn ngay lúc này — would like + to …",
    },
    {
      english: "I like playing tennis. / I'd like to play tennis today.",
      vietnamese: "Sở thích chung vs muốn hôm nay — I like ≠ I'd like.",
    },
    {
      english: "Would you mind closing the door, please?",
      vietnamese: "mind chỉ + -ing, không + to.",
    },
    {
      english: "It's a shame we didn't see Anna. I would like to have seen her again.",
      vietnamese: "Tiếc đã không gặp lại — would like to have + V3.",
    },
    {
      english: "I'd love to have gone to the party, but it was impossible.",
      vietnamese: "Rất muốn đã đi được, nhưng không thể.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
