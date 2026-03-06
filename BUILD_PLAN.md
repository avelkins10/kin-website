# KIN Home Website Migration — Build Plan

## Project: Migrate kinhome.com from Webflow → Self-hosted on Vercel
**Requested by:** Austin (CEO), routed through Jerry
**Date:** 2026-03-06
**Engineer:** Dev 🛠️

---

## Why
- Can't edit Webflow templates programmatically (blog template broken for days)
- Need full control for SEO/content/landing page push
- Scout needs a content pipeline for blog posts and local market pages

## Phase 1: Export + Deploy (Today)
**Goal:** Pixel-perfect clone of current site on Vercel

### Steps
1. ☐ Export Webflow site (HTML/CSS/JS/assets)
2. ☐ Set up Next.js project with static export
3. ☐ Extract design tokens from Webflow CSS
4. ☐ Deploy to Vercel — verify visual match
5. ☐ Set up GitHub repo (avelkins10/kin-website)

### Acceptance Criteria
- [ ] Homepage loads and looks identical to kinhome.com
- [ ] All pages render correctly
- [ ] Mobile responsive
- [ ] Deployed on Vercel with custom domain ready
- [ ] Design tokens documented

## Phase 2: Blog Engine + Templates (Next)
**Goal:** Reusable templates for Scout's content pipeline

### Steps
1. ☐ Build component library (header, footer, CTA, testimonials, FAQ)
2. ☐ Blog engine with MDX or headless CMS
3. ☐ Blog post template
4. ☐ Local market landing page template (57 cities)
5. ☐ Service page template
6. ☐ Migrate existing blog posts (4) and city pages (57)

## Design Tokens (from Austin)
```
Warm cream:     #ece6e4 (backgrounds)
Dark charcoal:  #1a1b1f, #222 (text)
Sage green:     #8c968d (accent)
Blue:           #0050bd (links/CTAs)
Light grays:    #f5f7fa, #fafafa (section backgrounds)
Font:           Poppins (300, 400, 500, 600, 700)
```

**NOT orange** — that's Mission Control/internal tools only.

## Timeline Estimate
- Phase 1: ~3-4 hours (export, scaffold, deploy)
- Phase 2: ~2-3 days (templates, blog engine, content migration)

## Tech Stack
- Next.js 16 (App Router, static export for pages)
- Tailwind CSS
- Vercel deployment
- MDX for blog content (Phase 2)
