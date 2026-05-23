# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 5 portfolio site with bilingual routing and Netlify deployment.
Source files live in `src/`: reusable UI is in `src/components/`, page routes are in `src/pages/`, shared layouts are in `src/layouts/`, global Tailwind CSS is in `src/styles/global.css`, and localized homepage copy is in `src/i18n/home.ts`. Project case-study content is stored as JSON collections under `src/content/projects/en/` and `src/content/projects/fr/`. Static files that should be served directly belong in `public/`; imported images belong in `src/assets/`. Supporting notes and deployment references live in `docs/`.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Astro dev server, usually at `http://localhost:4321`.
- `npm run check`: run Astro type and content checks.
- `npm run build`: run `astro check` and build the production site into `dist/`.
- `npm run preview`: preview the built site locally.

Run `npm run build` before opening a PR or publishing content changes.

## Coding Style & Naming Conventions

Use TypeScript-aware Astro components and keep component files in PascalCase, such as `Hero.astro` or `Navbar.astro`. Prefer small, section-focused components over large page files. Use 4-space indentation in Astro, TypeScript, CSS, and config files to match the current codebase. Use the `@/*` import alias for paths under `src/` when it improves clarity. Keep Tailwind utility classes readable and move repeated global tokens into `src/styles/global.css`.

## Testing Guidelines

There is no separate unit test suite configured. Treat `npm run check` and `npm run build` as the required validation path. For UI changes, manually verify the affected routes in both locales, especially `/`, `/en/`, `/fr/`, and `/[lang]/thank-you`. When editing project content, update both English and French JSON entries unless the change is intentionally locale-specific.

## Commit & Pull Request Guidelines

Recent history uses conventional prefixes such as `feat:`, `fix:`, and `chore:`; follow that style with concise, imperative summaries. Pull requests should describe the user-facing change, list validation performed, and include screenshots for visual changes. Link related issues when available. For Netlify form or deployment changes, call out any required dashboard configuration.

## Security & Configuration Tips

Do not commit secrets, tokens, or local Netlify credentials. Keep deployment-specific behavior in Astro or Netlify configuration, and document manual Netlify dashboard steps in `docs/` when they cannot be represented in code.
