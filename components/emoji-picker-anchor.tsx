"use client";

import { Smile } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type EmojiPickerAnchorPlacement = "corner-bottom" | "center-right" | "inline";

type EmojiPickerAnchorProps = {
  onPick: (emoji: string) => void;
  /** `aria-label` cho nút mở bảng emoji */
  "aria-label"?: string;
  /**
   * `corner-bottom`: góc dưới phải (ô nhiều dòng / rich text).
   * `center-right`: giữa theo chiều dọc bên phải (input một dòng, absolute).
   * `inline`: nút nằm trong flex hàng với input (không absolute).
   */
  placement?: EmojiPickerAnchorPlacement;
};

type PanelLayout = { top: number; left: number; width: number; maxHeight: number };

function readUnicodeFromEmojiClick(detail: {
  unicode?: string;
  emoji?: { unicode?: string };
}): string | undefined {
  if (detail.unicode) return detail.unicode;
  const em = detail.emoji;
  if (em && "unicode" in em && typeof em.unicode === "string") return em.unicode;
  return undefined;
}

export function EmojiPickerAnchor({
  onPick,
  "aria-label": ariaLabel = "Chèn emoji",
  placement = "corner-bottom",
}: EmojiPickerAnchorProps) {
  const [open, setOpen] = useState(false);
  const [panelLayout, setPanelLayout] = useState<PanelLayout>({ top: 0, left: 0, width: 360, maxHeight: 440 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pickerHostRef = useRef<HTMLDivElement>(null);
  const onPickRef = useRef(onPick);
  onPickRef.current = onPick;

  const updatePanelPos = useCallback(() => {
    const b = btnRef.current;
    if (!b) return;
    const r = b.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const panelW = Math.min(vw - 16, 380);
    const left = Math.max(8, Math.min(r.left, vw - panelW - 8));
    const maxHeight = Math.min(Math.floor(vh * 0.72), 480);
    let top = r.bottom + 8;
    if (top + maxHeight > vh - 8) {
      top = Math.max(8, r.top - maxHeight - 8);
    }
    setPanelLayout({ top, left, width: panelW, maxHeight });
  }, []);

  useEffect(() => {
    if (!open) return;
    updatePanelPos();
    const onScroll = () => updatePanelPos();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [open, updatePanelPos]);

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (btnRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const host = pickerHostRef.current;
    if (!host) return;
    let cancelled = false;
    let picker: HTMLElement | null = null;

    const onEmojiClick = (ev: Event) => {
      const e = ev as CustomEvent<{ unicode?: string; emoji?: { unicode?: string } }>;
      const unicode = readUnicodeFromEmojiClick(e.detail);
      if (unicode) {
        onPickRef.current(unicode);
        setOpen(false);
      }
    };

    host.innerHTML = "";
    void import("emoji-picker-element").then(() => {
      if (cancelled || !pickerHostRef.current) return;
      picker = document.createElement("emoji-picker");
      picker.setAttribute("locale", "vi");
      picker.style.width = "100%";
      picker.style.height = "100%";
      picker.style.minHeight = "0";
      picker.addEventListener("emoji-click", onEmojiClick);
      pickerHostRef.current.appendChild(picker);
    });

    return () => {
      cancelled = true;
      if (picker) {
        picker.removeEventListener("emoji-click", onEmojiClick);
      }
      host.innerHTML = "";
    };
  }, [open]);

  const toggle = () => {
    setOpen((v) => {
      if (!v) {
        requestAnimationFrame(() => updatePanelPos());
      }
      return !v;
    });
  };

  const btnPositionClass =
    placement === "inline"
      ? "relative z-10 shrink-0"
      : placement === "center-right"
        ? "absolute right-1.5 top-1/2 z-10 -translate-y-1/2"
        : "absolute bottom-1.5 right-1.5 z-10";

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
        className={`${btnPositionClass} inline-flex size-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b2876]/30`}
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <Smile className="size-[18px]" strokeWidth={1.75} aria-hidden />
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={panelRef}
              role="group"
              aria-label="Chọn emoji"
              className="fixed z-[200] flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xl ring-1 ring-zinc-950/10"
              style={{
                top: panelLayout.top,
                left: panelLayout.left,
                width: panelLayout.width,
                maxHeight: panelLayout.maxHeight,
              }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div
                ref={pickerHostRef}
                className="min-h-0 min-w-0 flex-1 overflow-hidden"
                style={{ height: panelLayout.maxHeight }}
              />
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
