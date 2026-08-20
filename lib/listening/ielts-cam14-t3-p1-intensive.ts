import type {
  ListeningKeywordParaphraseRow,
  ListeningTranscriptClozeExercise,
} from "@/lib/listening/tactics-basic-flow-types";

export const CAM14_T3_P1_TRANSCRIPT_CLOZE: ListeningTranscriptClozeExercise = {
  gaps: [
    { id: "g1", answers: ["Have I come through", "have I come through"] },
    {
      id: "g2",
      answers: ["I'm the customer services manager", "I am the customer services manager"],
    },
    { id: "g3", answers: ["based in Perth"] },
    { id: "g4", answers: ["It'll be held over two days", "It will be held over two days"] },
    { id: "g5", answers: ["It'd have to be a weekend", "It would have to be a weekend"] },
    { id: "g6", answers: ["our conference facilities are already booked"] },
    {
      id: "g7",
      answers: [
        "I'm afraid that's booked too",
        "I am afraid that's booked too",
        "I am afraid that is booked too",
      ],
    },
    { id: "g8", answers: ["go for the February date"] },
    { id: "g9", answers: ["a bit about"] },
    { id: "g10", answers: ["fully equipped with"] },
    { id: "g11", answers: ["all set up"] },
    { id: "g12", answers: ["some sort of open area"] },
    { id: "g13", answers: ["before the conference starts"] },
    { id: "g14", answers: ["provide a buffet lunch"] },
    { id: "g15", answers: ["looking at for that"] },
    { id: "g16", answers: ["a 25% reduction"] },
    { id: "g17", answers: ["complimentary shuttle bus"] },
    { id: "g18", answers: ["make a night of it"] },
  ],
  lines: [
    { speaker: "ANGELA", segments: [{ type: "text", text: "Hello, Flanders conference hotel." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Oh, hi. I wanted to ask about conference facilities at the hotel. " },
        { type: "gap", gapId: "g1" },
        { type: "text", text: " to the right person?" },
      ],
    },
    {
      speaker: "ANGELA",
      segments: [
        { type: "text", text: "You have. " },
        { type: "gap", gapId: "g2" },
        { type: "text", text: ". My name's Angela. So how can I help you?" },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, I'm calling from Barrett and Stansons, we're a medical company " },
        { type: "gap", gapId: "g3" },
        { type: "text", text: "." },
      ],
    },
    { speaker: "ANGELA", segments: [{ type: "text", text: "Oh yes." }] },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "And we're organising a conference for our clients to be held in Sydney. ",
        },
        { type: "gap", gapId: "g4" },
        { type: "text", text: " and we're expecting about fifty or sixty people." },
      ],
    },
    { speaker: "ANGELA", segments: [{ type: "text", text: "When were you thinking of having it?" }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Some time early next year, like the end of January? " },
        { type: "gap", gapId: "g5" },
        { type: "text", text: "." },
      ],
    },
    {
      speaker: "ANGELA",
      segments: [
        { type: "text", text: "Let me see ... " },
        { type: "gap", gapId: "g6" },
        {
          type: "text",
          text: " for the weekend beginning January 28th. We could do the first weekend in February?",
        },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "How about January 21st?" }] },
    { speaker: "ANGELA", segments: [{ type: "gap", gapId: "g7" }, { type: "text", text: "." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Well, let's " },
        { type: "gap", gapId: "g8" },
        { type: "text", text: " then." },
      ],
    },
    { speaker: "ANGELA", segments: [{ type: "text", text: "So that's the weekend beginning the 4th." }] },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "OK. Now can you tell me " },
        { type: "gap", gapId: "g9" },
        { type: "text", text: " what conference facilities you have?" },
      ],
    },
    {
      speaker: "ANGELA",
      segments: [{ type: "text", text: "Sure. So for talks and presentations we have the Tesla room." }],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Sorry?" }] },
    {
      speaker: "ANGELA",
      segments: [
        {
          type: "text",
          text: "Tesla - that's spelled T-E-S-L-A. It holds up to a hundred people, and it's ",
        },
        { type: "gap", gapId: "g10" },
        { type: "text", text: " a projector and so on." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "How about a microphone?" }] },
    {
      speaker: "ANGELA",
      segments: [
        { type: "text", text: "Yes, that'll be " },
        { type: "gap", gapId: "g11" },
        {
          type: "text",
          text: " ready for you, and there'll be one that members of the audience can use too, for questions, if necessary.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Fine. And we'll also need " },
        { type: "gap", gapId: "g12" },
        {
          type: "text",
          text: " where people can sit and have a cup of coffee, and we'd like to have an exhibition of our products and services there as well, so that'll need to be quite a big space.",
        },
      ],
    },
    {
      speaker: "ANGELA",
      segments: [
        { type: "text", text: "That's fine, there's a central atrium with all those facilities, and you can come " },
        { type: "gap", gapId: "g13" },
        { type: "text", text: " if you want to set everything up." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "Great. And I presume there's wifi?" }] },
    {
      speaker: "ANGELA",
      segments: [{ type: "text", text: "Oh yes, that's free and available throughout the hotel." }],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "OK." }] },
    {
      speaker: "ANGELA",
      segments: [
        { type: "text", text: "Would you also like us to " },
        { type: "gap", gapId: "g14" },
        { type: "text", text: "? We can do a two-course meal with a number of different options." },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "What sort of price are we " },
        { type: "gap", gapId: "g15" },
        { type: "text", text: "?" },
      ],
    },
    {
      speaker: "ANGELA",
      segments: [
        {
          type: "text",
          text: "Well, I can send you a copy of the standard menu. That's $45 per person. Or you can have the special for $25 more.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [{ type: "text", text: "I think the standard should be OK, but yes, send me the menu." }],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "Now we're also going to need accommodation on the Saturday night for some of the participants ... I'm not sure how many, but probably about 25. So what do you charge for a room?",
        },
      ],
    },
    {
      speaker: "ANGELA",
      segments: [
        { type: "text", text: "Well, for conference attendees we have " },
        { type: "gap", gapId: "g16" },
        { type: "text", text: ", so we can offer you rooms at $135. Normally a standard room's $180." },
      ],
    },
    { speaker: "MAN", segments: [{ type: "text", text: "And does that include breakfast?" }] },
    {
      speaker: "ANGELA",
      segments: [
        {
          type: "text",
          text: "Sure. And of course, guests can also make use of all the other facilities at the hotel. So we've got a spa where you can get massages and facials and so on, and there's a pool up on the roof for the use of guests.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        { type: "text", text: "Great. Now what about transport links? The hotel's downtown, isn't it?" },
      ],
    },
    {
      speaker: "ANGELA",
      segments: [
        { type: "text", text: "Yes, it's about 12 kilometres from the airport, but there's a " },
        { type: "gap", gapId: "g17" },
        {
          type: "text",
          text: " for guests. And it's only about ten minutes' walk from the central railway station.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK. Now, I don't know Sydney very well, can you just give me an idea of the location of the hotel?",
        },
      ],
    },
    {
      speaker: "ANGELA",
      segments: [
        {
          type: "text",
          text: "Well, it's downtown on Wilby Street, that's quite a small street, and it's not very far from the sea. And of course if the conference attendees want to go out on the Saturday evening there's a huge choice of places to eat. Then if they want to ",
        },
        { type: "gap", gapId: "g18" },
        {
          type: "text",
          text: ", they can go on to one of the clubs in the area - there are a great many to choose from.",
        },
      ],
    },
    {
      speaker: "MAN",
      segments: [
        {
          type: "text",
          text: "OK. So if we go ahead with this, can you give me some information about how much ...",
        },
      ],
    },
  ],
};

export const CAM14_T3_P1_KEYWORD_PARAPHRASES: readonly ListeningKeywordParaphraseRow[] = [
  {
    key: "kw-q1",
    questionNumber: 1,
    questionEn: "the ______ room for talks",
    questionVi: "the ______ room for talks",
    modelParaphraseEn: "for talks and presentations we have the Tesla room - spelled T-E-S-L-A",
    modelParaphraseVi: "for talks and presentations we have the Tesla room - spelled T-E-S-L-A",
    acceptedAnswers: ["Tesla"],
    explanationEn: "The meeting room is Tesla (spelled T-E-S-L-A). It holds up to a hundred people.",
    explanationVi: "Phòng họp là Tesla (đánh vần T-E-S-L-A). Chứa tới một trăm người.",
  },
  {
    key: "kw-q2",
    questionNumber: 2,
    questionEn: "(projector and ______ available)",
    questionVi: "(projector and ______ available)",
    modelParaphraseEn: "How about a microphone? Yes, that'll be all set up ready for you",
    modelParaphraseVi: "How about a microphone? Yes, that'll be all set up ready for you",
    acceptedAnswers: ["microphone"],
    explanationEn: "A microphone will be set up, plus one for the audience to ask questions.",
    explanationVi: "Có microphone sẵn, và thêm một cái cho khán giả đặt câu hỏi.",
  },
  {
    key: "kw-q3",
    questionNumber: 3,
    questionEn: "area for coffee and an ______",
    questionVi: "area for coffee and an ______",
    modelParaphraseEn: "we'd like to have an exhibition of our products and services there as well",
    modelParaphraseVi: "we'd like to have an exhibition of our products and services there as well",
    acceptedAnswers: ["exhibition"],
    explanationEn: "Open area for coffee plus an exhibition of products and services (central atrium).",
    explanationVi: "Khu mở để uống cà phê và exhibition sản phẩm/dịch vụ (central atrium).",
  },
  {
    key: "kw-q4",
    questionNumber: 4,
    questionEn: "free ______ throughout",
    questionVi: "free ______ throughout",
    modelParaphraseEn: "I presume there's wifi? Oh yes, that's free and available throughout the hotel",
    modelParaphraseVi: "I presume there's wifi? Oh yes, that's free and available throughout the hotel",
    acceptedAnswers: ["wifi", "Wi-Fi", "wi-fi"],
    explanationEn: "Wifi is free and available throughout the hotel.",
    explanationVi: "Wifi miễn phí và có trong toàn khách sạn.",
  },
  {
    key: "kw-q5",
    questionNumber: 5,
    questionEn: "a standard buffet lunch costs $ ______ per head",
    questionVi: "a standard buffet lunch costs $ ______ per head",
    modelParaphraseEn: "That's $45 per person. Or you can have the special for $25 more",
    modelParaphraseVi: "That's $45 per person. Or you can have the special for $25 more",
    acceptedAnswers: ["45", "$45"],
    explanationEn: "Standard buffet is $45 per person; the special is $25 more (not the answer).",
    explanationVi: "Buffet standard là $45/người; special đắt hơn $25 (không phải đáp án).",
  },
  {
    key: "kw-q6",
    questionNumber: 6,
    questionEn: "Rooms will cost $ ______ including breakfast",
    questionVi: "Rooms will cost $ ______ including breakfast",
    modelParaphraseEn: "25% reduction, so we can offer you rooms at $135. Normally a standard room's $180",
    modelParaphraseVi: "25% reduction, so we can offer you rooms at $135. Normally a standard room's $180",
    acceptedAnswers: ["135", "$135"],
    explanationEn: "Conference rate is $135 (25% off $180), and it includes breakfast.",
    explanationVi: "Giá hội nghị $135 (giảm 25% từ $180), đã gồm breakfast.",
  },
  {
    key: "kw-q7",
    questionNumber: 7,
    questionEn: "The hotel also has a spa and rooftop ______",
    questionVi: "The hotel also has a spa and rooftop ______",
    modelParaphraseEn: "there's a pool up on the roof for the use of guests",
    modelParaphraseVi: "there's a pool up on the roof for the use of guests",
    acceptedAnswers: ["pool"],
    explanationEn: "Spa (massages and facials) plus a pool on the roof.",
    explanationVi: "Spa (massage, facial) và pool trên mái.",
  },
  {
    key: "kw-q8",
    questionNumber: 8,
    questionEn: "There's a free shuttle service to the ______",
    questionVi: "There's a free shuttle service to the ______",
    modelParaphraseEn: "about 12 kilometres from the airport, but there's a complimentary shuttle bus for guests",
    modelParaphraseVi: "about 12 kilometres from the airport, but there's a complimentary shuttle bus for guests",
    acceptedAnswers: ["airport"],
    explanationEn: "Complimentary shuttle is to the airport (12 km). Railway station is a ten-minute walk.",
    explanationVi: "Shuttle miễn phí tới airport (12 km). Ga tàu cách bộ mười phút.",
  },
  {
    key: "kw-q9",
    questionNumber: 9,
    questionEn: "Wilby Street (quite near the ______)",
    questionVi: "Wilby Street (quite near the ______)",
    modelParaphraseEn: "it's downtown on Wilby Street ... and it's not very far from the sea",
    modelParaphraseVi: "it's downtown on Wilby Street ... and it's not very far from the sea",
    acceptedAnswers: ["sea"],
    explanationEn: "Wilby Street is not very far from the sea.",
    explanationVi: "Wilby Street không xa the sea.",
  },
  {
    key: "kw-q10",
    questionNumber: 10,
    questionEn: "near to restaurants and many ______",
    questionVi: "near to restaurants and many ______",
    modelParaphraseEn: "they can go on to one of the clubs in the area - there are a great many to choose from",
    modelParaphraseVi: "they can go on to one of the clubs in the area - there are a great many to choose from",
    acceptedAnswers: ["clubs"],
    explanationEn: "Huge choice of places to eat, then many clubs in the area.",
    explanationVi: "Nhiều chỗ ăn, rồi nhiều clubs trong khu.",
  },
];
