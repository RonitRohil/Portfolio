# Ronit Jain — Portfolio

Personal portfolio site for Ronit Jain, Backend Engineer based in Jaipur, India.

**Live site:** [ronitrohil.github.io/Portfolio](https://ronitrohil.github.io/Portfolio/)

Built with React 19 + Vite, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

---

## Project Structure

```
.
├── public/
│   ├── favicon.png / favicon.svg
│   ├── og-image.png             # Open Graph preview image
│   ├── profile.jpg              # Hero profile photo
│   └── resume/
│       └── Ronit_Jain_Resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx            # Bio, stats, education cards
│   │   ├── Contact.jsx          # Contact form (Formspree) + social links
│   │   ├── Experience.jsx       # Work history timeline
│   │   ├── Footer.jsx           # Footer with social icons
│   │   ├── Hero.jsx             # Landing section with animated tech ticker
│   │   ├── Highlights.jsx       # Engineering highlight cards
│   │   ├── Navbar.jsx           # Sticky nav with active-section tracking
│   │   ├── OpenSource.jsx       # GitHub projects + architecture flow diagrams
│   │   ├── Projects.jsx         # Featured project cards
│   │   ├── Reveal.jsx           # Scroll-triggered fade-in wrapper
│   │   ├── SectionHeading.jsx   # Reusable numbered section header
│   │   ├── SideVentures.jsx     # Indie product cards
│   │   └── Skills.jsx           # Skill groups with proficiency bars
│   ├── data/
│   │   └── content.js           # ALL site content lives here — edit this to update the site
│   ├── App.jsx                  # Root: scroll progress bar, custom cursor, section wiring
│   ├── index.css                # Global styles, fonts, scrollbar
│   └── main.jsx                 # React entry point
├── .github/workflows/           # GitHub Actions deploy pipeline
├── index.html                   # HTML shell with SEO meta tags
├── tailwind.config.js           # Design tokens (colors, fonts, shadows)
├── vite.config.js               # Vite config (base URL for GitHub Pages)
└── .env.example                 # Environment variable template
```

---

## Updating Content

**All site content is centralized in `src/data/content.js`.** You should rarely need to touch any component file just to update text, links, or data.

### What to edit in `content.js`

| Export | What it controls |
|--------|-----------------|
| `navLinks` | Navbar items and section scroll targets |
| `heroTech` | Rotating tech ticker on the hero |
| `siteContent.about` | Bio paragraphs in the About section |
| `siteContent.stats` | Stat cards (value + label) |
| `siteContent.education` | Education cards |
| `siteContent.experience` | Work history entries (role, company, period, bullets, stack) |
| `siteContent.skillGroups` | Skill categories and proficiency levels |
| `siteContent.engineeringHighlights` | Highlight cards in the Engineering Highlights section |
| `siteContent.projects` | Featured project cards |
| `siteContent.ventures` | Side ventures (indie products) |
| `siteContent.githubProjects` | Open source / GitHub project cards |
| `siteContent.architectureFlows` | Architecture flow diagrams |
| `siteContent.contactIntro` | Intro text in the Contact section |
| `siteContent.contactSubjects` | Dropdown options in the contact form |
| `siteContent.socialLinks` | Social icon links (GitHub, LinkedIn, etc.) |
| `siteContent.resumeUrl` | Resume PDF path (inside `public/resume/`) |

### Skill proficiency levels

Three levels are supported — they render as a bottom bar on each skill pill:

```js
["PostgreSQL", "proficient"]   // 88% bar — day-to-day production use
["Redis", "working"]           // 62% bar — solid working knowledge
["Docker", "learning"]         // 34% bar — actively learning
```

---

## Design System

### Color Tokens

Defined in `tailwind.config.js` and used throughout via Tailwind classes:

| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#0A0A0F` | Page background |
| `paper` | `#E8E4D8` | Primary text, foreground |
| `lime` | `#C8F465` | Accent — CTAs, highlights, active states |
| `indigo` | `#5B6AF7` | Secondary accent — glow, hover variants |
| `panel` | `#111118` | Card / panel backgrounds |
| `muted` | `#98958C` | De-emphasized text (available but underused) |

### Typography

| Class | Font | Used for |
|-------|------|----------|
| `font-sans` | DM Sans | Body text, UI labels |
| `font-display` | Syne | Headings, section titles |
| `font-mono` | DM Mono | Labels, tags, section indices, code |
| `font-serif` | Instrument Serif (italic) | Section eyebrow subtitles |

### Shadows & Effects

| Token | Description |
|-------|-------------|
| `shadow-glow` | Navbar glow on scroll — lime ring + indigo depth |
| `bg-noise` | Hero background radial gradient (indigo + lime glows) |

### Border Radius Convention

Cards use large, consistent border radii for a soft, modern look:

- Major cards: `rounded-[2rem]`
- Inner panels / image frames: `rounded-[1.75rem]` to `rounded-[1.8rem]`
- Tags / pills: `rounded-full`
- Form inputs: `rounded-2xl`

---

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Without this, the contact form falls back to opening a `mailto:` link automatically.

---

## Deployment

The repo deploys to GitHub Pages via GitHub Actions on every push to `main`.

**Setup (one-time):**

1. Go to repository **Settings → Pages**
2. Set **Source** to `GitHub Actions`
3. Push any change to `main` — the workflow handles the rest

**How it works:** `.github/workflows/` runs `npm run build` and publishes the `dist/` output. The Vite config sets `base: '/Portfolio/'` to match the GitHub Pages URL.

**Manual deploy (alternative):**

```bash
npm run deploy   # builds and pushes dist/ to gh-pages branch via gh-pages CLI
```

---

## Notes

- `public/` assets are served at the root of the site — reference them with `withBase(path)` from `content.js` so the GitHub Pages base URL is applied correctly.
- `images/` is a local source-asset archive (original profile photo, resume source files). Not served by the site.
- The custom cursor only activates on desktop (pointer: fine). It's skipped on touch devices.
- Active section tracking uses `IntersectionObserver` with multiple thresholds — the section with the highest intersection ratio wins.
