# WF-001 n8n Blueprint

## Flow Skeleton
Webhook → Input Normalizer → OpenAI Decision Agent → JSON Parser → Quality Gate → Backlog / GitHub Issue → Response

## Notes
- Keep parser and quality gate deterministic.
- Ensure all failures return actionable clarification prompts.
- Keep routing logic versioned with workflow documentation.
