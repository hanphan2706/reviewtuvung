"use client";

import { ClipboardCheck, Headphones } from "lucide-react";

type ListeningIeltsModePickerProps = {
  onSelectExam: () => void;
  onSelectComprehension: () => void;
};

export function ListeningIeltsModePicker({
  onSelectExam,
  onSelectComprehension,
}: ListeningIeltsModePickerProps) {
  return (
    <section className="rounded-lg border border-[#E4E4E7] bg-white p-6 shadow-sm md:p-8">
      <h2 className="font-serif text-xl font-semibold text-[#000001] md:text-2xl">
        Bạn muốn luyện theo cách nào?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#47464b] md:text-base">
        Chọn một hướng để bắt đầu.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={onSelectExam}
          className="flex h-full cursor-pointer flex-col rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] p-5 text-left transition hover:border-[#4B2876]/35 hover:shadow-md md:p-6"
        >
          <ClipboardCheck className="mb-4 size-6 text-[#4B2876]" aria-hidden />
          <span className="font-serif text-lg font-semibold text-[#000001]">
            Luyện đề IELTS như giao diện thi thật
          </span>
          <span className="mt-2 text-sm leading-relaxed text-[#47464b]">
            Làm bài theo đúng format đề thi.
          </span>
        </button>
        <button
          type="button"
          onClick={onSelectComprehension}
          className="flex h-full cursor-pointer flex-col rounded-lg border border-[#E4E4E7] bg-white p-5 text-left transition hover:border-[#4B2876]/35 hover:shadow-md md:p-6"
        >
          <Headphones className="mb-4 size-6 text-[#4B2876]" aria-hidden />
          <span className="font-serif text-lg font-semibold text-[#000001]">
            Nghe hiểu nội dung IELTS
          </span>
          <span className="mt-2 text-sm leading-relaxed text-[#47464b]">
            Active learning với dự đoán, nắm ý chính, nghe kỹ và tự đánh giá.
          </span>
        </button>
      </div>
    </section>
  );
}
