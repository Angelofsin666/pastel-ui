import {html,css} from 'lit-element';
import {BaseCard,stateLabel} from './base-card.js';
import {EQUIPMENT,equipmentType,isAvailable,sensorValue,equipmentValue,buttonCommand,percentage,zoneAction,nativeStateLabel,nativeControls,leakSummary,cameraPicture} from './equipment-model.js';
import {illustration} from './illustrations.js';

export class EquipmentCard extends BaseCard{
 static get properties(){return {...super.properties}}
 static get styles(){return [super.styles,css`
  .hero{min-height:155px}.hero svg{width:104px;height:104px}.hero .reading{font-size:34px;font-weight:450;overflow-wrap:anywhere}.level{height:8px;border-radius:5px;background:var(--divider-color,#e8ebed);overflow:hidden;margin:-4px 2px 16px}.level span{display:block;height:100%;background:var(--p-accent);border-radius:5px}.metric{cursor:pointer}.metric strong{overflow-wrap:anywhere;font-size:21px}.actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.actions button{display:flex;align-items:center;justify-content:center;gap:5px;min-width:0;overflow-wrap:anywhere}.actions ha-icon{--mdc-icon-size:18px;flex-shrink:0}.zone{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:8px;align-items:center;border-top:1px solid var(--divider-color,#e8ebed);padding:10px 0}.zone strong{display:block;font-size:13px}.zone small{color:var(--p-muted);font-size:11px}.zone button{min-width:44px}.empty{padding:8px 0 0}
  .camera-frame{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;min-height:185px;border-radius:20px;background:var(--p-tint);color:var(--p-accent);margin-bottom:16px}.camera-frame svg{width:86px;height:86px}.camera-frame span{font-size:12px}.camera-frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.camera-frame img[hidden]{display:none}.leak-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--divider-color,#e8ebed);font-size:13px}.leak-row strong{font-weight:600;color:var(--p-accent)}.leak-row strong.danger{color:#ad3d3d}.leak-note{border-radius:12px;background:var(--p-tint);color:var(--p-accent);padding:12px;font-size:12px;margin:6px 0 14px}
  @media(max-width:450px){ha-card{padding:16px}.hero{padding:16px}.hero svg{width:88px;height:88px}.actions{grid-template-columns:repeat(2,minmax(0,1fr))}.actions button{font-size:12px}}
 `]}
 static getConfigElement(){return document.createElement(`${this.is}-editor`)}
 static getStubConfig(){return {title:'',state_entity:'',hero_entity:'',camera_entity:'',metrics:{},buttons:EQUIPMENT[this.profile].buttons.map(([name,icon])=>({name,icon,entity:''})),leak_sensors:[]}}
 setConfig(config){super.setConfig(config);if(config.metrics&&(typeof config.metrics!=='object'||Array.isArray(config.metrics)))throw new Error('metrics deve essere un oggetto');for(const key of ['buttons','zones','leak_sensors'])if(config[key]&&!Array.isArray(config[key]))throw new Error(`${key} deve essere una lista`)}
 get profile(){return EQUIPMENT[this.constructor.profile]}
 status(c,p,heroState){
  if(p.leak_sensors&&(c.leak_sensors||[]).length)return leakSummary(this.hass,c.leak_sensors);
  if(c.state_entity)return stateLabel(this.hass.states[c.state_entity]?.state);
  return p.native&&c.hero_entity?nativeStateLabel(p.native,heroState?.state):'';
 }
 camera(c,p){const picture=cameraPicture(this.hass,c.camera_entity);return html`<div class="camera-frame" role="img" aria-label=${`${c.hero_label||p.hero}: ${c.camera_entity||'nessuna telecamera associata'}`}>${illustration(p.art)}<span>${c.camera_entity?'Anteprima telecamera':'Scegli una telecamera nell’editor'}</span>${picture?html`<img src=${picture} alt=${c.hero_label||p.hero} loading="lazy" @error=${e=>{e.currentTarget.hidden=true}}>`:''}</div>`}
 render(){
  if(!this.config||!this.hass)return html``;
  const c=this.config,p=this.profile,heroState=this.hass.states[c.hero_entity],accent=this.palette(c.color||p.color);
  const custom=`${c.background_color?`--p-surface:${c.background_color};`:''}${c.tint_color?`--p-tint:${c.tint_color};`:''}${c.accent_color?`--p-accent:${c.accent_color};`:''}${c.text_color?`--p-ink:${c.text_color};`:''}${c.secondary_text_color?`--p-muted:${c.secondary_text_color};`:''}`;
  const metrics=p.metrics.filter(([key])=>c.metrics?.[key]);
  const native=p.native&&c.hero_entity?nativeControls(p.native,heroState,this.hass.services):[];
  const cameraAction=p.camera&&c.camera_entity?[{name:'Live',icon:'mdi:video',enabled:isAvailable(this.hass.states[c.camera_entity])}]:[];
  const status=this.status(c,p,heroState);
  return html`<ha-card style=${accent+custom}>
   <header><div class="icon"><ha-icon icon=${c.icon||p.icon}></ha-icon></div><div class="heading"><h2>${c.title||p.title}</h2><div class="subtitle">${c.subtitle||p.subtitle}</div></div>${status?html`<span class="pill">${status}</span>`:''}</header>
   ${p.camera?this.camera(c,p):html`<div class="hero">${illustration(p.art)}<div class="right"><div class="reading">${p.native?nativeStateLabel(p.native,heroState?.state):sensorValue(this.hass,c.hero_entity)}</div><div class="caption">${c.hero_label||p.hero}</div></div></div>`}
   ${!p.camera&&percentage(this.hass,c.hero_entity)!==null?html`<div class="level" role="progressbar" aria-label=${c.hero_label||p.hero} aria-valuenow=${percentage(this.hass,c.hero_entity)} aria-valuemin="0" aria-valuemax="100"><span style=${`width:${percentage(this.hass,c.hero_entity)}%`}></span></div>`:''}
   ${metrics.length?html`<div class="metrics">${metrics.map(([key,label])=>html`<button class="metric" @click=${()=>this.info(c.metrics[key])}><small>${c.metric_labels?.[key]||label}</small><strong>${equipmentValue(this.hass,c.metrics[key])}</strong></button>`)}</div>`:''}
   ${p.leak_sensors&&(c.leak_sensors||[]).length?html`<div class="leak-note">${leakSummary(this.hass,c.leak_sensors)}</div>${c.leak_sensors.map(item=>{const state=this.hass.states[item.entity],danger=isAvailable(state)&&state.state==='on';return html`<div class="leak-row"><span>${item.name||state?.attributes?.friendly_name||'Sensore perdita'}</span><strong class=${danger?'danger':''}>${equipmentValue(this.hass,item.entity)}</strong></div>`})}`:''}
   ${p.zones&&(c.zones||[]).length?html`<div class="section-label">Zone</div>${c.zones.map(zone=>html`<div class="zone"><span><strong>${zone.name||'Zona'}</strong><small>${zone.state_entity?equipmentValue(this.hass,zone.state_entity):'Stato non associato'}</small></span>${this.actionButton({name:'Avvia',icon:'mdi:play',entity:zone.start_entity,action:zone.start_action||zoneAction(zone.start_entity,true)},true)}${this.actionButton({name:'Ferma',icon:'mdi:stop',entity:zone.stop_entity,action:zone.stop_action||zoneAction(zone.stop_entity,false)},true)}</div>`)}`:''}
   ${native.length||cameraAction.length||(c.buttons||[]).length?html`<div class="section-label">Comandi</div><div class="actions">${native.map(item=>{const service=item.action.split('.')[1],name=c.native_labels?.[service]||item.name;return html`<button style=${this.palette(c.native_colors?.[service]||c.color||p.color)} aria-label=${name} ?disabled=${!item.enabled||this.busy} @click=${()=>this.call(item.action,c.hero_entity)}><ha-icon icon=${item.icon}></ha-icon>${name}</button>`})}${cameraAction.map(item=>html`<button aria-label=${item.name} ?disabled=${!item.enabled} @click=${()=>this.info(c.camera_entity)}><ha-icon icon=${item.icon}></ha-icon>${item.name}</button>`)}${(c.buttons||[]).map(button=>this.actionButton(button))}</div>`:''}
   ${!c.hero_entity&&!c.camera_entity&&!c.state_entity&&!metrics.length?html`<div class="empty">Apri l’editor per scegliere i sensori e i comandi del tuo dispositivo.</div>`:''}${this.feedback()}
  </ha-card>`;
 }
 actionButton(button,compact=false){const cmd=buttonCommand(button),domain=cmd?.action.split('.')[0],service=cmd?.action.split('.')[1],valid=!!cmd&&!!this.hass.services?.[domain]?.[service]&&(!cmd.entity||isAvailable(this.hass.states[cmd.entity])||['button','input_button'].includes(cmd.entity.split('.')[0])&&this.hass.states[cmd.entity]?.state==='unknown');return html`<button style=${this.palette(button.color||this.config.color||this.profile.color)} aria-label=${button.name||'Azione'} ?disabled=${!valid||this.busy} @click=${()=>cmd&&this.call(cmd.action,cmd.entity,button.data||{},button.target)}><ha-icon icon=${button.icon||'mdi:play'}></ha-icon>${compact?'':button.name||'Azione'}</button>`}
}
export const EQUIPMENT_CARD_CLASSES=Object.fromEntries(Object.keys(EQUIPMENT).map(key=>[equipmentType(key),class extends EquipmentCard{static profile=key;static is=equipmentType(key)}]));
