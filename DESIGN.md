# AirFone design system reference

Single source of truth for tokens actually used in `src/`. If a value in the
code isn't listed here, that's a bug — fix the code or extend this file.

## Fonts

- Headings: **Anek Devanagari**, weights 600 and 700, self-hosted via
  `@fontsource/anek-devanagari`.
- Body: **Mukta**, weights 400 and 600, self-hosted via `@fontsource/mukta`.
- No other `font-family` values appear in `src/` besides the `system-ui,
  sans-serif` fallback stack.

## Color tokens (`src/styles/tokens.css`)

Light (default):

| Token | Value |
|---|---|
| `--paper` | `#FCFCF9` |
| `--surface` | `#FFFFFF` |
| `--ink` | `#16190F` |
| `--ink-muted` | `#4A5042` |
| `--line` | `#E1E4D9` |
| `--brand` | `#8BC53E` |
| `--on-brand` | `#1B2A06` |
| `--brand-ink` | `#40680B` |
| `--night` | `#141A0D` |
| `--night-ink` | `#EEF2E6` |
| `--night-muted` | `#B6BEA8` |
| `--night-line` | `#2C3520` |
| `--night-brand-ink` | `#A6D86A` |

Dark scheme overrides: `--paper #10140B`, `--surface #171D10`, `--ink
#EEF2E6`, `--ink-muted #B3BBA6`, `--line #2A3220`, `--brand-ink #A6D86A`,
`--night #0A0D07`. `--brand`, `--on-brand` and all `--night-*` tokens stay
the same in both schemes.

One other hex literal exists outside tokens.css: `#B3261E` (form field error
text, both light and dark — an error red, not a brand color, kept literal
since it's a single semantic use).

Contrast (computed against the actual token values):

| Pair | Ratio |
|---|---|
| ink / paper (light) | 17.3:1 |
| ink-muted / paper (light) | 8.1:1 |
| brand-ink / paper (light) | 6.4:1 |
| on-brand / brand (button text) | 7.4:1 |
| ink / paper (dark) | 16.4:1 |
| ink-muted / paper (dark) | 9.4:1 |
| brand-ink / paper (dark) | 11.2:1 |
| night-ink / night | 15.6:1 |
| night-muted / night | 9.2:1 |
| night-brand-ink / night | 10.7:1 |

All pairs clear the 4.5:1 minimum with margin.

## Type scale

| Use | Size |
|---|---|
| Body | 18px (16px under 480px) |
| Secondary / labels / footer | 16px |
| Field error / speaker label / copyright | 14px (the floor — nothing smaller exists) |
| h3 | 22px |
| h2 | `clamp(1.75rem, 3vw, 2.5rem)` (28-40px) |
| h1 | `clamp(1.75rem, 4vw, 3rem)` (28-48px) |

Line height: 1.55 body, 1.2 headings. Letter spacing: 0 everywhere. No
`text-transform`.

## Shape

- Radius: 8px (buttons, inputs), 12px (panels). No other radius value is
  used (no fully round/999px elements — the demo play button is a square
  8px-radius control, not a circle).
- Borders: 1px solid `--line` (or `--night-line` on the demo band) only. No
  `box-shadow` anywhere.

## Motion

- Only `color`, `background-color` and `border-color` transitions, 150ms
  ease-out, on links/buttons/inputs.
- No `@keyframes`, no transform-based hover effects, no scroll reveals.
- `prefers-reduced-motion: reduce` disables all transitions.

## Layout

- Max content width 1120px (`--max-width`), 16px side gutter (32px at
  >=768px, `--gutter`).
- Section vertical padding: 72px (hero), 96px (problem/setup/who/faq), 120px
  (closing CTA) — varies by section weight, not uniform.
