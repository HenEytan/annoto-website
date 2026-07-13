# Handoff: Annoto Marketing Website (annoto.net redesign)

## Overview
A complete, 21-page marketing website for **Annoto** — an in-video collaboration, assessment and analytics layer for learning (LMS-embedded). Coral-led brand, Poppins typography, flat illustration style. This package is the single source of truth for rebuilding the site 1:1 in a production environment (primary target: **Webflow via the Webflow MCP server**; see "Webflow Build Plan" below — but the spec is framework-agnostic).

## About the Design Files
The files in `site/` are **high-fidelity design references authored in HTML**. They are prototypes showing the exact intended look and behavior — **not production code to copy verbatim**. Your task is to **recreate these designs exactly** in the target environment (Webflow, or the framework of the user's choice), using that environment's native patterns (classes, components, CMS, interactions).

Every page opens directly in a browser (serve the `site/` folder statically and open `Home.dc.html`). **The HTML files are the authoritative pixel spec** — every color, size, spacing, radius, shadow and string of copy is written inline in each file. This README describes the system; when in doubt, read the page file.

### How to read the design files (important)
The pages use a small custom component format. Interpret it as follows:

- Markup lives between `<x-dc>` and `</x-dc>`. `<helmet>` at the top = document `<head>` content (title, meta, fonts, page-scoped CSS).
- **All styling is inline** via `style="…"`. Pseudo-states use extra attributes: `style-hover="…"` = `:hover` styles for that element (also `style-active`, `style-focus`). Recreate these as hover states in the target environment.
- `{{ name }}` is a template hole filled by the small script at the bottom of each file (`class Component …`, `renderVals()`). Defaults are given there — e.g. on Home, `{{ ctaLabel }}` = **"Book A Demo"**. Use the default values as the shipped content.
- `<sc-if value="{{ x }}">…</sc-if>` = conditional block (e.g. form submitted/success states). `<sc-for list="{{ items }}" as="item">…</sc-for>` = repeated block; the data array lives in the page's script (e.g. Pricing plans, Team members) — **that array is the content spec** for those sections.
- `support.js` and `_ds/**/_ds_bundle.js` are prototype runtime files only. Do **not** port them. `site-fx.js` and `styles.css` DO carry design intent (see Interactions and Design Tokens).

## Fidelity
**High-fidelity.** Recreate pixel-perfectly: exact hex colors, font sizes/weights, spacing, radii, shadows, and copy as written in the files. Layout uses fluid values (`clamp()`, `minmax()`) — reproduce the same fluid behavior, not just the desktop snapshot.

## Sitemap / Pages (21)
All root-level unless noted. Internal links between pages use the file names (e.g. `href="Demo.dc.html"`); map them to clean slugs (suggested slugs in parentheses).

**Core**
- `Home.dc.html` (`/`) — Hero "Active Learning, Built Into Every Course Video", trust bar (NYU, Florida State, Georgia Tech, University of Padova), feature trio cards, two split sections (Instructors / LMS), coral "Up And Running In Three Steps" band, CTA band, footer.
- `Features.dc.html` (`/features`) — Full feature catalog on the video timeline.
- `Lumo AI.dc.html` (`/lumo-ai`) — Lumo AI copilot product page.
- `Analytics.dc.html` (`/analytics`) — Attention & comprehension insights.
- `Integrations.dc.html` (`/integrations`) — LMS & video platform integrations hub.
- `Product Tour.dc.html` (`/product-tour`) — Guided walkthrough page.
- `Developers.dc.html` (`/developers`) — SDK, API & webhooks.
- `Pricing.dc.html` (`/pricing`) — 4 plan cards (data-driven; see `plans` array in file: name, price, features, highlighted plan uses coral bg) + feature comparison table (`rows` array).

**Solutions**
- `Solutions.dc.html` (`/solutions`) — overview.
- `solutions/Higher Education.dc.html` (`/solutions/higher-education`)
- `solutions/K-12 Schools.dc.html` (`/solutions/k-12`)
- `solutions/Corporate Learning.dc.html` (`/solutions/corporate-learning`)
- `solutions/Media and Communities.dc.html` (`/solutions/media-communities`)

**Integrations detail**
- `integrations/Canvas.dc.html`, `integrations/Moodle.dc.html`, `integrations/Blackboard.dc.html`, `integrations/Brightspace.dc.html` (`/integrations/<lms>`) — same layout, per-LMS content.

**Company / trust**
- `About.dc.html`, `Team.dc.html` (member grid from `members` array), `Customers.dc.html`, `Partners.dc.html`, `Why Annoto.dc.html`, `Security.dc.html`, `Compliance.dc.html`.

**Conversion & utility**
- `Demo.dc.html` (`/demo`) — split page with demo-request form (First/Last name, Work email, etc.; success state swaps the form for a confirmation with coral check circle). Wire to a real form backend.
- `Contact.dc.html` (`/contact`) — contact form (First Name, Last Name, Work Email, Your Message; success state shows the ❤ mark + thank-you).
- `404.dc.html` — not-found page.

Note: pages within `solutions/` and `integrations/` reference shared assets via `../assets/…` and the root pages via `../Page.dc.html`.

## Shared Components (identical on every page — build once)

### 1. Navigation bar (sticky)
- Sticky top, z-100. `padding: 14px clamp(24px,3.4vw,64px)`; background `rgba(255,255,255,0.94)` + `backdrop-filter: blur(14px)`; bottom border `1px solid #E2E2E5`.
- Left: coral wordmark `assets/logo-annoto-wordmark.png`, height 34px, links home.
- Center links (15px / 500 / `#3B3F45`, pill padding `10px 14px`, hover bg `#F5F5F7`): three **hover dropdowns** — *Product* (6 items), *Solutions* (5), *Resources* (8) — plus plain *Pricing* link.
- Dropdown panel: opens on hover/focus-within, fades + slides up 10px over 240ms `cubic-bezier(.2,.8,.2,1)`; white card, `border 1px #E2E2E5`, radius 18px, shadow `0 28px 70px rgba(20,24,28,0.16)`, width 540–560px, 2-column grid. Each item: 40×40 rounded-10px icon tile (bg rotates `#FFF1F0` / `#FFF9E9` / `#E9FBFA`) with a 30×30 SVG illustration + title (14.5px/600, hover → coral) + one-line description (12.5px `#6B7280`). Chevron `▼` rotates 180° on hover. Exact item lists/copy/icons are in any page file's nav block.
- Right: **Contact** ghost pill (border `1.5px #E2E2E5`, hover border+text coral) and **Book A Demo** primary pill (coral bg, white text, shadow `0 12px 32px rgba(241,97,92,0.30)`, hover `#E6534E` + lift 1px).

### 2. Footer (identical everywhere)
- Bg ink `#16181A`, white text. 5-column grid `2fr 1fr 1fr 1fr 1fr`, `padding: 80px … 56px`, max-width 1280px.
- Col 1: white wordmark (h 32px), tagline paragraph (15px `#9CA3AF`), `hello@annoto.net` in coral.
- Cols 2–5: uppercase eyebrow heading (13px/600, +0.14em, `#6B7280`) + link stacks (15px `#E2E2E5`, hover coral): Product / Solutions / Company / Trust & Support. Exact links in any page file.
- Bottom bar: top border `#3B3F45`, "© 2026 Annoto Ltd. All Rights Reserved." (13px `#6B7280`).

### 3. Recurring section patterns
- **Section container**: `max-width: 1280px; margin: 0 auto; padding: 112px clamp(28px,3.4vw,64px)` (heroes use 96px top).
- **Eyebrow**: 13px / 600 / uppercase / letter-spacing 0.14em / coral `#F1615C`.
- **H1 hero**: `clamp(40px, 4.5vw, 72px)` / 700 / lh 1.05 / ls −0.02em. **H2**: `clamp(32px, 3.2vw, 48px)` / 700 / lh 1.1 / ls −0.015em. **H3**: 24px / 600. Lede: 18px / lh 1.6 / `#3B3F45`.
- **Primary button**: coral pill, white text, 600; hover `#E6534E`. **Secondary**: ghost pill `1.5px #E2E2E5` border; hover coral border+text. **Text link**: coral 600 with `→`.
- **Feature card**: white, border `1px #E2E2E5`, radius 20px, padding `40px 32px`; illustration well 220px tall, radius 24px, tinted bg (`#FFF1F0`/`#FFF9E9`/`#E9FBFA`) with 167px SVG; hover: shadow `0 18px 44px rgba(20,24,28,0.12)` + translateY(−4px), 300ms.
- **Checklist row**: 24px circle badge (coral or yellow) with white/ink `✓` + 17px text with bold lead-in phrase.
- **Split section**: 2-col grid, gap `clamp(40px,5vw,80px)`, image radius 28px; alternates image left/right; often on `#FAFAFA` band with hairline top/bottom borders.
- **Coral band**: bg `#F1615C` with 2–3 absolutely-positioned decorative shapes (pills/circles in `#ED7571`/`#E6534E` at 45–50% opacity, rotated −30°), white headline, yellow `#FFD15A` numerals 64px/800.
- **CTA band**: centered on `#FAFAFA`, eyebrow + big H2 + lede + primary/ghost button pair.

## Interactions & Behavior
- **Link defaults**: `a` = ink `#16181A`, no underline; hover coral; transition ~180ms.
- **Nav dropdowns**: as specified above (hover + focus-within, 240ms spring).
- **Card hovers**: lift −4px + soft shadow, 300ms ease.
- **Button hovers**: coral → `#E6534E`; ghost → coral border/text; primary nav CTA lifts −1px.
- **Scroll reveal** (`site-fx.js` — port the *behavior*, not the file): children of grid sections and hero headers fade in from `translateY(26px)` to none, 700ms `cubic-bezier(.2,.8,.2,1)`, staggered 90ms per sibling (cap 5), triggered at ~10% visibility with −60px bottom margin. Respect `prefers-reduced-motion` (show instantly). Nav is excluded. In Webflow: build as a "scroll into view" interaction applied per-class.
- **Forms** (Demo, Contact): client-side state swaps form → success panel on submit. In production, wire to real form handling; keep the success layouts as designed.
- **Smooth scrolling**: `scroll-behavior: smooth`.

## State Management
Minimal — this is a marketing site. Only the two forms hold state (field values + submitted flag). Pricing/Team content is static data (arrays in each file's script) — in Webflow, model as CMS collections or static elements as you prefer.

## Design Tokens (from `site/_ds/**/styles.css` — create these as Webflow variables/swatches)
**Color**
- Coral (brand): `#F1615C`; tint `#ED7571`; shade (hover/pressed) `#E6534E`
- Yellow accent: `#FFD15A` (shade `#F4BC3E`)
- Illustration teal `#0AC6BF` — appears **only inside SVG artwork**, never as a UI surface
- Ink: `#16181A` (headlines/body), `#3B3F45` (secondary), `#6B7280` (muted), `#9CA3AF` (placeholder)
- Hairline `#E2E2E5`; soft fill `#F2F3F5`; surfaces `#FFFFFF` / `#FAFAFA`
- Icon-tile tints: `#FFF1F0` (coral-10), `#FFF9E9` (yellow-10), `#E9FBFA` (teal-10)

**Typography** — Poppins ONLY (Google Fonts; weights 400/500/600/700/800). Body 18px / 1.6. Scale: hero-xl 96, hero 72, display 56, title 40, h2 32, h3 24, body 18, small 15, caption 13. Headlines tight tracking (−0.015 to −0.025em). Eyebrows uppercase +0.14em.

**Spacing** — 4px base: 4/8/12/16/20/24/32/40/48/64/80/120. Section rhythm 96–112px vertical. Content max-width 1280px; side padding `clamp(28px,3.4vw,64px)`.

**Radii** — 8 / 12 / 20 / 28 / 999 (pill). Cards 20, images & illustration wells 24–28, nav panels 18.

**Shadows** — e1 `0 2px 8px rgba(20,24,28,.05)`; e2 `0 8px 24px rgba(20,24,28,.08)`; e3 `0 18px 48px rgba(20,24,28,.14)`; hover-card `0 18px 44px rgba(20,24,28,.12)`; dropdown `0 28px 70px rgba(20,24,28,.16)`; brand-button `0 12px 32px rgba(241,97,92,.30)`.

**Motion** — spring `cubic-bezier(0.2,0.8,0.2,1)`; durations 150 / 240 / 420 / 700ms (reveal).

## Assets (`site/assets/` — upload all to the Webflow asset library)
- **Logos**: `logo-annoto-wordmark.png` (coral, on light), `logo-annoto-wordmark-white.png` (on ink/coral), `logo-annoto-mark.svg`, `logo-annoto-mark-white.svg`. Never re-typeset the wordmark.
- **Illustrations** (`assets/illus/`, 25 SVGs): flat two-color (coral + teal) + yellow accent, used in nav dropdown tiles and feature cards.
- **Scene images** (PNG): `scene-video-collaboration`, `scene-peer-review`, `scene-group-critique`, `scene-self-reflection`, `scene-skill-assessment` — hero/split-section imagery, always radius 28px.
- **Video posters**: `video-poster-classroom.png`, `video-poster-blackboard.png`; `thumbnail-red-pattern.png` (coral diagonal-pill pattern).

## Brand rules (do not violate)
- Coral leads; yellow accents sparingly; teal never as a UI surface; flat — no gradients.
- Coral on white is ~3.0:1 contrast — display type and accents only, never small body text. Body text is ink.
- Poppins only. Title Case headlines. Marketing voice: short, active, "we". Only emoji ever used: ❤ (Contact success state).
- Keep the diagonal pill pattern sparse, on coral fields only, never under body copy.

## Webflow Build Plan (for Claude Code + Webflow MCP)
Prereqs: Webflow MCP server connected; **Webflow MCP Bridge App open in the target site's Designer tab** (required for element/style creation).

1. **Variables & styles first**: create color variables and text styles from Design Tokens above. Suggested class naming: `section`, `container-1280`, `eyebrow`, `h1-hero`, `h2-section`, `lede`, `btn-primary`, `btn-ghost`, `card-feature`, `icon-tile`, `check-row`, `band-coral`, `band-cta`, `nav-*`, `footer-*`.
2. **Upload assets** (all of `site/assets/`, keeping names).
3. **Build shared components**: Navbar (with the three dropdowns — Webflow dropdown element, restyle to spec) and Footer as Webflow Components; place on all pages.
4. **Build Home end-to-end** first; verify against `site/Home.dc.html` side-by-side in a browser before proceeding.
5. **Assemble remaining pages** reusing components/classes, page by page, following each file exactly (copy text verbatim, including page `<title>`/meta description from each file's `<helmet>` — use them as Webflow page SEO settings).
6. **Interactions**: hover states via class states; scroll-reveal via Webflow "scroll into view" interaction (700ms, 26px y-offset, 90ms stagger).
7. **Forms**: native Webflow forms styled to spec; success block styled as in Demo/Contact files.
8. **Responsive**: designs are desktop-first with fluid `clamp()`; on tablet/mobile collapse multi-column grids to 1 column, nav to a menu; keep 44px+ tap targets. No explicit mobile mocks exist — apply sensible breakpoint behavior consistent with the fluid rules.
9. Set clean slugs per the Sitemap, wire all internal links, set the 404 page, publish to staging, QA every page against the reference HTML.

## Files
- `README.md` — this document.
- `screenshots/` — full-page reference screenshots of all 27 pages (numbered `01-home.png` … `27-404.png`) for visual QA. Note: very tall pages are capped in height; the HTML files remain the authoritative spec.
- `site/` — the full working design reference (open `Home.dc.html` via a static server). All pages, `assets/`, `site-fx.js` (scroll reveal), `_ds/**/styles.css` (token source). `support.js` + `_ds_bundle.js` are prototype runtime only — required to view the reference, but not part of the deliverable to port.
