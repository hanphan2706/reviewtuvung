import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 23 — I will and I'm going to.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Units 20–22 (will vs going to) để đối chiếu trọn vẹn hai cách nói về tương lai.
 */
export const U23_I_WILL_AND_IM_GOING_TO_TOPIC: GrammarTopicDetail = {
  slug: "u23-i-will-and-im-going-to",
  title: "I Will and I'm Going to",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 23",
  sourceNote:
    "will = quyết định mới ngay lúc nói; going to = đã quyết định từ trước; cả hai đều dùng để dự đoán tương lai. Nên học kèm Units 20–22 (will và going to riêng lẻ).",
  intro:
    "Bài này giúp bạn phân biệt will (quyết định mới, đưa ra ngay lúc nói) với I'm going to (đã quyết định từ trước khi nói câu đó), và biết cả hai đều dùng để dự đoán tương lai. Nên học kèm Units 20–22 để nắm trọn will và going to hoạt động riêng lẻ trước khi so sánh.",
  structure: {
    affirmative: "S + will/'ll + V (quyết định mới, ngay lúc nói) | S + am/is/are + going to + V (đã quyết định từ trước)",
    negative:
      "KHÔNG dùng going to cho quyết định vừa nảy ra ngay lúc nói → OK, I'll call him. (không: I'm going to call him, nếu ý định chưa có từ trước) | S + will not/won't + V | S + am/is/are + not + going to + V",
  },
  usagePoints: [
    {
      before: "will = ",
      strong: "quyết định mới, đưa ra ngay lúc nói",
      after: " — 'Gary has been trying to contact you.' 'OK, I'll call him.' (ý tưởng gọi điện vừa nảy ra).",
    },
    {
      before: "going to = ",
      strong: "đã quyết định từ trước",
      after: " khi nói câu đó — 'Yes, I know. I'm going to call him.' (đã có ý định gọi từ trước khi nghe câu nói kia).",
    },
    {
      before: "Cả hai đều dùng để ",
      strong: "dự đoán",
      after: " tương lai: I think the weather will be nice later. = I think the weather is going to be nice later.",
    },
    {
      before: "Dùng going to khi ",
      strong: "tình huống hiện tại đã cho thấy rõ",
      after: " điều sắp xảy ra: Look at those black clouds. It's going to rain. (không nói it will rain)",
    },
    {
      before: "Dùng will khi dự đoán dựa trên ",
      strong: "suy nghĩ/niềm tin cá nhân",
      after: ", không cần dấu hiệu rõ ràng ngay lúc đó: Jane will be late for the meeting. She's always late.",
    },
  ],
  examples: [
    {
      english: "'Gary has been trying to contact you.' 'Has he? OK, I'll call him.'",
      vietnamese: "'ll call = quyết định vừa nảy ra ngay lúc nghe tin.",
    },
    {
      english: "'Anna is in hospital.' 'Yes, I know. I'm going to visit her this evening.'",
      vietnamese: "Going to visit = ý định đã có từ trước khi nghe câu nói kia.",
    },
    {
      english: "Let's have a party. — That's a great idea. We'll invite lots of people.",
      vietnamese: "'ll invite = quyết định vừa chốt ngay lúc nói.",
    },
    {
      english: "Sarah and I have decided to have a party. We're going to invite lots of people.",
      vietnamese: "Going to invite = kế hoạch đã quyết định từ trước, không phải ý mới.",
    },
    {
      english: "Those shoes are well-made. They'll last a long time.",
      vietnamese: "'ll last = dự đoán dựa trên suy nghĩ, niềm tin cá nhân.",
    },
    {
      english: "Look at those black clouds. It's going to rain.",
      vietnamese: "Going to rain = dự đoán từ dấu hiệu rõ ràng ngay trước mắt.",
    },
    {
      english: "We're going to be late. The meeting starts in five minutes.",
      vietnamese: "Going to be late = dự đoán dựa trên tình huống hiện tại (giờ họp).",
    },
  ],
  practice: {
    questionCount: 17,
    studentCount: 400,
  },
};
