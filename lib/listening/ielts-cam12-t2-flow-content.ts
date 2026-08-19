import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM12_T2_P1_KEYWORD_PARAPHRASES,
  CAM12_T2_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t2-p1-intensive";
import {
  CAM12_T2_P2_KEYWORD_PARAPHRASES,
  CAM12_T2_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t2-p2-intensive";
import {
  CAM12_T2_P3_KEYWORD_PARAPHRASES,
  CAM12_T2_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t2-p3-intensive";
import {
  CAM12_T2_P4_KEYWORD_PARAPHRASES,
  CAM12_T2_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t2-p4-intensive";

/** Flow nghe hiểu — CAM12 Test 2 (generated from transcript + QnA). */
const CAM12_T2_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Kenton Festival",
      labelVi: "Lễ hội Kenton",
    },
    {
      key: "pred-1",
      labelEn: "European Tour Plans",
      labelVi: "Kế hoạch chuyến lưu diễn châu Âu",
    },
    {
      key: "pred-2",
      labelEn: "Research Project Placement",
      labelVi: "Thực tập dự án nghiên cứu",
    },
    {
      key: "pred-3",
      labelEn: "Changing Attitudes to Workers",
      labelVi: "Thái độ với người lao động",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A box-office call covers the festival timetable, performances, workshops and practical booking details.",
      labelVi: "Gọi quầy vé về lịch lễ hội, biểu diễn, workshop và chi tiết đặt chỗ.",
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
      questionEn: "In town centre, starting at what?",
      questionVi: "Theo bài nghe, in town centre, starting at what?",
      answerEn: "2.45",
      answerVi: "2.45",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "What will perform?",
      questionVi: "Theo bài nghe, what will perform?",
      answerEn: "band",
      answerVi: "band",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Performance of what About Helen Tungate (a 4…………….)?",
      questionVi: "Theo bài nghe, performance of what About Helen Tungate (a 4…………….)?",
      answerEn: "play",
      answerVi: "play",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Performance of a 3……………. About Helen Tungate ( what)?",
      questionVi: "Theo bài nghe, performance of a 3……………. About Helen Tungate ( what)?",
      answerEn: "scientist",
      answerVi: "scientist",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Evening fireworks display situated across what?",
      questionVi: "Theo bài nghe, evening fireworks display situated across what?",
      answerEn: "river",
      answerVi: "river",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Video about relationships that children have with their what?",
      questionVi: "Theo bài nghe, video about relationships that children have with their what?",
      answerEn: "grandparents",
      answerVi: "grandparents",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Kenton Festival sau lần nghe đầu…",
  transcriptCloze: CAM12_T2_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T2_P1_KEYWORD_PARAPHRASES,
};

const CAM12_T2_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "European Tour Plans",
      labelVi: "Kế hoạch chuyến lưu diễn châu Âu",
    },
    {
      key: "pred-1",
      labelEn: "Kenton Festival",
      labelVi: "Lễ hội Kenton",
    },
    {
      key: "pred-2",
      labelEn: "Research Project Placement",
      labelVi: "Thực tập dự án nghiên cứu",
    },
    {
      key: "pred-3",
      labelEn: "Changing Attitudes to Workers",
      labelVi: "Thái độ với người lao động",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A tour organiser updates the group on Munich flights, hotels, concerts and last-minute schedule changes.",
      labelVi: "Tổ chức viên cập nhật chuyến bay Munich, khách sạn, buổi hòa nhạc và thay đổi lịch.",
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
      questionEn: "When the group meet at the airport they will have",
      questionVi: "When the group meet at the airport they will have",
      answerEn: "B — coffee.",
      answerVi: "B — coffee.",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "The group will be met at Munich Airport by",
      questionVi: "The group will be met at Munich Airport by",
      answerEn: "C — a tour operator.",
      answerVi: "C — a tour operator.",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "How much will they pay per night for a double room at the hotel?",
      questionVi: "How much will they pay per night for a double room at the hotel?",
      answerEn: "A — 110 euros",
      answerVi: "A — 110 euros",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "What type of restaurant will they go to on Tuesday evening?",
      questionVi: "What type of restaurant will they go to on Tuesday evening?",
      answerEn: "B — a Lebanese restaurant",
      answerVi: "B — a Lebanese restaurant",
    },
    {
      key: "exam-15",
      conversationEn: "Question 15",
      conversationVi: "Câu 15",
      questionEn: "Who will they meet on Wednesday afternoon?",
      questionVi: "Who will they meet on Wednesday afternoon?",
      answerEn: "C — a theatre director",
      answerVi: "C — a theatre director",
    },
    {
      key: "exam-16",
      conversationEn: "Days — Q16",
      conversationVi: "Days — câu 16",
      questionEn: "What does the man say about the play on each of the following days?: Wednesday?",
      questionVi: "What does the man say about the play on each of the following days?: Wednesday?",
      answerEn: "F — The play will be performed for the first time.",
      answerVi: "F — The play will be performed for the first time.",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về European Tour Plans sau lần nghe đầu…",
  transcriptCloze: CAM12_T2_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T2_P2_KEYWORD_PARAPHRASES,
};

const CAM12_T2_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Research Project Placement",
      labelVi: "Thực tập dự án nghiên cứu",
    },
    {
      key: "pred-1",
      labelEn: "Kenton Festival",
      labelVi: "Lễ hội Kenton",
    },
    {
      key: "pred-2",
      labelEn: "European Tour Plans",
      labelVi: "Kế hoạch chuyến lưu diễn châu Âu",
    },
    {
      key: "pred-3",
      labelEn: "Changing Attitudes to Workers",
      labelVi: "Thái độ với người lao động",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Beth briefs James on a research placement: tasks, contacts, training and what to prepare before starting.",
      labelVi: "Beth hướng dẫn James về thực tập: nhiệm vụ, đầu mối, đào tạo và việc cần chuẩn bị.",
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
      questionEn: "James chose to take Scandinavian Studies because when he was a child",
      questionVi: "James chose to take Scandinavian Studies because when he was a child",
      answerEn: "C — a number of Danish people visited his family.",
      answerVi: "C — a number of Danish people visited his family.",
    },
    {
      key: "exam-22",
      conversationEn: "Question 22",
      conversationVi: "Câu 22",
      questionEn: "When he graduates, James would like to",
      questionVi: "When he graduates, James would like to",
      answerEn: "B — work in the media.",
      answerVi: "B — work in the media.",
    },
    {
      key: "exam-23",
      conversationEn: "Question 23",
      conversationVi: "Câu 23",
      questionEn: "Which course will end this term?",
      questionVi: "Which course will end this term?",
      answerEn: "C — Scandinavian literature",
      answerVi: "C — Scandinavian literature",
    },
    {
      key: "exam-24",
      conversationEn: "Question 24",
      conversationVi: "Câu 24",
      questionEn: "They agree that James’s literature paper this term will be on",
      questionVi: "They agree that James’s literature paper this term will be on",
      answerEn: "A — 19th century playwrights",
      answerVi: "A — 19th century playwrights",
    },
    {
      key: "exam-25",
      conversationEn: "Question 25",
      conversationVi: "Câu 25",
      questionEn: "Beth recommends that James’s paper should be",
      questionVi: "Beth recommends that James’s paper should be",
      answerEn: "C — a study of the social background to the literature.",
      answerVi: "C — a study of the social background to the literature.",
    },
    {
      key: "exam-26",
      conversationEn: "Detail 26",
      conversationVi: "Chi tiết 26",
      questionEn: "He’ll read what and choose his topic?",
      questionVi: "Theo bài nghe, he’ll read what and choose his topic?",
      answerEn: "E",
      answerVi: "E",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Research Project Placement sau lần nghe đầu…",
  transcriptCloze: CAM12_T2_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T2_P3_KEYWORD_PARAPHRASES,
};

const CAM12_T2_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Changing Attitudes to Workers",
      labelVi: "Thái độ với người lao động",
    },
    {
      key: "pred-1",
      labelEn: "Kenton Festival",
      labelVi: "Lễ hội Kenton",
    },
    {
      key: "pred-2",
      labelEn: "European Tour Plans",
      labelVi: "Kế hoạch chuyến lưu diễn châu Âu",
    },
    {
      key: "pred-3",
      labelEn: "Research Project Placement",
      labelVi: "Thực tập dự án nghiên cứu",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture traces how workers’ rights, management ideas and workplace conditions have shifted over time.",
      labelVi: "Bài giảng về quyền lao động, tư tưởng quản lý và điều kiện làm việc thay đổi theo thời gian.",
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
      questionEn: "Conflict mostly consists of behaviour in the general category of what?",
      questionVi: "Theo bài nghe, conflict mostly consists of behaviour in the general category of what?",
      answerEn: "bullying",
      answerVi: "bullying",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Often a result of people wanting to prove their what?",
      questionVi: "Theo bài nghe, often a result of people wanting to prove their what?",
      answerEn: "superiority",
      answerVi: "superiority",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Also caused by differences in what between people 34 ‘………………’ conflicts: people more concerned about own team than about company?",
      questionVi: "Theo bài nghe, also caused by differences in what between people 34 ‘………………’ conflicts: people more concerned about own team than about company?",
      answerEn: "personality",
      answerVi: "personality",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Also caused by differences in 33……………… between people what conflicts: people more concerned about own team than about company?",
      questionVi: "Theo bài nghe, also caused by differences in 33……………… between people what conflicts: people more concerned about own team than about company?",
      answerEn: "structural",
      answerVi: "structural",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "Conflict-related stress can cause what that may last for months?",
      questionVi: "Theo bài nghe, conflict-related stress can cause what that may last for months?",
      answerEn: "absence",
      answerVi: "absence",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Many have both what. and anxiety?",
      questionVi: "Theo bài nghe, many have both what. and anxiety?",
      answerEn: "confidence",
      answerVi: "confidence",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Changing Attitudes to Workers sau lần nghe đầu…",
  transcriptCloze: CAM12_T2_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T2_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM12_T2_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam12-t2-p1": CAM12_T2_P1,
  "cam12-t2-p2": CAM12_T2_P2,
  "cam12-t2-p3": CAM12_T2_P3,
  "cam12-t2-p4": CAM12_T2_P4,
};
