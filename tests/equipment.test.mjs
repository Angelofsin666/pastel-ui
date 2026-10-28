import test from 'node:test';
import assert from 'node:assert/strict';
import {EQUIPMENT,EQUIPMENT_KEYS,equipmentType,sensorValue,buttonCommand,percentage,zoneAction} from '../src/equipment-model.js';

test('equipment types keep all associations user-supplied',()=>{
 assert.equal(EQUIPMENT_KEYS.length,20);
 assert.equal(new Set(EQUIPMENT_KEYS.map(equipmentType)).size,20);
 for(const profile of Object.values(EQUIPMENT)){
  assert.ok(profile.metrics.length>=3);
  assert.ok(Array.isArray(profile.buttons));
  assert.equal(JSON.stringify(profile).includes('sensor.'),false);
  assert.equal(JSON.stringify(profile).includes('script.'),false);
 }
 assert.match(EQUIPMENT.sump.subtitle,/sotterranei/i);
 assert.equal(EQUIPMENT.irrigation.zones,true);
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
