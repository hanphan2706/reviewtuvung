"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { resolveTuitionDefaultOpenId } from "@/lib/course-stitch-accordion";
import type { CourseTuitionPanel } from "@/lib/course-stitch-types";
import { withExternalLinkTargets } from "@/lib/external-link-html";

export function CourseTuitionAccordion({
  panels,
  defaultOpenId,
}: {
  panels: readonly CourseTuitionPanel[];
  defaultOpenId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(() =>
    resolveTuitionDefaultOpenId(panels, defaultOpenId),
  );

  return (
    <div className="divide-y divide-zinc-200/90">
      {panels.map((panel) => {
        const isOpen = openId === panel.id;
        const panelDomId = `course-tuition-panel-${panel.id}`;

        return (
          <div key={panel.id}>
            <button
              type="button"
              className="pinball-stitch-tuition-accordion__trigger flex w-full cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left font-semibold"
              aria-expanded={isOpen}
              aria-controls={panelDomId}
              onClick={() => setOpenId(isOpen ? null : panel.id)}
            >
              <span className="block">{panel.title}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out${isOpen ? " rotate-180" : ""}`}
                strokeWidth={1.8}
                aria-hidden
              />
            </button>
            <div
              id={panelDomId}
              className={`pinball-stitch-tuition-accordion__panel grid transition-all duration-300 ease-out${
                isOpen ? " grid-rows-[1fr] opacity-100" : " grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pb-5 pt-0.5">
                  <div
                    className="pinball-stitch-tuition-accordion__body course-page"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: HTML con từ Notion gốc
                    dangerouslySetInnerHTML={{ __html: withExternalLinkTargets(panel.bodyHtml) }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
