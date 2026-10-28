export const HVAC_LABELS={off:'Spento',heat:'Riscalda',cool:'Raffredda',heat_cool:'Caldo / freddo',auto:'Auto',dry:'Deumidifica',fan_only:'Ventila'};
export function thermostatModes(state){return Array.isArray(state?.attributes?.hvac_modes)?state.attributes.hvac_modes.filter(mode=>HVAC_LABELS[mode]):[]}
export function thermostatStep(state){const value=Number(state?.attributes?.target_temp_step??state?.attributes?.temperature_step??0.5);return Number.isFinite(value)&&value>0?value:0.5}
export function nextTarget(state,direction){
 const raw=state?.attributes?.temperature,current=Number(raw),step=thermostatStep(state);
 if(raw===null||raw===undefined||raw===''||!Number.isFinite(current))return null;
 const min=Number(state?.attributes?.min_temp),max=Number(state?.attributes?.max_temp);
 const value=Math.round((current+direction*step)*1000)/1000;
 return Math.min(Number.isFinite(max)?max:Infinity,Math.max(Number.isFinite(min)?min:-Infinity,value));
}
export const supportsTarget=state=>!!(Number(state?.attributes?.supported_features)&1)&&state?.attributes?.temperature!==null&&state?.attributes?.temperature!==undefined&&state?.attributes?.temperature!==''&&Number.isFinite(Number(state.attributes.temperature));
export function formatTemperature(value,unit='°C'){
 const number=Number(value);
 return value===null||value===undefined||value===''||!Number.isFinite(number)?'—':`${new Intl.NumberFormat('it-IT',{maximumFractionDigits:1}).format(number)} ${unit}`;
}
