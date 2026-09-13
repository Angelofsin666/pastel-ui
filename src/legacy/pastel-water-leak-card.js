import { registerLegacy } from "../legacy-style.js";
// ============================================================================
// Pastel Water Leak Card — custom Lovelace card for Home Assistant / HACS
// ============================================================================

// LitElement, html, css imported directly from CDN — robust, version-stable
// approach (avoids relying on Home Assistant's internal component classes).
import { LitElement, html, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

// ----------------------------------------------------------------------------
// Color palette (pastel tones — same set as Pastel Lights Card for consistency)
// ----------------------------------------------------------------------------
const PALETTE = {
  amber:  { base: "#f59e0b", light: "#fde68a", bg: "#fef3c7", text: "#d97706" },
  blue:   { base: "#3d9cf0", light: "#b8dafc", bg: "#e8f3fe", text: "#3d9cf0" },
  green:  { base: "#34c472", light: "#bdeed4", bg: "#e6f9ef", text: "#1f9d5c" },
  pink:   { base: "#ec4899", light: "#fbcfe8", bg: "#fce7f3", text: "#db2777" },
  purple: { base: "#9b5de5", light: "#ddd1f7", bg: "#f3ecff", text: "#8b3fd9" },
  red:    { base: "#f05252", light: "#fac9c9", bg: "#fee8e8", text: "#e03c3c" },
  teal:   { base: "#20c997", light: "#a8e8d3", bg: "#e6faf4", text: "#159b76" },
  orange: { base: "#f0943d", light: "#fcd9b0", bg: "#fef3e8", text: "#d9762a" },
};
const PALETTE_KEYS = Object.keys(PALETTE);
const ALARM_COLOR = { base: "#dc2626", light: "#fecaca", bg: "rgba(220,38,38,0.08)", text: "#991b1b" };

function getColors(key) {
  return PALETTE[key] || PALETTE.amber;
}

// ----------------------------------------------------------------------------
// Summary icon SVG (water drop stylized, matches the pastel visual language)
// ----------------------------------------------------------------------------
function summarySvg(colors, anyLeak, size = 50) {
  const fill = anyLeak ? ALARM_COLOR.light : colors.light;
  const stroke = anyLeak ? ALARM_COLOR.base : colors.base;
  const inner = anyLeak ? "#fef2f2" : "#ffffff";
  const dot = anyLeak ? ALARM_COLOR.text : colors.text;
  const h = Math.round(size * 1.2);
  return `
    <svg width="${size}" height="${h}" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4 C22 4 8 24 8 34 C8 42.5 14.3 49 22 49 C29.7 49 36 42.5 36 34 C36 24 22 4 22 4Z"
            fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
      <ellipse cx="18" cy="32" rx="5" ry="7" fill="${inner}" opacity="0.6"/>
      <circle cx="22" cy="36" r="2.5" fill="${dot}"/>
    </svg>`;
}

// ----------------------------------------------------------------------------
// Card
// ----------------------------------------------------------------------------
class PastelWaterLeakCard extends LitElement {

  static get properties() {
    return { hass: {}, config: {} };
  }

  static getStubConfig() {
    return {
      title: "Perdite Acqua",
      subtitle: "Zona Notte",
      icon: "mdi:water-alert",
      color: "blue",
      entities: [],
    };
  }

  setConfig(config) {
    if (!config) throw new Error("Configurazione non valida");
    if (!Array.isArray(config.entities)) {
      throw new Error("Devi specificare almeno un'entità (entities: [...])");
    }
    this.config = {
      title: config.title || "Perdite Acqua",
      subtitle: config.subtitle || "",
      icon: config.icon || "mdi:water-alert",
      color: PALETTE_KEYS.includes(config.color) ? config.color : "blue",
      entities: config.entities,
      show_progress_bar: config.show_progress_bar !== false,
    };
  }

  getCardSize() {
    const n = (this.config && this.config.entities) ? this.config.entities.length : 1;
    return 2 + Math.ceil(n / 2);
  }

  static getConfigElement() {
    return document.createElement("pastel-water-leak-card-editor");
  }

  // -- helpers ---------------------------------------------------------------

  _entityIds() {
    return (this.config.entities || []).map((e) => (typeof e === "string" ? e : e.entity));
  }

  _entityLabel(entConf) {
    const id = typeof entConf === "string" ? entConf : entConf.entity;
    if (typeof entConf === "object" && entConf.name) return entConf.name;
    const stateObj = this.hass.states[id];
    return stateObj ? (stateObj.attributes.friendly_name || id) : id;
  }

  _entityIcon(entConf, isLeak) {
    const id = typeof entConf === "string" ? entConf : entConf.entity;
    if (typeof entConf === "object" && entConf.icon) return entConf.icon;
    const stateObj = this.hass.states[id];
    const customIcon = stateObj && stateObj.attributes.icon;
    if (customIcon) return customIcon;
    return isLeak ? "mdi:water-alert" : "mdi:water-check";
  }

  // -- actions -----------------------------------------------------------

  _showMoreInfo(id, ev) {
    if (ev) ev.stopPropagation();
    const event = new Event("hass-more-info", { bubbles: true, composed: true });
    event.detail = { entityId: id };
    this.dispatchEvent(event);
  }

  // -- render --------------------------------------------------------------

  render() {
    if (!this.config || !this.hass) return html``;

    const colors = getColors(this.config.color);
    const ids = this._entityIds();
    const validIds = ids.filter((id) => this.hass.states[id]);
    const leakCount = validIds.filter((id) => this.hass.states[id].state === "on").length;
    const total = validIds.length;
    const pct = total ? Math.round((leakCount / total) * 100) : 0;
    const anyLeak = leakCount > 0;
    const hasUnknown = ids.some(id => !this.hass.states[id] || ["unknown","unavailable"].includes(this.hass.states[id].state));

    return html`
      <ha-card style="--c-base:${colors.base}; --c-light:${colors.light}; --c-bg:${colors.bg}; --c-text:${colors.text};">

        <div class="header">
          <ha-icon icon=${this.config.icon} style="color:${colors.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
        </div>

        <div class="panel summary">
          <div class="summary-row">
            ${unsafeHTML(summarySvg(colors, anyLeak, 50))}
            <div class="count-block">
              <div class="count" style="color:${anyLeak ? ALARM_COLOR.base : colors.base}">
                ${leakCount}<span class="count-total">/${total}</span>
              </div>
              <div class="count-label">${anyLeak ? "perdite rilevate" : hasUnknown ? "dati mancanti" : "tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar ? html`
            <div class="progress-track">
              <div class="progress-fill" style="width:${pct}%; background:${anyLeak ? ALARM_COLOR.base : colors.base}"></div>
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
            const isLeak = stateObj.state === "on";
            const label = this._entityLabel(entConf);
            const icon = this._entityIcon(entConf, isLeak);

            return html`
              <div
                class="row ${isLeak ? "alarm" : ""}"
                @click=${(e) => this._showMoreInfo(id, e)}
              >
                <ha-icon icon=${icon} style="color:${isLeak ? ALARM_COLOR.base : "var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${isLeak ? "row-label-alarm" : "row-label-off"}">${label}</span>
                <span class="row-status ${isLeak ? "badge-alarm" : ""}" style="color:${isLeak ? ALARM_COLOR.base : "var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(stateObj.state) ? "Non disponibile" : isLeak ? "Perdita" : "OK"}
                </span>
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
      :host { display: block; }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px 6px;
      }
      .header ha-icon { --mdc-icon-size: 22px; }
      .title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 12px; color: var(--c-text); margin-top: 1px; }
      .panel { background: var(--c-bg); border-radius: 20px; margin: 4px; }
      .summary { padding: 12px 16px; }
      .summary-row { display: flex; align-items: center; justify-content: space-between; }
      .count-block { flex: 1; text-align: right; min-width: 0; }
      .count { font-size: 44px; font-weight: 300; line-height: 1; letter-spacing: -1px; }
      .count-total { font-size: 20px; }
      .count-label { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
      .progress-track {
        margin-top: 12px; height: 6px; border-radius: 3px;
        background: var(--c-light); overflow: hidden;
      }
      .progress-fill { height: 100%; transition: width 0.3s ease; }
      .rows { padding: 6px; }
      .row {
        display: flex; align-items: center; gap: 12px;
        padding: 13px 12px; border-radius: 16px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
      }
      .row.alarm { background: rgba(220,38,38,0.08); }
      .row:active { filter: brightness(0.97); }
      .row ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }
      .row-label { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .row-label-off { opacity: 0.65; }
      .row-label-alarm { font-weight: 600; color: #991b1b; }
      .row-status { font-size: 13px; font-weight: 600; }
      .badge-alarm {
        background: #fecaca; padding: 3px 9px; border-radius: 8px; font-weight: 700;
      }
      .row.missing { color: var(--error-color, red); font-size: 12px; padding: 10px 14px; }
      .divider { height: 0.5px; background: rgba(0,0,0,0.08); margin: 0 14px; }
    `;
  }
}

registerLegacy("pastel-water-leak-card", PastelWaterLeakCard);

// ============================================================================
// Visual editor
// ============================================================================
class PastelWaterLeakCardEditor extends LitElement {

  static get properties() {
    return { hass: {}, _config: { state: true } };
  }

  setConfig(config) {
    this._config = { ...config };
  }

  _valueChanged(field, value) {
    this._config = { ...this._config, [field]: value };
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
        selector: { entity: { multiple: true, domain: "binary_sensor" } },
      },
      { name: "show_progress_bar", selector: { boolean: {} } },
    ];

    const data = {
      title: this._config.title || "",
      subtitle: this._config.subtitle || "",
      icon: this._config.icon || "mdi:water-alert",
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
          <div class="hint">Nota: una perdita rilevata è sempre evidenziata in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `;
  }

  _labelFor(name) {
    const labels = {
      title: "Titolo",
      subtitle: "Sottotitolo (es. nome zona/piano)",
      icon: "Icona",
      entities: "Sensori perdita acqua",
      show_progress_bar: "Mostra barra di progresso",
    };
    return labels[name] || name;
  }

  static get styles() {
    return css`
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .color-label { font-size: 14px; color: var(--primary-text-color); margin-bottom: 8px; font-weight: 500; }
      .color-row { display: flex; gap: 10px; flex-wrap: wrap; }
      .swatch {
        width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover { transform: scale(1.1); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 10px; }
    `;
  }
}

registerLegacy("pastel-water-leak-card-editor", PastelWaterLeakCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pastel-water-leak-card",
  name: "Pastel Water Leak Card",
  description: "Card per sensori di perdita acqua con stile pastello, conteggio perdite e popup dettagli al tap.",
  preview: true,
});
