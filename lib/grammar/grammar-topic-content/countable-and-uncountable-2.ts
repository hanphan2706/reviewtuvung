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
    "Cùng một từ có thể đếm được hoặc không tùy nghĩa; nhóm danh từ thường không đếm được. Nên học kèm Units 69 và 71.",
  intro:
    "Bài này giúp bạn nhận ra khi nào cùng một từ vừa đếm được vừa không đếm được tùy nghĩa, và ghi nhớ các danh từ thường không đếm được như advice, news, furniture. Nên học kèm Unit 69 và Unit 71.",
  structure: {
    affirmative:
      "Nghĩa đếm được: a noise / a paper / a hair… | Nghĩa không đếm được: (some) noise / paper / hair… | some + advice/bread/furniture…",
    negative:
      "Advice, weather, work… không dùng a/an | Không có furnitures / informations | news + động từ số ít | Không nói a travel",
  },
  usagePoints: [
    {
      before: "Cùng một từ có thể mang ",
      strong: "nghĩa khác nhau",
      after: ": a noise (= một tiếng động) vs too much noise (= quá ồn); a paper (= một tờ báo) vs paper (= giấy); a hair vs hair.",
    },
    {
      before: "Cặp thường gặp: job (đếm được) ↔ ",
      strong: "work (không đếm được)",
      after: "; view ↔ scenery; day ↔ weather; suggestion ↔ advice.",
    },
    {
      before: "Thường là danh từ không đếm được: ",
      strong: "advice, furniture, information, news, luck, progress, weather, work…",
      after: " — không dùng a/an và thường không có dạng số nhiều.",
    },
    {
      before: "Danh từ news đi với ",
      strong: "động từ số ít",
      after: ": The news was unexpected. (không nói: were)",
    },
    {
      before: "Travel (danh từ) nghĩa là ",
      strong: "việc đi lại nói chung",
      after: "; còn trip/journey là một chuyến cụ thể: We had a good trip. (không nói: a good travel)",
    },
    {
      before: "Coffee thường không đếm được; ",
      strong: "a coffee",
      after: " nghĩa là một tách cà phê: Two coffees and an orange juice, please.",
    },
  ],
  examples: [
    {
      english: "Did you hear a noise just now? There's too much noise.",
      vietnamese: "a noise là một tiếng cụ thể; too much noise là ồn nói chung.",
    },
    {
      english: "I'm looking for a job. / I'm looking for work.",
      vietnamese: "job đếm được; work không đếm được nên không nói a work.",
    },
    {
      english: "Enjoy your holiday! I hope you have good weather.",
      vietnamese: "Weather không đếm được nên không nói a good weather.",
    },
    {
      english: "Where are you going to put all your furniture?",
      vietnamese: "Furniture không có dạng số nhiều nên không nói furnitures.",
    },
    {
      english: "The news was unexpected.",
      vietnamese: "News đi với was vì được coi là số ít.",
    },
    {
      english: "We had a very good trip. They spend a lot of money on travel.",
      vietnamese: "Trip/journey đếm được; travel (danh từ) không đếm được.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 470,
  },
};
