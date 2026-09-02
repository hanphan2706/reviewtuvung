"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Copyright, X } from "lucide-react";
import { PremiumCheckoutModal } from "@/components/premium/premium-checkout-modal";
import { PREMIUM_PLANS, type PremiumFeature, type PremiumPlan } from "@/lib/premium/premium-plans";

function FeatureLabel({ feature }: { feature: PremiumFeature }) {
  const mark = feature.exclusiveAfter;
  if (!mark) return feature.label;

  const index = feature.label.indexOf(mark);
  if (index < 0) return feature.label;

  const before = feature.label.slice(0, index);
  const after = feature.label.slice(index + mark.length);

  return (
    <>
      {before}
      <span className="relative inline-block pr-[0.5em]">
        {mark}
        <Copyright
          className="absolute right-0 top-0 size-[0.55em] -translate-y-[0.1em] text-[#4b2876]"
          strokeWidth={2.5}
          aria-label="Tính năng exclusive"
        />
      </span>
      {after}
    </>
  );
}

function PlanCard({
  plan,
  onCheckout,
}: {
  plan: PremiumPlan;
  onCheckout: (plan: PremiumPlan) => void;
}) {
  const featured = Boolean(plan.featured);

  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-2xl p-6 sm:p-7",
        featured
          ? "border-2 border-[#000001] bg-[#f5f5f7] shadow-[0_12px_40px_-18px_rgba(0,0,1,0.22)]"
          : "border border-[#E4E4E7] bg-white",
      ].join(" ")}
    >
      {plan.badge ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-[#4b2876] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
          {plan.badge}
        </span>
      ) : null}

      <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#000001]">{plan.name}</h2>
      <p className="mt-2 min-h-[4rem] text-sm leading-relaxed text-[#6B7280]">{plan.description}</p>

      <p className="mt-2.5 whitespace-nowrap font-serif text-2xl font-semibold leading-none tracking-tight text-[#000001]">
        {plan.priceLabel}
      </p>

      <button
        type="button"
        onClick={() => {
          if (plan.id === "free") {
            window.location.href = "/tu-hoc/tu-vung";
            return;
          }
          onCheckout(plan);
        }}
        className={[
          "mt-6 w-full rounded-lg px-4 py-3 text-sm font-semibold transition",
          featured
            ? "bg-[#000001] text-white hover:bg-black/90"
            : "border border-[#000001] bg-white text-[#000001] hover:bg-[#f5f5f7]",
        ].join(" ")}
      >
        {plan.ctaLabel}
      </button>

      <ul className="mt-7 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2.5 text-sm leading-relaxed">
            {feature.included ? (
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" strokeWidth={2.5} aria-hidden />
            ) : (
              <X className="mt-0.5 size-4 shrink-0 text-[#D1D5DB]" strokeWidth={2.25} aria-hidden />
            )}
            <span className={feature.included ? "text-[#374151]" : "text-[#9CA3AF]"}>
              <FeatureLabel feature={feature} />
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PremiumPricingPage() {
  const router = useRouter();
  const [checkoutPlan, setCheckoutPlan] = useState<PremiumPlan | null>(null);

  function goBack() {
    if (typeof window === "undefined") return;

    const referrer = document.referrer;
    if (referrer) {
      try {
        const url = new URL(referrer);
        if (url.origin === window.location.origin && url.pathname !== "/nang-cap") {
          router.push(`${url.pathname}${url.search}${url.hash}`);
          return;
        }
      } catch {
        // ignore invalid referrer
      }
    }

    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <div className="min-h-dvh bg-white text-[#000B1E]">
      <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
        <nav className="mb-8" aria-label="Breadcrumb">
          <button
            type="button"
            onClick={goBack}
            className="text-sm font-medium text-[#4b2876] underline decoration-[#4b2876]/30 underline-offset-2 transition hover:decoration-[#4b2876]/60"
          >
            ← Quay lại
          </button>
        </nav>

        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance font-serif text-[1.85rem] font-semibold leading-[1.2] tracking-tight text-[#000B1E] sm:text-4xl md:text-[2.65rem]">
            Nâng cấp để truy cập toàn bộ tính năng trên anthichtuhoc
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6B7280] sm:text-base">
            Không tự động gia hạn, bạn hoàn toàn làm chủ. Tài khoản sẽ cộng thêm 30 ngày (cho gói Pro) và 90 ngày (cho
            gói Plus) sau khi hệ thống xác nhận thanh toán.
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:items-stretch md:gap-6">
          {PREMIUM_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onCheckout={setCheckoutPlan} />
          ))}
        </div>
      </div>

      {checkoutPlan ? (
        <PremiumCheckoutModal
          plan={checkoutPlan}
          open
          onClose={() => setCheckoutPlan(null)}
        />
      ) : null}
    </div>
  );
}
