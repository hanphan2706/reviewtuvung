import Image from "next/image";
import Link from "next/link";
import { ACCENT_CHALLENGE_PROMO, ACCENT_CHALLENGE_PROMO_IMAGE } from "@/lib/listening/accent-challenge-content";
import { LISTENING_ACCENT_CHALLENGE_HREF } from "@/lib/listening/accent-nav";

export function AccentChallengePromoSection() {
  return (
    <section className="mt-16 md:mt-20">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[220px] bg-[#111] md:min-h-[320px]">
          <Image
            src={ACCENT_CHALLENGE_PROMO_IMAGE}
            alt="Nhóm người đa dạng văn hóa đang trò chuyện cùng nhau"
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center py-8 md:py-10 md:pl-10">
          <h2 className="font-serif text-2xl font-semibold text-[#000001] md:text-[1.85rem]">
            {ACCENT_CHALLENGE_PROMO.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#47464b] md:text-[15px]">
            {ACCENT_CHALLENGE_PROMO.description}
          </p>
          <Link
            href={LISTENING_ACCENT_CHALLENGE_HREF}
            className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-[#000001] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1a1a1b]"
          >
            {ACCENT_CHALLENGE_PROMO.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
