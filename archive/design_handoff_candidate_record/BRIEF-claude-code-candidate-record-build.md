# Brief for Claude Code: candidate record into the Cannie build

Date: 2026-09-19. From the design lane. For the dev lead lane running against `CStace1/Cannie` main and the
Azure demo. Companion to the job and client briefs in `docs/design/handoff/`. Suggested home:
`docs/design/handoff/candidate-record/BRIEF-claude-code-candidate-record-build.md`.

Sources of truth, in this order: `Candidate Record.dc.html`, then `README.md`, `NEXT-ACTIONS-PATTERN.md` and
`SIDEBAR-PATTERN.md` beside it, then this brief. Build to the prototype faithfully. Where the repo's constraints or
its legal rulings stop something being built as shown, raise it in the PR; do not approximate.

## Two deliveries

**A. Mock-up on the demo.** Serve `Candidate Record.dc.html` and `Mobile Light.dc.html` with their `support.js`,
`ios-frame.jsx` and `_ds/` from `wwwroot/mockups/candidate-record/`, as the job brief describes. Add the links to
`/mockups/index.html`. Done when both open from a guest account on a laptop and a phone.

**B. Production, candidate record.** The page and what it needs underneath.

## What already exists, and three rulings that shape the build

`Candidate` carries name, known as, email (unique per tenant), mobile, address lines and postcode, current title
and employer, sector, seniority, free-text skills, source, owner, available from, notice period (days), work
pattern, rate expectation + unit, status. `CandidateJobHistory` (employer, title, from, to null = current,
description, location, display order). `CandidateAttachment` (class CV / RIGHT_TO_WORK / SCREENING_EVIDENCE /
OTHER, one current CV per candidate by filtered index, upload / download / delete events). `CandidateRightToWork`
(document type, checked on, checked by, expiry, five-value status). `CandidateScreening` and checks.
`Application`, `ApplicationStageHistory`, `Assignment`, `Timesheet`, `Activity`, code lists.

Three repo rulings the prototype must bend to, not the other way round:

1. **CV parsing is currently barred (LEG-S27, LEG-S36 item 3) and the product owner is challenging that
   ruling.** The position being put to Legal: legitimate interest, a candidate submits a CV to a recruitment
   agency expecting it to be read to match them to jobs; consent captured at submission as a second basis;
   parsing **purpose-limited** to skills, roles, dates, qualifications and contact details, with everything else
   discarded at parse time, never stored or indexed; nothing written to the profile until a recruiter applies it
   (the prototype's "Parsed, to confirm" card). Build in two steps so the ruling does not block the record:
   (a) now: plain attachment upload, inline viewer over the stored bytes (never text extracted into the page),
   skills and history typed, the "Parsed, to confirm" card built and wired to a parser interface that returns
   nothing (`ICvParser`, `// PARSING: awaiting LEG-S27 review`); (b) on the ruling: implement the parser behind
   that interface with a field allow-list, a discard log, and the candidate-facing notice. Record the challenge
   and the allow-list in the PR and in docs/legal so the decision is traceable.
2. **Right to work is a row, never a flag; status is one of five values (LEG-S36 item 5).** The prototype's
   Documents table maps: right to work rows come from `CandidateRightToWork` (state = the five codes; "Valid" =
   CLEARED); other documents from a new `CandidateDocument` table (below). No document body for right to work
   or screening evidence is held in Cannie in Phase 1 (LEG-S28, LEG-S33); those rows carry type, dates, checked
   by and an external reference, and the "View" action is disabled with the reason.
3. **Permanent placement is out of the prototype (Manager's decision 2026-09-04).** Build the record for the
   contract shape first. Salary expectation, perm fee and rebate fields appear only if that decision is
   reversed; until then `RateExpectation` + unit is the "Wants" fact, and the Placed state reads from
   `Assignment`. Do not invent a perm model.

## Where it lives

`src/Cannie.Web/Pages/Admin/Candidates/Record.cshtml` (+ `.cs`) at `/Admin/Candidates/Record/{id}`, linked from
every candidate row on the job pipeline and the desk. Query-string navigation, no client-side script:
`?tab=applications|profile|pay|compliance|placements|consent|activity|matches`, `&cv=<attachmentId>` (which CV
the inline panel shows), `&cvopen=0`, `&closed=1`, `&kind=<activityKind>`, `&q=<search>`. Drawers are their own
pages under `Pages/Admin/Candidates/<Action>.cshtml`: Contact, Application (fit + move), Log, Action, Summary,
Shortlist, Skill, Role, Qualification, Reference, Document, Recheck, CvUpload, Availability, Consent, Request,
Tags, ContactRole, Entry. Rendered as the 580px right sheet where the layout allows; full page where it does not.

## Shell

Existing layout, universal sidebar with the contextual block per `SIDEBAR-PATTERN.md` (kicker = the job it was
opened from, rows = that job's live candidates with stage). Header, snapshot card, state band and Needs you per
the README. State is derived, never stored: On site when a live `Assignment` exists; Placed when an
`Application` is at PLACED with an assignment whose start is in the future; else Candidate.

## Data model changes (additive, nullable, no backfill)

- `Candidate`: add `LinkedInUrl`, `PreferredContactCode` (TEXT / CALL / EMAIL / WHATSAPP), `ContactHoursCode`
  (ANY / LUNCH / AFTER_18 / NOT_WORK_HOURS), `Pronouns`, `TravelToleranceCode` (30 / 45 / 60 / 90 minutes /
  RELOCATE), `TravelByCode` (PUBLIC / CAR / EITHER), `Motive`, `Elsewhere`, `WouldConsider`, `ConsultantRead`,
  `Summary` (the three lines), `ShortlistProfile`, `ShortlistProfileCheckedAt`. Current title and employer become
  **derived from the current `CandidateJobHistory` row** on the record; keep the columns for now, write both.
- `CandidateSkill` (new): candidate, skill text, level code (STRONG / WORKING / LEARNING), years code, confirmed
  how code, retired at (nullable; retired rows stay). Migrate the free-text `Skills` column into rows on first
  edit, not by backfill.
- `CandidateTag` (new): candidate, tag text, created by/at. A seeded `CandidateTagSuggestion` list for the
  common picks.
- `CandidateQualification` (new): candidate, name, awarded by, year, expires (nullable date).
- `CandidateReference` (new): candidate, who, relationship, state code (NOT_ASKED / NAMED / REQUESTED / RECEIVED /
  DECLINED), note.
- `CandidateDocument` (new): candidate, kind code (PROOF_OF_ADDRESS / QUALIFICATION / DBS / CERTIFICATION /
  OTHER), name, expires, checked on, checked by, checked how code, supersedes id, attachment id (nullable; only
  where Legal permits the body), external reference. Right to work stays on its own table.
- `CandidatePayHistory` (new): candidate, when, where (application or assignment id, or "told you"), amount,
  unit, which code (WANTS / CURRENT / OFFERED / AGREED), source (SCREEN / OFFER / PLACEMENT / EDIT). Written by
  the screening, offer and place paths and by the Availability edit; never edited.
- `CandidateConsent` (new, one current row, history kept): candidate, lawful basis code, consent given on,
  source, marketing code, retention to (**default consent date + 3 years**, recomputed on consent date change
  unless `RetentionSetByHand`), review on, set by/at.
- `CandidateRequest` (new): candidate, kind (SAR / ERASURE), received on, how, note, due on (SAR: +1 month),
  actioned at. Erasure is a scheduled state, never a delete.
- `ContactPersonLink` (new): contact id, candidate id, role code (INFLUENCER / HIRING_MANAGER / DECISION_MAKER /
  REFERRER / NONE), note. One person, two records; both records read it. **Rule**: an application from a
  candidate to a client where they are a current contact or current employer is refused with a named reason.
- `Interview.PrepPackSentAt` if the job build has not added it (Needs you reads it).
- `NextAction`: use the job build's table; add `DueOn` (date), `DueTime` (nullable), `Note`, `FollowUpCode`, and
  `AssigneeUserId` defaulting to the creator, per `NEXT-ACTIONS-PATTERN.md`. Done and Drop write an Activity row.
- Duplicates: a read on create and on edit of mobile or email (same mobile, or same email normalised, or same
  last name + employer). Merge is a service that re-points applications, history and activity to the surviving
  row and marks the other MERGED; nothing is deleted.

## Needs you
A query, thresholds in `CandidateNeedsYouRules`: late stage on two jobs; answer due; prep pack not sent inside 3
days of an interview; document or right to work expiring inside 30 / 90 days; available-from inside 60 days;
consent review inside 30 days; qualification expiring; placed: start inside 7 days not confirmed, rebate end,
invoice on start; on site: unapproved timesheet, extension due 8 weeks before end, SDS review at extension.

## Order of work
Shell, header, snapshot, Needs you; Applications with the application drawer (fit, move with note → stage
history); Profile (CV inline viewer, summary, skills, work history driving the header, qualifications, shortlist
profile with the name check, duplicates); Availability and pay with the pay history table; Compliance
(right to work rows, documents, IR35 from assignments, references); Placements from assignments and timesheets;
Consent with the retention default and requests; Activity with the entry drawer and templates (`// INTEGRATION:`
for send); Matches (query on `JobSkill` against `CandidateSkill`, no ranking, CRM-05 BR4) with Put forward;
Tags; contact role link; next actions per pattern; seed; tests.

## Tests
One per validation sentence in the README; retention default and recompute; one current role at a time; shortlist
save refuses name or employer; duplicate detection positive and negative; merge keeps both histories; application
to own employer refused; each Needs you rule positive and negative; CV inline view never reads file text.

## Seed
Amara Osei as the prototype shows her (two live applications, 2020 contract at Kestrel Freight with 12 approved
timesheets and an outside SDS, 2020 perm at Curve, documents, references, consent from 1 Sep 2026, contact role
at Monzo, duplicate A. Osei), so the demo shows what the mock-up shows in all three states.

## Done when
A demo user opens Amara from the Brightwell pipeline, sees Needs you derived from real rows, saves a fit and moves
her with a note, views the CV inline, edits a skill and her work history and sees the header change, records a
document recheck, records an SAR, puts her forward to a matched job, and every one of those shows on Activity and
on the job, on the demo URL, tests green, `docs/data/` regenerated.

## Not in this brief
Candidate list and create flow (next screen), portal, CV parsing, email and SMS sending, calendar event creation,
perm model, custom fields, insights.
