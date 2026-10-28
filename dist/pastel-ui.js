var Ua=Object.defineProperty;var Ba=(s,t,e)=>t in s?Ua(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var q=(s,t,e)=>Ba(s,typeof t!="symbol"?t+"":t,e);var N={pool:{name:"Pastel Pool",title:"Piscina",subtitle:"Acqua e filtrazione",icon:"mdi:pool",color:"blue",art:"pool",hero:"Temperatura acqua",metrics:[["ph","pH"],["chlorine","Cloro libero"],["filtration","Filtrazione"]],buttons:[["Avvia","mdi:play"],["Ferma","mdi:stop"],["Pulizia","mdi:creation"]]},sump:{name:"Pastel Sump Pumps",title:"Pompe anti-allagamento",subtitle:"Protezione sotterranei",icon:"mdi:water-pump",color:"blue",art:"sump",hero:"Livello pozzetto",metrics:[["pump_a","Pompa A"],["pump_b","Pompa B"],["alarm","Allarme allagamento"]],buttons:[["Test pompa A","mdi:water-pump"],["Test pompa B","mdi:water-pump"],["Automatico","mdi:auto-mode"]]},booster:{name:"Pastel Water Booster",title:"Pompa di rilancio",subtitle:"Pressione e portata",icon:"mdi:water-pump",color:"mint",art:"booster",hero:"Pressione attuale",metrics:[["flow","Portata"],["pump","Stato pompa"],["target","Pressione desiderata"]],buttons:[["Automatico","mdi:auto-mode"],["Avvia","mdi:play"],["Ferma","mdi:stop"]]},coffee:{name:"Pastel Coffee Machine",title:"Macchina del caff\xE8",subtitle:"Pronta per una pausa",icon:"mdi:coffee-maker-outline",color:"peach",art:"coffee",hero:"Stato macchina",metrics:[["water","Acqua"],["beans","Chicchi"],["maintenance","Manutenzione"]],buttons:[["Espresso","mdi:coffee"],["Caff\xE8 lungo","mdi:coffee-outline"]]},fryer:{name:"Pastel Air Fryer",title:"Friggitrice ad aria",subtitle:"Cottura",icon:"mdi:pot-steam-outline",color:"peach",art:"fryer",hero:"Tempo rimanente",metrics:[["temperature","Temperatura"],["program","Programma"],["power","Potenza"]],buttons:[["Avvia","mdi:play"],["Pausa","mdi:pause"],["Ferma","mdi:stop"]]},boiler:{name:"Pastel Boiler",title:"Caldaia",subtitle:"Riscaldamento",icon:"mdi:radiator",color:"amber",art:"boiler",hero:"Temperatura mandata",metrics:[["pressure","Pressione"],["burner","Bruciatore"],["mode","Modalit\xE0"]],buttons:[["Inverno","mdi:snowflake"],["Estate","mdi:weather-sunny"]]},hot_water:{name:"Pastel Hot Water",title:"Acqua sanitaria",subtitle:"Accumulo",icon:"mdi:water-boiler",color:"peach",art:"hot_water",hero:"Temperatura accumulo",metrics:[["target","Temperatura desiderata"],["heating","Riscaldamento"],["energy","Energia"]],buttons:[["Boost","mdi:lightning-bolt"],["Eco","mdi:leaf"]]},ev:{name:"Pastel EV Charger",title:"Ricarica auto",subtitle:"Colonnina elettrica",icon:"mdi:ev-station",color:"mint",art:"ev",hero:"Potenza di ricarica",metrics:[["energy","Energia sessione"],["limit","Limite corrente"],["finish","Fine prevista"]],buttons:[["Avvia","mdi:play"],["Pausa","mdi:pause"],["Riprendi","mdi:play"]]},pool_robot:{name:"Pastel Pool Robot",title:"Robot piscina",subtitle:"Pulizia piscina",icon:"mdi:robot",color:"blue",art:"pool_robot",hero:"Avanzamento",metrics:[["battery","Batteria"],["mode","Modalit\xE0"],["remaining","Tempo rimanente"]],buttons:[["Avvia","mdi:play"],["Pausa","mdi:pause"],["Ritorna","mdi:home"]]},printer_3d:{name:"Pastel 3D Printer",title:"Stampante 3D",subtitle:"Stampa e materiali",icon:"mdi:printer-3d",color:"lavender",art:"printer_3d",hero:"Avanzamento stampa",metrics:[["nozzle","Ugello"],["bed","Piano"],["remaining","Tempo rimanente"],["filament","Filamento"]],buttons:[["Pausa","mdi:pause"],["Riprendi","mdi:play"],["Ferma","mdi:stop"]]},printer:{name:"Pastel Printer",title:"Stampante",subtitle:"Documenti e consumabili",icon:"mdi:printer",color:"blue",art:"printer",hero:"Stato stampante",metrics:[["ink","Inchiostro o toner"],["paper","Carta"],["queue","Coda di stampa"],["error","Attenzione"]],buttons:[["Pulizia","mdi:creation"],["Scansione","mdi:content-copy"]]},rain_tank:{name:"Pastel Rainwater Tank",title:"Raccolta acqua piovana",subtitle:"Riserva idrica",icon:"mdi:water",color:"blue",art:"rain_tank",hero:"Livello serbatoio",metrics:[["volume","Acqua disponibile"],["inflow","Ingresso"],["outflow","Uscita"],["overflow","Troppo pieno"]],buttons:[["Pompa","mdi:water-pump"],["Irrigazione","mdi:sprinkler"]]},ventilation:{name:"Pastel Ventilation",title:"VMC",subtitle:"Ricambio aria",icon:"mdi:air-filter",color:"mint",art:"ventilation",hero:"Qualit\xE0 aria",metrics:[["co2","CO\u2082"],["humidity","Umidit\xE0"],["speed","Velocit\xE0"],["filter","Filtro"]],buttons:[["Auto","mdi:auto-mode"],["Boost","mdi:fan-plus"],["Quiet","mdi:weather-night"]]},range_hood:{name:"Pastel Range Hood",title:"Cappa cucina",subtitle:"Aspirazione",icon:"mdi:air-filter",color:"peach",art:"range_hood",hero:"Velocit\xE0 aspirazione",metrics:[["power","Potenza"],["light","Luce"],["filter","Filtro"],["air","Qualit\xE0 aria"]],buttons:[["Luce","mdi:lightbulb"],["Boost","mdi:fan-plus"],["Spegni","mdi:power-off"]]},litter_robot:{name:"Pastel Litter Robot",title:"Lettiera robot",subtitle:"Pulizia e riempimento",icon:"mdi:cat",color:"lavender",art:"litter_robot",hero:"Riempimento cassetto",metrics:[["cycle","Stato ciclo"],["litter","Lettiera"],["weight","Peso"],["last_clean","Ultima pulizia"]],buttons:[["Pulisci","mdi:creation"],["Pausa","mdi:pause"],["Svuota","mdi:delete-outline"]]},pet_bowls:{name:"Pastel Pet Bowls",title:"Ciotole animali",subtitle:"Acqua e cibo",icon:"mdi:paw",color:"mint",art:"pet_bowls",hero:"Acqua disponibile",metrics:[["food","Cibo disponibile"],["water","Serbatoio acqua"],["filter","Filtro acqua"],["last_feed","Ultimo pasto"]],buttons:[["Acqua","mdi:water"],["Cibo","mdi:food-variant"]]},chicken_feeder:{name:"Pastel Chicken Feeder",title:"Mangiatoia galline",subtitle:"Alimentazione automatica",icon:"mdi:food-variant",color:"amber",art:"chicken_feeder",hero:"Mangime disponibile",metrics:[["next_feed","Prossimo pasto"],["today","Pasti oggi"],["motor","Motore"],["battery","Batteria"]],buttons:[["Distribuisci","mdi:food-variant"],["Pausa","mdi:pause"],["Programma","mdi:calendar-clock"]]},irrigation:{name:"Pastel Irrigation",title:"Irrigazione",subtitle:"Zone del giardino",icon:"mdi:sprinkler",color:"mint",art:"irrigation",hero:"Stato impianto",metrics:[["next_run","Prossima irrigazione"],["water","Acqua usata"],["rain","Pioggia rilevata"]],buttons:[["Avvia tutto","mdi:play"],["Ferma tutto","mdi:stop"]],zones:!0},solar:{name:"Pastel Solar",title:"Fotovoltaico",subtitle:"Energia solare",icon:"mdi:solar-power",color:"amber",art:"solar",hero:"Produzione attuale",metrics:[["home","Consumo casa"],["grid","Scambio rete"],["battery","Batteria"],["today","Produzione oggi"]],buttons:[]},home_battery:{name:"Pastel Home Battery",title:"Batterie di accumulo",subtitle:"Energia immagazzinata",icon:"mdi:battery-high",color:"mint",art:"home_battery",hero:"Carica attuale",metrics:[["power","Potenza"],["mode","Modalit\xE0"],["autonomy","Autonomia"],["energy","Energia disponibile"]],buttons:[["Auto","mdi:auto-mode"],["Riserva","mdi:battery-lock"],["Scarica","mdi:battery-arrow-down"]]},garage_gate:{name:"Pastel Garage & Gate",title:"Garage e cancello",subtitle:"Accesso carrabile",icon:"mdi:garage",color:"blue",art:"garage_gate",hero:"Basculante",metrics:[["gate","Cancello esterno"],["obstacle","Sensore ostacoli"]],buttons:[],native:"cover"},doorbell:{name:"Pastel Doorbell",title:"Videocitofono",subtitle:"Ingresso principale",icon:"mdi:video",color:"blue",art:"doorbell",hero:"Anteprima telecamera",metrics:[["last_call","Ultima chiamata"],["motion","Movimento"]],buttons:[],camera:!0},smart_lock:{name:"Pastel Smart Lock",title:"Porta d\u2019ingresso",subtitle:"Serratura intelligente",icon:"mdi:lock",color:"lavender",art:"smart_lock",hero:"Serratura",metrics:[["contact","Contatto porta"],["battery","Batteria"],["last_access","Ultimo accesso"]],buttons:[],native:"lock"},air_quality:{name:"Pastel Air Quality",title:"Qualit\xE0 dell\u2019aria",subtitle:"Ambiente",icon:"mdi:air-filter",color:"mint",art:"air_quality",hero:"CO\u2082 attuale",metrics:[["pm25","PM2.5"],["humidity","Umidit\xE0"],["temperature","Temperatura"],["voc","VOC"]],buttons:[]},water_safety:{name:"Pastel Water Safety",title:"Protezione acqua",subtitle:"Casa",icon:"mdi:shield-check",color:"mint",art:"water_safety",hero:"Valvola generale",metrics:[["today","Consumo oggi"],["flow","Portata attuale"]],buttons:[],native:"valve",leak_sensors:!0},ups:{name:"Pastel UPS",title:"Gruppo di continuit\xE0",subtitle:"Alimentazione di emergenza",icon:"mdi:battery-charging",color:"blue",art:"ups",hero:"Carica batteria",metrics:[["runtime","Autonomia"],["load","Carico"],["input","Tensione ingresso"],["output","Potenza uscita"]],buttons:[["Test","mdi:check-circle-outline"]]},home_network:{name:"Pastel Home Network",title:"Rete di casa",subtitle:"Connessione e dispositivi",icon:"mdi:router-wireless",color:"mint",art:"home_network",hero:"Velocit\xE0 download",metrics:[["upload","Upload"],["latency","Latenza"],["devices","Dispositivi"],["signal","Segnale"]],buttons:[["Riavvia","mdi:restart"]]},electric_car:{name:"Pastel Electric Car",title:"Auto elettrica",subtitle:"Batteria e autonomia",icon:"mdi:car-electric",color:"lavender",art:"electric_car",hero:"Carica batteria",metrics:[["range","Autonomia"],["charging","Ricarica"],["location","Posizione"],["climate","Clima"]],buttons:[["Climatizza","mdi:air-conditioner"],["Trova","mdi:map-marker"]]},aquarium:{name:"Pastel Aquarium",title:"Acquario",subtitle:"Acqua e attrezzature",icon:"mdi:fish",color:"blue",art:"aquarium",hero:"Temperatura acqua",metrics:[["ph","pH"],["filter","Filtro"],["light","Luce"],["level","Livello acqua"]],buttons:[["Luci","mdi:lightbulb"],["Nutrimento","mdi:food-variant"]]},greenhouse:{name:"Pastel Greenhouse",title:"Serra",subtitle:"Clima e irrigazione",icon:"mdi:greenhouse",color:"mint",art:"greenhouse",hero:"Temperatura interna",metrics:[["humidity","Umidit\xE0"],["soil","Terreno"],["light","Luce"],["water","Acqua"]],buttons:[["Irriga","mdi:water"],["Ventila","mdi:fan"]]},mailbox:{name:"Pastel Mailbox",title:"Cassetta postale",subtitle:"Posta in arrivo",icon:"mdi:mailbox",color:"pink",art:"mailbox",hero:"Stato cassetta",metrics:[["last_delivery","Ultima consegna"],["door","Sportello"],["count","Consegne"]],buttons:[["Segna letta","mdi:check"]]},kitchen_robot:{name:"Pastel Kitchen Robot",title:"Robot da cucina",subtitle:"Cottura e preparazione",icon:"mdi:pot-steam-outline",color:"peach",art:"kitchen_robot",hero:"Tempo rimanente",metrics:[["temperature","Temperatura"],["speed","Velocit\xE0"],["program","Programma"],["bowl","Stato boccale"]],buttons:[["Pausa","mdi:pause"],["Ferma","mdi:stop"],["Velocit\xE0 +","mdi:plus"]]},waste_collection:{name:"Pastel Waste Collection",title:"Raccolta rifiuti",subtitle:"Prossime raccolte",icon:"mdi:recycle",color:"blue",art:"waste_collection",hero:"Prossima raccolta",metrics:[],buttons:[],waste_items:!0}},zi=Object.keys(N),Wa={sump:"sump-pumps",booster:"water-booster",coffee:"coffee-machine",fryer:"air-fryer",ev:"ev-charger",printer_3d:"3d-printer"},H=s=>`pastel-${Wa[s]||s.replaceAll("_","-")}-card`,A=s=>!!s&&!["unknown","unavailable"].includes(s.state),ke=(s,t)=>{let e=s?.states?.[t];if(!A(e))return"\u2014";let i=e.attributes?.unit_of_measurement||"";return`${{on:"Acceso",off:"Spento"}[e.state]||e.state}${i?(i==="%"||i.startsWith("\xB0")?"":" ")+i:""}`},Pt=(s,t)=>{let e=s?.states?.[t],i=Number(e?.state);return A(e)&&e.attributes?.unit_of_measurement==="%"&&Number.isFinite(i)?Math.max(0,Math.min(100,i)):null},Nt=(s,t)=>({cover:{open:"Aperta",closed:"Chiusa",opening:"In apertura",closing:"In chiusura"},lock:{locked:"Chiusa",unlocked:"Sbloccata",open:"Aperta",locking:"In chiusura",unlocking:"In apertura"},valve:{open:"Aperta",closed:"Chiusa",opening:"In apertura",closing:"In chiusura"}})[s]?.[t]||{unavailable:"Non disponibile",unknown:"Stato sconosciuto"}[t]||t||"Non configurato";function ht(s,t){let e=s?.states?.[t];if(!A(e))return"\u2014";let i=t?.split(".")[0];if(["cover","lock","valve"].includes(i))return Nt(i,e.state);if(i==="binary_sensor"){let a=e.attributes?.device_class,r={door:["Aperta","Chiusa"],garage_door:["Aperta","Chiusa"],opening:["Aperta","Chiusa"],window:["Aperta","Chiusa"],moisture:["Perdita","Asciutto"],motion:["Movimento","Assente"],occupancy:["Presente","Assente"],problem:["Problema","Regolare"]};if(r[a])return r[a][e.state==="on"?0:1]}return ke(s,t)}var Se={cover:[["Apri","mdi:arrow-up","open_cover",1],["Ferma","mdi:stop","stop_cover",8],["Chiudi","mdi:arrow-down","close_cover",2]],lock:[["Blocca","mdi:lock","lock",0],["Sblocca","mdi:lock-open","unlock",0],["Apri porta","mdi:door-open","open",1]],valve:[["Apri acqua","mdi:water","open_valve",1],["Chiudi acqua","mdi:water-off","close_valve",2]]};function Ei(s,t,e){let i=Se[s]||[],a=Number(t?.attributes?.supported_features)||0;return i.map(([r,n,l,c])=>({name:r,icon:n,action:`${s}.${l}`,enabled:A(t)&&!!e?.[s]?.[l]&&(!c||!!(a&c))}))}function Ce(s,t=[]){if(!t.length)return"Sensori non configurati";let e=t.map(({entity:i})=>s?.states?.[i]);return e.some(i=>A(i)&&i.state==="on")?"Perdita rilevata":e.every(A)?"Tutto asciutto":"Sensori non disponibili"}function Mi(s,t){if(!t?.startsWith("camera.")||!A(s?.states?.[t]))return"";let e=s.states[t].attributes?.entity_picture||`/api/camera_proxy/${t}`;return/^https?:\/\//.test(e)?e:s.hassUrl?.(e)||e}function Ai(s){let t=s?.entity||"";if(s?.action)return{action:s.action,entity:t||void 0};let e=t.split(".")[0],i={script:"turn_on",scene:"turn_on",button:"press",input_button:"press",switch:"toggle",input_boolean:"toggle",automation:"trigger"}[e];return i?{action:`${e}.${i}`,entity:t}:null}var ze=(s,t)=>["switch","input_boolean"].includes((s||"").split(".")[0])?`${s.split(".")[0]}.${t?"turn_on":"turn_off"}`:"";function Ee(s,t){let e=typeof t=="string"?t:t?.entity,i=s?.states?.[e];if(!A(i))return"\u2014";if(e.startsWith("calendar.")){let a=i.attributes?.start_time,r=i.attributes?.message;if(!a&&!r)return"\u2014";let n=a?new Date(a):null,l=n&&!Number.isNaN(n.valueOf())?new Intl.DateTimeFormat("it-IT",{day:"numeric",month:"short"}).format(n):"";return[r||"Raccolta",l].filter(Boolean).join(" \xB7 ")}return["input_boolean","binary_sensor","switch"].includes(e.split(".")[0])?i.state===(t?.active_state||"on")?t?.active_label||"Da esporre":t?.inactive_label||"Non prevista":ht(s,e)}var Ha=[{type:"pastel-alarm-card",name:"Pastel Alarm",description:"Alarm panel and script controls with customizable buttons.",preview:!0},{type:"pastel-security-card",name:"Pastel Security Overview",description:"Alarm status, open doors and windows, and safety sensors.",preview:!0},{type:"pastel-script-climate-card",name:"Pastel Climate AC",description:"Script-controlled air conditioning with a temperature sensor.",preview:!0},{type:"pastel-native-thermostat-card",name:"Pastel Thermostat",description:"Native Home Assistant climate control with supported modes and target temperature.",preview:!0},{type:"pastel-stove-card",name:"Pastel Pellet Stove",description:"Pellet stove scripts, value controls, status and pellet level.",preview:!0},{type:"pastel-appliance-card",name:"Pastel Appliance",description:"Appliance sensors and controls for air, water, laundry and kitchen devices.",preview:!0},{type:"pastel-robot-card",name:"Pastel Robot",description:"Robot cleaning and gardening controls, maps and zones.",preview:!0},{type:"pastel-lights-card",name:"Pastel Lights",description:"Light controls, brightness and status.",preview:!0},{type:"pastel-covers-card",name:"Pastel Covers",description:"Roller shutter controls, real positions and group commands.",preview:!0},{type:"pastel-weather-card",name:"Pastel Weather",description:"Current weather and daily forecast from a Home Assistant weather entity.",preview:!0},{type:"pastel-tv-card",name:"Pastel TV",description:"Television controls, volume and source when supported by the media player.",preview:!0},{type:"pastel-christmas-tree-card",name:"Pastel Christmas Tree",description:"Christmas garland with live light status, brightness and customizable atmospheres.",preview:!0},{type:"pastel-button-card",name:"Pastel Button",description:"Customizable action buttons.",preview:!0},{type:"pastel-openings-card",name:"Pastel Openings",description:"Doors, windows and other opening sensors.",preview:!0},{type:"pastel-doors-windows-card",name:"Pastel Doors & Windows",description:"Door and window status.",preview:!0},{type:"pastel-motion-presence-card",name:"Pastel Motion & Presence",description:"Motion and occupancy sensors.",preview:!0},{type:"pastel-water-leak-card",name:"Pastel Water Leak",description:"Water leak sensor status.",preview:!0},{type:"pastel-smoke-co-card",name:"Pastel Smoke & CO",description:"Smoke and carbon monoxide sensor status.",preview:!0},{type:"pastel-temp-card",name:"Pastel Temperature",description:"Room temperature tiles, optional humidity, averages and history trends.",preview:!0},{type:"pastel-dishwasher-card",name:"Pastel Dishwasher",description:"Dishwasher cycle and power monitoring.",preview:!0},{type:"pastel-lawn-mower-card",name:"Pastel Lawn Mower",description:"Lawn mower controls and battery status.",preview:!0},...zi.map(s=>({type:H(s),name:N[s].name,description:`${N[s].subtitle} with configurable sensors and actions.`,preview:!0}))],Za=new Set(["pastel-climate-card","pastel-clima-card","pastel-thermostat-card","pastel-temp-humidity-card"]);function Ti(s=window){let t=s.customCards||(s.customCards=[]),e=new Set;for(let i=0;i<t.length;)Za.has(t[i].type)||e.has(t[i].type)?t.splice(i,1):(e.add(t[i].type),i++);for(let i of Ha){let a=t.find(n=>n.type===i.type),r={...i,documentationURL:"https://github.com/Angelofsin666/pastel-ui/blob/main/docs/catalog.md"};a?Object.assign(a,r):t.push(r)}return t}var Me=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Ae=(s,t,e=null,i=null)=>{for(;t!==e;){let a=t.nextSibling;s.insertBefore(t,i),t=a}},Z=(s,t,e=null)=>{for(;t!==e;){let i=t.nextSibling;s.removeChild(t),t=i}};var T=`{{lit-${String(Math.random()).slice(2)}}}`,Te=`<!--${T}-->`,Pi=new RegExp(`${T}|${Te}`),rt="$lit$",Y=class{constructor(t,e){this.parts=[],this.element=e;let i=[],a=[],r=document.createTreeWalker(e.content,133,null,!1),n=0,l=-1,c=0,{strings:d,values:{length:p}}=t;for(;c<p;){let u=r.nextNode();if(u===null){r.currentNode=a.pop();continue}if(l++,u.nodeType===1){if(u.hasAttributes()){let g=u.attributes,{length:f}=g,v=0;for(let h=0;h<f;h++)Ni(g[h].name,rt)&&v++;for(;v-- >0;){let h=d[c],_=It.exec(h)[2],I=_.toLowerCase()+rt,M=u.getAttribute(I);u.removeAttribute(I);let F=M.split(Pi);this.parts.push({type:"attribute",index:l,name:_,strings:F}),c+=F.length-1}}u.tagName==="TEMPLATE"&&(a.push(u),r.currentNode=u.content)}else if(u.nodeType===3){let g=u.data;if(g.indexOf(T)>=0){let f=u.parentNode,v=g.split(Pi),h=v.length-1;for(let _=0;_<h;_++){let I,M=v[_];if(M==="")I=L();else{let F=It.exec(M);F!==null&&Ni(F[2],rt)&&(M=M.slice(0,F.index)+F[1]+F[2].slice(0,-rt.length)+F[3]),I=document.createTextNode(M)}f.insertBefore(I,u),this.parts.push({type:"node",index:++l})}v[h]===""?(f.insertBefore(L(),u),i.push(u)):u.data=v[h],c+=h}}else if(u.nodeType===8)if(u.data===T){let g=u.parentNode;(u.previousSibling===null||l===n)&&(l++,g.insertBefore(L(),u)),n=l,this.parts.push({type:"node",index:l}),u.nextSibling===null?u.data="":(i.push(u),l--),c++}else{let g=-1;for(;(g=u.data.indexOf(T,g+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(let u of i)u.parentNode.removeChild(u)}},Ni=(s,t)=>{let e=s.length-t.length;return e>=0&&s.slice(e)===t},mt=s=>s.index!==-1,L=()=>document.createComment(""),It=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var Pe=133;function Ne(s,t){let{element:{content:e},parts:i}=s,a=document.createTreeWalker(e,Pe,null,!1),r=gt(i),n=i[r],l=-1,c=0,d=[],p=null;for(;a.nextNode();){l++;let u=a.currentNode;for(u.previousSibling===p&&(p=null),t.has(u)&&(d.push(u),p===null&&(p=u)),p!==null&&c++;n!==void 0&&n.index===l;)n.index=p!==null?-1:n.index-c,r=gt(i,r),n=i[r]}d.forEach(u=>u.parentNode.removeChild(u))}var Ya=s=>{let t=s.nodeType===11?0:1,e=document.createTreeWalker(s,Pe,null,!1);for(;e.nextNode();)t++;return t},gt=(s,t=-1)=>{for(let e=t+1;e<s.length;e++){let i=s[e];if(mt(i))return e}return-1};function Ii(s,t,e=null){let{element:{content:i},parts:a}=s;if(e==null){i.appendChild(t);return}let r=document.createTreeWalker(i,Pe,null,!1),n=gt(a),l=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===e&&(l=Ya(t),e.parentNode.insertBefore(t,e));n!==-1&&a[n].index===c;){if(l>0){for(;n!==-1;)a[n].index+=l,n=gt(a,n);return}n=gt(a,n)}}var Li=new WeakMap,Ie=s=>((...t)=>{let e=s(...t);return Li.set(e,!0),e}),K=s=>typeof s=="function"&&Li.has(s);var z={},Lt={};var V=class{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(let i of this.__parts)i!==void 0&&i.setValue(t[e]),e++;for(let i of this.__parts)i!==void 0&&i.commit()}_clone(){let t=Me?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,a=document.createTreeWalker(t,133,null,!1),r=0,n=0,l,c=a.nextNode();for(;r<i.length;){if(l=i[r],!mt(l)){this.__parts.push(void 0),r++;continue}for(;n<l.index;)n++,c.nodeName==="TEMPLATE"&&(e.push(c),a.currentNode=c.content),(c=a.nextNode())===null&&(a.currentNode=e.pop(),c=a.nextNode());if(l.type==="node"){let d=this.processor.handleTextExpression(this.options);d.insertAfterNode(c.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,l.name,l.strings,this.options));r++}return Me&&(document.adoptNode(t),customElements.upgrade(t)),t}};var Ri=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),Ka=` ${T} `,R=class{constructor(t,e,i,a){this.strings=t,this.values=e,this.type=i,this.processor=a}getHTML(){let t=this.strings.length-1,e="",i=!1;for(let a=0;a<t;a++){let r=this.strings[a],n=r.lastIndexOf("<!--");i=(n>-1||i)&&r.indexOf("-->",n+1)===-1;let l=It.exec(r);l===null?e+=r+(i?Ka:Te):e+=r.substr(0,l.index)+l[1]+l[2]+rt+l[3]+T}return e+=this.strings[t],e}getTemplateElement(){let t=document.createElement("template"),e=this.getHTML();return Ri!==void 0&&(e=Ri.createHTML(e)),t.innerHTML=e,t}},ot=class extends R{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){let t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),Ae(e,i.firstChild),t}};var lt=s=>s===null||!(typeof s=="object"||typeof s=="function"),Rt=s=>Array.isArray(s)||!!(s&&s[Symbol.iterator]),nt=class{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let a=0;a<i.length-1;a++)this.parts[a]=this._createPart()}_createPart(){return new ft(this)}_getValue(){let t=this.strings,e=t.length-1,i=this.parts;if(e===1&&t[0]===""&&t[1]===""){let r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!Rt(r))return r}let a="";for(let r=0;r<e;r++){a+=t[r];let n=i[r];if(n!==void 0){let l=n.value;if(lt(l)||!Rt(l))a+=typeof l=="string"?l:String(l);else for(let c of l)a+=typeof c=="string"?c:String(c)}}return a+=t[e],a}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},ft=class{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==z&&(!lt(t)||t!==this.value)&&(this.value=t,K(t)||(this.committer.dirty=!0))}commit(){for(;K(this.value);){let t=this.value;this.value=z,t(this)}this.value!==z&&this.committer.commit()}},D=class s{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(L()),this.endNode=t.appendChild(L())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=L()),t.__insert(this.endNode=L())}insertAfterPart(t){t.__insert(this.startNode=L()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;K(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=z,e(this)}let t=this.__pendingValue;t!==z&&(lt(t)?t!==this.value&&this.__commitText(t):t instanceof R?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Rt(t)?this.__commitIterable(t):t===Lt?(this.value=Lt,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){let e=this.startNode.nextSibling;t=t??"";let i=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){let e=this.options.templateFactory(t);if(this.value instanceof V&&this.value.template===e)this.value.update(t.values);else{let i=new V(e,t.processor,this.options),a=i._clone();i.update(t.values),this.__commitNode(a),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());let e=this.value,i=0,a;for(let r of t)a=e[i],a===void 0&&(a=new s(this.options),e.push(a),i===0?a.appendIntoPart(this):a.insertAfterPart(e[i-1])),a.setValue(r),a.commit(),i++;i<e.length&&(e.length=i,this.clear(a&&a.endNode))}clear(t=this.startNode){Z(this.startNode.parentNode,t.nextSibling,this.endNode)}},bt=class{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;K(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=z,e(this)}if(this.__pendingValue===z)return;let t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=z}},vt=class extends nt{constructor(t,e,i){super(t,e,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new Ot(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},Ot=class extends ft{},Oi=!1;(()=>{try{let s={get capture(){return Oi=!0,!1}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{}})();var yt=class{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=a=>this.handleEvent(a)}setValue(t){this.__pendingValue=t}commit(){for(;K(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=z,r(this)}if(this.__pendingValue===z)return;let t=this.__pendingValue,e=this.value,i=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),a=t!=null&&(e==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=Ga(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=z}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}},Ga=s=>s&&(Oi?{capture:s.capture,passive:s.passive,once:s.once}:s.capture);function Le(s){let t=G.get(s.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},G.set(s.type,t));let e=t.stringsArray.get(s.strings);if(e!==void 0)return e;let i=s.strings.join(T);return e=t.keyString.get(i),e===void 0&&(e=new Y(s,s.getTemplateElement()),t.keyString.set(i,e)),t.stringsArray.set(s.strings,e),e}var G=new Map;var j=new WeakMap,Re=(s,t,e)=>{let i=j.get(t);i===void 0&&(Z(t,t.firstChild),j.set(t,i=new D(Object.assign({templateFactory:Le},e))),i.appendInto(t)),i.setValue(s),i.commit()};var Ft=class{handleAttributeExpressions(t,e,i,a){let r=e[0];return r==="."?new vt(t,e.slice(1),i).parts:r==="@"?[new yt(t,e.slice(1),a.eventContext)]:r==="?"?[new bt(t,e.slice(1),i)]:new nt(t,e,i).parts}handleTextExpression(t){return new D(t)}},qt=new Ft;typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var o=(s,...t)=>new R(s,t,"html",qt),b=(s,...t)=>new ot(s,t,"svg",qt);var Fi=(s,t)=>`${s}--${t}`,Dt=!0;typeof window.ShadyCSS>"u"?Dt=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Dt=!1);var Qa=s=>t=>{let e=Fi(t.type,s),i=G.get(e);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},G.set(e,i));let a=i.stringsArray.get(t.strings);if(a!==void 0)return a;let r=t.strings.join(T);if(a=i.keyString.get(r),a===void 0){let n=t.getTemplateElement();Dt&&window.ShadyCSS.prepareTemplateDom(n,s),a=new Y(t,n),i.keyString.set(r,a)}return i.stringsArray.set(t.strings,a),a},Xa=["html","svg"],Ja=s=>{Xa.forEach(t=>{let e=G.get(Fi(t,s));e!==void 0&&e.keyString.forEach(i=>{let{element:{content:a}}=i,r=new Set;Array.from(a.querySelectorAll("style")).forEach(n=>{r.add(n)}),Ne(i,r)})})},qi=new Set,ts=(s,t,e)=>{qi.add(s);let i=e?e.element:document.createElement("template"),a=t.querySelectorAll("style"),{length:r}=a;if(r===0){window.ShadyCSS.prepareTemplateStyles(i,s);return}let n=document.createElement("style");for(let d=0;d<r;d++){let p=a[d];p.parentNode.removeChild(p),n.textContent+=p.textContent}Ja(s);let l=i.content;e?Ii(e,n,l.firstChild):l.insertBefore(n,l.firstChild),window.ShadyCSS.prepareTemplateStyles(i,s);let c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(e){l.insertBefore(n,l.firstChild);let d=new Set;d.add(n),Ne(e,d)}},Di=(s,t,e)=>{if(!e||typeof e!="object"||!e.scopeName)throw new Error("The `scopeName` option is required.");let i=e.scopeName,a=j.has(t),r=Dt&&t.nodeType===11&&!!t.host,n=r&&!qi.has(i),l=n?document.createDocumentFragment():t;if(Re(s,l,Object.assign({templateFactory:Qa(i)},e)),n){let c=j.get(l);j.delete(l);let d=c.value instanceof V?c.value.template:void 0;ts(i,l,d),Z(t,t.firstChild),t.appendChild(l),j.set(t,c)}!a&&r&&window.ShadyCSS.styleElement(t.host)};var Vi;window.JSCompiler_renameProperty=(s,t)=>s;var je={toAttribute(s,t){switch(t){case Boolean:return s?"":null;case Object:case Array:return s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){switch(t){case Boolean:return s!==null;case Number:return s===null?null:Number(s);case Object:case Array:return JSON.parse(s)}return s}},ji=(s,t)=>t!==s&&(t===t||s===s),Oe={attribute:!0,type:String,converter:je,reflect:!1,hasChanged:ji},Fe=1,qe=4,De=8,Ve=16,Ue="finalized",ct=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let t=[];return this._classProperties.forEach((e,i)=>{let a=this._attributeNameForProperty(i,e);a!==void 0&&(this._attributeToPropertyMap.set(a,i),t.push(a))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((e,i)=>this._classProperties.set(i,e))}}static createProperty(t,e=Oe){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;let i=typeof t=="symbol"?Symbol():`__${t}`,a=this.getPropertyDescriptor(t,i,e);a!==void 0&&Object.defineProperty(this.prototype,t,a)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(a){let r=this[t];this[e]=a,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Oe}static finalize(){let t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Ue)||t.finalize(),this[Ue]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(e):[]];for(let a of i)this.createProperty(a,e[a])}}static _attributeNameForProperty(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=ji){return i(t,e)}static _propertyValueFromAttribute(t,e){let i=e.type,a=e.converter||je,r=typeof a=="function"?a:a.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(e.reflect===void 0)return;let i=e.type,a=e.converter;return(a&&a.toAttribute||je.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){let i=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Oe){let a=this.constructor,r=a._attributeNameForProperty(t,i);if(r!==void 0){let n=a._propertyValueToAttribute(e,i);if(n===void 0)return;this._updateState=this._updateState|De,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._updateState=this._updateState&~De}}_attributeToProperty(t,e){if(this._updateState&De)return;let i=this.constructor,a=i._attributeToPropertyMap.get(t);if(a!==void 0){let r=i.getPropertyOptions(a);this._updateState=this._updateState|Ve,this[a]=i._propertyValueFromAttribute(e,r),this._updateState=this._updateState&~Ve}}requestUpdateInternal(t,e,i){let a=!0;if(t!==void 0){let r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),i.reflect===!0&&!(this._updateState&Ve)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):a=!1}!this._hasRequestedUpdate&&a&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|qe;try{await this._updatePromise}catch{}let t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&qe}get hasUpdated(){return this._updateState&Fe}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1,e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(this._updateState&Fe||(this._updateState=this._updateState|Fe,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~qe}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,i)=>this._propertyToAttribute(i,this[i],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}};Vi=Ue;ct[Vi]=!0;var Ui=Element.prototype,Or=Ui.msMatchesSelector||Ui.webkitMatchesSelector;var Vt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),xt=class{constructor(t,e){if(e!==Be)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(Vt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},Bi=s=>new xt(String(s),Be),es=s=>{if(s instanceof xt)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},m=(s,...t)=>{let e=t.reduce((i,a,r)=>i+es(a)+s[r+1],s[0]);return new xt(e,Be)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var Wi={},x=class extends ct{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let t=this.getStyles();if(Array.isArray(t)){let e=(r,n)=>r.reduceRight((l,c)=>Array.isArray(c)?e(c,l):(l.add(c),l),n),i=e(t,new Set),a=[];i.forEach(r=>a.unshift(r)),this._styles=a}else this._styles=t===void 0?[]:[t];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Vt){let i=Array.prototype.slice.call(e.cssRules).reduce((a,r)=>a+r.cssText,"");return Bi(i)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){let t=this.constructor._styles;t.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(e=>e.cssText),this.localName):Vt?this.renderRoot.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){let e=this.render();super.update(t),e!==Wi&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{let a=document.createElement("style");a.textContent=i.cssText,this.renderRoot.appendChild(a)}))}render(){return Wi}};x.finalized=!0;x.render=Di;x.shadowRootOptions={mode:"open"};var We={blue:["#dcecf8","#2e618c"],mint:["#ddf0e7","#306b55"],peach:["#f9e6d9","#8f5538"],lavender:["#ece5f7","#6d558c"],pink:["#f7e1ed","#8e496e"],amber:["#f5edcf","#786022"],green:["#ddf0e7","#306b55"],purple:["#ece5f7","#6d558c"],orange:["#f9e6d9","#8f5538"],teal:["#d9efec","#306b65"],red:["#f7e1df","#963f3b"]},Hi=m`
 :host{display:block;--p-ink:var(--primary-text-color,#252c34);--p-muted:var(--secondary-text-color,#647078);--p-surface:var(--ha-card-background,var(--card-background-color,#fff));color:var(--p-ink);font-family:inherit}
 *{box-sizing:border-box}ha-card{display:block;padding:20px;border-radius:26px;background:var(--p-surface);border:1px solid var(--divider-color,#e8ebed);box-shadow:0 4px 18px #14283306;color:var(--p-ink)}
 header{display:flex;align-items:center;gap:12px;margin-bottom:20px}.icon{background:var(--p-tint);color:var(--p-accent);width:44px;height:44px;border-radius:15px;display:grid;place-items:center;flex-shrink:0}
 .heading{flex:1;min-width:0}h2{font-size:17px;line-height:1.3;letter-spacing:-.3px;margin:0;font-weight:650;overflow-wrap:anywhere}.subtitle,.muted{color:var(--p-muted);font-size:12px;line-height:1.6}.subtitle{margin-top:3px}.hero{background:var(--p-tint);color:var(--p-accent);border-radius:20px;padding:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;min-height:130px}.hero svg{width:98px;height:98px;flex-shrink:0}.hero .reading{font-size:32px;letter-spacing:-1px;line-height:1.2}.hero .caption{font-size:12px;margin-top:6px}.hero .right{text-align:right;min-width:0}.pill{font-size:11px;line-height:1.5;background:var(--p-tint);color:var(--p-accent);padding:6px 10px;border-radius:20px;max-width:50%;overflow-wrap:anywhere}.status{font-size:15px;font-weight:600;overflow-wrap:anywhere}
 .metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:16px}.metric{padding:13px 14px;border:1px solid var(--divider-color,#e8ebed);border-radius:16px;text-align:left;background:transparent;color:inherit;min-height:74px}.metric strong{display:block;font-size:22px;font-weight:550;letter-spacing:-.5px;font-variant-numeric:tabular-nums}.metric small{font-size:11px;color:var(--p-muted)}.metric .unit{font-size:12px;margin-left:4px;color:var(--p-muted)}
 button,select,input{font:inherit}button{cursor:pointer;touch-action:pan-y;min-height:44px;border:0;border-radius:13px;padding:10px 14px;background:var(--p-tint);color:var(--p-accent);font-weight:550;font-size:13px}button:disabled{opacity:.45;cursor:default}button:focus-visible,select:focus-visible,input:focus-visible{outline:2px solid var(--p-accent);outline-offset:3px}.actions{display:flex;gap:8px;flex-wrap:wrap}.actions button{flex:1;min-width:80px}.control{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--divider-color,#e8ebed);font-size:13px}.control span{min-width:0;overflow-wrap:anywhere}.control select{max-width:60%}select,input{background:var(--p-surface);color:var(--p-ink);border:1px solid var(--divider-color,#dce2e6);border-radius:10px;padding:10px;min-height:44px;max-width:100%}input[type=number]{width:100px}.error{background:#fae3e0;color:#8e302a;border-radius:12px;padding:12px;font-size:13px;margin-top:12px}.empty{padding:20px;color:var(--p-muted);font-size:14px;line-height:1.7}.foot{font-size:11px;color:var(--p-muted);margin-top:14px}.map{width:100%;border-radius:16px;margin-top:16px;display:block}.zones{margin-top:16px}h3{font-size:13px;font-weight:600;margin:18px 0 10px}.temperature{display:flex;gap:12px;align-items:center;justify-content:center;margin-bottom:16px}.temperature strong{font-size:30px;font-weight:550}.temperature button{font-size:20px;min-width:44px}.editor{display:grid;gap:14px;padding:12px}.editor label{display:grid;gap:6px;font-size:13px}.editor select,.editor input{width:100%}.editor .pair{display:grid;grid-template-columns:1fr 1fr;gap:10px}.editor details{border:1px solid var(--divider-color,#ddd);border-radius:14px;padding:12px}.editor summary{cursor:pointer;font-weight:600;font-size:13px}.editor .check{display:flex;align-items:center;gap:10px;margin:10px 0}.editor .check input{width:18px;min-height:18px}.editor .hint{font-size:12px;color:var(--p-muted);line-height:1.6}.editor button{min-height:44px}.section-label{font-size:10px;text-transform:uppercase;letter-spacing:1.6px;color:var(--p-muted);margin:20px 0 10px}
 @media(prefers-reduced-motion:no-preference){button{transition:filter .15s}button:hover{filter:brightness(.96)}}
`;var y=class extends x{static get properties(){return{hass:{},config:{},error:{},busy:{}}}static get styles(){return Hi}setConfig(t){this.config={...t},this.error=""}getCardSize(){return 5}getGridOptions(){return{columns:6,min_columns:3,rows:"auto"}}palette(t="blue"){let[e,i]=We[t]||We.blue;return`--p-tint:${e};--p-accent:${i}`}info(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}async call(t,e,i={},a){if(this.busy)return;let[r,n]=String(t||"").split(".");if(!r||!n||!this.hass?.services?.[r]?.[n]){this.error="Questo comando non \xE8 disponibile.";return}this.busy=!0,this.error="";try{await this.hass.callService(r,n,{...i,...e?{entity_id:e}:{}},a)}catch(l){this.error=l.message||"Comando non riuscito."}finally{this.busy=!1}}guardPress(t){this._origin={x:t.clientX,y:t.clientY,id:t.pointerId},this._moved=!1}guardMove(t){this._origin?.id===t.pointerId&&Math.hypot(t.clientX-this._origin.x,t.clientY-this._origin.y)>10&&(this._moved=!0)}guardCancel(){this._moved=!0}guardClick(t){t.detail!==0&&this._moved&&(t.stopPropagation(),t.preventDefault())}connectedCallback(){super.connectedCallback(),this._down=t=>this.guardPress(t),this._move=t=>this.guardMove(t),this._cancel=()=>this.guardCancel(),this._click=t=>this.guardClick(t),this.addEventListener("pointerdown",this._down,!0),this.addEventListener("pointermove",this._move,!0),this.addEventListener("pointercancel",this._cancel,!0),this.addEventListener("click",this._click,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerdown",this._down,!0),this.removeEventListener("pointermove",this._move,!0),this.removeEventListener("pointercancel",this._cancel,!0),this.removeEventListener("click",this._click,!0)}feedback(){return this.error?o`<div class="error" role="alert">${this.error}</div>`:""}},U=s=>({on:"Acceso",off:"Spento",unavailable:"Non disponibile",unknown:"Stato sconosciuto",cleaning:"In pulizia",mowing:"In taglio",docked:"Alla base",paused:"In pausa",returning:"Ritorno alla base",idle:"In attesa",error:"Richiede attenzione",running:"In funzione",printing:"In stampa",ready:"Pronta",charging:"In carica",producing:"In produzione",washing:"Lavaggio",drying:"Asciugatura",finished:"Terminato",cool:"Raffreddamento",heat:"Riscaldamento",auto:"Automatico",heat_cool:"Caldo / freddo",dry:"Deumidificazione",fan_only:"Ventilazione"})[s]||s||"Non configurato";var B={washer:["Lavatrice","mdi:washing-machine","blue","washer|washing machine|lavatrice"],dryer:["Asciugatrice","mdi:tumble-dryer","peach","dryer|asciugatrice"],dishwasher:["Lavastoviglie","mdi:dishwasher","blue","dishwasher|lavastoviglie"],refrigerator:["Frigorifero","mdi:fridge-outline","mint","refrigerator|fridge|frigorifero"],freezer:["Congelatore","mdi:fridge-bottom","blue","freezer|congelatore"],wine_cooler:["Cantinetta","mdi:glass-wine","lavender","wine cooler|cantinetta"],oven:["Forno","mdi:stove","peach","oven|forno"],microwave:["Microonde","mdi:microwave","peach","microwave|microonde"],coffee:["Macchina del caff\xE8","mdi:coffee-maker-outline","peach","coffee|caffe|caff\xE8"],hood:["Cappa","mdi:air-filter","mint","hood|cappa"],hob:["Piano induzione","mdi:stove","peach","hob|cooktop|induzione|piano cottura|pianocottura"],dehumidifier:["Deumidificatore","mdi:air-humidifier-off","blue","dehumidifier|deumidificatore"],humidifier:["Umidificatore","mdi:air-humidifier","blue","humidifier|umidificatore"],air_purifier:["Purificatore aria","mdi:air-purifier","mint","air purifier|purificatore aria"],water_purifier:["Depuratore acqua","mdi:water-check-outline","mint","water purifier|water filter|reverse osmosis|depuratore|osmosi"],fan:["Ventilatore","mdi:fan","mint","fan|ventilatore"],ventilation:["Ventilazione","mdi:hvac","mint","ventilation|ventilazione|vmc"],water_heater:["Scaldacqua","mdi:water-boiler","peach","water heater|boiler|scaldacqua"],vacuum:["Robot pulizia","mdi:robot-vacuum","lavender","vacuum|aspirapolvere|robot pulizia"],floor_cleaner:["Lavapavimenti","mdi:vacuum-outline","lavender","floor cleaner|lavapavimenti|aspirapavimenti"],lawn_mower:["Tagliaerba","mdi:robot-mower-outline","mint","lawn mower|tagliaerba"],robot_dock:["Base di pulizia","mdi:robot-vacuum","lavender","dock|base lavaggio|base svuotamento|base di pulizia"],generic:["Dispositivo","mdi:devices","blue","^$"]},_t=["vacuum","floor_cleaner","lawn_mower","robot_dock"],Q={power:["Potenza","power"],energy:["Energia totale","energy"],cycle_energy:["Energia ciclo",null],remaining:["Tempo restante",null],progress:["Avanzamento",null],temperature:["Temperatura","temperature"],humidity:["Umidit\xE0","humidity"],battery:["Batteria","battery"],water_quality:["TDS uscita",null],water_input:["TDS ingresso",null],water_used:["Acqua erogata",null],tank:["Serbatoio",null],filter:["Filtro residuo",null],area:["Area pulita",null]},E=s=>(s||"").split(".")[0],wt=s=>!!s&&!["unknown","unavailable"].includes(s.state),dt=s=>s==null||String(s).trim()===""||!Number.isFinite(Number(s))?null:Number(s);function jt(s,t={}){let e=E(s?.entity_id);if(e==="vacuum"||e==="lawn_mower"||e==="water_heater")return e;if(e==="humidifier")return s.attributes?.device_class==="dehumidifier"?"dehumidifier":"humidifier";let i=[t.name_by_user,t.name,t.model,s?.attributes?.friendly_name,s?.entity_id].filter(Boolean).join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replaceAll("_"," "),a=Object.entries(B).filter(([r,n])=>r!=="generic"&&new RegExp(`(^|\\b)(${n[3]})(\\b|$)`,"i").test(i));return a.length===1?a[0][0]:"generic"}function He(s,t,e){let i=t?.entities||[],a=i.find(h=>h.entity_id===e.entity),r=e.device_id||a?.device_id,n=r?i.filter(h=>h.device_id===r&&!h.disabled_by).map(h=>h.entity_id):[e.entity].filter(Boolean),l=(t?.devices||[]).find(h=>h.id===r)||{},c=n.map(h=>s.states[h]).filter(Boolean),d=s.states[e.entity]||c.find(h=>["vacuum","lawn_mower","humidifier","water_heater","fan"].includes(E(h.entity_id)))||c[0],p={},u=[];for(let[h,[,_]]of Object.entries(Q)){let I=c.filter(M=>E(M.entity_id)==="sensor"&&(_?M.attributes?.device_class===_&&(h!=="energy"||!Zi("cycle_energy",M)):Zi(h,M)));I.length===1?p[h]=I[0].entity_id:I.length>1&&u.push(h)}let g=c.filter(h=>["button","select","number","switch","input_button","input_select","input_number","input_boolean","fan","humidifier"].includes(E(h.entity_id))).map(h=>({entity:h.entity_id,name:h.attributes?.friendly_name||h.entity_id})),f=c.filter(h=>["camera","image"].includes(E(h.entity_id)));return{status_entities:c.filter(h=>h.entity_id!==d?.entity_id&&(E(h.entity_id)==="binary_sensor"||E(h.entity_id)==="sensor"&&dt(h.state)===null&&/filter|filtro|maintenance|manutenzione|tank|serbatoio|salt|sale|rinse|brillantante/i.test(h.entity_id+" "+h.attributes?.friendly_name))).map(h=>h.entity_id),entity:d?.entity_id||"",profile:jt(d,l),metrics:p,controls:g,map_entity:f.length===1?f[0].entity_id:"",device_id:r,ambiguous:u,siblings:n}}function Zi(s,t){let e=(t.entity_id+" "+(t.attributes?.friendly_name||"")).toLowerCase();return{cycle_energy:/cycle.*energy|energia.*ciclo/,remaining:/remaining|restante|residuo.*tempo/,progress:/progress|avanzamento/,water_quality:/(tds.*(out|uscita|purified))|((out|uscita|purified).*tds)/,water_input:/(tds.*(inlet|ingresso|input))|((inlet|ingresso|input).*tds)/,water_used:/water.*(used|dispensed)|acqua.*(erogata|consumata)/,tank:/tank|serbatoio/,filter:/filter.*(life|remaining)|filtro.*residu/,area:/cleaned.*area|area.*(pulita|tagliata)/}[s]?.test(e)||!1}function Yi(s,t={}){if(!s)return[];let e=E(s.entity_id),i=Number(s.attributes?.supported_features||0);return(e==="vacuum"?[[8192,"start","Avvia"],[4,"pause","Pausa"],[8,"stop","Ferma"],[16,"return_to_base","Alla base"],[512,"locate","Trova"]]:e==="lawn_mower"?[[1,"start_mowing","Taglia"],[2,"pause","Pausa"],[4,"dock","Alla base"],[8,"stop","Ferma"]]:[]).filter(([r,n])=>i&r&&t[e]?.[n]).map(([,r,n])=>({name:n,action:`${e}.${r}`,entity:s.entity_id}))}function Ki(s,t){if(!wt(t))return null;let e=dt(t.state);if(e===null)return null;let i=t.attributes?.unit_of_measurement||"";return s==="power"?i==="kW"?{value:e*1e3,unit:"W"}:i==="W"?{value:e,unit:i}:null:s==="energy"||s==="cycle_energy"?i==="Wh"?{value:e/1e3,unit:"kWh"}:i==="kWh"?{value:e,unit:i}:null:{value:e,unit:i}}function Gi(s){let t=["power","energy"],e=["cycle_energy","remaining","progress"],i=s==="water_purifier"?["water_quality","water_input","water_used","tank","filter"]:["vacuum","floor_cleaner","lawn_mower","robot_dock"].includes(s)?["battery","area","remaining","progress","tank","filter"]:["washer","dryer","dishwasher","oven","microwave","coffee"].includes(s)?[...e,"temperature","tank","filter"]:["refrigerator","freezer","wine_cooler","water_heater"].includes(s)?["temperature"]:["humidity","temperature","filter","tank"];return s==="generic"?Object.keys(Q):[...t,...i]}function C(s){let t;return s==="lights"?t=b`<path d="M41 77c-1-13-18-20-18-39a37 37 0 0 1 74 0c0 19-17 26-18 39M42 89h36M46 101h28M52 111h16"/>`:s==="temperature"?t=b`<path d="M49 66V25a11 11 0 0 1 22 0v41a23 23 0 1 1-22 0Z"/><path d="M60 40v38"/><circle cx="60" cy="87" r="9" fill="currentColor" opacity=".2"/><path d="M81 28h10M81 42h7M81 56h10"/>`:s==="alarm"?t=b`<path d="M60 10 99 27 95 67 81 88 60 106 39 88 25 67 21 27Z"/><circle cx="60" cy="48" r="5"/><path d="M60 53v17"/>`:s==="dishwasher"?t=b`<rect x="21" y="10" width="78" height="99" rx="14"/><path d="M21 35h78M32 23h20M36 80h48M36 91h48"/><path d="M42 76V49M54 76V45M66 76V45M78 76V49"/>`:s==="oven"?t=b`<rect x="21" y="10" width="78" height="99" rx="14"/><rect x="32" y="44" width="56" height="50" rx="6"/><path d="M38 24h10M69 24h10M40 82h40"/>`:s==="microwave"?t=b`<rect x="10" y="28" width="100" height="67" rx="12"/><rect x="21" y="40" width="62" height="42" rx="6"/><circle cx="97" cy="49" r="3"/><circle cx="97" cy="65" r="3"/>`:s==="hob"?t=b`<rect x="13" y="17" width="94" height="86" rx="12"/><circle cx="38" cy="42" r="15"/><circle cx="80" cy="42" r="13"/><circle cx="39" cy="79" r="13"/><circle cx="80" cy="78" r="16"/>`:s==="hood"?t=b`<path d="M45 12h30v38l30 30H15l30-30Z"/><path d="M15 80v12h90V80M40 107h40M44 69h32"/>`:s==="coffee"?t=b`<rect x="25" y="13" width="70" height="94" rx="12"/><path d="M35 43h50M55 44v14M40 96h42"/><path d="M43 66h31v18H43ZM74 68h10v10H74"/>`:s==="pool"?t=b`<rect x="14" y="32" width="92" height="69" rx="17"/><path d="M19 48h82M22 80q12-8 24 0t24 0t24 0M30 15v56M30 15q0-9 9-9t9 9v56M30 38h18M30 55h18"/>`:s==="sump"?t=b`<path d="M16 32h88v68H16ZM21 65q12-9 24 0t24 0t24 0M43 39v37M77 39v37"/><rect x="32" y="72" width="22" height="18" rx="5"/><rect x="66" y="72" width="22" height="18" rx="5"/><path d="M60 16v20M52 23h16"/>`:s==="booster"?t=b`<circle cx="52" cy="61" r="31"/><circle cx="52" cy="61" r="12"/><path d="M17 61H7M83 61h30M52 30V16h30v16M49 61l19-18M83 74h25v25H83Z"/>`:s==="fryer"?t=b`<rect x="24" y="15" width="72" height="93" rx="17"/><path d="M24 55h72M35 55v35h50V55M43 75h34M45 100h30"/><circle cx="60" cy="35" r="10"/><path d="M60 28v7l5 3"/>`:s==="boiler"?t=b`<rect x="24" y="12" width="72" height="95" rx="13"/><circle cx="60" cy="43" r="15"/><path d="M60 43l9-7M38 76h44M43 107v9M77 107v9M31 27h7M82 27h7"/><circle cx="60" cy="83" r="4"/>`:s==="hot_water"?t=b`<rect x="34" y="10" width="52" height="100" rx="24"/><path d="M34 68q13-8 26 0t26 0M48 35c0 7-8 10-8 19a10 10 0 0 0 20 0c0-9-8-12-8-19M60 110v8"/>`:s==="ev"?t=b`<rect x="18" y="21" width="56" height="84" rx="12"/><rect x="28" y="31" width="36" height="33" rx="5"/><path d="m49 36-9 15h9l-4 9 14-17h-9l5-7M74 43h14v38q0 11 10 11t10-11V48M99 38v18M106 38v18M29 106h34"/>`:s==="pool_robot"?t=b`<rect x="18" y="34" width="84" height="58" rx="23"/><circle cx="42" cy="63" r="8"/><circle cx="78" cy="63" r="8"/><path d="M40 92v14M80 92v14M41 106h38M60 34V20M47 20h26M22 76q14-8 28 0t28 0t25 0"/>`:s==="printer_3d"?t=b`<path d="M16 22h88v78H16ZM27 34h66M32 92h56M60 35v20M43 55h34M49 72l11-8 11 8v15H49ZM30 100v11M90 100v11"/><circle cx="60" cy="58" r="3"/>`:s==="printer"?t=b`<rect x="28" y="12" width="64" height="42" rx="6"/><rect x="18" y="43" width="84" height="53" rx="10"/><path d="M30 82h60M34 71h52M36 96v14h48V96M39 24h42"/><circle cx="87" cy="57" r="3"/>`:s==="rain_tank"?t=b`<path d="M25 25h70v75q0 10-35 10t-35-10V25ZM25 25q0-10 35-10t35 10M25 45q0 10 35 10t35-10M25 75q0 10 35 10t35-10"/><path d="M100 17c0 7-7 10-7 16a7 7 0 0 0 14 0c0-6-7-9-7-16Z"/>`:s==="ventilation"?t=b`<rect x="19" y="19" width="82" height="82" rx="19"/><circle cx="60" cy="60" r="11"/><path d="M60 49c-6-15-5-24 5-26 14-2 16 17 6 29M70 63c16-7 25-6 28 5 4 14-15 19-29 7M55 69c-9 15-17 19-25 11-11-10 2-24 19-25"/>`:s==="range_hood"?t=b`<path d="M45 15h30v33l28 33H17l28-33ZM17 81v11h86V81M37 104q-6 6 0 11M60 104q-6 6 0 11M83 104q-6 6 0 11"/><circle cx="60" cy="61" r="9"/>`:s==="litter_robot"?t=b`<path d="m35 44-4-25 16 13q13-6 26 0l16-13-4 25q5 11 0 22-6 14-25 14S40 80 34 66q-5-11 1-22Z"/><path d="M48 80q-17 7-17 25 0 7 8 7h42q8 0 8-7 0-18-17-25M52 91v21M68 91v21M86 96q17 7 18-9 1-8-5-11"/><circle cx="48" cy="55" r="2"/><circle cx="72" cy="55" r="2"/><path d="m56 65 4 3 4-3m-4 3v4m0 0-5 3m5-3 5 3M39 65l-12-3m12 7-12 3m54-7 12-3m-12 7 12 3"/>`:s==="pet_bowls"?t=b`<path d="M10 67h45l-7 32H17ZM65 67h45l-7 32H72ZM10 67q22 8 45 0M65 67q22 8 45 0M34 23c-9-9-20 6-9 17l9 9 9-9c11-11 0-26-9-17ZM85 21c0 7-9 12-9 20a9 9 0 0 0 18 0c0-8-9-13-9-20Z"/>`:s==="chicken_feeder"?t=b`<path d="M12 25h54l-7 36H19ZM19 61h40l-6 22H25ZM10 96h57M27 83v13M51 83v13M24 36h30M30 48h19"/><path d="M75 73q-8-16 8-21 16-5 26 7 9 11 2 24-7 12-23 11-11 0-17-10M77 69q-8-12-13-7 1 10 10 16M86 76q9-7 17 0-7 8-17 0Z"/><path d="M93 43q-3-11 3-8l4 5q4-10 7-2l1 7M109 52l9 4-9 4M88 94v13m13-13v13m-19 0h12m1 0h12"/><circle cx="100" cy="52" r="10"/><circle cx="103" cy="50" r="1.5" fill="currentColor" stroke="none"/>`:s==="irrigation"?t=b`<path d="M60 100V53M36 100h48M48 53h24M50 53q10-23 20 0M60 43v-8M35 42l-7-10M85 42l7-10M22 60h-9M107 60h-9M32 76l-9 8M88 76l9 8"/><circle cx="60" cy="22" r="3"/><circle cx="28" cy="26" r="3"/><circle cx="92" cy="26" r="3"/>`:s==="solar"?t=b`<circle cx="84" cy="28" r="14"/><path d="M84 4v8M84 44v8M60 28h8M100 28h8M43 58h65l-10 43H18l10-43ZM23 79h80M49 58l-3 43M78 58l3 43M37 109h45"/>`:s==="home_battery"?t=b`<rect x="25" y="19" width="70" height="91" rx="13"/><path d="M47 19V9h26v10M36 54h48M36 69h48M36 84h48M60 36l-7 12h8l-3 9 11-14h-8l4-7"/><circle cx="60" cy="96" r="3"/>`:s==="garage_gate"?t=b`<path d="M13 105V28q0-9 9-9h76q9 0 9 9v77M13 105h94M25 105V42h70v63M25 57h70M25 73h70M25 89h70M45 61v8M75 61v8"/><path d="M33 31h54"/>`:s==="doorbell"?t=b`<rect x="31" y="9" width="58" height="101" rx="16"/><circle cx="60" cy="43" r="17"/><circle cx="60" cy="43" r="7"/><circle cx="60" cy="86" r="8"/><path d="M43 69h34M16 42q-7 10 0 20M104 42q7 10 0 20"/>`:s==="smart_lock"?t=b`<rect x="28" y="9" width="64" height="102" rx="11"/><rect x="43" y="43" width="34" height="34" rx="6"/><path d="M49 43v-9q0-11 11-11t11 11v9M60 56v9M45 91h30"/><circle cx="60" cy="54" r="3"/>`:s==="air_quality"?t=b`<path d="M11 43h64q18 0 18-15 0-12-12-12-10 0-13 9M9 62h90q12 0 12 11 0 12-13 12-10 0-13-8M18 81h46q16 0 16 13 0 11-11 11-9 0-12-8"/><circle cx="25" cy="27" r="3"/><circle cx="42" cy="103" r="2"/>`:s==="water_safety"?t=b`<path d="M60 8 99 25v36q0 27-39 51Q21 88 21 61V25Z"/><path d="M60 32q-16 23-16 34a16 16 0 0 0 32 0q0-11-16-34Z"/><path d="m53 67 6 6 12-15"/>`:s==="ups"?t=b`<rect x="22" y="12" width="76" height="96" rx="14"/><rect x="34" y="25" width="52" height="34" rx="6"/><path d="M43 42h34M50 42l-5 9h30l-5-9M39 75h42M39 85h42"/><circle cx="60" cy="96" r="3"/>`:s==="home_network"?t=b`<rect x="15" y="55" width="90" height="42" rx="12"/><path d="M33 55V28M87 55V28M27 38q33-26 66 0M40 46q20-15 40 0M28 97v10M92 97v10"/><circle cx="38" cy="77" r="3"/><circle cx="52" cy="77" r="3"/><path d="M72 77h18"/>`:s==="electric_car"?t=b`<path d="M21 76l9-29q3-9 12-9h36q9 0 12 9l9 29M19 76h82v23H19ZM31 99v9M89 99v9M28 62h64M43 21h34M49 21v17M71 21v17"/><circle cx="34" cy="83" r="4"/><circle cx="86" cy="83" r="4"/>`:s==="aquarium"?t=b`<rect x="12" y="24" width="96" height="77" rx="10"/><path d="M13 75q12-8 24 0t24 0t24 0t23 0M22 101h76M29 87q8-13 16 0M82 88q8-16 17 0M42 49q17-17 37 0-20 18-37 0ZM42 49l-11-11v22Z"/><circle cx="68" cy="46" r="2"/>`:s==="greenhouse"?t=b`<path d="M14 101V44L60 13l46 31v57ZM14 44h92M60 14v87M36 101V51h48v50M36 72h48M45 91q15-34 30-19M60 91V64"/>`:s==="mailbox"?t=b`<path d="M18 51q0-28 42-28t42 28v37H18ZM18 51h84M30 52v36M60 88v25M44 113h32M69 37h20M82 24v-13M73 11h18"/><circle cx="48" cy="71" r="5"/>`:s==="kitchen_robot"?t=b`<path d="M33 17h52v8H33ZM39 25h40l-3 39q-2 7-16 7t-16-7ZM79 31h10q10 0 10 11v7q0 10-11 10H77M34 72h52q10 0 10 10v23H24V82q0-10 10-10ZM34 83h39v15H34Z"/><circle cx="83" cy="90" r="7"/><path d="M46 90h16M30 105v6M90 105v6"/>`:s==="waste_collection"?t=b`<path d="M24 35h72l-6 72H30ZM18 35h84M43 25h34M50 25v-9h20v9M42 51v40M60 51v40M78 51v40"/><path d="M40 9h8M76 9h8"/>`:s==="thermostat"?t=b`<circle cx="60" cy="60" r="49"/><circle cx="60" cy="60" r="41" opacity=".5"/><path d="M60 11v7M60 102v7M11 60h7M102 60h7M42 53h36M48 65h24"/><circle cx="60" cy="85" r="2"/>`:s==="generic"?t=b`<rect x="15" y="20" width="40" height="40" rx="10"/><rect x="65" y="20" width="40" height="40" rx="10"/><rect x="15" y="70" width="40" height="40" rx="10"/><path d="M66 90h38M85 71v38"/>`:s==="water_purifier"?t=b`<rect x="22" y="12" width="72" height="94" rx="18"/><path d="M36 36h44M42 48h32M48 61v18h25V61M48 88h25"/><path d="M60 57c-10-12 0-20 0-20s10 8 0 20Z" fill="currentColor" opacity=".25"/>`:["vacuum","floor_cleaner","robot_dock"].includes(s)?t=b`<circle cx="60" cy="64" r="42"/><circle cx="60" cy="64" r="32" opacity=".35"/><rect x="47" y="24" width="26" height="20" rx="9"/><path d="M45 82h30M56 57h8"/>`:s==="lawn_mower"?t=b`<rect x="18" y="49" width="84" height="42" rx="19"/><rect x="38" y="30" width="42" height="35" rx="14"/><circle cx="34" cy="91" r="12"/><circle cx="86" cy="91" r="12"/><path d="M49 42h20"/>`:["refrigerator","freezer","wine_cooler"].includes(s)?t=b`<rect x="27" y="9" width="65" height="101" rx="13"/><path d="M27 47h65M40 26v10M40 62v16"/>`:s==="climate"?t=b`<rect x="9" y="22" width="102" height="48" rx="13"/><path d="M20 54h80M29 64h62M32 82v16M60 82v24M88 82v16"/><circle cx="94" cy="37" r="2" fill="currentColor"/>`:["dehumidifier","humidifier","air_purifier","fan","ventilation","water_heater"].includes(s)?t=b`<rect x="28" y="13" width="64" height="95" rx="20"/><path d="M41 30h38M41 38h38M41 46h38M46 87h28"/><circle cx="60" cy="66" r="5"/>`:t=b`<rect x="21" y="10" width="78" height="99" rx="14"/><path d="M21 35h78M32 23h20"/><circle cx="60" cy="70" r="24"/><path d="M40 73q10-9 20 0t20 0" opacity=".5"/><circle cx="83" cy="23" r="3" fill="currentColor"/>`,o`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t}</svg>`}var $t=class extends y{static getConfigElement(){return document.createElement("pastel-appliance-card-editor")}static getStubConfig(){return{profile:"generic",entity:"",metrics:{},controls:[]}}setConfig(t){if(super.setConfig(t),t.controls&&!Array.isArray(t.controls))throw new Error("controls deve essere una lista");if(t.controls?.some(e=>!e||typeof e!="object"||e.action&&typeof e.action!="string"))throw new Error("Ogni controllo deve indicare entity oppure action come testo");if(t.status_entities&&!Array.isArray(t.status_entities))throw new Error("status_entities deve essere una lista");if(t.zones&&!Array.isArray(t.zones))throw new Error("zones deve essere una lista");if(t.metrics&&(typeof t.metrics!="object"||Array.isArray(t.metrics)))throw new Error("metrics deve essere un oggetto")}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=B[t.profile]||B.generic,i=this.hass.states[t.entity],a=t.title||e[0],r=wt(i),n=t.metrics||{};return o`<ha-card style=${this.palette(t.color||e[2])}>
   <header><div class="icon"><ha-icon icon=${e[1]}></ha-icon></div><div class="heading"><h2>${a}</h2><div class="subtitle">${t.subtitle||e[0]}</div></div><span class="pill">${U(i?.state)}</span></header>
   <div class="hero">${C(t.profile)}<div class="right"><div class="status">${U(i?.state)}</div><div class="caption">${i?.attributes?.friendly_name||"Scegli il dispositivo nell\u2019editor"}</div></div></div>
   ${Object.keys(n).length?o`<div class="metrics">${Object.entries(n).filter(([,l])=>l).map(([l,c])=>{let d=Ki(l,this.hass.states[c]);return o`<button class="metric" @click=${()=>this.info(c)}><small>${Q[l]?.[0]||l}</small><strong>${d?new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:2}).format(d.value):"\u2014"}<span class="unit">${d?.unit||""}</span></strong></button>`})}</div>`:""}
   <div class="actions">${Yi(i,this.hass.services).filter(l=>!(t.hidden_actions||[]).includes(l.action)).map(l=>o`<button ?disabled=${!r||this.busy} @click=${()=>this.call(l.action,l.entity)}>${l.name}</button>`)}</div>
   ${this.nativeSettings(i)}
   ${(t.controls||[]).map(l=>this.control(l))}
   ${(t.status_entities||[]).length?o`<h3>Stato e manutenzione</h3>${t.status_entities.map(l=>{let c=this.hass.states[l];return o`<div class="control"><span>${c?.attributes?.friendly_name||l}</span><button @click=${()=>this.info(l)}>${U(c?.state)}</button></div>`})}`:""}
   ${this.robotExtras()}
   ${t.entity?"":o`<div class="empty">Apri l’editor, scegli un dispositivo e controlla le associazioni suggerite.</div>`}
   ${this.feedback()}
  </ha-card>`}control(t){if(t.action)return o`<div class="control"><span>${t.name||"Azione"}</span><button ?disabled=${this.busy||!this.hass.services?.[t.action.split(".")[0]]?.[t.action.split(".")[1]]} @click=${()=>this.call(t.action,t.entity,t.data||{},t.target)}>${t.button_label||"Esegui"}</button></div>`;let e=this.hass.states[t.entity],i=E(t.entity),a=t.name||e?.attributes?.friendly_name||t.entity,r=!e||e.state==="unavailable"||!["button","input_button"].includes(i)&&e.state==="unknown"||this.busy;if(["script","scene"].includes(i))return o`<div class="control"><span>${a}</span><button ?disabled=${r||!this.hass.services?.[i]?.turn_on} @click=${()=>this.call(`${i}.turn_on`,t.entity)}>Esegui</button></div>`;if(["select","input_select"].includes(i))return o`<label class="control"><span>${a}</span><select aria-label=${a} ?disabled=${r||!this.hass.services?.[i]?.select_option} .value=${e?.state||""} @change=${n=>this.call(`${i}.select_option`,t.entity,{option:n.target.value})}><option value="" disabled>Scegli</option>${(e?.attributes?.options||[]).map(n=>o`<option value=${n} ?selected=${n===e.state}>${n}</option>`)}</select></label>`;if(["number","input_number"].includes(i))return o`<label class="control"><span>${a}</span><input aria-label=${a} type="number" ?disabled=${r||!this.hass.services?.[i]?.set_value} min=${e?.attributes?.min??0} max=${e?.attributes?.max??100} step=${e?.attributes?.step??1} .value=${wt(e)?e.state:""} @change=${n=>{n.target.checkValidity()&&dt(n.target.value)!==null&&this.call(`${i}.set_value`,t.entity,{value:Number(n.target.value)})}}></label>`;if(["button","input_button"].includes(i))return o`<div class="control"><span>${a}</span><button ?disabled=${r||!this.hass.services?.[i]?.press} @click=${()=>this.call(`${i}.press`,t.entity)}>${t.button_label||"Esegui"}</button></div>`;if(["switch","input_boolean","fan","humidifier"].includes(i)){let n=e?.state==="on"?"turn_off":"turn_on";return o`<div class="control"><span>${a}<br><small class="muted">Alimentazione</small></span><button ?disabled=${r||!this.hass.services?.[i]?.[n]} @click=${()=>this.call(`${i}.${n}`,t.entity)}>${e?.state==="on"?"Spegni":"Accendi"}</button></div>`}return o`<div class="control"><span>${a}</span><button @click=${()=>this.info(t.entity)}>Dettagli</button></div>`}nativeSettings(t){if(!t)return"";let e=E(t.entity_id),i=t.attributes||{},a=this.hass.services?.[e]||{},r=!t||t.state==="unavailable"||!["button","input_button"].includes(e)&&t.state==="unknown"||this.busy,n=(c,d,p,u,g)=>d?.length&&a[u]?o`<label class="control"><span>${c}</span><select aria-label=${c} ?disabled=${r} @change=${f=>this.call(`${e}.${u}`,t.entity_id,{[g]:f.target.value})}>${d.map(f=>o`<option value=${f} ?selected=${f===p}>${f}</option>`)}</select></label>`:"",l=(c,d,p,u,g,f,v)=>dt(d)!==null&&a[f]?o`<label class="control"><span>${c}</span><input type="number" aria-label=${c} .value=${String(d)} min=${p} max=${u} step=${g} ?disabled=${r} @change=${h=>{h.target.checkValidity()&&dt(h.target.value)!==null&&this.call(`${e}.${f}`,t.entity_id,{[v]:Number(h.target.value)})}}></label>`:"";return e==="vacuum"?Number(i.supported_features)&32?n("Aspirazione",i.fan_speed_list,i.fan_speed,"set_fan_speed","fan_speed"):"":e==="humidifier"?o`${l("Umidit\xE0 desiderata",i.humidity,i.min_humidity??0,i.max_humidity??100,1,"set_humidity","humidity")}${Number(i.supported_features)&1?n("Modalit\xE0",i.available_modes,i.mode,"set_mode","mode"):""}`:e==="fan"?o`${Number(i.supported_features)&1?l("Velocit\xE0 %",i.percentage,0,100,i.percentage_step||1,"set_percentage","percentage"):""}${Number(i.supported_features)&8?n("Profilo",i.preset_modes,i.preset_mode,"set_preset_mode","preset_mode"):""}`:e==="water_heater"?o`${Number(i.supported_features)&1?l("Temperatura desiderata",i.temperature,i.min_temp??30,i.max_temp??90,1,"set_temperature","temperature"):""}${Number(i.supported_features)&2?n("Modalit\xE0",i.operation_list,i.operation_mode,"set_operation_mode","operation_mode"):""}`:""}robotExtras(){return o``}},pt=class extends $t{static getConfigElement(){return document.createElement("pastel-robot-card-editor")}static getStubConfig(){return{profile:"vacuum",entity:"",metrics:{},controls:[]}}robotExtras(){let t=this.config,e=this.hass.states[t.map_entity],i=wt(e)?e.attributes?.entity_picture:null,a=i&&(i.startsWith("/")&&!i.startsWith("//")||/^https?:\/\//.test(i))?this.hass.hassUrl?this.hass.hassUrl(i):i:null;return o`${a?o`<img class="map" src=${a} alt="Mappa del robot" loading="lazy">`:t.map_entity?o`<div class="foot">Mappa non disponibile.</div>`:""}
   ${(t.zones||[]).length?o`<div class="zones"><h3>Stanze e zone</h3>${t.zones.map(r=>this.control(r))}</div>`:""}`}};var Ut=new WeakMap;async function Ze(s,{refresh:t=!1}={}){let e=s.connection||s;if(!t&&Ut.has(e))return Ut.get(e);let i=Promise.all([s.callWS({type:"config/entity_registry/list"}),s.callWS({type:"config/device_registry/list"})]).then(([a,r])=>({entities:a,devices:r})).catch(a=>{throw Ut.delete(e),a});return Ut.set(e,i),i}function Qi(s,t,{robot:e=!1}={}){let i=new Map,a=new Set;for(let n of t.entities||[]){if(a.add(n.entity_id),n.disabled_by||!s.states[n.entity_id])continue;let l=n.device_id?`device:${n.device_id}`:`entity:${n.entity_id}`;i.has(l)||i.set(l,{device_id:n.device_id||"",entities:[]}),i.get(l).entities.push(s.states[n.entity_id])}for(let n of Object.values(s.states))a.has(n.entity_id)||i.set(`entity:${n.entity_id}`,{device_id:"",entities:[n]});let r=[];for(let[n,l]of i){let c=(t.devices||[]).find(f=>f.id===l.device_id)||{},d=jt(null,c),p=l.entities.map(f=>({s:f,profile:d!=="generic"?d:jt(f,c)})).filter(f=>f.profile!=="generic"&&(!e||_t.includes(f.profile)));if([...new Set(p.map(f=>f.profile))].length!==1)continue;let g=p.find(f=>["vacuum","lawn_mower","humidifier","water_heater","fan"].includes(E(f.s.entity_id)))||p.find(f=>/status|state|stato|operation/.test(f.s.entity_id))||p[0];r.push({key:n,device_id:l.device_id,entity:g.s.entity_id,profile:g.profile,name:c.name_by_user||c.name||g.s.attributes.friendly_name||g.s.entity_id,count:l.entities.length})}return r.sort((n,l)=>n.name.localeCompare(l.name))}var kt=class extends y{static get properties(){return{...super.properties,suggestion:{},loading:{},registry:{},showAllMetrics:{}}}updated(){this.hass&&!this._discoveryStarted&&(this._discoveryStarted=!0,this.loadDevices())}chooseCandidate(t){let e=this.detected().find(i=>i.key===t);e&&(this.emit({device_id:e.device_id,entity:e.entity,profile:e.profile,metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]}),this.suggestion={...He(this.hass,this.registry,e),profile:e.profile})}detected(){return this.hass&&this.registry?Qi(this.hass,this.registry,{robot:!!this.constructor.robot}):[]}setConfig(t){super.setConfig(t),this.config={...t,metrics:{...t.metrics||{}},controls:[...t.controls||[]]}}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}async scan(){this.loading=!0,this.error="",this.suggestion=null;let t=`${this.config.entity}|${this.config.device_id}`;try{let e=await Ze(this.hass,{refresh:!0});this.registry=e,t===`${this.config.entity}|${this.config.device_id}`&&(this.suggestion=He(this.hass,e,this.config))}catch{this.error="Impossibile leggere i dispositivi. Puoi comunque associare tutte le entit\xE0 manualmente."}finally{this.loading=!1}}async loadDevices(){this.loading=!0;try{this.registry=await Ze(this.hass)}catch{this.error="Elenco dispositivi non disponibile: seleziona un\u2019entit\xE0."}finally{this.loading=!1}}options(t){return Object.values(this.hass.states).filter(e=>!t||t.includes(e.entity_id.split(".")[0])).sort((e,i)=>e.entity_id.localeCompare(i.entity_id))}entitySelect(t,e,i,a="Entit\xE0"){return o`<select aria-label=${a} .value=${t||""} @change=${r=>e(r.target.value)}><option value="">Nessuna</option>${this.options(i).map(r=>o`<option value=${r.entity_id} ?selected=${t===r.entity_id}>${r.attributes.friendly_name||r.entity_id} · ${r.entity_id}</option>`)}</select>`}render(){if(!this.config||!this.hass)return o``;let t=this.config,e=this.suggestion,i=this.constructor.robot;return o`<div class="editor" style=${this.palette(t.color)}>
  <label>Elettrodomestici rilevati${this.loading?o`<span class="hint">Ricerca automatica in corso…</span>`:o`<select aria-label="Elettrodomestici rilevati" @change=${a=>this.chooseCandidate(a.target.value)}><option value="">Scegli un dispositivo rilevato</option>${this.detected().map(a=>o`<option value=${a.key} ?selected=${a.device_id?t.device_id===a.device_id:t.entity===a.entity}>${B[a.profile][0]} · ${a.name} (${a.count} entità)</option>`)}</select>`}</label>
  <p class="hint">${this.registry&&!this.detected().length?"Nessun elettrodomestico riconosciuto. Puoi scegliere il dispositivo manualmente.":"Scegli un elettrodomestico: sensori e comandi collegati vengono proposti automaticamente. Verifica le associazioni prima di applicarle."}</p>
  <details><summary>Scelta manuale o dispositivo non riconosciuto</summary>
  <label>Dispositivo <button ?disabled=${this.loading} @click=${()=>this.loadDevices()}>Carica elenco dispositivi</button>${this.registry?o`<select aria-label="Dispositivo" .value=${t.device_id||""} @change=${a=>{this.suggestion=null,this.emit({device_id:a.target.value,entity:"",metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]})}}><option value="">Seleziona tramite entità</option>${this.registry.devices.map(a=>o`<option value=${a.id} ?selected=${t.device_id===a.id}>${a.name_by_user||a.name||a.model||a.id}</option>`)}</select>`:""}</label>
  <label>Entità principale ${this.entitySelect(t.entity,a=>{this.suggestion=null,this.emit({entity:a,device_id:"",metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]})},null,"Entit\xE0 principale")}</label>
  <button ?disabled=${this.loading||!t.entity&&!t.device_id} @click=${()=>this.scan()}>${this.loading?"Ricerca in corso\u2026":"Cerca entit\xE0 e controlli associati"}</button>
  </details>
  ${e?o`<div class="hint">${e.siblings.length} entità associate. Profilo proposto: <strong>${B[e.profile][0]}</strong>. Le associazioni verranno salvate solo quando le applichi. ${e.ambiguous.length?`Da scegliere manualmente: ${e.ambiguous.map(a=>Q[a][0]).join(", ")}.`:""}</div><button @click=${()=>{let{siblings:a,ambiguous:r,...n}=e;this.emit({...n,profile:i&&!_t.includes(e.profile)?"vacuum":e.profile}),this.suggestion=null}}>Applica le associazioni proposte</button>`:""}
  <div class="pair"><label>Nome<input aria-label="Nome" .value=${t.title||""} @change=${a=>this.emit({title:a.target.value})}></label><label>Colore<select aria-label="Colore" @change=${a=>this.emit({color:a.target.value})}>${["blue","mint","peach","lavender","pink","amber"].map(a=>o`<option value=${a} ?selected=${(t.color||"blue")===a}>${a}</option>`)}</select></label></div>
  ${this.constructor.lockedProfile?"":o`<label>Tipo dispositivo<select aria-label="Tipo dispositivo" @change=${a=>this.emit({profile:a.target.value})}>${Object.entries(B).filter(([a])=>!i||_t.includes(a)||a==="generic").map(([a,r])=>o`<option value=${a} ?selected=${t.profile===a}>${r[0]}</option>`)}</select></label>`}
  <details open><summary>Dati e consumi</summary><p class="hint">Puoi scegliere sensori esterni al dispositivo, come una presa con misurazione. L’energia del ciclo richiede un sensore dedicato.</p><label class="check"><input type="checkbox" .checked=${!!this.showAllMetrics} @change=${a=>{this.showAllMetrics=a.target.checked}}>Mostra tutti i tipi di dato</label>${Object.entries(Q).filter(([a])=>this.showAllMetrics||Gi(t.profile).includes(a)||t.metrics?.[a]).map(([a,[r]])=>o`<label>${r}${this.entitySelect(t.metrics?.[a],n=>{let l={...t.metrics};n?l[a]=n:delete l[a],this.emit({metrics:l})},["sensor"],r)}</label>`)}</details>
  <details open><summary>Controlli (${t.controls?.length||0})</summary><p class="hint">Rimuovi i comandi che non vuoi mostrare. Gli interruttori sono indicati come alimentazione, mai come avvio del programma.</p>${(t.controls||[]).map((a,r)=>o`<div class="control"><span>${a.name||a.entity||a.action}</span><button aria-label=${`Rimuovi ${a.name||a.entity}`} @click=${()=>this.emit({controls:t.controls.filter((n,l)=>l!==r)})}>Rimuovi</button></div>`)}<label>Aggiungi controllo${this.entitySelect("",a=>{a&&!t.controls?.some(r=>r.entity===a)&&this.emit({controls:[...t.controls||[],{entity:a,name:this.hass.states[a]?.attributes.friendly_name||a}]})},["button","input_button","switch","input_boolean","select","input_select","number","input_number","fan","humidifier","script","scene"],"Aggiungi controllo")}</label></details>
  <details><summary>Stato e manutenzione</summary>${(t.status_entities||[]).map((a,r)=>o`<div class="control"><span>${this.hass.states[a]?.attributes?.friendly_name||a}</span><button @click=${()=>this.emit({status_entities:t.status_entities.filter((n,l)=>r!==l)})}>Rimuovi</button></div>`)}${this.entitySelect("",a=>{a&&!t.status_entities?.includes(a)&&this.emit({status_entities:[...t.status_entities||[],a]})},["sensor","binary_sensor"],"Aggiungi stato manutenzione")}</details>
  ${i?o`<details open><summary>Mappa e zone</summary><label>Mappa${this.entitySelect(t.map_entity,a=>this.emit({map_entity:a}),["image","camera"],"Mappa")}</label><p class="hint">La mappa è un’immagine fornita dall’integrazione. Per le zone associa un selettore tra i controlli oppure un pulsante/script qui sotto.</p>${(t.zones||[]).map((a,r)=>o`<div class="control"><span>${a.name||a.entity}</span><button @click=${()=>this.emit({zones:t.zones.filter((n,l)=>r!==l)})}>Rimuovi</button></div>`)}${this.entitySelect("",a=>{a&&this.emit({zones:[...t.zones||[],{entity:a,name:this.hass.states[a]?.attributes.friendly_name||a,...a.startsWith("script.")?{action:"script.turn_on"}:{}}]})},["button","input_button","script"],"Aggiungi zona")}</details>`:""}
  ${this.feedback()}
 </div>`}},X=class extends kt{};q(X,"robot",!0);function k(s,t,e){let i=s?.states?.[t];if(!i||["unknown","unavailable"].includes(i.state))return null;let a=e?i.attributes?.[e]:i.state;if(a==null||String(a).trim()===""||typeof a=="boolean")return null;let r=Number(a);return Number.isFinite(r)?r:null}function Xi(s){let t=(s.steppers||[]).find(e=>e.show_as_temperature&&e.entity);return t?{entity:t.entity,attribute:t.attribute}:{entity:s.temperature_entity,attribute:s.temperature_attribute}}function is(s,t){let e=s?.states?.[t.entity];if(!e)return null;let i=t.attribute?e.attributes?.[t.attribute]:e.state;return i==null||["unknown","unavailable"].includes(e.state)&&String(i)!==String(t.state)?null:t.operator==="not_equals"?String(i)!==String(t.state):String(i)===String(t.state)}function Ye(s,t){for(let e of t.states||[]){if(!e.conditions?.length)continue;let i=e.conditions.map(n=>is(s,n));if(e.match==="any"?i.includes(!0):i.every(n=>n===!0))return{...e,timer_entity:e.timer_entity||e.conditions.find(n=>n.entity?.startsWith("timer.")&&s?.states?.[n.entity]?.state==="active")?.entity};if((e.match==="any"||!i.includes(!1))&&i.includes(null))return{label:"Stato non disponibile",badge:"Non disponibile",unknown:!0}}if(t.entity){let e=s?.states?.[t.entity];return!e||["unknown","unavailable"].includes(e.state)?{label:"Stato non disponibile",badge:"Non disponibile",unknown:!0}:{label:e.state,badge:e.state}}return t.states?.length?{id:"off",label:t.fallback_label||"Riscaldamento spento",badge:t.fallback_badge||"Spenta"}:{label:"Stufa non configurata",badge:"Da configurare",unknown:!0}}function Ji(s,t,e=Date.now()){let i=s?.states?.[t];if(!i||!["active","paused"].includes(i.state))return"";if(i.state==="active"){let a=Date.parse(i.attributes?.finishes_at);if(!Number.isFinite(a))return"";let r=Math.max(0,Math.ceil((a-e)/1e3)),n=Math.floor(r/3600),l=Math.floor(r%3600/60),c=r%60;return`${n?`${n}:`:""}${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`}return i.attributes?.remaining||""}function Ke(s){if(!s)return null;if(s.action)return{action:s.action,entity:s.entity,data:s.data||{},target:s.target};let t=s.entity?.split(".")[0],e={script:"turn_on",button:"press",input_button:"press",scene:"turn_on"}[t];return e?{action:`${t}.${e}`,entity:s.entity,data:s.data||{},target:s.target}:null}function St(s,t){let e=Ke(t);if(!e)return!1;let[i,a]=e.action.split(".");if(!s?.services?.[i]?.[a])return!1;if(e.entity){let r=s?.states?.[e.entity];if(!r||r.state==="unavailable")return!1}return!0}function ta(s){for(let t of["states","controls","steppers"])if(s[t]!==void 0&&!Array.isArray(s[t]))throw new Error(`${t} deve essere una lista.`);for(let t of s.states||[]){if(!t||typeof t!="object"||!Array.isArray(t.conditions))throw new Error("Ogni stato richiede una lista di condizioni.");if(t.match&&!["all","any"].includes(t.match))throw new Error("Le condizioni devono corrispondere a tutte oppure almeno una.");for(let e of t.conditions)if(!e||typeof e.entity!="string"||e.state===void 0||e.state===null||e.operator&&!["equals","not_equals"].includes(e.operator))throw new Error("Ogni condizione richiede entit\xE0, stato e confronto validi.")}for(let t of[...s.controls||[],...(s.steppers||[]).flatMap(e=>[e?.minus,e?.plus]).filter(Boolean)])if(!t||typeof t!="object"||Array.isArray(t)||t.entity!==void 0&&typeof t.entity!="string"||t.action!==void 0&&(typeof t.action!="string"||!/^\w+\.\w+$/.test(t.action)))throw new Error("Configura un\u2019entit\xE0 oppure un\u2019azione valida per ogni comando.");for(let t of s.steppers||[])if(!t||typeof t!="object")throw new Error("Controllo \u2212/+ non valido.");for(let t of["pellet_warning_threshold"])if(s[t]!==void 0&&(!Number.isFinite(Number(s[t]))||Number(s[t])<0||Number(s[t])>100))throw new Error("La soglia pellet deve essere compresa tra 0 e 100.")}var Bt=class extends y{static getConfigElement(){return document.createElement("pastel-stove-card-editor")}static getStubConfig(){return{title:"Stufa",subtitle:"Stufa a pellet",color:"peach",controls:[],steppers:[],states:[]}}static get styles(){return[super.styles,m`
  .stove-actions{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:0}.stove-actions button{flex:1 1 90px;min-width:80px;overflow-wrap:anywhere;display:flex;align-items:center;justify-content:center;gap:6px}.stove-actions ha-icon{--mdc-icon-size:18px;flex-shrink:0}
  .stepper{display:flex;align-items:center;gap:7px}.stepper>span{min-width:38px;text-align:center;font-variant-numeric:tabular-nums}.stepper button{width:44px;padding:10px;font-size:19px}.stepper-label{min-width:0;overflow-wrap:anywhere}.stepper-label ha-icon{--mdc-icon-size:18px;margin-right:6px;color:var(--p-accent)}
  .pellet-head{display:flex;justify-content:space-between;align-items:center;gap:5px;flex-wrap:wrap}.pellet-warning{font-size:11px;color:var(--stove-warning,#963f3b)}.pellet-track{height:5px;border-radius:4px;background:var(--p-tint);overflow:hidden;margin-top:9px}.pellet-fill{height:100%;background:var(--p-accent);border-radius:4px}.metric strong{margin-top:5px}.metric{min-height:86px}.timer{font-size:12px;margin-top:8px;font-variant-numeric:tabular-nums}.control:last-child{padding-bottom:0}.control button:disabled{opacity:.4}.stove-unknown{opacity:.5}
 `]}setConfig(t){ta(t),super.setConfig(t)}connectedCallback(){super.connectedCallback(),this._clock=setInterval(()=>{this.hass&&this.config&&Ye(this.hass,this.config).timer_entity&&this.requestUpdate()},1e3)}disconnectedCallback(){clearInterval(this._clock),super.disconnectedCallback()}appearance(t){return[this.palette(t.color||"peach"),t.tint_color?`--p-tint:${t.tint_color}`:"",t.accent_color?`--p-accent:${t.accent_color}`:"",t.background_color?`--p-surface:${t.background_color}`:"",t.pellet_warning_color?`--stove-warning:${t.pellet_warning_color}`:"",t.text_color?`--p-ink:${t.text_color}`:"",t.secondary_text_color?`--p-muted:${t.secondary_text_color}`:""].filter(Boolean).join(";")}formatted(t){return t===null?"\u2014":new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:1}).format(t)}run(t){if(!St(this.hass,t)||this.busy)return;let e=Ke(t);return this.call(e.action,e.entity,e.data,e.target)}illustration(t){let e=!t.unknown&&!["off","cooling"].includes(t.id);return o`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="26" y="10" width="68" height="99" rx="14"/><path d="M26 35h68M38 23h19M45 95h30M45 101h30"/><circle cx="80" cy="23" r="2.5" fill="currentColor"/><rect x="36" y="45" width="48" height="37" rx="6"/><g opacity=${e?"1":".2"}>${b`<path d="M60 76c-14-6-12-16-7-23 0 7 4 8 6 3 1-4 4-7 4-7s-1 8 5 13c7 7 1 12-8 14Z"/>`}</g></svg>`}metric(t,e,i,a=""){return o`<button class="metric" @click=${()=>this.info(i)}><small>${t}</small><strong>${this.formatted(e)}<span class="unit">${a}</span></strong></button>`}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=Xi(t),i=Ye(this.hass,t),a=Ji(this.hass,i.timer_entity),r=k(this.hass,t.pellet_entity,t.pellet_attribute),n=r!==null&&r<Number(t.pellet_warning_threshold??20);return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:stove"}></ha-icon></div><div class="heading"><h2>${t.title||"Stufa"}</h2><div class="subtitle">${t.subtitle??"Stufa a pellet"}</div></div><span class="pill">${i.badge||i.label}</span></header>
  <div class="hero">${this.illustration(i)}<div class="right"><div class="status" role="status">${i.label}</div><div class="caption">${t.hero_caption??t.title??"Stufa"}</div>${a?o`<div class="timer">${a}${this.hass.states[i.timer_entity]?.state==="paused"?" \xB7 In pausa":""}</div>`:""}</div></div>
  ${e.entity||t.pellet_entity||t.ambient_entity||t.sacks_entity?o`<div class="metrics">${e.entity?this.metric(t.temperature_label||"Temperatura impostata",k(this.hass,e.entity,e.attribute),e.entity,t.temperature_unit||"\xB0C"):""}${t.pellet_entity?o`<button class="metric" @click=${()=>this.info(t.pellet_entity)}><div class="pellet-head"><small>${t.pellet_label||"Pellet"}</small>${n?o`<span class="pellet-warning">${t.pellet_warning_label||"Rabbocca"}</span>`:""}</div><strong>${r===null?"\u2014":Math.round(Math.min(100,Math.max(0,r)))}<span class="unit">%</span></strong><div class="pellet-track" role="progressbar" aria-label=${t.pellet_label||"Pellet"} aria-valuemin="0" aria-valuemax="100" aria-valuenow=${r===null?"":Math.min(100,Math.max(0,r))} aria-valuetext=${r===null?"Non disponibile":`${Math.round(r)}%`}><div class="pellet-fill" style=${`width:${r===null?0:Math.min(100,Math.max(0,r))}%`}></div></div></button>`:""}${t.ambient_entity?this.metric(t.ambient_label||"Temperatura ambiente",k(this.hass,t.ambient_entity,t.ambient_attribute),t.ambient_entity,t.temperature_unit||"\xB0C"):""}${t.sacks_entity?this.metric("Sacchi disponibili",k(this.hass,t.sacks_entity),t.sacks_entity):""}</div>`:""}
  <div class="stove-actions">${(t.controls||[]).map(l=>o`<button style=${[l.color?`color:${l.color}`:"",l.background?`background:${l.background}`:""].join(";")} ?disabled=${this.busy||!St(this.hass,l)} @click=${()=>this.run(l)}>${l.icon?o`<ha-icon icon=${l.icon}></ha-icon>`:""}${l.name||this.hass.states[l.entity]?.attributes?.friendly_name||"Esegui"}</button>`)}</div>
  ${(t.steppers||[]).map(l=>{let c=k(this.hass,l.entity,l.attribute);return o`<div class="control"><span class="stepper-label">${l.icon?o`<ha-icon icon=${l.icon}></ha-icon>`:""}${l.name||"Valore"}</span><div class="stepper"><button aria-label=${`${l.name||"Valore"} \u2212`} ?disabled=${this.busy||!St(this.hass,l.minus)||c!==null&&l.min!==void 0&&c<=Number(l.min)} @click=${()=>this.run(l.minus)}>−</button><span aria-live="polite">${this.formatted(c)}${l.unit||""}</span><button aria-label=${`${l.name||"Valore"} +`} ?disabled=${this.busy||!St(this.hass,l.plus)||c!==null&&l.max!==void 0&&c>=Number(l.max)} @click=${()=>this.run(l.plus)}>+</button></div></div>`})}
  ${!t.states?.length&&!t.entity?o`<div class="empty">Apri l’editor per associare stati, sensori e script della stufa.</div>`:""}${this.feedback()}</ha-card>`}};var Wt=class extends y{static get styles(){return[super.styles,m`.item{border-top:1px solid var(--divider-color,#ddd);padding:14px 0;display:grid;gap:10px}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button{font-size:12px;min-width:44px}.editor details>label{margin-top:12px}.condition{padding:12px;background:var(--p-tint);border-radius:12px;display:grid;gap:10px}textarea{font:inherit;min-height:70px;width:100%}.editor .pair{align-items:start}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}}`]}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}text(t,e,i,a="text"){return o`<label>${t}<input aria-label=${t} type=${a} .value=${String(e??"")} @change=${r=>i(r.target.value)}></label>`}field(t,e,i="text"){return this.text(e,this.config[t],a=>this.emit({[t]:i==="number"?a===""?void 0:Number(a):a}),i)}select(t,e,i,a){return o`<label>${t}<select aria-label=${t} @change=${r=>a(r.target.value)}>${i.map(([r,n])=>o`<option value=${r} ?selected=${e===r}>${n}</option>`)}</select></label>`}entity(t,e,i,a){let r=Object.values(this.hass.states).filter(l=>!a||a.includes(l.entity_id.split(".")[0])).sort((l,c)=>l.entity_id.localeCompare(c.entity_id));this._entityId=(this._entityId||0)+1;let n="stove-entities-"+this._entityId;return o`<label>${t}<input aria-label=${t} list=${n} .value=${e||""} placeholder=${a?.length===1&&a[0]==="script"?"Cerca o scrivi script.nome":"Cerca per nome o scrivi entity_id"} autocomplete="off" autocapitalize="none" spellcheck="false" @change=${l=>i(l.target.value.trim())}><datalist id=${n}>${r.map(l=>o`<option value=${l.entity_id} label=${l.attributes?.friendly_name||l.entity_id}></option>`)}</datalist></label>`}updateItem(t,e,i){this.emit({[t]:(this.config[t]||[]).map((a,r)=>r===e?{...a,...i}:a)})}temperatureStepper(t,e){this.emit({steppers:(this.config.steppers||[]).map((i,a)=>({...i,show_as_temperature:a===t?e:!1}))})}stepLimit(t,e,i){let a=[...this.config.steppers||[]],r={...a[t]};i===""?delete r[e]:r[e]=Number(i),a[t]=r,this.emit({steppers:a})}reorder(t,e,i){let a=[...this.config[t]||[]],r=e+i;r<0||r>=a.length||([a[e],a[r]]=[a[r],a[e]],this.emit({[t]:a}))}tools(t,e){return o`<div class="tools"><button aria-label="Sposta prima" ?disabled=${e===0} @click=${()=>this.reorder(t,e,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${e===(this.config[t]||[]).length-1} @click=${()=>this.reorder(t,e,1)}>↓</button><button @click=${()=>this.emit({[t]:this.config[t].filter((i,a)=>a!==e)})}>Rimuovi</button></div>`}actionFields(t,e,i){let a=t||{};return o`${this.entity(i,a.entity,r=>e({...a,entity:r}),["script"])}<details><summary>Azione avanzata</summary>${this.text("Servizio opzionale (dominio.azione)",a.action,r=>{let n={...a};r?n.action=r:delete n.action,e(n)})}<p class="hint">Per uno script basta selezionarlo sopra. Dati e destinazioni personalizzati restano disponibili in YAML.</p></details>`}conditionFields(t,e,i,a){let r=n=>this.updateItem("states",e,{conditions:t.conditions.map((l,c)=>c===a?{...l,...n}:l)});return o`<div class="condition">${this.entity("Entit\xE0 da controllare",i.entity,n=>r({entity:n}))}<div class="pair">${this.select("Confronto",i.operator||"equals",[["equals","Uguale a"],["not_equals","Diverso da"]],n=>r({operator:n}))}${this.text("Stato atteso",i.state,n=>r({state:n}))}</div>${this.text("Attributo opzionale",i.attribute,n=>r({attribute:n}))}<button @click=${()=>this.updateItem("states",e,{conditions:t.conditions.filter((n,l)=>l!==a)})}>Rimuovi condizione</button></div>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"peach")}>
  <details open><summary>Aspetto</summary><div class="pair">${this.field("title","Titolo")}${this.field("subtitle","Sottotitolo")}</div>${this.field("hero_caption","Testo sotto lo stato")}${this.field("icon","Icona (mdi:stove)")}${this.select("Palette Pastel",t.color||"peach",[["peach","Pesca"],["blue","Blu"],["mint","Menta"],["lavender","Lavanda"],["pink","Rosa"],["amber","Ambra"],["teal","Verde acqua"],["red","Rosso"]],e=>this.emit({color:e}))}<details><summary>Colori personalizzati</summary><p class="hint">Se vuoti, seguono la palette e il tema Home Assistant. Per una card sempre bianca imposta lo sfondo a #ffffff.</p>${this.field("tint_color","Sfondo delle aree colorate")}${this.field("accent_color","Colore di disegni e comandi")}${this.field("background_color","Sfondo card (opzionale)")}${this.field("text_color","Colore testo principale (opzionale)")}${this.field("secondary_text_color","Colore testo secondario (opzionale)")}</details></details>
  <details open><summary>Sensori e pellet</summary>${this.entity("Temperatura impostata",t.temperature_entity,e=>this.emit({temperature_entity:e}),t.temperature_attribute?void 0:["sensor","counter","input_number","number"])}${this.entity("Livello pellet (%)",t.pellet_entity,e=>this.emit({pellet_entity:e}),void 0)}${this.entity("Temperatura ambiente (opzionale)",t.ambient_entity,e=>this.emit({ambient_entity:e}),t.ambient_attribute?void 0:["sensor","counter","input_number","number"])}${this.entity("Aiutante contatore sacchi (opzionale)",t.sacks_entity,e=>this.emit({sacks_entity:e}),["counter"])}<div class="pair">${this.field("pellet_warning_threshold","Avviso pellet sotto (%)","number")}${this.field("temperature_unit","Unit\xE0 temperatura")}</div><details><summary>Testi e attributi</summary>${this.field("temperature_label","Etichetta temperatura")}${this.field("pellet_label","Etichetta pellet")}${this.field("ambient_label","Etichetta ambiente")}${this.field("pellet_warning_label","Testo avviso pellet")}${this.field("pellet_warning_color","Colore avviso pellet")}${this.field("temperature_attribute","Attributo temperatura (opzionale)")}${this.field("pellet_attribute","Attributo pellet (opzionale)")}${this.field("ambient_attribute","Attributo ambiente (opzionale)")}</details></details>
  <details open><summary>Pulsanti (${t.controls?.length||0})</summary><p class="hint">Aggiungi le funzioni che ti servono. I pulsanti vanno a capo automaticamente e seguono la palette.</p>${(t.controls||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Nome pulsante",e.name,a=>this.updateItem("controls",i,{name:a}))}${this.text("Icona opzionale",e.icon,a=>this.updateItem("controls",i,{icon:a}))}</div>${this.actionFields(e,a=>this.updateItem("controls",i,a),"Script da avviare")}<details><summary>Colore di questo pulsante</summary>${this.text("Colore testo opzionale",e.color,a=>this.updateItem("controls",i,{color:a}))}${this.text("Sfondo opzionale",e.background,a=>this.updateItem("controls",i,{background:a}))}</details>${this.tools("controls",i)}</div>`)}<button @click=${()=>this.emit({controls:[...t.controls||[],{name:"Nuova funzione",entity:""}]})}>Aggiungi pulsante</button></details>
  <details open><summary>Controlli −/+ (${t.steppers?.length||0})</summary><p class="hint">Scegli l’aiutante counter o input_number modificato dagli script, poi associa uno script a ciascun tasto. Il numero mostrato viene letto dall’aiutante e segue anche le modifiche esterne. Minimo e massimo sono liberi e opzionali: lasciali vuoti se gestiti dagli script.</p>${(t.steppers||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Nome controllo",e.name,a=>this.updateItem("steppers",i,{name:a}))}${this.text("Unit\xE0",e.unit,a=>this.updateItem("steppers",i,{unit:a}))}</div>${this.entity("Aiutante del valore",e.entity,a=>this.updateItem("steppers",i,{entity:a}),["counter","input_number"])}<label class="check"><input type="checkbox" .checked=${!!e.show_as_temperature} @change=${a=>this.temperatureStepper(i,a.target.checked)}>Mostra questo aiutante anche come temperatura impostata</label>${this.actionFields(e.minus,a=>this.updateItem("steppers",i,{minus:a}),"Script tasto \u2212")}${this.actionFields(e.plus,a=>this.updateItem("steppers",i,{plus:a}),"Script tasto +")}<details><summary>Opzioni del controllo</summary><p class="hint">Il campo aiutante suggerisce solo counter e input_number. Puoi scrivere un ID diverso per mantenere una sorgente personalizzata già utilizzata. La spunta temperatura collega anche il riquadro in alto allo stesso valore.</p>${this.text("Icona",e.icon,a=>this.updateItem("steppers",i,{icon:a}))}${this.text("Attributo opzionale",e.attribute,a=>this.updateItem("steppers",i,{attribute:a}))}<div class="pair">${this.text("Minimo opzionale",e.min,a=>this.stepLimit(i,"min",a),"number")}${this.text("Massimo opzionale",e.max,a=>this.stepLimit(i,"max",a),"number")}</div></details>${this.tools("steppers",i)}</div>`)}<button @click=${()=>this.emit({steppers:[...t.steppers||[],{name:"Nuovo controllo",entity:"",minus:{},plus:{}}]})}>Aggiungi controllo −/+</button></details>
  <details open><summary>Stati della stufa (${t.states?.length||0})</summary><p class="hint">Le regole si leggono dall’alto: vince la prima corrispondente. Per esempio «In accensione» può richiedere sia un helper acceso sia un timer attivo. La ricerca e l’editor non avviano script.</p>${(t.states||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Testo stato",e.label,a=>this.updateItem("states",i,{label:a}))}${this.text("Testo badge",e.badge,a=>this.updateItem("states",i,{badge:a}))}</div>${this.select("Condizioni richieste",e.match||"all",[["all","Tutte (E)"],["any","Almeno una (O)"]],a=>this.updateItem("states",i,{match:a}))}${(e.conditions||[]).map((a,r)=>this.conditionFields(e,i,a,r))}<button @click=${()=>this.updateItem("states",i,{conditions:[...e.conditions||[],{entity:"",state:"on"}]})}>Aggiungi condizione</button>${this.entity("Timer da mostrare (opzionale)",e.timer_entity,a=>this.updateItem("states",i,{timer_entity:a}),["timer"])}${this.select("Illustrazione della fiamma",e.id||"active",[["active","Visibile"],["off","Spenta"],["cooling","Raffreddamento"]],a=>this.updateItem("states",i,{id:a}))}${this.tools("states",i)}</div>`)}<button @click=${()=>this.emit({states:[...t.states||[],{label:"Nuovo stato",badge:"Stato",match:"all",conditions:[{entity:"",state:"on"}]}]})}>Aggiungi stato</button>${this.field("fallback_label","Stato quando nessuna regola corrisponde")}${this.field("fallback_badge","Badge quando nessuna regola corrisponde")}<details><summary>Stato da un’entità</summary>${this.entity("Entit\xE0 di stato opzionale",t.entity,e=>this.emit({entity:e}))}<p class="hint">Usata dopo le regole, se nessuna corrisponde. Senza entità viene usato il testo di riserva.</p></details></details>
 </div>`}};var Ge=[["mdi:power","Accensione"],["mdi:power-off","Spegnimento"],["mdi:snowflake","Raffreddamento"],["mdi:fire","Riscaldamento"],["mdi:water","Deumidificazione"],["mdi:fan","Ventilazione"],["mdi:weather-night","Notte"],["mdi:sleep","Quiet"],["mdi:air-conditioner","Climatizzatore"],["mdi:thermostat","Automatico"],["mdi:thermometer","Temperatura"],["mdi:leaf","Eco"],["mdi:fan-plus","Ventola +"],["mdi:fan-minus","Ventola \u2212"],["mdi:arrow-up-down","Oscillazione"],["mdi:timer-outline","Timer"],["mdi:plus","Aumenta"],["mdi:minus","Diminuisci"],["mdi:lightning-bolt","Turbo"],["mdi:restart","Ripristino"]],ea=[["blue","Blu"],["mint","Menta"],["peach","Pesca"],["lavender","Lavanda"],["pink","Rosa"],["amber","Ambra"],["teal","Verde acqua"],["red","Rosso"]];function Ht(s){return!!s?.entity_id?.startsWith("sensor.")&&(s.attributes?.device_class==="temperature"||["\xB0C","\xB0F","K"].includes(s.attributes?.unit_of_measurement))}function Qe(s,t){return!!t?.script?.startsWith("script.")&&!!s?.states?.[t.script]&&s.states[t.script].state!=="unavailable"&&!!s?.services?.script?.turn_on}function Xe(s,t){if(!t||t.startsWith("script."))return null;let e=s?.states?.[t];return!e||["unknown","unavailable"].includes(e.state)?{available:!1,label:"Non disponibile"}:{available:!0,state:e.state,label:{on:"Acceso",off:"Spento",cool:"Raffreddamento",heat:"Riscaldamento",dry:"Deumidificazione",fan_only:"Ventilazione",auto:"Automatico",heat_cool:"Automatico"}[e.state]||e.state}}function ia(s){if(s.buttons!==void 0&&!Array.isArray(s.buttons))throw new Error("buttons deve essere una lista.");if(s.temperature_entity!==void 0&&typeof s.temperature_entity!="string")throw new Error("Il sensore temperatura deve essere un ID di entit\xE0.");for(let t of s.buttons||[]){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Pulsante non valido.");if(t.script!==void 0&&(typeof t.script!="string"||t.script&&!t.script.startsWith("script.")))throw new Error("Scegli uno script per ciascun pulsante.")}}var Zt=class extends y{static getConfigElement(){return document.createElement("pastel-script-climate-card-editor")}static getStubConfig(){return{title:"Climatizzatore",subtitle:"Clima con script",color:"blue",temperature_entity:"",buttons:[{name:"Accendi",icon:"mdi:power",script:""},{name:"Raffreddamento",icon:"mdi:snowflake",script:""},{name:"Deumidifica",icon:"mdi:water",script:""},{name:"Quiet",icon:"mdi:sleep",script:""},{name:"Spegni",icon:"mdi:power-off",script:""}]}}static get styles(){return[super.styles,m`
  .reading{font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.reading small{font-size:16px;margin-left:3px;letter-spacing:0}.climate-actions{display:flex;flex-wrap:wrap;gap:8px}.climate-button{flex:1 1 110px;min-width:90px;min-height:72px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;overflow-wrap:anywhere;line-height:1.4}.climate-button ha-icon{--mdc-icon-size:23px;flex-shrink:0}.climate-button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.climate-button small{font-size:11px;font-weight:400}.hero .right{flex:1}.sensor-info{font-size:11px;color:var(--p-muted);margin:12px 0 0;overflow-wrap:anywhere}
  @media(max-width:340px){.hero{padding:16px;gap:10px}.hero svg{width:76px;height:76px}.hero .reading{font-size:28px}}
 `]}setConfig(t){ia(t),super.setConfig(t)}appearance(t){return[this.palette(t.color||"blue"),...Object.entries({tint_color:"--p-tint",accent_color:"--p-accent",background_color:"--p-surface",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([e])=>t[e]).map(([e,i])=>`${i}:${t[e]}`)].join(";")}async run(t){this.busy||!Qe(this.hass,t)||await this.call("script.turn_on",t.script)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.hass.states[t.temperature_entity],i=k(this.hass,t.temperature_entity),a=e?.attributes?.unit_of_measurement||this.hass.config?.unit_system?.temperature||"\xB0C",r=Xe(this.hass,t.state_entity),n=i===null?"\u2014":new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:1}).format(i);return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:air-conditioner"}></ha-icon></div><div class="heading"><h2>${t.title||"Climatizzatore"}</h2><div class="subtitle">${t.subtitle??"Clima con script"}</div></div>${r?o`<span class="pill">${r.label}</span>`:""}</header>
  <div class="hero">${C("climate")}<div class="right"><div class="reading" aria-live="polite">${n}<small>${a}</small></div><div class="caption">${t.temperature_label||"Temperatura ambiente"}</div></div></div>
  <div class="climate-actions">${(t.buttons||[]).map(l=>{let c=Xe(this.hass,l.state_entity),d=c?.available?c.state===String(l.active_state??"on"):null;return o`<button class="climate-button" style=${l.color?this.palette(l.color):""} aria-pressed=${d===null?"undefined":String(d)} ?disabled=${this.busy||!Qe(this.hass,l)} @click=${()=>this.run(l)}><ha-icon icon=${l.icon||"mdi:air-conditioner"}></ha-icon><span>${l.name||this.hass.states[l.script]?.attributes?.friendly_name||"Esegui"}</span>${c?o`<small>${c.available?d?l.active_label||"Attivo":l.inactive_label||"Non attivo":"Non disponibile"}</small>`:""}</button>`})}</div>
  ${t.temperature_entity?"":o`<div class="sensor-info">Scegli il sensore di temperatura nell’editor.</div>`}${t.buttons?.length?"":o`<div class="empty">Aggiungi i pulsanti e scegli gli script nell’editor.</div>`}${this.feedback()}</ha-card>`}};var S=class extends y{static get styles(){return[super.styles,m`
  .button-editor{border-top:1px solid var(--divider-color,#ddd);padding:16px 0;display:grid;gap:12px}.button-title{display:flex;gap:8px;align-items:center;font-size:14px;font-weight:600}.button-title ha-icon{color:var(--p-accent);--mdc-icon-size:22px}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button{min-width:44px;font-size:12px}.icon-options{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:12px}.icon-options button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-height:64px;padding:8px 4px;font-size:11px;overflow-wrap:anywhere}.icon-options button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.icon-options ha-icon{--mdc-icon-size:22px}.editor details>label{margin-top:12px}.editor h3{margin:0}.editor .hint{margin:0}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}.icon-options{grid-template-columns:repeat(3,minmax(0,1fr))}}
 `]}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}text(t,e,i){return o`<label>${t}<input aria-label=${t} .value=${String(e??"")} @change=${a=>i(a.target.value)}></label>`}paletteSelect(t,e,i,a=!1){return o`<label>${t}<select aria-label=${t} @change=${r=>i(r.target.value)}>${a?o`<option value="" ?selected=${!e}>Come la card</option>`:""}${ea.map(([r,n])=>o`<option value=${r} ?selected=${e===r}>${n}</option>`)}</select></label>`}entity(t,e,i,a,r="Cerca per nome o scrivi entity_id"){let n=Object.values(this.hass.states).filter(c=>!a||a(c)).sort((c,d)=>(c.attributes?.friendly_name||c.entity_id).localeCompare(d.attributes?.friendly_name||d.entity_id));this._entityId=(this._entityId||0)+1;let l=`script-climate-entity-${this._entityId}`;return o`<label>${t}<input aria-label=${t} list=${l} .value=${e||""} placeholder=${r} autocomplete="off" autocapitalize="none" spellcheck="false" @change=${c=>i(c.target.value.trim())}><datalist id=${l}>${n.map(c=>o`<option value=${c.entity_id} label=${c.attributes?.friendly_name||c.entity_id}></option>`)}</datalist></label>`}updateButton(t,e){this.emit({buttons:(this.config.buttons||[]).map((i,a)=>t===a?{...i,...e}:i)})}move(t,e){let i=[...this.config.buttons||[]],a=t+e;a<0||a>=i.length||([i[t],i[a]]=[i[a],i[t]],this.emit({buttons:i}))}iconPicker(t,e){let i=t.icon||"mdi:air-conditioner",a=Ge.find(([r])=>r===i)?.[1]||"Personalizzata";return o`<details><summary>Icona: ${a}</summary><div class="icon-options">${Ge.map(([r,n])=>o`<button aria-label=${`Icona ${n}`} aria-pressed=${String(i===r)} @click=${()=>this.updateButton(e,{icon:r})}><ha-icon icon=${r}></ha-icon><span>${n}</span></button>`)}</div></details>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>
  <div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>
  ${this.entity("Sensore di temperatura",t.temperature_entity,e=>this.emit({temperature_entity:e}),Ht,"Cerca un sensore di temperatura")}
  ${this.paletteSelect("Colore card",t.color||"blue",e=>this.emit({color:e}))}
  <h3>Pulsanti (${t.buttons?.length||0})</h3><p class="hint">Per ogni funzione scegli lo script, il nome e l’icona. Puoi aggiungere tutti i pulsanti che ti servono.</p>
  ${(t.buttons||[]).map((e,i)=>o`<section class="button-editor" aria-label=${`Configura ${e.name||"pulsante "+(i+1)}`}><div class="button-title"><ha-icon icon=${e.icon||"mdi:air-conditioner"}></ha-icon>${e.name||"Nuovo pulsante"}</div>${this.text("Nome pulsante",e.name,a=>this.updateButton(i,{name:a}))}${this.entity("Script del pulsante",e.script,a=>this.updateButton(i,{script:a}),a=>a.entity_id.startsWith("script."),"Cerca o scrivi script.nome")}${this.iconPicker(e,i)}${this.paletteSelect("Colore pulsante",e.color||"",a=>this.updateButton(i,{color:a}),!0)}<div class="tools"><button aria-label="Sposta pulsante prima" ?disabled=${i===0} @click=${()=>this.move(i,-1)}>↑</button><button aria-label="Sposta pulsante dopo" ?disabled=${i===(t.buttons||[]).length-1} @click=${()=>this.move(i,1)}>↓</button><button @click=${()=>this.emit({buttons:t.buttons.filter((a,r)=>i!==r)})}>Rimuovi pulsante</button></div><details><summary>Indicatore di stato opzionale</summary><p class="hint">Usa un aiutante o un sensore che indica la funzione attiva. Lo stato dello script non indica se il climatizzatore è acceso.</p>${this.entity("Entit\xE0 funzione attiva",e.state_entity,a=>this.updateButton(i,{state_entity:a}),a=>!a.entity_id.startsWith("script."))}${this.text("Stato che indica attivo",e.active_state??"on",a=>this.updateButton(i,{active_state:a}))}</details></section>`)}
  <button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuovo pulsante",script:"",icon:"mdi:power"}]})}>Aggiungi pulsante</button>
  <details><summary>Altre opzioni</summary>${this.text("Etichetta temperatura",t.temperature_label,e=>this.emit({temperature_label:e}))}${this.entity("Stato del climatizzatore (opzionale)",t.state_entity,e=>this.emit({state_entity:e}),e=>!e.entity_id.startsWith("script."))}<p class="hint">Il badge compare solo se associ un’entità di stato reale. Un sensore non classificato come temperatura può essere inserito scrivendone l’ID.</p>${this.text("Icona intestazione opzionale",t.icon,e=>this.emit({icon:e}))}<details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],a=>this.emit({[e]:a})))}</details></details>
 </div>`}};var J=[{action:"alarm_arm_home",name:"In Casa",state:"armed_home",feature:1,icon:"mdi:home"},{action:"alarm_arm_night",name:"Notte",state:"armed_night",feature:4,icon:"mdi:weather-night"},{action:"alarm_arm_away",name:"Fuori Casa",state:"armed_away",feature:2,icon:"mdi:walk"},{action:"alarm_disarm",name:"Disattiva",state:"disarmed",feature:0,icon:"mdi:shield-off"},{action:"alarm_arm_vacation",name:"Vacanza",state:"armed_vacation",feature:32,icon:"mdi:airplane"},{action:"alarm_arm_custom_bypass",name:"Personalizzata",state:"armed_custom_bypass",feature:16,icon:"mdi:shield-half-full"},{action:"alarm_trigger",name:"Attiva sirena",state:"triggered",feature:8,icon:"mdi:alarm-light"}],Je=[["mdi:shield","Allarme"],["mdi:home","In Casa"],["mdi:weather-night","Notte"],["mdi:walk","Fuori Casa"],["mdi:shield-off","Disattiva"],["mdi:shield-lock","Protezione"],["mdi:shield-home","Perimetrale"],["mdi:airplane","Vacanza"],["mdi:alarm-light","Sirena"],["mdi:door-open","Porta"],["mdi:window-open","Finestra"],["mdi:smoke-detector","Fumo"],["mdi:molecule-co2","CO\u2082"],["mdi:molecule-co","CO"],["mdi:gas-cylinder","Gas"],["mdi:motion-sensor","Movimento"],["mdi:water-alert","Acqua"],["mdi:lock","Serratura"],["mdi:bell-outline","Notifica"],["mdi:view-dashboard-outline","Riepilogo"]],ti={disarmed:["Disattivato","Sistema non inserito"],armed_home:["In Casa","Protezione in casa"],armed_night:["Notte","Protezione notturna"],armed_away:["Fuori Casa","Protezione durante l\u2019assenza"],armed_vacation:["Vacanza","Protezione durante l\u2019assenza"],armed_custom_bypass:["Personalizzata","Protezione personalizzata"],arming:["In attivazione\u2026","Inserimento in corso"],disarming:["Disattivazione\u2026","Disinserimento in corso"],pending:["In attesa\u2026","Attesa del sistema"],triggered:["Allarme!","Segnalazione dal sistema"]};function aa(s){return!!s&&["sensor","binary_sensor"].includes(s.entity_id?.split(".")[0])&&["smoke","gas","carbon_monoxide","carbon_dioxide","safety","problem"].includes(s.attributes?.device_class)}function ei(s,t){if(!t)return{label:"Da associare",detail:"Seleziona il pannello allarme",unknown:!0};let e=s?.states?.[t];if(!e||["unknown","unavailable"].includes(e.state))return{label:"Non disponibile",detail:"Dati non disponibili",unknown:!0};let i=ti[e.state];return{state:e.state,label:i?.[0]||e.state,detail:i?.[1]||"Stato del pannello",unknown:!i,alert:e.state==="triggered",waiting:["arming","disarming","pending"].includes(e.state)}}function ii(s,t,e){let i=s?.states?.[t],a=J.find(r=>r.action===e);return!!t?.startsWith("alarm_control_panel.")&&!!i&&!["unknown","unavailable"].includes(i.state)&&!!a&&(!a.feature||(Number(i.attributes?.supported_features||0)&a.feature)!==0)&&!!s?.services?.alarm_control_panel?.[e]}function ai(s,t,e){return e.kind==="script"?!!e.script?.startsWith("script.")&&!!s?.states?.[e.script]&&s.states[e.script].state!=="unavailable"&&!!s?.services?.script?.turn_on:ii(s,t.entity,e.action)}function sa(s,t,e){if(e.kind==="script")return!1;let i=s?.states?.[t.entity]?.attributes||{};return!!i.code_format&&(e.action==="alarm_disarm"||e.action==="alarm_trigger"||i.code_arm_required!==!1)}function ra(s,t){if(t.kind==="alarm"){let n=ei(s,t.entity);return{...n,value:n.label,detail:n.unknown?n.detail:n.alert?"Segnalazione attiva":n.waiting?"Operazione in corso":n.state==="disarmed"?"Sistema non inserito":"Allarme inserito"}}if(t.kind==="count"){let n=k(s,t.entity,t.attribute),l=n!==null&&Number.isInteger(n)&&n>=0;return{value:l?String(n):"\u2014",detail:l?n===0?t.zero_label||"Tutte chiuse":t.open_label||"Aperture rilevate":"Dati non disponibili",unknown:!l,attention:l&&n>0}}let e=t.entities||[];if(!e.length)return{value:"Da associare",detail:"Sensori non configurati",unknown:!0};let i=!1,a=!1,r=!1;for(let n of e){let l=s?.states?.[n];if(!l||["unknown","unavailable"].includes(l.state)){i=!0;continue}if(l.state===String(t.active_state??"on")){r=!0;continue}if(l.state===String(t.normal_state??"off"))continue;let c=k(s,n),d=t.threshold===void 0||t.threshold===null||String(t.threshold).trim()===""?null:Number(t.threshold);if(c===null){i=!0;continue}if(d===null||!Number.isFinite(d)){a=!0;continue}c>=d&&(r=!0)}return r?{value:t.alert_label||"Segnalazione",detail:i||a?"Segnalazione \xB7 dati parziali":"Controlla i sensori",alert:!0,unknown:i||a}:i||a?{value:a?"Imposta soglia":"Non disponibile",detail:a?"Soglia per il sensore numerico":"Dati non disponibili",unknown:!0}:{value:t.normal_label||"OK",detail:"Nessuna segnalazione",unknown:!1}}function oa(s){return s.some(t=>t.alert)?"Segnalazione":s.some(t=>t.attention)?"Aperture rilevate":s.some(t=>t.unknown)?"Dati parziali":s.some(t=>t.waiting)?"Operazione in corso":s.length?"Nessuna segnalazione":"Da configurare"}function na(s){if(s.entity!==void 0&&(typeof s.entity!="string"||s.entity&&!s.entity.startsWith("alarm_control_panel.")))throw new Error("Scegli un pannello alarm_control_panel.");if(s.buttons!==void 0&&!Array.isArray(s.buttons))throw new Error("buttons deve essere una lista.");for(let t of s.buttons||[]){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Pulsante non valido.");if(t.kind&&!["script","panel"].includes(t.kind))throw new Error("Scegli Pannello allarme oppure Script.");if(t.script!==void 0&&(typeof t.script!="string"||t.script&&!t.script.startsWith("script.")))throw new Error("Scegli uno script valido.");if(t.action&&!J.some(e=>e.action===t.action))throw new Error("Comando allarme non valido.")}}function la(s){if(s.tiles!==void 0&&!Array.isArray(s.tiles))throw new Error("tiles deve essere una lista.");for(let t of s.tiles||[]){if(!t||!["alarm","count","detector"].includes(t.kind))throw new Error("Tipo di riquadro non valido.");if(t.entities!==void 0&&(!Array.isArray(t.entities)||t.entities.some(e=>typeof e!="string")))throw new Error("I sensori devono essere una lista di entit\xE0.");if(t.threshold!==void 0&&!Number.isFinite(Number(t.threshold)))throw new Error("Soglia numerica non valida.")}}var Yt=class extends y{static get properties(){return{...super.properties,_pending:{},_pin:{}}}static getConfigElement(){return document.createElement("pastel-alarm-card-editor")}static getStubConfig(){return{title:"Alarm",subtitle:"Sistema allarme",entity:"",color:"blue",buttons:J.slice(0,4).map(t=>({name:t.name,kind:"panel",action:t.action,state:t.state,icon:t.icon}))}}static get styles(){return[super.styles,m`.alarm-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.alarm-actions button{min-height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;overflow-wrap:anywhere}.alarm-actions ha-icon{--mdc-icon-size:21px}.alarm-actions button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.danger{color:var(--error-color,#963f3b)}.code-form{display:grid;gap:10px;padding-top:16px}.code-form label{display:grid;gap:7px;font-size:13px}.code-actions{display:flex;gap:8px}.code-actions button{flex:1}.code-form input{width:100%}.hero .right{flex:1}@media(max-width:340px){.hero{padding:16px}.hero svg{width:76px;height:76px}}`]}setConfig(t){na(t),this._pending=null,this._pin="",super.setConfig(t)}disconnectedCallback(){this._pin="",this._pending=null,super.disconnectedCallback()}async run(t,e){if(!(this.busy||!ai(this.hass,this.config,t))){if(sa(this.hass,this.config,t)&&!e){this._pending=t,this._pin="",this.error="";return}return this._pending=null,this._pin="",t.kind==="script"?this.call("script.turn_on",t.script):this.call(`alarm_control_panel.${t.action}`,this.config.entity,e?{code:e}:{})}}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=ei(this.hass,t.entity),i=this._pending,a=this.hass.states[t.entity]?.attributes?.code_format==="number";return o`<ha-card style=${this.palette(t.color||"blue")}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:shield"}></ha-icon></div><div class="heading"><h2>${t.title||"Alarm"}</h2><div class="subtitle">${t.subtitle??"Sistema allarme"}</div></div><span class=${e.alert?"pill danger":"pill"}>${e.label}</span></header><div class="hero">${C("alarm")}<div class="right"><div class=${e.alert?"status danger":"status"} role="status">${e.label}</div><div class="caption">${e.detail}</div></div></div><div class="alarm-actions">${(t.buttons||[]).map(r=>o`<button style=${r.color?this.palette(r.color):""} aria-pressed=${String(!!r.state&&!e.unknown&&r.state===e.state)} ?disabled=${this.busy||!ai(this.hass,t,r)} @click=${()=>this.run(r)}><ha-icon icon=${r.icon||"mdi:shield"}></ha-icon><span>${r.name||"Esegui"}</span></button>`)}</div>
 ${i?o`<form class="code-form" @submit=${r=>{r.preventDefault();let n=this._pin;n?.trim()&&this.run(i,n)}}><label>Codice del pannello<input type="password" aria-label="Codice del pannello" inputmode=${a?"numeric":"text"} autocomplete="off" .value=${this._pin||""} @input=${r=>{this._pin=r.target.value}}></label><div class="code-actions"><button type="button" @click=${()=>{this._pending=null,this._pin=""}}>Annulla</button><button type="submit" ?disabled=${!this._pin?.trim()||this.busy}>Invia comando</button></div></form>`:""}${t.entity?"":o`<div class="empty">Scegli il pannello nell’editor. Ogni tasto può usare il pannello oppure uno script.</div>`}${this.feedback()}</ha-card>`}};var Kt=class extends y{static getConfigElement(){return document.createElement("pastel-security-card-editor")}static getStubConfig(){return{title:"Riepilogo sicurezza",subtitle:"Stato della casa",color:"mint",tiles:[{kind:"alarm",name:"Sistema allarme",entity:"",icon:"mdi:shield-check"},{kind:"count",name:"Porte aperte",entity:"",icon:"mdi:door-open"},{kind:"count",name:"Finestre aperte",entity:"",icon:"mdi:window-open"},{kind:"detector",name:"Fumo e CO\u2082",entities:[],icon:"mdi:smoke-detector"}]}}static get styles(){return[super.styles,m`.security-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.security-metric{padding:14px;border:1px solid var(--divider-color,#e8ebed);border-radius:16px;min-height:112px;min-width:0}.metric-heading{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--p-muted);line-height:1.5;min-height:20px}.metric-heading ha-icon{--mdc-icon-size:18px;flex-shrink:0;color:var(--p-accent)}.security-metric strong{display:block;font-size:24px;font-weight:550;letter-spacing:-.5px;line-height:1.3;margin-top:10px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.security-metric small{display:block;font-size:11px;line-height:1.5;color:var(--p-muted);margin-top:5px}.security-metric.words strong{font-size:18px;letter-spacing:-.2px;margin-top:13px}.security-metric.alert strong{color:var(--error-color,#963f3b)}.security-metric.attention strong{color:var(--warning-color,#786022)}.security-metric.unknown strong{color:var(--p-muted)}.security-metric.alert.unknown strong{color:var(--error-color,#963f3b)}`]}setConfig(t){la(t),super.setConfig(t)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=t.tiles||[],i=e.map(a=>ra(this.hass,a));return o`<ha-card style=${this.palette(t.color||"mint")}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:view-dashboard-outline"}></ha-icon></div><div class="heading"><h2>${t.title||"Riepilogo sicurezza"}</h2><div class="subtitle">${t.subtitle??"Stato della casa"}</div></div><span class="pill" role="status">${oa(i)}</span></header><div class="security-metrics" aria-live="polite">${e.map((a,r)=>{let n=i[r];return o`<div class=${`security-metric ${a.kind==="count"?"":"words"} ${n.alert?"alert":""} ${n.attention?"attention":""} ${n.unknown?"unknown":""}`} style=${a.color?this.palette(a.color):""}><div class="metric-heading"><ha-icon icon=${a.icon||(a.kind==="alarm"?"mdi:shield-check":a.kind==="count"?"mdi:door-open":"mdi:smoke-detector")}></ha-icon><span>${a.name||"Stato"}</span></div><strong>${n.value}</strong><small>${n.detail}</small></div>`})}</div>${e.length?"":o`<div class="empty">Aggiungi i riquadri dall’editor.</div>`}</ha-card>`}};var Gt=class extends S{select(t,e,i,a){return o`<label>${t}<select aria-label=${t} @change=${r=>a(r.target.value)}>${i.map(([r,n])=>o`<option value=${r} ?selected=${r===e}>${n}</option>`)}</select></label>`}iconChoices(t,e){let i=t||"mdi:shield",a=Je.find(([r])=>r===i)?.[1]||"Personalizzata";return o`<details><summary>Icona: ${a}</summary><div class="icon-options">${Je.map(([r,n])=>o`<button aria-label=${`Icona ${n}`} aria-pressed=${String(i===r)} @click=${()=>e(r)}><ha-icon icon=${r}></ha-icon><span>${n}</span></button>`)}</div></details>`}updateItem(t,e,i){this.emit({[t]:(this.config[t]||[]).map((a,r)=>r===e?{...a,...i}:a)})}itemTools(t,e){return o`<div class="tools"><button aria-label="Sposta prima" ?disabled=${e===0} @click=${()=>this.reorder(t,e,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${e===(this.config[t]||[]).length-1} @click=${()=>this.reorder(t,e,1)}>↓</button><button @click=${()=>this.emit({[t]:this.config[t].filter((i,a)=>e!==a)})}>Rimuovi</button></div>`}reorder(t,e,i){let a=[...this.config[t]||[]],r=e+i;r<0||r>=a.length||([a[e],a[r]]=[a[r],a[e]],this.emit({[t]:a}))}heading(t,e){let i=this.config;return o`<div class="pair">${this.text("Nome card",i.title??t,a=>this.emit({title:a}))}${this.text("Sottotitolo",i.subtitle,a=>this.emit({subtitle:a}))}</div>${this.paletteSelect("Colore card",i.color||e,a=>this.emit({color:a}))}`}number(t,e,i){return o`<label>${t}<input aria-label=${t} type="number" step="any" .value=${String(e??"")} @change=${a=>i(a.target.value===""?void 0:Number(a.target.value))}></label>`}},Qt=class extends Gt{render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>${this.heading("Alarm","blue")}${this.entity("Pannello allarme",t.entity,e=>this.emit({entity:e}),e=>e.entity_id.startsWith("alarm_control_panel."))}<h3>Pulsanti (${t.buttons?.length||0})</h3><p class="hint">Ogni pulsante può usare una funzione del pannello oppure uno script. Lo stato mostrato viene sempre dal pannello.</p>
 ${(t.buttons||[]).map((e,i)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${e.icon||"mdi:shield"}></ha-icon>${e.name||"Nuovo pulsante"}</div>${this.text("Nome pulsante",e.name,a=>this.updateItem("buttons",i,{name:a}))}${this.select("Tipo di comando",e.kind||"panel",[["panel","Pannello allarme"],["script","Script"]],a=>this.updateItem("buttons",i,{kind:a}))}
 ${e.kind==="script"?this.entity("Script del pulsante",e.script,a=>this.updateItem("buttons",i,{script:a}),a=>a.entity_id.startsWith("script."),"Cerca o scrivi script.nome"):this.select("Funzione del pannello",e.action||"",[["","Scegli una funzione"],...J.map(a=>[a.action,a.name+(t.entity&&!ii(this.hass,t.entity,a.action)?" \xB7 non disponibile":"")])],a=>{let r=J.find(n=>n.action===a);this.updateItem("buttons",i,{action:a,state:r?.state||""})})}
 ${this.iconChoices(e.icon,a=>this.updateItem("buttons",i,{icon:a}))}${this.paletteSelect("Colore pulsante",e.color||"",a=>this.updateItem("buttons",i,{color:a}),!0)}${this.itemTools("buttons",i)}<details><summary>Evidenziazione del pulsante</summary>${this.select("Stato del pannello da evidenziare",e.state||"",[["","Nessuno"],...Object.entries(ti).map(([a,r])=>[a,r[0]])],a=>this.updateItem("buttons",i,{state:a}))}</details></section>`)}
 <button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuovo pulsante",kind:"script",script:"",icon:"mdi:shield"}]})}>Aggiungi pulsante</button></div>`}},Xt=class extends Gt{render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"mint")}>${this.heading("Riepilogo sicurezza","mint")}<h3>Riquadri (${t.tiles?.length||0})</h3>
 ${(t.tiles||[]).map((e,i)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${e.icon||"mdi:shield"}></ha-icon>${e.name||"Nuovo riquadro"}</div>${this.text("Nome riquadro",e.name,a=>this.updateItem("tiles",i,{name:a}))}${this.select("Tipo di dato",e.kind,[["alarm","Stato allarme"],["count","Conteggio aperture"],["detector","Sensori fumo, gas o segnalazione"]],a=>this.updateItem("tiles",i,{kind:a}))}
 ${e.kind==="alarm"?this.entity("Pannello allarme",e.entity,a=>this.updateItem("tiles",i,{entity:a}),a=>a.entity_id.startsWith("alarm_control_panel.")):e.kind==="count"?o`${this.entity("Entit\xE0 del conteggio",e.entity,a=>this.updateItem("tiles",i,{entity:a}),a=>["sensor","counter","input_number","number"].includes(a.entity_id.split(".")[0]))}<details><summary>Testi e attributo</summary>${this.text("Testo con zero aperture",e.zero_label,a=>this.updateItem("tiles",i,{zero_label:a}))}${this.text("Testo con aperture rilevate",e.open_label,a=>this.updateItem("tiles",i,{open_label:a}))}${this.text("Attributo opzionale",e.attribute,a=>this.updateItem("tiles",i,{attribute:a}))}</details>`:o`<p class="hint">Associa i sensori reali. Con un sensore numerico imposta la soglia di segnalazione; senza dati non viene mostrato OK. Per soglie diverse usa riquadri distinti; puoi scrivere l’ID di un sensore non classificato.</p>${(e.entities||[]).map(a=>o`<div class="control"><span>${this.hass.states[a]?.attributes?.friendly_name||a}</span><button @click=${()=>this.updateItem("tiles",i,{entities:e.entities.filter(r=>r!==a)})}>Rimuovi sensore</button></div>`)}${this.entity("Sensore da aggiungere","",a=>{a&&!e.entities?.includes(a)&&this.updateItem("tiles",i,{entities:[...e.entities||[],a]})},aa)}${this.number("Soglia sensori numerici (\u2265)",e.threshold,a=>this.updateItem("tiles",i,{threshold:a}))}<details><summary>Stati e testi personalizzati</summary>${this.text("Stato attivo",e.active_state??"on",a=>this.updateItem("tiles",i,{active_state:a}))}${this.text("Stato normale",e.normal_state??"off",a=>this.updateItem("tiles",i,{normal_state:a}))}${this.text("Testo segnalazione",e.alert_label,a=>this.updateItem("tiles",i,{alert_label:a}))}${this.text("Testo normale",e.normal_label,a=>this.updateItem("tiles",i,{normal_label:a}))}</details>`}
 ${this.iconChoices(e.icon,a=>this.updateItem("tiles",i,{icon:a}))}${this.paletteSelect("Colore riquadro",e.color||"",a=>this.updateItem("tiles",i,{color:a}),!0)}${this.itemTools("tiles",i)}</section>`)}
 <button @click=${()=>this.emit({tiles:[...t.tiles||[],{kind:"count",name:"Nuovo riquadro",entity:"",icon:"mdi:door-open"}]})}>Aggiungi riquadro</button></div>`}};var si=["light","switch","input_boolean"],ca=[["mdi:lightbulb","Lampadina"],["mdi:floor-lamp","Lampada"],["mdi:outdoor-lamp","Esterno"],["mdi:ceiling-light","Soffitto"],["mdi:led-strip-variant","LED"],["mdi:window-shutter","Tapparella"],["mdi:home","Casa"],["mdi:sofa","Soggiorno"]];function tt(s){return(s.entities??s.lights??(s.entity?[{entity:s.entity,name:s.name,energy_entity:s.energy_entity}]:[])).map(t=>typeof t=="string"?{entity:t}:{...t})}function Jt(s,t){let e=s.entities??s.lights;if(e!==void 0&&!Array.isArray(e))throw Error("Le entit\xE0 devono essere una lista.");for(let i of tt(s)){if(!i||typeof i.entity!="string")throw Error("Scegli un\u2019entit\xE0 valida.");if(i.entity&&!(t==="cover"?i.entity.startsWith("cover."):si.includes(i.entity.split(".")[0])))throw Error(t==="cover"?"Scegli una tapparella cover.":"Scegli una luce o un interruttore.")}}function da(s,t){let e=s?.states?.[t.entity],i=e?.attributes||{},a=i.supported_color_modes||[],r=!!e&&["on","off"].includes(e.state),n=t.entity?.startsWith("light."),l=Number.isFinite(i.brightness)?Math.round(i.brightness/255*100):null;return{...t,name:t.name||i.friendly_name||t.entity||"Luce",icon:t.icon||i.icon||"mdi:lightbulb",available:r,on:r&&e.state==="on",brightness:l,dim:n&&a.some(c=>["brightness","color_temp","hs","xy","rgb","rgbw","rgbww","white"].includes(c)),temperature:n&&a.includes("color_temp"),rgbCapable:n&&a.some(c=>["hs","xy","rgb","rgbw","rgbww"].includes(c)),kelvin:Number.isFinite(i.color_temp_kelvin)?i.color_temp_kelvin:Number.isFinite(i.color_temp)&&i.color_temp>0?Math.round(1e6/i.color_temp):null,minKelvin:i.min_color_temp_kelvin||(i.max_mireds?Math.ceil(1e6/i.max_mireds):2e3),maxKelvin:i.max_color_temp_kelvin||(i.min_mireds?Math.floor(1e6/i.min_mireds):6500),rgb:i.rgb_color}}function pa(s){return{on:s.filter(t=>t.on).length,total:s.length,valid:s.filter(t=>t.available).length}}function ua(s){return Array.isArray(s)&&s.length>=3?"#"+s.slice(0,3).map(t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")).join(""):"#ffffff"}function ri(s){return/^#[a-f0-9]{6}$/i.test(s)?[1,3,5].map(t=>parseInt(s.slice(t,t+2),16)):null}var as={open_cover:1,close_cover:2,set_cover_position:4,stop_cover:8};function ha(s,t){let e=s?.states?.[t.entity],i=e?.attributes||{},a=!!e&&["open","closed","opening","closing"].includes(e.state),r=k(s,t.entity,"current_position"),n=a&&r!==null&&r>=0&&r<=100?r:null;return{...t,name:t.name||i.friendly_name||t.entity||"Tapparella",available:a,state:e?.state,features:Number(i.supported_features||0),position:n,label:a?{opening:"In apertura\u2026",closing:"In chiusura\u2026",closed:"Chiusa",open:n!==null&&n<100?"Parzialmente aperta":"Aperta"}[e.state]:"Non disponibile"}}function Ct(s,t,e){return t.available&&!!(t.features&as[e])&&!!s?.services?.cover?.[e]&&!(e==="open_cover"&&(t.position===100||t.state==="opening"))&&!(e==="close_cover"&&(t.position===0||t.state==="closing"))}function ma(s){let t=s.map(e=>e.position).filter(e=>e!==null);return{total:s.length,valid:s.filter(e=>e.available).length,known:t.length,open:s.filter(e=>e.available&&(e.position!==null?e.position>0:e.state!=="closed")).length,average:t.length?Math.round(t.reduce((e,i)=>e+i,0)/t.length):null}}function O(s,t){let e=s.palette(t.color||"blue");return/^#[a-f0-9]{6}$/i.test(t.color||"")&&(e+=`;--p-accent:${t.color};--p-tint:color-mix(in srgb,${t.color} 15%,var(--p-surface))`),[e,...Object.entries({background_color:"--p-surface",tint_color:"--p-tint",accent_color:"--p-accent",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([i])=>t[i]).map(([i,a])=>`${a}:${t[i]}`)].join(";")}var zt=class extends y{static get properties(){return{...super.properties,_expanded:{}}}static getConfigElement(){return document.createElement("pastel-lights-card-editor")}static getStubConfig(){return{title:"Luci",subtitle:"Illuminazione",color:"mint",entities:[]}}static get styles(){return[super.styles,m`.hero{min-height:112px;padding:18px 22px}.hero svg{width:64px;height:64px}.hero .reading{font-size:36px}.reading small{font-size:18px;margin-left:3px}.group{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}.group button{display:flex;gap:7px;justify-content:center;align-items:center;min-height:48px;padding:10px 8px}.group ha-icon{--mdc-icon-size:18px;flex-shrink:0}.light{border-top:1px solid var(--divider-color,#e1e4e8);padding:14px 0}.light:last-child{padding-bottom:0}.light-top{display:flex;align-items:center;gap:10px}.light-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:12px;background:var(--p-tint);color:var(--p-accent);flex-shrink:0}.light-icon ha-icon{--mdc-icon-size:20px}.off .light-icon{background:var(--secondary-background-color,#eef0f3);color:var(--p-muted)}.name-wrap{flex:1;min-width:0}.name{display:block;text-align:left;min-height:48px;padding:3px 0;background:none;border:0;color:var(--p-ink);width:100%;line-height:1.5;font-size:14px;overflow-wrap:anywhere}.state{font-size:12px;line-height:1.5;color:var(--p-muted);margin-top:3px}.power{width:50px;height:48px;flex-shrink:0;border:1px solid var(--divider-color,#e1e4e8);background:var(--p-surface);color:var(--p-muted);display:grid;place-items:center;padding:10px}.power[aria-pressed=true]{background:var(--p-tint);color:var(--p-accent);border-color:transparent}.adjust{display:flex;gap:7px;align-items:center;justify-content:center;margin:6px 0 0 auto;min-height:48px;padding:9px 13px;background:var(--p-surface);border:1px solid var(--divider-color,#e1e4e8);font-size:12px}.adjust ha-icon{--mdc-icon-size:18px}.settings{--range-track:color-mix(in srgb,var(--p-accent) 25%,var(--p-surface));margin-top:10px;padding:14px;background:var(--p-tint);border-radius:15px}.color-label{display:flex;gap:10px;align-items:center;justify-content:space-between;font-size:12px;margin-top:10px;color:var(--p-accent)}input[type=color]{width:66px;height:48px;padding:4px;background:var(--p-surface)}.progress{height:5px;border-radius:4px;background:var(--p-tint);overflow:hidden;margin-bottom:14px}.progress span{display:block;height:100%;background:var(--p-accent)}@media(max-width:340px){ha-card{padding:16px}header{gap:9px}.hero{padding:17px}.hero .reading{font-size:32px}}`]}setConfig(t){Jt(t,"light"),this._expanded=null,super.setConfig(t)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}devices(){return tt(this.config).map(t=>da(this.hass,t))}async toggle(t){if(t.available)return this.call("homeassistant.toggle",t.entity)}async all(t){let e=[...new Set(this.devices().filter(i=>i.available).map(i=>i.entity))];if(e.length)return this.call(t?"homeassistant.turn_on":"homeassistant.turn_off",e)}async adjust(t,e,i){let a=this.devices().find(n=>n.entity===t.entity);if(!a?.available||!a.on)return;let r;if(e==="brightness"&&a.dim&&Number.isFinite(i)&&(r={brightness_pct:Math.max(1,Math.min(100,i))}),e==="kelvin"&&a.temperature&&Number.isFinite(i)&&(r={color_temp_kelvin:Math.max(a.minKelvin,Math.min(a.maxKelvin,i))}),e==="color"&&a.rgbCapable&&ri(i)&&(r={rgb_color:ri(i)}),r)return this.call("light.turn_on",t.entity,r)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.devices(),i=pa(e),a=i.valid<i.total;return o`<ha-card style=${O(this,{...t,color:t.color||"mint"})}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:lightbulb-group"}></ha-icon></div><div class="heading"><h2>${t.title||t.name||"Luci"}</h2><div class="subtitle">${t.subtitle??"Illuminazione"}</div></div><span class="pill" role="status">${a?"Dati parziali":i.on?`${i.on} ${i.on===1?"accesa":"accese"}`:"Tutte spente"}</span></header><div class="hero">${C("lights")}<div class="right"><div class="reading" aria-live="polite">${i.on}<small>/ ${i.total}</small></div><div class="caption">Luci accese</div></div></div>${t.show_progress_bar?o`<div class="progress"><span style=${`width:${i.total?i.on/i.total*100:0}%`}></span></div>`:""}<div class="group"><button ?disabled=${!i.valid||this.busy||!this.hass.services?.homeassistant?.turn_on} @click=${()=>this.all(!0)}><ha-icon icon="mdi:power"></ha-icon>Accendi tutte</button><button ?disabled=${!i.valid||this.busy||!this.hass.services?.homeassistant?.turn_off} @click=${()=>this.all(!1)}><ha-icon icon="mdi:power-off"></ha-icon>Spegni tutte</button></div><div>${e.map(r=>o`<section class=${r.on?"light":"light off"} style=${r.color?this.palette(r.color):""}><div class="light-top"><div class="light-icon"><ha-icon icon=${r.icon}></ha-icon></div><div class="name-wrap"><button class="name" aria-label=${`Dettagli ${r.name}`} ?disabled=${!r.entity} @click=${()=>this.info(r.entity)}>${r.name}<div class="state">${r.available?r.on?"Accesa":"Spenta":"Non disponibile"}</div></button></div><button class="power" aria-label=${`${r.on?"Spegni":"Accendi"} ${r.name}`} aria-pressed=${String(r.on)} ?disabled=${!r.available||this.busy||!this.hass.services?.homeassistant?.toggle} @click=${()=>this.toggle(r)}><ha-icon icon="mdi:power"></ha-icon></button></div>${r.on&&r.dim&&t.show_brightness!==!1?o`<pastel-device-range .value=${r.brightness} .min=${1} .max=${100} .label=${`Luminosit\xE0 ${r.name}`} caption="Luminosità" .disabled=${this.busy||!this.hass.services?.light?.turn_on} @value-changed=${n=>this.adjust(r,"brightness",n.detail.value)}></pastel-device-range>`:""}${r.on&&(r.temperature||r.rgbCapable)?o`<button class="adjust" aria-expanded=${String(this._expanded===r.entity)} @click=${()=>{this._expanded=this._expanded===r.entity?null:r.entity}}><ha-icon icon="mdi:tune"></ha-icon>${r.rgbCapable?"Colore e bianco":"Tonalit\xE0 del bianco"}</button>${this._expanded===r.entity?o`<div class="settings">${r.temperature?o`<pastel-device-range .value=${r.kelvin} .min=${r.minKelvin} .max=${r.maxKelvin} .step=${100} unit=" K" .label=${`Temperatura colore ${r.name}`} caption="Temperatura del bianco" .disabled=${this.busy||!this.hass.services?.light?.turn_on} @value-changed=${n=>this.adjust(r,"kelvin",n.detail.value)}></pastel-device-range>`:""}${r.rgbCapable?o`<label class="color-label">Colore luce<input type="color" aria-label=${`Colore luce ${r.name}`} .value=${ua(r.rgb)} ?disabled=${this.busy||!this.hass.services?.light?.turn_on} @change=${n=>this.adjust(r,"color",n.target.value)}></label>`:""}</div>`:""}`:""}</section>`)}</div>${a?o`<div class="foot">${i.total-i.valid} ${i.total-i.valid===1?"luce non disponibile":"luci non disponibili"}: escluse dai comandi di gruppo.</div>`:""}${i.total?"":o`<div class="empty">Aggiungi le luci nell’editor.</div>`}${this.feedback()}</ha-card>`}};var ga=m`.roller{width:102px;height:122px;position:relative;flex-shrink:0;color:var(--p-accent)}.roller-case{position:absolute;inset:0 0 auto;height:17px;border:2px solid currentColor;border-radius:5px;background:var(--p-tint);z-index:2}.roller-frame{position:absolute;left:8px;right:8px;top:15px;bottom:5px;border:2px solid currentColor;border-top:0;background:var(--p-surface);overflow:hidden}.roller-glass{position:absolute;inset:0;background:linear-gradient(130deg,transparent 50%,var(--p-tint) 50%);opacity:.5}.roller-telo{position:absolute;inset:0 0 auto;height:var(--roller-height);background:repeating-linear-gradient(to bottom,var(--p-tint) 0px,var(--p-tint) 7px,currentColor 7px,currentColor 8px);border-bottom:3px solid currentColor}.roller-base{position:absolute;left:2px;right:2px;bottom:0;height:5px;border-radius:2px;background:currentColor}.roller-unknown{position:absolute;inset:0;display:grid;place-items:center;font-size:28px;background:var(--p-tint);opacity:.9}.roller.unknown .roller-telo{display:none}@media(max-width:340px){.roller{width:88px;height:114px}}`;function fa(s){let t=s!==null&&Number.isFinite(s);return o`<div class=${t?"roller":"roller unknown"} aria-hidden="true" style=${`--roller-height:${t?100-Math.max(0,Math.min(100,s)):0}%`}><div class="roller-case"></div><div class="roller-frame"><div class="roller-glass"></div><div class="roller-telo"></div>${t?"":o`<div class="roller-unknown">?</div>`}</div><div class="roller-base"></div></div>`}var ba=[["open_cover","mdi:arrow-up","Apri"],["stop_cover","mdi:stop","Ferma"],["close_cover","mdi:arrow-down","Chiudi"]],Et=class extends y{static getConfigElement(){return document.createElement("pastel-covers-card-editor")}static getStubConfig(){return{title:"Tapparelle",subtitle:"Controllo aperture",color:"blue",entities:[]}}static get styles(){return[super.styles,ga,m`.hero .reading{font-size:36px;overflow-wrap:anywhere}.reading small{font-size:17px;margin-left:3px}.group,.cover-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-bottom:16px}.group button{display:flex;align-items:center;justify-content:center;gap:5px;padding:10px 5px;min-height:48px;font-size:12px}.group ha-icon{--mdc-icon-size:17px;flex-shrink:0}.covers{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr));gap:10px}.cover{padding:13px;border:1px solid var(--divider-color,#e1e4e8);border-radius:16px;min-width:0}.cover-icon{width:36px;height:36px;border-radius:12px;background:var(--p-tint);color:var(--p-accent);display:grid;place-items:center;margin-bottom:10px}.cover-icon ha-icon{--mdc-icon-size:20px}.name{min-height:48px;display:block;overflow-wrap:anywhere;text-align:left;padding:0;background:none;color:var(--p-ink);line-height:1.5;width:100%}.position{font-size:26px;color:var(--p-accent);font-variant-numeric:tabular-nums;line-height:1.3;margin-top:8px}.position small{font-size:13px;margin-left:2px}.cover-state,.energy{font-size:12px;line-height:1.6;color:var(--p-muted);margin-top:4px;overflow-wrap:anywhere}.cover-actions{margin:10px 0 0;gap:5px}.cover-actions button{min-width:44px;min-height:48px;padding:7px 0;display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;font-size:11px}.cover-actions ha-icon{--mdc-icon-size:20px}.single-actions{margin-top:12px}.single-actions button{min-height:60px;font-size:12px}.hero .right{flex:1}.foot{line-height:1.6}@media(max-width:370px){.covers{grid-template-columns:1fr}ha-card{padding:16px}header{gap:9px}.hero{padding:17px}.hero .reading{font-size:32px}}`]}setConfig(t){Jt(t,"cover"),super.setConfig(t)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}devices(){return tt(this.config).map(t=>ha(this.hass,t))}async run(t,e,i){let a=this.devices().filter(r=>e.includes(r.entity)&&Ct(this.hass,r,t));if(a.length&&!(t==="set_cover_position"&&!Number.isFinite(i)))return this.call("cover."+t,[...new Set(a.map(r=>r.entity))],t==="set_cover_position"?{position:Math.round(Math.max(0,Math.min(100,i)))}:{})}energy(t){if(!t)return"";let e=k(this.hass,t),i=this.hass.states[t]?.attributes?.unit_of_measurement||"";return o`<div class="energy">Energia: ${e===null?"\u2014":new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:2}).format(e)} ${i}</div>`}controls(t,e=!1){return o`<div class=${e?"cover-actions single-actions":"cover-actions"}>${ba.map(([i,a,r])=>o`<button aria-label=${`${r} ${t.name}`} ?disabled=${this.busy||!Ct(this.hass,t,i)} @click=${()=>this.run(i,[t.entity])}><ha-icon icon=${a}></ha-icon><span>${r}</span></button>`)}</div>`}range(t){return this.config.show_position!==!1&&t.features&4&&t.position!==null?o`<pastel-device-range .value=${t.position} .label=${`Apertura ${t.name}`} caption="Apertura" .disabled=${this.busy||!Ct(this.hass,t,"set_cover_position")} @value-changed=${e=>this.run("set_cover_position",[t.entity],e.detail.value)}></pastel-device-range>`:""}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.devices(),i=ma(e),a=(!!t.entity&&!t.entities||t.layout==="single")&&e.length===1,r=e[0],n=i.valid<i.total,l=a?r?.position??null:i.average;return o`<ha-card style=${O(this,t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:window-shutter"}></ha-icon></div><div class="heading"><h2>${t.title||t.name||(a?r?.name:"Tapparelle")||"Tapparelle"}</h2><div class="subtitle">${t.subtitle??(a?"Tapparella avvolgibile":"Controllo aperture")}</div>${a?this.energy(r?.energy_entity||t.energy_entity):""}</div><span class="pill" role="status">${n?"Dati parziali":a?r?.label||"Da configurare":`${i.open} ${i.open===1?"aperta":"aperte"}`}</span></header><div class="hero">${fa(l)}<div class="right"><div class="reading" aria-live="polite">${l===null?"\u2014":l}<small>%</small></div><div class="caption">${a?"Apertura":"Apertura media"}</div></div></div>${a&&r?o`${this.range(r)}${this.controls(r,!0)}`:o`<div class="group">${ba.map(([c,d,p])=>o`<button ?disabled=${this.busy||!e.some(u=>Ct(this.hass,u,c))} @click=${()=>this.run(c,e.map(u=>u.entity))}><ha-icon icon=${d}></ha-icon>${c==="stop_cover"?"Ferma":p+" tutte"}</button>`)}</div><div class="covers">${e.map(c=>o`<section class="cover" style=${c.color?this.palette(c.color):""}><div class="cover-icon"><ha-icon icon=${c.icon||"mdi:window-shutter"}></ha-icon></div><button class="name" aria-label=${`Dettagli ${c.name}`} ?disabled=${!c.entity} @click=${()=>this.info(c.entity)}>${c.name}</button><div class="position">${c.position===null?"\u2014":c.position}<small>%</small></div><div class="cover-state" role="status">${c.label}</div>${this.energy(c.energy_entity)}${this.range(c)}${this.controls(c)}</section>`)}</div>`}${i.known<i.total&&i.total?o`<div class="foot">${i.known?"Media calcolata sulle sole posizioni disponibili.":"Posizione percentuale non disponibile."} I comandi dipendono dalle funzioni supportate da ogni dispositivo.</div>`:""}${i.total?"":o`<div class="empty">Aggiungi le tapparelle nell’editor.</div>`}${this.feedback()}</ha-card>`}};var te=class extends S{get kind(){return"light"}setConfig(t){let e={...t,title:t.title||t.name,entities:tt(t),...this.kind==="cover"?{layout:t.layout||(t.entity&&!t.entities?"single":"group")}:{}};delete e.lights,delete e.entity,super.setConfig(e)}patch(t,e){this.emit({entities:this.config.entities.map((i,a)=>t===a?{...i,...e}:i)})}reorder(t,e){let i=[...this.config.entities],a=t+e;a<0||a>=i.length||([i[t],i[a]]=[i[a],i[t]],this.emit({entities:i}))}paletteSelect(t,e,i,a=!1){let r={green:"mint",purple:"lavender",orange:"peach"}[e]||e;return super.paletteSelect(t,r,i,a)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.kind==="cover";return o`<div class="editor" style=${this.palette(t.color||(e?"blue":"mint"))}><div class="pair">${this.text("Nome card",t.title,i=>this.emit({title:i}))}${this.text("Sottotitolo",t.subtitle,i=>this.emit({subtitle:i}))}</div>${this.paletteSelect("Colore card",t.color||(e?"blue":"mint"),i=>this.emit({color:i}))}<h3>${e?"Tapparelle":"Luci"} (${t.entities.length})</h3>${t.entities.map((i,a)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${i.icon||(e?"mdi:window-shutter":"mdi:lightbulb")}></ha-icon>${i.name||i.entity||"Nuovo dispositivo"}</div>${this.entity(e?"Tapparella":"Luce o interruttore",i.entity,r=>this.patch(a,{entity:r}),r=>e?r.entity_id.startsWith("cover."):si.includes(r.entity_id.split(".")[0]))}${this.text("Nome dispositivo",i.name,r=>this.patch(a,{name:r}))}<details><summary>Icona e colore del dispositivo</summary><div class="icon-options">${ca.map(([r,n])=>o`<button aria-label=${`Icona ${n}`} aria-pressed=${String(i.icon===r)} @click=${()=>this.patch(a,{icon:r})}><ha-icon icon=${r}></ha-icon>${n}</button>`)}</div>${this.text("Icona personalizzata (mdi:...)",i.icon,r=>this.patch(a,{icon:r}))}${this.paletteSelect("Colore dispositivo",i.color||"",r=>this.patch(a,{color:r}),!0)}</details>${e?this.entity("Sensore energia (facoltativo)",i.energy_entity,r=>this.patch(a,{energy_entity:r}),r=>r.entity_id.startsWith("sensor.")&&(r.attributes?.device_class==="energy"||["kWh","Wh"].includes(r.attributes?.unit_of_measurement))):""}<div class="tools"><button aria-label="Sposta dispositivo prima" ?disabled=${a===0} @click=${()=>this.reorder(a,-1)}>↑</button><button aria-label="Sposta dispositivo dopo" ?disabled=${a===t.entities.length-1} @click=${()=>this.reorder(a,1)}>↓</button><button @click=${()=>this.emit({entities:t.entities.filter((r,n)=>a!==n)})}>Rimuovi dispositivo</button></div></section>`)}<button @click=${()=>this.emit({entities:[...t.entities,{entity:"",name:"",icon:e?"mdi:window-shutter":"mdi:lightbulb"}]})}>${e?"Aggiungi tapparella":"Aggiungi luce"}</button><details><summary>Altre opzioni</summary>${e?o`<label>Disposizione<select aria-label="Disposizione" @change=${i=>this.emit({layout:i.target.value})}><option value="group" ?selected=${t.layout!=="single"}>Gruppo con riquadri</option><option value="single" ?selected=${t.layout==="single"}>Singola tapparella</option></select></label><p class="hint">La vista singola si applica quando è associata una sola tapparella.</p>`:""}<label class="check"><input type="checkbox" .checked=${t[e?"show_position":"show_brightness"]!==!1} @change=${i=>this.emit({[e?"show_position":"show_brightness"]:i.target.checked})}>${e?"Mostra regolazione percentuale":"Mostra luminosit\xE0"}</label>${e?"":o`<label class="check"><input type="checkbox" .checked=${!!t.show_progress_bar} @change=${i=>this.emit({show_progress_bar:i.target.checked})}>Mostra barra riepilogo</label>`}${this.text("Icona intestazione",t.icon,i=>this.emit({icon:i}))}<p class="hint">Comandi, slider e colori della luce compaiono solo se supportati. I valori seguono lo stato reale del dispositivo.</p><details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([i,a])=>this.text(a,t[i],r=>this.emit({[i]:r})))}</details></details></div>`}},Mt=class extends te{},At=class extends te{get kind(){return"cover"}};var ee=class extends x{static get properties(){return{value:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},label:{type:String},caption:{type:String},unit:{type:String},disabled:{type:Boolean},_draft:{}}}constructor(){super(),this.min=0,this.max=100,this.step=1,this.unit="%"}static get styles(){return m`:host{display:block;min-width:0}.label{display:flex;justify-content:space-between;gap:10px;font-size:12px;line-height:1.5;color:var(--p-muted,#647078);margin-top:12px}output{color:var(--p-accent);font-variant-numeric:tabular-nums}input{display:block;width:100%;min-width:0;height:48px;margin:0;appearance:none;-webkit-appearance:none;background:transparent;touch-action:pan-y;accent-color:var(--p-accent)}input::-webkit-slider-runnable-track{height:5px;border-radius:4px;background:var(--range-track,var(--p-tint))}input::-webkit-slider-thumb{-webkit-appearance:none;width:25px;height:25px;border:2px solid var(--p-accent);border-radius:50%;background:var(--p-surface,#fff);margin-top:-10px}input::-moz-range-track{height:5px;border-radius:4px;background:var(--range-track,var(--p-tint))}input::-moz-range-thumb{width:22px;height:22px;border:2px solid var(--p-accent);border-radius:50%;background:var(--p-surface,#fff)}input:focus-visible{outline:2px solid var(--p-accent);outline-offset:2px}input:disabled{opacity:.4}`}start(t){this.disabled||t.isPrimary===!1||t.button!==0||(this.cancel(),this._pointer={id:t.pointerId,x:t.clientX,y:t.clientY,canceled:!1},this._move=e=>{if(e.pointerId!==this._pointer?.id)return;let i=Math.abs(e.clientX-this._pointer.x),a=Math.abs(e.clientY-this._pointer.y);a>10&&a>i&&(this._pointer.canceled=!0)},this._up=e=>{if(e.pointerId!==this._pointer?.id)return;this._move(e);let i=!this._pointer.canceled,a=this._draft??this.value;this._ignoreUntil=Date.now()+80,this.cancel(),i&&this.commit(a)},this._cancel=e=>{e.pointerId===this._pointer?.id&&(this._ignoreUntil=Date.now()+80,this.cancel())},window.addEventListener("pointermove",this._move),window.addEventListener("pointerup",this._up),window.addEventListener("pointercancel",this._cancel))}cancel(){window.removeEventListener("pointermove",this._move),window.removeEventListener("pointerup",this._up),window.removeEventListener("pointercancel",this._cancel),this._pointer=null,this._draft=void 0;let t=this.shadowRoot?.querySelector("input");t&&(t.value=String(this.value??this.min))}commit(t){this.disabled||!Number.isFinite(Number(t))||this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:Math.max(this.min,Math.min(this.max,Number(t)))},bubbles:!0,composed:!0}))}disconnectedCallback(){this.cancel(),super.disconnectedCallback()}updated(t){t.has("disabled")&&this.disabled&&this.cancel()}render(){let t=this._draft??this.value;return o`<label><span class="label"><span>${this.caption||this.label}</span><output>${t==null?"\u2014":Math.round(t)}${this.unit}</output></span><input type="range" aria-label=${this.label||"Valore"} min=${this.min} max=${this.max} step=${this.step} .value=${String(t??this.min)} ?disabled=${this.disabled} @pointerdown=${e=>this.start(e)} @input=${e=>{this._pointer?.canceled||(this._draft=Number(e.target.value))}} @change=${e=>{!this._pointer&&Date.now()>(this._ignoreUntil||0)&&(this.commit(Number(e.target.value)),this._draft=void 0)}}></label>`}};var ss={sunny:["Sereno","mdi:weather-sunny"],partlycloudy:["Parzialmente nuvoloso","mdi:weather-partly-cloudy"],cloudy:["Nuvoloso","mdi:weather-cloudy"],rainy:["Pioggia","mdi:weather-rainy"],pouring:["Pioggia intensa","mdi:weather-pouring"],snowy:["Neve","mdi:weather-snowy"],fog:["Nebbia","mdi:weather-fog"],hail:["Grandine","mdi:weather-hail"],lightning:["Temporale","mdi:weather-lightning"],"lightning-rainy":["Temporale e pioggia","mdi:weather-lightning-rainy"],"snowy-rainy":["Neve e pioggia","mdi:weather-snowy-rainy"],windy:["Ventoso","mdi:weather-windy"],"windy-variant":["Vento e nuvole","mdi:weather-windy-variant"],"clear-night":["Sereno di notte","mdi:weather-night"],exceptional:["Condizioni eccezionali","mdi:weather-cloudy-alert"]},va=s=>ss[s]||["Condizioni non disponibili","mdi:weather-cloudy-alert"],et=s=>s==null||s===""||!Number.isFinite(Number(s))?null:Number(s);function ya(s,t){let e=s?.states?.[t],i=!!e&&!["unknown","unavailable"].includes(e.state),a=i?e.attributes||{}:{};return{available:i,state:i?e.state:null,condition:va(i?e.state:null),temperature:et(a.temperature),temperatureUnit:a.temperature_unit||s?.config?.unit_system?.temperature||"\xB0C",humidity:et(a.humidity),wind:et(a.wind_speed),windUnit:a.wind_speed_unit||"",name:a.friendly_name||t||"Meteo",forecastFeatures:Number(a.supported_features||0)}}function xa(s){return(Array.isArray(s?.forecast)?s.forecast:[]).filter(t=>t&&t.datetime&&et(t.temperature)!==null).slice(0,3).map(t=>({datetime:t.datetime,temperature:et(t.temperature),low:et(t.templow),condition:va(t.condition),precipitation:et(t.precipitation_probability)}))}var ie=class extends y{static get properties(){return{...super.properties,_forecast:{},_forecastError:{}}}static getConfigElement(){return document.createElement("pastel-weather-card-editor")}static getStubConfig(){return{title:"Meteo",subtitle:"Previsioni locali",entity:"",color:"blue",show_forecast:!0}}static get styles(){return[super.styles,m`.hero{min-height:144px}.hero ha-icon{--mdc-icon-size:80px;flex-shrink:0}.hero .reading{font-size:36px}.hero .condition{font-size:14px;font-weight:600;margin-top:4px}.metrics{margin-bottom:16px}.metric{min-height:72px}.forecast{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.day{background:var(--p-tint);color:var(--p-accent);border-radius:14px;min-height:74px;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:8px 4px;gap:4px;font-size:12px;text-align:center}.day ha-icon{--mdc-icon-size:19px}.day strong{font-size:12px;font-weight:550;font-variant-numeric:tabular-nums}.day small{font-size:11px}.day[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.forecast-detail{font-size:12px;color:var(--p-muted);margin-top:11px;line-height:1.5;min-height:18px}.hero .right{flex:1}@media(max-width:340px){ha-card{padding:16px}.hero{padding:17px}.hero ha-icon{--mdc-icon-size:64px}.hero .reading{font-size:32px}}`]}setConfig(t){if(t.entity&&!String(t.entity).startsWith("weather."))throw Error("Scegli un\u2019entit\xE0 weather.");this._selected=0,this._forecast=null,this._forecastError="",super.setConfig(t),this.subscribeForecast()}connectedCallback(){super.connectedCallback(),this.subscribeForecast()}disconnectedCallback(){this.unsubscribeForecast(),super.disconnectedCallback()}unsubscribeForecast(){this._subscriptionKey=null;let t=this._subscription;this._subscription=null,t&&t.then(e=>e?.()).catch(()=>{})}subscribeForecast(){let t=this.config?.entity;if(!this.isConnected||!t||this.config?.show_forecast===!1||!this.hass?.connection?.subscribeMessage||!this.hass?.states?.[t]||this._subscriptionKey===t)return;this.unsubscribeForecast(),this._forecast=null,this._forecastError="";let e=this._subscriptionKey=t;this._subscription=this.hass.connection.subscribeMessage(i=>{this._subscriptionKey===e&&(this._forecast=i,this._forecastError="")},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:t}).catch(()=>{this._subscriptionKey===e&&(this._forecast=null,this._forecastError="Previsioni giornaliere non disponibili.")})}updated(t){super.updated(t),t.has("hass")&&this.subscribeForecast()}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}fmt(t){return new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:1}).format(t)}dayName(t){let e=new Date(t);if(Number.isNaN(e.getTime()))return"\u2014";let i=this.hass?.config?.time_zone||void 0,a={year:"numeric",month:"2-digit",day:"2-digit",timeZone:i},r=new Intl.DateTimeFormat("en-CA",a),n=r.format(e),l=new Date,c=new Date(l.getTime()+864e5);return n===r.format(l)?"Oggi":n===r.format(c)?"Domani":new Intl.DateTimeFormat(this.hass?.locale?.language||"it",{weekday:"short",timeZone:i}).format(e)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=ya(this.hass,t.entity),i=xa(this._forecast),a=i[this._selected]||i[0];return o`<ha-card style=${O(this,{...t,color:t.color||"blue"})}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:weather-partly-cloudy"}></ha-icon></div><div class="heading"><h2>${t.title||"Meteo"}</h2><div class="subtitle">${t.subtitle??"Previsioni locali"}</div></div><span class="pill" role="status">${e.available?e.condition[0]:"Non disponibile"}</span></header><div class="hero"><ha-icon icon=${e.condition[1]}></ha-icon><div class="right"><div class="reading" aria-live="polite">${e.temperature===null?"\u2014":this.fmt(e.temperature)}<small>${e.temperatureUnit}</small></div><div class="condition">${e.available?e.condition[0]:"Dati non disponibili"}</div><div class="caption">Temperatura attuale</div></div></div>${e.available&&t.show_details!==!1&&(e.humidity!==null||e.wind!==null)?o`<div class="metrics">${e.humidity!==null?o`<div class="metric"><strong>${this.fmt(e.humidity)}<span class="unit">%</span></strong><small>Umidità</small></div>`:""}${e.wind!==null?o`<div class="metric"><strong>${this.fmt(e.wind)}<span class="unit">${e.windUnit}</span></strong><small>Vento</small></div>`:""}</div>`:""}${t.show_forecast!==!1&&e.available?o`<div class="section-label">Prossimi giorni</div>${i.length?o`<div class="forecast">${i.map((r,n)=>o`<button class="day" aria-pressed=${String(a===r)} @click=${()=>{this._selected=n,this.requestUpdate()}}><span>${this.dayName(r.datetime)}</span><ha-icon icon=${r.condition[1]}></ha-icon><strong>${this.fmt(r.temperature)}°${r.low===null?"":` / ${this.fmt(r.low)}\xB0`}</strong></button>`)}</div><div class="forecast-detail" role="status">${this.dayName(a.datetime)}: ${a.condition[0]}${a.precipitation===null?"":` \xB7 pioggia ${this.fmt(a.precipitation)}%`}</div>`:o`<div class="foot">${this._forecastError||"Previsioni non disponibili per questa entit\xE0."}</div>`}`:""}${t.entity?"":o`<div class="empty">Scegli un’entità meteo nell’editor.</div>`}${this.feedback()}</ha-card>`}};var w={PAUSE:1,VOLUME_SET:4,PREVIOUS:16,NEXT:32,TURN_ON:128,TURN_OFF:256,SELECT_SOURCE:2048,PLAY:16384};function _a(s,t){let e=s?.states?.[t],i=e?.state||null,a=!!i&&!["unknown","unavailable"].includes(i),r=e?.attributes||{},n=Number(r.supported_features||0),l=a&&i!=="off",c=Number.isFinite(Number(r.volume_level))?Math.max(0,Math.min(100,Math.round(Number(r.volume_level)*100))):null,d=Array.isArray(r.source_list)?r.source_list.filter(p=>typeof p=="string"):[];return{available:a,on:l,state:i,features:n,volume:c,source:r.source||"",sources:d,title:r.media_title||"",name:r.friendly_name||t||"TV"}}function oi(s,t,e,i){return!!t.available&&!!(t.features&e)&&!!s?.services?.media_player?.[i]&&(i==="turn_on"&&!t.on||i==="turn_off"&&t.on||!["turn_on","turn_off"].includes(i)&&t.on)}var ae=class extends y{static getConfigElement(){return document.createElement("pastel-tv-card-editor")}static getStubConfig(){return{title:"TV Soggiorno",subtitle:"Televisore",entity:"",color:"lavender",show_transport:!0}}static get styles(){return[super.styles,m`.hero{min-height:132px}.screen{width:103px;height:78px;border:3px solid var(--p-accent);border-radius:10px;display:grid;place-items:center;position:relative;background:color-mix(in srgb,var(--p-tint) 65%,var(--p-surface));flex-shrink:0}.screen:after{content:'';position:absolute;left:27px;right:27px;bottom:-10px;height:7px;border-bottom:2px solid var(--p-accent);border-left:2px solid var(--p-accent);border-right:2px solid var(--p-accent);border-radius:0 0 4px 4px}.screen ha-icon{--mdc-icon-size:31px}.hero .right{flex:1}.hero .reading{font-size:23px;letter-spacing:-.4px;white-space:normal;overflow-wrap:anywhere;font-weight:550}.power{display:grid;grid-template-columns:1fr 1fr;gap:8px}.power button,.transport button{min-height:48px;display:flex;align-items:center;justify-content:center;gap:7px}.power button[aria-pressed=true]{background:var(--p-accent);color:var(--p-surface)}.power ha-icon{--mdc-icon-size:18px}.transport{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:8px 0 14px}.transport button{min-height:54px;padding:7px 4px;flex-direction:column;font-size:11px;gap:4px}.transport ha-icon{--mdc-icon-size:20px}.source{margin-top:8px}.source select{max-width:62%;min-width:0}.foot{line-height:1.5}@media(max-width:340px){ha-card{padding:16px}.hero{padding:17px}.screen{width:82px;height:68px}}`]}setConfig(t){if(t.entity&&!String(t.entity).startsWith("media_player."))throw Error("Scegli un\u2019entit\xE0 media_player.");super.setConfig(t)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}service(t,e,i,a){if(oi(this.hass,t,i,e))return this.call("media_player."+e,this.config.entity,a)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=_a(this.hass,t.entity),i=(r,n)=>!this.busy&&oi(this.hass,e,r,n),a=t.show_transport!==!1&&e.on&&!!(e.features&(w.PREVIOUS|w.NEXT|w.PAUSE|w.PLAY));return o`<ha-card style=${O(this,{...t,color:t.color||"lavender"})}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:television"}></ha-icon></div><div class="heading"><h2>${t.title||e.name||"TV"}</h2><div class="subtitle">${t.subtitle??"Televisore"}</div></div><span class="pill" role="status">${e.available?e.on?"Acceso":"Spento":"Non disponibile"}</span></header><div class="hero"><div class="screen"><ha-icon icon=${e.on?"mdi:play":"mdi:power-off"}></ha-icon></div><div class="right"><div class="reading" aria-live="polite">${e.available?e.on?e.title||e.source||"Acceso":"Spento":"\u2014"}</div><div class="caption">${e.state==="playing"?"Riproduzione in corso":e.state==="paused"?"In pausa":e.on?"Televisore acceso":"Televisore spento"}</div></div></div><div class="power"><button aria-pressed=${String(e.on)} ?disabled=${!i(w.TURN_ON,"turn_on")} @click=${()=>this.service(e,"turn_on",w.TURN_ON)}><ha-icon icon="mdi:power"></ha-icon>Accendi</button><button aria-pressed=${String(e.available&&!e.on)} ?disabled=${!i(w.TURN_OFF,"turn_off")} @click=${()=>this.service(e,"turn_off",w.TURN_OFF)}><ha-icon icon="mdi:power-off"></ha-icon>Spegni</button></div>${a?o`<div class="transport"><button ?disabled=${!i(w.PREVIOUS,"media_previous_track")} @click=${()=>this.service(e,"media_previous_track",w.PREVIOUS)}><ha-icon icon="mdi:skip-previous"></ha-icon>Precedente</button><button ?disabled=${e.state==="playing"?!i(w.PAUSE,"media_pause"):!i(w.PLAY,"media_play")} @click=${()=>this.service(e,e.state==="playing"?"media_pause":"media_play",e.state==="playing"?w.PAUSE:w.PLAY)}><ha-icon icon=${e.state==="playing"?"mdi:pause":"mdi:play"}></ha-icon>${e.state==="playing"?"Pausa":"Riprendi"}</button><button ?disabled=${!i(w.NEXT,"media_next_track")} @click=${()=>this.service(e,"media_next_track",w.NEXT)}><ha-icon icon="mdi:skip-next"></ha-icon>Successivo</button></div>`:""}${e.volume!==null&&t.show_volume!==!1?o`<pastel-device-range .value=${e.volume} .label=${`Volume ${t.title||e.name}`} caption="Volume" .disabled=${!i(w.VOLUME_SET,"volume_set")} @value-changed=${r=>this.service(e,"volume_set",w.VOLUME_SET,{volume_level:r.detail.value/100})}></pastel-device-range>`:""}${e.sources.length&&t.show_source!==!1?o`<label class="control source"><span>Sorgente</span><select aria-label="Sorgente TV" ?disabled=${!i(w.SELECT_SOURCE,"select_source")} @change=${r=>this.service(e,"select_source",w.SELECT_SOURCE,{source:r.target.value})}>${e.sources.map(r=>o`<option value=${r} ?selected=${r===e.source}>${r}</option>`)}</select></label>`:""}${t.entity?"":o`<div class="empty">Scegli un televisore nell’editor.</div>`}${this.feedback()}</ha-card>`}};var rs=[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]],se=class extends S{get kind(){return"weather"}render(){if(!this.hass||!this.config)return o``;let t=this.kind==="tv",e=this.config;return o`<div class="editor" style=${this.palette(e.color||(t?"lavender":"blue"))}><div class="pair">${this.text("Nome card",e.title,i=>this.emit({title:i}))}${this.text("Sottotitolo",e.subtitle,i=>this.emit({subtitle:i}))}</div>${this.entity(t?"Televisore":"Entit\xE0 meteo",e.entity,i=>this.emit({entity:i}),i=>i.entity_id.startsWith(t?"media_player.":"weather."),t?"Cerca un media player":"Cerca un\u2019entit\xE0 meteo")}${this.paletteSelect("Colore card",e.color||(t?"lavender":"blue"),i=>this.emit({color:i}))}<details><summary>Altre opzioni</summary>${t?o`<label class="check"><input type="checkbox" .checked=${e.show_transport!==!1} @change=${i=>this.emit({show_transport:i.target.checked})}>Mostra comandi riproduzione</label><label class="check"><input type="checkbox" .checked=${e.show_volume!==!1} @change=${i=>this.emit({show_volume:i.target.checked})}>Mostra volume</label><label class="check"><input type="checkbox" .checked=${e.show_source!==!1} @change=${i=>this.emit({show_source:i.target.checked})}>Mostra sorgente</label>`:o`<label class="check"><input type="checkbox" .checked=${e.show_details!==!1} @change=${i=>this.emit({show_details:i.target.checked})}>Mostra umidità e vento</label><label class="check"><input type="checkbox" .checked=${e.show_forecast!==!1} @change=${i=>this.emit({show_forecast:i.target.checked})}>Mostra previsioni giornaliere</label>`}${this.text("Icona intestazione (mdi:...)",e.icon,i=>this.emit({icon:i}))}<details><summary>Colori personalizzati</summary>${rs.map(([i,a])=>this.text(a,e[i],r=>this.emit({[i]:r})))}</details></details></div>`}},re=class extends se{},oe=class extends se{get kind(){return"tv"}};var ni=[["mdi:fire","Warm"],["mdi:string-lights","Multicolour"],["mdi:star-four-points","Sparkle"],["mdi:weather-night","Night"],["mdi:lightbulb-on","Lights"],["mdi:palette","Colour"],["mdi:music","Music"],["mdi:power","Power"]];function li(s,t){let e=t.state_entity||t.entity,i=s?.states?.[e],a=!!i&&!["unavailable","unknown"].includes(i.state),r=a&&i.state==="on",n=s?.states?.[t.entity],l=r&&n?.attributes?.brightness!=null&&Number.isFinite(Number(n.attributes.brightness))?Math.round(Number(n.attributes.brightness)/255*100):null,c=!!n&&n.entity_id.startsWith("light.")&&Array.isArray(n.attributes?.supported_color_modes)&&n.attributes.supported_color_modes.some(p=>p!=="onoff"),d=t.mode_entity&&s?.states?.[t.mode_entity]?.state;return{entity:e,available:a,on:r,brightness:l,supported:c,modeState:d}}function ci(s,t){let e=t?.entity||"",i=e.split(".")[0];return["script","scene"].includes(i)&&!!s?.states?.[e]&&s.states[e].state!=="unavailable"&&!!s?.services?.[i]?.turn_on}function wa(s){for(let t of["entity","state_entity","mode_entity","on_script","off_script"])if(s[t]!==void 0&&typeof s[t]!="string")throw Error(`${t} must be an entity ID.`);if(s.buttons!==void 0&&!Array.isArray(s.buttons))throw Error("buttons must be a list.");for(let t of s.buttons||[])if(!t||typeof t!="object"||!["script.","scene."].some(e=>String(t.entity||"").startsWith(e))&&t.entity)throw Error("Each atmosphere requires a script or scene.")}var ne=class extends y{static getConfigElement(){return document.createElement("pastel-christmas-tree-card-editor")}static getStubConfig(){return{title:"Christmas tree",subtitle:"Holiday lights",entity:"",color:"amber",show_brightness:!0,buttons:[]}}static get styles(){return[super.styles,m`
  .garland{height:150px;position:relative;overflow:hidden;display:flex;align-items:flex-end;justify-content:center;gap:12px;padding:28px 12px 22px;margin-bottom:12px;background:var(--p-tint);border-radius:20px;color:var(--p-accent)}
  .wire{position:absolute;top:-77px;left:-8%;width:116%;height:160px;border-bottom:3px solid currentColor;border-radius:0 0 50% 50%;opacity:.58}.bulb{position:relative;width:26px;height:34px;border-radius:45% 45% 50% 50%;border:2px solid currentColor;background:var(--p-surface);transform:translateY(var(--drop));box-shadow:0 0 0 5px color-mix(in srgb,var(--p-accent) 13%,transparent)}.bulb:before{content:'';position:absolute;width:7px;height:20px;left:8px;bottom:30px;background:currentColor;border-radius:4px}.garland.on .bulb{background:var(--p-accent);box-shadow:0 0 20px 6px color-mix(in srgb,var(--p-accent) 40%,transparent)}.bulb:nth-of-type(2){--drop:-12px}.bulb:nth-of-type(3){--drop:9px}.bulb:nth-of-type(4){--drop:21px}.bulb:nth-of-type(5){--drop:9px}.bulb:nth-of-type(6){--drop:-12px}
  .hero-info{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 14px;color:var(--p-accent)}.hero-info strong{font-size:15px}.hero-info span{font-size:13px}.power{width:100%;min-height:48px;display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:12px}.power ha-icon{--mdc-icon-size:20px}.modes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:14px}.modes button{min-height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:8px;font-size:12px;overflow-wrap:anywhere}.modes button.active{box-shadow:inset 0 0 0 2px var(--p-accent)}.modes ha-icon{--mdc-icon-size:20px}.empty{margin-top:12px}@media(max-width:340px){ha-card{padding:16px}.garland{gap:8px}.bulb{width:22px;height:30px}.bulb:before{left:6px}}
 `]}setConfig(t){wa(t),super.setConfig(t)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}action(t){let e=t?.split(".")[0];if(["script","scene"].includes(e))return this.call(`${e}.turn_on`,t)}power(t){let e=this.config,i=li(this.hass,e),a=t?e.on_script:e.off_script;if(a)return this.action(a);if(!(!i.entity||!["light.","switch."].some(r=>i.entity.startsWith(r))))return this.call(`${i.entity.split(".")[0]}.${t?"turn_on":"turn_off"}`,i.entity)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=li(this.hass,t),i=(t.entity||"").split(".")[0],a=e.available&&["light","switch"].includes(i)&&!!this.hass.services?.[i]?.[e.on?"turn_off":"turn_on"],r=ci(this.hass,{entity:e.on?t.off_script:t.on_script}),n=!!(r||!t.on_script&&!t.off_script&&a),l=(t.buttons||[]).find(c=>c.active_state!==void 0&&c.active_state!==""&&e.modeState===c.active_state);return o`<ha-card style=${O(this,t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:pine-tree"}></ha-icon></div><div class="heading"><h2>${t.title||"Christmas tree"}</h2><div class="subtitle">${t.subtitle??"Holiday lights"}</div></div><span class="pill" role="status">${e.available?e.on?"On":"Off":"Unavailable"}</span></header><div class="garland ${e.on?"on":""}" role="img" aria-label=${`Christmas garland ${e.on?"on":"off"}`}><div class="wire"></div>${[0,1,2,3,4].map(()=>o`<span class="bulb"></span>`)}</div><div class="hero-info"><strong>${l?.name||t.hero_label||"Atmosphere"}</strong><span>${e.brightness===null?"":`${e.brightness}%`}</span></div><button class="power" ?disabled=${this.busy||!n} @click=${()=>this.power(!e.on)}><ha-icon icon=${e.on?"mdi:power-off":"mdi:power"}></ha-icon>${e.on?"Turn off":"Turn on"}</button>${t.show_brightness!==!1&&e.supported?o`<pastel-device-range .value=${e.brightness||0} .label=${`Brightness ${t.title||"Christmas tree"}`} caption="Brightness" .disabled=${this.busy||!e.on||!this.hass.services?.light?.turn_on} @value-changed=${c=>this.call("light.turn_on",t.entity,{brightness_pct:c.detail.value})}></pastel-device-range>`:""}${t.buttons?.length?o`<div class="section-label">Atmospheres</div><div class="modes">${t.buttons.map(c=>o`<button style=${c.color?this.palette(c.color):""} class=${l===c?"active":""} aria-pressed=${String(l===c)} ?disabled=${this.busy||!ci(this.hass,c)} @click=${()=>this.action(c.entity)}><ha-icon icon=${c.icon||"mdi:string-lights"}></ha-icon>${c.name||"Atmosphere"}</button>`)}</div>`:""}${!t.entity&&!t.state_entity?o`<div class="empty">Choose a light or switch in the editor.</div>`:""}${this.feedback()}</ha-card>`}};var le=class extends S{static get styles(){return[super.styles,m`.button-editor{border-top:1px solid var(--divider-color,#ddd);padding:14px 0;display:grid;gap:10px}.tools{display:flex;gap:6px}.tools button{min-width:44px}.icon-options{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}.icon-options button{display:grid;place-items:center;gap:4px;min-height:64px;font-size:11px}.icon-options button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}`]}iconChoices(t,e){return o`<details><summary>Icona: ${ni.find(([i])=>i===t.icon)?.[1]||"Personalizzata"}</summary><div class="icon-options">${ni.map(([i,a])=>o`<button aria-label=${a} aria-pressed=${String(i===t.icon)} @click=${()=>this.updateButton(e,{icon:i})}><ha-icon icon=${i}></ha-icon>${a}</button>`)}</div>${this.text("Icona MDI personalizzata",t.icon,i=>this.updateButton(e,{icon:i}))}</details>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"amber")}><div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>${this.entity("Luce o interruttore dell\u2019albero",t.entity,e=>this.emit({entity:e}),e=>e.entity_id.startsWith("light.")||e.entity_id.startsWith("switch."),"Cerca una luce o un interruttore")}${this.paletteSelect("Colore card",t.color||"amber",e=>this.emit({color:e}))}<label class="check"><input type="checkbox" .checked=${t.show_brightness!==!1} @change=${e=>this.emit({show_brightness:e.target.checked})}>Mostra luminosità se supportata</label><h3>Atmosfere (${t.buttons?.length||0})</h3><p class="hint">Associa qualsiasi numero di script o scene. Puoi cambiare nome, icona, colore e ordine. Lo stato attivo viene letto dall’aiutante opzionale.</p>${(t.buttons||[]).map((e,i)=>o`<section class="button-editor"><div class="pair">${this.text("Nome pulsante",e.name,a=>this.updateButton(i,{name:a}))}${this.paletteSelect("Colore pulsante",e.color||"",a=>this.updateButton(i,{color:a}),!0)}</div>${this.entity("Script o scena",e.entity,a=>this.updateButton(i,{entity:a}),a=>a.entity_id.startsWith("script.")||a.entity_id.startsWith("scene."),"Cerca script o scena")}${this.iconChoices(e,i)}${t.mode_entity?this.text("Valore dell\u2019aiutante per indicare attivo",e.active_state,a=>this.updateButton(i,{active_state:a})):""}<div class="tools"><button aria-label="Sposta prima" ?disabled=${i===0} @click=${()=>this.move(i,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${i===t.buttons.length-1} @click=${()=>this.move(i,1)}>↓</button><button @click=${()=>this.emit({buttons:t.buttons.filter((a,r)=>r!==i)})}>Rimuovi</button></div></section>`)}<button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuova atmosfera",entity:"",icon:"mdi:string-lights"}]})}>Aggiungi atmosfera</button><details><summary>Comandi e stato avanzati</summary>${this.entity("Entit\xE0 di stato (se diversa dalla luce)",t.state_entity,e=>this.emit({state_entity:e}),e=>!e.entity_id.startsWith("script."))}${this.entity("Aiutante modalit\xE0 attiva",t.mode_entity,e=>this.emit({mode_entity:e}),e=>["input_select.","input_text.","sensor."].some(i=>e.entity_id.startsWith(i)),"Cerca un aiutante o sensore")}${this.entity("Script accensione",t.on_script,e=>this.emit({on_script:e}),e=>e.entity_id.startsWith("script."))}${this.entity("Script spegnimento",t.off_script,e=>this.emit({off_script:e}),e=>e.entity_id.startsWith("script."))}${this.text("Etichetta atmosfera",t.hero_label,e=>this.emit({hero_label:e}))}${this.text("Icona intestazione",t.icon,e=>this.emit({icon:e}))}<details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo area colorata"],["accent_color","Colore principale"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],a=>this.emit({[e]:a})))}</details></details></div>`}};function $a(s={}){let t={...s.metrics||{}};for(let[i,a]of[["battery_entity","battery"],["area_entity","area"],["time_remaining_entity","remaining"]])s[i]&&!t[a]&&(t[a]=s[i]);let e=[...s.status_entities||[]];for(let i of["blade_entity","zone_entity"])s[i]&&!e.includes(s[i])&&e.push(s[i]);return{...s,profile:"lawn_mower",entity:s.entity||s.mower_entity||"",metrics:t,status_entities:e,controls:s.controls||[]}}var ce=class extends pt{static getConfigElement(){return document.createElement("pastel-lawn-mower-card-editor")}static getStubConfig(){return{profile:"lawn_mower",entity:"",metrics:{},controls:[]}}setConfig(t){super.setConfig($a(t))}},Tt=class extends X{detected(){return super.detected().filter(t=>t.profile==="lawn_mower")}setConfig(t){super.setConfig($a(t))}emit(t){super.emit({...t,profile:"lawn_mower"})}};q(Tt,"lockedProfile","lawn_mower");var di=class extends y{static get properties(){return{...super.properties}}static get styles(){return[super.styles,m`
  .hero{min-height:155px}.hero svg{width:104px;height:104px}.hero .reading{font-size:34px;font-weight:450;overflow-wrap:anywhere}.level{height:8px;border-radius:5px;background:var(--divider-color,#e8ebed);overflow:hidden;margin:-4px 2px 16px}.level span{display:block;height:100%;background:var(--p-accent);border-radius:5px}.metric{cursor:pointer}.metric strong{overflow-wrap:anywhere;font-size:21px}.actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.actions button{display:flex;align-items:center;justify-content:center;gap:5px;min-width:0;overflow-wrap:anywhere}.actions ha-icon{--mdc-icon-size:18px;flex-shrink:0}.zone{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:8px;align-items:center;border-top:1px solid var(--divider-color,#e8ebed);padding:10px 0}.zone strong{display:block;font-size:13px}.zone small{color:var(--p-muted);font-size:11px}.zone button{min-width:44px}.empty{padding:8px 0 0}
  .camera-frame{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;min-height:185px;border-radius:20px;background:var(--p-tint);color:var(--p-accent);margin-bottom:16px}.camera-frame svg{width:86px;height:86px}.camera-frame span{font-size:12px}.camera-frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.camera-frame img[hidden]{display:none}.leak-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--divider-color,#e8ebed);font-size:13px}.leak-row strong{font-weight:600;color:var(--p-accent)}.leak-row strong.danger{color:#ad3d3d}.leak-note{border-radius:12px;background:var(--p-tint);color:var(--p-accent);padding:12px;font-size:12px;margin:6px 0 14px}.waste-row{display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid var(--divider-color,#e8ebed);min-height:52px;font-size:13px}.waste-row strong{color:var(--p-accent);font-size:13px;text-align:right;overflow-wrap:anywhere}
  @media(max-width:450px){ha-card{padding:16px}.hero{padding:16px}.hero svg{width:88px;height:88px}.actions{grid-template-columns:repeat(2,minmax(0,1fr))}.actions button{font-size:12px}}
 `]}static getConfigElement(){return document.createElement(`${this.is}-editor`)}static getStubConfig(){return{title:"",state_entity:"",hero_entity:"",camera_entity:"",metrics:{},buttons:N[this.profile].buttons.map(([t,e])=>({name:t,icon:e,entity:""})),leak_sensors:[],waste_items:[]}}setConfig(t){if(super.setConfig(t),t.metrics&&(typeof t.metrics!="object"||Array.isArray(t.metrics)))throw new Error("metrics deve essere un oggetto");for(let e of["buttons","zones","leak_sensors","waste_items"])if(t[e]&&!Array.isArray(t[e]))throw new Error(`${e} deve essere una lista`)}get profile(){return N[this.constructor.profile]}status(t,e,i){return e.leak_sensors&&(t.leak_sensors||[]).length?Ce(this.hass,t.leak_sensors):t.state_entity?U(this.hass.states[t.state_entity]?.state):e.native&&t.hero_entity?Nt(e.native,i?.state):""}camera(t,e){let i=Mi(this.hass,t.camera_entity);return o`<div class="camera-frame" role="img" aria-label=${`${t.hero_label||e.hero}: ${t.camera_entity||"nessuna telecamera associata"}`}>${C(e.art)}<span>${t.camera_entity?"Anteprima telecamera":"Scegli una telecamera nell\u2019editor"}</span>${i?o`<img src=${i} alt=${t.hero_label||e.hero} loading="lazy" @error=${a=>{a.currentTarget.hidden=!0}}>`:""}</div>`}render(){if(!this.config||!this.hass)return o``;let t=this.config,e=this.profile,i=this.hass.states[t.hero_entity],a=this.palette(t.color||e.color),r=`${t.background_color?`--p-surface:${t.background_color};`:""}${t.tint_color?`--p-tint:${t.tint_color};`:""}${t.accent_color?`--p-accent:${t.accent_color};`:""}${t.text_color?`--p-ink:${t.text_color};`:""}${t.secondary_text_color?`--p-muted:${t.secondary_text_color};`:""}`,n=e.metrics.filter(([p])=>t.metrics?.[p]),l=e.native&&t.hero_entity?Ei(e.native,i,this.hass.services):[],c=e.camera&&t.camera_entity?[{name:"Live",icon:"mdi:video",enabled:A(this.hass.states[t.camera_entity])}]:[],d=this.status(t,e,i);return o`<ha-card style=${a+r}>
   <header><div class="icon"><ha-icon icon=${t.icon||e.icon}></ha-icon></div><div class="heading"><h2>${t.title||e.title}</h2><div class="subtitle">${t.subtitle||e.subtitle}</div></div>${d?o`<span class="pill">${d}</span>`:""}</header>
   ${e.camera?this.camera(t,e):o`<div class="hero">${C(e.art)}<div class="right"><div class="reading">${e.native?Nt(e.native,i?.state):e.waste_items?Ee(this.hass,{entity:t.hero_entity}):ke(this.hass,t.hero_entity)}</div><div class="caption">${t.hero_label||e.hero}</div></div></div>`}
   ${!e.camera&&Pt(this.hass,t.hero_entity)!==null?o`<div class="level" role="progressbar" aria-label=${t.hero_label||e.hero} aria-valuenow=${Pt(this.hass,t.hero_entity)} aria-valuemin="0" aria-valuemax="100"><span style=${`width:${Pt(this.hass,t.hero_entity)}%`}></span></div>`:""}
   ${n.length?o`<div class="metrics">${n.map(([p,u])=>o`<button class="metric" @click=${()=>this.info(t.metrics[p])}><small>${t.metric_labels?.[p]||u}</small><strong>${ht(this.hass,t.metrics[p])}</strong></button>`)}</div>`:""}
   ${e.leak_sensors&&(t.leak_sensors||[]).length?o`<div class="leak-note">${Ce(this.hass,t.leak_sensors)}</div>${t.leak_sensors.map(p=>{let u=this.hass.states[p.entity],g=A(u)&&u.state==="on";return o`<div class="leak-row"><span>${p.name||u?.attributes?.friendly_name||"Sensore perdita"}</span><strong class=${g?"danger":""}>${ht(this.hass,p.entity)}</strong></div>`})}`:""}
   ${e.waste_items&&(t.waste_items||[]).length?o`<div class="section-label">Raccolte</div>${t.waste_items.map(p=>o`<div class="waste-row"><span>${p.name||this.hass.states[p.entity]?.attributes?.friendly_name||"Raccolta"}</span><strong>${Ee(this.hass,p)}</strong></div>`)}`:""}
   ${e.zones&&(t.zones||[]).length?o`<div class="section-label">Zone</div>${t.zones.map(p=>o`<div class="zone"><span><strong>${p.name||"Zona"}</strong><small>${p.state_entity?ht(this.hass,p.state_entity):"Stato non associato"}</small></span>${this.actionButton({name:"Avvia",icon:"mdi:play",entity:p.start_entity,action:p.start_action||ze(p.start_entity,!0)},!0)}${this.actionButton({name:"Ferma",icon:"mdi:stop",entity:p.stop_entity,action:p.stop_action||ze(p.stop_entity,!1)},!0)}</div>`)}`:""}
   ${l.length||c.length||(t.buttons||[]).length?o`<div class="section-label">Comandi</div><div class="actions">${l.map(p=>{let u=p.action.split(".")[1],g=t.native_labels?.[u]||p.name;return o`<button style=${this.palette(t.native_colors?.[u]||t.color||e.color)} aria-label=${g} ?disabled=${!p.enabled||this.busy} @click=${()=>this.call(p.action,t.hero_entity)}><ha-icon icon=${p.icon}></ha-icon>${g}</button>`})}${c.map(p=>o`<button aria-label=${p.name} ?disabled=${!p.enabled} @click=${()=>this.info(t.camera_entity)}><ha-icon icon=${p.icon}></ha-icon>${p.name}</button>`)}${(t.buttons||[]).map(p=>this.actionButton(p))}</div>`:""}
   ${!t.hero_entity&&!t.camera_entity&&!t.state_entity&&!n.length&&!(t.waste_items||[]).length?o`<div class="empty">Apri l’editor per scegliere i sensori e i comandi del tuo dispositivo.</div>`:""}${this.feedback()}
  </ha-card>`}actionButton(t,e=!1){let i=Ai(t),a=i?.action.split(".")[0],r=i?.action.split(".")[1],n=!!i&&!!this.hass.services?.[a]?.[r]&&(!i.entity||A(this.hass.states[i.entity])||["button","input_button"].includes(i.entity.split(".")[0])&&this.hass.states[i.entity]?.state==="unknown");return o`<button style=${this.palette(t.color||this.config.color||this.profile.color)} aria-label=${t.name||"Azione"} ?disabled=${!n||this.busy} @click=${()=>i&&this.call(i.action,i.entity,t.data||{},t.target)}><ha-icon icon=${t.icon||"mdi:play"}></ha-icon>${e?"":t.name||"Azione"}</button>`}},ka=Object.fromEntries(Object.keys(N).map(s=>{var t;return[H(s),(t=class extends di{},q(t,"profile",s),q(t,"is",H(s)),t)]}));var os=["mdi:play","mdi:pause","mdi:stop","mdi:power","mdi:auto-mode","mdi:water-pump","mdi:water","mdi:pool","mdi:robot","mdi:coffee","mdi:coffee-outline","mdi:leaf","mdi:lightning-bolt","mdi:home","mdi:creation","mdi:weather-sunny","mdi:snowflake","mdi:thermometer","mdi:fire","mdi:information","mdi:printer","mdi:printer-3d","mdi:fan","mdi:lightbulb","mdi:cat","mdi:paw","mdi:sprinkler","mdi:solar-power","mdi:battery-high","mdi:garage","mdi:gate","mdi:video","mdi:lock","mdi:lock-open","mdi:shield-check","mdi:water-off"],ns=[["background_color","Sfondo card"],["tint_color","Sfondo riquadri"],["accent_color","Disegni e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]],pi=class extends S{static get styles(){return[super.styles,m`
  .metric-row{display:grid;gap:8px;padding:10px 0;border-bottom:1px solid var(--divider-color,#ddd)}.metric-row:last-child{border:0}.icon-options{grid-template-columns:repeat(5,minmax(0,1fr))}.icon-options button{min-height:50px}.button-editor{border:1px solid var(--divider-color,#ddd);border-radius:14px;padding:12px;margin:10px 0}.editor .pair{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}}
 `]}get profile(){return N[this.constructor.profile]}setConfig(t){super.setConfig({...t,metrics:{...t.metrics||{}},metric_labels:{...t.metric_labels||{}},native_labels:{...t.native_labels||{}},native_colors:{...t.native_colors||{}},buttons:[...t.buttons||[]],zones:[...t.zones||[]],leak_sensors:[...t.leak_sensors||[]],waste_items:[...t.waste_items||[]]})}updateButton(t,e){this.emit({buttons:this.config.buttons.map((i,a)=>t===a?{...i,...e}:i)})}addButton(){let t=this.config.buttons.length,e=this.profile.buttons[t]||["Nuovo comando","mdi:play"];this.emit({buttons:[...this.config.buttons,{name:e[0],icon:e[1],entity:""}]})}updateZone(t,e){this.emit({zones:this.config.zones.map((i,a)=>t===a?{...i,...e}:i)})}moveZone(t,e){let i=[...this.config.zones],a=t+e;a<0||a>=i.length||([i[t],i[a]]=[i[a],i[t]],this.emit({zones:i}))}zoneEditor(){let t=this.config;return o`<details open><summary>Zone irrigazione (${t.zones.length})</summary><p class="hint">Aggiungi quante zone servono. Per ciascuna scegli l’entità che indica lo stato e i comandi di avvio e arresto. Lo stato segue l’entità, non l’ultimo pulsante premuto.</p>${t.zones.map((e,i)=>o`<section class="button-editor">${this.text("Nome zona",e.name,a=>this.updateZone(i,{name:a}))}${this.entity("Stato zona",e.state_entity,a=>this.updateZone(i,{state_entity:a}),a=>!a.entity_id.startsWith("script."))}${this.entity("Script o pulsante per avviare",e.start_entity,a=>this.updateZone(i,{start_entity:a}),a=>["script","button","input_button","switch","input_boolean"].includes(a.entity_id.split(".")[0]))}${this.entity("Script o pulsante per fermare",e.stop_entity,a=>this.updateZone(i,{stop_entity:a}),a=>["script","button","input_button","switch","input_boolean"].includes(a.entity_id.split(".")[0]))}<div class="tools"><button ?disabled=${i===0} @click=${()=>this.moveZone(i,-1)}>↑</button><button ?disabled=${i===t.zones.length-1} @click=${()=>this.moveZone(i,1)}>↓</button><button @click=${()=>this.emit({zones:t.zones.filter((a,r)=>r!==i)})}>Rimuovi zona</button></div></section>`)}<button @click=${()=>this.emit({zones:[...t.zones,{name:`Zona ${t.zones.length+1}`,state_entity:"",start_entity:"",stop_entity:""}]})}>Aggiungi zona</button></details>`}metric(t,e){let i=this.config;return o`<div class="metric-row">${this.text("Etichetta "+e,i.metric_labels?.[t]||"",a=>this.emit({metric_labels:{...i.metric_labels,[t]:a}}))}${this.entity("Entit\xE0 "+e,i.metrics?.[t],a=>this.emit({metrics:{...i.metrics,[t]:a}}),a=>["sensor","binary_sensor","input_number","counter","input_text","select","input_select","switch","input_boolean","cover","lock","valve","event"].includes(a.entity_id.split(".")[0]))}</div>`}leakEditor(){let t=this.config;return o`<details open><summary>Sensori perdite (${t.leak_sensors.length})</summary><p class="hint">Aggiungi i sensori delle zone da proteggere. La scheda mostra il loro stato reale.</p>${t.leak_sensors.map((e,i)=>o`<section class="button-editor">${this.text("Nome zona",e.name,a=>this.emit({leak_sensors:t.leak_sensors.map((r,n)=>n===i?{...r,name:a}:r)}))}${this.entity("Sensore perdita",e.entity,a=>this.emit({leak_sensors:t.leak_sensors.map((r,n)=>n===i?{...r,entity:a}:r)}),a=>a.entity_id.startsWith("binary_sensor."))}<div class="tools"><button @click=${()=>this.emit({leak_sensors:t.leak_sensors.filter((a,r)=>r!==i)})}>Rimuovi</button></div></section>`)}<button @click=${()=>this.emit({leak_sensors:[...t.leak_sensors,{name:`Zona ${t.leak_sensors.length+1}`,entity:""}]})}>Aggiungi sensore</button></details>`}wasteEditor(){let t=this.config;return o`<details open><summary>Raccolte (${t.waste_items.length})</summary><p class="hint">Ogni riga può usare un calendario, un sensore, un input_select o un booleano. I calendari mostrano il prossimo evento disponibile; per i booleani puoi personalizzare il valore che indica la raccolta.</p>${t.waste_items.map((e,i)=>o`<section class="button-editor">${this.text("Nome raccolta",e.name,a=>this.emit({waste_items:t.waste_items.map((r,n)=>n===i?{...r,name:a}:r)}))}${this.entity("Calendario o entit\xE0 rifiuti",e.entity,a=>this.emit({waste_items:t.waste_items.map((r,n)=>n===i?{...r,entity:a}:r)}),a=>["calendar","sensor","binary_sensor","input_select","select","input_boolean","switch","input_text","date","input_datetime"].includes(a.entity_id.split(".")[0]))}<details><summary>Etichette per booleani</summary>${this.text("Valore attivo (normalmente on)",e.active_state||"on",a=>this.emit({waste_items:t.waste_items.map((r,n)=>n===i?{...r,active_state:a}:r)}))}${this.text("Testo quando attivo",e.active_label||"Da esporre",a=>this.emit({waste_items:t.waste_items.map((r,n)=>n===i?{...r,active_label:a}:r)}))}${this.text("Testo quando inattivo",e.inactive_label||"Non prevista",a=>this.emit({waste_items:t.waste_items.map((r,n)=>n===i?{...r,inactive_label:a}:r)}))}</details><div class="tools"><button ?disabled=${i===0} @click=${()=>this.moveWaste(i,-1)}>↑</button><button ?disabled=${i===t.waste_items.length-1} @click=${()=>this.moveWaste(i,1)}>↓</button><button @click=${()=>this.emit({waste_items:t.waste_items.filter((a,r)=>r!==i)})}>Rimuovi</button></div></section>`)}<button @click=${()=>this.emit({waste_items:[...t.waste_items,{name:"Nuova raccolta",entity:""}]})}>Aggiungi raccolta</button></details>`}moveWaste(t,e){let i=[...this.config.waste_items],a=t+e;a<0||a>=i.length||([i[t],i[a]]=[i[a],i[t]],this.emit({waste_items:i}))}nativeEditor(t,e){return o`<details><summary>Nomi e colori dei comandi</summary>${Se[t.native].map(([i,,a])=>o`<div class="metric-row">${this.text(`Nome ${i}`,e.native_labels?.[a]||"",r=>this.emit({native_labels:{...e.native_labels,[a]:r}}))}${this.paletteSelect(`Colore ${i}`,e.native_colors?.[a]||"",r=>this.emit({native_colors:{...e.native_colors,[a]:r}}),!0)}</div>`)}</details>`}iconChoices(t,e){return o`<details><summary>Icona del pulsante</summary><div class="icon-options">${os.map(i=>o`<button title=${i} aria-label=${i} aria-pressed=${String((t.icon||"mdi:play")===i)} @click=${()=>this.updateButton(e,{icon:i})}><ha-icon icon=${i}></ha-icon></button>`)}</div>${this.text("Oppure icona MDI personalizzata",t.icon,i=>this.updateButton(e,{icon:i}))}</details>`}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.profile;return o`<div class="editor" style=${this.palette(t.color||e.color)}>
  <div class="pair">${this.text("Nome card",t.title,i=>this.emit({title:i}))}${this.text("Sottotitolo",t.subtitle,i=>this.emit({subtitle:i}))}</div>
  ${this.paletteSelect("Colore card",t.color||e.color,i=>this.emit({color:i}))}
  ${this.entity("Entit\xE0 di stato (opzionale)",t.state_entity,i=>this.emit({state_entity:i}),i=>!i.entity_id.startsWith("script."))}
  <details open><summary>Riquadro principale</summary>${this.text("Etichetta valore",t.hero_label,i=>this.emit({hero_label:i}))}${e.camera?this.entity("Telecamera",t.camera_entity,i=>this.emit({camera_entity:i}),i=>i.entity_id.startsWith("camera."),"Cerca una telecamera"):this.entity(e.native?`Entit\xE0 ${e.native} per ${e.hero}`:"Sensore o entit\xE0 del valore",t.hero_entity,i=>this.emit({hero_entity:i}),i=>e.native?i.entity_id.startsWith(`${e.native}.`):e.waste_items?["calendar","sensor","binary_sensor","input_select","select","input_boolean","switch","input_text","date","input_datetime"].includes(i.entity_id.split(".")[0]):["sensor","binary_sensor","input_number","counter","input_text","select","input_select","switch","input_boolean"].includes(i.entity_id.split(".")[0]))}</details>
  <details open><summary>Altri valori</summary><p class="hint">Scegli solo i valori presenti nel tuo impianto. I campi vuoti non vengono mostrati.</p>${e.metrics.map(([i,a])=>this.metric(i,a))}</details>
  ${e.zones?this.zoneEditor():""}
  ${e.leak_sensors?this.leakEditor():""}
  ${e.waste_items?this.wasteEditor():""}
  ${e.native?this.nativeEditor(e,t):""}
  <details open><summary>Pulsanti (${t.buttons.length})</summary><p class="hint">Associa uno script, pulsante, scena o interruttore. Per servizi diversi puoi indicare l’azione in forma dominio.servizio. Il valore mostrato segue sempre le entità, non l’ultimo pulsante premuto.</p>${t.buttons.map((i,a)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${i.icon||"mdi:play"}></ha-icon>${i.name||"Nuovo comando"}</div>${this.text("Nome pulsante",i.name,r=>this.updateButton(a,{name:r}))}${this.entity("Script o entit\xE0 del comando",i.entity,r=>this.updateButton(a,{entity:r}),r=>["script","scene","button","input_button","switch","input_boolean","automation"].includes(r.entity_id.split(".")[0]),"Cerca script, pulsante o interruttore")}${this.iconChoices(i,a)}${this.paletteSelect("Colore pulsante",i.color||"",r=>this.updateButton(a,{color:r}),!0)}<details><summary>Servizio personalizzato</summary>${this.text("Azione (dominio.servizio)",i.action,r=>this.updateButton(a,{action:r}))}<p class="hint">Se lasci vuoto, viene usato il servizio appropriato all’entità scelta.</p></details><div class="tools"><button ?disabled=${a===0} @click=${()=>this.move(a,-1)}>↑</button><button ?disabled=${a===t.buttons.length-1} @click=${()=>this.move(a,1)}>↓</button><button @click=${()=>this.emit({buttons:t.buttons.filter((r,n)=>n!==a)})}>Rimuovi</button></div></section>`)}<button @click=${()=>this.addButton()}>Aggiungi pulsante</button></details>
  <details><summary>Altre opzioni</summary>${this.text("Icona intestazione",t.icon,i=>this.emit({icon:i}))}<details><summary>Colori personalizzati</summary>${ns.map(([i,a])=>this.text(a,t[i],r=>this.emit({[i]:r})))}</details></details>
 </div>`}},Sa=Object.fromEntries(Object.keys(N).map(s=>{var t;return[`${H(s)}-editor`,(t=class extends pi{},q(t,"profile",s),t)]}));var Ca=`
:host {font-family:inherit}
ha-card {border-radius:26px!important;box-shadow:0 4px 18px #14283308!important;border:1px solid var(--divider-color,#e8ebed)!important}
.header {padding-top:16px!important;padding-bottom:12px!important}
.title {font-size:17px!important;font-weight:650!important;letter-spacing:-.3px}
.panel {border-radius:20px!important}
.panel,.panel-summary {--primary-text-color:#27323c;--secondary-text-color:#5a6a73;color:#27323c}
.row {min-height:48px;touch-action:pan-y}
.row-status {font-size:12px!important;font-weight:600!important}
.count {font-weight:400!important;font-variant-numeric:tabular-nums}
button:focus-visible,[tabindex]:focus-visible {outline:2px solid var(--primary-color,#2e618c);outline-offset:2px}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
`;function $(s,t){if(customElements.get(s)){console.warn(`Pastel UI: ${s} gi\xE0 caricato. Rimuovi la vecchia risorsa per usare la versione della suite.`);return}if(s.endsWith("-editor")){customElements.define(s,t);return}if(typeof t.prototype.requestUpdate=="function"){class i extends t{static get styles(){return[super.styles,m([Ca])]}}customElements.define(s,i)}else{class i extends t{_render(...r){let n=super._render(...r);if(this.shadowRoot&&!this.shadowRoot.querySelector("[data-pastel-polish]")){let l=document.createElement("style");l.dataset.pastelPolish="",l.textContent=Ca,this.shadowRoot.append(l)}return n}}customElements.define(s,i)}}var de={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"},gray:{base:"#9ca3af",light:"#e5e7eb",bg:"#f3f4f6",text:"#6b7280"}},ls=Object.keys(de);function cs(s){return de[s]||de.blue}function ds(s,t){return t%2!==0&&s===t-1}var ui=class extends x{static get properties(){return{hass:{},config:{},_activating:{state:!0}}}static getStubConfig(){return{title:"",buttons:[{label:"Bottone",icon:"mdi:lightning-bolt",color:"blue",action:{type:"toggle",entity_id:""}}]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title||"",buttons:Array.isArray(t.buttons)?t.buttons:[]},this._activating={}}getCardSize(){return 1+Math.ceil((this.config.buttons||[]).length/2)}static getConfigElement(){return document.createElement("pastel-button-card-editor")}async _handleTap(t,e,i){if(i&&i.stopPropagation(),!t.action)return;try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}this._activating={...this._activating,[e]:!0},setTimeout(()=>{this._activating={...this._activating,[e]:!1}},200);let a=t.action;switch(a.type){case"toggle":a.entity_id&&this.hass.callService("homeassistant","toggle",{entity_id:a.entity_id});break;case"turn_on":if(a.entity_id){let[r]=a.entity_id.split(".");this.hass.callService(r,"turn_on",{entity_id:a.entity_id})}break;case"turn_off":if(a.entity_id){let[r]=a.entity_id.split(".");this.hass.callService(r,"turn_off",{entity_id:a.entity_id})}break;case"call_service":{let[r,n]=(a.service||"").split(".");r&&n&&this.hass.callService(r,n,a.data||{});break}case"scene":a.entity_id&&this.hass.callService("scene","turn_on",{entity_id:a.entity_id});break;case"script":a.entity_id&&this.hass.callService("script","turn_on",{entity_id:a.entity_id});break;case"navigate":a.navigation_path&&(history.pushState(null,"",a.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":a.url_path&&window.open(a.url_path,a.new_tab!==!1?"_blank":"_self");break;case"more_info":if(a.entity_id){let r=new Event("hass-more-info",{bubbles:!0,composed:!0});r.detail={entityId:a.entity_id},this.dispatchEvent(r)}break;default:break}}render(){if(!this.config||!this.hass)return o``;let t=this.config.buttons||[],e=t.length;return o`
      <ha-card>
        ${this.config.title?o`
          <div class="card-title">${this.config.title}</div>
        `:""}

        <div class="button-grid">
          ${t.map((i,a)=>{let r=cs(i.color),n=ds(a,e),l=this._activating&&this._activating[a];return o`
              <button
                class="pastel-btn ${l?"activating":""}"
                style="
                  --btn-bg: ${r.bg};
                  --btn-text: ${r.text};
                  --btn-base: ${r.base};
                  --btn-light: ${r.light};
                  ${n?"grid-column: span 2;":""}
                "
                @click=${c=>this._handleTap(i,a,c)}
              >
                ${i.icon?o`
                  <ha-icon icon=${i.icon} class="btn-icon"></ha-icon>
                `:""}
                <span class="btn-label">${i.label||""}</span>
              </button>
            `})}
        </div>
      </ha-card>
    `}static get styles(){return m`
      :host { display: block; }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
        padding: 4px;
        overflow: hidden;
      }
      .card-title {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        padding: 10px 12px 4px;
      }
      .button-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        padding: 4px;
      }
      .pastel-btn {
        background: var(--btn-bg);
        color: var(--btn-text);
        border: none;
        border-radius: 18px;
        padding: 28px 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        font-family: inherit;
        transition: filter 0.15s ease, transform 0.1s ease;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        min-height: 90px;
      }
      .pastel-btn:hover {
        filter: brightness(0.96);
      }
      .pastel-btn:active, .pastel-btn.activating {
        transform: scale(0.97);
        filter: brightness(0.92);
      }
      .btn-icon {
        --mdc-icon-size: 28px;
        color: var(--btn-text);
      }
      .btn-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--btn-text);
        text-align: center;
        line-height: 1.3;
      }
    `}};$("pastel-button-card",ui);var hi=class extends x{static get properties(){return{hass:{},_config:{state:!0},_dragIndex:{state:!0},_dragOverIndex:{state:!0}}}setConfig(t){this._config={...t,buttons:[...t.buttons||[]]},this._dragIndex=null,this._dragOverIndex=null}_fireChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_addButton(){let t=[...this._config.buttons||[],{label:"Nuovo bottone",icon:"mdi:lightning-bolt",color:"blue",action:{type:"toggle",entity_id:""}}];this._config={...this._config,buttons:t},this._fireChanged()}_removeButton(t){let e=[...this._config.buttons||[]];e.splice(t,1),this._config={...this._config,buttons:e},this._fireChanged()}_updateButton(t,e,i){let a=[...this._config.buttons||[]];a[t]={...a[t],[e]:i},this._config={...this._config,buttons:a},this._fireChanged()}_updateButtonAction(t,e,i){let a=[...this._config.buttons||[]];a[t]={...a[t],action:{...a[t].action||{},[e]:i}},this._config={...this._config,buttons:a},this._fireChanged()}_onDragStart(t,e){this._dragIndex=t,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(t))}_onDragOver(t,e){e.preventDefault(),e.dataTransfer.dropEffect="move",this._dragOverIndex=t}_onDrop(t,e){if(e.preventDefault(),this._dragIndex===null||this._dragIndex===t){this._dragIndex=null,this._dragOverIndex=null;return}let i=[...this._config.buttons||[]],[a]=i.splice(this._dragIndex,1);i.splice(t,0,a),this._config={...this._config,buttons:i},this._dragIndex=null,this._dragOverIndex=null,this._fireChanged()}_onDragEnd(){this._dragIndex=null,this._dragOverIndex=null}_renderActionFields(t,e){let i=t.action?.type||"toggle",a=["toggle","turn_on","turn_off","more_info","scene","script"].includes(i),r=i==="call_service",n=i==="navigate",l=i==="url",c=i==="scene"?["scene"]:i==="script"?["script"]:void 0;return o`
      <div class="action-row">
        <label>Tipo azione</label>
        <select
          .value=${i}
          @change=${d=>this._updateButtonAction(e,"type",d.target.value)}
        >
          <option value="toggle">Toggle entità</option>
          <option value="turn_on">Accendi</option>
          <option value="turn_off">Spegni</option>
          <option value="script">Lancia script</option>
          <option value="scene">Attiva scena</option>
          <option value="call_service">Chiama servizio</option>
          <option value="more_info">Apri dettagli (more-info)</option>
          <option value="navigate">Naviga a pagina</option>
          <option value="url">Apri URL</option>
        </select>
      </div>

      ${a?o`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.action?.entity_id||""}
          .includeDomains=${c}
          label="Entità"
          @value-changed=${d=>this._updateButtonAction(e,"entity_id",d.detail.value)}
        ></ha-entity-picker>
      `:""}

      ${r?o`
        <ha-textfield
          label="Servizio (es. light.turn_on)"
          .value=${t.action?.service||""}
          @change=${d=>this._updateButtonAction(e,"service",d.target.value)}
        ></ha-textfield>
        <ha-textfield
          label="Dati JSON opzionali (es. {&quot;entity_id&quot;: &quot;light.xyz&quot;})"
          .value=${t.action?.data?JSON.stringify(t.action.data):""}
          @change=${d=>{try{let p=JSON.parse(d.target.value||"{}");this._updateButtonAction(e,"data",p)}catch{}}}
        ></ha-textfield>
      `:""}

      ${n?o`
        <ha-textfield
          label="Percorso (es. /lovelace/1)"
          .value=${t.action?.navigation_path||""}
          @change=${d=>this._updateButtonAction(e,"navigation_path",d.target.value)}
        ></ha-textfield>
      `:""}

      ${l?o`
        <ha-textfield
          label="URL"
          .value=${t.action?.url_path||""}
          @change=${d=>this._updateButtonAction(e,"url_path",d.target.value)}
        ></ha-textfield>
      `:""}
    `}render(){if(!this._config||!this.hass)return o``;let t=this._config.buttons||[];return o`
      <div class="editor">

        <ha-textfield
          label="Titolo card (opzionale)"
          .value=${this._config.title||""}
          @change=${e=>{this._config={...this._config,title:e.target.value},this._fireChanged()}}
        ></ha-textfield>

        <div class="section-label">Bottoni <span class="hint">(trascina per riordinare)</span></div>

        <div class="buttons-list">
          ${t.map((e,i)=>o`
            <div
              class="btn-editor ${this._dragOverIndex===i?"drag-over":""}"
              draggable="true"
              @dragstart=${a=>this._onDragStart(i,a)}
              @dragover=${a=>this._onDragOver(i,a)}
              @drop=${a=>this._onDrop(i,a)}
              @dragend=${()=>this._onDragEnd()}
            >
              <div class="btn-editor-header">
                <span class="drag-handle">⠿</span>
                <span class="btn-editor-title">${e.label||"Bottone "+(i+1)}</span>
                <button class="remove-btn" @click=${()=>this._removeButton(i)}>✕</button>
              </div>

              <ha-textfield
                label="Etichetta"
                .value=${e.label||""}
                @change=${a=>this._updateButton(i,"label",a.target.value)}
              ></ha-textfield>

              <ha-icon-picker
                label="Icona"
                .value=${e.icon||""}
                @value-changed=${a=>this._updateButton(i,"icon",a.detail.value)}
              ></ha-icon-picker>

              <div class="color-section">
                <div class="color-label">Colore</div>
                <div class="color-row">
                  ${ls.map(a=>o`
                    <button
                      class="swatch ${e.color===a?"selected":""}"
                      style="background:${de[a].base}"
                      title=${a}
                      @click=${()=>this._updateButton(i,"color",a)}
                    ></button>
                  `)}
                </div>
              </div>

              ${this._renderActionFields(e,i)}

            </div>
          `)}
        </div>

        <button class="add-button" @click=${this._addButton}>+ Aggiungi bottone</button>

      </div>
    `}static get styles(){return m`
      .editor { display: flex; flex-direction: column; gap: 12px; padding: 8px 0; }
      .section-label { font-size: 14px; font-weight: 600; color: var(--primary-text-color); margin-top: 4px; }
      .hint { font-size: 12px; font-weight: 400; color: var(--secondary-text-color); }
      .buttons-list { display: flex; flex-direction: column; gap: 10px; }
      .btn-editor {
        border: 1.5px solid var(--divider-color, #e5e7eb);
        border-radius: 16px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: var(--card-background-color, #fff);
        cursor: grab;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }
      .btn-editor.drag-over {
        border-color: var(--primary-color, #3d9cf0);
        box-shadow: 0 0 0 2px var(--primary-color, #3d9cf0);
      }
      .btn-editor:active { cursor: grabbing; }
      .btn-editor-header {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .drag-handle { font-size: 18px; color: var(--secondary-text-color); cursor: grab; }
      .btn-editor-title { flex: 1; font-size: 13px; font-weight: 600; color: var(--primary-text-color); }
      .remove-btn {
        background: none; border: none; cursor: pointer; font-size: 14px;
        color: var(--secondary-text-color); padding: 2px 6px; border-radius: 6px;
      }
      .remove-btn:hover { background: var(--error-color, #fee8e8); color: #dc2626; }
      .color-label { font-size: 12px; color: var(--secondary-text-color); margin-bottom: 6px; }
      .color-row { display: flex; gap: 8px; flex-wrap: wrap; }
      .swatch {
        width: 26px; height: 26px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s, border-color 0.15s;
      }
      .swatch:hover { transform: scale(1.15); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .action-row { display: flex; flex-direction: column; gap: 4px; }
      .action-row label { font-size: 12px; color: var(--secondary-text-color); }
      .action-row select {
        padding: 8px; border-radius: 8px; border: 1px solid var(--divider-color, #e5e7eb);
        background: var(--card-background-color, #fff); font-size: 13px; color: var(--primary-text-color);
        font-family: inherit; cursor: pointer;
      }
      .add-button {
        padding: 12px; border-radius: 12px; border: 1.5px dashed var(--divider-color, #ccc);
        background: transparent; cursor: pointer; font-size: 13px; color: var(--primary-text-color);
        font-family: inherit; transition: border-color 0.15s;
      }
      .add-button:hover { border-color: var(--primary-color, #3d9cf0); color: var(--primary-color, #3d9cf0); }
    `}};$("pastel-button-card-editor",hi);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-button-card",name:"Pastel Button",description:"Griglia di bottoni pastello personalizzabili: colore, icona, etichetta e azione per ogni bottone. Layout automatico 2 colonne.",preview:!0});var za=new WeakMap,P=Ie(s=>t=>{if(!(t instanceof D))throw new Error("unsafeHTML can only be used in text bindings");let e=za.get(t);if(e!==void 0&&lt(s)&&s===e.value&&t.value===e.fragment)return;let i=document.createElement("template");i.innerHTML=s;let a=document.importNode(i.content,!0);t.setValue(a),za.set(t,{value:s,fragment:a})});var pe={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Ma=Object.keys(pe);function ps(s){return pe[s]||pe.blue}var us=["auto","window","door","gate","garage","generic"],Ea={window:{closed:"mdi:window-closed-variant",open:"mdi:window-open-variant"},door:{closed:"mdi:door-closed",open:"mdi:door-open"},gate:{closed:"mdi:gate",open:"mdi:gate-open"},garage:{closed:"mdi:garage",open:"mdi:garage-open"},generic:{closed:"mdi:square-outline",open:"mdi:square"}},hs={auto:"Automatico",window:"Finestra",door:"Porta",gate:"Cancello",garage:"Basculante",generic:"Generico"};function ms(s,t){if(s&&s!=="auto")return s;if(!t)return"generic";let e=t.attributes?.device_class;return e==="window"?"window":e==="door"?"door":e==="gate"?"gate":e==="garage_door"?"garage":(t.entity_id?.startsWith("cover."),"generic")}function gs(s){if(!s)return!1;let t=s.state;return t==="on"||t==="open"||t==="opening"||t==="true"}function fs(s,t){let e=t?"1":"0",i=t?"rotate(-50)":"rotate(0)";return`
    <svg width="70" height="80" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="54" height="64" rx="5" fill="#ffffff" opacity=".7"/>
      <rect x="8" y="8" width="54" height="64" rx="5" stroke="${s.base}" stroke-width="2.5"/>
      <line x1="35" y1="8" x2="35" y2="72" stroke="${s.base}" stroke-width="2" opacity=".6"/>
      <line x1="8" y1="40" x2="62" y2="40" stroke="${s.base}" stroke-width="2" opacity=".6"/>
      <circle cx="35" cy="40" r="4" fill="${s.base}" opacity=".8"/>
      <rect x="36" y="9" width="25" height="30" rx="3" fill="${s.light}"
        style="transform-origin:36px 9px;transform:${i}deg;transition:transform .5s ease"/>
      <g opacity="${e}" style="transition:opacity .4s">
        <path d="M50 20 Q58 24 50 28" stroke="${s.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" repeatCount="indefinite"/>
        </path>
        <path d="M54 30 Q62 34 54 38" stroke="${s.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.5;0" dur="2.1s" repeatCount="indefinite" begin="0.4s"/>
        </path>
        <path d="M50 46 Q58 50 50 54" stroke="${s.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.6;0" dur="1.6s" repeatCount="indefinite" begin="0.8s"/>
        </path>
      </g>
    </svg>`}function bs(s,t){let e=t?"perspective(300px) rotateY(-55deg)":"perspective(300px) rotateY(0deg)",i=t?"1":"0";return`
    <svg width="60" height="82" viewBox="0 0 60 82" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <rect x="5" y="4" width="50" height="74" rx="4" fill="${s.light}" stroke="${s.base}" stroke-width="2"/>
      <rect x="7" y="6" width="46" height="70" rx="3" fill="#ffffff" opacity=".85"
        style="transform-origin:7px 6px;transform:${e};transition:transform .5s ease"/>
      <circle cx="44" cy="42" r="3.5" fill="${s.base}"/>
      <g opacity="${i}" style="transition:opacity .4s">
        <line x1="38" y1="14" x2="56" y2="10" stroke="#fde68a" stroke-width="2" stroke-linecap="round">
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="38" y1="22" x2="58" y2="22" stroke="#fde68a" stroke-width="2" stroke-linecap="round">
          <animate attributeName="opacity" values="0;0.6;0" dur="1.7s" repeatCount="indefinite" begin="0.3s"/>
        </line>
        <line x1="38" y1="30" x2="56" y2="34" stroke="#fde68a" stroke-width="2" stroke-linecap="round">
          <animate attributeName="opacity" values="0;0.7;0" dur="2.3s" repeatCount="indefinite" begin="0.6s"/>
        </line>
      </g>
    </svg>`}function vs(s,t){let e=t?"perspective(300px) rotateY(-70deg)":"rotateY(0deg)",i=t?"perspective(300px) rotateY(70deg)":"rotateY(0deg)",a=t?"0":"1";return`
    <svg width="90" height="75" viewBox="0 0 90 75" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <rect x="2"  y="8" width="10" height="56" rx="3" fill="${s.base}" opacity=".7"/>
      <rect x="78" y="8" width="10" height="56" rx="3" fill="${s.base}" opacity=".7"/>
      <g style="transform-origin:13px 36px;transform:${e};transition:transform .5s ease">
        <rect x="13" y="12" width="27" height="48" rx="2" fill="${s.light}" stroke="${s.base}" stroke-width="1.5"/>
        <line x1="13" y1="24" x2="40" y2="24" stroke="${s.base}" stroke-width="1" opacity=".4"/>
        <line x1="13" y1="36" x2="40" y2="36" stroke="${s.base}" stroke-width="1" opacity=".4"/>
        <line x1="13" y1="48" x2="40" y2="48" stroke="${s.base}" stroke-width="1" opacity=".4"/>
        <line x1="26" y1="12" x2="26" y2="60" stroke="${s.base}" stroke-width="1" opacity=".4"/>
      </g>
      <g style="transform-origin:77px 36px;transform:${i};transition:transform .5s ease">
        <rect x="50" y="12" width="27" height="48" rx="2" fill="${s.light}" stroke="${s.base}" stroke-width="1.5"/>
        <line x1="50" y1="24" x2="77" y2="24" stroke="${s.base}" stroke-width="1" opacity=".4"/>
        <line x1="50" y1="36" x2="77" y2="36" stroke="${s.base}" stroke-width="1" opacity=".4"/>
        <line x1="50" y1="48" x2="77" y2="48" stroke="${s.base}" stroke-width="1" opacity=".4"/>
        <line x1="63" y1="12" x2="63" y2="60" stroke="${s.base}" stroke-width="1" opacity=".4"/>
      </g>
      <circle cx="45" cy="36" r="5" fill="${s.base}" opacity="${a}" style="transition:opacity .3s">
        <animate attributeName="opacity" values="${t?"0":"0.9;0.5;0.9"}" dur="3s" repeatCount="indefinite"/>
      </circle>
      <rect x="2" y="64" width="86" height="4" rx="2" fill="${s.base}" opacity=".3"/>
    </svg>`}function ys(s,t){let e=t?"perspective(400px) rotateX(-85deg)":"rotateX(0deg)",i=t?"1":"0",a=t?"#34c472":s.base;return`
    <svg width="86" height="75" viewBox="0 0 86 75" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <polygon points="4,24 43,4 82,24" fill="${s.light}" stroke="${s.base}" stroke-width="2"/>
      <circle cx="43" cy="15" r="3.5" fill="${a}" style="transition:fill .4s">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      <rect x="4" y="24" width="78" height="48" rx="4" fill="${s.bg}" stroke="${s.base}" stroke-width="2"/>
      <g style="transform-origin:43px 24px;transform:${e};transition:transform .6s ease">
        <rect x="10" y="28" width="66" height="40" rx="3" fill="#ffffff" opacity=".88" stroke="${s.base}" stroke-width="1.5"/>
        <line x1="10" y1="36" x2="76" y2="36" stroke="${s.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="44" x2="76" y2="44" stroke="${s.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="52" x2="76" y2="52" stroke="${s.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="60" x2="76" y2="60" stroke="${s.base}" stroke-width="1" opacity=".35"/>
        <rect x="37" y="45" width="12" height="4" rx="2" fill="${s.base}" opacity=".8"/>
      </g>
      <g opacity="${i}" style="transition:opacity .4s">
        <rect x="10" y="50" width="66" height="20" rx="2" fill="${s.base}" opacity=".08"/>
        <line x1="43" y1="50" x2="43" y2="70" stroke="${s.base}" stroke-width="1" opacity=".2" stroke-dasharray="3,3"/>
      </g>
    </svg>`}function xs(s,t){let e=t?s.base:s.light;return`
    <svg width="68" height="78" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="56" height="62" rx="8" fill="${s.light}" stroke="${s.base}" stroke-width="2"/>
      <rect x="14" y="14" width="40" height="46" rx="5" fill="#ffffff" opacity=".7"/>
      <line x1="14" y1="14" x2="54" y2="60" stroke="${s.base}" stroke-width="1.5" opacity=".15"/>
      <line x1="54" y1="14" x2="14" y2="60" stroke="${s.base}" stroke-width="1.5" opacity=".15"/>
      <circle cx="34" cy="37" r="8" fill="${e}" opacity=".8" style="transition:fill .4s">
        <animate attributeName="r" values="8;9.5;8" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="34" cy="37" r="3" fill="#ffffff"/>
      <circle cx="54" cy="16" r="4" fill="${s.base}" opacity=".7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </svg>`}function _s(s,t,e){switch(s){case"window":return fs(t,e);case"door":return bs(t,e);case"gate":return vs(t,e);case"garage":return ys(t,e);default:return xs(t,e)}}function ws(s,t,e,i){if(i)return{count:"\u2713",label:"tutto chiuso"};let a=e==="window"?"finestr"+(s===1?"a":"e"):e==="door"?s===1?"porta":"porte":e==="gate"?s===1?"cancello":"cancelli":e==="garage"?s===1?"basculante":"basculanti":s===1?"apertura":"aperture";return{count:String(s),label:`${a} aper${s===1?"t"+(e==="window"?"a":"o"):"te"}`}}function $s(s,t,e){return e?"Casa sicura":s===1?"Una aperta":s===t?"Tutte aperte":`${s} aperte`}function ks(s,t){let e=[...s];return t==="alpha"?e.sort((i,a)=>i.name.localeCompare(a.name)):t==="open_first"?e.sort((i,a)=>(a.open?1:0)-(i.open?1:0)):t==="closed_first"?e.sort((i,a)=>(i.open?1:0)-(a.open?1:0)):e}function Ss(s,t){return t==="open"?s.filter(e=>e.open):t==="closed"?s.filter(e=>!e.open):s}var mi=class extends x{static get properties(){return{hass:{},config:{},_entities:{state:!0}}}static getStubConfig(){return{title:"Porte e Finestre",subtitle:"Piano terra",icon:"mdi:home",color:"blue",opening_type:"window",show_header:!0,show_hero:!0,show_list:!0,show_badge:!0,show_counter:!0,sort:"manual",filter:"all",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title??"Aperture",subtitle:t.subtitle??"",icon:t.icon??"mdi:home",color:Ma.includes(t.color)?t.color:"blue",opening_type:t.opening_type??"window",show_header:t.show_header??!0,show_hero:t.show_hero??!0,show_list:t.show_list??!0,show_badge:t.show_badge??!0,show_counter:t.show_counter??!0,sort:t.sort??"manual",filter:t.filter??"all",entities:Array.isArray(t.entities)?t.entities:[]},this._pressTimers={},this._tapCounters={}}getCardSize(){return 3+Math.ceil((this.config.entities||[]).length/1)}static getConfigElement(){return document.createElement("pastel-openings-card-editor")}_resolveEntities(){return(this.config.entities||[]).map(t=>{let e=typeof t=="string"?t:t.entity,i=this.hass.states[e],a=ms(typeof t=="object"?t.type:"auto",i),r=gs(i),n=Ea[a]||Ea.generic;return{id:e,obj:i,name:typeof t=="object"&&t.name?t.name:i?.attributes?.friendly_name||e,type:a,open:r,icon:r?n.open:n.closed,tap:typeof t=="object"?t.tap_action:null,hold:typeof t=="object"?t.hold_action:null,dbl:typeof t=="object"?t.double_tap_action:null}})}_dispatchAction(t,e){if(!t){this._moreInfo(e);return}try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}switch(t.type){case"more_info":this._moreInfo(t.entity_id||e);break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id||e});break;case"turn_on":{let[i]=(t.entity_id||e).split(".");this.hass.callService(i,"turn_on",{entity_id:t.entity_id||e});break}case"turn_off":{let[i]=(t.entity_id||e).split(".");this.hass.callService(i,"turn_off",{entity_id:t.entity_id||e});break}case"call_service":{let[i,a]=(t.service||"").split(".");i&&a&&this.hass.callService(i,a,t.data||{});break}case"navigate":t.navigation_path&&(history.pushState(null,"",t.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":t.url_path&&window.open(t.url_path,t.new_tab!==!1?"_blank":"_self");break;default:this._moreInfo(e)}}_moreInfo(t){if(!t)return;let e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_onPointerDown(t,e){e.stopPropagation(),!(e.isPrimary===!1||e.button!==0)&&(this._onPointerLeave(t),this._pressOrigin={id:t.id,pointerId:e.pointerId,x:e.clientX,y:e.clientY},this._pressTimers[t.id]=setTimeout(()=>{this._pressTimers[t.id]=null,this._dispatchAction(t.hold,t.id)},500))}_onPointerUp(t,e){e.stopPropagation(),this._onPointerMove(t,e),this._pressOrigin?.pointerId===e.pointerId&&this._pressTimers[t.id]&&(clearTimeout(this._pressTimers[t.id]),this._pressTimers[t.id]=null,this._tapCounters[t.id]=(this._tapCounters[t.id]||0)+1,this._tapCounters[t.id]===1&&setTimeout(()=>{this._tapCounters[t.id]===1?(this._tapCounters[t.id]=0,this._dispatchAction(t.tap,t.id)):this._tapCounters[t.id]>1&&(this._tapCounters[t.id]=0,this._dispatchAction(t.dbl,t.id))},300))}_onPointerMove(t,e){let i=this._pressOrigin;i?.id===t.id&&i.pointerId===e.pointerId&&Math.hypot(e.clientX-i.x,e.clientY-i.y)>10&&this._onPointerLeave(t)}disconnectedCallback(){Object.values(this._pressTimers||{}).forEach(clearTimeout),this._tapCounters={},super.disconnectedCallback()}_onPointerLeave(t){clearTimeout(this._pressTimers[t.id]),this._pressTimers[t.id]=null}render(){if(!this.config||!this.hass)return o``;let t=ps(this.config.color),e=this._resolveEntities(),i=ks(e,this.config.sort),a=Ss(i,this.config.filter),r=e.filter(v=>v.open).length,n=e.length,l=r===0,c=(()=>{let v={};return e.forEach(h=>{v[h.type]=(v[h.type]||0)+1}),Object.entries(v).sort((h,_)=>_[1]-h[1])[0]?.[0]||"generic"})(),d=c,p=!l,{count:u,label:g}=ws(r,n,c,l),f=$s(r,n,l);return o`
      <ha-card style="
        --c-base:${t.base};
        --c-light:${t.light};
        --c-bg:${t.bg};
        --c-text:${t.text};
      ">
        <!-- header -->
        ${this.config.show_header?o`
          <div class="header">
            <div class="header-left">
              <ha-icon icon=${this.config.icon} style="color:var(--c-base)"></ha-icon>
              <div>
                <div class="title">${this.config.title}</div>
                ${this.config.subtitle?o`<div class="subtitle">${this.config.subtitle}</div>`:""}
              </div>
            </div>
          </div>
        `:""}

        <!-- hero -->
        ${this.config.show_hero?o`
          <div class="panel-hero ${l?"hero-safe":"hero-alert"}">
            <div class="hero-row">
              <div class="hero-illustration">
                ${P(_s(d,t,p))}
              </div>
              <div class="hero-count-block">
                ${this.config.show_counter?o`
                  <div class="hero-count ${l?"count-safe":""}">${u}</div>
                `:""}
                <div class="hero-label">${g}</div>
                ${this.config.show_badge?o`
                  <div class="hero-badge ${l?"badge-safe":"badge-alert"}">${f}</div>
                `:""}
              </div>
            </div>
          </div>
        `:""}

        <!-- list -->
        ${this.config.show_list&&a.length>0?o`
          <div class="panel-list">
            ${a.map((v,h)=>o`
              ${h>0?o`<div class="divider"></div>`:""}
              <div
                class="list-row ${v.open?"row-open":""}"
                @pointerdown=${_=>this._onPointerDown(v,_)}
                @pointerup=${_=>this._onPointerUp(v,_)}
                @pointerleave=${()=>this._onPointerLeave(v)}
                @pointermove=${_=>this._onPointerMove(v,_)}
                @pointercancel=${()=>this._onPointerLeave(v)}
              >
                <ha-icon icon=${v.icon}
                  style="color:${v.open?"var(--c-text)":"var(--secondary-text-color)"}">
                </ha-icon>
                <span class="row-name ${v.open?"":"row-name-closed"}">${v.name}</span>
                <span class="row-status ${v.open?"status-open":""}">
                  ${v.open?"Aperto":"Chiuso"}
                </span>
              </div>
            `)}
          </div>
        `:""}
      </ha-card>
    `}static get styles(){return m`
      :host { display: block; }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex; align-items: center; padding: 12px 14px 8px;
      }
      .header-left { display: flex; align-items: center; gap: 10px; }
      .header ha-icon { --mdc-icon-size: 22px; }
      .title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 12px; color: var(--c-text); margin-top: 1px; }

      .panel-hero {
        border-radius: 20px; margin: 4px; padding: 14px 16px;
        background: var(--c-bg);
        transition: background 0.4s ease;
      }
      .hero-row {
        display: flex; align-items: center; justify-content: space-between; gap: 8px;
      }
      .hero-illustration { flex-shrink: 0; }
      .hero-count-block { flex: 1; text-align: right; }
      .hero-count {
        font-size: 56px; font-weight: 300; color: var(--c-base);
        line-height: 1; letter-spacing: -2px;
        animation: count-pop 0.3s ease;
      }
      .hero-count.count-safe { color: var(--c-text); font-size: 42px; }
      @keyframes count-pop {
        0% { transform: scale(0.85); opacity: 0.5; }
        100% { transform: scale(1); opacity: 1; }
      }
      .hero-label { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
      .hero-badge {
        display: inline-flex; align-items: center; margin-top: 8px;
        padding: 4px 12px; border-radius: 12px;
        font-size: 12px; font-weight: 600;
        animation: badge-in 0.25s ease;
      }
      @keyframes badge-in {
        from { transform: scale(0.9); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }
      .badge-safe  { background: var(--c-light); color: var(--c-text); }
      .badge-alert { background: #fecaca; color: #dc2626; }

      .panel-list {
        background: var(--c-bg); border-radius: 20px; margin: 4px; padding: 6px;
      }
      .list-row {
        display: flex; align-items: center; gap: 12px;
        padding: 13px 12px; border-radius: 16px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
        transition: background 0.15s ease;
      }
      .list-row:active { background: rgba(0,0,0,0.04); }
      .list-row.row-open { background: rgba(220,38,38,0.06); }
      .list-row ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }
      .row-name { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .row-name-closed { opacity: 0.65; }
      .row-status { font-size: 13px; font-weight: 600; color: var(--secondary-text-color); }
      .row-status.status-open {
        color: #dc2626; background: #fecaca; padding: 3px 9px; border-radius: 8px; font-size: 11px;
      }
      .divider { height: 0.5px; background: rgba(0,0,0,0.08); margin: 0 14px; }
    `}};$("pastel-openings-card",mi);var gi=class extends x{static get properties(){return{hass:{},_config:{state:!0},_entityRegistry:{state:!0}}}connectedCallback(){super.connectedCallback(),this._loadEntityRegistry()}async _loadEntityRegistry(){if(this.hass)try{let t=await this.hass.connection.sendMessagePromise({type:"config/entity_registry/list"});this._entityRegistry=t}catch{this._entityRegistry=[]}}updated(t){t.has("hass")&&this.hass&&!this._entityRegistry&&this._loadEntityRegistry()}setConfig(t){this._config={...t,entities:[...t.entities||[]]}}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_set(t,e){this._config={...this._config,[t]:e},this._fire()}_addEntity(){let t=[...this._config.entities||[],{entity:"",name:"",type:"auto",tap_action:null,hold_action:null,double_tap_action:null}];this._set("entities",t)}_removeEntity(t){let e=[...this._config.entities];e.splice(t,1),this._set("entities",e)}_updateEntity(t,e,i){let a=[...this._config.entities];a[t]={...a[t],[e]:i},this._set("entities",a)}_updateEntityAction(t,e,i,a){let r=[...this._config.entities];r[t]={...r[t],[e]:{...r[t][e]||{type:"more_info"},[i]:a}},this._set("entities",r)}_onDragStart(t,e){this._dragIdx=t,e.dataTransfer.effectAllowed="move"}_onDragOver(t,e){e.preventDefault(),this._dragOver=t}_onDrop(t,e){if(e.preventDefault(),this._dragIdx===null||this._dragIdx===t){this._dragIdx=null;return}let i=[...this._config.entities],[a]=i.splice(this._dragIdx,1);i.splice(t,0,a),this._dragIdx=null,this._set("entities",i)}_renderActionField(t,e,i){let r=((this._config.entities||[])[t]||{})[e]||{type:"more_info"},n=r.type||"more_info",l=["toggle","turn_on","turn_off","more_info"].includes(n),c=n==="call_service";return o`
      <div class="action-block">
        <div class="field-label">${i}</div>
        <select class="field-select"
          .value=${n}
          @change=${d=>this._updateEntityAction(t,e,"type",d.target.value)}>
          <option value="more_info">Apri dettagli</option>
          <option value="toggle">Toggle</option>
          <option value="turn_on">Accendi</option>
          <option value="turn_off">Spegni</option>
          <option value="call_service">Chiama servizio</option>
          <option value="navigate">Naviga</option>
          <option value="url">Apri URL</option>
        </select>
        ${l?o`
          <ha-entity-picker .hass=${this.hass} .value=${r.entity_id||""}
            label="Entità"
            @value-changed=${d=>this._updateEntityAction(t,e,"entity_id",d.detail.value)}>
          </ha-entity-picker>
        `:""}
        ${c?o`
          <ha-textfield label="Servizio" .value=${r.service||""}
            @change=${d=>this._updateEntityAction(t,e,"service",d.target.value)}>
          </ha-textfield>
        `:""}
        ${n==="navigate"?o`
          <ha-textfield label="Percorso" .value=${r.navigation_path||""}
            @change=${d=>this._updateEntityAction(t,e,"navigation_path",d.target.value)}>
          </ha-textfield>
        `:""}
        ${n==="url"?o`
          <ha-textfield label="URL" .value=${r.url_path||""}
            @change=${d=>this._updateEntityAction(t,e,"url_path",d.target.value)}>
          </ha-textfield>
        `:""}
      </div>
    `}render(){if(!this._config||!this.hass)return o``;let t=this._config;return o`
      <div class="editor">

        <!-- Base -->
        <ha-form .hass=${this.hass}
          .data=${{title:t.title||"",subtitle:t.subtitle||"",icon:t.icon||"mdi:home"}}
          .schema=${[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]}
          .computeLabel=${e=>({title:"Titolo",subtitle:"Sottotitolo",icon:"Icona"})[e.name]||e.name}
          @value-changed=${e=>{this._config={...this._config,...e.detail.value},this._fire()}}>
        </ha-form>

        <!-- Colore -->
        <div class="section-label">Colore</div>
        <div class="color-row">
          ${Ma.map(e=>o`
            <button class="swatch ${t.color===e?"selected":""}"
              style="background:${pe[e].base}" title=${e}
              @click=${()=>this._set("color",e)}></button>
          `)}
        </div>

        <!-- Visibilità -->
        <div class="section-label">Visibilità</div>
        <div class="toggles-grid">
          ${[["show_header","Header"],["show_hero","Hero"],["show_list","Lista"],["show_badge","Badge"],["show_counter","Contatore"]].map(([e,i])=>o`
            <label class="toggle-label">
              <input type="checkbox" .checked=${t[e]!==!1}
                @change=${a=>this._set(e,a.target.checked)}/>
              ${i}
            </label>
          `)}
        </div>

        <!-- Sort & Filter -->
        <div class="section-label">Ordinamento e Filtro</div>
        <div class="row-2">
          <div class="field-group">
            <div class="field-label">Ordina</div>
            <select class="field-select" .value=${t.sort||"manual"}
              @change=${e=>this._set("sort",e.target.value)}>
              <option value="manual">Manuale</option>
              <option value="alpha">Alfabetico</option>
              <option value="open_first">Aperti prima</option>
              <option value="closed_first">Chiusi prima</option>
            </select>
          </div>
          <div class="field-group">
            <div class="field-label">Filtra</div>
            <select class="field-select" .value=${t.filter||"all"}
              @change=${e=>this._set("filter",e.target.value)}>
              <option value="all">Tutti</option>
              <option value="open">Solo aperti</option>
              <option value="closed">Solo chiusi</option>
            </select>
          </div>
        </div>

        <!-- Entità -->
        <div class="section-label">Entità <span class="hint">(trascina per riordinare)</span></div>

        <div class="entities-list">
          ${(t.entities||[]).map((e,i)=>o`
            <div class="entity-editor ${this._dragOver===i?"drag-over":""}"
              draggable="true"
              @dragstart=${a=>this._onDragStart(i,a)}
              @dragover=${a=>this._onDragOver(i,a)}
              @drop=${a=>this._onDrop(i,a)}
              @dragend=${()=>{this._dragIdx=null,this._dragOver=null}}>

              <div class="entity-header">
                <span class="drag-handle">⠿</span>
                <span class="entity-title">${e.name||e.entity||"Entit\xE0 "+(i+1)}</span>
                <button class="remove-btn" @click=${()=>this._removeEntity(i)}>✕</button>
              </div>

              <ha-entity-picker .hass=${this.hass} .value=${e.entity||""}
                label="Entità"
                @value-changed=${a=>this._updateEntity(i,"entity",a.detail.value)}>
              </ha-entity-picker>

              <ha-textfield label="Nome (opzionale)" .value=${e.name||""}
                @change=${a=>this._updateEntity(i,"name",a.target.value)}>
              </ha-textfield>

              <div class="field-group">
                <div class="field-label">Tipo grafico</div>
                <select class="field-select" .value=${e.type||"auto"}
                  @change=${a=>this._updateEntity(i,"type",a.target.value)}>
                  ${us.map(a=>o`
                    <option value=${a}>${hs[a]}</option>
                  `)}
                </select>
              </div>

              <details class="actions-details">
                <summary class="actions-summary">Azioni (tap / hold / double-tap)</summary>
                ${this._renderActionField(i,"tap_action","Tap")}
                ${this._renderActionField(i,"hold_action","Hold (pressione lunga)")}
                ${this._renderActionField(i,"double_tap_action","Double tap")}
              </details>

            </div>
          `)}
        </div>

        <button class="add-button" @click=${this._addEntity}>+ Aggiungi entità</button>

      </div>
    `}static get styles(){return m`
      .editor { display:flex; flex-direction:column; gap:12px; padding:8px 0; }
      .section-label { font-size:14px; font-weight:600; color:var(--primary-text-color); margin-top:4px; }
      .hint { font-size:11px; font-weight:400; color:var(--secondary-text-color); }
      .color-row { display:flex; gap:8px; flex-wrap:wrap; }
      .swatch { width:28px; height:28px; border-radius:50%; border:2px solid transparent; cursor:pointer; padding:0; transition:transform .15s,border-color .15s; }
      .swatch:hover { transform:scale(1.12); }
      .swatch.selected { border-color:var(--primary-text-color); box-shadow:0 0 0 2px var(--card-background-color,#fff); }
      .toggles-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
      .toggle-label { display:flex; align-items:center; gap:6px; font-size:13px; color:var(--primary-text-color); cursor:pointer; }
      .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
      .field-group { display:flex; flex-direction:column; gap:4px; }
      .field-label { font-size:12px; color:var(--secondary-text-color); }
      .field-select { padding:8px; border-radius:8px; border:1px solid var(--divider-color,#e5e7eb); background:var(--card-background-color,#fff); font-size:13px; color:var(--primary-text-color); font-family:inherit; cursor:pointer; }
      .entities-list { display:flex; flex-direction:column; gap:10px; }
      .entity-editor { border:1.5px solid var(--divider-color,#e5e7eb); border-radius:16px; padding:12px; display:flex; flex-direction:column; gap:10px; cursor:grab; }
      .entity-editor.drag-over { border-color:var(--primary-color,#3d9cf0); box-shadow:0 0 0 2px var(--primary-color,#3d9cf0); }
      .entity-header { display:flex; align-items:center; gap:8px; }
      .drag-handle { font-size:18px; color:var(--secondary-text-color); }
      .entity-title { flex:1; font-size:13px; font-weight:600; color:var(--primary-text-color); }
      .remove-btn { background:none; border:none; cursor:pointer; font-size:14px; color:var(--secondary-text-color); padding:2px 6px; border-radius:6px; }
      .remove-btn:hover { background:#fee8e8; color:#dc2626; }
      .actions-details { border-radius:8px; overflow:hidden; }
      .actions-summary { font-size:12px; color:var(--secondary-text-color); cursor:pointer; padding:4px 0; }
      .action-block { display:flex; flex-direction:column; gap:6px; padding:8px; background:var(--secondary-background-color,#f4f4f4); border-radius:8px; }
      .add-button { padding:12px; border-radius:12px; border:1.5px dashed var(--divider-color,#ccc); background:transparent; cursor:pointer; font-size:13px; color:var(--primary-text-color); font-family:inherit; }
      .add-button:hover { border-color:var(--primary-color,#3d9cf0); color:var(--primary-color,#3d9cf0); }
    `}};$("pastel-openings-card-editor",gi);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-openings-card",name:"Pastel Openings",description:"Card universale per porte, finestre, cancelli, basculanti \u2014 illustrazioni animate, filtri, ordinamento, azioni complete. Parte della suite Pastel.",preview:!0});var ue={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Aa=Object.keys(ue),it={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function Cs(s){return ue[s]||ue.amber}function zs(s,t,e=50){let i=t?it.light:s.light,a=t?it.base:s.base,r=t?"#fef2f2":"#fffdf5",n=t?it.text:s.text,l=Math.round(e*1.36);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="24" height="48" rx="3" fill="${i}" stroke="${a}" stroke-width="1.5"/>
      <rect x="14" y="10" width="16" height="40" rx="1.5" fill="${r}" opacity="0.7"/>
      <circle cx="27" cy="30" r="2" fill="${n}"/>
    </svg>`}var fi=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Porte e Finestre",subtitle:"Piano terra",icon:"mdi:home",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Porte e Finestre",subtitle:t.subtitle||"",icon:t.icon||"mdi:home",color:Aa.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-doors-windows-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let a=this.hass.states[i],r=a&&a.attributes.device_class;return r==="window"?e?"mdi:window-open-variant":"mdi:window-closed-variant":r==="garage_door"?e?"mdi:garage-open":"mdi:garage":e?"mdi:door-open":"mdi:door-closed"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Cs(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),a=i.filter(c=>this.hass.states[c].state==="on").length,r=i.length,n=r?Math.round(a/r*100):0,l=a>0;return o`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-text:${t.text};">

        <div class="header">
          <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
        </div>

        <div class="panel summary">
          <div class="summary-row">
            ${P(zs(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?it.base:t.base}">
                ${a}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${l?"aperti":"tutto chiuso"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?it.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((c,d)=>{let p=typeof c=="string"?c:c.entity,u=this.hass.states[p];if(!u)return o`<div class="row missing">Entità non trovata: ${p}</div>`;let g=u.state==="on",f=this._entityLabel(c),v=this._entityIcon(c,g);return o`
              <div
                class="row ${g?"alarm":""}"
                @click=${h=>this._showMoreInfo(p,h)}
              >
                <ha-icon icon=${v} style="color:${g?it.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${g?"row-label-alarm":"row-label-off"}">${f}</span>
                <span class="row-status ${g?"badge-alarm":""}" style="color:${g?it.base:"var(--secondary-text-color)"}">
                  ${g?"Aperto":"Chiuso"}
                </span>
              </div>
              ${d<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return m`
      :host { display: block; }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px 6px;
      }
      .header ha-icon { --mdc-icon-size: 22px; }
      .title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 12px; color: var(--c-text); margin-top: 1px; }
      .panel { background: var(--c-bg); border-radius: 20px; margin: 4px; }
      .summary { padding: 12px 16px; }
      .summary-row { display: flex; align-items: center; justify-content: space-between; }
      .count-block { flex: 1; text-align: right; min-width: 0; }
      .count { font-size: 44px; font-weight: 300; line-height: 1; letter-spacing: -1px; }
      .count-total { font-size: 20px; }
      .count-label { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
      .progress-track {
        margin-top: 12px; height: 6px; border-radius: 3px;
        background: var(--c-light); overflow: hidden;
      }
      .progress-fill { height: 100%; transition: width 0.3s ease; }
      .rows { padding: 6px; }
      .row {
        display: flex; align-items: center; gap: 12px;
        padding: 13px 12px; border-radius: 16px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
      }
      .row.alarm { background: rgba(220,38,38,0.08); }
      .row:active { filter: brightness(0.97); }
      .row ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }
      .row-label { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .row-label-off { opacity: 0.65; }
      .row-label-alarm { font-weight: 600; color: #991b1b; }
      .row-status { font-size: 13px; font-weight: 600; }
      .badge-alarm {
        background: #fecaca; padding: 3px 9px; border-radius: 8px; font-weight: 700;
      }
      .row.missing { color: var(--error-color, red); font-size: 12px; padding: 10px 14px; }
      .divider { height: 0.5px; background: rgba(0,0,0,0.08); margin: 0 14px; }
    `}};$("pastel-doors-windows-card",fi);var bi=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:home",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${t}
          .computeLabel=${i=>this._labelFor(i.name)}
          @value-changed=${i=>{this._config={...this._config,...i.detail.value},this._fireChanged()}}
        ></ha-form>

        <div class="color-section">
          <div class="color-label">Colore della card</div>
          <div class="color-row">
            ${Aa.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${ue[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: una porta/finestra aperta è sempre evidenziata in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori porte/finestre",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return m`
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .color-label { font-size: 14px; color: var(--primary-text-color); margin-bottom: 8px; font-weight: 500; }
      .color-row { display: flex; gap: 10px; flex-wrap: wrap; }
      .swatch {
        width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover { transform: scale(1.1); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 10px; }
    `}};$("pastel-doors-windows-card-editor",bi);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-doors-windows-card",name:"Pastel Doors & Windows",description:"Card per sensori porte/finestre con stile pastello, conteggio aperti e popup dettagli al tap.",preview:!0});var he={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Ta=Object.keys(he);function Es(s){return he[s]||he.amber}function Ms(s,t,e=50){let i=s.light,a=s.base,r="#ffffff",n=s.text,l=Math.round(e*1.36);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="20" r="13" fill="${i}" stroke="${a}" stroke-width="1.5"/>
      <circle cx="22" cy="20" r="6" fill="${r}" opacity="0.8"/>
      <circle cx="22" cy="20" r="2.5" fill="${n}"/>
      <path d="M14 42 Q22 34 30 42 L30 50 Q22 46 14 50 Z" fill="${i}" stroke="${a}" stroke-width="1.5"/>
    </svg>`}var vi=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Movimento e Presenza",subtitle:"Piano terra",icon:"mdi:motion-sensor",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Movimento e Presenza",subtitle:t.subtitle||"",icon:t.icon||"mdi:motion-sensor",color:Ta.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-motion-presence-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let a=this.hass.states[i];return(a&&a.attributes.device_class)==="occupancy"?e?"mdi:account":"mdi:account-outline":e?"mdi:motion-sensor":"mdi:motion-sensor-off"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Es(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),a=i.filter(c=>this.hass.states[c].state==="on").length,r=i.length,n=r?Math.round(a/r*100):0,l=a>0;return o`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-text:${t.text};">

        <div class="header">
          <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
        </div>

        <div class="panel summary">
          <div class="summary-row">
            ${P(Ms(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${t.base}">
                ${a}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${l?"attivi":"tutto libero"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((c,d)=>{let p=typeof c=="string"?c:c.entity,u=this.hass.states[p];if(!u)return o`<div class="row missing">Entità non trovata: ${p}</div>`;let g=u.state==="on",f=this._entityLabel(c),v=this._entityIcon(c,g);return o`
              <div
                class="row ${g?"active":""}"
                @click=${h=>this._showMoreInfo(p,h)}
              >
                <ha-icon icon=${v} style="color:${g?t.text:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${g?"row-label-active":"row-label-off"}">${f}</span>
                <span class="row-status ${g?"badge-active":""}" style="color:${g?t.text:"var(--secondary-text-color)"}">
                  ${g?"Rilevato":"Libero"}
                </span>
              </div>
              ${d<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return m`
      :host { display: block; }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px 6px;
      }
      .header ha-icon { --mdc-icon-size: 22px; }
      .title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 12px; color: var(--c-text); margin-top: 1px; }
      .panel { background: var(--c-bg); border-radius: 20px; margin: 4px; }
      .summary { padding: 12px 16px; }
      .summary-row { display: flex; align-items: center; justify-content: space-between; }
      .count-block { flex: 1; text-align: right; min-width: 0; }
      .count { font-size: 44px; font-weight: 300; line-height: 1; letter-spacing: -1px; }
      .count-total { font-size: 20px; }
      .count-label { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
      .progress-track {
        margin-top: 12px; height: 6px; border-radius: 3px;
        background: var(--c-light); overflow: hidden;
      }
      .progress-fill { height: 100%; transition: width 0.3s ease; }
      .rows { padding: 6px; }
      .row {
        display: flex; align-items: center; gap: 12px;
        padding: 13px 12px; border-radius: 16px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
      }
      .row.active { background: var(--c-bg); filter: brightness(0.96); }
      .row:active { filter: brightness(0.92); }
      .row ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }
      .row-label { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .row-label-off { opacity: 0.65; }
      .row-label-active { font-weight: 600; color: var(--c-text); }
      .row-status { font-size: 13px; font-weight: 600; }
      .badge-active {
        background: var(--c-light); padding: 3px 9px; border-radius: 8px; font-weight: 700;
      }
      .row.missing { color: var(--error-color, red); font-size: 12px; padding: 10px 14px; }
      .divider { height: 0.5px; background: rgba(0,0,0,0.08); margin: 0 14px; }
    `}};$("pastel-motion-presence-card",vi);var yi=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:motion-sensor",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${t}
          .computeLabel=${i=>this._labelFor(i.name)}
          @value-changed=${i=>{this._config={...this._config,...i.detail.value},this._fireChanged()}}
        ></ha-form>

        <div class="color-section">
          <div class="color-label">Colore della card</div>
          <div class="color-row">
            ${Ta.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${he[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">A differenza delle card di sicurezza, qui lo stato "Rilevato" usa il colore scelto sopra (il movimento non è considerato un allarme).</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori di movimento/presenza",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return m`
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .color-label { font-size: 14px; color: var(--primary-text-color); margin-bottom: 8px; font-weight: 500; }
      .color-row { display: flex; gap: 10px; flex-wrap: wrap; }
      .swatch {
        width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover { transform: scale(1.1); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 10px; }
    `}};$("pastel-motion-presence-card-editor",yi);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-motion-presence-card",name:"Pastel Motion & Presence",description:"Card per sensori di movimento/presenza con stile pastello, conteggio attivi e popup dettagli al tap.",preview:!0});var me={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Pa=Object.keys(me),at={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function As(s){return me[s]||me.amber}function Ts(s,t,e=50){let i=t?at.light:s.light,a=t?at.base:s.base,r=t?"#fef2f2":"#ffffff",n=t?at.text:s.text,l=Math.round(e*1.2);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4 C22 4 8 24 8 34 C8 42.5 14.3 49 22 49 C29.7 49 36 42.5 36 34 C36 24 22 4 22 4Z"
            fill="${i}" stroke="${a}" stroke-width="1.5"/>
      <ellipse cx="18" cy="32" rx="5" ry="7" fill="${r}" opacity="0.6"/>
      <circle cx="22" cy="36" r="2.5" fill="${n}"/>
    </svg>`}var xi=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Perdite Acqua",subtitle:"Zona Notte",icon:"mdi:water-alert",color:"blue",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Perdite Acqua",subtitle:t.subtitle||"",icon:t.icon||"mdi:water-alert",color:Pa.includes(t.color)?t.color:"blue",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-water-leak-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let a=this.hass.states[i],r=a&&a.attributes.icon;return r||(e?"mdi:water-alert":"mdi:water-check")}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=As(this.config.color),e=this._entityIds(),i=e.filter(d=>this.hass.states[d]),a=i.filter(d=>this.hass.states[d].state==="on").length,r=i.length,n=r?Math.round(a/r*100):0,l=a>0,c=e.some(d=>!this.hass.states[d]||["unknown","unavailable"].includes(this.hass.states[d].state));return o`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-text:${t.text};">

        <div class="header">
          <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
        </div>

        <div class="panel summary">
          <div class="summary-row">
            ${P(Ts(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?at.base:t.base}">
                ${a}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${l?"perdite rilevate":c?"dati mancanti":"tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?at.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((d,p)=>{let u=typeof d=="string"?d:d.entity,g=this.hass.states[u];if(!g)return o`<div class="row missing">Entità non trovata: ${u}</div>`;let f=g.state==="on",v=this._entityLabel(d),h=this._entityIcon(d,f);return o`
              <div
                class="row ${f?"alarm":""}"
                @click=${_=>this._showMoreInfo(u,_)}
              >
                <ha-icon icon=${h} style="color:${f?at.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${f?"row-label-alarm":"row-label-off"}">${v}</span>
                <span class="row-status ${f?"badge-alarm":""}" style="color:${f?at.base:"var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(g.state)?"Non disponibile":f?"Perdita":"OK"}
                </span>
              </div>
              ${p<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return m`
      :host { display: block; }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px 6px;
      }
      .header ha-icon { --mdc-icon-size: 22px; }
      .title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 12px; color: var(--c-text); margin-top: 1px; }
      .panel { background: var(--c-bg); border-radius: 20px; margin: 4px; }
      .summary { padding: 12px 16px; }
      .summary-row { display: flex; align-items: center; justify-content: space-between; }
      .count-block { flex: 1; text-align: right; min-width: 0; }
      .count { font-size: 44px; font-weight: 300; line-height: 1; letter-spacing: -1px; }
      .count-total { font-size: 20px; }
      .count-label { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
      .progress-track {
        margin-top: 12px; height: 6px; border-radius: 3px;
        background: var(--c-light); overflow: hidden;
      }
      .progress-fill { height: 100%; transition: width 0.3s ease; }
      .rows { padding: 6px; }
      .row {
        display: flex; align-items: center; gap: 12px;
        padding: 13px 12px; border-radius: 16px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
      }
      .row.alarm { background: rgba(220,38,38,0.08); }
      .row:active { filter: brightness(0.97); }
      .row ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }
      .row-label { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .row-label-off { opacity: 0.65; }
      .row-label-alarm { font-weight: 600; color: #991b1b; }
      .row-status { font-size: 13px; font-weight: 600; }
      .badge-alarm {
        background: #fecaca; padding: 3px 9px; border-radius: 8px; font-weight: 700;
      }
      .row.missing { color: var(--error-color, red); font-size: 12px; padding: 10px 14px; }
      .divider { height: 0.5px; background: rgba(0,0,0,0.08); margin: 0 14px; }
    `}};$("pastel-water-leak-card",xi);var _i=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:water-alert",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${t}
          .computeLabel=${i=>this._labelFor(i.name)}
          @value-changed=${i=>{this._config={...this._config,...i.detail.value},this._fireChanged()}}
        ></ha-form>

        <div class="color-section">
          <div class="color-label">Colore della card</div>
          <div class="color-row">
            ${Pa.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${me[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: una perdita rilevata è sempre evidenziata in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori perdita acqua",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return m`
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .color-label { font-size: 14px; color: var(--primary-text-color); margin-bottom: 8px; font-weight: 500; }
      .color-row { display: flex; gap: 10px; flex-wrap: wrap; }
      .swatch {
        width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover { transform: scale(1.1); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 10px; }
    `}};$("pastel-water-leak-card-editor",_i);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-water-leak-card",name:"Pastel Water Leak",description:"Card per sensori di perdita acqua con stile pastello, conteggio perdite e popup dettagli al tap.",preview:!0});var ge={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Na=Object.keys(ge),st={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function Ps(s){return ge[s]||ge.amber}function Ns(s,t,e=50){let i=t?st.light:s.light,a=t?st.base:s.base,r=t?"#fef2f2":"#fffdf5",n=t?st.text:s.text,l=Math.round(e*1);return`
    <svg width="${e}" height="${l}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="22" fill="${i}" stroke="${a}" stroke-width="1.5"/>
      <circle cx="25" cy="25" r="14" fill="${r}" opacity="0.7"/>
      <circle cx="25" cy="25" r="4" fill="${n}"/>
      <path d="M25 10 L25 16 M40 25 L34 25 M25 40 L25 34 M10 25 L16 25" stroke="${a}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    </svg>`}var wi=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Fumo e CO",subtitle:"Salotto + Quadro Ovest",icon:"mdi:smoke-detector",color:"purple",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Fumo e CO",subtitle:t.subtitle||"",icon:t.icon||"mdi:smoke-detector",color:Na.includes(t.color)?t.color:"purple",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-smoke-co-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let a=this.hass.states[i],r=a&&a.attributes.device_class;return r==="carbon_monoxide"||r==="co"?"mdi:molecule-co2":e?"mdi:smoke-detector-variant-alert":"mdi:smoke-detector-variant"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Ps(this.config.color),e=this._entityIds(),i=e.filter(d=>this.hass.states[d]),a=i.filter(d=>this.hass.states[d].state==="on").length,r=i.length,n=r?Math.round(a/r*100):0,l=a>0,c=e.some(d=>!this.hass.states[d]||["unknown","unavailable"].includes(this.hass.states[d].state));return o`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-text:${t.text};">

        <div class="header">
          <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
        </div>

        <div class="panel summary">
          <div class="summary-row">
            ${P(Ns(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?st.base:t.base}">
                ${a}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${l?"in allarme":c?"dati mancanti":"tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?st.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((d,p)=>{let u=typeof d=="string"?d:d.entity,g=this.hass.states[u];if(!g)return o`<div class="row missing">Entità non trovata: ${u}</div>`;let f=g.state==="on",v=this._entityLabel(d),h=this._entityIcon(d,f);return o`
              <div
                class="row ${f?"alarm":""}"
                @click=${_=>this._showMoreInfo(u,_)}
              >
                <ha-icon icon=${h} style="color:${f?st.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${f?"row-label-alarm":"row-label-off"}">${v}</span>
                <span class="row-status ${f?"badge-alarm":""}" style="color:${f?st.base:"var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(g.state)?"Non disponibile":f?"Allarme":"OK"}
                </span>
              </div>
              ${p<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return m`
      :host { display: block; }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px 6px;
      }
      .header ha-icon { --mdc-icon-size: 22px; }
      .title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 12px; color: var(--c-text); margin-top: 1px; }
      .panel { background: var(--c-bg); border-radius: 20px; margin: 4px; }
      .summary { padding: 12px 16px; }
      .summary-row { display: flex; align-items: center; justify-content: space-between; }
      .count-block { flex: 1; text-align: right; min-width: 0; }
      .count { font-size: 44px; font-weight: 300; line-height: 1; letter-spacing: -1px; }
      .count-total { font-size: 20px; }
      .count-label { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
      .progress-track {
        margin-top: 12px; height: 6px; border-radius: 3px;
        background: var(--c-light); overflow: hidden;
      }
      .progress-fill { height: 100%; transition: width 0.3s ease; }
      .rows { padding: 6px; }
      .row {
        display: flex; align-items: center; gap: 12px;
        padding: 13px 12px; border-radius: 16px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
      }
      .row.alarm { background: rgba(220,38,38,0.08); }
      .row:active { filter: brightness(0.97); }
      .row ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }
      .row-label { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .row-label-off { opacity: 0.65; }
      .row-label-alarm { font-weight: 600; color: #991b1b; }
      .row-status { font-size: 13px; font-weight: 600; }
      .badge-alarm {
        background: #fecaca; padding: 3px 9px; border-radius: 8px; font-weight: 700;
      }
      .row.missing { color: var(--error-color, red); font-size: 12px; padding: 10px 14px; }
      .divider { height: 0.5px; background: rgba(0,0,0,0.08); margin: 0 14px; }
    `}};$("pastel-smoke-co-card",wi);var $i=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:smoke-detector",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${t}
          .computeLabel=${i=>this._labelFor(i.name)}
          @value-changed=${i=>{this._config={...this._config,...i.detail.value},this._fireChanged()}}
        ></ha-form>

        <div class="color-section">
          <div class="color-label">Colore della card</div>
          <div class="color-row">
            ${Na.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${ge[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: un sensore in allarme è sempre evidenziato in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori fumo/CO",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return m`
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .color-label { font-size: 14px; color: var(--primary-text-color); margin-bottom: 8px; font-weight: 500; }
      .color-row { display: flex; gap: 10px; flex-wrap: wrap; }
      .swatch {
        width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover { transform: scale(1.1); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 10px; }
    `}};$("pastel-smoke-co-card-editor",$i);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-smoke-co-card",name:"Pastel Smoke & CO",description:"Card per sensori fumo/CO con stile pastello, conteggio allarmi e popup dettagli al tap.",preview:!0});var Ia=[["mdi:thermometer","Termometro"],["mdi:home","Casa"],["mdi:sofa","Soggiorno"],["mdi:bed-double","Camera"],["mdi:door","Ingresso"],["mdi:shower","Bagno"],["mdi:desk","Studio"],["mdi:flower","Esterno"]],ut=s=>["\xB0C","\xB0F","K"].includes(s)?s:null;function Is(s,t,e){if(s===null||!t||!e)return null;let i=t==="\xB0F"?(s-32)*5/9:t==="K"?s-273.15:s;return e==="\xB0F"?i*9/5+32:e==="K"?i+273.15:i}function La(s){return!!s?.entity_id?.startsWith("sensor.")&&s.attributes?.device_class==="humidity"}function Ra(s,t){let e=ut(s?.config?.unit_system?.temperature)||"\xB0C",i=ut(t.unit)||ut((t.rooms||[]).map(c=>s?.states?.[c.temp_entity]?.attributes?.unit_of_measurement).find(ut))||e,a=(t.rooms||[]).map(c=>{let d=s?.states?.[c.temp_entity],p=d?.attributes?.unit_of_measurement,u=Is(k(s,c.temp_entity),p?ut(p):i,i),g=k(s,c.hum_entity),f=g!==null&&g>=0&&g<=100?g:null;return{...c,name:c.name||d?.attributes?.friendly_name||"Ambiente",value:u,humidity:f,sourceUnit:p||i,alert:u!==null&&W(t.alert_temp)!==null&&u>=Number(t.alert_temp),humidityAlert:f!==null&&W(t.alert_hum)!==null&&f>=Number(t.alert_hum)}}),r=a.map(c=>c.value).filter(c=>c!==null),n=a.map(c=>c.humidity).filter(c=>c!==null),l=r.length?r.reduce((c,d)=>c+d,0)/r.length:null;return{unit:i,rooms:a,average:l,humidity:n.length?n.reduce((c,d)=>c+d,0)/n.length:null,min:r.length?Math.min(...r):null,max:r.length?Math.max(...r):null,valid:r.length,total:a.length,alert:a.some(c=>c.alert||c.humidityAlert)}}function W(s){return s==null||String(s).trim()===""?null:Number(s)}function Oa(s,t){let e=W(t.temp_min),i=W(t.temp_max);return s!==null&&Number.isFinite(e)&&Number.isFinite(i)&&i>e?Math.min(100,Math.max(0,(s-e)/(i-e)*100)):null}function Fa(s){if(s.rooms!==void 0&&!Array.isArray(s.rooms))throw Error("rooms deve essere una lista di ambienti.");for(let t of s.rooms||[]){if(!t||typeof t!="object"||Array.isArray(t))throw Error("Ambiente non valido.");for(let e of["temp_entity","hum_entity"])if(t[e]!==void 0&&typeof t[e]!="string")throw Error("Scegli un sensore valido.")}for(let t of["temp_min","temp_max","alert_temp","alert_hum"])if(W(s[t])!==null&&!Number.isFinite(W(s[t])))throw Error("Inserisci valori numerici validi.");if(W(s.temp_min)!==null&&W(s.temp_max)!==null&&Number(s.temp_max)<=Number(s.temp_min))throw Error("Il massimo della scala deve superare il minimo.");if(s.unit&&!ut(s.unit))throw Error("Scegli \xB0C, \xB0F oppure K.")}async function qa(s,t){if(!s?.callApi||!t)return null;try{let e=new Date(Date.now()-72e5).toISOString(),a=((await s.callApi("GET",`history/period/${e}?filter_entity_id=${encodeURIComponent(t)}&minimal_response=true&no_attributes=true`))?.[0]||[]).filter(r=>r.state!==null&&String(r.state??"").trim()!==""&&Number.isFinite(Number(r.state)));return a.length<2?null:Number(a[a.length-1].state)-Number(a[0].state)}catch{return null}}var fe=class extends y{static get properties(){return{...super.properties,_trends:{}}}static getConfigElement(){return document.createElement("pastel-temp-card-editor")}static getStubConfig(){return{title:"Temperature",subtitle:"Comfort degli ambienti",color:"blue",show_trend:!1,rooms:[{name:"Soggiorno",icon:"mdi:sofa",temp_entity:"",hum_entity:""}]}}static get styles(){return[super.styles,m`
  .hero .reading{font-size:38px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.reading small{font-size:17px;margin-left:4px;letter-spacing:0}.hero .right{flex:1}.hero .caption{line-height:1.6}.humidity-summary{display:inline-flex;align-items:center;gap:5px;font-size:12px;margin-top:10px}.humidity-summary ha-icon{--mdc-icon-size:16px}.room{padding:16px 0;border-top:1px solid var(--divider-color,#e8ebed)}.room:last-of-type{padding-bottom:0}.room-top{display:flex;align-items:center;gap:12px}.room-icon{width:38px;height:38px;border-radius:12px;background:var(--p-tint);color:var(--p-accent);display:grid;place-items:center;flex-shrink:0}.room-icon ha-icon{--mdc-icon-size:21px}.room-info{flex:1;min-width:0}.room-name{display:block;border:0;padding:0;background:none;color:var(--p-ink);text-align:left;min-height:44px;width:100%;overflow-wrap:anywhere}.room-value{font-size:22px;font-weight:550;font-variant-numeric:tabular-nums;color:var(--p-accent);white-space:nowrap}.room-value small{font-size:12px;margin-left:3px}.room-bottom{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0 0 50px}.humidity{padding:5px 9px;min-height:32px;display:inline-flex;align-items:center;gap:4px;font-size:11px}.humidity ha-icon{--mdc-icon-size:14px}.room-status,.trend{font-size:11px;color:var(--p-muted);line-height:1.7}.alert{color:var(--error-color,#963f3b)}.scale{height:5px;background:var(--p-tint);border-radius:4px;margin:10px 0 0 50px;overflow:hidden}.scale span{display:block;height:100%;background:var(--p-accent);border-radius:4px}.metrics{margin-bottom:16px}.metric small{display:block;margin-bottom:5px}.metric .unit{margin-left:3px}.foot{line-height:1.7}.pill{flex-shrink:0}
  .rooms{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.room{border:1px solid var(--divider-color,#e8ebed);border-radius:16px;padding:14px;min-width:0}.room:last-of-type{padding-bottom:14px}.room-top{flex-wrap:wrap;gap:10px}.room-info{flex-basis:calc(100% - 48px)}.room-name{font-size:13px;line-height:1.5}.room-value{width:100%;font-size:26px;white-space:normal;overflow-wrap:anywhere}.room-bottom{margin:10px 0 0}.scale{margin:10px 0 0}.humidity{min-height:44px}
  @media(max-width:340px){ha-card{padding:16px}.hero{padding:16px}.hero svg{width:76px;height:76px}.hero .reading{font-size:30px}.room-value{font-size:19px}header{gap:9px}.pill{font-size:10px;padding:5px 8px}}
 `]}setConfig(t){Fa(t),this._trendEpoch=(this._trendEpoch||0)+1,this._lastFetch=0,this._fetching=!1,this._trends={},super.setConfig(t)}appearance(t){let e={indigo:"lavender",cyan:"blue"}[t.color]||t.color;return[this.palette(e||"blue"),...Object.entries({background_color:"--p-surface",tint_color:"--p-tint",accent_color:"--p-accent",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([i])=>t[i]).map(([i,a])=>`${a}:${t[i]}`)].join(";")}updated(t){(t.has("hass")||t.has("config"))&&this.refreshTrends()}disconnectedCallback(){this._trendEpoch=(this._trendEpoch||0)+1,this._fetching=!1,this._lastFetch=0,this._trends={},super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.refreshTrends()}async refreshTrends(){if(!this.isConnected||!this.hass||!this.config||this.config.show_trend===!1||this._fetching||Date.now()-(this._lastFetch||0)<3e5)return;this._fetching=!0;let t=this._trendEpoch,e=this.hass;this._lastFetch=Date.now();let i=[...new Set((this.config.rooms||[]).map(r=>r.temp_entity).filter(Boolean))],a=await Promise.all(i.map(async r=>[r,await qa(e,r)]));t===this._trendEpoch&&(this._fetching=!1,this._trends=Object.fromEntries(a))}number(t,e=1){return t===null?"\u2014":new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:e}).format(t)}trend(t,e){let i=this._trends?.[t.temp_entity];if(i==null)return"";let a=i*(t.sourceUnit==="\xB0F"?5/9:1)*(e==="\xB0F"?9/5:1);return Math.abs(a)<.1?"Stabile \xB7 2 h":`${a>0?"\u2191 +":"\u2193 "}${this.number(a)}${e} \xB7 2 h`}render(){if(!this.config||!this.hass)return o``;let t=this.config,e=Ra(this.hass,t),i=e.valid<e.total,a=e.total?e.valid?e.alert?"Soglia superata":i?"Dati parziali":`${e.valid} ${e.valid===1?"ambiente":"ambienti"}`:"Non disponibile":"Da configurare";return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:thermometer"}></ha-icon></div><div class="heading"><h2>${t.title||"Temperature"}</h2><div class="subtitle">${t.subtitle??"Comfort degli ambienti"}</div></div><span class=${e.alert?"pill alert":"pill"} role="status">${a}</span></header>
 <div class="hero">${C("temperature")}<div class="right"><div class="reading" aria-live="polite">${this.number(e.average)}<small>${e.unit}</small></div><div class="caption">${t.summary_label||(e.total===1?"Temperatura ambiente":"Temperatura media")}</div>${e.rooms.some(r=>r.hum_entity)?o`<div class="humidity-summary"><ha-icon icon="mdi:water-percent"></ha-icon>${this.number(e.humidity,0)}% umidità</div>`:""}</div></div>
 ${e.total>1&&t.show_extremes!==!1?o`<div class="metrics"><div class="metric"><small>Minima rilevata</small><strong>${this.number(e.min)}<span class="unit">${e.unit}</span></strong></div><div class="metric"><small>Massima rilevata</small><strong>${this.number(e.max)}<span class="unit">${e.unit}</span></strong></div></div>`:""}
 <div class="rooms" aria-live="polite">${e.rooms.map(r=>{let n=Oa(r.value,t),l=t.show_trend!==!1&&r.value!==null?this.trend(r,e.unit):"";return o`<section class="room" style=${r.color?this.palette(r.color):""}><div class="room-top"><div class="room-icon"><ha-icon icon=${r.icon||"mdi:thermometer"}></ha-icon></div><div class="room-info"><button class="room-name" aria-label=${`Dettagli temperatura ${r.name}`} ?disabled=${!r.temp_entity} @click=${()=>this.info(r.temp_entity)}>${r.name}</button></div><div class=${r.alert?"room-value alert":"room-value"}>${this.number(r.value)}<small>${e.unit}</small></div></div><div class="room-bottom">${r.hum_entity?o`<button class=${r.humidityAlert?"humidity alert":"humidity"} aria-label=${`Dettagli umidit\xE0 ${r.name}`} @click=${()=>this.info(r.hum_entity)}><ha-icon icon="mdi:water-percent"></ha-icon>${this.number(r.humidity,0)}%</button>`:""}${r.value===null?o`<span class="room-status">${r.temp_entity?"Temperatura non disponibile":"Sensore da associare"}</span>`:""}${r.hum_entity&&r.humidity===null?o`<span class="room-status">Umidità non disponibile</span>`:""}${r.alert||r.humidityAlert?o`<span class="room-status alert">Soglia superata</span>`:""}${l?o`<span class="trend">${l}</span>`:""}</div>${n!==null?o`<div class="scale" role="meter" aria-label=${`Temperatura ${r.name}`} aria-valuemin=${t.temp_min} aria-valuemax=${t.temp_max} aria-valuenow=${Math.max(Number(t.temp_min),Math.min(Number(t.temp_max),r.value))} aria-valuetext=${`${this.number(r.value)} ${e.unit}`}><span style=${`width:${n}%`}></span></div>`:""}</section>`})}</div>
 ${i&&e.valid?o`<div class="foot">Media su ${e.valid} di ${e.total} ambienti: i sensori non disponibili sono esclusi.</div>`:""}${e.total?"":o`<div class="empty">Aggiungi gli ambienti e scegli i sensori nell’editor.</div>`}</ha-card>`}};var be=class extends S{paletteSelect(t,e,i,a=!1){let r={green:"mint",purple:"lavender",orange:"peach",indigo:"lavender",cyan:"blue"}[e]||e;return super.paletteSelect(t,r,i,a)}updateRoom(t,e){this.emit({rooms:(this.config.rooms||[]).map((i,a)=>t===a?{...i,...e}:i)})}moveRoom(t,e){let i=[...this.config.rooms||[]],a=t+e;a<0||a>=i.length||([i[t],i[a]]=[i[a],i[t]],this.emit({rooms:i}))}numberField(t,e){return o`<label>${t}<input aria-label=${t} type="number" step="any" .value=${String(this.config[e]??"")} @change=${i=>this.emit({[e]:i.target.value===""?void 0:Number(i.target.value)})}></label>`}check(t,e,i=!0){return o`<label class="check"><input type="checkbox" aria-label=${t} .checked=${this.config[e]??i} @change=${a=>this.emit({[e]:a.target.checked})}>${t}</label>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>
 <div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>
 ${this.paletteSelect("Colore card",t.color||"blue",e=>this.emit({color:e}))}
 <h3>Ambienti (${t.rooms?.length||0})</h3><p class="hint">Aggiungi un riquadro per ogni ambiente. Scegli il sensore di temperatura; l’umidità è facoltativa.</p>
 ${(t.rooms||[]).map((e,i)=>o`<section class="button-editor" aria-label=${`Configura ambiente ${i+1}`}><div class="button-title"><ha-icon icon=${e.icon||"mdi:thermometer"}></ha-icon>${e.name||`Ambiente ${i+1}`}</div>
 ${this.text("Nome ambiente",e.name,a=>this.updateRoom(i,{name:a}))}
 ${this.entity("Sensore temperatura",e.temp_entity,a=>this.updateRoom(i,{temp_entity:a}),Ht,"Cerca un sensore di temperatura")}
 ${this.entity("Sensore umidit\xE0 (facoltativo)",e.hum_entity,a=>this.updateRoom(i,{hum_entity:a}),La,"Cerca un sensore di umidit\xE0")}
 <details><summary>Icona ambiente</summary><div class="icon-options">${Ia.map(([a,r])=>o`<button aria-label=${`Icona ${r}`} aria-pressed=${String((e.icon||"mdi:thermometer")===a)} @click=${()=>this.updateRoom(i,{icon:a})}><ha-icon icon=${a}></ha-icon><span>${r}</span></button>`)}</div>${this.text("Icona personalizzata (mdi:...)",e.icon,a=>this.updateRoom(i,{icon:a}))}</details>
 ${this.paletteSelect("Colore ambiente",e.color||"",a=>this.updateRoom(i,{color:a}),!0)}
 <div class="tools"><button aria-label="Sposta ambiente prima" ?disabled=${i===0} @click=${()=>this.moveRoom(i,-1)}>↑</button><button aria-label="Sposta ambiente dopo" ?disabled=${i===(t.rooms||[]).length-1} @click=${()=>this.moveRoom(i,1)}>↓</button><button @click=${()=>this.emit({rooms:t.rooms.filter((a,r)=>i!==r)})}>Rimuovi ambiente</button></div></section>`)}
 <button @click=${()=>this.emit({rooms:[...t.rooms||[],{name:"Nuovo ambiente",icon:"mdi:thermometer",temp_entity:"",hum_entity:""}]})}>Aggiungi ambiente</button>
 <details><summary>Riepilogo e altre opzioni</summary>${this.text("Etichetta riepilogo",t.summary_label,e=>this.emit({summary_label:e}))}${this.check("Mostra minima e massima","show_extremes")}${this.check("Mostra andamento delle ultime 2 ore","show_trend")}<p class="hint">Minima e massima sono le letture attuali degli ambienti, non gli estremi dello storico. L’andamento richiede lo storico Home Assistant.</p>
 <label>Unità temperatura<select aria-label="Unità temperatura" @change=${e=>this.emit({unit:e.target.value})}>${[["","Automatica dal sensore"],["\xB0C","\xB0C"],["\xB0F","\xB0F"],["K","K"]].map(([e,i])=>o`<option value=${e} ?selected=${(t.unit||"")===e}>${i}</option>`)}</select></label>
 ${this.text("Icona intestazione",t.icon,e=>this.emit({icon:e}))}
 <details><summary>Scale e soglie facoltative</summary><p class="hint">Lascia vuoti i campi per nascondere le barre e disattivare le soglie. I valori sono nell’unità visualizzata. Le barre indicano la lettura e non comandano dispositivi.</p><div class="pair">${this.numberField("Minimo scala","temp_min")}${this.numberField("Massimo scala","temp_max")}</div><div class="pair">${this.numberField("Avviso temperatura da","alert_temp")}${this.numberField("Avviso umidit\xE0 da (%)","alert_hum")}</div></details>
 <details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e valori"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],a=>this.emit({[e]:a})))}</details></details>
 </div>`}};var ve={off:"Spento",heat:"Riscalda",cool:"Raffredda",heat_cool:"Caldo / freddo",auto:"Auto",dry:"Deumidifica",fan_only:"Ventila"};function Da(s){return Array.isArray(s?.attributes?.hvac_modes)?s.attributes.hvac_modes.filter(t=>ve[t]):[]}function Ls(s){let t=Number(s?.attributes?.target_temp_step??s?.attributes?.temperature_step??.5);return Number.isFinite(t)&&t>0?t:.5}function ye(s,t){let e=s?.attributes?.temperature,i=Number(e),a=Ls(s);if(e==null||e===""||!Number.isFinite(i))return null;let r=Number(s?.attributes?.min_temp),n=Number(s?.attributes?.max_temp),l=Math.round((i+t*a)*1e3)/1e3;return Math.min(Number.isFinite(n)?n:1/0,Math.max(Number.isFinite(r)?r:-1/0,l))}var ki=s=>!!(Number(s?.attributes?.supported_features)&1)&&s?.attributes?.temperature!==null&&s?.attributes?.temperature!==void 0&&s?.attributes?.temperature!==""&&Number.isFinite(Number(s.attributes.temperature));function xe(s,t="\xB0C"){let e=Number(s);return s==null||s===""||!Number.isFinite(e)?"\u2014":`${new Intl.NumberFormat("it-IT",{maximumFractionDigits:1}).format(e)} ${t}`}var _e=class extends y{static get properties(){return{...super.properties}}static get styles(){return[super.styles,m`
  .hero{min-height:155px}.hero svg{width:104px;height:104px}.hero .reading{font-size:34px}.target-row{display:flex;align-items:center;gap:9px;border-top:1px solid var(--divider-color,#e8ebed);padding:12px 0 16px;font-size:13px}.target-row span{flex:1}.target-row strong{min-width:47px;text-align:center;font-size:16px;font-variant-numeric:tabular-nums}.target-row button{min-width:44px;font-size:20px;padding:8px}.modes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.modes button{min-width:0;overflow-wrap:anywhere}.modes button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}@media(max-width:450px){ha-card{padding:16px}.hero{padding:16px}.hero svg{width:88px;height:88px}.modes{grid-template-columns:repeat(2,minmax(0,1fr))}}
 `]}static getConfigElement(){return document.createElement("pastel-native-thermostat-card-editor")}static getStubConfig(){return{entity:"",title:"",subtitle:"",humidity_entity:"",color:"blue"}}render(){if(!this.config||!this.hass)return o``;let t=this.config,e=this.hass.states[t.entity],i=e?.attributes||{},a=this.hass.config?.unit_system?.temperature||"\xB0C",r=!!e&&!["unavailable","unknown"].includes(e.state),n=Da(e),l=ki(e),c=`${t.background_color?`--p-surface:${t.background_color};`:""}${t.tint_color?`--p-tint:${t.tint_color};`:""}${t.accent_color?`--p-accent:${t.accent_color};`:""}${t.text_color?`--p-ink:${t.text_color};`:""}${t.secondary_text_color?`--p-muted:${t.secondary_text_color};`:""}`,d=this.hass.states[t.humidity_entity];return o`<ha-card style=${this.palette(t.color||"blue")+c}>
  <header><div class="icon"><ha-icon icon=${t.icon||"mdi:thermostat"}></ha-icon></div><div class="heading"><h2>${t.title||"Termostato"}</h2><div class="subtitle">${t.subtitle||"Clima di casa"}</div></div><span class="pill">${r?U(e.state):"Non disponibile"}</span></header>
  <div class="hero">${C("thermostat")}<div class="right"><div class="reading">${xe(i.current_temperature,a)}</div><div class="caption">Temperatura ambiente</div></div></div>
  <div class="metrics"><button class="metric" @click=${()=>this.info(t.entity)}><small>Temperatura impostata</small><strong>${l?xe(i.temperature,a):"\u2014"}</strong></button>${t.humidity_entity?o`<button class="metric" @click=${()=>this.info(t.humidity_entity)}><small>Umidità</small><strong>${d&&!["unknown","unavailable"].includes(d.state)?`${d.state}${d.attributes?.unit_of_measurement||"%"}`:"\u2014"}</strong></button>`:""}</div>
  ${l?o`<div class="target-row"><span>Imposta temperatura</span><button aria-label="Abbassa temperatura" ?disabled=${!r||this.busy||ye(e,-1)===Number(i.temperature)} @click=${()=>this.setTarget(-1)}>−</button><strong>${xe(i.temperature,a)}</strong><button aria-label="Alza temperatura" ?disabled=${!r||this.busy||ye(e,1)===Number(i.temperature)} @click=${()=>this.setTarget(1)}>+</button></div>`:""}
  ${n.length?o`<div class="modes">${n.map(p=>o`<button aria-label=${ve[p]} aria-pressed=${String(e.state===p)} ?disabled=${!r||this.busy||!this.hass.services?.climate?.set_hvac_mode} @click=${()=>this.call("climate.set_hvac_mode",t.entity,{hvac_mode:p})}>${ve[p]}</button>`)}</div>`:""}
  ${t.entity?"":o`<div class="empty">Scegli un’entità climate nell’editor della card.</div>`}${this.feedback()}
 </ha-card>`}setTarget(t){let e=this.hass?.states?.[this.config?.entity],i=ye(e,t);i!==null&&ki(e)&&this.call("climate.set_temperature",this.config.entity,{temperature:i})}};var we=class extends S{render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>
  <div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>
  ${this.entity("Termostato",t.entity,e=>this.emit({entity:e}),e=>e.entity_id.startsWith("climate."),"Cerca un\u2019entit\xE0 climate")}
  ${this.entity("Sensore umidit\xE0 (opzionale)",t.humidity_entity,e=>this.emit({humidity_entity:e}),e=>e.entity_id.startsWith("sensor.")&&(e.attributes?.device_class==="humidity"||e.attributes?.unit_of_measurement==="%"),"Cerca un sensore di umidit\xE0")}
  ${this.paletteSelect("Colore card",t.color||"blue",e=>this.emit({color:e}))}
  <details><summary>Altre opzioni</summary>${this.text("Icona intestazione",t.icon,e=>this.emit({icon:e}))}<details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo riquadri"],["accent_color","Disegni e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],a=>this.emit({[e]:a})))}</details></details>
  <p class="hint">Le modalità e i limiti di temperatura vengono letti dal termostato associato.</p>
 </div>`}};var $e={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},ja=Object.keys($e);function Rs(s){return $e[s]||$e.blue}function Va(s){if(s==null||s==="unknown"||s==="unavailable")return!1;let t=Number(s);return!Number.isNaN(t)}function Os(s,t){let e=s.bg,i=s.light,a=s.light,r=s.base,n=t?.75:.35,l=t?"1.1s":"2.6s",c=t?"0.95s":"2.3s",d=t?"1.3s":"2.9s";return`
    <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="14" width="120" height="132" rx="14" fill="#f3f8fe" stroke="${i}" stroke-width="2"/>
      <rect x="32" y="26" width="50" height="10" rx="5" fill="${e}"/>
      <circle cx="100" cy="31" r="7" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <circle cx="118" cy="31" r="7" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <rect x="28" y="46" width="104" height="86" rx="8" fill="${e}"/>
      <rect x="34" y="52" width="92" height="74" rx="6" fill="${a}" opacity="0.5"/>

      <rect x="40" y="58" width="3" height="46" fill="#ffffff" opacity="0.8"/>
      <circle cx="41" cy="58" r="9" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.9"/>

      <rect x="56" y="64" width="3" height="40" fill="#ffffff" opacity="0.7"/>
      <circle cx="57" cy="64" r="8" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>

      <rect x="100" y="60" width="22" height="30" rx="2" fill="#ffffff" opacity="0.85"/>
      <rect x="105" y="64" width="22" height="22" rx="2" fill="#ffffff" opacity="0.7"/>

      <circle cx="50" cy="115" r="2" fill="${r}" opacity="${n}">
        <animate attributeName="cy" values="118;100;118" dur="${l}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${n};0;${n}" dur="${l}" repeatCount="indefinite"/>
      </circle>
      <circle cx="75" cy="120" r="1.6" fill="${r}" opacity="${n}">
        <animate attributeName="cy" values="122;104;122" dur="${c}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${n};0;${n}" dur="${c}" repeatCount="indefinite"/>
      </circle>
      <circle cx="95" cy="116" r="1.8" fill="${r}" opacity="${n}">
        <animate attributeName="cy" values="119;98;119" dur="${d}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${n};0;${n}" dur="${d}" repeatCount="indefinite"/>
      </circle>

      <circle cx="55" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <circle cx="68" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <circle cx="81" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
    </svg>`}var Si=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Lavastoviglie",subtitle:"Lavastoviglie",icon:"mdi:dishwasher",color:"blue",detection_mode:"power",power_entity:"",power_threshold:5,state_entity:""}}setConfig(t){if(!t)throw new Error("Configurazione non valida");let e=t.detection_mode==="boolean"?"boolean":"power";if(e==="power"&&!t.power_entity)throw new Error("Devi specificare power_entity quando detection_mode \xE8 'power'");if(e==="boolean"&&!t.state_entity)throw new Error("Devi specificare state_entity quando detection_mode \xE8 'boolean'");this.config={title:t.title||"Lavastoviglie",subtitle:t.subtitle||"",icon:t.icon||"mdi:dishwasher",color:ja.includes(t.color)?t.color:"blue",detection_mode:e,power_entity:t.power_entity||"",power_threshold:typeof t.power_threshold=="number"?t.power_threshold:5,state_entity:t.state_entity||""}}getCardSize(){return 4}static getConfigElement(){return document.createElement("pastel-dishwasher-card-editor")}_isOn(){if(!this.hass)return!1;if(this.config.detection_mode==="power"){let e=this.hass.states[this.config.power_entity];if(!e)return!1;let i=e.state;return Va(i)?Number(i)>this.config.power_threshold:!1}let t=this.hass.states[this.config.state_entity];return t?t.state==="on":!1}_powerWatts(){if(this.config.detection_mode!=="power")return null;let t=this.hass.states[this.config.power_entity];if(!t)return null;let e=t.state;return Va(e)?Number(e):null}_showMoreInfo(t,e){if(e&&e.stopPropagation(),!t)return;let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Rs(this.config.color),e=this._isOn(),i=this._powerWatts(),a=this.config.detection_mode==="power"?this.config.power_entity:this.config.state_entity;return o`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-text:${t.text};">

        <div class="header">
          <div class="header-left">
            <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
            <div class="header-text">
              <div class="title">${this.config.title}</div>
              <div class="subtitle">${this.config.subtitle}</div>
            </div>
          </div>
          <span class="badge" @click=${r=>this._showMoreInfo(a,r)}>
            <span class="badge-dot"></span>
            ${e?"Accesa":"Spenta"}
          </span>
        </div>

        <div class="illustration" @click=${r=>this._showMoreInfo(a,r)}>
          ${P(Os(t,e))}
        </div>

        ${this.config.detection_mode==="power"&&i!==null?o`
          <div class="power-row">
            <ha-icon icon="mdi:flash" style="color:${t.text}"></ha-icon>
            <span>${i.toFixed(0)} W</span>
          </div>
        `:""}

      </ha-card>
    `}static get styles(){return m`
      :host { display: block; }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px 8px;
      }
      .header-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .header ha-icon { --mdc-icon-size: 20px; }
      .title { font-size: 17px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 11px; color: var(--c-text); margin-top: 1px; }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 11px;
        border-radius: 12px;
        background: var(--c-bg);
        color: var(--c-text);
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
      }
      .badge-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--c-text);
      }
      .illustration {
        background: var(--c-bg);
        border-radius: 20px;
        margin: 4px;
        padding: 16px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
      .power-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 4px 4px 10px;
        font-size: 13px;
        font-weight: 600;
        color: var(--c-text);
      }
      .power-row ha-icon { --mdc-icon-size: 16px; }
    `}};$("pastel-dishwasher-card",Si);var Ci=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:dishwasher"},i=this._config.detection_mode==="boolean"?"boolean":"power";return o`
      <div class="editor">

        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${t}
          .computeLabel=${a=>this._labelFor(a.name)}
          @value-changed=${a=>{this._config={...this._config,...a.detail.value},this._fireChanged()}}
        ></ha-form>

        <div class="color-section">
          <div class="section-label">Colore della card</div>
          <div class="color-row">
            ${ja.map(a=>o`
              <button
                class="swatch ${this._config.color===a?"selected":""}"
                style="background:${$e[a].base}"
                title=${a}
                @click=${()=>this._valueChanged("color",a)}
              ></button>
            `)}
          </div>
        </div>

        <div class="detection-section">
          <div class="section-label">Come rilevare lo stato acceso/spento</div>
          <div class="mode-row">
            <button
              class="mode-button ${i==="power"?"selected":""}"
              @click=${()=>this._valueChanged("detection_mode","power")}
            >Sensore di consumo (W)</button>
            <button
              class="mode-button ${i==="boolean"?"selected":""}"
              @click=${()=>this._valueChanged("detection_mode","boolean")}
            >Booleano acceso/spento</button>
          </div>

          ${i==="power"?o`
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._config.power_entity||""}
              .includeDomains=${["sensor"]}
              label="Entità sensore di consumo (W)"
              @value-changed=${a=>this._valueChanged("power_entity",a.detail.value)}
            ></ha-entity-picker>
            <ha-textfield
              label="Soglia in Watt (sopra = accesa)"
              type="number"
              .value=${String(this._config.power_threshold??5)}
              @input=${a=>this._valueChanged("power_threshold",Number(a.target.value))}
            ></ha-textfield>
          `:o`
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._config.state_entity||""}
              .includeDomains=${["binary_sensor","switch","input_boolean"]}
              label="Entità booleano (acceso/spento)"
              @value-changed=${a=>this._valueChanged("state_entity",a.detail.value)}
            ></ha-entity-picker>
          `}
        </div>

      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo",icon:"Icona"}[t]||t}static get styles(){return m`
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .section-label { font-size: 14px; color: var(--primary-text-color); margin-bottom: 8px; font-weight: 500; }
      .color-row { display: flex; gap: 10px; flex-wrap: wrap; }
      .swatch {
        width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover { transform: scale(1.1); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .detection-section { display: flex; flex-direction: column; gap: 10px; }
      .mode-row { display: flex; gap: 8px; }
      .mode-button {
        flex: 1; padding: 10px; border-radius: 10px; border: 1px solid var(--divider-color, #ccc);
        background: transparent; cursor: pointer; font-size: 12px; color: var(--primary-text-color);
      }
      .mode-button.selected {
        border-color: var(--primary-color, #3d9cf0);
        background: var(--primary-color, #3d9cf0);
        color: #fff;
        font-weight: 600;
      }
    `}};$("pastel-dishwasher-card-editor",Ci);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-dishwasher-card",name:"Pastel Dishwasher",description:"Card lavastoviglie con illustrazione animata, rilevamento stato da consumo o booleano, colore personalizzabile.",preview:!0});for(let[s,t]of Object.entries({"pastel-appliance-card":$t,"pastel-appliance-card-editor":kt,"pastel-robot-card":pt,"pastel-robot-card-editor":X}))customElements.get(s)?console.warn(`Pastel UI: ${s} gi\xE0 caricato; rimuovi la vecchia risorsa.`):customElements.define(s,t);for(let[s,t]of[["pastel-device-range",ee],["pastel-lights-card",zt],["pastel-lights-card-editor",Mt],["pastel-covers-card",Et],["pastel-covers-card-editor",At],["pastel-weather-card",ie],["pastel-weather-card-editor",re],["pastel-tv-card",ae],["pastel-tv-card-editor",oe],["pastel-christmas-tree-card",ne],["pastel-christmas-tree-card-editor",le],["pastel-lawn-mower-card",ce],["pastel-lawn-mower-card-editor",Tt],["pastel-temp-card",fe],["pastel-temp-card-editor",be],["pastel-native-thermostat-card",_e],["pastel-native-thermostat-card-editor",we],["pastel-stove-card",Bt],["pastel-stove-card-editor",Wt],["pastel-script-climate-card",Zt],["pastel-script-climate-card-editor",S],["pastel-alarm-card",Yt],["pastel-alarm-card-editor",Qt],["pastel-security-card",Kt],["pastel-security-card-editor",Xt]])customElements.get(s)||customElements.define(s,t);for(let[s,t]of Object.entries({...ka,...Sa}))customElements.get(s)||customElements.define(s,t);for(let[s,t]of[["light-card",zt],["light-card-editor",Mt],["tapparella-card",Et],["tapparella-card-editor",At]])customElements.get(s)||customElements.define(s,class extends t{});Ti();console.info("Pastel UI 1.4.0");
/*! Bundled license information:

lit-html/lib/dom.js:
lit-html/lib/template.js:
lit-html/lib/modify-template.js:
lit-html/lib/directive.js:
lit-html/lib/template-instance.js:
lit-html/lib/template-result.js:
lit-html/lib/parts.js:
lit-html/lib/template-factory.js:
lit-html/lib/render.js:
lit-html/lib/default-template-processor.js:
lit-html/lit-html.js:
lit-html/lib/shady-render.js:
lit-element/lib/updating-element.js:
lit-element/lib/decorators.js:
lit-element/lit-element.js:
lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   *)

lit-html/lib/part.js:
  (**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   *)

lit-element/lib/css-tag.js:
  (**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  *)
*/
