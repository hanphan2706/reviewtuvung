export type EVIUElementarySection =
  | "people"
  | "at-home"
  | "school-work"
  | "leisure"
  | "world"
  | "social"
  | "verbs"
  | "grammar";

export type VocabularyUnitCatalogEntry = {
  id: string;
  unitNumber: number;
  topic: string;
  topicVi: string;
  title: string;
  titleVi: string;
  description: string;
  section: EVIUElementarySection;
  level: "A1";
  status: "published" | "coming-soon";
  sourceBook: string;
};

export const EVIU_ELEMENTARY_SECTION_LABELS: Record<EVIUElementarySection, string> = {
  people: "Con người",
  "at-home": "Ở nhà",
  "school-work": "Trường học và công việc",
  leisure: "Giải trí",
  world: "Thế giới xung quanh",
  social: "Vấn đề xã hội",
  verbs: "Động từ hàng ngày",
  grammar: "Từ vựng và ngữ pháp",
};

function unit(
  unitNumber: number,
  slug: string,
  topic: string,
  topicVi: string,
  description: string,
  section: EVIUElementarySection,
  status: VocabularyUnitCatalogEntry["status"] = "published",
): VocabularyUnitCatalogEntry {
  const id = unitNumber === 10 ? "food-a1" : `eviu-el-${String(unitNumber).padStart(2, "0")}-${slug}`;
  return {
    id,
    unitNumber,
    topic,
    topicVi,
    title: topic,
    titleVi: topicVi,
    description,
    section,
    level: "A1",
    status,
    sourceBook: `English Vocabulary in Use · Elementary · Unit ${unitNumber}`,
  };
}

/** 60 unit EVIU Elementary (3rd ed.) — metadata catalog; nội dung đầy đủ biên soạn dần. */
export const EVIU_ELEMENTARY_CATALOG: readonly VocabularyUnitCatalogEntry[] = [
  unit(1, "family", "The family", "Gia đình", "Thành viên gia đình và cách gọi họ hàng thân thích.", "people"),
  unit(
    2,
    "birth-marriage-death",
    "Birth, marriage and death",
    "Sinh ra, kết hôn và cái chết",
    "Từ vựng về các sự kiện lớn trong đời người và lễ nghi liên quan.",
    "people",
  ),
  unit(
    3,
    "body",
    "Parts of the body",
    "Các bộ phận cơ thể",
    "Tên các bộ phận cơ thể thường dùng khi mô tả hoặc nói về sức khỏe.",
    "people",
  ),
  unit(4, "clothes", "Clothes", "Quần áo", "Trang phục và phụ kiện mặc hằng ngày theo mùa và hoàn cảnh.", "people"),
  unit(
    5,
    "describing-people",
    "Describing people",
    "Miêu tả con người",
    "Ngoại hình, tính cách và cách nói về người khác một cách tự nhiên.",
    "people",
  ),
  unit(
    6,
    "health",
    "Health and illness",
    "Sức khỏe và bệnh tật",
    "Triệu chứng, bệnh thường gặp và cách nói khi đi khám hoặc nghỉ ốm.",
    "people",
  ),
  unit(7, "feelings", "Feelings", "Cảm xúc", "Cách diễn đạt vui, buồn, lo lắng và các trạng thái cảm xúc khác.", "people"),
  unit(
    8,
    "conversations-greetings",
    "Conversations 1: Greetings and wishes",
    "Hội thoại 1: Chào hỏi và lời chúc",
    "Lời chào, chúc mừng và các câu xã giao lịch sự trong đời sống hàng ngày.",
    "people",
  ),
  unit(
    9,
    "conversations-useful",
    "Conversations 2: Useful words and expressions",
    "Hội thoại 2: Từ và cụm từ hữu ích",
    "Những cụm ngắn giúp hội thoại trôi chảy hơn khi nghe và nói.",
    "people",
  ),
  unit(
    10,
    "food-drink",
    "Food and drink",
    "Ăn uống",
    "Từ vựng về bữa ăn, đồ uống, đồ ăn nhanh và rau củ quả trong sinh hoạt hằng ngày.",
    "at-home",
    "published",
  ),
  unit(
    11,
    "kitchen",
    "In the kitchen",
    "Trong bếp",
    "Đồ dùng và thiết bị trong bếp — nơi nấu nướng và chuẩn bị bữa ăn.",
    "at-home",
  ),
  unit(
    12,
    "bedroom-bathroom",
    "In the bedroom and bathroom",
    "Phòng ngủ và phòng tắm",
    "Đồ nội thất, vật dụng vệ sinh và thói quen chăm sóc cá nhân ở nhà.",
    "at-home",
  ),
  unit(
    13,
    "living-room",
    "In the living room",
    "Phòng khách",
    "Đồ đạc và không gian sinh hoạt chung trong nhà.",
    "at-home",
  ),
  unit(14, "jobs", "Jobs", "Nghề nghiệp", "Tên nghề và môi trường làm việc cơ bản.", "school-work"),
  unit(
    15,
    "school",
    "At school and university",
    "Ở trường và đại học",
    "Môn học, dụng cụ học tập và hoạt động trong môi trường giáo dục.",
    "school-work",
  ),
  unit(
    16,
    "communications",
    "Communications",
    "Giao tiếp",
    "Thư từ, email và các hình thức liên lạc ngoài điện thoại.",
    "school-work",
  ),
  unit(
    17,
    "phone",
    "Your phone",
    "Điện thoại của bạn",
    "Từ vựng về smartphone, tin nhắn, cuộc gọi và ứng dụng thường dùng.",
    "school-work",
  ),
  unit(18, "holidays", "Holidays", "Kỳ nghỉ", "Du lịch, đặt tour và trải nghiệm khi đi nghỉ dưỡng.", "leisure"),
  unit(
    19,
    "shopping",
    "Shops and shopping",
    "Cửa hàng và mua sắm",
    "Loại hình cửa hàng, cách mua bán và thanh toán khi đi chợ hoặc trung tâm thương mại.",
    "leisure",
  ),
  unit(
    20,
    "online-shopping",
    "Online shopping",
    "Mua sắm trực tuyến",
    "Đặt hàng, giao hàng và các thuật ngữ khi mua sắm trên mạng.",
    "leisure",
  ),
  unit(21, "hotel", "In a hotel", "Ở khách sạn", "Check-in, phòng nghỉ và dịch vụ khi lưu trú tại khách sạn.", "leisure"),
  unit(22, "eating-out", "Eating out", "Ăn ngoài", "Gọi món, thanh toán và trải nghiệm khi ăn ở quán hoặc nhà hàng.", "leisure"),
  unit(23, "sports", "Sports", "Thể thao", "Môn thể thao, dụng cụ tập luyện và hoạt động thể chất.", "leisure"),
  unit(24, "cinema", "Cinema", "Rạp chiếu phim", "Thể loại phim, rạp chiếu và trải nghiệm xem phim.", "leisure"),
  unit(
    25,
    "free-time-home",
    "Free time at home",
    "Giải trí ở nhà",
    "Sở thích và hoạt động thư giãn khi ở nhà.",
    "leisure",
  ),
  unit(
    26,
    "music",
    "Music and musical instruments",
    "Âm nhạc và nhạc cụ",
    "Thể loại nhạc, nhạc cụ và cách nói về âm nhạc yêu thích.",
    "leisure",
  ),
  unit(
    27,
    "countries",
    "Countries and nationalities",
    "Quốc gia và quốc tịch",
    "Tên quốc gia, dân tộc và cách nói về nguồn gốc của bản thân.",
    "world",
  ),
  unit(28, "weather", "Weather", "Thời tiết", "Mưa nắng, nhiệt độ và dự báo thời tiết trong đời sống hàng ngày.", "world"),
  unit(
    29,
    "town",
    "In the town",
    "Trong thành phố",
    "Công trình, dịch vụ công cộng và địa điểm quen thuộc ở đô thị.",
    "world",
  ),
  unit(
    30,
    "countryside",
    "In the countryside",
    "Ở nông thôn",
    "Cảnh quan, nông trại và cuộc sống bên ngoài thành phố.",
    "world",
  ),
  unit(31, "animals", "Animals", "Động vật", "Thú cưng, động vật hoang dã và sinh vật quen gặp trong đời sống.", "world"),
  unit(32, "travelling", "Travelling", "Đi lại", "Phương tiện, ga sân bay và trải nghiệm khi di chuyển xa.", "world"),
  unit(33, "uk-culture", "UK culture", "Văn hóa Anh", "Lễ hội, phong tục và nét văn hóa đặc trưng nước Anh.", "world"),
  unit(34, "crime", "Crime", "Tội phạm", "Từ vựng về pháp luật, an ninh và các vấn đề liên quan đến tội phạm.", "social"),
  unit(35, "media", "The media", "Truyền thông", "Báo chí, truyền hình và mạng xã hội trong đời sống hiện đại.", "social"),
  unit(
    36,
    "problems-home-work",
    "Problems at home and work",
    "Vấn đề ở nhà và nơi làm việc",
    "Khó khăn thường gặp trong gia đình và môi trường công sở.",
    "social",
  ),
  unit(
    37,
    "global-problems",
    "Global problems",
    "Vấn đề toàn cầu",
    "Thiên tai, môi trường và các thách thức ảnh hưởng nhiều quốc gia.",
    "social",
  ),
  unit(38, "have", "Have / had / had", "Have / had / had", "Cách dùng và cụm từ thường gặp với động từ have.", "verbs"),
  unit(39, "go", "Go / went / gone", "Go / went / gone", "Các nghĩa và collocation phổ biến với động từ go.", "verbs"),
  unit(40, "do", "Do / did / done", "Do / did / done", "Động từ do trong sinh hoạt và công việc hàng ngày.", "verbs"),
  unit(41, "make", "Make / made / made", "Make / made / made", "Cụm từ thông dụng với make — từ nấu ăn đến quyết định.", "verbs"),
  unit(42, "come", "Come / came / come", "Come / came / come", "Cách dùng come trong hội thoại và mô tả chuyển động.", "verbs"),
  unit(43, "take", "Take / took / taken", "Take / took / taken", "Take trong thời gian, chuyến đi và thói quen hằng ngày.", "verbs"),
  unit(
    44,
    "bring",
    "Bring / brought / brought",
    "Bring / brought / brought",
    "Mang đến, mang theo và các cụm động từ với bring.",
    "verbs",
  ),
  unit(45, "get", "Get / got / got", "Get / got / got", "Động từ get đa nghĩa trong giao tiếp đời thường.", "verbs"),
  unit(46, "phrasal-verbs", "Phrasal verbs", "Cụm động từ", "Những phrasal verb căn bản gặp nhiều trong hội thoại.", "verbs"),
  unit(47, "everyday-things", "Everyday things", "Việc hằng ngày", "Từ vựng mô tả thói quen và hoạt động lặp lại mỗi ngày.", "verbs"),
  unit(48, "talking", "Talking", "Nói chuyện", "Cách diễn đạt khi trò chuyện, kể chuyện và hỏi đáp.", "verbs"),
  unit(49, "moving", "Moving", "Di chuyển", "Từ vựng về chuyển nhà, đổi chỗ và các hướng di chuyển.", "verbs"),
  unit(
    50,
    "conjunctions",
    "Conjunctions and connecting words",
    "Liên từ và từ nối",
    "Từ nối giúp câu mạch lạc hơn khi viết và nói.",
    "grammar",
  ),
  unit(51, "days-months", "Days, months, seasons", "Ngày, tháng, mùa", "Thời gian trong năm và cách nói về lịch, mùa vụ.", "grammar"),
  unit(52, "time-words", "Time words", "Từ chỉ thời gian", "Trạng từ và cụm từ chỉ tần suất, thời điểm trong ngày.", "grammar"),
  unit(53, "places", "Places", "Địa điểm", "Giới từ và danh từ chỉ nơi chốn thường gặp.", "grammar"),
  unit(54, "manner", "Manner", "Cách thức", "Trạng từ và cụm từ mô tả cách một việc được thực hiện.", "grammar"),
  unit(
    55,
    "uncountable-nouns",
    "Common uncountable nouns",
    "Danh từ không đếm được",
    "Những danh từ không đếm được hay nhầm lẫn với người học Việt Nam.",
    "grammar",
  ),
  unit(
    56,
    "adjectives",
    "Common adjectives: Good and bad things",
    "Tính từ: Điều tốt và chưa tốt",
    "Tính từ mô tả sự vật, trải nghiệm tích cực và tiêu cực.",
    "grammar",
  ),
  unit(
    57,
    "prepositions",
    "Words and prepositions",
    "Từ đi với giới từ",
    "Cặp từ–giới từ cố định cần học theo cụm thay vì tách rời.",
    "grammar",
  ),
  unit(58, "prefixes", "Prefixes", "Tiền tố", "Tiền tố giúp đoán nghĩa và mở rộng vốn từ nhanh hơn.", "grammar"),
  unit(59, "suffixes", "Suffixes", "Hậu tố", "Hậu tố tạo danh từ, tính từ và trạng từ từ gốc quen thuộc.", "grammar"),
  unit(
    60,
    "confusing-words",
    "Words you may confuse",
    "Từ dễ nhầm",
    "Các cặp từ thường bị lẫn — phân biệt nghĩa và cách dùng đúng.",
    "grammar",
  ),
];

const CATALOG_BY_ID = new Map(EVIU_ELEMENTARY_CATALOG.map((entry) => [entry.id, entry]));

export function getVocabularyCatalogEntry(unitId: string): VocabularyUnitCatalogEntry | null {
  return CATALOG_BY_ID.get(unitId) ?? null;
}

export function listEVIUElementaryCatalog(): readonly VocabularyUnitCatalogEntry[] {
  return EVIU_ELEMENTARY_CATALOG;
}
