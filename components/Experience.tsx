import Section from "./Section";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="space-y-0">
        {experience.map((r) => (
          <li
            key={`${r.org}-${r.title}`}
            className="rule py-7 first:border-t-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[15px] text-ink">
                {r.title}
                <span className="text-muted"> — {r.org}</span>
              </h3>
              <span className="shrink-0 font-mono text-[12px] tabular-nums text-faint">
                {r.location}
                <span className="mx-2">·</span>
                {r.dates}
              </span>
            </div>
            <p className="mt-2.5 max-w-[68ch] text-[13.5px] leading-[1.7] text-muted">
              {r.blurb}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
