import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM17_T4_P1_KEYWORD_PARAPHRASES,
  CAM17_T4_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t4-p1-intensive";
import {
  CAM17_T4_P2_KEYWORD_PARAPHRASES,
  CAM17_T4_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t4-p2-intensive";
import {
  CAM17_T4_P3_KEYWORD_PARAPHRASES,
  CAM17_T4_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t4-p3-intensive";
import {
  CAM17_T4_P4_KEYWORD_PARAPHRASES,
  CAM17_T4_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t4-p4-intensive";

/** Flow nghe hiểu — CAM17 Test 4 (generated from transcript + QnA). */
const CAM17_T4_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Easy Life Cleaning Services",
      labelVi: "Dịch vụ dọn nhà Easy Life",
    },
    {
      key: "pred-1",
      labelEn: "Hotel Staff Retention",
      labelVi: "Giữ chân nhân viên khách sạn",
    },
    {
      key: "pred-2",
      labelEn: "Sporting Equipment Development",
      labelVi: "Phát triển dụng cụ thể thao",
    },
    {
      key: "pred-3",
      labelEn: "Maple Syrup",
      labelVi: "Siro cây phong",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A cleaning company confirms a package, extras, allergies and how cleaners are vetted.",
      labelVi: "Công ty dọn nhà xác nhận gói dịch vụ, phụ phí, dị ứng và cách kiểm tra nhân viên.",
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
      questionEn: "Cleaning what throughout the apartment?",
      questionVi: "Theo bài nghe, cleaning what throughout the apartment?",
      answerEn: "floor(s)",
      answerVi: "floor(s)",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Cleaning what?",
      questionVi: "Theo bài nghe, cleaning what?",
      answerEn: "fridge",
      answerVi: "fridge",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Ironing clothes - what only?",
      questionVi: "Theo bài nghe, ironing clothes - what only?",
      answerEn: "shirts",
      answerVi: "shirts",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Cleaning all what from the inside?",
      questionVi: "Theo bài nghe, cleaning all what from the inside?",
      answerEn: "windows",
      answerVi: "windows",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Washing down what?",
      questionVi: "Theo bài nghe, washing down what?",
      answerEn: "balcony",
      answerVi: "balcony",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "They can organise a plumber or what if necessary?",
      questionVi: "Theo bài nghe, they can organise a plumber or what if necessary?",
      answerEn: "electrician",
      answerVi: "electrician",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Easy Life Cleaning Services sau lần nghe đầu…",
  transcriptCloze: CAM17_T4_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T4_P1_KEYWORD_PARAPHRASES,
};

const CAM17_T4_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Hotel Staff Retention",
      labelVi: "Giữ chân nhân viên khách sạn",
    },
    {
      key: "pred-1",
      labelEn: "Easy Life Cleaning Services",
      labelVi: "Dịch vụ dọn nhà Easy Life",
    },
    {
      key: "pred-2",
      labelEn: "Sporting Equipment Development",
      labelVi: "Phát triển dụng cụ thể thao",
    },
    {
      key: "pred-3",
      labelEn: "Maple Syrup",
      labelVi: "Siro cây phong",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A talk on why hotel staff leave and how different hotels cut turnover.",
      labelVi: "Bài nói về lý do nhân viên khách sạn nghỉ việc và cách các khách sạn giảm nghỉ việc.",
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
      questionEn: "Many hotel managers are unaware that their staff often leave because of",
      questionVi: "Many hotel managers are unaware that their staff often leave because of",
      answerEn: "A — a lack of training.",
      answerVi: "A — a lack of training.",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "What is the impact of high staff turnover on managers?",
      questionVi: "What is the impact of high staff turnover on managers?",
      answerEn: "A — an increased workload",
      answerVi: "A — an increased workload",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "What mistake should managers always avoid?",
      questionVi: "What mistake should managers always avoid?",
      answerEn: "A — failing to treat staff equally",
      answerVi: "A — failing to treat staff equally",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "What unexpected benefit did Dunwich Hotel notice after improving staff retention rates?",
      questionVi: "What unexpected benefit did Dunwich Hotel notice after improving staff retention rates?",
      answerEn: "C — a rise in spending per customer",
      answerVi: "C — a rise in spending per customer",
    },
    {
      key: "exam-15",
      conversationEn: "Hotels — Q15",
      conversationVi: "Hotels — câu 15",
      questionEn: "Which way of reducing staff turnover was used in each of the following hotels?: The Sun Club?",
      questionVi: "Which way of reducing staff turnover was used in each of the following hotels?: The Sun Club?",
      answerEn: "A — improving relationships and teamwork",
      answerVi: "A — improving relationships and teamwork",
    },
    {
      key: "exam-16",
      conversationEn: "Hotels — Q16",
      conversationVi: "Hotels — câu 16",
      questionEn: "Which way of reducing staff turnover was used in each of the following hotels?: The Portland?",
      questionVi: "Which way of reducing staff turnover was used in each of the following hotels?: The Portland?",
      answerEn: "C — providing career opportunities",
      answerVi: "C — providing career opportunities",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Hotel Staff Retention sau lần nghe đầu…",
  transcriptCloze: CAM17_T4_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T4_P2_KEYWORD_PARAPHRASES,
};

const CAM17_T4_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Sporting Equipment Development",
      labelVi: "Phát triển dụng cụ thể thao",
    },
    {
      key: "pred-1",
      labelEn: "Easy Life Cleaning Services",
      labelVi: "Dịch vụ dọn nhà Easy Life",
    },
    {
      key: "pred-2",
      labelEn: "Hotel Staff Retention",
      labelVi: "Giữ chân nhân viên khách sạn",
    },
    {
      key: "pred-3",
      labelEn: "Maple Syrup",
      labelVi: "Siro cây phong",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Students discuss school sport experiences in Kenya and how sports gear has evolved.",
      labelVi: "Sinh viên bàn trải nghiệm thể thao ở Kenya và sự phát triển của dụng cụ thể thao.",
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
      questionEn: "Which TWO points do Thomas and Jeanne make about Thomas’s sporting activities at school?",
      questionVi: "Which TWO points do Thomas and Jeanne make about Thomas’s sporting activities at school?",
      answerEn: "C — He could have worked harder at them.; E — His fellow students admired him.",
      answerVi: "C — He could have worked harder at them.; E — His fellow students admired him.",
    },
    {
      key: "exam-23&24",
      conversationEn: "Questions 23–24",
      conversationVi: "Câu 23–24",
      questionEn: "Which TWO feelings did Thomas experience when he was in Kenya?",
      questionVi: "Which TWO feelings did Thomas experience when he was in Kenya?",
      answerEn: "A — disbelief; D — gratitude",
      answerVi: "A — disbelief; D — gratitude",
    },
    {
      key: "exam-25",
      conversationEn: "Items of sporting equipment — Q25",
      conversationVi: "Items of sporting equipment — câu 25",
      questionEn: "What comment do the students make about the development of each of the following items of sporting equipment?: the table tennis bat?",
      questionVi: "What comment do the students make about the development of each of the following items of sporting equipment?: the table tennis bat?",
      answerEn: "B — The material was being mass produced for another purpose.",
      answerVi: "B — The material was being mass produced for another purpose.",
    },
    {
      key: "exam-26",
      conversationEn: "Items of sporting equipment — Q26",
      conversationVi: "Items of sporting equipment — câu 26",
      questionEn: "What comment do the students make about the development of each of the following items of sporting equipment?: the cricket helmet?",
      questionVi: "What comment do the students make about the development of each of the following items of sporting equipment?: the cricket helmet?",
      answerEn: "F — It was unpopular among spectators.",
      answerVi: "F — It was unpopular among spectators.",
    },
    {
      key: "exam-27",
      conversationEn: "Items of sporting equipment — Q27",
      conversationVi: "Items of sporting equipment — câu 27",
      questionEn: "What comment do the students make about the development of each of the following items of sporting equipment?: the cycle helmet?",
      questionVi: "What comment do the students make about the development of each of the following items of sporting equipment?: the cycle helmet?",
      answerEn: "A — It could cause excessive sweating.",
      answerVi: "A — It could cause excessive sweating.",
    },
    {
      key: "exam-28",
      conversationEn: "Items of sporting equipment — Q28",
      conversationVi: "Items of sporting equipment — câu 28",
      questionEn: "What comment do the students make about the development of each of the following items of sporting equipment?: the golf club?",
      questionVi: "What comment do the students make about the development of each of the following items of sporting equipment?: the golf club?",
      answerEn: "D — It often had to be replaced.",
      answerVi: "D — It often had to be replaced.",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Sporting Equipment Development sau lần nghe đầu…",
  transcriptCloze: CAM17_T4_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T4_P3_KEYWORD_PARAPHRASES,
};

const CAM17_T4_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Maple Syrup",
      labelVi: "Siro cây phong",
    },
    {
      key: "pred-1",
      labelEn: "Easy Life Cleaning Services",
      labelVi: "Dịch vụ dọn nhà Easy Life",
    },
    {
      key: "pred-2",
      labelEn: "Hotel Staff Retention",
      labelVi: "Giữ chân nhân viên khách sạn",
    },
    {
      key: "pred-3",
      labelEn: "Sporting Equipment Development",
      labelVi: "Phát triển dụng cụ thể thao",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on maple syrup production from early methods to modern Canadian industry.",
      labelVi: "Bài giảng về sản xuất siro phong từ phương pháp sớm đến ngành công nghiệp Canada hiện đại.",
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
      questionEn: "Colour described as what?",
      questionVi: "Theo bài nghe, colour described as what?",
      answerEn: "golden",
      answerVi: "golden",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Very what compared to refined sugar?",
      questionVi: "Theo bài nghe, very what compared to refined sugar?",
      answerEn: "healthy",
      answerVi: "healthy",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Best growing conditions and what are in Canada and North America?",
      questionVi: "Theo bài nghe, best growing conditions and what are in Canada and North America?",
      answerEn: "climate",
      answerVi: "climate",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Used hot what to heat the sap?",
      questionVi: "Theo bài nghe, used hot what to heat the sap?",
      answerEn: "rock(s)",
      answerVi: "rock(s)",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "Tree trunks may not have the correct what until they have been growing for 40 years?",
      questionVi: "Theo bài nghe, tree trunks may not have the correct what until they have been growing for 40 years?",
      answerEn: "diameter",
      answerVi: "diameter",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "A tap drilled into the trunk and what carries the sap into a bucket?",
      questionVi: "Theo bài nghe, a tap drilled into the trunk and what carries the sap into a bucket?",
      answerEn: "tube",
      answerVi: "tube",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Maple Syrup sau lần nghe đầu…",
  transcriptCloze: CAM17_T4_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T4_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM17_T4_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam17-t4-p1": CAM17_T4_P1,
  "cam17-t4-p2": CAM17_T4_P2,
  "cam17-t4-p3": CAM17_T4_P3,
  "cam17-t4-p4": CAM17_T4_P4,
};
