# Ronit Jain Portfolio

Single-page portfolio for Ronit Jain, a backend engineer based in Jaipur, India.

Built with:

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

Live site:

- `https://ronitrohil.github.io/Portfolio/`

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Environment Variables

Create a `.env` file based on `.env.example`.

Supported variables:

- `VITE_FORMSPREE_ENDPOINT`
  Formspree endpoint for the contact form submission.

## Project Structure

```text
.
|-- public/
|   |-- favicon.png
|   |-- favicon.svg
|   |-- og-image.png
|   |-- profile.jpg
|   `-- resume/
|-- src/
|   |-- components/
|   |-- data/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- .github/workflows/
|-- index.html
|-- package.json
`-- vite.config.js
```

## Deployment

This repo is configured for GitHub Pages via GitHub Actions.

To publish updates:

1. Push changes to `main`
2. In GitHub repository settings, set `Pages -> Source` to `GitHub Actions`

The workflow builds the Vite app and deploys the generated `dist` output.

## Notes

- `public/` contains the assets used by the live site.
- `images/` is a trimmed source-asset archive with only the current profile and resume source files.
