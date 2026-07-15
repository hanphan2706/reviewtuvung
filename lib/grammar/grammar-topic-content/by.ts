import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 128 — By.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm by (thời gian) Unit 120; passive + by (42B); by vs with.
 */
export const U128_BY_TOPIC: GrammarTopicDetail = {
  slug: "u128-by",
  title: "By",
  levelLabel: "Intermediate",
  kindLabel: "Preposition",
  sourceBook: "English Grammar in Use · Intermediate · Unit 128",
  sourceNote:
    "by mistake/accident/chance; by car/bus (vs in my car / on the train); by post/card/hand; passive by; by vs with; cạnh; tăng by 10%. Nên học kèm Unit 120.",
  intro:
    "Unit này giúp bạn nắm By: By mistake/accident/chance; by car/bus (vs in my car / on the train); by post/card/hand; passive by; by vs with; cạnh; tăng by 10%. Nên học kèm Unit 120.",
  structure: {
    affirmative:
      "by mistake/chance… | by car/bus… | by post/card/hand | V3 + by + agent | by + place | by + amount",
    negative:
      "không: by my car / by the train | with = dụng cụ; by = tác nhân",
  },
  usagePoints: [
    {
      before: "by mistake / accident / ",
      strong: "chance",
      after: "; cố ý = on purpose (không by purpose).",
    },
    {
      before: "by car / bus / train; ",
      strong: "in my car / on the train",
      after: "; usually on foot (không by foot).",
    },
    {
      before: "by post / by card / ",
      strong: "by hand",
      after: "; pay cash hoặc in cash.",
    },
    {
      before: "Passive / tác giả: ",
      strong: "by + agent",
      after: ": watched by millions; a play by Shakespeare.",
    },
    {
      before: "with = ",
      strong: "dụng cụ",
      after: "; by = ai làm: opened with a key / opened by somebody.",
    },
    {
      before: "by = cạnh; ",
      strong: "by + chênh lệch",
      after: ": sit by me; salary increased by ten per cent; won by five metres.",
    },
  ],
  examples: [
    {
      english: "We hadn't arranged to meet. We met by chance.",
      vietnamese: "Chúng tôi không hẹn mà gặp nhau tình cờ.",
    },
    {
      english: "I didn't do it on purpose. It was an accident.",
      vietnamese: "Tôi không cố ý. Đó là tai nạn.",
    },
    {
      english: "Jess usually goes to work by bus. They came in a taxi.",
      vietnamese: "Jess thường đi làm bằng xe buýt. Họ đến bằng taxi.",
    },
    {
      english: "Can I pay by credit card?",
      vietnamese: "Tôi có thể trả bằng thẻ tín dụng không?",
    },
    {
      english: "Have you ever been bitten by a dog?",
      vietnamese: "Bạn đã từng bị chó cắn chưa?",
    },
    {
      english: "The door must have been opened with a key.",
      vietnamese: "Cửa hẳn đã được mở bằng chìa khóa. (không: by a key)",
    },
    {
      english: "Clare's salary has increased by ten per cent. Carl won by five metres.",
      vietnamese: "Lương Clare tăng 10%. Carl thắng cách năm mét.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 515,
  },
};
