repo: CStace1/Cannie
branch: main
path: docs/

## Last sync
date: 2026-09-19T17:50:00Z

### Updated in this project
- Candidate record handoff written: design_handoff_candidate_record/ (README, build brief, prototype, benchmark, mobile frames, Next actions and sidebar patterns, runtime). Suggested repo home docs/design/handoff/candidate-record/.
- Brief maps the prototype onto Candidate, CandidateJobHistory, CandidateAttachment, CandidateRightToWork and the code lists as read from main, and names the three repo rulings the build bends to: no CV parsing (LEG-S27), right to work as a five-state row (LEG-S36), perm out of scope.

### Updated in this project, 17 Sep
- Overview.html copied verbatim from docs/design/mockups/recruiter-dashboard-v3.html; only hrefs changed so its nav and row actions open Client Record.dc.html and Job Record.dc.html. Both records gained an Overview item at the top of the sidebar nav and Jobs now links to the job record.

### Updated in this project, earlier today
- Job record handoff written: design_handoff_job_record/ (README spec, prototype, benchmark, tokens). Suggested repo home docs/design/handoff/job-record/.
- Job record built as one entity in three shapes (Perm, T&M, SOW): type drives tabs, brief fields, commercials, screening, offer and place.
- Stage moves each capture a note; screening reads knockouts from the brief's rules; interviews carry sent / confirmed / done / feedback states.
- Fee provenance: client terms or rate card by default, custom per job with reason and who agreed.

## Screen map
| Screen | Built from |
| --- | --- |
| Candidate Record.dc.html | src/Cannie.Data/Entities/Candidate.cs, CandidateJobHistory.cs, CandidateAttachment.cs, CandidateRightToWork.cs, CrmCandidateCodeLists.cs (fields, code lists, legal constraints in the entity remarks), design_handoff_job_record/README.md (shell, drawers, next actions) |
| Client Record.dc.html | docs/design/DESIGN-crm-records-and-pipeline.md (record pattern, summary strip, section set), docs/design/DESIGN-client-contact-and-candidate-records-2026-09.md (company, tax and address fields), docs/design/DESIGN-single-scroll-records.md (nav behaviour), docs/research/RESEARCH-client-and-candidate-record-best-in-class.md (market comparison: Firefish, Bullhorn, Vincere, JobAdder) |
| Job Record.dc.html | docs/design/DESIGN-crm-records-and-pipeline.md (record pattern, pipeline stages, panel and table shapes), docs/design/DESIGN-engagement-page.md (SOW milestones, ceiling and variation rules, reused for the SOW shape), docs/design/handoff/client-record/README.md (sidebar pattern, drawers, groups, tokens) |
| Statement of Work Record.dc.html | docs/design/DESIGN-engagement-page.md (header band, five-fact strip, three health tiers and their reasons, the nine-tab set, ceiling and variation rules), docs/design/DESIGN-crm-records-and-pipeline.md (panel and table shapes). Superseded by the SOW shape of the job record. |

## Sync history
- 2026-09-15T21:10:00Z, client record handoff package written.
- 2026-09-15T18:45:00Z, first import. Client record built from the four design and research documents above.
