/** Căn lề header + nội dung hub Luyện đọc / Luyện nghe. */
export const studyHubContainerClass = "mx-auto w-full max-w-[1100px] px-4 md:px-6";

/** Padding trang hub — hero / layout chính (Luyện nghe, Luyện đọc). */
export const studyHubPageContentClass = `${studyHubContainerClass} py-10 md:py-12`;

/**
 * Padding trang con — top gọn hơn vì có khối H1 ngay dưới header;
 * cảm giác khoảng cách header → nội dung khớp trang hub.
 */
export const studyHubSubpageContentClass = `${studyHubContainerClass} pt-6 pb-10 md:pt-8 md:pb-12`;

/** Tiêu đề trang con (một cột). */
export const studyHubSubpageTitleClass = "mb-6 max-w-2xl";

/** Tiêu đề trang con rộng hơn (khám phá nguồn, giọng). */
export const studyHubSubpageTitleWideClass = "mb-6 max-w-3xl";

/** Header thư viện: tiêu đề → phụ đề (nếu có) → sort, luôn xếp dọc trên lưới. */
export const studyHubSubpageLibraryHeaderClass = "mb-6 flex flex-col gap-4";

/** Khối tiêu đề + phụ đề trang thư viện — full width trong container (toolbar nằm hàng riêng). */
export const studyHubSubpageLibraryTitleBlockClass = "max-w-none";

export const studyHubSubpageLibraryTitleClass =
  "font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2rem]";

export const studyHubSubpageLibraryDescriptionClass = "mt-3 text-base leading-relaxed text-[#47464b]";

/** Hàng toolbar thư viện — search + sort, căn phải. */
export const studyHubSubpageLibrarySortRowClass = "flex items-center justify-end";

/** Chiều rộng control search / sort trên toolbar thư viện. */
export const studyHubLibraryToolbarControlClass = "w-[13.5rem]";

export const studyHubLibraryToolbarFieldClass = `${studyHubLibraryToolbarControlClass} min-w-0 rounded-lg border border-[#4a4a4a] bg-white py-1.5 text-xs font-bold text-[#4a4a4a] transition hover:bg-[#fafafa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a4a4a]`;

/** Tiêu đề trang khóa học — khoảng cách xuống danh sách bài rộng hơn subpage thường. */
export const studyHubCoursePageTitleClass = "mb-10 max-w-2xl md:mb-12";

/** Tiêu đề section khóa học → nội dung bên dưới. */
export const studyHubCourseSectionHeaderClass = "mb-6";

/** Khoảng cách giữa các khối trong trang khóa học (sidebar, danh sách). */
export const studyHubCourseSectionStackClass = "gap-6";

/** Nền trang — cùng tông app / trang chủ / từ vựng. */
export const studyHubPageBgClass = "min-h-dvh bg-[#f5f5f7]";

/** Chiều cao thanh header hub (khớp header trang + menu curtain). */
export const studyHubHeaderBarClass = "flex h-14 items-center md:h-16";

/** Chữ nav/header hub. */
export const studyHubHeaderTextClass = "text-base font-medium leading-none text-ink";
