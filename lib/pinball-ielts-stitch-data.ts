/** Nội dung & link Pinball — bullets khớp course info/code.html; URL từ Notion. */

export const PINBALL_BANNER_IMAGE = "/course%202.jpg";

export const PINBALL_TEACHER_SCORES = [
  "IELTS 8.0 Overall",
  "TOEIC 950",
  "Chứng chỉ nghiệp vụ sư phạm",
] as const;

export const PINBALL_TEACHER_IMAGE = "/IMG_4688.JPG";

export const PINBALL_LINKS = {
  entranceReading:
    "https://drive.google.com/file/d/1mNCCWngbI87WE5Z8RvOE2nQ5wqT15VDz/view?usp=sharing",
  entranceListening:
    "https://drive.google.com/drive/folders/1hFZfsix6o0jp9ajO5ARpQmlc3OqnqSha?usp=sharing",
  entranceAnswers:
    "https://drive.google.com/file/d/1x2CoaBL1evX2oKL6ARJ-IbEjcLPIGif7/view?usp=sharing",
  certificates:
    "https://www.notion.so/angia/Th-ng-tin-v-ch-ng-ch-c-a-m-nh-2d8f8af06218810ab297d1d5d1343098?source=copy_link",
  feedback:
    "https://www.notion.so/angia/M-t-s-feedback-c-a-h-c-vi-n-m-nh-2d8f8af06218810c8010f78d8409fee2?source=copy_link",
} as const;

export const PINBALL_ENTRANCE_OPTIONS = [
  { icon: "menu_book", label: "Đọc", href: PINBALL_LINKS.entranceReading },
  { icon: "headphones", label: "Nghe", href: PINBALL_LINKS.entranceListening },
  { icon: "fact_check", label: "Đáp án", href: PINBALL_LINKS.entranceAnswers },
] as const;

export const PINBALL_OVERVIEW = [
  { icon: "flag", label: "Đầu vào & Đầu ra", value: "4.5+ → 6.0+" },
  { icon: "videocam", label: "Hình thức học", value: "Online qua Google Meet" },
  { icon: "groups", label: "Sĩ số lớp", value: "Tối đa 6 học viên" },
  { icon: "schedule", label: "Thời lượng", value: "32 buổi (~64 giờ)" },
  { icon: "assignment", label: "Đánh giá", value: "Mid-term & Final Test" },
  { icon: "cloud_done", label: "Nộp bài tập", value: "Classroom & Drive" },
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

