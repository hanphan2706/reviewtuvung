import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 1 exercises — Present continuous (English Grammar in Use · Intermediate).
 * Bài 1.1 gốc dựa vào tranh minh họa; ở đây chuyển thành mô tả tình huống bằng chữ
 * (không cần xem tranh) nhưng vẫn giữ đúng động từ và đáp án của sách.
 */
export const U01_PRESENT_CONTINUOUS_EXERCISES: readonly GrammarExercise[] = [
  // 1.1 — Situational description cloze (replaces picture exercise)
  grammarCloze(
    "u01-1-1-1",
    "1.1 · Mô tả tình huống",
    "A man's shoe has come undone. He stops walking and bends down. He __________ (tie) his shoelace.",
    "is tying",
    {
      alternatives: ["He is tying", "'s tying", "He's tying"],
      explanation: "Hành động đang diễn ra ngay lúc quan sát → am/is/are + V-ing. tie → tying.",
    },
  ),
  grammarCloze(
    "u01-1-1-2",
    "1.1 · Mô tả tình huống",
    "Two friends want to get to the shop on the other side. They look both ways, then they __________ (cross) the road.",
    "are crossing",
    {
      alternatives: ["They are crossing", "'re crossing", "They're crossing"],
      explanation: "Hành động đang xảy ra ngay lúc nói → are crossing (cross + -ing).",
    },
  ),
  grammarCloze(
    "u01-1-1-3",
    "1.1 · Mô tả tình huống",
    "A boy's head is itchy. He __________ (scratch) his head.",
    "is scratching",
    {
      alternatives: ["He is scratching", "'s scratching", "He's scratching"],
      explanation: "scratch + -ing = scratching; is đi với chủ ngữ he/she/it.",
    },
  ),
  grammarCloze(
    "u01-1-1-4",
    "1.1 · Mô tả tình huống",
    "A woman doesn't want anyone to see her, so she __________ (hide) behind a tree.",
    "is hiding",
    {
      alternatives: ["She is hiding", "'s hiding", "She's hiding"],
      explanation: "hide bỏ 'e' trước -ing: hide → hiding.",
    },
  ),
  grammarCloze(
    "u01-1-1-5",
    "1.1 · Mô tả tình huống",
    "Some people on the platform see their friend arriving on the train. They __________ (wave) to her.",
    "are waving",
    {
      alternatives: ["They are waving", "'re waving", "They're waving"],
      explanation: "wave + -ing = waving; chủ ngữ số nhiều dùng are.",
    },
  ),

  // 1.2 — Cause/effect pairs rebuilt as cloze (no image needed)
  grammarCloze(
    "u01-1-2-1",
    "1.2 · Nối tình huống",
    "I don't have anywhere to live right now. I __________ (stay) with friends.",
    "'m staying",
    {
      alternatives: ["am staying", "I'm staying", "I am staying"],
      explanation: "Tình huống tạm thời quanh hiện tại → present continuous: stay → staying.",
    },
  ),
  grammarCloze(
    "u01-1-2-2",
    "1.2 · Nối tình huống",
    "They don't need their car any more. They __________ (try) to sell it.",
    "'re trying",
    {
      alternatives: ["are trying", "They're trying", "They are trying"],
      explanation: "Hành động đang trong quá trình thực hiện (chưa bán được) → are trying.",
    },
  ),
  grammarCloze(
    "u01-1-2-3",
    "1.2 · Nối tình huống",
    "Things are not so good at work. The company __________ (lose) money.",
    "is losing",
    {
      alternatives: ["The company is losing"],
      explanation: "Xu hướng/thay đổi đang diễn ra ở hiện tại → is losing (lose bỏ 'e' + -ing).",
    },
  ),

  // 1.3 — Write questions using the present continuous
  grammarCloze(
    "u01-1-3-1",
    "1.3 · Đặt câu hỏi",
    "What's the matter? __________ (why / you / cry)?",
    "Why are you crying",
    {
      alternatives: ["Why are you crying?"],
      explanation: "Câu hỏi Wh- + am/is/are + S + V-ing: Why are you crying?",
    },
  ),
  grammarCloze(
    "u01-1-3-2",
    "1.3 · Đặt câu hỏi",
    "Where's your mother? __________ (she / work / today)?",
    "Is she working today",
    {
      alternatives: ["Is she working today?"],
      explanation: "Câu hỏi Yes/No với present continuous: Is + S + V-ing?",
    },
  ),
  grammarCloze(
    "u01-1-3-3",
    "1.3 · Đặt câu hỏi",
    "I haven't seen you for ages. __________ (what / you / do / these days)?",
    "What are you doing these days",
    {
      alternatives: ["What are you doing these days?"],
      explanation: "What + are you + V-ing + these days? — hỏi về việc đang làm trong giai đoạn hiện tại.",
    },
  ),
  grammarCloze(
    "u01-1-3-4",
    "1.3 · Đặt câu hỏi",
    "Amy is a student. __________ (what / she / study)?",
    "What is she studying",
    {
      alternatives: ["What is she studying?", "What's she studying", "What's she studying?"],
      explanation: "What + is + she + studying? hỏi về việc đang theo học hiện tại.",
    },
  ),
  grammarCloze(
    "u01-1-3-5",
    "1.3 · Đặt câu hỏi",
    "I heard you started a new job. __________ (you / enjoy / it)?",
    "Are you enjoying it",
    {
      alternatives: ["Are you enjoying it?"],
      explanation: "enjoy có thể dùng continuous để hỏi cảm nhận trong giai đoạn hiện tại: Are you enjoying it?",
    },
  ),
  grammarCloze(
    "u01-1-3-6",
    "1.3 · Đặt câu hỏi",
    "We're not in a hurry. __________ (why / you / walk / so fast)?",
    "Why are you walking so fast",
    {
      alternatives: ["Why are you walking so fast?"],
      explanation: "Why + are you + walking + so fast? — hành động đang diễn ra ngay lúc nói.",
    },
  ),

  // 1.4 — Positive or negative present continuous
  grammarCloze(
    "u01-1-4-1",
    "1.4 · Khẳng định / phủ định",
    "You can turn off the radio. __________ (I / listen) to it.",
    "I'm not listening",
    {
      alternatives: ["I am not listening", "I'm not listening to it", "I am not listening to it"],
      explanation: "Phủ định present continuous: am/is/are + not + V-ing.",
    },
  ),
  grammarCloze(
    "u01-1-4-2",
    "1.4 · Khẳng định / phủ định",
    "Kate phoned last night. She's on holiday with friends. __________ (she / have) a great time and doesn't want to come back.",
    "She's having",
    {
      alternatives: ["She is having", "She's having a great time", "She is having a great time"],
      explanation: "Tình huống tạm thời đang diễn ra (đang đi nghỉ) → present continuous: have → having.",
    },
  ),
  grammarCloze(
    "u01-1-4-3",
    "1.4 · Khẳng định / phủ định",
    "Andrew started evening classes recently. __________ (he / learn) Japanese.",
    "He's learning",
    {
      alternatives: ["He is learning", "He's learning Japanese", "He is learning Japanese"],
      explanation: "Việc mới bắt đầu, đang tiếp diễn trong giai đoạn hiện tại → is learning.",
    },
  ),
  grammarCloze(
    "u01-1-4-4",
    "1.4 · Khẳng định / phủ định",
    "Paul and Sarah have had an argument and now __________ (they / speak) to one another.",
    "they aren't speaking",
    {
      alternatives: [
        "they're not speaking",
        "they are not speaking",
        "They aren't speaking",
        "They're not speaking",
        "They are not speaking",
      ],
      explanation: "Tình huống tạm thời hiện tại (đang giận nhau) ở dạng phủ định: aren't speaking.",
    },
  ),
  grammarCloze(
    "u01-1-4-5",
    "1.4 · Khẳng định / phủ định",
    "The situation is already very bad and now __________ (it / get) worse.",
    "it's getting",
    {
      alternatives: ["it is getting", "It's getting", "It is getting"],
      explanation: "Xu hướng thay đổi tiếp diễn ở hiện tại → is getting worse.",
    },
  ),
  grammarCloze(
    "u01-1-4-6",
    "1.4 · Khẳng định / phủ định",
    "Ben is a student, but he's not very happy. __________ (he / enjoy) his course.",
    "He's not enjoying",
    {
      alternatives: [
        "He isn't enjoying",
        "He is not enjoying",
        "He's not enjoying his course",
        "He isn't enjoying his course",
      ],
      explanation: "Cảm nhận tiêu cực trong giai đoạn hiện tại → phủ định continuous: not enjoying.",
    },
  ),
];
