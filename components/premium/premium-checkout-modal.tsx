"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { Check, Copy, X } from "lucide-react";
import {
  buildPremiumTransferContent,
  type PremiumPlan,
} from "@/lib/premium/premium-plans";

type PremiumCheckoutModalProps = {
  plan: PremiumPlan;
  open: boolean;
  onClose: () => void;
};

function formatVnd(amount: number): string {
  return `${amount.toLocaleString("vi-VN")}đ`;
}

export function PremiumCheckoutModal({ plan, open, onClose }: PremiumCheckoutModalProps) {
  const titleId = useId();
  const [copied, setCopied] = useState(false);

  const transferContent = useMemo(
    () => buildPremiumTransferContent(plan),
    [plan],
  );

  const qrPayload = useMemo(() => {
    if (!plan.amountVnd) return "";
    return [
      "anthichtuhoc Premium (demo)",
      `So tien: ${plan.amountVnd}`,
      `Noi dung: ${transferContent}`,
    ].join("\n");
  }, [plan.amountVnd, transferContent]);

  const qrSrc = useMemo(() => {
    if (!qrPayload) return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(qrPayload)}`;
  }, [qrPayload]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  if (!open || !plan.priceDisplay || !plan.amountVnd || !plan.durationDays) return null;

  const durationDays = plan.durationDays;

  async function copyTransferContent() {
    try {
      await navigator.clipboard.writeText(transferContent);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt("Sao chép nội dung chuyển khoản:", transferContent);
    }
  }

  return (
    <dialog
      open
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] m-0 flex h-dvh max-h-none w-screen max-w-none items-end justify-center border-0 bg-black/40 p-0 text-left backdrop-blur-[2px] sm:items-center sm:p-4"
    >
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Đóng" onClick={onClose} />

      <div className="relative z-10 flex max-h-[min(92dvh,760px)] w-full max-w-md flex-col overflow-hidden rounded-t-2xl border border-[#E5E7EB] bg-white shadow-xl sm:rounded-2xl">
        <div className="flex items-start justify-between gap-3 border-b border-[#F3F4F6] px-5 py-4 sm:px-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#4b2876]">Thanh toán QR</p>
            <h2 id={titleId} className="mt-1 font-serif text-xl font-semibold text-[#000B1E]">
              Gia hạn Premium {durationDays} ngày
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#6B7280] transition hover:bg-[#F3F4F6]"
            aria-label="Đóng"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-6">
          <div className="space-y-5">
            <div className="rounded-xl border border-[#E4E4E7] bg-[#f5f5f7] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-serif text-lg font-semibold text-[#000B1E]">{plan.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                    Sau khi hệ thống xác nhận thanh toán, tài khoản được cộng thêm{" "}
                    <span className="font-medium text-[#000B1E]">{durationDays} ngày</span>. Hết hạn mà không gia hạn sẽ
                    về gói miễn phí.
                  </p>
                </div>
                <p className="shrink-0 font-serif text-2xl font-semibold leading-none text-[#000B1E]">
                  {plan.priceDisplay}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-[#E5E7EB] bg-white px-4 py-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrSrc}
                alt={`Mã QR thanh toán ${plan.priceDisplay}`}
                width={220}
                height={220}
                className="h-[220px] w-[220px] rounded-lg bg-white"
              />
              <p className="mt-3 text-center text-xs leading-relaxed text-[#6B7280]">
                Quét QR bằng app ngân hàng. Số tiền và nội dung đã gắn sẵn (bản demo).
              </p>
            </div>

            <dl className="space-y-3 rounded-xl border border-[#E5E7EB] px-4 py-4 text-sm">
              <div className="flex items-start justify-between gap-3">
                <dt className="text-[#6B7280]">Số tiền</dt>
                <dd className="font-semibold text-[#000B1E]">{formatVnd(plan.amountVnd)}</dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="shrink-0 text-[#6B7280]">Nội dung CK</dt>
                <dd className="flex min-w-0 items-center gap-2">
                  <code className="truncate rounded-md bg-[#F3F4F6] px-2 py-1 font-mono text-[13px] font-semibold text-[#000B1E]">
                    {transferContent}
                  </code>
                  <button
                    type="button"
                    onClick={() => void copyTransferContent()}
                    className="inline-flex shrink-0 items-center gap-1 rounded-md border border-[#E5E7EB] px-2 py-1 text-xs font-medium text-[#000B1E] transition hover:bg-[#F8F8FA]"
                  >
                    {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                    {copied ? "Đã copy" : "Copy"}
                  </button>
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3 border-t border-[#F3F4F6] pt-3">
                <dt className="text-[#6B7280]">Ngân hàng / STK</dt>
                <dd className="text-right text-[#9CA3AF]">Sẽ hiện khi kết nối cổng thật</dd>
              </div>
            </dl>

            <p className="text-center text-[11px] leading-relaxed text-[#9CA3AF]">
              Demo UI — chưa trừ tiền, chưa tự nâng cấp. Sau này hệ thống sẽ nhận giao dịch theo nội dung CK rồi cộng{" "}
              {durationDays} ngày Premium.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg border border-[#000B1E] bg-white px-4 py-3 text-sm font-semibold text-[#000B1E] transition hover:bg-[#F8F8FA]"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
