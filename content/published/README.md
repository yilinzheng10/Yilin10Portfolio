# Published Content

These JSON files are the structured public content source for future portfolio updates.

Files intentionally start as empty arrays because there are no new updates to publish right now.

Public rendering rule:

- Render only items with `status: "published"` and `visibility: "public"`.
- Do not render `captured`, `staged`, `archived`, `private`, or `draft` items.
- Archived items should appear only in a deliberately designed archive view.

Validate content with:

```sh
node scripts/validate-content.mjs
```
