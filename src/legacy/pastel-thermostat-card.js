import { registerLegacy } from "../legacy-style.js";
// ============================================================================
// Pastel Thermostat Card — custom Lovelace card for Home Assistant / HACS
// ============================================================================

import { LitElement, html, css } from "lit-element";

// ----------------------------------------------------------------------------
// Color palette (same set as the other Pastel cards)
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
  return !Number.isNaN(Number(value));
}

function readNumericState(hass, entityId) {
  if (!entityId || !hass) return null;
  const obj = hass.states[entityId];
  if (!obj) return null;
  const raw = obj.state;
  return isValidNumber(raw) ? Number(raw) : null;
}

function readBooleanState(hass, entityId) {
  if (!entityId || !hass) return null;
  const obj = hass.states[entityId];
  if (!obj) return null;
  return obj.state === "on" || obj.state === "true" || obj.state === "heat" ||
    obj.state === "cool" || obj.state === "auto" || obj.state === "heating" ||
    obj.state === "cooling";
}

// ----------------------------------------------------------------------------
// Card
// ----------------------------------------------------------------------------
class PastelThermostatCard extends LitElement {

  static get properties() {
    return { hass: {}, config: {}, _dragging: { state: true } };
  }

  static getStubConfig() {
    return {
      title: "Salotto",
      subtitle: "Termostato",
      icon: "mdi:thermometer",
      color: "blue",
      temperature_entity: "",
      humidity_entity: "",
      target_entity: "",
      target_min: 16,
      target_max: 30,
      target_step: 0.5,
      target_service: "",
      modes: [
        {
          name: "Riscaldamento",
          icon: "mdi:fire",
          state_entity: "",
          action: { type: "toggle", entity_id: "" },
        },
        {
          name: "Raffreddamento",
          icon: "mdi:snowflake",
          state_entity: "",
          action: { type: "toggle", entity_id: "" },
        },
      ],
    };
  }

  setConfig(config) {
    if (!config) throw new Error("Configurazione non valida");
    this.config = {
      title: config.title || "Termostato",
      subtitle: config.subtitle || "",
      icon: config.icon || "mdi:thermometer",
      color: PALETTE_KEYS.includes(config.color) ? config.color : "blue",
      temperature_entity: config.temperature_entity || "",
      humidity_entity: config.humidity_entity || "",
      target_entity: config.target_entity || "",
      target_min: config.target_min ?? 16,
      target_max: config.target_max ?? 30,
      target_step: config.target_step ?? 0.5,
      target_service: config.target_service || "",
      modes: Array.isArray(config.modes) ? config.modes : [],
    };
  }

  getCardSize() { return 4; }

  static getConfigElement() {
    return document.createElement("pastel-thermostat-card-editor");
  }

  // -- helpers ---------------------------------------------------------------

  _temperature() {
    return readNumericState(this.hass, this.config.temperature_entity);
  }

  _humidity() {
    return readNumericState(this.hass, this.config.humidity_entity);
  }

  _target() {
    return readNumericState(this.hass, this.config.target_entity);
  }

  _pct(value) {
    const min = this.config.target_min;
    const max = this.config.target_max;
    return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  }

  _modeIsOn(mode) {
    return readBooleanState(this.hass, mode.state_entity) === true;
  }

  // -- actions ---------------------------------------------------------------

  _showMoreInfo(entityId, ev) {
    if (!entityId) return;
    if (ev) ev.stopPropagation();
    const e = new Event("hass-more-info", { bubbles: true, composed: true });
    e.detail = { entityId };
    this.dispatchEvent(e);
  }

  async _callAction(action, ev) {
    if (ev) ev.stopPropagation();
    if (!action) return;
    try {
      if (window.hapticFeedback) window.hapticFeedback("light");
      else if (navigator.vibrate) navigator.vibrate(30);
    } catch {}

    switch (action.type) {
      case "toggle":
        if (action.entity_id) {
          this.hass.callService("homeassistant", "toggle", { entity_id: action.entity_id });
        }
        break;
      case "turn_on":
        if (action.entity_id) {
          const [d] = action.entity_id.split(".");
          this.hass.callService(d, "turn_on", { entity_id: action.entity_id });
        }
        break;
      case "turn_off":
        if (action.entity_id) {
          const [d] = action.entity_id.split(".");
          this.hass.callService(d, "turn_off", { entity_id: action.entity_id });
        }
        break;
      case "script":
        if (action.entity_id) {
          this.hass.callService("script", "turn_on", { entity_id: action.entity_id });
        }
        break;
      case "scene":
        if (action.entity_id) {
          this.hass.callService("scene", "turn_on", { entity_id: action.entity_id });
        }
        break;
      case "call_service": {
        const [sd, ss] = (action.service || "").split(".");
        if (sd && ss) this.hass.callService(sd, ss, action.data || {});
        break;
      }
      case "more_info":
        this._showMoreInfo(action.entity_id, ev);
        break;
      default:
        break;
    }
  }

  _adjustTarget(delta) {
    const current = this._target();
    if (current === null) return;
    const step = this.config.target_step;
    const min = this.config.target_min;
    const max = this.config.target_max;
    const next = Math.min(max, Math.max(min, Math.round((current + delta) * 10) / 10));
    this._setTarget(next);
  }

  _setTarget(value) {
    const svc = this.config.target_service;
    if (!svc) return;
    const [domain, service] = svc.split(".");
    if (!domain || !service) return;
    const entityId = this.config.target_entity;
    this.hass.callService(domain, service, {
      ...(entityId ? { entity_id: entityId } : {}),
      ...(domain === "number" || domain === "input_number" ? {value} : {temperature:value}),
    });
  }

  _onSliderPointerDown(ev) {
    ev.stopPropagation();
    this._sliderCleanup?.();
    if(ev.button!==0||ev.isPrimary===false)return;
    let moved=false;
    const track=ev.currentTarget;
    const move=e=>{
      if(e.pointerId!==ev.pointerId)return;
      const dx=Math.abs(e.clientX-ev.clientX),dy=Math.abs(e.clientY-ev.clientY);
      if(!moved&&dy>10&&dy>=dx){cleanup();return;}
      if(dx>10)moved=true;
    };
    const up=e=>{
      if(e.pointerId!==ev.pointerId)return;
      if(!moved&&Math.abs(e.clientY-ev.clientY)>10){cleanup();return;}
      const rect=track.getBoundingClientRect();
      const {target_min:min,target_max:max,target_step:step}=this.config;
      const fraction=Math.min(1,Math.max(0,(e.clientX-rect.left)/rect.width));
      const value=min+Math.round((fraction*(max-min))/step)*step;
      cleanup();this._setTarget(Math.min(max,Math.max(min,value)));
    };
    const cancel=e=>{if(e.pointerId===ev.pointerId)cleanup()};
    const cleanup=()=>{
      window.removeEventListener('pointermove',move);
      window.removeEventListener('pointerup',up);
      window.removeEventListener('pointercancel',cancel);
      window.removeEventListener('blur',cleanup);
      this._sliderCleanup=null;
    };
    this._sliderCleanup=cleanup;
    window.addEventListener('pointermove',move);
    window.addEventListener('pointerup',up);
    window.addEventListener('pointercancel',cancel);
    window.addEventListener('blur',cleanup);
  }
  disconnectedCallback(){this._sliderCleanup?.();super.disconnectedCallback()}

  // -- render ----------------------------------------------------------------

  render() {
    if (!this.config || !this.hass) return html``;

    const colors = getColors(this.config.color);
    const temp = this._temperature();
    const hum = this._humidity();
    const target = this._target();
    const pct = target !== null ? this._pct(target) : 0;

    return html`
      <ha-card style="
        --c-base:${colors.base};
        --c-light:${colors.light};
        --c-bg:${colors.bg};
        --c-text:${colors.text};
      ">
        <!-- header -->
        <div class="header">
          <div class="header-left">
            <ha-icon icon=${this.config.icon} style="color:var(--c-base)"></ha-icon>
            <div>
              <div class="title">${this.config.title}</div>
              ${this.config.subtitle ? html`<div class="subtitle">${this.config.subtitle}</div>` : ""}
            </div>
          </div>
          ${temp !== null ? html`
            <span class="badge">
              <span class="badge-dot"></span>
              ${temp.toFixed(1)}°
            </span>
          ` : ""}
        </div>

        <!-- summary panel -->
        <div class="panel-summary">
          <div class="summary-row">
            <!-- thermometer silhouette C -->
            <svg width="52" height="82" viewBox="0 0 36 64" fill="none"
              @click=${() => this._showMoreInfo(this.config.temperature_entity, null)}
              style="cursor:${this.config.temperature_entity ? "pointer" : "default"};flex-shrink:0">
              <path d="M13 34 L13 10 Q13 5 18 5 Q23 5 23 10 L23 34 Q27 36 27 44 Q27 52 18 52 Q9 52 9 44 Q9 36 13 34Z" fill="var(--c-light)"/>
              <path d="M15.5 34.5 L15.5 22 Q15.5 19 18 19 Q20.5 19 20.5 22 L20.5 34.5 Q23.5 36 23.5 44 Q23.5 49.5 18 49.5 Q12.5 49.5 12.5 44 Q12.5 36 15.5 34.5Z" fill="var(--c-base)" opacity=".9"/>
              <circle cx="15.5" cy="42" r="2" fill="white" opacity=".45"/>
              <line x1="23" y1="14" x2="27" y2="14" stroke="var(--c-base)" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
              <line x1="23" y1="20" x2="26" y2="20" stroke="var(--c-base)" stroke-width="1.2" stroke-linecap="round" opacity=".35"/>
              <line x1="23" y1="26" x2="27" y2="26" stroke="var(--c-base)" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
            </svg>

            <div class="count-block"
              @click=${() => this._showMoreInfo(this.config.temperature_entity, null)}>
              ${temp !== null ? html`
                <div class="count">${temp.toFixed(1)}<span class="count-unit">°</span></div>
                <div class="count-sub">temperatura attuale</div>
              ` : html`<div class="count no-data">—</div>`}
              ${hum !== null ? html`
                <div class="hum-badge"
                  @click=${(e) => { e.stopPropagation(); this._showMoreInfo(this.config.humidity_entity, e); }}>
                  <ha-icon icon="mdi:water" style="--mdc-icon-size:12px"></ha-icon>
                  ${Math.round(hum)}%
                </div>
              ` : ""}
            </div>
          </div>

          <!-- target + slider -->
          ${target !== null ? html`
            <div class="target-row">
              <div class="target-label">Target</div>
              <div class="stepper">
                <button class="step-btn" @click=${() => this._adjustTarget(-this.config.target_step)}>−</button>
                <div class="step-val">${target.toFixed(1)}<span class="step-unit">°</span></div>
                <button class="step-btn" @click=${() => this._adjustTarget(this.config.target_step)}>+</button>
              </div>
            </div>
            <div class="slider-wrap">
              <div class="slider-track" id="slider-track" @pointerdown=${this._onSliderPointerDown}>
                <div class="slider-fill" style="width:${pct}%"></div>
                <div class="slider-thumb" style="left:${pct}%"></div>
              </div>
            </div>
          ` : ""}
        </div>

        <!-- modes panel -->
        ${this.config.modes.length > 0 ? html`
          <div class="panel-modes">
            ${this.config.modes.map((mode, idx) => html`
              ${idx > 0 ? html`<div class="divider"></div>` : ""}
              <div class="mode-row" @click=${(e) => this._callAction(mode.action, e)}>
                <ha-icon icon=${mode.icon || "mdi:circle"} class="mode-icon"></ha-icon>
                <span class="mode-name">${mode.name || "Modalità " + (idx + 1)}</span>
                <span class="mode-badge ${this._modeIsOn(mode) ? "is-active" : ""}">
                  ${this._modeIsOn(mode) ? "Attivo" : "Off"}
                </span>
              </div>
            `)}
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
        display: flex; align-items: center; justify-content: space-between;
        padding: 12px 14px 8px;
      }
      .header-left { display: flex; align-items: center; gap: 10px; }
      .header ha-icon { --mdc-icon-size: 20px; }
      .title { font-size: 17px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 11px; color: var(--c-base); margin-top: 1px; }
      .badge {
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 11px; border-radius: 12px;
        background: var(--c-bg); color: var(--c-text);
        font-size: 11px; font-weight: 600; white-space: nowrap;
      }
      .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--c-base); }

      .panel-summary {
        background: var(--c-bg); border-radius: 20px; margin: 4px; padding: 14px 16px;
      }
      .summary-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .count-block { flex: 1; text-align: right; cursor: pointer; }
      .count { font-size: 54px; font-weight: 300; color: var(--c-base); line-height: 1; letter-spacing: -2px; }
      .count-unit { font-size: 26px; }
      .count.no-data { font-size: 40px; color: var(--secondary-text-color); }
      .count-sub { font-size: 12px; color: var(--secondary-text-color); margin-top: 3px; }
      .hum-badge {
        display: inline-flex; align-items: center; gap: 4px;
        margin-top: 8px; padding: 4px 10px; border-radius: 10px;
        background: var(--c-light); color: var(--c-text);
        font-size: 12px; font-weight: 600; cursor: pointer;
      }

      .target-row {
        display: flex; align-items: center; justify-content: space-between; margin-top: 14px;
      }
      .target-label { font-size: 10px; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: .05em; }
      .stepper { display: inline-flex; align-items: center; gap: 8px; }
      .step-btn {
        width: 30px; height: 30px; border-radius: 50%;
        border: 1.5px solid var(--c-base); background: transparent; color: var(--c-base);
        font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center;
        transition: all .15s; font-family: inherit;
      }
      .step-btn:active { background: var(--c-base); color: #fff; }
      .step-val { font-size: 22px; font-weight: 300; color: var(--c-base); min-width: 54px; text-align: center; }
      .step-unit { font-size: 13px; }

      .slider-wrap { margin-top: 10px; }
      .slider-track {
        height: 8px; border-radius: 4px; background: var(--c-light);
        position: relative; cursor: pointer; touch-action: pan-y;
      }
      .slider-fill { height: 100%; border-radius: 4px; background: var(--c-base); pointer-events: none; }
      .slider-thumb {
        width: 22px; height: 22px; border-radius: 50%; background: #fff;
        border: 2.5px solid var(--c-base); position: absolute; top: 50%;
        transform: translate(-50%, -50%); box-shadow: 0 1px 4px rgba(0,0,0,.2);
        pointer-events: none;
      }

      .panel-modes { background: var(--c-bg); border-radius: 20px; margin: 4px; padding: 6px; }
      .mode-row {
        display: flex; align-items: center; gap: 10px;
        padding: 13px 12px; border-radius: 14px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
      }
      .mode-row:active { filter: brightness(.95); }
      .mode-icon { --mdc-icon-size: 20px; color: var(--c-base); flex-shrink: 0; }
      .mode-name { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .mode-badge {
        font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 8px;
        background: var(--c-light); color: var(--c-text); transition: all .2s;
      }
      .mode-badge.is-active { background: var(--c-base); color: #fff; }
      .divider { height: .5px; background: rgba(0,0,0,.08); margin: 0 12px; }
    `;
  }
}

registerLegacy("pastel-thermostat-card", PastelThermostatCard);

// ============================================================================
// Visual Editor
// ============================================================================
class PastelThermostatCardEditor extends LitElement {

  static get properties() {
    return { hass: {}, _config: { state: true } };
  }

  setConfig(config) {
    this._config = { ...config, modes: [...(config.modes || [])] };
  }

  _fire() {
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: this._config }, bubbles: true, composed: true,
    }));
  }

  _set(field, value) {
    this._config = { ...this._config, [field]: value };
    this._fire();
  }

  _setMode(idx, field, value) {
    const modes = [...this._config.modes];
    modes[idx] = { ...modes[idx], [field]: value };
    this._config = { ...this._config, modes };
    this._fire();
  }

  _setModeAction(idx, field, value) {
    const modes = [...this._config.modes];
    modes[idx] = { ...modes[idx], action: { ...(modes[idx].action || {}), [field]: value } };
    this._config = { ...this._config, modes };
    this._fire();
  }

  _addMode() {
    const modes = [...(this._config.modes || []),
      { name: "Modalità", icon: "mdi:circle", state_entity: "", action: { type: "toggle", entity_id: "" } }];
    this._set("modes", modes);
  }

  _removeMode(idx) {
    const modes = [...this._config.modes];
    modes.splice(idx, 1);
    this._set("modes", modes);
  }

  _renderActionFields(mode, idx) {
    const type = mode.action?.type || "toggle";
    const needsEntity = ["toggle", "turn_on", "turn_off", "script", "scene", "more_info"].includes(type);
    const domainFilter = type === "script" ? ["script"] : type === "scene" ? ["scene"] : undefined;

    return html`
      <div class="field-group">
        <label class="field-label">Tipo azione</label>
        <select class="field-select"
          .value=${type}
          @change=${(ev) => this._setModeAction(idx, "type", ev.target.value)}>
          <option value="toggle">Toggle entità</option>
          <option value="turn_on">Accendi</option>
          <option value="turn_off">Spegni</option>
          <option value="script">Lancia script</option>
          <option value="scene">Attiva scena</option>
          <option value="call_service">Chiama servizio</option>
          <option value="more_info">Apri dettagli</option>
        </select>
      </div>
      ${needsEntity ? html`
        <ha-entity-picker .hass=${this.hass} .value=${mode.action?.entity_id || ""}
          .includeDomains=${domainFilter} label="Entità azione"
          @value-changed=${(ev) => this._setModeAction(idx, "entity_id", ev.detail.value)}>
        </ha-entity-picker>
      ` : ""}
      ${type === "call_service" ? html`
        <ha-textfield label="Servizio (es. climate.set_temperature)"
          .value=${mode.action?.service || ""}
          @change=${(ev) => this._setModeAction(idx, "service", ev.target.value)}>
        </ha-textfield>
      ` : ""}
    `;
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const cfg = this._config;

    return html`
      <div class="editor">

        <ha-form .hass=${this.hass}
          .data=${{ title: cfg.title || "", subtitle: cfg.subtitle || "", icon: cfg.icon || "mdi:thermometer" }}
          .schema=${[
            { name: "title", selector: { text: {} } },
            { name: "subtitle", selector: { text: {} } },
            { name: "icon", selector: { icon: {} } },
          ]}
          .computeLabel=${(s) => ({ title: "Titolo", subtitle: "Sottotitolo", icon: "Icona" })[s.name] || s.name}
          @value-changed=${(ev) => { this._config = { ...this._config, ...ev.detail.value }; this._fire(); }}>
        </ha-form>

        <div class="section-label">Colore</div>
        <div class="color-row">
          ${PALETTE_KEYS.map((key) => html`
            <button class="swatch ${cfg.color === key ? "selected" : ""}"
              style="background:${PALETTE[key].base}" title=${key}
              @click=${() => this._set("color", key)}></button>
          `)}
        </div>

        <div class="section-label">Sensori</div>
        <ha-entity-picker .hass=${this.hass} .value=${cfg.temperature_entity || ""}
          .includeDomains=${["sensor"]} label="Temperatura attuale"
          @value-changed=${(ev) => this._set("temperature_entity", ev.detail.value)}>
        </ha-entity-picker>
        <ha-entity-picker .hass=${this.hass} .value=${cfg.humidity_entity || ""}
          .includeDomains=${["sensor"]} label="Umidità (opzionale)"
          @value-changed=${(ev) => this._set("humidity_entity", ev.detail.value)}>
        </ha-entity-picker>

        <div class="section-label">Target temperatura</div>
        <ha-entity-picker .hass=${this.hass} .value=${cfg.target_entity || ""}
          label="Entità target (sensor o number)"
          @value-changed=${(ev) => this._set("target_entity", ev.detail.value)}>
        </ha-entity-picker>
        <ha-textfield label="Servizio per impostare il target (es. climate.set_temperature)"
          .value=${cfg.target_service || ""}
          @change=${(ev) => this._set("target_service", ev.target.value)}>
        </ha-textfield>
        <div class="row-3">
          <ha-textfield label="Min °" type="number" .value=${String(cfg.target_min ?? 16)}
            @change=${(ev) => this._set("target_min", Number(ev.target.value))}>
          </ha-textfield>
          <ha-textfield label="Max °" type="number" .value=${String(cfg.target_max ?? 30)}
            @change=${(ev) => this._set("target_max", Number(ev.target.value))}>
          </ha-textfield>
          <ha-textfield label="Step" type="number" .value=${String(cfg.target_step ?? 0.5)}
            @change=${(ev) => this._set("target_step", Number(ev.target.value))}>
          </ha-textfield>
        </div>

        <div class="section-label">Modalità</div>
        ${(cfg.modes || []).map((mode, idx) => html`
          <div class="mode-editor">
            <div class="mode-editor-header">
              <span class="mode-editor-title">${mode.name || "Modalità " + (idx + 1)}</span>
              <button class="remove-btn" @click=${() => this._removeMode(idx)}>✕</button>
            </div>
            <ha-textfield label="Nome modalità" .value=${mode.name || ""}
              @change=${(ev) => this._setMode(idx, "name", ev.target.value)}>
            </ha-textfield>
            <ha-icon-picker label="Icona" .value=${mode.icon || ""}
              @value-changed=${(ev) => this._setMode(idx, "icon", ev.detail.value)}>
            </ha-icon-picker>
            <ha-entity-picker .hass=${this.hass} .value=${mode.state_entity || ""}
              label="Entità per lo stato Attivo/Off"
              @value-changed=${(ev) => this._setMode(idx, "state_entity", ev.detail.value)}>
            </ha-entity-picker>
            ${this._renderActionFields(mode, idx)}
          </div>
        `)}
        <button class="add-button" @click=${this._addMode}>+ Aggiungi modalità</button>

      </div>
    `;
  }

  static get styles() {
    return css`
      .editor { display: flex; flex-direction: column; gap: 12px; padding: 8px 0; }
      .section-label { font-size: 14px; font-weight: 600; color: var(--primary-text-color); margin-top: 4px; }
      .color-row { display: flex; gap: 8px; flex-wrap: wrap; }
      .swatch {
        width: 28px; height: 28px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform .15s, border-color .15s;
      }
      .swatch:hover { transform: scale(1.12); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
      .mode-editor {
        border: 1.5px solid var(--divider-color, #e5e7eb); border-radius: 16px;
        padding: 12px; display: flex; flex-direction: column; gap: 10px;
      }
      .mode-editor-header { display: flex; align-items: center; justify-content: space-between; }
      .mode-editor-title { font-size: 13px; font-weight: 600; color: var(--primary-text-color); }
      .remove-btn {
        background: none; border: none; cursor: pointer; font-size: 14px;
        color: var(--secondary-text-color); padding: 2px 6px; border-radius: 6px;
      }
      .remove-btn:hover { background: #fee8e8; color: #dc2626; }
      .field-group { display: flex; flex-direction: column; gap: 4px; }
      .field-label { font-size: 12px; color: var(--secondary-text-color); }
      .field-select {
        padding: 8px; border-radius: 8px; border: 1px solid var(--divider-color, #e5e7eb);
        background: var(--card-background-color, #fff); font-size: 13px;
        color: var(--primary-text-color); font-family: inherit; cursor: pointer;
      }
      .add-button {
        padding: 12px; border-radius: 12px; border: 1.5px dashed var(--divider-color, #ccc);
        background: transparent; cursor: pointer; font-size: 13px;
        color: var(--primary-text-color); font-family: inherit;
      }
      .add-button:hover { border-color: var(--primary-color, #3d9cf0); color: var(--primary-color, #3d9cf0); }
    `;
  }
}

registerLegacy("pastel-thermostat-card-editor", PastelThermostatCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pastel-thermostat-card",
  name: "Pastel Thermostat Card",
  description: "Card termostato/clima completamente configurabile: sensori liberi, target con slider, modalità personalizzabili, colore pastello.",
  preview: true,
});
