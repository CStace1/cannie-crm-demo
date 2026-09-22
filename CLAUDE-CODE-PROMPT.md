# Claude Code prompt: commit, deploy and finish the Cannie CRM demo

Paste everything below this line into Claude Code, run from the unzipped project folder.

---

You are working in a static HTML prototype of a recruitment CRM called Cannie. There is no build step. Read `README.md` and `DEPLOY.md` first, then `CLAUDE.md` for the one standing UI rule. Do the following in order and stop to show me the result after step 3.

## 1. Put it in git

- `git init` if there is no repo. Add a `.gitignore` with `.DS_Store`, `node_modules/`, `.thumbnail`.
- Commit everything as `Cannie CRM demo, final: pipeline board, filter bar, targets forecast, benchmark`.
- Create a GitHub repo called `cannie-crm-demo` (private) with `gh repo create`, push `main`.

## 2. Deploy as the latest final demo

- Enable GitHub Pages on `main`, root folder. `index.html` already redirects to `Index.dc.html`.
- Wait for the Pages build, then fetch the live URL for `Index.dc.html`, `Pipeline.dc.html` and `Client Record.dc.html` and confirm each returns 200 and the page contains the string `Poppins`. If fonts or `_ds/` are missing, the folder did not upload whole; fix and redeploy.
- Tag the commit `demo-final-2026-09` and put the live URL at the top of `DEPLOY.md` under a `## Live` heading. Commit and push.

## 3. Smoke test in a real browser

Use Playwright (`npx playwright install chromium` if needed). For each of these pages, load it, wait for network idle, and fail on any console error:

Index, Overview, Pipeline, Job Board, Calendar, Activities, Recruiter, Timesheets, Invoices, Clients, Client Record, Job Record, `Job Record.dc.html?type=T%26M`, `Job Record.dc.html?type=SOW`, Candidates, Candidate Record, Contacts, Contact Record, New Client, Search, Recent, Standards, Benchmark, Mobile.

Then these interactions, each must leave no console error and produce the described change:

- Pipeline: drag the first card in Sent onto the Interview column; the move sheet opens; fill When with any text; click Move to Interview; a toast appears with Undo; click Undo; the card is back in Sent.
- Candidates: the duplicate banner shows; click Review merge; click Merge into one record; the banner is gone and there is one Priyanka Rao row.
- Candidates: click the Skills filter pill; tick Go; the result line count drops; click the Candidate column header twice; the first row changes between the clicks.
- Job board: type `Amara` in the candidate lookup and pick her; the sort label reads Best fit for Amara.
- Recruiter: drag the Interview to Offer slider; the forecast figure changes; click Show the working; a table appears.
- Clients: switch to Prospects view, click Kanban; four stage columns show.

Print a table of page, pass or fail, and any console error text. Do not fix design; only fix broken links, missing files or JavaScript errors, and tell me what you changed.

## 4. Finish the backlog, one commit each, in this order

Read `docs/BACKLOG.md` and `docs/Backlog.dc.html` for the full list. These are the ones to do now. Follow the house rules in every screen: inline styles only, the six brand colours, Poppins, sentence case, no em dashes, no emoji, left aligned, one accent per background, the sidebar contextual block moves with the level (see `CLAUDE.md`). Copy the sidebar markup from `Pipeline.dc.html` when a new page needs one, and add the new page to every existing sidebar in the same position.

1. **Bulk email, real page.** Move `archive/Bulk Email.dc.html` to the root, repoint its paths, wire it from Candidates (Send to these) and Contacts (Send to these) using the current filter result as the recipient list. Consent rule: anyone opted out cannot be ticked. Add a Sent log row to `Activities.dc.html`.
2. **Reporting page** `Reports.dc.html` for a manager: the same forecast and funnel as `Recruiter.dc.html` but for the whole desk with a recruiter picker (use `Lookup.dc.html`), plus placements by client and fee by month as simple bars. No charting library; bars are divs. Put it in the sidebar under My targets as Reports.
3. **GDPR retention** on Candidate Record and Contact Record: a Consent and retention block showing lawful basis, consent date, review date, and a Delete or anonymise action behind a confirm dialog that explains what is kept (placements and invoices) and what goes.
4. **Real Outlook sync** stays mocked, but make the sync chip on every top bar read from one shared `sync.js` module so the state is consistent across pages.
5. **Persist demo state** for pipeline moves, merges and Job Record stage changes in local storage the same way Timesheets and Invoices already do, with a Reset demo link on `Index.dc.html` that clears only the `cannie.*` keys.

After each item: run the smoke test from step 3 again, commit, push. When all five are done, update `Benchmark.dc.html` scores for Email and bulk send, Reporting and Compliance to reflect what is now built, update the Behind list, and redeploy.

## Rules

- Never edit `support.js` or anything under `_ds/`.
- Keep every `.dc.html` opening directly in a browser; no bundler, no framework imports.
- Ask me before deleting anything outside `archive/`.
- If a step is ambiguous, pick the simplest reading and note it in the commit message.
