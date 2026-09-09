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
    "I build the software around AI models: tool-calling agents, on-device vision, and the full stack that makes them usable.",
  sub: "Recent CS grad from UC Merced. Recent work: a live Claude agent for Wuthering Waves players, real-time vision at a wine-tech startup, and an adaptive Japanese tutor.",
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
        "A personalized build assistant for the action RPG Wuthering Waves. It reasons over each player's real roster, echo inventory, and saved builds to answer team-composition and progression questions in plain language.",
      detail:
        "A hand-written Claude agent runs as a Supabase Edge Function: a ReAct tool-calling loop with four tools that read the player's own roster, saved builds, and character data under their auth scope. Every answer is grounded in that account's data instead of generic guide advice. Character stats are recomputed server-side so the model compares set bonuses rather than raw item IDs.",
      stack: ["React", "TypeScript", "Supabase Edge", "Claude API", "TensorFlow.js"],
      repo: "https://github.com/AditKhandelwal/Wuthering-Waves-Assistant",
      demo: "https://wuthering-waves-assistant.vercel.app/",
    },
    {
      name: "Sensei AI",
      kind: "AI agent · full-stack",
      mark: "先生AI",
      jp: true,
      year: "2026",
      context: "Personal project",
      tagline:
        "A full-stack Japanese tutor that reshapes every session around what you have actually retained.",
      detail:
        "A Claude agent (Sonnet for teaching, Haiku for grading) drives each session through a ReAct loop with seven tools. A custom Bayesian Knowledge Tracing model keeps a p_know estimate for every one of ~57k vocab, kanji, and grammar items and updates it after each answer; the agent reads that state to choose what to review and what to introduce. One item pool feeds every mode, so vocab and kana SRS drills, kanji, grammar fill-ins, reading passages, and sentence writing all update the same model of what you know.",
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
        "/rmp <name> resolves a professor through Rate My Professors' GraphQL API and returns a clean embed: department, would-take-again, difficulty, top tags, and recent reviews. A companion scraper builds the legacy-ID map the lookup depends on.",
      stack: ["Python", "discord.py", "GraphQL", "BeautifulSoup"],
      repo: "https://github.com/AditKhandelwal/UCM-Rate-My-Professor-Bot",
      demo: null,
    },
  ],
  more: [
    {
      name: "Craigslist Used-Car Classification",
      year: "2025",
      blurb:
        "A classical-ML pipeline classifying vehicle condition from 242K Craigslist listings. Feature engineering, rare-category bucketing, and imputation feed a tuned gradient-boosting model (74.4% accuracy, 0.55 macro-F1).",
      stack: ["Python", "scikit-learn", "pandas", "NumPy"],
      repo: null,
    },
    {
      name: "Blackjack CV Assistant",
      year: "2024",
      blurb:
        "A real-time table assistant. OpenCV and ArUco tags localize cards in 6-DoF while a multithreaded PyQt5 dashboard runs a basic-strategy rules engine and calls hit or stand.",
      stack: ["Python", "OpenCV", "PyQt5", "NumPy"],
      repo: null,
    },
    {
      name: "Spot-It Symbol Classifier",
      year: "2025",
      blurb:
        "A YOLOv5 classifier for the symbols on Spot-it cards. 800+ images annotated in Roboflow and trained through its AutoML pipeline; 98.8% accuracy and first place in the course competition.",
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

// Ordered by relevance to the roles Adit is targeting, not strictly by date.
export const experience: Role[] = [
  {
    title: "Software Engineer, Computer Vision",
    org: "Owligator",
    location: "San Francisco, CA",
    dates: "May 2025 – Nov 2025",
    blurb:
      "Built a real-time CV pipeline on Luxonis DepthAI cameras: YOLOv8 label detection plus OCR to pull structured metadata off wine bottles, a PyTorch U-Net for label segmentation, and a multi-signal matcher (blob geometry, OCR text similarity, custom IDs) that deduplicated inventory automatically.",
  },
  {
    title: "Software Engineer Intern",
    org: "Relanto (AI-First Lab)",
    location: "Fremont, CA",
    dates: "Jun 2025 – Aug 2025",
    blurb:
      "Built a retrieval-augmented natural-language-to-SQL pipeline that let non-technical staff query sales and marketing data in plain English. RAG over the schema and example queries kept generations grounded; prompt engineering and error handling cut failed queries; Ollama and Phi-4-mini behind FastAPI kept it fast enough for near-real-time use.",
  },
  {
    title: "Contract Software Engineer, Agentic Benchmark Design",
    org: "DataAnnotation",
    location: "Remote",
    dates: "Aug 2026 – Present",
    blurb:
      "Design SWE-bench-style benchmarks for evaluating AI coding agents, across licensed open-source repos in TypeScript, Python, and Java. For each: take a real bug or missing feature, stand up a reproducible Docker environment, and write the hidden pytest / JUnit / Jest suite that grades a candidate fix. Calibrate difficulty by running coding agents against the benchmark and reading their failure modes, so it meaningfully separates strong agents from weak ones.",
  },
  {
    title: "Undergraduate Researcher",
    org: "SmartGrid Laboratory",
    location: "Merced, CA",
    dates: "Jan 2025 – Dec 2025",
    blurb:
      "Built the Python pipelines that cleaned, labeled, and timestamped 10k+ frames of occupancy data from thermal sensor networks across campus classrooms and labs, then trained a linear regression model to 97% accuracy on occupancy prediction. Started an EnergyPlus simulation as the bridge to a live system: I got as far as a hardcoded rules-based HVAC controller to exercise the simulation loop, with the end goal of the regression model reading live sensor data to auto-adjust HVAC in real buildings.",
  },
  {
    title: "Software Engineer Intern (Capstone)",
    org: "Agrecom",
    location: "Merced, CA",
    dates: "Jan 2025 – May 2025",
    blurb:
      "Senior capstone: a Power Apps and Dataverse fuel-logging tool for a 25+ vehicle fleet, plus a Power BI dashboard and automated PDF reports. Worked directly with the CEO on scope and presented the finished build at UC Merced's Innovate to Grow.",
  },
  {
    title: "Front-End Developer Intern",
    org: "Icarus Development",
    location: "Remote",
    dates: "Oct 2024 – Jan 2025",
    blurb:
      "Shipped a media-rich “Stories” feature for a student social app in React Native and TypeScript, wired to Firebase and Firestore for real-time upload and playback, building to Figma specs with a small cross-functional team.",
  },
  {
    title: "ServiceNow Student Technology Consultant",
    org: "UC Merced, Office of Information Technology",
    location: "Merced, CA",
    dates: "Jul 2024 – Jan 2026",
    blurb:
      "Built production ServiceNow request forms and workflow automations for campus IT (UI policies, client scripts, Flow Designer), scoping each release with staff stakeholders and closing 100+ cross-departmental tickets on an Agile cycle.",
  },
];

/* ------------------------------------------------------------------- About */

export const about = {
  paragraphs: [
    "I'm most interested in the last mile of ML: the part where a model stops being a notebook cell and becomes something someone relies on. In practice the unglamorous decisions are the work: which tools an agent can call, what data it's allowed to see, how fast a response comes back before people stop using it.",
    "My side projects are all things I actually use: an agent for a game I play, a tutor for the Japanese I'm studying (JLPT N4). Building for real users, even a handful, forces every decision a demo lets you skip.",
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
    { label: "Focus", value: "AI agents · computer vision · backend · full-stack" },
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
