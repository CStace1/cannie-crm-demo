# Exchange sync: what the integration covers

Date: 2026-09-21. Scope for the Microsoft Graph integration behind email, calendar and contacts. Companion to
`NEXT-ACTIONS-PATTERN.md`. The prototype shows every state described here; the build wires it.

## Principle

Cannie is the record; Outlook is the surface the recruiter already lives in. Anything Cannie creates with a
time becomes an Outlook event, anything the recruiter does to that event in Outlook comes back, and nothing is
duplicated. Email is read into the record it belongs to, never copied twice, never sent from Cannie without the
recruiter seeing it go from their own mailbox.

## Auth and tenancy

- Microsoft Entra app registration, delegated permissions, one consent per user on first sign in:
  `Calendars.ReadWrite`, `Mail.Read`, `Mail.Send`, `Contacts.ReadWrite`, `User.Read`, `offline_access`.
- Tokens per user, refreshed server side. A user who revokes consent sees "Outlook disconnected" on every
  record and a Reconnect link in the top bar; nothing else changes.
- Shared mailboxes (info@, jobs@) are opt-in per desk with `Mail.Read.Shared`.

## Calendar

**Cannie → Outlook**
- Action with a time (`DueTime` not null) → `POST /me/events`. Subject `{type}: {what}`, body = the note plus a
  deep link to the record, `showAs: busy` for Meeting and Call, `free` for Task and Chase, category `Cannie`,
  reminder 15 min. Attendees empty unless the With person has an email and the recruiter ticks Invite.
- Interview booked → one event on the recruiter's calendar (`showAs: free`, so it does not block them) plus
  invites to candidate and interviewer if Invites is on. Teams link requested with `isOnlineMeeting: true` when
  format is Video and link source is "Add a Teams link".
- Milestone review, extension due, rebate end → optional all-day reminders, off by default, on per desk.
- Cannie stores `ExchangeEventId` and `ExchangeICalUId` on the action or interview; both needed because
  moved events keep the UId.

**Outlook → Cannie** (change notifications on `/me/events`, 3-day subscription renewed by a job)
- Event moved → action `DueOn`/`DueTime` updated; Activity row "Moved in Outlook to Thu 14:00".
- Event deleted → action stays, `CalendarState: Removed`, berry sentence on the row "Removed from your
  calendar; still due". Nothing is deleted in Cannie by an Outlook action.
- Attendee response on an interview → interview status `confirmed` or `declined`; a decline raises a Needs you
  item on the job.
- Events not created by Cannie are not imported. Free/busy is read for "Propose times" on the interview drawer
  (`/me/calendar/getSchedule`).

**Conflicts**: Cannie wins for content (what, note, regarding); Outlook wins for time. Last write is logged.

## Email

- Inbound: `/me/messages` delta per user, every 2 min. A message is attached to a record when a participant
  address matches a candidate or contact email. One message, many records: it appears on the candidate, the
  job (if the subject or body carries the job reference `[CN-1234]`) and the client, from one row in
  `Activity` with `ExchangeMessageId`. Matched by address only; no body parsing beyond the reference tag.
- Unmatched mail is not stored. A "Not on a record" count shows on the desk with a one-tap attach.
- Outbound: templates (interview confirmation, prep pack, offer cover, check in) render in Cannie, send via
  `/me/sendMail` from the recruiter's mailbox, and log as an Activity row on every record they concern. The
  reference tag is appended to the subject so replies thread back. Attachments come from the record (CV
  version, prep pack) and are recorded by version.
- Reply from a candidate or manager → new Activity row; if the record has an open Chase action with that
  person, the row shows "Replied" and the chase auto-completes with outcome "Replied by email".

## Contacts

- Client contacts and candidates the recruiter owns are pushed to a `Cannie` contact folder in Outlook so
  names resolve on the phone. Read-only from the Outlook side; edits there are ignored and a nudge is shown.

## What the user sees, by screen

- **Top bar**: Outlook chip (connected, syncing, disconnected). Click opens the sync panel: last sync,
  counts today, reconnect.
- **Action row**: a small calendar glyph when the event exists; berry "Removed from your calendar" if deleted
  in Outlook; "Moved in Outlook" as the last Activity line.
- **Action drawer**: When shows "In your Outlook calendar" once saved; Invite {with} tick when the With person
  has an email; Teams link tick on Meeting and Call.
- **Interview drawer**: Propose times reads free/busy for the interviewer and the recruiter; invite state per
  attendee (sent, accepted, declined, tentative).
- **Activity**: Email rows carry the subject, from, to, and Open in Outlook; a Sync filter shows what came in
  and went out today.
- **Overview**: Waiting on managers uses last inbound email as well as calls for "last contact".

## Data model additions

`Activity`: `ExchangeMessageId`, `ExchangeConversationId`, `Direction` (In/Out), `Subject`, `FromAddress`,
`ToAddresses`. `NextAction` and `Interview`: `ExchangeEventId`, `ExchangeICalUId`, `CalendarState`
(None/Created/Moved/Removed), `LastSyncAt`. `UserMailbox`: user, tenant, consent granted at, subscription id,
expiry, last delta token, state. `EmailTemplate`: name, subject, body, merge fields, attachments policy.

## Failure modes shown in the prototype

Disconnected (chip and Reconnect), event removed in Outlook (row sentence), invite declined (Needs you),
unmatched mail (desk count). Rate limit and subscription expiry are silent retries with a log line.

## Not in scope

Reading calendar events Cannie did not create; parsing email bodies into fields; sending SMS (separate
provider); Google Workspace (same shape, later).
