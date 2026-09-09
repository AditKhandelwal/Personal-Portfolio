import type { ReactNode } from "react";

/**
 * A "module" — a rounded surface that floats over the star field.
 * Subtle: a hairline edge and a blur, just enough to hold text without
 * reading as a heavy card.
 */
export default function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.06] bg-[#0b0b0e]/70 px-6 py-9 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] backdrop-blur-md sm:px-11 sm:py-12 ${className}`}
    >
      {children}
    </div>
  );
}
