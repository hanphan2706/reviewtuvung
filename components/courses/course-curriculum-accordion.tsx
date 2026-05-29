"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { CourseCurriculumBullet, CourseCurriculumItem } from "@/lib/course-stitch-types";

function CurriculumBulletContent({ bullet }: { bullet: CourseCurriculumBullet }) {
  const prefix = bullet.text ?? "";
  const strong = bullet.strong ?? "";
  const suffix = bullet.suffix ?? "";

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

export function CourseCurriculumAccordion({
  items,
  defaultOpenId,
}: {
  items: readonly CourseCurriculumItem[];
  defaultOpenId?: string;
}) {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id ?? "");

  return (
    <div className="pinball-stitch-accordion">
      {items.map((item) => {
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
              <span className="material-symbols-outlined pinball-stitch-accordion__icon" aria-hidden>
                {item.icon}
              </span>
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
                  {item.bullets.map((bullet) => {
                    const key = `${bullet.text ?? ""}|${bullet.strong ?? ""}|${bullet.suffix ?? ""}`;
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
