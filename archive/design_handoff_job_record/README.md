# Handoff: Job record

Date: 2026-09-17. For: CStace1/Cannie, `src/Cannie.Web/Pages/Admin/Jobs/Record.cshtml` and the pages it links to.
Suggested home in the repo: `docs/design/handoff/job-record/`. Companion to `docs/design/handoff/client-record/`.

## Overview

The job record for the Cannie recruitment CRM. One record, three shapes: **Perm**, **T&M** (time and materials)
and **SOW** (statement of work). The type drives the tab set, the brief's field set, the commercials, the screening
questions and the offer and place screens. Everything else (header, Needs you, sidebar, activity, next actions,
drawers) is shared.

Benchmarked in `Job Record Benchmark.dc.html` against ten systems on twelve expectations. Nobody on the market
models SOW or T&M as a job with milestones, burn and timesheets in its own life; that is the opening this record
takes. Vincere is the breadth bar, Bullhorn the model bar (one owning contact, correlated placement, type-driven
layouts). This record matches both and adds derived Needs you, knockouts read from the brief, fee provenance,
interview states, and cross-job candidate flags.

## About the design files

`Job Record.dc.html` is a **design reference built in HTML**. It shows intended look and behaviour; it is not
production code. Recreate it in the Cannie codebase (ASP.NET Razor Pages, `site.css`, `tokens.css`) using the
established patterns listed in the client record README. The prototype uses client-side state for tabs, drawers,
sort and grouping; the repo's constraint is no client-side script. Everything here works as full page navigations
with query strings (`?tab=pipeline&view=grouped&sort=days&dir=desc&cand=amara`) and drawers as their own pages.
Where the prototype saves on tap (pills), the fallback is a submit button.

Open the three shapes with `?type=Perm`, `?type=T%26M`, `?type=SOW`. Two Tweaks on the prototype:
`jobType` (same thing) and `advertPlacement` (Inside the job / Separate record). Decision on advert placement is
**inside the job** unless product says otherwise; the separate-record variant is kept for the record only.

## Fidelity

**Build to this faithfully.** The prototype is the specification. Layout, copy, field order, option sets, validation
sentences, drawer contents, what is primary and what is secondary, and what each type shows or hides are all
decisions already made and reviewed (UX, UI, recruiter SME, benchmark). Recreate them as shown; do not simplify,
reorder, merge screens, or substitute component patterns. If something cannot be built as specified under the
repo's constraints, raise it rather than approximate it. Colours, type and spacing follow the Cannie design system;
token names as in the client record README.

**Left nav is universal.** The ink sidebar is one component carried over from Overview and Clients, not rebuilt per
page. Only its contextual block changes with the page. See `SIDEBAR-PATTERN.md`.

## Layout, shared with the client record

Ink sidebar 222px, bone canvas, content padding 24px 32px. Below 960px sidebar becomes a top strip. Below 1180px
the pipeline's side column drops under the table as a row of cards (`repeat(auto-fit, minmax(240px, 1fr))`).
Below 760px rows stack to two lines and the sort header row is hidden.

### Sidebar (universal component, see SIDEBAR-PATTERN.md)
The same sidebar as Overview, Clients and the client record. Main nav (Jobs [active], Clients, Candidates,
Timesheets, Invoices, Search), then ONE contextual block: kicker names the client and links back ("Brightwell
Payments, 6 to fill"), rows are that client's open jobs with a count (live candidates), current job bold in soft
berry. "New job at Brightwell" text link. Count sits tight to the name in a flex row; wraps only when the sidebar
collapses.

### Header
- Kicker "JOB", then type chip (Perm / T&M / SOW, taupe border, radius 6, 11px 600) that switches type on the
  prototype only.
- Title 30px 700. Line under it (15px 600) carries what the chip does not: Perm "London hybrid, one head, to
  £95,000"; T&M "London, three heads, to £600 a day"; SOW "six milestones, £240,000, ends 30 Jun 2027".
- Owner line (13px, ink 55%): "{owner} runs this job for {client} (link). Hiring manager {name} (link)." Status
  chip: "Open, 21 days" / "Open, 31 days" / "Live, month 4 of 13".
- Right: "Search this job" (220px), a secondary per type (Perm "Close the job", T&M "Extend", SOW "Raise a
  variation"), and **one primary**: "Add a candidate" (Perm, T&M) or "Add a note" (SOW).
- Facts (five): Perm and T&M: Pipeline ("6 live"), Headcount ("1 to fill" / "1 of 3 filled"), Fee at band mid or
  Margin ("£100 to £150 a day"; label reads "Fee, custom 20%" when a custom fee is set), Chance ("60%"), Wants
  filled by / Next start. SOW: Budget, Approved, Remaining, Contractors, Next milestone.
- **Needs you** (same rules as the client, scoped to one job): today in berry, this week and coming up in ink with
  counts that expand inline ("2 this week, 1 coming up"). Derived items: candidate stalled at Sent past 3 days with
  no feedback; interview happened and feedback due; interview invites sent but not confirmed (this week); candidate
  late stage on two jobs; offer awaiting sign off; unapproved milestone; contractor right to work expiring;
  unapproved timesheet on a placed contractor (T&M, links to client Billing); advert closing; PO past 80% drawn;
  assignment ending inside 12 weeks.

### Sticky tab strip
As the client. Tabs by type:
- Perm, T&M: Pipeline, Brief, Matches, Advert, Commercials, Activity.
- SOW: Milestones, Contractors, Brief, Commercials, Activity.

## Pipeline tab (Perm, T&M)

Two columns: table (flex 1 1 640px) and side column (flex 1 1 260px, max 360px).

**Controls row.** Segmented pill **In flight N / Placed N / Out of the running N**. Stage chips (All stages,
Applied, Screened, Sent, Interview, Offer; count each; active = 1px ink border) filter within In flight and Out.
"Group by stage" / "One list" toggle. Caption: "N in flight. Sorted by {column}."

**Table.** Columns: Candidate (name 15px 600; sub 12px ink 55%; third line "Also on {job} at {stage}" when the
candidate is on another live job, muted normally, berry 600 when both jobs are at Interview or Offer) | Stage |
Wants (Perm) or Day rate (T&M) | Days in stage | Date added | Next step (berry 600 when stalled). On Out of the
running the columns read Fell out | Reason | Days | Added | Feedback.

**Sort.** Column headers are the sort control (Dynamics style): click sets that column descending with a down
arrow, click again flips ascending with an up arrow. Sortable: Stage, Wants, Days, Added. Default Stage desc
(furthest along first). In grouped view sort applies within each group.

**Grouped view.** One header per stage (kicker + count, Show / Hide text control at the right; header is sticky
left so it stays in view when the table scrolls). Empty stages are not shown. Hidden state persists per stage.

**Row click** opens the candidate panel (right drawer, 580px). Row actions never live on the row.

**Side column.** Next actions (sand card, Add link, rows what / who / when, Done), Hiring manager (hairline card:
initials, name, role, last contact, "Feedback within 2 working days" from the brief, Email / Call), Commercials
(hairline card: Salary, Fee, Rebate for Perm; Pay band, Charge, Margin, PO for T&M; footer names the source:
"From Brightwell's terms, 16%" or "Custom for this job: {reason}. Agreed by {who}.").

### Candidate panel
Kicker "CANDIDATE ON THIS JOB", initials chip, name, sub, contact line, Close. Facts strip: Stage, Days at stage,
Wants / Day rate, Source. **Also in the running** card (sand) when on other jobs: each row job (link), owner,
stage; one sentence of guidance (late stage on both: "Decide with {owner} which offer to run first"; same client:
"Pick one to send"; early elsewhere: "Nothing to do yet"). Fit against the brief (text). Interviews (round | with
and format | when; status line under it: "Invites sent, not confirmed" / "Confirmed by both" / "Happened, feedback
due" (berry 600) / the feedback text; one text action per state: Mark confirmed / It happened / Record feedback).
On this job (history, newest bold). Actions: **one primary** named for the next step ("Mark screened", "Send to
Dan", "Move to Interview", "Make an offer", "Place {first name}"), secondaries "Book an interview" (at Sent or
Interview), "Move" (any stage, back allowed), "Out of the running", "Open the candidate record" (next entity).
Placed: placement line and no actions. Out: fell out at, reason, feedback, "Bring back in".

## Stage moves (every move captures something)

Nothing moves without a note. Each move is a screen; the note is what the next person reads, and the row's Next
step and a Next action come from it.

- **Applied to Screened.** Facts: From, To, Added, Brief says (the hard rules). Fields: How you screened (Phone 15
  / 30, Video 45, In person); **Right to work** (British or Irish, Settled or pre-settled, Visa no sponsorship
  needed, Needs sponsorship, Not checked; required, cannot be Not checked); Driving licence (only when the brief
  requires one); Credential (only when the brief sets a minimum: Meets it, Equivalent experience, Does not meet,
  Not asked); T&M adds Engagement (Ltd, Umbrella, PAYE, Either), Inside IR35 acceptable (Yes, Outside only, Not
  asked) and Available from (date, against the brief's start); Current salary or day rate; Wants; Notice; Commute
  and pattern (against the brief's remote days); Elsewhere (Nothing else live, Other first stages, Final stages
  elsewhere, Offer in hand); Can interview; Why they would move; **Fit against the brief** (required); Next (Send to
  Dan, Second call, Hold, Out of the running); When. **Knockouts**: an answer that clashes with the brief's rules
  (sponsorship needed vs no sponsorship; no licence vs licence required; does not meet credential; outside only vs
  inside brief) is named under the field, in the footer, and the primary reads "Move to Screened, flag to Dan".
  Knockouts are stored on the candidate and resurface as a Flagged option when sending. Final stages elsewhere or
  offer in hand forces When to Today and appends ", move fast" to the next step.
- **Screened to Sent.** What Dan got (CV and your summary, CV only, Profile on a shortlist); Your summary to Dan
  (required); Flagged (Nothing, Above band, Long notice, Needs sponsorship, Counter offer likely, Final stages
  elsewhere, plus "Knockout: {list}" when the screen found one, with a note that Dan must have agreed); Next; When.
- **Move (any to any).** To (stage pills), Why (required). Moving back keeps both in history.
- **Out of the running.** Reason (Client rejected, Candidate withdrew, Offer declined, Not a fit on screen, Rate or
  salary too far apart, Went elsewhere, Other), Feedback. Kept under Out of the running with the stage they fell at.

## Interviews

**Book an interview** (from Sent or Interview; also the exit of "Progressing to next round" feedback). Moves to
Interview, creates the Outlook event, sends invites. Fields:
- Round: free text, defaults to the next number; "Final" allowed. Clients run as many as they like.
- With: known contacts on the client, or **Someone else** (name and email free text; adds a Next action "Add
  {name} as a {client} contact").
- Format: Video / On site / Phone, each with its own fields.
  - Video: Link (Add a Teams link / Client sends the link / Paste a link, then a URL field). "Client sends" adds a
    Next action to chase the link.
  - On site: Where (the client's addresses, or Somewhere else with a free address that is saved to the client's
    addresses as Interview venue), On arrival (free text: reception, ID, parking).
  - Phone: Who calls (Dan calls the candidate / Candidate calls Dan), then the number or dial-in to put in the
    invite.
- Date (date), Time (free text, any format, pulled into Outlook), Length (free text).
- Prep for {first name} (free text).
- Prep pack: Send the standard pack / Send a pack, I will tailor it / No pack. Not "No pack" adds a Next action
  "Send prep pack to {name}" (or "Tailor and send"), due Today.
- Invites: Send both / Send to candidate only / Hold, I will confirm (event held as tentative).
Primary: "Book and send invites" or "Save the slot". Link: "Ask Dan for slots instead" (logs an email, next step
"Awaiting slots from Dan").

**Interview states** on the panel row: sent, confirmed, done, fedback. Transitions are the text action on the row.
"It happened" sets next step "Feedback due from Dan on {round}" and adds two Next actions (get Dan's feedback; call
the candidate for their side). Feedback due surfaces in Needs you today; unconfirmed invites in this week.

**Interview feedback.** Outcome (Progressing to next round, Offer to follow, Waiting on client, Not progressing,
Candidate withdrew); What the client said (required); What the candidate said; Next by (when relevant). Primary is
named for the outcome and chains: "Save and book the next round" opens Book an interview with the client's
feedback as the prep and a tailored pack; "Save and make the offer" opens Offer; "Save and take out of the running"
opens Out with the reason preset; Waiting on client adds a chase action.

## Offer and place

**Make an offer** (from Interview). Facts: Wants / Asked, Band / Charge, Fee at this offer (Perm: amount x fee %)
or Margin a year (T&M). Fields: Salary offered or Day rate offered (number); Start (prefilled from the brief);
Engagement (T&M: Ltd company outside IR35 / Umbrella / PAYE, prefilled from the candidate); Notice (None,
Immediate, 1 week, 1, 2, 3 months); Conditions; Client approval (Dan approves / Already approved / Verbal, paper to
follow). Row reads "Offer out: £92,000 a year, start 3 Nov. Awaiting answer."

**Place** (from Offer). Creates the placement from the job; rates, dates and rebate carry across. Fields: Agreed
salary or day rate; Start; Perm: Invoice (On start date / On acceptance / Split) and Rebate; T&M: Ends (prefilled
from the brief) and Engagement. Fee or margin is derived and shown. On save the candidate moves to Placed and the
placement appears on the client's Filled and live (T&M: timesheets open from the start date).

## Brief tab

Score line at the top: "Brief 22 of 27 answered." (berry when incomplete) and "Ask {who decides} about: {missing
labels}." Four groups, each a card with Edit / Save {group} / Cancel that saves alone. Fields are typed: **dates
are dates, numbers are numbers, choices are pills**. Wide fields (areas with `span`) render in a second block
under the grid, full width.

- **The role** (sand). Location (text, required: "A job needs a location, even if it is remote."), Remote (On site
  / Hybrid / Remote), Days on site (0 to 5; only when Hybrid; Perm and T&M), Pattern (Full time / Part time / Job
  share / Compressed hours / Shifts), Hours a week (number), Headcount / Heads / Contractors (number, whole, at
  least 1), Travel (None / Occasional UK / Regular UK / International), Reports to, Team, Why it exists (wide), The
  sell (wide).
- **The money.**
  - Perm: Salary from, Salary to (numbers, from must not exceed to), Flex on the band (None / To 5% over / To 10%
    over / For the right person), Bonus % (number, 0 if none), Bonus basis (None / Company performance / Personal
    targets / Mixed / Discretionary; hidden in view when bonus is 0), Pension employer % (number), Holiday days
    (number), Car (None / Car allowance / Company car / Either), Car allowance a year (number; only when Car
    allowance or Either), Medical (None / Private self / Private family / Cash plan), Other benefits (text).
  - T&M: Pay from, Pay to, Charge a day (numbers; pay to must sit under charge), Engagement (Ltd or umbrella /
    Umbrella only / PAYE only), Billable day hours (number), Overtime (Not paid / Pro rata / Agreed per instance),
    Rate review (None in term / At extension / Every 6 months), Expenses (None / Travel to other sites / Travel and
    subsistence / Agreed per trip), Purchase order.
  - SOW: Budget (number), Billed (On milestone approval / Monthly in arrears / Up front then milestones), Retention
    (None / 5% / 10% to handover), Expenses (Included / Billed at cost / None), Purchase order.
- **The process.** Stages (wide; not SOW), Who decides, Feedback within (Same day / 1 / 2 working days / A week),
  Start (date; SOW "Started"), Wants it filled by / signed by (date), Opened / Taken (date), Ends (date; T&M and
  SOW). **Perm shows a read-only "Ends: No end date. Permanent hire."** so the absence is stated, not implied.
- **The rules** ("What would stop a placement"). Right to work (UK required no sponsorship / Sponsorship available /
  Any, remote outside UK fine), Clearance, IR35 (T&M, SOW: Outside determination on file / Inside umbrella or PAYE
  / Assessed per contractor / Not yet assessed), Change control and Acceptance (SOW), Driving licence (Not needed /
  Full UK / Full UK and own car), Minimum credential (None / Degree any / Degree STEM / Professional certification /
  Trade qualification), Which credential (text; only when a minimum is set), Confidential (Client named / Not named
  in advert / Not advertised). These rules feed the screening knockouts.

**Skills asked for.** Chips with a level (Must / Strong / Nice). Edit mode: the input grows the list on Enter,
each chip has a level cycle and remove. Same list feeds Matches.

**Descriptions.** Three: the client's document (versioned, opens the Document drawer: current version, from,
size, version history, Open, Upload a new version), Internal brief (editable), Public advert text (editable; SOW
reads "Not advertised"). Where it came from: Source (Taken by phone / Email from the client / Client's document /
Referral / Tender or portal) and Taken on (date), editable.

## Matches tab (Perm, T&M)
Candidates already held who fit the skills, not on the pipeline. Row: name, sub, why (one line), availability
(muted when not open), primary "Add to pipeline at Screened", Open record, Start an outreach sequence.

## Advert tab (Perm, T&M; inside the job)
State (Live on Cannie site and 3 boards, closes {date}), Repost, Preview as a candidate (drawer: as posted, client
not named, The role, Before you apply), Pre-screen questions (text, answer type Yes or no / Text / Number, auto
reject on no; changes apply to new applications only). Applications land at Applied. Closing date feeds Needs you.

## Milestones tab (SOW)
Facts strip: Budget, Approved, Remaining with burn bar, Margin, Runs. Table: No, Milestone, Due, Value, State
(Approved / In progress / Awaiting approval N days (berry) / Not started). Row opens the Milestone drawer:
facts, who worked on it, primary Submit for approval or Approve, Raise a variation on this milestone.

## Contractors tab (SOW)
Compliance roster: Contractor (name, engagement), Role, Started, Right to work (berry when expiring),
Determination, Ends. Row opens a drawer: primary "Request new right to work" when expiring; Open the candidate
record; End the assignment.

## Commercials tab
- **Fee** (Perm) or **Rates** (T&M) or **Statement** (SOW), sand. Leads with **Source**: "Client terms" / "Rate
  card" / "Custom for this job" with the reason, who agreed and when. Text action "Set a custom fee" or "Change or
  revert". Fee screen: Source (Client terms / Custom for this job); when custom: Fee % (Perm) or Charge a day (T&M,
  must sit above pay band top), Rebate (Perm), Why (Hard to fill uplift / Volume deal reduced / Retained / Exclusive
  reduced / Client pushed back), Agreed by (contact by email / verbally / procurement / Not yet agreed), Agreed on
  (date). "Not yet agreed" adds a Next action to get it in writing. Revert keeps history. A custom figure is
  labelled everywhere it shows (header fact, side card, "Terms say 16%" beside it) and is what placing and forecast
  read.
- **Splits** (hairline): with, basis (This job / Per candidate), % or £ nominal, note; Add a split.
- **Forecast**: Chance (20 / 40 / 60 / 75 / 90 pills), Expected fee (derived: fee at band mid x chance), Projected
  date; SOW: Remaining, Next invoice, Ends.

## Activity tab
As the client: kind filters, By dropdown, Log (primary), rows. Every job entry also writes to the client's
activity; nothing is written twice.

## Drawers (all 580px right sheets)
Stage, Move, Out, Interview, Feedback, Offer, Place, Add a candidate (Who; Current role and employer; How they
came to you: Headhunted / Referral / Own database / Applied by email / LinkedIn; Start them at: Applied / Screened /
Sent; link "See who already fits"), Log, Action, Close the job (Reason: Filled / Filled elsewhere / Withdrawn / On
hold / Budget pulled; keeps the pipeline, each candidate told), Extend (T&M: new end date, rates, note; every live
assignment), Variation (SOW: what changes, budget change, new end; goes to the approver), Split, Question,
Preview, Document, Contractor, Match, Milestone, Activity entry (Add a correction), Fee, Candidate record (stub;
next entity).

## Validation copy (sentences, berry, on the field and beside Save)
"A job needs a location, even if it is remote." "Headcount is a whole number, at least 1." "Salary from is above
salary to." "Pay to must sit under the charge rate." "Right to work is asked on every screen. Pick what they told
you." "Say how they fit the brief. One line will do." "Say why Dan should see them. One line will do." "Pick a
date." "Give a time, any format." "Say who, and how to invite them." "Give the address." "Give the number." "Enter
the amount offered." "Enter the agreed amount." "Enter the fee as a percent." "Charge must sit above the pay band
top, £600." "Say why it differs. Finance will ask." "Say what the client said." "Write the question." "A name is
enough to start." "Say what changes." "How much, as a number." "Say why. Nothing moves without a note."

## Data the record reads (for the model)
Job (type, title, client, hiring manager, owner, status with opened date and close reason, headcount, location,
remote, on-site days, pattern, hours, travel, reports to, team, why, sell; money by type as above; process dates;
rules as above; skills with level; descriptions x3 with versions; source and taken on; advert state, boards,
closing date, questions; fee source and custom figure with reason, agreed by, agreed on; splits; chance; PO),
Candidate on job (stage, days in stage, date added, source, wants, current, notice, fit, screen answers, flags,
interviews with round, with, format, when, status, feedback; offer; placed; out at, reason, feedback; other live
jobs with stage and owner), Milestones (SOW), Contractors on statement (SOW), Activity, Next actions.

## Files in this bundle
- `Job Record.dc.html`: the prototype (template + logic in one file; `support.js` is its runtime). Open with
  `?type=Perm|T%26M|SOW`.
- `Job Record Benchmark.dc.html`: the market benchmark and the must-carry list.
- `SIDEBAR-PATTERN.md`: the universal sidebar rule and what its contextual block shows per page.
- `_ds/`: the Cannie design system tokens and bundle.
- `github.md`: which repo documents the design was built from.
- The client record bundle at `../client-record/` carries the sidebar pattern, tokens table, list patterns and
  the shared drawer and group conventions this record reuses.
