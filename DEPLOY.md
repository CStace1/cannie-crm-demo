# Deploy note, final demo

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
