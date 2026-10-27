// Pure state resolution shared by the card and its regression tests.
export function readNumber(hass, entity, attribute) {
 const s=hass?.states?.[entity];
 if(!s||['unknown','unavailable'].includes(s.state))return null;
 const value=attribute?s.attributes?.[attribute]:s.state;
 if(value===null||value===undefined||String(value).trim()===''||typeof value==='boolean')return null;
 const n=Number(value);return Number.isFinite(n)?n:null;
}
export function stoveTemperatureSource(config) {
 const step=(config.steppers||[]).find(s=>s.show_as_temperature&&s.entity);
 return step?{entity:step.entity,attribute:step.attribute}:{entity:config.temperature_entity,attribute:config.temperature_attribute};
}
export function conditionResult(hass,condition) {
 const s=hass?.states?.[condition.entity];
 if(!s)return null;
 const actual=condition.attribute?s.attributes?.[condition.attribute]:s.state;
 if(actual===undefined||actual===null)return null;
 if(['unknown','unavailable'].includes(s.state)&&String(actual)!==String(condition.state))return null;
 return condition.operator==='not_equals'?String(actual)!==String(condition.state):String(actual)===String(condition.state);
}
export function resolveStoveState(hass,config) {
 for(const rule of config.states||[]) {
  if(!rule.conditions?.length)continue;
  const results=rule.conditions.map(c=>conditionResult(hass,c));
  const matched=rule.match==='any'?results.includes(true):results.every(v=>v===true);
  if(matched)return {...rule,timer_entity:rule.timer_entity||rule.conditions.find(c=>c.entity?.startsWith('timer.')&&hass?.states?.[c.entity]?.state==='active')?.entity};
  const uncertain=rule.match==='any'?results.includes(null):!results.includes(false)&&results.includes(null);
  if(uncertain)return {label:'Stato non disponibile',badge:'Non disponibile',unknown:true};
 }
 if(config.entity){const s=hass?.states?.[config.entity];if(!s||['unknown','unavailable'].includes(s.state))return {label:'Stato non disponibile',badge:'Non disponibile',unknown:true};return {label:s.state,badge:s.state};}
 if(config.states?.length)return {id:'off',label:config.fallback_label||'Riscaldamento spento',badge:config.fallback_badge||'Spenta'};
 return {label:'Stufa non configurata',badge:'Da configurare',unknown:true};
}
export function timerRemaining(hass,entity,now=Date.now()) {
 const s=hass?.states?.[entity];if(!s||!['active','paused'].includes(s.state))return '';
 if(s.state==='active'){
  const finish=Date.parse(s.attributes?.finishes_at);if(!Number.isFinite(finish))return '';
  const seconds=Math.max(0,Math.ceil((finish-now)/1000));
  const h=Math.floor(seconds/3600),m=Math.floor(seconds%3600/60),r=seconds%60;
  return `${h?`${h}:`:''}${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`;
 }
 return s.attributes?.remaining||'';
}
export function actionSpec(control) {
 if(!control)return null;
 if(control.action)return {action:control.action,entity:control.entity,data:control.data||{},target:control.target};
 const domain=control.entity?.split('.')[0];
 const service={script:'turn_on',button:'press',input_button:'press',scene:'turn_on'}[domain];
 return service?{action:`${domain}.${service}`,entity:control.entity,data:control.data||{},target:control.target}:null;
}
export function canRun(hass,control) {
 const a=actionSpec(control);if(!a)return false;
 const [domain,service]=a.action.split('.');if(!hass?.services?.[domain]?.[service])return false;
 if(a.entity){const s=hass?.states?.[a.entity];if(!s||s.state==='unavailable')return false;}
 return true;
}
export function validateStoveConfig(c) {
 for(const key of ['states','controls','steppers'])if(c[key]!==undefined&&!Array.isArray(c[key]))throw new Error(`${key} deve essere una lista.`);
 for(const rule of c.states||[]) {
  if(!rule||typeof rule!=='object'||!Array.isArray(rule.conditions))throw new Error('Ogni stato richiede una lista di condizioni.');
  if(rule.match&&!['all','any'].includes(rule.match))throw new Error('Le condizioni devono corrispondere a tutte oppure almeno una.');
  for(const condition of rule.conditions)if(!condition||typeof condition.entity!=='string'||condition.state===undefined||condition.state===null||condition.operator&&!['equals','not_equals'].includes(condition.operator))throw new Error('Ogni condizione richiede entità, stato e confronto validi.');
 }
 for(const control of [...(c.controls||[]),...(c.steppers||[]).flatMap(s=>[s?.minus,s?.plus]).filter(Boolean)]) {
  if(!control||typeof control!=='object'||Array.isArray(control)||control.entity!==undefined&&typeof control.entity!=='string'||control.action!==undefined&&(typeof control.action!=='string'||!/^\w+\.\w+$/.test(control.action)))throw new Error('Configura un’entità oppure un’azione valida per ogni comando.');
 }
 for(const step of c.steppers||[])if(!step||typeof step!=='object')throw new Error('Controllo −/+ non valido.');
 for(const key of ['pellet_warning_threshold'])if(c[key]!==undefined&&(!Number.isFinite(Number(c[key]))||Number(c[key])<0||Number(c[key])>100))throw new Error('La soglia pellet deve essere compresa tra 0 e 100.');
}
