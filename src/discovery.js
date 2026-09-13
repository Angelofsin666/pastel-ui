import {inferProfile,ROBOT_PROFILES,domainOf} from './profiles.js';
const cache=new WeakMap();
export async function getRegistry(hass,{refresh=false}={}) {
 const key=hass.connection || hass;
 if(!refresh && cache.has(key))return cache.get(key);
 const pending=Promise.all([
   hass.callWS({type:'config/entity_registry/list'}),
   hass.callWS({type:'config/device_registry/list'}),
 ]).then(([entities,devices])=>({entities,devices})).catch(error=>{cache.delete(key);throw error});
 cache.set(key,pending);return pending;
}

// One candidate per registry device; names classify, but never join devices.
export function discoverAppliances(hass,registry,{robot=false}={}) {
 const groups=new Map(), registered=new Set();
 for(const entry of registry.entities||[]){
  registered.add(entry.entity_id);
  if(entry.disabled_by||!hass.states[entry.entity_id])continue;
  const key=entry.device_id?`device:${entry.device_id}`:`entity:${entry.entity_id}`;
  if(!groups.has(key))groups.set(key,{device_id:entry.device_id||'',entities:[]});
  groups.get(key).entities.push(hass.states[entry.entity_id]);
 }
 for(const s of Object.values(hass.states))if(!registered.has(s.entity_id))groups.set(`entity:${s.entity_id}`,{device_id:'',entities:[s]});
 const result=[];
 for(const [key,g] of groups){
  const device=(registry.devices||[]).find(d=>d.id===g.device_id)||{};
  const deviceProfile=inferProfile(null,device);
  const matches=g.entities.map(s=>({s,profile:deviceProfile!=='generic'?deviceProfile:inferProfile(s,device)})).filter(x=>x.profile!=='generic'&&(!robot||ROBOT_PROFILES.includes(x.profile)));
  const profiles=[...new Set(matches.map(x=>x.profile))];
  if(profiles.length!==1)continue;
  const primary=matches.find(x=>['vacuum','lawn_mower','humidifier','water_heater','fan'].includes(domainOf(x.s.entity_id)))||matches.find(x=>/status|state|stato|operation/.test(x.s.entity_id))||matches[0];
  result.push({key,device_id:g.device_id,entity:primary.s.entity_id,profile:primary.profile,name:device.name_by_user||device.name||primary.s.attributes.friendly_name||primary.s.entity_id,count:g.entities.length});
 }
 return result.sort((a,b)=>a.name.localeCompare(b.name));
}
