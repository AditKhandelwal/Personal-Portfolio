import { hero, profile } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[86vh] scroll-mt-24 flex-col justify-center py-24"
    >
      {/* Soft radial scrim so the headline reads over the star field without a hard box. */}
      <div className="hero-scrim" aria-hidden />

      <div className="relative">
        <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-label text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.location}
        </p>

        <h1 className="mt-7 max-w-[680px] font-display font-medium leading-[1.08] tracking-[-0.02em] text-heading [font-size:clamp(2.2rem,5.6vw,3.9rem)]">
          {hero.headline}
        </h1>

        <p className="mt-8 max-w-[46ch] text-[16px] leading-[1.75] text-muted sm:text-[17px]">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[14px]">
          <a href="#work" className="link-underline text-ink">
            Projects &darr;
          </a>
          <a href={`mailto:${profile.email}`} className="link-underline text-ink">
            Email
          </a>
          <a href={profile.links.resume} className="link-underline text-ink">
            R&eacute;sum&eacute;
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-label text-faint">
        <span className="h-px w-10 bg-faint/50" />
        the field tracks your cursor
      </div>
    </section>
  );
}
