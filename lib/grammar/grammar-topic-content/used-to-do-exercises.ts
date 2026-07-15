import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 18 exercises — Used to (do) (English Grammar in Use · Intermediate).
 */
export const USED_TO_DO_EXERCISES: readonly GrammarExercise[] = [
  // 18.1 — Complete the sentences with used to + a suitable verb
  grammarCloze(
    "usedto-18-1-2",
    "18.1 · used to + động từ",
    "Sophie __________ a motorbike, but last year she sold it and bought a car.",
    "used to have",
    {
      alternatives: ["used to ride"],
      explanation: "Thói quen/sở hữu trong quá khứ không còn đúng bây giờ → used to have/ride a motorbike.",
    },
  ),
  grammarCloze(
    "usedto-18-1-3",
    "18.1 · used to + động từ",
    "Our friends moved to Spain a few years ago. They __________ in Paris.",
    "used to live",
    {
      explanation: "Tình trạng đúng trong quá khứ, không còn đúng bây giờ → They used to live in Paris.",
    },
  ),
  grammarCloze(
    "usedto-18-1-4",
    "18.1 · used to + động từ",
    "Jackie __________ my best friend, but we aren't friends any more.",
    "used to be",
    {
      explanation: "Tình trạng từng đúng, không còn đúng bây giờ → Jackie used to be my best friend.",
    },
  ),
  grammarCloze(
    "usedto-18-1-5",
    "18.1 · used to + động từ",
    "I rarely eat ice cream now, but I __________ it when I was a child.",
    "used to eat",
    {
      alternatives: ["used to like", "used to love"],
      explanation: "Thói quen thời nhỏ, không còn duy trì → I used to eat/like/love ice cream when I was a child.",
    },
  ),
  grammarCloze(
    "usedto-18-1-7",
    "18.1 · used to + động từ",
    "There __________ a hotel near the airport, but it closed a long time ago.",
    "used to be",
    {
      explanation: "There + used to be để nói về sự vật từng tồn tại, giờ không còn → There used to be a hotel near the airport.",
    },
  ),
  grammarCloze(
    "usedto-18-1-8",
    "18.1 · used to + động từ",
    "I __________ in a factory. It wasn't my favourite job.",
    "used to work",
    {
      explanation: "Công việc trong quá khứ, không còn làm nữa → I used to work in a factory.",
    },
  ),

  // 18.2 — Choose from the box
  grammarCloze(
    "usedto-18-2-1",
    "18.2 · Hoàn thành với used to",
    "Lisa __________ very long hair when she was a child.",
    "used to have",
    {
      explanation: "Tình trạng từng đúng khi còn nhỏ, giờ không còn → Lisa used to have very long hair.",
    },
  ),
  grammarCloze(
    "usedto-18-2-2",
    "18.2 · Hoàn thành với used to",
    "We __________ to watch TV a lot, but we don't have a TV any more.",
    "used",
    {
      explanation: "Cấu trúc used to + V → We used to watch TV a lot.",
    },
  ),
  grammarCloze(
    "usedto-18-2-3",
    "18.2 · Hoàn thành với used to",
    "Lisa works in a shop now. She __________ a receptionist in a hotel.",
    "used to be",
    {
      explanation: "Công việc trước đây, giờ đã đổi → She used to be a receptionist in a hotel.",
    },
  ),
  grammarCloze(
    "usedto-18-2-5",
    "18.2 · Hoàn thành với used to",
    "I __________ like big cities, but now I prefer the countryside.",
    "used to",
    {
      explanation: "used to + V (nguyên thể) → I used to like big cities.",
    },
  ),
  grammarCloze(
    "usedto-18-2-7",
    "18.2 · Hoàn thành với used to",
    "I don't travel very much these days, but I used __________.",
    "to",
    {
      explanation: "Dạng rút gọn 'I used to' (= I used to travel) khi động từ đã được hiểu ngầm.",
    },
  ),
  grammarCloze(
    "usedto-18-2-9",
    "18.2 · Hoàn thành với used to",
    "These days I eat more than before. I __________ use to eat as much.",
    "didn't",
    {
      explanation: "Phủ định 'didn't use to' → I didn't use to eat as much.",
    },
  ),

  // 18.3 — Compare Karen ten years ago and today (fixed transformations from the book)
  grammarCloze(
    "usedto-18-3-2",
    "18.3 · used to / didn't use to",
    "Mười năm trước Karen chơi piano thường xuyên, nhưng giờ không còn. She __________ the piano, but she hasn't played the piano for a long time.",
    "used to play",
    {
      explanation: "Thói quen quá khứ không còn duy trì → She used to play the piano.",
    },
  ),
  grammarCloze(
    "usedto-18-3-3",
    "18.3 · used to / didn't use to",
    "Mười năm trước Karen không thích trà, giờ thì thích. She __________ tea, but she likes it now.",
    "didn't use to drink",
    {
      alternatives: ["used not to drink"],
      explanation: "Phủ định quá khứ, giờ đã thay đổi → She didn't use to drink tea / She used not to drink tea.",
    },
  ),
  grammarCloze(
    "usedto-18-3-4",
    "18.3 · used to / didn't use to",
    "Mười năm trước Karen có một con chó, giờ đã mất. She __________ a dog, but it died two years ago.",
    "used to have",
    {
      explanation: "Tình trạng sở hữu trong quá khứ, giờ không còn → She used to have a dog.",
    },
  ),
];
