# Brief for Claude Code: job record into the Cannie build

Date: 2026-09-17. From the design lane. For the dev lead lane running against `CStace1/Cannie` main and the
Azure demo (`rg-cannie-demo`, web app `cannie-demo-<digits>`, Easy Auth on, per
`docs/platform/RUNBOOK-demo-on-azure-for-the-co-founder.md`).

Two deliveries, in order. Do not start B until A is live and the link has been checked from a guest account.

Sources of truth, in this order: the prototype files, then the READMEs, then this brief. Build to the prototype
faithfully (see `docs/design/handoff/job-record/README.md`, Fidelity). If the repo's constraints stop something
being built as shown, raise it in the PR description; do not approximate.

## A. Mock-ups on the demo, shareable

**What.** Two design prototypes served as static files from the demo web app, the same way
`/mockups/timesheet-entry.html` and `/mockups/client-profile-and-insights.html` are served today.

- `docs/design/handoff/client-record/Client Record.dc.html` (the agreed client record; NOT `Client Record
  Options.dc.html`, which is the three alternatives considered)
- `docs/design/handoff/job-record/Job Record.dc.html` (opens on Perm; `?type=T%26M` and `?type=SOW` for the
  other two shapes)

**How.**
1. Copy each bundle's runtime alongside it: `support.js` and the `_ds/` folder from each handoff folder. The
   `.dc.html` files load `support.js` and `_ds/cannie-design-system-.../` by relative path and render client side.
   Simplest layout: `src/Cannie.Web/wwwroot/mockups/client-record/` and `src/Cannie.Web/wwwroot/mockups/job-record/`,
   each holding the `.dc.html`, `support.js` and `_ds/`. Rename the entry files to `index.html` so the URLs are
   `/mockups/client-record/` and `/mockups/job-record/`.
2. Check the static file middleware serves `.dc.html` if you keep the name (it is `text/html` by extension
   `.html`, fine), and that nothing in `Program.cs` rewrites or blocks `/mockups/*` subfolders.
3. Add a `/mockups/index.html` (or extend the existing showcase) with three links: Client record, Job record
   (Perm), Job record (T&M), Job record (SOW).
4. Deploy to the demo. Same pipeline as the last mock-up deployment.
5. **Sharing externally.** Easy Auth has `requireAuthentication: true` and no excluded paths, so an external
   viewer needs a guest invitation exactly as before (runbook step 39a and `allowedPrincipalObjectIds`). Two
   options, pick one and say which in the PR:
   - Keep as is: the product owner invites each external as a guest. Zero code, one Graph call per person.
   - Exclude `/mockups/*` from Easy Auth (`excludedPaths` in `authsettingsV2`, or a second App Service). Anyone
     with the link can see the mock-ups; nothing else is exposed because the mock-ups are static and read no data.
     This is the change that makes "a link I can share" literally true. Flag it to Infosec in the PR; the
     mock-ups contain invented seed data only.

**Done when.** All four links open from a guest account (or unauthenticated, if excluded) on a laptop and a phone,
every tab renders, drawers open, and the sidebar and header match the screenshots in the handoff READMEs.

## B. Job record, production, jobs only

**Scope.** The job record page and what it needs underneath, for the job types the codebase already carries.
Nothing on the client record beyond a link to the job. No candidate record (a stub link is fine). No advert
posting integration, no Outlook event creation, no email sending: capture the intent, write the activity row,
add the next action, and mark the integration point with a `// INTEGRATION:` comment and a TECH-DEBT entry.

**Job types.** `Job.EngagementTypeCode` currently allows contract and SOW; perm is out of the prototype per the
Manager's decision of 2026-09-04 17:20. Build T&M (contract) and SOW first, exactly as the prototype shows them.
Build the Perm shape only if that decision has been reversed; otherwise leave the type switch showing the two
and note it. Do not invent a perm data model to make the page complete.

**Where it lives.** `src/Cannie.Web/Pages/Admin/Jobs/Record.cshtml` (+ `.cs`), linked from every job row on the
client record and from the Jobs list. Query-string navigation throughout, no client-side script, per the repo
rule and `DESIGN-engagement-page.md` section 5: `?tab=pipeline|brief|matches|advert|commercials|activity`
(`milestones|contractors|brief|commercials|activity` on SOW), `&view=grouped`, `&sort=stage|wants|days|added`,
`&dir=asc|desc`, `&stage=<code>`, `&cand=<applicationId>`. Drawers are their own pages under
`Pages/Admin/Jobs/<Action>.cshtml` (Stage, Move, Out, Interview, Feedback, Offer, Place, AddCandidate, Log,
Action, Close, Extend, Variation, Split, Question, Fee) that post back and redirect to the record with the
right query string. Rendered as the 580px right sheet over the record where the layout allows it; a full page
is acceptable where it does not.

**Shell.** The existing layout, sidebar and header components. The sidebar is one universal component; only its
contextual block changes per `docs/design/handoff/job-record/SIDEBAR-PATTERN.md` (kicker = client, rows = that
client's open jobs with live-candidate counts, current bold soft berry, "New job at {client}"). If the current
sidebar cannot take a contextual block, add that capability once, in the shared component, and use it on the
client record too.

**Data model changes.** Additive migrations only. Read the prototype README's "Data the record reads" and map to
existing entities before adding anything:
- `Job` already has: title, client, hiring manager (FK) and requesting contact (value), description, engagement
  type, rate unit, budget rate, rate card check, start date, duration (free text), location, work pattern
  (ONSITE/HYBRID/REMOTE), status, owner, SOW pointer, opportunity. Add: headcount (int), on-site days (int,
  nullable), hours a week (decimal, nullable), travel code, reports to, team, why it exists, the sell, pay from /
  pay to (decimal), charge (decimal, the current `BudgetRate` may serve; confirm), engagement rule code, billable
  day hours, overtime code, rate review code, expenses code, purchase order ref, opened date, wants-filled-by
  date, ends date, feedback-within code, who decides (contact FK or text), stages (text), rules (right to work
  code, clearance code, IR35 code, change control code, acceptance code, licence code, credential code +
  detail, confidentiality code), source code + taken on date, chance (int), fee source code + custom charge or
  fee + reason code + agreed-by + agreed-on. Where the SME's code lists in `docs/recruitment-sme/` already name a
  list, use it; where they do not, the option sets in the README are the list. Put new code lists in
  `CrmJobCodeLists.cs` alongside the existing ones.
- `JobSkill` (new): job, skill text, level code (MUST/STRONG/NICE).
- `JobDescription` (new, versioned): job, kind (CLIENT_DOC/INTERNAL/PUBLIC), version, title, body or attachment
  ref, created by/at. Never overwritten.
- `JobAdvert` (new; inside the job, not a separate record): job, state, closes on, boards (text), reposted at.
  `JobAdvertQuestion`: text, answer type, auto reject.
- `JobFeeSplit` (new): job, with (user or text), basis, per-candidate application id, kind, amount, note.
- `Application` already has stage and an append-only `ApplicationStageHistory` with a free-text reason. The
  prototype stages are Applied, Screened, Sent, Interview, Offer, Placed, Out. Map to the existing
  `ApplicationStage` codes (SOURCED ... PLACED, REJECTED) and add codes only where none fits; do not rename
  existing ones. Every stage move screen writes one history row with the note as `Reason` (the prototype's rule:
  nothing moves without a note). Add `ApplicationScreen` (new): the screening answers (right to work status,
  licence, credential, engagement, inside IR35 ok, available from, current, wants, notice, commute, elsewhere,
  can interview, motive, fit, knockout flags). Check `CandidateScreening.cs` first; extend it if it is the same
  thing.
- `Interview` (new): application, round label, with (contact FK or text + email), format code, link, venue
  (client address FK or text), on arrival, who calls, phone, date, time, length, prep, pack code, invite code,
  status code (SENT/CONFIRMED/DONE/FEDBACK), client feedback, candidate feedback, outcome code.
- `Offer` (new): application, amount, start, engagement code, notice code, conditions, approval code, made at.
- Placement: the existing `Assignment` path (CRM-07). Place from the Offer screen creates the assignment with
  rates and dates from the offer and sets `Application.AssignmentId`. Do not build a second placement path.
- Milestones, contractors and variations on SOW: read from the existing `StatementOfWork`, `SowItem`,
  `Assignment` and `ChangeOrder` via `Job.StatementOfWorkId`. No new tables.
- Next actions and activity: whatever the client record build uses; every job activity row also appears on the
  client's activity (same table, client id + job id, not two writes).
- Candidate on more than one job: derived from `Application` rows for the candidate with an open job; no new
  column. Shown on the row and in the panel as the README specifies.

**Needs you.** A query, not a table. Rules in the README under Header. Thresholds as constants in one place
(`JobNeedsYouRules`), named so agency settings can own them later.

**Order of work.** Shell and header with facts and Needs you; Pipeline tab read only with sort and grouping;
candidate panel; stage move screens (Screened, Sent, Move, Out); Interview and Feedback; Offer and Place onto
the existing assignment path; Brief tab with the four groups editable; Commercials with fee source; Activity and
next actions; Matches (query on `JobSkill` against candidate skills, no ranking, per CRM-05 BR4); Advert;
SOW tabs reading existing SOW data. Ship each step behind the record as it lands; do not hold the branch for
the whole list.

**Tests.** Per repo convention in `tests/Cannie.Web.Tests` and `tests/Cannie.Data.Tests`: one test per validation
sentence in the README's Validation copy; stage history row written on every move; place creates exactly one
assignment; Needs you rules each have a positive and a negative case; sort and group query strings round trip.

**Seed.** Extend the demo seed with the prototype's data (Brightwell Payments; Data Engineers T&M with the six
candidates; Payments migration phase 2 SOW with six milestones and four contractors) so the demo shows what the
mock-up shows.

**Done when.** A demo user opens a client, clicks a T&M job, and can do the full pipeline round trip (add a
candidate, screen with a knockout, send, book an interview, record feedback, offer, place) with every step
visible on Activity and Needs you, on the demo URL, with tests green and `docs/data/` dictionary regenerated
(DEC-PROC-075).

## What is not in this brief
Perm data model (pending the Manager's decision), candidate record, advert board integration, Outlook or email
sending, client portal, custom fields, insights card, desk-level Jobs list beyond what exists.
