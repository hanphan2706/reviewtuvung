import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 3 — Present continuous and present simple 1 (I am doing and I do).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 4 (I am doing and I do 2).
 */
export const U03_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_1_TOPIC: GrammarTopicDetail = {
  slug: "u03-present-continuous-and-present-simple-1",
  title: "Present Continuous and Present Simple 1",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 3",
  sourceNote:
    "Present continuous và present simple 1 (I am doing and I do): đối chiếu tạm thời và lâu dài, always + V-ing để than phiền. Nên học kèm Unit 4 (I am doing and I do 2).",
  intro:
    "Bài này giúp bạn đối chiếu present continuous và present simple: continuous cho việc đang xảy ra hoặc một tình huống tạm thời, simple cho việc nói chung hoặc một tình huống lâu dài, cố định, cùng cấu trúc always + V-ing để than phiền về việc xảy ra quá thường xuyên. Nên học song song với Unit 4 (I am doing and I do 2) để nắm đủ các trường hợp đối chiếu giữa hai thời này.",
  structure: {
    affirmative: "Continuous: S + am/is/are + V-ing · Simple: S + V(-s/-es)",
    negative:
      "Continuous: KHÔNG bỏ am/is/are khi phủ định → S + am/is/are + not + V-ing · Simple: KHÔNG chia lại động từ sau don't/doesn't → S + don't/doesn't + V nguyên thể.",
  },
  usagePoints: [
    {
      before: "Continuous dùng cho việc ",
      strong: "đang xảy ra tại/quanh thời điểm nói",
      after: ", hành động chưa hoàn tất: The water is boiling. What are you doing?",
    },
    {
      before: "Simple dùng cho việc ",
      strong: "nói chung, lặp lại theo thói quen",
      after: ", không gắn với thời điểm nói cụ thể: Water boils at 100°C. What do you usually do at weekends?",
    },
    {
      before: "Continuous còn diễn tả ",
      strong: "tình huống tạm thời",
      after: " kéo dài trong thời gian ngắn: I'm living with friends until I find a place.",
    },
    {
      before: "Simple diễn tả ",
      strong: "tình huống lâu dài, cố định",
      after: ": My parents live in London — họ đã sống ở đó cả đời.",
    },
    {
      before: "Cấu trúc ",
      strong: "always + V-ing",
      after: " (khác always + V thường) dùng để phàn nàn về việc xảy ra quá thường xuyên, nhiều hơn mức bình thường: You're always losing your keys!",
    },
    {
      before: "Ghi nhớ: ",
      strong: "always + V",
      after: " = làm mỗi lần, thói quen bình thường — khác hẳn always + V-ing mang sắc thái than phiền ở trên.",
    },
  ],
  examples: [
    {
      english: "The water is boiling. Be careful.",
      vietnamese: "is boiling = việc đang diễn ra ngay lúc nói, chưa xong.",
    },
    {
      english: "Water boils at 100 degrees Celsius.",
      vietnamese: "boils = sự thật khoa học, không gắn thời điểm cụ thể — dùng simple.",
    },
    {
      english: "I'm living with some friends until I find a place of my own.",
      vietnamese: "am living = tạm thời, sẽ thay đổi khi tìm được nhà riêng.",
    },
    {
      english: "My parents live in London. They have lived there all their lives.",
      vietnamese: "live = tình huống lâu dài, cố định — khác am/is/are living (tạm thời) ở trên.",
    },
    {
      english: "I always go to work by car.",
      vietnamese: "always go = thói quen bình thường, mỗi lần đều làm y như vậy.",
    },
    {
      english: "I've lost my keys again. I'm always losing them.",
      vietnamese: "am always losing = than phiền việc xảy ra nhiều hơn mức bình thường, không phải thói quen trung tính.",
    },
    {
      english: "Paul is never satisfied. He's always complaining.",
      vietnamese: "is always complaining = phàn nàn quá thường xuyên — always + V-ing mang sắc thái khó chịu.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 705,
  },
};
