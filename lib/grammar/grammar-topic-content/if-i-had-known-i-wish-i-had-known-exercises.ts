import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 40 exercises — if I had known … I wish I had known … (English Grammar in Use · Intermediate).
 */
export const U40_IF_I_HAD_KNOWN_I_WISH_I_HAD_KNOWN_EXERCISES: readonly GrammarExercise[] = [
  // 40.1 — verb forms (skip book example 1)
  grammarCloze(
    "u40-1-2",
    "40.1 · if + had + would have",
    "Sarah got to the station just in time. If __________ the train, she'd have missed her flight too.",
    "she'd missed",
    {
      alternatives: ["she had missed"],
      explanation: "If she'd / she had missed the train…",
    },
  ),
  grammarCloze(
    "u40-1-3",
    "40.1 · would have + if + hadn't",
    "Thanks for reminding me about Lisa's birthday. __________ if you hadn't reminded me.",
    "I'd have forgotten",
    {
      alternatives: [
        "I would have forgotten",
        "I'd have forgotten if you hadn't reminded me",
        "I would have forgotten if you hadn't reminded me",
      ],
      explanation: "I'd / I would have forgotten if you hadn't reminded me.",
    },
  ),
  grammarCloze(
    "u40-1-4",
    "40.1 · if + had had",
    "I didn't have your email address. If __________ your email address, I'd have sent you an email.",
    "I'd had",
    {
      alternatives: ["I had had"],
      explanation: "If I'd had / I had had your email address…",
    },
  ),
  grammarCloze(
    "u40-1-5",
    "40.1 · would have + if + had",
    "Their trip was OK, but __________ it more if the weather had been better.",
    "they'd have enjoyed",
    {
      alternatives: ["they would have enjoyed"],
      explanation: "they'd / they would have enjoyed it more if… had been better.",
    },
  ),
  grammarCloze(
    "u40-1-6",
    "40.1 · would have + if + had",
    "Sorry we're late. __________ quicker if we'd walked.",
    "It would have been",
    {
      alternatives: ["It'd have been"],
      explanation: "It would have been quicker if we'd / we had walked.",
    },
  ),
  grammarCloze(
    "u40-1-7",
    "40.1 · if + had + would have",
    "Why didn't you tell me about your problem? If __________ me, I'd have tried to help you.",
    "you'd told",
    {
      alternatives: ["you had told"],
      explanation: "If you'd / you had told me…",
    },
  ),
  grammarCloze(
    "u40-1-8",
    "40.1 · if + past (hiện tại)",
    "I'm not tired. If __________ tired, I'd go home now.",
    "I were",
    {
      alternatives: ["I was"],
      explanation: "Hiện tại giả định → If I were / was tired…",
    },
  ),
  grammarCloze(
    "u40-1-9",
    "40.1 · if + had been (quá khứ)",
    "I wasn't tired last night. If __________ tired, I would have gone home earlier.",
    "I'd been",
    {
      alternatives: ["I had been"],
      explanation: "Quá khứ giả định → If I'd been / I had been tired…",
    },
  ),

  // 40.2 — If … sentences
  grammarCloze(
    "u40-2-2",
    "40.2 · If + hadn't",
    "The accident happened because the road was icy. → If the road __________, the accident wouldn't have happened.",
    "hadn't been icy",
    {
      alternatives: [
        "had not been icy",
        "If the road hadn't been icy, the accident wouldn't have happened",
        "If the road hadn't been icy, the accident wouldn't have happened.",
      ],
      explanation: "If the road hadn't been icy, the accident wouldn't have happened.",
    },
  ),
  grammarCloze(
    "u40-2-3",
    "40.2 · If + had known",
    "I didn't know that you had to get up early, so I didn't wake you up. → If __________ , I'd have woken you up.",
    "I'd known",
    {
      alternatives: [
        "I had known",
        "I'd known that you had to get up early",
        "I had known that you had to get up early",
        "If I'd known, I'd have woken you up",
        "If I had known that you had to get up early, I would have woken you up",
      ],
      explanation: "If I'd / I had known…, I'd / I would have woken you up.",
    },
  ),
  grammarCloze(
    "u40-2-4",
    "40.2 · If + hadn't lost",
    "Unfortunately I lost my phone, so I couldn't call you. → __________",
    "If I hadn't lost my phone, I'd have called you",
    {
      alternatives: [
        "If I hadn't lost my phone, I would have called you",
        "If I hadn't lost my phone, I could have called you",
        "If I'd had my phone, I'd have called you",
        "If I had had my phone, I would have called you",
        "If I hadn't lost my phone, I'd have called you.",
        "If I hadn't lost my phone, I would have called you.",
        "If I hadn't lost my phone, I could have called you.",
      ],
      explanation: "If I hadn't lost my phone… / If I'd had my phone…, I'd/could have called you.",
    },
  ),
  grammarCloze(
    "u40-2-5",
    "40.2 · If + hadn't been wearing",
    "Karen wasn't injured because she was wearing a seat belt. → If Karen __________ a seat belt, she'd have been injured.",
    "hadn't been wearing",
    {
      alternatives: [
        "had not been wearing",
        "If Karen hadn't been wearing a seat belt, she'd have been injured",
        "If Karen hadn't been wearing a seat belt, she would have been injured",
        "If Karen hadn't been wearing a seat belt, she might have been injured",
        "If Karen hadn't been wearing a seat belt, she could have been injured",
      ],
      explanation: "If Karen hadn't been wearing a seat belt, she'd/might/could have been injured.",
    },
  ),
  grammarCloze(
    "u40-2-6",
    "40.2 · If + had had (→ hiện tại)",
    "You didn't have any breakfast – that's why you're hungry now. → If __________ breakfast, you wouldn't be hungry now.",
    "you'd had",
    {
      alternatives: [
        "you had had",
        "you'd had some breakfast",
        "you had had some breakfast",
        "If you'd had breakfast, you wouldn't be hungry now",
        "If you had had some breakfast, you wouldn't be hungry now",
      ],
      explanation: "If you'd / you had had (some) breakfast, you wouldn't be hungry now.",
    },
  ),
  grammarCloze(
    "u40-2-7",
    "40.2 · If + had had",
    "I didn't get a taxi because I didn't have enough money. → __________",
    "If I'd had enough money, I'd have got a taxi",
    {
      alternatives: [
        "If I had had enough money, I would have got a taxi",
        "If I'd had enough money, I would have got a taxi",
        "If I had had enough money, I'd have got a taxi",
        "If I'd had enough money, I'd have taken a taxi",
        "If I had had enough money, I would have taken a taxi",
        "If I'd had enough money, I'd have got a taxi.",
        "If I had had enough money, I would have got a taxi.",
      ],
      explanation: "If I'd had enough money, I'd have got/taken a taxi.",
    },
  ),
  grammarCloze(
    "u40-2-8",
    "40.2 · If + had done",
    "Dan didn't do well at school, so he couldn't go to university. → __________",
    "If Dan had done well at school, he could have gone to university",
    {
      alternatives: [
        "If Dan had done better at school, he could have gone to university",
        "If Dan had done well at school, he would have gone to university",
        "If Dan had done better at school, he would have gone to university",
        "If Dan had done well at school, he could have gone to university.",
        "If Dan had done better at school, he would have gone to university.",
      ],
      explanation: "If Dan had done well/better…, he could/would have gone to university.",
    },
  ),

  // 40.3 — I wish + had …
  grammarCloze(
    "u40-3-2",
    "40.3 · I wish + had",
    "When you were younger, you never learned to play a musical instrument. → __________",
    "I wish I'd learned to play a musical instrument",
    {
      alternatives: [
        "I wish I had learned to play a musical instrument",
        "I wish I'd learned to play a musical instrument when I was younger",
        "I wish I had learned to play a musical instrument when I was younger",
        "I wish I could play a musical instrument",
        "I wish I was able to play a musical instrument",
        "I wish I'd learned to play a musical instrument.",
        "I wish I had learned to play a musical instrument.",
      ],
      explanation: "I wish I'd learned… / I wish I could play…",
    },
  ),
  grammarCloze(
    "u40-3-3",
    "40.3 · I wish + hadn't",
    "You've painted the gate red. Now you think red was wrong. → __________",
    "I wish I hadn't painted it red",
    {
      alternatives: [
        "I wish I hadn't painted the gate red",
        "I wish I had painted it a different colour",
        "I wish I hadn't painted it red.",
        "I wish I hadn't painted the gate red.",
        "I wish I had painted it a different colour.",
      ],
      explanation: "I wish I hadn't painted it/the gate red. / … a different colour.",
    },
  ),
  grammarCloze(
    "u40-3-4",
    "40.3 · I wish + had",
    "You travelled by car; going by train would have been better. → __________",
    "I wish we'd gone by train",
    {
      alternatives: [
        "I wish we had gone by train",
        "I wish we hadn't gone by car",
        "I wish we'd gone by train.",
        "I wish we had gone by train.",
        "I wish we hadn't gone by car.",
      ],
      explanation: "I wish we'd gone by train. / I wish we hadn't gone by car.",
    },
  ),
  grammarCloze(
    "u40-3-5",
    "40.3 · I wish + had had",
    "In New York you didn't have time to do everything. → __________",
    "I wish we'd had more time",
    {
      alternatives: [
        "I wish we had had more time",
        "I wish we'd had more time to do all the things we wanted to do",
        "I wish we had had more time to do all the things we wanted to do",
        "I wish we'd had more time.",
        "I wish we had had more time.",
      ],
      explanation: "I wish we'd / we had had more time…",
    },
  ),
  grammarCloze(
    "u40-3-6",
    "40.3 · I wish + hadn't",
    "You moved to a new flat and now don't like it. → __________",
    "I wish I hadn't moved",
    {
      alternatives: [
        "I wish I hadn't moved to my new flat",
        "I wish I'd stayed where I was",
        "I wish I had stayed where I was",
        "I wish I'd stayed in my old flat",
        "I wish I had stayed in my old flat",
        "I wish I hadn't moved.",
        "I wish I hadn't moved to my new flat.",
      ],
      explanation: "I wish I hadn't moved. / I wish I'd stayed…",
    },
  ),
];
