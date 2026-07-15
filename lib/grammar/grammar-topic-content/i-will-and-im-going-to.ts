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
    "I will and I'm going to: đối chiếu quyết định tức thời (will) với ý định đã có từ trước (going to), và cách cả hai đều dùng để dự đoán. Nên học kèm Units 20–22 (will vs going to) để đối chiếu trọn vẹn.",
  intro:
    "I will and I'm going to: đối chiếu quyết định tức thời (will) với ý định đã có từ trước (going to), và cách cả hai đều dùng để dự đoán. Nên học kèm Units 20–22 để nắm trọn cách will và going to hoạt động riêng lẻ trước khi so sánh.",
  structure: {
    affirmative: "S + will/'ll + V (quyết định mới, ngay lúc nói) | S + am/is/are + going to + V (đã quyết định từ trước)",
    negative: "S + will not/won't + V | S + am/is/are + not + going to + V",
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
      vietnamese: "'Gary đã cố liên lạc với bạn đấy.' 'Vậy sao? OK, tôi sẽ gọi cho anh ấy.' (quyết định mới)",
    },
    {
      english: "'Anna is in hospital.' 'Yes, I know. I'm going to visit her this evening.'",
      vietnamese: "'Anna đang nằm viện.' 'Vâng, tôi biết. Tôi sẽ đến thăm cô ấy tối nay.' (đã định trước)",
    },
    {
      english: "Let's have a party. — That's a great idea. We'll invite lots of people.",
      vietnamese: "Hãy tổ chức tiệc đi. — Ý tưởng tuyệt đấy. Chúng ta sẽ mời nhiều người. (quyết định vừa chốt)",
    },
    {
      english: "Sarah and I have decided to have a party. We're going to invite lots of people.",
      vietnamese: "Sarah và tôi đã quyết định tổ chức tiệc. Chúng tôi sẽ mời nhiều người. (đã định từ trước)",
    },
    {
      english: "Those shoes are well-made. They'll last a long time.",
      vietnamese: "Đôi giày đó làm tốt lắm. Chúng sẽ bền lâu. (dự đoán, niềm tin cá nhân)",
    },
    {
      english: "Look at those black clouds. It's going to rain.",
      vietnamese: "Nhìn những đám mây đen kia. Trời sắp mưa rồi. (dự đoán từ dấu hiệu rõ ràng)",
    },
    {
      english: "We're going to be late. The meeting starts in five minutes.",
      vietnamese: "Chúng ta sẽ muộn mất. Cuộc họp bắt đầu trong năm phút nữa.",
    },
  ],
  practice: {
    questionCount: 17,
    studentCount: 400,
  },
};
