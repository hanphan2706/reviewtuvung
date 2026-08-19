import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM13_T1_P1_KEYWORD_PARAPHRASES,
  CAM13_T1_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam13-t1-p1-intensive";
import {
  CAM13_T1_P2_KEYWORD_PARAPHRASES,
  CAM13_T1_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam13-t1-p2-intensive";
import {
  CAM13_T1_P3_KEYWORD_PARAPHRASES,
  CAM13_T1_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam13-t1-p3-intensive";
import {
  CAM13_T1_P4_KEYWORD_PARAPHRASES,
  CAM13_T1_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam13-t1-p4-intensive";

/** Flow nghe hiểu — CAM13 Test 1 (generated from transcript + QnA). */
const CAM13_T1_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Cookery Classes",
      labelVi: "Lớp nấu ăn",
    },
    {
      key: "pred-1",
      labelEn: "Traffic Changes in Granford",
      labelVi: "Thay đổi giao thông ở Granford",
    },
    {
      key: "pred-2",
      labelEn: "Seed Germination Experiment",
      labelVi: "Thí nghiệm nảy mầm hạt",
    },
    {
      key: "pred-3",
      labelEn: "Effects of Urban Environments on Animals",
      labelVi: "Ảnh hưởng môi trường đô thị lên động vật",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A tourist asks about day cookery classes: seasonal cooking, healthy recipes and a vegetarian centre near the market.",
      labelVi: "Khách hỏi lớp nấu một ngày: nguyên liệu theo mùa, công thức lành mạnh và trung tâm chay gần chợ.",
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
      questionEn: "How to what and cook with seasonal products?",
      questionVi: "Theo bài nghe, how to what and cook with seasonal products?",
      answerEn: "choose",
      answerVi: "choose",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Also offers what classes?",
      questionVi: "Theo bài nghe, also offers what classes?",
      answerEn: "private",
      answerVi: "private",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Clients who return get what discount?",
      questionVi: "Theo bài nghe, clients who return get what discount?",
      answerEn: "20 / twenty percent",
      answerVi: "20 / twenty percent",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Food that is what?",
      questionVi: "Theo bài nghe, food that is what?",
      answerEn: "healthy",
      answerVi: "healthy",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Includes recipes to strengthen your what?",
      questionVi: "Theo bài nghe, includes recipes to strengthen your what?",
      answerEn: "bones",
      answerVi: "bones",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "They have a free what Every Thursday?",
      questionVi: "Theo bài nghe, they have a free what Every Thursday?",
      answerEn: "lecture",
      answerVi: "lecture",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Cookery Classes sau lần nghe đầu…",
  transcriptCloze: CAM13_T1_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM13_T1_P1_KEYWORD_PARAPHRASES,
};

const CAM13_T1_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Traffic Changes in Granford",
      labelVi: "Thay đổi giao thông ở Granford",
    },
    {
      key: "pred-1",
      labelEn: "Cookery Classes",
      labelVi: "Lớp nấu ăn",
    },
    {
      key: "pred-2",
      labelEn: "Seed Germination Experiment",
      labelVi: "Thí nghiệm nảy mầm hạt",
    },
    {
      key: "pred-3",
      labelEn: "Effects of Urban Environments on Animals",
      labelVi: "Ảnh hưởng môi trường đô thị lên động vật",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A highways chair explains new traffic rules, residents’ complaints and proposed map changes around the High Street.",
      labelVi: "Chủ tịch giao thông giải thích quy tắc mới, phản ánh cư dân và thay đổi trên bản đồ.",
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
      questionEn: "Why are changes needed to traffic systems in Granford?",
      questionVi: "Why are changes needed to traffic systems in Granford?",
      answerEn: "B — The amount of traffic on the roads has increased.",
      answerVi: "B — The amount of traffic on the roads has increased.",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "In a survey, local residents particularly complained about",
      questionVi: "In a survey, local residents particularly complained about",
      answerEn: "C — inconvenience from parked cars.",
      answerVi: "C — inconvenience from parked cars.",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "According to the speaker, one problem with the new regulations will be",
      questionVi: "According to the speaker, one problem with the new regulations will be",
      answerEn: "B — finding a way to make people follow them.",
      answerVi: "B — finding a way to make people follow them.",
    },
    {
      key: "exam-14",
      conversationEn: "Map — Q14",
      conversationVi: "Bản đồ — câu 14",
      questionEn: "On the map, where is New traffic lights?",
      questionVi: "Trên bản đồ, New traffic lights ở đâu?",
      answerEn: "E — E",
      answerVi: "E — E",
    },
    {
      key: "exam-15",
      conversationEn: "Map — Q15",
      conversationVi: "Bản đồ — câu 15",
      questionEn: "On the map, where is Pedestrian crossing?",
      questionVi: "Trên bản đồ, Pedestrian crossing ở đâu?",
      answerEn: "D — D",
      answerVi: "D — D",
    },
    {
      key: "exam-16",
      conversationEn: "Map — Q16",
      conversationVi: "Bản đồ — câu 16",
      questionEn: "On the map, where is Parking allowed?",
      questionVi: "Trên bản đồ, Parking allowed ở đâu?",
      answerEn: "B — B",
      answerVi: "B — B",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Traffic Changes in Granford sau lần nghe đầu…",
  transcriptCloze: CAM13_T1_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM13_T1_P2_KEYWORD_PARAPHRASES,
};

const CAM13_T1_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Seed Germination Experiment",
      labelVi: "Thí nghiệm nảy mầm hạt",
    },
    {
      key: "pred-1",
      labelEn: "Cookery Classes",
      labelVi: "Lớp nấu ăn",
    },
    {
      key: "pred-2",
      labelEn: "Traffic Changes in Granford",
      labelVi: "Thay đổi giao thông ở Granford",
    },
    {
      key: "pred-3",
      labelEn: "Effects of Urban Environments on Animals",
      labelVi: "Ảnh hưởng môi trường đô thị lên động vật",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Jack and Emma plan a germination experiment: aims, sources, procedure and what to measure.",
      labelVi: "Jack và Emma lên kế hoạch thí nghiệm: mục tiêu, nguồn tài liệu và quy trình đo đạc.",
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
      questionEn: "Why is Jack interested in investigating seed germination?",
      questionVi: "Why is Jack interested in investigating seed germination?",
      answerEn: "A — He may do a module on a related topic later on.",
      answerVi: "A — He may do a module on a related topic later on.",
    },
    {
      key: "exam-22",
      conversationEn: "Question 22",
      conversationVi: "Câu 22",
      questionEn: "Jack and Emma agree the main advantage of their present experiment is that it can be",
      questionVi: "Jack and Emma agree the main advantage of their present experiment is that it can be",
      answerEn: "C — completed in the time available.",
      answerVi: "C — completed in the time available.",
    },
    {
      key: "exam-23",
      conversationEn: "Question 23",
      conversationVi: "Câu 23",
      questionEn: "What do they decide to check with their tutor?",
      questionVi: "What do they decide to check with their tutor?",
      answerEn: "B — whether anyone else has chosen this topic",
      answerVi: "B — whether anyone else has chosen this topic",
    },
    {
      key: "exam-24",
      conversationEn: "Question 24",
      conversationVi: "Câu 24",
      questionEn: "They agree that Graves’ book on seed germination is disappointing because",
      questionVi: "They agree that Graves’ book on seed germination is disappointing because",
      answerEn: "C — its focus is very theoretical.",
      answerVi: "C — its focus is very theoretical.",
    },
    {
      key: "exam-25",
      conversationEn: "Question 25",
      conversationVi: "Câu 25",
      questionEn: "What does Jack say about the article on seed germination by Lee Hall?",
      questionVi: "What does Jack say about the article on seed germination by Lee Hall?",
      answerEn: "B — The analysis of seed germination statistics is thorough.",
      answerVi: "B — The analysis of seed germination statistics is thorough.",
    },
    {
      key: "exam-26",
      conversationEn: "Detail 26",
      conversationVi: "Chi tiết 26",
      questionEn: "Select seeds of different what and sizes?",
      questionVi: "Theo bài nghe, select seeds of different what and sizes?",
      answerEn: "G",
      answerVi: "G",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Seed Germination Experiment sau lần nghe đầu…",
  transcriptCloze: CAM13_T1_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM13_T1_P3_KEYWORD_PARAPHRASES,
};

const CAM13_T1_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Effects of Urban Environments on Animals",
      labelVi: "Ảnh hưởng môi trường đô thị lên động vật",
    },
    {
      key: "pred-1",
      labelEn: "Cookery Classes",
      labelVi: "Lớp nấu ăn",
    },
    {
      key: "pred-2",
      labelEn: "Traffic Changes in Granford",
      labelVi: "Thay đổi giao thông ở Granford",
    },
    {
      key: "pred-3",
      labelEn: "Seed Germination Experiment",
      labelVi: "Thí nghiệm nảy mầm hạt",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on how city life changes mammals and birds: brains, behaviour, stress and communication.",
      labelVi: "Bài giảng về cách thành phố làm đổi não, hành vi, stress và giao tiếp của động vật.",
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
      questionEn: "What – because of its general adaptability?",
      questionVi: "Theo bài nghe, what – because of its general adaptability?",
      answerEn: "crow",
      answerVi: "crow",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "The pigeon – because walls of city buildings are similar to what?",
      questionVi: "Theo bài nghe, the pigeon – because walls of city buildings are similar to what?",
      answerEn: "cliffs",
      answerVi: "cliffs",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "In fact, many urban animals are adapting with unusual what?",
      questionVi: "Theo bài nghe, in fact, many urban animals are adapting with unusual what?",
      answerEn: "speed",
      answerVi: "speed",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "She found the size of their what. had increased?",
      questionVi: "Theo bài nghe, she found the size of their what. had increased?",
      answerEn: "brain(s)",
      answerVi: "brain(s)",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "She suggests this may be due to the need to locate new sources of what and to deal with new dangers?",
      questionVi: "Theo bài nghe, she suggests this may be due to the need to locate new sources of what and to deal with new dangers?",
      answerEn: "food",
      answerVi: "food",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Catarina Miranda focused on what of urban and rural blackbirds?",
      questionVi: "Theo bài nghe, catarina Miranda focused on what of urban and rural blackbirds?",
      answerEn: "behaviour(s) / behavior(s)",
      answerVi: "behaviour(s) / behavior(s)",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Effects of Urban Environments on Animals sau lần nghe đầu…",
  transcriptCloze: CAM13_T1_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM13_T1_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM13_T1_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam13-t1-p1": CAM13_T1_P1,
  "cam13-t1-p2": CAM13_T1_P2,
  "cam13-t1-p3": CAM13_T1_P3,
  "cam13-t1-p4": CAM13_T1_P4,
};
