// Public picker names are centralized here; configuration type IDs remain stable.
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
    "description": "Room temperature sensors.",
    "preview": true
  },
  {
    "type": "pastel-temp-humidity-card",
    "name": "Pastel Temperature & Humidity",
    "description": "Room temperature and humidity sensors.",
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
  }
];

export const RETIRED_TYPES = new Set(['pastel-climate-card','pastel-clima-card','pastel-thermostat-card']);

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
  if (existing) Object.assign(existing, entry);
  else cards.push({...entry});
 }
 return cards;
}
