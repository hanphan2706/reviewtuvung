import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 24 exercises — Will be doing and will have done (English Grammar in Use · Intermediate).
 * Includes situational prompts inspired by the book's cinema-queue picture and Andy's daily routine,
 * plus the core drills from 24.2–24.3. Primary answers follow the book; alternatives cover contractions.
 */
export const U24_WILL_BE_DOING_AND_WILL_HAVE_DONE_EXERCISES: readonly GrammarExercise[] = [
  // Situational — cinema queue picture (half an hour / three hours from now)
  grammarCloze(
    "u24-sit-1",
    "Tình huống · Hàng người vào rạp",
    "Mọi người đang xếp hàng để vào rạp chiếu phim. Nửa giờ nữa rạp sẽ đầy khách và mọi người __________ (watch) bộ phim.",
    "will be watching",
    {
      alternatives: ["'ll be watching"],
      explanation: "Đang ở giữa hành động tại một thời điểm trong tương lai (nửa giờ nữa) → future continuous: will be watching.",
    },
  ),
  grammarCloze(
    "u24-sit-2",
    "Tình huống · Hàng người vào rạp",
    "Ba giờ nữa, rạp sẽ trống vì bộ phim __________ (finish) rồi.",
    "will have finished",
    {
      alternatives: ["'ll have finished"],
      explanation: "Hành động hoàn tất trước một thời điểm trong tương lai (ba giờ nữa) → future perfect: will have finished.",
    },
  ),
  grammarCloze(
    "u24-sit-3",
    "Tình huống · Hàng người vào rạp",
    "Lúc đó, mọi người cũng __________ (go) home rồi.",
    "will have gone",
    {
      alternatives: ["'ll have gone"],
      explanation: "Hành động (về nhà) đã hoàn tất trước thời điểm nêu ra → will have gone home.",
    },
  ),
  grammarCloze(
    "u24-sit-4",
    "Tình huống · Lịch trình hằng ngày của Andy",
    "Andy luôn bắt đầu làm việc lúc 8.45 và nghỉ trưa lúc 12.30. Ngày mai cũng theo đúng lịch trình đó. Vậy vào lúc 9.15, Andy __________ (work).",
    "will be working",
    {
      alternatives: ["'ll be working"],
      explanation: "9.15 nằm giữa khoảng thời gian làm việc (8.45–12.30) → đang ở giữa hành động: will be working.",
    },
  ),
  grammarCloze(
    "u24-sit-5",
    "Tình huống · Lịch trình hằng ngày của Andy",
    "Andy luôn về nhà đúng lúc 4.30 chiều. Vậy vào lúc 4.45, Andy chắc chắn __________ (leave) work rồi.",
    "will have left",
    {
      alternatives: ["'ll have left"],
      explanation: "4.45 muộn hơn giờ về (4.30) → hành động đã hoàn tất trước thời điểm đó: will have left work.",
    },
  ),

  // 24.2 — Complete the sentences (given verbs)
  grammarCloze(
    "u24-2-2",
    "24.2 · will be doing",
    "I'll __________ later. Can I get you anything?",
    "be going",
    {
      alternatives: ["be going shopping"],
      explanation: "Kế hoạch/hành động đã định trong tương lai (đi mua sắm) → I'll be going shopping.",
    },
  ),
  grammarCloze(
    "u24-2-3",
    "24.2 · will be doing",
    "Emily is not well, so she __________ volleyball tomorrow.",
    "won't be playing",
    {
      alternatives: ["will not be playing"],
      explanation: "Dự đoán/thông báo về việc không tham gia trong tương lai → she won't be playing volleyball.",
    },
  ),
  grammarCloze(
    "u24-2-4",
    "24.2 · will be doing",
    "Little Emma __________ school soon. She's growing up fast.",
    "will be starting",
    {
      alternatives: ["'ll be starting"],
      explanation: "Việc đã được dự tính diễn ra trong tương lai gần → will be starting school soon.",
    },
  ),
  grammarCloze(
    "u24-2-5",
    "24.2 · will be doing",
    "The match is on TV tonight. Will you __________ it?",
    "be watching",
    {
      explanation: "Hỏi về kế hoạch/hành động trong tương lai → Will you be watching it?",
    },
  ),
  grammarCloze(
    "u24-2-6",
    "24.2 · will be doing",
    "What __________ in your new job? The same as before?",
    "will you be doing",
    {
      explanation: "Hỏi về công việc sẽ đang làm trong tương lai → What will you be doing in your new job?",
    },
  ),
  grammarCloze(
    "u24-2-7",
    "24.2 · will be doing",
    "I __________ to the wedding. I'll be away on holiday.",
    "won't be going",
    {
      alternatives: ["will not be going"],
      explanation: "Thông báo về việc không tham dự do đang đi nghỉ → I won't be going to the wedding.",
    },
  ),
  grammarCloze(
    "u24-2-8",
    "24.2 · will be doing",
    "Please fasten your seat belts. The plane __________ in ten minutes.",
    "will be landing",
    {
      explanation: "Hành động đã được lên kế hoạch/lịch trình sắp diễn ra → The plane will be landing in ten minutes.",
    },
  ),

  // 24.3 — will be (do)ing or will have (done)
  grammarCloze(
    "u24-3-2",
    "24.3 · will be doing / will have done",
    "Tomorrow afternoon we're going to play tennis from 3 o'clock until 4.30. So at 4 o'clock, __________ tennis.",
    "we'll be playing",
    {
      alternatives: ["we will be playing"],
      explanation: "4 giờ nằm giữa khoảng thời gian chơi (3.00–4.30) → đang ở giữa hành động: we'll be playing tennis.",
    },
  ),
  grammarCloze(
    "u24-3-3",
    "24.3 · will be doing / will have done",
    "Sarah will meet you at the station. __________ for you when you arrive.",
    "She'll be waiting",
    {
      alternatives: ["She will be waiting"],
      explanation: "Sarah sẽ đang chờ (ở giữa hành động) lúc bạn tới → She'll be waiting for you.",
    },
  ),
  grammarCloze(
    "u24-3-4",
    "24.3 · will be doing / will have done",
    "The meeting starts at 9.30 and won't last longer than an hour. You can be sure that __________ by 11 o'clock.",
    "it will have finished",
    {
      alternatives: ["it will be finished", "it'll have finished"],
      explanation: "Cuộc họp chắc chắn hoàn tất trước 11 giờ → future perfect: it will have finished.",
    },
  ),
  grammarCloze(
    "u24-3-5",
    "24.3 · will be doing / will have done",
    "Do you think __________ in the same place in ten years' time?",
    "you'll still be living",
    {
      alternatives: ["you will still be living"],
      explanation: "Hỏi về tình trạng đang tiếp diễn tại một thời điểm xa trong tương lai → you'll still be living.",
    },
  ),
  grammarCloze(
    "u24-3-6",
    "24.3 · will be doing / will have done",
    "Lisa is travelling in Europe and so far she has travelled about 1,000 miles. By the end of the trip, __________ more than 3,000 miles.",
    "she'll have travelled",
    {
      alternatives: ["she will have travelled"],
      explanation: "Hành động hoàn tất trước một mốc trong tương lai (kết thúc chuyến đi) → future perfect.",
    },
  ),
  grammarCloze(
    "u24-3-7",
    "24.3 · will be doing / will have done",
    "If you need to contact me, __________ at the Lion Hotel until Friday.",
    "I'll be staying",
    {
      alternatives: ["I will be staying"],
      explanation: "Tình trạng sẽ đang tiếp diễn (đang ở khách sạn) tới thứ Sáu → I'll be staying.",
    },
  ),
  grammarCloze(
    "u24-3-8",
    "24.3 · will be doing / will have done",
    "Ben is on holiday and is spending his money very quickly. If he continues like this, __________ all his money before the end of his holiday.",
    "he'll have spent",
    {
      alternatives: ["he will have spent"],
      explanation: "Hành động (chi tiêu hết tiền) hoàn tất trước một mốc trong tương lai → future perfect.",
    },
  ),
];
