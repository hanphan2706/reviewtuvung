import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 85 exercises — Some and Any (English Grammar in Use · Intermediate).
 */
export const U85_SOME_AND_ANY_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u85-1-2",
    "85.1 · some / any",
    "Tonight I'm going out with __________ friends of mine.",
    "some",
    {
      explanation: "câu khẳng định → some friends.",
    },
  ),
  grammarCloze(
    "u85-1-3",
    "85.1 · some / any",
    "Have you seen __________ good movies recently?",
    "any",
    {
      explanation: "câu hỏi không chắc → any.",
    },
  ),
  grammarCloze(
    "u85-1-4",
    "85.1 · some / any",
    "I'd like __________ information about what there is to see in this town.",
    "some",
    {
      explanation: "muốn / xin → some information.",
    },
  ),
  grammarCloze(
    "u85-1-5",
    "85.1 · some / any",
    "I didn't have __________ money. I had to borrow __________.",
    "any ... some",
    {
      alternatives: ["any ... some"],
      explanation: "didn't have any; borrow some.",
    },
  ),
  grammarCloze(
    "u85-1-6",
    "85.1 · some / any",
    "You can use your card to withdraw money at __________ cash machine.",
    "any",
    {
      explanation: "any = bất kỳ máy nào.",
    },
  ),
  grammarCloze(
    "u85-1-7",
    "85.1 · some / any",
    "Those apples look nice. Shall we get __________?",
    "some",
    {
      explanation: "đề nghị lấy → some.",
    },
  ),
  grammarCloze(
    "u85-1-9",
    "85.1 · some / any",
    "'Can I have __________ more coffee, please?' 'Sure. Help yourself.'",
    "some",
    {
      explanation: "xin thêm → some more coffee.",
    },
  ),
  grammarCloze(
    "u85-1-11",
    "85.1 · some / any",
    "We wanted to buy __________ grapes, but they didn't have __________ in the shop.",
    "some ... any",
    {
      explanation: "wanted some; didn't have any.",
    },
  ),
  grammarCloze(
    "u85-2-2",
    "85.2 · some-/any-",
    "There's __________ at the door. Can you go and see who it is?",
    "somebody",
    {
      alternatives: ["someone"],
      explanation: "There's somebody/someone at the door.",
    },
  ),
  grammarCloze(
    "u85-2-3",
    "85.2 · some-/any-",
    "Does __________ mind if I open the window?",
    "anybody",
    {
      alternatives: ["anyone"],
      explanation: "Does anybody/anyone mind…?",
    },
  ),
  grammarCloze(
    "u85-2-4",
    "85.2 · some-/any-",
    "I can't drive and I don't know __________ about cars.",
    "anything",
    {
      explanation: "don't know anything.",
    },
  ),
  grammarCloze(
    "u85-2-5",
    "85.2 · some-/any-",
    "You must be hungry. Why don't I get you __________ to eat?",
    "something",
    {
      explanation: "get you something to eat.",
    },
  ),
  grammarCloze(
    "u85-2-8",
    "85.2 · some-/any-",
    "Let's go away. Let's go __________ warm and sunny.",
    "somewhere",
    {
      explanation: "go somewhere warm…",
    },
  ),
  grammarCloze(
    "u85-2-11",
    "85.2 · any-",
    "This is a no-parking area. __________ who parks their car here will have to pay a fine.",
    "Anybody",
    {
      alternatives: ["Anyone", "anybody", "anyone"],
      explanation: "Anybody/Anyone who parks…",
    },
  ),
  grammarCloze(
    "u85-2-13",
    "85.2 · any-",
    "They stay at home all the time. They never seem to go __________.",
    "anywhere",
    {
      explanation: "never go anywhere.",
    },
  ),
  grammarCloze(
    "u85-2-15",
    "85.2 · some-",
    "'Can I ask you __________?' 'Sure. What do you want to ask?'",
    "something",
    {
      explanation: "Can I ask you something?",
    },
  ),
  grammarCloze(
    "u85-3-2",
    "85.3 · any = any day",
    "When shall we meet? Monday? I don't mind. __________ next week will be OK for me.",
    "Any day",
    {
      alternatives: ["any day"],
      explanation: "Any day next week…",
    },
  ),
  grammarCloze(
    "u85-3-3",
    "85.3 · Anything",
    "What do you want to eat? __________. I don't mind. Whatever you have.",
    "Anything",
    {
      alternatives: ["anything"],
      explanation: "Anything (= không quan trọng món nào).",
    },
  ),
  grammarCloze(
    "u85-3-4",
    "85.3 · anybody",
    "Who shall I invite to the party? It's your party. You can invite __________ you want.",
    "anybody",
    {
      alternatives: ["anyone"],
      explanation: "invite anybody/anyone you want.",
    },
  ),
  grammarCloze(
    "u85-3-6",
    "85.3 · anywhere",
    "Where shall I sit? It's up to you. You can sit __________ you like.",
    "anywhere",
    {
      explanation: "sit anywhere you like.",
    },
  ),
];
