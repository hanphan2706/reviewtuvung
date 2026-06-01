"use client";

import { useEffect, useState } from "react";
import {
  localStreakSnapshot,
  recordLocalReadingOpen,
  type ReadingStreakSnapshot,
} from "@/lib/reading/reading-progress";

type ArticleStreakPanelProps = {
  articleKey: string;
  isLoggedIn: boolean;
};

const EMPTY_STREAK: ReadingStreakSnapshot = {
  currentStreak: 0,
  longestStreak: 0,
  lastReadDate: null,
  articlesOpened: 0,
  weekProgress: 0,
  messageVi: "Mọi sự thay đổi lớn đều bắt đầu từ từng bước nhỏ.",
};

export function ArticleStreakPanel({ articleKey, isLoggedIn }: ArticleStreakPanelProps) {
  /** Không đọc localStorage trong useState — server=0, client=2 gây hydration error. */
  const [streak, setStreak] = useState<ReadingStreakSnapshot>(EMPTY_STREAK);

  useEffect(() => {
    recordLocalReadingOpen();
    setStreak(localStreakSnapshot());

    if (!isLoggedIn) return;

    const syncStreak = () => {
      void fetch("/api/reading/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ articleKey, progress: 0.05 }),
      })
        .then((r) => r.json())
        .then((data: { streak?: ReadingStreakSnapshot }) => {
          if (data.streak) setStreak(data.streak);
        })
        .catch(() => undefined);
    };

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(syncStreak, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const t = window.setTimeout(syncStreak, 400);
    return () => window.clearTimeout(t);
  }, [articleKey, isLoggedIn]);

  return (
    <section className="rounded-lg border-none bg-[#000001] p-6 text-white shadow-sm">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
        CHUỖI NGÀY HIỆN TẠI
      </span>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-serif text-5xl font-bold leading-none">{streak.currentStreak}</span>
        <span className="font-serif text-xl">Ngày</span>
      </div>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-[#4b2876] transition-[width] duration-300"
          style={{ width: `${Math.round(streak.weekProgress * 100)}%` }}
        />
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-white/80">{streak.messageVi}</p>
      {!isLoggedIn ? (
        <p className="mt-2 text-[11px] text-white/55">Đăng nhập để đồng bộ streak trên mọi thiết bị.</p>
      ) : null}
    </section>
  );
}
