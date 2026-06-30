import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";

export { getIeltsFlowLessonContent } from "@/lib/listening/ielts-flow-content-registry";

/** Nội dung flow nghe hiểu IELTS — Cam 19 Test 1 (viết tay theo transcript + QnA). */
const CAM19_T1_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "school-visit",
      labelEn: "Arranging a school visit to a country park",
      labelVi: "Đặt chuyến tham quan công viên cho trường học",
    },
    {
      key: "habitats",
      labelEn: "Park habitats, wildlife and educational activities",
      labelVi: "Môi trường sống, động vật và hoạt động giáo dục trong công viên",
    },
    {
      key: "twinning",
      labelEn: "A town twinning association annual report",
      labelVi: "Báo cáo hàng năm của hiệp hội kết nghĩa",
    },
    {
      key: "food-trends",
      labelEn: "University students discussing food industry trends",
      labelVi: "Sinh viên bàn về xu hướng ngành thực phẩm",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-twinning",
      labelEn: "A guided tour of a French cheese factory for twinning members",
      labelVi: "Tham quan nhà máy phô mai ở Pháp cho hội viên kết nghĩa",
    },
    {
      key: "p1-g-wrong-lecture",
      labelEn: "A university lecture on Neolithic archaeology in Ireland",
      labelVi: "Bài giảng đại học về khảo cổ học Neolithic ở Ireland",
    },
    {
      key: "p1-g-correct-visit",
      labelEn:
        "A phone call to arrange a school group visit to a country park, covering activities, prices and practical details.",
      labelVi:
        "Cuộc gọi đặt chuyến tham quan công viên cho học sinh, gồm hoạt động, giá vé và chi tiết thực tế.",
      correct: true,
    },
    {
      key: "p1-g-wrong-food",
      labelEn: "University students discussing food industry trends",
      labelVi: "Sinh viên đại học bàn về xu hướng ngành thực phẩm",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Call — park overview",
      conversationVi: "Cuộc gọi — giới thiệu công viên",
      questionEn: "How many hectares is the park?",
      questionVi: "Công viên rộng bao nhiêu hecta?",
      answerEn: "69 hectares (170 acres).",
      answerVi: "69 hecta (170 mẫu Anh).",
    },
    {
      key: "p1-q2",
      conversationEn: "Call — wetland",
      conversationVi: "Cuộc gọi — đầm lầy",
      questionEn: "Besides lakes and ponds, what water feature flows through the park?",
      questionVi: "Ngoài hồ và ao, đặc điểm nước nào chảy qua công viên?",
      answerEn: "A stream.",
      answerVi: "Một con suối.",
    },
    {
      key: "p1-q3",
      conversationEn: "Call — science activity",
      conversationVi: "Cuộc gọi — hoạt động khoa học",
      questionEn: "In science activities, what do children collect and analyse about plants and insects?",
      questionVi: "Trong hoạt động khoa học, trẻ thu thập và phân tích gì về thực vật và côn trùng?",
      answerEn: "Data.",
      answerVi: "Dữ liệu (data).",
    },
    {
      key: "p1-q4",
      conversationEn: "Call — geography activity",
      conversationVi: "Cuộc gọi — hoạt động địa lý",
      questionEn: "What do children use together with a compass to navigate the park?",
      questionVi: "Trẻ dùng gì cùng la bàn để định hướng trong công viên?",
      answerEn: "A map.",
      answerVi: "Bản đồ.",
    },
    {
      key: "p1-q5",
      conversationEn: "Call — cost",
      conversationVi: "Cuộc gọi — chi phí",
      questionEn: "How much does it cost per child for a full-day visit (over 30 children)?",
      questionVi: "Giá mỗi trẻ cho cả ngày (trên 30 trẻ) là bao nhiêu?",
      answerEn: "£4.95 per child.",
      answerVi: "£4.95 mỗi trẻ.",
    },
    {
      key: "p1-q6",
      conversationEn: "Call — adults",
      conversationVi: "Cuộc gọi — người lớn đi kèm",
      questionEn: "Which adults can attend free of charge?",
      questionVi: "Nhóm người lớn nào được miễn phí?",
      answerEn: "Leaders and other accompanying adults.",
      answerVi: "Giáo viên/leader và người lớn đi kèm.",
    },
  ],
  memoryPlaceholder: "Ghi vài ý về công viên, hoạt động học sinh và giá vé…",
};

const CAM19_T1_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "twinning",
      labelEn: "Stanthorpe Twinning Association events and history",
      labelVi: "Sự kiện và lịch sử Hiệp hội kết nghĩa Stanthorpe",
    },
    {
      key: "malatte",
      labelEn: "A recent visit to Malatte in France",
      labelVi: "Chuyến thăm Malatte (Pháp) gần đây",
    },
    {
      key: "farley",
      labelEn: "Sunday trip to Farley House with a site map",
      labelVi: "Chuyến đi Chủ nhật tới Farley House kèm bản đồ",
    },
    {
      key: "country-park",
      labelEn: "Booking a primary school trip to a country park",
      labelVi: "Đặt chuyến tham quan công viên cho tiểu học",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-correct-programme",
      labelEn:
        "An introduction to the Stanthorpe–Malatte town-twinning programme and how residents can get involved.",
      labelVi:
        "Giới thiệu chương trình kết nghĩa Stanthorpe–Malatte và cách người dân tham gia.",
      correct: true,
    },
    {
      key: "p2-g-wrong-food",
      labelEn: "Two students designing vegan food products in a lab",
      labelVi: "Hai sinh viên thiết kế thực phẩm thuần chay trong phòng lab",
    },
    {
      key: "p2-g-correct-events",
      labelEn: "Past twinning trips, anniversary plans and fundraising events this year.",
      labelVi: "Các chuyến kết nghĩa, kế hoạch kỷ niệm và sự kiện gây quỹ trong năm.",
      correct: true,
    },
    {
      key: "p2-g-correct-farley",
      labelEn: "Guidance for the upcoming Sunday visit to Farley House, including a site map.",
      labelVi: "Hướng dẫn chuyến thăm Farley House Chủ nhật tới, kèm bản đồ khu vực.",
      correct: true,
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — Malatte visit",
      conversationVi: "Bài nói — chuyến Malatte",
      questionEn: "During the visit to Malatte, what did members especially enjoy?",
      questionVi: "Ở Malatte, hội viên thích nhất điều gì?",
      answerEn: "Experiencing a river trip (B).",
      answerVi: "Chuyến đi thuyền trên sông (B).",
    },
    {
      key: "p2-q12",
      conversationEn: "Talk — 25th anniversary",
      conversationVi: "Bài nói — kỷ niệm 25 năm",
      questionEn: "What will Stanthorpe do to mark the 25th anniversary?",
      questionVi: "Stanthorpe làm gì kỷ niệm 25 năm?",
      answerEn: "Plant a poplar tree in the museum gardens (A).",
      answerVi: "Trồng cây bạch dương trong vườn bảo tàng (A).",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — fundraising",
      conversationVi: "Bài nói — gây quỹ",
      questionEn: "Which event raised the most funds this year?",
      questionVi: "Sự kiện nào gây quỹ nhiều nhất năm nay?",
      answerEn: "The pancake evening (B).",
      answerVi: "Buổi tối bánh pancake (B).",
    },
    {
      key: "p2-q14",
      conversationEn: "Talk — host families",
      conversationVi: "Bài nói — gia đình đón khách",
      questionEn: "What are host families advised to do on the first evening?",
      questionVi: "Gia đình đón khách nên làm gì buổi tối đầu?",
      answerEn: "Have a meal at home (C).",
      answerVi: "Ăn tối tại nhà (C).",
    },
    {
      key: "p2-q15",
      conversationEn: "Talk — Saturday evening",
      conversationVi: "Bài nói — tối thứ Bảy",
      questionEn: "On Saturday evening visitors can —",
      questionVi: "Tối thứ Bảy khách có thể —",
      answerEn: "Listen to a concert (A).",
      answerVi: "Nghe hòa nhạc (A).",
    },
    {
      key: "p2-q16",
      conversationEn: "Talk — Farley House map",
      conversationVi: "Bài nói — bản đồ Farley House",
      questionEn: "Where is the farm shop on the map?",
      questionVi: "Cửa hàng nông trại ở đâu trên bản đồ?",
      answerEn: "In the far corner on the left of the old stables courtyard (G).",
      answerVi: "Góc xa bên trái sân trong nhà ổ ngựa cũ (G).",
    },
  ],
  memoryPlaceholder: "Ghi ý về chuyến Malatte, sự kiện gây quỹ và điểm trên bản đồ…",
};

const CAM19_T1_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "vegan-eggs",
      labelEn: "A vegan egg alternative made from chickpeas",
      labelVi: "Thay thế trứng thuần chay từ đậu gà",
    },
    {
      key: "bread-reuse",
      labelEn: "Reusing stale bread with 3D-printed biscuits",
      labelVi: "Tái sử dụng bánh mì cũ bằng bánh in 3D",
    },
    {
      key: "food-labels",
      labelEn: "Touch-sensitive sensors on food packaging",
      labelVi: "Cảm biến cảm ứng trên nhãn thực phẩm",
    },
    {
      key: "ceide-lecture",
      labelEn: "A lecture on the Céide Fields archaeological site",
      labelVi: "Bài giảng về di sản khảo cổ Céide Fields",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-wrong-park",
      labelEn: "A ranger explaining school visits to a country park",
      labelVi: "Nhân viên công viên giải thích chuyến tham quan cho trường",
    },
    {
      key: "p3-g-correct-projects",
      labelEn:
        "Colin and Marie compare their student food projects — vegan eggs and reusing waste bread.",
      labelVi: "Colin và Marie trao đổi dự án thực phẩm — trứng thuần chay và tái dùng bánh mì.",
      correct: true,
    },
    {
      key: "p3-g-wrong-bog",
      labelEn: "A monologue about Neolithic stone walls preserved in a bog",
      labelVi: "Bài độc thoại về tường đá Neolithic trong đầm lầy",
    },
    {
      key: "p3-g-correct-trends",
      labelEn: "They discuss smart food labels and give opinions on several food industry trends.",
      labelVi: "Hai bạn bàn nhãn thực phẩm thông minh và quan điểm về xu hướng ngành thực phẩm.",
      correct: true,
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — bread project",
      conversationVi: "Thảo luận — dự án bánh mì",
      questionEn: "Which TWO things did Colin find most satisfying about his bread reuse project?",
      questionVi: "Colin hài lòng nhất ĐIỀU GÌ về dự án tái dùng bánh mì? (chọn 2)",
      answerEn: "B — finding a good way to prevent waste; D — experimenting with designs and colours.",
      answerVi: "B — cách hay để tránh lãng phí; D — thử thiết kế và màu sắc.",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — food label sensors",
      conversationVi: "Thảo luận — cảm biến nhãn thực phẩm",
      questionEn:
        "Which TWO future uses of touch-sensitive food labels do the students agree on?",
      questionVi: "Hai bạn đồng ý hai hướng phát triển nào cho nhãn cảm ứng?",
      answerEn: "A — use on medical products in hospitals/pharmacies; E — indicate the weight of foods.",
      answerVi: "A — dùng trong bệnh viện/nhà thuốc; E — hiển thị khối lượng thực phẩm.",
    },
    {
      key: "p3-q25",
      conversationEn: "Discussion — food trends",
      conversationVi: "Thảo luận — xu hướng thực phẩm",
      questionEn: "What is the students’ opinion about using more local products?",
      questionVi: "Quan điểm của hai bạn về sản phẩm địa phương?",
      answerEn: "D — Retailers should do more to encourage this.",
      answerVi: "D — Nhà bán lẻ nên khuyến khích hơn.",
    },
    {
      key: "p3-q26",
      conversationEn: "Discussion — food trends",
      conversationVi: "Thảo luận — xu hướng thực phẩm",
      questionEn: "What is their opinion on reducing unnecessary packaging?",
      questionVi: "Quan điểm về giảm bao bì không cần thiết?",
      answerEn: "G — There should be stricter regulations about this.",
      answerVi: "G — Cần quy định chặt chẽ hơn.",
    },
    {
      key: "p3-q29",
      conversationEn: "Discussion — food trends",
      conversationVi: "Thảo luận — xu hướng thực phẩm",
      questionEn: "What do they think about ‘ghost kitchens’ for takeaway food?",
      questionVi: "Họ nghĩ gì về ‘ghost kitchens’ cho đồ mang đi?",
      answerEn: "F — Most people know little about this.",
      answerVi: "F — Phần lớn người biết rất ít về điều này.",
    },
    {
      key: "p3-q30",
      conversationEn: "Discussion — food trends",
      conversationVi: "Thảo luận — xu hướng thực phẩm",
      questionEn: "What is their opinion on using mushrooms for health concerns?",
      questionVi: "Quan điểm về dùng nấm cho vấn đề sức khỏe?",
      answerEn: "H — This could be dangerous.",
      answerVi: "H — Có thể nguy hiểm.",
    },
  ],
  memoryPlaceholder: "Ghi ý về dự án bánh mì, nhãn thực phẩm và xu hướng Colin–Marie bàn…",
};

const CAM19_T1_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "ceide",
      labelEn: "The Céide Fields Neolithic archaeological site",
      labelVi: "Di sản khảo cổ Neolithic Céide Fields",
    },
    {
      key: "bog",
      labelEn: "How bog conditions preserve ancient remains",
      labelVi: "Đầm lầy bảo quản di tích cổ",
    },
    {
      key: "neolithic-life",
      labelEn: "Neolithic farming, housing and daily life",
      labelVi: "Đời sống nông nghiệp và nhà ở thời Neolithic",
    },
    {
      key: "food-students",
      labelEn: "Students discussing food packaging technology",
      labelVi: "Sinh viên bàn công nghệ bao bì thực phẩm",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-park",
      labelEn: "A phone call about school trip prices at a country park",
      labelVi: "Cuộc gọi về giá chuyến tham quan công viên cho trường",
    },
    {
      key: "p4-g-wrong-twinning",
      labelEn: "Twinning association members planning a trip to France",
      labelVi: "Hội kết nghĩa lên kế hoạch sang Pháp",
    },
    {
      key: "p4-g-correct-lecture",
      labelEn:
        "A presentation on the Céide Fields — discovery, Neolithic settlement, farming practices and why farming ended.",
      labelVi:
        "Bài thuyết trình về Céide Fields — phát hiện, bản định Neolithic, canh tác và lý do bỏ nông nghiệp.",
      correct: true,
    },
    {
      key: "p4-g-wrong-food",
      labelEn: "Students discussing food packaging technology",
      labelVi: "Sinh viên bàn công nghệ bao bì thực phẩm",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — discovery",
      conversationVi: "Bài giảng — phát hiện",
      questionEn: "In the 1930s, what did the local teacher realise the rows of stones were?",
      questionVi: "Thập niên 1930, giáo viên địa phương nhận ra hàng đá là gì?",
      answerEn: "Walls.",
      answerVi: "Tường (walls).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — investigation",
      conversationVi: "Bài giảng — khảo sát",
      questionEn: "Who began to explore the site further about 40 years later?",
      questionVi: "Ai tiếp tục khảo sát khoảng 40 năm sau?",
      answerEn: "His son (Seamus), who had become an archaeologist.",
      answerVi: "Con trai ông (Seamus), đã trở thành khảo cổ học.",
    },
    {
      key: "p4-q34",
      conversationEn: "Lecture — preservation",
      conversationVi: "Bài giảng — bảo quản",
      questionEn: "Items are well preserved in the bog because of a lack of what?",
      questionVi: "Hiện vật bảo quản tốt trong đầm vì thiếu gì?",
      answerEn: "Oxygen.",
      answerVi: "Oxy (oxygen).",
    },
    {
      key: "p4-q35",
      conversationEn: "Lecture — Neolithic houses",
      conversationVi: "Bài giảng — nhà Neolithic",
      questionEn: "What shape were Neolithic houses (not round as often assumed)?",
      questionVi: "Nhà Neolithic hình gì (không tròn như người ta tưởng)?",
      answerEn: "Rectangular.",
      answerVi: "Hình chữ nhật.",
    },
    {
      key: "p4-q37",
      conversationEn: "Lecture — fields",
      conversationVi: "Bài giảng — cánh đồng",
      questionEn: "Each field was large enough to support a big —",
      questionVi: "Mỗi cánh đồng đủ lớn để nuôi một —",
      answerEn: "Family (extended family).",
      answerVi: "Gia đình (gia đình mở rộng).",
    },
    {
      key: "p4-q39",
      conversationEn: "Lecture — decline",
      conversationVi: "Bài giảng — suy giảm",
      questionEn: "One reason farming declined was a decline in what quality?",
      questionVi: "Một lý do canh tác suy giảm là chất lượng gì giảm?",
      answerEn: "Soil quality.",
      answerVi: "Chất đất (soil).",
    },
  ],
  memoryPlaceholder: "Ghi ý về phát hiện Céide Fields, đời sống Neolithic và lý do bỏ canh tác…",
};

export const IELTS_CAM19_T1_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam19-t1-p1": CAM19_T1_P1,
  "cam19-t1-p2": CAM19_T1_P2,
  "cam19-t1-p3": CAM19_T1_P3,
  "cam19-t1-p4": CAM19_T1_P4,
};
