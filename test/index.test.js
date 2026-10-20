import test from "node:test";
import assert from "node:assert/strict";
import { maxielXy, assertSupportedNode } from "../lib/index.js";

test("exports Maxiel-Xy metadata", () => {
  assert.equal(maxielXy.name, "Maxiel-Xy");
  assert.equal(maxielXy.status, "scaffold");
});

test("checks Node.js version", () => {
  assert.doesNotThrow(() => assertSupportedNode("20.0.0"));
  assert.throws(() => assertSupportedNode("18.19.0"), /Node.js 20 or newer/);
});
