import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 111 — Still, any more, yet, already.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const U111_STILL_ANY_MORE_YET_ALREADY_TOPIC: GrammarTopicDetail = {
  slug: "u111-still-any-more-yet-already",
  title: "Still, Any More, Yet, Already",
  levelLabel: "Intermediate",
  kindLabel: "Adverb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 111",
  sourceNote:
    "still = vẫn còn; not … any more/any longer và no longer = không còn; already = đã sớm hơn dự kiến; yet trong câu hỏi/phủ định; still … not nhấn mạnh hơn yet. Nên học kèm Unit 110.",
  intro:
    "Bài này giúp bạn phân biệt still, any more/any longer, no longer, already và yet theo nghĩa lẫn vị trí trong câu, đặc biệt sự khác nhau giữa still … not và not … yet. Nên học kèm Unit 110 về vị trí trạng từ.",
  structure: {
    affirmative: "S + still + V | S + already + V / V + already | S + no longer + V",
    negative:
      "not … any more/any longer ở cuối câu | no longer ở giữa câu | still + not nhấn mạnh sự chậm trễ hơn not … yet",
  },
  usagePoints: [
    {
      before: "Dùng ",
      strong: "still",
      after: " = vẫn còn tiếp diễn: Do you still want to go away?",
    },
    {
      before: "Đặt ",
      strong: "not … any more / any longer",
      after: " (cuối câu): Lucy doesn't work here any more.",
    },
    {
      before: "Đặt ",
      strong: "no longer",
      after: " giữa câu: Lucy no longer works here. (KHÔNG dùng no more theo nghĩa này)",
    },
    {
      before: "Dùng ",
      strong: "already",
      after: " = sớm hơn mong đợi: She has already left.",
    },
    {
      before: "Dùng ",
      strong: "yet",
      after: " phủ định/câu hỏi, thường cuối: Isn't he here yet? Have you decided yet?",
    },
    {
      before: "Dùng ",
      strong: "still + not",
      after: " để nhấn mạnh hơn yet: He still hasn't replied. (= lẽ ra phải trả lời rồi)",
    },
  ],
  examples: [
    {
      english: "It's ten o'clock and Joe is still in bed.",
      vietnamese: "Đã mười giờ mà Joe vẫn còn trên giường.",
    },
    {
      english: "Lucy doesn't work here any more.",
      vietnamese: "Lucy không còn làm ở đây nữa.",
    },
    {
      english: "Lucy no longer works here.",
      vietnamese: "No longer đứng giữa câu, trước động từ thường works.",
    },
    {
      english: "She has already left.",
      vietnamese: "Already cho biết cô ấy đi sớm hơn người nói dự đoán.",
    },
    {
      english: "Have you decided what to do yet?",
      vietnamese: "Bạn đã quyết định làm gì chưa?",
    },
    {
      english: "Mike lost his job and is still unemployed. / … hasn't found another job yet.",
      vietnamese: "Mike mất việc và vẫn thất nghiệp / chưa tìm được việc khác.",
    },
    {
      english: "I sent him an invitation weeks ago and he still hasn't replied.",
      vietnamese: "Still hasn't nhấn mạnh rằng đã chờ lâu và lẽ ra anh ấy phải trả lời rồi.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
