import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 7 exercises — Present perfect 1 (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover contractions, full forms,
 * and near-synonyms that still keep present-perfect meaning.
 */
export const PRESENT_PERFECT_EXERCISES: readonly GrammarExercise[] = [
  // 7.1 — Read the situations and complete the sentences
  grammarCloze(
    "pp-7-1-2",
    "7.1 · Hoàn thành câu",
    "Maria's English wasn't very good. Now it is better. Her English __________.",
    "has improved",
    {
      alternatives: [
        "Her English has improved",
        "has got better",
        "has gotten better",
        "has become better",
        "Her English has got better",
        "Her English has gotten better",
      ],
      explanation:
        "Dùng present perfect vì kết quả còn ở hiện tại: tiếng Anh của Maria giờ tốt hơn. Đáp án sách: has improved — cũng chấp nhận has got/gotten better.",
    },
  ),
  grammarCloze(
    "pp-7-1-3",
    "7.1 · Hoàn thành câu",
    "My bag was here, but it isn't here any more. My bag __________.",
    "has disappeared",
    {
      alternatives: [
        "My bag has disappeared",
        "has vanished",
        "My bag has vanished",
        "has gone",
        "My bag has gone",
      ],
      explanation:
        "Túi không còn ở đây nữa → nhấn mạnh kết quả hiện tại. Đáp án sách: has disappeared — cũng chấp nhận has vanished / has gone.",
    },
  ),
  grammarCloze(
    "pp-7-1-4",
    "7.1 · Hoàn thành câu",
    "Lisa can't walk and her leg is in plaster. Lisa __________.",
    "has broken her leg",
    {
      alternatives: [
        "Lisa has broken her leg",
        "has broken it",
        "Lisa's broken her leg",
        "Lisa has broken her leg.",
      ],
      explanation:
        "Chân bó bột là kết quả còn thấy ở hiện tại → has broken her leg (present perfect), không dùng past simple broke.",
    },
  ),
  grammarCloze(
    "pp-7-1-5",
    "7.1 · Hoàn thành câu",
    "Last week the bus fare was £1.80. Now it is £2. The bus fare __________.",
    "has gone up",
    {
      alternatives: [
        "The bus fare has gone up",
        "has increased",
        "The bus fare has increased",
        "has risen",
        "The bus fare has risen",
        "has gone up.",
      ],
      explanation:
        "Giá hiện tại cao hơn trước → kết quả còn hiệu lực. Đáp án sách: has gone up — cũng chấp nhận has increased / has risen.",
    },
  ),
  grammarCloze(
    "pp-7-1-6",
    "7.1 · Hoàn thành câu",
    "Dan didn't have a beard before. Now he has a beard. Dan __________.",
    "has grown a beard",
    {
      alternatives: [
        "Dan has grown a beard",
        "has grown one",
        "Dan's grown a beard",
        "has grown a beard.",
      ],
      explanation:
        "Tình trạng hiện tại (có râu) là kết quả của hành động trong quá khứ → has grown a beard.",
    },
  ),
  grammarCloze(
    "pp-7-1-7",
    "7.1 · Hoàn thành câu",
    "It was raining ten minutes ago. It isn't raining now. It __________.",
    "has stopped",
    {
      alternatives: [
        "It has stopped",
        "has stopped raining",
        "It has stopped raining",
        "It's stopped",
        "It's stopped raining",
        "has stopped.",
      ],
      explanation:
        "Mưa đã ngừng và trạng thái đó vẫn đúng lúc nói → has stopped / has stopped raining.",
    },
  ),

  // 7.2 — Put in been or gone
  grammarCloze(
    "pp-7-2-2",
    "7.2 · been / gone",
    "Hello! I've just __________ to the shops. I've bought lots of things.",
    "been",
    {
      explanation:
        "Người nói đã về (còn cầm đồ mua) → been to (= đã đi và quay lại). gone to nghĩa là vẫn đang ở đó / trên đường.",
    },
  ),
  grammarCloze(
    "pp-7-2-3",
    "7.2 · been / gone",
    "Tom has just __________ out. He'll be back in about an hour.",
    "gone",
    {
      explanation:
        "Tom chưa về (sẽ về sau khoảng một giờ) → gone out. been out thì hàm ý anh ấy đã đi và đã về.",
    },
  ),
  grammarCloze(
    "pp-7-2-4",
    "7.2 · been / gone",
    "Alice isn't here at the moment. I don't know where she's __________.",
    "gone",
    {
      explanation:
        "Alice không có ở đây lúc này → she's gone (đã đi rồi, đang không ở đây).",
    },
  ),
  grammarCloze(
    "pp-7-2-5",
    "7.2 · been / gone",
    "You're very late. Where have you __________?",
    "been",
    {
      explanation:
        "Người kia đã đến (đang đứng trước mặt bạn) → Where have you been? (= bạn đã ở đâu và giờ mới tới).",
    },
  ),

  // 7.3 — Complete the sentences using the present perfect
  grammarCloze(
    "pp-7-3-2",
    "7.3 · Hoàn thành câu",
    "I can't find my bag. __________ anywhere?",
    "Have you seen it",
    {
      alternatives: [
        "Have you seen it?",
        "Have you seen my bag",
        "Have you seen my bag?",
      ],
      explanation:
        "Hỏi về thông tin còn liên quan tới hiện tại (túi đang thất lạc) → Have you seen it?",
    },
  ),
  grammarCloze(
    "pp-7-3-3",
    "7.3 · Hoàn thành câu",
    "I can't log on to the website. __________ my password.",
    "I've forgotten",
    {
      alternatives: [
        "I have forgotten",
        "I've forgotten my password",
        "I have forgotten my password",
      ],
      explanation:
        "Kết quả hiện tại: không đăng nhập được vì quên mật khẩu → I've forgotten (my password).",
    },
  ),
  grammarCloze(
    "pp-7-3-4",
    "7.3 · Hoàn thành câu",
    "I sent Joe an email this morning, but __________.",
    "he hasn't replied",
    {
      alternatives: [
        "he has not replied",
        "Joe hasn't replied",
        "Joe has not replied",
        "he hasn't replied yet",
        "Joe hasn't replied yet",
        "he's not replied",
      ],
      explanation:
        "Cho tới giờ vẫn chưa có thư trả lời → he hasn't replied (yet).",
    },
  ),
  grammarCloze(
    "pp-7-3-5",
    "7.3 · Hoàn thành câu",
    "Is the meeting still going on, or __________?",
    "has it finished",
    {
      alternatives: [
        "Has it finished",
        "Has it finished?",
        "has the meeting finished",
        "Has the meeting finished",
        "Has the meeting finished?",
      ],
      explanation:
        "Hỏi cuộc họp đã kết thúc chưa (trạng thái hiện tại) → has it finished?",
    },
  ),
  grammarCloze(
    "pp-7-3-6",
    "7.3 · Hoàn thành câu",
    "__________. It's colder now.",
    "The weather has changed",
    {
      alternatives: [
        "The weather's changed",
        "Weather has changed",
        "It has changed",
        "It's changed",
      ],
      explanation:
        "Thời tiết lạnh hơn bây giờ = kết quả còn ở hiện tại → The weather has changed.",
    },
  ),
  grammarCloze(
    "pp-7-3-7",
    "7.3 · Hoàn thành câu",
    "__________. Could you sign it now, please?",
    "You haven't signed the form",
    {
      alternatives: [
        "You have not signed the form",
        "You haven't signed it",
        "You have not signed it",
        "You haven't signed the form yet",
        "You haven't signed it yet",
      ],
      explanation:
        "Form vẫn chưa được ký → You haven't signed the form (yet).",
    },
  ),
  grammarCloze(
    "pp-7-3-8",
    "7.3 · Hoàn thành câu",
    "Are your friends still here, or __________ home?",
    "have they gone",
    {
      alternatives: [
        "Have they gone",
        "Have they gone home",
        "Have they gone home?",
        "have they gone home",
      ],
      explanation:
        "Hỏi họ đã về nhà chưa (đi rồi và không còn ở đây) → have they gone (home)?",
    },
  ),

  // 7.4 — Write sentences with just, already or yet
  grammarCloze(
    "pp-7-4-2",
    "7.4 · just / already / yet",
    "After lunch you visit a friend. She asks: 'Would you like something to eat?' You say: No thank you. __________.",
    "I've just had lunch",
    {
      alternatives: [
        "I have just had lunch",
        "I've just had lunch.",
        "I've already had lunch",
        "I have already had lunch",
      ],
      explanation:
        "Vừa mới ăn xong → I've just had lunch. already cũng hợp lý nếu muốn nhấn mạnh 'đã ăn rồi'.",
    },
  ),
  grammarCloze(
    "pp-7-4-3",
    "7.4 · just / already / yet",
    "Joe goes out. Five minutes later the phone rings: 'Can I speak to Joe?' You say: I'm afraid __________.",
    "he's just gone out",
    {
      alternatives: [
        "he has just gone out",
        "He's just gone out",
        "he's just gone out.",
        "he's already gone out",
        "he has already gone out",
      ],
      explanation:
        "Joe mới ra ngoài gần đây → he's just gone out. already cũng chấp nhận nếu muốn nói 'đã đi rồi'.",
    },
  ),
  grammarCloze(
    "pp-7-4-4",
    "7.4 · just / already / yet",
    "You're eating in a restaurant. The waiter starts to take your plate away. You say: Wait a minute! __________.",
    "I haven't finished yet",
    {
      alternatives: [
        "I haven't finished",
        "I have not finished yet",
        "I haven't finished.",
        "I'm not finished yet",
        "I haven't finished eating yet",
      ],
      explanation:
        "yet thường dùng trong phủ định/câu hỏi khi vẫn đang chờ việc xảy ra → I haven't finished yet.",
    },
  ),
];
