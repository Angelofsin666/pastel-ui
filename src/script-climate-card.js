import {html,css} from 'lit-element';
import {BaseCard} from './base-card.js';
import {illustration} from './illustrations.js';
import {readNumber} from './stove-model.js';
import {climateScriptAvailable,scriptClimateState,validateScriptClimateConfig} from './script-climate-model.js';
export class ScriptClimateCard extends BaseCard{
 static getConfigElement(){return document.createElement('pastel-script-climate-card-editor')}
 static getStubConfig(){return {title:'Climatizzatore',subtitle:'Clima con script',color:'blue',temperature_entity:'',buttons:[{name:'Accendi',icon:'mdi:power',script:''},{name:'Raffreddamento',icon:'mdi:snowflake',script:''},{name:'Deumidifica',icon:'mdi:water',script:''},{name:'Quiet',icon:'mdi:sleep',script:''},{name:'Spegni',icon:'mdi:power-off',script:''}]}}
 static get styles(){return [super.styles,css`
  .reading{font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.reading small{font-size:16px;margin-left:3px;letter-spacing:0}.climate-actions{display:flex;flex-wrap:wrap;gap:8px}.climate-button{flex:1 1 110px;min-width:90px;min-height:72px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;overflow-wrap:anywhere;line-height:1.4}.climate-button ha-icon{--mdc-icon-size:23px;flex-shrink:0}.climate-button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.climate-button small{font-size:11px;font-weight:400}.hero .right{flex:1}.sensor-info{font-size:11px;color:var(--p-muted);margin:12px 0 0;overflow-wrap:anywhere}
  @media(max-width:340px){.hero{padding:16px;gap:10px}.hero svg{width:76px;height:76px}.hero .reading{font-size:28px}}
 `]}
 setConfig(c){validateScriptClimateConfig(c);super.setConfig(c)}
 appearance(c){return [this.palette(c.color||'blue'),...Object.entries({tint_color:'--p-tint',accent_color:'--p-accent',background_color:'--p-surface',text_color:'--p-ink',secondary_text_color:'--p-muted'}).filter(([key])=>c[key]).map(([key,variable])=>`${variable}:${c[key]}`)].join(';')}
 async run(button){if(this.busy||!climateScriptAvailable(this.hass,button))return;await this.call('script.turn_on',button.script)}
 render(){if(!this.hass||!this.config)return html``;const c=this.config,s=this.hass.states[c.temperature_entity],temperature=readNumber(this.hass,c.temperature_entity),unit=s?.attributes?.unit_of_measurement||this.hass.config?.unit_system?.temperature||'°C',status=scriptClimateState(this.hass,c.state_entity);const value=temperature===null?'—':new Intl.NumberFormat(this.hass.locale?.language||'it',{maximumFractionDigits:1}).format(temperature);
  return html`<ha-card style=${this.appearance(c)}><header><div class="icon"><ha-icon icon=${c.icon||'mdi:air-conditioner'}></ha-icon></div><div class="heading"><h2>${c.title||'Climatizzatore'}</h2><div class="subtitle">${c.subtitle??'Clima con script'}</div></div>${status?html`<span class="pill">${status.label}</span>`:''}</header>
  <div class="hero">${illustration('climate')}<div class="right"><div class="reading" aria-live="polite">${value}<small>${unit}</small></div><div class="caption">${c.temperature_label||'Temperatura ambiente'}</div></div></div>
  <div class="climate-actions">${(c.buttons||[]).map(button=>{const state=scriptClimateState(this.hass,button.state_entity),active=state?.available?state.state===String(button.active_state??'on'):null;return html`<button class="climate-button" style=${button.color?this.palette(button.color):''} aria-pressed=${active===null?'undefined':String(active)} ?disabled=${this.busy||!climateScriptAvailable(this.hass,button)} @click=${()=>this.run(button)}><ha-icon icon=${button.icon||'mdi:air-conditioner'}></ha-icon><span>${button.name||this.hass.states[button.script]?.attributes?.friendly_name||'Esegui'}</span>${state?html`<small>${state.available?(active?(button.active_label||'Attivo'):(button.inactive_label||'Non attivo')):'Non disponibile'}</small>`:''}</button>`})}</div>
  ${!c.temperature_entity?html`<div class="sensor-info">Scegli il sensore di temperatura nell’editor.</div>`:''}${!c.buttons?.length?html`<div class="empty">Aggiungi i pulsanti e scegli gli script nell’editor.</div>`:''}${this.feedback()}</ha-card>`;
 }
}
