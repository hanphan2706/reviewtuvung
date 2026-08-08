import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";

export type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";

export type EVIUUpperIntermediateSection =
  | "learning"
  | "topics"
  | "feelings"
  | "concepts"
  | "connecting"
  | "word-formation"
  | "pronunciation"
  | "counting"
  | "phrasal"
  | "style";

export const EVIU_UPPER_INTERMEDIATE_SECTION_LABELS: Record<EVIUUpperIntermediateSection, string> = {
  learning: "Học từ vựng hiệu quả",
  topics: "Chủ đề đời sống",
  feelings: "Cảm xúc và hành động",
  concepts: "Khái niệm cơ bản",
  connecting: "Liên kết ý",
  "word-formation": "Cấu tạo từ",
  pronunciation: "Phát âm và từ dễ nhầm",
  counting: "Đếm người và vật",
  phrasal: "Phrasal verb & cụm động từ",
  style: "Văn phong và biến thể",
};

function unit(
  unitNumber: number,
  slug: string,
  topic: string,
  topicVi: string,
  description: string,
  section: EVIUUpperIntermediateSection,
  status: VocabularyUnitCatalogEntry["status"] = "coming-soon",
): VocabularyUnitCatalogEntry {
  return {
    id: `eviu-up-${String(unitNumber).padStart(2, "0")}-${slug}`,
    unitNumber,
    topic,
    topicVi,
    title: topic,
    titleVi: topicVi,
    description,
    section,
    level: "B2",
    status,
    sourceBook: `English Vocabulary in Use · Upper-Intermediate · Unit ${unitNumber}`,
  };
}

/** 101 unit EVIU Upper-Intermediate (4th ed.) — metadata catalog. */
export const EVIU_UPPER_INTERMEDIATE_CATALOG: readonly VocabularyUnitCatalogEntry[] = [
  unit(1, "learning-vocabulary", "Learning vocabulary", "Học từ vựng", "Chiến lược học từ: collocation, register và ghi nhớ theo nhóm.", "learning"),
  unit(2, "vocabulary-notebook", "Organising a vocabulary notebook", "Sổ tay từ vựng", "Cách sắp xếp notebook để ôn từ hiệu quả.", "learning"),
  unit(3, "using-your-dictionary", "Using your dictionary", "Dùng từ điển", "Tra nghĩa, phát âm và chọn nét nghĩa đúng ngữ cảnh.", "learning"),
  unit(4, "guessing-explaining-meaning", "Guessing and explaining meaning", "Đoán và giải thích nghĩa", "Đoán nghĩa từ ngữ cảnh và diễn giải bằng tiếng Anh.", "learning"),
  unit(5, "countries-nationalities-languages", "Countries, nationalities and languages", "Quốc gia, quốc tịch và ngôn ngữ", "Tên nước, cách gọi người và vùng ngôn ngữ thế giới.", "topics"),
  unit(6, "the-weather", "The weather", "Thời tiết", "Mô tả lạnh, nóng, mưa gió và các mức độ thời tiết.", "topics"),
  unit(7, "describing-appearance", "Describing people: appearance", "Miêu tả ngoại hình", "Tóc, khuôn mặt, dáng người và ấn tượng tổng thể.", "topics"),
  unit(8, "describing-personality", "Describing people: personality", "Miêu tả tính cách", "Tính cách, thái độ và sắc thái tích cực/tiêu cực của từ.", "topics"),
  unit(9, "idioms-describing-people", "Idioms describing people", "Thành ngữ miêu tả người", "Idiom về tính cách và cách cư xử trong đời sống.", "topics"),
  unit(10, "relationships", "Relationships", "Các mối quan hệ", "Bạn bè, đồng nghiệp, hẹn hò và cụm nói về quan hệ.", "topics"),
  unit(11, "at-home", "At home", "Ở nhà", "Loại nhà, phòng ít gặp và đồ dùng hàng ngày.", "topics"),
  unit(12, "everyday-minor-problems", "Everyday minor problems", "Rắc rối nhỏ hàng ngày", "Hỏng đồ, thương tích nhẹ và sự cố đời thường.", "topics"),
  unit(13, "global-problems", "Global problems", "Vấn đề toàn cầu", "Thiên tai, dịch bệnh và từ vựng về nạn nhân/người sống sót.", "topics"),
  unit(14, "education", "Education", "Giáo dục", "Hệ thống trường học Anh và kỳ thi phổ thông.", "topics"),
  unit(15, "higher-education", "Higher education", "Giáo dục đại học", "Bằng cấp, học phần, campus và học phí.", "topics"),
  unit(16, "work", "Work", "Công việc", "Vai trò nơi làm việc, nghề nghiệp và cụm về việc làm.", "topics"),
  unit(17, "business", "Business", "Kinh doanh", "Khởi nghiệp, thị trường, cạnh tranh và thuật ngữ công ty.", "topics"),
  unit(18, "sport", "Sport", "Thể thao", "Môn thể thao, dụng cụ, điền kinh và thi đấu.", "topics"),
  unit(19, "art-and-literature", "Art and literature", "Nghệ thuật và văn học", "Mỹ thuật, thể loại tranh và từ vựng về tiểu thuyết.", "topics"),
  unit(20, "theatre-and-cinema", "Theatre and cinema", "Sân khấu và điện ảnh", "Thuật ngữ xem kịch, phim và biểu diễn.", "topics"),
  unit(21, "music", "Music", "Âm nhạc", "Thể loại, nhạc cụ và buổi biểu diễn.", "topics"),
  unit(22, "food", "Food", "Ẩm thực", "Món ăn, khẩu vị và cách nói về đồ ăn ở mức B2.", "topics"),
  unit(23, "physical-geography", "Physical geography", "Địa lý tự nhiên", "Địa hình, khí hậu vùng và cảnh quan.", "topics"),
  unit(24, "environmental-problems", "Environmental problems", "Vấn đề môi trường", "Ô nhiễm, bảo tồn và biến đổi môi trường.", "topics"),
  unit(25, "towns", "Towns", "Đô thị", "Cơ sở hạ tầng, khu phố và đời sống thành phố.", "topics"),
  unit(26, "the-natural-world", "The natural world", "Thế giới tự nhiên", "Động thực vật và môi trường sống.", "topics"),
  unit(27, "clothes", "Clothes", "Quần áo", "Trang phục, chất liệu và phong cách mặc.", "topics"),
  unit(28, "health-and-medicine", "Health and medicine", "Sức khỏe và y học", "Triệu chứng, điều trị và từ vựng y tế.", "topics"),
  unit(29, "medicine-and-technology", "Medicine and technology", "Y học và công nghệ", "Thiết bị y tế và tiến bộ điều trị.", "topics"),
  unit(30, "health-and-lifestyle", "Health and lifestyle", "Sức khỏe và lối sống", "Thói quen lành mạnh và cân bằng cuộc sống.", "topics"),
  unit(31, "travel", "Travel", "Du lịch", "Phương tiện, hành trình và trải nghiệm đi lại.", "topics"),
  unit(32, "holidays", "Holidays", "Kỳ nghỉ", "Loại hình nghỉ dưỡng và hoạt động khi đi chơi.", "topics"),
  unit(33, "science-and-technology", "Science and technology", "Khoa học và công nghệ", "Nghiên cứu, phát minh và thuật ngữ khoa học.", "topics"),
  unit(34, "computers", "Computers", "Máy tính", "Phần cứng, phần mềm và sự cố máy tính.", "topics"),
  unit(35, "communications-internet", "Communications and the Internet", "Truyền thông và Internet", "Kết nối mạng và cách giao tiếp số.", "topics"),
  unit(36, "social-media", "Social media", "Mạng xã hội", "Đăng bài, tương tác và hành vi trên mạng.", "topics"),
  unit(37, "press-and-media", "The press and the media", "Báo chí và truyền thông", "Tin tức, biên tập và các loại phương tiện.", "topics"),
  unit(38, "politics-institutions", "Politics and public institutions", "Chính trị và thể chế", "Chính phủ, bầu cử và cơ quan công quyền.", "topics"),
  unit(39, "crime", "Crime", "Tội phạm", "Loại tội, điều tra và hệ thống tư pháp.", "topics"),
  unit(40, "money", "Money", "Tiền bạc", "Tài chính cá nhân, ngân hàng và chi tiêu.", "topics"),
  unit(41, "describing-objects", "Describing objects", "Miêu tả đồ vật", "Hình dạng, chất liệu và đặc điểm vật thể.", "topics"),
  unit(42, "belief-and-opinion", "Belief and opinion", "Niềm tin và quan điểm", "Bày tỏ ý kiến, đồng ý và nghi ngờ.", "feelings"),
  unit(43, "pleasant-unpleasant-feelings", "Pleasant and unpleasant feelings", "Cảm xúc dễ chịu và khó chịu", "Sắc thái cảm xúc tích cực và tiêu cực.", "feelings"),
  unit(44, "like-dislike-desire", "Like, dislike and desire", "Thích, không thích và khao khát", "Diễn đạt sở thích và mong muốn mạnh.", "feelings"),
  unit(45, "speaking", "Speaking", "Nói chuyện", "Cách nói, giọng điệu và tương tác hội thoại.", "feelings"),
  unit(46, "the-six-senses", "The six senses", "Sáu giác quan", "Thị giác, thính giác và các giác quan khác.", "feelings"),
  unit(47, "what-your-body-does", "What your body does", "Cơ thể làm gì", "Động từ mô tả phản ứng và cử chỉ cơ thể.", "feelings"),
  unit(48, "praising-and-criticising", "Praising and criticising", "Khen và phê bình", "Cụm khen ngợi và góp ý lịch sự.", "feelings"),
  unit(49, "emotions-and-moods", "Emotions and moods", "Cảm xúc và tâm trạng", "Trạng thái cảm xúc và thay đổi tâm trạng.", "feelings"),
  unit(50, "commenting-problematic-situations", "Commenting on problematic situations", "Bàn về tình huống khó", "Phản ứng ngôn ngữ khi việc không suôn sẻ.", "feelings"),
  unit(51, "number-quantity-degree", "Number, quantity, degree and intensity", "Số lượng, mức độ và cường độ", "Cách nói nhiều/ít và mức độ mạnh yếu.", "concepts"),
  unit(52, "numbers-and-shapes", "Numbers and shapes", "Số và hình dạng", "Số liệu và hình học trong đời sống.", "concepts"),
  unit(53, "time", "Time", "Thời gian", "Cụm chỉ thời điểm, khoảng thời gian và tiến trình.", "concepts"),
  unit(54, "distances-and-dimensions", "Distances and dimensions", "Khoảng cách và kích thước", "Dài, rộng, cao và khoảng cách.", "concepts"),
  unit(55, "obligation-possibility", "Obligation, need, possibility and probability", "Bắt buộc, nhu cầu và khả năng", "Modal và cụm nói về khả năng/xác suất.", "concepts"),
  unit(56, "sound-and-light", "Sound and light", "Âm thanh và ánh sáng", "Mô tả tiếng động, sáng tối và hiệu ứng.", "concepts"),
  unit(57, "possession-and-giving", "Possession and giving", "Sở hữu và trao nhận", "Have, own, give và cụm liên quan.", "concepts"),
  unit(58, "movement-and-speed", "Movement and speed", "Chuyển động và tốc độ", "Động từ chuyển động và tốc độ.", "concepts"),
  unit(59, "texture-brightness-weight", "Texture, brightness, weight and density", "Kết cấu, độ sáng và trọng lượng", "Tính từ cảm giác và vật lý.", "concepts"),
  unit(60, "success-failure-difficulty", "Success, failure and difficulty", "Thành công, thất bại và khó khăn", "Cụm nói về kết quả và mức độ khó.", "concepts"),
  unit(61, "time-connecting-words", "Time: connecting words and expressions", "Liên từ thời gian", "When, while, meanwhile và cụm nối thời gian.", "connecting"),
  unit(62, "condition", "Condition", "Điều kiện", "If, unless, provided that và sắc thái điều kiện.", "connecting"),
  unit(63, "cause-reason-purpose-result", "Cause, reason, purpose and result", "Nguyên nhân, mục đích và kết quả", "Because, so that, as a result…", "connecting"),
  unit(64, "concession-and-contrast", "Concession and contrast", "Nhượng bộ và tương phản", "Although, however, whereas…", "connecting"),
  unit(65, "addition", "Addition", "Bổ sung ý", "Moreover, in addition, besides…", "connecting"),
  unit(66, "referring-words", "Referring words", "Từ thay thế / chỉ chiếu", "This, that, such và cách tránh lặp.", "connecting"),
  unit(67, "discourse-markers-spoken", "Discourse markers in spoken English", "Dấu hiệu diễn ngôn khi nói", "Well, actually, I mean… trong hội thoại.", "connecting"),
  unit(68, "linking-words-writing", "Linking words in writing", "Liên từ trong văn viết", "Liên kết ý cho bài viết học thuật.", "connecting"),
  unit(69, "talking-and-communicating", "Talking and communicating", "Nói và giao tiếp", "Cụm tương tác và duy trì hội thoại.", "connecting"),
  unit(70, "suffixes", "Suffixes", "Hậu tố", "Tạo từ mới bằng hậu tố phổ biến.", "word-formation"),
  unit(71, "prefixes", "Prefixes", "Tiền tố", "Đổi nghĩa từ bằng tiền tố.", "word-formation"),
  unit(72, "roots", "Roots", "Gốc từ", "Nhận diện gốc Latin/Hy Lạp để đoán nghĩa.", "word-formation"),
  unit(73, "abstract-nouns", "Abstract nouns", "Danh từ trừu tượng", "Freedom, growth và danh từ khái niệm.", "word-formation"),
  unit(74, "compound-adjectives", "Compound adjectives", "Tính từ ghép", "Well-known, long-term và quy tắc viết.", "word-formation"),
  unit(75, "compound-nouns-1", "Compound nouns 1: noun + noun", "Danh từ ghép 1", "Noun + noun và cách nhấn âm.", "word-formation"),
  unit(76, "compound-nouns-2", "Compound nouns 2: verb + preposition", "Danh từ ghép 2", "Checkout, takeover và dạng từ động từ.", "word-formation"),
  unit(77, "binomials", "Binomials", "Cặp từ cố định", "Safe and sound, odds and ends…", "word-formation"),
  unit(78, "abbreviations-acronyms", "Abbreviations and acronyms", "Viết tắt và từ viết tắt", "FAQ, NATO và cách đọc viết tắt.", "word-formation"),
  unit(79, "multi-word-expressions", "Multi-word expressions", "Cụm nhiều từ", "Chunk ngôn ngữ tự nhiên ở mức B2.", "word-formation"),
  unit(80, "words-commonly-mispronounced", "Words commonly mispronounced", "Từ thường phát âm sai", "Các từ dễ đọc nhầm và mẹo nhớ.", "pronunciation"),
  unit(81, "onomatopoeic-words", "Onomatopoeic words", "Từ tượng thanh", "Buzz, crash và từ bắt chước âm thanh.", "pronunciation"),
  unit(82, "homophones-homographs", "Homophones and homographs", "Đồng âm và đồng tự", "Từ phát âm/viết giống nhưng nghĩa khác.", "pronunciation"),
  unit(83, "uncountable-nouns", "Uncountable nouns", "Danh từ không đếm được", "Advice, furniture và lượng từ đi kèm.", "counting"),
  unit(84, "plural-only-nouns", "Words that only occur in the plural", "Từ chỉ dùng số nhiều", "Scissors, trousers và danh từ số nhiều cố định.", "counting"),
  unit(85, "countable-uncountable-meanings", "Countable and uncountable nouns with different meanings", "Danh từ đếm/không đếm khác nghĩa", "Khi cùng một từ đổi nghĩa theo đếm được hay không.", "counting"),
  unit(86, "making-uncountable-countable", "Making uncountable nouns countable", "Biến danh từ không đếm thành đếm được", "A piece of, a bit of và đơn vị đếm.", "counting"),
  unit(87, "collective-nouns", "Collective nouns", "Danh từ tập hợp", "Team, staff, flock và sự hòa hợp chủ-vị.", "counting"),
  unit(88, "containers-and-contents", "Containers and contents", "Đồ đựng và nội dung", "Bottle of, pack of và cụm lượng.", "counting"),
  unit(89, "expressions-do-make", "Expressions with do and make", "Cụm với do và make", "Do homework, make a decision và phân biệt.", "phrasal"),
  unit(90, "expressions-bring-take", "Expressions with bring and take", "Cụm với bring và take", "Bring up, take after và idioms liên quan.", "phrasal"),
  unit(91, "expressions-get", "Expressions with get", "Cụm với get", "Get on, get over và các nghĩa đa dạng.", "phrasal"),
  unit(92, "expressions-set-put", "Expressions with set and put", "Cụm với set và put", "Set up, put off và collocation phổ biến.", "phrasal"),
  unit(93, "expressions-come-go", "Expressions with come and go", "Cụm với come và go", "Come across, go through và idioms.", "phrasal"),
  unit(94, "expressions-other-verbs", "Expressions with other common verbs", "Cụm với động từ phổ biến khác", "Keep, break, catch và cụm cố định.", "phrasal"),
  unit(95, "formal-informal-1", "Formal and informal words 1", "Từ trang trọng và thân mật 1", "Chọn từ theo register trong nói/viết.", "style"),
  unit(96, "formal-informal-2", "Formal and informal words 2", "Từ trang trọng và thân mật 2", "Mở rộng cặp formal/informal thường gặp.", "style"),
  unit(97, "similes", "Similes", "So sánh như (simile)", "As… as… và hình ảnh so sánh tự nhiên.", "style"),
  unit(98, "proverbs", "Proverbs", "Tục ngữ", "Tục ngữ Anh và cách dùng trong ngữ cảnh.", "style"),
  unit(99, "signs-and-notices", "The language of signs and notices", "Ngôn ngữ biển báo", "Cấm, hướng dẫn và thông báo công cộng.", "style"),
  unit(100, "headline-english", "Headline English", "Tiếng Anh trên tiêu đề báo", "Rút gọn, danh từ hóa và phong cách headline.", "style"),
  unit(101, "us-english", "US English", "Tiếng Anh Mỹ", "Khác biệt Anh–Mỹ về từ vựng thường dùng.", "style"),
];

const CATALOG_BY_ID = new Map(EVIU_UPPER_INTERMEDIATE_CATALOG.map((entry) => [entry.id, entry]));

export function getEVIUUpperIntermediateCatalogEntry(unitId: string): VocabularyUnitCatalogEntry | null {
  return CATALOG_BY_ID.get(unitId) ?? null;
}

export function listEVIUUpperIntermediateCatalog(): readonly VocabularyUnitCatalogEntry[] {
  return EVIU_UPPER_INTERMEDIATE_CATALOG;
}
