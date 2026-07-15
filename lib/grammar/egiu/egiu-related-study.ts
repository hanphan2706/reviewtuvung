import { EGIU_UNITS_BY_NUMBER } from "@/lib/grammar/egiu/egiu-catalog";
import type { GrammarRelatedStudy, GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

type RelatedStudySpec = {
  message: string;
  unitNumbers: readonly number[];
};

/**
 * Companion / contrast units — used to deep-link Unit N mentions in the intro.
 */
const RELATED_STUDY_BY_UNIT: Readonly<Record<number, RelatedStudySpec>> = {
  3: {
    message: "Nên học kèm Unit 4 để nắm đủ đối chiếu present continuous và present simple.",
    unitNumbers: [4],
  },
  4: {
    message: "Nên học kèm Unit 3 để có bức tranh đầy đủ về đối chiếu continuous và simple.",
    unitNumbers: [3],
  },
  10: {
    message: "Nên học kèm Unit 9 (continuous) và Units 7–8 (simple) để thấy rõ sự khác biệt giữa hai dạng.",
    unitNumbers: [9, 7, 8],
  },
  13: {
    message: "Nên học kèm Unit 14 để nắm trọn bộ khi nào dùng present perfect và khi nào dùng past simple.",
    unitNumbers: [14],
  },
  14: {
    message: "Nên học kèm Unit 13 để hoàn thiện quy tắc chọn giữa present perfect và past simple.",
    unitNumbers: [13],
  },
  19: {
    message: "Xem thêm I'm going to (Unit 20), will (Units 21–22) và present simple sau when/if (Unit 25).",
    unitNumbers: [20, 21, 22, 25],
  },
  21: {
    message:
      "Nên học kèm Unit 22 để phân biệt will dùng cho quyết định tức thời (Unit 21) và will dùng để dự đoán/tin tưởng về tương lai (Unit 22).",
    unitNumbers: [22],
  },
  22: {
    message: "Nên học kèm Unit 21 (will and shall 1 — quyết định tức thời) để nắm trọn cách dùng will/shall.",
    unitNumbers: [21],
  },
  23: {
    message: "Nên học kèm Units 20–22 để nắm trọn will và going to trước khi so sánh hai dạng.",
    unitNumbers: [20, 21, 22],
  },
  26: {
    message: "Nên học kèm Unit 27 (could / could have) và Unit 37 (can/could you…?) để mở rộng cách dùng can/could.",
    unitNumbers: [27, 37],
  },
  27: {
    message: "Nên học kèm Unit 26 (can/could/able to) trước khi học could have (done).",
    unitNumbers: [26],
  },
  28: {
    message:
      "Nên học kèm Unit 31 để phân biệt must suy đoán chắc chắn (Unit 28) và must / have to mang nghĩa bắt buộc (Unit 31).",
    unitNumbers: [31],
  },
  29: {
    message: "Nên học kèm Unit 30 để nắm trọn may/might cho khả năng hiện tại và hành động tương lai.",
    unitNumbers: [30],
  },
  30: {
    message: "Nên học kèm Unit 29 (may/might 1 — khả năng hiện tại/quá khứ) để có bức tranh đầy đủ.",
    unitNumbers: [29],
  },
  31: {
    message:
      "Nên học kèm Unit 32 (mustn't / needn't) và nhớ Unit 28 dùng must theo nghĩa suy đoán, không phải bắt buộc.",
    unitNumbers: [32, 28],
  },
  32: {
    message: "Nên học kèm Unit 31 (have to / must) để phân biệt mustn't (cấm) và don't have to / needn't (không cần).",
    unitNumbers: [31],
  },
  33: {
    message: "Nên học kèm Unit 34 (should 2) và Unit 35 (I'd better / it's time) để nắm các mẫu khuyên nhủ liên quan.",
    unitNumbers: [34, 35],
  },
  34: {
    message: "Nên học kèm Unit 33 (should 1 — lời khuyên và should have) trước khi học các mẫu that … should.",
    unitNumbers: [33],
  },
  35: {
    message: "Nên học kèm Unit 33 để so sánh I'd better với should khi đưa lời khuyên.",
    unitNumbers: [33],
  },
  36: {
    message: "Nên học kèm Units 38–41 (if & wish) để nắm would trong câu điều kiện và ước muốn.",
    unitNumbers: [38, 39, 40, 41],
  },
  37: {
    message: "Nên học kèm Unit 26 để ôn lại can/could trước khi luyện yêu cầu, đề nghị và xin phép.",
    unitNumbers: [26],
  },
  38: {
    message:
      "Nên học kèm Unit 39 (if I knew / I wish I knew) và Unit 40 (if I had known) để nắm trọn điều kiện giả định; xem thêm Unit 36 (would).",
    unitNumbers: [39, 40, 36],
  },
  39: {
    message:
      "Nên học kèm Unit 38 (if I do / if I did), Unit 40 (if I had known) và Unit 41 (wish + would) để phân biệt các lớp điều kiện và ước muốn.",
    unitNumbers: [38, 40, 41],
  },
  40: {
    message: "Nên học kèm Unit 39 (hiện tại giả định) và Unit 41 (wish) để đối chiếu would / would have và ước muốn quá khứ.",
    unitNumbers: [39, 41],
  },
  41: {
    message:
      "Nên học kèm Unit 39 (I wish I knew) và Unit 40 (I wish I had known) để phân biệt wish + quá khứ và wish + would.",
    unitNumbers: [39, 40],
  },
  42: {
    message: "Nên học kèm Units 43–44 để nắm trọn các dạng passive (be done / been done / being done / get).",
    unitNumbers: [43, 44],
  },
  43: {
    message: "Nên học kèm Unit 42 (passive cơ bản) và Unit 44 (các mẫu passive nâng cao).",
    unitNumbers: [42, 44],
  },
  44: {
    message: "Nên học kèm Units 42–43 trước khi học các dạng passive phức hơn.",
    unitNumbers: [42, 43],
  },
  45: {
    message: "Nên học kèm Units 42–44 (passive) trước khi học it is said that / he is said to / supposed to.",
    unitNumbers: [42, 43, 44],
  },
  47: {
    message: "Nên học kèm Unit 48 để nắm trọn reported speech (câu tường thuật).",
    unitNumbers: [48],
  },
  48: {
    message: "Nên học kèm Unit 47 (reported speech 1) trước khi mở rộng các mẫu tường thuật.",
    unitNumbers: [47],
  },
  49: {
    message: "Nên học kèm Unit 50 (questions 2) để nắm đủ các kiểu câu hỏi.",
    unitNumbers: [50],
  },
  50: {
    message: "Nên học kèm Unit 49 (questions 1) để có nền tảng hỏi đáp đầy đủ.",
    unitNumbers: [49],
  },
  53: {
    message: "Nên học kèm Unit 54 (verb + to) và Units 56–58 (khi -ing và to đổi nghĩa).",
    unitNumbers: [54, 56, 57, 58],
  },
  54: {
    message: "Nên học kèm Unit 53 (verb + -ing) và Unit 55 (verb + object + to).",
    unitNumbers: [53, 55],
  },
  56: {
    message: "Nên học kèm Units 57–58 để nắm trọn các cặp verb + -ing / to khác nghĩa.",
    unitNumbers: [57, 58],
  },
  61: {
    message: "Nên học kèm Unit 18 (used to do) để phân biệt used to và be/get used to.",
    unitNumbers: [18],
  },
  69: {
    message: "Nên học kèm Unit 70 để nắm trọn countable / uncountable.",
    unitNumbers: [70],
  },
  70: {
    message: "Nên học kèm Unit 69 (countable / uncountable 1) trước khi học phần 2.",
    unitNumbers: [69],
  },
  72: {
    message: "Nên học kèm Units 73–76 (the 1–4) để nắm cách dùng mạo từ the.",
    unitNumbers: [73, 74, 75, 76],
  },
  77: {
    message: "Nên học kèm Unit 78 để nắm tên riêng có/không có the.",
    unitNumbers: [78],
  },
  78: {
    message: "Nên học kèm Unit 77 (names with/without the 1).",
    unitNumbers: [77],
  },
  85: {
    message: "Nên học kèm Unit 86 (no/none/any / nothing/nobody) để đối chiếu some/any và phủ định.",
    unitNumbers: [86],
  },
  86: {
    message: "Nên học kèm Unit 85 (some and any) trước khi học no/none/any.",
    unitNumbers: [85],
  },
  92: {
    message: "Nên học kèm Units 93–96 để nắm trọn relative clauses.",
    unitNumbers: [93, 94, 95, 96],
  },
  97: {
    message: "Nên học kèm Unit 92 (relative) và Unit 98 (-ing/-ed adjectives) để phân biệt mệnh đề rút gọn và tính từ.",
    unitNumbers: [92, 98],
  },
  100: {
    message: "Nên học kèm Unit 101 (adjectives and adverbs 2).",
    unitNumbers: [101],
  },
  101: {
    message: "Nên học kèm Unit 100 (adjectives and adverbs 1).",
    unitNumbers: [100],
  },
  105: {
    message: "Nên học kèm Units 106–108 (comparative 2–3 và superlative).",
    unitNumbers: [106, 107, 108],
  },
  109: {
    message: "Nên học kèm Unit 110 (word order 2 — vị trí trạng từ).",
    unitNumbers: [110],
  },
  110: {
    message: "Nên học kèm Unit 109 (word order 1).",
    unitNumbers: [109],
  },
  117: {
    message: "Nên học kèm Unit 116 (as) và Unit 118 (like / as if) để phân biệt like và as.",
    unitNumbers: [116, 118],
  },
  121: {
    message: "Nên học kèm Unit 122 (on time / in time · at the end / in the end).",
    unitNumbers: [122],
  },
  123: {
    message: "Nên học kèm Units 124–125 để nắm trọn in/at/on (position).",
    unitNumbers: [124, 125],
  },
};

function buildRelatedStudy(spec: RelatedStudySpec): GrammarRelatedStudy | undefined {
  const units = spec.unitNumbers
    .map((unitNumber) => {
      const record = EGIU_UNITS_BY_NUMBER[unitNumber];
      if (!record) return null;
      return {
        unitNumber,
        slug: record.id,
        title: record.title,
      };
    })
    .filter((unit): unit is NonNullable<typeof unit> => Boolean(unit));

  if (units.length === 0) return undefined;
  return { message: spec.message, units };
}

/** Attach related-unit link targets used to bold/underline Unit N mentions in the intro. */
export function enrichTopicWithRelatedStudy(
  detail: GrammarTopicDetail,
  unitNumber: number | undefined,
): GrammarTopicDetail {
  if (!unitNumber) return detail;
  const spec = RELATED_STUDY_BY_UNIT[unitNumber];
  if (!spec) return detail;

  const relatedStudy = buildRelatedStudy(spec);
  if (!relatedStudy) return detail;

  const alreadyMentionsRelated = relatedStudy.units.some((unit) =>
    new RegExp(`\\bUnits?\\s+${unit.unitNumber}\\b`, "i").test(detail.intro),
  );
  const intro = alreadyMentionsRelated
    ? detail.intro
    : `${detail.intro.trim()} ${relatedStudy.message}`.trim();

  return {
    ...detail,
    intro,
    relatedStudy,
  };
}

export function relatedStudyUnitNumbers(): number[] {
  return Object.keys(RELATED_STUDY_BY_UNIT).map(Number);
}
