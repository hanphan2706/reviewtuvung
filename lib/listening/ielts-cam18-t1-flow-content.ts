import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM18_T1_P1_KEYWORD_PARAPHRASES,
  CAM18_T1_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t1-p1-intensive";
import {
  CAM18_T1_P2_KEYWORD_PARAPHRASES,
  CAM18_T1_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t1-p2-intensive";
import {
  CAM18_T1_P3_KEYWORD_PARAPHRASES,
  CAM18_T1_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t1-p3-intensive";
import {
  CAM18_T1_P4_KEYWORD_PARAPHRASES,
  CAM18_T1_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t1-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 18 Test 1 (viết tay theo transcript + QnA). */
const CAM18_T1_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "transport-survey",
      labelEn: "A street transport survey about how people travel",
      labelVi: "Khảo sát giao thông trên phố về cách mọi người đi lại",
    },
    {
      key: "bus-car-bike",
      labelEn: "Bus habits, occasional car use and reasons for not cycling",
      labelVi: "Thói quen xe buýt, dùng ô tô thỉnh thoảng và lý do không đạp xe",
    },
    {
      key: "ace-volunteer",
      labelEn: "An evening talk about volunteering with ACE",
      labelVi: "Buổi tối giới thiệu tình nguyện viên ACE",
    },
    {
      key: "elephant-lecture",
      labelEn: "A university lecture on relocating elephant herds",
      labelVi: "Bài giảng đại học về di dời đàn voi",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-volunteer",
      labelEn: "A community talk explaining how to apply for local volunteer roles",
      labelVi: "Buổi nói giới thiệu cách đăng ký làm tình nguyện viên địa phương",
    },
    {
      key: "p1-g-wrong-fashion",
      labelEn: "Two fashion students comparing career options after a guest lecture",
      labelVi: "Hai sinh viên thời trang so sánh hướng nghề sau buổi thuyết trình",
    },
    {
      key: "p1-g-correct-survey",
      labelEn:
        "A transport survey interview with Sadie Jones — today's bus trip, service complaints, limited car use and why she has no bicycle.",
      labelVi:
        "Phỏng vấn khảo sát giao thông với Sadie Jones — chuyến xe buýt hôm nay, phàn nàn dịch vụ, dùng ô tô hạn chế và lý do chưa có xe đạp.",
      correct: true,
    },
    {
      key: "p1-g-wrong-elephants",
      labelEn: "A presentation on moving elephants between African national parks",
      labelVi: "Bài thuyết trình di chuyển voi giữa các vườn quốc gia ở châu Phi",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Call — personal details",
      conversationVi: "Cuộc gọi — thông tin cá nhân",
      questionEn: "What is Sadie Jones's postcode?",
      questionVi: "Mã bưu điện của Sadie Jones là gì?",
      answerEn: "DW30 7YZ.",
      answerVi: "DW30 7YZ.",
    },
    {
      key: "p1-q2",
      conversationEn: "Call — today's bus trip",
      conversationVi: "Cuộc gọi — chuyến xe buýt hôm nay",
      questionEn: "On what date did Sadie travel by bus?",
      questionVi: "Sadie đi xe buýt vào ngày nào?",
      answerEn: "24th April.",
      answerVi: "24 tháng 4.",
    },
    {
      key: "p1-q3",
      conversationEn: "Call — reason for trip",
      conversationVi: "Cuộc gọi — lý do đi lại",
      questionEn: "Besides shopping, what was the main reason for Sadie's trip?",
      questionVi: "Ngoài mua sắm, lý do chính của chuyến đi là gì?",
      answerEn: "To visit the dentist.",
      answerVi: "Đi khám nha sĩ.",
    },
    {
      key: "p1-q4",
      conversationEn: "Call — why bus not car",
      conversationVi: "Cuộc gọi — vì sao chọn xe buýt",
      questionEn: "Why did Sadie stop driving into the city centre?",
      questionVi: "Vì sao Sadie không còn lái xe vào trung tâm?",
      answerEn: "Parking was difficult to find and too expensive.",
      answerVi: "Khó tìm chỗ đậu xe và chi phí quá cao.",
    },
    {
      key: "p1-q5",
      conversationEn: "Call — journey start",
      conversationVi: "Cuộc gọi — điểm lên xe",
      questionEn: "On which street did Sadie get on the bus?",
      questionVi: "Sadie lên xe buýt ở đường nào?",
      answerEn: "Claxby Street.",
      answerVi: "Claxby Street.",
    },
    {
      key: "p1-q6",
      conversationEn: "Call — complaints",
      conversationVi: "Cuộc gọi — phàn nàn dịch vụ",
      questionEn: "What was Sadie's complaint about the bus service this morning?",
      questionVi: "Sáng nay Sadie phàn nàn gì về xe buýt?",
      answerEn: "It was late (about 10 minutes).",
      answerVi: "Xe đến trễ (khoảng 10 phút).",
    },
  ],
  memoryPlaceholder: "Ghi ý về mã bưu điện, lý do đi xe buýt, phàn nàn dịch vụ và vì sao chưa có xe đạp…",
  transcriptCloze: CAM18_T1_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T1_P1_KEYWORD_PARAPHRASES,
};

const CAM18_T1_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "ace-volunteering",
      labelEn: "Becoming a volunteer for the ACE organisation",
      labelVi: "Trở thành tình nguyện viên tổ chức ACE",
    },
    {
      key: "training-commitment",
      labelEn: "Volunteer training, age requirements and time commitment",
      labelVi: "Huấn luyện, yêu cầu tuổi và mức cam kết thời gian",
    },
    {
      key: "volunteer-roles",
      labelEn: "Skills useful for fundraising, litter collection and children's clubs",
      labelVi: "Kỹ năng hữu ích cho gây quỹ, nhặt rác và câu lạc bộ trẻ em",
    },
    {
      key: "transport-survey",
      labelEn: "A phone interview about local bus and car travel habits",
      labelVi: "Phỏng vấn điện thoại về thói quen đi xe buýt và ô tô",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-correct-intro",
      labelEn:
        "An evening talk introducing ACE volunteering — who can join, ongoing training and what to consider before applying.",
      labelVi:
        "Buổi tối giới thiệu tình nguyện ACE — ai có thể tham gia, huấn luyện liên tục và điều cần cân nhắc trước khi đăng ký.",
      correct: true,
    },
    {
      key: "p2-g-wrong-transport",
      labelEn: "A researcher asking a woman about her daily commute by bus",
      labelVi: "Nhà nghiên cứu hỏi một phụ nữ về đi làm bằng xe buýt",
    },
    {
      key: "p2-g-wrong-fashion",
      labelEn: "Students debating careers in the fashion industry after a talk",
      labelVi: "Sinh viên tranh luận nghề thời trang sau buổi thuyết trình",
    },
    {
      key: "p2-g-wrong-elephants",
      labelEn: "A wildlife lecture on sedating and moving elephant families",
      labelVi: "Bài giảng về gây mê và di chuyển đàn voi trong tự nhiên",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — seating",
      conversationVi: "Bài nói — chỗ ngồi",
      questionEn: "Why does the speaker apologise about the seats?",
      questionVi: "Vì sao diễn giả xin lỗi về chỗ ngồi?",
      answerEn: "Some seats are very close together (C).",
      answerVi: "Một số ghế xếp quá sát nhau (C).",
    },
    {
      key: "p2-q12",
      conversationEn: "Talk — age",
      conversationVi: "Bài nói — độ tuổi",
      questionEn: "What does the speaker say about volunteers' age?",
      questionVi: "Diễn giả nói gì về tuổi tình nguyện viên?",
      answerEn: "Age is less important than other factors such as reliability (A).",
      answerVi: "Tuổi ít quan trọng hơn các yếu tố khác như độ tin cậy (A).",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — training",
      conversationVi: "Bài nói — huấn luyện",
      questionEn: "What does the speaker say about training?",
      questionVi: "Diễn giả nói gì về huấn luyện?",
      answerEn: "It is continuous — before, during and after periods of work (A).",
      answerVi: "Huấn luyện liên tục — trước, trong và sau thời gian làm việc (A).",
    },
    {
      key: "p2-q14",
      conversationEn: "Talk — before applying",
      conversationVi: "Bài nói — trước khi đăng ký",
      questionEn:
        "Which TWO issues should the audience consider before applying? (Choose TWO: A–E)",
      questionVi:
        "Hai vấn đề nào khán giả nên cân nhắc trước khi đăng ký? (chọn 2: A–E)",
      answerEn: "B — level of commitment; E — availability.",
      answerVi: "B — mức cam kết; E — thời gian rảnh.",
    },
    {
      key: "p2-q16",
      conversationEn: "Talk — fundraising",
      conversationVi: "Bài nói — gây quỹ",
      questionEn: "What would be helpful for fundraising volunteers?",
      questionVi: "Điều gì hữu ích cho tình nguyện viên gây quỹ?",
      answerEn: "Original, new ideas (B).",
      answerVi: "Ý tưởng mới, sáng tạo (B).",
    },
    {
      key: "p2-q19",
      conversationEn: "Talk — story club",
      conversationVi: "Bài nói — câu lạc bộ kể chuyện",
      questionEn: "What skill would help at the story club for disabled children?",
      questionVi: "Kỹ năng nào hữu ích ở câu lạc bộ kể chuyện cho trẻ khuyết tật?",
      answerEn: "Experience on stage (A).",
      answerVi: "Kinh nghiệm biểu diễn sân khấu (A).",
    },
  ],
  memoryPlaceholder: "Ghi ý về tuổi, huấn luyện, cam kết thời gian và kỹ năng cho từng vai tình nguyện…",
  transcriptCloze: CAM18_T1_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T1_P2_KEYWORD_PARAPHRASES,
};

const CAM18_T1_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "fashion-careers",
      labelEn: "Two students discussing jobs in fashion design",
      labelVi: "Hai sinh viên bàn về nghề thiết kế thời trang",
    },
    {
      key: "guest-lecture",
      labelEn: "Reactions to a talk on the fashion job market",
      labelVi: "Phản hồi sau buổi nói về thị trường việc làm thời trang",
    },
    {
      key: "career-advice",
      labelEn: "Comparing school careers advice with industry reality",
      labelVi: "So sánh tư vấn nghề ở trường với thực tế ngành",
    },
    {
      key: "ace-volunteering",
      labelEn: "A talk on local volunteering opportunities with ACE",
      labelVi: "Buổi nói về cơ hội tình nguyện địa phương với ACE",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-correct-discussion",
      labelEn:
        "Hugo and Chantal review a fashion careers talk — job options, harsh industry messages, unpaid work and retail experience.",
      labelVi:
        "Hugo và Chantal bàn lại buổi nói về nghề thời trang — lựa chọn nghề, thông điệp khắt khe, làm không lương và kinh nghiệm bán lẻ.",
      correct: true,
    },
    {
      key: "p3-g-wrong-transport",
      labelEn: "A survey interviewer asking about bus timetables and parking costs",
      labelVi: "Người khảo sát hỏi về lịch xe buýt và phí đậu xe",
    },
    {
      key: "p3-g-wrong-volunteer",
      labelEn: "A speaker recruiting volunteers for litter collection and first aid",
      labelVi: "Diễn giả tuyển tình nguyện viên nhặt rác và sơ cứu",
    },
    {
      key: "p3-g-wrong-elephants",
      labelEn: "A student presentation on elephant conservation in Malawi",
      labelVi: "Sinh viên thuyết trình bảo tồn voi ở Malawi",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — the talk",
      conversationVi: "Thảo luận — buổi thuyết trình",
      questionEn: "What problem did Chantal have at the start of the talk?",
      questionVi: "Chantal gặp vấn đề gì lúc đầu buổi nói?",
      answerEn: "Her view of the speaker was blocked (A).",
      answerVi: "Tầm nhìn tới diễn giả bị che khuất (A).",
    },
    {
      key: "p3-q22",
      conversationEn: "Discussion — job market",
      conversationVi: "Thảo luận — thị trường việc làm",
      questionEn: "What surprised Hugo and Chantal about the job market?",
      questionVi: "Điều gì ở thị trường việc làm khiến Hugo và Chantal bất ngờ?",
      answerEn: "There is more variety in it than they had realised (B).",
      answerVi: "Đa dạng hơn họ tưởng (B).",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — speaker's tone",
      conversationVi: "Thảo luận — giọng điệu diễn giả",
      questionEn: "Hugo and Chantal agree the speaker's message was —",
      questionVi: "Hugo và Chantal đồng ý thông điệp của diễn giả —",
      answerEn: "Unfair to them at times (A).",
      answerVi: "Đôi lúc hơi khắt với họ (A).",
    },
    {
      key: "p3-q24",
      conversationEn: "Discussion — school advice",
      conversationVi: "Thảo luận — tư vấn ở trường",
      questionEn: "What do they criticise about their school careers advice?",
      questionVi: "Họ phê bình điều gì về tư vấn nghề ở trường?",
      answerEn: "Who gave the advice — not enough industry experts (C).",
      answerVi: "Ai tư vấn — thiếu chuyên gia thực tế trong ngành (C).",
    },
    {
      key: "p3-q25",
      conversationEn: "Discussion — future plans",
      conversationVi: "Thảo luận — định hướng tương lai",
      questionEn: "When discussing their future, Hugo and Chantal disagree on —",
      questionVi: "Khi bàn tương lai, Hugo và Chantal bất đồng về —",
      answerEn: "When to choose a career in fashion (B).",
      answerVi: "Thời điểm chọn nghề thời trang (B).",
    },
    {
      key: "p3-q27",
      conversationEn: "Discussion — first job mistakes",
      conversationVi: "Thảo luận — sai lầm công việc đầu",
      questionEn:
        "Which TWO mistakes did the speaker admit she made in her first job? (Choose TWO: A–E)",
      questionVi:
        "Hai sai lầm nào diễn giả thừa nhận ở công việc đầu? (chọn 2: A–E)",
      answerEn: "B — paying too much attention to how she looked; E — openly disliking her client.",
      answerVi: "B — quá chú ý ngoại hình bản thân; E — bộc lộ không thích khách hàng.",
    },
  ],
  memoryPlaceholder: "Ghi ý về thị trường việc làm, tư vấn nghề ở trường và kinh nghiệm bán lẻ hữu ích…",
  transcriptCloze: CAM18_T1_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T1_P3_KEYWORD_PARAPHRASES,
};

const CAM18_T1_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "elephant-translocation",
      labelEn: "Elephant translocation between Malawian national parks",
      labelVi: "Di dời voi giữa các vườn quốc gia Malawi",
    },
    {
      key: "overpopulation",
      labelEn: "Overpopulation problems and moving elephant family groups",
      labelVi: "Quá tải quần thể và di chuyển theo đàn gia đình",
    },
    {
      key: "sedation-transport",
      labelEn: "Sedating elephants, health monitoring and truck transport",
      labelVi: "Gây mê voi, theo dõi sức khỏe và vận chuyển bằng xe tải",
    },
    {
      key: "fashion-careers",
      labelEn: "Students discussing unpaid work in fashion retail",
      labelVi: "Sinh viên bàn về làm không lương trong bán lẻ thời trang",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-transport",
      labelEn: "A survey about bus delays and parking charges in a city centre",
      labelVi: "Khảo sát về xe buýt trễ và phí đậu xe ở trung tâm thành phố",
    },
    {
      key: "p4-g-wrong-volunteer",
      labelEn: "A charity talk on recruiting volunteers for children's clubs",
      labelVi: "Buổi nói tuyển tình nguyện viên cho câu lạc bộ trẻ em",
    },
    {
      key: "p4-g-correct-lecture",
      labelEn:
        "A presentation on elephant translocation in Malawi — overpopulation at Majete, the capture process and benefits at Nkhotakota.",
      labelVi:
        "Bài thuyết trình di dời voi ở Malawi — quá tải ở Majete, quy trình bắt giữ và lợi ích tại Nkhotakota.",
      correct: true,
    },
    {
      key: "p4-g-wrong-fashion",
      labelEn: "A careers lecture on breaking into the fashion industry",
      labelVi: "Buổi nói nghề nghiệp về bước vào ngành thời trang",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — overpopulation damage",
      conversationVi: "Bài giảng — thiệt hại do quá tải",
      questionEn: "Besides hunger, what did elephants damage around Majete National Park?",
      questionVi: "Ngoài thiếu thức ăn, voi làm hư hại gì quanh vườn quốc gia Majete?",
      answerEn: "Fences.",
      answerVi: "Hàng rào (fences).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — selecting groups",
      conversationVi: "Bài giảng — chọn đàn",
      questionEn: "Elephants were selected from the same —",
      questionVi: "Voi được chọn từ cùng một —",
      answerEn: "Family.",
      answerVi: "Đàn gia đình (family).",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — rounding up",
      conversationVi: "Bài giảng — tập trung đàn",
      questionEn: "What did vets and park staff use to guide elephants to an open plain?",
      questionVi: "Bác sĩ thú y và nhân viên vườn dùng gì dẫn voi ra bãi trống?",
      answerEn: "Helicopters.",
      answerVi: "Trực thăng (helicopters).",
    },
    {
      key: "p4-q35",
      conversationEn: "Lecture — sedation safety",
      conversationVi: "Bài giảng — an toàn khi gây mê",
      questionEn: "To protect their lungs, elephants had to be turned on their —",
      questionVi: "Để bảo vệ phổi, voi phải được lật nằm theo —",
      answerEn: "Sides.",
      answerVi: "Hai bên sườn (sides).",
    },
    {
      key: "p4-q38",
      conversationEn: "Lecture — community benefits",
      conversationVi: "Bài giảng — lợi ích cộng đồng",
      questionEn: "What improved enormously for the local community at Nkhotakota?",
      questionVi: "Điều gì cải thiện rõ rệt cho cộng đồng địa phương ở Nkhotakota?",
      answerEn: "Employment prospects.",
      answerVi: "Cơ hội việc làm (employment).",
    },
    {
      key: "p4-q40",
      conversationEn: "Lecture — economic impact",
      conversationVi: "Bài giảng — tác động kinh tế",
      questionEn: "Elephants helped increase which sector's contribution to GDP?",
      questionVi: "Voi góp phần tăng ngành nào vào GDP?",
      answerEn: "Tourism.",
      answerVi: "Du lịch (tourism).",
    },
  ],
  memoryPlaceholder: "Ghi ý về quá tải ở Majete, các bước gây mê–vận chuyển và lợi ích kinh tế tại Nkhotakota…",
  transcriptCloze: CAM18_T1_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T1_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM18_T1_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam18-t1-p1": CAM18_T1_P1,
  "cam18-t1-p2": CAM18_T1_P2,
  "cam18-t1-p3": CAM18_T1_P3,
  "cam18-t1-p4": CAM18_T1_P4,
};
