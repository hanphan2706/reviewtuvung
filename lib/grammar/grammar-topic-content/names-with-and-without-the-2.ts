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
    "Đường phố/công viên; sân bay/đại học kiểu Place+Noun; khách sạn/bảo tàng; of…; 's; báo/hãng. Nên học kèm Unit 77.",
  intro:
    "Đường phố/công viên; sân bay/đại học kiểu Place+Noun; khách sạn/bảo tàng; of…; 's; báo/hãng. Nên học kèm Unit 77.",
  structure: {
    affirmative:
      "Ø + Street/Park/Airport/University (Place+Noun) / 's names | the + Hotel/Museum/of… / newspapers & many orgs",
    negative:
      "no the Union Street / Buckingham Palace / McDonald's / Sony | the Royal Palace / the University of…",
  },
  usagePoints: [
    {
      before: "Đường / công viên: ",
      strong: "không the",
      after: ": Fifth Avenue, Hyde Park, Times Square.",
    },
    {
      before: "Place/Person + Airport/University/Station/Palace: ",
      strong: "thường không the",
      after: ": Gatwick Airport, Cambridge University, Buckingham Palace.",
    },
    {
      before: "Hotels, museums, many landmarks: ",
      strong: "the",
      after: ": the White House, the Eiffel Tower, the Acropolis.",
    },
    {
      before: "… of … → ",
      strong: "the",
      after: ": the Great Wall of China; the University of Cambridge vs Cambridge University.",
    },
    {
      before: "Tên 's / St …: ",
      strong: "không the",
      after: ": Harrison's, St Paul's Cathedral.",
    },
    {
      before: "Báo / nhiều tổ chức: ",
      strong: "the",
      after: "; công ty / hãng bay: không the (Sony, Cathay Pacific).",
    },
  ],
  examples: [
    {
      english: "Buckingham Palace is in London. The White House is in Washington.",
      vietnamese: "Buckingham Palace không the; the White House có the.",
    },
    {
      english: "I'd like to see the Great Wall of China.",
      vietnamese: "tên với of → the.",
    },
    {
      english: "Jack is a student at Liverpool University.",
      vietnamese: "Place + University → không the.",
    },
    {
      english: "Many tourists visit St Paul's Cathedral.",
      vietnamese: "St + tên → không the.",
    },
    {
      english: "Which newspaper? The Morning News.",
      vietnamese: "tên báo thường có the.",
    },
    {
      english: "He works for Cathay Pacific. This book is published by Cambridge University Press.",
      vietnamese: "hãng / nhà xuất bản kiểu này thường không the.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 440,
  },
};
