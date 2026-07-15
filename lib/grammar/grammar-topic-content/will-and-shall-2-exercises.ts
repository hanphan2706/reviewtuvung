import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 22 exercises — Will and shall 2 (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover contractions and full forms.
 */
export const U22_WILL_AND_SHALL_2_EXERCISES: readonly GrammarExercise[] = [
  // 22.1 — will ('ll) or won't
  grammarCloze(
    "u22-1-2",
    "22.1 · will hay won't",
    "There's no point in asking Amanda for advice. She __________ know what to do.",
    "won't",
    {
      explanation: "Dự đoán/tin rằng Amanda sẽ không biết gì → won't know.",
    },
  ),
  grammarCloze(
    "u22-1-3",
    "22.1 · will hay won't",
    "I'm glad I'm meeting Emma tomorrow. It __________ be good to see her again.",
    "'ll",
    {
      alternatives: ["will", "'ll be good", "will be good"],
      explanation: "Dự đoán cảm nhận trong tương lai → it'll be good to see her.",
    },
  ),
  grammarCloze(
    "u22-1-4",
    "22.1 · will hay won't",
    "I'm sorry about what happened yesterday. It __________ happen again.",
    "won't",
    {
      explanation: "Hứa hẹn/tin tưởng điều đó sẽ không xảy ra nữa → won't happen again.",
    },
  ),
  grammarCloze(
    "u22-1-5",
    "22.1 · will hay won't",
    "You don't need to take an umbrella with you. I don't think it __________ rain.",
    "will",
    {
      alternatives: ["'ll"],
      explanation: "Dự đoán về thời tiết → I don't think it will rain.",
    },
  ),
  grammarCloze(
    "u22-1-6",
    "22.1 · will hay won't",
    "I've got some incredible news! You __________ believe it.",
    "won't",
    {
      explanation: "Dự đoán phản ứng của người nghe → you won't believe it.",
    },
  ),

  // 22.2 — will ('ll) with given verbs
  grammarCloze(
    "u22-2-2",
    "22.2 · Dự đoán với will",
    "Why don't you try on this jacket? __________ nice on you.",
    "It will look",
    {
      alternatives: ["It'll look", "It will look nice on you", "It'll look nice on you"],
      explanation: "Dự đoán về kết quả khi thử áo → It'll look nice on you.",
    },
  ),
  grammarCloze(
    "u22-2-3",
    "22.2 · Dự đoán với will",
    "You must meet Max sometime. I think __________ him.",
    "you'll like",
    {
      alternatives: ["you will like"],
      explanation: "Dự đoán/tin rằng bạn sẽ thích Max → I think you'll like him.",
    },
  ),
  grammarCloze(
    "u22-2-4",
    "22.2 · Dự đoán với will",
    "It's a very nice hotel. __________ your stay there.",
    "You'll enjoy",
    {
      alternatives: ["You will enjoy"],
      explanation: "Dự đoán về trải nghiệm ở khách sạn → You'll enjoy your stay there.",
    },
  ),
  grammarCloze(
    "u22-2-5",
    "22.2 · Dự đoán với will",
    "It's raining hard. Don't go out. __________ very wet.",
    "You'll get",
    {
      alternatives: ["You will get"],
      explanation: "Dự đoán hậu quả nếu ra ngoài lúc mưa → You'll get very wet.",
    },
  ),
  grammarCloze(
    "u22-2-6",
    "22.2 · Dự đoán với will",
    "Goodbye! I'm sure __________ again before long.",
    "we'll meet",
    {
      alternatives: ["we will meet"],
      explanation: "Dự đoán/tin sẽ gặp lại nhau → I'm sure we'll meet again.",
    },
  ),
  grammarCloze(
    "u22-2-7",
    "22.2 · Dự đoán với will",
    "I've invited Anna to the party, but I don't think __________.",
    "she'll come",
    {
      alternatives: ["she will come"],
      explanation: "Dự đoán khả năng Anna sẽ không đến → I don't think she'll come.",
    },
  ),

  // 22.3 — Do you think … will … ?
  grammarCloze(
    "u22-3-2",
    "22.3 · Do you think … will … ?",
    "The weather doesn't look very good. Do you __________?",
    "think it will rain",
    {
      alternatives: ["think it'll rain"],
      explanation: "Hỏi dự đoán của người khác → Do you think it will rain?",
    },
  ),
  grammarCloze(
    "u22-3-3",
    "22.3 · Do you think … will … ?",
    "The meeting is still going on. When do you __________?",
    "think it will end",
    {
      alternatives: ["think it'll end"],
      explanation: "Hỏi dự đoán về thời điểm kết thúc → When do you think it will end?",
    },
  ),
  grammarCloze(
    "u22-3-4",
    "22.3 · Do you think … will … ?",
    "My car needs to be repaired. How much __________?",
    "do you think it will cost",
    {
      alternatives: ["do you think it'll cost"],
      explanation: "Hỏi dự đoán về chi phí → How much do you think it will cost?",
    },
  ),
  grammarCloze(
    "u22-3-5",
    "22.3 · Do you think … will … ?",
    "Sally and David are in love. Do __________?",
    "you think they'll get married",
    {
      alternatives: ["you think they will get married"],
      explanation: "Hỏi dự đoán về tương lai của hai người → Do you think they'll get married?",
    },
  ),

  // 22.5 — Which is better?
  grammarCloze(
    "u22-5-2",
    "22.5 · Chọn dạng phù hợp",
    "It was an amazing experience. __________ it.",
    "I'll never forget",
    {
      alternatives: ["I will never forget"],
      explanation: "Dự đoán/tin chắc về tương lai → I'll never forget it.",
    },
  ),
  grammarCloze(
    "u22-5-5",
    "22.5 · Chọn dạng phù hợp",
    "Who do you think __________ the game tomorrow?",
    "will win",
    {
      explanation: "Dự đoán kết quả trận đấu → who do you think will win.",
    },
  ),
  grammarCloze(
    "u22-5-7",
    "22.5 · Chọn dạng phù hợp",
    "Don't be afraid of the dog. __________ you.",
    "It won't hurt",
    {
      alternatives: ["It will not hurt"],
      explanation: "Trấn an bằng dự đoán/niềm tin → It won't hurt you.",
    },
  ),
  grammarCloze(
    "u22-5-8",
    "22.5 · Chọn dạng phù hợp",
    "__________ if I press this button?",
    "What will happen",
    {
      explanation: "Hỏi dự đoán về điều chưa biết sẽ xảy ra → What will happen?",
    },
  ),
];
