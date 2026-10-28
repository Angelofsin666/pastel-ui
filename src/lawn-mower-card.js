import {RobotCard} from './appliance-card.js';
import {RobotEditor} from './appliance-editor.js';

export function normalizeMowerConfig(config={}){
 const metrics={...(config.metrics||{})};
 for(const [oldKey,role] of [['battery_entity','battery'],['area_entity','area'],['time_remaining_entity','remaining']])if(config[oldKey]&&!metrics[role])metrics[role]=config[oldKey];
 const status_entities=[...(config.status_entities||[])];
 for(const key of ['blade_entity','zone_entity'])if(config[key]&&!status_entities.includes(config[key]))status_entities.push(config[key]);
 return {...config,profile:'lawn_mower',entity:config.entity||config.mower_entity||'',metrics,status_entities,controls:config.controls||[]};
}

export class LawnMowerCard extends RobotCard{
 static getConfigElement(){return document.createElement('pastel-lawn-mower-card-editor')}
 static getStubConfig(){return {profile:'lawn_mower',entity:'',metrics:{},controls:[]}}
 setConfig(config){super.setConfig(normalizeMowerConfig(config))}
}

export class LawnMowerEditor extends RobotEditor{
 static lockedProfile='lawn_mower'
 detected(){return super.detected().filter(item=>item.profile==='lawn_mower')}
 setConfig(config){super.setConfig(normalizeMowerConfig(config))}
 emit(patch){super.emit({...patch,profile:'lawn_mower'})}
}
