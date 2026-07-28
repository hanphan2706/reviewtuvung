"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { GRAMMAR_HUB_HREF } from "@/lib/grammar/grammar-hub-nav";

type LandingGrammarLaunchModalProps = {
  open: boolean;
  onClose: () => void;
  onExplore: () => void;
};

export function LandingGrammarLaunchModal({
  open,
  onClose,
  onExplore,
}: LandingGrammarLaunchModalProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <dialog
      open
      aria-labelledby="grammar-launch-modal-title"
      className="fixed inset-0 z-70 m-0 flex h-dvh max-h-dvh w-screen max-w-none items-center justify-center border-0 bg-zinc-950/50 px-5 py-6 text-left sm:px-6"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 z-0"
        aria-label="Đóng thông báo"
      />
      <div className="relative z-10 w-full max-w-xl rounded-[28px] border border-zinc-200/90 bg-white px-6 pb-5 pt-6 text-left shadow-[0_20px_80px_rgb(15_23_42/0.24)] sm:px-7 sm:pb-6 sm:pt-7 md:max-w-2xl">
        <div className="relative mb-4 h-44 w-full overflow-hidden rounded-3xl bg-zinc-100 sm:h-52">
          <Image
            src="/ngu%20phap%202.jpg"
            alt="Ngữ pháp trên anthichtuhoc"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 36rem, 42rem"
            priority
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-[-0.01em] text-[#4b2876]">
              Tự học
            </p>
            <h2
              id="grammar-launch-modal-title"
              className="pr-14 text-[1.75rem] font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-[1.9rem] md:text-[2rem]"
            >
              Tính năng ngữ pháp đã ra mắt!
            </h2>
          </div>

          <ul className="space-y-2.5 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
            <li>
              📘 Bám English Grammar in Use — lý thuyết ngắn, ví dụ rõ, luyện tập ngay trên web.
            </li>
            <li>
              🧭 Học theo lộ trình Easy → Medium → Hard, hoặc nhảy thẳng vào chủ điểm còn yếu.
            </li>
            <li>
              ✅ Bài tập đa dạng: điền từ, chọn đáp án, viết lại câu — có đáp án và giải thích.
            </li>
            <li>
              📈 Theo dõi tiến độ trên tài khoản đăng nhập, biết mình đang vững ở đâu và còn thiếu gì.
            </li>
          </ul>

          <div className="flex justify-center">
            <Link
              href={GRAMMAR_HUB_HREF}
              onClick={onExplore}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              Khám phá ngay
            </Link>
          </div>
        </div>
      </div>
    </dialog>
  );
}
