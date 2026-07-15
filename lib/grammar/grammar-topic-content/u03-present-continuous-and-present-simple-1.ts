import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 3 — Present continuous and present simple 1 (I am doing and I do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 */
export const U03_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_1_TOPIC: GrammarTopicDetail = {
  slug: "u03-present-continuous-and-present-simple-1",
  title: "Present Continuous and Present Simple 1",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 3",
  sourceNote:
    "Present continuous và present simple 1 (I am doing and I do). Đối chiếu tạm thời/lâu dài, always + -ing. Nên học kèm Unit 4.",
  intro:
    "Present continuous và present simple 1 (I am doing and I do). Đối chiếu tạm thời/lâu dài, always + -ing. Nên học song song với Unit 4 (I am doing and I do 2) để nắm đủ các trường hợp đối chiếu hai thời này.",
  structure: {
    affirmative: "Continuous: S + am/is/are + V-ing · Simple: S + V(-s/-es)",
    negative: "Continuous: S + am/is/are + not + V-ing · Simple: S + don't/doesn't + V",
  },
  usagePoints: [
    {
      before: "Continuous dùng cho việc ",
      strong: "đang xảy ra tại/quanh thời điểm nói",
      after: ", hành động chưa hoàn tất (The water is boiling; What are you doing?).",
    },
    {
      before: "Simple dùng cho việc ",
      strong: "nói chung, lặp lại theo thói quen",
      after: ", không gắn với thời điểm nói cụ thể (Water boils at 100°C; What do you usually do at weekends?).",
    },
    {
      before: "Continuous còn diễn tả ",
      strong: "tình huống tạm thời",
      after: " kéo dài trong thời gian ngắn (I'm living with friends until I find a place).",
    },
    {
      before: "Simple diễn tả ",
      strong: "tình huống lâu dài, cố định",
      after: " (My parents live in London — họ đã sống ở đó cả đời).",
    },
    {
      before: "Cấu trúc ",
      strong: "always + V-ing",
      after: " (khác với always + V thường) dùng để phàn nàn về việc xảy ra quá thường xuyên, nhiều hơn mức bình thường (You're always losing your keys!).",
    },
    {
      before: "Ghi nhớ: ",
      strong: "always do",
      after: " = làm mỗi lần (thói quen bình thường), còn always + doing mang sắc thái than phiền, khác nghĩa hoàn toàn.",
    },
  ],
  examples: [
    {
      english: "The water is boiling. Be careful.",
      vietnamese: "Nước đang sôi. Cẩn thận đấy.",
    },
    {
      english: "Water boils at 100 degrees Celsius.",
      vietnamese: "Nước sôi ở 100 độ C. (sự thật khoa học)",
    },
    {
      english: "I'm living with some friends until I find a place of my own.",
      vietnamese: "Tôi đang ở tạm với vài người bạn cho đến khi tìm được nhà riêng.",
    },
    {
      english: "My parents live in London. They have lived there all their lives.",
      vietnamese: "Bố mẹ tôi sống ở London. Họ đã sống ở đó cả đời. (lâu dài, cố định)",
    },
    {
      english: "I always go to work by car.",
      vietnamese: "Tôi luôn đi làm bằng ô tô. (thói quen bình thường, mỗi lần đều vậy)",
    },
    {
      english: "I've lost my keys again. I'm always losing them.",
      vietnamese: "Tôi lại làm mất chìa khóa rồi. Tôi hay làm mất nó lắm. (than phiền: quá thường xuyên)",
    },
    {
      english: "Paul is never satisfied. He's always complaining.",
      vietnamese: "Paul chẳng bao giờ hài lòng. Anh ấy lúc nào cũng phàn nàn. (= phàn nàn quá nhiều)",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 705,
  },
};
