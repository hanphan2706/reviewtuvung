import type { Metadata } from "next";
import { WritingSampleLibraryView } from "@/components/writing/writing-sample-library-view";
import { LANDING } from "@/lib/landing-content";
import { listWritingCatalog } from "@/lib/ielts-samples/writing-sample-registry";

export const metadata: Metadata = {
  title: `Thư viện mẫu viết | ${LANDING.brand}`,
  description: `IELTS Writing Task 1 & Task 2 sample library (${listWritingCatalog().length} bài).`,
};

export default function WritingSampleLibraryPage() {
  return <WritingSampleLibraryView catalog={listWritingCatalog()} />;
}
