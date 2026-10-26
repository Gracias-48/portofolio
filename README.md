# Gracias Kumara Winata — Personal Portfolio

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A high-performance personal engineering portfolio for **Gracias Kumara Winata** (Computer Science / Artificial Intelligence student at BINUS University), showcasing on-device deep learning, spatio-temporal computer vision, speech recognition, and multi-agent systems.

Built following the **Apple Pro Editorial Design System** (`DESIGN.md`):
- **Full-bleed alternating rhythm**: Pure White (`#ffffff`), Apple Parchment (`#f5f5f7`), and Dark Tiles (`#1d1d1f`, `#272729`).
- **Signature Interactive Blues**: Action Blue (`#0066cc`) pill actions and Sky Link Blue (`#2997ff`) indicators.
- **Pro typography & contrast**: 56px/40px display headlines with tight tracking and two-tone cobalt gradients.
- **Surface contrast**: 18px rounded utility cards with subtle rings and zero wireframe borders.
- **Apple elevation product shadow**: Real photographic screenshot depth (`rgba(0, 0, 0, 0.22) 3px 5px 30px`).

---

## 🚀 Featured Engineering Projects

1. **[TranscribeNote](https://github.com/Gracias-48/Real-Time-Audio-Transcription)**
   - *On-Device Speech ASR*: In-browser quantized Whisper model running via Transformers.js (WebGPU / WASM) in a Web Worker.
   - Microphone segmented with Silero VAD, pure NumPy 80-channel Slaney Log-Mel front-end, and 1-click keynote extraction.

2. **[Touchless Gesture HUD](https://github.com/Gracias-48/Gesture-Control)**
   - *Spatio-Temporal Computer Vision*: Real-time webcam tracking of 21 MediaPipe hand landmarks.
   - 32-frame ring buffer feeding Dilated TCN / BiLSTM models exported to ONNX Runtime with sub-millisecond CPU inference (0.7 ms).

3. **[IDX Stock Intelligence](https://github.com/Gracias-48/Stock-Analysis)**
   - *Multi-Agent Systems & Serverless*: Triple-engine automated market radar for the Indonesia Stock Exchange.
   - Cloudflare Worker and GitHub Actions crons dispatching a LangGraph 7-node pipeline (macro analysts, Bull vs Bear debate, trade plan, and 5-tier PM verdict) delivered via Telegram Bot.

---

## 🛠️ Stack & Technologies

- **Frontend Core**: React 19, Vite, Tailwind CSS v4
- **Icons**: Lucide React
- **Hosting & Deployment**: Vercel / Netlify / Static SPA
- **Fonts**: Inter, JetBrains Mono, SF Pro fallback

---

## ⚡ Quick Start

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

---

## 📄 License

MIT © [Gracias Kumara Winata](https://github.com/Gracias-48)
