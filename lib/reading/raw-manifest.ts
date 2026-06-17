/**
 * Pilot đọc — file nằm trong `reading raw/` (gitignore). Thêm bài: thêm entry + copy file .txt.
 */
export const READING_RAW_FILES: Record<string, string> = {
  "cam19-test4": "cam 19 test 4.txt",
  "cam19-test3": "cam 19 test 3.txt",
  "cam19-test2": "cam 19 test 2.txt",
  "cam19-test1": "cam 19 test 1.txt",
  "cam18-test4": "cam 18 test 4.txt",
  "cam18-test3": "cam 18 test 3.txt",
  "cam18-test2": "cam 18 test 2.txt",
  "cam18-test1": "cam 18 test 1.txt",
  "cam20-test1": "cam 20 test 1.txt",
  "cam20-test2": "cam 20 test 2.txt",
  "cam20-test3": "cam 20 test 3.txt",
  "cam20-test4": "cam 20 test 4.txt",
  "reading-challenge-1": "reading challenge 1.txt",
  "reading-challenge-2": "reading challenge 2.txt",
  "reading-challenge-3": "reading challenge 3.txt",
};

export function readingRawAllowlist(): Set<string> {
  return new Set(Object.values(READING_RAW_FILES));
}
