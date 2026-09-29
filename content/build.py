"""Validate content drafts and build Webflow import files.

Outputs (content/dist/):
  blog-posts-import.csv      Webflow CMS CSV import for the Blog Posts collection
  glossary-jsonld/<slug>.json JSON-LD for each new glossary page (page settings > custom code / schema)
  glossary-pages.csv         Page settings (slug, SEO title, description, H1, sub) for each new glossary page

Run: python3 content/build.py
"""
import csv
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
DIST = ROOT / "dist"
SITE = "https://www.annoto.net"

# Live paths on annoto.net as of 2026-09-28 (Webflow page list + blog CMS).
LIVE_PAGES = set((ROOT / "live-paths.txt").read_text().split())


def parse(path):
    text = path.read_text()
    m = re.match(r"<!--(.*?)-->\s*(.*)", text, re.S)
    meta = {}
    for line in m.group(1).strip().splitlines():
        k, _, v = line.partition(":")
        meta[k.strip()] = v.strip()
    return meta, m.group(2).strip()


def text_of(fragment):
    return html.unescape(re.sub(r"<[^>]+>", "", fragment)).strip()


def faq_pairs(body):
    faq = body.split("Frequently asked questions", 1)[-1]
    return [(text_of(q), text_of(a)) for q, a in
            re.findall(r"<h3[^>]*>(.*?)</h3>\s*<p[^>]*>(.*?)</p>", faq, re.S)]


glossary = sorted((ROOT / "glossary").glob("*.html"))
blog = sorted((ROOT / "blog").glob("*.html"))
new_paths = {"/" + p.stem for p in glossary} | {"/blog-posts/" + p.stem for p in blog}
known = LIVE_PAGES | new_paths

errors = []
for p in glossary + blog:
    meta, body = parse(p)
    links = re.findall(r'href="(/[^"#]*)"', body)
    links += [c.split("|")[0].strip() for c in meta.get("chips", "").split(";") if c.strip()]
    for link in links:
        if link not in known:
            errors.append(f"{p.name}: unknown link {link}")
    if len(meta.get("meta_description", meta.get("seo_description", ""))) > 160:
        errors.append(f"{p.name}: description over 160 chars")
if errors:
    print("\n".join(errors))
    sys.exit(1)

DIST.mkdir(exist_ok=True)
(DIST / "glossary-jsonld").mkdir(exist_ok=True)

with open(DIST / "glossary-pages.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["slug", "page title", "seo title", "seo description", "h1", "sub", "chips", "cta paragraph"])
    for p in glossary:
        meta, body = parse(p)
        slug = meta["slug"]
        url = f"{SITE}/{slug}"
        w.writerow([slug, meta["term"], meta["seo_title"], meta["seo_description"],
                    meta["h1"], meta["sub"], meta["chips"], meta["cta_p"]])
        graph = [
            {"@type": "WebPage", "@id": f"{url}#webpage", "url": url, "name": meta["seo_title"],
             "description": meta["seo_description"], "isPartOf": {"@id": f"{SITE}/#website"},
             "about": {"@id": f"{SITE}/#organization"}, "inLanguage": "en-US",
             "breadcrumb": {"@id": f"{url}#breadcrumb"}},
            {"@type": "BreadcrumbList", "@id": f"{url}#breadcrumb", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE}/"},
                {"@type": "ListItem", "position": 2, "name": "Glossary", "item": f"{SITE}/glossary"},
                {"@type": "ListItem", "position": 3, "name": meta["term"], "item": url}]},
            {"@type": "FAQPage", "@id": f"{url}#faq", "mainEntity": [
                {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
                for q, a in faq_pairs(body)]},
            {"@type": "DefinedTerm", "@id": f"{url}#term", "name": meta["term"],
             "description": meta["term_definition"], "inDefinedTermSet": f"{SITE}/glossary", "url": url},
        ]
        (DIST / "glossary-jsonld" / f"{slug}.json").write_text(
            json.dumps({"@context": "https://schema.org", "@graph": graph}, indent=2, ensure_ascii=False))

with open(DIST / "blog-posts-import.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["Name", "Slug", "Summary", "Body", "Category", "Author", "Published Date",
                "Featured", "Read Time", "Post URL", "Meta Description", "SEO Title"])
    for p in blog:
        meta, body = parse(p)
        w.writerow([meta["name"], meta["slug"], meta["summary"], body, meta["category"], meta["author"],
                    meta["published_date"], "false", meta["read_time"],
                    f"{SITE}/blog-posts/{meta['slug']}", meta["meta_description"], meta["seo_title"]])

words = sum(len(text_of(parse(p)[1]).split()) for p in glossary + blog)
print(f"OK: {len(glossary)} glossary pages, {len(blog)} blog posts, {words} words, all internal links resolve")
