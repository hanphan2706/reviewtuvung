"use client";

import Link from "next/link";
import { useMemo } from "react";
import { assignmentKindLabel } from "@/lib/classroom/assignment-labels";
import type { ClassroomAssignmentWithMeta } from "@/lib/classroom/types";

function statusLabel(assignment: ClassroomAssignmentWithMeta): string {
  if (assignment.submission?.status === "submitted") return "Đã nộp";
  if (assignment.submission?.status === "in_progress") return "Đang làm";
  return "Chưa bắt đầu";
}

export function HomeworkListView({ assignments }: { assignments: ClassroomAssignmentWithMeta[] }) {
  const grouped = useMemo(() => {
    const map = new Map<string, ClassroomAssignmentWithMeta[]>();
    for (const assignment of assignments) {
      const list = map.get(assignment.class_name) ?? [];
      list.push(assignment);
      map.set(assignment.class_name, list);
    }
    return [...map.entries()];
  }, [assignments]);

  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-[#f5f5f7] px-5 pb-8 pt-6">
      <div className="w-full max-w-md">
        <Link
          href="/tu-hoc/ho-so"
          className="mb-4 inline-flex text-sm font-medium text-ink-muted hover:text-ink"
        >
          ← Hồ sơ
        </Link>
        <h1 className="font-serif text-2xl font-bold text-ink">Bài tập</h1>
        <p className="mt-2 text-sm text-ink-muted">Danh sách homework từ các lớp bạn đang tham gia.</p>

        {assignments.length === 0 ? (
          <p className="mt-8 rounded-xl border border-zinc-200/90 bg-white px-5 py-8 text-center text-sm text-ink-muted">
            Chưa có bài tập nào.
          </p>
        ) : (
          <div className="mt-6 space-y-6">
            {grouped.map(([className, classAssignments]) => (
              <section
                key={className}
                className="overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-950/5"
              >
                <div className="border-b border-zinc-200/90 px-5 py-3">
                  <h2 className="font-serif text-lg font-bold text-ink">{className}</h2>
                </div>
                <ul className="divide-y divide-zinc-200/90">
                  {classAssignments.map((assignment) => (
                    <li key={assignment.id}>
                      <Link
                        href={`/tu-hoc/ho-so/bai-tap/${assignment.id}`}
                        className="flex items-start justify-between gap-4 px-5 py-4 transition hover:bg-zinc-50"
                      >
                        <div className="min-w-0">
                          <p className="font-semibold text-ink">{assignment.title}</p>
                          <p className="mt-1 text-xs text-ink-muted">{assignmentKindLabel(assignment.kind)}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-[#ebe6f4] px-2.5 py-1 text-[11px] font-semibold text-[#4b2876]">
                          {statusLabel(assignment)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
