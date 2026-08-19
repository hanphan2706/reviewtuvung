import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM14_T2_P1_KEYWORD_PARAPHRASES,
  CAM14_T2_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam14-t2-p1-intensive";
import {
  CAM14_T2_P2_KEYWORD_PARAPHRASES,
  CAM14_T2_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam14-t2-p2-intensive";
import {
  CAM14_T2_P3_KEYWORD_PARAPHRASES,
  CAM14_T2_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam14-t2-p3-intensive";
import {
  CAM14_T2_P4_KEYWORD_PARAPHRASES,
  CAM14_T2_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam14-t2-p4-intensive";

/** Flow nghe hiểu — CAM14 Test 2 (generated from transcript + QnA). */
const CAM14_T2_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Total Health Clinic",
      labelVi: "Phòng khám Total Health",
    },
    {
      key: "pred-1",
      labelEn: "Visit to Branley Castle",
      labelVi: "Tham quan lâu đài Branley",
    },
    {
      key: "pred-2",
      labelEn: "Woolly Mammoths on St Paul’s Island",
      labelVi: "Voi ma mút trên đảo St Paul",
    },
    {
      key: "pred-3",
      labelEn: "The History of Weather Forecasting",
      labelVi: "Lịch sử dự báo thời tiết",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Julie books at a clinic: contact details, injury history, sport and recommended vitamins.",
      labelVi: "Julie đặt lịch: liên hệ, tiền sử chấn thương, thể thao và vitamin được khuyên.",
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
      questionEn: "Contact phone what?",
      questionVi: "Theo bài nghe, contact phone what?",
      answerEn: "219 442 9785",
      answerVi: "219 442 9785",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Date of birth what, 1992?",
      questionVi: "Theo bài nghe, date of birth what, 1992?",
      answerEn: "10(th) October",
      answerVi: "10(th) October",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Occupation works as what?",
      questionVi: "Theo bài nghe, occupation works as what?",
      answerEn: "manager",
      answerVi: "manager",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Insurance company what Life Insurance?",
      questionVi: "Theo bài nghe, insurance company what Life Insurance?",
      answerEn: "Cawley",
      answerVi: "Cawley",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Type of problem pain in her left what?",
      questionVi: "Theo bài nghe, type of problem pain in her left what?",
      answerEn: "knee",
      answerVi: "knee",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "When it began what ago?",
      questionVi: "Theo bài nghe, when it began what ago?",
      answerEn: "3 weeks",
      answerVi: "3 weeks",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Total Health Clinic sau lần nghe đầu…",
  transcriptCloze: CAM14_T2_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM14_T2_P1_KEYWORD_PARAPHRASES,
};

const CAM14_T2_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Visit to Branley Castle",
      labelVi: "Tham quan lâu đài Branley",
    },
    {
      key: "pred-1",
      labelEn: "Total Health Clinic",
      labelVi: "Phòng khám Total Health",
    },
    {
      key: "pred-2",
      labelEn: "Woolly Mammoths on St Paul’s Island",
      labelVi: "Voi ma mút trên đảo St Paul",
    },
    {
      key: "pred-3",
      labelEn: "The History of Weather Forecasting",
      labelVi: "Lịch sử dự báo thời tiết",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A guide outlines castle visits, then labels a plan for walls, displays, dancing and the shop.",
      labelVi: "Hướng dẫn viên mô tả chuyến thăm và gắn nhãn sơ đồ tường, trưng bày và cửa hàng.",
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
      questionEn: "Before Queen Elizabeth I visited the castle in 1576,",
      questionVi: "Before Queen Elizabeth I visited the castle in 1576,",
      answerEn: "B — a new building was constructed for her.",
      answerVi: "B — a new building was constructed for her.",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "In 1982, the castle was sold to",
      questionVi: "In 1982, the castle was sold to",
      answerEn: "C — an entertainment company.",
      answerVi: "C — an entertainment company.",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "In some of the rooms, visitors can",
      questionVi: "In some of the rooms, visitors can",
      answerEn: "C — see models of historical figures moving and talking.",
      answerVi: "C — see models of historical figures moving and talking.",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "In the castle park, visitors can",
      questionVi: "In the castle park, visitors can",
      answerEn: "B — go to an art exhibition.",
      answerVi: "B — go to an art exhibition.",
    },
    {
      key: "exam-15",
      conversationEn: "Question 15",
      conversationVi: "Câu 15",
      questionEn: "At the end of the visit, the group will have",
      questionVi: "At the end of the visit, the group will have",
      answerEn: "A — afternoon tea in the conservatory.",
      answerVi: "A — afternoon tea in the conservatory.",
    },
    {
      key: "exam-16",
      conversationEn: "Map — Q16",
      conversationVi: "Bản đồ — câu 16",
      questionEn: "On the map, where is Starting point for walking the walls?",
      questionVi: "Trên bản đồ, Starting point for walking the walls ở đâu?",
      answerEn: "H — H",
      answerVi: "H — H",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Visit to Branley Castle sau lần nghe đầu…",
  transcriptCloze: CAM14_T2_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM14_T2_P2_KEYWORD_PARAPHRASES,
};

const CAM14_T2_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Woolly Mammoths on St Paul’s Island",
      labelVi: "Voi ma mút trên đảo St Paul",
    },
    {
      key: "pred-1",
      labelEn: "Total Health Clinic",
      labelVi: "Phòng khám Total Health",
    },
    {
      key: "pred-2",
      labelEn: "Visit to Branley Castle",
      labelVi: "Tham quan lâu đài Branley",
    },
    {
      key: "pred-3",
      labelEn: "The History of Weather Forecasting",
      labelVi: "Lịch sử dự báo thời tiết",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Students plan research on island mammoths: evidence, significance and next actions.",
      labelVi: "Sinh viên lên kế hoạch nghiên cứu voi ma mút đảo: bằng chứng, ý nghĩa và bước tiếp.",
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
      questionEn: "How will Rosie and Martin introduce their presentation?",
      questionVi: "How will Rosie and Martin introduce their presentation?",
      answerEn: "B — with a timeline showing when woolly mammoths lived",
      answerVi: "B — with a timeline showing when woolly mammoths lived",
    },
    {
      key: "exam-22",
      conversationEn: "Question 22",
      conversationVi: "Câu 22",
      questionEn: "What was surprising about the mammoth tooth found by Russell Graham?",
      questionVi: "What was surprising about the mammoth tooth found by Russell Graham?",
      answerEn: "C — It was not as old as mammoth remains from elsewhere.",
      answerVi: "C — It was not as old as mammoth remains from elsewhere.",
    },
    {
      key: "exam-23",
      conversationEn: "Question 23",
      conversationVi: "Câu 23",
      questionEn: "The students will use an animated diagram to demonstrate how the mammoths",
      questionVi: "The students will use an animated diagram to demonstrate how the mammoths",
      answerEn: "A — became isolated on the island.",
      answerVi: "A — became isolated on the island.",
    },
    {
      key: "exam-24",
      conversationEn: "Question 24",
      conversationVi: "Câu 24",
      questionEn: "According to Martin, what is unusual about the date of the mammoths’ extinction on the island?",
      questionVi: "According to Martin, what is unusual about the date of the mammoths’ extinction on the island?",
      answerEn: "A — how exact it is",
      answerVi: "A — how exact it is",
    },
    {
      key: "exam-25",
      conversationEn: "Sections of presentation — Q25",
      conversationVi: "Sections of presentation — câu 25",
      questionEn: "What action will the students take for each of the following sections of their presentation?: Introduction?",
      questionVi: "What action will the students take for each of the following sections of their presentation?: Introduction?",
      answerEn: "E — make detailed notes",
      answerVi: "E — make detailed notes",
    },
    {
      key: "exam-26",
      conversationEn: "Sections of presentation — Q26",
      conversationVi: "Sections of presentation — câu 26",
      questionEn: "What action will the students take for each of the following sections of their presentation?: Discovery of the mammoth tooth?",
      questionVi: "What action will the students take for each of the following sections of their presentation?: Discovery of the mammoth tooth?",
      answerEn: "D — contact one of the researchers",
      answerVi: "D — contact one of the researchers",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Woolly Mammoths on St Paul’s Island sau lần nghe đầu…",
  transcriptCloze: CAM14_T2_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM14_T2_P3_KEYWORD_PARAPHRASES,
};

const CAM14_T2_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "The History of Weather Forecasting",
      labelVi: "Lịch sử dự báo thời tiết",
    },
    {
      key: "pred-1",
      labelEn: "Total Health Clinic",
      labelVi: "Phòng khám Total Health",
    },
    {
      key: "pred-2",
      labelEn: "Visit to Branley Castle",
      labelVi: "Tham quan lâu đài Branley",
    },
    {
      key: "pred-3",
      labelEn: "Woolly Mammoths on St Paul’s Island",
      labelVi: "Voi ma mút trên đảo St Paul",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture traces forecasting from ancient sky lore and Babylon to later scientific methods.",
      labelVi: "Bài giảng từ tín ngưỡng bầu trời cổ đại và Babylon đến phương pháp khoa học sau này.",
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
      questionEn: "Many cultures invented what and other ceremonies to make the weather gods friendly?",
      questionVi: "Theo bài nghe, many cultures invented what and other ceremonies to make the weather gods friendly?",
      answerEn: "dances",
      answerVi: "dances",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "People needed to observe and interpret the sky to ensure their what?",
      questionVi: "Theo bài nghe, people needed to observe and interpret the sky to ensure their what?",
      answerEn: "survival",
      answerVi: "survival",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Around 650 BC, Babylonians started forecasting, using weather phenomena such as what?",
      questionVi: "Theo bài nghe, around 650 BC, Babylonians started forecasting, using weather phenomena such as what?",
      answerEn: "clouds",
      answerVi: "clouds",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "By 300 BC, the Chinese had a calendar made up of a number of what connected with the weather?",
      questionVi: "Theo bài nghe, by 300 BC, the Chinese had a calendar made up of a number of what connected with the weather?",
      answerEn: "festivals",
      answerVi: "festivals",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "Aristotle also described haloes and what?",
      questionVi: "Theo bài nghe, aristotle also described haloes and what?",
      answerEn: "comets",
      answerVi: "comets",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Many proverbs, e.g. about the significance of the colour of what, passed on accurate information?",
      questionVi: "Theo bài nghe, many proverbs, e.g. about the significance of the colour of what, passed on accurate information?",
      answerEn: "sky",
      answerVi: "sky",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về The History of Weather Forecasting sau lần nghe đầu…",
  transcriptCloze: CAM14_T2_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM14_T2_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM14_T2_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam14-t2-p1": CAM14_T2_P1,
  "cam14-t2-p2": CAM14_T2_P2,
  "cam14-t2-p3": CAM14_T2_P3,
  "cam14-t2-p4": CAM14_T2_P4,
};
