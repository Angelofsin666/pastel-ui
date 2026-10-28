import {html,css} from 'lit-element';
import {BaseCard} from './base-card.js';
import {illustration} from './illustrations.js';
import {ALARM_ACTIONS,alarmState,alarmButtonAvailable,alarmNeedsCode,validateAlarmConfig} from './security-model.js';
export class AlarmCard extends BaseCard{
 static get properties(){return {...super.properties,_pending:{},_pin:{}}}
 static getConfigElement(){return document.createElement('pastel-alarm-card-editor')}
 static getStubConfig(){return {title:'Alarm',subtitle:'Sistema allarme',entity:'',color:'blue',buttons:ALARM_ACTIONS.slice(0,4).map(a=>({name:a.name,kind:'panel',action:a.action,state:a.state,icon:a.icon}))}}
 static get styles(){return [super.styles,css`.alarm-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.alarm-actions button{min-height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;overflow-wrap:anywhere}.alarm-actions ha-icon{--mdc-icon-size:21px}.alarm-actions button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.danger{color:var(--error-color,#963f3b)}.code-form{display:grid;gap:10px;padding-top:16px}.code-form label{display:grid;gap:7px;font-size:13px}.code-actions{display:flex;gap:8px}.code-actions button{flex:1}.code-form input{width:100%}.hero .right{flex:1}@media(max-width:340px){.hero{padding:16px}.hero svg{width:76px;height:76px}}`]}
 setConfig(c){validateAlarmConfig(c);this._pending=null;this._pin='';super.setConfig(c)}
 disconnectedCallback(){this._pin='';this._pending=null;super.disconnectedCallback()}
 async run(button,code){
  if(this.busy||!alarmButtonAvailable(this.hass,this.config,button))return;
  if(alarmNeedsCode(this.hass,this.config,button)&&!code){this._pending=button;this._pin='';this.error='';return;}
  this._pending=null;this._pin='';
  if(button.kind==='script')return this.call('script.turn_on',button.script);
  return this.call(`alarm_control_panel.${button.action}`,this.config.entity,code?{code}:{});
 }
 render(){if(!this.hass||!this.config)return html``;const c=this.config,state=alarmState(this.hass,c.entity),pin=this._pending,numeric=this.hass.states[c.entity]?.attributes?.code_format==='number';return html`<ha-card style=${this.palette(c.color||'blue')}><header><div class="icon"><ha-icon icon=${c.icon||'mdi:shield'}></ha-icon></div><div class="heading"><h2>${c.title||'Alarm'}</h2><div class="subtitle">${c.subtitle??'Sistema allarme'}</div></div><span class=${state.alert?'pill danger':'pill'}>${state.label}</span></header><div class="hero">${illustration('alarm')}<div class="right"><div class=${state.alert?'status danger':'status'} role="status">${state.label}</div><div class="caption">${state.detail}</div></div></div><div class="alarm-actions">${(c.buttons||[]).map(button=>html`<button style=${button.color?this.palette(button.color):''} aria-pressed=${String(!!button.state&&!state.unknown&&button.state===state.state)} ?disabled=${this.busy||!alarmButtonAvailable(this.hass,c,button)} @click=${()=>this.run(button)}><ha-icon icon=${button.icon||'mdi:shield'}></ha-icon><span>${button.name||'Esegui'}</span></button>`)}</div>
 ${pin?html`<form class="code-form" @submit=${e=>{e.preventDefault();const code=this._pin;if(code?.trim())this.run(pin,code)}}><label>Codice del pannello<input type="password" aria-label="Codice del pannello" inputmode=${numeric?'numeric':'text'} autocomplete="off" .value=${this._pin||''} @input=${e=>{this._pin=e.target.value}}></label><div class="code-actions"><button type="button" @click=${()=>{this._pending=null;this._pin=''}}>Annulla</button><button type="submit" ?disabled=${!this._pin?.trim()||this.busy}>Invia comando</button></div></form>`:''}${!c.entity?html`<div class="empty">Scegli il pannello nell’editor. Ogni tasto può usare il pannello oppure uno script.</div>`:''}${this.feedback()}</ha-card>`}
}
