import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 26 — can, could and (be) able to.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 27 (could do / could have done) và Unit 28 (must/can't suy đoán).
 */
export const U26_CAN_COULD_AND_BE_ABLE_TO_TOPIC: GrammarTopicDetail = {
  slug: "u26-can-could-and-be-able-to",
  title: "Can, Could and (Be) Able To",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 26",
  sourceNote:
    "can, could and (be) able to: khả năng, được phép, can vs be able to, could vs was able to/managed to. Nên học kèm Unit 27 (could have done) và Unit 37 (can/could you…?).",
  intro:
    "Unit này giúp bạn nắm Can, Could and (Be) Able To: Can, could and (be) able to: khả năng, được phép, can vs be able to, could vs was able to/managed to. Nên học kèm Unit 27 để mở rộng could / could have done.",
  structure: {
    affirmative:
      "S + can + V | S + be able to + V | S + could + V (khả năng chung / giác quan) | S + was/were able to / managed to + V (thành công cụ thể)",
    negative: "S + can't/cannot + V | S + couldn't + V | S + haven't been able to + V",
  },
  usagePoints: [
    {
      before: "Dùng ",
      strong: "can + infinitive",
      after: " để nói khả năng, được phép, hoặc điều có thể xảy ra: We can see the lake from our hotel. I'm afraid I can't come to the party.",
    },
    {
      before: "be able to cũng được, nhưng ",
      strong: "can thông dụng hơn",
      after: " khi có thể dùng can. can chỉ có hai dạng → đôi khi bắt buộc dùng (be) able to: I haven't been able to sleep recently. She might be able to help you.",
    },
    {
      before: "could = khả năng chung trong quá khứ, hoặc với ",
      strong: "see / hear / smell / taste / feel / remember / understand",
      after: ": My grandfather could speak five languages. We could see the lake from the hotel.",
    },
    {
      before: "Thành công trong ",
      strong: "một tình huống cụ thể",
      after: " → thường was/were able to hoặc managed to (không could): Everybody was able to escape. I managed to find him in the end.",
    },
    {
      before: "Phủ định ",
      strong: "couldn't",
      after: " dùng được trong mọi tình huống (khả năng chung lẫn tình huống cụ thể): I looked everywhere, but I couldn't find him.",
    },
    {
      before: "could cũng là ",
      strong: "quá khứ của can",
      after: " khi nói có khả năng / được phép trong quá khứ: We were free. We could do what we wanted.",
    },
  ],
  examples: [
    {
      english: "We can see the lake from our hotel.",
      vietnamese: "Chúng tôi có thể nhìn thấy hồ từ khách sạn.",
    },
    {
      english: "I'm afraid I can't come to the party on Friday.",
      vietnamese: "Tôi e là không đến được tiệc thứ Sáu.",
    },
    {
      english: "My grandfather could speak five languages.",
      vietnamese: "Ông tôi có thể nói năm thứ tiếng. (khả năng chung)",
    },
    {
      english: "Everybody was able to escape.",
      vietnamese: "Mọi người đều thoát được. (thành công trong tình huống cụ thể)",
    },
    {
      english: "I managed to find him in the end.",
      vietnamese: "Cuối cùng tôi đã tìm được anh ấy.",
    },
    {
      english: "I haven't been able to sleep recently.",
      vietnamese: "Gần đây tôi không ngủ được. (cần be able to vì perfect)",
    },
    {
      english: "Ask Katherine. She might be able to help you.",
      vietnamese: "Hỏi Katherine đi. Có thể cô ấy giúp được bạn.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
