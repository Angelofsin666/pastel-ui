import { registerLegacy } from "../legacy-style.js";
import { LitElement as LE, html, css } from "lit-element";

const COLORS = {
  amber: { base: "#f59e0b", bg: "#fef3c7" },
  blue: { base: "#3b82f6", bg: "#dbeafe" },
  green: { base: "#10b981", bg: "#d1fae5" },
  pink: { base: "#ec4899", bg: "#fce7f3" },
  purple: { base: "#a855f7", bg: "#f3e8ff" },
  red: { base: "#ef4444", bg: "#fee2e2" },
  teal: { base: "#14b8a6", bg: "#ccfbf1" },
  orange: { base: "#f97316", bg: "#ffedd5" },
};

const STATE_LABELS = {
  mowing: "In funzione",
  docked: "Alla base",
  paused: "In pausa",
  returning: "Ritorno alla base",
  error: "Errore",
  unavailable: "Non disponibile",
  unknown: "Sconosciuto",
};

function isUnavailable(stateObj) {
  if (!stateObj) return true;
  return ["unknown", "unavailable", "", null, undefined].includes(stateObj.state);
}

class PastelLawnMowerCard extends LE {
  static get properties() {
    return { hass: {}, config: {} };
  }

  setConfig(config) {
    if (!config.mower_entity) {
      throw new Error("Devi specificare mower_entity");
    }
    this.config = {
      title: "Robot tagliaerba",
      subtitle: "Robot tagliaerba",
      icon: "mdi:robot-mower",
      color: "green",
      image_url: new URL("./lawn-mower.png", import.meta.url).href,
      ...config,
    };
  }

  getCardSize() {
    return 4;
  }

  _fire(entityId) {
    const evt = new Event("hass-more-info", { bubbles: true, composed: true });
    evt.detail = { entityId };
    this.dispatchEvent(evt);
  }

  _callService(domain, service) {
    if (!this.hass || !this.config.mower_entity) return;
    this.hass.callService(domain, service, { entity_id: this.config.mower_entity });
  }

  render() {
    if (!this.hass || !this.config) return html``;

    const mower = this.hass.states[this.config.mower_entity];
    const state = mower ? mower.state : "unavailable";
    const unavailable = isUnavailable(mower);
    const palette = COLORS[this.config.color] || COLORS.green;
    const label = STATE_LABELS[state] || state;

    const battery = this.config.battery_entity ? this.hass.states[this.config.battery_entity] : null;
    const area = this.config.area_entity ? this.hass.states[this.config.area_entity] : null;
    const timeRemaining = this.config.time_remaining_entity ? this.hass.states[this.config.time_remaining_entity] : null;
    const blade = this.config.blade_entity ? this.hass.states[this.config.blade_entity] : null;
    const zone = this.config.zone_entity ? this.hass.states[this.config.zone_entity] : null;

    const battValue = battery && !isUnavailable(battery) ? battery.state : null;
    const areaValue = area && !isUnavailable(area) ? area.state : null;
    const timeValue = timeRemaining && !isUnavailable(timeRemaining)
      ? `${Math.floor(timeRemaining.state / 60)}:${String(timeRemaining.state % 60).padStart(2, "0")}`
      : null;
    const bladeValue = blade && !isUnavailable(blade) ? blade.state : null;
    const zoneValue = zone && !isUnavailable(zone) ? zone.state : null;
    const showZone = zoneValue && state === "mowing";

    const canStart = !unavailable && state !== "mowing";
    const canPause = !unavailable && state === "mowing";
    const canDock = !unavailable && state !== "docked" && state !== "returning";

    return html`
      <ha-card style="--c-base:${palette.base}; --c-bg:${palette.bg};">
        <div class="header" @click=${() => this._fire(this.config.mower_entity)}>
          <img class="icon-img" src="${this.config.image_url}" @error=${(e) => { e.target.style.display = "none"; }} />
          <div class="titles">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
          <div class="badge">
            <span class="dot"></span>${label}
          </div>
        </div>

        ${showZone
          ? html`<div class="zone-chip" @click=${() => this._fire(this.config.zone_entity)}>
              <ha-icon icon="mdi:map-marker"></ha-icon> Zona: ${zoneValue}
            </div>`
          : ""}

        <div class="stats">
          ${battValue !== null
            ? html`<div class="stat" @click=${() => this._fire(this.config.battery_entity)}>
                <div class="stat-label">Batteria</div>
                <div class="stat-value">${battValue}%</div>
              </div>`
            : ""}
          ${areaValue !== null
            ? html`<div class="stat" @click=${() => this._fire(this.config.area_entity)}>
                <div class="stat-label">Area</div>
                <div class="stat-value">${areaValue} m²</div>
              </div>`
            : ""}
          ${timeValue !== null
            ? html`<div class="stat" @click=${() => this._fire(this.config.time_remaining_entity)}>
                <div class="stat-label">Tempo</div>
                <div class="stat-value">${timeValue}</div>
              </div>`
            : ""}
          ${bladeValue !== null
            ? html`<div class="stat" @click=${() => this._fire(this.config.blade_entity)}>
                <div class="stat-label">Lame</div>
                <div class="stat-value">${bladeValue}</div>
              </div>`
            : ""}
        </div>

        <div class="actions">
          <button class="btn" ?disabled=${!canStart} @click=${() => this._callService("lawn_mower", "start_mowing")}>
            <ha-icon icon="mdi:play"></ha-icon> Avvia
          </button>
          <button class="btn" ?disabled=${!canPause} @click=${() => this._callService("lawn_mower", "pause")}>
            <ha-icon icon="mdi:pause"></ha-icon> Pausa
          </button>
          <button class="btn" ?disabled=${!canDock} @click=${() => this._callService("lawn_mower", "dock")}>
            <ha-icon icon="mdi:home-import-outline"></ha-icon> Ricarica
          </button>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      ha-card {
        border-radius: 28px;
        padding: 16px;
        background: var(--card-background-color, #fff);
      }
      .header {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
      }
      .icon-img {
        width: 56px;
        height: 56px;
        object-fit: contain;
        border-radius: 16px;
        background: var(--c-bg);
      }
      .titles {
        flex: 1;
        min-width: 0;
      }
      .title {
        font-size: 17px;
        font-weight: 600;
      }
      .subtitle {
        font-size: 13px;
        color: var(--c-base);
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 12px;
        background: var(--c-bg);
        color: var(--c-base);
        font-size: 11px;
        font-weight: 600;
        white-space: nowrap;
      }
      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--c-base);
      }
      .zone-chip {
        margin-top: 10px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        font-weight: 600;
        color: var(--c-base);
        background: var(--c-bg);
        padding: 4px 10px;
        border-radius: 12px;
        cursor: pointer;
      }
      .zone-chip ha-icon {
        --mdc-icon-size: 14px;
      }
      .stats {
        display: flex;
        gap: 8px;
        margin-top: 14px;
        flex-wrap: wrap;
      }
      .stat {
        flex: 1;
        min-width: 70px;
        background: var(--c-bg);
        border-radius: 14px;
        padding: 8px 10px;
        cursor: pointer;
      }
      .stat-label {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--c-base);
        opacity: 0.8;
        margin-bottom: 2px;
      }
      .stat-value {
        font-size: 15px;
        font-weight: 600;
      }
      .actions {
        display: flex;
        gap: 8px;
        margin-top: 14px;
      }
      .btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border: 1.5px solid var(--c-base);
        background: var(--c-bg);
        color: var(--c-base);
        border-radius: 16px;
        padding: 10px 4px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .btn[disabled] {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .btn:not([disabled]):hover {
        background: var(--c-base);
        color: white;
      }
    `;
  }

  static getConfigElement() {
    return document.createElement("pastel-lawn-mower-card-editor");
  }

  static getStubConfig() {
    return { mower_entity: "" };
  }
}

class PastelLawnMowerCardEditor extends LE {
  static get properties() {
    return { hass: {}, _config: {} };
  }

  setConfig(config) {
    this._config = config;
  }

  _valueChanged(ev) {
    const target = ev.target;
    const key = target.configValue;
    if (!key) return;
    const value = ev.detail && ev.detail.value !== undefined ? ev.detail.value : target.value;
    this._config = { ...this._config, [key]: value };
    const event = new CustomEvent("config-changed", { detail: { config: this._config } });
    this.dispatchEvent(event);
  }

  _entityPicker(label, key, required = false) {
    return html`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${this._config[key] || ""}
        .label=${label}
        .configValue=${key}
        .required=${required}
        allow-custom-entity
        @value-changed=${this._valueChanged}
      ></ha-entity-picker>
    `;
  }

  render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <div class="form">
        <ha-textfield
          label="Titolo"
          .value=${this._config.title || ""}
          .configValue=${"title"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-textfield
          label="Sottotitolo"
          .value=${this._config.subtitle || ""}
          .configValue=${"subtitle"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-textfield
          label="URL immagine"
          .value=${this._config.image_url || ""}
          .configValue=${"image_url"}
          @input=${this._valueChanged}
        ></ha-textfield>

        ${this._entityPicker("Entità robot tagliaerba (obbligatoria)", "mower_entity", true)}
        ${this._entityPicker("Entità batteria % (opzionale)", "battery_entity")}
        ${this._entityPicker("Entità area m² (opzionale)", "area_entity")}
        ${this._entityPicker("Entità tempo rimanente (opzionale)", "time_remaining_entity")}
        ${this._entityPicker("Entità stato lame (opzionale)", "blade_entity")}
        ${this._entityPicker("Entità zona corrente (opzionale)", "zone_entity")}
      </div>
    `;
  }

  static get styles() {
    return css`
      .form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px;
      }
    `;
  }
}

registerLegacy("pastel-lawn-mower-card", PastelLawnMowerCard);
registerLegacy("pastel-lawn-mower-card-editor", PastelLawnMowerCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pastel-lawn-mower-card",
  name: "Pastel Lawn Mower Card",
  description: "Card pastello per robot tagliaerba con controlli, stato lame e zona corrente.",
});
