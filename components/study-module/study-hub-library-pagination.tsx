"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseLibraryPage } from "@/lib/study-hub/library-grid";

type StudyHubLibraryPaginationProps = {
  totalPages: number;
  ariaLabel?: string;
};

export function StudyHubLibraryPagination({
  totalPages,
  ariaLabel = "Phân trang danh sách",
}: StudyHubLibraryPaginationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseLibraryPage(searchParams.get("trang"), totalPages);

  const setPage = (nextPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextPage <= 1) {
      params.delete("trang");
    } else {
      params.set("trang", String(nextPage));
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="mt-6 flex flex-wrap items-center justify-center gap-2" aria-label={ariaLabel}>
      <button
        type="button"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="inline-flex cursor-pointer items-center gap-1 px-2 py-2 text-xs font-semibold text-[#47464b] transition hover:text-[#000001] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="size-4" aria-hidden />
        Trước
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const selected = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            aria-current={selected ? "page" : undefined}
            onClick={() => setPage(page)}
            className={`inline-flex min-w-9 cursor-pointer items-center justify-center px-2 py-2 text-xs font-bold tabular-nums transition ${
              selected ? "text-[#4B2876]" : "text-[#47464b] hover:text-[#000001]"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="inline-flex cursor-pointer items-center gap-1 px-2 py-2 text-xs font-semibold text-[#47464b] transition hover:text-[#000001] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Sau
        <ChevronRight className="size-4" aria-hidden />
      </button>
    </nav>
  );
}
