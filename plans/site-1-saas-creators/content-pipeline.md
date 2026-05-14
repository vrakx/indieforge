# Content Pipeline — Article Workflow

**Status:** Active  
**Last Updated:** 2026-05-14

## Overview

Every article follows a 5-stage Kanban pipeline. Each stage is a Hermes Kanban task assigned to the appropriate specialist profile. The dispatcher auto-promotes tasks when parent dependencies are met.

## Pipeline Stages

### Stage 1: Research (Profile: researcher)
**Input:** Target keyword + competition analysis from M1  
**Output:** Research brief with:
- Competitor articles analyzed (top 5 SERP results)
- Content gaps identified (what competitors miss)
- Internal linking opportunities within site
- Suggested article structure/outline

### Stage 2: Outline (Profile: writer/pm hybrid)
**Input:** Research brief  
**Output:** Detailed outline with:
- H2/H3 heading structure
- Key points under each section
- Affiliate placement spots (native, not ad-like)
- Internal link targets (existing articles)
- Word count target (1,500-3,000 words)

### Stage 3: Draft (Profile: writer)
**Input:** Approved outline  
**Output:** Complete draft article in MDX format with:
- SEO-optimized title tag and meta description
- Proper heading hierarchy (H1 → H2 → H3)
- Affiliate links placed naturally at comparison points
- Internal links to existing articles
- Comparison tables where applicable
- FAQ section (schema-ready)

### Stage 4: Review (Profile: reviewer/analyst)
**Input:** Draft article  
**Output:** Reviewed article with:
- Grammar/spelling fixes
- Readability score check (target: Grade 8-10)
- Affiliate link verification (all links working + nofollow=true)
- Internal link completeness
- SEO meta tags verified
- Final approval or revision request

### Stage 5: Publish (Profile: ops/infra)
**Input:** Reviewed MDX file  
**Output:** Live article with:
- File added to content directory
- Sitemap regenerated
- Google Search Console pinged
- Social sharing images generated
- RSS feed updated

## Article Quality Checklist

Before publishing, every article must pass:
- [ ] Target keyword in H1 tag
- [ ] Keyword in first 100 words
- [ ] At least one internal link to existing content
- [ ] At least one outbound link to authoritative source
- [ ] Minimum 3 comparison points or data points
- [ ] At least one affiliate link placed naturally
- [ ] No keyword stuffing (keyword density <2%)
- [ ] Readable grade level ≤10th grade
- [ ] All images have alt text
- [ ] Mobile responsive (test in browser)

## Kanban Task Naming Convention

```
research: [target keyword] - [article type]
outline: [target keyword] - awaiting research from T#
draft: [target keyword] - awaiting outline from T#
review: [target keyword] - awaiting draft from T#
publish: [target keyword] - awaiting review from T#
```

## Example Task Chain for First Article

```
T1 (researcher): research: Systeme.io vs Kajabi for course creators
T2 (writer): outline: Systeme.io vs Kajabi — parents: T1
T3 (writer): draft: Systeme.io vs Kajabi — parents: T2
T4 (reviewer): review: Systeme.io vs Kajabi — parents: T3
T5 (ops): publish: Systeme.io vs Kajabi — parents: T4
```

---

*Pipeline optimized for our Hermes Kanban system. Adjust stages as we learn what works.*
