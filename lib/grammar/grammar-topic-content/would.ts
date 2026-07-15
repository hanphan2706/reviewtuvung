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
    "Would: tưởng tượng (không thật), would have (quá khứ giả định), quá khứ của will / từ chối, thói quen quá khứ. Nên học kèm if/wish (Units 38–41) sau này.",
  intro:
    "Would: tưởng tượng (không thật), would have (quá khứ giả định), quá khứ của will / từ chối, thói quen quá khứ. Nên học kèm if/wish sau này để nắm would trong câu điều kiện.",
  structure: {
    affirmative: "S + would/'d + V | S + would have + V3 | S + would + V (thói quen quá khứ)",
    negative: "S + wouldn't + V | S + wouldn't have + V3",
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
      before: "So sánh ",
      strong: "will vs would",
      after: ": I'll stay (có thời gian) vs I'd stay, but I have to go (không thể).",
    },
    {
      before: "would cũng là ",
      strong: "quá khứ của will",
      after: ": 'I'll call you' → He said he'd call. wouldn't = từ chối: He wouldn't listen.",
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
      vietnamese: "Mua xe mới thì hay thật, nhưng chúng tôi không đủ tiền.",
    },
    {
      english: "I'd love to live by the sea.",
      vietnamese: "Tôi rất muốn sống bên biển.",
    },
    {
      english: "It's a shame you didn't see the film. You would have liked it.",
      vietnamese: "Tiếc là bạn không xem phim. (Nếu xem) bạn sẽ thích.",
    },
    {
      english: "I tried to warn him, but he wouldn't listen to me.",
      vietnamese: "Tôi đã cố cảnh báo anh ấy, nhưng anh ấy không chịu nghe.",
    },
    {
      english: "Lisa was annoyed because her car wouldn't start.",
      vietnamese: "Lisa bực vì xe 'không chịu' nổ máy.",
    },
    {
      english: "Whenever Richard was angry, he would walk out of the room.",
      vietnamese: "Mỗi khi Richard giận, anh ấy lại bước ra khỏi phòng.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 450,
  },
};
