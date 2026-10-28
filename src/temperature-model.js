import {readNumber} from './stove-model.js';
export const TEMPERATURE_ICONS=[['mdi:thermometer','Termometro'],['mdi:home','Casa'],['mdi:sofa','Soggiorno'],['mdi:bed-double','Camera'],['mdi:door','Ingresso'],['mdi:shower','Bagno'],['mdi:desk','Studio'],['mdi:flower','Esterno']];
export const temperatureUnit=unit=>['°C','°F','K'].includes(unit)?unit:null;
export function convertTemperature(value,from,to){if(value===null||!from||!to)return null;const c=from==='°F'?(value-32)*5/9:from==='K'?value-273.15:value;return to==='°F'?c*9/5+32:to==='K'?c+273.15:c;}
export function isHumiditySensor(s){return !!s?.entity_id?.startsWith('sensor.')&&s.attributes?.device_class==='humidity';}
export function temperatureOverview(hass,c){
 const fallback=temperatureUnit(hass?.config?.unit_system?.temperature)||'°C';
 const unit=temperatureUnit(c.unit)||temperatureUnit((c.rooms||[]).map(r=>hass?.states?.[r.temp_entity]?.attributes?.unit_of_measurement).find(temperatureUnit))||fallback;
 const rooms=(c.rooms||[]).map(r=>{
  const state=hass?.states?.[r.temp_entity],source=state?.attributes?.unit_of_measurement;
  const value=convertTemperature(readNumber(hass,r.temp_entity),source?temperatureUnit(source):unit,unit);
  const h=readNumber(hass,r.hum_entity),humidity=h!==null&&h>=0&&h<=100?h:null;
  return {...r,name:r.name||state?.attributes?.friendly_name||'Ambiente',value,humidity,sourceUnit:source||unit,alert:value!==null&&limit(c.alert_temp)!==null&&value>=Number(c.alert_temp),humidityAlert:humidity!==null&&limit(c.alert_hum)!==null&&humidity>=Number(c.alert_hum)};
 });
 const values=rooms.map(r=>r.value).filter(v=>v!==null),humidity=rooms.map(r=>r.humidity).filter(v=>v!==null);
 const average=values.length?values.reduce((a,b)=>a+b,0)/values.length:null;
 return {unit,rooms,average,humidity:humidity.length?humidity.reduce((a,b)=>a+b,0)/humidity.length:null,min:values.length?Math.min(...values):null,max:values.length?Math.max(...values):null,valid:values.length,total:rooms.length,alert:rooms.some(r=>r.alert||r.humidityAlert)};
}
export function limit(v){return v===undefined||v===null||String(v).trim()===''?null:Number(v)}
export function temperatureScale(value,c){const min=limit(c.temp_min),max=limit(c.temp_max);return value!==null&&Number.isFinite(min)&&Number.isFinite(max)&&max>min?Math.min(100,Math.max(0,(value-min)/(max-min)*100)):null;}
export function validateTemperatureConfig(c){
 if(c.rooms!==undefined&&!Array.isArray(c.rooms))throw Error('rooms deve essere una lista di ambienti.');
 for(const room of c.rooms||[]){if(!room||typeof room!=='object'||Array.isArray(room))throw Error('Ambiente non valido.');for(const k of ['temp_entity','hum_entity'])if(room[k]!==undefined&&typeof room[k]!=='string')throw Error('Scegli un sensore valido.');}
 for(const k of ['temp_min','temp_max','alert_temp','alert_hum'])if(limit(c[k])!==null&&!Number.isFinite(limit(c[k])))throw Error('Inserisci valori numerici validi.');
 if(limit(c.temp_min)!==null&&limit(c.temp_max)!==null&&Number(c.temp_max)<=Number(c.temp_min))throw Error('Il massimo della scala deve superare il minimo.');
 if(c.unit&&!temperatureUnit(c.unit))throw Error('Scegli °C, °F oppure K.');
}
export async function fetchTemperatureTrend(hass,entity){
 if(!hass?.callApi||!entity)return null;
 try{const start=new Date(Date.now()-7200000).toISOString(),response=await hass.callApi('GET',`history/period/${start}?filter_entity_id=${encodeURIComponent(entity)}&minimal_response=true&no_attributes=true`);
 const valid=(response?.[0]||[]).filter(s=>s.state!==null&&String(s.state??'').trim()!==''&&Number.isFinite(Number(s.state)));
 if(valid.length<2)return null;return Number(valid[valid.length-1].state)-Number(valid[0].state);
 }catch{return null;}
}
