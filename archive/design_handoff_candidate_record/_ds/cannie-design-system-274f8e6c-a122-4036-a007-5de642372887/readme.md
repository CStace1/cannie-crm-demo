# Cannie Design System

Cannie is a recruitment CRM. The brand reads as quiet self-assurance carrying a bold claim: conviction without volume, no gimmicks, no generic SaaS boilerplate. It is built on warm neutrals with a single considered accent per background, and it is anchored by the "single kink" mark, a line that bends once and lands in a solid dot.

This system is the working reference for anyone designing Cannie surfaces: product screens, decks, marketing pages, icons.

## Sources

Everything here derives from two things the brand team supplied, and nothing else:

1. `uploads/DESIGN-cannie.md`, the brand definition (version: alpha). Colour values, typography scale, mark rules, component definitions, do's and don'ts, and a layout reference section.
2. Nineteen production SVGs: lockups, wordmarks, marks, app icon, and favicons at 16 and 32 in light, dark, and mono cuts. All copied unmodified into `assets/logo/`.

No codebase, Figma file, deck, or product screenshot was provided. That matters for how you read this document, so it is worth stating plainly:

- Foundations (colour, type, mark, spacing, the deck components) are **specified by the brand doc**. Treat them as settled.
- The app UI primitives and the recruitment CRM UI kit are **extrapolations**. No Cannie product screens exist in the sources. They are built strictly from the brand doc's rules and are marked as such below. Replace them with the real thing the moment product source becomes available.

### Two contradictions in the brand doc, and how they were resolved

`DESIGN-cannie.md` carries a stale "resolved questions" list at the bottom that disagrees with its own body and with the shipped artwork. The artwork wins in both cases.

| Question | Stale note says | Body of the doc says | Artwork shows | Resolution |
| --- | --- | --- | --- | --- |
| Title and wordmark face | Plus Jakarta Sans | Poppins, no separate display face, "CONFIRMED" | `font-family="Poppins" font-weight="700"` in every lockup SVG | **Poppins** |
| Mark bend | Rounded single kink | Sharp miter, butt cap, "FINALIZED, locked" | Straight segments, sharp corner, flat tail | **Sharp miter** |

If the brand team intended otherwise, this is the first thing to correct.

## Content fundamentals

**Voice.** Plain, declarative, unhurried. Cannie states things rather than selling them. The register is a good operator talking to another good operator, not a marketing department talking to a market.

**Naming and titles.** Titles are worded plainly. "Origin", not "The Moment of Conviction". "Pipeline", not "Your Talent Command Center". If a title sounds like it was workshopped, rewrite it.

**Person.** Second person for the user's own things ("your pipeline", "your desk"), first person plural almost never. Cannie does not say "we" at the user; the product speaks about the work, not about itself.

**Casing.** Sentence case for everything readable: titles, buttons, labels, menu items, dialog headings. Uppercase is reserved for one element only, the kicker, where it comes with 0.364em tracking. "Cannie" is always capitalised, in every context, including the wordmark itself. This deliberately overrides the lowercase-wordmark convention common in this design space.

**Punctuation, the hard rule.** Periods, colons, commas, and parentheses stay. **Em dashes are banned outright, anywhere, ever.** This is a house rule, not a style preference. Rewrite the sentence or use a comma. Semicolons are unusual but not banned.

**Emoji.** Never. Not in product, not in decks, not in marketing, not as a bullet, not as a status marker.

**Emphasis discipline.** One accent-coloured sentence per view, the "stakes" line. If everything is emphasised, nothing is. The same discipline governs badges, callouts, and primary buttons: one live thing at a time.

**Length.** Short. A caption is a line. A tooltip is two or three words. A toast is one past-tense sentence naming what it acted on: "Priya moved to Interviewing." A dialog description is one sentence stating the consequence.

**Examples in the house voice**

- Button: "Add candidate", "Send intro", "Save search". Not "Submit", not "ADD CANDIDATE".
- Empty state: "No one is in Screening yet. Move a candidate here when the first call is booked."
- Error: "That address is already on this role." Not "Invalid input", not "Oops, something went wrong."
- Kicker: "01 - Foundation", "Pipeline", "This week".
- Positioning: "Cannie is a recruiter's working memory." Not "Cannie is the AI-powered platform that revolutionises hiring."

## Visual foundations

**Colour.** Six brand values, no more. Ink `#2B211B`, bone `#F3EEE6`, sand `#EFE7DA`, taupe `#D9CFC0`, berry `#9E2D53`, soft berry `#E896B3`. Berry is the only accent on light surfaces, soft berry the only accent on ink, and the two are never mixed on one background. Soft berry exists precisely so nobody lightens berry to make it work on dark: an earlier rust-based iteration did that and drifted toward salmon. **No grey in any form and no navy, anywhere.** Every neutral in this system is warm and ink-derived, which is why `--surface-hover` is ink at 5% rather than a neutral tint. There is also no pure white: bone is the lightest surface in the system.

**No semantic colour scale.** Cannie has no red, amber, or green. Pipeline stage, validation errors, success, and destructive intent are all carried by words, weight, and position instead. Errors take the accent because it is the only signal colour available, which is another reason to spend the accent carefully. If you find yourself wanting a green tick, write a clearer sentence.

**Type.** One family, Poppins, in four weights. No separate display face: titles differ from body by size and weight only, and that decision survived two attempts to introduce one. Titles are 700 with -0.0075em tracking, the exact value measured off the supplied lockup. Body is 400 at 1.3 line height. The kicker is the only uppercase element, at 700 with 0.364em tracking. The deck runs on a point-derived scale (40pt titles, 22pt lede, 14 to 17pt body); the app runs on a px scale with 15px as the default body size.

**Alignment.** Left, always, everywhere, including covers and closing slides. Centring is treated as a default to actively avoid, not a case-by-case choice. Right alignment appears only for numeric table columns and dialog action rows.

**Spacing.** A 4px base that opens out fast: 4, 8, 12, 16, 24, 32, 40, 56, 72, 96, 128. Sections breathe considerably more than a typical SaaS layout; 56px is the floor between major blocks and 96px is not excessive on a marketing surface. When you are unsure, take the next step up. The deck margin is 0.7in, which is 67.2px at 1280x720.

**Hierarchy discipline.** Typically only two text sizes are visible at once in a given block: a name-level size and a caption-level size. Emphasis comes from spacing and scale, not from adding a third size or weight into the mix.

**Backgrounds.** Flat warm fills. No gradients of any kind, no photographic hero images in the supplied material, no repeating patterns, no textures, no grain, no noise overlays. A "background treatment" in this system means choosing between bone, sand, taupe, and ink. Full-bleed elements exist (ink sections, cover slides) and are never rounded.

**Cards.** Sand fill, 14px radius, no border and no shadow. The alternative is bone with a 1px taupe hairline. The separator between things is whitespace first, a hairline second, a fill third. Never a shadow, never a coloured left border, never a gradient.

**Borders.** 1px taupe for hairlines, taupe-deep for anything that needs to read as an edge (input borders, secondary buttons), berry for focus and selection. Rules under kickers and tab underlines are 3.4px (0.035in), the one heavy line in the system.

**Shadows.** Reserved for layers that genuinely float: dialog, popover, dropdown, toast. Always warm ink, never neutral black. Inline surfaces cast nothing.

**Transparency and blur.** Sparing. Ink alphas (5%, 10%, 16%) carry hover and press states; ink at 55% is the modal scrim, with a 3px backdrop blur. No frosted-glass panels, no translucent navigation bars, no blurred imagery.

**Hover, press, focus.** Hover on filled controls goes one step darker (berry to berry-deep); on quiet controls it fills with ink at 5%. Press adds ink at 10% and a 0.985 scale, a compression rather than a lift. Focus is a 2px berry ring offset by 2px of page colour, never a browser default outline. Disabled is 45% opacity with no colour change.

**Motion.** Not specified in the brand doc, so this is an extrapolation from the brand's register and should be reviewed. Everything eases out on `cubic-bezier(.2, 0, 0, 1)`. Durations are 120ms for state changes, 180ms for small reveals, 260ms for panels and dialogs. Movement is 2 to 6px of translation plus opacity. Nothing bounces, nothing springs, nothing scales past 1, nothing slides in from off-screen. `prefers-reduced-motion` is honoured globally in `tokens/base.css`.

**Imagery.** No photography, illustration, or brand imagery was supplied, and none has been invented. Where a product screen would carry a photo or an avatar, this system uses initials on a sand or ink chip. If the brand adopts photography later, the palette implies warm, low-contrast, natural light rather than cool or clinical treatment.

**Radii.** 0 for full-bleed, 6 for badges, 10 for controls, 14 for cards (the canonical brand value), 24 for the icon container, fully round for pills, avatars, and the mark's dot.

## Iconography

**Cannie ships no icon set.** The sources contain the brand marks and favicons and nothing else: no icon font, no sprite sheet, no product glyphs.

**Substitution, flagged.** The system uses [Lucide](https://lucide.dev) as the stand-in, loaded from CDN by `components/core/Icon.jsx` and drawn at Lucide's own defaults: a 24px grid, 2px stroke, round caps and joins. Lucide was chosen because its weight sits close to the mark's stroke and its geometry is plain rather than decorative. **This is a substitution, not a brand decision.** If Cannie has or commissions its own glyphs, replace the CDN load in `Icon.jsx` with the real set and delete this note.

One tension worth naming: the Cannie mark uses a sharp miter and a flat butt cap, while Lucide rounds both. Matching the mark exactly would mean restyling every glyph's caps, which distorts several of them. The recommendation is to leave Lucide alone and treat the mark's geometry as belonging to the mark.

**Rules regardless of set.**

- Icons inherit `currentColor`. The parent sets the colour.
- Sizes in use: 16 in dense rows, 18 inside buttons, 20 standing alone, 22 to 24 in empty states.
- Never mix a second icon library into a Cannie surface.
- Emoji are never used as icons, and neither are unicode symbols standing in for glyphs (no arrows typed as characters, no bullets as decoration).
- An icon-only control always carries a `label`, which becomes both its accessible name and its tooltip.

## Accessibility corrections

Two places where this system deliberately departs from a literal reading of the brand doc, both for contrast:

1. **Kicker colour on light surfaces.** The doc specifies taupe. Taupe on bone measures 1.3:1, which is unreadable. `KickerBlock` uses ink at 70% on light surfaces (5.5:1) and keeps taupe on ink (10.3:1), where it was always fine.
2. **Berry on taupe** measures 4.6:1. It passes AA for normal text with very little headroom. Avoid it for anything under 15px, and prefer bone or sand under berry text.

Everything else in the palette was measured, not eyeballed. See the Contrast pairs card in the Design System tab.

## Typography substitution

No font binaries were supplied. Poppins is served from Google Fonts by `tokens/fonts.css`. **If Cannie licenses a hosted copy, swap that `@import` for local `@font-face` rules and drop the webfont files into `assets/fonts/`.** Poppins is the correct family; only the delivery is provisional.

## Intentional additions

Things this system contains that the brand doc does not define, listed so nobody mistakes them for brand decisions:

- **`Icon`**, a Lucide wrapper. Needed because every UI surface needs glyphs and the brand ships none.
- **The app UI primitives** (Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip). The brand doc defines deck components only. These are derived from its rules so that product work has somewhere to start.
- **The recruitment CRM UI kit.** No product screens were supplied. The kit is a good-faith reading of "recruitment CRM" through the brand's rules, and it is the first thing to replace with real screens.
- **Motion, elevation, and interaction-state tokens.** Extrapolated, as noted above.
- **Clear-space unit** for the lockup, set at one dot diameter. The doc requires breathing room without giving a number.
- **A press state of 0.985 scale.** The doc says nothing about press feedback.

## Index

**Foundations**
- `styles.css`, the single entry point consumers link. Imports only.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `shape.css`, `elevation.css`, `motion.css`, `fonts.css`, `base.css`.
- `guidelines/*.card.html`, 23 specimen cards covering Colors, Type, Spacing, Foundations, and Brand.

**Assets**
- `assets/logo/`, all 19 supplied SVGs: lockups (light, dark, black, white), wordmarks (light, dark, black), marks (light, dark, black, white), app icon, favicons at 16 and 32 in dark, light, and mono.

**Components** (`components/<group>/<Name>.jsx` with a sibling `.d.ts` and `.prompt.md`)
- `brand/`: Lockup, AppIcon, KickerBlock, CalloutBox, IsIsNotPair.
- `core/`: Button, IconButton, Icon, Card, Badge, Tag.
- `forms/`: Input, Select, Checkbox, Radio, Switch.
- `navigation/`: Tabs.
- `feedback/`: Dialog, Toast, Tooltip.

**Surfaces**
- `slides/`, the brand deck: cover, content, dark statement, is / is not, closing. Built to the doc's point scale at 1280x720.
- `ui_kits/cannie-app/`, the recruitment CRM: sign in, pipeline, candidate profile, search, settings. Extrapolated, see above.

**Templates** (what consuming projects start from)
- `templates/brand-deck/`, the five-slide deck on a real slide stage: keyboard nav, thumbnail rail, print to PDF.
- `templates/app-screen/`, the product shell: ink sidebar, bone canvas, pipeline board.

**Other**
- `SKILL.md`, for use as an Agent Skill outside this project.
- `thumbnail.html`, the project tile.
