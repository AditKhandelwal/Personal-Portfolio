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
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="flex items-baseline justify-between">
        <h2 className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-label text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
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
