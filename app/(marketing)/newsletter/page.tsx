import type { Metadata } from "next";
import { NewsletterSignupView } from "@/components/newsletter-signup-view";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `Newsletter | ${LANDING.brand}`,
  description: "Đăng ký nhận tin từ Ân thích tự học — cập nhật qua email.",
};

export default function NewsletterPage() {
  return <NewsletterSignupView />;
}
