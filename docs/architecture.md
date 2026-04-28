# Target Architecture

## 1) Decision Agent
Receives business requests and produces normalized JSON specification payloads with clear requirements, constraints, and acceptance criteria.

## 2) Task Backlog
Stores task objects and workflow metadata (status, priority, ownership, and traceability references) in repository-managed JSON files.

## 3) n8n Orchestrator
Coordinates ingestion, normalization, LLM calls, parser validation, quality gates, and routing to backlog or GitHub issue creation.

## 4) GitHub Issues
Represents approved implementation tasks as actionable engineering items with scope, acceptance criteria, and documentation requirements.

## 5) Coding Agent / Codex
Implements approved tasks in small, reviewable commits and produces PR-ready outputs aligned with repository architecture.

## 6) Review Agent
Checks changes for requirement alignment, safety, test completeness, and scope discipline before merge decisions.

## 7) Documentation Layer
Keeps architecture, workflow specs, decisions, and changelog synchronized with real repository evolution.

## 8) Future Supabase/PostgreSQL Layer
Planned structured persistence for larger-scale workflow state, analytics, and cross-workflow reporting once repository-native MVP stabilizes.
