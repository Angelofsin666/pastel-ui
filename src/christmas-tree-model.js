export const TREE_ICONS=[['mdi:fire','Warm'],['mdi:string-lights','Multicolour'],['mdi:star-four-points','Sparkle'],['mdi:weather-night','Night'],['mdi:lightbulb-on','Lights'],['mdi:palette','Colour'],['mdi:music','Music'],['mdi:power','Power']];

export function treeView(hass,config){
 const entity=config.state_entity||config.entity;
 const state=hass?.states?.[entity];
 const available=!!state&&!['unavailable','unknown'].includes(state.state);
 const on=available&&state.state==='on';
 const light=hass?.states?.[config.entity];
 const brightness=on&&light?.attributes?.brightness!=null&&Number.isFinite(Number(light.attributes.brightness))?Math.round(Number(light.attributes.brightness)/255*100):null;
 const supported=!!light&&light.entity_id.startsWith('light.')&&Array.isArray(light.attributes?.supported_color_modes)&&light.attributes.supported_color_modes.some(mode=>mode!=='onoff');
 const modeState=config.mode_entity&&hass?.states?.[config.mode_entity]?.state;
 return {entity,available,on,brightness,supported,modeState};
}

export function treeActionAvailable(hass,button){
 const entity=button?.entity||'';
 const domain=entity.split('.')[0];
 return ['script','scene'].includes(domain)&&!!hass?.states?.[entity]&&hass.states[entity].state!=='unavailable'&&!!hass?.services?.[domain]?.turn_on;
}

export function validateTreeConfig(config){
 for(const key of ['entity','state_entity','mode_entity','on_script','off_script'])if(config[key]!==undefined&&typeof config[key]!=='string')throw Error(`${key} must be an entity ID.`);
 if(config.buttons!==undefined&&!Array.isArray(config.buttons))throw Error('buttons must be a list.');
 for(const button of config.buttons||[])if(!button||typeof button!=='object'||!['script.','scene.'].some(prefix=>String(button.entity||'').startsWith(prefix))&&button.entity)throw Error('Each atmosphere requires a script or scene.');
}
