# DESIGN.md — Manas Kumar, Graphic Designer Portfolio

Derived from the supplied reference UI (dark maroon "Research Center" hero) and the
RunwayML editorial system from VoltAgent/awesome-design-md, filtered through the
tasteskill (design-taste-frontend) rules for a *service* site: the work leads, flat
grounds, one accent system, quiet hover micro-interactions.

## 1. Atmosphere
A warm, cinematic dark room. The portrait is a cut-out standing in a single soft
spotlight (the only radial light on the page, taken from the reference). Everything
else is flat colour so the designs — which are loud and colourful — carry the page.

## 2. Colour
| Token | Hex | Role |
|---|---|---|
| `ink-950` | `#140708` | Page ground |
| `ink-900` | `#1c0b0d` | Alternate section ground |
| `ink-800` | `#2a1215` | Cards, inputs |
| `line` | `#3f1d21` | Borders (1px, the only containment) |
| `maroon` | `#8e1f24` | Primary action fill — the kurta colour |
| `maroon-hi` | `#b3343a` | Hover / logo |
| `straw` | `#e3ad4f` | Secondary accent — the hat. Italic emphasis, small highlights |
| `cream` | `#f6ece1` | Primary text |
| `cream-muted` | `#cdb8ac` | Secondary text (≥ 4.5:1 on ink-950) |

No gradients in UI chrome. No resting shadows. No glass. No purple.

## 3. Type
- Display: **Fraunces** (variable serif), 500–700, italic used for one emphasised word per heading, in `straw`.
- Body/UI: **Manrope** 400–700.
- Display line-height 1.0–1.05, tracking -0.02em. Body 16–18px, line-height 1.6, full-ink cream.
- Max two typefaces.

## 4. Components
- **Buttons**: pill, 44px min height. Primary = maroon fill, cream text. Secondary = 1px cream/40 outline. Hover: lift 2px + colour step; active: press scale .98.
- **Nav**: logo left, centred pill nav (reference), WhatsApp + menu icon buttons right (rounded-square, maroon).
- **Work tiles**: image is the card, 12px radius, 1px line border. Hover zoom 1.03 inside frame. Click opens a lightbox.
- **Rows**: services as full-width rows divided by 1px lines; arrow slides on hover.

## 5. Layout
- Container max 1320px, side padding 20 / 32 / 48px. Equal left/right edges.
- Hero = one full screen, three columns on desktop (copy · portrait · CTA), stacked on mobile.
- Each section opens with its heading; vertical rhythm 96–128px.

## 6. Motion
Fade-up reveals on scroll (framer-motion), a slow marquee band, hover lifts/zooms.
All honour `prefers-reduced-motion`.
