import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 42 — Passive 1 (is done / was done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 43–44 (Passive 2–3).
 */
export const U42_PASSIVE_1_TOPIC: GrammarTopicDetail = {
  slug: "u42-passive-1",
  title: "Passive 1",
  levelLabel: "Intermediate",
  kindLabel: "Passive",
  sourceBook: "English Grammar in Use · Intermediate · Unit 42",
  sourceNote:
    "Câu bị động = be + past participle (present/past simple); chủ ngữ chịu tác động; by + agent khi cần nêu người làm. Nên học kèm Units 43–44.",
  intro:
    "Bài này giúp bạn chuyển câu chủ động sang bị động với am/is/are hoặc was/were + past participle, biết khi nào nêu tác nhân bằng by và khi nào bỏ qua. Nên học kèm Unit 43 (have been / being done) và Unit 44 (I was given… / get).",
  structure: {
    affirmative:
      "S + am/is/are + V3 | S + was/were + V3 | … by + agent",
    negative:
      "KHÔNG bỏ be trước V3: The room not cleaned → is not cleaned / was not cleaned | KHÔNG nói This house built in 1981 → This house was built in 1981",
  },
  usagePoints: [
    {
      before: "Chủ động: chủ ngữ ",
      strong: "làm",
      after: " hành động: Somebody built this house.",
    },
    {
      before: "Bị động: chủ ngữ ",
      strong: "chịu tác động",
      after: ": Somebody built this house → This house was built.",
    },
    {
      before: "Bị động khi ",
      strong: "không biết / không cần",
      after: " nêu ai làm: Is this room cleaned every day?",
    },
    {
      before: "Nêu người làm bằng ",
      strong: "by",
      after: ": This house was built by my grandfather.",
    },
    {
      before: "Công thức: ",
      strong: "be + past participle",
      after: " (cleaned / built / stolen… — nhiều động từ bất quy tắc).",
    },
    {
      before: "Present simple: ",
      strong: "am/is/are + V3",
      after: ": This room is cleaned every day. How is this word pronounced?",
    },
    {
      before: "Past simple: ",
      strong: "was/were + V3",
      after: ": This room was cleaned yesterday. I wasn't invited.",
    },
  ],
  examples: [
    {
      english: "This house was built in 1981.",
      vietnamese: "was built = bị động quá khứ — không cần nêu ai xây.",
    },
    {
      english: "Two hundred people are employed by the company.",
      vietnamese: "by the company = nêu tác nhân khi cần biết ai thuê.",
    },
    {
      english: "A lot of money was stolen in the robbery.",
      vietnamese: "was stolen = bị đánh cắp — thường bỏ by vì không biết ai.",
    },
    {
      english: "Many accidents are caused by careless driving.",
      vietnamese: "by careless driving = nguyên nhân gây ra tai nạn.",
    },
    {
      english: "How is this word pronounced?",
      vietnamese: "is pronounced = bị động khi không quan trọng ai phát âm.",
    },
    {
      english: "We were woken up by a loud noise during the night.",
      vietnamese: "were woken up by = tác nhân cụ thể (tiếng ồn) đánh thức.",
    },
    {
      english: "'Did you go to the party?' 'No, I wasn't invited.'",
      vietnamese: "wasn't invited = phủ định bị động: was not + V3.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
