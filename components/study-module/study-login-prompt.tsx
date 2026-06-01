"use client";

import { X } from "lucide-react";
import { AuthButton } from "@/components/auth-button";

export function StudyLoginPrompt({
  title,
  description,
  oauthNext,
  supabaseConfigured,
  onClose,
}: {
  title: string;
  description: string;
  oauthNext: string;
  supabaseConfigured: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="study-login-title"
    >
      <div className="relative w-full max-w-md rounded-xl border border-[#E4E4E7] bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-[#47464b] hover:bg-[#f7f3f2]"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 id="study-login-title" className="pr-8 font-serif text-xl font-semibold text-[#000001]">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#47464b]">{description}</p>
        <div className="mt-6">
          <AuthButton
            mode="sign-in"
            disabled={!supabaseConfigured}
            next={oauthNext}
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#4b2876] px-4 py-3 text-sm font-semibold text-white shadow-sm disabled:opacity-45"
          />
        </div>
        {!supabaseConfigured ? (
          <p className="mt-3 text-xs text-red-600">Supabase chưa được cấu hình — không thể đăng nhập.</p>
        ) : null}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full text-center text-sm font-medium text-[#47464b] hover:text-[#000001]"
        >
          Để sau
        </button>
      </div>
    </div>
  );
}
