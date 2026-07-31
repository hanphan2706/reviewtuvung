/** File QnA trong `listening materials/` — một file có thể chứa nhiều Part. */
export type ListeningQnaFileRef = {
  fileName: string;
  test: number;
};

/** Part id (manifest) → nguồn QnA + số Part trong file. */
export type ListeningPartQnaRef = ListeningQnaFileRef & {
  part: number;
};

const CAM19_TEST1_QNA: ListeningQnaFileRef = {
  fileName: "cam 19 test 1 qna.txt",
  test: 1,
};

const CAM19_TEST2_QNA: ListeningQnaFileRef = {
  fileName: "cam 19 test 2 qna.txt",
  test: 2,
};

const CAM19_TEST3_QNA: ListeningQnaFileRef = {
  fileName: "cam 19 test 3 qna.txt",
  test: 3,
};

const CAM19_TEST4_QNA: ListeningQnaFileRef = {
  fileName: "cam 19 test 4 qna.txt",
  test: 4,
};

const CAM17_TEST1_QNA: ListeningQnaFileRef = {
  fileName: "cam 17 test 1 qna.txt",
  test: 1,
};

const CAM17_TEST2_QNA: ListeningQnaFileRef = {
  fileName: "cam 17 test 2 qna.txt",
  test: 2,
};

const CAM17_TEST3_QNA: ListeningQnaFileRef = {
  fileName: "cam 17 test 3 qna.txt",
  test: 3,
};

const CAM17_TEST4_QNA: ListeningQnaFileRef = {
  fileName: "cam 17 test 4 qna.txt",
  test: 4,
};

const CAM21_TEST1_QNA: ListeningQnaFileRef = {
  fileName: "cam 21 test 1 qna.txt",
  test: 1,
};

const CAM21_TEST2_QNA: ListeningQnaFileRef = {
  fileName: "cam 21 test 2 qna.txt",
  test: 2,
};

const CAM21_TEST3_QNA: ListeningQnaFileRef = {
  fileName: "cam 21 test 3 qna.txt",
  test: 3,
};

const CAM21_TEST4_QNA: ListeningQnaFileRef = {
  fileName: "cam 21 test 4 qna.txt",
  test: 4,
};

const CAM20_TEST1_QNA: ListeningQnaFileRef = {
  fileName: "cam 20 test 1 qna.txt",
  test: 1,
};

const CAM20_TEST2_QNA: ListeningQnaFileRef = {
  fileName: "cam 20 test 2 qna.txt",
  test: 2,
};

const CAM20_TEST3_QNA: ListeningQnaFileRef = {
  fileName: "cam 20 test 3 qna.txt",
  test: 3,
};

const CAM20_TEST4_QNA: ListeningQnaFileRef = {
  fileName: "cam 20 test 4 qna.txt",
  test: 4,
};

const CAM18_TEST1_QNA: ListeningQnaFileRef = {
  fileName: "cam 18 test 1 qna.txt",
  test: 1,
};

const CAM18_TEST2_QNA: ListeningQnaFileRef = {
  fileName: "cam 18 test 2 qna.txt",
  test: 2,
};

const CAM18_TEST3_QNA: ListeningQnaFileRef = {
  fileName: "cam 18 test 3 qna.txt",
  test: 3,
};

const CAM18_TEST4_QNA: ListeningQnaFileRef = {
  fileName: "cam 18 test 4 qna.txt",
  test: 4,
};

const REAL_TEST_1_QNA: ListeningQnaFileRef = {
  fileName: "real test 1 qna.txt",
  test: 1,
};

/** Full test — một file QnA cho cả 4 Part. */
export const LISTENING_TEST_QNA: Record<string, ListeningQnaFileRef> = {
  "cam21-test1": CAM21_TEST1_QNA,
  "cam21-test2": CAM21_TEST2_QNA,
  "cam21-test3": CAM21_TEST3_QNA,
  "cam21-test4": CAM21_TEST4_QNA,
  "cam17-test1": CAM17_TEST1_QNA,
  "cam17-test2": CAM17_TEST2_QNA,
  "cam17-test3": CAM17_TEST3_QNA,
  "cam17-test4": CAM17_TEST4_QNA,
  "cam20-test1": CAM20_TEST1_QNA,
  "cam20-test2": CAM20_TEST2_QNA,
  "cam20-test3": CAM20_TEST3_QNA,
  "cam20-test4": CAM20_TEST4_QNA,
  "cam19-test1": CAM19_TEST1_QNA,
  "cam19-test2": CAM19_TEST2_QNA,
  "cam19-test3": CAM19_TEST3_QNA,
  "cam19-test4": CAM19_TEST4_QNA,
  "cam18-test1": CAM18_TEST1_QNA,
  "cam18-test2": CAM18_TEST2_QNA,
  "cam18-test3": CAM18_TEST3_QNA,
  "cam18-test4": CAM18_TEST4_QNA,
  "de-thi-that-1": REAL_TEST_1_QNA,
};

export function getListeningTestQnaRef(testId: string): ListeningQnaFileRef | null {
  return LISTENING_TEST_QNA[testId] ?? null;
}

/** Cam 19 Test 1–4 — thêm file QnA mới rồi map part id tại đây. */
export const LISTENING_PART_QNA: Record<string, ListeningPartQnaRef> = {
  "cam21-t1-p1": { ...CAM21_TEST1_QNA, part: 1 },
  "cam21-t1-p2": { ...CAM21_TEST1_QNA, part: 2 },
  "cam21-t1-p3": { ...CAM21_TEST1_QNA, part: 3 },
  "cam21-t1-p4": { ...CAM21_TEST1_QNA, part: 4 },
  "cam21-t2-p1": { ...CAM21_TEST2_QNA, part: 1 },
  "cam21-t2-p2": { ...CAM21_TEST2_QNA, part: 2 },
  "cam21-t2-p3": { ...CAM21_TEST2_QNA, part: 3 },
  "cam21-t2-p4": { ...CAM21_TEST2_QNA, part: 4 },
  "cam21-t3-p1": { ...CAM21_TEST3_QNA, part: 1 },
  "cam21-t3-p2": { ...CAM21_TEST3_QNA, part: 2 },
  "cam21-t3-p3": { ...CAM21_TEST3_QNA, part: 3 },
  "cam21-t3-p4": { ...CAM21_TEST3_QNA, part: 4 },
  "cam21-t4-p1": { ...CAM21_TEST4_QNA, part: 1 },
  "cam21-t4-p2": { ...CAM21_TEST4_QNA, part: 2 },
  "cam21-t4-p3": { ...CAM21_TEST4_QNA, part: 3 },
  "cam21-t4-p4": { ...CAM21_TEST4_QNA, part: 4 },
  "cam17-t1-p1": { ...CAM17_TEST1_QNA, part: 1 },
  "cam17-t1-p2": { ...CAM17_TEST1_QNA, part: 2 },
  "cam17-t1-p3": { ...CAM17_TEST1_QNA, part: 3 },
  "cam17-t1-p4": { ...CAM17_TEST1_QNA, part: 4 },
  "cam17-t2-p1": { ...CAM17_TEST2_QNA, part: 1 },
  "cam17-t2-p2": { ...CAM17_TEST2_QNA, part: 2 },
  "cam17-t2-p3": { ...CAM17_TEST2_QNA, part: 3 },
  "cam17-t2-p4": { ...CAM17_TEST2_QNA, part: 4 },
  "cam17-t3-p1": { ...CAM17_TEST3_QNA, part: 1 },
  "cam17-t3-p2": { ...CAM17_TEST3_QNA, part: 2 },
  "cam17-t3-p3": { ...CAM17_TEST3_QNA, part: 3 },
  "cam17-t3-p4": { ...CAM17_TEST3_QNA, part: 4 },
  "cam17-t4-p1": { ...CAM17_TEST4_QNA, part: 1 },
  "cam17-t4-p2": { ...CAM17_TEST4_QNA, part: 2 },
  "cam17-t4-p3": { ...CAM17_TEST4_QNA, part: 3 },
  "cam17-t4-p4": { ...CAM17_TEST4_QNA, part: 4 },
  "cam20-t1-p1": { ...CAM20_TEST1_QNA, part: 1 },
  "cam20-t1-p2": { ...CAM20_TEST1_QNA, part: 2 },
  "cam20-t1-p3": { ...CAM20_TEST1_QNA, part: 3 },
  "cam20-t1-p4": { ...CAM20_TEST1_QNA, part: 4 },
  "cam20-t2-p1": { ...CAM20_TEST2_QNA, part: 1 },
  "cam20-t2-p2": { ...CAM20_TEST2_QNA, part: 2 },
  "cam20-t2-p3": { ...CAM20_TEST2_QNA, part: 3 },
  "cam20-t2-p4": { ...CAM20_TEST2_QNA, part: 4 },
  "cam20-t3-p1": { ...CAM20_TEST3_QNA, part: 1 },
  "cam20-t3-p2": { ...CAM20_TEST3_QNA, part: 2 },
  "cam20-t3-p3": { ...CAM20_TEST3_QNA, part: 3 },
  "cam20-t3-p4": { ...CAM20_TEST3_QNA, part: 4 },
  "cam20-t4-p1": { ...CAM20_TEST4_QNA, part: 1 },
  "cam20-t4-p2": { ...CAM20_TEST4_QNA, part: 2 },
  "cam20-t4-p3": { ...CAM20_TEST4_QNA, part: 3 },
  "cam20-t4-p4": { ...CAM20_TEST4_QNA, part: 4 },
  "cam19-t1-p1": { ...CAM19_TEST1_QNA, part: 1 },
  "cam19-t1-p2": { ...CAM19_TEST1_QNA, part: 2 },
  "cam19-t1-p3": { ...CAM19_TEST1_QNA, part: 3 },
  "cam19-t1-p4": { ...CAM19_TEST1_QNA, part: 4 },
  "cam19-t2-p1": { ...CAM19_TEST2_QNA, part: 1 },
  "cam19-t2-p2": { ...CAM19_TEST2_QNA, part: 2 },
  "cam19-t2-p3": { ...CAM19_TEST2_QNA, part: 3 },
  "cam19-t2-p4": { ...CAM19_TEST2_QNA, part: 4 },
  "cam19-t3-p1": { ...CAM19_TEST3_QNA, part: 1 },
  "cam19-t3-p2": { ...CAM19_TEST3_QNA, part: 2 },
  "cam19-t3-p3": { ...CAM19_TEST3_QNA, part: 3 },
  "cam19-t3-p4": { ...CAM19_TEST3_QNA, part: 4 },
  "cam19-t4-p1": { ...CAM19_TEST4_QNA, part: 1 },
  "cam19-t4-p2": { ...CAM19_TEST4_QNA, part: 2 },
  "cam19-t4-p3": { ...CAM19_TEST4_QNA, part: 3 },
  "cam19-t4-p4": { ...CAM19_TEST4_QNA, part: 4 },
  "cam18-t1-p1": { ...CAM18_TEST1_QNA, part: 1 },
  "cam18-t1-p2": { ...CAM18_TEST1_QNA, part: 2 },
  "cam18-t1-p3": { ...CAM18_TEST1_QNA, part: 3 },
  "cam18-t1-p4": { ...CAM18_TEST1_QNA, part: 4 },
  "cam18-t2-p1": { ...CAM18_TEST2_QNA, part: 1 },
  "cam18-t2-p2": { ...CAM18_TEST2_QNA, part: 2 },
  "cam18-t2-p3": { ...CAM18_TEST2_QNA, part: 3 },
  "cam18-t2-p4": { ...CAM18_TEST2_QNA, part: 4 },
  "cam18-t3-p1": { ...CAM18_TEST3_QNA, part: 1 },
  "cam18-t3-p2": { ...CAM18_TEST3_QNA, part: 2 },
  "cam18-t3-p3": { ...CAM18_TEST3_QNA, part: 3 },
  "cam18-t3-p4": { ...CAM18_TEST3_QNA, part: 4 },
  "cam18-t4-p1": { ...CAM18_TEST4_QNA, part: 1 },
  "cam18-t4-p2": { ...CAM18_TEST4_QNA, part: 2 },
  "cam18-t4-p3": { ...CAM18_TEST4_QNA, part: 3 },
  "cam18-t4-p4": { ...CAM18_TEST4_QNA, part: 4 },
};

export function getListeningPartQnaRef(partId: string): ListeningPartQnaRef | null {
  return LISTENING_PART_QNA[partId] ?? null;
}

export function hasListeningPartExam(partId: string): boolean {
  return partId in LISTENING_PART_QNA;
}
