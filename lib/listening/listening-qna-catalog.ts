import path from "node:path";
import { LISTENING_MATERIALS_ROOT } from "@/lib/listening/listening-materials-paths";

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

/** Full test — một file QnA cho cả 4 Part. */
export const LISTENING_TEST_QNA: Record<string, ListeningQnaFileRef> = {
  "cam19-test1": CAM19_TEST1_QNA,
  "cam19-test2": CAM19_TEST2_QNA,
};

export function getListeningTestQnaRef(testId: string): ListeningQnaFileRef | null {
  return LISTENING_TEST_QNA[testId] ?? null;
}

/** Cam 19 Test 1–2 — thêm file QnA mới rồi map part id tại đây. */
export const LISTENING_PART_QNA: Record<string, ListeningPartQnaRef> = {
  "cam19-t1-p1": { ...CAM19_TEST1_QNA, part: 1 },
  "cam19-t1-p2": { ...CAM19_TEST1_QNA, part: 2 },
  "cam19-t1-p3": { ...CAM19_TEST1_QNA, part: 3 },
  "cam19-t1-p4": { ...CAM19_TEST1_QNA, part: 4 },
  "cam19-t2-p1": { ...CAM19_TEST2_QNA, part: 1 },
  "cam19-t2-p2": { ...CAM19_TEST2_QNA, part: 2 },
  "cam19-t2-p3": { ...CAM19_TEST2_QNA, part: 3 },
  "cam19-t2-p4": { ...CAM19_TEST2_QNA, part: 4 },
};

export function listeningQnaFilePath(fileName: string): string {
  return path.join(process.cwd(), LISTENING_MATERIALS_ROOT, fileName);
}

export function getListeningPartQnaRef(partId: string): ListeningPartQnaRef | null {
  return LISTENING_PART_QNA[partId] ?? null;
}

export function hasListeningPartExam(partId: string): boolean {
  return partId in LISTENING_PART_QNA;
}
