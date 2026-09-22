repo: CStace1/Cannie
branch: main
path: docs/

## Last sync
date: 2026-09-17T12:00:00Z

### Updated in this project
- Job record handoff written: design_handoff_job_record/ (README spec, prototype, benchmark, tokens). Suggested repo home docs/design/handoff/job-record/.
- Job record built as one entity in three shapes (Perm, T&M, SOW): type drives tabs, brief fields, commercials, screening, offer and place.
- Stage moves each capture a note; screening reads knockouts from the brief's rules; interviews carry sent / confirmed / done / feedback states.
- Fee provenance: client terms or rate card by default, custom per job with reason and who agreed.

## Screen map
| Screen | Built from |
| --- | --- |
| Client Record.dc.html | docs/design/DESIGN-crm-records-and-pipeline.md (record pattern, summary strip, section set), docs/design/DESIGN-client-contact-and-candidate-records-2026-09.md (company, tax and address fields), docs/design/DESIGN-single-scroll-records.md (nav behaviour), docs/research/RESEARCH-client-and-candidate-record-best-in-class.md (market comparison: Firefish, Bullhorn, Vincere, JobAdder) |
| Job Record.dc.html | docs/design/DESIGN-crm-records-and-pipeline.md (record pattern, pipeline stages, panel and table shapes), docs/design/DESIGN-engagement-page.md (SOW milestones, ceiling and variation rules, reused for the SOW shape), docs/design/handoff/client-record/README.md (sidebar pattern, drawers, groups, tokens) |
| Statement of Work Record.dc.html | docs/design/DESIGN-engagement-page.md (header band, five-fact strip, three health tiers and their reasons, the nine-tab set, ceiling and variation rules), docs/design/DESIGN-crm-records-and-pipeline.md (panel and table shapes). Superseded by the SOW shape of the job record. |

## Sync history
- 2026-09-15T21:10:00Z, client record handoff package written.
- 2026-09-15T18:45:00Z, first import. Client record built from the four design and research documents above.
