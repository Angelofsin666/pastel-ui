import {readNumber} from './stove-model.js';
// Home Assistant alarm_control_panel/const.py: supported-feature bits.
export const ALARM_ACTIONS=[
 {action:'alarm_arm_home',name:'In Casa',state:'armed_home',feature:1,icon:'mdi:home'},
 {action:'alarm_arm_night',name:'Notte',state:'armed_night',feature:4,icon:'mdi:weather-night'},
 {action:'alarm_arm_away',name:'Fuori Casa',state:'armed_away',feature:2,icon:'mdi:walk'},
 {action:'alarm_disarm',name:'Disattiva',state:'disarmed',feature:0,icon:'mdi:shield-off'},
 {action:'alarm_arm_vacation',name:'Vacanza',state:'armed_vacation',feature:32,icon:'mdi:airplane'},
 {action:'alarm_arm_custom_bypass',name:'Personalizzata',state:'armed_custom_bypass',feature:16,icon:'mdi:shield-half-full'},
 {action:'alarm_trigger',name:'Attiva sirena',state:'triggered',feature:8,icon:'mdi:alarm-light'}
];
export const SECURITY_ICONS=[['mdi:shield','Allarme'],['mdi:home','In Casa'],['mdi:weather-night','Notte'],['mdi:walk','Fuori Casa'],['mdi:shield-off','Disattiva'],['mdi:shield-lock','Protezione'],['mdi:shield-home','Perimetrale'],['mdi:airplane','Vacanza'],['mdi:alarm-light','Sirena'],['mdi:door-open','Porta'],['mdi:window-open','Finestra'],['mdi:smoke-detector','Fumo'],['mdi:molecule-co2','CO₂'],['mdi:molecule-co','CO'],['mdi:gas-cylinder','Gas'],['mdi:motion-sensor','Movimento'],['mdi:water-alert','Acqua'],['mdi:lock','Serratura'],['mdi:bell-outline','Notifica'],['mdi:view-dashboard-outline','Riepilogo']];
export const ALARM_LABELS={disarmed:['Disattivato','Sistema non inserito'],armed_home:['In Casa','Protezione in casa'],armed_night:['Notte','Protezione notturna'],armed_away:['Fuori Casa','Protezione durante l’assenza'],armed_vacation:['Vacanza','Protezione durante l’assenza'],armed_custom_bypass:['Personalizzata','Protezione personalizzata'],arming:['In attivazione…','Inserimento in corso'],disarming:['Disattivazione…','Disinserimento in corso'],pending:['In attesa…','Attesa del sistema'],triggered:['Allarme!','Segnalazione dal sistema']};
export function isSecurityDetector(s){return !!s&&['sensor','binary_sensor'].includes(s.entity_id?.split('.')[0])&&['smoke','gas','carbon_monoxide','carbon_dioxide','safety','problem'].includes(s.attributes?.device_class);}
export function alarmState(hass,entity){
 if(!entity)return {label:'Da associare',detail:'Seleziona il pannello allarme',unknown:true};
 const s=hass?.states?.[entity];if(!s||['unknown','unavailable'].includes(s.state))return {label:'Non disponibile',detail:'Dati non disponibili',unknown:true};
 const labels=ALARM_LABELS[s.state];return {state:s.state,label:labels?.[0]||s.state,detail:labels?.[1]||'Stato del pannello',unknown:!labels,alert:s.state==='triggered',waiting:['arming','disarming','pending'].includes(s.state)};
}
export function panelActionAvailable(hass,entity,action){const s=hass?.states?.[entity],a=ALARM_ACTIONS.find(a=>a.action===action);return !!entity?.startsWith('alarm_control_panel.')&&!!s&&!['unknown','unavailable'].includes(s.state)&&!!a&&(!a.feature||(Number(s.attributes?.supported_features||0)&a.feature)!==0)&&!!hass?.services?.alarm_control_panel?.[action];}
export function alarmButtonAvailable(hass,config,button){if(button.kind==='script')return !!button.script?.startsWith('script.')&&!!hass?.states?.[button.script]&&hass.states[button.script].state!=='unavailable'&&!!hass?.services?.script?.turn_on;return panelActionAvailable(hass,config.entity,button.action);}
export function alarmNeedsCode(hass,config,button){if(button.kind==='script')return false;const a=hass?.states?.[config.entity]?.attributes||{};return !!a.code_format&&(button.action==='alarm_disarm'||button.action==='alarm_trigger'||a.code_arm_required!==false);}
export function openingType(tile){
 if(tile.opening_type==='door'||tile.opening_type==='window')return tile.opening_type;
 if(tile.opening_type==='none')return null;
 if(tile.icon?.includes('window'))return 'window';
 if(tile.icon?.includes('door'))return 'door';
 return null;
}
export function openOpeningNames(hass,tile){
 const type=openingType(tile);
 const ids=Array.isArray(tile.opening_entities)&&tile.opening_entities.length?tile.opening_entities:
  type?Object.values(hass?.states||{}).filter(s=>s.entity_id?.startsWith('binary_sensor.')&&s.attributes?.device_class===type).map(s=>s.entity_id):[];
 const seen=new Set(),names=[];
 for(const id of ids){
  if(seen.has(id))continue;seen.add(id);
  const state=hass?.states?.[id];
  if(!state||!['on','open','opening'].includes(state.state))continue;
  names.push(String(state.attributes?.friendly_name||id));
 }
 return names;
}
export function securityTile(hass,tile){
 if(tile.kind==='alarm'){const a=alarmState(hass,tile.entity);return {...a,value:a.label,detail:a.unknown?a.detail:a.alert?'Segnalazione attiva':a.waiting?'Operazione in corso':a.state==='disarmed'?'Sistema non inserito':'Allarme inserito'};}
 if(tile.kind==='count'){const number=readNumber(hass,tile.entity,tile.attribute),valid=number!==null&&Number.isInteger(number)&&number>=0;const openNames=valid&&number>0?openOpeningNames(hass,tile):[];return {value:valid?String(number):'—',detail:!valid?'Dati non disponibili':number===0?(tile.zero_label||'Tutte chiuse'):(tile.open_label||'Aperture rilevate'),openNames,unidentified:valid?Math.max(0,number-openNames.length):0,unknown:!valid,attention:valid&&number>0};}
 const ids=tile.entities||[];
 if(!ids.length)return {value:'Da associare',detail:'Sensori non configurati',unknown:true};
 let missing=false,needsThreshold=false,alert=false;
 for(const id of ids){const s=hass?.states?.[id];if(!s||['unknown','unavailable'].includes(s.state)){missing=true;continue;}
  if(s.state===String(tile.active_state??'on')){alert=true;continue;}if(s.state===String(tile.normal_state??'off'))continue;
  const n=readNumber(hass,id),threshold=tile.threshold===undefined||tile.threshold===null||String(tile.threshold).trim()===''?null:Number(tile.threshold);
  if(n===null){missing=true;continue;}if(threshold===null||!Number.isFinite(threshold)){needsThreshold=true;continue;}if(n>=threshold)alert=true;
 }
 if(alert)return {value:tile.alert_label||'Segnalazione',detail:missing||needsThreshold?'Segnalazione · dati parziali':'Controlla i sensori',alert:true,unknown:missing||needsThreshold};
 if(missing||needsThreshold)return {value:needsThreshold?'Imposta soglia':'Non disponibile',detail:needsThreshold?'Soglia per il sensore numerico':'Dati non disponibili',unknown:true};
 return {value:tile.normal_label||'OK',detail:'Nessuna segnalazione',unknown:false};
}
export function securityOverview(results){if(results.some(t=>t.alert))return 'Segnalazione';if(results.some(t=>t.attention))return 'Aperture rilevate';if(results.some(t=>t.unknown))return 'Dati parziali';if(results.some(t=>t.waiting))return 'Operazione in corso';return results.length?'Nessuna segnalazione':'Da configurare';}
export function validateAlarmConfig(c){if(c.entity!==undefined&&(typeof c.entity!=='string'||c.entity&&!c.entity.startsWith('alarm_control_panel.')))throw new Error('Scegli un pannello alarm_control_panel.');if(c.buttons!==undefined&&!Array.isArray(c.buttons))throw new Error('buttons deve essere una lista.');for(const b of c.buttons||[]){if(!b||typeof b!=='object'||Array.isArray(b))throw new Error('Pulsante non valido.');if(b.kind&&!['script','panel'].includes(b.kind))throw new Error('Scegli Pannello allarme oppure Script.');if(b.script!==undefined&&(typeof b.script!=='string'||b.script&&!b.script.startsWith('script.')))throw new Error('Scegli uno script valido.');if(b.action&&!ALARM_ACTIONS.some(a=>a.action===b.action))throw new Error('Comando allarme non valido.');}}
export function validateSecurityConfig(c){if(c.tiles!==undefined&&!Array.isArray(c.tiles))throw new Error('tiles deve essere una lista.');for(const tile of c.tiles||[]){if(!tile||!['alarm','count','detector'].includes(tile.kind))throw new Error('Tipo di riquadro non valido.');if(tile.entities!==undefined&&(!Array.isArray(tile.entities)||tile.entities.some(id=>typeof id!=='string')))throw new Error('I sensori devono essere una lista di entità.');if(tile.opening_entities!==undefined&&(!Array.isArray(tile.opening_entities)||tile.opening_entities.some(id=>typeof id!=='string')))throw new Error('Le aperture devono essere una lista di entità.');if(tile.opening_type!==undefined&&!['door','window','none'].includes(tile.opening_type))throw new Error('Tipo di apertura non valido.');if(tile.threshold!==undefined&&!Number.isFinite(Number(tile.threshold)))throw new Error('Soglia numerica non valida.');}}
