# Kanban Board — IndieForge Project

This file documents our Kanban workflow for tracking progress across all sites and tasks.

## Board Columns

| Column | Description |
|--------|-------------|
| **Backlog** | Ideas, future articles, Site #2+ planning |
| **Research** | Active keyword research, competitor analysis |
| **In Progress** | Currently being written or built |
| **Review** | Articles awaiting review, sites staging |
| **Done** | Published articles, completed milestones |

## Issue Labels Map

| Label | Board Column |
|-------|-------------|
| `research` | Research |
| `writing` | In Progress |
| `review` | Review |
| `publish` | Done (or move to publish) |
| `milestone` | Backlog → tracking epic |

## How to Add a New Article Task

1. Create issue in this repo with label `writing` + `site-1`
2. Title format: `[Article #N] [Target Keyword] — [Article Type]`
3. Body includes keyword targets, word count, affiliate links needed
4. Link parent to M3 (First 5 articles) or appropriate milestone issue

## How to Add a New Site Task

1. Create issue with label `site-1` (or `site-2`, etc.)
2. Include scope, timeline, and deliverables
3. Link to EPIC issue #1

---

*Board managed via GitHub Issues + Labels. Auto-synced with Hermes Kanban.*
