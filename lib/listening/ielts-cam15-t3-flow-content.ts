import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM15_T3_P1_KEYWORD_PARAPHRASES,
  CAM15_T3_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t3-p1-intensive";
import {
  CAM15_T3_P2_KEYWORD_PARAPHRASES,
  CAM15_T3_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t3-p2-intensive";
import {
  CAM15_T3_P3_KEYWORD_PARAPHRASES,
  CAM15_T3_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t3-p3-intensive";
import {
  CAM15_T3_P4_KEYWORD_PARAPHRASES,
  CAM15_T3_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t3-p4-intensive";


/** Flow nghe hiểu — CAM15 Test 3 (generated from transcript + QnA). */
const CAM15_T3_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Employment Agency: Possible Jobs",
      labelVi: "Việc làm qua agency",
    },
    {
      key: "pred-1",
      labelEn: "Street Play Scheme",
      labelVi: "Street Play Scheme",
    },
    {
      key: "pred-2",
      labelEn: "Hazel Newspaper Analysis",
      labelVi: "Hazel phân tích báo",
    },
    {
      key: "pred-3",
      labelEn: "Early History of Keeping Clean",
      labelVi: "Lịch sử giữ vệ sinh",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A candidate hears about an admin role in North London and a warehouse job in South London.",
      labelVi: "Ứng viên nghe về việc admin ở Bắc London và kho hàng ở Nam London.",
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
      questionEn: "Administrative assistant in a company that produces what. (North London)?",
      questionVi: "Theo bài nghe, administrative assistant in a company that produces what. (North London)?",
      answerEn: "furniture",
      answerVi: "furniture",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Go to what and take notes?",
      questionVi: "Theo bài nghe, go to what and take notes?",
      answerEn: "meetings",
      answerVi: "meetings",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Management of what?",
      questionVi: "Theo bài nghe, management of what?",
      answerEn: "diary",
      answerVi: "diary",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Attention to what?",
      questionVi: "Theo bài nghe, attention to what?",
      answerEn: "detail(s)",
      answerVi: "detail(s)",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Need a minimum of what of experience of teleconferencing?",
      questionVi: "Theo bài nghe, need a minimum of what of experience of teleconferencing?",
      answerEn: "1 / one year",
      answerVi: "1 / one year",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Managing what?",
      questionVi: "Theo bài nghe, managing what?",
      answerEn: "deliveries",
      answerVi: "deliveries",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Employment Agency: Possible Jobs sau lần nghe đầu…",
  transcriptCloze: CAM15_T3_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T3_P1_KEYWORD_PARAPHRASES,
};

const CAM15_T3_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Street Play Scheme",
      labelVi: "Street Play Scheme",
    },
    {
      key: "pred-1",
      labelEn: "Employment Agency: Possible Jobs",
      labelVi: "Việc làm qua agency",
    },
    {
      key: "pred-2",
      labelEn: "Hazel Newspaper Analysis",
      labelVi: "Hazel phân tích báo",
    },
    {
      key: "pred-3",
      labelEn: "Early History of Keeping Clean",
      labelVi: "Lịch sử giữ vệ sinh",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Alice explains closing a road for children’s play, resident rules and surprising results from King Street.",
      labelVi: "Alice giải thích đóng đường cho trẻ chơi, quy tắc cư dân và kết quả King Street.",
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
      key: "exam-11",
      conversationEn: "Question 11",
      conversationVi: "Câu 11",
      questionEn: "When did the Street Play Scheme first take place?",
      questionVi: "When did the Street Play Scheme first take place?",
      answerEn: "B — three years ago",
      answerVi: "B — three years ago",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "How often is Beechwood Road closed to traffic now?",
      questionVi: "How often is Beechwood Road closed to traffic now?",
      answerEn: "A — once a week",
      answerVi: "A — once a week",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "Who is responsible for closing the road?",
      questionVi: "Who is responsible for closing the road?",
      answerEn: "C — local wardens",
      answerVi: "C — local wardens",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "Residents who want to use their cars",
      questionVi: "Residents who want to use their cars",
      answerEn: "B — must drive very slowly",
      answerVi: "B — must drive very slowly",
    },
    {
      key: "exam-15",
      conversationEn: "Question 15",
      conversationVi: "Câu 15",
      questionEn: "Alice says that Street Play Schemes are most needed in",
      questionVi: "Alice says that Street Play Schemes are most needed in",
      answerEn: "C — areas with heavy traffic.",
      answerVi: "C — areas with heavy traffic.",
    },
    {
      key: "exam-16",
      conversationEn: "Question 16",
      conversationVi: "Câu 16",
      questionEn: "What has been the reaction of residents who are not parents?",
      questionVi: "What has been the reaction of residents who are not parents?",
      answerEn: "B — They like seeing children play in the street.",
      answerVi: "B — They like seeing children play in the street.",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Street Play Scheme sau lần nghe đầu…",
  transcriptCloze: CAM15_T3_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T3_P2_KEYWORD_PARAPHRASES,
};

const CAM15_T3_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Hazel Newspaper Analysis",
      labelVi: "Hazel phân tích báo",
    },
    {
      key: "pred-1",
      labelEn: "Employment Agency: Possible Jobs",
      labelVi: "Việc làm qua agency",
    },
    {
      key: "pred-2",
      labelEn: "Street Play Scheme",
      labelVi: "Street Play Scheme",
    },
    {
      key: "pred-3",
      labelEn: "Early History of Keeping Clean",
      labelVi: "Lịch sử giữ vệ sinh",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A tutor sets how Hazel should analyse newspaper items and which article types to look for.",
      labelVi: "Tutor hướng dẫn Hazel phân tích tin báo và chọn loại bài viết nào.",
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
      conversationEn: "Detail 21",
      conversationVi: "Chi tiết 21",
      questionEn: "What what the item is on?",
      questionVi: "Theo bài nghe, what what the item is on?",
      answerEn: "page",
      answerVi: "page",
    },
    {
      key: "exam-22",
      conversationEn: "Detail 22",
      conversationVi: "Chi tiết 22",
      questionEn: "What of the item, including the headline?",
      questionVi: "Theo bài nghe, what of the item, including the headline?",
      answerEn: "size",
      answerVi: "size",
    },
    {
      key: "exam-23",
      conversationEn: "Detail 23",
      conversationVi: "Chi tiết 23",
      questionEn: "Any what. accompanying the item?",
      questionVi: "Theo bài nghe, any what. accompanying the item?",
      answerEn: "graphic(s)",
      answerVi: "graphic(s)",
    },
    {
      key: "exam-24",
      conversationEn: "Detail 24",
      conversationVi: "Chi tiết 24",
      questionEn: "What of the item, e.g. what’s made prominent?",
      questionVi: "Theo bài nghe, what of the item, e.g. what’s made prominent?",
      answerEn: "structure",
      answerVi: "structure",
    },
    {
      key: "exam-25",
      conversationEn: "Detail 25",
      conversationVi: "Chi tiết 25",
      questionEn: "The writer’s main what?",
      questionVi: "Theo bài nghe, the writer’s main what?",
      answerEn: "purpose",
      answerVi: "purpose",
    },
    {
      key: "exam-26",
      conversationEn: "Detail 26",
      conversationVi: "Chi tiết 26",
      questionEn: "What the writer may make about the reader?",
      questionVi: "Theo bài nghe, what the writer may make about the reader?",
      answerEn: "assumption(s)",
      answerVi: "assumption(s)",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Hazel Newspaper Analysis sau lần nghe đầu…",
  transcriptCloze: CAM15_T3_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T3_P3_KEYWORD_PARAPHRASES,
};

const CAM15_T3_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Early History of Keeping Clean",
      labelVi: "Lịch sử giữ vệ sinh",
    },
    {
      key: "pred-1",
      labelEn: "Employment Agency: Possible Jobs",
      labelVi: "Việc làm qua agency",
    },
    {
      key: "pred-2",
      labelEn: "Street Play Scheme",
      labelVi: "Street Play Scheme",
    },
    {
      key: "pred-3",
      labelEn: "Hazel Newspaper Analysis",
      labelVi: "Hazel phân tích báo",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture traces washing and soap from prehistory through Rome to later European bathing habits.",
      labelVi: "Bài giảng về rửa ráy và xà phòng từ thời tiền sử đến thói quen tắm châu Âu.",
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
      questionEn: "Water was used to wash off what?",
      questionVi: "Theo bài nghe, water was used to wash off what?",
      answerEn: "mud",
      answerVi: "mud",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Soap-like material found in what cylinders?",
      questionVi: "Theo bài nghe, soap-like material found in what cylinders?",
      answerEn: "clay",
      answerVi: "clay",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Used a strigil – scraper made of what?",
      questionVi: "Theo bài nghe, used a strigil – scraper made of what?",
      answerEn: "metal",
      answerVi: "metal",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Used soap to colour their what?",
      questionVi: "Theo bài nghe, used soap to colour their what?",
      answerEn: "hair",
      answerVi: "hair",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "From about 312 BC, water carried to Roman what by aqueducts?",
      questionVi: "Theo bài nghe, from about 312 BC, water carried to Roman what by aqueducts?",
      answerEn: "bath(s)",
      answerVi: "bath(s)",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Decline in bathing contributed to occurrence of what?",
      questionVi: "Theo bài nghe, decline in bathing contributed to occurrence of what?",
      answerEn: "disease(s)",
      answerVi: "disease(s)",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Early History of Keeping Clean sau lần nghe đầu…",
  transcriptCloze: CAM15_T3_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T3_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM15_T3_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam15-t3-p1": CAM15_T3_P1,
  "cam15-t3-p2": CAM15_T3_P2,
  "cam15-t3-p3": CAM15_T3_P3,
  "cam15-t3-p4": CAM15_T3_P4,
};
