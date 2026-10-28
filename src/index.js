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
import {LightsCard} from './lights-card.js';
import {CoversCard} from './covers-card.js';
import {LightsEditor,CoversEditor} from './device-controls-editor.js';
import {DeviceRange} from './device-range.js';
import {WeatherCard} from './weather-card.js';
import {TVCard} from './tv-card.js';
import {WeatherEditor,TVEditor} from './weather-tv-editor.js';
import {ChristmasTreeCard} from './christmas-tree-card.js';
import {ChristmasTreeEditor} from './christmas-tree-editor.js';
import {LawnMowerCard,LawnMowerEditor} from './lawn-mower-card.js';
import {AwningCard,CurtainsCard} from './fabric-cover-card.js';
import {AwningEditor,CurtainsEditor} from './fabric-cover-editor.js';
import {EQUIPMENT_CARD_CLASSES} from './equipment-card.js';
import {EQUIPMENT_EDITOR_CLASSES} from './equipment-editor.js';
import './legacy/pastel-button-card.js';
import './legacy/pastel-openings-card.js';
import './legacy/pastel-doors-windows-card.js';
import './legacy/pastel-motion-presence-card.js';
import './legacy/pastel-water-leak-card.js';
import './legacy/pastel-smoke-co-card.js';
import {TemperatureCard} from './temperature-card.js';
import {TemperatureEditor} from './temperature-editor.js';
import {ThermostatCard} from './thermostat-card.js';
import {ThermostatEditor} from './thermostat-editor.js';
import './legacy/pastel-dishwasher-card.js';
for(const [name,Class] of Object.entries({'pastel-appliance-card':ApplianceCard,'pastel-appliance-card-editor':ApplianceEditor,'pastel-robot-card':RobotCard,'pastel-robot-card-editor':RobotEditor})){
 if(!customElements.get(name))customElements.define(name,Class);else console.warn(`Pastel UI: ${name} già caricato; rimuovi la vecchia risorsa.`);
}
for(const [name,Class] of [
 ['pastel-device-range',DeviceRange],['pastel-lights-card',LightsCard],['pastel-lights-card-editor',LightsEditor],
 ['pastel-covers-card',CoversCard],['pastel-covers-card-editor',CoversEditor],
 ['pastel-awning-card',AwningCard],['pastel-awning-card-editor',AwningEditor],
 ['pastel-curtains-card',CurtainsCard],['pastel-curtains-card-editor',CurtainsEditor],
 ['pastel-weather-card',WeatherCard],['pastel-weather-card-editor',WeatherEditor],
 ['pastel-tv-card',TVCard],['pastel-tv-card-editor',TVEditor],
 ['pastel-christmas-tree-card',ChristmasTreeCard],['pastel-christmas-tree-card-editor',ChristmasTreeEditor],
 ['pastel-lawn-mower-card',LawnMowerCard],['pastel-lawn-mower-card-editor',LawnMowerEditor],
 ['pastel-temp-card',TemperatureCard],['pastel-temp-card-editor',TemperatureEditor],
 ['pastel-native-thermostat-card',ThermostatCard],['pastel-native-thermostat-card-editor',ThermostatEditor],
 ['pastel-stove-card',StoveCard],['pastel-stove-card-editor',StoveEditor],
 ['pastel-script-climate-card',ScriptClimateCard],['pastel-script-climate-card-editor',ScriptClimateEditor],
 ['pastel-alarm-card',AlarmCard],['pastel-alarm-card-editor',AlarmEditor],
 ['pastel-security-card',SecurityCard],['pastel-security-card-editor',SecurityEditor]
])if(!customElements.get(name))customElements.define(name,Class);
for(const [name,Class] of Object.entries({...EQUIPMENT_CARD_CLASSES,...EQUIPMENT_EDITOR_CLASSES}))if(!customElements.get(name))customElements.define(name,Class);
// Compatibility aliases for the former standalone repositories; no duplicate picker entries.
for(const [name,Class] of [['light-card',LightsCard],['light-card-editor',LightsEditor],['tapparella-card',CoversCard],['tapparella-card-editor',CoversEditor]])if(!customElements.get(name))customElements.define(name,class extends Class{});
registerCardCatalog();
console.info('Pastel UI 1.7.0');
