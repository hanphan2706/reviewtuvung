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
    "must / mustn't / needn't: bắt buộc, cấm, không cần; needn't have (đã làm thừa) vs didn't need to (không cần phải). Nên học kèm Unit 31.",
  intro:
    "Bài này giúp bạn phân biệt must (cần phải), mustn't (cấm), và needn't (không cần), cùng needn't have versus didn't need to cho quá khứ. Nên học kèm Unit 31 để nắm trọn have to / must / mustn't / don't have to.",
  structure: {
    affirmative: "S + must + V | S + needn't / don't need to + V | S + needn't have + V3",
    negative:
      "KHÔNG nhầm needn't (không cần) với mustn't (cấm) | needn't have (đã làm thừa) ≠ didn't need to (không cần phải làm)",
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
      after: " (vẫn có thể làm nếu muốn): We needn't hurry. / We don't need to hurry.",
    },
    {
      before: "needn't + V ",
      strong: "(không to)",
      after: ": We needn't hurry.",
    },
    {
      before: "don't need ",
      strong: "to + V",
      after: ": We don't need to hurry.",
    },
    {
      before: "You needn't tell Steve = ",
      strong: "không cần nói",
      after: " (vẫn có thể nói nếu muốn).",
    },
    {
      before: "You mustn't tell Steve = ",
      strong: "không được nói",
      after: " (cấm).",
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
      vietnamese: "Must = phải giữ bí mật — nghĩa vụ bắt buộc.",
    },
    {
      english: "You must keep it a secret. You mustn't tell anyone.",
      vietnamese: "Mustn't = cấm nói — đối lập với must (phải giữ).",
    },
    {
      english: "We have plenty of time. We needn't hurry.",
      vietnamese: "Needn't = không cần vội — khác mustn't (cấm vội).",
    },
    {
      english: "You needn't tell Steve. I can tell him myself.",
      vietnamese: "Needn't tell = không cần nói với Steve — tùy chọn.",
    },
    {
      english: "Everything was OK. You needn't have worried.",
      vietnamese: "Needn't have worried = đáng lẽ không cần lo — nhưng bạn đã lo.",
    },
    {
      english: "They needn't have reserved a table. The restaurant was almost empty.",
      vietnamese: "Needn't have reserved = đặt bàn thừa — việc đã làm nhưng không cần.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
