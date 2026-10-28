import test from 'node:test';
import assert from 'node:assert/strict';
import {valveRooms,valveOverview,valveTargetCommand} from '../src/radiator-valves-model.js';

const state=(mode,current,target,action='heating')=>({state:mode,attributes:{friendly_name:'Valvola',current_temperature:current,temperature:target,hvac_action:action,supported_features:1,min_temp:18,max_temp:30,target_temp_step:0.5}});
test('multiple valves show reported temperatures, batteries and states',()=>{
 const hass={config:{unit_system:{temperature:'°C'}},states:{'climate.living':state('heat',21.2,22),'climate.bedroom':state('heat',20.8,21.5,'idle'),'climate.study':state('off',21.4,20,'off'),'sensor.battery':{state:'84',attributes:{unit_of_measurement:'%'}},'sensor.bedroom':{state:'20.6',attributes:{unit_of_measurement:'°C'}}}};
 const rooms=valveRooms(hass,{rooms:[{name:'Salotto',entity:'climate.living'},{name:'Camera',entity:'climate.bedroom',temp_entity:'sensor.bedroom',battery_entity:'sensor.battery'},{name:'Studio',entity:'climate.study'}]});
 assert.deepEqual(rooms.map(r=>r.temperature),[21.2,20.6,21.4]);
 assert.deepEqual(rooms.map(r=>r.status),['Riscalda','In temperatura','Spenta']);
 assert.equal(rooms[1].battery,84);
 assert.deepEqual(valveOverview(rooms),{average:(21.2+20.6+21.4)/3,active:2,total:3});
});

test('controls respect climate limits, supported features and service availability',()=>{
 const hass={states:{'climate.room':state('heat',20,30)},services:{climate:{set_temperature:{}}}};
 const room={entity:'climate.room'};
 assert.equal(valveTargetCommand(hass,room,1),null);
 assert.deepEqual(valveTargetCommand(hass,room,-1),{action:'climate.set_temperature',entity:'climate.room',data:{temperature:29.5}});
 hass.states['climate.room'].attributes.supported_features=0;
 assert.equal(valveTargetCommand(hass,room,-1),null);
 hass.states['climate.room'].attributes.supported_features=1;
 delete hass.services.climate.set_temperature;
 assert.equal(valveTargetCommand(hass,room,-1),null);
});

test('unavailable and unconfigured rooms never invent readings or commands',()=>{
 const hass={config:{unit_system:{temperature:'°C'}},states:{'climate.offline':{state:'unavailable',attributes:{current_temperature:22,temperature:23,supported_features:1}},'sensor.wrong_unit':{state:'70',attributes:{unit_of_measurement:'°F'}}},services:{climate:{set_temperature:{}}}};
 const rooms=valveRooms(hass,{rooms:[{entity:'climate.offline',temp_entity:'sensor.wrong_unit'},{name:'Unconfigured'}]});
 assert.deepEqual(rooms.map(r=>r.temperature),[null,null]);
 assert.equal(valveOverview(rooms).average,null);
 assert.equal(valveTargetCommand(hass,rooms[0],1),null);
});
