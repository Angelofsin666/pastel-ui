import test from 'node:test';
import assert from 'node:assert/strict';
import {fanDevice,fanCommand} from '../src/fan-device-model.js';

test('native fan controls follow actual entity percentage and features',()=>{
 const hass={states:{'fan.example':{state:'on',attributes:{percentage:40,percentage_step:10,oscillating:true,supported_features:3}}},services:{fan:{turn_on:{},turn_off:{},set_percentage:{},oscillate:{}}}};
 assert.equal(fanDevice(hass,'fan.example').percentage,40);
 assert.deepEqual(fanCommand(hass,'fan.example','up'),{action:'fan.set_percentage',entity:'fan.example',data:{percentage:50}});
 assert.deepEqual(fanCommand(hass,'fan.example','down'),{action:'fan.set_percentage',entity:'fan.example',data:{percentage:30}});
 assert.deepEqual(fanCommand(hass,'fan.example','oscillate'),{action:'fan.oscillate',entity:'fan.example',data:{oscillating:false}});
 assert.deepEqual(fanCommand(hass,'fan.example','power'),{action:'fan.turn_off',entity:'fan.example',data:{}});
 hass.states['fan.example'].attributes.percentage=100;
 assert.equal(fanCommand(hass,'fan.example','up'),null);
 hass.states['fan.example'].state='unavailable';
 assert.equal(fanCommand(hass,'fan.example','down'),null);
});

test('missing fan data never guesses a speed or oscillation state',()=>{
 const hass={states:{'fan.example':{state:'off',attributes:{supported_features:3}}},services:{fan:{set_percentage:{},oscillate:{},turn_on:{}}}};
 assert.equal(fanDevice(hass,'fan.example').percentage,null);
 assert.equal(fanCommand(hass,'fan.example','up'),null);
 assert.equal(fanCommand(hass,'fan.example','oscillate'),null);
 assert.deepEqual(fanCommand(hass,'fan.example','power'),{action:'fan.turn_on',entity:'fan.example',data:{}});
});
