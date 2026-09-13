import {html} from 'lit-element';
import {BaseCard,stateLabel} from './base-card.js';
import {PROFILES,METRICS,available,domainOf,nativeActions,validMetric,numeric} from './profiles.js';
import {illustration} from './illustrations.js';
export class ApplianceCard extends BaseCard {
 static getConfigElement(){return document.createElement('pastel-appliance-card-editor')}
 static getStubConfig(){return {profile:'generic',entity:'',metrics:{},controls:[]}}
 setConfig(config){super.setConfig(config);if(config.controls&&!Array.isArray(config.controls))throw new Error('controls deve essere una lista');if(config.controls?.some(c=>!c||typeof c!=='object'||(c.action&&typeof c.action!=='string')))throw new Error('Ogni controllo deve indicare entity oppure action come testo');if(config.status_entities&&!Array.isArray(config.status_entities))throw new Error('status_entities deve essere una lista');if(config.zones&&!Array.isArray(config.zones))throw new Error('zones deve essere una lista');if(config.metrics&&(typeof config.metrics!=='object'||Array.isArray(config.metrics)))throw new Error('metrics deve essere un oggetto')}
 render(){
  if(!this.hass||!this.config)return html``;
  const c=this.config,p=PROFILES[c.profile]||PROFILES.generic,s=this.hass.states[c.entity];
  const title=c.title||p[0],active=available(s),metrics=c.metrics||{};
  return html`<ha-card style=${this.palette(c.color||p[2])}>
   <header><div class="icon"><ha-icon icon=${p[1]}></ha-icon></div><div class="heading"><h2>${title}</h2><div class="subtitle">${c.subtitle||p[0]}</div></div><span class="pill">${stateLabel(s?.state)}</span></header>
   <div class="hero">${illustration(c.profile)}<div class="right"><div class="status">${stateLabel(s?.state)}</div><div class="caption">${s?.attributes?.friendly_name||'Scegli il dispositivo nell’editor'}</div></div></div>
   ${Object.keys(metrics).length?html`<div class="metrics">${Object.entries(metrics).filter(([,id])=>id).map(([role,id])=>{
     const v=validMetric(role,this.hass.states[id]);return html`<button class="metric" @click=${()=>this.info(id)}><small>${METRICS[role]?.[0]||role}</small><strong>${v?new Intl.NumberFormat(this.hass.locale?.language||'it',{maximumFractionDigits:2}).format(v.value):'—'}<span class="unit">${v?.unit||''}</span></strong></button>`})}</div>`:''}
   <div class="actions">${nativeActions(s,this.hass.services).filter(a=>!(c.hidden_actions||[]).includes(a.action)).map(a=>html`<button ?disabled=${!active||this.busy} @click=${()=>this.call(a.action,a.entity)}>${a.name}</button>`)}</div>
   ${this.nativeSettings(s)}
   ${(c.controls||[]).map(control=>this.control(control))}
   ${(c.status_entities||[]).length?html`<h3>Stato e manutenzione</h3>${c.status_entities.map(id=>{const state=this.hass.states[id];return html`<div class="control"><span>${state?.attributes?.friendly_name||id}</span><button @click=${()=>this.info(id)}>${stateLabel(state?.state)}</button></div>`})}`:''}
   ${this.robotExtras()}
   ${!c.entity?html`<div class="empty">Apri l’editor, scegli un dispositivo e controlla le associazioni suggerite.</div>`:''}
   ${this.feedback()}
  </ha-card>`;
 }
 control(c){
  if(c.action)return html`<div class="control"><span>${c.name||'Azione'}</span><button ?disabled=${this.busy||!this.hass.services?.[c.action.split('.')[0]]?.[c.action.split('.')[1]]} @click=${()=>this.call(c.action,c.entity,c.data||{},c.target)}>${c.button_label||'Esegui'}</button></div>`;
  const s=this.hass.states[c.entity],d=domainOf(c.entity),name=c.name||s?.attributes?.friendly_name||c.entity,disabled=(!s||s.state==='unavailable'||(!['button','input_button'].includes(d)&&s.state==='unknown'))||this.busy;
  if(['script','scene'].includes(d))return html`<div class="control"><span>${name}</span><button ?disabled=${disabled||!this.hass.services?.[d]?.turn_on} @click=${()=>this.call(`${d}.turn_on`,c.entity)}>Esegui</button></div>`;
  if(['select','input_select'].includes(d))return html`<label class="control"><span>${name}</span><select aria-label=${name} ?disabled=${disabled||!this.hass.services?.[d]?.select_option} .value=${s?.state||''} @change=${e=>this.call(`${d}.select_option`,c.entity,{option:e.target.value})}><option value="" disabled>Scegli</option>${(s?.attributes?.options||[]).map(v=>html`<option value=${v} ?selected=${v===s.state}>${v}</option>`)}</select></label>`;
  if(['number','input_number'].includes(d))return html`<label class="control"><span>${name}</span><input aria-label=${name} type="number" ?disabled=${disabled||!this.hass.services?.[d]?.set_value} min=${s?.attributes?.min??0} max=${s?.attributes?.max??100} step=${s?.attributes?.step??1} .value=${available(s)?s.state:''} @change=${e=>{if(e.target.checkValidity()&&numeric(e.target.value)!==null)this.call(`${d}.set_value`,c.entity,{value:Number(e.target.value)})}}></label>`;
  if(['button','input_button'].includes(d))return html`<div class="control"><span>${name}</span><button ?disabled=${disabled||!this.hass.services?.[d]?.press} @click=${()=>this.call(`${d}.press`,c.entity)}>${c.button_label||'Esegui'}</button></div>`;
  if(['switch','input_boolean','fan','humidifier'].includes(d)){const action=s?.state==='on'?'turn_off':'turn_on';return html`<div class="control"><span>${name}<br><small class="muted">Alimentazione</small></span><button ?disabled=${disabled||!this.hass.services?.[d]?.[action]} @click=${()=>this.call(`${d}.${action}`,c.entity)}>${s?.state==='on'?'Spegni':'Accendi'}</button></div>`}
  return html`<div class="control"><span>${name}</span><button @click=${()=>this.info(c.entity)}>Dettagli</button></div>`;
 }
 nativeSettings(s){
  if(!s)return '';const d=domainOf(s.entity_id),a=s.attributes||{},services=this.hass.services?.[d]||{},disabled=(!s||s.state==='unavailable'||(!['button','input_button'].includes(d)&&s.state==='unknown'))||this.busy;
  const select=(label,options,value,service,key)=>options?.length&&services[service]?html`<label class="control"><span>${label}</span><select aria-label=${label} ?disabled=${disabled} @change=${e=>this.call(`${d}.${service}`,s.entity_id,{[key]:e.target.value})}>${options.map(v=>html`<option value=${v} ?selected=${v===value}>${v}</option>`)}</select></label>`:'';
  const number=(label,value,min,max,step,service,key)=>numeric(value)!==null&&services[service]?html`<label class="control"><span>${label}</span><input type="number" aria-label=${label} .value=${String(value)} min=${min} max=${max} step=${step} ?disabled=${disabled} @change=${e=>{if(e.target.checkValidity()&&numeric(e.target.value)!==null)this.call(`${d}.${service}`,s.entity_id,{[key]:Number(e.target.value)})}}></label>`:'';
  if(d==='vacuum')return Number(a.supported_features)&32?select('Aspirazione',a.fan_speed_list,a.fan_speed,'set_fan_speed','fan_speed'):'';
  if(d==='humidifier')return html`${number('Umidità desiderata',a.humidity,a.min_humidity??0,a.max_humidity??100,1,'set_humidity','humidity')}${Number(a.supported_features)&1?select('Modalità',a.available_modes,a.mode,'set_mode','mode'):''}`;
  if(d==='fan')return html`${Number(a.supported_features)&1?number('Velocità %',a.percentage,0,100,a.percentage_step||1,'set_percentage','percentage'):''}${Number(a.supported_features)&8?select('Profilo',a.preset_modes,a.preset_mode,'set_preset_mode','preset_mode'):''}`;
  if(d==='water_heater')return html`${Number(a.supported_features)&1?number('Temperatura desiderata',a.temperature,a.min_temp??30,a.max_temp??90,1,'set_temperature','temperature'):''}${Number(a.supported_features)&2?select('Modalità',a.operation_list,a.operation_mode,'set_operation_mode','operation_mode'):''}`;
  return '';
 }
 robotExtras(){return html``}
}
export class RobotCard extends ApplianceCard {
 static getConfigElement(){return document.createElement('pastel-robot-card-editor')}
 static getStubConfig(){return {profile:'vacuum',entity:'',metrics:{},controls:[]}}
 robotExtras(){const c=this.config;const map=this.hass.states[c.map_entity];const path=available(map)?map.attributes?.entity_picture:null;
  // Use only the image URL supplied by Home Assistant, never tokens from storage.
  const src=path&&(path.startsWith('/')&&!path.startsWith('//')||/^https?:\/\//.test(path))?(this.hass.hassUrl?this.hass.hassUrl(path):path):null;
  return html`${src?html`<img class="map" src=${src} alt="Mappa del robot" loading="lazy">`:c.map_entity?html`<div class="foot">Mappa non disponibile.</div>`:''}
   ${(c.zones||[]).length?html`<div class="zones"><h3>Stanze e zone</h3>${c.zones.map(z=>this.control(z))}</div>`:''}`;
 }
}
