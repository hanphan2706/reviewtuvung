import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM18_T3_P1_KEYWORD_PARAPHRASES,
  CAM18_T3_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t3-p1-intensive";
import {
  CAM18_T3_P2_KEYWORD_PARAPHRASES,
  CAM18_T3_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t3-p2-intensive";
import {
  CAM18_T3_P3_KEYWORD_PARAPHRASES,
  CAM18_T3_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t3-p3-intensive";
import {
  CAM18_T3_P4_KEYWORD_PARAPHRASES,
  CAM18_T3_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t3-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 18 Test 3 (viết tay theo transcript + QnA). */
const CAM18_T3_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "membership",
      labelEn: "Joining the Wayside Camera Club — membership form and fees",
      labelVi: "Gia nhập Wayside Camera Club — đơn đăng ký và phí hội viên",
    },
    {
      key: "competitions",
      labelEn: "Past photography competitions and judges' feedback",
      labelVi: "Các cuộc thi ảnh trước đây và phản hồi của ban giám khảo",
    },
    {
      key: "mushrooms",
      labelEn: "Safety advice on picking wild mushrooms",
      labelVi: "Lời khuyên an toàn khi hái nấm dại",
    },
    {
      key: "luddites",
      labelEn: "Two students discussing the Luddites and automation",
      labelVi: "Hai sinh viên bàn về Luddites và tự động hóa",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-mushrooms",
      labelEn: "An expert explains how to identify edible wild mushrooms",
      labelVi: "Chuyên gia hướng dẫn nhận biết nấm dại ăn được",
    },
    {
      key: "p1-g-correct-join",
      labelEn:
        "A phone call to join the Wayside Camera Club — contact details, membership type and feedback on three past photo competitions.",
      labelVi:
        "Cuộc gọi gia nhập Wayside Camera Club — thông tin liên hệ, loại hội viên và phản hồi về ba cuộc thi ảnh trước đây.",
      correct: true,
    },
    {
      key: "p1-g-wrong-space",
      labelEn: "A university lecture on managing satellite traffic in orbit",
      labelVi: "Bài giảng đại học về quản lý giao thông vệ tinh trên quỹ đạo",
    },
    {
      key: "p1-g-wrong-luddites",
      labelEn: "Students comparing 19th-century textile workers with modern jobs",
      labelVi: "Sinh viên so sánh công nhân dệt thế kỷ 19 với việc làm hiện đại",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Call — address",
      conversationVi: "Cuộc gọi — địa chỉ",
      questionEn: "On which street in Peacetown does Dan live?",
      questionVi: "Dan sống ở đường nào tại Peacetown?",
      answerEn: "52 Marrowfield Street.",
      answerVi: "52 Marrowfield Street.",
    },
    {
      key: "p1-q2",
      conversationEn: "Call — how he heard",
      conversationVi: "Cuộc gọi — biết đến câu lạc bộ",
      questionEn: "How did Dan hear about the camera club?",
      questionVi: "Dan biết đến câu lạc bộ ảnh qua đâu?",
      answerEn: "From a relative (not the internet this time).",
      answerVi: "Từ một người thân (lần này không qua internet).",
    },
    {
      key: "p1-q3",
      conversationEn: "Call — reasons",
      conversationVi: "Cuộc gọi — lý do tham gia",
      questionEn: "Besides entering competitions, why does Dan want to join?",
      questionVi: "Ngoài thi ảnh, vì sao Dan muốn gia nhập?",
      answerEn: "To socialise with other photographers.",
      answerVi: "Để giao lưu với các nhiếp ảnh gia khác.",
    },
    {
      key: "p1-q4",
      conversationEn: "Call — membership",
      conversationVi: "Cuộc gọi — hội viên",
      questionEn: "Which membership does Dan choose, and what extra right does it give?",
      questionVi: "Dan chọn loại hội viên nào và quyền thêm gì?",
      answerEn: "Full membership (£30) — only full members can vote in meetings.",
      answerVi: "Hội viên chính thức (£30) — chỉ hội viên chính thức được bỏ phiếu trong họp.",
    },
    {
      key: "p1-q5",
      conversationEn: "Call — first competition",
      conversationVi: "Cuộc gọi — cuộc thi đầu tiên",
      questionEn: "What did judges criticise about Dan's 'Domestic Life' photo?",
      questionVi: "Ban giám khảo phê bình gì về ảnh 'Domestic Life' của Dan?",
      answerEn: "The composition was too 'busy'.",
      answerVi: "Bố cục quá 'rối' (busy).",
    },
    {
      key: "p1-q7",
      conversationEn: "Call — sunset competition",
      conversationVi: "Cuộc gọi — cuộc thi hoàng hôn",
      questionEn: "What was wrong with Dan's 'Beautiful Sunsets' entry?",
      questionVi: "Ảnh 'Beautiful Sunsets' của Dan sai ở điểm nào?",
      answerEn: "The timing — he took the shot too soon.",
      answerVi: "Thời điểm chụp — anh chụp quá sớm.",
    },
  ],
  memoryPlaceholder: "Ghi ý về địa chỉ Marrowfield, loại hội viên và phản hồi ba cuộc thi ảnh…",
  transcriptCloze: CAM18_T3_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T3_P1_KEYWORD_PARAPHRASES,
};

const CAM18_T3_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "safety",
      labelEn: "Safety warnings and myths about wild mushrooms",
      labelVi: "Cảnh báo an toàn và hiểu lầm về nấm dại",
    },
    {
      key: "foraging",
      labelEn: "Where and how to pick mushrooms — parks, beginners and conservation",
      labelVi: "Hái nấm ở đâu và cách hái — công viên, người mới và bảo tồn",
    },
    {
      key: "camera-club",
      labelEn: "A phone call about joining a photography club",
      labelVi: "Cuộc gọi gia nhập câu lạc bộ nhiếp ảnh",
    },
    {
      key: "space-traffic",
      labelEn: "Managing collisions between satellites in orbit",
      labelVi: "Quản lý va chạm giữa các vệ tinh trên quỹ đạo",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-wrong-camera",
      labelEn: "A club secretary helping someone fill in a membership form",
      labelVi: "Thư ký câu lạc bộ giúp điền đơn gia nhập hội viên",
    },
    {
      key: "p2-g-correct-talk",
      labelEn:
        "Dan Beagle gives practical advice on foraging wild mushrooms — safety rules, picking locations, conservation, storage and cooking.",
      labelVi:
        "Dan Beagle đưa lời khuyên thực tế về hái nấm dại — quy tắc an toàn, địa điểm hái, bảo tồn, bảo quản và chế biến.",
      correct: true,
    },
    {
      key: "p2-g-wrong-luddites",
      labelEn: "Students debating whether the Luddites were justified",
      labelVi: "Sinh viên tranh luận Luddites có lý do chính đáng không",
    },
    {
      key: "p2-g-wrong-satellites",
      labelEn: "An astronomer explaining how to track space debris",
      labelVi: "Nhà thiên văn giải thích cách theo dõi mảnh vỡ không gian",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — safety warnings",
      conversationVi: "Bài nói — cảnh báo an toàn",
      questionEn: "Which TWO warnings does Dan give about picking mushrooms?",
      questionVi: "Dan đưa ra HAI cảnh báo nào khi hái nấm?",
      answerEn: "B — Don't pick mushrooms near busy roads; C — Don't eat mushrooms given to you.",
      answerVi: "B — Không hái nấm gần đường đông xe; C — Không ăn nấm do người khác cho.",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — mushroom myths",
      conversationVi: "Bài nói — hiểu lầm về nấm",
      questionEn: "Which TWO ideas about wild mushrooms does Dan say are correct?",
      questionVi: "Dan nói HAI ý nào về nấm dại là đúng?",
      answerEn: "B — Mushrooms eaten by animals may be unsafe; D — Brightly coloured mushrooms can be edible.",
      answerVi: "B — Nấm động vật ăn vẫn có thể không an toàn; D — Nấm màu sáng vẫn có thể ăn được.",
    },
    {
      key: "p2-q15",
      conversationEn: "Talk — parks",
      conversationVi: "Bài nói — hái trong công viên",
      questionEn: "What advice does Dan give about picking mushrooms in parks?",
      questionVi: "Dan khuyên gì khi hái nấm trong công viên?",
      answerEn: "Get there early (C) — competition from people and wildlife.",
      answerVi: "Đến sớm (C) — tranh với người hái và động vật hoang.",
    },
    {
      key: "p2-q16",
      conversationEn: "Talk — beginners",
      conversationVi: "Bài nói — người mới",
      questionEn: "What does Dan recommend for complete beginners?",
      questionVi: "Dan khuyên người mới hoàn toàn nên làm gì?",
      answerEn: "Join a group led by an expert (B).",
      answerVi: "Tham gia nhóm do chuyên gia dẫn (B).",
    },
    {
      key: "p2-q17",
      conversationEn: "Talk — conservation",
      conversationVi: "Bài nói — bảo tồn",
      questionEn: "What is important for mushroom conservation?",
      questionVi: "Điều gì quan trọng để bảo tồn nấm?",
      answerEn: "Picking only a limited amount for your own needs (B).",
      answerVi: "Chỉ hái vừa đủ dùng, không lấy hết (B).",
    },
    {
      key: "p2-q18",
      conversationEn: "Talk — decline",
      conversationVi: "Bài nói — suy giảm",
      questionEn: "Why are some wild mushroom varieties in decline locally?",
      questionVi: "Vì sao một số loài nấm dại địa phương đang suy giảm?",
      answerEn: "A rise in local building developments (C).",
      answerVi: "Tăng xây dựng nhà ở địa phương (C).",
    },
  ],
  memoryPlaceholder: "Ghi ý về cảnh báo an toàn, hái sớm trong công viên, bảo tồn và cách bảo quản nấm…",
  transcriptCloze: CAM18_T3_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T3_P2_KEYWORD_PARAPHRASES,
};

const CAM18_T3_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "luddites",
      labelEn: "The Luddites, textile workers and reactions to automation",
      labelVi: "Luddites, công nhân dệt và phản ứng với tự động hóa",
    },
    {
      key: "future-work",
      labelEn: "Predictions about the future of work and changing job sectors",
      labelVi: "Dự đoán tương lai việc làm và các ngành thay đổi",
    },
    {
      key: "mushrooms",
      labelEn: "A talk on identifying poisonous wild mushrooms",
      labelVi: "Bài nói về nhận biết nấm dại độc",
    },
    {
      key: "camera",
      labelEn: "Feedback on entries to photography competitions",
      labelVi: "Phản hồi các bài dự thi cuộc thi ảnh",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-wrong-mushrooms",
      labelEn: "An author explains conservation rules for mushroom picking",
      labelVi: "Tác giả giải thích quy tắc bảo tồn khi hái nấm",
    },
    {
      key: "p3-g-correct-seminar",
      labelEn:
        "Two students discuss a seminar on automation — the Luddites, scepticism about future-of-work predictions and how different jobs have changed.",
      labelVi:
        "Hai sinh viên bàn về seminar tự động hóa — Luddites, nghi ngờ dự đoán tương lai việc làm và sự thay đổi các ngành nghề.",
      correct: true,
    },
    {
      key: "p3-g-wrong-camera",
      labelEn: "A phone interview about joining a local camera club",
      labelVi: "Phỏng vấn điện thoại gia nhập câu lạc bộ ảnh địa phương",
    },
    {
      key: "p3-g-wrong-space",
      labelEn: "A lecture comparing air traffic control with satellite tracking",
      labelVi: "Bài giảng so sánh kiểm soát không lưu với theo dõi vệ tinh",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — Luddites",
      conversationVi: "Thảo luận — Luddites",
      questionEn: "Which TWO opinions about the Luddites do the students express?",
      questionVi: "Hai sinh viên bày tỏ HAI quan điểm nào về Luddites?",
      answerEn: "A — Their actions were ineffective; E — Their attitude is understandable.",
      answerVi: "A — Hành động của họ không hiệu quả; E — Thái độ của họ có thể hiểu được.",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — future predictions",
      conversationVi: "Thảo luận — dự đoán tương lai",
      questionEn: "Which TWO future-of-work predictions are the students doubtful about?",
      questionVi: "Hai sinh viên nghi ngờ HAI dự đoán nào về tương lai việc làm?",
      answerEn: "B — Unemployment will fall; D — Working hours will be shorter.",
      answerVi: "B — Thất nghiệp sẽ giảm; D — Giờ làm sẽ ngắn hơn.",
    },
    {
      key: "p3-q25",
      conversationEn: "Discussion — accountants",
      conversationVi: "Thảo luận — kế toán",
      questionEn: "What comment do the students make about accountants?",
      questionVi: "Hai sinh viên nhận xét gì về nghề kế toán?",
      answerEn: "G — Both employment and productivity have risen.",
      answerVi: "G — Cả số việc làm và năng suất đều tăng.",
    },
    {
      key: "p3-q27",
      conversationEn: "Discussion — admin staff",
      conversationVi: "Thảo luận — nhân viên hành chính",
      questionEn: "What do they say about administrative staff today?",
      questionVi: "Họ nói gì về nhân viên hành chính hiện nay?",
      answerEn: "B — Their role has become more interesting (more responsibility and higher status).",
      answerVi: "B — Vai trò thú vị hơn (trách nhiệm và địa vị cao hơn).",
    },
    {
      key: "p3-q28",
      conversationEn: "Discussion — farm workers",
      conversationVi: "Thảo luận — nông dân",
      questionEn: "What surprised them about agricultural workers in the 19th century?",
      questionVi: "Điều gì về nông dân thế kỷ 19 khiến họ ngạc nhiên?",
      answerEn: "C — The number working in agriculture has fallen dramatically (now under 0.2%).",
      answerVi: "C — Số lao động nông nghiệp giảm mạnh (nay dưới 0,2%).",
    },
    {
      key: "p3-q30",
      conversationEn: "Discussion — bank clerks",
      conversationVi: "Thảo luận — giao dịch viên ngân hàng",
      questionEn: "What is the students' view on bank clerks?",
      questionVi: "Quan điểm của hai sinh viên về giao dịch viên ngân hàng?",
      answerEn: "A — These jobs are likely to be at risk.",
      answerVi: "A — Nghề này có nguy cơ bị thay thế.",
    },
  ],
  memoryPlaceholder: "Ghi ý về Luddites, dự đoán việc làm và nhận xét từng ngành (kế toán, nông nghiệp, ngân hàng…)…",
  transcriptCloze: CAM18_T3_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T3_P3_KEYWORD_PARAPHRASES,
};

const CAM18_T3_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "stm-concept",
      labelEn: "Space Traffic Management — concept and comparison with air traffic control",
      labelVi: "Quản lý giao thông không gian — khái niệm và so sánh với kiểm soát không lưu",
    },
    {
      key: "problems",
      labelEn: "Problems: cheap satellites, debris, tracking and data sharing",
      labelVi: "Vấn đề: vệ tinh rẻ, mảnh vỡ, theo dõi và chia sẻ dữ liệu",
    },
    {
      key: "solutions",
      labelEn: "Proposed solutions — standards, database and building trust",
      labelVi: "Giải pháp đề xuất — tiêu chuẩn, cơ sở dữ liệu và xây dựng niềm tin",
    },
    {
      key: "mushrooms",
      labelEn: "A guide to storing and cooking freshly picked mushrooms",
      labelVi: "Hướng dẫn bảo quản và chế biến nấm hái tươi",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-mushrooms",
      labelEn: "A foraging expert advises on mushroom storage in the fridge",
      labelVi: "Chuyên gia hái nấm hướng dẫn bảo quản nấm trong tủ lạnh",
    },
    {
      key: "p4-g-wrong-luddites",
      labelEn: "Students compare 19th-century factory protests with modern technology",
      labelVi: "Sinh viên so sánh biểu tình nhà máy thế kỷ 19 với công nghệ hiện đại",
    },
    {
      key: "p4-g-correct-lecture",
      labelEn:
        "An astronomy lecture on Space Traffic Management — preventing satellite collisions, current obstacles and proposed international solutions.",
      labelVi:
        "Bài giảng thiên văn về Quản lý giao thông không gian — tránh va chạm vệ tinh, trở ngại hiện tại và giải pháp quốc tế.",
      correct: true,
    },
    {
      key: "p4-g-wrong-camera",
      labelEn: "A photography club reviews competition themes and composition",
      labelVi: "Câu lạc bộ ảnh đánh giá chủ đề thi và bố cục ảnh",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — aim",
      conversationVi: "Bài giảng — mục tiêu",
      questionEn: "Besides legal measures, what kind of systems would STM need to improve safety?",
      questionVi: "Ngoài biện pháp pháp lý, STM cần loại hệ thống gì để tăng an toàn?",
      answerEn: "Technical systems.",
      answerVi: "Hệ thống kỹ thuật (technical).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — more satellites",
      conversationVi: "Bài giảng — nhiều vệ tinh hơn",
      questionEn: "Why are there many more satellites in orbit now?",
      questionVi: "Vì sao hiện có nhiều vệ tinh trên quỹ đạo hơn?",
      answerEn: "They are relatively cheap; operators launch constellations of thousands.",
      answerVi: "Vệ tinh tương đối rẻ; nhà vận hành phóng chòm gồm hàng nghìn vệ tinh.",
    },
    {
      key: "p4-q34",
      conversationEn: "Lecture — identification",
      conversationVi: "Bài giảng — nhận dạng",
      questionEn: "What are satellites not required to transmit to help with?",
      questionVi: "Vệ tinh không bắt buộc gửi thông tin để hỗ trợ việc gì?",
      answerEn: "Their identification.",
      answerVi: "Nhận dạng (identification).",
    },
    {
      key: "p4-q36",
      conversationEn: "Lecture — secrecy",
      conversationVi: "Bài giảng — bí mật",
      questionEn: "Why may operators refuse to share satellite details?",
      questionVi: "Vì sao nhà vận hành có thể không chia sẻ thông tin vệ tinh?",
      answerEn: "Military or commercial reasons (competitors).",
      answerVi: "Lý do quân sự hoặc thương mại (đối thủ cạnh tranh).",
    },
    {
      key: "p4-q38",
      conversationEn: "Lecture — prediction",
      conversationVi: "Bài giảng — dự đoán",
      questionEn: "What can scientists only make about where a fast-moving satellite will go?",
      questionVi: "Nhà khoa học chỉ có thể đưa ra gì về hướng đi của vệ tinh bay rất nhanh?",
      answerEn: "A prediction.",
      answerVi: "Một dự đoán (prediction).",
    },
    {
      key: "p4-q40",
      conversationEn: "Lecture — trust",
      conversationVi: "Bài giảng — niềm tin",
      questionEn: "A coordinated STM system must create what in its users?",
      questionVi: "Hệ thống STM phối hợp phải tạo ra điều gì ở người dùng?",
      answerEn: "Trust.",
      answerVi: "Niềm tin (trust).",
    },
  ],
  memoryPlaceholder: "Ghi ý về mục tiêu STM, vệ tinh rẻ/chòm vệ tinh, thiếu tracking và giải pháp database + trust…",
  transcriptCloze: CAM18_T3_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T3_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM18_T3_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam18-t3-p1": CAM18_T3_P1,
  "cam18-t3-p2": CAM18_T3_P2,
  "cam18-t3-p3": CAM18_T3_P3,
  "cam18-t3-p4": CAM18_T3_P4,
};
