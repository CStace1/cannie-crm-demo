# Sidebar navigation (standing pattern, universal)

Copied from the project's CLAUDE.md so it travels with the handoff. Applies to every screen in Cannie:
Overview, Clients, the client record, the job record, and every record that follows. **One sidebar
component, rendered on every page.** Do not build a per-page sidebar.

The ink sidebar carries one contextual list below the main nav, and it MOVES with the level the
user has navigated to rather than accumulating a block per level. The kicker names the parent
(their own desk on a client record, the client on a job record) and links back to it; the rows are
the siblings at the current level, with a count each, and the current one is the bold accent row.
One block, never two. This is a standing pattern, not per-screen decoration.

## What is fixed on every page
- Width 222px, ink (`--cannie-ink`), `position: sticky; top: 0; height: 100vh` at desktop; becomes a
  top strip below 960px.
- Lockup at the top. Main nav in this order: Jobs, Clients, Candidates, Timesheets, Invoices, Search.
  The active item is the section the current page belongs to (Jobs on a job record, Clients on a
  client record).
- User chip at the foot.

## What moves: the contextual block
| Page | Kicker (links back to) | Rows | Count on each row | Trailing link |
| --- | --- | --- | --- | --- |
| Overview / my desk | none | none | | |
| Clients list | My desk | none, the list is the page | | New client |
| Client record | My desk, jobs to fill | the desk's clients | jobs to fill | New client |
| Job record | {Client}, N to fill | that client's open jobs | live candidates | New job at {Client} |
| Candidate record (next) | the list it was opened from | siblings in that list | | |

Row styling: 14px, soft berry (`#E896B3`) and 600 for the current row, bone 85% otherwise, count in
12px at 65% opacity sitting tight to the name in a flex row (space-between), wrapping only when the
sidebar collapses. Six rows then "All N" if the sibling list is longer.
