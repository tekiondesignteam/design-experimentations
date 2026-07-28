# Prototype Journal

Version history of `tekion_autonomous_v{NNN}.jsx`. New versions branch from the previous one. Most recent at top.

## Current latest: v140

---

## v140 — Inline creatives per stage
**What changed:**
- Added `JOURNEY_STAGE_CREATIVES` content map keyed by journey id + stage index
- Authored per-stage creative content for j1, j2, j4, j7 (the journeys most likely demoed)
- Three new preview components: `JourneyEmailPreview`, `JourneySmsPreview`, `JourneyChannelPlaceholder`
- `JourneyStageCard` now expandable — chevron-right rotates on expand, reveals creative previews below the existing top row
- Inline expand keeps users in journey context (not opening a side sheet)
- Non-previewable channels (BDC call, Direct mail) show "View in Creative Studio" placeholder

**Why:** A journey isn't one creative — it's a sequence per stage. Adding a top-level Creative ingredient row would duplicate Flow's navigational structure. Co-locating creative with each stage is the honest model.

**Open follow-ups:** Backfill content for j3, j5, j6. Edit canvases on previews.

---

## v139 — Journey cards cleaned up
**What changed:**
- Removed status chip from `JourneyRow` (tab membership communicates status)
- Removed green dot from journey name
- Top-aligned KPIs (`alignItems: 'flex-start'`) so metrics with sub-lines don't push simpler metrics into mid-card drift
- Padding/spacing aligned to Campaign card vocabulary (16/18, 14px title -0.005em letter-spacing)
- `Metric` component updated: 11px label / 13px value (was 10/14)

**Why:** Card design referenced Campaign Overview card. The user pointed out the centered KPIs looked shabby; chip and dot were redundant given tab labels.

---

## v138 — Three-state status taxonomy
**What changed:**
- `healthy` and `attention` → `active`
- `paused` → `inactive`
- `proposed` → `pending_review`
- Tab label "Ongoing" → "Active" (internal id stays `'ongoing'`)
- All status references updated (chip, row pill, default tab logic, header CTA, performance empty state)

**Why:** Four statuses collapsed to three for cleaner mental model. "Healthy" was redundant when "Active" covered running journeys.

**Known hygiene:** Approval card kinds still named `journey-paused` (not `journey-inactive`). Internal tab IDs `'ongoing'` and `'plan'` not renamed.

---

## v137 — Plan → Overview, KPI bar Campaign-aligned
**What changed:**
- Tab label "Plan" renamed to "Overview" (id stays `'plan'`)
- KPI bar restyled to match `CampaignStatusBlock`: 16px value above 11px label, 28px gap, `letter-spacing: -0.005em`, no sub-lines
- Stages metric removed from KPI bar (static config, not operating signal)
- Conversion rate conditionally hidden when null

---

## v136 — Removed Channels, folded Suppression into Audience
**What changed:**
- Channels row removed from Plan (per-stage channels already in Flow)
- Suppression row removed (rules are universal; the *count* lives in Audience meta now)
- `deriveAudience` updated: each meta line includes suppression count with reason (e.g., "32 suppressed (active deal)")
- Plan reads as 5 elements: Trigger → Audience → Flow → Goal → Compliance

---

## v135 — Plan rows + Flow restyled to Campaign IngredientRow
**What changed:**
- `JourneyPlanRow` rebuilt: transparent default, hover-fill, 36px icon, 11px label / 15px value / optional 12px meta
- Plan ingredients return `{ value, meta }` shape instead of single string
- `JourneyFlowInlineSection` outer row matches Plan row visually
- Stages render as bordered cards indented under the icon column
- Connecting line between stages removed (cards do the visual sequencing)

**Why:** Referenced `IngredientRow` visual treatment from Campaign detail. Flat-row, no card backgrounds, hover-fill.

---

## v134 — Merged Plan and Flow tabs
**What changed:**
- Flow tab dropped
- "Touches" ingredient row replaced with inline `JourneyFlowInlineSection`
- Plan tab now reads: Trigger → Audience → Flow (inline) → Channels → Suppression → Goal → Compliance
- `JourneyFlowBody` component removed entirely

**Why:** Touches row was a degenerate summary; real flow info lives inline now.

---

## v133 — Journey detail page chrome
**What changed:**
- New `JourneyDetailPage` component (full-page, replaces workspace shell)
- Reuses `CampaignBackNav` with "Back to journeys" label
- `JourneyHeader` with title + status chip + KPI status block
- Tab strip: Plan / Flow / Performance (later merged in v134)
- Plan, Flow, Performance bodies built
- `selectedJourney` state lifted to `WorkspacesView` (matching `selectedCampaign` pattern)
- `JourneyDetailPlaceholder` overlay deprecated (still defined as dead code)

---

## v132 — Department filter on Journeys
**What changed:**
- `department` field added to all 7 journeys in `JOURNEYS_SEED`
- `FilterPill` for Department (All / Sales / Service / Parts) in Journeys workspace
- Filter applies to tab content only, not approval rail
- Empty state copy adapts when filter active
- "Configure new journey" button moved to filter row

---

## v131 — Journeys workspace rebuilt
**What changed:**
- Replaced old aggregate-metrics-then-flat-list construct with Campaigns parity
- Approval rail at top with 3 cards (j7 new, j3 health, j5 paused)
- Tabs: Ongoing (later Active) / Inactive
- Approval blocks added to j3, j5; new j7 entry added
- New `JOURNEYS_SEED` entries for approval rail
- `APPROVAL_CARD_KINDS` extended with `journey-new`, `journey-health`, `journey-paused`

**Note:** A previous v131 attempt (visual upgrade with gradient backdrop and glassy panel) was reverted due to file size concerns. The current v131 is the fresh journeys-workspace work.

---

## Older versions (v89-v130)

Detailed transcripts available in `/transcripts/`. Highlights:

- **v89-v109:** Initial scenarios, FloatingActionChip primitive
- **v110-v118:** Performance Pass-2 rollback, navOrigin pattern, CampaignStatusChip
- **v118-v123:** AIWidget introduction and unification
- **v120-v128:** AIWidget global mounting, edit-creative routing through it
- **v129-v130:** Viewport-aware popover positioning, live-ref anchoring for popovers

---

## Versioning protocol

- Branch the file: `cp tekion_autonomous_vN.jsx tekion_autonomous_v(N+1).jsx`
- Edit only the new file
- Validate before shipping: braces/parens delta = 0, no em-dashes, no ALL CAPS styling
- Update this journal with what changed and why
- The old version stays untouched as the rollback point
