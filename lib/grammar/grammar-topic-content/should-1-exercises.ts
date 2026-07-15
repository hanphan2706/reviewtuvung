import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 33 exercises — Should 1 (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover key variants.
 */
export const U33_SHOULD_1_EXERCISES: readonly GrammarExercise[] = [
  // 33.1 — should / shouldn't + phrase
  grammarCloze(
    "u33-1-2",
    "33.1 · should / shouldn't",
    "Your salary is very low. You __________.",
    "should look for another job",
    {
      alternatives: ["You should look for another job"],
      explanation: "Lời khuyên: lương thấp → should look for another job.",
    },
  ),
  grammarCloze(
    "u33-1-3",
    "33.1 · should / shouldn't",
    "Jack always finds it hard to get up. He __________.",
    "shouldn't stay up so late",
    {
      alternatives: ["should not stay up so late", "He shouldn't stay up so late"],
      explanation: "Không nên thức khuya → shouldn't stay up so late.",
    },
  ),
  grammarCloze(
    "u33-1-4",
    "33.1 · should / shouldn't",
    "What a beautiful view! You __________.",
    "should take a picture",
    {
      alternatives: ["You should take a picture"],
      explanation: "Cảnh đẹp → nên chụp ảnh: should take a picture.",
    },
  ),
  grammarCloze(
    "u33-1-5",
    "33.1 · should / shouldn't",
    "Laura is always anxious. She __________.",
    "shouldn't worry so much",
    {
      alternatives: ["should not worry so much", "She shouldn't worry so much"],
      explanation: "Không nên lo quá nhiều → shouldn't worry so much.",
    },
  ),
  grammarCloze(
    "u33-1-6",
    "33.1 · should / shouldn't",
    "Dan's room isn't very nice. __________",
    "He should put some pictures on the walls",
    {
      alternatives: ["should put some pictures on the walls"],
      explanation: "Nên trang trí tường → He should put some pictures on the walls.",
    },
  ),

  // 33.2 — expectation phrases
  grammarCloze(
    "u33-2-2",
    "33.2 · Kỳ vọng với should",
    "Joe hasn't arrived yet, but he __________.",
    "should be here soon",
    {
      explanation: "Kỳ vọng anh ấy sắp đến → should be here soon.",
    },
  ),
  grammarCloze(
    "u33-2-3",
    "33.2 · Kỳ vọng với should",
    "The TV has been repaired. It __________ now.",
    "should be working OK",
    {
      alternatives: ["should be working OK now", "should be working okay"],
      explanation: "Kỳ vọng TV hoạt động ổn → should be working OK.",
    },
  ),
  grammarCloze(
    "u33-2-4",
    "33.2 · Kỳ vọng với should",
    "It __________ to get to the hotel. About 20 minutes.",
    "shouldn't take long",
    {
      alternatives: ["should not take long"],
      explanation: "Không mất lâu → shouldn't take long.",
    },
  ),
  grammarCloze(
    "u33-2-5",
    "33.2 · Kỳ vọng với should",
    "I sent the documents to you today, so you __________ them tomorrow.",
    "should receive",
    {
      explanation: "Kỳ vọng nhận được ngày mai → should receive.",
    },
  ),
  grammarCloze(
    "u33-2-6",
    "33.2 · Kỳ vọng với should",
    "The weather is unusually cold. It __________ at this time of year.",
    "should be much warmer",
    {
      explanation: "Lẽ ra ấm hơn nhiều → should be much warmer.",
    },
  ),
  grammarCloze(
    "u33-2-7",
    "33.2 · Kỳ vọng với should",
    "The best way to get to the airport is by taxi. It __________ than ten pounds.",
    "shouldn't cost more",
    {
      alternatives: ["should not cost more"],
      explanation: "Không nên đắt hơn mười bảng → shouldn't cost more.",
    },
  ),
  grammarCloze(
    "u33-2-8",
    "33.2 · Kỳ vọng với should",
    "If you have a problem with the computer, try restarting it. That __________ the problem.",
    "should solve",
    {
      explanation: "Kỳ vọng khởi động lại sẽ giải quyết → should solve.",
    },
  ),

  // 33.3 — should / should have
  grammarCloze(
    "u33-3-3",
    "33.3 · should / should have",
    "I'm in a difficult position. What do you think I __________ now?",
    "should do",
    {
      explanation: "Lời khuyên hiện tại → should do.",
    },
  ),
  grammarCloze(
    "u33-3-4",
    "33.3 · should / should have",
    "I'm sorry that I didn't take your advice. I __________ what you said.",
    "should have done",
    {
      explanation: "Đáng lẽ nên làm theo lời khuyên → should have done.",
    },
  ),
  grammarCloze(
    "u33-3-5",
    "33.3 · should / should have",
    "We lost the game, but we were the better team. We __________.",
    "should have won",
    {
      explanation: "Đáng lẽ phải thắng → should have won.",
    },
  ),
  grammarCloze(
    "u33-3-6",
    "33.3 · should / should have",
    "We don't see you enough. You __________ and see us more often.",
    "should come",
    {
      explanation: "Lời khuyên hiện tại/tương lai → should come.",
    },
  ),
  grammarCloze(
    "u33-3-7",
    "33.3 · should / should have",
    "We went the wrong way and got lost. We __________ right, not left.",
    "should have turned",
    {
      explanation: "Đáng lẽ phải rẽ phải → should have turned.",
    },
  ),
  grammarCloze(
    "u33-3-8",
    "33.3 · should / should have",
    "My exam results weren't good. I __________ better.",
    "should have done",
    {
      explanation: "Đáng lẽ làm tốt hơn → should have done better.",
    },
  ),

  // 33.4 — production (subset)
  grammarCloze(
    "u33-4-2",
    "33.4 · should / should have",
    "When we got to the restaurant, there were no free tables. We hadn't reserved one. → We __________.",
    "should have reserved a table",
    {
      alternatives: ["We should have reserved a table"],
      explanation: "Đáng lẽ nên đặt bàn → should have reserved a table.",
    },
  ),
  grammarCloze(
    "u33-4-3",
    "33.4 · should / should have",
    "Laura told me her address, but I didn't write it down. → I __________.",
    "should have written down her address",
    {
      alternatives: [
        "should have written her address down",
        "should have written it down",
        "I should have written down her address",
        "I should have written her address down",
        "I should have written it down",
      ],
      explanation: "Đáng lẽ nên ghi địa chỉ → should have written (it / her address) down.",
    },
  ),
];
