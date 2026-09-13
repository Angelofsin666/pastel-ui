import {html} from 'lit-element';
import {BaseCard,stateLabel} from './base-card.js';
import {available,numeric} from './profiles.js';
import {illustration} from './illustrations.js';
export class ClimateCard extends BaseCard {
 static getConfigElement(){return document.createElement('pastel-climate-card-editor')}
 static getStubConfig(){return {entity:'',title:'Climatizzatore'}}
 setConfig(c){super.setConfig(c);if(c.entity&&!c.entity.startsWith('climate.'))throw new Error('Scegli un’entità climate. Per comandi IR usa pastel-clima-card.')}
 target(value,key='temperature'){
  const s=this.hass.states[this.config.entity],a=s?.attributes||{};
  if(!available(s)||numeric(value)===null)return;
  const step=numeric(a.target_temp_step)||.5,min=numeric(a.min_temp)??7,max=numeric(a.max_temp)??35;
  let temp=Math.min(max,Math.max(min,Math.round((Number(value)-min)/step)*step+min));
  if(key==='target_temp_low'&&numeric(a.target_temp_high)!==null)temp=Math.min(temp,Number(a.target_temp_high));
  if(key==='target_temp_high'&&numeric(a.target_temp_low)!==null)temp=Math.max(temp,Number(a.target_temp_low));
  this.call('climate.set_temperature',s.entity_id,{[key]:Number(temp.toFixed(2))});
 }
 modeControl(label,values,value,service,key,disabled){if(!values?.length||!this.hass.services?.climate?.[service])return '';return html`<label class="control"><span>${label}</span><select aria-label=${label} ?disabled=${disabled} @change=${e=>this.call(`climate.${service}`,this.config.entity,{[key]:e.target.value})}>${values.map(v=>html`<option value=${v} ?selected=${v===value}>${stateLabel(v)}</option>`)}</select></label>`}
 render(){if(!this.hass||!this.config)return html``;const c=this.config,s=this.hass.states[c.entity],a=s?.attributes||{},f=Number(a.supported_features||0),disabled=!available(s)||this.busy;
 const ambient=c.temp_sensor?this.hass.states[c.temp_sensor]?.state:a.current_temperature;
 const humidity=c.humidity_sensor?this.hass.states[c.humidity_sensor]?.state:a.current_humidity;
 const unit=this.hass.config?.unit_system?.temperature||'°C';
 const ambientUnit=c.temp_sensor?this.hass.states[c.temp_sensor]?.attributes.unit_of_measurement:unit;
 return html`<ha-card style=${this.palette(c.color||'blue')}><header><div class="icon"><ha-icon icon="mdi:air-conditioner"></ha-icon></div><div class="heading"><h2>${c.title||a.friendly_name||'Climatizzatore'}</h2><div class="subtitle">${c.subtitle||'Comfort ambiente'}</div></div><span class="pill">${stateLabel(s?.state)}</span></header>
 <div class="hero">${illustration('climate')}<div class="right"><div class="reading">${numeric(ambient)??'—'}<small>${ambientUnit||''}</small></div><div class="caption">Temperatura ambiente${numeric(humidity)!==null?` · ${humidity}% UR`:''}</div></div></div>
 ${f&1&&this.hass.services?.climate?.set_temperature?html`<div class="section-label">Temperatura desiderata</div><div class="temperature"><button aria-label="Riduci temperatura" ?disabled=${disabled||numeric(a.temperature)===null||Number(a.temperature)<=Number(a.min_temp??7)} @click=${()=>this.target(Number(a.temperature)-(Number(a.target_temp_step)||.5))}>−</button><strong>${numeric(a.temperature)??'—'}<small>${unit||''}</small></strong><button aria-label="Aumenta temperatura" ?disabled=${disabled||numeric(a.temperature)===null||Number(a.temperature)>=Number(a.max_temp??35)} @click=${()=>this.target(Number(a.temperature)+(Number(a.target_temp_step)||.5))}>+</button></div>`:''}
 ${f&2&&this.hass.services?.climate?.set_temperature?['target_temp_low','target_temp_high'].map(key=>html`<label class="control"><span>${key==='target_temp_low'?'Temperatura minima':'Temperatura massima'}</span><input type="number" aria-label=${key==='target_temp_low'?'Temperatura minima':'Temperatura massima'} min=${a.min_temp??7} max=${a.max_temp??35} step=${a.target_temp_step??.5} .value=${String(a[key]??'')} ?disabled=${disabled} @change=${e=>{if(e.target.checkValidity())this.target(e.target.value,key)}}></label>`):''}
 ${this.modeControl('Modalità',a.hvac_modes,s?.state,'set_hvac_mode','hvac_mode',disabled)}
 ${f&8?this.modeControl('Ventola',a.fan_modes,a.fan_mode,'set_fan_mode','fan_mode',disabled):''}
 ${f&16?this.modeControl('Profilo',a.preset_modes,a.preset_mode,'set_preset_mode','preset_mode',disabled):''}
 ${f&32?this.modeControl('Oscillazione',a.swing_modes,a.swing_mode,'set_swing_mode','swing_mode',disabled):''}
 ${!s?html`<p class="empty">Scegli un climatizzatore nell’editor. Le modalità compaiono in base alle capacità del dispositivo.</p>`:''}
 ${this.feedback()}</ha-card>`;
 }
}
export class ClimateEditor extends BaseCard{
 static get properties(){return {...super.properties}}
 emit(p){this.config={...this.config,...p};this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:this.config},bubbles:true,composed:true}))}
 render(){if(!this.hass||!this.config)return html``;return html`<div class="editor" style=${this.palette()}><label>Titolo<input .value=${this.config.title||''} @change=${e=>this.emit({title:e.target.value})}></label>${[['entity','Climatizzatore','climate'],['temp_sensor','Sensore temperatura esterno','sensor'],['humidity_sensor','Sensore umidità esterno','sensor']].map(([key,label,domain])=>html`<label>${label}<select @change=${e=>this.emit({[key]:e.target.value})}><option value="">Seleziona</option>${Object.values(this.hass.states).filter(s=>s.entity_id.startsWith(domain+'.')).map(s=>html`<option value=${s.entity_id} ?selected=${this.config[key]===s.entity_id}>${s.attributes.friendly_name||s.entity_id}</option>`)}</select></label>`)}<p class="hint">Modalità, intervalli e velocità vengono letti dal climatizzatore. I campi temp_sensor e humidity_sensor esistenti restano compatibili.</p></div>`}
}
