"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

/**
 * Trang /newsletter: `<dialog>` modal + backdrop mờ.
 * Đóng: `router.back()` để quay client-side về trang trước (footer / menu), tránh `push("/")` gây cảm giác reload.
 */
export function NewsletterSignupView() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const leaveNewsletter = useCallback(() => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    const d = dialogRef.current;
    d?.showModal();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={leaveNewsletter}
      className="newsletter-dialog fixed left-1/2 top-1/2 z-100 box-border max-h-[min(90dvh,880px)] w-[min(calc(100vw-1.5rem),36rem)] max-w-[min(calc(100vw-1.5rem),36rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-[28px] border border-zinc-200/90 bg-white px-6 py-7 shadow-xl ring-1 ring-zinc-950/5 [-webkit-tap-highlight-color:transparent] sm:rounded-3xl sm:px-10 sm:py-10 md:px-12 md:py-12"
      aria-labelledby="newsletter-dialog-title"
    >
      <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition hover:bg-zinc-100 hover:text-ink"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      {submitted ? (
        <div className="pr-10 text-left">
          <h1
            id="newsletter-dialog-title"
            tabIndex={-1}
            className="text-balance text-2xl font-semibold tracking-[-0.03em] text-[#4b2876] outline-none sm:text-3xl"
          >
            Cảm ơn bạn đã đăng ký
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Mình đã ghi nhận email. Khi có tin quan trọng, bạn sẽ là một trong những người được nhắn trước.
          </p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="mt-8 inline-flex rounded-full bg-[#4b2876] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3d2660]"
          >
            Về trang chủ
          </button>
        </div>
      ) : (
        <>
          <h1
            id="newsletter-dialog-title"
            tabIndex={-1}
            className="pr-10 text-balance text-2xl font-semibold tracking-[-0.03em] text-[#4b2876] outline-none sm:text-3xl"
          >
            Nhanh như chớp 👇
          </h1>
          <p className="mt-4 text-left text-base leading-relaxed text-ink-muted">
            Khi có cập nhật mới, mình sẽ gửi email đến cho bạn. Nếu bạn muốn là người đầu tiên biết tin, để lại email bên
            dưới nha.
          </p>

          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3" onSubmit={onSubmit}>
            <div className="min-w-0 flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email của bạn
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="Email của bạn"
                className="box-border h-12 w-full rounded-xl border border-zinc-300 bg-[#fbf8fd] px-4 text-base leading-normal text-ink outline-none transition placeholder:text-[#4b2876]/40 focus:border-[#4b2876]/45 focus:ring-1 focus:ring-[#4b2876]/25"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#4b2876] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3d2660] sm:min-w-[140px]"
            >
              Đăng ký ngay
            </button>
          </form>

          <p className="mt-4 text-left text-xs leading-relaxed text-ink-faint">
            Quyền riêng tư của bạn được đặt lên hàng đầu - bảo mật tuyệt đối, nói không với spam.
          </p>
        </>
      )}
    </dialog>
  );
}
