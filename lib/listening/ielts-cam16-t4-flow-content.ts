import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM16_T4_P1_KEYWORD_PARAPHRASES,
  CAM16_T4_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam16-t4-p1-intensive";
import {
  CAM16_T4_P2_KEYWORD_PARAPHRASES,
  CAM16_T4_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam16-t4-p2-intensive";
import {
  CAM16_T4_P3_KEYWORD_PARAPHRASES,
  CAM16_T4_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam16-t4-p3-intensive";
import {
  CAM16_T4_P4_KEYWORD_PARAPHRASES,
  CAM16_T4_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam16-t4-p4-intensive";

/** Flow nghe hiểu — CAM16 Test 4 (generated from transcript + QnA). */
const CAM16_T4_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Holiday Rental",
      labelVi: "Thuê nhà nghỉ dưỡng",
    },
    {
      key: "pred-1",
      labelEn: "Traffic and Highways Report",
      labelVi: "Báo cáo giao thông và đường sá",
    },
    {
      key: "pred-2",
      labelEn: "City Bike-Sharing Schemes",
      labelVi: "Chia sẻ xe đạp đô thị",
    },
    {
      key: "pred-3",
      labelEn: "The Extinction of the Dodo Bird",
      labelVi: "Sự tuyệt chủng của chim dodo",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A caller checks Granary and Chervil Cottages: dates, price, facilities and the payment deadline.",
      labelVi: "Cuộc gọi hỏi Granary và Chervil Cottage: ngày, giá, tiện nghi và hạn thanh toán.",
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
      questionEn: "Available for week beginning what. May?",
      questionVi: "Theo bài nghe, available for week beginning what. May?",
      answerEn: "28th",
      answerVi: "28th",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "What detail is given for cost for the week?",
      questionVi: "Bài nghe nêu chi tiết gì về cost for the week?",
      answerEn: "550",
      answerVi: "550",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "What. Cottage?",
      questionVi: "Theo bài nghe, what. Cottage?",
      answerEn: "Chervil",
      answerVi: "Chervil",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Building was originally what?",
      questionVi: "Theo bài nghe, building was originally what?",
      answerEn: "garage",
      answerVi: "garage",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Walk through doors from living room into what?",
      questionVi: "Theo bài nghe, walk through doors from living room into what?",
      answerEn: "garden",
      answerVi: "garden",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Several what. spaces at the front?",
      questionVi: "Theo bài nghe, several what. spaces at the front?",
      answerEn: "parking",
      answerVi: "parking",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Holiday Rental sau lần nghe đầu…",
  transcriptCloze: CAM16_T4_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM16_T4_P1_KEYWORD_PARAPHRASES,
};

const CAM16_T4_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Traffic and Highways Report",
      labelVi: "Báo cáo giao thông và đường sá",
    },
    {
      key: "pred-1",
      labelEn: "Holiday Rental",
      labelVi: "Thuê nhà nghỉ dưỡng",
    },
    {
      key: "pred-2",
      labelEn: "City Bike-Sharing Schemes",
      labelVi: "Chia sẻ xe đạp đô thị",
    },
    {
      key: "pred-3",
      labelEn: "The Extinction of the Dodo Bird",
      labelVi: "Sự tuyệt chủng của chim dodo",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A council report covers traffic concerns, cycle paths and a map of recreation-ground changes.",
      labelVi: "Báo cáo hội đồng về lo ngại giao thông, đường xe đạp và sơ đồ khu vui chơi.",
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
      questionEn: "A survey found people’s main concern about traffic in the area was",
      questionVi: "A survey found people’s main concern about traffic in the area was",
      answerEn: "C — changes in the type of traffic.",
      answerVi: "C — changes in the type of traffic.",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "Which change will shortly be made to the cycle path next to the river?",
      questionVi: "Which change will shortly be made to the cycle path next to the river?",
      answerEn: "A — It will be widened.",
      answerVi: "A — It will be widened.",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "Plans for a pedestrian crossing have been postponed because",
      questionVi: "Plans for a pedestrian crossing have been postponed because",
      answerEn: "B — the proposed location is unsafe.",
      answerVi: "B — the proposed location is unsafe.",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "On Station Road, notices have been erected",
      questionVi: "On Station Road, notices have been erected",
      answerEn: "B — asking motorists to switch off engines when waiting at the level crossing.",
      answerVi: "B — asking motorists to switch off engines when waiting at the level crossing.",
    },
    {
      key: "exam-15",
      conversationEn: "Map — Q15",
      conversationVi: "Bản đồ — câu 15",
      questionEn: "On the map, where is New car park?",
      questionVi: "Trên bản đồ, New car park ở đâu?",
      answerEn: "C — C",
      answerVi: "C — C",
    },
    {
      key: "exam-16",
      conversationEn: "Map — Q16",
      conversationVi: "Bản đồ — câu 16",
      questionEn: "On the map, where is New cricket pitch?",
      questionVi: "Trên bản đồ, New cricket pitch ở đâu?",
      answerEn: "F — F",
      answerVi: "F — F",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Traffic and Highways Report sau lần nghe đầu…",
  transcriptCloze: CAM16_T4_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM16_T4_P2_KEYWORD_PARAPHRASES,
};

const CAM16_T4_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "City Bike-Sharing Schemes",
      labelVi: "Chia sẻ xe đạp đô thị",
    },
    {
      key: "pred-1",
      labelEn: "Holiday Rental",
      labelVi: "Thuê nhà nghỉ dưỡng",
    },
    {
      key: "pred-2",
      labelEn: "Traffic and Highways Report",
      labelVi: "Báo cáo giao thông và đường sá",
    },
    {
      key: "pred-3",
      labelEn: "The Extinction of the Dodo Bird",
      labelVi: "Sự tuyệt chủng của chim dodo",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Students weigh bike-share benefits and compare schemes in cities from Amsterdam to Sydney.",
      labelVi: "Sinh viên cân nhắc lợi ích bike-share và so sánh các thành phố từ Amsterdam đến Sydney.",
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
      questionEn: "Which TWO benefits of city bike-sharing schemes do the students agree are the most important?",
      questionVi: "Which TWO benefits of city bike-sharing schemes do the students agree are the most important?",
      answerEn: "B — reducing traffic congestion; C — improving air quality",
      answerVi: "B — reducing traffic congestion; C — improving air quality",
    },
    {
      key: "exam-23&24",
      conversationEn: "Questions 23–24",
      conversationVi: "Câu 23–24",
      questionEn: "Which TWO things do the students think are necessary for successful bike-sharing schemes?",
      questionVi: "Which TWO things do the students think are necessary for successful bike-sharing schemes?",
      answerEn: "B — The app should be easy to use.; C — Public awareness should be raised.",
      answerVi: "B — The app should be easy to use.; C — Public awareness should be raised.",
    },
    {
      key: "exam-25",
      conversationEn: "Cities — Q25",
      conversationVi: "Cities — câu 25",
      questionEn: "What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?: Amsterdam?",
      questionVi: "What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?: Amsterdam?",
      answerEn: "C — They are surprised it has been so successful.",
      answerVi: "C — They are surprised it has been so successful.",
    },
    {
      key: "exam-26",
      conversationEn: "Cities — Q26",
      conversationVi: "Cities — câu 26",
      questionEn: "What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?: Dublin?",
      questionVi: "What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?: Dublin?",
      answerEn: "F — They disagree about the reasons for its success.",
      answerVi: "F — They disagree about the reasons for its success.",
    },
    {
      key: "exam-27",
      conversationEn: "Cities — Q27",
      conversationVi: "Cities — câu 27",
      questionEn: "What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?: London?",
      questionVi: "What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?: London?",
      answerEn: "D — They agree that more investment is required.",
      answerVi: "D — They agree that more investment is required.",
    },
    {
      key: "exam-28",
      conversationEn: "Cities — Q28",
      conversationVi: "Cities — câu 28",
      questionEn: "What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?: Buenos Aires?",
      questionVi: "What is the speakers’ opinion of the bike-sharing schemes in each of the following cities?: Buenos Aires?",
      answerEn: "E — They think the system has been well designed.",
      answerVi: "E — They think the system has been well designed.",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về City Bike-Sharing Schemes sau lần nghe đầu…",
  transcriptCloze: CAM16_T4_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM16_T4_P3_KEYWORD_PARAPHRASES,
};

const CAM16_T4_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "The Extinction of the Dodo Bird",
      labelVi: "Sự tuyệt chủng của chim dodo",
    },
    {
      key: "pred-1",
      labelEn: "Holiday Rental",
      labelVi: "Thuê nhà nghỉ dưỡng",
    },
    {
      key: "pred-2",
      labelEn: "Traffic and Highways Report",
      labelVi: "Báo cáo giao thông và đường sá",
    },
    {
      key: "pred-3",
      labelEn: "City Bike-Sharing Schemes",
      labelVi: "Chia sẻ xe đạp đô thị",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on the dodo’s history on Mauritius, physical traits and why the species died out.",
      labelVi: "Bài giảng về lịch sử dodo ở Mauritius, đặc điểm cơ thể và nguyên nhân tuyệt chủng.",
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
      questionEn: "1507 - Portuguese ships transporting what stopped at the island to collect food and water?",
      questionVi: "Theo bài nghe, 1507 - Portuguese ships transporting what stopped at the island to collect food and water?",
      answerEn: "spice(s)",
      answerVi: "spice(s)",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "1638 - The Dutch established what on the island?",
      questionVi: "Theo bài nghe, 1638 - The Dutch established what on the island?",
      answerEn: "colony / settlement",
      answerVi: "colony / settlement",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "A Dutch painting suggests the dodo was very what?",
      questionVi: "Theo bài nghe, a Dutch painting suggests the dodo was very what?",
      answerEn: "fat",
      answerVi: "fat",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "The only remaining soft tissue is a dried what?",
      questionVi: "Theo bài nghe, the only remaining soft tissue is a dried what?",
      answerEn: "head",
      answerVi: "head",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "Recent studies of a dodo skeleton suggest the birds were capable of rapid what?",
      questionVi: "Theo bài nghe, recent studies of a dodo skeleton suggest the birds were capable of rapid what?",
      answerEn: "movement",
      answerVi: "movement",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "It’s thought they were able to use their small wings to maintain what?",
      questionVi: "Theo bài nghe, it’s thought they were able to use their small wings to maintain what?",
      answerEn: "balance / balancing",
      answerVi: "balance / balancing",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về The Extinction of the Dodo Bird sau lần nghe đầu…",
  transcriptCloze: CAM16_T4_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM16_T4_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM16_T4_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam16-t4-p1": CAM16_T4_P1,
  "cam16-t4-p2": CAM16_T4_P2,
  "cam16-t4-p3": CAM16_T4_P3,
  "cam16-t4-p4": CAM16_T4_P4,
};
