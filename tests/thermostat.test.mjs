import test from 'node:test';
import assert from 'node:assert/strict';
import {thermostatModes,nextTarget,supportsTarget,formatTemperature} from '../src/thermostat-model.js';

test('native thermostat follows reported climate modes and temperature limits',()=>{
 const state={state:'heat',attributes:{hvac_modes:['off','heat'],supported_features:1,temperature:22,min_temp:18,max_temp:30,target_temp_step:0.5}};
 assert.deepEqual(thermostatModes(state),['off','heat']);
 assert.equal(supportsTarget(state),true);
 assert.equal(nextTarget(state,1),22.5);
 assert.equal(nextTarget({...state,attributes:{...state.attributes,temperature:30}},1),30);
 assert.equal(nextTarget({...state,attributes:{...state.attributes,temperature:18}},-1),18);
 assert.equal(formatTemperature(21.5),'21,5 °C');
 assert.equal(formatTemperature(undefined),'—');
 assert.equal(supportsTarget({attributes:{supported_features:0,temperature:22}}),false);
 assert.equal(supportsTarget({attributes:{supported_features:1,temperature:null}}),false);
});
