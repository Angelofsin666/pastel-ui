const cache=new WeakMap();
export async function getRegistry(hass,{refresh=false}={}) {
 const key=hass.connection || hass;
 if(!refresh && cache.has(key))return cache.get(key);
 const pending=Promise.all([
   hass.callWS({type:'config/entity_registry/list'}),
   hass.callWS({type:'config/device_registry/list'}),
 ]).then(([entities,devices])=>({entities,devices})).catch(error=>{cache.delete(key);throw error});
 cache.set(key,pending);return pending;
}
