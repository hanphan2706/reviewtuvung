import { EVIU_PRE_INTERMEDIATE_CATALOG } from "../eviu-pre-intermediate-catalog";
import { filterWordsNotInElementary } from "../eviu-vocabulary-dedup";
import type { VocabularyUnit } from "../vocabulary-unit-types";
import {
  bold,
  buildEviuUnit,
  buildVariedWordExercises,
  ex,
  fillBlank,
  mcq,
  purple,
  type UnitContentInput,
  type WordInput,
} from "./eviu-unit-builder";

function catalogFor(unitNumber: number) {
  const entry = EVIU_PRE_INTERMEDIATE_CATALOG.find((item) => item.unitNumber === unitNumber);
  if (!entry) {
    throw new Error(`Missing pre-intermediate catalog entry for unit ${unitNumber}`);
  }
  return entry;
}

function w(term: string, definition: string, example: string, partOfSpeech = "NOUN"): WordInput {
  return { term, definition, example, partOfSpeech };
}

type WordTuple = [term: string, definition: string, example: string, partOfSpeech?: string];

function wordList(entries: readonly WordTuple[]): WordInput[] {
  return entries.map(([term, definition, example, partOfSpeech]) => w(term, definition, example, partOfSpeech ?? "NOUN"));
}

function rebuildStructureSections(
  sections: UnitContentInput["structureSections"],
  totalWords: number,
): UnitContentInput["structureSections"] {
  if (sections.length === 0) return [];
  if (totalWords <= 0) {
    return sections.map((section) => ({ ...section, wordCount: 0 }));
  }

  const originalTotal = sections.reduce((sum, section) => sum + section.wordCount, 0);
  if (originalTotal === totalWords) return sections;
  if (originalTotal <= 0) {
    const base = Math.floor(totalWords / sections.length);
    let remainder = totalWords % sections.length;
    return sections.map((section) => {
      const extra = remainder > 0 ? 1 : 0;
      remainder -= extra;
      return { ...section, wordCount: base + extra };
    });
  }

  const scaled = sections.map((section) => {
    const raw = (section.wordCount / originalTotal) * totalWords;
    return { label: section.label, wordCount: Math.floor(raw), remainder: raw - Math.floor(raw) };
  });

  let assigned = scaled.reduce((sum, section) => sum + section.wordCount, 0);
  let remaining = totalWords - assigned;

  const order = [...scaled].sort((a, b) => b.remainder - a.remainder);
  for (let i = 0; i < order.length && remaining > 0; i += 1) {
    order[i].wordCount += 1;
    remaining -= 1;
  }

  assigned = order.reduce((sum, section) => sum + section.wordCount, 0);
  if (assigned !== totalWords) {
    order[0].wordCount += totalWords - assigned;
  }

  const byLabel = new Map(order.map((item) => [item.label, item.wordCount]));
  return sections.map((section) => ({ ...section, wordCount: byLabel.get(section.label) ?? 0 }));
}

function preUnit(unitNumber: number, content: UnitContentInput): VocabularyUnit {
  const catalog = catalogFor(unitNumber);
  const filteredWords = filterWordsNotInElementary(content.words);
  const structureSections = rebuildStructureSections(content.structureSections, filteredWords.length);
  const varied = filteredWords.length >= 4 ? buildVariedWordExercises(unitNumber, filteredWords, 8) : [];

  return buildEviuUnit(
    catalog,
    {
      ...content,
      words: filteredWords,
      structureSections,
      exercises: [...content.exercises, ...varied],
    },
    { series: "pre-intermediate" },
  );
}

const U1_WORDS = wordList([
  ["revise", "ôn lại kiến thức để nhớ lâu", "I revise new words every evening.", "VERB"],
  ["memorise", "ghi nhớ có chủ đích", "She memorises five collocations a day.", "VERB"],
  ["retention", "khả năng giữ thông tin trong trí nhớ", "Spaced review improves retention."],
  ["recall", "gợi nhớ lại thông tin đã học", "Quick quizzes help recall.", "VERB"],
  ["context", "ngữ cảnh giúp hiểu nghĩa", "Learn each phrase in context."],
  ["collocation", "cặp từ thường đi với nhau", "The teacher explained a useful collocation."],
  ["chunk", "cụm ngôn ngữ học theo khối", "I note each chunk with an example."],
  ["word family", "họ từ gồm danh từ, động từ, tính từ", "Build a word family for every new root."],
  ["mnemonic", "mẹo liên tưởng để ghi nhớ", "A funny image can be a strong mnemonic."],
  ["active recall", "phương pháp tự kiểm tra để nhớ", "Use active recall instead of re-reading."],
  ["spaced repetition", "lặp lại ngắt quãng theo chu kỳ", "Spaced repetition saves study time."],
  ["semantic map", "sơ đồ nghĩa liên kết từ cùng chủ đề", "I drew a semantic map for travel words."],
  ["synonym set", "nhóm từ đồng nghĩa gần nhau", "This synonym set helps me avoid repetition."],
  ["antonym", "từ trái nghĩa", "Write an antonym beside each adjective."],
  ["register", "mức độ trang trọng của từ", "Check the register before using slang."],
  ["usage note", "ghi chú về cách dùng từ", "The dictionary gives a clear usage note."],
  ["drill", "luyện tập lặp lại có mục tiêu", "We did a short pronunciation drill.", "VERB"],
  ["self-test", "bài tự kiểm tra sau khi học", "Do a self-test on Sunday night."],
]);

const U2_WORDS = wordList([
  ["index tab", "thẻ phân mục để chia phần trong sổ", "My notebook has an index tab for each topic."],
  ["entry", "mục ghi chép riêng cho một từ", "Write one clear entry per term."],
  ["headword", "từ chính đứng đầu mục từ", "Highlight the headword in blue."],
  ["sample sentence", "câu ví dụ minh họa cách dùng", "Add a sample sentence from real life."],
  ["translation hint", "gợi ý dịch nghĩa ngắn gọn", "Use a translation hint, not a full paragraph."],
  ["usage label", "nhãn cách dùng như formal/informal", "Check the usage label before memorising."],
  ["pronunciation cue", "ký hiệu nhắc phát âm", "I mark stress with a pronunciation cue."],
  ["review cycle", "chu kỳ xem lại định kỳ", "My review cycle is day 1, 3 and 7."],
  ["topic page", "trang ghi chép theo chủ đề", "Create a topic page for health vocabulary."],
  ["error log", "danh sách lỗi thường mắc", "I keep an error log in the last section."],
  ["cross-reference", "liên kết đến mục liên quan", "Use cross-reference to connect similar words.", "VERB"],
  ["abbreviation", "cách viết tắt", "Write each abbreviation with its full form."],
  ["symbol", "ký hiệu nhắc nhớ nhanh", "A star symbol means difficult word."],
  ["tag", "nhãn đánh dấu để lọc từ", "I tag verbs that need prepositions.", "VERB"],
  ["template", "mẫu khung ghi từ thống nhất", "Use one template for all new entries."],
  ["categorise", "phân loại theo nhóm", "Categorise words by function, not alphabet.", "VERB"],
  ["highlight", "tô nổi bật thông tin chính", "Highlight collocations in purple.", "VERB"],
  ["annotate", "ghi chú thêm bên cạnh", "Annotate tricky examples in Vietnamese.", "VERB"],
]);

const U3_WORDS = wordList([
  ["monolingual dictionary", "từ điển đơn ngữ", "A monolingual dictionary gives richer examples."],
  ["bilingual dictionary", "từ điển song ngữ", "Beginners often start with a bilingual dictionary."],
  ["entry guide", "hướng dẫn đọc bố cục mục từ", "Read the entry guide before searching."],
  ["part-of-speech label", "nhãn từ loại của từ", "Check the part-of-speech label first."],
  ["phonemic symbol", "ký hiệu phiên âm quốc tế", "The phonemic symbol shows vowel length."],
  ["stress mark", "dấu trọng âm", "The stress mark is on the second syllable."],
  ["example bank", "kho câu ví dụ tham khảo", "Use the example bank to copy patterns."],
  ["frequency marker", "dấu hiệu tần suất sử dụng", "A frequency marker shows common words."],
  ["idiom", "cụm thành ngữ khó đoán nghĩa", "This idiom sounds natural in conversation."],
  ["phrasal verb", "động từ cụm gồm động từ và tiểu từ", "Look up each phrasal verb separately."],
  ["derivative", "từ phái sinh từ cùng gốc", "The derivative noun is listed below."],
  ["etymology", "nguồn gốc lịch sử của từ", "I read the etymology for fun."],
  ["lookup", "việc tra từ trong từ điển", "Quick lookup is useful during reading.", "NOUN"],
  ["browse", "xem lướt nhiều mục từ", "Browse nearby entries for related terms.", "VERB"],
  ["verify meaning", "xác nhận nghĩa đúng theo ngữ cảnh", "Always verify meaning with examples.", "VERB"],
  ["compare senses", "so sánh các nét nghĩa khác nhau", "Compare senses before translating.", "VERB"],
  ["usage example", "ví dụ dùng từ trong ngữ cảnh thật", "A usage example prevents wrong collocations."],
  ["dictionary app", "ứng dụng từ điển trên điện thoại", "My dictionary app works offline too."],
]);

const U4_WORDS = wordList([
  ["mother tongue", "ngôn ngữ mẹ đẻ", "Vietnamese is my mother tongue."],
  ["second language", "ngôn ngữ thứ hai", "English is her second language."],
  ["accent", "giọng vùng miền khi nói", "He has a clear Australian accent."],
  ["dialect", "phương ngữ địa phương", "This dialect differs from standard English."],
  ["fluency", "độ trôi chảy khi nói", "Daily speaking practice builds fluency."],
  ["accuracy", "độ chính xác về từ và ngữ pháp", "Try to balance fluency and accuracy."],
  ["intonation", "ngữ điệu lên xuống của câu", "Your intonation sounds natural now."],
  ["syllable", "âm tiết trong một từ", "This word has three syllables."],
  ["grammar point", "điểm ngữ pháp cụ thể", "Today's grammar point is conditionals."],
  ["clause", "mệnh đề trong câu", "A relative clause adds detail."],
  ["punctuation", "dấu câu trong văn viết", "Correct punctuation improves clarity."],
  ["abbreviation style", "quy tắc dùng chữ viết tắt", "Follow abbreviation style in formal emails."],
  ["loanword", "từ vay mượn từ ngôn ngữ khác", "Many tech terms are loanwords."],
  ["jargon", "thuật ngữ chuyên môn khó với người thường", "Avoid jargon when teaching beginners."],
  ["plain English", "cách diễn đạt đơn giản, rõ ràng", "Use plain English in instructions."],
  ["paraphrase", "diễn đạt lại bằng từ khác", "Paraphrase difficult sentences in your notes.", "VERB"],
  ["pronounce clearly", "phát âm rõ ràng từng âm", "Try to pronounce clearly in presentations.", "VERB"],
  ["communicative task", "nhiệm vụ giao tiếp có mục tiêu", "We completed a communicative task in pairs."],
]);

const U5_WORDS = wordList([
  ["citizenship", "quốc tịch theo pháp lý", "She applied for dual citizenship."],
  ["passport holder", "người sở hữu hộ chiếu", "As a passport holder, he can enter visa-free."],
  ["resident", "người cư trú lâu dài", "My cousin is a permanent resident."],
  ["expat", "người sống và làm việc ở nước ngoài", "The city has a large expat community."],
  ["heritage", "di sản văn hóa nguồn cội", "She is proud of her cultural heritage."],
  ["ethnic group", "nhóm dân tộc", "The region is home to several ethnic groups."],
  ["official language", "ngôn ngữ chính thức", "English is an official language in Singapore."],
  ["regional language", "ngôn ngữ theo vùng", "People also speak a regional language at home."],
  ["multilingual", "sử dụng được nhiều ngôn ngữ", "My manager is multilingual.", "ADJECTIVE"],
  ["native speaker", "người bản ngữ", "I practise with a native speaker online."],
  ["foreign-born", "sinh ra ở nước ngoài", "He is foreign-born but raised locally.", "ADJECTIVE"],
  ["immigrant", "người nhập cư", "The museum shares immigrant stories."],
  ["emigrate", "di cư ra nước ngoài để sống", "His family emigrated in the 1990s.", "VERB"],
  ["settle down", "ổn định cuộc sống tại một nơi", "They settled down in Canada.", "VERB"],
  ["visa status", "tình trạng thị thực hiện tại", "Always check your visa status before travel."],
  ["national anthem", "quốc ca", "The crowd sang the national anthem."],
  ["border control", "kiểm soát biên giới", "Border control checked our documents."],
  ["global citizen", "công dân toàn cầu", "She sees herself as a global citizen."],
]);

const U6_WORDS = wordList([
  ["landscape", "cảnh quan tự nhiên tổng thể", "The mountain landscape was breathtaking."],
  ["terrain", "địa hình bề mặt đất", "This terrain is too rough for bikes."],
  ["valley", "thung lũng giữa các dãy núi", "A small river runs through the valley."],
  ["cliff", "vách đá cao và dốc", "Stay away from the edge of the cliff."],
  ["shoreline", "đường bờ nơi đất gặp nước", "Plastic waste washed onto the shoreline."],
  ["waterfall", "thác nước đổ từ cao xuống", "We hiked to a hidden waterfall."],
  ["glacier", "sông băng lớn di chuyển chậm", "The glacier is shrinking every year."],
  ["volcanic", "thuộc về núi lửa", "Volcanic soil is fertile.", "ADJECTIVE"],
  ["ecosystem", "hệ sinh thái gồm sinh vật và môi trường", "Coral reefs are fragile ecosystems."],
  ["habitat", "môi trường sống tự nhiên", "Deforestation destroys animal habitats."],
  ["erosion", "sự xói mòn do gió, nước", "Heavy rain causes soil erosion."],
  ["mineral", "khoáng chất trong lòng đất", "This area is rich in minerals."],
  ["renewable resource", "tài nguyên có thể tái tạo", "Solar energy is a renewable resource."],
  ["fossil fuel", "nhiên liệu hóa thạch", "Many countries reduce fossil fuel use."],
  ["conservation area", "khu bảo tồn thiên nhiên", "Camping is restricted in this conservation area."],
  ["pollute", "làm ô nhiễm môi trường", "Factories can pollute rivers.", "VERB"],
  ["preserve", "bảo tồn nguyên trạng", "We must preserve natural forests.", "VERB"],
  ["environmental impact", "tác động lên môi trường", "Tourism has both positive and negative environmental impact."],
]);

const U7_WORDS = wordList([
  ["forecast", "dự báo thời tiết", "The forecast says storms tonight."],
  ["humidity", "độ ẩm trong không khí", "Humidity is high in August."],
  ["heatwave", "đợt nắng nóng kéo dài", "A heatwave hit the city last week."],
  ["cold snap", "đợt rét ngắn nhưng mạnh", "Farmers prepared for a sudden cold snap."],
  ["drizzle", "mưa phùn nhẹ", "It started to drizzle after lunch.", "VERB"],
  ["downpour", "trận mưa to xối xả", "A downpour flooded the streets."],
  ["hail", "mưa đá", "Cars were damaged by hail."],
  ["thunderstorm", "cơn giông có sấm chớp", "Flights were delayed by a thunderstorm."],
  ["lightning strike", "tia sét đánh xuống", "A lightning strike caused a power cut."],
  ["breeze", "gió nhẹ dễ chịu", "A sea breeze cooled us down."],
  ["gust", "luồng gió mạnh bất chợt", "A gust blew my hat away."],
  ["overcast", "u ám nhiều mây", "The sky stayed overcast all day.", "ADJECTIVE"],
  ["sunny spell", "quãng thời gian nắng đẹp", "We had a short sunny spell in the afternoon."],
  ["temperature drop", "sự giảm nhiệt độ", "A sharp temperature drop is expected tonight."],
  ["frost", "lớp băng mỏng do lạnh", "Morning frost covered the grass."],
  ["mild", "ôn hòa, không quá nóng hoặc lạnh", "Winters are mild in this region.", "ADJECTIVE"],
  ["humid", "ẩm ướt do hơi nước cao", "It feels humid before rain.", "ADJECTIVE"],
  ["climate pattern", "mô hình khí hậu lặp lại", "Scientists study long-term climate patterns."],
]);

const U8_WORDS = wordList([
  ["mammal", "động vật có vú", "Whales are mammals, not fish."],
  ["reptile", "động vật bò sát", "A turtle is a reptile."],
  ["amphibian", "động vật lưỡng cư", "Frogs are amphibians."],
  ["predator", "động vật săn mồi", "The tiger is a top predator."],
  ["prey", "con mồi bị săn", "Rabbits are common prey in the wild."],
  ["herd", "đàn động vật ăn cỏ", "A herd of deer crossed the road."],
  ["flock", "đàn chim hoặc cừu", "A flock of geese flew south."],
  ["hive", "tổ ong", "Bees returned to the hive at dusk."],
  ["nesting site", "khu vực làm tổ", "The beach is a nesting site for turtles."],
  ["camouflage", "khả năng ngụy trang", "Camouflage helps insects survive."],
  ["venomous", "có nọc độc", "Some snakes are venomous.", "ADJECTIVE"],
  ["endangered", "có nguy cơ tuyệt chủng", "This species is critically endangered.", "ADJECTIVE"],
  ["wildlife reserve", "khu bảo tồn động vật hoang dã", "Poaching is banned in the wildlife reserve."],
  ["migration route", "đường di cư theo mùa", "Birds follow this migration route every year."],
  ["nocturnal", "hoạt động về đêm", "Owls are nocturnal animals.", "ADJECTIVE"],
  ["graze", "ăn cỏ trên đồng", "Cows graze near the river.", "VERB"],
  ["hibernate", "ngủ đông để tiết kiệm năng lượng", "Bears hibernate in winter.", "VERB"],
  ["biodiversity", "đa dạng sinh học trong một hệ", "Urban growth can reduce biodiversity."],
]);

const U9_WORDS = wordList([
  ["posture", "tư thế cơ thể khi đứng ngồi", "Good posture prevents back pain."],
  ["joint", "khớp nối giữa các xương", "My knee joint hurts after running."],
  ["muscle", "cơ bắp giúp vận động", "Stretching relaxes tight muscles."],
  ["tendon", "gân nối cơ với xương", "He injured a tendon in his ankle."],
  ["ligament", "dây chằng giữ ổn định khớp", "A torn ligament needs rest."],
  ["balance", "khả năng giữ thăng bằng", "Yoga improves balance."],
  ["flexibility", "độ dẻo của cơ và khớp", "Daily stretching increases flexibility."],
  ["coordination", "sự phối hợp nhịp nhàng cử động", "Dancing requires coordination."],
  ["stride", "bước chân dài và chắc", "He crossed the room in two strides.", "VERB"],
  ["stumble", "vấp và loạng choạng", "I stumbled on the stairs.", "VERB"],
  ["sprint", "chạy nước rút nhanh", "She can sprint 100 meters in 13 seconds.", "VERB"],
  ["jog", "chạy chậm đều để rèn sức khỏe", "We jog in the park before work.", "VERB"],
  ["crawl", "bò sát mặt đất", "The baby started to crawl yesterday.", "VERB"],
  ["stretch out", "duỗi thẳng tay/chân ra", "Stretch out your arms slowly.", "VERB"],
  ["reach", "vươn tới một điểm", "Can you reach the top shelf?", "VERB"],
  ["grip", "nắm chặt để giữ chắc", "Grip the handle firmly.", "VERB"],
  ["twist", "xoay vặn một phần cơ thể", "Do not twist your back suddenly.", "VERB"],
  ["mobility", "khả năng di chuyển linh hoạt", "Regular exercise preserves mobility."],
]);

const U10_WORDS = wordList([
  ["facial features", "đặc điểm khuôn mặt", "She has sharp facial features."],
  ["complexion", "nước da tổng thể", "He has a warm complexion."],
  ["freckles", "tàn nhang nhỏ trên da", "Freckles appear in summer."],
  ["wrinkle", "nếp nhăn trên da", "This cream reduces fine wrinkles."],
  ["beard stubble", "râu lún phún mới mọc", "He has beard stubble today."],
  ["hairstyle", "kiểu tóc đã cắt/tạo", "Her hairstyle changed a lot."],
  ["fringe", "mái tóc che trán", "She cut her fringe shorter."],
  ["curly-haired", "có tóc xoăn", "The curly-haired boy is my cousin.", "ADJECTIVE"],
  ["broad-shouldered", "vai rộng, dáng chắc", "He is broad-shouldered and athletic.", "ADJECTIVE"],
  ["slender", "thon dài, mảnh mai", "She has a slender figure.", "ADJECTIVE"],
  ["well-built", "thể hình cân đối, rắn chắc", "The goalkeeper is well-built.", "ADJECTIVE"],
  ["scruffy", "trông lôi thôi thiếu chỉn chu", "He looked scruffy after the flight.", "ADJECTIVE"],
  ["elegant", "thanh lịch và tinh tế", "She looked elegant in black.", "ADJECTIVE"],
  ["casual outfit", "trang phục thường ngày", "I prefer a casual outfit on Fridays."],
  ["smartly dressed", "ăn mặc chỉnh tề lịch sự", "Everyone was smartly dressed at the event.", "ADJECTIVE"],
  ["distinctive look", "diện mạo đặc trưng dễ nhận ra", "He has a distinctive look."],
  ["noticeable scar", "vết sẹo dễ nhìn thấy", "A noticeable scar runs across his chin."],
  ["ageing gracefully", "già đi một cách tự nhiên, đẹp", "She is ageing gracefully.", "VERB"],
]);

const U11_WORDS = wordList([
  ["outgoing", "cởi mở, thích giao tiếp", "Our new teammate is very outgoing.", "ADJECTIVE"],
  ["reserved", "kín đáo, ít bộc lộ", "He is reserved with strangers.", "ADJECTIVE"],
  ["reliable", "đáng tin cậy, làm đúng lời hứa", "She is reliable under pressure.", "ADJECTIVE"],
  ["impulsive", "bốc đồng, hành động theo cảm xúc", "He can be impulsive at times.", "ADJECTIVE"],
  ["thoughtful", "chu đáo và biết quan tâm", "That was a thoughtful message.", "ADJECTIVE"],
  ["stubborn", "bướng bỉnh, khó đổi ý", "My brother is stubborn about money.", "ADJECTIVE"],
  ["open-minded", "cởi mở với ý tưởng mới", "A good manager is open-minded.", "ADJECTIVE"],
  ["self-disciplined", "tự giác và có kỷ luật", "She is self-disciplined with her schedule.", "ADJECTIVE"],
  ["empathetic", "biết đặt mình vào cảm xúc người khác", "He is empathetic with students.", "ADJECTIVE"],
  ["assertive", "quyết đoán mà vẫn tôn trọng", "You need to be assertive in meetings.", "ADJECTIVE"],
  ["easy-going", "thoải mái, không quá căng thẳng", "Our coach is easy-going.", "ADJECTIVE"],
  ["ambitious", "tham vọng tích cực, có mục tiêu lớn", "She is ambitious but realistic.", "ADJECTIVE"],
  ["sensitive", "nhạy cảm với lời nói và tình huống", "He is sensitive to criticism.", "ADJECTIVE"],
  ["considerate", "biết nghĩ cho người khác", "Thank you for being considerate.", "ADJECTIVE"],
  ["straightforward", "thẳng thắn, rõ ràng", "I like her straightforward style.", "ADJECTIVE"],
  ["self-confident", "tự tin vào bản thân", "Public speaking made him self-confident.", "ADJECTIVE"],
  ["moody", "tâm trạng thay đổi thất thường", "Teenagers can be moody.", "ADJECTIVE"],
  ["trustworthy", "xứng đáng để tin tưởng", "Choose a trustworthy partner.", "ADJECTIVE"],
]);

const U12_WORDS = wordList([
  ["frustrated", "bực bội vì việc không như ý", "I felt frustrated with the slow internet.", "ADJECTIVE"],
  ["relieved", "nhẹ nhõm sau khi hết lo", "She was relieved after the exam.", "ADJECTIVE"],
  ["overwhelmed", "quá tải vì quá nhiều việc/cảm xúc", "He felt overwhelmed on the first day.", "ADJECTIVE"],
  ["anxious", "lo âu kéo dài", "I get anxious before presentations.", "ADJECTIVE"],
  ["guilty", "cảm thấy có lỗi", "She felt guilty for being late.", "ADJECTIVE"],
  ["ashamed", "xấu hổ vì điều đã làm", "He was ashamed of his rude comment.", "ADJECTIVE"],
  ["grateful", "biết ơn sâu sắc", "I am grateful for your guidance.", "ADJECTIVE"],
  ["homesick", "nhớ nhà khi đi xa", "Many students feel homesick abroad.", "ADJECTIVE"],
  ["jealous", "ghen tị với thành công của người khác", "He was jealous of her promotion.", "ADJECTIVE"],
  ["irritated", "khó chịu nhẹ vì điều lặp lại", "I was irritated by the noise.", "ADJECTIVE"],
  ["thrilled", "rất phấn khích và vui", "They were thrilled with the result.", "ADJECTIVE"],
  ["heartbroken", "đau lòng sâu sắc", "She felt heartbroken after the breakup.", "ADJECTIVE"],
  ["be in a mood", "đang trong tâm trạng không ổn", "Don't argue with him; he is in a mood.", "VERB"],
  ["cheer up", "vui lên, phấn chấn lại", "A short walk can cheer you up.", "VERB"],
  ["calm oneself", "tự trấn tĩnh cảm xúc", "Take deep breaths to calm yourself.", "VERB"],
  ["bottle up feelings", "kìm nén cảm xúc bên trong", "Do not bottle up your feelings.", "VERB"],
  ["emotional resilience", "khả năng phục hồi cảm xúc", "Sleep improves emotional resilience."],
  ["mood swing", "sự thay đổi tâm trạng nhanh", "Stress can cause mood swings."],
]);

const U13_WORDS = wordList([
  ["sibling rivalry", "sự ganh đua giữa anh chị em", "Sibling rivalry is common in childhood."],
  ["household", "những người sống chung một nhà", "Our household has five members."],
  ["stepfather", "cha dượng", "Her stepfather is very supportive."],
  ["stepmother", "mẹ kế", "His stepmother works as a nurse."],
  ["stepbrother", "anh/em trai cùng cha khác mẹ hoặc ngược lại", "I went fishing with my stepbrother."],
  ["stepsister", "chị/em gái cùng cha khác mẹ hoặc ngược lại", "My stepsister studies architecture."],
  ["in-laws", "họ hàng bên vợ/chồng", "We visit my in-laws every New Year."],
  ["godparent", "người đỡ đầu tinh thần", "Her godparent sent a birthday gift."],
  ["best mate", "bạn thân rất hợp tính", "He has been my best mate since school."],
  ["childhood friend", "bạn chơi từ nhỏ", "I met a childhood friend last month."],
  ["flatmate", "bạn cùng căn hộ", "My flatmate cooks dinner on Fridays."],
  ["close-knit", "gắn bó khăng khít", "They are a close-knit family.", "ADJECTIVE"],
  ["drift apart", "dần xa cách theo thời gian", "Some classmates drift apart after graduation.", "VERB"],
  ["stay in touch", "giữ liên lạc thường xuyên", "We stay in touch by video call.", "VERB"],
  ["fall out", "cãi nhau và mất hòa khí", "The brothers fell out over money.", "VERB"],
  ["make up", "làm hòa sau tranh cãi", "They made up the next day.", "VERB"],
  ["support network", "mạng lưới người thân/bạn bè hỗ trợ", "A strong support network reduces stress."],
  ["family gathering", "buổi họp mặt gia đình", "Our family gathering is next weekend."],
]);

const U14_WORDS = wordList([
  ["toddler", "trẻ chập chững biết đi", "The toddler can already say simple words."],
  ["adolescence", "giai đoạn tuổi dậy thì", "Adolescence is a period of big changes."],
  ["milestone", "cột mốc phát triển quan trọng", "Graduation is a major milestone."],
  ["puberty", "tuổi dậy thì về mặt sinh học", "Puberty begins at different ages."],
  ["peer pressure", "áp lực từ bạn cùng lứa", "Peer pressure can affect decisions."],
  ["role model", "hình mẫu để noi theo", "My sister is my role model."],
  ["independence", "tính tự lập", "Part-time jobs teach independence."],
  ["responsibility", "trách nhiệm với việc được giao", "Teenagers need more responsibility."],
  ["rebellious", "nổi loạn, thích chống đối", "He was rebellious in high school.", "ADJECTIVE"],
  ["mature", "trưởng thành trong suy nghĩ", "She is mature for her age.", "ADJECTIVE"],
  ["immature", "thiếu chín chắn", "That joke was immature.", "ADJECTIVE"],
  ["be grounded", "bị cấm ra ngoài như một hình phạt", "He was grounded for a week.", "VERB"],
  ["come of age", "đến tuổi trưởng thành", "In many cultures, 18 is when you come of age.", "VERB"],
  ["look back on", "nhìn lại một giai đoạn đã qua", "I look back on my school years warmly.", "VERB"],
  ["settle into", "thích nghi dần với môi trường mới", "She settled into college life quickly.", "VERB"],
  ["life stage", "chặng đời với đặc điểm riêng", "Each life stage brings new lessons."],
  ["generation gap", "khoảng cách khác biệt giữa các thế hệ", "Technology widens the generation gap."],
  ["turning point", "bước ngoặt thay đổi hướng đi", "Moving abroad was a turning point."],
]);

const U15_WORDS = wordList([
  ["crush", "cảm nắng, thích thầm ai đó", "He had a crush on his classmate."],
  ["date", "buổi hẹn hò", "They went on a first date."],
  ["commitment", "sự cam kết lâu dài trong quan hệ", "Trust is the base of commitment."],
  ["engagement ring", "nhẫn đính hôn", "She showed us her engagement ring."],
  ["wedding vows", "lời thề trong lễ cưới", "They wrote personal wedding vows."],
  ["newlyweds", "cặp vợ chồng mới cưới", "The newlyweds moved to Da Nang."],
  ["honeymoon", "kỳ trăng mật sau cưới", "They spent their honeymoon in Bali."],
  ["compatible", "hợp nhau về tính cách/lối sống", "They are highly compatible.", "ADJECTIVE"],
  ["long-distance relationship", "mối quan hệ yêu xa", "A long-distance relationship needs patience."],
  ["break up", "chia tay trong quan hệ tình cảm", "They broke up peacefully.", "VERB"],
  ["split up", "đường ai nấy đi sau thời gian bên nhau", "The couple split up last year.", "VERB"],
  ["separation", "giai đoạn sống riêng khi hôn nhân rạn nứt", "They announced a trial separation."],
  ["divorce settlement", "thỏa thuận pháp lý khi ly hôn", "The divorce settlement took months."],
  ["co-parenting", "cùng nuôi con sau ly hôn", "Good co-parenting helps children feel secure."],
  ["remarry", "kết hôn lần nữa", "He remarried after five years.", "VERB"],
  ["single parent", "cha/mẹ đơn thân", "She became a single parent at 30."],
  ["relationship advice", "lời khuyên về tình cảm", "He asked for relationship advice from friends."],
  ["mutual respect", "sự tôn trọng lẫn nhau", "Mutual respect keeps a marriage strong."],
]);

export const EVIU_PRE_UNITS_01_15: VocabularyUnit[] = [
  preUnit(1, {
    introVi: "Unit 1 tập trung vào cách học từ mới có chiến lược thay vì học vẹt. Bạn sẽ luyện cách nhớ sâu qua ngữ cảnh, cụm từ và tự kiểm tra.",
    structureSections: [
      { label: "Learning strategies", wordCount: 7 },
      { label: "Memory and review", wordCount: 6 },
      { label: "Meaning relationships", wordCount: 5 },
    ],
    collocationHtml: `${purple("active recall")}, ${purple("spaced repetition")} và ${purple("word family")} là ba trụ cột để học từ bền.`,
    mistakeHtml: `Tránh học từ rời rạc: đừng chỉ ghi ${bold("term = nghĩa")}; hãy thêm ${bold("context")} và ví dụ dùng thực tế.`,
    principles: [
      {
        title: "Học theo cụm, không học từng từ lẻ",
        body: `Ưu tiên ${purple("chunk")} và ${purple("collocation")} để nói tự nhiên hơn.`,
        examples: [ex("I rely on active recall.", "Tôi dựa vào tự kiểm tra chủ động."), ex("Learn this phrase as a chunk.", "Hãy học cụm này như một khối.")],
      },
      {
        title: "Lập chu kỳ ôn tập cố định",
        body: `Dùng ${purple("spaced repetition")} để kéo dài ${purple("retention")}.`,
        examples: [ex("I revise on day 1, 3 and 7.", "Tôi ôn vào ngày 1, 3 và 7."), ex("Weekly self-tests improve recall.", "Tự kiểm tra hằng tuần giúp nhớ tốt hơn.")],
      },
      {
        title: "Luôn gắn nghĩa với ngữ cảnh",
        body: `Một từ sẽ nhớ lâu hơn nếu xuất hiện trong ${purple("context")} thật.`,
        examples: [ex("This collocation appears in business emails.", "Cụm này thường xuất hiện trong email công việc.")],
      },
    ],
    words: U1_WORDS,
    exercises: [
      mcq(
        1,
        1,
        "Phương pháp nào nhấn mạnh việc tự gợi nhớ thay vì chỉ đọc lại?",
        [
          { key: "a", label: "active recall" },
          { key: "b", label: "semantic map" },
          { key: "c", label: "usage note" },
          { key: "d", label: "register" },
        ],
        "a",
      ),
      fillBlank(
        1,
        2,
        "Learning phrases in ____ helps me use them naturally.",
        "context",
        [
          { key: "a", label: "retention" },
          { key: "b", label: "context" },
          { key: "c", label: "drill" },
          { key: "d", label: "antonym" },
        ],
        "b",
        ["in context"],
      ),
      mcq(
        1,
        3,
        "Từ nào chỉ nhóm từ cùng gốc (noun/verb/adjective)?",
        [
          { key: "a", label: "word family" },
          { key: "b", label: "mnemonic" },
          { key: "c", label: "self-test" },
          { key: "d", label: "register" },
        ],
        "a",
      ),
    ],
  }),
  preUnit(2, {
    introVi: "Unit 2 giúp bạn xây sổ tay từ vựng hiệu quả để ôn nhanh và dễ tra lại. Trọng tâm là bố cục rõ ràng, có nhãn, có ví dụ và có lịch review.",
    structureSections: [
      { label: "Notebook structure", wordCount: 6 },
      { label: "Entry details", wordCount: 6 },
      { label: "Review workflow", wordCount: 6 },
    ],
    collocationHtml: `${purple("review cycle")}, ${purple("error log")}, ${purple("cross-reference")} giúp notebook thành hệ thống học thật sự.`,
    mistakeHtml: `Nhiều bạn ghi quá dài; hãy dùng ${bold("translation hint")} ngắn và ${bold("sample sentence")} rõ tình huống.`,
    principles: [
      {
        title: "Thiết kế một mẫu ghi chép cố định",
        body: `Mỗi mục nên có ${purple("headword")}, từ loại, ví dụ và ghi chú dùng từ.`,
        examples: [ex("I follow one template for every entry.", "Tôi dùng một mẫu chung cho mọi mục từ.")],
      },
      {
        title: "Dùng ký hiệu để tiết kiệm thời gian",
        body: `Kết hợp ${purple("tag")} và ${purple("symbol")} để quét lại nhanh.`,
        examples: [ex("A red tag means difficult item.", "Nhãn đỏ nghĩa là mục khó."), ex("I highlight common collocations.", "Tôi tô nổi các cụm phổ biến.")],
      },
      {
        title: "Theo dõi lỗi để cải thiện thật",
        body: `Giữ ${purple("error log")} riêng để tránh lặp lại lỗi cũ.`,
        examples: [ex("My error log shows repeated preposition mistakes.", "Sổ lỗi cho thấy tôi hay sai giới từ.")],
      },
    ],
    words: U2_WORDS,
    exercises: [
      mcq(
        2,
        1,
        "Mục nào phù hợp nhất để ghi lỗi hay lặp lại?",
        [
          { key: "a", label: "topic page" },
          { key: "b", label: "error log" },
          { key: "c", label: "index tab" },
          { key: "d", label: "abbreviation" },
        ],
        "b",
      ),
      fillBlank(
        2,
        2,
        "Use a clear ____ so every vocabulary entry has the same structure.",
        "template",
        [
          { key: "a", label: "template" },
          { key: "b", label: "symbol" },
          { key: "c", label: "review cycle" },
          { key: "d", label: "cross-reference" },
        ],
        "a",
      ),
      mcq(
        2,
        3,
        "Từ nào nghĩa là liên kết một mục sang mục liên quan khác?",
        [
          { key: "a", label: "annotate" },
          { key: "b", label: "cross-reference" },
          { key: "c", label: "categorise" },
          { key: "d", label: "highlight" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(3, {
    introVi: "Unit 3 hướng dẫn khai thác từ điển thông minh thay vì chỉ tra nghĩa rồi bỏ qua. Bạn sẽ đọc được phiên âm, nhãn dùng từ và ví dụ chuẩn.",
    structureSections: [
      { label: "Dictionary types", wordCount: 6 },
      { label: "Entry information", wordCount: 7 },
      { label: "Lookup skills", wordCount: 5 },
    ],
    collocationHtml: `${purple("monolingual dictionary")}, ${purple("stress mark")} và ${purple("usage example")} là chìa khóa khi tra từ.`,
    mistakeHtml: `Không nên dừng ở nghĩa đầu tiên; hãy ${bold("compare senses")} để chọn nghĩa đúng ngữ cảnh.`,
    principles: [
      {
        title: "Đọc đủ thông tin trong một mục từ",
        body: `Luôn kiểm tra ${purple("part-of-speech label")}, phát âm và ví dụ.`,
        examples: [ex("The stress mark changes pronunciation.", "Dấu trọng âm làm thay đổi cách phát âm.")],
      },
      {
        title: "Ưu tiên ví dụ thật trước khi dùng từ",
        body: `${purple("usage example")} cho bạn mẫu câu tự nhiên, tránh dịch từng chữ.`,
        examples: [ex("I copied two examples into my notes.", "Tôi chép hai ví dụ vào sổ.")],
      },
      {
        title: "Kết hợp tra nhanh và đọc sâu",
        body: `Dùng ${purple("lookup")} khi cần gấp, sau đó ${purple("browse")} để mở rộng vốn từ.`,
        examples: [ex("Quick lookup solved the sentence.", "Tra nhanh giúp tôi hiểu câu."), ex("I browsed related entries later.", "Sau đó tôi xem thêm các mục liên quan.")],
      },
    ],
    words: U3_WORDS,
    exercises: [
      mcq(
        3,
        1,
        "Nếu muốn hiểu sâu bằng tiếng Anh, nên dùng loại từ điển nào?",
        [
          { key: "a", label: "bilingual dictionary" },
          { key: "b", label: "monolingual dictionary" },
          { key: "c", label: "dictionary app" },
          { key: "d", label: "entry guide" },
        ],
        "b",
      ),
      fillBlank(
        3,
        2,
        "Check the ____ to know where to stress the word.",
        "stress mark",
        [
          { key: "a", label: "stress mark" },
          { key: "b", label: "lookup" },
          { key: "c", label: "idiom" },
          { key: "d", label: "etymology" },
        ],
        "a",
      ),
      mcq(
        3,
        3,
        "Hành động nào nghĩa là so sánh các nét nghĩa khác nhau của một từ?",
        [
          { key: "a", label: "browse" },
          { key: "b", label: "compare senses" },
          { key: "c", label: "lookup" },
          { key: "d", label: "verify meaning" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(4, {
    introVi: "Unit 4 mở rộng bộ từ mô tả chính ngôn ngữ tiếng Anh: âm, từ, câu và phong cách. Đây là nền quan trọng để học ngôn ngữ bài bản hơn.",
    structureSections: [
      { label: "Language terms", wordCount: 7 },
      { label: "Speech and sound", wordCount: 6 },
      { label: "Usage and style", wordCount: 5 },
    ],
    collocationHtml: `${purple("mother tongue")}, ${purple("second language")}, ${purple("plain English")} giúp bạn nói về ngôn ngữ chính xác.`,
    mistakeHtml: `Đừng nhầm ${bold("accent")} với ${bold("dialect")}: accent là cách phát âm, dialect còn khác cả từ vựng và cấu trúc.`,
    principles: [
      {
        title: "Nắm thuật ngữ lõi để tự học hiệu quả",
        body: `Hiểu ${purple("clause")}, ${purple("register")} hay ${purple("intonation")} giúp đọc tài liệu dễ hơn.`,
        examples: [ex("This sentence has two clauses.", "Câu này có hai mệnh đề.")],
      },
      {
        title: "Phân biệt kỹ năng giao tiếp và độ chính xác",
        body: `${purple("fluency")} và ${purple("accuracy")} cần phát triển song song.`,
        examples: [ex("I speak fluently but need more accuracy.", "Tôi nói trôi chảy nhưng cần chính xác hơn.")],
      },
      {
        title: "Ưu tiên diễn đạt rõ ràng",
        body: `Trong nhiều bối cảnh, ${purple("plain English")} hiệu quả hơn từ ngữ phức tạp.`,
        examples: [ex("Use plain English in user guides.", "Hãy dùng tiếng Anh rõ ràng trong hướng dẫn sử dụng.")],
      },
    ],
    words: U4_WORDS,
    exercises: [
      mcq(
        4,
        1,
        "Từ nào chỉ ngôn ngữ mẹ đẻ?",
        [
          { key: "a", label: "second language" },
          { key: "b", label: "mother tongue" },
          { key: "c", label: "loanword" },
          { key: "d", label: "jargon" },
        ],
        "b",
      ),
      fillBlank(
        4,
        2,
        "Good ____ makes your speech easier to follow.",
        "intonation",
        [
          { key: "a", label: "intonation" },
          { key: "b", label: "punctuation" },
          { key: "c", label: "paraphrase" },
          { key: "d", label: "abbreviation style" },
        ],
        "a",
      ),
      mcq(
        4,
        3,
        "Nếu muốn tránh từ chuyên môn khó, bạn nên tránh thứ gì?",
        [
          { key: "a", label: "syllable" },
          { key: "b", label: "jargon" },
          { key: "c", label: "clause" },
          { key: "d", label: "accent" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(5, {
    introVi: "Unit 5 giúp bạn nói về quốc gia, quốc tịch và ngôn ngữ một cách tự nhiên hơn ở trình độ A2. Tập trung vào bối cảnh cư trú, di cư và bản sắc văn hóa.",
    structureSections: [
      { label: "Identity and origin", wordCount: 7 },
      { label: "Language background", wordCount: 5 },
      { label: "Migration and status", wordCount: 6 },
    ],
    collocationHtml: `${purple("official language")}, ${purple("visa status")}, ${purple("cultural heritage")} là các cụm xuất hiện nhiều trong giao tiếp hiện đại.`,
    mistakeHtml: `Phân biệt ${bold("nationality")} (quốc tịch) và ${bold("ethnicity")} (dân tộc) để tránh diễn đạt sai.`,
    principles: [
      {
        title: "Giới thiệu bản thân có chiều sâu",
        body: `Không chỉ nói quốc tịch; có thể thêm ${purple("heritage")} hoặc bối cảnh ngôn ngữ.`,
        examples: [ex("I am Vietnamese, and English is my second language.", "Tôi là người Việt, và tiếng Anh là ngôn ngữ thứ hai của tôi.")],
      },
      {
        title: "Dùng đúng từ về tình trạng cư trú",
        body: `Phân biệt ${purple("resident")}, ${purple("immigrant")} và ${purple("expat")}.`,
        examples: [ex("She became a permanent resident.", "Cô ấy trở thành người cư trú lâu dài.")],
      },
      {
        title: "Nói về ngôn ngữ theo tình huống",
        body: `Dùng ${purple("official language")} cho hành chính, ${purple("regional language")} cho đời sống địa phương.`,
        examples: [ex("They use a regional language at home.", "Họ dùng ngôn ngữ vùng ở nhà.")],
      },
    ],
    words: U5_WORDS,
    exercises: [
      mcq(
        5,
        1,
        "Từ nào mô tả người sống và làm việc ở nước ngoài?",
        [
          { key: "a", label: "resident" },
          { key: "b", label: "expat" },
          { key: "c", label: "native speaker" },
          { key: "d", label: "passport holder" },
        ],
        "b",
      ),
      fillBlank(
        5,
        2,
        "English is an ____ in several countries.",
        "official language",
        [
          { key: "a", label: "ethnic group" },
          { key: "b", label: "official language" },
          { key: "c", label: "global citizen" },
          { key: "d", label: "visa status" },
        ],
        "b",
      ),
      mcq(
        5,
        3,
        "Động từ nào nghĩa là di cư ra nước ngoài để sống?",
        [
          { key: "a", label: "settle down" },
          { key: "b", label: "emigrate" },
          { key: "c", label: "apply" },
          { key: "d", label: "travel" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(6, {
    introVi: "Unit 6 đưa bạn vào bộ từ vựng mô tả thế giới vật chất: địa hình, tài nguyên và môi trường. Đây là nền để đọc tin tức và nói về thiên nhiên chính xác hơn.",
    structureSections: [
      { label: "Landforms and water", wordCount: 7 },
      { label: "Environment terms", wordCount: 6 },
      { label: "Resources and impact", wordCount: 5 },
    ],
    collocationHtml: `${purple("renewable resource")}, ${purple("environmental impact")}, ${purple("conservation area")} là cụm quan trọng của chủ đề.`,
    mistakeHtml: `Tránh nhầm ${bold("weather")} với ${bold("climate")}; weather là ngắn hạn, climate là xu hướng dài hạn.`,
    principles: [
      {
        title: "Nhóm từ theo cảnh quan thực tế",
        body: "Học theo tuyến: núi - thung lũng - sông - bờ biển để dễ tưởng tượng.",
        examples: [ex("A river runs through the valley.", "Một con sông chảy qua thung lũng.")],
      },
      {
        title: "Kết hợp danh từ với hành động môi trường",
        body: `Ghép ${purple("pollute")} với nước/không khí và ${purple("preserve")} với rừng/khu bảo tồn.`,
        examples: [ex("Factories can pollute the river.", "Nhà máy có thể làm ô nhiễm sông."), ex("We should preserve mangrove forests.", "Chúng ta nên bảo tồn rừng ngập mặn.")],
      },
      {
        title: "Nhận diện từ khóa đọc hiểu học thuật nhẹ",
        body: `Các từ như ${purple("ecosystem")} hay ${purple("erosion")} thường gặp trong bài đọc trung cấp.`,
        examples: [ex("Soil erosion damages farmland.", "Xói mòn đất làm hỏng đất nông nghiệp.")],
      },
    ],
    words: U6_WORDS,
    exercises: [
      mcq(
        6,
        1,
        "Từ nào chỉ tài nguyên có thể tái tạo?",
        [
          { key: "a", label: "fossil fuel" },
          { key: "b", label: "mineral" },
          { key: "c", label: "renewable resource" },
          { key: "d", label: "erosion" },
        ],
        "c",
      ),
      fillBlank(
        6,
        2,
        "A protected natural zone is called a ____.",
        "conservation area",
        [
          { key: "a", label: "waterfall" },
          { key: "b", label: "conservation area" },
          { key: "c", label: "terrain" },
          { key: "d", label: "shoreline" },
        ],
        "b",
      ),
      mcq(
        6,
        3,
        "Động từ nào nghĩa là bảo tồn nguyên trạng?",
        [
          { key: "a", label: "pollute" },
          { key: "b", label: "preserve" },
          { key: "c", label: "reduce" },
          { key: "d", label: "change" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(7, {
    introVi: "Unit 7 mở rộng cách nói về thời tiết vượt qua các từ cơ bản như sunny hoặc rainy. Bạn sẽ mô tả được hiện tượng cụ thể và biến động nhiệt độ tự nhiên hơn.",
    structureSections: [
      { label: "Forecast and conditions", wordCount: 7 },
      { label: "Rain, wind, storms", wordCount: 7 },
      { label: "Climate trends", wordCount: 4 },
    ],
    collocationHtml: `${purple("weather forecast")}, ${purple("temperature drop")}, ${purple("lightning strike")} là các cụm xuất hiện thường xuyên.`,
    mistakeHtml: `Dùng ${bold("humid")} để nói không khí ẩm, không dùng nhầm như danh từ; và ${bold("drizzle")} khác ${bold("downpour")} về cường độ mưa.`,
    principles: [
      {
        title: "Mô tả mức độ thay vì chỉ nói mưa/nắng",
        body: `Phân biệt ${purple("drizzle")}, ${purple("downpour")}, ${purple("hail")} để diễn đạt chính xác.`,
        examples: [ex("It was a light drizzle in the morning.", "Buổi sáng chỉ mưa phùn nhẹ."), ex("A downpour flooded the road.", "Một trận mưa xối xả làm ngập đường.")],
      },
      {
        title: "Kết hợp thời tiết với tác động",
        body: "Nói rõ hệ quả như chậm chuyến, mất điện hoặc nhiệt độ giảm.",
        examples: [ex("A thunderstorm delayed our flight.", "Giông bão làm chuyến bay bị hoãn.")],
      },
      {
        title: "Dùng từ thời tiết theo ngữ cảnh địa phương",
        body: `Ví dụ ${purple("mild winter")} hay ${purple("humid summer")} rất tự nhiên trong mô tả vùng khí hậu.`,
        examples: [ex("We have mild winters here.", "Ở đây mùa đông khá ôn hòa.")],
      },
    ],
    words: U7_WORDS,
    exercises: [
      mcq(
        7,
        1,
        "Từ nào diễn tả mưa rất to, xối xả?",
        [
          { key: "a", label: "drizzle" },
          { key: "b", label: "frost" },
          { key: "c", label: "downpour" },
          { key: "d", label: "breeze" },
        ],
        "c",
      ),
      fillBlank(
        7,
        2,
        "The weather ____ predicts strong winds tonight.",
        "forecast",
        [
          { key: "a", label: "pattern" },
          { key: "b", label: "forecast" },
          { key: "c", label: "humidity" },
          { key: "d", label: "temperature drop" },
        ],
        "b",
      ),
      mcq(
        7,
        3,
        "Từ nào chỉ đợt nắng nóng kéo dài?",
        [
          { key: "a", label: "heatwave" },
          { key: "b", label: "cold snap" },
          { key: "c", label: "gust" },
          { key: "d", label: "overcast" },
        ],
        "a",
      ),
    ],
  }),
  preUnit(8, {
    introVi: "Unit 8 cung cấp từ vựng về động vật và côn trùng ở mức mô tả sinh học cơ bản. Bạn có thể nói về môi trường sống, hành vi và bảo tồn rõ ràng hơn.",
    structureSections: [
      { label: "Animal groups", wordCount: 6 },
      { label: "Habitats and behavior", wordCount: 7 },
      { label: "Conservation language", wordCount: 5 },
    ],
    collocationHtml: `${purple("wildlife reserve")}, ${purple("migration route")}, ${purple("endangered species")} là cụm nên học theo cặp.`,
    mistakeHtml: `Đừng nhầm ${bold("venomous")} (có nọc độc) với ${bold("poisonous")} (có độc khi ăn/chạm).`,
    principles: [
      {
        title: "Học theo nhóm sinh học cơ bản",
        body: `Bắt đầu với ${purple("mammal")}, ${purple("reptile")}, ${purple("amphibian")} để tạo khung kiến thức.`,
        examples: [ex("A turtle is a reptile.", "Rùa là động vật bò sát.")],
      },
      {
        title: "Gắn từ với hành vi sống còn",
        body: `Kết hợp ${purple("predator")}, ${purple("prey")}, ${purple("camouflage")} để hiểu bài đọc tự nhiên.`,
        examples: [ex("Camouflage protects prey in the wild.", "Ngụy trang bảo vệ con mồi trong tự nhiên.")],
      },
      {
        title: "Mở rộng sang ngôn ngữ bảo tồn",
        body: `Các từ ${purple("endangered")}, ${purple("biodiversity")} rất hay gặp trong nội dung môi trường.`,
        examples: [ex("Deforestation reduces biodiversity.", "Phá rừng làm giảm đa dạng sinh học.")],
      },
    ],
    words: U8_WORDS,
    exercises: [
      mcq(
        8,
        1,
        "Từ nào nghĩa là nơi bảo tồn động vật hoang dã?",
        [
          { key: "a", label: "hive" },
          { key: "b", label: "wildlife reserve" },
          { key: "c", label: "flock" },
          { key: "d", label: "nesting site" },
        ],
        "b",
      ),
      fillBlank(
        8,
        2,
        "Owls are ____ animals; they are active at night.",
        "nocturnal",
        [
          { key: "a", label: "venomous" },
          { key: "b", label: "endangered" },
          { key: "c", label: "nocturnal" },
          { key: "d", label: "wildlife" },
        ],
        "c",
      ),
      mcq(
        8,
        3,
        "Cụm nào chỉ tuyến đường di cư theo mùa của chim?",
        [
          { key: "a", label: "migration route" },
          { key: "b", label: "nesting site" },
          { key: "c", label: "predator chain" },
          { key: "d", label: "hive map" },
        ],
        "a",
      ),
    ],
  }),
  preUnit(9, {
    introVi: "Unit 9 tập trung vào cơ thể và chuyển động với các từ chính xác hơn mức cơ bản. Bạn sẽ mô tả hoạt động thể chất và chấn thương rõ nghĩa hơn.",
    structureSections: [
      { label: "Body mechanics", wordCount: 7 },
      { label: "Movement verbs", wordCount: 7 },
      { label: "Fitness and function", wordCount: 4 },
    ],
    collocationHtml: `${purple("improve flexibility")}, ${purple("keep your balance")}, ${purple("twist your back")} là cụm thực tế trong đời sống.`,
    mistakeHtml: `Tránh dùng ${bold("run fast")} mọi lúc; trong ngữ cảnh thể thao, ${bold("sprint")} tự nhiên và chính xác hơn.`,
    principles: [
      {
        title: "Phân biệt bộ phận và chức năng",
        body: `Học cặp như ${purple("joint")} - cử động, ${purple("ligament")} - ổn định khớp.`,
        examples: [ex("The ligament supports the knee joint.", "Dây chằng hỗ trợ khớp gối.")],
      },
      {
        title: "Dùng động từ chuyển động đúng sắc thái",
        body: `${purple("jog")} nhẹ nhàng, ${purple("sprint")} rất nhanh, ${purple("stumble")} là vấp.`,
        examples: [ex("I jog before work.", "Tôi chạy bộ nhẹ trước giờ làm."), ex("He stumbled on a wet floor.", "Anh ấy vấp trên nền ướt.")],
      },
      {
        title: "Kết nối với thói quen vận động",
        body: `Các từ như ${purple("mobility")} hay ${purple("coordination")} thường dùng trong chăm sóc sức khỏe.`,
        examples: [ex("Stretching supports mobility in old age.", "Duỗi cơ giúp duy trì khả năng vận động khi lớn tuổi.")],
      },
    ],
    words: U9_WORDS,
    exercises: [
      mcq(
        9,
        1,
        "Từ nào chỉ khả năng giữ thăng bằng?",
        [
          { key: "a", label: "balance" },
          { key: "b", label: "coordination" },
          { key: "c", label: "posture" },
          { key: "d", label: "tendon" },
        ],
        "a",
      ),
      fillBlank(
        9,
        2,
        "The baby started to ____ at eight months old.",
        "crawl",
        [
          { key: "a", label: "sprint" },
          { key: "b", label: "reach" },
          { key: "c", label: "crawl" },
          { key: "d", label: "twist" },
        ],
        "c",
      ),
      mcq(
        9,
        3,
        "Từ nào là dây chằng giúp ổn định khớp?",
        [
          { key: "a", label: "muscle" },
          { key: "b", label: "joint" },
          { key: "c", label: "ligament" },
          { key: "d", label: "stride" },
        ],
        "c",
      ),
    ],
  }),
  preUnit(10, {
    introVi: "Unit 10 giúp bạn mô tả ngoại hình chi tiết và tinh tế hơn, phù hợp giao tiếp đời thường lẫn mô tả nhân vật. Từ vựng chú trọng nét mặt, vóc dáng và phong cách.",
    structureSections: [
      { label: "Face and skin", wordCount: 6 },
      { label: "Build and style", wordCount: 7 },
      { label: "Overall impression", wordCount: 5 },
    ],
    collocationHtml: `${purple("facial features")}, ${purple("smartly dressed")}, ${purple("distinctive look")} là các cụm mô tả rất tự nhiên.`,
    mistakeHtml: `Khi mô tả người, ưu tiên từ trung tính như ${bold("well-built")} hoặc ${bold("slender")} thay vì từ dễ gây khó chịu.`,
    principles: [
      {
        title: "Mô tả từ chi tiết đến tổng thể",
        body: `Đi từ ${purple("complexion")} và tóc đến vóc dáng rồi phong cách.`,
        examples: [ex("She has clear skin and a neat fringe.", "Cô ấy có làn da sáng và mái tóc cắt gọn.")],
      },
      {
        title: "Giữ cách diễn đạt lịch sự",
        body: "Dùng tính từ trung tính, tránh từ đánh giá nặng nề.",
        examples: [ex("He is broad-shouldered and well-built.", "Anh ấy vai rộng và thân hình cân đối.")],
      },
      {
        title: "Bổ sung dấu hiệu nhận diện",
        body: `Các cụm như ${purple("noticeable scar")} hay ${purple("distinctive look")} giúp mô tả chính xác.`,
        examples: [ex("She has a distinctive look.", "Cô ấy có diện mạo rất dễ nhận ra.")],
      },
    ],
    words: U10_WORDS,
    exercises: [
      mcq(
        10,
        1,
        "Từ nào chỉ nước da tổng thể của một người?",
        [
          { key: "a", label: "complexion" },
          { key: "b", label: "fringe" },
          { key: "c", label: "hairstyle" },
          { key: "d", label: "build" },
        ],
        "a",
      ),
      fillBlank(
        10,
        2,
        "Everyone was ____ for the company event.",
        "smartly dressed",
        [
          { key: "a", label: "scruffy" },
          { key: "b", label: "smartly dressed" },
          { key: "c", label: "curly-haired" },
          { key: "d", label: "well-built" },
        ],
        "b",
      ),
      mcq(
        10,
        3,
        "Từ nào mô tả vẻ ngoài lôi thôi, thiếu chỉn chu?",
        [
          { key: "a", label: "elegant" },
          { key: "b", label: "slender" },
          { key: "c", label: "scruffy" },
          { key: "d", label: "casual" },
        ],
        "c",
      ),
    ],
  }),
  preUnit(11, {
    introVi: "Unit 11 mở rộng vốn từ mô tả tính cách và hành vi trong nhiều bối cảnh xã hội. Bạn sẽ học cách nói nhận xét người khác vừa chính xác vừa lịch sự.",
    structureSections: [
      { label: "Positive traits", wordCount: 7 },
      { label: "Neutral or mixed traits", wordCount: 6 },
      { label: "Social interaction style", wordCount: 5 },
    ],
    collocationHtml: `${purple("open-minded attitude")}, ${purple("reliable colleague")}, ${purple("assertive communication")} thường gặp trong học tập và công việc.`,
    mistakeHtml: `Không nên gắn nhãn con người quá cứng; dùng trạng từ giảm nhẹ như ${bold("a bit")} hoặc ${bold("sometimes")} khi nhận xét.`,
    principles: [
      {
        title: "Phân biệt tính cách và tâm trạng tạm thời",
        body: `${purple("moody")} có thể nhất thời, còn ${purple("reliable")} là nét tính cách ổn định.`,
        examples: [ex("She is reliable at work.", "Cô ấy đáng tin trong công việc."), ex("He is moody today.", "Hôm nay anh ấy hơi thất thường.")],
      },
      {
        title: "Dùng từ theo mức độ phù hợp ngữ cảnh",
        body: `Trong môi trường chuyên nghiệp, ưu tiên ${purple("assertive")} thay vì mô tả quá cảm tính.`,
        examples: [ex("Be assertive, not aggressive.", "Hãy quyết đoán, không gây hấn.")],
      },
      {
        title: "Kết hợp điểm mạnh và điểm cần cải thiện",
        body: "Mẫu cân bằng giúp nhận xét công bằng hơn.",
        examples: [ex("He is ambitious but considerate.", "Anh ấy tham vọng nhưng biết nghĩ cho người khác.")],
      },
    ],
    words: U11_WORDS,
    exercises: [
      mcq(
        11,
        1,
        "Từ nào nghĩa là đáng tin cậy?",
        [
          { key: "a", label: "impulsive" },
          { key: "b", label: "reliable" },
          { key: "c", label: "moody" },
          { key: "d", label: "stubborn" },
        ],
        "b",
      ),
      fillBlank(
        11,
        2,
        "A good listener is often very ____.",
        "empathetic",
        [
          { key: "a", label: "reserved" },
          { key: "b", label: "impulsive" },
          { key: "c", label: "empathetic" },
          { key: "d", label: "rebellious" },
        ],
        "c",
      ),
      mcq(
        11,
        3,
        "Từ nào diễn tả người dễ bốc đồng?",
        [
          { key: "a", label: "considerate" },
          { key: "b", label: "self-disciplined" },
          { key: "c", label: "impulsive" },
          { key: "d", label: "trustworthy" },
        ],
        "c",
      ),
    ],
  }),
  preUnit(12, {
    introVi: "Unit 12 giúp bạn diễn tả cảm xúc đa dạng hơn ngoài happy/sad. Bạn sẽ dùng được từ mô tả mức độ, nguyên nhân và cách ứng xử với cảm xúc.",
    structureSections: [
      { label: "Challenging emotions", wordCount: 7 },
      { label: "Positive or recovery emotions", wordCount: 6 },
      { label: "Emotional actions", wordCount: 5 },
    ],
    collocationHtml: `${purple("feel overwhelmed")}, ${purple("emotional resilience")}, ${purple("mood swing")} là cụm dùng nhiều trong hội thoại hiện đại.`,
    mistakeHtml: `Tránh dùng chung một từ cho mọi tình huống; ${bold("frustrated")}, ${bold("anxious")} và ${bold("guilty")} có sắc thái khác nhau.`,
    principles: [
      {
        title: "Chọn từ đúng mức độ cảm xúc",
        body: `${purple("irritated")} nhẹ hơn ${purple("furious")}; ${purple("anxious")} thiên về lo âu kéo dài.`,
        examples: [ex("I feel anxious before interviews.", "Tôi lo âu trước buổi phỏng vấn.")],
      },
      {
        title: "Dùng cụm động từ để nói cách xử lý",
        body: `Các cụm như ${purple("cheer up")} hay ${purple("calm oneself")} rất hữu ích khi phản hồi người khác.`,
        examples: [ex("Take a break to calm yourself.", "Hãy nghỉ một chút để tự trấn tĩnh.")],
      },
      {
        title: "Nói về sức bền cảm xúc tích cực",
        body: `${purple("emotional resilience")} là từ hay trong bối cảnh học tập và công việc.`,
        examples: [ex("Exercise can build emotional resilience.", "Tập thể dục có thể tăng sức bền cảm xúc.")],
      },
    ],
    words: U12_WORDS,
    exercises: [
      mcq(
        12,
        1,
        "Từ nào diễn tả cảm giác nhẹ nhõm sau khi hết lo?",
        [
          { key: "a", label: "guilty" },
          { key: "b", label: "relieved" },
          { key: "c", label: "jealous" },
          { key: "d", label: "ashamed" },
        ],
        "b",
      ),
      fillBlank(
        12,
        2,
        "Don't ____ your feelings; talk to someone you trust.",
        "bottle up feelings",
        [
          { key: "a", label: "cheer up" },
          { key: "b", label: "bottle up feelings" },
          { key: "c", label: "calm oneself" },
          { key: "d", label: "be in a mood" },
        ],
        "b",
      ),
      mcq(
        12,
        3,
        "Cụm nào chỉ việc tâm trạng thay đổi thất thường?",
        [
          { key: "a", label: "emotional resilience" },
          { key: "b", label: "mood swing" },
          { key: "c", label: "homesick" },
          { key: "d", label: "heartbroken" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(13, {
    introVi: "Unit 13 tập trung vào quan hệ gia đình và bạn bè ở mức chi tiết hơn cơ bản. Bạn sẽ học được cả từ chỉ quan hệ mới trong gia đình hiện đại lẫn động từ mô tả mối quan hệ.",
    structureSections: [
      { label: "Family roles", wordCount: 7 },
      { label: "Friendship terms", wordCount: 5 },
      { label: "Relationship dynamics", wordCount: 6 },
    ],
    collocationHtml: `${purple("close-knit family")}, ${purple("stay in touch")}, ${purple("support network")} là cụm diễn đạt quan hệ rất tự nhiên.`,
    mistakeHtml: `Không nên dịch cứng "friend from childhood"; cụm đúng, tự nhiên là ${bold("childhood friend")}.`,
    principles: [
      {
        title: "Mở rộng từ vựng quan hệ gia đình hiện đại",
        body: `Nhóm từ ${purple("stepfather")}, ${purple("stepsister")} phản ánh cấu trúc gia đình đa dạng.`,
        examples: [ex("My stepsister moved in last year.", "Em gái cùng cha khác mẹ chuyển tới năm ngoái.")],
      },
      {
        title: "Dùng cụm động từ để nói trạng thái quan hệ",
        body: `${purple("fall out")} là cãi nhau, ${purple("make up")} là làm hòa.`,
        examples: [ex("They fell out over a small issue.", "Họ cãi nhau vì một chuyện nhỏ."), ex("They made up quickly.", "Họ nhanh chóng làm hòa.")],
      },
      {
        title: "Nhấn vai trò hỗ trợ xã hội",
        body: `${purple("support network")} giúp nói về sức khỏe tinh thần và cộng đồng.`,
        examples: [ex("Friends are part of my support network.", "Bạn bè là một phần mạng lưới hỗ trợ của tôi.")],
      },
    ],
    words: U13_WORDS,
    exercises: [
      mcq(
        13,
        1,
        "Từ nào nghĩa là bạn thân rất hợp tính?",
        [
          { key: "a", label: "flatmate" },
          { key: "b", label: "best mate" },
          { key: "c", label: "godparent" },
          { key: "d", label: "in-laws" },
        ],
        "b",
      ),
      fillBlank(
        13,
        2,
        "Even after graduation, we still ____ by message.",
        "stay in touch",
        [
          { key: "a", label: "drift apart" },
          { key: "b", label: "stay in touch" },
          { key: "c", label: "fall out" },
          { key: "d", label: "make up" },
        ],
        "b",
      ),
      mcq(
        13,
        3,
        "Cụm nào nói về mạng lưới người thân/bạn bè hỗ trợ?",
        [
          { key: "a", label: "family gathering" },
          { key: "b", label: "sibling rivalry" },
          { key: "c", label: "support network" },
          { key: "d", label: "close-knit" },
        ],
        "c",
      ),
    ],
  }),
  preUnit(14, {
    introVi: "Unit 14 nói về quá trình lớn lên từ tuổi nhỏ đến trưởng thành. Từ vựng giúp bạn kể cột mốc đời sống và những thay đổi tâm lý xã hội theo từng giai đoạn.",
    structureSections: [
      { label: "Life stages", wordCount: 6 },
      { label: "Teen development", wordCount: 7 },
      { label: "Growth transitions", wordCount: 5 },
    ],
    collocationHtml: `${purple("peer pressure")}, ${purple("generation gap")}, ${purple("turning point")} là cụm xuất hiện nhiều trong chủ đề trưởng thành.`,
    mistakeHtml: `Phân biệt ${bold("mature")} (chín chắn) với ${bold("old")} (già về tuổi); hai từ không thay thế nhau.`,
    principles: [
      {
        title: "Kể hành trình theo mốc rõ ràng",
        body: `Dùng ${purple("milestone")} và ${purple("turning point")} để cấu trúc câu chuyện phát triển.`,
        examples: [ex("University was a major turning point for me.", "Đại học là bước ngoặt lớn của tôi.")],
      },
      {
        title: "Mô tả áp lực tuổi teen chính xác",
        body: `${purple("peer pressure")} và ${purple("rebellious")} giúp diễn đạt tình huống thực tế.`,
        examples: [ex("Peer pressure influenced his choices.", "Áp lực bạn bè đã ảnh hưởng quyết định của cậu ấy.")],
      },
      {
        title: "Nêu kết quả trưởng thành tích cực",
        body: `Nhấn mạnh ${purple("independence")} và ${purple("responsibility")} để cân bằng câu chuyện.`,
        examples: [ex("Part-time jobs build responsibility.", "Công việc bán thời gian rèn trách nhiệm.")],
      },
    ],
    words: U14_WORDS,
    exercises: [
      mcq(
        14,
        1,
        "Từ nào nghĩa là cột mốc phát triển quan trọng?",
        [
          { key: "a", label: "milestone" },
          { key: "b", label: "adolescence" },
          { key: "c", label: "generation gap" },
          { key: "d", label: "role model" },
        ],
        "a",
      ),
      fillBlank(
        14,
        2,
        "He is more ____ now and can plan his own study schedule.",
        "mature",
        [
          { key: "a", label: "rebellious" },
          { key: "b", label: "immature" },
          { key: "c", label: "mature" },
          { key: "d", label: "grounded" },
        ],
        "c",
      ),
      mcq(
        14,
        3,
        "Cụm nào chỉ khoảng cách khác biệt giữa cha mẹ và con cái?",
        [
          { key: "a", label: "peer pressure" },
          { key: "b", label: "generation gap" },
          { key: "c", label: "life stage" },
          { key: "d", label: "come of age" },
        ],
        "b",
      ),
    ],
  }),
  preUnit(15, {
    introVi: "Unit 15 mở rộng chủ đề tình cảm, hôn nhân và ly hôn với ngôn ngữ trung tính, thực tế. Bạn sẽ nói được về các giai đoạn quan hệ theo cách tự nhiên, tôn trọng.",
    structureSections: [
      { label: "Romance and commitment", wordCount: 7 },
      { label: "Marriage vocabulary", wordCount: 6 },
      { label: "Separation and new start", wordCount: 5 },
    ],
    collocationHtml: `${purple("wedding vows")}, ${purple("mutual respect")}, ${purple("divorce settlement")} là cụm dùng nhiều trong bài đọc và hội thoại.`,
    mistakeHtml: "Dùng ngôn ngữ trung tính khi nói về chia tay hoặc ly hôn; tránh câu đổ lỗi tuyệt đối để giữ giao tiếp lịch sự.",
    principles: [
      {
        title: "Nói về quan hệ theo tiến trình",
        body: `Từ ${purple("crush")} đến ${purple("commitment")} và ${purple("marriage")} tạo mạch thời gian rõ.`,
        examples: [ex("They moved from dating to commitment.", "Họ chuyển từ hẹn hò sang cam kết lâu dài.")],
      },
      {
        title: "Phân biệt từ chỉ trạng thái và sự kiện",
        body: `${purple("separation")} thường là giai đoạn, còn ${purple("divorce settlement")} là bước pháp lý cụ thể.`,
        examples: [ex("They are in a trial separation.", "Họ đang trong giai đoạn sống ly thân thử.")],
      },
      {
        title: "Nhấn mạnh yếu tố tôn trọng và hợp tác",
        body: `Trong bối cảnh gia đình có con, các cụm như ${purple("co-parenting")} rất quan trọng.`,
        examples: [ex("Good co-parenting protects children.", "Cùng nuôi con tốt giúp bảo vệ trẻ.")],
      },
    ],
    words: U15_WORDS,
    exercises: [
      mcq(
        15,
        1,
        "Từ nào chỉ cặp vợ chồng mới cưới?",
        [
          { key: "a", label: "single parent" },
          { key: "b", label: "newlyweds" },
          { key: "c", label: "in-laws" },
          { key: "d", label: "co-parenting" },
        ],
        "b",
      ),
      fillBlank(
        15,
        2,
        "After the wedding, they went on a ____ in Thailand.",
        "honeymoon",
        [
          { key: "a", label: "separation" },
          { key: "b", label: "honeymoon" },
          { key: "c", label: "date" },
          { key: "d", label: "settlement" },
        ],
        "b",
      ),
      mcq(
        15,
        3,
        "Cụm nào nghĩa là tôn trọng lẫn nhau trong mối quan hệ?",
        [
          { key: "a", label: "relationship advice" },
          { key: "b", label: "mutual respect" },
          { key: "c", label: "long-distance relationship" },
          { key: "d", label: "wedding vows" },
        ],
        "b",
      ),
    ],
  }),
];
