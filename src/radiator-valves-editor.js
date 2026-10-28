import {html,css} from 'lit-element';
import {ScriptClimateEditor} from './script-climate-editor.js';

export class RadiatorValvesEditor extends ScriptClimateEditor{
 static get styles(){return [super.styles,css`
  .room-editor{display:grid;gap:10px;border:1px solid var(--divider-color,#ddd);border-radius:16px;padding:14px}.room-editor h3{margin:0}.tools{display:flex;gap:8px;flex-wrap:wrap}.tools button{min-width:44px}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}}
 `]}
 setConfig(config){super.setConfig({...config,rooms:(config.rooms||[]).map(room=>({...room}))})}
 updateRoom(index,patch){this.emit({rooms:this.config.rooms.map((room,i)=>i===index?{...room,...patch}:room)})}
 moveRoom(index,direction){const rooms=[...this.config.rooms],next=index+direction;if(next<0||next>=rooms.length)return;[rooms[index],rooms[next]]=[rooms[next],rooms[index]];this.emit({rooms})}
 render(){if(!this.hass||!this.config)return html``;const c=this.config;return html`<div class="editor" style=${this.palette(c.color||'mint')}>
  <div class="pair">${this.text('Nome card',c.title,v=>this.emit({title:v}))}${this.text('Sottotitolo',c.subtitle,v=>this.emit({subtitle:v}))}</div>
  ${this.paletteSelect('Colore card',c.color||'mint',v=>this.emit({color:v}))}
  <details open><summary>Valvole (${c.rooms.length})</summary><p class="hint">Aggiungi una stanza per ogni valvola. Scegli la sua entità climate; i pulsanti + e − usano i limiti e il passo dichiarati dal dispositivo. Il valore cambia nella card quando Home Assistant conferma il nuovo stato.</p>
  ${c.rooms.map((room,i)=>html`<section class="room-editor"><h3>${room.name||`Stanza ${i+1}`}</h3>${this.text('Nome stanza',room.name,v=>this.updateRoom(i,{name:v}))}${this.entity('Valvola termostatica',room.entity,v=>this.updateRoom(i,{entity:v}),s=>s.entity_id.startsWith('climate.'),'Cerca un’entità climate')}${this.entity('Sensore temperatura ambiente (opzionale)',room.temp_entity,v=>this.updateRoom(i,{temp_entity:v}),s=>s.entity_id.startsWith('sensor.')&&(s.attributes?.device_class==='temperature'||['°C','°F'].includes(s.attributes?.unit_of_measurement)),'Cerca un sensore di temperatura')}${this.entity('Sensore batteria (opzionale)',room.battery_entity,v=>this.updateRoom(i,{battery_entity:v}),s=>s.entity_id.startsWith('sensor.')&&(s.attributes?.device_class==='battery'||s.attributes?.unit_of_measurement==='%'),'Cerca un sensore batteria')}<div class="tools"><button aria-label=${`Sposta ${room.name||`stanza ${i+1}`} prima`} ?disabled=${i===0} @click=${()=>this.moveRoom(i,-1)}>↑</button><button aria-label=${`Sposta ${room.name||`stanza ${i+1}`} dopo`} ?disabled=${i===c.rooms.length-1} @click=${()=>this.moveRoom(i,1)}>↓</button><button @click=${()=>this.emit({rooms:c.rooms.filter((_,j)=>i!==j)})}>Rimuovi</button></div></section>`)}
  <button @click=${()=>this.emit({rooms:[...c.rooms,{name:'',entity:'',temp_entity:'',battery_entity:''}]})}>Aggiungi valvola</button></details>
  <details><summary>Altre opzioni</summary>${this.text('Etichetta media',c.average_label,v=>this.emit({average_label:v}))}${this.text('Icona intestazione',c.icon,v=>this.emit({icon:v}))}<details><summary>Colori personalizzati</summary>${[['background_color','Sfondo card'],['tint_color','Sfondo riquadro'],['accent_color','Disegno e comandi'],['text_color','Testo principale'],['secondary_text_color','Testo secondario']].map(([key,label])=>this.text(label,c[key],v=>this.emit({[key]:v})))}</details></details>
 </div>`}
}
