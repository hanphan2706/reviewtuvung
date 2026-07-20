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
    "Bài này giúp bạn dùng by trong nhiều ngữ cảnh: by mistake/accident/chance, by car/bus (khác in my car / on the train), by post/card/hand, by + tác nhân trong câu bị động, by versus with, by = cạnh, và by + mức chênh lệch. Nên học kèm Unit 120.",
  structure: {
    affirmative:
      "by mistake/chance… | by car/bus… | by post/card/hand | V3 + by + agent | by + place | by + amount",
    negative:
      "KHÔNG nói by my car / by the train → in my car / on the train | KHÔNG nhầm with (= dụng cụ) với by (= tác nhân) | on purpose, KHÔNG by purpose",
  },
  usagePoints: [
    {
      before: "by mistake / accident / ",
      strong: "chance",
      after: ": We met by chance. (cố ý = on purpose, không by purpose)",
    },
    {
      before: "by car / bus / train = ",
      strong: "phương tiện nói chung",
      after: ": Jess usually goes to work by bus.",
    },
    {
      before: "in my car / ",
      strong: "on the train",
      after: " = phương tiện cụ thể: They came in a taxi.",
    },
    {
      before: "usually ",
      strong: "on foot",
      after: " (không: by foot).",
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
      after: ": The door must have been opened with a key.",
    },
    {
      before: "by = ",
      strong: "tác nhân",
      after: ": The door was opened by somebody.",
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
      vietnamese: "by chance = tình cờ — đối lập on purpose (cố ý).",
    },
    {
      english: "I didn't do it on purpose. It was an accident.",
      vietnamese: "on purpose = cố ý; by accident = vô tình — KHÔNG dùng by purpose.",
    },
    {
      english: "Jess usually goes to work by bus. They came in a taxi.",
      vietnamese: "by bus = phương tiện nói chung; in a taxi = phương tiện cụ thể.",
    },
    {
      english: "Can I pay by credit card?",
      vietnamese: "by credit card = trả bằng thẻ (phương thức).",
    },
    {
      english: "Have you ever been bitten by a dog?",
      vietnamese: "by a dog = bị chó (tác nhân) cắn — câu bị động.",
    },
    {
      english: "The door must have been opened with a key.",
      vietnamese: "with a key = bằng chìa khóa (dụng cụ) — KHÔNG dùng by a key.",
    },
    {
      english: "Clare's salary has increased by ten per cent. Carl won by five metres.",
      vietnamese: "by + %/khoảng cách = mức tăng hoặc chênh lệch.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 515,
  },
};
