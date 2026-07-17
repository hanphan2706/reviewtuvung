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
    "Một số động từ chỉ -ing hoặc chỉ to …; remember / regret / go on đổi nghĩa theo dạng; begin/start/continue/intend/bother gần như cùng nghĩa với cả hai. Nên học kèm Units 53–54, 57–58.",
  intro:
    "Bài này giúp bạn chọn -ing hay to … sau remember, regret và go on — vì hai dạng đổi nghĩa — và biết khi nào begin/start/continue… dùng cả hai gần như giống nhau. Nên học kèm Units 53–54 và 57–58.",
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
      after: " = nhớ đã làm việc gì: I clearly remember locking the door.",
    },
    {
      before: "remember + ",
      strong: "to …",
      after: " = nhớ phải làm (chưa quên nhiệm vụ): I remembered to lock the door.",
    },
    {
      before: "regret + ",
      strong: "-ing",
      after: " = hối tiếc vì đã làm: I now regret saying what I said.",
    },
    {
      before: "regret + ",
      strong: "to say / to tell you",
      after: " = lấy làm tiếc phải thông báo (văn trang trọng): I regret to say that we cannot accept.",
    },
    {
      before: "go on + ",
      strong: "-ing",
      after: " = tiếp tục cùng việc; go on + to … = chuyển sang việc mới sau đó.",
    },
    {
      before: "begin / start / continue / intend / bother: ",
      strong: "-ing hoặc to …",
      after: " gần như cùng nghĩa. Sau dạng -ing thường dùng to … tiếp: It's starting to rain.",
    },
  ],
  examples: [
    {
      english: "I clearly remember locking the door.",
      vietnamese: "Nhớ việc đã khóa cửa — remember + -ing.",
    },
    {
      english: "I remembered to lock the door, but I forgot to shut the windows.",
      vietnamese: "Nhớ phải khóa cửa (nhiệm vụ) — remember + to …",
    },
    {
      english: "I now regret saying what I said.",
      vietnamese: "Hối tiếc vì đã nói — regret + -ing.",
    },
    {
      english: "I regret to say that we are unable to accept your offer.",
      vietnamese: "Lấy làm tiếc phải nói (thư trang trọng) — regret + to say.",
    },
    {
      english: "The president paused and then went on talking.",
      vietnamese: "Tiếp tục cùng chủ đề — go on + -ing.",
    },
    {
      english: "After discussing the economy, he went on to talk about foreign policy.",
      vietnamese: "Chuyển sang chủ đề mới — go on + to …",
    },
    {
      english: "It started raining. / It started to rain.",
      vietnamese: "start + -ing hoặc to … gần như cùng nghĩa.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
