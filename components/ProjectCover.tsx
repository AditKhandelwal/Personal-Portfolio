/**
 * A generated cover for a featured project — same layout every time, only the
 * typographic mark and the "kind" label change. Keeps the projects reading as
 * one set instead of a grab bag of screenshots.
 */
export default function ProjectCover({
  mark,
  kind,
  jp = false,
}: {
  mark: string;
  kind: string;
  jp?: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b0b10]">
      <div className="cover-grid absolute inset-0" aria-hidden />
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <span className="font-mono text-[0.625rem] uppercase tracking-label text-faint">
          {kind}
        </span>
        <span
          className={
            jp
              ? "font-jp text-[clamp(2.1rem,9vw,3.2rem)] font-bold leading-none text-heading"
              : "font-display text-[clamp(2rem,8vw,3rem)] font-semibold leading-none tracking-[-0.02em] text-heading"
          }
        >
          {mark}
        </span>
      </div>
      <span className="absolute bottom-0 left-5 h-px w-14 bg-accent/70 sm:left-6" />
    </div>
  );
}
