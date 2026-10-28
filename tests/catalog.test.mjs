import test from 'node:test';
import assert from 'node:assert/strict';
import {CARD_CATALOG,registerCardCatalog,RETIRED_TYPES} from '../src/card-catalog.js';

test('Home Assistant cached registry sees alarm cards after suite registration',()=>{
 const other={type:'other-card',name:'Another card'};
 const target={customCards:[other,{type:'pastel-stove-card',name:'Pastel Stufa'},{type:'pastel-climate-card',name:'Retired'}]};
 const haCachedCards=target.customCards;
 registerCardCatalog(target);
 assert.equal(target.customCards,haCachedCards);
 assert.equal(haCachedCards.find(c=>c.type==='pastel-alarm-card').name,'Pastel Alarm');
 assert.equal(haCachedCards.find(c=>c.type==='pastel-security-card').name,'Pastel Security Overview');
 assert.equal(haCachedCards.find(c=>c.type==='pastel-stove-card').name,'Pastel Pellet Stove');
 assert.equal(haCachedCards[0],other);
 assert.ok(!haCachedCards.some(c=>RETIRED_TYPES.has(c.type)));
});

test('registration updates existing metadata in place and is idempotent',()=>{
 const existing={type:'pastel-alarm-card',name:'Old name',getEntitySuggestion:()=>null};
 const target={customCards:[existing,{...existing}]};
 registerCardCatalog(target);registerCardCatalog(target);
 assert.equal(target.customCards.length,17);
 assert.equal(target.customCards[0],existing);
 assert.equal(existing.name,'Pastel Alarm');
 assert.equal(typeof existing.getEntitySuggestion,'function');
 assert.equal(new Set(target.customCards.map(c=>c.type)).size,17);
});

test('all 17 picker names use one English naming convention and preserve type IDs',()=>{
 const expected=['Pastel Alarm','Pastel Security Overview','Pastel Climate AC','Pastel Pellet Stove','Pastel Appliance','Pastel Robot','Pastel Lights','Pastel Covers','Pastel Button','Pastel Openings','Pastel Doors & Windows','Pastel Motion & Presence','Pastel Water Leak','Pastel Smoke & CO','Pastel Temperature','Pastel Dishwasher','Pastel Lawn Mower'];
 assert.deepEqual(CARD_CATALOG.map(c=>c.name),expected);
 assert.ok(CARD_CATALOG.every(c=>c.type.startsWith('pastel-')&&c.preview));
 const target={};registerCardCatalog(target);assert.equal(target.customCards.length,17);
});
