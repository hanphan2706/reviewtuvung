import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 78 — Names with and without the 2.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 77 (Names with and without the 1).
 */
export const U78_NAMES_WITH_AND_WITHOUT_THE_2_TOPIC: GrammarTopicDetail = {
  slug: "u78-names-with-and-without-the-2",
  title: "Names with and without the 2",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 78",
  sourceNote:
    "Đường phố, công viên; sân bay/đại học kiểu Place+Noun; khách sạn/bảo tàng; of…; 's; báo/hãng. Nên học kèm Unit 76 và Unit 77.",
  intro:
    "Bài này giúp bạn nhớ quy tắc the với tên đường phố, công viên, sân bay, trường đại học, khách sạn, bảo tàng, tên có of… hoặc 's, và tên báo hay công ty. Nên học kèm Unit 76 và Unit 77.",
  structure: {
    affirmative:
      "Ø + Street/Park/Airport/University (Place+Noun) / tên 's | the + Hotel/Museum/of… / tên báo và nhiều tổ chức",
    negative:
      "Không nói the Union Street / Buckingham Palace / McDonald's / Sony | the Royal Palace / the University of…",
  },
  usagePoints: [
    {
      before: "Tên đường phố và công viên thì ",
      strong: "KHÔNG",
      after: " có the: Fifth Avenue, Hyde Park, Times Square.",
    },
    {
      before: "Tên kiểu Place/Person + Airport/University/Station/Palace ",
      strong: "thường không có the",
      after: ": Gatwick Airport, Cambridge University, Buckingham Palace.",
    },
    {
      before: "Khách sạn, bảo tàng và nhiều địa danh nổi tiếng thì có ",
      strong: "the",
      after: ": the White House, the Eiffel Tower, the Acropolis.",
    },
    {
      before: "Tên có … of … thì dùng ",
      strong: "the",
      after: ": the Great Wall of China; the University of Cambridge (khác Cambridge University).",
    },
    {
      before: "Tên có 's hoặc St … thì ",
      strong: "KHÔNG",
      after: " có the: Harrison's, St Paul's Cathedral.",
    },
    {
      before: "Tên báo và nhiều tổ chức thì có ",
      strong: "the",
      after: "; còn tên công ty hoặc hãng bay thì không: Sony, Cathay Pacific.",
    },
  ],
  examples: [
    {
      english: "Buckingham Palace is in London. The White House is in Washington.",
      vietnamese: "Buckingham Palace không có the; the White House thì có.",
    },
    {
      english: "I'd like to see the Great Wall of China.",
      vietnamese: "Tên có of thường phải có the.",
    },
    {
      english: "Jack is a student at Liverpool University.",
      vietnamese: "Place + University thường không có the.",
    },
    {
      english: "Many tourists visit St Paul's Cathedral.",
      vietnamese: "St + tên riêng thường không có the.",
    },
    {
      english: "Which newspaper? The Morning News.",
      vietnamese: "Tên báo thường có the.",
    },
    {
      english: "He works for Cathay Pacific. This book is published by Cambridge University Press.",
      vietnamese: "Tên hãng bay và nhà xuất bản kiểu này thường không có the.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 440,
  },
};
