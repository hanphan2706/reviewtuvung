import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 11 exercises — How long have you (been) ...? (English Grammar in Use · Intermediate).
 */
export const HOW_LONG_HAVE_YOU_BEEN_EXERCISES: readonly GrammarExercise[] = [
  // 11.1 — Which is right?
  grammarCloze(
    "hl-11-1-1",
    "11.1 · Chọn dạng đúng",
    "Ben is a friend of mine. __________ him very well. (I know / I've known)",
    "I know",
    {
      explanation: "Tình bạn đang đúng ở hiện tại (trạng thái chung) → present simple: I know him very well.",
    },
  ),
  grammarCloze(
    "hl-11-1-3",
    "11.1 · Chọn dạng đúng",
    "You'll need an umbrella if you go out now. __________. (It's raining / It's been raining)",
    "It's raining",
    {
      explanation: "Đang mưa ngay lúc này → present continuous: It's raining.",
    },
  ),
  grammarCloze(
    "hl-11-1-4",
    "11.1 · Chọn dạng đúng",
    "The weather __________ awful since I arrived here. (is / has been)",
    "has been",
    {
      explanation: "since + điểm mốc bắt đầu → present perfect: The weather has been awful since I arrived here.",
    },
  ),
  grammarCloze(
    "hl-11-1-5",
    "11.1 · Chọn dạng đúng",
    "I'm sorry I'm late. __________ long? (Are you waiting / Have you been waiting)",
    "Have you been waiting",
    {
      explanation: "Hỏi how long một hoạt động đã tiếp diễn → present perfect continuous: Have you been waiting long?",
    },
  ),
  grammarCloze(
    "hl-11-1-7",
    "11.1 · Chọn dạng đúng",
    "I met Maria only recently. __________ her very long. (I don't know / I haven't known)",
    "I haven't known",
    {
      explanation: "know là động từ trạng thái, dùng present perfect simple với for/since → I haven't known her very long.",
    },
  ),
  grammarCloze(
    "hl-11-1-8",
    "11.1 · Chọn dạng đúng",
    "Lisa is in Germany. __________ there on a business trip. (She's / She's been)",
    "She's",
    {
      explanation: "Trạng thái đang đúng ở hiện tại (đang ở Đức) → present simple rút gọn: She's there on a business trip.",
    },
  ),
  grammarCloze(
    "hl-11-1-9",
    "11.1 · Chọn dạng đúng",
    "That's a very old bike. __________ it? (How long do you have / have you had)",
    "have you had",
    {
      explanation: "have theo nghĩa sở hữu, hỏi how long → present perfect simple: How long have you had it?",
    },
  ),
  grammarCloze(
    "hl-11-1-10",
    "11.1 · Chọn dạng đúng",
    "I'm not feeling good. __________ ill all day. (I'm feeling / I've been feeling)",
    "I've been feeling",
    {
      explanation: "all day (khoảng thời gian tiếp diễn) → present perfect continuous: I've been feeling ill all day.",
    },
  ),

  // 11.2 — Write questions using the words in brackets
  grammarCloze(
    "hl-11-2-2",
    "11.2 · Đặt câu hỏi how long",
    "You know that Jane is a good friend of Katherine's. You ask Jane: (how long / you / know / Katherine?) __________",
    "How long have you known Katherine?",
    {
      explanation: "know không dùng continuous → How long have you known Katherine?",
    },
  ),
  grammarCloze(
    "hl-11-2-3",
    "11.2 · Đặt câu hỏi how long",
    "Your friend's sister went to Australia some time ago and she's still there. You ask your friend: (how long / sister / in Australia?) __________",
    "How long has your sister been in Australia?",
    {
      explanation: "Trạng thái vẫn đúng ở hiện tại, hỏi how long → How long has your sister been in Australia?",
    },
  ),
  grammarCloze(
    "hl-11-2-5",
    "11.2 · Đặt câu hỏi how long",
    "Tom always wears the same jacket. It's very old. You ask him: (how long / you / have / that jacket?) __________",
    "How long have you had that jacket?",
    {
      explanation: "have (sở hữu) không dùng continuous → How long have you had that jacket?",
    },
  ),
  grammarCloze(
    "hl-11-2-6",
    "11.2 · Đặt câu hỏi how long",
    "You are talking to a friend about Joe, who now works at the airport. You ask your friend: (how long / Joe / work / airport?) __________",
    "How long has Joe been working at the airport?",
    {
      alternatives: ["How long has Joe worked at the airport?"],
      explanation: "work có thể dùng cả continuous hoặc simple → How long has Joe been working / worked at the airport?",
    },
  ),
  grammarCloze(
    "hl-11-2-7",
    "11.2 · Đặt câu hỏi how long",
    "You meet somebody on a plane. She says that she lives in Chicago. You ask her: (you / always / live / in Chicago?) __________",
    "Have you always lived in Chicago?",
    {
      explanation: "always đi cùng simple (không dùng continuous) → Have you always lived in Chicago?",
    },
  ),

  // 11.3 — Complete B's answers to A's questions
  grammarCloze(
    "hl-11-3-3",
    "11.3 · Hoàn thành câu trả lời",
    "Is Paul married? — Yes, he __________ married for ten years.",
    "'s been",
    {
      alternatives: ["'s been", "has been", "he's been", "he has been"],
      explanation: "Trạng thái kết hôn vẫn đúng, hỏi how long → he's been married for ten years.",
    },
  ),
  grammarCloze(
    "hl-11-3-5",
    "11.3 · Hoàn thành câu trả lời",
    "Do you still play tennis? — No, I __________ tennis for years.",
    "haven't played",
    {
      explanation: "Phủ định + for years → I haven't played tennis for years.",
    },
  ),
  grammarCloze(
    "hl-11-3-6",
    "11.3 · Hoàn thành câu trả lời",
    "Are you waiting for the bus? — Yes, I __________ for about 20 minutes.",
    "'ve been waiting",
    {
      alternatives: ["'ve been waiting", "have been waiting", "I've been waiting", "I have been waiting"],
      explanation: "Hoạt động vẫn tiếp diễn, hỏi how long → I've been waiting for about 20 minutes.",
    },
  ),
  grammarCloze(
    "hl-11-3-7",
    "11.3 · Hoàn thành câu trả lời",
    "You know Mel, don't you? — Yes, I __________ each other a long time.",
    "'ve known",
    {
      alternatives: ["'ve known", "have known", "we've known", "we have known"],
      explanation: "know là động từ trạng thái → We've known each other a long time.",
    },
  ),
  grammarCloze(
    "hl-11-3-11",
    "11.3 · Hoàn thành câu trả lời",
    "Is Joe watching TV? — Yes, he __________ TV all evening.",
    "'s been watching",
    {
      alternatives: ["'s been watching", "has been watching", "he's been watching", "he has been watching"],
      explanation: "all evening (khoảng thời gian tiếp diễn) → present perfect continuous: he's been watching TV all evening.",
    },
  ),
  grammarCloze(
    "hl-11-3-15",
    "11.3 · Hoàn thành câu trả lời",
    "Would you like to go to New York one day? — Yes, I __________ to go to New York. (use always / want)",
    "'ve always wanted",
    {
      alternatives: ["'ve always wanted", "have always wanted", "I've always wanted", "I have always wanted"],
      explanation: "want đi cùng always → dùng simple (không continuous): I've always wanted to go to New York.",
    },
  ),
];
