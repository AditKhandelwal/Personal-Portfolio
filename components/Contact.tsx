import Section from "./Section";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <Section id="contact" label="Elsewhere" className="pb-32">
      <h2 className="font-display text-[28px] font-medium tracking-[-0.015em] text-heading sm:text-[33px]">
        Let&rsquo;s build something.
      </h2>
      <p className="mt-4">
        <a
          href={`mailto:${profile.email}`}
          className="link-underline text-[18px] text-ink"
        >
          {profile.email}
        </a>
      </p>
      <div className="mt-6 flex gap-6 text-[14px]">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-ink"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-ink"
        >
          LinkedIn
        </a>
        <a
          href={profile.links.resume}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-ink"
        >
          Résumé
        </a>
      </div>
      <p className="mt-14 font-mono text-[11px] text-faint">
        {profile.location} &nbsp;&middot;&nbsp; &copy; {new Date().getFullYear()}
      </p>
    </Section>
  );
}
