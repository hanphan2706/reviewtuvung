import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 27 exercises — could (do) and could have (done) (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover contractions and near variants.
 */
export const U27_COULD_DO_AND_COULD_HAVE_DONE_EXERCISES: readonly GrammarExercise[] = [
  // 27.2 — can or could
  grammarCloze(
    "u27-2-2",
    "27.2 · can / could",
    "I'm so angry with him. I __________ kill him!",
    "could",
    {
      explanation: "Cảm xúc cường điệu / không thực tế → could (không can).",
    },
  ),
  grammarCloze(
    "u27-2-3",
    "27.2 · can / could",
    "I __________ hear a strange noise. What is it?",
    "can",
    {
      explanation: "Khả năng thực tế ngay lúc nói (đang nghe) → can hear.",
    },
  ),
  grammarCloze(
    "u27-2-4",
    "27.2 · can / could",
    "It's so nice here. I __________ sit here all day but unfortunately I have to go.",
    "could",
    {
      explanation: "Ước muốn không thực tế hoàn toàn → could sit.",
    },
  ),
  grammarCloze(
    "u27-2-5",
    "27.2 · can / could",
    "I __________ understand your point of view, but I don't agree with you.",
    "can",
    {
      explanation: "Khả năng thực tế (hiểu được) → can understand.",
    },
  ),
  grammarCloze(
    "u27-2-6",
    "27.2 · can / could",
    "Peter is a keen musician. He plays the flute and he __________ also play the piano.",
    "can",
    {
      explanation: "Khả năng thật → can also play.",
    },
  ),
  grammarCloze(
    "u27-2-7",
    "27.2 · can / could",
    "The company Amy works for isn't doing well. She __________ lose her job.",
    "could",
    {
      explanation: "Khả năng có thể xảy ra lúc này → could lose (không can).",
    },
  ),
  grammarCloze(
    "u27-2-8",
    "27.2 · can / could",
    "Some people are unlucky. Life __________ be very unfair.",
    "can",
    {
      explanation: "Khả năng chung (in general) → Life can be unfair.",
    },
  ),
  grammarCloze(
    "u27-2-9",
    "27.2 · can / could",
    "I've been really stupid. I __________ kick myself.",
    "could",
    {
      explanation: "Cường điệu không thực tế → could kick myself.",
    },
  ),
  grammarCloze(
    "u27-2-10",
    "27.2 · can / could",
    "Be careful climbing that tree. You __________ fall.",
    "could",
    {
      explanation: "Rủi ro có thể xảy ra ngay → could fall.",
    },
  ),

  // 27.3 — could / could have phrases
  grammarCloze(
    "u27-3-2",
    "27.3 · could / could have",
    "'Why did you stay at home?' 'You __________ out with us.'",
    "could have come",
    {
      explanation: "Đã có thể đi nhưng không đi → could have come out.",
    },
  ),
  grammarCloze(
    "u27-3-3",
    "27.3 · could / could have",
    "'Shall I open this letter?' 'Yes. It __________ important.'",
    "could be",
    {
      explanation: "Có thể đúng lúc này → could be important.",
    },
  ),
  grammarCloze(
    "u27-3-4",
    "27.3 · could / could have",
    "'How was your exam? Was it difficult?' 'It wasn't so bad. It __________ worse.'",
    "could have been",
    {
      explanation: "Quá khứ: đã có thể tệ hơn → could have been worse.",
    },
  ),
  grammarCloze(
    "u27-3-5",
    "27.3 · could / could have",
    "'Why did you walk?' 'You __________ taken a taxi.'",
    "could have",
    {
      explanation: "Đã có thể đi taxi nhưng không → could have taken a taxi.",
    },
  ),
  grammarCloze(
    "u27-3-6",
    "27.3 · could / could have",
    "'Where shall we meet tomorrow?' 'Well, I __________ to your office if you like.'",
    "could come",
    {
      explanation: "Gợi ý cho tương lai → could come.",
    },
  ),
  grammarCloze(
    "u27-3-7",
    "27.3 · could / could have",
    "'Does Tom still live in the same place?' 'I'm not sure. He could __________.'",
    "have moved",
    {
      explanation: "could have moved — có thể đã chuyển nhà.",
    },
  ),
  grammarCloze(
    "u27-3-8",
    "27.3 · could / could have",
    "'Did you go to university?' 'No. I could have __________, but I didn't want to.'",
    "gone",
    {
      explanation: "could have gone (= đã có thể đi học đại học nhưng không).",
    },
  ),

  // 27.4 — couldn't / couldn't have
  grammarCloze(
    "u27-4-3",
    "27.4 · couldn't / couldn't have",
    "I __________ that hat. People would laugh at me.",
    "couldn't wear",
    {
      explanation: "Hiện tại: sẽ không thể / không dám đeo → couldn't wear.",
    },
  ),
  grammarCloze(
    "u27-4-4",
    "27.4 · couldn't / couldn't have",
    "You helped me a lot. I __________ without you.",
    "couldn't have managed",
    {
      explanation: "Quá khứ giả định: đã không thể xoay sở nếu thiếu bạn → couldn't have managed.",
    },
  ),
  grammarCloze(
    "u27-4-5",
    "27.4 · couldn't / couldn't have",
    "The staff at the hotel were really good. They __________ more helpful.",
    "couldn't have been",
    {
      explanation: "Không thể tốt hơn (hữu ích hơn) được nữa → couldn't have been more helpful.",
    },
  ),
  grammarCloze(
    "u27-4-8",
    "27.4 · couldn't / couldn't have",
    "I wouldn't like to live near the motorway. I __________ the noise of the traffic.",
    "couldn't stand",
    {
      explanation: "Hiện tại: sẽ không chịu nổi → couldn't stand.",
    },
  ),
];
