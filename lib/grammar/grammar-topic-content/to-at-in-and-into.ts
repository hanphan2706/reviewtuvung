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
    "Unit này giúp bạn nắm To, At, In and Into: Go/come to; been to; get to; arrive in/at (không to); home không to; into / out of; get on/off. Nên học kèm Units 123–125.",
  structure: {
    affirmative:
      "go/come/get to… | been to… | arrive in / arrive at | go home | into / out of | get on / get off",
    negative:
      "không: arrive to | get to home | Welcome in",
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
      after: " a town/country; arrive at a building/event (không: arrive to).",
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
      after: "; car / taxi: get into / get out of.",
    },
  ],
  examples: [
    {
      english: "When are your friends going back to Italy?",
      vietnamese: "Bạn bè bạn khi nào về Ý? (không: going back in Italy)",
    },
    {
      english: "I've been to Italy four times, but I've never been to Rome.",
      vietnamese: "Tôi đã đến Ý bốn lần nhưng chưa từng đến Rome.",
    },
    {
      english: "They arrived in Madrid a week ago. / What time did you arrive at the hotel?",
      vietnamese: "Họ đến Madrid tuần trước. / Bạn đến khách sạn lúc mấy giờ?",
    },
    {
      english: "What time did you get home?",
      vietnamese: "Bạn về nhà lúc mấy giờ? (không: get to home)",
    },
    {
      english: "I opened the door, went into the room and sat down.",
      vietnamese: "Tôi mở cửa, đi vào phòng và ngồi xuống.",
    },
    {
      english: "She got out of the car and went into a shop.",
      vietnamese: "Cô ấy ra khỏi xe và vào một cửa hàng.",
    },
    {
      english: "She got on the bus and I never saw her again.",
      vietnamese: "Cô ấy lên xe buýt và tôi không còn gặp lại.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 488,
  },
};
