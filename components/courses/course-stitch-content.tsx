import { ArrowRight } from "lucide-react";
import { CourseCurriculumAccordion } from "@/components/courses/course-curriculum-accordion";
import { CourseTuitionAccordion } from "@/components/courses/course-tuition-accordion";
import { LANDING } from "@/lib/landing-content";
import type { CourseStitchConfig } from "@/lib/course-stitch-types";

function MIcon({
  name,
  size = "md",
  className = "",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClass =
    size === "lg" ? "ps-icon-lg" : size === "sm" ? "ps-icon-sm" : "";
  return (
    <span
      className={`material-symbols-outlined ${sizeClass} ${className}`.trim()}
      aria-hidden
    >
      {name}
    </span>
  );
}

export function CourseStitchContent({ config }: { config: CourseStitchConfig }) {
  const registerHref = LANDING.contactFacebook;

  return (
    <main className="pinball-stitch-root mx-auto flex max-w-[1000px] flex-col gap-[50px] py-11 antialiased">
      <header className="pinball-stitch-hero">
        <div className="pinball-stitch-hero-banner">
          {/* eslint-disable-next-line @next/next/no-img-element -- ảnh public */}
          <img
            className="pinball-stitch-hero-banner__img"
            src={config.hero.bannerImage}
            alt=""
            width={750}
            height={1777}
            decoding="async"
            loading="eager"
          />
          <div className="pinball-stitch-hero-banner__scrim" aria-hidden />
          <div className="pinball-stitch-hero-banner__content">
            <h1 className="pinball-stitch-hero__title">{config.hero.title}</h1>
            <p className="pinball-stitch-hero__subtitle">{config.hero.subtitle}</p>
          </div>
        </div>
      </header>

      <section className="pinball-stitch-section" id="overview">
        <h2 className="pinball-stitch-section-title">Tổng quan khoá học</h2>
        <div className="pinball-stitch-overview">
          <div className="pinball-stitch-overview__grid">
            {config.overview.map((item) => (
              <div key={item.icon + item.label} className="pinball-stitch-overview-card">
                <MIcon name={item.icon} />
                <div className="pinball-stitch-overview-card__text">
                  <p className="pinball-stitch-overview-card__label">{item.label}</p>
                  <p className="pinball-stitch-overview-card__value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pinball-stitch-pill pinball-stitch-schedule">
            <MIcon name="calendar_month" />
            <span>{config.schedulePill}</span>
          </div>
        </div>
      </section>

      {config.curriculum ? (
        <section className="pinball-stitch-section" id="curriculum">
          <h2 className="pinball-stitch-section-title">Nội dung khoá học</h2>
          <div className="pinball-stitch-curriculum">
            {config.curriculum.intro ? (
              <p className="pinball-stitch-curriculum-intro">{config.curriculum.intro}</p>
            ) : null}
            <CourseCurriculumAccordion
              items={config.curriculum.items}
              defaultOpenId={config.curriculum.defaultOpenId}
            />
          </div>
        </section>
      ) : null}

      {config.entrance ? (
        <section className="pinball-stitch-section pinball-stitch-entrance" id="entrance-test">
          <h2 className="pinball-stitch-entrance__title">
            <MIcon name="quiz" className="ps-accent" />
            Kiểm tra đầu vào
          </h2>
          <div className="pinball-stitch-entrance__text">
            {config.entrance.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="pinball-stitch-entrance__options">
            {config.entrance.options.map((option) => (
              <a
                key={option.label}
                className="pinball-stitch-entrance-option"
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined pinball-stitch-entrance-option__icon" aria-hidden>
                  {option.icon}
                </span>
                <span className="pinball-stitch-entrance-option__label">{option.label}</span>
                <ArrowRight className="pinball-stitch-entrance-option__arrow" strokeWidth={1.75} aria-hidden />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="pinball-stitch-section" id="tuition">
        <h2 className="pinball-stitch-section-title">Quyền lợi và Học phí</h2>
        <div className="pinball-stitch-tuition-layout grid grid-cols-1 items-start gap-7 md:grid-cols-12">
          <div className="md:col-span-7">
            <CourseTuitionAccordion panels={config.tuitionPanels} />
          </div>
          <div className="pinball-stitch-pricing-col md:col-span-5">
            <div className="pinball-stitch-pricing-card">
              <p className="pinball-stitch-pricing-amount">
                {config.pricing.amount}
                {config.pricing.amountSuffix ? <span> {config.pricing.amountSuffix}</span> : null}
              </p>
              {config.pricing.note ? (
                <p className="pinball-stitch-pricing-note">{config.pricing.note}</p>
              ) : null}
              <a
                className="pinball-stitch-pricing-cta"
                href={registerHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {config.notes ? (
        <section className="pinball-stitch-section" id="notes">
          <h2 className="pinball-stitch-section-title">Lưu ý quan trọng</h2>
          <div className="pinball-stitch-notes-card bento-card">
            <p
              className="pinball-stitch-notes-intro"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: HTML từ Notion gốc
              dangerouslySetInnerHTML={{ __html: config.notes.introHtml }}
            />
            <div className="pinball-stitch-notes-grid">
              {config.notes.sections.map((section) => (
                <div key={section.id} className="pinball-stitch-notes-section">
                  <p className="pinball-stitch-notes-section-title">{section.title}</p>
                  <div
                    className="pinball-stitch-notes-section-body"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: HTML từ Notion gốc
                    dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pinball-stitch-section pinball-stitch-section--last" id="teacher">
        <h2 className="pinball-stitch-section-title">Profile giáo viên</h2>
        <div className="pinball-stitch-teacher-layout">
          <div className="pinball-stitch-teacher-photo">
            <img
              alt="Ân"
              className="pinball-stitch-teacher-photo__img"
              src={config.teacher.image}
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="pinball-stitch-teacher-content">
            <h3 className="pinball-stitch-teacher-greeting">{config.teacher.greeting}</h3>
            <div className="pinball-stitch-teacher-scores">
              {config.teacher.scores.map((score) => (
                <span key={score} className="pinball-stitch-teacher-score">
                  {score}
                </span>
              ))}
            </div>
            <div className="pinball-stitch-teacher-body pinball-stitch-teacher-body--intro">
              {config.teacher.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="pinball-stitch-teacher-links">
              {config.teacher.links.map((link) => (
                <li key={link.href}>
                  <a
                    className="pinball-stitch-teacher-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined pinball-stitch-teacher-link__icon" aria-hidden>
                      {link.icon}
                    </span>
                    <span className="pinball-stitch-teacher-link__label">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
