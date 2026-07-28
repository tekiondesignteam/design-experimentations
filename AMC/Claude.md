# Tekion Marketing Cloud (TMC) Prototype

You are working with Palash, a product leader at Tekion, on a React prototype for **Tekion Marketing Cloud** — an AI-native marketing platform built on top of Tekion's Automotive Retail Cloud (ARC) dealer management system. This prototype is used for customer validation, internal alignment, and design exploration.

## What this is

A single-file React JSX prototype. The whole app lives in one file:

```
src/tekion_autonomous_v{NNN}.jsx
```

The current latest version is `v140`. Every change branches the file (v140 → v141 → v142), never edits in place. This makes rollback trivial when a direction doesn't work out.

The prototype is heavy — currently ~27,000 lines, ~1.1MB. That's intentional. The file IS the prototype. Don't try to split it into modules unless explicitly asked.

**Test persona:** Marketing Manager / Internet Director at **Tachyon Motors**, a mid-size single-rooftop dealer doing ~150 new + 80 used vehicles per month. All seeded content (campaigns, journeys, customer names, vehicles) should be plausible for this dealer.

## Hard rules — never break these

These are the rules that, if violated, force a rework. Validate them before shipping any change.

### Copy rules
- **No em-dashes** (`—`). Use `, ` or `. ` or the middle-dot `·`. Search for `\u2014` to find them.
- **No ALL CAPS** in UI. No `textTransform: 'uppercase'`. Sentence case for labels, pills, headers.
- **Acronyms stay capitalized**: OEM, SMS, BDC, DMS, TCPA, RO, VIN, ROAS, RLSA, F&I.
- **No commanding language**. Prefer "I'd like your eye on this" over "I need you to look at this."
- **Conversational tone**. Talk to the user like a colleague, not a manager.

### Design token rules
- Use tokens, never hex codes. The token object is `t` (in scope throughout the file).
- Key tokens: `t.bgPrimary` (#FFFFFF), `t.surface`, `t.surfaceMuted`, `t.textPrimary` (#161616), `t.textSecondary`, `t.textTertiary`, `t.accent` (#4285F4), `t.accentHover`, `t.accentSoft`, `t.success`, `t.successSoft`, `t.warning`, `t.warningSoft`, `t.danger`, `t.dangerSoft`, `t.textOnColor`.
- Use `fontStack` constant for all typography.
- All numbers render with `fontVariantNumeric: 'tabular-nums'`.
- `TEKION_AI_LOGO` is the orbital gradient logo constant for AI persona surfaces.

### Branding
- Product UI says "Tekion", not "TMC".
- Tekion teal wordmark for brand mark.
- Tekion AI orbital logo (teal-to-blue gradient) for AI persona/avatar.
- Simple sparkle icons (lucide `Sparkles`) only for secondary AI moments.

### Terminology
- "Audience" not "Segment" in UI copy. (Segment = internal rule/filter logic. Audience = user-facing materialized entity.)
- Role-based references only: "Marketing Manager", "Service Advisor", "Dealer Principal" — never invented persona names like "Marcus" or "Sarah" in production copy.
- AI agents (Service AI, Inventory AI) are agent-agnostic — they do NOT affect the IA structure.

### Responsive behavior
- Below 1100px: nav collapses to icons-only, opens as overlay when toggled.
- Below 900px: two-column grids stack.
- Below 720px: paddings tighten, card action buttons stack vertically.
- Components accept `isSmall` and `isTablet` props that flow from `useBreakpoints()`.

## Workflow — how to make changes

### 1. Branch the file
```bash
cp src/tekion_autonomous_v140.jsx src/tekion_autonomous_v141.jsx
```
Edit only the new file. Never edit a previously-shipped version.

### 2. Read before writing
Before designing a new component, find and read the Campaign equivalent. Campaigns is the visual language anchor — journeys, audiences, etc. should mirror its vocabulary unless there's a deliberate reason to diverge.

Key components to reference (search by name in the file):
- `CampaignOverviewCard` — list-view card pattern (padding 16×18, 14px title, 12px tertiary subtitle)
- `IngredientRow` — flat-row pattern (transparent default, hover-fill, 36px icon, 11px label / 15px value / optional meta)
- `CampaignStatusBlock` — KPI bar pattern (value 16px above 11px label, 28px gap, `letter-spacing: -0.005em`)
- `CampaignDetailPage` — full-page detail chrome pattern
- `ApprovalCard` — shared primitive for approval rails across the app

### 3. Validate before shipping
After making changes, always run these checks:

```javascript
// In the file, count delta:
const code = fs.readFileSync(path, 'utf8');
const opens = (code.match(/\{/g) || []).length;
const closes = (code.match(/\}/g) || []).length;
// Braces delta should be 0
// Parens delta should be 0
```

And content checks:
- `c.count('\u2014') === 0` (no em-dashes)
- `"textTransform: 'uppercase'" not in c` (no ALL CAPS styling)
- All component definitions you reference actually exist in the file

### 4. Don't ship without honest notes
When presenting a change, include:
- **What changed** (the actual diff in plain language)
- **What stayed the same** (explicitly call out untouched areas to reassure)
- **Honest notes** (what was simplified, what's still dead code, what's at risk, where the user might disagree)
- **Test flow** (specific steps to verify the change works)

This isn't decoration. It's the contract. Palash uses these notes to decide what to push back on.

## File anatomy

The single file is organized roughly:

1. **Imports** (line 1-30) — React + lucide-react icons. If you reference a new icon, add it to the lucide import at line 1.
2. **Tokens, constants, seed data** (line 30-7000) — `t`, `fontStack`, `TEKION_AI_LOGO`, all seed arrays (`CAMPAIGNS_SEED`, `JOURNEYS_SEED`, content maps, etc.)
3. **App shell** (line 7000-7600) — root component, view router, WorkspacesView state owner
4. **Home / Strategy / Performance / Settings views** (line 7600-8500)
5. **Campaigns** (line 8500-21000) — workspace landing, detail page, ingredient rows, edit canvases, creative previews
6. **Journeys** (line 21000-22700) — workspace landing, detail page, ingredient rows, stage cards, creative previews
7. **Shared components** (line 22700-end) — AIWidget, AIDiscussContext, Discussable, ApprovalCard, FilterPill, etc.

### Finding things
Don't grep blindly. Useful patterns:
- `^function ComponentName` — find a component definition
- `<ComponentName ` — find usages of a component
- `id: 'j[1-7]'` — find a specific journey in the seed
- `id: 'c_acq'|'c_serv'|'c_ret'` — find a campaign in the seed
- `const APPROVAL_CARD_KINDS` — the approval card type registry

### Known dead code (don't delete without explicit ask)
- `JourneyDetailPlaceholder` — old overlay, no longer mounted
- `RefinePopover`, `DiscussPopover` — superseded by `AIWidget`
- Legacy `CAMPAIGNS_SEED` entries `c1`, `c2`, `c3` — pre-date current canonical `c_acq`/`c_serv`/`c_ret`
- Various orphaned content blocks in `CAMPAIGN_DISCUSS_CONTENT`

A cleanup pass would save ~5-8K lines but carries regression risk. Don't initiate this without an explicit ask.

## Working style — how Palash collaborates

### Think before cutting
For non-trivial changes, narrate your thinking briefly before executing:
- What's actually being asked
- What you're considering doing
- What you're choosing not to do (and why)
- What you'd like confirmation on, vs what you'll commit to as a default

This is especially important when a request has implications the user might not have thought through. Surface the tradeoff, propose a default, then go unless they push back.

### Push back when warranted
If a request would create a problem (visual inconsistency, dead code, brittle architecture), say so. Palash explicitly prefers a thought partner over a yes-man. Phrasing like "I want to flag one concern before cutting…" works.

### Don't ask permission for the obvious
If a change is clearly inside the scope of what was asked, just do it. Don't ping-pong with clarifying questions when context makes the answer clear.

### Single direction at a time
Palash gates work session-by-session. Finish one direction cleanly before introducing the next. If you have ideas for follow-ups, list them in "Honest notes" — don't sneak them into the diff.

### Comments as memory
Every meaningful component gets a comment block explaining its design intent. Future sessions (yours or another Claude's) read these to understand WHY, not just WHAT. Examples of good intent comments:
- "Flow used to live on its own tab. Pulled inline because the Touches row was a degenerate summary…"
- "Status chip removed from list cards because the tab already communicates status…"

## Strategic context — the must-know basics

For deeper strategic context (competitive frame, AI-native principles, IA decisions), see `/docs/STRATEGY.md`. The basics needed for any change:

- **Campaigns vs Journeys** — Campaigns are proactive, user-driven, time-bounded. Journeys are reactive (alert-driven), configure-once, perpetual. Same chrome and patterns, different content semantics.
- **Eight top-level modules** — Command Center, Marketing/Plan, Audiences, Creative Studio, Campaigns, Journeys, ROI Performance, Settings. Locked. Don't propose adding or removing modules without explicit conversation.
- **Tier 1 vs Tier 2** — same IA, only intelligence depth varies. Never change structure based on tier; show/hide widgets or data points instead.
- **Competitive moat** — DMS-native closed-loop attribution (VIN-level, deal-level data). Any feature should reinforce this moat, not generic-martech-ify the product.

## Reference docs

- `/docs/STRATEGY.md` — deeper strategic context, competitive frame, AI-native dimensions
- `/docs/JOURNAL.md` — version history with what changed in each iteration
- `/transcripts/` — full prior conversation transcripts if deep context is needed
- This file (`CLAUDE.md`) — operating manual

When in doubt about strategic intent, ask Palash. When in doubt about visual or interaction patterns, read the Campaign equivalent in the file.

## Active work area

Most recent work (v131-v140) has been on the **Journeys** surface — workspace landing, detail page, status taxonomy, inline creative previews. The detail page Overview tab is in good shape. The **Performance tab** is the next major area to redesign — it's currently built but uses pre-v135 visual treatment and needs the Campaign-style flat-row vocabulary applied.

Other open threads:
- Edit canvases per ingredient (Trigger, Audience, Flow, Goal, Compliance) — each is its own session
- Backfill per-stage creative content for j3, j5, j6 in `JOURNEY_STAGE_CREATIVES`
- Internal naming alignment: `journey-paused` approval kind → `journey-inactive`, tab IDs `'ongoing'` → `'active'`, `'plan'` → `'overview'` (low-priority hygiene)
- Visual workflow editor for branching journeys (currently linear stage list)
