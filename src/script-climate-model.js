export const CLIMATE_ICONS=[
 ['mdi:power','Accensione'],['mdi:power-off','Spegnimento'],['mdi:snowflake','Raffreddamento'],['mdi:fire','Riscaldamento'],
 ['mdi:water','Deumidificazione'],['mdi:fan','Ventilazione'],['mdi:weather-night','Notte'],['mdi:sleep','Quiet'],
 ['mdi:air-conditioner','Climatizzatore'],['mdi:thermostat','Automatico'],['mdi:thermometer','Temperatura'],['mdi:leaf','Eco'],
 ['mdi:fan-plus','Ventola +'],['mdi:fan-minus','Ventola −'],['mdi:arrow-up-down','Oscillazione'],['mdi:timer-outline','Timer'],
 ['mdi:plus','Aumenta'],['mdi:minus','Diminuisci'],['mdi:lightning-bolt','Turbo'],['mdi:restart','Ripristino']
];
export const CLIMATE_PALETTES=[['blue','Blu'],['mint','Menta'],['peach','Pesca'],['lavender','Lavanda'],['pink','Rosa'],['amber','Ambra'],['teal','Verde acqua'],['red','Rosso']];
export function isTemperatureSensor(state){return !!state?.entity_id?.startsWith('sensor.')&&(state.attributes?.device_class==='temperature'||['°C','°F','K'].includes(state.attributes?.unit_of_measurement));}
export function climateScriptAvailable(hass,button){return !!button?.script?.startsWith('script.')&&!!hass?.states?.[button.script]&&hass.states[button.script].state!=='unavailable'&&!!hass?.services?.script?.turn_on;}
export function scriptClimateState(hass,entity){
 if(!entity||entity.startsWith('script.'))return null;
 const s=hass?.states?.[entity];if(!s||['unknown','unavailable'].includes(s.state))return {available:false,label:'Non disponibile'};
 return {available:true,state:s.state,label:({on:'Acceso',off:'Spento',cool:'Raffreddamento',heat:'Riscaldamento',dry:'Deumidificazione',fan_only:'Ventilazione',auto:'Automatico',heat_cool:'Automatico'})[s.state]||s.state};
}
export function validateScriptClimateConfig(c){
 if(c.buttons!==undefined&&!Array.isArray(c.buttons))throw new Error('buttons deve essere una lista.');
 if(c.temperature_entity!==undefined&&typeof c.temperature_entity!=='string')throw new Error('Il sensore temperatura deve essere un ID di entità.');
 for(const button of c.buttons||[]){if(!button||typeof button!=='object'||Array.isArray(button))throw new Error('Pulsante non valido.');if(button.script!==undefined&&(typeof button.script!=='string'||button.script&&!button.script.startsWith('script.')))throw new Error('Scegli uno script per ciascun pulsante.');}
}
