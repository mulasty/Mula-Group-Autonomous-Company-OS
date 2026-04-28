# Project Documentation

## Vision
Mula Group is building an Autonomous Company OS to manage decisions, tasks, workflows, AI agents, coding pipelines, documentation, and future business automation in a controlled, auditable way.

## Strategic Direction
- Operate in a **local-first + GitHub-first** mode.
- Keep formal project knowledge in version-controlled repository files.
- Treat Google Drive as a secondary collaboration space for temporary notes.
- Build stepwise autonomy with human oversight.
- Support Polish ownership and management context while keeping technical assets in English for engineering interoperability.

## Core Modules
1. Decision Intake and Structuring
2. Task Backlog and Prioritization
3. Workflow Orchestration (n8n)
4. GitHub Issues and Pull Request Lifecycle
5. Coding Agent Execution Layer
6. Review and Quality Control Layer
7. Documentation and Knowledge Synchronization

## Agent Roles
- **Decision Agent**: converts raw business intent into structured task JSON.
- **Coding Agent (Codex)**: implements scoped changes from approved tasks.
- **Review Agent**: validates quality, scope alignment, and risk controls.
- **Documentation Agent (future)**: ensures docs track architecture and change history.

## Workflow Principles
- Explicit input/output contracts for every workflow.
- JSON-first data exchange between automated components.
- Human review before high-impact or production-facing changes.
- Traceable linkage between decision, backlog item, issue, PR, and documentation update.

## MVP Priorities
- Deliver WF-001 Decision-to-Codex skeleton.
- Validate parser and quality-gate behavior in n8n-compatible format.
- Seed backlog with one representative task.
- Prepare templates for GitHub issue and PR automation.
