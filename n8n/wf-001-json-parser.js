/**
 * WF-001 JSON parser/validator (n8n Code node compatible style).
 * No external dependencies.
 */

const REQUIRED_FIELDS = [
  "workflow_id",
  "task_type",
  "status",
  "priority",
  "title",
  "business_goal",
  "context",
  "assumptions",
  "mvp_scope",
  "out_of_scope",
  "functional_requirements",
  "quality_requirements",
  "acceptance_criteria",
  "test_plan",
  "constraints",
  "suggested_branch",
  "suggested_commit",
  "github_issue_markdown",
  "owner_summary",
  "next_step"
];

function extractJsonCandidate(rawOutput) {
  if (typeof rawOutput !== "string") {
    throw new Error("Raw output must be a string.");
  }

  const trimmed = rawOutput.trim();
  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    return trimmed;
  }

  const start = rawOutput.indexOf("{");
  const end = rawOutput.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Could not find JSON object in raw output.");
  }

  return rawOutput.slice(start, end + 1);
}

function validateTaskObject(task) {
  const errors = [];

  if (!task || typeof task !== "object" || Array.isArray(task)) {
    return ["Parsed value must be a JSON object."];
  }

  for (const field of REQUIRED_FIELDS) {
    if (!(field in task)) {
      errors.push(`Missing required field: ${field}`);
      continue;
    }

    const value = task[field];

    if (value === null || value === undefined) {
      errors.push(`Field cannot be null/undefined: ${field}`);
      continue;
    }

    if (typeof value === "string" && value.trim() === "") {
      errors.push(`Field cannot be empty: ${field}`);
    }
  }

  return errors;
}

function parseAndValidateDecisionOutput(rawOutput) {
  try {
    const jsonCandidate = extractJsonCandidate(rawOutput);
    const parsed = JSON.parse(jsonCandidate);
    const validationErrors = validateTaskObject(parsed);
    const isValid = validationErrors.length === 0;

    return {
      parser_status: isValid ? "valid" : "invalid",
      validation_errors: validationErrors,
      normalized_status: isValid ? "ready_for_review" : "needs_clarification",
      parsed_payload: parsed
    };
  } catch (error) {
    return {
      parser_status: "error",
      validation_errors: [error.message],
      normalized_status: "needs_clarification",
      parsed_payload: null
    };
  }
}

// Example n8n Code Node usage:
// const rawOutput = $json.raw_output;
// return [{ json: parseAndValidateDecisionOutput(rawOutput) }];

module.exports = {
  REQUIRED_FIELDS,
  extractJsonCandidate,
  validateTaskObject,
  parseAndValidateDecisionOutput
};
