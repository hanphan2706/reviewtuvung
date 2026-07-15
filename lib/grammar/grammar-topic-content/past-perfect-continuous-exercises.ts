import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 16 exercises — Past perfect continuous (English Grammar in Use · Intermediate).
 */
export const PAST_PERFECT_CONTINUOUS_EXERCISES: readonly GrammarExercise[] = [
  // 16.1 — Make sentences using the words in brackets
  grammarCloze(
    "pastperfc-16-1-2",
    "16.1 · Viết câu với past perfect continuous",
    "The children came into the house. They had a football and they were both very tired. (They / play / football) __________",
    "They'd been playing football",
    {
      alternatives: ["They had been playing football"],
      explanation: "Hoạt động (chơi bóng) xảy ra ngay trước mốc 'came into the house' → past perfect continuous.",
    },
  ),
  grammarCloze(
    "pastperfc-16-1-3",
    "16.1 · Viết câu với past perfect continuous",
    "I was disappointed when I had to cancel my holiday. (I / look / forward to it) __________",
    "I'd been looking forward to it",
    {
      alternatives: ["I had been looking forward to it"],
      explanation: "Cảm giác mong chờ đã diễn ra trước khi phải hủy → past perfect continuous.",
    },
  ),
  grammarCloze(
    "pastperfc-16-1-4",
    "16.1 · Viết câu với past perfect continuous",
    "Anna woke up in the middle of the night. She was frightened and didn't know where she was. (She / have / a bad dream) __________",
    "She'd been having a bad dream",
    {
      alternatives: ["She had been having a bad dream"],
      explanation: "Việc mơ đã xảy ra trước khi tỉnh dậy hoảng loạn → past perfect continuous.",
    },
  ),
  grammarCloze(
    "pastperfc-16-1-5",
    "16.1 · Viết câu với past perfect continuous",
    "When I got home, Mark was sitting in front of the TV. He had just turned it off. (He / watch / a film) __________",
    "He'd been watching a film",
    {
      alternatives: ["He had been watching a film"],
      explanation: "Hoạt động xem phim vừa dừng trước mốc 'when I got home' → past perfect continuous.",
    },
  ),
  grammarCloze(
    "pastperfc-16-1-6",
    "16.1 · Viết câu với past perfect continuous",
    "The people waiting at the bus stop were getting impatient. The bus was very late. (They / wait / a long time) __________",
    "They'd been waiting a long time",
    {
      alternatives: ["They had been waiting a long time"],
      explanation: "Hoạt động chờ đợi đã kéo dài trước mốc quan sát → past perfect continuous.",
    },
  ),

  // 16.2 — Complete the sentences
  grammarCloze(
    "pastperfc-16-2-1",
    "16.2 · Hoàn thành câu",
    "We played tennis yesterday. We didn't finish our game. We'd been playing (We / play) for half an hour when it __________ to rain. (start)",
    "started",
    {
      explanation: "'started' là sự kiện xảy ra sau khoảng thời gian chơi tennis → past simple: started.",
    },
  ),
  grammarCloze(
    "pastperfc-16-2-2a",
    "16.2 · Hoàn thành câu",
    "I had arranged to meet Tom in a restaurant. I arrived and waited for him to come. __________ for 20 minutes when I realised that I was in the wrong restaurant. (I / wait)",
    "I'd been waiting",
    {
      alternatives: ["I had been waiting"],
      explanation: "Hoạt động chờ đã kéo dài trước khi nhận ra sai chỗ → past perfect continuous.",
    },
  ),
  grammarCloze(
    "pastperfc-16-2-3",
    "16.2 · Hoàn thành câu",
    "Sarah worked in a company for a long time. The company no longer exists. At the time the company went out of business, Sarah __________ there for twelve years. (work)",
    "had been working",
    {
      explanation: "Hoạt động làm việc kéo dài trước mốc 'went out of business' → past perfect continuous.",
    },
  ),
  grammarCloze(
    "pastperfc-16-2-4",
    "16.2 · Hoàn thành câu",
    "I went to a concert. The orchestra __________ for about ten minutes when a man in the audience suddenly started shouting. (play)",
    "had been playing",
    {
      explanation: "Hoạt động chơi nhạc đã kéo dài trước khi người đó bắt đầu la hét → past perfect continuous.",
    },
  ),

  // 16.3 — Which is right?
  grammarCloze(
    "pastperfc-16-3-2",
    "16.3 · Chọn dạng đúng",
    "At the end of our journey we were extremely tired. __________ for more than 24 hours. (We were travelling / We'd been travelling)",
    "We'd been travelling",
    {
      explanation: "Hoạt động du lịch đã kéo dài trước mốc 'at the end of our journey' → past perfect continuous.",
    },
  ),
  grammarCloze(
    "pastperfc-16-3-3",
    "16.3 · Chọn dạng đúng",
    "James was on his hands and knees on the floor. __________ for his contact lens. (He was looking / He'd been looking)",
    "He was looking",
    {
      explanation: "Hành động đang diễn ra tại mốc đó (đang tìm) → past continuous: He was looking.",
    },
  ),
  grammarCloze(
    "pastperfc-16-3-4",
    "16.3 · Chọn dạng đúng",
    "Sue was sitting on the ground. She was out of breath. __________. (She was running / She'd been running)",
    "She'd been running",
    {
      explanation: "Hoạt động chạy đã xảy ra trước mốc 'was sitting, out of breath' → past perfect continuous.",
    },
  ),
  grammarCloze(
    "pastperfc-16-3-5",
    "16.3 · Chọn dạng đúng",
    "John and I went for a walk. __________ very fast and I had difficulty keeping up with him. (He was walking / He'd been walking)",
    "He was walking",
    {
      explanation: "Hành động đang diễn ra song song (walking fast trong lúc đi bộ) → past continuous: He was walking.",
    },
  ),
  grammarCloze(
    "pastperfc-16-3-6",
    "16.3 · Chọn dạng đúng",
    "I was sad when I sold my car. __________ for a very long time. (I've had it / I'd had it)",
    "I'd had it",
    {
      explanation: "Mốc 'when I sold my car' ở quá khứ → past perfect: I'd had it for a very long time.",
    },
  ),
  grammarCloze(
    "pastperfc-16-3-9",
    "16.3 · Chọn dạng đúng",
    "I had arranged to meet Kate, but I was late. When I finally arrived, __________ such a long time. (she was waiting / she'd been waiting)",
    "she'd been waiting",
    {
      explanation: "Hoạt động chờ đã kéo dài trước mốc 'I finally arrived' → past perfect continuous.",
    },
  ),
];
