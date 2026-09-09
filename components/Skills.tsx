import {
  siPython,
  siCplusplus,
  siC,
  siOpenjdk,
  siJavascript,
  siPytorch,
  siScikitlearn,
  siOpencv,
  siNumpy,
  siPandas,
  siFastapi,
  siFlask,
  siStreamlit,
  siReact,
  siNodedotjs,
  siSupabase,
  siDocker,
  siGit,
  siLinux,
  type SimpleIcon,
} from "simple-icons";
import Section from "./Section";
import { skillGroups } from "@/lib/content";

// Brand marks, rendered monochrome (currentColor). Items with no entry here
// fall back to a plain text tile — intentional for the AI & LLM concepts.
const ICONS: Record<string, SimpleIcon> = {
  Python: siPython,
  "C++": siCplusplus,
  C: siC,
  Java: siOpenjdk,
  JavaScript: siJavascript,
  PyTorch: siPytorch,
  "scikit-learn": siScikitlearn,
  OpenCV: siOpencv,
  NumPy: siNumpy,
  Pandas: siPandas,
  FastAPI: siFastapi,
  Flask: siFlask,
  Streamlit: siStreamlit,
  React: siReact,
  "Node.js": siNodedotjs,
  Supabase: siSupabase,
  Docker: siDocker,
  Git: siGit,
  Linux: siLinux,
};

function Tile({ label }: { label: string }) {
  const icon = ICONS[label];
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-muted transition-colors hover:border-white/15 hover:text-ink">
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          aria-hidden
          className="h-3.5 w-3.5 shrink-0 fill-current"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
      )}
      <span className="text-[12px] leading-none">{label}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" label="Stack">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.name}>
            <h3 className="font-mono text-[10px] uppercase tracking-label text-faint">
              {g.name}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <Tile key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
