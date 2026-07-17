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
    "Lần đầu nhắc đến dùng a/an, lần sau dùng the; the bank/doctor; once a week. Nên học kèm Unit 71 và Units 73–76.",
  intro:
    "Bài này giúp bạn chọn a/an hay the khi nhắc đến vật lần đầu hay lần sau, và biết các trường hợp đặc biệt như the bank, the doctor hay once a week. Nên học kèm Unit 71 và Units 73–76.",
  structure: {
    affirmative:
      "a/an (lần đầu / nói về một loại) → the (đã biết / cụ thể) | the + light/door/station/bank/doctor | once a + đơn vị thời gian",
    negative:
      "Lần đầu nhắc mơ hồ thì không dùng the | Vật đã xác định rồi thì không dùng a/an",
  },
  usagePoints: [
    {
      before: "Lần đầu nhắc đến dùng ",
      strong: "a/an",
      after: "; khi người nghe đã biết là cái nào thì dùng the.",
    },
    {
      before: "Dùng the khi nói về ",
      strong: "vật cụ thể hoặc đã xác định",
      after: ": the chair nearest the door; I cleaned the car yesterday.",
    },
    {
      before: "Dùng a/an khi nói về ",
      strong: "một loại hoặc một trong nhiều",
      after: ": a very cheap hotel; Do you have a car?",
    },
    {
      before: "Trong ngữ cảnh đã rõ trong phòng hoặc thị trấn thì dùng ",
      strong: "the light / the station / the manager",
      after: ".",
    },
    {
      before: "Đi đến nơi dịch vụ thì nói go to ",
      strong: "the bank / the doctor / the dentist",
      after: "; còn hỏi có nơi đó không hoặc nói nghề thì dùng a: Is there a bank…? / My sister is a dentist.",
    },
    {
      before: "Nói tần suất hoặc giá thì dùng ",
      strong: "once a week / eight hours a day",
      after: " / £1.50 a kilo.",
    },
  ],
  examples: [
    {
      english: "I had a sandwich and an apple for lunch. The sandwich wasn't very good.",
      vietnamese: "Lần đầu nhắc đến dùng a/an; lần sau dùng the.",
    },
    {
      english: "A man and a woman were sitting opposite me. The man was American.",
      vietnamese: "Giới thiệu bằng a rồi nhắc lại bằng the.",
    },
    {
      english: "Can you turn off the light, please?",
      vietnamese: "Đèn trong phòng này nên dùng the light.",
    },
    {
      english: "I have to go to the bank. Is there a bank near here?",
      vietnamese: "the bank là đi đến ngân hàng; a bank là hỏi có ngân hàng nào không.",
    },
    {
      english: "I don't like going to the dentist. My sister is a dentist.",
      vietnamese: "the dentist là đi khám; a dentist là nói về nghề.",
    },
    {
      english: "I go to the cinema about once a month.",
      vietnamese: "once a month nghĩa là mỗi tháng một lần.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
