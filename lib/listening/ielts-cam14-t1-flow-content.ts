import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM14_T1_P1_KEYWORD_PARAPHRASES,
  CAM14_T1_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam14-t1-p1-intensive";
import {
  CAM14_T1_P2_KEYWORD_PARAPHRASES,
  CAM14_T1_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam14-t1-p2-intensive";
import {
  CAM14_T1_P3_KEYWORD_PARAPHRASES,
  CAM14_T1_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam14-t1-p3-intensive";
import {
  CAM14_T1_P4_KEYWORD_PARAPHRASES,
  CAM14_T1_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam14-t1-p4-intensive";

/** Flow nghe hiểu — CAM14 Test 1 (generated from transcript + QnA). */
const CAM14_T1_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Crime Report Form",
      labelVi: "Mẫu báo cáo tội phạm",
    },
    {
      key: "pred-1",
      labelEn: "Induction Talk for New Apprentices",
      labelVi: "Buổi induction cho thực tập sinh",
    },
    {
      key: "pred-2",
      labelEn: "Cities Built by the Sea",
      labelVi: "Thành phố xây ven biển",
    },
    {
      key: "pred-3",
      labelEn: "Marine Renewable Energy",
      labelVi: "Năng lượng tái tạo từ biển",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Louise reports a stolen wallet: nationality, address, contents and descriptions of the boys involved.",
      labelVi: "Louise báo mất ví: quốc tịch, địa chỉ, đồ trong ví và mô tả các cậu bé liên quan.",
      correct: true,
    },
    {
      key: "gist-wrong-1",
      labelEn: "A formal academic lecture with no interaction",
      labelVi: "Bài giảng học thuật trang trọng, không có tương tác",
    },
    {
      key: "gist-wrong-2",
      labelEn: "A casual chat about weekend sports results",
      labelVi: "Cuộc trò chuyện thường về kết quả thể thao cuối tuần",
    },
    {
      key: "gist-wrong-3",
      labelEn: "A product advertisement on the radio",
      labelVi: "Quảng cáo sản phẩm trên radio",
    },
  ],
  detailQuestions: [
    {
      key: "exam-1",
      conversationEn: "Detail 1",
      conversationVi: "Chi tiết 1",
      questionEn: "Nationality what?",
      questionVi: "Theo bài nghe, nationality what?",
      answerEn: "Canadian",
      answerVi: "Canadian",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Reason for visit business (to buy antique what)?",
      questionVi: "Theo bài nghe, reason for visit business (to buy antique what)?",
      answerEn: "furniture",
      answerVi: "furniture",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Current address what Apartments (No 15)?",
      questionVi: "Theo bài nghe, current address what Apartments (No 15)?",
      answerEn: "Park",
      answerVi: "Park",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Items stolen - a wallet containing approximately what?",
      questionVi: "Theo bài nghe, items stolen - a wallet containing approximately what?",
      answerEn: "250 (sterling)",
      answerVi: "250 (sterling)",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Details of theft: what?",
      questionVi: "Theo bài nghe, details of theft: what?",
      answerEn: "phone",
      answerVi: "phone",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Date of theft what?",
      questionVi: "Theo bài nghe, date of theft what?",
      answerEn: "10(th) September",
      answerVi: "10(th) September",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Crime Report Form sau lần nghe đầu…",
  transcriptCloze: CAM14_T1_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM14_T1_P1_KEYWORD_PARAPHRASES,
};

const CAM14_T1_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Induction Talk for New Apprentices",
      labelVi: "Buổi induction cho thực tập sinh",
    },
    {
      key: "pred-1",
      labelEn: "Crime Report Form",
      labelVi: "Mẫu báo cáo tội phạm",
    },
    {
      key: "pred-2",
      labelEn: "Cities Built by the Sea",
      labelVi: "Thành phố xây ven biển",
    },
    {
      key: "pred-3",
      labelEn: "Marine Renewable Energy",
      labelVi: "Năng lượng tái tạo từ biển",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A company induction covers apprentice policy, training rules and what staff expect from new starters.",
      labelVi: "Công ty giới thiệu chính sách, quy tắc đào tạo và kỳ vọng với người mới.",
      correct: true,
    },
    {
      key: "gist-wrong-1",
      labelEn: "A formal academic lecture with no interaction",
      labelVi: "Bài giảng học thuật trang trọng, không có tương tác",
    },
    {
      key: "gist-wrong-2",
      labelEn: "A casual chat about weekend sports results",
      labelVi: "Cuộc trò chuyện thường về kết quả thể thao cuối tuần",
    },
    {
      key: "gist-wrong-3",
      labelEn: "A product advertisement on the radio",
      labelVi: "Quảng cáo sản phẩm trên radio",
    },
  ],
  detailQuestions: [
    {
      key: "exam-11&12",
      conversationEn: "Questions 11–12",
      conversationVi: "Câu 11–12",
      questionEn: "Which TWO pieces of advice for the first week of an apprenticeship does the manager give?",
      questionVi: "Which TWO pieces of advice for the first week of an apprenticeship does the manager give?",
      answerEn: "A — get to know colleagues; C — ask lots of questions",
      answerVi: "A — get to know colleagues; C — ask lots of questions",
    },
    {
      key: "exam-13&14",
      conversationEn: "Questions 13–14",
      conversationVi: "Câu 13–14",
      questionEn: "Which TWO things does the manager say mentors can help with?",
      questionVi: "Which TWO things does the manager say mentors can help with?",
      answerEn: "B — making career plans; E — reviewing progress",
      answerVi: "B — making career plans; E — reviewing progress",
    },
    {
      key: "exam-15",
      conversationEn: "Company policy for apprentices — Q15",
      conversationVi: "Company policy for apprentices — câu 15",
      questionEn: "What does the manager say about each of the following aspects of the company policy for apprentices?: Using the internet?",
      questionVi: "What does the manager say about each of the following aspects of the company policy for apprentices?: Using the internet?",
      answerEn: "B — There are some restrictions.",
      answerVi: "B — There are some restrictions.",
    },
    {
      key: "exam-16",
      conversationEn: "Company policy for apprentices — Q16",
      conversationVi: "Company policy for apprentices — câu 16",
      questionEn: "What does the manager say about each of the following aspects of the company policy for apprentices?: Flexible working?",
      questionVi: "What does the manager say about each of the following aspects of the company policy for apprentices?: Flexible working?",
      answerEn: "B — There are some restrictions.",
      answerVi: "B — There are some restrictions.",
    },
    {
      key: "exam-17",
      conversationEn: "Company policy for apprentices — Q17",
      conversationVi: "Company policy for apprentices — câu 17",
      questionEn: "What does the manager say about each of the following aspects of the company policy for apprentices?: Booking holidays?",
      questionVi: "What does the manager say about each of the following aspects of the company policy for apprentices?: Booking holidays?",
      answerEn: "C — It is against the rules.",
      answerVi: "C — It is against the rules.",
    },
    {
      key: "exam-18",
      conversationEn: "Company policy for apprentices — Q18",
      conversationVi: "Company policy for apprentices — câu 18",
      questionEn: "What does the manager say about each of the following aspects of the company policy for apprentices?: Working overtime?",
      questionVi: "What does the manager say about each of the following aspects of the company policy for apprentices?: Working overtime?",
      answerEn: "A — It is encouraged.",
      answerVi: "A — It is encouraged.",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Induction Talk for New Apprentices sau lần nghe đầu…",
  transcriptCloze: CAM14_T1_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM14_T1_P2_KEYWORD_PARAPHRASES,
};

const CAM14_T1_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Cities Built by the Sea",
      labelVi: "Thành phố xây ven biển",
    },
    {
      key: "pred-1",
      labelEn: "Crime Report Form",
      labelVi: "Mẫu báo cáo tội phạm",
    },
    {
      key: "pred-2",
      labelEn: "Induction Talk for New Apprentices",
      labelVi: "Buổi induction cho thực tập sinh",
    },
    {
      key: "pred-3",
      labelEn: "Marine Renewable Energy",
      labelVi: "Năng lượng tái tạo từ biển",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Students discuss coastal-city research, key decisions about development and risks from the sea.",
      labelVi: "Sinh viên thảo luận nghiên cứu thành phố ven biển, quyết định phát triển và rủi ro từ biển.",
      correct: true,
    },
    {
      key: "gist-wrong-1",
      labelEn: "A formal academic lecture with no interaction",
      labelVi: "Bài giảng học thuật trang trọng, không có tương tác",
    },
    {
      key: "gist-wrong-2",
      labelEn: "A casual chat about weekend sports results",
      labelVi: "Cuộc trò chuyện thường về kết quả thể thao cuối tuần",
    },
    {
      key: "gist-wrong-3",
      labelEn: "A product advertisement on the radio",
      labelVi: "Quảng cáo sản phẩm trên radio",
    },
  ],
  detailQuestions: [
    {
      key: "exam-21",
      conversationEn: "Question 21",
      conversationVi: "Câu 21",
      questionEn: "Carla and Rob were surprised to learn that coastal cities",
      questionVi: "Carla and Rob were surprised to learn that coastal cities",
      answerEn: "B — include most of the world’s largest cities.",
      answerVi: "B — include most of the world’s largest cities.",
    },
    {
      key: "exam-22",
      conversationEn: "Question 22",
      conversationVi: "Câu 22",
      questionEn: "According to Rob, building coastal cities near to rivers",
      questionVi: "According to Rob, building coastal cities near to rivers",
      answerEn: "A — may bring pollution to the cities.",
      answerVi: "A — may bring pollution to the cities.",
    },
    {
      key: "exam-23",
      conversationEn: "Question 23",
      conversationVi: "Câu 23",
      questionEn: "What mistake was made when building water drainage channels in Miami in the 1950s?",
      questionVi: "What mistake was made when building water drainage channels in Miami in the 1950s?",
      answerEn: "C — They did not allow for the effects of climate change.",
      answerVi: "C — They did not allow for the effects of climate change.",
    },
    {
      key: "exam-24",
      conversationEn: "Question 24",
      conversationVi: "Câu 24",
      questionEn: "What do Rob and Carla think that the authorities in Miami should do immediately?",
      questionVi: "What do Rob and Carla think that the authorities in Miami should do immediately?",
      answerEn: "B — pay for a new flood prevention system",
      answerVi: "B — pay for a new flood prevention system",
    },
    {
      key: "exam-25",
      conversationEn: "Question 25",
      conversationVi: "Câu 25",
      questionEn: "What do they agree should be the priority for international action?",
      questionVi: "What do they agree should be the priority for international action?",
      answerEn: "A — greater coordination of activities",
      answerVi: "A — greater coordination of activities",
    },
    {
      key: "exam-26",
      conversationEn: "Parts of the presentation — Q26",
      conversationVi: "Parts of the presentation — câu 26",
      questionEn: "What decision do the students make about each of the following parts of their presentation?: Historical background?",
      questionVi: "What decision do the students make about each of the following parts of their presentation?: Historical background?",
      answerEn: "B — keep it short",
      answerVi: "B — keep it short",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Cities Built by the Sea sau lần nghe đầu…",
  transcriptCloze: CAM14_T1_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM14_T1_P3_KEYWORD_PARAPHRASES,
};

const CAM14_T1_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Marine Renewable Energy",
      labelVi: "Năng lượng tái tạo từ biển",
    },
    {
      key: "pred-1",
      labelEn: "Crime Report Form",
      labelVi: "Mẫu báo cáo tội phạm",
    },
    {
      key: "pred-2",
      labelEn: "Induction Talk for New Apprentices",
      labelVi: "Buổi induction cho thực tập sinh",
    },
    {
      key: "pred-3",
      labelEn: "Cities Built by the Sea",
      labelVi: "Thành phố xây ven biển",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on ocean energy: why demand is rising, wave power systems and environmental concerns.",
      labelVi: "Bài giảng về năng lượng đại dương: nhu cầu tăng, hệ thống sóng và lo ngại môi trường.",
      correct: true,
    },
    {
      key: "gist-wrong-1",
      labelEn: "A formal academic lecture with no interaction",
      labelVi: "Bài giảng học thuật trang trọng, không có tương tác",
    },
    {
      key: "gist-wrong-2",
      labelEn: "A casual chat about weekend sports results",
      labelVi: "Cuộc trò chuyện thường về kết quả thể thao cuối tuần",
    },
    {
      key: "gist-wrong-3",
      labelEn: "A product advertisement on the radio",
      labelVi: "Quảng cáo sản phẩm trên radio",
    },
  ],
  detailQuestions: [
    {
      key: "exam-31",
      conversationEn: "Detail 31",
      conversationVi: "Chi tiết 31",
      questionEn: "More energy required because of growth in population and what?",
      questionVi: "Theo bài nghe, more energy required because of growth in population and what?",
      answerEn: "industry",
      answerVi: "industry",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Advantage: waves provide what source of renewable energy?",
      questionVi: "Theo bài nghe, advantage: waves provide what source of renewable energy?",
      answerEn: "constant",
      answerVi: "constant",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Waves can move in any what?",
      questionVi: "Theo bài nghe, waves can move in any what?",
      answerEn: "direction",
      answerVi: "direction",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Movement of sand, etc. on what of the ocean may be affected?",
      questionVi: "Theo bài nghe, movement of sand, etc. on what of the ocean may be affected?",
      answerEn: "floor",
      answerVi: "floor",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "Tides are more what than waves?",
      questionVi: "Theo bài nghe, tides are more what than waves?",
      answerEn: "predictable",
      answerVi: "predictable",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Will be created in what at Swansea?",
      questionVi: "Theo bài nghe, will be created in what at Swansea?",
      answerEn: "bay",
      answerVi: "bay",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Marine Renewable Energy sau lần nghe đầu…",
  transcriptCloze: CAM14_T1_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM14_T1_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM14_T1_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam14-t1-p1": CAM14_T1_P1,
  "cam14-t1-p2": CAM14_T1_P2,
  "cam14-t1-p3": CAM14_T1_P3,
  "cam14-t1-p4": CAM14_T1_P4,
};
