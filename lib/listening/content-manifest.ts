/**
 * Nguồn nội dung listening — chỉnh **một file này** khi thêm test/part hoặc file transcript mới.
 *
 * - **Audio:** đặt dưới `public/listening-assets/` theo `audioPublicPath` (không commit *.mp3 nhánh cam19 — xem `.gitignore`).
 * - **Transcript:** file `.txt` trong `transcript/` (thư mục đang gitignore). API đã gọi `sanitizeListeningTranscript` khi đọc —
 *   **không bắt buộc** chạy `npm run transcript:clean` trước; script chỉ để bạn có bản `.cleaned.txt` gọn trên đĩa nếu muốn.
 * - **Trước khi nghe:** xem `LISTENING_TEST_CONTEXTS` — có thể thêm **tiêu đề + đoạn mô tả** và tuỳ chọn **file intro ngắn** do bạn tự cắt (app không tự cắt MP3).
 */
export type ListeningPartMeta = {
  id: string;
  /** Khóa nhóm ngữ cảnh trước khi nghe — xem `LISTENING_TEST_CONTEXTS`. */
  contextKey: string;
  examSlug: string;
  test: number;
  part: number;
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
};

export function getListeningTestContext(contextKey: string): ListeningTestContext {
  const c = LISTENING_TEST_CONTEXTS[contextKey];
  if (c) return c;
  return {
    predictTitle: "Luyện nghe",
    predictBlurb: "Đoán chủ đề hoặc tình huống trước khi nghe bản đầy đủ.",
  };
}

export const LISTENING_PARTS_PILOT: readonly ListeningPartMeta[] = [
  {
    id: "cam19-t1-p1",
    contextKey: "cam19-t1",
    examSlug: "cam19",
    test: 1,
    part: 1,
    audioPublicPath: "/listening-assets/cam19/Test1 Part1.mp3",
    transcriptTryFiles: ["cam19-test1.cleaned.txt", "cam19-test1.txt"],
  },
  {
    id: "cam19-t1-p2",
    contextKey: "cam19-t1",
    examSlug: "cam19",
    test: 1,
    part: 2,
    audioPublicPath: "/listening-assets/cam19/Test1 Part2.mp3",
    transcriptTryFiles: ["cam19-test1.cleaned.txt", "cam19-test1.txt"],
  },
  {
    id: "cam19-t1-p3",
    contextKey: "cam19-t1",
    examSlug: "cam19",
    test: 1,
    part: 3,
    audioPublicPath: "/listening-assets/cam19/Test1 Part3.mp3",
    transcriptTryFiles: ["cam19-test1.cleaned.txt", "cam19-test1.txt"],
  },
  {
    id: "cam19-t1-p4",
    contextKey: "cam19-t1",
    examSlug: "cam19",
    test: 1,
    part: 4,
    audioPublicPath: "/listening-assets/cam19/Test1 Part4.mp3",
    transcriptTryFiles: ["cam19-test1.cleaned.txt", "cam19-test1.txt"],
  },
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

export function listeningTranscriptAllowlist(): Set<string> {
  const s = new Set<string>();
  for (const p of LISTENING_PARTS_PILOT) {
    for (const f of p.transcriptTryFiles) s.add(f);
  }
  return s;
}
