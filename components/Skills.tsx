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

function Item({ label }: { label: string }) {
  const icon = ICONS[label];
  return (
    <span className="inline-flex items-center gap-2 text-[0.8125rem] text-muted transition-colors hover:text-ink">
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          aria-hidden
          className="h-[0.9375rem] w-[0.9375rem] shrink-0 fill-current opacity-75"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="h-1 w-1 shrink-0 rounded-full bg-accent/50" />
      )}
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="skills" label="Stack">
      <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.name}>
            <h3 className="font-mono text-[0.625rem] uppercase tracking-label text-faint">
              {g.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {g.items.map((item) => (
                <Item key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
