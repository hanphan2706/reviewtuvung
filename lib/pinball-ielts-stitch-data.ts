/** Nội dung & link Pinball — bullets khớp course info/code.html; URL từ Notion. */

export const PINBALL_BANNER_IMAGE = "/course%202.jpg";

export const PINBALL_TEACHER_SCORES = [
  "IELTS 8.0 Overall",
  "TOEIC 950",
  "Chứng chỉ nghiệp vụ sư phạm",
] as const;

export const PINBALL_TEACHER_IMAGE = "/IMG_4688.JPG";

export const PINBALL_LINKS = {
  entranceReading: "/tu-hoc/luyen-doc/luyen-de-ielts/pinball-entry/lam-bai",
  entranceListening: "/tu-hoc/luyen-nghe/luyen-de-ielts/pinball-entry/lam-bai",
  certificates:
    "https://www.notion.so/angia/Th-ng-tin-v-ch-ng-ch-c-a-m-nh-2d8f8af06218810ab297d1d5d1343098?source=copy_link",
  feedback:
    "https://www.notion.so/angia/M-t-s-feedback-c-a-h-c-vi-n-m-nh-2d8f8af06218810c8010f78d8409fee2?source=copy_link",
} as const;

export const PINBALL_ENTRANCE_OPTIONS = [
  { icon: "headphones", label: "Nghe", href: PINBALL_LINKS.entranceListening },
  { icon: "menu_book", label: "Đọc", href: PINBALL_LINKS.entranceReading },
] as const;

export const PINBALL_OVERVIEW = [
  { icon: "flag", label: "Đầu vào & Đầu ra", value: "4.5+ → 6.0+" },
  { icon: "videocam", label: "Hình thức học", value: "Online qua Google Meet" },
  { icon: "groups", label: "Sĩ số lớp", value: "Tối đa 4 học viên" },
  { icon: "schedule", label: "Thời lượng", value: "32 buổi (~64 giờ)" },
  { icon: "assignment", label: "Đánh giá", value: "Mid-term & Final Test" },
  { icon: "cloud_done", label: "Nộp bài tập", value: "Classroom & anthichtuhoc" },
] as const;

export const PINBALL_WHATS_NEW = [
  {
    icon: "menu_book",
    title: "Học liệu được nâng cấp",
    body: "Rất nhiều mảng kiến thức được tinh gọn và/hoặc được nâng cấp dựa trên góc nhìn thực tế của học viên.",
  },
  {
    icon: "construction",
    title: "Công cụ ôn luyện",
    body: "Được sử dụng miễn phí và nhanh nhất toàn bộ các tính năng trong mục Tự học trên webapp này.",
  },
  {
    icon: "database",
    title: "Ngân hàng đề",
    body: "Cập nhật xu hướng các đề thi mới nhất với giải thích chi tiết.",
  },
  {
    icon: "library_books",
    title: "Thư viện bài mẫu",
    body: "Kho bài nói và viết band 7+ uy tín, chất lượng từ mình cũng như các cựu giám khảo.",
  },
] as const;

/** Khớp nội dung Notion gốc (pinball-ielts.html) — đủ bullet từng kỹ năng */
export const PINBALL_CURRICULUM = [
  {
    id: "acc-speaking",
    title: "Speaking",
    icon: "mic",
    bullets: [
      { text: "Làm quen với tất cả các câu hỏi từ Part 1 đến Part 3" },
      { text: "Trình bày ý tưởng một cách logic và mạch lạc" },
      {
        text: "Học cách mở rộng câu trả lời một cách tự nhiên ",
        strong: "từ chính ý tưởng của mình",
        suffix:
          " (không đọc, không học thuộc, không sượng, không như một con robot)",
      },
    ],
  },
  {
    id: "acc-writing",
    title: "Writing",
    icon: "edit_note",
    bullets: [
      { text: "Làm quen với các dạng bài trong IELTS Writing Task 1 và Task 2" },
      {
        text: 'Biết phát triển ý tưởng cho mọi đề bài mà không sợ cảm giác "tủ đè"',
      },
      {
        strong: "Có khả năng lập luận thực sự vững và chắc",
        suffix: ' chứ không phải chỉ "viết theo mẫu"',
      },
      {
        strong: 'Biến kỹ năng viết trở nên "cũng dễ thôi mà"',
        suffix:
          " với các cấu trúc ngữ pháp và từ vựng học thuật chuẩn xác, rõ ràng, dễ áp dụng",
      },
    ],
  },
  {
    id: "acc-lr",
    title: "Listening & Reading",
    icon: "menu_book",
    bullets: [
      { text: "Các bài nghe & đọc học thuật chuẩn format IELTS" },
      { text: "Tài liệu bổ trợ cho việc tự học" },
      { text: "Làm quen với tất cả dạng bài trong IELTS Listening & Reading" },
      {
        strong:
          "Không học tách rời, mà hiểu và tận dụng được bản chất các kỹ năng liên quan để đọc và nghe tốt hơn",
      },
    ],
  },
  {
    id: "acc-pronunciation",
    title: "Pronunciation",
    icon: "record_voice_over",
    bullets: [
      { text: "Phát âm đúng các âm trong tiếng Anh" },
      { text: "Nhấn đúng trọng âm từ, câu và nói có nhịp điệu" },
      { strong: "Dùng phát âm để bổ trợ cho các kỹ năng còn lại" },
      {
        strong:
          'Giải quyết vấn đề muôn thuở "tại sao mình cũng nói tiếng Anh, nhưng tiếng Anh của mình \'không hay\' hoặc \'khó hiểu\'?"',
      },
    ],
  },
  {
    id: "acc-vocabulary",
    title: "Vocabulary",
    icon: "translate",
    bullets: [
      { text: "Phương pháp học từ vựng hiệu quả" },
      { text: "Từ vựng theo chủ đề" },
      { text: "Cấu tạo từ" },
      {
        strong:
          "Sự đa dạng và phong cách ngôn ngữ (thường là cái ngăn học viên bứt lên 7+)",
      },
      { text: "Tài liệu bổ trợ cho việc tự học" },
    ],
  },
  {
    id: "acc-grammar",
    title: "Grammar",
    icon: "spellcheck",
    bullets: [
      {
        strong:
          'Ngữ pháp của mình không bắt đầu bằng công thức, mà bắt đầu bằng câu hỏi: "Người bản ngữ đang nghĩ gì khi họ nói câu này?"',
      },
      {
        segments: [
          { text: "Thay vì học S + V + O, học viên sẽ hiểu " },
          { strong: "vì sao" },
          { text: " lại dùng thì đó, " },
          { strong: "vì sao" },
          { text: " lại đặt tính từ ở vị trí đó, " },
          { strong: "vì sao" },
          { text: " lại chọn the thay vì a, hay " },
          { strong: "vì sao" },
          {
            text: ' một câu nghe "đúng ngữ pháp" nhưng vẫn không tự nhiên',
          },
        ],
      },
      {
        text: "Mỗi chủ điểm đều được giải thích bằng một logic thống nhất, giúp học viên nhìn thấy ngữ pháp như một hệ thống thay vì hàng trăm quy tắc rời rạc cần ghi nhớ",
      },
    ],
  },
] as const;

export const PINBALL_BENEFIT_HIGHLIGHTS = [
  {
    icon: "psychology",
    title: 'Phương pháp "Học là phải dùng được"',
    body: "Nghe chép chính tả và học nói theo sample. Không chỉ dạy IELTS, mà dạy tư duy và cách học ngoại ngữ.",
  },
  {
    icon: "menu_book",
    title: "Tài liệu độc quyền",
    body: "Tặng kèm các bộ sách English Grammar In Use, Vocabulary In Use bản đẹp Full HD.",
  },
  {
    icon: "verified_user",
    title: "Cam kết từ giáo viên",
    body: '"Biết gì thì dạy hết" - đảm bảo lộ trình và sự tiến bộ nếu học viên hoàn thành đầy đủ yêu cầu.',
  },
] as const;

