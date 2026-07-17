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
    "Nói chung không dùng the; the khi chỉ nhóm hoặc vật cụ thể. Nên học kèm Unit 72, Units 73–74 và Unit 76.",
  intro:
    "Bài này giúp bạn biết khi nào nói chung về dogs, life, music thì không cần the, và khi nào phải thêm the vì đang nói về một nhóm hoặc vật cụ thể. Nên học kèm Unit 72, Units 73–74 và Unit 76.",
  structure: {
    affirmative:
      "Ø + số nhiều/không đếm được (nói chung) | the + nhóm/vật cụ thể | most + danh từ (không có the)",
    negative:
      "Nói chung về dogs/life/music/football thì không có the | Không nói The most people",
  },
  usagePoints: [
    {
      before: "Khi nói chung thì ",
      strong: "KHÔNG",
      after: " dùng the: dogs, doctors, stamps, life, classical music, football, history.",
    },
    {
      before: "Dùng most + danh từ thì ",
      strong: "KHÔNG",
      after: " thêm the: Most shops… (không nói: The most shops…).",
    },
    {
      before: "Khi nói về một ",
      strong: "nhóm hoặc vật cụ thể",
      after: " thì dùng the: the children, the music (in the film), the sugar (on the table).",
    },
    {
      before: "People nói chung khác với ",
      strong: "the people I work with",
      after: " (nhóm cụ thể).",
    },
    {
      before: "Coffee nói chung khác với ",
      strong: "the coffee we had",
      after: " after dinner (cà phê cụ thể).",
    },
    {
      before: "War nói chung khác với ",
      strong: "The First World War",
      after: " (một sự kiện cụ thể).",
    },
  ],
  examples: [
    {
      english: "I'm afraid of dogs. Do you like classical music?",
      vietnamese: "Nói chung về loài hoặc loại nhạc nên không có the.",
    },
    {
      english: "Most shops accept credit cards.",
      vietnamese: "Most đứng trước danh từ, không thêm the.",
    },
    {
      english: "We took the children to the zoo. I liked the music.",
      vietnamese: "Nhóm trẻ hoặc nhạc cụ thể nên có the.",
    },
    {
      english: "I like working with people. I like the people I work with.",
      vietnamese: "Nói chung về people thì không có the; nhóm cụ thể thì có.",
    },
    {
      english: "Do you like coffee? The coffee we had after dinner wasn't very good.",
      vietnamese: "Cà phê nói chung không có the; cà phê cụ thể thì có.",
    },
    {
      english: "The First World War began in 1914. A pacifist is against war.",
      vietnamese: "Chiến tranh cụ thể có the; khái niệm war nói chung thì không.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
