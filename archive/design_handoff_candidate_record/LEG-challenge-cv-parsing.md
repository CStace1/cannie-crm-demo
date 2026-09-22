# Note to Legal: CV parsing on the candidate record

Date: 2026-09-19. From: product owner. Re: LEG-S27 and LEG-S36 item 3 (no parsing, text extraction or indexing of
CV attachments). Suggested home: `docs/legal/LEG-challenge-cv-parsing.md`.

## What we want to do

Read a candidate's CV when it is uploaded and extract a fixed set of fields into the candidate record for a
recruiter to confirm: skills, job titles, employers, dates, qualifications, and contact details (name, email,
phone, LinkedIn). Nothing else.

## Why

A candidate submits a CV to a recruitment agency so that it is read and they are matched to jobs. That is the
purpose of the submission. Every established system in this market (Bullhorn, Vincere, Firefish, JobAdder,
Recruit CRM, Manatal, Zoho Recruit, Loxo) parses on upload; several now run AI over the whole document. A
recruiter typing skills and history by hand from a CV they are looking at is the same processing, slower, and
with more error.

## Proposed lawful basis

1. **Legitimate interest (Article 6(1)(f))** for the ordinary personal data in a CV: skills, employment history,
   qualifications, contact details. The interest is the agency's and the candidate's, the processing is what the
   candidate expects on submission, and the intrusion is no greater than a recruiter reading the same document.
2. **Consent at submission** as a second leg: the upload or application form states "We read your CV to match you
   to roles and to build your profile. You can see and change what we take from it." Recorded on the consent
   record with date and source, alongside the existing lawful basis and retention fields.

## Handling the Article 9 risk

The concern behind LEG-S27 is that a whole-document parse also reads special category data that arrives
incidentally (health, ethnicity, religion, union membership, sexual orientation, and so on). The proposed design
answers it by limiting purpose and retention at the point of parsing:

- **Allow-list extraction.** The parser returns only the named fields. It does not return free text, a summary,
  a score, or a ranking.
- **Discard at parse time.** Everything outside the allow-list is dropped in memory and never written, logged or
  indexed. No full-text index over CV bodies is built.
- **Human confirms before anything is stored on the profile.** Extracted values land in a "Parsed, to confirm"
  card; a recruiter applies or skips each one; only applied values are written. Skips are logged as skipped, not
  stored.
- **Candidate transparency.** The candidate is told at submission what is extracted and can see and correct it.
- **No decisions made by the parser.** Matching remains a query over confirmed skills against job skills with no
  ranking (CRM-05 BR4 already states this). Nothing parsed decides an outcome for the candidate.
- **Discard log.** The parser records that a document was parsed, when, which fields were returned, and that the
  remainder was discarded, without recording what the remainder was.

## What does not change

- The CV file itself is stored and viewed exactly as today (attachment seam, no body in the database).
- Right to work evidence and screening evidence are not parsed and are not held in Cannie in Phase 1
  (LEG-S28, LEG-S33) as before.
- Retention follows the consent record: consent date plus three years by default, six years from placement end
  where placed.

## Asks

1. Confirm legitimate interest plus submission consent as the basis for allow-list CV parsing as described.
2. Confirm the allow-list (skills, titles, employers, dates, qualifications, contact details) or amend it.
3. Confirm that discard-at-parse with a discard log meets the Article 9 concern in LEG-S27, or say what would.
4. Confirm the candidate-facing wording at submission.

## If agreed

LEG-S27 is amended to permit allow-list parsing under these conditions; the build implements the parser behind the
interface already specified in `docs/design/handoff/candidate-record/BRIEF-claude-code-candidate-record-build.md`;
the consent record gains the submission consent source; the discard log is added to the data dictionary.
