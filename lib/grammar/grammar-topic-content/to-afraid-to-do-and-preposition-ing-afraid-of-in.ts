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
    "afraid to do vs afraid of -ing; interested in -ing vs interested to hear/see/know; sorry for -ing vs sorry to …. Nên học kèm Units 62, 65.",
  intro:
    "Bài này giúp bạn phân biệt afraid to do với afraid of -ing, interested in -ing với interested to hear/see/know, và sorry for -ing với sorry to …. Nên học kèm Unit 62 (verb + prep + -ing) và Unit 65 (adjective + to).",
  structure: {
    affirmative:
      "afraid to + V | afraid of + V-ing | interested in + V-ing | interested to + hear/see/know | sorry for + V-ing | sorry to + V",
    negative:
      "KHÔNG nhầm afraid to với afraid of | KHÔNG nói interested to buy → interested in buying",
  },
  usagePoints: [
    {
      before: "afraid to do = ",
      strong: "không dám / không muốn làm",
      after: " vì nguy hiểm hoặc lo lắng: James was afraid to tell his parents.",
    },
    {
      before: "afraid of -ing = ",
      strong: "sợ việc xấu xảy ra",
      after: ": We were afraid of falling. I'm afraid of being bitten.",
    },
    {
      before: "interested in doing = ",
      strong: "muốn / quan tâm đến việc làm gì",
      after: ": Nobody was interested in buying my car.",
    },
    {
      before: "interested to hear/see/know = ",
      strong: "thấy thú vị khi biết / thấy / nghe",
      after: ": I was interested to hear that Tanya left her job.",
    },
    {
      before: "sorry for doing = ",
      strong: "xin lỗi vì đã làm",
      after: "; sorry to hear / to bother = tiếc khi nghe / xin phép lúc đang nói.",
    },
    {
      before: "want / hope / fail / promise + ",
      strong: "to …",
      after: "; think of / succeed in / look forward to / insist on + -ing.",
    },
  ],
  examples: [
    {
      english: "People are afraid to walk here at night.",
      vietnamese: "Afraid to … = không dám làm vì nguy hiểm.",
    },
    {
      english: "We walked carefully. We were afraid of falling.",
      vietnamese: "Afraid of -ing = sợ việc xấu xảy ra (không: afraid to fall).",
    },
    {
      english: "Nobody was interested in buying my car.",
      vietnamese: "Interested in + -ing = quan tâm đến việc làm gì.",
    },
    {
      english: "I was interested to hear that Tanya left her job.",
      vietnamese: "Interested to hear = thấy thú vị khi nghe tin.",
    },
    {
      english: "I'm sorry for shouting at you yesterday.",
      vietnamese: "Sorry for + -ing = xin lỗi vì đã làm gì.",
    },
    {
      english: "I'm sorry to bother you, but I need to ask a question.",
      vietnamese: "Sorry to … = xin phép / tiếc khi đang làm phiền.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 478,
  },
};
