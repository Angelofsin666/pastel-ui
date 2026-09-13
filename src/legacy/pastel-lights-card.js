import { registerLegacy } from "../legacy-style.js";
// ============================================================================
// Pastel Lights Card — custom Lovelace card for Home Assistant / HACS
// ============================================================================

// LitElement, html, css imported directly from CDN — this is the robust,
// version-stable approach recommended for modern HACS cards (avoids relying
// on Home Assistant's internal, undocumented component structure).
import { LitElement, html, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

// ----------------------------------------------------------------------------
// Color palette (pastel tones consistent with the rest of the dashboard)
// ----------------------------------------------------------------------------
const PALETTE = {
  amber:  { base: "#f59e0b", light: "#fde68a", bg: "#fef3c7", glow: "#fef08a", text: "#d97706" },
  blue:   { base: "#3d9cf0", light: "#b8dafc", bg: "#e8f3fe", glow: "#dbeafe", text: "#3d9cf0" },
  green:  { base: "#34c472", light: "#bdeed4", bg: "#e6f9ef", glow: "#dcfce7", text: "#1f9d5c" },
  pink:   { base: "#ec4899", light: "#fbcfe8", bg: "#fce7f3", glow: "#fdf2f8", text: "#db2777" },
  purple: { base: "#9b5de5", light: "#ddd1f7", bg: "#f3ecff", glow: "#ede9fe", text: "#8b3fd9" },
  red:    { base: "#f05252", light: "#fac9c9", bg: "#fee8e8", glow: "#fef2f2", text: "#e03c3c" },
  teal:   { base: "#20c997", light: "#a8e8d3", bg: "#e6faf4", glow: "#d1fae5", text: "#159b76" },
  orange: { base: "#f0943d", light: "#fcd9b0", bg: "#fef3e8", glow: "#fff7ed", text: "#d9762a" },
};
const PALETTE_KEYS = Object.keys(PALETTE);

function getColors(key) {
  return PALETTE[key] || PALETTE.amber;
}

// ----------------------------------------------------------------------------
// Bulb SVG (reuses the same visual language as the original button-card SVG)
// ----------------------------------------------------------------------------
function bulbSvg(colors, isOn, size = 56) {
  const fill = isOn ? colors.light : "#d8dde3";
  const stroke = isOn ? colors.base : "#b8c0cc";
  const glow = isOn ? colors.glow : "#eef0f3";
  const base1 = isOn ? colors.light : "#c7cdd6";
  const base2 = isOn ? colors.base : "#aab1bd";
  const base3 = isOn ? colors.text : "#8b93a1";
  const h = Math.round(size * 1.32);
  return `
    <svg width="${size}" height="${h}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 22 C8 14 14 8 22 8 C30 8 36 14 36 22 C36 29 32 33 30 37 L14 37 C12 33 8 29 8 22Z"
            fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
      <ellipse cx="22" cy="21" rx="8" ry="7" fill="${glow}" opacity="0.65"/>
      <path d="M17 28 Q20 24 22 27 Q24 30 27 26" stroke="${stroke}" stroke-width="1.5"
            stroke-linecap="round" fill="none" opacity="0.8"/>
      <rect x="14" y="37" width="16" height="3" rx="1.5" fill="${base1}"/>
      <rect x="15" y="40" width="14" height="3" rx="1.5" fill="${base2}"/>
      <rect x="16" y="43" width="12" height="3" rx="1.5" fill="${base3}"/>
    </svg>`;
}

// ----------------------------------------------------------------------------
// Card
// ----------------------------------------------------------------------------
class PastelLightsCard extends LitElement {

  static get properties() {
    return {
      hass: {},
      config: {},
      _expandedEntity: { state: true },
    };
  }

  static getStubConfig() {
    return {
      title: "Esterni",
      subtitle: "Luci esterne",
      icon: "mdi:outdoor-lamp",
      color: "amber",
      entities: [],
    };
  }

  setConfig(config) {
    if (!config) {
      throw new Error("Configurazione non valida");
    }
    if (!Array.isArray(config.entities)) {
      throw new Error("Devi specificare almeno un'entità luce (entities: [...])");
    }
    this.config = {
      title: config.title || "Luci",
      subtitle: config.subtitle || "",
      icon: config.icon || "mdi:lightbulb-group",
      color: PALETTE_KEYS.includes(config.color) ? config.color : "amber",
      entities: config.entities,
      show_progress_bar: config.show_progress_bar !== false,
    };
  }

  getCardSize() {
    const n = (this.config && this.config.entities) ? this.config.entities.length : 1;
    return 2 + Math.ceil(n / 2);
  }

  static getConfigElement() {
    return document.createElement("pastel-lights-card-editor");
  }

  // -- helpers ---------------------------------------------------------------

  _entityIds() {
    return (this.config.entities || []).map((e) =>
      typeof e === "string" ? e : e.entity
    );
  }

  _entityLabel(entConf) {
    const id = typeof entConf === "string" ? entConf : entConf.entity;
    if (typeof entConf === "object" && entConf.name) return entConf.name;
    const stateObj = this.hass.states[id];
    return stateObj ? (stateObj.attributes.friendly_name || id) : id;
  }

  _entityIcon(entConf, isOn) {
    const id = typeof entConf === "string" ? entConf : entConf.entity;
    if (typeof entConf === "object" && entConf.icon) return entConf.icon;
    const stateObj = this.hass.states[id];
    const customIcon = stateObj && stateObj.attributes.icon;
    if (customIcon) return customIcon;
    return isOn ? "mdi:lightbulb" : "mdi:lightbulb-outline";
  }

  _isDimmable(id) {
    const stateObj = this.hass.states[id];
    if (!stateObj) return false;
    const modes = stateObj.attributes.supported_color_modes || [];
    return modes.some((m) =>
      ["brightness", "color_temp", "hs", "rgb", "rgbw", "rgbww", "xy"].includes(m)
    );
  }

  _brightnessPct(id) {
    const stateObj = this.hass.states[id];
    if (!stateObj || stateObj.state !== "on") return 0;
    const b = stateObj.attributes.brightness;
    if (b === undefined || b === null) return 100;
    return Math.round((b / 255) * 100);
  }

  // -- actions -----------------------------------------------------------

  _toggleEntity(id, ev) {
    if (ev) ev.stopPropagation();
    this.hass.callService("homeassistant", "toggle", { entity_id: id });
  }

  _toggleAll() {
    const ids = this._entityIds();
    const anyOn = ids.some((id) => this.hass.states[id] && this.hass.states[id].state === "on");
    this.hass.callService("homeassistant", anyOn ? "turn_off" : "turn_on", { entity_id: ids });
  }

  _showMoreInfo(id, ev) {
    if (ev) ev.stopPropagation();
    const event = new Event("hass-more-info", { bubbles: true, composed: true });
    event.detail = { entityId: id };
    this.dispatchEvent(event);
  }

  _setBrightness(id, pct) {
    this.hass.callService("light", "turn_on", {
      entity_id: id,
      brightness_pct: Math.round(pct),
    });
  }

  // A press is valid only while the same pointer stays within 10 CSS pixels.
  _cancelPress() {
    clearTimeout(this._pressTimer);
    this._press = null;
  }

  _onPointerDown(id, ev) {
    this._cancelPress();
    if (ev.isPrimary === false || ev.button !== 0) return;
    this._press = { id, pointerId: ev.pointerId, x: ev.clientX, y: ev.clientY, held: false };
    if (id) this._pressTimer = setTimeout(() => {
      if (!this._press) return;
      this._press.held = true;
      this._showMoreInfo(id);
    }, 500);
  }

  _onPointerMove(ev) {
    const p = this._press;
    if (p && p.pointerId === ev.pointerId &&
        Math.hypot(ev.clientX - p.x, ev.clientY - p.y) > 10) this._cancelPress();
  }

  _onPointerUp(id, ev) {
    this._onPointerMove(ev);
    const p = this._press;
    this._cancelPress();
    if (!p || p.id !== id || p.pointerId !== ev.pointerId || p.held) return;
    if (id) this._toggleEntity(id, ev);
    else this._toggleAll();
  }

  _onKeyDown(id, ev) {
    if (ev.repeat || !["Enter", " "].includes(ev.key)) return;
    ev.preventDefault();
    if (id) this._toggleEntity(id, ev);
    else this._toggleAll();
  }

  disconnectedCallback() {
    this._cancelPress();
    if (this._sliderCleanup) this._sliderCleanup();
    super.disconnectedCallback();
  }

  // Let vertical touch gestures scroll. Commit brightness only on release.
  _onSliderPointerDown(id, ev) {
    ev.stopPropagation();
    this._cancelPress();
    if (this._sliderCleanup) this._sliderCleanup();
    if (ev.isPrimary === false || ev.button !== 0) return;
    const track = ev.currentTarget;
    const rect = track.getBoundingClientRect();
    let pct = this._brightnessPct(id);
    let dragging = false;
    const update = (x) => {
      pct = Math.round(Math.min(100, Math.max(1, ((x - rect.left) / rect.width) * 100)));
      track.style.setProperty("--slider-value", `${pct}%`);
      track.setAttribute("aria-valuenow", pct);
    };
    const cleanup = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", cancel);
      window.removeEventListener("blur", cleanup);
      track.style.removeProperty("--slider-value");
      track.setAttribute("aria-valuenow", this._brightnessPct(id));
      this._sliderCleanup = null;
    };
    const move = (e) => {
      if (e.pointerId !== ev.pointerId) return;
      const dx = Math.abs(e.clientX - ev.clientX);
      const dy = Math.abs(e.clientY - ev.clientY);
      if (!dragging && dy > 10 && dy >= dx) { cleanup(); return; }
      if (dx > 10) dragging = true;
      if (dragging) update(e.clientX);
    };
    const up = (e) => {
      if (e.pointerId !== ev.pointerId) return;
      const dx = Math.abs(e.clientX - ev.clientX);
      const dy = Math.abs(e.clientY - ev.clientY);
      if (!dragging && dy > 10) { cleanup(); return; }
      update(e.clientX);
      cleanup();
      this._setBrightness(id, pct);
    };
    const cancel = (e) => { if (e.pointerId === ev.pointerId) cleanup(); };
    this._sliderCleanup = cleanup;
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", cancel);
    window.addEventListener("blur", cleanup);
  }

  _onSliderKeyDown(id, ev) {
    const delta = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5 }[ev.key];
    if (delta === undefined && !["Home", "End"].includes(ev.key)) return;
    ev.preventDefault();
    ev.stopPropagation();
    const pct = ev.key === "Home" ? 1 : ev.key === "End" ? 100 :
      Math.min(100, Math.max(1, this._brightnessPct(id) + delta));
    this._setBrightness(id, pct);
  }

  // -- render --------------------------------------------------------------

  render() {
    if (!this.config || !this.hass) return html``;

    const colors = getColors(this.config.color);
    const ids = this._entityIds();
    const validIds = ids.filter((id) => this.hass.states[id]);
    const onCount = validIds.filter((id) => this.hass.states[id].state === "on").length;
    const total = validIds.length;
    const pct = total ? Math.round((onCount / total) * 100) : 0;
    const anyOn = onCount > 0;

    return html`
      <ha-card style="--c-base:${colors.base}; --c-light:${colors.light}; --c-bg:${colors.bg}; --c-glow:${colors.glow}; --c-text:${colors.text};">

        <div class="header" role="button" tabindex="0"
          aria-label=${anyOn ? "Spegni tutte le luci" : "Accendi tutte le luci"}
          @pointerdown=${(e) => this._onPointerDown(null, e)}
          @pointermove=${(e) => this._onPointerMove(e)}
          @pointerup=${(e) => this._onPointerUp(null, e)}
          @pointercancel=${() => this._cancelPress()}
          @pointerleave=${() => this._cancelPress()}
          @keydown=${(e) => this._onKeyDown(null, e)}>

          <ha-icon icon=${this.config.icon} style="color:${colors.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle || (anyOn ? "Tocca per spegnere tutto" : "Tocca per accendere tutto")}</div>
          </div>
        </div>

        <div class="panel summary">
          <div class="summary-row">
            ${unsafeHTML(bulbSvg(colors, anyOn, 56))}
            <div class="count-block">
              <div class="count">${onCount}<span class="count-total">/${total}</span></div>
              <div class="count-label">luci accese</div>
            </div>
          </div>
          ${this.config.show_progress_bar ? html`
            <div class="progress-track">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
          ` : ""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((entConf, idx) => {
            const id = typeof entConf === "string" ? entConf : entConf.entity;
            const stateObj = this.hass.states[id];
            if (!stateObj) {
              return html`<div class="row missing">Entità non trovata: ${id}</div>`;
            }
            const isOn = stateObj.state === "on";
            const dimmable = isOn && this._isDimmable(id);
            const label = this._entityLabel(entConf);
            const icon = this._entityIcon(entConf, isOn);
            const briPct = this._brightnessPct(id);

            return html`
              <div>
                <div
                  class="row ${dimmable ? "expanded" : ""} ${isOn ? "is-on" : ""}"
                  role="button" tabindex="0" aria-pressed=${isOn}
                  aria-label=${`${label}: ${isOn ? "spegni" : "accendi"}`}
                  @keydown=${(e) => this._onKeyDown(id, e)}
                  @pointermove=${(e) => this._onPointerMove(e)}
                  @pointercancel=${() => this._cancelPress()}
                  @pointerdown=${(e) => this._onPointerDown(id, e)}
                  @pointerup=${(e) => this._onPointerUp(id, e)}
                  @pointerleave=${() => this._cancelPress()}
                >
                  <ha-icon icon=${icon} style="color:${isOn ? colors.text : "var(--secondary-text-color)"}"></ha-icon>
                  <span class="row-label ${isOn ? "" : "row-label-off"}">${label}</span>
                  <span class="row-status" style="color:${isOn ? colors.text : "var(--secondary-text-color)"}">
                    ${dimmable ? html`${briPct}%` : (isOn ? "Acceso" : "Spento")}
                  </span>
                </div>
                ${dimmable ? html`
                  <div class="slider-wrap">
                    <div class="slider-track" role="slider" tabindex="0"
                      aria-label=${`Luminosità ${label}`} aria-valuemin="1" aria-valuemax="100" aria-valuenow=${briPct}
                      @keydown=${(e) => this._onSliderKeyDown(id, e)}
                      @pointerdown=${(e) => this._onSliderPointerDown(id, e)}>
                      <div class="slider-fill" style="width:var(--slider-value, ${briPct}%)"></div>
                      <div class="slider-thumb" style="left:var(--slider-value, ${briPct}%)"></div>
                    </div>
                  </div>
                ` : ""}
              </div>
              ${idx < this.config.entities.length - 1 ? html`<div class="divider"></div>` : ""}
            `;
          })}
        </div>

      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        border: 1px solid var(--divider-color, rgba(0,0,0,0.06));
        box-shadow: 0 3px 8px rgba(0,0,0,0.03), 0 10px 28px rgba(0,0,0,0.05);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 16px 10px;
        touch-action: pan-y;
        cursor: pointer;
        user-select: none;
      }
      .header ha-icon {
        --mdc-icon-size: 22px;
        padding: 10px;
        border-radius: 14px;
        background: var(--c-bg);
      }
      .title {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .subtitle {
        font-size: 12px;
        color: var(--c-text);
        margin-top: 1px;
      }
      .panel {
        background: var(--c-bg);
        border-radius: 20px;
        margin: 4px;
      }
      .summary {
        padding: 12px 16px;
      }
      .summary-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .count-block {
        flex: 1;
        text-align: right;
        min-width: 0;
      }
      .count {
        font-size: 48px;
        font-weight: 400;
        font-variant-numeric: tabular-nums;
        color: var(--c-base);
        line-height: 1;
        letter-spacing: -1px;
      }
      .count-total {
        font-size: 22px;
        opacity: 0.65;
        margin-left: 3px;
      }
      .count-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .progress-track {
        margin-top: 12px;
        height: 6px;
        border-radius: 3px;
        background: var(--c-light);
        overflow: hidden;
      }
      .progress-fill {
        height: 100%;
        background: var(--c-base);
        transition: width 0.3s ease;
      }
      .rows {
        padding: 6px;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 13px 12px;
        min-height: 28px;
        touch-action: pan-y;
        border-radius: 16px;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .header:focus-visible, .row:focus-visible, .slider-track:focus-visible {
        outline: 2px solid var(--c-text);
        outline-offset: -2px;
      }
      .row.is-on .row-status { background: var(--c-light); }
      @media (prefers-reduced-motion: reduce) {
        .progress-fill { transition: none; }
      }
      .row.expanded {
        padding-bottom: 14px;
      }
      .row:active {
        background: rgba(0,0,0,0.04);
      }
      .row ha-icon {
        --mdc-icon-size: 22px;
        flex-shrink: 0;
      }
      .row-label {
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        flex: 1;
        min-width: 0;
        overflow-wrap: anywhere;
      }
      .row-label-off {
        opacity: 0.65;
      }
      .row-status {
        font-size: 12px;
        font-weight: 600;
        flex-shrink: 0;
        font-variant-numeric: tabular-nums;
        padding: 5px 8px;
        border-radius: 9px;
        background: rgba(255,255,255,0.4);
      }
      .row.missing {
        color: var(--error-color, red);
        font-size: 12px;
        padding: 10px 14px;
      }
      .divider {
        height: 0.5px;
        background: rgba(0,0,0,0.08);
        margin: 0 14px;
      }
      .slider-wrap {
        padding: 0 22px 4px 48px;
      }
      .slider-track {
        position: relative;
        height: 36px;
        border-radius: 4px;
        background: linear-gradient(var(--c-light), var(--c-light)) center / 100% 8px no-repeat;
        cursor: pointer;
        touch-action: pan-y;
      }
      .slider-fill {
        position: absolute;
        top: 14px; left: 0; height: 8px;
        border-radius: 4px;
        background: linear-gradient(90deg, var(--c-light), var(--c-base));
      }
      .slider-thumb {
        position: absolute;
        top: 50%;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid var(--c-base);
        box-shadow: 0 1px 4px rgba(0,0,0,0.25);
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
    `;
  }
}

registerLegacy("pastel-lights-card", PastelLightsCard);

// ============================================================================
// Visual editor
// ============================================================================
class PastelLightsCardEditor extends LitElement {

  static get properties() {
    return {
      hass: {},
      _config: { state: true },
    };
  }

  setConfig(config) {
    this._config = { ...config };
  }

  _valueChanged(field, value) {
    this._config = { ...this._config, [field]: value };
    this._fireChanged();
  }

  _entitiesChanged(ev) {
    const value = ev.detail.value || [];
    this._config = { ...this._config, entities: value };
    this._fireChanged();
  }

  _fireChanged() {
    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this._config || !this.hass) return html``;

    const schema = [
      { name: "title", selector: { text: {} } },
      { name: "subtitle", selector: { text: {} } },
      { name: "icon", selector: { icon: {} } },
      {
        name: "entities",
        selector: { entity: { multiple: true, domain: "light" } },
      },
      { name: "show_progress_bar", selector: { boolean: {} } },
    ];

    const data = {
      title: this._config.title || "",
      subtitle: this._config.subtitle || "",
      icon: this._config.icon || "mdi:lightbulb-group",
      entities: this._config.entities || [],
      show_progress_bar: this._config.show_progress_bar !== false,
    };

    return html`
      <div class="editor">

        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${schema}
          .computeLabel=${(s) => this._labelFor(s.name)}
          @value-changed=${(ev) => {
            this._config = { ...this._config, ...ev.detail.value };
            this._fireChanged();
          }}
        ></ha-form>

        <div class="color-section">
          <div class="color-label">Colore della card</div>
          <div class="color-row">
            ${PALETTE_KEYS.map((key) => html`
              <button
                class="swatch ${this._config.color === key ? "selected" : ""}"
                style="background:${PALETTE[key].base}"
                title=${key}
                @click=${() => this._valueChanged("color", key)}
              ></button>
            `)}
          </div>
        </div>

      </div>
    `;
  }

  _labelFor(name) {
    const labels = {
      title: "Titolo",
      subtitle: "Sottotitolo (opzionale)",
      icon: "Icona",
      entities: "Luci",
      show_progress_bar: "Mostra barra di progresso",
    };
    return labels[name] || name;
  }

  static get styles() {
    return css`
      .editor {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 8px 0;
      }
      .color-label {
        font-size: 14px;
        color: var(--primary-text-color);
        margin-bottom: 8px;
        font-weight: 500;
      }
      .color-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      .swatch {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid transparent;
        cursor: pointer;
        padding: 0;
        transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover {
        transform: scale(1.1);
      }
      .swatch.selected {
        border-color: var(--primary-text-color);
        box-shadow: 0 0 0 2px var(--card-background-color, #fff);
      }
    `;
  }
}

registerLegacy("pastel-lights-card-editor", PastelLightsCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pastel-lights-card",
  name: "Pastel Lights Card",
  description: "Card per il controllo luci con stile pastello, conteggio SVG e slider luminosità.",
  preview: true,
});
