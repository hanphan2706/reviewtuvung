import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM13_T2_P3_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["your class presentation"] },
    {
      id: "g2",
      answers: [
        "give it in next week",
      ],
    },
    { id: "g3", answers: ["And I'm really struggling", "And I am really struggling"] },
    {
      id: "g4",
      answers: [
        "didn't know much about it",
        "did not know much about it",
      ],
    },
    {
      id: "g5",
      answers: [
        "twenty minutes I've been allocated",
        "twenty minutes I have been allocated",
      ],
    },
    {
      id: "g6",
      answers: [
        "clear in your own mind",
      ],
    },
    { id: "g7", answers: ["work through developments in chronological order"] },
    { id: "g8", answers: ["make them water-repellent"] },
    { id: "g9", answers: ["stronger and lighter"] },
    {
      id: "g10",
      answers: [
        "tailoring what you say",
      ],
    },
    {
      id: "g11",
      answers: [
        "eats into the short time",
      ],
    },
    { id: "g12", answers: ["modify that sentence later"] },
    { id: "g13", answers: ["It was pretty rubbish"] },
    { id: "g14", answers: ["in next week's presentation"] },
    { id: "g15", answers: ["only occasionally glancing at your notes"] },
    { id: "g16", answers: ["looking at your laptop"] },
    {
      id: "g17",
      answers: [
        "seeing a big improvement",
      ],
    },
    { id: "g18", answers: ["next week's presentation"] },
  ],
  lines: [
    { speaker: "TUTOR", segments: [{ type: "text", text: "Ah … come in, Russ." }] },
    { speaker: "RUSS", segments: [{ type: "text", text: "Thank you." }] },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "Now you wanted to consult me about " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " on nanotechnology - you're due to " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ", aren't you?" },
      ],
    },
    {
      speaker: "RUSS",
      segments: [
        { type: "text", text: "That's right. " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: ". I chose the topic because I " },
        { type: "gap", gapId: "g4" },
        {
          type: "text",
          text: " and wanted to learn more, but now I've read so much about it, in a way there's too much to say - I could talk for much longer than the ",
        },
        { type: "gap", gapId: "g5" },
        {
          type: "text",
          text: ". Should I assume the other students don't know much, and give them a kind of general introduction, or should I try and make them share my fascination with a particular aspect?",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "You could do either, but you'll need to have it " },
        { type: "gap", gapId: "g6" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "RUSS", segments: [{ type: "text", text: "Then I think I'll give an overview." }] },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "OK. Now, one way of approaching this is to " },
        { type: "gap", gapId: "g7" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "RUSS", segments: [{ type: "text", text: "Uh-huh." }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "On the other hand, you could talk about the numerous ways that nanotechnology is being applied.",
        },
      ],
    },
    {
      speaker: "RUSS",
      segments: [
        { type: "text", text: "You mean things like thin films on camera displays to " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: ", and additives to make motorcycle helmets " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Exactly. Or another way would be to focus on its impact in one particular area, say medicine, or space exploration.",
        },
      ],
    },
    {
      speaker: "RUSS",
      segments: [
        { type: "text", text: "That would make it easier to focus. Perhaps I should do that." },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "I think that would be a good idea." }] },
    {
      speaker: "RUSS",
      segments: [{ type: "text", text: "Right. How important is it to include slides in the presentation?" }],
    },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "They aren't essential, by any means. And there's a danger of " },
        { type: "gap", gapId: "g10" },
        {
          type: "text",
          text: " to fit whatever slides you can find. While it can be good to include slides, you could end up spending too long looking for suitable ones. You might find it better to leave them out.",
        },
      ],
    },
    {
      speaker: "RUSS",
      segments: [
        {
          type: "text",
          text: "I see. Another thing I was wondering about was how to start. I know presentations often begin with 'First I'm going to talk about this, and then I'll talk about that', but I thought about asking the audience what they know about nanotechnology.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "That would be fine if you had an hour or two for the presentation, but you might find that you can't do anything with the answers you get, and it simply ",
        },
        { type: "gap", gapId: "g11" },
        { type: "text", text: " that's available." },
      ],
    },
    {
      speaker: "RUSS",
      segments: [
        {
          type: "text",
          text: "So, maybe I should mention a particular way that nanotechnology is used, to focus people's attention.",
        },
      ],
    },
    { speaker: "TUTOR", segments: [{ type: "text", text: "That sounds sensible." }] },
    {
      speaker: "RUSS",
      segments: [
        {
          type: "text",
          text: "What do you think I should do next? I really have to plan the presentation today and tomorrow.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Well, initially I think you should ignore all the notes you've made, take a small piece of paper, and write a single short sentence that ties together the whole presentation: it can be something as simple as 'Nanotechnology is already improving our lives'. Then start planning the content around that. You can always ",
        },
        { type: "gap", gapId: "g12" },
        { type: "text", text: ", if you need to." },
      ],
    },
    { speaker: "RUSS", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "OK, now let's think about actually giving the presentation. You've only given one before, if I remember correctly, about an experiment you'd been involved in.",
        },
      ],
    },
    {
      speaker: "RUSS",
      segments: [
        { type: "text", text: "That's right. " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: "!" },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Let's say it was better in some respects than in others. With regard to the structure. I felt that you ended rather abruptly, without rounding it off. Be careful not to do that ",
        },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "RUSS", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "And you made very little eye contact with the audience, because you were looking down at your notes most of the time. You need to be looking at the audience and ",
        },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "RUSS", segments: [{ type: "text", text: "Mmm." }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Your body language was a little odd. Every time you showed a slide, you turned your back on the audience so you could look at it - you should have been ",
        },
        { type: "gap", gapId: "g16" },
        {
          type: "text",
          text: ". And you kept scratching your head, so I found myself wondering when you were next going to do that, instead of listening to what you were saying!",
        },
      ],
    },
    {
      speaker: "RUSS",
      segments: [
        {
          type: "text",
          text: "Oh dear. What did you think of the language? I knew that not everyone was familiar with the subject, so I tried to make it as simple as I could.",
        },
      ],
    },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "Yes, that came across. You used a few words that are specific to the field, but you always explained what they meant, so the audience wouldn't have had any difficulty understanding.",
        },
      ],
    },
    { speaker: "RUSS", segments: [{ type: "text", text: "Uh-huh." }] },
    {
      speaker: "TUTOR",
      segments: [
        {
          type: "text",
          text: "I must say the handouts you prepared were well thought out. They were a good summary of your presentation, which people would be able to refer to later on. So well done on that.",
        },
      ],
    },
    { speaker: "RUSS", segments: [{ type: "text", text: "Thank you." }] },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "I hope that helps you with " },
        { type: "gap", gapId: "g18" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "RUSS", segments: [{ type: "text", text: "Yes, it will. Thanks a lot." }] },
    {
      speaker: "TUTOR",
      segments: [
        { type: "text", text: "I'll look forward to " },
        { type: "gap", gapId: "g17" },
        { type: "text", text: ", then." },
      ],
    },
  ],
};

export const CAM13_T2_P3_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q21",
    questionNumber: 21,
    questionEn: "Russ says that his difficulty in planning the presentation is due to",
    questionVi: "Russ says that his difficulty in planning the presentation is due to",
    modelParaphraseEn:
      "Should I assume the other students don't know much, and give them a kind of general introduction, or should I try and make them share my fascination with a particular aspect?",
    modelParaphraseVi:
      "Should I assume the other students don't know much, and give them a kind of general introduction, or should I try and make them share my fascination with a particular aspect?",
    acceptedAnswers: ["B", "his uncertainty about what he should try to achieve"],
    explanationEn:
      "B = uncertainty about what to achieve. He now knows a lot; the problem is overview vs one aspect, not lack of knowledge or short prep time.",
    explanationVi:
      "B = uncertainty about what to achieve. Giờ anh biết nhiều; vấn đề là overview hay one aspect, không phải thiếu kiến thức hay ít thời gian.",
  },
  {
    key: "kw-q22",
    questionNumber: 22,
    questionEn: "Russ and his tutor agree that his approach in the presentation will be",
    questionVi: "Russ and his tutor agree that his approach in the presentation will be",
    modelParaphraseEn:
      "another way would be to focus on its impact in one particular area, say medicine, or space exploration. That would make it easier to focus. Perhaps I should do that. I think that would be a good idea",
    modelParaphraseVi:
      "another way would be to focus on its impact in one particular area, say medicine, or space exploration. That would make it easier to focus. Perhaps I should do that. I think that would be a good idea",
    acceptedAnswers: ["A", "to concentrate on how nanotechnology is used in one field"],
    explanationEn:
      "A = one field. They reject a full chronological survey and a wide range of applications.",
    explanationVi:
      "A = one field. Họ không chọn chronological survey hay trải rộng mọi ứng dụng.",
  },
  {
    key: "kw-q23",
    questionNumber: 23,
    questionEn: "In connection with slides, the tutor advises Russ to",
    questionVi: "In connection with slides, the tutor advises Russ to",
    modelParaphraseEn:
      "They aren't essential, by any means. ... You might find it better to leave them out",
    modelParaphraseVi:
      "They aren't essential, by any means. ... You might find it better to leave them out",
    acceptedAnswers: ["C", "consider omitting slides altogether", "leave them out"],
    explanationEn:
      "C = consider omitting slides. Don't tailor the talk to whatever slides you can find, or spend too long looking for them.",
    explanationVi:
      "C = consider omitting slides. Đừng chỉnh bài theo slide tìm được, cũng đừng tốn quá nhiều thời gian tìm slide.",
  },
  {
    key: "kw-q24",
    questionNumber: 24,
    questionEn: "They both agree that the best way for Russ to start his presentation is",
    questionVi: "They both agree that the best way for Russ to start his presentation is",
    modelParaphraseEn:
      "maybe I should mention a particular way that nanotechnology is used, to focus people's attention. That sounds sensible",
    modelParaphraseVi:
      "maybe I should mention a particular way that nanotechnology is used, to focus people's attention. That sounds sensible",
    acceptedAnswers: ["C", "to provide an example"],
    explanationEn:
      "C = provide an example. Asking the audience would eat into the time; a contents-list opening is not chosen.",
    explanationVi:
      "C = provide an example. Hỏi khán giả sẽ tốn thời gian; mở đầu kiểu liệt kê nội dung không được chọn.",
  },
  {
    key: "kw-q25",
    questionNumber: 25,
    questionEn: "What does the tutor advise Russ to do next while preparing his presentation?",
    questionVi: "What does the tutor advise Russ to do next while preparing his presentation?",
    modelParaphraseEn:
      "ignore all the notes you've made, take a small piece of paper, and write a single short sentence that ties together the whole presentation",
    modelParaphraseVi:
      "ignore all the notes you've made, take a small piece of paper, and write a single short sentence that ties together the whole presentation",
    acceptedAnswers: ["A", "summarise the main point he wants to make", "write a single short sentence"],
    explanationEn:
      "A = summarise the main point. Ignore existing notes; don't start by listing topics.",
    explanationVi:
      "A = summarise the main point. Bỏ notes đã có; đừng bắt đầu bằng việc liệt kê topics.",
  },
  {
    key: "kw-q26",
    questionNumber: 26,
    questionEn: "structure (A–G)",
    questionVi: "structure (A–G)",
    modelParaphraseEn: "I felt that you ended rather abruptly, without rounding it off",
    modelParaphraseVi: "I felt that you ended rather abruptly, without rounding it off",
    acceptedAnswers: ["A", "lacked a conclusion", "ended rather abruptly"],
    explanationEn: "A = lacked a conclusion. Ended abruptly, without rounding it off.",
    explanationVi: "A = lacked a conclusion. Kết thúc đột ngột, không rounding it off.",
  },
  {
    key: "kw-q27",
    questionNumber: 27,
    questionEn: "eye contact (A–G)",
    questionVi: "eye contact (A–G)",
    modelParaphraseEn:
      "you made very little eye contact with the audience, because you were looking down at your notes most of the time",
    modelParaphraseVi:
      "you made very little eye contact with the audience, because you were looking down at your notes most of the time",
    acceptedAnswers: ["C", "not enough", "very little eye contact"],
    explanationEn: "C = not enough. Very little eye contact; looking down at notes most of the time.",
    explanationVi: "C = not enough. Rất ít eye contact; nhìn notes hầu hết thời gian.",
  },
  {
    key: "kw-q28",
    questionNumber: 28,
    questionEn: "body language (A–G)",
    questionVi: "body language (A–G)",
    modelParaphraseEn:
      "you turned your back on the audience so you could look at it ... And you kept scratching your head, so I found myself wondering when you were next going to do that, instead of listening",
    modelParaphraseVi:
      "you turned your back on the audience so you could look at it ... And you kept scratching your head, so I found myself wondering when you were next going to do that, instead of listening",
    acceptedAnswers: ["D", "sometimes distracting", "scratching your head"],
    explanationEn:
      "D = sometimes distracting. Turning his back and scratching his head pulled attention away from the talk.",
    explanationVi:
      "D = sometimes distracting. Quay lưng và gãi đầu làm mất tập trung khỏi bài nói.",
  },
  {
    key: "kw-q29",
    questionNumber: 29,
    questionEn: "choice of words (A–G)",
    questionVi: "choice of words (A–G)",
    modelParaphraseEn:
      "You used a few words that are specific to the field, but you always explained what they meant, so the audience wouldn't have had any difficulty understanding",
    modelParaphraseVi:
      "You used a few words that are specific to the field, but you always explained what they meant, so the audience wouldn't have had any difficulty understanding",
    acceptedAnswers: ["G", "not too technical", "always explained what they meant"],
    explanationEn: "G = not too technical. Specialist words were always explained.",
    explanationVi: "G = not too technical. Từ chuyên môn luôn được giải thích.",
  },
  {
    key: "kw-q30",
    questionNumber: 30,
    questionEn: "handouts (A–G)",
    questionVi: "handouts (A–G)",
    modelParaphraseEn:
      "They were a good summary of your presentation, which people would be able to refer to later on",
    modelParaphraseVi:
      "They were a good summary of your presentation, which people would be able to refer to later on",
    acceptedAnswers: ["B", "useful in the future", "refer to later on"],
    explanationEn: "B = useful in the future. A good summary people could refer to later.",
    explanationVi: "B = useful in the future. Tóm tắt tốt để xem lại sau.",
  },
];
