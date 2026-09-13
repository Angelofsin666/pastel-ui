import {LitElement,html} from 'lit-element';
import {styles,COLORS} from './theme.js';
export class BaseCard extends LitElement {
 static get properties(){return {hass:{},config:{},error:{},busy:{}}}
 static get styles(){return styles}
 setConfig(config){this.config={...config};this.error='';}
 getCardSize(){return 5}
 getGridOptions(){return {columns:6,min_columns:3,rows:'auto'}}
 palette(color='blue'){const [tint,accent]=COLORS[color]||COLORS.blue;return `--p-tint:${tint};--p-accent:${accent}`}
 info(entity){if(entity)this.dispatchEvent(new CustomEvent('hass-more-info',{detail:{entityId:entity},bubbles:true,composed:true}))}
 async call(action,entity,data={},target){
   if(this.busy)return;
   const [domain,service]=String(action||'').split('.');
   if(!domain||!service||!this.hass?.services?.[domain]?.[service]){this.error='Questo comando non è disponibile.';return}
   this.busy=true;this.error='';
   try{await this.hass.callService(domain,service,{...data,...(entity?{entity_id:entity}:{})},target)}catch(e){this.error=e.message||'Comando non riuscito.'}finally{this.busy=false}
 }
 // Native button clicks already suppress touch scrolling. Ignore drag-generated mouse clicks too.
 guardPress(event){this._origin={x:event.clientX,y:event.clientY,id:event.pointerId};this._moved=false}
 guardMove(event){if(this._origin?.id===event.pointerId&&Math.hypot(event.clientX-this._origin.x,event.clientY-this._origin.y)>10)this._moved=true}
 guardCancel(){this._moved=true}
 guardClick(event){if(event.detail!==0&&this._moved){event.stopPropagation();event.preventDefault()}}
 connectedCallback(){super.connectedCallback();this._down=e=>this.guardPress(e);this._move=e=>this.guardMove(e);this._cancel=()=>this.guardCancel();this._click=e=>this.guardClick(e);this.addEventListener('pointerdown',this._down,true);this.addEventListener('pointermove',this._move,true);this.addEventListener('pointercancel',this._cancel,true);this.addEventListener('click',this._click,true)}
 disconnectedCallback(){super.disconnectedCallback();this.removeEventListener('pointerdown',this._down,true);this.removeEventListener('pointermove',this._move,true);this.removeEventListener('pointercancel',this._cancel,true);this.removeEventListener('click',this._click,true)}
 feedback(){return this.error?html`<div class="error" role="alert">${this.error}</div>`:''}
}
export const stateLabel=(state)=>({on:'Acceso',off:'Spento',unavailable:'Non disponibile',unknown:'Stato sconosciuto',cleaning:'In pulizia',mowing:'In taglio',docked:'Alla base',paused:'In pausa',returning:'Ritorno alla base',idle:'In attesa',error:'Richiede attenzione',running:'In funzione',washing:'Lavaggio',drying:'Asciugatura',finished:'Terminato',cool:'Raffreddamento',heat:'Riscaldamento',auto:'Automatico',heat_cool:'Caldo / freddo',dry:'Deumidificazione',fan_only:'Ventilazione'})[state]||state||'Non configurato';
