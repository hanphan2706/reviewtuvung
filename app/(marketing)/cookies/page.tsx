import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { MarketingSubpageShell } from "@/components/marketing-subpage-shell";

export const metadata: Metadata = {
  title: `Tuỳ chọn cookie | ${LANDING.brand}`,
  description: "Cookie và lưu trữ cục bộ trên anthichtuhoc — mục đích và cách bạn kiểm soát.",
};

export default function CookiesPage() {
  return (
    <MarketingSubpageShell title="Tuỳ chọn cookie">
      <p>
        Trang này mô tả cách Website <strong>anthichtuhoc</strong> có thể dùng cookie và công nghệ lưu trữ tương tự
        (local storage, session storage) để vận hành trơn tru và ghi nhớ tuỳ chọn của bạn.
      </p>

      <h2>Cookie là gì?</h2>
      <p>
        Cookie là các tệp nhỏ gửi xuống trình duyệt để nhớ trạng thái phiên, đăng nhập hoặc tuỳ chọn giao diện. Một số
        cookie là cần thiết cho chức năng; các cookie khác chỉ bật khi có lợi ích rõ ràng hoặc khi bạn đồng ý (tuỳ cách
        triển khai từng thời điểm).
      </p>

      <h2>Nhóm cookie có thể được dùng</h2>
      <ul>
        <li>
          <strong>Cần thiết:</strong> duy trì phiên an toàn, chống giả mạo yêu cầu, cân bằng tải hoặc ghi nhớ bước
          trong luồng đăng nhập.
        </li>
        <li>
          <strong>Chức năng:</strong> nhớ tuỳ chọn như ngôn ngữ hiển thị hoặc trạng thái đã đọc thông báo (nếu có).
        </li>
        <li>
          <strong>Đo lường (nếu sau này có):</strong> hiểu hành vi tổng hợp (trang xem, lỗi) để cải thiện hiệu năng —
          thường được bật có kiểm soát và không nhằm bán dữ liệu.
        </li>
      </ul>

      <h2>Lưu trữ cục bộ trong ứng dụng</h2>
      <p>
        Một số tính năng (ôn tập từ vựng, đồng bộ khi đăng nhập) có thể lưu dữ liệu trên thiết bị để phản hồi nhanh hoặc
        hoạt động khi mất mạng trong phạm vi đã thiết kế. Dữ liệu nhạy cảm được ưu tiên đồng bộ qua máy chủ khi bạn đã
        xác thực.
      </p>

      <h2>Cách kiểm soát</h2>
      <p>
        Bạn có thể xoá cookie và dữ liệu trang trong cài đặt trình duyệt (Chrome, Safari, Firefox…). Lưu ý: xoá cookie
        có thể đăng xuất khỏi phiên hoặc làm mất một số tuỳ chọn đã lưu. Bạn cũng có thể dùng chế độ riêng tư/tạm thời
        để duyệt mà ít lưu vết hơn.
      </p>

      <h2>Liên hệ</h2>
      <p>
        Nếu bạn có thắc mắc về cookie hoặc muốn hạn chế một loại cụ thể, hãy liên hệ qua kênh Facebook chính thức của
        dự án — mình sẽ phản hồi trong khả năng có thể.
      </p>

      <p className="text-sm text-zinc-500">
        Trang này có thể được tinh chỉnh khi Website thêm công cụ đồng ý cookie hoặc phân tích mới; phần “Cập nhật”
        trên Chính sách quyền riêng tư cũng áp dụng cho các thay đổi liên quan.
      </p>
    </MarketingSubpageShell>
  );
}
