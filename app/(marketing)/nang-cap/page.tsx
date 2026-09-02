import type { Metadata } from "next";
import { PremiumPricingPage } from "@/components/premium/premium-pricing-page";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `Nâng cấp Premium | ${LANDING.brand}`,
  description:
    "Anthichtuhoc Premium — mở khóa thư viện đầy đủ, lộ trình cá nhân hoá và công cụ luyện tập nâng cao. Gói từ miễn phí đến 89k/tháng.",
};

export default function NangCapPage() {
  return <PremiumPricingPage />;
}
