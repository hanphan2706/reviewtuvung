import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 6 exercises — Past continuous (English Grammar in Use · Intermediate).
 * Bài 6.1 gốc chọn từ danh sách cho sẵn — giữ nguyên các câu, chuyển thành cloze
 * theo từng câu độc lập với gợi ý động từ trong ngoặc.
 */
export const U06_PAST_CONTINUOUS_EXERCISES: readonly GrammarExercise[] = [
  // 6.1 — Choose the correct past continuous form
  grammarCloze(
    "u06-6-1-1",
    "6.1 · Hoàn thành câu",
    "'What did he say?' 'I don't know. __________ (I / not / listen).'",
    "I wasn't listening",
    {
      alternatives: ["I was not listening"],
      explanation: "Hành động (không) đang diễn ra tại thời điểm đó → phủ định past continuous: wasn't listening.",
    },
  ),
  grammarCloze(
    "u06-6-1-2",
    "6.1 · Hoàn thành câu",
    "We __________ (sit) at the back of the theatre. We couldn't hear very well.",
    "were sitting",
    {
      explanation: "Trạng thái đang diễn ra tại thời điểm trong quá khứ → past continuous: were sitting.",
    },
  ),
  grammarCloze(
    "u06-6-1-3",
    "6.1 · Hoàn thành câu",
    "This time last year Steve __________ (work) on a farm.",
    "was working",
    {
      explanation: "'this time last year' chỉ thời điểm cụ thể trong quá khứ, hành động đang diễn ra → was working.",
    },
  ),
  grammarCloze(
    "u06-6-1-4",
    "6.1 · Hoàn thành câu",
    "They didn't see me. __________ (they / not / look) in my direction.",
    "They weren't looking",
    {
      alternatives: ["They were not looking"],
      explanation: "Lý do họ không thấy: đang không nhìn về phía đó tại thời điểm đó → weren't looking.",
    },
  ),
  grammarCloze(
    "u06-6-1-5",
    "6.1 · Hoàn thành câu",
    "The weather was bad. It was very cold and __________ (it / snow).",
    "it was snowing",
    {
      explanation: "Hiện tượng thời tiết đang diễn ra tại thời điểm đó → past continuous: was snowing.",
    },
  ),
  grammarCloze(
    "u06-6-1-6",
    "6.1 · Hoàn thành câu",
    "I saw you in your car. __________ (where / you / go)?",
    "where were you going",
    {
      alternatives: ["Where were you going", "Where were you going?"],
      explanation: "Hỏi về hành động đang diễn ra tại thời điểm nhìn thấy → Where were you going?",
    },
  ),
  grammarCloze(
    "u06-6-1-7",
    "6.1 · Hoàn thành câu",
    "I saw Kate a few minutes ago. She __________ (look) for you.",
    "was looking",
    {
      explanation: "Hành động đang diễn ra tại thời điểm gặp Kate → was looking.",
    },
  ),

  // 6.3 — A short narrative: past continuous vs past simple
  grammarCloze(
    "u06-6-3-1",
    "6.3 · Câu chuyện của Sue",
    "I saw Sue in town yesterday, but she __________ (not / see) me.",
    "didn't see",
    {
      alternatives: ["did not see"],
      explanation: "Hành động hoàn tất, sự thật đơn giản (không nhìn thấy) → past simple: didn't see.",
    },
  ),
  grammarCloze(
    "u06-6-3-2",
    "6.3 · Câu chuyện của Sue",
    "She __________ (look) the other way.",
    "was looking",
    {
      explanation: "Lý do cô ấy không thấy tôi: đang nhìn hướng khác tại thời điểm đó → was looking.",
    },
  ),
  grammarCloze(
    "u06-6-3-3",
    "6.3 · Câu chuyện của Sue",
    "I __________ (cycle) home yesterday when a man stepped out into the road in front of me.",
    "was cycling",
    {
      explanation: "Bối cảnh đang diễn ra khi việc khác (past simple) xảy ra ở giữa → was cycling.",
    },
  ),
  grammarCloze(
    "u06-6-3-4",
    "6.3 · Câu chuyện của Sue",
    "I was going quite fast, but luckily I __________ (manage) to stop in time, and I didn't hit him.",
    "managed",
    {
      explanation: "Hành động hoàn tất, xảy ra một lần → past simple: managed.",
    },
  ),

  // 6.4 — Past continuous or past simple
  grammarCloze(
    "u06-6-4-1",
    "6.4 · Continuous hay simple",
    "'__________ (you / go) out last night?' 'No, I was too tired.'",
    "Did you go",
    {
      alternatives: ["Did you go?"],
      explanation: "Hỏi về việc đã xảy ra hay chưa (đơn giản, trọn vẹn) → past simple: Did you go.",
    },
  ),
  grammarCloze(
    "u06-6-4-2",
    "6.4 · Continuous hay simple",
    "How fast __________ (you / drive) when the accident happened?",
    "were you driving",
    {
      alternatives: ["were you driving?"],
      explanation: "Hành động đang diễn ra tại thời điểm sự việc khác xảy ra → past continuous: were you driving.",
    },
  ),
  grammarCloze(
    "u06-6-4-3",
    "6.4 · Continuous hay simple",
    "Sam took a picture of me while __________ (I / not / look).",
    "I wasn't looking",
    {
      alternatives: ["I was not looking"],
      explanation: "'while' + hành động đang diễn ra (bối cảnh) → past continuous: wasn't looking.",
    },
  ),
  grammarCloze(
    "u06-6-4-4",
    "6.4 · Continuous hay simple",
    "We were in a very difficult position. __________ (we / not / know) what to do, so we did nothing.",
    "We didn't know",
    {
      alternatives: ["We did not know"],
      explanation: "know là động từ trạng thái, không dùng continuous → past simple: didn't know.",
    },
  ),
  grammarCloze(
    "u06-6-4-5",
    "6.4 · Continuous hay simple",
    "I haven't seen Alan for ages. When I last saw him, he __________ (try) to find a job.",
    "was trying",
    {
      explanation: "Bối cảnh đang diễn ra tại thời điểm 'khi tôi gặp anh ấy lần cuối' → was trying.",
    },
  ),
  grammarCloze(
    "u06-6-4-6",
    "6.4 · Continuous hay simple",
    "When I was young, I __________ (want) to be a pilot. Later I changed my mind.",
    "wanted",
    {
      explanation: "want là động từ trạng thái, không dùng continuous → past simple: wanted.",
    },
  ),
  grammarCloze(
    "u06-6-4-7",
    "6.4 · Continuous hay simple",
    "Last night I __________ (drop) a plate when I was doing the washing up. Fortunately it didn't break.",
    "dropped",
    {
      explanation: "Hành động xảy ra một lần, xen giữa hành động khác đang diễn ra → past simple: dropped.",
    },
  ),
];
