import type { Metadata } from "next";
import Link from "next/link";
import { LANDING } from "@/lib/landing-content";
import { MarketingSubpageShell } from "@/components/marketing-subpage-shell";

export const metadata: Metadata = {
  title: `Credits | ${LANDING.brand}`,
  description:
    "anthichtuhoc từ fanpage đến webapp — dự án solo, giá trị cốt lõi và lời cảm ơn.",
};

export default function CreditsPage() {
  return (
    <MarketingSubpageShell title="Credits">
      <p>
        <strong>anthichtuhoc</strong>, tiền thân là một fanpage trên mạng xã hội, lập ra để chia sẻ kiến thức và các
        kinh nghiệm tự học của mình.
      </p>
      <p>
        Vì muốn loại bỏ các hạn chế và thực sự tạo ra một nền tảng để hỗ trợ và tối ưu hoá việc tự học cho mọi người,
        mình quyết định nâng cấp anthichtuhoc thành một webapp hoàn chỉnh, với đầy đủ các tính năng thiết thực.
      </p>
      <p>
        Đây hoàn toàn là một <strong>dự án cá nhân (solo)</strong> do{" "}
        <Link
          href="/gioi-thieu"
          className="font-semibold text-ink underline decoration-[#4b2876]/35 underline-offset-[0.15em] transition hover:decoration-[#4b2876]/70"
        >
          mình
        </Link>{" "}
        xây dựng và duy trì: từ nội dung giới thiệu, trải nghiệm học tập, cho đến phần kỹ thuật triển khai trên web.
      </p>
      <p>
        Mọi quyết định về sản phẩm - thêm tính năng, chỉnh giao diện, hay kết nối với các dịch vụ bên ngoài - đều xuất
        phát từ một giá trị duy nhất:{" "}
        <strong>giúp bạn tìm thấy niềm vui và trở nên tự chủ hơn trên con đường học tập suốt đời.</strong>
      </p>
      <p>
        Nếu bạn thấy chỗ nào hay hoặc cần thêm tính năng gì, hãy nhắn mình qua các kênh mạng xã hội ở ngoài trang chủ.
        Phản hồi của bạn là một phần của “credit” vô hình đối với một dự án nhỏ như thế này.
      </p>
      <p>
        Cảm ơn bạn đã ghé qua <strong>anthichtuhoc</strong>.
      </p>
    </MarketingSubpageShell>
  );
}
