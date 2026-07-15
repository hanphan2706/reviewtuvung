import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 35 exercises — I'd better … / it's time … (English Grammar in Use · Intermediate).
 */
export const U35_ID_BETTER_ITS_TIME_EXERCISES: readonly GrammarExercise[] = [
  // 35.1 — 'd better / 'd better not
  grammarCloze(
    "u35-1-2",
    "35.1 · 'd better",
    "You and Kate plan to go to a restaurant tonight. It will be busy. → We __________ a table.",
    "We'd better reserve",
    {
      alternatives: ["we'd better reserve", "We had better reserve", "'d better reserve"],
      explanation: "Nên đặt bàn kẻo hết chỗ → We'd better reserve a table.",
    },
  ),
  grammarCloze(
    "u35-1-3",
    "35.1 · 'd better",
    "Oliver has cut himself. → You __________ on it.",
    "You'd better put a plaster",
    {
      alternatives: [
        "you'd better put a plaster",
        "You'd better put a plaster on it",
        "'d better put a plaster",
      ],
      explanation: "Nên dán băng → You'd better put a plaster on it.",
    },
  ),
  grammarCloze(
    "u35-1-4",
    "35.1 · 'd better not",
    "Rebecca doesn't look well enough to go to work. → __________ this morning.",
    "You'd better not go to work",
    {
      alternatives: ["You had better not go to work", "you'd better not go to work"],
      explanation: "Tốt hơn đừng đi làm → You'd better not go to work this morning.",
    },
  ),
  grammarCloze(
    "u35-1-5",
    "35.1 · 'd better",
    "You're not sure what time the film starts. → __________ the film starts.",
    "I'd better check what time",
    {
      alternatives: [
        "We'd better check what time",
        "I had better check what time",
        "We had better check what time",
      ],
      explanation: "Nên kiểm tra giờ chiếu → I'd/We'd better check what time…",
    },
  ),
  grammarCloze(
    "u35-1-6",
    "35.1 · 'd better not",
    "Your boss is very busy right now. → __________ right now.",
    "I'd better not disturb her",
    {
      alternatives: ["I had better not disturb her", "I'd better not disturb her right now"],
      explanation: "Tốt hơn đừng làm phiền → I'd better not disturb her.",
    },
  ),

  // 35.2 — had better → should (general)
  grammarCloze(
    "u35-2-3",
    "35.2 · should (chung)",
    "Sửa câu (ý chung): You'd better come more often. → __________",
    "You should come more often",
    {
      explanation: "Ý kiến chung → should (không had better).",
    },
  ),
  grammarCloze(
    "u35-2-6",
    "35.2 · should (chung)",
    "Sửa câu (ý chung): I think everybody had better learn a foreign language. → __________",
    "everybody should learn a foreign language",
    {
      alternatives: [
        "Everybody should learn a foreign language",
        "I think everybody should learn a foreign language",
      ],
      explanation: "Lời khuyên chung → should (không had better).",
    },
  ),

  // 35.3 — gap-fill from box
  grammarCloze(
    "u35-3-2",
    "35.3 · Điền từ",
    "Ben needs to know what happened. Somebody __________ better tell him.",
    "had",
    {
      explanation: "Somebody had better tell him.",
    },
  ),
  grammarCloze(
    "u35-3-3",
    "35.3 · Điền từ",
    "We'd better __________ park the car here. The road is too narrow.",
    "not",
    {
      explanation: "We'd better not park…",
    },
  ),
  grammarCloze(
    "u35-3-4",
    "35.3 · Điền từ",
    "You __________ brush your teeth at least twice a day.",
    "should",
    {
      explanation: "Lời khuyên chung → should (không had better).",
    },
  ),
  grammarCloze(
    "u35-3-5",
    "35.3 · Điền từ",
    "What are we going to do? It's time __________ decide.",
    "to",
    {
      explanation: "It's time to decide.",
    },
  ),
  grammarCloze(
    "u35-3-6",
    "35.3 · Điền từ",
    "__________ better not be late. It's an important meeting.",
    "I'd",
    {
      alternatives: ["I had", "I'd"],
      explanation: "I'd better not be late.",
    },
  ),
  grammarCloze(
    "u35-3-7",
    "35.3 · Điền từ",
    "It's time they __________ here. They promised they wouldn't be late.",
    "were",
    {
      explanation: "It's time + past: they were here.",
    },
  ),
  grammarCloze(
    "u35-3-8",
    "35.3 · Điền từ",
    "The window is open. You'd __________ close it before you go out.",
    "better",
    {
      explanation: "You'd better close it…",
    },
  ),
  grammarCloze(
    "u35-3-11",
    "35.3 · Điền từ",
    "It's time the government __________ something about the problem.",
    "did",
    {
      explanation: "It's time + past: the government did something.",
    },
  ),

  // 35.4 — It's time + past
  grammarCloze(
    "u35-4-2",
    "35.4 · It's time + past",
    "You haven't had a holiday for a very long time. → __________",
    "It's time I had a holiday",
    {
      alternatives: ["It's time I had a holiday."],
      explanation: "It's time + past: I had a holiday.",
    },
  ),
  grammarCloze(
    "u35-4-3",
    "35.4 · It's time + past",
    "It's after the children's bedtime. → __________",
    "It's time the children were in bed",
    {
      alternatives: [
        "It's time the children went to bed",
        "It's time the children were in bed.",
        "It's time the children went to bed.",
      ],
      explanation: "It's time the children were in bed / went to bed.",
    },
  ),
  grammarCloze(
    "u35-4-4",
    "35.4 · It's time + past",
    "You need to start cooking dinner. → It's time I __________ dinner.",
    "started cooking",
    {
      alternatives: [
        "started cooking the dinner",
        "It's time I started cooking dinner",
        "It's time I started cooking the dinner",
      ],
      explanation: "It's time I started cooking (the) dinner.",
    },
  ),
  grammarCloze(
    "u35-4-5",
    "35.4 · It's time + past",
    "Kate is always complaining. → __________ about everything.",
    "It's time she stopped complaining",
    {
      alternatives: [
        "It's time Kate stopped complaining",
        "It's time she stopped complaining about everything",
        "It's time Kate stopped complaining about everything",
      ],
      explanation: "It's time she/Kate stopped complaining…",
    },
  ),
  grammarCloze(
    "u35-4-6",
    "35.4 · It's time + past",
    "The company has been badly managed. → __________ in the way the company is run.",
    "It's time some changes were made",
    {
      alternatives: [
        "It's time changes were made",
        "It's time (some) changes were made",
      ],
      explanation: "It's time (some) changes were made…",
    },
  ),
];
