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
    "I'm going to (do). So sánh với I am doing (Unit 19A) và I will (Unit 23). was/were going to cho kế hoạch đã bỏ.",
  intro:
    "I'm going to (do). So sánh với I am doing (Unit 19A) và I will (Unit 23). was/were going to cho kế hoạch đã bỏ.",
  structure: {
    affirmative: "S + am/is/are + going to + V | S + was/were + going to + V (quá khứ, không thực hiện)",
    negative: "S + am/is/are + not + going to + V | S + was/were + not + going to + V",
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
      vietnamese: "'Bạn có ăn gì không?' 'Không, tôi không đói.'",
    },
    {
      english: "She's going to buy a new car.",
      vietnamese: "Cô ấy sẽ mua một chiếc xe mới. (đã quyết định)",
    },
    {
      english: "This cheese smells horrible. I'm not going to eat it.",
      vietnamese: "Miếng phô mai này có mùi kinh khủng. Tôi sẽ không ăn nó.",
    },
    {
      english: "The man isn't looking where he is going. He is going to walk into the wall.",
      vietnamese: "Người đó không nhìn đường đi. Anh ta sắp đâm vào tường. (dự đoán từ tình huống hiện tại)",
    },
    {
      english: "We were going to travel by train, but then we decided to drive instead.",
      vietnamese: "Chúng tôi định đi tàu, nhưng sau đó quyết định lái xe.",
    },
    {
      english: "I thought it was going to rain, but it didn't.",
      vietnamese: "Tôi nghĩ là sẽ mưa, nhưng cuối cùng không mưa.",
    },
    {
      english: "I feel terrible. I think I'm going to be sick.",
      vietnamese: "Tôi thấy khó chịu quá. Tôi nghĩ tôi sắp bị ốm/nôn.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 540,
  },
};
