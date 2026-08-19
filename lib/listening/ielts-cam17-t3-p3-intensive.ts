import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM17_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I'm here to talk to you about", "I am here to talk to you about"] },
    { id: "g2", answers: ["even though it can be tougher than you think"] },
    { id: "g3", answers: ["doesn't have the same appeal", "does not have the same appeal"] },
    { id: "g4", answers: ["I've already thought about that", "I have already thought about that"] },
    { id: "g5", answers: ["you'll be working with schools", "you will be working with schools"] },
    { id: "g6", answers: ["I wouldn't rely on that", "I would not rely on that"] },
    { id: "g7", answers: ["that's not always easy", "that is not always easy"] },
    { id: "g8", answers: ["we've always been lucky with that", "we have always been lucky with that"] },
    { id: "g9", answers: ["You have to be prepared for such things"] },
    { id: "g10", answers: ["That'll be up to you", "That will be up to you"] },
    { id: "g11", answers: ["let's talk about those a bit", "let us talk about those a bit"] },
    { id: "g12", answers: ["I think my communication skills are pretty good"] },
    {
      id: "g13",
      answers: ["You're working in a very people-based industry", "You are working in a very people-based industry"],
    },
    { id: "g14", answers: ["I'm working on it", "I am working on it"] },
    {
      id: "g15",
      answers: ["I'm certainly better when I have a deadline", "I am certainly better when I have a deadline"],
    },
    {
      id: "g16",
      answers: ["even though I'm multi-tasking like crazy", "even though I am multi-tasking like crazy"],
    },
    { id: "g17", answers: ["Isn't it better to be democratic", "Is it not better to be democratic"] },
    { id: "g18", answers: ["I see what you mean"] },
  ],
  lines: [
    {
      speaker: "HOLLY",
      segments: [
        { type: "text", text: "Hello Dr Green – " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " my work placement." },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "Oh yes, it's Holly, isn't it?" }] },
    { speaker: "HOLLY", segments: [{ type: "text", text: "Yes." }] },
    { speaker: "TUTOR", segments: [{ type: "text", text: "So, which work placement have you chosen?" }] },
    {
      speaker: "HOLLY",
      segments: [
        {
          type: "text",
          text: "I decided to go for the Orion Stadium placement. The event I'll be managing is one where I'm helping to set up a sports competition for primary school children.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "Yup. That's always a popular placement – " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " working with children." },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        {
          type: "text",
          text: "I know, but it's the fresh air that attracts me – organising something indoors ",
        },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", even though it might be fun." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "OK, so obviously safety's going to be one of your key concerns for this event.",
        },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        { type: "text", text: "Yes, " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: ". I'll need to make sure none of the equipment's damaged." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "Ah well, " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ", so the equipment will be their responsibility. However, the grounds and what goes on there will be yours.",
        },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        {
          type: "text",
          text: "Oh I see – that'll include keeping everyone within the boundary once they're in their kit and on the field?",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Exactly – you'll need to inspect areas like changing rooms as well for anything someone can trip over, but your main priority will be not to lose anyone!",
        },
      ],
    },
    { speaker: "HOLLY", segments: [{ type: "text", text: "Right. I'll need staff to help with that." }] },
    { speaker: "TUTOR", segments: [{ type: "text", text: "And don't forget about the spectators." }] },
    {
      speaker: "HOLLY",
      segments: [
        {
          type: "text",
          text: "Mmm. I was thinking that many of them will be parents, who could help run the event.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: ". They'll be more interested in filming their children than volunteering.",
        },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        { type: "text", text: "I'll need to make sure they don't interfere with events doing that!" },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "And " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ", especially when a proud parent's trying to get a snap of their child and you want them to move elsewhere.",
        },
      ],
    },
    { speaker: "HOLLY", segments: [{ type: "text", text: "OK. What about the scheduling?" }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "With sporting events there are all sorts of things that can alter the timetable – like rain, for instance – though so far, ",
        },
        { type: "gap", gapId: "g8" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        {
          type: "text",
          text: "Yeah, and I was thinking about what to do if someone got hurt as well. I know that last year that caused a terrible delay.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        {
          type: "text",
          text: "Oh. What if a match ends in a draw – do you let the teams keep going until someone wins?",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "gap", gapId: "g10" },
        { type: "text", text: " – and again, you need to plan for it." },
      ],
    },
    { speaker: "HOLLY", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Now, the aim of your work placement is to give you the opportunity to develop the skills that an events manager needs. So, ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        { type: "text", text: "Well, " },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ". I can talk on the phone to people and book venues and that kind of thing." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Good – just remember it isn't only about what you say. If you meet someone face-to-face and want to persuade them to be a sponsor, for example …",
        },
      ],
    },
    { speaker: "HOLLY", segments: [{ type: "text", text: "Oh, I'll dress up for that! Sure." }] },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "Good. Let's go on to think about your organisational skills. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " and that means things won't always go to plan." },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        { type: "text", text: "I guess it's being prepared to make changes that matters." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "That's right. You may have to make an on-the-spot change to a timetable because of a problem you hadn't anticipated …",
        },
      ],
    },
    { speaker: "HOLLY", segments: [{ type: "text", text: "… just do it! OK" }] },
    { speaker: "TUTOR", segments: [{ type: "text", text: "How's your time management these days?" }] },
    {
      speaker: "HOLLY",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: " – " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: ", which is why this work suits me." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "Yes, but it's how you respond as that deadline approaches!" },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [{ type: "text", text: "I know I've got to look calm even if I'm in a panic." }],
    },
    {
      speaker: "TUTOR",
      segments: [{ type: "text", text: "Just think to yourself – no one must know I'm under pressure." }],
    },
    {
      speaker: "HOLLY",
      segments: [
        { type: "text", text: "Yeah – " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Another skill that events managers need is creativity. Often your client has what we call the 'big picture' idea, but it's up to the events manager to think of all the fine points that go to making it work.",
        },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        { type: "text", text: "Right, so I need to listen carefully to that idea and then fill in all the gaps." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "That's right. And you'll have a team working under you, so another key skill is leadership. Your team may have lots of ideas too, but you've got to make the ultimate choices. Do we have refreshments inside or out, for example?",
        },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "It's a nice idea, but you have the ultimate responsibility. So, believe in what you think best. Be prepared to say 'yes', that's a good idea but it won't work here.",
        },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ". What about the networking side of things? I know it's an area that a lot of students worry about because we don't have much experience to offer others.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "But even without it – you can still be an interesting person with useful ideas. And the more people you impress, the better.",
        },
      ],
    },
    {
      speaker: "HOLLY",
      segments: [{ type: "text", text: "I guess that will help me when I apply for a real job." }],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Exactly – think ahead – remember what your ambitions are and keep them in mind.",
        },
      ],
    },
    { speaker: "HOLLY", segments: [{ type: "text", text: "Definitely." }] },
  ],
};

export const CAM17_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Holly has chosen the Orion Stadium placement because B it is outdoors",
    questionVi: "Holly chọn Orion Stadium vì B ở ngoài trời",
    modelParaphraseEn:
      "it's the fresh air that attracts me – organising something indoors doesn't have the same appeal, even though it might be fun",
    modelParaphraseVi:
      "it's the fresh air that attracts me – organising something indoors doesn't have the same appeal, even though it might be fun",
    acceptedAnswers: ["B", "it is outdoors", "fresh air"],
    explanationEn:
      "B = outdoors / fresh air. Working with children can be tougher, and indoor events might be fun – those are not her reasons.",
    explanationVi:
      "B = outdoors / fresh air. Làm với trẻ khó hơn, và sự kiện indoor cũng có thể vui – không phải lý do của cô.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Which aspect of safety does Dr Green emphasise most? A ensuring children stay in the stadium",
    questionVi: "Dr Green nhấn mạnh khía cạnh an toàn nào? A giữ trẻ trong sân",
    modelParaphraseEn: "keeping everyone within the boundary … your main priority will be not to lose anyone",
    modelParaphraseVi: "keeping everyone within the boundary … your main priority will be not to lose anyone",
    acceptedAnswers: ["A", "ensuring children stay in the stadium", "not to lose anyone", "within the boundary"],
    explanationEn:
      "A = keep children in the stadium. Equipment is the schools' job. Trip hazards in changing rooms matter, but losing someone is the main priority.",
    explanationVi:
      "A = giữ trẻ trong sân. Thiết bị là việc của trường. Vướng chân ở changing rooms có nhắc, nhưng ưu tiên là không để lạc ai.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "What does Dr Green say about the spectators? A They can be hard to manage",
    questionVi: "Dr Green nói gì về khán giả? A Họ khó quản",
    modelParaphraseEn:
      "that's not always easy, especially when a proud parent's trying to get a snap of their child and you want them to move elsewhere",
    modelParaphraseVi:
      "that's not always easy, especially when a proud parent's trying to get a snap of their child and you want them to move elsewhere",
    acceptedAnswers: ["A", "They can be hard to manage", "not always easy"],
    explanationEn:
      "A = hard to manage (photos / filming). Do not rely on them as volunteers. Photos are a problem, not a ban.",
    explanationVi:
      "A = khó quản (chụp / quay). Đừng trông vào họ làm tình nguyện. Ảnh gây rắc rối, không phải cấm chụp.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "What has affected the schedule in the past? B an injury",
    questionVi: "Điều gì từng làm lịch bị đảo? B chấn thương",
    modelParaphraseEn: "what to do if someone got hurt as well. I know that last year that caused a terrible delay",
    modelParaphraseVi: "what to do if someone got hurt as well. I know that last year that caused a terrible delay",
    acceptedAnswers: ["B", "an injury", "someone got hurt"],
    explanationEn:
      "B = an injury caused a delay last year. Rain can change the timetable, but they have been lucky so far. Extra time for a draw is hypothetical.",
    explanationVi:
      "B = chấn thương từng làm trễ năm ngoái. Mưa có thể đổi lịch nhưng họ vẫn may. Hiệp phụ khi hòa chỉ là giả định.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Communication — C having a smart appearance",
    questionVi: "Communication — C ăn mặc chỉn chu",
    modelParaphraseEn:
      "it isn't only about what you say. If you meet someone face-to-face and want to persuade them to be a sponsor … Oh, I'll dress up for that!",
    modelParaphraseVi:
      "it isn't only about what you say. If you meet someone face-to-face and want to persuade them to be a sponsor … Oh, I'll dress up for that!",
    acceptedAnswers: ["C", "having a smart appearance", "dress up"],
    explanationEn: "C = smart appearance / dress up when meeting a sponsor face-to-face – not only phone talk.",
    explanationVi: "C = smart appearance / dress up khi gặp nhà tài trợ trực tiếp – không chỉ nói điện thoại.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Organisation — A being flexible",
    questionVi: "Organisation — A linh hoạt",
    modelParaphraseEn:
      "I guess it's being prepared to make changes that matters. That's right. You may have to make an on-the-spot change",
    modelParaphraseVi:
      "I guess it's being prepared to make changes that matters. That's right. You may have to make an on-the-spot change",
    acceptedAnswers: ["A", "being flexible", "prepared to make changes", "on-the-spot change"],
    explanationEn: "A = being flexible – on-the-spot timetable changes when things don't go to plan.",
    explanationVi: "A = linh hoạt – đổi lịch tại chỗ khi việc không theo kế hoạch.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "Time management — D hiding your emotions",
    questionVi: "Time management — D giấu cảm xúc",
    modelParaphraseEn: "I've got to look calm even if I'm in a panic … no one must know I'm under pressure",
    modelParaphraseVi: "I've got to look calm even if I'm in a panic … no one must know I'm under pressure",
    acceptedAnswers: ["D", "hiding your emotions", "look calm", "no one must know I'm under pressure"],
    explanationEn:
      "D = hide emotions as the deadline approaches. Multi-tasking is mentioned, not 'one thing at a time'.",
    explanationVi:
      "D = giấu cảm xúc khi deadline đến. Có nhắc multi-tasking, không phải 'làm từng việc một'.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "Creativity — B focusing on details",
    questionVi: "Creativity — B tập trung vào chi tiết",
    modelParaphraseEn:
      "think of all the fine points that go to making it work … listen carefully to that idea and then fill in all the gaps",
    modelParaphraseVi:
      "think of all the fine points that go to making it work … listen carefully to that idea and then fill in all the gaps",
    acceptedAnswers: ["B", "focusing on details", "fine points", "fill in all the gaps"],
    explanationEn: "B = focusing on details / fine points. The client has the big picture; Holly fills the gaps.",
    explanationVi: "B = focusing on details / fine points. Khách có big picture; Holly lấp các gaps.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "Leadership — F trusting your own views",
    questionVi: "Leadership — F tin vào quan điểm của mình",
    modelParaphraseEn: "you have the ultimate responsibility. So, believe in what you think best",
    modelParaphraseVi: "you have the ultimate responsibility. So, believe in what you think best",
    acceptedAnswers: ["F", "trusting your own views", "believe in what you think best"],
    explanationEn: "F = trust your own views. Being democratic is nice, but Holly must make the ultimate choices.",
    explanationVi: "F = tin quan điểm của mình. Dân chủ thì hay, nhưng Holly phải quyết định cuối.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "Networking — H thinking of the future",
    questionVi: "Networking — H nghĩ tới tương lai",
    modelParaphraseEn: "that will help me when I apply for a real job. Exactly – think ahead – remember what your ambitions are",
    modelParaphraseVi: "that will help me when I apply for a real job. Exactly – think ahead – remember what your ambitions are",
    acceptedAnswers: ["H", "thinking of the future", "think ahead", "apply for a real job"],
    explanationEn: "H = thinking of the future / think ahead – impress people now for a real job later.",
    explanationVi: "H = thinking of the future / think ahead – gây ấn tượng bây giờ để xin việc sau.",
  },
];
