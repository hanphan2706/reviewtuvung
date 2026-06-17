import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";

/** Nội dung flow nghe hiểu IELTS — Cam 19 Test 3 (viết tay theo transcript + QnA). */
const CAM19_T3_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "food-shops",
      labelEn: "Local food shops around Kite Place harbour",
      labelVi: "Cửa hàng thực phẩm quanh bến cảng Kite Place",
    },
    {
      key: "shopping-tips",
      labelEn: "Where to buy fish, organic produce and bread for guests",
      labelVi: "Mua cá, hữu cơ và bánh mì cho khách ở đâu",
    },
    {
      key: "book-festival",
      labelEn: "A radio preview of a children's book festival",
      labelVi: "Giới thiệu radio lễ hội sách thiếu nhi",
    },
    {
      key: "science-lab",
      labelEn: "Two teachers planning a mouse diet experiment",
      labelVi: "Hai giáo viên lên kế hoạch thí nghiệm chế độ ăn cho chuột",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-festival",
      labelEn: "A festival organiser describing creative writing workshops",
      labelVi: "Người tổ chức lễ hội mô tả workshop viết sáng tạo",
    },
    {
      key: "p1-g-correct-shops",
      labelEn:
        "Leon guides Shannon around Kite Place food shops — fish market, organic Rose, bakery and minibus to the supermarket.",
      labelVi:
        "Leon hướng dẫn Shannon các cửa hàng ở Kite Place — chợ cá, cửa hàng hữu cơ Rose, tiệm bánh và xe buýt nhỏ tới siêu thị.",
      correct: true,
    },
    {
      key: "p1-g-wrong-microplastics",
      labelEn: "A university lecture on microplastics in soil",
      labelVi: "Bài giảng đại học về vi nhựa trong đất",
    },
    {
      key: "p1-g-correct-ingredients",
      labelEn:
        "They discuss prawns, samphire, melon, coconut spices and strawberry tarts for Shannon's curry meal.",
      labelVi:
        "Hai người bàn tôm, samphire, dưa gang, gia vị dừa và bánh tart dâu cho bữa cà ri của Shannon.",
      correct: true,
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Conversation — Kite Place",
      conversationVi: "Hội thoại — Kite Place",
      questionEn: "Kite Place is near the —",
      questionVi: "Kite Place nằm gần —",
      answerEn: "Harbour.",
      answerVi: "Bến cảng (harbour).",
    },
    {
      key: "p1-q2",
      conversationEn: "Conversation — fish market",
      conversationVi: "Hội thoại — chợ cá",
      questionEn: "To reach the fish market, Shannon must cross the —",
      questionVi: "Để tới chợ cá, Shannon phải băng qua —",
      answerEn: "Bridge.",
      answerVi: "Cầu (bridge).",
    },
    {
      key: "p1-q3",
      conversationEn: "Conversation — closing time",
      conversationVi: "Hội thoại — giờ đóng cửa",
      questionEn: "Leon recommends arriving before — p.m.",
      questionVi: "Leon khuyên nên tới trước — giờ chiều.",
      answerEn: "3.30 (half past three).",
      answerVi: "3 giờ 30 (3.30).",
    },
    {
      key: "p1-q4",
      conversationEn: "Conversation — organic shop",
      conversationVi: "Hội thoại — cửa hàng hữu cơ",
      questionEn: "The organic shop is called —",
      questionVi: "Cửa hàng hữu cơ tên là —",
      answerEn: "Rose.",
      answerVi: "Rose.",
    },
    {
      key: "p1-q7",
      conversationEn: "Conversation — fish market extras",
      conversationVi: "Hội thoại — món thêm ở chợ cá",
      questionEn: "Leon suggests trying samphire, which is a type of —",
      questionVi: "Leon gợi ý thử samphire, một loại —",
      answerEn: "Seaweed.",
      answerVi: "Rong biển (seaweed).",
    },
    {
      key: "p1-q10",
      conversationEn: "Conversation — bakery",
      conversationVi: "Hội thoại — tiệm bánh",
      questionEn: "The best tarts at the bakery are — ones.",
      questionVi: "Bánh tart ngon nhất ở tiệm bánh là loại —",
      answerEn: "Strawberry.",
      answerVi: "Dâu (strawberry).",
    },
  ],
  memoryPlaceholder: "Ghi ý về harbour, chợ cá, cửa hàng Rose, minibus tím và các món mua…",
};

const CAM19_T3_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "workshops",
      labelEn: "Children's book festival workshops and reading tips",
      labelVi: "Workshop lễ hội sách thiếu nhi và mẹo đọc sách",
    },
    {
      key: "superheroes",
      labelEn: "Workshops for deaf children and mental-health writing",
      labelVi: "Workshop cho trẻ khiếm thính và viết về sức khỏe tâm thần",
    },
    {
      key: "food-shopping",
      labelEn: "Shopping for seafood and organic food at the harbour",
      labelVi: "Mua hải sản và thực phẩm hữu cơ ở bến cảng",
    },
    {
      key: "mice-experiment",
      labelEn: "Designing a classroom experiment with mice and sugar",
      labelVi: "Thiết kế thí nghiệm lớp học với chuột và đường",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-correct-workshops",
      labelEn:
        "Jenny Morgan previews festival workshops — Superheroes, Just do it, Count on me, Speak up, Jump for joy and Sticks and stones.",
      labelVi:
        "Jenny Morgan giới thiệu workshop lễ hội — Superheroes, Just do it, Count on me, Speak up, Jump for joy và Sticks and stones.",
      correct: true,
    },
    {
      key: "p2-g-wrong-shops",
      labelEn: "Neighbours comparing local fish markets and bakeries",
      labelVi: "Hàng xóm so sánh chợ cá và tiệm bánh địa phương",
    },
    {
      key: "p2-g-correct-book-advice",
      labelEn:
        "Jenny recommends Alive and Kicking and gives parents advice on shared reading, audio books and librarians.",
      labelVi:
        "Jenny giới thiệu Alive and Kicking và khuyên phụ huynh đọc cùng con, nghe sách nói và hỏi thủ thư.",
      correct: true,
    },
    {
      key: "p2-g-wrong-lecture",
      labelEn: "A science lecture on microplastic pollution",
      labelVi: "Bài giảng khoa học về ô nhiễm vi nhựa",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — Superheroes workshop",
      conversationVi: "Bài nói — workshop Superheroes",
      questionEn: "The Superheroes workshop is aimed at children with a —",
      questionVi: "Workshop Superheroes dành cho trẻ có —",
      answerEn: "Disability (deaf children) (C).",
      answerVi: "Khuyết tật (trẻ khiếm thính) (C).",
    },
    {
      key: "p2-q12",
      conversationEn: "Talk — Just do it",
      conversationVi: "Bài nói — Just do it",
      questionEn: "The ‘Just do it’ workshop involves a — activity.",
      questionVi: "Workshop ‘Just do it’ có hoạt động —",
      answerEn: "Drama (role play) (D).",
      answerVi: "Kịch / nhập vai (D).",
    },
    {
      key: "p2-q14",
      conversationEn: "Talk — Speak up",
      conversationVi: "Bài nói — Speak up",
      questionEn: "‘Speak up’ explores the feeling of —",
      questionVi: "‘Speak up’ khám phá cảm giác —",
      answerEn: "Loneliness (G).",
      answerVi: "Cô đơn (G).",
    },
    {
      key: "p2-q17",
      conversationEn: "Talk — Alive and Kicking",
      conversationVi: "Bài nói — Alive and Kicking",
      questionEn: "Jenny recommends Alive and Kicking because it is funny and deals with —",
      questionVi: "Jenny giới thiệu Alive and Kicking vì hài hước và đề cập —",
      answerEn: "An important topic (immigration) (D and E).",
      answerVi: "Chủ đề quan trọng (nhập cư) (D và E).",
    },
    {
      key: "p2-q19",
      conversationEn: "Talk — parent advice",
      conversationVi: "Bài nói — lời khuyên cho phụ huynh",
      questionEn: "Jenny tells parents to let children listen to —",
      questionVi: "Jenny khuyên phụ huynh cho con nghe —",
      answerEn: "Audio books (B).",
      answerVi: "Sách nói (audio books) (B).",
    },
    {
      key: "p2-q20",
      conversationEn: "Talk — librarians",
      conversationVi: "Bài nói — thủ thư",
      questionEn: "Jenny suggests librarians can help parents find —",
      questionVi: "Jenny gợi ý thủ thư có thể giúp phụ huynh tìm —",
      answerEn: "New authors and genres (C).",
      answerVi: "Tác giả và thể loại mới (C).",
    },
  ],
  memoryPlaceholder: "Ghi ý về từng workshop, Alive and Kicking và lời khuyên cho phụ huynh…",
};

const CAM19_T3_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "teaching-practice",
      labelEn: "Student teachers planning a Year 12 science experiment",
      labelVi: "Sinh viên sư phạm lên kế hoạch thí nghiệm khoa học lớp 12",
    },
    {
      key: "mice-sugar",
      labelEn: "A mouse experiment on sugar intake and exercise",
      labelVi: "Thí nghiệm chuột về lượng đường và vận động",
    },
    {
      key: "children-diet",
      labelEn: "Recording children's diets linked to medical records",
      labelVi: "Ghi chế độ ăn trẻ em kèm hồ sơ y tế",
    },
    {
      key: "book-festival",
      labelEn: "A children's literature festival on the radio",
      labelVi: "Lễ hội văn học thiếu nhi trên radio",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-correct-engagement",
      labelEn:
        "Clare struggles with disengaged Year 12 students; Jake helps her design a practical mouse experiment on diet control.",
      labelVi:
        "Clare gặp khó với học sinh lớp 12 thiếu hứng thú; Jake giúp thiết kế thí nghiệm chuột về kiểm soát chế độ ăn.",
      correct: true,
    },
    {
      key: "p3-g-wrong-diet-records",
      labelEn: "They successfully plan a project using children's full medical records",
      labelVi: "Hai người lên kế hoạch dùng đầy đủ hồ sơ y tế của trẻ em",
    },
    {
      key: "p3-g-correct-procedure",
      labelEn:
        "They agree on mice groups, food colouring tags, cereal with sugar, weighing chambers and weekly measurements.",
      labelVi:
        "Hai người thống nhất nhóm chuột, đánh dấu bằng phẩm màu thực phẩm, ngũ cốc có đường, buồng cân và đo hàng tuần.",
      correct: true,
    },
    {
      key: "p3-g-wrong-harbour",
      labelEn: "Friends giving directions to a harbour fish market",
      labelVi: "Bạn bè chỉ đường tới chợ cá bến cảng",
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — Year 12 class",
      conversationVi: "Thảo luận — lớp Year 12",
      questionEn: "How does Clare feel about her Year 12 science class?",
      questionVi: "Clare cảm thấy thế nào về lớp khoa học Year 12?",
      answerEn: "Frustrated at their lack of interest (C).",
      answerVi: "Bực vì học sinh thiếu hứng thú (C).",
    },
    {
      key: "p3-q22",
      conversationEn: "Discussion — children's diet idea",
      conversationVi: "Thảo luận — ý tưởng chế độ ăn trẻ",
      questionEn: "Why does Jake reject Clare's children's diet experiment?",
      questionVi: "Vì sao Jake không đồng ý thí nghiệm chế độ ăn trẻ em?",
      answerEn: "Medical data would be difficult to obtain (B).",
      answerVi: "Khó lấy dữ liệu y tế (B).",
    },
    {
      key: "p3-q24",
      conversationEn: "Discussion — research question",
      conversationVi: "Thảo luận — câu hỏi nghiên cứu",
      questionEn: "What question will the experiment address?",
      questionVi: "Thí nghiệm sẽ trả lời câu hỏi gì?",
      answerEn: "Whether mice can control their own diet (A).",
      answerVi: "Chuột có tự kiểm soát chế độ ăn không (A).",
    },
    {
      key: "p3-q26",
      conversationEn: "Discussion — mice selection",
      conversationVi: "Thảo luận — chọn chuột",
      questionEn: "The mice should all be the same —",
      questionVi: "Các con chuột phải cùng —",
      answerEn: "Age (C).",
      answerVi: "Tuổi (C).",
    },
    {
      key: "p3-q28",
      conversationEn: "Discussion — feeding group B",
      conversationVi: "Thảo luận — cho nhóm B ăn",
      questionEn: "Group B receives extra sugar contained in —",
      questionVi: "Nhóm B nhận thêm đường trong —",
      answerEn: "Cereal (E).",
      answerVi: "Ngũ cốc (cereal) (E).",
    },
    {
      key: "p3-q29",
      conversationEn: "Discussion — weighing",
      conversationVi: "Thảo luận — cân",
      questionEn: "A weighing chamber prevents mice from —",
      questionVi: "Buồng cân ngăn chuột —",
      answerEn: "Escaping (B).",
      answerVi: "Chạy thoát (B).",
    },
  ],
  memoryPlaceholder: "Ghi ý về học sinh thiếu hứng thú, nhóm chuột, đường trong ngũ cốc và cách cân…",
};

const CAM19_T3_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "microplastics",
      labelEn: "Microplastics in freshwater, soil and food chains",
      labelVi: "Vi nhựa trong nước ngọt, đất và chuỗi thực phẩm",
    },
    {
      key: "earthworms",
      labelEn: "How microplastics affect earthworms and plant growth",
      labelVi: "Vi nhựa ảnh hưởng giun đất và sinh trưởng thực vật",
    },
    {
      key: "clothing-fibres",
      labelEn: "Microfibres from washing synthetic clothes",
      labelVi: "Sợi vi từ giặt quần áo tổng hợp",
    },
    {
      key: "tree-planting",
      labelEn: "Large-scale reforestation and mangrove restoration",
      labelVi: "Trồng rừng quy mô lớn và phục hồi rừng ngập mặn",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-correct-sources",
      labelEn:
        "A lecture on where microplastics come from — clothing fibres, tyre wear, industry — and their effects on wildlife and humans.",
      labelVi:
        "Bài giảng nguồn vi nhựa — sợi quần áo, lốp xe, công nghiệp — và tác động lên động vật và con người.",
      correct: true,
    },
    {
      key: "p4-g-wrong-bookshop",
      labelEn: "Students packing books for storage before a work placement",
      labelVi: "Sinh viên đóng gói sách trước kỳ thực tập",
    },
    {
      key: "p4-g-correct-earthworm-study",
      labelEn:
        "Anglia Ruskin researchers found microplastics harmed earthworms, reduced seed germination and increased soil acid.",
      labelVi:
        "Nhóm Anglia Ruskin phát hiện vi nhựa làm giun đất suy yếu, giảm nảy mầm hạt và tăng axit trong đất.",
      correct: true,
    },
    {
      key: "p4-g-wrong-running",
      labelEn: "A podcast coach giving tips to new runners",
      labelVi: "Huấn luyện viên podcast khuyên người mới chạy bộ",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — sources",
      conversationVi: "Bài giảng — nguồn",
      questionEn: "Microfibres detach from synthetic — during washing.",
      questionVi: "Sợi vi bong từ — tổng hợp khi giặt.",
      answerEn: "Clothing.",
      answerVi: "Quần áo (clothing).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — wildlife harm",
      conversationVi: "Bài giảng — hại động vật",
      questionEn: "Microplastics damage wildlife — and digestive systems.",
      questionVi: "Vi nhựa làm hại — và hệ tiêu hóa của động vật hoang dã.",
      answerEn: "Mouths.",
      answerVi: "Miệng (mouths).",
    },
    {
      key: "p4-q34",
      conversationEn: "Lecture — legislation",
      conversationVi: "Bài giảng — pháp luật",
      questionEn: "Microbeads are banned in skin products and — in some countries.",
      questionVi: "Hạt vi bị cấm trong mỹ phẩm da và — ở một số nước.",
      answerEn: "Toothpaste.",
      answerVi: "Kem đánh răng (toothpaste).",
    },
    {
      key: "p4-q36",
      conversationEn: "Lecture — earthworm role",
      conversationVi: "Bài giảng — vai trò giun đất",
      questionEn: "Earthworms add — to soil by feeding on it.",
      questionVi: "Giun đất bổ sung — cho đất khi ăn đất.",
      answerEn: "Nutrients.",
      answerVi: "Dinh dưỡng (nutrients).",
    },
    {
      key: "p4-q38",
      conversationEn: "Lecture — study results",
      conversationVi: "Bài giảng — kết quả nghiên cứu",
      questionEn: "After ingesting microplastics, earthworms lost — rapidly.",
      questionVi: "Sau khi nuốt vi nhựa, giun đất giảm — nhanh chóng.",
      answerEn: "Weight.",
      answerVi: "Cân nặng (weight).",
    },
    {
      key: "p4-q40",
      conversationEn: "Lecture — conclusion",
      conversationVi: "Bài giảng — kết luận",
      questionEn: "Soil impoverishment harms ecosystems and —",
      questionVi: "Đất nghèo dinh dưỡng gây hại hệ sinh thái và —",
      answerEn: "Society.",
      answerVi: "Xã hội (society).",
    },
  ],
  memoryPlaceholder: "Ghi ý về nguồn vi nhựa, giun đất, giảm nảy mầm và axit trong đất…",
};

export const IELTS_CAM19_T3_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam19-t3-p1": CAM19_T3_P1,
  "cam19-t3-p2": CAM19_T3_P2,
  "cam19-t3-p3": CAM19_T3_P3,
  "cam19-t3-p4": CAM19_T3_P4,
};
