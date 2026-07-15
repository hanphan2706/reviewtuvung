import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

export const MIXED_CONDITIONALS_TOPIC: GrammarTopicDetail = {
  slug: "mixed-conditionals",
  title: "Mixed Conditionals",
  levelLabel: "Advanced",
  kindLabel: "Conditional",
  intro:
    "Trong unit này bạn sẽ nắm: Combine past and present tenses to express real outcomes from hypothetical past situations — a high-frequency topic in IELTS Writing.",
  structure: {
    affirmative: "If + past perfect, S + would + V",
    negative: "If + past perfect, S + wouldn't + V",
  },
  usagePoints: [
    {
      before: "Diễn tả ",
      strong: "hậu quả ở hiện tại",
      after: " từ một giả định không có thật ở quá khứ.",
    },
    {
      before: "Thường dùng khi ",
      strong: "hối tiếc về quyết định",
      after: " hoặc tình huống đã qua không thể thay đổi.",
    },
    {
      before: "Giúp bài viết IELTS ",
      strong: "linh hoạt và tự nhiên",
      after: " hơn so với chỉ dùng conditional loại 2 hoặc 3.",
    },
  ],
  examples: [
    {
      english: "If I had studied harder, I would have a better job now.",
      vietnamese: "Nếu hồi đó tôi học chăm hơn, bây giờ tôi đã có công việc tốt hơn.",
    },
    {
      english: "If she hadn't missed the train, she would be at the meeting now.",
      vietnamese: "Nếu cô ấy không lỡ chuyến tàu, giờ cô ấy đã ở cuộc họp rồi.",
    },
    {
      english: "If we had saved more money, we could travel abroad this year.",
      vietnamese: "Nếu chúng tôi tiết kiệm nhiều hơn, năm nay đã có thể đi du lịch nước ngoài.",
    },
  ],
  practice: {
    questionCount: 10,
    studentCount: 980,
  },
};
