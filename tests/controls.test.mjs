import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as profiles from '../src/profiles.js';
const html=(strings,...values)=>strings.map((s,i)=>s+(values[i]??'')).join('');
function classes(){
 const ctx={...profiles,html,styles:[],COLORS:{blue:['x','y']},LitElement:class{},illustration:()=>'',CustomEvent:class{},document:{}};
 vm.createContext(ctx);
 for(const file of ['base-card','appliance-card','climate-card'])vm.runInContext(fs.readFileSync(new URL(`../src/${file}.js`,import.meta.url),'utf8').replace(/^import.*$/gm,'').replaceAll('export class','class').replaceAll('export const','const'),ctx);
 return {Appliance:vm.runInContext('ApplianceCard',ctx),Climate:vm.runInContext('ClimateCard',ctx),Base:vm.runInContext('BaseCard',ctx)};
}
test('never-used button stays enabled; unavailable button is disabled',()=>{const {Appliance}=classes();const c=new Appliance();c.hass={states:{'button.test':{state:'unknown',attributes:{}}},services:{button:{press:{}}}};assert.match(c.control({entity:'button.test'}),/\?disabled=false/);c.hass.states['button.test'].state='unavailable';assert.match(c.control({entity:'button.test'}),/\?disabled=true/)});
test('power switch is labelled as power, not programme start',()=>{const {Appliance}=classes();const c=new Appliance();c.hass={states:{'switch.test':{state:'off',attributes:{}}},services:{switch:{turn_on:{}}}};const view=c.control({entity:'switch.test'});assert.match(view,/Alimentazione/);assert.doesNotMatch(view,/Avvia/)});
test('climate target respects bounds, step and range ordering',()=>{const {Climate}=classes();const c=new Climate(),calls=[];c.config={entity:'climate.test'};c.hass={states:{'climate.test':{entity_id:'climate.test',state:'heat',attributes:{min_temp:16,max_temp:30,target_temp_step:.5,target_temp_high:24,target_temp_low:19}}}};c.call=(...args)=>calls.push(args);c.target(34);assert.equal(calls[0][2].temperature,30);c.target(23.2);assert.equal(calls[1][2].temperature,23);c.target(29,'target_temp_low');assert.equal(calls[2][2].target_temp_low,24);c.target(15,'target_temp_high');assert.equal(calls[3][2].target_temp_high,19)});
test('climate does not send a command for missing values or unavailable entity',()=>{const {Climate}=classes();const c=new Climate();c.config={entity:'climate.test'};c.hass={states:{'climate.test':{state:'unavailable',attributes:{}}}};c.call=()=>assert.fail('unexpected service call');c.target(22);c.target('')});
test('service errors are surfaced and allow retry',async()=>{const {Base}=classes();const c=new Base();c.hass={services:{button:{press:{}}},callService:async()=>{throw new Error('Device offline')}};await c.call('button.press','button.test');assert.equal(c.error,'Device offline');assert.equal(c.busy,false);c.hass.callService=async()=>{};await c.call('button.press','button.test');assert.equal(c.error,'')});
test('missing service cannot be dispatched',async()=>{const {Base}=classes();const c=new Base();c.hass={services:{},callService:()=>assert.fail('unexpected command')};await c.call('button.press','button.test');assert.ok(c.error)});
test('drag-generated clicks suppressed but keyboard clicks preserved',()=>{const {Base}=classes();const c=new Base();c.guardPress({clientX:1,clientY:1,pointerId:1});c.guardMove({clientX:1,clientY:30,pointerId:1});let prevented=0;c.guardClick({detail:1,stopPropagation(){},preventDefault(){prevented++}});assert.equal(prevented,1);c.guardClick({detail:0,stopPropagation(){},preventDefault(){prevented++}});assert.equal(prevented,1)});
