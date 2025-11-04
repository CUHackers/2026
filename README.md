# CUHackIt — Barebones Website Template

This repository contains a minimal single-page React template (Vite) for CUHackIt 2026 with a small Node/Express server for serving production builds.

Features
- Single-page layout with smooth-scrolling sections
- Navbar buttons: Home, FAQ, Register, Sponsor, About, Schedule
- Vite-powered dev server and build process

Quick start (macOS / zsh)

1. Install dependencies

```bash
npm install
```

2. Start dev server (hot reload)

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Serve the production build locally

```bash
npm start
```

Notes
- The `start` script runs `server.js` which serves the `dist/` directory produced by `vite build`.
- Replace the placeholder content in `src/App.jsx` with your real copy, FAQ, registration links, and schedule.

Files added
- `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css` — React app
- `package.json` — scripts and deps
- `server.js` — minimal express server for production
- `README.md` — how to run

Next steps you may want to do
- Add real logo and assets
- Add registration form or integrate an external registration link
- Add sponsor logos and contact form
- Deploy to Vercel/Netlify or any static host (or use the Node server on a VM)
