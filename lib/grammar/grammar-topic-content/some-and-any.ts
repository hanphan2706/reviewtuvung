import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 85 — Some and Any.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 86 (no/none/any / nothing/nobody).
 */
export const U85_SOME_AND_ANY_TOPIC: GrammarTopicDetail = {
  slug: "u85-some-and-any",
  title: "Some and Any",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 85",
  sourceNote:
    "Some trong câu khẳng định, any trong câu phủ định; some và any trong câu hỏi; if + any; any = không quan trọng cái nào; somebody + they. Nên học kèm Unit 86.",
  intro:
    "Bài này giúp bạn chọn some hay any trong câu khẳng định, phủ định và câu hỏi, hiểu any khi nghĩa là bất kỳ cái nào, và dùng they với somebody. Nên học kèm Unit 86.",
  structure: {
    affirmative:
      "some / somebody / something (câu khẳng định) | any (câu phủ định và hầu hết câu hỏi) | any = không quan trọng cái nào",
    negative:
      "Không dùng some trong câu phủ định rõ ràng | Dùng any sau without / hardly / refuse",
  },
  usagePoints: [
    {
      before: "Câu khẳng định dùng ",
      strong: "some",
      after: "; câu phủ định dùng any: some flowers / not any flowers.",
    },
    {
      before: "Trong câu phủ định rõ ràng thì ",
      strong: "KHÔNG",
      after: " dùng some: We didn't buy any flowers (không nói: some flowers).",
    },
    {
      before: "Trong câu hỏi, dùng ",
      strong: "some",
      after: " khi xin, mời hoặc nghĩ là có: Can I have some…?",
    },
    {
      before: "Trong câu hỏi, dùng ",
      strong: "any",
      after: " khi không chắc có hay không: Do you have any luggage?",
    },
    {
      before: "Any cũng có nghĩa ",
      strong: "không quan trọng cái nào",
      after: ": any bus, anybody, anything, anywhere.",
    },
    {
      before: "Sau if thường dùng ",
      strong: "any / anyone / anything",
      after: "; someone/anybody đi với they/them/their theo nghĩa chung.",
    },
  ],
  examples: [
    {
      english: "We bought some flowers. We didn't buy any flowers.",
      vietnamese: "Some trong câu khẳng định, any trong câu phủ định.",
    },
    {
      english: "Can I have some sugar, please? Do you have any luggage?",
      vietnamese: "Some khi xin; any khi không chắc có hay không.",
    },
    {
      english: "You can take any bus. They all go to the centre.",
      vietnamese: "Any nghĩa là bất kỳ chiếc nào cũng được.",
    },
    {
      english: "I'm hungry. I want something to eat. — Anything. I don't mind.",
      vietnamese: "Something chỉ một thứ cụ thể; anything nghĩa là món nào cũng được.",
    },
    {
      english: "Hardly anybody fails. She went out without any money.",
      vietnamese: "Nghĩa phủ định thì dùng any.",
    },
    {
      english: "Someone has forgotten their umbrella.",
      vietnamese: "Someone đi với their theo nghĩa chung.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
