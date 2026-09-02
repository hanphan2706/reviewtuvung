"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AdminPanel,
  AdminShell,
  adminInputClassName,
  adminPrimaryButtonClass,
} from "@/components/classroom/admin/admin-shell";
import type { ClassroomClassDetail } from "@/lib/classroom/types";

export function AdminDashboard({ initialClasses }: { initialClasses: ClassroomClassDetail[] }) {
  const router = useRouter();
  const [classes] = useState(initialClasses);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCreate(event: React.FormEvent) {
    event.preventDefault();
    setCreating(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/classes", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });
      const data = (await response.json()) as { classroom?: ClassroomClassDetail; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Không tạo được lớp.");
      setName("");
      setDescription("");
      router.push(`/admin/classes/${data.classroom!.id}`);
      router.refresh();
    } catch (createError) {
      setError(createError instanceof Error ? createError.message : "Không tạo được lớp.");
    } finally {
      setCreating(false);
    }
  }

  return (
    <AdminShell
      title="Quản lý lớp học"
      subtitle="Tạo lớp, thêm email học viên và giao bài tập từ nội dung Tự học hoặc link ngoài."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <AdminPanel title="Các lớp hiện có">
          {classes.length === 0 ? (
            <p className="text-sm text-ink-muted">Chưa có lớp nào. Tạo lớp đầu tiên ở bên phải.</p>
          ) : (
            <ul className="divide-y divide-zinc-200/90">
              {classes.map((classroom) => (
                <li key={classroom.id} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <div className="min-w-0">
                    <Link
                      href={`/admin/classes/${classroom.id}`}
                      className="font-semibold text-[#4b2876] hover:underline"
                    >
                      {classroom.name}
                    </Link>
                    {classroom.description ? (
                      <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{classroom.description}</p>
                    ) : null}
                    <p className="mt-2 text-xs text-ink-muted">
                      {classroom.member_count} học viên · {classroom.assignment_count} bài tập
                    </p>
                  </div>
                  <Link
                    href={`/admin/classes/${classroom.id}`}
                    className="shrink-0 text-sm font-medium text-ink-muted hover:text-ink"
                  >
                    Mở →
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </AdminPanel>

        <AdminPanel title="Tạo lớp mới">
          <form className="space-y-3" onSubmit={handleCreate}>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Tên lớp
              </span>
              <input
                className={adminInputClassName()}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="VD: IELTS Writing — Tháng 3"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Mô tả lớp
              </span>
              <textarea
                className={`${adminInputClassName()} min-h-28 resize-y`}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Lịch học, mục tiêu, ghi chú cho học viên..."
              />
            </label>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <button type="submit" disabled={creating} className={adminPrimaryButtonClass(creating)}>
              {creating ? "Đang tạo..." : "Tạo lớp"}
            </button>
          </form>
        </AdminPanel>
      </div>
    </AdminShell>
  );
}
