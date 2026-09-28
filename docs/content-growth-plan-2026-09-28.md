# Content growth plan, 2026-09-28

Goal: close the page gap (~160 vs competitors' 256+) with pages that rank and get cited by AI answers, not thin filler.

## Where we are (Webflow, 2026-09-28)
- 141 static pages: **106 live**, 35 draft.
- 43 blog posts live (14 of them are customer stories).
- Live content: 12 comparison pages, 10 glossary terms, 12 integration pages, 4 "quiz for X" pages, 6 discipline pages, 4 persona pages, 13 feature pages, compliance pages (RSI, QM, ADA II).

## What competitors do that we don't
| Competitor | Pattern | Our gap |
|---|---|---|
| FeedbackFruits | Pedagogy Hub, use-case/template library, one page per tool | No use-case library, no reusable templates |
| GoReact | Resources hub: case studies, webinars, podcasts, per-discipline pages | Case studies buried in blog; 6 disciplines only; no webinar pages |
| YuJa | Product x LMS integration pages, event pages, release-note posts | Feature x LMS matrix only 4 pages; no events, no changelog |
| Edpuzzle | Free ready-to-go lesson library, classroom how-tos | No free templates / lead magnets |

## Quick wins (week 1-2)
1. Finish + publish useful drafts (+11): `rsi-video-courses` (or merge into `rsi-regular-substantive-interaction` to avoid cannibalising), `learners-video-submission`, `collaborative-learning`, `feedback-assessment`, `self-learning`, `new/webinars`, `new/reviews`, `new/whats-new`, `new/careers`, `new/newsroom`, `new/academy`. Move the 3 `blog-*` static drafts into the Blog Posts CMS.
2. Delete `/old/*` and `/template/*` drafts (13); 301 old live URLs (`/education`, `/corporate`, `/k12`, `/media`, `/contact-us`) to new pages if not done.
3. Submit sitemap in Search Console; check "Crawled - not indexed" before adding more pages.

## Build out (next 90 days, ~+140 pages)
| Cluster | Pages | Notes |
|---|---|---|
| Glossary -> CMS collection | +30 | Move 10 existing into CMS. Terms: formative assessment, Bloom's in video, UDL, HyFlex, microlearning, cognitive load, spaced retrieval, xAPI, Caliper, SCORM, HECVAT, VPAT, etc. DefinedTerm + FAQ schema |
| Comparisons | +10 | Echo360, VidGrid, Vimeo, Loom, Microsoft Stream, Brightspace Video Note, Moodle H5P, Studio (Canvas) done, plus "PlayPosit vs Edpuzzle"-style third-party pages and "best interactive video tools 2026" list |
| Feature x platform matrix | +20 | Extend `interactive-video-quiz-{lms}` to Blackboard, Brightspace, Schoology, Open edX; add peer-review / video-assignment / analytics x Canvas, Moodle, Kaltura, Panopto. Each needs unique setup steps + screenshots |
| Disciplines | +8 | Psychology, law, medicine, engineering, music/arts, social work, languages (split ESL), MBA online |
| Use-case / template library (CMS) | +15 | Reflection-prompt sets, peer-review rubrics, flipped-class weekly plan, RSI evidence template. Gated download = lead gen |
| Customer stories CMS (`/customers/[slug]`) | +0 net, +6 new | Move 14 stories out of blog with 301s; add metrics, logos, Review schema. Target 6 new stories |
| Blog | +26 | 2/week. Mix: problem posts (RSI, ADA II, AI in teaching), how-tos per LMS, data posts from anonymised Annoto analytics |
| Webinars / events | +6 | One page per webinar (recording + transcript), InstructureCon/EDUCAUSE/OLC/MoodleMoot pages |
| Changelog / What's new (CMS) | +12 | One entry per release, monthly minimum |
| Localized (ES first) | optional | Webflow Localization for top 20 pages; customers in Spain/Italy/NL/Israel |

## Visibility beyond page count
- **AEO / AI answers**: question-led H2s, 40-60 word direct answers, FAQ schema on every product/compare page; track in Screpy + HubSpot AEO.
- **Internal links**: every glossary term links to the feature + compare page; every blog links to 1 feature + 1 solution page; hub pages (`/guides`, `/glossary`, `/customers`, `/alternatives`) link to all children.
- **Off-site**: G2 + Capterra review push (target 30 reviews), listings in Canvas EduApp Center, Moodle plugins directory, Kaltura/Panopto marketplaces, D2L partner directory; co-authored posts with customer faculty; conference talks.
- **Freshness**: add "Updated <date>" to compare/compliance pages and refresh quarterly.

## Guardrails
- Don't publish pages without unique content (steps, screenshots, data). Thin programmatic pages drag the whole domain down.
- One primary keyword per page; check for cannibalisation (e.g. two RSI pages today).
- Measure: indexed pages, non-brand clicks, demo requests per cluster (GA4 `demo_request` key event).
