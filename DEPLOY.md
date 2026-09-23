# Deploy note, final demo

## Live

**https://cstace1.github.io/cannie-crm-demo/**

Published 23 September 2026 from `main`, tagged `demo-final-2026-09`.
Public, so anyone with the link can open it. `robots.txt` disallows
everything and the entry pages carry noindex, so it needs the link rather
than turning up in a search.

Two things a future publisher needs to know, both learned the hard way.

`.nojekyll` at the root is load bearing. GitHub Pages runs a Jekyll build
by default and Jekyll skips every directory whose name begins with an
underscore. The design system lives in `_ds`, so without that file every
page returns 200 and the whole site serves unstyled with no fonts and no
icons. Step 4 below catches it; do not skip step 4.

The sample data is checked for anything that could resolve to a real
company, person, domain, number or address before it goes anywhere public.
It has been wrong twice. See the commit history for what was found.

For whoever publishes this.

**What:** the Cannie recruitment CRM demo, static HTML. No build step, no server code, no secrets.

**Steps**
1. Copy the whole folder to the static host (GitHub Pages, Netlify, S3, IIS wwwroot, anything that serves files).
2. Set the entry to `Index.dc.html`. If the host wants `index.html`, add one that redirects there.
3. Keep the folder structure. `_ds/`, `support.js` and `ios-frame.jsx` must sit next to the pages.
4. Check three pages after upload: `Index.dc.html`, `Pipeline.dc.html`, `Client Record.dc.html`. If the fonts are missing, `_ds/` did not upload.

**Do not deploy** `archive/` if you want a clean public URL space. Nothing in the app links to it except the Standards page's note on bulk email and the Benchmark row for it.

**Version:** 2026-09-22. Delivery plan chunks 1 to 9 complete, plus Pipeline, My targets, Timesheets, Invoices, Benchmark, Mobile.

**Suggested commit**

    git init
    git add .
    git commit -m "Cannie CRM demo, final: pipeline board, filter bar, targets forecast, benchmark"
