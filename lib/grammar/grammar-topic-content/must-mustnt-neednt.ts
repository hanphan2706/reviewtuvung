import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 32 — Must / mustn't / needn't.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 31 (have to and must) để phân biệt bắt buộc / không được / không cần.
 */
export const U32_MUST_MUSTNT_NEEDNT_TOPIC: GrammarTopicDetail = {
  slug: "u32-must-mustnt-neednt",
  title: "Must / Mustn't / Needn't",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 32",
  sourceNote:
    "Must / mustn't / needn't: bắt buộc, cấm, không cần; needn't have (đã làm thừa) vs didn't need to. Nên học kèm Unit 31 (have to and must).",
  intro:
    "Must / mustn't / needn't: bắt buộc, cấm, không cần; needn't have (đã làm thừa) vs didn't need to. Nên học kèm Unit 31 để nắm trọn have to / must / mustn't / don't have to.",
  structure: {
    affirmative: "S + must + V | S + needn't / don't need to + V | S + needn't have + V3",
    negative: "S + mustn't + V | S + didn't need to / didn't have to + V",
  },
  usagePoints: [
    {
      before: "must = ",
      strong: "cần thiết phải làm",
      after: ": You must keep it a secret. We must hurry.",
    },
    {
      before: "mustn't = ",
      strong: "đừng làm / không được làm",
      after: ": You mustn't tell anyone. We mustn't make any noise.",
    },
    {
      before: "needn't / don't need to = ",
      strong: "không cần",
      after: " (vẫn có thể làm nếu muốn): We needn't hurry. / We don't need to hurry. —needn't do (không to); don't need to do (có to).",
    },
    {
      before: "So sánh: ",
      strong: "needn't ≠ mustn't",
      after: " — You needn't tell Steve (= không cần) vs You mustn't tell Steve (= không được).",
    },
    {
      before: "needn't have + V3 = ",
      strong: "đã làm nhưng thừa",
      after: ": He needn't have got up so early. They needn't have reserved a table.",
    },
    {
      before: "didn't need to / didn't have to = ",
      strong: "không cần phải làm",
      after: " (không nói rõ đã làm hay chưa): He didn't need to get up early, so he didn't.",
    },
  ],
  examples: [
    {
      english: "Don't tell anybody what I said. You must keep it a secret.",
      vietnamese: "Đừng nói với ai những gì tôi nói. Bạn phải giữ bí mật.",
    },
    {
      english: "You must keep it a secret. You mustn't tell anyone.",
      vietnamese: "Bạn phải giữ bí mật. Bạn không được nói với ai.",
    },
    {
      english: "We have plenty of time. We needn't hurry.",
      vietnamese: "Chúng ta còn nhiều thời gian. Không cần vội.",
    },
    {
      english: "You needn't tell Steve. I can tell him myself.",
      vietnamese: "Không cần nói với Steve. Tôi có thể tự nói với anh ấy.",
    },
    {
      english: "Everything was OK. You needn't have worried.",
      vietnamese: "Mọi thứ ổn cả. Đáng lẽ bạn không cần lo (nhưng bạn đã lo).",
    },
    {
      english: "They needn't have reserved a table. The restaurant was almost empty.",
      vietnamese: "Họ đặt bàn không cần thiết. Nhà hàng gần như trống.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
