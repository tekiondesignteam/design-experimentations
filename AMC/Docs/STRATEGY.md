# TMC Strategy & Design Principles

This is the deeper context CLAUDE.md points to. Read this when a design decision needs strategic grounding.

## What TMC is

Tekion Marketing Cloud is an **AI-native marketing platform** built on top of Tekion's Automotive Retail Cloud (ARC) dealer management system. It's not a marketing tool with AI features bolted on — intelligence is the foundation.

## Who it's for

Six personas, accessed via role-based references (never invented names):

- **Dealer Principal / GM** — owner-operator view, P&L focused
- **Marketing Manager / Internet Director** — primary user, owns campaigns and journeys (this is our test persona)
- **Service Advisor** — service-side touchpoints
- **Sales Manager** — sales lifecycle interactions
- **Group CMO** — multi-rooftop view, brand consistency
- **OEM Regional Manager** — manufacturer-side oversight
- **Agency Creative Director** — external creative collaboration

Prototype test setting: **Tachyon Motors**, single-rooftop Toyota dealer, ~150 new + 80 used per month.

## Competitive frame

**Primary threat: Impel AI** — reactive conversational intelligence, agentic by design.

**TMC differentiation: proactive, predictive, outcome-based intelligence native to the DMS.**

The structural moat is **DMS-native closed-loop attribution**: VIN-level, deal-level, RO-level data feeding marketing intelligence in a way no standalone martech tool can replicate. Sprinklr, Adobe Marketing Cloud, Salesforce Marketing Cloud operate at the OEM/brand layer, not the dealer layer. They can't see the deal close. We can.

**Go-to-market priority:** existing Tekion ARC dealers first → dealer groups second → OEMs as a later multiplier.

## AI-native principles

Intelligence is foundational, not a feature layer. Low-criticality items should already be handled by AI; high-criticality items are where the user looks, decides, and uses AI assistance to execute.

The six AI-native experience dimensions:
1. **Contextual Adaptiveness** — the system reads situation and adjusts
2. **Anticipation** — surfacing what's likely to matter before the user asks
3. **Judgment** — the system has opinions, surfaces them
4. **Learning** — patterns from past decisions improve future ones
5. **Transparency** — the system shows its reasoning, doesn't black-box
6. **Discovery** — the system surfaces novel opportunities for human decision-making but never acts autonomously

The Discovery principle is load-bearing: AI proposes, human disposes. Approval cards are the formal mechanism for this.

## Information architecture

**Eight top-level modules, locked:**

1. **Command Center** — "What makes me successful today?" cockpit. NOT a strategy surface. Now-oriented daily operating view.
2. **Marketing / Plan** — strategy and planning surface. Budget distribution lives here.
3. **Audiences** — segment definitions and saved audiences
4. **Creative Studio** — creative asset management
5. **Campaigns** — proactive, time-bounded outreach
6. **Journeys** — perpetual, reactive, always-on customer programs
7. **ROI Performance** — attribution and outcome reporting
8. **Settings** — configuration

**Tier 1 vs Tier 2 boundary:** same IA, same modules, same tabs. Tier difference is intelligence depth — Tier 1 shows rawer data, Tier 2 has AI doing more of the work. Show/hide widgets or data points, NEVER change base structure.

## Campaigns vs Journeys

The single most important architectural distinction in the product.

| | Campaigns | Journeys |
|---|---|---|
| **Entry** | Proactive (intent-driven) | Reactive (alert-driven) |
| **Duration** | Time-bounded | Perpetual / always-on |
| **Authorship** | User-driven | System-driven, AI-maintained |
| **Frequency** | High (many campaigns running) | Low (configure once, runs forever) |
| **User's job** | Build and launch | Supervise and monitor |
| **Schedule** | Has start/end dates | Has trigger condition, no calendar window |
| **Budget** | Total budget for the run | Monthly burn rate, ongoing |
| **Creative** | One cohesive creative system | Sequence of per-touch creatives |

The mental model: a Campaign is a thing you DO. A Journey is a thing you SET UP and let RUN.

## Workflow

The canonical TMC workflow (mapping to the eight modules):

```
Strategy → Planning (budget distribution) → Creative Production →
Campaign Execution → Customer Activation → Attribution → loops back
```

Paid media is a planning-phase budget allocation activity, NOT a separate channel.

Conversational AI is NOT a channel either — it's the **interaction paradigm**. The product is a living intelligence you converse with, not a tool with a chat sidebar.

## Terminology — internal vs user-facing

**Always user-facing:** "Audience", "Tekion", "Marketing Manager", "Service Advisor"

**Internal only, never in UI:** "Segment", "TMC", invented persona names like "Marcus" or "Sarah"

**Acronyms that stay ALL CAPS:** OEM, SMS, BDC, DMS, TCPA, RO, VIN, ROAS, RLSA, F&I, CRM, KPI, API

**Status taxonomies (locked):**
- Campaign statuses: `queued`, `active`, `paused`, `ended` (with build modes: `awaiting_approval`)
- Journey statuses: `pending_review`, `active`, `inactive` (three states only, as of v138)

## Open product questions

These are decisions still in flight, listed so future Claudes don't try to settle them unilaterally:

- **Projected sales revenue placement** — should appear in journey canvas, Command Center, or both?
- **Second-level IA content** within each of the eight modules
- **Tier 1/2 progression** — at what point does a dealer "graduate" to Tier 2 capabilities?
- **OEM co-op for Journeys** — currently no funding concept on journeys; may need one for OEM-backed perpetual programs

When any of these come up in a session, surface them rather than assume.
