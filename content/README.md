# Portfolio Content System

This directory is the working content pipeline for the portfolio.

The site is currently a static HTML/CSS/JavaScript portfolio. Existing visible portfolio entries are still hardcoded in `swipeHandling.js`. Future updates should move through this file-based content system before anything becomes public.

## Flow

1. Paste rough notes into `content/inbox/2026-raw-updates.md`.
2. Ask Codex to classify and rewrite selected notes into staged drafts.
3. Review the staged drafts manually.
4. Move approved items into the matching file in `content/published/`.
5. Only items with `status: "published"` and `visibility: "public"` may render on the site.

## Directories

- `inbox/`: private rough notes and capture files. Not for public rendering.
- `staged/`: structured drafts waiting for review. Not for public rendering.
- `published/`: structured public content files. These are allowed to render only when each item is explicitly public.
- `templates/`: manual fill-in templates for future updates.
- `schemas/`: JSON Schema definitions for content items and category files.

## Rule

Do not invent updates, affiliations, dates, outcomes, publications, metrics, collaborators, or media. If a note is incomplete, keep the unknown field blank or mark it as `null`.

## Future Rendering Hook

`content/content-loader.js` exposes `window.portfolioContent.loadPublicPortfolioContent()`. It loads only files in `content/published/` and filters out anything that is not both `status: "published"` and `visibility: "public"`.

The loader is not wired into the current atlas yet because the published files are empty and the existing site is driven by hardcoded records in `swipeHandling.js`. Future sessions can include the loader on public pages when there are reviewed public items to render.
