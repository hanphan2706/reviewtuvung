import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 9 exercises — Present perfect continuous (English Grammar in Use · Intermediate).
 * 9.1 dùng tranh minh họa trong sách gốc — ở đây được viết lại thành tình huống
 * văn bản (situational text prompts) để giữ nguyên mục tiêu ngữ pháp.
 */
export const PRESENT_PERFECT_CONTINUOUS_EXERCISES: readonly GrammarExercise[] = [
  // 9.1 — What have these people been doing? (chuyển từ tranh sang tình huống văn bản)
  grammarCloze(
    "ppc-9-1-2",
    "9.1 · Chuyện gì đang/đã xảy ra?",
    "Mark has been sitting in front of the TV all afternoon and it's still on. What has he been doing? He __________.",
    "'s been watching TV",
    {
      alternatives: [
        "'s been watching TV",
        "has been watching TV",
        "He's been watching TV",
        "He has been watching TV",
        "He's been watching television",
      ],
      explanation: "Hoạt động vừa/đang diễn ra, thấy rõ kết quả (TV vẫn mở) → He's been watching TV.",
    },
  ),
  grammarCloze(
    "ppc-9-1-3",
    "9.1 · Chuyện gì đang/đã xảy ra?",
    "Two friends look hot and tired, holding tennis racquets and a ball. What have they been doing? They __________.",
    "'ve been playing tennis",
    {
      alternatives: [
        "'ve been playing tennis",
        "have been playing tennis",
        "They've been playing tennis",
        "They have been playing tennis",
      ],
      explanation: "Kết quả (mệt, cầm vợt) cho thấy hoạt động vừa xảy ra → They've been playing tennis.",
    },
  ),
  grammarCloze(
    "ppc-9-1-4",
    "9.1 · Chuyện gì đang/đã xảy ra?",
    "A man is out of breath, wiping sweat from his forehead near the park path. What has he been doing? He __________.",
    "'s been running",
    {
      alternatives: ["'s been running", "has been running", "He's been running", "He has been running"],
      explanation: "Thở hổn hển, đổ mồ hôi → hoạt động vừa dừng → He's been running.",
    },
  ),

  // 9.2 — Write a question for each situation
  grammarCloze(
    "ppc-9-2-2",
    "9.2 · Đặt câu hỏi",
    "I'm sorry I'm late, Ben. (you / wait / long?) __________",
    "Have you been waiting long?",
    {
      explanation: "Hỏi hoạt động đã kéo dài bao lâu tính đến lúc này → Have you been waiting long?",
    },
  ),
  grammarCloze(
    "ppc-9-2-3",
    "9.2 · Đặt câu hỏi",
    "Jane's little boy comes into the house with a very dirty face and dirty hands. His mother says: Why are you so dirty? (what / you / do?) __________",
    "What have you been doing?",
    {
      explanation: "Hỏi nguyên nhân của kết quả hiện tại (mặt bẩn) → What have you been doing?",
    },
  ),
  grammarCloze(
    "ppc-9-2-4",
    "9.2 · Đặt câu hỏi",
    "You are in a shop and see Anna. You didn't know she worked there. You say: Hi, Anna. (how long / you / work / here?) __________",
    "How long have you been working here?",
    {
      explanation: "how long + present perfect continuous cho việc vẫn tiếp diễn → How long have you been working here?",
    },
  ),
  grammarCloze(
    "ppc-9-2-5",
    "9.2 · Đặt câu hỏi",
    "A friend tells you about his job – he sells phones. You say: You sell phones? (how long / you / do / that?) __________",
    "How long have you been doing that?",
    {
      explanation: "Hỏi khoảng thời gian một hoạt động lặp lại đã diễn ra → How long have you been doing that?",
    },
  ),

  // 9.3 — Read the situations and complete the sentences
  grammarCloze(
    "ppc-9-3-2",
    "9.3 · Hoàn thành câu",
    "We are waiting for the bus. We started waiting 20 minutes ago. We __________ for 20 minutes.",
    "'ve been waiting",
    {
      alternatives: ["'ve been waiting", "have been waiting", "We've been waiting", "We have been waiting"],
      explanation: "Hoạt động vẫn tiếp diễn tính đến hiện tại → We've been waiting for 20 minutes.",
    },
  ),
  grammarCloze(
    "ppc-9-3-3",
    "9.3 · Hoàn thành câu",
    "I'm learning Japanese. I started classes in December. I __________ Japanese since December.",
    "'ve been learning",
    {
      alternatives: ["'ve been learning", "have been learning", "I've been learning", "I have been learning"],
      explanation: "since + điểm mốc bắt đầu, việc vẫn tiếp diễn → I've been learning Japanese since December.",
    },
  ),
  grammarCloze(
    "ppc-9-3-4",
    "9.3 · Hoàn thành câu",
    "Jessica is working in a hotel. She started working there on 18 January. She __________ there since 18 January.",
    "'s been working",
    {
      alternatives: ["'s been working", "has been working", "She's been working", "She has been working"],
      explanation: "since 18 January (điểm mốc bắt đầu) → She's been working there since 18 January.",
    },
  ),
  grammarCloze(
    "ppc-9-3-5",
    "9.3 · Hoàn thành câu",
    "Our friends always go to Italy for their holidays. The first time was years ago. They __________ there for years.",
    "'ve been going",
    {
      alternatives: [
        "'ve been going",
        "have been going",
        "They've been going",
        "They have been going",
        "They've been going to Italy",
      ],
      explanation: "Hành động lặp lại nhiều lần tính đến hiện tại → They've been going there for years.",
    },
  ),

  // 9.4 — Present continuous or present perfect continuous
  grammarCloze(
    "ppc-9-4-2",
    "9.4 · Present continuous hay present perfect continuous?",
    "Hi, Tom. (I / look) __________ for you. I need to ask you something.",
    "I've been looking",
    {
      alternatives: ["I have been looking"],
      explanation: "Hoạt động đã kéo dài tính đến hiện tại → I've been looking for you.",
    },
  ),
  grammarCloze(
    "ppc-9-4-3",
    "9.4 · Present continuous hay present perfect continuous?",
    "Why __________ at me like that? Stop it! (you / look)",
    "are you looking",
    {
      explanation: "Hành động đang diễn ra ngay lúc nói → present continuous: are you looking.",
    },
  ),
  grammarCloze(
    "ppc-9-4-4",
    "9.4 · Present continuous hay present perfect continuous?",
    "Rachel is a teacher. (she / teach) __________ for ten years.",
    "She's been teaching",
    {
      alternatives: ["She has been teaching", "'s been teaching", "has been teaching"],
      explanation: "for ten years → hoạt động kéo dài, vẫn đúng đến hiện tại → She's been teaching.",
    },
  ),
  grammarCloze(
    "ppc-9-4-5",
    "9.4 · Present continuous hay present perfect continuous?",
    "(I / think) __________ about what you said and I've decided to take your advice.",
    "I've been thinking",
    {
      alternatives: ["I have been thinking"],
      explanation: "Hoạt động vừa diễn ra trong một khoảng thời gian trước khi đưa ra quyết định → I've been thinking.",
    },
  ),
  grammarCloze(
    "ppc-9-4-7",
    "9.4 · Present continuous hay present perfect continuous?",
    "Sarah is very tired. (she / work) __________ very hard recently.",
    "She's been working",
    {
      alternatives: ["She has been working", "'s been working", "has been working"],
      explanation: "recently → hoạt động gần đây vẫn còn ảnh hưởng đến hiện tại → She's been working very hard.",
    },
  ),
  grammarCloze(
    "ppc-9-4-9",
    "9.4 · Present continuous hay present perfect continuous?",
    "Laura __________ in South America for the last three months. (travel)",
    "has been travelling",
    {
      alternatives: ["'s been travelling", "she's been travelling"],
      explanation: "for the last three months → hoạt động kéo dài đến hiện tại → has been travelling.",
    },
  ),
];
