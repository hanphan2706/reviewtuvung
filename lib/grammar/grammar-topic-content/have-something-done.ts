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
    "have/get + object + V3: thuê nhờ người làm hoặc bị xảy ra với mình; thứ tự cố định have + object + V3. Nên học kèm Unit 42 (bị động cơ bản).",
  intro:
    "Bài này giúp bạn nói thuê hoặc nhờ người khác làm việc với have/get + object + past participle, giữ đúng thứ tự từ, và phân biệt nghĩa thuê dịch vụ với nghĩa bị xảy ra với mình. Nên học kèm Unit 42 (is done / was done).",
  structure: {
    affirmative:
      "have/get + object + V3 | She had the roof repaired | They had their bags stolen",
    negative:
      "KHÔNG đảo thứ tự: have serviced your car / having built a garage → have your car serviced / have a garage built | don't/didn't have + object + V3",
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
      after: " (thân mật hơn): When are you going to get the roof repaired?",
    },
    {
      before: "Nghĩa thuê dịch vụ: ",
      strong: "have hair cut / car serviced / eyes tested",
      after: ", get document translated, get ears pierced…",
    },
    {
      before: "Nghĩa khác — ",
      strong: "bị xảy ra với mình",
      after: ": They had their bags stolen. Have you ever had your bike stolen?",
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
      vietnamese: "had the roof repaired = nhờ người sửa mái — Lisa không tự sửa.",
    },
    {
      english: "How often do you have your car serviced?",
      vietnamese: "have your car serviced = thuê bảo dưỡng xe định kỳ.",
    },
    {
      english: "Your hair looks nice. Did you have it cut?",
      vietnamese: "have it cut = nhờ thợ cắt — không tự cắt.",
    },
    {
      english: "I think you should get your hair cut really short.",
      vietnamese: "get your hair cut ≈ have … done — get thân mật hơn have.",
    },
    {
      english: "Paul and Karen had their bags stolen while they were travelling.",
      vietnamese: "had their bags stolen = bị mất túi (= their bags were stolen).",
    },
    {
      english: "Gary had his nose broken in a fight.",
      vietnamese: "had his nose broken = bị gãy mũi — nghĩa bị xảy ra, không phải thuê dịch vụ.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 420,
  },
};
