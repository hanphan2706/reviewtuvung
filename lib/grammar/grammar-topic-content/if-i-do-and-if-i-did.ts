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
    "if I do (có thể xảy ra) vs if I did (không thật / không kỳ vọng). Không dùng would trong mệnh đề if. Nên học kèm Units 39–40; Unit 25 (if/when), Unit 36 (would).",
  intro:
    "Unit này giúp bạn nắm If I Do … and If I Did …: If I do (có thể xảy ra) vs if I did (không thật / không kỳ vọng). Không dùng would trong mệnh đề if. Nên học kèm Unit 39 (if I knew), Unit 40 (if I had known); so với Unit 25 (if/when) và Unit 36 (would).",
  structure: {
    affirmative:
      "If + S + V(s/es)…, S + will + V | If + S + V2…, S + would/'d + V",
    negative:
      "If + S + don't/doesn't + V…, S + won't + V | If + S + didn't + V…, S + wouldn't + V",
  },
  usagePoints: [
    {
      before: "if + hiện tại + will = ",
      strong: "có thể xảy ra",
      after: ": If we take the bus, it will be cheaper.",
    },
    {
      before: "if + quá khứ + would = ",
      strong: "không thật / không kỳ vọng",
      after: " (nghĩa không phải quá khứ): If we took the bus, it would be cheaper.",
    },
    {
      before: "So sánh ",
      strong: "if I find vs if I found",
      after: ": If you find it, can you call me? / If you found a wallet, what would you do?",
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
      vietnamese: "Nếu chúng ta đi xe buýt, sẽ rẻ hơn. (còn có thể chọn xe buýt)",
    },
    {
      english: "If we took the bus, it would be cheaper, but the train is quicker.",
      vietnamese: "Nếu đi xe buýt thì sẽ rẻ hơn, nhưng tàu nhanh hơn. (không đi xe buýt)",
    },
    {
      english: "What would you do if you won a lot of money?",
      vietnamese: "Bạn sẽ làm gì nếu thắng nhiều tiền? (không thật sự kỳ vọng)",
    },
    {
      english: "I'd be surprised if they didn't come to the party.",
      vietnamese: "Tôi sẽ ngạc nhiên nếu họ không đến tiệc. (tôi kỳ vọng họ đến)",
    },
    {
      english: "I'd be very scared if somebody pointed a gun at me.",
      vietnamese: "Tôi sẽ rất sợ nếu có ai chỉ súng vào tôi. (không: if somebody would point)",
    },
    {
      english: "If I won a lot of money, I might buy a house.",
      vietnamese: "Nếu tôi thắng nhiều tiền, tôi có thể mua nhà. (= có thể rằng tôi sẽ mua)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 420,
  },
};
