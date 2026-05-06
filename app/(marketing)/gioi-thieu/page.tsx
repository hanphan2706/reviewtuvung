import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { MarketingSubpageShell } from "@/components/marketing-subpage-shell";

export const metadata: Metadata = {
  title: `Giới thiệu | ${LANDING.brand}`,
  description:
    "Ân — giảng dạy tiếng Anh, TOEIC 950, IELTS 8.0; chia sẻ background và những điều rút ra từ hành trình học và dạy.",
};

const introLeadClass =
  "text-lg font-semibold leading-snug tracking-[-0.03em] text-ink md:text-xl";

export default function GioiThieuPage() {
  return (
    <MarketingSubpageShell title="Giới thiệu">
      <p className={introLeadClass}>
        Mình là Ân. Mình có 950 TOEIC và 8.0 IELTS.
      </p>

      <p>
        Sơ qua background thì mình là sinh viên ngôn ngữ Anh. Tuy nhiên ngay từ ban đầu mình chọn ngành này vì mình
        không biết phải học gì, chứ không phải mình có ý định theo một nghề liên quan mật thiết đến tiếng Anh (đây là
        một câu chuyện khác, dài, mình sẽ chia sẻ sau). Thế nên không có gì bất ngờ khi ra trường mình làm một công việc
        hoàn toàn trái ngành: thương mại điện tử. Và, không hề sử dụng bất kỳ một câu tiếng Anh nào trong suốt gần 2 năm
        đi làm.
      </p>

      <p>
        Nói về đợt đó, mình còn nhớ khi nhận được thông báo trúng tuyển, một niềm vui nguyên sơ như thuỷ triều không
        biết ở đâu ập đến, ấm áp. Khi ấy là một trong những khoảnh khắc hiếm hoi mình thấy vui và tự hào đến vậy. Sau
        này mình thấy buồn nhiều hơn là vui (dân gian hay nói là đa sầu đa cảm) :D.
      </p>

      <p>
        Cũng nhờ công việc này mà mình phát hiện thêm một sở thích khác: mình thích startup, hoặc đơn giản là làm cái gì
        đó của riêng mình. Rồi thì mình cũng gầy dựng một tiệm online nho nhỏ và bắt đầu hành trình mới.
      </p>

      <p>
        Tua nhanh quá trình thì nói chung là, mình quyết định tham gia lại vào thị trường lao động vì sợ bị đào thải. Và
        mình chọn giảng dạy chứ không đi làm văn phòng nữa.
      </p>

      <p>
        Tất nhiên, phải cần có chứng chỉ để bù đắp cho việc thiếu kinh nghiệm giảng dạy. Mình chưa thi IELTS bao giờ, và
        chỉ thi TOEIC đúng một lần để ra trường. Nên gần như mình chỉ có một lựa chọn, thi TOEIC điểm cao, hoặc là học
        IELTS cho đàng hoàng rồi lấy ít nhất 8.0.
      </p>

      <p>
        Khi luyện đề thì điểm số mình tầm khoảng 890 - 930 gì đó cho 3 đề. Thế là mình đi thi luôn. Bùm. 950. Mặc dù
        không quá vượt trội nhưng đối với mình tại thời điểm đó thì cũng ổn rồi.
      </p>

      <p>
        Và bây giờ, mình đang chập chững bước đi trên con đường giảng dạy, áp lực hơn, gò bó hơn nhưng mình có thể ngẩng
        cao đầu nói rằng mình yêu thích công việc này. Chứ không phải vì ép buộc hay do không biết bản thân thích gì như
        ngày xưa nữa.
      </p>

      <p className={`${introLeadClass} mt-8 scroll-mt-28`}>
        Rồi thì, điều quan trọng nhất mình rút ra được từ trải nghiệm cá nhân là gì?
      </p>
      <ol className="mt-4 list-decimal space-y-4 pl-5 marker:font-semibold marker:text-ink">
        <li className="pl-2">
          Không bao giờ là quá muộn để bắt đầu chuyện gì đó. Chỉ cần có quyết tâm. Và tính kỷ luật.
        </li>
        <li className="pl-2">
          Khi học ngôn ngữ vì chính ngôn ngữ, không phải học vẹt, học mẹo, hay luyện đề, thì sau một thời gian dài, ngôn
          ngữ vẫn sẽ ở lại với bạn. Tất nhiên nó sẽ bớt lưu loát hơn, nhưng nó chắc chắn sẽ không mất đi. Lý do vì sao bạn
          học xong một khoá, rồi nghỉ một thời gian, là quên sạch béng? Vì bạn học chưa đủ nhiều, và học chưa đúng cách.
        </li>
        <li className="pl-2">
          Nếu cả đời này không rực rỡ thì sao? Mình từng hỏi bản thân câu đó, rất nhiều lần trong quá khứ, và mình không
          tìm thấy câu trả lời. Nhưng qua từng ấy thời gian, mình có thể khẳng định một vài thứ. Mình thích học, thích đọc,
          thích mày mò tìm tòi những điều mới. Mình thích dạy, mình thích giúp đỡ mọi người, mình cũng thích startup.
          Mình muốn làm một người tử tế. Cho nên, sống mà có thể nhận thức và rung cảm trước nhiều thứ trên đời, với mình
          đã là rực rỡ rồi.
        </li>
      </ol>
    </MarketingSubpageShell>
  );
}
