export type CourseOverviewItem = {
  icon: string;
  label: string;
  value: string;
};

export type CourseCurriculumBulletSegment =
  | { text: string; strong?: undefined }
  | { strong: string; text?: undefined };

export type CourseCurriculumBullet = {
  text?: string;
  strong?: string;
  suffix?: string;
  segments?: readonly CourseCurriculumBulletSegment[];
};

export type CourseCurriculumItem = {
  id: string;
  title: string;
  icon: string;
  bullets: readonly CourseCurriculumBullet[];
};

export type CourseEntranceOption = {
  icon: string;
  label: string;
  href: string;
};

export type CourseNotesSection = {
  id: string;
  title: string;
  bodyHtml: string;
};

export type CourseTuitionPanel = {
  id: string;
  title: string;
  bodyHtml: string;
};

export type CourseTeacherLink = {
  icon: string;
  label: string;
  href: string;
};

export type CoursePricingLine = {
  amount: string;
  suffix: string;
};

export type CourseWhatsNewItem = {
  icon: string;
  title: string;
  body: string;
};

export type CourseStitchConfig = {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    bannerImage: string;
    /** Khớp object-position trên carousel landing (vd. `50% 36%`). */
    bannerObjectPosition?: string;
  };
  /** Tuỳ chọn — khối “có gì mới” ngay trên Tổng quan (Pinball 3.0). */
  whatsNew?: {
    title: string;
    items: readonly CourseWhatsNewItem[];
  };
  overview: readonly CourseOverviewItem[];
  schedulePill: string;
  curriculum?: {
    intro?: string;
    items: readonly CourseCurriculumItem[];
    defaultOpenId?: string;
  };
  entrance?: {
    paragraphs: readonly string[];
    options: readonly CourseEntranceOption[];
  };
  tuitionPanels: readonly CourseTuitionPanel[];
  /** Panel quyền lợi mở sẵn (mặc định: «Tương tác trên lớp» nếu có). */
  tuitionDefaultOpenId?: string;
  pricing: {
    amount?: string;
    amountSuffix?: string;
    amountSuffixBlock?: boolean;
    note?: string;
    lines?: readonly CoursePricingLine[];
  };
  notes?: {
    introHtml: string;
    sections: readonly CourseNotesSection[];
  };
  teacher: {
    image: string;
    greeting: string;
    scores: readonly string[];
    paragraphs: readonly string[];
    links: readonly CourseTeacherLink[];
  };
};
