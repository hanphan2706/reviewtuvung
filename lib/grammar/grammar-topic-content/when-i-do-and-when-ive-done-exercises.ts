import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 25 exercises — When I do and when I've done; if and when (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover contractions and full forms.
 */
export const U25_WHEN_I_DO_AND_WHEN_IVE_DONE_EXERCISES: readonly GrammarExercise[] = [
  // 25.1 — Which is correct?
  grammarCloze(
    "u25-1-2",
    "25.1 · Chọn dạng đúng",
    "As soon as we get any more information, __________ you know.",
    "we'll let",
    {
      alternatives: ["we will let"],
      explanation: "Sau as soon as không dùng will cho mệnh đề phụ, nhưng mệnh đề chính vẫn dùng will → we'll let you know.",
    },
  ),
  grammarCloze(
    "u25-1-4",
    "25.1 · Chọn dạng đúng",
    "Don't drive through a red light. Wait until it __________ to green.",
    "changes",
    {
      explanation: "Sau until nói về tương lai, dùng present simple, không dùng will → it changes.",
    },
  ),
  grammarCloze(
    "u25-1-5",
    "25.1 · Chọn dạng đúng",
    "Sarah will be here soon. __________ some coffee when she comes.",
    "I'll make",
    {
      alternatives: ["I will make"],
      explanation: "Mệnh đề chính vẫn dùng will (I'll make), còn mệnh đề with when dùng present simple (comes).",
    },
  ),
  grammarCloze(
    "u25-1-7",
    "25.1 · Chọn dạng đúng",
    "__________ for you until you're ready, but don't be long.",
    "I'll wait",
    {
      alternatives: ["I will wait"],
      explanation: "Mệnh đề chính dùng will (I'll wait), mệnh đề với until dùng present simple (you're ready).",
    },
  ),
  // 25.2 — Complete with will/won't or the present
  grammarCloze(
    "u25-2-2",
    "25.2 · will hay hiện tại",
    "I want to see Sophie before __________ away next week.",
    "she goes",
    {
      explanation: "Sau before nói về tương lai, dùng present simple, không dùng will → before she goes away.",
    },
  ),
  grammarCloze(
    "u25-2-3",
    "25.2 · will hay hiện tại",
    "Call me when __________ what time you're going to get here.",
    "you know",
    {
      explanation: "Sau when nói về tương lai, dùng present simple → when you know.",
    },
  ),
  grammarCloze(
    "u25-2-4",
    "25.2 · will hay hiện tại",
    "There's no need to hurry. __________ for you until __________ ready.",
    "I'll wait",
    {
      alternatives: ["I will wait"],
      explanation: "Mệnh đề chính dùng will (I'll wait), mệnh đề với until dùng present simple (you're ready).",
    },
  ),
  grammarCloze(
    "u25-2-6",
    "25.2 · will hay hiện tại",
    "I think everything will be fine, but if __________ any problems, __________ you know, OK?",
    "there are",
    {
      explanation: "Sau if nói về tương lai, dùng present simple (there are), mệnh đề chính dùng will (I'll let you know).",
    },
  ),
  grammarCloze(
    "u25-2-7",
    "25.2 · will hay hiện tại",
    "Kate looks completely different now. __________ her when you see her again.",
    "You won't recognise",
    {
      alternatives: ["You will not recognise"],
      explanation: "Mệnh đề chính dùng will/won't (won't recognise), mệnh đề với when dùng present simple (you see).",
    },
  ),
  grammarCloze(
    "u25-2-8",
    "25.2 · will hay hiện tại",
    "I'm going to be away for a few days. If __________ to contact me while I'm away, you can call me.",
    "you need",
    {
      explanation: "Sau if nói về tương lai, dùng present simple, không dùng will → if you need to contact me.",
    },
  ),

  // 25.3 — Situations (situational text prompts)
  grammarCloze(
    "u25-3-2",
    "25.3 · Tình huống",
    "Bạn đang đến thăm một người bạn. Trời sẽ tối sớm và bạn muốn về trước lúc đó. Bạn hỏi: I'd better go now before __________.",
    "it gets dark",
    {
      explanation: "Sau before nói về tương lai, dùng present simple → before it gets dark.",
    },
  ),
  grammarCloze(
    "u25-3-3",
    "25.3 · Tình huống",
    "Bạn muốn bán xe. Mark quan tâm mua nhưng chưa quyết định. Bạn nói: Let me know as soon as __________.",
    "you decide",
    {
      alternatives: ["you've decided", "you have decided"],
      explanation: "Sau as soon as nói về tương lai, dùng present simple hoặc present perfect → as soon as you decide/you've decided.",
    },
  ),
  grammarCloze(
    "u25-3-4",
    "25.3 · Tình huống",
    "Bạn bè bạn sắp đi Hong Kong. Bạn muốn biết họ sẽ ở đâu. Bạn hỏi: Where are you going to stay when __________?",
    "you're in Hong Kong",
    {
      alternatives: ["you are in Hong Kong", "you go to Hong Kong"],
      explanation: "Sau when nói về tương lai, dùng present simple → when you're in Hong Kong / you go to Hong Kong.",
    },
  ),
  grammarCloze(
    "u25-3-5",
    "25.3 · Tình huống",
    "Giao thông ở thị trấn của bạn tệ, nhưng người ta sắp xây một con đường mới. Bạn nói: I think things will be better when they __________.",
    "build the new road",
    {
      alternatives: ["'ve built the new road", "have built the new road"],
      explanation: "Sau when nói về tương lai, dùng present simple hoặc present perfect → when they build/have built the new road.",
    },
  ),
  grammarCloze(
    "u25-3-6",
    "25.3 · Tình huống",
    "Ai đó đã rất thô lỗ với bạn. Bạn muốn cô ấy xin lỗi. Bạn nói: I won't speak to her until __________.",
    "she apologises",
    {
      alternatives: ["she's apologised", "she has apologised"],
      explanation: "Sau until nói về tương lai, dùng present simple hoặc present perfect → until she apologises/has apologised.",
    },
  ),

  // 25.4 — if or when
  grammarCloze(
    "u25-4-2",
    "25.4 · if hay when",
    "Be careful. You'll hurt yourself __________ you fall.",
    "if",
    {
      explanation: "Việc có thể xảy ra hoặc không (có thể ngã hoặc không) → if.",
    },
  ),
  grammarCloze(
    "u25-4-3",
    "25.4 · if hay when",
    "I'm going shopping. __________ you want anything, I can get it for you.",
    "If",
    {
      explanation: "Việc có thể xảy ra hoặc không (có thể muốn mua hoặc không) → If.",
    },
  ),
  grammarCloze(
    "u25-4-4",
    "25.4 · if hay when",
    "I'm going away for a few days. I'll call you __________ I get back.",
    "when",
    {
      explanation: "Việc chắc chắn sẽ xảy ra (chắc chắn sẽ quay về) → when.",
    },
  ),
  grammarCloze(
    "u25-4-6",
    "25.4 · if hay when",
    "I'm watching a programme on TV right now. __________ it finishes, I'm going to bed.",
    "When",
    {
      explanation: "Việc chắc chắn sẽ xảy ra (chương trình chắc chắn sẽ kết thúc) → When.",
    },
  ),
  grammarCloze(
    "u25-4-8",
    "25.4 · if hay when",
    "I hope Sarah can come to the party. It will be a shame __________ she can't come.",
    "if",
    {
      explanation: "Việc có thể xảy ra hoặc không (có thể không đến được) → if.",
    },
  ),
];
