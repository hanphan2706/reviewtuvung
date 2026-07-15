"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useGrammarAuth } from "@/components/grammar/grammar-auth-context";

/** Blocks study content until the learner is signed in. */
export function GrammarRequireAuth({ children }: { children: ReactNode }) {
  const { loggedIn, promptLogin } = useGrammarAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (!loggedIn) promptLogin(pathname);
  }, [loggedIn, pathname, promptLogin]);

  if (!loggedIn) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-serif text-2xl font-bold text-[#000001]">Cần đăng nhập để học</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#47464b]">
          Lý thuyết và bài luyện tập Ngữ pháp chỉ mở khi bạn đã đăng nhập — để tiến độ được lưu theo tài
          khoản.
        </p>
        <button
          type="button"
          onClick={() => promptLogin(pathname)}
          className="mt-6 inline-flex h-10 items-center rounded-lg bg-[#000001] px-5 text-sm font-semibold text-white"
        >
          Đăng nhập
        </button>
      </div>
    );
  }

  return children;
}
