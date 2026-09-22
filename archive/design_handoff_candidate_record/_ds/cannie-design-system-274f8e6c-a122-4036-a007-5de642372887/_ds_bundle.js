/* @ds-bundle: {"format":4,"namespace":"CannieDesignSystem_274f8e","components":[{"name":"AppIcon","sourcePath":"components/brand/AppIcon.jsx"},{"name":"CalloutBox","sourcePath":"components/brand/CalloutBox.jsx"},{"name":"IsIsNotPair","sourcePath":"components/brand/IsIsNotPair.jsx"},{"name":"KickerBlock","sourcePath":"components/brand/KickerBlock.jsx"},{"name":"Lockup","sourcePath":"components/brand/Lockup.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"client-decks/roles-and-responsibilities/deck-stage.js":"f3d3d0a662c0","components/brand/AppIcon.jsx":"2a84a8c41c72","components/brand/CalloutBox.jsx":"319c5bf1d28e","components/brand/IsIsNotPair.jsx":"33c2f2730e13","components/brand/KickerBlock.jsx":"9b8062f52408","components/brand/Lockup.jsx":"ccadf05299f0","components/core/Badge.jsx":"6136e2848007","components/core/Button.jsx":"a5079825ca39","components/core/Card.jsx":"334f9ac7b30c","components/core/Icon.jsx":"5d6f034c4d54","components/core/IconButton.jsx":"d38be2c033a3","components/core/Tag.jsx":"3dd8e9735493","components/feedback/Dialog.jsx":"b898efe23cce","components/feedback/Toast.jsx":"7098d5dd226e","components/feedback/Tooltip.jsx":"014b65c9e914","components/forms/Checkbox.jsx":"f3f4fc3e89da","components/forms/Input.jsx":"6f3ac077309a","components/forms/Radio.jsx":"81ef84cafe8c","components/forms/Select.jsx":"c79a53d84b6c","components/forms/Switch.jsx":"36f1ec3b0f91","components/navigation/Tabs.jsx":"707b15b61c97","slides/slides.jsx":"7527b356f19d","ui_kits/cannie-app/AppShell.jsx":"48f24f2c53bd","ui_kits/cannie-app/CandidateScreen.jsx":"0cd72469f831","ui_kits/cannie-app/ClientPanel.jsx":"52d8bc9e8f9a","ui_kits/cannie-app/DashboardScreen.jsx":"47ce592996d1","ui_kits/cannie-app/LoginScreen.jsx":"c3167ab517c4","ui_kits/cannie-app/PipelineScreen.jsx":"7c941e273c7b","ui_kits/cannie-app/SearchScreen.jsx":"6d28c73a0f30","ui_kits/cannie-app/SettingsScreen.jsx":"7849ddc03ed0","ui_kits/cannie-app/app.jsx":"1931fa57e4ad","ui_kits/cannie-app/dashboard-data.js":"177c5f0b7230","ui_kits/cannie-app/data.js":"7015da51c76a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CannieDesignSystem_274f8e = window.CannieDesignSystem_274f8e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// client-decks/roles-and-responsibilities/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→ and ↑/↓, PgUp/PgDn, Space, Home/End,
 *      number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on
 *      idle; hovering or focusing its controls pins it visible until the
 *      pointer/focus leaves. While presenting it is pointer-summoned only:
 *      mouse movement (or hover/focus) shows it, slide changes never do.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate — the clicked slide becomes the
 *      selected (highlighted) slide; shift-click selects a range and
 *      cmd/ctrl-click toggles slides in and out of the selection
 *      (Escape collapses it back to the current slide); ↑/↓ with a
 *      thumbnail focused to step between slides; Delete/Backspace with a
 *      thumbnail focused to delete the selection (one confirm dialog,
 *      one undoable operation); drag to reorder (dragging collapses a
 *      multi-selection); right-click for
 *      Skip / Move up / Move down / Duplicate / Delete — over a
 *      multi-selection the menu offers "Delete N slides". Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      They also carry no rail number and are excluded from the overlay's
 *      slide count: the remaining slides are numbered contiguously
 *      (Keynote-style), and a skipped CURRENT slide (reachable by rail
 *      click or deep link, never by prev/next) shows '–' as its position.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *  (h) typographic defaults — a zero-specificity stylesheet injected into
 *      the document gives headings `text-wrap: balance` and body text
 *      (p, li, blockquote, figcaption) `text-wrap: pretty`, so slides
 *      avoid widowed/orphaned words by default. Any text-wrap declaration
 *      you author on those elements wins over these defaults.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
      /* Slide edge on the black stage. Dark decks override the canvas
       * fill toward the stage's own black, leaving nothing to mark where
       * the slide ends — the faint white ring keeps the boundary legible
       * there while disappearing into the white of light decks. A
       * box-shadow, not outline/border: it follows any canvas rounding
       * and adds no layout size. */
      box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.12);
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-selected] .num { color: #fff; }
    .thumb[data-selected] .frame {
      outline-color: rgba(217,119,87,0.65);
      box-shadow: 0 0 0 4px rgba(217,119,87,0.18);
    }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame {
      outline-color: #D97757;
      box-shadow: 0 0 0 4px rgba(217,119,87,0.25);
    }
    /* While dragging, the thumb itself is the drag visual (the native drag
       image is suppressed in dragstart so the snapshot can't wander off the
       rail horizontally): elevate it rather than dim it, and let hit-testing
       ignore it so dragover reaches the sibling thumb under the pointer
       instead of the moving element itself. */
    .thumb[data-dragging] { opacity: 0.9; z-index: 30; pointer-events: none; }
    .thumb[data-dragging] .frame {
      outline-color: rgba(255,255,255,0.5);
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
    }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        /* Size containment: slotted content that overflows the design box
         * (an image-slot's aspect-ratio-derived width, say) must not count
         * toward Chromium's print document width — without this, an
         * abs-positioned child past the page edge shrinks the whole PDF
         * to fit (~75%). Containment is safe here because the definite
         * width/height above size the slide regardless of content.
         * (Absorbed from PR #2619 with its owner's agreement.) */
        contain: size !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      // Explicit multi-selection (slide elements). Empty means the
      // selection is implicitly the current slide, so Delete always has
      // a well-defined target while the rail has focus.
      this._selected = new Set();
      this._selAnchor = null;
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      // Overlay pinning: while the pointer is over the controls toolbar or
      // a control has keyboard focus, the idle-hide timeout must not
      // dismiss it (a pointer parked ON the controls doesn't generate
      // mousemove, so without the pin the toolbar vanishes under the
      // user's cursor after OVERLAY_HIDE_MS). Read by _flashOverlay's
      // hide timeout; cleared by mouseleave/focusout, which resume the
      // normal idle fade.
      this._overlayHover = false;
      this._overlayFocus = false;
      // Capability marker for the host's injected guest bundle. Copies
      // WITHOUT _navArrowsUpDown are frozen per-project builds that
      // predate native ArrowUp/ArrowDown slide nav — the bundle translates
      // Up/Down to Right/Left for those (installDeckArrowKeyTranslator in
      // apps/web/src/guest/edit-mode.ts) and must stand down here or every
      // press would advance twice. A marker, not a version number, so a
      // future capability can add its own independent probe.
      this._navArrowsUpDown = true;
      // Same contract for rail Delete/Backspace: copies WITHOUT
      // _railDeleteKey predate the thumbs' own Delete/Backspace binding,
      // and the bundle opens the delete confirm for them
      // (installDeckRailDeleteFallback in apps/web/src/guest/edit-mode.ts).
      // Current builds consume the key at the thumb (stopPropagation), so
      // the marker is belt-and-braces — it keeps the fallback standing
      // down even if a future build lets the key bubble past the thumb.
      this._railDeleteKey = true;
      // Same contract for skip-aware numbering: copies WITHOUT
      // _railSkipNumbers number every thumb 1..N and count skipped slides
      // in the overlay total — the bundle rewrites both for those
      // (installDeckSkipNumberingFallback in apps/web/src/guest/edit-mode.ts).
      // Here the component renumbers natively, so the fallback stands down.
      this._railSkipNumbers = true;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      this._ensurePrintSizingMeta();
      this._ensureTextWrapDefaults();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        // Self-heal: a departed doc-page may have removed the page-global
        // print-sizing meta this deck deferred to at connect time.
        this._ensurePrintSizingMeta();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (three per view — cur/prev/next).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast. Also ignore data-dc-tpl /
      // data-om-slide-id — host-reserved bookkeeping stamps (the host's
      // ATTR_RESERVED guard bounds them the same way) that structural
      // edits renumber/re-mint on slides whose content didn't change;
      // re-cloning on that churn is what made a slide move flash its
      // thumbnails.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-(validate|slide-id)$|dc-tpl$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            this._renumberRail();
            this._syncCount();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      // Stylesheets that finish loading AFTER the snapshot below never
      // reach the thumbs on their own: a still-pending <link> contributes
      // nothing to document.styleSheets, and nothing re-reads it on load,
      // so the live slides restyle while every clone keeps the stale
      // sheet. dc-runtime's helmet mounts design-system <link>s at render
      // time, so a deck-stage that connects first snapshots before that
      // CSS exists. Funnel late arrivals into the same debounced resync:
      // hook load/error on every current <link>, and watch <head> for
      // links and styles mounted or rewritten later. Deliberately not
      // rAF- or fonts.ready-driven — rAF is throttled/suspended in hidden
      // iframes (thumbnail/presenter contexts), and a font-file load
      // doesn't change cssRules, so it needs no resync.
      this._hookedLinks = [];
      this._hookSheetLoad = el => {
        if (!el.matches || !el.matches('link[rel~="stylesheet" i]')) return;
        if (this._hookedLinks.indexOf(el) !== -1) return;
        this._hookedLinks.push(el);
        el.addEventListener('load', this._onTweakChange);
        el.addEventListener('error', this._onTweakChange);
      };
      document.querySelectorAll('link[rel~="stylesheet" i]').forEach(this._hookSheetLoad);
      this._headObserver = new MutationObserver(records => {
        let resync = false;
        for (const r of records) {
          if (r.type === 'characterData') {
            // Only <style> text is CSS — a ticking <title> shouldn't
            // wake the resync forever.
            const p = r.target.parentNode;
            if (p && p.nodeName === 'STYLE') resync = true;
            continue;
          }
          if (r.type === 'attributes') {
            // A late rel/href rewrite turns an inert <link> into a
            // stylesheet (hook it; its load fires even on cache hits);
            // a media/disabled flip changes effective rules with no
            // event. Resync only if this link is or ever was a
            // stylesheet — favicon/preload/canonical href churn isn't
            // a resync.
            if (r.target.nodeName === 'LINK') {
              this._hookSheetLoad(r.target);
              if (this._hookedLinks.indexOf(r.target) !== -1) resync = true;
            } else if (r.target.nodeName === 'STYLE') resync = true;
            continue;
          }
          // childList: only links and styles carry CSS. A new <link> has
          // no rules until it loads — hook it rather than resync now; a
          // <style> mount/unmount or text-node swap takes effect
          // immediately. _freezeStyle (our beforeprint helper) is skipped
          // on add only — no removal-side guard: _onAfterPrint nulls the
          // ref before the observer fires, so that check would be dead;
          // the one debounced no-op resync per print is harmless.
          if (r.target.nodeName === 'STYLE') resync = true;
          for (const n of r.addedNodes) {
            if (n.nodeName === 'LINK') this._hookSheetLoad(n);else if (n.nodeName === 'STYLE' && n !== this._freezeStyle) resync = true;
          }
          for (const n of r.removedNodes) {
            if (n.nodeName === 'LINK') {
              const hi = this._hookedLinks.indexOf(n);
              if (hi !== -1) {
                this._hookedLinks.splice(hi, 1);
                n.removeEventListener('load', this._onTweakChange);
                n.removeEventListener('error', this._onTweakChange);
                resync = true;
              }
            } else if (n.nodeName === 'STYLE') resync = true;
          }
        }
        if (resync) this._onTweakChange();
      });
      this._headObserver.observe(document.head, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['rel', 'href', 'media', 'disabled']
      });
      this._snapshotAuthorCss();
      // Re-snapshot once any still-loading stylesheet settles — it throws on
      // .cssRules above and silently contributes '' → unstyled thumbs on a
      // cold mount. {once:true}; routed through the debounced handler.
      document.querySelectorAll('link[rel~="stylesheet"]').forEach(l => {
        try {
          if (l.sheet && l.sheet.cssRules) return;
        } catch (e) {}
        l.addEventListener('load', this._onTweakChange, {
          once: true
        });
        l.addEventListener('error', this._onTweakChange, {
          once: true
        });
      });
      if (document.fonts) document.fonts.ready.then(this._onTweakChange, this._onTweakChange);
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      // A disconnect mid-drag never gets a dragend, so the document-level
      // drag tracker must be torn down here like every other global hook.
      this._stopDragTrack();
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._headObserver) this._headObserver.disconnect();
      (this._hookedLinks || []).forEach(l => {
        l.removeEventListener('load', this._onTweakChange);
        l.removeEventListener('error', this._onTweakChange);
      });
      this._hookedLinks = [];
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
      // Drop the text-wrap defaults when the last deck-stage leaves, so a
      // deleted deck's typography can't restyle whatever replaces it.
      // (#deck-stage-print-page keeps its existing keep-forever lifecycle.)
      if (!document.querySelector('deck-stage')) {
        const tw = document.getElementById('deck-stage-text-wrap');
        if (tw) tw.remove();
        const ps = document.getElementById('deck-stage-print-sizing');
        if (ps) ps.remove();
      }
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Pin the controls while the user is interacting with them —
      // hovering, or keyboard focus on a control. The hidden overlay is
      // pointer-events:none, so these only ever engage while it's already
      // visible. 'pointer' source: these are user-interaction paths, so
      // they may show/refresh the overlay even while presenting (see
      // _flashOverlay).
      overlay.addEventListener('mouseenter', () => {
        this._overlayHover = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('mouseleave', () => {
        const hadPin = this._overlayHover;
        this._overlayHover = false;
        // Resume the idle fade — never summon. Without the guard, a
        // mouseleave that fires because the overlay was force-hidden
        // (presenting entry flips it to pointer-events:none under the
        // cursor) would pop the controls right back up.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusin', e => {
        // Keyboard-origin focus only (:focus-visible): a mouse click also
        // focuses the clicked button, and pinning on that would hold the
        // controls open indefinitely after a single click — the hover pin
        // already covers the mouse case. Engines without :focus-visible
        // fall back to pinning on any focus (the safe direction).
        var kb = true;
        try {
          var t = e.target;
          kb = !(t && t.matches && !t.matches(':focus-visible'));
        } catch (err) {
          kb = true;
        }
        if (!kb) return;
        this._overlayFocus = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusout', e => {
        // Only unpin when focus truly left the toolbar — tabbing between
        // its buttons stays pinned. relatedTarget is null when focus
        // leaves the document entirely; treat that as leaving.
        if (e.relatedTarget && overlay.contains(e.relatedTarget)) return;
        const hadPin = this._overlayFocus;
        this._overlayFocus = false;
        // Resume-the-fade only (see mouseleave): a click-focused button
        // losing focus to a later stage click must not summon the
        // controls mid-presentation.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        const list = this._menuIndices;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(list && list.length ? list : [i]);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) {
          this._closeConfirm();
          this._focusCurrentThumb();
        }
      });
      confirm.querySelector('.cancel').addEventListener('click', () => {
        this._closeConfirm();
        this._focusCurrentThumb();
      });
      confirm.querySelector('.danger').addEventListener('click', () => {
        // Re-resolve at click time — the elements are the user's actual
        // selection; their indices may have shifted since confirm-open.
        const list = (this._confirmEls || []).map(el => this._slides.indexOf(el)).filter(i => i >= 0);
        this._closeConfirm();
        this._deleteSlides(list);
        this._focusCurrentThumb();
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Announces the deck's print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] content "default-landscape" — a
     *  deck prints one slide per page on the user's paper size, landscape.
     *  The export path probes the meta to decide what true paper size to
     *  inject at print time (the @page px rule above stays as the
     *  standalone-print fallback; an injected later rule overrides it).
     *  Never overrides an authored meta or another component's; removed
     *  when the last deck-stage leaves. data-omelette-injected keeps it
     *  out of serialized source. */
    _ensurePrintSizingMeta() {
      if (document.querySelector('meta[name="omelette-print-sizing"]')) return;
      const tag = document.createElement('meta');
      tag.id = 'deck-stage-print-sizing';
      tag.name = 'omelette-print-sizing';
      tag.content = 'default-landscape';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** Typographic defaults for slide text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins. Lives in the document,
     *  not the shadow root, for two reasons: document rules reach the
     *  slotted (light DOM) slides, and _snapshotAuthorCss copies document
     *  stylesheets into each thumbnail's shadow root, so the thumbs wrap
     *  the same way — a deck-stage-scoped selector would match nothing
     *  there. data-omelette-injected marks the tag for the host editor
     *  to strip at serialize, so it is never written back as authored
     *  source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('deck-stage-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'deck-stage-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
      // The deck just changed under any open rail surface — an open
      // confirm or menu is a question about the OLD deck (its labels and
      // counts may now lie), so close them rather than let a stale
      // answer fire. The element-held selection re-resolves, but the
      // user should re-read what they're deleting.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        this._closeConfirm();
        // The dialog held focus (danger button); hand it back to the rail.
        this._focusCurrentThumb(true);
      }
      if (this._menu && this._menu.hasAttribute('data-open')) this._closeMenu();
      // Editor-mode deletes rebuild the rail through here; a confirmed
      // delete that started from the keyboard still owes focus to the
      // (new) current thumb.
      if (this._pendingRailRefocus) this._focusCurrentThumb(true);
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      // Selection is element-keyed: drop entries whose slide is gone
      // (deleted, or replaced wholesale by a host re-render).
      if (this._selected && this._selected.size) {
        this._selected.forEach(s => {
          if (!this._slideSet.has(s)) this._selected.delete(s);
        });
      }
      if (this._selAnchor && !this._slideSet.has(this._selAnchor)) this._selAnchor = null;
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._syncCount();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      this._syncCount();
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay(source) {
      // Host posts __omelette_presenting while in fullscreen/tab
      // presentation mode. While presenting, the overlay is
      // pointer-summoned only: it appears on mouse movement and while the
      // user hovers/focuses the controls (source 'pointer'), but never
      // flashes on slide changes or nav-key presses (the default 'auto'
      // source) — a keyboard-driven advance must not blink chrome at the
      // audience. Outside presenting, both sources flash as before.
      if (!this._overlay) return;
      if (this._presenting && source !== 'pointer') return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        // Pinned by hover or focus on the controls — keep them up. The
        // matching mouseleave/focusout re-flashes, so the idle fade
        // resumes from that moment.
        if (this._overlayHover || this._overlayFocus) return;
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle. 'pointer'
      // source: mouse movement summons the controls even while presenting.
      this._flashOverlay('pointer');
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        // Unchanged value → idempotent re-delivery (the guest bundle
        // re-posts when a deck mounts mid-presentation, and host + bundle
        // can both deliver at entry). Skip the resets: re-running the
        // entry work on every delivery would dismiss the pointer-summoned
        // overlay under a hovering cursor and close menus on every slide
        // change. Mirrors the preview_mode branch's unchanged-value guard
        // below.
        if (d.__omelette_presenting !== !!this._presenting) {
          this._presenting = d.__omelette_presenting;
          // A presenting transition invalidates interaction pins: carried
          // across the flip, a stale pin would hold the first summoned
          // overlay open with no pointer anywhere near it. Hide on BOTH
          // transitions: entry cleans the audience's screen, and on exit a
          // pin-skipped hide timeout may have left data-visible set with
          // no timer armed — without this, the footer would linger in the
          // editor until the next mousemove. The next interaction
          // re-summons it either way.
          this._overlayHover = false;
          this._overlayFocus = false;
          if (this._overlay) {
            this._overlay.removeAttribute('data-visible');
            if (this._hideTimer) clearTimeout(this._hideTimer);
          }
          this._syncRailHidden();
          this._closeMenu();
          this._closeConfirm();
          this._fit();
          this._scaleThumbs();
        }
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
        // A refused op never re-renders, so slotchange won't restore the
        // keyboard flow's focus — do it here. (Applied ops refocus in
        // _onSlotChange, after the rail has been rebuilt.)
        if (d.applied === false && this._pendingRailRefocus) {
          this._focusCurrentThumb(true);
        }
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing. composedPath()[0], not e.target: a
      // window-level keydown retargets e.target to the shadow host, which
      // would miss an <input> or contenteditable inside a web component on
      // a slide (same reason _onTap uses composedPath).
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          this._focusCurrentThumb();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape' && this._selected.size) {
        // Collapse the multi-selection back to the current slide (the
        // implicit selection), not to nothing.
        this._clearSelection();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'ArrowDown' && !e.defaultPrevented) {
        // ↓/↑ page slides like →/← (Keynote/PowerPoint parity). Window
        // level only: rail thumbs keep their own ↑/↓ walk (their handler
        // stops propagation before this one), and the typing guard above
        // already covers inputs and contenteditable slide content.
        // Deliberate tradeoff: like Space/PageDown before them, these are
        // scroll keys — slide content that wants keyboard scrolling claims
        // them with preventDefault, which this branch honors (checked here
        // and not for the long-standing keys above, so ←/→/Space behavior
        // is unchanged and ↑/↓ behave identically on frozen copies, whose
        // translator in the guest bundle applies the same guard).
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowUp' && !e.defaultPrevented) {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      // User-initiated navigation collapses a multi-selection down to
      // the (implicit) current slide, like Keynote's arrow keys. 'click'
      // handles its own selection; programmatic reasons leave it alone.
      if (reason === 'keyboard' || reason === 'tap') this._clearSelection();
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
      this._thumbs = next;
      this._renumberRail();
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          // The live-dragged thumb is positioned by the drag tracker; a
          // FLIP transform+transition here would clobber it mid-drag.
          if (thumb === this._dragThumb) return;
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', e => {
        const i = idx();
        const slide = this._slides[i];
        // WebKit doesn't focus a plain element on click — focus
        // explicitly so Delete/Backspace works right after selecting a
        // slide by mouse. preventScroll: _syncRail owns the rail's
        // scroll position.
        thumb.focus({
          preventScroll: true
        });
        if (e.shiftKey || e.metaKey || e.ctrlKey) {
          // Multi-select gestures adjust the selection without
          // navigating (Keynote/Figma convention).
          e.preventDefault();
          if (e.shiftKey) {
            // Range from the anchor (last plain/cmd-clicked slide;
            // falls back to the current slide) to here, replacing any
            // previous range.
            let a = this._selAnchor ? this._slides.indexOf(this._selAnchor) : -1;
            if (a < 0) {
              a = this._index;
              this._selAnchor = this._slides[a] || null;
            }
            this._selected.clear();
            for (let j = Math.min(a, i); j <= Math.max(a, i); j++) {
              this._selected.add(this._slides[j]);
            }
          } else if (slide) {
            // Toggle. An empty explicit selection implicitly holds the
            // current slide — materialize it first so cmd-clicking a
            // second slide selects both.
            if (!this._selected.size && i !== this._index && this._slides[this._index]) {
              this._selected.add(this._slides[this._index]);
            }
            if (this._selected.has(slide)) this._selected.delete(slide);else {
              this._selected.add(slide);
              this._selAnchor = slide;
            }
          }
          this._syncSelection();
          return;
        }
        this._clearSelection();
        this._selAnchor = slide || null;
        this._go(i, 'click');
      });
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        // Delete/Backspace with the rail focused deletes this thumb's
        // slide through the same confirm dialog as the menu item.
        // Listening on the thumb (never window-level) is what keeps
        // typing in the notes panel / slide inputs from ever landing
        // here; the target check is belt-and-braces for anything
        // focusable that ends up inside a thumb.
        if ((e.key === 'Delete' || e.key === 'Backspace') && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const t = e.target;
          if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
          e.preventDefault();
          e.stopPropagation();
          // Same refusals as the menu item: never every slide, never
          // while a prior structural op is waiting on its ack. The
          // whole-deck refusal is announced (the menu greys its item
          // out; a silently dead key reads as breakage). The rail-lock
          // refusal stays silent: it lasts one ack round-trip and
          // matches the existing single-delete behavior.
          if (this._railLock) return;
          // Explicit selection wins; otherwise the focused thumb (which
          // plain click and ↑/↓ keep equal to the current slide).
          const sel = this._selected.size ? this._selectionIndices() : [idx()];
          if (sel.length >= this._slides.length) {
            this._showNotice(sel.length === 1 ? 'The last slide can’t be deleted.' : 'At least one slide has to stay — the whole deck can’t be deleted.');
            return;
          }
          this._openConfirm(sel);
          return;
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        // v1: dragging moves ONE slide, so a multi-selection would lie
        // about what's about to move — collapse it. (Group drag would
        // instead keep it and emit a batched move.)
        this._clearSelection();
        this._dragFrom = idx();
        // Deferred to the next frame: the [data-dragging] rule sets
        // pointer-events:none on the drag SOURCE, and applying that
        // synchronously inside dragstart makes Chromium (and WebKit) cancel
        // the drag — dragstart then an immediate dragend, no dragover or
        // drop, so thumbnails could not be reordered by dragging at all.
        // One frame is invisible and lands before the first dragover needs
        // the source to be hit-test-transparent. Guarded twice so the
        // attribute can never strand on a thumb that is no longer being
        // dragged (pointer-events:none would leave it unclickable for the
        // session): the pending frame is cancelled in dragend
        // (_cancelDragAttr), and the callback itself re-checks that THIS
        // thumb is still the live drag source (a new drag on another thumb
        // re-points the drag state). Deliberately NOT cancelled in
        // _stopDragTrack — _startDragTrack calls it at the start of every
        // drag, which would kill the mark this dragstart just scheduled
        // (see _cancelDragAttr).
        this._dragAttrRaf = requestAnimationFrame(() => {
          this._dragAttrRaf = null;
          if (this._dragFrom != null && this._dragThumb === thumb) {
            thumb.setAttribute('data-dragging', '');
          }
        });
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
        // Constrain the drag visual to the rail's vertical axis. The
        // browser's default drag image is a free-floating snapshot that
        // follows the OS cursor in BOTH axes and the DnD API offers no way
        // to constrain it — so swap it for a transparent stand-in and move
        // the thumb itself along Y instead (_startDragTrack). The drop
        // logic below always read only clientY; this makes the visual
        // match it.
        try {
          e.dataTransfer.setDragImage(this._dragBlank(), 0, 0);
        } catch (err) {}
        this._startDragTrack(thumb, e.clientY);
      });
      thumb.addEventListener('dragend', () => {
        this._cancelDragAttr();
        thumb.removeAttribute('data-dragging');
        this._stopDragTrack();
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      // The clone participates in the document's flat tree, so the
      // templates' position-based CSS page counters (.slide
      // { counter-increment: page }) would count every materialized
      // thumb before the real slides — folios print offset by the
      // thumb count (slide 2 reading "7" on a five-slide deck).
      // Neutralize the counter on the clone and drop its folio pill:
      // a thumbnail's own page number is unreadable at thumb scale
      // anyway, and the real slides' numbers stay truthful.
      clone.style.counterIncrement = 'none';
      clone.querySelectorAll('.page-foot').forEach(pf => pf.remove());
      // Canvas bitmaps don't clone — swap each cloned canvas for an <img>
      // of the live pixels. Best-effort: tainted canvases throw (left
      // as-is); zero-size are skipped; WebGL without preserveDrawingBuffer
      // reads back blank and the thumb gets a blank img (same as before).
      const liveCanvases = entry.slide.querySelectorAll('canvas');
      const cloneCanvases = clone.querySelectorAll('canvas');
      cloneCanvases.forEach((cv, i) => {
        const live = liveCanvases[i];
        if (!live || !live.width || !live.height) return;
        try {
          const img = document.createElement('img');
          img.src = live.toDataURL();
          img.alt = '';
          img.style.cssText = cv.style.cssText;
          img.className = cv.className;
          img.width = live.width;
          img.height = live.height;
          // Author CSS that sized the <canvas> via tag selector won't match
          // the <img> — pin the live canvas's laid-out box on the snapshot.
          if (live.clientWidth) {
            img.style.width = live.clientWidth + 'px';
            img.style.height = live.clientHeight + 'px';
          }
          cv.replaceWith(img);
        } catch (e) {}
      });
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      // Parity with _inertify: transient top-layer UI never belongs in a
      // static thumb.
      clone.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes (_neuter) so a component-heavy deck doesn't run
      // N copies of each component's mount logic in the rail. Children
      // are preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content, and a shadow tree cloned along
      // via attachShadow({clonable:true}) (e.g. <image-slot>) moves onto
      // the box so the thumb shows the component's rendered content. The
      // querySelectorAll NodeList is static, so nested custom elements in
      // the moved subtree are still visited on later iterations.
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = this._neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
      // Strip ids only now: a defined custom element upgrades synchronously
      // during cloneNode and re-renders on attribute callbacks, so removing
      // 'id' any earlier resets components (e.g. <image-slot> falls back to
      // its author src). Post-neuter, only inert boxes and plain elements
      // remain, where the strip is just the usual duplicate-id hygiene.
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      // Clones are display-only: inert removes anything focusable inside
      // them from the tab order, so the rail's Delete/Backspace handler
      // can never see a (retargeted) key press from cloned content.
      host.inert = true;
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Replace a cloned custom element with an inert box (see the comment
     *  in _materialize). A shadow tree cloned along via {clonable:true}
     *  moves onto the box, so the thumb shows the component's real content
     *  with zero component logic; :host rules in the moved <style> match
     *  the box, and the preserved data-* attrs keep :host([data-…])
     *  selectors working. */
    _neuter(el) {
      // Adopt the shadow only when the cloned root carries renderable
      // content. A constructor-attach / connectedCallback-render component
      // clones into an empty (or style-only) slotless root — adopting that
      // would hide the light children the box is about to receive and drop
      // the placeholder chrome. Such components fall back to the plain box.
      let sr = el.shadowRoot;
      if (sr) {
        let renderable = false;
        for (let n = sr.firstElementChild; n; n = n.nextElementSibling) {
          const t = n.tagName;
          if (t !== 'STYLE' && t !== 'LINK') {
            renderable = true;
            break;
          }
        }
        if (!renderable) sr = null;
      }
      const box = document.createElement('div');
      box.style.cssText = (el.getAttribute('style') || '') + (sr ? '' : ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);');
      box.className = el.className;
      // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
      // descendant selectors still match the neutered root — but not
      // pointer-interaction transients (a mid-reframe/mid-drag re-clone
      // would render the interaction chrome statically in the thumb).
      for (const a of el.attributes) {
        const n = a.name;
        if (n === 'data-reframe' || n === 'data-panning' || n === 'data-over') continue;
        if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
          box.setAttribute(n, a.value);
        }
      }
      while (el.firstChild) box.appendChild(el.firstChild);
      if (sr) this._adoptShadow(box, sr);
      return box;
    }

    /** Move a cloned shadow tree onto a neutered thumbnail box: attach an
     *  open root on the box, carry adoptedStyleSheets, move the children,
     *  then make the content inert. */
    _adoptShadow(box, sr) {
      let root;
      try {
        root = box.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      // Engine-cloned shadow roots never carry adoptedStyleSheets, but a
      // defined component's clone is upgrade-rebuilt (constructor runs
      // during cloneNode), so sheets it adopts there are present and
      // shared by reference — carry them.
      if (sr.adoptedStyleSheets && sr.adoptedStyleSheets.length) {
        try {
          root.adoptedStyleSheets = Array.prototype.slice.call(sr.adoptedStyleSheets);
        } catch (e) {}
      }
      // Clone rather than move: moving preserves listeners an upgraded
      // clone's constructor attached inside its shadow; cloning sheds
      // them, keeping thumbs free of component logic categorically.
      for (let n = sr.firstChild; n; n = n.nextSibling) {
        root.appendChild(n.cloneNode(true));
      }
      this._inertify(root);
    }

    /** Strip anything executable from copied shadow content and apply the
     *  same custom-element/media/img policy as the light-DOM clone.
     *  (Canvases inside copied shadow content stay blank — there is no
     *  live↔clone pairing across shadow boundaries to snapshot from.) */
    _inertify(root) {
      root.querySelectorAll('script').forEach(s => s.remove());
      // Transient top-layer UI can never belong in a static thumb. (A
      // cloned [popover] is display:none anyway — open state doesn't
      // clone — this just makes it categorical.)
      root.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      // Same heavy-media policy as the light-DOM clone above.
      root.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      root.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      root.querySelectorAll('*').forEach(el => {
        for (let i = el.attributes.length - 1; i >= 0; i--) {
          if (/^on/i.test(el.attributes[i].name)) {
            el.removeAttribute(el.attributes[i].name);
          }
        }
      });
      root.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Nested custom elements inside copied shadow content would upgrade
      // on append — same treatment as the light DOM. querySelectorAll is
      // static, so boxes created mid-walk don't re-enter this loop.
      root.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }

    /** 1×1 transparent stand-in for setDragImage. Kept attached (offscreen
     *  in the shadow root) because some engines ignore a drag image that
     *  isn't in a rendered tree. Created lazily, reused for every drag. */
    _dragBlank() {
      if (!this._dragBlankEl) {
        const c = document.createElement('canvas');
        c.width = 1;
        c.height = 1;
        c.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;';
        this._root.appendChild(c);
        this._dragBlankEl = c;
      }
      return this._dragBlankEl;
    }

    /** Vertical-only drag tracking: translate the dragged thumb along Y to
     *  follow the pointer, clamped to the rail, ignoring X entirely. A
     *  document-level capture listener is used because native dragover
     *  fires wherever the pointer is — so the thumb keeps tracking even
     *  while the pointer wanders over the stage — and it is removed the
     *  moment the drag ends. getBoundingClientRect already reflects the
     *  current transform, so the layout position is recovered by
     *  subtracting the translation applied so far (rail auto-scroll moves
     *  the layout position mid-drag; see the rail dragover handler). */
    _startDragTrack(thumb, startY) {
      // A lost dragend (the dragged thumb removed mid-drag by a remote
      // edit's re-render — browsers fire no dragend on a disconnected
      // source) would otherwise leave the previous listener installed
      // forever once this overwrite lands.
      this._stopDragTrack();
      this._dragThumb = thumb;
      // The FLIP reorder animation drives transform through a transition;
      // the live drag must not inherit one, or the thumb rubber-bands.
      // Killed BEFORE the grab-offset read: mid-FLIP the rect includes the
      // interpolated transform, which would bake a constant offset into
      // the whole drag.
      thumb.style.transition = 'none';
      this._dragGrab = startY - thumb.getBoundingClientRect().top;
      this._dragTy = 0;
      this._onDragTrack = e => {
        const t = this._dragThumb;
        if (!t) return;
        const rail = this._rail.getBoundingClientRect();
        const r = t.getBoundingClientRect();
        // A transformed ancestor (author wraps the deck in a CSS scale;
        // canvas-mode pan/zoom) scales viewport deltas: translateY(N)
        // moves the rect by s·N. Measure s from the thumb itself (rect is
        // scaled, offsetHeight is layout px) so the feedback loop stays
        // exact instead of oscillating at s ≥ 2. offsetHeight is 0 only
        // when unrendered — nothing to track then, treat as unscaled.
        const s = t.offsetHeight ? r.height / t.offsetHeight : 1;
        const layoutTop = r.top - s * this._dragTy;
        let want = e.clientY - this._dragGrab;
        want = Math.max(rail.top, Math.min(want, rail.bottom - r.height));
        this._dragTy = (want - layoutTop) / s;
        t.style.transform = 'translateY(' + this._dragTy + 'px)';
      };
      document.addEventListener('dragover', this._onDragTrack, true);
    }

    /** Cancel the thumb's deferred data-dragging mark if its frame has not
     *  fired yet — see the dragstart deferral. Called from dragend only:
     *  _stopDragTrack is the wrong home for it, because _startDragTrack
     *  defensively calls _stopDragTrack at the START of every drag (its
     *  lost-dragend reset), so a cancel there kills the mark the same
     *  dragstart just scheduled. The strand that matters — pointer-
     *  events:none left on a CONNECTED thumb that is no longer being
     *  dragged — is closed two ways: dragend cancels the pending frame
     *  here, and the frame callback re-checks that THIS thumb is still the
     *  live drag source (_dragFrom and _dragThumb, both cleared/re-pointed
     *  by dragend or by a new drag). The remaining lost-dragend case — the
     *  source slide removed mid-drag, so no dragend fires — ends with that
     *  thumb discarded by the rail reconcile (thumbs are keyed by slide
     *  element and a removed slide's thumb is not reused), so a mark landing
     *  on it is on a discarded node. The risk this defer adds over the old
     *  synchronous set is therefore the narrow rAF-after-dragend window,
     *  which the dragend cancel covers. */
    _cancelDragAttr() {
      if (this._dragAttrRaf != null) {
        cancelAnimationFrame(this._dragAttrRaf);
        this._dragAttrRaf = null;
      }
    }
    _stopDragTrack() {
      if (this._onDragTrack) {
        document.removeEventListener('dragover', this._onDragTrack, true);
        this._onDragTrack = null;
      }
      const t = this._dragThumb;
      if (t) {
        t.style.transform = '';
        t.style.transition = '';
      }
      this._dragThumb = null;
      this._dragTy = 0;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      // Right-clicking a thumb OUTSIDE the selection collapses the
      // selection to that thumb (platform convention) — the menu then
      // always targets exactly what's highlighted.
      if (this._selected.size && slide && !this._selected.has(slide)) {
        this._selected.clear();
        this._selected.add(slide);
        this._selAnchor = slide;
        this._syncSelection();
      }
      const sel = this._selectionIndices();
      const bulk = sel.length > 1;
      this._menuIndices = bulk ? sel : [i];
      // Bulk mode offers only the one batched op that exists (delete);
      // the single-slide items address one index and stay hidden.
      this._menu.querySelectorAll('[data-act="skip"], [data-act="up"], [data-act="down"], [data-act="duplicate"], hr').forEach(el => {
        el.style.display = bulk ? 'none' : '';
      });
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      const del = this._menu.querySelector('[data-act="delete"]');
      del.textContent = bulk ? 'Delete ' + sel.length + ' slides' : 'Delete slide';
      del.disabled = bulk ? sel.length >= this._slides.length : this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
      this._menuIndices = null;
    }
    _openConfirm(sel) {
      if (!this._confirm) return;
      const list = Array.isArray(sel) ? sel : [sel];
      // Hold the slide ELEMENTS: the deck can re-render while the dialog
      // is open (collaborator/agent edit), and a frozen index list would
      // then address the wrong slides — a same-count reorder even passes
      // the host's witness guard. Elements re-resolve at danger-click.
      this._confirmEls = list.map(i => this._slides[i]).filter(Boolean);
      // Title uses the rail's skip-aware label, so the confirm names the
      // number the user right-clicked (a raw index would disagree with the
      // rail whenever a skipped slide precedes the target).
      const lbl = list.length === 1 ? this._slideLabel(list[0]) : '';
      this._confirm.querySelector('.title').textContent = list.length === 1 ? lbl ? 'Delete slide ' + lbl + '?' : 'Delete skipped slide?' : 'Delete ' + list.length + ' slides?';
      this._confirm.querySelector('.msg').textContent = list.length === 1 ? 'This slide will be removed from the deck.' : 'These slides will be removed from the deck.';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmEls = null;
    }

    /** Return focus to the current slide's thumb so the keyboard flow
     *  (Delete → Enter → Delete …) survives the confirm dialog closing.
     *  Without 'force', skipped while a structural op is in flight
     *  (_railLock): _index is then an optimistic post-op value that
     *  doesn't address the pre-op thumb list — _pendingRailRefocus stays
     *  armed and the ack/slotchange paths call back with force once the
     *  rail reflects the op. Skipped (and disarmed) while the rail is
     *  inert (hidden / presenting). */
    _focusCurrentThumb(force) {
      if (!force && this._railLock) return;
      this._pendingRailRefocus = false;
      // Never yank focus from content the user reached meanwhile (e.g.
      // an input inside a slide during the ack round-trip) — only
      // reclaim it from the rail's own surfaces, or from nowhere.
      const ae = this._root && this._root.activeElement;
      const ours = !ae || this._rail && this._rail.contains(ae) || this._confirm && this._confirm.contains(ae) || this._menu && this._menu.contains(ae);
      const lightAe = document.activeElement;
      const lightOk = !lightAe || lightAe === document.body || lightAe === this;
      if (!ours || !lightOk) return;
      const cur = this._thumbs && this._thumbs[this._index];
      if (cur && this._rail && !this._rail.inert) cur.thumb.focus({
        preventScroll: true
      });
    }

    /** Selection as sorted slide indices. An empty explicit selection
     *  means the current slide (the rail's implicit selection). */
    _selectionIndices() {
      const out = [];
      this._slides.forEach((s, i) => {
        if (this._selected.has(s)) out.push(i);
      });
      if (!out.length && this._slides[this._index]) out.push(this._index);
      return out;
    }
    _clearSelection() {
      // Re-anchor before the early return: a plain click followed by
      // arrow/tap navigation leaves _selected empty but the anchor
      // pointing at the old slide, and a later shift-click would range
      // from there instead of the current slide.
      this._selAnchor = null;
      if (!this._selected.size) return;
      this._selected.clear();
      this._syncSelection();
    }
    _syncSelection() {
      (this._thumbs || []).forEach(t => {
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    /** True when the page's DC runtime reports a live template stream for
     *  any component here (newer support.js bundles only — older bundles
     *  lack the signal and the HOST-side gate covers those decks). Rail
     *  mutations are refused for the duration: a mid-stream op addresses
     *  slide indices the stream is rewriting underneath the click. */
    _streamActive() {
      try {
        return !!window.__dcUpdate && typeof window.__dcStreaming === 'function' && window.__dcStreaming();
      } catch (e) {
        return false;
      }
    }

    /** Transient in-stage notice for a refused mid-stream rail op. */
    _showStreamNotice() {
      this._showNotice('Claude is still updating this deck — try again when it finishes.');
    }

    /** Transient bottom-center toast for a refused rail gesture. */
    _showNotice(text) {
      if (!this._root) return;
      let n = this._streamNotice;
      if (!n) {
        n = document.createElement('div');
        n.className = 'export-hidden';
        n.setAttribute('data-omelette-chrome', '');
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' + 'background:rgba(22,22,22,.94);color:#fff;' + 'font:500 13px/1.4 system-ui,sans-serif;padding:8px 14px;' + 'border-radius:8px;z-index:2147483646;pointer-events:none;' + 'opacity:0;transition:opacity .15s ease';
        this._root.append(n);
        this._streamNotice = n;
      }
      n.textContent = text;
      n.style.opacity = '1';
      if (this._streamNoticeTimer) clearTimeout(this._streamNoticeTimer);
      this._streamNoticeTimer = setTimeout(() => {
        n.style.opacity = '0';
      }, 2600);
    }
    _emitDcOp(op, slide, lock, newIndex) {
      // Mid-stream guard: refuse the gesture outright — no lock, no
      // optimistic index change, no emit, no self-mutation (returning
      // true short-circuits every caller). The host applies the same
      // gate for decks whose committed support.js predates the signal.
      if (this._streamActive()) {
        this._showStreamNotice();
        return true;
      }
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }

    /** Delete a set of slides (pre-op indices). One slide delegates to
     *  _deleteSlide — the plain 'remove' op — so single deletes keep
     *  working against hosts that predate 'removeMany'. A bulk delete is
     *  ONE op: one host write, one undo snapshot, and indices that all
     *  address the same pre-op deck (N acked single ops would each need
     *  a fresh witness). */
    _deleteSlides(list) {
      if (this._railLock || !list) return;
      const indices = [...new Set(list)].filter(i => this._slides[i]).sort((a, b) => a - b);
      if (!indices.length || indices.length >= this._slides.length) return;
      if (indices.length === 1) {
        this._deleteSlide(indices[0]);
        return;
      }
      // Mirrors _duplicateSlide: check the stream gate before doing any
      // work (_emitDcOp re-checks).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const els = indices.map(i => this._slides[i]);
      const del = new Set(indices);
      const cur = this._index;
      // New current index in post-op space: shift the kept slide left by
      // the deletions below it; if the current slide itself is deleted,
      // land on the nearest survivor (after, else before).
      const below = n => indices.reduce((k, x) => k + (x < n ? 1 : 0), 0);
      let ni;
      if (!del.has(cur)) {
        ni = cur - below(cur);
      } else {
        let s = -1;
        for (let j = cur + 1; j < this._slides.length; j++) {
          if (!del.has(j)) {
            s = j;
            break;
          }
        }
        if (s === -1) {
          for (let j = cur - 1; j >= 0; j--) {
            if (!del.has(j)) {
              s = j;
              break;
            }
          }
        }
        ni = s < 0 ? 0 : s - below(s);
      }
      // Emit-path deletes can't refocus until the host re-renders; arm
      // the flag at emit time (never on a refused/no-op path) so
      // ack/slotchange can finish the keyboard flow's focus hand-back.
      // The local path clears it via the caller's _focusCurrentThumb().
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'removeMany',
        indices
      }, els[0], true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      els.forEach(el => el.remove());
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      // Mint ids + copy component state BEFORE emitting, so the op can
      // carry the id map — but never mint for an op the stream gate is
      // about to refuse (_emitDcOp re-checks; this avoids orphaned keys).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      const ids = this._remintDuplicateIds(copy);
      const op = {
        op: 'duplicate'
      };
      if (ids) op.ids = ids;
      if (this._emitDcOp(op, slide, true, i + 1)) return;
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }

    /** Duplicate id policy. Plain ids are stripped — two live slides must
     *  not share one id. But a component that KEYS persistent state by id
     *  (image-slot's sidecar photo) would silently lose that state with
     *  its id. Such a component opts out of the strip by exposing a
     *  static cloneSlot(fromId, isFree) that copies its stored state
     *  under a fresh id of its choosing and returns that id. The old→new
     *  map is returned (or null) and rides the dc-op so the host writes
     *  the SAME ids into source — without that, the copy's state would
     *  revert on reload (docs/dc-ops.md). */
    _remintDuplicateIds(copy) {
      const ids = {};
      let found = false;
      const used = new Set();
      const idOk = /^[A-Za-z][\w-]{0,63}$/;
      const isFree = id => idOk.test(id) && !used.has(id) && !document.getElementById(id);
      copy.querySelectorAll('[id]').forEach(el => {
        const tag = el.tagName.toLowerCase();
        const cls = tag.indexOf('-') >= 0 && customElements.get(tag);
        let next = null;
        if (el.id && cls && typeof cls.cloneSlot === 'function') {
          try {
            next = cls.cloneSlot(el.id, isFree);
          } catch (e) {}
        }
        // Re-checked here so a misbehaving static can't smuggle a dupe
        // or an unsafe value into the document / the emitted op.
        if (typeof next === 'string' && isFree(next)) {
          ids[el.id] = next;
          used.add(next);
          el.id = next;
          found = true;
        } else {
          el.removeAttribute('id');
        }
      });
      return found ? ids : null;
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }

    /** Rail numbering, skip-aware: a skipped slide shows no number and the
     *  rest stay contiguous (1..visible), so the labels match the positions
     *  the overlay counter reports. Cheap (text writes are diffed), safe to
     *  call after any reconcile or skip toggle. */
    _renumberRail() {
      let v = 0;
      (this._thumbs || []).forEach(t => {
        const label = t.slide.hasAttribute('data-deck-skip') ? '' : String(++v);
        if (t.num.textContent !== label) t.num.textContent = label;
      });
    }

    /** Skip-aware label for slide i — the same numbering _renumberRail
     *  paints: '' for a skipped slide, else its 1-based position among
     *  non-skipped slides. Display surfaces (e.g. the delete confirm)
     *  use this so they never name a number the rail doesn't show. */
    _slideLabel(i) {
      const s = this._slides[i];
      if (!s || s.hasAttribute('data-deck-skip')) return '';
      let v = 0;
      for (let k = 0; k <= i; k++) {
        if (!this._slides[k].hasAttribute('data-deck-skip')) v++;
      }
      return String(v);
    }

    /** Overlay counter, skip-aware: position among non-skipped slides over
     *  the non-skipped total. A skipped CURRENT slide (reachable by rail
     *  click or deep link, never by _advance) shows '–' — its number is
     *  gone from the rail, so any digit here would lie. */
    _syncCount() {
      if (!this._countEl || !this._totalEl) return;
      // Empty deck: keep the overlay's initial "1 / 1" (it has nothing to
      // count and isn't visible without slides) — the guest fallback for
      // frozen copies leaves empty decks alone for the same rendering.
      if (!this._slides.length) {
        this._countEl.textContent = '1';
        this._totalEl.textContent = '1';
        return;
      }
      let pos = 0,
        total = 0;
      this._slides.forEach((s, i) => {
        if (!s.hasAttribute('data-deck-skip')) {
          total++;
          if (i <= this._index) pos = total;
        }
      });
      const cur = this._slides[this._index];
      const curSkipped = !cur || cur.hasAttribute('data-deck-skip');
      this._countEl.textContent = curSkipped ? '–' : String(pos);
      this._totalEl.textContent = String(total);
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "client-decks/roles-and-responsibilities/deck-stage.js", error: String((e && e.message) || e) }); }

// components/brand/AppIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* App icon: mark only, centred on an ink rounded square, berry-soft mark.
   Radius is 21.875% of the box, taken from cannie-app-icon.svg (112 on 512). */
function AppIcon({
  size = 64,
  background = "#2B211B",
  mark = "#E896B3",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 512 512",
    width: size,
    height: size,
    role: "img",
    "aria-label": "Cannie",
    style: {
      display: "block",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("rect", {
    width: "512",
    height: "512",
    rx: "112",
    fill: background
  }), /*#__PURE__*/React.createElement("path", {
    d: "M136.188 404L261.705 337.261L318.129 307.26L339.985 247.211L367.913 170.478L321.721 153.666L278.391 272.716L113.11 360.597Z",
    fill: mark
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "344.817",
    cy: "162.072",
    r: "54.072",
    fill: mark
  }));
}
Object.assign(__ds_scope, { AppIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AppIcon.jsx", error: String((e && e.message) || e) }); }

// components/brand/CalloutBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* callout-box: one filled block per slide or section, holding the single most
   important supporting idea. Sand on light surfaces, ink on dark ones, 14px
   corners, never a shadow and never a border. */
function CalloutBox({
  variant = "fact",
  tone = "light",
  label,
  attribution,
  scale = "ui",
  children,
  style,
  ...rest
}) {
  const deck = scale === "deck";
  const onInk = tone === "dark";
  const quote = variant === "quote";
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-theme": onInk ? "dark" : undefined,
    style: {
      background: onInk ? "var(--cannie-ink)" : "var(--cannie-sand)",
      color: onInk ? "var(--cannie-bone)" : "var(--cannie-ink)",
      borderRadius: "var(--radius-card)",
      padding: deck ? "36px 40px" : "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: deck ? 18 : "var(--space-3)",
      textAlign: "left",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: deck ? "var(--deck-kicker-size)" : "var(--text-2xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: onInk ? "var(--cannie-taupe)" : "var(--cannie-ink-a70)",
      lineHeight: 1
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: quote ? deck ? "var(--deck-lede-size)" : "var(--text-lg)" : deck ? "var(--deck-body-min-size)" : "var(--text-base)",
      fontWeight: quote ? "var(--weight-semibold)" : "var(--weight-regular)",
      fontStyle: quote ? "italic" : "normal",
      lineHeight: quote ? "var(--leading-snug)" : "var(--leading-body)",
      textWrap: "pretty"
    }
  }, children), attribution ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: deck ? "var(--deck-caption-size)" : "var(--text-sm)",
      color: onInk ? "var(--cannie-bone-a70)" : "var(--cannie-ink-a55)"
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { CalloutBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CalloutBox.jsx", error: String((e && e.message) || e) }); }

// components/brand/IsIsNotPair.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* is-is-not-pair: two callout boxes side by side, one sand ("X IS"), one ink
   ("X IS NOT"). Three bullets each, paired conceptually so each IS bullet
   answers the IS NOT bullet across from it. */
function Bullets({
  items,
  onInk,
  deck
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: deck ? 16 : "var(--space-3)"
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: deck ? 16 : 12,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: deck ? 9 : 6,
      height: deck ? 9 : 6,
      borderRadius: "var(--radius-full)",
      background: onInk ? "var(--cannie-berry-soft)" : "var(--cannie-berry)",
      marginTop: deck ? 9 : 7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: "pretty"
    }
  }, item))));
}
function IsIsNotPair({
  isLabel,
  isNotLabel,
  is = [],
  isNot = [],
  scale = "ui",
  gap,
  style,
  ...rest
}) {
  const deck = scale === "deck";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: gap ?? (deck ? 28 : "var(--space-5)"),
      alignItems: "stretch",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.CalloutBox, {
    tone: "light",
    label: isLabel,
    scale: scale,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Bullets, {
    items: is,
    onInk: false,
    deck: deck
  })), /*#__PURE__*/React.createElement(__ds_scope.CalloutBox, {
    tone: "dark",
    label: isNotLabel,
    scale: scale,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Bullets, {
    items: isNot,
    onInk: true,
    deck: deck
  })));
}
Object.assign(__ds_scope, { IsIsNotPair });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/IsIsNotPair.jsx", error: String((e && e.message) || e) }); }

// components/brand/KickerBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* kicker-block: a wide-tracked uppercase label with a short accent rule beneath.
   Sits top-left of every content slide, one slide margin from the edge.
   On light surfaces the label is ink at 70% rather than taupe: taupe on bone
   measures 1.3:1 and fails WCAG. Taupe is retained on ink, where it reads
   10.3:1. See readme.md > Accessibility corrections. */
function KickerBlock({
  label,
  scale = "ui",
  rule = true,
  style,
  ...rest
}) {
  const deck = scale === "deck";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: deck ? 14 : 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: deck ? "var(--deck-kicker-size)" : "var(--text-2xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)",
      lineHeight: 1
    }
  }, label), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: deck ? "var(--deck-rule-width)" : 36,
      height: deck ? "var(--deck-rule-height)" : "var(--rule-height)",
      background: "var(--rule-color)"
    }
  }) : null);
}
Object.assign(__ds_scope, { KickerBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/KickerBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/Lockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Geometry is copied verbatim from the supplied brand SVGs
   (cannie-lockup-*.svg, cannie-mark-*.svg) so the React lockup is
   dimensionally identical to the production artwork. Do not adjust. */
const TONES = {
  light: {
    mark: "#9E2D53",
    text: "#2B211B"
  },
  dark: {
    mark: "#E896B3",
    text: "#F3EEE6"
  },
  black: {
    mark: "#000000",
    text: "#000000"
  },
  white: {
    mark: "#FFFFFF",
    text: "#FFFFFF"
  },
  current: {
    mark: "currentColor",
    text: "currentColor"
  }
};
const WORDMARK_FONT = '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
function Lockup({
  variant = "lockup",
  tone = "light",
  height,
  title = "Cannie",
  style,
  ...rest
}) {
  const c = TONES[tone] || TONES.light;
  const common = {
    role: "img",
    "aria-label": title,
    focusable: "false"
  };
  const box = (h, extra) => ({
    display: "block",
    height: h,
    width: "auto",
    ...extra,
    ...style
  });
  const markShape = /*#__PURE__*/React.createElement("g", {
    transform: "translate(12.00 14.40) scale(1.07306)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.103 78.281L39.298 60.631L54.219 52.697L60 36.816L67.386 16.523L55.17 12.077L43.71 43.561L0 66.802Z",
    fill: c.mark
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "61.278",
    cy: "14.3",
    r: "14.3",
    fill: c.mark
  }));
  const wordmarkText = x => /*#__PURE__*/React.createElement("text", {
    x: x,
    y: "98.4",
    fontFamily: WORDMARK_FONT,
    fontWeight: "700",
    fontSize: "120",
    letterSpacing: "-0.9",
    fill: c.text
  }, "Cannie");
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 100 100",
      style: box(height || 40)
    }, common, rest), /*#__PURE__*/React.createElement("path", {
      d: "M16.809 91L51.581 72.512L67.211 64.201L73.266 47.565L81.003 26.308L68.207 21.651L56.203 54.631L10.416 78.976Z",
      fill: c.mark
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "74.605",
      cy: "23.979",
      r: "14.979",
      fill: c.mark
    }));
  }
  if (variant === "wordmark") {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 450.6 142.2",
      style: box(height || 32)
    }, common, rest), wordmarkText(0));
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 579.7 142.2",
    style: box(height || 36)
  }, common, rest), markShape, wordmarkText(129.1));
}
Object.assign(__ds_scope, { Lockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Lockup.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cannie has no red / amber / green status scale. Meaning is carried by the
   label and by weight, not by hue: "accent" marks the one live thing, "strong"
   marks the definitive state, "quiet" is everything at rest. */
const TONES = {
  quiet: {
    background: "var(--surface-card)",
    color: "var(--text-caption)",
    border: "1px solid transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid var(--border-hairline)"
  },
  accent: {
    background: "var(--surface-selected)",
    color: "var(--text-accent)",
    border: "1px solid transparent"
  },
  solid: {
    background: "var(--accent)",
    color: "var(--text-on-accent)",
    border: "1px solid transparent"
  },
  strong: {
    background: "var(--cannie-ink)",
    color: "var(--cannie-bone)",
    border: "1px solid transparent"
  }
};
function Badge({
  tone = "quiet",
  dot = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 9px",
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: ".02em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...(TONES[tone] || TONES.quiet),
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "var(--radius-full)",
      background: "currentColor",
      flex: "0 0 auto"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: "var(--control-height-sm)",
    padding: "0 14px",
    font: "var(--text-sm)",
    gap: 8
  },
  md: {
    height: "var(--control-height)",
    padding: "0 18px",
    font: "var(--text-base)",
    gap: 9
  },
  lg: {
    height: "var(--control-height-lg)",
    padding: "0 24px",
    font: "var(--text-md)",
    gap: 10
  }
};
function useInteract() {
  const [s, set] = React.useState({
    hover: false,
    active: false,
    focus: false
  });
  return [s, {
    onMouseEnter: () => set(v => ({
      ...v,
      hover: true
    })),
    onMouseLeave: () => set(v => ({
      ...v,
      hover: false,
      active: false
    })),
    onMouseDown: () => set(v => ({
      ...v,
      active: true
    })),
    onMouseUp: () => set(v => ({
      ...v,
      active: false
    })),
    onFocus: e => set(v => ({
      ...v,
      focus: e.target.matches(":focus-visible")
    })),
    onBlur: () => set(v => ({
      ...v,
      focus: false
    }))
  }];
}
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  children,
  style,
  ...rest
}) {
  const [s, h] = useInteract();
  const sz = SIZES[size] || SIZES.md;
  const skin = {
    primary: {
      background: s.active ? "var(--accent-press)" : s.hover ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent"
    },
    secondary: {
      background: s.active ? "var(--surface-press)" : s.hover ? "var(--surface-hover)" : "transparent",
      color: "var(--text-body)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: s.active ? "var(--surface-press)" : s.hover ? "var(--surface-hover)" : "transparent",
      color: s.hover ? "var(--text-accent)" : "var(--text-body)",
      border: "1px solid transparent"
    },
    accentQuiet: {
      background: s.active ? "var(--surface-press)" : s.hover ? "var(--surface-hover)" : "var(--surface-selected)",
      color: "var(--text-accent)",
      border: "1px solid transparent"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, h, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sz.gap,
      height: sz.height,
      padding: sz.padding,
      width: fullWidth ? "100%" : undefined,
      fontFamily: "var(--font-sans)",
      fontSize: sz.font,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      letterSpacing: 0,
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: s.active && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "var(--transition-control), transform var(--duration-instant) var(--ease-out)",
      boxShadow: s.focus ? "var(--focus-ring)" : "none",
      outline: "none",
      whiteSpace: "nowrap",
      ...skin,
      ...style
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cards never carry a shadow. Separation comes from whitespace first, a taupe
   hairline second, a fill third. */
function Card({
  variant = "sand",
  padding,
  interactive = false,
  selected = false,
  header,
  footer,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skin = {
    sand: {
      background: "var(--surface-card)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--surface-raised)",
      border: "1px solid var(--border-hairline)"
    },
    plain: {
      background: "transparent",
      border: "1px solid transparent"
    },
    ink: {
      background: "var(--cannie-ink)",
      border: "1px solid transparent",
      color: "var(--cannie-bone)"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-theme": variant === "ink" ? "dark" : undefined,
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      borderRadius: "var(--radius-card)",
      padding: padding ?? "var(--card-padding)",
      boxShadow: "var(--shadow-card)",
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)",
      transition: "var(--transition-control)",
      cursor: interactive ? "pointer" : undefined,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...skin,
      ...(selected ? {
        background: "var(--surface-selected)",
        borderColor: "var(--border-accent)"
      } : hover ? {
        borderColor: "var(--border-strong)"
      } : null),
      ...style
    }
  }, rest), header ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, header) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginTop: "var(--space-1)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide, loaded from CDN and drawn at Lucide's own default stroke of 2.
   Cannie ships no icon set of its own; this is a documented substitution.
   See readme.md > Iconography. */
const SRC = "https://unpkg.com/lucide@latest";
let loading = null;
function ensureLucide() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.lucide) return Promise.resolve(window.lucide);
  if (loading) return loading;
  loading = new Promise(resolve => {
    let tag = document.querySelector('script[data-cannie-lucide]');
    if (!tag) {
      tag = document.createElement("script");
      tag.src = SRC;
      tag.setAttribute("data-cannie-lucide", "");
      document.head.appendChild(tag);
    }
    tag.addEventListener("load", () => resolve(window.lucide));
    tag.addEventListener("error", () => resolve(null));
    if (window.lucide) resolve(window.lucide);
  });
  return loading;
}
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  style,
  ...rest
}) {
  const host = React.useRef(null);
  React.useEffect(() => {
    let dead = false;
    ensureLucide().then(lucide => {
      const el = host.current;
      if (dead || !el || !lucide) return;
      el.innerHTML = "";
      const slot = document.createElement("i");
      slot.setAttribute("data-lucide", name);
      el.appendChild(slot);
      lucide.createIcons();
      const svg = el.querySelector("svg");
      if (svg) {
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        svg.setAttribute("stroke-width", strokeWidth);
        svg.style.display = "block";
      }
    });
    return () => {
      dead = true;
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: host,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flex: "0 0 auto",
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
const GLYPH = {
  sm: 16,
  md: 20,
  lg: 22
};
function IconButton({
  name,
  label,
  variant = "ghost",
  size = "md",
  shape = "rounded",
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [s, set] = React.useState({
    hover: false,
    active: false,
    focus: false
  });
  const box = SIZES[size] || SIZES.md;
  const skin = {
    primary: {
      background: s.active ? "var(--accent-press)" : s.hover ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent"
    },
    secondary: {
      background: s.active ? "var(--surface-press)" : s.hover ? "var(--surface-hover)" : "transparent",
      color: "var(--text-body)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: s.active ? "var(--surface-press)" : s.hover ? "var(--surface-hover)" : "transparent",
      color: s.hover ? "var(--text-accent)" : "var(--text-caption)",
      border: "1px solid transparent"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => set(v => ({
      ...v,
      hover: true
    })),
    onMouseLeave: () => set(v => ({
      ...v,
      hover: false,
      active: false
    })),
    onMouseDown: () => set(v => ({
      ...v,
      active: true
    })),
    onMouseUp: () => set(v => ({
      ...v,
      active: false
    })),
    onFocus: e => set(v => ({
      ...v,
      focus: e.target.matches(":focus-visible")
    })),
    onBlur: () => set(v => ({
      ...v,
      focus: false
    })),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: box,
      height: box,
      padding: 0,
      borderRadius: shape === "circle" ? "var(--radius-full)" : "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: s.active && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "var(--transition-control), transform var(--duration-instant) var(--ease-out)",
      boxShadow: s.focus ? "var(--focus-ring)" : "none",
      outline: "none",
      ...skin,
      ...style
    }
  }, rest), children || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: GLYPH[size] || 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tag is a piece of user data (a skill, a source, a saved filter). Badge is a
   state the system assigns. Tags can be removed, badges cannot. */
function Tag({
  tone = "neutral",
  onRemove,
  size = "md",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sm = size === "sm";
  const skin = tone === "accent" ? {
    background: "var(--surface-selected)",
    color: "var(--text-accent)",
    border: "1px solid transparent"
  } : {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid var(--border-hairline)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: sm ? 5 : 7,
      height: sm ? 24 : 28,
      padding: onRemove ? sm ? "0 5px 0 9px" : "0 6px 0 11px" : sm ? "0 9px" : "0 11px",
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-sans)",
      fontSize: sm ? "var(--text-2xs)" : "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      transition: "var(--transition-control)",
      ...skin,
      ...(hover && tone !== "accent" ? {
        borderColor: "var(--border-strong)"
      } : null),
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: sm ? 16 : 18,
      height: sm ? 16 : 18,
      padding: 0,
      border: "none",
      background: "transparent",
      color: "inherit",
      opacity: 0.55,
      cursor: "pointer",
      borderRadius: "var(--radius-full)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: sm ? 11 : 13
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  onClose,
  title,
  description,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "var(--surface-scrim)",
      backdropFilter: "var(--blur-scrim)",
      animation: "cannieFade var(--duration-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes cannieFade{from{opacity:0}to{opacity:1}}@keyframes cannieRise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}"), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-raised)",
      color: "var(--text-body)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-overlay)",
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      fontFamily: "var(--font-sans)",
      animation: "cannieRise var(--duration-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-title)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-caption)",
      textWrap: "pretty"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    onClick: onClose,
    size: "sm"
  }) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Ink bubble, one line, one optional action. No colour-coded severity: the
   system has no red or green, so a toast says what happened in words. */
function Toast({
  icon,
  children,
  action,
  onAction,
  onDismiss,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "data-theme": "dark",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      maxWidth: 460,
      padding: "12px 12px 12px 16px",
      background: "var(--cannie-ink)",
      color: "var(--cannie-bone)",
      borderRadius: "var(--radius-control)",
      boxShadow: "var(--shadow-popover)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.4,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: "var(--cannie-berry-soft)"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textWrap: "pretty"
    }
  }, children), action ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: "none",
      background: "transparent",
      padding: "0 4px",
      fontFamily: "inherit",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--cannie-berry-soft)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, action) : null, onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 40,
      ...pos,
      padding: "6px 9px",
      background: "var(--cannie-ink)",
      color: "var(--cannie-bone)",
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.3,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      opacity: open ? 1 : 0,
      transition: "opacity var(--duration-instant) var(--ease-out)",
      boxShadow: "var(--shadow-popover)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : inner;
  const auto = React.useId ? React.useId() : "cannie-check";
  const fieldId = id || auto;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInner(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 11,
      alignItems: "start",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 19,
      height: 19,
      marginTop: 1,
      borderRadius: 5,
      background: on || indeterminate ? "var(--accent)" : "var(--surface-raised)",
      border: `1px solid ${on || indeterminate ? "var(--accent)" : "var(--border-strong)"}`,
      color: "var(--text-on-accent)",
      transition: "var(--transition-control)",
      flex: "0 0 auto"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 2,
      background: "currentColor",
      borderRadius: 1
    }
  }) : on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 3
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      lineHeight: 1.35
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)",
      lineHeight: "var(--leading-body)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cannie has no red. A field in error takes the accent plus an explicit
   message; the accent is otherwise reserved for one live thing per view. */
const HEIGHTS = {
  sm: "var(--control-height-sm)",
  md: "var(--control-height)",
  lg: "var(--control-height-lg)"
};
function Input({
  label,
  hint,
  error,
  icon,
  size = "md",
  multiline = false,
  rows = 4,
  disabled = false,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const auto = React.useId ? React.useId() : "cannie-input";
  const fieldId = id || auto;
  const borderColor = error ? "var(--border-accent)" : focus ? "var(--border-focus)" : "var(--border-hairline)";
  const Field = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      fontFamily: "var(--font-sans)",
      ...containerStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-body)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: multiline ? "flex-start" : "center",
      gap: 9,
      height: multiline ? undefined : HEIGHTS[size] || HEIGHTS.md,
      padding: multiline ? "11px 13px" : "0 13px",
      background: disabled ? "transparent" : "var(--surface-raised)",
      border: `1px solid ${borderColor}`,
      boxShadow: focus ? `0 0 0 3px color-mix(in srgb, var(--border-focus) 18%, transparent)` : "none",
      borderRadius: "var(--radius-control)",
      transition: "var(--transition-control)",
      opacity: disabled ? 0.55 : 1
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: "var(--text-caption)",
    style: {
      marginTop: multiline ? 2 : 0
    }
  }) : null, /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    rows: multiline ? rows : undefined,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      lineHeight: multiline ? "var(--leading-body)" : undefined,
      resize: multiline ? "vertical" : undefined,
      padding: 0,
      ...style
    }
  }, rest))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--text-accent)" : "var(--text-caption)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  name,
  value,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const auto = React.useId ? React.useId() : "cannie-radio";
  const fieldId = id || auto;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 11,
      alignItems: "start",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 19,
      height: 19,
      marginTop: 1,
      borderRadius: "var(--radius-full)",
      background: "var(--surface-raised)",
      border: `1px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
      transition: "var(--transition-control)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "var(--radius-full)",
      background: "var(--accent)",
      transform: checked ? "scale(1)" : "scale(0)",
      transition: "transform var(--duration-instant) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      lineHeight: 1.35
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)",
      lineHeight: "var(--leading-body)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  size = "md",
  disabled = false,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const auto = React.useId ? React.useId() : "cannie-select";
  const fieldId = id || auto;
  const height = {
    sm: "var(--control-height-sm)",
    md: "var(--control-height)",
    lg: "var(--control-height-lg)"
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      fontFamily: "var(--font-sans)",
      ...containerStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-body)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: height || "var(--control-height)",
      background: "var(--surface-raised)",
      border: `1px solid ${focus ? "var(--border-focus)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-control)",
      transition: "var(--transition-control)",
      opacity: disabled ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      padding: "0 38px 0 13px",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17,
    color: "var(--text-caption)",
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none"
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : inner;
  const auto = React.useId ? React.useId() : "cannie-switch";
  const fieldId = id || auto;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInner(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 12,
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      width: 38,
      height: 22,
      padding: 2,
      borderRadius: "var(--radius-full)",
      background: on ? "var(--accent)" : "var(--cannie-taupe)",
      transition: "background-color var(--duration-fast) var(--ease-out)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-full)",
      background: "var(--cannie-bone)",
      transform: on ? "translateX(16px)" : "translateX(0)",
      transition: "transform var(--duration-fast) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      lineHeight: 1.35
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)",
      lineHeight: "var(--leading-body)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tabs are underlined, never pill-shaped: the active marker is the same
   accent rule that sits under a kicker, at the same weight. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const active = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const font = size === "sm" ? "var(--text-sm)" : "var(--text-base)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-5)",
      borderBottom: "1px solid var(--border-hairline)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), items.map(raw => {
    const item = typeof raw === "string" ? {
      value: raw,
      label: raw
    } : raw;
    const on = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(item.value),
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: size === "sm" ? "0 0 10px" : "0 0 13px",
        border: "none",
        background: "transparent",
        fontFamily: "inherit",
        fontSize: font,
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-regular)",
        color: on ? "var(--text-accent)" : "var(--text-caption)",
        cursor: "pointer",
        transition: "var(--transition-control)"
      }
    }, item.label, item.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-caption)",
        fontVariantNumeric: "tabular-nums"
      }
    }, item.count) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: "var(--rule-height)",
        background: "var(--rule-color)",
        opacity: on ? 1 : 0,
        transition: "opacity var(--duration-fast) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// slides/slides.jsx
try { (() => {
/* Cannie deck slides. Loaded as text/babel, so no imports: the design system
   components come off the global namespace and these are published back to
   window for the per-slide HTML files. */
const DS = window.CannieDesignSystem_274f8e;
const {
  Lockup,
  KickerBlock,
  CalloutBox,
  IsIsNotPair
} = DS;
function Stage({
  tone = "light",
  children,
  style
}) {
  const ink = tone === "dark";
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": ink ? "dark" : undefined,
    style: {
      width: 1280,
      height: 720,
      background: ink ? "var(--cannie-ink)" : "var(--cannie-bone)",
      color: ink ? "var(--cannie-bone)" : "var(--cannie-ink)",
      padding: "var(--deck-margin)",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-sans)",
      textAlign: "left",
      overflow: "hidden",
      ...style
    }
  }, children);
}
const Title = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("h1", {
  style: {
    margin: 0,
    fontSize: "var(--deck-title-size)",
    fontWeight: "var(--weight-bold)",
    letterSpacing: "var(--tracking-title)",
    lineHeight: 1.05,
    color: "var(--text-title)",
    ...style
  }
}, children);
const Body = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: "var(--deck-body-size)",
    lineHeight: "var(--leading-body)",
    color: "var(--text-body)",
    textWrap: "pretty",
    ...style
  }
}, children);
const Stakes = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: "var(--deck-body-size)",
    fontWeight: "var(--weight-bold)",
    lineHeight: "var(--leading-body)",
    color: "var(--text-accent)",
    textWrap: "pretty"
  }
}, children);
const Caption = ({
  children
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: "var(--deck-caption-size)",
    color: "var(--text-caption)"
  }
}, children);
function CoverSlide() {
  return /*#__PURE__*/React.createElement(Stage, {
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    height: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      fontSize: 76
    }
  }, "Brand guidelines"), /*#__PURE__*/React.createElement(Body, {
    style: {
      fontSize: "var(--deck-lede-size)",
      fontWeight: "var(--weight-semibold)"
    }
  }, "Conviction without volume.")), /*#__PURE__*/React.createElement(Caption, null, "Version alpha, 2026"));
}
function ContentSlide() {
  return /*#__PURE__*/React.createElement(Stage, null, /*#__PURE__*/React.createElement(KickerBlock, {
    scale: "deck",
    label: "01 - Origin"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--deck-section-gap)"
    }
  }), /*#__PURE__*/React.createElement(Title, null, "Origin"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Body, null, "A recruiter keeps forty conversations alive at once. Every one of them has a next move, and every one of them decays quietly if that move is late."), /*#__PURE__*/React.createElement(Stakes, null, "Nine days to first shortlist is the number the desk is judged on.")), /*#__PURE__*/React.createElement(CalloutBox, {
    scale: "deck",
    variant: "quote",
    attribution: "Founding note"
  }, "Cannie holds the thread, so the next move is obvious the moment you open it.")));
}
function StatementSlide() {
  return /*#__PURE__*/React.createElement(Stage, {
    tone: "dark",
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(KickerBlock, {
    scale: "deck",
    label: "02 - Positioning"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      fontSize: 68,
      lineHeight: 1.08
    }
  }, "A recruiter's working memory, not another database to feed."), /*#__PURE__*/React.createElement(Stakes, null, "One accent, one claim, one surface at a time.")), /*#__PURE__*/React.createElement(Lockup, {
    variant: "mark",
    tone: "dark",
    height: 46
  }));
}
function IsIsNotSlide() {
  return /*#__PURE__*/React.createElement(Stage, null, /*#__PURE__*/React.createElement(KickerBlock, {
    scale: "deck",
    label: "03 - Boundaries"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement(Title, null, "What Cannie is"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36
    }
  }), /*#__PURE__*/React.createElement(IsIsNotPair, {
    scale: "deck",
    isLabel: "Cannie is",
    isNotLabel: "Cannie is not",
    is: ["A recruiter's working memory", "Opinionated about follow-up", "Built for one desk at a time"],
    isNot: ["Another database to feed", "A weekly dashboard", "An org-wide rollout project"],
    style: {
      flex: 1
    }
  }));
}
function RoleColumn({
  tone,
  label,
  items,
  time
}) {
  const onInk = tone === "dark";
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": onInk ? "dark" : undefined,
    style: {
      background: onInk ? "var(--cannie-ink)" : "var(--cannie-sand)",
      color: onInk ? "var(--cannie-bone)" : "var(--cannie-ink)",
      borderRadius: "var(--radius-card)",
      padding: "32px 36px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      height: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--deck-kicker-size)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: onInk ? "var(--cannie-taupe)" : "var(--cannie-ink-a70)",
      lineHeight: 1
    }
  }, label), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 13,
      flex: 1
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 14,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-full)",
      background: onInk ? "var(--cannie-berry-soft)" : "var(--cannie-berry)",
      marginTop: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--deck-body-min-size)",
      lineHeight: "var(--leading-body)",
      textWrap: "pretty"
    }
  }, item)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--deck-caption-size)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--leading-body)",
      color: onInk ? "var(--cannie-berry-soft)" : "var(--cannie-berry)",
      textWrap: "pretty",
      borderTop: `1px solid ${onInk ? "var(--cannie-ink-line)" : "var(--cannie-taupe-deep)"}`,
      paddingTop: 18
    }
  }, time));
}
function RolesSlide() {
  return /*#__PURE__*/React.createElement(Stage, null, /*#__PURE__*/React.createElement(KickerBlock, {
    scale: "deck",
    label: "05 - Ways of working"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Title, {
    style: {
      fontSize: 44,
      lineHeight: 1.08,
      maxWidth: 1000
    }
  }, "Roles and responsibilities: what we need, and when"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 28,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(RoleColumn, {
    tone: "light",
    label: "Global stakeholders",
    items: ["Sign off design and copy", "Support UAT (or delegate), then sign off", "Business lead sign-off before go-live", "Flag risks from a big-picture view", "Promote launch to markets", "Join monthly show and tells"],
    time: "Time: c. 3hrs/month to Nov, few hours total for copy, testing w/c 30 Nov, sign-off w/c 7 Dec"
  }), /*#__PURE__*/React.createElement(RoleColumn, {
    tone: "dark",
    label: "Local stakeholders",
    items: ["Confirm local fit, flag local risks", "Run local campaign, provide translations", "Sign off local copy", "Support UAT"],
    time: "Time: c. 2hrs/month to Nov, few hours total for copy, testing w/c 30 Nov, sign-off w/c 7 Dec"
  })));
}
function ClosingSlide() {
  return /*#__PURE__*/React.createElement(Stage, {
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(KickerBlock, {
    scale: "deck",
    label: "Ends"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      fontSize: 64
    }
  }, "Check this file before you build."), /*#__PURE__*/React.createElement(Body, null, "Colour, mark shape, and typeface have each changed more than once. The doc is the record, not memory.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    height: 44
  }), /*#__PURE__*/React.createElement(Caption, null, "cannie.design")));
}
Object.assign(window, {
  Stage,
  Title,
  Body,
  Stakes,
  Caption,
  CoverSlide,
  ContentSlide,
  StatementSlide,
  IsIsNotSlide,
  RoleColumn,
  RolesSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/AppShell.jsx
try { (() => {
/* Cannie app shell: ink sidebar, bone canvas, no shadows anywhere. */
const {
  Lockup,
  Icon,
  IconButton,
  Input,
  Tooltip
} = window.CannieDesignSystem_274f8e;
function Avatar({
  initials,
  size = 36,
  tone = "sand"
}) {
  const ink = tone === "ink";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "0 0 auto",
      borderRadius: "var(--radius-full)",
      background: ink ? "var(--cannie-ink)" : "var(--cannie-taupe)",
      color: ink ? "var(--cannie-bone)" : "var(--cannie-ink)",
      fontSize: size <= 30 ? 11 : size >= 56 ? 19 : 13,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: ".02em"
    }
  }, initials);
}
function NavItem({
  icon,
  label,
  active,
  count,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      width: "100%",
      height: 38,
      padding: "0 12px",
      border: "none",
      borderRadius: "var(--radius-control)",
      background: active ? "var(--surface-selected)" : hover ? "var(--surface-hover)" : "transparent",
      color: active ? "var(--cannie-berry-soft)" : "var(--cannie-bone)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)",
      cursor: "pointer",
      textAlign: "left",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      opacity: 0.6,
      fontVariantNumeric: "tabular-nums"
    }
  }, count) : null);
}
function Sidebar({
  screen,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    "data-theme": "dark",
    style: {
      width: 240,
      flex: "0 0 240px",
      background: "var(--cannie-ink)",
      color: "var(--cannie-bone)",
      padding: "24px 16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    tone: "dark",
    height: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "layout-dashboard",
    label: "Overview",
    active: screen === "dashboard",
    onClick: () => onNavigate("dashboard")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "columns-3",
    label: "Pipeline",
    active: screen === "pipeline",
    onClick: () => onNavigate("pipeline")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "search",
    label: "Search",
    active: screen === "search",
    onClick: () => onNavigate("search")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "users",
    label: "Candidates",
    count: 8,
    active: screen === "candidate",
    onClick: () => onNavigate("candidate")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "settings",
    label: "Settings",
    active: screen === "settings",
    onClick: () => onNavigate("settings")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)",
      padding: "0 12px 10px"
    }
  }, "Live roles"), window.CANNIE.roles.map(r => /*#__PURE__*/React.createElement(NavItem, {
    key: r.id,
    icon: "briefcase",
    label: r.company,
    count: r.live,
    onClick: () => onNavigate("pipeline")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "SW",
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, "Sam Whitlock"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-caption)"
    }
  }, "Halden desk"))));
}
function TopBar({
  title,
  subtitle,
  actions,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "22px 32px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-caption)"
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search candidates",
    containerStyle: {
      width: 260
    },
    onChange: onSearch
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "What changed today"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "bell",
    label: "What changed today"
  })), actions);
}
Object.assign(window, {
  Avatar,
  NavItem,
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/CandidateScreen.jsx
try { (() => {
/* Candidate profile: header, tabs, note composer, timeline, detail rail. */
const {
  Card,
  Badge,
  Tag,
  Button,
  Icon,
  IconButton,
  Tabs,
  Input,
  Select,
  CalloutBox
} = window.CannieDesignSystem_274f8e;
function DetailRow({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "96px 1fr",
      gap: 12,
      alignItems: "baseline",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-caption)"
    }
  }, label), /*#__PURE__*/React.createElement("span", null, children));
}
function CandidateScreen({
  candidate,
  onBack,
  onMove
}) {
  const c = candidate || window.CANNIE.candidates[0];
  const [tab, setTab] = React.useState("notes");
  const [note, setNote] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    title: c.name,
    subtitle: `${c.title}, ${c.company}`,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onBack
    }, "Back to pipeline"), /*#__PURE__*/React.createElement(Button, {
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      }),
      onClick: onMove
    }, "Move stage"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 32,
      padding: "26px 32px 40px",
      overflow: "auto",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(window.Avatar, {
    initials: c.initials,
    size: 56,
    tone: "ink"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)"
    }
  }, c.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, c.stage)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, c.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm"
  }, t))))), /*#__PURE__*/React.createElement(CalloutBox, {
    label: "Next move"
  }, "Send the ledger rewrite brief before Thursday's panel. She asked for it twice."), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "notes",
      label: "Notes",
      count: 4
    }, {
      value: "timeline",
      label: "Timeline"
    }, {
      value: "profile",
      label: "Profile"
    }]
  }), tab === "notes" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    multiline: true,
    rows: 3,
    placeholder: "What stood out.",
    value: note,
    onChange: e => setNote(e.target.value),
    hint: "Visible to your team."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    disabled: !note.trim()
  }, "Save note")), /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)"
    }
  }, /*#__PURE__*/React.createElement(window.Avatar, {
    initials: "SW",
    size: 22
  }), /*#__PURE__*/React.createElement("span", null, "Sam Whitlock, 2 days ago")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-body)"
    }
  }, c.note))) : tab === "timeline" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, window.CANNIE.timeline.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 16,
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "var(--radius-full)",
      background: i === 0 ? "var(--cannie-berry)" : "var(--cannie-taupe)",
      marginTop: 5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 1,
      background: "var(--border-hairline)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-medium)"
    }
  }, t.what), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)"
    }
  }, t.when, ", ", t.who))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    defaultValue: c.name
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Current title",
    defaultValue: c.title
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Stage",
    options: window.CANNIE.stages,
    defaultValue: c.stage
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Details"), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Role"
  }, "Staff Engineer, Payments"), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Source"
  }, "Ordell search"), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Last touch"
  }, c.last), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Owner"
  }, "Sam Whitlock"), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Available"
  }, "March"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }, "Email"), /*#__PURE__*/React.createElement(IconButton, {
    name: "phone",
    label: "Call",
    variant: "secondary",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "star",
    label: "Shortlist",
    variant: "secondary",
    size: "sm"
  })))));
}
Object.assign(window, {
  CandidateScreen,
  DetailRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/CandidateScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/ClientPanel.jsx
try { (() => {
/* Client 360 slide-over: everything Cannie knows about one client's commercial value. */
const {
  Card,
  Button,
  IconButton,
  Badge,
  CalloutBox
} = window.CannieDesignSystem_274f8e;
function PanelStat({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-bold)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value));
}
function ClientPanel({
  name,
  onClose
}) {
  const c = window.CANNIE_DASH.clients[name];
  if (!c) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "flex-end",
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--surface-scrim)"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "relative",
      width: 460,
      background: "var(--surface-page)",
      borderLeft: "1px solid var(--border-hairline)",
      padding: "24px 28px 32px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Client 360"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-caption)"
    }
  }, c.total, " current commercial value")), /*#__PURE__*/React.createElement(IconButton, {
    name: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Commercial area"), c.areas.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.area,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)"
    }
  }, a.area), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)",
      fontVariantNumeric: "tabular-nums"
    }
  }, a.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sand",
    padding: 16,
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Workforce"), /*#__PURE__*/React.createElement(PanelStat, {
    label: "Contractors",
    value: c.workforce.contractors
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PanelStat, {
    label: "Utilisation",
    value: c.workforce.util
  }), /*#__PURE__*/React.createElement(PanelStat, {
    label: "Days",
    value: c.workforce.days
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "sand",
    padding: 16,
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Timesheets"), /*#__PURE__*/React.createElement(PanelStat, {
    label: "Approved",
    value: c.timesheets.approved
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PanelStat, {
    label: "Outstanding",
    value: c.timesheets.outstanding
  }), /*#__PURE__*/React.createElement(PanelStat, {
    label: "Rejected",
    value: c.timesheets.rejected
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Engagements"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, null, c.engagements.active, " active"), /*#__PURE__*/React.createElement(Badge, {
    tone: c.engagements.ending ? "accent" : "quiet"
  }, c.engagements.ending, " ending in 30 days"), /*#__PURE__*/React.createElement(Badge, null, c.engagements.requirements, " new requirement", c.engagements.requirements === 1 ? "" : "s"))), /*#__PURE__*/React.createElement(CalloutBox, {
    label: "Commercial opportunity"
  }, c.opportunity), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Open engagements"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Contractor list"))));
}
Object.assign(window, {
  ClientPanel,
  PanelStat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/ClientPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/DashboardScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Commercial overview: summary, then exception, then click-through. Days, value
   and utilisation are treated as first-class commercial data, not operations. */
const {
  Card,
  Badge,
  Button,
  Icon,
  IconButton,
  CalloutBox
} = window.CannieDesignSystem_274f8e;
const DASH_TONE = {
  accent: "var(--text-accent)",
  neutral: "var(--text-body)",
  quiet: "var(--text-caption)"
};
function SectionHead({
  kicker,
  headline,
  meta,
  onView,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 12,
      paddingBottom: 12,
      borderBottom: `${accent ? "3.4px" : "1px"} solid ${accent ? "var(--rule-color)" : "var(--border-hairline)"}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: accent ? "var(--text-accent)" : "var(--text-kicker)"
    }
  }, kicker), headline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)",
      fontVariantNumeric: "tabular-nums"
    }
  }, headline) : null), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-caption)",
      fontVariantNumeric: "tabular-nums",
      paddingBottom: 2
    }
  }, meta) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), onView ? /*#__PURE__*/React.createElement("button", {
    onClick: onView,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-link)"
    }
  }, "View all", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  })) : null);
}
function StatusRow({
  status,
  count,
  value,
  action,
  tone = "neutral",
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: value !== undefined ? "1fr 54px 68px" : action !== undefined ? "1fr 54px 120px" : "1fr 54px",
      alignItems: "center",
      gap: 10,
      padding: "9px 10px",
      margin: "0 -10px",
      borderRadius: "var(--radius-control)",
      background: hover && onClick ? "var(--surface-hover)" : "transparent",
      cursor: onClick ? "pointer" : "default",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontSize: "var(--text-base)",
      color: DASH_TONE[tone],
      fontWeight: tone === "accent" ? "var(--weight-semibold)" : "var(--weight-regular)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      flex: "0 0 auto",
      borderRadius: "var(--radius-full)",
      background: tone === "accent" ? "var(--accent)" : tone === "quiet" ? "var(--cannie-taupe-deep)" : "var(--cannie-ink)"
    }
  }), status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)",
      fontVariantNumeric: "tabular-nums",
      textAlign: "right"
    }
  }, count), value !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontVariantNumeric: "tabular-nums",
      textAlign: "right",
      color: tone === "accent" ? "var(--text-accent)" : "var(--text-body)"
    }
  }, value) : null, action !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-caption)",
      textAlign: "right"
    }
  }, action || "\u2014") : null);
}
function UtilBar({
  pct,
  height = 8
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: "var(--radius-full)",
      background: "var(--cannie-taupe)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: pct < 60 ? "var(--accent)" : "var(--cannie-ink)"
    }
  }));
}
function KpiBand({
  kpis
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "outline",
    padding: 0,
    style: {
      gap: 0,
      flexDirection: "row",
      overflow: "hidden",
      flex: "0 0 auto"
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: k.label,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "18px 22px",
      borderLeft: i ? "1px solid var(--border-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, k.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-3xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)",
      lineHeight: 1.05,
      fontVariantNumeric: "tabular-nums"
    }
  }, k.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)"
    }
  }, k.note))));
}
function PrioritiesCard({
  items
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "ink",
    padding: 22,
    style: {
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--cannie-taupe)"
    }
  }, "My priorities"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--cannie-berry-soft)",
      fontWeight: "var(--weight-semibold)"
    }
  }, items.length, " actions today")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, items.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.what,
    style: {
      display: "flex",
      gap: 12,
      padding: "11px 0",
      borderTop: i ? "1px solid var(--cannie-ink-line)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      color: "var(--cannie-berry-soft)",
      fontVariantNumeric: "tabular-nums",
      paddingTop: 2
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-medium)",
      lineHeight: "var(--leading-snug)",
      textWrap: "pretty"
    }
  }, p.what), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--cannie-bone-a70)"
    }
  }, p.why, " \xB7 ", p.client))))));
}
function AtRiskCard({
  atRisk
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "sand",
    padding: 22,
    style: {
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Revenue at risk"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "This month")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-4xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)",
      lineHeight: 1,
      color: "var(--text-accent)",
      fontVariantNumeric: "tabular-nums"
    }
  }, atRisk.total), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, atRisk.lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.what,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 0",
      borderTop: "1px solid var(--cannie-taupe)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      flex: 1,
      lineHeight: "var(--leading-snug)"
    }
  }, l.what), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)",
      fontVariantNumeric: "tabular-nums"
    }
  }, l.value)))));
}
function EngagementsCard({
  e,
  onView
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Engagements in play",
    headline: e.count + " active",
    meta: e.value + " potential and current value",
    onView: onView,
    accent: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 54px 68px",
      gap: 10,
      padding: "0 0 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)",
      textAlign: "right"
    }
  }, "No."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)",
      textAlign: "right"
    }
  }, "Value")), e.rows.map(r => /*#__PURE__*/React.createElement(StatusRow, _extends({
    key: r.status
  }, r, {
    onClick: onView
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-caption)",
      lineHeight: "var(--leading-body)",
      textWrap: "pretty"
    }
  }, "Perm, contract, SOW, extension and new requirement all count as engagements, so one number covers the desk."));
}
function SowCard({
  s,
  onView
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Statements of work",
    headline: s.count + " active",
    meta: s.value,
    onView: onView
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, s.rows.map(r => /*#__PURE__*/React.createElement(StatusRow, {
    key: r.status,
    status: r.status,
    count: r.count,
    tone: r.tone,
    onClick: onView
  }))), /*#__PURE__*/React.createElement(CalloutBox, {
    label: "Sales action, not a statistic"
  }, s.opportunity));
}
function UtilisationCard({
  u,
  onClient
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Contractor utilisation",
    headline: u.overall + "% overall",
    meta: u.contractors + " contractors · " + u.days + " contracted days · " + u.value,
    onView: () => onClient("Acme")
  }), /*#__PURE__*/React.createElement(UtilBar, {
    pct: u.overall,
    height: 10
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 110px 78px 88px 130px",
      gap: 12,
      padding: "0 0 8px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, ["Client", "Heads", "Days", "Value", "Utilisation"].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)",
      textAlign: i ? "right" : "left"
    }
  }, h))), u.clients.map(c => /*#__PURE__*/React.createElement(window.UtilRow, {
    key: c.name,
    c: c,
    onClick: () => onClient(c.name)
  }))));
}
function UtilRow({
  c,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 110px 78px 88px 130px",
      alignItems: "center",
      gap: 12,
      padding: "11px 10px",
      margin: "0 -10px",
      borderRadius: "var(--radius-control)",
      borderBottom: "1px solid var(--border-hairline)",
      background: hover ? "var(--surface-hover)" : "transparent",
      cursor: "pointer",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)"
    }
  }, c.name, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    style: {
      opacity: hover ? 0.7 : 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, c.contractors), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, c.days), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, c.value), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(UtilBar, {
    pct: c.util
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)",
      fontVariantNumeric: "tabular-nums",
      width: 38,
      textAlign: "right"
    }
  }, c.util, "%")));
}
function AlertsCard({
  groups
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Contractor alerts",
    headline: "Bench risk and extensions",
    onView: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: DASH_TONE[g.tone]
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: g.tone === "accent" ? "var(--accent)" : g.tone === "quiet" ? "var(--cannie-taupe-deep)" : "var(--cannie-ink)"
    }
  }), g.group), g.items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "var(--text-base)",
      paddingLeft: 14,
      lineHeight: "var(--leading-snug)"
    }
  }, i))))));
}
function TimesheetsCard({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Timesheets",
    headline: t.total + " this period",
    meta: t.rate + " approval rate",
    onView: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, t.rows.map(r => /*#__PURE__*/React.createElement(StatusRow, {
    key: r.status,
    status: r.status,
    count: r.count,
    action: r.action,
    tone: r.tone,
    onClick: () => {}
  }))), /*#__PURE__*/React.createElement(CalloutBox, {
    label: "Exceptions"
  }, t.exceptions));
}
function PipelineStrip({
  stages
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Sales pipeline",
    headline: "52 open opportunities",
    onView: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: 8
    }
  }, stages.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.stage,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: "var(--radius-full)",
      background: i === stages.length - 1 ? "var(--accent)" : "var(--cannie-ink)",
      opacity: i === stages.length - 1 ? 1 : 0.18 + i * 0.12
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, s.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-bold)",
      fontVariantNumeric: "tabular-nums",
      lineHeight: 1
    }
  }, s.count)))));
}
function ClientPerformance({
  rows,
  onClient
}) {
  const cols = "1fr 90px 108px 76px 108px 96px";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Client performance",
    headline: "Four clients on the desk",
    onView: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: cols,
      gap: 12,
      padding: "0 0 8px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, ["Client", "Perm", "Contract", "Days", "Heads", "Total"].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)",
      textAlign: i ? "right" : "left"
    }
  }, h))), rows.map(r => /*#__PURE__*/React.createElement(window.PerfRow, {
    key: r.name,
    r: r,
    cols: cols,
    onClick: () => onClient(r.name)
  }))));
}
function PerfRow({
  r,
  cols,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: cols,
      alignItems: "center",
      gap: 12,
      padding: "11px 10px",
      margin: "0 -10px",
      borderRadius: "var(--radius-control)",
      borderBottom: "1px solid var(--border-hairline)",
      background: hover ? "var(--surface-hover)" : "transparent",
      cursor: "pointer",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)"
    }
  }, r.name), [r.perm, r.contract, r.days, r.contractors].map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "var(--text-base)",
      textAlign: "right",
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-body)"
    }
  }, v)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-bold)",
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, r.total));
}
function DashboardScreen({
  onNavigate
}) {
  const d = window.CANNIE_DASH;
  const [client, setClient] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      flex: 1,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    title: "Commercial overview",
    subtitle: d.period + " · Halden desk",
    actions: /*#__PURE__*/React.createElement(Button, {
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 18
      })
    }, "New engagement")
  }), /*#__PURE__*/React.createElement("div", {
    className: "cannie-dash-scroll",
    style: {
      padding: "24px 32px 48px",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 30,
      flex: "1 1 auto",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(KpiBand, {
    kpis: d.kpis
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: 24,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PrioritiesCard, {
    items: d.priorities
  }), /*#__PURE__*/React.createElement(AtRiskCard, {
    atRisk: d.atRisk
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(EngagementsCard, {
    e: d.engagements,
    onView: () => onNavigate("pipeline")
  }), /*#__PURE__*/React.createElement(SowCard, {
    s: d.sows,
    onView: () => onNavigate("pipeline")
  })), /*#__PURE__*/React.createElement(UtilisationCard, {
    u: d.utilisation,
    onClient: setClient
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(TimesheetsCard, {
    t: d.timesheets
  }), /*#__PURE__*/React.createElement(AlertsCard, {
    groups: d.contractorAlerts
  })), /*#__PURE__*/React.createElement(PipelineStrip, {
    stages: d.pipeline
  }), /*#__PURE__*/React.createElement(ClientPerformance, {
    rows: d.clientPerformance,
    onClient: setClient
  })), client ? /*#__PURE__*/React.createElement(window.ClientPanel, {
    name: client,
    onClose: () => setClient(null)
  }) : null);
}
Object.assign(window, {
  DashboardScreen,
  SectionHead,
  StatusRow,
  UtilBar,
  KpiBand,
  PrioritiesCard,
  AtRiskCard,
  EngagementsCard,
  SowCard,
  UtilisationCard,
  UtilRow,
  AlertsCard,
  TimesheetsCard,
  PipelineStrip,
  ClientPerformance,
  PerfRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/LoginScreen.jsx
try { (() => {
/* Sign in: bone form panel, ink statement panel. Everything left aligned. */
const {
  Lockup,
  Button,
  Input,
  Checkbox,
  Icon
} = window.CannieDesignSystem_274f8e;
function LoginScreen({
  onSignIn
}) {
  const [email, setEmail] = React.useState("sam@halden.co");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      width: "100%",
      height: "100%",
      background: "var(--cannie-bone)",
      color: "var(--text-body)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "56px 72px"
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    height: 32
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)",
      lineHeight: 1.1
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-base)",
      color: "var(--text-caption)",
      lineHeight: "var(--leading-body)"
    }
  }, "Your desk is where you left it.")), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    defaultValue: "............"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Keep me signed in",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "var(--text-sm)"
    }
  }, "Forgot password")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    onClick: onSignIn
  }, "Sign in")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)"
    }
  }, "Cannie, version alpha")), /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark",
    style: {
      background: "var(--cannie-ink)",
      color: "var(--cannie-bone)",
      padding: "56px 64px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Why it exists"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 52,
      height: "var(--rule-height)",
      background: "var(--rule-color)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 34,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-title)",
      lineHeight: 1.18,
      maxWidth: 460,
      textWrap: "pretty"
    }
  }, "A recruiter's working memory, not another database to feed."), /*#__PURE__*/React.createElement(Lockup, {
    variant: "mark",
    tone: "dark",
    height: 40
  })));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/PipelineScreen.jsx
try { (() => {
/* Pipeline board: one column per stage, candidate cards, drag-free. */
const {
  Card,
  Badge,
  Tag,
  Button,
  Icon,
  IconButton
} = window.CannieDesignSystem_274f8e;
function CandidateCard({
  c,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "outline",
    interactive: true,
    padding: 14,
    onClick: () => onOpen(c),
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(window.Avatar, {
    initials: c.initials,
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)"
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, c.title, ", ", c.company))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, c.tags.slice(0, 2).map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-2xs)",
      color: "var(--text-caption)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, "Last touch ", c.last)));
}
function StageColumn({
  stage,
  items,
  accent,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      paddingBottom: 12,
      borderBottom: `${accent ? "3.4px" : "1px"} solid ${accent ? "var(--rule-color)" : "var(--border-hairline)"}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: accent ? "var(--text-accent)" : "var(--text-kicker)"
    }
  }, stage), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)",
      fontVariantNumeric: "tabular-nums"
    }
  }, items.length), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "plus",
    label: "Add to " + stage,
    size: "sm"
  })), items.length ? items.map(c => /*#__PURE__*/React.createElement(CandidateCard, {
    key: c.id,
    c: c,
    onOpen: onOpen
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 0",
      fontSize: "var(--text-sm)",
      color: "var(--text-caption)",
      lineHeight: "var(--leading-body)",
      textWrap: "pretty"
    }
  }, "No one here yet. Move a candidate across when the first call is booked."));
}
function PipelineScreen({
  onOpen,
  onAdd
}) {
  const {
    stages,
    candidates
  } = window.CANNIE;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    title: "Halden, Staff Engineer",
    subtitle: "Six live candidates, twelve days open",
    actions: /*#__PURE__*/React.createElement(Button, {
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 18
      }),
      onClick: onAdd
    }, "Add candidate")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 32px 40px",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      alignItems: "start"
    }
  }, stages.map(s => /*#__PURE__*/React.createElement(StageColumn, {
    key: s,
    stage: s,
    accent: s === "Interviewing",
    items: candidates.filter(c => c.stage === s),
    onOpen: onOpen
  })))));
}
Object.assign(window, {
  CandidateCard,
  StageColumn,
  PipelineScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/PipelineScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/SearchScreen.jsx
try { (() => {
/* Search: filter rail plus result rows. Exercises every form primitive. */
const {
  Card,
  Badge,
  Tag,
  Button,
  Icon,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tooltip,
  IconButton
} = window.CannieDesignSystem_274f8e;
function ResultRow({
  c,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(c),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1.4fr 1fr auto auto",
      gap: 20,
      alignItems: "center",
      padding: "14px 16px",
      borderRadius: "var(--radius-control)",
      background: hover ? "var(--surface-hover)" : "transparent",
      cursor: "pointer",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement(window.Avatar, {
    initials: c.initials,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)"
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)"
    }
  }, c.title, ", ", c.company)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, c.tags.slice(0, 2).map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm"
  }, t))), /*#__PURE__*/React.createElement(Badge, {
    tone: c.stage === "Offer" ? "solid" : c.stage === "Interviewing" ? "accent" : "quiet"
  }, c.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-caption)",
      width: 84,
      textAlign: "right"
    }
  }, c.last));
}
function SearchScreen({
  onOpen
}) {
  const [q, setQ] = React.useState("");
  const [mode, setMode] = React.useState("all");
  const [remoteOnly, setRemoteOnly] = React.useState(false);
  const all = window.CANNIE.candidates;
  const results = all.filter(c => {
    const text = (c.name + c.title + c.company + c.tags.join(" ")).toLowerCase();
    if (q && !text.includes(q.toLowerCase())) return false;
    if (mode === "active" && c.stage === "Sourced") return false;
    if (remoteOnly && !c.tags.includes("Remote")) return false;
    return true;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    title: "Search",
    subtitle: "Everyone on your desk, in one place"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      gap: 32,
      padding: "26px 32px 40px",
      overflow: "auto",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-kicker)"
    }
  }, "Filters"), /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Name, skill, company",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Role",
    options: ["All roles", "Staff Engineer, Payments", "Head of Design", "Data Lead"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "scope",
    value: "all",
    checked: mode === "all",
    onChange: setMode,
    label: "Everyone"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "scope",
    value: "active",
    checked: mode === "active",
    onChange: setMode,
    label: "In play only",
    description: "Excludes sourced."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Open to relocation"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Replied in 30 days",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Remote only",
    checked: remoteOnly,
    onChange: setRemoteOnly
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "bookmark",
      size: 16
    })
  }, "Save this search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "0 16px 12px",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-caption)"
    }
  }, results.length, " of ", all.length, " candidates"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Sort by last touch"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "arrow-up-down",
    label: "Sort",
    size: "sm"
  }))), results.length ? results.map(c => /*#__PURE__*/React.createElement(ResultRow, {
    key: c.id,
    c: c,
    onOpen: onOpen
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 16px",
      maxWidth: 380,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search-x",
    size: 24,
    color: "var(--text-caption)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-semibold)"
    }
  }, "Nobody matches that yet."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-caption)",
      lineHeight: "var(--leading-body)"
    }
  }, "Widen the filters, or add someone from a search.")))));
}
Object.assign(window, {
  SearchScreen,
  ResultRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/SearchScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/SettingsScreen.jsx
try { (() => {
/* Settings: a plain two-column form. Left aligned, generous vertical rhythm. */
const {
  Card,
  Button,
  Input,
  Select,
  Switch,
  Radio,
  Tabs,
  CalloutBox
} = window.CannieDesignSystem_274f8e;
function Section({
  label,
  description,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr",
      gap: 40,
      paddingBottom: 40,
      borderBottom: "1px solid var(--border-hairline)",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-semibold)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-caption)",
      lineHeight: "var(--leading-body)",
      textWrap: "pretty"
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      maxWidth: 460
    }
  }, children));
}
function SettingsScreen() {
  const [digest, setDigest] = React.useState("monday");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    title: "Settings",
    subtitle: "Your desk, your rules",
    actions: /*#__PURE__*/React.createElement(Button, null, "Save changes")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 32px 40px",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Profile", "Notifications", "Team", "Billing"],
    defaultValue: "Notifications",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement(Section, {
    label: "Follow-up",
    description: "Cannie nudges you when a conversation goes quiet. Set the threshold that matches your desk."
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Nudge me after",
    options: ["3 days of silence", "5 days of silence", "7 days of silence"]
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Nudge on stalled offers",
    description: "Regardless of the threshold above.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Nudge on weekends"
  })), /*#__PURE__*/React.createElement(Section, {
    label: "Digest",
    description: "One email, no more. It lists what moved and what is about to go stale."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "d",
    value: "monday",
    checked: digest === "monday",
    onChange: setDigest,
    label: "Monday morning",
    description: "Sent at 8am in your timezone."
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "d",
    value: "daily",
    checked: digest === "daily",
    onChange: setDigest,
    label: "Every weekday"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "d",
    value: "off",
    checked: digest === "off",
    onChange: setDigest,
    label: "Off"
  }))), /*#__PURE__*/React.createElement(Section, {
    label: "Account",
    description: "Used on intro notes and anywhere a candidate sees your name."
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Display name",
    defaultValue: "Sam Whitlock"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Reply-to address",
    defaultValue: "sam@halden.co",
    hint: "Candidates reply here, not to Cannie."
  }), /*#__PURE__*/React.createElement(CalloutBox, {
    label: "Note"
  }, "Deleting a desk keeps its candidates in the company pool. Nothing about a person is lost when a role closes."))));
}
Object.assign(window, {
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/app.jsx
try { (() => {
/* Root of the Cannie app kit. Fake state, real interactions: sign in, navigate,
   open a candidate, add one, move a stage, dismiss a toast. */
const {
  Button,
  Dialog,
  Toast,
  Input,
  Select,
  Icon
} = window.CannieDesignSystem_274f8e;
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [screen, setScreen] = React.useState("dashboard");
  const [candidate, setCandidate] = React.useState(null);
  const [adding, setAdding] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const say = msg => {
    setToast(msg);
    window.clearTimeout(say._t);
    say._t = window.setTimeout(() => setToast(null), 4200);
  };
  const open = c => {
    setCandidate(c);
    setScreen("candidate");
  };
  if (!authed) return /*#__PURE__*/React.createElement(window.LoginScreen, {
    onSignIn: () => setAuthed(true)
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      height: "100%",
      background: "var(--cannie-bone)",
      color: "var(--text-body)",
      fontFamily: "var(--font-sans)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(window.Sidebar, {
    screen: screen,
    onNavigate: s => {
      setScreen(s);
      if (s === "candidate" && !candidate) setCandidate(window.CANNIE.candidates[0]);
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, screen === "dashboard" ? /*#__PURE__*/React.createElement(window.DashboardScreen, {
    onNavigate: setScreen
  }) : screen === "pipeline" ? /*#__PURE__*/React.createElement(window.PipelineScreen, {
    onOpen: open,
    onAdd: () => setAdding(true)
  }) : screen === "candidate" ? /*#__PURE__*/React.createElement(window.CandidateScreen, {
    candidate: candidate,
    onBack: () => setScreen("pipeline"),
    onMove: () => say((candidate || window.CANNIE.candidates[0]).name.split(" ")[0] + " moved to Offer.")
  }) : screen === "search" ? /*#__PURE__*/React.createElement(window.SearchScreen, {
    onOpen: open
  }) : /*#__PURE__*/React.createElement(window.SettingsScreen, null)), /*#__PURE__*/React.createElement(Dialog, {
    open: adding,
    onClose: () => setAdding(false),
    title: "Add candidate",
    description: "They join Sourced. Nothing is sent until you write the intro.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setAdding(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setAdding(false);
        say("Candidate added to Sourced.");
      }
    }, "Add to pipeline"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Priya Raman"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Current title",
    placeholder: "Staff Engineer, Ordell"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Role",
    options: ["Staff Engineer, Payments", "Head of Design", "Data Lead"]
  }))), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 264,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    icon: "check",
    action: "Undo",
    onAction: () => setToast(null),
    onDismiss: () => setToast(null)
  }, toast)) : null);
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/dashboard-data.js
try { (() => {
/* Commercial dashboard data. Fake agency, no real people or clients. */
window.CANNIE_DASH = {
  period: "September, week 2",
  kpis: [{
    label: "Revenue",
    value: "£84.5k",
    note: "month to date"
  }, {
    label: "Forecast",
    value: "£112k",
    note: "£13k under target"
  }, {
    label: "Target",
    value: "£125k",
    note: "month"
  }, {
    label: "Pipeline",
    value: "£386k",
    note: "28 engagements"
  }, {
    label: "Contract revenue",
    value: "£142k",
    note: "MTD, recurring"
  }],
  priorities: [{
    what: "Alex Taylor ends in 28 days at 96% utilisation",
    why: "Extension worth £21k",
    client: "Acme"
  }, {
    what: "Seven contractors missed this week's timesheet",
    why: "£18.4k unbilled",
    client: "Across 3 clients"
  }, {
    what: "Globex SOW expires in 19 days, unsigned renewal",
    why: "£46k at risk",
    client: "Globex"
  }],
  atRisk: {
    total: "£47.5k",
    lines: [{
      what: "SOWs expiring, unsigned",
      value: "£46k"
    }, {
      what: "Contractors below 60% utilisation",
      value: "£9.2k"
    }, {
      what: "Rejected timesheets unresolved",
      value: "£1.4k"
    }]
  },
  engagements: {
    count: 28,
    value: "£386k",
    rows: [{
      status: "New",
      count: 8,
      value: "£94k",
      tone: "neutral"
    }, {
      status: "Active",
      count: 14,
      value: "£182k",
      tone: "neutral"
    }, {
      status: "Extension opportunity",
      count: 4,
      value: "£68k",
      tone: "accent"
    }, {
      status: "At risk",
      count: 2,
      value: "£42k",
      tone: "accent"
    }]
  },
  sows: {
    count: 18,
    value: "£264k",
    rows: [{
      status: "Active",
      count: 11,
      tone: "quiet"
    }, {
      status: "Pending approval",
      count: 2,
      tone: "neutral"
    }, {
      status: "Draft",
      count: 3,
      tone: "neutral"
    }, {
      status: "Expiring",
      count: 2,
      tone: "accent"
    }],
    opportunity: "Three SOWs have under 30 days remaining, worth £48,000 in extensions."
  },
  utilisation: {
    overall: 84,
    contractors: 126,
    days: "1,420",
    value: "£426k",
    clients: [{
      name: "Acme",
      contractors: 18,
      days: 240,
      value: "£72k",
      util: 91
    }, {
      name: "Smith & Co",
      contractors: 14,
      days: 190,
      value: "£61k",
      util: 94
    }, {
      name: "ABC",
      contractors: 11,
      days: 164,
      value: "£51k",
      util: 87
    }, {
      name: "Globex",
      contractors: 9,
      days: 132,
      value: "£42k",
      util: 76
    }]
  },
  contractorAlerts: [{
    group: "Below 60%",
    tone: "accent",
    items: ["John Smith, 42%", "Jane Brown, 55%", "David Jones, 58%"]
  }, {
    group: "Ending soon",
    tone: "neutral",
    items: ["Sarah White, 14 days", "Mark Green, 21 days"]
  }, {
    group: "Extension opportunity",
    tone: "quiet",
    items: ["Alex Taylor, 96% and ends in 28 days"]
  }],
  timesheets: {
    total: 637,
    rows: [{
      status: "Outstanding",
      count: 24,
      action: "Chase",
      tone: "accent"
    }, {
      status: "Submitted",
      count: 118,
      action: "Await approval",
      tone: "neutral"
    }, {
      status: "Approved",
      count: 486,
      action: "",
      tone: "quiet"
    }, {
      status: "Rejected",
      count: 9,
      action: "Resolve",
      tone: "accent"
    }],
    rate: "93%",
    exceptions: "Seven contractors missed this week. Four sit with clients awaiting approval."
  },
  pipeline: [{
    stage: "New",
    count: 12
  }, {
    stage: "Qualified",
    count: 9
  }, {
    stage: "Brief",
    count: 7
  }, {
    stage: "Candidates",
    count: 11
  }, {
    stage: "Interview",
    count: 6
  }, {
    stage: "Offer",
    count: 3
  }, {
    stage: "Won",
    count: 4
  }],
  clients: {
    Acme: {
      total: "£96k",
      areas: [{
        area: "Permanent placements",
        value: "£24k"
      }, {
        area: "Contractors",
        value: "£72k"
      }, {
        area: "Open engagements",
        value: "£38k"
      }, {
        area: "Potential extensions",
        value: "£21k"
      }, {
        area: "SOWs",
        value: "£46k"
      }],
      workforce: {
        contractors: 18,
        util: "91%",
        days: 240
      },
      timesheets: {
        approved: "96%",
        outstanding: 2,
        rejected: 1
      },
      engagements: {
        active: 6,
        ending: 2,
        requirements: 1
      },
      opportunity: "£21k of extension revenue. Three contractors end within 45 days.",
      perm: "£24k",
      contract: "£72k"
    },
    "Smith & Co": {
      total: "£61k",
      perm: "£0k",
      contract: "£61k",
      areas: [{
        area: "Contractors",
        value: "£61k"
      }, {
        area: "SOWs",
        value: "£38k"
      }, {
        area: "Potential extensions",
        value: "£14k"
      }],
      workforce: {
        contractors: 14,
        util: "94%",
        days: 190
      },
      timesheets: {
        approved: "98%",
        outstanding: 0,
        rejected: 0
      },
      engagements: {
        active: 4,
        ending: 1,
        requirements: 2
      },
      opportunity: "Highest utilisation on the desk. Two new requirements unfilled."
    },
    ABC: {
      total: "£63k",
      perm: "£12k",
      contract: "£51k",
      areas: [{
        area: "Permanent placements",
        value: "£12k"
      }, {
        area: "Contractors",
        value: "£51k"
      }, {
        area: "Open engagements",
        value: "£22k"
      }, {
        area: "SOWs",
        value: "£31k"
      }],
      workforce: {
        contractors: 11,
        util: "87%",
        days: 164
      },
      timesheets: {
        approved: "94%",
        outstanding: 3,
        rejected: 2
      },
      engagements: {
        active: 3,
        ending: 0,
        requirements: 1
      },
      opportunity: "Steady. Two rejected timesheets to resolve before invoicing."
    },
    Globex: {
      total: "£60k",
      perm: "£18k",
      contract: "£42k",
      areas: [{
        area: "Permanent placements",
        value: "£18k"
      }, {
        area: "Contractors",
        value: "£42k"
      }, {
        area: "Open engagements",
        value: "£16k"
      }, {
        area: "SOWs",
        value: "£46k"
      }],
      workforce: {
        contractors: 9,
        util: "76%",
        days: 132
      },
      timesheets: {
        approved: "89%",
        outstanding: 6,
        rejected: 4
      },
      engagements: {
        active: 3,
        ending: 2,
        requirements: 0
      },
      opportunity: "SOW expires in 19 days and the renewal is unsigned. £46k at risk."
    }
  },
  clientPerformance: [{
    name: "Acme",
    perm: "£24k",
    contract: "£72k",
    days: 240,
    contractors: 18,
    total: "£96k"
  }, {
    name: "ABC",
    perm: "£12k",
    contract: "£51k",
    days: 164,
    contractors: 11,
    total: "£63k"
  }, {
    name: "Globex",
    perm: "£18k",
    contract: "£42k",
    days: 132,
    contractors: 9,
    total: "£60k"
  }, {
    name: "Smith & Co",
    perm: "£0k",
    contract: "£61k",
    days: 190,
    contractors: 14,
    total: "£61k"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/dashboard-data.js", error: String((e && e.message) || e) }); }

// ui_kits/cannie-app/data.js
try { (() => {
/* Fake data for the Cannie app kit. No real people. */
window.CANNIE = {
  stages: ["Sourced", "Screening", "Interviewing", "Offer"],
  roles: [{
    id: "r1",
    title: "Staff Engineer, Payments",
    company: "Halden",
    live: 6,
    days: 12
  }, {
    id: "r2",
    title: "Head of Design",
    company: "Marrow",
    live: 4,
    days: 3
  }, {
    id: "r3",
    title: "Data Lead",
    company: "Kessel",
    live: 4,
    days: 21
  }],
  candidates: [{
    id: "c1",
    name: "Priya Raman",
    title: "Staff Engineer",
    company: "Ordell",
    stage: "Interviewing",
    role: "r1",
    tags: ["Python", "Payments", "Remote"],
    last: "2 days ago",
    note: "Wants ownership of the ledger rewrite. Available from March.",
    initials: "PR"
  }, {
    id: "c2",
    name: "Tomas Lindqvist",
    title: "Principal Engineer",
    company: "Vantive",
    stage: "Screening",
    role: "r1",
    tags: ["Go", "Infra"],
    last: "5 hours ago",
    note: "Screening call booked for Thursday.",
    initials: "TL"
  }, {
    id: "c3",
    name: "Ada Nwosu",
    title: "Design Director",
    company: "Fold",
    stage: "Offer",
    role: "r2",
    tags: ["Systems", "B2B"],
    last: "yesterday",
    note: "Offer out. Counter expected.",
    initials: "AN"
  }, {
    id: "c4",
    name: "Marek Kowal",
    title: "Senior Engineer",
    company: "Brightwell",
    stage: "Sourced",
    role: "r1",
    tags: ["Rust", "Berlin"],
    last: "1 week ago",
    note: "No reply to the first note.",
    initials: "MK"
  }, {
    id: "c5",
    name: "Ines Duarte",
    title: "Product Designer",
    company: "Cadence",
    stage: "Screening",
    role: "r2",
    tags: ["Research", "Lisbon"],
    last: "3 days ago",
    note: "Portfolio is strong on systems work.",
    initials: "ID"
  }, {
    id: "c6",
    name: "Ravi Chandra",
    title: "Analytics Lead",
    company: "Northbeam",
    stage: "Sourced",
    role: "r3",
    tags: ["SQL", "dbt"],
    last: "4 days ago",
    note: "Intro from Ada.",
    initials: "RC"
  }, {
    id: "c7",
    name: "Elena Fischer",
    title: "Staff Data Scientist",
    company: "Kessel",
    stage: "Interviewing",
    role: "r3",
    tags: ["ML", "Zurich"],
    last: "today",
    note: "Panel on Friday, needs the brief.",
    initials: "EF"
  }, {
    id: "c8",
    name: "Joon Park",
    title: "Engineering Manager",
    company: "Sable",
    stage: "Sourced",
    role: "r1",
    tags: ["Leadership"],
    last: "2 weeks ago",
    note: "Not looking until Q3.",
    initials: "JP"
  }],
  timeline: [{
    when: "Today, 09:12",
    what: "Moved to Interviewing",
    who: "You"
  }, {
    when: "Yesterday, 16:40",
    what: "Screening call, 35 minutes",
    who: "You"
  }, {
    when: "Mon, 11:02",
    what: "Replied to intro note",
    who: "Priya"
  }, {
    when: "Last Thu, 08:30",
    what: "Added from Ordell search",
    who: "You"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannie-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.AppIcon = __ds_scope.AppIcon;

__ds_ns.CalloutBox = __ds_scope.CalloutBox;

__ds_ns.IsIsNotPair = __ds_scope.IsIsNotPair;

__ds_ns.KickerBlock = __ds_scope.KickerBlock;

__ds_ns.Lockup = __ds_scope.Lockup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
