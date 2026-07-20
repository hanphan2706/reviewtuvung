import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 126 — To, At, In and Into.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 123–125 (vị trí); been to (Units 7–8); at home (125A).
 */
export const U126_TO_AT_IN_AND_INTO_TOPIC: GrammarTopicDetail = {
  slug: "u126-to-at-in-and-into",
  title: "To, At, In and Into",
  levelLabel: "Intermediate",
  kindLabel: "Preposition",
  sourceBook: "English Grammar in Use · Intermediate · Unit 126",
  sourceNote:
    "go/come to; been to; get to; arrive in/at (không to); home không to; into / out of; get on/off. Nên học kèm Units 123–125.",
  intro:
    "Bài này giúp bạn chọn đúng to, at, in và into khi nói di chuyển: go/come/get to, been to, arrive in/at (không arrive to), go home (không to home), into/out of, và get on/off versus get into/out of. Nên học kèm Units 123–125.",
  structure: {
    affirmative:
      "go/come/get to… | been to… | arrive in / arrive at | go home | into / out of | get on / get off",
    negative:
      "KHÔNG nói arrive to → arrive in/at | KHÔNG nói get to home → get home | KHÔNG nói Welcome in → Welcome to",
  },
  usagePoints: [
    {
      before: "go / come / travel ",
      strong: "to",
      after: " a place: going back to Italy; taken to hospital; Welcome to our country!",
    },
    {
      before: "been to; get ",
      strong: "to",
      after: ": I've been to Rome. They got to the hotel at midnight.",
    },
    {
      before: "arrive ",
      strong: "in",
      after: " a town/country: They arrived in Madrid a week ago.",
    },
    {
      before: "arrive ",
      strong: "at",
      after: " a building/event: What time did you arrive at the hotel? (không: arrive to)",
    },
    {
      before: "home: ",
      strong: "get home / go home",
      after: " (không: to home); on the way home.",
    },
    {
      before: "into = ",
      strong: "đi vào",
      after: "; out of = ra khỏi; get in the car cũng được thay into.",
    },
    {
      before: "bus / train / plane: ",
      strong: "get on / get off",
      after: ": She got on the bus and I never saw her again.",
    },
    {
      before: "car / taxi: ",
      strong: "get into / get out of",
      after: ": She got out of the car and went into a shop.",
    },
  ],
  examples: [
    {
      english: "When are your friends going back to Italy?",
      vietnamese: "go back to + nơi — KHÔNG dùng going back in Italy.",
    },
    {
      english: "I've been to Italy four times, but I've never been to Rome.",
      vietnamese: "been to = đã từng đến (trải nghiệm), luôn có to.",
    },
    {
      english: "They arrived in Madrid a week ago. / What time did you arrive at the hotel?",
      vietnamese: "arrive in = thành phố/quốc gia; arrive at = tòa nhà/sự kiện.",
    },
    {
      english: "What time did you get home?",
      vietnamese: "get home = về nhà — KHÔNG thêm to.",
    },
    {
      english: "I opened the door, went into the room and sat down.",
      vietnamese: "into = đi vào bên trong phòng.",
    },
    {
      english: "She got out of the car and went into a shop.",
      vietnamese: "out of = ra khỏi xe; into = vào cửa hàng.",
    },
    {
      english: "She got on the bus and I never saw her again.",
      vietnamese: "get on = lên xe buýt/tàu/máy bay — không dùng into.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 488,
  },
};
