import { hero, profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-36">
      <p className="font-mono text-[11px] uppercase tracking-label text-muted">
        {profile.role}
      </p>
      <h1 className="mt-5 max-w-[660px] text-balance font-display text-[27px] font-medium leading-[1.24] tracking-[-0.015em] text-heading sm:text-[34px] lg:text-[42px]">
        {hero.headline}
      </h1>
      <p className="mt-6 max-w-[500px] text-[16px] leading-[1.7] text-muted">
        {hero.sub}
      </p>
      <div className="mt-8 flex gap-7 text-[14px]">
        <a href="#work" className="link-underline text-ink">
          Selected work &darr;
        </a>
        <a href={`mailto:${profile.email}`} className="link-underline text-ink">
          Email
        </a>
      </div>
      <p className="mt-10 font-mono text-[11px] text-faint">
        Move your cursor &mdash; the field responds
      </p>
    </section>
  );
}
