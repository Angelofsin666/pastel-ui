import {html,css} from 'lit-element';
import {BaseCard,stateLabel} from './base-card.js';
import {illustration} from './illustrations.js';
import {thermostatModes,nextTarget,supportsTarget,formatTemperature,HVAC_LABELS} from './thermostat-model.js';

export class ThermostatCard extends BaseCard{
 static get properties(){return {...super.properties}}
 static get styles(){return [super.styles,css`
  .hero{min-height:155px}.hero svg{width:104px;height:104px}.hero .reading{font-size:34px}.target-row{display:flex;align-items:center;gap:9px;border-top:1px solid var(--divider-color,#e8ebed);padding:12px 0 16px;font-size:13px}.target-row span{flex:1}.target-row strong{min-width:47px;text-align:center;font-size:16px;font-variant-numeric:tabular-nums}.target-row button{min-width:44px;font-size:20px;padding:8px}.modes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.modes button{min-width:0;overflow-wrap:anywhere}.modes button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}@media(max-width:450px){ha-card{padding:16px}.hero{padding:16px}.hero svg{width:88px;height:88px}.modes{grid-template-columns:repeat(2,minmax(0,1fr))}}
 `]}
 static getConfigElement(){return document.createElement('pastel-native-thermostat-card-editor')}
 static getStubConfig(){return {entity:'',title:'',subtitle:'',humidity_entity:'',color:'blue'}}
 render(){if(!this.config||!this.hass)return html``;const c=this.config,s=this.hass.states[c.entity],a=s?.attributes||{},unit=this.hass.config?.unit_system?.temperature||'°C',valid=!!s&&!['unavailable','unknown'].includes(s.state),modes=thermostatModes(s),target=supportsTarget(s);const custom=`${c.background_color?`--p-surface:${c.background_color};`:''}${c.tint_color?`--p-tint:${c.tint_color};`:''}${c.accent_color?`--p-accent:${c.accent_color};`:''}${c.text_color?`--p-ink:${c.text_color};`:''}${c.secondary_text_color?`--p-muted:${c.secondary_text_color};`:''}`;const humidity=this.hass.states[c.humidity_entity];return html`<ha-card style=${this.palette(c.color||'blue')+custom}>
  <header><div class="icon"><ha-icon icon=${c.icon||'mdi:thermostat'}></ha-icon></div><div class="heading"><h2>${c.title||'Termostato'}</h2><div class="subtitle">${c.subtitle||'Clima di casa'}</div></div><span class="pill">${valid?stateLabel(s.state):'Non disponibile'}</span></header>
  <div class="hero">${illustration('thermostat')}<div class="right"><div class="reading">${formatTemperature(a.current_temperature,unit)}</div><div class="caption">Temperatura ambiente</div></div></div>
  <div class="metrics"><button class="metric" @click=${()=>this.info(c.entity)}><small>Temperatura impostata</small><strong>${target?formatTemperature(a.temperature,unit):'—'}</strong></button>${c.humidity_entity?html`<button class="metric" @click=${()=>this.info(c.humidity_entity)}><small>Umidità</small><strong>${humidity&&!['unknown','unavailable'].includes(humidity.state)?`${humidity.state}${humidity.attributes?.unit_of_measurement||'%'}`:'—'}</strong></button>`:''}</div>
  ${target?html`<div class="target-row"><span>Imposta temperatura</span><button aria-label="Abbassa temperatura" ?disabled=${!valid||this.busy||nextTarget(s,-1)===Number(a.temperature)} @click=${()=>this.setTarget(-1)}>−</button><strong>${formatTemperature(a.temperature,unit)}</strong><button aria-label="Alza temperatura" ?disabled=${!valid||this.busy||nextTarget(s,1)===Number(a.temperature)} @click=${()=>this.setTarget(1)}>+</button></div>`:''}
  ${modes.length?html`<div class="modes">${modes.map(mode=>html`<button aria-label=${HVAC_LABELS[mode]} aria-pressed=${String(s.state===mode)} ?disabled=${!valid||this.busy||!this.hass.services?.climate?.set_hvac_mode} @click=${()=>this.call('climate.set_hvac_mode',c.entity,{hvac_mode:mode})}>${HVAC_LABELS[mode]}</button>`)}</div>`:''}
  ${!c.entity?html`<div class="empty">Scegli un’entità climate nell’editor della card.</div>`:''}${this.feedback()}
 </ha-card>`}
 setTarget(direction){const state=this.hass?.states?.[this.config?.entity],value=nextTarget(state,direction);if(value!==null&&supportsTarget(state))this.call('climate.set_temperature',this.config.entity,{temperature:value})}
}
