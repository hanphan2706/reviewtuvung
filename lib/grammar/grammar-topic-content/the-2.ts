import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 74 — The 2.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 73, 75–76 (chuỗi the).
 */
export const U74_THE_2_TOPIC: GrammarTopicDetail = {
  slug: "u74-the-2",
  title: "The 2",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 74",
  sourceNote:
    "school / the school; university, hospital, prison, church; bed, work, home. Nên học kèm Unit 72, Unit 73 và Units 75–76.",
  intro:
    "Bài này giúp bạn phân biệt khi nào school, hospital, bed, work, home không có the (vì nói về hoạt động hoặc vai trò) và khi nào phải thêm the (vì nói về tòa nhà cụ thể). Nên học kèm Unit 72, Unit 73 và Units 75–76.",
  structure: {
    affirmative:
      "go to / at / leave school (hoạt động) | the school (tòa nhà) | in hospital / to prison / to church (vai trò) | to bed / to work / (at) home",
    negative:
      "School/work/home nói về thói quen hoặc vai trò thì không có the | the + school/hospital khi nói về tòa nhà hoặc đi thăm",
  },
  usagePoints: [
    {
      before: "School không có the nghĩa là ",
      strong: "đi học hoặc nói về trường học nói chung",
      after: ": at school, go to school, leave school.",
    },
    {
      before: "The school nghĩa là ",
      strong: "tòa nhà hoặc ngôi trường cụ thể",
      after: ": waiting outside the school; the school you attended.",
    },
    {
      before: "Với hospital / prison / university / church: ",
      strong: "không có the",
      after: " khi nói về vai trò; có the khi đi thăm hoặc nói về tòa nhà cụ thể.",
    },
    {
      before: "Nói go to bed / in bed; go to work / at work thì ",
      strong: "KHÔNG",
      after: " dùng the; nhưng on the bed nghĩa là trên chiếc giường (đồ nội thất).",
    },
    {
      before: "Với home thường nói ",
      strong: "go home / at home / arrive home",
      after: " (không có the).",
    },
    {
      before: "Các nơi khác như station, cinema… ",
      strong: "vẫn dùng the",
      after: " (xem thêm Units 72–73).",
    },
  ],
  examples: [
    {
      english: "Every day she goes to school. She's at school now.",
      vietnamese: "Học sinh đi học nên nói school, không có the.",
    },
    {
      english: "Ellie's mother has gone to the school to see the teacher.",
      vietnamese: "Đến ngôi trường cụ thể nên dùng the school.",
    },
    {
      english: "He was taken to hospital. Jane has gone to the hospital to visit him.",
      vietnamese: "Bệnh nhân vào hospital; người thăm đến the hospital.",
    },
    {
      english: "I'm going to bed now. I sat down on the bed.",
      vietnamese: "in/to bed là đi ngủ; the bed là chiếc giường cụ thể.",
    },
    {
      english: "Chris didn't go to work yesterday. Let's go home.",
      vietnamese: "Work và home trong các cụm này không có the.",
    },
    {
      english: "When I leave school, I plan to go to university.",
      vietnamese: "Leave school và go to university đều không có the.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 475,
  },
};
