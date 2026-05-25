import { notFound } from "next/navigation";

/** Không còn placeholder slug — mọi `/tu-hoc/:slug` không khớp route tĩnh sẽ 404. */
export default function TuHocSlugFallback() {
  notFound();
}
