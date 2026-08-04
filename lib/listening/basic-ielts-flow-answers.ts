/**
 * Basic IELTS Listening — extracted book questions + answers (pilot lessons).
 * Source: Scripts & Answer Key (OCR + page images); places lesson skipped (already in code).
 *
 * Living London: `bil-36.mp3` is concatenated Ex3+Ex4+Ex5 (36+37+38.MP3).
 * Original Ex3-only backup: `bil-36.ex3-only.mp3`.
 */

export type BasicIeltsDetailQuestion = {
  key: string;
  conversationEn: string;
  conversationVi: string;
  questionEn: string;
  questionVi: string;
  answerEn: string;
  answerVi: string;
};

export type BasicIeltsLessonAnswersDump = {
  partId: string;
  bookPages: readonly number[];
  bookAudioFile: string;
  detailPromptEn: string;
  detailPromptVi: string;
  detailQuestions: readonly BasicIeltsDetailQuestion[];
  notes?: string;
};

function q(
  key: string,
  conversationEn: string,
  conversationVi: string,
  questionEn: string,
  questionVi: string,
  answerEn: string,
  answerVi: string = answerEn,
): BasicIeltsDetailQuestion {
  return {
    key,
    conversationEn,
    conversationVi,
    questionEn,
    questionVi,
    answerEn,
    answerVi,
  };
}

/** 1. Unit 1 Ex1 — What is his name? (p.11, 04.MP3). Answer Key p.162 / Scripts p.96 */
export const BASIC_IELTS_U01_HIS_NAME: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u01-his-name",
  bookPages: [11],
  bookAudioFile: "04.MP3",
  detailPromptEn: "Listen to the conversations and answer the questions.",
  detailPromptVi: "Nghe các đoạn hội thoại và trả lời câu hỏi.",
  detailQuestions: [
    q(
      "q1",
      "1",
      "1",
      "A: What's Joseph's last name? / B: His last name is ______.",
      "A: Họ của Joseph là gì? / B: Họ của anh ấy là ______.",
      "Miller",
    ),
    q(
      "q2",
      "2",
      "2",
      "A: Sorry, what's your name again? / B: OK, my first name is ______ and my last name is spelled ______.",
      "A: Xin lỗi, tên bạn là gì nhỉ? / B: Tên tôi là ______ và họ đánh vần là ______.",
      "Maria; T-A-N-A-K-A",
    ),
    q(
      "q3",
      "3",
      "3",
      "A: Excuse me, what's her name? / B: ______, and her last name is spelled ______.",
      "A: Xin lỗi, tên cô ấy là gì? / B: ______, và họ đánh vần là ______.",
      "Sarah; G-R-E-E-N",
    ),
    q(
      "q4",
      "4",
      "4",
      "A: What is Ms. Smith's first name? / B: It's spelled ______.",
      "A: Tên của Ms. Smith là gì? / B: Đánh vần là ______.",
      "E-L-E-N-A",
    ),
    q(
      "q5",
      "5",
      "5",
      "A: Who is the man in the middle? / B: He is my friend, ______. / A: Where is he from? / B: He is from ______.",
      "A: Người đàn ông ở giữa là ai? / B: Đó là bạn tôi, ______. / A: Anh ấy đến từ đâu? / B: Anh ấy đến từ ______.",
      "Paulo; Brazil",
    ),
  ],
};

/** 2. Unit 1 Ex6 — What's your last name? (p.16, 09.MP3). Scripts p.99 / Answer Key ~164–165 */
export const BASIC_IELTS_U01_LAST_NAME: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u01-last-name",
  bookPages: [16],
  bookAudioFile: "09.MP3",
  detailPromptEn: "Listen to the conversations and complete the information about each person.",
  detailPromptVi: "Nghe các đoạn hội thoại và điền thông tin về mỗi người.",
  detailQuestions: [
    q("linda-last-name", "1. Linda", "1. Linda", "Last Name", "Họ", "Mandel"),
    q("linda-country", "1. Linda", "1. Linda", "Country", "Quốc gia", "Brazil"),
    q("linda-subject", "1. Linda", "1. Linda", "Subject", "Môn học", "Business"),
    q("joseph-last-name", "2. Joseph", "2. Joseph", "Last Name", "Họ", "Block"),
    q("joseph-country", "2. Joseph", "2. Joseph", "Country", "Quốc gia", "Finland"),
    q("joseph-subject", "2. Joseph", "2. Joseph", "Subject", "Môn học", "Engineering"),
    q("maclain-first-name", "3. Maclain", "3. Maclain", "First Name", "Tên", "Elena"),
    q("maclain-country", "3. Maclain", "3. Maclain", "Country", "Quốc gia", "Mexico"),
    q("maclain-subject", "3. Maclain", "3. Maclain", "Subject", "Môn học", "English"),
  ],
};

/** 3. Unit 2 Ex6 — Discriminating between teens and tens (p.22, 18.MP3). Scripts p.103–104 / AK p.167 */
export const BASIC_IELTS_U02_TEENS_TENS: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u02-teens-tens",
  bookPages: [22],
  bookAudioFile: "18.MP3",
  detailPromptEn: "Listen carefully and circle the correct numbers.",
  detailPromptVi: "Nghe kỹ và khoanh tròn số đúng.",
  detailQuestions: [
    q(
      "q1",
      "1",
      "1",
      "The student from New York bought (50 – 15) new books last week.",
      "Sinh viên từ New York đã mua (50 – 15) cuốn sách mới tuần trước.",
      "15",
    ),
    q(
      "q2",
      "2",
      "2",
      "My uncle George lives at (13 – 30) King’s Road.",
      "Chú George của tôi sống tại (13 – 30) King’s Road.",
      "30",
    ),
    q(
      "q3",
      "3",
      "3",
      "Mr. Johnson was (40 – 14) minutes late for his lecture.",
      "Ông Johnson đến muộn (40 – 14) phút cho buổi giảng.",
      "14",
    ),
    q(
      "q4",
      "4",
      "4",
      "It took (16 – 60) hours to finish his work.",
      "Phải mất (16 – 60) giờ để hoàn thành công việc của anh ấy.",
      "16",
    ),
    q(
      "q5",
      "5",
      "5",
      "Mary finished the test in (17 – 70) minutes.",
      "Mary hoàn thành bài kiểm tra trong (17 – 70) phút.",
      "70",
    ),
    q(
      "q6",
      "6",
      "6",
      "My friend Alan lost (19 – 90) pounds on the first day of class.",
      "Bạn Alan của tôi mất (19 – 90) bảng trong ngày học đầu tiên.",
      "19",
    ),
    q(
      "q7",
      "7",
      "7",
      "I paid (80 – 18) pounds for that coat.",
      "Tôi trả (80 – 18) bảng cho chiếc áo khoác đó.",
      "80",
    ),
    q(
      "q8",
      "8",
      "8",
      "He lives at (5062 – 1562) Green Street, York.",
      "Anh ấy sống tại (5062 – 1562) Green Street, York.",
      "5062",
    ),
    q(
      "q9",
      "9",
      "9",
      "Her address is (3040 – 1340) Farm Street, Brighton.",
      "Địa chỉ của cô ấy là (3040 – 1340) Farm Street, Brighton.",
      "1340",
    ),
    q(
      "q10",
      "10",
      "10",
      "We bought (14 – 40) CDs last month.",
      "Chúng tôi đã mua (14 – 40) đĩa CD tháng trước.",
      "40",
    ),
  ],
};

/** 4. Unit 2 Ex10 — Airports in the Southeast of Britain (p.24, 22.MP3). Scripts p.104–105 */
export const BASIC_IELTS_U02_AIRPORTS: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u02-airports",
  bookPages: [24],
  bookAudioFile: "22.MP3",
  detailPromptEn: "Listen to the recording and write down the numbers in the correct columns.",
  detailPromptVi: "Nghe bài ghi âm và viết các số vào đúng cột.",
  detailQuestions: [
    q("heathrow-miles", "Heathrow", "Heathrow", "Miles", "Dặm (miles)", "20"),
    q("heathrow-km", "Heathrow", "Heathrow", "Km", "Km", "33"),
    q(
      "heathrow-passengers",
      "Heathrow",
      "Heathrow",
      "Passengers per year",
      "Hành khách mỗi năm",
      "28 million",
      "28 triệu",
    ),
    q("gatwick-miles", "Gatwick", "Gatwick", "Miles", "Dặm (miles)", "30"),
    q("gatwick-km", "Gatwick", "Gatwick", "Km", "Km", "50"),
    q(
      "gatwick-passengers",
      "Gatwick",
      "Gatwick",
      "Passengers per year",
      "Hành khách mỗi năm",
      "10 million",
      "10 triệu",
    ),
  ],
};

/**
 * 5. Unit 2 Ex3–5 — Living in London (p.31–32).
 * Pilot audio 36.MP3 = Ex3 only; Ex4=37.MP3, Ex5=38.MP3.
 * Scripts p.112–113.
 */
export const BASIC_IELTS_U02_LIVING_LONDON: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u02-living-london",
  bookPages: [31, 32],
  bookAudioFile: "36.MP3",
  detailPromptEn:
    "Listen to the talk and write down the prices in the boxes provided. (Ex3 transport / Ex4 living / Ex5 clothes)",
  detailPromptVi:
    "Nghe bài nói và viết giá vào các ô. (Ex3 giao thông / Ex4 sinh hoạt / Ex5 quần áo)",
  notes:
    "bil-36.mp3 covers Ex3 only. Ex4 answers need 37.MP3; Ex5 need 38.MP3. Prices from Scripts p.112–113.",
  detailQuestions: [
    // Ex3 — Transport (36.MP3)
    q(
      "ex3-bus",
      "Ex3 Transport",
      "Ex3 Giao thông",
      "Bus fare (minimum)",
      "Giá xe buýt (tối thiểu)",
      "40p",
      "40 xu",
    ),
    q(
      "ex3-underground",
      "Ex3 Transport",
      "Ex3 Giao thông",
      "Underground fare (minimum)",
      "Giá tàu điện ngầm (tối thiểu)",
      "50p",
      "50 xu",
    ),
    q(
      "ex3-taxi",
      "Ex3 Transport",
      "Ex3 Giao thông",
      "Taxi fare (minimum)",
      "Giá taxi (tối thiểu)",
      "£2",
      "2 bảng",
    ),
    q(
      "ex3-coach",
      "Ex3 Transport",
      "Ex3 Giao thông",
      "Coach fare",
      "Giá xe khách",
      "£1.20",
      "1 bảng 20",
    ),
    // Ex4 — Living (37.MP3)
    q(
      "ex4-room",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "Rent for one room",
      "Thuê một phòng",
      "£40 a week",
      "40 bảng / tuần",
    ),
    q(
      "ex4-flat",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "Rent for a one-bedroom flat",
      "Thuê căn hộ một phòng ngủ",
      "£200 per week",
      "200 bảng / tuần",
    ),
    q(
      "ex4-phone",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "A local telephone call",
      "Một cuộc gọi nội hạt",
      "50p",
      "50 xu",
    ),
    q(
      "ex4-letter",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "Posting a letter",
      "Gửi một lá thư",
      "40p",
      "40 xu",
    ),
    q(
      "ex4-beer",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "A bottle of beer",
      "Một chai bia",
      "£1.50",
      "1 bảng 50",
    ),
    q(
      "ex4-wash-large",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "Use of a large washing machine",
      "Dùng máy giặt lớn",
      "£2.50",
      "2 bảng 50",
    ),
    q(
      "ex4-wash-small",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "Use of a small washing machine",
      "Dùng máy giặt nhỏ",
      "£1.80",
      "1 bảng 80",
    ),
    q(
      "ex4-tumble",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "Use of a tumble drier",
      "Dùng máy sấy",
      "£1.50",
      "1 bảng 50",
    ),
    q(
      "ex4-powder",
      "Ex4 Living",
      "Ex4 Sinh hoạt",
      "Washing powder (a medium-sized packet)",
      "Bột giặt (gói cỡ trung)",
      "£2.40",
      "2 bảng 40",
    ),
    // Ex5 — Clothes (38.MP3)
    q("ex5-shirt", "Ex5 Clothes", "Ex5 Quần áo", "A shirt", "Một chiếc áo sơ mi", "£12", "12 bảng"),
    q("ex5-jacket", "Ex5 Clothes", "Ex5 Quần áo", "A jacket", "Một chiếc áo khoác", "£45", "45 bảng"),
    q(
      "ex5-jeans",
      "Ex5 Clothes",
      "Ex5 Quần áo",
      "A pair of jeans",
      "Một chiếc quần jean",
      "£25",
      "25 bảng",
    ),
    q(
      "ex5-shoes",
      "Ex5 Clothes",
      "Ex5 Quần áo",
      "A pair of running shoes",
      "Một đôi giày chạy",
      "£35",
      "35 bảng",
    ),
    q(
      "ex5-coat",
      "Ex5 Clothes",
      "Ex5 Quần áo",
      "A warm coat",
      "Một chiếc áo ấm",
      "£50",
      "50 bảng",
    ),
    q(
      "ex5-raincoat",
      "Ex5 Clothes",
      "Ex5 Quần áo",
      "A light raincoat",
      "Một chiếc áo mưa nhẹ",
      "£39",
      "39 bảng",
    ),
    q("ex5-skirt", "Ex5 Clothes", "Ex5 Quần áo", "A skirt", "Một chiếc váy", "£23", "23 bảng"),
    q(
      "ex5-dress",
      "Ex5 Clothes",
      "Ex5 Quần áo",
      "A day dress",
      "Một chiếc đầm",
      "£49",
      "49 bảng",
    ),
  ],
};

/** 6. Unit 2 Ex2 — What time does the next train arrive? (p.34, 40.MP3). Scripts p.114–115 / AK ~173 */
export const BASIC_IELTS_U02_TRAIN_TIME: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u02-train-time",
  bookPages: [34],
  bookAudioFile: "40.MP3",
  detailPromptEn: "Look at the boxes below. Tick the appropriate time as you listen to the recording.",
  detailPromptVi: "Nhìn các ô bên dưới. Đánh dấu giờ đúng khi nghe bài ghi âm.",
  detailQuestions: [
    q(
      "q1",
      "1",
      "1",
      "Excuse me, please. What time does the next train arrive? (14:14 / 14:40)",
      "Xin lỗi, tàu tiếp theo đến lúc mấy giờ? (14:14 / 14:40)",
      "14:40",
    ),
    q(
      "q2",
      "2",
      "2",
      "What's the next train to Edinburgh? (12:15 / 12:50)",
      "Tàu tiếp theo tới Edinburgh lúc mấy giờ? (12:15 / 12:50)",
      "12:15",
    ),
    q(
      "q3",
      "3",
      "3",
      "When does the Paris flight leave? (16:13 / 16:30)",
      "Chuyến bay Paris cất cánh lúc mấy giờ? (16:13 / 16:30)",
      "16:13",
    ),
    q(
      "q4",
      "4",
      "4",
      "When does the next flight to Mexico arrive? (22:13 / 22:30)",
      "Chuyến bay tới Mexico tiếp theo đến lúc mấy giờ? (22:13 / 22:30)",
      "22:30",
    ),
    q(
      "q5",
      "5",
      "5",
      "When does the next flight to Athens leave? (18:14 / 18:40)",
      "Chuyến bay tới Athens tiếp theo cất cánh lúc mấy giờ? (18:14 / 18:40)",
      "18:40",
    ),
  ],
};

/** 7. Unit 2 Ex2 — Making an appointment (p.36–37, 44.MP3). Scripts p.117 / AK ~174 */
export const BASIC_IELTS_U02_APPOINTMENT: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u02-appointment",
  bookPages: [36, 37],
  bookAudioFile: "44.MP3",
  detailPromptEn:
    "You will hear three dialogues on the telephone between a secretary and a person who is making an appointment to see someone. As you listen, complete the notes below. Please write the name of the person, the day, the time and the telephone number in each dialogue.",
  detailPromptVi:
    "Bạn sẽ nghe ba đoạn hội thoại điện thoại giữa thư ký và người đặt lịch hẹn. Khi nghe, điền ghi chú: tên, ngày, giờ và số điện thoại cho mỗi đoạn.",
  detailQuestions: [
    q("d1-name", "Dialogue 1 — Mr. Watson", "Đoạn 1 — Mr. Watson", "Name", "Tên", "Richard Priest"),
    q("d1-day", "Dialogue 1 — Mr. Watson", "Đoạn 1 — Mr. Watson", "Day", "Ngày", "Monday", "Thứ Hai"),
    q("d1-time", "Dialogue 1 — Mr. Watson", "Đoạn 1 — Mr. Watson", "Time", "Giờ", "10:15"),
    q(
      "d1-phone",
      "Dialogue 1 — Mr. Watson",
      "Đoạn 1 — Mr. Watson",
      "Telephone number",
      "Số điện thoại",
      "421 7896",
    ),
    q(
      "d2-name",
      "Dialogue 2 — Dr. Jenkinson",
      "Đoạn 2 — Dr. Jenkinson",
      "Name",
      "Tên",
      "Rita Harper",
    ),
    q(
      "d2-day",
      "Dialogue 2 — Dr. Jenkinson",
      "Đoạn 2 — Dr. Jenkinson",
      "Day",
      "Ngày",
      "Friday",
      "Thứ Sáu",
    ),
    q("d2-time", "Dialogue 2 — Dr. Jenkinson", "Đoạn 2 — Dr. Jenkinson", "Time", "Giờ", "2:40"),
    q(
      "d2-phone",
      "Dialogue 2 — Dr. Jenkinson",
      "Đoạn 2 — Dr. Jenkinson",
      "Telephone number",
      "Số điện thoại",
      "563 2860",
    ),
    q(
      "d3-name",
      "Dialogue 3 — Professor Hansen",
      "Đoạn 3 — Professor Hansen",
      "Name",
      "Tên",
      "David Bell",
    ),
    q(
      "d3-day",
      "Dialogue 3 — Professor Hansen",
      "Đoạn 3 — Professor Hansen",
      "Day",
      "Ngày",
      "Tuesday",
      "Thứ Ba",
    ),
    q("d3-time", "Dialogue 3 — Professor Hansen", "Đoạn 3 — Professor Hansen", "Time", "Giờ", "3:30"),
    q(
      "d3-phone",
      "Dialogue 3 — Professor Hansen",
      "Đoạn 3 — Professor Hansen",
      "Telephone number",
      "Số điện thoại",
      "859 7783",
    ),
  ],
};

/** 8. Unit 2 Ex2 — Accommodation (p.39–40, 49.MP3). Scripts p.120 / AK ~175–176 */
export const BASIC_IELTS_U02_ACCOMMODATION: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u02-accommodation",
  bookPages: [39],
  bookAudioFile: "49.MP3",
  detailPromptEn: "Listen to some conversations and fill in the missing information in the forms.",
  detailPromptVi: "Nghe các đoạn hội thoại và điền thông tin còn thiếu vào các form.",
  detailQuestions: [
    q("c1-type", "Conversation 1", "Hội thoại 1", "Type of room", "Loại phòng", "single", "phòng đơn"),
    q("c1-room", "Conversation 1", "Hội thoại 1", "Room No.", "Số phòng", "309"),
    q("c1-floor", "Conversation 1", "Hội thoại 1", "Floor", "Tầng", "third", "tầng ba"),
    q(
      "c1-cost",
      "Conversation 1",
      "Hội thoại 1",
      "Cost",
      "Giá",
      "£14.50 (including breakfast)",
      "14 bảng 50 (gồm bữa sáng)",
    ),
    q("c2-type", "Conversation 2", "Hội thoại 2", "Type of room", "Loại phòng", "double", "phòng đôi"),
    q("c2-room", "Conversation 2", "Hội thoại 2", "Room No.", "Số phòng", "135"),
    q("c2-floor", "Conversation 2", "Hội thoại 2", "Floor", "Tầng", "first", "tầng một"),
    q(
      "c2-cost",
      "Conversation 2",
      "Hội thoại 2",
      "Cost",
      "Giá",
      "£25 (including English breakfast)",
      "25 bảng (gồm bữa sáng kiểu Anh)",
    ),
    q("c3-type", "Conversation 3", "Hội thoại 3", "Type of room", "Loại phòng", "triple", "phòng ba"),
    q("c3-room", "Conversation 3", "Hội thoại 3", "Room No.", "Số phòng", "205"),
    q("c3-floor", "Conversation 3", "Hội thoại 3", "Floor", "Tầng", "second", "tầng hai"),
    q(
      "c3-cost",
      "Conversation 3",
      "Hội thoại 3",
      "Cost",
      "Giá",
      "£30 a night (including a private bath)",
      "30 bảng / đêm (gồm phòng tắm riêng)",
    ),
  ],
};

/** 9. Unit 3 Ex4 — At the reception desk in a hotel (p.48, 56.MP3). Scripts p.126 / AK ~181 */
export const BASIC_IELTS_U03_HOTEL_RECEPTION: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u03-hotel-reception",
  bookPages: [48],
  bookAudioFile: "56.MP3",
  detailPromptEn: "Listen to the conversation and fill in the missing information.",
  detailPromptVi: "Nghe hội thoại và điền thông tin còn thiếu.",
  detailQuestions: [
    q(
      "customer-name",
      "Hotel form",
      "Form khách sạn",
      "Customer's name / Name",
      "Tên khách",
      "Mr. Collins / Arthur Collins",
      "Ông Collins / Arthur Collins",
    ),
    q(
      "when-to-book",
      "Hotel form",
      "Form khách sạn",
      "When to book",
      "Khi nào đặt phòng",
      "three days ago",
      "ba ngày trước",
    ),
    q(
      "type-of-room",
      "Hotel form",
      "Form khách sạn",
      "Type of room",
      "Loại phòng",
      "single",
      "phòng đơn",
    ),
    q("room-number", "Hotel form", "Form khách sạn", "Room number", "Số phòng", "405"),
    q("floor", "Hotel form", "Form khách sạn", "Floor", "Tầng", "fourth", "tầng bốn"),
    q(
      "day-to-come",
      "Hotel form",
      "Form khách sạn",
      "Day to come",
      "Ngày đến",
      "Monday",
      "Thứ Hai",
    ),
    q(
      "day-to-leave",
      "Hotel form",
      "Form khách sạn",
      "Day to leave",
      "Ngày đi",
      "Friday morning",
      "Sáng thứ Sáu",
    ),
    q(
      "requirement",
      "Hotel form",
      "Form khách sạn",
      "Requirement",
      "Yêu cầu",
      "wake up at 7:10",
      "đánh thức lúc 7:10",
    ),
  ],
};

/** 10. Unit 3 Ex6 — Trip to Stonehenge (p.50, 58.MP3). Scripts p.127 / AK p.181 */
export const BASIC_IELTS_U03_STONEHENGE: BasicIeltsLessonAnswersDump = {
  partId: "basic-ielts-u03-stonehenge",
  bookPages: [50],
  bookAudioFile: "58.MP3",
  detailPromptEn: "Listen to the conversation and fill in the missing information in the notes below.",
  detailPromptVi: "Nghe hội thoại và điền thông tin còn thiếu vào ghi chú bên dưới.",
  detailQuestions: [
    q(
      "b1",
      "1",
      "1",
      "Sue went to Stonehenge at the weekend with her ______ family.",
      "Sue đi Stonehenge cuối tuần với ______ family.",
      "host",
      "host (gia đình chủ nhà)",
    ),
    q(
      "b2",
      "2",
      "2",
      "Stonehenge is the best known and the most remarkable of prehistoric ______ in the UK.",
      "Stonehenge là ______ tiền sử nổi tiếng và đáng chú ý nhất ở Anh.",
      "remains",
    ),
    q(
      "b3",
      "3",
      "3",
      "It has stood on Salisbury Plain for about ______ years.",
      "Nó đã đứng trên Salisbury Plain khoảng ______ năm.",
      "4,000",
      "4.000",
    ),
    q(
      "b4",
      "4",
      "4",
      "There have been many different theories about its ______ use.",
      "Có nhiều lý thuyết khác nhau về mục đích ______ của nó.",
      "original",
    ),
    q(
      "b5",
      "5",
      "5",
      "One theory is that it was a place from where ______ could be observed.",
      "Một lý thuyết cho rằng đó là nơi có thể quan sát ______.",
      "stars and planets",
      "sao và các hành tinh",
    ),
    q(
      "b6",
      "6",
      "6",
      "It has been discovered that the positions of ______ of the stones relate to the movements of the …",
      "Người ta phát hiện vị trí của ______ tảng đá liên quan đến chuyển động của …",
      "some",
      "một số",
    ),
    q(
      "b7",
      "7",
      "7",
      "… relate to the movements of the ______, so that the stones could be used as a …",
      "… liên quan đến chuyển động của ______, nên các tảng đá có thể dùng làm …",
      "sun and moon",
      "mặt trời và mặt trăng",
    ),
    q(
      "b8",
      "8",
      "8",
      "… so that the stones could be used as a ______.",
      "… nên các tảng đá có thể dùng làm ______.",
      "calendar",
      "lịch",
    ),
  ],
};

/** All extracted pilot lessons keyed by partId (places omitted — already implemented). */
export const BASIC_IELTS_ANSWERS_DUMP: Record<string, BasicIeltsLessonAnswersDump> = {
  "basic-ielts-u01-his-name": BASIC_IELTS_U01_HIS_NAME,
  "basic-ielts-u01-last-name": BASIC_IELTS_U01_LAST_NAME,
  "basic-ielts-u02-teens-tens": BASIC_IELTS_U02_TEENS_TENS,
  "basic-ielts-u02-airports": BASIC_IELTS_U02_AIRPORTS,
  "basic-ielts-u02-living-london": BASIC_IELTS_U02_LIVING_LONDON,
  "basic-ielts-u02-train-time": BASIC_IELTS_U02_TRAIN_TIME,
  "basic-ielts-u02-appointment": BASIC_IELTS_U02_APPOINTMENT,
  "basic-ielts-u02-accommodation": BASIC_IELTS_U02_ACCOMMODATION,
  "basic-ielts-u03-hotel-reception": BASIC_IELTS_U03_HOTEL_RECEPTION,
  "basic-ielts-u03-stonehenge": BASIC_IELTS_U03_STONEHENGE,
};
