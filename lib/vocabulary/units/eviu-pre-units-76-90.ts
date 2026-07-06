import type { VocabularyUnit } from "../vocabulary-unit-types";
import { ex, fillBlank, mcq, purple } from "./eviu-unit-builder";
import { preUnit, wordList } from "./eviu-pre-unit-helpers";

const U76_WORDS = wordList([
  ["by the way", "tiện thể nói thêm, chuyển nhẹ sang ý liên quan", "By the way, have you sent the email yet?"],
  ["as I was saying", "như tôi đang nói lúc nãy, quay lại ý chính", "As I was saying, we should leave earlier tomorrow."],
  ["you know what I mean", "bạn hiểu ý tôi chứ", "It was awkward, you know what I mean?"],
  ["to be honest", "thành thật mà nói", "To be honest, I did not enjoy that movie."],
  ["as far as I know", "theo những gì tôi biết", "As far as I know, the store closes at nine."],
  ["if you ask me", "nếu bạn hỏi ý tôi", "If you ask me, this option is safer."],
  ["let's see", "để xem nào, cho tôi nghĩ một chút", "Let's see, I think Tuesday works best."],
  ["come to think of it", "nghĩ kỹ lại thì", "Come to think of it, I have met her before."],
  ["actually", "thực ra, trên thực tế", "Actually, the meeting starts at 2:30, not 3:00."],
  ["in fact", "thực tế là, nhấn mạnh thông tin thật", "In fact, sales increased last month."],
  ["at least", "ít nhất thì, dù sao cũng", "At least we finished the hardest part."],
  ["anyway", "dù sao đi nữa, quay lại mạch chính", "Anyway, let's get back to our main topic."],
  ["after all", "suy cho cùng", "After all, everyone can make mistakes."],
  ["mind you", "lưu ý là, nói thêm để điều chỉnh ý vừa nêu", "It is cheap. Mind you, the quality is not great."],
  ["I suppose", "tôi cho là, tôi đoán là", "I suppose we could try again tomorrow."],
  ["that reminds me", "nhắc mới nhớ", "That reminds me, I still owe you a book."],
  ["speaking of", "nhân nói về", "Speaking of travel, have you renewed your passport?"],
  ["long story short", "nói ngắn gọn thì", "Long story short, we missed the train and took a bus."],
]);

const U77_WORDS = wordList([
  ["depend on", "phụ thuộc vào", "The result depends on how much you practice.", "VERB"],
  ["belong to", "thuộc về", "This bag belongs to my sister.", "VERB"],
  ["suffer from", "chịu đựng, mắc phải", "He suffers from back pain.", "VERB"],
  ["recover from", "hồi phục sau", "She recovered from the flu quickly.", "VERB"],
  ["apply for", "nộp đơn xin", "I plan to apply for a scholarship.", "VERB"],
  ["apologize for", "xin lỗi vì", "He apologized for arriving late.", "VERB"],
  ["focus on", "tập trung vào", "Please focus on the key points.", "VERB"],
  ["deal with", "xử lý, đối phó với", "We need to deal with this issue now.", "VERB"],
  ["be interested in", "quan tâm, hứng thú với", "I am interested in environmental science.", "ADJECTIVE"],
  ["be proud of", "tự hào về", "Her parents are proud of her progress.", "ADJECTIVE"],
  ["be responsible for", "chịu trách nhiệm về", "I am responsible for weekly reports.", "ADJECTIVE"],
  ["be good at", "giỏi về", "He is good at solving practical problems.", "ADJECTIVE"],
  ["be afraid of", "sợ", "Many children are afraid of the dark.", "ADJECTIVE"],
  ["be similar to", "tương tự với", "This design is similar to the old one.", "ADJECTIVE"],
  ["be keen on", "rất thích, say mê", "She is keen on classical music.", "ADJECTIVE"],
  ["be satisfied with", "hài lòng với", "Are you satisfied with the final draft?", "ADJECTIVE"],
  ["be aware of", "nhận thức rõ về", "Drivers must be aware of blind spots.", "ADJECTIVE"],
  ["be used to", "quen với", "I am used to getting up early.", "ADJECTIVE"],
]);

const U78_WORDS = wordList([
  ["at the moment", "ngay lúc này, hiện tại", "I cannot talk at the moment."],
  ["in advance", "trước một khoảng thời gian", "Please let me know in advance."],
  ["in charge of", "phụ trách", "Lan is in charge of customer support."],
  ["in common", "điểm chung", "We have a lot in common."],
  ["in detail", "một cách chi tiết", "Can you explain the process in detail?"],
  ["in public", "ở nơi công cộng", "He hates speaking in public."],
  ["on purpose", "cố ý, có chủ đích", "I did not do it on purpose."],
  ["on average", "tính trung bình", "On average, I read two books a month."],
  ["on time", "đúng giờ", "The bus arrived on time today."],
  ["on the whole", "nhìn chung", "On the whole, the project went well."],
  ["by accident", "tình cờ, vô tình", "I found this cafe by accident."],
  ["by chance", "ngẫu nhiên", "We met by chance at the airport."],
  ["for instance", "chẳng hạn như", "Many fruits, for instance mangoes, are rich in vitamins."],
  ["for the time being", "tạm thời trong lúc này", "For the time being, we will work remotely."],
  ["under pressure", "trong áp lực", "She can still think clearly under pressure."],
  ["out of date", "lỗi thời, không còn cập nhật", "This manual is out of date."],
  ["at risk", "có nguy cơ", "Several species are at risk of extinction."],
  ["in touch with", "giữ liên lạc với", "I still keep in touch with my high-school teacher."],
]);

const U79_WORDS = wordList([
  ["turn on", "bật thiết bị", "Please turn on the air conditioner.", "VERB"],
  ["turn off", "tắt thiết bị", "Do not forget to turn off the lights.", "VERB"],
  ["pick up", "nhặt lên / đón ai đó", "Can you pick up your jacket from the floor?", "VERB"],
  ["put down", "đặt xuống", "He put down his phone and listened.", "VERB"],
  ["take off", "cởi ra / cất cánh", "The plane took off on time.", "VERB"],
  ["put on", "mặc vào / đeo vào", "Put on a jacket. It is cold outside.", "VERB"],
  ["set up", "thiết lập, sắp xếp", "We need to set up the projector first.", "VERB"],
  ["carry on", "tiếp tục", "Please carry on with your presentation.", "VERB"],
  ["look after", "chăm sóc", "She looks after her younger brother after school.", "VERB"],
  ["look for", "tìm kiếm", "I am looking for my keys.", "VERB"],
  ["find out", "tìm ra thông tin", "We need to find out why sales dropped.", "VERB"],
  ["give up", "từ bỏ", "Do not give up too soon.", "VERB"],
  ["run out of", "hết, cạn", "We ran out of printer paper.", "VERB"],
  ["come across", "tình cờ gặp / thấy", "I came across an old photo yesterday.", "VERB"],
  ["bring up", "đề cập một chủ đề", "She brought up an important question.", "VERB"],
  ["work out", "giải quyết được / tập luyện", "We will work out a better plan.", "VERB"],
  ["break down", "hỏng hóc / suy sụp", "My car broke down on the highway.", "VERB"],
  ["get over", "vượt qua", "He is trying to get over his fear of public speaking.", "VERB"],
]);

const U80_WORDS = wordList([
  ["turn down", "vặn nhỏ / từ chối", "Could you turn down the music, please?", "VERB"],
  ["fill in", "điền vào chỗ trống", "Please fill in your date of birth.", "VERB"],
  ["fill out", "điền đầy đủ biểu mẫu", "You must fill out this form in English.", "VERB"],
  ["hand in", "nộp (bài, tài liệu)", "Students must hand in the report by Friday.", "VERB"],
  ["take back", "rút lại lời nói / mang trả lại", "I take back what I said yesterday.", "VERB"],
  ["throw away", "vứt bỏ", "Do not throw away the receipt yet.", "VERB"],
  ["sort out", "sắp xếp / giải quyết", "We need to sort out these files first.", "VERB"],
  ["point out", "chỉ ra", "She pointed out a small mistake.", "VERB"],
  ["cut down on", "cắt giảm", "I am trying to cut down on sugar.", "VERB"],
  ["put off", "hoãn lại", "They put off the meeting until next week.", "VERB"],
  ["call off", "hủy bỏ", "The organizers called off the event because of rain.", "VERB"],
  ["back up", "sao lưu / ủng hộ", "Please back up your data regularly.", "VERB"],
  ["check in", "làm thủ tục nhận phòng / lên máy bay", "We checked in online last night.", "VERB"],
  ["check out", "trả phòng / xem thử", "Check out this new language app.", "VERB"],
  ["warm up", "khởi động", "Athletes should warm up before running.", "VERB"],
  ["calm down", "bình tĩnh lại", "Take a breath and calm down.", "VERB"],
  ["log in", "đăng nhập", "Use your email to log in.", "VERB"],
  ["sign up", "đăng ký tham gia", "I signed up for a weekend workshop.", "VERB"],
]);

const U81_WORDS = wordList([
  ["make a decision", "đưa ra quyết định", "We need to make a decision today.", "VERB"],
  ["make an effort", "nỗ lực", "She made an effort to speak clearly.", "VERB"],
  ["make progress", "tiến bộ", "You are making good progress this month.", "VERB"],
  ["make a mistake", "mắc lỗi", "It is normal to make a mistake while learning.", "VERB"],
  ["make a plan", "lập kế hoạch", "Let's make a plan before we start.", "VERB"],
  ["make sense", "hợp lý, có ý nghĩa", "Your explanation makes sense to me.", "VERB"],
  ["do homework", "làm bài tập về nhà", "The kids do homework after dinner.", "VERB"],
  ["do business", "làm ăn, kinh doanh", "They do business with Japanese partners.", "VERB"],
  ["do the dishes", "rửa bát", "I will cook if you do the dishes.", "VERB"],
  ["do someone a favor", "giúp ai một việc", "Could you do me a favor and print this?", "VERB"],
  ["do well", "làm tốt", "She did well in the interview.", "VERB"],
  ["do badly", "làm không tốt", "I did badly on the first quiz.", "VERB"],
  ["take a break", "nghỉ giải lao", "Let's take a short break.", "VERB"],
  ["take responsibility", "chịu trách nhiệm", "He took responsibility for the error.", "VERB"],
  ["take part", "tham gia", "Over 200 students took part in the contest.", "VERB"],
  ["take place", "diễn ra", "The ceremony takes place in May.", "VERB"],
  ["take notes", "ghi chú", "Please take notes during the lecture.", "VERB"],
  ["take your time", "cứ từ từ, không cần vội", "Take your time. There is no rush.", "VERB"],
]);

const U82_WORDS = wordList([
  ["give advice", "đưa lời khuyên", "My mentor gave me useful advice.", "VERB"],
  ["give a speech", "phát biểu", "She gave a speech at the opening ceremony.", "VERB"],
  ["give someone a hand", "giúp ai một tay", "Can you give me a hand with these boxes?", "VERB"],
  ["give up", "từ bỏ", "He did not give up even after failing twice.", "VERB"],
  ["give back", "trả lại", "Please give back my dictionary tomorrow.", "VERB"],
  ["give an example", "đưa ví dụ", "Could you give an example of passive voice?", "VERB"],
  ["keep a promise", "giữ lời hứa", "She always keeps her promises.", "VERB"],
  ["keep in mind", "ghi nhớ", "Keep in mind that the deadline is Friday.", "VERB"],
  ["keep in touch", "giữ liên lạc", "We still keep in touch after graduation.", "VERB"],
  ["keep calm", "giữ bình tĩnh", "Keep calm and follow the instructions.", "VERB"],
  ["keep an eye on", "để mắt đến, trông chừng", "Can you keep an eye on my bag?", "VERB"],
  ["keep going", "tiếp tục cố gắng", "Keep going. You are almost there.", "VERB"],
  ["miss a chance", "bỏ lỡ cơ hội", "Do not miss the chance to practice speaking.", "VERB"],
  ["miss the point", "không hiểu ý chính", "I think you missed the point of her message.", "VERB"],
  ["miss a deadline", "lỡ hạn nộp", "We cannot afford to miss this deadline.", "VERB"],
  ["miss out on", "bỏ lỡ cơ hội trải nghiệm/nhận được", "I do not want to miss out on this offer.", "VERB"],
  ["miss someone", "nhớ ai", "I miss my grandparents a lot.", "VERB"],
  ["miss the bus", "lỡ chuyến xe buýt", "If we leave now, we will miss the bus.", "VERB"],
]);

const U83_WORDS = wordList([
  ["get better", "trở nên tốt hơn / khỏi bệnh", "My pronunciation is getting better.", "VERB"],
  ["get worse", "trở nên tệ hơn", "The weather got worse in the afternoon.", "VERB"],
  ["get ready", "chuẩn bị sẵn sàng", "Get ready. The class starts in five minutes.", "VERB"],
  ["get married", "kết hôn", "They got married last spring.", "VERB"],
  ["get lost", "bị lạc", "We got lost in the old town.", "VERB"],
  ["get used to", "quen với", "You will get used to the new schedule soon.", "VERB"],
  ["get along with", "hòa hợp với", "She gets along with all her coworkers.", "VERB"],
  ["get rid of", "loại bỏ", "We need to get rid of outdated files.", "VERB"],
  ["get in touch", "liên lạc", "Please get in touch if you need support.", "VERB"],
  ["get back", "trở về / lấy lại", "When did you get back from Da Nang?", "VERB"],
  ["get by", "xoay xở sống qua", "Many students get by with part-time jobs.", "VERB"],
  ["get over", "vượt qua", "It took her months to get over the disappointment.", "VERB"],
  ["get together", "tụ họp", "Our team gets together every Friday evening.", "VERB"],
  ["get through", "vượt qua / hoàn thành", "We got through a lot of work today.", "VERB"],
  ["get into trouble", "gặp rắc rối", "He got into trouble for copying homework.", "VERB"],
  ["get a job", "kiếm được việc", "She got a job at a design studio.", "VERB"],
  ["get permission", "xin được sự cho phép", "You must get permission before recording.", "VERB"],
  ["get the hang of", "nắm được cách làm", "I finally got the hang of this software.", "VERB"],
]);

const U84_WORDS = wordList([
  ["go ahead", "cứ làm đi, cứ tiếp tục", "Go ahead and ask your question.", "VERB"],
  ["go back", "quay lại", "I need to go back and check the figures.", "VERB"],
  ["go out", "ra ngoài / đi chơi", "We rarely go out on weekdays.", "VERB"],
  ["go off", "đổ chuông / nổ / hỏng", "My alarm went off at 5:30.", "VERB"],
  ["go through", "trải qua / xem xét kỹ", "We went through every detail carefully.", "VERB"],
  ["go over", "xem lại", "Let's go over the key vocabulary again.", "VERB"],
  ["go up", "tăng lên", "Food prices have gone up recently.", "VERB"],
  ["go down", "giảm xuống", "The temperature went down at night.", "VERB"],
  ["go well", "diễn ra suôn sẻ", "I hope your interview goes well.", "VERB"],
  ["go wrong", "xảy ra sai sót", "Something went wrong with the payment.", "VERB"],
  ["go missing", "biến mất", "Several documents went missing last week.", "VERB"],
  ["go bankrupt", "phá sản", "Many shops went bankrupt during the crisis.", "VERB"],
  ["go crazy", "phát điên / cực kỳ thích", "The crowd went crazy when the band appeared.", "VERB"],
  ["go for", "chọn / nhắm đến", "I think I will go for the blue jacket.", "VERB"],
  ["go with", "hợp với / đi cùng", "This tie does not go with your shirt.", "VERB"],
  ["go without", "xoay xở mà không có", "We had to go without internet for two days.", "VERB"],
  ["go on", "tiếp diễn", "The show went on despite the rain.", "VERB"],
  ["go by", "trôi qua", "Time goes by so quickly these days.", "VERB"],
]);

const U85_WORDS = wordList([
  ["glance at", "liếc nhanh qua", "I glanced at the clock during the meeting.", "VERB"],
  ["stare at", "nhìn chằm chằm", "It is impolite to stare at people.", "VERB"],
  ["gaze at", "nhìn chăm chú, thường với cảm xúc", "They gazed at the stars in silence.", "VERB"],
  ["spot", "nhìn thấy, phát hiện", "Can you spot the difference between these pictures?", "VERB"],
  ["overhear", "vô tình nghe được", "I overheard them talking about the project.", "VERB"],
  ["ring a bell", "nghe quen quen, gợi nhớ", "His name rings a bell, but I am not sure why."],
  ["sound familiar", "nghe quen", "That story sounds familiar to me."],
  ["smell of", "có mùi của", "The kitchen smells of fresh bread.", "VERB"],
  ["stink", "bốc mùi khó chịu", "The fish started to stink after two days.", "VERB"],
  ["fragrant", "thơm dễ chịu", "These flowers are very fragrant.", "ADJECTIVE"],
  ["bitter", "đắng", "This medicine tastes bitter.", "ADJECTIVE"],
  ["sour", "chua", "The lemon juice is too sour for me.", "ADJECTIVE"],
  ["crunchy", "giòn rụm khi cắn", "I like crunchy vegetables in my salad.", "ADJECTIVE"],
  ["silky", "mịn như lụa", "This cream makes your skin feel silky.", "ADJECTIVE"],
  ["rough", "thô ráp", "The towel feels rough after many washes.", "ADJECTIVE"],
  ["loud", "to, âm lượng lớn", "The music is too loud in this cafe.", "ADJECTIVE"],
  ["faint", "mờ/nhẹ, khó nhận biết", "I heard a faint noise from outside.", "ADJECTIVE"],
  ["blurry", "mờ, không rõ nét", "The photo is blurry because I moved.", "ADJECTIVE"],
]);

const U86_WORDS = wordList([
  ["advice", "lời khuyên (không đếm được)", "She gave me helpful advice."],
  ["information", "thông tin (không đếm được)", "I need more information about the course."],
  ["luggage", "hành lý (không đếm được)", "Your luggage is already on the bus."],
  ["furniture", "đồ nội thất (không đếm được)", "We bought new furniture for the living room."],
  ["equipment", "trang thiết bị (không đếm được)", "The lab equipment is expensive."],
  ["traffic", "tình hình giao thông (không đếm được)", "Traffic is heavy near the city center."],
  ["progress", "sự tiến bộ, tiến trình (không đếm được)", "You are making steady progress."],
  ["homework", "bài tập về nhà (không đếm được)", "I have too much homework tonight."],
  ["knowledge", "kiến thức (không đếm được)", "Reading expands your knowledge."],
  ["research", "nghiên cứu (không đếm được)", "The report is based on recent research."],
  ["evidence", "bằng chứng (thường không đếm được)", "There is not enough evidence yet."],
  ["accommodation", "chỗ ở (không đếm được trong nghĩa chung)", "We found cheap accommodation near the station."],
  ["behavior", "hành vi, cách cư xử (không đếm được trong nghĩa chung)", "His behavior in class has improved."],
  ["scenery", "phong cảnh (không đếm được)", "The mountain scenery is stunning."],
  ["cash", "tiền mặt (không đếm được)", "I do not carry much cash these days."],
  ["work", "công việc nói chung (không đếm được)", "I have a lot of work to finish."],
  ["a piece of advice", "một lời khuyên", "Let me give you a piece of advice."],
  ["a bit of information", "một chút thông tin", "Could I ask for a bit of information?"],
]);

const U87_WORDS = wordList([
  ["enjoy doing", "thích làm gì", "I enjoy reading before bed.", "VERB"],
  ["avoid doing", "tránh làm gì", "Try to avoid checking your phone while studying.", "VERB"],
  ["suggest doing", "gợi ý làm gì", "She suggested taking a short break.", "VERB"],
  ["finish doing", "hoàn thành việc làm gì", "He finished writing the report at midnight.", "VERB"],
  ["consider doing", "cân nhắc làm gì", "We are considering moving to a smaller office.", "VERB"],
  ["decide to do", "quyết định làm gì", "I decided to learn Spanish this year.", "VERB"],
  ["hope to do", "hy vọng làm gì", "They hope to open a new branch soon.", "VERB"],
  ["plan to do", "dự định làm gì", "I plan to visit my parents this weekend.", "VERB"],
  ["manage to do", "xoay xở để làm được", "She managed to finish on time.", "VERB"],
  ["refuse to do", "từ chối làm gì", "He refused to answer that question.", "VERB"],
  ["promise to do", "hứa sẽ làm gì", "I promise to return the book tomorrow.", "VERB"],
  ["learn to do", "học để làm được", "Children learn to share over time.", "VERB"],
  ["need to do", "cần làm gì", "We need to update this document.", "VERB"],
  ["want to do", "muốn làm gì", "I want to improve my listening skills.", "VERB"],
  ["would like to do", "muốn (lịch sự hơn) làm gì", "I would like to ask a question.", "VERB"],
  ["can't stand doing", "không chịu nổi việc làm gì", "He can't stand waiting in long queues.", "VERB"],
  ["spend time doing", "dành thời gian làm gì", "She spends a lot of time practicing piano.", "VERB"],
  ["be busy doing", "bận làm gì", "Sorry, I am busy preparing tomorrow's lesson.", "VERB"],
]);

const U88_WORDS = wordList([
  ["make someone do", "bắt/ khiến ai làm gì", "The teacher made us rewrite the paragraph.", "VERB"],
  ["let someone do", "để cho ai làm gì", "My parents let me choose my major.", "VERB"],
  ["help someone do", "giúp ai làm gì", "Could you help me carry this box?", "VERB"],
  ["ask someone to do", "nhờ/yêu cầu ai làm gì", "I asked him to send the file.", "VERB"],
  ["tell someone to do", "bảo ai làm gì", "She told me to call back later.", "VERB"],
  ["allow someone to do", "cho phép ai làm gì", "The app allows users to edit profiles.", "VERB"],
  ["remind someone to do", "nhắc ai làm gì", "Please remind me to submit the form.", "VERB"],
  ["invite someone to do", "mời ai làm gì", "They invited us to join dinner.", "VERB"],
  ["encourage someone to do", "khuyến khích ai làm gì", "Our coach encouraged us to stay focused.", "VERB"],
  ["warn someone not to do", "cảnh báo ai đừng làm gì", "The doctor warned him not to skip meals.", "VERB"],
  ["prefer doing to doing", "thích làm A hơn làm B", "I prefer walking to taking a taxi.", "VERB"],
  ["stop doing", "dừng hẳn một hoạt động", "He stopped smoking last year.", "VERB"],
  ["stop to do", "dừng lại để làm việc khác", "We stopped to buy some water.", "VERB"],
  ["remember doing", "nhớ đã làm gì rồi", "I remember locking the door.", "VERB"],
  ["remember to do", "nhớ phải làm gì", "Remember to charge your phone tonight.", "VERB"],
  ["try doing", "thử làm để xem có hiệu quả không", "Try restarting the app first.", "VERB"],
  ["try to do", "cố gắng làm", "I tried to call you this morning.", "VERB"],
  ["used to do", "đã từng làm (thói quen quá khứ)", "I used to play football every weekend.", "VERB"],
]);

const U89_WORDS = wordList([
  ["amazing", "rất tuyệt, gây ấn tượng mạnh", "The view from the top floor is amazing.", "ADJECTIVE"],
  ["amazed", "kinh ngạc", "I was amazed by her quick progress.", "ADJECTIVE"],
  ["boring", "gây chán", "The lecture was long and boring.", "ADJECTIVE"],
  ["bored", "cảm thấy chán", "I felt bored during the delay.", "ADJECTIVE"],
  ["confusing", "gây rối, khó hiểu", "These instructions are confusing.", "ADJECTIVE"],
  ["confused", "cảm thấy bối rối", "I am confused about question three.", "ADJECTIVE"],
  ["reliable", "đáng tin cậy", "She is a reliable teammate.", "ADJECTIVE"],
  ["flexible", "linh hoạt, dễ thích ứng", "We need a more flexible schedule.", "ADJECTIVE"],
  ["affordable", "vừa túi tiền, giá phải chăng", "This neighborhood has affordable apartments.", "ADJECTIVE"],
  ["crowded", "đông đúc", "The train is always crowded at rush hour.", "ADJECTIVE"],
  ["spacious", "rộng rãi", "Their new office is bright and spacious.", "ADJECTIVE"],
  ["convenient", "thuận tiện", "Online payment is very convenient.", "ADJECTIVE"],
  ["challenging", "đầy thử thách", "This project is challenging but exciting.", "ADJECTIVE"],
  ["efficient", "hiệu quả", "She has an efficient way of organizing tasks.", "ADJECTIVE"],
  ["polite", "lịch sự", "The receptionist was polite and helpful.", "ADJECTIVE"],
  ["rude", "thô lỗ, bất lịch sự", "It is rude to interrupt people.", "ADJECTIVE"],
  ["honest", "trung thực", "Thank you for your honest feedback.", "ADJECTIVE"],
  ["patient", "kiên nhẫn", "Good teachers are patient with beginners.", "ADJECTIVE"],
]);

const U90_WORDS = wordList([
  ["across", "băng ngang qua", "We walked across the bridge."],
  ["through", "xuyên qua", "The train passed through a long tunnel."],
  ["along", "dọc theo", "They cycled along the river."],
  ["past", "đi ngang qua", "Go past the bank and turn left."],
  ["over", "qua phía trên", "The cat jumped over the fence."],
  ["under", "ở bên dưới / chui qua dưới", "The ball rolled under the table."],
  ["between", "ở giữa hai vật/người", "The cafe is between the bookstore and the pharmacy."],
  ["among", "ở giữa nhiều vật/người", "She was standing among her classmates."],
  ["opposite", "đối diện", "Our office is opposite the post office."],
  ["near", "gần", "I live near the university."],
  ["beside", "ngay bên cạnh", "Please sit beside me.", "PREPOSITION"],
  ["in front of", "ở phía trước", "There is a bus stop in front of my house."],
  ["behind", "ở phía sau", "The parking lot is behind the building."],
  ["inside", "ở bên trong", "Leave your shoes inside the door."],
  ["outside", "ở bên ngoài", "There are many bikes outside the station."],
  ["towards", "hướng về phía", "She walked towards the main gate."],
  ["away from", "ra xa khỏi", "Keep your phone away from water."],
  ["up to", "cho đến tận, lên tới", "The path goes up to the hilltop."],
]);

export const EVIU_PRE_UNITS_76_90: VocabularyUnit[] = [
  preUnit(76, {
    introVi:
      "Unit 76 tập trung các cụm cố định dùng để nối ý, chuyển chủ đề và giữ mạch hội thoại tự nhiên. Mục tiêu là nói tiếng Anh trôi chảy hơn thay vì ngắt câu rời rạc.",
    structureSections: [
      { label: "Mở và chuyển ý", wordCount: 6 },
      { label: "Nhấn mạnh và điều chỉnh ý", wordCount: 6 },
      { label: "Kết nối mạch hội thoại", wordCount: 6 },
    ],
    collocationHtml:
      `${purple("by the way")}, ${purple("as far as I know")} và ${purple("long story short")} giúp bạn nối câu mượt và có ngữ điệu tự nhiên.`,
    mistakeHtml:
      "Không nên lạm dụng actually và in fact trong cùng một đoạn ngắn; chỉ dùng khi thật sự cần sửa hoặc nhấn mạnh thông tin.",
    principles: [
      {
        title: "Dùng cụm nối để giữ lượt nói",
        body: `Các cụm như ${purple("as I was saying")} hoặc ${purple("anyway")} giúp bạn quay lại ý chính mà không làm cuộc nói chuyện bị đứt đoạn.`,
        examples: [ex("Anyway, let's return to the budget discussion.", "Dù sao thì, mình quay lại phần thảo luận ngân sách nhé.")],
      },
      {
        title: "Phân biệt cụm chuyển ý và cụm nhấn mạnh",
        body: `${purple("by the way")} dùng để chuyển ý nhẹ; ${purple("in fact")} dùng để nhấn mạnh thông tin thật.`,
        examples: [ex("By the way, your package has arrived.", "Tiện thể nói thêm, bưu kiện của bạn đã tới.")],
      },
      {
        title: "Giữ hội thoại thân thiện, không quá cứng",
        body: `${purple("you know what I mean")} và ${purple("if you ask me")} giúp câu nói mềm hơn trong giao tiếp thân mật.`,
        examples: [ex("If you ask me, this design looks cleaner.", "Nếu bạn hỏi ý tôi thì thiết kế này trông gọn hơn.")],
      },
    ],
    words: U76_WORDS,
    exercises: [
      mcq(
        76,
        1,
        "Cụm nào thường dùng để chuyển sang ý liên quan mới?",
        [
          { key: "a", label: "by the way" },
          { key: "b", label: "at least" },
          { key: "c", label: "mind you" },
          { key: "d", label: "after all" },
        ],
        "a",
      ),
      fillBlank(
        76,
        2,
        "____, we solved the issue in ten minutes and moved on.",
        "Long story short",
        [
          { key: "a", label: "As far as I know" },
          { key: "b", label: "Long story short" },
          { key: "c", label: "By chance" },
          { key: "d", label: "In public" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(77, {
    introVi:
      "Unit 77 rèn cách kết hợp động từ/tính từ với giới từ đúng chuẩn. Đây là phần quan trọng để tránh lỗi sai phổ biến kiểu depend of hoặc interested on.",
    structureSections: [
      { label: "Verb + preposition", wordCount: 6 },
      { label: "Adjective + preposition", wordCount: 6 },
      { label: "Mẫu dùng thực tế", wordCount: 6 },
    ],
    collocationHtml: `${purple("depend on")}, ${purple("be responsible for")} và ${purple("be used to")} là các mẫu rất hay gặp trong bài thi lẫn giao tiếp.`,
    mistakeHtml: "Mỗi động từ/tính từ thường đi với giới từ cố định; dịch từng từ sang tiếng Việt dễ dẫn đến chọn sai giới từ.",
    principles: [
      {
        title: "Học theo cụm, không học từng từ rời",
        body: `Nên nhớ trọn cụm như ${purple("apologize for")} hoặc ${purple("focus on")} thay vì chỉ nhớ động từ gốc.`,
        examples: [ex("He apologized for the misunderstanding.", "Anh ấy xin lỗi vì sự hiểu lầm.")],
      },
      {
        title: "Chú ý giới từ sau tính từ",
        body: `${purple("be proud of")} khác với ${purple("be good at")}; hai tính từ này không thay giới từ cho nhau.`,
        examples: [ex("She is good at presenting ideas clearly.", "Cô ấy giỏi trình bày ý tưởng rõ ràng.")],
      },
      {
        title: "Tăng phản xạ bằng câu hoàn chỉnh",
        body: `Luyện nói nguyên câu với ${purple("be aware of")} và ${purple("deal with")} để tạo thói quen dùng đúng giới từ.`,
        examples: [ex("We must be aware of possible risks.", "Chúng ta phải nhận thức rõ các rủi ro có thể xảy ra.")],
      },
    ],
    words: U77_WORDS,
    exercises: [
      mcq(
        77,
        1,
        "Cụm đúng là gì?",
        [
          { key: "a", label: "depend in" },
          { key: "b", label: "depend at" },
          { key: "c", label: "depend on" },
          { key: "d", label: "depend for" },
        ],
        "c",
      ),
      fillBlank(
        77,
        2,
        "I am very ____ this role and want to learn more.",
        "interested in",
        [
          { key: "a", label: "interested in" },
          { key: "b", label: "similar to" },
          { key: "c", label: "afraid of" },
          { key: "d", label: "used to" },
        ],
        "a",
      ),
    ],
  }),
  preUnit(78, {
    introVi:
      "Unit 78 tập trung cụm giới từ cố định dùng nhiều trong văn nói và văn viết hằng ngày. Bạn sẽ diễn đạt thời gian, trạng thái và hoàn cảnh tự nhiên hơn.",
    structureSections: [
      { label: "Cụm chỉ thời gian", wordCount: 6 },
      { label: "Cụm chỉ cách thức/trạng thái", wordCount: 6 },
      { label: "Cụm chỉ ngữ cảnh", wordCount: 6 },
    ],
    collocationHtml: `${purple("at the moment")}, ${purple("for the time being")} và ${purple("under pressure")} giúp mô tả tình huống hiện tại rất linh hoạt.`,
    mistakeHtml: "Đừng nhầm by accident với on purpose vì đây là cặp nghĩa đối lập: vô tình vs cố ý.",
    principles: [
      {
        title: "Dùng cụm giới từ như một khối nghĩa",
        body: `Các cụm như ${purple("in advance")} hoặc ${purple("on average")} nên được ghi nhớ nguyên cụm thay vì tách lẻ từng từ.`,
        examples: [ex("Please arrive ten minutes in advance.", "Vui lòng đến trước mười phút.")],
      },
      {
        title: "Kết hợp cụm giới từ để tăng độ chính xác",
        body: `Bạn có thể nối hai cụm trong cùng câu: ${purple("for instance")} + ${purple("in detail")} để giải thích rõ.`,
        examples: [ex("For instance, we can discuss costs in detail.", "Chẳng hạn, chúng ta có thể bàn chi phí một cách chi tiết.")],
      },
      {
        title: "Dùng đúng văn cảnh trang trọng và thân mật",
        body: `${purple("on the whole")} hợp văn viết; ${purple("at the moment")} dùng tự nhiên trong hội thoại.`,
        examples: [ex("On the whole, customer feedback is positive.", "Nhìn chung, phản hồi khách hàng là tích cực.")],
      },
    ],
    words: U78_WORDS,
    exercises: [
      mcq(
        78,
        1,
        "Cụm nào có nghĩa là 'vô tình'?",
        [
          { key: "a", label: "on purpose" },
          { key: "b", label: "by accident" },
          { key: "c", label: "in charge of" },
          { key: "d", label: "at risk" },
        ],
        "b",
      ),
      fillBlank(
        78,
        2,
        "Could you send me the slides ____ so I can prepare?",
        "in advance",
        [
          { key: "a", label: "on average" },
          { key: "b", label: "in common" },
          { key: "c", label: "in advance" },
          { key: "d", label: "by chance" },
        ],
        "c",
      ),
    ],
  }),
  preUnit(79, {
    introVi:
      "Unit 79 giới thiệu phrasal verbs nền tảng về hình thức và ý nghĩa. Bạn sẽ thấy cùng một động từ gốc nhưng thêm particle có thể đổi nghĩa rất mạnh.",
    structureSections: [
      { label: "Phrasal verbs nghĩa cụ thể", wordCount: 6 },
      { label: "Phrasal verbs nghĩa mở rộng", wordCount: 6 },
      { label: "Phrasal verbs trong ngữ cảnh", wordCount: 6 },
    ],
    collocationHtml: `${purple("look after")}, ${purple("find out")} và ${purple("run out of")} là các phrasal verbs cực kỳ thông dụng.`,
    mistakeHtml: "Không phải lúc nào cũng dịch từng từ thành phần; hãy học nghĩa theo ngữ cảnh của cả cụm phrasal verb.",
    principles: [
      {
        title: "Nhận diện cấu trúc động từ + particle",
        body: `Ví dụ ${purple("turn on")} và ${purple("turn off")} có cùng động từ nhưng particle tạo nghĩa trái ngược.`,
        examples: [ex("Please turn off your phone during class.", "Vui lòng tắt điện thoại trong giờ học.")],
      },
      {
        title: "Phân biệt nghĩa đen và nghĩa mở rộng",
        body: `${purple("take off")} có thể là cởi áo hoặc máy bay cất cánh tùy ngữ cảnh.`,
        examples: [ex("The flight took off late due to rain.", "Chuyến bay cất cánh trễ do mưa.")],
      },
      {
        title: "Luyện theo cụm với câu thực tế",
        body: `Ghi nhớ qua ví dụ thật giúp bạn dùng ${purple("come across")} và ${purple("work out")} tự nhiên hơn.`,
        examples: [ex("I came across an interesting article this morning.", "Sáng nay tôi tình cờ đọc được một bài rất hay.")],
      },
    ],
    words: U79_WORDS,
    exercises: [
      mcq(
        79,
        1,
        "Cụm nào có nghĩa là 'chăm sóc'?",
        [
          { key: "a", label: "look after" },
          { key: "b", label: "look for" },
          { key: "c", label: "pick up" },
          { key: "d", label: "put down" },
        ],
        "a",
      ),
      fillBlank(
        79,
        2,
        "We need to ____ why the app keeps crashing.",
        "find out",
        [
          { key: "a", label: "find out" },
          { key: "b", label: "run out of" },
          { key: "c", label: "bring up" },
          { key: "d", label: "take off" },
        ],
        "a",
      ),
    ],
  }),
  preUnit(80, {
    introVi:
      "Unit 80 đi sâu ngữ pháp và sắc thái văn phong của phrasal verbs: tách được hay không, dùng thân mật hay trang trọng, và cách đặt tân ngữ.",
    structureSections: [
      { label: "Phrasal verbs tách được", wordCount: 6 },
      { label: "Phrasal verbs theo ngữ cảnh", wordCount: 6 },
      { label: "Phrasal verbs giao tiếp hằng ngày", wordCount: 6 },
    ],
    collocationHtml: `${purple("hand in")}, ${purple("put off")} và ${purple("cut down on")} giúp diễn đạt hành động học tập/công việc rất hiệu quả.`,
    mistakeHtml: "Một số phrasal verbs có hai nghĩa rất khác nhau như turn down (vặn nhỏ/từ chối), cần dựa vào ngữ cảnh.",
    principles: [
      {
        title: "Học cách dùng với tân ngữ",
        body: `Với cụm như ${purple("throw away")} hay ${purple("point out")}, vị trí tân ngữ ảnh hưởng độ tự nhiên của câu.`,
        examples: [ex("Please throw away these old notes.", "Hãy vứt những ghi chú cũ này đi.")],
      },
      {
        title: "Ưu tiên phrasal verbs trong văn nói",
        body: `${purple("sort out")} hoặc ${purple("calm down")} nghe tự nhiên hơn nhiều so với cách diễn đạt quá trang trọng.`,
        examples: [ex("Let's sort out this issue before lunch.", "Mình xử lý vấn đề này trước bữa trưa nhé.")],
      },
      {
        title: "Phân biệt phrasal verbs theo chức năng",
        body: `Nhóm thao tác số như ${purple("log in")} và ${purple("sign up")} rất phổ biến trong tiếng Anh hiện đại.`,
        examples: [ex("You need to sign up before logging in.", "Bạn cần đăng ký trước khi đăng nhập.")],
      },
    ],
    words: U80_WORDS,
    exercises: [
      mcq(
        80,
        1,
        "Cụm nào nghĩa là 'hoãn lại'?",
        [
          { key: "a", label: "put off" },
          { key: "b", label: "hand in" },
          { key: "c", label: "check in" },
          { key: "d", label: "back up" },
        ],
        "a",
      ),
      fillBlank(
        80,
        2,
        "I need to ____ my account before I can upload files.",
        "log in",
        [
          { key: "a", label: "sort out" },
          { key: "b", label: "log in" },
          { key: "c", label: "call off" },
          { key: "d", label: "take back" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(81, {
    introVi:
      "Unit 81 giúp phân biệt ba động từ đa năng make, do, take thông qua collocation thực tế. Nắm chắc unit này sẽ giảm đáng kể lỗi ngữ pháp trong nói và viết.",
    structureSections: [
      { label: "Make + noun", wordCount: 6 },
      { label: "Do + activity", wordCount: 6 },
      { label: "Take + action/time", wordCount: 6 },
    ],
    collocationHtml: `${purple("make progress")}, ${purple("do someone a favor")} và ${purple("take responsibility")} là các cụm cực kỳ thực dụng.`,
    mistakeHtml: "Không dịch máy móc làm = do; nhiều trường hợp phải dùng make hoặc take theo collocation cố định.",
    principles: [
      {
        title: "Nhớ theo nhóm collocation",
        body: `${purple("make a decision")} và ${purple("make a plan")} thuộc nhóm tạo ra kết quả/tạo lập ý tưởng.`,
        examples: [ex("We made a clear plan for the next quarter.", "Chúng tôi đã lập kế hoạch rõ ràng cho quý tới.")],
      },
      {
        title: "Do thường đi với công việc/hoạt động",
        body: `${purple("do homework")} và ${purple("do the dishes")} là hành động thực hiện công việc.`,
        examples: [ex("I do the dishes while my brother cooks.", "Tôi rửa bát còn anh tôi nấu ăn.")],
      },
      {
        title: "Take thường gắn với việc nhận/đảm nhiệm",
        body: `Dùng ${purple("take notes")} hoặc ${purple("take part")} khi bạn tham gia và chủ động xử lý.`,
        examples: [ex("Please take notes during the workshop.", "Vui lòng ghi chú trong buổi workshop.")],
      },
    ],
    words: U81_WORDS,
    exercises: [
      mcq(
        81,
        1,
        "Cụm đúng là gì?",
        [
          { key: "a", label: "do a decision" },
          { key: "b", label: "take a decision" },
          { key: "c", label: "make a decision" },
          { key: "d", label: "make a homework" },
        ],
        "c",
      ),
      fillBlank(
        81,
        2,
        "Could you ____ during the lecture? We need a summary later.",
        "take notes",
        [
          { key: "a", label: "do business" },
          { key: "b", label: "take notes" },
          { key: "c", label: "make sense" },
          { key: "d", label: "do badly" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(82, {
    introVi:
      "Unit 82 mở rộng ba động từ trọng tâm give, keep, miss với nhiều cụm cố định. Bạn sẽ diễn đạt trợ giúp, duy trì thói quen và nói về cơ hội bị lỡ chính xác hơn.",
    structureSections: [
      { label: "Give + collocations", wordCount: 6 },
      { label: "Keep + collocations", wordCount: 6 },
      { label: "Miss + collocations", wordCount: 6 },
    ],
    collocationHtml: `${purple("give someone a hand")}, ${purple("keep in touch")} và ${purple("miss out on")} là cụm giao tiếp rất thông dụng.`,
    mistakeHtml: "Miss không chỉ có nghĩa 'nhớ ai' mà còn nghĩa 'bỏ lỡ'; phải đọc theo ngữ cảnh để hiểu đúng.",
    principles: [
      {
        title: "Dùng give cho hành động trao/đưa",
        body: `${purple("give advice")} và ${purple("give an example")} giúp câu nói rõ và mang tính hỗ trợ.`,
        examples: [ex("Could you give an example in simpler words?", "Bạn có thể cho một ví dụ bằng từ đơn giản hơn không?")],
      },
      {
        title: "Dùng keep cho sự duy trì liên tục",
        body: `${purple("keep calm")} hoặc ${purple("keep going")} nhấn mạnh trạng thái kéo dài theo thời gian.`,
        examples: [ex("Keep going. Your speaking is improving.", "Cứ tiếp tục nhé. Kỹ năng nói của bạn đang tốt lên.")],
      },
      {
        title: "Dùng miss cho điều đã không đạt được",
        body: `${purple("miss a deadline")} và ${purple("miss a chance")} diễn tả tổn thất do lỡ thời điểm.`,
        examples: [ex("We cannot miss a chance like this again.", "Chúng ta không thể bỏ lỡ cơ hội như thế này thêm lần nào nữa.")],
      },
    ],
    words: U82_WORDS,
    exercises: [
      mcq(
        82,
        1,
        "Cụm nào nghĩa là 'giữ liên lạc'?",
        [
          { key: "a", label: "keep in touch" },
          { key: "b", label: "give back" },
          { key: "c", label: "miss the point" },
          { key: "d", label: "give up" },
        ],
        "a",
      ),
      fillBlank(
        82,
        2,
        "If you do not apply today, you may ____ a great chance.",
        "miss",
        [
          { key: "a", label: "give" },
          { key: "b", label: "keep" },
          { key: "c", label: "miss" },
          { key: "d", label: "take" },
        ],
        "c",
      ),
    ],
  }),
  preUnit(83, {
    introVi:
      "Unit 83 tập trung động từ get với nhiều nghĩa và mẫu dùng cực kỳ phổ biến trong đời sống. Đây là unit then chốt để tăng độ tự nhiên của tiếng Anh giao tiếp.",
    structureSections: [
      { label: "Get + adjective", wordCount: 6 },
      { label: "Get + phrase", wordCount: 6 },
      { label: "Get + phrasal patterns", wordCount: 6 },
    ],
    collocationHtml: `${purple("get used to")}, ${purple("get rid of")} và ${purple("get the hang of")} rất quan trọng cho trình độ tiền trung cấp.`,
    mistakeHtml: "Get có nhiều nghĩa theo ngữ cảnh; không nên gán một nghĩa cố định như 'nhận' cho mọi câu.",
    principles: [
      {
        title: "Nắm mẫu get + adjective",
        body: `${purple("get better")} và ${purple("get worse")} diễn tả sự thay đổi trạng thái theo thời gian.`,
        examples: [ex("Your flu should get better after some rest.", "Cảm cúm của bạn sẽ đỡ hơn sau khi nghỉ ngơi.")],
      },
      {
        title: "Dùng get trong cụm đời sống",
        body: `Các cụm như ${purple("get along with")} và ${purple("get in touch")} thường gặp trong giao tiếp công việc.`,
        examples: [ex("I get along with my new manager very well.", "Tôi hòa hợp rất tốt với quản lý mới.")],
      },
      {
        title: "Luyện nghĩa mở rộng để nói tự nhiên",
        body: `${purple("get by")} và ${purple("get through")} giúp diễn đạt sự xoay xở và vượt qua thử thách.`,
        examples: [ex("We got through a difficult week together.", "Chúng tôi đã cùng nhau vượt qua một tuần khó khăn.")],
      },
    ],
    words: U83_WORDS,
    exercises: [
      mcq(
        83,
        1,
        "Cụm nào có nghĩa là 'loại bỏ'?",
        [
          { key: "a", label: "get through" },
          { key: "b", label: "get rid of" },
          { key: "c", label: "get by" },
          { key: "d", label: "get back" },
        ],
        "b",
      ),
      fillBlank(
        83,
        2,
        "At first the software felt hard, but I finally ____ it.",
        "got the hang of",
        [
          { key: "a", label: "got into trouble" },
          { key: "b", label: "got married" },
          { key: "c", label: "got the hang of" },
          { key: "d", label: "got lost" },
        ],
        "c",
      ),
    ],
  }),
  preUnit(84, {
    introVi:
      "Unit 84 mở rộng động từ go với nhiều biểu thức nghĩa bóng và nghĩa thực tế. Bạn sẽ mô tả tiến trình, thay đổi và kết quả sự việc chính xác hơn.",
    structureSections: [
      { label: "Go + direction/process", wordCount: 6 },
      { label: "Go + change/outcome", wordCount: 6 },
      { label: "Go + expression", wordCount: 6 },
    ],
    collocationHtml: `${purple("go through")}, ${purple("go wrong")} và ${purple("go with")} xuất hiện rất nhiều trong văn nói hiện đại.`,
    mistakeHtml: "Go không chỉ mang nghĩa 'đi'; trong nhiều cụm nó diễn tả trạng thái thay đổi hoặc diễn biến của sự việc.",
    principles: [
      {
        title: "Hiểu go theo nghĩa diễn biến",
        body: `${purple("go well")} và ${purple("go wrong")} mô tả kết quả của một sự việc, không nói về di chuyển.`,
        examples: [ex("Everything went wrong on the launch day.", "Mọi thứ đều trục trặc vào ngày ra mắt.")],
      },
      {
        title: "Nhận diện go trong các cụm xu hướng",
        body: `${purple("go up")} và ${purple("go down")} thường dùng cho số liệu, giá cả, nhiệt độ.`,
        examples: [ex("Energy costs may go up next quarter.", "Chi phí năng lượng có thể tăng vào quý tới.")],
      },
      {
        title: "Luyện go trong hội thoại tự nhiên",
        body: `${purple("go ahead")} và ${purple("go for")} giúp bạn phản hồi linh hoạt trong đối thoại.`,
        examples: [ex("Go ahead, I am listening.", "Cứ nói đi, tôi đang nghe đây.")],
      },
    ],
    words: U84_WORDS,
    exercises: [
      mcq(
        84,
        1,
        "Cụm nào thường dùng để cho phép người khác tiếp tục?",
        [
          { key: "a", label: "go by" },
          { key: "b", label: "go ahead" },
          { key: "c", label: "go bankrupt" },
          { key: "d", label: "go missing" },
        ],
        "b",
      ),
      fillBlank(
        84,
        2,
        "Let's ____ the report once more before sending it.",
        "go over",
        [
          { key: "a", label: "go over" },
          { key: "b", label: "go out" },
          { key: "c", label: "go without" },
          { key: "d", label: "go crazy" },
        ],
        "a",
      ),
    ],
  }),
  preUnit(85, {
    introVi:
      "Unit 85 phát triển từ vựng liên quan năm giác quan và cách miêu tả cảm nhận tinh tế. Nội dung giúp bạn viết mô tả sinh động và giao tiếp giàu hình ảnh hơn.",
    structureSections: [
      { label: "Thị giác và thính giác", wordCount: 6 },
      { label: "Khứu giác và vị giác", wordCount: 6 },
      { label: "Xúc giác và cường độ cảm nhận", wordCount: 6 },
    ],
    collocationHtml: `${purple("glance at")}, ${purple("ring a bell")} và ${purple("smell of")} giúp mô tả cảm giác tự nhiên thay vì diễn đạt chung chung.`,
    mistakeHtml: "Phân biệt tính từ gây cảm giác (loud, bitter) với động từ tri giác (overhear, spot) để tránh dùng sai loại từ.",
    principles: [
      {
        title: "Chọn động từ nhìn/nghe theo mức độ chú ý",
        body: `${purple("glance at")} là nhìn nhanh, còn ${purple("stare at")} là nhìn chằm chằm lâu hơn.`,
        examples: [ex("She only glanced at the message and closed it.", "Cô ấy chỉ liếc nhanh tin nhắn rồi đóng lại.")],
      },
      {
        title: "Mô tả mùi vị bằng tính từ cụ thể",
        body: `Các từ như ${purple("bitter")}, ${purple("sour")} và ${purple("fragrant")} giúp câu văn giàu cảm giác.`,
        examples: [ex("The sauce is a bit sour but very fresh.", "Nước sốt hơi chua nhưng rất tươi.")],
      },
      {
        title: "Kết hợp giác quan trong một mô tả",
        body: `Bạn có thể ghép âm thanh, hình ảnh, xúc giác bằng ${purple("faint")}, ${purple("blurry")} và ${purple("rough")}.`,
        examples: [ex("I heard a faint sound and saw a blurry shadow.", "Tôi nghe thấy âm thanh mờ nhẹ và thấy một bóng mờ.")],
      },
    ],
    words: U85_WORDS,
    exercises: [
      mcq(
        85,
        1,
        "Từ nào có nghĩa là 'vô tình nghe được'?",
        [
          { key: "a", label: "spot" },
          { key: "b", label: "overhear" },
          { key: "c", label: "stare at" },
          { key: "d", label: "gaze at" },
        ],
        "b",
      ),
      fillBlank(
        85,
        2,
        "The perfume is light and very ____.",
        "fragrant",
        [
          { key: "a", label: "rough" },
          { key: "b", label: "blurry" },
          { key: "c", label: "fragrant" },
          { key: "d", label: "loud" },
        ],
        "c",
      ),
    ],
  }),
  preUnit(86, {
    introVi:
      "Unit 86 tập trung danh từ không đếm được và cách diễn đạt số lượng phù hợp. Bạn sẽ tránh lỗi sai phổ biến như many informations hoặc an advice.",
    structureSections: [
      { label: "Uncountable nouns phổ biến", wordCount: 6 },
      { label: "Danh từ trừu tượng và tổng hợp", wordCount: 6 },
      { label: "Cách lượng hóa uncountable nouns", wordCount: 6 },
    ],
    collocationHtml: `${purple("a piece of advice")}, ${purple("a bit of information")} và ${purple("make progress")} là các mẫu bắt buộc cần nhớ.`,
    mistakeHtml: "Danh từ không đếm được không dùng trực tiếp với a/an hoặc số nhiều -s; cần thêm đơn vị đo/lượng hóa nếu muốn đếm.",
    principles: [
      {
        title: "Nhận diện nhóm danh từ không đếm được",
        body: `Các từ như ${purple("furniture")}, ${purple("equipment")} và ${purple("luggage")} thường ở dạng số ít ngữ pháp.`,
        examples: [ex("This equipment is expensive to maintain.", "Thiết bị này tốn chi phí bảo trì cao.")],
      },
      {
        title: "Dùng lượng từ phù hợp",
        body: `Với ${purple("advice")} và ${purple("information")}, hãy dùng đơn vị như ${purple("a piece of advice")} hoặc ${purple("a bit of information")}.`,
        examples: [ex("Can you give me a piece of advice?", "Bạn có thể cho tôi một lời khuyên không?")],
      },
      {
        title: "Kiểm soát hòa hợp chủ-vị",
        body: `Vì là uncountable, các danh từ như ${purple("research")} thường đi với động từ số ít trong ngữ cảnh chung.`,
        examples: [ex("Recent research shows clear benefits.", "Nghiên cứu gần đây cho thấy lợi ích rõ ràng.")],
      },
    ],
    words: U86_WORDS,
    exercises: [
      mcq(
        86,
        1,
        "Cách dùng nào đúng?",
        [
          { key: "a", label: "an advice" },
          { key: "b", label: "two informations" },
          { key: "c", label: "a piece of advice" },
          { key: "d", label: "many furniture" },
        ],
        "c",
      ),
      fillBlank(
        86,
        2,
        "The lab ____ is new and very modern.",
        "equipment",
        [
          { key: "a", label: "equipment" },
          { key: "b", label: "equipments" },
          { key: "c", label: "an equipment" },
          { key: "d", label: "piece equipments" },
        ],
        "a",
      ),
    ],
  }),
  preUnit(87, {
    introVi:
      "Unit 87 giới thiệu các mẫu verb constructions cơ bản như verb + -ing và verb + to-infinitive. Nắm vững phần này giúp bạn viết câu đúng cấu trúc và tự nhiên hơn.",
    structureSections: [
      { label: "Verb + -ing", wordCount: 6 },
      { label: "Verb + to-infinitive", wordCount: 6 },
      { label: "Mẫu kết hợp thông dụng", wordCount: 6 },
    ],
    collocationHtml: `${purple("enjoy doing")}, ${purple("decide to do")} và ${purple("can't stand doing")} là các mẫu nền tảng cần tự động hóa.`,
    mistakeHtml: "Nhiều động từ chỉ đi với một dạng nhất định (-ing hoặc to do); dùng sai dạng sẽ khiến câu thiếu tự nhiên hoặc sai ngữ pháp.",
    principles: [
      {
        title: "Nhóm động từ đi với -ing",
        body: `${purple("avoid doing")} và ${purple("consider doing")} thường không theo sau bởi to-infinitive.`,
        examples: [ex("She avoids eating late at night.", "Cô ấy tránh ăn tối muộn.")],
      },
      {
        title: "Nhóm động từ đi với to do",
        body: `Các động từ như ${purple("decide to do")} và ${purple("manage to do")} cần dạng to-infinitive.`,
        examples: [ex("He managed to solve the issue quickly.", "Anh ấy đã xoay xở giải quyết vấn đề nhanh chóng.")],
      },
      {
        title: "Luyện mẫu theo cụm cố định",
        body: `Các cụm như ${purple("spend time doing")} hoặc ${purple("be busy doing")} rất hữu ích khi kể thói quen.`,
        examples: [ex("I spend time reading every evening.", "Tôi dành thời gian đọc sách mỗi tối.")],
      },
    ],
    words: U87_WORDS,
    exercises: [
      mcq(
        87,
        1,
        "Câu nào đúng ngữ pháp?",
        [
          { key: "a", label: "I enjoy to read at night." },
          { key: "b", label: "I enjoy reading at night." },
          { key: "c", label: "I enjoy read at night." },
          { key: "d", label: "I enjoy to reading at night." },
        ],
        "b",
      ),
      fillBlank(
        87,
        2,
        "They decided ____ the event online.",
        "to hold",
        [
          { key: "a", label: "holding" },
          { key: "b", label: "to hold" },
          { key: "c", label: "holds" },
          { key: "d", label: "held" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(88, {
    introVi:
      "Unit 88 tiếp tục verb constructions với các mẫu có tân ngữ và các cặp dễ nhầm như stop doing / stop to do, remember doing / remember to do.",
    structureSections: [
      { label: "Verb + object + infinitive", wordCount: 6 },
      { label: "Mẫu sai khác về nghĩa", wordCount: 6 },
      { label: "Cấu trúc mở rộng", wordCount: 6 },
    ],
    collocationHtml: `${purple("make someone do")}, ${purple("remember to do")} và ${purple("used to do")} là các mẫu kiểm tra rất thường gặp.`,
    mistakeHtml: "Một số cấu trúc gần giống bề mặt nhưng khác nghĩa rõ rệt; học thuộc công thức mà không hiểu ngữ cảnh sẽ dễ sai.",
    principles: [
      {
        title: "Nắm công thức verb + object + to do",
        body: `Các mẫu như ${purple("ask someone to do")} và ${purple("tell someone to do")} cần tân ngữ chỉ người trước động từ nguyên mẫu.`,
        examples: [ex("She asked me to review the draft.", "Cô ấy nhờ tôi xem lại bản nháp.")],
      },
      {
        title: "Phân biệt cặp cấu trúc đổi nghĩa",
        body: `${purple("stop doing")} nghĩa là dừng hẳn hoạt động; ${purple("stop to do")} là dừng để làm việc khác.`,
        examples: [ex("We stopped to rest for ten minutes.", "Chúng tôi dừng lại để nghỉ mười phút.")],
      },
      {
        title: "Nhận diện thói quen quá khứ",
        body: `${purple("used to do")} diễn tả thói quen trước đây không còn đúng ở hiện tại.`,
        examples: [ex("I used to stay up late, but now I sleep early.", "Trước đây tôi hay thức khuya, nhưng giờ tôi ngủ sớm.")],
      },
    ],
    words: U88_WORDS,
    exercises: [
      mcq(
        88,
        1,
        "Câu nào mang nghĩa 'dừng lại để làm việc khác'?",
        [
          { key: "a", label: "We stopped talking." },
          { key: "b", label: "We stopped to talk." },
          { key: "c", label: "We stop talked." },
          { key: "d", label: "We stopping to talk." },
        ],
        "b",
      ),
      fillBlank(
        88,
        2,
        "My manager reminded me ____ the invoice today.",
        "to send",
        [
          { key: "a", label: "send" },
          { key: "b", label: "to send" },
          { key: "c", label: "sending" },
          { key: "d", label: "sent" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(89, {
    introVi:
      "Unit 89 củng cố cách dùng tính từ để mô tả cảm xúc, đặc điểm người/vật và chất lượng sự vật. Bạn cũng luyện phân biệt đuôi -ed / -ing chuẩn xác.",
    structureSections: [
      { label: "Adjectives cảm xúc", wordCount: 6 },
      { label: "Adjectives mô tả chất lượng", wordCount: 6 },
      { label: "Adjectives đánh giá hành vi", wordCount: 6 },
    ],
    collocationHtml: `${purple("amazing / amazed")}, ${purple("boring / bored")} và ${purple("confusing / confused")} là ba cặp dễ nhầm nhất.`,
    mistakeHtml: "Tính từ -ing thường mô tả thứ gây cảm xúc; tính từ -ed thường mô tả người cảm thấy cảm xúc đó.",
    principles: [
      {
        title: "Phân biệt -ing và -ed đúng ngữ cảnh",
        body: `${purple("boring")} mô tả sự vật gây chán, còn ${purple("bored")} mô tả người cảm thấy chán.`,
        examples: [ex("The lecture was boring, so many students felt bored.", "Bài giảng gây chán nên nhiều sinh viên cảm thấy chán.")],
      },
      {
        title: "Kết hợp tính từ đánh giá đúng sắc thái",
        body: `Bạn có thể mô tả con người bằng ${purple("reliable")}, ${purple("honest")} hoặc ${purple("patient")} tùy bối cảnh.`,
        examples: [ex("She is patient with beginners.", "Cô ấy kiên nhẫn với người mới bắt đầu.")],
      },
      {
        title: "Ưu tiên tính từ cụ thể thay vì very + basic adjective",
        body: `Dùng ${purple("spacious")}, ${purple("affordable")} hoặc ${purple("efficient")} sẽ chính xác hơn từ chung chung.`,
        examples: [ex("We found an affordable and convenient apartment.", "Chúng tôi tìm được căn hộ vừa túi tiền và thuận tiện.")],
      },
    ],
    words: U89_WORDS,
    exercises: [
      mcq(
        89,
        1,
        "Chọn câu đúng:",
        [
          { key: "a", label: "I am amazing by this result." },
          { key: "b", label: "I am amazed by this result." },
          { key: "c", label: "This result is amazed." },
          { key: "d", label: "This result amazement." },
        ],
        "b",
      ),
      fillBlank(
        89,
        2,
        "The office is small but very ____ for daily commuting.",
        "convenient",
        [
          { key: "a", label: "crowded" },
          { key: "b", label: "convenient" },
          { key: "c", label: "bored" },
          { key: "d", label: "rude" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(90, {
    introVi:
      "Unit 90 hoàn thiện hệ thống giới từ chỉ vị trí và chuyển động. Đây là chủ điểm quan trọng để mô tả đường đi, vị trí đồ vật và hướng di chuyển chính xác.",
    structureSections: [
      { label: "Place prepositions", wordCount: 6 },
      { label: "Movement prepositions", wordCount: 6 },
      { label: "Direction and route", wordCount: 6 },
    ],
    collocationHtml: `${purple("in front of")}, ${purple("through")} và ${purple("away from")} là cụm then chốt khi chỉ đường và mô tả chuyển động.`,
    mistakeHtml: "Phân biệt across (băng ngang bề mặt) với through (xuyên qua không gian có chiều sâu), và between (giữa hai) với among (giữa nhiều).",
    principles: [
      {
        title: "Tách rõ vị trí tĩnh và chuyển động",
        body: `Các giới từ như ${purple("behind")} hay ${purple("opposite")} mô tả vị trí; ${purple("towards")} hoặc ${purple("past")} mô tả hướng đi.`,
        examples: [ex("Walk towards the library, then go past the bank.", "Đi về phía thư viện, rồi đi qua ngân hàng.")],
      },
      {
        title: "Dùng cặp giới từ để chỉ đường rõ ràng",
        body: `Kết hợp ${purple("across")} + ${purple("along")} hoặc ${purple("through")} + ${purple("up to")} giúp mô tả lộ trình chi tiết.`,
        examples: [ex("Go across the bridge and walk along the river.", "Đi qua cây cầu rồi đi dọc theo bờ sông.")],
      },
      {
        title: "Luyện với bản đồ và tình huống thực tế",
        body: `Ứng dụng các cụm như ${purple("in front of")}, ${purple("outside")} và ${purple("away from")} trong bài tập chỉ đường hằng ngày.`,
        examples: [ex("Please wait outside the station, in front of the cafe.", "Vui lòng chờ bên ngoài nhà ga, phía trước quán cà phê.")],
      },
    ],
    words: U90_WORDS,
    exercises: [
      mcq(
        90,
        1,
        "Giới từ nào nghĩa là 'xuyên qua'?",
        [
          { key: "a", label: "across" },
          { key: "b", label: "through" },
          { key: "c", label: "beside" },
          { key: "d", label: "among" },
        ],
        "b",
      ),
      fillBlank(
        90,
        2,
        "The pharmacy is ____ the supermarket and the bakery.",
        "between",
        [
          { key: "a", label: "between" },
          { key: "b", label: "among" },
          { key: "c", label: "towards" },
          { key: "d", label: "over" },
        ],
        "a",
      ),
    ],
  }),
];
