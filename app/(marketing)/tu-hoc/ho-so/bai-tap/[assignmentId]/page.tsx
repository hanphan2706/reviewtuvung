import type { Metadata } from "next";
import { HomeworkAssignmentView } from "@/components/classroom/student/homework-assignment-view";
import { LANDING } from "@/lib/landing-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Chi tiết bài tập | ${LANDING.brand}`,
};

type PageProps = {
  params: Promise<{ assignmentId: string }>;
};

export default async function BaiTapDetailPage({ params }: PageProps) {
  const { assignmentId } = await params;
  return <HomeworkAssignmentView assignmentId={assignmentId} />;
}
