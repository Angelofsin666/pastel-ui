import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
function load(name){
 let Card;const timers=new Map(),listeners=new Map(),calls=[];let t=0;
 const text=(strings,...values)=>strings.map((s,i)=>s+(values[i]??'')).join('');
 const context={registerLegacy:(n,c)=>{if(!n.endsWith('-editor'))Card=c},LitElement:class{disconnectedCallback(){}},html:text,css:text,unsafeHTML:s=>s,window:{customCards:[],addEventListener:(n,f)=>listeners.set(n,f),removeEventListener:(n)=>listeners.delete(n)},setTimeout:f=>{timers.set(++t,f);return t},clearTimeout:id=>timers.delete(id),Event:class{}};
 const source=fs.readFileSync(new URL(`../src/legacy/${name}.js`,import.meta.url),'utf8').replace(/^import.*$/gm,'');vm.runInNewContext(source,context);
 const card=new Card();card.setConfig({entities:[]});card.hass={states:{},callService:(...a)=>calls.push(a)};return {card,timers,listeners,calls};
}
const event=(extra={})=>({pointerId:1,button:0,clientX:20,clientY:20,stopPropagation(){},...extra});
test('openings hold canceled on scroll and pointercancel',()=>{const {card,timers}=load('pastel-openings-card');const item={id:'binary_sensor.test'};card._onPointerDown(item,event());card._onPointerMove(item,event({clientY:60}));assert.equal(timers.size,0);card._onPointerUp(item,event({clientY:60}));assert.equal(timers.size,0);card._onPointerDown(item,event());card._onPointerLeave(item);assert.equal(timers.size,0)});
test('openings disconnect cancels pending holds',()=>{const {card,timers}=load('pastel-openings-card');card._onPointerDown({id:'x'},event());card.disconnectedCallback();assert.equal(timers.size,0)});
test('thermostat vertical scroll sends no command',()=>{const {card,calls,listeners}=load('pastel-thermostat-card');card.setConfig({target_entity:'input_number.target',target_service:'input_number.set_value'});card._onSliderPointerDown(event({currentTarget:{getBoundingClientRect:()=>({left:0,width:100})}}));listeners.get('pointermove')(event({clientY:80}));assert.equal(calls.length,0);assert.equal(listeners.size,0)});
test('thermostat number service uses value and commits at release',()=>{const {card,calls,listeners}=load('pastel-thermostat-card');card.setConfig({target_entity:'input_number.target',target_service:'input_number.set_value'});card._onSliderPointerDown(event({currentTarget:{getBoundingClientRect:()=>({left:0,width:100})}}));assert.equal(calls.length,0);listeners.get('pointerup')(event({clientX:50}));assert.equal(calls[0][2].value,23);assert.equal(calls[0][2].temperature,undefined);assert.equal(listeners.size,0)});
for(const name of ['pastel-smoke-co-card','pastel-water-leak-card'])test(`${name} missing sensor is not reported as healthy`,()=>{const {card}=load(name);card.setConfig({entities:['binary_sensor.missing']});card.hass.states['binary_sensor.missing']={state:'unavailable',attributes:{}};const rendered=card.render();assert.match(rendered,/dati mancanti/);assert.doesNotMatch(rendered,/tutto ok/)});
