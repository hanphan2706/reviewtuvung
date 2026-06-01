"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LANDING } from "@/lib/landing-content";
import {
  consumeLandingScrollSection,
  scrollToLandingSection,
  type LandingScrollSectionId,
} from "@/lib/landing-scroll";
import { LandingCurtainMenu } from "@/components/landing-curtain-menu";
import { LandingFooter } from "@/components/landing-footer";
import { LandingReadingLaunchModal } from "@/components/landing-reading-launch-modal";
import { LandingSectionLink } from "@/components/landing-section-link";

/** ~card width + `gap-3` for snap scroll. */
const CAROUSEL_STEP = 334;

/** Reset khi hard refresh; giữ qua client-nav trong cùng tab. */
let landingLaunchModalShownThisDocument = false;

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [readingLaunchModalOpen, setReadingLaunchModalOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const dismissReadingLaunchModal = useCallback(() => {
    setReadingLaunchModalOpen(false);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const fromSession = consumeLandingScrollSection();
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    const fromHash: LandingScrollSectionId | null =
      hash === "khoa-hoc" || hash === "tu-hoc" ? hash : null;
    const target = fromSession ?? fromHash;
    if (!target) return;
    requestAnimationFrame(() => {
      scrollToLandingSection(target);
      if (typeof window !== "undefined" && window.location.hash) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      }
    });
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    if (typeof window === "undefined") return;
    if (landingLaunchModalShownThisDocument) return;
    const timeoutId = window.setTimeout(() => {
      landingLaunchModalShownThisDocument = true;
      setReadingLaunchModalOpen(true);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  const navBarMain = LANDING.nav.filter(
    (item) => item.label !== "Giải bày" && item.label !== "Giới thiệu",
  );
  const navBarContact = LANDING.nav.find((item) => item.label === "Giải bày");

  return (
    <div className="min-h-dvh text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b-0 bg-white shadow-[0_1px_0_0_rgb(228_228_231_/_0.95)]">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-6 py-4 md:px-10 md:py-5 lg:grid lg:max-w-[1600px] lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="min-w-0">
            <Link
              href="/"
              className="group inline-flex w-fit items-center leading-none"
            >
              <span className="text-sm font-medium tracking-[-0.02em] text-ink md:text-base">
                {LANDING.brandShort}
              </span>
            </Link>
          </div>
          <div className="flex w-full min-w-0 flex-1 items-center justify-end gap-3 md:gap-4 lg:justify-start lg:gap-0">
            <nav
              className="hidden min-w-0 lg:flex lg:flex-1 lg:flex-nowrap lg:items-center lg:justify-start lg:gap-x-6"
              aria-label="Điều hướng chính"
            >
              {navBarMain.map((item) => {
                if ("scrollSection" in item && item.scrollSection) {
                  return (
                    <LandingSectionLink
                      key={item.label}
                      sectionId={item.scrollSection}
                      className="shrink-0 text-base font-medium text-ink transition hover:opacity-90"
                    >
                      {item.label}
                    </LandingSectionLink>
                  );
                }
                const { href, label } = item as { href: string; label: string };
                const isOnTap = href.startsWith("/");
                const isExternal = href.startsWith("http");
                if (isOnTap) {
                  return (
                    <Link key={href} href={href} className="shrink-0 text-base font-medium text-ink transition hover:opacity-90">
                      {label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={href}
                    href={href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="shrink-0 text-base font-medium text-ink transition hover:opacity-90"
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
            <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
              {navBarContact ? (
                <a
                  href={navBarContact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-base font-medium text-ink transition hover:opacity-90"
                >
                  {navBarContact.label}
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="inline-flex shrink-0 items-center justify-center p-1.5 text-ink transition hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
                aria-expanded={menuOpen}
                aria-haspopup="dialog"
                aria-label="Mở menu"
              >
                <span className="flex w-[22px] flex-col justify-center gap-[5px]" aria-hidden>
                  <span className="h-0.5 w-full rounded-full bg-zinc-900" />
                  <span className="h-0.5 w-full rounded-full bg-zinc-900" />
                </span>
              </button>
            </div>
          </div>
        </div>

      </header>

      <LandingCurtainMenu open={menuOpen} onClose={closeMenu} />
      <LandingReadingLaunchModal
        open={readingLaunchModalOpen}
        onClose={dismissReadingLaunchModal}
        onExplore={dismissReadingLaunchModal}
      />

      <main className="bg-white">
        <section
          className="flex min-h-svh flex-col bg-white"
          id="gioi-thieu"
        >
          <div className="flex min-h-0 flex-1 flex-col justify-center pt-16 sm:pt-20 md:pt-24">
            <div className="mx-auto grid w-full max-w-[1600px] items-start gap-6 px-6 sm:gap-8 md:grid-cols-2 md:gap-12 md:px-10 md:pb-2 lg:gap-16">
              <div className="hidden min-h-0 md:block" aria-hidden />
              <div className="min-w-0 -translate-y-4 text-left">
                <h1 className="text-balance text-left text-[clamp(1.875rem,3.2vw+1rem,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                  {LANDING.heroLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mt-4 max-w-xl text-pretty text-left text-sm font-normal leading-relaxed text-ink-muted sm:mt-5 sm:text-base md:mt-6 md:max-w-2xl md:text-lg md:leading-[1.65]">
                  {LANDING.heroSubheadline.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto grid w-full min-h-0 max-w-[1600px] flex-none grid-cols-1 gap-0 px-6 pb-3 sm:pb-4 md:grid-cols-2 md:gap-12 md:px-10 lg:gap-16">
            <div className="hidden min-h-0 md:block" aria-hidden />
            <p className="m-0 pt-0 text-left text-sm text-ink-muted">
              <LandingSectionLink
                sectionId="khoa-hoc"
                className="group inline-flex max-w-full items-baseline gap-1.5 text-left transition hover:opacity-90"
              >
                <span className="shrink-0 font-normal text-[#4b2876]" aria-hidden>
                  ↳
                </span>
                <span className="border-b border-[#4b2876] font-normal text-[#4b2876] transition group-hover:border-[#4b2876]">
                  {LANDING.heroScrollToCoursesLabel}
                </span>
              </LandingSectionLink>
            </p>
          </div>
          <div
            className="mx-auto flex w-full min-h-0 max-w-[1600px] flex-1 flex-col px-6 pb-6 sm:pb-7 md:px-10"
            aria-hidden
          >
            <div className="relative min-h-[28svh] w-full flex-1 overflow-hidden rounded-lg bg-white sm:min-h-[30svh]">
              <Image
                src="/herroo1.jpg"
                alt=""
                fill
                unoptimized
                className="object-cover object-[50%_26%] lg:object-[50%_24%]"
                sizes="(max-width: 768px) 100vw, min(1536px, 96vw)"
                priority
              />
              <span className="absolute bottom-3 left-3 text-[10px] font-medium tracking-[-0.01em] text-[#fffaf2]/60 drop-shadow-sm sm:bottom-4 sm:left-4 sm:text-xs">
                Photo by Gian Paul Guinto on Unsplash
              </span>
            </div>
          </div>
        </section>
        <div
          className="h-3 w-full bg-gradient-to-b from-white to-zinc-50/80 sm:h-4"
          aria-hidden
        />

        <CourseCarouselSection
          id="khoa-hoc"
          title={LANDING.sectionCoursesTitle}
          subheadline={LANDING.sectionCoursesSubheadline}
          align="right"
        />
        <SelfStudySection />

        <div
          className="h-6 w-full bg-gradient-to-b from-zinc-50/80 via-zinc-100/60 to-zinc-200/40 sm:h-8"
          aria-hidden
        />

        <LandingFooter />
      </main>
    </div>
  );
}

function CourseCarouselSection({
  id,
  title,
  subheadline,
  align = "right",
  tuckUp = false,
}: {
  id?: string;
  title: string;
  subheadline?: string;
  align?: "left" | "right";
  tuckUp?: boolean;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  /** Chỉ ẩn nút khi toàn bộ track thật sự nằm gọn trong vùng cuộn — không dùng breakpoint viewport (khung carousel hẹp hơn màn hình). */
  const [carouselHasOverflow, setCarouselHasOverflow] = useState(true);

  const updateCarouselOverflow = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setCarouselHasOverflow(el.scrollWidth > el.clientWidth + 2);
  }, []);

  useLayoutEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateCarouselOverflow();
    const ro = new ResizeObserver(() => {
      updateCarouselOverflow();
    });
    ro.observe(el);
    window.addEventListener("resize", updateCarouselOverflow);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateCarouselOverflow);
    };
  }, [updateCarouselOverflow]);

  const scrollCourses = (dir: "prev" | "next") => {
    const el = carouselRef.current;
    if (!el) return;
    const delta = dir === "next" ? CAROUSEL_STEP : -CAROUSEL_STEP;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section
      className={`flex min-h-svh flex-col justify-center overflow-x-hidden scroll-mt-16 bg-zinc-50/80 px-6 pt-8 sm:scroll-mt-20 sm:px-7 sm:pt-10 md:px-10 md:pt-12 ${tuckUp ? "-mb-[16svh] -mt-[20svh] pb-0 sm:pb-0 md:pb-0" : "pb-1 sm:pb-2 md:pb-3"}`}
      id={id}
    >
      <div className="mx-auto flex w-full min-w-0 max-w-[1504px] -translate-y-[10%] flex-col pt-0">
        <div className="mb-5 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div className="text-left">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#4b2876] md:text-3xl md:leading-tight">
              {title}
            </h2>
            {subheadline ? (
              <p className="mt-1.5 text-pretty text-sm font-normal leading-relaxed text-ink-muted sm:text-base md:text-lg lg:max-w-none">
                {subheadline}
              </p>
            ) : null}
          </div>
          {carouselHasOverflow ? (
            <div className="flex shrink-0 gap-2.5 self-start md:self-auto">
              <button
                type="button"
                onClick={() => scrollCourses("prev")}
                className="flex h-9 w-9 items-center justify-center border border-zinc-900/10 bg-zinc-900/10 text-zinc-400 transition hover:bg-zinc-900/15 md:h-10 md:w-10"
                aria-label="Khoá học trước"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => scrollCourses("next")}
                className="flex h-9 w-9 items-center justify-center border border-zinc-900/90 bg-zinc-900 text-white transition hover:bg-zinc-800 md:h-10 md:w-10"
                aria-label="Khoá học tiếp"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
              </button>
            </div>
          ) : null}
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto overflow-y-visible scroll-smooth pb-1 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-3.5 [&::-webkit-scrollbar]:hidden"
        >
          {LANDING.courses.map((c) => (
            <Link
              key={c.slug}
              href={`/di-hoc/${c.slug}`}
              id={id ? `course-${c.slug}` : undefined}
              className="flex min-h-[390px] w-[min(100%,320px)] shrink-0 snap-center flex-col overflow-hidden rounded-lg border border-zinc-200/90 bg-white text-ink no-underline shadow-sm ring-1 ring-zinc-950/5 transition hover:shadow-md sm:min-h-[410px] sm:w-[304px] md:min-h-[430px] md:w-[320px]"
            >
              <div className="relative h-[176px] w-full shrink-0 bg-zinc-100 sm:h-[192px] md:h-[216px]">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  className={
                    c.slug === "general-english"
                      ? "object-cover object-[50%_36%]"
                      : c.slug === "pinball-ielts"
                        ? "object-cover object-[50%_42%]"
                        : "object-cover"
                  }
                  sizes="(max-width:640px) 100vw, 320px"
                  priority={id === "khoa-hoc" && c.slug === "general-english"}
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col items-center px-5 pb-5 pt-4 text-center sm:px-6 sm:pb-5 sm:pt-4.5 md:px-7">
                <div className="flex min-h-0 flex-1 items-center justify-center pt-2 pb-4 sm:pt-3 sm:pb-5">
                  <p className="line-clamp-5 text-pretty font-serif text-[15px] font-medium leading-snug text-ink-muted sm:text-base sm:leading-snug">
                    &ldquo;{c.summary}&rdquo;
                  </p>
                </div>
                <p className="w-full border-t border-zinc-200/80 pt-2.5 text-sm font-semibold leading-snug sm:pt-3">
                  {c.priceHint}
                </p>
              </div>
            </Link>
          ))}
          <div className="flex min-h-[390px] w-[min(100%,320px)] shrink-0 snap-center self-stretch sm:min-h-[410px] sm:w-[304px] md:min-h-[430px] md:w-[320px]">
            <Link
              href={LANDING.courseCarouselCta.href}
              className="flex h-full min-h-0 w-full flex-col items-center justify-center gap-2.5 rounded-lg border border-zinc-200 bg-zinc-900 px-6 py-5 text-center text-white shadow-sm ring-1 ring-zinc-950/5 transition hover:bg-zinc-800 sm:px-6 sm:py-6"
            >
              <p className="line-clamp-2 text-base font-semibold leading-tight sm:text-lg md:text-xl">
                {LANDING.courseCarouselCta.title}
              </p>
              <p className="line-clamp-2 text-xs font-normal leading-snug text-white/85 sm:text-sm">
                {LANDING.courseCarouselCta.subtitle}
              </p>
              <span className="inline-flex border border-white/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink transition hover:bg-zinc-100 sm:px-4 sm:py-2 sm:text-sm">
                {LANDING.courseCarouselCta.buttonLabel}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelfStudySection() {
  const selfStudyCards = [
    {
      slug: "general-english" as const,
      href: "/tu-hoc/tu-vung",
      priceHint: "Từ vựng",
      image: "/tuvung%20image.jpg",
      summary:
        "Học từ vựng thực sự hiệu quả và sử dụng được với phương pháp Spaced-repetition và Active learning",
    },
    {
      slug: "coaching" as const,
      href: "/tu-hoc/luyen-doc",
      priceHint: "Luyện đọc",
      image: "/luyen-doc-image-2.jpg",
      summary:
        "Đọc chủ động và đều đặn để tăng khả năng suy nghĩ sâu và tập trung hơn, từ các nguồn đọc đa dạng như IELTS, NatGeo, The Economist hoặc fiction",
    },
    {
      slug: "pinball-ielts" as const,
      href: "/tu-hoc/luyen-nghe",
      priceHint: "Luyện nghe",
      image: "/luyen%20nghe%201.jpg",
      summary: "Bạn có biết nghe cũng phải đúng kỹ thuật và có mục đích thì mới tiến bộ không?",
    },
  ];

  return (
    <section
      id="tu-hoc"
      className="scroll-mt-24 min-h-svh overflow-x-hidden overflow-y-visible bg-zinc-50/80 px-6 pt-5 pb-10 sm:scroll-mt-28 sm:px-7 sm:pt-6 sm:pb-12 md:px-10 md:pt-7 md:pb-14"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col justify-start">
        <div className="mx-auto mb-20 w-full max-w-[760px] text-left sm:mb-22 md:mb-24">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#4b2876] md:text-3xl md:leading-tight">
            {LANDING.selfStudySectionTitle}
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-[760px] items-start gap-y-20 gap-x-8 sm:grid-cols-2 sm:gap-y-22 md:gap-x-8 md:gap-y-24">
          {selfStudyCards.map((course, index) => (
            <Link
              key={course.slug}
              href={course.href}
              className={`group relative flex flex-col self-start overflow-visible text-ink no-underline ${
                index % 2 === 1 ? "md:translate-y-10" : ""
              }`}
            >
              <span
                className="absolute left-1 -top-16 z-0 select-none font-serif text-[3.9rem] font-semibold leading-none text-[#4b2876]/18 md:left-0 md:-top-20 md:text-[4.8rem]"
                aria-hidden
              >
                {index + 1}
              </span>
              <div className="relative z-10 flex flex-col overflow-hidden rounded-lg border border-zinc-200/90 bg-white text-center shadow-sm ring-1 ring-zinc-950/5 transition-all duration-300 ease-out group-hover:shadow-md motion-safe:group-hover:scale-[1.025]">
                <div className="p-5 pb-2 sm:p-6 sm:pb-2">
                  <div className="relative h-[122px] w-full overflow-hidden rounded-lg bg-zinc-100 sm:h-[138px] md:h-[152px]">
                    <Image
                      src={course.image}
                      alt=""
                      fill
                      className={
                        course.slug === "general-english"
                          ? "object-cover object-[50%_36%]"
                          : course.slug === "coaching"
                            ? "object-cover object-[50%_28%]"
                            : "object-cover object-center"
                      }
                      sizes="(max-width:640px) 100vw, 280px"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center px-6 pb-6 pt-1 sm:px-7 sm:pb-7">
                  <p className="mt-2 text-sm font-semibold leading-snug text-ink sm:text-base sm:leading-snug">
                    {course.priceHint}
                  </p>
                  <p className="mt-3 text-pretty font-serif text-sm font-medium leading-snug text-ink-muted sm:text-[15px] sm:leading-snug">
                    {course.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
