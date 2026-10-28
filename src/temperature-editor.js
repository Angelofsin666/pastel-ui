import {html} from 'lit-element';
import {ScriptClimateEditor} from './script-climate-editor.js';
import {isTemperatureSensor} from './script-climate-model.js';
import {TEMPERATURE_ICONS,isHumiditySensor} from './temperature-model.js';
export class TemperatureEditor extends ScriptClimateEditor{
 paletteSelect(label,value,change,inherit=false){const mapped={green:'mint',purple:'lavender',orange:'peach',indigo:'lavender',cyan:'blue'}[value]||value;return super.paletteSelect(label,mapped,change,inherit)}
 updateRoom(i,patch){this.emit({rooms:(this.config.rooms||[]).map((r,j)=>i===j?{...r,...patch}:r)})}
 moveRoom(i,d){const rooms=[...(this.config.rooms||[])],j=i+d;if(j<0||j>=rooms.length)return;[rooms[i],rooms[j]]=[rooms[j],rooms[i]];this.emit({rooms})}
 numberField(label,key){return html`<label>${label}<input aria-label=${label} type="number" step="any" .value=${String(this.config[key]??'')} @change=${e=>this.emit({[key]:e.target.value===''?undefined:Number(e.target.value)})}></label>`}
 check(label,key,defaultValue=true){return html`<label class="check"><input type="checkbox" aria-label=${label} .checked=${this.config[key]??defaultValue} @change=${e=>this.emit({[key]:e.target.checked})}>${label}</label>`}
 render(){if(!this.hass||!this.config)return html``;const c=this.config;return html`<div class="editor" style=${this.palette(c.color||'blue')}>
 <div class="pair">${this.text('Nome card',c.title,v=>this.emit({title:v}))}${this.text('Sottotitolo',c.subtitle,v=>this.emit({subtitle:v}))}</div>
 ${this.paletteSelect('Colore card',c.color||'blue',v=>this.emit({color:v}))}
 <h3>Ambienti (${c.rooms?.length||0})</h3><p class="hint">Aggiungi un riquadro per ogni ambiente. Scegli il sensore di temperatura; l’umidità è facoltativa.</p>
 ${(c.rooms||[]).map((r,i)=>html`<section class="button-editor" aria-label=${`Configura ambiente ${i+1}`}><div class="button-title"><ha-icon icon=${r.icon||'mdi:thermometer'}></ha-icon>${r.name||`Ambiente ${i+1}`}</div>
 ${this.text('Nome ambiente',r.name,v=>this.updateRoom(i,{name:v}))}
 ${this.entity('Sensore temperatura',r.temp_entity,v=>this.updateRoom(i,{temp_entity:v}),isTemperatureSensor,'Cerca un sensore di temperatura')}
 ${this.entity('Sensore umidità (facoltativo)',r.hum_entity,v=>this.updateRoom(i,{hum_entity:v}),isHumiditySensor,'Cerca un sensore di umidità')}
 <details><summary>Icona ambiente</summary><div class="icon-options">${TEMPERATURE_ICONS.map(([id,name])=>html`<button aria-label=${`Icona ${name}`} aria-pressed=${String((r.icon||'mdi:thermometer')===id)} @click=${()=>this.updateRoom(i,{icon:id})}><ha-icon icon=${id}></ha-icon><span>${name}</span></button>`)}</div>${this.text('Icona personalizzata (mdi:...)',r.icon,v=>this.updateRoom(i,{icon:v}))}</details>
 ${this.paletteSelect('Colore ambiente',r.color||'',v=>this.updateRoom(i,{color:v}),true)}
 <div class="tools"><button aria-label="Sposta ambiente prima" ?disabled=${i===0} @click=${()=>this.moveRoom(i,-1)}>↑</button><button aria-label="Sposta ambiente dopo" ?disabled=${i===(c.rooms||[]).length-1} @click=${()=>this.moveRoom(i,1)}>↓</button><button @click=${()=>this.emit({rooms:c.rooms.filter((_,j)=>i!==j)})}>Rimuovi ambiente</button></div></section>`)}
 <button @click=${()=>this.emit({rooms:[...(c.rooms||[]),{name:'Nuovo ambiente',icon:'mdi:thermometer',temp_entity:'',hum_entity:''}]})}>Aggiungi ambiente</button>
 <details><summary>Riepilogo e altre opzioni</summary>${this.text('Etichetta riepilogo',c.summary_label,v=>this.emit({summary_label:v}))}${this.check('Mostra minima e massima', 'show_extremes')}${this.check('Mostra andamento delle ultime 2 ore','show_trend')}<p class="hint">Minima e massima sono le letture attuali degli ambienti, non gli estremi dello storico. L’andamento richiede lo storico Home Assistant.</p>
 <label>Unità temperatura<select aria-label="Unità temperatura" @change=${e=>this.emit({unit:e.target.value})}>${[['','Automatica dal sensore'],['°C','°C'],['°F','°F'],['K','K']].map(([id,label])=>html`<option value=${id} ?selected=${(c.unit||'')===id}>${label}</option>`)}</select></label>
 ${this.text('Icona intestazione',c.icon,v=>this.emit({icon:v}))}
 <details><summary>Scale e soglie facoltative</summary><p class="hint">Lascia vuoti i campi per nascondere le barre e disattivare le soglie. I valori sono nell’unità visualizzata. Le barre indicano la lettura e non comandano dispositivi.</p><div class="pair">${this.numberField('Minimo scala','temp_min')}${this.numberField('Massimo scala','temp_max')}</div><div class="pair">${this.numberField('Avviso temperatura da','alert_temp')}${this.numberField('Avviso umidità da (%)','alert_hum')}</div></details>
 <details><summary>Colori personalizzati</summary>${[['background_color','Sfondo card'],['tint_color','Sfondo aree colorate'],['accent_color','Colore disegno e valori'],['text_color','Testo principale'],['secondary_text_color','Testo secondario']].map(([key,label])=>this.text(label,c[key],v=>this.emit({[key]:v})))}</details></details>
 </div>`}
}
