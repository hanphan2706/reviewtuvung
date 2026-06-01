import type { CourseStitchConfig } from "@/lib/course-stitch-types";
import {
  PINBALL_LINKS,
  PINBALL_TEACHER_IMAGE,
  PINBALL_TEACHER_SCORES,
} from "@/lib/pinball-ielts-stitch-data";

const EXAMENGLISH_GRAMMAR = "https://www.examenglish.com/leveltest/grammar_level_test.htm";
const EXAMENGLISH_LISTENING = "https://www.examenglish.com/leveltest/listening_level_test.htm";

export const GENERAL_ENGLISH_CURRICULUM = [
  {
    id: "ge-speaking",
    title: "Speaking",
    icon: "mic",
    bullets: [
      {
        text: "Trọng tâm lớn vào khả năng giao tiếp hiệu quả trong các ",
        strong: "tình huống thực tế",
      },
      { text: "Những ", strong: "mẫu câu", suffix: " giao tiếp hằng ngày giúp bạn nói tự tin và tự nhiên hơn" },
      {
        text: "Các hoạt động giao tiếp và bài tập nhóm giúp học viên phát triển kỹ năng ",
        strong: "tư duy biện luận",
        suffix: " và làm việc nhóm",
      },
    ],
  },
  {
    id: "ge-pronunciation",
    title: "Pronunciation",
    icon: "record_voice_over",
    bullets: [
      { text: "Phát âm chuẩn tiếng Anh Mỹ" },
      { text: "Phát âm ", strong: "đúng", suffix: " phụ âm và nguyên âm trong tiếng Anh" },
      { text: "Nhấn đúng trọng âm từ, câu và nói có nhịp điệu" },
    ],
  },
  {
    id: "ge-lr",
    title: "Listening & Reading",
    icon: "menu_book",
    bullets: [
      {
        text: "Học nghe và đọc từ những ",
        strong: "kiến thức, văn hóa, và các câu chuyện",
        suffix: " từ khắp nơi trên thế giới thông qua các bài học từ BBC",
      },
      {
        strong: "8 video",
        suffix: " với những chủ đề đa dạng khác nhau cho một khoá, ",
      },
      { strong: "bổ trợ thêm cho việc tự học" },
    ],
  },
  {
    id: "ge-vocabulary",
    title: "Vocabulary",
    icon: "translate",
    bullets: [
      { strong: "Phương pháp học từ vựng hiệu quả" },
      { text: "Từ vựng theo chủ đề" },
      { text: "Cấu tạo từ" },
      { text: "Sự đa dạng và phong cách ngôn ngữ" },
      { text: "Tài liệu bổ trợ cho việc tự học" },
    ],
  },
  {
    id: "ge-grammar",
    title: "Grammar",
    icon: "school",
    bullets: [
      {
        text: "Học ngữ pháp ",
        strong: "thông qua tình huống",
        suffix: ", đơn giản, dễ hiểu, ",
      },
      { strong: "dễ sử dụng" },
      { text: "Dùng ngữ pháp để nói và viết một cách mạch lạc" },
      { strong: "Bỏ qua được tâm lý", suffix: ' “nói nhưng sợ sai ngữ pháp”' },
    ],
  },
] as const;

export const GENERAL_ENGLISH_TUITION_PANELS = [
  {
    id: "ge-tuition-0",
    title: "Học là phải sử dụng được",
    bodyHtml:
      'Mình luôn quan niệm <mark class="highlight-orange"><strong>“học là phải sử dụng được”</strong></mark>, nên mình không chỉ dạy tiếng Anh, mà còn là <mark class="highlight-orange"><strong>tư duy</strong></mark> và cách học nữa.<div dir="auto" style="display:contents"><ul class="bulleted-list"><li style="list-style-type:circle">Các phương pháp như <em><mark class="highlight-orange">nghe chép chính tả</mark></em> hay <em><mark class="highlight-orange">học nói theo sample</mark></em> có thật sự hiệu quả không?</li></ul></div>',
  },
  {
    id: "ge-tuition-1",
    title: "Tương tác trên lớp",
    bodyHtml:
      'Lớp học luôn được thiết kế để bạn <mark class="highlight-red"><strong>tương tác</strong></mark> và tạo cơ hội để bạn <mark class="highlight-red"><strong>sử dụng tiếng Anh</strong></mark> nhiều nhất có thể, chứ không phải “cô giảng, trò nghe”. Bạn có thể xem thử <mark class="highlight-blue"><a href="https://drive.google.com/file/d/1D9VXInTUNDcpF0fDffN2VwgHHL3THTPk/view?usp=sharing">recording</a></mark> một buổi học của mình.',
  },
  {
    id: "ge-tuition-2",
    title: "Phương pháp học tập hữu ích",
    bodyHtml:
      'Giới thiệu rất nhiều <mark class="highlight-brown"><strong>phương pháp học tập hữu ích</strong></mark> để hỗ trợ bạn tự học tại nhà (active learning, active recall, Spaced-repetition, chatGPT, Gemini, Ebbinghaus, v.v…). Mình đã từng chia sẻ kha khá về các phương pháp này trên trang cá nhân, bạn có thể xem thử <mark class="highlight-blue"><a href="https://www.facebook.com/share/p/19u1mgaaT2/">ở đây</a></mark>.<div dir="auto" style="display:contents"><ul class="bulleted-list"><li style="list-style-type:circle">Bạn có biết thật ra <mark class="highlight-blue"><a href="https://www.facebook.com/share/p/1EUcFLmCEX/">học cũng là một kỹ năng</a></mark> không? Và mình sẽ giúp bạn tìm ra cách học phù hợp với bản thân.</li></ul></div>',
  },
  {
    id: "ge-tuition-3",
    title: "Bài tập và feedback",
    bodyHtml:
      '<mark class="highlight-pink"><strong>Luôn có bài tập</strong></mark> sau mỗi buổi học và sau mỗi unit để bạn ôn lại kiến thức và nhớ lâu hơn. Tất cả đều được feedback chi tiết (dựa trên bài làm của bạn), bạn được biết level hiện tại ở đâu, tại sao chưa lên level tiếp theo, và được <mark class="highlight-pink"><strong>định hướng cách để cải thiện</strong></mark>.',
  },
  {
    id: "ge-tuition-4",
    title: "Speak Out & tài liệu",
    bodyHtml:
      '<mark class="highlight-default">Tài liệu uy tín từ NXB lớn:</mark><mark class="highlight-purple"><strong> Speak out của Pearson (3rd edition), </strong></mark><mark class="highlight-default">kết hợp với tài liệu do mình biên soạn thêm.</mark> Xem thử một <mark class="highlight-default">sample</mark> <mark class="highlight-blue"><a href="https://drive.google.com/file/d/15x3o6SzxI-G365tkAxzVu6dwNC61Srl5/view">ở đây</a></mark>.<div dir="auto" style="display:contents"><ul class="bulleted-list"><li style="list-style-type:circle">Khi nói đến tiếng Anh giao tiếp thì Speak out là một trong các bộ nổi tiếng nhất. Chỉ riêng việc được <mark class="highlight-purple"><strong>tái bản đến lần thứ 3</strong></mark> chứ không bị "bỏ xó" như nhiều giáo trình khác cũng đã đủ chứng minh uy tín.</li></ul></div><div dir="auto" style="display:contents"><ul class="bulleted-list"><li style="list-style-type:circle">Ngoài ra mình cũng gửi cho học viên <mark class="highlight-purple"><strong>các bộ sách</strong></mark> xịn xò như English Grammar In Use, English Vocabulary In Use… <mark class="highlight-purple"><strong>(bản đẹp full HD)</strong></mark></li></ul></div>',
  },
  {
    id: "ge-tuition-5",
    title: "Sĩ số nhỏ (tối đa 4 học viên)",
    bodyHtml:
      'Lớp học <mark class="highlight-teal"><strong>sỉ số nhỏ</strong></mark>, không đại trà, tối đa 4 học viên, giúp mình <mark class="highlight-teal"><strong>đảm bảo chất lượng khoá học</strong></mark> và kiểm soát năng lực của lớp.',
  },
  {
    id: "ge-tuition-6",
    title: "Recording & thanh toán học phí",
    bodyHtml:
      'Bạn có thể xem <mark class="highlight-blue"><a href="https://drive.google.com/file/d/1D9VXInTUNDcpF0fDffN2VwgHHL3THTPk/view?usp=sharing">recording</a></mark> một buổi học của mình, sau đó nếu cảm thấy hài lòng bạn có thể hoàn thành học phí trước <mark class="highlight-blue"><strong>50% hoặc 100% cho cả khoá.</strong></mark>',
  },
] as const;

export const GENERAL_ENGLISH_STITCH_CONFIG: CourseStitchConfig = {
  slug: "general-english",
  hero: {
    title: "General English (A0 - C1)",
    subtitle:
      "Phù hợp với các bạn cần cải thiện tiếng Anh để vận dụng trong đời sống, học tập, công việc; nhưng không cần thi chứng chỉ.",
    bannerImage: "/course%206.jpg",
  },
  overview: [
    {
      icon: "flag",
      label: "Mục tiêu",
      value: "Sử dụng được tiếng Anh theo ý muốn",
    },
    { icon: "videocam", label: "Hình thức học", value: "Online qua Google Meet" },
    { icon: "groups", label: "Sĩ số lớp", value: "Tối đa 4 học viên" },
    { icon: "schedule", label: "Thời lượng", value: "24 buổi (~36 giờ)" },
    { icon: "assignment", label: "Đánh giá", value: "Mid-term & Final Test" },
    { icon: "cloud_done", label: "Nộp bài tập", value: "Classroom & Drive" },
  ],
  schedulePill: "Ngày và giờ học dự kiến: Lớp tháng 4/2026 đã khai giảng",
  curriculum: {
    intro: "Lộ trình tiêu chuẩn, bao gồm 6 cấp độ từ A1 (mất gốc) – C1 (nâng cao).",
    items: GENERAL_ENGLISH_CURRICULUM,
    defaultOpenId: "ge-speaking",
  },
  entrance: {
    paragraphs: [
      "Bạn vào link này để làm bài test từ vựng / ngữ pháp / nghe, và gửi kết quả cho mình nha.",
    ],
    options: [
      { icon: "menu_book", label: "Từ vựng /\u00A0Ngữ pháp", href: EXAMENGLISH_GRAMMAR },
      { icon: "headphones", label: "Nghe", href: EXAMENGLISH_LISTENING },
    ],
  },
  tuitionPanels: GENERAL_ENGLISH_TUITION_PANELS,
  pricing: {
    amount: "4.950.000đ",
    amountSuffix: "/ khoá",
    note: "Bạn có thể thanh toán học phí trước 50%\u00A0hoặc\u00A0100%.",
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
