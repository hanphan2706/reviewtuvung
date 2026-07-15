import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 80 exercises — Noun + Noun (English Grammar in Use · Intermediate).
 */
export const U80_NOUN_NOUN_EXERCISES: readonly GrammarExercise[] = [
  // 80.1
  grammarCloze(
    "u80-1-3",
    "80.1 · noun + noun",
    "A ticket to travel by train is a __________.",
    "train ticket",
    {
      explanation: "train + ticket.",
    },
  ),
  grammarCloze(
    "u80-1-4",
    "80.1 · noun + noun",
    "A machine you use to get a ticket is a __________.",
    "ticket machine",
    {
      explanation: "ticket + machine.",
    },
  ),
  grammarCloze(
    "u80-1-5",
    "80.1 · noun + noun",
    "The staff at a hotel are the __________.",
    "hotel staff",
    {
      explanation: "hotel + staff.",
    },
  ),
  grammarCloze(
    "u80-1-6",
    "80.1 · noun + noun",
    "The results of your exams are your __________.",
    "exam results",
    {
      explanation: "exam + results.",
    },
  ),
  grammarCloze(
    "u80-1-7",
    "80.1 · noun + noun",
    "A horse that runs in races is a __________.",
    "race horse",
    {
      alternatives: ["racehorse"],
      explanation: "race + horse.",
    },
  ),
  grammarCloze(
    "u80-1-8",
    "80.1 · noun + noun",
    "A race for horses is a __________.",
    "horse race",
    {
      alternatives: ["horserace"],
      explanation: "horse + race.",
    },
  ),
  grammarCloze(
    "u80-1-9",
    "80.1 · noun + noun",
    "Shoes for running are __________.",
    "running shoes",
    {
      explanation: "running + shoes.",
    },
  ),
  grammarCloze(
    "u80-1-10",
    "80.1 · noun + noun",
    "A shop that sells shoes is a __________.",
    "shoe shop",
    {
      alternatives: ["shoe store"],
      explanation: "shoe (sg) + shop.",
    },
  ),
  grammarCloze(
    "u80-1-14",
    "80.1 · noun + noun",
    "Workers at a car factory are __________.",
    "car factory workers",
    {
      explanation: "car factory + workers.",
    },
  ),
  grammarCloze(
    "u80-1-15",
    "80.1 · noun + noun",
    "A scheme for the improvement of a road is a __________.",
    "road improvement scheme",
    {
      explanation: "road improvement + scheme.",
    },
  ),

  // 80.2
  grammarCloze(
    "u80-2-2",
    "80.2 · ghép hai từ",
    "You should wear this when you're driving. → a __________",
    "seat belt",
    {
      alternatives: ["seatbelt"],
      explanation: "seat + belt.",
    },
  ),
  grammarCloze(
    "u80-2-3",
    "80.2 · ghép hai từ",
    "You can use this to pay for things. → a __________",
    "credit card",
    {
      explanation: "credit + card.",
    },
  ),
  grammarCloze(
    "u80-2-4",
    "80.2 · ghép hai từ",
    "This will tell you if it's going to rain. → the __________",
    "weather forecast",
    {
      explanation: "weather + forecast.",
    },
  ),
  grammarCloze(
    "u80-2-5",
    "80.2 · ghép hai từ",
    "This is useful if you have a lot of dirty clothes. → a __________",
    "washing machine",
    {
      explanation: "washing + machine.",
    },
  ),
  grammarCloze(
    "u80-2-9",
    "80.2 · ghép hai từ",
    "This person transports things by road. → a __________",
    "truck driver",
    {
      alternatives: ["lorry driver"],
      explanation: "truck + driver.",
    },
  ),

  // 80.3
  grammarCloze(
    "u80-3-2",
    "80.3 · sắp xếp danh từ",
    "Jack likes sport. He plays for his __________.",
    "school football team",
    {
      explanation: "school + football + team.",
    },
  ),
  grammarCloze(
    "u80-3-3",
    "80.3 · sắp xếp danh từ",
    "Anna works for a __________.",
    "film production company",
    {
      explanation: "film + production + company.",
    },
  ),
  grammarCloze(
    "u80-3-5",
    "80.3 · sắp xếp danh từ",
    "You can get a map at the __________.",
    "tourist information office",
    {
      explanation: "tourist + information + office.",
    },
  ),

  // 80.4
  grammarCloze(
    "u80-4-2",
    "80.4 · đo lường làm tính từ",
    "It's only a __________ flight from London to Madrid.",
    "two-hour",
    {
      alternatives: ["two hour"],
      explanation: "a two-hour flight (không: two hours flight).",
    },
  ),
  grammarCloze(
    "u80-4-3",
    "80.4 · đo lường làm tính từ",
    "It took only __________ to fly to Madrid.",
    "two hours",
    {
      explanation: "đứng một mình → two hours (số nhiều).",
    },
  ),
];
