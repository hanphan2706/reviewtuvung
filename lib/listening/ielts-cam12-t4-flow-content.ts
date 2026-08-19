import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM12_T4_P1_KEYWORD_PARAPHRASES,
  CAM12_T4_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t4-p1-intensive";
import {
  CAM12_T4_P2_KEYWORD_PARAPHRASES,
  CAM12_T4_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t4-p2-intensive";
import {
  CAM12_T4_P3_KEYWORD_PARAPHRASES,
  CAM12_T4_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t4-p3-intensive";
import {
  CAM12_T4_P4_KEYWORD_PARAPHRASES,
  CAM12_T4_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t4-p4-intensive";

/** Flow nghe hiểu — CAM12 Test 4 (generated from transcript + QnA). */
const CAM12_T4_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Cycle Tour Leader Enquiry",
      labelVi: "Ứng tuyển dẫn đoàn xe đạp",
    },
    {
      key: "pred-1",
      labelEn: "The Sheepmarket",
      labelVi: "The Sheepmarket",
    },
    {
      key: "pred-2",
      labelEn: "Film Studies Presentation",
      labelVi: "Thuyết trình film studies",
    },
    {
      key: "pred-3",
      labelEn: "Urban Acoustics",
      labelVi: "Âm học đô thị",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Margaret asks about leading cycle trips: availability, experience, diet limits and interview arrangements.",
      labelVi: "Margaret hỏi về dẫn chuyến đạp: thời gian rảnh, kinh nghiệm, kiêng ăn và lịch phỏng vấn.",
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
      questionEn: "Wants what. job?",
      questionVi: "Theo bài nghe, wants what. job?",
      answerEn: "temporary",
      answerVi: "temporary",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Will soon start work as what?",
      questionVi: "Theo bài nghe, will soon start work as what?",
      answerEn: "doctor",
      answerVi: "doctor",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Has led cycle trips in what?",
      questionVi: "Theo bài nghe, has led cycle trips in what?",
      answerEn: "Africa",
      answerVi: "Africa",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Is currently doing voluntary work with members of what club?",
      questionVi: "Theo bài nghe, is currently doing voluntary work with members of what club?",
      answerEn: "youth",
      answerVi: "youth",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Available for five months from the 1st of what?",
      questionVi: "Theo bài nghe, available for five months from the 1st of what?",
      answerEn: "May",
      answerVi: "May",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Can’t eat what?",
      questionVi: "Theo bài nghe, can’t eat what?",
      answerEn: "cheese",
      answerVi: "cheese",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Cycle Tour Leader Enquiry sau lần nghe đầu…",
  transcriptCloze: CAM12_T4_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T4_P1_KEYWORD_PARAPHRASES,
};

const CAM12_T4_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "The Sheepmarket",
      labelVi: "The Sheepmarket",
    },
    {
      key: "pred-1",
      labelEn: "Cycle Tour Leader Enquiry",
      labelVi: "Ứng tuyển dẫn đoàn xe đạp",
    },
    {
      key: "pred-2",
      labelEn: "Film Studies Presentation",
      labelVi: "Thuyết trình film studies",
    },
    {
      key: "pred-3",
      labelEn: "Urban Acoustics",
      labelVi: "Âm học đô thị",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A podcast walk through the Sheepmarket describes galleries, landmarks and locations on a city map.",
      labelVi: "Podcast đi quanh Sheepmarket: gallery, điểm nhấn và vị trí trên bản đồ thành phố.",
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
      questionEn: "Which is the most rapidly-growing group of residents in the Sheepmarket area?",
      questionVi: "Which is the most rapidly-growing group of residents in the Sheepmarket area?",
      answerEn: "A — young professional people",
      answerVi: "A — young professional people",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "The speaker recommends the side streets in the Sheepmarket for their",
      questionVi: "The speaker recommends the side streets in the Sheepmarket for their",
      answerEn: "C — arts and crafts.",
      answerVi: "C — arts and crafts.",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "Clothes designed by entrants for the Young Fashion competition must",
      questionVi: "Clothes designed by entrants for the Young Fashion competition must",
      answerEn: "B — be inspired by aspects of contemporary culture.",
      answerVi: "B — be inspired by aspects of contemporary culture.",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "Car parking is free in some car parks if you",
      questionVi: "Car parking is free in some car parks if you",
      answerEn: "B — buy something in the shops.",
      answerVi: "B — buy something in the shops.",
    },
    {
      key: "exam-15",
      conversationEn: "Map — Q15",
      conversationVi: "Bản đồ — câu 15",
      questionEn: "On the map, where is The Reynolds House?",
      questionVi: "Trên bản đồ, The Reynolds House ở đâu?",
      answerEn: "H — H",
      answerVi: "H — H",
    },
    {
      key: "exam-16",
      conversationEn: "Map — Q16",
      conversationVi: "Bản đồ — câu 16",
      questionEn: "On the map, where is The Thumb?",
      questionVi: "Trên bản đồ, The Thumb ở đâu?",
      answerEn: "C — C",
      answerVi: "C — C",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về The Sheepmarket sau lần nghe đầu…",
  transcriptCloze: CAM12_T4_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T4_P2_KEYWORD_PARAPHRASES,
};

const CAM12_T4_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Film Studies Presentation",
      labelVi: "Thuyết trình film studies",
    },
    {
      key: "pred-1",
      labelEn: "Cycle Tour Leader Enquiry",
      labelVi: "Ứng tuyển dẫn đoàn xe đạp",
    },
    {
      key: "pred-2",
      labelEn: "The Sheepmarket",
      labelVi: "The Sheepmarket",
    },
    {
      key: "pred-3",
      labelEn: "Urban Acoustics",
      labelVi: "Âm học đô thị",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Katie and Joe plan a film-studies talk: clips, structure, examples and how to keep the class engaged.",
      labelVi: "Katie và Joe lên kế hoạch bài nói phim: clip, cấu trúc, ví dụ và cách giữ lớp chú ý.",
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
      questionEn: "Introduce Giannetti’s book containing what of adaptations?",
      questionVi: "Theo bài nghe, introduce Giannetti’s book containing what of adaptations?",
      answerEn: "classification",
      answerVi: "classification",
    },
    {
      key: "exam-22",
      conversationEn: "Detail 22",
      conversationVi: "Chi tiết 22",
      questionEn: "Ask class to suggest what adaptations?",
      questionVi: "Theo bài nghe, ask class to suggest what adaptations?",
      answerEn: "worst",
      answerVi: "worst",
    },
    {
      key: "exam-23",
      conversationEn: "Detail 23",
      conversationVi: "Chi tiết 23",
      questionEn: "Prepare some what?",
      questionVi: "Theo bài nghe, prepare some what?",
      answerEn: "slides",
      answerVi: "slides",
    },
    {
      key: "exam-24",
      conversationEn: "Detail 24",
      conversationVi: "Chi tiết 24",
      questionEn: "Discuss relationship between adaptations and what. at the time of making the film?",
      questionVi: "Theo bài nghe, discuss relationship between adaptations and what. at the time of making the film?",
      answerEn: "issues",
      answerVi: "issues",
    },
    {
      key: "exam-25",
      conversationEn: "Films — Q25",
      conversationVi: "Films — câu 25",
      questionEn: "What do the speakers say about each of the following films?: Ran?",
      questionVi: "What do the speakers say about each of the following films?: Ran?",
      answerEn: "F — sets the original in a different country",
      answerVi: "F — sets the original in a different country",
    },
    {
      key: "exam-26",
      conversationEn: "Films — Q26",
      conversationVi: "Films — câu 26",
      questionEn: "What do the speakers say about each of the following films?: Much Ado About Nothing?",
      questionVi: "What do the speakers say about each of the following films?: Much Ado About Nothing?",
      answerEn: "A — clearly shows the historical period",
      answerVi: "A — clearly shows the historical period",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Film Studies Presentation sau lần nghe đầu…",
  transcriptCloze: CAM12_T4_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T4_P3_KEYWORD_PARAPHRASES,
};

const CAM12_T4_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Urban Acoustics",
      labelVi: "Âm học đô thị",
    },
    {
      key: "pred-1",
      labelEn: "Cycle Tour Leader Enquiry",
      labelVi: "Ứng tuyển dẫn đoàn xe đạp",
    },
    {
      key: "pred-2",
      labelEn: "The Sheepmarket",
      labelVi: "The Sheepmarket",
    },
    {
      key: "pred-3",
      labelEn: "Film Studies Presentation",
      labelVi: "Thuyết trình film studies",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "An acoustic engineer lectures on city soundscapes, noise problems and design ideas that improve urban life.",
      labelVi: "Kỹ sư âm học giảng về cảnh quan âm thanh thành phố, tiếng ồn và thiết kế cải thiện đời sống.",
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
      questionEn: "Do not show other sources of noise, e.g. when windows are open or people’s neighbours are in their what?",
      questionVi: "Theo bài nghe, do not show other sources of noise, e.g. when windows are open or people’s neighbours are in their what?",
      answerEn: "garden(s)",
      answerVi: "garden(s)",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Have made people realize that the noise is what. issue that must be dealt with?",
      questionVi: "Theo bài nghe, have made people realize that the noise is what. issue that must be dealt with?",
      answerEn: "political",
      answerVi: "political",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "Effect on what of schoolchildren?",
      questionVi: "Theo bài nghe, effect on what of schoolchildren?",
      answerEn: "work / study",
      answerVi: "work / study",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Some noises can be considered pleasant e.g. the sound of what in a town?",
      questionVi: "Theo bài nghe, some noises can be considered pleasant e.g. the sound of what in a town?",
      answerEn: "fountain",
      answerVi: "fountain",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "To investigate this, researchers may use methods from what sciences e.g. questionnaires?",
      questionVi: "Theo bài nghe, to investigate this, researchers may use methods from what sciences e.g. questionnaires?",
      answerEn: "social",
      answerVi: "social",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Plenty of activity in urban environments which are what , but also allow people to relax?",
      questionVi: "Theo bài nghe, plenty of activity in urban environments which are what , but also allow people to relax?",
      answerEn: "lively",
      answerVi: "lively",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Urban Acoustics sau lần nghe đầu…",
  transcriptCloze: CAM12_T4_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T4_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM12_T4_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam12-t4-p1": CAM12_T4_P1,
  "cam12-t4-p2": CAM12_T4_P2,
  "cam12-t4-p3": CAM12_T4_P3,
  "cam12-t4-p4": CAM12_T4_P4,
};
