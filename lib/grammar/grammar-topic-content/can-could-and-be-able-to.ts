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
    "can / could / (be) able to: khả năng, được phép; chọn can hay be able to; phân biệt could (khả năng chung) với was able to / managed to (thành công cụ thể). Nên học kèm Unit 27 và Unit 37.",
  intro:
    "Bài này giúp bạn dùng can và could cho khả năng hoặc được phép, chọn can hay (be) able to khi cần các dạng thì khác, và phân biệt could (khả năng chung quá khứ) với was/were able to hoặc managed to (thành công trong một tình huống cụ thể). Nên học kèm Unit 27 và Unit 37.",
  structure: {
    affirmative:
      "S + can + V | S + be able to + V | S + could + V (khả năng chung / giác quan) | S + was/were able to / managed to + V (thành công cụ thể)",
    negative:
      "KHÔNG dùng could cho thành công cụ thể quá khứ → was/were able to hoặc managed to | can't / couldn't / haven't been able to cho phủ định khả năng",
  },
  usagePoints: [
    {
      before: "Dùng ",
      strong: "can + infinitive",
      after: " để nói khả năng, được phép, hoặc điều có thể xảy ra: We can see the lake from our hotel. I'm afraid I can't come to the party.",
    },
    {
      before: "Khi có thể dùng can, ",
      strong: "can thông dụng hơn",
      after: " be able to.",
    },
    {
      before: "can chỉ có hai dạng → đôi khi ",
      strong: "bắt buộc dùng (be) able to",
      after: ": I haven't been able to sleep recently. She might be able to help you.",
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
      vietnamese: "Can + V = có thể làm / khả năng hiện tại.",
    },
    {
      english: "I'm afraid I can't come to the party on Friday.",
      vietnamese: "Can't = không thể đến / không được phép — phủ định của can.",
    },
    {
      english: "My grandfather could speak five languages.",
      vietnamese: "Could = khả năng chung quá khứ — không nói một lần cụ thể.",
    },
    {
      english: "Everybody was able to escape.",
      vietnamese: "Was able to = thoát được trong tình huống cụ thể — KHÔNG nói could escape.",
    },
    {
      english: "I managed to find him in the end.",
      vietnamese: "Managed to = cuối cùng đã làm được — thay cho was able to.",
    },
    {
      english: "I haven't been able to sleep recently.",
      vietnamese: "Have been able to = cần be able to vì can không có dạng perfect.",
    },
    {
      english: "Ask Katherine. She might be able to help you.",
      vietnamese: "Might be able to = có thể giúp — modal khác cũng đi với be able to.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
