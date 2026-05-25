"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CircleHelp, LogOut, Settings, Sparkles, User } from "lucide-react";
import { AuthButton } from "@/components/auth-button";
import { StudyHubUserAvatar } from "@/components/study-module/study-hub-user-avatar";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

export function StudyHubCurtainMenu({
  open,
  onClose,
  pageTitle,
  isLoggedIn,
  userProfile,
  supabaseConfigured,
  signInNext,
}: {
  open: boolean;
  onClose: () => void;
  pageTitle: string;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
  signInNext?: string;
}) {
  const [present, setPresent] = useState(false);
  const [visible, setVisible] = useState(false);

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
          {/* Premium */}
          <section className="rounded-xl border border-[#E4E4E7] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-[#4b2876]/10 text-[#4b2876]">
                <Sparkles className="size-4" aria-hidden />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#4b2876]">Premium</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#47464b]">
              Mở khóa thư viện đầy đủ và luyện tập cá nhân hoá khi sẵn sàng.
            </p>
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-[#1c1b1c] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-black/90"
            >
              Nâng cấp ngay
            </button>
          </section>

          <nav className="mt-6 space-y-1" aria-label="Tài khoản và hỗ trợ">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center gap-3 px-2 py-2.5 text-left text-sm font-medium text-ink"
            >
              <CircleHelp className="size-5 shrink-0 text-[#47464b]" aria-hidden />
              Trợ giúp
            </button>

            {isLoggedIn ? (
              <>
                <div className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5">
                  <StudyHubUserAvatar profile={userProfile ?? null} />
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">
                    {userProfile?.displayName ?? "Tài khoản"}
                  </span>
                  <Settings className="size-5 shrink-0 text-[#47464b]" aria-hidden />
                </div>
                <div className="flex w-full cursor-pointer items-center gap-3 px-2 py-2.5">
                  <LogOut className="size-5 shrink-0 text-red-600" aria-hidden />
                  <AuthButton
                    mode="sign-out"
                    menuRow
                    signOutLabel="Đăng xuất"
                    className="text-sm font-medium text-red-600"
                  />
                </div>
              </>
            ) : (
              <div className="flex w-full cursor-pointer items-center gap-3 px-2 py-2.5">
                <User className="size-5 shrink-0 text-[#47464b]" aria-hidden />
                <AuthButton
                  mode="sign-in"
                  menuRow
                  disabled={!supabaseConfigured}
                  next={signInNext}
                  signInLabel="Đăng nhập"
                  className="text-sm font-medium text-ink"
                />
              </div>
            )}
          </nav>
        </div>
      </aside>
    </div>
  );

  return createPortal(dialog, document.body);
}
