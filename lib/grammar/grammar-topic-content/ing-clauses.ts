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
    "-ing khi hai việc cùng lúc / một việc trong lúc việc khác; having done / after -ing; -ing giải thích lý do (Feeling tired,…). Nên học kèm relative clauses về sau.",
  intro:
    "-ing khi hai việc cùng lúc / một việc trong lúc việc khác; having done / after -ing; -ing giải thích lý do (Feeling tired,…). Nên học kèm relative clauses (mệnh đề quan hệ) ở các unit sau.",
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
      before: "",
      strong: "Not having / Not knowing …",
      after: ": Not having a car, she finds it difficult to get around.",
    },
  ],
  examples: [
    {
      english: "Kate is in the kitchen making coffee.",
      vietnamese: "Kate đang ở trong bếp pha cà phê.",
    },
    {
      english: "Joe hurt his knee playing football.",
      vietnamese: "Joe bị đau đầu gối khi đang chơi bóng đá.",
    },
    {
      english: "Having finished her work, she went home.",
      vietnamese: "Sau khi làm xong việc, cô ấy về nhà.",
    },
    {
      english: "Feeling tired, I went to bed early.",
      vietnamese: "Vì mệt, tôi đi ngủ sớm.",
    },
    {
      english: "Not having a car, she finds it difficult to get around.",
      vietnamese: "Vì không có xe, cô ấy thấy khó đi lại.",
    },
    {
      english: "Having seen the film twice, I didn't want to see it again.",
      vietnamese: "Vì đã xem phim hai lần, tôi không muốn xem nữa.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 415,
  },
};
