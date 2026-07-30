import { CAMBRIDGE_12_QUIZ } from "@/lib/reading/cambridge-12-quiz";
import { CAMBRIDGE_13_QUIZ } from "@/lib/reading/cambridge-13-quiz";
import { CAMBRIDGE_14_15_QUIZ } from "@/lib/reading/cambridge-14-15-quiz";
import { CAMBRIDGE_16_21_QUIZ } from "@/lib/reading/cambridge-16-21-quiz";
import { CAMBRIDGE_18_19_QUIZ } from "@/lib/reading/cambridge-18-19-quiz";
import { parseCompassQuickCheckText } from "@/lib/reading/compass-quick-check";
import { READING_CHALLENGE_1_QUIZ } from "@/lib/reading/reading-challenge-1-quiz";
import { READING_CHALLENGE_2_QUIZ } from "@/lib/reading/reading-challenge-2-quiz";
import { READING_CHALLENGE_3_QUIZ } from "@/lib/reading/reading-challenge-3-quiz";
import {
  getReadingHubArticleById,
  isCompassPublishingPilot,
  type ReadingPilotId,
} from "@/lib/reading/hub-articles";

export type QuickCheckQuiz = {
  questionEn: string;
  optionsEn: string[];
  questionVi?: string;
  optionsVi?: string[];
  correctIndex: number;
  explanationEn?: string;
  explanationVi?: string;
};

export type QuickCheckInput = {
  pilotId?: ReadingPilotId;
  quickCheckText?: string;
};

const QUIZ_BY_ARTICLE: Record<string, QuickCheckQuiz> = {
  "cam20-test2-p1": {
    questionEn: "According to the passage, what makes up most of a manatee's diet?",
    optionsEn: [
      "Fish and small animals",
      "Aquatic plants (seagrass)",
      "Seaweed and coral",
      "Insects on the riverbed",
    ],
    questionVi: "Theo bài, phần lớn chế độ ăn của manatee là gì?",
    optionsVi: ["Cá và động vật nhỏ", "Thực vật thủy sinh (seagrass)", "Rong biển và san hô", "Côn trùng dưới đáy"],
    correctIndex: 1,
    explanationEn: "The passage states seagrasses and other marine plants make up most of a manatee's diet.",
    explanationVi: "Bài nêu seagrasses and other marine plants make up most of a manatee's diet.",
  },
  "cam20-test2-p2": {
    questionEn: "How is procrastination described in the passage?",
    optionsEn: [
      "Working too far ahead of deadlines",
      "Delaying necessary tasks to do easier or more enjoyable ones",
      "Planning in too much detail",
      "Avoiding talking to colleagues",
    ],
    questionVi: "Procrastination được mô tả là thói quen gì?",
    optionsVi: [
      "Làm việc quá sớm trước hạn",
      "Trì hoãn việc cần làm để làm việc dễ / thích hơn",
      "Lập kế hoạch quá chi tiết",
      "Tránh giao tiếp với đồng nghiệp",
    ],
    correctIndex: 1,
  },
  "cam20-test2-p3": {
    questionEn: "What is ABS (roboumpire) used for in baseball?",
    optionsEn: [
      "Measuring how fast players run",
      "Determining whether a pitch is in the strike zone",
      "Choosing the lineup",
      "Scoring audience votes",
    ],
    questionVi: "ABS (roboumpire) được dùng để làm gì trong bóng chày?",
    optionsVi: [
      "Đo tốc độ chạy của cầu thủ",
      "Xác định bóng vào vùng strike",
      "Chọn đội hình ra sân",
      "Tính điểm khán giả",
    ],
    correctIndex: 1,
  },
  "cam20-test1-p1": {
    questionEn: "Which statement about the kākāpō is true according to the passage?",
    optionsEn: [
      "It is a flying parrot active during the day",
      "It is a flightless, nocturnal parrot that is critically endangered",
      "It lives only in Australia",
      "It does not need conservation",
    ],
    questionVi: "Điều nào đúng về kākāpō theo bài?",
    optionsVi: [
      "Là loài vẹt bay được và sống ban ngày",
      "Là vẹt không bay, hoạt động về đêm, đang cực kỳ nguy cấp",
      "Chỉ sống ở Australia",
      "Không cần bảo tồn",
    ],
    correctIndex: 1,
  },
  "cam20-test1-p2": {
    questionEn: "What is the passage mainly about in England?",
    optionsEn: [
      "Reintroducing elm trees after the species was nearly wiped out",
      "Building dams on the River Thames",
      "Importing timber from the United States",
      "Tiger conservation",
    ],
    questionVi: "Bài chủ yếu bàn về điều gì ở Anh?",
    optionsVi: [
      "Trồng lại cây du (elm) sau khi loài gần như tuyệt chủng",
      "Xây đập trên sông Thames",
      "Nhập khẩu gỗ từ Mỹ",
      "Bảo tồn hổ",
    ],
    correctIndex: 0,
  },
  "cam20-test3-p1": {
    questionEn: "Who is credited with key innovations that made the modern frozen food industry possible?",
    optionsEn: [
      "Fred DeJesus",
      "Clarence Birdseye",
      "Matt Elliot",
      "Swanson Foods executives",
    ],
    questionVi: "Ai được ghi nhận với các đổi mới then chốt giúp ngành thực phẩm đông lạnh hiện đại?",
    optionsVi: [
      "Fred DeJesus",
      "Clarence Birdseye",
      "Matt Elliot",
      "Giám đốc Swanson Foods",
    ],
    correctIndex: 1,
    explanationEn: "The passage describes Clarence Birdseye's quick-freezing techniques and packaging innovations.",
    explanationVi: "Bài mô tả kỹ thuật đông nhanh và đổi mới bao bì của Clarence Birdseye.",
  },
  "cam20-test3-p2": {
    questionEn: "According to the passage, what is a major immediate threat to coral reefs?",
    optionsEn: [
      "Overfishing by local communities",
      "Rising ocean temperatures causing bleaching",
      "Tourism damage to reef structures",
      "Lack of funding for London Zoo",
    ],
    questionVi: "Theo bài, mối đe dọa trực tiếp lớn với rạn san hô là gì?",
    optionsVi: [
      "Đánh bắt quá mức",
      "Nước biển ấm lên gây bleaching",
      "Du lịch phá cấu trúc rạn",
      "Thiếu kinh phí cho sở thú London",
    ],
    correctIndex: 1,
  },
  "cam20-test4-p1": {
    questionEn: "What did O’Keeffe often paint after her trips to the Stieglitz family summer home?",
    optionsEn: ["Architectural skyscrapers only", "Botanical subjects, including magnified flowers", "Only cow skulls from New Mexico", "Portraits of Alfred Stieglitz exclusively"],
    questionVi: "O’Keeffe thường vẽ gì sau các chuyến về nhà hè của gia đình Stieglitz?",
    optionsVi: [
      "Chỉ nhà chọc trời",
      "Chủ đề thực vật, gồm hoa phóng đại",
      "Chỉ sọ bò từ New Mexico",
      "Chỉ chân dung Stieglitz",
    ],
    correctIndex: 1,
  },
  "cam20-test4-p2": {
    questionEn: "What does the passage say about global warming if all CO2 emissions stopped tomorrow?",
    optionsEn: [
      "Effects would stop immediately",
      "Impacts would continue for around 40 years",
      "Sea levels would fall within a decade",
      "Miami Beach would no longer need pumps",
    ],
    questionVi: "Nếu ngừng phát thải CO2 ngay mai, bài nói gì về hiệu ứng nóng lên?",
    optionsVi: [
      "Hết ngay lập tức",
      "Còn khoảng 40 năm",
      "Mực nước biển giảm trong 10 năm",
      "Miami Beach không cần bơm",
    ],
    correctIndex: 1,
  },
  "cam20-test4-p3": {
    questionEn: "Besides protecting livestock, what new role do guard dogs increasingly play?",
    optionsEn: [
      "Replacing shepherds entirely",
      "Helping preserve predators by reducing farmer hostility",
      "Eliminating all jackals in Namibia",
      "Competing with cheetahs for food",
    ],
    questionVi: "Ngoài bảo vệ gia súc, chó canh gác đang có vai trò mới gì?",
    optionsVi: [
      "Thay hết người chăn",
      "Giúp bảo vệ kẻ săn mồi bằng cách giảm thù địch của nông dân",
      "Diệt hết chó rừng Namibia",
      "Tranh thức ăn với báo",
    ],
    correctIndex: 1,
  },
  "cam20-test3-p3": {
    questionEn: "What does Kathleen Richardson suggest about fear of advanced machines?",
    optionsEn: [
      "It is caused mainly by how humans project human traits onto machines",
      "It will disappear once robots can colonise other planets",
      "It is justified because robots already outwit humans",
      "It stems from science fiction being more accurate than science",
    ],
    questionVi: "Richardson cho rằng nỗi sợ máy tiên tiến chủ yếu do điều gì?",
    optionsVi: [
      "Con người gán đặc tính con người cho máy",
      "Sẽ hết khi robot colonise hành tinh khác",
      "Là chính đáng vì robot đã vượt trí người",
      "Do khoa học viễn tưởng chính xác hơn khoa học",
    ],
    correctIndex: 0,
  },
  "cam20-test1-p3": {
    questionEn: "According to the passage, how can decisions made under stress be affected?",
    optionsEn: [
      "They are always more accurate than usual",
      "They may be negatively influenced by emotions",
      "They are unrelated to emotions",
      "They only affect short-term memory",
    ],
    questionVi: "Theo bài, quyết định khi đang stress thường như thế nào?",
    optionsVi: [
      "Luôn chính xác hơn bình thường",
      "Có thể bị ảnh hưởng tiêu cực bởi cảm xúc",
      "Không liên quan đến cảm xúc",
      "Chỉ ảnh hưởng đến trí nhớ ngắn hạn",
    ],
    correctIndex: 1,
  },
  "de-thi-that-1-p1": {
    questionEn: "According to the passage, what mainly limited early steamboats before the 19th century?",
    optionsEn: [
      "They were banned on European rivers",
      "They were often too slow or too expensive to run",
      "They could only travel across the Atlantic",
      "They used diesel engines instead of steam",
    ],
    questionVi: "Theo bài, điều gì chủ yếu hạn chế thuyền hơi nước sớm trước thế kỷ XIX?",
    optionsVi: [
      "Bị cấm trên sông châu Âu",
      "Thường quá chậm hoặc quá đắt để vận hành",
      "Chỉ đi được xuyên Đại Tây Dương",
      "Dùng động cơ diesel thay vì hơi nước",
    ],
    correctIndex: 1,
    explanationEn: "The passage states that early steamboats were either too slow or too expensive to run.",
    explanationVi: "Bài nêu các thuyền hơi nước sớm hoặc quá chậm, hoặc quá đắt để vận hành.",
  },
  "de-thi-that-1-p2": {
    questionEn: "What did James Flynn find about the strongest gains in IQ test scores?",
    optionsEn: [
      "They were mainly on verbal tests",
      "They were mainly on Raven's matrices and similar visuo-spatial tests",
      "They occurred only in Denmark",
      "They proved that people had become geniuses",
    ],
    questionVi: "James Flynn nhận thấy mức tăng điểm IQ mạnh nhất ở đâu?",
    optionsVi: [
      "Chủ yếu ở bài kiểm tra ngôn ngữ",
      "Chủ yếu ở Raven's matrices và các bài thị giác–không gian tương tự",
      "Chỉ xảy ra ở Đan Mạch",
      "Chứng minh mọi người đã trở thành thiên tài",
    ],
    correctIndex: 1,
    explanationEn: "Flynn found the strongest gains on Raven's matrices and similar visuo-spatial tests.",
    explanationVi: "Flynn thấy mức tăng mạnh nhất ở Raven's matrices và các bài thị giác–không gian tương tự.",
  },
  "de-thi-that-1-p3": {
    questionEn: "What kind of project does the writer describe with middle school students in Zuni?",
    optionsEn: [
      "Building a modern steel skyscraper",
      "Conserving and replastering a traditional adobe structure",
      "Designing digital architecture software",
      "Studying architecture only through slide presentations",
    ],
    questionVi: "Tác giả mô tả dự án nào với học sinh trung học ở Zuni?",
    optionsVi: [
      "Xây nhà chọc trời thép hiện đại",
      "Bảo tồn và trát lại một công trình adobe truyền thống",
      "Thiết kế phần mềm kiến trúc số",
      "Chỉ học kiến trúc qua chiếu slide",
    ],
    correctIndex: 1,
    explanationEn: "Students helped assess and replaster an adobe building with traditional mud plaster.",
    explanationVi: "Học sinh tham gia đánh giá và trát lại công trình adobe bằng vữa đất truyền thống.",
  },
};

/** EN dự phòng khi cache/file còn định dạng QUICK CHECK cũ (chỉ `question |` tiếng Việt). */
const COMPASS_QUIZ_EN_PATCH: Record<string, Pick<QuickCheckQuiz, "questionEn" | "optionsEn" | "explanationEn">> = {
  "reading-challenge-1-p1": {
    questionEn: "According to the passage, which statement best describes the Ice Hotel?",
    optionsEn: [
      "A hotel in Quebec, Canada made entirely of ice and snow, open only in winter and very unique",
      "A year-round hotel with comfortably warm room temperatures inside",
      "The passage mainly teaches skiing techniques for beginners",
      "Guests cannot sleep overnight because it is too cold and there are no blankets or sleeping bags",
    ],
    explanationEn:
      "The passage introduces the Ice Hotel in Quebec — built from ice and snow, open in winter; visitors come for ice art and a unique atmosphere.",
  },
};

function patchCompassQuizEn(articleId: string, quiz: QuickCheckQuiz | null): QuickCheckQuiz | null {
  if (!quiz) return null;
  const patch = COMPASS_QUIZ_EN_PATCH[articleId];
  if (!patch) return quiz;
  const hasEn = Boolean(quiz.questionEn?.trim()) && quiz.optionsEn.length >= 2;
  if (hasEn) return quiz;
  return {
    ...quiz,
    questionEn: patch.questionEn,
    optionsEn: patch.optionsEn,
    explanationEn: quiz.explanationEn ?? patch.explanationEn,
  };
}

/** Quiz kiểm tra nhanh: Compass từ khối QUICK CHECK trong .txt; IELTS từ curated map. */
export function getQuickCheckQuiz(
  articleId: string,
  passage?: QuickCheckInput,
): QuickCheckQuiz | null {
  const pilotId = passage?.pilotId ?? getReadingHubArticleById(articleId)?.pilotId;

  if (pilotId && isCompassPublishingPilot(pilotId)) {
    const curated =
      READING_CHALLENGE_1_QUIZ[articleId] ??
      READING_CHALLENGE_2_QUIZ[articleId] ??
      READING_CHALLENGE_3_QUIZ[articleId];
    if (curated) return curated;
    if (passage?.quickCheckText?.trim()) {
      return patchCompassQuizEn(articleId, parseCompassQuickCheckText(passage.quickCheckText));
    }
    return null;
  }

  return (
    QUIZ_BY_ARTICLE[articleId] ??
    CAMBRIDGE_12_QUIZ[articleId] ??
    CAMBRIDGE_13_QUIZ[articleId] ??
    CAMBRIDGE_14_15_QUIZ[articleId] ??
    CAMBRIDGE_16_21_QUIZ[articleId] ??
    CAMBRIDGE_18_19_QUIZ[articleId] ??
    null
  );
}
