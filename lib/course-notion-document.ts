import { readFileSync } from "node:fs";
import { join } from "node:path";

const SLUGS = ["general-english", "pinball-ielts", "coaching"] as const;
export type CourseNotionSlug = (typeof SLUGS)[number];

/** Khoá dùng layout Stitch (không render HTML Notion). */
export const STITCH_COURSE_SLUGS = ["pinball-ielts"] as const;
export type StitchCourseSlug = (typeof STITCH_COURSE_SLUGS)[number];

export function isStitchCourseSlug(slug: string): slug is StitchCourseSlug {
  return (STITCH_COURSE_SLUGS as readonly string[]).includes(slug);
}

/**
 * Nội dung HTML thân bài từ export Notion (`div.page-body` + con).
 * Dùng cùng stylesheet `course-content.css` với tông trang landing.
 */
export function getCoursePageBodyHtml(slug: string): string {
  const root = process.cwd();
  return readFileSync(join(root, "lib", "course-notion-html", `${slug}.html`), "utf-8");
}

export function isValidCourseNotionSlug(slug: string): slug is CourseNotionSlug {
  return (SLUGS as readonly string[]).includes(slug);
}
