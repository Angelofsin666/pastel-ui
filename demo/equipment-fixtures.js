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
  ['home_battery','73','%',{power:['1.3','kW'],mode:['Carica',''],autonomy:['6 h',''],energy:['7.3','kWh']},'charging'],
  ['ups','88','%',{runtime:['42','min'],load:['31','%'],input:['230','V'],output:['320','W']},'ready'],
  ['home_network','432','Mbps',{upload:['94','Mbps'],latency:['12','ms'],devices:['18',''],signal:['Ottimo','']},'on'],
  ['electric_car','64','%',{range:['248','km'],charging:['In sosta',''],location:['Casa',''],climate:['Spento','']},'idle'],
  ['aquarium','25.4','°C',{ph:['7.1',''],filter:['Acceso',''],light:['Accesa',''],level:['86','%']},'on'],
  ['greenhouse','23.1','°C',{humidity:['63','%'],soil:['48','%'],light:['Buona',''],water:['78','%']},'ready'],
  ['mailbox','Posta presente','',{last_delivery:['Oggi 10:20',''],door:['Chiusa',''],count:['1','']},'on'],
  ['kitchen_robot','8','min',{temperature:['95','°C'],speed:['3',''],program:['Crema',''],bowl:['Chiuso','']},'running']
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
 for(const [key,room,target,power] of [['fan_heater','21.5','23','900'],['infrared_panel','20.8','22','550']]){
  const slug=key.replaceAll('_','-');
  const hero=add(`sensor.demo_${slug}_room`,room,'Temperatura ambiente',{device_class:'temperature',unit_of_measurement:'°C'});
  const state=add(`switch.demo_${slug}`,'on',EQUIPMENT[key].title);
  const targetEntity=add(`counter.demo_${slug}_target`,target,'Temperatura impostata',{unit_of_measurement:'°C'});
  const powerEntity=add(`sensor.demo_${slug}_power`,power,'Assorbimento',{unit_of_measurement:'W'});
  const up=add(`script.demo_${slug}_up`,'off','Temperatura +');
  const down=add(`script.demo_${slug}_down`,'off','Temperatura −');
  const buttons=EQUIPMENT[key].buttons.map(([name,icon],i)=>({name,icon,entity:add(`script.demo_${slug}_mode_${i}`,'off',name)}));
  examples.push([slug,EQUIPMENT[key].name,{type:`custom:${equipmentType(key)}`,hero_entity:hero,state_entity:state,metrics:{target:targetEntity,power:powerEntity},power_on_entity:state,power_off_entity:state,temperature_up_entity:up,temperature_down_entity:down,buttons}]);
 }
 add('cover.demo_basculante','closed','Basculante',{supported_features:11});
 add('cover.demo_gate','open','Cancello esterno',{supported_features:11});
 add('binary_sensor.demo_obstacle','off','Ostacolo',{device_class:'problem'});
 add('camera.demo_doorbell','idle','Telecamera ingresso',{entity_picture:'/pastel-ui/demo/doorbell-preview.svg'});
 add('sensor.demo_doorbell_call','Oggi 08:42','Ultima chiamata');
 add('binary_sensor.demo_doorbell_motion','off','Movimento',{device_class:'motion'});
 add('script.demo_doorbell_gate','off','Apri cancello');
 add('lock.demo_front','locked','Serratura ingresso',{supported_features:1});
 add('sensor.demo_lock_battery','87','Batteria',{unit_of_measurement:'%'});
 add('sensor.demo_last_access','Ieri 21:10','Ultimo accesso');
 add('sensor.demo_co2','634','CO₂',{unit_of_measurement:'ppm',device_class:'carbon_dioxide'});
 add('sensor.demo_pm25','12','PM2.5',{unit_of_measurement:'µg/m³'});
 add('sensor.demo_air_humidity','47','Umidità',{unit_of_measurement:'%'});
 add('sensor.demo_air_temperature','22.4','Temperatura',{unit_of_measurement:'°C'});
 add('sensor.demo_voc','85','VOC',{unit_of_measurement:'ppb'});
 add('valve.demo_water_main','open','Valvola generale',{supported_features:3});
 add('sensor.demo_water_today','183','Consumo oggi',{unit_of_measurement:'L'});
 add('sensor.demo_water_flow','0','Portata attuale',{unit_of_measurement:'L/min'});
 add('binary_sensor.demo_leak_bath','off','Bagno',{device_class:'moisture'});
 add('binary_sensor.demo_leak_laundry','off','Lavanderia',{device_class:'moisture'});
 examples.push(
  ['garage-gate','Pastel Garage & Gate',{type:`custom:${equipmentType('garage_gate')}`,hero_entity:'cover.demo_basculante',metrics:{gate:'cover.demo_gate',obstacle:'binary_sensor.demo_obstacle'}}],
  ['doorbell','Pastel Doorbell',{type:`custom:${equipmentType('doorbell')}`,camera_entity:'camera.demo_doorbell',metrics:{last_call:'sensor.demo_doorbell_call',motion:'binary_sensor.demo_doorbell_motion'},buttons:[{name:'Apri cancello',icon:'mdi:gate',entity:'script.demo_doorbell_gate'}]}],
  ['smart-lock','Pastel Smart Lock',{type:`custom:${equipmentType('smart_lock')}`,hero_entity:'lock.demo_front',metrics:{contact:'binary_sensor.demo_door',battery:'sensor.demo_lock_battery',last_access:'sensor.demo_last_access'}}],
  ['air-quality','Pastel Air Quality',{type:`custom:${equipmentType('air_quality')}`,hero_entity:'sensor.demo_co2',metrics:{pm25:'sensor.demo_pm25',humidity:'sensor.demo_air_humidity',temperature:'sensor.demo_air_temperature',voc:'sensor.demo_voc'}}],
  ['water-safety','Pastel Water Safety',{type:`custom:${equipmentType('water_safety')}`,hero_entity:'valve.demo_water_main',metrics:{today:'sensor.demo_water_today',flow:'sensor.demo_water_flow'},leak_sensors:[{name:'Bagno',entity:'binary_sensor.demo_leak_bath'},{name:'Lavanderia',entity:'binary_sensor.demo_leak_laundry'}]}]
 );
 add('calendar.demo_paper','off','Carta',{message:'Carta e cartone',start_time:'2026-10-29T08:00:00+01:00'});
 add('input_select.demo_waste','Vetro','Prossima raccolta',{options:['Vetro','Plastica','Indifferenziato']});
 add('input_boolean.demo_plastic','on','Plastica domani');
 examples.push(['waste-collection','Pastel Waste Collection',{type:`custom:${equipmentType('waste_collection')}`,hero_entity:'calendar.demo_paper',waste_items:[{name:'Carta',entity:'calendar.demo_paper'},{name:'Vetro',entity:'input_select.demo_waste'},{name:'Plastica',entity:'input_boolean.demo_plastic'}]}]);
}
