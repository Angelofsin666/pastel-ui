export function buttonDuration(hass, timer, now = Date.now()) {
  if (!timer?.entity_id || timer.mode === "off") return "";
  const entity = hass?.states?.[timer.entity_id];
  if (!entity || ["unknown", "unavailable"].includes(entity.state)) return "";

  if (timer.mode === "entity") return String(entity.state || "").trim();

  const activeState = String(timer.active_state || "on").trim();
  if (entity.state !== activeState) return "";
  const started = Date.parse(entity.last_changed || "");
  if (!Number.isFinite(started) || started > now) return "";
  const elapsed = Math.floor((now - started) / 1000);
  const hours = Math.floor(elapsed / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
