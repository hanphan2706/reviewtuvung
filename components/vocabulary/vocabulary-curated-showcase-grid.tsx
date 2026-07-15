"use client";

import { ArrowUpRight, BookOpen, BriefcaseMedical, Compass } from "lucide-react";
import { useVocabularyAuth } from "@/components/vocabulary/vocabulary-auth-context";
import {
  type CuratedShowcaseIcon,
  type CuratedShowcaseItem,
  curatedUnitHref,
  getVocabularyUnit,
} from "@/lib/vocabulary/vocabulary-unit-registry";

function ShowcaseIcon({ icon }: { icon?: CuratedShowcaseIcon }) {
  const className = "size-5 shrink-0";
  if (icon === "medical") return <BriefcaseMedical className={className} strokeWidth={1.75} />;
  if (icon === "compass") return <Compass className={className} strokeWidth={1.75} />;
  return <BookOpen className={className} strokeWidth={1.75} />;
}

function FeaturedUnitCard({
  unitId,
  badge,
  imageUrl,
}: {
  unitId: string;
  badge?: string;
  imageUrl: string;
}) {
  const unit = getVocabularyUnit(unitId);
  const { navigateWithAuth } = useVocabularyAuth();
  if (!unit) return null;

  const href = curatedUnitHref(unitId);

  return (
    <button
      type="button"
      onClick={() => navigateWithAuth(href)}
      className="group relative block h-full min-h-[220px] w-full overflow-hidden rounded-2xl text-left shadow-sm lg:min-h-0"
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
      <div className="relative flex h-full min-h-[220px] flex-col justify-end p-5 md:p-6">
        {badge ? (
          <span className="mb-3 inline-flex w-fit rounded-md bg-[#4b2876] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {badge}
          </span>
        ) : null}
        <h3 className="font-serif text-xl font-bold text-white md:text-2xl">{unit.title}</h3>
        <p className="mt-1.5 line-clamp-3 max-w-md text-sm leading-relaxed text-white/80">{unit.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white underline decoration-white/40 underline-offset-4">
          Khám phá ngay
          <ArrowUpRight className="size-3.5" strokeWidth={2} />
        </span>
      </div>
    </button>
  );
}

function SoonShowcaseCard({ item }: { item: Extract<CuratedShowcaseItem, { type: "soon" }> }) {
  const soonClass = "cursor-not-allowed";

  if (item.variant === "featured") {
    return (
      <button
        type="button"
        disabled
        title="Sắp ra mắt — bộ từ đang được biên soạn"
        className={`${soonClass} group relative block h-full min-h-[220px] w-full overflow-hidden rounded-2xl text-left shadow-sm lg:min-h-0`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.imageUrl ?? "https://images.unsplash.com/photo-1490645933887-1cefb8bd438d?auto=format&fit=crop&w=1200&q=80"})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="relative flex h-full min-h-[220px] flex-col justify-end p-5 md:p-6">
          {item.badge ? (
            <span className="mb-3 inline-flex w-fit rounded-md bg-[#4b2876] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {item.badge}
            </span>
          ) : null}
          <h3 className="font-serif text-xl font-bold text-white md:text-2xl">{item.title}</h3>
          <p className="mt-1.5 line-clamp-3 max-w-md text-sm leading-relaxed text-white/80">{item.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/60">
            Sắp ra mắt
          </span>
        </div>
      </button>
    );
  }

  if (item.variant === "wide") {
    return (
      <button
        type="button"
        disabled
        title="Sắp ra mắt — bộ từ đang được biên soạn"
        className={`${soonClass} group flex w-full items-center justify-between gap-4 rounded-2xl border border-[#E4E4E7] bg-white p-5 text-left shadow-sm md:p-6`}
      >
        <div className="flex min-w-0 items-start gap-4">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#fbf8fd] text-[#4b2876]">
            <ShowcaseIcon icon={item.icon} />
          </span>
          <div className="min-w-0">
            {item.badge ? (
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#47464b]/60">{item.badge}</p>
            ) : null}
            <h3 className="font-serif text-lg font-bold text-[#000001]">{item.title}</h3>
            <p className="mt-1 text-sm text-[#47464b]">{item.description}</p>
          </div>
        </div>
        <ArrowUpRight
          className="size-5 shrink-0 text-[#47464b]/40 transition group-hover:text-[#4b2876]"
          strokeWidth={1.75}
        />
      </button>
    );
  }

  const purple = item.variant === "compact-purple";

  return (
    <button
      type="button"
      disabled
      title="Sắp ra mắt — bộ từ đang được biên soạn"
      className={`${soonClass} group flex h-full min-h-[120px] w-full flex-col rounded-2xl p-5 text-left shadow-sm md:p-6 ${
        purple ? "bg-[#4b2876] text-white" : "border border-[#E4E4E7] bg-white"
      }`}
    >
      <span
        className={`inline-flex size-10 items-center justify-center rounded-lg ${
          purple ? "bg-white/15 text-white" : "bg-[#f5f5f7] text-[#0a0a0a]"
        }`}
      >
        <ShowcaseIcon icon={item.icon} />
      </span>
      <h3 className={`mt-4 font-serif text-lg font-bold leading-snug ${purple ? "text-white" : "text-[#000001]"}`}>
        {item.title}
      </h3>
      <p className={`mt-1 line-clamp-2 text-sm ${purple ? "text-white/75" : "text-[#47464b]"}`}>
        {item.description}
      </p>
    </button>
  );
}

function CompactUnitCard({ item }: { item: Extract<CuratedShowcaseItem, { type: "unit" }> }) {
  const unit = getVocabularyUnit(item.unitId);
  const { navigateWithAuth } = useVocabularyAuth();
  if (!unit) return null;

  const href = curatedUnitHref(item.unitId);

  if (item.variant === "wide") {
    return (
      <button
        type="button"
        onClick={() => navigateWithAuth(href)}
        className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-[#E4E4E7] bg-white p-5 text-left shadow-sm transition hover:border-[#4b2876]/25 hover:shadow-md md:p-6"
      >
        <div className="min-w-0">
          {item.badge ? (
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#47464b]/60">{item.badge}</p>
          ) : null}
          <h3 className="font-serif text-lg font-bold text-[#000001]">{unit.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-[#47464b]">{unit.description}</p>
        </div>
        <ArrowUpRight
          className="size-5 shrink-0 text-[#47464b]/40 transition group-hover:text-[#4b2876]"
          strokeWidth={1.75}
        />
      </button>
    );
  }

  const purple = item.variant === "compact-purple";

  return (
    <button
      type="button"
      onClick={() => navigateWithAuth(href)}
      className={`group flex h-full min-h-[120px] w-full flex-col rounded-2xl p-5 text-left shadow-sm transition md:p-6 ${
        purple
          ? "bg-[#4b2876] text-white hover:bg-[#3f2163]"
          : "border border-[#E4E4E7] bg-white hover:border-[#4b2876]/25 hover:shadow-md"
      }`}
    >
      <span
        className={`inline-flex size-10 items-center justify-center rounded-lg ${
          purple ? "bg-white/15 text-white" : "bg-[#f5f5f7] text-[#0a0a0a]"
        }`}
      >
        <BookOpen className="size-5" strokeWidth={1.75} />
      </span>
      <h3 className={`mt-4 font-serif text-lg font-bold leading-snug ${purple ? "text-white" : "text-[#000001]"}`}>
        {unit.title}
      </h3>
      <p className={`mt-1 line-clamp-2 text-sm ${purple ? "text-white/75" : "text-[#47464b]"}`}>
        {unit.description}
      </p>
    </button>
  );
}

function SecondaryShowcaseCard({ item }: { item: CuratedShowcaseItem }) {
  if (item.type === "unit") {
    if (item.variant === "featured") return null;
    return <CompactUnitCard item={item} />;
  }
  if (item.variant === "featured") return null;
  return <SoonShowcaseCard item={item} />;
}

export function VocabularyCuratedShowcaseGrid({ items }: { items: readonly CuratedShowcaseItem[] }) {
  const featured = items.find((i) => i.variant === "featured");
  const others = items.filter((i) => i.variant !== "featured");

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
      {featured ? (
        <div className="h-full min-h-0">
          {featured.type === "unit" ? (
            <FeaturedUnitCard
              unitId={featured.unitId}
              badge={featured.badge}
              imageUrl={
                featured.imageUrl ??
                "https://images.unsplash.com/photo-1456513080920-022dd7741c70?auto=format&fit=crop&w=1200&q=80"
              }
            />
          ) : (
            <SoonShowcaseCard item={featured} />
          )}
        </div>
      ) : null}

      <div className="flex h-full min-h-0 flex-col gap-4">
        {others.map((item) => {
          if (item.variant !== "wide") return null;
          return <SecondaryShowcaseCard key={item.type === "unit" ? item.unitId : item.id} item={item} />;
        })}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          {others.map((item) => {
            if (item.variant !== "compact-purple" && item.variant !== "compact") return null;
            return <SecondaryShowcaseCard key={item.type === "unit" ? item.unitId : item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
