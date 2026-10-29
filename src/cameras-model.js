export const cameraItems=(hass,config)=>(config.cameras||[]).filter(item=>item&&typeof item.entity==='string'&&item.entity.startsWith('camera.')).map(item=>{
 const state=hass?.states?.[item.entity];
 return {entity:item.entity,name:item.name?.trim()||state?.attributes?.friendly_name||item.entity,available:!!state&&!['unavailable','unknown'].includes(state.state)};
});

export const cameraLayout=config=>config.layout==='list'?'list':'grid';
