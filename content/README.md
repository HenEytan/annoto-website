# Content drafts ready for Webflow

22 new pages (about 11,900 words), written 2026-09-29 from `docs/content-growth-plan-2026-09-28.md`.
Nothing here is live yet. `python3 content/build.py` checks every internal link against `live-paths.txt` and rebuilds `dist/`.

## Blog posts (10) -> Blog Posts CMS
File: `dist/blog-posts-import.csv` (Webflow CMS > Blog Posts > Import CSV).
- Map Category and Author to the reference fields (all posts use author "Annoto Team").
- Import as drafts. Add a Main Image to each post before publishing (reuse a related post's cover or make new ones).
- Body HTML is in `blog/<slug>.html` if you prefer to paste.

## Glossary pages (12) -> static pages
Each `glossary/<slug>.html` fits the existing glossary template (`/glossary-in-video-quiz`):
1. Pages > duplicate "In-Video Quiz" > set slug, title, SEO title and description from `dist/glossary-pages.csv`.
2. Set the H1 and the intro paragraph (`h1`, `sub`).
3. Replace the `anr-glo-body` block with the file's body. Classes (`anr-glo-p`, `anr-glo-h2`, `anr-glo-h3`, `anr-glo-ext`, `anr-glo-table`, `anr-glo-th`, `anr-glo-td`) already exist on the site.
4. Update the four chip links (`chips`: path|label) and the CTA paragraph (`cta_p`).
5. Page settings > schema: paste `dist/glossary-jsonld/<slug>.json` (the site-wide Organization/WebSite nodes are already on the template).
6. Add each new term to the `/glossary` hub page.

Note: a draft page `/glossary-retrieval-practice` already exists in Webflow (created 2026-09-28 as a copy of In-Video Quiz, content not yet replaced). Use it for step 1 of that term.

| Term | Slug |
|---|---|
| Retrieval Practice | glossary-retrieval-practice |
| Spaced Practice | glossary-spaced-practice |
| Formative Assessment | glossary-formative-assessment |
| Universal Design for Learning | glossary-universal-design-for-learning |
| HyFlex Learning | glossary-hyflex-learning |
| Microlearning | glossary-microlearning |
| Cognitive Load Theory | glossary-cognitive-load-theory |
| xAPI | glossary-xapi |
| VPAT | glossary-vpat |
| HECVAT | glossary-hecvat |
| Asynchronous Learning | glossary-asynchronous-learning |
| Peer Assessment | glossary-peer-assessment |

## Review before publishing
- Product claims: VPAT/HECVAT availability (`glossary-vpat`, `glossary-hecvat`) and export formats (`glossary-xapi`) are worded conservatively; confirm with the product team.
- Research citations are to well-known studies (Roediger & Karpicke 2006, Dunlosky et al. 2013, Cepeda et al. 2006, Guo, Kim & Rubin 2014, Szpunar et al. 2013, Black & Wiliam 1998, Topping 1998). No invented statistics.
