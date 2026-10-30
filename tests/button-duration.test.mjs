import test from "node:test";
import assert from "node:assert/strict";
import { buttonDuration } from "../src/button-duration.js";

const now = Date.parse("2026-10-30T12:19:00Z");
const hass = { states: {
  "input_select.demo_sleep": { state: "Nanna", last_changed: "2026-10-30T10:02:55Z" },
  "sensor.demo_sleep_duration": { state: "2 ore 16 min" },
} };

test("shows a ticking duration only while the configured state is active", () => {
  const timer = { mode: "elapsed", entity_id: "input_select.demo_sleep", active_state: "Nanna" };
  assert.equal(buttonDuration(hass, timer, now), "02:16:05");
  assert.equal(buttonDuration(hass, timer, now + 1000), "02:16:06");
  assert.equal(buttonDuration(hass, { ...timer, active_state: "Sveglio" }, now), "");
});

test("can display an existing duration sensor and hides missing or unavailable values", () => {
  assert.equal(buttonDuration(hass, { mode: "entity", entity_id: "sensor.demo_sleep_duration" }, now), "2 ore 16 min");
  assert.equal(buttonDuration(hass, { mode: "off", entity_id: "sensor.demo_sleep_duration" }, now), "");
  assert.equal(buttonDuration(hass, { mode: "entity", entity_id: "sensor.missing" }, now), "");
});
