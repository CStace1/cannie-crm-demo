repo: CStace1/Cannie
branch: main
path: docs/

## Last sync
date: 2026-09-15T19:05:34Z

### Updated in this project
- Client record built jobs-first: "Jobs to fill" and "Filled and live" as two distinct lists.
- Hiring manager is a column on every job row, linking through to the contact.
- Statement of work record added: milestones, ceiling and burn, contractors, variations.
- Capture screens added: new statement, add milestone, add contractor, raise a variation.
- Seed data is IT recruitment (payments platform client, engineering roles).

## Screen map
| Screen | Built from |
| --- | --- |
| Client Record.dc.html | docs/design/DESIGN-crm-records-and-pipeline.md (record pattern, summary strip, section set), docs/design/DESIGN-client-contact-and-candidate-records-2026-09.md (company, tax and address fields), docs/design/DESIGN-single-scroll-records.md (nav behaviour), docs/research/RESEARCH-client-and-candidate-record-best-in-class.md (market comparison: Firefish, Bullhorn, Vincere, JobAdder) |
| Statement of Work Record.dc.html | docs/design/DESIGN-engagement-page.md (header band, five-fact strip, three health tiers and their reasons, the nine-tab set, ceiling and variation rules), docs/design/DESIGN-crm-records-and-pipeline.md (panel and table shapes) |

## Sync history
- 2026-09-15T18:45:00Z, first import. Client record built from the four design and research documents above.
