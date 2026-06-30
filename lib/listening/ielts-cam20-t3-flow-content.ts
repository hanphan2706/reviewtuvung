import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";

/** Nội dung flow nghe hiểu IELTS — Cam 20 Test 3 (viết tay theo transcript + QnA). */
const CAM20_T3_P1: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "furniture-rental",
      labelEn: "Comparing furniture rental companies for a new tenant",
      labelVi: "So sánh công ty cho thuê nội thất cho người thuê nhà mới",
    },
    {
      key: "costs-delivery",
      labelEn: "Monthly rental prices, delivery times and special offers",
      labelVi: "Giá thuê theo tháng, thời gian giao hàng và ưu đãi",
    },
    {
      key: "contracts-insurance",
      labelEn: "Contract length, insurance and exchange policies",
      labelVi: "Thời hạn hợp đồng, bảo hiểm và chính sách đổi trả",
    },
    {
      key: "archaeology",
      labelEn: "A community archaeology dig near a castle",
      labelVi: "Dự án khảo cổ cộng đồng gần lâu đài",
    },
  ],
  gistOptions: [
    {
      key: "p1-g-wrong-archaeology",
      labelEn: "An archaeologist explains how a gold coin was found near a castle",
      labelVi: "Khảo cổ viên giải thích cách tìm thấy đồng xu vàng gần lâu đài",
    },
    {
      key: "p1-g-wrong-theatre",
      labelEn: "Two students researching the history of theatre programmes",
      labelVi: "Hai sinh viên nghiên cứu lịch sử chương trình nhà hát",
    },
    {
      key: "p1-g-correct-rental",
      labelEn:
        "A landlord helps a tenant compare local furniture rental companies — prices, delivery, special offers, insurance and exchange policies.",
      labelVi:
        "Chủ nhà giúp người thuê so sánh các công ty cho thuê nội thất — giá, giao hàng, ưu đãi, bảo hiểm và đổi trả.",
      correct: true,
    },
    {
      key: "p1-g-wrong-inclusive",
      labelEn: "A university lecture on inclusive product design",
      labelVi: "Bài giảng đại học về thiết kế sản phẩm hòa nhập",
    },
  ],
  detailQuestions: [
    {
      key: "p1-q1",
      conversationEn: "Call — Peak Rentals",
      conversationVi: "Cuộc gọi — Peak Rentals",
      questionEn: "What is the highest monthly price per room at Peak Rentals?",
      questionVi: "Giá thuê theo tháng cao nhất mỗi phòng ở Peak Rentals là bao nhiêu?",
      answerEn: "$239 (two hundred and thirty-nine dollars).",
      answerVi: "$239 (hai trăm ba mươi chín đô-la).",
    },
    {
      key: "p1-q2",
      conversationEn: "Call — Peak Rentals",
      conversationVi: "Cuộc gọi — Peak Rentals",
      questionEn: "How is Peak Rentals' furniture described compared with other companies?",
      questionVi: "Nội thất Peak Rentals được mô tả thế nào so với công ty khác?",
      answerEn: "More modern.",
      answerVi: "Hiện đại hơn (modern).",
    },
    {
      key: "p1-q3",
      conversationEn: "Call — special offer",
      conversationVi: "Cuộc gọi — ưu đãi",
      questionEn: "What free item comes with every living room set from Peak Rentals?",
      questionVi: "Món nào được tặng kèm bộ phòng khách của Peak Rentals?",
      answerEn: "A lamp.",
      answerVi: "Một cây đèn (lamp).",
    },
    {
      key: "p1-q4",
      conversationEn: "Call — Aaron and Oliver",
      conversationVi: "Cuộc gọi — Aaron and Oliver",
      questionEn: "What is the name of the mid-range rental company?",
      questionVi: "Tên công ty cho thuê tầm trung là gì?",
      answerEn: "Aaron (and Oliver).",
      answerVi: "Aaron (và Oliver).",
    },
    {
      key: "p1-q5",
      conversationEn: "Call — Aaron and Oliver",
      conversationVi: "Cuộc gọi — Aaron and Oliver",
      questionEn: "What does Aaron and Oliver charge an extra 12% monthly fee for?",
      questionVi: "Aaron and Oliver thu thêm 12% mỗi tháng cho mục đích gì?",
      answerEn: "Damage (in case of damage).",
      answerVi: "Hư hỏng (damage — phòng trường hợp làm hỏng).",
    },
    {
      key: "p1-q6",
      conversationEn: "Call — Larch Furniture",
      conversationVi: "Cuộc gọi — Larch Furniture",
      questionEn: "Besides furniture, what else does Larch Furniture rent at the lowest prices?",
      questionVi: "Ngoài nội thất, Larch Furniture còn cho thuê gì với giá rẻ nhất?",
      answerEn: "Electronic equipment.",
      answerVi: "Thiết bị điện tử (electronic).",
    },
  ],
  memoryPlaceholder: "Ghi ý về Peak Rentals, Aaron and Oliver, Larch và Space Rentals — giá, giao hàng, bảo hiểm…",
};

const CAM20_T3_P2: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "community-dig",
      labelEn: "A community archaeology project at Bidcaster Castle",
      labelVi: "Dự án khảo cổ cộng đồng tại lâu đài Bidcaster",
    },
    {
      key: "coin-village",
      labelEn: "How a gold coin led to discovering an ancient village",
      labelVi: "Cách đồng xu vàng dẫn tới phát hiện làng cổ",
    },
    {
      key: "site-map",
      labelEn: "Site highlights and directions on an archaeological map",
      labelVi: "Điểm nổi bật và hướng dẫn trên bản đồ khai quật",
    },
    {
      key: "furniture",
      labelEn: "A tenant asking about furniture rental companies",
      labelVi: "Người thuê nhà hỏi về công ty cho thuê nội thất",
    },
  ],
  gistOptions: [
    {
      key: "p2-g-wrong-furniture",
      labelEn: "A phone call comparing furniture rental prices and delivery times",
      labelVi: "Cuộc gọi so sánh giá thuê nội thất và thời gian giao hàng",
    },
    {
      key: "p2-g-correct-dig",
      labelEn:
        "An archaeologist describes the Bidcaster community dig — the gold coin, ancient village evidence, findings and guided site tour with a map.",
      labelVi:
        "Khảo cổ viên mô tả khai quật Bidcaster — đồng xu vàng, bằng chứng làng cổ, hiện vật và tham quan kèm bản đồ.",
      correct: true,
    },
    {
      key: "p2-g-wrong-theatre",
      labelEn: "Students discussing theatre programme design through the centuries",
      labelVi: "Sinh viên bàn thiết kế chương trình nhà hát qua các thời kỳ",
    },
    {
      key: "p2-g-wrong-inclusive",
      labelEn: "A lecture on how non-inclusive design affects workplace safety",
      labelVi: "Bài giảng về thiết kế không hòa nhập ảnh hưởng an toàn nơi làm việc",
    },
  ],
  detailQuestions: [
    {
      key: "p2-q11",
      conversationEn: "Talk — project origins",
      conversationVi: "Bài nói — nguồn gốc dự án",
      questionEn: "Who was responsible for starting the community project?",
      questionVi: "Ai chịu trách nhiệm khởi xướng dự án cộng đồng?",
      answerEn: "A national charity (NHA) (B).",
      answerVi: "Một tổ chức từ thiện quốc gia (NHA) (B).",
    },
    {
      key: "p2-q12",
      conversationEn: "Talk — gold coin",
      conversationVi: "Bài nói — đồng xu vàng",
      questionEn: "How was the gold coin found?",
      questionVi: "Đồng xu vàng được tìm thấy như thế nào?",
      answerEn: "Heavy rain had removed some of the soil (A).",
      answerVi: "Mưa lớn cuốn trôi một phần đất (A).",
    },
    {
      key: "p2-q13",
      conversationEn: "Talk — ancient village",
      conversationVi: "Bài nói — làng cổ",
      questionEn: "What led archaeologists to believe there was an ancient village on this site?",
      questionVi: "Điều gì khiến khảo cổ viên tin có làng cổ tại đây?",
      answerEn: "The lucky discovery of old records/maps in the library (A).",
      answerVi: "Tình cờ tìm thấy bản đồ/tài liệu cổ trong thư viện (A).",
    },
    {
      key: "p2-q14",
      conversationEn: "Talk — findings",
      conversationVi: "Bài nói — hiện vật",
      questionEn: "What are the team still hoping to find?",
      questionVi: "Nhóm vẫn hy vọng tìm thấy gì?",
      answerEn: "Pieces of jewellery (C).",
      answerVi: "Trang sức (C).",
    },
    {
      key: "p2-q17",
      conversationEn: "Talk — site map",
      conversationVi: "Bài nói — bản đồ khu khai quật",
      questionEn: "Where are the bridge foundations on the map?",
      questionVi: "Móng cầu cổ ở đâu trên bản đồ?",
      answerEn: "Follow the main path, then the smaller track to the river where divers are (B).",
      answerVi: "Theo lối chính rồi đường nhỏ xuống sông, nơi thợ lặn đang làm việc (B).",
    },
    {
      key: "p2-q20",
      conversationEn: "Talk — site map",
      conversationVi: "Bài nói — bản đồ khu khai quật",
      questionEn: "Where is the fish pond on the map?",
      questionVi: "Ao cá cổ ở đâu trên bản đồ?",
      answerEn: "Turn right at the first information board, into the trees — on the right before the river (E).",
      answerVi: "Rẽ phải ở bảng thông tin đầu tiên, vào rừng — bên phải trước khi tới sông (E).",
    },
  ],
  memoryPlaceholder: "Ghi ý về đồng xu vàng, làng cổ, hiện vật và vị trí trên bản đồ khai quật…",
};

const CAM20_T3_P3: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "programme-history",
      labelEn: "The history of British theatre programmes for a student project",
      labelVi: "Lịch sử chương trình nhà hát Anh cho dự án sinh viên",
    },
    {
      key: "early-theatre",
      labelEn: "Early theatre audiences, contracts and advertising methods",
      labelVi: "Khán giả, ‘hợp đồng’ và cách quảng bá thời nhà hát sớm",
    },
    {
      key: "programme-examples",
      labelEn: "Notable show programmes to include in a presentation",
      labelVi: "Chương trình các vở diễn nổi tiếng cho bài thuyết trình",
    },
    {
      key: "archaeology",
      labelEn: "Volunteers excavating an ancient village near a castle",
      labelVi: "Tình nguyện viên khai quật làng cổ gần lâu đài",
    },
  ],
  gistOptions: [
    {
      key: "p3-g-wrong-furniture",
      labelEn: "A landlord recommending furniture rental companies to a tenant",
      labelVi: "Chủ nhà gợi ý công ty cho thuê nội thất cho người thuê",
    },
    {
      key: "p3-g-correct-research",
      labelEn:
        "Finn and Maya research the history of British theatre programmes — from early free handouts and audience riots to twentieth-century design and notable show examples.",
      labelVi:
        "Finn và Maya nghiên cứu lịch sử chương trình nhà hát Anh — từ tờ rơi miễn phí, bạo loạn khán giả đến thiết kế thế kỷ XX và ví dụ vở diễn.",
      correct: true,
    },
    {
      key: "p3-g-wrong-inclusive",
      labelEn: "A lecture defining inclusive design and its impact on safety",
      labelVi: "Bài giảng định nghĩa thiết kế hòa nhập và ảnh hưởng an toàn",
    },
    {
      key: "p3-g-correct-examples",
      labelEn:
        "They select programme examples for their slides — decorative artwork, cast insights, historical significance and a digitised library collection.",
      labelVi:
        "Hai bạn chọn ví dụ chương trình cho slide — tác phẩm nghệ thuật, góc nhìn diễn viên, ý nghĩa lịch sử và bộ sưu tập số hóa.",
      correct: true,
    },
  ],
  detailQuestions: [
    {
      key: "p3-q21",
      conversationEn: "Discussion — topic choice",
      conversationVi: "Thảo luận — chọn đề tài",
      questionEn: "Finn was pleased to discover that their topic —",
      questionVi: "Finn vui khi phát hiện đề tài của mình —",
      answerEn: "Had not been chosen by other students (B).",
      answerVi: "Chưa có sinh viên nào khác chọn (B).",
    },
    {
      key: "p3-q22",
      conversationEn: "Discussion — misconceptions",
      conversationVi: "Thảo luận — hiểu lầm",
      questionEn: "Maya says a mistaken belief about theatre programmes is that —",
      questionVi: "Maya nói quan niệm sai về chương trình nhà hát là —",
      answerEn: "Theatres pay companies to produce them (A).",
      answerVi: "Nhà hát trả tiền công ty để làm chương trình (A).",
    },
    {
      key: "p3-q23",
      conversationEn: "Discussion — early theatre",
      conversationVi: "Thảo luận — nhà hát sớm",
      questionEn: "Finn was surprised that, in early British theatre, programmes —",
      questionVi: "Finn ngạc nhiên vì ở nhà hát Anh sớm, chương trình —",
      answerEn: "Were seen as a kind of contract (C).",
      answerVi: "Được xem như một dạng hợp đồng (C).",
    },
    {
      key: "p3-q26",
      conversationEn: "Discussion — twentieth century",
      conversationVi: "Thảo luận — thế kỷ XX",
      questionEn: "Maya doesn't fully understand why, in the twentieth century, —",
      questionVi: "Maya chưa hiểu rõ vì sao, ở thế kỷ XX, —",
      answerEn: "British theatre programmes failed to develop for so long after the war (B).",
      answerVi: "Chương trình nhà hát Anh không phát triển lâu sau chiến tranh (B).",
    },
    {
      key: "p3-q27",
      conversationEn: "Discussion — programme examples",
      conversationVi: "Thảo luận — ví dụ chương trình",
      questionEn: "What comment is made about the programme for Ruy Blas?",
      questionVi: "Nhận xét gì về chương trình vở Ruy Blas?",
      answerEn: "It resembles an artwork (F).",
      answerVi: "Giống một tác phẩm nghệ thuật (F).",
    },
    {
      key: "p3-q29",
      conversationEn: "Discussion — programme examples",
      conversationVi: "Thảo luận — ví dụ chương trình",
      questionEn: "What comment is made about the programme for The Tragedy of Jane Shore?",
      questionVi: "Nhận xét gì về chương trình vở The Tragedy of Jane Shore?",
      answerEn: "It is historically significant for a country (B).",
      answerVi: "Có ý nghĩa lịch sử với một quốc gia (B).",
    },
  ],
  memoryPlaceholder: "Ghi ý về lịch sử chương trình nhà hát, khán giả thời xưa và các ví dụ Finn–Maya chọn…",
};

const CAM20_T3_P4: ListeningFlowLessonContent = {
  predictionOptions: [
    {
      key: "inclusive-design",
      labelEn: "Inclusive design — definition, examples and real-world impact",
      labelVi: "Thiết kế hòa nhập — định nghĩa, ví dụ và tác động thực tế",
    },
    {
      key: "accessibility",
      labelEn: "Accessible products for elderly users and people with disabilities",
      labelVi: "Sản phẩm dễ tiếp cận cho người cao tuổi và người khuyết tật",
    },
    {
      key: "workplace-safety",
      labelEn: "How poor design affects PPE, seatbelts and office comfort",
      labelVi: "Thiết kế kém ảnh hưởng PPE, dây an toàn và thoải mái văn phòng",
    },
    {
      key: "theatre",
      labelEn: "Students comparing eighteenth- and nineteenth-century theatre programmes",
      labelVi: "Sinh viên so sánh chương trình nhà hát thế kỷ XVIII và XIX",
    },
  ],
  gistOptions: [
    {
      key: "p4-g-wrong-furniture",
      labelEn: "A conversation about renting furniture and electronic equipment",
      labelVi: "Hội thoại về thuê nội thất và thiết bị điện tử",
    },
    {
      key: "p4-g-wrong-archaeology",
      labelEn: "An archaeologist describing a community dig near Bidcaster Castle",
      labelVi: "Khảo cổ viên mô tả khai quật cộng đồng gần lâu đài Bidcaster",
    },
    {
      key: "p4-g-correct-lecture",
      labelEn:
        "A lecture defining inclusive design, with workplace and public-space examples and the access, safety and comfort impacts of non-inclusive products.",
      labelVi:
        "Bài giảng định nghĩa thiết kế hòa nhập, ví dụ nơi làm việc/công cộng và tác động tiếp cận, an toàn, thoải mái của sản phẩm không hòa nhập.",
      correct: true,
    },
    {
      key: "p4-g-wrong-theatre",
      labelEn: "A student discussion about theatre programme publishing companies",
      labelVi: "Sinh viên bàn về công ty xuất bản chương trình nhà hát",
    },
  ],
  detailQuestions: [
    {
      key: "p4-q31",
      conversationEn: "Lecture — definition",
      conversationVi: "Bài giảng — định nghĩa",
      questionEn: "Inclusive design means products can be used without any —",
      questionVi: "Thiết kế hòa nhập nghĩa là dùng sản phẩm không cần —",
      answerEn: "Adaptation.",
      answerVi: "Thích nghi/chỉnh sửa (adaptation).",
    },
    {
      key: "p4-q32",
      conversationEn: "Lecture — universal design",
      conversationVi: "Bài giảng — thiết kế phổ quát",
      questionEn: "Universal design also caters for people with — problems.",
      questionVi: "Thiết kế phổ quát còn đáp ứng người có vấn đề —",
      answerEn: "Cognitive.",
      answerVi: "Nhận thức (cognitive).",
    },
    {
      key: "p4-q33",
      conversationEn: "Lecture — workplace example",
      conversationVi: "Bài giảng — ví dụ nơi làm việc",
      questionEn: "Which adjustable workplace items help avoid back or neck problems?",
      questionVi: "Vật dụng điều chỉnh được nào ở nơi làm việc giúp tránh đau lưng/cổ?",
      answerEn: "Desks.",
      answerVi: "Bàn làm việc (desks).",
    },
    {
      key: "p4-q35",
      conversationEn: "Lecture — elderly users",
      conversationVi: "Bài giảng — người cao tuổi",
      questionEn: "To assist the elderly, designers avoid using which colour in interfaces?",
      questionVi: "Để hỗ trợ người cao tuổi, nhà thiết kế tránh màu nào trên giao diện?",
      answerEn: "Blue.",
      answerVi: "Màu xanh dương (blue).",
    },
    {
      key: "p4-q37",
      conversationEn: "Lecture — car safety",
      conversationVi: "Bài giảng — an toàn ô tô",
      questionEn: "Seatbelts tested on male dummies are especially problematic for — women.",
      questionVi: "Dây an toàn thử trên hình nộm nam đặc biệt bất lợi cho phụ nữ —",
      answerEn: "Pregnant.",
      answerVi: "Mang thai (pregnant).",
    },
    {
      key: "p4-q40",
      conversationEn: "Lecture — office comfort",
      conversationVi: "Bài giảng — thoải mái văn phòng",
      questionEn: "What in offices is often set too low for women?",
      questionVi: "Yếu tố nào trong văn phòng thường đặt quá thấp cho phụ nữ?",
      answerEn: "Temperature (air conditioning at 21°C).",
      answerVi: "Nhiệt độ (điều hòa 21°C).",
    },
  ],
  memoryPlaceholder: "Ghi ý về định nghĩa inclusive design, ví dụ bàn/vòi/giao diện và tác hại thiết kế loại trừ…",
};

export const IELTS_CAM20_T3_FLOW_CONTENT: Record<string, ListeningFlowLessonContent> = {
  "cam20-t3-p1": CAM20_T3_P1,
  "cam20-t3-p2": CAM20_T3_P2,
  "cam20-t3-p3": CAM20_T3_P3,
  "cam20-t3-p4": CAM20_T3_P4,
};
