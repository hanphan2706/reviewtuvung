"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { StudyHubAccountMenuSections } from "@/components/study-module/study-hub-account-menu-sections";
import { StudyHubHamburgerButton } from "@/components/study-module/study-hub-hamburger-button";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";
import { profilePageHref } from "@/lib/profile/profile-return-path";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type Anchor = { top: number; right: number };

export function StudyHubPopoverMenu({
  signInNext,
}: {
  signInNext?: string;
}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [anchor, setAnchor] = useState<Anchor | null>(null);
  const [userProfile, setUserProfile] = useState<StudyHubUserProfile | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const returnToPath = pathname;
  const supabaseConfigured = Boolean(createBrowserSupabaseClient());
  const resolvedSignInNext = signInNext ?? profilePageHref();

  const close = () => setOpen(false);

  const updateAnchor = () => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setAnchor({
      top: rect.bottom + 6,
      right: Math.max(12, window.innerWidth - rect.right),
    });
  };

  useLayoutEffect(() => {
    if (open) {
      updateAnchor();
      setVisible(false);
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(id);
    }
    setVisible(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onResize = () => updateAnchor();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    if (!supabase) return;
    void supabase.auth.getUser().then(({ data: { user } }) => {
      setUserProfile(studyHubUserProfileFromAuthUser(user));
    });
  }, []);

  const panel =
    open && anchor ? (
      <>
        <button
          type="button"
          className="fixed inset-0 z-[9998] cursor-default"
          aria-label="Đóng menu"
          onClick={close}
        />

        <div
          className={`fixed z-[9999] w-[min(calc(100vw-1.5rem),18rem)] origin-top-right overflow-hidden rounded-xl border border-[#E4E4E7] bg-[#f5f5f7] p-3.5 shadow-[0_12px_40px_rgb(0_0_0/0.12)] transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            visible ? "scale-100 opacity-100" : "pointer-events-none scale-[0.92] opacity-0"
          }`}
          style={{ top: anchor.top, right: anchor.right }}
          role="dialog"
          aria-label="Menu tài khoản"
        >
          <StudyHubAccountMenuSections
            compact
            isLoggedIn
            userProfile={userProfile}
            supabaseConfigured={supabaseConfigured}
            signInNext={resolvedSignInNext}
            returnToPath={returnToPath}
            onNavigate={close}
          />
        </div>
      </>
    ) : null;

  return (
    <>
      <div ref={buttonRef} className="relative shrink-0">
        <StudyHubHamburgerButton
          open={open}
          onClick={() => setOpen((v) => !v)}
          matchNavLink
        />
      </div>
      {panel ? createPortal(panel, document.body) : null}
    </>
  );
}
