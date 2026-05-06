import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { MarketingSubpageShell } from "@/components/marketing-subpage-shell";

export const metadata: Metadata = {
  title: `Chính sách quyền riêng tư | ${LANDING.brand}`,
  description: "Cách ANTHICHTUHOC thu thập và xử lý thông tin khi bạn dùng website và các dịch vụ liên quan.",
};

export default function PrivacyPage() {
  return (
    <MarketingSubpageShell title="Chính sách quyền riêng tư">
      <p>
        Trang <strong>anthichtuhoc</strong> (“Website”) là không gian học tập và giới thiệu các hoạt động giáo dục
        của Ân. Chính sách này giải thích thông tin có thể được xử lý khi bạn truy cập Website, đăng nhập (nếu có),
        hoặc dùng các tính năng kèm theo (ví dụ ôn tập từ vựng). Chính sách có thể được cập nhật; ngày áp dụng gần
        nhất là phần đầu trang hoặc trong phần “Cập nhật” bên dưới.
      </p>

      <h2>Phạm vi</h2>
      <p>
        Chính sách áp dụng cho việc truy cập website công khai, các trang marketing (giới thiệu khoá học), và các
        phần ứng dụng yêu cầu tài khoản khi chúng được bật. Liên kết ra bên thứ ba (Notion, Facebook, Instagram…)
        có điều khoản riêng; bạn nên đọc thêm tại nơi đích.
      </p>

      <h2>Dữ liệu có thể được xử lý</h2>
      <ul>
        <li>
          <strong>Dữ liệu kỹ thuật và nhật ký:</strong> địa chỉ IP rút gọn, loại trình duyệt/thiết bị, thời gian
          truy cập, trang đích và lỗi kỹ thuật — nhằm vận hành Website an toàn và ổn định.
        </li>
        <li>
          <strong>Tài khoản và nội dung học tập (khi đăng nhập):</strong> địa chỉ email hoặc định danh do nhà cung
          cấp đăng nhập cấp, dữ liệu bạn tạo trong ứng dụng (ví dụ bộ thẻ từ, tiến độ ôn tập) để đồng bộ giữa các
          phiên và phục vụ đúng chức năng đã mô tả trong giao diện.
        </li>
        <li>
          <strong>Liên hệ:</strong> nội dung bạn gửi qua kênh công khai (ví dụ tin nhắn trên Facebook) hoặc email —
          chỉ để trả lời và xử lý yêu cầu hợp lệ.
        </li>
      </ul>

      <h2>Cơ sở pháp lý và mục đích</h2>
      <p>
        Dữ liệu được xử lý để (1) cung cấp và cải thiện dịch vụ, (2) bảo mật và chống lạm dụng, (3) tuân thủ nghĩa vụ
        pháp lý khi có. Không bán dữ liệu cá nhân của bạn. Không dùng cho quảng cáo gây hiểu nhầm hoặc mục đích không
        tương thích với bản chất Website.
      </p>

      <h2>Nhà cung cấp và lưu trữ</h2>
      <p>
        Website có thể dùng nhà cung cấp lưu trữ/đăng nhập và cơ sở hạ tầng đám mây (ví dụ dịch vụ xác thực và cơ sở
        dữ liệu). Các bên này chỉ nhận dữ liệu cần thiết để vận hành và bị ràng buộc bằng hợp đồng hoặc điều khoản bảo
        vệ tương đương.
      </p>

      <h2>Thời gian lưu</h2>
      <p>
        Dữ liệu nhật ký ngắn hạn có thể được giữ theo chu kỳ kỹ thuật hợp lý. Dữ liệu tài khoản và học tập được giữ
        trong khi bạn còn dùng dịch vụ và một khoảng thời gian sau đó nếu cần để sao lưu hoặc tuân thủ pháp luật; bạn
        có thể yêu cầu xoá khi không còn ràng buộc kỹ thuật/pháp lý.
      </p>

      <h2>Quyền của bạn</h2>
      <p>
        Tùy luật áp dụng, bạn có thể được quyền truy cập, chỉnh sửa, xoá, hạn chế xử lý hoặc phản đối một phần xử lý,
        và khiếu nại với cơ quan có thẩm quyền. Để thực hiện, hãy liên hệ qua kênh mình công bố trên Website hoặc
        Facebook chính thức của dự án.
      </p>

      <h2>Trẻ em</h2>
      <p>
        Website không nhắm cố ý thu thập dữ liệu từ trẻ em dưới độ tuổi mà pháp luật quy định cần sự đồng ý của cha
        mẹ. Nếu bạn là phụ huynh và phát hiện trường hợp như vậy, hãy liên hệ để được xử lý.
      </p>

      <h2>Cập nhật</h2>
      <p>
        Khi có thay đổi quan trọng (ví dụ phạm vi dữ liệu hoặc nhà cung cấp mới), mình sẽ cập nhật trang này và/hoặc
        thông báo rõ ràng trên Website.
      </p>
    </MarketingSubpageShell>
  );
}
