import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";

export type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";

export type EVIUAdvancedSection =
  | "work-study"
  | "people"
  | "leisure"
  | "travel"
  | "environment"
  | "society"
  | "media"
  | "health"
  | "technology"
  | "concepts"
  | "functional"
  | "words-meanings"
  | "fixed"
  | "variation";

export const EVIU_ADVANCED_SECTION_LABELS: Record<EVIUAdvancedSection, string> = {
  "work-study": "Công việc và học tập",
  people: "Con người và quan hệ",
  leisure: "Giải trí và lối sống",
  travel: "Du lịch",
  environment: "Môi trường",
  society: "Xã hội và thể chế",
  media: "Truyền thông",
  health: "Sức khỏe",
  technology: "Công nghệ",
  concepts: "Khái niệm cơ bản",
  functional: "Từ vựng chức năng",
  "words-meanings": "Từ và nghĩa",
  fixed: "Cụm cố định và hình tượng",
  variation: "Biến thể ngôn ngữ",
};

function unit(
  unitNumber: number,
  slug: string,
  topic: string,
  topicVi: string,
  description: string,
  section: EVIUAdvancedSection,
  status: VocabularyUnitCatalogEntry["status"] = "coming-soon",
): VocabularyUnitCatalogEntry {
  return {
    id: `eviu-adv-${String(unitNumber).padStart(2, "0")}-${slug}`,
    unitNumber,
    topic,
    topicVi,
    title: topic,
    titleVi: topicVi,
    description,
    section,
    level: "C1",
    status,
    sourceBook: `English Vocabulary in Use · Advanced · Unit ${unitNumber}`,
  };
}

/** 101 unit EVIU Advanced (3rd ed.) — metadata catalog. */
export const EVIU_ADVANCED_CATALOG: readonly VocabularyUnitCatalogEntry[] = [
  unit(1, "study-academic-work", "Cramming for success: study and academic work", "Học tập và công việc học thuật", "Bài luận, luận văn, ôn thi và nghiên cứu học thuật ở mức C1.", "work-study"),
  unit(2, "education-debates", "Education: debates and issues", "Giáo dục: tranh luận và vấn đề", "Cơ hội bình đẳng, trường tuyển chọn và các cuộc tranh luận giáo dục.", "work-study"),
  unit(3, "applying-for-a-job", "Applying for a job", "Ứng tuyển việc làm", "Tin tuyển dụng, thư xin việc và từ vựng hồ sơ chuyên nghiệp.", "work-study"),
  unit(4, "job-interviews", "Job interviews", "Phỏng vấn xin việc", "Chuẩn bị phỏng vấn, ấn tượng và nhận offer.", "work-study"),
  unit(5, "colleagues-routines", "At work: colleagues and routines", "Nơi làm việc: đồng nghiệp và nhịp làm", "Quan hệ đồng nghiệp, ca làm và khối lượng công việc.", "work-study"),
  unit(6, "job-satisfaction", "At work: job satisfaction", "Nơi làm việc: sự hài lòng với công việc", "Động lực, cân bằng đời sống và tinh thần nhóm.", "work-study"),
  unit(7, "careers", "At work: careers", "Nơi làm việc: sự nghiệp", "Bán hàng, mua sắm và lộ trình nghề nghiệp.", "work-study"),
  unit(8, "people-qualities", "Describing people: positive and negative qualities", "Miêu tả người: phẩm chất tốt và xấu", "Tính cách tích cực/tiêu cực và sắc thái từ.", "people"),
  unit(9, "appearance-mannerisms", "Describing people: appearance and mannerisms", "Miêu tả người: ngoại hình và cử chỉ", "Ngoại hình, phong thái và thói quen cử chỉ.", "people"),
  unit(10, "personality-traits", "Describing people: personality and character traits", "Miêu tả người: tính cách và đặc điểm", "Tính cách sâu hơn và cách nói về con người.", "people"),
  unit(11, "friends-forever", "Relationships: friends forever", "Quan hệ: tình bạn", "Bạn bè thân thiết và các kiểu kết nối xã hội.", "people"),
  unit(12, "relationships-ups-downs", "Relationships: ups and downs", "Quan hệ: thăng trầm", "Xung đột, làm lành và biến động trong quan hệ.", "people"),
  unit(13, "emotions-reactions", "Emotions and reactions", "Cảm xúc và phản ứng", "Cảm xúc mạnh và cách bày tỏ phản ứng.", "people"),
  unit(14, "negative-feelings", "Negative feelings", "Cảm xúc tiêu cực", "Lo lắng, giận dữ và các trạng thái tiêu cực.", "people"),
  unit(15, "birth-and-death", "Birth and death: from cradle to grave", "Sinh và tử: từ nôi đến nấm mồ", "Từ vựng về sinh, tử và vòng đời con người.", "people"),
  unit(16, "free-time", "Free time: relaxation and leisure", "Thời gian rảnh: thư giãn và giải trí", "Hoạt động giải trí và cách thư giãn.", "leisure"),
  unit(17, "clothes-fashion", "All the rage: clothes and fashion", "Thời trang: xu hướng và trang phục", "Quần áo, phong cách và xu hướng.", "leisure"),
  unit(18, "home-lifestyles", "Home styles, lifestyles", "Nhà cửa và lối sống", "Kiểu nhà và cách sống hiện đại.", "leisure"),
  unit(19, "socialising-networking", "Socialising and networking", "Giao lưu và kết nối", "Xã giao, networking và quan hệ nghề nghiệp.", "leisure"),
  unit(20, "performance-arts", "The performance arts: reviews and critiques", "Nghệ thuật biểu diễn: nhận xét và phê bình", "Sân khấu, biểu diễn và cách viết review.", "leisure"),
  unit(21, "visual-arts", "The visual arts", "Nghệ thuật thị giác", "Mỹ thuật, triển lãm và ngôn ngữ thẩm mỹ.", "leisure"),
  unit(22, "talking-about-books", "Talking about books", "Nói về sách", "Thể loại sách, đọc và thảo luận văn học.", "leisure"),
  unit(23, "food-recipe", "Food: a recipe for disaster", "Ẩm thực: khi mọi thứ đổ bể", "Nấu ăn, công thức và sự cố trong bếp.", "leisure"),
  unit(24, "entertaining-eating-out", "Dinner's on me: entertaining and eating out", "Đãi khách và ăn ngoài", "Nhà hàng, chiêu đãi và văn hóa ăn uống.", "leisure"),
  unit(25, "traffic-driving", "On the road: traffic and driving", "Trên đường: giao thông và lái xe", "Giao thông, lái xe và sự cố trên đường.", "travel"),
  unit(26, "travel-accommodation", "Travel and accommodation", "Du lịch và chỗ ở", "Đặt chỗ, lưu trú và trải nghiệm chuyến đi.", "travel"),
  unit(27, "attracting-tourists", "Attracting tourists", "Thu hút du khách", "Du lịch, quảng bá điểm đến và trải nghiệm.", "travel"),
  unit(28, "describing-the-world", "Describing the world", "Miêu tả thế giới", "Địa lý, cảnh quan và cách mô tả thế giới.", "environment"),
  unit(29, "weather-climate", "Weather and climate", "Thời tiết và khí hậu", "Khí hậu, thời tiết cực đoan và biến đổi.", "environment"),
  unit(30, "brick-walls-glass-ceilings", "Brick walls and glass ceilings", "Bức tường và trần kính", "Ẩn dụ về rào cản xã hội và nghề nghiệp.", "environment"),
  unit(31, "taking-root", "Taking root and reaping rewards", "Bén rễ và gặt hái thành quả", "Ẩn dụ thực vật về phát triển và kết quả.", "environment"),
  unit(32, "animal-kingdom", "The animal kingdom", "Thế giới động vật", "Động vật và cách nói hình tượng liên quan.", "environment"),
  unit(33, "endangered-world", "Our endangered world", "Thế giới đang bị đe dọa", "Môi trường, tuyệt chủng và bảo tồn.", "environment"),
  unit(34, "customer-service", "Here to help: customer service", "Dịch vụ khách hàng", "Khiếu nại, hỗ trợ và trải nghiệm khách hàng.", "society"),
  unit(35, "customs-police", "Authorities: customs and police", "Cơ quan chức năng: hải quan và cảnh sát", "Luật, kiểm soát biên giới và an ninh.", "society"),
  unit(36, "beliefs", "Beliefs", "Niềm tin", "Tôn giáo, tín ngưỡng và quan điểm.", "society"),
  unit(37, "festivals-culture", "Festivals in their cultural context", "Lễ hội trong ngữ cảnh văn hóa", "Lễ hội, nghi thức và bản sắc văn hóa.", "society"),
  unit(38, "talking-about-language", "Talking about language", "Nói về ngôn ngữ", "Thuật ngữ ngôn ngữ học và giao tiếp.", "society"),
  unit(39, "history-civilisation", "History: since the dawn of civilisation", "Lịch sử: từ bình minh văn minh", "Thời kỳ lịch sử và từ vựng sử học.", "society"),
  unit(40, "haves-have-nots", "The haves and the have-nots", "Người có và người không có", "Bất bình đẳng và phân tầng xã hội.", "society"),
  unit(41, "british-politics", "British politics", "Chính trị Anh", "Hệ thống và từ vựng chính trị Anh.", "society"),
  unit(42, "international-politics", "International politics", "Chính trị quốc tế", "Ngoại giao, liên minh và quan hệ quốc tế.", "society"),
  unit(43, "letter-of-the-law", "The letter of the law", "Luật pháp", "Thuật ngữ pháp lý và quy trình tư pháp.", "society"),
  unit(44, "war-and-peace", "War and peace", "Chiến tranh và hòa bình", "Xung đột, hòa giải và an ninh.", "society"),
  unit(45, "economy-finance", "Economy and finance", "Kinh tế và tài chính", "Thị trường, tăng trưởng và từ vựng kinh tế.", "society"),
  unit(46, "personal-finance", "Personal finance: making ends meet", "Tài chính cá nhân: xoay sở chi tiêu", "Thu chi, nợ và quản lý tiền bạc.", "society"),
  unit(47, "media-print", "The media: in print", "Truyền thông: báo in", "Báo chí, bài viết và ngôn ngữ in ấn.", "media"),
  unit(48, "media-internet", "The media: internet and email", "Truyền thông: internet và email", "Mạng, email và giao tiếp số.", "media"),
  unit(49, "advertising", "Advertising", "Quảng cáo", "Chiến dịch quảng cáo và thuyết phục người mua.", "media"),
  unit(50, "the-news", "The news: gathering and delivering", "Tin tức: thu thập và đưa tin", "Phóng sự, nguồn tin và đưa tin.", "media"),
  unit(51, "healthcare", "Healthcare", "Chăm sóc sức khỏe", "Hệ thống y tế và dịch vụ chăm sóc.", "health"),
  unit(52, "illness", "Illness: feeling under the weather", "Bệnh tật: khi sức khỏe kém", "Triệu chứng, bệnh nhẹ và cách nói về ốm.", "health"),
  unit(53, "medical-language", "Medical language", "Ngôn ngữ y khoa", "Thuật ngữ y tế và điều trị.", "health"),
  unit(54, "diet-sport-fitness", "Diet, sport and fitness", "Chế độ ăn, thể thao và thể lực", "Dinh dưỡng, luyện tập và sức khỏe.", "health"),
  unit(55, "industries", "Industries: from manufacturing to service", "Ngành công nghiệp: từ sản xuất đến dịch vụ", "Các ngành kinh tế và chuỗi giá trị.", "technology"),
  unit(56, "technology-impact", "Technology and its impact", "Công nghệ và tác động", "Đổi mới kỹ thuật và ảnh hưởng xã hội.", "technology"),
  unit(57, "technology-future", "Technology of the future", "Công nghệ tương lai", "Xu hướng công nghệ và dự báo.", "technology"),
  unit(58, "energy", "Energy: from fossil fuels to windmills", "Năng lượng: từ nhiên liệu hóa thạch đến gió", "Nguồn năng lượng và chuyển đổi xanh.", "technology"),
  unit(59, "space", "Space: no room to swing a cat", "Không gian: chật hẹp", "Không gian, chỗ ở và thành ngữ về chỗ.", "concepts"),
  unit(60, "time", "Time: once in a blue moon", "Thời gian: hiếm khi", "Cách nói về thời gian và tần suất.", "concepts"),
  unit(61, "motion", "Motion: taking steps", "Chuyển động: từng bước", "Động từ chuyển động và tiến triển.", "concepts"),
  unit(62, "manner", "Manner: behaviour and body language", "Cách thức: hành vi và ngôn ngữ cơ thể", "Thái độ, cử chỉ và cách cư xử.", "concepts"),
  unit(63, "sounds", "Sounds: listen up!", "Âm thanh: lắng nghe!", "Từ vựng về âm thanh và nghe.", "concepts"),
  unit(64, "weight-density", "Weight and density", "Trọng lượng và mật độ", "Nặng nhẹ, đặc/loãng và ẩn dụ liên quan.", "concepts"),
  unit(65, "colours", "All the colours of the rainbow", "Mọi sắc màu cầu vồng", "Màu sắc và cách dùng hình tượng.", "concepts"),
  unit(66, "speed", "Speed: fast and slow", "Tốc độ: nhanh và chậm", "Tốc độ, nhịp độ và tiến độ.", "concepts"),
  unit(67, "cause-effect", "Cause and effect", "Nguyên nhân và kết quả", "Liên kết nhân quả trong diễn đạt.", "concepts"),
  unit(68, "making-comparisons", "Spot the difference: making comparisons", "So sánh: nhận ra khác biệt", "So sánh, tương phản và sắc thái.", "concepts"),
  unit(69, "difficulties-dilemmas", "Difficulties and dilemmas", "Khó khăn và thế lưỡng nan", "Vấn đề, thử thách và quyết định khó.", "concepts"),
  unit(70, "modality", "Modality: expressing facts, opinions, desires", "Tình thái: sự thật, ý kiến, mong muốn", "Cách bày tỏ chắc chắn, nghi ngờ và mong muốn.", "concepts"),
  unit(71, "number-statistics", "Number: statistics and quantity", "Số liệu: thống kê và số lượng", "Thống kê, tỷ lệ và diễn đạt số.", "concepts"),
  unit(72, "permission", "Permission: getting the go-ahead", "Cho phép: được mở đèn xanh", "Xin phép, chấp thuận và từ chối.", "functional"),
  unit(73, "complaining-protesting", "Complaining and protesting", "Phàn nàn và phản đối", "Khiếu nại, phản đối và bày tỏ bất mãn.", "functional"),
  unit(74, "apology-regret", "Apology, regret and reconciliation", "Xin lỗi, hối tiếc và hòa giải", "Xin lỗi, tiếc nuối và làm lành.", "functional"),
  unit(75, "complimenting-praising", "A pat on the back: complimenting and praising", "Khen ngợi và động viên", "Khen, tán dương và khích lệ.", "functional"),
  unit(76, "promises-bets", "Promises and bets", "Lời hứa và cá cược", "Cam kết, hứa hẹn và rủi ro.", "functional"),
  unit(77, "reminiscences-regrets", "Reminiscences and regrets", "Hồi tưởng và hối tiếc", "Nhớ lại quá khứ và tiếc nuối.", "functional"),
  unit(78, "agreement-disagreement", "Agreement, disagreement and compromise", "Đồng ý, bất đồng và thỏa hiệp", "Thảo luận, bất đồng và tìm điểm chung.", "functional"),
  unit(79, "academic-writing-sense", "Academic writing: making sense", "Viết học thuật: làm rõ ý", "Lập luận và mạch lạc trong văn bản học thuật.", "functional"),
  unit(80, "academic-writing-structure", "Academic writing: text structure", "Viết học thuật: cấu trúc văn bản", "Cấu trúc đoạn và tổ chức bài viết.", "functional"),
  unit(81, "writing-style-format", "Writing: style and format", "Viết: phong cách và định dạng", "Văn phong, thể loại và format.", "functional"),
  unit(82, "being-indirect", "Whatchamacallit: being indirect", "Nói vòng: cách diễn đạt gián tiếp", "Diễn đạt tránh né và từ thay thế.", "functional"),
  unit(83, "vague-expressions", "Give or take: more vague expressions", "Diễn đạt mơ hồ", "Cụm ước lượng và nói không chắc chắn.", "functional"),
  unit(84, "the-way-you-say-it", "The way you say it", "Cách bạn nói", "Ngữ điệu, nhấn mạnh và cách diễn đạt.", "functional"),
  unit(85, "abbreviations-acronyms", "Abbreviations and acronyms", "Viết tắt và từ viết tắt", "Chữ viết tắt và cách đọc/viết.", "words-meanings"),
  unit(86, "prefixes", "Prefixes: creating new meanings", "Tiền tố: tạo nghĩa mới", "Tiền tố phổ biến và nghĩa phái sinh.", "words-meanings"),
  unit(87, "suffixes", "Suffixes: forming new words", "Hậu tố: tạo từ mới", "Hậu tố và lớp từ loại.", "words-meanings"),
  unit(88, "word-building-blending", "Word-building and word-blending", "Tạo từ và trộn từ", "Ghép từ, blend và cách tạo từ mới.", "words-meanings"),
  unit(89, "english-global", "English: a global language", "Tiếng Anh: ngôn ngữ toàn cầu", "Biến thể tiếng Anh và vai trò quốc tế.", "words-meanings"),
  unit(90, "easily-confused-words", "Easily confused words", "Từ dễ nhầm", "Cặp từ gần nghĩa / dễ dùng sai.", "words-meanings"),
  unit(91, "one-word-many-meanings", "One word, many meanings", "Một từ, nhiều nghĩa", "Đa nghĩa và chọn nét nghĩa đúng.", "words-meanings"),
  unit(92, "collocation", "Collocation: which words go together", "Kết hợp từ: từ nào đi với từ nào", "Collocation tự nhiên ở mức nâng cao.", "fixed"),
  unit(93, "metaphor", "Metaphor: seeing the light", "Ẩn dụ: nhìn thấy ánh sáng", "Ẩn dụ thường gặp trong tiếng Anh.", "fixed"),
  unit(94, "everyday-idioms", "Idioms for everyday situations and feelings", "Thành ngữ đời thường và cảm xúc", "Idiom dùng hàng ngày.", "fixed"),
  unit(95, "phrasal-verbs", "Brushing up on phrasal verbs", "Ôn phrasal verb", "Phrasal verb nâng cao theo ngữ cảnh.", "fixed"),
  unit(96, "connotation", "Connotation: making associations", "Hàm nghĩa: liên tưởng", "Sắc thái tích cực/tiêu cực của từ.", "fixed"),
  unit(97, "register", "Register: degrees of formality", "Thanh ngữ: mức độ trang trọng", "Formal / informal và chọn từ phù hợp.", "variation"),
  unit(98, "divided-by-language", "Divided by a common language", "Cùng ngôn ngữ, khác cách nói", "Anh–Mỹ và biến thể khu vực.", "variation"),
  unit(99, "language-and-gender", "Language and gender", "Ngôn ngữ và giới", "Cách nói trung tính và nhạy cảm giới.", "variation"),
  unit(100, "in-the-headlines", "In the headlines", "Trên trang nhất", "Ngôn ngữ headline và báo chí.", "variation"),
  unit(101, "red-tape", "Red tape", "Thủ tục hành chính", "Giấy tờ, quan liêu và thủ tục.", "variation"),
];

export function listEVIUAdvancedCatalog(): readonly VocabularyUnitCatalogEntry[] {
  return EVIU_ADVANCED_CATALOG;
}

export function getEVIUAdvancedCatalogEntry(unitId: string): VocabularyUnitCatalogEntry | null {
  return EVIU_ADVANCED_CATALOG.find((entry) => entry.id === unitId) ?? null;
}
