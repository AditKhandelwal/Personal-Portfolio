import Section from "./Section";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_200px] lg:gap-16">
        <div className="max-w-[62ch] space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-[1.75] text-ink/80">
              {p}
            </p>
          ))}
        </div>
        <dl className="space-y-4">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[10px] uppercase tracking-label text-faint">
                {f.label}
              </dt>
              <dd className="mt-1 text-[13px] text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
