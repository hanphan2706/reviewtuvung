import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM17_T2_P1_KEYWORD_PARAPHRASES,
  CAM17_T2_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t2-p1-intensive";
import {
  CAM17_T2_P2_KEYWORD_PARAPHRASES,
  CAM17_T2_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t2-p2-intensive";
import {
  CAM17_T2_P3_KEYWORD_PARAPHRASES,
  CAM17_T2_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t2-p3-intensive";
import {
  CAM17_T2_P4_KEYWORD_PARAPHRASES,
  CAM17_T2_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t2-p4-intensive";

/** Flow nghe hiểu — CAM17 Test 2 (generated from transcript + QnA). */
const CAM17_T2_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Southoe Village Volunteering",
      labelVi: "Tình nguyện làng Southoe",
    },
    {
      key: "pred-1",
      labelEn: "Oniton Hall",
      labelVi: "Dinh thự Oniton Hall",
    },
    {
      key: "pred-2",
      labelEn: "Romeo and Juliet Review",
      labelVi: "Đánh giá Romeo and Juliet",
    },
    {
      key: "pred-3",
      labelEn: "Icelandic Language and Digital Technology",
      labelVi: "Tiếng Iceland và công nghệ số",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Volunteers are needed for a village library, lunch club, errands and upcoming social events.",
      labelVi: "Cần tình nguyện viên cho thư viện làng, câu lạc bộ ăn trưa, việc vặt và sự kiện xã hội.",
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
      questionEn: "Help with what books (times to be arranged)?",
      questionVi: "Theo bài nghe, help with what books (times to be arranged)?",
      answerEn: "collecting",
      answerVi: "collecting",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Help needed to keep what of books up to date?",
      questionVi: "Theo bài nghe, help needed to keep what of books up to date?",
      answerEn: "records",
      answerVi: "records",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Library is in what Room in the village hall?",
      questionVi: "Theo bài nghe, library is in what Room in the village hall?",
      answerEn: "West",
      answerVi: "West",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Help by providing what?",
      questionVi: "Theo bài nghe, help by providing what?",
      answerEn: "transport",
      answerVi: "transport",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Help with hobbies such as what?",
      questionVi: "Theo bài nghe, help with hobbies such as what?",
      answerEn: "art",
      answerVi: "art",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Taking Mrs Carroll to what?",
      questionVi: "Theo bài nghe, taking Mrs Carroll to what?",
      answerEn: "hospital",
      answerVi: "hospital",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Southoe Village Volunteering sau lần nghe đầu…",
  transcriptCloze: CAM17_T2_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T2_P1_KEYWORD_PARAPHRASES,
};

const CAM17_T2_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Oniton Hall",
      labelVi: "Dinh thự Oniton Hall",
    },
    {
      key: "pred-1",
      labelEn: "Southoe Village Volunteering",
      labelVi: "Tình nguyện làng Southoe",
    },
    {
      key: "pred-2",
      labelEn: "Romeo and Juliet Review",
      labelVi: "Đánh giá Romeo and Juliet",
    },
    {
      key: "pred-3",
      labelEn: "Icelandic Language and Digital Technology",
      labelVi: "Tiếng Iceland và công nghệ số",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A historic hall tour covers past owners, servant life displays and farm activities for visitors.",
      labelVi: "Tour dinh thự lịch sử: chủ nhân cũ, đời sống người hầu và hoạt động nông trại cho khách.",
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
      questionEn: "Many past owners made changes to",
      questionVi: "Many past owners made changes to",
      answerEn: "B — the house.",
      answerVi: "B — the house.",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "Sir Edward Downes built Oniton Hall because he wanted",
      questionVi: "Sir Edward Downes built Oniton Hall because he wanted",
      answerEn: "C — a place for artists and writers.",
      answerVi: "C — a place for artists and writers.",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "Visitors can learn about the work of servants in the past from",
      questionVi: "Visitors can learn about the work of servants in the past from",
      answerEn: "C — people in costume.",
      answerVi: "C — people in costume.",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "What is new for children at Onion Hall?",
      questionVi: "What is new for children at Onion Hall?",
      answerEn: "B — mini tractors",
      answerVi: "B — mini tractors",
    },
    {
      key: "exam-15",
      conversationEn: "Locations on the farm — Q15",
      conversationVi: "Locations on the farm — câu 15",
      questionEn: "Which activity is offered at each of the following locations on the farm?: dairy?",
      questionVi: "Which activity is offered at each of the following locations on the farm?: dairy?",
      answerEn: "D — eating and drinking",
      answerVi: "D — eating and drinking",
    },
    {
      key: "exam-16",
      conversationEn: "Locations on the farm — Q16",
      conversationVi: "Locations on the farm — câu 16",
      questionEn: "Which activity is offered at each of the following locations on the farm?: large barn?",
      questionVi: "Which activity is offered at each of the following locations on the farm?: large barn?",
      answerEn: "C — seeing old farming equipment",
      answerVi: "C — seeing old farming equipment",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Oniton Hall sau lần nghe đầu…",
  transcriptCloze: CAM17_T2_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T2_P2_KEYWORD_PARAPHRASES,
};

const CAM17_T2_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Romeo and Juliet Review",
      labelVi: "Đánh giá Romeo and Juliet",
    },
    {
      key: "pred-1",
      labelEn: "Southoe Village Volunteering",
      labelVi: "Tình nguyện làng Southoe",
    },
    {
      key: "pred-2",
      labelEn: "Oniton Hall",
      labelVi: "Dinh thự Oniton Hall",
    },
    {
      key: "pred-3",
      labelEn: "Icelandic Language and Digital Technology",
      labelVi: "Tiếng Iceland và công nghệ số",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Students plan a theatre review and compare opinions on set, casting and other production choices.",
      labelVi: "Sinh viên lên kế hoạch review kịch và so sánh ý kiến về sân khấu, diễn viên, lựa chọn sản xuất.",
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
      questionEn: "Which TWO things do the students agree they need to include in their review of Romeo and Juliet?",
      questionVi: "Which TWO things do the students agree they need to include in their review of Romeo and Juliet?",
      answerEn: "D — a personal reaction; E — a reference to particular scenes",
      answerVi: "D — a personal reaction; E — a reference to particular scenes",
    },
    {
      key: "exam-23",
      conversationEn: "Aspects of the production — Q23",
      conversationVi: "Aspects of the production — câu 23",
      questionEn: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the set?",
      questionVi: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the set?",
      answerEn: "D — They agree this was a major strength.",
      answerVi: "D — They agree this was a major strength.",
    },
    {
      key: "exam-24",
      conversationEn: "Aspects of the production — Q24",
      conversationVi: "Aspects of the production — câu 24",
      questionEn: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the lighting?",
      questionVi: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the lighting?",
      answerEn: "C — They agree this created the right atmosphere.",
      answerVi: "C — They agree this created the right atmosphere.",
    },
    {
      key: "exam-25",
      conversationEn: "Aspects of the production — Q25",
      conversationVi: "Aspects of the production — câu 25",
      questionEn: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the costume design?",
      questionVi: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the costume design?",
      answerEn: "A — They both expected this to be more traditional.",
      answerVi: "A — They both expected this to be more traditional.",
    },
    {
      key: "exam-26",
      conversationEn: "Aspects of the production — Q26",
      conversationVi: "Aspects of the production — câu 26",
      questionEn: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the music?",
      questionVi: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the music?",
      answerEn: "E — They were both disappointed by this.",
      answerVi: "E — They were both disappointed by this.",
    },
    {
      key: "exam-27",
      conversationEn: "Aspects of the production — Q27",
      conversationVi: "Aspects of the production — câu 27",
      questionEn: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the actors’ delivery?",
      questionVi: "Which opinion do the speakers give about each of the following aspects of The Emporium’s production of Romeo and Juliet?: the actors’ delivery?",
      answerEn: "F — They disagree about why this was an issue.",
      answerVi: "F — They disagree about why this was an issue.",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Romeo and Juliet Review sau lần nghe đầu…",
  transcriptCloze: CAM17_T2_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T2_P3_KEYWORD_PARAPHRASES,
};

const CAM17_T2_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Icelandic Language and Digital Technology",
      labelVi: "Tiếng Iceland và công nghệ số",
    },
    {
      key: "pred-1",
      labelEn: "Southoe Village Volunteering",
      labelVi: "Tình nguyện làng Southoe",
    },
    {
      key: "pred-2",
      labelEn: "Oniton Hall",
      labelVi: "Dinh thự Oniton Hall",
    },
    {
      key: "pred-3",
      labelEn: "Romeo and Juliet Review",
      labelVi: "Đánh giá Romeo and Juliet",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on how digital media and English use affect young speakers of Icelandic.",
      labelVi: "Bài giảng về ảnh hưởng của truyền thông số và tiếng Anh tới người trẻ nói tiếng Iceland.",
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
      questionEn: "Has approximately what speakers?",
      questionVi: "Theo bài nghe, has approximately what speakers?",
      answerEn: "321, 000",
      answerVi: "321, 000",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Has what that is still growing?",
      questionVi: "Theo bài nghe, has what that is still growing?",
      answerEn: "vocabulary",
      answerVi: "vocabulary",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Has its own words for computer-based concepts, such as web browser and what?",
      questionVi: "Theo bài nghe, has its own words for computer-based concepts, such as web browser and what?",
      answerEn: "podcast",
      answerVi: "podcast",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Are big users of digital technology, such as what?",
      questionVi: "Theo bài nghe, are big users of digital technology, such as what?",
      answerEn: "smartphones",
      answerVi: "smartphones",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "Are becoming what very quickly?",
      questionVi: "Theo bài nghe, are becoming what very quickly?",
      answerEn: "bilingual",
      answerVi: "bilingual",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Are having discussions using only English while they are in what at school?",
      questionVi: "Theo bài nghe, are having discussions using only English while they are in what at school?",
      answerEn: "playground",
      answerVi: "playground",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Icelandic Language and Digital Technology sau lần nghe đầu…",
  transcriptCloze: CAM17_T2_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T2_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM17_T2_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam17-t2-p1": CAM17_T2_P1,
  "cam17-t2-p2": CAM17_T2_P2,
  "cam17-t2-p3": CAM17_T2_P3,
  "cam17-t2-p4": CAM17_T2_P4,
};
