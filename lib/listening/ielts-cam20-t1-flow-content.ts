import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM20_T1_P1_KEYWORD_PARAPHRASES,
  CAM20_T1_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t1-p1-intensive";
import {
  CAM20_T1_P2_KEYWORD_PARAPHRASES,
  CAM20_T1_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t1-p2-intensive";
import {
  CAM20_T1_P3_KEYWORD_PARAPHRASES,
  CAM20_T1_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t1-p3-intensive";
import {
  CAM20_T1_P4_KEYWORD_PARAPHRASES,
  CAM20_T1_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t1-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 20 Test 1 (viết tay theo transcript + QnA). */
const CAM20_T1_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "birthday-restaurants",
      labelEn: "Choosing a restaurant for a sister's 30th birthday",
      labelVi: "Chọn nhà hàng cho sinh nhật 30 tuổi của em gái",
    },
    {
      key: "junction-paloma",
      labelEn: "Comparing The Junction, Paloma and The Audley",
      labelVi: "So sánh The Junction, Paloma và The Audley",
    },
    {
      key: "pottery-class",
      labelEn: "Booking a beginner pottery workshop",
      labelVi: "Đăng ký lớp gốm cho người mới",
    },
    {
      key: "loneliness-study",
      labelEn: "Students preparing a presentation on loneliness",
      labelVi: "Sinh viên chuẩn bị thuyết trình về cô đơn",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-pottery",
      labelEn: "A potter explains how to use a kiln and wheel in a studio",
      labelVi: "Người làm gốm hướng dẫn dùng lò nung và bàn xoay trong xưởng",
    },
    {
      key: "p1-g-wrong-rivers",
      labelEn: "A lecture on cleaning polluted city rivers for transport",
      labelVi: "Bài giảng về làm sạch sông thành phố để vận tải",
    },
    {
      key: "p1-g-correct-restaurants",
      labelEn:
        "Friends compare three restaurants — The Junction, Paloma and The Audley — for a birthday celebration, covering location, food, prices and atmosphere.",
      labelVi:
        "Hai người bạn so sánh ba nhà hàng — The Junction, Paloma và The Audley — cho dịp sinh nhật, gồm vị trí, món ăn, giá và không khí.",
      correct: true,
    },
    {
      key: "p1-g-wrong-loneliness",
      labelEn: "Two students debate health risks linked to social isolation",
      labelVi: "Hai sinh viên tranh luận rủi ro sức khỏe do cô lập xã hội",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Conversation — The Junction",
      conversationVi: "Hội thoại — The Junction",
      questionEn: "The Junction is especially recommended for people who like what food?",
      questionVi: "The Junction được gợi ý đặc biệt cho người thích món gì?",
      answerEn: "Fish.",
      answerVi: "Cá (fish).",
    },
    {
      key: "p1-q2",
      conversationEn: "Conversation — The Junction",
      conversationVi: "Hội thoại — The Junction",
      questionEn: "Before dinner at The Junction, where can you go for a drink?",
      questionVi: "Trước bữa tối ở The Junction, bạn có thể lên đâu uống?",
      answerEn: "The roof.",
      answerVi: "Sân thượng (roof).",
    },
    {
      key: "p1-q3",
      conversationEn: "Conversation — Paloma",
      conversationVi: "Hội thoại — Paloma",
      questionEn: "What type of cuisine does Paloma serve?",
      questionVi: "Paloma phục vụ ẩm thực gì?",
      answerEn: "Spanish food (small dishes to share).",
      answerVi: "Món Tây Ban Nha (nhiều món nhỏ để chia sẻ).",
    },
    {
      key: "p1-q4",
      conversationEn: "Conversation — Paloma",
      conversationVi: "Hội thoại — Paloma",
      questionEn: "How much deposit is required to book a table at Paloma?",
      questionVi: "Đặt bàn ở Paloma cần cọc bao nhiêu?",
      answerEn: "£50.",
      answerVi: "£50.",
    },
    {
      key: "p1-q5",
      conversationEn: "Conversation — The Audley",
      conversationVi: "Hội thoại — The Audley",
      questionEn: "Where is The Audley located?",
      questionVi: "The Audley nằm ở đâu?",
      answerEn: "On the top floor of a hotel near Baxter Bridge.",
      answerVi: "Tầng trên cùng của khách sạn gần Baxter Bridge.",
    },
    {
      key: "p1-q6",
      conversationEn: "Conversation — The Audley",
      conversationVi: "Hội thoại — The Audley",
      questionEn: "How much does the set lunch cost per person at The Audley?",
      questionVi: "Set lunch ở The Audley giá bao nhiêu mỗi người?",
      answerEn: "£30 (thirty pounds).",
      answerVi: "£30 (ba mươi bảng).",
    },
  ],
  memoryPlaceholder: "Ghi ý về ba nhà hàng: vị trí, món nổi bật, giá và điểm đặc biệt…",
  transcriptCloze: CAM20_T1_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T1_P1_KEYWORD_PARAPHRASES,
};

const CAM20_T1_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "pottery-workshop",
      labelEn: "A guided visit and pottery class at Edelman Pottery",
      labelVi: "Tham quan và lớp làm gốm tại Edelman Pottery",
    },
    {
      key: "ancient-pottery",
      labelEn: "How ancient pottery helps archaeologists understand the past",
      labelVi: "Gốm cổ giúp khảo cổ học hiểu quá khứ",
    },
    {
      key: "kilns-tools",
      labelEn: "Kilns, wheels and essential potter's tools",
      labelVi: "Lò nung, bàn xoay và dụng cụ làm gốm cơ bản",
    },
    {
      key: "restaurant-tips",
      labelEn: "Friends recommending restaurants for a birthday meal",
      labelVi: "Bạn bè gợi ý nhà hàng cho bữa sinh nhật",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-correct-intro",
      labelEn:
        "Heather welcomes visitors to Edelman Pottery, explains the history and value of pottery, safety rules, and how kilns and tools work before a hands-on session.",
      labelVi:
        "Heather chào khách tại Edelman Pottery, giới thiệu lịch sử và giá trị của gốm, quy tắc an toàn, cách dùng lò nung và dụng cụ trước buổi thực hành.",
      correct: true,
    },
    {
      key: "p2-g-wrong-restaurants",
      labelEn: "A conversation comparing fish restaurants and Spanish tapas bars",
      labelVi: "Hội thoại so sánh nhà hàng cá và quán tapas Tây Ban Nha",
    },
    {
      key: "p2-g-wrong-rivers",
      labelEn: "An urban planning talk on ferry transport along city rivers",
      labelVi: "Bài nói quy hoạch về phà trên sông thành phố",
    },
    {
      key: "p2-g-wrong-loneliness",
      labelEn: "Students discussing loneliness and mental health research",
      labelVi: "Sinh viên bàn nghiên cứu cô đơn và sức khỏe tâm thần",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — pottery as art",
      conversationVi: "Bài nói — gốm như nghệ thuật",
      questionEn: "Heather says pottery differs from other art forms because it —",
      questionVi: "Heather nói gốm khác các hình thức nghệ thuật khác vì —",
      answerEn: "Lasts longer in the ground (A).",
      answerVi: "Tồn tại lâu hơn trong lòng đất (A).",
    },
    {
      key: "p2-q12",
      conversationEn: "Talk — archaeology",
      conversationVi: "Bài nói — khảo cổ",
      questionEn: "Archaeologists sometimes identify the use of ancient pottery from —",
      questionVi: "Khảo cổ học đôi khi xác định công dụng gốm cổ qua —",
      answerEn: "The marks on it — tool scratches and impressions in the clay (B).",
      answerVi: "Vết trên gốm — vết dụng cụ và hằn trên đất sét (B).",
    },
    {
      key: "p2-q14",
      conversationEn: "Talk — why pottery appeals",
      conversationVi: "Bài nói — vì sao làm gốm hấp dẫn",
      questionEn: "What does Heather value most about being a potter?",
      questionVi: "Heather coi trọng nhất điều gì khi làm gốm?",
      answerEn: "The concentration needed — its calming effect (A).",
      answerVi: "Sự tập trung cần thiết — tác dụng thư giãn (A).",
    },
    {
      key: "p2-q16",
      conversationEn: "Talk — before the workshop",
      conversationVi: "Bài nói — trước khi vào xưởng",
      questionEn: "What does Heather remind visitors to remove before starting?",
      questionVi: "Heather nhắc khách cởi/bỏ gì trước khi bắt đầu?",
      answerEn: "Watches, necklaces and other jewellery (C).",
      answerVi: "Đồng hồ, dây chuyền và trang sức khác (C).",
    },
    {
      key: "p2-q17",
      conversationEn: "Talk — kilns",
      conversationVi: "Bài nói — lò nung",
      questionEn: "Which TWO things does Heather explain about kilns?",
      questionVi: "Heather giải thích HAI điều gì về lò nung?",
      answerEn: "A — what their function is; E — what some people use instead of one (oven or fire pit).",
      answerVi: "A — chức năng của lò; E — thứ một số người dùng thay lò (lò nướng hoặc hố lửa ngoài trời).",
    },
    {
      key: "p2-q19",
      conversationEn: "Talk — tools",
      conversationVi: "Bài nói — dụng cụ",
      questionEn: "Which TWO points does Heather make about a potter's tools?",
      questionVi: "Heather nêu HAI ý gì về dụng cụ làm gốm?",
      answerEn: "C — some are essential items; E — some are available for use by participants.",
      answerVi: "C — một số là dụng cụ thiết yếu; E — xưởng cung cấp cho học viên dùng.",
    },
  ],
  memoryPlaceholder: "Ghi ý về lịch sử gốm, quy tắc an toàn, lò nung và dụng cụ cơ bản…",
  transcriptCloze: CAM20_T1_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T1_P2_KEYWORD_PARAPHRASES,
};

const CAM20_T1_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "loneliness-causes",
      labelEn: "Causes of rising loneliness in modern society",
      labelVi: "Nguyên nhân cô đơn gia tăng trong xã hội hiện đại",
    },
    {
      key: "health-risks",
      labelEn: "Health risks and evidence on loneliness research",
      labelVi: "Rủi ro sức khỏe và bằng chứng nghiên cứu về cô đơn",
    },
    {
      key: "presentation-plan",
      labelEn: "Planning a university presentation on loneliness",
      labelVi: "Lên kế hoạch thuyết trình đại học về cô đơn",
    },
    {
      key: "urban-rivers",
      labelEn: "A lecture on reclaiming polluted urban rivers",
      labelVi: "Bài giảng tái sinh sông đô thị ô nhiễm",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-wrong-pottery",
      labelEn: "A studio tour explaining kilns and pottery wheels",
      labelVi: "Tham quan xưởng gốm giới thiệu lò nung và bàn xoay",
    },
    {
      key: "p3-g-correct-discussion",
      labelEn:
        "Tamara and Dev review research on loneliness — causes, health risks, evolutionary theory — and plan their presentation on mental health and social connection.",
      labelVi:
        "Tamara và Dev rà soát nghiên cứu về cô đơn — nguyên nhân, rủi ro sức khỏe, lý thuyết tiến hóa — và lên kế hoạch thuyết trình về sức khỏe tâm thần, kết nối xã hội.",
      correct: true,
    },
    {
      key: "p3-g-wrong-restaurants",
      labelEn: "Friends choosing between three local restaurants",
      labelVi: "Bạn bè chọn giữa ba nhà hàng địa phương",
    },
    {
      key: "p3-g-wrong-delivery",
      labelEn: "A talk on using cargo bikes and drones for river deliveries",
      labelVi: "Bài nói về xe đạp chở hàng và drone giao hàng trên sông",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — causes",
      conversationVi: "Thảo luận — nguyên nhân",
      questionEn: "Which TWO things do both students believe explain the increase in loneliness?",
      questionVi: "Hai bạn đồng ý NGUYÊN NHÂN nào giải thích sự gia tăng cô đơn?",
      answerEn: "C — urban design; E — a mobile workforce (moving for work, living far from family).",
      answerVi: "C — quy hoạch đô thị; E — lực lượng lao động di chuyển (đi làm xa, sống cách gia đình/bạn).",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — health evidence",
      conversationVi: "Thảo luận — bằng chứng sức khỏe",
      questionEn: "Which TWO health risks linked to loneliness do they agree have solid evidence?",
      questionVi: "Hai bạn đồng ý rủi ro sức khỏe nào có bằng chứng vững?",
      answerEn: "A — a weakened immune system; C — cancer.",
      answerVi: "A — suy giảm miễn dịch; C — ung thư (cancer).",
    },
    {
      key: "p3-q25",
      conversationEn: "Discussion — evolutionary theory",
      conversationVi: "Thảo luận — lý thuyết tiến hóa",
      questionEn: "Which TWO opinions do both students express about the evolutionary theory of loneliness?",
      questionVi: "Hai bạn có HAI quan điểm gì về lý thuyết tiến hóa của cô đơn?",
      answerEn: "A — it has little practical relevance today; B — it needs further investigation.",
      answerVi: "A — ít giá trị thực tiễn hiện nay; B — cần nghiên cứu thêm.",
    },
    {
      key: "p3-q27",
      conversationEn: "Discussion — mental health",
      conversationVi: "Thảo luận — sức khỏe tâm thần",
      questionEn: "When comparing loneliness to depression, the students —",
      questionVi: "Khi so sánh cô đơn với trầm cảm, hai bạn —",
      answerEn: "Doubt there will ever be a medical cure for loneliness (A).",
      answerVi: "Nghi ngờ sẽ có phương pháp y học chữa cô đơn (A).",
    },
    {
      key: "p3-q28",
      conversationEn: "Discussion — presentation opening",
      conversationVi: "Thảo luận — mở đầu thuyết trình",
      questionEn: "Why do they decide to start their presentation with a personal example?",
      questionVi: "Vì sao họ mở đầu thuyết trình bằng ví dụ cá nhân?",
      answerEn: "To highlight a situation most students will recognise — loneliness at university (B).",
      answerVi: "Nhấn tình huống phần lớn sinh viên quen thuộc — cô đơn khi lên đại học (B).",
    },
    {
      key: "p3-q29",
      conversationEn: "Discussion — talking to strangers",
      conversationVi: "Thảo luận — nói chuyện với người lạ",
      questionEn: "Why do they agree talking to strangers helps with loneliness?",
      questionVi: "Vì sao họ đồng ý nói chuyện với người lạ giúp giảm cô đơn?",
      answerEn: "It creates a sense of belonging / connection with the community (A).",
      answerVi: "Tạo cảm giác thuộc về / gắn kết với cộng đồng (A).",
    },
  ],
  memoryPlaceholder: "Ghi ý về nguyên nhân cô đơn, rủi ro sức khỏe và ý tưởng mở đầu thuyết trình…",
  transcriptCloze: CAM20_T1_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T1_P3_KEYWORD_PARAPHRASES,
};

const CAM20_T1_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "river-history",
      labelEn: "Historical role and pollution of rivers in major cities",
      labelVi: "Vai trò lịch sử và ô nhiễm sông ở đô thị lớn",
    },
    {
      key: "river-recovery",
      labelEn: "Recent cleanup and wildlife returning to urban rivers",
      labelVi: "Làm sạch gần đây và động vật hoang trở lại sông thành phố",
    },
    {
      key: "riverside-development",
      labelEn: "Riverside redevelopment in London, Los Angeles and Paris",
      labelVi: "Tái phát triển ven sông ở London, Los Angeles và Paris",
    },
    {
      key: "river-transport",
      labelEn: "Using rivers for clean freight and passenger transport",
      labelVi: "Dùng sông cho vận tải hành khách và hàng hóa sạch",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-pottery",
      labelEn: "A craft workshop on firing clay in a kiln",
      labelVi: "Xưởng thủ công về nung đất sét trong lò",
    },
    {
      key: "p4-g-wrong-loneliness",
      labelEn: "A seminar on loneliness and public health policy",
      labelVi: "Hội thảo về cô đơn và chính sách y tế công",
    },
    {
      key: "p4-g-correct-lecture",
      labelEn:
        "A lecture on reclaiming urban rivers — past pollution, recent recovery, riverside development worldwide, and greener river transport for passengers and deliveries.",
      labelVi:
        "Bài giảng tái sinh sông đô thị — ô nhiễm trước đây, phục hồi gần đây, phát triển ven sông toàn cầu và vận tải sông xanh cho hành khách, giao hàng.",
      correct: true,
    },
    {
      key: "p4-g-wrong-restaurants",
      labelEn: "Advice on choosing restaurants with river views",
      labelVi: "Tư vấn chọn nhà hàng view sông",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — industrial pollution",
      conversationVi: "Bài giảng — ô nhiễm công nghiệp",
      questionEn: "Besides sewage, what on the river bank increased pollution as cities grew?",
      questionVi: "Ngoài nước thải, cơ sở ven sông nào làm ô nhiễm tăng khi đô thị phát triển?",
      answerEn: "Factories (discharging waste into the water).",
      answerVi: "Nhà máy (xả chất thải xuống sông).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — River Thames",
      conversationVi: "Bài giảng — sông Thames",
      questionEn: "In 1957, the River Thames was declared biologically —",
      questionVi: "Năm 1957, sông Thames được tuyên bố về mặt sinh học là —",
      answerEn: "Dead (too filthy to support life).",
      answerVi: "Chết (dead) — quá bẩn để nuôi sống sinh vật.",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — wildlife return",
      conversationVi: "Bài giảng — sinh vật trở lại",
      questionEn: "Besides seals, what large animal was recently seen in the Thames?",
      questionVi: "Ngoài hải cẩu, loài lớn nào gần đây được thấy trên Thames?",
      answerEn: "A whale.",
      answerVi: "Một con cá voi.",
    },
    {
      key: "p4-q34",
      conversationEn: "Lecture — riverside buildings",
      conversationVi: "Bài giảng — công trình ven sông",
      questionEn: "Old riverside warehouses are now converted into restaurants and —",
      questionVi: "Kho ven sông cũ được cải tạo thành nhà hàng và —",
      answerEn: "Apartments (with river views).",
      answerVi: "Căn hộ (view sông).",
    },
    {
      key: "p4-q37",
      conversationEn: "Lecture — Paris",
      conversationVi: "Bài giảng — Paris",
      questionEn: "In Paris each summer, what are created on the sides of the river?",
      questionVi: "Mỗi hè ở Paris, người ta tạo gì hai bên bờ sông?",
      answerEn: "Beaches (with deck chairs and palm trees).",
      answerVi: "Bãi biển (có ghế tắm nắng và cây cọ).",
    },
    {
      key: "p4-q39",
      conversationEn: "Lecture — deliveries",
      conversationVi: "Bài giảng — giao hàng",
      questionEn: "After freight barges dock, how might parcels reach their final destination in Amsterdam?",
      questionVi: "Sau khi sà lan cập bến, hàng có thể tới đích cuối ở Amsterdam bằng gì?",
      answerEn: "Electric cargo bikes (and possibly drones in future).",
      answerVi: "Xe đạp chở hàng điện (và có thể drone trong tương lai).",
    },
  ],
  memoryPlaceholder: "Ghi ý về lịch sử ô nhiễm, phục hồi sông, dự án ven sông và vận tải sông…",
  transcriptCloze: CAM20_T1_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T1_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM20_T1_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam20-t1-p1": CAM20_T1_P1,
  "cam20-t1-p2": CAM20_T1_P2,
  "cam20-t1-p3": CAM20_T1_P3,
  "cam20-t1-p4": CAM20_T1_P4,
};
