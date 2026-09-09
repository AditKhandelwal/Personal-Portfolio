import { profile } from "@/lib/content";

export default function TopBar() {
  return (
    <header className="sticky top-3 z-20 mb-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-xl border border-white/[0.07] bg-[#0b0b0e]/78 px-5 py-3.5 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_16px_40px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md sm:mb-6 sm:px-7">
      <a href="#top" className="text-[0.875rem] text-ink">
        {profile.name}
      </a>
      <span className="font-mono text-[0.6875rem] text-muted">
        <span className="text-accent">&#9679;</span> {profile.status}
        <span className="mx-2 text-faint">&middot;</span>
        {profile.location}
      </span>
    </header>
  );
}
