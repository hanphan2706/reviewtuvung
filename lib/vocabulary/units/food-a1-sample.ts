import type { VocabularyUnit } from "@/lib/vocabulary/vocabulary-unit-types";
import { applyExercisePromptVi } from "@/lib/vocabulary/units/eviu-elementary-curated-exercises-01-15";
import { SAMPLE_UNITS_PROMPT_VI } from "@/lib/vocabulary/units/eviu-elementary-curated-prompt-vi";

const B = "<b>";
const _B = "</b>";
const P = '<span style="color: #4b2876">';
const _P = "</span>";

/**
 * Unit 10 — Food and drink (EVIU Elementary, 3rd ed.).
 * Lý thuyết và từ vựng theo các mục A–D; từ SRS = từ in đậm trong unit.
 * Bài tập: 10.1 + 10.5 từ sách (không tự soạn).
 */
export const FOOD_A1_SAMPLE_UNIT: VocabularyUnit = {
  id: "food-a1",
  topic: "Food and drink",
  topicVi: "Ăn uống",
  level: "A1",
  title: "Food and drink",
  titleVi: "Ăn uống",
  introVi: "Các từ vựng về đồ ăn và thức uống thông dụng.",
  description: "Từ vựng về bữa ăn, đồ uống, đồ ăn nhanh và rau củ quả trong sinh hoạt hằng ngày.",
  sourceBook: "English Vocabulary in Use · Elementary · Unit 10",
  sourceNote: "Unit 10 Food and drink. Từ vựng theo từ in đậm; bài tập 10.1 và 10.5 từ sách.",
  structureSections: [
    { label: "Everyday food", wordCount: 10 },
    { label: "Fast food", wordCount: 4 },
    { label: "Fruit", wordCount: 7 },
    { label: "Vegetables", wordCount: 8 },
    { label: "Drinks", wordCount: 7 },
  ],
  theory: [
    {
      type: "feature-cards",
      cards: [
        {
          icon: "link",
          title: "Cụm từ cố định",
          description: `Học theo cụm sẽ tự nhiên hơn tách từng từ.<br>${P}Fish and chips${_P} is popular in Britain, Australia and New Zealand.<br>Do you take ${P}sugar in tea or coffee${_P}?`,
        },
        {
          icon: "lightbulb",
          title: "Lỗi thường gặp",
          description: `Can I have some ${P}bread${_P}? ${B}[NOT Can I have a bread?]${_B}<br>I love ${P}fruit${_P}. ${B}[NOT I love fruits]${_B}<br>${P}Bread${_P} và ${P}fruit${_P} là danh từ không đếm được trong các câu trên.`,
        },
      ],
    },
    {
      type: "heading",
      text: "Nguyên tắc sử dụng cơ bản",
    },
    {
      type: "principles",
      items: [
        {
          number: "01",
          title: "EVERYDAY FOOD",
          body: `${P}Bread${_P}, ${P}rice${_P}, ${P}pasta${_P}, ${P}salt${_P}, ${P}pepper${_P}, ${P}meat${_P} và ${P}fish${_P} là đồ ăn hàng ngày. Dùng ${P}some${_P} với bread; người không ăn thịt/cá gọi là ${P}vegetarian${_P}.`,
          exampleHtml:
            "Would you like some bread? (Bạn có muốn một ít bánh mì không?)<br>I love sushi because I love rice. (Tôi thích sushi vì tôi thích cơm.)<br>Pasta is good for you, but don't eat too much! (Mì Ý tốt cho sức khỏe, nhưng đừng ăn quá nhiều!)<br>My sister never eats meat or fish. She's vegetarian. (Chị gái tôi không bao giờ ăn thịt hay cá. Cô ấy ăn chay.)",
        },
        {
          number: "02",
          title: "FAST FOOD",
          body: `${P}Hamburgers${_P}, ${P}hot dogs${_P} và ${P}pizzas${_P} dùng khi bận. ${P}Fish and chips${_P} là món phổ biến ở Anh, Úc và New Zealand — giữ nguyên cụm, không tách.`,
          exampleHtml:
            "I eat hamburgers, hot dogs and pizzas when I don't have much time. (Tôi ăn hamburger, xúc xích kẹp bánh mì và pizza khi không có nhiều thời gian.)<br>Fish and chips is popular in Britain, Australia and New Zealand. (Fish and chips rất phổ biến ở Anh, Úc và New Zealand.)",
        },
        {
          number: "03",
          title: "FRUIT & VEGETABLES",
          body: `${P}Vegetables${_P} và ${P}fruit${_P} đều tốt cho sức khỏe. ${P}Fruit${_P} thường dùng ở dạng không đếm (singular).`,
          exampleHtml:
            "Vegetables are good for you. (Rau củ tốt cho sức khỏe.)<br>Fruit is also good for you. (Trái cây cũng tốt cho sức khỏe.)",
        },
        {
          number: "04",
          title: "DRINKS",
          body: `Đồ uống phổ biến gồm ${P}tea${_P}, ${P}coffee${_P}, ${P}milk${_P}, ${P}fruit juice${_P}, ${P}beer${_P}, ${P}wine${_P}, ${P}mineral water${_P}. Hỏi ${P}sugar in tea or coffee${_P} khi gọi đồ uống.`,
          exampleHtml: "Do you take sugar in tea or coffee? (Bạn có cho đường vào trà hay cà phê không?)",
        },
      ],
    },
  ],
  exercises: applyExercisePromptVi(
    [
    {
      type: "fill-blank",
      id: "ex-10-1-1",
      label: "Hoàn thành câu",
      prompt: "___ is popular in Japan.",
      answer: "Rice",
      alternatives: ["rice"],
    },
    {
      type: "mcq",
      id: "ex-10-1-2",
      label: "Hoàn thành câu",
      question: "_____ and _____ are very popular in Italy.",
      options: [
        { key: "a", label: "Pasta and pizza" },
        { key: "b", label: "Rice and bread" },
        { key: "c", label: "Fish and chips" },
        { key: "d", label: "Salt and pepper" },
      ],
      correctKey: "a",
    },
    {
      type: "fill-blank",
      id: "ex-10-1-3",
      label: "Hoàn thành câu",
      prompt: "Chips are made from ___.",
      answer: "potatoes",
      alternatives: ["Potatoes"],
    },
    {
      type: "fill-blank",
      id: "ex-10-1-4",
      label: "Hoàn thành câu",
      prompt: "Many British people eat ___.",
      answer: "fish and chips",
      alternatives: ["Fish and chips"],
    },
    {
      type: "fill-blank",
      id: "ex-10-1-5",
      label: "Hoàn thành câu",
      prompt: "Hamburgers are made from ___.",
      answer: "meat",
      alternatives: ["Meat"],
    },
    {
      type: "fill-blank",
      id: "ex-10-1-6",
      label: "Hoàn thành câu",
      prompt: "A ___ is a sausage inside a piece of bread.",
      answer: "hot dog",
      alternatives: ["Hot dog"],
    },
    {
      type: "mcq",
      id: "ex-10-5-1",
      label: "Chọn a, b hoặc c",
      question: "Vegetarians do not eat",
      options: [
        { key: "a", label: "vegetables" },
        { key: "b", label: "meat" },
        { key: "c", label: "fast food" },
      ],
      correctKey: "b",
    },
    {
      type: "mcq",
      id: "ex-10-5-2",
      label: "Chọn a, b hoặc c",
      question: "Garlic is a kind of",
      options: [
        { key: "a", label: "fruit" },
        { key: "b", label: "fast food" },
        { key: "c", label: "vegetable" },
      ],
      correctKey: "c",
    },
    {
      type: "mcq",
      id: "ex-10-5-3",
      label: "Chọn a, b hoặc c",
      question: "You put ___ in coffee.",
      options: [
        { key: "a", label: "salt" },
        { key: "b", label: "beer" },
        { key: "c", label: "sugar" },
      ],
      correctKey: "c",
    },
    {
      type: "mcq",
      id: "ex-10-5-4",
      label: "Chọn a, b hoặc c",
      question: "Which is correct?",
      options: [
        { key: "a", label: "pinapple" },
        { key: "b", label: "pineapple" },
        { key: "c", label: "pieapple" },
      ],
      correctKey: "b",
    },
    {
      type: "mcq",
      id: "ex-10-5-5",
      label: "Chọn a, b hoặc c",
      question: "The first sound in onion is the same as the sound in",
      options: [
        { key: "a", label: "fun" },
        { key: "b", label: "orange" },
        { key: "c", label: "man" },
      ],
      correctKey: "a",
    },
    {
      type: "mcq",
      id: "ex-10-5-6",
      label: "Chọn a, b hoặc c",
      question: "A pear is",
      options: [
        { key: "a", label: "a drink" },
        { key: "b", label: "a vegetable" },
        { key: "c", label: "a fruit" },
      ],
      correctKey: "c",
    },
    ],
    SAMPLE_UNITS_PROMPT_VI,
  ),
  words: [
    { id: "w-bread", term: "bread", partOfSpeech: "NOUN", definition: "bánh mì", example: "Would you like some bread?" },
    { id: "w-rice", term: "rice", partOfSpeech: "NOUN", definition: "cơm; gạo", example: "I love sushi because I love rice." },
    { id: "w-pasta", term: "pasta", partOfSpeech: "NOUN", definition: "mì Ý", example: "Pasta is good for you, but don't eat too much!" },
    { id: "w-salt", term: "salt", partOfSpeech: "NOUN", definition: "muối", example: "I always put salt on my chips, but not pepper." },
    { id: "w-pepper", term: "pepper", partOfSpeech: "NOUN", definition: "hạt tiêu", example: "I always put salt on my chips, but not pepper." },
    { id: "w-sugar", term: "sugar", partOfSpeech: "NOUN", definition: "đường", example: "Do you take sugar in tea or coffee?" },
    { id: "w-tea", term: "tea", partOfSpeech: "NOUN", definition: "trà", example: "Do you take sugar in tea or coffee?" },
    { id: "w-coffee", term: "coffee", partOfSpeech: "NOUN", definition: "cà phê", example: "Do you take sugar in tea or coffee?" },
    { id: "w-meat", term: "meat", partOfSpeech: "NOUN", definition: "thịt", example: "My sister never eats meat or fish." },
    { id: "w-fish", term: "fish", partOfSpeech: "NOUN", definition: "cá", example: "My sister never eats meat or fish." },
    { id: "w-chips", term: "chips", partOfSpeech: "NOUN", definition: "khoai tây chiên (Anh)", example: "I always put salt on my chips, but not pepper." },
    { id: "w-vegetarian", term: "vegetarian", partOfSpeech: "NOUN", definition: "người ăn chay", example: "She's vegetarian." },
    { id: "w-hamburger", term: "hamburger", partOfSpeech: "NOUN", definition: "bánh hamburger", example: "I eat hamburgers, hot dogs and pizzas when I don't have much time." },
    { id: "w-hot-dog", term: "hot dog", partOfSpeech: "NOUN", definition: "xúc xích kẹp bánh mì", example: "A hot dog is a sausage inside a piece of bread." },
    { id: "w-pizza", term: "pizza", partOfSpeech: "NOUN", definition: "bánh pizza", example: "Pasta and pizza are very popular in Italy." },
    { id: "w-fish-and-chips", term: "fish and chips", partOfSpeech: "NOUN", definition: "cá chiên kèm khoai tây chiên", example: "Fish and chips is popular in Britain, Australia and New Zealand." },
    { id: "w-fruit", term: "fruit", partOfSpeech: "NOUN", definition: "trái cây (không đếm)", example: "Fruit is also good for you." },
    { id: "w-vegetables", term: "vegetables", partOfSpeech: "NOUN", definition: "rau củ", example: "Vegetables are good for you." },
    { id: "w-carrot", term: "carrot", partOfSpeech: "NOUN", definition: "cà rốt", example: "carrots" },
    { id: "w-beans", term: "beans", partOfSpeech: "NOUN", definition: "đậu", example: "beans" },
    { id: "w-potato", term: "potato", partOfSpeech: "NOUN", definition: "khoai tây", example: "Chips are made from potatoes." },
    { id: "w-tomato", term: "tomato", partOfSpeech: "NOUN", definition: "cà chua", example: "tomatoes" },
    { id: "w-peas", term: "peas", partOfSpeech: "NOUN", definition: "đậu Hà Lan", example: "peas" },
    { id: "w-onion", term: "onion", partOfSpeech: "NOUN", definition: "hành tây", example: "onions" },
    { id: "w-garlic", term: "garlic", partOfSpeech: "NOUN", definition: "tỏi", example: "Garlic is a kind of vegetable." },
    { id: "w-mushroom", term: "mushroom", partOfSpeech: "NOUN", definition: "nấm", example: "mushrooms" },
    { id: "w-apple", term: "apple", partOfSpeech: "NOUN", definition: "táo", example: "apple" },
    { id: "w-pineapple", term: "pineapple", partOfSpeech: "NOUN", definition: "dứa; thơm", example: "pineapple" },
    { id: "w-orange", term: "orange", partOfSpeech: "NOUN", definition: "cam", example: "orange" },
    { id: "w-banana", term: "banana", partOfSpeech: "NOUN", definition: "chuối", example: "banana" },
    { id: "w-pear", term: "pear", partOfSpeech: "NOUN", definition: "lê", example: "A pear is a fruit." },
    { id: "w-strawberries", term: "strawberries", partOfSpeech: "NOUN", definition: "dâu tây", example: "strawberries" },
    { id: "w-grapes", term: "grapes", partOfSpeech: "NOUN", definition: "nho", example: "grapes" },
    { id: "w-mineral-water", term: "mineral water", partOfSpeech: "NOUN", definition: "nước khoáng", example: "mineral water" },
    { id: "w-milk", term: "milk", partOfSpeech: "NOUN", definition: "sữa", example: "milk" },
    { id: "w-fruit-juice", term: "fruit juice", partOfSpeech: "NOUN", definition: "nước ép trái cây", example: "fruit juice" },
    { id: "w-beer", term: "beer", partOfSpeech: "NOUN", definition: "bia", example: "beer" },
    { id: "w-wine", term: "wine", partOfSpeech: "NOUN", definition: "rượu vang", example: "wine" },
  ],
};
