import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 66 — To … (Afraid to Do) and Preposition + -ing (Afraid of -ing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Đối chiếu to … vs preposition + -ing; sorry to … ➜ Unit 65C; verb + prep + -ing ➜ Unit 62.
 */
export const U66_TO_AFRAID_TO_DO_AND_PREPOSITION_ING_AFRAID_OF_IN_TOPIC: GrammarTopicDetail = {
  slug: "u66-to-afraid-to-do-and-preposition-ing-afraid-of-in",
  title: "To … (Afraid to Do) and Preposition + -ing (Afraid of -ing)",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 66",
  sourceNote:
    "afraid to do vs afraid of -ing; interested in -ing vs interested to hear/see/know; sorry for -ing vs sorry to …; đối chiếu want/hope to vs think of / succeed in…",
  intro:
    "Unit này giúp bạn nắm To … (Afraid to Do) and Preposition + -ing (Afraid of -ing): Afraid to do vs afraid of -ing; interested in -ing vs interested to hear/see/know; sorry for -ing vs sorry to …; đối chiếu want/hope to vs think of / succeed in…",
  structure: {
    affirmative:
      "afraid to + V | afraid of + V-ing | interested in + V-ing | interested to + hear/see/know | sorry for + V-ing | sorry to + V",
    negative:
      "not afraid to + V | don't be afraid to + V | not interested in + V-ing",
  },
  usagePoints: [
    {
      before: "afraid to do = ",
      strong: "không dám/không muốn làm",
      after: " (vì nguy hiểm): James was afraid to tell his parents.",
    },
    {
      before: "afraid of -ing = ",
      strong: "sợ việc xấu xảy ra",
      after: ": We were afraid of falling. I'm afraid of being bitten.",
    },
    {
      before: "interested in doing = muốn làm; ",
      strong: "interested to hear/see/know",
      after: " = thú vị khi biết: interested in joining; interested to hear that…",
    },
    {
      before: "sorry for doing = xin lỗi vì đã làm; ",
      strong: "sorry to hear / to bother",
      after: " = tiếc khi nghe / xin phép lúc đang nói.",
    },
    {
      before: "want / hope / fail / promise + to …; think of / succeed in / look forward to / insist on + ",
      strong: "-ing",
      after: ".",
    },
    {
      before: "prevent somebody from -ing; allow somebody ",
      strong: "to …",
      after: " — đối chiếu động từ + to vs prep + -ing.",
    },
  ],
  examples: [
    {
      english: "People are afraid to walk here at night.",
      vietnamese: "Người ta không dám đi bộ ở đây ban đêm.",
    },
    {
      english: "We walked carefully. We were afraid of falling.",
      vietnamese: "Chúng tôi đi cẩn thận vì sợ ngã. (không: afraid to fall)",
    },
    {
      english: "Nobody was interested in buying my car.",
      vietnamese: "Không ai muốn mua xe của tôi. (không: interested to buy)",
    },
    {
      english: "I was interested to hear that Tanya left her job.",
      vietnamese: "Tôi thấy thú vị khi nghe Tanya nghỉ việc.",
    },
    {
      english: "I'm sorry for shouting at you yesterday.",
      vietnamese: "Tôi xin lỗi vì đã hét vào bạn hôm qua.",
    },
    {
      english: "I'm sorry to bother you, but I need to ask a question.",
      vietnamese: "Xin lỗi làm phiền, nhưng tôi cần hỏi một câu.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 478,
  },
};
