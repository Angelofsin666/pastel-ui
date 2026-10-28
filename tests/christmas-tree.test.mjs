import test from 'node:test';
import assert from 'node:assert/strict';
import {treeView,treeActionAvailable,validateTreeConfig} from '../src/christmas-tree-model.js';

test('garland reads actual light and optional mode helper, including external changes',()=>{
 const hass={states:{'light.tree':{entity_id:'light.tree',state:'on',attributes:{brightness:128,supported_color_modes:['brightness']}},'input_select.mode':{entity_id:'input_select.mode',state:'night',attributes:{}}}};
 const config={entity:'light.tree',mode_entity:'input_select.mode'};
 assert.deepEqual([treeView(hass,config).on,treeView(hass,config).brightness,treeView(hass,config).modeState],[true,50,'night']);
 hass.states['light.tree'].attributes.brightness=255;hass.states['input_select.mode'].state='warm';
 assert.deepEqual([treeView(hass,config).brightness,treeView(hass,config).modeState],[100,'warm']);
 hass.states['light.tree'].state='unavailable';assert.equal(treeView(hass,config).available,false);
});

test('only configured, available script or scene actions are enabled',()=>{
 const hass={states:{'script.warm':{state:'off'},'scene.night':{state:'scening'},'script.missing':{state:'unavailable'}},services:{script:{turn_on:{}},scene:{turn_on:{}}}};
 assert.equal(treeActionAvailable(hass,{entity:'script.warm'}),true);
 assert.equal(treeActionAvailable(hass,{entity:'scene.night'}),true);
 assert.equal(treeActionAvailable(hass,{entity:'script.missing'}),false);
 assert.equal(treeActionAvailable(hass,{entity:'light.tree'}),false);
 assert.throws(()=>validateTreeConfig({buttons:[{entity:'light.tree'}]}));
 assert.doesNotThrow(()=>validateTreeConfig({buttons:[{entity:'script.warm'},{entity:'scene.night'}]}));
});
