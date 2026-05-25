"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, Compass, Globe, Headphones, Play, Timer } from "lucide-react";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubContainerClass, studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

const HERO_IMG =
  "https://images.unsplash.com/photo-1511671782779-c97d3d27ae1c?w=1200&q=80&auto=format&fit=crop";

type ListeningHubProps = {
  onStartPilot: () => void;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

export function ListeningHub({ onStartPilot, isLoggedIn, userProfile = null, supabaseConfigured }: ListeningHubProps) {
  const pathname = usePathname();

  return (
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện nghe"
        showListeningFilters
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={pathname}
      />

      <div className={`${studyHubContainerClass} py-10 md:py-12`}>
        {/* Hero — Cam 19 pilot */}
        <section className="mb-14">
          <div className="group relative h-[min(450px,70vh)] overflow-hidden rounded-lg border border-[#E4E4E7]">
            <Image
              src={HERO_IMG}
              alt=""
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="1100px"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-sm bg-[#4B2876] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Nổi bật · Pilot
                </span>
                <span className="text-sm text-white/90">Cambridge 19 — Test 1</span>
              </div>
              <h1 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-white md:text-[2.5rem]">
                Luyện nghe chủ động — dự đoán, phản ánh, transcript
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={onStartPilot}
                  className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-[#1c1b1c] transition hover:bg-[#f7f3f2]"
                >
                  <Play className="h-5 w-5 fill-current" aria-hidden />
                  Bắt đầu nghe
                </button>
                <span className="flex items-center gap-2 text-sm text-white/80">
                  <Timer className="h-5 w-5" aria-hidden />
                  4 parts
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Accent cards */}
        <section className="mb-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#1c1b1c]">Khám phá các chất giọng</h2>
              <p className="mt-1 text-[#47464b]">Lựa chọn vùng miền để bắt đầu hành trình luyện tập</p>
            </div>
            <span className="flex cursor-default items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#4B2876]">
              Xem tất cả <ChevronRight className="h-4 w-4" aria-hidden />
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Anh - Anh",
                desc: "Received Pronunciation (RP) và Cockney phổ biến.",
                count: "Sắp có",
              },
              {
                icon: Compass,
                title: "Anh - Mỹ",
                desc: "Chất giọng tiêu chuẩn trong truyền thông và kinh doanh.",
                count: "Pilot: Cam 19",
                pilot: true,
              },
              {
                icon: Globe,
                title: "Anh - Úc",
                desc: "Nguyên âm kéo dài đặc trưng của người Úc.",
                count: "Sắp có",
              },
            ].map((card) => (
              <button
                key={card.title}
                type="button"
                disabled={!card.pilot}
                onClick={card.pilot ? onStartPilot : undefined}
                className="flex flex-col rounded-lg border border-[#E4E4E7] bg-white p-8 text-left transition hover:shadow-md disabled:cursor-default disabled:opacity-55"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f1eded]">
                  <card.icon className="h-6 w-6 text-[#1c1b1c]" aria-hidden />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1c1b1c]">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#47464b]">{card.desc}</p>
                <div className="mt-8 flex items-center justify-between border-t border-[#f1eded] pt-4 text-[10px] font-bold uppercase tracking-wider text-[#47464b]">
                  <span>{card.count}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* History — mock */}
        <section className="mb-14">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-[#1c1b1c]">Lịch sử luyện tập gần đây</h2>
          <div className="overflow-hidden rounded-lg border border-[#E4E4E7] bg-white shadow-sm">
            <div className="hidden border-b border-[#E4E4E7] bg-[#f7f3f2] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#47464b] md:grid md:grid-cols-4">
              <span>Bài học</span>
              <span>Ngày học</span>
              <span>Độ khó</span>
              <span className="text-right">Kết quả</span>
            </div>
            <ul className="divide-y divide-[#E4E4E7]">
              {[
                { title: "Cam 19 Test 1 — Part 1", sub: "Pilot · Giọng Anh", date: "—", level: "Pilot" },
              ].map((row) => (
                <li key={row.title}>
                  <button
                    type="button"
                    onClick={onStartPilot}
                    className="grid w-full gap-3 px-6 py-5 text-left transition hover:bg-zinc-50 md:grid-cols-4 md:items-center"
                  >
                    <div className="flex items-center gap-3">
                      <Headphones className="h-5 w-5 shrink-0 text-[#47464b]" aria-hidden />
                      <div>
                        <p className="font-semibold text-[#1c1b1c]">{row.title}</p>
                        <p className="text-xs text-[#47464b]">{row.sub}</p>
                      </div>
                    </div>
                    <span className="text-sm text-[#47464b] md:block">{row.date}</span>
                    <span className="w-fit rounded bg-[#f1eded] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#47464b]">
                      {row.level}
                    </span>
                    <span className="font-serif text-2xl text-[#4B2876] md:text-right">—</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="border-t border-[#E4E4E7] px-6 py-3 text-xs text-[#47464b]">
              Lịch sử thật sẽ lưu sau khi hoàn thiện player — hiện chỉ pilot Cam 19.
            </p>
          </div>
        </section>

        {/* Newsletter block */}
        <section className="flex flex-col items-center gap-8 rounded-lg border border-[#E4E4E7] bg-[#f1eded] p-8 md:flex-row md:p-10">
          <div className="flex-1">
            <h2 className="font-serif text-2xl font-semibold text-[#1c1b1c]">Thử thách nghe hàng tuần</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#47464b]">
              Đăng ký nhận bài tập nghe chọn lọc — sắp có (layout từ Stitch).
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                disabled
                placeholder="Email của bạn"
                className="flex-1 rounded-lg border border-[#E4E4E7] bg-white px-4 py-3 text-sm outline-none disabled:opacity-60"
              />
              <button
                type="button"
                disabled
                className="rounded-lg bg-[#1c1b1c] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white disabled:opacity-50"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
          <div className="relative h-40 w-40 shrink-0 md:h-56 md:w-56">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80&auto=format&fit=crop"
              alt=""
              fill
              className="rounded-lg object-cover shadow-xl"
              sizes="224px"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
