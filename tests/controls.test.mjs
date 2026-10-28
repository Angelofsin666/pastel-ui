import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as profiles from '../src/profiles.js';
const html=(strings,...values)=>strings.map((s,i)=>s+(values[i]??'')).join('');
function classes(){
 const ctx={...profiles,html,styles:[],COLORS:{blue:['x','y']},LitElement:class{},illustration:()=>'',CustomEvent:class{},document:{}};
 vm.createContext(ctx);
 for(const file of ['base-card','appliance-card'])vm.runInContext(fs.readFileSync(new URL(`../src/${file}.js`,import.meta.url),'utf8').replace(/^import.*$/gm,'').replaceAll('export class','class').replaceAll('export const','const'),ctx);
 return {Appliance:vm.runInContext('ApplianceCard',ctx),Base:vm.runInContext('BaseCard',ctx)};
}
test('never-used button stays enabled; unavailable button is disabled',()=>{const {Appliance}=classes();const c=new Appliance();c.hass={states:{'button.test':{state:'unknown',attributes:{}}},services:{button:{press:{}}}};assert.match(c.control({entity:'button.test'}),/\?disabled=false/);c.hass.states['button.test'].state='unavailable';assert.match(c.control({entity:'button.test'}),/\?disabled=true/)});
test('power switch is labelled as power, not programme start',()=>{const {Appliance}=classes();const c=new Appliance();c.hass={states:{'switch.test':{state:'off',attributes:{}}},services:{switch:{turn_on:{}}}};const view=c.control({entity:'switch.test'});assert.match(view,/Alimentazione/);assert.doesNotMatch(view,/Avvia/)});
test('service errors are surfaced and allow retry',async()=>{const {Base}=classes();const c=new Base();c.hass={services:{button:{press:{}}},callService:async()=>{throw new Error('Device offline')}};await c.call('button.press','button.test');assert.equal(c.error,'Device offline');assert.equal(c.busy,false);c.hass.callService=async()=>{};await c.call('button.press','button.test');assert.equal(c.error,'')});
test('missing service cannot be dispatched',async()=>{const {Base}=classes();const c=new Base();c.hass={services:{},callService:()=>assert.fail('unexpected command')};await c.call('button.press','button.test');assert.ok(c.error)});
test('drag-generated clicks suppressed but keyboard clicks preserved',()=>{const {Base}=classes();const c=new Base();c.guardPress({clientX:1,clientY:1,pointerId:1});c.guardMove({clientX:1,clientY:30,pointerId:1});let prevented=0;c.guardClick({detail:1,stopPropagation(){},preventDefault(){prevented++}});assert.equal(prevented,1);c.guardClick({detail:0,stopPropagation(){},preventDefault(){prevented++}});assert.equal(prevented,1)});
