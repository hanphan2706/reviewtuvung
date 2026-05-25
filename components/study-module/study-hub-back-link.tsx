"use client";

import { ArrowLeft } from "lucide-react";
import { LandingSectionLink } from "@/components/landing-section-link";
import { studyHubHeaderTextClass } from "@/components/study-module/study-hub-shell";

const backClass = `${studyHubHeaderTextClass} inline-flex shrink-0 items-center gap-1 text-ink-muted transition hover:text-ink`;

/** Quay về mục Tự học trên trang chủ — luôn nằm trong thanh header (không absolute). */
export function StudyHubBackLink({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <LandingSectionLink sectionId="tu-hoc" className={backClass} onNavigate={onNavigate}>
      <ArrowLeft className="size-4 shrink-0" strokeWidth={2} aria-hidden />
      <span className="hidden sm:inline">Tự học</span>
      <span className="sr-only sm:hidden">Tự học</span>
    </LandingSectionLink>
  );
}
