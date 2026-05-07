"use client";

import { useMemo } from "react";
import { prepareWordHtmlForEdit } from "@/lib/sanitize-word-html";

export function WordRichDisplay({
  html,
  className,
  as: Tag = "span",
}: {
  html: string;
  className?: string;
  as?: "span" | "div" | "p";
}) {
  const safe = useMemo(() => prepareWordHtmlForEdit(html), [html]);

  if (!safe) {
    return <Tag className={className}>—</Tag>;
  }

  return (
    <Tag
      className={`word-rich-html [&_b]:font-bold [&_strong]:font-bold [&_br]:block ${className ?? ""}`.trim()}
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}
