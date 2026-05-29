import type { CourseStitchConfig } from "@/lib/course-stitch-types";
import {
  PINBALL_LINKS,
  PINBALL_TEACHER_IMAGE,
  PINBALL_TEACHER_SCORES,
} from "@/lib/pinball-ielts-stitch-data";

export const COACHING_TUITION_PANELS = [
  {
    id: "coaching-tuition-0",
    title: "Học là phải sử dụng được",
    bodyHtml:
      'Mình luôn quan niệm <mark class="highlight-orange"><strong>“học là phải sử dụng được”</strong></mark>, nên mình không chỉ dạy tiếng Anh, cách làm bài IELTS, mà còn là <mark class="highlight-orange"><strong>tư duy</strong></mark> và cách học nữa.<div dir="auto" style="display:contents"><ul class="bulleted-list"><li style="list-style-type:circle">Các phương pháp như <em><mark class="highlight-orange">nghe chép chính tả</mark></em> hay <em><mark class="highlight-orange">học nói theo sample</mark></em> có thật sự hiệu quả không?</li></ul></div>',
  },
  {
    id: "coaching-tuition-1",
    title: '"Biết gì thì dạy hết"',
    bodyHtml:
      'Mình dạy với tâm thế <mark class="highlight-red"><strong>“biết gì thì dạy hết”</strong></mark>, nên bạn nào aim thấp thì vẫn đủ kiến thức cơ bản, bạn nào có khả năng ngôn ngữ tốt hơn thì việc vượt band là <mark class="highlight-red"><strong>hoàn toàn khả thi.</strong></mark>',
  },
  {
    id: "coaching-tuition-2",
    title: "Phương pháp học tập hữu ích",
    bodyHtml:
      'Giới thiệu rất nhiều <mark class="highlight-brown"><strong>phương pháp học tập hữu ích</strong></mark> để hỗ trợ bạn tự học tại nhà (active learning, active recall, Spaced-repetition, chatGPT, Gemini, Ebbinghaus, v.v…). Mình đã từng chia sẻ kha khá về các phương pháp này trên trang cá nhân, bạn có thể xem thử <mark class="highlight-blue"><a href="https://www.facebook.com/share/p/19u1mgaaT2/">ở đây</a></mark>.<div dir="auto" style="display:contents"><ul class="bulleted-list"><li style="list-style-type:circle">Bạn có biết thật ra <mark class="highlight-blue"><a href="https://www.facebook.com/share/p/1EUcFLmCEX/">học cũng là một kỹ năng</a></mark> không? Và mình sẽ giúp bạn tìm ra cách học phù hợp với bản thân.</li></ul></div>',
  },
  {
    id: "coaching-tuition-3",
    title: "Tài liệu uy tín từ NXB lớn",
    bodyHtml:
      '<mark class="highlight-purple"><strong>Tài liệu uy tín từ NXB lớn</strong></mark>, kết hợp với tài liệu do mình biên soạn thêm.<div dir="auto" style="display:contents"><ul class="bulleted-list"><li style="list-style-type:circle">Tài liệu mình cập nhật và sửa đổi liên tục dựa trên performance của lớp, nên hầu như lúc nào cũng up to date và đầy những thứ mới mẻ hay ho sau một thời gian ngắn.</li></ul></div><div dir="auto" style="display:contents"><ul class="bulleted-list"><li style="list-style-type:circle">Ngoài ra mình cũng gửi cho học viên <mark class="highlight-purple"><strong>các bộ sách</strong></mark> xịn xò như English Grammar In Use, English Vocabulary In Use, Vocabulary for IELTS… <mark class="highlight-purple"><strong>(bản đẹp full HD)</strong></mark></li></ul></div>',
  },
] as const;

export const COACHING_STITCH_CONFIG: CourseStitchConfig = {
  slug: "coaching",
  hero: {
    title: "Coaching 1-1",
    subtitle:
      "Như tên gọi, khoá học sẽ hoàn toàn cá nhân hoá và tối đa thời gian luyện tập cho bạn.",
    bannerImage: "/course%203.jpg",
  },
  overview: [
    {
      icon: "person",
      label: "Phù hợp với",
      value: "Học viên cần tối đa hoá thời gian và lộ trình",
    },
    { icon: "videocam", label: "Hình thức học", value: "Online qua Google Meet" },
    { icon: "groups", label: "Sĩ số", value: "1-1 cùng giáo viên" },
    { icon: "schedule", label: "Thời lượng", value: "Tuỳ nhu cầu & lịch trình của bạn" },
    { icon: "assignment", label: "Đánh giá", value: "Nhiều bài test theo lộ trình cá nhân" },
    { icon: "cloud_done", label: "Nộp bài tập", value: "Classroom & Drive" },
  ],
  schedulePill: "Khung giờ trống dự kiến: Thứ 2 đến Thứ 6 (9:00 – 11:00)",
  tuitionPanels: COACHING_TUITION_PANELS,
  pricing: {
    amount: "200.000đ - 250.000đ",
    amountSuffix: "/ giờ",
  },
  teacher: {
    image: PINBALL_TEACHER_IMAGE,
    greeting: "Chào bạn, mình là Ân.",
    scores: PINBALL_TEACHER_SCORES,
    paragraphs: [
      "Background của mình là sinh viên ngành ngôn ngữ Anh. Sau khi tốt nghiệp, mình đã làm nhiều thứ, để rồi cuối cùng quay trở về làm một giáo viên tiếng Anh. Và đây là một trong những điều mình cảm thấy thực sự muốn và nên làm.",
      "Mình quan niệm: Khi bạn học vì ngôn ngữ, ngôn ngữ sẽ ở lại với bạn.",
      "Mình mong rằng thông qua các khoá học với mình, bạn cũng sẽ cảm thấy IELTS hay tiếng Anh cũng chỉ là những điều rất đỗi bình thường.",
    ],
    links: [
      { icon: "school", label: "Thông tin về chứng chỉ của mình", href: PINBALL_LINKS.certificates },
      { icon: "newspaper", label: "Một số feedback của học viên mình", href: PINBALL_LINKS.feedback },
    ],
  },
};
