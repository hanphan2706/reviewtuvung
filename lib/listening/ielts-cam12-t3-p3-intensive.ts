import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM12_T3_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    {
      id: "g1",
      answers: ["I'm worried about our case study", "I am worried about our case study"],
    },
    { id: "g2", answers: ["talked us through it"] },
    {
      id: "g3",
      answers: ["OK, well it's quite straightforward", "OK, well it is quite straightforward"],
    },
    {
      id: "g4",
      answers: ["We've got our focus", "We have got our focus"],
    },
    { id: "g5", answers: ["made notes of"] },
    { id: "g6", answers: ["what a pain it is"] },
    { id: "g7", answers: ["take a lot of time"] },
    { id: "g8", answers: ["bring along some numerical data"] },
    { id: "g9", answers: ["plenty of those already"] },
    {
      id: "g10",
      answers: ["I wouldn't have thought", "I would not have thought"],
    },
    { id: "g11", answers: ["rather than concentrating on"] },
    { id: "g12", answers: ["as clear as possible"] },
    { id: "g13", answers: ["graphs, or tables, or charts"] },
    {
      id: "g14",
      answers: [
        "Oh, I hadn't realised that",
        "Oh, I had not realised that",
        "Oh, I hadn't realized that",
        "Oh, I had not realized that",
      ],
    },
    { id: "g15", answers: ["so few tourists"] },
    {
      id: "g16",
      answers: ["that's been improved now", "that has been improved now"],
    },
    {
      id: "g17",
      answers: ["Yes, it's really", "Yes, it is really"],
    },
    { id: "g18", answers: ["a bit of a"] },
  ],
  lines: [
    {
      speaker: "NATALIE",
      segments: [
        { type: "text", text: "Dave, " },
        { type: "gap", gapId: "g1" },
        {
          type: "text",
          text: ". I've done a bit of reading, but I'm not sure what's involved in actually writing a case study - I missed the lecture where Dr Baker ",
        },
        { type: "gap", gapId: "g2" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". " },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " - that's tourism at the Horton Castle site. And you said you'd done some reading about it." },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        { type: "text", text: "Yes, I found some articles and " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: " the main points." },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "Did you remember to keep a record of where you got the information from?",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        { type: "text", text: "Sure. I know " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: " when you forget that." },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "OK, so we can compare what we've read. Then we have to decide on a particular problem or need at our site. And then think about who we're going to interview to get more information.",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        {
          type: "text",
          text: "OK. So who'd that be? The people who work there? And presumably some of the tourists too?",
        },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "Yes, both those groups. So we'll have to go to the site to do that, I suppose. But we might also do some of our interviewing away from the site - we could even contact some people here in the city, like administrators involved in overseeing tourism.",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        {
          type: "text",
          text: "OK. So we'll need to think about our interview questions and fix times and places for the meetings. It's all going to ",
        },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        { type: "text", text: "Mmm. And if we can, we should ask our interviewees if they can " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " that we can add to support our findings." },
      ],
    },
    { speaker: "NATALIE", segments: [{ type: "text", text: "And photographs?" }] },
    {
      speaker: "DAVE",
      segments: [
        { type: "text", text: "I think we have " },
        { type: "gap", gapId: "g9" },
        {
          type: "text",
          text: ". But Dr Baker also said we have to establish with our interviewees whether we can identify them in our case study, or whether they want to be anonymous.",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        { type: "text", text: "Oh, " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " of that. OK, once we've got all this information, I suppose we have to analyse it.",
        },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "Yes, put it all together and choose what's relevant to the problem we're focusing on, and analyse that carefully to find out if we can identify any trends or regularities there. That's the main thing at this stage, ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " details or lots of facts." },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [{ type: "text", text: "OK. And then once we've analysed that, what next?" }],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "Well, then we need to think about what we do with the data we've selected to make it ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: " to our readers. Things like " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "NATALIE", segments: [{ type: "text", text: "Right." }] },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "Then the case study itself is mostly quite standard; we begin by presenting the problem, and giving some background, then go through the main sections, but the thing that surprised me is that in a normal report we'd end with some suggestions to deal with the problem or need we identified, but in a case study we end up with a question or a series of questions to our readers, and they decide what ought to be done.",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        {
          type: "text",
          text: "So basically, the problem we're addressing in our case study of the Horton Castle site is why ",
        },
        { type: "gap", gapId: "g15" },
        {
          type: "text",
          text: " are visiting it. And we'll find out more from our interviews, but I did find one report on the internet that suggested that one reason might be because as far as transport goes, access is difficult.",
        },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "I read that too, but that report was actually written ten years ago, when the road there was really bad, but ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". And I think there's plenty of fascinating stuff there for a really good day out, but you'd never realise it from the castle website - maybe that's the problem.",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        { type: "gap", gapId: "g17" },
        { type: "text", text: " dry and boring." },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "I read somewhere a suggestion that what the castle needs is a visitor centre. So we could have a look for some information about that on the internet. What would we need to know?",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        {
          type: "text",
          text: "Well, who'd use it for a start. It'd be good to know what categories the visitors fell into too, like school parties or retired people, but I think we'd have to talk to staff to get that information.",
        },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "OK. And as we're thinking of suggesting a visitor centre we'd also have to look at potential problems. I mean, obviously it wouldn't be cheap to set up.",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        {
          type: "text",
          text: "No, but it could be a really good investment. And as it's on a historical site it'd need to get special planning permission, I expect. That might be hard.",
        },
      ],
    },
    {
      speaker: "DAVE",
      segments: [
        {
          type: "text",
          text: "Right, especially as the only possible place for it would be at the entrance, and that's right in front of the castle.",
        },
      ],
    },
    { speaker: "NATALIE", segments: [{ type: "text", text: "Mmm." }] },
    {
      speaker: "DAVE",
      segments: [
        { type: "text", text: "But it could be a good thing for the town of Horton. At present it's " },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: " ghost town. Once they've left school and got any skills or qualifications, the young people all get out as fast as they can to get jobs in the city, and the only people left are children and those who've retired.",
        },
      ],
    },
    {
      speaker: "NATALIE",
      segments: [
        {
          type: "text",
          text: "Right. Something else we could investigate would be the potential damage that tourists might cause to the castle site, I mean their environmental impact. At present the tourists can just wander round wherever they want, but if numbers increase, there might have to be some restrictions, like sticking to marked ways. And there'd need to be guides and wardens around to make sure these were enforced.",
        },
      ],
    },
    {
      speaker: "DAVE",
      segments: [{ type: "text", text: "Yes, we could look at that too. OK, well …" }],
    },
  ],
};

export const CAM12_T3_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Locate and read relevant articles, noting key information and also ______ (A–H)",
    questionVi: "Locate and read relevant articles, noting key information and also ______ (A–H)",
    modelParaphraseEn: "Did you remember to keep a record of where you got the information from?",
    modelParaphraseVi: "Did you remember to keep a record of where you got the information from?",
    acceptedAnswers: ["C", "sources", "where you got the information from"],
    explanationEn: "C = sources. Keep a record of where the information came from.",
    explanationVi: "C = sources. Ghi lại nơi lấy information.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Select interviewees – these may be site ______ , visitors or city 23 (A–H)",
    questionVi: "Select interviewees – these may be site ______ , visitors or city 23 (A–H)",
    modelParaphraseEn: "The people who work there? And presumably some of the tourists too?",
    modelParaphraseVi: "The people who work there? And presumably some of the tourists too?",
    acceptedAnswers: ["E", "employees", "people who work there"],
    explanationEn: "E = employees (people who work there). Visitors/tourists are already on the flowchart.",
    explanationVi: "E = employees (people who work there). Visitors/tourists đã có trên flowchart.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "Select interviewees – site 22, visitors or city ______ (A–H)",
    questionVi: "Select interviewees – site 22, visitors or city ______ (A–H)",
    modelParaphraseEn:
      "we could even contact some people here in the city, like administrators involved in overseeing tourism",
    modelParaphraseVi:
      "we could even contact some people here in the city, like administrators involved in overseeing tourism",
    acceptedAnswers: ["H", "officials", "administrators involved in overseeing tourism"],
    explanationEn: "H = officials (city administrators overseeing tourism).",
    explanationVi: "H = officials (administrators ở city phụ trách tourism).",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "Check whether ______ of interviewees can be used (A–H)",
    questionVi: "Check whether ______ of interviewees can be used (A–H)",
    modelParaphraseEn:
      "whether we can identify them in our case study, or whether they want to be anonymous",
    modelParaphraseVi:
      "whether we can identify them in our case study, or whether they want to be anonymous",
    acceptedAnswers: ["B", "names", "identify them", "anonymous"],
    explanationEn: "B = names. Check if they can be identified or want to stay anonymous.",
    explanationVi: "B = names. Kiểm tra có được identify hay muốn anonymous.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "Select relevant information and try to identify ______ (A–H)",
    questionVi: "Select relevant information and try to identify ______ (A–H)",
    modelParaphraseEn: "analyse that carefully to find out if we can identify any trends or regularities",
    modelParaphraseVi: "analyse that carefully to find out if we can identify any trends or regularities",
    acceptedAnswers: ["A", "patterns", "trends or regularities"],
    explanationEn: "A = patterns (trends or regularities), not details or lots of facts.",
    explanationVi: "A = patterns (trends or regularities), không phải details hay lots of facts.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "Do NOT end with ______ (A–H)",
    questionVi: "Do NOT end with ______ (A–H)",
    modelParaphraseEn:
      "in a normal report we'd end with some suggestions to deal with the problem … but in a case study we end up with a question or a series of questions",
    modelParaphraseVi:
      "in a normal report we'd end with some suggestions to deal with the problem … but in a case study we end up with a question or a series of questions",
    acceptedAnswers: ["F", "solutions", "suggestions to deal with the problem"],
    explanationEn:
      "F = solutions. A normal report ends with suggestions; a case study ends with questions for the reader.",
    explanationVi:
      "F = solutions. Report thường kết bằng suggestions; case study kết bằng questions cho reader.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn:
      "Natalie and Dave agree one reason why so few people visit Horton Castle is that A the publicity is poor / B it is difficult to get to / C there is little there of interest",
    questionVi:
      "Natalie and Dave agree one reason why so few people visit Horton Castle is that A the publicity is poor / B it is difficult to get to / C there is little there of interest",
    modelParaphraseEn:
      "there's plenty of fascinating stuff there for a really good day out, but you'd never realise it from the castle website - maybe that's the problem",
    modelParaphraseVi:
      "there's plenty of fascinating stuff there for a really good day out, but you'd never realise it from the castle website - maybe that's the problem",
    acceptedAnswers: ["A", "the publicity is poor", "castle website"],
    explanationEn:
      "A = publicity is poor (dry, boring website). Access was a problem ten years ago but the road has been improved. There is plenty of interest.",
    explanationVi:
      "A = publicity kém (website dry and boring). Access từng khó mười năm trước nhưng đường đã improved. Có plenty of interest.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn:
      "Natalie and Dave agree that the greatest problem with a visitor centre could be A covering the investment costs / B finding a big enough space for it / C dealing with planning restrictions",
    questionVi:
      "Natalie and Dave agree that the greatest problem with a visitor centre could be A covering the investment costs / B finding a big enough space for it / C dealing with planning restrictions",
    modelParaphraseEn:
      "as it's on a historical site it'd need to get special planning permission, I expect. That might be hard",
    modelParaphraseVi:
      "as it's on a historical site it'd need to get special planning permission, I expect. That might be hard",
    acceptedAnswers: ["C", "dealing with planning restrictions", "special planning permission"],
    explanationEn:
      "C = planning permission / restrictions. Cost is mentioned but it could be a good investment. Location is at the entrance, not a lack of space as the main agreed problem.",
    explanationVi:
      "C = planning permission / restrictions. Chi phí được nhắc nhưng có thể là good investment. Vị trí ở entrance, không phải thiếu space là vấn đề chính.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn:
      "What does Dave say about conditions in the town of Horton? A There is a lot of unemployment / B There are few people of working age / C There are opportunities for skilled workers",
    questionVi:
      "What does Dave say about conditions in the town of Horton? A There is a lot of unemployment / B There are few people of working age / C There are opportunities for skilled workers",
    modelParaphraseEn:
      "the young people all get out as fast as they can to get jobs in the city, and the only people left are children and those who've retired",
    modelParaphraseVi:
      "the young people all get out as fast as they can to get jobs in the city, and the only people left are children and those who've retired",
    acceptedAnswers: ["B", "There are few people of working age", "children and those who've retired"],
    explanationEn:
      "B = few people of working age. Young people leave for city jobs; only children and retired people remain. Not unemployment or local skilled-work opportunities.",
    explanationVi:
      "B = ít người ở độ tuổi làm việc. Young people đi city; chỉ còn children và retired. Không phải unemployment hay cơ hội skilled workers tại chỗ.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn:
      "According to Natalie, one way to prevent damage to the castle site would be to A insist visitors have a guide / B make visitors keep to the paths / C limit visitor numbers",
    questionVi:
      "According to Natalie, one way to prevent damage to the castle site would be to A insist visitors have a guide / B make visitors keep to the paths / C limit visitor numbers",
    modelParaphraseEn: "there might have to be some restrictions, like sticking to marked ways",
    modelParaphraseVi: "there might have to be some restrictions, like sticking to marked ways",
    acceptedAnswers: ["B", "make visitors keep to the paths", "sticking to marked ways"],
    explanationEn:
      "B = keep to the paths / marked ways. Guides and wardens enforce those restrictions; she does not say insist on a guide or cap numbers.",
    explanationVi:
      "B = keep to the paths / marked ways. Guides and wardens để enforce; không nói bắt buộc có guide hay limit số khách.",
  },
];
