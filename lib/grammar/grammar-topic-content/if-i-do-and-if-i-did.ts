import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 38 — if I do … and if I did ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 39 (if I knew), Unit 40 (if I had known); cũng Unit 25 (if/when), Unit 36 (would).
 */
export const U38_IF_I_DO_AND_IF_I_DID_TOPIC: GrammarTopicDetail = {
  slug: "u38-if-i-do-and-if-i-did",
  title: "If I Do … and If I Did …",
  levelLabel: "Intermediate",
  kindLabel: "Conditional",
  sourceBook: "English Grammar in Use · Intermediate · Unit 38",
  sourceNote:
    "if + present + will: việc còn có thể xảy ra; if + past + would: giả định không thật (nghĩa không phải quá khứ). KHÔNG dùng would trong mệnh đề if. Nên học kèm Units 39–40, Unit 25 (if/when), Unit 36 (would).",
  intro:
    "Bài này giúp bạn phân biệt if I do (việc còn có thể xảy ra) với if I did (giả định không thật hoặc bạn không kỳ vọng), tránh đặt would trong mệnh đề if, và dùng would / could / might ở mệnh đề còn lại. Nên học kèm Unit 39 (if I knew), Unit 40 (if I had known), so với Unit 25 (if/when) và Unit 36 (would).",
  structure: {
    affirmative:
      "If + S + V(s/es)…, S + will + V | If + S + V2…, S + would/'d + V",
    negative:
      "KHÔNG dùng would trong mệnh đề if → If somebody pointed a gun at me (không: if somebody would point) | If + didn't…, wouldn't… cho giả định phủ định",
  },
  usagePoints: [
    {
      before: "if + present + will = ",
      strong: "có thể xảy ra",
      after: ": If we take the bus, it will be cheaper.",
    },
    {
      before: "if + past + would = ",
      strong: "giả định không thật",
      after: ": If we took the bus, it would be cheaper. (nghĩa không phải quá khứ)",
    },
    {
      before: "if + present = ",
      strong: "If I find / If you find",
      after: ": If you find it, can you call me? (còn có thể xảy ra)",
    },
    {
      before: "if + past = ",
      strong: "If I found",
      after: ": If you found a wallet, what would you do? (giả định, không kỳ vọng thật)",
    },
    {
      before: "Không dùng ",
      strong: "would trong mệnh đề if",
      after: ": I'd be scared if somebody pointed a gun at me. (không: if somebody would point)",
    },
    {
      before: "Mệnh đề còn lại dùng ",
      strong: "would / 'd / wouldn't",
      after: ": If I went to bed now, I wouldn't sleep.",
    },
    {
      before: "Cũng dùng ",
      strong: "could / might",
      after: ": If I won a lot of money, I might buy a house. If it stopped raining, we could go out.",
    },
  ],
  examples: [
    {
      english: "If we take the bus, it will be cheaper.",
      vietnamese: "If + present + will = còn có thể chọn xe buýt — kết quả thật sự có thể xảy ra.",
    },
    {
      english: "If we took the bus, it would be cheaper, but the train is quicker.",
      vietnamese: "If + past + would = giả định không thật — thực tế không đi xe buýt vì tàu nhanh hơn.",
    },
    {
      english: "What would you do if you won a lot of money?",
      vietnamese: "If I found / won = câu hỏi giả định — không kỳ vọng bạn thật sự thắng.",
    },
    {
      english: "I'd be surprised if they didn't come to the party.",
      vietnamese: "If + didn't…, wouldn't… = giả định phủ định — tôi kỳ vọng họ đến.",
    },
    {
      english: "I'd be very scared if somebody pointed a gun at me.",
      vietnamese: "Would chỉ ở mệnh đề chính — KHÔNG nói if somebody would point.",
    },
    {
      english: "If I won a lot of money, I might buy a house.",
      vietnamese: "Might thay would = có thể rằng tôi sẽ mua — không chắc chắn.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 420,
  },
};
