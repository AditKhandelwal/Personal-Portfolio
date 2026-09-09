import Section from "./Section";
import ProjectCover from "./ProjectCover";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="work" label="Projects" aside={`${projects.featured.length} featured`}>
      <div className="space-y-14">
        {projects.featured.map((p) => (
          <article
            key={p.name}
            className="group grid gap-6 sm:grid-cols-[300px_minmax(0,1fr)] sm:gap-8"
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
              <ProjectCover mark={p.mark} kind={p.kind} jp={p.jp} />
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[20px] font-medium text-ink">
                  {p.name}
                </h3>
                <span className="shrink-0 font-mono text-[12px] tabular-nums text-faint">
                  {p.year}
                </span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-faint">
                {p.context}
              </p>

              <p className="mt-3 text-[14px] leading-[1.65] text-ink/85">
                {p.tagline}
              </p>
              <p className="mt-2 text-[13px] leading-[1.6] text-muted">
                {p.detail}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-faint">
                {p.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {(p.demo || p.repo) && (
                <div className="mt-4 flex gap-5 text-[13px]">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-ink"
                    >
                      Live &#8599;
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-ink"
                    >
                      Code &#8599;
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-mono text-[11px] uppercase tracking-label text-muted">
          More
        </h3>
        <ul className="mt-3">
          {projects.more.map((p) => (
            <li key={p.name} className="rule py-5 first:border-t-0">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[15px] text-ink">{p.name}</span>
                <span className="shrink-0 font-mono text-[12px] tabular-nums text-faint">
                  {p.year}
                </span>
              </div>
              <p className="mt-1.5 max-w-[640px] text-[13px] leading-[1.6] text-muted">
                {p.blurb}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-faint">
                {p.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                  >
                    Code &#8599;
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
