"use client";

import { useEffect, useState } from "react";

/** Updates once per minute for due counts. */
export function useNowTick() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(Date.now());
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  return now;
}
