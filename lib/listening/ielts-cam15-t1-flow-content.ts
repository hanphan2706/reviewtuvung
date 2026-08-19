import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM15_T1_P1_KEYWORD_PARAPHRASES,
  CAM15_T1_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t1-p1-intensive";
import {
  CAM15_T1_P2_KEYWORD_PARAPHRASES,
  CAM15_T1_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t1-p2-intensive";
import {
  CAM15_T1_P3_KEYWORD_PARAPHRASES,
  CAM15_T1_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t1-p3-intensive";
import {
  CAM15_T1_P4_KEYWORD_PARAPHRASES,
  CAM15_T1_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t1-p4-intensive";

/** Flow nghe hiểu — CAM15 Test 1 (generated from transcript + QnA). */
const CAM15_T1_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Bankside Recruitment Agency",
      labelVi: "Agency tuyển dụng Bankside",
    },
    {
      key: "pred-1",
      labelEn: "Matthews Island Holidays",
      labelVi: "Kỳ nghỉ đảo Matthews",
    },
    {
      key: "pred-2",
      labelEn: "Birth Order and Personality",
      labelVi: "Thứ tự sinh và tính cách",
    },
    {
      key: "pred-3",
      labelEn: "The Eucalyptus Tree in Australia",
      labelVi: "Cây bạch đàn ở Úc",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Amber calls about temp clerical jobs: contact details, interview tips and why an agency can help.",
      labelVi: "Amber hỏi việc tạm thời: liên hệ, phỏng vấn và lợi ích khi dùng agency.",
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
      questionEn: "Name of agent: Becky what?",
      questionVi: "Theo bài nghe, name of agent: Becky what?",
      answerEn: "Jamieson",
      answerVi: "Jamieson",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Best to call her in what?",
      questionVi: "Theo bài nghe, best to call her in what?",
      answerEn: "afternoon",
      answerVi: "afternoon",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Must have good what.. skills?",
      questionVi: "Theo bài nghe, must have good what.. skills?",
      answerEn: "communication",
      answerVi: "communication",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Jobs are usually for at least one what?",
      questionVi: "Theo bài nghe, jobs are usually for at least one what?",
      answerEn: "week",
      answerVi: "week",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Pay is usually what. per hour?",
      questionVi: "Theo bài nghe, pay is usually what. per hour?",
      answerEn: "10 / ten",
      answerVi: "10 / ten",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Wear what to the interview?",
      questionVi: "Theo bài nghe, wear what to the interview?",
      answerEn: "suit",
      answerVi: "suit",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Bankside Recruitment Agency sau lần nghe đầu…",
  transcriptCloze: CAM15_T1_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T1_P1_KEYWORD_PARAPHRASES,
};

const CAM15_T1_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Matthews Island Holidays",
      labelVi: "Kỳ nghỉ đảo Matthews",
    },
    {
      key: "pred-1",
      labelEn: "Bankside Recruitment Agency",
      labelVi: "Agency tuyển dụng Bankside",
    },
    {
      key: "pred-2",
      labelEn: "Birth Order and Personality",
      labelVi: "Thứ tự sinh và tính cách",
    },
    {
      key: "pred-3",
      labelEn: "The Eucalyptus Tree in Australia",
      labelVi: "Cây bạch đàn ở Úc",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A holiday company outlines Isle of Man trips, meeting points, included meals and the six-day timetable.",
      labelVi: "Công ty mô tả tour Isle of Man: điểm gặp, bữa ăn và lịch trình sáu ngày.",
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
      questionEn: "According to the speaker, the company",
      questionVi: "According to the speaker, the company",
      answerEn: "A — has been in business for longer than most of its competitors.",
      answerVi: "A — has been in business for longer than most of its competitors.",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "Where can customers meet the tour manager before travelling to the Isle of Man?",
      questionVi: "Where can customers meet the tour manager before travelling to the Isle of Man?",
      answerEn: "B — Heysham",
      answerVi: "B — Heysham",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "How many lunches are included in the price of the holiday?",
      questionVi: "How many lunches are included in the price of the holiday?",
      answerEn: "A — three",
      answerVi: "A — three",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "Customers have to pay extra for",
      questionVi: "Customers have to pay extra for",
      answerEn: "C — transferring to another date.",
      answerVi: "C — transferring to another date.",
    },
    {
      key: "exam-15",
      conversationEn: "Detail 15",
      conversationVi: "Chi tiết 15",
      questionEn: "Hotel dining room has view of what?",
      questionVi: "Theo bài nghe, hotel dining room has view of what?",
      answerEn: "river",
      answerVi: "river",
    },
    {
      key: "exam-16",
      conversationEn: "Detail 16",
      conversationVi: "Chi tiết 16",
      questionEn: "Tynwald may have been founded in what not 979?",
      questionVi: "Theo bài nghe, tynwald may have been founded in what not 979?",
      answerEn: "1422",
      answerVi: "1422",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Matthews Island Holidays sau lần nghe đầu…",
  transcriptCloze: CAM15_T1_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T1_P2_KEYWORD_PARAPHRASES,
};

const CAM15_T1_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Birth Order and Personality",
      labelVi: "Thứ tự sinh và tính cách",
    },
    {
      key: "pred-1",
      labelEn: "Bankside Recruitment Agency",
      labelVi: "Agency tuyển dụng Bankside",
    },
    {
      key: "pred-2",
      labelEn: "Matthews Island Holidays",
      labelVi: "Kỳ nghỉ đảo Matthews",
    },
    {
      key: "pred-3",
      labelEn: "The Eucalyptus Tree in Australia",
      labelVi: "Cây bạch đàn ở Úc",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Students review research linking family position to personality traits and debate academic-success claims.",
      labelVi: "Sinh viên ôn nghiên cứu về vị trí trong gia đình, tính cách và thành tích học tập.",
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
      conversationEn: "Position in family — Q21",
      conversationVi: "Position in family — câu 21",
      questionEn: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: the eldest child?",
      questionVi: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: the eldest child?",
      answerEn: "G — caring",
      answerVi: "G — caring",
    },
    {
      key: "exam-22",
      conversationEn: "Position in family — Q22",
      conversationVi: "Position in family — câu 22",
      questionEn: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: a middle child?",
      questionVi: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: a middle child?",
      answerEn: "F — co-operative",
      answerVi: "F — co-operative",
    },
    {
      key: "exam-23",
      conversationEn: "Position in family — Q23",
      conversationVi: "Position in family — câu 23",
      questionEn: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: the youngest child?",
      questionVi: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: the youngest child?",
      answerEn: "A — outgoing",
      answerVi: "A — outgoing",
    },
    {
      key: "exam-24",
      conversationEn: "Position in family — Q24",
      conversationVi: "Position in family — câu 24",
      questionEn: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: a twin?",
      questionVi: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: a twin?",
      answerEn: "E — introverted",
      answerVi: "E — introverted",
    },
    {
      key: "exam-25",
      conversationEn: "Position in family — Q25",
      conversationVi: "Position in family — câu 25",
      questionEn: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: an only child?",
      questionVi: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: an only child?",
      answerEn: "B — selfish",
      answerVi: "B — selfish",
    },
    {
      key: "exam-26",
      conversationEn: "Position in family — Q26",
      conversationVi: "Position in family — câu 26",
      questionEn: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: a child with much older siblings?",
      questionVi: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?: a child with much older siblings?",
      answerEn: "C — independent",
      answerVi: "C — independent",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Birth Order and Personality sau lần nghe đầu…",
  transcriptCloze: CAM15_T1_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T1_P3_KEYWORD_PARAPHRASES,
};

const CAM15_T1_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "The Eucalyptus Tree in Australia",
      labelVi: "Cây bạch đàn ở Úc",
    },
    {
      key: "pred-1",
      labelEn: "Bankside Recruitment Agency",
      labelVi: "Agency tuyển dụng Bankside",
    },
    {
      key: "pred-2",
      labelEn: "Matthews Island Holidays",
      labelVi: "Kỳ nghỉ đảo Matthews",
    },
    {
      key: "pred-3",
      labelEn: "Birth Order and Personality",
      labelVi: "Thứ tự sinh và tính cách",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on why eucalyptus matters, reasons numbers are falling and Jackson’s theory of decline.",
      labelVi: "Bài giảng về tầm quan trọng của eucalyptus, suy giảm số lượng và giả thuyết của Jackson.",
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
      questionEn: "It provides what and food for a wide range of species?",
      questionVi: "Theo bài nghe, it provides what and food for a wide range of species?",
      answerEn: "shelter",
      answerVi: "shelter",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Its leaves provide what. which is used to make a disinfectant?",
      questionVi: "Theo bài nghe, its leaves provide what. which is used to make a disinfectant?",
      answerEn: "oil",
      answerVi: "oil",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Cause - lime used for making what was absorbed?",
      questionVi: "Theo bài nghe, cause - lime used for making what was absorbed?",
      answerEn: "roads",
      answerVi: "roads",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Cause - what. feed on eucalyptus leaves?",
      questionVi: "Theo bài nghe, cause - what. feed on eucalyptus leaves?",
      answerEn: "insects",
      answerVi: "insects",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "High-frequency bushfires have impact on vegetation, resulting in the growth of what?",
      questionVi: "Theo bài nghe, high-frequency bushfires have impact on vegetation, resulting in the growth of what?",
      answerEn: "grass(es)",
      answerVi: "grass(es)",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Make more what available to the trees?",
      questionVi: "Theo bài nghe, make more what available to the trees?",
      answerEn: "water",
      answerVi: "water",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về The Eucalyptus Tree in Australia sau lần nghe đầu…",
  transcriptCloze: CAM15_T1_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T1_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM15_T1_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam15-t1-p1": CAM15_T1_P1,
  "cam15-t1-p2": CAM15_T1_P2,
  "cam15-t1-p3": CAM15_T1_P3,
  "cam15-t1-p4": CAM15_T1_P4,
};
