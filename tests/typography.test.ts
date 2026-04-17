import assert from "node:assert/strict";
import { applyNbspToText, deepApplyTypography } from "../src/scripts/typography.js";

function run(name: string, fn: () => void): void {
  try {
    fn();
    console.log(`PASS: ${name}`);
  } catch (error) {
    console.error(`FAIL: ${name}`);
    throw error;
  }
}

run("applyNbspToText: binds short one-letter and short service words", () => {
  assert.equal(applyNbspToText("I am"), "I\u00A0am");
  assert.equal(applyNbspToText("a solution"), "a\u00A0solution");
  assert.equal(applyNbspToText("and value"), "and\u00A0value");
});

run("applyNbspToText: does not modify email and URL substrings", () => {
  assert.equal(
    applyNbspToText("email me at olgabis.design@gmail.com"),
    "email me at olgabis.design@gmail.com",
  );
  assert.equal(
    applyNbspToText("visit https://example.com/a test"),
    "visit https://example.com/a test",
  );
});

run("applyNbspToText: does not duplicate existing NBSP", () => {
  assert.equal(
    applyNbspToText("I\u00A0am a developer"),
    "I\u00A0am a\u00A0developer",
  );
});

run("deepApplyTypography: transforms nested string fields and preserves shape", () => {
  const input = {
    title: "a project",
    nested: {
      list: ["and value", { label: "I am" }],
      untouchedNumber: 42,
      untouchedBoolean: true,
    },
  };

  const output = deepApplyTypography(input);

  assert.deepEqual(output, {
    title: "a\u00A0project",
    nested: {
      list: ["and\u00A0value", { label: "I\u00A0am" }],
      untouchedNumber: 42,
      untouchedBoolean: true,
    },
  });
});
