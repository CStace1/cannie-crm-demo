# Handoff: Client record

Date: 2026-09-15. For: CStace1/Cannie, `src/Cannie.Web/Pages/Admin/Clients/Record.cshtml` and the pages it links to.
Suggested home in the repo: `docs/design/handoff/client-record/`.

## Overview

The client record for the Cannie recruitment CRM, built jobs first for a 360 recruiter and a delivery lead
working perm, statement of work and time and materials jobs at an IT recruitment agency. One record, seven tabs,
a derived "Needs you" line, capture for every group on the record, and a full-list mode for clients with tens to
hundreds of jobs.

Two companions: `Client Record Options.dc.html` (three static layout alternatives, for the record; the built one
was chosen) and `Client Record Benchmark.dc.html` (scored against ten systems on the market, twelve industry
expectations; the record is Yes on ten, Part on comms sync, No on custom fields).

## About the design files

The `.dc.html` files in this bundle are **design references built in HTML**. They are prototypes that show the
intended look and behaviour. They are not production code to copy. The task is to recreate them in the Cannie
codebase's existing environment (ASP.NET Razor Pages, `site.css`, the token set in `tokens.css`) using its
established patterns: `.page`, `.content-column--full`, `.panel` / `.panel--highlight`, `.data-table`,
`.field-group`, `.status-chip` tiers, `.summary-strip`, `.engagement-tabs` with `.shell-nav-tab.is-active`.

One thing to decide before building: the prototype uses client-side state for tab switching, the full-list mode,
drawers, and the sticky strip. The repo's standing constraint is no client-side script (each tab is a real page,
`DESIGN-engagement-page.md` section 5). Everything here can be built as full page navigations with query strings
(`?tab=jobs&view=all&job=sre`) and server-rendered drawers as their own pages; the design does not depend on the
mechanism. Where the prototype's behaviour only makes sense live (search-as-you-type, quick picks that save on
tap), the fallback is a submit button.

## Fidelity

**High fidelity.** Colours, type, spacing and copy are final and follow `docs/DESIGN-cannie.md` and the Cannie
design system. Recreate the layout and copy as shown. Where the prototype used a hex, the repo token is named below.

## Screens and views

All views live on one record page with an ink sidebar (222px, `--cannie-ink`) and a bone canvas. Content column
padding 24px 32px; below 960px the sidebar becomes a top strip and padding drops to 20px; below 760px job rows
stack to two lines.

### Sidebar (standing pattern, see CLAUDE.md)
Lockup, main nav (Jobs, Clients [active], Candidates, Timesheets, Invoices, Search), then ONE contextual block
that moves with the level: kicker names the parent and links back (on a client record, "My desk, jobs to fill"),
rows are the siblings at that level with a count, current row bold in soft berry (`#E896B3`). "New client" text
link under the list. User chip at the foot. Sidebar is `position: sticky; top: 0; height: 100vh` at desktop.

### Header
- Kicker "CLIENT" (10px, 700, 0.364em tracking, ink 70%).
- Title, trading name (30px, 700, -0.0075em).
- Lede (15px, 600): sector, size, town, "On the desk since 2021."
- Owner line (13px, ink 55%): "{owner} and {team} work this account." then two chips: status chip
  ("Active client, since 9 Jun 2021", 1px ink-85 border, radius 6, 11px 600) and terms chip ("Terms signed,
  MSA v3, 2 Feb 2026", taupe border). On a fresh prospect the terms chip reads "No terms signed".
- Right: "Search this client" input (220px, radius 10), "Take a new job" (secondary, 1px ink-85 border),
  **"Add a note"** (the one primary, berry `#9E2D53`, bone text). Add a note is primary because logging is the most
  frequent action on a client page.
- Facts row (five, wrapping, gap 22px 42px; kicker label + 15px 700 value): Jobs to fill ("28, 7 past 30 days"),
  Filled and live ("42 live, 9 placed this year"), Fill rate ("78%, 24 days to hire" or "No fills yet"),
  Fees this year ("£684k invoiced, £112k forecast from live jobs"), Terms review ("2 Feb 2027, rate card 1 Apr 2027").
- **Needs you line** (14px), directly above the tabs. Leads with the nearest non-empty horizon: "Needs you today"
  in berry, else "This week" in ink, else "Coming up" in ink 70%, else "Nothing needs you". Items are links only
  where there is something to do; awareness items are plain text. The other horizons appear as counts at the end
  of the line ("3 this week", "4 coming up") that expand inline on click and fold back. Items are DERIVED, never
  typed: unapproved milestone past N days, timesheet past its approval window, job past 30 days with nothing
  submitted, manager not contacted in 21 days, document unsigned past 7 days, assignment ending inside 12 weeks,
  rebate window closing, MSA or rate card review date, determination review. Rules and thresholds live in agency
  settings, not on the record.

### Sticky tab strip
Outside the header, `position: sticky; top: 0`, bone background, 1px taupe bottom border, padding 18px 32px 0.
Tabs (14px; active is berry text + 3.4px berry underline, inactive ink 70%): Jobs, Statements of work, People,
Commercials, Contracts and admin, Billing, Activity. Once the title has scrolled off, the client name (16px 700)
appears at the left of the strip with a divider. While the full jobs list is open, no tab is underlined and any
tab click leaves that mode.

### Jobs tab (default)
Two columns at desktop: table (flex 1 1 640px) and a side column (flex 1 1 260px, max 360px) that wraps below.
- Controls row: segmented pill (sand track, ink filled thumb) **Jobs to fill / Filled and live**, then type
  filters All types / Perm / SOW / T&M (radius 10 controls, active = 1px ink border, ink text).
- Caption: "Most recent six of 28 open. Sourcing, submission and interview chase."
- Table (min-width 600px, scroll wrapper), header row kicker style, columns:
  - To fill: Job (title 15px 600 + sub 12px ink 55%) | Type badge (radius 6, taupe border, 11px 600) |
    Hiring manager (ink, 600, underlined; opens the contact) | "Sourced, sent, interview, offer" (four 22px chips:
    sand when >0, berry filled for offer, transparent when 0) | Days (14px 600) | Next step (12px; berry 600
    when urgent).
  - Filled: Job and who is in it | Type | Hiring manager | Started | Runs to ("Rebate to 2 Nov", "Ends 19 Dec")
    | Watch.
  - Rows 13px vertical padding; title cell and the other cells are separate click targets (row opens the job panel,
    manager opens the contact).
- Footer: legend line, "View all 28 jobs to fill" (ink, underlined).
- Side column: **Next actions** (sand card, Add link; each row what / who / when, "Done" text control at the row
  end; done writes a note to activity), **Hiring managers** (hairline card; initials chip, name, "N jobs open";
  Add link), **Filled this year** (hairline card, two lines of copy).
- Empty state (fresh prospect): "No jobs to fill yet. Take the first job and it lands here with its pipeline."

### Jobs, full list ("View all")
Replaces the tab body with a queue-and-panel: left column 300 to 360px, right fills. Left: title "Jobs, all to
fill", Back to the record link, segmented to fill / filled, search (job, manager, skill), type filters, sort
(Oldest first / Needs you / Newest), count "28 of 28". Rows: title (600; 700 when selected, sand background),
badge (days or runs-to), one line "Type, Manager. Next." Right: kicker, title, sub with manager link, action
buttons (Send a profile or Open in statements of work as primary; Log; Add an action), facts strip (sand), then
Shortlist (or Milestones and burn for a SOW) and "On this job" activity. Below 960px the two columns stack.

### Statements of work tab
Picker row (one card per statement: name + "SOW 4, signed 18 Feb 2026"; selected = ink fill) plus New statement
and Raise a variation. Facts strip (sand): Ceiling, Approved, Remaining, Margin, Runs, with a burn bar (taupe
track, berry fill) and "£139,200 of £240,000 approved, 58%". Health line: tier chip (At risk = 2px berry border,
berry text; Attention = 1px ink-85; Healthy = 1px ink-85) then each reason as a sentence, first one bold berry
when at risk. Two columns (each min 480px, wrap): Milestones table (name, due, value, state; at-risk and waiting
states in berry 600; Add a milestone) and Contractors on it (name/sub, role, charge, margin, runs; unstaffed rows
in berry; Add a contractor); right column cards: Variations, How it bills (Edit), Time and billing (periods).
A SOW row in the jobs list opens here. Empty state: "No statements of work yet. A statement needs a name and a
ceiling to open." with New statement.

### People tab
Summary line + Log a contact (secondary) + Add a contact (primary for this tab). Two cards: **Contacts** (sand;
ink initials chip, name, role, flags) and **Contractors on site** (hairline; compliance roster table: Contractor,
Right to work, Determination, Insurance, Approver; expiring share code and determination reviews in berry 600).
Footer: "Who is in, and whether the paper is in place. Fees, rebates and end dates live under Jobs, Filled and live."

### Commercials tab
Everything about money, all editable.
- **Rate card, time and materials** (sand): Band | Charge, day | Pay, day | Margin | Applies to. Edit rate card
  turns band, charge and pay into inputs, margin recomputes live; Add a band appends an editable row; only unused
  bands can be removed. Footer: "A band in use cannot be removed. Rate changes apply from the save date; time
  already approved keeps the rate it was worked at."
- Two groups (see Groups below): **Fees by job type**, **Commercial terms**.

### Contracts and admin tab
Order: things checked most first, registration details last.
1. **Contracts and compliance** (hairline, full width): Add a document (primary for this tab). Table: Document
   (name; under it "Version 3 · 2 earlier · New version" as small links) | Applies to | Signed | State. Two kickers
   split the rows: CONTRACTS ("What you have agreed to work under": MSA, perm fee schedule, SOW, rate card schedule)
   and COMPLIANCE ("What has to be in place to keep working": off payroll determinations, DPA, insurance certificate,
   credit check). Credit check is insolvency and CCJs only, never a score: "Clear, no CCJs, review 6 Jan 2027".
   "N earlier" folds out superseded versions (3.4px taupe left rule, who signed, when, "Superseded, open"). Nothing
   deletes or overwrites.
2. Groups grid (two columns of min 400px): **Status and ownership**, **Company details**, **Contact details**,
   **Addresses**, **Group structure** (last; "Only where a client is genuinely several companies. Most are not.").

### Billing tab
Facts strip (sand): Invoiced this year, Outstanding, Overdue, Debtor days, Credit ("£150,000, £41,250 in use" with
"Invoices to {billing contact}" under it) and **Send statement of account** (secondary; logs an email to activity).
Two cards: Invoices (ref, what, amount, state) and Time awaiting approval (exceptions). Below, full width sand:
**Timesheets, by placement and period** with All / Waiting / This month filters; columns Contractor, Placement,
Period, Days, Value, Agency, Client (waiting states berry 600). Footer: "Approved time is valued at the rate in
force on the work date."

### Activity tab
Filters by kind (All, Call, Meeting, Teams meeting, Email, SMS, Note, System) as radius-10 controls, a **By**
dropdown of everyone who appears in the log (scales past ten people), Log (primary). Rows: when (12px, ink 55%) |
kind badge (radius 6, nowrap) | what (14px 600), detail, by-line. Synced mail and texts appear with author
"Outlook sync" / "Mobile sync". Empty: "Nothing of that kind yet on this client."

### Search this client
Two characters in, the tab body becomes results grouped by kind (Jobs to fill, Filled and live, People,
Contractors on site, Statements of work incl. milestones, Documents, Activity, Next actions), each hit a row with
title, sub, where, opening the thing where it lives. Clear returns to the tab.

## Groups (the editable record sections)

Each group is a card with a title and an **Edit** link. View mode shows label / value rows (lists and addresses
concatenated on one row each: "4 Wellington Place, Leeds, West Yorkshire, LS1 4AP, United Kingdom"). Edit mode
shows fields with hints, Save {group} (primary) and Cancel; each group saves alone, never touching another.
Validation errors read as sentences in berry on the field and beside Save. Field types: text, choice (pills; an
"Other" pill opens a berry-bordered free text "written as the client will read it on the terms"), list (repeating
value + type tag, Add another / Remove), lookup (type to search people; chips for picked; owner excluded from team
and vice versa).

- **Status and ownership**: Status (Prospect, Engaged, Terms sent, Terms signed, Active client, Dormant, Do not
  work with), Valid from, Valid to, Owner (lookup), Also on the account (multi lookup).
- **Company details**: Legal name (required), Trading name, Company number (8 digits: "Enter an 8 digit company
  number."), VAT number (GB + 9: "Enter a VAT number in the format GB123456789."), Website (https: "Enter a web
  address starting with https://."), Sector (choice + Other), Size (bands).
- **Contact details**: Phone numbers (list, tags Switchboard / Accounts / Out of hours / Other), Email addresses
  (list, tags General / Accounts / Timesheets / Recruitment / Other). "The client's own switchboard, not a person."
- **Addresses**: Registered (line 1, line 2, town, county, postcode "Enter a UK postcode, for example LS1 4AP.",
  country default United Kingdom), Invoicing address (Same as registered / One of the addresses below), Other
  addresses (list, tags Head office / Site / Invoicing / Delivery centre / Other).
- **Commercial terms**: Your position (Sole supplier / Preferred supplier, one of three / On the PSL / Contingent,
  open market / Other), MSA review date, Rate card review date (both feed Coming up), Credit limit (set by the
  agency, not the check), Billing contact, Billing entity name (required), VAT treatment, Payment terms days,
  Payment terms run (From invoice date / End of month following / Other), Invoicing frequency (+ Other), Purchase
  order, Self bill.
- **Fees by job type**: Perm fee %, Perm rebate (+ Other), Perm fee invoiced (+ Other), SOW margin %, T&M approval
  (+ Other), Time captured in (Days / Hours / Other). "These are the defaults a new job inherits."
- **Group structure**: Part of (parent), Companies in this group (list, tags Subsidiary / Brand / Division /
  Billing entity).

## Drawers (right-hand sheets, 580px, ink 55% scrim with 3px blur)

- **Job panel**: kicker, title, sub, Close; facts strip; hiring manager card (Open contact); Shortlist rows
  (initials, name, from, stage pill); actions: Send a profile / Open in statements of work (primary), Log against
  this job, Add an action.
- **Milestone**: facts, who worked on it, Chase the approval / Submit for approval, Edit this milestone.
- **Contact**: Jobs with this manager (from the real pool, up to 8), routes, flags, **Edit details** (name, job
  title and what they do, email and phone; Save / Cancel), quick picks that save on tap: Preferred route (Email /
  Phone / SMS), Marketing consent (Not asked / Given / Declined). Actions: Take a job from them (primary), Email
  (compose: to, subject, message, Send; lands on activity), Log a contact.
- **Add a contact**: first, last, job title, department, email, phone (name + one route required); roles (Hiring
  manager, Approves time, Approves statements of work, Receives invoices); preferred route, marketing consent,
  status Active / Left (no left date; that belongs to contractors).
- **Take a new job**: job type (Perm / Statement of work / Time and materials, changes the two fields below),
  title, hiring manager pills, two type-specific fields, Open the job. "Terms, rate card and approvers come off
  the client record. Nothing to re-enter."
- **Log** (Add a note): kind (Note default; Call, Meeting, Teams meeting, Email), With (contacts), About (account
  or a job), notes, Follow up (None / Tomorrow / Next week / In a month), Save to activity. Teams meeting adds a
  meeting picker from recent calls and three options: Attach transcript (held by reference), Summarise for me,
  Pull out actions (both fill the notes, editable before save).
- **Add an action**: what, with, about, when (Today / Tomorrow / This week / Next week).
- **Add a document / New version**: file (PDF or Word to 20MB, held by reference), name, signed on, valid from,
  valid to, applies to, state (Signed / Sent for signature / Draft). New version shows "This becomes version N of
  X. Version N-1 stays underneath, read only."

## Create a client
From the sidebar. One card: legal or trading name (required), main phone, main email (one of the two required),
status (Prospect / Engaged / Terms signed / Active client). "A name and one way to reach them. That is all a
client needs to exist." Opens straight onto the new record in its empty state: facts read None yet / No fills yet
/ Nothing invoiced yet / No terms signed; Needs you reads "Nothing yet." with one coming-up prompt; every tab has a
one-line empty state naming the next step; every group shows Not set with Edit.

## Interactions and states
- Toasts: bottom left (left: 24px), ink fill, bone text, one past-tense sentence, 2.6s.
- Hover on quiet controls: ink 5% fill. Focus: 2px berry ring, 2px offset (queue rows use outline-offset -2px).
- Motion: none beyond hover/focus; no slide-ins.
- Two Tweaks props on the prototype for demo states: `quietDay` (nothing today or this week) and `newProspect`
  (empty record). Not product features.

## Design tokens (repo names in brackets)
Ink `#2B211B` (`--cannie-ink`), bone `#F3EEE6` (`--cannie-bone`), sand `#EFE7DA` (`--cannie-sand`), taupe
`#D9CFC0` (`--cannie-hairline`), berry `#9E2D53` (`--cannie-accent`), soft berry `#E896B3` (on ink only), ink 85%
`rgba(43,33,27,.85)` (`--cannie-ink-85`, edges and secondary button borders), ink 70% (`--cannie-ink-70`, kickers,
inactive tabs), ink 55% (captions). Poppins throughout: titles 30/24/19/18 at 700 with -0.0075em; body 15 at
400; rows 14/13; captions 12; kicker 10 at 700, uppercase, 0.364em. Radii: 6 badges, 10 controls, 14 cards, pill
for tags and the segmented control. Heavy rule 3.4px (tab underline, version fold-out). No shadows except the
drawer (`-24px 0 64px rgba(43,33,27,.24)`) and toast. No grey, no red / amber / green: urgency is berry text at
600 or an ink-85 chip.

## Data the record reads (for the model)
Client (status with valid from/to, owner, team, sector, size, addresses typed, phones and emails typed, billing
entity, VAT treatment, payment terms, invoicing frequency, PO rule, self bill, credit limit, billing contact,
position, MSA and rate card review dates, parent, group companies), Contact (roles, preferred route, consent,
active/left, last contact date), Job (type, manager, stages, days open, next step, urgency; filled: started,
runs to, watch), Statement of work (ceiling, approved, milestones with due/value/state, contractors, variations,
rules, periods), Rate card bands (charge, pay, applies to, in use), Documents (kind Contract/Compliance, version,
history, signed, valid from/to, state), Invoices, Timesheets (contractor, placement, period, days, value, agency
state, client state), Activity (when, kind, who, what, detail, follow up), Next actions (what, who, when, done).

## Files in this bundle
- `Client Record.dc.html`: the prototype (template + logic in one file; `support.js` is its runtime).
- `Client Record Options.dc.html`: three static layout alternatives considered.
- `List Patterns.dc.html`: three treatments of "recent on the record, full set one click away".
- `Client Record Benchmark.dc.html`: the market benchmark and the close-first list.
- `SIDEBAR-PATTERN.md`: the sidebar navigation rule (a standing pattern for every screen; belongs in the repo CLAUDE.md).
- `_ds/`: the Cannie design system tokens and bundle the prototypes load.
- `github.md`: which repo documents the design was built from.
