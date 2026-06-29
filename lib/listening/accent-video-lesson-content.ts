import {
  ACCENT_DISCOVER_VIDEO_LESSONS,
  type AccentDiscoverVideoLesson,
} from "@/lib/listening/accent-discover-content";
import { ACCENT_VIDEO_TRANSCRIPTS } from "@/lib/listening/accent-video-transcript-text";
import { LISTENING_ACCENT_HUB_HREF } from "@/lib/listening/accent-nav";

export type AccentVideoLessonDetail = AccentDiscoverVideoLesson & {
  lessonNumber: number;
  pageTitle: string;
  /** Nguồn YouTube (hiển thị phụ nếu cần). */
  youtubeTitle?: string;
  intro: string;
  highlight?: string;
  keyPoints: readonly string[];
  /** null = chưa có — cần thêm thủ công vào file này. */
  transcript: string | null;
};

const LESSON_DETAILS: Record<string, Omit<AccentVideoLessonDetail, keyof AccentDiscoverVideoLesson>> = {
  vowels: {
    lessonNumber: 1,
    pageTitle: "Bài 1",
    youtubeTitle: "British vs American Accents | Improve Your Accent",
    intro:
      "Video giới thiệu cách nghe và làm quen với sự khác biệt giữa giọng Anh Anh (RP) và Anh Mỹ (GA) qua nhiều ví dụ thực tế — " +
      "không chỉ một loại âm mà cả cách nói, nhịp và thói quen phát âm.",
    highlight:
      "Mỗi video trong chuỗi đều lồng nhiều điểm khác nhau. Nghe để quen tai trước; chi tiết IPA bạn có thể ôn thêm ở các phần khác của trang.",
    keyPoints: [
      "So sánh Anh Anh và Anh Mỹ qua ví dụ nghe, không gói gọn một quy tắc duy nhất.",
      "Chú ý nguyên âm, phụ âm, /r/ và nhịp câu xuất hiện xen kẽ trong cùng bài.",
      "Mục tiêu bài đầu: nhận ra hai “màu giọng” khác nhau, chưa cần ghi nhớ hết ký hiệu IPA.",
    ],
    transcript: null,
  },
  consonants: {
    lessonNumber: 2,
    pageTitle: "Bài 2",
    youtubeTitle: "British vs American English – 15 Pronunciation Differences You've Never Noticed",
    intro:
      "Bài này đi qua 15 khác biệt phát âm giữa Anh Anh và Anh Mỹ mà người học thường bỏ qua — trộn nguyên âm, phụ âm, " +
      "cách nối âm và từ vựng trong cùng một video.",
    highlight:
      "Đừng cố gắng “xếp” mỗi ví dụ vào một nhãn IPA duy nhất; hãy nghe để tích lũy cảm giác giọng Mỹ vs giọng Anh.",
    keyPoints: [
      "Nhiều cặp từ cùng chính tả nhưng khác cách phát âm hoặc trọng âm.",
      "Chú ý /r/, /t/ (flap T), và các nguyên âm xuất hiện xen kẽ trong danh sách ví dụ.",
      "Nghe lại từng đoạn ngắn nếu cần — không cần thuộc hết 15 điểm trong một lần xem.",
    ],
    transcript: null,
  },
  "word-stress": {
    lessonNumber: 3,
    pageTitle: "Bài 3",
    youtubeTitle: "BRITISH VS AMERICAN ACCENT EXPLAINED",
    intro:
      "Video tổng kết và giải thích khác biệt giữa giọng Anh Anh và Anh Mỹ qua ví dụ nghe — bao gồm cách nói, trọng âm, " +
      "nguyên âm và thói quen phát âm trong cùng một bài.",
    highlight:
      "Phù hợp xem sau Bài 1 và Bài 2: lúc này bạn đã quen tai hơn, có thể ghép các manh mối nghe được thành bức tranh lớn hơn.",
    keyPoints: [
      "Nghe để hiểu vì sao cùng một câu tiếng Anh có thể “đổi màu giọng” hoàn toàn.",
      "Trọng âm, nguyên âm và phụ âm thường xuất hiện lẫn nhau — không tách riêng từng chủ đề.",
      "Ghi chú lại 2–3 điểm bạn nghe rõ nhất sau mỗi lần xem, thay vì cố nhớ hết.",
    ],
    transcript: null,
  },
};

// Transcript text is merged at runtime from accent-video-transcript-text.ts (YouTube CC).

function lessonTranscript(lessonId: string): string | null {
  return ACCENT_VIDEO_TRANSCRIPTS[lessonId] ?? null;
}

export const ACCENT_VIDEO_LESSON_TRANSCRIPT_PLACEHOLDER =
  "Chưa có bản ghi cho bài này. Chạy `python3 scripts/fetch-accent-video-transcripts.py` để tải CC từ YouTube.";

export const ACCENT_VIDEO_LESSON_PAGE = {
  sidebarTitle: "Danh sách bài học",
  tabContent: "Nội dung bài học",
  tabTranscript: "Bản ghi (Transcript)",
  keyPointsHeading: "Các điểm chính",
  quizCta: "Kiểm tra kiến thức",
  watchingLabel: "Đang xem",
  lockedLabel: "Sắp ra mắt",
} as const;

export function accentVideoLessonHref(lessonId: string): string {
  return `${LISTENING_ACCENT_HUB_HREF}/bai-hoc/${lessonId}`;
}

export function getAccentVideoLessons(): AccentVideoLessonDetail[] {
  return ACCENT_DISCOVER_VIDEO_LESSONS.map((lesson) => {
    const detail = LESSON_DETAILS[lesson.id];
    if (!detail) {
      throw new Error(`Missing accent video lesson detail: ${lesson.id}`);
    }
    return { ...lesson, ...detail, transcript: lessonTranscript(lesson.id) };
  });
}

export function getAccentVideoLesson(lessonId: string): AccentVideoLessonDetail | undefined {
  return getAccentVideoLessons().find((lesson) => lesson.id === lessonId);
}

export function isAccentVideoLessonPlayable(lesson: AccentVideoLessonDetail): boolean {
  return Boolean(lesson.youtubeVideoId);
}

export function youtubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
