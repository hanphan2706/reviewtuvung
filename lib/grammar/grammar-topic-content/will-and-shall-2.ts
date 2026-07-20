import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 22 — Will and shall 2.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 21 (will and shall 1 — quyết định tức thời) để nắm trọn cách dùng will/shall.
 */
export const U22_WILL_AND_SHALL_2_TOPIC: GrammarTopicDetail = {
  slug: "u22-will-and-shall-2",
  title: "Will and Shall 2",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 22",
  sourceNote:
    "will/shall để dự đoán, nói niềm tin về tương lai (probably, I'm sure, I think); shall chỉ dùng với I/we. Nên học kèm Unit 21 (will/shall cho quyết định tức thời).",
  intro:
    "Bài này giúp bạn dùng will để dự đoán hoặc nói niềm tin về tương lai, thường đi cùng probably/I'm sure/I think, phân biệt will (dự đoán) với going to (đã quyết định), và biết rằng shall chỉ dùng với I/we. Nên học kèm Unit 21 để nắm cả will/shall dùng cho quyết định tức thời.",
  structure: {
    affirmative: "S + will/shall + V (dự đoán, niềm tin về tương lai)",
    negative:
      "KHÔNG dùng will sau hope → I hope Kate passes the driving test. (không: I hope Kate will pass) | S + will not/won't + V | I shall not/shan't + V",
  },
  usagePoints: [
    {
      before: "Dùng will để nói về điều bạn ",
      strong: "biết hoặc tin sẽ xảy ra",
      after: " trong tương lai — dự đoán dựa trên suy nghĩ, không phải điều đã quyết định: Kate will pass the driving test.",
    },
    {
      before: "So sánh: ",
      strong: "going to (đã quyết định)",
      after: " và will (tin sẽ quyết định) — I think James is going to the party (đã quyết định) vs I think James will go to the party (dự đoán anh ấy sẽ quyết định vậy).",
    },
    {
      before: "Thường đi cùng ",
      strong: "probably, I'm sure, I think, I don't think, I wonder",
      after: ": I'll probably be home late. I'm sure you'll pass. I wonder what will happen.",
    },
    {
      before: "Sau ",
      strong: "hope",
      after: ", thường dùng present simple, không dùng will: I hope Kate passes the driving test (không nói will pass).",
    },
    {
      before: "will cũng có thể nói về ",
      strong: "hiện tại",
      after: " khi suy đoán về điều đang xảy ra ngay bây giờ: Don't phone Amy now. She'll be busy. (= chắc giờ cô ấy đang bận)",
    },
    {
      before: "shall chỉ dùng với ",
      strong: "I/we",
      after: " (I shall = I will, phủ định shall not/shan't); không dùng shall với he/she/it/you/they — luôn dùng will.",
    },
  ],
  examples: [
    {
      english: "Do you think Kate will pass the driving test? Yes, she'll pass easily.",
      vietnamese: "Will pass = dự đoán dựa trên suy nghĩ, không phải quyết định.",
    },
    {
      english: "That plate is hot. If you touch it, you'll burn yourself.",
      vietnamese: "'ll burn = dự đoán hậu quả sẽ xảy ra.",
    },
    {
      english: "I'll probably be home late tonight.",
      vietnamese: "'ll probably = dự đoán kèm mức độ chắc chắn.",
    },
    {
      english: "Don't worry about the exam. I'm sure you'll pass.",
      vietnamese: "I'm sure you'll = niềm tin mạnh về tương lai.",
    },
    {
      english: "I hope it doesn't rain tomorrow.",
      vietnamese: "Hope + present simple = KHÔNG dùng will sau hope.",
    },
    {
      english: "Don't phone Amy now. She'll be busy.",
      vietnamese: "'ll be busy = will suy đoán về hiện tại, không phải tương lai.",
    },
    {
      english: "I shall be late this evening. We'll probably go to France in June.",
      vietnamese: "Shall = will với I/we; không dùng shall với he/she/they.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 430,
  },
};
