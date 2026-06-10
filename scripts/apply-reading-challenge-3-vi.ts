/**
 * Ghi bản dịch Reading Challenge 3 → reading translations/*.vi.json
 *
 *   npx tsx scripts/apply-reading-challenge-3-vi.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "reading translations");

const VI: Record<string, string[]> = {
  "reading-challenge-3-p1": [
    "Từ những ngày đầu làm phim, các nhà văn và đạo diễn đã cố đưa tiểu thuyết nổi tiếng và kinh điển lên màn ảnh rộng. Truyền thống đó vẫn tiếp tục đến hôm nay. Ngành điện ảnh dường như tin rằng nếu câu chuyện đã là một cuốn sách hay, nó cũng sẽ thành một bộ phim hay. Tuy nhiên, điều đó hiếm khi đúng như vậy.",
    "Phần lớn trường hợp, một cuốn sách hay lại thành một bộ phim tầm thường trong mắt đa số khán giả. Có lẽ vì độc giả đã tự tạo ra những bộ phim tuyệt vời trong đầu họ. Khi họ xem phiên bản của hãng phim hoặc đạo diễn, nó không đạt được kỳ vọng của họ.",
    "Trong hơn một trăm năm sản xuất phim, chỉ có một số ít phim đạt được tham vọng biến cuốn sách hay thành phim hay. Các nhà phê bình văn học lẫn điện ảnh đều khen cả hai phiên bản của One Flew over the Cuckoo's Nest. Câu chuyện thiếu nhi kinh điển The Wizard of Oz đã trở thành nhạc kịch điện ảnh kinh điển mà cha mẹ và trẻ em vẫn thích đến hôm nay.",
    "Những người yêu tiểu thuyết lịch sử Gone with the Wind vẫn say mê bản chuyển thể điện ảnh với Clark Gable và Vivien Leigh. Độc giả khoa học viễn tưởng cùng các nhà phê bình phim đều ca ngợi phim 2001: A Space Odyssey của Stanley Kubrick — Kubrick đồng viết kịch bản với tác giả tiểu thuyết Arthur C. Clarke — là một kiệt tác.",
    "Mặt khác, cũng có trường hợp tiểu thuyết không hay lắm lại được biến thành phim hay. The Godfather của Mario Puzo khá phổ biến khi ra sách, nhưng nhà phê bình khen nhiều về giá trị giải trí hơn giá trị văn học. Tuy nhiên, bản chuyển thể điện ảnh vẫn nằm trong top mười phim hay nhất mọi thời đại.",
    "Tương tự, truyện ngắn khoa học viễn tưởng “Do Androids Dream of Electric Sheep?” không gây chấn động thể loại khi xuất bản. Bản phim thì tác động lớn hơn nhiều trong lĩnh vực của nó. Ngày nay, Blade Runner vẫn đứng đầu danh sách phim hay của các nhà phê bình. Có cuốn sách nào đơn giản là không thể làm phim không?",
    "Dù các nhà làm phim muốn nghĩ là không, chắc chắn một số sách sẽ không bao giờ được chuyển thể thành phim thành công. Sách viết theo phong cách văn học độc đáo như Ulysses của James Joyce và The Sound and the Fury của William Faulkner đã chống lại việc chuyển thể phim để sánh ngang với vĩ đại của sách. Các nhà làm phim chắc chắn vẫn sẽ cố gắng.",
    "Độc giả và khán giả phải là người phán xét cuối cùng xem nên đọc sách hay xem phim hơn.",
  ],
  "reading-challenge-3-p2": [
    "Một số loài chim thường được coi là xui xẻo, thậm chí báo hiệu cái chết sắp đến. Ví dụ, khắp thế giới, quạ và quạ đen đều gắn với chiến tranh và cái chết. Thời cổ đại, người ta cho rằng quạ và quạ đen đi cùng các thần chiến tranh, hoặc là dấu hiệu các vị thần sắp đến.",
    "Ý tưởng này sau đó thay đổi. Quạ đặc biệt được xem là báo hiệu vận xui, hoặc trong một số trường hợp là người dẫn đường đến thế giới bên kia. Ai thấy một con quạ hoặc quạ đen bay lẻ trên đầu thì chắc chắn là điềm báo chết chóc trong tương lai gần. Thú vị là, dù có thể xui cho từng người, quạ đen lại được coi là may mắn cho vương miện nước Anh.",
    "Đến mức ngày nay, “người trông quạ” vẫn là một chức vụ chính phủ thực sự ở London. Ông chăm sóc những con quạ ở đó và cắt cánh, đảm bảo chúng không bay xa khỏi trung tâm chính phủ Anh. Như vậy, vương quốc sẽ không bao giờ gặp vận xui.",
    "Một loài chim khác được cho là liên quan đến vận mệnh con người là chim én. Tùy cách và thời điểm nhìn thấy, én có thể báo may hoặc xui. Có lẽ lấy cảm hứng từ ngực nâu đỏ của én, người Kitô giáo ban đầu gắn én với cái chết của Chúa Jesus.",
    "Vì vậy, ai thấy én bay qua nhà coi đó là điềm báo chết. Sau đó, nông dân lại xem én là dấu hiệu may mắn. Chuồng nào có én ở chắc sẽ được phúc năm sau. Nông dân cũng phải cẩn thận không giết én — điều đó chắc chắn chấm dứt mọi may mắn.",
    "Dù nhiều người cho những mê tín này chỉ là chuyện dân gian, thực ra có bằng chứng ủng hộ. Ví dụ, quạ và quạ đen là loài ăn xác, xuất hiện sau các trận chiến. Vì vậy, số lượng lớn quạ và quạ đen có thể báo hiệu chiến tranh trong khu vực.",
    "Én cũng ăn côn trùng có thể gây nhiễm trùng cho gia súc. Vì vậy, nông dân có nhiều én trong chuồng thực sự có thể có vật nuôi khỏe hơn. Lần sau bạn muốn cười chuyện dân gian, có lẽ nên tìm hiểu xem có sự thật nào trước đã!",
  ],
  "reading-challenge-3-p3": [
    "Alaska đang biến mất từ từ nhưng chắc chắn. Ước tính từ những năm 1950, tới 15% diện tích Alaska đã biến mất. Một bang cả có thể biến mất thế nào? Vấn đề là các sông băng Alaska đang tan. Bang có hơn 100.000 sông băng, chiếm khoảng 75.000 km², tức 5% diện tích bang.",
    "Đó là diện tích lớn hơn Ireland! Theo báo cáo gần đây của US Geological Survey, 99% sông băng Alaska đang lui hoặc thu nhỏ. Sự thu nhỏ chủ yếu do nhiệt độ toàn cầu tăng. Từ những năm 1960, nhiệt độ trung bình quanh năm tăng gần 3°C.",
    "Ngoài ra, nhiệt độ mùa đông tăng hơn 6°C. Hiện ước tính 100 km³ băng biến mất khỏi sông băng Alaska mỗi năm. Con số có thể còn cao hơn, vì một số nhà khoa học dự đoán nhiệt độ thế giới có thể tăng 4–7°C vào năm 2100.",
    "Vấn đề khác của Alaska là permafrost (đất đóng băng vĩnh cửu) đang tan. Phần lớn đất Alaska từng đóng băng vĩnh cửu hoặc đóng băng hầu hết cả năm. Giờ permafrost tan gây nhiều vấn đề cho người sống ở Alaska. Đường và cột điện sụp vì đất quanh và bên dưới ấm lên và mềm ra.",
    "Permafrost cứng từng ngăn bãi biển bị xói mòn trong bão dữ cũng đang tan. Người sống dọc bờ Alaska buộc phải di dời. Với làng trên đảo thấp nhỏ, một cơn bão tồi tệ có thể xóa sổ cả cộng đồng. Permafrost tan và nhiệt độ tăng đều ảnh hưởng rừng Alaska.",
    "Khi permafrost dưới rừng tan, côn trùng thường chỉ xuất hiện vào mùa ấm lại xuất hiện sớm hơn. Ví dụ, bọ cánh cứng vỏ spruce tăng số lượng do mùa đông ấm hơn. Thường cần khoảng hai năm để chúng lớn và sinh sản trong thời tiết rất lạnh.",
    "Tuy nhiên, do nhiệt độ tăng, bọ cánh cứng vỏ spruce sinh sản nhanh hơn và phá hại nhiều cây trong một năm bằng lượng trước đây phá trong hai năm. Nếu không thay đổi được gì, rừng Alaska sẽ không sống sót qua bước ngoặt thế kỷ. Một số nhà khoa học cho rằng hoạt động con người liên quan đến nhiệt độ thời tiết toàn cầu tăng.",
    "Dù nguyên nhân nhiệt độ tăng là gì, sự thật là nhiệt độ đang ấm lên, ảnh hưởng xấu đến Alaska. Đáng sợ, đây có thể là bản xem trước điều sẽ xảy ra với phần còn lại của thế giới trong thế kỷ tới.",
  ],
  "reading-challenge-3-p4": [
    "Tuy nhiên, hầu hết mọi người không biết tập thể dục đúng cách. Thay vì tập trung cách đạt kết quả tốt nhất hiệu quả và nhanh, người ta thường vội vàng khi tập hoặc mắc những sai lầm phổ biến. Tập đúng cách quan trọng với người lo sức khỏe và ngoại hình.",
    "Tuy nhiên, nếu ai đó không tập đúng, hiếm khi thấy kết quả mong muốn. Vì vậy, chuyên gia huấn luyện đã đưa ra mẹo dạy tập đúng để đạt lợi ích sức khỏe lớn nhất. Nếu muốn kết quả tốt nhất, đây là vài mẹo hữu ích cần nhớ.",
    "Một trong những sai lầm phổ biến nhất là lặp lại cùng một bài tập. Điều này không thử thách cơ bắp và thực ra có thể cản trở cơ phát triển và tự phục hồi. Thay vì luôn giữ bài tập cũ, quan trọng là đổi lịch tập mỗi sáu đến tám tuần.",
    "Cũng quan trọng là thêm nhiều loại tập vào lịch, như bơi, yoga hoặc đạp xe, để toàn thân luôn khỏe. Điều này giúp buổi tập thú vị hơn và có lợi cho sức khỏe lẫn phát triển cơ bắp. Sai lầm khác là tập quá sức, quá thường xuyên.",
    "Cơ thể cần nghỉ giữa các buổi tập; nếu không, sẽ không tiến bộ. Tốt nhất giới hạn số buổi tập nặng không quá hai mỗi tuần. Với người không muốn lệch lịch vì bỏ một ngày, có thể tập ngắn khoảng hai mươi phút các ngày khác.",
    "Để đa dạng hơn, bạn cũng có thể lên lịch tập nhẹ hơn bốn mươi đến sáu mươi phút xen giữa các ngày tập ngắn, cường độ cao. Tuy nhiên, chuyên gia khuyên nên nghỉ hoàn toàn ít nhất một ngày mỗi tuần, đặc biệt sau vài ngày tập nặng liên tiếp.",
    "Thực tế, không ai hoàn hảo. Tuy nhiên, nếu muốn cải thiện sức khỏe tổng thể, có vài điều bạn có thể làm. Giãn cơ trước và sau mỗi buổi tập. Đừng vội vàng, đừng tập quá ít hoặc quá nhiều. Nhớ tránh các sai lầm phổ biến và luôn vui khi tập!",
  ],
  "reading-challenge-3-p5": [
    "Bạn đang chuẩn bị cho một kỳ thi lớn? Nếu vậy, bạn có thể muốn chơi bóng rổ giữa các buổi học. Dựa trên thông tin thu thập qua nhiều năm, các nhà nghiên cứu thấy mối liên hệ rõ ràng giữa tập thể dục và phát triển não. Judy Cameron, nhà nghiên cứu tại Đại học Y khoa và Khoa học Oregon, nghiên cứu phát triển não.",
    "Theo nghiên cứu của bà, tập thể dục có thể làm mạch máu — kể cả trong não — khỏe và phát triển đầy đủ hơn. Cameron cho rằng điều này giúp người tập tập trung tốt hơn. Bà nói: “Dù ta đã biết tập thể dục tốt cho tim, tập thể dục thực sự gây thay đổi vật lý trong não.” Tác động của tập luyện lên phát triển não thậm chí thấy được ở trẻ sơ sinh.",
    "Trẻ sơ sinh vận động nhiều cho thấy phát triển não tốt hơn trẻ ít vận động. Với trẻ sơ sinh, chỉ cần chút vận động cũng cho kết quả lớn. Margaret Barnes, bác sĩ nhi khoa, tin vào tầm quan trọng của vận động. Bà cho rằng nhiều khó khăn học tập ở tiểu học hoặc trung học có thể truy ngược về thiếu vận động khi còn bé.",
    "“Trẻ sơ sinh cần vận động kích thích năm giác quan,” Barnes nói. “Chúng cần thiết lập liên kết giữa chuyển động và trí nhớ. Như vậy, khi lớn lên, trẻ sẽ bắt đầu gắn hoạt động thể chất với học tập cao hơn.” Lợi ích của tập thể dục lên não không chỉ dành cho trẻ sơ sinh.",
    "Người lớn tuổi cũng có thể củng cố não bằng tập luyện. Các nhà nghiên cứu Đại học Cornell theo dõi nhóm người cao tuổi từ bảy mươi đến bảy mươi chín tuổi. Nghiên cứu cho thấy trí nhớ ngắn hạn tăng tới 40% sau khi tập chỉ ba giờ mỗi tuần. Bài tập không cần quá khó, nhưng phải làm tim đập nhanh hơn.",
    "Tương tự trẻ sơ sinh, tập cho người cao tuổi nên có chút phức tạp. Học kỹ năng hoặc động tác mới, như yoga hoặc thái cực quyền, giúp mở đường trí nhớ trong não có thể lâu không dùng. Với hầu hết mọi người, mọi hoạt động thể chất làm tim đập nhanh đều hữu ích.",
    "Mục tiêu chính là tăng lưu lượng máu lên não. Não có thể hưởng lợi chỉ từ hai đến ba giờ tập mỗi tuần.",
  ],
  "reading-challenge-3-p6": [
    "Một ngôi nhà thế kỷ 18 ở Bắc Kinh. Bảo tàng trưng bày những tác phẩm nghệ thuật dân gian Trung Quốc hay nhất mà ông sưu tầm suốt đời. Nhiều món trong bộ sưu tập thực ra là trang trí kiến trúc từ nhà cổ và công trình quanh thủ đô Trung Quốc. Mỗi khi một tòa nhà cũ bị phá, Li đến hiện trường xem có gì đáng cứu.",
    "Nhờ vậy, Li tích lũy hàng nghìn tác phẩm nghệ thuật dân gian, một số hơn 1.000 năm tuổi. Li bắt đầu sưu tầm điêu khắc dân gian từ nhỏ. Món đầu tiên là hai trụ cổng đứng trước nhà — đá khắc hoa văn lịch sử, Li coi chúng như hai người bạn.",
    "Thời thơ ấu, đôi khi cậu ngồi cạnh chúng kể chuyện. Khi Li bảy tuổi, thành phố bảo gia đình bỏ trụ để đường phố được xây lại. Thay vì vứt đi, cha cho con giữ. Từ đó bắt đầu sở thích suốt đời: đến các công trường phá dỡ và sưu tầm điêu khắc hoặc kiến trúc trang trí.",
    "Bất cứ thứ gì được phép mang đi đều vào bộ sưu tập. Cuối những năm 1970, Trung Quốc cải cách kinh tế lớn. Lúc đó Bắc Kinh bắt đầu phá và xây lại rộng khắp thành phố. Theo Li, hơn 90% nhà cổ và chùa Bắc Kinh đã bị phá, thay bằng tòa nhà hiện đại.",
    "May mắn là không phải mọi nghệ thuật dân gian kiến trúc Bắc Kinh cũ đều mất. Du khách Bảo tàng Điêu khắc Dân gian Songtangzhai có thể xem một số di tích hay nhất mà Li đã cứu qua nhiều năm.",
  ],
  "reading-challenge-3-p7": [
    "Mỗi ngày, đường phố đông nghẹt người bận rộn với cuộc sống hàng ngày. Hãy tưởng tượng một robot nhỏ giữa đám đông lăn bánh trên vỉa hè đông đúc. Hầu hết người qua đường thậm chí không để ý robot cao mười inch đang mỉm cười, gọi là Tweenbot, lăn dọc phố. Cỗ máy lạ này có thể khiến một số người tò mò, số khác bỏ qua hoàn toàn.",
    "Một nhà nghiên cứu muốn tìm hiểu con người thực sự giúp đỡ đến mức nào dùng robot như vậy trong thí nghiệm trên đường phố New York. Thí nghiệm Tweenbot là ý tưởng và sáng tạo của Kacie Kinzer. Ý tưởng của Kinzer là làm robot có thể đi trong thành phố và đến đích chỉ khi được người đi bộ giúp.",
    "Tweenbot dựa vào lòng tốt của người lạ tốt bụng. Làm đơn giản từ bìa cứng, bánh xe và thiết bị quay bánh, Tweenbot đối mặt nhiều nguy hiểm trên phố. Chúng có thể bị xe cán hoặc trẻ vô ý đập vỡ. Kinzer nghĩ robot nhỏ của mình thậm chí có thể bị xem là thiết bị khủng bố.",
    "Bảo vệ thực sự duy nhất của Tweenbot là nụ cười thân thiện. Ngoài ra, mỗi robot được gắn cờ ghi hướng dẫn điểm đến. Chúng chỉ đến nơi cuối nếu ai đó giúp một tay. Tweenbot về bản chất là thí nghiệm xã hội cho người ta cơ hội thể hiện sự quan tâm.",
    "Hàng ngày, người New York thường vội vã di chuyển. Tuy nhiên, Tweenbot — vì không tự lo cho mình — đưa mọi người ra khỏi thói quen bình thường. Người để ý robot nhỏ bất lực thực sự muốn giúp Tweenbot tìm đường về.",
    "Tweenbot di chuyển tốc độ không đổi và chỉ đi thẳng. Nếu kẹt hoặc đi sai hướng, người lạ phải giải phóng hoặc quay đúng hướng. Bất ngờ là không Tweenbot nào bị mất hoặc hỏng, mỗi con đều đến đích nguyên vẹn.",
    "Thực tế, hầu hết người đối xử nhẹ nhàng với robot, một số còn coi như sinh vật nhỏ sống. Dù bạn vội đi đâu, bạn có dừng lại giúp Tweenbot đến đích thành công không?",
  ],
  "reading-challenge-3-p8": [
    "Con đường đến tương lai đi qua quá khứ. Đó là trường hợp của anh em Scott và Brennan Olson người Mỹ, dùng ý tưởng cũ để khởi xướng xu hướng thể thao mới: trượt patin một hàng. Năm 1979, hai anh em tìm thấy đôi patin cổ trong cửa hàng đồ thể thao cũ.",
    "Đôi patin họ tìm có bốn bánh một hàng thay vì hai cặp song song trước sau như truyền thống. Một hàng bánh này khiến Olson tò mò. Họ chơi hockey say mê và ngay lập tức thấy giống giữa bánh một hàng và lưỡi dài đơn dưới giày trượt băng.",
    "Liệu đôi patin lạ này có thể dùng luyện hockey ngoài băng? Olson bắt đầu chỉnh thiết kế đôi patin cổ họ tìm được. Trước hết họ thử patin cổ xem hoạt động ra sao. Từ đó, họ tìm cách cải thiện thiết kế cũ.",
    "Một cải tiến là dùng vật liệu đặc biệt để patin chắc hơn và dễ điều khiển. Olson cũng thêm phanh đáng tin cậy. Năm 1980, họ thành lập công ty Rollerblade sản xuất và bán “phát minh mới”. Doanh số tăng vọt, sớm có hàng triệu người trên thế giới “rollerblading” — tên gọi nhầm của trượt patin một hàng.",
    "Ban đầu, trượt patin một hàng là giải trí. Người ta thích trượt trong công viên và trên phố, một số còn nhảy trên patin tại các sàn disco khổng lồ. Ngày nay, “group skates” phổ biến toàn cầu. Ở San Francisco, Paris, Berlin, tới 20.000 người trượt có thể gặp nhau ngày nghỉ và trượt cùng qua phố.",
    "Nhiều người xem trượt patin một hàng là cách tập luyện và giao lưu tuyệt vời. Đến giữa những năm 1990, trượt patin một hàng trở thành hơn môn giải trí — phát triển thành nhiều môn thi đấu. Một trong những môn phổ biến nhất, đến hôm nay, là aggressive skating: thực hiện trick và nhảy qua hộp, rampe, thanh ray.",
    "Các loại thi đấu khác gồm tốc độ, nghệ thuật, đua xuống dốc và marathon trượt. Còn hockey? Olson đạt mục tiêu. Giải hockey một hàng mọc lên gần như ngay lập tức. Rồi năm 1999, hockey một hàng vào chương trình Đại hội Thể thao Pan-American.",
    "Có tin đồn trượt patin một hàng thậm chí có thể trở thành môn Thế vận hội Mùa hè một ngày nào đó.",
  ],
  "reading-challenge-3-p9": [
    "Khám phá và làm việc trong không gian. Đặc biệt, nhiều robot đã được gửi khám phá Sao Hỏa. Robot thường trông như hộp có bánh xe. Dù hữu ích, bản chất chúng không đáng tin, cực kỳ đắt và dễ hỏng. Chúng cũng không làm được nhiều việc.",
    "Vì những vấn đề này, các nhà khoa học đang phát triển loại robot mới và khác thường. Robot mới di chuyển như rắn, nên được gọi là “snakebots”. Hình dạng rắn giúp len vào không gian rất nhỏ, như khe đá. Rắn cũng có thể đẩy mình dưới đất hoặc leo lên nhiều vật như đá cao và cây.",
    "Khả năng đó giải thích tính hữu ích của robot thiết kế như rắn. Snakebot cũng làm được những việc đó, hiệu quả hơn nhiều so với robot bánh xe dễ kẹt hoặc ngã. Vì mang được dụng cụ, snakebot cũng có thể làm việc trong không gian.",
    "Chúng có thể, ví dụ, giúp sửa Trạm Vũ trụ Quốc tế. Nhưng hình dạng robot rắn làm thế nào? Snakebot được lắp như chuỗi khoảng ba mươi phần, hay module. Mỗi module về cơ bản giống nhau: đều có máy tính nhỏ và bánh xe hỗ trợ di chuyển. Máy tính lớn trong “đầu” rắn điều phối mọi module hoạt động cùng nhau.",
    "Thiết kế module của snakebot có nhiều ưu điểm. Nếu một module hỏng, có thể thêm module khác dễ dàng. Module cũng mang nhiều loại dụng cụ và camera. Vì mỗi module thực ra là robot riêng, một module có thể hoạt động tách khỏi phần còn lại khi cần.",
    "Tức là mọi module có thể tách ra di chuyển độc lập, rồi sau đó kết nối lại thành robot lớn hơn. Các nhà nghiên cứu cũng cố phát triển snakebot bằng nhựa đặc biệt đổi hình dạng bằng điện, gần như cơ bắp động vật. Snakebot làm bằng nhựa này sẽ rất chắc và khó vỡ.",
    "Nhìn chung, thiết kế snakebot đơn giản hơn nhiều so với robot thông thường. Vì vậy, snakebot rẻ hơn nhiều để chế tạo. Ví dụ, robot gần đây gửi lên Sao Hỏa tốn hơn một trăm triệu đô la, trong khi snakebot có thể chỉ vài trăm đô la. Với tính linh hoạt và giá phải chăng, snakebot dường như là làn sóng tương lai — ít nhất với robot không gian.",
  ],
  "reading-challenge-3-p10": [
    "Du khách đến Nhật có lẽ không xếp Suginami cao trong danh sách địa điểm tham quan. Đây chủ yếu là khu dân cư, dù có vài cửa hàng quần áo và đồ cổ đẹp. Suginami có hơn 300 công viên thành phố, cộng ba công viên đô thị; tên thành phố còn đến từ từ tiếng Nhật chỉ cây tuyết tùng.",
    "Thành phố chắc chắn là nơi dễ sống cho nửa triệu cư dân. Tuy nhiên, năm 2002, Suginami gặp vấn đề lớn. Kẻ trộm đột nhập nhà khắp thành phố và lấy đồ! Chỉ riêng năm đó, hơn 1.700 nhà bị đột nhập trên toàn Suginami.",
    "Đó là con số đột nhập rất lớn với thành phố quy mô này. Cảnh sát và quan chức Suginami biết phải làm gì đó để hạn chế tội phạm. Cuối cùng, họ nghĩ ra ý tưởng dùng hoa để hạn chế tội phạm. Quan chức khuyến khích cư dân trồng hoa quanh nhà và dọc đường, đặc biệt nơi trộm cắp thường xuyên.",
    "Ý tưởng là nếu người ta ở ngoài chăm hoa, họ đồng thời quan sát người ra vào. Kẻ trộm ít có khả năng hành động ở khu vực có người ngoài trời theo dõi kỹ. Vài năm sau, “Chiến dịch Hoa” dường như hiệu quả đáng ngạc nhiên.",
    "Chỉ hai năm sau khi cư dân Suginami bắt đầu trồng hoa trên đường và trước nhà, tội phạm trong thành phố giảm 80%! Tất nhiên, hoa không thể nhận hết công lao giảm tội phạm. Thành phố cũng lắp 200 camera an ninh ở khu tội phạm cao.",
    "Ngoài ra, Suginami tuyển hơn 9.000 tình nguyện viên làm người canh gác tội phạm khắp thành phố. Có lẽ một phần giúp tuyển nhiều tình nguyện viên cuối cùng là “Chiến dịch Hoa.” Nhiều tình nguyện viên có lẽ thích đi bộ quanh khu phố, ngắm hoa đã trồng khi làm nhiệm vụ canh gác.",
  ],
  "reading-challenge-3-p11": [
    "Một số kiệt tác được công nhận toàn cầu là thành tựu xuất sắc trong sáng tạo và khả năng của con người. Ba ví dụ hay là Taj Mahal, Nhà nguyện Sistine và tượng David. Tất cả đều hàng trăm năm tuổi, và như mọi thứ già đi, một số phần cần được phục hồi theo thời gian.",
    "Tuy nhiên, không phải ai cũng đồng ý cách và thời điểm phục hồi từng tác phẩm. Đôi khi cần gấp phải làm gì đó để cứu kho báu lịch sử. Ví dụ, qua nghiên cứu kỹ tòa nhà, chuyên gia phát hiện Taj Mahal đang trượt về phía sông bên cạnh!",
    "Công tác phục hồi sau đó bắt đầu sửa vết nứt và ngăn trượt. Tuy nhiên, tác phẩm như Nhà nguyện Sistine và tượng David không đối mặt nguy cơ hư hại hoặc mất mát nghiêm trọng. Thay vào đó, phục hồi được lên kế hoạch để làm sạch hoặc chỉnh sửa nhẹ để trông đẹp hơn.",
    "David là ví dụ điển hình cho dự án chỉnh sửa nhẹ như vậy. Nhân “sinh nhật” 500 năm, bảo tàng ở Ý nơi David đứng hôm nay dự định phục hồi vẻ ngoài tượng. Thực ra David chỉ bẩn. Điều đó không lạ — hơn 300 năm, tượng đứng ngoài trời trên quảng trường Florence.",
    "Khi Michelangelo điêu khắc, ông dự định để tượng ngoài trời và tự nhiên tích tụ dấu vết thời tiết. Vì vậy, nhà phê bình phục hồi David cho rằng làm sạch tượng sẽ thay đổi vẻ ngoài mà nghệ sĩ dự định. Bỏ qua tiếng phản đối, bảo tàng tiến hành phục hồi.",
    "Sau chín tháng làm sạch cẩn thận, David phục hồi được công bố. Tượng khác thế nào? Tóc David không còn đen vì bụi bẩn. Vết trên tay biến mất, vệt bẩn trên ống chân trái bị xóa. Một chuyên gia nghệ thuật nhận xét: “Chỉ người có kiến thức chuyên sâu và quen ‘làn da’ tượng mới biết một số chỗ xấu không còn nữa.” Ngay nhà phê bình dự án cũng đồng ý chỉnh sửa David rất vừa phải.",
    "Mặt khác, phục hồi Nhà nguyện Sistine tạo khác biệt rõ rệt về vẻ ngoài. Qua nỗ lực tỉ mỉ, bức tranh tường Sistine được phục hồi đẹp bằng cách xóa năm tháng bụi bẩn trên trần và tường. Dù vài nhà phê bình cho rằng tác phẩm Michelangelo bị hủy hoại, đa số xem phục hồi là thành công tuyệt vời.",
  ],
  "reading-challenge-3-p12": [
    "Trong truyền thuyết đại hồng thủy này, nước phủ toàn bộ đất liền, giết hầu hết người và động vật trên Trái Đất. Chỉ gia đình trực tiếp của Noah, gồm vợ, ba con trai và vợ các con, sống sót cùng mọi động vật trên thuyền. Sau khi nước rút, người và động vật trên thuyền Noah bắt đầu tái sinh sản trên Trái Đất.",
    "Truyền thuyết Noah và gia đình quen thuộc với nhiều người. Tuy nhiên, đó không phải truyền thuyết duy nhất về đại hồng thủy. Thực ra, nhiều nền văn hóa có câu chuyện tương tự về đại hồng thủy xóa sổ gần như mọi người. Trong truyền thuyết Do Thái, Hồi giáo và Kitô giáo, Noah được Chúa cảnh báo đại hồng thủy sẽ giết mọi người và động vật trên đất liền.",
    "Chúa bảo Noah dựng thuyền cứu gia đình và hai con mỗi loài động vật. Trong truyền thuyết Hindu, cá cảnh báo một người về hồng thủy, chỉ người đó được cứu. Rồi các vị thần tạo người phụ nữ cho người đó, và họ có nhiều con. Truyền thuyết Hy Lạp, La Mã và Trung Quốc nói chỉ người trên núi cao nhất sống sót.",
    "Trong truyền thuyết Bắc Âu và Celtic, nước hồng thủy thực ra là máu của người khổng lồ. Khi người khổng lồ bị giết, thân thể thành Trái Đất, máu phủ toàn bộ đất liền. Còn có truyền thuyết Inca, Maya và thổ dân Bắc Mỹ về đại hồng thủy. Trong mỗi truyền thuyết, vài người sống sót bằng cách leo núi hoặc dựng thuyền.",
    "Nhiều người hôm nay cho đại hồng thủy chỉ là truyền thuyết. Tuy nhiên, người khác nói sự tương đồng rõ rệt giữa các truyền thuyết gợi ý có đợt hồng thủy thật trên Trái Đất từ lâu. Thực tế, một số nhà khoa học suy đoán nước hồng thủy cổ đại giờ đóng băng trong sông băng ở hai cực.",
    "Nhưng tại sao các truyền thuyết không giống nhau? Hồng thủy xảy ra trước khi con người biết viết, nên câu chuyện chỉ truyền qua thế hệ bằng kể miệng. Khi truyền miệng, câu chuyện có thể thay đổi khi các nền văn hóa học câu chuyện.",
    "Điều này có thể giải thích vì sao một số phần truyền thuyết khác nhau. Tuy nhiên, qua xem xét cẩn thận các yếu tố tương tự, có thể hé lộ sự thật về đợt hồng thủy thảm khốc cổ đại.",
  ],
  "reading-challenge-3-p13": [
    "Những năm 1970, nhiều người lo ngại về năng lượng. Họ phải đối mặt sự thật là dùng quá nhiều năng lượng và nguồn năng lượng sẽ không kéo dài mãi. Kiến trúc sư Michael Reynolds quyết định làm gì đó. Ông thiết kế nhà rẻ hơn để xây và tiết kiệm năng lượng hơn.",
    "Ngoài ra, ông muốn giải quyết vấn đề rác thải. Cuối cùng, ông nghĩ ra “earthships.” Dù nghe như thuyền, earthship là nhà. Tuy nhiên, khác nhà thường, earthship được xây từ rác và chỉ dùng 10% năng lượng cần để xây nhà điển hình.",
    "Hơn nữa, sau khi xây, earthship chỉ dùng 10% năng lượng cần để sưởi, chiếu sáng và làm mát nhà thường. Dù earthship nghe độc đáo, chúng thực ra có thể được xây trông giống mọi nhà khác. Một lợi ích lớn là earthship làm từ vật liệu tái chế.",
    "Vật liệu chính là lốp xe cũ nhồi đất. Lốp nhồi đất được đặt phẳng và xếp như gạch. Vì lốp tròn, có nhiều khoảng trống giữa các cột lốp. Những khoảng này được nhồi bìa cứng đã dùng.",
    "Lốp và bìa cứng tạo tường ngoài earthship. Tường trong giữa các phòng không cần chắc bằng tường ngoài; vì vậy tường trong làm từ lon, chai cũ và xi măng, cuối cùng được phủ và sơn giống tường nhà thường. Lợi ích khác là earthship tiết kiệm năng lượng và tài nguyên thiên nhiên.",
    "Ví dụ, earthship dùng ít nước hơn. Nước mưa thu trên mái dùng để uống và tắm. Hơn nữa, earthship cần ít năng lượng sưởi và làm mát vì được xây trong đất, giữ nhiệt độ trong nhà không quá nóng hoặc lạnh.",
    "Về lâu dài, điều này giúp chủ earthship giảm hóa đơn tiện ích. Ngoài ra, một tường earthship thường hướng nam. Vì vậy, nhiệt mặt trời giúp sưởi ấm nhà, và tấm pin mặt trời trên mái tạo điện chạy thiết bị. Tất cả tính năng này khiến earthship rất thân thiện môi trường.",
    "Đó là một lý do chúng phổ biến toàn cầu. Earthship đã được xây ở Bolivia, Australia, Mexico, Nhật, Canada, Anh, Scotland và khắp Mỹ. Có lẽ trong tương lai gần, một earthship sẽ “hạ cánh” gần bạn!",
  ],
  "reading-challenge-3-p14": [
    "Gốc tự do có khả năng bám và làm hại các phần tế bào, kể cả DNA. Cơ thể có khả năng sửa hại này. Tuy nhiên, khi già đi, cơ chế sửa chữa suy yếu, dẫn đến dấu hiệu lão hóa như nếp nhăn. Cơ thể thực ra tự tạo gốc tự do, nhưng số lượng cũng tăng do thức ăn ta ăn.",
    "Ngoài tránh thức ăn có thể tạo thêm gốc tự do, ăn thực phẩm chứa vitamin và vi chất dinh dưỡng nhất định cũng giúp ta trông trẻ. Các vitamin này giúp tạo phân tử gọi là chất chống oxy hóa, thực sự giảm sản xuất gốc tự do. Hơn nữa, thực phẩm chứa chất chống oxy hóa không hiếm.",
    "Chất chống oxy hóa phổ biến như vitamin A và E có trong nhiều rau màu đậm. Ví dụ, cà rốt, rong biển, rau bina và bông cải xanh đều là nguồn vitamin hữu ích tuyệt vời. Bạn cũng có thể ăn trái cây màu cam như mơ và đào. Vitamin A và E đặc biệt tốt giúp da trông trẻ.",
    "Các chất dinh dưỡng này làm da chắc và mềm. Tuy nhiên, nếu muốn tích trữ nhanh chất dinh dưỡng tốt cho da, bạn nên ăn gan bò. Một miếng gan bò nhỏ chứa gấp đôi vitamin A so với nửa chén cà rốt luộc. Gần đây, trà xanh cũng được thêm tạm vào danh sách chất giúp trẻ hóa.",
    "Nghiên cứu tác động trà xanh lên cơ thể vẫn ở giai đoạn đầu. Các nhà khoa học chắc chắn tin trà xanh tốt cho ta, nhưng thận trọng khi dự đoán khả năng giữ ta trông trẻ. Tuy nhiên, thí nghiệm gần đây dường như cho thấy tính chống oxy hóa của trà xanh có thể sửa tổn thương tế bào đã xảy ra và ngăn tổn thương tương lai.",
    "Thực tế, trà xanh còn hiệu quả hơn nếu bôi trực tiếp lên da như thành phần kem dưỡng mặt. “Bạn là những gì bạn ăn.” Càng hiểu cơ thể hoạt động, càng thấy tục ngữ cũ này đúng. Hãy nghĩ điều đó lần sau bạn ngồi xuống bàn ăn.",
  ],
  "reading-challenge-3-p15": [
    "Người mơ mộng ban ngày thường bị nghĩ tiêu cực, như lười biếng hoặc không làm việc nên làm. Tuy nhiên, các nhà khoa học nghiên cứu não đã học được nhiều điều thú vị, đặc biệt từ não người mơ mộng ban ngày. Thực tế, xa khỏi lãng phí thời gian, một số nhà khoa học cho rằng mơ mộng ban ngày là hoạt động lành mạnh và hữu ích cho mọi bộ não.",
    "Để nghiên cứu não, các nhà khoa học dùng thiết bị đặc biệt quét não và cho ảnh phần não hoạt động vào thời điểm nhất định. Khi người mơ mộng ban ngày, thiết bị cho thấy mẫu hoạt động não riêng gọi là chế độ “mặc định”. Ở chế độ mặc định, phần trên hoặc ngoài não rất hoạt động.",
    "Thực ra, nhiều vùng não tương tác ở chế độ này. Một số nhà khoa học mô tả chế độ này là lúc não tập trung vào chính nó thay vì môi trường xung quanh. Thường xảy ra khi người làm việc đơn giản, tẻ nhạt hoặc hành động thường ngày không cần nhiều chú ý, như đi bộ đến trường hoặc nấu món đơn giản.",
    "Người ta có xu hướng mơ mộng ban ngày trong các hoạt động đó. Tầm quan trọng của mơ mộng ban ngày nằm ở phát triển kỹ năng sáng tạo và xã hội. Khi tâm trí không bận xử lý tình huống hoặc vấn đề trước mắt, nó tự do lang thang. Thời gian lang thang cho phép tâm trí tạo ra thứ mới.",
    "Phát minh mới có thể được tưởng tượng, hoặc giải pháp vấn đề được lên kế hoạch. Ví dụ, giải pháp cho vấn đề trong quan hệ với người khác có thể nảy ra. Thực tế, hầu hết giấc mơ ban ngày liên quan tình huống với người khác. Có lẽ đó là giấc mơ dựa trên ký ức quá khứ, hoặc giấc mơ về điều có thể trong tương lai.",
    "Dù thế nào, mơ mộng ban ngày giúp ta phát triển kỹ năng phù hợp dùng trong tương tác thật với người khác. Marcus Raichle của Đại học Washington giải thích: “Khi bạn không dùng cơ, cơ thực ra không làm gì nhiều. Nhưng khi não được cho là không làm gì và mơ mộng ban ngày, nó thực sự làm việc rất nhiều.” Trong cái gọi là “trạng thái nghỉ”, não không nghỉ chút nào!",
  ],
  "reading-challenge-3-p16": [
    "Những ngày đầu trong ngành giải trí của cô rất gian khổ. Tuy nhiên, quyết tâm cuối cùng mang lại thành công đại chúng với hit “Holiday” năm 1984. Bên cạnh ca hát, Madonna mở rộng tài năng sang diễn xuất và viết lách. Suốt sự nghiệp, cô phát hành mười tám album, gồm ba tuyển tập hit.",
    "Madonna tiếp tục làm việc chăm chỉ vì thành công, định nghĩa lại bản thân và âm nhạc với mỗi album. Như Madonna nói: “Mỗi lần tôi chạm đỉnh mới, tôi thấy đỉnh mới muốn leo.” Madonna được công nhận là doanh nhân mạnh mẽ thích kiểm soát mọi khía cạnh sự nghiệp. Suốt con đường lên đỉnh, Madonna không sợ tranh cãi.",
    "Cô có quan điểm mạnh và được biết là người phụ nữ không nói vòng vo, bất kể phản ứng thế nào. Gần đây, Madonna dùng cách nói thẳng để cố hạn chế vi phạm bản quyền trực tuyến. Album của nghệ sĩ nổi tiếng thường xuất hiện trên Internet vài tuần trước ngày phát hành chính thức.",
    "Tất nhiên, cả ngành đĩa nhạc và nghệ sĩ lên án vi phạm bản quyền công việc của họ. Bản thân Madonna cũng không tránh được vi phạm trực tuyến. Bản mix bài chủ đề album Music năm 2000 xuất hiện trên vài trang chia sẻ file trước khi album ra mắt. Rồi năm 2003, Madonna sắp phát hành album mới American Life.",
    "Tuy nhiên, để ngăn vi phạm thêm, Madonna và hãng đĩa quyết định thử cách mới. Họ tải lên các trang chia sẻ file các track MP3 giả từ American Life. Các file giả này nhằm làm nản lòng tải bất hợp pháp. Người tải file tưởng được track American Life miễn phí.",
    "Tuy nhiên, khi phát file, họ chỉ nghe Madonna chửi thề. Thay vì bài hát, người nghe nghe nghệ sĩ hét: “Các anh nghĩ mình đang làm cái quái gì vậy?” Cách mạnh mẽ của nghệ sĩ chắc chắn tạo tiếng vang. Nó cũng gây phản ứng ngay lập tức.",
    "Ngay sau khi phát hiện track giả, hacker trả đũa bằng cách chiếm website madonna.com. Họ dùng website phân phối bản MP3 miễn phí album mới của cô. Có lẽ kế hoạch của nghệ sĩ không hoạt động đúng như mong đợi. Tuy nhiên, như Madonna biết rõ, tranh cãi thu hút sự chú ý đến tác phẩm của cô.",
    "Dù tranh cãi có tác động qua nhiều năm hay không, một điều chắc chắn: Madonna vẫn có điều muốn nói.",
  ],
  "reading-challenge-3-p17": [
    "Hầu hết mọi người ước trí nhớ tốt hơn. Họ cũng lo quên mọi thứ khi già đi. Nhưng bạn có biết ta có nhiều loại trí nhớ khác nhau? Khi một hoặc vài loại bắt đầu suy yếu, có vài việc đơn giản mọi người có thể làm để cải thiện trí nhớ.",
    "Điều hầu hết mọi người gọi là trí nhớ thực ra là năm loại trí nhớ khác nhau. Khả năng nhớ việc quá khứ — nhiều năm hoặc vài ngày trước — phụ thuộc hai loại: trí nhớ xa và trí nhớ gần. Hãy nhớ lại sinh nhật năm ngoái.",
    "Nếu không nhớ được, bạn gặp vấn đề trí nhớ xa. Mặt khác, nếu không nhớ bữa trưa hôm qua, đó là vấn đề trí nhớ gần. Nhớ sự kiện quá khứ chỉ là một cách ta dùng trí nhớ. Khi làm bài kiểm tra, ta cần dùng trí nhớ ngữ nghĩa.",
    "Đó là tổng kiến thức đã học. Hoặc có lẽ ta muốn nhớ làm hoặc dùng gì đó trong tương lai, vài phút hoặc vài ngày sau. Các trường hợp này dùng trí nhớ tức thời và trí nhớ tương lai. Bạn từng nghĩ: “Tôi cần nhớ tắt đèn,” rồi ngay lập tức quên?",
    "Đó sẽ là trí nhớ tức thời hỏng. Mặt khác, có lẽ bạn dễ nhớ gặp bạn ăn trưa tuần sau. Điều đó nghĩa là ít nhất trí nhớ tương lai của bạn vẫn hoạt động tốt. Nhiều người cho trí nhớ xấu đi là không tránh được khi già, nhưng thực ra không phải vậy.",
    "Trong năm loại trí nhớ, trí nhớ tức thời, xa và tương lai (nếu có gợi ý như ghi chú) không suy giảm theo tuổi. Nhưng làm sao ngăn trí nhớ ngữ nghĩa và trí nhớ tương lai không gợi ý suy yếu? Bí quyết dường như là hoạt động. Nghiên cứu cho thấy chút hoạt động tinh thần, như học điều mới hoặc làm ô chữ, tác động tích cực lớn lên trí nhớ.",
    "Hoạt động thể chất đều đặn cũng dường như cải thiện trí nhớ. Có lẽ do cung cấp máu tốt hơn cho não. Tuy nhiên, điều phải tránh tuyệt đối là căng thẳng. Khi căng thẳng, cơ thể tiết hormone cortisol, có hại cho tế bào não và vì vậy trí nhớ.",
    "Giảm căng thẳng qua thiền, tập thể dục hoặc hoạt động khác có thể giúp bảo toàn khả năng tinh thần.",
  ],
  "reading-challenge-3-p18": [
    "Cao ba mươi sáu centimet, nhưng với fan khắp thế giới, nó đại diện thành tựu cao nhất trong bóng đá. Bốn năm một lần, các đội toàn cầu tranh giành Cúp Vô địch FIFA World Cup, nhưng không ai mang về nhà. Không ai mang về vì chiếc cúp vàng 18 carat được FIFA (Liên đoàn Bóng đá Quốc tế) giữ cẩn thận.",
    "Nhà vô địch mỗi World Cup chỉ nhận bản sao. Điều này bảo vệ giải thưởng quý giá khỏi kẻ trộm — họ đã trộm Cúp World Cup hai lần trong 75 năm lịch sử. Chiếc cúp nhỏ chắc chắn có cuộc đời đầy biến động. Cúp gốc do nhà điêu khắc Pháp Abel LaFleur làm, gọi là “Cúp Jules Rimet,” vinh danh người sáng lập World Cup.",
    "Trong ba kỳ World Cup đầu (1930, 1934, 1938), tên đổi thành đơn giản “World Cup.” Rồi trong Thế chiến II, ít nghe tin về cúp. Nó được giấu trong hộp giày dưới gường Tiến sĩ Ottorino Barassi, phó chủ tịch FIFA người Ý, để không rơi vào tay quân đội phát xít.",
    "Năm 1966, Cúp bị trộm khi trưng bày công khai trước World Cup ở Anh. May mắn là tìm lại sau đó, vẫn nguyên vẹn, trong thùng rác bởi chú chó tên Pickles. Bốn năm sau, Brazil giành quyền sở hữu vĩnh viễn cúp gốc bằng cách vô địch World Cup lần thứ ba.",
    "Đáng tiếc, cúp bị trộm lần hai năm 1983 và không tìm lại được. Liên đoàn Bóng đá Brazil phải làm bản sao. Sau khi cúp đầu thuộc về liên đoàn bóng đá Brazil, Cúp World Cup mới cho FIFA được thiết kế bởi nghệ sĩ Ý Silvio Gazzaniga năm 1974.",
    "Cúp này không thể giành hẳn, mà vẫn thuộc FIFA, và chắc chắn họ theo dõi rất chặt. Ngày nay, nhà vô địch World Cup được trao bản sao mạ vàng, không phải vàng nguyên khối như bản thật. Cúp World Cup của Gazzaniga nặng gần năm kilogram.",
    "Đế gồm hai lớp đá bán quý malachite, có chỗ cho mười bảy tấm biển nhỏ ghi tên đội vô địch — đủ không gian vinh danh mọi nhà vô địch World Cup đến năm 2038. Sau đó, phải làm cúp mới.",
  ],
  "reading-challenge-3-p19": [
    "Kẻ lừa đảo phishing gửi hơn ba tỷ tin nhắn lừa đảo mỗi năm. Chỉ lừa được 5% người, họ vẫn kiếm rất nhiều tiền. Vì kiếm tiền nhiều qua loại lừa đảo này, nó thu hút không chỉ kẻ nhỏ lẻ. Gần đây, cảnh sát truy tìm thành viên nhóm phishing có tổ chức ở Đông Âu, đã trộm hàng trăm nghìn đô la từ người dùng trực tuyến.",
    "Nhóm tạo email trông chính thức yêu cầu người cập nhật thông tin cá nhân tại website ngân hàng quốc tế. Tuy nhiên, liên kết ngân hàng trong email thực ra đưa người đến website giả của kẻ lừa đảo. Tệ hơn, điều tra thêm cho thấy nhóm này liên kết với băng đảng tội phạm lớn ở Nga.",
    "Làm sao người vô tội tự bảo vệ? Trên hết, họ phải học nhận biết email do kẻ lừa đảo gửi. Luôn cảnh giác với email yêu cầu gấp thông tin tài chính cá nhân. Kẻ lừa đảo thường viết câu gây lo lắng hoặc hứng thú nhưng giả trong email để người trả lời ngay.",
    "Ngoài ra, email từ kẻ lừa đảo không gọi tên người nhận vì họ thực sự chưa biết người nhận là ai. Ngược lại, email hợp lệ từ ngân hàng hoặc công ty bạn thường giao dịch thường có tên bạn.",
  ],
  "reading-challenge-3-p20": [
    "Bạn nghe tiếng lạ và cảm luồng khí lạnh lướt qua. Nếu bạn ở Lâu đài Chillingham ở Northumberland, Anh, có thể đúng là vậy! Vì Chillingham được cho là một trong những lâu đài ma ám nhất nước Anh. Gần 800 năm, Chillingham là nơi ở của ma đủ loại.",
    "Đầu thế kỷ 1900, du khách lâu đài báo thấy ma cậu bé. Họ đặt tên “Cậu bé Xanh” vì luôn thấy mặc áo xanh và được ánh sáng xanh bao quanh. Cuối những năm 1920, thợ sửa tường trong phòng ngủ không dùng gặp điều bất ngờ khó chịu.",
    "Khi làm việc, họ phát hiện xương trẻ em mặc áo xanh chôn trong tường. Thú vị là sau khi hài cốt được chôn ở nghĩa trang địa phương, cậu bé ma không còn xuất hiện. Ma khác từng thấy trong lâu đài là Lady Mary Berkeley.",
    "Bà chết cô đơn trong lâu đài sau khi chồng bỏ đi với phụ nữ khác. Người ta nghe tiếng váy xào xạc khi bà đi qua. Còn có bức tranh Lady Berkeley trong lâu đài mà một số người nói sống dậy. Ma của bà được báo bước ra khỏi tranh và theo trẻ em.",
    "Rồi còn “Quý bà Trắng.” Linh hồn này được cho là ma người phụ nữ bị đầu độc chết nhiều năm trước. Bà được biết đến tiếp cận người, xin uống nước, rồi biến mất. Với tất cả báo cáo về ma, bạn có thể nghĩ người ta tránh Chillingham.",
    "Sau tất cả, hầu hết người ta nghĩ ma đáng sợ. Nhưng thực tế, Chillingham giờ trở thành điểm du lịch! Hàng nghìn người đến Chillingham mỗi năm. Một số chỉ tham quan khu đất và ăn tại phòng trà lâu đài, số khác thực sự ở trong lâu đài. Có nhiều loại chỗ ở, từ phòng trong tháp đến suite trong nhà xe.",
    "Với người muốn trải nghiệm đặc biệt hơn, lâu đài tổ chức đám cưới kèm tiệc trung cổ. Hòa nhạc, opera và hội chợ thường xuyên chọn Chillingham làm địa điểm. Chillingham cũng được dùng làm bối cảnh phim và chương trình truyền hình. Với lâu đài ma ám, Chillingham chắc chắn vẫn cực kỳ phổ biến.",
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
