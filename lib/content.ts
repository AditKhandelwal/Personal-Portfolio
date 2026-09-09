// Single source of truth for page content. Edit here, not in components.

export const profile = {
  name: "Adit Khandelwal",
  role: "Software Engineer",
  status: "Available for 2026 roles",
  location: "Merced, CA",
  email: "adit.khandelwal@gmail.com",
  links: {
    github: "https://github.com/aditkhandelwal",
    linkedin: "https://www.linkedin.com/in/aditkhandelwal/",
    resume: "/Adit_Khandelwal_Resume.pdf",
  },
};

export const hero = {
  headline:
    "I build AI agents and computer-vision systems — and take them the whole way to the people who use them.",
  sub: "Recent CS graduate from UC Merced. Currently shipping a tool-calling agent to real players and shaving latency off on-device models.",
};

export type Work = {
  name: string;
  blurb: string;
  year: string;
  href?: string;
  tags: string[];
};

export const work: Work[] = [
  {
    name: "Wuthering Waves Agentic Assistant",
    blurb:
      "An AI build planner that stores players’ character builds and grounds agent advice in their own saved data. Custom 4-tool LLM agent on a Supabase Edge Function, RLS-scoped so no query can cross users. Live to real players.",
    year: "2026",
    href: "https://github.com/aditkhandelwal",
    tags: ["React", "TypeScript", "Supabase Edge", "Claude API", "TensorFlow.js"],
  },
  {
    name: "Sensei AI",
    blurb:
      "A full-stack agentic Japanese tutor. A ReAct loop reads live per-item mastery from a custom Bayesian Knowledge Tracing model across 57k+ curriculum items and adapts each lesson. Dual-model pipeline — Sonnet for generation, Haiku for grading — over SSE.",
    year: "2026",
    href: "https://github.com/aditkhandelwal",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "Claude API"],
  },
  {
    name: "Owligator — Wine-Label CV Pipeline",
    blurb:
      "Real-time detection and OCR on Luxonis DepthAI cameras. YOLOv8 label detection, PyTorch U-Net segmentation, and a multi-signal record matcher that deduplicates inventory. 99.5% mAP50, 100% recall; fixed a 30× latency regression (9.6s → 0.3s).",
    year: "2025",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "DepthAI"],
  },
  {
    name: "Relanto — Natural-Language-to-SQL",
    blurb:
      "A plain-English query pipeline that lets non-technical staff explore sales and marketing data. Prompt engineering and error handling to cut failed queries; tuned for near real-time responses.",
    year: "2025",
    tags: ["Ollama", "Phi4-mini", "FastAPI", "Streamlit"],
  },
];

export const about = {
  paragraphs: [
    "I care most about the last mile — the part where a model stops being a notebook and becomes something a person actually uses. Tool-calling agents, knowledge tracing, and computer-vision models small enough to run in a browser tab.",
    "Before this I worked on real-time CV pipelines at Owligator and a natural-language analytics tool at Relanto. I studied Computer Science and Engineering at UC Merced.",
  ],
  facts: [
    { label: "Location", value: "Merced, CA" },
    { label: "Education", value: "UC Merced, BS CSE 2025" },
    { label: "Focus", value: "Agents, CV, full-stack" },
    { label: "Now", value: "WuWa v2 · JLPT N3" },
  ],
};

export type Role = {
  title: string;
  org: string;
  dates: string;
};

export const experience: Role[] = [
  {
    title: "Software Engineer, Computer Vision",
    org: "Owligator",
    dates: "May – Nov 2025",
  },
  {
    title: "Software Engineer Intern",
    org: "Relanto (AI-First Lab)",
    dates: "Jun – Aug 2025",
  },
  {
    title: "Student Technology Consultant",
    org: "UC Merced Office of Information Technology",
    dates: "Jul 2024 – Jan 2026",
  },
  {
    title: "Undergraduate Researcher",
    org: "SmartGrid Laboratory",
    dates: "Jan – Dec 2025",
  },
];

// Faint tokens that drift through the starfield background.
export const glyphs = [
  "py",
  "torch",
  "cv2",
  "react",
  "{ }",
  "</>",
  "∇",
  "λ",
  "SQL",
  "npm",
  "git",
  "agent",
  "→",
  "Σ",
];
