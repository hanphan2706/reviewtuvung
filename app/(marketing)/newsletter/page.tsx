import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { MarketingSubpageShell } from "@/components/marketing-subpage-shell";

export const metadata: Metadata = {
  title: `Newsletter | ${LANDING.brand}`,
  description: "Đăng ký nhận tin — nội dung sẽ được cập nhật sau.",
};

export default function NewsletterPage() {
  return (
    <MarketingSubpageShell title="Newsletter">
      <p>Bạn ghé đúng chỗ rồi đó — phần newsletter đang được chuẩn bị.</p>
      <p>Mình sẽ thông báo trên trang chủ khi đã sẵn sàng để bạn đăng ký nhận tin nha.</p>
    </MarketingSubpageShell>
  );
}
