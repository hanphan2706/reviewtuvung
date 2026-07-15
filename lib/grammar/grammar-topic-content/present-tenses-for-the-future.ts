import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 19 — Present tenses for the future (I am doing / I do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 */
export const U19_PRESENT_TENSES_FOR_THE_FUTURE_TOPIC: GrammarTopicDetail = {
  slug: "u19-present-tenses-for-the-future",
  title: "Present Tenses for the Future",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 19",
  sourceNote:
    "Present tenses (I am doing / I do) for the future. Liên quan trực tiếp tới present continuous/simple đã học ở Units 1–4; xem thêm I'm going to (Units 20, 23), will (Units 21–22) và present simple sau when/if (Unit 25).",
  intro:
    "Present tenses (I am doing / I do) for the future. Liên quan trực tiếp tới present continuous/simple đã học ở Units 1–4. xem thêm I'm going to (Units 20, 23), will (Units 21–22) và present simple sau when/if (Unit 25).",
  structure: {
    affirmative: "S + am/is/are + V-ing (đã sắp xếp) | S + V(s/es) (thời gian biểu cố định)",
    negative: "S + am/is/are + not + V-ing | S + do/does + not + V",
  },
  usagePoints: [
    {
      before: "Dùng present continuous khi việc đó ",
      strong: "đã được quyết định và sắp xếp trước",
      after: " với ai đó hoặc việc gì đó (What are you doing on Saturday? I'm going to the cinema).",
    },
    {
      before: "Không dùng ",
      strong: "will",
      after: " cho việc đã lên kế hoạch từ trước — What are you doing tonight? (không nói What will you do).",
    },
    {
      before: "Present continuous còn dùng cho hành động ",
      strong: "sắp xảy ra ngay",
      after: ", đặc biệt với động từ chuyển động như go/come/leave (I'm tired. I'm going to bed now).",
    },
    {
      before: "Present simple dùng cho ",
      strong: "thời gian biểu, lịch trình cố định",
      after: " (giờ tàu, giờ chiếu phim): My train leaves at 11.30. The film starts at 8.15.",
    },
    {
      before: "Present simple cũng dùng cho kế hoạch cá nhân ",
      strong: "cố định như thời gian biểu",
      after: " (I start my new job on Monday), nhưng continuous phổ biến hơn cho các sắp xếp cá nhân khác.",
    },
    {
      before: "Với appointment/lesson/exam, có thể dùng ",
      strong: "I have / I've got",
      after: " thay cho continuous: I have an exam next week. = I've got an exam next week.",
    },
  ],
  examples: [
    {
      english: "What are you doing on Saturday evening? I'm going to the cinema.",
      vietnamese: "Bạn làm gì vào tối thứ Bảy? Tôi sẽ đi xem phim. (đã lên kế hoạch)",
    },
    {
      english: "We're meeting her at the station.",
      vietnamese: "Chúng tôi sẽ gặp cô ấy ở nhà ga. (đã sắp xếp trước)",
    },
    {
      english: "I'm not working tomorrow, so we can go out somewhere.",
      vietnamese: "Ngày mai tôi không đi làm, nên chúng ta có thể đi đâu đó.",
    },
    {
      english: "Steve isn't playing football next Saturday. He's hurt his leg.",
      vietnamese: "Steve sẽ không đá bóng vào thứ Bảy tới. Anh ấy bị đau chân.",
    },
    {
      english: "'Tina, are you ready yet?' 'Yes, I'm coming.'",
      vietnamese: "'Tina, sẵn sàng chưa?' 'Rồi, tôi ra ngay.' (sắp xảy ra ngay lúc nói)",
    },
    {
      english: "What time does the film start tonight?",
      vietnamese: "Mấy giờ phim bắt đầu chiếu tối nay? (thời gian biểu cố định)",
    },
    {
      english: "I start my new job on Monday.",
      vietnamese: "Tôi bắt đầu công việc mới vào thứ Hai.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 620,
  },
};
