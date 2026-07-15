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
    "like/love/hate + -ing hoặc to …; tình huống đang có → thường -ing; would like/love/hate/prefer + to …; would like to have done. Nên học kèm Units 53–57, 59.",
  intro:
    "Unit này giúp bạn nắm Verb + -ing or to … 3: Like/love/hate + -ing hoặc to …; tình huống đang có → thường -ing; would like/love/hate/prefer + to …; would like to have done. Nên học kèm Units 53–57 và Unit 59 (prefer / would rather).",
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
      after: ": Stephanie hates flying / to fly.",
    },
    {
      before: "Tình huống đang có → thường ",
      strong: "-ing",
      after: ": Paul likes living in Berlin. Do you like being a student?",
    },
    {
      before: "enjoy / mind chỉ ",
      strong: "+ -ing",
      after: ": I enjoy cleaning the kitchen. (không: enjoy to clean)",
    },
    {
      before: "would like / love / hate / prefer + ",
      strong: "to …",
      after: ": I'd like to go away. Would you prefer to eat now or later?",
    },
    {
      before: "I like vs ",
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
      vietnamese: "Bạn có thích dậy sớm không? (hai dạng đều được — thói quen)",
    },
    {
      english: "Paul lives in Berlin now. He likes living there.",
      vietnamese: "Paul đang sống ở Berlin. Anh ấy thích sống ở đó. (tình huống hiện có)",
    },
    {
      english: "I'd like to go away for a few days.",
      vietnamese: "Tôi muốn đi xa vài ngày. (would like + to)",
    },
    {
      english: "I like playing tennis. / I'd like to play tennis today.",
      vietnamese: "Tôi thích chơi tennis (chung). / Hôm nay tôi muốn chơi tennis.",
    },
    {
      english: "Would you mind closing the door, please?",
      vietnamese: "Bạn có phiền đóng cửa giúp không? (mind + -ing)",
    },
    {
      english: "It's a shame we didn't see Anna. I would like to have seen her again.",
      vietnamese: "Tiếc là chúng tôi không gặp Anna. Giá như được gặp lại cô ấy.",
    },
    {
      english: "I'd love to have gone to the party, but it was impossible.",
      vietnamese: "Tôi rất muốn đã đi dự tiệc, nhưng không thể.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
