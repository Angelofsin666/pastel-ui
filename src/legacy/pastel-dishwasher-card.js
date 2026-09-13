import { registerLegacy } from "../legacy-style.js";
// ============================================================================
// Pastel Dishwasher Card — custom Lovelace card for Home Assistant / HACS
// ============================================================================

import { LitElement, html, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

// ----------------------------------------------------------------------------
// Color palette (same set as the other Pastel cards, for consistency)
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

function getColors(key) {
  return PALETTE[key] || PALETTE.blue;
}

function isValidNumber(value) {
  if (value === undefined || value === null) return false;
  if (value === "unknown" || value === "unavailable") return false;
  const n = Number(value);
  return !Number.isNaN(n);
}

// ----------------------------------------------------------------------------
// Dishwasher illustration SVG — animated water droplets, intensity depends
// on the on/off state (slow & faded when off, lively & fast when on).
// ----------------------------------------------------------------------------
function dishwasherSvg(colors, isOn) {
  const shell = colors.bg;
  const shellStroke = colors.light;
  const doorFill = colors.light;
  const innerFill = colors.base;
  const dropOpacity = isOn ? 0.75 : 0.35;
  const dropDur1 = isOn ? "1.1s" : "2.6s";
  const dropDur2 = isOn ? "0.95s" : "2.3s";
  const dropDur3 = isOn ? "1.3s" : "2.9s";

  return `
    <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="14" width="120" height="132" rx="14" fill="#f3f8fe" stroke="${shellStroke}" stroke-width="2"/>
      <rect x="32" y="26" width="50" height="10" rx="5" fill="${shell}"/>
      <circle cx="100" cy="31" r="7" fill="#ffffff" stroke="${shellStroke}" stroke-width="1.5"/>
      <circle cx="118" cy="31" r="7" fill="#ffffff" stroke="${shellStroke}" stroke-width="1.5"/>
      <rect x="28" y="46" width="104" height="86" rx="8" fill="${shell}"/>
      <rect x="34" y="52" width="92" height="74" rx="6" fill="${doorFill}" opacity="0.5"/>

      <rect x="40" y="58" width="3" height="46" fill="#ffffff" opacity="0.8"/>
      <circle cx="41" cy="58" r="9" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.9"/>

      <rect x="56" y="64" width="3" height="40" fill="#ffffff" opacity="0.7"/>
      <circle cx="57" cy="64" r="8" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>

      <rect x="100" y="60" width="22" height="30" rx="2" fill="#ffffff" opacity="0.85"/>
      <rect x="105" y="64" width="22" height="22" rx="2" fill="#ffffff" opacity="0.7"/>

      <circle cx="50" cy="115" r="2" fill="${innerFill}" opacity="${dropOpacity}">
        <animate attributeName="cy" values="118;100;118" dur="${dropDur1}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${dropOpacity};0;${dropOpacity}" dur="${dropDur1}" repeatCount="indefinite"/>
      </circle>
      <circle cx="75" cy="120" r="1.6" fill="${innerFill}" opacity="${dropOpacity}">
        <animate attributeName="cy" values="122;104;122" dur="${dropDur2}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${dropOpacity};0;${dropOpacity}" dur="${dropDur2}" repeatCount="indefinite"/>
      </circle>
      <circle cx="95" cy="116" r="1.8" fill="${innerFill}" opacity="${dropOpacity}">
        <animate attributeName="cy" values="119;98;119" dur="${dropDur3}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${dropOpacity};0;${dropOpacity}" dur="${dropDur3}" repeatCount="indefinite"/>
      </circle>

      <circle cx="55" cy="142" r="4.5" fill="#ffffff" stroke="${shellStroke}" stroke-width="1.5"/>
      <circle cx="68" cy="142" r="4.5" fill="#ffffff" stroke="${shellStroke}" stroke-width="1.5"/>
      <circle cx="81" cy="142" r="4.5" fill="#ffffff" stroke="${shellStroke}" stroke-width="1.5"/>
    </svg>`;
}

// ----------------------------------------------------------------------------
// Card
// ----------------------------------------------------------------------------
class PastelDishwasherCard extends LitElement {

  static get properties() {
    return { hass: {}, config: {} };
  }

  static getStubConfig() {
    return {
      title: "Lavastoviglie",
      subtitle: "Lavastoviglie",
      icon: "mdi:dishwasher",
      color: "blue",
      detection_mode: "power",
      power_entity: "",
      power_threshold: 5,
      state_entity: "",
    };
  }

  setConfig(config) {
    if (!config) throw new Error("Configurazione non valida");
    const mode = config.detection_mode === "boolean" ? "boolean" : "power";
    if (mode === "power" && !config.power_entity) {
      throw new Error("Devi specificare power_entity quando detection_mode è 'power'");
    }
    if (mode === "boolean" && !config.state_entity) {
      throw new Error("Devi specificare state_entity quando detection_mode è 'boolean'");
    }
    this.config = {
      title: config.title || "Lavastoviglie",
      subtitle: config.subtitle || "",
      icon: config.icon || "mdi:dishwasher",
      color: PALETTE_KEYS.includes(config.color) ? config.color : "blue",
      detection_mode: mode,
      power_entity: config.power_entity || "",
      power_threshold: (typeof config.power_threshold === "number") ? config.power_threshold : 5,
      state_entity: config.state_entity || "",
    };
  }

  getCardSize() {
    return 4;
  }

  static getConfigElement() {
    return document.createElement("pastel-dishwasher-card-editor");
  }

  // -- helpers ---------------------------------------------------------------

  _isOn() {
    if (!this.hass) return false;

    if (this.config.detection_mode === "power") {
      const stateObj = this.hass.states[this.config.power_entity];
      if (!stateObj) return false;
      const raw = stateObj.state;
      if (!isValidNumber(raw)) return false;
      return Number(raw) > this.config.power_threshold;
    }

    const stateObj = this.hass.states[this.config.state_entity];
    if (!stateObj) return false;
    return stateObj.state === "on";
  }

  _powerWatts() {
    if (this.config.detection_mode !== "power") return null;
    const stateObj = this.hass.states[this.config.power_entity];
    if (!stateObj) return null;
    const raw = stateObj.state;
    if (!isValidNumber(raw)) return null;
    return Number(raw);
  }

  _showMoreInfo(id, ev) {
    if (ev) ev.stopPropagation();
    if (!id) return;
    const event = new Event("hass-more-info", { bubbles: true, composed: true });
    event.detail = { entityId: id };
    this.dispatchEvent(event);
  }

  // -- render --------------------------------------------------------------

  render() {
    if (!this.config || !this.hass) return html``;

    const colors = getColors(this.config.color);
    const isOn = this._isOn();
    const watts = this._powerWatts();
    const sourceId = this.config.detection_mode === "power"
      ? this.config.power_entity
      : this.config.state_entity;

    return html`
      <ha-card style="--c-base:${colors.base}; --c-light:${colors.light}; --c-bg:${colors.bg}; --c-text:${colors.text};">

        <div class="header">
          <div class="header-left">
            <ha-icon icon=${this.config.icon} style="color:${colors.base}"></ha-icon>
            <div class="header-text">
              <div class="title">${this.config.title}</div>
              <div class="subtitle">${this.config.subtitle}</div>
            </div>
          </div>
          <span class="badge" @click=${(e) => this._showMoreInfo(sourceId, e)}>
            <span class="badge-dot"></span>
            ${isOn ? "Accesa" : "Spenta"}
          </span>
        </div>

        <div class="illustration" @click=${(e) => this._showMoreInfo(sourceId, e)}>
          ${unsafeHTML(dishwasherSvg(colors, isOn))}
        </div>

        ${this.config.detection_mode === "power" && watts !== null ? html`
          <div class="power-row">
            <ha-icon icon="mdi:flash" style="color:${colors.text}"></ha-icon>
            <span>${watts.toFixed(0)} W</span>
          </div>
        ` : ""}

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
        justify-content: space-between;
        padding: 12px 14px 8px;
      }
      .header-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .header ha-icon { --mdc-icon-size: 20px; }
      .title { font-size: 17px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 11px; color: var(--c-text); margin-top: 1px; }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 11px;
        border-radius: 12px;
        background: var(--c-bg);
        color: var(--c-text);
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
      }
      .badge-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--c-text);
      }
      .illustration {
        background: var(--c-bg);
        border-radius: 20px;
        margin: 4px;
        padding: 16px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
      .power-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 4px 4px 10px;
        font-size: 13px;
        font-weight: 600;
        color: var(--c-text);
      }
      .power-row ha-icon { --mdc-icon-size: 16px; }
    `;
  }
}

registerLegacy("pastel-dishwasher-card", PastelDishwasherCard);

// ============================================================================
// Visual editor
// ============================================================================
class PastelDishwasherCardEditor extends LitElement {

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

    const baseSchema = [
      { name: "title", selector: { text: {} } },
      { name: "subtitle", selector: { text: {} } },
      { name: "icon", selector: { icon: {} } },
    ];

    const baseData = {
      title: this._config.title || "",
      subtitle: this._config.subtitle || "",
      icon: this._config.icon || "mdi:dishwasher",
    };

    const mode = this._config.detection_mode === "boolean" ? "boolean" : "power";

    return html`
      <div class="editor">

        <ha-form
          .hass=${this.hass}
          .data=${baseData}
          .schema=${baseSchema}
          .computeLabel=${(s) => this._labelFor(s.name)}
          @value-changed=${(ev) => {
            this._config = { ...this._config, ...ev.detail.value };
            this._fireChanged();
          }}
        ></ha-form>

        <div class="color-section">
          <div class="section-label">Colore della card</div>
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

        <div class="detection-section">
          <div class="section-label">Come rilevare lo stato acceso/spento</div>
          <div class="mode-row">
            <button
              class="mode-button ${mode === "power" ? "selected" : ""}"
              @click=${() => this._valueChanged("detection_mode", "power")}
            >Sensore di consumo (W)</button>
            <button
              class="mode-button ${mode === "boolean" ? "selected" : ""}"
              @click=${() => this._valueChanged("detection_mode", "boolean")}
            >Booleano acceso/spento</button>
          </div>

          ${mode === "power" ? html`
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._config.power_entity || ""}
              .includeDomains=${["sensor"]}
              label="Entità sensore di consumo (W)"
              @value-changed=${(ev) => this._valueChanged("power_entity", ev.detail.value)}
            ></ha-entity-picker>
            <ha-textfield
              label="Soglia in Watt (sopra = accesa)"
              type="number"
              .value=${String(this._config.power_threshold ?? 5)}
              @input=${(ev) => this._valueChanged("power_threshold", Number(ev.target.value))}
            ></ha-textfield>
          ` : html`
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._config.state_entity || ""}
              .includeDomains=${["binary_sensor", "switch", "input_boolean"]}
              label="Entità booleano (acceso/spento)"
              @value-changed=${(ev) => this._valueChanged("state_entity", ev.detail.value)}
            ></ha-entity-picker>
          `}
        </div>

      </div>
    `;
  }

  _labelFor(name) {
    const labels = { title: "Titolo", subtitle: "Sottotitolo", icon: "Icona" };
    return labels[name] || name;
  }

  static get styles() {
    return css`
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .section-label { font-size: 14px; color: var(--primary-text-color); margin-bottom: 8px; font-weight: 500; }
      .color-row { display: flex; gap: 10px; flex-wrap: wrap; }
      .swatch {
        width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover { transform: scale(1.1); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .detection-section { display: flex; flex-direction: column; gap: 10px; }
      .mode-row { display: flex; gap: 8px; }
      .mode-button {
        flex: 1; padding: 10px; border-radius: 10px; border: 1px solid var(--divider-color, #ccc);
        background: transparent; cursor: pointer; font-size: 12px; color: var(--primary-text-color);
      }
      .mode-button.selected {
        border-color: var(--primary-color, #3d9cf0);
        background: var(--primary-color, #3d9cf0);
        color: #fff;
        font-weight: 600;
      }
    `;
  }
}

registerLegacy("pastel-dishwasher-card-editor", PastelDishwasherCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pastel-dishwasher-card",
  name: "Pastel Dishwasher Card",
  description: "Card lavastoviglie con illustrazione animata, rilevamento stato da consumo o booleano, colore personalizzabile.",
  preview: true,
});
