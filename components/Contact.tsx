import Section from "./Section";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.0625rem)] font-medium tracking-[-0.015em] text-heading">
        Let&rsquo;s build something.
      </h2>
      <p className="mt-4">
        <a
          href={`mailto:${profile.email}`}
          className="link-underline text-[1.125rem] text-ink"
        >
          {profile.email}
        </a>
      </p>
      <div className="mt-6 flex gap-6 text-[0.875rem]">
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
      <p className="mt-14 font-mono text-[0.6875rem] text-faint">
        {profile.location} &nbsp;&middot;&nbsp; &copy; {new Date().getFullYear()}
      </p>
    </Section>
  );
}
