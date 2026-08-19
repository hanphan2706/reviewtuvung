import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM17_T1_P1_KEYWORD_PARAPHRASES,
  CAM17_T1_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t1-p1-intensive";
import {
  CAM17_T1_P2_KEYWORD_PARAPHRASES,
  CAM17_T1_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t1-p2-intensive";
import {
  CAM17_T1_P3_KEYWORD_PARAPHRASES,
  CAM17_T1_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t1-p3-intensive";
import {
  CAM17_T1_P4_KEYWORD_PARAPHRASES,
  CAM17_T1_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam17-t1-p4-intensive";

/** Flow nghe hiểu — CAM17 Test 1 (generated from transcript + QnA). */
const CAM17_T1_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Buckworth Conservation Group",
      labelVi: "Nhóm bảo tồn Buckworth",
    },
    {
      key: "pred-1",
      labelEn: "Boat Trip Round Tasmania",
      labelVi: "Tour thuyền quanh Tasmania",
    },
    {
      key: "pred-2",
      labelEn: "Veterinary Work Experience",
      labelVi: "Thực tập thú y",
    },
    {
      key: "pred-3",
      labelEn: "Labyrinths",
      labelVi: "Mê cung labyrinth",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A conservation group outlines beach and nature-reserve work plus upcoming events and a woodwork session.",
      labelVi: "Nhóm bảo tồn giới thiệu công việc bãi biển, khu bảo tồn và các sự kiện sắp tới.",
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
      questionEn: "Making sure the beach does not have what on it?",
      questionVi: "Theo bài nghe, making sure the beach does not have what on it?",
      answerEn: "litter",
      answerVi: "litter",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Beach: no what?",
      questionVi: "Theo bài nghe, beach: no what?",
      answerEn: "dogs",
      answerVi: "dogs",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Next task is taking action to attract what to the place?",
      questionVi: "Theo bài nghe, next task is taking action to attract what to the place?",
      answerEn: "insects",
      answerVi: "insects",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Identifying types of what?",
      questionVi: "Theo bài nghe, identifying types of what?",
      answerEn: "butterflies",
      answerVi: "butterflies",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Building a new what?",
      questionVi: "Theo bài nghe, building a new what?",
      answerEn: "wall",
      answerVi: "wall",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Walk across the sands and reach what?",
      questionVi: "Theo bài nghe, walk across the sands and reach what?",
      answerEn: "island",
      answerVi: "island",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Buckworth Conservation Group sau lần nghe đầu…",
  transcriptCloze: CAM17_T1_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T1_P1_KEYWORD_PARAPHRASES,
};

const CAM17_T1_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Boat Trip Round Tasmania",
      labelVi: "Tour thuyền quanh Tasmania",
    },
    {
      key: "pred-1",
      labelEn: "Buckworth Conservation Group",
      labelVi: "Nhóm bảo tồn Buckworth",
    },
    {
      key: "pred-2",
      labelEn: "Veterinary Work Experience",
      labelVi: "Thực tập thú y",
    },
    {
      key: "pred-3",
      labelEn: "Labyrinths",
      labelVi: "Mê cung labyrinth",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A guide describes a Tasmania boat tour covering capacity, lunchboxes, wildlife and coastal caves.",
      labelVi: "Hướng dẫn viên mô tả tour thuyền Tasmania: sức chứa, hộp cơm, động vật và hang động.",
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
      questionEn: "What is the maximum number of people who can stand on each side of the boat?",
      questionVi: "What is the maximum number of people who can stand on each side of the boat?",
      answerEn: "A — 9",
      answerVi: "A — 9",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "What colour are the tour boats?",
      questionVi: "What colour are the tour boats?",
      answerEn: "C — light green",
      answerVi: "C — light green",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "Which lunchbox is suitable for someone who doesn’t eat meat or fish?",
      questionVi: "Which lunchbox is suitable for someone who doesn’t eat meat or fish?",
      answerEn: "B — Lunch box 2",
      answerVi: "B — Lunch box 2",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "What should people do with their litter?",
      questionVi: "What should people do with their litter?",
      answerEn: "B — hand it to a member of staff",
      answerVi: "B — hand it to a member of staff",
    },
    {
      key: "exam-15&16",
      conversationEn: "Questions 15–16",
      conversationVi: "Câu 15–16",
      questionEn: "Which TWO features of the lighthouse does Lou mention?",
      questionVi: "Which TWO features of the lighthouse does Lou mention?",
      answerEn: "A — why it was built; D — who staffed it",
      answerVi: "A — why it was built; D — who staffed it",
    },
    {
      key: "exam-17&18",
      conversationEn: "Questions 17–18",
      conversationVi: "Câu 17–18",
      questionEn: "Which TWO types of creature might come close to the boat?",
      questionVi: "Which TWO types of creature might come close to the boat?",
      answerEn: "B — fur seals; C — dolphins",
      answerVi: "B — fur seals; C — dolphins",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Boat Trip Round Tasmania sau lần nghe đầu…",
  transcriptCloze: CAM17_T1_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T1_P2_KEYWORD_PARAPHRASES,
};

const CAM17_T1_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Veterinary Work Experience",
      labelVi: "Thực tập thú y",
    },
    {
      key: "pred-1",
      labelEn: "Buckworth Conservation Group",
      labelVi: "Nhóm bảo tồn Buckworth",
    },
    {
      key: "pred-2",
      labelEn: "Boat Trip Round Tasmania",
      labelVi: "Tour thuyền quanh Tasmania",
    },
    {
      key: "pred-3",
      labelEn: "Labyrinths",
      labelVi: "Mê cung labyrinth",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Students compare farm placements for veterinary science, from animals treated to feed supplements.",
      labelVi: "Sinh viên so sánh các kỳ thực tập thú y trên trang trại, từ động vật đến thức ăn bổ sung.",
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
      questionEn: "What problem did both Diana and Tim have when arranging their work experience?",
      questionVi: "What problem did both Diana and Tim have when arranging their work experience?",
      answerEn: "A — make initial contact with suitable farms",
      answerVi: "A — make initial contact with suitable farms",
    },
    {
      key: "exam-22",
      conversationEn: "Question 22",
      conversationVi: "Câu 22",
      questionEn: "Tim was pleased to be able to help",
      questionVi: "Tim was pleased to be able to help",
      answerEn: "B — a sheep that was having difficult giving birth.",
      answerVi: "B — a sheep that was having difficult giving birth.",
    },
    {
      key: "exam-23",
      conversationEn: "Question 23",
      conversationVi: "Câu 23",
      questionEn: "Diana says the sheep on her farm",
      questionVi: "Diana says the sheep on her farm",
      answerEn: "B — were mainly reared for their meat.",
      answerVi: "B — were mainly reared for their meat.",
    },
    {
      key: "exam-24",
      conversationEn: "Question 24",
      conversationVi: "Câu 24",
      questionEn: "What did the students learn about adding supplements to chicken feed?",
      questionVi: "What did the students learn about adding supplements to chicken feed?",
      answerEn: "A — These should only be given if specially needed.",
      answerVi: "A — These should only be given if specially needed.",
    },
    {
      key: "exam-25",
      conversationEn: "Question 25",
      conversationVi: "Câu 25",
      questionEn: "What happened when Diana was working with dairy cows?",
      questionVi: "What happened when Diana was working with dairy cows?",
      answerEn: "C — She made a mistake when storing milk.",
      answerVi: "C — She made a mistake when storing milk.",
    },
    {
      key: "exam-26",
      conversationEn: "Question 26",
      conversationVi: "Câu 26",
      questionEn: "What did both farmers mention about vets and farming?",
      questionVi: "What did both farmers mention about vets and farming?",
      answerEn: "C — Some jobs could be done by the farmer rather than by a vet.",
      answerVi: "C — Some jobs could be done by the farmer rather than by a vet.",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Veterinary Work Experience sau lần nghe đầu…",
  transcriptCloze: CAM17_T1_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T1_P3_KEYWORD_PARAPHRASES,
};

const CAM17_T1_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Labyrinths",
      labelVi: "Mê cung labyrinth",
    },
    {
      key: "pred-1",
      labelEn: "Buckworth Conservation Group",
      labelVi: "Nhóm bảo tồn Buckworth",
    },
    {
      key: "pred-2",
      labelEn: "Boat Trip Round Tasmania",
      labelVi: "Tour thuyền quanh Tasmania",
    },
    {
      key: "pred-3",
      labelEn: "Veterinary Work Experience",
      labelVi: "Thực tập thú y",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture contrasts labyrinths with mazes and explores history, symbolism and modern health uses.",
      labelVi: "Bài giảng phân biệt labyrinth với maze và khám phá lịch sử, biểu tượng, ứng dụng sức khỏe.",
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
      questionEn: "Mazes are a type of what?",
      questionVi: "Theo bài nghe, mazes are a type of what?",
      answerEn: "puzzle",
      answerVi: "puzzle",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "What is needed to navigate through a maze?",
      questionVi: "Theo bài nghe, what is needed to navigate through a maze?",
      answerEn: "logic",
      answerVi: "logic",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "The word ‘maze’ is derived from a word meaning a feeling of what?",
      questionVi: "Theo bài nghe, the word ‘maze’ is derived from a word meaning a feeling of what?",
      answerEn: "confusion",
      answerVi: "confusion",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "They have frequently been used in what and prayer?",
      questionVi: "Theo bài nghe, they have frequently been used in what and prayer?",
      answerEn: "meditation",
      answerVi: "meditation",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "Ancient carvings on what have been found across many cultures?",
      questionVi: "Theo bài nghe, ancient carvings on what have been found across many cultures?",
      answerEn: "stone",
      answerVi: "stone",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Ancient Greeks used the symbol on what?",
      questionVi: "Theo bài nghe, ancient Greeks used the symbol on what?",
      answerEn: "coins",
      answerVi: "coins",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Labyrinths sau lần nghe đầu…",
  transcriptCloze: CAM17_T1_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM17_T1_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM17_T1_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam17-t1-p1": CAM17_T1_P1,
  "cam17-t1-p2": CAM17_T1_P2,
  "cam17-t1-p3": CAM17_T1_P3,
  "cam17-t1-p4": CAM17_T1_P4,
};
