import {EQUIPMENT,equipmentType} from '../src/equipment-model.js';

// Fictional devices for the public demo. These never appear in the card defaults.
export function appendEquipmentFixtures(add,examples){
 const devices=[
  ['printer_3d','67','%',{nozzle:['210','°C'],bed:['60','°C'],remaining:['1 h 24 min',''],filament:['38','%']},'printing'],
  ['printer','Pronta','',{ink:['62','%'],paper:['84','fogli'],queue:['0',''],error:['Nessuno','']},'idle'],
  ['rain_tank','76','%',{volume:['1520','L'],inflow:['8','L/min'],outflow:['0','L/min'],overflow:['Spento','']},'on'],
  ['ventilation','Buona','',{co2:['648','ppm'],humidity:['46','%'],speed:['2',''],filter:['81','%']},'on'],
  ['range_hood','2','',{power:['68','W'],light:['Acceso',''],filter:['75','%'],air:['Buona','']},'on'],
  ['litter_robot','32','%',{cycle:['In attesa',''],litter:['72','%'],weight:['4.8','kg'],last_clean:['08:15','']},'idle'],
  ['pet_bowls','78','%',{food:['64','%'],water:['78','%'],filter:['90','%'],last_feed:['07:30','']},'on'],
  ['chicken_feeder','45','%',{next_feed:['17:30',''],today:['2',''],motor:['Pronto',''],battery:['88','%']},'on'],
  ['irrigation','In attesa','',{next_run:['06:00',''],water:['24','L'],rain:['Spento','']},'off'],
  ['solar','4.8','kW',{home:['2.1','kW'],grid:['1.4','kW'],battery:['1.3','kW'],today:['23.6','kWh']},'producing'],
  ['home_battery','73','%',{power:['1.3','kW'],mode:['Carica',''],autonomy:['6 h',''],energy:['7.3','kWh']},'charging']
 ];
 for(const [key,value,unit,metrics,status] of devices){
  const slug=key.replaceAll('_','-'),hero=`sensor.demo_${slug}_hero`,state=`sensor.demo_${slug}_status`;
  add(hero,value,EQUIPMENT[key].hero,{unit_of_measurement:unit});add(state,status,'Stato '+EQUIPMENT[key].title);
  const mapped={};for(const [role,[reading,u]] of Object.entries(metrics)){const id=`sensor.demo_${slug}_${role}`;add(id,reading,EQUIPMENT[key].metrics.find(([k])=>k===role)?.[1]||role,{unit_of_measurement:u});mapped[role]=id}
  const buttons=EQUIPMENT[key].buttons.map(([name,icon],i)=>{const id=`script.demo_${slug}_${i}`;add(id,'off',name);return {name,icon,entity:id}});
  const config={type:`custom:${equipmentType(key)}`,hero_entity:hero,state_entity:state,metrics:mapped,buttons};
  if(key==='irrigation')config.zones=['Prato','Orto','Siepe'].map((name,i)=>{const status=`binary_sensor.demo_zone_${i}`,start=`script.demo_zone_${i}_start`,stop=`script.demo_zone_${i}_stop`;add(status,i===1?'on':'off',name);add(start,'off','Avvia '+name);add(stop,'off','Ferma '+name);return {name,state_entity:status,start_entity:start,stop_entity:stop}});
  examples.push([slug,EQUIPMENT[key].name,config]);
 }
}
