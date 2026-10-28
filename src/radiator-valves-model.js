import {formatTemperature,nextTarget,supportsTarget} from './thermostat-model.js';

const available=state=>!!state&&!['unknown','unavailable'].includes(state.state);
const measured=(state)=>{const raw=state?.state;return available(state)&&raw!==''&&raw!==null&&Number.isFinite(Number(raw))?Number(raw):null};
export function valveRooms(hass,config){
 const unit=hass?.config?.unit_system?.temperature||'°C';
 return (config.rooms||[]).map((room,index)=>{
  const climate=hass?.states?.[room.entity],valid=available(climate)&&room.entity?.startsWith('climate.');
  const sensor=hass?.states?.[room.temp_entity],sensorUnit=sensor?.attributes?.unit_of_measurement;
  const sensorTemperature=measured(sensor);
  const climateTemperature=climate?.attributes?.current_temperature;
  const fallback=valid&&climateTemperature!==null&&climateTemperature!==undefined&&climateTemperature!==''&&Number.isFinite(Number(climateTemperature))?Number(climateTemperature):null;
  const temperature=sensorTemperature!==null&&(!sensorUnit||sensorUnit===unit)?sensorTemperature:fallback;
  const battery=hass?.states?.[room.battery_entity];
  const batteryValue=measured(battery);
  const action=climate?.attributes?.hvac_action;
  const status=!valid?'Non disponibile':climate.state==='off'?'Spenta':action==='heating'?'Riscalda':action==='idle'?'In temperatura':climate.state==='heat'?'Modalità caldo':climate.state==='auto'?'Auto':climate.state;
  return {name:room.name||climate?.attributes?.friendly_name||`Stanza ${index+1}`,entity:room.entity,temperature,target:valid&&supportsTarget(climate)?Number(climate.attributes.temperature):null,battery:batteryValue,valid,status,active:valid&&climate.state!=='off',climate};
 });
}
export function valveOverview(rooms){const values=rooms.map(room=>room.temperature).filter(value=>value!==null),active=rooms.filter(room=>room.active).length;return {average:values.length?values.reduce((sum,value)=>sum+value,0)/values.length:null,active,total:rooms.length}}
export function valveTargetCommand(hass,room,direction){const state=hass?.states?.[room.entity];if(!available(state)||!room.entity?.startsWith('climate.')||!supportsTarget(state)||!hass?.services?.climate?.set_temperature)return null;const next=nextTarget(state,direction);return next===null||next===Number(state.attributes.temperature)?null:{action:'climate.set_temperature',entity:room.entity,data:{temperature:next}}}
export const valveTemperature=(value,unit)=>formatTemperature(value,unit);
