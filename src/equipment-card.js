import {html,css} from 'lit-element';
import {BaseCard,stateLabel} from './base-card.js';
import {EQUIPMENT,equipmentType,isAvailable,sensorValue,buttonCommand} from './equipment-model.js';
import {illustration} from './illustrations.js';

export class EquipmentCard extends BaseCard{
 static get properties(){return {...super.properties}}
 static get styles(){return [super.styles,css`
  .hero{min-height:155px}.hero svg{width:104px;height:104px}.hero .reading{font-size:34px;font-weight:450;overflow-wrap:anywhere}.metric{cursor:pointer}.metric strong{overflow-wrap:anywhere;font-size:21px}.actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.actions button{display:flex;align-items:center;justify-content:center;gap:5px;min-width:0;overflow-wrap:anywhere}.actions ha-icon{--mdc-icon-size:18px;flex-shrink:0}.empty{padding:8px 0 0}@media(max-width:450px){ha-card{padding:16px}.hero{padding:16px}.hero svg{width:88px;height:88px}.actions{grid-template-columns:repeat(2,minmax(0,1fr))}.actions button{font-size:12px}}
 `]}
 static getConfigElement(){return document.createElement(`${this.is}-editor`)}
 static getStubConfig(){return {title:'',state_entity:'',hero_entity:'',metrics:{},buttons:EQUIPMENT[this.profile].buttons.map(([name,icon])=>({name,icon,entity:''}))}}
 setConfig(config){super.setConfig(config);if(config.metrics&&(typeof config.metrics!=='object'||Array.isArray(config.metrics)))throw new Error('metrics deve essere un oggetto');if(config.buttons&&!Array.isArray(config.buttons))throw new Error('buttons deve essere una lista')}
 get profile(){return EQUIPMENT[this.constructor.profile]}
 render(){if(!this.config||!this.hass)return html``;const c=this.config,p=this.profile,state=this.hass.states[c.state_entity],hero=this.hass.states[c.hero_entity],accent=this.palette(c.color||p.color);const custom=`${c.background_color?`--p-surface:${c.background_color};`:''}${c.tint_color?`--p-tint:${c.tint_color};`:''}${c.accent_color?`--p-accent:${c.accent_color};`:''}${c.text_color?`--p-ink:${c.text_color};`:''}${c.secondary_text_color?`--p-muted:${c.secondary_text_color};`:''}`;const metrics=p.metrics.filter(([key])=>c.metrics?.[key]);return html`<ha-card style=${accent+custom}>
  <header><div class="icon"><ha-icon icon=${c.icon||p.icon}></ha-icon></div><div class="heading"><h2>${c.title||p.title}</h2><div class="subtitle">${c.subtitle||p.subtitle}</div></div>${c.state_entity?html`<span class="pill">${stateLabel(state?.state)}</span>`:''}</header>
  <div class="hero">${illustration(p.art)}<div class="right"><div class="reading">${sensorValue(this.hass,c.hero_entity)}</div><div class="caption">${c.hero_label||p.hero}</div></div></div>
  ${metrics.length?html`<div class="metrics">${metrics.map(([key,label])=>html`<button class="metric" @click=${()=>this.info(c.metrics[key])}><small>${c.metric_labels?.[key]||label}</small><strong>${sensorValue(this.hass,c.metrics[key])}</strong></button>`)}</div>`:''}
  ${(c.buttons||[]).length?html`<div class="section-label">Comandi</div><div class="actions">${c.buttons.map(button=>{const cmd=buttonCommand(button),domain=cmd?.action.split('.')[0],service=cmd?.action.split('.')[1],valid=!!cmd&&!!this.hass.services?.[domain]?.[service]&&(!cmd.entity||isAvailable(this.hass.states[cmd.entity])||['button','input_button'].includes(cmd.entity.split('.')[0])&&this.hass.states[cmd.entity]?.state==='unknown');return html`<button style=${this.palette(button.color||c.color||p.color)} ?disabled=${!valid||this.busy} @click=${()=>this.call(cmd.action,cmd.entity,button.data||{},button.target)}><ha-icon icon=${button.icon||'mdi:play'}></ha-icon>${button.name||'Azione'}</button>`})}</div>`:''}
  ${!c.hero_entity&&!c.state_entity&&!metrics.length?html`<div class="empty">Apri l’editor per scegliere i sensori e i comandi del tuo dispositivo.</div>`:''}${this.feedback()}</ha-card>`}
}
export const EQUIPMENT_CARD_CLASSES=Object.fromEntries(Object.keys(EQUIPMENT).map(key=>[equipmentType(key),class extends EquipmentCard{static profile=key;static is=equipmentType(key)}]));
