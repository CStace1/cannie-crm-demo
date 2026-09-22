# Next actions, one pattern on every record

Applies to the client, job and candidate records, and to the desk overview. Same markup, same behaviour.

Row: what (weight 500) with who beneath (muted 12px); right side, when (12px, 600) above a Done text link.
Tapping the row opens the action drawer: What (text, required); Who defaults to the signed-in user and is shown as a
fact, with a Reassign link that reveals the desk select (the assignee sees it on their desk, the creator keeps it on
Activity); a Quick pick (Today,
Tomorrow, Monday, In a week, In two weeks, In a month) that sets a real Due date, the Due date itself, an optional
Time (a time also creates an Outlook event), and a Note that travels with the action and shows under it on the row.
Editing adds "When done, follow up" (In a week, two weeks, a month): Mark done then creates the follow up with the
same note. Editing also adds two links: Mark done, Drop it. The list sorts by due date; overdue reads "Overdue, 12 Sep".

Done and Drop remove the row and write one Activity entry ("Done: …" or "Dropped: …") so nothing disappears
without a trace. Empty state: "Nothing queued. Done actions are on Activity." "Add an action" sits under the list.

Actions created by a flow (a stage move, an interview booking, a custom fee not yet agreed) land in the same list
with who = the recruiter who did the thing and when = what the flow said. They are ordinary rows once created:
editable, doable, droppable.

An action belongs to one record (client, job or candidate) and shows on that record and on its owner's desk.
It never shows on two records; the Activity entry carries the link to the other record if needed.
