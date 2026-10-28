// Public picker names are centralized here; configuration type IDs remain stable.
import {EQUIPMENT,EQUIPMENT_KEYS,equipmentType} from './equipment-model.js';
export const CARD_CATALOG = [
  {
    "type": "pastel-alarm-card",
    "name": "Pastel Alarm",
    "description": "Alarm panel and script controls with customizable buttons.",
    "preview": true
  },
  {
    "type": "pastel-security-card",
    "name": "Pastel Security Overview",
    "description": "Alarm status, open doors and windows, and safety sensors.",
    "preview": true
  },
  {
    "type": "pastel-script-climate-card",
    "name": "Pastel Climate AC",
    "description": "Script-controlled air conditioning with a temperature sensor.",
    "preview": true
  },
  {
    "type": "pastel-native-thermostat-card",
    "name": "Pastel Thermostat",
    "description": "Native Home Assistant climate control with supported modes and target temperature.",
    "preview": true
  },
  {
    "type": "pastel-radiator-valves-card",
    "name": "Pastel Radiator Valves",
    "description": "Multiple thermostatic radiator valves with live room temperatures and native climate controls.",
    "preview": true
  },
  {
    "type": "pastel-stove-card",
    "name": "Pastel Pellet Stove",
    "description": "Pellet stove scripts, value controls, status and pellet level.",
    "preview": true
  },
  {
    "type": "pastel-appliance-card",
    "name": "Pastel Appliance",
    "description": "Appliance sensors and controls for air, water, laundry and kitchen devices.",
    "preview": true
  },
  {
    "type": "pastel-robot-card",
    "name": "Pastel Robot",
    "description": "Robot cleaning and gardening controls, maps and zones.",
    "preview": true
  },
  {
    "type": "pastel-lights-card",
    "name": "Pastel Lights",
    "description": "Light controls, brightness and status.",
    "preview": true
  },
{
  "type": "pastel-covers-card",
  "name": "Pastel Covers",
  "description": "Roller shutter controls, real positions and group commands.",
  "preview": true
},
  {"type":"pastel-awning-card","name":"Pastel Awning","description":"Motorized outdoor awning with live fabric position and cover or script controls.","preview":true},
  {"type":"pastel-curtains-card","name":"Pastel Curtains","description":"Motorized indoor curtains with live fabric position and cover or script controls.","preview":true},
  {
    "type": "pastel-weather-card",
    "name": "Pastel Weather",
    "description": "Current weather and daily forecast from a Home Assistant weather entity.",
    "preview": true
  },
  {
    "type": "pastel-tv-card",
    "name": "Pastel TV",
    "description": "Television controls, volume and source when supported by the media player.",
    "preview": true
  },
  {
    "type": "pastel-christmas-tree-card",
    "name": "Pastel Christmas Tree",
    "description": "Christmas garland with live light status, brightness and customizable atmospheres.",
    "preview": true
  },
  {
    "type": "pastel-button-card",
    "name": "Pastel Button",
    "description": "Customizable action buttons.",
    "preview": true
  },
  {
    "type": "pastel-openings-card",
    "name": "Pastel Openings",
    "description": "Doors, windows and other opening sensors.",
    "preview": true
  },
  {
    "type": "pastel-doors-windows-card",
    "name": "Pastel Doors & Windows",
    "description": "Door and window status.",
    "preview": true
  },
  {
    "type": "pastel-motion-presence-card",
    "name": "Pastel Motion & Presence",
    "description": "Motion and occupancy sensors.",
    "preview": true
  },
  {
    "type": "pastel-water-leak-card",
    "name": "Pastel Water Leak",
    "description": "Water leak sensor status.",
    "preview": true
  },
  {
    "type": "pastel-smoke-co-card",
    "name": "Pastel Smoke & CO",
    "description": "Smoke and carbon monoxide sensor status.",
    "preview": true
  },
  {
    "type": "pastel-temp-card",
    "name": "Pastel Temperature",
    "description": "Room temperature tiles, optional humidity, averages and history trends.",
    "preview": true
  },
  {
    "type": "pastel-dishwasher-card",
    "name": "Pastel Dishwasher",
    "description": "Dishwasher cycle and power monitoring.",
    "preview": true
  },
  {
    "type": "pastel-lawn-mower-card",
    "name": "Pastel Lawn Mower",
    "description": "Lawn mower controls and battery status.",
    "preview": true
  },
  ...EQUIPMENT_KEYS.map(key=>({type:equipmentType(key),name:EQUIPMENT[key].name,description:`${EQUIPMENT[key].subtitle} with configurable sensors and actions.`,preview:true}))
];

export const RETIRED_TYPES = new Set(['pastel-climate-card','pastel-clima-card','pastel-thermostat-card','pastel-temp-humidity-card']);

export function registerCardCatalog(target = window) {
 const cards = target.customCards ||= [];
 const seen = new Set();
 // Home Assistant retains this array by reference. Never replace it.
 for (let i = 0; i < cards.length;) {
  if (RETIRED_TYPES.has(cards[i].type) || seen.has(cards[i].type)) cards.splice(i, 1);
  else { seen.add(cards[i].type); i++; }
 }
 for (const entry of CARD_CATALOG) {
  const existing = cards.find(card => card.type === entry.type);
  const metadata={...entry,documentationURL:'https://github.com/Angelofsin666/pastel-ui/blob/main/docs/catalog.md'};
  if (existing) Object.assign(existing, metadata);
  else cards.push(metadata);
 }
 return cards;
}
