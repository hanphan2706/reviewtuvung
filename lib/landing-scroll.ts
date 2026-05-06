export type LandingScrollSectionId = "khoa-hoc" | "tu-hoc";

const STORAGE_KEY = "anthichtuhoc-landing-scroll-section";

export function requestLandingScrollSection(id: LandingScrollSectionId): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEY, id);
}

export function consumeLandingScrollSection(): LandingScrollSectionId | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
  return raw === "khoa-hoc" || raw === "tu-hoc" ? raw : null;
}

export function scrollToLandingSection(id: LandingScrollSectionId): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
