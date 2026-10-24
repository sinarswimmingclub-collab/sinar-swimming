# SINAR SWIMMING CLUB — Landing Page

A modern, premium, sporty landing page for a swimming club, built with React + Vite (JavaScript only, no TypeScript, no backend).

## Stack

- React 18 + JSX
- Vite
- React Router (mounted, ready for future routes)
- Plain modern CSS (no framework) using CSS variables as design tokens
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/       # One component + one CSS file per section
├── hooks/useReveal.js  # Scroll-reveal IntersectionObserver hook
├── App.jsx
├── main.jsx
└── index.css          # Design tokens, base styles, animations
```

## Notes

- Images are loaded from Unsplash as placeholders — swap the `src` values in each component for your own photography whenever you're ready.
- The "lane line" motif (segmented cyan divider) is used as the site's signature detail, echoing literal pool lane ropes — it appears as section dividers, program numbering ("Lane 01–04"), and in the footer.
- Fully responsive from 1440px down to 375px, including a dedicated mobile navigation drawer.
