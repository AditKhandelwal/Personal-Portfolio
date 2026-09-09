import Section from "./Section";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul>
        {experience.map((r) => (
          <li
            key={`${r.org}-${r.title}`}
            className="rule flex items-baseline justify-between gap-6 py-[18px] first:border-t-0"
          >
            <span className="text-[15px] text-ink">
              {r.title} <span className="text-muted">&mdash; {r.org}</span>
            </span>
            <span className="shrink-0 font-mono text-[12px] tabular-nums text-faint">
              {r.dates}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
