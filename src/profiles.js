// Profiles describe presentation; they never imply a device supports a command.
export const PROFILES = {
  washer: ['Lavatrice','mdi:washing-machine','blue','washer|washing machine|lavatrice'],
  dryer: ['Asciugatrice','mdi:tumble-dryer','peach','dryer|asciugatrice'],
  dishwasher: ['Lavastoviglie','mdi:dishwasher','blue','dishwasher|lavastoviglie'],
  refrigerator: ['Frigorifero','mdi:fridge-outline','mint','refrigerator|fridge|frigorifero'],
  freezer: ['Congelatore','mdi:fridge-bottom','blue','freezer|congelatore'],
  wine_cooler: ['Cantinetta','mdi:glass-wine','lavender','wine cooler|cantinetta'],
  oven: ['Forno','mdi:stove','peach','oven|forno'],
  microwave: ['Microonde','mdi:microwave','peach','microwave|microonde'],
  coffee: ['Macchina del caffè','mdi:coffee-maker-outline','peach','coffee|caffe|caffè'],
  hood: ['Cappa','mdi:air-filter','mint','hood|cappa'],
  hob: ['Piano induzione','mdi:stove','peach','hob|cooktop|induzione'],
  dehumidifier: ['Deumidificatore','mdi:air-humidifier-off','blue','dehumidifier|deumidificatore'],
  humidifier: ['Umidificatore','mdi:air-humidifier','blue','humidifier|umidificatore'],
  air_purifier: ['Purificatore aria','mdi:air-purifier','mint','air purifier|purificatore aria'],
  water_purifier: ['Depuratore acqua','mdi:water-check-outline','mint','water purifier|water filter|reverse osmosis|depuratore|osmosi'],
  fan: ['Ventilatore','mdi:fan','mint','fan|ventilatore'],
  ventilation: ['Ventilazione','mdi:hvac','mint','ventilation|ventilazione|vmc'],
  water_heater: ['Scaldacqua','mdi:water-boiler','peach','water heater|boiler|scaldacqua'],
  vacuum: ['Robot pulizia','mdi:robot-vacuum','lavender','vacuum|aspirapolvere|robot pulizia'],
  floor_cleaner: ['Lavapavimenti','mdi:vacuum-outline','lavender','floor cleaner|lavapavimenti|aspirapavimenti'],
  lawn_mower: ['Tagliaerba','mdi:robot-mower-outline','mint','lawn mower|tagliaerba'],
  robot_dock: ['Base di pulizia','mdi:robot-vacuum','lavender','dock|base lavaggio|base svuotamento'],
  generic: ['Dispositivo','mdi:devices','blue','^$'],
};
export const ROBOT_PROFILES = ['vacuum','floor_cleaner','lawn_mower','robot_dock'];
export const METRICS = {
  power: ['Potenza','power'], energy: ['Energia totale','energy'], cycle_energy:['Energia ciclo',null],
  remaining:['Tempo restante',null], progress:['Avanzamento',null], temperature:['Temperatura','temperature'],
  humidity:['Umidità','humidity'], battery:['Batteria','battery'], water_quality:['TDS uscita',null],
  water_input:['TDS ingresso',null], water_used:['Acqua erogata',null], tank:['Serbatoio',null],
  filter:['Filtro residuo',null], area:['Area pulita',null],
};
export const domainOf = id => (id || '').split('.')[0];
export const available = s => !!s && !['unknown','unavailable'].includes(s.state);
export const numeric = value => value === null || value === undefined || String(value).trim()==='' || !Number.isFinite(Number(value)) ? null : Number(value);
export function inferProfile(entity, device = {}) {
  const domain=domainOf(entity?.entity_id);
  if (domain==='vacuum'||domain==='lawn_mower'||domain==='water_heater') return domain;
  if(domain==='humidifier') return entity.attributes?.device_class==='dehumidifier'?'dehumidifier':'humidifier';
  const text=[device.name_by_user,device.name,device.model,entity?.attributes?.friendly_name,entity?.entity_id].filter(Boolean).join(' ').toLowerCase().replaceAll('_',' ');
  const matches=Object.entries(PROFILES).filter(([key,v])=>key!=='generic'&&new RegExp(`(^|\\b)(${v[3]})(\\b|$)`,'i').test(text));
  return matches.length===1?matches[0][0]:'generic';
}

export function propose(hass, registry, config) {
  const entries=registry?.entities || [];
  const selected=entries.find(e=>e.entity_id===config.entity);
  const deviceId=config.device_id || selected?.device_id;
  // Never group unrelated devices by matching a name or a room.
  const siblings=deviceId?entries.filter(e=>e.device_id===deviceId&&!e.disabled_by).map(e=>e.entity_id):[config.entity].filter(Boolean);
  const device=(registry?.devices||[]).find(d=>d.id===deviceId)||{};
  const candidates=siblings.map(id=>hass.states[id]).filter(Boolean);
  const primary=hass.states[config.entity] || candidates.find(s=>['vacuum','lawn_mower','humidifier','water_heater','fan'].includes(domainOf(s.entity_id))) || candidates[0];
  const metrics={}; const ambiguous=[];
  for (const [role,[,dc]] of Object.entries(METRICS)) {
    const matches=candidates.filter(s=>domainOf(s.entity_id)==='sensor' && (dc ? s.attributes?.device_class===dc && (role!=='energy'||!metricMatch('cycle_energy',s)) : metricMatch(role,s)));
    if (matches.length===1) metrics[role]=matches[0].entity_id;
    else if(matches.length>1) ambiguous.push(role);
  }
  const controls=candidates.filter(s=>['button','select','number','switch','input_button','input_select','input_number','input_boolean','fan','humidifier'].includes(domainOf(s.entity_id))).map(s=>({entity:s.entity_id,name:s.attributes?.friendly_name||s.entity_id}));
  const maps=candidates.filter(s=>['camera','image'].includes(domainOf(s.entity_id)));
  const status_entities=candidates.filter(s=>s.entity_id!==primary?.entity_id && (domainOf(s.entity_id)==='binary_sensor'||domainOf(s.entity_id)==='sensor'&&numeric(s.state)===null&&/filter|filtro|maintenance|manutenzione|tank|serbatoio|salt|sale|rinse|brillantante/i.test(s.entity_id+' '+s.attributes?.friendly_name))).map(s=>s.entity_id);
  return {status_entities,entity:primary?.entity_id||'',profile:inferProfile(primary,device),metrics,controls,map_entity:maps.length===1?maps[0].entity_id:'',device_id:deviceId,ambiguous,siblings};
}
function metricMatch(role,s) {
 const name=(s.entity_id+' '+(s.attributes?.friendly_name||'')).toLowerCase();
 const patterns={cycle_energy:/cycle.*energy|energia.*ciclo/,remaining:/remaining|restante|residuo.*tempo/,progress:/progress|avanzamento/,water_quality:/(tds.*(out|uscita|purified))|((out|uscita|purified).*tds)/,water_input:/(tds.*(inlet|ingresso|input))|((inlet|ingresso|input).*tds)/,water_used:/water.*(used|dispensed)|acqua.*(erogata|consumata)/,tank:/tank|serbatoio/,filter:/filter.*(life|remaining)|filtro.*residu/,area:/cleaned.*area|area.*(pulita|tagliata)/};
 return patterns[role]?.test(name)||false;
}
export function nativeActions(state,services={}) {
 if(!state) return [];
 const d=domainOf(state.entity_id), f=Number(state.attributes?.supported_features||0);
 const options = d==='vacuum' ? [[8192,'start','Avvia'],[4,'pause','Pausa'],[8,'stop','Ferma'],[16,'return_to_base','Alla base'],[512,'locate','Trova']] : d==='lawn_mower' ? [[1,'start_mowing','Taglia'],[2,'pause','Pausa'],[4,'dock','Alla base'],[8,'stop','Ferma']] : [];
 return options.filter(([bit,service])=>(f&bit)&&services[d]?.[service]).map(([,service,name])=>({name,action:`${d}.${service}`,entity:state.entity_id}));
}
export function validMetric(role,s) {
 if(!available(s))return null;
 const value=numeric(s.state);if(value===null)return null;
 const unit=s.attributes?.unit_of_measurement||'';
 if(role==='power')return unit==='kW'?{value:value*1000,unit:'W'}:unit==='W'?{value,unit}:null;
 if(role==='energy'||role==='cycle_energy')return unit==='Wh'?{value:value/1000,unit:'kWh'}:unit==='kWh'?{value,unit}:null;
 return {value,unit};
}

export function profileMetrics(profile){
 const common=['power','energy'];
 const cycle=['cycle_energy','remaining','progress'];
 const extra=profile==='water_purifier'?['water_quality','water_input','water_used','tank','filter']:['vacuum','floor_cleaner','lawn_mower','robot_dock'].includes(profile)?['battery','area','remaining','progress','tank','filter']:['washer','dryer','dishwasher','oven','microwave','coffee'].includes(profile)?[...cycle,'temperature','tank','filter']:['refrigerator','freezer','wine_cooler','water_heater'].includes(profile)?['temperature']:['humidity','temperature','filter','tank'];
 return profile==='generic'?Object.keys(METRICS):[...common,...extra];
}
