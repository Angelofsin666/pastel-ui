import { registerLegacy } from "../legacy-style.js";
// ============================================================================
// Pastel Temperature & Humidity Card — custom Lovelace card for HA / HACS
// ============================================================================

import { LitElement, html, css } from "lit-element";

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
  return PALETTE[key] || PALETTE.amber;
}

// ----------------------------------------------------------------------------
// Robust "no data" detection: covers undefined/null/"unknown"/"unavailable"/NaN
// ----------------------------------------------------------------------------
function isValidNumber(value) {
  if (value === undefined || value === null) return false;
  if (value === "unknown" || value === "unavailable") return false;
  const n = Number(value);
  return !Number.isNaN(n);
}

function toNumber(value) {
  return Number(value);
}

// ----------------------------------------------------------------------------
// Card
// ----------------------------------------------------------------------------
class PastelTempHumidityCard extends LitElement {

  static get properties() {
    return { hass: {}, config: {} };
  }

  static getStubConfig() {
    return {
      title: "Piano Terra",
      icon: "mdi:home",
      color: "orange",
      temperature_attribute: "temperature",
      humidity_attribute: "humidity",
      rooms: [],
    };
  }

  setConfig(config) {
    if (!config) throw new Error("Configurazione non valida");
    if (!Array.isArray(config.rooms)) {
      throw new Error("Devi specificare almeno una stanza (rooms: [...])");
    }
    this.config = {
      title: config.title || "Temperature",
      icon: config.icon || "mdi:home",
      color: PALETTE_KEYS.includes(config.color) ? config.color : "orange",
      temperature_attribute: config.temperature_attribute || "temperature",
      humidity_attribute: config.humidity_attribute || "humidity",
      rooms: config.rooms,
    };
  }

  getCardSize() {
    const n = (this.config && this.config.rooms) ? this.config.rooms.length : 1;
    return 1 + Math.ceil(n / 2);
  }

  static getConfigElement() {
    return document.createElement("pastel-temp-humidity-card-editor");
  }

  // -- helpers ---------------------------------------------------------------

  _roomData(roomConf) {
    const id = typeof roomConf === "string" ? roomConf : roomConf.entity;
    const stateObj = this.hass.states[id];
    const name = (typeof roomConf === "object" && roomConf.name)
      ? roomConf.name
      : (stateObj ? (stateObj.attributes.friendly_name || id) : id);
    const subtitle = (typeof roomConf === "object" && roomConf.subtitle) ? roomConf.subtitle : "";

    if (!stateObj) {
      return { id, name, subtitle, hasTemp: false, hasHum: false };
    }

    const rawTemp = stateObj.attributes[this.config.temperature_attribute];
    const rawHum = stateObj.attributes[this.config.humidity_attribute];

    const hasTemp = isValidNumber(rawTemp);
    const hasHum = isValidNumber(rawHum);

    return {
      id,
      name,
      subtitle,
      hasTemp,
      temp: hasTemp ? toNumber(rawTemp) : null,
      hasHum,
      hum: hasHum ? toNumber(rawHum) : null,
    };
  }

  _averageTemp(rooms) {
    const valid = rooms.filter((r) => r.hasTemp);
    if (valid.length === 0) return null;
    const sum = valid.reduce((acc, r) => acc + r.temp, 0);
    return sum / valid.length;
  }

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
    const rooms = this.config.rooms.map((r) => this._roomData(r));
    const avg = this._averageTemp(rooms);
    const avgLabel = avg !== null
      ? `Media ${avg.toFixed(2).replace(".", ",")} °C`
      : "Media non disponibile";

    return html`
      <ha-card style="--c-base:${colors.base}; --c-light:${colors.light}; --c-bg:${colors.bg}; --c-text:${colors.text};">

        <div class="header">
          <ha-icon icon=${this.config.icon} style="color:${colors.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${avgLabel}</div>
          </div>
        </div>

        <div class="grid">
          ${rooms.map((room) => html`
            <div class="room-card" @click=${(e) => this._showMoreInfo(room.id, e)}>
              <div class="room-name">${room.name}</div>
              ${room.subtitle ? html`<div class="room-subtitle">${room.subtitle}</div>` : ""}

              ${room.hasTemp ? html`
                <div class="temp-row">
                  <span class="temp-value">${room.temp.toFixed(1)}</span>
                  <span class="temp-unit">°C</span>
                </div>
                ${room.hasHum ? html`
                  <div class="hum-badge">
                    <ha-icon icon="mdi:water"></ha-icon>
                    <span>${Math.round(room.hum)}%</span>
                  </div>
                ` : ""}
              ` : html`
                <div class="no-data">dato non disponibile</div>
              `}
            </div>
          `)}
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
        padding: 12px 14px 8px;
      }
      .header ha-icon { --mdc-icon-size: 20px; }
      .title { font-size: 17px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 11px; color: var(--c-text); margin-top: 1px; }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        padding: 4px;
      }
      .room-card {
        background: var(--c-bg);
        border-radius: 16px;
        padding: 10px 12px;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        min-height: 64px;
      }
      .room-card:active { filter: brightness(0.97); }
      .room-name {
        font-size: 12px;
        font-weight: 600;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .room-subtitle {
        font-size: 10px;
        color: var(--secondary-text-color);
        margin-top: 1px;
      }
      .temp-row {
        display: flex;
        align-items: baseline;
        gap: 3px;
        margin-top: 4px;
      }
      .temp-value {
        font-size: 24px;
        font-weight: 300;
        color: var(--c-text);
        line-height: 1;
      }
      .temp-unit {
        font-size: 12px;
        color: var(--c-text);
      }
      .hum-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        margin-top: 4px;
        padding: 2px 7px;
        border-radius: 8px;
        background: var(--c-light);
        color: var(--c-text);
        font-size: 10px;
        font-weight: 600;
      }
      .hum-badge ha-icon { --mdc-icon-size: 11px; }
      .no-data {
        margin-top: 6px;
        font-size: 11px;
        color: var(--c-text);
        opacity: 0.6;
        font-style: italic;
      }
    `;
  }
}

registerLegacy("pastel-temp-humidity-card", PastelTempHumidityCard);

// ============================================================================
// Visual editor
// ============================================================================
class PastelTempHumidityCardEditor extends LitElement {

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

  // Rooms are stored as an array of {entity, name, subtitle}. The entity
  // picker selector only handles a flat entity list well, so we manage the
  // room list with simple add/remove/edit rows instead of a generic schema.

  _addRoom() {
    const rooms = [...(this._config.rooms || []), { entity: "", name: "", subtitle: "" }];
    this._valueChanged("rooms", rooms);
  }

  _removeRoom(index) {
    const rooms = [...(this._config.rooms || [])];
    rooms.splice(index, 1);
    this._valueChanged("rooms", rooms);
  }

  _updateRoom(index, field, value) {
    const rooms = [...(this._config.rooms || [])];
    rooms[index] = { ...rooms[index], [field]: value };
    this._valueChanged("rooms", rooms);
  }

  render() {
    if (!this._config || !this.hass) return html``;

    const baseSchema = [
      { name: "title", selector: { text: {} } },
      { name: "icon", selector: { icon: {} } },
    ];

    const baseData = {
      title: this._config.title || "",
      icon: this._config.icon || "mdi:home",
    };

    const rooms = this._config.rooms || [];

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

        <div class="rooms-section">
          <div class="color-label">Stanze</div>
          ${rooms.map((room, idx) => html`
            <div class="room-row">
              <ha-entity-picker
                .hass=${this.hass}
                .value=${room.entity || ""}
                .includeDomains=${["sensor"]}
                label="Entità sensore"
                @value-changed=${(ev) => this._updateRoom(idx, "entity", ev.detail.value)}
              ></ha-entity-picker>
              <ha-textfield
                label="Nome stanza (opzionale)"
                .value=${room.name || ""}
                @input=${(ev) => this._updateRoom(idx, "name", ev.target.value)}
              ></ha-textfield>
              <ha-textfield
                label="Sottotitolo (opzionale)"
                .value=${room.subtitle || ""}
                @input=${(ev) => this._updateRoom(idx, "subtitle", ev.target.value)}
              ></ha-textfield>
              <ha-icon-button
                .path=${"M19,13H5V11H19V13Z"}
                @click=${() => this._removeRoom(idx)}
                title="Rimuovi stanza"
              ></ha-icon-button>
            </div>
          `)}
          <button class="add-button" @click=${() => this._addRoom()}>+ Aggiungi stanza</button>
        </div>

        <div class="hint">
          Ogni stanza usa un'unica entità sensore con gli attributi
          <code>${this._config.temperature_attribute || "temperature"}</code> e
          <code>${this._config.humidity_attribute || "humidity"}</code>.
        </div>

      </div>
    `;
  }

  _labelFor(name) {
    const labels = { title: "Titolo", icon: "Icona" };
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
      .rooms-section { display: flex; flex-direction: column; gap: 10px; }
      .room-row {
        display: flex; flex-direction: column; gap: 6px;
        padding: 10px; border-radius: 12px; background: var(--secondary-background-color, #f4f4f4);
        position: relative;
      }
      .add-button {
        padding: 10px; border-radius: 12px; border: 1px dashed var(--divider-color, #ccc);
        background: transparent; cursor: pointer; font-size: 13px; color: var(--primary-text-color);
      }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
      .hint code { background: var(--secondary-background-color, #f4f4f4); padding: 1px 4px; border-radius: 4px; }
    `;
  }
}

registerLegacy("pastel-temp-humidity-card-editor", PastelTempHumidityCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pastel-temp-humidity-card",
  name: "Pastel Temperature & Humidity Card",
  description: "Griglia compatta temperatura/umidità per stanza, ottimizzata per mobile, con stile pastello e colore personalizzabile.",
  preview: true,
});
