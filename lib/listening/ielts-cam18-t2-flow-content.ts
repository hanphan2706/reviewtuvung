import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM18_T2_P1_KEYWORD_PARAPHRASES,
  CAM18_T2_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t2-p1-intensive";
import {
  CAM18_T2_P2_KEYWORD_PARAPHRASES,
  CAM18_T2_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t2-p2-intensive";
import {
  CAM18_T2_P3_KEYWORD_PARAPHRASES,
  CAM18_T2_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t2-p3-intensive";
import {
  CAM18_T2_P4_KEYWORD_PARAPHRASES,
  CAM18_T2_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam18-t2-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 18 Test 2 (viết tay theo transcript + QnA). */
const CAM18_T2_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "milos-jobs",
      labelEn: "Job vacancies and benefits at Milo's Restaurants",
      labelVi: "Việc làm và phúc lợi tại chuỗi nhà hàng Milo's",
    },
    {
      key: "breakfast-supervisor",
      labelEn: "A breakfast supervisor role on Wivenhoe Street",
      labelVi: "Vị trí giám sát bữa sáng ở phố Wivenhoe",
    },
    {
      key: "housing",
      labelEn: "A public meeting about a new housing development",
      labelVi: "Buổi họp công chúng về khu nhà ở mới",
    },
    {
      key: "laki",
      labelEn: "Students preparing a talk on the 1783 Laki eruption",
      labelVi: "Sinh viên chuẩn bị thuyết trình về núi lửa Laki 1783",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-housing",
      labelEn: "A developer explains why a farmland site was chosen for housing",
      labelVi: "Nhà phát triển giải thích vì sao chọn đất nông nghiệp để xây nhà",
    },
    {
      key: "p1-g-wrong-laki",
      labelEn: "Two students comparing volcanic observations from the 1780s",
      labelVi: "Hai sinh viên so sánh ghi chép quan sát núi lửa thập niên 1780",
    },
    {
      key: "p1-g-correct-jobs",
      labelEn:
        "A phone enquiry about working at Milo's Restaurants — staff benefits, requirements and two current vacancies.",
      labelVi:
        "Cuộc gọi hỏi việc tại Milo's — phúc lợi nhân viên, yêu cầu tuyển dụng và hai vị trí đang tuyển.",
      correct: true,
    },
    {
      key: "p1-g-wrong-pockets",
      labelEn: "A student presentation on how pockets evolved in European fashion",
      labelVi: "Bài thuyết trình sinh viên về sự phát triển túi trong thời trang châu Âu",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Call — staff benefits",
      conversationVi: "Cuộc gọi — phúc lợi nhân viên",
      questionEn: "What do all employees receive, including temporary staff?",
      questionVi: "Tất cả nhân viên — kể cả nhân viên tạm thời — được hưởng gì?",
      answerEn: "Training.",
      answerVi: "Đào tạo (training).",
    },
    {
      key: "p1-q2",
      conversationEn: "Call — staff benefits",
      conversationVi: "Cuộc gọi — phúc lợi nhân viên",
      questionEn: "What weekday benefit can staff get at any Milo's restaurant?",
      questionVi: "Trong ngày thường, nhân viên được hưởng lợi gì ở mọi nhà hàng Milo's?",
      answerEn: "A discount (not at weekends).",
      answerVi: "Giảm giá (không áp dụng cuối tuần).",
    },
    {
      key: "p1-q3",
      conversationEn: "Call — late shifts",
      conversationVi: "Cuộc gọi — ca muộn",
      questionEn: "If a shift finishes after midnight, what does the company pay for?",
      questionVi: "Nếu tan ca sau nửa đêm, công ty chi trả gì?",
      answerEn: "A taxi home.",
      answerVi: "Taxi về nhà.",
    },
    {
      key: "p1-q4",
      conversationEn: "Call — person specification",
      conversationVi: "Cuộc gọi — yêu cầu ứng viên",
      questionEn: "What must applicants maintain at a high standard?",
      questionVi: "Ứng viên phải duy trì tiêu chuẩn cao về điều gì?",
      answerEn: "Service.",
      answerVi: "Phục vụ (service).",
    },
    {
      key: "p1-q5",
      conversationEn: "Call — person specification",
      conversationVi: "Cuộc gọi — yêu cầu ứng viên",
      questionEn: "What qualification must the applicant have?",
      questionVi: "Ứng viên phải có chứng chỉ/bằng cấp gì?",
      answerEn: "English.",
      answerVi: "Tiếng Anh (English).",
    },
    {
      key: "p1-q8",
      conversationEn: "Call — breakfast supervisor pay",
      conversationVi: "Cuộc gọi — lương giám sát bữa sáng",
      questionEn: "What is the starting hourly pay for the breakfast supervisor role?",
      questionVi: "Mức lương theo giờ ban đầu của giám sát bữa sáng là bao nhiêu?",
      answerEn: "£9.75 per hour.",
      answerVi: "£9.75 mỗi giờ.",
    },
    {
      key: "p1-q10",
      conversationEn: "Call — City Road hours",
      conversationVi: "Cuộc gọi — giờ làm City Road",
      questionEn: "How often does the junior chef get a Sunday off?",
      questionVi: "Đầu bếp phụ được nghỉ Chủ nhật bao lâu một lần?",
      answerEn: "One Sunday off every four weeks.",
      answerVi: "Một Chủ nhật nghỉ cứ bốn tuần một lần.",
    },
  ],
  memoryPlaceholder: "Ghi ý về phúc lợi Milo's, yêu cầu ứng viên và hai vị trí Wivenhoe / City Road…",
  transcriptCloze: CAM18_T2_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T2_P1_KEYWORD_PARAPHRASES,
};

const CAM18_T2_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "nunston-housing",
      labelEn: "A new housing development on the outskirts of Nunston",
      labelVi: "Khu nhà ở mới ven Nunston",
    },
    {
      key: "site-reasons",
      labelEn: "Why the site was chosen and public feedback on plans",
      labelVi: "Lý do chọn đất và phản hồi công chúng về quy hoạch",
    },
    {
      key: "facilities-map",
      labelEn: "Facilities on the development and locations on a site map",
      labelVi: "Tiện ích trong khu và vị trí trên bản đồ",
    },
    {
      key: "restaurant-jobs",
      labelEn: "Enquiring about restaurant work and staff benefits",
      labelVi: "Hỏi việc nhà hàng và phúc lợi nhân viên",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-wrong-milos",
      labelEn: "A job enquiry about breakfast supervisor and junior chef roles",
      labelVi: "Hỏi việc giám sát bữa sáng và đầu bếp phụ",
    },
    {
      key: "p2-g-correct-presentation",
      labelEn:
        "A public presentation on a planned Nunston housing development — site choice, feedback and a facilities map.",
      labelVi:
        "Thuyết trình công chúng về khu nhà ở Nunston — lý do chọn đất, phản hồi và bản đồ tiện ích.",
      correct: true,
    },
    {
      key: "p2-g-wrong-laki",
      labelEn: "Students discussing the global impact of a volcanic eruption",
      labelVi: "Sinh viên bàn tác động toàn cầu của một đợt phun trào",
    },
    {
      key: "p2-g-wrong-pockets",
      labelEn: "A talk on hidden pockets in 18th-century women's clothing",
      labelVi: "Bài nói về túi giấu trong trang phục phụ nữ thế kỷ 18",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — site selection",
      conversationVi: "Bài nói — chọn địa điểm",
      questionEn: "What are TWO main reasons this site was chosen for housing?",
      questionVi: "Hai lý do chính chọn địa điểm này để xây nhà là gì?",
      answerEn: "B — easy access to local facilities; E — convenient for workers (industrial centre).",
      answerVi: "B — tiện tiếp cận cơ sở địa phương; E — thuận tiện cho người lao động (khu công nghiệp).",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — public feedback",
      conversationVi: "Bài nói — phản hồi công chúng",
      questionEn: "Which TWO aspects of the plans received positive feedback?",
      questionVi: "Hai khía cạnh nào của quy hoạch được đánh giá tích cực?",
      answerEn: "B — impact on the environment; C — encouragement of good relations between residents.",
      answerVi: "B — tác động môi trường; C — khuyến khích quan hệ tốt giữa cư dân.",
    },
    {
      key: "p2-q15",
      conversationEn: "Talk — site map",
      conversationVi: "Bài nói — bản đồ khu",
      questionEn: "Where is the school on the map?",
      questionVi: "Trường học ở đâu trên bản đồ?",
      answerEn: "On the road from the South Entrance, at the corner of the second left turn (G).",
      answerVi: "Trên đường từ cổng Nam, góc ngã rẽ trái thứ hai (G).",
    },
    {
      key: "p2-q16",
      conversationEn: "Talk — site map",
      conversationVi: "Bài nói — bản đồ khu",
      questionEn: "Where is the sports centre located?",
      questionVi: "Trung tâm thể thao nằm ở đâu?",
      answerEn: "On the western side, just below the road branching off London Road (C).",
      answerVi: "Phía tây khu, ngay dưới đường nhánh từ London Road (C).",
    },
    {
      key: "p2-q19",
      conversationEn: "Talk — site map",
      conversationVi: "Bài nói — bản đồ khu",
      questionEn: "Where is the supermarket?",
      questionVi: "Siêu thị ở đâu trên bản đồ?",
      answerEn: "Between the two entrances, just south of three large trees near London Road (H).",
      answerVi: "Giữa hai lối vào, ngay phía nam ba cây lớn gần London Road (H).",
    },
    {
      key: "p2-q20",
      conversationEn: "Talk — site map",
      conversationVi: "Bài nói — bản đồ khu",
      questionEn: "Where is the playground?",
      questionVi: "Sân chơi trẻ em ở đâu?",
      answerEn: "In the curve at the top of the road from the South Entrance, with views of the lake (A).",
      answerVi: "Trong khúc cong đầu đường từ cổng Nam, nhìn ra hồ (A).",
    },
  ],
  memoryPlaceholder: "Ghi ý về lý do chọn đất, phản hồi tích cực và vị trí trường, siêu thị, sân chơi…",
  transcriptCloze: CAM18_T2_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T2_P2_KEYWORD_PARAPHRASES,
};

const CAM18_T2_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "laki-presentation",
      labelEn: "Preparing a presentation on the 1783 Laki eruption",
      labelVi: "Chuẩn bị thuyết trình về phun trào Laki 1783",
    },
    {
      key: "laki-impact",
      labelEn: "Social, political and economic consequences of the eruption",
      labelVi: "Hậu quả xã hội, chính trị và kinh tế của phun trào",
    },
    {
      key: "laki-countries",
      labelEn: "Effects of the eruption in Iceland, Egypt, the UK and the USA",
      labelVi: "Tác động phun trào ở Iceland, Ai Cập, Anh và Mỹ",
    },
    {
      key: "housing-dev",
      labelEn: "Explaining a housing development map to the public",
      labelVi: "Giải thích bản đồ khu nhà ở cho công chúng",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-wrong-housing",
      labelEn: "A communications manager presenting a housing site map",
      labelVi: "Quản lý truyền thông trình bày bản đồ khu nhà ở",
    },
    {
      key: "p3-g-correct-laki",
      labelEn:
        "Adam and Michelle plan a presentation on the 1783 Laki eruption — its significance, contemporary reports and worldwide effects.",
      labelVi:
        "Adam và Michelle lên kế hoạch thuyết trình về Laki 1783 — ý nghĩa, ghi chép thời đó và tác động toàn cầu.",
      correct: true,
    },
    {
      key: "p3-g-wrong-milos",
      labelEn: "A recruitment call about restaurant job requirements",
      labelVi: "Cuộc gọi tuyển dụng về yêu cầu làm nhà hàng",
    },
    {
      key: "p3-g-wrong-pockets",
      labelEn: "A fashion history talk on men's suit pockets in the 1700s",
      labelVi: "Bài nói lịch sử thời trang về túi áo vest nam thế kỷ 1700",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — significance",
      conversationVi: "Thảo luận — ý nghĩa",
      questionEn: "Why do the students think the Laki eruption of 1783 is so important?",
      questionVi: "Vì sao hai bạn cho phun trào Laki 1783 rất quan trọng?",
      answerEn: "C — It had a profound effect on society.",
      answerVi: "C — Có tác động sâu rộng lên xã hội.",
    },
    {
      key: "p3-q22",
      conversationEn: "Discussion — observations",
      conversationVi: "Thảo luận — quan sát thời đó",
      questionEn: "What surprised Adam about observations made at the time?",
      questionVi: "Điều gì ở các quan sát thời đó khiến Adam ngạc nhiên?",
      answerEn: "A — the number of places producing them (many weather stations).",
      answerVi: "A — số nơi ghi nhận (nhiều trạm khí tượng).",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — Laki haze",
      conversationVi: "Thảo luận — khói Laki",
      questionEn: "According to Michelle, what did contemporary sources say about the Laki haze?",
      questionVi: "Theo Michelle, nguồn thời đó nói gì về khói Laki?",
      answerEn: "B — It was associated with health issues.",
      answerVi: "B — Liên quan đến vấn đề sức khỏe.",
    },
    {
      key: "p3-q24",
      conversationEn: "Discussion — Benjamin Franklin",
      conversationVi: "Thảo luận — Benjamin Franklin",
      questionEn: "Adam corrects Michelle when she claims Benjamin Franklin —",
      questionVi: "Adam sửa Michelle khi cô ấy cho rằng Benjamin Franklin —",
      answerEn: "B — was the first to identify the reason for the haze (a French naturalist beat him).",
      answerVi: "B — là người đầu tiên xác định nguyên nhân khói (một nhà tự nhiên học Pháp làm trước).",
    },
    {
      key: "p3-q25",
      conversationEn: "Discussion — unexpected effects",
      conversationVi: "Thảo luận — hậu quả bất ngờ",
      questionEn: "Which TWO issues following the eruption surprised the students?",
      questionVi: "Hai điều sau phun trào khiến sinh viên ngạc nhiên?",
      answerEn: "A — how widespread the effects were; B — how long-lasting the effects were.",
      answerVi: "A — tác động lan rộng; B — tác động kéo dài lâu.",
    },
    {
      key: "p3-q28",
      conversationEn: "Discussion — Egypt",
      conversationVi: "Thảo luận — Ai Cập",
      questionEn: "What comment do they make about the impact on Egypt?",
      questionVi: "Họ nhận xét gì về tác động ở Ai Cập?",
      answerEn: "A — This country suffered the most severe loss of life.",
      answerVi: "A — Quốc gia này chịu thiệt hại nhân mạng nặng nhất.",
    },
    {
      key: "p3-q30",
      conversationEn: "Discussion — USA",
      conversationVi: "Thảo luận — Mỹ",
      questionEn: "What comment do they make about the impact on the USA?",
      questionVi: "Họ nhận xét gì về tác động ở Mỹ?",
      answerEn: "F — It caused a particularly harsh winter.",
      answerVi: "F — Gây mùa đông đặc biệt khắc nghiệt.",
    },
  ],
  memoryPlaceholder: "Ghi ý về ý nghĩa Laki, khói Laki, Franklin và hậu quả ở Iceland, Ai Cập, Anh, Mỹ…",
  transcriptCloze: CAM18_T2_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T2_P3_KEYWORD_PARAPHRASES,
};

const CAM18_T2_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pockets-history",
      labelEn: "The development of pockets in European clothing",
      labelVi: "Sự phát triển túi trong trang phục châu Âu",
    },
    {
      key: "mens-pockets",
      labelEn: "18th-century men's suits, tailors and coat pockets",
      labelVi: "Áo vest nam thế kỷ 18, thợ may và túi áo khoác",
    },
    {
      key: "womens-pockets",
      labelEn: "Hidden tie-on pockets, pickpockets and the move to handbags",
      labelVi: "Túi buộc giấu, kẻ móc túi và chuyển sang túi xách",
    },
    {
      key: "laki-lecture",
      labelEn: "A seminar on volcanic haze across 18th-century Europe",
      labelVi: "Seminar về khói núi lửa lan khắp châu Âu thế kỷ 18",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-housing",
      labelEn: "A planner describing facilities on a new housing estate",
      labelVi: "Người quy hoạch mô tả tiện ích khu nhà ở mới",
    },
    {
      key: "p4-g-wrong-laki",
      labelEn: "Students comparing famine and mortality after a volcanic eruption",
      labelVi: "Sinh viên so sánh đói và tử vong sau phun trào",
    },
    {
      key: "p4-g-correct-pockets",
      labelEn:
        "A presentation on pockets — why they matter, how men's and women's pockets evolved, and the shift to pouches and handbags.",
      labelVi:
        "Bài thuyết trình về túi — vì sao quan trọng, túi nam/nữ phát triển thế nào, và chuyển sang pouches và túi xách.",
      correct: true,
    },
    {
      key: "p4-g-wrong-milos",
      labelEn: "A phone call about restaurant training and staff discounts",
      labelVi: "Cuộc gọi về đào tạo và giảm giá nhân viên nhà hàng",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — subject choice",
      conversationVi: "Bài giảng — chọn đề tài",
      questionEn: "Pockets are convenient but can be overlooked by whom?",
      questionVi: "Túi tiện lợi nhưng dễ bị ai bỏ qua?",
      answerEn: "Consumers and designers.",
      answerVi: "Người tiêu dùng và nhà thiết kế.",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — men's fashion",
      conversationVi: "Bài giảng — thời trang nam",
      questionEn: "What did men start to wear in the 18th century?",
      questionVi: "Nam giới bắt đầu mặc gì vào thế kỷ 18?",
      answerEn: "Suits.",
      answerVi: "Bộ vest (suits).",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — men's fashion",
      conversationVi: "Bài giảng — thời trang nam",
      questionEn: "Who sewed pockets into the lining of men's garments?",
      questionVi: "Ai may túi vào lót áo của nam giới?",
      answerEn: "A tailor.",
      answerVi: "Thợ may (tailor).",
    },
    {
      key: "p4-q35",
      conversationEn: "Lecture — women's pockets",
      conversationVi: "Bài giảng — túi phụ nữ",
      questionEn: "Compared with men's, women's pockets were less —",
      questionVi: "So với túi nam, túi phụ nữ kém — hơn",
      answerEn: "Visible (and harder to reach).",
      answerVi: "Dễ thấy (visible) — và khó với tới hơn.",
    },
    {
      key: "p4-q36",
      conversationEn: "Lecture — women's pockets",
      conversationVi: "Bài giảng — túi phụ nữ",
      questionEn: "Women's pockets were produced in pairs using what to link them?",
      questionVi: "Túi phụ nữ được làm thành cặp, nối với nhau bằng gì?",
      answerEn: "String.",
      answerVi: "Dây (string).",
    },
    {
      key: "p4-q40",
      conversationEn: "Lecture — fashion change",
      conversationVi: "Bài giảng — thay đổi thời trang",
      questionEn: "After pouches became popular, what did women eventually carry instead?",
      questionVi: "Sau khi pouches phổ biến, phụ nữ cuối cùng mang gì?",
      answerEn: "A handbag.",
      answerVi: "Túi xách (handbag).",
    },
  ],
  memoryPlaceholder: "Ghi ý về túi nam/nữ thế kỷ 18–19, túi buộc giấu và chuyển sang túi xách…",
  transcriptCloze: CAM18_T2_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM18_T2_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM18_T2_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam18-t2-p1": CAM18_T2_P1,
  "cam18-t2-p2": CAM18_T2_P2,
  "cam18-t2-p3": CAM18_T2_P3,
  "cam18-t2-p4": CAM18_T2_P4,
};
