import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  BASIC_IELTS_ANSWERS_DUMP,
  type BasicIeltsLessonAnswersDump,
} from "@/lib/listening/basic-ielts-flow-answers";

/** Answer key — Unit 1 Exercise 3 Names of places (Scripts p.95). */
export const BASIC_IELTS_U01_PLACES_ANSWERS = [
  "Edinburgh",
  "Glasgow",
  "Aberdeen",
  "Dundee",
  "Cardiff",
  "Swansea",
  "Newport",
  "Belfast",
  "Manchester",
  "Leeds",
  "Sheffield",
  "Leicester",
  "Liverpool",
  "Birmingham",
  "Nottingham",
  "Coventry",
  "Bristol",
  "Bradford",
  "London",
  "Brighton",
] as const;

function placesDetailQuestions(): ListeningFlowLessonContent["detailQuestions"] {
  return BASIC_IELTS_U01_PLACES_ANSWERS.map((answer, index) => {
    const n = index + 1;
    return {
      key: `q${n}`,
      conversationEn: String(n),
      conversationVi: String(n),
      questionEn: "",
      questionVi: "",
      answerEn: answer,
      answerVi: answer,
    };
  });
}

function lessonFromDump(dump: BasicIeltsLessonAnswersDump): ListeningFlowLessonContent {
  return {
    predictionOptions: [],
    gistOptions: [],
    detailPromptEn: dump.detailPromptEn,
    detailPromptVi: dump.detailPromptVi,
    detailQuestions: dump.detailQuestions.map((item) => ({
      key: item.key,
      conversationEn: item.conversationEn,
      conversationVi: item.conversationVi,
      questionEn: item.questionEn,
      questionVi: item.questionVi,
      answerEn: item.answerEn,
      answerVi: item.answerVi,
    })),
    memoryPlaceholder: "",
  };
}

const NAMES_OF_PLACES_CONTENT: ListeningFlowLessonContent = {
  predictionOptions: [],
  gistOptions: [],
  detailPromptEn:
    "Listen to the names of the places and write them down. Do you know where these places are in Britain?",
  detailPromptVi:
    "Nghe tên các địa danh và viết lại. Bạn có biết các nơi này ở đâu trên nước Anh không?",
  detailQuestions: placesDetailQuestions(),
  memoryPlaceholder: "",
};

export const BASIC_IELTS_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "basic-ielts-u01-places": NAMES_OF_PLACES_CONTENT,
  ...Object.fromEntries(
    Object.entries(BASIC_IELTS_ANSWERS_DUMP).map(([partId, dump]) => [partId, lessonFromDump(dump)]),
  ),
};
