import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM20_T2_P1_KEYWORD_PARAPHRASES,
  CAM20_T2_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t2-p1-intensive";
import {
  CAM20_T2_P2_KEYWORD_PARAPHRASES,
  CAM20_T2_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t2-p2-intensive";
import {
  CAM20_T2_P3_KEYWORD_PARAPHRASES,
  CAM20_T2_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t2-p3-intensive";
import {
  CAM20_T2_P4_KEYWORD_PARAPHRASES,
  CAM20_T2_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t2-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 20 Test 2 (viết tay theo transcript + QnA). */
const CAM20_T2_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "council-carer-support",
      labelEn: "Council practical support for carers looking after elderly relatives at home",
      labelVi: "Hỗ trợ thực tế của hội đồng cho người chăm sóc người già tại nhà",
    },
    {
      key: "needs-assessment",
      labelEn: "Needs assessment — daily tasks, memory problems and financial help",
      labelVi: "Đánh giá nhu cầu — công việc hàng ngày, trí nhớ và hỗ trợ tài chính",
    },
    {
      key: "carer-break",
      labelEn: "Getting a break from caring and reducing carer stress",
      labelVi: "Nghỉ ngơi khỏi công việc chăm sóc và giảm căng thẳng cho người chăm",
    },
    {
      key: "town-volunteers",
      labelEn: "Recruiting volunteers for town festivals and community events",
      labelVi: "Tuyển tình nguyện viên cho lễ hội và sự kiện cộng đồng trong thị trấn",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-volunteers",
      labelEn: "A council officer recruiting volunteers for concerts and festivals",
      labelVi: "Cán bộ hội đồng tuyển tình nguyện viên cho hòa nhạc và lễ hội",
    },
    {
      key: "p1-g-wrong-geography",
      labelEn: "Two students choosing a human geography assignment topic",
      labelVi: "Hai sinh viên chọn đề tài bài tập địa lý nhân văn",
    },
    {
      key: "p1-g-correct-carer-support",
      labelEn:
        "Tom explains how the local council can assess a carer's needs and offer practical support — breaks, transport costs, housework help and stress advice.",
      labelVi:
        "Tom giải thích cách hội đồng địa phương đánh giá nhu cầu người chăm sóc và hỗ trợ thực tế — nghỉ ngơi, chi phí đi lại, việc nhà và tư vấn giảm căng thẳng.",
      correct: true,
    },
    {
      key: "p1-g-wrong-food-trends",
      labelEn: "A lecture on how social media drives new food fashions",
      labelVi: "Bài giảng về cách mạng xã hội thúc đẩy xu hướng thực phẩm mới",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Conversation — council support",
      conversationVi: "Hội thoại — hỗ trợ hội đồng",
      questionEn: "Besides time for other responsibilities, what can practical council support give a carer?",
      questionVi: "Ngoài thời gian cho trách nhiệm khác, hỗ trợ thực tế của hội đồng có thể cho người chăm điều gì?",
      answerEn: "A break.",
      answerVi: "Một khoảng nghỉ (break).",
    },
    {
      key: "p1-q2",
      conversationEn: "Conversation — assessment",
      conversationVi: "Hội thoại — đánh giá",
      questionEn: "During the needs assessment, what will they ask about regarding the amount of caring?",
      questionVi: "Trong buổi đánh giá nhu cầu, họ sẽ hỏi về lượng gì liên quan đến việc chăm sóc?",
      answerEn: "Time (how much time is spent caring each day).",
      answerVi: "Thời gian (mỗi ngày dành bao nhiêu thời gian chăm sóc).",
    },
    {
      key: "p1-q3",
      conversationEn: "Conversation — daily tasks",
      conversationVi: "Hội thoại — công việc hàng ngày",
      questionEn: "What morning personal-care task does the woman help her mother with?",
      questionVi: "Buổi sáng người phụ nữ giúp mẹ việc chăm sóc cá nhân nào?",
      answerEn: "Getting into the shower.",
      answerVi: "Tắm (getting into the shower).",
    },
    {
      key: "p1-q5",
      conversationEn: "Conversation — difficulties",
      conversationVi: "Hội thoại — khó khăn",
      questionEn: "What problem related to memory has the woman noticed in her mother?",
      questionVi: "Vấn đề liên quan trí nhớ nào người phụ nữ nhận thấy ở mẹ?",
      answerEn: "Loss of memory (she might forget to eat or be unsure what day it is).",
      answerVi: "Suy giảm trí nhớ (có thể quên ăn hoặc không rõ hôm nay là thứ mấy).",
    },
    {
      key: "p1-q8",
      conversationEn: "Conversation — transport costs",
      conversationVi: "Hội thoại — chi phí đi lại",
      questionEn: "What transport cost example does Tom mention the council might cover?",
      questionVi: "Tom nêu ví dụ chi phí đi lại nào hội đồng có thể chi trả?",
      answerEn: "The cost of a taxi.",
      answerVi: "Chi phí taxi.",
    },
    {
      key: "p1-q10",
      conversationEn: "Conversation — wellbeing",
      conversationVi: "Hội thoại — sức khỏe tinh thần",
      questionEn: "What does the council may help reduce for carers?",
      questionVi: "Hội đồng có thể giúp giảm điều gì cho người chăm sóc?",
      answerEn: "Stress.",
      answerVi: "Căng thẳng (stress).",
    },
  ],
  memoryPlaceholder: "Ghi ý về đánh giá nhu cầu, công việc chăm sóc hàng ngày, hỗ trợ tài chính và giảm stress…",
  transcriptCloze: CAM20_T2_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T2_P1_KEYWORD_PARAPHRASES,
};

const CAM20_T2_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "volunteer-scheme",
      labelEn: "Elmley Town Council volunteer scheme and community welcome",
      labelVi: "Chương trình tình nguyện Hội đồng thị trấn Elmley và đón tiếp cộng đồng",
    },
    {
      key: "volunteer-roles",
      labelEn: "Volunteer roles — town walks, concerts, magazines and retired clubs",
      labelVi: "Vai trò tình nguyện viên — đi bộ quanh thị trấn, hòa nhạc, tạp chí và câu lạc bộ người về hưu",
    },
    {
      key: "festivals-training",
      labelEn: "Festival staffing, training dates and the annual thank-you event",
      labelVi: "Nhân sự lễ hội, lịch huấn luyện và sự kiện tri ân hàng năm",
    },
    {
      key: "elderly-carers",
      labelEn: "Council support for people caring for elderly parents at home",
      labelVi: "Hỗ trợ hội đồng cho người chăm sóc cha mẹ già tại nhà",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-wrong-carers",
      labelEn: "Friends discussing council financial help for family carers",
      labelVi: "Bạn bè bàn về hỗ trợ tài chính hội đồng cho người chăm gia đình",
    },
    {
      key: "p2-g-correct-volunteers",
      labelEn:
        "Steve Wainwright introduces Elmley's volunteer scheme — town-centre help, concerts, community groups, magazine feedback, retired lunches, website publicity and festival duties.",
      labelVi:
        "Steve Wainwright giới thiệu chương trình tình nguyện Elmley — hỗ trợ trung tâm thị trấn, hòa nhạc, nhóm cộng đồng, phản hồi tạp chí, bữa trưa người về hưu, quảng bá website và nhiệm vụ lễ hội.",
      correct: true,
    },
    {
      key: "p2-g-wrong-geography",
      labelEn: "Students comparing urban problems and sustainable city projects",
      labelVi: "Sinh viên so sánh vấn đề đô thị và dự án thành phố bền vững",
    },
    {
      key: "p2-g-wrong-food",
      labelEn: "A marketing lecture on avocado and oat milk campaigns",
      labelVi: "Bài giảng marketing về chiến dịch bơ và sữa yến mạch",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — town centre",
      conversationVi: "Bài nói — trung tâm thị trấn",
      questionEn: "What is the volunteers' role when walking around the town centre?",
      questionVi: "Vai trò tình nguyện viên khi đi bộ quanh trung tâm thị trấn là gì?",
      answerEn: "Giving advice to visitors (D).",
      answerVi: "Tư vấn cho du khách (D).",
    },
    {
      key: "p2-q12",
      conversationEn: "Talk — concerts",
      conversationVi: "Bài nói — hòa nhạc",
      questionEn: "What do volunteers do at concerts?",
      questionVi: "Tình nguyện viên làm gì tại các buổi hòa nhạc?",
      answerEn: "Helping people find their seats (I).",
      answerVi: "Giúp khán giả tìm chỗ ngồi (I).",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — community groups",
      conversationVi: "Bài nói — nhóm cộng đồng",
      questionEn: "What is the volunteers' role with community groups?",
      questionVi: "Vai trò tình nguyện viên với các nhóm cộng đồng là gì?",
      answerEn: "Encouraging cooperation between local organisations (H).",
      answerVi: "Khuyến khích hợp tác giữa các tổ chức địa phương (H).",
    },
    {
      key: "p2-q17",
      conversationEn: "Talk — festivals",
      conversationVi: "Bài nói — lễ hội",
      questionEn: "Which event requires the largest number of volunteers?",
      questionVi: "Sự kiện nào cần nhiều tình nguyện viên nhất?",
      answerEn: "The science festival (B).",
      answerVi: "Lễ hội khoa học (B).",
    },
    {
      key: "p2-q18",
      conversationEn: "Talk — requirements",
      conversationVi: "Bài nói — yêu cầu",
      questionEn: "What is the most important requirement for festival volunteers?",
      questionVi: "Yêu cầu quan trọng nhất với tình nguyện viên lễ hội là gì?",
      answerEn: "Interpersonal skills (A).",
      answerVi: "Kỹ năng giao tiếp (A).",
    },
    {
      key: "p2-q20",
      conversationEn: "Talk — thank-you event",
      conversationVi: "Bài nói — sự kiện tri ân",
      questionEn: "What is the next annual event for volunteers?",
      questionVi: "Sự kiện tri ân hàng năm tiếp theo dành cho tình nguyện viên là gì?",
      answerEn: "A boat trip along the canal (A).",
      answerVi: "Chuyến đi thuyền dọc kênh đào (A).",
    },
  ],
  memoryPlaceholder: "Ghi ý về vai trò tình nguyện viên, ba lễ hội, yêu cầu kỹ năng và lịch huấn luyện tháng 9…",
  transcriptCloze: CAM20_T2_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T2_P2_KEYWORD_PARAPHRASES,
};

const CAM20_T2_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "assignment-topic",
      labelEn: "Choosing a human geography assignment topic and syllabus concerns",
      labelVi: "Chọn đề tài bài tập địa lý nhân văn và lo ngại về chương trình học",
    },
    {
      key: "urbanisation",
      labelEn: "Urbanisation — unemployment, conference centres and brownfield sites",
      labelVi: "Đô thị hóa — thất nghiệp, trung tâm hội nghị và khu công nghiệp bỏ hoang",
    },
    {
      key: "sustainable-cities",
      labelEn: "Sustainable city examples — Masdar City and Greenhill Abbotts",
      labelVi: "Ví dụ thành phố bền vững — Masdar City và Greenhill Abbotts",
    },
    {
      key: "volunteer-festivals",
      labelEn: "Organising volunteers for book, music and science festivals",
      labelVi: "Tổ chức tình nguyện viên cho lễ hội sách, âm nhạc và khoa học",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-wrong-volunteers",
      labelEn: "A council talk about volunteer training and festival duties",
      labelVi: "Bài nói hội đồng về huấn luyện tình nguyện viên và nhiệm vụ lễ hội",
    },
    {
      key: "p3-g-correct-assignment",
      labelEn:
        "Rosie and Colin review human geography aspects, decide on urbanisation, and discuss city problems, new outskirts developments and sustainable projects.",
      labelVi:
        "Rosie và Colin xem xét các khía cạnh địa lý nhân văn, chọn đô thị hóa, và bàn về vấn đề thành phố, phát triển ven đô và dự án bền vững.",
      correct: true,
    },
    {
      key: "p3-g-wrong-carers",
      labelEn: "A conversation about council support for elderly home care",
      labelVi: "Hội thoại về hỗ trợ hội đồng cho chăm sóc người già tại nhà",
    },
    {
      key: "p3-g-wrong-food",
      labelEn: "A lecture on influencer marketing for vegan food brands",
      labelVi: "Bài giảng về marketing influencer cho thương hiệu thực phẩm thuần chay",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — population",
      conversationVi: "Thảo luận — dân số",
      questionEn: "What is Colin and Rosie's opinion about the population aspect?",
      questionVi: "Rosie và Colin nghĩ gì về phần dân số?",
      answerEn: "It will be easy to find facts about this (D).",
      answerVi: "Sẽ dễ tìm thông tin về chủ đề này (D).",
    },
    {
      key: "p3-q22",
      conversationEn: "Discussion — health",
      conversationVi: "Thảo luận — sức khỏe",
      questionEn: "What is their opinion about the health aspect?",
      questionVi: "Họ nghĩ gì về phần sức khỏe?",
      answerEn: "The information provided was interesting (G).",
      answerVi: "Thông tin được cung cấp thú vị (G).",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — economies",
      conversationVi: "Thảo luận — kinh tế",
      questionEn: "Why might they avoid the economies aspect?",
      questionVi: "Vì sao họ có thể tránh phần kinh tế?",
      answerEn: "It may not be relevant to their course (B).",
      answerVi: "Có thể không liên quan đến khóa học (B).",
    },
    {
      key: "p3-q26",
      conversationEn: "Discussion — city problems",
      conversationVi: "Thảo luận — vấn đề thành phố",
      questionEn: "In Rosie's city, what is the main problem linked to crime?",
      questionVi: "Ở thành phố của Rosie, vấn đề chính liên quan đến tội phạm là gì?",
      answerEn: "Unemployment (C).",
      answerVi: "Thất nghiệp (C).",
    },
    {
      key: "p3-q27",
      conversationEn: "Discussion — outskirts",
      conversationVi: "Thảo luận — ven đô",
      questionEn: "What recent additions to the outskirts are both students happy about?",
      questionVi: "Cơ sở mới nào ở ven đô khiến cả hai sinh viên hài lòng?",
      answerEn: "Conference centres (A).",
      answerVi: "Trung tâm hội nghị (A).",
    },
    {
      key: "p3-q29",
      conversationEn: "Discussion — Masdar City",
      conversationVi: "Thảo luận — Masdar City",
      questionEn: "Masdar City will be used as an example of an attempt to achieve —",
      questionVi: "Masdar City sẽ được dùng làm ví dụ nỗ lực đạt được —",
      answerEn: "Sustainable energy use (B).",
      answerVi: "Sử dụng năng lượng bền vững (B).",
    },
  ],
  memoryPlaceholder: "Ghi ý về các khía cạnh địa lý nhân văn, đô thị hóa, trung tâm hội nghị và Masdar City…",
  transcriptCloze: CAM20_T2_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T2_P3_KEYWORD_PARAPHRASES,
};

const CAM20_T2_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "food-trends",
      labelEn: "How social media and marketing create new food trends",
      labelVi: "Cách mạng xã hội và marketing tạo xu hướng thực phẩm mới",
    },
    {
      key: "campaigns",
      labelEn: "Successful campaigns — avocado, oat milk and Norwegian skrei",
      labelVi: "Chiến dịch thành công — bơ, sữa yến mạch và cá skrei Na Uy",
    },
    {
      key: "influencers",
      labelEn: "Social media influencers as brand ambassadors for food products",
      labelVi: "Influencer mạng xã hội làm đại sứ thương hiệu thực phẩm",
    },
    {
      key: "urbanisation",
      labelEn: "Students discussing urbanisation and sustainable city design",
      labelVi: "Sinh viên bàn về đô thị hóa và thiết kế thành phố bền vững",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-geography",
      labelEn: "A student discussion of urban problems and conference centres",
      labelVi: "Sinh viên thảo luận vấn đề đô thị và trung tâm hội nghị",
    },
    {
      key: "p4-g-wrong-volunteers",
      labelEn: "A talk recruiting town volunteers for festivals and concerts",
      labelVi: "Bài nói tuyển tình nguyện viên thị trấn cho lễ hội và hòa nhạc",
    },
    {
      key: "p4-g-correct-food-trends",
      labelEn:
        "A lecture on developing food trends — smartphone photos, influencer marketing, supermarket tracking, and case studies of avocado, oat milk, skrei and quinoa.",
      labelVi:
        "Bài giảng về xu hướng thực phẩm — ảnh smartphone, marketing influencer, siêu thị theo dõi xu hướng, và ví dụ bơ, sữa yến mạch, skrei và quinoa.",
      correct: true,
    },
    {
      key: "p4-g-wrong-carers",
      labelEn: "Advice on council support for carers of elderly relatives",
      labelVi: "Tư vấn hỗ trợ hội đồng cho người chăm người thân già",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — social media",
      conversationVi: "Bài giảng — mạng xã hội",
      questionEn: "Interest in food fashions grew after people began sharing what on social media?",
      questionVi: "Quan tâm xu hướng thực phẩm tăng sau khi mọi người chia sẻ gì trên mạng xã hội?",
      answerEn: "Photos (photographs / pictures) of food.",
      answerVi: "Ảnh (photos / photographs / pictures) món ăn.",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — influencers",
      conversationVi: "Bài giảng — influencer",
      questionEn: "Which type of food brands grew rapidly through influencer promotion?",
      questionVi: "Loại thương hiệu thực phẩm nào tăng trưởng nhanh nhờ influencer?",
      answerEn: "Vegan food brands.",
      answerVi: "Thương hiệu thực phẩm thuần chay (vegan).",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — supermarkets",
      conversationVi: "Bài giảng — siêu thị",
      questionEn: "Supermarkets track trending ingredients and are interested in what well-known people put on menus?",
      questionVi: "Siêu thị theo dõi nguyên liệu xu hướng và quan tâm ai nổi tiếng đưa món gì lên thực đơn?",
      answerEn: "Chefs (cooks).",
      answerVi: "Đầu bếp (chefs / cooks).",
    },
    {
      key: "p4-q34",
      conversationEn: "Lecture — avocado campaign",
      conversationVi: "Bài giảng — chiến dịch bơ",
      questionEn: "Who were invited to visit avocado growers in South Africa?",
      questionVi: "Ai được mời thăm nông trại bơ ở Nam Phi?",
      answerEn: "Journalists (reporters).",
      answerVi: "Phóng viên (journalists / reporters).",
    },
    {
      key: "p4-q36",
      conversationEn: "Lecture — oat milk",
      conversationVi: "Bài giảng — sữa yến mạch",
      questionEn: "In the USA, Oatly promoted its product through which type of shops?",
      questionVi: "Tại Mỹ, Oatly quảng bá sản phẩm qua loại cửa hàng nào?",
      answerEn: "Coffee shops.",
      answerVi: "Quán cà phê (coffee shops).",
    },
    {
      key: "p4-q40",
      conversationEn: "Lecture — quinoa",
      conversationVi: "Bài giảng — quinoa",
      questionEn: "Overuse of land to grow more quinoa led to poor quality —",
      questionVi: "Khai thác đất quá mức để trồng thêm quinoa dẫn đến chất lượng kém của —",
      answerEn: "Soil.",
      answerVi: "Đất (soil).",
    },
  ],
  memoryPlaceholder: "Ghi ý về influencer, chiến dịch bơ và sữa yến mạch, skrei Na Uy và tác động của quinoa…",
  transcriptCloze: CAM20_T2_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T2_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM20_T2_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam20-t2-p1": CAM20_T2_P1,
  "cam20-t2-p2": CAM20_T2_P2,
  "cam20-t2-p3": CAM20_T2_P3,
  "cam20-t2-p4": CAM20_T2_P4,
};
