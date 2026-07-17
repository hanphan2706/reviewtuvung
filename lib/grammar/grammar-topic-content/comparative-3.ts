import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 107 — Comparative 3 (as … as / than).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 105–106, 108.
 */
export const U107_COMPARATIVE_3_TOPIC: GrammarTopicDetail = {
  slug: "u107-comparative-3",
  title: "Comparative 3",
  levelLabel: "Intermediate",
  kindLabel: "Comparative",
  sourceBook: "English Grammar in Use · Intermediate · Unit 107",
  sourceNote:
    "So sánh bằng as … as; less … than; the same as; twice as … as; than me và than I am. Nên học kèm Units 105–106 và Unit 108.",
  intro:
    "Bài này giúp bạn so sánh bằng nhau với as … as, nói mức thấp hơn bằng less … than, dùng the same as, và chọn than me hay than I am sau dạng so sánh hơn. Nên học kèm Units 105–106 và Unit 108.",
  structure: {
    affirmative:
      "as + tính từ/trạng từ + as | the same as | twice/three times as … as",
    negative:
      "not as/so … as | less (+ tính từ) than | not as much/many … as",
  },
  usagePoints: [
    {
      before: "Để nói hai đối tượng ",
      strong: "bằng nhau",
      after: " về mức độ, dùng as … as: I got here as fast as I could. You can have as much as you want.",
    },
    {
      before: "Để nói ",
      strong: "không bằng",
      after: " dùng not as … as (hoặc not so … as): He isn't as rich as Sarah.",
    },
    {
      before: "Cấu trúc ",
      strong: "less … than",
      after: " gần nghĩa với not as … as: I spent less money than you.",
    },
    {
      before: "Khi nói hai thứ ",
      strong: "bằng nhau",
      after: " dùng the same as, không dùng like: Laura's salary is the same as mine.",
    },
    {
      before: "Sau than hoặc as có thể dùng ",
      strong: "than me / than I am",
      after: " đều được; ít khi chỉ dùng than I.",
    },
    {
      before: "Để nói gấp bội số lần dùng ",
      strong: "twice as … as",
      after: ": Petrol is twice as expensive as it was a few years ago.",
    },
  ],
  examples: [
    {
      english: "Joe is richer than David, but he isn't as rich as Sarah.",
      vietnamese: "Richer so sánh hơn; as rich as so sánh bằng.",
    },
    {
      english: "I'm sorry I'm late. I got here as fast as I could.",
      vietnamese: "As fast as diễn tả mức nhanh tối đa có thể.",
    },
    {
      english: "It's not as cold as yesterday.",
      vietnamese: "Not as … as nói hôm nay không lạnh bằng hôm qua.",
    },
    {
      english: "I spent less money than you.",
      vietnamese: "Less money than gần nghĩa với not as much money as.",
    },
    {
      english: "David is the same age as James.",
      vietnamese: "The same age as nói hai người bằng tuổi nhau.",
    },
    {
      english: "You're taller than me. / You're taller than I am.",
      vietnamese: "Than me và than I am đều đúng sau dạng so sánh hơn.",
    },
    {
      english: "Their house is about three times as big as ours.",
      vietnamese: "Three times as … as nói lớn gấp khoảng ba lần.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 465,
  },
};
