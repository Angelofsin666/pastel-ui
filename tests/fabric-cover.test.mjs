import test from 'node:test';
import assert from 'node:assert/strict';
import {fabricPosition,fabricState,fabricCommand} from '../src/fabric-cover-model.js';

const hass={states:{
 'cover.test':{state:'open',attributes:{current_position:45,supported_features:15}},
 'sensor.test_position':{state:'70',attributes:{unit_of_measurement:'%'}},
 'sensor.unavailable':{state:'unavailable',attributes:{}},
 'script.open':{state:'off'},'button.stop':{state:'unknown'},'switch.motor':{state:'off'}
},services:{cover:{open_cover:{},stop_cover:{},close_cover:{},set_cover_position:{}},script:{turn_on:{}},button:{press:{}},switch:{turn_on:{},turn_off:{}}}};

test('both fabric illustrations follow real cover position and sensor overrides',()=>{
 assert.equal(fabricPosition(hass,{entity:'cover.test'}),45);
 assert.equal(fabricPosition(hass,{entity:'cover.test',position_entity:'sensor.test_position'}),70);
 assert.equal(fabricPosition(hass,{position_entity:'sensor.test_position'}),70);
 assert.equal(fabricPosition(hass,{position_entity:'sensor.unavailable'}),null);
 assert.equal(fabricState(hass,{entity:'cover.test'},45),'Parzialmente aperta');
 assert.equal(fabricState(hass,{position_entity:'sensor.test_position'},70),'Parzialmente aperta');
});

test('fabric commands use available native cover features or selected scripts',()=>{
 assert.deepEqual(fabricCommand(hass,{entity:'cover.test'},'open'),{action:'cover.open_cover',entity:'cover.test',enabled:true});
 assert.deepEqual(fabricCommand(hass,{entity:'cover.test',open_entity:'script.open'},'open'),{action:'script.turn_on',entity:'script.open',enabled:true});
 assert.deepEqual(fabricCommand(hass,{stop_entity:'button.stop'},'stop'),{action:'button.press',entity:'button.stop',enabled:true});
 assert.deepEqual(fabricCommand(hass,{open_entity:'switch.motor'},'open'),{action:'switch.turn_on',entity:'switch.motor',enabled:true});
 assert.deepEqual(fabricCommand(hass,{close_entity:'switch.motor'},'close'),{action:'switch.turn_off',entity:'switch.motor',enabled:true});
 assert.equal(fabricCommand(hass,{},'close'),null);
 const noFeatures={...hass,states:{...hass.states,'cover.test':{state:'open',attributes:{current_position:45,supported_features:0}}}};
 assert.equal(fabricCommand(noFeatures,{entity:'cover.test'},'close').enabled,false);
});
