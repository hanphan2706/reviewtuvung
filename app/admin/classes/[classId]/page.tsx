import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdminClassDetail } from "@/components/classroom/admin/admin-class-detail";
import { getClassById, listAssignments, listMembers } from "@/lib/classroom/repository";
import { LANDING } from "@/lib/landing-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Admin — Lớp học | ${LANDING.brand}`,
  robots: { index: false, follow: false },
};

type PageProps = {
  params: Promise<{ classId: string }>;
};

export default async function AdminClassPage({ params }: PageProps) {
  const { classId } = await params;
  const classroom = await getClassById(classId);
  if (!classroom) notFound();
  const [members, assignments] = await Promise.all([listMembers(classId), listAssignments(classId)]);
  return (
    <AdminClassDetail classroom={classroom} initialMembers={members} initialAssignments={assignments} />
  );
}
