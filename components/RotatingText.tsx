"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cycles through `items` in place: the current phrase fades + blurs out and
 * upward, the next one settles in from just below. Width is pinned to the
 * longest phrase so the line never reflows. Static under reduced-motion.
 */
export default function RotatingText({
  items,
  interval = 2200,
}: {
  items: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current || items.length < 2) return;
    const id = setInterval(
      () => setI((n) => (n + 1) % items.length),
      interval,
    );
    return () => clearInterval(id);
  }, [items.length, interval]);

  const widest = items.reduce((a, b) => (b.length >= a.length ? b : a), "");

  return (
    <span className="relative inline-grid align-baseline">
      <span
        className="invisible col-start-1 row-start-1 whitespace-nowrap"
        aria-hidden
      >
        {widest}
      </span>
      <span className="sr-only">{items.join(", ")}</span>
      {items.map((item, idx) => (
        <span
          key={item}
          aria-hidden
          className={`col-start-1 row-start-1 whitespace-nowrap text-accent transition-[opacity,transform,filter] duration-[450ms] ease-out ${
            idx === i
              ? "opacity-100 blur-0 translate-y-0"
              : "pointer-events-none -translate-y-[0.16em] opacity-0 blur-[5px]"
          }`}
        >
          {item}
        </span>
      ))}
    </span>
  );
}
