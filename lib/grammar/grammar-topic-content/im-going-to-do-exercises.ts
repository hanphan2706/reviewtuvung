import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 20 exercises — I'm going to (do) (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover contractions and full forms.
 */
export const U20_IM_GOING_TO_DO_EXERCISES: readonly GrammarExercise[] = [
  // 20.1 — Write questions with going to
  grammarCloze(
    "u20-1-2",
    "20.1 · Câu hỏi với going to",
    "Bạn của bạn sắp đi dự một đám cưới tuần tới. Bạn hỏi: (what / wear?) __________",
    "What are you going to wear",
    {
      alternatives: ["What are you going to wear?"],
      explanation: "Hỏi về ý định đã quyết định cho tương lai → going to.",
    },
  ),
  grammarCloze(
    "u20-1-3",
    "20.1 · Câu hỏi với going to",
    "Bạn của bạn vừa mua một cái bàn mới. Bạn hỏi: (where / put?) __________",
    "Where are you going to put it",
    {
      alternatives: ["Where are you going to put it?"],
      explanation: "Hỏi về ý định (đặt bàn ở đâu) → going to.",
    },
  ),
  grammarCloze(
    "u20-1-4",
    "20.1 · Câu hỏi với going to",
    "Bạn của bạn đã quyết định tổ chức tiệc. Bạn hỏi: (who / invite?) __________",
    "Who are you going to invite",
    {
      alternatives: ["Who are you going to invite?"],
      explanation: "Hỏi về ý định đã quyết định → going to.",
    },
  ),
  grammarCloze(
    "u20-1-5",
    "20.1 · Câu hỏi với going to",
    "Bạn của bạn đã mua cá để nấu bữa tối. Bạn hỏi: (how / cook?) __________",
    "How are you going to cook it",
    {
      alternatives: ["How are you going to cook it?"],
      explanation: "Hỏi về ý định (cách nấu) → going to.",
    },
  ),

  // 20.2 — Complete with going to / not going to
  grammarCloze(
    "u20-2-2",
    "20.2 · I'm (not) going to …",
    "I haven't been trying hard enough. From now on __________ harder.",
    "I'm going to try",
    {
      alternatives: ["I am going to try"],
      explanation: "Quyết định thay đổi từ giờ trở đi → I'm going to try harder.",
    },
  ),
  grammarCloze(
    "u20-2-3",
    "20.2 · I'm (not) going to …",
    "I have to make a speech tomorrow, but I don't know what __________.",
    "I'm going to say",
    {
      alternatives: ["I am going to say"],
      explanation: "Chưa biết mình sẽ nói gì, nhưng vẫn là ý định cho tương lai → going to say.",
    },
  ),
  grammarCloze(
    "u20-2-4",
    "20.2 · I'm (not) going to …",
    "'The car is very dirty.' 'I know. __________ it.'",
    "I'm going to wash",
    {
      alternatives: ["I am going to wash"],
      explanation: "Quyết định vừa đưa ra (rửa xe) → going to wash.",
    },
  ),
  grammarCloze(
    "u20-2-5",
    "20.2 · I'm (not) going to …",
    "I've been offered a job, but __________ it. The pay is too low.",
    "I'm not going to accept",
    {
      alternatives: ["I am not going to accept"],
      explanation: "Quyết định không nhận việc vì lương thấp → going to phủ định.",
    },
  ),
  grammarCloze(
    "u20-2-6",
    "20.2 · I'm (not) going to …",
    "__________ a language, but I haven't decided yet which one.",
    "I'm going to learn",
    {
      alternatives: ["I am going to learn"],
      explanation: "Đã quyết định học một ngoại ngữ (dù chưa chọn ngôn ngữ nào) → going to learn.",
    },
  ),
  grammarCloze(
    "u20-2-7",
    "20.2 · I'm (not) going to …",
    "One day __________ in a marathon. It's my ambition.",
    "I'm going to run",
    {
      alternatives: ["I am going to run"],
      explanation: "Ý định/tham vọng cho tương lai → going to run.",
    },
  ),

  // 20.3 — What is going to happen (predictions from present situation)
  grammarCloze(
    "u20-3-2",
    "20.3 · Dự đoán từ tình huống",
    "Đã 8.30, Tom rời nhà. Anh phải có mặt ở công ty lúc 8.45, nhưng quãng đường mất 30 phút. (late) __________",
    "He's going to be late",
    {
      alternatives: ["He is going to be late", "He's going to be late.", "He is going to be late."],
      explanation: "Tình huống hiện tại (đi muộn 15 phút) cho thấy rõ điều sẽ xảy ra → going to be late.",
    },
  ),
  grammarCloze(
    "u20-3-3",
    "20.3 · Dự đoán từ tình huống",
    "Có một lỗ ở đáy thuyền. Rất nhiều nước đang tràn vào qua lỗ đó. (sink) __________",
    "The boat is going to sink",
    {
      alternatives: ["The boat's going to sink", "The boat is going to sink."],
      explanation: "Nước đang tràn vào ngay bây giờ → dự đoán chắc chắn dựa trên tình huống hiện tại: is going to sink.",
    },
  ),
  grammarCloze(
    "u20-3-4",
    "20.3 · Dự đoán từ tình huống",
    "Amy và Ben đang lái xe. Bình xăng gần hết. Còn rất xa mới tới trạm xăng gần nhất. (run out) __________",
    "They're going to run out of petrol",
    {
      alternatives: [
        "They are going to run out of petrol",
        "They're going to run out of petrol.",
        "They're going to run out of gas",
        "They are going to run out of gas",
      ],
      explanation: "Bình xăng gần hết + còn xa trạm xăng → dự đoán rõ ràng: going to run out of petrol.",
    },
  ),
  grammarCloze(
    "u20-3-5",
    "20.3 · Dự đoán từ tình huống",
    "Xe của Sarah bị hư hại nặng trong một vụ tai nạn. Giờ nó phải được sửa. (cost a lot) __________ to repair the car.",
    "It's going to cost a lot",
    {
      alternatives: ["It is going to cost a lot", "It's going to cost a lot."],
      explanation: "Xe hư nặng → chi phí sửa chắc chắn sẽ cao: going to cost a lot.",
    },
  ),

  // 20.4 — was/were going to
  grammarCloze(
    "u20-4-2",
    "20.4 · was/were going to",
    "I __________ some new clothes yesterday, but I didn't have time to go to the shops.",
    "was going to buy",
    {
      explanation: "Ý định trong quá khứ nhưng không thực hiện được → was going to buy.",
    },
  ),
  grammarCloze(
    "u20-4-3",
    "20.4 · was/were going to",
    "Tom and I __________ tennis last week, but he'd hurt his knee and had to cancel.",
    "were going to play",
    {
      explanation: "Kế hoạch chơi tennis đã bị hủy vì Tom bị đau đầu gối → were going to play.",
    },
  ),
  grammarCloze(
    "u20-4-4",
    "20.4 · was/were going to",
    "I __________ Jane, but I sent her an email instead.",
    "was going to phone",
    {
      explanation: "Ý định gọi điện nhưng cuối cùng lại gửi email → was going to phone.",
    },
  ),
  grammarCloze(
    "u20-4-5",
    "20.4 · was/were going to",
    "I thought the exam __________ hard, but it was easier than I expected.",
    "was going to be",
    {
      explanation: "Dự đoán trong quá khứ (nghĩ đề khó) nhưng thực tế lại dễ hơn → was going to be.",
    },
  ),
  grammarCloze(
    "u20-4-6",
    "20.4 · was/were going to",
    "Peter __________ his job, but in the end he decided to stay where he was.",
    "was going to give up",
    {
      explanation: "Ý định bỏ việc nhưng cuối cùng không thực hiện → was going to give up.",
    },
  ),
];
