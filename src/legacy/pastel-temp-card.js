import { registerLegacy } from "../legacy-style.js";
// =============================================================================
// pastel-temp-card.js
// Pastel Temp Card — Lovelace custom card for Home Assistant / HACS
// Author: Angelofsin666 | License: MIT | Version: 1.0.0
// =============================================================================

const CARD_VERSION = "1.0.0";

// ─── PALETTE ─────────────────────────────────────────────────────────────────
// Each palette defines:
//   bg       — card background (light pastel)
//   panel    — summary panel bg (rgba white overlay, same for all)
//   base     — main color for text, icons, slider fill, bar fill
//   light    — thermometer tube / track light color
//   deep     — darker shade for thermometer fill & bulb
const PALETTES = {
  blue:   { bg: "#dbeafe", base: "#2563eb", light: "#bfdbfe", deep: "#1d4ed8", name: "Azzurro"    },
  green:  { bg: "#dcfce7", base: "#16a34a", light: "#bbf7d0", deep: "#15803d", name: "Verde"      },
  purple: { bg: "#ede9fe", base: "#7c3aed", light: "#ddd6fe", deep: "#6d28d9", name: "Viola"      },
  teal:   { bg: "#ccfbf1", base: "#0d9488", light: "#99f6e4", deep: "#0f766e", name: "Verde acqua" },
  amber:  { bg: "#fef3c7", base: "#d97706", light: "#fde68a", deep: "#b45309", name: "Ambra"      },
  pink:   { bg: "#fce7f3", base: "#db2777", light: "#fbcfe8", deep: "#be185d", name: "Rosa"       },
  indigo: { bg: "#e0e7ff", base: "#4338ca", light: "#c7d2fe", deep: "#3730a3", name: "Indaco"     },
  cyan:   { bg: "#cffafe", base: "#0891b2", light: "#a5f3fc", deep: "#0e7490", name: "Ciano"      },
};
const PALETTE_KEYS = Object.keys(PALETTES);

// ─── MDI ICON PATHS ──────────────────────────────────────────────────────────
// Subset of MDI paths used as defaults / fallbacks
const MDI = {
  "mdi:thermometer":      "M15 13V5a3 3 0 00-6 0v8a5 5 0 106 0zm-3 5a3 3 0 110-6 3 3 0 010 6z",
  "mdi:home":             "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  "mdi:door":             "M8 3h10a1 1 0 011 1v16a1 1 0 01-1 1H8l-3-2V5l3-2zm6 8a1 1 0 100 2 1 1 0 000-2z",
  "mdi:sofa":             "M21 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 00-2 2v5h2v1h2v-1h10v1h2v-1h2v-5a2 2 0 00-2-2zM5 7h14v2H5V7zM3 14v-3h18v3H3z",
  "mdi:bed-double":       "M19 7H5a2 2 0 00-2 2v6H1v2h22v-2h-2V9a2 2 0 00-2-2zM5 9h14v6H5V9zM7 5h4a1 1 0 010 2H7a1 1 0 010-2zm6 0h4a1 1 0 010 2h-4a1 1 0 010-2z",
  "mdi:shower":           "M21 10H7V7a2 2 0 014 0h2a4 4 0 00-8 0v3H3a1 1 0 000 2l1 5a3 3 0 003 3h10a3 3 0 003-3l1-5a1 1 0 000-2z",
  "mdi:bathtub":          "M21 10H7V7a2 2 0 014 0h2a4 4 0 00-8 0v3H3a1 1 0 000 2l1 5a3 3 0 003 3h10a3 3 0 003-3l1-5a1 1 0 000-2z",
  "mdi:baby-carriage":    "M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.4V11h1a5 5 0 015 5v1H4v-1a5 5 0 015-5h1V9.4A4 4 0 0112 2z",
  "mdi:flower":           "M17 8C8 10 5.9 16.17 3.82 19.36L5.71 21c1-1.23 1.56-2.06 2.29-3.2C8.5 17.04 9.37 17 10 17c4 0 5-2 10-2 0-4-3-7-3-7z",
  "mdi:gamepad-variant":  "M7 6h10a5 5 0 015 5v2a5 5 0 01-5 5H7a5 5 0 01-5-5v-2a5 5 0 015-5zm0 4v2h2v-2H7zm4 0v2h2v-2h-2zm5 1a1 1 0 100 2 1 1 0 000-2zm-2 2a1 1 0 100 2 1 1 0 000-2z",
  "mdi:water":            "M12 2C6 9 4 13 4 16a8 8 0 0016 0c0-3-2-7-8-14z",
  "mdi:alert-circle":     "M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z",
  "mdi:trending-up":      "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
  "mdi:trending-down":    "M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z",
  "mdi:trending-neutral": "M22 12l-4-4v3H3v2h15v3z",
};

function mdiPath(icon) {
  return MDI[icon] || MDI["mdi:thermometer"];
}

function mdiSvg(icon, color, size = 16) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
    <path d="${mdiPath(icon)}"/>
  </svg>`;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

function tempToBarPct(temp, min, max) {
  return clamp(((temp - min) / (max - min)) * 100, 0, 100);
}

function thermoFillPct(temp, min, max) {
  // maps temp to fill height inside tube (0–100%)
  return clamp(((temp - min) / (max - min)) * 100, 2, 100);
}

function thermoSVG(temp, min, max, colors) {
  const tubeH  = 46;
  const fillH  = Math.max(2, Math.round((thermoFillPct(temp, min, max) / 100) * tubeH));
  const fillY  = 2 + (tubeH - fillH);
  return `<svg width="32" height="76" viewBox="0 0 32 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="2" width="7" height="46" rx="3.5" fill="${colors.light}"/>
    <rect x="12" y="${fillY}" width="7" height="${fillH}" rx="3.5" fill="${colors.deep}" opacity="0.9"/>
    <circle cx="15.5" cy="61" r="11" fill="${colors.light}"/>
    <circle cx="15.5" cy="61" r="7.5" fill="${colors.deep}" opacity="0.9"/>
    <line x1="19" y1="10" x2="26" y2="10" stroke="${colors.light}" stroke-width="2" stroke-linecap="round"/>
    <line x1="19" y1="19" x2="26" y2="19" stroke="${colors.light}" stroke-width="2" stroke-linecap="round"/>
    <line x1="19" y1="28" x2="26" y2="28" stroke="${colors.light}" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

async function fetchTrend(hass, entityId) {
  try {
    const start = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
    const url   = `history/period/${start}?filter_entity_id=${entityId}&minimal_response=true&no_attributes=true`;
    const resp  = await hass.callApi("GET", url);
    if (!resp?.[0] || resp[0].length < 2) return null;
    const arr   = resp[0];
    const first = parseFloat(arr[0].state);
    const last  = parseFloat(arr[arr.length - 1].state);
    if (isNaN(first) || isNaN(last)) return null;
    return last - first;
  } catch { return null; }
}

function trendText(diff) {
  if (diff === null)       return "";
  if (Math.abs(diff) < 0.1) return "stabile";
  return (diff > 0 ? "+" : "") + diff.toFixed(1) + "°";
}

function trendIcon(diff) {
  if (diff === null || Math.abs(diff) < 0.1) return "mdi:trending-neutral";
  return diff > 0 ? "mdi:trending-up" : "mdi:trending-down";
}

// ─── CARD ────────────────────────────────────────────────────────────────────
class PastelTempCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config  = null;
    this._hass    = null;
    this._trends  = {};
    this._lastFetch = 0;
  }

  static getConfigElement() {
    return document.createElement("pastel-temp-card-editor");
  }

  static getStubConfig() {
    return {
      title:      "Piano Terra",
      subtitle:   "Temperature ambiente",
      color:      "blue",
      temp_min:   15,
      temp_max:   35,
      alert_temp: 30,
      alert_hum:  65,
      show_trend: true,
      rooms: [
        { name: "Ingresso", icon: "mdi:door",        temp_entity: "",  hum_entity: ""  },
        { name: "Salotto",  icon: "mdi:sofa",         temp_entity: "",   hum_entity: ""   },
      ],
    };
  }

  setConfig(config) {
    if (!Array.isArray(config.rooms)) throw new Error("pastel-temp-card: 'rooms' deve essere una lista");
    this._config = {
      title:      config.title      ?? "Temperatura",
      subtitle:   config.subtitle   ?? "Temperature ambiente",
      color:      PALETTE_KEYS.includes(config.color) ? config.color : "blue",
      temp_min:   config.temp_min   ?? 15,
      temp_max:   config.temp_max   ?? 35,
      alert_temp: config.alert_temp ?? 30,
      alert_hum:  config.alert_hum  ?? 65,
      show_trend: config.show_trend !== false,
      rooms:      config.rooms,
    };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
    if (this._config?.show_trend) this._maybeRefreshTrends();
  }

  getCardSize() {
    return 2 + (this._config?.rooms?.length ?? 0) * 2;
  }

  async _maybeRefreshTrends() {
    const now = Date.now();
    if (now - this._lastFetch < 5 * 60 * 1000) return;
    this._lastFetch = now;
    const updated = {};
    for (const room of this._config.rooms) {
      if (room.temp_entity) {
        updated[room.temp_entity] = await fetchTrend(this._hass, room.temp_entity);
      }
    }
    this._trends = updated;
    this._render();
  }

  _avgTemp() {
    if (!this._hass) return null;
    const vals = this._config.rooms
      .map(r => parseFloat(this._hass.states[r.temp_entity]?.state))
      .filter(v => !isNaN(v));
    if (!vals.length) return null;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  _avgHum() {
    if (!this._hass) return null;
    const vals = this._config.rooms
      .filter(r => r.hum_entity)
      .map(r => parseFloat(this._hass.states[r.hum_entity]?.state))
      .filter(v => !isNaN(v));
    if (!vals.length) return null;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  _render() {
    if (!this._config) return;
    const cfg    = this._config;
    const hass   = this._hass;
    const C      = PALETTES[cfg.color];
    const avgT   = this._avgTemp();
    const avgH   = this._avgHum();
    const barPct = avgT !== null ? tempToBarPct(avgT, cfg.temp_min, cfg.temp_max) : 0;
    const PANEL  = "rgba(255,255,255,0.45)";
    const BADGE  = "rgba(255,255,255,0.60)";
    const TRACK  = "rgba(255,255,255,0.45)";

    // ── room rows ──
    const roomsHTML = cfg.rooms.map(room => {
      const tState  = hass?.states[room.temp_entity];
      const hState  = room.hum_entity ? hass?.states[room.hum_entity] : null;
      const temp    = tState ? parseFloat(tState.state) : null;
      const hum     = hState ? parseFloat(hState.state)  : null;
      const tempStr = temp !== null && !isNaN(temp) ? temp.toFixed(1) + "°" : "--°";
      const humStr  = hum  !== null && !isNaN(hum)  ? Math.round(hum) + "%" : "--%";
      const bPct    = temp !== null ? tempToBarPct(temp, cfg.temp_min, cfg.temp_max) : 0;
      const icon    = room.icon || "mdi:thermometer";

      // alert markers (text only, color stays the same)
      const tempAlert = temp !== null && temp >= cfg.alert_temp;
      const humAlert  = hum  !== null && hum  >= cfg.alert_hum;
      const tempSuffix = tempAlert ? " !" : "";
      const humSuffix  = humAlert  ? " ↑" : "";

      const trend     = this._trends[room.temp_entity] ?? null;
      const trendHTML = cfg.show_trend && trend !== null
        ? `<span class="room-trend">${trendText(trend)}</span>` : "";

      return `
        <div class="room-row">
          <div class="room-top">
            <div class="room-icon" style="background:${BADGE}">
              ${mdiSvg(icon, C.base, 16)}
            </div>
            <div class="room-name">${room.name ?? ""}</div>
            ${trendHTML}
            <div class="room-val" style="color:${C.base}">${tempStr}${tempSuffix}</div>
          </div>
          <div class="room-bar-wrap">
            <div class="room-bar-track" style="background:${TRACK}">
              <div class="room-bar-fill" style="width:${bPct}%;background:${C.base}"></div>
              <div class="room-bar-thumb" style="left:calc(${bPct}% - 9px)"></div>
            </div>
          </div>
          <div class="room-hum" style="background:${BADGE};color:${C.base}">
            ${mdiSvg("mdi:water", C.base, 10)}
            ${humStr}${humSuffix}
          </div>
        </div>`;
    }).join("");

    // ── full HTML ──
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        .card {
          background: ${C.bg};
          border-radius: 28px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.05);
          padding: 16px 16px 4px 16px;
          font-family: var(--primary-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
        }
        /* header */
        .card-header { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
        .card-header-icon {
          width:36px; height:36px; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          background:${BADGE}; flex-shrink:0;
        }
        .card-title    { font-size:20px; font-weight:800; color:#1a1a2e; line-height:1.1; }
        .card-subtitle { font-size:13px; font-weight:600; color:${C.base}; margin-top:1px; }
        /* summary */
        .summary {
          background:${PANEL}; border-radius:18px;
          padding:14px 16px 12px; margin-bottom:12px;
          display:flex; align-items:center; gap:14px;
        }
        .summary-avg   { font-size:52px; font-weight:200; line-height:1; letter-spacing:-3px; color:${C.base}; }
        .summary-unit  { font-size:20px; font-weight:400; vertical-align:super; letter-spacing:0; }
        .summary-label { font-size:11px; font-weight:600; color:${C.base}; opacity:0.5; margin-top:2px; text-transform:uppercase; letter-spacing:0.4px; }
        .summary-badge {
          display:inline-flex; align-items:center; gap:5px;
          margin-top:7px; padding:4px 10px; border-radius:10px;
          background:${BADGE}; color:${C.base};
          font-size:11px; font-weight:700;
        }
        /* bar */
        .progress-bar  { height:5px; border-radius:3px; margin-bottom:14px; overflow:hidden; background:${TRACK}; }
        .progress-fill { height:100%; border-radius:3px; background:${C.base}; transition:width 0.4s ease; }
        /* rows */
        .room-row { padding:10px 0; border-top:1px solid rgba(0,0,0,0.06); }
        .room-top  { display:flex; align-items:center; gap:10px; margin-bottom:7px; }
        .room-icon { width:28px; height:28px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .room-name { flex:1; font-size:14px; font-weight:700; color:#1a1a2e; }
        .room-trend{ font-size:10px; font-weight:600; color:${C.base}; opacity:0.6; }
        .room-val  { font-size:15px; font-weight:800; }
        .room-bar-wrap  { padding-left:38px; }
        .room-bar-track { position:relative; height:6px; border-radius:3px; overflow:visible; }
        .room-bar-fill  { position:absolute; left:0; top:0; height:100%; border-radius:3px; }
        .room-bar-thumb { position:absolute; top:50%; transform:translateY(-50%); width:18px; height:18px; border-radius:50%; background:white; box-shadow:0 1px 5px rgba(0,0,0,0.20); }
        .room-hum {
          display:inline-flex; align-items:center; gap:4px;
          margin-left:38px; margin-top:6px; padding:2px 8px;
          border-radius:7px; font-size:10px; font-weight:700;
        }
        .card-pad { height:12px; }
      </style>

      <div class="card">
        <div class="card-header">
          <div class="card-header-icon">
            ${mdiSvg("mdi:thermometer", C.base, 20)}
          </div>
          <div>
            <div class="card-title">${cfg.title}</div>
            <div class="card-subtitle">${cfg.subtitle}</div>
          </div>
        </div>

        <div class="summary">
          ${thermoSVG(avgT ?? cfg.temp_min, cfg.temp_min, cfg.temp_max, C)}
          <div>
            <div class="summary-avg">
              ${avgT !== null ? avgT.toFixed(1) : "--"}<span class="summary-unit">°</span>
            </div>
            <div class="summary-label">media zona</div>
            <div class="summary-badge">
              ${mdiSvg("mdi:water", C.base, 12)}
              ${avgH !== null ? Math.round(avgH) + "% umidità" : "-- umidità"}
            </div>
          </div>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${barPct}%"></div>
        </div>

        ${roomsHTML}

        <div class="card-pad"></div>
      </div>`;
  }
}

// ─── EDITOR ──────────────────────────────────────────────────────────────────
class PastelTempCardEditor extends HTMLElement {
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
  }

  _fire() {
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: { ...this._config } },
      bubbles: true, composed: true,
    }));
  }

  _set(key, val) { this._config = { ...this._config, [key]: val }; this._fire(); }

  _setRoom(i, key, val) {
    const rooms = [...(this._config.rooms || [])];
    rooms[i] = { ...rooms[i], [key]: val };
    this._config = { ...this._config, rooms };
    this._fire();
    this._renderRooms();
  }

  _addRoom() {
    const rooms = [...(this._config.rooms || []), { name: "", icon: "mdi:thermometer", temp_entity: "", hum_entity: "" }];
    this._config = { ...this._config, rooms };
    this._fire();
    this._renderRooms();
  }

  _removeRoom(i) {
    const rooms = [...(this._config.rooms || [])];
    rooms.splice(i, 1);
    this._config = { ...this._config, rooms };
    this._fire();
    this._renderRooms();
  }

  _renderRooms() {
    const container = this.shadowRoot.getElementById("rooms-container");
    if (!container) return;
    container.innerHTML = "";

    (this._config.rooms || []).forEach((room, i) => {
      const wrap = document.createElement("div");
      wrap.className = "room-editor";

      // row 1: num + name + icon + delete
      const row1 = document.createElement("div");
      row1.className = "room-row1";

      const num = document.createElement("div");
      num.className = "room-num";
      num.textContent = i + 1;

      const nameField = document.createElement("ha-textfield");
      nameField.label = "Nome stanza";
      nameField.value = room.name || "";
      nameField.style.flex = "1";
      nameField.addEventListener("change", e => this._setRoom(i, "name", e.target.value));

      const iconField = document.createElement("ha-textfield");
      iconField.label = "Icona (mdi:...)";
      iconField.value = room.icon || "mdi:thermometer";
      iconField.style.width = "140px";
      iconField.addEventListener("change", e => this._setRoom(i, "icon", e.target.value));

      const delBtn = document.createElement("button");
      delBtn.className = "del-btn";
      delBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z"/></svg>`;
      delBtn.addEventListener("click", () => this._removeRoom(i));

      row1.appendChild(num);
      row1.appendChild(nameField);
      row1.appendChild(iconField);
      row1.appendChild(delBtn);

      // temp picker
      const tempPicker = document.createElement("ha-entity-picker");
      tempPicker.hass = this._hass;
      tempPicker.value = room.temp_entity || "";
      tempPicker.label = "Sensore temperatura";
      tempPicker.includeDomains = ["sensor"];
      tempPicker.allowCustomEntity = true;
      tempPicker.addEventListener("value-changed", e => this._setRoom(i, "temp_entity", e.detail.value));

      // hum picker
      const humPicker = document.createElement("ha-entity-picker");
      humPicker.hass = this._hass;
      humPicker.value = room.hum_entity || "";
      humPicker.label = "Sensore umidità (opzionale)";
      humPicker.includeDomains = ["sensor"];
      humPicker.allowCustomEntity = true;
      humPicker.addEventListener("value-changed", e => this._setRoom(i, "hum_entity", e.detail.value));

      wrap.appendChild(row1);
      wrap.appendChild(tempPicker);
      wrap.appendChild(humPicker);
      container.appendChild(wrap);
    });

    const addBtn = document.createElement("button");
    addBtn.className = "add-btn";
    addBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> Aggiungi stanza`;
    addBtn.addEventListener("click", () => this._addRoom());
    container.appendChild(addBtn);
  }

  _render() {
    if (!this._config) return;
    const cfg = this._config;

    this.shadowRoot.innerHTML = `
      <style>
        .editor { display:flex; flex-direction:column; gap:12px; padding:4px 0; }
        .section-title { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:var(--secondary-text-color); margin-top:6px; }
        .row2 { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .swatches { display:flex; gap:8px; flex-wrap:wrap; margin-top:4px; }
        .swatch {
          width:28px; height:28px; border-radius:50%; border:2px solid transparent;
          cursor:pointer; padding:0; transition:transform 0.12s,border-color 0.12s;
        }
        .swatch:hover { transform:scale(1.12); }
        .swatch.sel   { border-color:#1a1a2e; box-shadow:0 0 0 2px var(--card-background-color,#fff); }
        .room-editor  { background:var(--secondary-background-color); border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:6px; }
        .room-row1    { display:flex; align-items:center; gap:6px; }
        .room-num     { width:22px; height:22px; border-radius:50%; background:var(--primary-color); color:#fff; font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .del-btn      { background:none; border:none; cursor:pointer; color:var(--error-color,#f44336); padding:4px; border-radius:6px; display:flex; align-items:center; }
        ha-entity-picker { display:block; }
        .add-btn {
          display:flex; align-items:center; gap:6px; padding:8px 14px;
          border-radius:10px; border:1.5px dashed var(--divider-color);
          background:none; cursor:pointer; color:var(--primary-color);
          font-size:13px; font-weight:600; justify-content:center; width:100%;
        }
        .add-btn:hover { background:var(--secondary-background-color); }
        .toggle-row { display:flex; align-items:center; justify-content:space-between; }
        .toggle-label { font-size:13px; color:var(--primary-text-color); }
      </style>

      <div class="editor">

        <div class="section-title">Intestazione</div>
        <div class="row2">
          <ha-textfield id="f-title"    label="Titolo"       value="${cfg.title    ?? ""}"></ha-textfield>
          <ha-textfield id="f-subtitle" label="Sottotitolo"  value="${cfg.subtitle ?? ""}"></ha-textfield>
        </div>

        <div class="section-title">Colore tema</div>
        <div class="swatches">
          ${PALETTE_KEYS.map(k => `
            <button class="swatch ${cfg.color === k ? "sel" : ""}"
              style="background:${PALETTES[k].base}"
              data-color="${k}" title="${PALETTES[k].name}"></button>`).join("")}
        </div>

        <div class="section-title">Scala temperatura</div>
        <div class="row2">
          <ha-textfield id="f-min"   label="Min scala (°C)"  type="number" value="${cfg.temp_min   ?? 15}"></ha-textfield>
          <ha-textfield id="f-max"   label="Max scala (°C)"  type="number" value="${cfg.temp_max   ?? 35}"></ha-textfield>
        </div>

        <div class="section-title">Soglie alert</div>
        <div class="row2">
          <ha-textfield id="f-atemp" label="Alert caldo (°C)"   type="number" value="${cfg.alert_temp ?? 30}"></ha-textfield>
          <ha-textfield id="f-ahum"  label="Alert umidità (%)"  type="number" value="${cfg.alert_hum  ?? 65}"></ha-textfield>
        </div>

        <div class="toggle-row">
          <span class="toggle-label">Mostra trend (2h history)</span>
          <ha-switch id="f-trend" ${cfg.show_trend !== false ? "checked" : ""}></ha-switch>
        </div>

        <div class="section-title">Stanze</div>
        <div id="rooms-container"></div>

      </div>`;

    // ── bindings ──
    const bind = (id, key, parse) => {
      const el = this.shadowRoot.getElementById(id);
      if (el) el.addEventListener("change", e => this._set(key, parse ? parse(e.target.value) : e.target.value));
    };
    bind("f-title",    "title");
    bind("f-subtitle", "subtitle");
    bind("f-min",      "temp_min",   parseFloat);
    bind("f-max",      "temp_max",   parseFloat);
    bind("f-atemp",    "alert_temp", parseFloat);
    bind("f-ahum",     "alert_hum",  parseFloat);

    this.shadowRoot.getElementById("f-trend")
      ?.addEventListener("change", e => this._set("show_trend", e.target.checked));

    this.shadowRoot.querySelectorAll(".swatch").forEach(btn => {
      btn.addEventListener("click", () => {
        this._set("color", btn.dataset.color);
        this.shadowRoot.querySelectorAll(".swatch").forEach(b => b.classList.toggle("sel", b === btn));
      });
    });

    this._renderRooms();
  }
}

// ─── REGISTRATION ─────────────────────────────────────────────────────────────
registerLegacy("pastel-temp-card",        PastelTempCard);
registerLegacy("pastel-temp-card-editor", PastelTempCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type:             "pastel-temp-card",
  name:             "Pastel Temp Card",
  description:      "Card temperatura e umidità con sfondo colorato, termometro SVG, media zona e visual editor completo.",
  preview:          true,
  documentationURL: "https://github.com/Angelofsin666/pastel-temp-card",
});

console.info(
  `%c PASTEL-TEMP-CARD %c v${CARD_VERSION} `,
  "background:#2563eb;color:#fff;font-weight:700;padding:2px 4px;border-radius:4px 0 0 4px",
  "background:#1d4ed8;color:#fff;font-weight:700;padding:2px 4px;border-radius:0 4px 4px 0"
);
