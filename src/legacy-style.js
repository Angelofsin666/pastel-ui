import {css} from 'lit-element';
const polish=`
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
`;
export function registerLegacy(name,Original){
 if(customElements.get(name)){console.warn(`Pastel UI: ${name} già caricato. Rimuovi la vecchia risorsa per usare la versione della suite.`);return}
 if(name.endsWith('-editor')){customElements.define(name,Original);return}
 const isLit=typeof Original.prototype.requestUpdate==='function';
 if(isLit){
  class Styled extends Original{static get styles(){return [super.styles,css([polish])]}}
  customElements.define(name,Styled);
 }else{
  class Styled extends Original{
   _render(...args){const result=super._render(...args);if(this.shadowRoot&&!this.shadowRoot.querySelector('[data-pastel-polish]')){const style=document.createElement('style');style.dataset.pastelPolish='';style.textContent=polish;this.shadowRoot.append(style)}return result}
  }
  customElements.define(name,Styled);
 }
}
