import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";

export type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";

export type EVIUPreIntermediateSection =
  | "learning"
  | "world"
  | "people"
  | "daily-life"
  | "education"
  | "work"
  | "leisure"
  | "tourism"
  | "communication"
  | "social"
  | "concepts"
  | "functional"
  | "word-formation"
  | "phrase-building"
  | "key-verbs"
  | "words-grammar"
  | "connecting"
  | "style";

export const EVIU_PRE_INTERMEDIATE_SECTION_LABELS: Record<EVIUPreIntermediateSection, string> = {
  "learning": "Học từ vựng",
  "world": "Thế giới xung quanh",
  "people": "Con người",
  "daily-life": "Đời sống hằng ngày",
  "education": "Giáo dục",
  "work": "Công việc",
  "leisure": "Giải trí",
  "tourism": "Du lịch",
  "communication": "Giao tiếp & công nghệ",
  "social": "Vấn đề xã hội",
  "concepts": "Khái niệm & đo lường",
  "functional": "Ngôn ngữ giao tiếp",
  "word-formation": "Cấu tạo từ",
  "phrase-building": "Cụm từ & phrasal verb",
  "key-verbs": "Động từ trọng tâm",
  "words-grammar": "Từ vựng & ngữ pháp",
  "connecting": "Liên kết ý",
  "style": "Văn phong & viết",
};

function unit(
  unitNumber: number,
  slug: string,
  topic: string,
  topicVi: string,
  description: string,
  section: EVIUPreIntermediateSection,
  status: VocabularyUnitCatalogEntry["status"] = "coming-soon",
): VocabularyUnitCatalogEntry {
  return {
    id: `eviu-pre-${String(unitNumber).padStart(2, "0")}-${slug}`,
    unitNumber,
    topic,
    topicVi,
    title: topic,
    titleVi: topicVi,
    description,
    section,
    level: "A2",
    status,
    sourceBook: `English Vocabulary in Use · Pre-Intermediate · Unit ${unitNumber}`,
  };
}

/** 100 unit EVIU Pre-Intermediate (4th ed.) — metadata catalog. */
export const EVIU_PRE_INTERMEDIATE_CATALOG: readonly VocabularyUnitCatalogEntry[] = [
  unit(1, "learning-vocabulary", "Learning vocabulary", "Học từ vựng", "Cách học từ mới hiệu quả: lặp lại, ghi chép và mở rộng vốn từ.", "learning"),
  unit(2, "vocabulary-notebook", "Keeping a vocabulary notebook", "Sổ tay từ vựng", "Cách sắp xếp và ghi chép từ trong notebook để nhớ lâu.", "learning"),
  unit(3, "using-a-dictionary", "Using a dictionary", "Dùng từ điển", "Tra nghĩa, phát âm và chọn từ điển Anh–Anh hay song ngữ.", "learning"),
  unit(4, "english-language-words", "English language words", "Từ về tiếng Anh", "Thuật ngữ mô tả ngôn ngữ: noun, verb, collocation, register…", "learning"),
  unit(5, "country-nationality-language", "Country, nationality and language", "Quốc gia, quốc tịch và ngôn ngữ", "Nói về nơi đến từ, quốc tịch và ngôn ngữ bạn dùng.", "world"),
  unit(6, "the-physical-world", "The physical world", "Thế giới vật chất", "Địa hình, thiên nhiên và môi trường xung quanh.", "world"),
  unit(7, "weather", "Weather", "Thời tiết", "Mô tả thời tiết, nhiệt độ và thay đổi theo mùa.", "world"),
  unit(8, "animals-and-insects", "Animals and insects", "Động vật và côn trùng", "Tên loài, nơi sống và hành vi thường gặp.", "world"),
  unit(9, "body-and-movement", "The body and movement", "Cơ thể và cử động", "Bộ phận cơ thể và động từ mô tả chuyển động.", "people"),
  unit(10, "describing-appearance", "Describing appearance", "Mô tả ngoại hình", "Từ chỉ chiều cao, tóc, trang phục và nét đặc trưng.", "people"),
  unit(11, "describing-character", "Describing character", "Mô tả tính cách", "Tính từ nói về con người: kiên nhẫn, hòa đồng, thẳng thắn…", "people"),
  unit(12, "feelings", "Feelings", "Cảm xúc", "Diễn đạt vui, buồn, lo lắng, tự hào và các mức độ cảm xúc.", "people"),
  unit(13, "family-and-friends", "Family and friends", "Gia đình và bạn bè", "Mối quan hệ, vai trò và cách nói về người thân.", "people"),
  unit(14, "growing-up", "Growing up", "Lớn lên", "Tuổi thơ, tuổi teen và các giai đoạn trưởng thành.", "people"),
  unit(15, "romance-marriage-divorce", "Romance, marriage and divorce", "Tình yêu, hôn nhân và ly hôn", "Từ vựng về mối quan hệ lãng mạn và hôn nhân.", "people"),
  unit(16, "daily-routines", "Daily routines", "Thói quen hằng ngày", "Sinh hoạt buổi sáng, tối và tần suất lặp lại.", "daily-life"),
  unit(17, "place-where-you-live", "The place where you live", "Nơi bạn sống", "Mô tả nhà, khu phố và môi trường sống.", "daily-life"),
  unit(18, "around-the-home", "Around the home", "Trong nhà", "Phòng, đồ đạc và việc nhà thường gặp.", "daily-life"),
  unit(19, "money", "Money", "Tiền bạc", "Thu chi, giá cả, ngân hàng và thanh toán.", "daily-life"),
  unit(20, "health", "Health", "Sức khỏe", "Triệu chứng, bác sĩ và lối sống lành mạnh.", "daily-life"),
  unit(21, "clothes", "Clothes", "Quần áo", "Trang phục, size và mặc theo dịp.", "daily-life"),
  unit(22, "fashion-buying-clothes", "Fashion and buying clothes", "Thời trang và mua quần áo", "Mua sắm, thử đồ và mô tả phong cách.", "daily-life"),
  unit(23, "shopping", "Shopping", "Mua sắm", "Cửa hàng, giảm giá và trải nghiệm mua hàng.", "daily-life"),
  unit(24, "food", "Food", "Thức ăn", "Món ăn, nguyên liệu và thói quen ăn uống.", "daily-life"),
  unit(25, "cooking", "Cooking", "Nấu ăn", "Động từ và dụng cụ trong bếp.", "daily-life"),
  unit(26, "city-life", "City life", "Sống ở thành phố", "Giao thông, nhịp sống và tiện ích đô thị.", "daily-life"),
  unit(27, "life-in-the-country", "Life in the country", "Sống ở nông thôn", "Ruộng đồng, không khí và khác biệt với thành phố.", "daily-life"),
  unit(28, "transport", "Transport", "Phương tiện đi lại", "Xe bus, tàu, máy bay và đặt vé.", "daily-life"),
  unit(29, "on-the-road", "On the road", "Trên đường", "Lái xe, biển báo và tình huống giao thông.", "daily-life"),
  unit(30, "notices-and-warnings", "Notices and warnings", "Thông báo và cảnh báo", "Biển báo, nhãn và lời nhắc an toàn.", "daily-life"),
  unit(31, "classroom-language", "Classroom language", "Ngôn ngữ trong lớp", "Từ dùng khi học với giáo viên và bạn cùng lớp.", "education"),
  unit(32, "school-education", "School education", "Giáo dục phổ thông", "Môn học, kỳ thi và đời sống ở trường.", "education"),
  unit(33, "studying-english-exams", "Studying English and taking exams", "Học tiếng Anh và thi cử", "Luyện kỹ năng và chuẩn bị bài thi.", "education"),
  unit(34, "university-education", "University education", "Đại học", "Khoa, bài giảng, luận văn và campus.", "education"),
  unit(35, "jobs", "Jobs", "Nghề nghiệp", "Tên nghề, mô tả công việc và nơi làm việc.", "work"),
  unit(36, "talking-about-your-work", "Talking about your work", "Nói về công việc", "Mô tả vai trò, đồng nghiệp và trách nhiệm.", "work"),
  unit(37, "making-a-career", "Making a career", "Xây dựng sự nghiệp", "Thăng tiến, kỹ năng và định hướng nghề.", "work"),
  unit(38, "working-in-an-office", "Working in an office", "Làm việc văn phòng", "Email, họp và công cụ hàng ngày.", "work"),
  unit(39, "running-a-company", "Running a company", "Điều hành công ty", "Quản lý, nhân sự và chiến lược kinh doanh.", "work"),
  unit(40, "business-and-finance", "Business and finance", "Kinh doanh và tài chính", "Lợi nhuận, đầu tư và thuật ngữ kinh tế.", "work"),
  unit(41, "sport-and-leisure", "Sport and leisure", "Thể thao và giải trí", "Hoạt động rảnh rỗi và sở thích.", "leisure"),
  unit(42, "competitive-sport", "Competitive sport", "Thể thao thi đấu", "Giải đấu, đội và kết quả trận đấu.", "leisure"),
  unit(43, "books-and-films", "Books and films", "Sách và phim", "Thể loại, nhân vật và cảm nhận.", "leisure"),
  unit(44, "music", "Music", "Âm nhạc", "Thể loại, nhạc cụ và buổi biểu diễn.", "leisure"),
  unit(45, "special-events", "Special events", "Sự kiện đặc biệt", "Lễ hội, đám cưới và dịp kỷ niệm.", "leisure"),
  unit(46, "travel-bookings", "Travel bookings", "Đặt chỗ du lịch", "Đặt tour, vé và lịch trình.", "tourism"),
  unit(47, "air-travel", "Air travel", "Đi máy bay", "Sân bay, hành lý và an ninh.", "tourism"),
  unit(48, "hotels-and-restaurants", "Hotels and restaurants", "Khách sạn và nhà hàng", "Đặt phòng, menu và dịch vụ.", "tourism"),
  unit(49, "cafes", "Cafés", "Quán cà phê", "Gọi đồ uống và không khí quán.", "tourism"),
  unit(50, "sightseeing-holidays", "Sightseeing holidays", "Du lịch tham quan", "Điểm tham quan và hướng dẫn viên.", "tourism"),
  unit(51, "holidays-by-the-sea", "Holidays by the sea", "Nghỉ biển", "Bãi biển, tắm nắng và hoạt động ven biển.", "tourism"),
  unit(52, "newspapers-and-television", "Newspapers and television", "Báo chí và truyền hình", "Tin tức, chương trình và người xem.", "communication"),
  unit(53, "phoning-and-texting", "Phoning and texting", "Gọi điện và nhắn tin", "Cuộc gọi, tin nhắn và cụm từ giao tiếp.", "communication"),
  unit(54, "computers", "Computers", "Máy tính", "Phần cứng, phần mềm và sử dụng cơ bản.", "communication"),
  unit(55, "email-and-internet", "Email and the Internet", "Email và Internet", "Gửi mail, tìm kiếm và an toàn mạng.", "communication"),
  unit(56, "crime", "Crime", "Tội phạm", "Loại tội phạm, pháp luật và an ninh.", "social"),
  unit(57, "politics", "Politics", "Chính trị", "Bầu cử, chính phủ và quyền công dân.", "social"),
  unit(58, "climate-change", "Climate change", "Biến đổi khí hậu", "Ô nhiễm, tái chế và hành động vì môi trường.", "social"),
  unit(59, "war-and-violence", "War and violence", "Chiến tranh và bạo lực", "Xung đột, hòa bình và từ vựng nhạy cảm.", "social"),
  unit(60, "time", "Time", "Thời gian", "Giờ, lịch và cụm chỉ thời điểm.", "concepts"),
  unit(61, "numbers", "Numbers", "Số đếm", "Số, phân số và cách đọc số trong đời sống.", "concepts"),
  unit(62, "distance-dimensions-size", "Distance, dimensions and size", "Khoảng cách và kích thước", "Dài, rộng, cao và đơn vị đo.", "concepts"),
  unit(63, "objects-materials-shapes-colour", "Objects, materials, shapes and colour", "Vật thể, chất liệu, hình dạng và màu", "Mô tả đồ vật và đặc điểm hình học.", "concepts"),
  unit(64, "containers-and-quantities", "Containers and quantities", "Hộp, chai và lượng", "Đơn vị đựng và cách nói số lượng.", "concepts"),
  unit(65, "apologies-excuses-thanks", "Apologies, excuses and thanks", "Xin lỗi, lý do và cảm ơn", "Cụm lịch sự trong giao tiếp hàng ngày.", "functional"),
  unit(66, "requests-permission-suggestions", "Requests, permission and suggestions", "Yêu cầu, xin phép và gợi ý", "Could you…?, May I…? và đề xuất lịch sự.", "functional"),
  unit(67, "opinions-agreeing-disagreeing", "Opinions, agreeing and disagreeing", "Ý kiến và đồng ý / không đồng ý", "Bày tỏ quan điểm và phản hồi.", "functional"),
  unit(68, "likes-dislikes-preferences", "Likes, dislikes, attitudes and preferences", "Thích, không thích và ưu tiên", "Diễn đạt sở thích và thái độ.", "functional"),
  unit(69, "greetings-farewells", "Greetings, farewells and special expressions", "Chào hỏi và tạm biệt", "Cụm chào theo ngữ cảnh và văn hóa.", "functional"),
  unit(70, "prefixes-changing-meaning", "Prefixes: changing meaning", "Tiền tố đổi nghĩa", "un-, re-, over- và cách đoán nghĩa.", "word-formation"),
  unit(71, "suffixes-forming-nouns", "Suffixes: forming nouns", "Hậu tố tạo danh từ", "-tion, -ment, -ness và mở rộng vốn từ.", "word-formation"),
  unit(72, "suffixes-forming-adjectives", "Suffixes: forming adjectives", "Hậu tố tạo tính từ", "-ful, -less, -able và biến đổi từ loại.", "word-formation"),
  unit(73, "compound-nouns", "Compound nouns", "Danh từ ghép", "haircut, homework và quy tắc nhấn âm.", "word-formation"),
  unit(74, "word-partners", "Word partners", "Cặp từ đi cùng nhau", "Collocation phổ biến ở trình độ A2.", "phrase-building"),
  unit(75, "fixed-phrases", "Fixed phrases", "Cụm cố định", "Thành ngữ và cụm không thể thay từ tùy ý.", "phrase-building"),
  unit(76, "fixed-phrases-in-conversation", "Fixed phrases in conversation", "Cụm cố định trong hội thoại", "By the way, I mean… và các mắt xích câu.", "phrase-building"),
  unit(77, "verb-adjective-preposition", "Verb or adjective + preposition", "Động từ/tính từ + giới từ", "depend on, interested in và depend on context.", "phrase-building"),
  unit(78, "prepositional-phrases", "Prepositional phrases", "Cụm giới từ", "at the moment, in advance và cụm thời gian.", "phrase-building"),
  unit(79, "phrasal-verbs-form-meaning", "Phrasal verbs 1: form and meaning", "Phrasal verb 1: hình thức và nghĩa", "Cấu trúc và nghĩa đen/ẩn dụ.", "phrase-building"),
  unit(80, "phrasal-verbs-grammar-style", "Phrasal verbs 2: grammar and style", "Phrasal verb 2: ngữ pháp và văn phong", "Tách hay không tách tân ngữ; trang trọng hay thân mật.", "phrase-building"),
  unit(81, "make-do-take", "Make, do and take: uses and phrases", "Make, do, take", "Phân biệt ba động từ đa nghĩa và cụm cố định.", "key-verbs"),
  unit(82, "give-keep-miss", "Key verbs: give, keep and miss", "Give, keep, miss", "Các nghĩa và collocation thường gặp.", "key-verbs"),
  unit(83, "get-uses-phrases", "Get: uses, phrases and phrasal verbs", "Get", "Get + adj, get on with và phrasal verbs.", "key-verbs"),
  unit(84, "go-meanings-expressions", "Go: meanings and expressions", "Go", "Go shopping, go on holiday và biến thể nghĩa.", "key-verbs"),
  unit(85, "the-senses", "The senses", "Giác quan", "See, hear, smell, taste, feel trong mô tả.", "key-verbs"),
  unit(86, "uncountable-nouns", "Uncountable nouns", "Danh từ không đếm được", "Advice, furniture và lượng từ đi kèm.", "words-grammar"),
  unit(87, "verb-constructions-1", "Verb constructions 1", "Cấu trúc động từ 1", "enjoy + -ing, want + to… và patterns phổ biến.", "words-grammar"),
  unit(88, "verb-constructions-2", "Verb constructions 2", "Cấu trúc động từ 2", "make someone do, suggest + -ing…", "words-grammar"),
  unit(89, "adjectives", "Adjectives", "Tính từ", "Vị trí, trật tự và tính từ mô tả con người/vật.", "words-grammar"),
  unit(90, "prepositions-place-movement", "Prepositions: place and movement", "Giới từ chỉ nơi chốn và chuyển động", "In/at/on và into/onto/through.", "words-grammar"),
  unit(91, "adverbs", "Adverbs", "Trạng từ", "Cách, tần suất và mức độ.", "words-grammar"),
  unit(92, "time-and-sequence", "Time and sequence", "Thời gian và trình tự", "First, then, meanwhile, eventually…", "connecting"),
  unit(93, "addition-and-contrast", "Addition and contrast", "Bổ sung và tương phản", "Moreover, however, although…", "connecting"),
  unit(94, "reason-purpose-result-condition", "Reason, purpose, result, condition", "Lý do, mục đích, kết quả, điều kiện", "Because, so that, unless…", "connecting"),
  unit(95, "formal-informal-english", "Formal and informal English", "Tiếng Anh trang trọng và thân mật", "Register, từ thay thế và ngữ cảnh.", "style"),
  unit(96, "completing-forms-and-cvs", "Completing forms and CVs", "Điền form và CV", "Từ vựng hồ sơ xin việc và biểu mẫu.", "style"),
  unit(97, "writing-an-essay", "Writing an essay", "Viết bài luận", "Bố cục, linking và academic tone cơ bản.", "style"),
  unit(98, "formal-letters-emails", "Formal letters and emails", "Thư và email trang trọng", "Mở đầu, kết thư và cụm lịch sự.", "style"),
  unit(99, "informal-emails-messages", "Informal emails and messages", "Email và tin nhắn thân mật", "Emoji, viết tắt và giọng điệu gần gũi.", "style"),
  unit(100, "abbreviations", "Abbreviations", "Viết tắt", "ASAP, FAQ, HR và viết tắt thường gặp.", "style"),
];

const CATALOG_BY_ID = new Map(EVIU_PRE_INTERMEDIATE_CATALOG.map((entry) => [entry.id, entry]));

export function getEVIUPreIntermediateCatalogEntry(unitId: string): VocabularyUnitCatalogEntry | null {
  return CATALOG_BY_ID.get(unitId) ?? null;
}

export function listEVIUPreIntermediateCatalog(): readonly VocabularyUnitCatalogEntry[] {
  return EVIU_PRE_INTERMEDIATE_CATALOG;
}
