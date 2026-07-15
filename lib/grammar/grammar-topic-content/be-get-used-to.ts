import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 61 — Be/Get Used To ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 18 (used to do) — phân biệt rõ với be/get used to …ing; Unit 60C (to + -ing).
 */
export const U61_BE_GET_USED_TO_TOPIC: GrammarTopicDetail = {
  slug: "u61-be-get-used-to",
  title: "Be/Get Used To …",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 61",
  sourceNote:
    "be/get used to something / doing something = đã quen / dần quen. Phân biệt I am used to doing ≠ I used to do (Unit 18). Nên học kèm Unit 18; to + -ing ➜ Unit 60C.",
  intro:
    "Unit này giúp bạn nắm Be/Get Used To …: Be/get used to something / doing something = đã quen / dần quen. Phân biệt I am used to doing ≠ I used to do (Unit 18). Nên học kèm Unit 18 để khỏi nhầm hai cấu trúc.",
  structure: {
    affirmative:
      "S + am/is/are used to + N / V-ing | S + get/got used to + N / V-ing",
    negative:
      "S + am/is/are not used to + N / V-ing | S + can't/couldn't get used to + N / V-ing",
  },
  usagePoints: [
    {
      before: "be used to = ",
      strong: "đã quen, không còn lạ",
      after: ": She's used to driving on the left. He's used to living alone.",
    },
    {
      before: "get used to = ",
      strong: "dần quen",
      after: ": It took a few months to get used to working nights.",
    },
    {
      before: "Sau used to (nghĩa này) dùng ",
      strong: "-ing hoặc danh từ",
      after: " — không nguyên thể: I'm used to living alone (không: to live).",
    },
    {
      before: "to là ",
      strong: "giới từ",
      after: " (như in/for/about): We're not used to the noise / to living here.",
    },
    {
      before: "Phân biệt ",
      strong: "I am used to doing ≠ I used to do",
      after: ": I'm used to the weather here (đã quen) vs I used to drive every day (từng… nay không).",
    },
    {
      before: "used to do chỉ ",
      strong: "quá khứ",
      after: " (Unit 18), không có dạng hiện tại I use to. Nên học kèm Unit 18.",
    },
  ],
  examples: [
    {
      english: "She wasn't used to driving on the left.",
      vietnamese: "Cô ấy chưa quen lái bên trái. (người Mỹ thường lái bên phải)",
    },
    {
      english: "She got used to driving on the left.",
      vietnamese: "Cô ấy đã dần quen lái bên trái.",
    },
    {
      english: "He's used to living alone.",
      vietnamese: "Anh ấy đã quen sống một mình. (không: used to live alone ở nghĩa này)",
    },
    {
      english: "I expect we'll get used to the noise.",
      vietnamese: "Tôi nghĩ chúng tôi sẽ dần quen với tiếng ồn.",
    },
    {
      english: "She isn't used to getting up so early.",
      vietnamese: "Cô ấy chưa quen dậy sớm thế.",
    },
    {
      english: "I used to drive to work every day, but these days I usually go by bike.",
      vietnamese: "Trước đây tôi thường lái xe đi làm; giờ thường đi xe đạp. (Unit 18)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 468,
  },
};
