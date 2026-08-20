import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM16_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["get some ideas together"] },
    { id: "g2", answers: ["the experiment I did"] },
    { id: "g3", answers: ["tell the difference between"] },
    { id: "g4", answers: ["how I'd organise it", "how I would organise it", "how I'd organize it", "how I would organize it"] },
    { id: "g5", answers: ["tell the difference"] },
    { id: "g6", answers: ["they would be able to"] },
    { id: "g7", answers: ["on the packet was accurate"] },
    { id: "g8", answers: ["to absorb the fat"] },
    { id: "g9", answers: ["My results were a bit problematic"] },
    { id: "g10", answers: ["try the experiment again"] },
    { id: "g11", answers: ["helping people to lose weight"] },
    { id: "g12", answers: ["encourage healthy eating"] },
    { id: "g13", answers: ["eat a quarter pizza"] },
    { id: "g14", answers: ["another approach to this problem"] },
    { id: "g15", answers: ["take more exercise"] },
    { id: "g16", answers: ["it all adds up"] },
    { id: "g17", answers: ["quite a bit of reading"] },
    { id: "g18", answers: ["before our next lecture"] },
  ],
  lines: [
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "OK Rosie, shall we try to " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " for our presentation on diet and obesity?" },
      ],
    },
    { speaker: "ROSIE", segments: [{ type: "text", text: "Sure." }] },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "I can talk about " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " to see if people can " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " real sugar and artificial sweeteners." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Where you gave people drinks with either sugar or artificial sweeteners and they had to say which they thought it was?",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "Yeah. It took me ages to decide exactly " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: ", especially how I could make sure that people didn't know which drink I was giving them. It was hard to keep track of it all, especially as I had so many people doing it - I had to make sure I kept a proper record of what each person had had.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "So could most people " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "Yeah - I hadn't thought " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", but most people could." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "Then there's that experiment I did measuring the fat content of nuts, to see if the nutritional information given " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "The one where you ground up the nuts and mixed them with a chemical " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "Yes. " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " - the fat content for that type of nut seemed much lower than it said on the package. But I reckon the package information was right. I think I should probably have ground up the nuts more than I did. It's possible that the scales for weighing the fat weren't accurate enough, too. I'd really like to ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " some time." },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "So what can we say about " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: "? There's a lot we could say about what restaurants could do to reduce obesity. I read that the items at the start of a menu and the items at the end of a menu are much more likely to be chosen than the items in the middle. So, if you put the low-calorie items at the beginning and end of the menu, people will probably go for the food with fewer calories, without even realising what they're doing.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "I think food manufacturers could do more to " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "ADAM", segments: [{ type: "text", text: "How?" }] },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Well, when manufacturers put calorie counts of a food on the label, they're sometimes really confusing and I suspect they do it on purpose. Because food that's high in calories tastes better, and so they'll sell more.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        {
          type: "text",
          text: "Yeah, so if you look at the amount of calories in a pizza, they'll give you the calories per quarter pizza and you think, oh that's not too bad. But who's going to ",
        },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "?" },
      ],
    },
    { speaker: "ROSIE", segments: [{ type: "text", text: "Exactly." }] },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "I suppose " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: " is to get people to exercise more." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Right. In England, the current guidelines are for at least 30 minutes of brisk walking, five days a week. Now when you ask them, about 40% of men and 30% of women say they do this, but when you objectively measure the amount of walking they do with motion sensors, you find that only 6% of men and 4% of women do the recommended amount of exercise.",
        },
      ],
    },
    { speaker: "ADAM", segments: [{ type: "text", text: "Mm, so you can see why obesity is growing." }] },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "So how can people be encouraged to " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        {
          type: "text",
          text: "Well, for example, think of the location of stairs in a train station. If people reach the stairs before they reach the escalator when they're leaving the station, they're more likely to take the stairs. And if you increase the width of the stairs, you'll get more people using them at the same time. It's an unconscious process and influenced by minor modifications in their environment.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Right. And it might not be a big change, but if it happens every day, ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "Yes. But actually, I'm not sure if we should be talking about exercise in our presentation." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        { type: "text", text: "Well, we've done " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: " about it." },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        {
          type: "text",
          text: "I know, but it's going to mean we have a very wide focus, and our tutor did say that we need to focus on causes and solutions in terms of nutrition.",
        },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "I suppose so. And we've got plenty of information about that. OK, well that will be simpler.",
        },
      ],
    },
    {
      speaker: "ADAM",
      segments: [
        { type: "text", text: "So what shall we do now? We've still got half an hour " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ROSIE",
      segments: [
        {
          type: "text",
          text: "Let's think about what we're going to include and what will go where. Then we can decide what slides we need.",
        },
      ],
    },
    { speaker: "ADAM", segments: [{ type: "text", text: "OK, fine." }] },
  ],
};

export const CAM16_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "TWO points about Adam's sweetener experiment: C A large sample of people was tested",
    questionVi: "Hai điểm về thí nghiệm chất ngọt: C mẫu người lớn",
    modelParaphraseEn: "especially as I had so many people doing it - I had to make sure I kept a proper record",
    modelParaphraseVi: "especially as I had so many people doing it - I had to make sure I kept a proper record",
    acceptedAnswers: ["C", "A large sample of people was tested", "so many people"],
    explanationEn: "C = large sample (so many people). Results were not what he predicted; he does not say the test was repeated.",
    explanationVi: "C = mẫu lớn (so many people). Kết quả không như anh đoán; không nói lặp lại bài test.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "(same list) D The subjects were unaware of what they were drinking",
    questionVi: "(cùng danh sách) D người uống không biết mình uống gì",
    modelParaphraseEn: "make sure that people didn't know which drink I was giving them",
    modelParaphraseVi: "make sure that people didn't know which drink I was giving them",
    acceptedAnswers: ["D", "The subjects were unaware of what they were drinking", "didn't know which drink"],
    explanationEn: "D = subjects did not know which drink. Setting it up took ages, so it was not simple.",
    explanationVi: "D = người uống không biết loại đồ uống. Việc sắp xếp mất rất lâu, nên không đơn giản.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "TWO problems measuring fat in nuts: C She did not grind the nuts finely enough",
    questionVi: "Hai vấn đề đo chất béo hạt: C xay hạt chưa đủ mịn",
    modelParaphraseEn: "I should probably have ground up the nuts more than I did",
    modelParaphraseVi: "I should probably have ground up the nuts more than I did",
    acceptedAnswers: ["C", "She did not grind the nuts finely enough", "ground up the nuts more"],
    explanationEn: "C = not ground finely enough. She thinks the package information was right, not wrong.",
    explanationVi: "C = xay chưa đủ mịn. Cô cho rằng thông tin trên bao bì đúng, không sai.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "(same list) E The weighing scales may have been unsuitable",
    questionVi: "(cùng danh sách) E cân có thể không phù hợp",
    modelParaphraseEn: "It's possible that the scales for weighing the fat weren't accurate enough, too",
    modelParaphraseVi: "It's possible that the scales for weighing the fat weren't accurate enough, too",
    acceptedAnswers: ["E", "The weighing scales may have been unsuitable", "scales … weren't accurate enough"],
    explanationEn: "E = scales may not have been accurate enough. The chemical method itself is not blamed.",
    explanationVi: "E = cân có thể không đủ chính xác. Không đổ lỗi hóa chất.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Restaurants could reduce obesity if menus A fewer options / B more low-calorie foods / C organised in a particular way",
    questionVi: "Nhà hàng giảm béo phì nếu menu: A ít lựa chọn / B nhiều món ít calo / C sắp xếp theo cách nhất định",
    modelParaphraseEn: "items at the start … and … end of a menu are much more likely to be chosen … put the low-calorie items at the beginning and end",
    modelParaphraseVi: "items at the start … and … end of a menu are much more likely to be chosen … put the low-calorie items at the beginning and end",
    acceptedAnswers: ["C", "were organised in a particular way", "beginning and end of the menu"],
    explanationEn: "C = organise the menu (low-calorie items at start and end). He does not say add more low-calorie dishes or cut options.",
    explanationVi: "C = sắp xếp menu (món ít calo ở đầu và cuối). Không nói thêm món ít calo hay cắt bớt lựa chọn.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Manufacturers deliberately A make calorie counts hard to understand / B fail to provide accurate counts / C use ineffective methods",
    questionVi: "Nhà sản xuất cố ý: A làm số calo khó hiểu / B không ghi chính xác / C cách giảm calo kém hiệu quả",
    modelParaphraseEn: "calorie counts … they're sometimes really confusing and I suspect they do it on purpose",
    modelParaphraseVi: "calorie counts … they're sometimes really confusing and I suspect they do it on purpose",
    acceptedAnswers: ["A", "make calorie counts hard to understand", "really confusing", "on purpose"],
    explanationEn: "A = confusing on purpose (e.g. calories per quarter pizza). They do not say the counts are inaccurate.",
    explanationVi: "A = cố ý làm khó hiểu (vd. calo trên 1/4 pizza). Không nói số liệu sai.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Exercise in England: A recommended amount too low / B most people overestimate how much they do / C women exercise more than they used to",
    questionVi: "Tập luyện ở Anh: A mức khuyến nghị quá thấp / B hầu hết người ta ước quá cao / C phụ nữ tập nhiều hơn trước",
    modelParaphraseEn: "about 40% of men and 30% of women say they do this, but … only 6% of men and 4% of women do the recommended amount",
    modelParaphraseVi: "about 40% of men and 30% of women say they do this, but … only 6% of men and 4% of women do the recommended amount",
    acceptedAnswers: ["B", "Most people overestimate how much they do", "say they do this", "motion sensors"],
    explanationEn: "B = people overestimate (self-report 40%/30% vs sensors 6%/4%). The guideline itself is not called too low.",
    explanationVi: "B = người ta ước quá cao (tự báo 40%/30% vs cảm biến 6%/4%). Không nói mức khuyến nghị quá thấp.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Stairs in a train station illustrate A practical changes that influence behaviour / B help for mobility problems / C crowd-accident prevention",
    questionVi: "Cầu thang nhà ga minh họa: A thay đổi thực tế ảnh hưởng hành vi / B hỗ trợ người đi lại khó / C chống tai nạn đám đông",
    modelParaphraseEn: "reach the stairs before … the escalator … increase the width of the stairs … unconscious process … minor modifications in their environment",
    modelParaphraseVi: "reach the stairs before … the escalator … increase the width of the stairs … unconscious process … minor modifications in their environment",
    acceptedAnswers: ["A", "practical changes that can influence people's behaviour", "minor modifications in their environment"],
    explanationEn: "A = small practical changes (location and width of stairs) nudge behaviour. Not about mobility or crowd safety.",
    explanationVi: "A = thay đổi thực tế nhỏ (vị trí và độ rộng cầu thang) thôi thúc hành vi. Không phải hỗ trợ đi lại hay an toàn đám đông.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Including exercise in the presentation: A leave it out / B do more research / C discuss with their tutor",
    questionVi: "Đưa tập luyện vào bài thuyết trình: A bỏ / B nghiên cứu thêm / C hỏi tutor",
    modelParaphraseEn: "I'm not sure if we should be talking about exercise … tutor did say that we need to focus on causes and solutions in terms of nutrition. I suppose so … that will be simpler",
    modelParaphraseVi: "I'm not sure if we should be talking about exercise … tutor did say that we need to focus on causes and solutions in terms of nutrition. I suppose so … that will be simpler",
    acceptedAnswers: ["A", "They should probably leave it out", "not sure if we should be talking about exercise"],
    explanationEn: "A = leave exercise out (tutor wants a nutrition focus; Rosie agrees it will be simpler). They already have reading, so not more research.",
    explanationVi: "A = bỏ phần tập luyện (tutor muốn tập trung dinh dưỡng; Rosie đồng ý sẽ đơn giản hơn). Đã đọc khá nhiều, không phải nghiên cứu thêm.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "What next: A prepare some slides / B find out how long they have / C decide on content and organisation",
    questionVi: "Việc tiếp theo: A soạn slide / B hỏi thời lượng / C quyết nội dung và bố cục",
    modelParaphraseEn: "Let's think about what we're going to include and what will go where. Then we can decide what slides we need",
    modelParaphraseVi: "Let's think about what we're going to include and what will go where. Then we can decide what slides we need",
    acceptedAnswers: ["C", "decide on its content and organisation", "what we're going to include and what will go where"],
    explanationEn: "C = decide content and organisation first; slides come after. They already have half an hour — they do not need to ask how long.",
    explanationVi: "C = quyết nội dung và bố cục trước; slide tính sau. Đã có nửa giờ — không cần hỏi thời lượng.",
  },
];
