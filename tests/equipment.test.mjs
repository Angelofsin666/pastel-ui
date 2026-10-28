import test from 'node:test';
import assert from 'node:assert/strict';
import {EQUIPMENT,EQUIPMENT_KEYS,equipmentType,sensorValue,buttonCommand,heaterCommand,heaterPowerState,percentage,zoneAction,nativeControls,leakSummary,cameraPicture,equipmentValue,wasteReading} from '../src/equipment-model.js';

test('equipment types keep all associations user-supplied',()=>{
 assert.equal(EQUIPMENT_KEYS.length,62);
 assert.equal(new Set(EQUIPMENT_KEYS.map(equipmentType)).size,62);
 for(const profile of Object.values(EQUIPMENT)){
  assert.ok(profile.metrics.length>=2||profile.waste_items);
  assert.ok(Array.isArray(profile.buttons));
  assert.equal(JSON.stringify(profile).includes('sensor.'),false);
  assert.equal(JSON.stringify(profile).includes('script.'),false);
 }
 assert.match(EQUIPMENT.sump.subtitle,/sotterranei/i);
 assert.equal(EQUIPMENT.irrigation.zones,true);
 assert.equal(EQUIPMENT.garage_gate.hero,'Basculante');
 assert.equal(EQUIPMENT.doorbell.camera,true);
 assert.equal(EQUIPMENT.fan_heater.heater,true);
 assert.equal(EQUIPMENT.infrared_panel.heater,true);
 for(const key of ['safe','adjustable_bed','electric_blanket','garden_fountain','window_cleaner','skylight','air_compressor','stairlift','fish_feeder','shower','smart_desk','outdoor_grill','snow_melt','septic_tank','generator','nas','water_meter','gas_meter','power_panel','air_purifier','air_multiplier','ice_maker','bread_maker','toaster','smart_toothbrush','smart_mirror','smart_toilet'])assert.ok(EQUIPMENT[key]?.art);
});

test('heater controls use selected entities and never guess a new temperature',()=>{
 assert.deepEqual(heaterCommand('script.example_up','up'),{action:'script.turn_on',entity:'script.example_up'});
 assert.deepEqual(heaterCommand('counter.example_target','down'),{action:'counter.decrement',entity:'counter.example_target'});
 assert.deepEqual(heaterCommand('input_number.example_target','up'),{action:'input_number.increment',entity:'input_number.example_target'});
 assert.deepEqual(heaterCommand('switch.example_heater','on'),{action:'switch.turn_on',entity:'switch.example_heater'});
 assert.deepEqual(heaterCommand('switch.example_heater','off'),{action:'switch.turn_off',entity:'switch.example_heater'});
 assert.deepEqual(heaterCommand('script.example','off','script.turn_off'),{action:'script.turn_off',entity:'script.example'});
 assert.equal(heaterCommand('','up'),null);
 const hass={states:{'switch.example_heater':{state:'off'},'input_select.example_mode':{state:'Eco'},'sensor.example_unknown':{state:'unavailable'}}};
 assert.equal(heaterPowerState(hass,'switch.example_heater'),false);
 assert.equal(heaterPowerState(hass,'input_select.example_mode'),true);
 assert.equal(heaterPowerState(hass,'sensor.example_unknown'),null);
 assert.equal(heaterPowerState(hass,''),null);
});

test('native cover, lock and valve controls follow entity state and supported features',()=>{
 const services={cover:{open_cover:{},close_cover:{},stop_cover:{}},lock:{lock:{},unlock:{},open:{}},valve:{open_valve:{},close_valve:{}}};
 assert.deepEqual(nativeControls('cover',{state:'closed',attributes:{supported_features:3}},services).map(a=>a.enabled),[true,false,true]);
 assert.deepEqual(nativeControls('lock',{state:'locked',attributes:{supported_features:0}},services).map(a=>a.enabled),[true,true,false]);
 assert.deepEqual(nativeControls('valve',{state:'open',attributes:{supported_features:3}},services).map(a=>a.enabled),[true,true]);
 assert.ok(nativeControls('cover',{state:'unavailable',attributes:{supported_features:11}},services).every(a=>!a.enabled));
});

test('doorbell accepts any camera entity and leaks come from selected sensors',()=>{
 const hass={states:{'camera.any_brand_front':{state:'idle',attributes:{entity_picture:'/api/camera_proxy/camera.any_brand_front'}},'binary_sensor.bath':{state:'on',attributes:{device_class:'moisture'}}},hassUrl:path=>'https://example.invalid'+path};
 assert.equal(cameraPicture(hass,'camera.any_brand_front'),'https://example.invalid/api/camera_proxy/camera.any_brand_front');
 assert.equal(cameraPicture(hass,'sensor.not_camera'),'');
 assert.equal(leakSummary(hass,[{entity:'binary_sensor.bath'}]),'Perdita rilevata');
 assert.equal(equipmentValue(hass,'binary_sensor.bath'),'Perdita');
});

test('commands select matching Home Assistant service and never infer a state from the click',()=>{
 assert.deepEqual(buttonCommand({entity:'script.example_start'}),{action:'script.turn_on',entity:'script.example_start'});
 assert.deepEqual(buttonCommand({entity:'button.example_test'}),{action:'button.press',entity:'button.example_test'});
 assert.deepEqual(buttonCommand({entity:'switch.example_pump'}),{action:'switch.toggle',entity:'switch.example_pump'});
 assert.deepEqual(buttonCommand({entity:'script.example',action:'script.turn_off'}),{action:'script.turn_off',entity:'script.example'});
 assert.equal(buttonCommand({entity:'sensor.example'}),null);
 assert.equal(zoneAction('switch.garden',true),'switch.turn_on');
 assert.equal(zoneAction('switch.garden',false),'switch.turn_off');
 assert.equal(zoneAction('script.garden',true),'');
});

test('missing or unavailable sensors remain visibly unknown',()=>{
 const hass={states:{'sensor.temperature':{state:'23.5',attributes:{unit_of_measurement:'°C'}},'sensor.empty':{state:'unavailable',attributes:{}}}};
 assert.equal(sensorValue(hass,'sensor.temperature'),'23.5°C');
 assert.equal(sensorValue({states:{'sensor.pressure':{state:'3.1',attributes:{unit_of_measurement:'bar'}}}},'sensor.pressure'),'3.1 bar');
 assert.equal(sensorValue(hass,'sensor.empty'),'—');
 assert.equal(sensorValue(hass,'sensor.absent'),'—');
 assert.equal(percentage(hass,'sensor.temperature'),null);
 assert.equal(percentage({states:{'sensor.level':{state:'125',attributes:{unit_of_measurement:'%'}}}},'sensor.level'),100);
});

test('waste collections accept calendars, sensors, input selects and booleans',()=>{
 const hass={states:{
  'calendar.paper':{state:'off',attributes:{message:'Carta',start_time:'2026-10-29T08:00:00+01:00'}},
  'calendar.empty':{state:'off',attributes:{friendly_name:'Rifiuti'}},
  'sensor.next_waste':{state:'Plastica',attributes:{}},
  'input_select.waste':{state:'Vetro',attributes:{}},
  'input_boolean.paper':{state:'on',attributes:{}},
  'binary_sensor.glass':{state:'off',attributes:{}}
 }};
 assert.match(wasteReading(hass,{entity:'calendar.paper'}),/Carta · 29 ott/);
 assert.equal(wasteReading(hass,{entity:'calendar.empty'}),'—');
 assert.equal(wasteReading(hass,{entity:'sensor.next_waste'}),'Plastica');
 assert.equal(wasteReading(hass,{entity:'input_select.waste'}),'Vetro');
 assert.equal(wasteReading(hass,{entity:'input_boolean.paper',active_label:'Domani'}),'Domani');
 assert.equal(wasteReading(hass,{entity:'binary_sensor.glass',inactive_label:'Nessuna'}),'Nessuna');
 assert.equal(wasteReading(hass,{entity:'sensor.missing'}),'—');
});
