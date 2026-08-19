import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM15_T2_P1_KEYWORD_PARAPHRASES,
  CAM15_T2_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t2-p1-intensive";
import {
  CAM15_T2_P2_KEYWORD_PARAPHRASES,
  CAM15_T2_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t2-p2-intensive";
import {
  CAM15_T2_P3_KEYWORD_PARAPHRASES,
  CAM15_T2_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t2-p3-intensive";
import {
  CAM15_T2_P4_KEYWORD_PARAPHRASES,
  CAM15_T2_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam15-t2-p4-intensive";

/** Flow nghe hiểu — CAM15 Test 2 (generated from transcript + QnA). */
const CAM15_T2_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Festival Information",
      labelVi: "Thông tin lễ hội",
    },
    {
      key: "pred-1",
      labelEn: "Minster Park",
      labelVi: "Công viên Minster",
    },
    {
      key: "pred-2",
      labelEn: "Charles Dickens Display",
      labelVi: "Trưng bày Charles Dickens",
    },
    {
      key: "pred-3",
      labelEn: "Agricultural Programme in Mozambique",
      labelVi: "Chương trình nông nghiệp Mozambique",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A caller checks festival dates, shows, workshops and outdoor activities before booking.",
      labelVi: "Cuộc gọi hỏi ngày diễn, workshop và hoạt động ngoài trời trước khi đặt chỗ.",
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
      questionEn: "Company called what?",
      questionVi: "Theo bài nghe, company called what?",
      answerEn: "Eustatis",
      answerVi: "Eustatis",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Type of play: a comedy called Jemima has had a good what?",
      questionVi: "Theo bài nghe, type of play: a comedy called Jemima has had a good what?",
      answerEn: "review",
      answerVi: "review",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "A play: what show?",
      questionVi: "Theo bài nghe, a play: what show?",
      answerEn: "dance",
      answerVi: "dance",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "Show is called what?",
      questionVi: "Theo bài nghe, show is called what?",
      answerEn: "Chat",
      answerVi: "Chat",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "Making what. food?",
      questionVi: "Theo bài nghe, making what. food?",
      answerEn: "healthy",
      answerVi: "healthy",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "(children only) Making what?",
      questionVi: "Theo bài nghe, (children only) Making what?",
      answerEn: "posters",
      answerVi: "posters",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Festival Information sau lần nghe đầu…",
  transcriptCloze: CAM15_T2_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T2_P1_KEYWORD_PARAPHRASES,
};

const CAM15_T2_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Minster Park",
      labelVi: "Công viên Minster",
    },
    {
      key: "pred-1",
      labelEn: "Festival Information",
      labelVi: "Thông tin lễ hội",
    },
    {
      key: "pred-2",
      labelEn: "Charles Dickens Display",
      labelVi: "Trưng bày Charles Dickens",
    },
    {
      key: "pred-3",
      labelEn: "Agricultural Programme in Mozambique",
      labelVi: "Chương trình nông nghiệp Mozambique",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A talk on the park’s history plus a map of the statue, sculptures, playground, maze and sports areas.",
      labelVi: "Bài nói về lịch sử công viên và sơ đồ tượng, sân chơi, mê cung và khu thể thao.",
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
      questionEn: "The park was originally established",
      questionVi: "The park was originally established",
      answerEn: "C — as a shared area set up by the local community.",
      answerVi: "C — as a shared area set up by the local community.",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "Why is there a statue of Diane Gosforth in the park?",
      questionVi: "Why is there a statue of Diane Gosforth in the park?",
      answerEn: "A — She was a resident who helped to lead a campaign.",
      answerVi: "A — She was a resident who helped to lead a campaign.",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "During the First World War, the park was mainly used for",
      questionVi: "During the First World War, the park was mainly used for",
      answerEn: "B — growing vegetables.",
      answerVi: "B — growing vegetables.",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "When did the physical transformation of the park begin?",
      questionVi: "When did the physical transformation of the park begin?",
      answerEn: "C — 2016",
      answerVi: "C — 2016",
    },
    {
      key: "exam-15",
      conversationEn: "Map — Q15",
      conversationVi: "Bản đồ — câu 15",
      questionEn: "On the map, where is statue of Diane Gosforth?",
      questionVi: "Trên bản đồ, statue of Diane Gosforth ở đâu?",
      answerEn: "E — E",
      answerVi: "E — E",
    },
    {
      key: "exam-16",
      conversationEn: "Map — Q16",
      conversationVi: "Bản đồ — câu 16",
      questionEn: "On the map, where is wooden sculptures?",
      questionVi: "Trên bản đồ, wooden sculptures ở đâu?",
      answerEn: "C — C",
      answerVi: "C — C",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Minster Park sau lần nghe đầu…",
  transcriptCloze: CAM15_T2_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T2_P2_KEYWORD_PARAPHRASES,
};

const CAM15_T2_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Charles Dickens Display",
      labelVi: "Trưng bày Charles Dickens",
    },
    {
      key: "pred-1",
      labelEn: "Festival Information",
      labelVi: "Thông tin lễ hội",
    },
    {
      key: "pred-2",
      labelEn: "Minster Park",
      labelVi: "Công viên Minster",
    },
    {
      key: "pred-3",
      labelEn: "Agricultural Programme in Mozambique",
      labelVi: "Chương trình nông nghiệp Mozambique",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Cathy and Graham plan a Dickens display: audience, why they chose him and themes from six novels.",
      labelVi: "Cathy và Graham lên kế hoạch trưng bày Dickens: đối tượng, lý do chọn và chủ đề tiểu thuyết.",
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
      questionEn: "Which TWO groups of people is the display primarily intended for?",
      questionVi: "Which TWO groups of people is the display primarily intended for?",
      answerEn: "B — residents of the local area; D — potential new students",
      answerVi: "B — residents of the local area; D — potential new students",
    },
    {
      key: "exam-23&24",
      conversationEn: "Questions 23–24",
      conversationVi: "Câu 23–24",
      questionEn: "What are Cathy and Graham’s TWO reasons for choosing the novelist Charles Dickens?",
      questionVi: "What are Cathy and Graham’s TWO reasons for choosing the novelist Charles Dickens?",
      answerEn: "B — He used his publications to draw attention to social problems.; C — His novels are well-known now.",
      answerVi: "B — He used his publications to draw attention to social problems.; C — His novels are well-known now.",
    },
    {
      key: "exam-25",
      conversationEn: "Novels by Dickens — Q25",
      conversationVi: "Novels by Dickens — câu 25",
      questionEn: "What topic do Cathy and Graham choose to illustrate with each novel?: The Pickwick Papers?",
      questionVi: "What topic do Cathy and Graham choose to illustrate with each novel?: The Pickwick Papers?",
      answerEn: "G — medicine",
      answerVi: "G — medicine",
    },
    {
      key: "exam-26",
      conversationEn: "Novels by Dickens — Q26",
      conversationVi: "Novels by Dickens — câu 26",
      questionEn: "What topic do Cathy and Graham choose to illustrate with each novel?: Oliver Twist?",
      questionVi: "What topic do Cathy and Graham choose to illustrate with each novel?: Oliver Twist?",
      answerEn: "B — education",
      answerVi: "B — education",
    },
    {
      key: "exam-27",
      conversationEn: "Novels by Dickens — Q27",
      conversationVi: "Novels by Dickens — câu 27",
      questionEn: "What topic do Cathy and Graham choose to illustrate with each novel?: Nicholas Nickleby?",
      questionVi: "What topic do Cathy and Graham choose to illustrate with each novel?: Nicholas Nickleby?",
      answerEn: "D — entertainment",
      answerVi: "D — entertainment",
    },
    {
      key: "exam-28",
      conversationEn: "Novels by Dickens — Q28",
      conversationVi: "Novels by Dickens — câu 28",
      questionEn: "What topic do Cathy and Graham choose to illustrate with each novel?: Martin Chuzzlewit?",
      questionVi: "What topic do Cathy and Graham choose to illustrate with each novel?: Martin Chuzzlewit?",
      answerEn: "C — Dickens’s travels",
      answerVi: "C — Dickens’s travels",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Charles Dickens Display sau lần nghe đầu…",
  transcriptCloze: CAM15_T2_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T2_P3_KEYWORD_PARAPHRASES,
};

const CAM15_T2_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Agricultural Programme in Mozambique",
      labelVi: "Chương trình nông nghiệp Mozambique",
    },
    {
      key: "pred-1",
      labelEn: "Festival Information",
      labelVi: "Thông tin lễ hội",
    },
    {
      key: "pred-2",
      labelEn: "Minster Park",
      labelVi: "Công viên Minster",
    },
    {
      key: "pred-3",
      labelEn: "Charles Dickens Display",
      labelVi: "Trưng bày Charles Dickens",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on a dry-region farming project: water, fences, marketing and lessons from the evaluation.",
      labelVi: "Bài giảng về dự án vùng khô: nước, hàng rào, tiếp thị và bài học đánh giá.",
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
      questionEn: "What was seen as the main priority to ensure the supply of water?",
      questionVi: "Theo bài nghe, what was seen as the main priority to ensure the supply of water?",
      answerEn: "Irrigation",
      answerVi: "Irrigation",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Most of the work organised by farmers’ associations was done by what?",
      questionVi: "Theo bài nghe, most of the work organised by farmers’ associations was done by what?",
      answerEn: "women",
      answerVi: "women",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "What for the fences?",
      questionVi: "Theo bài nghe, what for the fences?",
      answerEn: "wire(s)",
      answerVi: "wire(s)",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "What for suitable crops?",
      questionVi: "Theo bài nghe, what for suitable crops?",
      answerEn: "seed(s)",
      answerVi: "seed(s)",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "What for the fences on their land?",
      questionVi: "Theo bài nghe, what for the fences on their land?",
      answerEn: "posts",
      answerVi: "posts",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "The marketing of produce was sometimes difficult due to lack of what?",
      questionVi: "Theo bài nghe, the marketing of produce was sometimes difficult due to lack of what?",
      answerEn: "transport",
      answerVi: "transport",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Agricultural Programme in Mozambique sau lần nghe đầu…",
  transcriptCloze: CAM15_T2_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM15_T2_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM15_T2_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam15-t2-p1": CAM15_T2_P1,
  "cam15-t2-p2": CAM15_T2_P2,
  "cam15-t2-p3": CAM15_T2_P3,
  "cam15-t2-p4": CAM15_T2_P4,
};
