import { ArrowRight } from "lucide-react";
import { PinballCurriculumAccordion } from "@/components/courses/pinball-curriculum-accordion";
import { PinballTuitionAccordion } from "@/components/courses/pinball-tuition-accordion";
import { LANDING } from "@/lib/landing-content";
import {
  PINBALL_NOTES_INTRO_HTML,
  PINBALL_NOTES_SECTIONS,
} from "@/lib/pinball-notes-content";
import { courseHeroBannerFromLanding } from "@/lib/course-stitch-hero";
import {
  PINBALL_ENTRANCE_OPTIONS,
  PINBALL_LINKS,
  PINBALL_OVERVIEW,
  PINBALL_TEACHER_IMAGE,
  PINBALL_TEACHER_SCORES,
} from "@/lib/pinball-ielts-stitch-data";

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

export function PinballIeltsStitchContent() {
  const registerHref = LANDING.contactFacebook;
  const heroBanner = courseHeroBannerFromLanding("pinball-ielts");

  return (
    <main className="pinball-stitch-root mx-auto flex max-w-[1000px] flex-col gap-[50px] py-11 antialiased">
      <header className="pinball-stitch-hero">
        <div className="pinball-stitch-hero-banner">
          {/* eslint-disable-next-line @next/next/no-img-element -- ảnh public */}
          <img
            className="pinball-stitch-hero-banner__img"
            src={heroBanner.bannerImage}
            alt=""
            style={
              heroBanner.bannerObjectPosition
                ? { objectPosition: heroBanner.bannerObjectPosition }
                : undefined
            }
            decoding="async"
            loading="eager"
          />
          <div className="pinball-stitch-hero-banner__scrim" aria-hidden />
          <div className="pinball-stitch-hero-banner__content">
            <h1 className="pinball-stitch-hero__title">Pinball IELTS 2.0 (4.5+ - 6.0+)</h1>
            <p className="pinball-stitch-hero__subtitle">
              A scholarly journey designed for academic discipline and linguistic mastery
            </p>
          </div>
        </div>
      </header>

      <section className="pinball-stitch-section" id="overview">
        <h2 className="pinball-stitch-section-title">Tổng quan khoá học</h2>
        <div className="pinball-stitch-overview">
          <div className="pinball-stitch-overview__grid">
            {PINBALL_OVERVIEW.map((item) => (
              <div key={item.icon} className="pinball-stitch-overview-card">
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
            <span>Ngày và giờ học dự kiến: Lớp tháng 4/2026 đã khai giảng</span>
          </div>
        </div>
      </section>

      <section className="pinball-stitch-section" id="curriculum">
        <h2 className="pinball-stitch-section-title">Nội dung khoá học</h2>
        <div className="pinball-stitch-curriculum">
          <PinballCurriculumAccordion />
        </div>
      </section>

      <section className="pinball-stitch-section pinball-stitch-entrance" id="entrance-test">
        <h2 className="pinball-stitch-entrance__title">
          <MIcon name="quiz" className="ps-accent" />
          Kiểm tra đầu vào
        </h2>
        <div className="pinball-stitch-entrance__text">
          <p>Nếu bạn đã từng thi IELTS thì chỉ cần gửi điểm gần nhất (trong vòng 1 năm).</p>
          <p>
            Nếu chưa, bạn vui lòng làm bài test bên dưới và dò đáp án. Yêu cầu đầu vào sẽ cần &gt;= 20
            câu đúng.
          </p>
        </div>
        <div className="pinball-stitch-entrance__options">
          {PINBALL_ENTRANCE_OPTIONS.map((option) => (
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

      <section className="pinball-stitch-section" id="tuition">
        <h2 className="pinball-stitch-section-title">Quyền lợi và Học phí</h2>
        <div className="pinball-stitch-tuition-layout grid grid-cols-1 items-start gap-7 md:grid-cols-12">
          <div className="md:col-span-7">
            <PinballTuitionAccordion />
          </div>
          <div className="pinball-stitch-pricing-col md:col-span-5">
            <div className="pinball-stitch-pricing-card">
              <p className="pinball-stitch-pricing-amount">
                8.400.000đ <span>/ khoá</span>
              </p>
              <p className="pinball-stitch-pricing-note">
                Bạn có thể thanh toán học phí theo từng tháng (2.100.000đ/tháng) hoặc từng khoá.
              </p>
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

      <section className="pinball-stitch-section" id="notes">
        <h2 className="pinball-stitch-section-title">Lưu ý quan trọng</h2>
        <div className="pinball-stitch-notes-card bento-card">
          <p
            className="pinball-stitch-notes-intro"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: HTML từ Notion gốc
            dangerouslySetInnerHTML={{ __html: PINBALL_NOTES_INTRO_HTML }}
          />
          <div className="pinball-stitch-notes-grid">
            {PINBALL_NOTES_SECTIONS.map((section) => (
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

      <section className="pinball-stitch-section pinball-stitch-section--last" id="teacher">
        <h2 className="pinball-stitch-section-title">Profile giáo viên</h2>
        <div className="pinball-stitch-teacher-layout">
          <div className="pinball-stitch-teacher-photo">
            <img
              alt="Ân"
              className="pinball-stitch-teacher-photo__img"
              src={PINBALL_TEACHER_IMAGE}
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="pinball-stitch-teacher-content">
            <h3 className="pinball-stitch-teacher-greeting">Chào bạn, mình là Ân.</h3>
            <div className="pinball-stitch-teacher-scores">
              {PINBALL_TEACHER_SCORES.map((score) => (
                <span key={score} className="pinball-stitch-teacher-score">
                  {score}
                </span>
              ))}
            </div>
            <div className="pinball-stitch-teacher-body pinball-stitch-teacher-body--intro">
              <p>
                Background của mình là sinh viên ngành ngôn ngữ Anh. Sau khi tốt nghiệp, mình đã làm
                nhiều thứ, để rồi cuối cùng quay trở về làm một giáo viên tiếng Anh. Và đây là một
                trong những điều mình cảm thấy thực sự muốn và nên làm.
              </p>
              <p>
                Mình quan niệm: Khi bạn học vì ngôn ngữ, ngôn ngữ sẽ ở lại với bạn.
              </p>
              <p>
                Mình mong rằng thông qua các khoá học với mình, bạn cũng sẽ cảm thấy IELTS hay tiếng
                Anh cũng chỉ là những điều rất đỗi bình thường.
              </p>
            </div>
            <ul className="pinball-stitch-teacher-links">
              <li>
                <a
                  className="pinball-stitch-teacher-link"
                  href={PINBALL_LINKS.certificates}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined pinball-stitch-teacher-link__icon" aria-hidden>
                    school
                  </span>
                  <span className="pinball-stitch-teacher-link__label">
                    Thông tin về chứng chỉ của mình
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="pinball-stitch-teacher-link"
                  href={PINBALL_LINKS.feedback}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined pinball-stitch-teacher-link__icon" aria-hidden>
                    newspaper
                  </span>
                  <span className="pinball-stitch-teacher-link__label">
                    Một số feedback của học viên mình
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
