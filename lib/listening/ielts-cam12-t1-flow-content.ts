import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM12_T1_P1_KEYWORD_PARAPHRASES,
  CAM12_T1_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t1-p1-intensive";
import {
  CAM12_T1_P2_KEYWORD_PARAPHRASES,
  CAM12_T1_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t1-p2-intensive";
import {
  CAM12_T1_P3_KEYWORD_PARAPHRASES,
  CAM12_T1_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t1-p3-intensive";
import {
  CAM12_T1_P4_KEYWORD_PARAPHRASES,
  CAM12_T1_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam12-t1-p4-intensive";

/** Flow nghe hiểu — CAM12 Test 1 (generated from transcript + QnA). */
const CAM12_T1_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Family Excursions",
      labelVi: "Chuyến tham quan gia đình",
    },
    {
      key: "pred-1",
      labelEn: "Kitchen Assistants",
      labelVi: "Phụ bếp nhà hàng",
    },
    {
      key: "pred-2",
      labelEn: "Public Libraries Research",
      labelVi: "Nghiên cứu thư viện công cộng",
    },
    {
      key: "pred-3",
      labelEn: "Business Values",
      labelVi: "Giá trị trong kinh doanh",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A visitor asks about lake cruises and farm visits suitable for children, including bikes, maps and ticket prices.",
      labelVi: "Khách hỏi cruise hồ và thăm nông trại phù hợp trẻ em, xe đạp, bản đồ và giá vé.",
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
      questionEn: "Can take photos of what that surround the lake?",
      questionVi: "Theo bài nghe, can take photos of what that surround the lake?",
      answerEn: "mountains",
      answerVi: "mountains",
    },
    {
      key: "exam-2",
      conversationEn: "Detail 2",
      conversationVi: "Chi tiết 2",
      questionEn: "Visit can include a 40-minute ride on what?",
      questionVi: "Theo bài nghe, visit can include a 40-minute ride on what?",
      answerEn: "horse",
      answerVi: "horse",
    },
    {
      key: "exam-3",
      conversationEn: "Detail 3",
      conversationVi: "Chi tiết 3",
      questionEn: "Visitors can walk in the farm’s what by the lake?",
      questionVi: "Theo bài nghe, visitors can walk in the farm’s what by the lake?",
      answerEn: "garden(s)",
      answerVi: "garden(s)",
    },
    {
      key: "exam-4",
      conversationEn: "Detail 4",
      conversationVi: "Chi tiết 4",
      questionEn: "What is available at extra cost?",
      questionVi: "Theo bài nghe, what is available at extra cost?",
      answerEn: "lunch",
      answerVi: "lunch",
    },
    {
      key: "exam-5",
      conversationEn: "Detail 5",
      conversationVi: "Chi tiết 5",
      questionEn: "What. is provided?",
      questionVi: "Theo bài nghe, what. is provided?",
      answerEn: "map",
      answerVi: "map",
    },
    {
      key: "exam-6",
      conversationEn: "Detail 6",
      conversationVi: "Chi tiết 6",
      questionEn: "Only suitable for cyclists who have some what?",
      questionVi: "Theo bài nghe, only suitable for cyclists who have some what?",
      answerEn: "experience",
      answerVi: "experience",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Family Outings sau lần nghe đầu…",
  transcriptCloze: CAM12_T1_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T1_P1_KEYWORD_PARAPHRASES,
};

const CAM12_T1_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Kitchen Assistants",
      labelVi: "Phụ bếp nhà hàng",
    },
    {
      key: "pred-1",
      labelEn: "Family Excursions",
      labelVi: "Chuyến tham quan gia đình",
    },
    {
      key: "pred-2",
      labelEn: "Public Libraries Research",
      labelVi: "Nghiên cứu thư viện công cộng",
    },
    {
      key: "pred-3",
      labelEn: "Business Values",
      labelVi: "Giá trị trong kinh doanh",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A restaurant manager briefs new kitchen assistants on safety, busy shifts, breaks and who to report to.",
      labelVi: "Quản lý nhà hàng hướng dẫn phụ bếp mới về an toàn, ca bận, nghỉ giữa giờ và người cần báo cáo.",
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
      questionEn: "According to the manager, what do most people like about the job of kitchen assistant?",
      questionVi: "According to the manager, what do most people like about the job of kitchen assistant?",
      answerEn: "A — the variety of work",
      answerVi: "A — the variety of work",
    },
    {
      key: "exam-12",
      conversationEn: "Question 12",
      conversationVi: "Câu 12",
      questionEn: "The manager is concerned about some of the new staff’s",
      questionVi: "The manager is concerned about some of the new staff’s",
      answerEn: "A — jewellery.",
      answerVi: "A — jewellery.",
    },
    {
      key: "exam-13",
      conversationEn: "Question 13",
      conversationVi: "Câu 13",
      questionEn: "The manager says that the day is likely to be busy for kitchen staff because",
      questionVi: "The manager says that the day is likely to be busy for kitchen staff because",
      answerEn: "C — the restaurant is almost fully booked.",
      answerVi: "C — the restaurant is almost fully booked.",
    },
    {
      key: "exam-14",
      conversationEn: "Question 14",
      conversationVi: "Câu 14",
      questionEn: "Only kitchen staff who are 18 or older are allowed to use",
      questionVi: "Only kitchen staff who are 18 or older are allowed to use",
      answerEn: "C — the meat slicer.",
      answerVi: "C — the meat slicer.",
    },
    {
      key: "exam-15&16",
      conversationEn: "Questions 15–16",
      conversationVi: "Câu 15–16",
      questionEn: "According to the manager, which TWO things can make the job of kitchen assistant stressful?",
      questionVi: "According to the manager, which TWO things can make the job of kitchen assistant stressful?",
      answerEn: "A — They have to follow orders immediately.; E — The work is physically demanding.",
      answerVi: "A — They have to follow orders immediately.; E — The work is physically demanding.",
    },
    {
      key: "exam-17",
      conversationEn: "Restaurant staff — Q17",
      conversationVi: "Restaurant staff — câu 17",
      questionEn: "What is the responsibility of each of the following restaurant staff?: Joy Parkins?",
      questionVi: "What is the responsibility of each of the following restaurant staff?: Joy Parkins?",
      answerEn: "F — timetables",
      answerVi: "F — timetables",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Kitchen Assistants sau lần nghe đầu…",
  transcriptCloze: CAM12_T1_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T1_P2_KEYWORD_PARAPHRASES,
};

const CAM12_T1_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Public Libraries Research",
      labelVi: "Nghiên cứu thư viện công cộng",
    },
    {
      key: "pred-1",
      labelEn: "Family Excursions",
      labelVi: "Chuyến tham quan gia đình",
    },
    {
      key: "pred-2",
      labelEn: "Kitchen Assistants",
      labelVi: "Phụ bếp nhà hàng",
    },
    {
      key: "pred-3",
      labelEn: "Business Values",
      labelVi: "Giá trị trong kinh doanh",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "Trudie and Stewart plan a paper on how libraries are changing, from digitisation to staff and building design.",
      labelVi: "Trudie và Stewart lên kế hoạch bài về thư viện đổi mới: số hóa, nhân viên và thiết kế tòa nhà.",
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
      questionEn: "What will be the main topic of Trudie and Stewart’s paper?",
      questionVi: "What will be the main topic of Trudie and Stewart’s paper?",
      answerEn: "B — how changes in society are reflected in public libraries",
      answerVi: "B — how changes in society are reflected in public libraries",
    },
    {
      key: "exam-22",
      conversationEn: "Question 22",
      conversationVi: "Câu 22",
      questionEn: "They agree that one disadvantage of free digitalised books is that",
      questionVi: "They agree that one disadvantage of free digitalised books is that",
      answerEn: "C — they are generally old.",
      answerVi: "C — they are generally old.",
    },
    {
      key: "exam-23",
      conversationEn: "Question 23",
      conversationVi: "Câu 23",
      questionEn: "Stewart expect that in the future libraries will",
      questionVi: "Stewart expect that in the future libraries will",
      answerEn: "C — no longer contain any books.",
      answerVi: "C — no longer contain any books.",
    },
    {
      key: "exam-24",
      conversationEn: "Detail 24",
      conversationVi: "Chi tiết 24",
      questionEn: "Whether it has what. of its own?",
      questionVi: "Theo bài nghe, whether it has what. of its own?",
      answerEn: "budget",
      answerVi: "budget",
    },
    {
      key: "exam-25",
      conversationEn: "Detail 25",
      conversationVi: "Chi tiết 25",
      questionEn: "How it’s affected by laws regarding all aspects of what?",
      questionVi: "Theo bài nghe, how it’s affected by laws regarding all aspects of what?",
      answerEn: "employment",
      answerVi: "employment",
    },
    {
      key: "exam-26",
      conversationEn: "Detail 26",
      conversationVi: "Chi tiết 26",
      questionEn: "How the design needs to take what of customers into account?",
      questionVi: "Theo bài nghe, how the design needs to take what of customers into account?",
      answerEn: "safety",
      answerVi: "safety",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Public Libraries Research sau lần nghe đầu…",
  transcriptCloze: CAM12_T1_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T1_P3_KEYWORD_PARAPHRASES,
};

const CAM12_T1_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pred-main",
      labelEn: "Business Values",
      labelVi: "Giá trị trong kinh doanh",
    },
    {
      key: "pred-1",
      labelEn: "Family Excursions",
      labelVi: "Chuyến tham quan gia đình",
    },
    {
      key: "pred-2",
      labelEn: "Kitchen Assistants",
      labelVi: "Phụ bếp nhà hàng",
    },
    {
      key: "pred-3",
      labelEn: "Public Libraries Research",
      labelVi: "Nghiên cứu thư viện công cộng",
    },
  ],
  gistOptions: [
    {
      key: "gist-correct",
      labelEn: "A lecture on collaboration, hard work, creativity and excellence — and how each value can backfire in practice.",
      labelVi: "Bài giảng về hợp tác, chăm chỉ, sáng tạo và xuất sắc — và khi nào mỗi giá trị gây phản tác dụng.",
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
      questionEn: "Many business values can result in what?",
      questionVi: "Theo bài nghe, many business values can result in what?",
      answerEn: "damage",
      answerVi: "damage",
    },
    {
      key: "exam-32",
      conversationEn: "Detail 32",
      conversationVi: "Chi tiết 32",
      questionEn: "Senior managers need to understand and deal with the potential what that may result?",
      questionVi: "Theo bài nghe, senior managers need to understand and deal with the potential what that may result?",
      answerEn: "side effects",
      answerVi: "side effects",
    },
    {
      key: "exam-33",
      conversationEn: "Detail 33",
      conversationVi: "Chi tiết 33",
      questionEn: "During a training course, the speaker was in a team that had to build what?",
      questionVi: "Theo bài nghe, during a training course, the speaker was in a team that had to build what?",
      answerEn: "bridge",
      answerVi: "bridge",
    },
    {
      key: "exam-34",
      conversationEn: "Detail 34",
      conversationVi: "Chi tiết 34",
      questionEn: "Other teams experienced what. from trying to collaborate?",
      questionVi: "Theo bài nghe, other teams experienced what. from trying to collaborate?",
      answerEn: "confusion",
      answerVi: "confusion",
    },
    {
      key: "exam-35",
      conversationEn: "Detail 35",
      conversationVi: "Chi tiết 35",
      questionEn: "Sales of what. were poor because of collaboration?",
      questionVi: "Theo bài nghe, sales of what. were poor because of collaboration?",
      answerEn: "smartphone",
      answerVi: "smartphone",
    },
    {
      key: "exam-36",
      conversationEn: "Detail 36",
      conversationVi: "Chi tiết 36",
      questionEn: "Hard work may be a bad use of various company what?",
      questionVi: "Theo bài nghe, hard work may be a bad use of various company what?",
      answerEn: "resources",
      answerVi: "resources",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về Business Values sau lần nghe đầu…",
  transcriptCloze: CAM12_T1_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM12_T1_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM12_T1_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam12-t1-p1": CAM12_T1_P1,
  "cam12-t1-p2": CAM12_T1_P2,
  "cam12-t1-p3": CAM12_T1_P3,
  "cam12-t1-p4": CAM12_T1_P4,
};
