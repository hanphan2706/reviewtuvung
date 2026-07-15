import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 37 exercises — Can/Could/Would you … ? (English Grammar in Use · Intermediate).
 * Matching converted to response cloze; 37.2/37.3 are polite request/offer sentences.
 */
export const U37_CAN_COULD_WOULD_YOU_EXERCISES: readonly GrammarExercise[] = [
  // 37.2 — phrase bank requests/offers
  grammarCloze(
    "u37-2-2",
    "37.2 · Would you like / I'd like…",
    "You're making a cold drink. Ask about ice: __________ ice in your drink?",
    "Would you like",
    {
      explanation: "Mời/hỏi muốn gì → Would you like ice…?",
    },
  ),
  grammarCloze(
    "u37-2-3",
    "37.2 · Would you like / I'd like…",
    "You're ordering in a cafe: __________ a chicken salad, please.",
    "I'd like",
    {
      alternatives: ["I would like"],
      explanation: "Nói muốn gì một cách lịch sự → I'd like…",
    },
  ),
  grammarCloze(
    "u37-2-4",
    "37.2 · Would you like / I'd like…",
    "You have an extra concert ticket. Invite a friend: __________ to a concert tomorrow night?",
    "Would you like to come",
    {
      explanation: "Mời đi cùng → Would you like to come…?",
    },
  ),
  grammarCloze(
    "u37-2-5",
    "37.2 · Would you like / I'd like…",
    "Lisa's not here. Offer to take a message: __________ a message?",
    "Can I take",
    {
      explanation: "Đề nghị giúp ghi tin → Can I take a message?",
    },
  ),
  grammarCloze(
    "u37-2-6",
    "37.2 · Would you like / I'd like…",
    "You phone the dentist: Hello. __________ make an appointment, please.",
    "I'd like to",
    {
      alternatives: ["I would like to"],
      explanation: "I'd like to + V → I'd like to make an appointment.",
    },
  ),
  grammarCloze(
    "u37-2-7",
    "37.2 · Would you like / I'd like…",
    "In a shoe shop, offer a try-on: __________ them on?",
    "Would you like to try",
    {
      explanation: "Mời thử → Would you like to try them on?",
    },
  ),
  grammarCloze(
    "u37-2-8",
    "37.2 · Would you like / I'd like…",
    "You see people you know in a cafe: __________ if I join you?",
    "Do you mind",
    {
      explanation: "Xin phép lịch sự → Do you mind if I join you?",
    },
  ),

  // 37.3 — situation → polite request/offer
  grammarCloze(
    "u37-3-2",
    "37.3 · Lời nhờ / xin đồ",
    "You've finished your meal. Ask the waiter for the bill: __________",
    "Can I have the bill, please",
    {
      alternatives: [
        "Could I have the bill, please",
        "Can we have the bill, please",
        "Could we have the bill, please",
        "Can I get the bill, please",
        "Could I get the bill, please",
        "Can I have the bill, please?",
        "Could I have the bill, please?",
      ],
      explanation: "Xin hóa đơn → Can/Could I/we have/get the bill, please?",
    },
  ),
  grammarCloze(
    "u37-3-3",
    "37.3 · Lời nhờ / xin đồ",
    "Ask a friend to check some English forms: __________",
    "Can you check these forms",
    {
      alternatives: [
        "Could you check these forms",
        "Can you check these forms for me",
        "Could you check these forms for me",
        "Do you think you could check these forms",
        "Can you check these forms?",
        "Could you check these forms for me?",
      ],
      explanation: "Nhờ kiểm tra → Can/Could you check…? / Do you think you could…?",
    },
  ),
  grammarCloze(
    "u37-3-4",
    "37.3 · Lời nhờ / xin đồ",
    "Ask a neighbour to turn loud music down: __________",
    "Could you turn the music down, please",
    {
      alternatives: [
        "Can you turn the music down, please",
        "Could you turn it down, please",
        "Can you turn it down, please",
        "Do you think you could turn the music down",
        "Could you turn the music down, please?",
        "Can you turn the music down, please?",
      ],
      explanation: "Nhờ giảm nhạc → Can/Could you turn the music/it down…?",
    },
  ),
  grammarCloze(
    "u37-3-5",
    "37.3 · Lời nhờ / xin phép",
    "On a train, ask to close the window: __________",
    "Is it OK if I close the window",
    {
      alternatives: [
        "Is it all right if I close the window",
        "Can I close the window",
        "Could I close the window",
        "Do you mind if I close the window",
        "Is it OK if I close the window?",
        "Do you mind if I close the window?",
      ],
      explanation: "Xin phép đóng cửa sổ → Is it OK/all right if…? / Can I…? / Do you mind if…?",
    },
  ),
  grammarCloze(
    "u37-3-6",
    "37.3 · Đề nghị / mời",
    "Offer your seat to an elderly passenger: __________",
    "Would you like to sit down",
    {
      alternatives: [
        "Would you like a seat",
        "Can I offer you a seat",
        "Would you like to sit down?",
        "Would you like a seat?",
        "Can I offer you a seat?",
      ],
      explanation: "Mời ngồi → Would you like to sit down / a seat? / Can I offer you a seat?",
    },
  ),
  grammarCloze(
    "u37-3-7",
    "37.3 · Lời nhờ / xin đồ",
    "Ask at the hotel how to get to the station: __________",
    "Could you tell me how to get to the station",
    {
      alternatives: [
        "Can you tell me how to get to the station",
        "Could you tell me the way to the station",
        "Can you tell me the way to the station",
        "Could you tell me where the station is",
        "Can you tell me where the station is",
        "Could you tell me how to get to the station?",
      ],
      explanation: "Hỏi đường → Can/Could you tell me how to get to… / the way… / where…?",
    },
  ),
  grammarCloze(
    "u37-3-8",
    "37.3 · Xin phép / muốn thử",
    "In a clothes shop, ask to try on trousers: __________",
    "Can I try these trousers on",
    {
      alternatives: [
        "Could I try these trousers on",
        "Can I try on these trousers",
        "Could I try on these trousers",
        "I'd like to try on these trousers",
        "Is it OK if I try these trousers on",
        "Can I try these trousers on?",
        "Could I try on these trousers?",
      ],
      explanation: "Xin thử quần → Can/Could I try (these trousers) on? / I'd like to… / Is it OK if…?",
    },
  ),
  grammarCloze(
    "u37-3-9",
    "37.3 · Lời nhờ / xin đồ",
    "Ask a celebrity for an autograph: __________",
    "Can I have your autograph",
    {
      alternatives: [
        "Could I have your autograph",
        "Can I get your autograph",
        "Could I get your autograph",
        "Do you think I could have your autograph",
        "Do you think I could get your autograph",
        "Can I have your autograph?",
        "Could I get your autograph?",
      ],
      explanation: "Xin chữ ký → Can/Could I get/have your autograph?",
    },
  ),

  // 37.1 — converted matching responses (subset)
  grammarCloze(
    "u37-1-2",
    "37.1 · Phản hồi phù hợp",
    "Would you like to go to the cinema? → __________",
    "Maybe. What's on",
    {
      alternatives: ["Maybe. What's on?", "Maybe. What's on?"],
      explanation: "Mời xem phim → Maybe. What's on?",
    },
  ),
  grammarCloze(
    "u37-1-3",
    "37.1 · Phản hồi phù hợp",
    "Can I use your toilet? → __________",
    "Sure. It's the door on the left",
    {
      alternatives: ["Sure. It's the door on the left."],
      explanation: "Xin phép dùng toilet → Sure. It's the door on the left.",
    },
  ),
  grammarCloze(
    "u37-1-4",
    "37.1 · Phản hồi phù hợp",
    "Do you mind if I leave work early? → __________",
    "No, that's fine",
    {
      alternatives: ["No, that's fine."],
      explanation: "Do you mind…? → No = đồng ý: No, that's fine.",
    },
  ),
  grammarCloze(
    "u37-1-6",
    "37.1 · Phản hồi phù hợp",
    "Would you like something to eat? → __________",
    "No, thanks. I'm not hungry",
    {
      alternatives: ["No, thanks. I'm not hungry."],
      explanation: "Từ chối lịch sự → No, thanks. I'm not hungry.",
    },
  ),
  grammarCloze(
    "u37-1-7",
    "37.1 · Phản hồi phù hợp",
    "Can I give you a hand? → __________",
    "No, it's all right. I can manage, thanks",
    {
      alternatives: [
        "No, it's all right. I can manage, thanks.",
        "No, it's all right. I can manage thanks",
      ],
      explanation: "Từ chối đề nghị giúp → No, it's all right. I can manage, thanks.",
    },
  ),
];
