/** Số ô lưới tối đa mỗi trang — thư viện luyện nghe / luyện đọc. */
export const STUDY_HUB_LIBRARY_GRID_PAGE_SIZE = 9;

export function parseLibraryPage(value: string | null, totalPages: number): number {
  const parsed = Number.parseInt(value ?? "1", 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  if (parsed > totalPages) return totalPages;
  return parsed;
}

export function paginateLibraryItems<T>(
  items: readonly T[],
  page: number,
  pageSize = STUDY_HUB_LIBRARY_GRID_PAGE_SIZE,
): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function libraryTotalPages(
  itemCount: number,
  pageSize = STUDY_HUB_LIBRARY_GRID_PAGE_SIZE,
): number {
  return Math.max(1, Math.ceil(itemCount / pageSize));
}
