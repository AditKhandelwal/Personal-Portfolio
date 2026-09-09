import { profile } from "@/lib/content";

export default function TopBar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-7">
      <span className="text-[14px] text-ink">{profile.name}</span>
      <span className="font-mono text-[11px] text-muted">
        <span className="text-accent">&#9679;</span> {profile.status}
        <span className="mx-2 text-faint">&middot;</span>
        {profile.location}
      </span>
    </header>
  );
}
