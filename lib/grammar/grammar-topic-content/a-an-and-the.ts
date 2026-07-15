import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 72 — A/an and the.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 71 và 73–76 (cụm mạo từ a/an/the).
 */
export const U72_A_AN_AND_THE_TOPIC: GrammarTopicDetail = {
  slug: "u72-a-an-and-the",
  title: "A/an and the",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 72",
  sourceNote:
    "Lần đầu a/an, lần sau the; the khi đã rõ đồ vật; the bank/doctor; once a week. Nên học kèm Units 71, 73–76.",
  intro:
    "Lần đầu a/an, lần sau the; the khi đã rõ đồ vật; the bank/doctor; once a week. Nên học kèm Unit 71 và Units 73–76.",
  structure: {
    affirmative:
      "a/an (first mention / type) → the (known / specific) | the + light/door/station/bank/doctor | once a + time unit",
    negative:
      "no the for first vague mention | no a/an when thing is already identified",
  },
  usagePoints: [
    {
      before: "Lần đầu: ",
      strong: "a/an",
      after: "; đã biết là cái nào: the.",
    },
    {
      before: "the = ",
      strong: "vật cụ thể / đã xác định",
      after: ": the chair nearest the door; I cleaned the car yesterday.",
    },
    {
      before: "a/an = ",
      strong: "loại / một trong nhiều",
      after: ": a very cheap hotel; Do you have a car?",
    },
    {
      before: "Ngữ cảnh rõ trong phòng/thị trấn: ",
      strong: "the light / the station / the manager",
      after: ".",
    },
    {
      before: "go to ",
      strong: "the bank / the doctor / the dentist",
      after: "; so: Is there a bank…? / My sister is a dentist.",
    },
    {
      before: "Tần suất: ",
      strong: "once a week / eight hours a day",
      after: " / £1.50 a kilo.",
    },
  ],
  examples: [
    {
      english: "I had a sandwich and an apple for lunch. The sandwich wasn't very good.",
      vietnamese: "Lần đầu a/an; lần sau the.",
    },
    {
      english: "A man and a woman were sitting opposite me. The man was American.",
      vietnamese: "Giới thiệu a → nhắc lại the.",
    },
    {
      english: "Can you turn off the light, please?",
      vietnamese: "Đèn trong phòng này → the light.",
    },
    {
      english: "I have to go to the bank. Is there a bank near here?",
      vietnamese: "the bank = ngân hàng (cụ thể/ quen); a bank = có ngân hàng nào không.",
    },
    {
      english: "I don't like going to the dentist. My sister is a dentist.",
      vietnamese: "the dentist = đi khám; a dentist = nghề.",
    },
    {
      english: "I go to the cinema about once a month.",
      vietnamese: "once a month = mỗi tháng một lần.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
