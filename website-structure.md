# Annoto Website Redesign — Structure & Sitemap
**Goal:** Inbound sales funnel · Primary CTA: Book a Demo · Audiences: Higher Ed + Enterprise L&D

---

## Current State Audit

### Live pages today
| Page | Path | Status |
|------|------|--------|
| Home | `/` | Live |
| Higher Education | `/education` | Live |
| Professional (Corporate) | `/corporate` | Live |
| K-12 | `/k12` | Live |
| Media | `/media` | Live |
| About | `/about` | Live |
| Blog | `/blog` | Live |
| Contact Us | `/contact-us` | Live |
| Help | `/help` | Live |
| Events/Local | `/events/local` | Live |

### Critical gaps vs. best-in-class SaaS sites
- ❌ No **Features / Product** page
- ❌ No **Integrations** page (huge gap — LMS connectivity is Annoto's core differentiator)
- ❌ No **Case Studies / Customers** page ("Voice of the Customer" exists in docs but is invisible on the marketing site)
- ❌ No **Book a Demo** dedicated landing page
- ❌ No **Resources hub** (blog exists but is isolated)
- ❌ **Pricing** page exists but is archived/hidden
- ❌ No **Comparison / Why Annoto** page ("Why Annoto Is the Clear Choice?" exists in docs — needs a marketing version)
- ❌ No **Partners** page
- ❌ No **Interactive product tour** (Notion/Loom pattern)
- ❌ No **Security & Trust** page (GDPR, FERPA, WCAG, LTI 1.3 all confirmed — just needs a page)
- ❌ No **G2 / review platform** social proof integration
- ❌ **Lumo AI Copilot** is completely invisible on the marketing site — major missed opportunity

---

## Proposed Sitemap

### Navigation structure

```
ANNOTO
├── Product ▾
│   ├── Features Overview              /features
│   ├── Lumo AI Copilot ✨ NEW         /features/ai
│   ├── Interactive Learning Journeys  /features/interactive-learning
│   │   ├── In-Video Quizzes           /features/interactive-learning/quizzes
│   │   ├── Peer Review                /features/interactive-learning/peer-review
│   │   └── Skills Assessment          /features/interactive-learning/skills
│   ├── Collaborative Learning         /features/collaboration
│   │   ├── Guided Watching            /features/collaboration/guided-watching
│   │   └── Flipped Classroom          /features/collaboration/flipped-classroom
│   ├── Analytics & Insights           /features/analytics
│   └── Why Annoto                     /why-annoto
│
├── Solutions ▾
│   ├── Higher Education               /education
│   ├── Corporate L&D                  /corporate
│   ├── K-12                           /k12
│   └── Media & Publishing             /media
│
├── Integrations                       /integrations
│   ├── Canvas                         /integrations/canvas
│   ├── Moodle                         /integrations/moodle
│   ├── Blackboard                     /integrations/blackboard
│   ├── Brightspace (D2L)              /integrations/brightspace
│   ├── Kaltura                        /integrations/kaltura
│   ├── Microsoft Stream               /integrations/ms-stream
│   ├── Panopto                        /integrations/panopto
│   └── All Integrations               /integrations
│
├── Customers                          /customers
│   ├── Voice of the Customer          /customers/case-studies
│   └── [Individual case studies]      /customers/[slug]
│
├── Resources ▾
│   ├── Blog                           /blog
│   ├── Guides & Documentation         → docs.annoto.net
│   ├── Webinars & Events              /events
│   └── Compliance ▾                   /compliance
│       ├── GDPR                       /compliance/gdpr
│       ├── RSI                        /compliance/rsi
│       ├── ISO 27001                  /compliance/iso27001
│       └── VPAT Accessibility         /compliance/vpat
│
├── Partners                           /partners
│   ├── Technology Partners            /partners/technology
│   ├── Resellers & Distributors       /partners/resellers
│   └── Become a Partner               /partners/join
│
├── Pricing                            /pricing
│
└── Company ▾
    ├── About                          /about
    ├── Careers                        /careers
    ├── Security & Trust               /security
    └── Contact                        /contact-us

──────────────────────────────────────────
PRIMARY CTA (sticky nav + hero): Book a Demo   /demo
SECONDARY CTA: Watch a 2-min tour             /tour
─────────────────────────────────────────
```

---

## Page-by-Page Specs

### 1. Home `/`
**Job:** Convert TOFU visitors in < 5 seconds. Speak to both personas without being generic.

**Sections (top to bottom):**
1. **Hero** — Bold value prop headline + 2-line sub. Primary CTA: "Book a Demo". Secondary: "Watch 2-min tour". Hero video/animation showing Annoto live in a video player.
2. **Social proof bar** — Logos of key customers (universities + enterprises). "Trusted by 200+ institutions."
3. **The problem** — "Video is your biggest content investment. Most of it goes unwatched." 2–3 stat cards.
4. **How it works** — 3-step visual: Embed → Engage → Analyze. Short and scannable.
5. **Solutions by persona** — Two cards: Higher Ed / Corporate L&D. Each links to its solution page.
6. **Key features** — 3–4 feature highlights with icons. Brief. Each links to `/features`.
7. **Integrations teaser** — "Works with your existing stack" + LMS/video platform logo grid. Link to `/integrations`.
8. **Social proof / case study** — One featured customer story with a quote + metric (e.g., "42% increase in engagement").
9. **CTA band** — "See Annoto in action" — Book a Demo button.
10. **Footer**

---

### 2. Book a Demo `/demo` ⭐ NEW
**Job:** Single-purpose landing page. No nav distractions. Qualify and convert.

**Sections:**
1. **Headline** — "See Annoto Live in 20 Minutes"
2. **3 bullets** — What you'll see in the demo
3. **Demo form** (right side) — Name, email, org, role, LMS/platform used
4. **Trust signals** — Customer logos + 1 quote
5. **Optional:** Calendly embed instead of form

---

### 3. Features Overview `/features` ⭐ NEW
**Job:** Show depth. Give mid-funnel buyers a complete picture. Use Annoto's actual product terminology.

**Sections:**
1. **Hero** — "Everything you need to turn video into active learning"
2. **Lumo AI Copilot callout** — Hero-level feature card. "Meet Lumo — your AI-powered learning design assistant." Links to `/features/ai`.
3. **Feature categories** — Tab or card grid (using exact product names from docs):
   - Interactive Learning Journeys (quizzes, peer review, skills assessment, activity completion)
   - Collaborative Learning (guided watching, flipped classroom, learner discussions, assignments)
   - Analytics & Insights (course view, video view, user view, gradebook)
   - Annoto Widget (comments, personal notes, interactions, video-as-comment)
   - Admin & Moderation (roles, org controls, SSO, preferences)
4. Each category links to its own sub-page.

---

### 4. Lumo AI Copilot `/features/ai` ⭐ NEW — HIGH PRIORITY
**Job:** AI is the #1 buying trigger in ed-tech right now. This deserves its own page and prominent placement everywhere.

**Positioning:** "Lumo AI Copilot — AI-powered learning design built into every video"

**Sections:**
1. **Hero** — What Lumo does in one sentence. Short video/animation.
2. **Use cases** — What instructors/L&D teams can do with Lumo (auto-generate quizzes, suggest engagement points, summarize discussions)
3. **How it works** — 3-step visual
4. **Available in** — Canvas, Moodle, Blackboard, Brightspace
5. **CTA** — Book a Demo to see Lumo live

> ⚠️ Note: Fetch `https://docs.annoto.net/guides/user-guides/ai.md` before writing copy for this page to get exact feature details.

---

### 5. Interactive Learning Journeys `/features/interactive-learning` ⭐ NEW
**Covers (per docs):** In-Video Quizzes, Peer Review, Skills Assessment, Collaborative Learning, Personal Journal, Video Activity Completion, Assessment Criteria

Sub-pages (each a short focused page):
- `/features/interactive-learning/quizzes` — In-video quizzes, gradebook pass-back, graded interactions
- `/features/interactive-learning/peer-review` — Structured peer feedback, LMS grading integration
- `/features/interactive-learning/skills` — Skills assessment, rubrics, criteria library

---

### 6. Collaborative Learning `/features/collaboration` ⭐ NEW
**Covers:** Guided Watching, Flipped Classroom, Learner Interactions, Assignments, Comments, Video-as-Comment

Sub-pages:
- `/features/collaboration/guided-watching`
- `/features/collaboration/flipped-classroom`

---

### 7. Analytics & Insights `/features/analytics` ⭐ NEW
**Covers (per docs):** Course View, Video View, User View, activity trends, quiz performance, engagement heatmaps

Key selling point: instructors can see exactly where students disengaged in a video.

---

### 8. Why Annoto `/why-annoto` ⭐ NEW
**Source material:** "Why Annoto Is the Clear Choice?" already exists at `docs.annoto.net` — repurpose and expand it into a marketing page.

**Job:** Late-funnel page for buyers comparing options. Convert the last 20%.

**Sections:**
1. **Headline** — "Why leading institutions choose Annoto"
2. **Comparison table** — Annoto vs. generic LMS video tools vs. standalone quiz tools
3. **Key differentiators** — LMS-native (no redirect), media-agnostic, AI-powered, compliance-ready
4. **Proof points** — Stats + customer quotes
5. **CTA** — Book a Demo

---

### 9. Integrations `/integrations` ⭐ NEW
**Job:** Remove the #1 pre-sales objection — "will it work with our stack?"

**Confirmed integrations (from docs):**
- **LMS:** Canvas, Moodle, Blackboard, Brightspace (D2L), Kaltura MediaSpace
- **Video platforms:** Kaltura, Panopto, Microsoft Stream, YouTube, Vimeo, custom providers
- **Standards:** LTI 1.3, SCORM/xAPI compatible

**Sections:**
1. **Hero** — "Works with everything you already use. No migration, no IT overhaul."
2. **LMS grid** — Canvas, Moodle, Blackboard, Brightspace (D2L) — each with logo + "Get started" link
3. **Video platform grid** — Kaltura, Panopto, MS Stream, YouTube, Vimeo
4. **How it works** — "Annoto overlays on top of your existing videos. One-click LTI 1.3 install. Live in days."
5. **Compliance callout** — LTI 1.3, FERPA, GDPR, WCAG
6. **Don't see yours?** — CTA to contact

### 10. Individual Integration Pages `/integrations/[platform]` ⭐ NEW (CMS Collection)
One page per integration. Template:
- What the integration does
- Setup steps (link to docs for details)
- Use cases specific to that LMS
- Screenshots
- Link to docs.annoto.net setup guide
- CTA: Book a Demo

**Priority pages to build first** (highest search volume):
1. `/integrations/canvas`
2. `/integrations/blackboard`
3. `/integrations/moodle`
4. `/integrations/brightspace`
5. `/integrations/kaltura`

---

### 11. Higher Education `/education` (Redesign existing)
**Job:** Speak directly to instructional designers, VPs of Academic Technology, IT.

**Key additions vs current:**
- Pain-point opening (passive video, low completion rates)
- Use cases: flipped classroom, peer review, async discussion, skills assessment
- **RSI compliance callout** — "Annoto helps institutions meet Regular & Substantive Interaction (RSI) requirements for online courses." This is a federal regulatory requirement many US institutions must meet — Annoto solves it. Huge differentiator. Link to `/resources/rsi`.
- Metrics: engagement rates, completion lift
- Featured university case study
- LMS integration call-out (Canvas, Blackboard, Moodle, Brightspace)
- Lumo AI Copilot mention
- "Book a Demo for Higher Ed teams"

### 10. Corporate L&D `/corporate` (Redesign existing)
**Job:** Speak to L&D managers, CLOs, HR tech buyers.

**Key additions:**
- Pain-point: compliance video that nobody watches
- Use cases: onboarding, compliance, skills development
- Metrics: completion rates, knowledge retention
- Featured enterprise case study
- SCORM/xAPI / LMS call-out

### 11. K-12 `/k12` (Redesign existing)
Lighter lift — similar structure to Higher Ed but K-12 language and use cases.

### 12. Media `/media` (Redesign existing)
Use cases: audience engagement, monetization, editorial collaboration.

---

### 13. Customers `/customers` ⭐ NEW
**Job:** Social proof at scale. Let buyers see themselves in the success stories.

**Sections:**
1. **Stats bar** — "200+ institutions · X million learners · Y% avg engagement lift"
2. **Customer logo grid** — Filterable by industry (Higher Ed / Corporate / K-12)
3. **Featured case studies** — 3 cards with headline metric
4. All case studies link to individual pages `/customers/[slug]`

### 14. Individual Case Study `/customers/[slug]` ⭐ NEW
Template: Customer, Challenge, Solution, Results (with metrics), Quote, CTA.

---

### 15. Pricing `/pricing` ⭐ RESTORE + REDESIGN
**Job:** Give buyers enough to qualify themselves. Don't hide the ball.

**Approach (B2B enterprise-appropriate):**
- 2–3 tiers: Essentials / Professional / Enterprise
- Feature comparison table
- "Contact us for pricing" for Enterprise is fine — but show what's in each tier
- FAQ section (contract length, seats, integrations included)
- CTA: Book a Demo

---

### 16. Partners `/partners` ⭐ NEW
**Job:** Enable channel growth, signal ecosystem credibility, attract new partners.

**Why it matters:** Enterprise buyers in ed-tech heavily evaluate ecosystem fit. A partners page signals maturity and makes Annoto look like a platform, not a point solution. It also opens a new growth channel (resellers, system integrators, LMS vendors).

**Sub-pages:**
- `/partners/technology` — Tech/integration partners (Kaltura, Canvas, Blackboard, Panopto, etc.)
- `/partners/resellers` — VARs, distributors, regional partners
- `/partners/join` — Partner application / "Become a Partner" CTA

**Partners overview page `/partners` sections:**
1. **Hero** — "Grow with Annoto" or "Built for Partnership" — brief statement on why partners choose Annoto
2. **Partner types** — 3 cards: Technology Partners / Resellers & Distributors / Implementation Partners
3. **Featured technology partners** — Logo grid with brief description of each relationship (e.g., "Kaltura — Annoto is available natively on the Kaltura marketplace")
4. **Partner benefits** — Co-marketing, revenue share, technical support, co-sell opportunities
5. **Partner testimonial** — Quote from a partner organization
6. **Become a partner CTA** — Form or link to `/partners/join`

**Technology Partners `/partners/technology`:**
- Grid of integration/technology partners with logo, one-line description, and link to their integration page
- Ties directly into `/integrations` — same logos, different framing (there: "works with"; here: "partnered with")

**Resellers `/partners/resellers`:**
- Map or list of regional partners
- "Powered by Annoto" badge for resellers to use

**Become a Partner `/partners/join`:**
- Short application form: org name, type (reseller/tech/implementation), region, contact
- What happens next — 3-step: Apply → Review → Onboard

---

### 17. Security & Trust `/security` ⭐ NEW
**Job:** Unblock enterprise procurement. Ed-tech buyers (especially US institutions) require FERPA, GDPR, and LTI compliance evidence before purchasing.

**Sections:**
1. **Headline** — "Enterprise-grade security, built for education"
2. **Compliance badges** — FERPA, GDPR, LTI 1.3, SOC 2 (if applicable), WCAG accessibility
3. **Data practices** — Where data is stored, retention policies, student data privacy
4. **SSO & Access control** — SAML, SSO, role-based permissions
5. **FAQ** — "Does Annoto store student video data?", "Is Annoto COPPA compliant for K-12?"
6. **DPA / documentation** — Link to downloadable Data Processing Agreement
7. **CTA** — "Talk to our security team" → contact form

---

### 18. Interactive Product Tour `/tour` ⭐ NEW
**Inspired by:** Notion (interactive demo), Loom (video-first hero), HubSpot (guided tours)

**Job:** Let buyers experience the product before talking to sales. Reduces friction for mid-funnel visitors who aren't ready to book a demo yet.

**Options (pick one):**
- **Guided HTML tour** — Step-by-step walkthrough of the Annoto widget overlaid on a sample video. Hosted on `/tour`. No login required.
- **Embedded Loom/video** — 2–3 min recorded demo showing real use in Canvas/Blackboard. Lower dev effort.
- **Navattic / Storylane embed** — Interactive product demo tool. Shows actual UI, click-through. High conversion for MOFU.

**Placement:** Secondary CTA everywhere ("Watch how it works" or "Take a tour") — on homepage, features pages, solution pages.

---

### 19. Compliance Hub `/compliance` ⭐ NEW
**Job:** Unblock procurement. Compliance is the #1 reason ed-tech and enterprise deals stall. A dedicated section signals maturity and makes it easy for IT, legal, and procurement teams to find what they need.

**Overview page `/compliance`:**
- Brief intro: "Annoto is built for institutions that take security and compliance seriously."
- 4 cards linking to each sub-page
- Downloadable DPA / security documentation
- CTA: "Talk to our compliance team"

---

#### `/compliance/gdpr`
**Audience:** European institutions, DPOs, IT security teams.

**Sections:**
1. Annoto's GDPR commitments — data residency, processing agreements, user rights
2. How student data is handled (what's stored, retention, deletion)
3. Downloadable Data Processing Agreement (DPA)
4. Contact for GDPR inquiries

---

#### `/compliance/rsi`
**Audience:** US higher ed institutions, online learning administrators, accreditation officers.

**Why it matters:** RSI (Regular & Substantive Interaction) is a US Dept of Education requirement for online courses receiving federal financial aid. Institutions that fail it risk losing federal funding. Annoto explicitly supports RSI — documented in `docs.annoto.net`.

**Sections:**
1. What is RSI — plain English explanation
2. How Annoto satisfies RSI requirements (time-stamped interactions, instructor engagement, discussion analytics)
3. Downloadable: "RSI Compliance Checklist for Online Video Courses" ← lead magnet
4. CTA: Book a Demo

---

#### `/compliance/iso27001`
**Audience:** Enterprise IT, CISOs, procurement teams.

**Sections:**
1. Annoto's ISO 27001 certification status and scope
2. Information security practices overview
3. Downloadable certification / summary document
4. Contact for security questionnaires

---

#### `/compliance/vpat`
**Audience:** Disability services offices, accessibility coordinators, IT teams.

**Sections:**
1. Annoto's accessibility commitment — WCAG 2.1 AA conformance
2. VPAT document download (Voluntary Product Accessibility Template)
3. Keyboard navigation, screen reader support, captioning compatibility
4. How to request an accessibility review or custom assessment
5. Link to full Accessibility Statement (already in docs)

---

### 20. Blog `/blog` (Improve)
Add category filtering: Engagement Tips / Product Updates / Research / Case Studies.
Each post should end with a contextual CTA.

### 17. Resources / Events `/events` (Expand existing)
Webinars, on-demand recordings, upcoming events.

---

### 18. About `/about` (Light refresh)
Add team section, mission statement, founding story. 

### 19. Careers `/careers` (Restore from draft)
Even if no open roles — signals health and growth.

### 20. Contact `/contact-us` (Keep, improve form)
Route by inquiry type: Sales / Support / Press / Partnership.

---

## Pages to Deprecate / Archive
| Page | Action |
|------|--------|
| `/landing-page` | Archive — replace with `/demo` |
| `/help` | Redirect to `docs.annoto.net` |
| `/events/local` | Fold into `/events` |
| Template pages (`/template-*`) | Already draft — leave archived |
| `/test`, `/testing` | Delete |
| `/old-home` | Delete |

---

## Navigation Design Principles

**Primary nav (desktop):** Product | Solutions | Integrations | Customers | Partners | Resources | Pricing
**Right side:** [Log in]  [Book a Demo] ← always visible, high contrast

**Mobile nav:** Hamburger with the same items collapsed. "Book a Demo" stays pinned at bottom.

**Sticky behavior:** Nav sticks on scroll. CTA button stays visible at all times.

---

## Inbound Funnel Flow

```
AWARENESS (Blog, SEO, Ads)
        ↓
TOFU — Home / Solution pages / Blog posts
        ↓
MOFU — Features / Integrations / Case Studies / Pricing
        ↓
BOFU — Book a Demo / Contact
        ↓
SALES CONVERSATION
```

**SEO opportunity pages to prioritize:**
- `/integrations/canvas` — "video annotation Canvas LMS", "in-video quiz Canvas"
- `/integrations/blackboard` — "video annotation Blackboard", "Blackboard LTI video"
- `/integrations/moodle` — "Moodle video engagement tool"
- `/integrations/brightspace` — "Brightspace D2L video annotation"
- `/integrations/kaltura` — "Kaltura Annoto integration" (high-intent, existing partnership)
- `/features/ai` — "AI video learning tool", "Lumo AI copilot LMS"
- `/compliance/rsi` — "RSI compliance online courses", "Regular Substantive Interaction video" (HIGH VALUE — regulatory urgency)
- `/compliance/vpat` — "VPAT LMS", "accessible video learning platform"
- `/compliance/gdpr` — "GDPR compliant video LMS"
- `/features/analytics` — "video engagement analytics LMS"
- `/customers/` — "video learning case studies higher education"
- `/why-annoto` — "video annotation LMS comparison"
- Comparison: `/vs-[competitor]` (future phase)

---

## Additional Recommendations from Top SaaS Companies

Studying Monday, ClickUp, Notion, HubSpot, Loom, Linear, Figma, and Intercom — these are the patterns Annoto should adopt:

### 1. G2 / Review platform badges (Notion, HubSpot)
Pull live G2 or Capterra ratings into the homepage and pricing page. "4.8/5 on G2" next to your CTA is one of the highest-converting trust signals in B2B SaaS. If Annoto isn't on G2 yet, that's step one.

### 2. Pricing page as a conversion flow, not a feature table (Linear, Vercel)
The best pricing pages in 2026 lead with outcomes per tier, not a feature checklist. Annoto's pricing page should answer: "What kind of org buys each tier?" — not "which features are in each tier."

### 3. Segment the homepage hero (Monday, ClickUp)
Rather than one generic headline, use a rotating or tabbed hero that lets visitors self-select: "I'm in Higher Ed / Corporate L&D" and immediately sees relevant social proof and messaging. This is how Monday handles multiple personas on one page.

### 4. Exit-intent / mid-scroll capture (HubSpot)
HubSpot's site captures emails via content offers mid-page (e.g., "Download: The State of Video Learning 2026"). For Annoto, this could be a benchmark report or engagement checklist — captures leads who aren't ready to book a demo.

### 5. Video-first hero (Loom)
Loom doesn't explain async video — it shows it. Annoto should show the widget live in the hero, not describe it. A 15-second auto-playing loop of someone watching a video with Annoto annotations appearing is worth 500 words of copy.

### 6. "Wall of Love" / social proof section (Notion, Intercom)
A scrolling ticker of customer quotes — not just logos. Short, metric-led quotes: "Our completion rates went from 40% to 78% after adding Annoto." These can sit anywhere on the page and dramatically improve conversion.

### 7. Comparison / "Why us" pages (ClickUp, Monday)
ClickUp has dedicated `/vs-asana`, `/vs-notion` pages that rank highly on Google for competitor searches. Annoto should have `/vs-[competitor]` pages for its main alternatives. These are high-intent, late-funnel visitors and convert at 2–3x the homepage rate.

### 8. Footer as a conversion asset
Top SaaS sites use the footer as a mini-sitemap AND a last-chance CTA. Annoto's footer should include: newsletter signup, quick links to all main pages, trust badges (FERPA, LTI), and "Book a Demo" one more time.

---

## Recommended Build Order (Phases)

**Phase 1 — Foundation (build first)**
- [ ] Redesign Home
- [ ] New: `/demo` (Book a Demo page)
- [ ] New: `/features` (Features overview)
- [ ] New: `/features/ai` (Lumo AI Copilot) ← high priority, AI is top buying trigger
- [ ] New: `/integrations` + 5 individual LMS pages (CMS collection)
- [ ] Restore: `/pricing`

**Phase 2 — Persona & proof**
- [ ] Redesign `/education`, `/corporate`, `/k12`, `/media`
- [ ] New: `/customers` + 3 case studies

**Phase 3 — Depth & SEO**
- [ ] Sub-pages: `/features/collaboration`, `/features/analytics`, `/features/interactive-learning`
- [ ] `/why-annoto` (repurpose existing docs content)
- [ ] `/resources/rsi` (RSI compliance guide + lead magnet)
- [ ] Blog improvements + resource hub

**Phase 4 — Trust & growth**
- [ ] `/security` page
- [ ] `/partners` + sub-pages
- [ ] `/careers` restore
- [ ] G2 badge integration on homepage + pricing

**Phase 5 — Conversion optimization**
- [ ] Interactive product tour `/tour`
- [ ] Comparison pages `/vs-[competitor]`
- [ ] Mid-scroll lead capture (content offer / benchmark report)
- [ ] ROI calculator
