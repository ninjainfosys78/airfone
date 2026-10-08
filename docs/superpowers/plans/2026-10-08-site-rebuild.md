# airfone.app Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans (native) task by task. Steps use `- [ ]`.
> On approval this file is copied to `airfone-landing-site/docs/superpowers/plans/2026-10-08-site-rebuild.md` and committed.

**Goal:** Replace airfone.app with a premium, English-only, AirFone-branded marketing site for five products, with ElevenLabs demo calls, a Markdown blog and complete technical SEO, passing every row of the launch ledger.

**Architecture:** Same repo (`~/Development/code/airfone-landing-site`), same Astro static build and eShasan route-bundle deploy (`scripts/make-bundle.mjs`). Astro 4 → 5 for the content layer. Zero JS by default; three small islands (call player, chat demo, forms) written as plain TS custom elements, not React. All page metadata flows through one `Seo.astro`; all copy and product facts live in typed data files so pages stay thin.

**Tech stack:** Astro 5, `@astrojs/sitemap`, `@astrojs/rss`, Zod (via `astro:content`), Vitest (unit), a Node `scripts/check-site.mjs` that audits `dist/`, `@axe-core/cli` + Lighthouse CI for a11y and speed, ElevenLabs TTS API + `ffmpeg` for audio.

**Spec:** `docs/superpowers/specs/2026-10-08-site-rebuild-design.md` · **Ledger:** `docs/superpowers/specs/2026-10-08-site-rebuild-ledger.md` (192 rows)

## Context

The owner wants airfone.app redesigned completely: premium, modern, AirFone's own brand (app colours, cloud mark), no AI look (impeccable.style catalogue), English only, five products (no social chat), no prices yet, honest proof (labelled example calls voiced with ElevenLabs, the real Pathibhara call), a .md blog, and SEO done to every edge case. The spec and the 192-row ledger were approved in conversation on 2026-10-08.

## Global constraints (verbatim from spec)

- English only. `lang="en"`. `/ne/*` → 301 to English pages.
- Products, exact names: Voice agent for your website · Chatbot for your website · AI call agent (inbound) · Business phone system (IP/PBX) · AI phone system (inbound and outbound). Social media chat appears nowhere.
- No prices anywhere, including JSON-LD `offers`.
- Tokens: `--canvas #F7F7F8`, `--surface #FFFFFF`, `--subtle #EFEFF1`, `--line #E2E2E6`, `--ink #15181F`, `--brand #2F4F08`, `--lime #8BC53E`, `--on-lime #0D1502`. Nothing outside DESIGN.md.
- Instrument Sans only (self-hosted); JetBrains Mono for numbers in product screens. Display 56–72px desktop, 36–40px phone, weight 600, headline ≤ ~8 words. Body 18px (16px < 480px), secondary 16px, floor 14px, letter-spacing 0, sentence case.
- Radius 8px controls, 12px panels. Border or nothing; no `box-shadow`.
- Motion 150–250ms ease-out, opacity/transform only; off under `prefers-reduced-motion`; content visible without JS.
- No AI look: all 67 SLOP rows + `~/.claude/CLAUDE.md` slop list. No em-dashes in copy.
- No bylines (owner, 2026-10-08): no subtitle or tagline line under headings, no lead paragraph restating the heading, no section intro sentences, no author bylines on posts. A heading is followed directly by the content it names. A supporting line is allowed only on the home hero, and only if it states a fact the headline does not (the owner can veto that too).
- Proof is honest: "Example call · <Business>" or "Real call · Pathibhara". No invented customers, quotes, numbers.
- Canonical host `https://airfone.app`, no trailing slash except `/`.
- ElevenLabs key only in git-ignored `.env`; never in `src/`, `public/` or the bundle. Free-tier clips are drafts (AU-6).
- Demo number 970-269-7774. Contact phone and email from `src/config/site.ts`.
- Owner rules: no local screenshot/preview tests (owner reviews UI live); commit and show each finished piece; never rebuild just to show a UI change (dev server hot-reloads).

## Review focus (failure modes no happy-path test covers)

1. **JS disabled or the player island fails** → transcript and a native `<audio controls>` still work. Test: Task 3 renders the player with no script and asserts `<audio controls>` + full transcript in HTML.
2. **Form submitted twice / backend down / rate limited (`{"status":"rate_limited"}`)** → one request in flight, a clear retry message, input kept. Test: Task 7 unit tests `submitLead` against mocked 429/500/network error.
3. **Blog post with a missing field, a draft, or a tag with one post** → build fails on missing field; draft absent from pages, sitemap, RSS; tag page still renders with correct canonical. Test: Task 8 fixtures.
4. **Old URLs and slash variants** (`/features`, `/ne/pricing`, `/blog/x/`) → single 301 to the right page, never a chain or 200 duplicate. Test: Task 9 `check-site` redirect map assertions + nginx conf lint.
5. **Very long content** (long post title, long product name at 320px, transcript with a 200-char line) → wraps, no horizontal scroll. Test: Task 10 `check-site` flags any element wider than viewport via axe + a 320px Lighthouse run; plus long-title fixture in Task 8.

---

## File structure

```
src/
  styles/tokens.css            # rewritten: spec tokens, light + dark
  styles/base.css              # reset, type scale, spacing scale, focus ring
  layouts/Base.astro           # html shell, Seo, header, footer, skip link
  components/seo/Seo.astro     # title, desc, canonical, OG, Twitter, JSON-LD
  lib/seo.ts                   # pure: canonicalFor(), titleFor(), jsonLd builders
  lib/lead.ts                  # pure: validateLead(), submitLead()
  data/products.ts             # 5 products: slug, name, promise, story, demo ref, faq
  data/solutions.ts            # banks, shops, clinics, isps
  data/nav.ts                  # header + footer links
  components/site/Header.astro, Footer.astro, CtaBand.astro
  components/player/CallPlayer.astro + call-player.ts   # island
  components/demos/ChatDemo.astro + chat-demo.ts         # island
  components/demos/PhoneMenu.astro, OutboundTimeline.astro (static)
  components/forms/LeadForm.astro + lead-form.ts         # island
  content.config.ts            # blog + authors collections (Astro 5)
  content/blog/*.md
  pages/index.astro, products/[slug].astro, solutions/[slug].astro,
        resellers.astro, demo.astro, contact.astro, pricing.astro,
        blog/[...page].astro, blog/[slug].astro, blog/tag/[tag].astro,
        rss.xml.ts, og/[...slug].png.ts,
        terms.astro, privacy.astro, delete-account.astro, 404.astro
scripts/voices/*.json          # clip scripts
scripts/make-voices.mjs        # ElevenLabs → public/audio/*.opus|m4a|json
scripts/check-site.mjs         # audits dist/ against ledger rows
tests/*.test.ts                # vitest
public/audio/                  # generated clips (committed)
docs/nginx-redirects.conf      # extended
DESIGN.md                      # rewritten to the new tokens
```

Removed: Lingui, React, Radix, TipTap, dnd-kit and other unused deps; `src/pages/ne/**`, auth pages (become redirects in nginx), teaser mode (`TEASER`, `TeaserBody`, `LaunchBand`), Mukta and Noto Serif Devanagari.

Reused: `src/config/site.ts` (`SITE_URL`, `APP_URL`, `WAITLIST_API_URL`, `CONTACT_*`, `DEMO_AUDIO_URL` for the Pathibhara call), `public/brand/*` logos, `src/assets/photos/*`, `scripts/make-bundle.mjs`, `docs/nginx-redirects.conf`, current legal copy in `TermsBody`/`PrivacyBody`/`DeleteAccountBody`.

Lead capture reuses the live `POST /api/waitlist` (`airfone/backend/crates/api/src/routes/waitlist.rs`, fields `phone, business_name, business_type, source, utm_*, website (honeypot), consent`; returns `rate_limited` with `retry_after`). Demo form sends `source=demo`, reseller form `source=reseller`. No backend change.

---

## Tasks

Each task ends with: `pnpm test` green, `pnpm build` green, `node scripts/check-site.mjs` green for the rows it owns, ledger rows updated with evidence, commit, owner looks at it on the dev server.

### Task 1: Foundation — Astro 5, tokens, base layout, Seo
**Files:** modify `package.json`, `astro.config.mjs`, `src/styles/tokens.css`, `DESIGN.md`; create `src/styles/base.css`, `src/layouts/Base.astro`, `src/components/seo/Seo.astro`, `src/lib/seo.ts`, `src/components/site/{Header,Footer}.astro`, `src/data/nav.ts`, `vitest.config.ts`, `tests/seo.test.ts`.
**Produces:** `canonicalFor(path: string): string`, `titleFor(page?: string): string` (`"<page> · AirFone"` or `"AirFone"`), `orgJsonLd()`, `breadcrumbJsonLd(items: {name,path}[])`, `softwareJsonLd(p: Product)`, `articleJsonLd(post)` (author = AirFone Organization), `localBusinessJsonLd()`; `<Base title description path image? jsonLd? noindex?>`.
- [ ] Write `tests/seo.test.ts`: `canonicalFor('/blog/')` → `https://airfone.app/blog`; `canonicalFor('/')` → `https://airfone.app/`; `canonicalFor('/Pricing?x=1')` → `https://airfone.app/pricing`; `softwareJsonLd` has no `offers` key; `orgJsonLd().logo` absolute URL.
- [ ] Run `pnpm vitest run` → FAIL (module missing).
- [ ] `pnpm add astro@^5 @astrojs/sitemap@latest @astrojs/rss && pnpm add -D vitest`; remove Lingui/React/Radix/TipTap/dnd-kit/Mukta/Noto deps and `@astrojs/react` integration; set `trailingSlash: 'never'`, `build.format: 'file'`, `site: 'https://airfone.app'`.
- [ ] Implement `src/lib/seo.ts` (pure functions above) and `Seo.astro` (title, description, canonical, og:*, twitter:*, `<script type="application/ld+json">` of `[orgJsonLd(), ...jsonLd]`, robots noindex when asked).
- [ ] Rewrite `tokens.css` to the spec tokens (+ dark scheme, `--ink-muted` picked to ≥ 4.5:1 on canvas and surface, computed and written into DESIGN.md contrast table); `base.css`: spacing scale 4/8/12/16/24/32/48/64/96/128, type scale from constraints, focus ring 2px `--brand` offset 2px, `@media (prefers-reduced-motion)`.
- [ ] Header (wide lockup, Products menu, Solutions, Resellers, Blog, primary "Book a demo"; mobile disclosure menu with `<details>`, 44px targets) and Footer (index of every page, cloud mark, address/phone/email from `site.ts`, legal links).
- [ ] `pnpm vitest run` → PASS; `pnpm build` → PASS. Rewrite DESIGN.md (tokens, contrast, type, spacing, radius, motion, "no AI look" pointer).
- [ ] Commit `feat: Astro 5 foundation, AirFone tokens, base layout and Seo`. Ledger: SEO-2/4/5/6, SD-1, DS-1/3/9/10/13, A11Y-5/6.

### Task 2: check-site auditor
**Files:** create `scripts/check-site.mjs`, `tests/check-site.test.ts`, `tests/fixtures/dist-bad/*.html`; modify `package.json` (`"check": "node scripts/check-site.mjs dist"`).
**Produces:** CLI exiting non-zero with `ROW-ID path: message` lines. Checks on every HTML file in `dist/`: one `<h1>`; no skipped heading level; unique `<title>` and meta description (120–160 chars); canonical equals `canonicalFor(path)`; og:image present; JSON-LD parses, no `offers`; every internal `href` resolves to a file in `dist/` (no trailing slash form); no text matching `/—|--|social media chat|whatsapp|instagram|messenger|viber|world-class|supercharge|seamless|unlock|elevate|effortless/i`; no `Rs\s?\d` (no prices); no `<p>` directly after an `<h1>`/`<h2>` whose class marks it a subtitle/lead (`.lead`, `.subtitle`, `.byline`, `.eyebrow`) and no such classes in the source; no `box-shadow`, `linear-gradient`, `radial-gradient`, `backdrop-filter`, `letter-spacing:\s*-` in built CSS; every colour literal in CSS is in DESIGN.md; no `ELEVENLABS`/`sk_` string anywhere in `dist/`; `<img>` has `alt`, `width`, `height`.
- [ ] Write fixture pages violating each rule and `tests/check-site.test.ts` asserting each row ID is reported; one clean fixture reports nothing.
- [ ] Run → FAIL. Implement with `node-html-parser` (dev dep). Run → PASS.
- [ ] Commit `feat: check-site auditor for ledger rows`. Ledger: evidence column for rows it covers now reads `pnpm check`.

### Task 3: Call player + audio pipeline (draft clips)
**Files:** create `scripts/voices/{clinic,bank,shop,isp,voice-agent,phone-menu,outbound}.json`, `scripts/make-voices.mjs`, `src/components/player/CallPlayer.astro`, `src/components/player/call-player.ts`, `tests/call-player.test.ts`, `tests/make-voices.test.ts`; output `public/audio/*`.
**Interfaces:** clip script `{ id, label: "Example call · Clinic", lines: [{ speaker: "agent"|"caller", voice: string, text: string }] }`; timing file `{ id, label, duration, lines: [{ speaker, text, start, end }] }`; `<CallPlayer clip="clinic" />` and `<CallPlayer src={DEMO_AUDIO_URL} transcript={...} label="Real call · Pathibhara" />`.
- [ ] Ask the owner to pick voices: list library voices with the key (`GET /v2/voices?category=premade&page_size=100`), shortlist 2 agent + 3 caller voices, generate one 10-second sample each (~1,000 chars total), owner chooses. Record IDs in `scripts/voices/voices.json`.
- [ ] Write the four example-call scripts (clinic booking; bank FD enquiry ending in handover to a person; shop laptop price and stock; ISP outage then ticket) and three product clips. Each ≤ 900 chars; total ≤ 9,000 (free quota 10,000). Copy follows slop rules.
- [ ] `tests/make-voices.test.ts`: `planClip(script)` returns per-line requests; `stitch(lines, gapsMs=350)` returns cumulative `start/end`; total chars counted and the script refuses to run if over `--budget`. Run → FAIL.
- [ ] Implement `make-voices.mjs`: reads key from `.env` only; `POST /v1/text-to-speech/{voice}` with `eleven_multilingual_v2`, `output_format=mp3_44100_128`; caches by hash so reruns cost nothing; `ffmpeg` concat with 350ms gaps, `loudnorm=I=-16:TP=-1.5`, outputs `.opus` (64k) and `.m4a` (96k); writes timing JSON from per-line durations (`ffprobe`). Prints chars used. Run → PASS, then generate.
- [ ] `tests/call-player.test.ts` (Astro container API): rendered HTML contains `<audio controls preload="none">` with both sources, the label, and every transcript line as text (Review focus 1).
- [ ] Implement `CallPlayer.astro` (static markup: label, native audio, transcript `<ol>`) and `call-player.ts` custom element that, when JS runs, swaps native controls for a play/pause `<button aria-pressed>`, a slim waveform (`<canvas>` drawn from a precomputed peaks array in the timing JSON, lime while playing, `--line` otherwise), and highlights/fades in the current line by `timeupdate`. Space/Enter toggle; respects reduced motion; on `error` restores native controls and shows "Audio couldn't load. The transcript is below."
- [ ] Commit (audio files included) `feat: call player and ElevenLabs demo clips (drafts)`. Ledger: AU-2..5, DS-18/20.

### Task 4: Home
**Files:** create `src/pages/index.astro`, `src/components/home/*.astro` (Hero, ProductIndex, HowItWorks, Proof, Closing), `src/components/site/CtaBand.astro`; modify `src/data/products.ts` (create).
**Produces:** `products: Product[]` with `{ slug, name, short, promise, demo: {kind: 'call'|'chat'|'menu'|'outbound', clip?}, sections, faq }`.
- [ ] Hero: one ≤ 8-word headline about answering every call, no subtitle, "Book a demo" + "Call 970-269-7774" (`tel:`), CallPlayer (clinic) on the `--brand` stage with the cloud outline behind it. No badge, no eyebrow, no stats.
- [ ] ProductIndex: five products as a typographic index (name, one line, arrow link), not cards. HowItWorks: three steps as a numbered list only because it is a real sequence. Proof: Real call · Pathibhara player + facts true of the product ("Speaks Nepali on calls", "Answers 15 calls at once", "Hands over to a person mid-call"); hidden `<Testimonials>` slot rendering nothing when `data/testimonials.ts` is empty. Closing CTA band.
- [ ] `pnpm build && pnpm check` → green. Owner reviews live. Commit `feat: home page`. Ledger: PG-1, CV-1..4, CV-6, SLOP rows for this page.

### Task 5: Product pages
**Files:** create `src/pages/products/[slug].astro`, `src/components/demos/{ChatDemo.astro,chat-demo.ts,PhoneMenu.astro,OutboundTimeline.astro}`, `tests/products.test.ts`.
- [ ] `tests/products.test.ts`: exactly 5 products, exact spec names, unique slugs (`website-voice-agent`, `website-chatbot`, `ai-call-agent`, `phone-system`, `ai-phone-system`), each has a demo and ≥ 3 FAQ, none mentions price or social channels. FAIL → fill `products.ts` → PASS.
- [ ] Page template: problem → product's own demo → what you get (prose + short list, not a card grid) → FAQ (`<details>`) → CTA. Demo by kind: voice agent and AI call agent use CallPlayer (AI call agent also shows the Pathibhara call); chatbot uses ChatDemo (scripted messages revealed on view, full transcript in HTML without JS); phone system uses PhoneMenu (static diagram of a menu routing a call, real HTML not an image) + clip; AI phone system uses OutboundTimeline (reminder call, answer, handover) + clip.
- [ ] JSON-LD `softwareJsonLd` + breadcrumbs. Build + check green; owner reviews. Commit `feat: five product pages`. Ledger: PG-2, SD-2/4, CV-9 (list of marketed features vs built, appended to spec §9 for the owner).

### Task 6: Solutions, resellers, contact, pricing placeholder
**Files:** create `src/data/solutions.ts`, `src/pages/solutions/[slug].astro`, `src/pages/resellers.astro`, `src/pages/contact.astro`, `src/pages/pricing.astro`.
- [ ] Four solutions, each with its own example call (bank, shop, clinic, isp clips) and copy specific to that business (what calls they get, what AirFone does with them). Test in `tests/solutions.test.ts`: no two solutions share more than 30% of their body sentences.
- [ ] Resellers: why, how it works, LeadForm (`source=reseller`, fields agreed with owner, default name/phone/business/city). Contact: address, phone, email, map link, `localBusinessJsonLd()`. Pricing: "Pricing is set for your call volume", demo CTA, no numbers, `noindex` until prices exist.
- [ ] Build + check; owner reviews. Commit. Ledger: PG-3..6, SD-5.

### Task 7: Lead forms
**Files:** create `src/lib/lead.ts`, `src/components/forms/{LeadForm.astro,lead-form.ts}`, `src/pages/demo.astro`, `tests/lead.test.ts`.
**Produces:** `validateLead(f: {name, phone, business}): Record<string,string>` (field → message); `submitLead(url, body, fetchImpl): Promise<{ok:true}|{ok:false, kind:'rate_limited'|'server'|'network', retryAfter?}>`.
- [ ] `tests/lead.test.ts`: Nepali mobile `98XXXXXXXX`/`+97798…` valid, 7 digits invalid, empty name invalid; `submitLead` maps 200 → ok, `{"status":"rate_limited","retry_after":60}` → rate_limited 60, 500 → server, thrown fetch → network (Review focus 2). FAIL → implement → PASS.
- [ ] LeadForm: real `<form method="post" action={WAITLIST_API_URL}>` works without JS; island adds inline validation, disables submit while in flight, keeps input on error, shows "We'll call you within one working day" on success, honeypot `website`, `consent` checkbox with privacy link, UTM passthrough.
- [ ] `/demo` page (3 fields). End-to-end once against production endpoint with `source=demo-test` and phone `9800000000`, then ask the owner before deleting that row via `/api/admin/waitlist/:phone`. Commit. Ledger: FM-1..8.

### Task 8: Blog
**Files:** create `src/content.config.ts`, `src/content/blog/*.md` (4 drafts), `src/pages/blog/[...page].astro`, `src/pages/blog/[slug].astro`, `src/pages/blog/tag/[tag].astro`, `src/pages/rss.xml.ts`, `src/lib/blog.ts`, `tests/blog.test.ts`, `tests/fixtures/blog/*`.
**Produces:** `publishedPosts(): Promise<Post[]>` (drafts out, newest first), `postsByTag(tag)`, `pagePath(n)` (`/blog`, `/blog/page/2`).
- [ ] Schema: `title`, `description` (min 120, max 160, meta only, never printed under the title), `date`, `updated?`, `tags` (≥1), `draft` (default false), `image`, `imageAlt`.
- [ ] `tests/blog.test.ts`: drafts excluded; sort order; `pagePath`; tag with one post works; fixture with a missing description makes `astro build` fail (spawned build in a temp copy) (Review focus 3); 120-char title renders without overflow class issues (Review focus 5). FAIL → implement → PASS.
- [ ] Post layout: 680px measure, no byline, published/updated dates, prose styles, tables scroll in their own region, print CSS, related posts by tag, pillar ↔ post links. Paginated pages titled "Blog, page N" with self canonical. RSS excludes drafts.
- [ ] Write the 4 starter posts as `draft: true`; owner reviews and flips them. Commit. Ledger: PG-7, PG-8 n/a and BL-4 n/a (owner: no bylines; BlogPosting author = Organization AirFone), BL-1..3, BL-5..10, SEO-9/11, SD-3.

### Task 9: Redirects, 404, sitemap, robots, llms.txt, OG images
**Files:** modify `docs/nginx-redirects.conf`, `astro.config.mjs` (sitemap filter), `public/robots.txt`, `public/llms.txt`; create `src/pages/404.astro`, `src/pages/og/[...slug].png.ts` (satori + `@resvg/resvg-js`, brand colours, cloud mark, page title); delete `src/pages/ne/**`, auth/teaser pages.
- [ ] Redirect map in `scripts/redirects.mjs` (single source): `/features`,`/platform`,`/services`→`/products/ai-call-agent` etc., `/about`→`/`, `/upcoming`,`/waitlist/thanks`→`/demo`, `/ne`→`/`, `/ne/(.*)`→`/$1` mapped, auth pages→`APP_URL` equivalents, any `/(.+)/$`→`/$1`. Generates the nginx conf. `tests/redirects.test.ts`: no target is itself a source (no chains), every target exists in `dist/` or is `APP_URL` (Review focus 4).
- [ ] 404 page (styled, links to home, products, blog); confirm nginx `error_page 404 /404.html` returns status 404. Sitemap excludes `noindex` routes and drafts. robots.txt allows all incl. GPTBot/ClaudeBot/PerplexityBot, points at sitemap. llms.txt lists products, solutions and posts.
- [ ] Commit. Ledger: PG-10/11, SEO-1/3/7/8/12/14, LN-2.

### Task 10: Quality gates
**Files:** create `.lighthouserc.json`, `scripts/a11y.sh`; modify `package.json` (`"qa": "pnpm build && pnpm check && pnpm a11y && pnpm lhci"`).
- [ ] `@axe-core/cli` over every built page served by `astro preview` → 0 violations. Keyboard pass by owner (A11Y-2/3).
- [ ] Lighthouse CI mobile on one page per template: performance ≥ 95, accessibility 100, SEO 100, best practices 100; budgets: JS ≤ 30 KB, CSS ≤ 40 KB, fonts ≤ 2 files preloaded.
- [ ] Rich Results Test and validator.schema.org on one URL per template after deploy (manual, record URLs in ledger).
- [ ] Walk SLOP-1..67 per page; mark each with evidence. Commit. Ledger: CWV-*, A11Y-*, SD-7/8, SLOP-*.

### Task 11: Launch
- [ ] Owner tasks surfaced in one list: paid ElevenLabs plan then `node scripts/make-voices.mjs --final` (AU-6), proof/testimonials, official address, analytics tool, Search Console/Bing, Google Business Profile, directory listings, reseller form fields, blog sign-off.
- [ ] `PUBLIC_SITE_MODE` removed; `pnpm bundle` and deploy through the existing route-bundle pipeline only after the owner says go. Keep previous bundle for rollback (LN-4).
- [ ] After deploy: `curl -I` headers (SEC-1/2), crawl for 404s and chains (LN-1), redirects, sitemap fetch, one real demo submission, phone logged-out pass (LN-3/5). Ledger final pass: every row `done`, `n/a` with reason, or `owner`.

## Verification (end to end)

1. `pnpm test` — all Vitest suites green (seo, check-site, make-voices, call-player, products, solutions, lead, blog, redirects).
2. `pnpm qa` — build, `check-site` (0 findings), axe (0 violations), Lighthouse budgets met.
3. `grep -rE 'sk_|ELEVENLABS' dist/` → nothing.
4. Owner reviews each task on the dev server (hot reload, no rebuilds just to show UI).
5. Ledger: count of `todo` rows = 0 before launch.

## Execution

Recommended: **Native** (I build every task in this session, one fresh reviewer at the end). The tasks share a small set of interfaces (`seo.ts`, `products.ts`, `CallPlayer`, `LeadForm`) and build on each other in order, and the owner reviews each piece live anyway, so per-task subagent reviews would add cost without catching much more.
