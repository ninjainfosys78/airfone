# airfone.app rebuild: design

Date: 2026-10-08. Status: draft for owner review.
Checklist: [2026-10-08-site-rebuild-ledger.md](2026-10-08-site-rebuild-ledger.md). Every row there must
be `done` or `n/a` with a reason before launch.

## 1. What the owner asked for

- A complete redesign of airfone.app: premium, modern, in AirFone's own branding.
- For everyone: small businesses sign up themselves, larger buyers book a demo, resellers apply.
- English only.
- Five products (menu names since 2026-10-08: AI Call Agent, AI Phone System, Cloud PBX, Website Voice Agent, Website Chatbot): website voice agent, website chatbot, AI call agent (inbound), business phone
  system (IP/PBX), AI phone system (inbound and outbound). No social media chat anywhere.
- No prices for now. The owner will send them later.
- A Markdown blog and strong SEO.
- ElevenLabs voices used for the demo audio.
- Creative customer proof.

Assumptions (correct these in review):
- Self-serve sign-up links go to the existing merchant portal; the site holds no accounts.
- The current login, register and verify pages keep redirecting as they do now.
- Proof is honest: example calls are labelled "Example call", the Pathibhara recording is labelled
  "Real call", and a testimonials block stays hidden until real quotes arrive. No invented
  customers, quotes or numbers.

## 2. Brand

AirFone's own brand, aligned with the app (`airfone/app/lib/core/theme/app_theme.dart`).

| Token | Value | Use |
|---|---|---|
| `--canvas` | `#F7F7F8` | page background (same as app) |
| `--surface` | `#FFFFFF` | panels, player, forms |
| `--subtle` | `#EFEFF1` | quiet fills |
| `--line` | `#E2E2E6` | 1px borders |
| `--ink` | `#15181F` | text |
| `--ink-muted` | measured to pass AA on canvas and surface | secondary text |
| `--brand` | `#2F4F08` | the one brand colour: main buttons, links, the stage section |
| `--lime` | `#8BC53E` | small highlights only: play button, waveform, ticks |
| `--on-lime` | `#0D1502` | text on lime |

- `#2F4F08` replaces the site's `#2F4D07`; DESIGN.md becomes the shared record for site and app.
- Dark scheme kept, redefined from these tokens; every pair checked for AA and recorded in DESIGN.md.
- Logo: green cloud mark and gray wordmark from `public/brand/`, unchanged. `cloud-outline.svg` is
  the only graphic motif.
- Type: Instrument Sans (self-hosted, latin subset), JetBrains Mono for numbers in product screens.
  Headlines larger than today but short: display 56 to 72px desktop, 36 to 40px phone, weight 600,
  at most about 8 words so the headline never fills the first screen alone (impeccable "oversized
  hero headline"). No italic serif display type.
  Body 18px (16px under 480px), secondary 16px, floor 14px. Letter spacing 0. Sentence case.
- Shape: radius 8px controls, 12px panels. Border or nothing, never shadows.
- Motion: 150 to 250ms ease-out, opacity and transform only. Waveform animates only while audio
  plays; transcript lines fade in as spoken. Off under `prefers-reduced-motion`. Content visible
  without JavaScript.
- No AI look. Rules in `~/.claude/CLAUDE.md` and the full impeccable.style/slop catalogue
  (ledger section 15, 67 checks) apply to every page and every line of copy. Notably: no hero
  metric layout, no icon tiles above headings, no identical card grids, no forced-contrast slogans
  ("Not a feature. A platform."), no "world-class" or "supercharge", no cream/beige by reflex,
  no decorative grid-line backgrounds, headings sit closer to their own content than to the
  section above.

## 3. Pages

| Route | Purpose |
|---|---|
| `/` | Headline, the call player (stage section), demo number 970-269-7774, primary CTA; then the five products, how it works, honest proof, closing CTA |
| `/products/website-voice-agent` | Product story: problem, own demo, what you get, CTA |
| `/products/website-chatbot` | Same pattern; the demo is a scripted chat, not audio |
| `/products/ai-call-agent` | Same pattern; demo plus the Pathibhara real call |
| `/products/phone-system` | IP/PBX; demo is a phone menu routing a call |
| `/products/ai-phone-system` | Inbound and outbound; demo is an outbound reminder call |
| `/solutions/banks`, `/solutions/shops`, `/solutions/clinics`, `/solutions/isps` | Use cases, each with its own example call and specific copy |
| `/resellers` | Why sell AirFone, how it works, application form |
| `/demo` | Book a demo form (3 fields: name, phone, business) |
| `/contact` | Address, phone, email, map link, LocalBusiness schema |
| `/pricing` | No numbers: "Pricing is set for your call volume" with demo CTA, ready for prices later |
| `/blog`, `/blog/page/N`, `/blog/tag/[tag]`, `/blog/[slug]` | Markdown blog |
| `/authors/[slug]` | Author bio pages |
| `/terms`, `/privacy`, `/delete-account` | Kept, restyled |
| `/404` | Styled, real 404 status |

Product page layouts differ by what the product is (audio player, chat transcript, phone menu
diagram, outbound timeline), so no page is a copy of another.

Old routes (`/features`, `/platform`, `/services`, `/about`, `/upcoming`, `/ne/*`, `/waitlist/*`)
301 to their closest new page in `docs/nginx-redirects.conf`.

## 4. Demo audio

- `scripts/voices/` holds one script file per clip (speaker, line, voice). A Node script calls
  ElevenLabs at build-prep time (never in the browser), writes `public/audio/<clip>.opus` plus
  `.m4a` fallback and a `<clip>.json` with per-line timings for the transcript.
- Clips: four example calls (clinic booking, bank deposit enquiry with handover to a person, shop
  price and stock, ISP outage and ticket), one per product page, about 8 to 10 thousand characters
  in all. Generated clips are committed so the build never needs the key.
- Voices: two agent voices (warm female, calm male) and distinct caller voices, picked from the
  ElevenLabs library by the owner from a shortlist. All clips loudness-matched.
- Player: one component. Slim waveform, play/pause (keyboard and screen reader friendly), transcript
  following along, label "Example call · Clinic" or "Real call · Pathibhara". preload="none", no
  autoplay.
- Key in `.env` (git-ignored, 600). The account is free tier, which bars commercial use: drafts now,
  final clips regenerated on a paid plan before launch (ledger AU-6).

## 5. Blog

- Astro upgraded from 4 to 5 for the content layer. Posts are `src/content/blog/*.md`; authors are
  `src/content/authors/*.md`.
- Zod schema: title, description (120 to 160 chars), date, updated, author, tags, draft, image,
  imageAlt. Build fails on any missing or wrong field. Drafts excluded from pages, sitemap and RSS.
- Layout: 680px measure, 18px body, real typographic quotes, tables and images at phone width,
  print styles.
- Clusters: one pillar guide per product family links to its posts; posts link back.
- Starter set (owner reviews before publishing): "What an AI call agent does for a Nepali business",
  "IP/PBX vs a traditional phone line", "How banks can answer every call", "Adding a voice agent to
  your website". More later.

## 6. SEO

- One shared `Seo.astro` builds title, description, canonical, Open Graph, Twitter and JSON-LD for
  every page from page props, so no template can skip it.
- Bare host `https://airfone.app`, no trailing slash except `/`, HTTPS only, single 301 hops.
- JSON-LD: Organization (site-wide), SoftwareApplication per product (no offers until prices),
  BlogPosting, BreadcrumbList, LocalBusiness on `/contact`. FAQ sections kept as content.
- `@astrojs/sitemap` (excludes noindex routes), robots.txt, RSS, llms.txt, per-page OG images
  generated at build.
- Search Console, Bing and the Google Business Profile are owner tasks in the ledger.

## 7. Forms

- `/demo` and `/resellers` post to the existing backend form endpoint used by the waitlist today
  (confirm in implementation; if it cannot take new fields, add one endpoint).
- Server-side validation, honeypot plus rate limit for spam, visible labels and errors, a privacy
  line and "we'll call you within one working day" under each form.

## 8. Speed and quality targets

- Static build, zero JS by default. Islands only for the audio player, the chat demo and forms.
- Lighthouse mobile 95+ on every template; LCP under 2.5s, INP under 200ms, CLS under 0.1.
- Images through Astro Image with explicit sizes; hero media eager, the rest lazy.
- axe-core clean, keyboard pass, contrast table updated.

## 9. Out of scope

- Prices (placeholder only), social media chat, Nepali, testimonials (hidden slot only), city pages
  (only when real local content exists), A/B testing.

## 10. Build order

1. Tokens, DESIGN.md, base layout, header, footer, `Seo.astro`, Astro 5 upgrade.
2. Call player and audio pipeline (draft clips).
3. Home.
4. Five product pages.
5. Solutions, resellers, demo, contact, pricing placeholder.
6. Blog, authors, RSS, starter posts.
7. Redirects, 404, schema, sitemap.
8. Ledger pass: every row checked with evidence.

Each finished piece is committed and shown on the dev server for the owner to review.
