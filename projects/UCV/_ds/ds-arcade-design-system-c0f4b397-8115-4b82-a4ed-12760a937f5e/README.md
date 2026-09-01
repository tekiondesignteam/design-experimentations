# Arcade Design System

The **Arcade** design system (internal name) used by Tekion for its dealership platform products. This repo is the design foundations — brand, tone, visual language — plus a working React UI kit that prototypes pages built on it.

> **Heads up on naming:** the project is titled *Arcade* but the codebase, tokens, logos, and marketing assets are all **Tekion**. Treat "Arcade" as the internal system name and "Tekion" as the product/brand that appears in UI.

For engineering guidance — how to compose pages, the guardrails against duplication — see [CLAUDE.md](CLAUDE.md), the slim module router. Where components live and their full prop surface is documented per module, starting with [ui_kits/dms/CLAUDE.md](ui_kits/dms/CLAUDE.md) (the ARC base catalogue). This file is the design side.

---

## What's in this repo

- [colors_and_type.css](colors_and_type.css) — every design token as a CSS custom property. Single source of truth. Import first on any page.
- [fonts/](fonts/) — 9 weights of Proxima Nova, wired via `@font-face` in the tokens file.
- [assets/](assets/) — Tekion logos, empty/error illustrations, doc-type icons (csv, excel, pdf, txt, xml).
- [ui_kits/dms/](ui_kits/dms/) — React UI kit: shared shell, primitives (every atomic control — Checkbox / Radio / ToggleSwitch / Badge / Lozenge / Tag / UserTag / Avatar / ImageContainer — the last a wrapper that locks a large preview image to a fixed aspect ratio), the **Text Input family** (five public fields, each its own file — `TextInput` / `Select` / `SearchInput` / `TextArea` / `DateInput` — over a shared internal `InputBases.jsx`; each field carries its own label / required / helper / validation chrome, replacing the retired `Input` / `Select` / `FormField`; the date field is `DateInput`, not `DatePicker`, and opens the existing `DateView` panel; a phone field is composed as a `TextInput` + a prefix/suffix affix, with no `PhoneInput`), the Button family in `Buttons.jsx` (six Figma-named components over one shared private skin core — Button / DestructiveButton / LinkButton / IconButton / DropdownButton / SplitButton), `ButtonGroup` (single-select **spaced** button group — Day/Week/Month switchers and similar view-switchers; spaced pills, 8px gaps; `view` primary/secondary × `size` medium/large; `items`-driven), `SegmentControl` (single-select **connected** segmented control — a unified track where segments abut and share a 1px border; `segmentStyle` fill/muted × `size` medium/large; `items`-driven; all labels semibold; 1:1 Figma "01 Segment control" node 6609-32720; own `--segment-*` tokens), the Status family in `Status.jsx` (`Status` indicator-only + `StatusWithLabel` — colored dot/flag status, 12 colors, `open`=hollow ring, optional label + dropdown caret; private `StatusBase` core; own `--status-*` tokens; replaces the retired StatusPill/InlineStatus), `DropdownMenu` (the canonical floating options-list panel in `DropdownMenu.jsx` — a portaled popper that renders the menu only while the consumer owns the trigger + open state; `type` simple/check/user/status × `selectionMode` none/single/multiple, items-driven, with an optional titled header, a "Create" row, a multi-select action bar, and drag-reorder; molecule with no token block; **replaces the old inline `Select` popover + the bespoke `Table` kebab** and is now composed by `Select` / `Table` / `DropdownButton` / `SplitButton` / `Pagination` / `StatusWithLabel` / `FilterBar`), icons, tokens bridge, plus page-chrome components (NavBar, `FilterBar` (the items-driven revamp of Figma "02 Table Filter" — three left-cluster modes derived from props: selection / filter / empty; each filter is a file-private bottom-border `FilterSelect` or a library `DateInput`; molecule, no token block; composes `DropdownMenu`/`SearchInput`/`DropdownButton`), QuickFilters, Pagination, Footer), the Tabs family in `Tabs.jsx` (five `items`-driven tab strips — `Tabs` (Default underline, `size` small/large + `background`) / `CircularTabs` (pills) / `BottomSheetTabs` (connected cells) / `ProcessTabs` (numbered chevron steps) / `CRMTabs` (bowtie-connected pills); renders the strip only, molecule with no `--tabs-*` token block; **replaces the retired `TabBar`**), form layout (FormGroup / FormRow / FormCell), the generic `<Table>`, `<Modal>` (centered dialog — `size` small/medium/large, header via `ARCInternal.OverlayHeader`, `footer` default-2-CTA/false/node, `overlay` on/off; no border-radius/shadow, Figma-faithful), `<SideSheet>` (right-edge drawer — same `size`/header/footer/overlay API, widths 451/676/1014 px), `<SideNavigation type="single\|multi\|jump">` (content-area left rail; replaces the legacy `variant="SingleLevel\|JumpNav\|MultiLevel"` API), `<Toast>` (elevated notification card — information / caution / success / error), `<Tooltip>` (dark hover-hint bubble — 9 position×align placements), the Notification family in `Notification.jsx` (`<Notification>` — a low-intensity soft inline tinted bar; `<NotificationBanner>` — a high-intensity full-width alert bar with an accent stripe, filled icon chip, title, config-object CTAs and a close button; both Type × 5 — information / warning / success / error / neutral), `<Accordion>` (collapsible disclosure panel — a header over a body that shows/hides; exhaustive 12-variant `size` × `active`(expanded) × `state`(default/error/success) set; `state` recolors the border + header fill; controlled or uncontrolled; own `--accordion-*` tokens), `<Breadcrumb>` (items-driven path navigation — a public group over a private `BreadcrumbItem` building block; icon-XOR-text crumbs, auto `caret-right` separators, last crumb = active/current page; configurable-ends collapse to a trigger-only "…"; own `--breadcrumb-*` tokens), `<Footer>` (a 64px bottom action bar — config-object `primaryCta`/`secondaryCta` CTAs that default on plus opt-in `leftSlot`/`rightSlot` content slots; for a non-standard footer turn the CTAs off and drop content into a slot; molecule with no token block, composed internally by `Card`/`Modal`/`SideSheet` for their footer bar), `<Card>` (Detail Card container over a private `CardHeader` building block — a white bordered panel with a 56px titled header carrying optional `slotLeft`/`slotMiddle`/`slotRight` ReactNode slots and a built-in **`LinkButton`** Edit affordance, over a 24px content body; an owner-requested view↔edit mode flips the card into an edit state that composes a Cancel/Save `<Footer>` and swaps the body to `editContent`; controlled or uncontrolled per the `Accordion` precedent; only token `--card-radius`), and `<EmptySection>`. Also includes `dateTimeEngine.js` (pure native-`Date` math on `window.DateTimeEngine`, no JSX/tokens) + `DateTimeBases.jsx` (5 `ARCInternal` calendar/time cell building blocks — NOT public) + `DateTimePickers.jsx` (four public date/time picker panels: `DateView` for day-level selection or ranges with an optional preset filter rail and dual-month view, `MonthView` for month-year selection, `TimePicker` for scrollable time columns, and `DateTimePicker` for a combined calendar + time panel; all are prop-driven panels the consumer opens from a trigger field — for a date that's the library `DateInput`; for the others a `TextInput`/`Select` trigger). Also includes `ButtonGroupContentBase.jsx` — an internal shared building block exposed on `window.ARCInternal` (NOT a public component; consumed by ButtonGroup and SegmentControl) — and `OverlayHeader.jsx` — an internal shared `_Header` bar on `window.ARCInternal` (NOT a public component; consumed by Modal and SideSheet; loads after `TextPlaceholder.jsx` + `Buttons.jsx`, before `Modal.jsx`/`SideSheet.jsx`). This is the **ARC base module** — the foundation every other module depends downward on. See [ui_kits/dms/CLAUDE.md](ui_kits/dms/CLAUDE.md) for the full intent catalogue and canonical source table, and root [CLAUDE.md](CLAUDE.md) for the module architecture and the file organization principle.
- [ui_kits/plg/](ui_kits/plg/) — the **PLG module** (Arcade Platform / App Store surfaces), a sibling of `ui_kits/dms/` that depends downward on ARC and never edits it: the **Arcade-custom** `PLGPrimaryNavBar` (a 64px App Store / marketplace header bar that is pure composition — `<Title>` + `<Tabs size="small" fillHeight>` on the left, `<SearchInput>` + a `<Button>` Cart on the right; `cartSelected` lights the Cart while SKUs are in the cart; distinct from `NavBar`/`MenuBar`) and the **Arcade-custom** `PLGPricingCard` (a 72px selectable pricing-plan row — plan title + an optional green "Recommended" `Lozenge` + description on the left, price + unit on the right; Default / Hover / Selected states; a `recommended` boolean toggles the chip and a controlled `selected` prop drives single-select; distinct from `Card`). See [ui_kits/plg/CLAUDE.md](ui_kits/plg/CLAUDE.md).
- [ui_kits/apc/](ui_kits/apc/) — the **APC module**, scaffolded as a sibling of `ui_kits/dms/` and `ui_kits/plg/` with no components yet. See [ui_kits/apc/CLAUDE.md](ui_kits/apc/CLAUDE.md).
- [preview/](preview/) — per-component and per-token visual source-of-truth cards (used by Claude Design's "Design System" tab), organized per module (`preview/plg/`, …) alongside the shared ARC previews. Component cards render the actual JSX components from their owning `ui_kits/<module>/`; when you change a component, update its matching `preview/<name>.html` in the same pass.
- **Top-level templates** — clone-ready starting points for a new page:
  - [homepage.html](templates/arc-homepage/arc-homepage.html) — blank `<Shell>`.
  - [module-template.html](templates/arc-module-template/arc-module-template.html) — NavBar + FilterBar + QuickFilters + Pagination (list page).
  - [page-with-tabs.html](templates/arc-page-with-tabs/arc-page-with-tabs.html) — NavBar + Tabs (tabbed detail).
  - [table.html](templates/arc-table/arc-table.html) — NavBar + FilterBar + `<Table>` + Pagination (data-table page).
  - [form-group-example.html](templates/arc-form-group-example/arc-form-group-example.html) — `<FormGroup>` + a `<Footer>` Cancel/Save action bar (form page).
  - **Status-modal templates** — [info-modal.html](templates/arc-info-modal/arc-info-modal.html) / [warning-modal.html](templates/arc-warning-modal/arc-warning-modal.html) / [success-modal.html](templates/arc-success-modal/arc-success-modal.html) / [error-modal.html](templates/arc-error-modal/arc-error-modal.html) — a centered `<Modal size="small">` with a variant icon + `ModalInfoRow` + a removable content slot + a two-CTA `<Footer>`.
- **Top-level showcases** — end-to-end patterns to copy from:
  - [modal-showcase.html](templates/arc-modal-showcase/arc-modal-showcase.html), [sidesheet-showcase.html](templates/arc-sidesheet-showcase/arc-sidesheet-showcase.html), [side-menu-showcase.html](templates/arc-side-menu-showcase/arc-side-menu-showcase.html).
- [CLAUDE.md](CLAUDE.md) — the slim module router for AI agents or new contributors: architecture, the decision ladder, tokens, and hard rules. The full intent-to-template mapping and canonical source table live per module — [ui_kits/dms/CLAUDE.md](ui_kits/dms/CLAUDE.md) (ARC), [ui_kits/plg/CLAUDE.md](ui_kits/plg/CLAUDE.md), [ui_kits/apc/CLAUDE.md](ui_kits/apc/CLAUDE.md) — which root CLAUDE.md routes to.
- [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md) — detailed audit of every component and where it's used.

### Product surface represented

**Tekion DMS / ArcLite** — the dealership management web app. Authentication, dealer home, module templates, tabbed detail pages, data tables with drawers. The library also carries mobile breakpoints (`$mobWidth: 600px`, `$tabWidth: 832px`) which adapt the same components for touch.

---

## Components

Every public component lives in a module folder under [ui_kits/](ui_kits/) — the ARC base is [ui_kits/dms/](ui_kits/dms/), plus the extension modules [ui_kits/plg/](ui_kits/plg/), [ui_kits/apc/](ui_kits/apc/), and [ui_kits/toc/](ui_kits/toc/) — one component (or one cohesive family) per file. Pages compose these; they never redefine them. See each module's `CLAUDE.md` ([ui_kits/dms/CLAUDE.md](ui_kits/dms/CLAUDE.md), [ui_kits/plg/CLAUDE.md](ui_kits/plg/CLAUDE.md), [ui_kits/apc/CLAUDE.md](ui_kits/apc/CLAUDE.md), [ui_kits/toc/CLAUDE.md](ui_kits/toc/CLAUDE.md)) for the full prop surface of each, and each component's sibling `.d.ts` for its typed API.

> **Canonical index:** the always-complete component index — every component, its owning module, a one-line purpose, and a pointer to its module doc — is the **Component index** table in the root [CLAUDE.md](CLAUDE.md). The bullets below mirror that table in prose, grouped by module; if the two ever diverge, CLAUDE.md's table wins.

- **Atoms — `Primitives.jsx`:** Checkbox, Radio, ToggleSwitch, Badge, Lozenge, Tag, UserTag, Avatar, ImageContainer.
- **Buttons — `Buttons.jsx`:** Button, DestructiveButton, LinkButton, IconButton, DropdownButton, SplitButton.
- **Icons — `Icons.jsx`:** Icon, plus the Icon Placeholder family (IconPlaceholder, IconPlaceholderFilled, IconPlaceholderNumber) and the custom marks AiIcon, T1AiLogo, SuggestionIcon, InfoFillIcon.
- **Text Input family:** TextInput, Select, SearchInput, TextArea, DateInput (each its own file over the internal `InputBases.jsx`).
- **DropdownMenu:** the canonical floating options-list panel.
- **Status — `Status.jsx`:** Status, StatusWithLabel.
- **Text placeholders — `TextPlaceholder.jsx`:** Subtitle, Title, Value, Content.
- **Selection controls:** ButtonGroup, SegmentControl.
- **Tabs — `Tabs.jsx`:** Tabs, CircularTabs, BottomSheetTabs, ProcessTabs, CRMTabs.
- **Navigation:** NavBar.
- **Toolbars:** FilterBar, QuickFilters, Pagination.
- **Containers:** Footer, Card, Accordion, Breadcrumb, ProgressBar.
- **Table:** the declarative data table (`Table`).
- **Overlays:** Modal (+ ModalInfoRow), SideSheet, SideNavigation.
- **Feedback:** Toast, Tooltip, Notification, NotificationBanner.
- **Date & time panels — `DateTimePickers.jsx`:** DateView, MonthView, TimePicker, DateTimePicker.
- **Form layout — `FormGroup.jsx`:** FormGroup, FormRow, FormCell.
- **EmptySection:** empty / placeholder state.
- **App-level chrome — provided by `Shell`, not composed directly:** Shell, MenuBar, FavBar, AppGrid (the App Menu launcher overlay, opened from FavBar).

The list above is the ARC base module (`ui_kits/dms/`). Sibling modules under `ui_kits/`:

- **PLG module — [`ui_kits/plg/`](ui_kits/plg/):** PLGPrimaryNavBar, PLGPricingCard, PLGRibbonTag, PLGSubscriptionStatus, PLGRoiMetrics, PLGListCard, PLGPricePlanToggle, PLGSKUCheckout, PLGSecondaryNavBar, PLGTestimonialCard, PLGTestimonialPagination — Arcade-custom PLG / App Store surfaces; depend downward on ARC (dms) and never edit it. See [ui_kits/plg/CLAUDE.md](ui_kits/plg/CLAUDE.md).
- **APC module — [`ui_kits/apc/`](ui_kits/apc/):** scaffolded, no components yet (ships page templates only). See [ui_kits/apc/CLAUDE.md](ui_kits/apc/CLAUDE.md).
- **TOC module — [`ui_kits/toc/`](ui_kits/toc/):** Support-Portal / AI-assistant layer. Public components: AgentStatusPanel, AiChatHeader, AiChatInput, AiChatInputBubble, AiChatResponse, AiLogo, AiSuggestions, AiSummary, AiTitle, ChatCard, ChatHeader, ChatQueue, ChatQueueCard, CseAssistant, HeaderAlertMessage, HighlightedTicket, HomeCards, NeedsAttention, SpButton, SpHeader, SpSideNav, StatusPageOverlay, StatusUpdatesPill, SuggestionPill, TicketCard, TicketCardInfo, WidgetsOverlay. Plus two internal sub-pieces (composed by the above, no preview / not in the index): CountTag, AgentStatusCard. Depend downward on ARC (dms) and never edit it. See [ui_kits/toc/CLAUDE.md](ui_kits/toc/CLAUDE.md).

Internal shared building blocks live on `window.ARCInternal` and are **not** public (no `.d.ts`, no preview): ButtonGroupContentBase, InputBases, DateTimeBases, OverlayHeader.

---

## Content fundamentals

Tekion DMS copy is **utilitarian, professional, and short**. It is the register of a desktop business tool for auto dealership staff — not marketing copy.

**Tone.** Neutral, instructional, unambiguous. Never playful. No exclamation points.

**Voice.** Directive and second-person-implied. Labels are nouns ("Store address", "User name"); actions are imperative verbs ("Log in", "Save", "Cancel", "Log out", "Back to login"). The UI rarely says "you" — it states the field.

**Casing.** Title Case for button labels, menu items, tab headers, modal titles ("Log In", "Forgot Password", "Update Password"). Sentence case for body and helper text.

**Internationalization.** Every visible string is wrapped in `__('...')` — `__('Welcome, {{userName}}!', { userName })`. Copy is written so placeholders can move; keep sentences self-contained.

**No emoji, ever.** Icons are communicated through the icon font (`tekicon-*` classes) and SVG illustrations. No decorative unicode, no arrows made from `>`.

**Examples from the codebase.**
- Link CTA: `Forgot Password` (Title Case, no punctuation)
- Status words: `Accepted`, `Pending`, `Rejected` (single word, Title Case)
- Empty-state labels live as illustration filenames: `noActivity`, `noMatchFound`, `noResult`, `noSetup`, `acceptingLeads`, `notAcceptingLeads` — copy mirrors the state literally.

**Vibe.** Fleet-command software. Dense data. Calm, blue-and-black, gets out of the way.

---

## Visual foundations

All concrete values below live as CSS custom properties in [colors_and_type.css](colors_and_type.css). Quote the token name, not the hex.

**Color.** Tokens are layered: raw **primitives** (`--c-*`, the only hex literals) → **semantic** tokens named 1:1 with the Figma "Styles" collection (`--background-*`, `--text-*`, `--icon-*`, `--border-*`, `--brand-*`, `--info-*`, `--error-*`, `--warning-*`, `--success-*`, `--always-dark-*`, `--support-*`, `--analytics-*`, `--focus-*`) → **component** tokens (`--btn-*`, `--radio-*`, `--toggle-*`, `--lozenge-*`). Components and pages consume the **semantic** layer, not raw primitives. Primary blue is `--brand-background-primary` (`--c-denim`) with `--brand-background-hover` (`--c-azure`) for hover and `--background-hover` (`--c-alice-blue`) for hover surfaces; selected surfaces use `--background-active` (`--c-powder-blue`, `#DBEBFF`). Text ladders `--text-primary` → `--text-secondary` → `--text-tertiary` → `--text-disabled`. Status families: `--success-*` (green), `--warning-*` (amber/gold), `--error-*` (red), `--info-*` (blue). Full catalogue: [preview/colors.html](preview/colors.html). A secondary brand teal `--c-tekion-green` appears on the login screen, the Tekion logo, and mobile CTAs — it is **not** the primary action color in the app itself.

**Type.** Proxima Nova throughout. Typography tokens are aligned 1:1 with the Figma typography variables (`ARCFontTokens.json`): `--typography-font-family-primary`, `--typography-font-weight-{100…900}` (Ultrathin → Black, the full Figma weight ladder), `--typography-font-size-{12,14,16,18,20,24,28,32}` and absolute `--typography-line-height-{16,20,22,24,32,36,40,48}` (root is 10px, expressed in rem-tenths so `--typography-font-size-14` = 14px), plus `--typography-letter-spacing-0`/`--typography-paragraph-*-0`. **In practice the designs only use two weights: Regular (400) for body/most text and SemiBold (600) for emphasis** (SemiBold is what the `label-medium-bold` style surfaces as "bold"). Body is 14px / 22px line-height, weight 400; headings step 24/20/18/16 at weight 600. A few off-scale legacy values (`--fs-micro` 10px, `--fs-small` 13px, `--fs-hero` 56px) and the ratio line-heights (`--lh-tight/normal/base`) are kept but are **not** in the Figma set. Full specimen: [preview/typography.html](preview/typography.html). Text is almost always black on white.

**Spacing.** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px via `--sp-xxs` → `--sp-3xl`. Form items have a fixed 24px bottom margin. Page gutters are 24px (`--sp-lg`) on desktop.

**Backgrounds.** Overwhelmingly flat white surfaces with 1px platinum borders. No repeating patterns, no textures, no full-bleed hero images inside the app. The login page uses a single large brand photo (`loginImage.jpg`) as the 70vw left pane.

**Animation.** Minimal. Login form slides in from below on mobile (`translateY(100%) → 0`, 1.2s). Side panel / drawer slides in from the right (`translateX(500px) → 0`, 0.5s, with a 3-stage overshoot). Tile hover adds a shadow (no lift). No bounce, no spring, no scale-on-entry by default. `--ease-standard` is `cubic-bezier(0.4, 0, 0.2, 1)`.

**Hover.** Buttons darken border+bg to `--brand-background-hover`; tertiary buttons switch color only. Tiles gain `--shadow-hover`. List rows and menu items get the `--background-hover` tint. Tags scale icon to `1.2` on delete-button hover.

**Press / active.** Selected surfaces use `--background-active` (`#DBEBFF`); no shrink animation.

**Borders.** Nearly everything gets `--border-primary` (1px `--c-platinum`). Hover swaps to `--border-hover` (`--c-denim`), active to `--border-active` (`--c-azure`). Error to `--error-border-primary`. The keyboard-focus ring token `--focus-border-primary` is orange (`#F5964E` @ 80%) per the Figma "Styles" set.

**Shadows.** Two in use: `--shadow-1` (base) and `--shadow-card`. `--shadow-hover` is reserved for elevated tile hover. No inner shadows. No colored shadows.

**Radii.** Extremely small — `--radius-xs` (2px) is base, used on every button, input, and modal. Chips are pill-shaped (`--radius-pill`, 20px). Avatars and status dots are `--radius-full`. Mobile overrides push a few things to `--radius-md` (8px).

**Transparency / blur.** Not used as a motif. Popovers, modals, and drawers are solid surfaces with shadow separation.

**Imagery mood.** Cool and literal. Product photography appears only on the login cover image. In-app illustrations (`acceptingLeads`, `noActivity`, etc.) are flat, geometric, blue/green/gray palette with no gradients — late-2010s corporate spot illustration.

**Cards.** White surface, `--border-primary`, `--shadow-card`, `--radius-xs`, `--sp-lg` (24px) padding. On hover, tile-shaped cards swap to `--shadow-hover`.

**Layout rules.** Fixed `--layout-header-h` (64px) header. Main content lives at `--sp-lg` gutters. Tiles sit on a 3-column grid with `--sp-xl` bottom spacing. No floating action buttons.

---

## Iconography

Tekion uses a **custom icon font** (`tekicon`). It is not on disk — the original codebase references classes like `icon-close`, `icon-chevron-right`, `icon-menu-folder`, sized through `FontIcon` with an 11-step scale (XXXS `0.3rem` → XXXL `6.4rem`). Default size is MD (`1.6rem` / 16px).

Icons are rendered as `<span class="tekicon icon-<name>">` via the `FontIcon` atom, which applies the size class and color via inline style. Colors are normally inherited; `FontIcon` accepts a `color` prop for overrides.

**What's in this repo:**
- `<Icon name="…" weight="regular|bold|fill">` in [ui_kits/dms/Icons.jsx](ui_kits/dms/Icons.jsx) — a prop-less Phosphor Icons v2.1.2 wrapper. Renders `<i class="ph ph-NAME">` and inherits font-size + color from its parent; no `size`, `color`, or `sw` props. The full 1530-icon set with all 3 weights is browseable at [preview/icon.html](preview/icon.html) (live search + jump nav + How-to-Use table). The Phosphor stylesheets are injected automatically by `tokens.js` — no per-page `<link>` tags needed.
- The **Icon Placeholder family** (`IconPlaceholder`, `IconPlaceholderFilled`, `IconPlaceholderNumber`) is the standardized icon size-override layer — an `<Icon>` should never be rendered naked; it sits inside a placeholder that owns its size (and an optional circle/rectangle chip), which then drops into a Button, Dropdown, Table, etc. (`IconPlaceholderNumber` specifically is for a process step/stage number or a decorative counter in a long list — distinct from `Badge`, which is a count attached to a control.) Preview: [preview/iconplaceholder.html](preview/iconplaceholder.html).
- Specialised custom SVG components next to `<Icon>` for marks that Phosphor does not cover: `AiIcon`, `T1AiLogo`, `SuggestionIcon`, `InfoFillIcon`.
- A set of flat SVG illustrations for empty / error / placeholder states in [assets/illustrations/](assets/illustrations/).
- A small set of doc-type icons (csv, excel, pdf, txt, xml) in [assets/icons/](assets/icons/).
- Logos: `tekion-logo.gif`, `tekion-logo-ltr.gif` — animated GIFs used for brand reveal on the authentication surface.

**Emoji:** never used.
**Unicode glyphs as icons:** never used.
**PNG icons:** only `play_button_3x.png` and `carPlaceholder.png` in the illustration set — everything else is SVG or icon font.

**Substitution.** The `tekicon` font isn't on disk. The UI kit uses Phosphor Icons v2.1.2 via a prop-less `<Icon>` wrapper in [Icons.jsx](ui_kits/dms/Icons.jsx) — geometric, outlined, covering the Tekion icon vocabulary (chevrons, close, search, user, gear, etc.) and 1530 additional icons. Attach the real `tekicon` font/sprite when available and update `Icons.jsx` accordingly.

---

## Font substitutions

All font files the system uses must live in [fonts/](fonts/) — that is the single canonical location the `@font-face` rules in [colors_and_type.css](colors_and_type.css) point at. Nine `.ttf` files are present and wired: Regular (400), RegIt (400 italic), Light (300), Thin (100), Sbold (600), Bold (700), BoldIt (700 italic), Xbold (800), Black (900).

**Weights in `fonts/` vs. the Figma scale.** `ARCFontTokens.json` defines nine weights 100–900 (Ultrathin, Thin, Light, Regular, Medium, Semibold, Bold, Extrabold, Black) for completeness, but the product only ever renders **Regular (400)** and **SemiBold (600)**. Two weights have no dedicated `.ttf` in `fonts/`, and that's **by design — they're never used**:
- **500 Medium — not present, not needed.** No `ProximaNova-Medium.ttf`; nothing in the designs uses weight 500, so no font file is required. (If a future design ever needs it, drop the TTF into `fonts/` and add an `@font-face` at 500 — never source it from `uploads/`.)
- **200 Thin — not present, not needed.** `fonts/` ships a single `ProximaNova-Thin.ttf` wired at weight 100; weight 200 is unused, so the second face is unnecessary.

Every weight the designs actually use (Regular 400, SemiBold 600) — and the rest of the ladder that's present (100/300/700/800/900) — maps to a real face in `fonts/`. Font files live **only** in `fonts/`; `uploads/` is off-limits (Claude Design artefacts).

---

## Using this system

- **To prototype a page:** identify the surface type first (list page? data table? form? tabbed detail? dialog? right drawer?), then clone the matching template from the root — [homepage.html](templates/arc-homepage/arc-homepage.html), [module-template.html](templates/arc-module-template/arc-module-template.html), [page-with-tabs.html](templates/arc-page-with-tabs/arc-page-with-tabs.html), [table.html](templates/arc-table/arc-table.html), or [form-group-example.html](templates/arc-form-group-example/arc-form-group-example.html). The whole component library is precompiled into one bundle (`_ds_bundle.js`) that the template loads via a single `<script src>` tag — components are not raw-loaded or Babel-compiled individually. Change only the page's own inline `<script type="text/babel">` composition block (the `App` function and its JSX). The Modal / Sidesheet / Side Menu showcases cover the overlay and sub-nav patterns.
- **To add a component or change code:** read [CLAUDE.md](CLAUDE.md) first for the module architecture and hard rules, then the owning module's `CLAUDE.md` ([ui_kits/dms/CLAUDE.md](ui_kits/dms/CLAUDE.md) for ARC, [ui_kits/plg/CLAUDE.md](ui_kits/plg/CLAUDE.md) for PLG) for the intent-to-template mapping, the canonical source table, the guardrails against duplication, and the extraction recipe.
- **To understand the existing inventory:** see [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md).
- **To invoke this system from another project:** it's exposed as the `arcade-design` skill — see [SKILL.md](SKILL.md).
