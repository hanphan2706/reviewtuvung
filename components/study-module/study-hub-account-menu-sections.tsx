"use client";

import { LogOut, Sparkles, User } from "lucide-react";
import { AuthButton } from "@/components/auth-button";
import { ProfilePageLink } from "@/components/profile/profile-page-link";
import { StudyHubUserAvatar } from "@/components/study-module/study-hub-user-avatar";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

export function StudyHubAccountMenuSections({
  isLoggedIn,
  userProfile,
  supabaseConfigured,
  signInNext,
  returnToPath,
  onNavigate,
  compact = false,
}: {
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
  signInNext?: string;
  returnToPath: string;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const premiumClass = compact
    ? "rounded-xl border border-[#E4E4E7] bg-white p-3.5 shadow-sm"
    : "rounded-xl border border-[#E4E4E7] bg-white p-4 shadow-sm";

  return (
    <>
      <section className={premiumClass}>
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
          className="mt-4 w-full rounded-lg bg-[#000001] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-black/90"
        >
          Nâng cấp ngay
        </button>
      </section>

      <nav className={`${compact ? "mt-4" : "mt-6"} space-y-1`} aria-label="Tài khoản">
        {isLoggedIn ? (
          <>
            <ProfilePageLink
              returnTo={returnToPath}
              onClick={onNavigate}
              className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 transition"
            >
              <StudyHubUserAvatar profile={userProfile ?? null} />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">
                {userProfile?.displayName ?? "Tài khoản"}
              </span>
            </ProfilePageLink>
            <div className="flex w-full cursor-pointer items-center gap-3 px-2 py-2.5">
              <LogOut className="size-5 shrink-0 text-red-600" aria-hidden />
              <AuthButton
                mode="sign-out"
                menuRow
                signOutLabel="Đăng xuất"
                className="cursor-pointer text-sm font-medium text-red-600"
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
    </>
  );
}
