import {html,css} from 'lit-element';

export const fabricCoverStyles=css`
 .fabric-art{position:relative;width:128px;height:118px;flex:none;color:var(--p-accent)}
 .fabric-art .unknown{position:absolute;inset:0;display:grid;place-items:center;font-size:29px;background:var(--p-tint);opacity:.9}
 .curtain .rail{position:absolute;left:5px;right:5px;top:9px;height:5px;border-radius:5px;background:currentColor}
 .curtain .rail:before,.curtain .rail:after{content:'';position:absolute;top:-3px;width:7px;height:11px;border-radius:4px;background:currentColor}
 .curtain .rail:before{left:-3px}.curtain .rail:after{right:-3px}
 .curtain .window{position:absolute;left:13px;right:13px;top:19px;bottom:5px;border:2px solid currentColor;border-radius:3px;opacity:.38}
 .curtain .window:after{content:'';position:absolute;top:0;bottom:0;left:50%;border-left:2px solid currentColor}
 .curtain .drape{position:absolute;top:18px;bottom:5px;width:var(--drape-width);border:2px solid currentColor;border-top:0;border-radius:2px 2px 9px 9px;background:repeating-linear-gradient(90deg,var(--p-tint) 0 9px,color-mix(in srgb,var(--p-accent) 22%,var(--p-tint)) 9px 11px,var(--p-tint) 11px 18px);transition:width .7s ease}
 .curtain .drape.left{left:12px}.curtain .drape.right{right:12px}
 .awning .wall{position:absolute;left:9px;top:14px;bottom:4px;width:11px;border:2px solid currentColor;border-radius:3px}
 .awning .mount{position:absolute;left:18px;top:17px;width:106px;height:8px;border:2px solid currentColor;border-radius:5px;background:var(--p-tint)}
 .awning .canopy{position:absolute;left:20px;top:29px;width:calc((100% - 30px) * var(--opening));height:61px;border:2px solid currentColor;border-radius:3px 3px 9px 9px;background:repeating-linear-gradient(90deg,var(--p-tint) 0 14px,color-mix(in srgb,var(--p-accent) 22%,var(--p-tint)) 14px 17px,var(--p-tint) 17px 29px);transition:width .7s ease}
 .awning .front{position:absolute;left:calc(20px + (100% - 30px) * var(--opening));top:29px;width:5px;height:61px;border-radius:3px;background:currentColor;transition:left .7s ease}
 .awning .arm{position:absolute;left:22px;top:89px;width:calc((100% - 30px) * var(--opening));height:2px;background:currentColor;transform:rotate(-16deg);transform-origin:left center;transition:width .7s ease}
 @media(max-width:370px){.fabric-art{width:104px;height:112px}.awning .mount{width:85px}.curtain .drape{top:18px}}
 @media(prefers-reduced-motion:reduce){.fabric-art .drape,.awning .canopy,.awning .front,.awning .arm{transition:none}}
`;

export function fabricCoverArt(kind,position){
 const known=Number.isFinite(position),value=known?Math.max(0,Math.min(100,position)):50;
 if(kind==='curtains')return html`<div class="fabric-art curtain" role="img" aria-label=${known?`Tenda aperta al ${Math.round(value)}%`:'Posizione tenda non disponibile'} style=${`--drape-width:${Math.round(39-value*.25)}%`}><div class="rail"></div><div class="window"></div><div class="drape left"></div><div class="drape right"></div>${known?'':html`<div class="unknown">?</div>`}</div>`;
 return html`<div class="fabric-art awning" role="img" aria-label=${known?`Tenda da sole aperta al ${Math.round(value)}%`:'Posizione tenda da sole non disponibile'} style=${`--opening:${Math.max(.07,value/100)}`}><div class="wall"></div><div class="mount"></div><div class="canopy"></div><div class="front"></div><div class="arm"></div>${known?'':html`<div class="unknown">?</div>`}</div>`;
}
