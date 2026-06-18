import fs from "node:fs";
import path from "node:path";
import { LISTENING_MATERIALS_ROOT } from "@/lib/listening/listening-materials-paths";
import { listeningMapImageApiPath } from "@/lib/listening/listening-materials-urls";
import type { ListeningQnaPart, ListeningQnaSection } from "@/lib/listening/parse-listening-qna";

const MAP_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"] as const;

/** `cam 19 test 1 part 2 map.jpg` — khớp file bạn đặt trong `listening materials/`. */
export const LISTENING_MAP_IMAGE_FILE_RE =
  /^cam \d+ test \d+ part \d+ map\.(jpe?g|png|webp)$/i;

export function isAllowedListeningMapImageFile(fileName: string): boolean {
  return LISTENING_MAP_IMAGE_FILE_RE.test(fileName.trim());
}

export function conventionalListeningMapImageBaseName(
  examSlug: string,
  test: number,
  part: number,
): string {
  const book = examSlug.match(/^cam(\d+)$/i);
  const prefix = book ? `cam ${book[1]}` : examSlug.replace(/-/g, " ");
  return `${prefix} test ${test} part ${part} map`;
}

export function findListeningMapImageFileName(
  examSlug: string,
  test: number,
  part: number,
): string | null {
  const base = conventionalListeningMapImageBaseName(examSlug, test, part);
  for (const ext of MAP_IMAGE_EXTENSIONS) {
    const fileName = `${base}${ext}`;
    const fullPath = path.join(process.cwd(), LISTENING_MATERIALS_ROOT, fileName);
    if (fs.existsSync(fullPath)) return fileName;
  }
  return null;
}

export function resolveListeningMapImagePath(fileName: string): string | null {
  if (!isAllowedListeningMapImageFile(fileName)) return null;
  const fullPath = path.join(process.cwd(), LISTENING_MATERIALS_ROOT, fileName);
  return fs.existsSync(fullPath) ? fullPath : null;
}

/** Chuẩn hoá giá trị từ dòng `IMAGE | ...` trong QnA. */
export function normalizeListeningMapImageUrl(raw: string): string | undefined {
  const value = raw.trim();
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("/api/listening/image?")) return value;
  if (value.startsWith("/")) return value;
  if (isAllowedListeningMapImageFile(value)) return listeningMapImageApiPath(value);
  return value;
}

export function resolveListeningMapImageUrl(
  explicitUrl: string | undefined,
  ctx: { examSlug: string; test: number; part: number },
): string | undefined {
  if (explicitUrl?.trim()) {
    return normalizeListeningMapImageUrl(explicitUrl);
  }
  const fileName = findListeningMapImageFileName(ctx.examSlug, ctx.test, ctx.part);
  return fileName ? listeningMapImageApiPath(fileName) : undefined;
}

function enrichMapSection(
  section: ListeningQnaSection,
  ctx: { examSlug: string; test: number; part: number },
): ListeningQnaSection {
  if (section.kind !== "map") return section;
  const imageUrl = resolveListeningMapImageUrl(section.imageUrl, ctx);
  if (imageUrl === section.imageUrl) return section;
  return { ...section, imageUrl };
}

/** Gán URL map cho section `Label the map` — ưu tiên `IMAGE |`, fallback tên file quy ước. */
export function enrichListeningQnaPartMapImages(
  part: ListeningQnaPart,
  ctx: { examSlug: string; test: number; part: number },
): ListeningQnaPart {
  let changed = false;
  const sections = part.sections.map((section) => {
    const next = enrichMapSection(section, ctx);
    if (next !== section) changed = true;
    return next;
  });
  return changed ? { ...part, sections } : part;
}
