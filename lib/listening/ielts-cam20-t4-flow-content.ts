import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM20_T4_P1_KEYWORD_PARAPHRASES,
  CAM20_T4_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t4-p1-intensive";
import {
  CAM20_T4_P2_KEYWORD_PARAPHRASES,
  CAM20_T4_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t4-p2-intensive";
import {
  CAM20_T4_P3_KEYWORD_PARAPHRASES,
  CAM20_T4_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t4-p3-intensive";
import {
  CAM20_T4_P4_KEYWORD_PARAPHRASES,
  CAM20_T4_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam20-t4-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 20 Test 4 (viết tay theo transcript + QnA). */
const CAM20_T4_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "family-visit",
      labelEn: "Advice for hosting a cousin's family visit",
      labelVi: "Lời khuyên khi đón họ hàng mang con tới thăm",
    },
    {
      key: "accommodation-trips",
      labelEn: "Hotel, city tours, museum, food and free activities",
      labelVi: "Khách sạn, tour thành phố, bảo tàng, ăn uống và hoạt động miễn phí",
    },
    {
      key: "stadium-tour",
      labelEn: "Rules and features of a football stadium tour",
      labelVi: "Quy định và điểm tham quan sân bóng đá",
    },
    {
      key: "handwriting",
      labelEn: "Students discussing teaching children to write by hand",
      labelVi: "Sinh viên bàn về dạy trẻ viết tay",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-stadium",
      labelEn: "A stadium guide explains safety rules for families on a football tour",
      labelVi: "Hướng dẫn viên sân bóng giải thích quy tắc an toàn cho gia đình",
    },
    {
      key: "p1-g-correct-advice",
      labelEn:
        "Sandra advises a friend on a family visit — King's Hotel, walking tour, boat trip, Science Museum, Clacton Market, theatre deals and free events.",
      labelVi:
        "Sandra tư vấn cho bạn về chuyến thăm gia đình — khách sạn King's, tour đi bộ, đi thuyền, Bảo tàng Khoa học, chợ Clacton, vé nhà hát và sự kiện miễn phí.",
      correct: true,
    },
    {
      key: "p1-g-wrong-handwriting",
      labelEn: "Two students compare benefits of handwriting for children with dyspraxia",
      labelVi: "Hai sinh viên so sánh lợi ích viết tay cho trẻ dyspraxia",
    },
    {
      key: "p1-g-wrong-birds",
      labelEn: "A research talk on birds of prey near a Zambian bird sanctuary",
      labelVi: "Bài nói nghiên cứu chim săn mồi gần khu bảo tồn chim ở Zambia",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Conversation — accommodation",
      conversationVi: "Hội thoại — chỗ ở",
      questionEn: "Which hotel on George Street does Sandra recommend?",
      questionVi: "Sandra gợi ý khách sạn nào trên George Street?",
      answerEn: "King's (Kings).",
      answerVi: "King's (Kings).",
    },
    {
      key: "p1-q2",
      conversationEn: "Conversation — accommodation",
      conversationVi: "Hội thoại — chỗ ở",
      questionEn: "Roughly how much is a family room per night?",
      questionVi: "Giá phòng gia đình mỗi đêm khoảng bao nhiêu?",
      answerEn: "£125.",
      answerVi: "£125.",
    },
    {
      key: "p1-q3",
      conversationEn: "Conversation — city tour",
      conversationVi: "Hội thoại — tour thành phố",
      questionEn: "Instead of a bus tour, what kind of tour of the city centre is suggested?",
      questionVi: "Thay vì tour xe buýt, loại tour nào quanh trung tâm được gợi ý?",
      answerEn: "A walking tour (starts in Carlton Square).",
      answerVi: "Tour đi bộ (xuất phát từ Carlton Square).",
    },
    {
      key: "p1-q4",
      conversationEn: "Conversation — old fort",
      conversationVi: "Hội thoại — pháo đài cổ",
      questionEn: "How can visitors reach the old fort?",
      questionVi: "Du khách có thể tới pháo đài cổ bằng cách nào?",
      answerEn: "By boat.",
      answerVi: "Đi thuyền (boat).",
    },
    {
      key: "p1-q5",
      conversationEn: "Conversation — Science Museum",
      conversationVi: "Hội thoại — Bảo tàng Khoa học",
      questionEn: "Which day is best to visit the Science Museum?",
      questionVi: "Ngày nào thích hợp nhất để tới Bảo tàng Khoa học?",
      answerEn: "Tuesday.",
      answerVi: "Thứ Ba (Tuesday).",
    },
    {
      key: "p1-q6",
      conversationEn: "Conversation — Science Museum",
      conversationVi: "Hội thoại — Bảo tàng Khoa học",
      questionEn: "What topic will the new exhibition cover?",
      questionVi: "Triển lãm mới sắp mở sẽ về chủ đề gì?",
      answerEn: "Space.",
      answerVi: "Không gian (space).",
    },
  ],
  memoryPlaceholder: "Ghi ý về khách sạn King's, tour đi bộ, thuyền, bảo tàng, chợ Clacton và vé rẻ…",
  transcriptCloze: CAM20_T4_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T4_P1_KEYWORD_PARAPHRASES,
};

const CAM20_T4_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "stadium-visit",
      labelEn: "Visiting City Football Club stadium with children",
      labelVi: "Tham quan sân City Football Club cùng trẻ em",
    },
    {
      key: "tour-features",
      labelEn: "New tour features and a timeline of UK football history",
      labelVi: "Tính năng tour mới và dòng thời gian lịch sử bóng đá Anh",
    },
    {
      key: "family-hotel",
      labelEn: "Recommending hotels and trips for visiting relatives",
      labelVi: "Gợi ý khách sạn và chuyến đi cho họ hàng tới thăm",
    },
    {
      key: "handwriting-class",
      labelEn: "Classroom strategies for children with dyspraxia",
      labelVi: "Chiến lược lớp học cho trẻ dyspraxia",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-correct-children",
      labelEn:
        "The guide warns parents to supervise children on stairs and in dark areas, and mentions a children's drawing competition in the café.",
      labelVi:
        "Hướng dẫn viên nhắc phụ huynh giám sát trẻ ở cầu thang và khu tối, đồng thời có cuộc thi vẽ bóng đá tại quán cà phê.",
      correct: true,
    },
    {
      key: "p2-g-wrong-family",
      labelEn: "Friends planning museum visits and vegetarian food at a market",
      labelVi: "Bạn bè lên kế hoạch thăm bảo tàng và ăn chay ở chợ",
    },
    {
      key: "p2-g-correct-tour-history",
      labelEn:
        "New VIP and audio-guide options are introduced, followed by key rule changes in UK football from 1870 to 1880.",
      labelVi:
        "Giới thiệu tour VIP và audio guide mới, rồi các thay đổi luật bóng đá Anh từ 1870 đến 1880.",
      correct: true,
    },
    {
      key: "p2-g-wrong-zambia",
      labelEn: "Researchers explain how farmers can protect chickens from birds of prey",
      labelVi: "Nhà nghiên cứu giải thích cách nông dân bảo vệ gà khỏi chim săn mồi",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — visiting with children",
      conversationVi: "Bài nói — tham quan cùng trẻ",
      questionEn:
        "Which TWO things does the speaker say about visiting the stadium with children? (11–12)",
      questionVi:
        "Hai điều nào hướng dẫn viên nói về tham quan sân cùng trẻ? (11–12)",
      answerEn: "B — children can enter a football drawing competition; C — parents must stay with children at all times.",
      answerVi: "B — trẻ tham gia cuộc thi vẽ bóng đá; C — phụ huynh phải ở cạnh trẻ mọi lúc.",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — new tour features",
      conversationVi: "Bài nói — tính năng tour mới",
      questionEn: "Which TWO stadium tour features are new this year? (13–14)",
      questionVi: "Hai tính năng tour nào mới trong năm nay? (13–14)",
      answerEn: "A — VIP tour; C — audio guide (self-guided headphones).",
      answerVi: "A — tour VIP; C — audio guide (tai nghe tự tham quan).",
    },
    {
      key: "p2-q15",
      conversationEn: "Talk — 1870",
      conversationVi: "Bài nói — năm 1870",
      questionEn: "What happened in UK football in 1870?",
      questionVi: "Điều gì xảy ra với bóng đá Anh năm 1870?",
      answerEn: "The introduction of goalkeepers (D).",
      answerVi: "Bắt đầu có thủ môn (D).",
    },
    {
      key: "p2-q16",
      conversationEn: "Talk — 1874",
      conversationVi: "Bài nói — năm 1874",
      questionEn: "What two rule changes occurred in 1874?",
      questionVi: "Hai thay đổi luật nào diễn ra năm 1874?",
      answerEn: "Referees could send players off and teams swapped ends at half-time (F).",
      answerVi: "Trọng tài được đuổi cầu thủ và hai đội đổi sân giữa hiệp (F).",
    },
    {
      key: "p2-q17",
      conversationEn: "Talk — 1875",
      conversationVi: "Bài nói — năm 1875",
      questionEn: "What change was made to the goal in 1875?",
      questionVi: "Khung thành thay đổi thế nào năm 1875?",
      answerEn: "Tape between the posts was replaced with a solid crossbar (B).",
      answerVi: "Dây giữa cột thành được thay bằng xà ngang cứng (B).",
    },
    {
      key: "p2-q18",
      conversationEn: "Talk — 1877",
      conversationVi: "Bài nói — năm 1877",
      questionEn: "What did clubs agree on in 1877?",
      questionVi: "Các câu lạc bộ thống nhất điều gì năm 1877?",
      answerEn: "A 90-minute limit for each match (H).",
      answerVi: "Giới hạn 90 phút mỗi trận (H).",
    },
  ],
  memoryPlaceholder: "Ghi ý về giám sát trẻ, tour VIP/audio guide và các mốc luật bóng đá 1870–1880…",
  transcriptCloze: CAM20_T4_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T4_P2_KEYWORD_PARAPHRASES,
};

const CAM20_T4_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "handwriting-benefits",
      labelEn: "Benefits of learning handwriting for children's development",
      labelVi: "Lợi ích học viết tay cho sự phát triển của trẻ",
    },
    {
      key: "dyspraxia-support",
      labelEn: "Helping children with dyspraxia improve their handwriting",
      labelVi: "Hỗ trợ trẻ dyspraxia cải thiện chữ viết",
    },
    {
      key: "stadium-history",
      labelEn: "A guide recounting milestones in UK football history",
      labelVi: "Hướng dẫn viên kể các cột mốc lịch sử bóng đá Anh",
    },
    {
      key: "family-trips",
      labelEn: "Planning affordable family outings in a city",
      labelVi: "Lên kế hoạch đi chơi gia đình tiết kiệm trong thành phố",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-correct-discussion",
      labelEn:
        "Two education students discuss handwriting benefits, dyspraxia support, laptops for dyslexia, exams and the future of writing by hand.",
      labelVi:
        "Hai sinh viên sư phạm bàn lợi ích viết tay, hỗ trợ dyspraxia, laptop cho dyslexia, thi cử và tương lai của viết tay.",
      correct: true,
    },
    {
      key: "p3-g-wrong-stadium",
      labelEn: "A monologue about stadium safety and a children's drawing competition",
      labelVi: "Bài độc thoại về an toàn sân vận động và cuộc thi vẽ cho trẻ",
    },
    {
      key: "p3-g-correct-surprises",
      labelEn:
        "They are surprised that handwriting improves concentration and spatial awareness, not just fine motor skills.",
      labelVi:
        "Họ ngạc nhiên viết tay giúp tập trung và nhận thức không gian, không chỉ vận động tinh.",
      correct: true,
    },
    {
      key: "p3-g-wrong-birds",
      labelEn: "A lecture on accidental deaths of birds of prey near power lines",
      labelVi: "Bài giảng về chim săn mồi chết do điện và giao thông",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — surprising benefits",
      conversationVi: "Thảo luận — lợi ích bất ngờ",
      questionEn:
        "Which TWO benefits of learning to write did both students find surprising? (21–22)",
      questionVi: "Hai lợi ích nào của viết tay khiến cả hai ngạc nhiên? (21–22)",
      answerEn: "C — improved concentration; E — improved spatial awareness.",
      answerVi: "C — tập trung tốt hơn; E — nhận thức không gian tốt hơn.",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — dyspraxia",
      conversationVi: "Thảo luận — dyspraxia",
      questionEn:
        "For children with dyspraxia, which TWO handwriting problems are easiest to correct? (23–24)",
      questionVi:
        "Với trẻ dyspraxia, hai vấn đề chữ viết nào dễ sửa nhất? (23–24)",
      answerEn: "A — not spacing letters correctly; C — applying too much pressure when writing.",
      answerVi: "A — không cách chữ đúng; C — viết quá mạnh tay.",
    },
    {
      key: "p3-q25",
      conversationEn: "Discussion — laptops for dyslexia",
      conversationVi: "Thảo luận — laptop cho dyslexia",
      questionEn: "What does the woman say about using laptops to teach writing to children with dyslexia?",
      questionVi: "Cô ấy nói gì về dạy trẻ dyslexia viết bằng laptop?",
      answerEn: "Children react more positively if they make a mistake (C).",
      answerVi: "Trẻ phản ứng tích cực hơn khi gõ sai (C).",
    },
    {
      key: "p3-q26",
      conversationEn: "Discussion — cursive vs print",
      conversationVi: "Thảo luận — chữ liền nét vs in",
      questionEn: "When discussing cursive or print writing, the woman thinks that —",
      questionVi: "Khi bàn chữ liền nét hay in, cô ấy cho rằng —",
      answerEn: "Cursive writing disadvantages a certain group of children (A).",
      answerVi: "Chữ liền nét bất lợi cho một nhóm trẻ (A).",
    },
    {
      key: "p3-q27",
      conversationEn: "Discussion — exams",
      conversationVi: "Thảo luận — thi cử",
      questionEn: "What impact does poor handwriting have on exam performance?",
      questionVi: "Chữ xấu ảnh hưởng thế nào tới kết quả thi?",
      answerEn: "There is evidence that grades are affected by poor handwriting (A).",
      answerVi: "Có bằng chứng điểm số bị ảnh hưởng bởi chữ viết kém (A).",
    },
    {
      key: "p3-q28",
      conversationEn: "Discussion — future of handwriting",
      conversationVi: "Thảo luận — tương lai viết tay",
      questionEn: "What prediction does the man make about the future of handwriting?",
      questionVi: "Anh ấy dự đoán gì về tương lai của viết tay?",
      answerEn: "Children will continue to learn to write by hand (B).",
      answerVi: "Trẻ vẫn sẽ học viết tay (B).",
    },
  ],
  memoryPlaceholder: "Ghi ý về lợi ích bất ngờ, dyspraxia, laptop, chữ liền nét và ảnh hưởng thi cử…",
  transcriptCloze: CAM20_T4_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T4_P3_KEYWORD_PARAPHRASES,
};

const CAM20_T4_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "chembe-sanctuary",
      labelEn: "Birds of prey around the Chembe Bird Sanctuary in Zambia",
      labelVi: "Chim săn mồi quanh Khu bảo tồn chim Chembe ở Zambia",
    },
    {
      key: "farmer-conflict",
      labelEn: "Threats to birds of prey and protecting farmers' chickens",
      labelVi: "Mối đe dọa chim săn mồi và bảo vệ gà của nông dân",
    },
    {
      key: "handwriting-research",
      labelEn: "Research on how handwriting affects exam grades",
      labelVi: "Nghiên cứu ảnh hưởng chữ viết tới điểm thi",
    },
    {
      key: "football-rules",
      labelEn: "Historical changes to football rules in the 1870s",
      labelVi: "Thay đổi luật bóng đá thập niên 1870",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-handwriting",
      labelEn: "Students debate whether touch typing will replace handwriting lessons",
      labelVi: "Sinh viên tranh luận gõ 10 ngón có thay bài viết tay không",
    },
    {
      key: "p4-g-correct-research",
      labelEn:
        "A presentation on birds of prey near Chembe — benefits to farmers, falling numbers, accidental deaths and ways to scare off predators.",
      labelVi:
        "Bài trình bày chim săn mồi gần Chembe — lợi ích cho nông dân, số lượng giảm, chết ngoài ý muốn và cách xua chim.",
      correct: true,
    },
    {
      key: "p4-g-wrong-stadium",
      labelEn: "A stadium tour covering VIP visits and a 360 cinema experience",
      labelVi: "Tour sân bóng gồm VIP và rạp chiếu 360 độ",
    },
    {
      key: "p4-g-wrong-hotel",
      labelEn: "Advice on booking a family room at a central city hotel",
      labelVi: "Lời khuyên đặt phòng gia đình ở khách sạn trung tâm",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — benefits to farmers",
      conversationVi: "Bài giảng — lợi ích cho nông dân",
      questionEn: "Birds of prey destroy which rodents that damage crops?",
      questionVi: "Chim săn mồi tiêu diệt loài gặm nhấm nào phá mùa màng?",
      answerEn: "Rats.",
      answerVi: "Chuột (rats).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — benefits to farmers",
      conversationVi: "Bài giảng — lợi ích cho nông dân",
      questionEn: "Birds of prey help prevent farmers from being bitten by —",
      questionVi: "Chim săn mồi giúp nông dân tránh bị cắn bởi —",
      answerEn: "Snakes.",
      answerVi: "Rắn (snakes).",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — local economy",
      conversationVi: "Bài giảng — kinh tế địa phương",
      questionEn: "Birds now support the economy by encouraging — in the area.",
      questionVi: "Chim hiện hỗ trợ kinh tế bằng cách thúc đẩy — trong vùng.",
      answerEn: "Tourism.",
      answerVi: "Du lịch (tourism).",
    },
    {
      key: "p4-q34",
      conversationEn: "Lecture — accidental deaths",
      conversationVi: "Bài giảng — chết ngoài ý muốn",
      questionEn: "Birds hunting or sleeping on roads may be killed by —",
      questionVi: "Chim săn mồi hoặc ngủ trên đường có thể chết vì —",
      answerEn: "Traffic.",
      answerVi: "Giao thông / xe cộ (traffic).",
    },
    {
      key: "p4-q35",
      conversationEn: "Lecture — power lines",
      conversationVi: "Bài giảng — đường dây điện",
      questionEn: "Electrocution from power lines is especially dangerous when there is a lot of —",
      questionVi: "Điện giật từ đường dây nguy hiểm nhất khi có nhiều —",
      answerEn: "Rain.",
      answerVi: "Mưa (rain).",
    },
    {
      key: "p4-q36",
      conversationEn: "Lecture — illegal actions",
      conversationVi: "Bài giảng — hành vi trái phép",
      questionEn: "Besides shooting birds illegally, farmers may — them.",
      questionVi: "Ngoài bắn trái phép, nông dân có thể — chim.",
      answerEn: "Poison.",
      answerVi: "Đầu độc (poison).",
    },
  ],
  memoryPlaceholder: "Ghi ý về chuột/rắn, du lịch, tai nạn giao thông, mưa, độc và cách xua chim săn mồi…",
  transcriptCloze: CAM20_T4_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM20_T4_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM20_T4_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam20-t4-p1": CAM20_T4_P1,
  "cam20-t4-p2": CAM20_T4_P2,
  "cam20-t4-p3": CAM20_T4_P3,
  "cam20-t4-p4": CAM20_T4_P4,
};
