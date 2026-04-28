# WF-001: Decision to Codex Task Specification

## Purpose
Transform an unstructured business request into a structured, review-ready engineering task package for Codex execution.

## Input
- Business/user message (natural language)
- Project context metadata
- Priority indicator
- Owner identity

## Output
- Valid JSON task specification aligned with Decision Agent schema
- Normalized status for routing (`ready_for_review` or `needs_clarification`)
- Backlog-ready task record and optional GitHub issue markdown block

## Workflow Steps
1. Capture inbound request through webhook/manual form.
2. Normalize input fields (project/module/priority/owner/source).
3. Call Decision Agent prompt.
4. Parse and validate returned JSON.
5. Apply quality gate based on parser status.
6. Route valid payload to backlog/GitHub issue preparation.
7. Return response summary to requester.

## Status Model
- `draft`
- `needs_clarification`
- `ready_for_review`
- `approved`
- `in_progress`
- `done`

## Acceptance Criteria
- Output JSON includes all required fields.
- Parser returns `parser_status = valid` for accepted payloads.
- Invalid or incomplete payloads generate actionable validation errors.
- Final routing decision is deterministic and auditable.

## Next Version (v0.2)
Add automated GitHub Issue creation for valid, review-approved tasks.
