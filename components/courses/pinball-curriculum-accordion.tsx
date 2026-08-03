"use client";

import { ChevronDown } from "lucide-react";
import { CourseStitchIcon } from "@/components/courses/course-stitch-icon";
import { useState } from "react";
import { PINBALL_CURRICULUM } from "@/lib/pinball-ielts-stitch-data";

type CurriculumBullet = (typeof PINBALL_CURRICULUM)[number]["bullets"][number];

/** In đậm trước phần đuôi (Writing) hoặc prefix → strong → suffix (Speaking). */
function CurriculumBulletContent({ bullet }: { bullet: CurriculumBullet }) {
  if ("segments" in bullet && bullet.segments) {
    return (
      <>
        {bullet.segments.map((part, partIndex) => {
          const strong = "strong" in part ? part.strong : undefined;
          const text = "text" in part ? part.text : undefined;
          const key = strong ? `strong:${partIndex}:${strong}` : `text:${partIndex}:${text ?? ""}`;
          return strong ? <strong key={key}>{strong}</strong> : <span key={key}>{text}</span>;
        })}
      </>
    );
  }

  const prefix = "text" in bullet && bullet.text ? bullet.text : "";
  const strong = "strong" in bullet && bullet.strong ? bullet.strong : "";
  const suffix = "suffix" in bullet && bullet.suffix ? bullet.suffix : "";

  if (strong && suffix && !prefix) {
    return (
      <>
        <strong>{strong}</strong>
        {suffix}
      </>
    );
  }

  if (strong && prefix && !suffix) {
    const tail = prefix.trimStart();
    if (tail.startsWith("chứ") || tail.startsWith("với")) {
      return (
        <>
          <strong>{strong}</strong>
          {prefix}
        </>
      );
    }
  }

  if (strong && !prefix && !suffix) {
    return <strong>{strong}</strong>;
  }

  return (
    <>
      {prefix || null}
      {strong ? <strong>{strong}</strong> : null}
      {suffix || null}
    </>
  );
}

export function PinballCurriculumAccordion() {
  const [openId, setOpenId] = useState("acc-grammar");

  return (
    <div className="pinball-stitch-accordion">
      {PINBALL_CURRICULUM.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`pinball-stitch-accordion__item${isOpen ? " is-open" : ""}`}
          >
            <button
              type="button"
              className="pinball-stitch-accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? "" : item.id)}
            >
              <CourseStitchIcon name={item.icon} className="pinball-stitch-accordion__icon" />
              <span className="pinball-stitch-accordion__title">{item.title}</span>
              <ChevronDown
                className={`pinball-stitch-accordion__chevron${isOpen ? " is-open" : ""}`}
                strokeWidth={1.8}
                aria-hidden
              />
            </button>
            <div className={`pinball-stitch-accordion__panel${isOpen ? " is-open" : ""}`}>
              <div className="pinball-stitch-accordion__panel-inner">
                <ul className="pinball-stitch-accordion__list">
                  {item.bullets.map((bullet, bulletIndex) => {
                    const key =
                      "segments" in bullet && bullet.segments
                        ? `${item.id}-seg-${bulletIndex}`
                        : `${"text" in bullet ? bullet.text : ""}|${"strong" in bullet ? bullet.strong : ""}|${"suffix" in bullet ? bullet.suffix : ""}`;
                    return (
                      <li key={key}>
                        <CurriculumBulletContent bullet={bullet} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
