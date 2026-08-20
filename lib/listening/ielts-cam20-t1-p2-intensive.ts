import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T1_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm one of the potters", "I am one of the potters"] },
    { id: "g2", answers: ["Before we go into the workshop"] },
    { id: "g3", answers: ["I'm sure you know that", "I am sure you know that"] },
    { id: "g4", answers: ["And we know this because"] },
    { id: "g5", answers: ["in the same way"] },
    { id: "g6", answers: ["There's no doubt that", "There is no doubt that"] },
    { id: "g7", answers: ["a fascinating insight into"] },
    { id: "g8", answers: ["Of course, you will all have"] },
    { id: "g9", answers: ["As far as I'm concerned", "As far as I am concerned"] },
    { id: "g10", answers: ["takes you away from"] },
    { id: "g11", answers: ["it's a fun activity", "it is a fun activity"] },
    { id: "g12", answers: ["so we'll keep things simple today", "so we will keep things simple today"] },
    { id: "g13", answers: ["say a word about"] },
    { id: "g14", answers: ["Have a look around"] },
    { id: "g15", answers: ["Since their invention"] },
    { id: "g16", answers: ["You may think"] },
    { id: "g17", answers: ["but bear in mind"] },
    { id: "g18", answers: ["I wouldn't recommend", "I would not recommend"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "text", text: "Hello and welcome. My name's Heather McCallum and " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " who work here at Edelman Pottery. " },
        { type: "gap", gapId: "g2" },
        {
          type: "text",
          text: ", I just want to say a bit about the craft of pottery. Then we'll have a look at the equipment and you can try making a pot of your own.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Like many people, " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " pottery as an art form is tens of thousands of years old. " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " it stands the test of time. Things like baskets and pictures don't survive on the earth ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " that pots do. And even if ancient pots are found in small pieces they still provide a lot of information about the past.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " pottery has given archaeologists " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " how ancient humans lived. The shape of an artefact may have been lost but archaeologists can tell whether the pots were for, say, storage or cooking by examining the impressions on the clay, the scratches from tools, and the clay itself can reveal where the pots came from.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "When I ask people why they want to take a pottery class with me, they sometimes talk about these things. Like our ancestors, they hope that something they create will also last longer than they do, that their work, whether it is good or not, might say something about humanity many years after their death.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: " your own reasons for coming here. " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ", what I love most is the concentration you need to make a good pot. That focus ",
        },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " the stresses of everyday life. If you're elderly, it's also good exercise for hands and wrists and helps with arthritis. ",
        },
        { type: "text", text: "And of course, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " for children because it's so messy." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Here at Edelman Pottery, we show you some of the basic pottery techniques so that you can use these to create whatever you wish. A gift for a friend, perhaps. Like nearly everyone who comes here, I'm sure this is the first time you will have tried the art ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Now, before we move on, can I just " },
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " what you're wearing? As we said in our email, please remove any watches, necklaces etc and put them somewhere safe. If you have long hair, do tie it back now. We provide aprons later but I trust your clothes are old but comfortable, not your favourite T-shirt or jeans.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "So now we're in the workshop. " },
        { type: "gap", gapId: "g14" },
        {
          type: "text",
          text: ". There's a lot going on. To make pottery that will last, you need a potter's wheel, a kiln, which is basically a very hot oven where you fire the pottery, and some tools.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "So, first, the kiln. If you look over in the far corner, you'll see one of ours. ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: ", kilns have changed very little, though in the past 20 years a lot of progress has been made in temperature control. Basically, a kiln removes the water from clay at temperatures of around 1000 degrees Celsius. This allows anything you've made to set permanently in shape. It's a pretty ugly heavy object that's hard to keep in a house or flat, so most people don't have one.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ", can't I use my oven? Well, that's possible, but domestic ovens don't really get hot enough and eventually the clay will crack and fall apart. Some people fire pottery in a fire pit outside ",
        },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " that can be dangerous. You also need to know about safety procedures for kilns as they release toxic compounds into the air.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Every potter needs a potter's wheel. This machine is used to shape the clay into an object with circular walls or sides, such as a bowl. Its invention revolutionised the pottery industry, allowing multiple items to be produced in a day.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Lastly, there are a number of different tools that potters use, depending on what they want to make. When you start, your hands can make all kinds of shapes and curves without relying on a sculpting tool. However, there are some basic tools that you will need to handle the clay on the wheel. Some look very strange and have even odder names that you may find hard to remember. Rather than go through them all now, I'll just name a few tools as we go along. We can provide these and ",
        },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " spending money on them yet." },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So, let's try making a pot of your own. If you sit down…" }],
    },
  ],
};

export const CAM20_T1_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "Pottery differs from other art forms because ____  A it lasts longer in the ground / B practised by more people / C repaired more easily",
    questionVi: "Gốm khác các hình thức nghệ thuật khác vì ____  A tồn tại lâu hơn trong đất / B nhiều người làm hơn / C dễ sửa hơn",
    modelParaphraseEn: "it stands the test of time. Things like baskets and pictures don't survive on the earth in the same way that pots do",
    modelParaphraseVi: "it stands the test of time. Things like baskets and pictures don't survive on the earth in the same way that pots do",
    acceptedAnswers: ["A", "lasts longer in the ground", "stands the test of time"],
    explanationEn: "A = pots last / survive in the ground unlike baskets and pictures. Not about how many people practise it or repairing pots.",
    explanationVi: "A = gốm tồn tại / survive trong đất, khác baskets và pictures. Không phải số người làm hay dễ sửa.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "Archaeologists identify the use of ancient pottery from  A the clay / B the marks on it / C the basic shape",
    questionVi: "Khảo cổ xác định công dụng gốm cổ từ  A đất sét / B vết trên gốm / C hình dạng cơ bản",
    modelParaphraseEn: "The shape of an artefact may have been lost but archaeologists can tell … by examining the impressions on the clay, the scratches from tools",
    modelParaphraseVi: "The shape of an artefact may have been lost but archaeologists can tell … by examining the impressions on the clay, the scratches from tools",
    acceptedAnswers: ["B", "the marks that are on it", "impressions", "scratches from tools"],
    explanationEn: "B = marks (impressions / tool scratches). Shape may have been lost; clay shows where pots came from, not what they were used for.",
    explanationVi: "B = marks (impressions / vết dụng cụ). Shape có thể đã mất; clay cho biết nguồn gốc, không phải công dụng.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Some people join because they want to  A create something that looks very old / B find something they are good at / C make something that will outlive them",
    questionVi: "Một số người học vì muốn  A tạo món trông cổ / B tìm sở trường / C làm thứ tồn tại lâu hơn họ",
    modelParaphraseEn: "they hope that something they create will also last longer than they do … many years after their death",
    modelParaphraseVi: "they hope that something they create will also last longer than they do … many years after their death",
    acceptedAnswers: ["C", "make something that will outlive them", "last longer than they do"],
    explanationEn: "C = outlive them / last longer than they do, like their ancestors. Not about looking old or finding a talent.",
    explanationVi: "C = outlive them / last longer than they do, như tổ tiên. Không phải trông cổ hay tìm sở trường.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "What Heather values most:  A its calming effect / B its messy nature / C its physical benefits",
    questionVi: "Heather coi trọng nhất:  A tác dụng thư giãn / B tính bừa bộn / C lợi ích thể chất",
    modelParaphraseEn: "what I love most is the concentration you need … That focus takes you away from the stresses of everyday life",
    modelParaphraseVi: "what I love most is the concentration you need … That focus takes you away from the stresses of everyday life",
    acceptedAnswers: ["A", "its calming effect", "takes you away from the stresses"],
    explanationEn: "A = calming (concentration / focus away from stress). Messy is for children; exercise / arthritis is for the elderly — not what she loves most.",
    explanationVi: "A = calming (concentration / focus khỏi stress). Messy là cho trẻ; exercise / arthritis cho người già — không phải điều cô yêu nhất.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "Most visitors to Edelman Pottery  A bring friends / B have never made a pot before / C try to learn techniques too quickly",
    questionVi: "Hầu hết khách Edelman Pottery  A rủ bạn / B chưa từng làm gốm / C muốn học kỹ thuật quá nhanh",
    modelParaphraseEn: "Like nearly everyone who comes here, I'm sure this is the first time you will have tried the art so we'll keep things simple today",
    modelParaphraseVi: "Like nearly everyone who comes here, I'm sure this is the first time you will have tried the art so we'll keep things simple today",
    acceptedAnswers: ["B", "have never made a pot before", "the first time"],
    explanationEn: "B = first time / never tried pottery before. A gift for a friend is only an example of what you might make.",
    explanationVi: "B = first time / chưa từng làm gốm. A gift for a friend chỉ là ví dụ món có thể làm.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Heather reminds visitors they should  A put on their aprons / B change their clothes / C take off their jewellery",
    questionVi: "Heather nhắc khách  A mặc tạp dề / B đổi quần áo / C tháo trang sức",
    modelParaphraseEn: "please remove any watches, necklaces etc and put them somewhere safe",
    modelParaphraseVi: "please remove any watches, necklaces etc and put them somewhere safe",
    acceptedAnswers: ["C", "take off their jewellery", "remove any watches, necklaces"],
    explanationEn: "C = take off jewellery (watches, necklaces). Aprons come later; clothes should already be old and comfortable — not a change of outfit now.",
    explanationVi: "C = tháo jewellery (watches, necklaces). Aprons phát sau; quần áo nên đã cũ, thoải mái — không phải đổi đồ lúc này.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "TWO things Heather explains about kilns:  A what their function is",
    questionVi: "HAI điều về lò nung:  A chức năng của lò",
    modelParaphraseEn: "a kiln, which is basically a very hot oven where you fire the pottery … removes the water from clay … set permanently in shape",
    modelParaphraseVi: "a kiln, which is basically a very hot oven where you fire the pottery … removes the water from clay … set permanently in shape",
    acceptedAnswers: ["A", "what their function is", "fire the pottery", "removes the water from clay"],
    explanationEn: "A = function (fire pottery / remove water / set the shape). She does not say when kilns were invented, how to keep them safe as a 'where to put one' solution, or home placement as a recommended option.",
    explanationVi: "A = chức năng (nung gốm / hút nước / định hình). Không nói lúc phát minh, chỗ đặt trong nhà như lời khuyên, hay cách giữ an toàn như đáp án chính.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "(same list) E what some people use instead of one",
    questionVi: "(cùng danh sách) E thứ một số người dùng thay lò",
    modelParaphraseEn: "can't I use my oven? … domestic ovens don't really get hot enough … Some people fire pottery in a fire pit outside",
    modelParaphraseVi: "can't I use my oven? … domestic ovens don't really get hot enough … Some people fire pottery in a fire pit outside",
    acceptedAnswers: ["E", "what some people use instead of one", "oven", "fire pit"],
    explanationEn: "E = oven or outdoor fire pit instead of a kiln (oven not hot enough; fire pit can be dangerous).",
    explanationVi: "E = lò nướng hoặc fire pit ngoài trời thay kiln (oven không đủ nóng; fire pit có thể nguy hiểm).",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "TWO points about a potter's tools:  C some are essential items",
    questionVi: "HAI ý về dụng cụ:  C một số là đồ thiết yếu",
    modelParaphraseEn: "there are some basic tools that you will need to handle the clay on the wheel",
    modelParaphraseVi: "there are some basic tools that you will need to handle the clay on the wheel",
    acceptedAnswers: ["C", "some are essential items", "basic tools that you will need"],
    explanationEn: "C = essential / basic tools you will need on the wheel. Names are odd and hard to remember — not memorable. She does not say they are hard to hold or worth buying yet.",
    explanationVi: "C = essential / basic tools cần cho bàn xoay. Tên lạ, khó nhớ — không phải memorable. Không nói khó cầm hay đáng mua ngay.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "(same list) E some are available for use by participants",
    questionVi: "(cùng danh sách) E xưởng cho học viên dùng",
    modelParaphraseEn: "We can provide these and I wouldn't recommend spending money on them yet",
    modelParaphraseVi: "We can provide these and I wouldn't recommend spending money on them yet",
    acceptedAnswers: ["E", "some are available for use by participants", "We can provide these"],
    explanationEn: "E = the studio provides tools for participants; do not buy them yet (so not B worth buying).",
    explanationVi: "E = xưởng cung cấp dụng cụ cho học viên; chưa nên mua (không phải B đáng mua).",
  },
];
