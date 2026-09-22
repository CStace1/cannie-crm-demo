# Overview and actions: three roles, three rounds

20 September 2026. UX, UI, recruiter SME (perm and contract). Subject: Overview.dc.html and how Next actions and Needs you work across the app.

## Round 1, opinions

**UX.** The page is two products: a dashboard (money, pipeline) and a work queue (Needs you, Next actions), and the queue is split in two by where the item came from (derived vs typed). A recruiter does not care where a to-do came from; they care what is due and who it is with. Recommendation: one queue called Today. Derived and typed items in the same list, ordered by due then age, same three controls on every row (Do, Later, Open). Keep money and pipeline above as a glance band, not as the page.

**UI.** Eight sections, three card treatments (sand, bone-with-hairline, plain), and nine type sizes. It reads busy even when the content is quiet. Recommendation: four sections; one card treatment per band (sand for glance, bone hairline for lists); cap type at 44 hero, 22 figure, 15 body, 12 caption, 10 kicker. Bars all 22px. Delete the per-card captions that restate the label.

**Recruiter SME.** Missing the thing every recruiter is managed on: activity against target this week (calls, CVs sent, interviews booked, offers). Vincere and Bullhorn both open on it. Next actions should read like a call sheet: name, number, last note, one tap to log. Needs you is good because it is derived, but it should sit in the same list as my calls, not above it. Waiting on managers is right but it is Dan's line already; fold it in. Delivery chips, quiet clients and pick-ups are useful but not first screen; a row of counts with links is enough.

## Round 2, converge

Agreed shape:
1. Header, one line of state.
2. Glance band, 50/50: Committed (billed bar, pace, three figures) and Pipeline (value, funnel by type, three figures). Unchanged.
3. Activity this week: four bars against target, one line of read. New.
4. Today: one queue. Derived lines by person (Dan, Ruth, Amara, You) and typed actions, sorted by due then age. Row controls: Do (opens the chase or log drawer), Later (tomorrow), Open. Done logs to the record. Replaces Needs you and Next actions.
5. Jobs, where each one is: the table, full width.
6. Elsewhere: one row of counts with links (contractors ending, timesheets unapproved, extensions, unowned applicants, quiet clients).

UX added: Focus toggle that hides the glance band so Today fills the screen for the morning hour. SME added: a target that is not set should say so once, not on every card. UI added: berry only on the Do button and on overdue ages; everything else ink.

## Round 3, verify against best in class

Bullhorn Novo: activity goals and a to-do list, configurable cards. Vincere: Today view with KPI targets by consultant, tasks, and a pipeline widget. Firefish: to-do first, then dashboard. Sales CRMs (HubSpot, Salesforce): one task queue with snooze and one-tap complete, sequences.

Where this lands: level on activity targets, tasks queue with snooze and complete, money and pipeline. Ahead on derived items in the same queue as typed ones, the one-chase-covers-many drawer, and the pace marker. Behind on configurable layout (by choice) and kanban (offered as a toggle elsewhere).

## Actions pattern, ruling
Next actions remain on every record (see NEXT-ACTIONS-PATTERN.md). On the Overview they are not a card; they are rows in Today. Done, Later and Reassign behave identically in both places. A chase from Today writes one activity entry per record it covers and one follow-up action.
