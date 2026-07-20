import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 97 — -ing and -ed Clauses.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 92 (relative); Unit 98 (-ing/-ed adjectives).
 */
export const U97_ING_AND_ED_CLAUSES_TOPIC: GrammarTopicDetail = {
  slug: "u97-ing-and-ed-clauses",
  title: "-ing and -ed Clauses",
  levelLabel: "Intermediate",
  kindLabel: "Clause",
  sourceBook: "English Grammar in Use · Intermediate · Unit 97",
  sourceNote:
    "Mệnh đề rút gọn -ing (đang làm / đặc trưng) và -ed/V3 (bị động); There is/was + -ing/-ed; left = còn lại. Nên học kèm Units 92, 98.",
  intro:
    "Bài này giúp bạn rút gọn mệnh đề sau danh từ bằng -ing (đang làm hoặc đặc trưng) và -ed/V3 (bị động), dùng There is/was + -ing/-ed, và nhận ra left mang nghĩa còn lại. Nên học kèm Unit 92 (relative) và Unit 98 (-ing/-ed adjectives).",
  structure: {
    affirmative:
      "noun + V-ing… | noun + V3/-ed… | There is/was + noun + V-ing/V3 | There are … left",
    negative:
      "KHÔNG dùng -ing khi nghĩa bị động | KHÔNG nhầm mệnh đề -ed với tính từ cảm xúc ở Unit 98",
  },
  usagePoints: [
    {
      before: "Mệnh đề -ing mô tả người/vật ",
      strong: "đang làm hoặc luôn làm gì",
      after: ": Who is the woman talking to Tom?",
    },
    {
      before: "Mệnh đề -ed / V3 mang nghĩa ",
      strong: "bị động",
      after: ": the boy injured in the accident; goods made in this factory.",
    },
    {
      before: "Phân từ bất quy tắc vẫn dùng được: ",
      strong: "stolen / made / built…",
      after: " — không chỉ các từ tận cùng bằng -ed.",
    },
    {
      before: "There is/was + danh từ + ",
      strong: "-ing / -ed",
      after: ": There's nobody living in it. There was nobody injured.",
    },
    {
      before: "left = ",
      strong: "còn lại",
      after: ": There are only a few chocolates left.",
    },
    {
      before: "Gần với ",
      strong: "relative rút gọn",
      after: " (the woman who is talking → talking); tính từ -ing/-ed → Unit 98.",
    },
  ],
  examples: [
    {
      english: "I was woken up by a bell ringing.",
      vietnamese: "-ing: chuông đang reo — việc chủ động đang xảy ra.",
    },
    {
      english: "The boy injured in the accident was taken to hospital.",
      vietnamese: "-ed: cậu bé bị thương — nghĩa bị động.",
    },
    {
      english: "George showed me some pictures painted by his father.",
      vietnamese: "Painted = được vẽ bởi — mệnh đề bị động rút gọn.",
    },
    {
      english: "The police never found the money stolen in the robbery.",
      vietnamese: "Stolen là phân từ bất quy tắc, vẫn dùng như mệnh đề -ed.",
    },
    {
      english: "There were some children swimming in the river.",
      vietnamese: "There + danh từ + -ing = có ai đó đang làm gì.",
    },
    {
      english: "There's nobody living in that house. There are only a few left.",
      vietnamese: "Living = đang sống; left = còn lại.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 488,
  },
};
