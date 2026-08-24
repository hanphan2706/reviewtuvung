/**
 * Câu luyện Dịch câu (Việt → Anh).
 * `answerEn` lấy từ model answer trong sample library.
 * `sourceVi`: giọng tự nhiên, nhưng vẫn gần cấu trúc/từ vựng sample để học viên hình dung được từ cần dùng.
 * `lexicalTipCloze` = cùng câu Anh, đục nhiều chỗ nội dung.
 */

export type WritingDichCauItem = {
  id: string;
  /** id sample writing gốc (catalog). */
  sampleId: string;
  sourceVi: string;
  answerEn: string;
  /** Câu Anh tương ứng, nhiều chỗ trống. */
  lexicalTipCloze: string;
};

export const WRITING_DICH_CAU_ITEMS: readonly WritingDichCauItem[] = [
  {
    id: "dc-01",
    sampleId: "w-task2-advertising-sameness",
    sourceVi:
      "Quảng cáo thường bị chỉ trích là làm mất tính cá nhân, vì nó khuyến khích người tiêu dùng chọn cùng một kiểu ngoại hình.",
    answerEn:
      "Advertising is often accused of suppressing individuality by encouraging consumers to adopt the same appearance.",
    lexicalTipCloze:
      "Advertising is often _______ of _______ _______ by _______ consumers to _______ the _______ _______.",
  },
  {
    id: "dc-02",
    sampleId: "w-task2-advertising-sameness",
    sourceVi:
      "Dù thông điệp thương mại có thể tạo ra những xu hướng dễ thấy, tôi vẫn phần lớn không đồng ý rằng chúng nhất định khiến mọi người trông giống nhau, vì quảng cáo hiện đại cũng thúc đẩy nhiều bản sắc khác nhau và người tiêu dùng vẫn được chọn.",
    answerEn:
      "Although commercial messages can produce visible trends, I largely disagree that they inevitably make people look alike, because modern advertising also promotes varied identities and consumers retain choice.",
    lexicalTipCloze:
      "Although _______ _______ can _______ _______ _______, I _______ _______ that they _______ make people look _______, because modern advertising also _______ _______ _______ and consumers _______ _______.",
  },
  {
    id: "dc-03",
    sampleId: "w-task2-advertising-sameness",
    sourceVi:
      "Áp lực này đặc biệt mạnh với thanh thiếu niên, vì họ có thể sợ bị loại khỏi nhóm nếu bỏ qua một xu hướng mà bạn bè đang theo.",
    answerEn:
      "This pressure is especially strong among teenagers, who may fear social exclusion if they ignore a trend followed by their peers.",
    lexicalTipCloze:
      "This _______ is especially _______ among _______, who may _______ _______ _______ if they _______ a _______ _______ by their _______.",
  },
  {
    id: "dc-04",
    sampleId: "w-task2-artists-income-government",
    sourceVi:
      "Thị trường nghệ thuật thưởng rất tốt cho một số ít người sáng tạo, trong khi những người khác kiếm được rất ít.",
    answerEn: "The art market rewards a small number of creators extremely well while others earn very little.",
    lexicalTipCloze:
      "The art _______ _______ a _______ _______ of _______ extremely _______ while others _______ very _______.",
  },
  {
    id: "dc-05",
    sampleId: "w-task2-artists-income-government",
    sourceVi:
      "Dù sự bất bình đẳng này rất rõ, tôi không đồng ý rằng chính phủ nên cố san bằng thu nhập của nghệ sĩ; thay vào đó, vai trò của họ nên là mở rộng cơ hội và bảo vệ các quyền lao động cơ bản.",
    answerEn:
      "Although this inequality is clear, I disagree that governments should attempt to equalise artists' incomes; their role should instead be to widen access to opportunities and protect basic labour rights.",
    lexicalTipCloze:
      "Although this _______ is _______, I _______ that governments should _______ to _______ artists' _______; their _______ should instead be to _______ _______ to _______ and _______ _______ _______ _______.",
  },
  {
    id: "dc-06",
    sampleId: "w-task2-business-vs-cultural-ties",
    sourceVi:
      "Người ta vẫn bất đồng về việc kinh doanh quốc tế có làm yếu đi các kết nối văn hoá giữa các nước hay không.",
    answerEn:
      "People disagree about whether international business weakens cultural connections between countries.",
    lexicalTipCloze:
      "People _______ about whether _______ _______ _______ _______ _______ between _______.",
  },
  {
    id: "dc-07",
    sampleId: "w-task2-business-vs-cultural-ties",
    sourceVi:
      "Dù toàn cầu hoá thương mại có thể khiến các xã hội trông giống nhau hơn, tôi tin nhìn chung nó lại củng cố các mối liên hệ văn hoá nhờ tăng tiếp xúc, trao đổi và sự hiểu biết lẫn nhau.",
    answerEn:
      "Although commercial globalisation can make societies appear more alike, I believe it generally strengthens cultural ties by increasing contact, exchange, and mutual understanding.",
    lexicalTipCloze:
      "Although _______ _______ can make _______ _______ more _______, I believe it generally _______ _______ _______ by _______ _______, _______, and _______ _______.",
  },
  {
    id: "dc-08",
    sampleId: "w-task2-c-09-economic-progress",
    sourceVi:
      "Các chính phủ thường xem tăng trưởng kinh tế là thước đo chính của thành công quốc gia, trong khi những người khác cho rằng tiến bộ xã hội và môi trường cũng đáng được quan tâm ngang bằng.",
    answerEn:
      "Governments often treat economic growth as their principal measure of national success, while others argue that social and environmental advances deserve equal attention.",
    lexicalTipCloze:
      "Governments often _______ _______ _______ as their _______ _______ of _______ _______, while others _______ that _______ and _______ _______ _______ _______ _______.",
  },
  {
    id: "dc-09",
    sampleId: "w-task2-c-09-economic-progress",
    sourceVi:
      "Một nền kinh tế mạnh là điều không thể thiếu, nhưng tôi tin tiến bộ phải được đánh giá rộng hơn, vì chỉ có thu nhập thôi chưa đảm bảo một cuộc sống ổn định hay thỏa mãn.",
    answerEn:
      "A strong economy is indispensable, but I believe progress must be assessed more broadly because income alone does not guarantee a secure or satisfying life.",
    lexicalTipCloze:
      "A strong _______ is _______, but I believe _______ must be _______ more _______ because _______ alone does not _______ a _______ or _______ _______.",
  },
  {
    id: "dc-10",
    sampleId: "w-task2-c-10-business-responsibilities",
    sourceVi:
      "Các công ty được thành lập để tạo lợi nhuận, nhưng quyết định của họ cũng ảnh hưởng đến nhân viên, người tiêu dùng và cộng đồng rộng hơn.",
    answerEn:
      "Companies are established to generate profit, yet their decisions also affect employees, consumers and the wider community.",
    lexicalTipCloze:
      "Companies are _______ to _______ _______, yet their _______ also _______ _______, _______ and the _______ _______.",
  },
  {
    id: "dc-11",
    sampleId: "w-task2-c-10-business-responsibilities",
    sourceVi:
      "Tôi rất đồng ý rằng doanh nghiệp có trách nhiệm xã hội, đặc biệt là ngăn ngừa thiệt hại và đóng góp công bằng vào những hệ thống giúp họ vận hành.",
    answerEn:
      "I strongly agree that businesses have social responsibilities, particularly to prevent harm and contribute fairly to the systems that enable them to operate.",
    lexicalTipCloze:
      "I _______ _______ that businesses have _______ _______, particularly to _______ _______ and _______ _______ to the _______ that _______ them to _______.",
  },
  {
    id: "dc-12",
    sampleId: "w-task2-c-10-business-responsibilities",
    sourceVi:
      "Việc tuân thủ luật lao động và môi trường vì vậy nên được xem là chi phí vận hành cơ bản, chứ không phải lòng hảo tâm tùy chọn.",
    answerEn:
      "Compliance with labour and environmental law should therefore be regarded as a basic operating cost, not optional generosity.",
    lexicalTipCloze:
      "_______ with _______ and _______ _______ should therefore be _______ as a _______ _______ _______, not _______ _______.",
  },
  {
    id: "dc-13",
    sampleId: "w-task2-c-11-environment",
    sourceVi:
      "Hoạt động của con người đang làm suy thoái môi trường tự nhiên, thông qua cả sản xuất quy mô lớn lẫn tiêu dùng hàng ngày.",
    answerEn:
      "Human activity is degrading the natural environment through both large-scale production and everyday consumption.",
    lexicalTipCloze:
      "Human _______ is _______ the _______ _______ through both _______ _______ and _______ _______.",
  },
  {
    id: "dc-14",
    sampleId: "w-task2-c-11-environment",
    sourceVi:
      "Chính phủ phải định hình lại những hệ thống gây hại nhiều nhất, trong khi mỗi cá nhân nên giảm lãng phí và hỗ trợ quá trình chuyển đổi qua các lựa chọn hàng ngày.",
    answerEn:
      "Governments must reshape the systems that cause the greatest harm, while individuals should reduce waste and support the transition through their daily choices.",
    lexicalTipCloze:
      "Governments must _______ the _______ that _______ the _______ _______, while _______ should _______ _______ and _______ the _______ through their _______ _______.",
  },
  {
    id: "dc-15",
    sampleId: "w-task2-c-07-music",
    sourceVi:
      "Ở cấp độ cá nhân, âm nhạc giúp định hình những cảm xúc đôi khi khó diễn đạt một cách trực tiếp.",
    answerEn:
      "At an individual level, music gives form to feelings that may be difficult to express directly.",
    lexicalTipCloze:
      "At an _______ _______, music _______ _______ to _______ that may be _______ to _______ _______.",
  },
  {
    id: "dc-16",
    sampleId: "w-task2-c-05-equality",
    sourceVi:
      "Dù phần thưởng nên phản ánh nỗ lực và năng lực cá nhân, tôi tin một xã hội tương đối bình đẳng sẽ mang lại thành công cá nhân lớn hơn, vì nó cho tài năng một cơ hội công bằng để phát triển.",
    answerEn:
      "Although rewards should reflect individual effort and ability, I believe that a broadly egalitarian society produces greater personal success because it gives talent a fair opportunity to develop.",
    lexicalTipCloze:
      "Although _______ should _______ _______ _______ and _______, I believe that a _______ _______ _______ _______ greater _______ _______ because it gives _______ a _______ _______ to _______.",
  },
];

export const WRITING_DICH_CAU_ILLUSTRATION = "/luyen%20viet%201.jpg";
