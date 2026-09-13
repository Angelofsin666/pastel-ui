import { registerLegacy } from "../legacy-style.js";
// ============================================================================
// Pastel Button Card — custom Lovelace card for Home Assistant / HACS
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
  gray:   { base: "#9ca3af", light: "#e5e7eb", bg: "#f3f4f6", text: "#6b7280" },
};
const PALETTE_KEYS = Object.keys(PALETTE);

function getColors(key) {
  return PALETTE[key] || PALETTE.blue;
}

// ----------------------------------------------------------------------------
// Layout logic: 2-column grid, last button spans full width if count is odd
// ----------------------------------------------------------------------------
function isLastAndOdd(index, total) {
  return total % 2 !== 0 && index === total - 1;
}

// ----------------------------------------------------------------------------
// Card
// ----------------------------------------------------------------------------
class PastelButtonCard extends LitElement {

  static get properties() {
    return { hass: {}, config: {}, _activating: { state: true } };
  }

  static getStubConfig() {
    return {
      title: "",
      buttons: [
        {
          label: "Bottone",
          icon: "mdi:lightning-bolt",
          color: "blue",
          action: { type: "toggle", entity_id: "" },
        },
      ],
    };
  }

  setConfig(config) {
    if (!config) throw new Error("Configurazione non valida");
    this.config = {
      title: config.title || "",
      buttons: Array.isArray(config.buttons) ? config.buttons : [],
    };
    this._activating = {};
  }

  getCardSize() {
    const rows = Math.ceil((this.config.buttons || []).length / 2);
    return 1 + rows;
  }

  static getConfigElement() {
    return document.createElement("pastel-button-card-editor");
  }

  // -- action execution -----------------------------------------------------

  async _handleTap(btn, index, ev) {
    if (ev) ev.stopPropagation();
    if (!btn.action) return;

    // Haptic feedback: HA native API (iOS + Android app), fallback vibration
    try {
      if (window.hapticFeedback) {
        window.hapticFeedback("light");
      } else if (navigator.vibrate) {
        navigator.vibrate(30);
      }
    } catch {}
    this._activating = { ...this._activating, [index]: true };
    setTimeout(() => {
      this._activating = { ...this._activating, [index]: false };
    }, 200);

    const action = btn.action;

    switch (action.type) {
      case "toggle":
        if (action.entity_id) {
          this.hass.callService("homeassistant", "toggle", {
            entity_id: action.entity_id,
          });
        }
        break;

      case "turn_on":
        if (action.entity_id) {
          const [domain] = action.entity_id.split(".");
          this.hass.callService(domain, "turn_on", {
            entity_id: action.entity_id,
          });
        }
        break;

      case "turn_off":
        if (action.entity_id) {
          const [domain] = action.entity_id.split(".");
          this.hass.callService(domain, "turn_off", {
            entity_id: action.entity_id,
          });
        }
        break;

      case "call_service": {
        const [svcDomain, svcService] = (action.service || "").split(".");
        if (svcDomain && svcService) {
          this.hass.callService(svcDomain, svcService, action.data || {});
        }
        break;
      }

      case "scene":
        if (action.entity_id) {
          this.hass.callService("scene", "turn_on", {
            entity_id: action.entity_id,
          });
        }
        break;

      case "script":
        if (action.entity_id) {
          this.hass.callService("script", "turn_on", {
            entity_id: action.entity_id,
          });
        }
        break;

      case "navigate":
        if (action.navigation_path) {
          history.pushState(null, "", action.navigation_path);
          window.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true }));
        }
        break;

      case "url":
        if (action.url_path) {
          window.open(action.url_path, action.new_tab !== false ? "_blank" : "_self");
        }
        break;

      case "more_info":
        if (action.entity_id) {
          const event = new Event("hass-more-info", { bubbles: true, composed: true });
          event.detail = { entityId: action.entity_id };
          this.dispatchEvent(event);
        }
        break;

      default:
        break;
    }
  }

  // -- render ---------------------------------------------------------------

  render() {
    if (!this.config || !this.hass) return html``;

    const buttons = this.config.buttons || [];
    const total = buttons.length;

    return html`
      <ha-card>
        ${this.config.title ? html`
          <div class="card-title">${this.config.title}</div>
        ` : ""}

        <div class="button-grid">
          ${buttons.map((btn, idx) => {
            const colors = getColors(btn.color);
            const span = isLastAndOdd(idx, total);
            const activating = this._activating && this._activating[idx];

            return html`
              <button
                class="pastel-btn ${activating ? "activating" : ""}"
                style="
                  --btn-bg: ${colors.bg};
                  --btn-text: ${colors.text};
                  --btn-base: ${colors.base};
                  --btn-light: ${colors.light};
                  ${span ? "grid-column: span 2;" : ""}
                "
                @click=${(e) => this._handleTap(btn, idx, e)}
              >
                ${btn.icon ? html`
                  <ha-icon icon=${btn.icon} class="btn-icon"></ha-icon>
                ` : ""}
                <span class="btn-label">${btn.label || ""}</span>
              </button>
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
      .card-title {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        padding: 10px 12px 4px;
      }
      .button-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        padding: 4px;
      }
      .pastel-btn {
        background: var(--btn-bg);
        color: var(--btn-text);
        border: none;
        border-radius: 18px;
        padding: 28px 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        font-family: inherit;
        transition: filter 0.15s ease, transform 0.1s ease;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        min-height: 90px;
      }
      .pastel-btn:hover {
        filter: brightness(0.96);
      }
      .pastel-btn:active, .pastel-btn.activating {
        transform: scale(0.97);
        filter: brightness(0.92);
      }
      .btn-icon {
        --mdc-icon-size: 28px;
        color: var(--btn-text);
      }
      .btn-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--btn-text);
        text-align: center;
        line-height: 1.3;
      }
    `;
  }
}

registerLegacy("pastel-button-card", PastelButtonCard);

// ============================================================================
// Visual Editor
// ============================================================================
class PastelButtonCardEditor extends LitElement {

  static get properties() {
    return {
      hass: {},
      _config: { state: true },
      _dragIndex: { state: true },
      _dragOverIndex: { state: true },
    };
  }

  setConfig(config) {
    this._config = { ...config, buttons: [...(config.buttons || [])] };
    this._dragIndex = null;
    this._dragOverIndex = null;
  }

  _fireChanged() {
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }

  _addButton() {
    const buttons = [
      ...(this._config.buttons || []),
      { label: "Nuovo bottone", icon: "mdi:lightning-bolt", color: "blue", action: { type: "toggle", entity_id: "" } },
    ];
    this._config = { ...this._config, buttons };
    this._fireChanged();
  }

  _removeButton(index) {
    const buttons = [...(this._config.buttons || [])];
    buttons.splice(index, 1);
    this._config = { ...this._config, buttons };
    this._fireChanged();
  }

  _updateButton(index, field, value) {
    const buttons = [...(this._config.buttons || [])];
    buttons[index] = { ...buttons[index], [field]: value };
    this._config = { ...this._config, buttons };
    this._fireChanged();
  }

  _updateButtonAction(index, field, value) {
    const buttons = [...(this._config.buttons || [])];
    buttons[index] = {
      ...buttons[index],
      action: { ...(buttons[index].action || {}), [field]: value },
    };
    this._config = { ...this._config, buttons };
    this._fireChanged();
  }

  // -- drag & drop ----------------------------------------------------------

  _onDragStart(index, ev) {
    this._dragIndex = index;
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("text/plain", String(index));
  }

  _onDragOver(index, ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    this._dragOverIndex = index;
  }

  _onDrop(index, ev) {
    ev.preventDefault();
    if (this._dragIndex === null || this._dragIndex === index) {
      this._dragIndex = null;
      this._dragOverIndex = null;
      return;
    }
    const buttons = [...(this._config.buttons || [])];
    const [moved] = buttons.splice(this._dragIndex, 1);
    buttons.splice(index, 0, moved);
    this._config = { ...this._config, buttons };
    this._dragIndex = null;
    this._dragOverIndex = null;
    this._fireChanged();
  }

  _onDragEnd() {
    this._dragIndex = null;
    this._dragOverIndex = null;
  }

  // -- render action fields depending on action type ------------------------

  _renderActionFields(btn, idx) {
    const type = btn.action?.type || "toggle";

    const needsEntity = ["toggle", "turn_on", "turn_off", "more_info", "scene", "script"].includes(type);
    const needsService = type === "call_service";
    const needsNav = type === "navigate";
    const needsUrl = type === "url";

    const domainFilter = type === "scene"
      ? ["scene"]
      : type === "script"
      ? ["script"]
      : type === "more_info" || type === "toggle" || type === "turn_on" || type === "turn_off"
      ? undefined
      : undefined;

    return html`
      <div class="action-row">
        <label>Tipo azione</label>
        <select
          .value=${type}
          @change=${(ev) => this._updateButtonAction(idx, "type", ev.target.value)}
        >
          <option value="toggle">Toggle entità</option>
          <option value="turn_on">Accendi</option>
          <option value="turn_off">Spegni</option>
          <option value="script">Lancia script</option>
          <option value="scene">Attiva scena</option>
          <option value="call_service">Chiama servizio</option>
          <option value="more_info">Apri dettagli (more-info)</option>
          <option value="navigate">Naviga a pagina</option>
          <option value="url">Apri URL</option>
        </select>
      </div>

      ${needsEntity ? html`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${btn.action?.entity_id || ""}
          .includeDomains=${domainFilter}
          label="Entità"
          @value-changed=${(ev) => this._updateButtonAction(idx, "entity_id", ev.detail.value)}
        ></ha-entity-picker>
      ` : ""}

      ${needsService ? html`
        <ha-textfield
          label="Servizio (es. light.turn_on)"
          .value=${btn.action?.service || ""}
          @change=${(ev) => this._updateButtonAction(idx, "service", ev.target.value)}
        ></ha-textfield>
        <ha-textfield
          label="Dati JSON opzionali (es. {&quot;entity_id&quot;: &quot;light.xyz&quot;})"
          .value=${btn.action?.data ? JSON.stringify(btn.action.data) : ""}
          @change=${(ev) => {
            try {
              const parsed = JSON.parse(ev.target.value || "{}");
              this._updateButtonAction(idx, "data", parsed);
            } catch {}
          }}
        ></ha-textfield>
      ` : ""}

      ${needsNav ? html`
        <ha-textfield
          label="Percorso (es. /lovelace/1)"
          .value=${btn.action?.navigation_path || ""}
          @change=${(ev) => this._updateButtonAction(idx, "navigation_path", ev.target.value)}
        ></ha-textfield>
      ` : ""}

      ${needsUrl ? html`
        <ha-textfield
          label="URL"
          .value=${btn.action?.url_path || ""}
          @change=${(ev) => this._updateButtonAction(idx, "url_path", ev.target.value)}
        ></ha-textfield>
      ` : ""}
    `;
  }

  render() {
    if (!this._config || !this.hass) return html``;

    const buttons = this._config.buttons || [];

    return html`
      <div class="editor">

        <ha-textfield
          label="Titolo card (opzionale)"
          .value=${this._config.title || ""}
          @change=${(ev) => { this._config = { ...this._config, title: ev.target.value }; this._fireChanged(); }}
        ></ha-textfield>

        <div class="section-label">Bottoni <span class="hint">(trascina per riordinare)</span></div>

        <div class="buttons-list">
          ${buttons.map((btn, idx) => html`
            <div
              class="btn-editor ${this._dragOverIndex === idx ? "drag-over" : ""}"
              draggable="true"
              @dragstart=${(ev) => this._onDragStart(idx, ev)}
              @dragover=${(ev) => this._onDragOver(idx, ev)}
              @drop=${(ev) => this._onDrop(idx, ev)}
              @dragend=${() => this._onDragEnd()}
            >
              <div class="btn-editor-header">
                <span class="drag-handle">⠿</span>
                <span class="btn-editor-title">${btn.label || "Bottone " + (idx + 1)}</span>
                <button class="remove-btn" @click=${() => this._removeButton(idx)}>✕</button>
              </div>

              <ha-textfield
                label="Etichetta"
                .value=${btn.label || ""}
                @change=${(ev) => this._updateButton(idx, "label", ev.target.value)}
              ></ha-textfield>

              <ha-icon-picker
                label="Icona"
                .value=${btn.icon || ""}
                @value-changed=${(ev) => this._updateButton(idx, "icon", ev.detail.value)}
              ></ha-icon-picker>

              <div class="color-section">
                <div class="color-label">Colore</div>
                <div class="color-row">
                  ${PALETTE_KEYS.map((key) => html`
                    <button
                      class="swatch ${btn.color === key ? "selected" : ""}"
                      style="background:${PALETTE[key].base}"
                      title=${key}
                      @click=${() => this._updateButton(idx, "color", key)}
                    ></button>
                  `)}
                </div>
              </div>

              ${this._renderActionFields(btn, idx)}

            </div>
          `)}
        </div>

        <button class="add-button" @click=${this._addButton}>+ Aggiungi bottone</button>

      </div>
    `;
  }

  static get styles() {
    return css`
      .editor { display: flex; flex-direction: column; gap: 12px; padding: 8px 0; }
      .section-label { font-size: 14px; font-weight: 600; color: var(--primary-text-color); margin-top: 4px; }
      .hint { font-size: 12px; font-weight: 400; color: var(--secondary-text-color); }
      .buttons-list { display: flex; flex-direction: column; gap: 10px; }
      .btn-editor {
        border: 1.5px solid var(--divider-color, #e5e7eb);
        border-radius: 16px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: var(--card-background-color, #fff);
        cursor: grab;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }
      .btn-editor.drag-over {
        border-color: var(--primary-color, #3d9cf0);
        box-shadow: 0 0 0 2px var(--primary-color, #3d9cf0);
      }
      .btn-editor:active { cursor: grabbing; }
      .btn-editor-header {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .drag-handle { font-size: 18px; color: var(--secondary-text-color); cursor: grab; }
      .btn-editor-title { flex: 1; font-size: 13px; font-weight: 600; color: var(--primary-text-color); }
      .remove-btn {
        background: none; border: none; cursor: pointer; font-size: 14px;
        color: var(--secondary-text-color); padding: 2px 6px; border-radius: 6px;
      }
      .remove-btn:hover { background: var(--error-color, #fee8e8); color: #dc2626; }
      .color-label { font-size: 12px; color: var(--secondary-text-color); margin-bottom: 6px; }
      .color-row { display: flex; gap: 8px; flex-wrap: wrap; }
      .swatch {
        width: 26px; height: 26px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s, border-color 0.15s;
      }
      .swatch:hover { transform: scale(1.15); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .action-row { display: flex; flex-direction: column; gap: 4px; }
      .action-row label { font-size: 12px; color: var(--secondary-text-color); }
      .action-row select {
        padding: 8px; border-radius: 8px; border: 1px solid var(--divider-color, #e5e7eb);
        background: var(--card-background-color, #fff); font-size: 13px; color: var(--primary-text-color);
        font-family: inherit; cursor: pointer;
      }
      .add-button {
        padding: 12px; border-radius: 12px; border: 1.5px dashed var(--divider-color, #ccc);
        background: transparent; cursor: pointer; font-size: 13px; color: var(--primary-text-color);
        font-family: inherit; transition: border-color 0.15s;
      }
      .add-button:hover { border-color: var(--primary-color, #3d9cf0); color: var(--primary-color, #3d9cf0); }
    `;
  }
}

registerLegacy("pastel-button-card-editor", PastelButtonCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pastel-button-card",
  name: "Pastel Button Card",
  description: "Griglia di bottoni pastello personalizzabili: colore, icona, etichetta e azione per ogni bottone. Layout automatico 2 colonne.",
  preview: true,
});
