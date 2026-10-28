// Native fan controls are optional; every displayed reading still comes from Home Assistant.
export function fanDevice(hass,id){
 const state=hass?.states?.[id],attributes=state?.attributes||{};
 const available=!!state&&['on','off'].includes(state.state);
 const raw=Number(attributes.percentage);
 const percentage=available&&attributes.percentage!=null&&Number.isFinite(raw)&&raw>=0&&raw<=100?raw:null;
 const features=Number(attributes.supported_features)||0;
 const step=Number(attributes.percentage_step);
 return {id,available,on:state?.state==='on',percentage,oscillating:typeof attributes.oscillating==='boolean'?attributes.oscillating:null,features,step:Number.isFinite(step)&&step>0&&step<=100?step:10};
}
export function fanCommand(hass,id,kind){
 const fan=fanDevice(hass,id),services=hass?.services?.fan||{};
 if(!id?.startsWith('fan.')||!fan.available)return null;
 if(kind==='power'){
  const action=fan.on?'turn_off':'turn_on';
  return services[action]?{action:`fan.${action}`,entity:id,data:{}}:null;
 }
 if(kind==='oscillate')return (fan.features&2)&&fan.oscillating!==null&&services.oscillate?{action:'fan.oscillate',entity:id,data:{oscillating:!fan.oscillating}}:null;
 if((kind==='up'||kind==='down')&&(fan.features&1)&&fan.percentage!==null&&services.set_percentage){
  const next=Math.max(0,Math.min(100,fan.percentage+(kind==='up'?fan.step:-fan.step)));
  return next===fan.percentage?null:{action:'fan.set_percentage',entity:id,data:{percentage:Math.round(next)}};
 }
 return null;
}
