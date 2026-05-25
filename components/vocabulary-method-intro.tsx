"use client";

import { useLayoutEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AuthButton } from "@/components/auth-button";

export const VOCABULARY_INFO_PANELS = [
  {
    title: "Cơ chế hoạt động của não bộ",
    body: [
      {
        id: "brain-forgetting-curve",
        parts: [
          {
            text: "Não bộ hoạt động theo cái gọi là Forgetting Curve (đường cong lãng quên). Hiểu đơn giản là một người sẽ quên 50-80% thông tin mình vừa học trong vài ngày.",
          },
        ],
      },
    ],
  },
  {
    title: "Spaced Repetition",
    body: [
      {
        id: "Spaced-repetition-timing",
        parts: [
          { text: "Lý do Spaced repetition hữu ích vì nó giúp bạn " },
          { text: "ôn lại đúng thời điểm sắp quên", strong: true },
          { text: ". Mỗi lần như vậy thì trí nhớ được củng cố, và dần dà khoảng cách giữa các lần ôn sẽ " },
          { text: "ngày càng dài ra.", strong: true },
          {
            text: " Cho đến khi kiến thức chuyển hoàn toàn thành thông tin lâu dài.",
          },
        ],
      },
      {
        id: "Spaced-repetition-anthichtuhoc",
        parts: [
          { text: "anthichtuhoc", strong: true },
          {
            text: " tận dụng tối đa Spaced repetition với khoảng lặp dựa theo trí nhớ của riêng bạn. (1 ngày, 2 ngày, 4 ngày, 1 tuần, v.v...)",
          },
        ],
      },
    ],
  },
  {
    title: "Active learning",
    body: [
      {
        id: "active-learning-retrieval",
        parts: [
          { text: "Não nhớ tốt hơn khi bạn " },
          { text: "lấy", strong: true },
          { text: " thông tin ra, không phải khi bạn " },
          { text: "nhét", strong: true },
          { text: " vào." },
        ],
      },
      {
        id: "active-learning-familiarity",
        parts: [
          {
            text: 'Tại sao khi bạn nhìn một từ thì "À, mình biết cái này mà", nhưng khi cần dùng lúc nói hoặc viết thì nhớ không ra. Lý do là vì bạn tưởng mình biết rồi, nhưng thực ra chỉ đang "quen mắt" thôi.',
          },
        ],
      },
      {
        id: "active-learning-practice",
        parts: [
          { text: "Thay vì đọc, highlight, nghe giảng (thụ động), bạn phải đổi sang kiểu học " },
          { text: "chủ động", strong: true },
          {
            text: " hơn, có thể là tự nhớ lại, tự viết lại, tự nói ra, tự giải thích được, và tự tạo ra được.",
          },
        ],
      },
      {
        id: "active-learning-anthichtuhoc",
        parts: [
          { text: "anthichtuhoc", strong: true },
          {
            text: " được thiết kế để bạn tối đa hoá cách học chủ động thay vì các app flashcard truyền thống.",
          },
        ],
      },
    ],
  },
  {
    title: "Màu sắc và Trí nhớ",
    body: [
      {
        id: "memory-colour-relationship",
        parts: [
          { text: "Đã có rất nhiều nghiên cứu về mối quan hệ giữa " },
          { text: "màu sắc", strong: true, purple: true },
          {
            text: " và trí nhớ. Một vài màu cụ thể sẽ giúp tăng cảm xúc và cải thiện tốc độ truy xuất của trí nhớ.",
          },
        ],
      },
      {
        id: "memory-colour-cards",
        parts: [
          { text: "anthichtuhoc", strong: true },
          { text: " cho phép bạn sử dụng các card với " },
          { text: "màu sắc", strong: true, purple: true },
          {
            text: " khác nhau và emojis (🧠 🪆 🦍) để giúp bạn nhớ tốt hơn.",
          },
        ],
      },
    ],
  },
  {
    title: "Study smart thay vì Study hard",
    body: [
      {
        id: "purpose-specific-goal",
        parts: [
          { text: "Hãy học vì " },
          { text: "mục tiêu cụ thể", strong: true },
          { text: ", không phải vì thấy mọi người làm vậy thì mình làm theo." },
        ],
      },
      {
        id: "purpose-little-often",
        parts: [
          {
            text: 'Ngoài ra, học ít nhưng đều đặn sẽ tốt hơn là một buổi học dài kiệt sức. Bạn cũng nên học khi não bộ cảm thấy hứng thú thay vì "ép" bản thân ngồi vào bàn và gọi đó là học.',
          },
        ],
      },
    ],
  },
] as const;

const authButtonClassName =
  "inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#4b2876] px-4 py-2.5 text-sm font-semibold text-white shadow-sm disabled:pointer-events-none disabled:opacity-45";

export function VocabularyMethodIntro({
  includeAuthSection,
  supabaseConfigured = true,
  oauthNext,
}: {
  /** Khi false: chỉ nội dung giới thiệu (đã đăng nhập), không có nút đăng nhập. */
  includeAuthSection: boolean;
  supabaseConfigured?: boolean;
  /** Sau đăng nhập, chuyển tới path nội bộ (từ `?next=` trên URL đăng nhập). */
  oauthNext?: string;
}) {
  const [openPanel, setOpenPanel] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!includeAuthSection) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [includeAuthSection]);

  return (
    <section className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm ring-1 ring-zinc-950/5">
      <div className="pt-2 text-center">
        <h1 className="font-serif text-2xl font-bold tracking-tight text-[#4b2876]">Từ vựng</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Tại sao lại là phương pháp
          <br />
          Spaced-repetition và Active learning?
        </p>
      </div>

      <div className="mt-6 divide-y divide-zinc-200/90">
        {VOCABULARY_INFO_PANELS.map((panel, index) => {
          const isOpen = openPanel === index;
          const panelId = `vocab-info-panel-${index}`;

          return (
            <div key={panel.title}>
              <button
                type="button"
                onClick={() => setOpenPanel(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-semibold text-ink"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>
                  <span className="block">{panel.title}</span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.8}
                />
              </button>
              <div
                id={panelId}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="pb-5 pt-0.5">
                    {panel.body ? (
                      <div className="space-y-4 text-sm font-medium leading-relaxed text-ink-muted">
                        {panel.body.map((paragraph) => (
                          <p key={paragraph.id}>
                            {paragraph.parts.map((part, pi) => {
                              const purple = "purple" in part && part.purple === true;
                              const bold = "strong" in part && part.strong === true;
                              return bold ? (
                                <strong key={`${paragraph.id}-b-${pi}`} className={`font-bold ${purple ? "text-[#4b2876]" : "text-ink"}`}>
                                  {part.text}
                                </strong>
                              ) : (
                                <span key={`${paragraph.id}-s-${pi}`}>{part.text}</span>
                              );
                            })}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed text-ink-muted">
                        Mục này không có phần nội dung mở trong clip bạn gửi.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-zinc-200/90 pt-5">
        <p className="text-xs font-medium leading-relaxed text-ink-muted">
          *Hãy đảm bảo bạn đọc hết các mục ở trên để tối ưu hoá việc học từ vựng nha.
        </p>
        <div className="mx-auto mt-5 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- explicit portrait in public */}
          <img
            src="/hermann.jpg"
            alt="Chân dung Hermann Ebbinghaus"
            width={200}
            height={285}
            className="h-auto max-h-[280px] w-[200px] max-w-full rounded-xl object-cover object-[50%_26%]"
            decoding="async"
            loading="eager"
          />
        </div>
        {includeAuthSection ? (
          <>
            <div className="mt-6">
              <AuthButton
                mode="sign-in"
                disabled={!supabaseConfigured}
                className={authButtonClassName}
                next={oauthNext}
              />
            </div>
            {!supabaseConfigured ? (
              <p className="mt-4 text-xs leading-relaxed text-red-600">
                Supabase chưa được cấu hình. Thêm `NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY` vào
                `.env.local` để bật đăng nhập.
              </p>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
}
