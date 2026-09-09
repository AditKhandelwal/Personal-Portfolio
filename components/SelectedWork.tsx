import Section from "./Section";
import { work } from "@/lib/content";

export default function SelectedWork() {
  return (
    <Section id="work" label="Selected work" aside="2024 — 2026">
      <ul>
        {work.map((w) => {
          const inner = (
            <>
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-display text-[19px] font-medium text-ink transition-colors group-hover:text-white">
                  {w.name}
                  <span className="ml-2 inline-block translate-x-0 text-faint opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    &#8599;
                  </span>
                </h3>
                <span className="shrink-0 font-mono text-[12px] tabular-nums text-faint">
                  {w.year}
                </span>
              </div>
              <p className="mt-2 max-w-[560px] text-[13px] leading-[1.6] text-muted">
                {w.blurb}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-faint">
                {w.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </>
          );

          return (
            <li key={w.name} className="rule first:border-t-0">
              {w.href ? (
                <a
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block py-6"
                >
                  {inner}
                </a>
              ) : (
                <div className="group block py-6">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
