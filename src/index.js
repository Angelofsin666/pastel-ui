import {ApplianceCard,RobotCard} from './appliance-card.js';
import {ApplianceEditor,RobotEditor} from './appliance-editor.js';
import {ClimateCard,ClimateEditor} from './climate-card.js';
import {StoveCard} from './stove-card.js';
import {StoveEditor} from './stove-editor.js';
import {ScriptClimateCard} from './script-climate-card.js';
import {ScriptClimateEditor} from './script-climate-editor.js';
import './legacy/pastel-lights-card.js';
import './legacy/pastel-button-card.js';
import './legacy/pastel-openings-card.js';
import './legacy/pastel-doors-windows-card.js';
import './legacy/pastel-motion-presence-card.js';
import './legacy/pastel-water-leak-card.js';
import './legacy/pastel-smoke-co-card.js';
import './legacy/pastel-temp-card.js';
import './legacy/pastel-temp-humidity-card.js';
import './legacy/pastel-thermostat-card.js';
import './legacy/pastel-clima-card.js';
import './legacy/pastel-dishwasher-card.js';
import './legacy/pastel-lawn-mower-card.js';
for(const [name,Class] of Object.entries({'pastel-appliance-card':ApplianceCard,'pastel-appliance-card-editor':ApplianceEditor,'pastel-robot-card':RobotCard,'pastel-robot-card-editor':RobotEditor,'pastel-climate-card':ClimateCard,'pastel-climate-card-editor':ClimateEditor})){
 if(!customElements.get(name))customElements.define(name,Class);else console.warn(`Pastel UI: ${name} già caricato; rimuovi la vecchia risorsa.`);
}
window.customCards=window.customCards||[];
for(const [type,name,description] of [['pastel-appliance-card','Pastel Appliance','Elettrodomestici, aria e acqua. Associa i controlli del tuo dispositivo.'],['pastel-robot-card','Pastel Robot','Pulizia e giardino, con mappa e zone quando disponibili.'],['pastel-climate-card','Pastel Climate','Temperatura e modalità supportate dal climatizzatore.']])if(!window.customCards.some(c=>c.type===type))window.customCards.push({type,name,description,preview:true});
for(const [name,Class] of [['pastel-stove-card',StoveCard],['pastel-stove-card-editor',StoveEditor]])if(!customElements.get(name))customElements.define(name,Class);
if(!window.customCards.some(c=>c.type==='pastel-stove-card'))window.customCards.push({type:'pastel-stove-card',name:'Pastel Stufa',description:'Stufa a pellet: script, controlli −/+, stati e livello pellet configurabili.',preview:true});
console.info('Pastel UI 0.1.0-beta.6');

for(const [name,Class] of [['pastel-script-climate-card',ScriptClimateCard],['pastel-script-climate-card-editor',ScriptClimateEditor]])if(!customElements.get(name))customElements.define(name,Class);
if(!window.customCards.some(c=>c.type==='pastel-script-climate-card'))window.customCards.push({type:'pastel-script-climate-card',name:'Pastel Clima Script',description:'Climatizzatore comandato da script: pulsanti, icone e sensore temperatura con editor semplice.',preview:true});

window.customCards=window.customCards.filter((card,index,all)=>all.findIndex(c=>c.type===card.type)===index);
