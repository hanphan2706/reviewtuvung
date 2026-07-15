import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 46 — Have something done.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Liên quan causative / dịch vụ thuê người làm; cũng meaning “bị xảy ra”.
 */
export const U46_HAVE_SOMETHING_DONE_TOPIC: GrammarTopicDetail = {
  slug: "u46-have-something-done",
  title: "Have Something Done",
  levelLabel: "Intermediate",
  kindLabel: "Causative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 46",
  sourceNote:
    "have/get + object + past participle (thuê làm); have something done = bị xảy ra với mình. Word order: have + object + V3.",
  intro:
    "Unit này giúp bạn nắm Have Something Done: Have/get + object + past participle (thuê làm); have something done = bị xảy ra với mình. Word order: have + object + V3.",
  structure: {
    affirmative:
      "have/get + object + V3 | She had the roof repaired | They had their bags stolen",
    negative:
      "don't/didn't have + object + V3 | I don't like having my picture taken",
  },
  usagePoints: [
    {
      before: "have + object + V3 = ",
      strong: "thuê / nhờ người làm",
      after: ": She had the roof repaired. Did you have those curtains made?",
    },
    {
      before: "Thứ tự cố định: ",
      strong: "have + object + V3",
      after: " — không: have serviced your car / having built a garage.",
    },
    {
      before: "get + object + V3 ≈ ",
      strong: "have … done",
      after: ": When are you going to get the roof repaired?",
    },
    {
      before: "Nghĩa khác: ",
      strong: "bị xảy ra với mình",
      after: ": They had their bags stolen. Have you ever had your bike stolen?",
    },
    {
      before: "Ví dụ thuê dịch vụ: ",
      strong: "have hair cut / car serviced / eyes tested",
      after: ", get document translated, get ears pierced…",
    },
    {
      before: "Continuous: ",
      strong: "are having … done",
      after: ": We are having the house painted.",
    },
  ],
  examples: [
    {
      english: "Lisa had the roof repaired yesterday.",
      vietnamese: "Lisa đã nhờ người sửa mái hôm qua. (không tự sửa)",
    },
    {
      english: "How often do you have your car serviced?",
      vietnamese: "Bạn bảo dưỡng xe bao lâu một lần?",
    },
    {
      english: "Your hair looks nice. Did you have it cut?",
      vietnamese: "Tóc bạn đẹp. Bạn có cắt tóc không? (nhờ thợ)",
    },
    {
      english: "I think you should get your hair cut really short.",
      vietnamese: "Tôi nghĩ bạn nên cắt tóc thật ngắn. (get ≈ have)",
    },
    {
      english: "Paul and Karen had their bags stolen while they were travelling.",
      vietnamese: "Paul và Karen bị mất túi khi đi du lịch. (= bags were stolen)",
    },
    {
      english: "Gary had his nose broken in a fight.",
      vietnamese: "Gary bị gãy mũi trong một trận đánh nhau.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 420,
  },
};
