import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 75 — The 3.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 73–74, 76 (chuỗi the).
 */
export const U75_THE_3_TOPIC: GrammarTopicDetail = {
  slug: "u75-the-3",
  title: "The 3",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 75",
  sourceNote:
    "Nói chung không the (dogs, life, music…); the = nhóm/đồ cụ thể. Nên học kèm Units 73–74, 76.",
  intro:
    "Nói chung không the (dogs, life, music…); the = nhóm/đồ cụ thể. Nên học kèm Units 73–74 và 76.",
  structure: {
    affirmative:
      "Ø + plural/uncountable (general) | the + specific group/thing | most + noun (no the)",
    negative:
      "no the with dogs/life/music/football in general | no The most people",
  },
  usagePoints: [
    {
      before: "Nói chung → ",
      strong: "không the",
      after: ": dogs, doctors, stamps, life, classical music, football, history.",
    },
    {
      before: "most + danh từ: ",
      strong: "Most shops…",
      after: " (không: The most shops…).",
    },
    {
      before: "Nhóm / đồ cụ thể → ",
      strong: "the",
      after: ": the children, the music (in the film), the sugar (on the table).",
    },
    {
      before: "people nói chung ≠ ",
      strong: "the people I work with",
      after: ".",
    },
    {
      before: "coffee nói chung ≠ ",
      strong: "the coffee we had",
      after: " after dinner.",
    },
    {
      before: "war nói chung ≠ ",
      strong: "The First World War",
      after: " (sự kiện cụ thể).",
    },
  ],
  examples: [
    {
      english: "I'm afraid of dogs. Do you like classical music?",
      vietnamese: "Nói chung → không the.",
    },
    {
      english: "Most shops accept credit cards.",
      vietnamese: "Most (không: The most shops).",
    },
    {
      english: "We took the children to the zoo. I liked the music.",
      vietnamese: "nhóm / nhạc cụ thể → the.",
    },
    {
      english: "I like working with people. I like the people I work with.",
      vietnamese: "nói chung vs nhóm cụ thể.",
    },
    {
      english: "Do you like coffee? The coffee we had after dinner wasn't very good.",
      vietnamese: "cà phê nói chung vs cà phê cụ thể.",
    },
    {
      english: "The First World War began in 1914. A pacifist is against war.",
      vietnamese: "chiến tranh cụ thể / khái niệm war.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
