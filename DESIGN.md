# AirFone design system reference

Single source of truth for tokens actually used in `src/`. If a value in the
code isn't listed here, that's a bug — fix the code or extend this file.

## Fonts

- Latin text (English words, digits, times): **Instrument Sans** 400/600/700 via `@fontsource/instrument-sans` (latin subset). It comes first in every stack, so Latin glyphs always render in it.
- Nepali headings: **Noto Serif Devanagari** 600/700 (devanagari subset). Stack: `'Instrument Sans', 'Noto Serif Devanagari', system-ui, sans-serif`.
- Nepali body: **Mukta** 400/600. Stack: `'Instrument Sans', 'Mukta', system-ui, sans-serif`.
- No other `font-family` values appear in `src/` besides the `system-ui,
  sans-serif` fallback stack.

## Color tokens (`src/styles/tokens.css`)

Light (default):

| Token | Value |
|---|---|
| `--paper` | `#FCFCF9` |
| `--surface` | `#FFFFFF` |
| `--ink` | `#16190F` |
| `--ink-muted` | `#363B2F` |
| `--line` | `#E1E4D9` |
| `--line-control` | `#868882` |
| `--brand` | `#8BC53E` |
| `--on-brand` | `#0D1502` |
| `--brand-ink` | `#2F4D07` |
| `--night` | `#141A0D` |
| `--night-ink` | `#EEF2E6` |
| `--night-muted` | `#CDD4C2` |
| `--night-line` | `#2C3520` |
| `--night-line-control` | `#6B7566` |
| `--night-brand-ink` | `#A6D86A` |

`--line` is for decorative separators only (`.site-footer` / `.bottom`
hairlines) — 1.4.11 doesn't reach those. `--line-control` is for anything
that identifies a control boundary (`input`, `select`, `.group`, `.compact
.more`); it's the one that has to clear 3:1 against both the panel and the
control fill. `.on-night` remaps `--line-control` to `--night-line-control`
so the waitlist form's control boundary still clears 3:1 where it's embedded
in a `.on-night` section (`LaunchBand.astro`, `HomeBody.astro`,
`PricingBody.astro`).

Dark scheme overrides: `--paper #10140B`, `--surface #171D10`, `--ink
#EEF2E6`, `--ink-muted #CDD4C2`, `--line #2A3220`, `--line-control #62764A`,
`--brand-ink #A6D86A`, `--night #0A0D07`. `--brand`, `--on-brand` and all
`--night-*` tokens stay the same in both schemes.

Hex literals that live outside `tokens.css` and so are easy to miss when the
palette is reviewed — all of them are on a public surface:

| Literal | Where | What |
|---|---|---|
| `#4F7F14` / `#3A5F0D` | `TeaserBody.astro` | teaser hero green, and the glyph/cloud on it |
| `#B3261E` | `WaitlistForm.astro` | form field error text (light; dark uses `#FF8A80`) |
| `#808A72` | `CallCard.astro` | transcript words not yet spoken |
| `rgb(20 26 13 / 0.88)` | `HomeBody.astro` | hero scrim over the photo |

## Contrast

**Do not hand-maintain a table here.** Run it:

```
node scripts/contrast.mjs          # failures only, exits 1 if any
node scripts/contrast.mjs --all    # the full table, both schemes
node scripts/contrast.mjs --md     # the same as markdown, to paste into an MR
node scripts/contrast.mjs '#fff' '#4F7F14' [alpha]   # one-off pair
```

`scripts/contrast.mjs` carries the token values, the surface list and the
required ratio per row (4.5:1 body, 3:1 large text, 3:1 UI boundary and focus
indicator), and composites alpha over the real backdrop — including the hero,
whose backdrop is a photo under an 88% scrim and is therefore measured at both
the darkest and the lightest photo extreme.

ENGINEERING-STANDARDS §7.2: **any palette or typeface change re-runs the full
table and records the measured ratios in the MR** — the whole table, not the
pair that changed. If you change a token in `tokens.css`, change it in
`contrast.mjs` in the same commit and paste `--md` output into the MR.

The table that used to sit here was hand-computed and had drifted: five of its
ten rows no longer matched the tokens, it omitted the teaser green entirely
because that colour is not a token, and it closed with "all pairs clear the
4.5:1 minimum with margin" while three real pairs did not. That is the failure
§7.2 exists to prevent, so the numbers now come from the script or not at all.

TEC-42 fixed the three failures the script previously reported (teaser focus
ring, form control boundaries, checkbox checked state), plus two focus-ring
gaps review caught along the way: the phone input's `.group:focus-within`
border was still `--brand` (2.01:1) even after the resting-state boundary was
fixed, and `summary` (the disclosure toggle) wasn't in the `:focus-visible`
selector at all. Both now ring at `--brand-ink` (≥9:1) with the same
2px/2px-offset outline as every other control. The primary-button fill /
panel boundary row stays a deliberate `FAIL` — its label text clears 4.5:1 so
1.4.11 is satisfied through the text, not the fill.

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
