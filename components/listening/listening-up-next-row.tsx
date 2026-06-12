"use client";

import Image from "next/image";
import {
  getListeningUpNextParts,
  listeningPartDurationMinutes,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";

type ListeningUpNextRowProps = {
  currentPartId: string;
  onSelectLesson: (slug: string) => void;
};

function UpNextCard({
  label,
  labelClassName,
  meta,
  onSelect,
}: {
  label: string;
  labelClassName: string;
  meta: ListeningPartMeta;
  onSelect: () => void;
}) {
  const minutes = listeningPartDurationMinutes(meta);

  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full cursor-pointer items-center gap-4 rounded-xl border border-[#E4E4E7] bg-white p-4 text-left shadow-sm transition hover:shadow-md md:p-5"
    >
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#f3f0f8]">
        <Image src={meta.heroImage} alt="" fill className="object-cover" sizes="56px" />
      </div>
      <div className="min-w-0 flex-1">
        <p className={`text-[10px] font-bold uppercase tracking-wider ${labelClassName}`}>{label}</p>
        <p className="mt-0.5 font-serif text-base font-semibold leading-snug text-[#000001]">{meta.title}</p>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#47464b]">
          {minutes} phút · {meta.metaPill}
        </p>
      </div>
    </button>
  );
}

export function ListeningUpNextRow({ currentPartId, onSelectLesson }: ListeningUpNextRowProps) {
  const [next, also] = getListeningUpNextParts(currentPartId);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <UpNextCard
        label="Tiếp theo"
        labelClassName="text-[#4b2876]"
        meta={next}
        onSelect={() => onSelectLesson(next.slug)}
      />
      <UpNextCard
        label="Gợi ý thêm"
        labelClassName="text-[#616365]"
        meta={also}
        onSelect={() => onSelectLesson(also.slug)}
      />
    </div>
  );
}
