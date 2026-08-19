import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  CAM19_T4_P1_KEYWORD_PARAPHRASES,
  CAM19_T4_P1_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam19-t4-p1-intensive";
import {
  CAM19_T4_P2_KEYWORD_PARAPHRASES,
  CAM19_T4_P2_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam19-t4-p2-intensive";
import {
  CAM19_T4_P3_KEYWORD_PARAPHRASES,
  CAM19_T4_P3_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam19-t4-p3-intensive";
import {
  CAM19_T4_P4_KEYWORD_PARAPHRASES,
  CAM19_T4_P4_TRANSCRIPT_CLOZE,
} from "@/lib/listening/ielts-cam19-t4-p4-intensive";

/** Nội dung flow nghe hiểu IELTS — Cam 19 Test 4 (viết tay theo transcript + QnA). */
const CAM19_T4_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "first-day",
      labelEn: "A new supermarket worker's first-day briefing",
      labelVi: "Hướng dẫn ngày đầu làm việc ở siêu thị",
    },
    {
      key: "hr-tasks",
      labelEn: "HR paperwork, uniform, lockers and daily counter duties",
      labelVi: "Thủ tục HR, đồng phục, tủ khóa và nhiệm vụ quầy hàng",
    },
    {
      key: "running-club",
      labelEn: "A running coach podcast for beginners",
      labelVi: "Podcast huấn luyện viên chạy bộ cho người mới",
    },
    {
      key: "bookshop",
      labelEn: "Packing books and describing a grandfather's bookshop",
      labelVi: "Đóng gói sách và mô tả hiệu sách của ông ngoại",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-correct-morning",
      labelEn:
        "Supervisor Kaeden orients Charlotte — badge, locker, HR with Tiffany, uniform and his mobile number.",
      labelVi:
        "Kaeden hướng dẫn Charlotte — thẻ, tủ khóa, HR với Tiffany, đồng phục và số điện thoại của anh.",
      correct: true,
    },
    {
      key: "p1-g-wrong-marathon",
      labelEn: "A runner describing her first marathon experience",
      labelVi: "Vận động viên kể về marathon đầu tiên",
    },
    {
      key: "p1-g-correct-tasks",
      labelEn:
        "Charlotte's tasks cover bakery sell-by dates, sushi boxes, cleaning counters and restocking fish ice with gloves.",
      labelVi:
        "Nhiệm vụ của Charlotte gồm ngày hết hạn bánh, hộp sushi, vệ sinh quầy và lấy đá cho cá kèm găng tay.",
      correct: true,
    },
    {
      key: "p1-g-wrong-reforestation",
      labelEn: "A lecture on choosing trees for reforestation projects",
      labelVi: "Bài giảng chọn cây cho dự án trồng rừng lại",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Conversation — supervisor name",
      conversationVi: "Hội thoại — tên người giám sát",
      questionEn: "The supervisor's name is —",
      questionVi: "Tên người giám sát là —",
      answerEn: "Kaeden (K-A-E-D-E-N).",
      answerVi: "Kaeden (K-A-E-D-E-N).",
    },
    {
      key: "p1-q2",
      conversationEn: "Conversation — belongings",
      conversationVi: "Hội thoại — đồ cá nhân",
      questionEn: "Charlotte should leave her coat and bag in a —",
      questionVi: "Charlotte để áo khoác và ba lô trong —",
      answerEn: "Locker.",
      answerVi: "Tủ khóa (locker).",
    },
    {
      key: "p1-q5",
      conversationEn: "Conversation — HR location",
      conversationVi: "Hội thoại — vị trí HR",
      questionEn: "The HR office is on the — floor.",
      questionVi: "Phòng HR ở tầng —",
      answerEn: "Third (3rd).",
      answerVi: "Ba (third).",
    },
    {
      key: "p1-q7",
      conversationEn: "Conversation — bakery labels",
      conversationVi: "Hội thoại — nhãn bánh",
      questionEn: "Reduced-price bakery items need — labels.",
      questionVi: "Bánh giảm giá cần nhãn —",
      answerEn: "Yellow.",
      answerVi: "Vàng (yellow).",
    },
    {
      key: "p1-q9",
      conversationEn: "Conversation — fish counter",
      conversationVi: "Hội thoại — quầy cá",
      questionEn: "Charlotte must collect — for the fish from the cold-room.",
      questionVi: "Charlotte phải lấy — cho cá từ phòng lạnh.",
      answerEn: "Ice.",
      answerVi: "Đá (ice).",
    },
    {
      key: "p1-q10",
      conversationEn: "Conversation — cold-room safety",
      conversationVi: "Hội thoại — an toàn phòng lạnh",
      questionEn: "In the cold-room Charlotte must wear thermal —",
      questionVi: "Trong phòng lạnh Charlotte phải đeo găng —",
      answerEn: "Gloves.",
      answerVi: "Găng tay (gloves).",
    },
  ],
  memoryPlaceholder: "Ghi ý về Kaeden, HR tầng 3, nhãn vàng, hộp nhựa sushi và găng tay phòng lạnh…",
  transcriptCloze: CAM19_T4_P1_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM19_T4_P1_KEYWORD_PARAPHRASES,
};

const CAM19_T4_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "running-tips",
      labelEn: "A running coach's podcast for new runners",
      labelVi: "Podcast huấn luyện viên chạy bộ cho người mới",
    },
    {
      key: "club-members",
      labelEn: "Why Compton Park Runners members finally joined",
      labelVi: "Vì sao hội viên Compton Park Runners mới tham gia",
    },
    {
      key: "supermarket",
      labelEn: "First-day tasks at a supermarket bakery and fish counter",
      labelVi: "Ngày đầu làm bánh và quầy cá ở siêu thị",
    },
    {
      key: "book-packing",
      labelEn: "Students discussing how to pack books for storage",
      labelVi: "Sinh viên bàn cách đóng gói sách cất kho",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-correct-programmes",
      labelEn:
        "Liz Fuller explains limits of generic online 5K programmes and the lack of individual support for health issues.",
      labelVi:
        "Liz Fuller nói hạn chế của chương trình 5K online chung và thiếu hỗ trợ cá nhân cho người có vấn đề sức khỏe.",
      correct: true,
    },
    {
      key: "p2-g-wrong-slow",
      labelEn: "She advises beginners to run as slowly as possible at all times",
      labelVi: "Cô khuyên người mới luôn chạy càng chậm càng tốt",
    },
    {
      key: "p2-g-correct-tips",
      labelEn:
        "She recommends comfortable pace, music while running and training twice a week consistently.",
      labelVi:
        "Cô khuyên chạy ở tốc độ thoải mái, nghe nhạc khi chạy và tập đều hai buổi mỗi tuần.",
      correct: true,
    },
    {
      key: "p2-g-correct-stories",
      labelEn:
        "Members Ceri, James, Leo and Mark share what stopped them joining earlier; Liz recalls nearly quitting her marathon.",
      labelVi:
        "Ceri, James, Leo và Mark kể vì sao trước đây chưa tham gia; Liz nhớ lúc gần bỏ cuộc marathon.",
      correct: true,
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Podcast — training programmes",
      conversationVi: "Podcast — chương trình tập",
      questionEn: "Online programmes may be unsuitable for people with —",
      questionVi: "Chương trình online có thể không phù hợp người có —",
      answerEn: "Health issues (C).",
      answerVi: "Vấn đề sức khỏe (C).",
    },
    {
      key: "p2-q12",
      conversationEn: "Podcast — support",
      conversationVi: "Podcast — hỗ trợ",
      questionEn: "Another problem Liz mentions is lack of —",
      questionVi: "Vấn đề khác Liz nêu là thiếu —",
      answerEn: "Individual support (E).",
      answerVi: "Hỗ trợ cá nhân (E).",
    },
    {
      key: "p2-q15",
      conversationEn: "Podcast — Ceri",
      conversationVi: "Podcast — Ceri",
      questionEn: "What stopped Ceri joining until recently?",
      questionVi: "Điều gì khiến Ceri chưa tham gia cho tới gần đây?",
      answerEn: "A lack of confidence (A).",
      answerVi: "Thiếu tự tin (A).",
    },
    {
      key: "p2-q17",
      conversationEn: "Podcast — Leo",
      conversationVi: "Podcast — Leo",
      questionEn: "Leo worried he could not fit training into his —",
      questionVi: "Leo lo không sắp xếp được tập luyện vào —",
      answerEn: "Busy schedule / lack of time (C).",
      answerVi: "Lịch bận / thiếu thời gian (C).",
    },
    {
      key: "p2-q19",
      conversationEn: "Podcast — first marathon",
      conversationVi: "Podcast — marathon đầu",
      questionEn: "Liz says she nearly gave up halfway through her first marathon because —",
      questionVi: "Liz gần bỏ cuộc giữa marathon đầu vì —",
      answerEn: "Spectators kept her going (C — nearly gave up).",
      answerVi: "Khán giả giúp cô tiếp tục (C — gần bỏ cuộc).",
    },
    {
      key: "p2-q20",
      conversationEn: "Podcast — first race",
      conversationVi: "Podcast — cuộc đua đầu",
      questionEn: "Liz says new runners should sign up for a 5K within a few —",
      questionVi: "Liz nói người mới nên đăng ký 5K trong vài —",
      answerEn: "Weeks of taking up running (B).",
      answerVi: "Tuần sau khi bắt đầu chạy (B).",
    },
  ],
  memoryPlaceholder: "Ghi ý về chương trình online, nhạc khi chạy, câu chuyện hội viên và mốc 5K…",
  transcriptCloze: CAM19_T4_P2_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM19_T4_P2_KEYWORD_PARAPHRASES,
};

const CAM19_T4_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "packing-books",
      labelEn: "Packing books safely for long-term storage",
      labelVi: "Đóng gói sách an toàn để cất lâu dài",
    },
    {
      key: "bookshop-layout",
      labelEn: "Tour of a grandfather's bookshop layout",
      labelVi: "Tham quan bố cục hiệu sách của ông ngoại",
    },
    {
      key: "hardbacks",
      labelEn: "How to handle hardbacks and keep books on display",
      labelVi: "Cách giữ sách bìa cứng và trưng bày",
    },
    {
      key: "supermarket-hr",
      labelEn: "Collecting a uniform from supermarket HR",
      labelVi: "Nhận đồng phục từ phòng HR siêu thị",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-correct-packing",
      labelEn:
        "Jane and Kieran discuss grandfather's packing advice — support the spine, pack flat, and acid in paper.",
      labelVi:
        "Jane và Kieran bàn lời khuyên đóng gói của ông — chống gáy, xếp phẳng và axit trong giấy.",
      correct: true,
    },
    {
      key: "p3-g-wrong-throw-away",
      labelEn: "Jane decides to throw away all her grandfather's old yellowing books",
      labelVi: "Jane quyết định vứt hết sách ố vàng của ông",
    },
    {
      key: "p3-g-correct-shop",
      labelEn:
        "Jane describes the bookshop — rare books on high shelves, children's area with cushions, free books by the door.",
      labelVi:
        "Jane mô tả hiệu sách — sách hiếm trên kệ cao, khu trẻ em có gối, sách miễn phí ở cửa.",
      correct: true,
    },
    {
      key: "p3-g-wrong-running",
      labelEn: "A coach comparing online and club running schedules",
      labelVi: "Huấn luyện viên so sánh lịch chạy online và câu lạc bộ",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — packing advice",
      conversationVi: "Thảo luận — lời khuyên đóng gói",
      questionEn: "Kieran thinks the grandfather's packing advice is —",
      questionVi: "Kieran cho lời khuyên đóng gói của ông là —",
      answerEn: "Common sense (A).",
      answerVi: "Lẽ thường (common sense) (A).",
    },
    {
      key: "p3-q22",
      conversationEn: "Discussion — grandfather's books",
      conversationVi: "Thảo luận — sách của ông",
      questionEn: "Jane keeps the books because they have — value for her.",
      questionVi: "Jane giữ sách vì chúng có giá trị — với cô.",
      answerEn: "Sentimental (C).",
      answerVi: "Tình cảm (sentimental) (C).",
    },
    {
      key: "p3-q24",
      conversationEn: "Discussion — childhood memory",
      conversationVi: "Thảo luận — ký ức thuở nhỏ",
      questionEn: "Jane recalls a book falling apart when she was —",
      questionVi: "Jane nhớ một cuốn sách vỡ khi cô còn —",
      answerEn: "Small / as a child (B — significant childhood experience).",
      answerVi: "Nhỏ / thuở bé (B — trải nghiệm thuở nhỏ).",
    },
    {
      key: "p3-q26",
      conversationEn: "Discussion — rare books",
      conversationVi: "Thảo luận — sách hiếm",
      questionEn: "Rare books are kept on a — shelf so customers need a ladder.",
      questionVi: "Sách hiếm để trên kệ — nên khách cần thang.",
      answerEn: "High (D).",
      answerVi: "Cao (D).",
    },
    {
      key: "p3-q27",
      conversationEn: "Discussion — children's area",
      conversationVi: "Thảo luận — khu trẻ em",
      questionEn: "Children's books are in a dedicated space with — on the ground floor.",
      questionVi: "Sách trẻ em ở khu riêng có — ở tầng trệt.",
      answerEn: "Cushions (F — specially designed space).",
      answerVi: "Gối (F — không gian thiết kế riêng).",
    },
    {
      key: "p3-q30",
      conversationEn: "Discussion — coursebooks",
      conversationVi: "Thảo luận — sách giáo trình",
      questionEn: "College coursebooks are now kept in the — area.",
      questionVi: "Sách giáo trình trường học giờ để ở khu —",
      answerEn: "Café / coffee shop (G).",
      answerVi: "Quán cà phê (café) (G).",
    },
  ],
  memoryPlaceholder: "Ghi ý về cách đóng gói sách, kệ cao, khu trẻ em và sách giáo trình trong café…",
  transcriptCloze: CAM19_T4_P3_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM19_T4_P3_KEYWORD_PARAPHRASES,
};

const CAM19_T4_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "reforestation",
      labelEn: "Choosing species and locations for reforestation",
      labelVi: "Chọn loài cây và địa điểm trồng rừng lại",
    },
    {
      key: "mangroves",
      labelEn: "Mangrove restoration benefits in Madagascar",
      labelVi: "Lợi ích phục hồi rừng ngập mặn ở Madagascar",
    },
    {
      key: "fig-trees",
      labelEn: "Native fig trees accelerating forest recovery in Thailand",
      labelVi: "Cây sung bản địa thúc đẩy phục hồi rừng ở Thái Lan",
    },
    {
      key: "microplastics",
      labelEn: "A lecture on microplastics in agricultural soil",
      labelVi: "Bài giảng vi nhựa trong đất nông nghiệp",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-correct-principles",
      labelEn:
        "A lecture on reforestation principles — mixed native species, avoid invasives, genetic diversity and right locations.",
      labelVi:
        "Bài giảng nguyên tắc trồng rừng lại — hỗn hợp loài bản địa, tránh loài xâm lấn, đa dạng gen và chọn đúng đất.",
      correct: true,
    },
    {
      key: "p4-g-wrong-anywhere",
      labelEn: "The speaker says any open grassland is ideal for mass tree planting",
      labelVi: "Diễn giả nói đồng cỏ trống nào cũng lý tưởng để trồng cây hàng loạt",
    },
    {
      key: "p4-g-correct-examples",
      labelEn:
        "Case studies include drone-mapped Amazon damage, fig recovery in Lampang, and mangrove jobs in Madagascar.",
      labelVi:
        "Ví dụ gồm drone khảo sát Amazon, phục hồi bằng cây sung ở Lampang và việc làm rừng ngập mặn Madagascar.",
      correct: true,
    },
    {
      key: "p4-g-wrong-supermarket",
      labelEn: "A supervisor training staff on fish-counter hygiene",
      labelVi: "Giám sát viên hướng dẫn vệ sinh quầy cá",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — invasive species",
      conversationVi: "Bài giảng — loài xâm lấn",
      questionEn: "Invasive species may be in — with native species.",
      questionVi: "Loài xâm lấn có thể — với loài bản địa.",
      answerEn: "Competition.",
      answerVi: "Cạnh tranh (competition).",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — genetic diversity",
      conversationVi: "Bài giảng — đa dạng gen",
      questionEn: "Low genetic diversity reduces resistance to — and climate change.",
      questionVi: "Đa dạng gen thấp làm giảm khả năng chống — và biến đổi khí hậu.",
      answerEn: "Disease.",
      answerVi: "Bệnh (disease).",
    },
    {
      key: "p4-q35",
      conversationEn: "Lecture — planning maps",
      conversationVi: "Bài giảng — bản đồ quy hoạch",
      questionEn: "Large projects need accurate — for planning.",
      questionVi: "Dự án lớn cần — chính xác để lập kế hoạch.",
      answerEn: "Maps.",
      answerVi: "Bản đồ (maps).",
    },
    {
      key: "p4-q37",
      conversationEn: "Lecture — fig trees Thailand",
      conversationVi: "Bài giảng — cây sung Thái Lan",
      questionEn: "Fig trees accelerate recovery by attracting animals that — seeds.",
      questionVi: "Cây sung thúc đẩy phục hồi bằng cách thu hút động vật — hạt.",
      answerEn: "Disperse (natural seed dispersers).",
      answerVi: "Phân tán hạt (dispersers).",
    },
    {
      key: "p4-q38",
      conversationEn: "Lecture — monkeys",
      conversationVi: "Bài giảng — khỉ",
      questionEn: "After three rainy seasons, — visited the restored site to eat figs.",
      questionVi: "Sau ba mùa mưa, — tới khu phục hồi ăn quả sung.",
      answerEn: "Monkeys.",
      answerVi: "Khỉ (monkeys).",
    },
    {
      key: "p4-q39",
      conversationEn: "Lecture — Madagascar livelihood",
      conversationVi: "Bài giảng — sinh kế Madagascar",
      questionEn: "Mangrove loss badly affected the local — industry.",
      questionVi: "Mất rừng ngập mặn ảnh hưởng nặng ngành — địa phương.",
      answerEn: "Fishing.",
      answerVi: "Đánh cá (fishing).",
    },
  ],
  memoryPlaceholder: "Ghi ý về loài xâm lấn, drone Amazon, cây sung, khỉ và rừng ngập mặn Madagascar…",
  transcriptCloze: CAM19_T4_P4_TRANSCRIPT_CLOZE,
  keywordParaphrases: CAM19_T4_P4_KEYWORD_PARAPHRASES,
};

export const IELTS_CAM19_T4_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam19-t4-p1": CAM19_T4_P1,
  "cam19-t4-p2": CAM19_T4_P2,
  "cam19-t4-p3": CAM19_T4_P3,
  "cam19-t4-p4": CAM19_T4_P4,
};
