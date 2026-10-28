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
 pool_robot:{name:'Pastel Pool Robot',title:'Robot piscina',subtitle:'Pulizia piscina',icon:'mdi:robot',color:'blue',art:'pool_robot',hero:'Avanzamento',metrics:[['battery','Batteria'],['mode','Modalità'],['remaining','Tempo rimanente']],buttons:[['Avvia','mdi:play'],['Pausa','mdi:pause'],['Ritorna','mdi:home']]}
};
export const EQUIPMENT_KEYS=Object.keys(EQUIPMENT);
const TYPE_SLUGS={sump:'sump-pumps',booster:'water-booster',coffee:'coffee-machine',fryer:'air-fryer',ev:'ev-charger'};
export const equipmentType=key=>`pastel-${TYPE_SLUGS[key]||key.replaceAll('_','-')}-card`;
export const isAvailable=state=>!!state&&!['unknown','unavailable'].includes(state.state);
export const sensorValue=(hass,id)=>{const state=hass?.states?.[id];if(!isAvailable(state))return '—';const unit=state.attributes?.unit_of_measurement||'';const value=({on:'Acceso',off:'Spento'})[state.state]||state.state;return `${value}${unit?(unit==='%'||unit.startsWith('°')?'':' ')+unit:''}`};
export function buttonCommand(button){
 const id=button?.entity||'';
 if(button?.action)return {action:button.action,entity:id||undefined};
 const domain=id.split('.')[0];
 const service={script:'turn_on',scene:'turn_on',button:'press',input_button:'press',switch:'toggle',input_boolean:'toggle',automation:'trigger'}[domain];
 return service?{action:`${domain}.${service}`,entity:id}:null;
}
