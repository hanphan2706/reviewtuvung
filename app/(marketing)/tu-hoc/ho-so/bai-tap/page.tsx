import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { HomeworkListView } from "@/components/classroom/student/homework-list-view";
import { LANDING } from "@/lib/landing-content";
import { isClassroomMember, listAssignmentsForStudent } from "@/lib/classroom/repository";
import { getCurrentUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Bài tập | ${LANDING.brand}`,
};

export default async function BaiTapPage() {
  const user = await getCurrentUser();
  if (!user?.email) {
    redirect("/tu-hoc/tu-vung?next=/tu-hoc/ho-so/bai-tap");
  }
  const enrolled = await isClassroomMember(user.email, user.id);
  if (!enrolled) {
    redirect("/tu-hoc/ho-so");
  }
  const assignments = await listAssignmentsForStudent(user.email, user.id);
  return <HomeworkListView assignments={assignments} />;
}
