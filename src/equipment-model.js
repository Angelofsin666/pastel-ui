// Presentation profiles contain no entity IDs or assumptions about installed hardware.
export const EQUIPMENT = {
 pool:{name:'Pastel Pool',title:'Piscina',subtitle:'Acqua e filtrazione',icon:'mdi:pool',color:'blue',art:'pool',hero:'Temperatura acqua',metrics:[['ph','pH'],['chlorine','Cloro libero'],['filtration','Filtrazione']],buttons:[['Avvia','mdi:play'],['Ferma','mdi:stop'],['Pulizia','mdi:creation']]},
 sump:{name:'Pastel Sump Pumps',title:'Pompe anti-allagamento',subtitle:'Protezione sotterranei',icon:'mdi:water-pump',color:'blue',art:'sump',hero:'Livello pozzetto',metrics:[['pump_a','Pompa A'],['pump_b','Pompa B'],['alarm','Allarme allagamento']],buttons:[['Test pompa A','mdi:water-pump'],['Test pompa B','mdi:water-pump'],['Automatico','mdi:auto-mode']]},
 booster:{name:'Pastel Water Booster',title:'Pompa di rilancio',subtitle:'Pressione e portata',icon:'mdi:water-pump',color:'mint',art:'booster',hero:'Pressione attuale',metrics:[['flow','Portata'],['pump','Stato pompa'],['target','Pressione desiderata']],buttons:[['Automatico','mdi:auto-mode'],['Avvia','mdi:play'],['Ferma','mdi:stop']]},
 coffee:{name:'Pastel Coffee Machine',title:'Macchina del caffè',subtitle:'Pronta per una pausa',icon:'mdi:coffee-maker-outline',color:'peach',art:'coffee',hero:'Stato macchina',metrics:[['water','Acqua'],['beans','Chicchi'],['maintenance','Manutenzione']],buttons:[['Espresso','mdi:coffee'],['Caffè lungo','mdi:coffee-outline']]},
 fryer:{name:'Pastel Air Fryer',title:'Friggitrice ad aria',subtitle:'Cottura',icon:'mdi:pot-steam-outline',color:'peach',art:'fryer',hero:'Tempo rimanente',metrics:[['temperature','Temperatura'],['program','Programma'],['power','Potenza']],buttons:[['Avvia','mdi:play'],['Pausa','mdi:pause'],['Ferma','mdi:stop']]},
 boiler:{name:'Pastel Boiler',title:'Caldaia',subtitle:'Riscaldamento',icon:'mdi:radiator',color:'amber',art:'boiler',hero:'Temperatura mandata',metrics:[['pressure','Pressione'],['burner','Bruciatore'],['mode','Modalità']],buttons:[['Inverno','mdi:snowflake'],['Estate','mdi:weather-sunny']]},
 hot_water:{name:'Pastel Hot Water',title:'Acqua sanitaria',subtitle:'Accumulo',icon:'mdi:water-boiler',color:'peach',art:'hot_water',hero:'Temperatura accumulo',metrics:[['target','Temperatura desiderata'],['heating','Riscaldamento'],['energy','Energia']],buttons:[['Boost','mdi:lightning-bolt'],['Eco','mdi:leaf']]},
 ev:{name:'Pastel EV Charger',title:'Ricarica auto',subtitle:'Colonnina elettrica',icon:'mdi:ev-station',color:'mint',art:'ev',hero:'Potenza di ricarica',metrics:[['energy','Energia sessione'],['limit','Limite corrente'],['finish','Fine prevista']],buttons:[['Avvia','mdi:play'],['Pausa','mdi:pause'],['Riprendi','mdi:play']]},
 pool_robot:{name:'Pastel Pool Robot',title:'Robot piscina',subtitle:'Pulizia piscina',icon:'mdi:robot',color:'blue',art:'pool_robot',hero:'Avanzamento',metrics:[['battery','Batteria'],['mode','Modalità'],['remaining','Tempo rimanente']],buttons:[['Avvia','mdi:play'],['Pausa','mdi:pause'],['Ritorna','mdi:home']]},
 printer_3d:{name:'Pastel 3D Printer',title:'Stampante 3D',subtitle:'Stampa e materiali',icon:'mdi:printer-3d',color:'lavender',art:'printer_3d',hero:'Avanzamento stampa',metrics:[['nozzle','Ugello'],['bed','Piano'],['remaining','Tempo rimanente'],['filament','Filamento']],buttons:[['Pausa','mdi:pause'],['Riprendi','mdi:play'],['Ferma','mdi:stop']]},
 printer:{name:'Pastel Printer',title:'Stampante',subtitle:'Documenti e consumabili',icon:'mdi:printer',color:'blue',art:'printer',hero:'Stato stampante',metrics:[['ink','Inchiostro o toner'],['paper','Carta'],['queue','Coda di stampa'],['error','Attenzione']],buttons:[['Pulizia','mdi:creation'],['Scansione','mdi:content-copy']]},
 rain_tank:{name:'Pastel Rainwater Tank',title:'Raccolta acqua piovana',subtitle:'Riserva idrica',icon:'mdi:water',color:'blue',art:'rain_tank',hero:'Livello serbatoio',metrics:[['volume','Acqua disponibile'],['inflow','Ingresso'],['outflow','Uscita'],['overflow','Troppo pieno']],buttons:[['Pompa','mdi:water-pump'],['Irrigazione','mdi:sprinkler']]},
 ventilation:{name:'Pastel Ventilation',title:'VMC',subtitle:'Ricambio aria',icon:'mdi:air-filter',color:'mint',art:'ventilation',hero:'Qualità aria',metrics:[['co2','CO₂'],['humidity','Umidità'],['speed','Velocità'],['filter','Filtro']],buttons:[['Auto','mdi:auto-mode'],['Boost','mdi:fan-plus'],['Quiet','mdi:weather-night']]},
 range_hood:{name:'Pastel Range Hood',title:'Cappa cucina',subtitle:'Aspirazione',icon:'mdi:air-filter',color:'peach',art:'range_hood',hero:'Velocità aspirazione',metrics:[['power','Potenza'],['light','Luce'],['filter','Filtro'],['air','Qualità aria']],buttons:[['Luce','mdi:lightbulb'],['Boost','mdi:fan-plus'],['Spegni','mdi:power-off']]},
 litter_robot:{name:'Pastel Litter Robot',title:'Lettiera robot',subtitle:'Pulizia e riempimento',icon:'mdi:cat',color:'lavender',art:'litter_robot',hero:'Riempimento cassetto',metrics:[['cycle','Stato ciclo'],['litter','Lettiera'],['weight','Peso'],['last_clean','Ultima pulizia']],buttons:[['Pulisci','mdi:creation'],['Pausa','mdi:pause'],['Svuota','mdi:delete-outline']]},
 pet_bowls:{name:'Pastel Pet Bowls',title:'Ciotole animali',subtitle:'Acqua e cibo',icon:'mdi:paw',color:'mint',art:'pet_bowls',hero:'Acqua disponibile',metrics:[['food','Cibo disponibile'],['water','Serbatoio acqua'],['filter','Filtro acqua'],['last_feed','Ultimo pasto']],buttons:[['Acqua','mdi:water'],['Cibo','mdi:food-variant']]},
 chicken_feeder:{name:'Pastel Chicken Feeder',title:'Mangiatoia galline',subtitle:'Alimentazione automatica',icon:'mdi:food-variant',color:'amber',art:'chicken_feeder',hero:'Mangime disponibile',metrics:[['next_feed','Prossimo pasto'],['today','Pasti oggi'],['motor','Motore'],['battery','Batteria']],buttons:[['Distribuisci','mdi:food-variant'],['Pausa','mdi:pause'],['Programma','mdi:calendar-clock']]},
 irrigation:{name:'Pastel Irrigation',title:'Irrigazione',subtitle:'Zone del giardino',icon:'mdi:sprinkler',color:'mint',art:'irrigation',hero:'Stato impianto',metrics:[['next_run','Prossima irrigazione'],['water','Acqua usata'],['rain','Pioggia rilevata']],buttons:[['Avvia tutto','mdi:play'],['Ferma tutto','mdi:stop']],zones:true},
 solar:{name:'Pastel Solar',title:'Fotovoltaico',subtitle:'Energia solare',icon:'mdi:solar-power',color:'amber',art:'solar',hero:'Produzione attuale',metrics:[['home','Consumo casa'],['grid','Scambio rete'],['battery','Batteria'],['today','Produzione oggi']],buttons:[]},
 home_battery:{name:'Pastel Home Battery',title:'Batterie di accumulo',subtitle:'Energia immagazzinata',icon:'mdi:battery-high',color:'mint',art:'home_battery',hero:'Carica attuale',metrics:[['power','Potenza'],['mode','Modalità'],['autonomy','Autonomia'],['energy','Energia disponibile']],buttons:[['Auto','mdi:auto-mode'],['Riserva','mdi:battery-lock'],['Scarica','mdi:battery-arrow-down']]},
 garage_gate:{name:'Pastel Garage & Gate',title:'Garage e cancello',subtitle:'Accesso carrabile',icon:'mdi:garage',color:'blue',art:'garage_gate',hero:'Basculante',metrics:[['gate','Cancello esterno'],['obstacle','Sensore ostacoli']],buttons:[],native:'cover'},
 doorbell:{name:'Pastel Doorbell',title:'Videocitofono',subtitle:'Ingresso principale',icon:'mdi:video',color:'blue',art:'doorbell',hero:'Anteprima telecamera',metrics:[['last_call','Ultima chiamata'],['motion','Movimento']],buttons:[],camera:true},
 smart_lock:{name:'Pastel Smart Lock',title:'Porta d’ingresso',subtitle:'Serratura intelligente',icon:'mdi:lock',color:'lavender',art:'smart_lock',hero:'Serratura',metrics:[['contact','Contatto porta'],['battery','Batteria'],['last_access','Ultimo accesso']],buttons:[],native:'lock'},
 air_quality:{name:'Pastel Air Quality',title:'Qualità dell’aria',subtitle:'Ambiente',icon:'mdi:air-filter',color:'mint',art:'air_quality',hero:'CO₂ attuale',metrics:[['pm25','PM2.5'],['humidity','Umidità'],['temperature','Temperatura'],['voc','VOC']],buttons:[]},
 water_safety:{name:'Pastel Water Safety',title:'Protezione acqua',subtitle:'Casa',icon:'mdi:shield-check',color:'mint',art:'water_safety',hero:'Valvola generale',metrics:[['today','Consumo oggi'],['flow','Portata attuale']],buttons:[],native:'valve',leak_sensors:true},
 ups:{name:'Pastel UPS',title:'Gruppo di continuità',subtitle:'Alimentazione di emergenza',icon:'mdi:battery-charging',color:'blue',art:'ups',hero:'Carica batteria',metrics:[['runtime','Autonomia'],['load','Carico'],['input','Tensione ingresso'],['output','Potenza uscita']],buttons:[['Test','mdi:check-circle-outline']]},
 home_network:{name:'Pastel Home Network',title:'Rete di casa',subtitle:'Connessione e dispositivi',icon:'mdi:router-wireless',color:'mint',art:'home_network',hero:'Velocità download',metrics:[['upload','Upload'],['latency','Latenza'],['devices','Dispositivi'],['signal','Segnale']],buttons:[['Riavvia','mdi:restart']]},
 electric_car:{name:'Pastel Electric Car',title:'Auto elettrica',subtitle:'Batteria e autonomia',icon:'mdi:car-electric',color:'lavender',art:'electric_car',hero:'Carica batteria',metrics:[['range','Autonomia'],['charging','Ricarica'],['location','Posizione'],['climate','Clima']],buttons:[['Climatizza','mdi:air-conditioner'],['Trova','mdi:map-marker']]},
 aquarium:{name:'Pastel Aquarium',title:'Acquario',subtitle:'Acqua e attrezzature',icon:'mdi:fish',color:'blue',art:'aquarium',hero:'Temperatura acqua',metrics:[['ph','pH'],['filter','Filtro'],['light','Luce'],['level','Livello acqua']],buttons:[['Luci','mdi:lightbulb'],['Nutrimento','mdi:food-variant']]},
 greenhouse:{name:'Pastel Greenhouse',title:'Serra',subtitle:'Clima e irrigazione',icon:'mdi:greenhouse',color:'mint',art:'greenhouse',hero:'Temperatura interna',metrics:[['humidity','Umidità'],['soil','Terreno'],['light','Luce'],['water','Acqua']],buttons:[['Irriga','mdi:water'],['Ventila','mdi:fan']]},
 mailbox:{name:'Pastel Mailbox',title:'Cassetta postale',subtitle:'Posta in arrivo',icon:'mdi:mailbox',color:'pink',art:'mailbox',hero:'Stato cassetta',metrics:[['last_delivery','Ultima consegna'],['door','Sportello'],['count','Consegne']],buttons:[['Segna letta','mdi:check']]},
 kitchen_robot:{name:'Pastel Kitchen Robot',title:'Robot da cucina',subtitle:'Cottura e preparazione',icon:'mdi:pot-steam-outline',color:'peach',art:'kitchen_robot',hero:'Tempo rimanente',metrics:[['temperature','Temperatura'],['speed','Velocità'],['program','Programma'],['bowl','Stato boccale']],buttons:[['Pausa','mdi:pause'],['Ferma','mdi:stop'],['Velocità +','mdi:plus']]},
 waste_collection:{name:'Pastel Waste Collection',title:'Raccolta rifiuti',subtitle:'Prossime raccolte',icon:'mdi:recycle',color:'blue',art:'waste_collection',hero:'Prossima raccolta',metrics:[],buttons:[],waste_items:true},
 fan_heater:{name:'Pastel Fan Heater',title:'Stufetta ad aria',subtitle:'Riscaldamento ambiente',icon:'mdi:fan',color:'peach',art:'fan_heater',hero:'Temperatura ambiente',metrics:[['target','Temperatura impostata'],['power','Assorbimento']],buttons:[['Eco','mdi:leaf'],['Ventola forte','mdi:fan-plus']],heater:true},
 infrared_panel:{name:'Pastel Infrared Panel',title:'Pannello infrarossi',subtitle:'Riscaldamento radiante',icon:'mdi:radiator',color:'pink',art:'infrared_panel',hero:'Temperatura ambiente',metrics:[['target','Temperatura impostata'],['power','Assorbimento']],buttons:[['Modalità Eco','mdi:leaf']],heater:true}
};
export const EQUIPMENT_KEYS=Object.keys(EQUIPMENT);
const TYPE_SLUGS={sump:'sump-pumps',booster:'water-booster',coffee:'coffee-machine',fryer:'air-fryer',ev:'ev-charger',printer_3d:'3d-printer'};
export const equipmentType=key=>`pastel-${TYPE_SLUGS[key]||key.replaceAll('_','-')}-card`;
export const isAvailable=state=>!!state&&!['unknown','unavailable'].includes(state.state);
export const sensorValue=(hass,id)=>{const state=hass?.states?.[id];if(!isAvailable(state))return '—';const unit=state.attributes?.unit_of_measurement||'';const value=({on:'Acceso',off:'Spento'})[state.state]||state.state;return `${value}${unit?(unit==='%'||unit.startsWith('°')?'':' ')+unit:''}`};
export const percentage=(hass,id)=>{const s=hass?.states?.[id],n=Number(s?.state);return isAvailable(s)&&s.attributes?.unit_of_measurement==='%'&&Number.isFinite(n)?Math.max(0,Math.min(100,n)):null};
export const nativeStateLabel=(domain,state)=>({cover:{open:'Aperta',closed:'Chiusa',opening:'In apertura',closing:'In chiusura'},lock:{locked:'Chiusa',unlocked:'Sbloccata',open:'Aperta',locking:'In chiusura',unlocking:'In apertura'},valve:{open:'Aperta',closed:'Chiusa',opening:'In apertura',closing:'In chiusura'}})[domain]?.[state]||({unavailable:'Non disponibile',unknown:'Stato sconosciuto'})[state]||state||'Non configurato';
export function equipmentValue(hass,id){
 const state=hass?.states?.[id];if(!isAvailable(state))return '—';
 const domain=id?.split('.')[0];if(['cover','lock','valve'].includes(domain))return nativeStateLabel(domain,state.state);
 if(domain==='binary_sensor'){
  const kind=state.attributes?.device_class;
  const labels={door:['Aperta','Chiusa'],garage_door:['Aperta','Chiusa'],opening:['Aperta','Chiusa'],window:['Aperta','Chiusa'],moisture:['Perdita','Asciutto'],motion:['Movimento','Assente'],occupancy:['Presente','Assente'],problem:['Problema','Regolare']};
  if(labels[kind])return labels[kind][state.state==='on'?0:1];
 }
 return sensorValue(hass,id);
}
export const NATIVE_ACTIONS={cover:[['Apri','mdi:arrow-up','open_cover',1],['Ferma','mdi:stop','stop_cover',8],['Chiudi','mdi:arrow-down','close_cover',2]],lock:[['Blocca','mdi:lock','lock',0],['Sblocca','mdi:lock-open','unlock',0],['Apri porta','mdi:door-open','open',1]],valve:[['Apri acqua','mdi:water','open_valve',1],['Chiudi acqua','mdi:water-off','close_valve',2]]};
export function nativeControls(domain,state,services){
 const definitions=NATIVE_ACTIONS[domain]||[];
 const features=Number(state?.attributes?.supported_features)||0;
 return definitions.map(([name,icon,service,feature])=>({name,icon,action:`${domain}.${service}`,enabled:isAvailable(state)&&!!services?.[domain]?.[service]&&(!feature||!!(features&feature))}));
}
export function leakSummary(hass,sensors=[]){
 if(!sensors.length)return 'Sensori non configurati';
 const states=sensors.map(({entity})=>hass?.states?.[entity]);
 if(states.some(s=>isAvailable(s)&&s.state==='on'))return 'Perdita rilevata';
 return states.every(isAvailable)?'Tutto asciutto':'Sensori non disponibili';
}
export function cameraPicture(hass,id){
 if(!id?.startsWith('camera.')||!isAvailable(hass?.states?.[id]))return '';
 const picture=hass.states[id].attributes?.entity_picture||`/api/camera_proxy/${id}`;
 return /^https?:\/\//.test(picture)?picture:hass.hassUrl?.(picture)||picture;
}
export function buttonCommand(button){
 const id=button?.entity||'';
 if(button?.action)return {action:button.action,entity:id||undefined};
 const domain=id.split('.')[0];
 const service={script:'turn_on',scene:'turn_on',button:'press',input_button:'press',switch:'toggle',input_boolean:'toggle',automation:'trigger'}[domain];
 return service?{action:`${domain}.${service}`,entity:id}:null;
}
export function heaterCommand(entity,operation,action=''){
 if(action)return {action,entity:entity||undefined};
 const domain=(entity||'').split('.')[0];
 if(['switch','input_boolean'].includes(domain)&&['on','off'].includes(operation))return {action:`${domain}.turn_${operation}`,entity};
 if(['input_number','counter'].includes(domain)&&['up','down'].includes(operation))return {action:`${domain}.${operation==='up'?'increment':'decrement'}`,entity};
 return buttonCommand({entity});
}
export function heaterPowerState(hass,entity){
 const state=hass?.states?.[entity]?.state?.toLowerCase();
 if(!state||['unknown','unavailable'].includes(state))return null;
 if(['off','spento','spenta','idle','standby','false','0'].includes(state))return false;
 return true;
}
export const zoneAction=(id,start)=>['switch','input_boolean'].includes((id||'').split('.')[0])?`${id.split('.')[0]}.${start?'turn_on':'turn_off'}`:'';
export function wasteReading(hass,item){
 const id=typeof item==='string'?item:item?.entity;
 const state=hass?.states?.[id];
 if(!isAvailable(state))return '—';
 if(id.startsWith('calendar.')){
  const date=state.attributes?.start_time;
  const message=state.attributes?.message;
  if(!date&&!message)return '—';
  const when=date?new Date(date):null;
  const formatted=when&&!Number.isNaN(when.valueOf())?new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'short'}).format(when):'';
  return [message||'Raccolta',formatted].filter(Boolean).join(' · ');
 }
 if(['input_boolean','binary_sensor','switch'].includes(id.split('.')[0]))return state.state===(item?.active_state||'on')?(item?.active_label||'Da esporre'):(item?.inactive_label||'Non prevista');
 return equipmentValue(hass,id);
}
