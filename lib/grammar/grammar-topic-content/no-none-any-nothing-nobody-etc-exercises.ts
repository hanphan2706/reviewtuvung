import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 86 exercises — No/None/Any / Nothing/Nobody etc.
 */
export const U86_NO_NONE_ANY_NOTHING_NOBODY_ETC_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u86-1-3",
    "86.1 · no / none / any",
    "We had to walk home. There were __________ taxis.",
    "no",
    {
      explanation: "There were no taxis.",
    },
  ),
  grammarCloze(
    "u86-1-4",
    "86.1 · no / none / any",
    "We had to walk home. There weren't __________ taxis.",
    "any",
    {
      explanation: "There weren't any taxis.",
    },
  ),
  grammarCloze(
    "u86-1-5",
    "86.1 · no / none / any",
    "'How many eggs do we have?' '__________. Shall I get some?'",
    "None",
    {
      alternatives: ["none"],
      explanation: "None. (không kèm danh từ)",
    },
  ),
  grammarCloze(
    "u86-1-6",
    "86.1 · no / none / any",
    "There's nowhere to cross the river. There's __________ bridge.",
    "no",
    {
      explanation: "There's no bridge.",
    },
  ),
  grammarCloze(
    "u86-1-7",
    "86.1 · no / none / any",
    "We took a few pictures, but __________ of them were very good.",
    "none",
    {
      explanation: "none of them…",
    },
  ),
  grammarCloze(
    "u86-1-9",
    "86.1 · no / none / any",
    "I had to do what I did. I had __________ alternative.",
    "no",
    {
      explanation: "I had no alternative.",
    },
  ),
  grammarCloze(
    "u86-1-12",
    "86.1 · no / none / any",
    "Everyone knows they are getting married. It's __________ secret.",
    "no",
    {
      explanation: "It's no secret.",
    },
  ),
  grammarCloze(
    "u86-1-14",
    "86.1 · no / none / any",
    "'Do you know where Chris is?' 'I'm sorry. I have __________ idea.'",
    "no",
    {
      explanation: "I have no idea.",
    },
  ),
  grammarCloze(
    "u86-2-2",
    "86.2 · Nobody etc.",
    "Who are you waiting for? __________ . I'm just standing here.",
    "Nobody",
    {
      alternatives: ["No-one", "No one", "nobody", "no-one", "no one"],
      explanation: "Nobody / No-one.",
    },
  ),
  grammarCloze(
    "u86-2-4",
    "86.2 · Nowhere",
    "Where are you going? __________ . I'm staying here.",
    "Nowhere",
    {
      alternatives: ["nowhere"],
      explanation: "Nowhere.",
    },
  ),
  grammarCloze(
    "u86-2-6",
    "86.2 · Nothing",
    "How much does it cost to get into the museum? __________ . It's free.",
    "Nothing",
    {
      alternatives: ["nothing"],
      explanation: "Nothing.",
    },
  ),
  grammarCloze(
    "u86-2-8",
    "86.2 · not + any-",
    "I'm not waiting for __________.",
    "anybody",
    {
      alternatives: ["anyone"],
      explanation: "I'm not waiting for anybody/anyone.",
    },
  ),
  grammarCloze(
    "u86-2-10",
    "86.2 · not + any-",
    "I'm not going __________.",
    "anywhere",
    {
      explanation: "I'm not going anywhere.",
    },
  ),
  grammarCloze(
    "u86-3-2",
    "86.3 · no-/any-",
    "The bus was completely empty. There was __________ on it.",
    "nobody",
    {
      alternatives: ["no-one", "no one"],
      explanation: "There was nobody/no-one on it.",
    },
  ),
  grammarCloze(
    "u86-3-3",
    "86.3 · no-/any-",
    "'Where did you go for your holidays?' '__________. I didn't go away.'",
    "Nowhere",
    {
      alternatives: ["nowhere"],
      explanation: "Nowhere.",
    },
  ),
  grammarCloze(
    "u86-3-5",
    "86.3 · no-/any-",
    "Everybody seemed satisfied. __________ complained.",
    "Nobody",
    {
      alternatives: ["No-one", "No one", "nobody", "no-one", "no one"],
      explanation: "Nobody/No-one complained.",
    },
  ),
  grammarCloze(
    "u86-3-9",
    "86.3 · no-/any-",
    "There was complete silence in the room. __________ said __________.",
    "Nobody ... anything",
    {
      alternatives: [
        "No-one ... anything",
        "No one ... anything",
        "Nobody ... anything",
        "nobody ... anything",
      ],
      explanation: "Nobody/No-one said anything.",
    },
  ),
  grammarCloze(
    "u86-4-2",
    "86.4 · nobody / anybody",
    "The accident looked bad, but fortunately __________ was seriously injured.",
    "nobody",
    {
      alternatives: ["no-one", "no one"],
      explanation: "fortunately nobody was injured (không: anybody).",
    },
  ),
  grammarCloze(
    "u86-4-4",
    "86.4 · Anybody",
    "The exam is very easy. __________ can pass it.",
    "Anybody",
    {
      alternatives: ["Anyone", "anybody", "anyone"],
      explanation: "Anybody can pass it (= bất kỳ ai).",
    },
  ),
  grammarCloze(
    "u86-4-7",
    "86.4 · anything",
    "I don't know __________ about economics.",
    "anything",
    {
      explanation: "don't know anything (không: nothing).",
    },
  ),
];
