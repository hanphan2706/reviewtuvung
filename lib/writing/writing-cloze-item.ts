/**
 * Cloze từ đoạn body thật trong sample writing.
 * Người học điền các từ trong `vocabularyList` vào chỗ trống.
 */

export type WritingClozeItem = {
  id: string;
  sampleId: string;
  title: string;
  /** Đoạn Anh có `___` chỗ trống. */
  passageEn: string;
  /** Bản dịch tiếng Việt (toggle hint). */
  passageVi: string;
  /** Đáp án theo thứ tự chỗ trống. */
  answers: readonly string[];
  /** Từ cần điền — cùng tập với answers, thứ tự hiển thị. */
  vocabularyList: readonly string[];
};

export const WRITING_CLOZE_ITEMS: readonly WritingClozeItem[] = [
  {
    id: "cloze-business-responsibilities-body",
    sampleId: "w-task2-c-10-business-responsibilities",
    title: "Business responsibilities",
    passageEn:
      "The clearest responsibility is to avoid ___ commercial costs to other people. A factory may increase its profit by ___ workplace safety or releasing ___ waste, but the resulting injuries and pollution are then ___ by workers, local residents and public health services. ___ with labour and environmental law should therefore be ___ as a basic operating cost, not optional ___. Businesses must also provide accurate product information and secure customer data because consumers cannot make informed choices when risks are ___. The Volkswagen emissions scandal, for example, demonstrated how ___ corporate behaviour can damage public health and destroy trust far beyond a company's balance sheet.",
    passageVi:
      "Trách nhiệm rõ ràng nhất là tránh chuyển các chi phí thương mại sang cho người khác. Một nhà máy có thể tăng lợi nhuận bằng cách bỏ bê an toàn nơi làm việc hoặc thải chất thải chưa xử lý, nhưng những chấn thương và ô nhiễm phát sinh khi đó lại do công nhân, cư dân địa phương và dịch vụ y tế công gánh chịu. Việc tuân thủ luật lao động và môi trường vì vậy nên được xem là chi phí vận hành cơ bản, chứ không phải lòng hảo tâm tùy chọn. Doanh nghiệp cũng phải cung cấp thông tin sản phẩm chính xác và bảo vệ dữ liệu khách hàng, vì người tiêu dùng không thể đưa ra lựa chọn sáng suốt khi rủi ro bị che giấu. Vụ bê bối khí thải Volkswagen, chẳng hạn, cho thấy hành vi doanh nghiệp mang tính lừa dối có thể gây hại sức khỏe cộng đồng và phá hủy lòng tin còn xa hơn cả bảng cân đối kế toán của một công ty.",
    answers: [
      "transferring",
      "neglecting",
      "untreated",
      "borne",
      "Compliance",
      "regarded",
      "generosity",
      "concealed",
      "deceptive",
    ],
    vocabularyList: [
      "borne",
      "Compliance",
      "concealed",
      "deceptive",
      "generosity",
      "neglecting",
      "regarded",
      "transferring",
      "untreated",
    ],
  },
  {
    id: "cloze-environment-body",
    sampleId: "w-task2-c-11-environment",
    title: "Environment",
    passageEn:
      "Two forms of damage are especially serious. First, burning coal, oil and gas for electricity, transport and industry releases ___ gases, which ___ climate change. Second, modern patterns of consumption generate ___ waste and destroy ___. Forests are cleared for agriculture and construction, while disposable packaging enters rivers and oceans because products are designed for ___ rather than reuse. These pressures reinforce one another: damaged forests absorb less carbon, and rising temperatures further ___ ecosystems.",
    passageVi:
      "Hai dạng thiệt hại đặc biệt nghiêm trọng. Thứ nhất, việc đốt than, dầu và khí đốt cho điện, giao thông và công nghiệp thải ra khí nhà kính, làm tăng cường biến đổi khí hậu. Thứ hai, các mô hình tiêu dùng hiện đại tạo ra lượng chất thải quá mức và phá hủy môi trường sống. Rừng bị chặt để làm nông nghiệp và xây dựng, trong khi bao bì dùng một lần đổ vào sông và đại dương vì sản phẩm được thiết kế vì sự tiện lợi chứ không phải để tái sử dụng. Những áp lực này củng cố lẫn nhau: rừng bị tổn hại hấp thụ ít carbon hơn, và nhiệt độ tăng càng làm suy yếu các hệ sinh thái.",
    answers: [
      "greenhouse",
      "intensify",
      "excessive",
      "habitats",
      "convenience",
      "weaken",
    ],
    vocabularyList: [
      "convenience",
      "excessive",
      "greenhouse",
      "habitats",
      "intensify",
      "weaken",
    ],
  },
  {
    id: "cloze-economic-progress-body",
    sampleId: "w-task2-c-09-economic-progress",
    title: "Economic progress",
    passageEn:
      "Prioritising the economy has clear practical advantages. Higher ___ and business activity increase tax ___, allowing governments to fund hospitals, schools and transport systems. Growth also creates ___, raises household incomes and gives the state greater ___ to respond to crises. For developing countries in particular, expanding basic ___ may depend on sustained investment and a larger economic base. Without these resources, ambitious social programmes can become promises that governments cannot ___.",
    passageVi:
      "Ưu tiên nền kinh tế có những lợi thế thực tiễn rõ ràng. Năng suất cao hơn và hoạt động kinh doanh tăng doanh thu thuế, cho phép chính phủ tài trợ bệnh viện, trường học và hệ thống giao thông. Tăng trưởng cũng tạo việc làm, nâng thu nhập hộ gia đình và mang lại cho nhà nước năng lực lớn hơn để ứng phó khủng hoảng. Đặc biệt với các nước đang phát triển, việc mở rộng cơ sở hạ tầng cơ bản có thể phụ thuộc vào đầu tư bền vững và một nền tảng kinh tế lớn hơn. Không có những nguồn lực này, các chương trình xã hội tham vọng có thể trở thành lời hứa mà chính phủ không thể tài trợ.",
    answers: [
      "productivity",
      "revenue",
      "employment",
      "capacity",
      "infrastructure",
      "finance",
    ],
    vocabularyList: [
      "capacity",
      "employment",
      "finance",
      "infrastructure",
      "productivity",
      "revenue",
    ],
  },
];
