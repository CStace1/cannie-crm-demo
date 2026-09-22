# Handoff: Candidate record

Date: 2026-09-19. For: CStace1/Cannie, `src/Cannie.Web/Pages/Admin/Candidates/Record.cshtml` and the pages it
links to. Suggested home in the repo: `docs/design/handoff/candidate-record/`. Companion to
`docs/design/handoff/client-record/` and `docs/design/handoff/job-record/`.

## Overview

The candidate record: one person over time, not one applicant on one job. Three states of the same record
(**Candidate**, **Placed, not started**, **Contractor on site**) change the header band, the snapshot facts, the tab
order and the primary action; everything else is shared. A candidate may also be a **contact** at a client
(influencer, hiring manager, decision maker); that is a role on the same person, shown on both records.

Benchmarked in `Candidate Record Benchmark.dc.html` against ten systems on twelve expectations: eleven of twelve
(portal excluded by decision). The opening this record takes: the contractor as a working history (asks and
agreed figures over time, IR35 per placement, paper that expires, availability that returns), which only Vincere,
Firefish and Access hold.

## About the design files

`Candidate Record.dc.html` is a **design reference built in HTML**, not production code. Recreate it in the Cannie
codebase using the established patterns from the client and job READMEs. The prototype uses client-side state;
the repo rule is no client-side script, so tabs, drawers and the CV panel are query-string navigations and their own
pages. Two Tweaks on the prototype: `personState` (Candidate / Placed, not started / Contractor on site) and
`alsoContact` (on / off).

`Mobile Light.dc.html` is four phone frames (Overview, Job pipeline, Candidate, Client read-only) showing what the
phone carries: find, reach, log, snapshot, book. Not a separate product; the same pages at phone width with the
bottom bar in place of the sidebar. See "Mobile" below.

## Fidelity

**Build to this faithfully.** Layout, copy, field order, option sets, validation sentences, drawer contents, what
is primary and what is secondary, and what each state shows are decisions already made and reviewed (UX, UI,
recruiter SME, benchmark). Do not simplify, reorder, merge screens or substitute patterns. If the repo's constraints
stop something being built as shown, raise it in the PR; do not approximate. The sidebar is the universal component
(`SIDEBAR-PATTERN.md`). Next actions follow `NEXT-ACTIONS-PATTERN.md` on every record.

**Everything shown is captured.** There is no derived sentence on this record that cannot be traced to a field a
recruiter typed, except the ones listed under "Derived, and labelled as such". If a build finds text with no field,
that is a bug in the handoff; raise it.

## Layout, shared with the client and job records

Ink sidebar 222px, bone canvas, content padding 24px 32px. Below 1180px the side column drops under the main column
as a row of cards and the snapshot goes to two columns; below 760px rows stack to two lines, the snapshot to one
column, and sort headers hide. The tab strip scrolls horizontally rather than wrapping.

### Sidebar
Main nav: Overview, Jobs, Clients, Candidates [active], Timesheets, Invoices, Search. Contextual block: kicker names
the job this candidate was opened from and links back ("Senior Backend Engineer, in the running"), rows are that
job's live candidates with stage, current bold soft berry, "All N".

### Header
- Kicker "CANDIDATE". Title: `{first} {last}` (+ "(known as)" if set). Line under (15px 600): current role from work
  history, employer, tenure and since-month, town and outcode: "Backend Engineer, Monzo, 4 yrs (since Sep 2022).
  London, N1." In the other states: "Data Engineer, Brightwell Payments, on assignment through you." /
  "Backend Engineer, Monzo, until 30 Oct. Then Senior Backend Engineer, Brightwell Payments."
- Third line (13px, ink 55%): the first two sentences of **your summary**.
- Chips: status ("Active" / "Active, two live" / "Placed, starts 3 Nov" / "Contractor on site"), and when
  `alsoContact`, a sand chip "Also a contact, Monzo" linking to the client record.
- Right: "Search this candidate" (220px), secondary "Log a call", one primary by state and tab: **Put forward**
  (Candidate), **Confirm the start** (Placed), **Raise an extension** (On site); on Compliance "Add a document",
  on Profile "Upload a new CV".

### Needs you
Directly under the title block, before the snapshot. Same rules as the client and job, scoped to the person:
late stage on two jobs (today); an application with an answer due (today); prep pack not sent for an interview
this week; document expiring inside 30 days (this week) or 90 (coming up); available-from inside 60 days;
consent review due; qualification expiring. Placed state: confirm start the week before, rebate window end,
invoice on start. On site: unapproved timesheet (today), extension due (8 weeks before end), SDS review at extension.

### Snapshot card (sand, radius 14, replaces the five facts)
Three columns, then a footer row.
- **Reach her** (Edit): Mobile, Email, LinkedIn as bordered buttons (`tel:`, `mailto:`, `https://`); a line
  "{Prefers}, {when to call}."; a muted line "Owner {owner}. {postcode}, {travel time to the nearest live job's
  site}."
- **Four facts** by state. Candidate: Wants ("£92,000, currently £84,000"), Available ("19 Oct at the earliest,
  1 month notice"), Pattern ("Hybrid, 2 days, London"), Right to work ("British passport, to Apr 2031"). Placed:
  Agreed, Starts, Notice given, Right to work. On site: Rate, On site to, Engagement, Right to work.
- **Recent** (All activity link): three rows, newest first: Next (next booked thing), the last stage or interview
  event, the last contact (call, SMS, email, meeting). Each row opens the full Activity entry drawer.
- Footer: kicker "Skills" then skill chips (strong = ink border, sand fill; working = taupe border), a hairline,
  kicker "Tags" then ink tags, "Edit" (opens the Tags drawer), then right-aligned **View CV, {date}** (opens the
  Profile tab with the current CV panel open).

### State band (Placed, On site only)
Ink band under the snapshot: kicker ("On assignment" / "Placed, not yet started"), title (role, client), one line
(type, engagement, dates, approver or fee and rebate), three facts in bone (Ends / Margin / Timesheets; or Starts /
Fee / Rebate to; berry for the one needing you), and one soft-berry action ("Raise an extension" / "Confirm the start").

### Tabs
Candidate: Applications, Profile, Availability and pay, Compliance, Placements, Consent, Activity, Matches.
Placed and On site: Placement (or Assignment), Compliance, Availability and pay, Profile, Applications, Consent,
Activity, Matches. The first tab opens by default.

## Applications
Two columns. **In the running**: Job (title; client, owner; a third line **Fit against the brief**) | Stage | Days |
Next step (berry 600 when the answer is due). Row opens the application drawer. Below it a berry sentence when late
stage on two jobs. **Closed** (Show / Hide): job, client, when, outcome, note. Side column: Next actions card (see
pattern), "What she wants" (assembled from Availability fields: wants, pattern, motive, notice, elsewhere; "Full
history" link), "Paper" (right to work, proof of address, references, one line each), and when `alsoContact` the
"One person, two roles" card (client, role, referrals, "Change the contact role").

**Application drawer.** Facts: Stage, Days at stage, Next. Fields: Fit against the brief (area, saved on its own with
"Save the fit"); Move to (options by stage: Interview → Stay / Offer / Out of the running; Offer → Stay / Accepted,
place / Declined, out; else Stay / Next stage / Out); Note on the move (required when moving). Primary: "Move and
log" or "Open the job". Links: "Book an interview on the job", "Log a note". Footer: stage moves write to the job;
interviews and offers are booked on the job because they need the client's diary and terms.

## Profile
Main column: **CV** (Show / Hide, Download PDF; rendered inline from the stored file, current version by default,
any version via the side card's View; footer names the version and warns to send the shortlist profile until the
client has agreed to see her), **Your summary** (Edit; three lines, goes above the CV to a hiring manager),
**Skills** (chips, tap to edit level, years, confirmed how, or Retire; "Add a skill" from a list, free text only if
new), **Work history** (rows tap to edit: role, employer, Current / Left, from, to, what she did; one current role
at a time, marking one current closes the previous; the current row drives the header; "Add a role"),
**Qualifications** (tap to edit; name, awarded by, year, expires; "Add a qualification").
Side column: **CV versions** (name, date, note, View / Download; "Upload a new version" → file, where from, what
changed; upload parses into a **Parsed, to confirm** card of changes you Apply or Skip; nothing parsed overwrites
until applied; parsing is purpose-limited to skills, roles, dates, qualifications and contact details and is
gated on the LEG-S27 review, see the brief), **Shortlist profile** (Edit; anonymous; save refuses text containing her name or employer; "Her
LinkedIn" link with checked-on note), **Possible duplicate** (same mobile, different email; "Merge, keep both
histories" / "Not the same person").

## Availability and pay
**Now** (Edit): Notice, Available from, Engagement, Current, Wants, Pattern, Location, Home (postcode, will travel,
travel by), To {nearest site} door to door, To {other site}. Note: distance is measured from home postcode to the
job's site for on-site and hybrid jobs; address never shown to a client. The Edit drawer also carries Why she would
move, Elsewhere, Would consider, Your read, Will travel, Travel by. Changing Wants or Current writes a row to
**Asked and agreed** (When | Where | Figure | Which: Wants / Current / Offered / Agreed), which screens, offers and
placements also write to. Side cards: **Your read** (Edit; never sent), **Would consider** (Edit).

## Compliance
**Documents**: Document (name, sub) | State (Valid / Seen / Unchecked / Not needed) | Expires (berry inside 90 days)
| Checked (by, when, how) | action (Recheck / Renew / View / Request). "Add a document": kind (Right to work, Proof
of address, Qualification, DBS, Professional certification, Other), name, expires, checked how (Original seen in
person / Seen on video, copy held / Copy only / Not yet checked). Recheck drawer records how and a new expiry.
A new document of the same kind supersedes; nothing deletes. **IR35 determinations**: one row per contract
placement (role, client, dates, engagement | Outside / Inside | SDS on file, date; a new contract needs a new one).
**References**: tap to edit (who, relationship, state: Not yet asked / Named / Requested / Received / Declined,
note); "Add a reference"; footer: ask her before contacting her current employer.

## Placements
On Placed / On site, a sand block first: title, line, six facts (Rate, Charge, Engagement, Approver, Timesheets,
Extension; or Start, Agreed, Fee, Invoice, Rebate, Notice given), links to the job and client. **Placements**: Role
(client, type) | Dates | Agreed | Outcome (fee or margin, rebate outcome, why it ended). **Timesheets**: period,
days, state (unapproved in berry with "Chase {approver}"); "All N".

## Consent
**Lawful basis and consent** (Edit): Lawful basis (Consent / Legitimate interest / Legitimate interest, then consent
/ Contract), Consent given, How, Marketing (Job alerts yes, newsletters no / Both / Neither / Job alerts only, this
desk), Retention to (**defaults to consent date plus three years**; recomputed when the consent date changes unless
set by hand; the log says which), Review. **Requests**: date received, kind, note; "Record a subject access request"
(starts the one-month clock, adds a next action) and "Record an erasure request" (erasure is a state: anonymised on
the retention date, placement history kept for the accounts). Side card explains the rules.

## Activity
Kind filters (All, Call, Email, SMS, Interview, Stage, Action, Document, Consent). Rows: when | kind | what, who and
where, detail. Row opens the **entry drawer**: full text, "Add to this entry" (appends, never overwrites), "Go to
where it happened". Email and SMS sync is seeded, not connected (same as the client).

**Log drawer** (secondary "Log a call" and every "Log a note" link): Kind (Note, Call, Email, SMS, Meeting); on
Email and SMS a Template (Interview confirmation, Prep pack, Offer letter cover, Check in; Interview reminder, Call
me when free, Good luck today) and the primary reads "Send and log"; What happened / Message; Follow up (None,
Tomorrow, This week, Next week → a dated next action).

## Matches ("Put forward")
Jobs on the desk that fit her skills, ask, location and what she would consider; jobs she is already on are left
out; a search field for any other live job. Row: job (client, owner) | why | **Put forward** (adds at Screened on the
job, logs on both, flags her on every job she is now on).

## Drawers shared
Contact details (first, last, known as, pronouns, mobile [required], email [validated], LinkedIn, prefers, when to
call, owner [change logs a handover], address line, town, postcode [UK format, drives distance]). Tags (Common tags
pick; Skill tags pick, adds to Skills at working level; free text one per line). Contact role (Influencer / Hiring
manager / Decision maker / Referrer only / No longer a contact; client; note). Next action (see pattern: what, who
defaults to you with Reassign, quick pick → real date, time → calendar, note, follow up on done).

## Validation copy
"A first name." / "And a last name." / "A mobile is the one route you always need." / "That email does not look
right." / "Enter a full UK postcode." / "Nothing moves without a note." / "Say what, not why." / "That names her or
her employer. Take it out." / "Pick or name a skill." / "Role." "Employer." "From as year-month, like 2022-09." /
"Say how you checked it." / "When did it arrive?" / "Write something or close."

## Derived, and labelled as such
Tenure and since-month (from work history dates); available-at-earliest (notice from today); door-to-door times
(postcode to site); fee and margin (from the job's terms); duplicate flag (mobile, email, name and employer); the
"Also on" and late-stage flags (from applications); Needs you.

## Mobile
The same record at phone width, not a separate app. Bottom bar (Desk, Jobs, Clients, Candidates, Search) replaces
the sidebar; one primary action per screen (Log a call); Call, Text, Email, LinkedIn buttons under the name; the
snapshot as a sand card (Wants, Available, Pattern, Right to work, skill chips, View CV); Needs you as one berry
line; In the running rows with "Propose times for the next round"; Before the call (what she wants, last contact);
Paper as one line with "All". Lists cap at three with an "All" link. Full pay history, documents, consent and
every edit are desktop only.

## Data the record reads
See `BRIEF-claude-code-candidate-record-build.md` for the mapping to existing entities and the additive tables.
