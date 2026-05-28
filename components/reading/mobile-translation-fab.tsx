"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Languages } from "lucide-react";

const FAB_SIZE = 52;
const TAP_SLOP_PX = 6;
const STORAGE_KEY = "reading-vi-fab-position";
const DEFAULT_INSET = { right: 16, bottom: 96 };

type FabPosition = { x: number; y: number };

function getViewportBounds() {
  const vv = window.visualViewport;
  if (vv) {
    return {
      left: vv.offsetLeft,
      top: vv.offsetTop,
      width: vv.width,
      height: vv.height,
    };
  }
  return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
}

function clampPosition(x: number, y: number): FabPosition {
  const pad = 10;
  const { left, top, width, height } = getViewportBounds();
  const minX = left + pad;
  const minY = top + pad;
  const maxX = left + width - FAB_SIZE - pad;
  const maxY = top + height - FAB_SIZE - pad;
  return {
    x: Math.min(Math.max(minX, x), Math.max(minX, maxX)),
    y: Math.min(Math.max(minY, y), Math.max(minY, maxY)),
  };
}

function defaultPosition(): FabPosition {
  const { left, top, width, height } = getViewportBounds();
  return clampPosition(
    left + width - FAB_SIZE - DEFAULT_INSET.right,
    top + height - FAB_SIZE - DEFAULT_INSET.bottom,
  );
}

function readStoredPosition(): FabPosition | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { x?: number; y?: number };
    if (typeof parsed.x === "number" && typeof parsed.y === "number") {
      return clampPosition(parsed.x, parsed.y);
    }
  } catch {
    /* ignore */
  }
  return null;
}

type MobileTranslationFabProps = {
  open: boolean;
  onToggle: () => void;
};

type DragSession = {
  pointerId: number;
  offsetX: number;
  offsetY: number;
  startX: number;
  startY: number;
  didMove: boolean;
};

export function MobileTranslationFab({ open, onToggle }: MobileTranslationFabProps) {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<FabPosition>({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  const [dragging, setDragging] = useState(false);

  const fabRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<FabPosition>({ x: 0, y: 0 });
  const dragRef = useRef<DragSession | null>(null);
  const onToggleRef = useRef(onToggle);
  onToggleRef.current = onToggle;

  const paintPosition = useCallback((pos: FabPosition) => {
    positionRef.current = pos;
    const el = fabRef.current;
    if (!el) return;
    el.style.left = `${pos.x}px`;
    el.style.top = `${pos.y}px`;
  }, []);

  const commitPosition = useCallback(
    (pos: FabPosition) => {
      paintPosition(pos);
      setPosition(pos);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
      } catch {
        /* ignore */
      }
    },
    [paintPosition],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const stored = readStoredPosition();
    const initial = stored ?? defaultPosition();
    positionRef.current = initial;
    setPosition(initial);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    paintPosition(position);
  }, [ready, position, paintPosition]);

  useEffect(() => {
    if (!ready) return;
    const onResize = () => {
      commitPosition(clampPosition(positionRef.current.x, positionRef.current.y));
    };
    const vv = window.visualViewport;
    window.addEventListener("resize", onResize);
    vv?.addEventListener("resize", onResize);
    vv?.addEventListener("scroll", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      vv?.removeEventListener("resize", onResize);
      vv?.removeEventListener("scroll", onResize);
    };
  }, [ready, commitPosition]);

  useEffect(() => {
    const endDrag = (e: PointerEvent) => {
      const session = dragRef.current;
      if (!session || e.pointerId !== session.pointerId) return;

      const pos = clampPosition(e.clientX - session.offsetX, e.clientY - session.offsetY);

      if (!session.didMove) {
        onToggleRef.current();
      } else {
        commitPosition(pos);
      }

      dragRef.current = null;
      setDragging(false);
    };

    const onPointerMove = (e: PointerEvent) => {
      const session = dragRef.current;
      if (!session || e.pointerId !== session.pointerId) return;

      e.preventDefault();

      const dx = e.clientX - session.startX;
      const dy = e.clientY - session.startY;
      if (!session.didMove && Math.hypot(dx, dy) >= TAP_SLOP_PX) {
        session.didMove = true;
      }

      paintPosition(clampPosition(e.clientX - session.offsetX, e.clientY - session.offsetY));
    };

    const onPointerUp = (e: PointerEvent) => endDrag(e);
    const onPointerCancel = (e: PointerEvent) => endDrag(e);

    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      dragRef.current = null;
    };
  }, [paintPosition, commitPosition]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      if (e.button !== 0) return;
      const el = fabRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      dragRef.current = {
        pointerId: e.pointerId,
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
        startX: e.clientX,
        startY: e.clientY,
        didMove: false,
      };
      setDragging(true);
      e.preventDefault();
      e.stopPropagation();
    },
    [],
  );

  if (!mounted || !ready) return null;

  return createPortal(
    <div
      ref={fabRef}
      className={`fixed z-[45] select-none ${dragging ? "scale-[1.04]" : ""}`}
      style={{
        left: position.x,
        top: position.y,
        width: FAB_SIZE,
        height: FAB_SIZE,
        transition: dragging ? "none" : "transform 0.15s ease-out",
        willChange: dragging ? "left, top" : "auto",
      }}
      role="presentation"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Ẩn bản dịch tiếng Việt" : "Hiện bản dịch tiếng Việt"}
        onPointerDown={onPointerDown}
        style={{ touchAction: "none" }}
        className={`flex size-full cursor-grab flex-col items-center justify-center gap-0.5 rounded-full border shadow-[0_4px_20px_rgb(0_0_0/0.18)] active:cursor-grabbing ${
          open
            ? "border-[#4b2876]/50 bg-[#4b2876] text-white"
            : "border-[#E4E4E7] bg-white/95 text-[#4b2876] backdrop-blur-sm"
        } ${dragging ? "shadow-[0_8px_28px_rgb(0_0_0/0.22)]" : ""}`}
      >
        <Languages className="size-5 shrink-0 pointer-events-none" aria-hidden />
        <span className="pointer-events-none text-[8px] font-bold uppercase leading-none tracking-wide">
          {open ? "Ẩn" : "Dịch"}
        </span>
      </button>
    </div>,
    document.body,
  );
}
