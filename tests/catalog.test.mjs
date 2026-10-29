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
 assert.equal(target.customCards.length,104);
 assert.equal(target.customCards[0],existing);
 assert.equal(existing.name,'Pastel Alarm');
 assert.equal(typeof existing.getEntitySuggestion,'function');
 assert.equal(new Set(target.customCards.map(c=>c.type)).size,104);
});

test('all 104 picker names use one English naming convention and preserve type IDs',()=>{
 const expected=['Pastel Alarm','Pastel Security Overview','Pastel Cameras','Pastel Climate AC','Pastel Pellet Stove','Pastel Appliance','Pastel Robot','Pastel Lights','Pastel Covers','Pastel Weather','Pastel TV','Pastel Christmas Tree','Pastel Button','Pastel Openings','Pastel Doors & Windows','Pastel Motion & Presence','Pastel Water Leak','Pastel Smoke & CO','Pastel Temperature','Pastel Dishwasher','Pastel Lawn Mower','Pastel Pool','Pastel Sump Pumps','Pastel Water Booster','Pastel Coffee Machine','Pastel Air Fryer','Pastel Boiler','Pastel Hot Water','Pastel EV Charger','Pastel Pool Robot','Pastel 3D Printer','Pastel Printer','Pastel Rainwater Tank','Pastel Ventilation','Pastel Range Hood','Pastel Litter Robot','Pastel Pet Bowls','Pastel Chicken Feeder','Pastel Irrigation','Pastel Solar','Pastel Home Battery','Pastel Garage & Gate','Pastel Doorbell','Pastel Smart Lock','Pastel Air Quality','Pastel Water Safety'];
 expected.splice(4,0,'Pastel Thermostat','Pastel Radiator Valves');
 expected.splice(expected.indexOf('Pastel Covers')+1,0,'Pastel Awning','Pastel Curtains');
 expected.push('Pastel UPS','Pastel Home Network','Pastel Electric Car','Pastel Aquarium','Pastel Greenhouse','Pastel Mailbox','Pastel Kitchen Robot','Pastel Waste Collection','Pastel Fan Heater','Pastel Infrared Panel');
 expected.push('Pastel Safe','Pastel Adjustable Bed','Pastel Electric Blanket','Pastel Garden Fountain','Pastel Window Cleaner','Pastel Skylight','Pastel Air Compressor','Pastel Stairlift','Pastel Fish Feeder','Pastel Shower','Pastel Smart Desk','Pastel Outdoor Grill','Pastel Snow Melt','Pastel Septic Tank','Pastel Generator','Pastel NAS','Pastel Water Meter','Pastel Gas Meter','Pastel Power Panel','Pastel Air Purifier','Pastel Air Multiplier','Pastel Ice Maker','Pastel Bread Maker','Pastel Toaster','Pastel Smart Toothbrush','Pastel Smart Mirror','Pastel Smart Toilet');
 expected.push('Pastel Humidifier','Pastel Wine Cellar','Pastel Water Softener','Pastel Sauna','Pastel Electric Fireplace','Pastel Parcel Box','Pastel Smart Scale','Pastel Compost Bin','Pastel Aroma Diffuser','Pastel Bird Feeder');
 expected.push('Pastel Chicken Coop','Pastel Parking Spot','Pastel Hydroponic Garden','Pastel Treadmill','Pastel E-Bike','Pastel Energy Tariff','Pastel Electric Scooter');
 assert.deepEqual(CARD_CATALOG.map(c=>c.name),expected);
 assert.ok(CARD_CATALOG.every(c=>c.type.startsWith('pastel-')&&c.preview));
 const target={};registerCardCatalog(target);assert.equal(target.customCards.length,104);
});
