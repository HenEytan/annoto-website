# Viva Template → Annoto Rebrand Plan

**Target site:** Viva Template (Webflow site `69aeb037d0e48be13085c5af`)
**Goal:** Rebrand the Viva template into an Annoto-branded site — apply Annoto brand colors, swap in Annoto content, adjust structure.

## Annoto Brand Palette (AUTHORITATIVE — from Marketing Brandbook `styles.css`)

| Role | Hex | Notes |
|------|-----|-------|
| **Brand — Coral Red** | `#F1615C` | THE brand color. Lead with it. |
| Coral tint (hover) | `#ED7571` | Lighter / hover |
| Coral shade (pressed) | `#E6534E` | Deeper / pressed |
| Accent — Yellow | `#FFD15A` | Sparingly (highlight, one dot/underline) |
| Yellow shade | `#F4BC3E` | |
| Illustration teal | `#0AC6BF` | **Illustrations only — never a UI/brand surface** |
| Ink (headlines/body) | `#16181A` | Never gray for headlines |
| Ink-2 secondary | `#3B3F45` | |
| Ink-3 muted | `#6B7280` | |
| Hairline | `#E2E2E5` | Borders |
| Off-white | `#FAFAFA` | Warm soft bg |
| Surface | `#FFFFFF` | Base |

**Typeface:** Poppins only (400/500/600/700/800). Headlines Bold/ExtraBold, tight tracking -0.02em, large. Eyebrows uppercase SemiBold +0.14em.

**Tagline (canonical):** "Unleashing In-Video Collaboration and Insights."

**Logos (local, in brandbook `assets/`):** `logo-annoto-red.svg`, `logo-annoto-wordmark.png`, `logo-annoto-wordmark-white.png`, `logo-annoto-mark.svg`. Public fallback: https://cdn.prod.website-files.com/5932e757f28d775e1c9441b6/669383dfd9f34f3a2f8fe9b6_annoto_logo.svg

## Annoto Core Messaging (for content pass)

- **Tagline:** The #1 In-Video Engagement Platform for Interactive Learning
- **What is Annoto:** Transforms static video into in-context interactive experiences — collaboration, engagement, assessment — with insightful analytics.
- **Primary CTA:** Book a Demo
- **Four pillars:** Collaborative · Immersive · Engaging · Insightful
- **Solutions:** Higher Education · K-12 · Professional (Corporate L&D) · Media
- **How it works:** Add interactive/assessment/social features to existing video → foster engaging interactions & assessment → gain actionable analytics.
- **Content types:** Video · Audio · Live Stream · Page (HTML/PDF/Docs)
- **Platform-neutral & video-player-agnostic** (LMS, CMS, website)
- **Compliance badges:** RSI · GDPR · ISO 27001
- **Proof:** NYU, Florida State, Georgia Tech, University of the Arts Amsterdam, Università di Padova

## Fresh Annoto Copy (NEW — not from old site; brandbook voice)

Voice: confident, warm, outcome-focused. "We". Title Case headers. Coral leads, yellow accents sparingly.

**Hero**
- Eyebrow: IN-VIDEO ENGAGEMENT PLATFORM
- H1: Unleashing In-Video Collaboration and Insights.
- Sub: Annoto turns passive video into an active layer of collaboration, assessment, and analytics — right where your learners already watch.
- Primary CTA: Book a Demo · Secondary: See How It Works

**Value pillars (4)**
- Collaborative — Turn watching into a shared, in-context conversation.
- Active — Assess understanding with in-video questions and reflection points.
- Connected — One layer across your LMS, CMS, video platform, or site.
- Insightful — See exactly where engagement and comprehension happen.

**How It Works (3 steps)**
1. Add — Drop Annoto onto your existing video. No migration.
2. Engage — Learners comment, answer, and reflect in-context.
3. Measure — Get actionable analytics on attention and understanding.

**Solutions**
Higher Education · K-12 · Corporate L&D · Media & Publishing

**Any Content Type**
Video · Audio · Live Stream · Page (HTML/PDF/Docs)

**Trust band**
RSI · GDPR · ISO 27001 compliant. Trusted by leading institutions.

**Closing CTA**
Ready to activate your video? — Book a Demo.

## Color mapping (Viva → Annoto)

Viva uses a blue accent (`text-color-blue`, `.slate-blue`) + button styles. Map:
- Viva primary blue accent → Annoto blue `#469AF4` (or purple `#6127DA` for primary buttons)
- Body button (`.body-button`) background → Annoto purple/blue
- Dark text → `#283338`

## Execution order (once Data API reauthorized)

1. Query all color-bearing styles; update to Annoto palette (cascades site-wide).
2. Upload Annoto logo + key imagery as assets.
3. Insert Annoto-messaged sections where possible.
4. Snapshot to verify.

## Tooling constraints

- Editing/deleting existing primary-locale text & images in place is NOT supported by the exposed Webflow tools (no `data_element_tool`). Achievable: style recolor, asset upload, inserting new elements.
- Content that can't be overwritten via API will be flagged for manual finish in Designer.
