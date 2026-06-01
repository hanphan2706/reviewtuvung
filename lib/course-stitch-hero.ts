import type { CourseNotionSlug } from "@/lib/course-notion-document";
import { LANDING } from "@/lib/landing-content";

/** Khớp crop carousel trang chủ (landing-page.tsx). */
const BANNER_OBJECT_POSITION: Partial<Record<CourseNotionSlug, string>> = {
  "general-english": "50% 36%",
  "pinball-ielts": "50% 42%",
};

export function courseHeroBannerFromLanding(slug: CourseNotionSlug): {
  bannerImage: string;
  bannerObjectPosition?: string;
} {
  const course = LANDING.courses.find((c) => c.slug === slug);
  return {
    bannerImage: course?.image ?? "/course%206.jpg",
    bannerObjectPosition: BANNER_OBJECT_POSITION[slug],
  };
}
