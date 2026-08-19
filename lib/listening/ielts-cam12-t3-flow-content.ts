import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM12_T3_P1_KEYWORD_PARAPHRASES,
  CAM12_T3_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t3-p1-intensive";
import {
  CAM12_T3_P2_KEYWORD_PARAPHRASES,
  CAM12_T3_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t3-p2-intensive";
import {
  CAM12_T3_P3_KEYWORD_PARAPHRASES,
  CAM12_T3_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t3-p3-intensive";
import {
  CAM12_T3_P4_KEYWORD_PARAPHRASES,
  CAM12_T3_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t3-p4-intensive";

/** Flow nghe hiểu — CAM12 Test 3 (generated from transcript + QnA). */
const CAM12_T3_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Joining the Library",
      labelVi: "Đăng ký thư viện",
    },
    {
      key: "pred-1",
      labelEn: "Specialised Holidays",
      labelVi: "Kỳ nghỉ chuyên biệt",
    },
    {
      key: "pred-2",
      labelEn: "Writing a Case Study",
      labelVi: "Viết case study",
    },
    {
      key: "pred-3",
      labelEn: "Mercury and Wildlife",
      labelVi: "Thủy ngân và động vật hoang dã",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Susie tells Paul about the reopened library: membership, facilities, classes and practical booking tips.",
      labelVi: "Susie kể Paul về thư viện mở lại: hội viên, tiện ích, lớp học và mẹo đặt chỗ.",
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
      questionEn: "An expanded section for books on what?",
      questionVi: "Theo bài nghe, an expanded section for books on what?",
      answerEn: "travel / travel(l)ing",
      answerVi: "travel / travel(l)ing",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "A new section on local what?",
      questionVi: "Theo bài nghe, a new section on local what?",
      answerEn: "history",
      answerVi: "history",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "A community room for meetings (also possible to what there)?",
      questionVi: "Theo bài nghe, a community room for meetings (also possible to what there)?",
      answerEn: "study",
      answerVi: "study",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "A new section of books for what?",
      questionVi: "Theo bài nghe, a new section of books for what?",
      answerEn: "teenagers",
      answerVi: "teenagers",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "The next Science Club meeting: experiments using things from your what?",
      questionVi: "Theo bài nghe, the next Science Club meeting: experiments using things from your what?",
      answerEn: "kitchen",
      answerVi: "kitchen",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "This Friday: a local author talks about a novel based on a real what?",
      questionVi: "Theo bài nghe, this Friday: a local author talks about a novel based on a real what?",
      answerEn: "crime",
      answerVi: "crime",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Joining the Library sau lần nghe đầu…",
  transcriptCloze: CAM12_T3_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T3_P1_KEYWORD_PARAPHRASES,
};

const CAM12_T3_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Specialised Holidays",
      labelVi: "Kỳ nghỉ chuyên biệt",
    },
    {
      key: "pred-1",
      labelEn: "Joining the Library",
      labelVi: "Đăng ký thư viện",
    },
    {
      key: "pred-2",
      labelEn: "Writing a Case Study",
      labelVi: "Viết case study",
    },
    {
      key: "pred-3",
      labelEn: "Mercury and Wildlife",
      labelVi: "Thủy ngân và động vật hoang dã",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A BC Travel trainer outlines niche holiday types, selling points and how staff should match clients to trips.",
      labelVi: "Huấn luyện viên BC Travel nêu các loại kỳ nghỉ niche và cách khớp khách với chuyến đi.",
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
      key: "exam-11&12",
      conversationEn: "Questions 11–12",
      conversationVi: "Câu 11–12",
      questionEn: "Which TWO age groups are taking increasing numbers of holidays with BC Travel?",
      questionVi: "Which TWO age groups are taking increasing numbers of holidays with BC Travel?",
      answerEn: "D — 55-64 years; E — over 65 years",
      answerVi: "D — 55-64 years; E — over 65 years",
    },
    {
      key: "exam-13&14",
      conversationEn: "Questions 13–14",
      conversationVi: "Câu 13–14",
      questionEn: "Which TWO are the main reasons given for the popularity of activity holidays?",
      questionVi: "Which TWO are the main reasons given for the popularity of activity holidays?",
      answerEn: "A — Clients make new friends.; C — Clients learn about a different culture.",
      answerVi: "A — Clients make new friends.; C — Clients learn about a different culture.",
    },
    {
      key: "exam-15",
      conversationEn: "Question 15",
      conversationVi: "Câu 15",
      questionEn: "How does BC Travel plan to expand the painting holidays?",
      questionVi: "How does BC Travel plan to expand the painting holidays?",
      answerEn: "C — by employing more teachers",
      answerVi: "C — by employing more teachers",
    },
    {
      key: "exam-16",
      conversationEn: "Question 16",
      conversationVi: "Câu 16",
      questionEn: "Why are BC Travel’s cooking holidays unusual?",
      questionVi: "Why are BC Travel’s cooking holidays unusual?",
      answerEn: "B — They have an international focus.",
      answerVi: "B — They have an international focus.",
    },
    {
      key: "exam-17",
      conversationEn: "Question 17",
      conversationVi: "Câu 17",
      questionEn: "What does the speaker say about the photography holidays?",
      questionVi: "What does the speaker say about the photography holidays?",
      answerEn: "A — Clients receive individual tuition.",
      answerVi: "A — Clients receive individual tuition.",
    },
    {
      key: "exam-18",
      conversationEn: "Detail 18",
      conversationVi: "Chi tiết 18",
      questionEn: "Also reduces what?",
      questionVi: "Theo bài nghe, also reduces what?",
      answerEn: "stress",
      answerVi: "stress",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Specialised Holidays sau lần nghe đầu…",
  transcriptCloze: CAM12_T3_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T3_P2_KEYWORD_PARAPHRASES,
};

const CAM12_T3_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Writing a Case Study",
      labelVi: "Viết case study",
    },
    {
      key: "pred-1",
      labelEn: "Joining the Library",
      labelVi: "Đăng ký thư viện",
    },
    {
      key: "pred-2",
      labelEn: "Specialised Holidays",
      labelVi: "Kỳ nghỉ chuyên biệt",
    },
    {
      key: "pred-3",
      labelEn: "Mercury and Wildlife",
      labelVi: "Thủy ngân và động vật hoang dã",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Natalie and Dave work out what a case study requires: structure, evidence, interviews and common pitfalls.",
      labelVi: "Natalie và Dave bàn cấu trúc case study, bằng chứng, phỏng vấn và lỗi thường gặp.",
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
      questionEn: "Locate and read relevant articles, noting key information and also what?",
      questionVi: "Theo bài nghe, locate and read relevant articles, noting key information and also what?",
      answerEn: "C",
      answerVi: "C",
    },
    {
      key: "exam-22",
      conversationEn: "Detail 22",
      conversationVi: "Chi tiết 22",
      questionEn: "Select interviewees – these may be site what , visitors or city 23………………?",
      questionVi: "Theo bài nghe, select interviewees – these may be site what , visitors or city 23………………?",
      answerEn: "E",
      answerVi: "E",
    },
    {
      key: "exam-23",
      conversationEn: "Detail 23",
      conversationVi: "Chi tiết 23",
      questionEn: "Select interviewees – these may be site 22…………… , visitors or city what?",
      questionVi: "Theo bài nghe, select interviewees – these may be site 22…………… , visitors or city what?",
      answerEn: "H",
      answerVi: "H",
    },
    {
      key: "exam-24",
      conversationEn: "Detail 24",
      conversationVi: "Chi tiết 24",
      questionEn: "Check whether what of interviewees can be used?",
      questionVi: "Theo bài nghe, check whether what of interviewees can be used?",
      answerEn: "B",
      answerVi: "B",
    },
    {
      key: "exam-25",
      conversationEn: "Detail 25",
      conversationVi: "Chi tiết 25",
      questionEn: "Select relevant information and try to identify what?",
      questionVi: "Theo bài nghe, select relevant information and try to identify what?",
      answerEn: "A",
      answerVi: "A",
    },
    {
      key: "exam-26",
      conversationEn: "Detail 26",
      conversationVi: "Chi tiết 26",
      questionEn: "Do NOT end with what?",
      questionVi: "Theo bài nghe, do NOT end with what?",
      answerEn: "F",
      answerVi: "F",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Writing a Case Study sau lần nghe đầu…",
  transcriptCloze: CAM12_T3_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T3_P3_KEYWORD_PARAPHRASES,
};

const CAM12_T3_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Mercury and Wildlife",
      labelVi: "Thủy ngân và động vật hoang dã",
    },
    {
      key: "pred-1",
      labelEn: "Joining the Library",
      labelVi: "Đăng ký thư viện",
    },
    {
      key: "pred-2",
      labelEn: "Specialised Holidays",
      labelVi: "Kỳ nghỉ chuyên biệt",
    },
    {
      key: "pred-3",
      labelEn: "Writing a Case Study",
      labelVi: "Viết case study",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture explains how mercury pollution moves through ecosystems and harms wildlife and human health.",
      labelVi: "Bài giảng về ô nhiễm thủy ngân lan trong hệ sinh thái và hại động vật cùng sức khỏe người.",
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
      questionEn: "It has also recently been found to affect birds which feed on what?",
      questionVi: "Theo bài nghe, it has also recently been found to affect birds which feed on what?",
      answerEn: "insects",
      answerVi: "insects",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "The effects on birds’ what.. or mental processes, e.g. memory?",
      questionVi: "Theo bài nghe, the effects on birds’ what.. or mental processes, e.g. memory?",
      answerEn: "behaviour / behavior",
      answerVi: "behaviour / behavior",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "The effects on bird song (usually learned from a bird’s what )?",
      questionVi: "Theo bài nghe, the effects on bird song (usually learned from a bird’s what )?",
      answerEn: "father",
      answerVi: "father",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Songs learned by birds exposed to mercury are less what?",
      questionVi: "Theo bài nghe, songs learned by birds exposed to mercury are less what?",
      answerEn: "complex / complicated",
      answerVi: "complex / complicated",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "This may have a negative effect on birds’ what?",
      questionVi: "Theo bài nghe, this may have a negative effect on birds’ what?",
      answerEn: "reproduction / breeding",
      answerVi: "reproduction / breeding",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Allow more what.. for the experimenter?",
      questionVi: "Theo bài nghe, allow more what.. for the experimenter?",
      answerEn: "control",
      answerVi: "control",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Mercury and Wildlife sau lần nghe đầu…",
  transcriptCloze: CAM12_T3_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T3_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM12_T3_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam12-t3-p1": CAM12_T3_P1,
  "cam12-t3-p2": CAM12_T3_P2,
  "cam12-t3-p3": CAM12_T3_P3,
  "cam12-t3-p4": CAM12_T3_P4,
};
