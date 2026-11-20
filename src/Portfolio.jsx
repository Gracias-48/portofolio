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
  Pause,
  Play,
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
  photo: "/projects/Photo-cutout.png",
  role: "Computer Science (AI) Student @ BINUS University",
  focus: ["Multi-Agent & LLM Systems", "Cloud & Serverless Backends", "Deep Learning (CV & ASR)"],
  subheadline: "Building Multi-Agent Systems, Cloud Backends & Real-Time ML Pipelines",
  status:
    "Currently seeking AI/ML Engineering or Software Engineering Internship opportunities where I can contribute to impactful, end-to-end engineering challenges.",
};

const ABOUT_PARAGRAPHS = [
  "I am an undergraduate Computer Science student at BINUS University specializing in Artificial Intelligence, passionate about bridging the gap between machine learning research and scalable, low-latency production software.",
  "My technical work spans end-to-end AI and software engineering: orchestrating multi-agent LLM workflows and cloud-native serverless backends, alongside real-time spatio-temporal computer vision and streaming speech recognition systems.",
  "Rather than relying solely on high-level black-box wrappers, I enjoy engineering core architectures from the ground up: whether orchestrating 7-node LangGraph state machines over Cloudflare Workers and GitHub Actions, streaming FastAPI + WebSocket inference services, or optimizing sub-millisecond ONNX and Whisper pipelines.",
];

const PRINCIPLES = [
  {
    icon: Cpu,
    title: "Full-stack AI systems",
    body: "From cloud-native LangGraph agents and FastAPI services to low-latency browser and CPU inference.",
  },
  {
    icon: Wrench,
    title: "Ground-up pipelines",
    body: "State graphs, feature extractors, ring buffers, and validation gates: built, tested, and understood.",
  },
  {
    icon: Server,
    title: "Cloud & serverless scale",
    body: "Event-driven Cloudflare Workers, scheduled crons, and resilient APIs engineered for production reliability.",
  },
  {
    icon: Activity,
    title: "Measured, not guessed",
    body: "Latency, throughput, RTF, and unit-tested schemas tracked as first-class engineering outputs.",
  },
];

const HERO_STATS = [
  { k: "AGENT GRAPH", v: "7-node", sub: "LangGraph" },
  { k: "SENTRY CRON", v: "15 min", sub: "Cloud / Actions" },
  { k: "ASR STREAM", v: "~800 ms", sub: "FastAPI / WebGPU" },
  { k: "CV INFERENCE", v: "0.31 ms", sub: "99.4% TCN ONNX" },
];

const TELEMETRY_PROJECTS = [
  {
    id: "gesture-hud",
    badge: "Computer Vision",
    title: "Touchless Gesture HUD",
    model: "Dilated TCN / BiLSTM / ST-GCN",
    runtime: "ONNX Runtime (CPU)",
    latency: "0.31 ms",
    fps: "30 FPS",
    keypoints: "9-class HaGRID",
    highlight: "AirTouch Studio 30 FPS Virtual Mouse trained on 24,849 HaGRID v2 sequences",
  },
  {
    id: "transcribenote",
    badge: "Speech Recognition",
    title: "TranscribeNote",
    model: "Whisper (Transformers.js v4)",
    runtime: "FastAPI WS + WebGPU/WASM",
    latency: "800 ms partials",
    fps: "0.37x RTF",
    keypoints: "ID / EN · Tab Audio",
    highlight: "Live Studio ASR with tab/mic capture, ID/EN switching, IndexedDB replay & WER/CER eval",
  },
  {
    id: "stock-intel",
    badge: "Multi-Agent System",
    title: "IDX Stock Intelligence",
    model: "LangGraph 7-Node StateGraph",
    runtime: "Cloudflare Workers + Actions",
    latency: "15 min cron",
    fps: "22 unit tests",
    keypoints: "Bull vs Bear",
    highlight: "Triple-Engine cloud serverless pipeline with real-time Telegram delivery",
  },
];

const SKILL_GROUPS = [
  {
    id: "ai",
    icon: BrainCircuit,
    path: "~/stack/ai-dl-signal",
    title: "AI, Deep Learning & Signal Processing",
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
    items: [
      { name: "GitHub Actions", detail: "CI/CD & Serverless Crons", target: "project-stock-intel" },
      { name: "Pytest", target: "project-gesture-hud" },
      { name: "Vitest", target: "project-transcribenote" },
      { name: "Vercel", target: "project-transcribenote" },
      { name: "Git", target: "project-stock-intel" },
      { name: "ESP32 / Arduino", detail: "I2S, MQTT" },
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
    tag: "REAL-TIME SPEECH ASR & FULL-STACK STREAMING",
    title: "TranscribeNote",
    subtitle: "Live Studio Lecture Transcriber, Tab Audio Capture & Study Workbench",
    description:
      "A full-stack bilingual (ID/EN) real-time transcription and study workbench supporting microphone, browser tab/system audio, and dual-channel mixed capture. Audio at 16 kHz is conditioned via Web Audio DSP, segmented by Silero VAD, and pseudo-streamed over WebSockets to a FastAPI + Faster-Whisper backend (with a custom NumPy 80-channel Slaney Log-Mel front-end) or a Transformers.js v4 WebGPU/WASM worker. Features IndexedDB audio replay, 4 deterministic study templates (Executive, Cornell, Definitions, Exam Quiz), Markdown/SRT/PDF export, and a NIST-weighted WER/CER evaluation suite.",
    pipeline: ["Mic / Tab 16 kHz", "Silero VAD", "FastAPI / WebGPU", "Whisper (ID/EN)", "IndexedDB Replay", "Study Notes & Export"],
    metrics: [
      { v: "0.37x", l: "real-time factor (RTF)" },
      { v: "~800 ms", l: "partial decode ticks" },
      { v: "ID / EN", l: "live mic & tab capture" },
    ],
    tags: ["React 19", "TypeScript", "Zustand", "FastAPI", "WebSockets", "Faster-Whisper", "Transformers.js v4", "IndexedDB", "Vitest", "Vercel"],
    repo: "https://github.com/Gracias-48/Real-Time-Audio-Transcription",
    repoLabel: "gracias-48/real-time-audio-transcription",
    image: "/projects/transcribenote.png",
    images: [
      {
        src: "/projects/transcribenote.png",
        fallback: "/projects/transcribenote.png",
        label: "Live Studio · Tab Audio Capture",
        caption: "Live Studio capturing browser tab audio in real time (0.37x RTF) with ID/EN switching, Key Notes & Study Outline",
      },
    ],
    frameClass: "aspect-[2556/1350]",
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
    subtitle: "AirTouch Studio — Continuous 30 FPS Virtual Mouse & HCI Workstation",
    description:
      "Touchless desktop and cursor control from a standard webcam. MediaPipe captures 21 hand landmarks at 30 FPS into a 16-frame (~0.53 s) sliding ring buffer; 131-dim dual-stream features and 10-channel graph tensors feed hot-swappable TCN (99.44%, 0.31 ms), BiLSTM-Attention (99.50%, 1.44 ms), and ST-GCN (99.08%, 2.94 ms) models trained on 24,849 user-disjoint HaGRID v2 sequences and exported to ONNX Runtime for CPU execution. Multi-stage confidence/consistency gating and edge-triggered latching drive PyAutoGUI Virtual Mouse actions across the AirTouch Studio HUD and standalone floating controller.",
    pipeline: ["Webcam 30 FPS", "MediaPipe 21 kp", "Ring Buffer T=16", "ONNX (TCN 0.31ms)", "Consistency Gate", "Virtual Mouse OS"],
    metrics: [
      { v: "0.31 ms", l: "TCN CPU latency" },
      { v: "99.5%", l: "HaGRID v2 accuracy" },
      { v: "9-class", l: "30 FPS virtual mouse" },
    ],
    tags: ["PyTorch", "ONNX Runtime", "MediaPipe", "OpenCV", "Streamlit", "PyAutoGUI", "Pytest"],
    repo: "https://github.com/Gracias-48/Gesture-Control",
    repoLabel: "gracias-48/gesture-control",
    image: "/projects/gesture-hud.png",
    images: [
      {
        src: "/projects/gesture-hud.png",
        fallback: "/projects/gesture-hud.png",
        label: "HUD & Live Telemetry",
        caption: "Real-time 21 hand landmarks tracking, multi-architecture ONNX inference, and Virtual Mouse gating",
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
    tag: "CLOUD, SERVERLESS & MULTI-AGENT SYSTEMS",
    title: "IDX Stock Intelligence",
    subtitle: "Triple-Engine Multi-Agent Market Analysis System",
    description:
      "A cloud-native, event-driven market intelligence backend for the Indonesia Stock Exchange. Scheduled GitHub Actions workflows run a morning macro radar and a 15-minute price sentry, while a serverless Cloudflare Worker webhook dispatches an asynchronous 7-node LangGraph pipeline: four parallel domain analysts, a Bull vs Bear researcher debate, a Pydantic-validated trade execution plan, and a 5-tier portfolio manager verdict delivered via the Telegram Bot API.",
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

const NAV_IDS = NAV_LINKS.map((l) => l.id);

// Floating glass chips orbiting the hero portrait (pointer-parallax depth via --d)
const HERO_CHIPS = [
  { icon: BrainCircuit, label: "LangGraph", value: "7-node agents", pos: "-left-10 top-[22%]", d: "22px", delay: "650ms" },
  { icon: Cpu, label: "ONNX Runtime", value: "0.31 ms on CPU", pos: "-right-6 top-[4%]", d: "-18px", delay: "800ms" },
  { icon: Mic, label: "Whisper ASR", value: "0.37x real-time", pos: "-right-10 bottom-[24%]", d: "30px", delay: "950ms" },
];

const TECH_MARQUEE = [
  "PyTorch",
  "ONNX Runtime",
  "LangGraph",
  "FastAPI",
  "Cloudflare Workers",
  "GitHub Actions",
  "React 19",
  "TypeScript",
  "MediaPipe",
  "Faster-Whisper",
  "Transformers.js",
  "WebGPU",
  "Pydantic",
  "OpenCV",
  "Streamlit",
  "Vercel",
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
.gw-root :where(a, button):focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 3px;
}
.gw-root :where(header, .bg-\\[\\#1d1d1f\\], .bg-\\[\\#272729\\]) :where(a, button):focus-visible {
  outline-color: #2997ff;
}

@keyframes gw-highlight-jump {
  0% { box-shadow: 0 0 0 0 rgba(0, 102, 204, 0.6); }
  50% { box-shadow: 0 0 0 10px rgba(0, 102, 204, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 102, 204, 0); }
}
.target-highlight {
  animation: gw-highlight-jump 1.4s cubic-bezier(0, 0, 0.2, 1) 2;
}

/* ------------------------------------------------------------
 * MOTION SYSTEM
 * Every spatial animation is opted in via prefers-reduced-motion:
 * no-preference; static final states are the default.
 * Scroll-driven effects are decorative progressive enhancement.
 * ------------------------------------------------------------ */
@keyframes gw-rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}
@keyframes gw-word {
  from { opacity: 0; transform: translateY(0.45em); filter: blur(10px); }
}
@keyframes gw-pop {
  from { opacity: 0; transform: translateY(12px) scale(0.86); }
}
@keyframes gw-draw {
  from { stroke-dashoffset: 1; }
}
@keyframes gw-marquee {
  to { transform: translateX(-50%); }
}
@keyframes gw-reveal {
  from { opacity: 0; transform: translateY(24px); }
}
@keyframes gw-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes gw-lift {
  to { transform: translateY(-56px); opacity: 0.2; }
}
@keyframes gw-sink {
  to { transform: translateY(64px) scale(0.96); }
}
@keyframes gw-shot-in {
  from { transform: perspective(1400px) rotateX(16deg) translateY(48px) scale(0.9); opacity: 0.25; }
}
@keyframes gw-node-in {
  from { opacity: 0; transform: translateX(-12px) scale(0.9); }
}
@keyframes gw-pill-in {
  from { opacity: 0; transform: translateY(8px) scale(0.85); }
}
@keyframes gw-drift {
  from { transform: translateY(90px); }
  to { transform: translateY(-90px); }
}
@keyframes gw-shimmer {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

/* Static defaults (final states) */
.gw-word { display: inline-block; }
.gw-draw-path { stroke-dasharray: 1; stroke-dashoffset: 0; }
.gw-progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  transform-origin: 0 50%;
  transform: scaleX(0);
  background: linear-gradient(90deg, #0066cc, #2997ff 60%, #5ac8fa);
  pointer-events: none;
}
.gw-shimmer {
  background-image: linear-gradient(90deg, #0066cc 0%, #2997ff 30%, #5ac8fa 50%, #2997ff 70%, #0066cc 100%);
  background-size: 220% 100%;
  background-position: 0% 0;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.gw-hero-grid {
  background-image: radial-gradient(rgba(0, 0, 0, 0.085) 1px, transparent 1px);
  background-size: 22px 22px;
  -webkit-mask-image: radial-gradient(ellipse 65% 55% at 72% 38%, #000 25%, transparent 75%);
  mask-image: radial-gradient(ellipse 65% 55% at 72% 38%, #000 25%, transparent 75%);
}
.gw-hero-spot {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  background: radial-gradient(560px circle at var(--mx, 70%) var(--my, 40%), rgba(0, 102, 204, 0.09), transparent 62%);
}
.gw-hero:hover .gw-hero-spot { opacity: 1; }
.gw-spot { position: relative; isolation: isolate; }
.gw-spot::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.35s ease;
  background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(0, 102, 204, 0.1), transparent 60%);
}
.gw-spot-dark::before {
  background: radial-gradient(460px circle at var(--mx, 50%) var(--my, 50%), rgba(41, 151, 255, 0.22), transparent 60%);
}
.gw-spot:hover::before { opacity: 1; }
@media (hover: none) {
  .gw-hero-spot, .gw-spot::before { display: none; }
}
.gw-watermark {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--wm, rgba(0, 0, 0, 0.07));
}
.gw-marquee-mask {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.gw-pipe .gw-arrow { transition: color 0.3s ease; }
.gw-pipe:hover .gw-arrow { color: #2997ff; }
[data-magnetic] {
  transition: translate 0.45s cubic-bezier(0.2, 0.7, 0.2, 1), scale 0.15s ease, background-color 0.2s ease,
    box-shadow 0.2s ease, color 0.2s ease;
}

@media (prefers-reduced-motion: no-preference) {
  .apple-pulse { animation: apple-pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  .gw-rise { animation: gw-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
  .gw-word {
    animation: gw-word 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both;
    animation-delay: calc(80ms + var(--i, 0) * 110ms);
  }
  .gw-pop { animation: gw-pop 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
  .gw-draw { animation: gw-draw 2.8s cubic-bezier(0.65, 0, 0.35, 1) both; }
  .gw-depth {
    translate: calc(var(--px, 0) * var(--d, 10px)) calc(var(--py, 0) * var(--d, 10px));
    transition: translate 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .gw-marquee-track { animation: gw-marquee 40s linear infinite; }
  .gw-marquee-mask:hover .gw-marquee-track,
  .gw-marquee-mask:focus-within .gw-marquee-track,
  .gw-marquee-track.is-paused { animation-play-state: paused; }

  @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
    .gw-progress {
      animation: gw-progress auto linear both;
      animation-timeline: scroll(root);
    }
    .gw-lift {
      animation: gw-lift auto linear both;
      animation-timeline: scroll(root);
      animation-range: 0px 85vh;
    }
    .gw-sink {
      animation: gw-sink auto linear both;
      animation-timeline: scroll(root);
      animation-range: 0px 100vh;
    }
  }

  @supports ((animation-timeline: view()) and (animation-range: entry)) {
    .reveal {
      animation: gw-reveal auto cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
      animation-timeline: view();
      animation-range: entry 0% entry 70%;
    }
    .reveal.gw-stagger {
      animation-range: entry calc(var(--i, 0) * 9%) entry calc(65% + var(--i, 0) * 9%);
    }
    .gw-shot {
      animation: gw-shot-in auto cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
      animation-timeline: view();
      animation-range: entry 0% cover 42%;
    }
    .gw-node {
      animation: gw-node-in auto cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
      animation-timeline: view();
      animation-range: cover calc(4% + var(--i, 0) * 4%) cover calc(20% + var(--i, 0) * 5%);
    }
    .gw-pill-in {
      animation: gw-pill-in auto cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
      animation-timeline: view();
      animation-range: cover calc(var(--i, 0) * 1.5%) cover calc(14% + var(--i, 0) * 1.5%);
    }
    .gw-watermark {
      animation: gw-drift auto linear both;
      animation-timeline: view();
      animation-range: cover;
    }
    .gw-shimmer {
      animation: gw-shimmer auto linear both;
      animation-timeline: view();
      animation-range: entry 0% cover 55%;
    }
  }
  @supports not ((animation-timeline: view()) and (animation-range: entry)) {
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.2, 0.7, 0.2, 1), transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
      transition-delay: calc(var(--i, 0) * 90ms);
    }
    .reveal.is-in {
      opacity: 1;
      transform: none;
    }
  }
}

/* Reduced motion: marquee becomes a static wrapped list (no pause control needed) */
@media (prefers-reduced-motion: reduce) {
  .gw-hero-spot,
  .gw-spot::before { transition: none !important; }
  .gw-marquee-track { width: auto; }
  .gw-marquee-track > ul { flex-wrap: wrap; row-gap: 10px; }
  .gw-marquee-track > ul[aria-hidden="true"],
  .gw-marquee-btn { display: none; }
  .gw-marquee-mask { -webkit-mask-image: none; mask-image: none; }
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

/**
 * Pointer-driven micro-interactions (fine pointers only):
 * - .gw-spot cards: cursor-following glow (opacity only, kept for reduced motion)
 * - [data-magnetic] buttons: gentle magnetic pull (disabled for reduced motion)
 */
function usePointerEffects() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches) return;

    const onMove = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const spot = target.closest(".gw-spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      if (reduce.matches) return;
      const mag = target.closest("[data-magnetic]");
      if (mag) {
        const r = mag.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * 0.3;
        const y = (e.clientY - (r.top + r.height / 2)) * 0.4;
        mag.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      }
    };
    const onOut = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const mag = target.closest("[data-magnetic]");
      if (mag && !(e.relatedTarget instanceof Node && mag.contains(e.relatedTarget))) {
        mag.style.translate = "";
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);
}

/** Highlights the nav link of the section currently crossing the viewport middle. */
function useScrollSpy(ids) {
  const [active, setActive] = useState("");
  const key = ids.join("|");
  useEffect(() => {
    const els = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
  return active;
}

/**
 * Counts the numeric part of a metric (e.g. "~800 ms", "0.31 ms", "99.5%") up from zero
 * the first time it scrolls into view. Screen readers always get the final value.
 */
function CountUp({ value, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = /^([^\d]*)(\d+(?:\.\d+)?)(.*)$/.exec(value);
    const el = ref.current;
    if (!match || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return undefined;
    }
    const [, pre, num, post] = match;
    const target = parseFloat(num);
    const decimals = (num.split(".")[1] || "").length;
    const format = (n) => `${pre}${n.toFixed(decimals)}${post}`;
    let raf = 0;
    let started = false;

    setDisplay(format(0));
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const duration = 1400;
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(p < 1 ? format(target * eased) : value);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
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
  const active = useScrollSpy(NAV_IDS);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[44px] border-b border-white/10 bg-black/80 backdrop-blur-[20px] backdrop-saturate-180 transition-colors">
      {/* Scroll progress hairline (CSS scroll-driven, decorative) */}
      <div aria-hidden="true" className="gw-progress" />
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
                aria-current={active === l.id ? "location" : undefined}
                className={`relative text-[12px] font-normal tracking-[-0.12px] transition-colors hover:text-white after:absolute after:inset-x-0 after:-bottom-1.5 after:h-[1.5px] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#2997ff] after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none ${
                  active === l.id ? "text-white after:scale-x-100" : "text-white/75"
                }`}
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
            End-to-End Systems
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
  const sectionRef = useRef(null);

  // Pointer position feeds the spotlight (--mx/--my) and depth parallax (--px/--py in -1..1)
  const handlePointerMove = (e) => {
    const el = sectionRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--px", ((x / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty("--py", ((y / r.height) * 2 - 1).toFixed(3));
  };
  const handlePointerLeave = () => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="gw-hero relative overflow-hidden bg-gradient-to-b from-[#f5f5f7]/60 via-white to-white text-[#1d1d1f] pt-[44px]"
    >
      {/* Dotted engineering grid + cursor spotlight */}
      <div aria-hidden="true" className="gw-hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="gw-hero-spot" />

      {/* Contour wave lines that draw themselves in on load */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-[105px] h-[220px] w-full opacity-60"
      >
        <path
          d="M-60 260 C 260 150, 560 310, 920 210 C 1180 140, 1340 60, 1500 90"
          stroke="#c7c7cc"
          strokeWidth="1.2"
          pathLength="1"
          className="gw-draw-path gw-draw"
          style={{ animationDelay: "250ms" }}
        />
        <path
          d="M-60 280 C 280 175, 580 325, 940 228 C 1200 158, 1350 82, 1500 112"
          stroke="#d9d9de"
          strokeWidth="1.2"
          pathLength="1"
          className="gw-draw-path gw-draw"
          style={{ animationDelay: "450ms" }}
        />
        <path
          d="M-60 300 C 300 200, 600 340, 960 246 C 1220 176, 1360 104, 1500 134"
          stroke="#2997ff"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          pathLength="1"
          className="gw-draw-path gw-draw"
          style={{ animationDelay: "650ms" }}
        />
      </svg>

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1060px] flex-col justify-between px-5 pb-12 pt-10 sm:px-6 lg:pt-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Left Copy Column */}
          <div className="gw-lift pb-4 lg:pb-14 pt-4">
            <p
              id="hero-status"
              className="gw-rise font-mono text-[12px] uppercase tracking-[0.18em] text-[#0066cc] font-semibold mb-4"
            >
              Open to AI/ML & Software Engineering Internships
            </p>

            {/* Apple Hero Display: 56px, 600 weight, 1.07 line-height, -0.02em tracking */}
            <h1
              className="text-[38px] font-semibold leading-[1.07] tracking-[-0.02em] sm:text-[48px] lg:text-[56px] text-[#1d1d1f]"
            >
              {PROFILE.name.split(" ").map((word, i, arr) => (
                <span key={word}>
                  <span className="gw-word" style={{ "--i": i }}>
                    {word}
                  </span>
                  {i < arr.length - 1 ? " " : ""}
                </span>
              ))}
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
                data-magnetic
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

          {/* Right Cutout Portrait Column: sinks on scroll, floats with the cursor */}
          <div className="gw-sink relative flex justify-center lg:justify-end self-end">
            <div
              aria-hidden="true"
              className="gw-depth pointer-events-none absolute bottom-0 left-[7.5%] right-[7.5%] h-[80%] rounded-full bg-gradient-to-tr from-[#0066cc]/[0.12] via-[#2997ff]/[0.06] to-transparent blur-3xl"
              style={{ "--d": "-26px" }}
            />
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
              <div className="gw-depth" style={{ "--d": "8px" }}>
                <img
                  src={PROFILE.photo}
                  alt="Gracias Kumara Winata"
                  width={1082}
                  height={1264}
                  fetchPriority="high"
                  decoding="async"
                  className="gw-rise block w-full aspect-[1082/1264] h-auto object-contain object-bottom select-none drop-shadow-[0_18px_38px_rgba(0,0,0,0.12)]"
                  style={{ animationDelay: "140ms" }}
                />
              </div>

              {HERO_CHIPS.map(({ icon: Icon, label, value, pos, d, delay }) => (
                <div
                  key={label}
                  aria-hidden="true"
                  className={`gw-depth absolute z-20 hidden sm:block ${pos}`}
                  style={{ "--d": d }}
                >
                  <div
                    className="gw-pop flex items-center gap-2.5 rounded-2xl bg-white/85 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.06] backdrop-blur-md"
                    style={{ animationDelay: delay }}
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#0066cc]/10 text-[#0066cc]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-tight">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#7a7a7a]">{label}</span>
                      <span className="block text-[13px] font-semibold text-[#1d1d1f]">{value}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry bar — sits flush below the portrait cutout */}
        <dl className="gw-rise relative z-20 grid grid-cols-2 border-t border-[#e5e5ea] bg-white/90 backdrop-blur-sm pt-7 md:grid-cols-4" style={{ animationDelay: "340ms" }}>
          {HERO_STATS.map((s, i) => (
            <div
              key={s.k}
              className={`py-3 pr-4 ${i % 2 === 1 ? "pl-4 md:pl-6" : ""} ${i > 0 ? "md:border-l md:border-[#f0f0f0]" : ""} ${
                i >= 2 ? "border-t border-[#f0f0f0] md:border-t-0" : ""
              } ${i === 2 ? "md:pl-6" : ""} ${i % 2 === 1 ? "border-l border-[#f0f0f0]" : ""}`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7a7a7a] font-medium">{s.k}</dt>
              <dd className="mt-1 text-[26px] font-semibold text-[#1d1d1f] tracking-tight sm:text-[30px]">
                <CountUp value={s.v} className="font-mono" />{" "}
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
              <span className="gw-shimmer">
                Low-latency systems out.
              </span>
            </h2>

            {/* Crisp White 18px rounded utility card */}
            <div className="gw-spot mt-8 flex items-start gap-4 rounded-[18px] bg-white p-6 shadow-sm apple-card-ring border border-black/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
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
        <div className="reveal gw-spot gw-spot-dark mt-14 overflow-hidden rounded-[18px] bg-[#1d1d1f] text-white p-7 sm:p-8 shadow-xl">
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
              data-magnetic
              type="button"
              onClick={onEmailClick}
              className="group shrink-0 rounded-full bg-[#0066cc] px-[22px] py-[11px] text-[15px] font-medium text-white hover:bg-[#0071e3] active:scale-95 shadow-md inline-flex items-center gap-1.5"
            >
              Let&apos;s Connect{" "}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 4 Core Philosophy Cards (Pure White, 18px radius, padding: 28px, Action Blue icons, zero harsh borders) */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map(({ icon: Icon, title, body }, idx) => (
            <div
              key={title}
              style={{ "--i": idx }}
              className="reveal gw-stagger gw-spot group rounded-[18px] bg-white p-[28px] shadow-sm apple-card-ring border border-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="h-6 w-6 text-[#0066cc] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
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
    <figure className="gw-shot relative w-full">
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

        {/* Screenshot viewport with keyboard-accessible zoom button */}
        <div className={`group relative overflow-hidden ${project.frameClass}`}>
          <button
            type="button"
            onClick={() => onOpenLightbox(images, currentIdx, project.title)}
            aria-label={`Zoom ${project.title} - ${activeImage.label || project.subtitle}`}
            className="block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2997ff]"
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
              className={`h-full w-full ${project.imgClass} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
            />

            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/25 group-hover:opacity-100 group-focus-within:bg-black/25 group-focus-within:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/80 px-4 py-1.5 text-[12px] font-medium text-white shadow-lg backdrop-blur transition-transform duration-200 scale-95 group-hover:scale-100 group-focus-within:scale-100">
                <Maximize2 className="h-3.5 w-3.5 text-[#2997ff]" /> Click to zoom
              </span>
            </span>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/70 text-white hover:bg-black/90 active:scale-95 backdrop-blur transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/70 text-white hover:bg-black/90 active:scale-95 backdrop-blur transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
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
    <div className="gw-pipe flex flex-wrap items-center gap-1.5 font-mono text-[11px]" aria-label="Pipeline Architecture">
      {steps.map((s, idx) => (
        <span key={s} style={{ "--i": idx }} className="gw-node inline-flex items-center gap-1.5">
          <span
            className={`rounded-md px-2.5 py-1 font-mono text-[11.5px] font-medium transition-colors duration-200 ${
              isDark
                ? "bg-white/10 text-white/90 border border-white/10 hover:border-[#2997ff]/60 hover:bg-white/15"
                : "bg-white text-[#1d1d1f] shadow-sm border border-black/[0.06] hover:border-[#0066cc]/40"
            }`}
          >
            {s}
          </span>
          {idx < steps.length - 1 && (
            <span className={`gw-arrow font-mono select-none text-[10.5px] ${isDark ? "text-white/40" : "text-black/35"}`}>
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
      className={`relative overflow-clip ${project.bg} ${project.textMain} py-24 sm:py-32 transition-colors`}
    >
      {/* Parallax architectural index watermark (overflow-clip preserves root view() timeline) */}
      <span
        aria-hidden="true"
        className="gw-watermark pointer-events-none select-none absolute right-8 top-8 hidden font-mono text-[190px] font-bold leading-none lg:block"
        style={{ "--wm": isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.055)" }}
      >
        {project.index}
      </span>

      <div className="relative z-10 mx-auto grid max-w-[1020px] items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14">
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
                      <CountUp value={m.v} />
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
              data-magnetic
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="group rounded-full bg-[#0066cc] hover:bg-[#0071e3] text-white px-[22px] py-[11px] text-[14px] font-medium active:scale-95 shadow-sm inline-flex items-center gap-2"
            >
              <GithubIcon className="h-4 w-4" />
              <span>{project.repoLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column: 7 Cols for Visual with Signature Apple Product Shadow */}
        <div className="lg:col-span-7">
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
                End-to-end systems built for production
              </h2>
            </div>
            <div className="font-mono flex flex-wrap gap-2 text-[11.5px] text-[#cccccc]">
              {["cloud & serverless orchestration", "multi-agent LLM workflows", "low-latency ML inference"].map((label) => (
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
  if (!target) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3.5 py-1.5 text-[13px] text-[#1d1d1f] border border-black/[0.04] cursor-default select-none">
        <span className="h-1.5 w-1.5 rounded-full bg-[#7a7a7a] shrink-0" />
        <span className="font-medium">{name}</span>
        {detail && <span className="font-mono text-[11px] text-[#7a7a7a]">{detail}</span>}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => scrollToSection(target)}
      title={`Jump to project implementing ${name}`}
      className="group inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3.5 py-1.5 text-[13px] text-[#1d1d1f] transition-all duration-150 hover:bg-[#0066cc] hover:text-white active:scale-95 text-left border border-black/[0.04]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#0066cc] transition-colors group-hover:bg-white shrink-0" />
      <span className="font-medium">{name}</span>
      {detail && <span className="font-mono text-[11px] text-[#7a7a7a] group-hover:text-white/80">{detail}</span>}
      <ArrowUpRight className="h-3 w-3 text-[#7a7a7a] opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity" />
    </button>
  );
}

function TechMarquee() {
  const [paused, setPaused] = useState(false);

  const renderTrack = (hidden = false) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-6 pr-6 font-mono text-[12px] uppercase tracking-[0.14em] text-[#55555a]"
    >
      {TECH_MARQUEE.map((tech) => (
        <li key={tech} className="inline-flex items-center gap-6 whitespace-nowrap">
          <span>{tech}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#0066cc]/45" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mt-10 flex items-center gap-3">
      <div className="gw-marquee-mask relative flex-1 overflow-hidden py-2">
        <div className={`gw-marquee-track flex w-max ${paused ? "is-paused" : ""}`}>
          {renderTrack(false)}
          {renderTrack(true)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play technology marquee" : "Pause technology marquee"}
        title={paused ? "Play ticker" : "Pause ticker"}
        className="gw-marquee-btn grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#1d1d1f] shadow-sm apple-card-ring border border-black/[0.06] transition-all hover:text-[#0066cc] active:scale-95"
      >
        {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
      </button>
    </div>
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
              From signal to <span className="gw-shimmer">shipped</span>
            </h2>
          </div>
          <p className="max-w-[440px] text-[15px] leading-[1.5] text-[#7a7a7a]">
            Click any skill to directly scroll and inspect where each technology is implemented in real code.
          </p>
        </div>

        <TechMarquee />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ id, icon: Icon, path, title, items }, groupIdx) => (
            <article
              key={id}
              id={`stack-${id}`}
              style={{ "--i": groupIdx }}
              className="reveal gw-stagger gw-spot group flex flex-col justify-between rounded-[18px] bg-white p-7 shadow-sm apple-card-ring border border-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5f5f7] text-[#0066cc] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11.5px] text-[#7a7a7a] font-medium">{items.length} tools</span>
                </div>
                <p className="font-mono mt-4 text-[11.5px] text-[#0066cc] font-medium">{path}</p>
                <h3 className="mt-1 text-[19px] font-semibold tracking-tight text-[#1d1d1f]">{title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((it, pillIdx) => (
                    <li key={it.name} style={{ "--i": pillIdx }} className="gw-pill-in">
                      <SkillPill {...it} />
                    </li>
                  ))}
                </ul>
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
            <span className="gw-shimmer">
              low-latency
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[17px] leading-[1.47] text-[#7a7a7a]">
            Open to AI/ML Engineering and Software Engineering internships. Direct channels below:
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              id="contact-cta-email"
              data-magnetic
              type="button"
              onClick={onEmailClick}
              className="rounded-full bg-[#0066cc] px-7 py-3 text-[15px] font-medium text-white hover:bg-[#0071e3] active:scale-95 shadow-md inline-flex items-center gap-2"
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
            style={{ "--i": 0 }}
            className="reveal gw-stagger gw-spot group flex items-center gap-4 rounded-[18px] bg-[#f5f5f7] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md apple-card-ring border border-black/[0.04] text-left"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0066cc] shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-[#0066cc] group-hover:text-white">
              <Mail className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold text-[#1d1d1f]">Email</span>
              <span className="font-mono block truncate text-[12px] text-[#7a7a7a]">{PROFILE.email}</span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#7a7a7a] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0066cc]" />
          </button>

          <a
            id="contact-github"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            style={{ "--i": 1 }}
            className="reveal gw-stagger gw-spot group flex items-center gap-4 rounded-[18px] bg-[#f5f5f7] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md apple-card-ring border border-black/[0.04]"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0066cc] shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-[#0066cc] group-hover:text-white">
              <GithubIcon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold text-[#1d1d1f]">GitHub</span>
              <span className="font-mono block truncate text-[12px] text-[#7a7a7a]">{PROFILE.githubLabel}</span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#7a7a7a] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0066cc]" />
          </a>

          <a
            id="contact-linkedin"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ "--i": 2 }}
            className="reveal gw-stagger gw-spot group flex items-center gap-4 rounded-[18px] bg-[#f5f5f7] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md apple-card-ring border border-black/[0.04]"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0066cc] shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-[#0066cc] group-hover:text-white">
              <LinkedinIcon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold text-[#1d1d1f]">LinkedIn</span>
              <span className="font-mono block truncate text-[12px] text-[#7a7a7a]">{PROFILE.linkedinLabel}</span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#7a7a7a] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0066cc]" />
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
              Computer Science (AI) student at BINUS University building multi-agent LLM systems, cloud backends, and real-time deep learning pipelines.
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

        <div className="flex items-center justify-end pt-6">
          <a
            id="footer-back-to-top"
            href="#top"
            className="font-mono inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-medium text-[#7a7a7a] transition-colors hover:text-[#0066cc]"
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
        style={{ animationDuration: "320ms" }}
        className="gw-pop relative max-h-[94vh] max-w-[94vw] overflow-hidden rounded-[18px] bg-[#1d1d1f] p-4 shadow-2xl flex flex-col border border-white/10"
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
      style={{ animationDuration: "320ms" }}
      className="gw-pop fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#1d1d1f] px-5 py-3 text-[13.5px] font-medium text-white shadow-2xl border border-white/15"
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
  usePointerEffects();
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

  const openLightbox = (images, initialIndex, title) => {
    setLightbox({ open: true, images, initialIndex, title });
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
        <Projects onOpenLightbox={openLightbox} />
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
