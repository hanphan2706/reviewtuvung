import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM20_T3_P4_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["It's only relatively recently that", "It is only relatively recently that"] },
    { id: "g2", answers: ["But what does that mean exactly"] },
    { id: "g3", answers: ["they are not quite the same thing"] },
    { id: "g4", answers: ["which can present quite a challenge"] },
    { id: "g5", answers: ["can be seen all around us"] },
    { id: "g6", answers: ["This still isn't always the case", "This still is not always the case"] },
    { id: "g7", answers: ["You'll find another example", "You will find another example"] },
    { id: "g8", answers: ["require no pressing or twisting movements"] },
    { id: "g9", answers: ["they're also easier for people", "they are also easier for people"] },
    { id: "g10", answers: ["has been criticised in the past", "has been criticized in the past"] },
    { id: "g11", answers: ["this is changing"] },
    { id: "g12", answers: ["Motor skills also decline with age"] },
    { id: "g13", answers: ["It's worth looking at the problems", "It is worth looking at the problems"] },
    { id: "g14", answers: ["it can have a serious impact on people's lives"] },
    { id: "g15", answers: ["Safety is another issue"] },
    { id: "g16", answers: ["become considerably safer"] },
    { id: "g17", answers: ["A very common scenario in offices"] },
    { id: "g18", answers: ["there are serious consequences for designs"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: " designers have become aware of the need to be inclusive when designing products. ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Well, it simply means designing products that span economic, social and cultural barriers. It means making sure products are accessible, so that as many different types of people as possible can use them, without any type of adaptation having to be made to the original design. Inclusive design is often linked with universal design, although ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Universal design aims to make products that work for everyone and that includes considering the needs of people who have cognitive difficulties, ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Today examples of successful inclusive design " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". In workplaces it is common to see desks which can be adjusted to suit people of different heights or for wheelchair users. ",
        },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ", however, and is one reason why office workers often suffer from back or neck problems.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: " in the public toilets of countless hotels, airports and offices. Taps that you activate by sensor ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". These are not only more hygienic, " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " with dexterity or mobility issues." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The tech industry " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " for focusing too much on young consumers, but " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Many products are now designed with the elderly in mind. For example, it's well known that vision declines with age and that we also become worse at distinguishing between similar colours, in particular shades of blue, which is why software designers rarely create interfaces with this colour. ",
        },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " and some people have difficulty doing everyday things like picking up a cup or opening a door. This can also affect their ability to use a mouse or keyboard. So voice access is now a routine way of making commands.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g13" },
        {
          type: "text",
          text: " non-inclusive designs cause when not enough consideration is given to a range of users, as ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Access is one obvious example because it has such a huge impact on disabled people's independence. Not being able to access public transport because buses or trains are not wheelchair-friendly means many disabled people can't go out unless someone goes with them. ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Inexplicably, most cars are still crash-tested using a dummy based on an average-sized male. This has safety implications for all women, particularly those who are pregnant, as the seatbelts worn by the dummy are not adapted to accommodate them.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Over the past 100 years, workplaces in the UK have, on the whole, ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". Employers are legally required to provide well-maintained personal protective equipment, or PPE, anything from goggles to full bodysuits, to workers who need it, free of charge. But most PPE is designed to fit men.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "A recent report found that employers often think that when it comes to female workers, all they need to do to comply with this legal requirement is to buy jackets, for example, designed for a small man. The problem with this is that women can be tall and still have much smaller shoulders than the average man. Ill-fitting PPE such as high-vis jackets, vests and body armour can put women at risk. The report found that 95% of women said that their PPE often hampered their work and that this problem was worst in the emergency services, particularly the police.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Another problem is related to comfort at work. " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " in summertime is to see women wrapped in blankets or wearing sweaters while the air conditioning is on high. Meanwhile, the men are in shorts and T-shirts. This is due to differences in metabolic rates for men and women. There is a standard setting for air conditioning to be at a temperature of 21 degrees designed to suit men and in most modern offices it is not possible to turn the air conditioning up or down. This means that many offices which mainly employ women are wasting energy by having the air conditioning set too high.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As you can see from the examples I've just mentioned, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: " which don't consider the needs of all users." },
      ],
    },
  ],
};

export const CAM20_T3_P4_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q31",
    questionNumber: 31,
    questionEn: "products used without the need for any ______",
    questionVi: "dùng sản phẩm không cần ______",
    modelParaphraseEn: "without any type of adaptation having to be made to the original design",
    modelParaphraseVi: "without any type of adaptation having to be made to the original design",
    acceptedAnswers: ["adaptation"],
    explanationEn: "Inclusive design = accessible without adaptation of the original design.",
    explanationVi: "Thiết kế hòa nhập = dùng được mà không cần adaptation thiết kế gốc.",
  },
  {
    key: "kw-q32",
    questionNumber: 32,
    questionEn: "universal design also caters for people with ______ problems",
    questionVi: "thiết kế phổ quát còn đáp ứng người có vấn đề ______",
    modelParaphraseEn: "considering the needs of people who have cognitive difficulties",
    modelParaphraseVi: "considering the needs of people who have cognitive difficulties",
    acceptedAnswers: ["cognitive"],
    explanationEn: "Universal design includes people with cognitive difficulties — a real challenge.",
    explanationVi: "Thiết kế phổ quát gồm cả người khó khăn cognitive — khá thách thức.",
  },
  {
    key: "kw-q33",
    questionNumber: 33,
    questionEn: "______ which are adjustable, avoiding back or neck problems",
    questionVi: "______ điều chỉnh được, tránh đau lưng/cổ",
    modelParaphraseEn: "desks which can be adjusted to suit people of different heights or for wheelchair users",
    modelParaphraseVi: "desks which can be adjusted to suit people of different heights or for wheelchair users",
    acceptedAnswers: ["desks"],
    explanationEn: "Adjustable desks (height / wheelchair users) help prevent back or neck problems.",
    explanationVi: "Desks điều chỉnh được (chiều cao / xe lăn) giúp tránh đau lưng/cổ.",
  },
  {
    key: "kw-q34",
    questionNumber: 34,
    questionEn: "______ in public toilets which are easier to use",
    questionVi: "______ trong toilet công cộng dễ dùng hơn",
    modelParaphraseEn: "Taps that you activate by sensor require no pressing or twisting movements",
    modelParaphraseVi: "Taps that you activate by sensor require no pressing or twisting movements",
    acceptedAnswers: ["taps"],
    explanationEn: "Sensor taps in public toilets: more hygienic and easier with dexterity/mobility issues.",
    explanationVi: "Taps cảm biến trong toilet công cộng: vệ sinh hơn và dễ hơn khi khó dùng tay/di chuyển.",
  },
  {
    key: "kw-q35",
    questionNumber: 35,
    questionEn: "designers avoid using ______ in interfaces",
    questionVi: "nhà thiết kế tránh dùng ______ trên giao diện",
    modelParaphraseEn: "worse at distinguishing … shades of blue, which is why software designers rarely create interfaces with this colour",
    modelParaphraseVi: "worse at distinguishing … shades of blue, which is why software designers rarely create interfaces with this colour",
    acceptedAnswers: ["blue"],
    explanationEn: "Older users struggle with similar colours, especially blue, so interfaces avoid it.",
    explanationVi: "Người già khó phân biệt màu gần nhau, đặc biệt blue, nên giao diện tránh màu này.",
  },
  {
    key: "kw-q36",
    questionNumber: 36,
    questionEn: "people can make commands using a mouse, keyboard or their ______",
    questionVi: "ra lệnh bằng chuột, bàn phím hoặc ______",
    modelParaphraseEn: "voice access is now a routine way of making commands",
    modelParaphraseVi: "voice access is now a routine way of making commands",
    acceptedAnswers: ["voice"],
    explanationEn: "Declining motor skills make mouse/keyboard hard, so voice commands are routine.",
    explanationVi: "Kỹ năng vận động giảm khiến chuột/bàn phím khó, nên ra lệnh bằng voice là phổ biến.",
  },
  {
    key: "kw-q37",
    questionNumber: 37,
    questionEn: "Seatbelts are especially problematic for ______ women",
    questionVi: "Dây an toàn đặc biệt bất lợi cho phụ nữ ______",
    modelParaphraseEn: "safety implications for all women, particularly those who are pregnant",
    modelParaphraseVi: "safety implications for all women, particularly those who are pregnant",
    acceptedAnswers: ["pregnant"],
    explanationEn: "Crash-test dummies are average-sized males; seatbelts are worst for pregnant women.",
    explanationVi: "Hình nộm crash-test là nam trung bình; dây an toàn tệ nhất với phụ nữ pregnant.",
  },
  {
    key: "kw-q38",
    questionNumber: 38,
    questionEn: "PPE jackets unsuitable because of the size of women's ______",
    questionVi: "Áo PPE không phù hợp vì kích thước ______ của phụ nữ",
    modelParaphraseEn: "women can be tall and still have much smaller shoulders than the average man",
    modelParaphraseVi: "women can be tall and still have much smaller shoulders than the average man",
    acceptedAnswers: ["shoulders"],
    explanationEn: "A 'small man' jacket fails because women's shoulders are smaller, even if they are tall.",
    explanationVi: "Áo 'nam nhỏ' không ổn vì shoulders phụ nữ nhỏ hơn, dù họ có thể cao.",
  },
  {
    key: "kw-q39",
    questionNumber: 39,
    questionEn: "PPE for female ______ officers dealing with emergencies is the worst",
    questionVi: "PPE cho nữ sĩ quan ______ xử lý khẩn cấp là tệ nhất",
    modelParaphraseEn: "this problem was worst in the emergency services, particularly the police",
    modelParaphraseVi: "this problem was worst in the emergency services, particularly the police",
    acceptedAnswers: ["police"],
    explanationEn: "Ill-fitting PPE is worst in the emergency services, especially police officers.",
    explanationVi: "PPE không vừa tệ nhất ở dịch vụ khẩn cấp, đặc biệt police.",
  },
  {
    key: "kw-q40",
    questionNumber: 40,
    questionEn: "The ______ in offices is often too low for women",
    questionVi: "______ trong văn phòng thường quá thấp với phụ nữ",
    modelParaphraseEn: "air conditioning … at a temperature of 21 degrees designed to suit men … wasting energy by having the air conditioning set too high",
    modelParaphraseVi: "air conditioning … at a temperature of 21 degrees designed to suit men … wasting energy by having the air conditioning set too high",
    acceptedAnswers: ["temperature"],
    explanationEn: "21°C AC suits men's metabolic rate, so office temperature is often too low for women.",
    explanationVi: "Điều hòa 21°C hợp trao đổi chất nam, nên temperature văn phòng thường quá thấp với nữ.",
  },
];
