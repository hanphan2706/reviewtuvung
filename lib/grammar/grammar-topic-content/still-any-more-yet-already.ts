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
    "still / not … any more (any longer) / no longer; yet; already; still … not vs yet. Word order → Unit 110.",
  intro:
    "Trong unit này bạn sẽ nắm: still / not … any more (any longer) / no longer; yet; already; still … not vs yet. Word order → Unit 110.",
  structure: {
    affirmative: "S + still + V | S + already + V / V + already | S + no longer + V",
    negative: "S + don't/doesn't + V + any more/any longer | S + hasn't + V3 + yet | still hasn't + V3",
  },
  usagePoints: [
    {
      before: "",
      strong: "still",
      after: " = vẫn còn tiếp diễn: Do you still want to go away?",
    },
    {
      before: "",
      strong: "not … any more / any longer",
      after: " (cuối câu): Lucy doesn't work here any more.",
    },
    {
      before: "",
      strong: "no longer",
      after: " giữa câu: Lucy no longer works here. (không: no more friends theo nghĩa này)",
    },
    {
      before: "",
      strong: "already",
      after: " = sớm hơn mong đợi: She has already left.",
    },
    {
      before: "",
      strong: "yet",
      after: " phủ định/câu hỏi, thường cuối: Isn't he here yet? Have you decided yet?",
    },
    {
      before: "",
      strong: "still + not",
      after: " mạnh hơn yet: He still hasn't replied. (= lẽ ra phải trả lời rồi)",
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
      vietnamese: "Lucy không còn làm ở đây. (no longer giữa câu)",
    },
    {
      english: "She has already left.",
      vietnamese: "Cô ấy đã đi rồi. (sớm hơn bạn nghĩ)",
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
      vietnamese: "Tôi gửi lời mời cách đây vài tuần mà anh ấy vẫn chưa trả lời.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
