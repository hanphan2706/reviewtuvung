"use client";

import { useEffect, useState } from "react";
import { shuffleCopy } from "@/lib/writing/shuffle-copy";

/** Xáo bộ câu/đoạn một lần khi vào trang (tránh lệch hydration). */
export function useShuffledDeck<T>(items: readonly T[]): T[] | null {
  const [deck, setDeck] = useState<T[] | null>(null);

  useEffect(() => {
    setDeck(shuffleCopy(items));
  }, [items]);

  return deck;
}
