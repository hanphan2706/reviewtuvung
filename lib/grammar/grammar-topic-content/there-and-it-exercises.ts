import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 84 exercises — There … and It … (English Grammar in Use · Intermediate).
 */
export const U84_THERE_AND_IT_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u84-1-3",
    "84.1 · there / it",
    "__________ something wrong with the washing machine. It's not working properly.",
    "There's",
    {
      alternatives: ["There is"],
      explanation: "There's something wrong… (tồn tại vấn đề).",
    },
  ),
  grammarCloze(
    "u84-1-4",
    "84.1 · there / it",
    "I wanted to visit the museum yesterday, but __________ enough time.",
    "there wasn't",
    {
      alternatives: ["there was not"],
      explanation: "there wasn't enough time.",
    },
  ),
  grammarCloze(
    "u84-1-5",
    "84.1 · there / it",
    "What's that new building over there? __________ a hotel?",
    "Is it",
    {
      explanation: "Is it a hotel? (it = tòa nhà đó).",
    },
  ),
  grammarCloze(
    "u84-1-6",
    "84.1 · there / it",
    "How can we get across the river? __________ a bridge?",
    "Is there",
    {
      explanation: "Is there a bridge? (có cầu không?).",
    },
  ),
  grammarCloze(
    "u84-1-8",
    "84.1 · there / it",
    "I can't find my phone. __________ in my bag – I just looked.",
    "It isn't",
    {
      alternatives: ["It's not", "It is not"],
      explanation: "It isn't in my bag (it = phone).",
    },
  ),
  grammarCloze(
    "u84-1-9",
    "84.1 · there / it",
    "__________ anything interesting on TV, so I turned it off.",
    "There wasn't",
    {
      alternatives: ["There was not"],
      explanation: "There wasn't anything interesting…",
    },
  ),
  grammarCloze(
    "u84-1-11",
    "84.1 · there / it",
    "I couldn't see anything. __________ completely dark.",
    "It was",
    {
      explanation: "It was completely dark (tình huống).",
    },
  ),
  grammarCloze(
    "u84-1-13",
    "84.1 · there / it",
    "__________ difficult to get a job right now. __________ a lot of unemployment.",
    "It's ... There's",
    {
      alternatives: ["It is ... There is", "It's ... There is", "It is ... There's"],
      explanation: "It's difficult… There's a lot of unemployment.",
    },
  ),
  grammarCloze(
    "u84-2-2",
    "84.2 · There …",
    "This soup is very salty. __________ in the soup.",
    "There's a lot of salt",
    {
      alternatives: [
        "There is a lot of salt",
        "There's too much salt",
        "There is too much salt",
      ],
      explanation: "There's a lot of / too much salt in the soup.",
    },
  ),
  grammarCloze(
    "u84-2-3",
    "84.2 · There …",
    "The box was empty. __________ in the box.",
    "There was nothing",
    {
      explanation: "There was nothing in the box.",
    },
  ),
  grammarCloze(
    "u84-2-4",
    "84.2 · There …",
    "About 50 people came to the meeting. __________ at the meeting.",
    "There were about 50 people",
    {
      alternatives: ["There were about fifty people"],
      explanation: "There were about 50 people at the meeting.",
    },
  ),
  grammarCloze(
    "u84-2-5",
    "84.2 · There …",
    "The film is very violent. __________ in the film.",
    "There's a lot of violence",
    {
      alternatives: ["There is a lot of violence"],
      explanation: "There's a lot of violence in the film.",
    },
  ),
  grammarCloze(
    "u84-3-2",
    "84.3 · there + modal",
    "'Do we have any eggs?' 'I'm not sure. __________ some in the fridge.'",
    "There may be",
    {
      alternatives: ["There might be"],
      explanation: "There may/might be some…",
    },
  ),
  grammarCloze(
    "u84-3-3",
    "84.3 · there + modal",
    "I think everything will be OK. __________ any problems.",
    "There won't be",
    {
      alternatives: ["There will not be"],
      explanation: "There won't be any problems.",
    },
  ),
  grammarCloze(
    "u84-3-4",
    "84.3 · there + going to",
    "Look at those clouds. __________ a storm. I'm sure of it.",
    "There's going to be",
    {
      alternatives: ["There is going to be"],
      explanation: "There's going to be a storm.",
    },
  ),
  grammarCloze(
    "u84-3-5",
    "84.3 · there used to",
    "There isn't a school in the village. __________ one, but it closed a few years ago.",
    "There used to be",
    {
      explanation: "There used to be one…",
    },
  ),
  grammarCloze(
    "u84-4-3",
    "84.4 · there not it",
    "After the lecture __________ an opportunity to ask questions.",
    "there will be",
    {
      alternatives: ["there'll be", "there will be"],
      explanation: "there will be an opportunity (không: it will be).",
    },
  ),
  grammarCloze(
    "u84-4-4",
    "84.4 · there not it",
    "Why was she so unfriendly? __________ a reason.",
    "There must have been",
    {
      explanation: "There must have been a reason.",
    },
  ),
  grammarCloze(
    "u84-4-8",
    "84.4 · there not it",
    "My phone won't work here. __________.",
    "There's no signal",
    {
      alternatives: ["There is no signal"],
      explanation: "There's no signal (không: It's no signal).",
    },
  ),
  grammarCloze(
    "u84-4-10",
    "84.4 · There's sure",
    "We won't have any problem parking. __________ a car park somewhere.",
    "There's sure to be",
    {
      alternatives: ["There is sure to be", "There's bound to be", "There is bound to be"],
      explanation: "There's sure/bound to be a car park somewhere.",
    },
  ),
];
