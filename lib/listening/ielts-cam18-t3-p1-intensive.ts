import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'd like to join", "I would like to join"] },
    { id: "g2", answers: ["That's great", "That is great"] },
    { id: "g3", answers: ["would you like to complete it"] },
    { id: "g4", answers: ["can I take your", "Can I take your"] },
    { id: "g5", answers: ["That's right", "That is right"] },
    { id: "g6", answers: ["So how did you hear about"] },
    { id: "g7", answers: ["I usually do that"] },
    { id: "g8", answers: ["he'd heard good things", "he had heard good things"] },
    { id: "g9", answers: ["what do you hope to get from"] },
    { id: "g10", answers: ["That's a good idea", "That is a good idea"] },
    { id: "g11", answers: ["If I could just find out"] },
    { id: "g12", answers: ["Not yet"] },
    { id: "g13", answers: ["Let's start with", "Let us start with"] },
    { id: "g14", answers: ["I see"] },
    { id: "g15", answers: ["that's a great theme", "that is a great theme"] },
    { id: "g16", answers: ["I should have waited"] },
    { id: "g17", answers: ["that's a difficult subject", "that is a difficult subject"] },
    { id: "g18", answers: ["you seem to be really keen"] },
  ],
  lines: [
    { speaker: "BREDA", segments: [{ type: "text", text: "Hello, Wayside Camera Club, Breda speaking." }] },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "Oh, hello, um, my name's Dan and " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " your club." },
      ],
    },
    {
      speaker: "BREDA",
      segments: [
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", Dan. We have an application form – " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: " over the phone, then you can ask any questions you might have?" },
      ],
    },
    { speaker: "DAN", segments: [{ type: "text", text: "Oh, yes, thanks." }] },
    {
      speaker: "BREDA",
      segments: [{ type: "text", text: "OK, so what's your family name?" }],
    },
    { speaker: "DAN", segments: [{ type: "text", text: "It's Green – Dan Green." }] },
    {
      speaker: "BREDA",
      segments: [
        { type: "text", text: "So – " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " email address?" },
      ],
    },
    { speaker: "DAN", segments: [{ type: "text", text: "Yes, it's dan1068@market.com." }] },
    { speaker: "BREDA", segments: [{ type: "text", text: "Thanks. And what about your home address?" }] },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "Well, I'm about ten miles away from your club in Peacetown. I live in a house there.",
        },
      ],
    },
    { speaker: "BREDA", segments: [{ type: "text", text: "OK, so what's the house number and street?" }] },
    { speaker: "DAN", segments: [{ type: "text", text: "It's 52 Marrowfield Street." }] },
    {
      speaker: "BREDA",
      segments: [{ type: "text", text: "Is that M-A double R-O-W-F-I-E-L-D?" }],
    },
    {
      speaker: "DAN",
      segments: [{ type: "gap", gapId: "g5" }, { type: "text", text: "." }],
    },
    { speaker: "BREDA", segments: [{ type: "text", text: "… and that's Peacetown, you said?" }] },
    { speaker: "DAN", segments: [{ type: "text", text: "Uhuh." }] },
    {
      speaker: "BREDA",
      segments: [
        { type: "gap", gapId: "g6" },
        { type: "text", text: " our club? Did you look on the internet?" },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", but this time, well, I was talking to a relative the other day and he suggested it.",
        },
      ],
    },
    { speaker: "BREDA", segments: [{ type: "text", text: "Oh, is he a member too?" }] },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "He belongs to another club – but " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " about yours." },
      ],
    },
    {
      speaker: "BREDA",
      segments: [
        { type: "text", text: "OK. So " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " joining?" },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "Well, one thing that really interests me is the competitions that you have. I enjoy entering those.",
        },
      ],
    },
    { speaker: "BREDA", segments: [{ type: "text", text: "Right. Anything else?" }] },
    {
      speaker: "DAN",
      segments: [{ type: "text", text: "Well, I also like to socialise with other photographers." }],
    },
    { speaker: "BREDA", segments: [{ type: "text", text: "That's great. So what type of membership would you like?" }] },
    { speaker: "DAN", segments: [{ type: "text", text: "What are the options?" }] },
    {
      speaker: "BREDA",
      segments: [
        {
          type: "text",
          text: "It's £30 a year for full membership or £20 a year if you're an associate.",
        },
      ],
    },
    { speaker: "DAN", segments: [{ type: "text", text: "I think I'll go for the full membership, then." }] },
    {
      speaker: "BREDA",
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: " because you can't vote in meetings with an associate membership." },
      ],
    },
    {
      speaker: "BREDA",
      segments: [
        { type: "gap", gapId: "g11" },
        { type: "text", text: " a bit more about you …" },
      ],
    },
    { speaker: "DAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "BREDA",
      segments: [
        {
          type: "text",
          text: "So you said you wanted to compete – have you ever won any photography competitions?",
        },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", but I have entered three in the past." },
      ],
    },
    {
      speaker: "BREDA",
      segments: [
        { type: "text", text: "Oh, that's interesting. So why don't you tell me something about those? " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " the first one." },
      ],
    },
    {
      speaker: "DAN",
      segments: [{ type: "text", text: "Well, the theme was entitled 'Domestic Life'." }],
    },
    {
      speaker: "BREDA",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: " – so it had to be something related to the home?" },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "Yeah. I chose to take a photo of a family sitting round the dinner table having a meal, and, um, I didn't win, but I did get some feedback.",
        },
      ],
    },
    { speaker: "BREDA", segments: [{ type: "text", text: "Oh, what did the judges say?" }] },
    { speaker: "DAN", segments: [{ type: "text", text: "That it was too 'busy' as a picture." }] },
    {
      speaker: "BREDA",
      segments: [
        { type: "text", text: "Aha – so it was the composition of the picture that they criticised?" },
      ],
    },
    {
      speaker: "DAN",
      segments: [{ type: "text", text: "That's right – and once they'd told me that, I could see my mistake." }],
    },
    { speaker: "BREDA", segments: [{ type: "text", text: "So what was the theme of the second competition?" }] },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "Well, my university was on the coast and that area gets a lot of beautiful sunsets so that was the theme.",
        },
      ],
    },
    {
      speaker: "BREDA",
      segments: [
        { type: "text", text: "Oh, sunsets, " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "Yes. The instructions were to capture the clouds as well – it couldn't just be blue sky and a setting sun.",
        },
      ],
    },
    {
      speaker: "BREDA",
      segments: [{ type: "text", text: "Sure, cause they give you all those amazing pinks and purples." }],
    },
    {
      speaker: "DAN",
      segments: [
        { type: "text", text: "Yeah – and I thought I'd done that well, but the feedback was that " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " a bit longer to get the shot." },
      ],
    },
    {
      speaker: "BREDA",
      segments: [{ type: "text", text: "I see. So the timing wasn't right." }],
    },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "Yes – I took it too soon, basically. And then the third competition I entered was called 'Animal Magic'.",
        },
      ],
    },
    {
      speaker: "BREDA",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "!" },
      ],
    },
    { speaker: "DAN", segments: [{ type: "text", text: "I know! I had to take hundreds of shots." }] },
    { speaker: "BREDA", segments: [{ type: "text", text: "I'm sure – because animals move all the time." }] },
    {
      speaker: "DAN",
      segments: [
        {
          type: "text",
          text: "That's what we had to show – there had to be some movement in the scene. I got a great shot of a fox in the end, but I took it at night and, well, I suspected that it was a bit dark, which is what I was told.",
        },
      ],
    },
    {
      speaker: "BREDA",
      segments: [
        { type: "text", text: "Well Dan – " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " and we'd be delighted to have you in our club. I'm sure we can help with all those areas that you've outlined.",
        },
      ],
    },
    { speaker: "DAN", segments: [{ type: "text", text: "Thanks, that's great." }] },
  ],
};

export const CAM18_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Home address: 52 ______ Street, Peacetown",
    questionVi: "Home address: 52 ______ Street, Peacetown",
    modelParaphraseEn: "It's 52 Marrowfield Street – M-A double R-O-W-F-I-E-L-D",
    modelParaphraseVi: "It's 52 Marrowfield Street – M-A double R-O-W-F-I-E-L-D",
    acceptedAnswers: ["Marrowfield"],
    explanationEn: "The street name is spelled out: Marrowfield.",
    explanationVi: "Tên phố được đánh vần: Marrowfield.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "Heard about us: from a ______",
    questionVi: "Heard about us: from a ______",
    modelParaphraseEn: "I was talking to a relative the other day and he suggested it – not the internet",
    modelParaphraseVi: "I was talking to a relative the other day and he suggested it – not the internet",
    acceptedAnswers: ["relative"],
    explanationEn: "He usually uses the internet, but this time a relative suggested the club.",
    explanationVi: "Thường tìm trên internet, lần này thì relative gợi ý.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "Reasons for joining: to enter competitions to ______",
    questionVi: "Reasons for joining: to enter competitions to ______",
    modelParaphraseEn: "I also like to socialise with other photographers",
    modelParaphraseVi: "I also like to socialise with other photographers",
    acceptedAnswers: ["socialise", "socialize"],
    explanationEn: "Competitions are already on the form; the second reason is to socialise.",
    explanationVi: "Thi ảnh đã có trên form; lý do thứ hai là socialise.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "Type of membership: ______ membership (£30)",
    questionVi: "Type of membership: ______ membership (£30)",
    modelParaphraseEn: "£30 a year for full membership – I'll go for the full membership",
    modelParaphraseVi: "£30 a year for full membership – I'll go for the full membership",
    acceptedAnswers: ["full"],
    explanationEn: "£30 = full (associate is £20 and cannot vote).",
    explanationVi: "£30 = full (associate £20 và không được vote).",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "Title of competition: '______'",
    questionVi: "Title of competition: '______'",
    modelParaphraseEn: "the theme was entitled 'Domestic Life'",
    modelParaphraseVi: "the theme was entitled 'Domestic Life'",
    acceptedAnswers: ["Domestic Life"],
    explanationEn: "First competition title = Domestic Life (a scene in the home).",
    explanationVi: "Cuộc thi 1 = Domestic Life (cảnh trong nhà).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "'Beautiful Sunsets' — scene must show some ______",
    questionVi: "'Beautiful Sunsets' — scene must show some ______",
    modelParaphraseEn: "The instructions were to capture the clouds as well – not just blue sky and a setting sun",
    modelParaphraseVi: "The instructions were to capture the clouds as well – not just blue sky and a setting sun",
    acceptedAnswers: ["clouds"],
    explanationEn: "The extra requirement is clouds, not only the sun.",
    explanationVi: "Yêu cầu thêm là clouds, không chỉ mặt trời.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Feedback: the ______ was wrong",
    questionVi: "Feedback: the ______ was wrong",
    modelParaphraseEn: "I should have waited a bit longer – I took it too soon. So the timing wasn't right",
    modelParaphraseVi: "I should have waited a bit longer – I took it too soon. So the timing wasn't right",
    acceptedAnswers: ["timing"],
    explanationEn: "He shot too soon; the judges' issue was timing.",
    explanationVi: "Chụp sớm quá; ban giám khảo chê timing.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Title of competition: '______'",
    questionVi: "Title of competition: '______'",
    modelParaphraseEn: "the third competition I entered was called 'Animal Magic'",
    modelParaphraseVi: "the third competition I entered was called 'Animal Magic'",
    acceptedAnswers: ["Animal Magic"],
    explanationEn: "Third title = Animal Magic.",
    explanationVi: "Cuộc thi 3 = Animal Magic.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Scene must show ______",
    questionVi: "Scene must show ______",
    modelParaphraseEn: "there had to be some movement in the scene – animals move all the time",
    modelParaphraseVi: "there had to be some movement in the scene – animals move all the time",
    acceptedAnswers: ["movement", "animal movement"],
    explanationEn: "The instruction was movement in the scene, not just any animal photo.",
    explanationVi: "Yêu cầu là movement trong cảnh, không phải chỉ có động vật.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "The photograph was too ______",
    questionVi: "The photograph was too ______",
    modelParaphraseEn: "I took it at night and I suspected that it was a bit dark, which is what I was told",
    modelParaphraseVi: "I took it at night and I suspected that it was a bit dark, which is what I was told",
    acceptedAnswers: ["dark"],
    explanationEn: "Shot at night → too dark.",
    explanationVi: "Chụp ban đêm → quá dark.",
  },
];
