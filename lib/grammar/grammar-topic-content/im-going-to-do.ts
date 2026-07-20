import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 20 — I'm going to (do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const U20_IM_GOING_TO_DO_TOPIC: GrammarTopicDetail = {
  slug: "u20-im-going-to-do",
  title: "I'm Going to (Do)",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 20",
  sourceNote:
    "am/is/are + going to + V cho ý định đã quyết định hoặc dự đoán rõ ràng từ tình huống hiện tại; was/were + going to = đã định làm nhưng rồi không làm. Nên học kèm Unit 19 (am doing) và Unit 23 (I will and I'm going to).",
  intro:
    "Bài này giúp bạn dùng am/is/are + going to + V khi đã quyết định hoặc có ý định làm gì, dùng going to để dự đoán dựa trên tình huống hiện tại, và dùng was/were + going to cho ý định đã bỏ hoặc thay đổi. So sánh với I am doing (Unit 19) và I will (Unit 23).",
  structure: {
    affirmative: "S + am/is/are + going to + V | S + was/were + going to + V (quá khứ, không thực hiện)",
    negative:
      "KHÔNG nhầm am/is/are + not + going to (chưa có ý định) với was/were + not + going to (đã định nhưng rồi không làm) → We were going to travel by train, but then we decided to drive. | S + am/is/are + not + going to + V | S + was/were + not + going to + V",
  },
  usagePoints: [
    {
      before: "Dùng khi đã ",
      strong: "quyết định, có ý định làm",
      after: " một việc — có thể đã sắp xếp với người khác hoặc chưa (I'm going to clean my shoes).",
    },
    {
      before: "So sánh với ",
      strong: "I am doing",
      after: " (Unit 19): am doing = đã sắp xếp/hẹn trước cụ thể; am going to do = đã quyết định, nhưng chưa chắc đã sắp xếp.",
    },
    {
      before: "Dùng để ",
      strong: "dự đoán",
      after: " một việc sắp xảy ra vì tình huống hiện tại đã rõ ràng cho thấy điều đó: Look at those clouds! It's going to rain.",
    },
    {
      before: "was/were going to = ",
      strong: "đã có ý định làm nhưng rồi không làm",
      after: " (kế hoạch bị bỏ hoặc thay đổi): We were going to travel by train, but then we decided to drive.",
    },
    {
      before: "Thường ",
      strong: "sự khác biệt giữa going to và will",
      after: " rất nhỏ và cả hai đều có thể dùng được, đặc biệt khi dự đoán tương lai (xem thêm Unit 23).",
    },
  ],
  examples: [
    {
      english: "'Are you going to eat anything?' 'No, I'm not hungry.'",
      vietnamese: "Going to eat = hỏi về ý định, chưa chắc đã sắp xếp cụ thể.",
    },
    {
      english: "She's going to buy a new car.",
      vietnamese: "Going to buy = đã quyết định, dù chưa chắc đã hẹn mua ở đâu.",
    },
    {
      english: "This cheese smells horrible. I'm not going to eat it.",
      vietnamese: "'m not going to eat = phủ định ý định, quyết định ngay từ tình huống trước mắt.",
    },
    {
      english: "The man isn't looking where he is going. He is going to walk into the wall.",
      vietnamese: "Is going to walk into = dự đoán từ tình huống hiện tại đã rõ ràng.",
    },
    {
      english: "We were going to travel by train, but then we decided to drive instead.",
      vietnamese: "Were going to travel = ý định cũ đã bị đổi — was/were going to cho kế hoạch bỏ.",
    },
    {
      english: "I thought it was going to rain, but it didn't.",
      vietnamese: "Was going to rain = dự đoán quá khứ không đúng, việc không xảy ra.",
    },
    {
      english: "I feel terrible. I think I'm going to be sick.",
      vietnamese: "Going to be sick = dự đoán dựa trên cảm giác hiện tại, sắp xảy ra.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 540,
  },
};
