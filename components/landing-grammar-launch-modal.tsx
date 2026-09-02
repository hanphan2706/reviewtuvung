"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const GENERAL_ENGLISH_COURSE_HREF = "/di-hoc/general-english";

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
      aria-labelledby="general-english-launch-modal-title"
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
            src="/course%206.jpg"
            alt="General English"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 36rem, 42rem"
            priority
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-[-0.01em] text-[#4b2876]">
              Đi học
            </p>
            <h2
              id="general-english-launch-modal-title"
              className="pr-14 text-[1.75rem] font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-[1.9rem] md:text-[2rem]"
            >
              General English đang tuyển sinh!
            </h2>
          </div>

          <ul className="space-y-2.5 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
            <li>
              🗣 Phù hợp nếu bạn muốn giỏi tiếng Anh để giao tiếp trong công việc và đời sống hằng ngày — không cần thi chứng chỉ.
            </li>
            <li>
              📚 Lộ trình A0–C1, lớp nhỏ tối đa 4 học viên, học online qua Google Meet.
            </li>
            <li>
              📝 Có mid-term & final test; nộp bài qua Google Classroom.
            </li>
            <li>
              🧰 Công cụ ôn luyện miễn phí trong mục Tự học trên webapp.
            </li>
          </ul>

          <div className="flex justify-center">
            <Link
              href={GENERAL_ENGLISH_COURSE_HREF}
              onClick={onExplore}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              Xem General English
            </Link>
          </div>
        </div>
      </div>
    </dialog>
  );
}
