import { hero, profile } from "@/lib/content";
import RotatingText from "./RotatingText";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[56vh] scroll-mt-24 flex-col justify-center pb-6 pt-24"
    >
      {/* Soft radial scrim so the headline reads over the star field without a hard box. */}
      <div className="hero-scrim" aria-hidden />

      <div className="relative">
        <h1 className="flex max-w-[56rem] flex-wrap items-baseline gap-x-[0.28em] font-display font-medium leading-[1.1] tracking-[-0.02em] text-heading [font-size:clamp(2.2rem,5.6vw,3.9rem)]">
          <span>{hero.prefix}</span>
          <RotatingText items={hero.rotating} />
        </h1>

        <p className="mt-8 max-w-[46ch] text-[1rem] leading-[1.75] text-muted sm:text-[1.0625rem]">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[0.875rem]">
          <a href="#work" className="link-underline text-ink">
            Projects &darr;
          </a>
          <a href="#experience" className="link-underline text-ink">
            Experience
          </a>
          <a href={`mailto:${profile.email}`} className="link-underline text-ink">
            Email
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-ink"
          >
            R&eacute;sum&eacute;
          </a>
        </div>
      </div>
    </section>
  );
}
