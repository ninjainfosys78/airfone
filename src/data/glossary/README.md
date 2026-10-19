# Glossary

One file per term in `terms/<slug>.ts`, picked up automatically by `index.ts`.

## Scheduled terms

Set `published: 'YYYY-MM-DD'` on a term to release it on that day. Any build
before that day leaves the term out entirely: no page, no sitemap entry, no OG
image, no listing, and links to it from other terms render as plain text. The
next normal rebuild on or after the date (for example when a blog post is
published) puts it live. A term without `published` is always live.

`updated` is the date of the last real revision; it feeds `dateModified`.

Preview every term, scheduled or not:

    SHOW_SCHEDULED=1 pnpm dev
