/**
 * Bài sửa lỗi câu — câu sai + đáp án + giải thích.
 * Pattern lấy cảm hứng từ lỗi thường gặp trong bài viết học viên (~band 5.5),
 * chia đều Task 1 / Task 2; câu viết mới (không copy nguyên văn học viên).
 */

export type WritingSuaLoiTask = "task1" | "task2";

export type WritingSuaLoiItem = {
  id: string;
  task: WritingSuaLoiTask;
  /** Câu có lỗi (hiển thị để đọc). */
  sentenceWrong: string;
  /** Câu đúng sau khi sửa. */
  sentenceCorrect: string;
  tip: string;
  explanation: string;
};

export const WRITING_SUA_LOI_ITEMS: readonly WritingSuaLoiItem[] = [
{
    id: "t1-consists-of",
    task: "task1",
    sentenceWrong:
      "Overall, the linear process consists off five main stages, beginning with raw materials and ending with packaging.",
    sentenceCorrect:
      "Overall, the linear process consists of five main stages, beginning with raw materials and ending with packaging.",
    tip: "Check fixed prepositions after common academic verbs and phrases.",
    explanation: "Cụm cố định là consists of, không phải consists off.",
  },
{
    id: "t2-guide-not-guild",
    task: "task2",
    sentenceWrong:
      "This is because teachers, who are trained professionals, guild students through complex ideas.",
    sentenceCorrect:
      "This is because teachers, who are trained professionals, guide students through complex ideas.",
    tip: "Check verbs that are easy to misspell by sound.",
    explanation: "Động từ đúng là guide, không phải guild.",
  },
{
    id: "t1-double-article",
    task: "task1",
    sentenceWrong:
      "Next, the cold liquid flows through an the geothermal zone which contains hot rocks.",
    sentenceCorrect:
      "Next, the cold liquid flows through the geothermal zone which contains hot rocks.",
    tip: "Do not use two articles together (a/an + the).",
    explanation: "Không dùng an the cùng lúc; zone đã xác định → the geothermal zone.",
  },
{
    id: "t2-comma-as-a-result",
    task: "task2",
    sentenceWrong:
      "As a result students are able to understand subjects more effectively than when learning alone online.",
    sentenceCorrect:
      "As a result, students are able to understand subjects more effectively than when learning alone online.",
    tip: "Put a comma after sentence connectors like As a result / However / Therefore.",
    explanation: "As a result đứng đầu câu → cần dấu phẩy.",
  },
{
    id: "t1-steam-not-stream",
    task: "task1",
    sentenceWrong:
      "Following this, the hot liquid is rapidly converted to stream before being conveyed to a turbine.",
    sentenceCorrect:
      "Following this, the hot liquid is rapidly converted to steam before being conveyed to a turbine.",
    tip: "Watch look-alike words that change meaning completely.",
    explanation: "Hơi nước là steam, không phải stream (dòng chảy).",
  },
{
    id: "t2-on-the-other-hand",
    task: "task2",
    sentenceWrong:
      "On another hand, the Internet is easy to access and can provide information on almost any topic.",
    sentenceCorrect:
      "On the other hand, the Internet is easy to access and can provide information on almost any topic.",
    tip: "Use the fixed contrast phrase On the other hand.",
    explanation: "Cụm chuẩn là On the other hand, không phải On another hand.",
  },
{
    id: "t1-word-order-then",
    task: "task1",
    sentenceWrong: "By these rocks, water then is heated before being pumped to the surface.",
    sentenceCorrect: "By these rocks, water is then heated before being pumped to the surface.",
    tip: "In passive sentences, place then after the verb be.",
    explanation: "Bị động: is then heated, không phải then is heated.",
  },
{
    id: "t2-children-possessive",
    task: "task2",
    sentenceWrong:
      "Schools play a key role in building knowledge and creating a positive environment for children development.",
    sentenceCorrect:
      "Schools play a key role in building knowledge and creating a positive environment for children's development.",
    tip: "Use a possessive form before a noun that belongs to someone.",
    explanation: "Cần children's development (sở hữu cách).",
  },
{
    id: "t1-pumped-up-to",
    task: "task1",
    sentenceWrong:
      "Once contained in the production well, hot water is pumped up the surface through a pipe.",
    sentenceCorrect:
      "Once contained in the production well, hot water is pumped up to the surface through a pipe.",
    tip: "Check direction prepositions with verbs of movement.",
    explanation: "Cần to: pumped up to the surface.",
  },
{
    id: "t2-while-fragment",
    task: "task2",
    sentenceWrong:
      "While education in schools built clear knowledge structures for children over time.",
    sentenceCorrect:
      "While education in schools builds clear knowledge structures for children over time, online sources are often fragmented.",
    tip: "A clause starting with While needs a complete main clause.",
    explanation: "While… chỉ là mệnh đề phụ; phải có mệnh đề chính đi kèm.",
  },
{
    id: "t1-sva-packages",
    task: "task1",
    sentenceWrong:
      "Finally, the smoked fish packages is frozen at around 0 degrees Celsius before storage.",
    sentenceCorrect:
      "Finally, the smoked fish packages are frozen at around 0 degrees Celsius before storage.",
    tip: "Match the verb to the real subject, not the nearest noun.",
    explanation: "packages số nhiều → are frozen.",
  },
{
    id: "t2-teamwork",
    task: "task2",
    sentenceWrong:
      "In the long term, students can enhance practical competences such as communication skill and working team.",
    sentenceCorrect:
      "In the long term, students can enhance practical competences such as communication skills and teamwork.",
    tip: "Use natural academic collocations, not word-by-word translations.",
    explanation: "Dùng teamwork và thường communication skills (số nhiều).",
  },
{
    id: "t1-frozen-not-freezed",
    task: "task1",
    sentenceWrong: "After packaging, the products are freezed again and kept in cold storage.",
    sentenceCorrect: "After packaging, the products are frozen again and kept in cold storage.",
    tip: "Irregular verbs keep a special past participle in the passive.",
    explanation: "Quá khứ phân từ của freeze là frozen, không phải freezed.",
  },
{
    id: "t2-affect-not-attack",
    task: "task2",
    sentenceWrong:
      "Children should not believe online information completely because wrong knowledge can attack their awareness.",
    sentenceCorrect:
      "Children should not believe online information completely because wrong knowledge can affect their understanding.",
    tip: "Choose verbs that fit abstract academic meanings.",
    explanation: "Affect + understanding tự nhiên hơn attack + awareness.",
  },
{
    id: "t1-how-passive",
    task: "task1",
    sentenceWrong: "The illustration demonstrates how to smoked fish are manufactured.",
    sentenceCorrect: "The illustration demonstrates how smoked fish are manufactured.",
    tip: "After how, use a normal clause — not to + past participle.",
    explanation: "Cấu trúc đúng: how smoked fish are manufactured (không dùng how to smoked…).",
  },
{
    id: "t2-comma-splice",
    task: "task2",
    sentenceWrong:
      "In conclusion, some people argue that individuals should prevent disease, I believe governments must take the lead.",
    sentenceCorrect:
      "In conclusion, some people argue that individuals should prevent disease, but I believe governments must take the lead.",
    tip: "Do not join two full sentences with only a comma.",
    explanation: "Hai mệnh đề độc lập cần but/while/and hoặc tách câu.",
  },
{
    id: "t1-purchased-by",
    task: "task1",
    sentenceWrong: "In these stores, smoked fish are then purchased for customers at the end of the process.",
    sentenceCorrect:
      "In these stores, smoked fish are then purchased by customers at the end of the process.",
    tip: "In the passive, the agent usually takes by, not for.",
    explanation: "Người mua là tác nhân → purchased by customers.",
  },
{
    id: "t2-relative-which",
    task: "task2",
    sentenceWrong:
      "Many cities have introduced congestion charges, that aim to reduce traffic and improve air quality.",
    sentenceCorrect:
      "Many cities have introduced congestion charges, which aim to reduce traffic and improve air quality.",
    tip: "In non-defining relative clauses, use which — not that — after a comma.",
    explanation: "Sau dấu phẩy → which, không dùng that.",
  },
{
    id: "t1-after-being",
    task: "task1",
    sentenceWrong: "After powered by steam, the turbine starts rotating and drives the generator.",
    sentenceCorrect:
      "After being powered by steam, the turbine starts rotating and drives the generator.",
    tip: "After + -ed alone is incomplete; use after being + past participle.",
    explanation: "Cần After being powered… (rút gọn bị động), không chỉ After powered…",
  },
{
    id: "t2-uncountable-research",
    task: "task2",
    sentenceWrong:
      "Although research on this topic have increased in recent years, reliable long-term data remain limited.",
    sentenceCorrect:
      "Although research on this topic has increased in recent years, reliable long-term data remain limited.",
    tip: "Watch uncountable nouns and the verb that follows them.",
    explanation: "Research không đếm được → has increased.",
  },
{
    id: "t1-comma-however",
    task: "task1",
    sentenceWrong:
      "Cellular phone service began at only about 5 million users, however, the figure surged to over 60 million by 2008.",
    sentenceCorrect:
      "Cellular phone service began at only about 5 million users; however, the figure surged to over 60 million by 2008.",
    tip: "However cannot join two full sentences with only commas.",
    explanation:
      "Hai mệnh đề độc lập + however → dùng chấm phẩy/chấm câu trước however, không nối chỉ bằng dấu phẩy.",
  },
{
    id: "t2-government-sva",
    task: "task2",
    sentenceWrong:
      "The government plays a key role in disease prevention since they can increase public awareness through policy.",
    sentenceCorrect:
      "The government plays a key role in disease prevention since it can increase public awareness through policy.",
    tip: "Keep pronoun agreement consistent with the subject you choose.",
    explanation:
      "Nếu dùng The government (số ít) + plays thì đại từ phải là it, không phải they (trừ khi cố ý dùng government như tập thể số nhiều và đổi plays → play).",
  },
{
    id: "t1-same-trend-as",
    task: "task1",
    sentenceWrong:
      "Fixed broadband had the same trend with mobile broadband during the first four years.",
    sentenceCorrect:
      "Fixed broadband had the same trend as mobile broadband during the first four years.",
    tip: "Use the same … as, not the same … with.",
    explanation: "Cụm so sánh đúng là the same trend as, không phải with.",
  },
{
    id: "t2-said-to-say",
    task: "task2",
    sentenceWrong:
      "While some people said that each individual is responsible for disease prevention, I believe governments must lead.",
    sentenceCorrect:
      "While some people say that each individual is responsible for disease prevention, I believe governments must lead.",
    tip: "Use the present simple for general opinions in academic discussion essays.",
    explanation: "Quan điểm chung → say (hiện tại), không dùng said trừ khi kể sự kiện quá khứ cụ thể.",
  },
{
    id: "t1-lowest-number",
    task: "task1",
    sentenceWrong:
      "Despite a slight growth, mobile broadband still remained the lowest user among all communication services.",
    sentenceCorrect:
      "Despite a slight growth, mobile broadband still remained the least used service among all communication categories.",
    tip: "Describe the figure or the service clearly — not “the lowest user”.",
    explanation:
      "“The lowest user” không tự nhiên; nên nói the least used service / the lowest number of users.",
  },
{
    id: "t2-complying-with",
    task: "task2",
    sentenceWrong:
      "Overall, complying regulations and notifications depends on whether public awareness is enhanced.",
    sentenceCorrect:
      "Overall, complying with regulations and notifications depends on whether public awareness is enhanced.",
    tip: "Remember the preposition after comply.",
    explanation: "Cụm đúng là comply with / complying with, không thiếu with.",
  },
{
    id: "t1-to-the-port",
    task: "task1",
    sentenceWrong:
      "Initially, fish are caught offshore, then brought on boats and transported to port.",
    sentenceCorrect:
      "Initially, fish are caught offshore, then brought on boats and transported to the port.",
    tip: "A singular countable noun needs a/an/the, or use a plural form.",
    explanation:
      "Port là danh từ số ít đếm được, nên phải có a/an/the hoặc dùng số nhiều → to the port.",
  },
];
