import { registerLegacy } from "../legacy-style.js";
// =============================================================================
// pastel-clima-card.js
// Pastel Clima Card — Lovelace custom card for Home Assistant / HACS
// Author: Angelofsin666 | License: MIT | Version: 1.0.0
// =============================================================================

const CARD_VERSION = "1.0.0";

// ─── PALETTE ─────────────────────────────────────────────────────────────────
const PALETTES = {
  blue:   { bg: "#dbeafe", base: "#2563eb", light: "#bfdbfe", name: "Azzurro"     },
  green:  { bg: "#dcfce7", base: "#16a34a", light: "#bbf7d0", name: "Verde"       },
  purple: { bg: "#ede9fe", base: "#7c3aed", light: "#ddd6fe", name: "Viola"       },
  teal:   { bg: "#ccfbf1", base: "#0d9488", light: "#99f6e4", name: "Verde acqua" },
  amber:  { bg: "#fef3c7", base: "#d97706", light: "#fde68a", name: "Ambra"       },
  pink:   { bg: "#fce7f3", base: "#db2777", light: "#fbcfe8", name: "Rosa"        },
  indigo: { bg: "#e0e7ff", base: "#4338ca", light: "#c7d2fe", name: "Indaco"      },
  cyan:   { bg: "#cffafe", base: "#0891b2", light: "#a5f3fc", name: "Ciano"       },
  red:    { bg: "#fee2e2", base: "#dc2626", light: "#fecaca", name: "Rosso"       },
  orange: { bg: "#ffedd5", base: "#ea580c", light: "#fed7aa", name: "Arancio"     },
};
const PALETTE_KEYS = Object.keys(PALETTES);

// button-specific color palette (used for individual button backgrounds)
const BTN_COLORS = {
  green:  { bg: "#e6f9ef", base: "#34c472", name: "Verde"   },
  red:    { bg: "#fde9e9", base: "#ef4444", name: "Rosso"   },
  blue:   { bg: "#e8f3fe", base: "#3d9cf0", name: "Azzurro" },
  orange: { bg: "#fef3e2", base: "#f0943d", name: "Arancio" },
  teal:   { bg: "#e6faf4", base: "#20c997", name: "Acqua"   },
  purple: { bg: "#f3eefe", base: "#9061f9", name: "Viola"   },
  pink:   { bg: "#fce7f3", base: "#db2777", name: "Rosa"    },
  yellow: { bg: "#fef9c3", base: "#ca8a04", name: "Giallo"  },
};
const BTN_COLOR_KEYS = Object.keys(BTN_COLORS);

// ─── MDI ICON PATHS (subset for fallback rendering without mdi font) ────────
const MDI = {
  "mdi:air-conditioner": "M21 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 00-2 2v5h2v1h2v-1h10v1h2v-1h2v-5a2 2 0 00-2-2zM5 7h14v2H5V7zM3 14v-3h18v3H3z",
  "mdi:power":           "M16.56 5.44L15.11 6.89C16.84 7.94 18 9.83 18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44C5.36 6.88 4 9.28 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM13 3h-2v10h2V3z",
  "mdi:snowflake":       "M20 11h-2.5l1.5-1.5-1.41-1.41L15 11h-2v-2l2.91-2.91L14.5 4.68 13 6.18V3h-2v3.18L9.5 4.68 8.09 6.09 11 9v2H9L6.41 8.59 5 10l1.5 1.5H4v2h2.5L5 15l1.41 1.41L9 13h2v2l-2.91 2.91 1.41 1.41L11 17.82V21h2v-3.18l1.5 1.51 1.41-1.42L13 15v-2h2l2.59 2.59L19 14.09 17.5 13H20v-2z",
  "mdi:white-balance-sunny": "M12 7a5 5 0 100 10 5 5 0 000-10zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41",
  "mdi:water":           "M12 2C6 9 4 13 4 16a8 8 0 0016 0c0-3-2-7-8-14z",
  "mdi:fan":             "M12 12a2 2 0 100-4 2 2 0 000 4zM12 2c2 0 4 1.5 4 4 0 1.3-.7 2.4-1.7 3M12 2c-2 0-4 1.5-4 4 0 1.3.7 2.4 1.7 3M22 12c0 2-1.5 4-4 4-1.3 0-2.4-.7-3-1.7M22 12c0-2-1.5-4-4-4-1.3 0-2.4.7-3 1.7M12 22c-2 0-4-1.5-4-4 0-1.3.7-2.4 1.7-3M12 22c2 0 4-1.5 4-4 0-1.3-.7-2.4-1.7-3M2 12c0-2 1.5-4 4-4 1.3 0 2.4.7 3 1.7M2 12c0 2 1.5 4 4 4 1.3 0 2.4-.7 3-1.7",
  "mdi:weather-night":   "M17.75 4.09l-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94 3.17-.09L12 1l1.38 3-3.17.09zM21.25 11l-1.46.44-.44 1.46-.44-1.46L17.45 11l1.46-.44.44-1.46.44 1.46zM4.5 6.375l-1.1.33-.33 1.1-.33-1.1-1.09-.33 1.09-.33.33-1.1.33 1.1zM21 21l-9-9c0 0-3-2-5 0c-2 2 0 5 3 8z",
  "mdi:thermostat":      "M15 13V5a3 3 0 00-6 0v8a5 5 0 106 0zm-3 5a3 3 0 110-6 3 3 0 010 6z",
};

function mdiPath(icon) { return MDI[icon] || MDI["mdi:air-conditioner"]; }
function mdiSvg(icon, color, size = 16) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="${mdiPath(icon)}"/></svg>`;
}

// ─── POWER STATE DETECTION ───────────────────────────────────────────────────
// Determines on/off given an entity that could be: switch/input_boolean/binary_sensor
// (direct on/off state) OR a numeric power sensor (threshold-based).
function isEntityOn(hass, entityId, thresholdW) {
  if (!entityId || !hass) return null;
  const state = hass.states[entityId];
  if (!state) return null;

  const domain = entityId.split(".")[0];

  if (["switch", "input_boolean", "binary_sensor"].includes(domain)) {
    return state.state === "on";
  }

  // numeric sensor (e.g. power in W)
  const numeric = parseFloat(state.state);
  if (!isNaN(numeric)) {
    const t = thresholdW ?? 5;
    return numeric >= t;
  }

  // fallback: treat "on"/"off" string state generically
  return state.state === "on";
}

function isNumericDomain(hass, entityId) {
  if (!entityId || !hass) return false;
  const domain = entityId.split(".")[0];
  if (["switch", "input_boolean", "binary_sensor"].includes(domain)) return false;
  const state = hass.states[entityId];
  if (!state) return domain === "sensor"; // assume numeric until proven otherwise
  return !isNaN(parseFloat(state.state));
}

function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

// =============================================================================
// MAIN CARD
// =============================================================================
class PastelClimaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = null;
    this._hass   = null;
  }

  static getConfigElement() {
    return document.createElement("pastel-clima-card-editor");
  }

  static getStubConfig() {
    return {
      title:        "Climatizzatore",
      subtitle:     "Raffreddamento",
      color:        "blue",
      temp_entity:  "",
      hum_entity:   "",
      power_entity: "",
      power_threshold: 5,
      show_fan:     false,
      fan_entity:   "",
      buttons: [
        { name: "Accendi", icon: "mdi:power",  color: "green",  action: { action: "none" } },
        { name: "Spegni",  icon: "mdi:power",  color: "red",    action: { action: "none" } },
        { name: "Clima",   icon: "mdi:snowflake", color: "blue",   action: { action: "none" } },
        { name: "Caldo",   icon: "mdi:white-balance-sunny", color: "orange", action: { action: "none" } },
        { name: "Deumidifica", icon: "mdi:water", color: "teal", action: { action: "none" } },
        { name: "Ventola", icon: "mdi:fan", color: "purple", action: { action: "none" } },
      ],
    };
  }

  setConfig(config) {
    if (!Array.isArray(config.buttons)) {
      throw new Error("pastel-clima-card: 'buttons' deve essere una lista");
    }
    this._config = {
      title:        config.title        ?? "Climatizzatore",
      subtitle:     config.subtitle     ?? "",
      color:        PALETTE_KEYS.includes(config.color) ? config.color : "blue",
      temp_entity:  config.temp_entity  ?? "",
      hum_entity:   config.hum_entity   ?? "",
      power_entity: config.power_entity ?? "",
      power_threshold: config.power_threshold ?? 5,
      show_fan:     config.show_fan ?? false,
      fan_entity:   config.fan_entity ?? "",
      fan_label:    config.fan_label ?? "Velocità ventola",
      image_url:    config.image_url ?? new URL("./ac-unit.svg", import.meta.url).href,
      buttons:      config.buttons,
    };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  getCardSize() {
    const rows = Math.ceil((this._config?.buttons?.length ?? 0) / 2);
    return 3 + rows + (this._config?.show_fan ? 1 : 0);
  }

  _callButtonAction(btn) {
    if (!this._hass || !btn?.action) return;
    const action = btn.action;
    if (!action.action || action.action === "none") return;

    if (action.action === "call-service" || action.action === "perform-action") {
      const service = action.service || action.perform_action;
      if (!service) return;
      const [domain, svc] = service.split(".");
      this._hass.callService(domain, svc, action.service_data || action.data || {}, action.target || {});
    } else if (action.action === "toggle" && action.entity) {
      const domain = action.entity.split(".")[0];
      this._hass.callService(domain, "toggle", {}, { entity_id: action.entity });
    } else if (action.action === "navigate" && action.navigation_path) {
      history.pushState(null, "", action.navigation_path);
      window.dispatchEvent(new CustomEvent("location-changed"));
    }
  }

  _render() {
    if (!this._config) return;
    const cfg  = this._config;
    const hass = this._hass;
    const C    = PALETTES[cfg.color];

    const temp = cfg.temp_entity ? parseFloat(hass?.states[cfg.temp_entity]?.state) : null;
    const hum  = cfg.hum_entity  ? parseFloat(hass?.states[cfg.hum_entity]?.state)  : null;
    const tempStr = temp !== null && !isNaN(temp) ? temp.toFixed(1) : "--";
    const humStr  = hum  !== null && !isNaN(hum)  ? Math.round(hum) + "%" : null;

    const powerOn = cfg.power_entity ? isEntityOn(hass, cfg.power_entity, cfg.power_threshold) : null;

    const PANEL = "rgba(255,255,255,0.45)";
    const BADGE = "rgba(255,255,255,0.65)";

    // ── status badge (top right of header) ──
    const statusBadge = powerOn !== null ? `
      <div class="status-badge" style="background:${BADGE};color:${C.base}">
        <div class="status-dot" style="background:${C.base}"></div>
        ${powerOn ? "Acceso" : "Spento"}
      </div>` : "";

    // ── buttons grid (2 per row) ──
    const buttonsHTML = cfg.buttons.map((btn, i) => {
      const bc = BTN_COLORS[btn.color] || BTN_COLORS.blue;
      // active-state detection: if btn.state_entity is set, check it; highlight via border/scale
      let isActive = null;
      if (btn.state_entity) {
        isActive = isEntityOn(hass, btn.state_entity, btn.state_threshold);
      }
      const activeStyle = isActive
        ? `box-shadow:0 0 0 2px ${bc.base} inset;`
        : "";
      return `
        <button class="pbtn" data-idx="${i}" style="background:${bc.bg};color:${bc.base};${activeStyle}">
          ${mdiSvg(btn.icon || "mdi:air-conditioner", bc.base, 22)}
          <span>${btn.name || ""}</span>
        </button>`;
    }).join("");

    // ── fan slider ──
    let fanHTML = "";
    if (cfg.show_fan && cfg.fan_entity) {
      const fanState = hass?.states[cfg.fan_entity];
      let fanPct = 0, fanValueStr = "--";
      if (fanState) {
        const domain = cfg.fan_entity.split(".")[0];
        if (domain === "input_number" || domain === "number") {
          const min = parseFloat(fanState.attributes?.min ?? 0);
          const max = parseFloat(fanState.attributes?.max ?? 100);
          const val = parseFloat(fanState.state);
          fanPct = clamp(((val - min) / (max - min)) * 100, 0, 100);
          fanValueStr = fanState.state;
        } else if (domain === "select" || domain === "input_select") {
          fanValueStr = fanState.state;
          const options = fanState.attributes?.options || [];
          const idx = options.indexOf(fanState.state);
          fanPct = options.length > 1 ? (idx / (options.length - 1)) * 100 : 0;
        } else {
          fanValueStr = fanState.state;
        }
      }
      fanHTML = `
        <div class="fan-row" style="background:${PANEL}">
          <div class="fan-top">
            <div class="fan-label" style="color:${C.base}">
              ${mdiSvg("mdi:fan", C.base, 16)}
              ${cfg.fan_label}
            </div>
            <div class="fan-value" style="color:${C.base}">${fanValueStr}</div>
          </div>
          <div class="fan-track" style="background:${C.light}">
            <div class="fan-fill" style="width:${fanPct}%;background:${C.base}"></div>
            <div class="fan-thumb" style="left:calc(${fanPct}% - 10px)"></div>
          </div>
        </div>`;
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; }
        .card {
          background: white;
          border-radius: 28px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
          padding: 14px;
          font-family: var(--primary-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
        }
        .header { display:flex; align-items:center; gap:10px; margin-bottom:12px; }
        .header-icon {
          width:44px; height:44px; border-radius:12px;
          background:${C.bg}; display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }
        .header-title { font-size:20px; font-weight:800; color:#1a1a2e; line-height:1.1; }
        .header-sub   { font-size:13px; font-weight:600; color:${C.base}; margin-top:1px; }
        .status-badge {
          margin-left:auto; display:flex; align-items:center; gap:6px;
          padding:6px 14px; border-radius:12px;
          font-size:13px; font-weight:700; white-space:nowrap;
        }
        .status-dot { width:8px; height:8px; border-radius:50%; }

        .main-panel {
          background:${C.bg}; border-radius:18px; padding:16px;
          margin-bottom:12px; display:flex; align-items:center; gap:10px;
        }
        .temp-block { flex:1; text-align:right; }
        .ac-photo { width:100%; max-width:150px; display:block; }
        .ac-photo-fallback { display:flex; align-items:center; }
        .temp-val { font-size:50px; font-weight:300; color:${C.base}; line-height:1; letter-spacing:-1px; }
        .temp-unit { font-size:24px; font-weight:300; }
        .temp-label { font-size:12px; color:#7b8094; margin-top:4px; }
        .hum-badge {
          display:inline-flex; align-items:center; gap:5px; margin-top:10px;
          padding:6px 14px; border-radius:14px; background:white;
          color:${C.base}; font-size:13px; font-weight:700;
        }

        .btn-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:8px; }
        .pbtn {
          border-radius:16px; border:none; padding:16px 0;
          display:flex; flex-direction:column; align-items:center; gap:7px;
          cursor:pointer; font-size:14px; font-weight:700;
          transition: transform 0.1s ease;
        }
        .pbtn:active { transform: scale(0.96); }

        .fan-row { border-radius:16px; padding:12px 16px; margin-top:4px; }
        .fan-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
        .fan-label { display:flex; align-items:center; gap:8px; font-size:14px; font-weight:700; }
        .fan-value { font-size:14px; font-weight:700; }
        .fan-track { position:relative; height:6px; border-radius:3px; }
        .fan-fill  { position:absolute; left:0; top:0; height:100%; border-radius:3px; }
        .fan-thumb { position:absolute; top:50%; transform:translateY(-50%); width:20px; height:20px; border-radius:50%; background:white; box-shadow:0 1px 5px rgba(0,0,0,0.25); }
      </style>

      <div class="card">
        <div class="header">
          <div class="header-icon">
            ${mdiSvg("mdi:air-conditioner", C.base, 24)}
          </div>
          <div>
            <div class="header-title">${cfg.title}</div>
            <div class="header-sub">${cfg.subtitle}</div>
          </div>
          ${statusBadge}
        </div>

        <div class="main-panel">
          <div class="temp-block" style="text-align:left;flex:1">
            <img class="ac-photo" src="${cfg.image_url}" alt="Climatizzatore"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="ac-photo-fallback" style="display:none">
              ${mdiSvg("mdi:air-conditioner", C.base, 64)}
            </div>
          </div>
          <div class="temp-block">
            <div class="temp-val">${tempStr}<span class="temp-unit">°</span></div>
            <div class="temp-label">Temperatura ambiente</div>
            ${humStr ? `<div class="hum-badge">${mdiSvg("mdi:water", C.base, 13)} ${humStr} umidità</div>` : ""}
          </div>
        </div>

        <div class="btn-grid">
          ${buttonsHTML}
        </div>

        ${fanHTML}
      </div>`;

    // bind button events
    this.shadowRoot.querySelectorAll(".pbtn").forEach(el => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.dataset.idx, 10);
        this._callButtonAction(cfg.buttons[idx]);
      });
    });
  }
}

// =============================================================================
// EDITOR
// =============================================================================
class PastelClimaCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = null;
    this._hass   = null;
  }

  setConfig(config) {
    this._config = { ...config };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this.shadowRoot.querySelectorAll("ha-entity-picker").forEach(p => p.hass = hass);
    this.shadowRoot.querySelectorAll("ha-icon-picker").forEach(p => p.hass = hass);
    this.shadowRoot.querySelectorAll("ha-selector").forEach(p => p.hass = hass);
  }

  _fire() {
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: { ...this._config } },
      bubbles: true, composed: true,
    }));
  }

  _set(key, val) { this._config = { ...this._config, [key]: val }; this._fire(); }

  _setBtn(i, key, val) {
    const buttons = [...(this._config.buttons || [])];
    buttons[i] = { ...buttons[i], [key]: val };
    this._config = { ...this._config, buttons };
    this._fire();
  }

  _addBtn() {
    const buttons = [...(this._config.buttons || []), {
      name: "Nuovo tasto", icon: "mdi:air-conditioner", color: "blue",
      action: { action: "none" }, state_entity: "", state_threshold: 5,
    }];
    this._config = { ...this._config, buttons };
    this._fire();
    this._renderButtons();
  }

  _removeBtn(i) {
    const buttons = [...(this._config.buttons || [])];
    buttons.splice(i, 1);
    this._config = { ...this._config, buttons };
    this._fire();
    this._renderButtons();
  }

  _moveBtn(i, dir) {
    const buttons = [...(this._config.buttons || [])];
    const j = i + dir;
    if (j < 0 || j >= buttons.length) return;
    [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
    this._config = { ...this._config, buttons };
    this._fire();
    this._renderButtons();
  }

  _renderButtons() {
    const container = this.shadowRoot.getElementById("buttons-container");
    if (!container) return;
    container.innerHTML = "";
    const total = (this._config.buttons || []).length;

    (this._config.buttons || []).forEach((btn, i) => {
      const wrap = document.createElement("div");
      wrap.className = "btn-editor";

      // ── row1: order arrows + num + name + delete ──
      const row1 = document.createElement("div");
      row1.className = "btn-row1";

      const orderWrap = document.createElement("div");
      orderWrap.className = "order-wrap";
      const upBtn = document.createElement("button");
      upBtn.className = "order-btn";
      upBtn.disabled = i === 0;
      upBtn.title = "Sposta su";
      upBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg>`;
      upBtn.addEventListener("click", () => this._moveBtn(i, -1));
      const downBtn = document.createElement("button");
      downBtn.className = "order-btn";
      downBtn.disabled = i === total - 1;
      downBtn.title = "Sposta giù";
      downBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>`;
      downBtn.addEventListener("click", () => this._moveBtn(i, 1));
      orderWrap.appendChild(upBtn);
      orderWrap.appendChild(downBtn);

      const num = document.createElement("div");
      num.className = "btn-num";
      num.textContent = i + 1;

      const nameField = document.createElement("ha-textfield");
      nameField.label = "Nome tasto";
      nameField.value = btn.name || "";
      nameField.style.flex = "1";
      nameField.addEventListener("change", e => this._setBtn(i, "name", e.target.value));

      const delBtn = document.createElement("button");
      delBtn.className = "del-btn";
      delBtn.title = "Rimuovi tasto";
      delBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z"/></svg>`;
      delBtn.addEventListener("click", () => this._removeBtn(i));

      row1.appendChild(orderWrap);
      row1.appendChild(num);
      row1.appendChild(nameField);
      row1.appendChild(delBtn);

      // ── row2: icon picker + color swatches ──
      const row2 = document.createElement("div");
      row2.className = "btn-row2";

      const iconPicker = document.createElement("ha-icon-picker");
      iconPicker.hass  = this._hass;
      iconPicker.label = "Icona";
      iconPicker.value = btn.icon || "mdi:air-conditioner";
      iconPicker.style.flex = "1";
      iconPicker.addEventListener("value-changed", e => this._setBtn(i, "icon", e.detail.value));

      row2.appendChild(iconPicker);

      const colorWrap = document.createElement("div");
      colorWrap.className = "color-swatches";
      BTN_COLOR_KEYS.forEach(ck => {
        const sw = document.createElement("button");
        sw.className = "mini-swatch" + (btn.color === ck ? " sel" : "");
        sw.style.background = BTN_COLORS[ck].base;
        sw.title = BTN_COLORS[ck].name;
        sw.addEventListener("click", () => {
          this._setBtn(i, "color", ck);
          this._renderButtons();
        });
        colorWrap.appendChild(sw);
      });

      // ── row3: action selector (HA native ha-selector type=action) ──
      const actionLabel = document.createElement("div");
      actionLabel.className = "mini-label";
      actionLabel.textContent = "Azione al tocco";

      const actionSelector = document.createElement("ha-selector");
      actionSelector.hass = this._hass;
      actionSelector.selector = { action: {} };
      actionSelector.value = btn.action || { action: "none" };
      actionSelector.addEventListener("value-changed", e => this._setBtn(i, "action", e.detail.value));

      // ── row4: optional state entity for "active" highlight ──
      const stateLabel = document.createElement("div");
      stateLabel.className = "mini-label";
      stateLabel.textContent = "Entità stato attivo (opzionale)";

      const statePicker = document.createElement("ha-entity-picker");
      statePicker.hass = this._hass;
      statePicker.label = "Entità (boolean o sensore)";
      statePicker.value = btn.state_entity || "";
      statePicker.allowCustomEntity = true;
      statePicker.addEventListener("value-changed", e => {
        this._setBtn(i, "state_entity", e.detail.value);
        this._renderButtons();
      });

      wrap.appendChild(row1);
      wrap.appendChild(row2);
      wrap.appendChild(colorWrap);
      wrap.appendChild(actionLabel);
      wrap.appendChild(actionSelector);
      wrap.appendChild(stateLabel);
      wrap.appendChild(statePicker);

      // show threshold field only if state_entity looks numeric
      if (btn.state_entity && isNumericDomain(this._hass, btn.state_entity)) {
        const threshField = document.createElement("ha-textfield");
        threshField.label = "Soglia attivo (es. Watt)";
        threshField.type  = "number";
        threshField.value = btn.state_threshold ?? 5;
        threshField.addEventListener("change", e => this._setBtn(i, "state_threshold", parseFloat(e.target.value)));
        wrap.appendChild(threshField);
      }

      container.appendChild(wrap);
    });

    const addBtn = document.createElement("button");
    addBtn.className = "add-btn";
    addBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> Aggiungi tasto`;
    addBtn.addEventListener("click", () => this._addBtn());
    container.appendChild(addBtn);
  }

  _render() {
    if (!this._config) return;
    const cfg = this._config;
    const showThreshold = cfg.power_entity && isNumericDomain(this._hass, cfg.power_entity);

    this.shadowRoot.innerHTML = `
      <style>
        .editor { display:flex; flex-direction:column; gap:12px; padding:4px 0; }
        .section-title {
          font-size:11px; font-weight:700; text-transform:uppercase;
          letter-spacing:0.6px; color:var(--secondary-text-color); margin-top:6px;
        }
        .row2 { display:grid; grid-template-columns:1fr 1fr; gap:8px; }

        .swatches { display:flex; gap:8px; flex-wrap:wrap; margin-top:4px; }
        .swatch {
          width:28px; height:28px; border-radius:50%;
          border:2px solid transparent; cursor:pointer; padding:0;
          transition:transform 0.12s, border-color 0.12s;
        }
        .swatch:hover { transform:scale(1.12); }
        .swatch.sel   { border-color:#1a1a2e; box-shadow:0 0 0 2px var(--card-background-color,#fff); }

        .toggle-row { display:flex; align-items:center; justify-content:space-between; }
        .toggle-label { font-size:13px; color:var(--primary-text-color); }

        ha-entity-picker, ha-icon-picker, ha-selector { display:block; }

        /* button editor blocks */
        .btn-editor {
          background:var(--secondary-background-color); border-radius:12px;
          padding:10px; display:flex; flex-direction:column; gap:8px;
        }
        .btn-row1 { display:flex; align-items:center; gap:6px; }
        .btn-row2 { display:flex; align-items:center; gap:6px; }

        .order-wrap { display:flex; flex-direction:column; gap:1px; flex-shrink:0; }
        .order-btn {
          background:none; border:none; cursor:pointer; color:var(--secondary-text-color);
          padding:1px; border-radius:4px; display:flex; align-items:center;
        }
        .order-btn:hover:not(:disabled) { color:var(--primary-color); background:var(--divider-color); }
        .order-btn:disabled { opacity:0.25; cursor:default; }

        .btn-num {
          width:22px; height:22px; border-radius:50%; background:var(--primary-color);
          color:#fff; font-size:11px; font-weight:700;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }
        .del-btn { background:none; border:none; cursor:pointer; color:var(--error-color,#f44336); padding:4px; border-radius:6px; display:flex; align-items:center; }
        .del-btn:hover { background:rgba(244,67,54,0.08); }

        .color-swatches { display:flex; gap:6px; flex-wrap:wrap; }
        .mini-swatch {
          width:22px; height:22px; border-radius:50%; border:2px solid transparent;
          cursor:pointer; padding:0; transition:transform 0.1s, border-color 0.1s;
        }
        .mini-swatch:hover { transform:scale(1.15); }
        .mini-swatch.sel { border-color:#1a1a2e; }

        .mini-label { font-size:11px; font-weight:600; color:var(--secondary-text-color); margin-top:2px; }

        .add-btn {
          display:flex; align-items:center; gap:6px; padding:8px 14px;
          border-radius:10px; border:1.5px dashed var(--divider-color);
          background:none; cursor:pointer; color:var(--primary-color);
          font-size:13px; font-weight:600; justify-content:center; width:100%;
        }
        .add-btn:hover { background:var(--secondary-background-color); }
      </style>

      <div class="editor">

        <div class="section-title">Intestazione</div>
        <div class="row2">
          <ha-textfield id="f-title"    label="Titolo"      value="${cfg.title    ?? ""}"></ha-textfield>
          <ha-textfield id="f-subtitle" label="Sottotitolo" value="${cfg.subtitle ?? ""}"></ha-textfield>
        </div>

        <div class="section-title">Colore tema</div>
        <div class="swatches">
          ${PALETTE_KEYS.map(k => `
            <button class="swatch ${cfg.color === k ? "sel" : ""}"
              style="background:${PALETTES[k].base}"
              data-color="${k}" title="${PALETTES[k].name}"></button>`).join("")}
        </div>

        <div class="section-title">Sensori</div>
        <div id="temp-picker-slot"></div>
        <div id="hum-picker-slot"></div>

        <div class="section-title">Immagine climatizzatore</div>
        <ha-textfield id="f-image" label="Percorso immagine (es. /local/ac-unit.png)" value="${cfg.image_url ?? "ac-unit.png"}"></ha-textfield>

        <div class="section-title">Stato Acceso/Spento</div>
        <div id="power-picker-slot"></div>
        <div id="threshold-slot"></div>

        <div class="toggle-row">
          <span class="toggle-label">Mostra slider ventola</span>
          <ha-switch id="f-show-fan" ${cfg.show_fan ? "checked" : ""}></ha-switch>
        </div>
        <div id="fan-picker-slot"></div>
        <div id="fan-label-slot"></div>

        <div class="section-title">Tasti (riordina con le frecce ▲▼)</div>
        <div id="buttons-container"></div>

      </div>`;

    // ── bindings: text fields ──
    const bind = (id, key, parse) => {
      const el = this.shadowRoot.getElementById(id);
      if (el) el.addEventListener("change", e => this._set(key, parse ? parse(e.target.value) : e.target.value));
    };
    bind("f-title",    "title");
    bind("f-subtitle", "subtitle");
    bind("f-image",    "image_url");

    this.shadowRoot.getElementById("f-show-fan")
      ?.addEventListener("change", e => { this._set("show_fan", e.target.checked); this._render(); });

    // color swatches
    this.shadowRoot.querySelectorAll(".swatch").forEach(btn => {
      btn.addEventListener("click", () => {
        this._set("color", btn.dataset.color);
        this.shadowRoot.querySelectorAll(".swatch").forEach(b => b.classList.toggle("sel", b === btn));
      });
    });

    // ── entity pickers (created programmatically to set .hass) ──
    const mkPicker = (slotId, label, key, domains) => {
      const slot = this.shadowRoot.getElementById(slotId);
      if (!slot) return;
      const picker = document.createElement("ha-entity-picker");
      picker.hass = this._hass;
      picker.label = label;
      picker.value = cfg[key] || "";
      if (domains) picker.includeDomains = domains;
      picker.allowCustomEntity = true;
      picker.addEventListener("value-changed", e => {
        this._set(key, e.detail.value);
        this._render(); // re-render to show/hide threshold field
      });
      slot.appendChild(picker);
    };

    mkPicker("temp-picker-slot",  "Sensore temperatura", "temp_entity", ["sensor"]);
    mkPicker("hum-picker-slot",   "Sensore umidità (opzionale)", "hum_entity", ["sensor"]);
    mkPicker("power-picker-slot", "Entità stato (switch, boolean o sensore potenza)", "power_entity");

    if (showThreshold) {
      const slot = this.shadowRoot.getElementById("threshold-slot");
      const field = document.createElement("ha-textfield");
      field.label = "Soglia acceso (es. Watt)";
      field.type  = "number";
      field.value = cfg.power_threshold ?? 5;
      field.addEventListener("change", e => this._set("power_threshold", parseFloat(e.target.value)));
      slot.appendChild(field);
    }

    if (cfg.show_fan) {
      mkPicker("fan-picker-slot", "Entità ventola (number/select)", "fan_entity");
      const slot = this.shadowRoot.getElementById("fan-label-slot");
      const field = document.createElement("ha-textfield");
      field.label = "Etichetta slider ventola";
      field.value = cfg.fan_label ?? "Velocità ventola";
      field.addEventListener("change", e => this._set("fan_label", e.target.value));
      slot.appendChild(field);
    }

    this._renderButtons();
  }
}

// ─── REGISTRATION ─────────────────────────────────────────────────────────────
registerLegacy("pastel-clima-card",        PastelClimaCard);
registerLegacy("pastel-clima-card-editor", PastelClimaCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type:             "pastel-clima-card",
  name:             "Pastel Clima Card",
  description:      "Card climatizzatore con sfondo pastello, tasti azione configurabili, stato on/off da boolean o sensore potenza, slider ventola.",
  preview:          true,
  documentationURL: "https://github.com/Angelofsin666/pastel-clima-card",
});

console.info(
  `%c PASTEL-CLIMA-CARD %c v${CARD_VERSION} `,
  "background:#3d9cf0;color:#fff;font-weight:700;padding:2px 4px;border-radius:4px 0 0 4px",
  "background:#2563eb;color:#fff;font-weight:700;padding:2px 4px;border-radius:0 4px 4px 0"
);
