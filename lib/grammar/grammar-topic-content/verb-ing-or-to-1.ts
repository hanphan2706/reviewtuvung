import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 56 — Verb + -ing or to … 1 (remember, regret etc.).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 53–54, 57–58.
 */
export const U56_VERB_ING_OR_TO_1_TOPIC: GrammarTopicDetail = {
  slug: "u56-verb-ing-or-to-1",
  title: "Verb + -ing or to … 1",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 56",
  sourceNote:
    "nhóm chỉ -ing / chỉ to …; remember / regret / go on (+ nghĩa khác nhau); begin/start/continue/intend/bother (hai dạng). Nên học kèm Units 53–54, 57–58.",
  intro:
    "Unit này giúp bạn nắm Verb + -ing or to … 1: Nhóm chỉ -ing / chỉ to …; remember / regret / go on (+ nghĩa khác nhau); begin/start/continue/intend/bother (hai dạng). Nên học kèm Units 53–54 và 57–58.",
  structure: {
    affirmative:
      "remember/regret/go on + V-ing | remember/regret/go on + to + V | begin/start… + V-ing / to + V",
    negative:
      "don't remember + V-ing | regret + not + V-ing | don't bother + V-ing / to + V",
  },
  usagePoints: [
    {
      before: "remember + ",
      strong: "-ing",
      after: " = nhớ đã làm: I clearly remember locking the door.",
    },
    {
      before: "remember + ",
      strong: "to …",
      after: " = nhớ phải làm: I remembered to lock the door, but I forgot to shut the windows.",
    },
    {
      before: "regret + ",
      strong: "-ing",
      after: " = hối tiếc đã làm: I now regret saying what I said.",
    },
    {
      before: "regret + ",
      strong: "to say / to tell you",
      after: " = lấy làm tiếc phải nói (thư trang trọng): I regret to say that we cannot accept.",
    },
    {
      before: "go on + ",
      strong: "-ing",
      after: " = tiếp tục cùng việc; go on + to … = chuyển sang việc mới.",
    },
    {
      before: "begin / start / continue / intend / bother: ",
      strong: "-ing hoặc to …",
      after: " gần như cùng nghĩa. Sau -ing thường dùng to …: It's starting to rain.",
    },
  ],
  examples: [
    {
      english: "I clearly remember locking the door.",
      vietnamese: "Tôi nhớ rõ đã khóa cửa. (đã khóa rồi)",
    },
    {
      english: "I remembered to lock the door, but I forgot to shut the windows.",
      vietnamese: "Tôi nhớ khóa cửa, nhưng quên đóng cửa sổ. (nhớ phải khóa)",
    },
    {
      english: "I now regret saying what I said.",
      vietnamese: "Giờ tôi hối tiếc vì đã nói những điều đó.",
    },
    {
      english: "I regret to say that we are unable to accept your offer.",
      vietnamese: "Tôi lấy làm tiếc phải nói rằng chúng tôi không thể nhận đề nghị của bạn.",
    },
    {
      english: "The president paused and then went on talking.",
      vietnamese: "Tổng thống dừng lại rồi tiếp tục nói (cùng nội dung).",
    },
    {
      english: "After discussing the economy, he went on to talk about foreign policy.",
      vietnamese: "Sau khi bàn kinh tế, ông chuyển sang nói về chính sách đối ngoại.",
    },
    {
      english: "It started raining. / It started to rain.",
      vietnamese: "Trời bắt đầu mưa. (hai dạng gần như cùng nghĩa)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
