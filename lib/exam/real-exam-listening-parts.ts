import type { RealExamSlug } from "@/lib/exam/real-exam-catalog";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { realTestListeningAudioApiPath } from "@/lib/listening/listening-materials-urls";

/** Synthetic part meta for đề thi thật — dùng để render QnA + map images. */
export function realExamListeningPartMeta(
  slug: RealExamSlug,
  seriesNumber: number,
  part: number,
): ListeningPartMeta {
  return {
    id: `${slug}-p${part}`,
    slug: `${slug}-part-${part}`,
    title: `Đề thi thật IELTS ${seriesNumber} — Part ${part}`,
    heroImage: "",
    metaPill: "Đề thi thật",
    topics: [],
    contextKey: slug,
    examSlug: slug,
    test: seriesNumber,
    part,
    summary: "",
    durationMinutes: part === 4 ? 8 : 6,
    audioPublicPath: realTestListeningAudioApiPath(seriesNumber),
    transcriptTryFiles: [`real-test-${seriesNumber}.cleaned.txt`, `real test ${seriesNumber}.txt`],
  };
}
