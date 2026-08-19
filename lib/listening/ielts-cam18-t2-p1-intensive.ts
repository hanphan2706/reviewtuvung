import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM18_T2_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["I understand you're interested in", "I understand you are interested in"] },
    { id: "g2", answers: ["I've got a bit of experience", "I have got a bit of experience"] },
    { id: "g3", answers: ["That's quite unusual", "that is quite unusual"] },
    { id: "g4", answers: ["Certainly is"] },
    { id: "g5", answers: ["I guess not"] },
    { id: "g6", answers: ["I suppose so"] },
    { id: "g7", answers: ["That's right", "That is right"] },
    { id: "g8", answers: ["I probably won't need one", "I probably will not need one"] },
    { id: "g9", answers: ["they're really keen on", "they are really keen on"] },
    { id: "g10", answers: ["get on well with"] },
    { id: "g11", answers: ["I've got no problem with that", "I have got no problem with that"] },
    { id: "g12", answers: ["That's good to hear", "That is good to hear"] },
    { id: "g13", answers: ["equally important"] },
    { id: "g14", answers: ["an eye for detail"] },
    { id: "g15", answers: ["I'm very used to", "I am very used to"] },
    { id: "g16", answers: ["Let's have a look at", "Let us have a look at"] },
    { id: "g17", answers: ["once you get the hang of it"] },
    { id: "g18", answers: ["that's worth thinking about", "that is worth thinking about"] },
  ],
  lines: [
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "So, " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " restaurant work?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yes. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: " and I can provide references." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "That's good. I can check all that later. Now, Milo's Restaurants have some vacancies at the moment. They're a really good company to work for. Lots of benefits.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Oh right." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yes. They've got a very good reputation for looking after staff. For example, all employees get training – even temporary staff.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh really? " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ", isn't it?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [{ type: "gap", gapId: "g4" }, { type: "text", text: "." }],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "And do staff get free uniforms too?" }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Um … you just need to wear a white T-shirt and black trousers, it says here. So " },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: " … But another benefit of working for a big company like this is that you can get a discount at any of their restaurants.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Even at weekends?" }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "No, but you'll be working then anyway." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh yes. " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: ". Most of their restaurants are in the city centre, aren't they? So, easy to get to by bus?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "Yes. " },
        { type: "gap", gapId: "g7" },
        {
          type: "text",
          text: ". But if you have to do a late shift and finish work after midnight, the company will pay for you to get a taxi home.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "gap", gapId: "g8" },
        { type: "text", text: ". I think I'd use my bike." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "OK. Now, they do have some quite specific requirements for the kind of person they're looking for. Milo's is a young, dynamic company and " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: " creating a strong team. It's really important that you can fit in and " },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " everyone." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Yeah. " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: ". It sounds good, actually. The last place I worked for was quite demanding too. We had to make sure we gave a really high level of service.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        { type: "gap", gapId: "g12" },
        { type: "text", text: " because that will be " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " at Milo's. I know they want people who have " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "That's fine. " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: " working in that kind of environment." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Perfect. So the only other thing that's required is good communication skills, so you'll need to have a certificate in English.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Sure." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "OK. " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: " the current job vacancies at Milo's. The first one is in Wivenhoe Street." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Sorry, where?" }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Wivenhoe. W-I-V-E-N-H-O-E. It's quite central, just off Cork Street.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Oh right." }] },
    { speaker: "WOMAN", segments: [{ type: "text", text: "They're looking for a breakfast supervisor." }] },
    { speaker: "MAN", segments: [{ type: "text", text: "That would be OK." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "So you're probably familiar with the kind of responsibilities involved. Obviously checking that all the portions are correct, etc., and then things like checking all the procedures for cleaning the equipment are being followed.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK. And what about the salary? In my last job I was getting £9.50 per hour. I was hoping to get a bit more than that.",
        },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Well, to begin with, you'd be getting £9.75 but that goes up to £11.25 after three months.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "That's not too bad. And I suppose it's a very early start?" },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Mmm. That's the only unattractive thing about this job. But then you have the afternoons and evenings free. So the restaurant starts serving breakfast from 7 a.m. And you'd have to be there at 5.30 to set everything up. But you'd be finished at 12.30.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "Mmm. Well, as you say, there are advantages to that." }],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Now, you might also be interested in the job at the City Road branch. That's for a junior chef, so again a position of responsibility.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "I might prefer that, actually." }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Right, well obviously this role would involve supporting the sous chef and other senior staff. And you'd be responsible for making sure there's enough stock each week – and sorting out all the deliveries.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "I've never done that before, but I imagine it's fairly straightforward, " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "Yes, and you'd be working alongside more experienced staff to begin with, so I'm sure it wouldn't be a problem. The salary's slightly higher here. It's an annual salary of £23,000.",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "WOMAN",
      segments: [
        { type: "text", text: "I know that if they like you, it's likely you'll be promoted quite quickly. So " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Yes. It does sound interesting. What are the hours like?" }] },
    {
      speaker: "WOMAN",
      segments: [
        {
          type: "text",
          text: "The usual, I think. There's a lot of evening and weekend work, but they're closed on Mondays. But you do get one Sunday off every four weeks. So would you like me to send off your …",
        },
      ],
    },
  ],
};

export const CAM18_T2_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "Benefits: ______ provided for all staff",
    questionVi: "Benefits: ______ provided for all staff",
    modelParaphraseEn: "all employees get training – even temporary staff",
    modelParaphraseVi: "all employees get training – even temporary staff",
    acceptedAnswers: ["training", "get training", "even temporary staff"],
    explanationEn: "“Provided for all staff” = “all employees get training – even temporary staff”.",
    explanationVi: "“Provided for all staff” = “all employees get training – even temporary staff”.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "______ during weekdays at all Milo's Restaurants",
    questionVi: "______ during weekdays at all Milo's Restaurants",
    modelParaphraseEn: "you can get a discount at any of their restaurants – not at weekends",
    modelParaphraseVi: "you can get a discount at any of their restaurants – not at weekends",
    acceptedAnswers: ["discount", "get a discount"],
    explanationEn: "Staff discount is at any Milo's restaurant, but not at weekends.",
    explanationVi: "Giảm giá nhân viên ở mọi nhà hàng Milo's, nhưng không vào weekend.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "______ provided after midnight",
    questionVi: "______ provided after midnight",
    modelParaphraseEn: "finish work after midnight, the company will pay for you to get a taxi home",
    modelParaphraseVi: "finish work after midnight, the company will pay for you to get a taxi home",
    acceptedAnswers: ["taxi", "taxi home", "pay for a taxi"],
    explanationEn: "“Provided after midnight” = they pay for a taxi home after a late shift.",
    explanationVi: "“Provided after midnight” = công ty trả taxi về nhà sau ca muộn.",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "must care about maintaining a high standard of ______",
    questionVi: "must care about maintaining a high standard of ______",
    modelParaphraseEn: "we gave a really high level of service – that will be equally important at Milo's",
    modelParaphraseVi: "we gave a really high level of service – that will be equally important at Milo's",
    acceptedAnswers: ["service", "high level of service", "high standard of service"],
    explanationEn: "“High standard of ___” = “a really high level of service”.",
    explanationVi: "“High standard of ___” = “a really high level of service”.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "must have a qualification in ______",
    questionVi: "must have a qualification in ______",
    modelParaphraseEn: "you'll need to have a certificate in English",
    modelParaphraseVi: "you'll need to have a certificate in English",
    acceptedAnswers: ["English", "certificate in English"],
    explanationEn: "“Qualification in” = “a certificate in English”.",
    explanationVi: "“Qualification in” = “a certificate in English”.",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "______ Street — breakfast supervisor",
    questionVi: "______ Street — breakfast supervisor",
    modelParaphraseEn: "The first one is in Wivenhoe Street – W-I-V-E-N-H-O-E",
    modelParaphraseVi: "The first one is in Wivenhoe Street – W-I-V-E-N-H-O-E",
    acceptedAnswers: ["Wivenhoe", "Wivenhoe Street"],
    explanationEn: "The street name is spelled out: Wivenhoe.",
    explanationVi: "Tên phố được đánh vần: Wivenhoe.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "Making sure ______ is clean",
    questionVi: "Making sure ______ is clean",
    modelParaphraseEn: "checking all the procedures for cleaning the equipment are being followed",
    modelParaphraseVi: "checking all the procedures for cleaning the equipment are being followed",
    acceptedAnswers: ["equipment", "cleaning the equipment"],
    explanationEn: "“Making sure ___ is clean” = procedures for cleaning the equipment.",
    explanationVi: "“Making sure ___ is clean” = quy trình vệ sinh equipment.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "Starting salary £______ per hour",
    questionVi: "Starting salary £______ per hour",
    modelParaphraseEn: "to begin with, you'd be getting £9.75 – then £11.25 after three months",
    modelParaphraseVi: "to begin with, you'd be getting £9.75 – then £11.25 after three months",
    acceptedAnswers: ["9.75", "£9.75"],
    explanationEn: "Starting pay is £9.75; £11.25 is after three months, not the start.",
    explanationVi: "Lương bắt đầu là £9.75; £11.25 là sau ba tháng, không phải lúc vào.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Maintaining stock and organising ______",
    questionVi: "Maintaining stock and organising ______",
    modelParaphraseEn: "making sure there's enough stock each week – and sorting out all the deliveries",
    modelParaphraseVi: "making sure there's enough stock each week – and sorting out all the deliveries",
    acceptedAnswers: ["deliveries", "sorting out deliveries"],
    explanationEn: "“Organising ___” = “sorting out all the deliveries”.",
    explanationVi: "“Organising ___” = “sorting out all the deliveries”.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "No work on a ______ once a month",
    questionVi: "No work on a ______ once a month",
    modelParaphraseEn: "you do get one Sunday off every four weeks",
    modelParaphraseVi: "you do get one Sunday off every four weeks",
    acceptedAnswers: ["Sunday", "one Sunday off", "every four weeks"],
    explanationEn: "“Once a month” = “one Sunday off every four weeks” — not Mondays (the restaurant is closed then).",
    explanationVi: "“Once a month” = “one Sunday off every four weeks” — không phải Monday (hôm đó quán đóng cửa).",
  },
];
