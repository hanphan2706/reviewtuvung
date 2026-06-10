/**
 * Ghi bản dịch Reading Challenge 2 → reading translations/*.vi.json
 *
 *   npx tsx scripts/apply-reading-challenge-2-vi.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "reading translations");

const VI: Record<string, string[]> = {
  "reading-challenge-2-p1": [
    "Mỹ phẩm đã được dùng suốt lịch sử. Người Hy Lạp, Ai Cập và La Mã cổ đại đều dùng nhiều loại trang điểm. Một số để cải thiện vẻ ngoài, số khác để bảo vệ da. Tuy nhiên, đôi khi thứ dùng để trang điểm lại nguy hiểm hoặc chết người! Ở Ai Cập cổ đại, cả người giàu lẫn nghèo đều dùng nước hoa, kem dưỡng và mặt nạ.",
    "Người Ai Cập còn phát triển một trong những loại kem chống nắng sớm nhất. Họ dùng dầu và kem chống nắng, gió khô. Nhiều nền văn hóa cổ cũng rắc bột lên da để làm đẹp. Người Ai Cập kẻ kohl đen quanh mắt; người La Mã bôi phấn trắng lên mặt.",
    "Người Ấn Độ nhuộm henna đỏ lên cơ thể. Hầu hết mỹ phẩm cổ đại vô hại. Nhưng vì làm đẹp, một số người bôi hóa chất độc lên da. Thời Phục hưng ở Ý, phụ nữ dùng bột trắng làm từ chì. Ngày nay bác sĩ biết chì độc với cơ thể.",
    "Cũng thời Phục hưng, phụ nữ Ý nhỏ thuốc belladonna vào mắt. Thuốc làm từ cây có độc tác động lên thần kinh. Nhỏ vào mắt khiến đồng tử giãn rất to; người ta cho đó là đẹp hơn.",
    "Tên cây cũng xuất phát từ đó — trong tiếng Ý, belladonna nghĩa là “phụ nữ đẹp”. Khi Elizabeth I trị vì cuối thế kỷ 1500, phụ nữ Anh cũng dùng mỹ phẩm nguy hiểm, đặc biệt thuốc nhuộm tóc chứa chì và lưu huỳnh.",
    "Thuốc nhuộm tóc đỏ giống màu tóc nữ hoàng, nhưng theo thời gian khiến tóc rụng. Cuối cùng phụ nữ hóa đầu, phải đội tóc giả như nữ hoàng.",
  ],
  "reading-challenge-2-p2": [
    "Mỗi nền văn hóa có phong tục riêng khi trẻ rụng răng sữa. Ở Hàn Quốc, trẻ ném răng lên mái nhà. Theo truyền thống, chim sáo sẽ lấy răng và sau đó mang răng mới cho trẻ.",
    "Ở Nhật, Việt Nam và nơi khác ở châu Á, trẻ cũng ném răng lên mái. Không chỉ chim — ở Mexico và Tây Ban Nha, chuột mang răng đi và để lại tiền. Ở Mông Cổ, chó — không phải chuột — được coi là mang răng đi.",
    "Chó được tôn trọng cao trong văn hóa Mông Cổ, xem như thiên thần hộ mệnh. Truyền thống nói răng mới sẽ mọc khỏe nếu răng sữa được cho thiên thần hộ mệnh. Cha mẹ Mông Cổ nhúng răng rụng vào mỡ thịt rồi cho chó ăn.",
    "Ý tưởng đưa răng cho thiên thần hay tiên cũng có ở phương Tây. Nhiều trẻ phương Tây trông chờ Tiên răng để lại tiền hoặc quà đổi răng. Nguồn gốc Tiên răng vẫn là bí ẩn, có lẽ bắt đầu ở Anh hoặc Ireland từ nhiều thế kỷ trước.",
    "Theo truyền thống, trẻ đặt răng dưới gối trước khi ngủ. Trong đêm khuya, khi trẻ ngủ, Tiên răng lấy răng và để thứ khác dưới gối. Ở Pháp, Tiên răng để quà nhỏ hoặc kẹo; ở Mỹ thường để tiền.",
    "Hiện nay mức khoảng 1–5 đô la mỗi răng — tổng cộng có thể là khoản tiền lớn từ Tiên răng!",
  ],
  "reading-challenge-2-p3": [
    "Vành đai kéo dài từ New Zealand lên châu Á, qua đại dương tới Alaska, rồi dọc bờ Bắc và Nam Mỹ. Hơn 75% núi lửa thế giới nằm trong vùng này. Các nhà khoa học quan tâm Vành đai lửa vì có thể quan sát kiến tạo mảng tại đây.",
    "Năm 1912, nhà khoa học Đức Alfred Wegener đưa ra giả thuyết đầu tiên về chuyển động lục địa. Ông cho rằng lục địa là đá nhẹ nằm trên vật liệu nặng hơn, di chuyển nhẹ như vật lớn trôi trên nước.",
    "Sau này các nhà khoa học thấy hầu hết ý tưởng của Wegener đúng, rồi phát triển thuyết kiến tạo mảng. Theo đó, bề mặt Trái Đất gồm nhiều mảng đá khổng lồ, mỗi mảng dày khoảng 80 km.",
    "Các mảng trôi và di chuyển chậm, tốc độ 1–10 cm mỗi năm — gần bằng tốc độ móng tay mọc! Trong Vành đai lửa, vật liệu mới liên tục được tạo khi magma nóng chảy từ lõi Trái Đất lên đáy đại dương.",
    "Mọi mảng hiện có phải dịch chuyển nhẹ để nhường chỗ. Khi mảng va nhau, một mảng có thể chui dưới mảng kia — gọi là hút chìm (subduction), thường gây động đất.",
    "Mảng dưới có thể tan do nhiệt cực cao; magma tạo ra có thể trào lên bề mặt qua núi lửa — như ta thấy dọc Vành đai lửa.",
  ],
  "reading-challenge-2-p4": [
    "Mụn trứng cá (acne) là phần bình thường khi lớn lên. Đến tuổi dậy thì, cơ thể thay đổi nhiều; hormone đổi khiến thanh thiếu niên thường bị mụn. Nhiều người vẫn bị mụn sau dậy thì.",
    "Làm sao chữa mụn? Đáng tiếc, nhiều cách mọi người tin lại chỉ là huyền thoại. Nhiều người nghĩ nặn mụn là cách tốt nhất. Thực tế nặn mụn đẩy vi khuẩn sâu hơn dưới da, gây đỏ, đau hoặc nhiễm trùng.",
    "Vì vậy bác sĩ da thường khuyên không nặn mụn. Rửa mặt nhiều có chữa mụn không? Rửa mặt tốt, nhưng rửa quá nhiều kích thích da, khiến mụn tệ hơn.",
    "Một huyền thoại khác: không trang điểm sẽ giảm mụn. Thực ra một số kem hoặc phấn có thuốc chữa mụn — không phải loại nào cũng có hại. Người ta còn cho ăn đồ béo hoặc sô-cô-la gây mụn.",
    "Sự thật: một thanh kẹo hay miếng pizza không gây mụn. Dù vậy, thanh thiếu niên và người lớn vẫn nên ăn tốt cho cơ thể và da. Huyền thoại khác: căng thẳng gây mụn.",
    "Căng thẳng có thể khiến da tiết thêm dầu, nhưng dầu thêm không nhất thiết tạo thêm mụn.",
  ],
  "reading-challenge-2-p5": [
    "Người bình thường tạo khoảng nửa lít khí đường ruột mỗi ngày, tương đương khoảng 14 lần “đánh rắm”. “Toot”, “cut the cheese” hay “fart” là cách nói hài về việc ai cũng làm. Nhiều người xấu hổ, nhưng không cần — bước đầu là thừa nhận ai cũng vậy; sau đó bạn có thể học thêm điều thú vị.",
    "Khí có nhiều nguồn: không khí nuốt vào, phân tử khí trong máu, phản ứng hóa học và vi khuẩn trong ruột. Người lo lắng thường có nhiều khí hơn vì nuốt nhiều không khí hơn và thức ăn đi qua ruột nhanh hơn, oxy trong thức ăn không kịp hấp thụ.",
    "Oxy trong thức ăn vào ruột và thành khí. Chế độ ăn ảnh hưởng mùi: trứng, thịt, súp lơ có nhiều lưu huỳnh — khí hôi hơn. Đậu tạo nhiều khí nhưng thường ít hôi vì ít lưu huỳnh.",
    "Đậu chứa nhiều đường mà vi khuẩn ruột thích; chúng ăn đường và tạo khí. Cuối cùng, người ta hỏi: nhịn khí thì sao? Khí nhịn không độc bạn, nhưng có thể đau bụng vì áp lực.",
    "Khí nhịn không thoát cũng không hấp thụ — nó lùi lên ruột và sau đó thoát ra. Không mất, chỉ trì hoãn. Giờ bạn đã biết vài điều — hãy tự hào nói: “Vâng, tôi đã cut the cheese!”",
  ],
  "reading-challenge-2-p6": [
    "Satoru Iwata không phải tên quen trong mọi gia đình, nhưng lẽ ra phải vậy. Hầu hết mọi người biết “đứa con tinh thần” của ông: Nintendo DS và Wii — hai hệ máy đã thay đổi hoàn toàn thế giới game. Khó tưởng tượng không có chúng, nhưng DS và Wii gần như không được làm ra!",
    "Nhờ ý tưởng đổi mới của Iwata, hôm nay ta mới có các hệ này. Iwata trở thành CEO Nintendo năm 2002, khi thị trường game đang khó và doanh số Nintendo sa sút. Ông cho rằng cần đổi chiến lược — trước đây ngành game chỉ làm cùng loại máy/game nhưng mạnh và phức tạp hơn.",
    "Iwata không chỉ muốn thu hút game thủ cứng. Ông muốn đưa người chơi mới vào game — bằng cách thay đổi chính khái niệm game: dễ bắt đầu và gắn hơn với đời sống.",
    "Từ đó ra đời Nintendo DS — tương tác trực tiếp bằng màn hình cảm ứng thay vì chỉ nút bấm. Iwata đẩy xa hơn với Wii dựa trên cử động cơ thể; chỉ cần động tác tự nhiên là chơi được nhiều loại game.",
    "Loại game cũng đổi: bên cạnh RPG, hành động, thể thao, có “game” mới như Brain Age (rèn tư duy) hay Wii Fit (rèn sức khỏe) — mở kỷ nguyên game mới.",
    "Từ ông bà đến cháu — ai cũng có vẻ đang chơi sản phẩm Nintendo. Với những gì đã thấy, ta chỉ có thể đoán Iwata sẽ làm gì tiếp theo — chắc chắn là điều gì đó đột phá!",
  ],
  "reading-challenge-2-p7": [
    "Thể thao vui và giúp trẻ khỏe khi chơi cùng bạn. Tuy nhiên, thể thao cũng có thể ảnh hưởng xấu — gây tự ti hoặc hung hăng ở một số trẻ. Theo nghiên cứu, 40 triệu trẻ Mỹ chơi thể thao.",
    "Trong số đó, 18 triệu nói đã bị la mắng hoặc chửi khi chơi — khiến nhiều trẻ có ấn tượng xấu, cho rằng thể thao quá hung hăng. Nhiều nhà nghiên cứu cho người lớn, nhất là phụ huynh và HLV, là nguyên nhân chính.",
    "Họ cho trẻ bắt chước hành vi hung hăng của người lớn, rồi được củng cố bằng phản hồi tích cực hoặc tiêu cực. Phụ huynh và HLV là thầy cô quyền lực vì trẻ thường ngưỡng mộ họ — và nhiều người lớn cũng hung hăng, gửi thông điệp thắng là tất cả.",
    "Ở sân trẻ em, phụ huynh có thể chửi cầu thủ khác hoặc reo khi con mình hành xử hung hăng. Trẻ có thể được dạy làm đau đối thủ là được, hoặc bị ép chơi tiếp khi chấn thương. Truyền hình còn khiến bạo lực trông hấp dẫn.",
    "Trẻ xem thể thao người lớn và thấy bạo lực lặp đi lặp lại. Xã hội cần đối mặt vấn đề này. Phụ huynh và HLV nên làm gương tốt hơn và dạy giá trị đúng.",
    "Dạy trẻ vui dù thắng hay thua — không cần “hạ gục” bản thân mới thích thể thao. Thắng không phải tất cả. Trẻ chấn thương không nên được phép chơi tiếp — cho trẻ bị thương ra sân là nói sức khỏe không quan trọng bằng thắng.",
    "Nếu thay đổi cơ bản, trẻ có thể lại yêu thích thể thao.",
  ],
  "reading-challenge-2-p8": [
    "Có người nổi tiếng bạn thực sự ngưỡng mộ không? Bạn có muốn chữ ký của họ? Bạn sẽ không vứt chữ ký vì sự ngưỡng mộ — nhưng một số người sưu tầm chữ ký cả người họ không ngưỡng mộ, chỉ vì người đó nổi tiếng.",
    "Họ không giữ để sưu tầm mà để bán. Hiện có hơn 20.000 người săn chữ ký vì giá trị tương lai. Vì họ trả giá cao, “thợ săn chữ ký” chờ ở sân thể thao, nhà hát, nhà hàng sang để lấy chữ ký bán.",
    "Đôi khi họ kiếm tới 1.500 đô la một chữ ký; một người rất thành công kiếm khoảng 100.000 đô la mỗi năm. Có công ty mua bán chữ ký — Profiles in History nói có bộ sưu tập chữ ký nghệ sĩ lớn nhất thế giới, doanh thu hơn 12 triệu đô la mỗi năm!",
    "Chữ ký của công ty có giá dưới 100 đô la, cũng có cái vài nghìn đô la. Giá phụ thuộc độ hiếm. Angelina Jolie và George Clooney ký rất nhiều nên chữ ký không hiếm, không đắt.",
    "Madonna và Nicole Kidman hiếm khi ký — chữ ký hiếm và đắt hơn. Nữ hoàng Elizabeth II gần như không bao giờ ký — vật có chữ ký của bà có thể bán khoảng 3.500 đô la. Người ký đã mất cũng không quan trọng.",
    "Elvis Presley và Napoleon ký nhiều thứ — chữ ký chỉ khoảng 1.500 đô la. Thư có chữ ký Marilyn Monroe rất hiếm — mỗi thư có thể 50.000 đô la. Giá cao nhất từng trả cho chữ ký là 750.000 đô la cho thư Abraham Lincoln viết và ký.",
  ],
  "reading-challenge-2-p9": [
    "Thập niên 1920, anh hùng khoa học viễn tưởng Buck Rogers bay trong truyện tranh bằng jetpack — tầm nhìn tương lai mà đến nay vẫn chưa thành hiện thực đầy đủ. Ở thế kỷ 21, người ta vẫn không dùng jetpack đi lại hàng ngày. Nhiều nhà phát minh đã thử, nhưng chưa cái nào hoạt động tốt như trong truyện.",
    "Một jetpack gần đây trình diễn tại Hội nghị Hiệp hội Máy bay Thử nghiệm là Martin jetpack của Glenn Martin (New Zealand). Jetpack 120 kg chứa khoảng 20 lít xăng, bay khoảng 30 phút.",
    "Hai quạt lớn hướng lên tạo luồng khí để người vận hành bay. Martin jetpack có thể quá ồn và nặng với một số người, nhưng thực sự hoạt động và đang bán trên thị trường. Jetpack khác là Jetlev-Flyer của Raymond Li.",
    "Jetlev-Flyer phóng người lên bằng tia nước thay vì khí. Nhỏ và nhẹ hơn Martin vì động cơ và bơm nước ở trên thuyền kéo theo sau người vận hành.",
    "Ống dài 10 mét nối động cơ với Jetlev-Flyer. Trong thử nghiệm, Li bay gần 10 mét cao, tốc độ tiến tới 35 km/h. Cả Martin lẫn Jetlev-Flyer đều khó bán rộng — quá đắt với người bình thường.",
    "Mỗi chiếc hơn 100.000 đô la.",
  ],
  "reading-challenge-2-p10": [
    "Hôm nay hầu hết chúng ta dễ có sách hoặc tạp chí mới — ra hiệu sách, đặt online, hoặc mượn thư viện. Hãy tưởng tượng phải đi bộ hàng dặm qua sa mạc nóng chỉ để mượn một cuốn sách — đó là thực tế của người ở các làng vùng Garissa, Kenya, Đông Phi.",
    "Năm 1996, thủ thư Wycliffe Oluoch mỗi ngày chờ người đến mượn trong số 24.000 cuốn thư viện Garissa. Sách không thiếu, nhưng ít người đến — quá mệt khi đi bộ qua sa mạc chỉ để mượn sách.",
    "Oluoch vắt óc tìm cách thu hút người vào thư viện. Sau nhiều suy nghĩ, ông nghĩ ra ý hay: nếu người ta không đến thư viện, ông sẽ mang thư viện đến họ. Ông buộc hộp sách lên lưng lạch đà — Thư viện Lạch đà Di động.",
    "Bắt đầu ba con năm 1996, gần đây mở rộng sáu con, phục vụ hơn một triệu người. Hai tuần một lần, thư viện lạch đà chở sách khắp vùng Garissa. Lạch đà cần ít nước, mang tới 500 pound sách qua cát.",
    "Một thủ thư, phụ tá, người chăn và người canh đi cùng — người canh giúp bảo vệ sách khỏi trộm. Trẻ Garissa yêu thư viện lạch đà và trân trọng nỗ lực của Oluoch. Mohamud Mohamed, 11 tuổi, đọc cẩn thận và trả sách đúng hạn.",
    "Cậu biết thư viện Garissa phạt mất sách như thư viện khác — nhưng hình phạt rất nặng: nếu làng mất một cuốn, thư viện lạch đà ngừng ghé thăm.",
  ],
  "reading-challenge-2-p11": [
    "William Shakespeare (1564–1616) viết nhiều kịch và thơ được biết toàn thế giới. Có lẽ bạn nghĩ tác phẩm nhà kịch Elizabethan không còn quan trọng — nhưng chúng trường tồn! Romeo and Juliet không chỉ được diễn lại khắp sân khấu mà còn thành phim nổi tiếng — hai lần!",
    "Cuối thế kỷ 1500, kịch Shakespeare thường diễn tại Nhà hát Globe ở London — sân khấu ngoài trời lớn, chỉ dùng ánh sáng tự nhiên, ít đạo cụ, nhưng luôn sôi động vì khán giả la, reo và nói chuyện với diễn viên.",
    "Globe rất thành công. Năm 1613, trong vở Henry VIII, đại bác sân khấu bắn và gây cháy — thiêu rụi nhà hát. Globe được sửa một năm sau nhưng không mở lâu; người Thanh giáo đóng vì không tán thành giải trí.",
    "Globe không mở lại và bị phá năm 1644. Người yêu sân khấu Anh không quên; năm 1970 quyết định xây lại gần thiết kế gốc nhất có thể. Năm 1989, khi làm Globe mới, họ tìm thấy phần tòa nhà gốc chỉ cách khoảng 100 mét — gần như đúng vị trí cũ!",
    "Globe mới khai trương 1999 và nhận nhiều giải là điểm du lịch hàng đầu châu Âu. Hàng trăm nghìn người đã xem các vở Shakespeare như A Midsummer Night’s Dream, As You Like It, Henry V.",
    "Shakespeare, giờ ngài ở đâu? Tất nhiên là tại Globe!",
  ],
  "reading-challenge-2-p12": [
    "Khi đặt tên con, một số cha mẹ chọn theo sở thích cá nhân. Ở gia đình khác, ông bà hoặc người chuyên đặt tên. Trong một số trường hợp, thời điểm sinh ảnh hưởng tên. Ở nhiều nền văn hóa châu Âu, cha mẹ thường chọn tên.",
    "Tên có thể dựa trên họ hàng hoặc tổ tiên. Ở Ý, trẻ truyền thống mang tên ông bà — thường ông bà nội trước, rồi đến ông bà ngoại nếu có thêm con.",
    "Ở Đông Âu, một số người đặt tên theo người thân đã mất — xem như cách bảo vệ trẻ khỏi Thiên thần chết. Ở một số nước châu Á, ông hoặc thầy bói chọn tên. Trái với đặt tên theo họ hàng, tên được chọn để ảnh hưởng tính cách.",
    "Ví dụ tên gắn với ngũ hành: lửa, nước, đất, mộc, kim; hoặc chữ nghĩa đẹp, mạnh, hiền. Ở một số nền văn hóa châu Phi, ngày sinh quyết định tên lớn.",
    "Ở văn hóa Akan (Ghana), mỗi ngày trong tuần có tên riêng cho trai và gái — ví dụ trai sinh thứ Sáu là Kofi, gái cùng ngày là Afua; cả hai nghĩa “người lang thang/khám phá”, được xem như kẻ lữ hành.",
    "Dù tên đến từ đâu, tên là món quà đầu đời. Dù theo sở thích hay truyền thống, tên phản ánh văn hóa — vì vậy mọi tên đều nên được trân trọng.",
  ],
  "reading-challenge-2-p13": [
    "Đó là nơi đặc biệt, tối tăm, hoàn toàn khác mọi nơi khác. Rừng mưa là nơi cây mọc rất cao; hàng triệu loài động vật, côn trùng và thực vật sống ở đó. Nóng ẩm, mưa nhiều — đôi khi bạn không biết đang mưa vì tán cây dày che mưa không chạm đất.",
    "Rừng mưa chỉ chiếm khoảng 6% bề mặt Trái Đất, ở vùng nhiệt đới. Rừng mưa lớn nhất là Amazon ở Nam Mỹ — 1,2 tỷ mẫu Anh, gần 5 triệu km². Rừng mưa lớn thứ hai ở Tây Phi; còn có ở Trung Mỹ, Đông Nam Á, Đông Bắc Úc và quần đảo Thái Bình Dương.",
    "Rừng mưa cho ta nhiều thứ. Amazon được gọi “lá phổi hành tinh” vì sản xuất 20% oxy thế giới. Một phần năm nước ngọt thế giới cũng ở Amazon.",
    "Một nửa loài động vật, thực vật và côn trùng trên Trái Đất sống ở rừng mưa. 80% thực phẩm ta ăn lần đầu mọc ở rừng mưa — dứa, chuối, cà chua, ngô, khoai, sô-cô-la, cà phê, đường…",
    "25% thuốc khi ốm làm từ cây chỉ mọc ở rừng mưa; một số dùng chống ung thư. Với nhiều điều tốt từ rừng mưa, thật đáng ngạc nhiên ta đang phá hủy chúng — mỗi giây 1,5 mẫu Anh (6.000 m²) biến mất.",
    "Rừng bị chặt để nuôi bò, thu hoạch cây, mở đất canh tác. Mất vô số loài quý, phá rừng gây ô nhiễm, ít mưa và ít oxy hơn cho thế giới.",
    "be made (out) of [được làm từ] — Ví dụ: Áo anh ấy làm bằng lụa. cut down [chặt cây cho ngã] — Ví dụ: Anh ấy chặt cây để lấy gỗ làm nhà.",
    "Điền thành ngữ phù hợp (đổi dạng nếu cần): Mỗi tháng Mười Hai gia đình tôi ra ngoài và __________ cây Giáng sinh. Xà phòng này __________ nguyên liệu thiên nhiên. Thịt bò __________ phần lớn chế độ ăn điển hình của người Mỹ.",
  ],
  "reading-challenge-2-p14": [
    "Trước đây người ta uống cà phê hoặc trà buổi sáng để tỉnh táo. Rồi nước ngọt cola ra đời — nhiều caffeine và đường, trở thành “đồ bổ” được chọn cho nhiều người lớn và thanh thiếu niên. Giờ các hãng bán “nước tăng lực” nhằm cho người mệt thêm năng lượng.",
    "Ví dụ phổ biến là Red Bull. Hãng nói trong phỏng vấn Red Bull không phải đồ giải khát, cũng không thay nước cho vận động viên — mà để hồi phục cơ thể và tinh thần người mệt.",
    "Để làm vậy, nhà sản xuất thường thêm vitamin và hóa chất giống thứ cơ thể tự tạo năng lượng. Vitamin, hóa chất, caffeine và đường có vẻ chắc chắn cho bạn thêm năng lượng.",
    "Chuyên gia y tế không chắc. Một là chưa đủ bằng chứng cho thấy mọi vitamin trong nước tăng lực thực sự tăng năng lượng. Hai là có quá nhiều thành phần — không ai chắc chúng tương tác thế nào.",
    "Brent Bauer, giám đốc Mayo Clinic (Mỹ), khuyên đừng tin mọi tuyên bố của nước tăng lực. Ông nói: “Có thể hợp lý nếu trộn mười hai thứ này sẽ có kết quả tốt” — nhưng hỗn hợp cũng có thể ảnh hưởng xấu.",
    "“Chúng ta chưa biết ở thời điểm này,” ông nói.",
  ],
  "reading-challenge-2-p15": [
    "Hay bạn thích tương cà lên khoai tây chiên? Vậy bạn thích thành phần chính trong các loại tương đó — cà chua. Cà chua gốc Nam Mỹ, người bản địa ăn từ hàng nghìn năm; nay phổ biến toàn cầu. Khi mới du nhập, có nhiều tranh cãi và lo sợ.",
    "Văn bản Aztec cổ có công thức món cà chua, ớt và muối — có lẽ salsa đầu tiên! Binh lính Tây Ban Nha chinh phục Aztec, mang hạt cà chua về châu Âu. Ở châu Âu, cà chua vàng được gọi “táo vàng”. Lâu dài, người Bắc Âu và Bắc Mỹ không ăn — sợ vì cây giống cây thuốc độc nightshade.",
    "Người Đức còn tin ăn cà chua sẽ hóa người sói. Đến giữa thế kỷ 1800, thế giới chấp nhận cà chua là thực phẩm tốt — nhưng cà chua còn một tranh cãi nữa: quả hay rau?",
    "Thực ra cà chua là quả. Tuy nhiên ở Mỹ, theo luật cà chua là rau. Vì sao? Thế kỷ 1800, trái cây nhập khẩu không thuế, rau có thuế; nhiều cà chua nhập vào Mỹ khiến nông dân Mỹ lo mất việc.",
    "Chính phủ xếp cà chua là rau để đánh thuế cà chua nước ngoài. Dễ thấy cà chua thực sự là quả — giống quả mọng: có hạt bên trong, mọc từ hoa, có phần thịt ngon quanh hạt.",
    "Cà chua và dâu tây cùng họ. Kem cà chua, ai dám thử?",
  ],
  "reading-challenge-2-p16": [
    "Khi thế kỷ mới bắt đầu, vài tổ chức nghĩ đến việc chọn vận động viên vĩ đại nhất thế kỷ 20 — gồm BBC, Sports Illustrated (SI) và World Sports Award Organization. Thú vị là cả ba đều chọn cùng một người là Vận động viên thế kỷ!",
    "Một người luôn nằm đầu danh sách là huyền thoại golf Jack Nicklaus — không ai nghi ngờ ông là golfer vĩ đại nhất thế kỷ. Chiến thắng Masters lần thứ sáu năm 1986 ở tuổi 46 làm fan golf khắp thế giới kinh ngạc.",
    "Nicklaus còn nổi tiếng vì công việc từ thiện giúp trẻ khó khăn. Huyền thoại thứ hai trên cả ba danh sách nhưng không giành vị trí cao nhất là Pelé — dẫn đội Brazil vô địch World Cup 1958 khi mới 17 tuổi, cầu thủ duy nhất có ba huy chương vô địch World Cup.",
    "Pelé ghi hơn 1.000 bàn trong sự nghiệp. Ngoài danh tiếng bóng đá, ông còn cố cải thiện đời sống người nghèo ở Brazil và thế giới. Tương tự, vận động viên được BBC, SI và World Sports Award bầu còn nổi tiếng vì hơn cả kỹ năng thể thao.",
    "Ông lên tiếng chống lạm dụng quyền tự do dân sự, đến mức bị tước giải trong môn của mình. Sau này mắc bệnh Parkinson, ông vẫn mạnh mẽ làm việc vì niềm tin. Gần bốn mươi năm trước khi nhận giải, ông tự gọi mình là người vĩ đại nhất.",
    "Vận động viên thế kỷ 20 không nghi ngờ là võ sĩ Muhammad Ali.",
  ],
  "reading-challenge-2-p17": [
    "Einstein, Leonardo da Vinci, Julius Caesar và Napoleon có điểm chung gì? Họ đều thuận tay trái! Từ sớm trong lịch sử, người thuận trái bị sợ, bỏ bê và trừng phạt vì dùng tay trái bị coi là xấu. Trong tiếng Latin, “trái” là “sinister” (đáng sợ). Vì định kiến, người thuận trái bị ép đổi sang tay phải.",
    "Việc đó gây nhiều khó ở trường — thất vọng, hành vi xấu, bỏ học cao. Có lẽ vì vậy người thuận trái bị gán khuôn mẫu là kém thông minh — ý kiến trái ngược sự thật. Nhà nghiên cứu não thấy khác biệt giữa hai bên não.",
    "Họ cho người dùng nhiều bên trái não hơn thường thông minh hơn, dùng ngôn ngữ tốt và giải quyết vấn đề nhanh hơn — nhưng một nghiên cứu cũng cho thấy họ trí nhớ kém hơn. Vậy người thuận trái dùng bên nào?",
    "Người thuận phải dùng bên trái não nhiều hơn; người thuận trái dùng gần như cả hai bên bình đẳng. Phần nối hai nửa não thường lớn hơn ở người thuận trái — thông tin truyền hiệu quả hơn.",
    "Bán cầu trái điều khiển nói, ngôn ngữ, viết, logic, toán và khoa học; bán cầu phải điều khiển âm nhạc, nghệ thuật, sáng tạo, nhận thức và cảm xúc. Vì dùng cả hai bên, người thuận trái thường vừa sáng tạo vừa khoa học. Khoảng 10% thế giới thuận trái; tỷ lệ nam:nữ là 2:1.",
    "May mắn là cha mẹ và giáo viên không còn coi thuận tay trái là bệnh cần chữa — có thể góp phần vào sự xuất sắc của trẻ! Nếu được học theo cách riêng, người thuận trái sẽ giỏi ở trường. Có lẽ một người trong số họ sẽ là Einstein hay da Vinci tiếp theo.",
  ],
  "reading-challenge-2-p18": [
    "Người thích trượt tuyết mơ được trượt ở nơi kỳ lạ — giờ không chỉ Rocky Mountains hay Alps mà còn Dubai! Dubai, thành phố đông dân nhất UAE, có khu trượt tuyết. Ski Dubai khai trương 2005.",
    "Là cơ sở trượt tuyết trong nhà lớn thứ ba thế giới, Ski Dubai có nhiều điều gây kinh ngạc. Trước hết, được xây nơi không có đồi tự nhiên và không bao giờ có tuyết ngoài trời. Hè sa mạc có thể 45°C, nhưng đường trượt giữ ở -2°C quanh năm.",
    "Như khu trượt khác, có ghế kéo và HLV; còn quán kiểu Thụy Sĩ trên đường trượt để nghỉ và ấm lên. Ngoài năm đường trượt trong nhà (kể cả đường đen), khách có thể dựng người tuyết ở khu riêng.",
    "Trẻ có thể ném tuyết ở khu ném tuyết hoặc khám phá hang tuyết đầy điều thú vị. Thỉnh thoảng khách còn trải nghiệm tuyết rơi. Khi cần làm tuyết mới, nhiệt độ hạ xuống -8°C.",
    "Súng tuyết phun nước lạnh tạo mây gần trần; hạt băng nhỏ bắn vào mây tạo tinh thể tuyết — tuyết nhân tạo rơi xuống khách phía dưới. Raed Al Yousofi, lần đầu thấy tuyết rơi, nói: “Rất lạ nhưng tuyệt vời.” — mô tả chính xác cho Ski Dubai.",
  ],
  "reading-challenge-2-p19": [
    "Khi máy tính phổ biến hơn, nhu cầu an ninh càng quan trọng. Một trong những mối đe dọa lớn nhất trên mạng là hack máy tính — truy cập trái phép vào máy hoặc mạng. Hacker là người xâm nhập hệ thống bất hợp pháp.",
    "Họ có thể sửa hoặc xóa thông tin, trộm dữ liệu riêng, hoặc phát virus phá hủy tệp. Làm sao hacker vào được? Hầu hết lợi dụng giao thức (protocols) có sẵn trong phần mềm — cho phép máy tính tương tác với nhau.",
    "Giao thức giống “cảnh sát” máy tính: khi máy kết nối hệ thống khác, giao thức kiểm tra truy cập có hợp lệ và quyết định chia sẻ bao nhiêu thông tin. Hacker có thể thao túng giao thức để có quyền truy cập không giới hạn.",
    "Chỉ việc vào mạng đã được coi là hack — gọi là hack thụ động. Hacker thụ động “phê” vì chỉ vào được hệ thống khó như ngân hàng hay quân sự. Loại khác cố gây hại — sau khi vào, phát virus hoặc sửa, xóa, lấy thông tin.",
    "Gọi là hacker chủ động — rõ ràng nguy hiểm hơn. Cách bảo vệ dễ nhất là mật khẩu tốt — dài và lạ, khó đoán. Để an toàn hơn, một số dịch vụ dùng hệ thống “password-plus”.",
    "Người dùng nhập mật khẩu rồi mã thứ hai đổi sau mỗi lần truy cập — qua thẻ hoặc thiết bị riêng. Dù hacker lấy mật khẩu cũng không có mã; lấy được mã cũng không biết mật khẩu.",
  ],
  "reading-challenge-2-p20": [
    "Bạn lo ý tưởng quá kỳ hoặc phi thực tế? Có lẽ nên nghĩ lại. Ý tưởng kỳ chưa bao giờ cản Arthur Pedrick — nhà phát minh người Anh. Ban đầu là nhân viên chính phủ, ông dành nghỉ hưu thập niên 1960–1970 phát triển ý tưởng lạ.",
    "Một số trái vật lý cơ bản, nhưng không ngăn được Pedrick. Một ý tưởng kỳ nhất: nối ống lớn từ Australia tới Antarctica, dài 10.000 km, chở cục băng khổng lồ — băng tan ở sa mạc Australia để tưới tiêu.",
    "Phát minh khác: bóng golf điều khiển bằng radio — golfer đổi tốc độ và hướng bằng cánh nhỏ có chip máy tính; dùng sóng radio còn tìm bóng lạc.",
    "Pedrick có hàng nghìn ý tưởng kỳ, hầu hết không được làm. Dù vậy, nhiều ý tưởng lạ khác đã thành hiện thực. Năm 1989, một công ty bán thiết bị chống trộm xe đắt tiền — gắn ống dưới đáy xe.",
    "Kẻ trộm cố lấy xe, lửa cực nóng phun từ ống đốt cháy tên trộm. Tuy nhiên người không phải trộm cũng bị thương nặng khi vô tình kích hoạt khi đi ngang qua. Phát minh lạ khác: quần lót cho chó và bút mực uống được.",
    "Quần lót giúp chó không làm bừa khi đi dạo; bút mực uống được rất tiện khi khát trong giờ thi! Nếu ý tưởng có vẻ “out in left field”, đừng để điều đó ngăn bạn thử — bạn sẽ có nhiều đồng đội lạ.",
  ],
};

function main() {
  mkdirSync(DIR, { recursive: true });
  for (const [id, paragraphs] of Object.entries(VI)) {
    const file = path.join(DIR, `${id}.vi.json`);
    writeFileSync(file, `${JSON.stringify({ paragraphs }, null, 2)}\n`, "utf8");
    console.log(`wrote ${id}.vi.json (${paragraphs.length} đoạn)`);
  }
}

main();
