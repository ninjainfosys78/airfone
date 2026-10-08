# AirFone design system

Single source of truth for every value used in `src/`. A value in the code
that isn't listed here is a bug: fix the code or extend this file. Brand greens shared
with the AirFone app (`airfone/app/lib/core/theme/app_theme.dart`). Neutrals are
white and green-tinted, not gray (owner, 2026-10-08).

## No AI look

Every page is checked against the impeccable.style slop catalogue (ledger
section 15, SLOP-1 to 67) and the rules in `~/.claude/CLAUDE.md`. No bylines:
a heading goes straight into the content it names, with no subtitle, tagline,
eyebrow or intro sentence. `pnpm check` enforces what can be checked by code.

The one exception is the call orb on the home page (Orbkit MIT shader), which
the owner chose over the no-glow rule for that element only.

## Colour tokens (`src/styles/tokens.css`)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--canvas` | `#FFFFFF` | `#10140B` | page background |
| `--surface` | `#F4F8EC` | `#171D10` | soft green panels, player, forms, footer |
| `--subtle` | `#E8F0DA` | `#1E2615` | quiet fills, hover |
| `--line` | `#DCE5CC` | `#2A3220` | 1px borders |
| `--ink` | `#16190F` | `#EEF2E6` | text |
| `--ink-muted` | `#3E4636` | `#C2CAB5` | secondary text |
| `--brand` | `#2F4F08` | `#2F4F08` | primary buttons |
| `--on-brand` | `#FFFFFF` | `#FFFFFF` | text on brand |
| `--link` | `#2F4F08` | `#A6D86A` | links, focus ring, current page |
| `--lime` | `#8BC53E` | `#8BC53E` | play button, waveform, orb, selection |
| `--on-lime` | `#0D1502` | `#0D1502` | text on lime |
| `--stage` | `#2F4F08` | `#1B2A0A` | the one dark section where the call plays |
| `--stage-ink` | `#FFFFFF` | `#FFFFFF` | text on stage |
| `--stage-muted` | `#C9D6B8` | `#C9D6B8` | secondary text on stage |
| `--stage-line` | `#4A6A22` | `#2F4317` | borders on stage |
| `--error` | `#B3261E` | `#FF8A80` | form errors |

Orb palette (WebGL orb, by state): body `#1B2A0A`, light `#8BC53E` idle, `#C9D6B8` thinking, `#D4ECB1` speaking, `#FFFFFF` and `#4A6A22` for Nimbus. The orb idles slowly while on screen and stops when off screen or the tab is hidden.

Print only: `#FFFFFF` background, `#000000` text.
Logo files keep their own colours (`#8CC63F` cloud, `#7C7C7C` wordmark).
Theme colour meta: `#FFFFFF` light, `#10140B` dark.

### Contrast (computed)

| Pair | Ratio |
|---|---|
| ink / canvas | 17.8:1 |
| ink / surface | 16.5:1 |
| ink-muted / canvas | 9.8:1 |
| ink-muted / subtle | 8.4:1 |
| link / canvas | 9.4:1 |
| on-brand / brand | 9.4:1 |
| on-lime / lime | 9.0:1 |
| stage-muted / stage | 6.2:1 |
| dark: ink / canvas | 16.4:1 |
| dark: ink-muted / surface | 10.2:1 |
| dark: link / canvas | 11.2:1 |
| dark: stage-muted / stage | 10.0:1 |
| error / surface | 6.5:1 (dark 7.6:1) |

## Type

- Poppins 400/500/600, self-hosted (latin), chosen by the owner 2026-10-08. JetBrains Mono for numbers
  in product screens only.
- Display (home hero): `clamp(2.25rem, 1.2rem + 4.2vw, 4.5rem)`, 36 to 72px, line height 1.04.
- h1: `clamp(2.25rem, 1.5rem + 3vw, 3.5rem)`; h2: `clamp(1.75rem, 1.3rem + 1.8vw, 2.5rem)`; h3: 22px.
- Body 18px (16px under 480px), line height 1.5. Secondary 16px. Floor 14px.
- Headings weight 600, line height 1.12, `text-wrap: balance`. Letter spacing 0
  everywhere. Sentence case. No uppercase text.
- Long text measure: 680px.

## Space

Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px (`--space-1` to `--space-10`).
Sections: 96px vertical (64px on phones); tight sections 64px (48px).
Max width 1200px; gutter 16px, 32px from 768px.

## Shape

Radius 8px (controls), 12px (panels). Inline code 4px. Borders 1px. No
`box-shadow`, no gradients, no blur.

## Motion

- Colour, background and border transitions: 150ms, `cubic-bezier(0.2, 0, 0, 1)`.
- Section entrance: opacity plus 8px translate, 250ms, only for content below
  the first screen, never hides content without JS.
- The orb and waveform move only while audio plays.
- `prefers-reduced-motion: reduce` turns all of it off.
