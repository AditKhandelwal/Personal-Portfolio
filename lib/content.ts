// Single source of truth for page content. Edit here, not in components.

export const profile = {
  name: "Adit Khandelwal",
  role: "Software Engineer",
  status: "Open to 2026 roles",
  location: "Bay Area, CA",
  email: "adit.khandelwal@gmail.com",
  links: {
    github: "https://github.com/AditKhandelwal",
    linkedin: "https://www.linkedin.com/in/aditkhandelwal/",
    resume: "/Adit_Khandelwal_Resume.pdf",
  },
};

export const hero = {
  headline:
    "I build AI agents and computer-vision systems — and take them the whole way to the people who use them.",
  sub: "Recent CS graduate from UC Merced. Currently shipping a tool-calling agent to real players and shaving latency off on-device models.",
};

/* ---------------------------------------------------------------- Projects */

export type FeaturedProject = {
  name: string;
  kind: string;
  mark: string;
  jp?: boolean;
  year: string;
  context: string;
  tagline: string;
  detail: string;
  stack: string[];
  repo: string | null;
  demo: string | null;
};

export type MoreProject = {
  name: string;
  year: string;
  blurb: string;
  stack: string[];
  repo: string | null;
};

export const projects: {
  featured: FeaturedProject[];
  more: MoreProject[];
} = {
  featured: [
    {
      name: "Wuthering Waves Agentic Assistant",
      kind: "AI agent · web app",
      mark: "WW",
      year: "2026",
      context: "Personal project",
      tagline:
        "A personalized build assistant for the action-RPG Wuthering Waves — it reasons over each player's real roster, echo inventory, and saved builds to answer team-composition and progression questions in plain language.",
      detail:
        "A raw Claude tool-calling agent (ReAct loop, four structured tools) runs as a single Supabase Edge Function — JWT-scoped so no query crosses users, streamed over SSE, no agent framework. Final character stats are recomputed server-side so the model compares set bonuses instead of raw IDs. A YOLO model exported to TensorFlow.js (99.5% mAP50) reads a screenshot to import an echo loadout in one step; a 30× latency regression fixed along the way (9.6s → 0.3s).",
      stack: ["React", "TypeScript", "Supabase Edge", "Claude API", "TensorFlow.js"],
      repo: "https://github.com/AditKhandelwal/Wuthering-Waves-Assistant",
      demo: "https://wuthering-waves-assistant.vercel.app/",
    },
    {
      name: "Sensei AI — Adaptive Japanese Tutor",
      kind: "AI agent · full-stack",
      mark: "先生AI",
      jp: true,
      year: "2026",
      context: "Personal project",
      tagline:
        "A full-stack Japanese tutor that adapts every lesson to what you've actually mastered.",
      detail:
        "A Claude-powered ReAct agent selects review items, generates lessons, and grades open-ended answers in real time. A custom Bayesian Knowledge Tracing model tracks per-item mastery across 57k+ curriculum items and feeds live learner state back to the agent. A dual-model pipeline — Sonnet for generation, Haiku for grading — is streamed over SSE to balance quality against latency and cost.",
      stack: ["Python", "FastAPI", "PostgreSQL", "React", "Claude API"],
      repo: "https://github.com/AditKhandelwal/Japanese-Learning-Agent-Platform",
      demo: null,
    },
    {
      name: "UCM Rate My Professor Bot",
      kind: "Discord bot",
      mark: "RMP",
      year: "2025",
      context: "Personal project",
      tagline:
        "A Discord bot that brings UC Merced professor ratings into chat with a single slash command.",
      detail:
        "/rmp <name> resolves a professor through Rate My Professors' GraphQL API and returns a clean embed — department, would-take-again, difficulty, top tags, and recent reviews. A companion scraper builds the legacy-ID map the lookup depends on.",
      stack: ["Python", "discord.py", "GraphQL", "BeautifulSoup"],
      repo: "https://github.com/AditKhandelwal/UCM-Rate-My-Professor-Bot",
      demo: null,
    },
  ],
  more: [
    {
      name: "Craigslist Used-Car Condition Classification",
      year: "2025",
      blurb:
        "A classical-ML pipeline classifying vehicle condition from 242K Craigslist listings — feature engineering, rare-category bucketing, imputation, and a tuned gradient-boosting model (74.4% accuracy, 0.55 macro-F1).",
      stack: ["Python", "scikit-learn", "pandas", "NumPy"],
      repo: "https://github.com/AmanKalkat/cse-176-proj",
    },
    {
      name: "Tabletop PDA — Blackjack CV Assistant",
      year: "2024",
      blurb:
        "A real-time table assistant: OpenCV and ArUco tags localize cards in 6-DoF while a multithreaded PyQt5 dashboard runs a basic-strategy rules engine and calls hit or stand.",
      stack: ["Python", "OpenCV", "PyQt5", "NumPy"],
      repo: "https://github.com/vvoffsec/TabletopPDAProject",
    },
    {
      name: "Spot-It Object Classification",
      year: "2025",
      blurb:
        "A YOLOv5 classifier for the symbols on Spot-it cards — 800+ images annotated in Roboflow and trained through its AutoML pipeline. 98.8% accuracy and first place in the course competition.",
      stack: ["Python", "Roboflow", "TensorFlow", "OpenCV"],
      repo: null,
    },
  ],
};

/* ------------------------------------------------------------------ Skills */

export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: "Languages",
    items: ["Python", "C++", "C", "Java", "SQL", "JavaScript"],
  },
  {
    name: "ML & Data",
    items: ["PyTorch", "scikit-learn", "OpenCV", "NumPy", "Pandas", "BKT"],
  },
  {
    name: "Frameworks & Tools",
    items: [
      "FastAPI",
      "Flask",
      "Streamlit",
      "React",
      "Node.js",
      "Supabase",
      "Docker",
      "Git",
      "Linux",
    ],
  },
  {
    name: "AI & LLM",
    items: [
      "Claude API",
      "LLM integration",
      "AI agents",
      "ReAct",
      "Tool use",
      "Prompt engineering",
      "RAG",
    ],
  },
];

/* -------------------------------------------------------------- Experience */

export type Role = {
  title: string;
  org: string;
  location: string;
  dates: string;
  blurb: string;
};

// Reverse-chronological by end date.
export const experience: Role[] = [
  {
    title: "ServiceNow Student Technology Consultant",
    org: "UC Merced, Office of Information Technology",
    location: "Merced, CA",
    dates: "Jul 2024 – Jan 2026",
    blurb:
      "Built production ServiceNow request forms and workflow automations for campus IT, scoping each release with staff stakeholders and closing 100+ cross-departmental tickets on an Agile cycle. My first taste of shipping software inside a large organization.",
  },
  {
    title: "Undergraduate Researcher",
    org: "SmartGrid Laboratory",
    location: "Merced, CA",
    dates: "Jan 2025 – Dec 2025",
    blurb:
      "Deployed thermal-sensor networks across classrooms and labs and wrote the Python pipelines that cleaned, labeled, and timestamped 10k+ frames of occupancy data — validated against ground truth to feed occupancy-forecasting models.",
  },
  {
    title: "Software Engineer, Computer Vision",
    org: "Owligator",
    location: "San Francisco, CA",
    dates: "May 2025 – Nov 2025",
    blurb:
      "Built a real-time CV pipeline on Luxonis DepthAI cameras: YOLOv8 label detection plus OCR to pull structured metadata off wine bottles, a PyTorch U-Net for label segmentation, and a multi-signal matcher (geometry + text similarity + IDs) that deduplicated inventory automatically.",
  },
  {
    title: "Software Engineer Intern",
    org: "Relanto (AI-First Lab)",
    location: "Fremont, CA",
    dates: "Jun 2025 – Aug 2025",
    blurb:
      "Built a natural-language-to-SQL pipeline that let non-technical staff query sales and marketing data in plain English. Spent most of the time on making it trustworthy — prompt engineering and error handling to cut failed queries — and fast enough for near-real-time use with Ollama + Phi-4-mini behind FastAPI.",
  },
  {
    title: "Software Engineer Intern (Capstone)",
    org: "Agrecom",
    location: "Merced, CA",
    dates: "Jan 2025 – May 2025",
    blurb:
      "Senior capstone: a Power Apps + Dataverse fuel-logging tool for a 25+ vehicle fleet, plus a Power BI dashboard and automated PDF reports. Worked directly with the CEO on scope and presented the finished build at UC Merced's Innovate to Grow.",
  },
  {
    title: "Front-End Developer Intern",
    org: "Icarus Development",
    location: "Remote",
    dates: "Oct 2024 – Jan 2025",
    blurb:
      "Shipped a media-rich “Stories” feature for a student social app in React Native + TypeScript, wired to Firebase / Firestore for real-time upload and playback, building to Figma specs with a small cross-functional team.",
  },
];

/* ------------------------------------------------------------------- About */

export const about = {
  paragraphs: [
    "I care most about the last mile — the stretch where a model stops being a notebook and becomes something a person actually uses. Lately that has meant tool-calling agents, knowledge tracing, and computer-vision models small enough to run in a browser tab.",
    "I studied Computer Science & Engineering at UC Merced and have worked across computer vision, applied ML, and internal tooling — at an SF startup, an AI lab, and a research lab on campus.",
  ],
  education: {
    school: "University of California, Merced",
    degree: "B.S. Computer Science & Engineering",
    dates: "Aug 2022 – Dec 2025",
    gpa: "3.62 / 4.00",
    coursework: [
      "Computer Vision",
      "Machine Learning",
      "Software Engineering",
      "Algorithms Analysis & Design",
      "Data Structures",
      "Full-Stack Web Development",
      "Linear Analysis",
      "Statistics",
    ],
  },
  facts: [
    { label: "Based in", value: "Bay Area, CA · open to relocating" },
    { label: "Focus", value: "AI agents · computer vision · full-stack" },
    { label: "Languages", value: "English · Hindi · Japanese (JLPT N4)" },
  ],
};

/* -------------------------------------------------------------- Background */

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
