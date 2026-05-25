import { buildCompassPassageVocabulary } from "@/lib/reading/compass-idioms";
import { READING_CHALLENGE_1_VOCABULARY } from "@/lib/reading/reading-challenge-1-vocabulary";
import {
  getReadingHubArticleById,
  isCompassPublishingPilot,
  type ReadingPilotId,
} from "@/lib/reading/hub-articles";

export type VocabLevel = "B1-B2" | "C1";

export type PassageVocabItem = {
  term: string;
  definitionVi: string;
  level: VocabLevel;
};

export type PassageVocabInput = {
  pilotId?: ReadingPilotId;
  idiomsText?: string;
};

/** 5 từ / bài — curated, không dùng API. */
const VOCAB_BY_ARTICLE: Record<string, PassageVocabItem[]> = {
  "cam20-test2-p1": [
    { term: "aquatic", definitionVi: "sống dưới nước", level: "B1-B2" },
    { term: "vegetation", definitionVi: "thảm thực vật", level: "B1-B2" },
    { term: "endangered", definitionVi: "bị đe dọa (tuyệt chủng)", level: "B1-B2" },
    { term: "surface", definitionVi: "mặt nước / bề mặt", level: "B1-B2" },
    { term: "subspecies", definitionVi: " loài phụ", level: "C1" },
  ],
  "cam20-test2-p2": [
    { term: "procrastinate", definitionVi: "trì hoãn, chần chừ", level: "B1-B2" },
    { term: "urgent", definitionVi: "khẩn cấp", level: "B1-B2" },
    { term: "deadline", definitionVi: "hạn chót", level: "B1-B2" },
    { term: "habit", definitionVi: "thói quen", level: "B1-B2" },
    { term: "aversion", definitionVi: "sự ngại / ác cảm", level: "C1" },
  ],
  "cam20-test2-p3": [
    { term: "umpire", definitionVi: "trọng tài", level: "B1-B2" },
    { term: "automated", definitionVi: "tự động hóa", level: "B1-B2" },
    { term: "strike zone", definitionVi: "vùng strike (bóng chày)", level: "B1-B2" },
    { term: "pitch", definitionVi: "đường bóng ném / sân", level: "B1-B2" },
    { term: "calibrated", definitionVi: "được hiệu chuẩn", level: "C1" },
  ],
  "cam20-test1-p1": [
    { term: "nocturnal", definitionVi: "hoạt động về đêm", level: "B1-B2" },
    { term: "flightless", definitionVi: "không bay được", level: "B1-B2" },
    { term: "predator", definitionVi: "động vật ăn thịt", level: "B1-B2" },
    { term: "conservation", definitionVi: "bảo tồn", level: "B1-B2" },
    { term: "critically endangered", definitionVi: "nguy cấp cao (tuyệt chủng)", level: "C1" },
  ],
  "cam20-test1-p2": [
    { term: "reintroduce", definitionVi: "tái thả / đưa loài trở lại", level: "B1-B2" },
    { term: "elm", definitionVi: "cây du (elm)", level: "B1-B2" },
    { term: "fungus", definitionVi: "nấm (gây bệnh cây)", level: "B1-B2" },
    { term: "specimen", definitionVi: "mẫu vật (cây)", level: "B1-B2" },
    { term: "defoliation", definitionVi: "hiện tượng rụng lá", level: "C1" },
  ],
  "cam20-test1-p3": [
    { term: "stressed", definitionVi: "căng thẳng", level: "B1-B2" },
    { term: "anxious", definitionVi: "lo lắng", level: "B1-B2" },
    { term: "judgement", definitionVi: "phán đoán", level: "B1-B2" },
    { term: "decision", definitionVi: "quyết định", level: "B1-B2" },
    { term: "cognitive", definitionVi: "thuộc nhận thức", level: "C1" },
  ],
  "cam20-test3-p1": [
    { term: "refrigeration", definitionVi: "làm lạnh / bảo quản lạnh", level: "B1-B2" },
    { term: "preserved", definitionVi: "được bảo quản", level: "B1-B2" },
    { term: "nutritional", definitionVi: "thuộc dinh dưỡng", level: "B1-B2" },
    { term: "innovation", definitionVi: "đổi mới", level: "B1-B2" },
    { term: "convenient", definitionVi: "tiện lợi", level: "B1-B2" },
  ],
  "cam20-test3-p2": [
    { term: "coral", definitionVi: "san hô", level: "B1-B2" },
    { term: "bleaching", definitionVi: "tẩy trắng (san hô)", level: "B1-B2" },
    { term: "ecosystem", definitionVi: "hệ sinh thái", level: "B1-B2" },
    { term: "conservation", definitionVi: "bảo tồn", level: "B1-B2" },
    { term: "symbiotic", definitionVi: "cộng sinh", level: "C1" },
  ],
  "cam20-test3-p3": [
    { term: "colonise", definitionVi: "định cư / thuộc địa hóa", level: "B1-B2" },
    { term: "artificial intelligence", definitionVi: "trí tuệ nhân tạo", level: "B1-B2" },
    { term: "autonomous", definitionVi: "tự động / tự chủ", level: "B1-B2" },
    { term: "robotics", definitionVi: "robot học", level: "B1-B2" },
    { term: "singularity", definitionVi: "điểm kỳ dị (AI)", level: "C1" },
  ],
  "cam20-test4-p1": [
    { term: "abstract", definitionVi: "trừu tượng", level: "B1-B2" },
    { term: "nuances", definitionVi: "sắc thái tinh tế", level: "B1-B2" },
    { term: "avant-garde", definitionVi: "tiên phong / hiện đại phá cách", level: "C1" },
    { term: "botanical", definitionVi: "thuộc thực vật", level: "B1-B2" },
    { term: "legacy", definitionVi: "di sản", level: "B1-B2" },
  ],
  "cam20-test4-p2": [
    { term: "mitigation", definitionVi: "giảm thiểu (tác động)", level: "B1-B2" },
    { term: "subsidence", definitionVi: "sụt lún đất", level: "C1" },
    { term: "amphibious", definitionVi: "lưỡng cư / có thể nổi", level: "C1" },
    { term: "salinity", definitionVi: "độ mặn", level: "B1-B2" },
    { term: "canopy", definitionVi: "tán cây", level: "B1-B2" },
  ],
  "cam20-test4-p3": [
    { term: "predator", definitionVi: "động vật ăn thịt / kẻ săn mồi", level: "B1-B2" },
    { term: "livestock", definitionVi: "gia súc", level: "B1-B2" },
    { term: "tolerant", definitionVi: "khoan dung / chịu đựng", level: "B1-B2" },
    { term: "unintended", definitionVi: "không chủ ý", level: "B1-B2" },
    { term: "coexistence", definitionVi: "cùng tồn tại", level: "B1-B2" },
  ],
};

/** Bổ sung khi khối IDIOMS chưa đủ 5 từ (ưu tiên từ hay gặp trong bài). */
const COMPASS_VOCAB_EXTRA_BY_ARTICLE: Record<string, PassageVocabItem[]> = {
  "reading-challenge-1-p1": [
    { term: "entirely", definitionVi: "hoàn toàn", level: "B1-B2" },
    { term: "unique", definitionVi: "độc đáo, đặc biệt", level: "B1-B2" },
  ],
};

export function getPassageVocabulary(
  articleId: string,
  passage?: PassageVocabInput,
): PassageVocabItem[] {
  const pilotId = passage?.pilotId ?? getReadingHubArticleById(articleId)?.pilotId;

  if (pilotId && isCompassPublishingPilot(pilotId)) {
    const curated = READING_CHALLENGE_1_VOCABULARY[articleId];
    if (curated?.length) return curated;
    if (passage?.idiomsText?.trim()) {
      const extra = COMPASS_VOCAB_EXTRA_BY_ARTICLE[articleId] ?? [];
      return buildCompassPassageVocabulary(passage.idiomsText, extra);
    }
    return [];
  }

  return VOCAB_BY_ARTICLE[articleId] ?? [];
}
