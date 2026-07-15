import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 32 exercises — Must / mustn't / needn't (English Grammar in Use · Intermediate).
 * Matching (32.1) skipped as letter-only; keyed cloze from 32.2–32.5.
 */
export const U32_MUST_MUSTNT_NEEDNT_EXERCISES: readonly GrammarExercise[] = [
  // 32.2 — must / mustn't / needn't / don't need to
  grammarCloze(
    "u32-2-2",
    "32.2 · must / mustn't / needn't",
    "I have to talk to Gary. I __________ remember to call him.",
    "must",
    {
      explanation: "Cần thiết phải nhớ gọi → must remember (không mustn't).",
    },
  ),
  grammarCloze(
    "u32-2-3",
    "32.2 · must / mustn't / needn't",
    "I have to talk to Gary. I __________ forget to call him.",
    "mustn't",
    {
      alternatives: ["must not"],
      explanation: "Không được quên → mustn't forget (= must remember).",
    },
  ),
  grammarCloze(
    "u32-2-4",
    "32.2 · must / mustn't / needn't",
    "There's plenty of time for you to decide. You __________ decide now.",
    "don't need to",
    {
      alternatives: ["needn't", "do not need to"],
      explanation: "Không cần quyết ngay → don't need to / needn't.",
    },
  ),
  grammarCloze(
    "u32-2-5",
    "32.2 · must / mustn't / needn't",
    "These are important documents. We __________ lose them.",
    "mustn't",
    {
      alternatives: ["must not"],
      explanation: "Không được làm mất tài liệu quan trọng → mustn't lose.",
    },
  ),
  grammarCloze(
    "u32-2-6",
    "32.2 · must / mustn't / needn't",
    "You __________ wait for me. You go on and I'll join you later.",
    "needn't",
    {
      alternatives: ["don't need to", "do not need to"],
      explanation: "Không cần đợi → needn't / don't need to wait.",
    },
  ),
  grammarCloze(
    "u32-2-7",
    "32.2 · must / mustn't / needn't",
    "This is a dangerous situation and we need to be careful. We __________ do anything stupid.",
    "mustn't",
    {
      alternatives: ["must not"],
      explanation: "Không được làm gì ngu ngốc → mustn't.",
    },
  ),
  grammarCloze(
    "u32-2-8",
    "32.2 · must / mustn't / needn't",
    "I understand the situation perfectly. You __________ explain further.",
    "don't need to",
    {
      alternatives: ["needn't", "do not need to"],
      explanation: "Không cần giải thích thêm → don't need to / needn't.",
    },
  ),
  grammarCloze(
    "u32-2-9",
    "32.2 · must / mustn't / needn't",
    "What sort of house do you want? → It __________ be big – that's not so important. But it must have a nice garden.",
    "needn't",
    {
      alternatives: ["need not", "doesn't need to", "does not need to"],
      explanation: "Không cần lớn (needn't) nhưng phải có vườn đẹp (must).",
    },
  ),

  // 32.3 — needn't + verb
  grammarCloze(
    "u32-3-2",
    "32.3 · needn't + động từ",
    "I can manage the shopping alone. You __________ with me.",
    "needn't come",
    {
      alternatives: ["don't need to come", "need not come"],
      explanation: "Không cần đi cùng → needn't come.",
    },
  ),
  grammarCloze(
    "u32-3-3",
    "32.3 · needn't + động từ",
    "We __________ all the way home. We can get a taxi.",
    "needn't walk",
    {
      alternatives: ["don't need to walk", "need not walk"],
      explanation: "Không cần đi bộ cả đường → needn't walk.",
    },
  ),
  grammarCloze(
    "u32-3-4",
    "32.3 · needn't + động từ",
    "You can delete these emails. You __________ them.",
    "needn't keep",
    {
      alternatives: ["don't need to keep", "need not keep"],
      explanation: "Không cần giữ email → needn't keep.",
    },
  ),
  grammarCloze(
    "u32-3-5",
    "32.3 · needn't + động từ",
    "I'll be all right. You __________ about me.",
    "needn't worry",
    {
      alternatives: ["don't need to worry", "need not worry"],
      explanation: "Không cần lo → needn't worry.",
    },
  ),

  // 32.4 — needn't have + could have
  grammarCloze(
    "u32-4-2",
    "32.4 · needn't have / could have",
    "Why did you walk home? Why didn't you take a taxi? → You __________. You could have taken a taxi.",
    "needn't have walked home",
    {
      alternatives: [
        "You needn't have walked home",
        "need not have walked home",
        "You needn't have walked home. You could have taken a taxi.",
      ],
      explanation: "Đã đi bộ dù không cần → needn't have walked home; có thể đã bắt taxi → could have.",
    },
  ),
  grammarCloze(
    "u32-4-3",
    "32.4 · needn't have / could have",
    "Why did they stay at a hotel? Why didn't they stay with us? → They __________. They could have stayed with us.",
    "needn't have stayed at a hotel",
    {
      alternatives: [
        "They needn't have stayed at a hotel",
        "need not have stayed at a hotel",
        "They needn't have stayed at a hotel. They could have stayed with us.",
      ],
      explanation: "Đặt/ở khách sạn thừa → needn't have stayed at a hotel.",
    },
  ),
  grammarCloze(
    "u32-4-4",
    "32.4 · needn't have / could have",
    "Why did she phone me at 3 am? → She __________. She could have waited until the morning.",
    "needn't have phoned me at 3 am",
    {
      alternatives: [
        "needn't have phoned me at 3 a.m.",
        "needn't have phoned me at 3am",
        "She needn't have phoned me at 3 am",
        "She needn't have phoned me at 3 am. She could have waited until the morning.",
      ],
      explanation: "Gọi lúc 3 giờ sáng là thừa → needn't have phoned…; đáng lẽ đợi sáng.",
    },
  ),
  grammarCloze(
    "u32-4-5",
    "32.4 · needn't have / could have",
    "Why did you shout at me? → You __________. You could have been more patient.",
    "needn't have shouted at me",
    {
      alternatives: [
        "You needn't have shouted at me",
        "You needn't have shouted at me. You could have been more patient.",
      ],
      explanation: "Đã hét dù không cần → needn't have shouted at me.",
    },
  ),

  // 32.5 — error correction
  grammarCloze(
    "u32-5-3",
    "32.5 · Sửa lỗi",
    "Sửa câu: You needn't to shout. I can hear you perfectly. → __________",
    "You needn't shout",
    {
      alternatives: [
        "You don't need to shout",
        "You don't have to shout",
        "You need not shout",
      ],
      explanation: "needn't + V (không to) / don't need to / don't have to shout.",
    },
  ),
  grammarCloze(
    "u32-5-4",
    "32.5 · Sửa lỗi",
    "Sửa câu: I needn't have gone out, so I stayed at home. → __________",
    "I didn't need to go out",
    {
      alternatives: ["I didn't have to go out", "I did not need to go out", "I did not have to go out"],
      explanation: "Không cần ra ngoài (và không ra) → didn't need to / didn't have to (không needn't have).",
    },
  ),
  grammarCloze(
    "u32-5-6",
    "32.5 · Sửa lỗi",
    "Sửa câu (OK để cửa không khóa): You mustn't lock the door. → __________",
    "You needn't lock the door",
    {
      alternatives: [
        "You don't need to lock the door",
        "You don't have to lock the door",
        "You need not lock the door",
      ],
      explanation: "Không cần khóa (được phép để mở) → needn't / don't need to / don't have to (không mustn't).",
    },
  ),
  grammarCloze(
    "u32-5-7",
    "32.5 · Sửa lỗi",
    "Sửa câu: I needn't have said anything, so I kept quiet. → __________",
    "I didn't need to say anything",
    {
      alternatives: ["I didn't have to say anything", "I did not need to say anything"],
      explanation: "Không cần nói gì (và đã im) → didn't need to / didn't have to say anything.",
    },
  ),
];
