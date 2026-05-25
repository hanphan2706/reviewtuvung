/**
 * Ghi bản dịch Reading Challenge 1 → reading translations/*.vi.json
 *
 *   npx tsx scripts/apply-reading-challenge-vi.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "reading translations");

const VI: Record<string, string[]> = {
  "reading-challenge-1-p1": [
    "Nếu bạn thích tuyết và băng, có lẽ bạn nên ở tại Ice Hotel ở Quebec, Canada. Nhưng bạn chỉ có thể nhận phòng ở khách sạn này vào mùa đông, vì khách sạn được làm hoàn toàn từ băng và tuyết! Khách sạn kỳ lạ này được xây mỗi tháng Mười hai, có 32 phòng và mỗi đêm 80 khách có thể ở đó.",
    "Khách sạn có rạp chiếu phim, phòng trưng bày nghệ thuật và nhà thờ — tất nhiên đều làm bằng băng. Thậm chí nội thất, tranh, đèn, đĩa và cốc uống cũng làm bằng băng. Vì quá đặc biệt, khách sạn trở nên rất nổi tiếng; du khách khắp thế giới đến xem nghệ thuật băng, dùng bữa bằng bộ đồ băng thiết kế và trải nghiệm không khí độc đáo.",
    "Một số cặp đôi còn tổ chức đám cưới tại nhà thờ băng. Tuy nhiên, mọi khách vẫn mặc áo khoác mùa đông! Vì toàn bộ là băng, nhiệt độ trong khách sạn luôn từ -2 đến -5 độ C. Bất ngờ là ngủ trong phòng lạnh không phải vấn đề: mỗi khách được túi ngủ chuyên dụng cho thời tiết lạnh và vài tấm chăn lông thú.",
    "Chúng giữ ấm cho khách đến sáng.",
  ],
  "reading-challenge-1-p2": [
    "Bạn biết bao nhiêu về lịch sử một số món ăn yêu thích? Bạn có biết người Anh bắt đầu nấu món cà ri từ khi nào, hay pizza và hamburger được làm lần đầu ở nước nào không? Sự thật có thể khiến bạn ngạc nhiên. Nhiều người nghĩ người Anh biết đến cà ri từ Ấn Độ vào thế kỷ 17.",
    "Thực tế, giới quý tộc Anh đã ăn món có gia vị cà ri từ hàng trăm năm trước khi tàu Anh đến Ấn Độ. Đầu bếp các gia đình giàu thời vua Richard I đã nấu món cà ri, và từ “curry” còn xuất hiện trong sách nấu ăn tiếng Anh từ năm 1377. Còn pizza, món này có lẽ ra đời ở Ba Tư (nay là Iran).",
    "Người Ba Tư đã ăn bánh tròn dẹt có phô mai từ thế kỷ 6 — gần 1.000 năm trước khi pizza phổ biến ở Naples, Ý! Cuối cùng, hamburger: nhiều người cho đây là món Mỹ, nhưng theo một số câu chuyện, hamburger đến từ Hamburg, Đức.",
    "Otto Kuasw, người Đức, tạo ra hamburger đầu tiên năm 1891. Bốn năm sau, thủy thủ Đức đưa hamburger đến với người Mỹ. Nguồn gốc món ăn không quan trọng bằng hương vị — miễn là ngon! Vậy hãy lấy món yêu thích và thưởng thức thôi.",
  ],
  "reading-challenge-1-p3": [
    "Bão nhiệt đới ở châu Á gọi là typhoon, còn ở Bắc và Nam Mỹ gọi là hurricane. Các cơn bão này quay như bánh xe theo chiều kim đồng hồ ở Bắc bán cầu, với sức gió từ 60 km/h trở lên. Ở Mỹ, Trung tâm Dự báo Nhiệt đới tại Miami, Florida theo dõi hurricane.",
    "Khi khí tượng phát hiện hurricane, họ đặt tên — có thể tên nam hoặc nữ. Tên giúp mọi người theo dõi thông tin và nguy cơ dễ hơn. Tổ chức Khí tượng Thế giới (WMO) quyết định danh sách tên.",
    "WMO lập danh sách theo bảng chữ cái Latin; mỗi tên bắt đầu bằng một chữ khác nhau. Cơn đầu tiên trong năm nhận tên đầu tiên của danh sách năm đó, cơn thứ hai nhận tên tiếp theo — ví dụ Abel rồi Betty.",
    "Danh sách không có tên bắt đầu bằng Q, U, X, Y, Z vì ít tên như vậy. Các nước châu Á dùng danh sách khác do Ủy ban Typhoon của WMO lập, gồm ít tên người, chủ yếu là hoa, động vật, cây và tương tự.",
  ],
  "reading-challenge-1-p4": [
    "Một nữ diễn viên trẻ sắp bước lên sân khấu. Đứng bên cánh, cô trông hồi hộp. Bạn có thể nghe cô thì thầm với bạn: “Tôi thấy bướm bay trong bụng.” Bướm trong bụng ư? Cảm giác đó đến từ hóa chất cơ thể tiết ra khi căng thẳng.",
    "Một hóa chất như vậy là cortisol. Trong tình huống bình thường, cortisol có lợi — giúp cơ thể bắt đầu hoạt động buổi sáng sau khi thức dậy, và hỗ trợ phản ứng với tập luyện lành mạnh. Nhưng khi căng thẳng, lượng cortisol thêm vào ảnh hưởng dạ dày.",
    "Với một số người, cortisol làm “đóng băng” dạ dày, tạo cảm giác bướm bay. Với người khác, cortisol khiến dạ dày hoạt động nhanh hơn và họ cảm thấy buồn nôn. Để xua bướm, bạn chỉ cần thư giãn — cười hoặc nói chuyện về áp lực giúp giảm căng thẳng.",
    "Bước ra sân khấu cũng giúp những con bướm bay đi.",
  ],
  "reading-challenge-1-p5": [
    "Mọi động vật có vú đều cần ngủ, chim và bò sát như rắn cũng vậy — còn côn trùng thì sao? Các nhà khoa học nhiều năm nay cố tìm hiểu côn trùng có ngủ không. Ban đầu họ cho rằng côn trùng không cần ngủ vì não đơn giản.",
    "Họ cho rằng hoạt động não như mơ là dấu hiệu ngủ; côn trùng không mơ nên không ngủ, chỉ nghỉ. Tuy nhiên, nghiên cứu mới cho thấy một số côn trùng có thể thực sự ngủ. Có bốn kiểu hành vi khi ngủ.",
    "Thứ nhất, người và động vật ngủ ít cử động và có tư thế ngủ (ví dụ nằm). Thứ hai, họ khó bị đánh thức bởi tiếng ồn hoặc ánh sáng. Cuối cùng, họ có thể tỉnh nhanh khi có kích thích mạnh.",
    "Giờ đây các nhà khoa học thấy hành vi tương tự ở ruồi giấm: mỗi đêm khoảng bảy giờ chúng bất động, ngồi khác đi, râu rủ và không phản ứng với tiếng nhỏ; chỉ khi tiếng lớn hơn chúng mới cử động.",
    "Họ cho rằng một số côn trùng có kiểu ngủ riêng.",
  ],
  "reading-challenge-1-p6": [
    "Tiger Woods bắt đầu chơi golf lúc hai tuổi và giờ là một trong những golfer chuyên nghiệp nổi tiếng nhất thế giới. Tiger đến từ Mỹ; cha người Mỹ gốc Phi, mẹ người Thái. Tên thật là Eldrick, nhưng mọi người gọi là Tiger — biệt danh cha đặt.",
    "Anh chơi chuyên nghiệp từ 1996 và thắng cả bốn Giải vô địch Golf Thế giới trước tuổi 25 — kỷ lục người trẻ nhất. Dù đã chơi nhiều sân lớn, một nơi Tiger thích là Pebble Beach.",
    "Tiger sớm trở thành hình mẫu; nhiều người ngưỡng mộ nên anh rất biết ơn. Vì được giúp đỡ thuở nhỏ, anh muốn giúp lại người khác. Có người không chơi được vì sắc tộc, có người vì thiếu tiền — đôi khi chính Tiger cũng từng bị cản.",
    "Vì vậy anh lập Quỹ Tiger Woods để golf mở rộng cho mọi người. Anh muốn thấy đa dạng trên sân và mọi trẻ em đều có thể chơi nếu muốn. Tiger vui vì nhiều trẻ nay muốn chơi golf nhờ anh.",
  ],
  "reading-challenge-1-p7": [
    "Báo chí và truyền hình thường đưa tin về điều xấu trong xã hội. Tuy nhiên, có nơi đọc được tin vui — website HappyNews. Người sáng lập là Byron Reese; anh cho rằng các nguồn tin khác khiến người đọc có cái nhìn mất cân bằng về thế giới.",
    "Reese nói: “Truyền thông làm méo mó thế giới khi phóng đại tin xấu, đau khổ và tuyệt vọng. Chúng tôi cố cân bằng lại.” Không phải ai cũng đồng ý. Nhiều người cho rằng báo chí có trách nhiệm đưa tin hữu ích.",
    "Người ta cần biết vấn đề trong xã hội để quyết định sáng suốt hơn về đời sống hàng ngày. Reese nói HappyNews không ngăn người học về vấn đề — chỉ cố cho bức tranh hôm nay cân bằng hơn.",
    "Cuối tháng đầu trực tuyến, HappyNews có hơn 70.000 độc giả riêng, khoảng 60% là phụ nữ. Khác với nhiều website tin, HappyNews nhận thư cảm ơn từ độc giả hằng ngày.",
  ],
  "reading-challenge-1-p8": [
    "Wilbur và Orville Wright lớn lên cuối thế kỷ 19, say mê máy móc và bay từ nhỏ. Thậm chí họ không tốt nghiệp trung học! Nhà phát minh máy bay đầu tiên chỉ là hai anh em bình thường với giấc mơ bay. Họ lớn lên ở Indiana trong gia đình đông con; thay vì ngồi lớp, họ thích làm máy móc.",
    "Khi 18 và 22 tuổi, hai anh mở xưởng in và cửa hàng xe đạp. Một ngày Wilbur đọc báo về người chết khi thử bay trên tàu lượn — câu chuyện gợi ý cho Wilbur tự học bay để chế tạo tàu lượn hoàn hảo.",
    "Hai anh thử nghiệm tàu lượn mới trên bãi biển thành công. Sau đó họ gắn động cơ và cánh quạt, gọi máy là “Wright Flyer”. Lần thử đầu hỏng, nhưng họ không bỏ cuộc.",
    "Thêm chút nỗ lực, Wright Flyer bay thành công! Ngày 17 tháng 12 năm 1903, họ ghi dấu lịch sử khi bay qua bãi Kitty Hawk, Bắc Carolina. Máy bay ra đời.",
  ],
  "reading-challenge-1-p9": [
    "Các công ty ngày nay chi hàng nghìn đô la cho an ninh máy tính, mua firewall và phần mềm tốt nhất. Tuy nhiên Kevin Mitnick cho rằng nguy hiểm lớn nhất không phải lỗ hổng công nghệ. Thập niên 1990, Mitnick là hacker khét tiếng, xâm nhập hệ thống chính phủ và doanh nghiệp. Sau khi ngồi tù, anh dùng kỹ năng theo hướng khác.",
    "Anh lập công ty an ninh máy tính và tư vấn cách bảo vệ máy tính. Theo Mitnick, mối đe dọa lớn nhất là con người — không phải hacker mà người dùng chương trình. “Nếu kẻ tấn công lừa được một người tin tưởng đưa thông tin, hệ thống đã lọt.”",
    "“Tiền bỏ ra coi như lãng phí.” Một hacker có thể vượt mọi rào cản chỉ nhờ một nhân viên trong công ty. Đáng tiếc là con người vẫn quá dễ tin. Trong thử nghiệm gần đây tại cơ quan thuế Mỹ (IRS), chuyên gia an ninh gọi cho 100 quản lý, giả danh kỹ thuật viên IRS.",
    "Họ lừa được nhiều quản lý cung cấp cả mật khẩu lẫn ID. Với hacker thật, đó sẽ là thảm họa!",
  ],
  "reading-challenge-1-p10": [
    "Thay vì lon nước ngọt, bạn có thể gặp một cặp bọ cánh cứng còn sống? Nghe lạ, nhưng ở Nhật có công ty bán bọ lớn qua máy bán hàng tự động. Công ty và nhà bảo tồn tranh cãi về cách bán này. Nhiều học sinh Nhật sưu tầm bọ.",
    "Người lớn cũng thích sở thích này. Tuy nhiên việc xây nhà nơi bọ sống phá môi trường của chúng, khiến khó tìm bọ ngoài tự nhiên. Từ 1999, Mirai Seiko bán bọ qua máy, nói muốn giúp người sở hữu loài hiếm và chăm sóc bọ trong máy.",
    "Dù đúng hay không, máy rất phổ biến — bán hơn 1.500 con mỗi tháng, đôi khi hết hàng trong vài phút. Ngược lại, nhà bảo tồn cho rằng máy có hại.",
    "Trẻ em có thể nghĩ sinh vật sống như nước ngọt hay kẹo. Bạn thấy máy cho trải nghiệm hiếm hay gieo ý tưởng xấu? Dù sao, chúng cũng cho thấy con người có thể rất sáng tạo.",
  ],
  "reading-challenge-1-p11": [
    "Một phụ nữ trẻ không có lông mày ngồi trước phong cảnh đẹp — nghe quen chứ? Đó là một trong những tác phẩm nổi tiếng nhất của Leonardo da Vinci. Mona Lisa là bức tranh tuyệt đẹp, nhưng điều khiến người ta mê mẩn là bí ẩn: người phụ nữ là ai và vì sao ông vẽ cô?",
    "Nhiều giả thuyết về danh tính cô. Người hâm mộ nghĩ đó là chân dung da Vinci hóa trang thành phụ nữ; người khác cho đó là lý tưởng phụ nữ, không phải một người cụ thể — vì vậy cô không có lông mày, tạo vẻ siêu thực.",
    "Cũng có ý kiến đó là vợ Francesco del Giocondo. Năm 2005, nhà sử học Armin Schlechter ở Heidelberg tìm thấy ghi chú trong tài liệu cổ, xác định người trong tranh là Lisa del Giocondo.",
    "Họa sĩ được trả tiền vẽ chân dung sau khi cô sinh con thứ hai. “Mona” nghĩa là “bà” trong tiếng Ý. Còn vẻ siêu thực? Phụ nữ thời đó thích cạo lông mày vì cho rằng lông mày không đẹp.",
  ],
  "reading-challenge-1-p12": [
    "Bạn có hay dùng shampoo hay xịt ketchup lên đồ ăn? Có ghé sauna chưa? Nếu nghĩ các từ này là tiếng Anh gốc, bạn nên nghĩ lại — mỗi từ đến từ một ngôn ngữ khác! Shampoo thực ra từ tiếng Hindi ở Ấn Độ.",
    "Ban đầu nghĩa là “mát-xa”. Ở tiệm tóc Ấn Độ, thợ cắt tóc mát-xa đầu khi gội. Dần người Anh ở Ấn dùng từ này cho dung dịch gội đầu. Hầu hết mọi người biết ketchup — sốt cà chua rót lên khoai tây chiên hay bánh mì.",
    "Từ này gốc Trung Quốc (ketsiap, nước mắm cá). Thế kỷ 17, thủy thủ Anh và Hà Lan đưa nước mắm sang châu Âu; theo thời gian người ta thêm vị cà chua nhưng tên gần như giữ nguyên. Sauna, phòng hơi nước công cộng, đến từ tiếng Phần Lan.",
    "Trong một kỳ Olympic châu Âu, vận động viên Anh và Đức thấy người Phần Lan dùng sauna sau tập; sau đó công chúng châu Âu cũng làm theo. Giờ ta vẫn dùng từ này cho nhiều loại phòng hơi. Tiếng Anh đầy từ mượn tuyệt vời từ nhiều ngôn ngữ.",
    "Có lẽ nên đổi tên thành An-Hindi-Trung-Phần-Pháp-Đức-Ý-Tây Ban Nha!",
  ],
  "reading-challenge-1-p13": [
    "Sa mạc là vùng đất khô, ít mưa, có ở châu Phi, Trung Quốc, Nam Mỹ và Bắc Mỹ. Ở nhiều nơi sa mạc đang mở rộng — vấn đề nghiêm trọng vì sa mạc phá đồng ruộng và đất sống của động vật; khi không trồng được lương thực hay săn bắn, người dân phải rời nhà.",
    "Đôi khi thiên nhiên khiến sa mạc lan rộng: gió đẩy cát lên đất canh tác; hạn hán lâu làm cây chết và sa mạc lớn. Con người cũng gây sa mạc hóa — ví dụ ô nhiễm không khí làm vùng nóng hơn, giảm mưa.",
    "Quá đông dân hoặc quá nhiều gia súc cũng hại đất. Bò đi lại nhiều biến đất thành bụi, gió thổi bay. Cây giữ nước trong đất; chặt quá nhiều cây khiến đất cạn và xấu. Tất cả đều thúc đẩy sa mạc hóa.",
    "Để ngăn sa mạc lan, con người cần cách đối xử tốt hơn với đất.",
  ],
  "reading-challenge-1-p14": [
    "Nước rất quan trọng cho sức khỏe. Một số bác sĩ khuyên uống một cốc nước mỗi sáng, trước khi làm gì khác, ở nhiệt độ gần nhiệt độ cơ thể — không quá nóng cũng không quá lạnh. Vì sao? Nước giúp cơ thể theo nhiều cách.",
    "Nước giúp thận lọc sạch, chuẩn bị dạ dày tiêu hóa và giúp ruột hấp thu dinh dưỡng tốt hơn, đồng thời giúp đi vệ sinh dễ hơn. Nhà khoa học gợi ý mỗi ngày khoảng 1.600 mililit nước.",
    "Đừng uống hết một lần — thận sẽ phải làm việc quá sức. Nên uống buổi sáng và chiều. Một số người thích uống giữa các bữa, không trong bữa, vì cho rằng nước loãng dịch tiêu hóa.",
    "Điều đó có thể cản trở tiêu hóa bình thường. Bạn uống đủ nước chưa? Xem màu nước tiểu: vàng nhạt thì có lẽ đủ; vàng đậm thì cần uống thêm. Thêm chút nước mỗi ngày có thể khiến bạn khỏe hơn nhiều!",
  ],
  "reading-challenge-1-p15": [
    "Bạn có tin động vật dự đoán được động đất và thiên tai khác? Hàng trăm năm, người ta quan sát động vật và chú ý cách chúng hành xử — ví dụ nông dân tin thiên nga bay ngược gió báo bão, hay bò nằm xuống báo mưa. Có nhiều truyện dân gian nối động vật với thiên nhiên.",
    "Một số nhà khoa học xem lại xem có sự thật nào không. Kiyoshi Shimamura, nhà nghiên cứu động đất Nhật Bản, nhận thấy vết cắn chó tăng ngắn trước khi động đất. Ông khảo sát 12 trung tâm y tế công cộng ở Kobe.",
    "Các trung tâm điều trị người sau trận động đất lớn. Tháng trước đó, số ca điều trị vết cắn động vật tăng; hành vi hung hăng ở chó như cắn và sủa to tăng 60%! Động vật khác cũng đổi hành vi trước động đất.",
    "Ví dụ cá trong ao hồ bơi thành đàn ở giữa, không sát bờ; chim có thể bỏ tổ nhiều ngày, bỏ trứng không được ấp. Những điều này gợi ý động vật có thể dự báo thiên nhiên tốt hơn con người.",
  ],
  "reading-challenge-1-p16": [
    "Hayao Miyazaki sinh ngày 5 tháng 1 năm 1941 tại Tokyo. Thuở nhỏ thích đọc và vẽ hoạt hình. Sau đại học năm 1963, ông vào Công ty Hoạt hình Toei, tham gia nhiều phim như Puss in Boots. Năm 1984, ông làm Nausicaä of the Valley of the Wind dựa trên truyện tranh của chính mình.",
    "Phim thành công giúp ông lập Studio Ghibli riêng. Một phim được yêu thích là My Neighbor Totoro (1987) — phim thiếu nhi nhưng nhiều người lớn cũng thích, kể về hai chị em kết bạn với sinh vật khổng lồ Totoro.",
    "Câu chuyện ấm áp với nhân vật kỳ ảo như Cat Bus — chú mèo cũng là xe buýt. Spirited Away (2001) còn thành công hơn, doanh thu cao nhất lịch sử điện ảnh Nhật. Phim của Miyazaki đều có người và sinh vật lạ mà đáng yêu.",
    "Nhiều câu chuyện ở thế giới khác thế giới ta, nhưng vẫn phản ánh đời thực — ông thường chỉ ra con người làm tổn hại thiên nhiên và kêu gọi đổi cách sống. Phim ông kết hợp fantasy và hiện thực theo cách riêng.",
    "Có lẽ đó là lý do hàng triệu người yêu thích phim của ông.",
  ],
  "reading-challenge-1-p17": [
    "Ví dụ, màu đỏ có thể khiến người ta hứng khởi và thậm chí thấy đói hơn. Vàng tăng năng lượng. Vì vậy phòng đỏ và vàng đậm có thể là nơi ăn nhanh nhiều đồ. Ngược lại, xanh dương và xanh lá mang cảm giác yên bình.",
    "Xanh dương giúp bình tĩnh — phòng xanh dương thích hợp để học vì dễ tập trung, dù dễ buồn ngủ hơn phòng đỏ. Màu quần áo cũng ảnh hưởng cảm xúc: đen và xanh đậm tạo cảm giác mạnh mẽ, nghiêm túc.",
    "Người mặc vest đen dễ trông như lãnh đạo hơn người mặc trắng. Vest đen cà vạt đỏ vừa mạnh vừa năng động — có lẽ vì vậy nhiều chính khách và doanh nhân mặc như vậy. Nâu và xanh lá tạo cảm giác đáng tin.",
    "Nhiều người chọn xanh lá hoặc nâu khi họp hay phỏng vấn. Chọn màu cho phòng và quần áo không chỉ là thẩm mỹ.",
  ],
  "reading-challenge-1-p18": [
    "Bạn có lo khi bạn cùng lớp nói mình là philatelist? Gọi bác sĩ hay cảnh sát? Thực ra không cần lo — philatelist chỉ là người sưu tầm tem! Sưu tầm tem đã có hơn 150 năm, bắt đầu sau khi tem bưu chính dán sẵn keo ra đời ở London năm 1840.",
    "Theo tạp chí Boys’ Life, đây là sở thích phổ biến nhất thế giới. Có người sưu tầm vui — tem có động vật, người nổi tiếng, hoặc tất cả tem một nước.",
    "Người khác sưu tầm tem họ tin sẽ có giá trị sau này. Họ hỏi ba điều: in bao nhiêu tấm? Tem có được ưa chuộng không? Tình trạng tem ra sao?",
    "Tem in ít, hình ảnh phổ biến và còn tốt có thể rất đắt. Năm 1980, tem British Guinea một xu năm 1856 được bán 935.000 đô la!",
  ],
  "reading-challenge-1-p19": [
    "Hãng phim và công ty thu âm liên tục chống vi phạm bản quyền. Internet là thủ phạm tệ nhất — người ta thường tải lên hoặc xem nội dung lậu, nhất là trên site chia sẻ video. Các công ty cố đóng site và thậm chí kiện người dùng.",
    "Tuy nhiên hiệu quả hạn chế: quá nhiều người và website có tài liệu lậu. Cách này còn khiến công ty bị xem là tham lam. Một loại phần mềm mới có thể đổi cuộc chiến.",
    "Đáng ngạc nhiên, phần mềm quảng cáo đang tạo khác biệt. Phần mềm phân tích video trên mạng; khi thấy clip lậu, nó không báo cáo mà chèn quảng cáo phía dưới — quảng cáo cho nguồn gốc chính thức.",
    "Ví dụ link tới website hãng phim hoặc công ty thu âm, hoặc quảng cáo sản phẩm họ sở hữu. Như vậy mỗi bản sao lậu có thể giúp công ty gốc kiếm tiền. Không thắng được thì tham gia!",
  ],
  "reading-challenge-1-p20": [
    "Khi người giàu qua đời, họ thường để lại hướng dẫn về tiền bạc và tài sản. Thường thì con cháu thừa kế. Tuy nhiên đôi khi chủ nuôi giàu để lại của cải cho thú cưng — ví dụ chú chó poodle tên Toby.",
    "Khi chủ mất, bà để lại cho Toby 15 triệu bảng (khoảng 25 triệu đô la). Còn Flossie, chó lai vàng, vừa giàu vừa nổi tiếng: năm 2001, Flossie lên báo vì cứu chủ — diễn viên Drew Barrymore và chồng — khỏi đám cháy nhà.",
    "Để cảm ơn, Drew tặng nhà cho Flossie sau khi sửa hỏa hoạn. Giờ Flossie là chủ căn nhà 3 triệu đô. Có vẻ lạ khi chó sở hữu nhà đắt tiền, nhưng Flossie không đơn độc. Gunther IV, chó German Shepherd, mua nhà từ Madonna với hơn 7 triệu đô.",
    "Điều đó không khó với Gunther IV vì anh ta có khoảng 200 triệu đô — chú chó giàu nhất thế giới, thừa kế từ cha, là người thừa kế tài sản một nữ bá tước Đức.",
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
