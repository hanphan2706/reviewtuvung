import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import {
  bold,
  ex,
  fillBlank,
  mcq,
  purple,
} from "@/lib/vocabulary/units/eviu-unit-builder";
import { advancedUnit, wordList } from "@/lib/vocabulary/units/eviu-advanced-unit-helpers";

const U61_WORDS = wordList([
  ["limp", "đi khập khiểng vì một chân đau", "He limped home after twisting his ankle.", "VERB"],
  ["hop", "nhảy một chân hoặc xuống xe nhanh", "Let's hop off the bus at the next stop.", "VERB"],
  ["stagger", "đi loạng choạng, không vững", "Miguel's business staggered on for a few years.", "VERB"],
  ["stumble", "vấp, suýt ngã", "After several stumbling attempts, Theo had a poem published.", "VERB"],
  ["lurch", "lảo đảo bất thường", "The government has lurched from one crisis to the next.", "VERB"],
  ["tiptoe", "rón rén trên mũi chân", "She tiptoed past the sleeping baby.", "VERB"],
  ["amble", "đi thong thả, không vội", "We ambled along the river after lunch.", "VERB"],
  ["stride", "bước dài, dứt khoát", "Maria takes everything life throws at her in her stride.", "PHRASE"],
  ["strut", "đi ưng bướng, ngực ưỡn", "He strutted across the stage like he owned it.", "VERB"],
  ["trample", "giẫm đạp lên", "Parents should try not to trample on children's dreams.", "VERB"],
  ["trudge", "lê bước nặng nhọc vì mệt", "We trudged home through the snow.", "VERB"],
  ["chase", "đuổi theo để đòi hoặc bắt", "If they don't pay, you'll have to chase them.", "VERB"],
  ["staggeringly", "một cách đáng kinh ngạc", "Lisa did staggeringly well in her exams.", "ADVERB"],
  ["flow", "chảy (ẩn dụ đám đông)", "Crowds of tourists flowed across the square all day.", "VERB"],
  ["spill out", "trào ra ồ ạt", "Children spilled out into the playground.", "VERB"],
  ["stream into", "đổ vào liên tục", "People streamed into the lecture hall.", "VERB"],
  ["meander", "lang thang không mục đích", "We meandered round the town window shopping.", "VERB"],
  ["flood across", "tràn qua số lượng lớn", "Refugees have been flooding across the border.", "VERB"],
  ["decisive step", "bước đi quyết định (ẩn dụ)", "The board took a decisive step towards reform.", "PHRASE"],
  ["unprecedented", "chưa từng có tiền lệ", "The company made an unprecedented profit.", "ADJECTIVE"],
  ["trickle", "rỉ rả từng ít một", "A trickle of people appeared outside by midday.", "VERB"],
  ["pour into", "đổ vào dồn dập", "People have been pouring into the exhibition all day.", "VERB"],
]);

const U62_WORDS = wordList([
  ["courtesy", "sự lịch sự, tôn trọng người khác", "Courtesy is still important nowadays.", "NOUN"],
  ["courteous", "lịch sự, tôn trọng", "Her students were always very courteous.", "ADJECTIVE"],
  ["discourteous", "bất lịch sự, thiếu tôn trọng", "She addressed the customer in a discourteous manner.", "ADJECTIVE"],
  ["offhand", "lạnh nhạt, thiếu quan tâm", "I hope I didn't appear offhand with her.", "ADJECTIVE"],
  ["insolent", "hỗn láo, thiếu tôn trọng (mạnh hơn discourteous)", "The boy had an insolent expression on his face.", "ADJECTIVE"],
  ["etiquette", "quy tắc ứng xử trong tình huống xã hội", "What's the etiquette at a traditional Chinese wedding?", "NOUN"],
  ["stand on ceremony", "cư xử quá trang trọng", "Relax — there's no need to stand on ceremony.", "PHRASE"],
  ["straitlaced", "cổ hủ, đạo đức cứng nhắc", "My elderly uncle and aunt are both rather straitlaced.", "ADJECTIVE"],
  ["the done thing", "điều được xã hội chấp nhận", "Asking for more food at a formal dinner is not the done thing.", "PHRASE"],
  ["netiquette", "quy tắc ứng xử trên mạng", "Always follow netiquette and keep your comments brief.", "NOUN"],
  ["raise your eyebrows", "nhướng mày (ngạc nhiên hoặc gây ngạc nhiên)", "His behaviour raised a few eyebrows.", "PHRASE"],
  ["twitch", "giật giật nhẹ (bất an)", "She sat there twitching nervously.", "VERB"],
  ["flinch", "giật mình vì đau hoặc sợ", "He didn't flinch when the doctor cleaned the wound.", "VERB"],
  ["squirm", "quằn quại vì xấu hổ hoặc bồn chồn", "The child squirmed in embarrassment.", "VERB"],
  ["smirk", "cười khẩy (tự mãn, tiêu cực)", "He smirked when he heard the news.", "VERB"],
  ["beam", "cười rạng rỡ (tích cực)", "She beamed when she saw her daughter.", "VERB"],
  ["sniff at", "khinh thường, coi thường", "Don't sniff at simple solutions.", "VERB"],
  ["snort", "khịt mũi (ghê tởm hoặc cười)", "She snorted with disgust at the suggestion.", "VERB"],
  ["titter", "cười khúc khích (bối rối)", "A few people tittered at the awkward remark.", "VERB"],
  ["good manners", "phép lịch sự tốt", "We need staff with good manners.", "PHRASE"],
  ["in a friendly manner", "một cách thân thiện", "He greeted everyone in a friendly manner.", "PHRASE"],
]);

const U63_WORDS = wordList([
  ["silent", "im lặng hoàn toàn", "They asked questions but he remained silent.", "ADJECTIVE"],
  ["quiet", "yên tĩnh hoặc ít nói", "It is very quiet here at night.", "ADJECTIVE"],
  ["noiseless", "không tiếng động (trang trọng)", "He closed the door noiselessly behind him.", "ADJECTIVE"],
  ["soundless", "không âm thanh (văn học)", "The object vanished soundlessly into the night sky.", "ADJECTIVE"],
  ["slam", "đóng sầm", "The door slammed in the strong wind.", "VERB"],
  ["squeak", "kêu cót két", "My bike wheel is squeaking.", "VERB"],
  ["pound", "đập thình thịch (âm trầm)", "Rock music was pounding through the walls.", "VERB"],
  ["creak", "kêu cót két (gỗ/kim loại)", "The old wooden door creaked as I opened it.", "VERB"],
  ["sizzle", "xèo xèo (chiên)", "The sausages sizzled in the frying pan.", "VERB"],
  ["ring out", "vang lên (thường tiếng súng)", "A shot rang out and the bird fell.", "VERB"],
  ["crash", "đập ầm ầm (sóng)", "We could hear the waves crashing on the beach.", "VERB"],
  ["wail", "rít lên (còi xe)", "Police car sirens wailed all last night.", "VERB"],
  ["eerie", "rùng rợn, yên lặng đáng sợ", "There was an eerie silence in the old church.", "ADJECTIVE"],
  ["deafening", "ầm ĩ đến đau tai", "The noise of the aircraft engines was deafening.", "ADJECTIVE"],
  ["grating", "chói tai, khó chịu", "He has one of those grating voices.", "ADJECTIVE"],
  ["piercing", "chói tai, sắc", "She let out a piercing scream.", "ADJECTIVE"],
  ["high-pitched", "cao vút như còi", "Zara has a very high-pitched voice.", "ADJECTIVE"],
  ["inaudible", "không nghe được", "The recording was faint, almost inaudible.", "ADJECTIVE"],
  ["heard a pin drop", "yên tĩnh tuyệt đối", "You could have heard a pin drop.", "PHRASE"],
  ["peace and quiet", "sự yên bình sau ồn ào", "I need peace and quiet after a busy day.", "PHRASE"],
  ["quiet as a mouse", "lặng như hến", "You're as quiet as a mouse!", "PHRASE"],
]);

const U64_WORDS = wordList([
  ["weighty", "nặng nề (vật lý hoặc trừu tượng)", "They discussed weighty issues at the summit.", "ADJECTIVE"],
  ["unwieldy", "cồng kềnh, khó xử lý", "The bureaucracy is an unwieldy system.", "ADJECTIVE"],
  ["cumbersome", "cồng kềnh, rườm rà", "The process is slow and cumbersome.", "ADJECTIVE"],
  ["burdensome", "nặng nề, gánh nặng", "The new tax proved burdensome for small firms.", "ADJECTIVE"],
  ["ponderous", "nặng nề, chậm chạp (văn phong)", "The thesis was written in a ponderous style.", "ADJECTIVE"],
  ["lumbering", "lê bước nặng nề", "A lumbering truck blocked the narrow lane.", "ADJECTIVE"],
  ["weighed down", "bị đè nặng (vật lý hoặc lo âu)", "She looked tired and weighed down with problems.", "PHRASE"],
  ["weigh up", "cân nhắc, so sánh các lựa chọn", "We'll have to weigh up the alternatives.", "VERB"],
  ["weigh on", "ám ảnh, làm lo lắng", "It has been weighing on me for ages.", "VERB"],
  ["weigh in with", "chen vào với ý kiến mạnh", "Kate weighed in with some uncomfortable arguments.", "VERB"],
  ["thicken", "làm đặc hơn", "Put some flour in to thicken the soup.", "VERB"],
  ["congeal", "đông lại thành khối", "The soup has congealed in the fridge.", "VERB"],
  ["solidify", "đông cứng hoàn toàn", "The curry powder has solidified in the packet.", "VERB"],
  ["thin out", "thưa dần, loãng hơn", "As rush hour ended, traffic began to thin out.", "VERB"],
  ["dilute", "pha loãng", "This juice is strong — let's dilute it a bit.", "VERB"],
  ["impenetrable", "không thể xuyên qua", "The jungle was impenetrable.", "ADJECTIVE"],
  ["impervious to", "không bị ảnh hưởng bởi", "She is impervious to criticism.", "PHRASE"],
  ["lumpy", "vón cục, không mịn", "Sift the flour or the soup will go lumpy.", "ADJECTIVE"],
  ["sift", "rây, sàng", "You should sift the flour first.", "VERB"],
  ["water down", "pha loãng (ẩn dụ: làm yếu đi)", "They tried to water down the proposal.", "VERB"],
]);

const U65_WORDS = wordList([
  ["pitch black", "đen kịt (bóng tối, đêm)", "We couldn't see a thing in the pitch black night.", "ADJECTIVE"],
  ["jet black", "đen bóng (tóc, mắt)", "She has jet black hair.", "ADJECTIVE"],
  ["scarlet", "đỏ tươi rực", "She turned scarlet with embarrassment.", "ADJECTIVE"],
  ["crimson", "đỏ thẫm", "Crimson leaves covered the path.", "ADJECTIVE"],
  ["shocking pink", "hồng neon chói", "She wore a shocking pink dress.", "ADJECTIVE"],
  ["ginger", "cam đỏ (tóc, lông thú)", "He has ginger hair.", "ADJECTIVE"],
  ["navy", "xanh navy (quần áo)", "He wore a navy blazer.", "ADJECTIVE"],
  ["turquoise", "xanh ngọc", "The sea was a vivid turquoise.", "ADJECTIVE"],
  ["lime", "vàng xanh chanh", "Lime green walls brightened the room.", "ADJECTIVE"],
  ["beige", "be nhạt, kem nâu", "The walls were painted beige.", "ADJECTIVE"],
  ["mousy", "nâu nhạt nhạt (tóc)", "She has mousy brown hair.", "ADJECTIVE"],
  ["chestnut", "nâu hạt dẻ", "A chestnut horse stood in the field.", "ADJECTIVE"],
  ["auburn", "nâu đỏ (tóc)", "Her auburn hair caught the light.", "ADJECTIVE"],
  ["pastel", "màu pastel, nhạt", "The room was decorated in pastel shades.", "ADJECTIVE"],
  ["vivid", "rực rỡ, sống động", "Vivid colours filled the gallery.", "ADJECTIVE"],
  ["fluorescent", "phát sáng, neon", "Fluorescent colours glow in the dark.", "ADJECTIVE"],
  ["monochrome", "một màu hoặc các sắc độ một màu", "The photo was monochrome.", "ADJECTIVE"],
  ["green with envy", "ghen tị đến xanh mét", "She turned green with envy at the new car.", "PHRASE"],
  ["red-carpet treatment", "đãi tiếp VIP", "All competitors were given the red-carpet treatment.", "PHRASE"],
  ["black market", "chợ đen, buôn lậu", "Goods were sold illegally on the black market.", "PHRASE"],
  ["blue-collar", "lao động chân tay", "Blue-collar workers often face job insecurity.", "ADJECTIVE"],
  ["white-collar", "nhân viên văn phòng", "White-collar jobs dominate the city centre.", "ADJECTIVE"],
]);

const U66_WORDS = wordList([
  ["dash", "lao nhanh", "I dashed into the classroom to pick up my books.", "VERB"],
  ["dart", "lao nhanh, bất ngờ", "A dragonfly darted past.", "VERB"],
  ["whizz", "vút qua rất nhanh", "The bus whizzed past just as I arrived.", "VERB"],
  ["bolt", "bỏ chạy thục mạng", "The thieves bolted when the alarm went off.", "VERB"],
  ["career", "lao vút mất kiểm soát", "The car skidded and careered down the bank.", "VERB"],
  ["scamper", "chạy nhỏ nhảy nhanh", "Mice scampered away into the corners.", "VERB"],
  ["scurry", "chạy vội vã", "Spiders scurried into corners.", "VERB"],
  ["scuttle", "chạy nhanh lẹ (côn trùng)", "Cockroaches scuttled into a crack.", "VERB"],
  ["accelerate", "tăng tốc", "The company's growth has accelerated since exporting.", "VERB"],
  ["speed up", "đi nhanh hơn", "We'd better speed up if we're going to get there.", "VERB"],
  ["plunge", "lao xuống hoặc lao vào (ẩn dụ)", "After his father's death he was plunged into despair.", "VERB"],
  ["plummet", "lao dốc, giảm mạnh", "Share prices plummeted on the stock market.", "VERB"],
  ["rocket", "tăng vọt", "Export sales rocketed last quarter.", "VERB"],
  ["soar", "bay vút, tăng vọt (ẩn dụ)", "My heart soared when I heard he was coming home.", "VERB"],
  ["slump", "sụt giảm mạnh", "Share prices slumped yesterday.", "VERB"],
  ["tumble", "lao dốc, sụt mạnh", "Telecom companies tumbled most dramatically.", "VERB"],
  ["crawl", "bò chậm (giao thông)", "Traffic was crawling along at rush hour.", "VERB"],
  ["creep", "tăng dần chậm", "Prices have been creeping up since May.", "VERB"],
  ["totter", "lảo đảo chậm, không vững", "Mina tottered down the road laden with bags.", "VERB"],
  ["sidle", "rón rén lại gần", "Sam sidled up to the boss's desk.", "VERB"],
  ["dawdle", "lề mề, đi chậm", "Don't dawdle on the way home.", "VERB"],
  ["nip", "ghé nhanh", "I nipped into a nearby shop for water.", "VERB"],
]);

const U67_WORDS = wordList([
  ["cause", "gây ra (thường tiêu cực)", "The new system has caused us a lot of problems.", "VERB"],
  ["produce", "tạo ra (trung tính, trang trọng)", "Scientists can produce statistics to prove almost anything.", "VERB"],
  ["generate", "tạo ra (công việc, doanh thu, tranh cãi)", "It is difficult to generate sufficient interest.", "VERB"],
  ["provoke", "gây ra (cảm xúc, phản ứng)", "The news provoked a feeling of despair.", "VERB"],
  ["precipitate", "châm ngòi, gây đột ngột", "The events precipitated a political crisis.", "VERB"],
  ["spark", "châm ngòi nhanh", "The scandal sparked a political crisis.", "VERB"],
  ["bring about", "mang lại dần dần", "The invention brought about great changes.", "VERB"],
  ["result in", "dẫn đến kết quả", "Your action has resulted in a formal complaint.", "VERB"],
  ["stem from", "bắt nguồn từ", "His problems stem from his difficult childhood.", "VERB"],
  ["grounds", "căn cứ, lý do", "Have you any grounds for suspecting him?", "NOUN"],
  ["implications", "hệ quả có thể xảy ra", "The proposal has implications for traffic.", "NOUN"],
  ["based on", "dựa trên", "My argument is based on the available data.", "PHRASE"],
  ["give trouble", "gây rắc rối", "This car is giving me so much trouble.", "PHRASE"],
  ["generate revenue", "tạo doanh thu", "The project must generate revenue quickly.", "PHRASE"],
  ["generate controversy", "gây tranh cãi", "The policy generated controversy nationwide.", "PHRASE"],
  ["cause a disaster", "gây thảm họa", "Neglect can cause a disaster in production.", "PHRASE"],
  ["good results", "kết quả tốt", "Cooking slowly produces the best results.", "PHRASE"],
  ["exposure to", "tiếp xúc với (nguyên nhân)", "His cancer was caused by exposure to radiation.", "PHRASE"],
  ["formal context", "ngữ cảnh trang trọng", "Generate and produce appear in formal reports.", "PHRASE"],
  ["intervention", "sự can thiệp của con người", "Generate usually suggests human intervention.", "NOUN"],
]);

const U68_WORDS = wordList([
  ["cultural affinity", "sự gần gũi văn hóa", "I feel a cultural affinity between London and New York.", "PHRASE"],
  ["akin to", "tương tự về tinh thần", "Her singing is more akin to Rihanna than Adele.", "PHRASE"],
  ["sporting analogy", "ẩn dụ thể thao", "Middle age is like half-time at a football match.", "PHRASE"],
  ["correspond to", "khớp với, tương ứng", "The picture does not correspond to the truth.", "PHRASE"],
  ["equate with", "coi là tương đương", "Don't equate price with true value.", "PHRASE"],
  ["tantamount to", "tương đương với (thường tiêu cực)", "To apologise would be tantamount to admitting failure.", "PHRASE"],
  ["interchangeable", "có thể thay thế cho nhau", "The goals of both sides have become almost interchangeable.", "ADJECTIVE"],
  ["indistinguishable", "không phân biệt được", "Her house was indistinguishable from the others.", "ADJECTIVE"],
  ["diverse", "đa dạng", "Diverse ethnic groups give the country cultural richness.", "ADJECTIVE"],
  ["disparate", "khác biệt rõ rệt trong cùng nhóm", "Disparate regions of Spain have unique customs.", "ADJECTIVE"],
  ["dissimilar", "không giống nhau", "This house is not dissimilar to the one I was born in.", "ADJECTIVE"],
  ["divergent", "trái chiều, khác hẳn", "They have widely divergent opinions.", "ADJECTIVE"],
  ["distinct", "khác biệt rõ", "Swedish and Norwegian are quite distinct.", "ADJECTIVE"],
  ["distinctive", "dễ nhận ra vì khác biệt", "Our car has a distinctive colour.", "ADJECTIVE"],
  ["discrete", "riêng biệt, không chồng lấn", "There are several discrete categories of verbs.", "ADJECTIVE"],
  ["comparable", "có thể so sánh", "The two girls are a comparable size.", "ADJECTIVE"],
  ["comparative", "so sánh tương đối", "We enjoyed comparative freedom on the trip.", "ADJECTIVE"],
  ["differentiate", "phân biệt", "It is hard to differentiate the two brands.", "VERB"],
  ["distinguish", "nhận ra sự khác biệt", "Can you distinguish fact from opinion?", "VERB"],
  ["diverge", "đi theo hướng khác", "Their views began to diverge over time.", "VERB"],
  ["diversify", "đa dạng hóa", "The firm decided to diversify its products.", "VERB"],
]);

const U69_WORDS = wordList([
  ["snag", "trở ngại nhỏ", "We hit a snag with the delivery date.", "NOUN"],
  ["hitch", "trục trặc nhỏ", "The plan went off without a hitch.", "NOUN"],
  ["glitch", "lỗi kỹ thuật", "A software glitch delayed the launch.", "NOUN"],
  ["setback", "thất bại làm chậm tiến độ", "The injury was a major setback.", "NOUN"],
  ["stumbling block", "vật cản ngăn thỏa thuận", "Price remains a stumbling block.", "NOUN"],
  ["pitfall", "cạm bẫy bất ngờ", "Watch out for the pitfalls of online banking.", "NOUN"],
  ["obstacle", "chướng ngại vật", "Lack of funding is the main obstacle.", "NOUN"],
  ["impediment", "trở ngại cản trở tiến triển", "The visa was an impediment to travel.", "NOUN"],
  ["dilemma", "thế lưỡng nan", "She faced a dilemma between job and family.", "NOUN"],
  ["ordeal", "thử thách cực khổ", "The interview was a real ordeal.", "NOUN"],
  ["problematic", "đầy rắc rối", "The relationship became problematic.", "ADJECTIVE"],
  ["abstruse", "khó hiểu, huyền ẩn", "The theory is too abstruse for beginners.", "ADJECTIVE"],
  ["arduous", "gian khổ, mệt nhọc", "It was an arduous climb to the summit.", "ADJECTIVE"],
  ["convoluted", "rắc rối, dài dòng", "His explanation was convoluted.", "ADJECTIVE"],
  ["gruelling", "kiệt sức", "They finished a gruelling expedition.", "ADJECTIVE"],
  ["insufferable", "khó chịu không chịu nổi", "The heat was insufferable.", "ADJECTIVE"],
  ["obstructive", "cố tình cản trở", "He was obstructive throughout the meeting.", "ADJECTIVE"],
  ["traumatic", "gây sốc, tổn thương", "She had a traumatic childhood.", "ADJECTIVE"],
  ["a pain", "phiền phức (informal)", "More homework? What a pain!", "PHRASE"],
  ["hassle", "rắc rối, phiền hà", "I can't face the hassle of moving again.", "NOUN"],
  ["sticky situation", "tình huống khó xử", "The company is in a sticky situation.", "PHRASE"],
  ["off the hook", "thoát khỏi rắc rối", "I think I'm off the hook now.", "PHRASE"],
  ["downside", "mặt trái, bất lợi", "The downside of living here is the traffic.", "NOUN"],
]);

const U70_WORDS = wordList([
  ["must be joking", "đùa chứ", "You want £1,000? You must be joking!", "PHRASE"],
  ["might well", "rất có thể", "You might well be offered the job.", "PHRASE"],
  ["should be so lucky", "ước gì được thế (không có hy vọng)", "I should be so lucky!", "PHRASE"],
  ["bound to", "chắc chắn sẽ", "They are bound to get married in the end.", "PHRASE"],
  ["unquestionably", "không nghi ngờ gì", "She is unquestionably the best student.", "ADVERB"],
  ["apparent", "rõ ràng, hiển nhiên", "It was apparent that negotiations were going badly.", "ADJECTIVE"],
  ["for sure", "chắc chắn", "She'll be here by five o'clock, for sure.", "PHRASE"],
  ["in all probability", "rất có khả năng", "In all probability we'll finish on time.", "PHRASE"],
  ["the chances are", "khả năng cao là", "The chances are you won't succeed on that diet.", "PHRASE"],
  ["every likelihood", "rất có thể", "There's every likelihood that petrol will rise.", "PHRASE"],
  ["the odds are", "khả năng cao", "The odds are he'll get the job.", "PHRASE"],
  ["obligatory", "bắt buộc", "Wearing a helmet is obligatory here.", "ADJECTIVE"],
  ["compulsory", "bắt buộc (môn học, quy định)", "Maths and English are compulsory.", "ADJECTIVE"],
  ["optional", "tùy chọn", "Some courses are optional.", "ADJECTIVE"],
  ["no option but to", "không còn cách nào khác", "We had no option but to turn back.", "PHRASE"],
  ["determined to", "quyết tâm", "I am determined to do whatever I can to help.", "PHRASE"],
  ["yearn to", "khao khát (trang trọng)", "He yearns to return home.", "VERB"],
  ["aspirations", "khát vọng", "She has aspirations to become Prime Minister.", "NOUN"],
  ["accidents will happen", "tai nạn là điều không tránh khỏi", "Don't worry — accidents will happen!", "PHRASE"],
  ["must admit", "phải thừa nhận", "I must admit I didn't enjoy the film.", "PHRASE"],
  ["essential that", "cực kỳ cần thiết", "It is essential that you take strong footwear.", "PHRASE"],
  ["obligation to", "nghĩa vụ", "We have an obligation to preserve the school's good name.", "PHRASE"],
]);

const U71_WORDS = wordList([
  ["twofold", "gấp đôi", "Internet use increased twofold in five years.", "ADJECTIVE"],
  ["quadruple", "tăng gấp bốn", "Use quadrupled in China over the period.", "VERB"],
  ["by a factor of", "gấp bao nhiêu lần", "Use grew by a factor of three.", "PHRASE"],
  ["drastic", "đột ngột và mạnh", "Drastic changes in interest rates hurt borrowers.", "ADJECTIVE"],
  ["threefold", "gấp ba", "There was a threefold increase in defaults.", "ADJECTIVE"],
  ["revise upwards", "điều chỉnh tăng (ước tính)", "The star count was revised upwards.", "PHRASE"],
  ["deviate from the norm", "lệch khỏi chuẩn", "Weather patterns deviated from the norm.", "PHRASE"],
  ["fluctuate", "dao động lên xuống", "Sales fluctuate from month to month.", "VERB"],
  ["seesaw", "lên xuống đều đặn", "Interest rates have seesawed all year.", "VERB"],
  ["erratic", "bất ổn, thất thường", "Share prices have been erratic this month.", "ADJECTIVE"],
  ["aggregate", "tổng cộng", "The aggregate was £600,000.", "NOUN"],
  ["blip", "biến động tạm thời", "The rise in inflation was only a blip.", "NOUN"],
  ["correlation", "mối tương quan", "There is a correlation between maths and music.", "NOUN"],
  ["discrepancy", "sự chênh lệch", "There's a discrepancy between our figures.", "NOUN"],
  ["ratio", "tỷ lệ", "The ratio of men to women was 3 to 1.", "NOUN"],
  ["flawed", "sai sót, không chính xác", "The company's figures were flawed.", "ADJECTIVE"],
  ["inconsistent", "không nhất quán", "Our data are inconsistent with yours.", "ADJECTIVE"],
  ["ballpark figure", "con số ước lượng sơ bộ", "Let me give you a ballpark figure.", "PHRASE"],
  ["tot up", "cộng lại", "If I tot everything up, we run into six figures.", "VERB"],
  ["six figures", "sáu chữ số (100.000+)", "Revenue could run into six figures.", "PHRASE"],
  ["err on the side of caution", "thận trọng hơn cần thiết", "I've erred on the side of caution.", "PHRASE"],
  ["conservative estimate", "ước tính thận trọng", "I gave you a conservative estimate.", "PHRASE"],
]);

const U72_WORDS = wordList([
  ["accede", "chấp thuận (thường sau do dự)", "The owner acceded to the workers' demands.", "VERB"],
  ["acquiesce", "mặc nhiên đồng ý", "The minister acquiesced in the plan.", "VERB"],
  ["assent", "đồng ý (đề xuất, kế hoạch)", "Shareholders assented to the takeover.", "VERB"],
  ["authorise", "cho phép chính thức", "Only authorised people are allowed entry.", "VERB"],
  ["condone", "bỏ qua, chấp nhận điều sai", "The judge condoned reasonable force.", "VERB"],
  ["countenance", "chấp nhận (thường phủ định)", "No government would countenance abolishing taxes.", "VERB"],
  ["endorse", "phê duyệt chính thức", "The cabinet has endorsed the proposal.", "VERB"],
  ["carte blanche", "toàn quyền hành động", "The committee were given carte blanche.", "PHRASE"],
  ["go-ahead", "sự cho phép bắt đầu", "The city gave the go-ahead for the car park.", "NOUN"],
  ["green light", "đèn xanh, được phép", "They gave the green light to the project.", "PHRASE"],
  ["bar", "cấm, đuổi", "Three students were barred from the library.", "VERB"],
  ["clamp down", "trấn áp, siết chặt", "The government clamped down on illegal immigration.", "VERB"],
  ["outlaw", "cấm bằng luật", "Parliament outlawed smoking while driving.", "VERB"],
  ["veto", "phủ quyết", "The President vetoed the plan.", "VERB"],
  ["regardless", "bất chấp", "She went to the party regardless.", "ADVERB"],
  ["regardless of", "bất kể", "They built regardless of planning permission.", "PHRASE"],
  ["formal permission", "sự cho phép trang trọng", "These verbs appear in formal permission contexts.", "PHRASE"],
  ["initial unwillingness", "ban đầu không muốn", "Accede often implies initial unwillingness.", "PHRASE"],
  ["official approval", "sự phê duyệt chính thức", "Endorse signals official approval.", "PHRASE"],
  ["forbid access", "cấm tiếp cận", "Bar officially excludes someone from access.", "PHRASE"],
]);

const U73_WORDS = wordList([
  ["fed up with", "chán ngấy", "I'm fed up with all your moaning.", "PHRASE"],
  ["not on", "không thể chấp nhận (informal)", "This is just not on!", "PHRASE"],
  ["enough is enough", "đủ rồi", "Enough is enough — no more arguments!", "PHRASE"],
  ["take exception to", "phản đối mạnh", "I take great exception to your comments.", "PHRASE"],
  ["object to", "phản đối", "I must object to being made to wait.", "VERB"],
  ["unacceptable", "không thể chấp nhận", "This delay is simply unacceptable.", "ADJECTIVE"],
  ["shameful", "đáng xấu hổ", "Leaving children in the rain was shameful.", "ADJECTIVE"],
  ["complaint", "lời phàn nàn", "I wish to lodge a complaint.", "NOUN"],
  ["protest", "phản đối mạnh", "Workers protested about pay cuts.", "VERB"],
  ["remonstrate", "phản đối (trang trọng)", "She remonstrated with the manager.", "VERB"],
  ["fault-finding", "hay bắt lỗi", "He is always fault-finding.", "NOUN"],
  ["grumble", "càu nhàu", "Stop grumbling about the weather.", "VERB"],
  ["gripe", "càu nhàu liên tục (informal)", "People gripe about the service.", "VERB"],
  ["grouse", "than phiền (informal)", "He groused about the food.", "VERB"],
  ["whinge", "than vãn dai dẳng (informal)", "Don't whinge about homework.", "VERB"],
  ["moaning", "than vãn", "I'm sick of your moaning and grumbling.", "NOUN"],
  ["won't do", "không được phép", "It just won't do — change your ways.", "PHRASE"],
  ["most unsatisfactory", "rất không hài lòng (formal)", "The service is most unsatisfactory.", "PHRASE"],
  ["sheer torture", "cực kỳ khó chịu (ẩn dụ)", "Listening to him sing is sheer torture!", "PHRASE"],
  ["in a fix", "lâm vào thế khó", "We're in a fix without funding.", "PHRASE"],
  ["up against it", "gặp khó khăn lớn", "The team is up against it this week.", "PHRASE"],
  ["tricky situation", "tình huống khó", "It's a tricky situation now workers will strike.", "PHRASE"],
]);

const U74_WORDS = wordList([
  ["heartfelt apology", "lời xin lỗi chân thành", "He offered his most heartfelt apology.", "PHRASE"],
  ["lame excuse", "lý do yếu ớt", "It was a rather lame excuse.", "PHRASE"],
  ["phoney", "giả mạo", "The suspect's explanation was phoney.", "ADJECTIVE"],
  ["cast-iron alibi", "chứng cớ ngoại phạm vững chắc", "She had a cast-iron alibi.", "PHRASE"],
  ["flimsy pretext", "cái cớ mong manh", "He got an interview on a flimsy pretext.", "PHRASE"],
  ["remorse", "hối hận", "He showed no remorse whatsoever.", "NOUN"],
  ["acquitted", "được tuyên trắng án", "His companions were acquitted of the crime.", "VERB"],
  ["repented", "ăn năn", "Mosley repented whilst in prison.", "VERB"],
  ["exonerated", "được minh oan", "The minister was exonerated from all blame.", "VERB"],
  ["reprieve", "ân xá, hoãn hình phạt", "He received a last-minute reprieve.", "NOUN"],
  ["forgive and forget", "tha thứ và quên đi", "Victims find it hard to forgive and forget.", "PHRASE"],
  ["treaty", "hiệp ước", "The two nations signed a peace treaty.", "NOUN"],
  ["armistice", "đình chiến", "The generals declared an armistice.", "NOUN"],
  ["truce", "ngừng bắn tạm thời", "The politicians called a truce.", "NOUN"],
  ["accord", "thỏa thuận chính thức", "A period of accord may collapse.", "NOUN"],
  ["ceasefire", "ngừng bắn để đàm phán", "Both sides agreed to a ceasefire.", "NOUN"],
  ["posthumous pardon", "ân xá sau khi chết", "The President issued a posthumous pardon.", "PHRASE"],
  ["sincere apology", "lời xin lỗi chân thành", "A sincere apology can repair trust.", "PHRASE"],
  ["weak excuse", "lý do yếu", "Nobody believed his weak excuse.", "PHRASE"],
  ["reconciliation", "hòa giải", "Peace and reconciliation take time.", "NOUN"],
  ["official forgiveness", "sự tha thứ chính thức", "A pardon is official forgiveness.", "PHRASE"],
  ["free of blame", "không còn bị đổ lỗi", "Exonerated means declared free of blame.", "PHRASE"],
]);

const U75_WORDS = wordList([
  ["pay compliments", "khen ngợi", "She should pay her staff compliments occasionally.", "PHRASE"],
  ["fishing for compliments", "câu lời khen", "He was fishing for compliments about his suit.", "PHRASE"],
  ["back-handed compliment", "lời khen mỉa mai", "I took it as a back-handed compliment.", "PHRASE"],
  ["double-edged compliment", "lời khen hai lưỡi", "She paid me a double-edged compliment.", "PHRASE"],
  ["praiseworthy", "đáng khen", "Her effort was truly praiseworthy.", "ADJECTIVE"],
  ["praised to the skies", "khen lên tận mây xanh", "The film was praised to the skies.", "PHRASE"],
  ["damn with faint praise", "khen nửa vời để chê", "Don't damn him with faint praise.", "PHRASE"],
  ["pay tribute to", "tôn vinh (trang trọng)", "I paid tribute to his kindness.", "PHRASE"],
  ["standing ovation", "vỗ tay đứng", "The audience gave a standing ovation.", "PHRASE"],
  ["extol the virtues of", "ca ngợi hết lời", "The PM extolled the virtues of the treaty.", "PHRASE"],
  ["toast of", "người được ngưỡng mộ", "She is the toast of Hollywood.", "PHRASE"],
  ["pat on the back", "khen, động viên", "My teacher gave me a pat on the back.", "PHRASE"],
  ["plaudits", "lời khen ngợi (trang trọng)", "The exhibition earned plaudits from reviewers.", "NOUN"],
  ["laud", "ca ngợi (trang trọng)", "The PM lauded the peace initiative.", "VERB"],
  ["flatter", "nịnh bợ hoặc tôn lên vẻ đẹp", "That dress flatters her figure.", "VERB"],
  ["suck up to", "nịnh hót (informal)", "He is always sucking up to the boss.", "VERB"],
  ["smarmy", "nịnh nọt đáng ghét (informal)", "A smarmy salesman called again.", "ADJECTIVE"],
  ["obsequious", "khúm núm, nịnh (trang trọng)", "Obsequious staff irritate customers.", "ADJECTIVE"],
  ["Flattery will get you nowhere", "nịnh nọt không có ích", "Flattery will get you nowhere!", "PHRASE"],
  ["compliment on", "khen về điều gì", "He complimented me on my guitar playing.", "PHRASE"],
  ["laudable", "đáng khen (hành vi)", "Her dedication is laudable.", "ADJECTIVE"],
  ["laudatory", "mang tính ca ngợi (lời nói)", "Laudatory remarks filled the press.", "ADJECTIVE"],
]);

export const EVIU_ADVANCED_UNITS_61_75: readonly VocabularyUnit[] = [
  advancedUnit(61, {
    introVi:
      "Unit 61 mở rộng động từ chuyển động theo kiểu đi bộ và ẩn dụ tiến triển: từ limp, stagger đến crowds flow/spill out. Bạn học phân biệt sắc thái (stride vs strut) và cụm take in your stride.",
    structureSections: [
      { label: "Verbs of movement", wordCount: 12 },
      { label: "Metaphorical motion", wordCount: 5 },
      { label: "Crowds and steps", wordCount: 5 },
    ],
    collocationHtml: `${purple("in her stride")}, ${purple("trample on")}, ${purple("staggeringly well")} và ${purple("pour into")} là cụm then chốt khi nói về chuyển động thực tế lẫn ẩn dụ.`,
    mistakeHtml: `Ẩn dụ dùng ${bold("take a decisive step")}, không phải ${bold("footstep")}. ${bold("Stagger")} = loạng choạng; ${bold("staggeringly")} = đáng kinh ngạc — hai nghĩa khác nhau.`,
    principles: [
      {
        title: "Động từ mô tả cách đi",
        body: `${purple("limp")} (một chân đau), ${purple("hop")} (một chân hoặc xuống xe), ${purple("stagger")}/${purple("stumble")}/${purple("lurch")} (không vững). ${purple("amble")} thong thả; ${purple("stride")} bước dài mục đích; ${purple("strut")} ưng bướng.`,
        examples: [
          ex("He limped home after twisting his ankle.", "Anh ấy khập khiểng về nhà sau khi bong gân."),
          ex("She strutted across the stage confidently.", "Cô ấy ưng bướng bước qua sân khấu."),
        ],
      },
      {
        title: "Ẩn dụ chuyển động và tiến triển",
        body: `Business có thể ${purple("stagger on")} rồi sụp. ${purple("Lurch from crisis to crisis")} nhấn mạnh bất ổn. ${purple("Take in your stride")} = đón nhận bình tĩnh; ${purple("trample on dreams")} = giẫm đạp ước mơ.`,
        examples: [
          ex("Maria takes everything in her stride.", "Maria đón nhận mọi thứ một cách bình tĩnh."),
          ex("Lisa did staggeringly well in her exams.", "Lisa thi xuất sắc đáng kinh ngạc."),
        ],
      },
      {
        title: "Đám đông và bước tiến (ẩn dụ)",
        body: `Đám đông ${purple("flow")}, ${purple("spill out")}, ${purple("stream into")}, ${purple("pour into")}. ${purple("Meander")} lang thang; ${purple("flood across")} tràn qua biên giới. ${purple("Decisive step")} và ${purple("unprecedented")} dùng cho quyết định lớn.`,
        examples: [
          ex("Children spilled out into the playground.", "Trẻ trào ra sân chơi."),
          ex("Refugees flooded across the border.", "Người tị nạn tràn qua biên giới."),
        ],
      },
    ],
    words: U61_WORDS,
    exercises: [
      fillBlank(
        61,
        1,
        "Parents should try not to ____ on children's dreams.",
        "trample",
        [
          { key: "a", label: "trample" },
          { key: "b", label: "amble" },
          { key: "c", label: "tiptoe" },
          { key: "d", label: "meander" },
        ],
        "a",
      ),
      mcq(
        61,
        2,
        "\"Take in her stride\" nghĩa là gì?",
        [
          { key: "a", label: "Đón nhận bình tĩnh" },
          { key: "b", label: "Đi bước dài" },
          { key: "c", label: "Chạy trốn" },
          { key: "d", label: "Vấp ngã" },
        ],
        "a",
      ),
      fillBlank(
        61,
        3,
        "The government has ____ from one economic crisis to the next.",
        "lurched",
        [
          { key: "a", label: "lurched" },
          { key: "b", label: "ambled" },
          { key: "c", label: "tiptoed" },
          { key: "d", label: "meandered" },
        ],
        "a",
      ),
      mcq(
        61,
        4,
        "Động từ nào mô tả đi ưng bướng, ngực ưỡn?",
        [
          { key: "a", label: "strut" },
          { key: "b", label: "limp" },
          { key: "c", label: "trudge" },
          { key: "d", label: "stumble" },
        ],
        "a",
      ),
      fillBlank(
        61,
        5,
        "People ____ into the lecture hall until there was standing room only.",
        "streamed",
        [
          { key: "a", label: "streamed" },
          { key: "b", label: "trampled" },
          { key: "c", label: "staggered" },
          { key: "d", label: "chased" },
        ],
        "a",
      ),
      mcq(
        61,
        6,
        "\"Staggeringly well\" mô tả kết quả như thế nào?",
        [
          { key: "a", label: "Xuất sắc đáng kinh ngạc" },
          { key: "b", label: "Loạng choạng vì mệt" },
          { key: "c", label: "Trung bình" },
          { key: "d", label: "Thất bại hoàn toàn" },
        ],
        "a",
      ),
    ],
  }),

  advancedUnit(62, {
    introVi:
      "Unit 62 kết hợp phép lịch sự xã hội (courtesy, etiquette, netiquette) với ngôn ngữ cơ thể (smirk, beam, flinch). Bạn học phân biệt mức độ từ discourteous đến insolent và đọc tín hiệu phi ngôn ngữ.",
    structureSections: [
      { label: "Manners and etiquette", wordCount: 11 },
      { label: "Body language verbs", wordCount: 9 },
      { label: "Usage notes", wordCount: 2 },
    ],
    collocationHtml: `${purple("stand on ceremony")}, ${purple("the done thing")}, ${purple("raise eyebrows")} và ${purple("good manners")} xuất hiện thường xuyên khi bàn về cách cư xử.`,
    mistakeHtml: `${bold("Manners")} (số nhiều) = phép lịch sự; ${bold("manner")} (số ít) = cách làm (in a friendly manner). ${bold("Insolent")} mạnh hơn ${bold("discourteous")}.`,
    principles: [
      {
        title: "Lịch sự và quy tắc xã hội",
        body: `${purple("Courtesy")} và ${purple("courteous")} tích cực; ${purple("discourteous")} và ${purple("insolent")} tiêu cực (insolent mạnh hơn). ${purple("Etiquette")} là quy tắc tình huống; ${purple("netiquette")} trên mạng.`,
        examples: [
          ex("Courtesy is still important nowadays.", "Sự lịch sự vẫn quan trọng ngày nay."),
          ex("Always follow netiquette online.", "Luôn tuân thủ netiquette trên mạng."),
        ],
      },
      {
        title: "Cách cư xử trang trọng hay cổ hủ",
        body: `${purple("Stand on ceremony")} = quá trang trọng. ${purple("Straitlaced")} = đạo đức cứng. ${purple("The done thing")} = điều được chấp nhận. ${purple("Offhand")} = lạnh nhạt vì vội.`,
        examples: [
          ex("There's no need to stand on ceremony.", "Không cần cư xử quá trang trọng."),
          ex("I hope I didn't appear offhand with her.", "Tôi hy vọng không tỏ ra lạnh nhạt với cô ấy."),
        ],
      },
      {
        title: "Ngôn ngữ cơ thể",
        body: `${purple("Beam")} (cười rạng rỡ) tích cực; ${purple("smirk")} (cười khẩy) tiêu cực. ${purple("Flinch")} giật mình; ${purple("squirm")} quằn vì xấu hổ; ${purple("titter")} cười khúc khích bối rối.`,
        examples: [
          ex("She beamed when she saw her daughter.", "Cô ấy cười rạng rỡ khi thấy con gái."),
          ex("He smirked at the suggestion.", "Anh ấy cười khẩy trước đề xuất đó."),
        ],
      },
    ],
    words: U62_WORDS,
    exercises: [
      fillBlank(
        62,
        1,
        "Asking for more food at a formal dinner is not ____.",
        "the done thing",
        [
          { key: "a", label: "the done thing" },
          { key: "b", label: "netiquette" },
          { key: "c", label: "courtesy" },
          { key: "d", label: "etiquette" },
        ],
        "a",
      ),
      mcq(
        62,
        2,
        "Từ nào mạnh nhất, gần nghĩa \"hỗn láo\"?",
        [
          { key: "a", label: "insolent" },
          { key: "b", label: "courteous" },
          { key: "c", label: "offhand" },
          { key: "d", label: "straitlaced" },
        ],
        "a",
      ),
      fillBlank(
        62,
        3,
        "When taking part online, always follow ____.",
        "netiquette",
        [
          { key: "a", label: "netiquette" },
          { key: "b", label: "snort" },
          { key: "c", label: "titter" },
          { key: "d", label: "squirm" },
        ],
        "a",
      ),
      mcq(
        62,
        4,
        "\"Beam\" và \"smirk\" khác nhau thế nào?",
        [
          { key: "a", label: "Beam tích cực; smirk tiêu cực/tự mãn" },
          { key: "b", label: "Cả hai đều nghĩa giận dữ" },
          { key: "c", label: "Smirk là cười rạng rỡ" },
          { key: "d", label: "Beam nghĩa khinh thường" },
        ],
        "a",
      ),
      fillBlank(
        62,
        5,
        "His rude remarks ____ a few eyebrows.",
        "raised",
        [
          { key: "a", label: "raised" },
          { key: "b", label: "flinched" },
          { key: "c", label: "squirmed" },
          { key: "d", label: "snorted" },
        ],
        "a",
      ),
      {
        type: "match",
        id: "ex-62-match-6",
        instruction: "Ghép cụm lịch sự với nghĩa tiếng Việt",
        pairs: [
          { left: "stand on ceremony", right: "cư xử quá trang trọng" },
          { left: "straitlaced", right: "cổ hủ, đạo đức cứng nhắc" },
          { left: "discourteous", right: "bất lịch sự" },
          { left: "good manners", right: "phép lịch sự tốt" },
          { left: "etiquette", right: "quy tắc ứng xử xã hội" },
        ],
      },
    ],
  }),

  advancedUnit(63, {
    introVi:
      "Unit 63 tập trung âm thanh và sự im lặng: từ silent/quiet đến động từ mô tả tiếng động (creak, sizzle, wail) và tính từ sắc thái (deafening, grating). Bạn học collocation và idiom như heard a pin drop.",
    structureSections: [
      { label: "Silence adjectives", wordCount: 4 },
      { label: "Noise verbs", wordCount: 8 },
      { label: "Describing noise and idioms", wordCount: 9 },
    ],
    collocationHtml: `${purple("deafening noise")}, ${purple("piercing scream")}, ${purple("peace and quiet")} và ${purple("quiet as a mouse")} là cụm hay gặp khi mô tả âm thanh.`,
    mistakeHtml: `${bold("Silent")} nhấn mạnh không nói/không tiếng; ${bold("quiet")} rộng hơn (ít ồn, ít hoạt động, ít nói). ${bold("Noiseless")}/${bold("soundless")} thường dùng trang trọng/văn học.`,
    principles: [
      {
        title: "Im lặng và yên tĩnh",
        body: `${purple("Silent")} = hoàn toàn im; ${purple("quiet")} = ít ồn hoặc ít nói. ${purple("Noiseless")} và ${purple("soundless")} trang trọng hơn, thường làm trạng từ (noiselessly).`,
        examples: [
          ex("He remained silent throughout the interview.", "Anh ấy im lặng suốt buổi phỏng vấn."),
          ex("He closed the door noiselessly.", "Anh ấy đóng cửa không một tiếng động."),
        ],
      },
      {
        title: "Động từ mô tả tiếng cụ thể",
        body: `${purple("Slam")} (sầm), ${purple("squeak")} (cót két), ${purple("pound")} (đập thình thịch), ${purple("creak")} (gỗ/kim loại), ${purple("sizzle")} (chiên), ${purple("ring out")} (tiếng súng), ${purple("wail")} (còi).`,
        examples: [
          ex("The door slammed in the strong wind.", "Cửa đóng sầm trong gió mạnh."),
          ex("Police sirens wailed all night.", "Còi xe cảnh sát rít suốt đêm."),
        ],
      },
      {
        title: "Tính từ và thành ngữ",
        body: `${purple("Eerie silence")} đáng sợ; ${purple("deafening")} đau tai; ${purple("grating")}/${purple("piercing")} khó chịu. ${purple("Heard a pin drop")} = yên tĩnh tuyệt đối; ${purple("peace and quiet")} sau ngày bận.`,
        examples: [
          ex("You could have heard a pin drop.", "Yên tĩnh đến mức nghe tiếng kim rơi."),
          ex("I need peace and quiet after work.", "Tôi cần yên bình sau ngày làm việc."),
        ],
      },
    ],
    words: U63_WORDS,
    exercises: [
      fillBlank(
        63,
        1,
        "The old wooden door ____ as I opened it.",
        "creaked",
        [
          { key: "a", label: "creaked" },
          { key: "b", label: "sizzled" },
          { key: "c", label: "wailed" },
          { key: "d", label: "pounded" },
        ],
        "a",
      ),
      mcq(
        63,
        2,
        "\"Deafening\" mô tả âm thanh như thế nào?",
        [
          { key: "a", label: "Cực kỳ to, đau tai" },
          { key: "b", label: "Không nghe được" },
          { key: "c", label: "Yên tĩnh đáng sợ" },
          { key: "d", label: "Cao vút như còi" },
        ],
        "a",
      ),
      fillBlank(
        63,
        3,
        "After the shock, you could have ____.",
        "heard a pin drop",
        [
          { key: "a", label: "heard a pin drop" },
          { key: "b", label: "peace and quiet" },
          { key: "c", label: "ring out" },
          { key: "d", label: "soundless" },
        ],
        "a",
      ),
      mcq(
        63,
        4,
        "Tiếng chiên trong chảo gọi là gì?",
        [
          { key: "a", label: "sizzle" },
          { key: "b", label: "slam" },
          { key: "c", label: "crash" },
          { key: "d", label: "squeak" },
        ],
        "a",
      ),
      fillBlank(
        63,
        5,
        "He has one of those ____ voices that gets on my nerves.",
        "grating",
        [
          { key: "a", label: "grating" },
          { key: "b", label: "quiet" },
          { key: "c", label: "silent" },
          { key: "d", label: "eerie" },
        ],
        "a",
      ),
      mcq(
        63,
        6,
        "\"Quiet as a mouse\" nghĩa là gì?",
        [
          { key: "a", label: "Rất yên lặng" },
          { key: "b", label: "Hay càu nhàu" },
          { key: "c", label: "Ồn ào" },
          { key: "d", label: "Sợ hãi" },
        ],
        "a",
      ),
    ],
  }),

  advancedUnit(64, {
    introVi:
      "Unit 64 mở rộng từ đồng nghĩa heavy (weighty, unwieldy, ponderous) và cụm động từ weigh (weigh up, weigh on). Bạn cũng học động từ mật độ: thicken, congeal, thin out, dilute.",
    structureSections: [
      { label: "Synonyms for heavy", wordCount: 6 },
      { label: "Phrasal verbs with weigh", wordCount: 4 },
      { label: "Density and thickness", wordCount: 10 },
    ],
    collocationHtml: `${purple("weighty issues")}, ${purple("weighed down with problems")}, ${purple("weigh up alternatives")} và ${purple("thin out")} là cụm thường gặp ở cả nghĩa đen lẫn ẩn dụ.`,
    mistakeHtml: `${bold("Weighty")} thường kèm ý nghiêm trọng; ${bold("unwieldy")} nhấn mạnh khó xử lý. ${bold("Ponderous")} hay dùng cho văn phong nặng nề, không chỉ vật nặng.`,
    principles: [
      {
        title: "Tính từ thay cho heavy",
        body: `${purple("Weighty")} (nghiêm trọng), ${purple("unwieldy")} (cồng kềnh), ${purple("cumbersome")} (rườm rà), ${purple("burdensome")} (gánh nặng), ${purple("ponderous")} (nặng nề, chậm), ${purple("lumbering")} (di chuyển nặng nề).`,
        examples: [
          ex("They discussed weighty issues at the summit.", "Họ thảo luận các vấn đề nặng ký tại hội nghị."),
          ex("A lumbering truck blocked the lane.", "Chiếc xe tải nặng nề chặn con hẻm."),
        ],
      },
      {
        title: "Cụm động từ weigh",
        body: `${purple("Weighed down")} = bị đè nặng (hành lý hoặc lo âu). ${purple("Weigh up")} = cân nhắc. ${purple("Weigh on")} = ám ảnh. ${purple("Weigh in with")} = chen ý kiến mạnh.`,
        examples: [
          ex("She looked weighed down with problems.", "Cô ấy trông như bị vấn đề đè nặng."),
          ex("We'll have to weigh up the alternatives.", "Chúng ta phải cân nhắc các phương án."),
        ],
      },
      {
        title: "Đặc và loãng",
        body: `${purple("Thicken")} làm đặc; ${purple("congeal")}/${purple("solidify")} đông cứng. ${purple("Thin out")} thưa dần (giao thông, tóc). ${purple("Dilute")}/${purple("water down")} pha loãng. ${purple("Impenetrable")} không xuyên qua; ${purple("impervious to")} không bị ảnh hưởng.`,
        examples: [
          ex("Traffic began to thin out after rush hour.", "Giao thông thưa dần sau giờ cao điểm."),
          ex("She is impervious to criticism.", "Cô ấy không bị ảnh hưởng bởi lời chỉ trích."),
        ],
      },
    ],
    words: U64_WORDS,
    exercises: [
      fillBlank(
        64,
        1,
        "We'll have to ____ the alternatives before deciding.",
        "weigh up",
        [
          { key: "a", label: "weigh up" },
          { key: "b", label: "thin out" },
          { key: "c", label: "solidify" },
          { key: "d", label: "congeal" },
        ],
        "a",
      ),
      mcq(
        64,
        2,
        "\"Ponderous\" thường mô tả điều gì?",
        [
          { key: "a", label: "Văn phong nặng nề, chậm chạp" },
          { key: "b", label: "Màu sắc rực rỡ" },
          { key: "c", label: "Âm thanh cao vút" },
          { key: "d", label: "Tốc độ rất nhanh" },
        ],
        "a",
      ),
      fillBlank(
        64,
        3,
        "The secret has been ____ on me for ages.",
        "weighing",
        [
          { key: "a", label: "weighing" },
          { key: "b", label: "thinning" },
          { key: "c", label: "sifting" },
          { key: "d", label: "diluting" },
        ],
        "a",
      ),
      mcq(
        64,
        4,
        "\"Impervious to criticism\" nghĩa là gì?",
        [
          { key: "a", label: "Không bị ảnh hưởng bởi chỉ trích" },
          { key: "b", label: "Rất nhạy cảm với chỉ trích" },
          { key: "c", label: "Hay chỉ trích người khác" },
          { key: "d", label: "Không thể đi qua rừng" },
        ],
        "a",
      ),
      fillBlank(
        64,
        5,
        "Put flour in to ____ the soup, but sift it first.",
        "thicken",
        [
          { key: "a", label: "thicken" },
          { key: "b", label: "dilute" },
          { key: "c", label: "burden" },
          { key: "d", label: "lumber" },
        ],
        "a",
      ),
      mcq(
        64,
        6,
        "Tính từ nào nhấn mạnh \"khó xử lý\" hơn \"nặng\" đơn thuần?",
        [
          { key: "a", label: "unwieldy" },
          { key: "b", label: "weighty" },
          { key: "c", label: "lumpy" },
          { key: "d", label: "solidify" },
        ],
        "a",
      ),
    ],
  }),

  advancedUnit(65, {
    introVi:
      "Unit 65 mở rộng từ màu cụ thể (scarlet, turquoise, auburn) và ngôn ngữ mô tả sắc độ (pastel, vivid, fluorescent). Bạn học ẩn dụ màu: green with envy, red-carpet treatment, black market.",
    structureSections: [
      { label: "Specific colour words", wordCount: 13 },
      { label: "Describing colour", wordCount: 4 },
      { label: "Colour metaphors", wordCount: 5 },
    ],
    collocationHtml: `${purple("pitch black")}, ${purple("shocking pink")}, ${purple("green with envy")} và ${purple("red-carpet treatment")} là cụm then chốt khi nói về màu sắc thực tế và ẩn dụ.`,
    mistakeHtml: `${bold("Navy")} dùng cho quần áo, không mắt. ${bold("Turquoise")} cho vải/biển, ít dùng mắt. ${bold("Mousy")} chỉ dùng cho tóc.`,
    principles: [
      {
        title: "Tên màu cụ thể",
        body: `${purple("Pitch black")}/${purple("jet black")} = đen kịt; ${purple("scarlet")}/${purple("crimson")} = đỏ; ${purple("shocking pink")} = hồng neon; ${purple("turquoise")}, ${purple("lime")}, ${purple("auburn")} mô tả sắc thái riêng.`,
        examples: [
          ex("She has jet black hair.", "Cô ấy có mái tóc đen bóng."),
          ex("The sea was a vivid turquoise.", "Biển có màu xanh ngọc rực rỡ."),
        ],
      },
      {
        title: "Mô tả sắc độ và cường độ",
        body: `${purple("Pastel")} = nhạt; ${purple("vivid")}/${purple("fluorescent")} = rực. ${purple("Monochrome")} = một màu. Hậu tố -ish/-y: reddish brown, bluey green.`,
        examples: [
          ex("The room was decorated in pastel shades.", "Phòng trang trí tông pastel."),
          ex("Fluorescent colours glow in the dark.", "Màu huỳnh quang phát sáng trong bóng tối."),
        ],
      },
      {
        title: "Ẩn dụ theo màu",
        body: `${purple("Green with envy")} = ghen tị; ${purple("red-carpet treatment")} = đãi VIP; ${purple("black market")} = chợ đen. ${purple("Blue-collar")} = lao động chân tay; ${purple("white-collar")} = văn phòng.`,
        examples: [
          ex("She turned green with envy at the new car.", "Cô ấy ghen tị xanh mét với chiếc xe mới."),
          ex("Goods were sold on the black market.", "Hàng được bán ở chợ đen."),
        ],
      },
    ],
    words: U65_WORDS,
    exercises: [
      fillBlank(
        65,
        1,
        "We couldn't see anything in the ____ night.",
        "pitch black",
        [
          { key: "a", label: "pitch black" },
          { key: "b", label: "pastel" },
          { key: "c", label: "monochrome" },
          { key: "d", label: "beige" },
        ],
        "a",
      ),
      mcq(
        65,
        2,
        "Màu nâu đỏ thường dùng cho tóc gọi là gì?",
        [
          { key: "a", label: "auburn" },
          { key: "b", label: "navy" },
          { key: "c", label: "lime" },
          { key: "d", label: "turquoise" },
        ],
        "a",
      ),
      fillBlank(
        65,
        3,
        "All competitors were given the ____.",
        "red-carpet treatment",
        [
          { key: "a", label: "red-carpet treatment" },
          { key: "b", label: "black market" },
          { key: "c", label: "green with envy" },
          { key: "d", label: "monochrome" },
        ],
        "a",
      ),
      mcq(
        65,
        4,
        "\"Mousy\" dùng mô tả gì?",
        [
          { key: "a", label: "Tóc nâu nhạt, không nổi bật" },
          { key: "b", label: "Mắt xanh đậm" },
          { key: "c", label: "Da sẫm màu" },
          { key: "d", label: "Áo navy" },
        ],
        "a",
      ),
      fillBlank(
        65,
        5,
        "She turned ____ when she saw her friend's new car.",
        "green with envy",
        [
          { key: "a", label: "green with envy" },
          { key: "b", label: "shocking pink" },
          { key: "c", label: "white-collar" },
          { key: "d", label: "fluorescent" },
        ],
        "a",
      ),
      {
        type: "match",
        id: "ex-65-match-6",
        instruction: "Ghép từ màu với mô tả",
        pairs: [
          { left: "scarlet", right: "đỏ tươi rực" },
          { left: "crimson", right: "đỏ thẫm" },
          { left: "turquoise", right: "xanh ngọc" },
          { left: "chestnut", right: "nâu hạt dẻ" },
          { left: "ginger", right: "cam đỏ (tóc/lông)" },
        ],
      },
    ],
  }),

  advancedUnit(66, {
    introVi:
      "Unit 66 mở rộng động từ tốc độ: dash, bolt, career (mất kiểm soát), scamper/scurry (bước nhỏ nhanh) và ẩn dụ tài chính rocket/soar/plummet. Bạn học phân biệt chuyển động nhanh, chậm và tăng/giảm tốc.",
    structureSections: [
      { label: "Going fast", wordCount: 10 },
      { label: "Up and down fast", wordCount: 6 },
      { label: "Going slowly", wordCount: 6 },
    ],
    collocationHtml: `${purple("speed up")}, ${purple("career out of control")}, ${purple("prices plummet")} và ${purple("heart soared")} là cụm thường gặp khi nói về tốc độ thực tế và ẩn dụ.`,
    mistakeHtml: `${bold("Accelerate")} chủ yếu cho phương tiện; ${bold("speed up")} cả đi bộ. ${bold("Career")} (động từ) = lao mất kiểm soát, khác ${bold("career")} (danh từ) nghề nghiệp.`,
    principles: [
      {
        title: "Di chuyển nhanh",
        body: `${purple("Dash")}, ${purple("dart")}, ${purple("whizz")} = rất nhanh. ${purple("Bolt")} = bỏ chạy. ${purple("Scamper")}/${purple("scurry")}/${purple("scuttle")} = bước nhỏ nhanh (thường động vật nhỏ). ${purple("Nip")} = ghé nhanh.`,
        examples: [
          ex("The thieves bolted when the alarm went off.", "Kẻ trộm bỏ chạy khi chuông báo vang."),
          ex("I nipped into a shop for water.", "Tôi ghé nhanh cửa hàng mua nước."),
        ],
      },
      {
        title: "Mất kiểm soát và tăng tốc",
        body: `${purple("Career")} = lao vút không kiểm soát. ${purple("Speed up")} và ${purple("accelerate")} = tăng tốc. ${purple("Plunge")}/${purple("plummet")} = lao xuống; ${purple("rocket")}/${purple("soar")} = tăng vọt (thường ẩn dụ tài chính).`,
        examples: [
          ex("Share prices plummeted on the stock market.", "Giá cổ phiếu lao dốc trên sàn."),
          ex("My heart soared when I heard the news.", "Tim tôi bay bổng khi nghe tin."),
        ],
      },
      {
        title: "Chuyển động chậm",
        body: `${purple("Crawl")} và ${purple("creep")} = chậm (giao thông, giá). ${purple("Totter")} = lảo đảo chậm. ${purple("Sidle")} = rón rén lo lắng. ${purple("Dawdle")} = lề mề, phí thời gian.`,
        examples: [
          ex("Traffic was crawling along at rush hour.", "Xe bò chậm trong giờ cao điểm."),
          ex("Don't dawdle on the way home.", "Đừng lề mề trên đường về."),
        ],
      },
    ],
    words: U66_WORDS,
    exercises: [
      fillBlank(66, 1, "The car skidded and ____ down the bank.", "careered", [
        { key: "a", label: "careered" },
        { key: "b", label: "dawdled" },
        { key: "c", label: "sidled" },
        { key: "d", label: "crept" },
      ], "a"),
      mcq(66, 2, "\"Plummet\" thường mô tả điều gì?", [
        { key: "a", label: "Giảm mạnh, lao dốc" },
        { key: "b", label: "Tăng vọt" },
        { key: "c", label: "Đi chậm" },
        { key: "d", label: "Ghé qua nhanh" },
      ], "a"),
      fillBlank(66, 3, "Prices have been ____ up since May.", "creeping", [
        { key: "a", label: "creeping" },
        { key: "b", label: "rocketing" },
        { key: "c", label: "bolting" },
        { key: "d", label: "whizzing" },
      ], "a"),
      mcq(66, 4, "Động từ nào gợi ý chạy trốn khi báo động?", [
        { key: "a", label: "bolt" },
        { key: "b", label: "soar" },
        { key: "c", label: "totter" },
        { key: "d", label: "dawdle" },
      ], "a"),
      fillBlank(66, 5, "Export sales ____ and our hopes soared.", "rocketed", [
        { key: "a", label: "rocketed" },
        { key: "b", label: "crawled" },
        { key: "c", label: "sidled" },
        { key: "d", label: "scuttled" },
      ], "a"),
      mcq(66, 6, "\"Dawdle\" nghĩa là gì?", [
        { key: "a", label: "Đi chậm, lề mề" },
        { key: "b", label: "Lao nhanh" },
        { key: "c", label: "Tăng vọt" },
        { key: "d", label: "Lao dốc" },
      ], "a"),
    ],
  }),

  advancedUnit(67, {
    introVi:
      "Unit 67 phân biệt động từ nhân quả: cause (tiêu cực), produce (trung tính), generate (trang trọng). Bạn học collocation và động từ spark, precipitate, stem from, result in.",
    structureSections: [
      { label: "Core cause verbs", wordCount: 4 },
      { label: "Other cause words", wordCount: 8 },
      { label: "Collocations and usage", wordCount: 8 },
    ],
    collocationHtml: `${purple("cause problems")}, ${purple("generate revenue")}, ${purple("bring about change")} và ${purple("stem from")} là collocation then chốt khi diễn đạt nhân quả.`,
    mistakeHtml: `${bold("Cause")} và ${bold("give")} thường cho sự việc xảy ra tự nhiên; ${bold("produce")}/${bold("generate")} gợi ý con người can thiệp.`,
    principles: [
      {
        title: "Cause, produce, give, generate",
        body: `${purple("Cause")} + trouble/problems. ${purple("Produce")} + statistics/results. ${purple("Give")} + pleasure hoặc trouble. ${purple("Generate")} + revenue/controversy/interest.`,
        examples: [
          ex("The hurricane caused terrible damage.", "Bão gây thiệt hại kinh khủng."),
          ex("His presentation generated a lot of interest.", "Bài trình bày tạo nhiều quan tâm."),
        ],
      },
      {
        title: "Động từ nhân quả khác",
        body: `${purple("Provoke")} cảm xúc; ${purple("precipitate")}/${purple("spark")} khủng hoảng; ${purple("bring about")} thay đổi; ${purple("result in")} hậu quả; ${purple("stem from")} bắt nguồn.`,
        examples: [
          ex("The events precipitated a political crisis.", "Sự kiện châm ngòi khủng hoảng chính trị."),
          ex("His problems stem from his childhood.", "Vấn đề bắt nguồn từ tuổi thơ."),
        ],
      },
      {
        title: "Danh từ liên quan",
        body: `${purple("Grounds")} = căn cứ. ${purple("Implications")} = hệ quả có thể xảy ra. ${purple("Based on")} = dựa trên dữ liệu.`,
        examples: [
          ex("Have you any grounds for suspecting him?", "Bạn có căn cứ nghi ngờ anh ta không?"),
          ex("My argument is based on the available data.", "Luận điểm dựa trên dữ liệu hiện có."),
        ],
      },
    ],
    words: U67_WORDS,
    exercises: [
      fillBlank(67, 1, "The scandal ____ a political crisis.", "sparked", [
        { key: "a", label: "sparked" }, { key: "b", label: "stemmed" }, { key: "c", label: "based" }, { key: "d", label: "generated" },
      ], "a"),
      mcq(67, 2, "Động từ nào thường đi với kết quả tiêu cực nhất?", [
        { key: "a", label: "cause" }, { key: "b", label: "produce" }, { key: "c", label: "generate" }, { key: "d", label: "based on" },
      ], "a"),
      fillBlank(67, 3, "His problems ____ from his difficult childhood.", "stem", [
        { key: "a", label: "stem" }, { key: "b", label: "result" }, { key: "c", label: "provoke" }, { key: "d", label: "produce" },
      ], "a"),
      mcq(67, 4, "\"Generate\" thường collocate với?", [
        { key: "a", label: "revenue / controversy / interest" },
        { key: "b", label: "childhood memories" },
        { key: "c", label: "a friendly manner" },
        { key: "d", label: "pitch black night" },
      ], "a"),
      fillBlank(67, 5, "The invention of the car ____ great changes in society.", "brought about", [
        { key: "a", label: "brought about" }, { key: "b", label: "stemmed from" }, { key: "c", label: "resulted in" }, { key: "d", label: "was based on" },
      ], "a"),
      mcq(67, 6, "\"Stem from\" nghĩa là gì?", [
        { key: "a", label: "Bắt nguồn từ" }, { key: "b", label: "Dẫn đến kết quả" }, { key: "c", label: "Tạo doanh thu" }, { key: "d", label: "Châm ngòi khủng hoảng" },
      ], "a"),
    ],
  }),

  advancedUnit(68, {
    introVi:
      "Unit 68 mở rộng cách nói về sự giống và khác: affinity, akin to, tantamount to; và nhóm tính từ di-/dis- (diverse, disparate, distinct). Bạn học differentiate, distinguish, diverge.",
    structureSections: [
      { label: "Talking about similarity", wordCount: 8 },
      { label: "Talking about difference", wordCount: 9 },
      { label: "Related verbs", wordCount: 4 },
    ],
    collocationHtml: `${purple("cultural affinity")}, ${purple("tantamount to")}, ${purple("widely divergent")} và ${purple("comparable size")} là cụm then chốt khi so sánh.`,
    mistakeHtml: `${bold("Comparable")} = có thể so sánh; ${bold("comparative")} = so sánh tương đối. ${bold("Dissimilar")} thường đi với ${bold("not")}.`,
    principles: [
      {
        title: "Nói về sự giống nhau",
        body: `${purple("Cultural affinity")}, ${purple("akin to")}, ${purple("tantamount to")} (thường tiêu cực), ${purple("indistinguishable")}.`,
        examples: [
          ex("To apologise would be tantamount to admitting failure.", "Xin lỗi tương đương thừa nhận thất bại."),
          ex("Her house was indistinguishable from the others.", "Nhà cô ấy không khác gì các nhà khác."),
        ],
      },
      {
        title: "Nói về sự khác biệt",
        body: `${purple("Diverse")} vs ${purple("disparate")}; ${purple("divergent")} opinions; ${purple("distinct")} vs ${purple("distinctive")}; ${purple("discrete")} categories.`,
        examples: [
          ex("They have widely divergent opinions.", "Họ có quan điểm trái chiều rõ rệt."),
          ex("Our car has a distinctive colour.", "Xe có màu dễ nhận ra."),
        ],
      },
      {
        title: "Động từ liên quan",
        body: `${purple("Differentiate")}, ${purple("distinguish")}, ${purple("diverge")}, ${purple("diversify")}.`,
        examples: [
          ex("Can you distinguish fact from opinion?", "Bạn phân biệt sự thật và ý kiến được không?"),
          ex("Their views began to diverge.", "Quan điểm bắt đầu phân hóa."),
        ],
      },
    ],
    words: U68_WORDS,
    exercises: [
      fillBlank(68, 1, "To apologise would be ____ admitting she had failed.", "tantamount to", [
        { key: "a", label: "tantamount to" }, { key: "b", label: "akin to" }, { key: "c", label: "comparable to" }, { key: "d", label: "correspond to" },
      ], "a"),
      mcq(68, 2, "\"Distinctive\" khác \"distinct\" thế nào?", [
        { key: "a", label: "Distinctive = dễ nhận ra vì khác biệt" },
        { key: "b", label: "Distinctive = giống hệt nhau" },
        { key: "c", label: "Distinct = không thể so sánh" },
        { key: "d", label: "Cả hai nghĩa giống nhau" },
      ], "a"),
      fillBlank(68, 3, "The two sides' goals have become almost ____.", "interchangeable", [
        { key: "a", label: "interchangeable" }, { key: "b", label: "discrete" }, { key: "c", label: "disparate" }, { key: "d", label: "comparative" },
      ], "a"),
      mcq(68, 4, "Tính từ nào nhấn mạnh các phần trong nhóm rất khác nhau?", [
        { key: "a", label: "disparate" }, { key: "b", label: "indistinguishable" }, { key: "c", label: "interchangeable" }, { key: "d", label: "comparable" },
      ], "a"),
      fillBlank(68, 5, "It is hard to ____ the two brands in a blind test.", "differentiate", [
        { key: "a", label: "differentiate" }, { key: "b", label: "equate" }, { key: "c", label: "correspond" }, { key: "d", label: "diversify" },
      ], "a"),
      {
        type: "match",
        id: "ex-68-match-6",
        instruction: "Ghép cụm so sánh với nghĩa",
        pairs: [
          { left: "cultural affinity", right: "sự gần gũi văn hóa" },
          { left: "equate with", right: "coi là tương đương" },
          { left: "divergent opinions", right: "quan điểm trái chiều" },
          { left: "discrete categories", right: "nhóm riêng biệt, không chồng lấn" },
          { left: "comparable size", right: "cỡ tương đương" },
        ],
      },
    ],
  }),

  advancedUnit(69, {
    introVi:
      "Unit 69 tập trung khó khăn và thế lưỡng nan: snag/hitch/glitch, setback/stumbling block/dilemma. Bạn học tính từ arduous, convoluted, gruelling và cách nói informal.",
    structureSections: [
      { label: "Nouns of difficulty", wordCount: 10 },
      { label: "Adjectives of difficulty", wordCount: 8 },
      { label: "Informal expressions", wordCount: 5 },
    ],
    collocationHtml: `${purple("stumbling block")}, ${purple("gruelling journey")}, ${purple("sticky situation")} và ${purple("off the hook")} là cụm hay gặp.`,
    mistakeHtml: `Dùng ${bold("have difficulty in doing")} (số ít). ${bold("Glitch")} = lỗi kỹ thuật; ${bold("snag")}/${bold("hitch")} tổng quát hơn.`,
    principles: [
      {
        title: "Danh từ khó khăn",
        body: `${purple("Snag")}/${purple("hitch")}/${purple("glitch")} nhỏ; ${purple("setback")}, ${purple("stumbling block")}, ${purple("dilemma")}, ${purple("ordeal")} lớn hơn.`,
        examples: [
          ex("Price remains a stumbling block.", "Giá vẫn là vật cản."),
          ex("A software glitch delayed the launch.", "Lỗi phần mềm làm trễ ra mắt."),
        ],
      },
      {
        title: "Tính từ độ khó",
        body: `${purple("Arduous")}, ${purple("convoluted")}, ${purple("gruelling")}, ${purple("abstruse")}, ${purple("obstructive")}.`,
        examples: [
          ex("It was an arduous climb.", "Chặng leo gian khổ."),
          ex("His explanation was convoluted.", "Lời giải thích rắc rối."),
        ],
      },
      {
        title: "Cách nói informal",
        body: `${purple("A pain")}, ${purple("hassle")}, ${purple("sticky situation")}, ${purple("off the hook")}, ${purple("downside")}.`,
        examples: [
          ex("More homework? What a pain!", "Thêm bài tập? Phiền thật!"),
          ex("I think I'm off the hook now.", "Tôi nghĩ mình đã thoát rắc rối."),
        ],
      },
    ],
    words: U69_WORDS,
    exercises: [
      fillBlank(69, 1, "A software ____ delayed the product launch.", "glitch", [
        { key: "a", label: "glitch" }, { key: "b", label: "ordeal" }, { key: "c", label: "downside" }, { key: "d", label: "hassle" },
      ], "a"),
      mcq(69, 2, "\"Dilemma\" mô tả tình huống nào?", [
        { key: "a", label: "Phải chọn giữa hai phương án khó" },
        { key: "b", label: "Lỗi kỹ thuật nhỏ" },
        { key: "c", label: "Thoát khỏi rắc rối" },
        { key: "d", label: "Mặt trái của tình huống" },
      ], "a"),
      fillBlank(69, 3, "The company is in a ____ now workers will strike.", "sticky situation", [
        { key: "a", label: "sticky situation" }, { key: "b", label: "off the hook" }, { key: "c", label: "a pain" }, { key: "d", label: "setback" },
      ], "a"),
      mcq(69, 4, "Tính từ nào mô tả hành trình cực kỳ mệt?", [
        { key: "a", label: "gruelling" }, { key: "b", label: "problematic" }, { key: "c", label: "discrete" }, { key: "d", label: "comparable" },
      ], "a"),
      fillBlank(69, 5, "I had great difficulty ____ a job at first.", "finding", [
        { key: "a", label: "finding" }, { key: "b", label: "find" }, { key: "c", label: "to find" }, { key: "d", label: "found" },
      ], "a"),
      mcq(69, 6, "\"Off the hook\" nghĩa là gì?", [
        { key: "a", label: "Thoát khỏi tình huống khó" },
        { key: "b", label: "Bị mắc kẹt" },
        { key: "c", label: "Hay bắt lỗi" },
        { key: "d", label: "Trục trặc kỹ thuật" },
      ], "a"),
    ],
  }),

  advancedUnit(70, {
    introVi:
      "Unit 70 mở rộng modality: xác suất (bound to, in all probability), nghĩa vụ (obligatory, compulsory) và mong muốn (yearn to, aspirations).",
    structureSections: [
      { label: "Modal expressions", wordCount: 8 },
      { label: "Probability", wordCount: 8 },
      { label: "Obligation and desire", wordCount: 6 },
    ],
    collocationHtml: `${purple("bound to")}, ${purple("in all probability")}, ${purple("no option but to")} và ${purple("must be joking")} là cụm then chốt.`,
    mistakeHtml: `Nhớ dấu nháy trong ${bold("won't")}. ${bold("Should be so lucky")} = không có hy vọng đó.`,
    principles: [
      {
        title: "Cụm modal",
        body: `${purple("Must be joking")}, ${purple("might well")}, ${purple("should be so lucky")}, ${purple("accidents will happen")}.`,
        examples: [
          ex("You must be joking!", "Đùa chứ!"),
          ex("I should be so lucky!", "Ước gì được thế!"),
        ],
      },
      {
        title: "Xác suất",
        body: `${purple("Bound to")}, ${purple("unquestionably")}, ${purple("in all probability")}, ${purple("the chances are")}, ${purple("every likelihood")}.`,
        examples: [
          ex("They are bound to get married.", "Họ chắc chắn sẽ kết hôn."),
          ex("In all probability we'll finish on time.", "Rất có khả năng hoàn thành đúng hạn."),
        ],
      },
      {
        title: "Nghĩa vụ và mong muốn",
        body: `${purple("Obligatory")}/${purple("compulsory")} vs ${purple("optional")}; ${purple("no option but to")}; ${purple("aspirations")}.`,
        examples: [
          ex("We had no option but to turn back.", "Không còn cách nào khác ngoài quay lại."),
          ex("She has aspirations to become PM.", "Cô ấy khát vọng trở thành thủ tướng."),
        ],
      },
    ],
    words: U70_WORDS,
    exercises: [
      fillBlank(70, 1, "You want me to lend you £1,000! You ____!", "must be joking", [
        { key: "a", label: "must be joking" }, { key: "b", label: "should be so lucky" }, { key: "c", label: "for sure" }, { key: "d", label: "bound to" },
      ], "a"),
      mcq(70, 2, "\"Bound to\" diễn đạt mức chắc chắn nào?", [
        { key: "a", label: "Gần như chắc chắn" }, { key: "b", label: "Không thể xảy ra" }, { key: "c", label: "Hoàn toàn không chắc" }, { key: "d", label: "Bắt buộc pháp lý" },
      ], "a"),
      fillBlank(70, 3, "Wearing a safety helmet is ____ in this area.", "obligatory", [
        { key: "a", label: "obligatory" }, { key: "b", label: "optional" }, { key: "c", label: "apparent" }, { key: "d", label: "unquestionably" },
      ], "a"),
      mcq(70, 4, "\"Should be so lucky\" dùng khi nào?", [
        { key: "a", label: "Không tin điều tốt đó sẽ xảy ra với mình" },
        { key: "b", label: "Rất tự tin sẽ thành công" },
        { key: "c", label: "Bắt buộc phải làm" },
        { key: "d", label: "Xin lỗi chân thành" },
      ], "a"),
      fillBlank(70, 5, "The odds are ____ get the job.", "he'll", [
        { key: "a", label: "he'll" }, { key: "b", label: "he won't" }, { key: "c", label: "he must" }, { key: "d", label: "he should" },
      ], "a"),
      mcq(70, 6, "\"Accidents will happen\" nghĩa là gì?", [
        { key: "a", label: "Tai nạn là điều không tránh khỏi" },
        { key: "b", label: "Tai nạn không bao giờ xảy ra" },
        { key: "c", label: "Phải trừng phạt nghiêm khắc" },
        { key: "d", label: "Cần xin phép trước" },
      ], "a"),
    ],
  }),

  advancedUnit(71, {
    introVi:
      "Unit 71 mở rộng ngôn ngữ thống kê: twofold/quadruple, fluctuate/seesaw/erratic, aggregate/ratio/discrepancy. Bạn học cách ước lượng: ballpark figure, err on the side of caution.",
    structureSections: [
      { label: "Changes in numbers", wordCount: 10 },
      { label: "Statistics vocabulary", wordCount: 7 },
      { label: "Assessing quantity", wordCount: 5 },
    ],
    collocationHtml: `${purple("threefold increase")}, ${purple("deviate from the norm")}, ${purple("ballpark figure")} và ${purple("err on the side of caution")} là cụm then chốt.`,
    mistakeHtml: `${bold("-fold")} = nhân với số đó (twofold = gấp đôi). ${bold("Revise upwards/downwards")} = điều chỉnh ước tính lên/xuống.`,
    principles: [
      {
        title: "Thay đổi số lượng",
        body: `${purple("Twofold")}/${purple("threefold")} = gấp 2/3 lần; ${purple("quadruple")} = gấp 4. ${purple("Fluctuate")}, ${purple("seesaw")}, ${purple("erratic")} = dao động. ${purple("Deviate from the norm")} = lệch chuẩn.`,
        examples: [
          ex("Internet use increased twofold in five years.", "Dùng internet tăng gấp đôi trong năm năm."),
          ex("Share prices have been erratic this month.", "Giá cổ phiếu thất thường tháng này."),
        ],
      },
      {
        title: "Từ vựng thống kê",
        body: `${purple("Aggregate")} = tổng; ${purple("blip")} = biến động tạm; ${purple("correlation")} = tương quan; ${purple("discrepancy")} = chênh lệch; ${purple("ratio")} = tỷ lệ; ${purple("flawed")}/${purple("inconsistent")} = sai/không nhất quán.`,
        examples: [
          ex("There's a discrepancy between our figures.", "Có chênh lệch giữa số liệu của chúng ta."),
          ex("The ratio of men to women was 3 to 1.", "Tỷ lệ nam nữ là 3:1."),
        ],
      },
      {
        title: "Ước lượng số lượng",
        body: `${purple("Ballpark figure")} = con số sơ bộ; ${purple("tot up")} = cộng lại; ${purple("six figures")} = 100.000+; ${purple("err on the side of caution")} = thận trọng; ${purple("conservative estimate")}.`,
        examples: [
          ex("Let me give you a ballpark figure.", "Để tôi đưa con số ước lượng sơ bộ."),
          ex("I've erred on the side of caution.", "Tôi đã thận trọng hơn cần thiết."),
        ],
      },
    ],
    words: U71_WORDS,
    exercises: [
      fillBlank(71, 1, "Internet use increased ____ in five years.", "twofold", [
        { key: "a", label: "twofold" }, { key: "b", label: "erratic" }, { key: "c", label: "flawed" }, { key: "d", label: "aggregate" },
      ], "a"),
      mcq(71, 2, "\"Blip\" trong thống kê nghĩa là gì?", [
        { key: "a", label: "Biến động tạm thời" }, { key: "b", label: "Tổng cộng" }, { key: "c", label: "Tỷ lệ 3:1" }, { key: "d", label: "Sai sót nghiêm trọng" },
      ], "a"),
      fillBlank(71, 3, "There's a ____ between our figures and yours.", "discrepancy", [
        { key: "a", label: "discrepancy" }, { key: "b", label: "correlation" }, { key: "c", label: "blip" }, { key: "d", label: "ratio" },
      ], "a"),
      mcq(71, 4, "\"Err on the side of caution\" nghĩa là gì?", [
        { key: "a", label: "Thận trọng hơn cần thiết" },
        { key: "b", label: "Làm tròn lên" },
        { key: "c", label: "Tăng gấp bốn lần" },
        { key: "d", label: "Dao động liên tục" },
      ], "a"),
      fillBlank(71, 5, "Sales ____ from month to month.", "fluctuate", [
        { key: "a", label: "fluctuate" }, { key: "b", label: "aggregate" }, { key: "c", label: "quadruple" }, { key: "d", label: "revise" },
      ], "a"),
      mcq(71, 6, "\"Six figures\" thường nghĩa là?", [
        { key: "a", label: "Số có 6 chữ số (100.000+)" },
        { key: "b", label: "Sáu loại số liệu" },
        { key: "c", label: "Tỷ lệ 6:1" },
        { key: "d", label: "Sáu lần dao động" },
      ], "a"),
    ],
  }),

  advancedUnit(72, {
    introVi:
      "Unit 72 mở rộng từ vựng cho phép và cấm: accede, acquiesce, endorse, carte blanche, go-ahead; và bar, clamp down, outlaw, veto. Bạn học regardless/regardless of.",
    structureSections: [
      { label: "Permitting verbs", wordCount: 7 },
      { label: "Permission phrases", wordCount: 3 },
      { label: "Prohibiting verbs", wordCount: 6 },
    ],
    collocationHtml: `${purple("accede to demands")}, ${purple("carte blanche")}, ${purple("give the go-ahead")} và ${purple("clamp down on")} là cụm trang trọng, hay gặp báo chí.`,
    mistakeHtml: `${bold("Regardless")} là trạng từ, không phải tính từ. Dùng ${bold("regardless")} hoặc ${bold("regardless of")}.`,
    principles: [
      {
        title: "Động từ cho phép",
        body: `${purple("Accede")} (thường sau do dự), ${purple("acquiesce")} (mặc nhiên), ${purple("assent")}, ${purple("authorise")}, ${purple("endorse")}. ${purple("Condone")}/${purple("countenance")} thường phủ định.`,
        examples: [
          ex("The owner acceded to the workers' demands.", "Chủ nhà máy chấp thuận yêu cầu công nhân."),
          ex("The cabinet has endorsed the proposal.", "Nội các phê duyệt đề xuất."),
        ],
      },
      {
        title: "Cụm cho phép",
        body: `${purple("Carte blanche")} = toàn quyền; ${purple("go-ahead")} / ${purple("green light")} = được phép bắt đầu.`,
        examples: [
          ex("The committee were given carte blanche.", "Ủy ban được trao toàn quyền."),
          ex("The city gave the go-ahead for the car park.", "Thành phố mở đèn xanh cho bãi xe."),
        ],
      },
      {
        title: "Động từ cấm",
        body: `${purple("Bar")} = cấm tiếp cận; ${purple("clamp down on")} = trấn áp; ${purple("outlaw")} = cấm bằng luật; ${purple("veto")} = phủ quyết. ${purple("Regardless of")} = bất kể.`,
        examples: [
          ex("Three students were barred from the library.", "Ba sinh viên bị cấm vào thư viện."),
          ex("They built regardless of planning permission.", "Họ xây bất kể giấy phép quy hoạch."),
        ],
      },
    ],
    words: U72_WORDS,
    exercises: [
      fillBlank(72, 1, "The factory owner ____ to the workers' demands.", "acceded", [
        { key: "a", label: "acceded" }, { key: "b", label: "vetoed" }, { key: "c", label: "outlawed" }, { key: "d", label: "barred" },
      ], "a"),
      mcq(72, 2, "\"Carte blanche\" nghĩa là gì?", [
        { key: "a", label: "Toàn quyền hành động" }, { key: "b", label: "Cấm tuyệt đối" }, { key: "c", label: "Phủ quyết chính thức" }, { key: "d", label: "Bất chấp luật" },
      ], "a"),
      fillBlank(72, 3, "The government has decided to ____ on illegal immigration.", "clamp down", [
        { key: "a", label: "clamp down" }, { key: "b", label: "assent" }, { key: "c", label: "endorse" }, { key: "d", label: "acquiesce" },
      ], "a"),
      mcq(72, 4, "\"Veto\" dùng khi nào?", [
        { key: "a", label: "Dùng quyền chính thức để cấm" },
        { key: "b", label: "Cho phép không điều kiện" },
        { key: "c", label: "Mặc nhiên đồng ý" },
        { key: "d", label: "Toàn quyền điều tra" },
      ], "a"),
      fillBlank(72, 5, "The city gave the ____ for the new car park.", "go-ahead", [
        { key: "a", label: "go-ahead" }, { key: "b", label: "veto" }, { key: "c", label: "regardless" }, { key: "d", label: "condone" },
      ], "a"),
      mcq(72, 6, "\"Regardless of\" nghĩa là gì?", [
        { key: "a", label: "Bất kể" }, { key: "b", label: "Nhờ vào" }, { key: "c", label: "Theo đúng" }, { key: "d", label: "Sau khi" },
      ], "a"),
    ],
  }),

  advancedUnit(73, {
    introVi:
      "Unit 73 mở rộng cách phàn nàn và phản đối: từ fed up with, not on đến take exception to, unacceptable. Bạn học động từ grumble, gripe, whinge, remonstrate và quy tắc object to + -ing.",
    structureSections: [
      { label: "Complaint expressions", wordCount: 10 },
      { label: "Verbs and nouns", wordCount: 8 },
      { label: "Informal complaining", wordCount: 4 },
    ],
    collocationHtml: `${purple("take exception to")}, ${purple("object to")}, ${purple("fed up with")} và ${purple("simply unacceptable")} là cụm then chốt khi khiếu nại.`,
    mistakeHtml: `${bold("Object to")} + noun/pronoun/-ing (NOT base verb): object to being made to wait.`,
    principles: [
      {
        title: "Mức độ phàn nàn",
        body: `Informal: ${purple("fed up with")}, ${purple("not on")}, ${purple("enough is enough")}. Neutral: ${purple("not satisfied")}, ${purple("won't do")}. Formal: ${purple("take exception to")}, ${purple("object to")}, ${purple("unacceptable")}, ${purple("shameful")}.`,
        examples: [
          ex("This is just not on!", "Điều này không thể chấp nhận!"),
          ex("I take great exception to your comments.", "Tôi phản đối mạnh bình luận của bạn."),
        ],
      },
      {
        title: "Động từ phàn nàn",
        body: `${purple("Complain")} → complaint; ${purple("protest")}; ${purple("remonstrate")} (formal); ${purple("grumble")}/${purple("gripe")}/${purple("grouse")}/${purple("whinge")} (informal).`,
        examples: [
          ex("I must object to being made to wait.", "Tôi phải phản đối việc bị bắt chờ."),
          ex("Stop grumbling about the weather.", "Đừng càu nhàu về thời tiết."),
        ],
      },
      {
        title: "Cụm informal",
        body: `${purple("Sheer torture")} = cực kỳ khó chịu; ${purple("in a fix")} / ${purple("up against it")} = gặp khó; ${purple("tricky situation")}.`,
        examples: [
          ex("Listening to him sing is sheer torture!", "Nghe anh ấy hát là cực hình!"),
          ex("The team is up against it this week.", "Đội gặp khó tuần này."),
        ],
      },
    ],
    words: U73_WORDS,
    exercises: [
      fillBlank(73, 1, "I must ____ to being made to wait so long.", "object", [
        { key: "a", label: "object" }, { key: "b", label: "protest" }, { key: "c", label: "endorse" }, { key: "d", label: "accede" },
      ], "a"),
      mcq(73, 2, "\"Not on\" (informal) nghĩa là gì?", [
        { key: "a", label: "Không thể chấp nhận" }, { key: "b", label: "Rất hài lòng" }, { key: "c", label: "Được phép" }, { key: "d", label: "Không liên quan" },
      ], "a"),
      fillBlank(73, 3, "I'm ____ with all your moaning.", "fed up", [
        { key: "a", label: "fed up" }, { key: "b", label: "object" }, { key: "c", label: "assent" }, { key: "d", label: "bound" },
      ], "a"),
      mcq(73, 4, "Động từ nào informal nhất?", [
        { key: "a", label: "whinge" }, { key: "b", label: "remonstrate" }, { key: "c", label: "protest" }, { key: "d", label: "object" },
      ], "a"),
      fillBlank(73, 5, "I take great ____ to your unfair comments.", "exception", [
        { key: "a", label: "exception" }, { key: "b", label: "complaint" }, { key: "c", label: "hassle" }, { key: "d", label: "downside" },
      ], "a"),
      mcq(73, 6, "Sau \"object to\" dùng dạng nào?", [
        { key: "a", label: "-ing form" }, { key: "b", label: "base verb" }, { key: "c", label: "past tense" }, { key: "d", label: "infinitive with to" },
      ], "a"),
    ],
  }),

  advancedUnit(74, {
    introVi:
      "Unit 74 mở rộng xin lỗi, hối tiếc và hòa giải: heartfelt apology, lame excuse, cast-iron alibi; remorse, exonerated, reprieve; treaty, armistice, truce, ceasefire.",
    structureSections: [
      { label: "Apologies and excuses", wordCount: 6 },
      { label: "Regret in legal contexts", wordCount: 8 },
      { label: "Peace and reconciliation", wordCount: 6 },
    ],
    collocationHtml: `${purple("heartfelt apology")}, ${purple("cast-iron alibi")}, ${purple("forgive and forget")} và ${purple("peace treaty")} là collocation then chốt.`,
    mistakeHtml: `${bold("Forgive and forget")} luôn theo thứ tự này. ${bold("Compliment on")} (unit 75) — ở đây ${bold("apologise for")}.`,
    principles: [
      {
        title: "Xin lỗi và lý do",
        body: `${purple("Heartfelt/sincere apology")}; ${purple("lame/flimsy excuse")}; ${purple("phoney")} explanation; ${purple("cast-iron alibi")}; ${purple("flimsy pretext")}.`,
        examples: [
          ex("He offered his most heartfelt apology.", "Anh ấy xin lỗi chân thành nhất."),
          ex("She had a cast-iron alibi.", "Cô ấy có chứng cớ ngoại phạm vững chắc."),
        ],
      },
      {
        title: "Hối hận trong ngữ cảnh pháp lý",
        body: `${purple("Remorse")} = hối hận; ${purple("acquitted")} = trắng án; ${purple("repented")} = ăn năn; ${purple("exonerated")} = minh oan; ${purple("reprieve")} = hoãn hình phạt; ${purple("posthumous pardon")}.`,
        examples: [
          ex("He showed no remorse whatsoever.", "Anh ta không hề hối hận."),
          ex("The minister was exonerated from all blame.", "Bộ trưởng được minh oan."),
        ],
      },
      {
        title: "Hòa bình và hòa giải",
        body: `${purple("Treaty")} (hiệp ước), ${purple("armistice")} (đình chiến), ${purple("truce")} (ngừng bắn tạm), ${purple("accord")}, ${purple("ceasefire")}. ${purple("Forgive and forget")}.`,
        examples: [
          ex("The two nations signed a peace treaty.", "Hai nước ký hiệp ước hòa bình."),
          ex("Both sides agreed to a ceasefire.", "Hai bên đồng ý ngừng bắn."),
        ],
      },
    ],
    words: U74_WORDS,
    exercises: [
      fillBlank(74, 1, "It was a rather ____ excuse, and nobody believed it.", "lame", [
        { key: "a", label: "lame" }, { key: "b", label: "heartfelt" }, { key: "c", label: "cast-iron" }, { key: "d", label: "laudable" },
      ], "a"),
      mcq(74, 2, "\"Cast-iron alibi\" nghĩa là gì?", [
        { key: "a", label: "Chứng cớ ngoại phạm vững chắc" },
        { key: "b", label: "Lời xin lỗi chân thành" },
        { key: "c", label: "Hiệp ước hòa bình" },
        { key: "d", label: "Lời khen mỉa mai" },
      ], "a"),
      fillBlank(74, 3, "The Committee ____ the Minister from all responsibility.", "exonerated", [
        { key: "a", label: "exonerated" }, { key: "b", label: "repented" }, { key: "c", label: "vetoed" }, { key: "d", label: "flattered" },
      ], "a"),
      mcq(74, 4, "\"Truce\" khác \"treaty\" thế nào?", [
        { key: "a", label: "Truce = ngừng bắn tạm; treaty = hiệp ước viết" },
        { key: "b", label: "Cả hai nghĩa giống nhau" },
        { key: "c", label: "Treaty chỉ dùng trong tòa án" },
        { key: "d", label: "Truce = án tù chung thân" },
      ], "a"),
      fillBlank(74, 5, "Victims find it hard to ____.", "forgive and forget", [
        { key: "a", label: "forgive and forget" }, { key: "b", label: "take exception" }, { key: "c", label: "clamp down" }, { key: "d", label: "err on the side of caution" },
      ], "a"),
      {
        type: "match",
        id: "ex-74-match-6",
        instruction: "Ghép thuật ngữ hòa giải với nghĩa",
        pairs: [
          { left: "armistice", right: "đình chiến để đàm phán" },
          { left: "ceasefire", right: "ngừng bắn để thương lượng" },
          { left: "reprieve", right: "hoãn hoặc dừng hình phạt" },
          { left: "remorse", right: "hối hận" },
          { left: "flimsy pretext", right: "cái cớ mong manh" },
        ],
      },
    ],
  }),

  advancedUnit(75, {
    introVi:
      "Unit 75 mở rộng khen ngợi: pay compliments, back-handed compliment, praised to the skies; pay tribute to, standing ovation, toast of. Bạn học nịnh bợ: flatter, suck up to, obsequious và compliment on.",
    structureSections: [
      { label: "Compliment collocations", wordCount: 7 },
      { label: "Praising expressions", wordCount: 8 },
      { label: "Insincere praise", wordCount: 7 },
    ],
    collocationHtml: `${purple("pay compliments")}, ${purple("back-handed compliment")}, ${purple("standing ovation")} và ${purple("compliment on")} là cụm then chốt.`,
    mistakeHtml: `${bold("Compliment")} + ${bold("on")} (NOT compliment me my playing). ${bold("Flattery will get you nowhere")} = nịnh không có ích.`,
    principles: [
      {
        title: "Collocation với compliment/praise",
        body: `${purple("Pay compliments")}; ${purple("fishing for compliments")}; ${purple("back-handed")}/${purple("double-edged compliment")}; ${purple("praiseworthy")}; ${purple("praised to the skies")}; ${purple("damn with faint praise")}.`,
        examples: [
          ex("He was fishing for compliments about his suit.", "Anh ấy câu lời khen về bộ vest."),
          ex("The film was praised to the skies.", "Phim được khen lên tận mây xanh."),
        ],
      },
      {
        title: "Cách khen trang trọng",
        body: `${purple("Pay tribute to")}; ${purple("standing ovation")}; ${purple("extol the virtues of")}; ${purple("toast of")}; ${purple("pat on the back")}; ${purple("plaudits")}; ${purple("laud")} (laudable/laudatory).`,
        examples: [
          ex("The audience gave a standing ovation.", "Khán giả vỗ tay đứng."),
          ex("She is the toast of Hollywood.", "Cô ấy là ngôi sao được cả Hollywood ngưỡng mộ."),
        ],
      },
      {
        title: "Khen không chân thành",
        body: `${purple("Flatter")}, ${purple("suck up to")}, ${purple("smarmy")}, ${purple("obsequious")}. ${purple("Flatter")} cũng có thể tích cực: That dress flatters her figure.`,
        examples: [
          ex("Flattery will get you nowhere!", "Nịnh nọt không có ích đâu!"),
          ex("He complimented me on my guitar playing.", "Anh ấy khen tôi chơi guitar."),
        ],
      },
    ],
    words: U75_WORDS,
    exercises: [
      fillBlank(75, 1, "He was ____ for compliments about his new suit.", "fishing", [
        { key: "a", label: "fishing" }, { key: "b", label: "paying" }, { key: "c", label: "sucking" }, { key: "d", label: "extolling" },
      ], "a"),
      mcq(75, 2, "\"Back-handed compliment\" là gì?", [
        { key: "a", label: "Lời khen mang ý mỉa mai" },
        { key: "b", label: "Lời khen chân thành nhất" },
        { key: "c", label: "Vỗ tay đứng" },
        { key: "d", label: "Lời xin lỗi yếu ớt" },
      ], "a"),
      fillBlank(75, 3, "At the memorial service, I ____ his kindness.", "paid tribute to", [
        { key: "a", label: "paid tribute to" }, { key: "b", label: "objected to" }, { key: "c", label: "stemmed from" }, { key: "d", label: "weighed on" },
      ], "a"),
      mcq(75, 4, "Sau \"compliment\" dùng giới từ nào?", [
        { key: "a", label: "on" }, { key: "b", label: "for" }, { key: "c", label: "at" }, { key: "d", label: "(không cần giới từ)" },
      ], "a"),
      fillBlank(75, 5, "The exhibition earned ____ from all the major reviewers.", "plaudits", [
        { key: "a", label: "plaudits" }, { key: "b", label: "glitches" }, { key: "c", label: "discrepancies" }, { key: "d", label: "remonstrances" },
      ], "a"),
      mcq(75, 6, "\"Damn with faint praise\" nghĩa là gì?", [
        { key: "a", label: "Khen nửa vời để thể hiện ý tiêu cực" },
        { key: "b", label: "Khen hết lời trang trọng" },
        { key: "c", label: "Xin lỗi không chân thành" },
        { key: "d", label: "Phản đối chính thức" },
      ], "a"),
    ],
  }),
];
