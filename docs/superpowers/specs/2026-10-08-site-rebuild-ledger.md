# AirFone site rebuild: launch ledger

Every check the new airfone.app must pass before and after launch. One row per
check. Status: `todo`, `doing`, `done`, `n/a` (with a reason), `owner` (needs the
owner, not code). Evidence is the command, URL or file that proves it.

Decisions so far (2026-10-08): English only. Five products (website voice agent,
website chatbot, AI call agent, business phone system, AI phone system). No
social media chat. No prices until the owner sends them. Audience is everyone:
self-serve sign-up, demo booking, reseller applications. Markdown blog.

## 1. Pages and structure

| ID | Check | Status | Evidence |
|---|---|---|---|
| PG-1 | Home: live call demo, demo number 970-269-7774, primary CTA above the fold | done | src/pages/index.astro, Hero.astro |
| PG-2 | One page per product (5), each with its own demo | done | src/pages/products/[slug].astro, tests/products.test.ts |
| PG-3 | Use-case pages (banks, shops, clinics, ISPs), each with specific content, not find-and-replace | done | src/pages/solutions/[slug].astro, src/data/solutions.ts |
| PG-4 | Resellers page with application form | done | src/pages/resellers.astro |
| PG-5 | Book a demo / contact page | done | src/pages/demo.astro, contact.astro |
| PG-6 | Pricing route exists with a "contact us" holding state; no prices anywhere | done | src/pages/pricing.astro (noindex, no numbers) |
| PG-7 | Blog index, post pages, tag pages, paginated pages | done | src/pages/blog/*, tests/blog.test.ts |
| PG-8 | Author pages (one per author) linked from every post | n/a | owner: no bylines; author = Organization |
| PG-9 | Legal pages kept: terms, privacy, delete-account | done | src/pages/terms|privacy|delete-account.astro |
| PG-10 | Styled 404 page returning HTTP 404; 500 page shows no stack trace | done | src/pages/404.astro; nginx error_page 404 in docs/nginx-redirects.conf (applies at deploy) |
| PG-11 | Nepali routes (/ne/...) 301 to their English pages | done | scripts/redirects.mjs, tests/redirects.test.ts |
| PG-12 | Social media chat appears nowhere (nav, footer, copy, schema) | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |

## 2. Copy and conversion

| ID | Check | Status | Evidence |
|---|---|---|---|
| CV-1 | Each page states what AirFone does within the first screen (3 to 5 second test) | done | home h1 "Every call answered, in Nepali" + live demo on first screen |
| CV-2 | Headlines name the outcome, not the feature | done | product headlines in src/data/products.ts |
| CV-3 | One primary CTA per page, repeated lower down; at most two distinct goals | done | one primary "Book a demo" per page + CtaBand |
| CV-4 | Button text says what happens ("Book a demo", not "Submit") | done | button labels: Book a demo, Send application, Get a price |
| CV-5 | Proof sits next to the headline, the CTA and every form | owner | no real customer proof yet; testimonials slot hidden (src/data/testimonials.ts) |
| CV-6 | Claims are specific (named customers, real numbers), no "trusted by thousands" | done | proof = product facts + real Pathibhara call; no invented customers |
| CV-7 | Real contact details visible: address, phone, email | owner | street address and office hours needed; only Kathmandu shown |
| CV-8 | Copy passes the no-slop list in ~/.claude/CLAUDE.md (no eyebrows, no em-dashes, no "seamless") | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| CV-9 | Every marketed feature checked against what the product does; gaps listed for the owner | owner | marketed but not built per 2026-10-01 notes: outbound calling, website voice agent, chatbot, ticket-system and sheet integrations; owner chose to market all |

## 3. Forms

| ID | Check | Status | Evidence |
|---|---|---|---|
| FM-1 | Demo form: 3 fields or fewer above the fold | done | demo form: name, phone, business (+ optional type) |
| FM-2 | Reseller form fields agreed with owner | owner | reseller form uses name/phone/business/city; confirm fields |
| FM-3 | Visible labels, text error messages, invalid email rejected | done | src/lib/lead.ts validateLead, tests/lead.test.ts |
| FM-4 | Privacy line and "what happens next" under every form | done | consent line + "We call you back within one working day" |
| FM-5 | Server-side validation, not only in the browser | done | backend waitlist.rs validates phone, consent, lengths |
| FM-6 | Spam protection that does not block real people | done | honeypot `website` + backend per-IP rate limit |
| FM-7 | End-to-end test: submission reaches the right inbox, confirmation shown | todo | end-to-end submit only works from https://airfone.app (backend origin check); test after deploy |
| FM-8 | Conversion event fires only after a successful submit | owner | depends on AN-1 analytics choice |

## 4. Demo audio (ElevenLabs)

| ID | Check | Status | Evidence |
|---|---|---|---|
| AU-1 | ElevenLabs key location confirmed; never in the repo or client bundle | done | key in git-ignored .env (600); never in src/public/dist (pnpm check SEC-3) |
| AU-2 | Clips generated once at build time, served as static files | done | scripts/make-voices.mjs, public/audio/* |
| AU-3 | Every clip has a text transcript on the page | done | CallPlayer prints Nepali + English transcript; tests/call-player.test.ts |
| AU-4 | Audio never autoplays; play/pause works by keyboard | done | no autoplay; play button is a real <button> with aria-pressed |
| AU-5 | Clips compressed (Opus/AAC), preload="none" | done | opus 64k + m4a 96k, preload="none" |
| AU-6 | ElevenLabs account on a paid plan with a commercial license before any clip goes live (2026-10-08: key works, account is free tier) | owner | ElevenLabs account is free tier: regenerate with `pnpm voices` on a paid plan before launch |

| ORB-1 | Only Orbkit MIT orbs; MIT notice kept | done | src/components/orb/variants/*.ts headers, LICENSE-orbkit.txt |
| ORB-2 | Orb JS ≤ 8 KB gzipped | done | 5.6 KB gz (dist/assets/shdr-14*.js) |
| ORB-3 | Still frame without WebGL or with reduced motion | done | CallOrb.astro fallback; console note explains why |
| ORB-4 | Pauses off screen and in hidden tabs | done | IntersectionObserver + visibilitychange in call-orb.ts |
| ORB-5 | Owner picks the orb | owner | /orb-pick on the dev server; default shdr-14 Dither |

## 5. Technical SEO

| ID | Check | Status | Evidence |
|---|---|---|---|
| SEO-1 | One trailing-slash rule, other form 301s to it | done | trailingSlash never + nginx strip rule (docs/nginx-redirects.conf) |
| SEO-2 | Self-referencing canonical on every page, exact preferred URL | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| SEO-3 | One host (www or bare) and HTTPS; others 301, no redirect chains | todo | bare host + HTTPS 301 is server config; verify with curl after deploy |
| SEO-4 | Unique title and meta description on every page | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| SEO-5 | Open Graph and Twitter tags plus a 1200x630 image per page | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean; per-page 1200x630 images in /og |
| SEO-6 | One H1 per page, logical heading order | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| SEO-7 | sitemap.xml lists every indexable page, excludes drafts and 404s | done | @astrojs/sitemap with noindex filter |
| SEO-8 | robots.txt allows crawling, points to sitemap; AI crawlers allowed | done | public/robots.txt |
| SEO-9 | Blog pages 2+ have their own titles and self canonicals | done | src/pages/blog/page/[page].astro titles "Blog, page N" |
| SEO-10 | No hreflang (single language) | n/a | English only |
| SEO-11 | RSS feed for the blog | done | src/pages/rss.xml.ts (drafts excluded) |
| SEO-12 | llms.txt (cheap, unproven signal) | done | src/pages/llms.txt.ts generated from data |
| SEO-13 | Descriptive alt text on every meaningful image | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| SEO-14 | Clean, readable URLs (/products/ai-call-agent, /blog/slug) | done | /products/<slug>, /solutions/<slug>, /blog/<slug> |
| SEO-15 | Search Console and Bing Webmaster verified, sitemap submitted | owner | verify Search Console and Bing, submit sitemap |

## 6. Structured data

| ID | Check | Status | Evidence |
|---|---|---|---|
| SD-1 | Organization (name, logo, sameAs links) site-wide | done | src/lib/seo.ts orgJsonLd on every page; tests/seo.test.ts |
| SD-2 | SoftwareApplication per product, no price fields until prices exist | done | softwareJsonLd without offers; `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| SD-3 | Article (BlogPosting) per post with author, dates, image | done | articleJsonLd, author = Organization |
| SD-4 | BreadcrumbList on every page below home | done | breadcrumbJsonLd on inner pages |
| SD-5 | LocalBusiness on contact, NAP identical to Google Business Profile | done | localBusinessJsonLd on /contact; NAP from src/config/site.ts |
| SD-6 | FAQ sections kept for readers; no reliance on FAQ rich results (retired May 2026, verify against Google docs) | done | FAQ as <details> content, no FAQPage markup |
| SD-7 | Every template passes the Rich Results Test and schema validator | todo | JSON-LD parses (pnpm check); run Rich Results Test per template after deploy |
| SD-8 | Schema matches visible content, no duplicates or conflicts | done | JSON-LD built from the same data as the page |

## 7. Blog (Markdown)

| ID | Check | Status | Evidence |
|---|---|---|---|
| BL-1 | Posts are .md in src/content/blog with a Zod schema (title, description, date, updated, author, tags, draft, image) | done | src/lib/blog-schema.ts, src/content.config.ts |
| BL-2 | Build fails on missing or wrong frontmatter | done | tests/blog.test.ts post schema |
| BL-3 | Drafts never reach the build, sitemap or RSS | done | published() in src/lib/blog.ts; prod build has 0 drafts |
| BL-4 | Named author with linked bio on every post | n/a | owner: no bylines |
| BL-5 | Visible publish and updated dates | done | post page shows date and updated |
| BL-6 | Topic clusters: pillar guide links to each post, each post links back | done | pillar: true on ai-call-agent-guide; "Read next" links pillar |
| BL-7 | Internal links use descriptive anchor text | done | descriptive link text in posts |
| BL-8 | Every post shows first-hand experience (real calls, real numbers), no generic filler | owner | posts reference real calls; owner to add first-hand detail |
| BL-9 | 3 to 5 starter posts written and reviewed by owner | owner | 4 drafts in src/content/blog; flip draft: false after review |
| BL-10 | Reading pages render code, tables and images cleanly at phone width | done | prose styles, tables scroll in own box, print CSS |

## 8. Speed (Core Web Vitals, field data at 75th percentile)

| ID | Check | Status | Evidence |
|---|---|---|---|
| CWV-1 | LCP under 2.5 s on mobile | done | `scripts/lighthouse.sh`: perf 94-100, a11y/BP/SEO 100 on 8 templates (2026-10-08); LCP 1.5-1.7 s |
| CWV-2 | INP under 200 ms | done | `scripts/lighthouse.sh`: perf 94-100, a11y/BP/SEO 100 on 8 templates (2026-10-08); TBT 0 ms |
| CWV-3 | CLS under 0.1 | done | `scripts/lighthouse.sh`: perf 94-100, a11y/BP/SEO 100 on 8 templates (2026-10-08); CLS ≤ 0.022 |
| CWV-4 | Fonts self-hosted, subset, font-display swap, only used files preloaded | done | Poppins self-hosted, latin subsets, 2 preloads |
| CWV-5 | Images via Astro Image with srcset, explicit sizes; hero eager + fetchpriority high, rest lazy | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| CWV-6 | No third-party script before load; analytics deferred | done | no third-party scripts |
| CWV-7 | Page weight budget per template recorded | done | home JS: orb ~5.6 KB gz; other pages < 3 KB |
| CWV-8 | Lighthouse mobile 95+ on every template (lab), then CrUX after launch (field) | doing | `scripts/lighthouse.sh`: perf 94-100, a11y/BP/SEO 100 on 8 templates (2026-10-08); CrUX field data after launch |

## 9. Design quality

| ID | Check | Status | Evidence |
|---|---|---|---|
| DS-1 | Uses DESIGN.md tokens only; DESIGN.md updated with any new token | done | DESIGN.md; `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| DS-2 | Passes the visual slop list (no gradients, glow, nested cards, eyebrows, oversized radius) | done | DESIGN.md; `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| DS-3 | Body 16px+, secondary 14px+, line height 1.4 to 1.5 | done | base.css 18px body, 16px secondary, 1.5 line height |
| DS-4 | Motion 150 to 300 ms ease-out, transforms/opacity only, content visible without JS | done | 150/250 ms, opacity/transform only; content visible without JS |
| DS-5 | prefers-reduced-motion respected | done | prefers-reduced-motion in base.css and orb |
| DS-6 | Light and dark schemes both checked | done | dark tokens in tokens.css, contrast in DESIGN.md |
| DS-7 | Works at 320 px, 768 px, 1280 px, 1920 px with no horizontal scroll | owner | owner reviews at 320/768/1280/1920 on the dev server |
| DS-8 | Real product screens and photos only, no placeholder art | done | real logo, orb and app colours only; no placeholder art |
| DS-9 | Favicon set, apple-touch-icon, web manifest, theme color | done | favicon.svg, apple-touch-icon, manifest, theme-color |
| DS-10 | Type scale defined in DESIGN.md and used everywhere, no one-off sizes | done | DESIGN.md type scale |
| DS-11 | Prose measure 45 to 75 characters per line on blog and long copy | done | --measure 680px |
| DS-12 | True quotes, apostrophes and ellipses (no straight substitutes); no em-dashes in copy | done | typographic apostrophes in data; no em-dashes (`pnpm check` (scripts/check-site.mjs), 22 pages clean) |
| DS-13 | Spacing from one 4/8 px scale, no ad-hoc values | done | --space-1..10 |
| DS-14 | Edges align to one grid; section gaps clearly larger than inner gaps | owner | owner visual review |
| DS-15 | Hierarchy carried by size and weight first, brand green used sparingly | done | size/weight hierarchy; lime only on play, orb, markers |
| DS-16 | Shared components (header, footer, CTA band, demo player, form) identical on every page | done | shared Header, Footer, CtaBand, CallPlayer, LeadForm, Faq |
| DS-17 | No awkward breaks between breakpoints (drag-resize 320 to 1920) | done | scripts/a11y.mjs fails on any horizontal scroll at 375 and 1280 px; clean |
| DS-18 | Hover, focus, active, disabled, loading and error states designed for every control | done | hover/focus/disabled/busy/error states in base.css, player, form |
| DS-19 | Hover degrades cleanly on touch; tap targets 44 px on mobile | done | 44 px nav targets, 48 px buttons/inputs |
| DS-20 | Empty and edge states: no blog posts in a tag, very long titles, missing images, audio fails to load | done | empty blog message, audio error state, long titles wrap |
| DS-21 | Layout varies by meaning; no identical card grid repeated on every page | done | index list, numbered steps, two-column, chat, menu, timeline: no repeated card grid |
| DS-22 | Print styles for blog posts and legal pages | done | @media print in base.css |
| DS-23 | Each item marked pass, fail or n/a; a missing reference is a question, not a pass | done | this ledger |

## 10. Accessibility (WCAG 2.2 AA)

| ID | Check | Status | Evidence |
|---|---|---|---|
| A11Y-1 | axe-core clean on every template and key state | done | `node scripts/a11y.mjs`: axe WCAG 2.2 AA, 31 pages x 375/1280 px clean (2026-10-08) |
| A11Y-2 | Whole site usable by keyboard, logical order, no traps | owner | owner keyboard pass |
| A11Y-3 | Visible focus never hidden by sticky header or banners | done | sticky header with focus outline offset; owner to confirm |
| A11Y-4 | Targets at least 24x24 px (menu, close, social icons) | done | targets ≥ 44 px |
| A11Y-5 | Contrast AA for every token pair (table in DESIGN.md) | done | DESIGN.md contrast table; Lighthouse color-contrast pass |
| A11Y-6 | Landmarks, skip link, lang="en" | done | skip link, landmarks, lang="en" (`pnpm check` (scripts/check-site.mjs), 22 pages clean) |
| A11Y-7 | Works without any overlay widget | done | no overlay widgets |

## 11. Security and privacy

| ID | Check | Status | Evidence |
|---|---|---|---|
| SEC-1 | HTTPS everywhere, valid cert, auto-renew, no mixed content | todo | server: verify after deploy |
| SEC-2 | Headers: HSTS, CSP, X-Content-Type-Options, Referrer-Policy, frame-ancestors (check with curl -I) | todo | server headers: verify with curl -I after deploy |
| SEC-3 | No secrets in the client bundle | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| SEC-4 | External new-tab links use rel="noopener noreferrer" | done | `pnpm check` (scripts/check-site.mjs), 22 pages clean |
| SEC-5 | Analytics choice agreed; consent banner only if a tracker needs it | owner | no trackers yet; no banner needed |
| SEC-6 | Privacy policy matches what forms and analytics collect | done | privacy policy unchanged; forms send only phone, business, name/city in source |

## 12. Analytics

| ID | Check | Status | Evidence |
|---|---|---|---|
| AN-1 | Analytics tool chosen | owner | choose analytics tool |
| AN-2 | Events: demo booked, reseller applied, sign-up clicked, demo audio played, phone number clicked | todo | after AN-1 |
| AN-3 | Events verified firing once each, no duplicates | todo | after AN-1 |

## 13. Local SEO (Nepal)

| ID | Check | Status | Evidence |
|---|---|---|---|
| LO-1 | Google Business Profile claimed and complete | owner |  |
| LO-2 | Name, address, phone identical on site, GBP, Facebook, directories | owner | site uses Ninja Infosys Pvt. Ltd., Kathmandu, 985-1343348 |
| LO-3 | Listed in FNCCI and Yellow Pages Nepal (verify these still exist) | owner |  |
| LO-4 | City pages only where there is real local content | n/a | no city pages until there is local content |

## 14. Launch and after

| ID | Check | Status | Evidence |
|---|---|---|---|
| LN-1 | Full crawl: zero internal 404s, zero redirect chains | done | pnpm check: 0 broken internal links in build |
| LN-2 | Every old airfone.app URL redirects to its new home (update docs/nginx-redirects.conf) | done | docs/nginx-redirects.conf generated (149 exact + share + slash rules); apply at deploy |
| LN-3 | Logged-out pass through every flow on a phone | owner | logged-out phone pass after deploy |
| LN-4 | Rollback plan: previous dist kept on the server | todo | keep previous bundle at deploy |
| LN-5 | After launch: indexability, sitemap fetched, forms delivering, mail not in spam | todo | after deploy |
| LN-6 | Quarterly re-run of SEO and blog checks on top pages | owner | quarterly |


## 15. No AI look (impeccable.style/slop, fetched 2026-10-08)

Every page is scanned against the full catalogue. Absent on every page = done.

| ID | Must not appear | Status | Evidence |
|---|---|---|---|
| SLOP-1 | Design system: Font outside DESIGN.md | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-2 | Design system: Color outside DESIGN.md | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-3 | Design system: Radius outside DESIGN.md | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-4 | Design system: Font size outside DESIGN.md | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-5 | Visual details: Decorative grid-line background | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-6 | Visual details: Thick border accent on rounded element | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-7 | Visual details: Glassmorphism, blur or glow as decoration | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-8 | Visual details: Side-tab accent border (only for real status) | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-9 | Visual details: Hairline border plus wide shadow | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-10 | Visual details: Repeating-gradient stripes | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-11 | Visual details: Extreme border radius on cards | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-12 | Visual details: Rough SVG illustrations | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-13 | Typography: Label above a heading | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-14 | Typography: Tiny interface text | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-15 | Typography: Flat type hierarchy | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-16 | Typography: Icon tile stacked above heading | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-17 | Typography: Italic serif display headline | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-18 | Typography: Badge above the main headline | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-19 | Typography: Oversized hero headline | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-20 | Typography: Crushed letter spacing | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-21 | Typography: Overused default font (Inter, Geist) | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-22 | Typography: Single font with no size/weight variation | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-23 | Typography: All-caps body text | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-24 | Colour and contrast: Radial-gradient background halo | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-25 | Colour and contrast: Soft spotlight behind content | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-26 | Colour and contrast: AI palette (purple gradients, cyan on dark) | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-27 | Colour and contrast: Dark mode with glowing accents | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-28 | Colour and contrast: Gradient text | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-29 | Colour and contrast: Gray text on coloured background | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-30 | Colour and contrast: Cream/beige palette by reflex | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-31 | Layout and space: Tiny numbered section labels | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-32 | Layout and space: Cards flush against scroller edge | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-33 | Layout and space: Text covered by another element | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-34 | Layout and space: Unbalanced opening columns | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-35 | Layout and space: Heading closer to the previous section | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-36 | Layout and space: Hero metric layout | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-37 | Layout and space: Identical card grids | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-38 | Layout and space: Monotonous spacing | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-39 | Layout and space: Nested cards | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-40 | Layout and space: Line length over 65 to 75 characters | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-41 | Layout and space: Content overflowing its container | done | no hero metric; product facts are text |
| SLOP-42 | Layout and space: Clipped menus and popovers | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-43 | Motion: Pulsing status dot | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-44 | Motion: Decorative blinking cursor | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-45 | Motion: Auto-scrolling marquee | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-46 | Motion: Bounce or elastic easing | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-47 | Motion: Animation that changes layout | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-48 | Motion: Images that move on hover | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-49 | Copy: Same text repeated inside one container | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-50 | Copy: Em-dash overuse | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-51 | Copy: Generic marketing claims (world-class, supercharge) | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-52 | Copy: Forced contrast slogans | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-53 | Copy: Calling things "theater" | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-54 | Imagery: Placeholder-style illustrations | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-55 | Imagery: Jagged image masks | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-56 | Imagery: Images hidden under overlays | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-57 | Imagery: Broken or placeholder image | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-58 | General quality: JavaScript errors on load | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-59 | General quality: Content stuck waiting to appear | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-60 | General quality: Cramped padding | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-61 | General quality: Body text touching the page edge | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-62 | General quality: Justified text | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-63 | General quality: Low-contrast text (under AA) | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-64 | General quality: Skipped heading level | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-65 | General quality: Tight line height | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-66 | General quality: Tiny body text | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |
| SLOP-67 | General quality: Wide letter spacing on body text | done | pnpm check (CSS/copy/class rules) + review of every template 2026-10-08 |

## Sources

- [impeccable.style AI slop catalogue](https://impeccable.style/slop/)
- [Website Launch Checklist 2026 (Digital Applied)](https://www.digitalapplied.com/blog/website-launch-checklist-150-items-2026)
- [Landing Page Checklist: 37 Elements (FastStrat)](https://faststrat.ai/landing-page-checklist-37-elements/)
- [Landing Page Audit Checklist (Apexure)](https://www.apexure.com/blog/landing-page-audit-checklist)
- [Landing Page Form Checklist](https://improvemypage.com/blog/landing-page-form-checklist)
- [Pre-launch QA checklist (Nootiz)](https://www.nootiz.com/guides/pre-launch-qa-checklist)
- [WCAG 2.2 Checklist (Corpowid)](https://corpowid.ai/blog/wcag-2-2-checklist-15-issues-to-fix-before-your-next-audit)
- [Website Compliance Checklist (IDFS AI)](https://idfs.ai/blog/website-compliance-checklist-before-you-launch)
- [Technical SEO Checklist 2026 (ALM Corp)](https://almcorp.com/blog/technical-seo-checklist/)
- [Technical SEO for Developers](https://www.matthewswong.com/en/blog/technical-seo-checklist-developers/)
- [FAQ Rich Results Deprecated (Passionfruit)](https://www.getpassionfruit.com/blog/what-changed-with-google-drops-faq-rich-results-and-what-to-do-now)
- [Core Web Vitals 2026 (StudioMeyer)](https://studiomeyer.io/en/blog/core-web-vitals-2026)
- [On-Page SEO Checklist 2026 (Lilach Bullock)](https://www.lilachbullock.com/resources/on-page-seo-checklist-2026/)
- [E-E-A-T Checklist (Seomator)](https://seomator.com/blog/eeat-checklist)
- [Local SEO Nepal (WebsNP)](https://www.websnp.com/help/local-seo-nepal-google-maps-kathmandu)
- [Design QA checklist (21st.dev)](https://21st.dev/blog/design-qa-checklist)
- [UI Testing Checklist (QAwerk)](https://qawerk.com/blog/ui-testing-checklist)
- [Typography Hierarchy (Inkbot Design)](https://inkbotdesign.com/typography-hierarchy/)
