# Brief for Claude Code: client record into the Cannie build

Date: 2026-09-17. From the design lane. For the dev lead lane running against `CStace1/Cannie` main and the
Azure demo. Companion to `BRIEF-claude-code-job-record-build.md` in `docs/design/handoff/job-record/`; the
mock-up deployment (delivery A there) already covers the client record, so this brief is the production build
only. Suggested home: `docs/design/handoff/client-record/BRIEF-claude-code-client-record-build.md`.

Sources of truth, in this order: `Client Record.dc.html` (the agreed prototype; NOT `Client Record
Options.dc.html`), then `README.md` and `SIDEBAR-PATTERN.md` beside it, then this brief. Build to the prototype
faithfully. If the repo's constraints stop something being built as shown, raise it in the PR description; do
not approximate.

## What already exists, and the rule about it

`Pages/Admin/Clients/Record.cshtml(.cs)` is live at `/Admin/Clients/Record/{id}` with `IClientRecordService`
behind it, per-group POST handlers (Details, Billing, ContactDetails, RegisteredAddress, InvoicingAddress,
LogActivity), server-side validation matching the check constraints, and TempData saved banners. **Keep the
service and the handler pattern; replace the page.** This is a re-skin and re-architecture of the view onto the
prototype's shape, plus the sections the current page does not have. Do not touch `Edit.cshtml(.cs)`.

`Client` already carries: legal, trading and registered name, status, owner, source, company and VAT number,
website, sector, size band, main phone, invoice email, payment terms (days + basis), invoicing frequency, PO
reference, self bill, billing entity, VAT treatment, invoice rules note, billing cut-off, AP receipt deadline,
invoice grouping, timesheet frequency default, registered and invoicing addresses (six columns each, same-as
flag). `Contact` carries name, email, job title, phone, direct phone, mobile, department, preferred method,
marketing consent (tri-state), receives invoices, LinkedIn, notes, site address, status. `ClientAgreement` is
the typed terms / MSA / framework record with dates and a document reference. `Activity`, `Job`, `Application`,
`Assignment`, `StatementOfWork`, `SowItem`, `Milestone`, `ChangeOrder`, `PurchaseOrder`, `Invoice`, `Timesheet`
exist. Read them before adding anything; most of the prototype is a read over these.

## Scope

The client record page as the prototype shows it: header with Needs you and five facts, sticky tab strip, seven
tabs, drawers, groups, search, create. The job panel opens the job record built under the job brief. Contact
record stays a drawer (contact record is a later entity). Email and SMS sync on Activity: render the seeded
shape, do not integrate. Statement of account: logs an activity row, sends nothing (`// INTEGRATION:`).

## Where it lives

Same route. Query-string navigation, no client-side script: `?tab=jobs|sow|people|commercials|contracts|billing|
activity`, `&jobs=tofill|filled`, `&type=all|perm|sow|tm`, `&job=<id>` (opens the job panel), `&contact=<id>`,
`&ms=<sowItemId>`, `&q=<search>`, `&edit=<groupKey>` (opens one group in edit mode; only one at a time),
`&kind=<activityKind>&by=<userId>`. Drawers are their own pages under `Pages/Admin/Clients/<Action>.cshtml`
(AddContact, TakeJob, Log, AddAction, AddDocument, NewVersion, Email, SendStatement) rendered as the 580px right
sheet over the record where the layout allows; full page where it does not.

## Shell

Existing layout and the universal sidebar. Contextual block per `SIDEBAR-PATTERN.md`: kicker "My desk, N jobs to
fill" linking to the desk, rows = the owner's clients with jobs-to-fill counts, current bold soft berry, "New
client" link. If the sidebar cannot yet take a contextual block, add that once in the shared component (the job
brief says the same; whichever lane lands first owns it).

## Header
Kicker CLIENT, status chip, title (trading name, legal name under it when different), owner line, "Search this
client", secondary "Take a new job", primary per tab. Five facts: Jobs to fill, Filled and live, Invoiced this
year, Outstanding, Terms (agreement in force: type, signed, valid to). **Needs you**: today (berry) / this week /
coming up (ink, counts expand). Rules, each a query with named thresholds in `ClientNeedsYouRules`: unapproved
milestone; job with no candidate movement for N days; hiring manager with no contact for N days and a live job;
rebate window ending inside 14 days; assignment ending inside 12 weeks; agreement review or end date inside 60
days; right to work or determination expiring inside 30 days; PO past 80% drawn; invoice overdue; AP receipt
deadline inside 5 days with unbilled approved time.

## Tabs

**Jobs.** Segmented To fill / Filled. Type filter All / Perm / SOW / T&M (perm only where the model allows it;
otherwise show two and note). To fill: role (header) with person on the sub-line, type, hiring manager, stage
counts, days since movement, next step (berry when stalled); row opens the job panel (`&job=`), which links to
`/Admin/Jobs/Record/{id}`. Filled: role, person, start, end, fee or margin, rebate window end, state. Read from
`Job`, `Application`, `Assignment`. Primary: Take a new job.

**Statements of work.** Live statements with budget, approved, remaining, next milestone; milestone drawer
(`&ms=`) reads `SowItem` / `Milestone`; Chase or Submit for approval writes through the existing approval path
(TS-APR), never a second one. Primary: Raise a variation (creates `ChangeOrder` draft).

**People.** Contacts: name, job title, department, routes, roles (hiring manager derived from `Job`; approver
derived from assignment and SOW approver columns per CRM-02 BR2, never a stored flag), last contact, marketing
consent. Contact drawer with Edit details and the two quick picks (preferred route, marketing consent) as their
own small POSTs. Primary: Add a contact. Contractors on site is the second list on this tab: `Assignment` rows
live, with right to work and determination state from `CandidateRightToWork` and `AssignmentComplianceItem`.

**Commercials.** Rate card (T&M bands: charge, pay, margin derived, applies to; edit turns bands into inputs;
a band in use cannot be removed; rate changes apply from save date via `AssignmentRate`, never rewriting valued
time). Fees by job type group (perm fee %, rebate, invoiced when; SOW margin %; T&M approval; time captured in).
Commercial terms group (position on the PSL, MSA and rate card review dates, credit limit, billing contact,
billing entity, VAT treatment, payment terms, frequency, PO, self bill). **New columns needed on `Client`**, all
nullable: position code, credit limit, perm fee %, perm rebate code (+ text), perm fee invoiced code, SOW margin
%, T&M approval code, billing contact id. Rate card is a new table `ClientRateBand` (client, band name, charge,
pay, applies to, valid from, valid to; never deleted, ended by valid to).

**Contracts and admin.** Contracts and compliance first: `ClientAgreement` rows plus a new `ClientDocument`
table (client, kind code CONTRACT/COMPLIANCE, subkind, name, applies to, signed on, valid from, valid to, state,
version, supersedes id, document reference; never overwritten, new version = new row). Credit check is a
document with a state sentence, never a score. Then the groups in order: Status and ownership (status, valid
from / to on the status, owner, also on the account), Company details, Contact details, Addresses, Group
structure last (new `ClientGroupLink`: parent id, child id, relationship code; only where a client is genuinely
several companies).

**Billing.** Facts (invoiced this year, outstanding, overdue, debtor days, credit with in-use), Send statement
of account (activity row), Invoices, Time awaiting approval, Timesheets by placement and period. All reads over
`Invoice`, `Timesheet`, `TimesheetValuation`, `Assignment`.

**Activity.** Kind filters, By dropdown, Log primary. Every row has client id and optionally job id; job record
entries appear here without a second write.

**Search this client.** Two characters in, results grouped by kind, each a link to where the thing lives.

## Groups
Each group is its own form and handler, as the current page already does; extend the pattern to the new groups
(StatusOwnership, CommercialTerms, FeesByJobType, GroupStructure, RateCard). Validation sentences from the README
("Enter an 8 digit company number." etc.) are the existing `ClientRecordStrings` constants where they exist; add
the missing ones there, not inline. Choice fields with "Other" store the code plus a text column, as the
prototype's berry-bordered free text implies.

## Create a client
From the sidebar. Name, main phone or main email (one required), status. Lands on the empty record with every
tab's one-line empty state from the README. Reuse `SaveClientAsync`; do not add a create path.

## Data model changes, summary
Additive, nullable, no backfill, migrations named per repo convention, `docs/data/` regenerated (DEC-PROC-075).
New columns on `Client` (eight, above). New tables: `ClientRateBand`, `ClientDocument`, `ClientGroupLink`,
`NextAction` if the job brief's lane has not created it (client id, job id, contact id, what, who, when, done at).
No approver flag on contact, no client_site entity, no second placement or approval path.

## Order of work
Shell, header, facts, Needs you; Jobs tab reading real rows with the job panel; People with contact drawer;
Contracts and admin with the existing groups re-skinned and the documents table; Commercials with rate card and
the two new groups; Billing; Activity and search; create a client; seed; tests.

## Tests
One per validation sentence; each Needs you rule positive and negative; group saves touch only their own columns;
rate band in use cannot be removed; new document version never overwrites; approver derivation matches CRM-02 BR2.

## Seed
Brightwell Payments as the prototype shows it (six jobs, contacts incl. Dan Okafor and Claire Dunn, rate card
bands B and C, agreements, documents, invoices, the SOW with six milestones and four contractors), so the demo
matches the mock-up.

## Done when
A demo user opens Brightwell, sees Needs you derived from real rows, takes a new job from the header, adds a
contact, edits the rate card, adds a document version, logs a Teams meeting, and every one of those shows on
Activity, on the demo URL, tests green.

## Not in this brief
Contact record as a page, candidate record, Outlook and SMS sync, statement of account email send, client
portal, custom fields, insights and trends card.
