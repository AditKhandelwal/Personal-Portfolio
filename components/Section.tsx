import type { ReactNode } from "react";

export default function Section({
  id,
  label,
  aside,
  children,
  className = "",
}: {
  id?: string;
  label: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`pt-32 sm:pt-40 ${className}`}>
      <div className="flex items-baseline justify-between">
        <h2 className="font-mono text-[11px] uppercase tracking-label text-muted">
          {label}
        </h2>
        {aside ? (
          <span className="font-mono text-[11px] text-faint">{aside}</span>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
