import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 70 — Countable and Uncountable 2.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 69 (Countable and Uncountable 1).
 */
export const U70_COUNTABLE_AND_UNCOUNTABLE_2_TOPIC: GrammarTopicDetail = {
  slug: "u70-countable-and-uncountable-2",
  title: "Countable and Uncountable 2",
  levelLabel: "Intermediate",
  kindLabel: "Nouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 70",
  sourceNote:
    "Cùng từ vừa đếm được vừa không đếm được (nghĩa khác); nhóm thường không đếm được (advice, news…). Nên học kèm Unit 69.",
  intro:
    "Cùng từ vừa đếm được vừa không đếm được (nghĩa khác); nhóm thường không đếm được (advice, news…). Nên học kèm Unit 69.",
  structure: {
    affirmative:
      "countable sense: a noise / a paper / a hair… | uncountable sense: (some) noise / paper / hair… | some + advice/bread/furniture…",
    negative:
      "no a/an with advice, weather, work… | no furnitures / informations | news + singular verb | no a travel",
  },
  usagePoints: [
    {
      before: "Cùng từ, ",
      strong: "nghĩa khác",
      after: ": a noise vs too much noise; a paper (= newspaper) vs paper (giấy); a hair vs hair.",
    },
    {
      before: "job (đếm được) ↔ ",
      strong: "work (không đếm được)",
      after: "; view ↔ scenery; day ↔ weather; suggestion ↔ advice.",
    },
    {
      before: "Thường uncountable: ",
      strong: "advice, furniture, information, news, luck, progress, weather, work…",
      after: " — không a/an, thường không số nhiều.",
    },
    {
      before: "news + ",
      strong: "động từ số ít",
      after: ": The news was unexpected. (không: were)",
    },
    {
      before: "travel (n) = ",
      strong: "đi lại nói chung",
      after: "; trip/journey = một chuyến: We had a good trip. (không: a good travel)",
    },
    {
      before: "Đồ uống: coffee thường uncountable; ",
      strong: "a coffee",
      after: " = một tách: Two coffees and an orange juice, please.",
    },
  ],
  examples: [
    {
      english: "Did you hear a noise just now? There's too much noise.",
      vietnamese: "a noise = tiếng cụ thể; too much noise = ồn nói chung.",
    },
    {
      english: "I'm looking for a job. / I'm looking for work.",
      vietnamese: "job đếm được; work không đếm được (không: a work).",
    },
    {
      english: "Enjoy your holiday! I hope you have good weather.",
      vietnamese: "Không: a good weather.",
    },
    {
      english: "Where are you going to put all your furniture?",
      vietnamese: "furniture không số nhiều (không: furnitures).",
    },
    {
      english: "The news was unexpected.",
      vietnamese: "news + was (số ít).",
    },
    {
      english: "We had a very good trip. They spend a lot of money on travel.",
      vietnamese: "trip/journey đếm được; travel (n) không đếm được.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
