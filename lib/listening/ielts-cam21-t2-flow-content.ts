import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM21_T2_P1_KEYWORD_PARAPHRASES,
  CAM21_T2_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam21-t2-p1-intensive";
import {
  CAM21_T2_P2_KEYWORD_PARAPHRASES,
  CAM21_T2_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam21-t2-p2-intensive";
import {
  CAM21_T2_P3_KEYWORD_PARAPHRASES,
  CAM21_T2_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam21-t2-p3-intensive";
import {
  CAM21_T2_P4_KEYWORD_PARAPHRASES,
  CAM21_T2_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam21-t2-p4-intensive";

/** Flow nghe hiểu — CAM21 Test 2 (generated from transcript + QnA). */
const CAM21_T2_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Steynford College Classes",
      labelVi: "Lớp học tại Steynford College",
    },
    {
      key: "pred-1",
      labelEn: "Marsden Coastal Walk",
      labelVi: "Đi bộ ven biển Marsden",
    },
    {
      key: "pred-2",
      labelEn: "Food Safety Course Project",
      labelVi: "Dự án khóa an toàn thực phẩm",
    },
    {
      key: "pred-3",
      labelEn: "Cruise Ship Industry Challenges",
      labelVi: "Thách thức ngành du thuyền",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "One-day college courses covering baking, dates, fees and what participants need to bring.",
      labelVi: "Các khóa học một ngày về làm bánh, lịch học, học phí và những gì cần mang theo.",
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
      questionEn: "What detail is given for Vietnamese food?",
      questionVi: "Bài nghe nêu chi tiết gì về Vietnamese food?",
      answerEn: "(the) 13(th) (of) January / 13.01 / 13.1",
      answerVi: "(the) 13(th) (of) January / 13.01 / 13.1",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "What detail is given for Bread making?",
      questionVi: "Bài nghe nêu chi tiết gì về Bread making?",
      answerEn: "48 / forty-eight",
      answerVi: "48 / forty-eight",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Participants make white bread, sourdough and what?",
      questionVi: "Theo bài nghe, participants make white bread, sourdough and what?",
      answerEn: "pizza",
      answerVi: "pizza",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "The teacher trained in what?",
      questionVi: "Theo bài nghe, the teacher trained in what?",
      answerEn: "India",
      answerVi: "India",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Bring what?",
      questionVi: "Theo bài nghe, bring what?",
      answerEn: "mirror",
      answerVi: "mirror",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "What detail is given for Candle making?",
      questionVi: "Bài nghe nêu chi tiết gì về Candle making?",
      answerEn: "(the) 6(th) (of) April / 06.04 / 6.4",
      answerVi: "(the) 6(th) (of) April / 06.04 / 6.4",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Steynford College Classes sau lần nghe đầu…",
  transcriptCloze: CAM21_T2_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM21_T2_P1_KEYWORD_PARAPHRASES,
};

const CAM21_T2_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Marsden Coastal Walk",
      labelVi: "Đi bộ ven biển Marsden",
    },
    {
      key: "pred-1",
      labelEn: "Steynford College Classes",
      labelVi: "Lớp học tại Steynford College",
    },
    {
      key: "pred-2",
      labelEn: "Food Safety Course Project",
      labelVi: "Dự án khóa an toàn thực phẩm",
    },
    {
      key: "pred-3",
      labelEn: "Cruise Ship Industry Challenges",
      labelVi: "Thách thức ngành du thuyền",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Advice for a coastal walk plus a map labelling task for landmarks along the route.",
      labelVi: "Lời khuyên cho chuyến đi bộ ven biển kèm bài gắn nhãn bản đồ các điểm trên đường.",
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
      questionEn: "Which TWO pieces of advice are given about the Marsden Coastal Walk?",
      questionVi: "Which TWO pieces of advice are given about the Marsden Coastal Walk?",
      answerEn: "B — Don't miss the ruins of a certain building.; E — Don't worry about getting lost.",
      answerVi: "B — Don't miss the ruins of a certain building.; E — Don't worry about getting lost.",
    },
    {
      key: "exam-13&14",
      conversationEn: "Questions 13–14",
      conversationVi: "Câu 13–14",
      questionEn: "Which TWO things are said about the Melby Heritage Walk?",
      questionVi: "Which TWO things are said about the Melby Heritage Walk?",
      answerEn: "C — This is a circular walk.; D — A tower stands on the site of an older structure.",
      answerVi: "C — This is a circular walk.; D — A tower stands on the site of an older structure.",
    },
    {
      key: "exam-15",
      conversationEn: "Map — Q15",
      conversationVi: "Bản đồ — câu 15",
      questionEn: "On the map, where is Exhibition?",
      questionVi: "Trên bản đồ, Exhibition ở đâu?",
      answerEn: "F — F",
      answerVi: "F — F",
    },
    {
      key: "exam-16",
      conversationEn: "Map — Q16",
      conversationVi: "Bản đồ — câu 16",
      questionEn: "On the map, where is Baths?",
      questionVi: "Trên bản đồ, Baths ở đâu?",
      answerEn: "B — B",
      answerVi: "B — B",
    },
    {
      key: "exam-17",
      conversationEn: "Map — Q17",
      conversationVi: "Bản đồ — câu 17",
      questionEn: "On the map, where is Tools?",
      questionVi: "Trên bản đồ, Tools ở đâu?",
      answerEn: "D — D",
      answerVi: "D — D",
    },
    {
      key: "exam-18",
      conversationEn: "Map — Q18",
      conversationVi: "Bản đồ — câu 18",
      questionEn: "On the map, where is Vehicles?",
      questionVi: "Trên bản đồ, Vehicles ở đâu?",
      answerEn: "A — A",
      answerVi: "A — A",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Marsden Coastal Walk sau lần nghe đầu…",
  transcriptCloze: CAM21_T2_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM21_T2_P2_KEYWORD_PARAPHRASES,
};

const CAM21_T2_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Food Safety Course Project",
      labelVi: "Dự án khóa an toàn thực phẩm",
    },
    {
      key: "pred-1",
      labelEn: "Steynford College Classes",
      labelVi: "Lớp học tại Steynford College",
    },
    {
      key: "pred-2",
      labelEn: "Marsden Coastal Walk",
      labelVi: "Đi bộ ven biển Marsden",
    },
    {
      key: "pred-3",
      labelEn: "Cruise Ship Industry Challenges",
      labelVi: "Thách thức ngành du thuyền",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Students review food-safety sessions and map stages of developing a new food product.",
      labelVi: "Sinh viên ôn các buổi an toàn thực phẩm và lập sơ đồ các bước phát triển sản phẩm mới.",
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
      key: "exam-21&22",
      conversationEn: "Questions 21–22",
      conversationVi: "Câu 21–22",
      questionEn: "Which TWO facts in the sessions on food safety were new information for Nadia and Fergus?",
      questionVi: "Which TWO facts in the sessions on food safety were new information for Nadia and Fergus?",
      answerEn: "B — the number of diseases caused by contaminated food; E — the result of treating animals with antibiotics",
      answerVi: "B — the number of diseases caused by contaminated food; E — the result of treating animals with antibiotics",
    },
    {
      key: "exam-23&24",
      conversationEn: "Questions 23–24",
      conversationVi: "Câu 23–24",
      questionEn: "Which TWO features of a project aiming to prevent food fraud impressed Fergus?",
      questionVi: "Which TWO features of a project aiming to prevent food fraud impressed Fergus?",
      answerEn: "C — the use of multiple tests on food items; D — the variety of dietary requirements included",
      answerVi: "C — the use of multiple tests on food items; D — the variety of dietary requirements included",
    },
    {
      key: "exam-25&26",
      conversationEn: "Questions 25–26",
      conversationVi: "Câu 25–26",
      questionEn: "Which TWO topics do both students recommend should be included in the course?",
      questionVi: "Which TWO topics do both students recommend should be included in the course?",
      answerEn: "A — sustainable fishing; C — global differences in consumption",
      answerVi: "A — sustainable fishing; C — global differences in consumption",
    },
    {
      key: "exam-27",
      conversationEn: "Detail 27",
      conversationVi: "Chi tiết 27",
      questionEn: "What detail is given for Initial aim?",
      questionVi: "Bài nghe nêu chi tiết gì về Initial aim?",
      answerEn: "C",
      answerVi: "C",
    },
    {
      key: "exam-28",
      conversationEn: "Detail 28",
      conversationVi: "Chi tiết 28",
      questionEn: "What detail is given for Literature review?",
      questionVi: "Bài nghe nêu chi tiết gì về Literature review?",
      answerEn: "D",
      answerVi: "D",
    },
    {
      key: "exam-29",
      conversationEn: "Detail 29",
      conversationVi: "Chi tiết 29",
      questionEn: "What detail is given for Product development?",
      questionVi: "Bài nghe nêu chi tiết gì về Product development?",
      answerEn: "F",
      answerVi: "F",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Food Safety Course Project sau lần nghe đầu…",
  transcriptCloze: CAM21_T2_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM21_T2_P3_KEYWORD_PARAPHRASES,
};

const CAM21_T2_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Cruise Ship Industry Challenges",
      labelVi: "Thách thức ngành du thuyền",
    },
    {
      key: "pred-1",
      labelEn: "Steynford College Classes",
      labelVi: "Lớp học tại Steynford College",
    },
    {
      key: "pred-2",
      labelEn: "Marsden Coastal Walk",
      labelVi: "Đi bộ ven biển Marsden",
    },
    {
      key: "pred-3",
      labelEn: "Food Safety Course Project",
      labelVi: "Dự án khóa an toàn thực phẩm",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on overtourism, public perception and sustainability pressures on cruise ships.",
      labelVi: "Bài giảng về quá tải du lịch, nhận thức công chúng và áp lực bền vững với tàu du lịch.",
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
      questionEn: "What is one of the worst problems?",
      questionVi: "Theo bài nghe, what is one of the worst problems?",
      answerEn: "Pollution",
      answerVi: "Pollution",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "A tourist what is being introduced in some cities to reduce numbers, e.g. Barcelona?",
      questionVi: "Theo bài nghe, a tourist what is being introduced in some cities to reduce numbers, e.g. Barcelona?",
      answerEn: "tax",
      answerVi: "tax",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Bruges: action was taken to limit day trips from the nearby port because the city was becoming a 'theme park' (e.g. many shops were only stocking what and souvenirs)?",
      questionVi: "Theo bài nghe, bruges: action was taken to limit day trips from the nearby port because the city was becoming a 'theme park' (e.g. many shops were only stocking what and souvenirs)?",
      answerEn: "chocolate",
      answerVi: "chocolate",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Dubrovnik: limits the number of tourists by managing what of cruise ship arrivals?",
      questionVi: "Theo bài nghe, dubrovnik: limits the number of tourists by managing what of cruise ship arrivals?",
      answerEn: "timing",
      answerVi: "timing",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "There is an assumption about what of cruises?",
      questionVi: "Theo bài nghe, there is an assumption about what of cruises?",
      answerEn: "cost",
      answerVi: "cost",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "People think there may be too many what?",
      questionVi: "Theo bài nghe, people think there may be too many what?",
      answerEn: "rules",
      answerVi: "rules",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Cruise Ship Industry Challenges sau lần nghe đầu…",
  transcriptCloze: CAM21_T2_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM21_T2_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM21_T2_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam21-t2-p1": CAM21_T2_P1,
  "cam21-t2-p2": CAM21_T2_P2,
  "cam21-t2-p3": CAM21_T2_P3,
  "cam21-t2-p4": CAM21_T2_P4,
};
