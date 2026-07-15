import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 21 exercises — Will and shall 1 (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover contractions and near-synonym verbs.
 */
export const U21_WILL_AND_SHALL_1_EXERCISES: readonly GrammarExercise[] = [
  // 21.1 — Complete with I'll + a suitable verb
  grammarCloze(
    "u21-1-2",
    "21.1 · I'll + động từ",
    "'It's cold in this room.' 'Is it? __________ on the heating then.'",
    "I'll turn",
    {
      alternatives: ["I'll switch", "I'll put", "I will turn", "I will switch", "I will put"],
      explanation: "Quyết định ngay lúc nói (bật lò sưởi) → I'll turn/switch/put on the heating.",
    },
  ),
  grammarCloze(
    "u21-1-3",
    "21.1 · I'll + động từ",
    "'Are you free next Friday?' 'Let me see. __________ my diary.'",
    "I'll check",
    {
      alternatives: ["I will check"],
      explanation: "Quyết định vừa đưa ra (xem lịch) → I'll check my diary.",
    },
  ),
  grammarCloze(
    "u21-1-4",
    "21.1 · I'll + động từ",
    "'Shall I do the washing-up?' 'No, it's all right. __________ it later.'",
    "I'll do",
    {
      alternatives: ["I will do"],
      explanation: "Đồng ý/quyết định tự làm sau → I'll do it later.",
    },
  ),
  grammarCloze(
    "u21-1-5",
    "21.1 · I'll + động từ",
    "'I don't know how to use this phone.' 'OK, __________ you.'",
    "I'll show",
    {
      alternatives: ["I will show"],
      explanation: "Đề nghị giúp đỡ ngay lúc nói → I'll show you.",
    },
  ),
  grammarCloze(
    "u21-1-6",
    "21.1 · I'll + động từ",
    "'Would you like tea or coffee?' '__________ coffee, please.'",
    "I'll have",
    {
      alternatives: ["I will have"],
      explanation: "Quyết định ngay khi được hỏi → I'll have coffee, please.",
    },
  ),
  grammarCloze(
    "u21-1-7",
    "21.1 · I'll + động từ",
    "'Are you coming with us?' 'No, I think __________ here.'",
    "I'll stay",
    {
      alternatives: ["I will stay"],
      explanation: "Quyết định ngay lúc nói (ở lại) → I think I'll stay here.",
    },
  ),
  grammarCloze(
    "u21-1-8",
    "21.1 · I'll + động từ",
    "'Can you finish this report today?' 'Well, __________, but I can't promise.'",
    "I'll try",
    {
      alternatives: ["I will try"],
      explanation: "Hứa cố gắng (không chắc chắn) → I'll try.",
    },
  ),

  // 21.2 — I think I'll … / I don't think I'll …
  grammarCloze(
    "u21-2-2",
    "21.2 · I think I'll …",
    "I'm tired, so __________. Goodnight!",
    "I think I'll go to bed",
    {
      alternatives: ["I think I'll go to bed.", "I'll go to bed", "I think I will go to bed"],
      explanation: "Quyết định ngay lúc nói (đi ngủ) → I think I'll go to bed.",
    },
  ),
  grammarCloze(
    "u21-2-3",
    "21.2 · I think I'll …",
    "It's a lovely morning. __________. Do you want to come too?",
    "I think I'll go for a walk",
    {
      alternatives: ["I think I'll go for a walk.", "I'll go for a walk", "I think I will go for a walk"],
      explanation: "Quyết định vừa đưa ra (đi dạo) → I think I'll go for a walk.",
    },
  ),
  grammarCloze(
    "u21-2-4",
    "21.2 · I think I'll …",
    "I don't feel hungry any more. __________ lunch.",
    "I don't think I'll have",
    {
      alternatives: [
        "I don't think I'll have any lunch",
        "I don't think I will have",
        "I don't think I'll have (any)",
      ],
      explanation: "Quyết định không ăn trưa nữa → I don't think I'll have (any) lunch.",
    },
  ),
  grammarCloze(
    "u21-2-5",
    "21.2 · I think I'll …",
    "I've got a lot to do, so __________ today.",
    "I don't think I'll go swimming",
    {
      alternatives: ["I don't think I'll go swimming.", "I don't think I will go swimming"],
      explanation: "Quyết định không đi bơi vì nhiều việc → I don't think I'll go swimming.",
    },
  ),

  // 21.3 — Which is correct?
  grammarCloze(
    "u21-3-3",
    "21.3 · Chọn dạng đúng",
    "'__________ you at the entrance at 10.30, OK?' 'Yes, that's fine.'",
    "I'll meet",
    {
      explanation: "Quyết định (hẹn giờ) vừa đưa ra ngay lúc nói → I'll meet (không dùng I meet).",
    },
  ),
  grammarCloze(
    "u21-3-4",
    "21.3 · Chọn dạng đúng",
    "'Please don't go yet.' 'OK, __________ a little longer, but I have to go soon.'",
    "I'll stay",
    {
      explanation: "Đồng ý ngay lúc nói → I'll stay a little longer.",
    },
  ),
  grammarCloze(
    "u21-3-6",
    "21.3 · Chọn dạng đúng",
    "'Remember to lock the door when you go out.' 'OK. __________.'",
    "I won't forget",
    {
      alternatives: ["I will not forget"],
      explanation: "Hứa hẹn phủ định ngay lúc nói → I won't forget.",
    },
  ),
  grammarCloze(
    "u21-3-9",
    "21.3 · Chọn dạng đúng",
    "'__________ something for me?' 'It depends. What do you want me to do?'",
    "Will you do",
    {
      explanation: "Will you…? = làm ơn hãy làm việc gì đó (nhờ vả) → Will you do something for me?",
    },
  ),
  grammarCloze(
    "u21-3-11",
    "21.3 · Chọn dạng đúng",
    "I asked Sue what happened, but she __________ me.",
    "won't tell",
    {
      explanation: "won't = từ chối/không chịu làm → she won't tell me.",
    },
  ),

  // 21.4 — Shall I …? / Shall we …?
  grammarCloze(
    "u21-4-2",
    "21.4 · Shall I/we …?",
    "Bạn và bạn của bạn sắp đi nghỉ cùng nhau, nhưng chưa quyết định đi đâu. Bạn hỏi bạn mình: __________",
    "Where shall we go",
    {
      alternatives: ["Where shall we go?", "Where shall we go on holiday", "Where shall we go on holiday?"],
      explanation: "Hỏi ý kiến/gợi ý về việc chung → Where shall we go (on holiday)?",
    },
  ),
  grammarCloze(
    "u21-4-3",
    "21.4 · Shall I/we …?",
    "Bạn thử một chiếc áo khoác ở cửa hàng. Bạn không chắc có nên mua không. Bạn hỏi bạn mình để xin ý kiến: __________",
    "Shall I buy it",
    {
      alternatives: ["Shall I buy it?"],
      explanation: "Xin ý kiến/gợi ý cho quyết định của mình → Shall I buy it?",
    },
  ),
  grammarCloze(
    "u21-4-4",
    "21.4 · Shall I/we …?",
    "Bạn và bạn của bạn sắp ra ngoài. Phải quyết định là bắt taxi hay đi bộ. Bạn hỏi: __________",
    "Shall we get a taxi or shall we walk",
    {
      alternatives: [
        "Shall we get a taxi or walk",
        "Shall we get a taxi",
        "Shall we walk",
        "Shall we get a taxi or shall we walk?",
      ],
      explanation: "Xin ý kiến chọn giữa hai phương án → Shall we get a taxi or (shall we) walk?",
    },
  ),
  grammarCloze(
    "u21-4-6",
    "21.4 · Shall I/we …?",
    "Bạn sẽ gặp một người bạn ngày mai, nhưng phải quyết định giờ. Bạn nói: __________ Is 10.30 OK for you?",
    "What time shall we meet",
    {
      alternatives: ["What time shall we meet?"],
      explanation: "Xin ý kiến để chốt thời gian gặp → What time shall we meet?",
    },
  ),
];
