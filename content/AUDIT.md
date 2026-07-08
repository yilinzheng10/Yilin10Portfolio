# Codebase Audit

Last audited: 2026-06-29

## Framework

This portfolio is a static website. There is no Next.js, React, Astro, Vite, CMS, build step, package manifest, or routing framework in the current repository.

## Pages

Pages are plain HTML files at the repository root:

- `index.html`: primary living atlas interface.
- `atlas.html`, `methods.html`, `notes.html`, `resume.html`: secondary static pages.
- `bim_projects.html`, `cdp_portfolio.html`, `demo/index.html`: older or project-specific pages.

## Components

There is no component framework. Reusable interface patterns are repeated as HTML, CSS classes, and JavaScript template strings.

## Content

The primary atlas content is hardcoded in `swipeHandling.js`:

- `works`: project/research/prototype records.
- `narratives`: question/method/outcome text keyed by work id.

Older pages such as `atlas.html`, `notes.html`, `methods.html`, and `resume.html` also contain hardcoded HTML content.

## Portfolio Sections

The main `index.html` sections are route-like page panels using `data-page`:

- `cover`
- `index`
- `systems`
- `field-notes`
- `prototypes`
- `archive`
- `emerging-systems`
- `about`

Collections render into containers with `data-collection`, driven by `works` entries in JavaScript.

## Styling

Styling is managed through one global stylesheet, `style.css`, plus the vendored flip-book stylesheet under `vendor/flip.js/`.

## Routing

Routing is hash-based in `swipeHandling.js`. The `showPage()` function reads `location.hash`, shows the matching `[data-page]` section, and hides the others.

## Existing Content System

There was no Markdown, MDX, JSON, YAML, CMS, or structured content system before this setup. This directory introduces a simple static-file content system that can coexist with the current hardcoded atlas until entries are migrated.
