import Section from "./Section";
import { about } from "@/lib/content";

export default function About() {
  const { education: ed } = about;

  return (
    <Section id="about" label="About">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
        <div className="max-w-[62ch] space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-[1.75] text-ink/80">
              {p}
            </p>
          ))}

          <div className="!mt-9 border-t border-hairline pt-6">
            <h3 className="font-mono text-[10px] uppercase tracking-label text-faint">
              Education
            </h3>
            <p className="mt-3 text-[15px] text-ink">{ed.school}</p>
            <p className="text-[14px] text-muted">{ed.degree}</p>
            <p className="mt-1 font-mono text-[12px] text-faint">
              {ed.dates}
              <span className="mx-2">·</span>
              GPA {ed.gpa}
            </p>
            <p className="mt-3 text-[13px] leading-[1.7] text-muted">
              <span className="text-faint">Coursework — </span>
              {ed.coursework.join(", ")}
            </p>
          </div>
        </div>

        <dl className="space-y-4 sm:pt-1">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[10px] uppercase tracking-label text-faint">
                {f.label}
              </dt>
              <dd className="mt-1 text-[13px] leading-[1.5] text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
