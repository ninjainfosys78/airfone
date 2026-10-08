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
| PG-1 | Home: live call demo, demo number 970-269-7774, primary CTA above the fold | todo | |
| PG-2 | One page per product (5), each with its own demo | todo | |
| PG-3 | Use-case pages (banks, shops, clinics, ISPs), each with specific content, not find-and-replace | todo | |
| PG-4 | Resellers page with application form | todo | |
| PG-5 | Book a demo / contact page | todo | |
| PG-6 | Pricing route exists with a "contact us" holding state; no prices anywhere | todo | |
| PG-7 | Blog index, post pages, tag pages, paginated pages | todo | |
| PG-8 | Author pages (one per author) linked from every post | todo | |
| PG-9 | Legal pages kept: terms, privacy, delete-account | todo | |
| PG-10 | Styled 404 page returning HTTP 404; 500 page shows no stack trace | todo | |
| PG-11 | Nepali routes (/ne/...) 301 to their English pages | todo | |
| PG-12 | Social media chat appears nowhere (nav, footer, copy, schema) | todo | |

## 2. Copy and conversion

| ID | Check | Status | Evidence |
|---|---|---|---|
| CV-1 | Each page states what AirFone does within the first screen (3 to 5 second test) | todo | |
| CV-2 | Headlines name the outcome, not the feature | todo | |
| CV-3 | One primary CTA per page, repeated lower down; at most two distinct goals | todo | |
| CV-4 | Button text says what happens ("Book a demo", not "Submit") | todo | |
| CV-5 | Proof sits next to the headline, the CTA and every form | owner | needs real customer names, numbers, quotes |
| CV-6 | Claims are specific (named customers, real numbers), no "trusted by thousands" | todo | |
| CV-7 | Real contact details visible: address, phone, email | owner | confirm official address |
| CV-8 | Copy passes the no-slop list in ~/.claude/CLAUDE.md (no eyebrows, no em-dashes, no "seamless") | todo | |
| CV-9 | Every marketed feature checked against what the product does; gaps listed for the owner | todo | |

## 3. Forms

| ID | Check | Status | Evidence |
|---|---|---|---|
| FM-1 | Demo form: 3 fields or fewer above the fold | todo | |
| FM-2 | Reseller form fields agreed with owner | owner | |
| FM-3 | Visible labels, text error messages, invalid email rejected | todo | |
| FM-4 | Privacy line and "what happens next" under every form | todo | |
| FM-5 | Server-side validation, not only in the browser | todo | |
| FM-6 | Spam protection that does not block real people | todo | |
| FM-7 | End-to-end test: submission reaches the right inbox, confirmation shown | todo | |
| FM-8 | Conversion event fires only after a successful submit | todo | |

## 4. Demo audio (ElevenLabs)

| ID | Check | Status | Evidence |
|---|---|---|---|
| AU-1 | ElevenLabs key location confirmed; never in the repo or client bundle | owner | |
| AU-2 | Clips generated once at build time, served as static files | todo | |
| AU-3 | Every clip has a text transcript on the page | todo | |
| AU-4 | Audio never autoplays; play/pause works by keyboard | todo | |
| AU-5 | Clips compressed (Opus/AAC), preload="none" | todo | |

## 5. Technical SEO

| ID | Check | Status | Evidence |
|---|---|---|---|
| SEO-1 | One trailing-slash rule, other form 301s to it | todo | |
| SEO-2 | Self-referencing canonical on every page, exact preferred URL | todo | |
| SEO-3 | One host (www or bare) and HTTPS; others 301, no redirect chains | todo | |
| SEO-4 | Unique title and meta description on every page | todo | |
| SEO-5 | Open Graph and Twitter tags plus a 1200x630 image per page | todo | |
| SEO-6 | One H1 per page, logical heading order | todo | |
| SEO-7 | sitemap.xml lists every indexable page, excludes drafts and 404s | todo | |
| SEO-8 | robots.txt allows crawling, points to sitemap; AI crawlers allowed | todo | |
| SEO-9 | Blog pages 2+ have their own titles and self canonicals | todo | |
| SEO-10 | No hreflang (single language) | n/a | English only |
| SEO-11 | RSS feed for the blog | todo | |
| SEO-12 | llms.txt (cheap, unproven signal) | todo | |
| SEO-13 | Descriptive alt text on every meaningful image | todo | |
| SEO-14 | Clean, readable URLs (/products/ai-call-agent, /blog/slug) | todo | |
| SEO-15 | Search Console and Bing Webmaster verified, sitemap submitted | owner | |

## 6. Structured data

| ID | Check | Status | Evidence |
|---|---|---|---|
| SD-1 | Organization (name, logo, sameAs links) site-wide | todo | |
| SD-2 | SoftwareApplication per product, no price fields until prices exist | todo | |
| SD-3 | Article (BlogPosting) per post with author, dates, image | todo | |
| SD-4 | BreadcrumbList on every page below home | todo | |
| SD-5 | LocalBusiness on contact, NAP identical to Google Business Profile | todo | |
| SD-6 | FAQ sections kept for readers; no reliance on FAQ rich results (retired May 2026, verify against Google docs) | todo | |
| SD-7 | Every template passes the Rich Results Test and schema validator | todo | |
| SD-8 | Schema matches visible content, no duplicates or conflicts | todo | |

## 7. Blog (Markdown)

| ID | Check | Status | Evidence |
|---|---|---|---|
| BL-1 | Posts are .md in src/content/blog with a Zod schema (title, description, date, updated, author, tags, draft, image) | todo | |
| BL-2 | Build fails on missing or wrong frontmatter | todo | |
| BL-3 | Drafts never reach the build, sitemap or RSS | todo | |
| BL-4 | Named author with linked bio on every post | todo | |
| BL-5 | Visible publish and updated dates | todo | |
| BL-6 | Topic clusters: pillar guide links to each post, each post links back | todo | |
| BL-7 | Internal links use descriptive anchor text | todo | |
| BL-8 | Every post shows first-hand experience (real calls, real numbers), no generic filler | todo | |
| BL-9 | 3 to 5 starter posts written and reviewed by owner | owner | |
| BL-10 | Reading pages render code, tables and images cleanly at phone width | todo | |

## 8. Speed (Core Web Vitals, field data at 75th percentile)

| ID | Check | Status | Evidence |
|---|---|---|---|
| CWV-1 | LCP under 2.5 s on mobile | todo | |
| CWV-2 | INP under 200 ms | todo | |
| CWV-3 | CLS under 0.1 | todo | |
| CWV-4 | Fonts self-hosted, subset, font-display swap, only used files preloaded | todo | |
| CWV-5 | Images via Astro Image with srcset, explicit sizes; hero eager + fetchpriority high, rest lazy | todo | |
| CWV-6 | No third-party script before load; analytics deferred | todo | |
| CWV-7 | Page weight budget per template recorded | todo | |
| CWV-8 | Lighthouse mobile 95+ on every template (lab), then CrUX after launch (field) | todo | |

## 9. Design quality

| ID | Check | Status | Evidence |
|---|---|---|---|
| DS-1 | Uses DESIGN.md tokens only; DESIGN.md updated with any new token | todo | |
| DS-2 | Passes the visual slop list (no gradients, glow, nested cards, eyebrows, oversized radius) | todo | |
| DS-3 | Body 16px+, secondary 14px+, line height 1.4 to 1.5 | todo | |
| DS-4 | Motion 150 to 300 ms ease-out, transforms/opacity only, content visible without JS | todo | |
| DS-5 | prefers-reduced-motion respected | todo | |
| DS-6 | Light and dark schemes both checked | todo | |
| DS-7 | Works at 320 px, 768 px, 1280 px, 1920 px with no horizontal scroll | todo | |
| DS-8 | Real product screens and photos only, no placeholder art | todo | |
| DS-9 | Favicon set, apple-touch-icon, web manifest, theme color | todo | |
| DS-10 | Type scale defined in DESIGN.md and used everywhere, no one-off sizes | todo | |
| DS-11 | Prose measure 45 to 75 characters per line on blog and long copy | todo | |
| DS-12 | True quotes, apostrophes and ellipses (no straight substitutes); no em-dashes in copy | todo | |
| DS-13 | Spacing from one 4/8 px scale, no ad-hoc values | todo | |
| DS-14 | Edges align to one grid; section gaps clearly larger than inner gaps | todo | |
| DS-15 | Hierarchy carried by size and weight first, brand green used sparingly | todo | |
| DS-16 | Shared components (header, footer, CTA band, demo player, form) identical on every page | todo | |
| DS-17 | No awkward breaks between breakpoints (drag-resize 320 to 1920) | todo | |
| DS-18 | Hover, focus, active, disabled, loading and error states designed for every control | todo | |
| DS-19 | Hover degrades cleanly on touch; tap targets 44 px on mobile | todo | |
| DS-20 | Empty and edge states: no blog posts in a tag, very long titles, missing images, audio fails to load | todo | |
| DS-21 | Layout varies by meaning; no identical card grid repeated on every page | todo | |
| DS-22 | Print styles for blog posts and legal pages | todo | |
| DS-23 | Each item marked pass, fail or n/a; a missing reference is a question, not a pass | todo | |

## 10. Accessibility (WCAG 2.2 AA)

| ID | Check | Status | Evidence |
|---|---|---|---|
| A11Y-1 | axe-core clean on every template and key state | todo | |
| A11Y-2 | Whole site usable by keyboard, logical order, no traps | todo | |
| A11Y-3 | Visible focus never hidden by sticky header or banners | todo | |
| A11Y-4 | Targets at least 24x24 px (menu, close, social icons) | todo | |
| A11Y-5 | Contrast AA for every token pair (table in DESIGN.md) | todo | |
| A11Y-6 | Landmarks, skip link, lang="en" | todo | |
| A11Y-7 | Works without any overlay widget | todo | |

## 11. Security and privacy

| ID | Check | Status | Evidence |
|---|---|---|---|
| SEC-1 | HTTPS everywhere, valid cert, auto-renew, no mixed content | todo | |
| SEC-2 | Headers: HSTS, CSP, X-Content-Type-Options, Referrer-Policy, frame-ancestors (check with curl -I) | todo | |
| SEC-3 | No secrets in the client bundle | todo | |
| SEC-4 | External new-tab links use rel="noopener noreferrer" | todo | |
| SEC-5 | Analytics choice agreed; consent banner only if a tracker needs it | owner | |
| SEC-6 | Privacy policy matches what forms and analytics collect | todo | |

## 12. Analytics

| ID | Check | Status | Evidence |
|---|---|---|---|
| AN-1 | Analytics tool chosen | owner | |
| AN-2 | Events: demo booked, reseller applied, sign-up clicked, demo audio played, phone number clicked | todo | |
| AN-3 | Events verified firing once each, no duplicates | todo | |

## 13. Local SEO (Nepal)

| ID | Check | Status | Evidence |
|---|---|---|---|
| LO-1 | Google Business Profile claimed and complete | owner | |
| LO-2 | Name, address, phone identical on site, GBP, Facebook, directories | owner | |
| LO-3 | Listed in FNCCI and Yellow Pages Nepal (verify these still exist) | owner | |
| LO-4 | City pages only where there is real local content | todo | |

## 14. Launch and after

| ID | Check | Status | Evidence |
|---|---|---|---|
| LN-1 | Full crawl: zero internal 404s, zero redirect chains | todo | |
| LN-2 | Every old airfone.app URL redirects to its new home (update docs/nginx-redirects.conf) | todo | |
| LN-3 | Logged-out pass through every flow on a phone | todo | |
| LN-4 | Rollback plan: previous dist kept on the server | todo | |
| LN-5 | After launch: indexability, sitemap fetched, forms delivering, mail not in spam | todo | |
| LN-6 | Quarterly re-run of SEO and blog checks on top pages | todo | |

## Sources

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
