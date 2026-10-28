import {coverDevice,coverActionAvailable} from './device-controls-model.js';
import {isAvailable,heaterCommand,buttonCommand} from './equipment-model.js';

export function fabricPosition(hass,config){
 const sensor=hass?.states?.[config.position_entity];
 if(config.position_entity&&isAvailable(sensor)){
  const value=Number(sensor.state);
  if(Number.isFinite(value)&&value>=0&&value<=100)return value;
 }
 return config.entity?.startsWith('cover.')?coverDevice(hass,{entity:config.entity}).position:null;
}
export function fabricState(hass,config,position){
 const selected=config.state_entity&&hass?.states?.[config.state_entity];
 if(selected&&isAvailable(selected))return selected.state;
 const cover=config.entity?.startsWith('cover.')?coverDevice(hass,{entity:config.entity}):null;
 if(cover?.available)return cover.label;
 if(position===null)return 'Non disponibile';
 return position===0?'Chiusa':position===100?'Aperta':'Parzialmente aperta';
}
export function fabricCommand(hass,config,kind){
 const override=config[`${kind}_entity`];
 if(override){
  const cmd=kind==='open'?heaterCommand(override,'on'):kind==='close'?heaterCommand(override,'off'):buttonCommand({entity:override});
  if(!cmd)return null;
  const [domain,service]=cmd.action.split('.');
  return {...cmd,enabled:!!hass?.services?.[domain]?.[service]&&(!cmd.entity||isAvailable(hass?.states?.[cmd.entity])||['button','input_button'].includes(domain)&&hass?.states?.[cmd.entity]?.state==='unknown')};
 }
 if(!config.entity?.startsWith('cover.'))return null;
 const device=coverDevice(hass,{entity:config.entity});
 const action={open:'open_cover',stop:'stop_cover',close:'close_cover'}[kind];
 return {action:`cover.${action}`,entity:config.entity,enabled:coverActionAvailable(hass,device,action)};
}
