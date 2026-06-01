import type { CourseNotionSlug } from "@/lib/course-notion-document";
import { courseHeroBannerFromLanding } from "@/lib/course-stitch-hero";
import { COACHING_STITCH_CONFIG } from "@/lib/coaching-stitch-data";
import { GENERAL_ENGLISH_STITCH_CONFIG } from "@/lib/general-english-stitch-data";
import type { CourseStitchConfig } from "@/lib/course-stitch-types";
import {
  PINBALL_CURRICULUM,
  PINBALL_ENTRANCE_OPTIONS,
  PINBALL_LINKS,
  PINBALL_OVERVIEW,
  PINBALL_TEACHER_IMAGE,
  PINBALL_TEACHER_SCORES,
} from "@/lib/pinball-ielts-stitch-data";
import {
  PINBALL_NOTES_INTRO_HTML,
  PINBALL_NOTES_SECTIONS,
} from "@/lib/pinball-notes-content";
import { PINBALL_TUITION_PANELS } from "@/lib/pinball-tuition-panels";

export const PINBALL_IELTS_STITCH_CONFIG: CourseStitchConfig = {
  slug: "pinball-ielts",
  hero: {
    title: "Pinball IELTS 2.0 (4.5+ - 6.0+)",
    subtitle: "A scholarly journey designed for academic discipline and linguistic mastery",
    bannerImage: courseHeroBannerFromLanding("pinball-ielts").bannerImage,
  },
  overview: PINBALL_OVERVIEW,
  schedulePill: "Ngày và giờ học dự kiến: Lớp tháng 4/2026 đã khai giảng",
  curriculum: {
    items: PINBALL_CURRICULUM,
    defaultOpenId: "acc-speaking",
  },
  entrance: {
    paragraphs: [
      "Nếu bạn đã từng thi IELTS thì chỉ cần gửi điểm gần nhất (trong vòng 1 năm).",
      "Nếu chưa, bạn vui lòng làm bài test bên dưới và dò đáp án. Yêu cầu đầu vào sẽ cần >= 20 câu đúng.",
    ],
    options: PINBALL_ENTRANCE_OPTIONS,
  },
  tuitionPanels: PINBALL_TUITION_PANELS,
  tuitionDefaultOpenId: "tuition-6",
  pricing: {
    amount: "8.400.000đ",
    amountSuffix: "/ khoá",
    note: "Bạn có thể thanh toán học phí trước 50%\u00A0hoặc\u00A0100%.",
  },
  notes: {
    introHtml: PINBALL_NOTES_INTRO_HTML,
    sections: PINBALL_NOTES_SECTIONS,
  },
  teacher: {
    image: PINBALL_TEACHER_IMAGE,
    greeting: "Chào bạn, mình là Ân.",
    scores: PINBALL_TEACHER_SCORES,
    paragraphs: [
      "Background của mình là sinh viên ngành ngôn ngữ Anh. Sau khi tốt nghiệp, mình đã làm nhiều thứ, để rồi cuối cùng quay trở về làm một giáo viên tiếng Anh. Và đây là một trong những điều mình cảm thấy thực sự muốn và nên làm.",
      "Mình quan niệm: Khi bạn học vì ngôn ngữ, ngôn ngữ sẽ ở lại với bạn.",
      "Mình mong rằng thông qua các khoá học với mình, bạn cũng sẽ cảm thấy IELTS hay tiếng Anh cũng chỉ là những điều rất đỗi bình thường.",
    ],
    links: [
      { icon: "school", label: "Thông tin về chứng chỉ của mình", href: PINBALL_LINKS.certificates },
      { icon: "newspaper", label: "Một số feedback của học viên mình", href: PINBALL_LINKS.feedback },
    ],
  },
};

const STITCH_CONFIGS: Record<string, CourseStitchConfig> = {
  "pinball-ielts": PINBALL_IELTS_STITCH_CONFIG,
  "general-english": GENERAL_ENGLISH_STITCH_CONFIG,
  coaching: COACHING_STITCH_CONFIG,
};

export function getCourseStitchConfig(slug: CourseNotionSlug): CourseStitchConfig | null {
  const base = STITCH_CONFIGS[slug];
  if (!base) return null;
  const banner = courseHeroBannerFromLanding(slug);
  return {
    ...base,
    hero: {
      ...base.hero,
      bannerImage: banner.bannerImage,
      bannerObjectPosition: banner.bannerObjectPosition,
    },
  };
}
