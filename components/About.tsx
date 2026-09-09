import Section from "./Section";
import { about } from "@/lib/content";

export default function About() {
  const { education: ed } = about;

  return (
    <Section id="about" label="About">
      <div className="max-w-[64ch] space-y-4">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-[1.75] text-ink/80">
            {p}
          </p>
        ))}
      </div>

      <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
        {about.facts.map((f) => (
          <div key={f.label}>
            <dt className="font-mono text-[10px] uppercase tracking-label text-faint">
              {f.label}
            </dt>
            <dd className="mt-1 text-[13px] text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-9 border-t border-hairline pt-6">
        <h3 className="font-mono text-[10px] uppercase tracking-label text-faint">
          Education
        </h3>
        <div className="mt-3 sm:flex sm:items-baseline sm:justify-between sm:gap-6">
          <div>
            <p className="text-[15px] text-ink">{ed.school}</p>
            <p className="text-[14px] text-muted">{ed.degree}</p>
          </div>
          <p className="mt-1 shrink-0 font-mono text-[12px] text-faint sm:mt-0 sm:text-right">
            {ed.dates}
            <span className="mx-2">·</span>
            GPA {ed.gpa}
          </p>
        </div>
        <p className="mt-3 text-[13px] leading-[1.7] text-muted">
          <span className="text-faint">Coursework: </span>
          {ed.coursework.join(", ")}
        </p>
      </div>
    </Section>
  );
}
