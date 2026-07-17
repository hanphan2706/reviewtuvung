import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 55 — Verb (+ object) + to … (I want you to …).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 54 (Verb + to …).
 */
export const U55_VERB_OBJECT_TO_TOPIC: GrammarTopicDetail = {
  slug: "u55-verb-object-to",
  title: "Verb (+ Object) + to …",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 55",
  sourceNote:
    "Muốn/mong/nhờ ai đó làm gì: want/expect/ask… + (object) + to …; tell/advise/warn… + object + to …; make/let không dùng to; bị động be made to. Nên học kèm Unit 54.",
  intro:
    "Bài này giúp bạn nhờ hoặc bảo ai đó làm gì bằng mẫu verb (+ object) + to …, phân biệt nhóm tell/advise/warn với make/let (không có to), và nhận ra dạng bị động be made to / be allowed to. Nên học kèm Unit 54.",
  structure: {
    affirmative:
      "want/expect/ask… + (O) + to + V | tell/advise/warn… + O + to + V | make/let + O + V | be made to + V",
    negative:
      "don't want + O + to + V | warn + O + not to + V | wouldn't let + O + V | aren't allowed to + V",
  },
  usagePoints: [
    {
      before: "want / expect / would like có thể theo ",
      strong: "(object) + to …",
      after: ": He doesn't want anybody to know. Would you like me to go now?",
    },
    {
      before: "KHÔNG nói ",
      strong: "want that …",
      after: ": Do you want me to come with you? (không: want that I come…)",
    },
    {
      before: "tell / advise / remind / warn / persuade… luôn cần ",
      strong: "object + to …",
      after: ": Can you remind me to call Sam? She warned me not to touch it.",
    },
    {
      before: "help: ",
      strong: "help (somebody) (to) do",
      after: " — to có hoặc không đều được: Can you help me (to) move this table?",
    },
    {
      before: "make / let + ",
      strong: "somebody + V",
      after: " (KHÔNG dùng to): Hot weather makes me feel tired. Let me carry your bag.",
    },
    {
      before: "Bị động: ",
      strong: "be made to / be allowed to",
      after: " (có to): We were made to wait for two hours. Are we allowed to park here?",
    },
  ],
  examples: [
    {
      english: "Would you like me to go now?",
      vietnamese: "Hỏi xem người kia có muốn mình đi ngay không — object + to …",
    },
    {
      english: "Do you want me to come with you? (not want that I come)",
      vietnamese: "Dùng want + object + to, không dùng want that…",
    },
    {
      english: "Can you remind me to call Sam tomorrow?",
      vietnamese: "remind luôn kèm object trước to …",
    },
    {
      english: "Joe warned me not to touch the switch.",
      vietnamese: "Cảnh báo đừng làm gì: warn + object + not to …",
    },
    {
      english: "Her parents wouldn't let her go out alone.",
      vietnamese: "let + object + V nguyên mẫu, không có to.",
    },
    {
      english: "We were made to wait for two hours.",
      vietnamese: "Bị động của make phải dùng be made to + V.",
    },
    {
      english: "Jane suggested that I ask you for advice. (not suggested me to ask)",
      vietnamese: "suggest không theo mẫu object + to; dùng that-clause.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
