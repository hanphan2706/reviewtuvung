import { LISTENING_PARTS_PILOT } from "@/lib/listening/content-manifest";

export const LISTENING_HUB_HREF = "/tu-hoc/luyen-nghe";

export function listeningLessonHrefBySlug(slug: string): string {
  return `${LISTENING_HUB_HREF}/${slug}`;
}

export function listeningLessonExamHrefBySlug(slug: string): string {
  return `${LISTENING_HUB_HREF}/${slug}/lam-bai`;
}

/** @deprecated Legacy — trả về bài Part N đầu tiên trong manifest (Test 1). */
export function listeningLessonHref(part: number): string {
  const meta = LISTENING_PARTS_PILOT.find((x) => x.part === part) ?? LISTENING_PARTS_PILOT[0];
  if (!meta) throw new Error("LISTENING_PARTS_PILOT must not be empty");
  return listeningLessonHrefBySlug(meta.slug);
}

export function listeningFeaturedLessonHref(): string {
  return LISTENING_HUB_HREF;
}

/** @deprecated Query `?part=` — redirect sang slug URL. */
export function parseListeningLessonPart(partRaw: string | null): number | null {
  if (!partRaw) return null;
  const part = Number.parseInt(partRaw, 10);
  if (!Number.isFinite(part) || part < 1 || part > 4) return null;
  return part;
}

/** @deprecated Legacy — trả về bài Part N đầu tiên trong manifest (Test 1). */
export function parseListeningLessonSlugFromPath(pathname: string): string | null {
  const prefix = `${LISTENING_HUB_HREF}/`;
  if (!pathname.startsWith(prefix)) return null;
  const slug = pathname.slice(prefix.length).split("/")[0]?.trim();
  if (!slug || slug.includes(".")) return null;
  const reserved = new Set([
    "thu-vien",
    "nguon",
    "do-kho",
    "chat-giong",
    "kham-pha-nguon",
    "bang-ipa",
    "luyen-de-ielts",
  ]);
  if (reserved.has(slug)) return null;
  return LISTENING_PARTS_PILOT.some((p) => p.slug === slug) ? slug : null;
}
