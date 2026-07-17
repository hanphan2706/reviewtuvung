import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 73 — The 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–F.
 * Nên học kèm Units 72, 74–76 (chuỗi the).
 */
export const U73_THE_1_TOPIC: GrammarTopicDetail = {
  slug: "u73-the-1",
  title: "The 1",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 73",
  sourceNote:
    "Dùng the khi chỉ có một; the + so sánh nhất; the same; mặt trời/mặt trăng; cinema/radio/internet; bữa ăn; platform 5. Nên học kèm Unit 72 và Units 74–76.",
  intro:
    "Bài này giúp bạn biết khi nào phải dùng the vì chỉ có một, với so sánh nhất, the same, các thiên thể, phương tiện giải trí, bữa ăn và số hiệu. Nên học kèm Unit 72 và Units 74–76.",
  structure: {
    affirmative:
      "the + chỉ có một / so sánh nhất / the same | the sun/moon/sky/sea… | the cinema / the radio / the internet",
    negative:
      "Breakfast/lunch/dinner thường không có the | Platform 5 / page 15 / vitamin C không có the | space (vũ trụ) không có the",
  },
  usagePoints: [
    {
      before: "Khi chỉ có một thì dùng ",
      strong: "the",
      after: ": the equator, the tenth floor, the capital of…",
    },
    {
      before: "So sánh nhất luôn đi với ",
      strong: "the + -est / most",
      after: ": What's the longest river in Europe?",
    },
    {
      before: "Luôn nói ",
      strong: "the same",
      after: " (không nói: same colour).",
    },
    {
      before: "Dùng the sun / the moon / the sky / the sea; còn ",
      strong: "space",
      after: " (vũ trụ) không có the; Earth (hành tinh) thường cũng không có the.",
    },
    {
      before: "Đi xem phim hay nghe đài thì dùng the cinema / the theatre; ",
      strong: "TV",
      after: " không có the; the radio; the internet; the television = chiếc TV.",
    },
    {
      before: "Nói breakfast/lunch/dinner thì ",
      strong: "KHÔNG",
      after: " dùng the; nhưng có thể nói a big breakfast / a nice lunch. platform 5, page 15 cũng không có the.",
    },
  ],
  examples: [
    {
      english: "Our apartment is on the tenth floor. Buenos Aires is the capital of Argentina.",
      vietnamese: "Chỉ có một tầng 10 hoặc một thủ đô nên phải có the.",
    },
    {
      english: "Your sweater is the same colour as mine.",
      vietnamese: "Luôn nói the same, không bỏ the.",
    },
    {
      english: "I love to look at the stars in the sky. There are millions of stars in space.",
      vietnamese: "the sky có the; space (vũ trụ) thì không.",
    },
    {
      english: "I go to the cinema a lot, but I don't listen to the radio much.",
      vietnamese: "the cinema và the radio có the; so sánh với watch TV không có the.",
    },
    {
      english: "What did you have for breakfast? We had a very nice lunch.",
      vietnamese: "Bữa ăn thường không có the; có tính từ thì thêm a … lunch.",
    },
    {
      english: "Our train leaves from platform 5.",
      vietnamese: "platform kèm số thì không có the.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 485,
  },
};
