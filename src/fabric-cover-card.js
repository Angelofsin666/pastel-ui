import {html,css} from 'lit-element';
import {BaseCard,stateLabel} from './base-card.js';
import {coverDevice,coverActionAvailable,deviceAppearance} from './device-controls-model.js';
import {equipmentValue} from './equipment-model.js';
import {fabricPosition,fabricState,fabricCommand} from './fabric-cover-model.js';
import {fabricCoverArt,fabricCoverStyles} from './fabric-cover-art.js';

const ACTIONS=[['open','mdi:arrow-expand-horizontal','Apri'],['stop','mdi:stop','Ferma'],['close','mdi:arrow-collapse-horizontal','Chiudi']];
const PROFILES={awning:{title:'Tenda da sole',subtitle:'Esterno',icon:'mdi:awning',color:'amber',metrics:[['wind','Vento'],['sun','Sole']]},curtains:{title:'Tende interne',subtitle:'Tessuto motorizzato',icon:'mdi:curtains',color:'lavender',metrics:[['light','Luce ambiente'],['power','Consumo']]}};

export class FabricCoverCard extends BaseCard{
 static kind='curtains';
 static getConfigElement(){return document.createElement(`${this.is}-editor`)}
 static getStubConfig(){const p=PROFILES[this.kind];return {title:p.title,subtitle:p.subtitle,color:p.color,entity:'',position_entity:'',state_entity:'',metrics:{},open_entity:'',stop_entity:'',close_entity:'',action_labels:{},action_colors:{}}}
 static get styles(){return [super.styles,fabricCoverStyles,css`
  .hero{min-height:162px}.hero .reading{font-size:35px}.hero .right{flex:1}
  .controls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:14px}
  .controls button{min-height:60px;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:8px 4px}
  .controls ha-icon{--mdc-icon-size:22px}.metrics{margin:12px 0}
  .empty{padding:8px 0}
  @media(max-width:380px){ha-card{padding:16px}.hero{padding:14px}.hero .reading{font-size:30px}.controls button{min-height:58px;font-size:12px}}
 `]}
 setConfig(c){super.setConfig(c);if(c.entity&&!c.entity.startsWith('cover.'))throw Error('Scegli un’entità cover per la tenda.');if(c.metrics&&(typeof c.metrics!=='object'||Array.isArray(c.metrics)))throw Error('metrics deve essere un oggetto')}
 get profile(){return PROFILES[this.constructor.kind]}
 getGridOptions(){return {columns:6,min_columns:3,rows:'auto'}}
 async setPosition(value){const c=this.config,d=c.entity?.startsWith('cover.')?coverDevice(this.hass,{entity:c.entity}):null;if(!d||!coverActionAvailable(this.hass,d,'set_cover_position'))return;await this.call('cover.set_cover_position',c.entity,{position:Math.round(Math.max(0,Math.min(100,value)))})}
 action(kind,icon,defaultLabel){const c=this.config,command=fabricCommand(this.hass,c,kind),name=c.action_labels?.[kind]||defaultLabel;return html`<button style=${this.palette(c.action_colors?.[kind]||c.color||this.profile.color)} aria-label=${name} ?disabled=${!command?.enabled||this.busy} @click=${()=>command&&this.call(command.action,command.entity)}><ha-icon icon=${icon}></ha-icon><span>${name}</span></button>`}
 render(){if(!this.config||!this.hass)return html``;const c=this.config,p=this.profile,position=fabricPosition(this.hass,c),status=stateLabel(fabricState(this.hass,c,position)),device=c.entity?.startsWith('cover.')?coverDevice(this.hass,{entity:c.entity}):null,canSet=device&&position!==null&&coverActionAvailable(this.hass,device,'set_cover_position');const metrics=p.metrics.filter(([key])=>c.metrics?.[key]);
  return html`<ha-card style=${deviceAppearance(this,{...c,color:c.color||p.color})}><header><div class="icon"><ha-icon icon=${c.icon||p.icon}></ha-icon></div><div class="heading"><h2>${c.title||p.title}</h2><div class="subtitle">${c.subtitle||p.subtitle}</div></div><span class="pill" role="status">${status}</span></header><div class="hero">${fabricCoverArt(this.constructor.kind,position)}<div class="right"><div class="reading" aria-live="polite">${position===null?'—':Math.round(position)}<small>%</small></div><div class="caption">${c.hero_label||'Apertura'}</div></div></div>${canSet?html`<pastel-device-range .value=${position} label="Apertura tenda" caption="Apertura" .disabled=${this.busy} @value-changed=${e=>this.setPosition(e.detail.value)}></pastel-device-range>`:''}${metrics.length?html`<div class="metrics">${metrics.map(([key,label])=>html`<button class="metric" @click=${()=>this.info(c.metrics[key])}><small>${c.metric_labels?.[key]||label}</small><strong>${equipmentValue(this.hass,c.metrics[key])}</strong></button>`)}</div>`:''}<div class="controls">${ACTIONS.map(([kind,icon,label])=>this.action(kind,icon,label))}</div>${!c.entity&&!c.position_entity?html`<div class="empty">Seleziona una tenda cover o un sensore di posizione nell’editor.</div>`:''}${this.feedback()}</ha-card>`;
 }
}
export class AwningCard extends FabricCoverCard{static kind='awning';static is='pastel-awning-card'}
export class CurtainsCard extends FabricCoverCard{static kind='curtains';static is='pastel-curtains-card'}
