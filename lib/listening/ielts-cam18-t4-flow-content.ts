import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM18_T4_P1_KEYWORD_PARAPHRASES,
  CAM18_T4_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t4-p1-intensive";
import {
  CAM18_T4_P2_KEYWORD_PARAPHRASES,
  CAM18_T4_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t4-p2-intensive";
import {
  CAM18_T4_P3_KEYWORD_PARAPHRASES,
  CAM18_T4_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t4-p3-intensive";
import {
  CAM18_T4_P4_KEYWORD_PARAPHRASES,
  CAM18_T4_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t4-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 18 Test 4 (viết tay theo transcript + QnA). */
const CAM18_T4_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "receptionist-job",
      labelEn: "A temporary receptionist role at a medical centre",
      labelVi: "Việc làm lễ tân tạm thời tại trung tâm y tế",
    },
    {
      key: "agency-call",
      labelEn: "An employment agency calling about office work",
      labelVi: "Cơ quan việc làm gọi điện về công việc văn phòng",
    },
    {
      key: "museum-tour",
      labelEn: "A guided tour of a farming life museum",
      labelVi: "Tham quan bảo tàng đời sống nông nghiệp có hướng dẫn viên",
    },
    {
      key: "origami-lesson",
      labelEn: "Student teachers discussing origami in primary classes",
      labelVi: "Sinh viên sư phạm bàn về origami trong lớp tiểu học",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-museum",
      labelEn: "A museum guide describing galleries and visitor facilities",
      labelVi: "Hướng dẫn viên bảo tàng giới thiệu phòng trưng bày và tiện ích",
    },
    {
      key: "p1-g-wrong-origami",
      labelEn: "Two trainee teachers reviewing a video of an origami lesson",
      labelVi: "Hai giáo viên tập sự xem lại video tiết origami",
    },
    {
      key: "p1-g-correct-job",
      labelEn:
        "An employment agent calls Julie about a temporary receptionist job at Fordham Medical Centre — duties, requirements, hours and parking.",
      labelVi:
        "Nhân viên cơ quan việc làm gọi Julie về việc lễ tân tạm thời tại Fordham Medical Centre — nhiệm vụ, yêu cầu, giờ làm và chỗ đậu xe.",
      correct: true,
    },
    {
      key: "p1-g-wrong-hugo",
      labelEn: "A university lecture on Victor Hugo's house on Guernsey",
      labelVi: "Bài giảng đại học về nhà Victor Hugo ở Guernsey",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Call — job role",
      conversationVi: "Cuộc gọi — vị trí công việc",
      questionEn: "What is the job role?",
      questionVi: "Vị trí công việc là gì?",
      answerEn: "Receptionist.",
      answerVi: "Lễ tân (receptionist).",
    },
    {
      key: "p1-q2",
      conversationEn: "Call — location",
      conversationVi: "Cuộc gọi — địa điểm",
      questionEn: "Where is the job located in Fordham?",
      questionVi: "Công việc ở đâu tại Fordham?",
      answerEn: "Fordham Medical Centre, Chastons Road.",
      answerVi: "Fordham Medical Centre, đường Chastons.",
    },
    {
      key: "p1-q4",
      conversationEn: "Call — duties",
      conversationVi: "Cuộc gọi — nhiệm vụ",
      questionEn: "Besides dealing with enquiries, what does the work involve making and reorganising?",
      questionVi: "Ngoài tiếp nhận yêu cầu, công việc còn gồm lập và sắp xếp lại gì?",
      answerEn: "Appointments.",
      answerVi: "Lịch hẹn (appointments).",
    },
    {
      key: "p1-q5",
      conversationEn: "Call — database",
      conversationVi: "Cuộc gọi — cơ sở dữ liệu",
      questionEn: "What internal system must the receptionist maintain?",
      questionVi: "Hệ thống nội bộ nào lễ tân phải duy trì?",
      answerEn: "The centre's database.",
      answerVi: "Cơ sở dữ liệu (database) của trung tâm.",
    },
    {
      key: "p1-q6",
      conversationEn: "Call — requirements",
      conversationVi: "Cuộc gọi — yêu cầu",
      questionEn: "What essential requirement does the employer specify?",
      questionVi: "Yêu cầu bắt buộc mà nhà tuyển dụng nêu ra là gì?",
      answerEn: "Experience.",
      answerVi: "Kinh nghiệm (experience).",
    },
    {
      key: "p1-q9",
      conversationEn: "Call — hours",
      conversationVi: "Cuộc gọi — giờ làm",
      questionEn: "What time does the working day finish (Monday to Friday)?",
      questionVi: "Giờ tan ca là mấy giờ (thứ Hai–thứ Sáu)?",
      answerEn: "1.15 p.m.",
      answerVi: "13 giờ 15 (1.15 chiều).",
    },
  ],
  memoryPlaceholder: "Ghi ý về vị trí lễ tân, nhiệm vụ, yêu cầu và giờ làm tại medical centre…",
  transcriptCloze: CAM18_T4_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T4_P1_KEYWORD_PARAPHRASES,
};

const CAM18_T4_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "museum-history",
      labelEn: "History of the Museum of Farming Life building",
      labelVi: "Lịch sử tòa nhà Bảo tàng Đời sống Nông nghiệp",
    },
    {
      key: "gallery-tour",
      labelEn: "A guided walk through museum galleries and garden areas",
      labelVi: "Tham quan các phòng trưng bày và khu vườn bảo tàng",
    },
    {
      key: "job-agency",
      labelEn: "An employment agency describing a medical receptionist job",
      labelVi: "Cơ quan việc làm mô tả việc lễ tân y tế",
    },
    {
      key: "victor-hugo",
      labelEn: "A talk on Victor Hugo's exile and house in Guernsey",
      labelVi: "Bài nói về cuộc lưu đày và ngôi nhà Victor Hugo ở Guernsey",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-correct-tour",
      labelEn:
        "A museum guide welcomes visitors, explains the building's history, entry arrangements and describes areas to explore.",
      labelVi:
        "Hướng dẫn viên chào khách, giới thiệu lịch sử tòa nhà, quy định vào cửa và các khu vực tham quan.",
      correct: true,
    },
    {
      key: "p2-g-wrong-job",
      labelEn: "A phone call about temporary office work at a medical centre",
      labelVi: "Cuộc gọi về việc văn phòng tạm thời tại trung tâm y tế",
    },
    {
      key: "p2-g-correct-areas",
      labelEn:
        "The guide describes individual museum areas — animations, demonstrations, quizzes and practical visitor advice for each zone.",
      labelVi:
        "Hướng dẫn viên mô tả từng khu — phim hoạt hình, trình diễn, câu đố và lưu ý thực tế cho khách.",
    },
    {
      key: "p2-g-wrong-origami",
      labelEn: "Trainee teachers discussing origami as an educational tool",
      labelVi: "Giáo viên tập sự bàn origami như công cụ giáo dục",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — building history",
      conversationVi: "Bài nói — lịch sử tòa nhà",
      questionEn: "The museum building was originally —",
      questionVi: "Tòa nhà bảo tàng ban đầu là —",
      answerEn: "A private home (B).",
      answerVi: "Nhà riêng của doanh nhân địa phương (B).",
    },
    {
      key: "p2-q12",
      conversationEn: "Talk — university use",
      conversationVi: "Bài nói — trường đại học",
      questionEn: "The university uses part of the museum building as —",
      questionVi: "Trường đại học dùng một phần tòa nhà làm —",
      answerEn: "Teaching rooms (A).",
      answerVi: "Phòng học (A).",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — entrance fee",
      conversationVi: "Bài nói — phí vào cửa",
      questionEn: "What does the guide say about the entrance fee?",
      questionVi: "Hướng dẫn viên nói gì về phí vào cửa?",
      answerEn: "Visitors decide whether or not they wish to pay (A).",
      answerVi: "Khách tự quyết định có muốn quyên góp hay không (A).",
    },
    {
      key: "p2-q15",
      conversationEn: "Talk — Four Seasons",
      conversationVi: "Bài nói — Four Seasons",
      questionEn: "What information is given about the Four Seasons area?",
      questionVi: "Thông tin gì được đưa ra về khu Four Seasons?",
      answerEn: "It features something created by students (F).",
      answerVi: "Có tác phẩm do sinh viên làm (F).",
    },
    {
      key: "p2-q18",
      conversationEn: "Talk — Wagon Walk",
      conversationVi: "Bài nói — Wagon Walk",
      questionEn: "What are visitors told about Wagon Walk?",
      questionVi: "Khách được nhắc gì về Wagon Walk?",
      answerEn: "Parents must supervise their children (A).",
      answerVi: "Phụ huynh phải giám sát trẻ (A).",
    },
    {
      key: "p2-q19",
      conversationEn: "Talk — Bees are Magic",
      conversationVi: "Bài nói — Bees are Magic",
      questionEn: "What is the situation at Bees are Magic today?",
      questionVi: "Khu Bees are Magic hôm nay thế nào?",
      answerEn: "It is closed today (C).",
      answerVi: "Hôm nay đóng cửa (C).",
    },
  ],
  memoryPlaceholder: "Ghi ý về lịch sử tòa nhà, phí vào cửa và thông tin từng khu vực bảo tàng…",
  transcriptCloze: CAM18_T4_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T4_P2_KEYWORD_PARAPHRASES,
};

const CAM18_T4_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "origami-video",
      labelEn: "Discussing a video of children doing origami in class",
      labelVi: "Thảo luận video trẻ làm origami trong lớp",
    },
    {
      key: "origami-maths",
      labelEn: "Planning to use origami in a Year 3 maths lesson",
      labelVi: "Lên kế hoạch dùng origami trong tiết toán lớp 3",
    },
    {
      key: "museum-areas",
      labelEn: "A museum guide describing farm equipment galleries",
      labelVi: "Hướng dẫn viên giới thiệu phòng trưng bày nông cụ",
    },
    {
      key: "medical-job",
      labelEn: "Arranging an interview for a receptionist position",
      labelVi: "Sắp xếp phỏng vấn vị trí lễ tân",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-wrong-museum",
      labelEn: "A guide explaining which museum areas are open today",
      labelVi: "Hướng dẫn viên giải thích khu nào mở cửa hôm nay",
    },
    {
      key: "p3-g-correct-discussion",
      labelEn:
        "Seb and Lia discuss an origami lesson video — skills children showed, individual pupils, and how to use origami in their own teaching.",
      labelVi:
        "Seb và Lia bàn video tiết origami — kỹ năng trẻ thể hiện, từng học sinh và cách áp dụng origami khi dạy.",
      correct: true,
    },
    {
      key: "p3-g-wrong-hugo",
      labelEn: "A lecture on Victor Hugo's decorated house on Guernsey",
      labelVi: "Bài giảng về ngôi nhà trang trí của Victor Hugo ở Guernsey",
    },
    {
      key: "p3-g-correct-planning",
      labelEn:
        "They agree origami works well when the teacher is prepared, and plan to use it to teach fractions in maths practice.",
      labelVi:
        "Hai bạn đồng ý origami hiệu quả khi giáo viên chuẩn bị kỹ, và dự định dùng để dạy phân số trong thực tập toán.",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — educational skills",
      conversationVi: "Thảo luận — kỹ năng giáo dục",
      questionEn:
        "Which TWO educational skills were shown in the video of children doing origami?",
      questionVi: "Hai kỹ năng giáo dục nào được thể hiện trong video trẻ làm origami? (chọn 2)",
      answerEn: "B — following instructions; D — learning through play.",
      answerVi: "B — làm theo hướng dẫn; D — học qua chơi.",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — Sid, Jack, Naomi",
      conversationVi: "Thảo luận — Sid, Jack, Naomi",
      questionEn:
        "Which comment do the students make about Sid, Jack and Naomi in the video?",
      questionVi: "Học sinh sư phạm nhận xét gì về Sid, Jack và Naomi trong video?",
      answerEn:
        "Sid — D (seemed to find the activity calming); Jack — A (demonstrated independence); Naomi — C (developed a competitive attitude).",
      answerVi:
        "Sid — D (origami giúp em bình tĩnh, tập trung); Jack — A (tự làm, không nhờ giáo viên); Naomi — C (có thái độ cạnh tranh).",
    },
    {
      key: "p3-q26",
      conversationEn: "Discussion — Anya, Zara",
      conversationVi: "Thảo luận — Anya, Zara",
      questionEn:
        "Which comment do the students make about Anya and Zara in the video?",
      questionVi: "Học sinh sư phạm nhận xét gì về Anya và Zara trong video?",
      answerEn:
        "Anya — G (seemed to find the activity easy); Zara — F (seemed pleased with the results).",
      answerVi: "Anya — G (làm dễ dàng); Zara — F (hài lòng với kết quả).",
    },
    {
      key: "p3-q28",
      conversationEn: "Discussion — teacher preparation",
      conversationVi: "Thảo luận — chuẩn bị của giáo viên",
      questionEn:
        "Before starting an origami activity in class, the students think it is important for the teacher to —",
      questionVi: "Trước khi bắt đầu origami, hai bạn cho rằng giáo viên nên —",
      answerEn: "Make models that demonstrate the different stages (A).",
      answerVi: "Làm mẫu thể hiện từng bước gấp (A).",
    },
    {
      key: "p3-q29",
      conversationEn: "Discussion — teacher reluctance",
      conversationVi: "Thảo luận — giáo viên ngại dùng origami",
      questionEn:
        "The students agree that some teachers might be unwilling to use origami in class because —",
      questionVi: "Hai bạn đồng ý một số giáo viên ngại dùng origami vì —",
      answerEn: "They may not have the necessary skills (B).",
      answerVi: "Họ có thể thiếu kỹ năng cần thiết (B).",
    },
    {
      key: "p3-q30",
      conversationEn: "Discussion — maths teaching",
      conversationVi: "Thảo luận — dạy toán",
      questionEn: "Why do the students decide to use origami in their maths teaching practice?",
      questionVi: "Vì sao hai bạn quyết định dùng origami trong thực tập dạy toán?",
      answerEn: "To introduce a new concept (C) — presenting fractions.",
      answerVi: "Để giới thiệu khái niệm mới (C) — dạy phân số.",
    },
  ],
  memoryPlaceholder: "Ghi ý về kỹ năng origami, nhận xét từng em và kế hoạch dạy phân số…",
  transcriptCloze: CAM18_T4_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T4_P3_KEYWORD_PARAPHRASES,
};

const CAM18_T4_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "hugo-life",
      labelEn: "Victor Hugo's career, exile and social activism",
      labelVi: "Sự nghiệp, lưu đày và hoạt động xã hội của Victor Hugo",
    },
    {
      key: "guernsey-house",
      labelEn: "Victor Hugo's house on Guernsey and its decoration",
      labelVi: "Ngôi nhà Victor Hugo ở Guernsey và cách trang trí",
    },
    {
      key: "les-miserables",
      labelEn: "The plot and adaptations of Les Misérables",
      labelVi: "Cốt truyện và các phiên bản chuyển thể Les Misérables",
    },
    {
      key: "origami-education",
      labelEn: "Using origami to teach geometry and fractions",
      labelVi: "Dùng origami dạy hình học và phân số",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-origami",
      labelEn: "Student teachers planning an origami maths lesson",
      labelVi: "Giáo viên tập sự lên kế hoạch tiết toán origami",
    },
    {
      key: "p4-g-wrong-museum",
      labelEn: "A tour of a farming museum's galleries and garden",
      labelVi: "Tham quan phòng trưng bày và vườn bảo tàng nông nghiệp",
    },
    {
      key: "p4-g-correct-lecture",
      labelEn:
        "A presentation on Victor Hugo — Les Misérables, exile in Europe, his Guernsey home, decoration and legacy as a museum.",
      labelVi:
        "Bài thuyết trình về Victor Hugo — Les Misérables, lưu đày châu Âu, nhà ở Guernsey, trang trí và di sản bảo tàng.",
      correct: true,
    },
    {
      key: "p4-g-wrong-job",
      labelEn: "An employment agency describing receptionist work",
      labelVi: "Cơ quan việc làm mô tả công việc lễ tân",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — Les Misérables",
      conversationVi: "Bài giảng — Les Misérables",
      questionEn: "We know more about the novel's overall — than about its author.",
      questionVi: "Ta biết nhiều hơn về — tổng thể của tiểu thuyết hơn về tác giả.",
      answerEn: "Plot.",
      answerVi: "Cốt truyện (plot).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — early career",
      conversationVi: "Bài giảng — giai đoạn đầu",
      questionEn: "Victor Hugo spoke publicly about social issues such as — and education.",
      questionVi: "Victor Hugo phát biểu về các vấn đề xã hội như — và giáo dục.",
      answerEn: "Poverty.",
      answerVi: "Nghèo đói (poverty).",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — exile",
      conversationVi: "Bài giảng — lưu đày",
      questionEn: "Victor Hugo had to live elsewhere in —",
      questionVi: "Victor Hugo phải sống ở nơi khác trong —",
      answerEn: "Europe.",
      answerVi: "Châu Âu (Europe).",
    },
    {
      key: "p4-q34",
      conversationEn: "Lecture — buying the house",
      conversationVi: "Bài giảng — mua nhà",
      questionEn: "He used income from the sale of some — he had written to buy his Guernsey house.",
      questionVi: "Ông dùng tiền bán — đã viết để mua nhà ở Guernsey.",
      answerEn: "Poetry.",
      answerVi: "Thơ (poetry).",
    },
    {
      key: "p4-q38",
      conversationEn: "Lecture — Lookout room",
      conversationVi: "Bài giảng — phòng Lookout",
      questionEn: "He wrote in a top-floor room with a view of the —",
      questionVi: "Ông viết ở phòng trên cùng nhìn ra —",
      answerEn: "Harbour / harbor.",
      answerVi: "Cảng (harbour).",
    },
    {
      key: "p4-q40",
      conversationEn: "Lecture — legacy",
      conversationVi: "Bài giảng — di sản",
      questionEn: "Victor Hugo's — gave ownership of the house to Paris in 1927.",
      questionVi: "— của Victor Hugo hiến nhà cho thành phố Paris năm 1927.",
      answerEn: "Relatives.",
      answerVi: "Người thân (relatives).",
    },
  ],
  memoryPlaceholder: "Ghi ý về Les Misérables, lưu đày, trang trí nhà Guernsey và di sản bảo tàng…",
  transcriptCloze: CAM18_T4_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T4_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM18_T4_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam18-t4-p1": CAM18_T4_P1,
  "cam18-t4-p2": CAM18_T4_P2,
  "cam18-t4-p3": CAM18_T4_P3,
  "cam18-t4-p4": CAM18_T4_P4,
};
