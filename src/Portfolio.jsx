/**
 * Gracias Kumara Winata - Personal Portfolio
 * ------------------------------------------------------------
 * Apple "Pro" Editorial Aesthetic (DESIGN.md)
 * - Alternating Full-Bleed Section Rhythm:
 *     Nav: True Black (#000000 @ 80% opacity, blur 20px, h: 44px)
 *     Hero: Pure White (#ffffff) / Ink (#1d1d1f)
 *     About: Apple Parchment (#f5f5f7) with White #ffffff utility cards (18px radius)
 *     Project 01: Full-Bleed Dark Tile (#1d1d1f)
 *     Project 02: Full-Bleed Light Parchment Tile (#f5f5f7)
 *     Project 03: Full-Bleed Dark Tile (#272729)
 *     Tech Stack & Footer: Apple Parchment (#f5f5f7)
 * - Signature Interactive Blues:
 *     Action Blue (#0066cc) for primary CTA pill buttons (rounded-full, scale 0.95 active)
 *     Sky Link Blue (#2997ff) on dark tiles for links & eyebrows
 * - Apple Pro Typography:
 *     56px Hero display & 40px Section display (font-weight 600, line-height 1.07, tracking -0.02em)
 *     Two-tone headlines with metallic cobalt gradient on focal catchphrases
 *     Body copy: 17px, line-height 1.47, letter-spacing -0.374px
 * - High-Contrast Internship Highlight Card (#1d1d1f on #f5f5f7 with pulsing live dot)
 * - Signature Apple Product Shadow on screenshots:
 *     box-shadow: 3px 5px 30px 0px rgba(0, 0, 0, 0.22), border-radius: 12px
 */
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Cpu,
  Mic,
  Hand,
  Activity,
  Menu,
  X,
  Copy,
  Check,
  BrainCircuit,
  Server,
  Wrench,
  GraduationCap,
  Workflow,
  Maximize2,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ============================================================
 * DATA
 * ============================================================ */

const PROFILE = {
  name: "Gracias Kumara Winata",
  email: "graciaswinata@gmail.com",
  github: "https://github.com/Gracias-48",
  githubLabel: "github.com/Gracias-48",
  linkedin: "https://www.linkedin.com/in/gracias-kumara-winata/",
  linkedinLabel: "linkedin.com/in/gracias-kumara-winata",
  role: "Computer Science (AI) Student @ BINUS University",
  focus: ["On-Device Deep Learning", "Spatio-Temporal CV", "Speech ASR"],
  subheadline: "Building Multi-Agent Systems & Automated Data Pipelines",
  status:
    "Currently seeking AI/ML Engineering or Software Engineering Internship opportunities where I can contribute to impactful, end-to-end engineering challenges.",
};

const ABOUT_PARAGRAPHS = [
  "I am an undergraduate Computer Science student at BINUS University specializing in Artificial Intelligence, passionate about bridging the gap between theoretical machine learning and low-latency, real-world production systems.",
  "My technical work centers on deploying 100% on-device deep learning models, architecting spatio-temporal computer vision & speech recognition pipelines, and building zero-maintenance serverless backends.",
  "Rather than relying solely on high-level black-box APIs, I enjoy engineering core pipelines from the ground up: whether implementing Slaney Log-Mel STFT feature extractors in pure NumPy, optimizing sub-millisecond ONNX models on CPU, or running quantized Whisper models in-browser via WebGPU/WASM.",
];

const PRINCIPLES = [
  {
    icon: Cpu,
    title: "On-device first",
    body: "Inference where the data lives: CPU, WebGPU, WASM. Zero cloud round-trips.",
  },
  {
    icon: Wrench,
    title: "Ground-up pipelines",
    body: "STFT, Log-Mel, ring buffers and gates: built, tested, understood.",
  },
  {
    icon: Server,
    title: "Zero-maintenance backends",
    body: "Serverless crons and workers that run reliably without babysitting.",
  },
  {
    icon: Activity,
    title: "Measured, not guessed",
    body: "Latency, RTF, WER and FPS tracked as first-class engineering outputs.",
  },
];

const HERO_STATS = [
  { k: "INFERENCE", v: "0.7 ms", sub: "ONNX on CPU" },
  { k: "ASR PRIVACY", v: "100%", sub: "client-side" },
  { k: "AGENT GRAPH", v: "7-node", sub: "LangGraph" },
  { k: "SENTRY CRON", v: "15 min", sub: "GitHub Actions" },
];

const TELEMETRY_PROJECTS = [
  {
    id: "gesture-hud",
    badge: "Computer Vision",
    title: "Touchless Gesture HUD",
    model: "Dilated TCN (Causal Conv1D)",
    runtime: "ONNX Runtime (CPU)",
    latency: "0.7 ms",
    fps: "11.9 FPS",
    keypoints: "21 landmarks",
    highlight: "Sub-millisecond inference on standard laptop CPU without GPU",
  },
  {
    id: "transcribenote",
    badge: "Speech Recognition",
    title: "TranscribeNote ASR",
    model: "Quantized Whisper + Silero VAD",
    runtime: "WebGPU / WASM (In-Browser)",
    latency: "800 ms partials",
    fps: "0.38x RTF",
    keypoints: "80-ch Log-Mel",
    highlight: "100% private on-device audio streaming with pure NumPy front-end",
  },
  {
    id: "stock-intel",
    badge: "Multi-Agent System",
    title: "IDX Stock Intelligence",
    model: "LangGraph 7-Node StateGraph",
    runtime: "GitHub Actions + Workers",
    latency: "15 min cron",
    fps: "22 unit tests",
    keypoints: "Bull vs Bear",
    highlight: "Triple-Engine serverless pipeline with real-time Telegram delivery",
  },
];

const SKILL_GROUPS = [
  {
    id: "ai",
    icon: BrainCircuit,
    path: "~/stack/ai-dl-signal",
    title: "AI, Deep Learning & Signal Processing",
    targetProject: "project-gesture-hud",
    targetProjectTitle: "Gesture HUD & TranscribeNote",
    projectLinks: [
      { id: "project-gesture-hud", label: "Touchless Gesture HUD (TCN / ONNX)" },
      { id: "project-transcribenote", label: "TranscribeNote (Whisper / VAD)" },
    ],
    items: [
      { name: "PyTorch", detail: "TCN, BiLSTM, ST-GCN", target: "project-gesture-hud" },
      { name: "ONNX Runtime", detail: "CPU / Web", target: "project-gesture-hud" },
      { name: "Faster-Whisper", detail: "CTranslate2", target: "project-transcribenote" },
      { name: "MediaPipe", target: "project-gesture-hud" },
      { name: "Transformers.js", target: "project-transcribenote" },
      { name: "Silero VAD", target: "project-transcribenote" },
      { name: "Google GenAI SDK", detail: "Gemini", target: "project-stock-intel" },
      { name: "OpenCV", target: "project-gesture-hud" },
      { name: "Scikit-Learn", target: "project-stock-intel" },
      { name: "NumPy", target: "project-transcribenote" },
      { name: "Pandas", target: "project-stock-intel" },
    ],
  },
  {
    id: "web",
    icon: Server,
    path: "~/stack/web-backend",
    title: "Web & Backend Engineering",
    targetProject: "project-transcribenote",
    targetProjectTitle: "TranscribeNote Web App",
    projectLinks: [
      { id: "project-transcribenote", label: "TranscribeNote (WebGPU, FastAPI, React 19)" },
    ],
    items: [
      { name: "Python", detail: "FastAPI, Flask, Streamlit", target: "project-gesture-hud" },
      { name: "TypeScript / React 19", target: "project-transcribenote" },
      { name: "WebSockets", target: "project-transcribenote" },
      { name: "Web Workers", target: "project-transcribenote" },
      { name: "WebGPU / WASM", target: "project-transcribenote" },
      { name: "Java", detail: "Spring Boot", target: "project-transcribenote" },
      { name: "SQL", target: "project-stock-intel" },
    ],
  },
  {
    id: "ops",
    icon: Wrench,
    path: "~/stack/devops-hw",
    title: "DevOps & Hardware",
    targetProject: "project-stock-intel",
    targetProjectTitle: "IDX Stock Intelligence",
    projectLinks: [
      { id: "project-stock-intel", label: "IDX Multi-Agent (GitHub Actions Crons)" },
      { id: "project-gesture-hud", label: "Gesture HUD (Pytest Benchmarks)" },
    ],
    items: [
      { name: "GitHub Actions", detail: "CI/CD & Serverless Crons", target: "project-stock-intel" },
      { name: "Pytest", target: "project-gesture-hud" },
      { name: "Vitest", target: "project-transcribenote" },
      { name: "Vercel", target: "project-transcribenote" },
      { name: "Git", target: "project-stock-intel" },
      { name: "ESP32 / Arduino", detail: "I2S, MQTT", target: "project-gesture-hud" },
    ],
  },
];

const PROJECTS = [
  {
    id: "transcribenote",
    index: "01",
    theme: "dark", // Dark tile 1
    bg: "bg-[#1d1d1f]",
    textMain: "text-white",
    textMuted: "text-[#cccccc]",
    accentBlue: "text-[#2997ff]",
    dividerColor: "border-white/15",
    icon: Mic,
    tag: "ON-DEVICE SPEECH ASR",
    title: "TranscribeNote",
    subtitle: "Real-Time Lecture Transcriber & Click-to-Highlight Notes",
    description:
      "A privacy-first lecture assistant where audio never leaves the machine. Microphone audio at 16 kHz is segmented by Silero VAD and pseudo-streamed into a quantized Whisper model running in-browser via Transformers.js (WebGPU / WASM) inside a Web Worker, with an optional local FastAPI + Faster-Whisper CUDA backend over WebSockets fed by a pure-NumPy 80-channel Slaney Log-Mel front-end.",
    pipeline: ["Mic 16 kHz", "Silero VAD", "Web Worker", "Whisper (WebGPU)", "Hallucination Filter", "Key Notes"],
    metrics: [
      { v: "100%", l: "on-device inference" },
      { v: "~800 ms", l: "partial decode ticks" },
      { v: "80-ch", l: "Log-Mel in NumPy" },
    ],
    tags: ["React 19", "TypeScript", "Transformers.js", "WebGPU/WASM", "Silero VAD", "FastAPI", "Faster-Whisper", "Vercel"],
    repo: "https://github.com/Gracias-48/Real-Time-Audio-Transcription",
    repoLabel: "gracias-48/real-time-audio-transcription",
    image: "/projects/transcribenote.png",
    images: [
      {
        src: "/projects/transcribenote.png",
        fallback: "/projects/transcribenote.png",
        label: "Live Transcriber Interface",
        caption: "100% on-device speech transcription feed with 1-click keynote extraction",
      },
    ],
    frameClass: "aspect-[1024/520]",
    imgClass: "object-cover object-top",
  },
  {
    id: "gesture-hud",
    index: "02",
    theme: "light", // Light Parchment tile
    bg: "bg-[#f5f5f7]",
    textMain: "text-[#1d1d1f]",
    textMuted: "text-[#7a7a7a]",
    accentBlue: "text-[#0066cc]",
    dividerColor: "border-black/10",
    icon: Hand,
    tag: "SPATIO-TEMPORAL COMPUTER VISION",
    title: "Touchless Gesture HUD",
    subtitle: "Continuous Spatio-Temporal Deep Learning for Touchless HCI",
    description:
      "Touchless computer control from a standard webcam. MediaPipe tracks 21 hand landmarks, resampled to 12 FPS into a 32-frame ring buffer; 131-dim dual-stream features feed hot-swappable TCN, BiLSTM-Attention and ST-GCN models exported to ONNX for sub-millisecond CPU inference. A multi-stage motion, confidence, and consistency gate prevents false triggers before PyAutoGUI injects OS actions.",
    pipeline: ["Webcam 30 FPS", "MediaPipe 21 kp", "Ring Buffer T=32", "ONNX (TCN)", "Anti-False Gate", "OS Action"],
    metrics: [
      { v: "0.7 ms", l: "CPU inference" },
      { v: "8-class", l: "softmax gestures" },
      { v: "3", l: "hot-swap models" },
    ],
    tags: ["PyTorch", "ONNX Runtime", "MediaPipe", "OpenCV", "Streamlit", "PyAutoGUI", "Pytest"],
    repo: "https://github.com/Gracias-48/Gesture-Control",
    repoLabel: "gracias-48/gesture-control",
    image: "/projects/gesture-hud.png",
    images: [
      {
        src: "/projects/gesture-hud.png",
        fallback: "/projects/gesture-hud.png",
        label: "Continuous HUD Telemetry",
        caption: "Real-time 21 hand landmarks tracking, 11.9 FPS continuous throughput, and anti-false trigger gate",
      },
    ],
    frameClass: "aspect-[1024/520]",
    imgClass: "object-cover object-top",
  },
  {
    id: "stock-intel",
    index: "03",
    theme: "dark", // Dark tile 2
    bg: "bg-[#272729]",
    textMain: "text-white",
    textMuted: "text-[#cccccc]",
    accentBlue: "text-[#2997ff]",
    dividerColor: "border-white/15",
    icon: Workflow,
    tag: "MULTI-AGENT SYSTEMS & SERVERLESS",
    title: "IDX Stock Intelligence",
    subtitle: "Triple-Engine Multi-Agent Market Analysis System",
    description:
      "A zero-maintenance market intelligence system for the Indonesia Stock Exchange. GitHub Actions crons run a morning macro radar and a 15-minute price sentry; a Telegram /analyze command triggers a Cloudflare Worker that dispatches a LangGraph 7-node pipeline: four parallel analysts, Bull vs Bear debate, a Pydantic trade execution plan, and a 5-tier portfolio manager verdict delivered back to Telegram.",
    pipeline: ["Telegram /analyze", "Cloudflare Worker", "GitHub Actions", "LangGraph (7 nodes)", "Bull vs Bear", "PM Verdict"],
    metrics: [
      { v: "3", l: "autonomous engines" },
      { v: "15 min", l: "price sentry interval" },
      { v: "22", l: "offline unit tests" },
    ],
    tags: ["Python", "LangGraph", "GitHub Actions", "Cloudflare Workers", "Telegram Bot API", "Pydantic", "Pytest"],
    repo: "https://github.com/Gracias-48/Stock-Analysis",
    repoLabel: "gracias-48/stock-analysis",
    image: "/projects/stock-bot.png",
    images: [
      {
        src: "/projects/stock-bot.png",
        fallback: "/projects/stock-bot.png",
        label: "Part 1: Macro & Bull Thesis",
        caption: "Deep-Dive Stock Intelligence: Technicals, News Catalysts & Bull Researcher Upside",
      },
      {
        src: "/projects/stock-bot-2.png",
        fallback: "/projects/stock-bot-2.png",
        label: "Part 2: Bear Thesis & Risk",
        caption: "Bear Researcher Thesis: Downside Risks, Margin of Safety & Valuation Sensitivity",
      },
      {
        src: "/projects/stock-bot-3.png",
        fallback: "/projects/stock-bot-3.png",
        label: "Part 3: Trade Plan & Verdict",
        caption: "Trader Execution Plan (Entry, TP, SL) & Portfolio Manager Final 5-Tier Decision",
      },
    ],
    frameClass: "aspect-[947/980] max-h-[580px]",
    imgClass: "object-contain object-top",
  },
];

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

/* ============================================================
 * STYLES
 * ============================================================ */

const STYLES = `
.gw-root {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Inter", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.gw-root ::selection {
  background: #0066cc;
  color: #FFFFFF;
}

html {
  scroll-padding-top: 50px;
}
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Apple exact elevation product shadow */
.apple-product-shadow {
  box-shadow: 3px 5px 30px 0px rgba(0, 0, 0, 0.22);
}

/* Subtle ring for Apple utility cards */
.apple-card-ring {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.04);
}

@keyframes apple-pulse-ring {
  0% { transform: scale(0.95); opacity: 0.9; }
  50% { transform: scale(1.4); opacity: 0.2; }
  100% { transform: scale(0.95); opacity: 0.9; }
}
.apple-pulse {
  animation: apple-pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes gw-highlight-jump {
  0% { box-shadow: 0 0 0 0 rgba(0, 102, 204, 0.6); }
  50% { box-shadow: 0 0 0 10px rgba(0, 102, 204, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 102, 204, 0); }
}
.target-highlight {
  animation: gw-highlight-jump 1.4s cubic-bezier(0, 0, 0.2, 1) 2;
}

@keyframes gw-rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}
.gw-rise {
  animation: gw-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

@keyframes gw-reveal {
  from { opacity: 0; transform: translateY(24px); }
}
@media (prefers-reduced-motion: no-preference) {
  @supports ((animation-timeline: view()) and (animation-range: entry)) {
    .reveal {
      animation: gw-reveal auto cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
      animation-timeline: view();
      animation-range: entry 0% entry 70%;
    }
  }
  @supports not ((animation-timeline: view()) and (animation-range: entry)) {
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
    }
    .reveal.is-in {
      opacity: 1;
      transform: none;
    }
  }
}
@media (prefers-reduced-motion: reduce) {
  .gw-rise { animation: none !important; }
}
`;

/* ============================================================
 * HELPER FUNCTIONS
 * ============================================================ */

function scrollToSection(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
  el.classList.remove("target-highlight");
  void el.offsetWidth;
  el.classList.add("target-highlight");
  setTimeout(() => el.classList.remove("target-highlight"), 2800);
}

function openEmail(showToast) {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PROFILE.email
  )}&su=${encodeURIComponent("Opportunity for Gracias Kumara Winata")}&body=${encodeURIComponent(
    "Hi Gracias,\n\nI came across your portfolio and would like to connect regarding:\n\n"
  )}`;

  const win = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");

  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(PROFILE.email).catch(() => {});
  }

  if (!win || win.closed || typeof win.closed === "undefined") {
    window.location.href = `mailto:${PROFILE.email}?subject=Opportunity%20for%20Gracias%20Kumara%20Winata`;
  }

  if (showToast) {
    showToast(`Opening Gmail compose and copied ${PROFILE.email} to clipboard`);
  }
}

/* ============================================================
 * HOOKS
 * ============================================================ */

function useRevealFallback() {
  useEffect(() => {
    const supported = window.CSS?.supports?.("(animation-timeline: view()) and (animation-range: entry)");
    if (supported) return;
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============================================================
 * ICONS
 * ============================================================ */

function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/* ============================================================
 * GLOBAL NAV (Apple 44px true black, frosted glass)
 * ============================================================ */

function Nav({ onEmailClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[44px] border-b border-white/10 bg-black/80 backdrop-blur-[20px] backdrop-saturate-180 transition-colors">
      <nav className="mx-auto flex h-full max-w-[1020px] items-center justify-between px-5 sm:px-6" aria-label="Primary">
        <a href="#top" id="nav-logo" className="flex items-center gap-2 text-[13px] font-semibold tracking-tight text-white">
          <span className="grid h-6 w-6 place-items-center rounded-sm bg-white text-[11px] font-bold text-black">
            GW
          </span>
          <span className="text-white/95">Gracias Kumara Winata</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                id={`nav-${l.id}`}
                href={`#${l.id}`}
                className="text-[12px] font-normal tracking-[-0.12px] text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            id="nav-email"
            type="button"
            onClick={onEmailClick}
            className="rounded-full bg-[#0066cc] px-3.5 py-1 text-[12px] font-normal text-white transition-all hover:bg-[#0071e3] active:scale-95 shadow-sm inline-flex items-center gap-1.5"
          >
            <Mail className="h-3 w-3" /> Email Me
          </button>
          <button
            id="nav-menu-toggle"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-7 w-7 place-items-center rounded-sm text-white/80 hover:text-white md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 px-5 pb-5 bg-black/95 border-b border-white/10">
          {NAV_LINKS.map((l) => (
            <li key={l.id} className="border-t border-white/10">
              <a
                id={`mnav-${l.id}`}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3 text-[14px] font-normal text-white"
              >
                {l.label}
                <ArrowRight className="h-3.5 w-3.5 text-white/40" />
              </a>
            </li>
          ))}
          <li className="border-t border-white/10 pt-3">
            <button
              id="mnav-email"
              type="button"
              onClick={() => {
                setOpen(false);
                onEmailClick();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] px-4 py-2 text-[14px] font-medium text-white hover:bg-[#0071e3] transition-all"
            >
              <Mail className="h-3.5 w-3.5" /> Email Me (Direct)
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

/* ============================================================
 * HERO TELEMETRY SYSTEM CARD (Apple Store Utility Style)
 * ============================================================ */

function SystemTelemetryCard() {
  const [activeTab, setActiveTab] = useState(0);
  const current = TELEMETRY_PROJECTS[activeTab];

  return (
    <div className="gw-rise relative w-full" style={{ animationDelay: "220ms" }}>
      <div className="rounded-[18px] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] apple-card-ring border border-black/[0.04]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#f0f0f0]">
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-[#0066cc]" />
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[#7a7a7a]">
              Live Core Telemetry
            </span>
          </div>
          <span className="rounded-full bg-[#f5f5f7] px-2.5 py-0.5 text-[11px] font-medium text-[#1d1d1f]">
            100% On-Device
          </span>
        </div>

        {/* Tab switchers */}
        <div className="mt-3.5 flex gap-1 p-1 rounded-xl bg-[#f5f5f7]">
          {TELEMETRY_PROJECTS.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`flex-1 rounded-lg py-1.5 text-[12px] font-medium transition-all duration-150 ${
                activeTab === idx
                  ? "bg-white text-[#1d1d1f] shadow-sm"
                  : "text-[#7a7a7a] hover:text-[#1d1d1f]"
              }`}
            >
              {p.badge}
            </button>
          ))}
        </div>

        {/* Telemetry card body */}
        <div className="mt-4 space-y-3.5">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[11px] text-[#0066cc] uppercase tracking-wider font-medium">{current.badge}</p>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] tracking-tight mt-0.5">{current.title}</h3>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection(`project-${current.id}`)}
              className="inline-flex items-center gap-1 text-[12px] font-medium text-[#0066cc] hover:underline"
            >
              Inspect <ArrowDown className="h-3 w-3" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-[11px] bg-[#f5f5f7] p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#7a7a7a]">Architecture</span>
              <p className="mt-0.5 font-mono text-[12px] font-medium text-[#1d1d1f] truncate">{current.model}</p>
            </div>
            <div className="rounded-[11px] bg-[#f5f5f7] p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#7a7a7a]">Engine Runtime</span>
              <p className="mt-0.5 font-mono text-[12px] font-medium text-[#1d1d1f] truncate">{current.runtime}</p>
            </div>
            <div className="rounded-[11px] bg-[#f5f5f7] p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#7a7a7a]">Measured Latency</span>
              <p className="font-mono mt-0.5 text-[17px] font-bold text-[#0066cc]">{current.latency}</p>
            </div>
            <div className="rounded-[11px] bg-[#f5f5f7] p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#7a7a7a]">Throughput / Scale</span>
              <p className="font-mono mt-0.5 text-[17px] font-bold text-[#1d1d1f]">{current.fps}</p>
            </div>
          </div>

          <p className="text-[12.5px] text-[#7a7a7a] leading-relaxed rounded-[11px] bg-[#fafafc] border border-[#f0f0f0] p-3">
            <span className="text-[#1d1d1f] font-semibold">Key Benchmark: </span>
            {current.highlight}
          </p>

          <button
            type="button"
            onClick={() => scrollToSection(`project-${current.id}`)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] py-2 text-[13px] font-medium transition-colors"
          >
            View Full Architecture & System Demo <ArrowRight className="h-3.5 w-3.5 text-[#0066cc]" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
 * HERO (Apple Pure White / Editorial Opening)
 * ============================================================ */

function Hero({ onEmailClick }) {
  return (
    <section id="top" className="relative overflow-hidden bg-white text-[#1d1d1f] pt-[44px]">
      <div className="relative mx-auto flex min-h-[92svh] max-w-[1020px] flex-col justify-center px-5 pb-16 pt-16 sm:px-6 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Copy */}
          <div>
            <p
              id="hero-status"
              className="gw-rise font-mono text-[12px] uppercase tracking-[0.18em] text-[#7a7a7a] font-medium mb-4"
            >
              Open to AI/ML & Software Engineering Internships
            </p>

            {/* Apple Hero Display: 56px, 600 weight, 1.07 line-height, -0.02em tracking */}
            <h1
              className="gw-rise text-[38px] font-semibold leading-[1.07] tracking-[-0.02em] sm:text-[48px] lg:text-[56px] text-[#1d1d1f]"
              style={{ animationDelay: "60ms" }}
            >
              Gracias Kumara Winata
            </h1>

            <p
              className="gw-rise mt-4 text-[19px] font-semibold leading-[1.3] text-[#1d1d1f] sm:text-[21px]"
              style={{ animationDelay: "120ms" }}
            >
              {PROFILE.role}
            </p>

            <ul className="gw-rise mt-3 flex flex-wrap gap-2" style={{ animationDelay: "160ms" }} aria-label="Core focus areas">
              {PROFILE.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full bg-[#f5f5f7] px-3.5 py-1 text-[13px] font-medium text-[#333333] border border-black/[0.03]"
                >
                  {f}
                </li>
              ))}
            </ul>

            {/* Apple Body: 17px, 400 weight, 1.47 line-height, -0.374px letter-spacing */}
            <p
              className="gw-rise mt-5 max-w-[540px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[#7a7a7a]"
              style={{ animationDelay: "200ms" }}
            >
              {PROFILE.subheadline}
            </p>

            <div className="gw-rise mt-8 flex flex-wrap items-center gap-3.5" style={{ animationDelay: "260ms" }}>
              {/* Primary Action Blue Pill Button */}
              <button
                id="hero-cta-email"
                type="button"
                onClick={onEmailClick}
                className="rounded-full bg-[#0066cc] px-[22px] py-[11px] text-[15px] font-medium text-white transition-all hover:bg-[#0071e3] active:scale-95 shadow-sm inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" /> Email Me
              </button>

              <a
                id="hero-cta-github"
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#d2d2d7] bg-white px-[20px] py-[11px] text-[15px] font-medium text-[#1d1d1f] transition-all hover:border-[#0066cc] hover:text-[#0066cc] active:scale-95 inline-flex items-center gap-2"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>

              <a
                id="hero-cta-linkedin"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#d2d2d7] bg-white px-[20px] py-[11px] text-[15px] font-medium text-[#1d1d1f] transition-all hover:border-[#0066cc] hover:text-[#0066cc] active:scale-95 inline-flex items-center gap-2"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* System Telemetry card */}
          <SystemTelemetryCard />
        </div>

        {/* Telemetry bar */}
        <dl className="gw-rise mt-16 grid grid-cols-2 border-t border-[#f0f0f0] pt-8 md:grid-cols-4" style={{ animationDelay: "340ms" }}>
          {HERO_STATS.map((s, i) => (
            <div
              key={s.k}
              className={`py-3 pr-4 ${i % 2 === 1 ? "pl-4 md:pl-6" : ""} ${i > 0 ? "md:border-l md:border-[#f0f0f0]" : ""} ${
                i >= 2 ? "border-t border-[#f0f0f0] md:border-t-0" : ""
              } ${i === 2 ? "md:pl-6" : ""} ${i % 2 === 1 ? "border-l border-[#f0f0f0]" : ""}`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7a7a7a] font-medium">{s.k}</dt>
              <dd className="mt-1 text-[26px] font-semibold text-[#1d1d1f] tracking-tight sm:text-[30px]">
                <span className="font-mono">{s.v}</span>{" "}
                <span className="font-mono text-[12px] font-normal text-[#7a7a7a]">{s.sub}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ============================================================
 * ABOUT ME (Apple Parchment #f5f5f7 Canvas with Crisp White Cards)
 * ============================================================ */

function About({ onEmailClick }) {
  return (
    <section id="about" className="bg-[#f5f5f7] text-[#1d1d1f] py-24 sm:py-32">
      <div className="mx-auto max-w-[1020px] px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="reveal">
            {/* Apple Eyebrow: Action Blue on light */}
            <p className="font-mono mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0066cc] font-semibold">
              01 / ABOUT ME
            </p>

            {/* Apple Display: 40px, 600 weight, 1.10 line-height, tight tracking */}
            <h2 className="text-[32px] font-semibold leading-[1.10] tracking-[-0.02em] sm:text-[40px] text-[#1d1d1f]">
              Theory in.
              <br />
              <span className="bg-gradient-to-r from-[#0066cc] to-[#2997ff] bg-clip-text text-transparent">
                Low-latency systems out.
              </span>
            </h2>

            {/* Crisp White 18px rounded utility card */}
            <div className="mt-8 flex items-start gap-4 rounded-[18px] bg-white p-6 shadow-sm apple-card-ring border border-black/[0.04]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f5f5f7] text-[#0066cc]">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[17px] font-semibold tracking-tight text-[#1d1d1f]">BINUS University</p>
                <p className="text-[14px] text-[#7a7a7a] mt-0.5">B.Sc. Computer Science : Artificial Intelligence</p>
              </div>
            </div>
          </div>

          {/* Body paragraphs: 17px, line-height 1.47, tracking -0.374px */}
          <div className="reveal space-y-4 text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[#333333]">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i} className={i === 0 ? "text-[#1d1d1f] font-medium" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* High-Contrast Apple Store Highlight Card: Currently Seeking Internship */}
        <div className="reveal mt-14 overflow-hidden rounded-[18px] bg-[#1d1d1f] text-white p-7 sm:p-8 shadow-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="apple-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2997ff] font-semibold">
                  CURRENT STATUS : ACTIVELY SEEKING
                </p>
              </div>
              <p className="max-w-[700px] text-[18px] sm:text-[20px] font-semibold leading-[1.35] text-white">
                {PROFILE.status}
              </p>
            </div>
            <button
              id="about-cta-email"
              type="button"
              onClick={onEmailClick}
              className="shrink-0 rounded-full bg-[#0066cc] px-[22px] py-[11px] text-[15px] font-medium text-white hover:bg-[#0071e3] active:scale-95 transition-all shadow-md inline-flex items-center gap-1.5"
            >
              Let&apos;s Connect <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 4 Core Philosophy Cards (Pure White, 18px radius, padding: 28px, Action Blue icons, zero harsh borders) */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="reveal rounded-[18px] bg-white p-[28px] shadow-sm apple-card-ring border border-black/[0.04] transition-all hover:-translate-y-0.5"
            >
              <Icon className="h-6 w-6 text-[#0066cc]" />
              <p className="mt-4 text-[17px] font-semibold tracking-tight text-[#1d1d1f]">{title}</p>
              <p className="mt-2 text-[14px] leading-[1.47] text-[#7a7a7a]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * PROJECT SHOT WITH SIGNATURE APPLE ELEVATION PRODUCT SHADOW
 * ============================================================ */

function ProjectShot({ project, onOpenLightbox }) {
  const images = project.images || [
    { src: project.image, fallback: project.fallbackImage, label: project.title },
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const activeImage = images[currentIdx] || images[0];
  const [imgSrc, setImgSrc] = useState(activeImage.src);

  useEffect(() => {
    setImgSrc(images[currentIdx]?.src || images[0].src);
  }, [currentIdx, images]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <figure className="relative w-full">
      {/* Signature Apple product shadow from DESIGN.md: box-shadow: 3px 5px 30px 0px rgba(0, 0, 0, 0.22); border-radius: 12px */}
      <div className="apple-product-shadow rounded-[12px] overflow-hidden bg-black/40 transition-transform duration-300 hover:scale-[1.01]">
        {/* Multi-image switcher tabs if > 1 */}
        {images.length > 1 && (
          <div className="flex bg-black/60 p-2 gap-2 overflow-x-auto border-b border-white/10">
            {images.map((img, idx) => (
              <button
                key={img.label}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx(idx);
                }}
                className={`rounded-full py-1 px-3 text-[11px] font-medium transition-all ${
                  currentIdx === idx
                    ? "bg-[#0066cc] text-white shadow-sm"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}

        {/* Screenshot viewport with zoom overlay */}
        <div
          onClick={() => onOpenLightbox(images, currentIdx, project.title)}
          className={`relative overflow-hidden cursor-pointer ${project.frameClass}`}
        >
          <img
            src={imgSrc}
            alt={`${project.title} - ${activeImage.label || project.subtitle}`}
            loading="lazy"
            decoding="async"
            onError={() => {
              if (activeImage.fallback && imgSrc !== activeImage.fallback) {
                setImgSrc(activeImage.fallback);
              }
            }}
            className={`h-full w-full ${project.imgClass} transition-opacity duration-300`}
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/70 text-white hover:bg-black/90 backdrop-blur transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/70 text-white hover:bg-black/90 backdrop-blur transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          <div className="absolute inset-0 bg-black/0 hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 hover:opacity-100 pointer-events-none">
            <span className="rounded-full bg-black/80 px-4 py-1.5 text-[12px] font-medium text-white backdrop-blur flex items-center gap-1.5 shadow-lg">
              <Maximize2 className="h-3.5 w-3.5 text-[#2997ff]" /> Click to zoom
            </span>
          </div>
        </div>
      </div>

      {/* Monospace figure caption */}
      <figcaption className="mt-3 flex items-center justify-between font-mono text-[12px] text-[#7a7a7a] tracking-wide">
        <span className="truncate">
          <span className="font-semibold text-current">FIG {project.index}.</span> {project.title} &middot; {activeImage.label}
        </span>
        {images.length > 1 && (
          <span className="ml-2 shrink-0 font-medium">
            [{currentIdx + 1}/{images.length}]
          </span>
        )}
      </figcaption>
    </figure>
  );
}

function PipelineSchematic({ steps, isDark }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]" aria-label="Pipeline Architecture">
      {steps.map((s, idx) => (
        <span key={s} className="inline-flex items-center gap-1.5">
          <span
            className={`rounded-md px-2.5 py-1 font-mono text-[11.5px] font-medium ${
              isDark
                ? "bg-white/10 text-white/90 border border-white/10"
                : "bg-white text-[#1d1d1f] shadow-sm border border-black/[0.06]"
            }`}
          >
            {s}
          </span>
          {idx < steps.length - 1 && (
            <span className={`font-mono select-none text-[10.5px] ${isDark ? "text-white/40" : "text-black/35"}`}>
              ──►
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

/* ============================================================
 * FEATURED PROJECTS (Alternating Full-Bleed Tiles)
 * ============================================================ */

function ProjectTile({ project, onOpenLightbox }) {
  const isDark = project.theme === "dark";

  return (
    <article
      id={`project-${project.id}`}
      className={`${project.bg} ${project.textMain} py-24 sm:py-32 transition-colors`}
    >
      <div className="mx-auto grid max-w-[1020px] items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: 5 Cols for Specs & Engineering Details */}
        <div className="reveal lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Clean Monospace Project Label */}
            <p className={`font-mono text-[12px] uppercase tracking-wider font-semibold ${project.accentBlue}`}>
              {project.index} / {String(PROJECTS.length).padStart(2, "0")} &middot; {project.tag}
            </p>

            <h3 className="mt-3 text-[30px] font-semibold leading-[1.10] tracking-[-0.02em] sm:text-[38px]">
              {project.title}
            </h3>
            <p className={`mt-1.5 text-[16px] font-medium leading-[1.3] ${project.textMuted}`}>
              {project.subtitle}
            </p>

            <p className={`mt-4 text-[15px] font-normal leading-[1.55] tracking-[-0.2px] ${project.textMuted}`}>
              {project.description}
            </p>

            {/* Pipeline Architecture: Connected Technical Schematic */}
            <div className="mt-6">
              <p className={`font-mono mb-2 text-[10.5px] uppercase tracking-[0.16em] font-semibold ${project.textMuted}`}>
                Pipeline Architecture
              </p>
              <PipelineSchematic steps={project.pipeline} isDark={isDark} />
            </div>

            {/* Minimalist Horizontal Specification Bar */}
            <div className={`my-6 border-y ${project.dividerColor} py-3.5`}>
              <dl className={`grid grid-cols-3 divide-x ${project.dividerColor}`}>
                {project.metrics.map((m) => (
                  <div key={m.l} className="px-3 first:pl-0 last:pr-0">
                    <dd className="font-mono text-[20px] font-semibold tracking-tight">
                      {m.v}
                    </dd>
                    <dt className={`font-mono text-[10.5px] uppercase tracking-wider mt-0.5 ${project.textMuted}`}>
                      {m.l}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Borderless Monospace Tech Stack Metadata Row */}
            <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] ${project.textMuted}`}>
              <span className={`font-semibold ${isDark ? "text-white" : "text-[#1d1d1f]"}`}>Stack:</span>
              {project.tags.map((t, idx) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span className={isDark ? "hover:text-white" : "hover:text-[#1d1d1f]"}>{t}</span>
                  {idx < project.tags.length - 1 && <span className="opacity-40">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs: Action Blue Pill Button + GitHub Link */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              id={`project-${project.id}-repo`}
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#0066cc] hover:bg-[#0071e3] text-white px-[22px] py-[11px] text-[14px] font-medium transition-all active:scale-95 shadow-sm inline-flex items-center gap-2"
            >
              <GithubIcon className="h-4 w-4" />
              <span>{project.repoLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Right Column: 7 Cols for Visual with Signature Apple Product Shadow */}
        <div className="reveal lg:col-span-7">
          <ProjectShot project={project} onOpenLightbox={onOpenLightbox} />
        </div>
      </div>
    </article>
  );
}

function Projects({ onOpenLightbox }) {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      {/* Intro strip */}
      <div className="bg-[#1d1d1f] text-white pt-24 pb-8">
        <div className="mx-auto max-w-[1020px] px-5 sm:px-6">
          <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono mb-2 text-[12px] uppercase tracking-[0.18em] text-[#2997ff] font-semibold">
                02 / FEATURED PROJECTS
              </p>
              <h2 id="projects-heading" className="text-[32px] font-semibold leading-[1.07] tracking-[-0.02em] sm:text-[40px] text-white">
                Systems that run where the data lives
              </h2>
            </div>
            <div className="font-mono flex flex-wrap gap-2 text-[11.5px] text-[#cccccc]">
              {["100% on-device inference", "sub-ms ONNX on CPU", "autonomous pipelines"].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2997ff]" /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alternating Tiles: Project 01 (Dark #1d1d1f), Project 02 (Parchment #f5f5f7), Project 03 (Dark #272729) */}
      {PROJECTS.map((p) => (
        <ProjectTile key={p.id} project={p} onOpenLightbox={onOpenLightbox} />
      ))}
    </section>
  );
}

/* ============================================================
 * TECH STACK (Apple Parchment Canvas with White Utility Cards)
 * ============================================================ */

function SkillPill({ name, detail, target }) {
  return (
    <button
      type="button"
      onClick={() => target && scrollToSection(target)}
      title={target ? `Jump to project implementing ${name}` : undefined}
      className="group inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3.5 py-1.5 text-[13px] text-[#1d1d1f] transition-all duration-150 hover:bg-[#0066cc] hover:text-white active:scale-95 text-left border border-black/[0.04]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#0066cc] transition-colors group-hover:bg-white shrink-0" />
      <span className="font-medium">{name}</span>
      {detail && <span className="font-mono text-[11px] text-[#7a7a7a] group-hover:text-white/80">{detail}</span>}
      {target && <ArrowUpRight className="h-3 w-3 text-[#7a7a7a] opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity" />}
    </button>
  );
}

function Stack() {
  return (
    <section id="stack" className="bg-[#f5f5f7] text-[#1d1d1f] py-24 sm:py-32">
      <div className="mx-auto max-w-[1020px] px-5 sm:px-6">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono mb-2 text-[12px] uppercase tracking-[0.18em] text-[#0066cc] font-semibold">
              03 / TECH STACK & SKILLS
            </p>
            <h2 className="text-[32px] font-semibold leading-[1.10] tracking-[-0.02em] sm:text-[40px] text-[#1d1d1f]">
              From signal to <span className="text-[#0066cc]">shipped</span>
            </h2>
          </div>
          <p className="max-w-[440px] text-[15px] leading-[1.5] text-[#7a7a7a]">
            Click any skill or use the project jump links to inspect where each technology is implemented in real code.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ id, icon: Icon, path, title, items, projectLinks }) => (
            <article
              key={id}
              id={`stack-${id}`}
              className="reveal flex flex-col justify-between rounded-[18px] bg-white p-7 shadow-sm apple-card-ring border border-black/[0.04] transition-all hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5f5f7] text-[#0066cc]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11.5px] text-[#7a7a7a] font-medium">{items.length} tools</span>
                </div>
                <p className="font-mono mt-4 text-[11.5px] text-[#0066cc] font-medium">{path}</p>
                <h3 className="mt-1 text-[19px] font-semibold tracking-tight text-[#1d1d1f]">{title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li key={it.name}>
                      <SkillPill {...it} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Project Jump Links */}
              <div className="mt-8 pt-5 border-t border-[#f0f0f0]">
                <p className="font-mono text-[10.5px] uppercase tracking-wider text-[#7a7a7a] mb-2 font-semibold">
                  Direct Project Links:
                </p>
                <div className="flex flex-col gap-1.5">
                  {projectLinks.map((pl) => (
                    <button
                      key={pl.id}
                      type="button"
                      onClick={() => scrollToSection(pl.id)}
                      className="inline-flex items-center justify-between w-full rounded-lg bg-[#f5f5f7] hover:bg-[#0066cc] hover:text-white px-3.5 py-2 text-[13px] font-medium text-[#1d1d1f] transition-all group/btn"
                    >
                      <span className="truncate">{pl.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * CONTACT & CHANNELS (Pure White Canvas)
 * ============================================================ */

function Contact({ onEmailClick, onCopyEmail }) {
  return (
    <section id="contact" className="bg-white text-[#1d1d1f] py-24 sm:py-36">
      <div className="mx-auto max-w-[1020px] px-5 text-center sm:px-6">
        <div className="reveal">
          <p className="font-mono mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0066cc] font-semibold">
            04 / GET IN TOUCH
          </p>
          <h2 className="mx-auto max-w-[800px] text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[50px] text-[#1d1d1f]">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-[#0066cc] to-[#2997ff] bg-clip-text text-transparent">
              low-latency
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[17px] leading-[1.47] text-[#7a7a7a]">
            Open to AI/ML Engineering and Software Engineering internships. Direct channels below:
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              id="contact-cta-email"
              type="button"
              onClick={onEmailClick}
              className="rounded-full bg-[#0066cc] px-7 py-3 text-[15px] font-medium text-white transition-all hover:bg-[#0071e3] active:scale-95 shadow-md inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" /> Email Me (Direct)
            </button>
            <button
              id="contact-copy-email"
              type="button"
              onClick={onCopyEmail}
              className="rounded-full border border-[#d2d2d7] bg-[#f5f5f7] hover:bg-white px-6 py-3 text-[14px] font-medium text-[#1d1d1f] transition-all active:scale-95 inline-flex items-center gap-2 font-mono"
            >
              <Copy className="h-3.5 w-3.5 text-[#7a7a7a]" /> Copy: {PROFILE.email}
            </button>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[850px] gap-4 text-left sm:grid-cols-3">
          <button
            type="button"
            onClick={onEmailClick}
            className="reveal group flex items-center gap-4 rounded-[18px] bg-[#f5f5f7] p-5 transition-all hover:bg-white apple-card-ring border border-black/[0.04] text-left"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0066cc] shadow-sm transition-colors group-hover:bg-[#0066cc] group-hover:text-white">
              <Mail className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold text-[#1d1d1f]">Email</span>
              <span className="font-mono block truncate text-[12px] text-[#7a7a7a]">{PROFILE.email}</span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#7a7a7a] group-hover:text-[#0066cc]" />
          </button>

          <a
            id="contact-github"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex items-center gap-4 rounded-[18px] bg-[#f5f5f7] p-5 transition-all hover:bg-white apple-card-ring border border-black/[0.04]"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0066cc] shadow-sm transition-colors group-hover:bg-[#0066cc] group-hover:text-white">
              <GithubIcon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold text-[#1d1d1f]">GitHub</span>
              <span className="font-mono block truncate text-[12px] text-[#7a7a7a]">{PROFILE.githubLabel}</span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#7a7a7a] group-hover:text-[#0066cc]" />
          </a>

          <a
            id="contact-linkedin"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex items-center gap-4 rounded-[18px] bg-[#f5f5f7] p-5 transition-all hover:bg-white apple-card-ring border border-black/[0.04]"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0066cc] shadow-sm transition-colors group-hover:bg-[#0066cc] group-hover:text-white">
              <LinkedinIcon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold text-[#1d1d1f]">LinkedIn</span>
              <span className="font-mono block truncate text-[12px] text-[#7a7a7a]">{PROFILE.linkedinLabel}</span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#7a7a7a] group-hover:text-[#0066cc]" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * FOOTER (Apple Parchment #f5f5f7, dense-link leading 2.41)
 * ============================================================ */

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f5f5f7] text-[#7a7a7a] border-t border-[#e0e0e0]">
      <div className="mx-auto max-w-[1020px] px-5 py-14 sm:px-6">
        <div className="grid gap-10 border-b border-[#e0e0e0] pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1d1d1f] tracking-tight">
              <span className="grid h-6 w-6 place-items-center rounded-sm bg-[#1d1d1f] text-[11px] font-bold text-white">
                GW
              </span>
              Gracias Kumara Winata
            </a>
            <p className="mt-3.5 max-w-[260px] text-[12.5px] leading-[1.6] text-[#7a7a7a]">
              Computer Science (AI) student at BINUS University building on-device deep learning, vision and speech pipelines.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-semibold text-[#1d1d1f]">Navigation</p>
            <ul className="mt-2 text-[13.5px] leading-[2.41]">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="transition-colors hover:text-[#0066cc]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold text-[#1d1d1f]">Featured Projects</p>
            <ul className="mt-2 text-[13.5px] leading-[2.41]">
              {PROJECTS.map((p) => (
                <li key={p.id}>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#0066cc]">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold text-[#1d1d1f]">Direct Channels</p>
            <ul className="mt-2 text-[13.5px] leading-[2.41]">
              <li>
                <button
                  type="button"
                  onClick={() => openEmail()}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#0066cc] text-left"
                >
                  <Mail className="h-3.5 w-3.5 text-[#0066cc]" /> {PROFILE.email}
                </button>
              </li>
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#0066cc]"
                >
                  <GithubIcon className="h-3.5 w-3.5" /> {PROFILE.githubLabel}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#0066cc]"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[12px] text-[#7a7a7a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Gracias Kumara Winata. Apple Pro Editorial Architecture.</p>
          <a
            id="footer-back-to-top"
            href="#top"
            className="font-mono inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#0066cc]"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
 * LIGHTBOX MODAL FOR SCREENSHOTS
 * ============================================================ */

function Lightbox({ images, initialIndex = 0, title, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const imgList = Array.isArray(images)
    ? images
    : [{ src: images, label: title }];

  const current = imgList[index] || imgList[0];

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i > 0 ? i - 1 : imgList.length - 1));
      if (e.key === "ArrowRight") setIndex((i) => (i < imgList.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imgList.length, onClose]);

  if (!imgList || imgList.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[94vh] max-w-[94vw] overflow-hidden rounded-[18px] bg-[#1d1d1f] p-4 shadow-2xl flex flex-col border border-white/10"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3 px-2 text-white">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-[15px] font-semibold tracking-tight truncate">{title}</span>
            {imgList.length > 1 && (
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-mono text-white/80 shrink-0">
                {current.label || `Part ${index + 1}`} ({index + 1}/{imgList.length})
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 shrink-0 ml-3 transition-colors"
            aria-label="Close image"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative max-h-[78vh] overflow-auto p-2 flex items-center justify-center">
          <img
            src={current.src}
            alt={current.label || title}
            className="rounded-[12px] object-contain max-h-[74vh] mx-auto apple-product-shadow"
          />

          {imgList.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex((i) => (i > 0 ? i - 1 : imgList.length - 1));
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/75 text-white hover:bg-black/90 border border-white/20 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex((i) => (i < imgList.length - 1 ? i + 1 : 0));
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/75 text-white hover:bg-black/90 border border-white/20 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {imgList.length > 1 && (
          <div className="flex justify-center gap-2 pt-3 border-t border-white/10 overflow-x-auto">
            {imgList.map((im, i) => (
              <button
                key={im.src || i}
                type="button"
                onClick={() => setIndex(i)}
                className={`rounded-full px-3.5 py-1 text-[12px] font-medium transition-colors whitespace-nowrap ${
                  index === i
                    ? "bg-[#0066cc] text-white shadow-sm"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {im.label || `Part ${i + 1}`}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
 * TOAST NOTIFICATION
 * ============================================================ */

function Toast({ message, onClose }) {
  if (!message) return null;
  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#1d1d1f] px-5 py-3 text-[13.5px] font-medium text-white shadow-2xl border border-white/15 animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
      <span>{message}</span>
      <button type="button" onClick={onClose} className="ml-2 text-white/60 hover:text-white">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ============================================================
 * MAIN PORTFOLIO COMPONENT
 * ============================================================ */

export default function Portfolio() {
  useRevealFallback();
  const [lightbox, setLightbox] = useState({ open: false, images: [], initialIndex: 0, title: "" });
  const [toastMessage, setToastMessage] = useState("");
  const toastTimer = useRef();

  const showToast = (msg) => {
    setToastMessage(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMessage(""), 4000);
  };

  const handleEmailAction = () => {
    openEmail(showToast);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      showToast(`Copied ${PROFILE.email} to clipboard`);
    } catch {
      handleEmailAction();
    }
  };

  return (
    <div className="gw-root min-h-screen bg-white text-[#1d1d1f]">
      <style>{STYLES}</style>

      <a
        href="#about"
        className="sr-only z-[60] rounded-full bg-[#0066cc] px-4 py-2 text-white font-medium focus:not-sr-only focus:fixed focus:left-4 focus:top-14"
      >
        Skip to main content
      </a>

      <Nav onEmailClick={handleEmailAction} />
      <main>
        <Hero onEmailClick={handleEmailAction} />
        <About onEmailClick={handleEmailAction} />
        <Projects
          onOpenLightbox={(images, initialIndex, title) =>
            setLightbox({ open: true, images, initialIndex, title })
          }
        />
        <Stack />
        <Contact onEmailClick={handleEmailAction} onCopyEmail={handleCopyEmail} />
      </main>
      <Footer />

      {lightbox.open && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.initialIndex}
          title={lightbox.title}
          onClose={() => setLightbox({ open: false, images: [], initialIndex: 0, title: "" })}
        />
      )}

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </div>
  );
}
