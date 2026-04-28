#!/usr/bin/env node

/**
 * validate-task-json.js
 *
 * Lightweight JSON validation helper for task payloads.
 * No external dependencies.
 *
 * TODO:
 * - Support reading from --file <path>
 * - Support reading raw JSON string from --json '<payload>'
 * - Reuse shared WF-001 schema contract when finalized
 */

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function validateTask(task) {
  const errors = [];

  if (!isObject(task)) {
    errors.push("Task must be a JSON object.");
    return errors;
  }

  if (!task.title || typeof task.title !== "string") {
    errors.push("Missing or invalid 'title'.");
  }

  if (!task.status || typeof task.status !== "string") {
    errors.push("Missing or invalid 'status'.");
  }

  if (!task.workflow_id || typeof task.workflow_id !== "string") {
    errors.push("Missing or invalid 'workflow_id'.");
  }

  return errors;
}

function validateJsonInput(input) {
  try {
    const parsed = typeof input === "string" ? JSON.parse(input) : input;
    const errors = validateTask(parsed);

    return {
      ok: errors.length === 0,
      errors,
      payload: parsed
    };
  } catch (error) {
    return {
      ok: false,
      errors: [error.message],
      payload: null
    };
  }
}

if (require.main === module) {
  console.log("validate-task-json.js is ready.");
  console.log("TODO: add CLI argument parsing for --file and --json.");
}

module.exports = {
  isObject,
  validateTask,
  validateJsonInput
};
