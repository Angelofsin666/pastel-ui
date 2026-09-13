import { registerLegacy } from "../legacy-style.js";
// ============================================================================
// Pastel Openings Card v2 — universal openings card for Home Assistant / HACS
// ============================================================================

import { LitElement, html, css } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

// ----------------------------------------------------------------------------
// Palette
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
function getColors(key) { return PALETTE[key] || PALETTE.blue; }

// ----------------------------------------------------------------------------
// Opening types
// ----------------------------------------------------------------------------
const OPENING_TYPES = ["auto", "window", "door", "gate", "garage", "generic"];

const TYPE_ICONS = {
  window:  { closed: "mdi:window-closed-variant", open: "mdi:window-open-variant" },
  door:    { closed: "mdi:door-closed",            open: "mdi:door-open" },
  gate:    { closed: "mdi:gate",                   open: "mdi:gate-open" },
  garage:  { closed: "mdi:garage",                 open: "mdi:garage-open" },
  generic: { closed: "mdi:square-outline",         open: "mdi:square" },
};

const TYPE_LABELS = {
  auto:    "Automatico",
  window:  "Finestra",
  door:    "Porta",
  gate:    "Cancello",
  garage:  "Basculante",
  generic: "Generico",
};

// Derive opening type from entity device_class when type === "auto"
function resolveType(entityType, stateObj) {
  if (entityType && entityType !== "auto") return entityType;
  if (!stateObj) return "generic";
  const dc = stateObj.attributes?.device_class;
  if (dc === "window")          return "window";
  if (dc === "door")            return "door";
  if (dc === "gate")            return "gate";
  if (dc === "garage_door")     return "garage";
  if (stateObj.entity_id?.startsWith("cover.")) return "generic";
  return "generic";
}

// ----------------------------------------------------------------------------
// State detection — covers binary_sensor, cover, input_boolean, switch, etc.
// ----------------------------------------------------------------------------
function isOpen(stateObj) {
  if (!stateObj) return false;
  const s = stateObj.state;
  return s === "on" || s === "open" || s === "opening" || s === "true";
}

// ----------------------------------------------------------------------------
// SVG illustrations (same as the interactive prototype, color-aware)
// ----------------------------------------------------------------------------
function svgWindow(colors, open) {
  const airOpacity = open ? "1" : "0";
  const flapTransform = open ? "rotate(-50)" : "rotate(0)";
  return `
    <svg width="70" height="80" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="54" height="64" rx="5" fill="#ffffff" opacity=".7"/>
      <rect x="8" y="8" width="54" height="64" rx="5" stroke="${colors.base}" stroke-width="2.5"/>
      <line x1="35" y1="8" x2="35" y2="72" stroke="${colors.base}" stroke-width="2" opacity=".6"/>
      <line x1="8" y1="40" x2="62" y2="40" stroke="${colors.base}" stroke-width="2" opacity=".6"/>
      <circle cx="35" cy="40" r="4" fill="${colors.base}" opacity=".8"/>
      <rect x="36" y="9" width="25" height="30" rx="3" fill="${colors.light}"
        style="transform-origin:36px 9px;transform:${flapTransform}deg;transition:transform .5s ease"/>
      <g opacity="${airOpacity}" style="transition:opacity .4s">
        <path d="M50 20 Q58 24 50 28" stroke="${colors.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" repeatCount="indefinite"/>
        </path>
        <path d="M54 30 Q62 34 54 38" stroke="${colors.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.5;0" dur="2.1s" repeatCount="indefinite" begin="0.4s"/>
        </path>
        <path d="M50 46 Q58 50 50 54" stroke="${colors.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.6;0" dur="1.6s" repeatCount="indefinite" begin="0.8s"/>
        </path>
      </g>
    </svg>`;
}

function svgDoor(colors, open) {
  const panelTransform = open ? "perspective(300px) rotateY(-55deg)" : "perspective(300px) rotateY(0deg)";
  const lightOpacity = open ? "1" : "0";
  return `
    <svg width="60" height="82" viewBox="0 0 60 82" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <rect x="5" y="4" width="50" height="74" rx="4" fill="${colors.light}" stroke="${colors.base}" stroke-width="2"/>
      <rect x="7" y="6" width="46" height="70" rx="3" fill="#ffffff" opacity=".85"
        style="transform-origin:7px 6px;transform:${panelTransform};transition:transform .5s ease"/>
      <circle cx="44" cy="42" r="3.5" fill="${colors.base}"/>
      <g opacity="${lightOpacity}" style="transition:opacity .4s">
        <line x1="38" y1="14" x2="56" y2="10" stroke="#fde68a" stroke-width="2" stroke-linecap="round">
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="38" y1="22" x2="58" y2="22" stroke="#fde68a" stroke-width="2" stroke-linecap="round">
          <animate attributeName="opacity" values="0;0.6;0" dur="1.7s" repeatCount="indefinite" begin="0.3s"/>
        </line>
        <line x1="38" y1="30" x2="56" y2="34" stroke="#fde68a" stroke-width="2" stroke-linecap="round">
          <animate attributeName="opacity" values="0;0.7;0" dur="2.3s" repeatCount="indefinite" begin="0.6s"/>
        </line>
      </g>
    </svg>`;
}

function svgGate(colors, open) {
  const leftTransform  = open ? "perspective(300px) rotateY(-70deg)" : "rotateY(0deg)";
  const rightTransform = open ? "perspective(300px) rotateY(70deg)"  : "rotateY(0deg)";
  const lockOpacity    = open ? "0" : "1";
  return `
    <svg width="90" height="75" viewBox="0 0 90 75" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <rect x="2"  y="8" width="10" height="56" rx="3" fill="${colors.base}" opacity=".7"/>
      <rect x="78" y="8" width="10" height="56" rx="3" fill="${colors.base}" opacity=".7"/>
      <g style="transform-origin:13px 36px;transform:${leftTransform};transition:transform .5s ease">
        <rect x="13" y="12" width="27" height="48" rx="2" fill="${colors.light}" stroke="${colors.base}" stroke-width="1.5"/>
        <line x1="13" y1="24" x2="40" y2="24" stroke="${colors.base}" stroke-width="1" opacity=".4"/>
        <line x1="13" y1="36" x2="40" y2="36" stroke="${colors.base}" stroke-width="1" opacity=".4"/>
        <line x1="13" y1="48" x2="40" y2="48" stroke="${colors.base}" stroke-width="1" opacity=".4"/>
        <line x1="26" y1="12" x2="26" y2="60" stroke="${colors.base}" stroke-width="1" opacity=".4"/>
      </g>
      <g style="transform-origin:77px 36px;transform:${rightTransform};transition:transform .5s ease">
        <rect x="50" y="12" width="27" height="48" rx="2" fill="${colors.light}" stroke="${colors.base}" stroke-width="1.5"/>
        <line x1="50" y1="24" x2="77" y2="24" stroke="${colors.base}" stroke-width="1" opacity=".4"/>
        <line x1="50" y1="36" x2="77" y2="36" stroke="${colors.base}" stroke-width="1" opacity=".4"/>
        <line x1="50" y1="48" x2="77" y2="48" stroke="${colors.base}" stroke-width="1" opacity=".4"/>
        <line x1="63" y1="12" x2="63" y2="60" stroke="${colors.base}" stroke-width="1" opacity=".4"/>
      </g>
      <circle cx="45" cy="36" r="5" fill="${colors.base}" opacity="${lockOpacity}" style="transition:opacity .3s">
        <animate attributeName="opacity" values="${open ? "0" : "0.9;0.5;0.9"}" dur="3s" repeatCount="indefinite"/>
      </circle>
      <rect x="2" y="64" width="86" height="4" rx="2" fill="${colors.base}" opacity=".3"/>
    </svg>`;
}

function svgGarage(colors, open) {
  const doorTransform     = open ? "perspective(400px) rotateX(-85deg)" : "rotateX(0deg)";
  const interiorOpacity   = open ? "1" : "0";
  const ledColor          = open ? "#34c472" : colors.base;
  return `
    <svg width="86" height="75" viewBox="0 0 86 75" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <polygon points="4,24 43,4 82,24" fill="${colors.light}" stroke="${colors.base}" stroke-width="2"/>
      <circle cx="43" cy="15" r="3.5" fill="${ledColor}" style="transition:fill .4s">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      <rect x="4" y="24" width="78" height="48" rx="4" fill="${colors.bg}" stroke="${colors.base}" stroke-width="2"/>
      <g style="transform-origin:43px 24px;transform:${doorTransform};transition:transform .6s ease">
        <rect x="10" y="28" width="66" height="40" rx="3" fill="#ffffff" opacity=".88" stroke="${colors.base}" stroke-width="1.5"/>
        <line x1="10" y1="36" x2="76" y2="36" stroke="${colors.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="44" x2="76" y2="44" stroke="${colors.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="52" x2="76" y2="52" stroke="${colors.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="60" x2="76" y2="60" stroke="${colors.base}" stroke-width="1" opacity=".35"/>
        <rect x="37" y="45" width="12" height="4" rx="2" fill="${colors.base}" opacity=".8"/>
      </g>
      <g opacity="${interiorOpacity}" style="transition:opacity .4s">
        <rect x="10" y="50" width="66" height="20" rx="2" fill="${colors.base}" opacity=".08"/>
        <line x1="43" y1="50" x2="43" y2="70" stroke="${colors.base}" stroke-width="1" opacity=".2" stroke-dasharray="3,3"/>
      </g>
    </svg>`;
}

function svgGeneric(colors, open) {
  const dotColor = open ? colors.base : colors.light;
  return `
    <svg width="68" height="78" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="56" height="62" rx="8" fill="${colors.light}" stroke="${colors.base}" stroke-width="2"/>
      <rect x="14" y="14" width="40" height="46" rx="5" fill="#ffffff" opacity=".7"/>
      <line x1="14" y1="14" x2="54" y2="60" stroke="${colors.base}" stroke-width="1.5" opacity=".15"/>
      <line x1="54" y1="14" x2="14" y2="60" stroke="${colors.base}" stroke-width="1.5" opacity=".15"/>
      <circle cx="34" cy="37" r="8" fill="${dotColor}" opacity=".8" style="transition:fill .4s">
        <animate attributeName="r" values="8;9.5;8" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="34" cy="37" r="3" fill="#ffffff"/>
      <circle cx="54" cy="16" r="4" fill="${colors.base}" opacity=".7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </svg>`;
}

function renderSvg(type, colors, open) {
  switch (type) {
    case "window":  return svgWindow(colors, open);
    case "door":    return svgDoor(colors, open);
    case "gate":    return svgGate(colors, open);
    case "garage":  return svgGarage(colors, open);
    default:        return svgGeneric(colors, open);
  }
}

// ----------------------------------------------------------------------------
// Hero text helpers
// ----------------------------------------------------------------------------
function heroText(openCount, total, dominantType, allClosed) {
  if (allClosed) return { count: "✓", label: "tutto chiuso" };
  const typeLabel = dominantType === "window" ? "finestr" + (openCount === 1 ? "a" : "e")
    : dominantType === "door" ? (openCount === 1 ? "porta" : "porte")
    : dominantType === "gate" ? (openCount === 1 ? "cancello" : "cancelli")
    : dominantType === "garage" ? (openCount === 1 ? "basculante" : "basculanti")
    : (openCount === 1 ? "apertura" : "aperture");
  return { count: String(openCount), label: `${typeLabel} aper${openCount === 1 ? "t" + (dominantType === "window" ? "a" : "o") : "te"}` };
}

function badgeText(openCount, total, allClosed) {
  if (allClosed) return "Casa sicura";
  if (openCount === 1) return "Una aperta";
  if (openCount === total) return "Tutte aperte";
  return `${openCount} aperte`;
}

// ----------------------------------------------------------------------------
// Sort & filter helpers
// ----------------------------------------------------------------------------
function sortEntities(items, mode) {
  const copy = [...items];
  if (mode === "alpha")        return copy.sort((a, b) => a.name.localeCompare(b.name));
  if (mode === "open_first")   return copy.sort((a, b) => (b.open ? 1 : 0) - (a.open ? 1 : 0));
  if (mode === "closed_first") return copy.sort((a, b) => (a.open ? 1 : 0) - (b.open ? 1 : 0));
  return copy; // manual
}

function filterEntities(items, mode) {
  if (mode === "open")   return items.filter(i => i.open);
  if (mode === "closed") return items.filter(i => !i.open);
  return items;
}

// ----------------------------------------------------------------------------
// Action handler (tap / hold / double_tap)
// ----------------------------------------------------------------------------
function executeAction(hass, action, entity) {
  if (!action) {
    // default: more-info
    return { type: "more_info", entity_id: entity };
  }
  return action;
}

// ----------------------------------------------------------------------------
// Card
// ----------------------------------------------------------------------------
class PastelOpeningsCard extends LitElement {

  static get properties() {
    return {
      hass: {},
      config: {},
      _entities: { state: true },
    };
  }

  static getStubConfig() {
    return {
      title: "Porte e Finestre",
      subtitle: "Piano terra",
      icon: "mdi:home",
      color: "blue",
      opening_type: "window",
      show_header: true,
      show_hero: true,
      show_list: true,
      show_badge: true,
      show_counter: true,
      sort: "manual",
      filter: "all",
      entities: [],
    };
  }

  setConfig(config) {
    if (!config) throw new Error("Configurazione non valida");
    this.config = {
      title:        config.title        ?? "Aperture",
      subtitle:     config.subtitle     ?? "",
      icon:         config.icon         ?? "mdi:home",
      color:        PALETTE_KEYS.includes(config.color) ? config.color : "blue",
      opening_type: config.opening_type ?? "window",
      show_header:  config.show_header  ?? true,
      show_hero:    config.show_hero    ?? true,
      show_list:    config.show_list    ?? true,
      show_badge:   config.show_badge   ?? true,
      show_counter: config.show_counter ?? true,
      sort:         config.sort         ?? "manual",
      filter:       config.filter       ?? "all",
      entities:     Array.isArray(config.entities) ? config.entities : [],
    };
    this._pressTimers  = {};
    this._tapCounters  = {};
  }

  getCardSize() {
    return 3 + Math.ceil((this.config.entities || []).length / 1);
  }

  static getConfigElement() {
    return document.createElement("pastel-openings-card-editor");
  }

  // -- entity resolution ----------------------------------------------------

  _resolveEntities() {
    return (this.config.entities || []).map((entConf) => {
      const id   = typeof entConf === "string" ? entConf : entConf.entity;
      const obj  = this.hass.states[id];
      const type = resolveType(
        typeof entConf === "object" ? entConf.type : "auto",
        obj
      );
      const opened = isOpen(obj);
      const icons  = TYPE_ICONS[type] || TYPE_ICONS.generic;
      return {
        id,
        obj,
        name:     (typeof entConf === "object" && entConf.name) ? entConf.name
                  : (obj?.attributes?.friendly_name || id),
        type,
        open:     opened,
        icon:     opened ? icons.open : icons.closed,
        tap:      typeof entConf === "object" ? entConf.tap_action    : null,
        hold:     typeof entConf === "object" ? entConf.hold_action   : null,
        dbl:      typeof entConf === "object" ? entConf.double_tap_action : null,
      };
    });
  }

  // -- action dispatch ------------------------------------------------------

  _dispatchAction(action, entityId) {
    if (!action) {
      this._moreInfo(entityId);
      return;
    }
    try {
      if (window.hapticFeedback) window.hapticFeedback("light");
      else if (navigator.vibrate) navigator.vibrate(30);
    } catch {}

    switch (action.type) {
      case "more_info":     this._moreInfo(action.entity_id || entityId); break;
      case "toggle":        this.hass.callService("homeassistant","toggle",{entity_id: action.entity_id||entityId}); break;
      case "turn_on":       { const [d]=( action.entity_id||entityId).split("."); this.hass.callService(d,"turn_on",{entity_id:action.entity_id||entityId}); break; }
      case "turn_off":      { const [d]=( action.entity_id||entityId).split("."); this.hass.callService(d,"turn_off",{entity_id:action.entity_id||entityId}); break; }
      case "call_service":  { const [sd,ss]=(action.service||"").split("."); if(sd&&ss) this.hass.callService(sd,ss,action.data||{}); break; }
      case "navigate":      if(action.navigation_path){history.pushState(null,"",action.navigation_path);window.dispatchEvent(new CustomEvent("location-changed",{bubbles:true,composed:true}));} break;
      case "url":           if(action.url_path) window.open(action.url_path,action.new_tab!==false?"_blank":"_self"); break;
      default:              this._moreInfo(entityId);
    }
  }

  _moreInfo(entityId) {
    if (!entityId) return;
    const e = new Event("hass-more-info",{bubbles:true,composed:true});
    e.detail = { entityId };
    this.dispatchEvent(e);
  }

  // -- pointer handlers (tap / hold / double-tap) ---------------------------

  _onPointerDown(item, ev) {
    ev.stopPropagation();
    if(ev.isPrimary === false || ev.button !== 0) return;
    this._onPointerLeave(item);
    this._pressOrigin = {id:item.id,pointerId:ev.pointerId,x:ev.clientX,y:ev.clientY};
    this._pressTimers[item.id] = setTimeout(() => {
      this._pressTimers[item.id] = null;
      this._dispatchAction(item.hold, item.id);
    }, 500);
  }

  _onPointerUp(item, ev) {
    ev.stopPropagation();
    this._onPointerMove(item, ev);
    if(this._pressOrigin?.pointerId !== ev.pointerId) return;
    if (!this._pressTimers[item.id]) return; // hold or scrolling
    clearTimeout(this._pressTimers[item.id]);
    this._pressTimers[item.id] = null;

    // double-tap detection
    this._tapCounters[item.id] = (this._tapCounters[item.id] || 0) + 1;
    if (this._tapCounters[item.id] === 1) {
      setTimeout(() => {
        if (this._tapCounters[item.id] === 1) {
          this._tapCounters[item.id] = 0;
          this._dispatchAction(item.tap, item.id);
        } else if (this._tapCounters[item.id] > 1) {
          this._tapCounters[item.id] = 0;
          this._dispatchAction(item.dbl, item.id);
        }
      }, 300);
    }
  }

  _onPointerMove(item,ev) {
    const p=this._pressOrigin;
    if(p?.id===item.id && p.pointerId===ev.pointerId && Math.hypot(ev.clientX-p.x,ev.clientY-p.y)>10)this._onPointerLeave(item);
  }
  disconnectedCallback(){
    Object.values(this._pressTimers||{}).forEach(clearTimeout);
    this._tapCounters={};
    super.disconnectedCallback();
  }
  _onPointerLeave(item) {
    clearTimeout(this._pressTimers[item.id]);
    this._pressTimers[item.id] = null;
  }

  // -- render ---------------------------------------------------------------

  render() {
    if (!this.config || !this.hass) return html``;

    const colors    = getColors(this.config.color);
    const raw       = this._resolveEntities();
    const sorted    = sortEntities(raw, this.config.sort);
    const filtered  = filterEntities(sorted, this.config.filter);
    const openCount = raw.filter(e => e.open).length;
    const total     = raw.length;
    const allClosed = openCount === 0;

    // dominant type for hero text
    const dominantType = (() => {
      const counts = {};
      raw.forEach(e => { counts[e.type] = (counts[e.type] || 0) + 1; });
      return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "generic";
    })();

    const heroType = allClosed ? dominantType : dominantType;
    const heroOpen = !allClosed;
    const { count, label } = heroText(openCount, total, dominantType, allClosed);
    const badge = badgeText(openCount, total, allClosed);

    return html`
      <ha-card style="
        --c-base:${colors.base};
        --c-light:${colors.light};
        --c-bg:${colors.bg};
        --c-text:${colors.text};
      ">
        <!-- header -->
        ${this.config.show_header ? html`
          <div class="header">
            <div class="header-left">
              <ha-icon icon=${this.config.icon} style="color:var(--c-base)"></ha-icon>
              <div>
                <div class="title">${this.config.title}</div>
                ${this.config.subtitle ? html`<div class="subtitle">${this.config.subtitle}</div>` : ""}
              </div>
            </div>
          </div>
        ` : ""}

        <!-- hero -->
        ${this.config.show_hero ? html`
          <div class="panel-hero ${allClosed ? "hero-safe" : "hero-alert"}">
            <div class="hero-row">
              <div class="hero-illustration">
                ${unsafeHTML(renderSvg(heroType, colors, heroOpen))}
              </div>
              <div class="hero-count-block">
                ${this.config.show_counter ? html`
                  <div class="hero-count ${allClosed ? "count-safe" : ""}">${count}</div>
                ` : ""}
                <div class="hero-label">${label}</div>
                ${this.config.show_badge ? html`
                  <div class="hero-badge ${allClosed ? "badge-safe" : "badge-alert"}">${badge}</div>
                ` : ""}
              </div>
            </div>
          </div>
        ` : ""}

        <!-- list -->
        ${this.config.show_list && filtered.length > 0 ? html`
          <div class="panel-list">
            ${filtered.map((item, idx) => html`
              ${idx > 0 ? html`<div class="divider"></div>` : ""}
              <div
                class="list-row ${item.open ? "row-open" : ""}"
                @pointerdown=${(e) => this._onPointerDown(item, e)}
                @pointerup=${(e) => this._onPointerUp(item, e)}
                @pointerleave=${() => this._onPointerLeave(item)}
                @pointermove=${(e) => this._onPointerMove(item,e)}
                @pointercancel=${() => this._onPointerLeave(item)}
              >
                <ha-icon icon=${item.icon}
                  style="color:${item.open ? "var(--c-text)" : "var(--secondary-text-color)"}">
                </ha-icon>
                <span class="row-name ${item.open ? "" : "row-name-closed"}">${item.name}</span>
                <span class="row-status ${item.open ? "status-open" : ""}">
                  ${item.open ? "Aperto" : "Chiuso"}
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
        display: flex; align-items: center; padding: 12px 14px 8px;
      }
      .header-left { display: flex; align-items: center; gap: 10px; }
      .header ha-icon { --mdc-icon-size: 22px; }
      .title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 12px; color: var(--c-text); margin-top: 1px; }

      .panel-hero {
        border-radius: 20px; margin: 4px; padding: 14px 16px;
        background: var(--c-bg);
        transition: background 0.4s ease;
      }
      .hero-row {
        display: flex; align-items: center; justify-content: space-between; gap: 8px;
      }
      .hero-illustration { flex-shrink: 0; }
      .hero-count-block { flex: 1; text-align: right; }
      .hero-count {
        font-size: 56px; font-weight: 300; color: var(--c-base);
        line-height: 1; letter-spacing: -2px;
        animation: count-pop 0.3s ease;
      }
      .hero-count.count-safe { color: var(--c-text); font-size: 42px; }
      @keyframes count-pop {
        0% { transform: scale(0.85); opacity: 0.5; }
        100% { transform: scale(1); opacity: 1; }
      }
      .hero-label { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
      .hero-badge {
        display: inline-flex; align-items: center; margin-top: 8px;
        padding: 4px 12px; border-radius: 12px;
        font-size: 12px; font-weight: 600;
        animation: badge-in 0.25s ease;
      }
      @keyframes badge-in {
        from { transform: scale(0.9); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }
      .badge-safe  { background: var(--c-light); color: var(--c-text); }
      .badge-alert { background: #fecaca; color: #dc2626; }

      .panel-list {
        background: var(--c-bg); border-radius: 20px; margin: 4px; padding: 6px;
      }
      .list-row {
        display: flex; align-items: center; gap: 12px;
        padding: 13px 12px; border-radius: 16px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
        transition: background 0.15s ease;
      }
      .list-row:active { background: rgba(0,0,0,0.04); }
      .list-row.row-open { background: rgba(220,38,38,0.06); }
      .list-row ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }
      .row-name { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .row-name-closed { opacity: 0.65; }
      .row-status { font-size: 13px; font-weight: 600; color: var(--secondary-text-color); }
      .row-status.status-open {
        color: #dc2626; background: #fecaca; padding: 3px 9px; border-radius: 8px; font-size: 11px;
      }
      .divider { height: 0.5px; background: rgba(0,0,0,0.08); margin: 0 14px; }
    `;
  }
}

registerLegacy("pastel-openings-card", PastelOpeningsCard);

// ============================================================================
// Visual Editor
// ============================================================================
class PastelOpeningsCardEditor extends LitElement {

  static get properties() {
    return {
      hass: {},
      _config: { state: true },
      _entityRegistry: { state: true },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadEntityRegistry();
  }

  async _loadEntityRegistry() {
    if (!this.hass) return;
    try {
      const result = await this.hass.connection.sendMessagePromise({
        type: "config/entity_registry/list",
      });
      this._entityRegistry = result;
    } catch (e) {
      this._entityRegistry = [];
    }
  }

  updated(changed) {
    if (changed.has("hass") && this.hass && !this._entityRegistry) {
      this._loadEntityRegistry();
    }
  }

  setConfig(config) {
    this._config = { ...config, entities: [...(config.entities || [])] };
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

  _addEntity() {
    const entities = [...(this._config.entities || []),
      { entity: "", name: "", type: "auto", tap_action: null, hold_action: null, double_tap_action: null }];
    this._set("entities", entities);
  }

  _removeEntity(idx) {
    const entities = [...this._config.entities];
    entities.splice(idx, 1);
    this._set("entities", entities);
  }

  _updateEntity(idx, field, value) {
    const entities = [...this._config.entities];
    entities[idx] = { ...entities[idx], [field]: value };
    this._set("entities", entities);
  }

  _updateEntityAction(idx, actionField, key, value) {
    const entities = [...this._config.entities];
    entities[idx] = {
      ...entities[idx],
      [actionField]: { ...(entities[idx][actionField] || { type: "more_info" }), [key]: value },
    };
    this._set("entities", entities);
  }

  // drag & drop
  _onDragStart(idx, ev) {
    this._dragIdx = idx;
    ev.dataTransfer.effectAllowed = "move";
  }
  _onDragOver(idx, ev) {
    ev.preventDefault();
    this._dragOver = idx;
  }
  _onDrop(idx, ev) {
    ev.preventDefault();
    if (this._dragIdx === null || this._dragIdx === idx) { this._dragIdx = null; return; }
    const entities = [...this._config.entities];
    const [moved] = entities.splice(this._dragIdx, 1);
    entities.splice(idx, 0, moved);
    this._dragIdx = null;
    this._set("entities", entities);
  }

  _renderActionField(idx, actionKey, label) {
    const ent = (this._config.entities || [])[idx] || {};
    const action = ent[actionKey] || { type: "more_info" };
    const type = action.type || "more_info";
    const needsEntity = ["toggle","turn_on","turn_off","more_info"].includes(type);
    const needsService = type === "call_service";

    return html`
      <div class="action-block">
        <div class="field-label">${label}</div>
        <select class="field-select"
          .value=${type}
          @change=${(ev) => this._updateEntityAction(idx, actionKey, "type", ev.target.value)}>
          <option value="more_info">Apri dettagli</option>
          <option value="toggle">Toggle</option>
          <option value="turn_on">Accendi</option>
          <option value="turn_off">Spegni</option>
          <option value="call_service">Chiama servizio</option>
          <option value="navigate">Naviga</option>
          <option value="url">Apri URL</option>
        </select>
        ${needsEntity ? html`
          <ha-entity-picker .hass=${this.hass} .value=${action.entity_id || ""}
            label="Entità"
            @value-changed=${(ev) => this._updateEntityAction(idx, actionKey, "entity_id", ev.detail.value)}>
          </ha-entity-picker>
        ` : ""}
        ${needsService ? html`
          <ha-textfield label="Servizio" .value=${action.service || ""}
            @change=${(ev) => this._updateEntityAction(idx, actionKey, "service", ev.target.value)}>
          </ha-textfield>
        ` : ""}
        ${type === "navigate" ? html`
          <ha-textfield label="Percorso" .value=${action.navigation_path || ""}
            @change=${(ev) => this._updateEntityAction(idx, actionKey, "navigation_path", ev.target.value)}>
          </ha-textfield>
        ` : ""}
        ${type === "url" ? html`
          <ha-textfield label="URL" .value=${action.url_path || ""}
            @change=${(ev) => this._updateEntityAction(idx, actionKey, "url_path", ev.target.value)}>
          </ha-textfield>
        ` : ""}
      </div>
    `;
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const cfg = this._config;

    return html`
      <div class="editor">

        <!-- Base -->
        <ha-form .hass=${this.hass}
          .data=${{ title: cfg.title||"", subtitle: cfg.subtitle||"", icon: cfg.icon||"mdi:home" }}
          .schema=${[
            { name: "title",    selector: { text: {} } },
            { name: "subtitle", selector: { text: {} } },
            { name: "icon",     selector: { icon: {} } },
          ]}
          .computeLabel=${(s) => ({ title:"Titolo", subtitle:"Sottotitolo", icon:"Icona" })[s.name]||s.name}
          @value-changed=${(ev) => { this._config={...this._config,...ev.detail.value}; this._fire(); }}>
        </ha-form>

        <!-- Colore -->
        <div class="section-label">Colore</div>
        <div class="color-row">
          ${PALETTE_KEYS.map((k) => html`
            <button class="swatch ${cfg.color===k?"selected":""}"
              style="background:${PALETTE[k].base}" title=${k}
              @click=${() => this._set("color", k)}></button>
          `)}
        </div>

        <!-- Visibilità -->
        <div class="section-label">Visibilità</div>
        <div class="toggles-grid">
          ${[
            ["show_header",  "Header"],
            ["show_hero",    "Hero"],
            ["show_list",    "Lista"],
            ["show_badge",   "Badge"],
            ["show_counter", "Contatore"],
          ].map(([field, label]) => html`
            <label class="toggle-label">
              <input type="checkbox" .checked=${cfg[field] !== false}
                @change=${(ev) => this._set(field, ev.target.checked)}/>
              ${label}
            </label>
          `)}
        </div>

        <!-- Sort & Filter -->
        <div class="section-label">Ordinamento e Filtro</div>
        <div class="row-2">
          <div class="field-group">
            <div class="field-label">Ordina</div>
            <select class="field-select" .value=${cfg.sort||"manual"}
              @change=${(ev) => this._set("sort", ev.target.value)}>
              <option value="manual">Manuale</option>
              <option value="alpha">Alfabetico</option>
              <option value="open_first">Aperti prima</option>
              <option value="closed_first">Chiusi prima</option>
            </select>
          </div>
          <div class="field-group">
            <div class="field-label">Filtra</div>
            <select class="field-select" .value=${cfg.filter||"all"}
              @change=${(ev) => this._set("filter", ev.target.value)}>
              <option value="all">Tutti</option>
              <option value="open">Solo aperti</option>
              <option value="closed">Solo chiusi</option>
            </select>
          </div>
        </div>

        <!-- Entità -->
        <div class="section-label">Entità <span class="hint">(trascina per riordinare)</span></div>

        <div class="entities-list">
          ${(cfg.entities||[]).map((ent, idx) => html`
            <div class="entity-editor ${this._dragOver===idx?"drag-over":""}"
              draggable="true"
              @dragstart=${(ev) => this._onDragStart(idx, ev)}
              @dragover=${(ev) => this._onDragOver(idx, ev)}
              @drop=${(ev) => this._onDrop(idx, ev)}
              @dragend=${() => { this._dragIdx=null; this._dragOver=null; }}>

              <div class="entity-header">
                <span class="drag-handle">⠿</span>
                <span class="entity-title">${ent.name || ent.entity || "Entità " + (idx+1)}</span>
                <button class="remove-btn" @click=${() => this._removeEntity(idx)}>✕</button>
              </div>

              <ha-entity-picker .hass=${this.hass} .value=${ent.entity||""}
                label="Entità"
                @value-changed=${(ev) => this._updateEntity(idx, "entity", ev.detail.value)}>
              </ha-entity-picker>

              <ha-textfield label="Nome (opzionale)" .value=${ent.name||""}
                @change=${(ev) => this._updateEntity(idx, "name", ev.target.value)}>
              </ha-textfield>

              <div class="field-group">
                <div class="field-label">Tipo grafico</div>
                <select class="field-select" .value=${ent.type||"auto"}
                  @change=${(ev) => this._updateEntity(idx, "type", ev.target.value)}>
                  ${OPENING_TYPES.map(t => html`
                    <option value=${t}>${TYPE_LABELS[t]}</option>
                  `)}
                </select>
              </div>

              <details class="actions-details">
                <summary class="actions-summary">Azioni (tap / hold / double-tap)</summary>
                ${this._renderActionField(idx, "tap_action", "Tap")}
                ${this._renderActionField(idx, "hold_action", "Hold (pressione lunga)")}
                ${this._renderActionField(idx, "double_tap_action", "Double tap")}
              </details>

            </div>
          `)}
        </div>

        <button class="add-button" @click=${this._addEntity}>+ Aggiungi entità</button>

      </div>
    `;
  }

  static get styles() {
    return css`
      .editor { display:flex; flex-direction:column; gap:12px; padding:8px 0; }
      .section-label { font-size:14px; font-weight:600; color:var(--primary-text-color); margin-top:4px; }
      .hint { font-size:11px; font-weight:400; color:var(--secondary-text-color); }
      .color-row { display:flex; gap:8px; flex-wrap:wrap; }
      .swatch { width:28px; height:28px; border-radius:50%; border:2px solid transparent; cursor:pointer; padding:0; transition:transform .15s,border-color .15s; }
      .swatch:hover { transform:scale(1.12); }
      .swatch.selected { border-color:var(--primary-text-color); box-shadow:0 0 0 2px var(--card-background-color,#fff); }
      .toggles-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
      .toggle-label { display:flex; align-items:center; gap:6px; font-size:13px; color:var(--primary-text-color); cursor:pointer; }
      .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
      .field-group { display:flex; flex-direction:column; gap:4px; }
      .field-label { font-size:12px; color:var(--secondary-text-color); }
      .field-select { padding:8px; border-radius:8px; border:1px solid var(--divider-color,#e5e7eb); background:var(--card-background-color,#fff); font-size:13px; color:var(--primary-text-color); font-family:inherit; cursor:pointer; }
      .entities-list { display:flex; flex-direction:column; gap:10px; }
      .entity-editor { border:1.5px solid var(--divider-color,#e5e7eb); border-radius:16px; padding:12px; display:flex; flex-direction:column; gap:10px; cursor:grab; }
      .entity-editor.drag-over { border-color:var(--primary-color,#3d9cf0); box-shadow:0 0 0 2px var(--primary-color,#3d9cf0); }
      .entity-header { display:flex; align-items:center; gap:8px; }
      .drag-handle { font-size:18px; color:var(--secondary-text-color); }
      .entity-title { flex:1; font-size:13px; font-weight:600; color:var(--primary-text-color); }
      .remove-btn { background:none; border:none; cursor:pointer; font-size:14px; color:var(--secondary-text-color); padding:2px 6px; border-radius:6px; }
      .remove-btn:hover { background:#fee8e8; color:#dc2626; }
      .actions-details { border-radius:8px; overflow:hidden; }
      .actions-summary { font-size:12px; color:var(--secondary-text-color); cursor:pointer; padding:4px 0; }
      .action-block { display:flex; flex-direction:column; gap:6px; padding:8px; background:var(--secondary-background-color,#f4f4f4); border-radius:8px; }
      .add-button { padding:12px; border-radius:12px; border:1.5px dashed var(--divider-color,#ccc); background:transparent; cursor:pointer; font-size:13px; color:var(--primary-text-color); font-family:inherit; }
      .add-button:hover { border-color:var(--primary-color,#3d9cf0); color:var(--primary-color,#3d9cf0); }
    `;
  }
}

registerLegacy("pastel-openings-card-editor", PastelOpeningsCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pastel-openings-card",
  name: "Pastel Openings Card",
  description: "Card universale per porte, finestre, cancelli, basculanti — illustrazioni animate, filtri, ordinamento, azioni complete. Parte della suite Pastel.",
  preview: true,
});
