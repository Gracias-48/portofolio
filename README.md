# Gracias Kumara Winata — Personal Portfolio

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A personal engineering portfolio for **Gracias Kumara Winata** (Computer Science / Artificial Intelligence student at BINUS University), showcasing multi-agent LLM systems, cloud & serverless backends, spatio-temporal computer vision, and real-time speech recognition pipelines.

Built with an editorial aesthetic:
- **Full-bleed alternating rhythm**: Pure White (`#ffffff`), Apple Parchment (`#f5f5f7`), and Dark Tiles (`#1d1d1f`, `#272729`).
- **Signature Interactive Blues**: Action Blue (`#0066cc`) pill actions and Sky Link Blue (`#2997ff`) indicators.
- **Pro typography and contrast**: 56px/40px display headlines with tight tracking and two-tone cobalt gradients.
- **Surface contrast**: 18px rounded utility cards with subtle rings and zero wireframe borders.
- **Elevation product shadow**: Real photographic screenshot depth (`rgba(0, 0, 0, 0.22) 3px 5px 30px`).

---

## Featured Engineering Projects

1. **[TranscribeNote](https://github.com/Gracias-48/Real-Time-Audio-Transcription)**
   - *Real-Time Speech ASR & Full-Stack Streaming*: Full-stack lecture transcription platform streaming 16 kHz audio over WebSockets to a FastAPI + Faster-Whisper backend, alongside an in-browser Transformers.js (WebGPU / WASM) worker.
   - Microphone segmented with Silero VAD, custom NumPy 80-channel Slaney Log-Mel front-end, and 1-click keynote extraction.

2. **[Touchless Gesture HUD](https://github.com/Gracias-48/Gesture-Control)**
   - *Spatio-Temporal Computer Vision*: AirTouch Studio 30 FPS Virtual Mouse & standalone floating controller tracking 21 MediaPipe hand landmarks.
   - 16-frame (`0.53 s`) ring buffer over 9 HaGRID v2 classes (`24,849` sequences) feeding Causal Dilated TCN (`99.44%`, `0.31 ms`), BiLSTM + Attention (`99.50%`), and ST-GCN (`99.08%`) exported to ONNX Runtime on CPU.

3. **[IDX Stock Intelligence](https://github.com/Gracias-48/Stock-Analysis)**
   - *Cloud, Serverless & Multi-Agent Systems*: Event-driven market intelligence backend for the Indonesia Stock Exchange.
   - Cloudflare Worker webhook and GitHub Actions crons dispatching an asynchronous LangGraph 7-node pipeline (macro analysts, Bull vs Bear debate, Pydantic trade plan, and 5-tier PM verdict) delivered via Telegram Bot API.

---

## Stack & Technologies

- **Frontend Core**: React 19, Vite, Tailwind CSS v4
- **Icons**: Lucide React
- **Hosting & Deployment**: Vercel / Netlify / Static SPA
- **Fonts**: Inter, JetBrains Mono, SF Pro fallback

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Gracias-48/portofolio.git
cd portofolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```
