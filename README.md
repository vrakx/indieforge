# IndieForge

**AI-powered content sites for affiliate revenue — build now, earn by September 2026.**

## Mission

Use our Hermes Orchestrator + local LLM stack to build and operate niche content sites that generate affiliate revenue within 3-4 months of launch. Zero marginal inference cost means we can publish at scale.

## Architecture

```
┌─────────────────────────────────────────────────┐
│                  IndieForge Hub                   │
│  (vrakx/indieforge — project management, plans)  │
└─────────────────────────────────────────────────┘
           │                    │
    ┌──────▼──────┐      ┌─────▼────────┐
    │  Site #1     │      │  Site #2+    │
    │             │      │              │
    │ SaaS for    │      │ (TBD)        │
    │ Creators    │      │              │
    │             │      │              │
    │ tech-directory-site   │
    │ (vrakx/tech-directory-site)       │
    └─────────────┘      └──────────────┘
```

## Project #1: SaaS for Creators & Freelancers

### Niche Selection Rationale

**Niche:** Software tools, workflows, and stacks for creators, freelancers, solopreneurs, and gig workers.

**Why this niche (from research on 2026-05-14):**
- **High recurring commissions:** 20-30% monthly recurring from SaaS affiliate programs (ConvertKit, Systeme.io, Kajabi, Stripe, etc.)
- **AI-friendly content types:** Comparison tables, feature matrices, step-by-step setup guides — all LLM strengths
- **Medium competition:** Big sites exist but sub-niche specificity creates winnable gaps
- **Commercial search intent:** People searching "best payment processor for influencers" are ready to buy
- **3-4 month runway:** ~20-30 quality articles needed to see meaningful traffic

### Target Traffic & Revenue Goals

| Month | Articles Published | Est. Monthly Visitors | Est. Monthly Revenue |
|-------|-------------------|----------------------|---------------------|
| Jun   | 8-10              | 500-1,000            | $50-150             |
| Jul   | 12-15             | 2,000-4,000          | $300-800            |
| Aug   | 15-20             | 5,000-10,000         | $800-2,000          |
| Sep   | Launch Site #2    | 10,000-20,000        | $2,000-5,000+       |

*Revenue based on 20-30% affiliate commissions + display ads. Assumes reasonable SEO performance.*

### Sub-Niche Strategy (Winnable Angles)

1. **Creator Economy Stack** — Tools specifically for YouTubers, streamers, podcasters
2. **Freelancer Operations** — Invoicing, contracts, project management for solopreneurs
3. **No-Code/Low-Code Builders** — Website builders, landing pages, forms for non-devs
4. **AI Tools for Solopreneurs** — AI writing, design, scheduling tools
5. **E-commerce Micro-tools** — Shopify apps, print-on-demand, digital product platforms

### Content Pillars (Article Categories)

1. **Best X for Y** (comparison/review posts) — highest conversion
2. **X vs Y** (direct competitor comparisons) — high intent, easy to rank long-tail
3. **How to [do something] with [tool]** (tutorial/how-to) — builds authority + internal links
4. **Complete guide to [topic]** (pillar pages) — SEO anchor for cluster
5. **Tool roundups** ("10 tools every freelancer needs") — broad traffic, moderate conversion

### Site Tech Stack

- **Platform:** Static site (Next.js or Astro for speed)
- **Hosting:** Vercel (free tier, auto-deploy on push)
- **Analytics:** Plausible or Vercel Analytics
- **DNS:** Custom domain via Cloudflare (cheap SSL + CDN)
- **CMS:** Headless — Markdown/MDX files in repo, no database needed
- **Sitemap:** Auto-generated, submitted to Google Search Console

### Kanban Workflow

```
[Research] → [Outline] → [Draft] → [Review] → [Publish] → [Promote]
 researcher    writer      writer     reviewer   ops/infra   researcher
```

Each article goes through this pipeline. The dispatcher handles transitions automatically via parent-child task linking.

## Repository Structure

```
indieforge/
├── README.md                 # This file — project overview
├── plans/                    # Site plans and strategies
│   └── site-1-saas-creators/
│       ├── niche-analysis.md  # Detailed research
│       ├── content-pipeline.md# Article workflow spec
│       ├── keyword-map.md     # Target keywords + volume/difficulty
│       └── affiliate-programs.md # Programs to join + links
├── sites/                    # Each site in its own subfolder
│   └── tech-directory-site/  # Site #1 (existing repo)
├── kanban-tasks/             # Task summaries and decisions
└── milestones/               # Progress tracking
```

## Milestones

| # | Milestone | Target Date | Status |
|---|-----------|-------------|--------|
| M0 | Project setup + niche research complete | May 14, 2026 | ✅ Done |
| M1 | Sub-niche selection + keyword map | May 15, 2026 | ✅ Complete |
| M2 | Site scaffolding (Next.js/Astro) | May 15, 2026 | ✅ Complete |
| M3 | First 5 articles published | Jun 8, 2026 | 🟡 In Progress (Article #1 written + site rendering ready) |
| M4 | Google Search Console indexed | Jun 15, 2026 | ⬜ Pending |
| M5 | First affiliate revenue earned | Jul 1, 2026 | ⬜ Pending |
| M6 | 500+ monthly visitors | Jul 31, 2026 | ⬜ Pending |
| M7 | Site #2 started | Aug 15, 2026 | ⬜ Pending |
| M8 | Combined revenue >$1k/month | Sep 30, 2026 | ⬜ Pending |

## Collaboration with Grok (Nyx)

This project uses the **GitHub Agent Bridge** (`vrakx/nyx-grok-skills`) for task handoff between Nyx and Grok.

- Issues labeled `task-for-grok` → assigned to Grok
- Issues labeled `task-for-nyx` → assigned to Nyx (Hermes agent)
- All research, plans, and decisions committed to this repo
- User follows progress via issue comments

## Monetization Stack

| Method | Timeline | Est. Revenue Share |
|--------|----------|-------------------|
| SaaS Affiliate (20-30% recurring) | Day 1-30 | 60% |
| Amazon Associates (tools/hardware) | Month 1-2 | 15% |
| Display Ads (Mediavine/Raptive at 50k/mo) | Month 4+ | 15% |
| Sponsorships (newsletter/tools) | Month 3+ | 10% |

## Risks & Mitigations

- **Google algorithm update** → Diversify across multiple sub-niches, not one giant article
- **Affiliate program changes** → Join multiple programs, don't rely on single source
- **Content cannibalization** → Careful keyword mapping, unique angles per article
- **Slow initial traffic** → Supplement with Pinterest/Reddit promotion for first 2 months

---

*Last updated: 2026-05-14 by Grok*
