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
    "school / the school; university, hospital, prison, church; bed, work, home. Nên học kèm Units 73, 75–76.",
  intro:
    "Trong unit này bạn sẽ nắm: school / the school; university, hospital, prison, church; bed, work, home. Nên học kèm Units 73 và 75–76.",
  structure: {
    affirmative:
      "go to / at / leave school (idea) | the school (building) | in hospital / to prison / to church (role) | to bed / to work / (at) home",
    negative:
      "no the with school/work/home as institutions/routines | the + school/hospital when meaning the building / as visitor",
  },
  usagePoints: [
    {
      before: "school (không the) = ",
      strong: "đi học / ý niệm trường",
      after: ": at school, go to school, leave school.",
    },
    {
      before: "the school = ",
      strong: "tòa nhà / ngôi trường cụ thể",
      after: ": waiting outside the school; the school you attended.",
    },
    {
      before: "hospital / prison / university / church: ",
      strong: "không the = vai trò",
      after: "; the = thăm / tòa nhà cụ thể.",
    },
    {
      before: "go to bed / in bed; go to work / at work — ",
      strong: "không the",
      after: "; nhưng on the bed (đồ đạc).",
    },
    {
      before: "home: ",
      strong: "go home / at home / arrive home",
      after: " (thường không the).",
    },
    {
      before: "Nơi khác (station, cinema…) ",
      strong: "vẫn dùng the",
      after: " (xem Units 72–73).",
    },
  ],
  examples: [
    {
      english: "Every day she goes to school. She's at school now.",
      vietnamese: "Học sinh đi học → school không the.",
    },
    {
      english: "Ellie's mother has gone to the school to see the teacher.",
      vietnamese: "Đến ngôi trường cụ thể → the school.",
    },
    {
      english: "He was taken to hospital. Jane has gone to the hospital to visit him.",
      vietnamese: "bệnh nhân: hospital; khách thăm: the hospital.",
    },
    {
      english: "I'm going to bed now. I sat down on the bed.",
      vietnamese: "in/to bed ≠ the bed (đồ nội thất).",
    },
    {
      english: "Chris didn't go to work yesterday. Let's go home.",
      vietnamese: "work / home không the trong các cụm này.",
    },
    {
      english: "When I leave school, I plan to go to university.",
      vietnamese: "leave school; go to university (sinh viên).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 475,
  },
};
