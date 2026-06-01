"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { EmojiPickerAnchor, type EmojiPickerAnchorPlacement } from "@/components/emoji-picker-anchor";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";
import { insertPlainTextAtCaret } from "@/lib/insert-text-at-caret";
import { WORD_NOTION_TEXT_COLORS } from "@/lib/word-text-colors";
import { prepareWordHtmlForEdit, sanitizeWordHtml } from "@/lib/sanitize-word-html";

/** Chèn xuống dòng không phụ thuộc `execCommand` (hay fail khi ô mới / Safari). Caret đặt sau `<br>` bằng ZWSP rồi strip khi sync. */
function insertBrAtCaret(editor: HTMLDivElement): boolean {
  try {
    editor.focus();
    const sel = window.getSelection();
    if (!sel) return false;

    const ensureRange = (): Range => {
      if (sel.rangeCount > 0) {
        const r = sel.getRangeAt(0);
        if (editor.contains(r.commonAncestorContainer)) return r;
      }
      const r = document.createRange();
      r.selectNodeContents(editor);
      r.collapse(false);
      sel.removeAllRanges();
      sel.addRange(r);
      return r;
    };

    const range = ensureRange();
    range.deleteContents();
    const br = document.createElement("br");
    range.insertNode(br);

    const pad = document.createTextNode("\u200B");
    const parent = br.parentNode;
    if (parent) {
      parent.insertBefore(pad, br.nextSibling);
    }

    const nextRange = document.createRange();
    nextRange.setStart(pad, 0);
    nextRange.collapse(true);
    sel.removeAllRanges();
    sel.addRange(nextRange);
    return true;
  } catch {
    return false;
  }
}

export type RichTextFieldProps = {
  value: string;
  onChange: (html: string) => void;
  /** Gợi ý nhỏ phía trên ô (màu nhạt). */
  hint?: string;
  className?: string;
  minHeightClass?: string;
  /** Ngôn ngữ gợi ý cho kiểm tra chính tả trình duyệt (tiếng Anh vocabulary). */
  lang?: string;
  "aria-label"?: string;
  /** Nút emoji góc dưới phải (từ vựng); tự ẩn trên thiết bị cảm ứng (`pointer: coarse`). */
  showEmojiPicker?: boolean;
  emojiPlacement?: EmojiPickerAnchorPlacement;
};

export function RichTextField({
  value,
  onChange,
  hint,
  className = "",
  minHeightClass = "min-h-14",
  lang = "en",
  "aria-label": ariaLabel,
  showEmojiPicker = true,
  emojiPlacement = "corner-bottom",
}: RichTextFieldProps) {
  const isCoarsePointer = useCoarsePointer();
  const showEmojiPickerUi = showEmojiPicker && !isCoarsePointer;
  const ref = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const isUserTypingRef = useRef(false);
  const rangeRef = useRef<Range | null>(null);
  type ToolbarState =
    | { mode: "dock"; side: "above" | "below" }
    | { mode: "fixed"; top: number; left: number; side: "above" | "below" };
  const [toolbar, setToolbar] = useState<ToolbarState | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isUserTypingRef.current) {
      isUserTypingRef.current = false;
      return;
    }
    const prepared = prepareWordHtmlForEdit(value);
    if (el.innerHTML !== prepared) {
      el.innerHTML = prepared;
    }
  }, [value]);

  const syncFromDom = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const raw = el.innerHTML.replace(/\u200B/g, "");
    onChange(sanitizeWordHtml(raw));
  }, [onChange]);

  const updateToolbar = useCallback(() => {
    const el = ref.current;
    if (!el) {
      setToolbar(null);
      return;
    }
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      rangeRef.current = null;
      setToolbar(null);
      return;
    }
    const range = sel.getRangeAt(0);
    rangeRef.current = range.cloneRange();
    const anchor = range.commonAncestorContainer;
    const container = anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : (anchor as HTMLElement);
    if (!container || !el.contains(container)) {
      rangeRef.current = null;
      setToolbar(null);
      return;
    }

    const TOOLBAR_H = 40;
    const TOOLBAR_W_EST = 280;
    /** Lề khi chạm mép viewport (clamp ngang / flip dọc). */
    const EDGE_MARGIN = 8;
    /** Khoảng hở giữa thanh công cụ và vùng chọn / cạnh ô (px). */
    const SELECTION_GAP = 14;

    const rects = [...range.getClientRects()].filter((r) => r.width > 0 && r.height > 0);
    const er = el.getBoundingClientRect();
    const vv = window.visualViewport;
    const innerH = window.innerHeight;
    const vh = vv?.height ?? innerH;
    const vw = vv?.width ?? window.innerWidth;
    /** Layout → `position:fixed` (neo theo visual viewport khi bàn phím ảo mở, đặc biệt iOS). */
    const vvOffsetTop = vv?.offsetTop ?? 0;
    const vvOffsetLeft = vv?.offsetLeft ?? 0;

    const keyboardLikely = Boolean(vv) && (vh < innerH * 0.78 || (vv?.offsetTop ?? 0) > 0.5);

    if (keyboardLikely) {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const wr = wrap.getBoundingClientRect();
      const visualTop = vvOffsetTop;
      const visualBottom = vvOffsetTop + vh;
      const spaceAbove = wr.top - visualTop;
      const spaceBelow = visualBottom - wr.bottom;
      let side: "above" | "below" = "above";
      const dockNeed = TOOLBAR_H + EDGE_MARGIN + SELECTION_GAP;
      if (spaceAbove >= dockNeed) {
        side = "above";
      } else if (spaceBelow >= dockNeed) {
        side = "below";
      } else {
        side = spaceAbove >= spaceBelow ? "above" : "below";
      }
      setToolbar({ mode: "dock", side });
      return;
    }

    let r: DOMRect | null = rects.length > 0 ? (rects[rects.length - 1] ?? null) : null;
    if (!r) {
      const br = range.getBoundingClientRect();
      if (br.width > 0 && br.height > 0) r = br;
    }
    if (!r) {
      setToolbar(null);
      return;
    }

    const overlapsEditor =
      r.bottom > er.top - 2 && r.top < er.bottom + 2 && r.right > er.left - 2 && r.left < er.right + 2;
    if (!overlapsEditor || r.top < vvOffsetTop + 2) {
      r = new DOMRect(
        er.left + Math.min(er.width - 12, Math.max(12, er.width / 2)) - 1,
        Math.min(er.top + 14, er.bottom - 24),
        2,
        20,
      );
    } else if (r.height > vh * 0.42 && rects.length > 0) {
      r = rects[rects.length - 1] ?? r;
    }

    if (r.width === 0 && r.height === 0) {
      setToolbar(null);
      return;
    }

    const relTop = r.top - vvOffsetTop;
    const relBottom = r.bottom - vvOffsetTop;
    const anchorX = r.left + r.width / 2 - vvOffsetLeft;

    const half = TOOLBAR_W_EST / 2;
    const left = Math.min(vw - EDGE_MARGIN - half, Math.max(EDGE_MARGIN + half, anchorX));

    const minSpaceAboveToolbar = TOOLBAR_H + EDGE_MARGIN + SELECTION_GAP;
    let side: "above" | "below" = "above";
    let top: number;
    const spaceAbove = relTop;
    if (spaceAbove < minSpaceAboveToolbar && relBottom + TOOLBAR_H + SELECTION_GAP <= vh - EDGE_MARGIN) {
      side = "below";
      top = relBottom + SELECTION_GAP;
    } else {
      side = "above";
      top = relTop - SELECTION_GAP;
    }

    setToolbar({ mode: "fixed", top, left, side });
  }, []);

  useEffect(() => {
    const onSel = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(updateToolbar);
      });
    };
    document.addEventListener("selectionchange", onSel);
    return () => document.removeEventListener("selectionchange", onSel);
  }, [updateToolbar]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let touchTimer: number | undefined;
    const onTouchEnd = () => {
      if (touchTimer !== undefined) window.clearTimeout(touchTimer);
      touchTimer = window.setTimeout(() => {
        requestAnimationFrame(updateToolbar);
      }, 80);
    };
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchend", onTouchEnd);
      if (touchTimer !== undefined) window.clearTimeout(touchTimer);
    };
  }, [updateToolbar]);

  useEffect(() => {
    const vv = window.visualViewport;
    const onVv = () => {
      requestAnimationFrame(updateToolbar);
    };
    if (vv) {
      vv.addEventListener("resize", onVv);
      vv.addEventListener("scroll", onVv);
    }
    window.addEventListener("scroll", onVv, { passive: true });
    return () => {
      if (vv) {
        vv.removeEventListener("resize", onVv);
        vv.removeEventListener("scroll", onVv);
      }
      window.removeEventListener("scroll", onVv);
    };
  }, [updateToolbar]);

  useEffect(() => {
    const onDocDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (ref.current?.contains(t)) return;
      if (wrapRef.current?.contains(t)) return;
      if ((e.target as HTMLElement).closest?.("[data-rich-toolbar]")) return;
      setToolbar(null);
    };
    document.addEventListener("pointerdown", onDocDown);
    return () => document.removeEventListener("pointerdown", onDocDown);
  }, []);

  const execRich = useCallback(
    (fn: () => void) => {
      const el = ref.current;
      ref.current?.focus();
      const sel = window.getSelection();
      const r = rangeRef.current;
      if (r && el?.contains(r.commonAncestorContainer) && sel) {
        sel.removeAllRanges();
        sel.addRange(r);
      }
      try {
        document.execCommand("styleWithCSS", false, "true");
        fn();
      } catch {
        /* ignore */
      }
      isUserTypingRef.current = true;
      syncFromDom();
      requestAnimationFrame(updateToolbar);
    },
    [syncFromDom, updateToolbar],
  );

  const onBold = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== "b") return;
    e.preventDefault();
    execRich(() => {
      document.execCommand("bold", false);
    });
  };

  const applyColor = (hex: string) => {
    execRich(() => {
      document.execCommand("foreColor", false, hex);
    });
    setToolbar(null);
  };

  const applyBold = () => {
    execRich(() => {
      document.execCommand("bold", false);
    });
  };

  const insertEmoji = useCallback(
    (emoji: string) => {
      const el = ref.current;
      if (!el) return;
      insertPlainTextAtCaret(el, emoji);
      isUserTypingRef.current = true;
      syncFromDom();
      updateToolbar();
    },
    [syncFromDom, updateToolbar],
  );

  const toolbarControls = (
    <>
      <button
        type="button"
        title="In đậm"
        onClick={applyBold}
        className="flex h-[22px] w-[22px] shrink-0 cursor-pointer items-center justify-center rounded-xl bg-zinc-800 text-[11px] font-bold leading-none text-white shadow-sm"
      >
        B
      </button>
      {WORD_NOTION_TEXT_COLORS.map((c) => {
        const isWhite = c.hex.toLowerCase() === "#fafafa" || c.hex.toLowerCase() === "#ffffff";
        return (
          <button
            key={c.id}
            type="button"
            title={c.id}
            onClick={() => applyColor(c.hex)}
            className={`flex h-[22px] w-[22px] shrink-0 cursor-pointer items-center justify-center rounded-xl border-2 bg-white text-[10px] font-semibold leading-none tracking-tight ${
              isWhite ? "border-zinc-300 text-zinc-400" : ""
            }`}
            style={
              isWhite
                ? undefined
                : {
                    borderColor: c.hex,
                    color: c.hex,
                  }
            }
          >
            A
          </button>
        );
      })}
    </>
  );

  return (
    <>
      {hint ? <p className="mb-1.5 text-xs text-zinc-400">{hint}</p> : null}
      <div ref={wrapRef} className="relative">
        {toolbar?.mode === "dock" ? (
          <div
            data-rich-toolbar
            role="toolbar"
            aria-label="Định dạng chữ"
            className={`absolute z-[100] flex w-max max-w-[min(280px,calc(100%-8px))] flex-row flex-nowrap items-center gap-1 rounded-2xl border border-zinc-200/90 bg-white px-1.5 py-1 shadow-lg ring-1 ring-zinc-950/5 left-1/2 -translate-x-1/2 ${
              toolbar.side === "above" ? "bottom-full mb-[14px]" : "top-full mt-[14px]"
            }`}
            onPointerDown={(e) => e.preventDefault()}
          >
            {toolbarControls}
          </div>
        ) : null}
        <div
          ref={ref}
          role="textbox"
          aria-multiline="true"
          aria-label={ariaLabel}
          lang={lang}
          tabIndex={0}
          contentEditable
          suppressContentEditableWarning
          spellCheck
          onInput={() => {
            isUserTypingRef.current = true;
            syncFromDom();
            updateToolbar();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !(e.metaKey || e.ctrlKey)) {
              /** IME (VD: gõ tiếng Việt): Enter để chọn từ — không chặn, không chèn `<br>`. */
              const ne = e.nativeEvent;
              if ("isComposing" in ne && ne.isComposing) return;
              if (e.keyCode === 229) return;

              e.preventDefault();
              e.stopPropagation();

              const el = ref.current;
              if (el) {
                const ok = insertBrAtCaret(el);
                if (!ok) {
                  try {
                    document.execCommand("insertHTML", false, "<br>");
                  } catch {
                    try {
                      document.execCommand("insertLineBreak");
                    } catch {
                      /* ignore */
                    }
                  }
                }
              }
              isUserTypingRef.current = true;
              syncFromDom();
              updateToolbar();
              return;
            }
            onBold(e);
          }}
          onPaste={(e) => {
            e.preventDefault();
            const text = e.clipboardData.getData("text/plain");
            const lines = text.split(/\n/);
            for (let i = 0; i < lines.length; i++) {
              if (i > 0) {
                try {
                  document.execCommand("insertHTML", false, "<br>");
                } catch {
                  document.execCommand("insertLineBreak");
                }
              }
              document.execCommand("insertText", false, lines[i] ?? "");
            }
            isUserTypingRef.current = true;
            syncFromDom();
            updateToolbar();
          }}
          className={`w-full resize-y wrap-break-word rounded-xl border border-zinc-200/90 bg-white py-3 pl-4 text-base text-ink outline-none ring-zinc-300/80 focus-visible:border-zinc-400 focus-visible:ring-1 ${showEmojiPickerUi ? "pr-11 pb-10" : "pr-4"} ${minHeightClass} ${className}`.trim()}
        />
        {showEmojiPickerUi ? (
          <EmojiPickerAnchor
            placement={emojiPlacement}
            onPick={insertEmoji}
            aria-label="Chèn emoji vào ô nhập"
          />
        ) : null}
      </div>

      {toolbar?.mode === "fixed" && typeof document !== "undefined"
        ? createPortal(
            <div
              data-rich-toolbar
              role="toolbar"
              aria-label="Định dạng chữ"
              className={`fixed z-[100] flex w-max max-w-[calc(100vw-16px)] flex-row flex-nowrap items-center gap-1 rounded-2xl border border-zinc-200/90 bg-white px-1.5 py-1 shadow-lg ring-1 ring-zinc-950/5 -translate-x-1/2 ${
                toolbar.side === "above" ? "-translate-y-full" : ""
              }`}
              style={{ top: toolbar.top, left: toolbar.left }}
              onPointerDown={(e) => e.preventDefault()}
            >
              {toolbarControls}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
