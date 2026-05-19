# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Serve production build locally
npm run deploy    # Build + push to gh-pages branch (manual deploy)
```

No test or lint scripts are configured.

## Architecture

**Single-page scrollable portfolio** built with React 19 + Vite 7. No router — navigation is anchor-based smooth scroll. All site content lives in one file.

### Content is centralized

`src/data/content.js` exports a single `siteContent` object that is the source of truth for all text, links, skills, projects, experience, and nav items. When updating portfolio content, this is the only file that needs changing.

### Component structure

`App.jsx` composes all sections sequentially. Each section component (in `src/components/`) receives data from `siteContent` and handles its own layout.

Utilities in `src/components/utils/`:
- `Reveal.jsx` + `useReveal.js` — `IntersectionObserver`-based scroll-triggered fade-in; wrap any section content in `<Reveal>` to animate on scroll
- `SectionHeader.jsx` — consistent section title with terminal prompt styling
- `Tag.jsx` — pill tag for stack/skill labels
- `TermWindow.jsx` — terminal window chrome container

### Styling system

- **Tailwind CSS** with custom tokens defined in `tailwind.config.js` (`ink`, `paper`, `lime`, `indigo`, `panel`, `muted` colors; `shadow-glow`)
- **CSS variables** for the terminal theme defined in `index.css` (`--bg`, `--surface`, `--border`, `--text`, `--green`, `--orange`, `--blue`, etc.)
- Prefer CSS variables for theme colors and Tailwind utilities for spacing/layout

### Deployment

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy-pages.yml`) which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages at `ronitrohil.github.io/Portfolio/`. The Vite `base` is set to `/Portfolio/` for this subdirectory path.

### Contact form

Uses Formspree via `VITE_FORMSPREE_ENDPOINT` env variable (see `.env.example`). Falls back to `mailto:` if the variable is absent.

### Skill proficiency bars

`skillGroups` items use three levels: `"proficient"` → 88%, `"working"` → 62%, `"learning"` → 34%.
