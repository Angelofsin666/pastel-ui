import {registerCardCatalog} from './card-catalog.js';
import {ApplianceCard,RobotCard} from './appliance-card.js';
import {ApplianceEditor,RobotEditor} from './appliance-editor.js';
import {StoveCard} from './stove-card.js';
import {StoveEditor} from './stove-editor.js';
import {ScriptClimateCard} from './script-climate-card.js';
import {ScriptClimateEditor} from './script-climate-editor.js';
import {AlarmCard} from './alarm-card.js';
import {SecurityCard} from './security-card.js';
import {AlarmEditor,SecurityEditor} from './security-editor.js';
import './legacy/pastel-lights-card.js';
import './legacy/pastel-button-card.js';
import './legacy/pastel-openings-card.js';
import './legacy/pastel-doors-windows-card.js';
import './legacy/pastel-motion-presence-card.js';
import './legacy/pastel-water-leak-card.js';
import './legacy/pastel-smoke-co-card.js';
import './legacy/pastel-temp-card.js';
import './legacy/pastel-temp-humidity-card.js';
import './legacy/pastel-dishwasher-card.js';
import './legacy/pastel-lawn-mower-card.js';
for(const [name,Class] of Object.entries({'pastel-appliance-card':ApplianceCard,'pastel-appliance-card-editor':ApplianceEditor,'pastel-robot-card':RobotCard,'pastel-robot-card-editor':RobotEditor})){
 if(!customElements.get(name))customElements.define(name,Class);else console.warn(`Pastel UI: ${name} già caricato; rimuovi la vecchia risorsa.`);
}
for(const [name,Class] of [
 ['pastel-stove-card',StoveCard],['pastel-stove-card-editor',StoveEditor],
 ['pastel-script-climate-card',ScriptClimateCard],['pastel-script-climate-card-editor',ScriptClimateEditor],
 ['pastel-alarm-card',AlarmCard],['pastel-alarm-card-editor',AlarmEditor],
 ['pastel-security-card',SecurityCard],['pastel-security-card-editor',SecurityEditor]
])if(!customElements.get(name))customElements.define(name,Class);
registerCardCatalog();
console.info('Pastel UI 0.1.0-beta.9');
