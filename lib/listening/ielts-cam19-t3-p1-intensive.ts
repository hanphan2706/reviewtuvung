import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["how are you settling into"] },
    { id: "g2", answers: ["You look like you're going shopping", "You look like you are going shopping"] },
    { id: "g3", answers: ["coming to stay"] },
    { id: "g4", answers: ["plenty of places"] },
    { id: "g5", answers: ["neither of them eats meat"] },
    { id: "g6", answers: ["where is it exactly"] },
    { id: "g7", answers: ["going earlier than that"] },
    { id: "g8", answers: ["run out of some things"] },
    { id: "g9", answers: ["I don't want that to happen", "I do not want that to happen"] },
    { id: "g10", answers: ["you should be fine"] },
    { id: "g11", answers: ["avoid all the plastic packaging"] },
    { id: "g12", answers: ["it's the name of a flower", "it is the name of a flower"] },
    { id: "g13", answers: ["That's easy enough", "That is easy enough"] },
    { id: "g14", answers: ["You can't miss it", "You cannot miss it"] },
    { id: "g15", answers: ["get everything you need"] },
    { id: "g16", answers: ["try something different"] },
    { id: "g17", answers: ["they're not always ripe", "they are not always ripe"] },
    { id: "g18", answers: ["won't even have to go", "will not even have to go"] },
  ],
  lines: [
    {
      speaker: "LEON",
      segments: [
        { type: "text", text: "Hi Shannon – " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " your new flat?" },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "Really well, thanks." }] },
    { speaker: "LEON", segments: [{ type: "gap", gapId: "g2" }, { type: "text", text: "." }] },
    {
      speaker: "SHANNON",
      segments: [
        { type: "text", text: "Yes, I am. My cousins are " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " for a couple of days, and I have to cook for them." },
      ],
    },
    {
      speaker: "LEON",
      segments: [
        { type: "text", text: "Well, there are " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " to buy food in Kite Place – it's the area by the harbour." },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "Oh. OK, I'll find that on the map. Thanks." }] },
    { speaker: "LEON", segments: [{ type: "text", text: "What sort of food do you need to get?" }] },
    {
      speaker: "SHANNON",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " but they both like fish." },
      ],
    },
    { speaker: "LEON", segments: [{ type: "text", text: "Well, there's a really good fish market there." }] },
    {
      speaker: "SHANNON",
      segments: [
        { type: "text", text: "Oh great – " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "LEON",
      segments: [
        {
          type: "text",
          text: "It's at the far end of Kite Place, so you have to go over the bridge and then it's on the right.",
        },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "OK – is it open all day?" }] },
    {
      speaker: "LEON",
      segments: [
        { type: "text", text: "It doesn't close until four, but I'd recommend " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: " – it does " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "SHANNON",
      segments: [
        { type: "text", text: "Oh, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "LEON",
      segments: [
        { type: "text", text: "As long as you get there by 3.30, " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: ". It's only 11 now, so plenty of time." },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "Right." }] },
    { speaker: "LEON", segments: [{ type: "text", text: "Do you need to buy vegetables too?" }] },
    {
      speaker: "SHANNON",
      segments: [
        { type: "text", text: "I do, and I want to " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " in the supermarket!" },
      ],
    },
    {
      speaker: "LEON",
      segments: [
        { type: "text", text: "Well, there's a really nice organic shop there. Now what's it called … " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ". I know, it's 'Rose'." },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "That's a nice name." }] },
    { speaker: "LEON", segments: [{ type: "text", text: "Yeah – it sells vegetables and quite a lot of other stuff." }] },
    { speaker: "SHANNON", segments: [{ type: "text", text: "And where's that?" }] },
    {
      speaker: "LEON",
      segments: [
        {
          type: "text",
          text: "Well, as you reach the market, you'll see a big grey building on your left – I think it used to be a warehouse. Anyway, now it's a restaurant upstairs, but the ground floor has two shops either side of the entrance and it's the one on the left.",
        },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "gap", gapId: "g13" }, { type: "text", text: "." }] },
    {
      speaker: "LEON",
      segments: [
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: " – there's also a big sign on the pavement so you can look for that.",
        },
      ],
    },
    {
      speaker: "SHANNON",
      segments: [{ type: "text", text: "Fine! I guess if I need anything else, I'll have to go to the supermarket." }],
    },
    {
      speaker: "LEON",
      segments: [
        { type: "text", text: "Yeah – you should be able to " },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", but there's a minibus that goes to the supermarket if you need it. It's purple and the number is 289.",
        },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "Thanks, that's great." }] },
    {
      speaker: "LEON",
      segments: [
        {
          type: "text",
          text: "So what do you need to get at the fish market? The salmon is always very good and the shellfish.",
        },
      ],
    },
    {
      speaker: "SHANNON",
      segments: [
        {
          type: "text",
          text: "I'm going to make a curry, I think, and I need about 12 prawns for that.",
        },
      ],
    },
    { speaker: "LEON", segments: [{ type: "text", text: "They'll have plenty of those." }] },
    { speaker: "SHANNON", segments: [{ type: "text", text: "OK." }] },
    { speaker: "LEON", segments: [{ type: "text", text: "Have you ever tried samphire?" }] },
    { speaker: "SHANNON", segments: [{ type: "text", text: "No – what's that?" }] },
    {
      speaker: "LEON",
      segments: [
        {
          type: "text",
          text: "It's a type of seaweed. I just ask for a handful and you fry it in butter. It's delicious!",
        },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "Oh, I might try that – how do you spell it?" }] },
    { speaker: "LEON", segments: [{ type: "text", text: "It's S-A-M-P-H-I-R-E." }] },
    {
      speaker: "SHANNON",
      segments: [
        { type: "text", text: "Great – it's always good to " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "LEON", segments: [{ type: "text", text: "Yeah." }] },
    {
      speaker: "SHANNON",
      segments: [
        {
          type: "text",
          text: "I'll see what beans they have in the organic shop and I think I'll get something for dessert there.",
        },
      ],
    },
    { speaker: "LEON", segments: [{ type: "text", text: "How about a mango?" }] },
    {
      speaker: "SHANNON",
      segments: [
        { type: "text", text: "I'm not sure – " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ". I'd prefer a melon – it's bigger too." },
      ],
    },
    {
      speaker: "LEON",
      segments: [
        {
          type: "text",
          text: "Good idea. The owner also sells a lot of spices there that you can put in a curry, and things like coconut.",
        },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "Oh, that's very helpful. I'll have a look." }] },
    { speaker: "LEON", segments: [{ type: "text", text: "No problem." }] },
    {
      speaker: "SHANNON",
      segments: [
        {
          type: "text",
          text: "I know bread doesn't really go with curry but I always like to have some in case.",
        },
      ],
    },
    {
      speaker: "LEON",
      segments: [
        {
          type: "text",
          text: "As I said – all the bread is home-made and there's lots of variety. I like the brown bread myself.",
        },
      ],
    },
    { speaker: "SHANNON", segments: [{ type: "text", text: "Mm, sounds good." }] },
    { speaker: "LEON", segments: [{ type: "text", text: "They sell other things there too." }] },
    { speaker: "SHANNON", segments: [{ type: "text", text: "Like cakes? I love chocolate cake." }] },
    {
      speaker: "LEON",
      segments: [
        {
          type: "text",
          text: "Well – not that, but they have a whole range of tarts and the best are the strawberry ones.",
        },
      ],
    },
    {
      speaker: "SHANNON",
      segments: [
        { type: "text", text: "Perfect – hopefully I " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " to the supermarket!" },
      ],
    },
  ],
};

export const CAM19_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Kite Place – near the ______",
    questionVi: "Kite Place – gần ______",
    modelParaphraseEn: "it's the area by the harbour",
    modelParaphraseVi: "it's the area by the harbour",
    acceptedAnswers: ["harbour", "harbor"],
    explanationEn: "Kite Place is the area by the harbour.",
    explanationVi: "Kite Place nằm cạnh harbour (bến cảng).",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Fish market: cross the ______ and turn right",
    questionVi: "Chợ cá: băng ______ rồi rẽ phải",
    modelParaphraseEn: "go over the bridge and then it's on the right",
    modelParaphraseVi: "go over the bridge and then it's on the right",
    acceptedAnswers: ["bridge"],
    explanationEn: "Cross / go over the bridge, then the market is on the right.",
    explanationVi: "Băng qua bridge, chợ cá bên phải.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "best to go before ______ p.m.",
    questionVi: "nên tới trước ______ giờ chiều",
    modelParaphraseEn: "As long as you get there by 3.30 you should be fine – it doesn't close until four",
    modelParaphraseVi: "As long as you get there by 3.30 you should be fine – it doesn't close until four",
    acceptedAnswers: ["3.30", "3:30", "three thirty", "half past three"],
    explanationEn: "Closing is 4; Leon says arrive by 3.30 so stock has not run out.",
    explanationVi: "Đóng cửa lúc 4; Leon khuyên tới trước 3.30 để còn hàng.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "organic shop called '______'",
    questionVi: "cửa hàng hữu cơ tên '______'",
    modelParaphraseEn: "it's the name of a flower. I know, it's 'Rose'",
    modelParaphraseVi: "it's the name of a flower. I know, it's 'Rose'",
    acceptedAnswers: ["Rose", "rose"],
    explanationEn: "The shop is named after a flower: Rose.",
    explanationVi: "Tên cửa hàng là một loài hoa: Rose.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "look for the large ______ outside",
    questionVi: "tìm ______ lớn bên ngoài",
    modelParaphraseEn: "there's also a big sign on the pavement so you can look for that",
    modelParaphraseVi: "there's also a big sign on the pavement so you can look for that",
    acceptedAnswers: ["sign"],
    explanationEn: "A big sign on the pavement marks the shop.",
    explanationVi: "Có tấm sign lớn trên vỉa hè.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "take a ______ minibus, number 289",
    questionVi: "đi minibus ______, số 289",
    modelParaphraseEn: "there's a minibus that goes to the supermarket – It's purple and the number is 289",
    modelParaphraseVi: "there's a minibus that goes to the supermarket – It's purple and the number is 289",
    acceptedAnswers: ["purple"],
    explanationEn: "The supermarket minibus is purple, number 289.",
    explanationVi: "Xe minibus tới siêu thị màu purple, số 289.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "a handful of ______ (type of seaweed)",
    questionVi: "một nắm ______ (loại rong biển)",
    modelParaphraseEn: "Have you ever tried samphire? It's a type of seaweed. I just ask for a handful",
    modelParaphraseVi: "Have you ever tried samphire? It's a type of seaweed. I just ask for a handful",
    acceptedAnswers: ["samphire"],
    explanationEn: "Samphire is a seaweed; Leon asks for a handful and fries it in butter.",
    explanationVi: "Samphire là rong biển; Leon xin một nắm rồi chiên với bơ.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "beans and a ______ for dessert",
    questionVi: "đậu và ______ cho món tráng miệng",
    modelParaphraseEn: "How about a mango? I'd prefer a melon – it's bigger too",
    modelParaphraseVi: "How about a mango? I'd prefer a melon – it's bigger too",
    acceptedAnswers: ["melon"],
    explanationEn: "She rejects mango (not always ripe) and prefers melon for dessert.",
    explanationVi: "Cô không chọn xoài (không chắc chín) mà chọn melon.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "spices and ______",
    questionVi: "gia vị và ______",
    modelParaphraseEn: "sells a lot of spices there that you can put in a curry, and things like coconut",
    modelParaphraseVi: "sells a lot of spices there that you can put in a curry, and things like coconut",
    acceptedAnswers: ["coconut"],
    explanationEn: "Besides spices for curry, the owner sells coconut.",
    explanationVi: "Ngoài gia vị cho cà ri, chủ quán bán coconut.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "a ______ tart",
    questionVi: "bánh tart ______",
    modelParaphraseEn: "they have a whole range of tarts and the best are the strawberry ones",
    modelParaphraseVi: "they have a whole range of tarts and the best are the strawberry ones",
    acceptedAnswers: ["strawberry"],
    explanationEn: "No chocolate cake – the best tarts are strawberry.",
    explanationVi: "Không có bánh chocolate – tart ngon nhất là strawberry.",
  },
];
