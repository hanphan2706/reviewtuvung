/** Nội dung rút từ thư mục Notion export (`notion/Ân thích tự học - các khoá học hiện có`). */

const FACEBOOK_PAGE_URL = "https://www.facebook.com/anthichtuhoc/" as const;

const NOTION_CERTIFICATE_INFO_URL =
  "https://www.notion.so/angia/Th-ng-tin-v-ch-ng-ch-c-a-m-nh-2d8f8af06218810ab297d1d5d1343098?source=copy_link" as const;

const NOTION_STUDENT_FEEDBACK_URL =
  "https://www.notion.so/angia/M-t-s-feedback-c-a-h-c-vi-n-m-nh-2d8f8af06218810c8010f78d8409fee2?source=copy_link" as const;

const SITE_FEEDBACK_FORM_URL = "https://forms.gle/v2HwjBU72uynCxLfA" as const;

export const LANDING = {
  brand: "Ân thích tự học",
  brandShort: "ANTHICHTUHOC",

  /** Tiêu đề trang (section Giới thiệu trên trang chủ). */
  heroLines: ["Mình thích học,", "đơn giản là vì kiến thức"] as const,
  /** Dòng phụ dưới tiêu đề hero (mỗi phần tử một dòng). */
  heroSubheadline: [
    "Đây là nơi giúp bạn tìm được cái mình cần,",
    "để 'cuối cùng cũng' học được điều mình muốn.",
  ] as const,

  locationLabel: "Học online · Việt Nam",

  /** Link từ hero tới #khoa-hoc. */
  heroScrollToCoursesLabel: "Tự học hay đi học?" as const,

  nav: [
    { href: "/gioi-thieu", label: "Giới thiệu" },
    { href: "#khoa-hoc", label: "Đi học" },
    { href: "#tu-hoc", label: "Tự học" },
    { href: FACEBOOK_PAGE_URL, label: "Giải bày" },
  ] as const,

  categoryPills: [
    {
      id: "general",
      label: "Tiếng Anh tổng quát",
      hint: "A1 → C1",
    },
    {
      id: "ielts",
      label: "Pinball IELTS 2.0",
      hint: "4.5 → 6.0+",
    },
    {
      id: "coaching",
      label: "Coaching 1-1",
      hint: "Lộ trình riêng",
    },
  ] as const,

  sectionCoursesTitle: "Đi học",
  /** Dòng phụ dưới tiêu đề (màu nhạt hơn trên giao diện). */
  sectionCoursesSubheadline:
    "Không chỉ học kiến thức ngôn ngữ, mà còn là tư duy và cách tiếp cận đúng để bạn trở nên độc lập hơn",
  selfStudySectionTitle: "Tự học",
  sectionCoursesLocation: "Học online",

  /** Thẻ CTA cuối carousel (như khối coral trong tham chiếu, dùng màu tím). */
  courseCarouselCta: {
    title: "Không biết mình phù hợp với khóa nào?",
    subtitle: "Nhắn mình để kiểm tra trình độ miễn phí và giải đáp thắc mắc nha.",
    buttonLabel: "Liên hệ",
    href: "#lien-he",
  } as const,

  courses: [
    {
      slug: "general-english",
      title: "General English (A0 - C1)",
      ratingLabel: "4.9/5",
      priceHint: "General English (A0 - C1)",
      image: "/course%206.jpg",
      summary:
        "Mình muốn giỏi tiếng Anh hơn, để giao tiếp trong công việc hoặc cuộc sống hằng ngày, nhưng mình không cần thi chứng chỉ.",
      tags: ["Google Meet", "A1–C1", "Mid-term & final test", "Google Classroom"],
    },
    {
      slug: "pinball-ielts",
      title: "Pinball IELTS 2.0 (4.5+ - 6.0+)",
      ratingLabel: "4.9/5",
      priceHint: "Pinball IELTS 2.0",
      image: "/course%202.jpg",
      summary:
        "Mình cần thi IELTS, và mình cần một nơi học thật sự hiệu quả. Mình không muốn phải thử hay thay đổi chỗ học mãi.",
      tags: ["Speaking & Writing", "Listening & Reading", "Từ vựng học thuật", "Có kiểm tra đầu vào"],
    },
    {
      slug: "coaching",
      title: "Coaching 1-1",
      ratingLabel: "5.0/5",
      priceHint: "Coaching 1-1",
      image: "/course%203.jpg",
      summary:
        "Mình muốn được kèm và sửa bài kĩ lưỡng, cá nhân hoá. Mình sợ học lớp nhóm thì thời gian bị chia ra, mình không luyện tập được nhiều.",
      tags: ["Feedback chi tiết", "Bài tập Nói & Viết", "Tài liệu bổ trợ", "Tự học tại nhà"],
    },
  ] as const,

  moreLinks: [
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Thông tin về chứng chỉ", href: NOTION_CERTIFICATE_INFO_URL },
    { label: "Feedback học viên", href: NOTION_STUDENT_FEEDBACK_URL },
    { label: "Góp ý cải thiện", href: SITE_FEEDBACK_FORM_URL },
  ] as const,

  contactNote:
    "Mình thích học, đơn giản là học vì kiến thức. Bạn có thể ghé thăm Facebook để đọc thêm các bài chia sẻ và liên hệ trực tiếp với mình trên đó nha. Much gratitude!",
  contactFacebook: FACEBOOK_PAGE_URL,

  /** Giao diện footer tối giản (2 dòng CTA trái + dòng nổi bật phải, cột link, dòng legal + social). */
  footer: {
    ctaLines: [
      "Bạn muốn cải thiện khả năng ngôn ngữ của mình?",
      "Cứ tuỳ thích vọc vạch toàn bộ tính năng ở đây nha!",
    ] as const,
    contactHighlight: {
      label: "facebook.com/anthichtuhoc",
      href: FACEBOOK_PAGE_URL,
    } as const,
    columnDiscoverTitle: "Tò mò",
    columnResourcesTitle: "Khám phá",
    legal: [
      { label: "Chính sách quyền riêng tư", href: "/privacy" },
      { label: "Tuỳ chọn cookie", href: "/cookies" },
    ] as const,
    /** Chữ C trong vòng tròn đặt trước `brand` ở footer. */
    copyright: {
      lead: "A solo project by ",
      brand: "ANTHICHTUHOC",
    } as const,
    credits: { label: "Credits", href: "/credits" } as const,
    /** Cập nhật khi có trang chính thức; tạm dùng # nếu chưa có. */
    social: {
      instagram: "#",
      linkedin: "#",
    } as const,
  } as const,
} as const;
