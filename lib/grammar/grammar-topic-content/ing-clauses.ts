import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 68 — -ing Clauses.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm relative clauses (Units 92+) khi học mệnh đề rút gọn sau này; while/when -ing cũng Unit 60B.
 */
export const U68_ING_CLAUSES_TOPIC: GrammarTopicDetail = {
  slug: "u68-ing-clauses",
  title: "-ing Clauses",
  levelLabel: "Intermediate",
  kindLabel: "Clause",
  sourceBook: "English Grammar in Use · Intermediate · Unit 68",
  sourceNote:
    "-ing khi hai việc cùng lúc / một việc trong lúc việc khác; having done / after -ing; -ing giải thích lý do. Nên học kèm Unit 60 và Units 92+.",
  intro:
    "Bài này giúp bạn dùng mệnh đề -ing khi hai việc cùng lúc, khi một việc diễn ra trong lúc việc khác, khi kể việc đã xong bằng having done, và khi giải thích lý do bằng Feeling tired… Nên học kèm Unit 60 (preposition + -ing) và Units 92–97 (relative / -ing clauses).",
  structure: {
    affirmative:
      "S + V … + V-ing | Having + V3, S + V | Feeling/Being/Not having …, S + V",
    negative:
      "Not + V-ing / Not having + V3, S + V | Not knowing …, S + V",
  },
  usagePoints: [
    {
      before: "-ing khi ",
      strong: "hai việc cùng lúc",
      after: ": Kate is in the kitchen making coffee. Don't just stand there doing nothing!",
    },
    {
      before: "-ing khi một việc ",
      strong: "diễn ra trong lúc việc khác",
      after: ": Joe hurt his knee playing football. Did you cut yourself shaving?",
    },
    {
      before: "Cũng dùng ",
      strong: "while / when + -ing",
      after: ": Joe hurt his knee while playing football.",
    },
    {
      before: "Việc trước → ",
      strong: "Having done / After -ing",
      after: ": Having finished her work, she went home. (thường văn viết; có dấu phẩy)",
    },
    {
      before: "Đầu câu -ing = ",
      strong: "giải thích lý do",
      after: ": Feeling tired, I went to bed early. Being unemployed, he doesn't have much money.",
    },
    {
      before: "Phủ định đầu câu: ",
      strong: "Not having / Not knowing …",
      after: ": Not having a car, she finds it difficult to get around.",
    },
  ],
  examples: [
    {
      english: "Kate is in the kitchen making coffee.",
      vietnamese: "-ing mô tả việc thứ hai đang xảy ra cùng lúc.",
    },
    {
      english: "Joe hurt his knee playing football.",
      vietnamese: "-ing = trong lúc đang chơi bóng.",
    },
    {
      english: "Having finished her work, she went home.",
      vietnamese: "Having done = sau khi đã làm xong việc trước.",
    },
    {
      english: "Feeling tired, I went to bed early.",
      vietnamese: "-ing đầu câu giải thích lý do.",
    },
    {
      english: "Not having a car, she finds it difficult to get around.",
      vietnamese: "Not having … = vì không có…",
    },
    {
      english: "Having seen the film twice, I didn't want to see it again.",
      vietnamese: "Having seen = vì đã xem rồi.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 415,
  },
};
