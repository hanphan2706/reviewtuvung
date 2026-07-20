import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 36 — Would.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm if/wish (Units 38–41) khi làm câu điều kiện và ước muốn với would.
 */
export const U36_WOULD_TOPIC: GrammarTopicDetail = {
  slug: "u36-would",
  title: "Would",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 36",
  sourceNote:
    "would: tưởng tượng (không thật), would have (quá khứ giả định), quá khứ của will / từ chối, thói quen quá khứ. Nên học kèm Units 38–41 (if & wish).",
  intro:
    "Bài này giúp bạn dùng would cho tình huống tưởng tượng (không thật), would have cho quá khứ giả định, quá khứ của will và nghĩa từ chối, cùng would cho thói quen quá khứ. Nên học kèm Units 38–41 (if & wish).",
  structure: {
    affirmative: "S + would/'d + V | S + would have + V3 | S + would + V (thói quen quá khứ)",
    negative: "wouldn't + V | wouldn't have + V3 | wouldn't = từ chối / 'không chịu'",
  },
  usagePoints: [
    {
      before: "would = ",
      strong: "tưởng tượng (không thật)",
      after: ": It would be nice to buy a new car. I'd love to live by the sea.",
    },
    {
      before: "would have + V3 = ",
      strong: "tưởng tượng quá khứ (không xảy ra)",
      after: ": You would have liked it. They wouldn't have come anyway.",
    },
    {
      before: "I'll stay = ",
      strong: "có thể ở lại",
      after: " (có thời gian / quyết định thật).",
    },
    {
      before: "I'd stay, but I have to go = ",
      strong: "muốn ở nhưng không thể",
      after: " (tình huống không thật).",
    },
    {
      before: "would cũng là ",
      strong: "quá khứ của will",
      after: ": 'I'll call you' → He said he'd call.",
    },
    {
      before: "wouldn't = ",
      strong: "từ chối / không chịu",
      after: ": He wouldn't listen.",
    },
    {
      before: "The car wouldn't start = ",
      strong: "'không chịu' nổ máy",
      after: " (như từ chối).",
    },
    {
      before: "would = ",
      strong: "thói quen quá khứ",
      after: " (≈ used to): Whenever he was angry, he would walk out of the room.",
    },
  ],
  examples: [
    {
      english: "It would be nice to buy a new car, but we can't afford it.",
      vietnamese: "Would be nice = hay thật nếu mua được — tình huống không thật.",
    },
    {
      english: "I'd love to live by the sea.",
      vietnamese: "Would love = rất muốn — ước muốn, không phải kế hoạch thật.",
    },
    {
      english: "It's a shame you didn't see the film. You would have liked it.",
      vietnamese: "Would have liked = (nếu xem) bạn sẽ thích — quá khứ giả định.",
    },
    {
      english: "I tried to warn him, but he wouldn't listen to me.",
      vietnamese: "Wouldn't listen = không chịu nghe — nghĩa từ chối.",
    },
    {
      english: "Lisa was annoyed because her car wouldn't start.",
      vietnamese: "Wouldn't start = xe không chịu nổ máy — như người từ chối.",
    },
    {
      english: "Whenever Richard was angry, he would walk out of the room.",
      vietnamese: "Would walk out = thói quen quá khứ — mỗi lần giận lại bước ra.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 450,
  },
};
