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
    "-ing = đang làm / đặc trưng; -ed/V3 = bị động; there is/was + -ing/-ed; left = còn lại. Nên học kèm Units 92, 98.",
  intro:
    "-ing = đang làm / đặc trưng; -ed/V3 = bị động; there is/was + -ing/-ed; left = còn lại. Nên học kèm Units 92, 98.",
  structure: {
    affirmative:
      "noun + V-ing… | noun + V3/-ed… | There is/was + noun + V-ing/V3 | There are … left",
    negative:
      "-ing ≠ passive meaning | -ed clause ≠ 'feeling' adjective (→ Unit 98)",
  },
  usagePoints: [
    {
      before: "-ing clause = ",
      strong: "đang làm / luôn làm",
      after: ": Who is the woman talking to Tom?",
    },
    {
      before: "-ed / V3 clause = ",
      strong: "bị động",
      after: ": the boy injured in the accident; goods made in this factory.",
    },
    {
      before: "Phân từ bất quy tắc: ",
      strong: "stolen / made / built…",
      after: " — không chỉ kết thúc -ed.",
    },
    {
      before: "There is/was + ",
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
      vietnamese: "-ing: chuông đang reo.",
    },
    {
      english: "The boy injured in the accident was taken to hospital.",
      vietnamese: "-ed: cậu bé bị thương.",
    },
    {
      english: "George showed me some pictures painted by his father.",
      vietnamese: "painted = được vẽ bởi.",
    },
    {
      english: "The police never found the money stolen in the robbery.",
      vietnamese: "stolen (bất quy tắc).",
    },
    {
      english: "There were some children swimming in the river.",
      vietnamese: "There + -ing.",
    },
    {
      english: "There's nobody living in that house. There are only a few left.",
      vietnamese: "living / left.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 488,
  },
};
