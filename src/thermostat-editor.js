import {html} from 'lit-element';
import {ScriptClimateEditor} from './script-climate-editor.js';
export class ThermostatEditor extends ScriptClimateEditor{
 render(){if(!this.hass||!this.config)return html``;const c=this.config;return html`<div class="editor" style=${this.palette(c.color||'blue')}>
  <div class="pair">${this.text('Nome card',c.title,v=>this.emit({title:v}))}${this.text('Sottotitolo',c.subtitle,v=>this.emit({subtitle:v}))}</div>
  ${this.entity('Termostato',c.entity,v=>this.emit({entity:v}),s=>s.entity_id.startsWith('climate.'),'Cerca un’entità climate')}
  ${this.entity('Sensore umidità (opzionale)',c.humidity_entity,v=>this.emit({humidity_entity:v}),s=>s.entity_id.startsWith('sensor.')&&(s.attributes?.device_class==='humidity'||s.attributes?.unit_of_measurement==='%'),'Cerca un sensore di umidità')}
  ${this.paletteSelect('Colore card',c.color||'blue',v=>this.emit({color:v}))}
  <details><summary>Altre opzioni</summary>${this.text('Icona intestazione',c.icon,v=>this.emit({icon:v}))}<details><summary>Colori personalizzati</summary>${[['background_color','Sfondo card'],['tint_color','Sfondo riquadri'],['accent_color','Disegni e comandi'],['text_color','Testo principale'],['secondary_text_color','Testo secondario']].map(([key,label])=>this.text(label,c[key],v=>this.emit({[key]:v})))}</details></details>
  <p class="hint">Le modalità e i limiti di temperatura vengono letti dal termostato associato.</p>
 </div>`}
}
