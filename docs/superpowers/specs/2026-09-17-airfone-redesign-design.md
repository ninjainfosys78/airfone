# AirFone landing site redesign

Date: 2026-09-17. Launch: 28 September 2026.

## Decisions

- Brand: **AirFone**. Replace every "Airfone", "SmartIVRAI", "eShasan" string in user-facing output.
- Audience: Nepali small businesses (shops, online stores, clinics, schools, restaurants). No enterprise features.
- Language: Nepali is the default at `/`. English lives at `/en/`.
- Pages per locale: home, pricing, contact, privacy, waitlist thanks, 404.
- Pre-launch CTA: waitlist. After launch: "Try it free" to `https://app.airfone.app`.
- Visual direction: light, friendly page with one dark band for the call demo. Follows the system color scheme. No theme toggle.
- Must pass every rule in `~/.claude/CLAUDE.md` "No AI slop" and https://impeccable.style/slop/.
- Honest content only: no invented stats, no testimonials we don't have, no prices, WhatsApp stated as "coming soon".

## Config (`src/config/site.ts`)

All build-time, from `import.meta.env`:

| Name | Default | Use |
|---|---|---|
| `PUBLIC_LAUNCHED` | `false` | Switches CTA from waitlist to app sign-up |
| `PUBLIC_APP_URL` | `https://app.airfone.app` | App links |
| `PUBLIC_WAITLIST_API_URL` | `https://app.airfone.app/api/waitlist` | Form endpoint |
| `PUBLIC_DEMO_AUDIO_URL` | empty | Recording URL (hosted outside the bundle, which rejects audio) |
| `PUBLIC_DEMO_FIXTURE` | `false` | Dev only: renders the demo band with the planned script and no audio |

Constants: launch date `2026-09-28`, contact email `info@airfone.app`, contact phone `+9779858042433` (display ne: `९८५८०४२४३३`, en: `985-8042433`, link `tel:+9779858042433`).

## Routing and redirects

- `astro.config.mjs` i18n: `defaultLocale: 'ne'`, `locales: ['ne', 'en']`, `prefixDefaultLocale: false`.
- Pages: `src/pages/{index,pricing,contact,privacy,404}.astro`, `src/pages/waitlist/thanks.astro`, and the same under `src/pages/en/`.
- Page bodies live in shared components taking `locale`; route files are thin.
- Redirect pages (static HTML with `<meta http-equiv="refresh">`, `rel="canonical"` to the target, `noindex`, and a visible link):
  - `/ne/` → `/`, `/ne/pricing/` → `/pricing/`, `/ne/contact/` → `/contact/`
  - `/features/`, `/platform/`, `/services/`, `/about/` → `/en/`
  - `/ne/features/`, `/ne/platform/`, `/ne/services/`, `/ne/about/` → `/`
  - Auth routes (`login`, `register`, `forgot-password`, `reset-password`, `verify*`) in both old locales → `https://app.airfone.app/<same stem>/`
  - `/share/<token>/` and `/ne/share/<token>/` → client-side redirect to `https://app.airfone.app/share/<token>/`
- `docs/nginx-redirects.conf`: the same map as real 301s, for whoever owns nginx.
- `robots.txt`: allow all, disallow `/waitlist/`, `/en/waitlist/`, point to the sitemap.
- Sitemap: exclude redirect pages, thanks pages and 404. Include `ne`/`en` alternates.

## Design system

### Color tokens (`src/styles/tokens.css`)

Light (default):

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FCFCF9` | Page background |
| `--surface` | `#FFFFFF` | Form panel |
| `--ink` | `#16190F` | Headings, body |
| `--ink-muted` | `#4A5042` | Secondary text (>= 7:1 on paper) |
| `--line` | `#E1E4D9` | Dividers, input borders |
| `--brand` | `#8BC53E` | Primary button fill, active transcript marker. Never text on light. |
| `--on-brand` | `#1B2A06` | Text on `--brand` |
| `--brand-ink` | `#40680B` | Links, focus ring, small accents |
| `--night` | `#141A0D` | Demo band background |
| `--night-ink` | `#EEF2E6` | Text on night |
| `--night-muted` | `#B6BEA8` | Secondary text on night |
| `--night-line` | `#2C3520` | Dividers on night |
| `--night-brand-ink` | `#A6D86A` | Links on night |

Dark scheme (`prefers-color-scheme: dark`): `--paper #10140B`, `--surface #171D10`, `--ink #EEF2E6`, `--ink-muted #B3BBA6`, `--line #2A3220`, `--brand-ink #A6D86A`, `--night #0A0D07`. `--brand` and `--on-brand` stay.

### Type

- Headings: **IBM Plex Serif** (Latin) + **Noto Serif Devanagari** (Nepali), weights 600 and 700 (matches chaudandigadhi.digprofile.com, chosen by the user).
- Body: **Mukta** (covers Devanagari and Latin), weights 400 and 600.
- Self-hosted via `@fontsource`, `font-display: swap`. No Google Fonts request. No Inter.
- Scale: body 18px (16px under 480px), secondary 16px, h3 22px, h2 `clamp(1.75rem, 3vw, 2.5rem)`, h1 `clamp(2.25rem, 4.5vw, 3rem)` (impeccable: hero headline <= 48px).
- Line height: body 1.55, headings 1.2. Letter spacing 0 everywhere.
- Max text width 62ch.

### Shape and motion

- Radius: 8px buttons and inputs, 12px panels. One panel style: 1px `--line` border, no shadow.
- Motion: color and background transitions only, 150ms ease-out. No scroll reveals, no marquee, no pulsing, no hover zoom. `prefers-reduced-motion` removes the rest.
- Layout: max width 1120px, 16px side gutter on mobile, 32px on desktop. Section spacing varies (96px, 72px, 120px) by content weight.

### Logo

- `public/brand/airfone-mark.svg`: SVG 2, viewBox cropped to the cloud.
- `public/brand/airfone-lockup.svg`: horizontal lockup, mark left of the wordmark paths taken from SVG 1. Gray fill uses `currentColor`-free explicit `#7C7C7C` on light.
- `public/brand/airfone-lockup-light.svg`: same with white "Fone", for the dark scheme and the demo band.
- `public/favicon.svg` from the mark. `public/apple-touch-icon.png` 180px. `public/og.png` 1200x630: mark and wordmark centered on `--paper`.

## Components

- `Layout.astro`: head (SEO, fonts, tokens), header, footer. Replaces `BaseLayout.astro`.
- `SiteHeader.astro`: lockup; links Pricing, Contact; language switch to the same page in the other locale (text "English" / "नेपाली", `hreflang`, `lang` attributes); CTA. Mobile: lockup, language switch, CTA button; Pricing and Contact move to the footer and a simple disclosure menu (`<details>`), no JS.
- `SiteFooter.astro`: stacked logo, links (Pricing, Contact, Privacy), email, phone, language switch, "© 2026 AirFone".
- `WaitlistForm.astro`: progressive enhancement. Plain `<form method="post" action={WAITLIST_API_URL}>` works without JS. Inline script sends JSON, shows states. Fields: mobile number (required, `inputmode="tel"`, `autocomplete="tel"`), business type (optional select), email (optional), consent checkbox (required), hidden honeypot `website`, hidden `locale`, `source`, UTM fields from the URL. Client validation mirrors the API: strip separators, drop `+977`/`977`/`00977`, convert Devanagari digits, match `^9[678]\d{8}$`. States: idle, submitting (button disabled, label changes), created, already_on_list, has_account (link to app sign-in), invalid (per-field message under the field, `aria-describedby`, focus first invalid), rate_limited, network/server error (keep input, retry). Messages are localized in the component. Unique ids per instance.
- `DemoCall.astro` + `DemoPlayer` island (vanilla TS, no React): play/pause button, seek bar (`input type=range`), elapsed/total time, transcript list. Transcript is server-rendered HTML. The script highlights the current line (`aria-current`, brand marker bar at left of the line, no scrolling of the page). Clicking a line seeks to it. Audio `preload="none"`. If `DEMO_AUDIO_URL` is empty or fails, the player hides and the transcript remains.
- `src/data/demo-call.ts`: `{ business, lines: { speaker: 'caller' | 'agent', start: number, ne: string, en: string }[] }`. Empty until the recording arrives. `PUBLIC_DEMO_FIXTURE=true` uses `demo-call.fixture.ts` for local design review only; the production build fails if the fixture flag is set.
- `Redirect.astro`: used by all redirect pages.
- `StructuredData.astro`: JSON-LD per page.

## Homepage content

Order and copy. Nepali is the source; English is the `/en/` version.

1. **Hero** (light). Two columns on desktop (text left, form panel right), stacked on mobile.
   - h1 ne: ग्राहकका फोन अब छुट्दैनन्।
   - h1 en: Stop missing customer calls.
   - line ne: AirFone को AI एजेन्टले मूल्य, खुल्ने समय र सेवाबारेका प्रश्नको जवाफ नेपालीमा, दिनरात फोनमै दिन्छ।
   - line en: AirFone's AI agent answers questions about your prices, opening hours and services in Nepali, on the phone, day and night.
   - Form panel heading ne: २८ सेप्टेम्बरमा सुरु हुँदैछ / en: Launching 28 September
   - Form note ne: सुरु भएपछि हामी तपाईंलाई फोन गर्नेछौं। / en: We'll call you when it's live.
   - After launch: panel replaced by "निःशुल्क सुरु गर्नुहोस्" / "Try it free" button to the app.
2. **Demo band** (dark, `id="demo"`). Rendered only when demo data has lines.
   - h2 ne: एक साँचो कल सुन्नुहोस् / en: Listen to a real call
   - line ne: {business} मा ग्राहकले फोन गर्छन्, AirFone को एजेन्टले जवाफ दिन्छ। कल सम्पादन गरिएको छैन। / en: A customer calls {business} and AirFone's agent answers. The call is not edited.
   - Speaker labels ne: ग्राहक, AirFone / en: Caller, AirFone
3. **Problem** (light).
   - h2 ne: दिनभरि उही प्रश्न / en: The same questions, all day
   - Three large quoted lines: "मूल्य कति हो?" "स्टकमा छ?" "कहिले खुल्छ?" / "How much is it?" "Is it in stock?" "When are you open?"
   - line ne: यिनको जवाफ दिँदा कर्मचारीको घण्टौं समय जान्छ। राति वा व्यस्त बेला फोन नउठ्दा ग्राहक अर्कैकहाँ जान्छन्। / en: Answering them takes hours of staff time. Miss a call at night or during a rush, and the customer calls someone else.
4. **How setup works**. Ordered list, three steps, number set in the heading font beside each step (not a label above).
   - h2 ne: सेटअप कसरी हुन्छ / en: How setup works
   - 1 ne: आफ्नो व्यवसायबारे सिकाउनुहोस् — बोलेर, वेबसाइटको लिंक राखेर, फेसबुक पेज जोडेर वा फोटो र भिडियो देखाएर। AirFone ले त्यसैबाट एजेन्टको जानकारी तयार गर्छ।
     en: Teach it your business. Talk to it, paste your website link, connect your Facebook page, or show photos and videos. AirFone builds the agent's knowledge from that.
   - 2 ne: आफैं फोन गरेर जाँच्नुहोस् — आफ्नो डेमो नम्बरमा PIN सहित फोन गर्नुहोस् र एजेन्टसँग कुरा गर्नुहोस्।
     en: Call it yourself. Call your demo number with your PIN and talk to your agent.
   - 3 ne: ग्राहकका लागि खोल्नुहोस् — ठीक लागेपछि आफ्नै AirFone नम्बर लिनुहोस् र साँचो कल लिन थाल्नुहोस्।
     en: Go live. When you're happy, get your own AirFone number and start taking real calls.
5. **Who it's for**. Rows separated by dividers: business type (h3) and one example question.
   - h2 ne: पसलदेखि विद्यालयसम्म / en: From shops to schools
   - पसल / Shops: "यो मोबाइलको मूल्य कति हो?" / "How much is this phone?"
   - अनलाइन स्टोर / Online stores: "काठमाडौं बाहिर डेलिभरी हुन्छ?" / "Do you deliver outside Kathmandu?"
   - क्लिनिक र अस्पताल / Clinics and hospitals: "आज डाक्टर कति बजेसम्म बस्नुहुन्छ?" / "Until what time is the doctor in today?"
   - विद्यालय / Schools: "कक्षा ११ को भर्ना कहिलेदेखि खुल्छ?" / "When does Grade 11 admission open?"
   - रेस्टुरेन्ट / Restaurants: "शनिबार खुला हुन्छ?" / "Are you open on Saturday?"
6. **FAQ** (`<details>` elements, all content in HTML; FAQPage JSON-LD).
   - h2 ne: प्रायः सोधिने प्रश्न / en: Common questions
   - एजेन्टलाई जवाफ थाहा नभए के हुन्छ? / What if the agent doesn't know an answer? → त्यो जानकारी आफूसँग छैन भन्छ। जवाफ आफैं बनाएर दिँदैन। / It says it doesn't have that information. It doesn't make one up.
   - सेटअप गर्न प्राविधिक ज्ञान चाहिन्छ? / Do I need technical skills? → चाहिँदैन। व्यवसायबारे बोलेर वा लिंक राखेर सिकाउन सकिन्छ। / No. You teach it by talking or pasting a link.
   - मूल्य कति पर्छ? / How much does it cost? → मूल्य २८ सेप्टेम्बरमा सुरुवातसँगै सार्वजनिक गर्नेछौं। सूचीमा नाम लेखाउनेलाई पहिले जानकारी दिनेछौं। / We'll publish pricing at launch on 28 September. People on the waitlist hear first.
   - WhatsApp मा पनि चल्छ? / Does it work on WhatsApp? → अहिले फोन कलमा चल्छ। WhatsApp छिट्टै थपिँदैछ। / It works on phone calls today. WhatsApp is coming soon.
7. **Closing CTA**. h2 ne: सुरुवातमै सुरु गर्नुहोस् / en: Be ready on launch day. Button scrolls to and focuses the hero phone field (after launch: app link).

CTA label ne: सूचीमा नाम लेखाउनुहोस् / en: Join the waitlist.

## Other pages

- **Pricing**: h1 ne: मूल्य २८ सेप्टेम्बरमा सार्वजनिक हुँदैछ / en: Pricing is announced on 28 September. One line: waitlist hears first. Waitlist form.
- **Contact**: h1 ne: सम्पर्क गर्नुहोस् / en: Contact us. Email link (`mailto:info@airfone.app`) and phone link (`tel:+9779858042433`). No map, no form.
- **Privacy**: plain statement of what the waitlist collects (mobile number, optional email, business type, page, language), why (launch contact), where (AirFone servers), how to be removed (email). `noindex` is not set; it is a real page.
- **Waitlist thanks**: reads `?status=`; `noindex`.
- **404**: bilingual, links home in both languages.

## SEO

- Per-page `<title>` and meta description in both locales:
  - ne home: `AirFone | नेपाली व्यवसायका लागि AI कल सेन्टर`; description: `AirFone को AI एजेन्टले तपाईंका ग्राहकका फोनमा मूल्य, समय र सेवाबारेका प्रश्नको जवाफ नेपालीमा, दिनरात दिन्छ। २८ सेप्टेम्बरमा सुरु।`
  - en home: `AirFone | AI call center for Nepali businesses`; description: `AirFone's AI agent answers your customers' calls about prices, hours and services in Nepali, day and night. Launching 28 September.`
  - Pricing, contact, privacy: `<Page> | AirFone` pattern with specific descriptions.
- `<html lang="ne">` / `lang="en"`. Canonical per page. `hreflang` ne, en, and `x-default` → ne.
- Open Graph: `og:locale` `ne_NP` / `en_US` with `og:locale:alternate`, `og:image` `/og.png` 1200x630 with width/height/alt. Twitter `summary_large_image`.
- `<meta name="theme-color">` for light and dark.
- JSON-LD: `Organization` (name, url, logo, email, areaServed Nepal) and `WebSite` (inLanguage) on every page; `SoftwareApplication` (BusinessApplication, no offers) and `FAQPage` on home.
- One h1 per page, no skipped levels.
- Performance: zero framework JS on public pages. Only two small inline/bundled scripts (form, demo player). Preload the two font files used above the fold. Explicit `width`/`height` on images. Target Lighthouse >= 95 in all categories on mobile.

## Removed

`BaseLayout.astro`, `ThemeToggle`, `LeafletMap`, `WardInfo`, `NoticeItem`, `ServiceCard`, `LeadershipCarousel`, `HorizontalCarousel`, `HeroSlider`, `Premium*` auth components and CSS, `AuthIsland`, `AuthPage`, `AnswersEveryCallSection`, `HomepageStructuredData`, `answer-instantly.png`, old logo PNGs and unused `public/images` files, `ViewTransitions`. Old feature/platform/services/about pages become redirects. Municipality logos are left off until the team confirms permission and relevance.

Dependency cleanup in `package.json` and `astro.config.mjs` (React, Radix, Lingui, SDK externals) is a follow-up, not part of this change, unless the build requires it.

## Verification

- `pnpm build` and `pnpm verify` (bundle constraints) pass.
- Headless Chrome screenshots at 360, 390, 768, 1440 widths for `/`, `/en/`, `/pricing/`, `/contact/`, light and dark scheme, with the demo fixture on. No horizontal scroll at any width.
- Form checked against a local mock of the API for every status, and with JS disabled.
- Built HTML checked for: title, description, canonical, hreflang, JSON-LD validity (parse), one h1.
- Slop scan: grep CSS for gradients, `letter-spacing: -`, `text-transform: uppercase`, `box-shadow`, `backdrop-filter`, `animation`, and copy for em-dashes and banned words.

## Open items (not blocking)

- Demo recording, transcript, timestamps, and Pathibhara Solutions' written permission.
- Audio hosting URL (R2 or CDN).
- `/api/waitlist` on `app.airfone.app` (spec given separately).
- Office hours to publish.
- Languages the agent supports beyond Nepali (FAQ avoids claiming more).
- Permission to show municipality logos.
- nginx 301 rules applied by the hosting owner.
