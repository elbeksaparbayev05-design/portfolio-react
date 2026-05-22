## Purpose

This repository is a small React + Vite + Tailwind portfolio site. These instructions are targeted at automated coding agents (Copilot-style assistants) so they can make safe, useful edits quickly and follow project conventions.

## Big picture (what matters)
- Single-page React app built with Vite. Entry: `src/main.jsx` -> renders `src/App.jsx` into `#root` in `index.html`.
- Styling: Tailwind is used via `@tailwindcss/vite` plugin. Global CSS lives in `src/index.css` and is imported from `src/main.jsx`.
- Static assets are in `public/` (favicons/icons) and `src/assets/` (images referenced by components).
- Dev/build: Vite dev server and build pipeline defined in `package.json` scripts and `vite.config.js`.

## Key files to reference
- `src/main.jsx` — application bootstrap (imports `index.css`, mounts `App`).
- `src/App.jsx` — single main component; shows Tailwind usage and how images are imported (example: `import logo from './assets/image.png'`).
- `src/index.css` — Tailwind entry (currently `@import "tailwindcss"`).
- `vite.config.js` — Vite plugins (React + Tailwind plugin).
- `package.json` — scripts: `dev`, `build`, `preview`, `lint`.
- `eslint.config.js` — lint rules used by `npm run lint`.
- `public/` — static assets served as-is.

## How to run (developer workflows)
- Start dev server with: `npm run dev` (Vite, hot module replacement).
- Produce a production build: `npm run build` (outputs `dist/`).
- Quickly preview a production build locally: `npm run preview`.
- Lint the codebase: `npm run lint` (runs `eslint .`).

Notes: `index.html` includes a `<link href="/src/style.css">` tag but the repository's CSS file is `src/index.css`; the canonical stylesheet import is the `import './index.css'` inside `src/main.jsx`. Prefer editing `src/index.css` and `main.jsx` for CSS bootstrapping.

## Project-specific conventions & patterns
- Component files live under `src/` and use `.jsx`. Prefer default exports for top-level components (see `App.jsx`).
- Assets: import images from `src/assets` (example in `App.jsx`) rather than referencing `public/` unless you need a stable absolute path.
- Tailwind classes are used inline in `className` strings. Keep class lists readable by grouping logical segments (layout, spacing, typography).
- Text content appears to be written in Uzbek (e.g. `BOSH SAHIFA`, `ASARLAR`). When editing copy, keep language/context consistent.

## Examples (concrete edits an agent may perform)
- Add a new presentational component `src/components/Hero.jsx` exporting default React component and import it into `src/App.jsx`.
- Use images: `import avatar from '../assets/image.png'` then `<img src={avatar} alt="avatar"/>`.
- Add Tailwind utility classes directly on elements; no separate CSS is required for small tweaks.

## Common gotchas & suggested fixes
- CSS filename mismatch: `index.html` references `/src/style.css` but the repo has `src/index.css`. Do not break dev HMR — prefer editing `src/index.css` and ensure `main.jsx` imports it.
- No tests present. If you add tests, include a test runner and scripts (`vitest` or `jest`) and update `package.json`.
- If adding Tailwind custom config, add `tailwind.config.cjs` at repo root and update `vite.config.js` if needed.

## Integration points / external deps
- React 19, Vite, Tailwind and the `@tailwindcss/vite` plugin. Linting is handled by `eslint` and plugins (`react-hooks`, `react-refresh`).

## When submitting changes (PR guidance)
- Keep changes minimal and focused. For UI changes include before/after screenshots or GIFs in PR description.
- Run `npm run lint` before opening a PR.

## Questions for the maintainer (if unclear)
- Should `index.html`'s `link` to `/src/style.css` be removed or renamed to match `src/index.css`? (I followed `src/main.jsx` as the canonical import.)
- Any preferred folder for new components (e.g. `src/components/`)?

If anything in these notes is incorrect or you'd like a different style (longer or shorter), tell me what to change and I'll update this file.
