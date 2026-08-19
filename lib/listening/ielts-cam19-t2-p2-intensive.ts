import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM19_T2_P2_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I never really planned to be"] },
    { id: "g2", answers: ["although that was interesting"] },
    { id: "g3", answers: ["Then I found that the Lifeboat Institution was looking for volunteers"] },
    { id: "g4", answers: ["hard to miss"] },
    { id: "g5", answers: ["it's one of the largest in the country", "it is one of the largest in the country"] },
    { id: "g6", answers: ["rather than funding provided by the government"] },
    { id: "g7", answers: ["that kind of help is much needed"] },
    { id: "g8", answers: ["The doctors were particularly interested in my vision"] },
    { id: "g9", answers: ["I'd had laser eye surgery two years earlier", "I had had laser eye surgery two years earlier"] },
    { id: "g10", answers: ["it turned out I was OK", "it turned out I was okay"] },
    { id: "g11", answers: ["all the volunteers are contacted and rush to"] },
    { id: "g12", answers: ["Our team's proud that we usually achieve that", "Our team is proud that we usually achieve that"] },
    { id: "g13", answers: ["I have the ultimate responsibility for the lifeboat"] },
    { id: "g14", answers: ["it's very rare not to launch", "it is very rare not to launch"] },
    { id: "g15", answers: ["A lot of people underestimate"] },
    { id: "g16", answers: ["we couldn't manage without them", "we could not manage without them"] },
    { id: "g17", answers: ["that's an essential skill", "that is an essential skill"] },
    { id: "g18", answers: ["I've had to deal with a range of emergency situations", "I have had to deal with a range of emergency situations"] },
  ],
  lines: [
    {
      speaker: null,
      segments: [
        { type: "gap", gapId: "g1" },
        { type: "text", text: " a lifeboat volunteer when I came to live in Northsea." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "I'd been working in London as a website designer, but " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", I didn't like city life." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I'd been really keen on boats as a teenager, and I thought if I went to live by the sea, I might be able to pursue that interest a bit more in my free time. ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", so I decided to apply." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "The Lifeboat Institution building here in Northsea's " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: "; " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "It was built 15 years ago with funds provided by a generous member of the public, who'd lived here all her life. As the Lifeboat Institution is a charity that relies on that kind of donation, ",
        },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ", " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "When I applied, I had to have a health assessment. " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I used to be short-sighted, so I'd had to wear glasses, but ",
        },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " so that was OK." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "They gave me tests for colour blindness and they thought I might have a problem there, but ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "When the coastguard gets an alert, " },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " the lifeboat station." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "Our target's to get there in five minutes, then we try to get the boat off the dock and out to sea in another six to eight minutes. ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " – the average time across the country's eight and a half minutes." },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "As well as steering the lifeboat, as a 'helmsman', " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "I have to check that the equipment we use is in working order – we have special life jackets that can support up to four people in the water. And it's ultimately my decision whether it's safe to launch the boat. But ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: ", even in the worst weather." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "As well as going out on the lifeboat, my work involves other things too. ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " how windy conditions can change at sea, so I speak to youth groups and sailing clubs in the area about the sorts of problems that sailors and swimmers can have if the weather suddenly gets bad.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "We also have a lot of volunteers who organise activities to raise money for us, and ",
        },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "The training we get is a continuous process, focusing on technical competence and safe handling techniques, and it's given me the confidence to deal with extreme situations without panicking. I was glad I'd done a first aid course before I started, as that's a big help with the casualty care activities we do. We've done a lot on how to deal with ropes and tie knots – ",
        },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "After a year, I did a one-week residential course, led by specialists. They had a wave-tank where they could create extreme weather conditions – so we could get experience at what to do if the boat turned over in a storm at night, for example.",
        },
      ],
    },
    {
      speaker: null,
      segments: [
        { type: "text", text: "Since I started, " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: null,
      segments: [
        {
          type: "text",
          text: "But the work's hugely motivating. It's not just about saving lives – I've learned a lot about the technology involved. My background in IT's been useful here, and I can use my expertise to help other volunteers. They're a great group – we're like a family really, which helps when you're dragging yourself out of bed on a cold stormy night. But actually, it's the colder months that can be the most rewarding time. That's when the incidents tend to be more serious, and you realise that you can make a huge difference to the outcome.",
        },
      ],
    },
    {
      speaker: null,
      segments: [{ type: "text", text: "So if any of you listeners are interested…" }],
    },
  ],
};

export const CAM19_T2_P2_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q11",
    questionNumber: 11,
    questionEn: "What made David leave London and move to Northsea? A hobby / B shorter hours / C job unsatisfying",
    questionVi: "Vì sao David rời London? A hobby / B giờ ngắn hơn / C việc không thỏa mãn",
    modelParaphraseEn: "I'd been really keen on boats as a teenager … pursue that interest a bit more in my free time",
    modelParaphraseVi: "I'd been really keen on boats as a teenager … pursue that interest a bit more in my free time",
    acceptedAnswers: ["A", "hobby", "boats", "keen on boats", "pursue that interest"],
    explanationEn: "A = develop a hobby (boats). The website job was interesting; he just disliked city life.",
    explanationVi: "A = phát triển hobby (thuyền). Việc thiết kế web vẫn thú vị; anh không thích sống ở thành phố.",
  },
  {
    key: "kw-q12",
    questionNumber: 12,
    questionEn: "The Lifeboat Institution was built with money from: A local organisation / B local resident / C council",
    questionVi: "Tiền xây trạm: A tổ chức địa phương / B cư dân / C hội đồng",
    modelParaphraseEn: "built 15 years ago with funds provided by a generous member of the public, who'd lived here all her life",
    modelParaphraseVi: "built 15 years ago with funds provided by a generous member of the public, who'd lived here all her life",
    acceptedAnswers: ["B", "local resident", "generous member of the public"],
    explanationEn: "B = a local resident. It is a charity, not government / council funding.",
    explanationVi: "B = cư dân địa phương. Đây là charity, không phải tiền chính phủ / hội đồng.",
  },
  {
    key: "kw-q13",
    questionNumber: 13,
    questionEn: "Doctors were concerned that David: A might be colour blind / B short-sighted / C had eye surgery",
    questionVi: "Bác sĩ lo: A mù màu / B cận / C đã phẫu thuật mắt",
    modelParaphraseEn: "They gave me tests for colour blindness and they thought I might have a problem there, but it turned out I was OK",
    modelParaphraseVi: "They gave me tests for colour blindness and they thought I might have a problem there, but it turned out I was OK",
    acceptedAnswers: ["A", "colour blind", "color blind", "colour blindness"],
    explanationEn: "A = possible colour blindness (later fine). Short-sightedness had already been fixed by laser surgery.",
    explanationVi: "A = nghi mù màu (sau đó ổn). Cận thị đã được chữa bằng laser.",
  },
  {
    key: "kw-q14",
    questionNumber: 14,
    questionEn: "After arriving, they aim to launch within: A five minutes / B six to eight / C eight and a half",
    questionVi: "Sau khi tới trạm, ra khơi trong: A 5 phút / B 6–8 / C 8.5",
    modelParaphraseEn: "get there in five minutes, then … off the dock and out to sea in another six to eight minutes",
    modelParaphraseVi: "get there in five minutes, then … off the dock and out to sea in another six to eight minutes",
    acceptedAnswers: ["B", "six to eight minutes", "6 to 8 minutes", "six to eight"],
    explanationEn: "B = six to eight minutes after arriving. Five minutes is the travel target; 8.5 is the national average.",
    explanationVi: "B = 6–8 phút sau khi tới trạm. 5 phút là thời gian tới nơi; 8.5 là trung bình cả nước.",
  },
  {
    key: "kw-q15",
    questionNumber: 15,
    questionEn: "As helmsman, David decides: A crew members / B what equipment / C if the lifeboat should be launched",
    questionVi: "Helmsman quyết định: A thủy thủ đoàn / B thiết bị / C có ra khơi không",
    modelParaphraseEn: "it's ultimately my decision whether it's safe to launch the boat",
    modelParaphraseVi: "it's ultimately my decision whether it's safe to launch the boat",
    acceptedAnswers: ["C", "safe to launch", "whether it's safe to launch", "if the lifeboat should be launched"],
    explanationEn: "C = whether it is safe to launch. He also checks equipment, but the key decision is launching.",
    explanationVi: "C = có an toàn để ra khơi không. Có kiểm tra thiết bị, nhưng quyết định chính là launch.",
  },
  {
    key: "kw-q16",
    questionNumber: 16,
    questionEn: "Besides going out, David: A gives safety talks / B helps with fundraising / C recruits volunteers",
    questionVi: "Ngoài ra khơi, David: A nói chuyện an toàn / B gây quỹ / C tuyển TNV",
    modelParaphraseEn: "I speak to youth groups and sailing clubs … about the sorts of problems that sailors and swimmers can have",
    modelParaphraseVi: "I speak to youth groups and sailing clubs … about the sorts of problems that sailors and swimmers can have",
    acceptedAnswers: ["A", "gives talks on safety", "youth groups and sailing clubs", "safety at sea"],
    explanationEn: "A = safety talks. Other volunteers organise fundraising — he could not manage without them.",
    explanationVi: "A = nói chuyện an toàn. Tình nguyện viên khác gây quỹ — không phải David.",
  },
  {
    key: "kw-q17",
    questionNumber: 17,
    questionEn: "TWO things about training: C built up mental strength / E wave tank = survival practice",
    questionVi: "Hai ý về huấn luyện: C sức bền tinh thần / E bể sóng = kỹ thuật sống sót",
    modelParaphraseEn: "it's given me the confidence to deal with extreme situations without panicking",
    modelParaphraseVi: "it's given me the confidence to deal with extreme situations without panicking",
    acceptedAnswers: ["C", "mental strength", "without panicking", "confidence"],
    explanationEn: "C = mental strength / not panicking. First aid was already done; ropes/knots were essential, not brief.",
    explanationVi: "C = sức bền tinh thần / không hoảng. Sơ cứu đã học trước; dây/nút là kỹ năng thiết yếu, không phải ngắn.",
  },
  {
    key: "kw-q18",
    questionNumber: 18,
    questionEn: "(same list) E The wave tank activities provided practice in survival techniques",
    questionVi: "(cùng danh sách) E Bể sóng luyện kỹ thuật sống sót",
    modelParaphraseEn: "wave-tank … what to do if the boat turned over in a storm at night",
    modelParaphraseVi: "wave-tank … what to do if the boat turned over in a storm at night",
    acceptedAnswers: ["E", "wave tank", "wave-tank", "survival techniques", "boat turned over"],
    explanationEn: "E = wave-tank survival practice (capsize at night). The residential course is not about leadership.",
    explanationVi: "E = luyện sống sót trong bể sóng (lật thuyền ban đêm). Khóa nội trú không nói về leadership.",
  },
  {
    key: "kw-q19",
    questionNumber: 19,
    questionEn: "TWO most motivating things: A working as part of a team / B experiences in winter",
    questionVi: "Hai điều thôi thúc nhất: A làm việc nhóm / B trải nghiệm mùa đông",
    modelParaphraseEn: "They're a great group – we're like a family really",
    modelParaphraseVi: "They're a great group – we're like a family really",
    acceptedAnswers: ["A", "team", "family", "great group"],
    explanationEn: "A = team / family. He mentions technology and IT, but not new equipment or being thanked.",
    explanationVi: "A = team / family. Có nhắc công nghệ và IT, nhưng không phải thiết bị mới hay được cảm ơn.",
  },
  {
    key: "kw-q20",
    questionNumber: 20,
    questionEn: "(same list) B experiences when working in winter",
    questionVi: "(cùng danh sách) B trải nghiệm khi làm việc mùa đông",
    modelParaphraseEn: "it's the colder months that can be the most rewarding time – incidents tend to be more serious",
    modelParaphraseVi: "it's the colder months that can be the most rewarding time – incidents tend to be more serious",
    acceptedAnswers: ["B", "winter", "colder months", "most rewarding"],
    explanationEn: "B = winter / colder months are the most rewarding because incidents are more serious.",
    explanationVi: "B = mùa đông / colder months đáng giá nhất vì sự cố nghiêm trọng hơn.",
  },
];
