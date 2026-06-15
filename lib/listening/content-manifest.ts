import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { listeningPartHeroImage } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath, tacticsBasicListeningAudioApiPath } from "@/lib/listening/listening-materials-urls";
import {
  TACTICS_BASIC_LESSONS,
  type TacticsBasicLessonCatalog,
} from "@/lib/listening/tactics-basic-catalog";

const TACTICS_BASIC_META_PILL = "Tactics for Listening Basic";

function tacticsBasicPartMeta(lesson: TacticsBasicLessonCatalog): ListeningPartMeta {
  return {
    id: lesson.partId,
    slug: lesson.slug,
    title: lesson.title,
    heroImage: listeningPartHeroImage(lesson.partId),
    metaPill: TACTICS_BASIC_META_PILL,
    topics: lesson.topics,
    contextKey: lesson.contextKey,
    examSlug: "tactics-basic",
    test: 100 + lesson.unit,
    part: lesson.listening,
    summary: lesson.summary,
    durationMinutes: lesson.durationMinutes,
    audioPublicPath: tacticsBasicListeningAudioApiPath(lesson.unit, lesson.listening),
    transcriptTryFiles: [lesson.transcriptFile],
  };
}

/**
 * Nguồn nội dung listening — chỉnh **một file này** khi thêm test/part hoặc file transcript mới.
 *
 * - **Audio:** `listening materials/Audio cam/` (vd. `Test1 Part1.mp3`) — phát qua `/api/listening/audio`.
 * - **Transcript:** `listening materials/transcript/` (fallback `transcript/` legacy).
 * - **Trước khi nghe:** xem `LISTENING_TEST_CONTEXTS` — tuỳ chọn intro ngắn trong materials hoặc `public/listening-assets/cam19/`.
 */
export type ListeningPartMeta = {
  id: string;
  /** URL slug — `/tu-hoc/luyen-nghe/{slug}` */
  slug: string;
  title: string;
  /** Ảnh minh hoạ (Unsplash — xem `listening-passage-media.ts`). */
  heroImage: string;
  /** Nguồn bài nghe (ví dụ IELTS Cambridge) — không gắn Part. */
  metaPill: string;
  /** Thẻ chủ đề (tiếng Anh, cùng bộ với luyện đọc). */
  topics: readonly ReadingTopic[];
  /** Khóa nhóm ngữ cảnh trước khi nghe — xem `LISTENING_TEST_CONTEXTS`. */
  contextKey: string;
  examSlug: string;
  test: number;
  part: number;
  /** Tóm tắt 1–2 câu (hiển thị dưới tiêu đề trên player). */
  summary: string;
  /** Thời lượng nghe ước lượng (phút), theo đề IELTS. */
  durationMinutes: number;
  audioPublicPath: string;
  transcriptTryFiles: readonly string[];
};

export type ListeningTestContext = {
  predictTitle: string;
  predictBlurb: string;
  /**
   * Tuỳ chọn: MP3 rất ngắn (10–30s) do bạn export (Audacity / ffmpeg / QuickTime), đặt trong `public/listening-assets/cam19/`.
   * App không tự cắt từ file full.
   */
  introAudioPublicPath?: string;
};

export const LISTENING_TEST_CONTEXTS: Record<string, ListeningTestContext> = {
  "cam19-t1": {
    predictTitle: "Cam 19 — Test 1",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có vẻ là trao đổi qua điện thoại và liên quan tới một địa điểm / hoạt động cho nhóm đi tham quan — không cần đoán đúng chi tiết.",
    introAudioPublicPath: "/listening-assets/cam19/Test1-intro.mp3",
  },
  "cam19-t2": {
    predictTitle: "Cam 19 — Test 2",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là trao đổi thông thường, thuyết trình ngắn, hoặc bài giảng — không cần đoán đúng chi tiết.",
  },
  "tactics-basic-u01": {
    predictTitle: "Tactics Basic — Unit 1",
    predictBlurb:
      "Trước khi nghe: đoán **chủ đề** của Unit 1 (thường là giới thiệu bản thân, tên và nghề nghiệp). Nghe để bắt từ khoá quen thuộc — không cần hiểu hết ngay lần đầu.",
  },
  "tactics-basic-u02": {
    predictTitle: "Tactics Basic — Unit 2",
    predictBlurb:
      "Trước khi nghe: đoán **chủ đề** Unit 2 từ tiêu đề bài hoặc từ vựng quen. Tập trung vào thông tin chính — không cần hiểu từng từ ngay.",
  },
  "tactics-basic-u03": {
    predictTitle: "Tactics Basic — Unit 3",
    predictBlurb:
      "Trước khi nghe: đoán **chủ đề** quần áo / mua sắm. Chú ý size, màu sắc và từ mô tả trang phục.",
  },
  "tactics-basic-u04": {
    predictTitle: "Tactics Basic — Unit 4",
    predictBlurb:
      "Trước khi nghe: đoán **thói quen hàng ngày** và thời gian trong ngày. Nghe giờ giấc, hoạt động lặp lại.",
  },
  "tactics-basic-u05": {
    predictTitle: "Tactics Basic — Unit 5",
    predictBlurb:
      "Trước khi nghe: đoán **ngày tháng** và kế hoạch. Chú ý thứ, ngày, tháng và các mốc thời gian.",
  },
  "tactics-basic-u06": {
    predictTitle: "Tactics Basic — Unit 6",
    predictBlurb:
      "Trước khi nghe: đoán **công việc** và nơi làm việc. Nghe nghề nghiệp, nhiệm vụ và đồng nghiệp.",
  },
  "tactics-basic-u07": {
    predictTitle: "Tactics Basic — Unit 7",
    predictBlurb:
      "Trước khi nghe: đoán **sở thích** và thời gian rảnh. Chú ý like/dislike và hoạt động giải trí.",
  },
  "tactics-basic-u08": {
    predictTitle: "Tactics Basic — Unit 8",
    predictBlurb:
      "Trước khi nghe: đoán **thể thao** và tập luyện. Nghe môn chơi, đội bóng và thói quen vận động.",
  },
};

export function getListeningTestContext(contextKey: string): ListeningTestContext {
  const c = LISTENING_TEST_CONTEXTS[contextKey];
  if (c) return c;
  return {
    predictTitle: "Luyện nghe",
    predictBlurb: "Đoán chủ đề hoặc tình huống trước khi nghe bản đầy đủ.",
  };
}

/** Bài cố định trên hero hub Luyện nghe — không xoay ngẫu nhiên (một số ảnh bài chất lượng thấp). */
export const LISTENING_HUB_FEATURED = {
  partId: "cam19-t1-p1",
} as const;

export function getListeningPartById(id: string): ListeningPartMeta | undefined {
  return LISTENING_PARTS_PILOT.find((p) => p.id === id);
}

export function getListeningPartBySlug(slug: string): ListeningPartMeta | undefined {
  return LISTENING_PARTS_PILOT.find((p) => p.slug === slug);
}

export function getListeningFeaturedPart(): ListeningPartMeta {
  const featured = getListeningPartById(LISTENING_HUB_FEATURED.partId);
  if (featured) return featured;
  const first = LISTENING_PARTS_PILOT[0];
  if (!first) throw new Error("LISTENING_PARTS_PILOT must not be empty");
  return first;
}

export function listeningPartDurationMinutes(part: ListeningPartMeta): number {
  return part.durationMinutes;
}

export function listeningTestTotalMinutes(parts: readonly ListeningPartMeta[]): number {
  return parts.reduce((sum, p) => sum + p.durationMinutes, 0);
}

export const LISTENING_PARTS_PILOT: readonly ListeningPartMeta[] = [
  {
    id: "cam19-t1-p1",
    slug: "hinchingbrooke-country-park",
    title: "Hinchingbrooke Country Park",
    heroImage: listeningPartHeroImage("cam19-t1-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Environment"],
    summary:
      "A phone call to arrange a school group visit to a country park, covering ticket prices, opening hours, and catering options.",
    contextKey: "cam19-t1",
    examSlug: "cam19",
    test: 1,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath(1, 1),
    transcriptTryFiles: ["cam19-test1.cleaned.txt", "cam19-test1.txt"],
  },
  {
    id: "cam19-t1-p2",
    slug: "stanthorpe-twinning-association",
    title: "Stanthorpe Twinning Association",
    heroImage: listeningPartHeroImage("cam19-t1-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Culture and Leisure"],
    summary:
      "An introduction to a town-twinning programme, with event dates and how local residents can sign up to take part.",
    contextKey: "cam19-t1",
    examSlug: "cam19",
    test: 1,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath(1, 2),
    transcriptTryFiles: ["cam19-test1.cleaned.txt", "cam19-test1.txt"],
  },
  {
    id: "cam19-t1-p3",
    slug: "student-food-projects",
    title: "Student Food Projects",
    heroImage: listeningPartHeroImage("cam19-t1-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Science", "Technology"],
    summary:
      "Two university students discuss food projects (vegan eggs, reusing bread), touch-sensitive food labels and trends in the food industry.",
    contextKey: "cam19-t1",
    examSlug: "cam19",
    test: 1,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath(1, 3),
    transcriptTryFiles: ["cam19-test1.cleaned.txt", "cam19-test1.txt"],
  },
  {
    id: "cam19-t1-p4",
    slug: "ceide-fields",
    title: "Céide Fields",
    heroImage: listeningPartHeroImage("cam19-t1-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Education", "Science"],
    summary:
      "A presentation on the Céide Fields Neolithic site in Ireland — discovery, farming life, preservation in bog and reasons farming ended.",
    contextKey: "cam19-t1",
    examSlug: "cam19",
    test: 1,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath(1, 4),
    transcriptTryFiles: ["cam19-test1.cleaned.txt", "cam19-test1.txt"],
  },
  {
    id: "cam19-t2-p1",
    slug: "guitar-group-classes",
    title: "Guitar Group Classes",
    heroImage: listeningPartHeroImage("cam19-t2-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "A conversation about joining a beginner guitar group, covering the coordinator, class location, schedule, and lesson structure.",
    contextKey: "cam19-t2",
    examSlug: "cam19",
    test: 2,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath(2, 1),
    transcriptTryFiles: ["cam19-test2.cleaned.txt", "cam19-test2.txt"],
  },
  {
    id: "cam19-t2-p2",
    slug: "northsea-lifeboat-volunteer",
    title: "Northsea Lifeboat Volunteer",
    heroImage: listeningPartHeroImage("cam19-t2-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Environment"],
    summary:
      "A volunteer describes working with the Lifeboat Institution, training, responsibilities, and responding to emergencies at sea.",
    contextKey: "cam19-t2",
    examSlug: "cam19",
    test: 2,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath(2, 2),
    transcriptTryFiles: ["cam19-test2.cleaned.txt", "cam19-test2.txt"],
  },
  {
    id: "cam19-t2-p3",
    slug: "recycling-footwear",
    title: "Recycling Footwear",
    heroImage: listeningPartHeroImage("cam19-t2-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Environment", "Education"],
    summary:
      "Two students discuss a presentation on shoe recycling, including rejection examples and challenges in the recycling process.",
    contextKey: "cam19-t2",
    examSlug: "cam19",
    test: 2,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath(2, 3),
    transcriptTryFiles: ["cam19-test2.cleaned.txt", "cam19-test2.txt"],
  },
  {
    id: "cam19-t2-p4",
    slug: "tardigrades",
    title: "Tardigrades",
    heroImage: listeningPartHeroImage("cam19-t2-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Science", "Education"],
    summary:
      "A student project presentation on tardigrades, covering their anatomy, habitats, extreme survival, and conservation status.",
    contextKey: "cam19-t2",
    examSlug: "cam19",
    test: 2,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath(2, 4),
    transcriptTryFiles: ["cam19-test2.cleaned.txt", "cam19-test2.txt"],
  },
  ...TACTICS_BASIC_LESSONS.map(tacticsBasicPartMeta),
] as const;

export function getListeningPartOrDefault(part: number): ListeningPartMeta {
  const m = LISTENING_PARTS_PILOT.find((x) => x.part === part);
  if (m) return m;
  const first = LISTENING_PARTS_PILOT[0];
  if (!first) {
    throw new Error("LISTENING_PARTS_PILOT must not be empty");
  }
  return first;
}

/** Hai bài gợi ý tiếp theo — ưu tiên cùng nguồn và cùng level. */
export { getListeningUpNextParts } from "@/lib/listening/listening-related-lessons";

export function listeningTranscriptAllowlist(): Set<string> {
  const s = new Set<string>();
  for (const p of LISTENING_PARTS_PILOT) {
    for (const f of p.transcriptTryFiles) s.add(f);
  }
  return s;
}
