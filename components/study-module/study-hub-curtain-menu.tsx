"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { StudyHubAccountMenuSections } from "@/components/study-module/study-hub-account-menu-sections";
import { StudyHubListeningMenuNav } from "@/components/study-module/study-hub-listening-menu-nav";
import { StudyHubReadingMenuNav } from "@/components/study-module/study-hub-reading-menu-nav";
import { StudyHubVocabularyMenuNav } from "@/components/study-module/study-hub-vocabulary-menu-nav";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

export function StudyHubCurtainMenu({
  open,
  onClose,
  pageTitle,
  showReadingNav = false,
  showListeningNav = false,
  showVocabularyNav = false,
  isLoggedIn,
  userProfile,
  supabaseConfigured,
  signInNext,
}: {
  open: boolean;
  onClose: () => void;
  pageTitle: string;
  showReadingNav?: boolean;
  showListeningNav?: boolean;
  showVocabularyNav?: boolean;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
  signInNext?: string;
}) {
  const [present, setPresent] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const returnToPath = pathname;

  useLayoutEffect(() => {
    if (open) {
      setPresent(true);
      setVisible(false);
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(id);
    }
    setVisible(false);
  }, [open]);

  useEffect(() => {
    if (open || !present) return;
    const t = window.setTimeout(() => setPresent(false), 400);
    return () => window.clearTimeout(t);
  }, [open, present]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !present) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, present, onClose]);

  const handlePanelTransitionEnd = (e: React.TransitionEvent<HTMLElement>) => {
    if (e.propertyName !== "transform") return;
    if (!visible) setPresent(false);
  };

  if (!present) return null;

  const dialog = (
    <div className="fixed inset-0 z-[9999]" role="presentation">
      <button
        type="button"
        className={`absolute inset-0 bg-zinc-900/25 transition-opacity duration-300 motion-reduce:transition-none ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Đóng menu"
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 flex h-[100dvh] w-[min(100vw-2.5rem,20rem)] flex-col border-l border-[#E4E4E7] bg-[#f5f5f7] shadow-[-8px_0_32px_rgb(0_0_0/0.08)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none supports-[height:100svh]:h-[100svh] sm:w-80 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
        onTransitionEnd={handlePanelTransitionEnd}
        aria-label={`Menu ${pageTitle}`}
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-5 pt-[max(1.25rem,env(safe-area-inset-top,0px))] [-webkit-overflow-scrolling:touch]">
          {showReadingNav ? (
            <div className="mb-5">
              <StudyHubReadingMenuNav onNavigate={onClose} />
            </div>
          ) : showListeningNav ? (
            <div className="mb-5">
              <StudyHubListeningMenuNav onNavigate={onClose} />
            </div>
          ) : showVocabularyNav ? (
            <div className="mb-5">
              <StudyHubVocabularyMenuNav onNavigate={onClose} />
            </div>
          ) : null}

          {/* Premium + tài khoản */}
          <StudyHubAccountMenuSections
            isLoggedIn={isLoggedIn}
            userProfile={userProfile}
            supabaseConfigured={supabaseConfigured}
            signInNext={signInNext}
            returnToPath={returnToPath}
            onNavigate={onClose}
          />
        </div>
      </aside>
    </div>
  );

  return createPortal(dialog, document.body);
}
