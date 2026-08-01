# Happy Hour Offer — Design

**Date:** 2026-08-01
**Source:** Claude Design handoff `4d9196b7-082c-423c-b1f8-e347fc580cf8` →
`design_handoff_happy_hour_offer/reference/{moon-offers.jsx,offers.css,happy-hour-poster.jpeg}`

## Goal

A site-wide "Happy Hour" promo (pay for one service, get a paired second free —
Mon–Thu, 12–5 PM, by appointment) to drive phone calls. Four surfaces: a sticky
bar under the header, a homepage card, compact strips on Services and above the
booking form, and a new `/offers` page.

## Constraint discovered during exploration

`src/moon-prototype.css` is wrapped **entirely** in `@media (max-width: 767px)`.
Every `.dsite …` rule inside it is therefore dead code, and `.dsite` is applied
by no TSX file. The prototype's desktop mechanism — a `.dsite` wrapper plus a
`desktop` prop that swaps component trees — **does not exist in the real site**,
which renders one responsive DOM driven by Tailwind `md:` variants.

Consequence: `reference/offers.css` cannot be dropped in verbatim. Its whole
desktop half (`.dsite .obar`, `.obann-d`, `.dsite .ofull`, …) would never match.

## Chosen approach — hybrid

| Surface | Mobile | Desktop |
| --- | --- | --- |
| Sticky bar (`.obar`) | ported CSS | `@media (min-width:768px)` in CSS |
| Offers page (`.ofull`, `.odeal`, `.osteps`, …) | ported CSS | `@media (min-width:768px)` in CSS |
| Home card (`.obann`) | ported CSS | Tailwind `md:` utilities in TSX |
| Strip (`.ostrip`) | ported CSS | Tailwind `md:` utilities in TSX |

Rationale: the bar and the Offers page keep the same dark green/gold treatment at
every width, and their desktop deltas live inside deep descendant selectors
(`.ofull-top h2`, specificity 0,1,1) that Tailwind utilities cannot outrank — so
those stay in CSS. The home card and strip flip to a *light* card on desktop;
those overrides land on elements we control directly and are expressed as `md:`
utilities, per the handoff.

**Specificity fix:** `src/offers.css` is imported **before** `src/index.css` in
`main.tsx`, so Tailwind's utilities layer (emitted at `index.css` line 3) comes
later in source order and single-class `md:` utilities win over `.opill`,
`.ostat`, `.ocall` without needing `!important`.

**Token fix:** `--ease`, `--fg`, `--muted-fg` are prototype-only names defined
inside the mobile-only media query. The ported CSS inlines
`cubic-bezier(0.4,0,0.2,1)` and the TSX uses the real tokens
(`text-foreground`, `text-muted-foreground`, `bg-card`, `bg-secondary`,
`border-border`, `text-primary`, `shadow-soft`).

## Files

| File | Purpose |
| --- | --- |
| `src/offers.css` | new — ported offer styles, mobile + CSS desktop deltas |
| `src/lib/offers.ts` | new — typed `OFFERS` array, `offerStatus()`, `fmtH()`, `offerWa()`, `TEL` |
| `src/hooks/useOfferStatus.ts` | new — `useOfferStatus(offer)`, 30s `setInterval` |
| `src/components/offers/OfferBar.tsx` | new |
| `src/components/offers/OfferBanner.tsx` | new |
| `src/components/offers/OfferStrip.tsx` | new |
| `src/components/offers/OfferFull.tsx` | new |
| `src/pages/Offers.tsx` | new — page intro + `OFFERS.map(OfferFull)` |
| `public/offers/happy-hour-poster.jpeg` | new — **supplied by the user** |
| `src/main.tsx` | edit — import `offers.css` before `index.css` |
| `src/index.css` | edit — 4 offer tokens in `:root` |
| `src/App.tsx` | edit — lazy `/offers` route above the `*` catch-all |
| `src/components/Header.tsx` | edit — `<OfferBar />`, 3rd seg tab, desktop nav item |
| `src/pages/Index.tsx` | edit — banner after `PreferredBy`, strip above `BookingForm` |
| `src/pages/Services.tsx` | edit — strip after the intro section |

## Data & state

No global state. `OFFERS` is a typed array so a second offer needs no new
components; every surface maps over it. `useOfferStatus` returns
`{ live, short, long, next }`, recomputed every 30s so an open page transitions
from "next" to "live" without a refresh. Logic ported near-verbatim from
`offerStatus()` in the reference.

## Interactions

- Call links are plain `tel:+919004832184` anchors. `trackEvent()` fires first,
  then a `sonner` toast (`Mention "Happy Hour" when you call`), then native
  navigation proceeds — no `preventDefault`.
- WhatsApp: `https://wa.me/919004832184?text=…`, new tab, `rel="noopener"`.
- The copy area of the bar/card/strip routes to `/offers`; the Call control is
  always a separate tappable element.
- The Offers-page reminder line is one wrapping `<span class="omention-t">` next
  to the icon (`flex:1; min-width:0`) — not multiple flex children.

## Analytics

Existing `trackEvent()` pattern from `src/lib/analytics.ts`:

- `phone_call_click` — `section_name: 'offer_bar' | 'offer_banner' | 'offer_strip' | 'offer_page'`,
  `cta_label: 'Happy Hour Call'`, `destination_url: 'tel:+919004832184'`
- `booking_start` — `booking_method: 'whatsapp'`, `section_name: 'offer_page'`,
  `cta_label: 'Happy Hour WhatsApp'`
- `nav_click` — `section_name: 'offer_bar' | 'offer_banner' | 'offer_strip'`,
  `destination: '/offers'`

## Resolved ambiguities

1. **Desktop home-card CTA.** The handoff prose says gold button / dark-green
   text; `offers.css` `.obann-d .ocall` says the inverse (dark-green button, gold
   text) and is the later override, so it is what the prototype renders.
   **Decision: follow `offers.css`.**
2. **Poster asset.** Not fetched through the MCP (binary → base64 would consume a
   large share of context). The handoff asked for `src/assets/`, but a static
   import of a file that isn't there yet fails the build for everyone. It is
   served from `public/offers/happy-hour-poster.jpeg` instead and the block
   removes itself on image error, so the page is correct both before and after
   the asset lands. Verified: with the file absent, `.oposter` is not rendered.
3. **Strip clipping.** The reference screenshot shows the strip tag truncated to
   "HAPPY" and "See offer ›" wrapping to two lines at narrow widths. Ported with
   `white-space: nowrap` on both so the intended single-line reading holds.

## Out of scope

No forms, no loading states, no error states. No changes to existing pages beyond
the three insertion points and the header.
