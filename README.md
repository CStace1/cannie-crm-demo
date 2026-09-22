# Cannie recruitment CRM, demo

A clickable prototype of a recruiter's desk: Overview, Pipeline, Job board, Calendar, Activities, My targets, Timesheets, Invoices, and full records for clients, jobs, candidates and contacts. Signed in as Priya Shah. All data is sample data.

## Run it

Static files, no build. Serve the folder over HTTP and open `Index.dc.html`.

    npx serve .
    # or
    python3 -m http.server 8080

Opening the files directly from disk (file://) will not work: the pages fetch each other and the design system.

## What is where

- `Index.dc.html`: demo home and five minute walk-through.
- `*.dc.html` at the root: one file per screen. Each is self-describing and links to the others.
- `FilterBar.dc.html`, `Lookup.dc.html`: shared pieces (one filter bar for every list; search-or-create picker for people).
- `support.js`: the page runtime. Do not edit.
- `_ds/`: the Cannie design system (tokens, fonts, component bundle).
- `ios-frame.jsx`: phone bezel used by `Mobile.dc.html`.
- `docs/`: delivery plan and backlog, both as pages and markdown.
- `archive/`: earlier versions kept for reference. Not linked from the app.

## Demo notes

- New prospects, saved pools, timesheet approvals and invoice status changes are kept in the browser's local storage only. Clear site data to reset.
- Job Record accepts `?type=T%26M` and `?type=SOW` to show the contract and statement of work variants.
- Outlook sync, bulk email and creating a person from a picker are simulated.

## Benchmark

`Benchmark.dc.html` scores the demo against Bullhorn, Vincere and JobAdder across fourteen areas, with method and caveats.
