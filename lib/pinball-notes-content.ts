/** Lưu ý quan trọng — map Notion pinball-ielts (1 bullet = 1 section trong khung). */

export const PINBALL_NOTES_INTRO_HTML =
  "Mình không cam kết đầu ra vì kết quả IELTS phụ thuộc vào rất nhiều lý do, nhưng mình đảm bảo bạn sẽ thấy được sự tiến bộ nếu như chịu khó đi theo lộ trình và hoàn thành đầy đủ các đầu mục. Vì vậy để <strong>đảm bảo khoá học diễn ra suôn sẻ</strong> và thực sự <strong>thấy được sự tiến bộ</strong>, các bạn hãy cố gắng:";

export type PinballNotesSection = {
  id: string;
  title: string;
  bodyHtml: string;
};

export const PINBALL_NOTES_SECTIONS: PinballNotesSection[] = [
  {
    id: "self-study",
    title: "Dành thời gian để tự học ngoài giờ lên lớp",
    bodyHtml:
      "<p>Ôn bài cũ, làm bài tập về nhà, xem lại feedback Speaking / Writing và tự thực hành lại, đồng thời luyện thêm tài liệu bổ trợ được mình đề xuất. Để tăng 1 band trong IETLS cần 200 giờ thực hành, vì vậy chỉ việc học trên lớp là không đủ.</p>",
  },
  {
    id: "attendance",
    title: "Tham gia đầy đủ và đúng giờ các buổi học",
    bodyHtml:
      "<p>Trừ trường hợp bất khả kháng, bạn được khuyến khích duy trì nhịp học đều đặn, tránh đứt gãy quá trình luyện tập.</p>",
  },
  {
    id: "feedback",
    title: "Chủ động nhận và cải thiện dựa trên feedback",
    bodyHtml:
      "<p>Đây là một trong các điểm then chốt giúp tiến bộ nhanh hơn, vì nếu chỉ có làm bài nhưng không giải quyết những lỗi hay mắc phải thì cũng sẽ không thay đổi được gì.</p>",
  },
  {
    id: "ask-questions",
    title: "Đừng ngại đặt câu hỏi / trò chuyện với mình",
    bodyHtml:
      "<p>Không chỉ là về tiếng Anh, mà đôi lúc còn có thể là mọi chủ đề khác nữa. Vì ngoài việc nói về IELTS, nếu được cùng mọi người thoải mái nói về đủ thứ trên trời dưới đất, thì còn vui hơn.</p>",
  },
];
