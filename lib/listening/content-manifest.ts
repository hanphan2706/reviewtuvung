import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { mediaAudioApiPath } from "@/lib/media/media-audio-storage";
import { listeningPartHeroImage, LISTENING_HUB_HERO_EXCLUDED_PART_IDS } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath, tacticsBasicListeningAudioApiPath } from "@/lib/listening/listening-materials-urls";
import {
  TACTICS_BASIC_LESSONS,
  type TacticsBasicLessonCatalog,
} from "@/lib/listening/tactics-basic-catalog";
import {
  BASIC_IELTS_LISTENING_EXAM_SLUG,
  BASIC_IELTS_LISTENING_LESSONS,
  BASIC_IELTS_LISTENING_META_PILL,
  type BasicIeltsListeningLessonCatalog,
} from "@/lib/listening/basic-ielts-listening-catalog";
import { CAM16_LISTENING_PARTS } from "@/lib/listening/cam16-listening-parts";
import { CAM17_LISTENING_PARTS } from "@/lib/listening/cam17-listening-parts";
import { CAM21_LISTENING_PARTS } from "@/lib/listening/cam21-listening-parts";
import { basicIeltsListeningAudioApiPath } from "@/lib/listening/listening-materials-urls";

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

function basicIeltsListeningPartMeta(lesson: BasicIeltsListeningLessonCatalog): ListeningPartMeta {
  return {
    id: lesson.partId,
    slug: lesson.slug,
    title: lesson.title,
    heroImage: listeningPartHeroImage(lesson.partId),
    metaPill: BASIC_IELTS_LISTENING_META_PILL,
    topics: lesson.topics,
    contextKey: lesson.contextKey,
    examSlug: BASIC_IELTS_LISTENING_EXAM_SLUG,
    test: 200 + lesson.unit,
    part: lesson.lesson,
    summary: lesson.summary,
    durationMinutes: lesson.durationMinutes,
    audioPublicPath: basicIeltsListeningAudioApiPath(lesson.audioFile),
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
  "cam16-t1": {
    predictTitle: "Cam 16 — Test 1",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là workshop kỹ thuật cho trẻ, công ty Stevenson’s, dự án nghệ thuật hoặc chủ nghĩa Khắc kỷ — không cần đoán đúng chi tiết.",
  },
  "cam16-t2": {
    predictTitle: "Cam 16 — Test 2",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là số hoá ảnh, trường Dartfield House, bài tập về giấc ngủ hoặc lợi ích của khiêu vũ — không cần đoán đúng chi tiết.",
  },
  "cam16-t3": {
    predictTitle: "Cam 16 — Test 3",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là trại đạp xe thiếu nhi, nghề nông/làm vườn, thuyết trình béo phì hoặc đan len thủ công — không cần đoán đúng chi tiết.",
  },
  "cam16-t4": {
    predictTitle: "Cam 16 — Test 4",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là thuê nhà nghỉ, báo cáo giao thông, chia sẻ xe đạp đô thị hoặc chim dodo tuyệt chủng — không cần đoán đúng chi tiết.",
  },
  "cam17-t1": {
    predictTitle: "Cam 17 — Test 1",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là nhóm bảo tồn, tour thuyền Tasmania, thực tập thú y hoặc mê cung labyrinth — không cần đoán đúng chi tiết.",
  },
  "cam17-t2": {
    predictTitle: "Cam 17 — Test 2",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là tình nguyện làng, dinh thự Oniton Hall, kịch Romeo and Juliet hoặc tiếng Icelandic thời số — không cần đoán đúng chi tiết.",
  },
  "cam17-t3": {
    predictTitle: "Cam 17 — Test 3",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là nghỉ lướt sóng, giữ trẻ ngoài giờ học, thực tập sân vận động hoặc lý thuyết di cư chim — không cần đoán đúng chi tiết.",
  },
  "cam17-t4": {
    predictTitle: "Cam 17 — Test 4",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là dịch vụ dọn nhà, giữ nhân viên khách sạn, dụng cụ thể thao hoặc siro cây phong — không cần đoán đúng chi tiết.",
  },
  "cam21-t1": {
    predictTitle: "Cam 21 — Test 1",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là khóa học thuyền buồm, makeup trên phim, đa dạng sinh học biển hoặc nguồn cao su — không cần đoán đúng chi tiết.",
  },
  "cam21-t2": {
    predictTitle: "Cam 21 — Test 2",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là lớp học một ngày, đi bộ ven biển, khóa an toàn thực phẩm hoặc ngành du thuyền — không cần đoán đúng chi tiết.",
  },
  "cam21-t3": {
    predictTitle: "Cam 21 — Test 3",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là phà tới Shetland, street food, thời trang bền vững hoặc loài xâm lấn — không cần đoán đúng chi tiết.",
  },
  "cam21-t4": {
    predictTitle: "Cam 21 — Test 4",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là khảo sát mua sắm, triển lãm doanh nghiệp, nhà ở tương lai hoặc liệu pháp âm nhạc — không cần đoán đúng chi tiết.",
  },
  "cam20-t1": {
    predictTitle: "Cam 20 — Test 1",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là gợi ý nhà hàng, lớp gốm, thảo luận về cô đơn hoặc bài giảng về sông — không cần đoán đúng chi tiết.",
  },
  "cam20-t2": {
    predictTitle: "Cam 20 — Test 2",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là hỗ trợ người chăm sóc, tình nguyện địa phương, địa lý nhân văn hoặc xu hướng thực phẩm — không cần đoán đúng chi tiết.",
  },
  "cam20-t3": {
    predictTitle: "Cam 20 — Test 3",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là thuê đồ nội thất, khảo cổ cộng đồng, chương trình sân khấu hoặc thiết kế hòa nhập — không cần đoán đúng chi tiết.",
  },
  "cam20-t4": {
    predictTitle: "Cam 20 — Test 4",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là tư vấn du lịch gia đình, tour sân vận động, dạy viết chữ hoặc bảo tồn chim săn mồi — không cần đoán đúng chi tiết.",
  },
  "cam19-t1": {
    predictTitle: "Cam 19 — Test 1",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có vẻ là trao đổi qua điện thoại và liên quan tới một địa điểm / hoạt động cho nhóm đi tham quan — không cần đoán đúng chi tiết.",
    introAudioPublicPath: mediaAudioApiPath("cam19/Test1-intro.mp3"),
  },
  "cam19-t2": {
    predictTitle: "Cam 19 — Test 2",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là trao đổi thông thường, thuyết trình ngắn, hoặc bài giảng — không cần đoán đúng chi tiết.",
  },
  "cam19-t3": {
    predictTitle: "Cam 19 — Test 3",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là hội thoại đời thường, sự kiện cộng đồng, hoặc thảo luận học thuật — không cần đoán đúng chi tiết.",
  },
  "cam19-t4": {
    predictTitle: "Cam 19 — Test 4",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là công việc, thể thao, hoặc bài thuyết trình — không cần đoán đúng chi tiết.",
  },
  "cam18-t1": {
    predictTitle: "Cam 18 — Test 1",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là khảo sát giao thông, tình nguyện, nghề thời trang hoặc bài giảng về động vật — không cần đoán đúng chi tiết.",
  },
  "cam18-t2": {
    predictTitle: "Cam 18 — Test 2",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là nhà hàng, khu dân cư mới, lịch sử núi lửa hoặc bài thuyết trình — không cần đoán đúng chi tiết.",
  },
  "cam18-t3": {
    predictTitle: "Cam 18 — Test 3",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là câu lạc bộ nhiếp ảnh, nấm dại, lịch sử công nghiệp hoặc quản lý không gian — không cần đoán đúng chi tiết.",
  },
  "cam18-t4": {
    predictTitle: "Cam 18 — Test 4",
    predictBlurb:
      "Trước khi nghe bản đầy đủ của Part này: đoán **tình huống chung** (ai với ai, đang làm gì). Gợi ý rất nhẹ: có thể là cơ quan việc làm, tham quan bảo tàng, origami trong lớp hoặc bài giảng văn học — không cần đoán đúng chi tiết.",
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
  "basic-ielts-u01": {
    predictTitle: "IELTS Listening cơ bản — Unit 1",
    predictBlurb:
      "Trước khi nghe: đoán **tên / địa danh**. Chú ý spelling và form thông tin cá nhân — đây là kỹ năng nền trước khi làm đề IELTS.",
  },
  "basic-ielts-u02": {
    predictTitle: "IELTS Listening cơ bản — Unit 2",
    predictBlurb:
      "Trước khi nghe: đoán **số liệu** (teens/tens, tiền, giờ, điện thoại, ngày). Tập trung bắt đúng con số trên form.",
  },
  "basic-ielts-u03": {
    predictTitle: "IELTS Listening cơ bản — Unit 3",
    predictBlurb:
      "Trước khi nghe: đoán **tình huống giao tiếp** (khách sạn, chủ nhà, chuyến đi ngắn). Nghe để điền note / form.",
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

export function getListeningPartById(id: string): ListeningPartMeta | undefined {
  return LISTENING_PARTS_PILOT.find((p) => p.id === id);
}

export function getListeningPartBySlug(slug: string): ListeningPartMeta | undefined {
  return LISTENING_PARTS_PILOT.find((p) => p.slug === slug);
}

export function getListeningFeaturedPart(): ListeningPartMeta {
  const eligible = LISTENING_PARTS_PILOT.filter(
    (part) => !LISTENING_HUB_HERO_EXCLUDED_PART_IDS.has(part.id),
  );
  const first = eligible[0] ?? LISTENING_PARTS_PILOT[0];
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
  ...CAM21_LISTENING_PARTS,
  ...CAM17_LISTENING_PARTS,
  ...CAM16_LISTENING_PARTS,
  {
    id: "cam20-t1-p1",
    slug: "restaurant-recommendations",
    title: "Restaurant Recommendations",
    heroImage: listeningPartHeroImage("cam20-t1-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Social"],
    summary:
      "Friends compare restaurants for a birthday celebration, discussing locations, menus, prices and atmosphere at The Junction, Paloma and The Audley.",
    contextKey: "cam20-t1",
    examSlug: "cam20",
    test: 1,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam20", 1, 1),
    transcriptTryFiles: ["cam20-test1.cleaned.txt", "cam20-test 1.txt"],
  },
  {
    id: "cam20-t1-p2",
    slug: "edelman-pottery",
    title: "Edelman Pottery",
    heroImage: listeningPartHeroImage("cam20-t1-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "Heather introduces a pottery studio visit, explaining ancient pottery, class activities, kilns and tools for participants.",
    contextKey: "cam20-t1",
    examSlug: "cam20",
    test: 1,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam20", 1, 2),
    transcriptTryFiles: ["cam20-test1.cleaned.txt", "cam20-test 1.txt"],
  },
  {
    id: "cam20-t1-p3",
    slug: "loneliness-and-health",
    title: "Loneliness and Health",
    heroImage: listeningPartHeroImage("cam20-t1-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Science"],
    summary:
      "Two students discuss causes and health risks of loneliness and plan a presentation on urban design, mental health and social connection.",
    contextKey: "cam20-t1",
    examSlug: "cam20",
    test: 1,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam20", 1, 3),
    transcriptTryFiles: ["cam20-test1.cleaned.txt", "cam20-test 1.txt"],
  },
  {
    id: "cam20-t1-p4",
    slug: "reclaiming-urban-rivers",
    title: "Reclaiming Urban Rivers",
    heroImage: listeningPartHeroImage("cam20-t1-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Environment", "Science"],
    summary:
      "A lecture on cleaning and reusing city rivers, with examples from London, Los Angeles and Paris and ideas for greener urban transport.",
    contextKey: "cam20-t1",
    examSlug: "cam20",
    test: 1,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam20", 1, 4),
    transcriptTryFiles: ["cam20-test1.cleaned.txt", "cam20-test 1.txt"],
  },
  {
    id: "cam20-t2-p1",
    slug: "caring-for-elderly-at-home",
    title: "Caring for Elderly at Home",
    heroImage: listeningPartHeroImage("cam20-t2-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Education"],
    summary:
      "A call about council support for carers, covering needs assessment, daily tasks and financial help with transport and stress reduction.",
    contextKey: "cam20-t2",
    examSlug: "cam20",
    test: 2,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam20", 2, 1),
    transcriptTryFiles: ["cam20-test2.cleaned.txt", "cam20-test 2.txt"],
  },
  {
    id: "cam20-t2-p2",
    slug: "town-volunteers",
    title: "Town Volunteers",
    heroImage: listeningPartHeroImage("cam20-t2-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Culture and Leisure"],
    summary:
      "A talk recruiting local volunteers for concerts, community groups, magazines and festivals, with training dates and social events.",
    contextKey: "cam20-t2",
    examSlug: "cam20",
    test: 2,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam20", 2, 2),
    transcriptTryFiles: ["cam20-test2.cleaned.txt", "cam20-test 2.txt"],
  },
  {
    id: "cam20-t2-p3",
    slug: "human-geography-course",
    title: "Human Geography Course",
    heroImage: listeningPartHeroImage("cam20-t2-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Education", "Environment"],
    summary:
      "Rosie and Colin review aspects of their human geography module, comparing urban design, retail centres and sustainable city projects.",
    contextKey: "cam20-t2",
    examSlug: "cam20",
    test: 2,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam20", 2, 3),
    transcriptTryFiles: ["cam20-test2.cleaned.txt", "cam20-test 2.txt"],
  },
  {
    id: "cam20-t2-p4",
    slug: "developing-food-trends",
    title: "Developing Food Trends",
    heroImage: listeningPartHeroImage("cam20-t2-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Science"],
    summary:
      "A presentation on how social media and marketing shape food trends, with case studies of avocados, oat milk and Norwegian skrei.",
    contextKey: "cam20-t2",
    examSlug: "cam20",
    test: 2,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam20", 2, 4),
    transcriptTryFiles: ["cam20-test2.cleaned.txt", "cam20-test 2.txt"],
  },
  {
    id: "cam20-t3-p1",
    slug: "furniture-rental-companies",
    title: "Furniture Rental Companies",
    heroImage: listeningPartHeroImage("cam20-t3-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Education"],
    summary:
      "A comparison of furniture rental services, covering monthly costs, delivery, contracts and special offers from several companies.",
    contextKey: "cam20-t3",
    examSlug: "cam20",
    test: 3,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam20", 3, 1),
    transcriptTryFiles: ["cam20-test3.cleaned.txt", "cam20-test 3.txt"],
  },
  {
    id: "cam20-t3-p2",
    slug: "bidcaster-archaeological-dig",
    title: "Bidcaster Archaeological Dig",
    heroImage: listeningPartHeroImage("cam20-t3-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "A community archaeology project explains how a gold coin was found, what was discovered near the castle and plans for a museum display.",
    contextKey: "cam20-t3",
    examSlug: "cam20",
    test: 3,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam20", 3, 2),
    transcriptTryFiles: ["cam20-test3.cleaned.txt", "cam20-test 3.txt"],
  },
  {
    id: "cam20-t3-p3",
    slug: "theatre-programmes",
    title: "Theatre Programmes",
    heroImage: listeningPartHeroImage("cam20-t3-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "Finn and Maya research the history of British theatre programmes, from early free handouts to twentieth-century design and notable shows.",
    contextKey: "cam20-t3",
    examSlug: "cam20",
    test: 3,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam20", 3, 3),
    transcriptTryFiles: ["cam20-test3.cleaned.txt", "cam20-test 3.txt"],
  },
  {
    id: "cam20-t3-p4",
    slug: "inclusive-design",
    title: "Inclusive Design",
    heroImage: listeningPartHeroImage("cam20-t3-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Education", "Social"],
    summary:
      "A lecture defining inclusive design, with examples for accessibility and the safety and workplace impacts of products that exclude users.",
    contextKey: "cam20-t3",
    examSlug: "cam20",
    test: 3,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam20", 3, 4),
    transcriptTryFiles: ["cam20-test3.cleaned.txt", "cam20-test 3.txt"],
  },
  {
    id: "cam20-t4-p1",
    slug: "family-visit-advice",
    title: "Family Visit Advice",
    heroImage: listeningPartHeroImage("cam20-t4-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Social"],
    summary:
      "Travel advice for a family trip covers accommodation, city tours, museum visits, local food markets and discounted theatre tickets.",
    contextKey: "cam20-t4",
    examSlug: "cam20",
    test: 4,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam20", 4, 1),
    transcriptTryFiles: ["cam20-test4.cleaned.txt", "cam20-test 4.txt"],
  },
  {
    id: "cam20-t4-p2",
    slug: "football-stadium-tour",
    title: "Football Stadium Tour",
    heroImage: listeningPartHeroImage("cam20-t4-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Social"],
    summary:
      "A stadium guide explains family visit rules, new tour features and key dates in the history of football in the UK.",
    contextKey: "cam20-t4",
    examSlug: "cam20",
    test: 4,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam20", 4, 2),
    transcriptTryFiles: ["cam20-test4.cleaned.txt", "cam20-test 4.txt"],
  },
  {
    id: "cam20-t4-p3",
    slug: "teaching-handwriting",
    title: "Teaching Handwriting",
    heroImage: listeningPartHeroImage("cam20-t4-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Education", "Science"],
    summary:
      "Two students discuss handwriting difficulties linked to dyspraxia and dyslexia, teaching methods, exam impact and the future of writing by hand.",
    contextKey: "cam20-t4",
    examSlug: "cam20",
    test: 4,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam20", 4, 3),
    transcriptTryFiles: ["cam20-test4.cleaned.txt", "cam20-test 4.txt"],
  },
  {
    id: "cam20-t4-p4",
    slug: "chembe-bird-sanctuary",
    title: "Chembe Bird Sanctuary",
    heroImage: listeningPartHeroImage("cam20-t4-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Environment", "Science"],
    summary:
      "A research presentation on birds of prey near Chembe Bird Sanctuary, threats from power lines and ways farmers can protect chickens.",
    contextKey: "cam20-t4",
    examSlug: "cam20",
    test: 4,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam20", 4, 4),
    transcriptTryFiles: ["cam20-test4.cleaned.txt", "cam20-test 4.txt"],
  },
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
    audioPublicPath: listeningPartAudioApiPath("cam19", 1, 1),
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
    audioPublicPath: listeningPartAudioApiPath("cam19", 1, 2),
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
    audioPublicPath: listeningPartAudioApiPath("cam19", 1, 3),
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
    audioPublicPath: listeningPartAudioApiPath("cam19", 1, 4),
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
    audioPublicPath: listeningPartAudioApiPath("cam19", 2, 1),
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
    audioPublicPath: listeningPartAudioApiPath("cam19", 2, 2),
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
    audioPublicPath: listeningPartAudioApiPath("cam19", 2, 3),
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
    audioPublicPath: listeningPartAudioApiPath("cam19", 2, 4),
    transcriptTryFiles: ["cam19-test2.cleaned.txt", "cam19-test2.txt"],
  },
  {
    id: "cam19-t3-p1",
    slug: "kite-place-local-food",
    title: "Kite Place Local Food Shops",
    heroImage: listeningPartHeroImage("cam19-t3-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Environment"],
    summary:
      "Leon guides Shannon around Kite Place harbour shops — fish market, organic store Rose, and where to buy prawns, samphire and bread.",
    contextKey: "cam19-t3",
    examSlug: "cam19",
    test: 3,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam19", 3, 1),
    transcriptTryFiles: ["cam19-test3.cleaned.txt", "cam19-test3.txt"],
  },
  {
    id: "cam19-t3-p2",
    slug: "childrens-book-festival",
    title: "Children's Book Festival",
    heroImage: listeningPartHeroImage("cam19-t3-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Education", "Culture and Leisure"],
    summary:
      "Organiser Jenny Morgan previews festival workshops for young readers and recommends Alive and Kicking with tips for parents.",
    contextKey: "cam19-t3",
    examSlug: "cam19",
    test: 3,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam19", 3, 2),
    transcriptTryFiles: ["cam19-test3.cleaned.txt", "cam19-test3.txt"],
  },
  {
    id: "cam19-t3-p3",
    slug: "year-12-science-experiment",
    title: "Year 12 Science Experiment",
    heroImage: listeningPartHeroImage("cam19-t3-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Science", "Education"],
    summary:
      "Trainee teachers Clare and Jake plan a mouse diet experiment, discussing ethics, methodology and how to measure results.",
    contextKey: "cam19-t3",
    examSlug: "cam19",
    test: 3,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam19", 3, 3),
    transcriptTryFiles: ["cam19-test3.cleaned.txt", "cam19-test3.txt"],
  },
  {
    id: "cam19-t3-p4",
    slug: "microplastics",
    title: "Microplastics",
    heroImage: listeningPartHeroImage("cam19-t3-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Environment", "Science"],
    summary:
      "A lecture on sources and effects of microplastics in wildlife, food chains and soil, including an earthworm study at Anglia Ruskin University.",
    contextKey: "cam19-t3",
    examSlug: "cam19",
    test: 3,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam19", 3, 4),
    transcriptTryFiles: ["cam19-test3.cleaned.txt", "cam19-test3.txt"],
  },
  {
    id: "cam19-t4-p1",
    slug: "first-day-at-work",
    title: "First Day at Work",
    heroImage: listeningPartHeroImage("cam19-t4-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Education"],
    summary:
      "A new supermarket employee learns supervisor details, HR procedures, and daily tasks at the bakery, sushi and meat counters.",
    contextKey: "cam19-t4",
    examSlug: "cam19",
    test: 4,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam19", 4, 1),
    transcriptTryFiles: ["cam19-test4.cleaned.txt", "cam19-test4.txt"],
  },
  {
    id: "cam19-t4-p2",
    slug: "compton-park-runners",
    title: "Compton Park Runners Club",
    heroImage: listeningPartHeroImage("cam19-t4-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Social"],
    summary:
      "Coach Liz Fuller hosts a podcast on starting running, club member stories, and preparing for a first 5K race.",
    contextKey: "cam19-t4",
    examSlug: "cam19",
    test: 4,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam19", 4, 2),
    transcriptTryFiles: ["cam19-test4.cleaned.txt", "cam19-test4.txt"],
  },
  {
    id: "cam19-t4-p3",
    slug: "grandfathers-bookshop",
    title: "Grandfather's Bookshop",
    heroImage: listeningPartHeroImage("cam19-t4-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "Jane and Kieran discuss packing books for storage and how Jane's grandfather organises different types of books in his shop.",
    contextKey: "cam19-t4",
    examSlug: "cam19",
    test: 4,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam19", 4, 3),
    transcriptTryFiles: ["cam19-test4.cleaned.txt", "cam19-test4.txt"],
  },
  {
    id: "cam19-t4-p4",
    slug: "tree-planting-reforestation",
    title: "Tree Planting & Reforestation",
    heroImage: listeningPartHeroImage("cam19-t4-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Environment", "Science"],
    summary:
      "A presentation on reforestation principles, large-scale projects using drones, and restoring a forest in Lampang Province, Thailand.",
    contextKey: "cam19-t4",
    examSlug: "cam19",
    test: 4,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam19", 4, 4),
    transcriptTryFiles: ["cam19-test4.cleaned.txt", "cam19-test4.txt"],
  },
  {
    id: "cam18-t1-p1",
    slug: "transport-survey",
    title: "Transport Survey",
    heroImage: listeningPartHeroImage("cam18-t1-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Environment"],
    summary:
      "A transport survey phone interview covering bus and car travel habits, complaints about local services, and cycling in the city.",
    contextKey: "cam18-t1",
    examSlug: "cam18",
    test: 1,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam18", 1, 1),
    transcriptTryFiles: ["cam18-test1.cleaned.txt", "cam18-test 1.txt"],
  },
  {
    id: "cam18-t1-p2",
    slug: "ace-volunteering",
    title: "ACE Volunteering",
    heroImage: listeningPartHeroImage("cam18-t1-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Culture and Leisure"],
    summary:
      "An introduction to volunteering with ACE, covering training, commitment, and skills helpful for fundraising, litter collection and community clubs.",
    contextKey: "cam18-t1",
    examSlug: "cam18",
    test: 1,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam18", 1, 2),
    transcriptTryFiles: ["cam18-test1.cleaned.txt", "cam18-test 1.txt"],
  },
  {
    id: "cam18-t1-p3",
    slug: "fashion-design-careers",
    title: "Fashion Design Careers",
    heroImage: listeningPartHeroImage("cam18-t1-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Education", "Culture and Leisure"],
    summary:
      "Two students discuss careers in fashion design, comparing course options, work placements and skills needed in the industry.",
    contextKey: "cam18-t1",
    examSlug: "cam18",
    test: 1,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam18", 1, 3),
    transcriptTryFiles: ["cam18-test1.cleaned.txt", "cam18-test 1.txt"],
  },
  {
    id: "cam18-t1-p4",
    slug: "elephant-translocation",
    title: "Elephant Translocation",
    heroImage: listeningPartHeroImage("cam18-t1-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Science", "Environment"],
    summary:
      "A lecture on moving elephants to new habitats, explaining planning, transport challenges, and monitoring after release.",
    contextKey: "cam18-t1",
    examSlug: "cam18",
    test: 1,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam18", 1, 4),
    transcriptTryFiles: ["cam18-test1.cleaned.txt", "cam18-test 1.txt"],
  },
  {
    id: "cam18-t2-p1",
    slug: "milos-restaurants",
    title: "Milo's Restaurants",
    heroImage: listeningPartHeroImage("cam18-t2-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Social"],
    summary:
      "A conversation about Milo's restaurant chain, covering menu changes, staff training and customer feedback at different branches.",
    contextKey: "cam18-t2",
    examSlug: "cam18",
    test: 2,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam18", 2, 1),
    transcriptTryFiles: ["cam18-test2.cleaned.txt", "cam18-test 2.txt"],
  },
  {
    id: "cam18-t2-p2",
    slug: "housing-development-map",
    title: "Housing Development",
    heroImage: listeningPartHeroImage("cam18-t2-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Environment", "Social"],
    summary:
      "A guided tour of a new housing development site, describing facilities, landscaping and locations on a site map.",
    contextKey: "cam18-t2",
    examSlug: "cam18",
    test: 2,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam18", 2, 2),
    transcriptTryFiles: ["cam18-test2.cleaned.txt", "cam18-test 2.txt"],
  },
  {
    id: "cam18-t2-p3",
    slug: "laki-eruption-1783",
    title: "Laki Eruption 1783",
    heroImage: listeningPartHeroImage("cam18-t2-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Science", "Education"],
    summary:
      "Two geography students discuss the 1783 Laki eruption in Iceland, its environmental impact and how to present it in a seminar.",
    contextKey: "cam18-t2",
    examSlug: "cam18",
    test: 2,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam18", 2, 3),
    transcriptTryFiles: ["cam18-test2.cleaned.txt", "cam18-test 2.txt"],
  },
  {
    id: "cam18-t2-p4",
    slug: "history-of-pockets",
    title: "History of Pockets",
    heroImage: listeningPartHeroImage("cam18-t2-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "A presentation on the history of pockets in clothing, from early designs to modern fashion and social meaning.",
    contextKey: "cam18-t2",
    examSlug: "cam18",
    test: 2,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam18", 2, 4),
    transcriptTryFiles: ["cam18-test2.cleaned.txt", "cam18-test 2.txt"],
  },
  {
    id: "cam18-t3-p1",
    slug: "wayside-camera-club",
    title: "Wayside Camera Club",
    heroImage: listeningPartHeroImage("cam18-t3-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "A phone call about joining the Wayside Camera Club, covering membership fees, meetings, competitions and equipment advice.",
    contextKey: "cam18-t3",
    examSlug: "cam18",
    test: 3,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam18", 3, 1),
    transcriptTryFiles: ["cam18-test3.cleaned.txt", "cam18-test 3.txt"],
  },
  {
    id: "cam18-t3-p2",
    slug: "wild-mushrooms",
    title: "Wild Mushrooms",
    heroImage: listeningPartHeroImage("cam18-t3-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Environment", "Science"],
    summary:
      "A talk on identifying and foraging wild mushrooms safely, with tips on seasons, habitats and poisonous lookalikes.",
    contextKey: "cam18-t3",
    examSlug: "cam18",
    test: 3,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam18", 3, 2),
    transcriptTryFiles: ["cam18-test3.cleaned.txt", "cam18-test 3.txt"],
  },
  {
    id: "cam18-t3-p3",
    slug: "the-luddites",
    title: "The Luddites",
    heroImage: listeningPartHeroImage("cam18-t3-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Education", "Social"],
    summary:
      "Two students plan a presentation on the Luddites, discussing historical context, motives and how to structure their talk.",
    contextKey: "cam18-t3",
    examSlug: "cam18",
    test: 3,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam18", 3, 3),
    transcriptTryFiles: ["cam18-test3.cleaned.txt", "cam18-test 3.txt"],
  },
  {
    id: "cam18-t3-p4",
    slug: "space-traffic-management",
    title: "Space Traffic Management",
    heroImage: listeningPartHeroImage("cam18-t3-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Science", "Technology"],
    summary:
      "A lecture on managing traffic in Earth's orbit, covering satellite debris, collision risks and international coordination.",
    contextKey: "cam18-t3",
    examSlug: "cam18",
    test: 3,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam18", 3, 4),
    transcriptTryFiles: ["cam18-test3.cleaned.txt", "cam18-test 3.txt"],
  },
  {
    id: "cam18-t4-p1",
    slug: "fordham-job-agency",
    title: "Fordham Job Agency",
    heroImage: listeningPartHeroImage("cam18-t4-p1"),
    metaPill: "IELTS Cambridge",
    topics: ["Social", "Education"],
    summary:
      "A call to a job agency about temporary work, covering registration, available roles and interview preparation.",
    contextKey: "cam18-t4",
    examSlug: "cam18",
    test: 4,
    part: 1,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam18", 4, 1),
    transcriptTryFiles: ["cam18-test4.cleaned.txt", "cam18-test 4.txt"],
  },
  {
    id: "cam18-t4-p2",
    slug: "museum-tour",
    title: "Museum Tour",
    heroImage: listeningPartHeroImage("cam18-t4-p2"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "A museum guide introduces a tour, describing galleries, notable exhibits and practical information for visitors.",
    contextKey: "cam18-t4",
    examSlug: "cam18",
    test: 4,
    part: 2,
    durationMinutes: 5,
    audioPublicPath: listeningPartAudioApiPath("cam18", 4, 2),
    transcriptTryFiles: ["cam18-test4.cleaned.txt", "cam18-test 4.txt"],
  },
  {
    id: "cam18-t4-p3",
    slug: "origami-in-class",
    title: "Origami in Class",
    heroImage: listeningPartHeroImage("cam18-t4-p3"),
    metaPill: "IELTS Cambridge",
    topics: ["Education", "Culture and Leisure"],
    summary:
      "Two teachers discuss using origami in primary classes, including lesson plans, student engagement and learning outcomes.",
    contextKey: "cam18-t4",
    examSlug: "cam18",
    test: 4,
    part: 3,
    durationMinutes: 6,
    audioPublicPath: listeningPartAudioApiPath("cam18", 4, 3),
    transcriptTryFiles: ["cam18-test4.cleaned.txt", "cam18-test 4.txt"],
  },
  {
    id: "cam18-t4-p4",
    slug: "victor-hugo",
    title: "Victor Hugo",
    heroImage: listeningPartHeroImage("cam18-t4-p4"),
    metaPill: "IELTS Cambridge",
    topics: ["Culture and Leisure", "Education"],
    summary:
      "A lecture on Victor Hugo's life and literary legacy, covering major works, exile and influence on French literature.",
    contextKey: "cam18-t4",
    examSlug: "cam18",
    test: 4,
    part: 4,
    durationMinutes: 7,
    audioPublicPath: listeningPartAudioApiPath("cam18", 4, 4),
    transcriptTryFiles: ["cam18-test4.cleaned.txt", "cam18-test 4.txt"],
  },
  ...TACTICS_BASIC_LESSONS.map(tacticsBasicPartMeta),
  ...BASIC_IELTS_LISTENING_LESSONS.map(basicIeltsListeningPartMeta),
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
