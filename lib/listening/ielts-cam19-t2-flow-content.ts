import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM19_T2_P1_KEYWORD_PARAPHRASES,
  CAM19_T2_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam19-t2-p1-intensive";
import {
  CAM19_T2_P2_KEYWORD_PARAPHRASES,
  CAM19_T2_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam19-t2-p2-intensive";
import {
  CAM19_T2_P3_KEYWORD_PARAPHRASES,
  CAM19_T2_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam19-t2-p3-intensive";
import {
  CAM19_T2_P4_KEYWORD_PARAPHRASES,
  CAM19_T2_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam19-t2-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 19 Test 2 (viết tay theo transcript + QnA). */
const CAM19_T2_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "guitar-group",
      labelEn: "Joining a beginner guitar group and class details",
      labelVi: "Tham gia nhóm guitar cho người mới và thông tin lớp học",
    },
    {
      key: "lesson-structure",
      labelEn: "How a typical 45-minute guitar lesson is organised",
      labelVi: "Cấu trúc một buổi học guitar 45 phút",
    },
    {
      key: "lifeboat",
      labelEn: "Volunteering with a coastal lifeboat institution",
      labelVi: "Tình nguyện viên cứu hộ biển ven bờ",
    },
    {
      key: "shoe-recycling",
      labelEn: "Students presenting on footwear recycling",
      labelVi: "Sinh viên thuyết trình về tái chế giày dép",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-lifeboat",
      labelEn: "A volunteer describes emergency rescues at sea",
      labelVi: "Tình nguyện viên mô tả cứu hộ khẩn cấp trên biển",
    },
    {
      key: "p1-g-wrong-shoes",
      labelEn: "Two students discussing why shoes are rejected for recycling",
      labelVi: "Hai sinh viên bàn vì sao giày bị từ chối tái chế",
    },
    {
      key: "p1-g-correct-guitar",
      labelEn:
        "A conversation about joining Gary's beginner guitar group — coordinator, college venue, Thursday schedule and lesson routine.",
      labelVi:
        "Hội thoại về tham gia nhóm guitar của Gary — người phụ trách, địa điểm trường cao đẳng, lịch thứ Năm và tiến trình buổi học.",
      correct: true,
    },
    {
      key: "p1-g-wrong-tardigrades",
      labelEn: "A student presentation on microscopic water bears",
      labelVi: "Bài thuyết trình sinh viên về loài gấu nước siêu nhỏ",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Conversation — coordinator",
      conversationVi: "Hội thoại — người phụ trách",
      questionEn: "What is the guitar group coordinator's surname?",
      questionVi: "Họ của người phụ trách nhóm guitar là gì?",
      answerEn: "Mathieson (M-A-T-H-I-E-S-O-N).",
      answerVi: "Mathieson (M-A-T-H-I-E-S-O-N).",
    },
    {
      key: "p1-q2",
      conversationEn: "Conversation — level",
      conversationVi: "Hội thoại — trình độ",
      questionEn: "What level is the guitar class?",
      questionVi: "Lớp guitar dành cho trình độ nào?",
      answerEn: "Beginners.",
      answerVi: "Người mới bắt đầu (beginners).",
    },
    {
      key: "p1-q3",
      conversationEn: "Conversation — venue",
      conversationVi: "Hội thoại — địa điểm",
      questionEn: "Where does the group meet now?",
      questionVi: "Nhóm hiện học ở đâu?",
      answerEn: "A room at the college in town (first floor, Room T347).",
      answerVi: "Phòng ở trường cao đẳng trong thành phố (tầng 1, phòng T347).",
    },
    {
      key: "p1-q4",
      conversationEn: "Conversation — address",
      conversationVi: "Hội thoại — địa chỉ",
      questionEn: "On which street is the college?",
      questionVi: "Trường cao đẳng ở đường nào?",
      answerEn: "New Street.",
      answerVi: "New Street.",
    },
    {
      key: "p1-q5",
      conversationEn: "Conversation — time",
      conversationVi: "Hội thoại — giờ học",
      questionEn: "What time does the class meet on Thursdays?",
      questionVi: "Lớp học thứ Năm lúc mấy giờ?",
      answerEn: "11 a.m. (eleven).",
      answerVi: "11 giờ sáng.",
    },
    {
      key: "p1-q6",
      conversationEn: "Conversation — website",
      conversationVi: "Hội thoại — trang web",
      questionEn: "What is the recommended second-hand instrument website called?",
      questionVi: "Trang web mua nhạc cụ cũ được gợi ý tên gì?",
      answerEn: "‘The perfect instrument’.",
      answerVi: "‘The perfect instrument’.",
    },
  ],
  memoryPlaceholder: "Ghi ý về Gary, địa điểm college, giờ học và các hoạt động trong buổi guitar…",
  transcriptCloze: CAM19_T2_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM19_T2_P1_KEYWORD_PARAPHRASES,
};

const CAM19_T2_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "lifeboat-volunteer",
      labelEn: "Working as a lifeboat volunteer in Northsea",
      labelVi: "Làm tình nguyện viên cứu hộ biển ở Northsea",
    },
    {
      key: "training",
      labelEn: "Volunteer training, helmsman duties and launch times",
      labelVi: "Huấn luyện, nhiệm vụ người lái và thời gian ra khơi",
    },
    {
      key: "motivation",
      labelEn: "What motivates volunteers in winter emergencies",
      labelVi: "Điều gì thôi thúc tình nguyện viên trong mùa đông",
    },
    {
      key: "guitar",
      labelEn: "Booking a beginner guitar class at college",
      labelVi: "Đăng ký lớp guitar cho người mới ở trường cao đẳng",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-correct-background",
      labelEn:
        "David explains why he left London, joined the Northsea Lifeboat Institution, and how the station is funded.",
      labelVi:
        "David giải thích vì sao rời London, gia nhập Lifeboat Institution Northsea và cách trạm được tài trợ.",
      correct: true,
    },
    {
      key: "p2-g-wrong-guitar",
      labelEn: "Friends arranging guitar lessons at a local college",
      labelVi: "Bạn bè sắp xếp lớp guitar ở trường cao đẳng",
    },
    {
      key: "p2-g-correct-duties",
      labelEn:
        "Health checks, rapid launch targets, helmsman responsibilities, safety talks and fundraising support.",
      labelVi:
        "Khám sức khỏe, mục tiêu ra khơi nhanh, trách nhiệm helmsman, nói chuyện an toàn và hỗ trợ gây quỹ.",
      correct: true,
    },
    {
      key: "p2-g-correct-training-motivation",
      labelEn:
        "Intensive training (including wave-tank survival), teamwork and what motivates volunteers in serious winter incidents.",
      labelVi:
        "Huấn luyện chuyên sâu (gồm bể sóng), làm việc nhóm và động lực khi xử lý sự cố nghiêm trọng mùa đông.",
      correct: true,
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — moving to Northsea",
      conversationVi: "Bài nói — chuyển tới Northsea",
      questionEn: "What made David leave London and move to Northsea?",
      questionVi: "Vì sao David rời London và chuyển tới Northsea?",
      answerEn: "He was eager to develop a hobby (keen on boats) (A).",
      answerVi: "Anh ấy muốn phát triển sở thích (thích thuyền) (A).",
    },
    {
      key: "p2-q12",
      conversationEn: "Talk — lifeboat building",
      conversationVi: "Bài nói — tòa nhà trạm cứu hộ",
      questionEn: "Who provided the money to build the Lifeboat Institution in Northsea?",
      questionVi: "Ai cung cấp tiền xây Lifeboat Institution ở Northsea?",
      answerEn: "A generous local resident (B).",
      answerVi: "Một cư dân địa phương hào phóng (B).",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — health assessment",
      conversationVi: "Bài nói — khám sức khỏe",
      questionEn: "What did doctors initially worry about regarding David's vision?",
      questionVi: "Bác sĩ ban đầu lo ngại gì về thị lực của David?",
      answerEn: "That he might be colour blind (A).",
      answerVi: "Có thể bị mù màu (A).",
    },
    {
      key: "p2-q14",
      conversationEn: "Talk — launch time",
      conversationVi: "Bài nói — thời gian ra khơi",
      questionEn: "After arriving at the station, how long do they aim to launch the boat?",
      questionVi: "Sau khi tới trạm, họ mục tiêu ra khơi trong bao lâu?",
      answerEn: "Six to eight minutes (B).",
      answerVi: "Sáu đến tám phút (B).",
    },
    {
      key: "p2-q15",
      conversationEn: "Talk — helmsman",
      conversationVi: "Bài nói — helmsman",
      questionEn: "As helmsman, what is David's key decision responsibility?",
      questionVi: "Là helmsman, quyết định quan trọng của David là gì?",
      answerEn: "Whether it is safe to launch the lifeboat (C).",
      answerVi: "Có an toàn để cho tàu cứu hộ ra khơi hay không (C).",
    },
    {
      key: "p2-q16",
      conversationEn: "Talk — other duties",
      conversationVi: "Bài nói — nhiệm vụ khác",
      questionEn: "Besides going out on the lifeboat, what does David do?",
      questionVi: "Ngoài ra khơi, David còn làm gì?",
      answerEn: "Gives talks on safety at sea to youth groups and sailing clubs (A).",
      answerVi: "Nói chuyện an toàn trên biển với nhóm thanh thiếu niên và câu lạc bộ thuyền buồm (A).",
    },
  ],
  memoryPlaceholder: "Ghi ý về lý do gia nhập, huấn luyện, trách nhiệm helmsman và động lực mùa đông…",
  transcriptCloze: CAM19_T2_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM19_T2_P2_KEYWORD_PARAPHRASES,
};

const CAM19_T2_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "footwear-recycling",
      labelEn: "Recycling footwear — scope, statistics and rejection reasons",
      labelVi: "Tái chế giày dép — phạm vi, thống kê và lý do từ chối",
    },
    {
      key: "trainers",
      labelEn: "Trainers, school uniform and personal recycling habits",
      labelVi: "Giày thể thao, đồng phục trường và thói quen tái chế cá nhân",
    },
    {
      key: "remanufacture",
      labelEn: "A failed project to make new shoes from old parts",
      labelVi: "Dự án thất bại ghép giày mới từ phần cũ",
    },
    {
      key: "tardigrades",
      labelEn: "A lecture on tardigrade survival in extreme conditions",
      labelVi: "Bài giảng về khả năng sống sót của tardigrade",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-wrong-lifeboat",
      labelEn: "A lifeboat volunteer describing training in a wave tank",
      labelVi: "Tình nguyện viên cứu hộ mô tả huấn luyện trong bể sóng",
    },
    {
      key: "p3-g-correct-topic",
      labelEn:
        "Bella and Don plan a presentation on footwear recycling — scope, trends, rejection examples and landfill statistics.",
      labelVi:
        "Bella và Don lên kế hoạch thuyết trình tái chế giày — phạm vi, xu hướng, ví dụ bị từ chối và thống kê chôn lấp.",
      correct: true,
    },
    {
      key: "p3-g-wrong-guitar",
      labelEn: "A chat about tuning guitars and practising chords",
      labelVi: "Trò chuyện về lên dây guitar và luyện hợp âm",
    },
    {
      key: "p3-g-correct-approach",
      labelEn:
        "They agree to present the topic from a new angle, using real rejection cases and the failed remanufacturing project.",
      labelVi:
        "Hai bạn đồng ý trình bày theo góc nhìn mới, dùng ví dụ bị từ chối thực tế và dự án tái chế thất bại.",
      correct: true,
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — topic scope",
      conversationVi: "Thảo luận — phạm vi đề tài",
      questionEn: "At first, what did Don think about the recycling footwear topic?",
      questionVi: "Ban đầu Don nghĩ gì về đề tài tái chế giày?",
      answerEn: "It might be too limited in scope (A).",
      answerVi: "Có thể quá hẹp về phạm vi (A).",
    },
    {
      key: "p3-q22",
      conversationEn: "Discussion — trainers",
      conversationVi: "Thảo luận — giày thể thao",
      questionEn: "What do Bella and Don disagree about regarding trainers?",
      questionVi: "Bella và Don bất đồng điều gì về giày thể thao?",
      answerEn: "Whether trainers are suitable for school uniform (B).",
      answerVi: "Giày thể thao có phù hợp đồng phục trường không (B).",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — personal habits",
      conversationVi: "Thảo luận — thói quen cá nhân",
      questionEn: "Why does Bella sometimes recycle shoes that still fit?",
      questionVi: "Vì sao Bella đôi khi tái chế giày vẫn vừa?",
      answerEn: "She no longer likes how they look on her (B).",
      answerVi: "Cô ấy không còn thích vẻ ngoài khi đi giày đó (B).",
    },
    {
      key: "p3-q24",
      conversationEn: "Discussion — statistics",
      conversationVi: "Thảo luận — số liệu",
      questionEn: "What statistic in the article confused Don?",
      questionVi: "Số liệu nào trong bài làm Don bối rối?",
      answerEn: "Less footwear is recycled now than in the past (B).",
      answerVi: "Tỷ lệ giày tái chế hiện thấp hơn trước (B).",
    },
    {
      key: "p3-q29",
      conversationEn: "Discussion — remanufacturing",
      conversationVi: "Thảo luận — tái chế ghép",
      questionEn: "Why did the project to make ‘new’ shoes from old parts fail?",
      questionVi: "Vì sao dự án ghép giày ‘mới’ từ phần cũ thất bại?",
      answerEn: "The pairs of shoes were not completely alike (C).",
      answerVi: "Các đôi giày ghép không giống hệt nhau (C).",
    },
    {
      key: "p3-q30",
      conversationEn: "Discussion — presentation",
      conversationVi: "Thảo luận — thuyết trình",
      questionEn: "How do Bella and Don agree they can present their topic?",
      questionVi: "Bella và Don đồng ý trình bày đề tài thế nào?",
      answerEn: "From a new angle (A).",
      answerVi: "Theo góc nhìn mới (A).",
    },
  ],
  memoryPlaceholder: "Ghi ý về thống kê tái chế, giày bị từ chối và dự án ghép giày thất bại…",
  transcriptCloze: CAM19_T2_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM19_T2_P3_KEYWORD_PARAPHRASES,
};

const CAM19_T2_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "tardigrades",
      labelEn: "Tardigrades — anatomy, habitats and extreme survival",
      labelVi: "Tardigrade — giải phẫu, môi trường sống và sống sót cực đoan",
    },
    {
      key: "cryptobiosis",
      labelEn: "Cryptobiosis, tun state and DNA protection",
      labelVi: "Cryptobiosis, trạng thái tun và bảo vệ DNA",
    },
    {
      key: "conservation",
      labelEn: "Whether tardigrades are endangered species",
      labelVi: "Tardigrade có thuộc loài nguy cấp không",
    },
    {
      key: "footwear",
      labelEn: "Students analysing shoe recycling rejection rates",
      labelVi: "Sinh viên phân tích tỷ lệ giày bị từ chối tái chế",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-guitar",
      labelEn: "A conversation about beginner guitar lessons at college",
      labelVi: "Hội thoại về lớp guitar cho người mới ở trường cao đẳng",
    },
    {
      key: "p4-g-wrong-lifeboat",
      labelEn: "A lifeboat volunteer explaining launch procedures",
      labelVi: "Tình nguyện viên cứu hộ giải thích quy trình ra khơi",
    },
    {
      key: "p4-g-correct-lecture",
      labelEn:
        "A student presentation on tardigrades — appearance, habitats, cryptobiosis, diet and conservation status.",
      labelVi:
        "Bài thuyết trình sinh viên về tardigrade — hình thái, môi trường sống, cryptobiosis, chế độ ăn và tình trạng bảo tồn.",
      correct: true,
    },
    {
      key: "p4-g-wrong-shoes",
      labelEn: "A discussion of footwear remanufacturing projects",
      labelVi: "Thảo luận dự án tái chế ghép giày dép",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — names",
      conversationVi: "Bài giảng — tên gọi",
      questionEn: "Tardigrades are called ‘water bears’ because of the way they —",
      questionVi: "Tardigrade được gọi ‘gấu nước’ vì cách chúng —",
      answerEn: "Move.",
      answerVi: "Di chuyển (move).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — body",
      conversationVi: "Bài giảng — cơ thể",
      questionEn: "What word describes the tardigrade's rounded body shape?",
      questionVi: "Từ nào mô tả thân tròn của tardigrade?",
      answerEn: "Short (barrel-shaped).",
      answerVi: "Short (hình thùng).",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — gripping",
      conversationVi: "Bài giảng — bám bám",
      questionEn: "Some species use suction discs instead of —",
      questionVi: "Một số loài dùng đĩa hút thay vì —",
      answerEn: "Claws.",
      answerVi: "Móng vuốt (discs).",
    },
    {
      key: "p4-q34",
      conversationEn: "Lecture — body fluid",
      conversationVi: "Bài giảng — dịch cơ thể",
      questionEn: "What is carried in the fluid filling the body cavity?",
      questionVi: "Chất gì được vận chuyển trong dịch lấp khoang cơ thể?",
      answerEn: "Oxygen and blood.",
      answerVi: "Oxy và máu.",
    },
    {
      key: "p4-q36",
      conversationEn: "Lecture — resilience",
      conversationVi: "Bài giảng — sức bền",
      questionEn: "Tardigrades can survive very low or high —",
      questionVi: "Tardigrade chịu được mức rất thấp hoặc rất cao của —",
      answerEn: "Temperatures.",
      answerVi: "Nhiệt độ (temperatures).",
    },
    {
      key: "p4-q38",
      conversationEn: "Lecture — space tests",
      conversationVi: "Bài giảng — thí nghiệm không gian",
      questionEn: "Research is testing how long tardigrades can survive in —",
      questionVi: "Nghiên cứu đang thử tardigrade sống bao lâu trong —",
      answerEn: "Space.",
      answerVi: "Không gian (space).",
    },
  ],
  memoryPlaceholder: "Ghi ý về hình thái tardigrade, cryptobiosis, protein bảo vệ DNA và thí nghiệm không gian…",
  transcriptCloze: CAM19_T2_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM19_T2_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM19_T2_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam19-t2-p1": CAM19_T2_P1,
  "cam19-t2-p2": CAM19_T2_P2,
  "cam19-t2-p3": CAM19_T2_P3,
  "cam19-t2-p4": CAM19_T2_P4,
};
