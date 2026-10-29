import test from 'node:test';
import assert from 'node:assert/strict';
import {cameraItems,cameraLayout} from '../src/cameras-model.js';

test('camera overview preserves order and names while excluding other entities',()=>{
 const hass={states:{'camera.front':{state:'idle',attributes:{friendly_name:'Front door'}},'camera.garden':{state:'unavailable',attributes:{friendly_name:'Garden'}}}};
 const items=cameraItems(hass,{cameras:[{entity:'camera.garden',name:'Back yard'},{entity:'sensor.temperature'},{entity:'camera.front',name:''},{entity:'camera.missing'}]});
 assert.deepEqual(items,[{entity:'camera.garden',name:'Back yard',available:false},{entity:'camera.front',name:'Front door',available:true},{entity:'camera.missing',name:'camera.missing',available:false}]);
});
test('camera layout defaults to grid and accepts list',()=>{
 assert.equal(cameraLayout({}),'grid');assert.equal(cameraLayout({layout:'list'}),'list');assert.equal(cameraLayout({layout:'unexpected'}),'grid');
});
