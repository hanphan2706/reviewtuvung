import type { ReadingTopic } from "@/lib/reading/hub-articles";

/**
 * Pilot 12 bài — Basic IELTS Listening (Li Ya Bin / Nhan Tri Viet).
 * UI: cùng course-list + seven-step như Tactics beginner (không dùng giao diện đề).
 */

export const BASIC_IELTS_LISTENING_META_PILL = "Basic IELTS Listening";

export const BASIC_IELTS_LISTENING_EXAM_SLUG = "basic-ielts-listening";

export const BASIC_IELTS_LISTENING_SOURCE_LABEL_VI = "Basic IELTS Listening";

export const BASIC_IELTS_LISTENING_LESSONS_PAGE_SIZE = 6;

export const BASIC_IELTS_LISTENING_CARD = {
  id: "basic-ielts" as const,
  title: "Luyện nghe IELTS cơ bản",
  description:
    "Cho bạn yếu Listening IELTS (format đề, số/tên/form, v.v...). Đây là cầu nối giúp bạn cải thiện kỹ năng nghe trước khi làm đề sát với thực tế.",
  difficulty: "Beginner" as const,
  catalogOrder: 3,
  sourceLabel: BASIC_IELTS_LISTENING_META_PILL,
};

export type BasicIeltsListeningLessonCatalog = {
  partId: string;
  slug: string;
  title: string;
  summary: string;
  titleVi: string;
  summaryVi: string;
  unit: number;
  /** Thứ tự trong unit (sort key `part`). */
  lesson: number;
  bookPages: readonly number[];
  /** Track in sách (vd. 03.MP3). */
  bookAudioFile: string;
  /** Tên file chuẩn trong `Audio basic-ielts-listening/`. */
  audioFile: string;
  transcriptFile: string;
  contextKey: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
  skill: string;
};

function bilContextKey(unit: number): string {
  return `basic-ielts-u${String(unit).padStart(2, "0")}`;
}

/** `03.MP3` → `bil-03.mp3` */
export function basicIeltsCanonicalAudioFile(bookAudioFile: string): string {
  const match = /^(\d{2})\.MP3$/i.exec(bookAudioFile.trim());
  if (!match) {
    throw new Error(`Unexpected Basic IELTS audio hint: ${bookAudioFile}`);
  }
  return `bil-${match[1]}.mp3`;
}

type LessonDef = {
  id: string;
  unit: number;
  lesson: number;
  title: string;
  titleVi: string;
  summary: string;
  summaryVi: string;
  bookPages: readonly number[];
  bookAudioFile: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
  skill: string;
};

const LESSON_DEFS: readonly LessonDef[] = [
  {
    id: "places",
    unit: 1,
    lesson: 1,
    title: "Names of places",
    titleVi: "Tên địa danh",
    summary: "Listen and write place names in Britain; practice spelling.",
    summaryVi: "Nghe và viết tên địa danh ở Anh; luyện đánh vần.",
    bookPages: [10],
    bookAudioFile: "03.MP3",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 3,
    skill: "place names / spelling",
  },
  {
    id: "his-name",
    unit: 1,
    lesson: 2,
    title: "What is his name?",
    titleVi: "Tên của anh ấy là gì?",
    summary: "Short dialogues: first names, last names, and spellings.",
    summaryVi: "Hội thoại ngắn: tên, họ và cách đánh vần.",
    bookPages: [11],
    bookAudioFile: "04.MP3",
    topics: ["Social"],
    durationMinutes: 4,
    skill: "names + spelling",
  },
  {
    id: "last-name",
    unit: 1,
    lesson: 3,
    title: "What's your last name?",
    titleVi: "Họ của bạn là gì?",
    summary: "Complete personal details forms from short conversations.",
    summaryVi: "Điền form thông tin cá nhân từ hội thoại ngắn.",
    bookPages: [16],
    bookAudioFile: "09.MP3",
    topics: ["Social", "Education"],
    durationMinutes: 4,
    skill: "personal details form",
  },
  {
    id: "teens-tens",
    unit: 2,
    lesson: 1,
    title: "Discriminating between teens and tens",
    titleVi: "Phân biệt teens và tens",
    summary: "Circle the number you hear: 15 vs 50, 13 vs 30, and similar pairs.",
    summaryVi: "Chọn số nghe được: 15 vs 50, 13 vs 30 và các cặp tương tự.",
    bookPages: [22],
    bookAudioFile: "18.MP3",
    topics: ["Social"],
    durationMinutes: 3,
    skill: "15 vs 50",
  },
  {
    id: "airports",
    unit: 2,
    lesson: 2,
    title: "Airports in the Southeast of Britain",
    titleVi: "Sân bay Đông Nam Anh",
    summary: "Write distances and passenger numbers for Heathrow and Gatwick.",
    summaryVi: "Nghe khoảng cách và số hành khách cho Heathrow và Gatwick.",
    bookPages: [24],
    bookAudioFile: "22.MP3",
    topics: ["Technology", "Social"],
    durationMinutes: 3,
    skill: "numbers in context",
  },
  {
    id: "living-london",
    unit: 2,
    lesson: 3,
    title: "Living in London",
    titleVi: "Chi phí sống ở London",
    summary: "Listen for prices: transport, rent, phone, and clothes (Ex 3–5).",
    summaryVi: "Nghe giá: giao thông, thuê nhà, điện thoại và quần áo (Ex 3–5).",
    bookPages: [31, 32],
    /** Ex3–5 merged locally into bil-36.mp3 (source tracks 36+37+38). */
    bookAudioFile: "36.MP3",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 8,
    skill: "money / costs",
  },
  {
    id: "train-time",
    unit: 2,
    lesson: 4,
    title: "What time does the next train arrive?",
    titleVi: "Tàu tiếp theo đến lúc mấy giờ?",
    summary: "Tick the correct digital times you hear.",
    summaryVi: "Đánh dấu giờ đúng trên đồng hồ số khi nghe.",
    bookPages: [34],
    bookAudioFile: "40.MP3",
    topics: ["Social"],
    durationMinutes: 3,
    skill: "times / schedules",
  },
  {
    id: "appointment",
    unit: 2,
    lesson: 5,
    title: "Making an appointment",
    titleVi: "Đặt lịch hẹn",
    summary: "Phone dialogues: name, day, time, and telephone number.",
    summaryVi: "Hội thoại điện thoại: tên, ngày, giờ và số điện thoại.",
    bookPages: [36, 37],
    bookAudioFile: "44.MP3",
    topics: ["Social", "Health"],
    durationMinutes: 5,
    skill: "phone / appointments",
  },
  {
    id: "accommodation",
    unit: 2,
    lesson: 6,
    title: "Accommodation",
    titleVi: "Thuê chỗ ở",
    summary: "Fill booking forms: room type, floor, cost, and dates.",
    summaryVi: "Điền form đặt phòng: loại phòng, tầng, giá và ngày.",
    bookPages: [39],
    bookAudioFile: "49.MP3",
    topics: ["Social"],
    durationMinutes: 4,
    skill: "dates / booking",
  },
  {
    id: "hotel-reception",
    unit: 3,
    lesson: 1,
    title: "At the reception desk in a hotel",
    titleVi: "Tại quầy lễ tân khách sạn",
    summary: "Transactional dialogue: name, room, dates, and special requests.",
    summaryVi: "Hội thoại giao dịch: tên, phòng, ngày và yêu cầu đặc biệt.",
    bookPages: [48],
    bookAudioFile: "56.MP3",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 4,
    skill: "transactional dialogue",
  },
  {
    id: "stonehenge",
    unit: 3,
    lesson: 2,
    title: "Trip to Stonehenge",
    titleVi: "Chuyến đi Stonehenge",
    summary: "Note completion about a weekend trip to a prehistoric site.",
    summaryVi: "Điền ghi chú về chuyến đi cuối tuần tới di tích tiền sử.",
    bookPages: [50],
    bookAudioFile: "58.MP3",
    topics: ["Culture and Leisure", "Science"],
    durationMinutes: 4,
    skill: "short trip talk (Section 2 light)",
  },
];

function buildLesson(def: LessonDef): BasicIeltsListeningLessonCatalog {
  const partId = `basic-ielts-u${String(def.unit).padStart(2, "0")}-${def.id}`;
  return {
    partId,
    slug: `basic-ielts-unit-${def.unit}-${def.id}`,
    title: def.title,
    summary: def.summary,
    titleVi: def.titleVi,
    summaryVi: def.summaryVi,
    unit: def.unit,
    lesson: def.lesson,
    bookPages: def.bookPages,
    bookAudioFile: def.bookAudioFile,
    audioFile: basicIeltsCanonicalAudioFile(def.bookAudioFile),
    transcriptFile: `${partId}.txt`,
    contextKey: bilContextKey(def.unit),
    topics: def.topics,
    durationMinutes: def.durationMinutes,
    skill: def.skill,
  };
}

export const BASIC_IELTS_LISTENING_LESSONS: readonly BasicIeltsListeningLessonCatalog[] =
  LESSON_DEFS.map(buildLesson);

export function getBasicIeltsListeningLesson(
  partId: string,
): BasicIeltsListeningLessonCatalog | undefined {
  return BASIC_IELTS_LISTENING_LESSONS.find((lesson) => lesson.partId === partId);
}

export function basicIeltsListeningLessonDisplayVi(lessonId: string): {
  title: string;
  summary: string;
} | null {
  const lesson = getBasicIeltsListeningLesson(lessonId);
  if (!lesson) return null;
  return { title: lesson.titleVi, summary: lesson.summaryVi };
}

export function isBasicIeltsListeningExamSlug(examSlug: string): boolean {
  return examSlug === BASIC_IELTS_LISTENING_EXAM_SLUG;
}

export function isBasicIeltsListeningPartId(partId: string): boolean {
  return partId.startsWith("basic-ielts-");
}
