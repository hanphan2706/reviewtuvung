import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 23 exercises — I will and I'm going to (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover contractions and full forms.
 */
export const U23_I_WILL_AND_IM_GOING_TO_EXERCISES: readonly GrammarExercise[] = [
  // 23.1 — will ('ll) or (be) going to
  grammarCloze(
    "u23-1-2",
    "23.1 · will hay going to",
    "'I forgot my wallet. I don't have any money.' 'Not to worry. __________ you some.'",
    "I'll lend",
    {
      alternatives: ["I will lend"],
      explanation: "Đề nghị giúp đỡ vừa nảy ra ngay lúc nói → I'll lend you some (will).",
    },
  ),
  grammarCloze(
    "u23-1-3",
    "23.1 · will hay going to",
    "'Why are you filling that bucket with water?' '__________ the car.'",
    "I'm going to wash",
    {
      alternatives: ["I am going to wash"],
      explanation: "Ý định đã có từ trước, thể hiện qua hành động chuẩn bị (đổ nước vào xô) → going to wash.",
    },
  ),
  grammarCloze(
    "u23-1-4",
    "23.1 · will hay going to",
    "'I don't know how to use the washing machine.' 'It's easy. __________ you.'",
    "I'll show",
    {
      alternatives: ["I will show"],
      explanation: "Đề nghị giúp đỡ ngay lúc nói → I'll show you (will).",
    },
  ),
  grammarCloze(
    "u23-1-5",
    "23.1 · will hay going to",
    "'I've decided to paint this room.' 'That's nice. What colour __________ it?'",
    "are you going to paint",
    {
      explanation: "Hỏi về ý định đã có từ trước (đã quyết định sơn phòng) → are you going to paint.",
    },
  ),
  grammarCloze(
    "u23-1-6",
    "23.1 · will hay going to",
    "'Where are you going? Are you going shopping?' 'Yes, __________ some things for dinner tonight.'",
    "I'm going to buy",
    {
      alternatives: ["I am going to buy"],
      explanation: "Ý định đã có từ trước khi ra ngoài → going to buy.",
    },
  ),
  grammarCloze(
    "u23-1-7",
    "23.1 · will hay going to",
    "'What would you like to eat?' '__________ a pizza, please.'",
    "I'll have",
    {
      alternatives: ["I will have"],
      explanation: "Quyết định ngay lúc được hỏi → I'll have a pizza (will).",
    },
  ),
  grammarCloze(
    "u23-1-8",
    "23.1 · will hay going to",
    "'This food doesn't taste very good, does it?' 'No, it's horrible. __________ it.'",
    "I'm not going to finish",
    {
      alternatives: ["I am not going to finish"],
      explanation: "Quyết định (không ăn tiếp) dựa trên tình huống hiện tại rõ ràng (món ăn dở) → going to.",
    },
  ),
  grammarCloze(
    "u23-1-10",
    "23.1 · will hay going to",
    "'Did you call Lisa?' 'Oh, no. I completely forgot. __________ her now.'",
    "I'll call",
    {
      alternatives: ["I will call"],
      explanation: "Quyết định mới, ngay lúc nhớ ra → I'll call her now (will).",
    },
  ),

  // 23.2 — Situations, will or going to
  grammarCloze(
    "u23-2-2",
    "23.2 · Tình huống",
    "Bạn đang nói chuyện với một người bạn và hẹn gặp nhau. Bạn đề xuất giờ và địa điểm. Bạn nói: __________ you at 10.30 in the hotel lobby, OK?",
    "I'll see",
    {
      explanation: "Đề xuất/quyết định ngay lúc nói → I'll see you at 10.30 (will).",
    },
  ),
  grammarCloze(
    "u23-2-3",
    "23.2 · Tình huống",
    "Bạn đã quyết định bán xe của mình. Bạn nói với một người bạn: I don't need my car any more. __________ it.",
    "I'm going to sell",
    {
      alternatives: ["I am going to sell"],
      explanation: "Đã quyết định từ trước khi nói câu này → I'm going to sell it (going to).",
    },
  ),
  grammarCloze(
    "u23-2-4",
    "23.2 · Tình huống",
    "Bạn của bạn đang lo lắng vì mất bằng lái xe. Bạn nói: Don't worry. I'm sure __________ it.",
    "you'll find",
    {
      alternatives: ["you will find", "you're going to find", "you are going to find"],
      explanation: "Dự đoán/an ủi dựa trên niềm tin cá nhân → I'm sure you'll find it (will).",
    },
  ),
  grammarCloze(
    "u23-2-5",
    "23.2 · Tình huống",
    "Bạn có một chiếc máy ảnh cũ đã hỏng. Bạn đã quyết định vứt nó đi. Bạn nói: This camera is broken. __________ it away.",
    "I'm going to throw",
    {
      alternatives: ["I am going to throw"],
      explanation: "Ý định đã quyết định từ trước → I'm going to throw it away (going to).",
    },
  ),
  grammarCloze(
    "u23-2-6",
    "23.2 · Tình huống",
    "Bạn của bạn yêu thích và sưu tầm máy ảnh cổ. Anh ấy không muốn bạn vứt nó đi. Anh ấy nói: Don't throw it away! __________ it.",
    "I'll have",
    {
      explanation: "Đề nghị mới, quyết định ngay lúc nói → I'll have it (will).",
    },
  ),
  grammarCloze(
    "u23-2-7",
    "23.2 · Tình huống",
    "Joe phải ra sân bay ngày mai nhưng không biết đi bằng cách nào. Amy đề nghị đưa anh ấy đi. Amy nói: Don't worry about getting to the airport, Joe. __________ you.",
    "I'll take",
    {
      explanation: "Đề nghị giúp đỡ, quyết định vừa đưa ra → I'll take you (will).",
    },
  ),

  // 23.3 — predictions: will vs going to based on evidence
  grammarCloze(
    "u23-3-1",
    "23.3 · Dự đoán",
    "That ceiling looks dangerous. It looks as if __________ down.",
    "it's going to fall",
    {
      alternatives: ["it is going to fall"],
      explanation: "Tình huống hiện tại (trần nhà trông nguy hiểm) cho thấy rõ điều sắp xảy ra → going to fall.",
    },
  ),
  grammarCloze(
    "u23-3-2",
    "23.3 · Dự đoán",
    "The weather forecast is good. __________ a nice day.",
    "It's going to be",
    {
      alternatives: ["It is going to be"],
      explanation: "Dự báo thời tiết là dấu hiệu rõ ràng hiện tại → It's going to be a nice day.",
    },
  ),
  grammarCloze(
    "u23-3-3",
    "23.3 · Dự đoán",
    "I haven't seen Ben for ages. He probably won't recognise me. __________ me.",
    "He'll probably not recognise",
    {
      alternatives: [
        "He probably won't recognise",
        "He won't recognise",
        "He will probably not recognise",
      ],
      explanation: "Dự đoán dựa trên suy nghĩ cá nhân (đã lâu không gặp) → will (probably) recognise/not recognise.",
    },
  ),
];
