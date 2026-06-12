import type { ReadingTopic } from "@/lib/reading/hub-articles";

export type TacticsBasicLessonCatalog = {
  partId: string;
  slug: string;
  title: string;
  summary: string;
  titleVi: string;
  summaryVi: string;
  unit: number;
  listening: number;
  /** Track trong zip `01-TACTICS for LISTENING (Basic) (Unit 1-8)/`. */
  zipTrack: number;
  transcriptFile: string;
  contextKey: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

export const TACTICS_BASIC_ZIP_FOLDER = "01-TACTICS for LISTENING (Basic) (Unit 1-8)";

export const TACTICS_BASIC_LESSONS_PAGE_SIZE = 5;

export function tacticsBasicZipEntry(unitLabel: string, track: number): string {
  const num = String(track).padStart(2, "0");
  return `${TACTICS_BASIC_ZIP_FOLDER}/${num}) ${unitLabel}*.mp3`;
}

export function tacticsBasicContextKey(unit: number): string {
  return `tactics-basic-u${String(unit).padStart(2, "0")}`;
}

export const TACTICS_BASIC_SOURCE_LABEL_VI = "Bộ sách Tactics for Listening Basic";

type CuratedLessonDef = {
  listening: number;
  zipTrack: number;
  title: string;
  titleVi: string;
  summary: string;
  summaryVi: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

function tacticsBasicPartId(unit: number, listening: number): string {
  return `tactics-basic-u${String(unit).padStart(2, "0")}-l${String(listening).padStart(2, "0")}`;
}

function tacticsBasicSlug(unit: number, listening: number): string {
  return `tactics-basic-unit-${unit}-listening-${listening}`;
}

function buildUnitLessons(unit: number, items: readonly CuratedLessonDef[]): TacticsBasicLessonCatalog[] {
  const contextKey = tacticsBasicContextKey(unit);
  return items.map((item) => ({
    partId: tacticsBasicPartId(unit, item.listening),
    slug: tacticsBasicSlug(unit, item.listening),
    title: item.title,
    summary: item.summary,
    titleVi: item.titleVi,
    summaryVi: item.summaryVi,
    unit,
    listening: item.listening,
    zipTrack: item.zipTrack,
    transcriptFile: `${tacticsBasicPartId(unit, item.listening)}.txt`,
    contextKey,
    topics: item.topics,
    durationMinutes: item.durationMinutes,
  }));
}

/** Chỉ map Listening 1–3 mỗi unit; bỏ track review/dictation ngắn hoặc trùng. */
const TACTICS_BASIC_CURATED_BY_UNIT: Record<number, readonly CuratedLessonDef[]> = {
  1: [
    {
      listening: 1,
      zipTrack: 2,
      title: "Introductions and Names",
      titleVi: "Giới thiệu và tên gọi",
      summary:
        "Practice introductions, spelling names, and giving email addresses in short everyday dialogues.",
      summaryVi:
        "Luyện giới thiệu bản thân, đánh vần tên và cung cấp email trong các hội thoại hàng ngày ngắn.",
      topics: ["Social"],
      durationMinutes: 3,
    },
    {
      listening: 2,
      zipTrack: 3,
      title: "Meeting People at a Party",
      titleVi: "Gặp gỡ mọi người ở buổi tiệc",
      summary: "Casual introductions at a party, plus registering for an English class.",
      summaryVi: "Giới thiệu thân mật ở buổi tiệc và đăng ký lớp tiếng Anh.",
      topics: ["Social", "Education"],
      durationMinutes: 2,
    },
    {
      listening: 3,
      zipTrack: 4,
      title: "Getting Names Right",
      titleVi: "Nghe và viết đúng tên",
      summary: "Listen for names, spellings, and polite corrections in everyday conversations.",
      summaryVi: "Nghe tên, cách đánh vần và sửa lại một cách lịch sự trong hội thoại hàng ngày.",
      topics: ["Social"],
      durationMinutes: 3,
    },
  ],
  2: [
    {
      listening: 1,
      zipTrack: 7,
      title: "Describing People",
      titleVi: "Miêu tả con người",
      summary: "Describe someone's age, hair, height, and appearance in short exchanges.",
      summaryVi: "Miêu tả tuổi, tóc, chiều cao và ngoại hình trong các đoạn hội thoại ngắn.",
      topics: ["Social"],
      durationMinutes: 2,
    },
    {
      listening: 2,
      zipTrack: 8,
      title: "Talking About Friends",
      titleVi: "Nói về bạn bè",
      summary: "Listen to people describe friends, family, and coworkers.",
      summaryVi: "Nghe mọi người miêu tả bạn bè, gia đình và đồng nghiệp.",
      topics: ["Social"],
      durationMinutes: 2,
    },
    {
      listening: 3,
      zipTrack: 9,
      title: "What People Look Like",
      titleVi: "Ngoại hình mọi người",
      summary: "Short conversations about hair, height, age, and other physical features.",
      summaryVi: "Hội thoại ngắn về tóc, chiều cao, tuổi và các đặc điểm ngoại hình khác.",
      topics: ["Social"],
      durationMinutes: 2,
    },
  ],
  3: [
    {
      listening: 1,
      zipTrack: 12,
      title: "Shopping for Clothes",
      titleVi: "Mua quần áo",
      summary: "Conversations about sizes, colors, and trying things on in a store.",
      summaryVi: "Hội thoại về size, màu sắc và thử đồ trong cửa hàng.",
      topics: ["Social", "Culture and Leisure"],
      durationMinutes: 2,
    },
    {
      listening: 2,
      zipTrack: 13,
      title: "What Are You Wearing?",
      titleVi: "Bạn đang mặc gì?",
      summary: "People talk about clothes, styles, and what they like to wear.",
      summaryVi: "Mọi người nói về trang phục, phong cách và thứ họ thích mặc.",
      topics: ["Social"],
      durationMinutes: 2,
    },
    {
      listening: 3,
      zipTrack: 14,
      title: "At the Clothing Store",
      titleVi: "Ở cửa hàng quần áo",
      summary: "Listen for prices, preferences, and help from store staff.",
      summaryVi: "Nghe giá cả, sở thích và sự hỗ trợ từ nhân viên cửa hàng.",
      topics: ["Social"],
      durationMinutes: 2,
    },
  ],
  4: [
    {
      listening: 1,
      zipTrack: 18,
      title: "Daily Routines",
      titleVi: "Thói quen hàng ngày",
      summary: "Listen to people talk about what they do every day and when.",
      summaryVi: "Nghe mọi người nói về việc họ làm hàng ngày và thời gian.",
      topics: ["Social"],
      durationMinutes: 2,
    },
    {
      listening: 2,
      zipTrack: 19,
      title: "Times and Schedules",
      titleVi: "Giờ giấc và lịch trình",
      summary: "Short dialogues about schedules, appointments, and daily timing.",
      summaryVi: "Hội thoại ngắn về lịch trình, cuộc hẹn và thời gian trong ngày.",
      topics: ["Social"],
      durationMinutes: 2,
    },
    {
      listening: 3,
      zipTrack: 20,
      title: "Activities and Habits",
      titleVi: "Hoạt động và thói quen",
      summary: "Conversations about regular activities, hobbies, and habits.",
      summaryVi: "Hội thoại về hoạt động thường xuyên, sở thích và thói quen.",
      topics: ["Social", "Culture and Leisure"],
      durationMinutes: 2,
    },
  ],
  5: [
    {
      listening: 1,
      zipTrack: 24,
      title: "Days and Months",
      titleVi: "Ngày và tháng",
      summary: "Listen for dates, days of the week, and months in context.",
      summaryVi: "Nghe ngày tháng, thứ trong tuần và các tháng trong ngữ cảnh.",
      topics: ["Social"],
      durationMinutes: 2,
    },
    {
      listening: 2,
      zipTrack: 25,
      title: "Making Plans",
      titleVi: "Lên kế hoạch",
      summary: "People arrange meetings, events, and plans on specific dates.",
      summaryVi: "Mọi người sắp xếp cuộc gặp, sự kiện và kế hoạch vào ngày cụ thể.",
      topics: ["Social"],
      durationMinutes: 2,
    },
    {
      listening: 3,
      zipTrack: 26,
      title: "Special Dates",
      titleVi: "Ngày đặc biệt",
      summary: "Talk about birthdays, holidays, and other important dates.",
      summaryVi: "Nói về sinh nhật, ngày lễ và các mốc thời gian quan trọng khác.",
      topics: ["Social", "Culture and Leisure"],
      durationMinutes: 2,
    },
  ],
  6: [
    {
      listening: 1,
      zipTrack: 30,
      title: "Jobs and Workplaces",
      titleVi: "Công việc và nơi làm",
      summary: "Listen to people describe their jobs and where they work.",
      summaryVi: "Nghe mọi người miêu tả công việc và nơi làm việc của họ.",
      topics: ["Social", "Education"],
      durationMinutes: 2,
    },
    {
      listening: 2,
      zipTrack: 31,
      title: "What Do You Do?",
      titleVi: "Bạn làm nghề gì?",
      summary: "Short exchanges about occupations, duties, and coworkers.",
      summaryVi: "Trao đổi ngắn về nghề nghiệp, nhiệm vụ và đồng nghiệp.",
      topics: ["Social", "Education"],
      durationMinutes: 2,
    },
    {
      listening: 3,
      zipTrack: 32,
      title: "Talking About Work",
      titleVi: "Nói về công việc",
      summary: "Conversations about schedules, tasks, and life at work.",
      summaryVi: "Hội thoại về lịch làm việc, nhiệm vụ và cuộc sống nơi công sở.",
      topics: ["Social"],
      durationMinutes: 2,
    },
  ],
  7: [
    {
      listening: 1,
      zipTrack: 36,
      title: "Favorite Things",
      titleVi: "Những thứ yêu thích",
      summary: "People share what they like — food, music, places, and more.",
      summaryVi: "Mọi người chia sẻ sở thích — đồ ăn, âm nhạc, địa điểm và hơn thế.",
      topics: ["Social", "Culture and Leisure"],
      durationMinutes: 2,
    },
    {
      listening: 2,
      zipTrack: 37,
      title: "Likes and Dislikes",
      titleVi: "Thích và không thích",
      summary: "Listen for preferences and opinions in everyday conversations.",
      summaryVi: "Nghe sở thích và quan điểm trong các hội thoại hàng ngày.",
      topics: ["Social"],
      durationMinutes: 2,
    },
    {
      listening: 3,
      zipTrack: 38,
      title: "Free Time",
      titleVi: "Thời gian rảnh",
      summary: "Short talks about hobbies, relaxation, and favorite activities.",
      summaryVi: "Trò chuyện ngắn về sở thích, thư giãn và hoạt động yêu thích.",
      topics: ["Social", "Culture and Leisure"],
      durationMinutes: 2,
    },
  ],
  8: [
    {
      listening: 1,
      zipTrack: 41,
      title: "Sports and Teams",
      titleVi: "Thể thao và đội bóng",
      summary: "Listen to people talk about sports they play or follow.",
      summaryVi: "Nghe mọi người nói về môn thể thao họ chơi hoặc theo dõi.",
      topics: ["Sports", "Social"],
      durationMinutes: 2,
    },
    {
      listening: 2,
      zipTrack: 42,
      title: "Exercise and Fitness",
      titleVi: "Tập luyện và sức khỏe",
      summary: "Conversations about working out, staying active, and fitness habits.",
      summaryVi: "Hội thoại về tập thể dục, vận động và thói quen rèn luyện sức khỏe.",
      topics: ["Sports", "Health"],
      durationMinutes: 2,
    },
    {
      listening: 3,
      zipTrack: 43,
      title: "Playing and Watching Sports",
      titleVi: "Chơi và xem thể thao",
      summary: "People compare playing sports with watching games and events.",
      summaryVi: "So sánh giữa tự chơi thể thao và xem trận đấu, sự kiện.",
      topics: ["Sports"],
      durationMinutes: 2,
    },
  ],
};

export const TACTICS_BASIC_LESSONS: readonly TacticsBasicLessonCatalog[] = Object.entries(
  TACTICS_BASIC_CURATED_BY_UNIT,
)
  .sort(([a], [b]) => Number(a) - Number(b))
  .flatMap(([unitKey, items]) => buildUnitLessons(Number(unitKey), items));

export function getTacticsBasicLesson(partId: string): TacticsBasicLessonCatalog | undefined {
  return TACTICS_BASIC_LESSONS.find((lesson) => lesson.partId === partId);
}

export function tacticsBasicLessonDisplayVi(lessonId: string): {
  title: string;
  summary: string;
} | null {
  const lesson = getTacticsBasicLesson(lessonId);
  if (!lesson) return null;
  return { title: lesson.titleVi, summary: lesson.summaryVi };
}

export function tacticsBasicZipEntryForLesson(lesson: TacticsBasicLessonCatalog): string {
  return tacticsBasicZipEntry(`Unit ${lesson.unit}`, lesson.zipTrack);
}
