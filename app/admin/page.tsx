import type { Metadata } from "next";
import { AdminDashboard } from "@/components/classroom/admin/admin-dashboard";
import { listClassesForAdmin } from "@/lib/classroom/repository";
import { LANDING } from "@/lib/landing-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Admin | ${LANDING.brand}`,
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const classes = await listClassesForAdmin();
  return <AdminDashboard initialClasses={classes} />;
}
