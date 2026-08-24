"use client";

import { X } from "lucide-react";
import {
  WRITING_STUDENT_ONLY_DESCRIPTION,
  WRITING_STUDENT_ONLY_TITLE,
} from "@/lib/writing/writing-sample-access";

export function WritingStudentOnlyPrompt({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="writing-student-only-title"
    >
      <div className="relative w-full max-w-md rounded-xl border border-[#E4E4E7] bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-[#47464b] hover:bg-[#f3f0f8]"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 id="writing-student-only-title" className="pr-8 font-serif text-xl font-semibold text-[#000001]">
          {WRITING_STUDENT_ONLY_TITLE}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#47464b]">{WRITING_STUDENT_ONLY_DESCRIPTION}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#000001] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          Đã hiểu
        </button>
      </div>
    </div>
  );
}
