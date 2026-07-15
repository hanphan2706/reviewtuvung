import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 15 exercises — Past perfect (English Grammar in Use · Intermediate).
 */
export const PAST_PERFECT_EXERCISES: readonly GrammarExercise[] = [
  // 15.1 — Read the situations and write sentences
  grammarCloze(
    "pastperf-15-1-3",
    "15.1 · Viết câu với past perfect",
    "You went back to your home town recently after many years. It wasn't the same as before. (It / change / a lot) It __________.",
    "had changed a lot",
    {
      explanation: "Sự thay đổi đã xảy ra trước khi bạn quay lại (mốc quá khứ) → past perfect: It had changed a lot.",
    },
  ),
  grammarCloze(
    "pastperf-15-1-4",
    "15.1 · Viết câu với past perfect",
    "Somebody sang a song. You didn't know it. (I / not / hear / it / before) I __________.",
    "hadn't heard it before",
    {
      explanation: "Việc chưa từng nghe xảy ra trước mốc 'somebody sang' → past perfect: I hadn't heard it before.",
    },
  ),
  grammarCloze(
    "pastperf-15-1-5",
    "15.1 · Viết câu với past perfect",
    "I invited Rachel to the party, but she couldn't come. (She / arrange / to do something else) __________",
    "She'd arranged to do something else",
    {
      alternatives: ["She had arranged to do something else"],
      explanation: "Việc sắp xếp trước đã xảy ra trước khi bạn mời → past perfect: She'd arranged to do something else.",
    },
  ),
  grammarCloze(
    "pastperf-15-1-6",
    "15.1 · Viết câu với past perfect",
    "You went to the cinema last night. You got to the cinema late. (The film / already / start) __________",
    "The film had already started",
    {
      explanation: "Phim đã bắt đầu trước khi bạn đến → past perfect: The film had already started.",
    },
  ),
  grammarCloze(
    "pastperf-15-1-7",
    "15.1 · Viết câu với past perfect",
    "Last year we went to Mexico. It was our first time there. (We / not / be / there / before) We __________.",
    "hadn't been there before",
    {
      explanation: "Chưa từng đến Mexico trước mốc 'went to Mexico' → past perfect: We hadn't been there before.",
    },
  ),
  grammarCloze(
    "pastperf-15-1-8",
    "15.1 · Viết câu với past perfect",
    "I met Daniel last week. It was good to see him again after such a long time. (I / not / see / him for five years) __________",
    "I hadn't seen him for five years",
    {
      explanation: "Việc không gặp đã kéo dài trước mốc 'met Daniel' → past perfect: I hadn't seen him for five years.",
    },
  ),
  grammarCloze(
    "pastperf-15-1-9",
    "15.1 · Viết câu với past perfect",
    "I offered my friends something to eat, but they weren't hungry. (They / just / have / lunch) __________",
    "They'd just had lunch",
    {
      alternatives: ["They had just had lunch"],
      explanation: "Việc ăn trưa xảy ra ngay trước mốc 'I offered' → past perfect: They'd just had lunch.",
    },
  ),
  grammarCloze(
    "pastperf-15-1-10",
    "15.1 · Viết câu với past perfect",
    "Sam played tennis yesterday. He wasn't very good because it was his first game ever. (He / never / play / before) __________",
    "He'd never played before",
    {
      alternatives: ["He had never played before"],
      explanation: "Chưa từng chơi trước mốc 'played tennis yesterday' → past perfect: He'd never played before.",
    },
  ),

  // 15.2 — Complete the paragraphs (present perfect / past simple mốc → past perfect cho việc xảy ra trước)
  grammarCloze(
    "pastperf-15-2-1",
    "15.2 · Hoàn thành đoạn văn",
    "We arrived at work in the morning and found that somebody __________ into the office during the night. (break)",
    "had broken",
    {
      explanation: "Việc đột nhập xảy ra trước khi 'we arrived' → past perfect: somebody had broken into the office.",
    },
  ),
  grammarCloze(
    "pastperf-15-2-2",
    "15.2 · Hoàn thành đoạn văn",
    "I went to Laura's house this morning and rang her doorbell, but there was no answer. She __________ out. (go)",
    "'d gone",
    {
      alternatives: ["had gone"],
      explanation: "Laura đã ra ngoài trước khi bạn đến bấm chuông → past perfect: She'd gone out.",
    },
  ),
  grammarCloze(
    "pastperf-15-2-3",
    "15.2 · Hoàn thành đoạn văn",
    "I met Joe a few days ago. He __________ just come back from holiday, and he looked very well.",
    "'d",
    {
      alternatives: ["had", "he'd", "he had"],
      explanation: "Việc đi nghỉ và trở về xảy ra trước mốc 'I met Joe' → past perfect: He'd just come back from holiday.",
    },
  ),

  // 15.3 — Past perfect or past simple
  grammarCloze(
    "pastperf-15-3-2",
    "15.3 · Past perfect hay past simple?",
    "I felt very tired when I got home, so __________ straight to bed. (I / go)",
    "I went",
    {
      explanation: "Đi ngủ xảy ra sau khi về nhà, không phải trước → past simple: I went straight to bed.",
    },
  ),
  grammarCloze(
    "pastperf-15-3-3",
    "15.3 · Past perfect hay past simple?",
    "The house was very quiet when I got home. Everybody __________ to bed. (go)",
    "had gone",
    {
      explanation: "Mọi người đã đi ngủ trước khi bạn về → past perfect: Everybody had gone to bed.",
    },
  ),
  grammarCloze(
    "pastperf-15-3-4",
    "15.3 · Past perfect hay past simple?",
    "Mark travels a lot. When I first met him, __________ round the world. (he / already / travel)",
    "he'd already travelled",
    {
      alternatives: ["he had already travelled"],
      explanation: "Việc du lịch vòng quanh thế giới xảy ra trước mốc 'gặp lần đầu' → past perfect: he'd already travelled round the world.",
    },
  ),
  grammarCloze(
    "pastperf-15-3-5",
    "15.3 · Past perfect hay past simple?",
    "Sorry I'm late. The car __________ down on my way here. (break)",
    "broke",
    {
      explanation: "Xe hỏng là sự kiện đơn lẻ, không có mốc nào khác trước nó trong câu → past simple: broke down.",
    },
  ),
];
