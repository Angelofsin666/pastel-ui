var hs=Object.defineProperty;var ms=(a,t,e)=>t in a?hs(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var si=(a,t,e)=>ms(a,typeof t!="symbol"?t+"":t,e);var fs=[{type:"pastel-alarm-card",name:"Pastel Alarm",description:"Alarm panel and script controls with customizable buttons.",preview:!0},{type:"pastel-security-card",name:"Pastel Security Overview",description:"Alarm status, open doors and windows, and safety sensors.",preview:!0},{type:"pastel-script-climate-card",name:"Pastel Climate AC",description:"Script-controlled air conditioning with a temperature sensor.",preview:!0},{type:"pastel-stove-card",name:"Pastel Pellet Stove",description:"Pellet stove scripts, value controls, status and pellet level.",preview:!0},{type:"pastel-appliance-card",name:"Pastel Appliance",description:"Appliance sensors and controls for air, water, laundry and kitchen devices.",preview:!0},{type:"pastel-robot-card",name:"Pastel Robot",description:"Robot cleaning and gardening controls, maps and zones.",preview:!0},{type:"pastel-lights-card",name:"Pastel Lights",description:"Light controls, brightness and status.",preview:!0},{type:"pastel-covers-card",name:"Pastel Covers",description:"Roller shutter controls, real positions and group commands.",preview:!0},{type:"pastel-weather-card",name:"Pastel Weather",description:"Current weather and daily forecast from a Home Assistant weather entity.",preview:!0},{type:"pastel-tv-card",name:"Pastel TV",description:"Television controls, volume and source when supported by the media player.",preview:!0},{type:"pastel-button-card",name:"Pastel Button",description:"Customizable action buttons.",preview:!0},{type:"pastel-openings-card",name:"Pastel Openings",description:"Doors, windows and other opening sensors.",preview:!0},{type:"pastel-doors-windows-card",name:"Pastel Doors & Windows",description:"Door and window status.",preview:!0},{type:"pastel-motion-presence-card",name:"Pastel Motion & Presence",description:"Motion and occupancy sensors.",preview:!0},{type:"pastel-water-leak-card",name:"Pastel Water Leak",description:"Water leak sensor status.",preview:!0},{type:"pastel-smoke-co-card",name:"Pastel Smoke & CO",description:"Smoke and carbon monoxide sensor status.",preview:!0},{type:"pastel-temp-card",name:"Pastel Temperature",description:"Room temperature tiles, optional humidity, averages and history trends.",preview:!0},{type:"pastel-dishwasher-card",name:"Pastel Dishwasher",description:"Dishwasher cycle and power monitoring.",preview:!0},{type:"pastel-lawn-mower-card",name:"Pastel Lawn Mower",description:"Lawn mower controls and battery status.",preview:!0}],gs=new Set(["pastel-climate-card","pastel-clima-card","pastel-thermostat-card","pastel-temp-humidity-card"]);function ai(a=window){let t=a.customCards||(a.customCards=[]),e=new Set;for(let i=0;i<t.length;)gs.has(t[i].type)||e.has(t[i].type)?t.splice(i,1):(e.add(t[i].type),i++);for(let i of fs){let s=t.find(n=>n.type===i.type),r={...i,documentationURL:"https://github.com/Angelofsin666/pastel-ui/blob/main/docs/catalog.md"};s?Object.assign(s,r):t.push(r)}return t}var ce=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,de=(a,t,e=null,i=null)=>{for(;t!==e;){let s=t.nextSibling;a.insertBefore(t,i),t=s}},V=(a,t,e=null)=>{for(;t!==e;){let i=t.nextSibling;a.removeChild(t),t=i}};var A=`{{lit-${String(Math.random()).slice(2)}}}`,pe=`<!--${A}-->`,ri=new RegExp(`${A}|${pe}`),J="$lit$",q=class{constructor(t,e){this.parts=[],this.element=e;let i=[],s=[],r=document.createTreeWalker(e.content,133,null,!1),n=0,l=-1,c=0,{strings:d,values:{length:g}}=t;for(;c<g;){let p=r.nextNode();if(p===null){r.currentNode=s.pop();continue}if(l++,p.nodeType===1){if(p.hasAttributes()){let m=p.attributes,{length:h}=m,b=0;for(let u=0;u<h;u++)oi(m[u].name,J)&&b++;for(;b-- >0;){let u=d[c],_=St.exec(u)[2],E=_.toLowerCase()+J,S=p.getAttribute(E);p.removeAttribute(E);let P=S.split(ri);this.parts.push({type:"attribute",index:l,name:_,strings:P}),c+=P.length-1}}p.tagName==="TEMPLATE"&&(s.push(p),r.currentNode=p.content)}else if(p.nodeType===3){let m=p.data;if(m.indexOf(A)>=0){let h=p.parentNode,b=m.split(ri),u=b.length-1;for(let _=0;_<u;_++){let E,S=b[_];if(S==="")E=I();else{let P=St.exec(S);P!==null&&oi(P[2],J)&&(S=S.slice(0,P.index)+P[1]+P[2].slice(0,-J.length)+P[3]),E=document.createTextNode(S)}h.insertBefore(E,p),this.parts.push({type:"node",index:++l})}b[u]===""?(h.insertBefore(I(),p),i.push(p)):p.data=b[u],c+=u}}else if(p.nodeType===8)if(p.data===A){let m=p.parentNode;(p.previousSibling===null||l===n)&&(l++,m.insertBefore(I(),p)),n=l,this.parts.push({type:"node",index:l}),p.nextSibling===null?p.data="":(i.push(p),l--),c++}else{let m=-1;for(;(m=p.data.indexOf(A,m+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(let p of i)p.parentNode.removeChild(p)}},oi=(a,t)=>{let e=a.length-t.length;return e>=0&&a.slice(e)===t},nt=a=>a.index!==-1,I=()=>document.createComment(""),St=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var ue=133;function he(a,t){let{element:{content:e},parts:i}=a,s=document.createTreeWalker(e,ue,null,!1),r=lt(i),n=i[r],l=-1,c=0,d=[],g=null;for(;s.nextNode();){l++;let p=s.currentNode;for(p.previousSibling===g&&(g=null),t.has(p)&&(d.push(p),g===null&&(g=p)),g!==null&&c++;n!==void 0&&n.index===l;)n.index=g!==null?-1:n.index-c,r=lt(i,r),n=i[r]}d.forEach(p=>p.parentNode.removeChild(p))}var bs=a=>{let t=a.nodeType===11?0:1,e=document.createTreeWalker(a,ue,null,!1);for(;e.nextNode();)t++;return t},lt=(a,t=-1)=>{for(let e=t+1;e<a.length;e++){let i=a[e];if(nt(i))return e}return-1};function ni(a,t,e=null){let{element:{content:i},parts:s}=a;if(e==null){i.appendChild(t);return}let r=document.createTreeWalker(i,ue,null,!1),n=lt(s),l=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===e&&(l=bs(t),e.parentNode.insertBefore(t,e));n!==-1&&s[n].index===c;){if(l>0){for(;n!==-1;)s[n].index+=l,n=lt(s,n);return}n=lt(s,n)}}var li=new WeakMap,me=a=>((...t)=>{let e=a(...t);return li.set(e,!0),e}),B=a=>typeof a=="function"&&li.has(a);var C={},Ct={};var R=class{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(let i of this.__parts)i!==void 0&&i.setValue(t[e]),e++;for(let i of this.__parts)i!==void 0&&i.commit()}_clone(){let t=ce?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1),r=0,n=0,l,c=s.nextNode();for(;r<i.length;){if(l=i[r],!nt(l)){this.__parts.push(void 0),r++;continue}for(;n<l.index;)n++,c.nodeName==="TEMPLATE"&&(e.push(c),s.currentNode=c.content),(c=s.nextNode())===null&&(s.currentNode=e.pop(),c=s.nextNode());if(l.type==="node"){let d=this.processor.handleTextExpression(this.options);d.insertAfterNode(c.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,l.name,l.strings,this.options));r++}return ce&&(document.adoptNode(t),customElements.upgrade(t)),t}};var ci=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:a=>a}),vs=` ${A} `,M=class{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){let t=this.strings.length-1,e="",i=!1;for(let s=0;s<t;s++){let r=this.strings[s],n=r.lastIndexOf("<!--");i=(n>-1||i)&&r.indexOf("-->",n+1)===-1;let l=St.exec(r);l===null?e+=r+(i?vs:pe):e+=r.substr(0,l.index)+l[1]+l[2]+J+l[3]+A}return e+=this.strings[t],e}getTemplateElement(){let t=document.createElement("template"),e=this.getHTML();return ci!==void 0&&(e=ci.createHTML(e)),t.innerHTML=e,t}},tt=class extends M{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){let t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),de(e,i.firstChild),t}};var it=a=>a===null||!(typeof a=="object"||typeof a=="function"),zt=a=>Array.isArray(a)||!!(a&&a[Symbol.iterator]),et=class{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new ct(this)}_getValue(){let t=this.strings,e=t.length-1,i=this.parts;if(e===1&&t[0]===""&&t[1]===""){let r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!zt(r))return r}let s="";for(let r=0;r<e;r++){s+=t[r];let n=i[r];if(n!==void 0){let l=n.value;if(it(l)||!zt(l))s+=typeof l=="string"?l:String(l);else for(let c of l)s+=typeof c=="string"?c:String(c)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},ct=class{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==C&&(!it(t)||t!==this.value)&&(this.value=t,B(t)||(this.committer.dirty=!0))}commit(){for(;B(this.value);){let t=this.value;this.value=C,t(this)}this.value!==C&&this.committer.commit()}},O=class a{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(I()),this.endNode=t.appendChild(I())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=I()),t.__insert(this.endNode=I())}insertAfterPart(t){t.__insert(this.startNode=I()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;B(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=C,e(this)}let t=this.__pendingValue;t!==C&&(it(t)?t!==this.value&&this.__commitText(t):t instanceof M?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):zt(t)?this.__commitIterable(t):t===Ct?(this.value=Ct,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){let e=this.startNode.nextSibling;t=t??"";let i=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){let e=this.options.templateFactory(t);if(this.value instanceof R&&this.value.template===e)this.value.update(t.values);else{let i=new R(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());let e=this.value,i=0,s;for(let r of t)s=e[i],s===void 0&&(s=new a(this.options),e.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){V(this.startNode.parentNode,t.nextSibling,this.endNode)}},dt=class{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;B(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=C,e(this)}if(this.__pendingValue===C)return;let t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=C}},pt=class extends et{constructor(t,e,i){super(t,e,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new Et(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},Et=class extends ct{},di=!1;(()=>{try{let a={get capture(){return di=!0,!1}};window.addEventListener("test",a,a),window.removeEventListener("test",a,a)}catch{}})();var ut=class{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(t){this.__pendingValue=t}commit(){for(;B(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=C,r(this)}if(this.__pendingValue===C)return;let t=this.__pendingValue,e=this.value,i=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=t!=null&&(e==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=xs(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=C}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}},xs=a=>a&&(di?{capture:a.capture,passive:a.passive,once:a.once}:a.capture);function fe(a){let t=W.get(a.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},W.set(a.type,t));let e=t.stringsArray.get(a.strings);if(e!==void 0)return e;let i=a.strings.join(A);return e=t.keyString.get(i),e===void 0&&(e=new q(a,a.getTemplateElement()),t.keyString.set(i,e)),t.stringsArray.set(a.strings,e),e}var W=new Map;var F=new WeakMap,ge=(a,t,e)=>{let i=F.get(t);i===void 0&&(V(t,t.firstChild),F.set(t,i=new O(Object.assign({templateFactory:fe},e))),i.appendInto(t)),i.setValue(a),i.commit()};var At=class{handleAttributeExpressions(t,e,i,s){let r=e[0];return r==="."?new pt(t,e.slice(1),i).parts:r==="@"?[new ut(t,e.slice(1),s.eventContext)]:r==="?"?[new dt(t,e.slice(1),i)]:new et(t,e,i).parts}handleTextExpression(t){return new O(t)}},Tt=new At;typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var o=(a,...t)=>new M(a,t,"html",Tt),w=(a,...t)=>new tt(a,t,"svg",Tt);var pi=(a,t)=>`${a}--${t}`,Nt=!0;typeof window.ShadyCSS>"u"?Nt=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Nt=!1);var ys=a=>t=>{let e=pi(t.type,a),i=W.get(e);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},W.set(e,i));let s=i.stringsArray.get(t.strings);if(s!==void 0)return s;let r=t.strings.join(A);if(s=i.keyString.get(r),s===void 0){let n=t.getTemplateElement();Nt&&window.ShadyCSS.prepareTemplateDom(n,a),s=new q(t,n),i.keyString.set(r,s)}return i.stringsArray.set(t.strings,s),s},_s=["html","svg"],ws=a=>{_s.forEach(t=>{let e=W.get(pi(t,a));e!==void 0&&e.keyString.forEach(i=>{let{element:{content:s}}=i,r=new Set;Array.from(s.querySelectorAll("style")).forEach(n=>{r.add(n)}),he(i,r)})})},ui=new Set,$s=(a,t,e)=>{ui.add(a);let i=e?e.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:r}=s;if(r===0){window.ShadyCSS.prepareTemplateStyles(i,a);return}let n=document.createElement("style");for(let d=0;d<r;d++){let g=s[d];g.parentNode.removeChild(g),n.textContent+=g.textContent}ws(a);let l=i.content;e?ni(e,n,l.firstChild):l.insertBefore(n,l.firstChild),window.ShadyCSS.prepareTemplateStyles(i,a);let c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(e){l.insertBefore(n,l.firstChild);let d=new Set;d.add(n),he(e,d)}},hi=(a,t,e)=>{if(!e||typeof e!="object"||!e.scopeName)throw new Error("The `scopeName` option is required.");let i=e.scopeName,s=F.has(t),r=Nt&&t.nodeType===11&&!!t.host,n=r&&!ui.has(i),l=n?document.createDocumentFragment():t;if(ge(a,l,Object.assign({templateFactory:ys(i)},e)),n){let c=F.get(l);F.delete(l);let d=c.value instanceof R?c.value.template:void 0;$s(i,l,d),V(t,t.firstChild),t.appendChild(l),F.set(t,c)}!s&&r&&window.ShadyCSS.styleElement(t.host)};var mi;window.JSCompiler_renameProperty=(a,t)=>a;var we={toAttribute(a,t){switch(t){case Boolean:return a?"":null;case Object:case Array:return a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){switch(t){case Boolean:return a!==null;case Number:return a===null?null:Number(a);case Object:case Array:return JSON.parse(a)}return a}},fi=(a,t)=>t!==a&&(t===t||a===a),be={attribute:!0,type:String,converter:we,reflect:!1,hasChanged:fi},ve=1,xe=4,ye=8,_e=16,$e="finalized",st=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let t=[];return this._classProperties.forEach((e,i)=>{let s=this._attributeNameForProperty(i,e);s!==void 0&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((e,i)=>this._classProperties.set(i,e))}}static createProperty(t,e=be){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;let i=typeof t=="symbol"?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||be}static finalize(){let t=Object.getPrototypeOf(this);if(t.hasOwnProperty($e)||t.finalize(),this[$e]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(e):[]];for(let s of i)this.createProperty(s,e[s])}}static _attributeNameForProperty(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=fi){return i(t,e)}static _propertyValueFromAttribute(t,e){let i=e.type,s=e.converter||we,r=typeof s=="function"?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(e.reflect===void 0)return;let i=e.type,s=e.converter;return(s&&s.toAttribute||we.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){let i=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=be){let s=this.constructor,r=s._attributeNameForProperty(t,i);if(r!==void 0){let n=s._propertyValueToAttribute(e,i);if(n===void 0)return;this._updateState=this._updateState|ye,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._updateState=this._updateState&~ye}}_attributeToProperty(t,e){if(this._updateState&ye)return;let i=this.constructor,s=i._attributeToPropertyMap.get(t);if(s!==void 0){let r=i.getPropertyOptions(s);this._updateState=this._updateState|_e,this[s]=i._propertyValueFromAttribute(e,r),this._updateState=this._updateState&~_e}}requestUpdateInternal(t,e,i){let s=!0;if(t!==void 0){let r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),i.reflect===!0&&!(this._updateState&_e)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|xe;try{await this._updatePromise}catch{}let t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&xe}get hasUpdated(){return this._updateState&ve}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1,e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(this._updateState&ve||(this._updateState=this._updateState|ve,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~xe}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,i)=>this._propertyToAttribute(i,this[i],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}};mi=$e;st[mi]=!0;var gi=Element.prototype,ir=gi.msMatchesSelector||gi.webkitMatchesSelector;var Pt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ke=Symbol(),ht=class{constructor(t,e){if(e!==ke)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(Pt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},bi=a=>new ht(String(a),ke),ks=a=>{if(a instanceof ht)return a.cssText;if(typeof a=="number")return a;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${a}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},f=(a,...t)=>{let e=t.reduce((i,s,r)=>i+ks(s)+a[r+1],a[0]);return new ht(e,ke)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var vi={},v=class extends st{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let t=this.getStyles();if(Array.isArray(t)){let e=(r,n)=>r.reduceRight((l,c)=>Array.isArray(c)?e(c,l):(l.add(c),l),n),i=e(t,new Set),s=[];i.forEach(r=>s.unshift(r)),this._styles=s}else this._styles=t===void 0?[]:[t];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Pt){let i=Array.prototype.slice.call(e.cssRules).reduce((s,r)=>s+r.cssText,"");return bi(i)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){let t=this.constructor._styles;t.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(e=>e.cssText),this.localName):Pt?this.renderRoot.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){let e=this.render();super.update(t),e!==vi&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{let s=document.createElement("style");s.textContent=i.cssText,this.renderRoot.appendChild(s)}))}render(){return vi}};v.finalized=!0;v.render=hi;v.shadowRootOptions={mode:"open"};var Se={blue:["#dcecf8","#2e618c"],mint:["#ddf0e7","#306b55"],peach:["#f9e6d9","#8f5538"],lavender:["#ece5f7","#6d558c"],pink:["#f7e1ed","#8e496e"],amber:["#f5edcf","#786022"],green:["#ddf0e7","#306b55"],purple:["#ece5f7","#6d558c"],orange:["#f9e6d9","#8f5538"],teal:["#d9efec","#306b65"],red:["#f7e1df","#963f3b"]},xi=f`
 :host{display:block;--p-ink:var(--primary-text-color,#252c34);--p-muted:var(--secondary-text-color,#647078);--p-surface:var(--ha-card-background,var(--card-background-color,#fff));color:var(--p-ink);font-family:inherit}
 *{box-sizing:border-box}ha-card{display:block;padding:20px;border-radius:26px;background:var(--p-surface);border:1px solid var(--divider-color,#e8ebed);box-shadow:0 4px 18px #14283306;color:var(--p-ink)}
 header{display:flex;align-items:center;gap:12px;margin-bottom:20px}.icon{background:var(--p-tint);color:var(--p-accent);width:44px;height:44px;border-radius:15px;display:grid;place-items:center;flex-shrink:0}
 .heading{flex:1;min-width:0}h2{font-size:17px;line-height:1.3;letter-spacing:-.3px;margin:0;font-weight:650;overflow-wrap:anywhere}.subtitle,.muted{color:var(--p-muted);font-size:12px;line-height:1.6}.subtitle{margin-top:3px}.hero{background:var(--p-tint);color:var(--p-accent);border-radius:20px;padding:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;min-height:130px}.hero svg{width:98px;height:98px;flex-shrink:0}.hero .reading{font-size:32px;letter-spacing:-1px;line-height:1.2}.hero .caption{font-size:12px;margin-top:6px}.hero .right{text-align:right;min-width:0}.pill{font-size:11px;line-height:1.5;background:var(--p-tint);color:var(--p-accent);padding:6px 10px;border-radius:20px;max-width:50%;overflow-wrap:anywhere}.status{font-size:15px;font-weight:600;overflow-wrap:anywhere}
 .metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:16px}.metric{padding:13px 14px;border:1px solid var(--divider-color,#e8ebed);border-radius:16px;text-align:left;background:transparent;color:inherit;min-height:74px}.metric strong{display:block;font-size:22px;font-weight:550;letter-spacing:-.5px;font-variant-numeric:tabular-nums}.metric small{font-size:11px;color:var(--p-muted)}.metric .unit{font-size:12px;margin-left:4px;color:var(--p-muted)}
 button,select,input{font:inherit}button{cursor:pointer;touch-action:pan-y;min-height:44px;border:0;border-radius:13px;padding:10px 14px;background:var(--p-tint);color:var(--p-accent);font-weight:550;font-size:13px}button:disabled{opacity:.45;cursor:default}button:focus-visible,select:focus-visible,input:focus-visible{outline:2px solid var(--p-accent);outline-offset:3px}.actions{display:flex;gap:8px;flex-wrap:wrap}.actions button{flex:1;min-width:80px}.control{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--divider-color,#e8ebed);font-size:13px}.control span{min-width:0;overflow-wrap:anywhere}.control select{max-width:60%}select,input{background:var(--p-surface);color:var(--p-ink);border:1px solid var(--divider-color,#dce2e6);border-radius:10px;padding:10px;min-height:44px;max-width:100%}input[type=number]{width:100px}.error{background:#fae3e0;color:#8e302a;border-radius:12px;padding:12px;font-size:13px;margin-top:12px}.empty{padding:20px;color:var(--p-muted);font-size:14px;line-height:1.7}.foot{font-size:11px;color:var(--p-muted);margin-top:14px}.map{width:100%;border-radius:16px;margin-top:16px;display:block}.zones{margin-top:16px}h3{font-size:13px;font-weight:600;margin:18px 0 10px}.temperature{display:flex;gap:12px;align-items:center;justify-content:center;margin-bottom:16px}.temperature strong{font-size:30px;font-weight:550}.temperature button{font-size:20px;min-width:44px}.editor{display:grid;gap:14px;padding:12px}.editor label{display:grid;gap:6px;font-size:13px}.editor select,.editor input{width:100%}.editor .pair{display:grid;grid-template-columns:1fr 1fr;gap:10px}.editor details{border:1px solid var(--divider-color,#ddd);border-radius:14px;padding:12px}.editor summary{cursor:pointer;font-weight:600;font-size:13px}.editor .check{display:flex;align-items:center;gap:10px;margin:10px 0}.editor .check input{width:18px;min-height:18px}.editor .hint{font-size:12px;color:var(--p-muted);line-height:1.6}.editor button{min-height:44px}.section-label{font-size:10px;text-transform:uppercase;letter-spacing:1.6px;color:var(--p-muted);margin:20px 0 10px}
 @media(prefers-reduced-motion:no-preference){button{transition:filter .15s}button:hover{filter:brightness(.96)}}
`;var x=class extends v{static get properties(){return{hass:{},config:{},error:{},busy:{}}}static get styles(){return xi}setConfig(t){this.config={...t},this.error=""}getCardSize(){return 5}getGridOptions(){return{columns:6,min_columns:3,rows:"auto"}}palette(t="blue"){let[e,i]=Se[t]||Se.blue;return`--p-tint:${e};--p-accent:${i}`}info(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}async call(t,e,i={},s){if(this.busy)return;let[r,n]=String(t||"").split(".");if(!r||!n||!this.hass?.services?.[r]?.[n]){this.error="Questo comando non \xE8 disponibile.";return}this.busy=!0,this.error="";try{await this.hass.callService(r,n,{...i,...e?{entity_id:e}:{}},s)}catch(l){this.error=l.message||"Comando non riuscito."}finally{this.busy=!1}}guardPress(t){this._origin={x:t.clientX,y:t.clientY,id:t.pointerId},this._moved=!1}guardMove(t){this._origin?.id===t.pointerId&&Math.hypot(t.clientX-this._origin.x,t.clientY-this._origin.y)>10&&(this._moved=!0)}guardCancel(){this._moved=!0}guardClick(t){t.detail!==0&&this._moved&&(t.stopPropagation(),t.preventDefault())}connectedCallback(){super.connectedCallback(),this._down=t=>this.guardPress(t),this._move=t=>this.guardMove(t),this._cancel=()=>this.guardCancel(),this._click=t=>this.guardClick(t),this.addEventListener("pointerdown",this._down,!0),this.addEventListener("pointermove",this._move,!0),this.addEventListener("pointercancel",this._cancel,!0),this.addEventListener("click",this._click,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerdown",this._down,!0),this.removeEventListener("pointermove",this._move,!0),this.removeEventListener("pointercancel",this._cancel,!0),this.removeEventListener("click",this._click,!0)}feedback(){return this.error?o`<div class="error" role="alert">${this.error}</div>`:""}},It=a=>({on:"Acceso",off:"Spento",unavailable:"Non disponibile",unknown:"Stato sconosciuto",cleaning:"In pulizia",mowing:"In taglio",docked:"Alla base",paused:"In pausa",returning:"Ritorno alla base",idle:"In attesa",error:"Richiede attenzione",running:"In funzione",washing:"Lavaggio",drying:"Asciugatura",finished:"Terminato",cool:"Raffreddamento",heat:"Riscaldamento",auto:"Automatico",heat_cool:"Caldo / freddo",dry:"Deumidificazione",fan_only:"Ventilazione"})[a]||a||"Non configurato";var D={washer:["Lavatrice","mdi:washing-machine","blue","washer|washing machine|lavatrice"],dryer:["Asciugatrice","mdi:tumble-dryer","peach","dryer|asciugatrice"],dishwasher:["Lavastoviglie","mdi:dishwasher","blue","dishwasher|lavastoviglie"],refrigerator:["Frigorifero","mdi:fridge-outline","mint","refrigerator|fridge|frigorifero"],freezer:["Congelatore","mdi:fridge-bottom","blue","freezer|congelatore"],wine_cooler:["Cantinetta","mdi:glass-wine","lavender","wine cooler|cantinetta"],oven:["Forno","mdi:stove","peach","oven|forno"],microwave:["Microonde","mdi:microwave","peach","microwave|microonde"],coffee:["Macchina del caff\xE8","mdi:coffee-maker-outline","peach","coffee|caffe|caff\xE8"],hood:["Cappa","mdi:air-filter","mint","hood|cappa"],hob:["Piano induzione","mdi:stove","peach","hob|cooktop|induzione|piano cottura|pianocottura"],dehumidifier:["Deumidificatore","mdi:air-humidifier-off","blue","dehumidifier|deumidificatore"],humidifier:["Umidificatore","mdi:air-humidifier","blue","humidifier|umidificatore"],air_purifier:["Purificatore aria","mdi:air-purifier","mint","air purifier|purificatore aria"],water_purifier:["Depuratore acqua","mdi:water-check-outline","mint","water purifier|water filter|reverse osmosis|depuratore|osmosi"],fan:["Ventilatore","mdi:fan","mint","fan|ventilatore"],ventilation:["Ventilazione","mdi:hvac","mint","ventilation|ventilazione|vmc"],water_heater:["Scaldacqua","mdi:water-boiler","peach","water heater|boiler|scaldacqua"],vacuum:["Robot pulizia","mdi:robot-vacuum","lavender","vacuum|aspirapolvere|robot pulizia"],floor_cleaner:["Lavapavimenti","mdi:vacuum-outline","lavender","floor cleaner|lavapavimenti|aspirapavimenti"],lawn_mower:["Tagliaerba","mdi:robot-mower-outline","mint","lawn mower|tagliaerba"],robot_dock:["Base di pulizia","mdi:robot-vacuum","lavender","dock|base lavaggio|base svuotamento|base di pulizia"],generic:["Dispositivo","mdi:devices","blue","^$"]},mt=["vacuum","floor_cleaner","lawn_mower","robot_dock"],H={power:["Potenza","power"],energy:["Energia totale","energy"],cycle_energy:["Energia ciclo",null],remaining:["Tempo restante",null],progress:["Avanzamento",null],temperature:["Temperatura","temperature"],humidity:["Umidit\xE0","humidity"],battery:["Batteria","battery"],water_quality:["TDS uscita",null],water_input:["TDS ingresso",null],water_used:["Acqua erogata",null],tank:["Serbatoio",null],filter:["Filtro residuo",null],area:["Area pulita",null]},z=a=>(a||"").split(".")[0],ft=a=>!!a&&!["unknown","unavailable"].includes(a.state),at=a=>a==null||String(a).trim()===""||!Number.isFinite(Number(a))?null:Number(a);function Mt(a,t={}){let e=z(a?.entity_id);if(e==="vacuum"||e==="lawn_mower"||e==="water_heater")return e;if(e==="humidifier")return a.attributes?.device_class==="dehumidifier"?"dehumidifier":"humidifier";let i=[t.name_by_user,t.name,t.model,a?.attributes?.friendly_name,a?.entity_id].filter(Boolean).join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replaceAll("_"," "),s=Object.entries(D).filter(([r,n])=>r!=="generic"&&new RegExp(`(^|\\b)(${n[3]})(\\b|$)`,"i").test(i));return s.length===1?s[0][0]:"generic"}function Ce(a,t,e){let i=t?.entities||[],s=i.find(u=>u.entity_id===e.entity),r=e.device_id||s?.device_id,n=r?i.filter(u=>u.device_id===r&&!u.disabled_by).map(u=>u.entity_id):[e.entity].filter(Boolean),l=(t?.devices||[]).find(u=>u.id===r)||{},c=n.map(u=>a.states[u]).filter(Boolean),d=a.states[e.entity]||c.find(u=>["vacuum","lawn_mower","humidifier","water_heater","fan"].includes(z(u.entity_id)))||c[0],g={},p=[];for(let[u,[,_]]of Object.entries(H)){let E=c.filter(S=>z(S.entity_id)==="sensor"&&(_?S.attributes?.device_class===_&&(u!=="energy"||!yi("cycle_energy",S)):yi(u,S)));E.length===1?g[u]=E[0].entity_id:E.length>1&&p.push(u)}let m=c.filter(u=>["button","select","number","switch","input_button","input_select","input_number","input_boolean","fan","humidifier"].includes(z(u.entity_id))).map(u=>({entity:u.entity_id,name:u.attributes?.friendly_name||u.entity_id})),h=c.filter(u=>["camera","image"].includes(z(u.entity_id)));return{status_entities:c.filter(u=>u.entity_id!==d?.entity_id&&(z(u.entity_id)==="binary_sensor"||z(u.entity_id)==="sensor"&&at(u.state)===null&&/filter|filtro|maintenance|manutenzione|tank|serbatoio|salt|sale|rinse|brillantante/i.test(u.entity_id+" "+u.attributes?.friendly_name))).map(u=>u.entity_id),entity:d?.entity_id||"",profile:Mt(d,l),metrics:g,controls:m,map_entity:h.length===1?h[0].entity_id:"",device_id:r,ambiguous:p,siblings:n}}function yi(a,t){let e=(t.entity_id+" "+(t.attributes?.friendly_name||"")).toLowerCase();return{cycle_energy:/cycle.*energy|energia.*ciclo/,remaining:/remaining|restante|residuo.*tempo/,progress:/progress|avanzamento/,water_quality:/(tds.*(out|uscita|purified))|((out|uscita|purified).*tds)/,water_input:/(tds.*(inlet|ingresso|input))|((inlet|ingresso|input).*tds)/,water_used:/water.*(used|dispensed)|acqua.*(erogata|consumata)/,tank:/tank|serbatoio/,filter:/filter.*(life|remaining)|filtro.*residu/,area:/cleaned.*area|area.*(pulita|tagliata)/}[a]?.test(e)||!1}function _i(a,t={}){if(!a)return[];let e=z(a.entity_id),i=Number(a.attributes?.supported_features||0);return(e==="vacuum"?[[8192,"start","Avvia"],[4,"pause","Pausa"],[8,"stop","Ferma"],[16,"return_to_base","Alla base"],[512,"locate","Trova"]]:e==="lawn_mower"?[[1,"start_mowing","Taglia"],[2,"pause","Pausa"],[4,"dock","Alla base"],[8,"stop","Ferma"]]:[]).filter(([r,n])=>i&r&&t[e]?.[n]).map(([,r,n])=>({name:n,action:`${e}.${r}`,entity:a.entity_id}))}function wi(a,t){if(!ft(t))return null;let e=at(t.state);if(e===null)return null;let i=t.attributes?.unit_of_measurement||"";return a==="power"?i==="kW"?{value:e*1e3,unit:"W"}:i==="W"?{value:e,unit:i}:null:a==="energy"||a==="cycle_energy"?i==="Wh"?{value:e/1e3,unit:"kWh"}:i==="kWh"?{value:e,unit:i}:null:{value:e,unit:i}}function $i(a){let t=["power","energy"],e=["cycle_energy","remaining","progress"],i=a==="water_purifier"?["water_quality","water_input","water_used","tank","filter"]:["vacuum","floor_cleaner","lawn_mower","robot_dock"].includes(a)?["battery","area","remaining","progress","tank","filter"]:["washer","dryer","dishwasher","oven","microwave","coffee"].includes(a)?[...e,"temperature","tank","filter"]:["refrigerator","freezer","wine_cooler","water_heater"].includes(a)?["temperature"]:["humidity","temperature","filter","tank"];return a==="generic"?Object.keys(H):[...t,...i]}function L(a){let t;return a==="lights"?t=w`<path d="M41 77c-1-13-18-20-18-39a37 37 0 0 1 74 0c0 19-17 26-18 39M42 89h36M46 101h28M52 111h16"/>`:a==="temperature"?t=w`<path d="M49 66V25a11 11 0 0 1 22 0v41a23 23 0 1 1-22 0Z"/><path d="M60 40v38"/><circle cx="60" cy="87" r="9" fill="currentColor" opacity=".2"/><path d="M81 28h10M81 42h7M81 56h10"/>`:a==="alarm"?t=w`<path d="M60 10 99 27 95 67 81 88 60 106 39 88 25 67 21 27Z"/><circle cx="60" cy="48" r="5"/><path d="M60 53v17"/>`:a==="dishwasher"?t=w`<rect x="21" y="10" width="78" height="99" rx="14"/><path d="M21 35h78M32 23h20M36 80h48M36 91h48"/><path d="M42 76V49M54 76V45M66 76V45M78 76V49"/>`:a==="oven"?t=w`<rect x="21" y="10" width="78" height="99" rx="14"/><rect x="32" y="44" width="56" height="50" rx="6"/><path d="M38 24h10M69 24h10M40 82h40"/>`:a==="microwave"?t=w`<rect x="10" y="28" width="100" height="67" rx="12"/><rect x="21" y="40" width="62" height="42" rx="6"/><circle cx="97" cy="49" r="3"/><circle cx="97" cy="65" r="3"/>`:a==="hob"?t=w`<rect x="13" y="17" width="94" height="86" rx="12"/><circle cx="38" cy="42" r="15"/><circle cx="80" cy="42" r="13"/><circle cx="39" cy="79" r="13"/><circle cx="80" cy="78" r="16"/>`:a==="hood"?t=w`<path d="M45 12h30v38l30 30H15l30-30Z"/><path d="M15 80v12h90V80M40 107h40M44 69h32"/>`:a==="coffee"?t=w`<rect x="25" y="13" width="70" height="94" rx="12"/><path d="M35 43h50M55 44v14M40 96h42"/><path d="M43 66h31v18H43ZM74 68h10v10H74"/>`:a==="generic"?t=w`<rect x="15" y="20" width="40" height="40" rx="10"/><rect x="65" y="20" width="40" height="40" rx="10"/><rect x="15" y="70" width="40" height="40" rx="10"/><path d="M66 90h38M85 71v38"/>`:a==="water_purifier"?t=w`<rect x="22" y="12" width="72" height="94" rx="18"/><path d="M36 36h44M42 48h32M48 61v18h25V61M48 88h25"/><path d="M60 57c-10-12 0-20 0-20s10 8 0 20Z" fill="currentColor" opacity=".25"/>`:["vacuum","floor_cleaner","robot_dock"].includes(a)?t=w`<circle cx="60" cy="64" r="42"/><circle cx="60" cy="64" r="32" opacity=".35"/><rect x="47" y="24" width="26" height="20" rx="9"/><path d="M45 82h30M56 57h8"/>`:a==="lawn_mower"?t=w`<rect x="18" y="49" width="84" height="42" rx="19"/><rect x="38" y="30" width="42" height="35" rx="14"/><circle cx="34" cy="91" r="12"/><circle cx="86" cy="91" r="12"/><path d="M49 42h20"/>`:["refrigerator","freezer","wine_cooler"].includes(a)?t=w`<rect x="27" y="9" width="65" height="101" rx="13"/><path d="M27 47h65M40 26v10M40 62v16"/>`:a==="climate"?t=w`<rect x="9" y="22" width="102" height="48" rx="13"/><path d="M20 54h80M29 64h62M32 82v16M60 82v24M88 82v16"/><circle cx="94" cy="37" r="2" fill="currentColor"/>`:["dehumidifier","humidifier","air_purifier","fan","ventilation","water_heater"].includes(a)?t=w`<rect x="28" y="13" width="64" height="95" rx="20"/><path d="M41 30h38M41 38h38M41 46h38M46 87h28"/><circle cx="60" cy="66" r="5"/>`:t=w`<rect x="21" y="10" width="78" height="99" rx="14"/><path d="M21 35h78M32 23h20"/><circle cx="60" cy="70" r="24"/><path d="M40 73q10-9 20 0t20 0" opacity=".5"/><circle cx="83" cy="23" r="3" fill="currentColor"/>`,o`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t}</svg>`}var gt=class extends x{static getConfigElement(){return document.createElement("pastel-appliance-card-editor")}static getStubConfig(){return{profile:"generic",entity:"",metrics:{},controls:[]}}setConfig(t){if(super.setConfig(t),t.controls&&!Array.isArray(t.controls))throw new Error("controls deve essere una lista");if(t.controls?.some(e=>!e||typeof e!="object"||e.action&&typeof e.action!="string"))throw new Error("Ogni controllo deve indicare entity oppure action come testo");if(t.status_entities&&!Array.isArray(t.status_entities))throw new Error("status_entities deve essere una lista");if(t.zones&&!Array.isArray(t.zones))throw new Error("zones deve essere una lista");if(t.metrics&&(typeof t.metrics!="object"||Array.isArray(t.metrics)))throw new Error("metrics deve essere un oggetto")}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=D[t.profile]||D.generic,i=this.hass.states[t.entity],s=t.title||e[0],r=ft(i),n=t.metrics||{};return o`<ha-card style=${this.palette(t.color||e[2])}>
   <header><div class="icon"><ha-icon icon=${e[1]}></ha-icon></div><div class="heading"><h2>${s}</h2><div class="subtitle">${t.subtitle||e[0]}</div></div><span class="pill">${It(i?.state)}</span></header>
   <div class="hero">${L(t.profile)}<div class="right"><div class="status">${It(i?.state)}</div><div class="caption">${i?.attributes?.friendly_name||"Scegli il dispositivo nell\u2019editor"}</div></div></div>
   ${Object.keys(n).length?o`<div class="metrics">${Object.entries(n).filter(([,l])=>l).map(([l,c])=>{let d=wi(l,this.hass.states[c]);return o`<button class="metric" @click=${()=>this.info(c)}><small>${H[l]?.[0]||l}</small><strong>${d?new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:2}).format(d.value):"\u2014"}<span class="unit">${d?.unit||""}</span></strong></button>`})}</div>`:""}
   <div class="actions">${_i(i,this.hass.services).filter(l=>!(t.hidden_actions||[]).includes(l.action)).map(l=>o`<button ?disabled=${!r||this.busy} @click=${()=>this.call(l.action,l.entity)}>${l.name}</button>`)}</div>
   ${this.nativeSettings(i)}
   ${(t.controls||[]).map(l=>this.control(l))}
   ${(t.status_entities||[]).length?o`<h3>Stato e manutenzione</h3>${t.status_entities.map(l=>{let c=this.hass.states[l];return o`<div class="control"><span>${c?.attributes?.friendly_name||l}</span><button @click=${()=>this.info(l)}>${It(c?.state)}</button></div>`})}`:""}
   ${this.robotExtras()}
   ${t.entity?"":o`<div class="empty">Apri l’editor, scegli un dispositivo e controlla le associazioni suggerite.</div>`}
   ${this.feedback()}
  </ha-card>`}control(t){if(t.action)return o`<div class="control"><span>${t.name||"Azione"}</span><button ?disabled=${this.busy||!this.hass.services?.[t.action.split(".")[0]]?.[t.action.split(".")[1]]} @click=${()=>this.call(t.action,t.entity,t.data||{},t.target)}>${t.button_label||"Esegui"}</button></div>`;let e=this.hass.states[t.entity],i=z(t.entity),s=t.name||e?.attributes?.friendly_name||t.entity,r=!e||e.state==="unavailable"||!["button","input_button"].includes(i)&&e.state==="unknown"||this.busy;if(["script","scene"].includes(i))return o`<div class="control"><span>${s}</span><button ?disabled=${r||!this.hass.services?.[i]?.turn_on} @click=${()=>this.call(`${i}.turn_on`,t.entity)}>Esegui</button></div>`;if(["select","input_select"].includes(i))return o`<label class="control"><span>${s}</span><select aria-label=${s} ?disabled=${r||!this.hass.services?.[i]?.select_option} .value=${e?.state||""} @change=${n=>this.call(`${i}.select_option`,t.entity,{option:n.target.value})}><option value="" disabled>Scegli</option>${(e?.attributes?.options||[]).map(n=>o`<option value=${n} ?selected=${n===e.state}>${n}</option>`)}</select></label>`;if(["number","input_number"].includes(i))return o`<label class="control"><span>${s}</span><input aria-label=${s} type="number" ?disabled=${r||!this.hass.services?.[i]?.set_value} min=${e?.attributes?.min??0} max=${e?.attributes?.max??100} step=${e?.attributes?.step??1} .value=${ft(e)?e.state:""} @change=${n=>{n.target.checkValidity()&&at(n.target.value)!==null&&this.call(`${i}.set_value`,t.entity,{value:Number(n.target.value)})}}></label>`;if(["button","input_button"].includes(i))return o`<div class="control"><span>${s}</span><button ?disabled=${r||!this.hass.services?.[i]?.press} @click=${()=>this.call(`${i}.press`,t.entity)}>${t.button_label||"Esegui"}</button></div>`;if(["switch","input_boolean","fan","humidifier"].includes(i)){let n=e?.state==="on"?"turn_off":"turn_on";return o`<div class="control"><span>${s}<br><small class="muted">Alimentazione</small></span><button ?disabled=${r||!this.hass.services?.[i]?.[n]} @click=${()=>this.call(`${i}.${n}`,t.entity)}>${e?.state==="on"?"Spegni":"Accendi"}</button></div>`}return o`<div class="control"><span>${s}</span><button @click=${()=>this.info(t.entity)}>Dettagli</button></div>`}nativeSettings(t){if(!t)return"";let e=z(t.entity_id),i=t.attributes||{},s=this.hass.services?.[e]||{},r=!t||t.state==="unavailable"||!["button","input_button"].includes(e)&&t.state==="unknown"||this.busy,n=(c,d,g,p,m)=>d?.length&&s[p]?o`<label class="control"><span>${c}</span><select aria-label=${c} ?disabled=${r} @change=${h=>this.call(`${e}.${p}`,t.entity_id,{[m]:h.target.value})}>${d.map(h=>o`<option value=${h} ?selected=${h===g}>${h}</option>`)}</select></label>`:"",l=(c,d,g,p,m,h,b)=>at(d)!==null&&s[h]?o`<label class="control"><span>${c}</span><input type="number" aria-label=${c} .value=${String(d)} min=${g} max=${p} step=${m} ?disabled=${r} @change=${u=>{u.target.checkValidity()&&at(u.target.value)!==null&&this.call(`${e}.${h}`,t.entity_id,{[b]:Number(u.target.value)})}}></label>`:"";return e==="vacuum"?Number(i.supported_features)&32?n("Aspirazione",i.fan_speed_list,i.fan_speed,"set_fan_speed","fan_speed"):"":e==="humidifier"?o`${l("Umidit\xE0 desiderata",i.humidity,i.min_humidity??0,i.max_humidity??100,1,"set_humidity","humidity")}${Number(i.supported_features)&1?n("Modalit\xE0",i.available_modes,i.mode,"set_mode","mode"):""}`:e==="fan"?o`${Number(i.supported_features)&1?l("Velocit\xE0 %",i.percentage,0,100,i.percentage_step||1,"set_percentage","percentage"):""}${Number(i.supported_features)&8?n("Profilo",i.preset_modes,i.preset_mode,"set_preset_mode","preset_mode"):""}`:e==="water_heater"?o`${Number(i.supported_features)&1?l("Temperatura desiderata",i.temperature,i.min_temp??30,i.max_temp??90,1,"set_temperature","temperature"):""}${Number(i.supported_features)&2?n("Modalit\xE0",i.operation_list,i.operation_mode,"set_operation_mode","operation_mode"):""}`:""}robotExtras(){return o``}},Lt=class extends gt{static getConfigElement(){return document.createElement("pastel-robot-card-editor")}static getStubConfig(){return{profile:"vacuum",entity:"",metrics:{},controls:[]}}robotExtras(){let t=this.config,e=this.hass.states[t.map_entity],i=ft(e)?e.attributes?.entity_picture:null,s=i&&(i.startsWith("/")&&!i.startsWith("//")||/^https?:\/\//.test(i))?this.hass.hassUrl?this.hass.hassUrl(i):i:null;return o`${s?o`<img class="map" src=${s} alt="Mappa del robot" loading="lazy">`:t.map_entity?o`<div class="foot">Mappa non disponibile.</div>`:""}
   ${(t.zones||[]).length?o`<div class="zones"><h3>Stanze e zone</h3>${t.zones.map(r=>this.control(r))}</div>`:""}`}};var Ot=new WeakMap;async function ze(a,{refresh:t=!1}={}){let e=a.connection||a;if(!t&&Ot.has(e))return Ot.get(e);let i=Promise.all([a.callWS({type:"config/entity_registry/list"}),a.callWS({type:"config/device_registry/list"})]).then(([s,r])=>({entities:s,devices:r})).catch(s=>{throw Ot.delete(e),s});return Ot.set(e,i),i}function ki(a,t,{robot:e=!1}={}){let i=new Map,s=new Set;for(let n of t.entities||[]){if(s.add(n.entity_id),n.disabled_by||!a.states[n.entity_id])continue;let l=n.device_id?`device:${n.device_id}`:`entity:${n.entity_id}`;i.has(l)||i.set(l,{device_id:n.device_id||"",entities:[]}),i.get(l).entities.push(a.states[n.entity_id])}for(let n of Object.values(a.states))s.has(n.entity_id)||i.set(`entity:${n.entity_id}`,{device_id:"",entities:[n]});let r=[];for(let[n,l]of i){let c=(t.devices||[]).find(h=>h.id===l.device_id)||{},d=Mt(null,c),g=l.entities.map(h=>({s:h,profile:d!=="generic"?d:Mt(h,c)})).filter(h=>h.profile!=="generic"&&(!e||mt.includes(h.profile)));if([...new Set(g.map(h=>h.profile))].length!==1)continue;let m=g.find(h=>["vacuum","lawn_mower","humidifier","water_heater","fan"].includes(z(h.s.entity_id)))||g.find(h=>/status|state|stato|operation/.test(h.s.entity_id))||g[0];r.push({key:n,device_id:l.device_id,entity:m.s.entity_id,profile:m.profile,name:c.name_by_user||c.name||m.s.attributes.friendly_name||m.s.entity_id,count:l.entities.length})}return r.sort((n,l)=>n.name.localeCompare(l.name))}var vt=class extends x{static get properties(){return{...super.properties,suggestion:{},loading:{},registry:{},showAllMetrics:{}}}updated(){this.hass&&!this._discoveryStarted&&(this._discoveryStarted=!0,this.loadDevices())}chooseCandidate(t){let e=this.detected().find(i=>i.key===t);e&&(this.emit({device_id:e.device_id,entity:e.entity,profile:e.profile,metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]}),this.suggestion={...Ce(this.hass,this.registry,e),profile:e.profile})}detected(){return this.hass&&this.registry?ki(this.hass,this.registry,{robot:!!this.constructor.robot}):[]}setConfig(t){super.setConfig(t),this.config={...t,metrics:{...t.metrics||{}},controls:[...t.controls||[]]}}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}async scan(){this.loading=!0,this.error="",this.suggestion=null;let t=`${this.config.entity}|${this.config.device_id}`;try{let e=await ze(this.hass,{refresh:!0});this.registry=e,t===`${this.config.entity}|${this.config.device_id}`&&(this.suggestion=Ce(this.hass,e,this.config))}catch{this.error="Impossibile leggere i dispositivi. Puoi comunque associare tutte le entit\xE0 manualmente."}finally{this.loading=!1}}async loadDevices(){this.loading=!0;try{this.registry=await ze(this.hass)}catch{this.error="Elenco dispositivi non disponibile: seleziona un\u2019entit\xE0."}finally{this.loading=!1}}options(t){return Object.values(this.hass.states).filter(e=>!t||t.includes(e.entity_id.split(".")[0])).sort((e,i)=>e.entity_id.localeCompare(i.entity_id))}entitySelect(t,e,i,s="Entit\xE0"){return o`<select aria-label=${s} .value=${t||""} @change=${r=>e(r.target.value)}><option value="">Nessuna</option>${this.options(i).map(r=>o`<option value=${r.entity_id} ?selected=${t===r.entity_id}>${r.attributes.friendly_name||r.entity_id} · ${r.entity_id}</option>`)}</select>`}render(){if(!this.config||!this.hass)return o``;let t=this.config,e=this.suggestion,i=this.constructor.robot;return o`<div class="editor" style=${this.palette(t.color)}>
  <label>Elettrodomestici rilevati${this.loading?o`<span class="hint">Ricerca automatica in corso…</span>`:o`<select aria-label="Elettrodomestici rilevati" @change=${s=>this.chooseCandidate(s.target.value)}><option value="">Scegli un dispositivo rilevato</option>${this.detected().map(s=>o`<option value=${s.key} ?selected=${s.device_id?t.device_id===s.device_id:t.entity===s.entity}>${D[s.profile][0]} · ${s.name} (${s.count} entità)</option>`)}</select>`}</label>
  <p class="hint">${this.registry&&!this.detected().length?"Nessun elettrodomestico riconosciuto. Puoi scegliere il dispositivo manualmente.":"Scegli un elettrodomestico: sensori e comandi collegati vengono proposti automaticamente. Verifica le associazioni prima di applicarle."}</p>
  <details><summary>Scelta manuale o dispositivo non riconosciuto</summary>
  <label>Dispositivo <button ?disabled=${this.loading} @click=${()=>this.loadDevices()}>Carica elenco dispositivi</button>${this.registry?o`<select aria-label="Dispositivo" .value=${t.device_id||""} @change=${s=>{this.suggestion=null,this.emit({device_id:s.target.value,entity:"",metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]})}}><option value="">Seleziona tramite entità</option>${this.registry.devices.map(s=>o`<option value=${s.id} ?selected=${t.device_id===s.id}>${s.name_by_user||s.name||s.model||s.id}</option>`)}</select>`:""}</label>
  <label>Entità principale ${this.entitySelect(t.entity,s=>{this.suggestion=null,this.emit({entity:s,device_id:"",metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]})},null,"Entit\xE0 principale")}</label>
  <button ?disabled=${this.loading||!t.entity&&!t.device_id} @click=${()=>this.scan()}>${this.loading?"Ricerca in corso\u2026":"Cerca entit\xE0 e controlli associati"}</button>
  </details>
  ${e?o`<div class="hint">${e.siblings.length} entità associate. Profilo proposto: <strong>${D[e.profile][0]}</strong>. Le associazioni verranno salvate solo quando le applichi. ${e.ambiguous.length?`Da scegliere manualmente: ${e.ambiguous.map(s=>H[s][0]).join(", ")}.`:""}</div><button @click=${()=>{let{siblings:s,ambiguous:r,...n}=e;this.emit({...n,profile:i&&!mt.includes(e.profile)?"vacuum":e.profile}),this.suggestion=null}}>Applica le associazioni proposte</button>`:""}
  <div class="pair"><label>Nome<input aria-label="Nome" .value=${t.title||""} @change=${s=>this.emit({title:s.target.value})}></label><label>Colore<select aria-label="Colore" @change=${s=>this.emit({color:s.target.value})}>${["blue","mint","peach","lavender","pink","amber"].map(s=>o`<option value=${s} ?selected=${(t.color||"blue")===s}>${s}</option>`)}</select></label></div>
  <label>Tipo dispositivo<select aria-label="Tipo dispositivo" @change=${s=>this.emit({profile:s.target.value})}>${Object.entries(D).filter(([s])=>!i||mt.includes(s)||s==="generic").map(([s,r])=>o`<option value=${s} ?selected=${t.profile===s}>${r[0]}</option>`)}</select></label>
  <details open><summary>Dati e consumi</summary><p class="hint">Puoi scegliere sensori esterni al dispositivo, come una presa con misurazione. L’energia del ciclo richiede un sensore dedicato.</p><label class="check"><input type="checkbox" .checked=${!!this.showAllMetrics} @change=${s=>{this.showAllMetrics=s.target.checked}}>Mostra tutti i tipi di dato</label>${Object.entries(H).filter(([s])=>this.showAllMetrics||$i(t.profile).includes(s)||t.metrics?.[s]).map(([s,[r]])=>o`<label>${r}${this.entitySelect(t.metrics?.[s],n=>{let l={...t.metrics};n?l[s]=n:delete l[s],this.emit({metrics:l})},["sensor"],r)}</label>`)}</details>
  <details open><summary>Controlli (${t.controls?.length||0})</summary><p class="hint">Rimuovi i comandi che non vuoi mostrare. Gli interruttori sono indicati come alimentazione, mai come avvio del programma.</p>${(t.controls||[]).map((s,r)=>o`<div class="control"><span>${s.name||s.entity||s.action}</span><button aria-label=${`Rimuovi ${s.name||s.entity}`} @click=${()=>this.emit({controls:t.controls.filter((n,l)=>l!==r)})}>Rimuovi</button></div>`)}<label>Aggiungi controllo${this.entitySelect("",s=>{s&&!t.controls?.some(r=>r.entity===s)&&this.emit({controls:[...t.controls||[],{entity:s,name:this.hass.states[s]?.attributes.friendly_name||s}]})},["button","input_button","switch","input_boolean","select","input_select","number","input_number","fan","humidifier","script","scene"],"Aggiungi controllo")}</label></details>
  <details><summary>Stato e manutenzione</summary>${(t.status_entities||[]).map((s,r)=>o`<div class="control"><span>${this.hass.states[s]?.attributes?.friendly_name||s}</span><button @click=${()=>this.emit({status_entities:t.status_entities.filter((n,l)=>r!==l)})}>Rimuovi</button></div>`)}${this.entitySelect("",s=>{s&&!t.status_entities?.includes(s)&&this.emit({status_entities:[...t.status_entities||[],s]})},["sensor","binary_sensor"],"Aggiungi stato manutenzione")}</details>
  ${i?o`<details open><summary>Mappa e zone</summary><label>Mappa${this.entitySelect(t.map_entity,s=>this.emit({map_entity:s}),["image","camera"],"Mappa")}</label><p class="hint">La mappa è un’immagine fornita dall’integrazione. Per le zone associa un selettore tra i controlli oppure un pulsante/script qui sotto.</p>${(t.zones||[]).map((s,r)=>o`<div class="control"><span>${s.name||s.entity}</span><button @click=${()=>this.emit({zones:t.zones.filter((n,l)=>r!==l)})}>Rimuovi</button></div>`)}${this.entitySelect("",s=>{s&&this.emit({zones:[...t.zones||[],{entity:s,name:this.hass.states[s]?.attributes.friendly_name||s,...s.startsWith("script.")?{action:"script.turn_on"}:{}}]})},["button","input_button","script"],"Aggiungi zona")}</details>`:""}
  ${this.feedback()}
 </div>`}},bt=class extends vt{};si(bt,"robot",!0);function k(a,t,e){let i=a?.states?.[t];if(!i||["unknown","unavailable"].includes(i.state))return null;let s=e?i.attributes?.[e]:i.state;if(s==null||String(s).trim()===""||typeof s=="boolean")return null;let r=Number(s);return Number.isFinite(r)?r:null}function Si(a){let t=(a.steppers||[]).find(e=>e.show_as_temperature&&e.entity);return t?{entity:t.entity,attribute:t.attribute}:{entity:a.temperature_entity,attribute:a.temperature_attribute}}function Ss(a,t){let e=a?.states?.[t.entity];if(!e)return null;let i=t.attribute?e.attributes?.[t.attribute]:e.state;return i==null||["unknown","unavailable"].includes(e.state)&&String(i)!==String(t.state)?null:t.operator==="not_equals"?String(i)!==String(t.state):String(i)===String(t.state)}function Ee(a,t){for(let e of t.states||[]){if(!e.conditions?.length)continue;let i=e.conditions.map(n=>Ss(a,n));if(e.match==="any"?i.includes(!0):i.every(n=>n===!0))return{...e,timer_entity:e.timer_entity||e.conditions.find(n=>n.entity?.startsWith("timer.")&&a?.states?.[n.entity]?.state==="active")?.entity};if((e.match==="any"||!i.includes(!1))&&i.includes(null))return{label:"Stato non disponibile",badge:"Non disponibile",unknown:!0}}if(t.entity){let e=a?.states?.[t.entity];return!e||["unknown","unavailable"].includes(e.state)?{label:"Stato non disponibile",badge:"Non disponibile",unknown:!0}:{label:e.state,badge:e.state}}return t.states?.length?{id:"off",label:t.fallback_label||"Riscaldamento spento",badge:t.fallback_badge||"Spenta"}:{label:"Stufa non configurata",badge:"Da configurare",unknown:!0}}function Ci(a,t,e=Date.now()){let i=a?.states?.[t];if(!i||!["active","paused"].includes(i.state))return"";if(i.state==="active"){let s=Date.parse(i.attributes?.finishes_at);if(!Number.isFinite(s))return"";let r=Math.max(0,Math.ceil((s-e)/1e3)),n=Math.floor(r/3600),l=Math.floor(r%3600/60),c=r%60;return`${n?`${n}:`:""}${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`}return i.attributes?.remaining||""}function Ae(a){if(!a)return null;if(a.action)return{action:a.action,entity:a.entity,data:a.data||{},target:a.target};let t=a.entity?.split(".")[0],e={script:"turn_on",button:"press",input_button:"press",scene:"turn_on"}[t];return e?{action:`${t}.${e}`,entity:a.entity,data:a.data||{},target:a.target}:null}function xt(a,t){let e=Ae(t);if(!e)return!1;let[i,s]=e.action.split(".");if(!a?.services?.[i]?.[s])return!1;if(e.entity){let r=a?.states?.[e.entity];if(!r||r.state==="unavailable")return!1}return!0}function zi(a){for(let t of["states","controls","steppers"])if(a[t]!==void 0&&!Array.isArray(a[t]))throw new Error(`${t} deve essere una lista.`);for(let t of a.states||[]){if(!t||typeof t!="object"||!Array.isArray(t.conditions))throw new Error("Ogni stato richiede una lista di condizioni.");if(t.match&&!["all","any"].includes(t.match))throw new Error("Le condizioni devono corrispondere a tutte oppure almeno una.");for(let e of t.conditions)if(!e||typeof e.entity!="string"||e.state===void 0||e.state===null||e.operator&&!["equals","not_equals"].includes(e.operator))throw new Error("Ogni condizione richiede entit\xE0, stato e confronto validi.")}for(let t of[...a.controls||[],...(a.steppers||[]).flatMap(e=>[e?.minus,e?.plus]).filter(Boolean)])if(!t||typeof t!="object"||Array.isArray(t)||t.entity!==void 0&&typeof t.entity!="string"||t.action!==void 0&&(typeof t.action!="string"||!/^\w+\.\w+$/.test(t.action)))throw new Error("Configura un\u2019entit\xE0 oppure un\u2019azione valida per ogni comando.");for(let t of a.steppers||[])if(!t||typeof t!="object")throw new Error("Controllo \u2212/+ non valido.");for(let t of["pellet_warning_threshold"])if(a[t]!==void 0&&(!Number.isFinite(Number(a[t]))||Number(a[t])<0||Number(a[t])>100))throw new Error("La soglia pellet deve essere compresa tra 0 e 100.")}var Rt=class extends x{static getConfigElement(){return document.createElement("pastel-stove-card-editor")}static getStubConfig(){return{title:"Stufa",subtitle:"Stufa a pellet",color:"peach",controls:[],steppers:[],states:[]}}static get styles(){return[super.styles,f`
  .stove-actions{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:0}.stove-actions button{flex:1 1 90px;min-width:80px;overflow-wrap:anywhere;display:flex;align-items:center;justify-content:center;gap:6px}.stove-actions ha-icon{--mdc-icon-size:18px;flex-shrink:0}
  .stepper{display:flex;align-items:center;gap:7px}.stepper>span{min-width:38px;text-align:center;font-variant-numeric:tabular-nums}.stepper button{width:44px;padding:10px;font-size:19px}.stepper-label{min-width:0;overflow-wrap:anywhere}.stepper-label ha-icon{--mdc-icon-size:18px;margin-right:6px;color:var(--p-accent)}
  .pellet-head{display:flex;justify-content:space-between;align-items:center;gap:5px;flex-wrap:wrap}.pellet-warning{font-size:11px;color:var(--stove-warning,#963f3b)}.pellet-track{height:5px;border-radius:4px;background:var(--p-tint);overflow:hidden;margin-top:9px}.pellet-fill{height:100%;background:var(--p-accent);border-radius:4px}.metric strong{margin-top:5px}.metric{min-height:86px}.timer{font-size:12px;margin-top:8px;font-variant-numeric:tabular-nums}.control:last-child{padding-bottom:0}.control button:disabled{opacity:.4}.stove-unknown{opacity:.5}
 `]}setConfig(t){zi(t),super.setConfig(t)}connectedCallback(){super.connectedCallback(),this._clock=setInterval(()=>{this.hass&&this.config&&Ee(this.hass,this.config).timer_entity&&this.requestUpdate()},1e3)}disconnectedCallback(){clearInterval(this._clock),super.disconnectedCallback()}appearance(t){return[this.palette(t.color||"peach"),t.tint_color?`--p-tint:${t.tint_color}`:"",t.accent_color?`--p-accent:${t.accent_color}`:"",t.background_color?`--p-surface:${t.background_color}`:"",t.pellet_warning_color?`--stove-warning:${t.pellet_warning_color}`:"",t.text_color?`--p-ink:${t.text_color}`:"",t.secondary_text_color?`--p-muted:${t.secondary_text_color}`:""].filter(Boolean).join(";")}formatted(t){return t===null?"\u2014":new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:1}).format(t)}run(t){if(!xt(this.hass,t)||this.busy)return;let e=Ae(t);return this.call(e.action,e.entity,e.data,e.target)}illustration(t){let e=!t.unknown&&!["off","cooling"].includes(t.id);return o`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="26" y="10" width="68" height="99" rx="14"/><path d="M26 35h68M38 23h19M45 95h30M45 101h30"/><circle cx="80" cy="23" r="2.5" fill="currentColor"/><rect x="36" y="45" width="48" height="37" rx="6"/><g opacity=${e?"1":".2"}>${w`<path d="M60 76c-14-6-12-16-7-23 0 7 4 8 6 3 1-4 4-7 4-7s-1 8 5 13c7 7 1 12-8 14Z"/>`}</g></svg>`}metric(t,e,i,s=""){return o`<button class="metric" @click=${()=>this.info(i)}><small>${t}</small><strong>${this.formatted(e)}<span class="unit">${s}</span></strong></button>`}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=Si(t),i=Ee(this.hass,t),s=Ci(this.hass,i.timer_entity),r=k(this.hass,t.pellet_entity,t.pellet_attribute),n=r!==null&&r<Number(t.pellet_warning_threshold??20);return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:stove"}></ha-icon></div><div class="heading"><h2>${t.title||"Stufa"}</h2><div class="subtitle">${t.subtitle??"Stufa a pellet"}</div></div><span class="pill">${i.badge||i.label}</span></header>
  <div class="hero">${this.illustration(i)}<div class="right"><div class="status" role="status">${i.label}</div><div class="caption">${t.hero_caption??t.title??"Stufa"}</div>${s?o`<div class="timer">${s}${this.hass.states[i.timer_entity]?.state==="paused"?" \xB7 In pausa":""}</div>`:""}</div></div>
  ${e.entity||t.pellet_entity||t.ambient_entity?o`<div class="metrics">${e.entity?this.metric(t.temperature_label||"Temperatura impostata",k(this.hass,e.entity,e.attribute),e.entity,t.temperature_unit||"\xB0C"):""}${t.pellet_entity?o`<button class="metric" @click=${()=>this.info(t.pellet_entity)}><div class="pellet-head"><small>${t.pellet_label||"Pellet"}</small>${n?o`<span class="pellet-warning">${t.pellet_warning_label||"Rabbocca"}</span>`:""}</div><strong>${r===null?"\u2014":Math.round(Math.min(100,Math.max(0,r)))}<span class="unit">%</span></strong><div class="pellet-track" role="progressbar" aria-label=${t.pellet_label||"Pellet"} aria-valuemin="0" aria-valuemax="100" aria-valuenow=${r===null?"":Math.min(100,Math.max(0,r))} aria-valuetext=${r===null?"Non disponibile":`${Math.round(r)}%`}><div class="pellet-fill" style=${`width:${r===null?0:Math.min(100,Math.max(0,r))}%`}></div></div></button>`:""}${t.ambient_entity?this.metric(t.ambient_label||"Temperatura ambiente",k(this.hass,t.ambient_entity,t.ambient_attribute),t.ambient_entity,t.temperature_unit||"\xB0C"):""}</div>`:""}
  <div class="stove-actions">${(t.controls||[]).map(l=>o`<button style=${[l.color?`color:${l.color}`:"",l.background?`background:${l.background}`:""].join(";")} ?disabled=${this.busy||!xt(this.hass,l)} @click=${()=>this.run(l)}>${l.icon?o`<ha-icon icon=${l.icon}></ha-icon>`:""}${l.name||this.hass.states[l.entity]?.attributes?.friendly_name||"Esegui"}</button>`)}</div>
  ${(t.steppers||[]).map(l=>{let c=k(this.hass,l.entity,l.attribute);return o`<div class="control"><span class="stepper-label">${l.icon?o`<ha-icon icon=${l.icon}></ha-icon>`:""}${l.name||"Valore"}</span><div class="stepper"><button aria-label=${`${l.name||"Valore"} \u2212`} ?disabled=${this.busy||!xt(this.hass,l.minus)||c!==null&&l.min!==void 0&&c<=Number(l.min)} @click=${()=>this.run(l.minus)}>−</button><span aria-live="polite">${this.formatted(c)}${l.unit||""}</span><button aria-label=${`${l.name||"Valore"} +`} ?disabled=${this.busy||!xt(this.hass,l.plus)||c!==null&&l.max!==void 0&&c>=Number(l.max)} @click=${()=>this.run(l.plus)}>+</button></div></div>`})}
  ${!t.states?.length&&!t.entity?o`<div class="empty">Apri l’editor per associare stati, sensori e script della stufa.</div>`:""}${this.feedback()}</ha-card>`}};var Ft=class extends x{static get styles(){return[super.styles,f`.item{border-top:1px solid var(--divider-color,#ddd);padding:14px 0;display:grid;gap:10px}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button{font-size:12px;min-width:44px}.editor details>label{margin-top:12px}.condition{padding:12px;background:var(--p-tint);border-radius:12px;display:grid;gap:10px}textarea{font:inherit;min-height:70px;width:100%}.editor .pair{align-items:start}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}}`]}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}text(t,e,i,s="text"){return o`<label>${t}<input aria-label=${t} type=${s} .value=${String(e??"")} @change=${r=>i(r.target.value)}></label>`}field(t,e,i="text"){return this.text(e,this.config[t],s=>this.emit({[t]:i==="number"?s===""?void 0:Number(s):s}),i)}select(t,e,i,s){return o`<label>${t}<select aria-label=${t} @change=${r=>s(r.target.value)}>${i.map(([r,n])=>o`<option value=${r} ?selected=${e===r}>${n}</option>`)}</select></label>`}entity(t,e,i,s){let r=Object.values(this.hass.states).filter(l=>!s||s.includes(l.entity_id.split(".")[0])).sort((l,c)=>l.entity_id.localeCompare(c.entity_id));this._entityId=(this._entityId||0)+1;let n="stove-entities-"+this._entityId;return o`<label>${t}<input aria-label=${t} list=${n} .value=${e||""} placeholder=${s?.length===1&&s[0]==="script"?"Cerca o scrivi script.nome":"Cerca per nome o scrivi entity_id"} autocomplete="off" autocapitalize="none" spellcheck="false" @change=${l=>i(l.target.value.trim())}><datalist id=${n}>${r.map(l=>o`<option value=${l.entity_id} label=${l.attributes?.friendly_name||l.entity_id}></option>`)}</datalist></label>`}updateItem(t,e,i){this.emit({[t]:(this.config[t]||[]).map((s,r)=>r===e?{...s,...i}:s)})}temperatureStepper(t,e){this.emit({steppers:(this.config.steppers||[]).map((i,s)=>({...i,show_as_temperature:s===t?e:!1}))})}stepLimit(t,e,i){let s=[...this.config.steppers||[]],r={...s[t]};i===""?delete r[e]:r[e]=Number(i),s[t]=r,this.emit({steppers:s})}reorder(t,e,i){let s=[...this.config[t]||[]],r=e+i;r<0||r>=s.length||([s[e],s[r]]=[s[r],s[e]],this.emit({[t]:s}))}tools(t,e){return o`<div class="tools"><button aria-label="Sposta prima" ?disabled=${e===0} @click=${()=>this.reorder(t,e,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${e===(this.config[t]||[]).length-1} @click=${()=>this.reorder(t,e,1)}>↓</button><button @click=${()=>this.emit({[t]:this.config[t].filter((i,s)=>s!==e)})}>Rimuovi</button></div>`}actionFields(t,e,i){let s=t||{};return o`${this.entity(i,s.entity,r=>e({...s,entity:r}),["script"])}<details><summary>Azione avanzata</summary>${this.text("Servizio opzionale (dominio.azione)",s.action,r=>{let n={...s};r?n.action=r:delete n.action,e(n)})}<p class="hint">Per uno script basta selezionarlo sopra. Dati e destinazioni personalizzati restano disponibili in YAML.</p></details>`}conditionFields(t,e,i,s){let r=n=>this.updateItem("states",e,{conditions:t.conditions.map((l,c)=>c===s?{...l,...n}:l)});return o`<div class="condition">${this.entity("Entit\xE0 da controllare",i.entity,n=>r({entity:n}))}<div class="pair">${this.select("Confronto",i.operator||"equals",[["equals","Uguale a"],["not_equals","Diverso da"]],n=>r({operator:n}))}${this.text("Stato atteso",i.state,n=>r({state:n}))}</div>${this.text("Attributo opzionale",i.attribute,n=>r({attribute:n}))}<button @click=${()=>this.updateItem("states",e,{conditions:t.conditions.filter((n,l)=>l!==s)})}>Rimuovi condizione</button></div>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"peach")}>
  <details open><summary>Aspetto</summary><div class="pair">${this.field("title","Titolo")}${this.field("subtitle","Sottotitolo")}</div>${this.field("hero_caption","Testo sotto lo stato")}${this.field("icon","Icona (mdi:stove)")}${this.select("Palette Pastel",t.color||"peach",[["peach","Pesca"],["blue","Blu"],["mint","Menta"],["lavender","Lavanda"],["pink","Rosa"],["amber","Ambra"],["teal","Verde acqua"],["red","Rosso"]],e=>this.emit({color:e}))}<details><summary>Colori personalizzati</summary><p class="hint">Se vuoti, seguono la palette e il tema Home Assistant. Per una card sempre bianca imposta lo sfondo a #ffffff.</p>${this.field("tint_color","Sfondo delle aree colorate")}${this.field("accent_color","Colore di disegni e comandi")}${this.field("background_color","Sfondo card (opzionale)")}${this.field("text_color","Colore testo principale (opzionale)")}${this.field("secondary_text_color","Colore testo secondario (opzionale)")}</details></details>
  <details open><summary>Sensori e pellet</summary>${this.entity("Temperatura impostata",t.temperature_entity,e=>this.emit({temperature_entity:e}),t.temperature_attribute?void 0:["sensor","counter","input_number","number"])}${this.entity("Livello pellet (%)",t.pellet_entity,e=>this.emit({pellet_entity:e}),void 0)}${this.entity("Temperatura ambiente (opzionale)",t.ambient_entity,e=>this.emit({ambient_entity:e}),t.ambient_attribute?void 0:["sensor","counter","input_number","number"])}<div class="pair">${this.field("pellet_warning_threshold","Avviso pellet sotto (%)","number")}${this.field("temperature_unit","Unit\xE0 temperatura")}</div><details><summary>Testi e attributi</summary>${this.field("temperature_label","Etichetta temperatura")}${this.field("pellet_label","Etichetta pellet")}${this.field("ambient_label","Etichetta ambiente")}${this.field("pellet_warning_label","Testo avviso pellet")}${this.field("pellet_warning_color","Colore avviso pellet")}${this.field("temperature_attribute","Attributo temperatura (opzionale)")}${this.field("pellet_attribute","Attributo pellet (opzionale)")}${this.field("ambient_attribute","Attributo ambiente (opzionale)")}</details></details>
  <details open><summary>Pulsanti (${t.controls?.length||0})</summary><p class="hint">Aggiungi le funzioni che ti servono. I pulsanti vanno a capo automaticamente e seguono la palette.</p>${(t.controls||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Nome pulsante",e.name,s=>this.updateItem("controls",i,{name:s}))}${this.text("Icona opzionale",e.icon,s=>this.updateItem("controls",i,{icon:s}))}</div>${this.actionFields(e,s=>this.updateItem("controls",i,s),"Script da avviare")}<details><summary>Colore di questo pulsante</summary>${this.text("Colore testo opzionale",e.color,s=>this.updateItem("controls",i,{color:s}))}${this.text("Sfondo opzionale",e.background,s=>this.updateItem("controls",i,{background:s}))}</details>${this.tools("controls",i)}</div>`)}<button @click=${()=>this.emit({controls:[...t.controls||[],{name:"Nuova funzione",entity:""}]})}>Aggiungi pulsante</button></details>
  <details open><summary>Controlli −/+ (${t.steppers?.length||0})</summary><p class="hint">Scegli l’aiutante counter o input_number modificato dagli script, poi associa uno script a ciascun tasto. Il numero mostrato viene letto dall’aiutante e segue anche le modifiche esterne. Minimo e massimo sono liberi e opzionali: lasciali vuoti se gestiti dagli script.</p>${(t.steppers||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Nome controllo",e.name,s=>this.updateItem("steppers",i,{name:s}))}${this.text("Unit\xE0",e.unit,s=>this.updateItem("steppers",i,{unit:s}))}</div>${this.entity("Aiutante del valore",e.entity,s=>this.updateItem("steppers",i,{entity:s}),["counter","input_number"])}<label class="check"><input type="checkbox" .checked=${!!e.show_as_temperature} @change=${s=>this.temperatureStepper(i,s.target.checked)}>Mostra questo aiutante anche come temperatura impostata</label>${this.actionFields(e.minus,s=>this.updateItem("steppers",i,{minus:s}),"Script tasto \u2212")}${this.actionFields(e.plus,s=>this.updateItem("steppers",i,{plus:s}),"Script tasto +")}<details><summary>Opzioni del controllo</summary><p class="hint">Il campo aiutante suggerisce solo counter e input_number. Puoi scrivere un ID diverso per mantenere una sorgente personalizzata già utilizzata. La spunta temperatura collega anche il riquadro in alto allo stesso valore.</p>${this.text("Icona",e.icon,s=>this.updateItem("steppers",i,{icon:s}))}${this.text("Attributo opzionale",e.attribute,s=>this.updateItem("steppers",i,{attribute:s}))}<div class="pair">${this.text("Minimo opzionale",e.min,s=>this.stepLimit(i,"min",s),"number")}${this.text("Massimo opzionale",e.max,s=>this.stepLimit(i,"max",s),"number")}</div></details>${this.tools("steppers",i)}</div>`)}<button @click=${()=>this.emit({steppers:[...t.steppers||[],{name:"Nuovo controllo",entity:"",minus:{},plus:{}}]})}>Aggiungi controllo −/+</button></details>
  <details open><summary>Stati della stufa (${t.states?.length||0})</summary><p class="hint">Le regole si leggono dall’alto: vince la prima corrispondente. Per esempio «In accensione» può richiedere sia un helper acceso sia un timer attivo. La ricerca e l’editor non avviano script.</p>${(t.states||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Testo stato",e.label,s=>this.updateItem("states",i,{label:s}))}${this.text("Testo badge",e.badge,s=>this.updateItem("states",i,{badge:s}))}</div>${this.select("Condizioni richieste",e.match||"all",[["all","Tutte (E)"],["any","Almeno una (O)"]],s=>this.updateItem("states",i,{match:s}))}${(e.conditions||[]).map((s,r)=>this.conditionFields(e,i,s,r))}<button @click=${()=>this.updateItem("states",i,{conditions:[...e.conditions||[],{entity:"",state:"on"}]})}>Aggiungi condizione</button>${this.entity("Timer da mostrare (opzionale)",e.timer_entity,s=>this.updateItem("states",i,{timer_entity:s}),["timer"])}${this.select("Illustrazione della fiamma",e.id||"active",[["active","Visibile"],["off","Spenta"],["cooling","Raffreddamento"]],s=>this.updateItem("states",i,{id:s}))}${this.tools("states",i)}</div>`)}<button @click=${()=>this.emit({states:[...t.states||[],{label:"Nuovo stato",badge:"Stato",match:"all",conditions:[{entity:"",state:"on"}]}]})}>Aggiungi stato</button>${this.field("fallback_label","Stato quando nessuna regola corrisponde")}${this.field("fallback_badge","Badge quando nessuna regola corrisponde")}<details><summary>Stato da un’entità</summary>${this.entity("Entit\xE0 di stato opzionale",t.entity,e=>this.emit({entity:e}))}<p class="hint">Usata dopo le regole, se nessuna corrisponde. Senza entità viene usato il testo di riserva.</p></details></details>
 </div>`}};var Te=[["mdi:power","Accensione"],["mdi:power-off","Spegnimento"],["mdi:snowflake","Raffreddamento"],["mdi:fire","Riscaldamento"],["mdi:water","Deumidificazione"],["mdi:fan","Ventilazione"],["mdi:weather-night","Notte"],["mdi:sleep","Quiet"],["mdi:air-conditioner","Climatizzatore"],["mdi:thermostat","Automatico"],["mdi:thermometer","Temperatura"],["mdi:leaf","Eco"],["mdi:fan-plus","Ventola +"],["mdi:fan-minus","Ventola \u2212"],["mdi:arrow-up-down","Oscillazione"],["mdi:timer-outline","Timer"],["mdi:plus","Aumenta"],["mdi:minus","Diminuisci"],["mdi:lightning-bolt","Turbo"],["mdi:restart","Ripristino"]],Ei=[["blue","Blu"],["mint","Menta"],["peach","Pesca"],["lavender","Lavanda"],["pink","Rosa"],["amber","Ambra"],["teal","Verde acqua"],["red","Rosso"]];function Dt(a){return!!a?.entity_id?.startsWith("sensor.")&&(a.attributes?.device_class==="temperature"||["\xB0C","\xB0F","K"].includes(a.attributes?.unit_of_measurement))}function Ne(a,t){return!!t?.script?.startsWith("script.")&&!!a?.states?.[t.script]&&a.states[t.script].state!=="unavailable"&&!!a?.services?.script?.turn_on}function Pe(a,t){if(!t||t.startsWith("script."))return null;let e=a?.states?.[t];return!e||["unknown","unavailable"].includes(e.state)?{available:!1,label:"Non disponibile"}:{available:!0,state:e.state,label:{on:"Acceso",off:"Spento",cool:"Raffreddamento",heat:"Riscaldamento",dry:"Deumidificazione",fan_only:"Ventilazione",auto:"Automatico",heat_cool:"Automatico"}[e.state]||e.state}}function Ai(a){if(a.buttons!==void 0&&!Array.isArray(a.buttons))throw new Error("buttons deve essere una lista.");if(a.temperature_entity!==void 0&&typeof a.temperature_entity!="string")throw new Error("Il sensore temperatura deve essere un ID di entit\xE0.");for(let t of a.buttons||[]){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Pulsante non valido.");if(t.script!==void 0&&(typeof t.script!="string"||t.script&&!t.script.startsWith("script.")))throw new Error("Scegli uno script per ciascun pulsante.")}}var jt=class extends x{static getConfigElement(){return document.createElement("pastel-script-climate-card-editor")}static getStubConfig(){return{title:"Climatizzatore",subtitle:"Clima con script",color:"blue",temperature_entity:"",buttons:[{name:"Accendi",icon:"mdi:power",script:""},{name:"Raffreddamento",icon:"mdi:snowflake",script:""},{name:"Deumidifica",icon:"mdi:water",script:""},{name:"Quiet",icon:"mdi:sleep",script:""},{name:"Spegni",icon:"mdi:power-off",script:""}]}}static get styles(){return[super.styles,f`
  .reading{font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.reading small{font-size:16px;margin-left:3px;letter-spacing:0}.climate-actions{display:flex;flex-wrap:wrap;gap:8px}.climate-button{flex:1 1 110px;min-width:90px;min-height:72px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;overflow-wrap:anywhere;line-height:1.4}.climate-button ha-icon{--mdc-icon-size:23px;flex-shrink:0}.climate-button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.climate-button small{font-size:11px;font-weight:400}.hero .right{flex:1}.sensor-info{font-size:11px;color:var(--p-muted);margin:12px 0 0;overflow-wrap:anywhere}
  @media(max-width:340px){.hero{padding:16px;gap:10px}.hero svg{width:76px;height:76px}.hero .reading{font-size:28px}}
 `]}setConfig(t){Ai(t),super.setConfig(t)}appearance(t){return[this.palette(t.color||"blue"),...Object.entries({tint_color:"--p-tint",accent_color:"--p-accent",background_color:"--p-surface",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([e])=>t[e]).map(([e,i])=>`${i}:${t[e]}`)].join(";")}async run(t){this.busy||!Ne(this.hass,t)||await this.call("script.turn_on",t.script)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.hass.states[t.temperature_entity],i=k(this.hass,t.temperature_entity),s=e?.attributes?.unit_of_measurement||this.hass.config?.unit_system?.temperature||"\xB0C",r=Pe(this.hass,t.state_entity),n=i===null?"\u2014":new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:1}).format(i);return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:air-conditioner"}></ha-icon></div><div class="heading"><h2>${t.title||"Climatizzatore"}</h2><div class="subtitle">${t.subtitle??"Clima con script"}</div></div>${r?o`<span class="pill">${r.label}</span>`:""}</header>
  <div class="hero">${L("climate")}<div class="right"><div class="reading" aria-live="polite">${n}<small>${s}</small></div><div class="caption">${t.temperature_label||"Temperatura ambiente"}</div></div></div>
  <div class="climate-actions">${(t.buttons||[]).map(l=>{let c=Pe(this.hass,l.state_entity),d=c?.available?c.state===String(l.active_state??"on"):null;return o`<button class="climate-button" style=${l.color?this.palette(l.color):""} aria-pressed=${d===null?"undefined":String(d)} ?disabled=${this.busy||!Ne(this.hass,l)} @click=${()=>this.run(l)}><ha-icon icon=${l.icon||"mdi:air-conditioner"}></ha-icon><span>${l.name||this.hass.states[l.script]?.attributes?.friendly_name||"Esegui"}</span>${c?o`<small>${c.available?d?l.active_label||"Attivo":l.inactive_label||"Non attivo":"Non disponibile"}</small>`:""}</button>`})}</div>
  ${t.temperature_entity?"":o`<div class="sensor-info">Scegli il sensore di temperatura nell’editor.</div>`}${t.buttons?.length?"":o`<div class="empty">Aggiungi i pulsanti e scegli gli script nell’editor.</div>`}${this.feedback()}</ha-card>`}};var T=class extends x{static get styles(){return[super.styles,f`
  .button-editor{border-top:1px solid var(--divider-color,#ddd);padding:16px 0;display:grid;gap:12px}.button-title{display:flex;gap:8px;align-items:center;font-size:14px;font-weight:600}.button-title ha-icon{color:var(--p-accent);--mdc-icon-size:22px}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button{min-width:44px;font-size:12px}.icon-options{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:12px}.icon-options button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-height:64px;padding:8px 4px;font-size:11px;overflow-wrap:anywhere}.icon-options button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.icon-options ha-icon{--mdc-icon-size:22px}.editor details>label{margin-top:12px}.editor h3{margin:0}.editor .hint{margin:0}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}.icon-options{grid-template-columns:repeat(3,minmax(0,1fr))}}
 `]}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}text(t,e,i){return o`<label>${t}<input aria-label=${t} .value=${String(e??"")} @change=${s=>i(s.target.value)}></label>`}paletteSelect(t,e,i,s=!1){return o`<label>${t}<select aria-label=${t} @change=${r=>i(r.target.value)}>${s?o`<option value="" ?selected=${!e}>Come la card</option>`:""}${Ei.map(([r,n])=>o`<option value=${r} ?selected=${e===r}>${n}</option>`)}</select></label>`}entity(t,e,i,s,r="Cerca per nome o scrivi entity_id"){let n=Object.values(this.hass.states).filter(c=>!s||s(c)).sort((c,d)=>(c.attributes?.friendly_name||c.entity_id).localeCompare(d.attributes?.friendly_name||d.entity_id));this._entityId=(this._entityId||0)+1;let l=`script-climate-entity-${this._entityId}`;return o`<label>${t}<input aria-label=${t} list=${l} .value=${e||""} placeholder=${r} autocomplete="off" autocapitalize="none" spellcheck="false" @change=${c=>i(c.target.value.trim())}><datalist id=${l}>${n.map(c=>o`<option value=${c.entity_id} label=${c.attributes?.friendly_name||c.entity_id}></option>`)}</datalist></label>`}updateButton(t,e){this.emit({buttons:(this.config.buttons||[]).map((i,s)=>t===s?{...i,...e}:i)})}move(t,e){let i=[...this.config.buttons||[]],s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this.emit({buttons:i}))}iconPicker(t,e){let i=t.icon||"mdi:air-conditioner",s=Te.find(([r])=>r===i)?.[1]||"Personalizzata";return o`<details><summary>Icona: ${s}</summary><div class="icon-options">${Te.map(([r,n])=>o`<button aria-label=${`Icona ${n}`} aria-pressed=${String(i===r)} @click=${()=>this.updateButton(e,{icon:r})}><ha-icon icon=${r}></ha-icon><span>${n}</span></button>`)}</div></details>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>
  <div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>
  ${this.entity("Sensore di temperatura",t.temperature_entity,e=>this.emit({temperature_entity:e}),Dt,"Cerca un sensore di temperatura")}
  ${this.paletteSelect("Colore card",t.color||"blue",e=>this.emit({color:e}))}
  <h3>Pulsanti (${t.buttons?.length||0})</h3><p class="hint">Per ogni funzione scegli lo script, il nome e l’icona. Puoi aggiungere tutti i pulsanti che ti servono.</p>
  ${(t.buttons||[]).map((e,i)=>o`<section class="button-editor" aria-label=${`Configura ${e.name||"pulsante "+(i+1)}`}><div class="button-title"><ha-icon icon=${e.icon||"mdi:air-conditioner"}></ha-icon>${e.name||"Nuovo pulsante"}</div>${this.text("Nome pulsante",e.name,s=>this.updateButton(i,{name:s}))}${this.entity("Script del pulsante",e.script,s=>this.updateButton(i,{script:s}),s=>s.entity_id.startsWith("script."),"Cerca o scrivi script.nome")}${this.iconPicker(e,i)}${this.paletteSelect("Colore pulsante",e.color||"",s=>this.updateButton(i,{color:s}),!0)}<div class="tools"><button aria-label="Sposta pulsante prima" ?disabled=${i===0} @click=${()=>this.move(i,-1)}>↑</button><button aria-label="Sposta pulsante dopo" ?disabled=${i===(t.buttons||[]).length-1} @click=${()=>this.move(i,1)}>↓</button><button @click=${()=>this.emit({buttons:t.buttons.filter((s,r)=>i!==r)})}>Rimuovi pulsante</button></div><details><summary>Indicatore di stato opzionale</summary><p class="hint">Usa un aiutante o un sensore che indica la funzione attiva. Lo stato dello script non indica se il climatizzatore è acceso.</p>${this.entity("Entit\xE0 funzione attiva",e.state_entity,s=>this.updateButton(i,{state_entity:s}),s=>!s.entity_id.startsWith("script."))}${this.text("Stato che indica attivo",e.active_state??"on",s=>this.updateButton(i,{active_state:s}))}</details></section>`)}
  <button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuovo pulsante",script:"",icon:"mdi:power"}]})}>Aggiungi pulsante</button>
  <details><summary>Altre opzioni</summary>${this.text("Etichetta temperatura",t.temperature_label,e=>this.emit({temperature_label:e}))}${this.entity("Stato del climatizzatore (opzionale)",t.state_entity,e=>this.emit({state_entity:e}),e=>!e.entity_id.startsWith("script."))}<p class="hint">Il badge compare solo se associ un’entità di stato reale. Un sensore non classificato come temperatura può essere inserito scrivendone l’ID.</p>${this.text("Icona intestazione opzionale",t.icon,e=>this.emit({icon:e}))}<details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],s=>this.emit({[e]:s})))}</details></details>
 </div>`}};var Y=[{action:"alarm_arm_home",name:"In Casa",state:"armed_home",feature:1,icon:"mdi:home"},{action:"alarm_arm_night",name:"Notte",state:"armed_night",feature:4,icon:"mdi:weather-night"},{action:"alarm_arm_away",name:"Fuori Casa",state:"armed_away",feature:2,icon:"mdi:walk"},{action:"alarm_disarm",name:"Disattiva",state:"disarmed",feature:0,icon:"mdi:shield-off"},{action:"alarm_arm_vacation",name:"Vacanza",state:"armed_vacation",feature:32,icon:"mdi:airplane"},{action:"alarm_arm_custom_bypass",name:"Personalizzata",state:"armed_custom_bypass",feature:16,icon:"mdi:shield-half-full"},{action:"alarm_trigger",name:"Attiva sirena",state:"triggered",feature:8,icon:"mdi:alarm-light"}],Ie=[["mdi:shield","Allarme"],["mdi:home","In Casa"],["mdi:weather-night","Notte"],["mdi:walk","Fuori Casa"],["mdi:shield-off","Disattiva"],["mdi:shield-lock","Protezione"],["mdi:shield-home","Perimetrale"],["mdi:airplane","Vacanza"],["mdi:alarm-light","Sirena"],["mdi:door-open","Porta"],["mdi:window-open","Finestra"],["mdi:smoke-detector","Fumo"],["mdi:molecule-co2","CO\u2082"],["mdi:molecule-co","CO"],["mdi:gas-cylinder","Gas"],["mdi:motion-sensor","Movimento"],["mdi:water-alert","Acqua"],["mdi:lock","Serratura"],["mdi:bell-outline","Notifica"],["mdi:view-dashboard-outline","Riepilogo"]],Me={disarmed:["Disattivato","Sistema non inserito"],armed_home:["In Casa","Protezione in casa"],armed_night:["Notte","Protezione notturna"],armed_away:["Fuori Casa","Protezione durante l\u2019assenza"],armed_vacation:["Vacanza","Protezione durante l\u2019assenza"],armed_custom_bypass:["Personalizzata","Protezione personalizzata"],arming:["In attivazione\u2026","Inserimento in corso"],disarming:["Disattivazione\u2026","Disinserimento in corso"],pending:["In attesa\u2026","Attesa del sistema"],triggered:["Allarme!","Segnalazione dal sistema"]};function Ti(a){return!!a&&["sensor","binary_sensor"].includes(a.entity_id?.split(".")[0])&&["smoke","gas","carbon_monoxide","carbon_dioxide","safety","problem"].includes(a.attributes?.device_class)}function Le(a,t){if(!t)return{label:"Da associare",detail:"Seleziona il pannello allarme",unknown:!0};let e=a?.states?.[t];if(!e||["unknown","unavailable"].includes(e.state))return{label:"Non disponibile",detail:"Dati non disponibili",unknown:!0};let i=Me[e.state];return{state:e.state,label:i?.[0]||e.state,detail:i?.[1]||"Stato del pannello",unknown:!i,alert:e.state==="triggered",waiting:["arming","disarming","pending"].includes(e.state)}}function Oe(a,t,e){let i=a?.states?.[t],s=Y.find(r=>r.action===e);return!!t?.startsWith("alarm_control_panel.")&&!!i&&!["unknown","unavailable"].includes(i.state)&&!!s&&(!s.feature||(Number(i.attributes?.supported_features||0)&s.feature)!==0)&&!!a?.services?.alarm_control_panel?.[e]}function Re(a,t,e){return e.kind==="script"?!!e.script?.startsWith("script.")&&!!a?.states?.[e.script]&&a.states[e.script].state!=="unavailable"&&!!a?.services?.script?.turn_on:Oe(a,t.entity,e.action)}function Ni(a,t,e){if(e.kind==="script")return!1;let i=a?.states?.[t.entity]?.attributes||{};return!!i.code_format&&(e.action==="alarm_disarm"||e.action==="alarm_trigger"||i.code_arm_required!==!1)}function Pi(a,t){if(t.kind==="alarm"){let n=Le(a,t.entity);return{...n,value:n.label,detail:n.unknown?n.detail:n.alert?"Segnalazione attiva":n.waiting?"Operazione in corso":n.state==="disarmed"?"Sistema non inserito":"Allarme inserito"}}if(t.kind==="count"){let n=k(a,t.entity,t.attribute),l=n!==null&&Number.isInteger(n)&&n>=0;return{value:l?String(n):"\u2014",detail:l?n===0?t.zero_label||"Tutte chiuse":t.open_label||"Aperture rilevate":"Dati non disponibili",unknown:!l,attention:l&&n>0}}let e=t.entities||[];if(!e.length)return{value:"Da associare",detail:"Sensori non configurati",unknown:!0};let i=!1,s=!1,r=!1;for(let n of e){let l=a?.states?.[n];if(!l||["unknown","unavailable"].includes(l.state)){i=!0;continue}if(l.state===String(t.active_state??"on")){r=!0;continue}if(l.state===String(t.normal_state??"off"))continue;let c=k(a,n),d=t.threshold===void 0||t.threshold===null||String(t.threshold).trim()===""?null:Number(t.threshold);if(c===null){i=!0;continue}if(d===null||!Number.isFinite(d)){s=!0;continue}c>=d&&(r=!0)}return r?{value:t.alert_label||"Segnalazione",detail:i||s?"Segnalazione \xB7 dati parziali":"Controlla i sensori",alert:!0,unknown:i||s}:i||s?{value:s?"Imposta soglia":"Non disponibile",detail:s?"Soglia per il sensore numerico":"Dati non disponibili",unknown:!0}:{value:t.normal_label||"OK",detail:"Nessuna segnalazione",unknown:!1}}function Ii(a){return a.some(t=>t.alert)?"Segnalazione":a.some(t=>t.attention)?"Aperture rilevate":a.some(t=>t.unknown)?"Dati parziali":a.some(t=>t.waiting)?"Operazione in corso":a.length?"Nessuna segnalazione":"Da configurare"}function Mi(a){if(a.entity!==void 0&&(typeof a.entity!="string"||a.entity&&!a.entity.startsWith("alarm_control_panel.")))throw new Error("Scegli un pannello alarm_control_panel.");if(a.buttons!==void 0&&!Array.isArray(a.buttons))throw new Error("buttons deve essere una lista.");for(let t of a.buttons||[]){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Pulsante non valido.");if(t.kind&&!["script","panel"].includes(t.kind))throw new Error("Scegli Pannello allarme oppure Script.");if(t.script!==void 0&&(typeof t.script!="string"||t.script&&!t.script.startsWith("script.")))throw new Error("Scegli uno script valido.");if(t.action&&!Y.some(e=>e.action===t.action))throw new Error("Comando allarme non valido.")}}function Li(a){if(a.tiles!==void 0&&!Array.isArray(a.tiles))throw new Error("tiles deve essere una lista.");for(let t of a.tiles||[]){if(!t||!["alarm","count","detector"].includes(t.kind))throw new Error("Tipo di riquadro non valido.");if(t.entities!==void 0&&(!Array.isArray(t.entities)||t.entities.some(e=>typeof e!="string")))throw new Error("I sensori devono essere una lista di entit\xE0.");if(t.threshold!==void 0&&!Number.isFinite(Number(t.threshold)))throw new Error("Soglia numerica non valida.")}}var Ut=class extends x{static get properties(){return{...super.properties,_pending:{},_pin:{}}}static getConfigElement(){return document.createElement("pastel-alarm-card-editor")}static getStubConfig(){return{title:"Protego",subtitle:"Sistema allarme",entity:"",color:"blue",buttons:Y.slice(0,4).map(t=>({name:t.name,kind:"panel",action:t.action,state:t.state,icon:t.icon}))}}static get styles(){return[super.styles,f`.alarm-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.alarm-actions button{min-height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;overflow-wrap:anywhere}.alarm-actions ha-icon{--mdc-icon-size:21px}.alarm-actions button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.danger{color:var(--error-color,#963f3b)}.code-form{display:grid;gap:10px;padding-top:16px}.code-form label{display:grid;gap:7px;font-size:13px}.code-actions{display:flex;gap:8px}.code-actions button{flex:1}.code-form input{width:100%}.hero .right{flex:1}@media(max-width:340px){.hero{padding:16px}.hero svg{width:76px;height:76px}}`]}setConfig(t){Mi(t),this._pending=null,this._pin="",super.setConfig(t)}disconnectedCallback(){this._pin="",this._pending=null,super.disconnectedCallback()}async run(t,e){if(!(this.busy||!Re(this.hass,this.config,t))){if(Ni(this.hass,this.config,t)&&!e){this._pending=t,this._pin="",this.error="";return}return this._pending=null,this._pin="",t.kind==="script"?this.call("script.turn_on",t.script):this.call(`alarm_control_panel.${t.action}`,this.config.entity,e?{code:e}:{})}}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=Le(this.hass,t.entity),i=this._pending,s=this.hass.states[t.entity]?.attributes?.code_format==="number";return o`<ha-card style=${this.palette(t.color||"blue")}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:shield"}></ha-icon></div><div class="heading"><h2>${t.title||"Protego"}</h2><div class="subtitle">${t.subtitle??"Sistema allarme"}</div></div><span class=${e.alert?"pill danger":"pill"}>${e.label}</span></header><div class="hero">${L("alarm")}<div class="right"><div class=${e.alert?"status danger":"status"} role="status">${e.label}</div><div class="caption">${e.detail}</div></div></div><div class="alarm-actions">${(t.buttons||[]).map(r=>o`<button style=${r.color?this.palette(r.color):""} aria-pressed=${String(!!r.state&&!e.unknown&&r.state===e.state)} ?disabled=${this.busy||!Re(this.hass,t,r)} @click=${()=>this.run(r)}><ha-icon icon=${r.icon||"mdi:shield"}></ha-icon><span>${r.name||"Esegui"}</span></button>`)}</div>
 ${i?o`<form class="code-form" @submit=${r=>{r.preventDefault();let n=this._pin;n?.trim()&&this.run(i,n)}}><label>Codice del pannello<input type="password" aria-label="Codice del pannello" inputmode=${s?"numeric":"text"} autocomplete="off" .value=${this._pin||""} @input=${r=>{this._pin=r.target.value}}></label><div class="code-actions"><button type="button" @click=${()=>{this._pending=null,this._pin=""}}>Annulla</button><button type="submit" ?disabled=${!this._pin?.trim()||this.busy}>Invia comando</button></div></form>`:""}${t.entity?"":o`<div class="empty">Scegli il pannello nell’editor. Ogni tasto può usare il pannello oppure uno script.</div>`}${this.feedback()}</ha-card>`}};var Vt=class extends x{static getConfigElement(){return document.createElement("pastel-security-card-editor")}static getStubConfig(){return{title:"Riepilogo sicurezza",subtitle:"Stato della casa",color:"mint",tiles:[{kind:"alarm",name:"Sistema allarme",entity:"",icon:"mdi:shield-check"},{kind:"count",name:"Porte aperte",entity:"",icon:"mdi:door-open"},{kind:"count",name:"Finestre aperte",entity:"",icon:"mdi:window-open"},{kind:"detector",name:"Fumo e CO\u2082",entities:[],icon:"mdi:smoke-detector"}]}}static get styles(){return[super.styles,f`.security-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.security-metric{padding:14px;border:1px solid var(--divider-color,#e8ebed);border-radius:16px;min-height:112px;min-width:0}.metric-heading{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--p-muted);line-height:1.5;min-height:20px}.metric-heading ha-icon{--mdc-icon-size:18px;flex-shrink:0;color:var(--p-accent)}.security-metric strong{display:block;font-size:24px;font-weight:550;letter-spacing:-.5px;line-height:1.3;margin-top:10px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.security-metric small{display:block;font-size:11px;line-height:1.5;color:var(--p-muted);margin-top:5px}.security-metric.words strong{font-size:18px;letter-spacing:-.2px;margin-top:13px}.security-metric.alert strong{color:var(--error-color,#963f3b)}.security-metric.attention strong{color:var(--warning-color,#786022)}.security-metric.unknown strong{color:var(--p-muted)}.security-metric.alert.unknown strong{color:var(--error-color,#963f3b)}`]}setConfig(t){Li(t),super.setConfig(t)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=t.tiles||[],i=e.map(s=>Pi(this.hass,s));return o`<ha-card style=${this.palette(t.color||"mint")}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:view-dashboard-outline"}></ha-icon></div><div class="heading"><h2>${t.title||"Riepilogo sicurezza"}</h2><div class="subtitle">${t.subtitle??"Stato della casa"}</div></div><span class="pill" role="status">${Ii(i)}</span></header><div class="security-metrics" aria-live="polite">${e.map((s,r)=>{let n=i[r];return o`<div class=${`security-metric ${s.kind==="count"?"":"words"} ${n.alert?"alert":""} ${n.attention?"attention":""} ${n.unknown?"unknown":""}`} style=${s.color?this.palette(s.color):""}><div class="metric-heading"><ha-icon icon=${s.icon||(s.kind==="alarm"?"mdi:shield-check":s.kind==="count"?"mdi:door-open":"mdi:smoke-detector")}></ha-icon><span>${s.name||"Stato"}</span></div><strong>${n.value}</strong><small>${n.detail}</small></div>`})}</div>${e.length?"":o`<div class="empty">Aggiungi i riquadri dall’editor.</div>`}</ha-card>`}};var qt=class extends T{select(t,e,i,s){return o`<label>${t}<select aria-label=${t} @change=${r=>s(r.target.value)}>${i.map(([r,n])=>o`<option value=${r} ?selected=${r===e}>${n}</option>`)}</select></label>`}iconChoices(t,e){let i=t||"mdi:shield",s=Ie.find(([r])=>r===i)?.[1]||"Personalizzata";return o`<details><summary>Icona: ${s}</summary><div class="icon-options">${Ie.map(([r,n])=>o`<button aria-label=${`Icona ${n}`} aria-pressed=${String(i===r)} @click=${()=>e(r)}><ha-icon icon=${r}></ha-icon><span>${n}</span></button>`)}</div></details>`}updateItem(t,e,i){this.emit({[t]:(this.config[t]||[]).map((s,r)=>r===e?{...s,...i}:s)})}itemTools(t,e){return o`<div class="tools"><button aria-label="Sposta prima" ?disabled=${e===0} @click=${()=>this.reorder(t,e,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${e===(this.config[t]||[]).length-1} @click=${()=>this.reorder(t,e,1)}>↓</button><button @click=${()=>this.emit({[t]:this.config[t].filter((i,s)=>e!==s)})}>Rimuovi</button></div>`}reorder(t,e,i){let s=[...this.config[t]||[]],r=e+i;r<0||r>=s.length||([s[e],s[r]]=[s[r],s[e]],this.emit({[t]:s}))}heading(t,e){let i=this.config;return o`<div class="pair">${this.text("Nome card",i.title??t,s=>this.emit({title:s}))}${this.text("Sottotitolo",i.subtitle,s=>this.emit({subtitle:s}))}</div>${this.paletteSelect("Colore card",i.color||e,s=>this.emit({color:s}))}`}number(t,e,i){return o`<label>${t}<input aria-label=${t} type="number" step="any" .value=${String(e??"")} @change=${s=>i(s.target.value===""?void 0:Number(s.target.value))}></label>`}},Bt=class extends qt{render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>${this.heading("Protego","blue")}${this.entity("Pannello allarme",t.entity,e=>this.emit({entity:e}),e=>e.entity_id.startsWith("alarm_control_panel."))}<h3>Pulsanti (${t.buttons?.length||0})</h3><p class="hint">Ogni pulsante può usare una funzione del pannello oppure uno script. Lo stato mostrato viene sempre dal pannello.</p>
 ${(t.buttons||[]).map((e,i)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${e.icon||"mdi:shield"}></ha-icon>${e.name||"Nuovo pulsante"}</div>${this.text("Nome pulsante",e.name,s=>this.updateItem("buttons",i,{name:s}))}${this.select("Tipo di comando",e.kind||"panel",[["panel","Pannello allarme"],["script","Script"]],s=>this.updateItem("buttons",i,{kind:s}))}
 ${e.kind==="script"?this.entity("Script del pulsante",e.script,s=>this.updateItem("buttons",i,{script:s}),s=>s.entity_id.startsWith("script."),"Cerca o scrivi script.nome"):this.select("Funzione del pannello",e.action||"",[["","Scegli una funzione"],...Y.map(s=>[s.action,s.name+(t.entity&&!Oe(this.hass,t.entity,s.action)?" \xB7 non disponibile":"")])],s=>{let r=Y.find(n=>n.action===s);this.updateItem("buttons",i,{action:s,state:r?.state||""})})}
 ${this.iconChoices(e.icon,s=>this.updateItem("buttons",i,{icon:s}))}${this.paletteSelect("Colore pulsante",e.color||"",s=>this.updateItem("buttons",i,{color:s}),!0)}${this.itemTools("buttons",i)}<details><summary>Evidenziazione del pulsante</summary>${this.select("Stato del pannello da evidenziare",e.state||"",[["","Nessuno"],...Object.entries(Me).map(([s,r])=>[s,r[0]])],s=>this.updateItem("buttons",i,{state:s}))}</details></section>`)}
 <button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuovo pulsante",kind:"script",script:"",icon:"mdi:shield"}]})}>Aggiungi pulsante</button></div>`}},Wt=class extends qt{render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"mint")}>${this.heading("Riepilogo sicurezza","mint")}<h3>Riquadri (${t.tiles?.length||0})</h3>
 ${(t.tiles||[]).map((e,i)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${e.icon||"mdi:shield"}></ha-icon>${e.name||"Nuovo riquadro"}</div>${this.text("Nome riquadro",e.name,s=>this.updateItem("tiles",i,{name:s}))}${this.select("Tipo di dato",e.kind,[["alarm","Stato allarme"],["count","Conteggio aperture"],["detector","Sensori fumo, gas o segnalazione"]],s=>this.updateItem("tiles",i,{kind:s}))}
 ${e.kind==="alarm"?this.entity("Pannello allarme",e.entity,s=>this.updateItem("tiles",i,{entity:s}),s=>s.entity_id.startsWith("alarm_control_panel.")):e.kind==="count"?o`${this.entity("Entit\xE0 del conteggio",e.entity,s=>this.updateItem("tiles",i,{entity:s}),s=>["sensor","counter","input_number","number"].includes(s.entity_id.split(".")[0]))}<details><summary>Testi e attributo</summary>${this.text("Testo con zero aperture",e.zero_label,s=>this.updateItem("tiles",i,{zero_label:s}))}${this.text("Testo con aperture rilevate",e.open_label,s=>this.updateItem("tiles",i,{open_label:s}))}${this.text("Attributo opzionale",e.attribute,s=>this.updateItem("tiles",i,{attribute:s}))}</details>`:o`<p class="hint">Associa i sensori reali. Con un sensore numerico imposta la soglia di segnalazione; senza dati non viene mostrato OK. Per soglie diverse usa riquadri distinti; puoi scrivere l’ID di un sensore non classificato.</p>${(e.entities||[]).map(s=>o`<div class="control"><span>${this.hass.states[s]?.attributes?.friendly_name||s}</span><button @click=${()=>this.updateItem("tiles",i,{entities:e.entities.filter(r=>r!==s)})}>Rimuovi sensore</button></div>`)}${this.entity("Sensore da aggiungere","",s=>{s&&!e.entities?.includes(s)&&this.updateItem("tiles",i,{entities:[...e.entities||[],s]})},Ti)}${this.number("Soglia sensori numerici (\u2265)",e.threshold,s=>this.updateItem("tiles",i,{threshold:s}))}<details><summary>Stati e testi personalizzati</summary>${this.text("Stato attivo",e.active_state??"on",s=>this.updateItem("tiles",i,{active_state:s}))}${this.text("Stato normale",e.normal_state??"off",s=>this.updateItem("tiles",i,{normal_state:s}))}${this.text("Testo segnalazione",e.alert_label,s=>this.updateItem("tiles",i,{alert_label:s}))}${this.text("Testo normale",e.normal_label,s=>this.updateItem("tiles",i,{normal_label:s}))}</details>`}
 ${this.iconChoices(e.icon,s=>this.updateItem("tiles",i,{icon:s}))}${this.paletteSelect("Colore riquadro",e.color||"",s=>this.updateItem("tiles",i,{color:s}),!0)}${this.itemTools("tiles",i)}</section>`)}
 <button @click=${()=>this.emit({tiles:[...t.tiles||[],{kind:"count",name:"Nuovo riquadro",entity:"",icon:"mdi:door-open"}]})}>Aggiungi riquadro</button></div>`}};var Fe=["light","switch","input_boolean"],Oi=[["mdi:lightbulb","Lampadina"],["mdi:floor-lamp","Lampada"],["mdi:outdoor-lamp","Esterno"],["mdi:ceiling-light","Soffitto"],["mdi:led-strip-variant","LED"],["mdi:window-shutter","Tapparella"],["mdi:home","Casa"],["mdi:sofa","Soggiorno"]];function K(a){return(a.entities??a.lights??(a.entity?[{entity:a.entity,name:a.name,energy_entity:a.energy_entity}]:[])).map(t=>typeof t=="string"?{entity:t}:{...t})}function Ht(a,t){let e=a.entities??a.lights;if(e!==void 0&&!Array.isArray(e))throw Error("Le entit\xE0 devono essere una lista.");for(let i of K(a)){if(!i||typeof i.entity!="string")throw Error("Scegli un\u2019entit\xE0 valida.");if(i.entity&&!(t==="cover"?i.entity.startsWith("cover."):Fe.includes(i.entity.split(".")[0])))throw Error(t==="cover"?"Scegli una tapparella cover.":"Scegli una luce o un interruttore.")}}function Ri(a,t){let e=a?.states?.[t.entity],i=e?.attributes||{},s=i.supported_color_modes||[],r=!!e&&["on","off"].includes(e.state),n=t.entity?.startsWith("light."),l=Number.isFinite(i.brightness)?Math.round(i.brightness/255*100):null;return{...t,name:t.name||i.friendly_name||t.entity||"Luce",icon:t.icon||i.icon||"mdi:lightbulb",available:r,on:r&&e.state==="on",brightness:l,dim:n&&s.some(c=>["brightness","color_temp","hs","xy","rgb","rgbw","rgbww","white"].includes(c)),temperature:n&&s.includes("color_temp"),rgbCapable:n&&s.some(c=>["hs","xy","rgb","rgbw","rgbww"].includes(c)),kelvin:Number.isFinite(i.color_temp_kelvin)?i.color_temp_kelvin:Number.isFinite(i.color_temp)&&i.color_temp>0?Math.round(1e6/i.color_temp):null,minKelvin:i.min_color_temp_kelvin||(i.max_mireds?Math.ceil(1e6/i.max_mireds):2e3),maxKelvin:i.max_color_temp_kelvin||(i.min_mireds?Math.floor(1e6/i.min_mireds):6500),rgb:i.rgb_color}}function Fi(a){return{on:a.filter(t=>t.on).length,total:a.length,valid:a.filter(t=>t.available).length}}function Di(a){return Array.isArray(a)&&a.length>=3?"#"+a.slice(0,3).map(t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")).join(""):"#ffffff"}function De(a){return/^#[a-f0-9]{6}$/i.test(a)?[1,3,5].map(t=>parseInt(a.slice(t,t+2),16)):null}var Cs={open_cover:1,close_cover:2,set_cover_position:4,stop_cover:8};function ji(a,t){let e=a?.states?.[t.entity],i=e?.attributes||{},s=!!e&&["open","closed","opening","closing"].includes(e.state),r=k(a,t.entity,"current_position"),n=s&&r!==null&&r>=0&&r<=100?r:null;return{...t,name:t.name||i.friendly_name||t.entity||"Tapparella",available:s,state:e?.state,features:Number(i.supported_features||0),position:n,label:s?{opening:"In apertura\u2026",closing:"In chiusura\u2026",closed:"Chiusa",open:n!==null&&n<100?"Parzialmente aperta":"Aperta"}[e.state]:"Non disponibile"}}function yt(a,t,e){return t.available&&!!(t.features&Cs[e])&&!!a?.services?.cover?.[e]&&!(e==="open_cover"&&(t.position===100||t.state==="opening"))&&!(e==="close_cover"&&(t.position===0||t.state==="closing"))}function Ui(a){let t=a.map(e=>e.position).filter(e=>e!==null);return{total:a.length,valid:a.filter(e=>e.available).length,known:t.length,open:a.filter(e=>e.available&&(e.position!==null?e.position>0:e.state!=="closed")).length,average:t.length?Math.round(t.reduce((e,i)=>e+i,0)/t.length):null}}function j(a,t){let e=a.palette(t.color||"blue");return/^#[a-f0-9]{6}$/i.test(t.color||"")&&(e+=`;--p-accent:${t.color};--p-tint:color-mix(in srgb,${t.color} 15%,var(--p-surface))`),[e,...Object.entries({background_color:"--p-surface",tint_color:"--p-tint",accent_color:"--p-accent",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([i])=>t[i]).map(([i,s])=>`${s}:${t[i]}`)].join(";")}var _t=class extends x{static get properties(){return{...super.properties,_expanded:{}}}static getConfigElement(){return document.createElement("pastel-lights-card-editor")}static getStubConfig(){return{title:"Luci",subtitle:"Illuminazione",color:"mint",entities:[]}}static get styles(){return[super.styles,f`.hero{min-height:112px;padding:18px 22px}.hero svg{width:64px;height:64px}.hero .reading{font-size:36px}.reading small{font-size:18px;margin-left:3px}.group{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}.group button{display:flex;gap:7px;justify-content:center;align-items:center;min-height:48px;padding:10px 8px}.group ha-icon{--mdc-icon-size:18px;flex-shrink:0}.light{border-top:1px solid var(--divider-color,#e1e4e8);padding:14px 0}.light:last-child{padding-bottom:0}.light-top{display:flex;align-items:center;gap:10px}.light-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:12px;background:var(--p-tint);color:var(--p-accent);flex-shrink:0}.light-icon ha-icon{--mdc-icon-size:20px}.off .light-icon{background:var(--secondary-background-color,#eef0f3);color:var(--p-muted)}.name-wrap{flex:1;min-width:0}.name{display:block;text-align:left;min-height:48px;padding:3px 0;background:none;border:0;color:var(--p-ink);width:100%;line-height:1.5;font-size:14px;overflow-wrap:anywhere}.state{font-size:12px;line-height:1.5;color:var(--p-muted);margin-top:3px}.power{width:50px;height:48px;flex-shrink:0;border:1px solid var(--divider-color,#e1e4e8);background:var(--p-surface);color:var(--p-muted);display:grid;place-items:center;padding:10px}.power[aria-pressed=true]{background:var(--p-tint);color:var(--p-accent);border-color:transparent}.adjust{display:flex;gap:7px;align-items:center;justify-content:center;margin:6px 0 0 auto;min-height:48px;padding:9px 13px;background:var(--p-surface);border:1px solid var(--divider-color,#e1e4e8);font-size:12px}.adjust ha-icon{--mdc-icon-size:18px}.settings{--range-track:color-mix(in srgb,var(--p-accent) 25%,var(--p-surface));margin-top:10px;padding:14px;background:var(--p-tint);border-radius:15px}.color-label{display:flex;gap:10px;align-items:center;justify-content:space-between;font-size:12px;margin-top:10px;color:var(--p-accent)}input[type=color]{width:66px;height:48px;padding:4px;background:var(--p-surface)}.progress{height:5px;border-radius:4px;background:var(--p-tint);overflow:hidden;margin-bottom:14px}.progress span{display:block;height:100%;background:var(--p-accent)}@media(max-width:340px){ha-card{padding:16px}header{gap:9px}.hero{padding:17px}.hero .reading{font-size:32px}}`]}setConfig(t){Ht(t,"light"),this._expanded=null,super.setConfig(t)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}devices(){return K(this.config).map(t=>Ri(this.hass,t))}async toggle(t){if(t.available)return this.call("homeassistant.toggle",t.entity)}async all(t){let e=[...new Set(this.devices().filter(i=>i.available).map(i=>i.entity))];if(e.length)return this.call(t?"homeassistant.turn_on":"homeassistant.turn_off",e)}async adjust(t,e,i){let s=this.devices().find(n=>n.entity===t.entity);if(!s?.available||!s.on)return;let r;if(e==="brightness"&&s.dim&&Number.isFinite(i)&&(r={brightness_pct:Math.max(1,Math.min(100,i))}),e==="kelvin"&&s.temperature&&Number.isFinite(i)&&(r={color_temp_kelvin:Math.max(s.minKelvin,Math.min(s.maxKelvin,i))}),e==="color"&&s.rgbCapable&&De(i)&&(r={rgb_color:De(i)}),r)return this.call("light.turn_on",t.entity,r)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.devices(),i=Fi(e),s=i.valid<i.total;return o`<ha-card style=${j(this,{...t,color:t.color||"mint"})}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:lightbulb-group"}></ha-icon></div><div class="heading"><h2>${t.title||t.name||"Luci"}</h2><div class="subtitle">${t.subtitle??"Illuminazione"}</div></div><span class="pill" role="status">${s?"Dati parziali":i.on?`${i.on} ${i.on===1?"accesa":"accese"}`:"Tutte spente"}</span></header><div class="hero">${L("lights")}<div class="right"><div class="reading" aria-live="polite">${i.on}<small>/ ${i.total}</small></div><div class="caption">Luci accese</div></div></div>${t.show_progress_bar?o`<div class="progress"><span style=${`width:${i.total?i.on/i.total*100:0}%`}></span></div>`:""}<div class="group"><button ?disabled=${!i.valid||this.busy||!this.hass.services?.homeassistant?.turn_on} @click=${()=>this.all(!0)}><ha-icon icon="mdi:power"></ha-icon>Accendi tutte</button><button ?disabled=${!i.valid||this.busy||!this.hass.services?.homeassistant?.turn_off} @click=${()=>this.all(!1)}><ha-icon icon="mdi:power-off"></ha-icon>Spegni tutte</button></div><div>${e.map(r=>o`<section class=${r.on?"light":"light off"} style=${r.color?this.palette(r.color):""}><div class="light-top"><div class="light-icon"><ha-icon icon=${r.icon}></ha-icon></div><div class="name-wrap"><button class="name" aria-label=${`Dettagli ${r.name}`} ?disabled=${!r.entity} @click=${()=>this.info(r.entity)}>${r.name}<div class="state">${r.available?r.on?"Accesa":"Spenta":"Non disponibile"}</div></button></div><button class="power" aria-label=${`${r.on?"Spegni":"Accendi"} ${r.name}`} aria-pressed=${String(r.on)} ?disabled=${!r.available||this.busy||!this.hass.services?.homeassistant?.toggle} @click=${()=>this.toggle(r)}><ha-icon icon="mdi:power"></ha-icon></button></div>${r.on&&r.dim&&t.show_brightness!==!1?o`<pastel-device-range .value=${r.brightness} .min=${1} .max=${100} .label=${`Luminosit\xE0 ${r.name}`} caption="Luminosità" .disabled=${this.busy||!this.hass.services?.light?.turn_on} @value-changed=${n=>this.adjust(r,"brightness",n.detail.value)}></pastel-device-range>`:""}${r.on&&(r.temperature||r.rgbCapable)?o`<button class="adjust" aria-expanded=${String(this._expanded===r.entity)} @click=${()=>{this._expanded=this._expanded===r.entity?null:r.entity}}><ha-icon icon="mdi:tune"></ha-icon>${r.rgbCapable?"Colore e bianco":"Tonalit\xE0 del bianco"}</button>${this._expanded===r.entity?o`<div class="settings">${r.temperature?o`<pastel-device-range .value=${r.kelvin} .min=${r.minKelvin} .max=${r.maxKelvin} .step=${100} unit=" K" .label=${`Temperatura colore ${r.name}`} caption="Temperatura del bianco" .disabled=${this.busy||!this.hass.services?.light?.turn_on} @value-changed=${n=>this.adjust(r,"kelvin",n.detail.value)}></pastel-device-range>`:""}${r.rgbCapable?o`<label class="color-label">Colore luce<input type="color" aria-label=${`Colore luce ${r.name}`} .value=${Di(r.rgb)} ?disabled=${this.busy||!this.hass.services?.light?.turn_on} @change=${n=>this.adjust(r,"color",n.target.value)}></label>`:""}</div>`:""}`:""}</section>`)}</div>${s?o`<div class="foot">${i.total-i.valid} ${i.total-i.valid===1?"luce non disponibile":"luci non disponibili"}: escluse dai comandi di gruppo.</div>`:""}${i.total?"":o`<div class="empty">Aggiungi le luci nell’editor.</div>`}${this.feedback()}</ha-card>`}};var Vi=f`.roller{width:102px;height:122px;position:relative;flex-shrink:0;color:var(--p-accent)}.roller-case{position:absolute;inset:0 0 auto;height:17px;border:2px solid currentColor;border-radius:5px;background:var(--p-tint);z-index:2}.roller-frame{position:absolute;left:8px;right:8px;top:15px;bottom:5px;border:2px solid currentColor;border-top:0;background:var(--p-surface);overflow:hidden}.roller-glass{position:absolute;inset:0;background:linear-gradient(130deg,transparent 50%,var(--p-tint) 50%);opacity:.5}.roller-telo{position:absolute;inset:0 0 auto;height:var(--roller-height);background:repeating-linear-gradient(to bottom,var(--p-tint) 0px,var(--p-tint) 7px,currentColor 7px,currentColor 8px);border-bottom:3px solid currentColor}.roller-base{position:absolute;left:2px;right:2px;bottom:0;height:5px;border-radius:2px;background:currentColor}.roller-unknown{position:absolute;inset:0;display:grid;place-items:center;font-size:28px;background:var(--p-tint);opacity:.9}.roller.unknown .roller-telo{display:none}@media(max-width:340px){.roller{width:88px;height:114px}}`;function qi(a){let t=a!==null&&Number.isFinite(a);return o`<div class=${t?"roller":"roller unknown"} aria-hidden="true" style=${`--roller-height:${t?100-Math.max(0,Math.min(100,a)):0}%`}><div class="roller-case"></div><div class="roller-frame"><div class="roller-glass"></div><div class="roller-telo"></div>${t?"":o`<div class="roller-unknown">?</div>`}</div><div class="roller-base"></div></div>`}var Bi=[["open_cover","mdi:arrow-up","Apri"],["stop_cover","mdi:stop","Ferma"],["close_cover","mdi:arrow-down","Chiudi"]],wt=class extends x{static getConfigElement(){return document.createElement("pastel-covers-card-editor")}static getStubConfig(){return{title:"Tapparelle",subtitle:"Controllo aperture",color:"blue",entities:[]}}static get styles(){return[super.styles,Vi,f`.hero .reading{font-size:36px;overflow-wrap:anywhere}.reading small{font-size:17px;margin-left:3px}.group,.cover-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-bottom:16px}.group button{display:flex;align-items:center;justify-content:center;gap:5px;padding:10px 5px;min-height:48px;font-size:12px}.group ha-icon{--mdc-icon-size:17px;flex-shrink:0}.covers{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr));gap:10px}.cover{padding:13px;border:1px solid var(--divider-color,#e1e4e8);border-radius:16px;min-width:0}.cover-icon{width:36px;height:36px;border-radius:12px;background:var(--p-tint);color:var(--p-accent);display:grid;place-items:center;margin-bottom:10px}.cover-icon ha-icon{--mdc-icon-size:20px}.name{min-height:48px;display:block;overflow-wrap:anywhere;text-align:left;padding:0;background:none;color:var(--p-ink);line-height:1.5;width:100%}.position{font-size:26px;color:var(--p-accent);font-variant-numeric:tabular-nums;line-height:1.3;margin-top:8px}.position small{font-size:13px;margin-left:2px}.cover-state,.energy{font-size:12px;line-height:1.6;color:var(--p-muted);margin-top:4px;overflow-wrap:anywhere}.cover-actions{margin:10px 0 0;gap:5px}.cover-actions button{min-width:44px;min-height:48px;padding:7px 0;display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;font-size:11px}.cover-actions ha-icon{--mdc-icon-size:20px}.single-actions{margin-top:12px}.single-actions button{min-height:60px;font-size:12px}.hero .right{flex:1}.foot{line-height:1.6}@media(max-width:370px){.covers{grid-template-columns:1fr}ha-card{padding:16px}header{gap:9px}.hero{padding:17px}.hero .reading{font-size:32px}}`]}setConfig(t){Ht(t,"cover"),super.setConfig(t)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}devices(){return K(this.config).map(t=>ji(this.hass,t))}async run(t,e,i){let s=this.devices().filter(r=>e.includes(r.entity)&&yt(this.hass,r,t));if(s.length&&!(t==="set_cover_position"&&!Number.isFinite(i)))return this.call("cover."+t,[...new Set(s.map(r=>r.entity))],t==="set_cover_position"?{position:Math.round(Math.max(0,Math.min(100,i)))}:{})}energy(t){if(!t)return"";let e=k(this.hass,t),i=this.hass.states[t]?.attributes?.unit_of_measurement||"";return o`<div class="energy">Energia: ${e===null?"\u2014":new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:2}).format(e)} ${i}</div>`}controls(t,e=!1){return o`<div class=${e?"cover-actions single-actions":"cover-actions"}>${Bi.map(([i,s,r])=>o`<button aria-label=${`${r} ${t.name}`} ?disabled=${this.busy||!yt(this.hass,t,i)} @click=${()=>this.run(i,[t.entity])}><ha-icon icon=${s}></ha-icon><span>${r}</span></button>`)}</div>`}range(t){return this.config.show_position!==!1&&t.features&4&&t.position!==null?o`<pastel-device-range .value=${t.position} .label=${`Apertura ${t.name}`} caption="Apertura" .disabled=${this.busy||!yt(this.hass,t,"set_cover_position")} @value-changed=${e=>this.run("set_cover_position",[t.entity],e.detail.value)}></pastel-device-range>`:""}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.devices(),i=Ui(e),s=(!!t.entity&&!t.entities||t.layout==="single")&&e.length===1,r=e[0],n=i.valid<i.total,l=s?r?.position??null:i.average;return o`<ha-card style=${j(this,t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:window-shutter"}></ha-icon></div><div class="heading"><h2>${t.title||t.name||(s?r?.name:"Tapparelle")||"Tapparelle"}</h2><div class="subtitle">${t.subtitle??(s?"Tapparella avvolgibile":"Controllo aperture")}</div>${s?this.energy(r?.energy_entity||t.energy_entity):""}</div><span class="pill" role="status">${n?"Dati parziali":s?r?.label||"Da configurare":`${i.open} ${i.open===1?"aperta":"aperte"}`}</span></header><div class="hero">${qi(l)}<div class="right"><div class="reading" aria-live="polite">${l===null?"\u2014":l}<small>%</small></div><div class="caption">${s?"Apertura":"Apertura media"}</div></div></div>${s&&r?o`${this.range(r)}${this.controls(r,!0)}`:o`<div class="group">${Bi.map(([c,d,g])=>o`<button ?disabled=${this.busy||!e.some(p=>yt(this.hass,p,c))} @click=${()=>this.run(c,e.map(p=>p.entity))}><ha-icon icon=${d}></ha-icon>${c==="stop_cover"?"Ferma":g+" tutte"}</button>`)}</div><div class="covers">${e.map(c=>o`<section class="cover" style=${c.color?this.palette(c.color):""}><div class="cover-icon"><ha-icon icon=${c.icon||"mdi:window-shutter"}></ha-icon></div><button class="name" aria-label=${`Dettagli ${c.name}`} ?disabled=${!c.entity} @click=${()=>this.info(c.entity)}>${c.name}</button><div class="position">${c.position===null?"\u2014":c.position}<small>%</small></div><div class="cover-state" role="status">${c.label}</div>${this.energy(c.energy_entity)}${this.range(c)}${this.controls(c)}</section>`)}</div>`}${i.known<i.total&&i.total?o`<div class="foot">${i.known?"Media calcolata sulle sole posizioni disponibili.":"Posizione percentuale non disponibile."} I comandi dipendono dalle funzioni supportate da ogni dispositivo.</div>`:""}${i.total?"":o`<div class="empty">Aggiungi le tapparelle nell’editor.</div>`}${this.feedback()}</ha-card>`}};var Yt=class extends T{get kind(){return"light"}setConfig(t){let e={...t,title:t.title||t.name,entities:K(t),...this.kind==="cover"?{layout:t.layout||(t.entity&&!t.entities?"single":"group")}:{}};delete e.lights,delete e.entity,super.setConfig(e)}patch(t,e){this.emit({entities:this.config.entities.map((i,s)=>t===s?{...i,...e}:i)})}reorder(t,e){let i=[...this.config.entities],s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this.emit({entities:i}))}paletteSelect(t,e,i,s=!1){let r={green:"mint",purple:"lavender",orange:"peach"}[e]||e;return super.paletteSelect(t,r,i,s)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.kind==="cover";return o`<div class="editor" style=${this.palette(t.color||(e?"blue":"mint"))}><div class="pair">${this.text("Nome card",t.title,i=>this.emit({title:i}))}${this.text("Sottotitolo",t.subtitle,i=>this.emit({subtitle:i}))}</div>${this.paletteSelect("Colore card",t.color||(e?"blue":"mint"),i=>this.emit({color:i}))}<h3>${e?"Tapparelle":"Luci"} (${t.entities.length})</h3>${t.entities.map((i,s)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${i.icon||(e?"mdi:window-shutter":"mdi:lightbulb")}></ha-icon>${i.name||i.entity||"Nuovo dispositivo"}</div>${this.entity(e?"Tapparella":"Luce o interruttore",i.entity,r=>this.patch(s,{entity:r}),r=>e?r.entity_id.startsWith("cover."):Fe.includes(r.entity_id.split(".")[0]))}${this.text("Nome dispositivo",i.name,r=>this.patch(s,{name:r}))}<details><summary>Icona e colore del dispositivo</summary><div class="icon-options">${Oi.map(([r,n])=>o`<button aria-label=${`Icona ${n}`} aria-pressed=${String(i.icon===r)} @click=${()=>this.patch(s,{icon:r})}><ha-icon icon=${r}></ha-icon>${n}</button>`)}</div>${this.text("Icona personalizzata (mdi:...)",i.icon,r=>this.patch(s,{icon:r}))}${this.paletteSelect("Colore dispositivo",i.color||"",r=>this.patch(s,{color:r}),!0)}</details>${e?this.entity("Sensore energia (facoltativo)",i.energy_entity,r=>this.patch(s,{energy_entity:r}),r=>r.entity_id.startsWith("sensor.")&&(r.attributes?.device_class==="energy"||["kWh","Wh"].includes(r.attributes?.unit_of_measurement))):""}<div class="tools"><button aria-label="Sposta dispositivo prima" ?disabled=${s===0} @click=${()=>this.reorder(s,-1)}>↑</button><button aria-label="Sposta dispositivo dopo" ?disabled=${s===t.entities.length-1} @click=${()=>this.reorder(s,1)}>↓</button><button @click=${()=>this.emit({entities:t.entities.filter((r,n)=>s!==n)})}>Rimuovi dispositivo</button></div></section>`)}<button @click=${()=>this.emit({entities:[...t.entities,{entity:"",name:"",icon:e?"mdi:window-shutter":"mdi:lightbulb"}]})}>${e?"Aggiungi tapparella":"Aggiungi luce"}</button><details><summary>Altre opzioni</summary>${e?o`<label>Disposizione<select aria-label="Disposizione" @change=${i=>this.emit({layout:i.target.value})}><option value="group" ?selected=${t.layout!=="single"}>Gruppo con riquadri</option><option value="single" ?selected=${t.layout==="single"}>Singola tapparella</option></select></label><p class="hint">La vista singola si applica quando è associata una sola tapparella.</p>`:""}<label class="check"><input type="checkbox" .checked=${t[e?"show_position":"show_brightness"]!==!1} @change=${i=>this.emit({[e?"show_position":"show_brightness"]:i.target.checked})}>${e?"Mostra regolazione percentuale":"Mostra luminosit\xE0"}</label>${e?"":o`<label class="check"><input type="checkbox" .checked=${!!t.show_progress_bar} @change=${i=>this.emit({show_progress_bar:i.target.checked})}>Mostra barra riepilogo</label>`}${this.text("Icona intestazione",t.icon,i=>this.emit({icon:i}))}<p class="hint">Comandi, slider e colori della luce compaiono solo se supportati. I valori seguono lo stato reale del dispositivo.</p><details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([i,s])=>this.text(s,t[i],r=>this.emit({[i]:r})))}</details></details></div>`}},$t=class extends Yt{},kt=class extends Yt{get kind(){return"cover"}};var Kt=class extends v{static get properties(){return{value:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},label:{type:String},caption:{type:String},unit:{type:String},disabled:{type:Boolean},_draft:{}}}constructor(){super(),this.min=0,this.max=100,this.step=1,this.unit="%"}static get styles(){return f`:host{display:block;min-width:0}.label{display:flex;justify-content:space-between;gap:10px;font-size:12px;line-height:1.5;color:var(--p-muted,#647078);margin-top:12px}output{color:var(--p-accent);font-variant-numeric:tabular-nums}input{display:block;width:100%;min-width:0;height:48px;margin:0;appearance:none;-webkit-appearance:none;background:transparent;touch-action:pan-y;accent-color:var(--p-accent)}input::-webkit-slider-runnable-track{height:5px;border-radius:4px;background:var(--range-track,var(--p-tint))}input::-webkit-slider-thumb{-webkit-appearance:none;width:25px;height:25px;border:2px solid var(--p-accent);border-radius:50%;background:var(--p-surface,#fff);margin-top:-10px}input::-moz-range-track{height:5px;border-radius:4px;background:var(--range-track,var(--p-tint))}input::-moz-range-thumb{width:22px;height:22px;border:2px solid var(--p-accent);border-radius:50%;background:var(--p-surface,#fff)}input:focus-visible{outline:2px solid var(--p-accent);outline-offset:2px}input:disabled{opacity:.4}`}start(t){this.disabled||t.isPrimary===!1||t.button!==0||(this.cancel(),this._pointer={id:t.pointerId,x:t.clientX,y:t.clientY,canceled:!1},this._move=e=>{if(e.pointerId!==this._pointer?.id)return;let i=Math.abs(e.clientX-this._pointer.x),s=Math.abs(e.clientY-this._pointer.y);s>10&&s>i&&(this._pointer.canceled=!0)},this._up=e=>{if(e.pointerId!==this._pointer?.id)return;this._move(e);let i=!this._pointer.canceled,s=this._draft??this.value;this._ignoreUntil=Date.now()+80,this.cancel(),i&&this.commit(s)},this._cancel=e=>{e.pointerId===this._pointer?.id&&(this._ignoreUntil=Date.now()+80,this.cancel())},window.addEventListener("pointermove",this._move),window.addEventListener("pointerup",this._up),window.addEventListener("pointercancel",this._cancel))}cancel(){window.removeEventListener("pointermove",this._move),window.removeEventListener("pointerup",this._up),window.removeEventListener("pointercancel",this._cancel),this._pointer=null,this._draft=void 0;let t=this.shadowRoot?.querySelector("input");t&&(t.value=String(this.value??this.min))}commit(t){this.disabled||!Number.isFinite(Number(t))||this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:Math.max(this.min,Math.min(this.max,Number(t)))},bubbles:!0,composed:!0}))}disconnectedCallback(){this.cancel(),super.disconnectedCallback()}updated(t){t.has("disabled")&&this.disabled&&this.cancel()}render(){let t=this._draft??this.value;return o`<label><span class="label"><span>${this.caption||this.label}</span><output>${t==null?"\u2014":Math.round(t)}${this.unit}</output></span><input type="range" aria-label=${this.label||"Valore"} min=${this.min} max=${this.max} step=${this.step} .value=${String(t??this.min)} ?disabled=${this.disabled} @pointerdown=${e=>this.start(e)} @input=${e=>{this._pointer?.canceled||(this._draft=Number(e.target.value))}} @change=${e=>{!this._pointer&&Date.now()>(this._ignoreUntil||0)&&(this.commit(Number(e.target.value)),this._draft=void 0)}}></label>`}};var zs={sunny:["Sereno","mdi:weather-sunny"],partlycloudy:["Parzialmente nuvoloso","mdi:weather-partly-cloudy"],cloudy:["Nuvoloso","mdi:weather-cloudy"],rainy:["Pioggia","mdi:weather-rainy"],pouring:["Pioggia intensa","mdi:weather-pouring"],snowy:["Neve","mdi:weather-snowy"],fog:["Nebbia","mdi:weather-fog"],hail:["Grandine","mdi:weather-hail"],lightning:["Temporale","mdi:weather-lightning"],"lightning-rainy":["Temporale e pioggia","mdi:weather-lightning-rainy"],"snowy-rainy":["Neve e pioggia","mdi:weather-snowy-rainy"],windy:["Ventoso","mdi:weather-windy"],"windy-variant":["Vento e nuvole","mdi:weather-windy-variant"],"clear-night":["Sereno di notte","mdi:weather-night"],exceptional:["Condizioni eccezionali","mdi:weather-cloudy-alert"]},Wi=a=>zs[a]||["Condizioni non disponibili","mdi:weather-cloudy-alert"],G=a=>a==null||a===""||!Number.isFinite(Number(a))?null:Number(a);function Hi(a,t){let e=a?.states?.[t],i=!!e&&!["unknown","unavailable"].includes(e.state),s=i?e.attributes||{}:{};return{available:i,state:i?e.state:null,condition:Wi(i?e.state:null),temperature:G(s.temperature),temperatureUnit:s.temperature_unit||a?.config?.unit_system?.temperature||"\xB0C",humidity:G(s.humidity),wind:G(s.wind_speed),windUnit:s.wind_speed_unit||"",name:s.friendly_name||t||"Meteo",forecastFeatures:Number(s.supported_features||0)}}function Yi(a){return(Array.isArray(a?.forecast)?a.forecast:[]).filter(t=>t&&t.datetime&&G(t.temperature)!==null).slice(0,3).map(t=>({datetime:t.datetime,temperature:G(t.temperature),low:G(t.templow),condition:Wi(t.condition),precipitation:G(t.precipitation_probability)}))}var Gt=class extends x{static get properties(){return{...super.properties,_forecast:{},_forecastError:{}}}static getConfigElement(){return document.createElement("pastel-weather-card-editor")}static getStubConfig(){return{title:"Meteo",subtitle:"Previsioni locali",entity:"",color:"blue",show_forecast:!0}}static get styles(){return[super.styles,f`.hero{min-height:144px}.hero ha-icon{--mdc-icon-size:80px;flex-shrink:0}.hero .reading{font-size:36px}.hero .condition{font-size:14px;font-weight:600;margin-top:4px}.metrics{margin-bottom:16px}.metric{min-height:72px}.forecast{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}.day{background:var(--p-tint);color:var(--p-accent);border-radius:14px;min-height:74px;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:8px 4px;gap:4px;font-size:12px;text-align:center}.day ha-icon{--mdc-icon-size:19px}.day strong{font-size:12px;font-weight:550;font-variant-numeric:tabular-nums}.day small{font-size:11px}.day[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.forecast-detail{font-size:12px;color:var(--p-muted);margin-top:11px;line-height:1.5;min-height:18px}.hero .right{flex:1}@media(max-width:340px){ha-card{padding:16px}.hero{padding:17px}.hero ha-icon{--mdc-icon-size:64px}.hero .reading{font-size:32px}}`]}setConfig(t){if(t.entity&&!String(t.entity).startsWith("weather."))throw Error("Scegli un\u2019entit\xE0 weather.");this._selected=0,this._forecast=null,this._forecastError="",super.setConfig(t),this.subscribeForecast()}connectedCallback(){super.connectedCallback(),this.subscribeForecast()}disconnectedCallback(){this.unsubscribeForecast(),super.disconnectedCallback()}unsubscribeForecast(){this._subscriptionKey=null;let t=this._subscription;this._subscription=null,t&&t.then(e=>e?.()).catch(()=>{})}subscribeForecast(){let t=this.config?.entity;if(!this.isConnected||!t||this.config?.show_forecast===!1||!this.hass?.connection?.subscribeMessage||!this.hass?.states?.[t]||this._subscriptionKey===t)return;this.unsubscribeForecast(),this._forecast=null,this._forecastError="";let e=this._subscriptionKey=t;this._subscription=this.hass.connection.subscribeMessage(i=>{this._subscriptionKey===e&&(this._forecast=i,this._forecastError="")},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:t}).catch(()=>{this._subscriptionKey===e&&(this._forecast=null,this._forecastError="Previsioni giornaliere non disponibili.")})}updated(t){super.updated(t),t.has("hass")&&this.subscribeForecast()}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}fmt(t){return new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:1}).format(t)}dayName(t){let e=new Date(t);if(Number.isNaN(e.getTime()))return"\u2014";let i=this.hass?.config?.time_zone||void 0,s={year:"numeric",month:"2-digit",day:"2-digit",timeZone:i},r=new Intl.DateTimeFormat("en-CA",s),n=r.format(e),l=new Date,c=new Date(l.getTime()+864e5);return n===r.format(l)?"Oggi":n===r.format(c)?"Domani":new Intl.DateTimeFormat(this.hass?.locale?.language||"it",{weekday:"short",timeZone:i}).format(e)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=Hi(this.hass,t.entity),i=Yi(this._forecast),s=i[this._selected]||i[0];return o`<ha-card style=${j(this,{...t,color:t.color||"blue"})}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:weather-partly-cloudy"}></ha-icon></div><div class="heading"><h2>${t.title||"Meteo"}</h2><div class="subtitle">${t.subtitle??"Previsioni locali"}</div></div><span class="pill" role="status">${e.available?e.condition[0]:"Non disponibile"}</span></header><div class="hero"><ha-icon icon=${e.condition[1]}></ha-icon><div class="right"><div class="reading" aria-live="polite">${e.temperature===null?"\u2014":this.fmt(e.temperature)}<small>${e.temperatureUnit}</small></div><div class="condition">${e.available?e.condition[0]:"Dati non disponibili"}</div><div class="caption">Temperatura attuale</div></div></div>${e.available&&t.show_details!==!1&&(e.humidity!==null||e.wind!==null)?o`<div class="metrics">${e.humidity!==null?o`<div class="metric"><strong>${this.fmt(e.humidity)}<span class="unit">%</span></strong><small>Umidità</small></div>`:""}${e.wind!==null?o`<div class="metric"><strong>${this.fmt(e.wind)}<span class="unit">${e.windUnit}</span></strong><small>Vento</small></div>`:""}</div>`:""}${t.show_forecast!==!1&&e.available?o`<div class="section-label">Prossimi giorni</div>${i.length?o`<div class="forecast">${i.map((r,n)=>o`<button class="day" aria-pressed=${String(s===r)} @click=${()=>{this._selected=n,this.requestUpdate()}}><span>${this.dayName(r.datetime)}</span><ha-icon icon=${r.condition[1]}></ha-icon><strong>${this.fmt(r.temperature)}°${r.low===null?"":` / ${this.fmt(r.low)}\xB0`}</strong></button>`)}</div><div class="forecast-detail" role="status">${this.dayName(s.datetime)}: ${s.condition[0]}${s.precipitation===null?"":` \xB7 pioggia ${this.fmt(s.precipitation)}%`}</div>`:o`<div class="foot">${this._forecastError||"Previsioni non disponibili per questa entit\xE0."}</div>`}`:""}${t.entity?"":o`<div class="empty">Scegli un’entità meteo nell’editor.</div>`}${this.feedback()}</ha-card>`}};var $={PAUSE:1,VOLUME_SET:4,PREVIOUS:16,NEXT:32,TURN_ON:128,TURN_OFF:256,SELECT_SOURCE:2048,PLAY:16384};function Ki(a,t){let e=a?.states?.[t],i=e?.state||null,s=!!i&&!["unknown","unavailable"].includes(i),r=e?.attributes||{},n=Number(r.supported_features||0),l=s&&i!=="off",c=Number.isFinite(Number(r.volume_level))?Math.max(0,Math.min(100,Math.round(Number(r.volume_level)*100))):null,d=Array.isArray(r.source_list)?r.source_list.filter(g=>typeof g=="string"):[];return{available:s,on:l,state:i,features:n,volume:c,source:r.source||"",sources:d,title:r.media_title||"",name:r.friendly_name||t||"TV"}}function je(a,t,e,i){return!!t.available&&!!(t.features&e)&&!!a?.services?.media_player?.[i]&&(i==="turn_on"&&!t.on||i==="turn_off"&&t.on||!["turn_on","turn_off"].includes(i)&&t.on)}var Zt=class extends x{static getConfigElement(){return document.createElement("pastel-tv-card-editor")}static getStubConfig(){return{title:"TV Soggiorno",subtitle:"Televisore",entity:"",color:"lavender",show_transport:!0}}static get styles(){return[super.styles,f`.hero{min-height:132px}.screen{width:103px;height:78px;border:3px solid var(--p-accent);border-radius:10px;display:grid;place-items:center;position:relative;background:color-mix(in srgb,var(--p-tint) 65%,var(--p-surface));flex-shrink:0}.screen:after{content:'';position:absolute;left:27px;right:27px;bottom:-10px;height:7px;border-bottom:2px solid var(--p-accent);border-left:2px solid var(--p-accent);border-right:2px solid var(--p-accent);border-radius:0 0 4px 4px}.screen ha-icon{--mdc-icon-size:31px}.hero .right{flex:1}.hero .reading{font-size:23px;letter-spacing:-.4px;white-space:normal;overflow-wrap:anywhere;font-weight:550}.power{display:grid;grid-template-columns:1fr 1fr;gap:8px}.power button,.transport button{min-height:48px;display:flex;align-items:center;justify-content:center;gap:7px}.power button[aria-pressed=true]{background:var(--p-accent);color:var(--p-surface)}.power ha-icon{--mdc-icon-size:18px}.transport{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:8px 0 14px}.transport button{min-height:54px;padding:7px 4px;flex-direction:column;font-size:11px;gap:4px}.transport ha-icon{--mdc-icon-size:20px}.source{margin-top:8px}.source select{max-width:62%;min-width:0}.foot{line-height:1.5}@media(max-width:340px){ha-card{padding:16px}.hero{padding:17px}.screen{width:82px;height:68px}}`]}setConfig(t){if(t.entity&&!String(t.entity).startsWith("media_player."))throw Error("Scegli un\u2019entit\xE0 media_player.");super.setConfig(t)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}service(t,e,i,s){if(je(this.hass,t,i,e))return this.call("media_player."+e,this.config.entity,s)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=Ki(this.hass,t.entity),i=(r,n)=>!this.busy&&je(this.hass,e,r,n),s=t.show_transport!==!1&&e.on&&!!(e.features&($.PREVIOUS|$.NEXT|$.PAUSE|$.PLAY));return o`<ha-card style=${j(this,{...t,color:t.color||"lavender"})}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:television"}></ha-icon></div><div class="heading"><h2>${t.title||e.name||"TV"}</h2><div class="subtitle">${t.subtitle??"Televisore"}</div></div><span class="pill" role="status">${e.available?e.on?"Acceso":"Spento":"Non disponibile"}</span></header><div class="hero"><div class="screen"><ha-icon icon=${e.on?"mdi:play":"mdi:power-off"}></ha-icon></div><div class="right"><div class="reading" aria-live="polite">${e.available?e.on?e.title||e.source||"Acceso":"Spento":"\u2014"}</div><div class="caption">${e.state==="playing"?"Riproduzione in corso":e.state==="paused"?"In pausa":e.on?"Televisore acceso":"Televisore spento"}</div></div></div><div class="power"><button aria-pressed=${String(e.on)} ?disabled=${!i($.TURN_ON,"turn_on")} @click=${()=>this.service(e,"turn_on",$.TURN_ON)}><ha-icon icon="mdi:power"></ha-icon>Accendi</button><button aria-pressed=${String(e.available&&!e.on)} ?disabled=${!i($.TURN_OFF,"turn_off")} @click=${()=>this.service(e,"turn_off",$.TURN_OFF)}><ha-icon icon="mdi:power-off"></ha-icon>Spegni</button></div>${s?o`<div class="transport"><button ?disabled=${!i($.PREVIOUS,"media_previous_track")} @click=${()=>this.service(e,"media_previous_track",$.PREVIOUS)}><ha-icon icon="mdi:skip-previous"></ha-icon>Precedente</button><button ?disabled=${e.state==="playing"?!i($.PAUSE,"media_pause"):!i($.PLAY,"media_play")} @click=${()=>this.service(e,e.state==="playing"?"media_pause":"media_play",e.state==="playing"?$.PAUSE:$.PLAY)}><ha-icon icon=${e.state==="playing"?"mdi:pause":"mdi:play"}></ha-icon>${e.state==="playing"?"Pausa":"Riprendi"}</button><button ?disabled=${!i($.NEXT,"media_next_track")} @click=${()=>this.service(e,"media_next_track",$.NEXT)}><ha-icon icon="mdi:skip-next"></ha-icon>Successivo</button></div>`:""}${e.volume!==null&&t.show_volume!==!1?o`<pastel-device-range .value=${e.volume} .label=${`Volume ${t.title||e.name}`} caption="Volume" .disabled=${!i($.VOLUME_SET,"volume_set")} @value-changed=${r=>this.service(e,"volume_set",$.VOLUME_SET,{volume_level:r.detail.value/100})}></pastel-device-range>`:""}${e.sources.length&&t.show_source!==!1?o`<label class="control source"><span>Sorgente</span><select aria-label="Sorgente TV" ?disabled=${!i($.SELECT_SOURCE,"select_source")} @change=${r=>this.service(e,"select_source",$.SELECT_SOURCE,{source:r.target.value})}>${e.sources.map(r=>o`<option value=${r} ?selected=${r===e.source}>${r}</option>`)}</select></label>`:""}${t.entity?"":o`<div class="empty">Scegli un televisore nell’editor.</div>`}${this.feedback()}</ha-card>`}};var Es=[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]],Qt=class extends T{get kind(){return"weather"}render(){if(!this.hass||!this.config)return o``;let t=this.kind==="tv",e=this.config;return o`<div class="editor" style=${this.palette(e.color||(t?"lavender":"blue"))}><div class="pair">${this.text("Nome card",e.title,i=>this.emit({title:i}))}${this.text("Sottotitolo",e.subtitle,i=>this.emit({subtitle:i}))}</div>${this.entity(t?"Televisore":"Entit\xE0 meteo",e.entity,i=>this.emit({entity:i}),i=>i.entity_id.startsWith(t?"media_player.":"weather."),t?"Cerca un media player":"Cerca un\u2019entit\xE0 meteo")}${this.paletteSelect("Colore card",e.color||(t?"lavender":"blue"),i=>this.emit({color:i}))}<details><summary>Altre opzioni</summary>${t?o`<label class="check"><input type="checkbox" .checked=${e.show_transport!==!1} @change=${i=>this.emit({show_transport:i.target.checked})}>Mostra comandi riproduzione</label><label class="check"><input type="checkbox" .checked=${e.show_volume!==!1} @change=${i=>this.emit({show_volume:i.target.checked})}>Mostra volume</label><label class="check"><input type="checkbox" .checked=${e.show_source!==!1} @change=${i=>this.emit({show_source:i.target.checked})}>Mostra sorgente</label>`:o`<label class="check"><input type="checkbox" .checked=${e.show_details!==!1} @change=${i=>this.emit({show_details:i.target.checked})}>Mostra umidità e vento</label><label class="check"><input type="checkbox" .checked=${e.show_forecast!==!1} @change=${i=>this.emit({show_forecast:i.target.checked})}>Mostra previsioni giornaliere</label>`}${this.text("Icona intestazione (mdi:...)",e.icon,i=>this.emit({icon:i}))}<details><summary>Colori personalizzati</summary>${Es.map(([i,s])=>this.text(s,e[i],r=>this.emit({[i]:r})))}</details></details></div>`}},Xt=class extends Qt{},Jt=class extends Qt{get kind(){return"tv"}};var Gi=`
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
`;function y(a,t){if(customElements.get(a)){console.warn(`Pastel UI: ${a} gi\xE0 caricato. Rimuovi la vecchia risorsa per usare la versione della suite.`);return}if(a.endsWith("-editor")){customElements.define(a,t);return}if(typeof t.prototype.requestUpdate=="function"){class i extends t{static get styles(){return[super.styles,f([Gi])]}}customElements.define(a,i)}else{class i extends t{_render(...r){let n=super._render(...r);if(this.shadowRoot&&!this.shadowRoot.querySelector("[data-pastel-polish]")){let l=document.createElement("style");l.dataset.pastelPolish="",l.textContent=Gi,this.shadowRoot.append(l)}return n}}customElements.define(a,i)}}var te={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"},gray:{base:"#9ca3af",light:"#e5e7eb",bg:"#f3f4f6",text:"#6b7280"}},As=Object.keys(te);function Ts(a){return te[a]||te.blue}function Ns(a,t){return t%2!==0&&a===t-1}var Ue=class extends v{static get properties(){return{hass:{},config:{},_activating:{state:!0}}}static getStubConfig(){return{title:"",buttons:[{label:"Bottone",icon:"mdi:lightning-bolt",color:"blue",action:{type:"toggle",entity_id:""}}]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title||"",buttons:Array.isArray(t.buttons)?t.buttons:[]},this._activating={}}getCardSize(){return 1+Math.ceil((this.config.buttons||[]).length/2)}static getConfigElement(){return document.createElement("pastel-button-card-editor")}async _handleTap(t,e,i){if(i&&i.stopPropagation(),!t.action)return;try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}this._activating={...this._activating,[e]:!0},setTimeout(()=>{this._activating={...this._activating,[e]:!1}},200);let s=t.action;switch(s.type){case"toggle":s.entity_id&&this.hass.callService("homeassistant","toggle",{entity_id:s.entity_id});break;case"turn_on":if(s.entity_id){let[r]=s.entity_id.split(".");this.hass.callService(r,"turn_on",{entity_id:s.entity_id})}break;case"turn_off":if(s.entity_id){let[r]=s.entity_id.split(".");this.hass.callService(r,"turn_off",{entity_id:s.entity_id})}break;case"call_service":{let[r,n]=(s.service||"").split(".");r&&n&&this.hass.callService(r,n,s.data||{});break}case"scene":s.entity_id&&this.hass.callService("scene","turn_on",{entity_id:s.entity_id});break;case"script":s.entity_id&&this.hass.callService("script","turn_on",{entity_id:s.entity_id});break;case"navigate":s.navigation_path&&(history.pushState(null,"",s.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":s.url_path&&window.open(s.url_path,s.new_tab!==!1?"_blank":"_self");break;case"more_info":if(s.entity_id){let r=new Event("hass-more-info",{bubbles:!0,composed:!0});r.detail={entityId:s.entity_id},this.dispatchEvent(r)}break;default:break}}render(){if(!this.config||!this.hass)return o``;let t=this.config.buttons||[],e=t.length;return o`
      <ha-card>
        ${this.config.title?o`
          <div class="card-title">${this.config.title}</div>
        `:""}

        <div class="button-grid">
          ${t.map((i,s)=>{let r=Ts(i.color),n=Ns(s,e),l=this._activating&&this._activating[s];return o`
              <button
                class="pastel-btn ${l?"activating":""}"
                style="
                  --btn-bg: ${r.bg};
                  --btn-text: ${r.text};
                  --btn-base: ${r.base};
                  --btn-light: ${r.light};
                  ${n?"grid-column: span 2;":""}
                "
                @click=${c=>this._handleTap(i,s,c)}
              >
                ${i.icon?o`
                  <ha-icon icon=${i.icon} class="btn-icon"></ha-icon>
                `:""}
                <span class="btn-label">${i.label||""}</span>
              </button>
            `})}
        </div>
      </ha-card>
    `}static get styles(){return f`
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
    `}};y("pastel-button-card",Ue);var Ve=class extends v{static get properties(){return{hass:{},_config:{state:!0},_dragIndex:{state:!0},_dragOverIndex:{state:!0}}}setConfig(t){this._config={...t,buttons:[...t.buttons||[]]},this._dragIndex=null,this._dragOverIndex=null}_fireChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_addButton(){let t=[...this._config.buttons||[],{label:"Nuovo bottone",icon:"mdi:lightning-bolt",color:"blue",action:{type:"toggle",entity_id:""}}];this._config={...this._config,buttons:t},this._fireChanged()}_removeButton(t){let e=[...this._config.buttons||[]];e.splice(t,1),this._config={...this._config,buttons:e},this._fireChanged()}_updateButton(t,e,i){let s=[...this._config.buttons||[]];s[t]={...s[t],[e]:i},this._config={...this._config,buttons:s},this._fireChanged()}_updateButtonAction(t,e,i){let s=[...this._config.buttons||[]];s[t]={...s[t],action:{...s[t].action||{},[e]:i}},this._config={...this._config,buttons:s},this._fireChanged()}_onDragStart(t,e){this._dragIndex=t,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(t))}_onDragOver(t,e){e.preventDefault(),e.dataTransfer.dropEffect="move",this._dragOverIndex=t}_onDrop(t,e){if(e.preventDefault(),this._dragIndex===null||this._dragIndex===t){this._dragIndex=null,this._dragOverIndex=null;return}let i=[...this._config.buttons||[]],[s]=i.splice(this._dragIndex,1);i.splice(t,0,s),this._config={...this._config,buttons:i},this._dragIndex=null,this._dragOverIndex=null,this._fireChanged()}_onDragEnd(){this._dragIndex=null,this._dragOverIndex=null}_renderActionFields(t,e){let i=t.action?.type||"toggle",s=["toggle","turn_on","turn_off","more_info","scene","script"].includes(i),r=i==="call_service",n=i==="navigate",l=i==="url",c=i==="scene"?["scene"]:i==="script"?["script"]:void 0;return o`
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

      ${s?o`
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
          @change=${d=>{try{let g=JSON.parse(d.target.value||"{}");this._updateButtonAction(e,"data",g)}catch{}}}
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
              @dragstart=${s=>this._onDragStart(i,s)}
              @dragover=${s=>this._onDragOver(i,s)}
              @drop=${s=>this._onDrop(i,s)}
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
                @change=${s=>this._updateButton(i,"label",s.target.value)}
              ></ha-textfield>

              <ha-icon-picker
                label="Icona"
                .value=${e.icon||""}
                @value-changed=${s=>this._updateButton(i,"icon",s.detail.value)}
              ></ha-icon-picker>

              <div class="color-section">
                <div class="color-label">Colore</div>
                <div class="color-row">
                  ${As.map(s=>o`
                    <button
                      class="swatch ${e.color===s?"selected":""}"
                      style="background:${te[s].base}"
                      title=${s}
                      @click=${()=>this._updateButton(i,"color",s)}
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
    `}static get styles(){return f`
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
    `}};y("pastel-button-card-editor",Ve);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-button-card",name:"Pastel Button",description:"Griglia di bottoni pastello personalizzabili: colore, icona, etichetta e azione per ogni bottone. Layout automatico 2 colonne.",preview:!0});var Zi=new WeakMap,N=me(a=>t=>{if(!(t instanceof O))throw new Error("unsafeHTML can only be used in text bindings");let e=Zi.get(t);if(e!==void 0&&it(a)&&a===e.value&&t.value===e.fragment)return;let i=document.createElement("template");i.innerHTML=a;let s=document.importNode(i.content,!0);t.setValue(s),Zi.set(t,{value:a,fragment:s})});var ee={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Xi=Object.keys(ee);function Ps(a){return ee[a]||ee.blue}var Is=["auto","window","door","gate","garage","generic"],Qi={window:{closed:"mdi:window-closed-variant",open:"mdi:window-open-variant"},door:{closed:"mdi:door-closed",open:"mdi:door-open"},gate:{closed:"mdi:gate",open:"mdi:gate-open"},garage:{closed:"mdi:garage",open:"mdi:garage-open"},generic:{closed:"mdi:square-outline",open:"mdi:square"}},Ms={auto:"Automatico",window:"Finestra",door:"Porta",gate:"Cancello",garage:"Basculante",generic:"Generico"};function Ls(a,t){if(a&&a!=="auto")return a;if(!t)return"generic";let e=t.attributes?.device_class;return e==="window"?"window":e==="door"?"door":e==="gate"?"gate":e==="garage_door"?"garage":(t.entity_id?.startsWith("cover."),"generic")}function Os(a){if(!a)return!1;let t=a.state;return t==="on"||t==="open"||t==="opening"||t==="true"}function Rs(a,t){let e=t?"1":"0",i=t?"rotate(-50)":"rotate(0)";return`
    <svg width="70" height="80" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="54" height="64" rx="5" fill="#ffffff" opacity=".7"/>
      <rect x="8" y="8" width="54" height="64" rx="5" stroke="${a.base}" stroke-width="2.5"/>
      <line x1="35" y1="8" x2="35" y2="72" stroke="${a.base}" stroke-width="2" opacity=".6"/>
      <line x1="8" y1="40" x2="62" y2="40" stroke="${a.base}" stroke-width="2" opacity=".6"/>
      <circle cx="35" cy="40" r="4" fill="${a.base}" opacity=".8"/>
      <rect x="36" y="9" width="25" height="30" rx="3" fill="${a.light}"
        style="transform-origin:36px 9px;transform:${i}deg;transition:transform .5s ease"/>
      <g opacity="${e}" style="transition:opacity .4s">
        <path d="M50 20 Q58 24 50 28" stroke="${a.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" repeatCount="indefinite"/>
        </path>
        <path d="M54 30 Q62 34 54 38" stroke="${a.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.5;0" dur="2.1s" repeatCount="indefinite" begin="0.4s"/>
        </path>
        <path d="M50 46 Q58 50 50 54" stroke="${a.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.6;0" dur="1.6s" repeatCount="indefinite" begin="0.8s"/>
        </path>
      </g>
    </svg>`}function Fs(a,t){let e=t?"perspective(300px) rotateY(-55deg)":"perspective(300px) rotateY(0deg)",i=t?"1":"0";return`
    <svg width="60" height="82" viewBox="0 0 60 82" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <rect x="5" y="4" width="50" height="74" rx="4" fill="${a.light}" stroke="${a.base}" stroke-width="2"/>
      <rect x="7" y="6" width="46" height="70" rx="3" fill="#ffffff" opacity=".85"
        style="transform-origin:7px 6px;transform:${e};transition:transform .5s ease"/>
      <circle cx="44" cy="42" r="3.5" fill="${a.base}"/>
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
    </svg>`}function Ds(a,t){let e=t?"perspective(300px) rotateY(-70deg)":"rotateY(0deg)",i=t?"perspective(300px) rotateY(70deg)":"rotateY(0deg)",s=t?"0":"1";return`
    <svg width="90" height="75" viewBox="0 0 90 75" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <rect x="2"  y="8" width="10" height="56" rx="3" fill="${a.base}" opacity=".7"/>
      <rect x="78" y="8" width="10" height="56" rx="3" fill="${a.base}" opacity=".7"/>
      <g style="transform-origin:13px 36px;transform:${e};transition:transform .5s ease">
        <rect x="13" y="12" width="27" height="48" rx="2" fill="${a.light}" stroke="${a.base}" stroke-width="1.5"/>
        <line x1="13" y1="24" x2="40" y2="24" stroke="${a.base}" stroke-width="1" opacity=".4"/>
        <line x1="13" y1="36" x2="40" y2="36" stroke="${a.base}" stroke-width="1" opacity=".4"/>
        <line x1="13" y1="48" x2="40" y2="48" stroke="${a.base}" stroke-width="1" opacity=".4"/>
        <line x1="26" y1="12" x2="26" y2="60" stroke="${a.base}" stroke-width="1" opacity=".4"/>
      </g>
      <g style="transform-origin:77px 36px;transform:${i};transition:transform .5s ease">
        <rect x="50" y="12" width="27" height="48" rx="2" fill="${a.light}" stroke="${a.base}" stroke-width="1.5"/>
        <line x1="50" y1="24" x2="77" y2="24" stroke="${a.base}" stroke-width="1" opacity=".4"/>
        <line x1="50" y1="36" x2="77" y2="36" stroke="${a.base}" stroke-width="1" opacity=".4"/>
        <line x1="50" y1="48" x2="77" y2="48" stroke="${a.base}" stroke-width="1" opacity=".4"/>
        <line x1="63" y1="12" x2="63" y2="60" stroke="${a.base}" stroke-width="1" opacity=".4"/>
      </g>
      <circle cx="45" cy="36" r="5" fill="${a.base}" opacity="${s}" style="transition:opacity .3s">
        <animate attributeName="opacity" values="${t?"0":"0.9;0.5;0.9"}" dur="3s" repeatCount="indefinite"/>
      </circle>
      <rect x="2" y="64" width="86" height="4" rx="2" fill="${a.base}" opacity=".3"/>
    </svg>`}function js(a,t){let e=t?"perspective(400px) rotateX(-85deg)":"rotateX(0deg)",i=t?"1":"0",s=t?"#34c472":a.base;return`
    <svg width="86" height="75" viewBox="0 0 86 75" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <polygon points="4,24 43,4 82,24" fill="${a.light}" stroke="${a.base}" stroke-width="2"/>
      <circle cx="43" cy="15" r="3.5" fill="${s}" style="transition:fill .4s">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      <rect x="4" y="24" width="78" height="48" rx="4" fill="${a.bg}" stroke="${a.base}" stroke-width="2"/>
      <g style="transform-origin:43px 24px;transform:${e};transition:transform .6s ease">
        <rect x="10" y="28" width="66" height="40" rx="3" fill="#ffffff" opacity=".88" stroke="${a.base}" stroke-width="1.5"/>
        <line x1="10" y1="36" x2="76" y2="36" stroke="${a.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="44" x2="76" y2="44" stroke="${a.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="52" x2="76" y2="52" stroke="${a.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="60" x2="76" y2="60" stroke="${a.base}" stroke-width="1" opacity=".35"/>
        <rect x="37" y="45" width="12" height="4" rx="2" fill="${a.base}" opacity=".8"/>
      </g>
      <g opacity="${i}" style="transition:opacity .4s">
        <rect x="10" y="50" width="66" height="20" rx="2" fill="${a.base}" opacity=".08"/>
        <line x1="43" y1="50" x2="43" y2="70" stroke="${a.base}" stroke-width="1" opacity=".2" stroke-dasharray="3,3"/>
      </g>
    </svg>`}function Us(a,t){let e=t?a.base:a.light;return`
    <svg width="68" height="78" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="56" height="62" rx="8" fill="${a.light}" stroke="${a.base}" stroke-width="2"/>
      <rect x="14" y="14" width="40" height="46" rx="5" fill="#ffffff" opacity=".7"/>
      <line x1="14" y1="14" x2="54" y2="60" stroke="${a.base}" stroke-width="1.5" opacity=".15"/>
      <line x1="54" y1="14" x2="14" y2="60" stroke="${a.base}" stroke-width="1.5" opacity=".15"/>
      <circle cx="34" cy="37" r="8" fill="${e}" opacity=".8" style="transition:fill .4s">
        <animate attributeName="r" values="8;9.5;8" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="34" cy="37" r="3" fill="#ffffff"/>
      <circle cx="54" cy="16" r="4" fill="${a.base}" opacity=".7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </svg>`}function Vs(a,t,e){switch(a){case"window":return Rs(t,e);case"door":return Fs(t,e);case"gate":return Ds(t,e);case"garage":return js(t,e);default:return Us(t,e)}}function qs(a,t,e,i){if(i)return{count:"\u2713",label:"tutto chiuso"};let s=e==="window"?"finestr"+(a===1?"a":"e"):e==="door"?a===1?"porta":"porte":e==="gate"?a===1?"cancello":"cancelli":e==="garage"?a===1?"basculante":"basculanti":a===1?"apertura":"aperture";return{count:String(a),label:`${s} aper${a===1?"t"+(e==="window"?"a":"o"):"te"}`}}function Bs(a,t,e){return e?"Casa sicura":a===1?"Una aperta":a===t?"Tutte aperte":`${a} aperte`}function Ws(a,t){let e=[...a];return t==="alpha"?e.sort((i,s)=>i.name.localeCompare(s.name)):t==="open_first"?e.sort((i,s)=>(s.open?1:0)-(i.open?1:0)):t==="closed_first"?e.sort((i,s)=>(i.open?1:0)-(s.open?1:0)):e}function Hs(a,t){return t==="open"?a.filter(e=>e.open):t==="closed"?a.filter(e=>!e.open):a}var qe=class extends v{static get properties(){return{hass:{},config:{},_entities:{state:!0}}}static getStubConfig(){return{title:"Porte e Finestre",subtitle:"Piano terra",icon:"mdi:home",color:"blue",opening_type:"window",show_header:!0,show_hero:!0,show_list:!0,show_badge:!0,show_counter:!0,sort:"manual",filter:"all",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title??"Aperture",subtitle:t.subtitle??"",icon:t.icon??"mdi:home",color:Xi.includes(t.color)?t.color:"blue",opening_type:t.opening_type??"window",show_header:t.show_header??!0,show_hero:t.show_hero??!0,show_list:t.show_list??!0,show_badge:t.show_badge??!0,show_counter:t.show_counter??!0,sort:t.sort??"manual",filter:t.filter??"all",entities:Array.isArray(t.entities)?t.entities:[]},this._pressTimers={},this._tapCounters={}}getCardSize(){return 3+Math.ceil((this.config.entities||[]).length/1)}static getConfigElement(){return document.createElement("pastel-openings-card-editor")}_resolveEntities(){return(this.config.entities||[]).map(t=>{let e=typeof t=="string"?t:t.entity,i=this.hass.states[e],s=Ls(typeof t=="object"?t.type:"auto",i),r=Os(i),n=Qi[s]||Qi.generic;return{id:e,obj:i,name:typeof t=="object"&&t.name?t.name:i?.attributes?.friendly_name||e,type:s,open:r,icon:r?n.open:n.closed,tap:typeof t=="object"?t.tap_action:null,hold:typeof t=="object"?t.hold_action:null,dbl:typeof t=="object"?t.double_tap_action:null}})}_dispatchAction(t,e){if(!t){this._moreInfo(e);return}try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}switch(t.type){case"more_info":this._moreInfo(t.entity_id||e);break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id||e});break;case"turn_on":{let[i]=(t.entity_id||e).split(".");this.hass.callService(i,"turn_on",{entity_id:t.entity_id||e});break}case"turn_off":{let[i]=(t.entity_id||e).split(".");this.hass.callService(i,"turn_off",{entity_id:t.entity_id||e});break}case"call_service":{let[i,s]=(t.service||"").split(".");i&&s&&this.hass.callService(i,s,t.data||{});break}case"navigate":t.navigation_path&&(history.pushState(null,"",t.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":t.url_path&&window.open(t.url_path,t.new_tab!==!1?"_blank":"_self");break;default:this._moreInfo(e)}}_moreInfo(t){if(!t)return;let e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_onPointerDown(t,e){e.stopPropagation(),!(e.isPrimary===!1||e.button!==0)&&(this._onPointerLeave(t),this._pressOrigin={id:t.id,pointerId:e.pointerId,x:e.clientX,y:e.clientY},this._pressTimers[t.id]=setTimeout(()=>{this._pressTimers[t.id]=null,this._dispatchAction(t.hold,t.id)},500))}_onPointerUp(t,e){e.stopPropagation(),this._onPointerMove(t,e),this._pressOrigin?.pointerId===e.pointerId&&this._pressTimers[t.id]&&(clearTimeout(this._pressTimers[t.id]),this._pressTimers[t.id]=null,this._tapCounters[t.id]=(this._tapCounters[t.id]||0)+1,this._tapCounters[t.id]===1&&setTimeout(()=>{this._tapCounters[t.id]===1?(this._tapCounters[t.id]=0,this._dispatchAction(t.tap,t.id)):this._tapCounters[t.id]>1&&(this._tapCounters[t.id]=0,this._dispatchAction(t.dbl,t.id))},300))}_onPointerMove(t,e){let i=this._pressOrigin;i?.id===t.id&&i.pointerId===e.pointerId&&Math.hypot(e.clientX-i.x,e.clientY-i.y)>10&&this._onPointerLeave(t)}disconnectedCallback(){Object.values(this._pressTimers||{}).forEach(clearTimeout),this._tapCounters={},super.disconnectedCallback()}_onPointerLeave(t){clearTimeout(this._pressTimers[t.id]),this._pressTimers[t.id]=null}render(){if(!this.config||!this.hass)return o``;let t=Ps(this.config.color),e=this._resolveEntities(),i=Ws(e,this.config.sort),s=Hs(i,this.config.filter),r=e.filter(b=>b.open).length,n=e.length,l=r===0,c=(()=>{let b={};return e.forEach(u=>{b[u.type]=(b[u.type]||0)+1}),Object.entries(b).sort((u,_)=>_[1]-u[1])[0]?.[0]||"generic"})(),d=c,g=!l,{count:p,label:m}=qs(r,n,c,l),h=Bs(r,n,l);return o`
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
                ${N(Vs(d,t,g))}
              </div>
              <div class="hero-count-block">
                ${this.config.show_counter?o`
                  <div class="hero-count ${l?"count-safe":""}">${p}</div>
                `:""}
                <div class="hero-label">${m}</div>
                ${this.config.show_badge?o`
                  <div class="hero-badge ${l?"badge-safe":"badge-alert"}">${h}</div>
                `:""}
              </div>
            </div>
          </div>
        `:""}

        <!-- list -->
        ${this.config.show_list&&s.length>0?o`
          <div class="panel-list">
            ${s.map((b,u)=>o`
              ${u>0?o`<div class="divider"></div>`:""}
              <div
                class="list-row ${b.open?"row-open":""}"
                @pointerdown=${_=>this._onPointerDown(b,_)}
                @pointerup=${_=>this._onPointerUp(b,_)}
                @pointerleave=${()=>this._onPointerLeave(b)}
                @pointermove=${_=>this._onPointerMove(b,_)}
                @pointercancel=${()=>this._onPointerLeave(b)}
              >
                <ha-icon icon=${b.icon}
                  style="color:${b.open?"var(--c-text)":"var(--secondary-text-color)"}">
                </ha-icon>
                <span class="row-name ${b.open?"":"row-name-closed"}">${b.name}</span>
                <span class="row-status ${b.open?"status-open":""}">
                  ${b.open?"Aperto":"Chiuso"}
                </span>
              </div>
            `)}
          </div>
        `:""}
      </ha-card>
    `}static get styles(){return f`
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
    `}};y("pastel-openings-card",qe);var Be=class extends v{static get properties(){return{hass:{},_config:{state:!0},_entityRegistry:{state:!0}}}connectedCallback(){super.connectedCallback(),this._loadEntityRegistry()}async _loadEntityRegistry(){if(this.hass)try{let t=await this.hass.connection.sendMessagePromise({type:"config/entity_registry/list"});this._entityRegistry=t}catch{this._entityRegistry=[]}}updated(t){t.has("hass")&&this.hass&&!this._entityRegistry&&this._loadEntityRegistry()}setConfig(t){this._config={...t,entities:[...t.entities||[]]}}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_set(t,e){this._config={...this._config,[t]:e},this._fire()}_addEntity(){let t=[...this._config.entities||[],{entity:"",name:"",type:"auto",tap_action:null,hold_action:null,double_tap_action:null}];this._set("entities",t)}_removeEntity(t){let e=[...this._config.entities];e.splice(t,1),this._set("entities",e)}_updateEntity(t,e,i){let s=[...this._config.entities];s[t]={...s[t],[e]:i},this._set("entities",s)}_updateEntityAction(t,e,i,s){let r=[...this._config.entities];r[t]={...r[t],[e]:{...r[t][e]||{type:"more_info"},[i]:s}},this._set("entities",r)}_onDragStart(t,e){this._dragIdx=t,e.dataTransfer.effectAllowed="move"}_onDragOver(t,e){e.preventDefault(),this._dragOver=t}_onDrop(t,e){if(e.preventDefault(),this._dragIdx===null||this._dragIdx===t){this._dragIdx=null;return}let i=[...this._config.entities],[s]=i.splice(this._dragIdx,1);i.splice(t,0,s),this._dragIdx=null,this._set("entities",i)}_renderActionField(t,e,i){let r=((this._config.entities||[])[t]||{})[e]||{type:"more_info"},n=r.type||"more_info",l=["toggle","turn_on","turn_off","more_info"].includes(n),c=n==="call_service";return o`
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
          ${Xi.map(e=>o`
            <button class="swatch ${t.color===e?"selected":""}"
              style="background:${ee[e].base}" title=${e}
              @click=${()=>this._set("color",e)}></button>
          `)}
        </div>

        <!-- Visibilità -->
        <div class="section-label">Visibilità</div>
        <div class="toggles-grid">
          ${[["show_header","Header"],["show_hero","Hero"],["show_list","Lista"],["show_badge","Badge"],["show_counter","Contatore"]].map(([e,i])=>o`
            <label class="toggle-label">
              <input type="checkbox" .checked=${t[e]!==!1}
                @change=${s=>this._set(e,s.target.checked)}/>
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
              @dragstart=${s=>this._onDragStart(i,s)}
              @dragover=${s=>this._onDragOver(i,s)}
              @drop=${s=>this._onDrop(i,s)}
              @dragend=${()=>{this._dragIdx=null,this._dragOver=null}}>

              <div class="entity-header">
                <span class="drag-handle">⠿</span>
                <span class="entity-title">${e.name||e.entity||"Entit\xE0 "+(i+1)}</span>
                <button class="remove-btn" @click=${()=>this._removeEntity(i)}>✕</button>
              </div>

              <ha-entity-picker .hass=${this.hass} .value=${e.entity||""}
                label="Entità"
                @value-changed=${s=>this._updateEntity(i,"entity",s.detail.value)}>
              </ha-entity-picker>

              <ha-textfield label="Nome (opzionale)" .value=${e.name||""}
                @change=${s=>this._updateEntity(i,"name",s.target.value)}>
              </ha-textfield>

              <div class="field-group">
                <div class="field-label">Tipo grafico</div>
                <select class="field-select" .value=${e.type||"auto"}
                  @change=${s=>this._updateEntity(i,"type",s.target.value)}>
                  ${Is.map(s=>o`
                    <option value=${s}>${Ms[s]}</option>
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
    `}static get styles(){return f`
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
    `}};y("pastel-openings-card-editor",Be);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-openings-card",name:"Pastel Openings",description:"Card universale per porte, finestre, cancelli, basculanti \u2014 illustrazioni animate, filtri, ordinamento, azioni complete. Parte della suite Pastel.",preview:!0});var ie={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Ji=Object.keys(ie),Z={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function Ys(a){return ie[a]||ie.amber}function Ks(a,t,e=50){let i=t?Z.light:a.light,s=t?Z.base:a.base,r=t?"#fef2f2":"#fffdf5",n=t?Z.text:a.text,l=Math.round(e*1.36);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="24" height="48" rx="3" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <rect x="14" y="10" width="16" height="40" rx="1.5" fill="${r}" opacity="0.7"/>
      <circle cx="27" cy="30" r="2" fill="${n}"/>
    </svg>`}var We=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Porte e Finestre",subtitle:"Piano terra",icon:"mdi:home",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Porte e Finestre",subtitle:t.subtitle||"",icon:t.icon||"mdi:home",color:Ji.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-doors-windows-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],r=s&&s.attributes.device_class;return r==="window"?e?"mdi:window-open-variant":"mdi:window-closed-variant":r==="garage_door"?e?"mdi:garage-open":"mdi:garage":e?"mdi:door-open":"mdi:door-closed"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Ys(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),s=i.filter(c=>this.hass.states[c].state==="on").length,r=i.length,n=r?Math.round(s/r*100):0,l=s>0;return o`
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
            ${N(Ks(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?Z.base:t.base}">
                ${s}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${l?"aperti":"tutto chiuso"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?Z.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((c,d)=>{let g=typeof c=="string"?c:c.entity,p=this.hass.states[g];if(!p)return o`<div class="row missing">Entità non trovata: ${g}</div>`;let m=p.state==="on",h=this._entityLabel(c),b=this._entityIcon(c,m);return o`
              <div
                class="row ${m?"alarm":""}"
                @click=${u=>this._showMoreInfo(g,u)}
              >
                <ha-icon icon=${b} style="color:${m?Z.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${m?"row-label-alarm":"row-label-off"}">${h}</span>
                <span class="row-status ${m?"badge-alarm":""}" style="color:${m?Z.base:"var(--secondary-text-color)"}">
                  ${m?"Aperto":"Chiuso"}
                </span>
              </div>
              ${d<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return f`
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
    `}};y("pastel-doors-windows-card",We);var He=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:home",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${Ji.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${ie[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: una porta/finestra aperta è sempre evidenziata in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori porte/finestre",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return f`
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
    `}};y("pastel-doors-windows-card-editor",He);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-doors-windows-card",name:"Pastel Doors & Windows",description:"Card per sensori porte/finestre con stile pastello, conteggio aperti e popup dettagli al tap.",preview:!0});var se={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},ts=Object.keys(se);function Gs(a){return se[a]||se.amber}function Zs(a,t,e=50){let i=a.light,s=a.base,r="#ffffff",n=a.text,l=Math.round(e*1.36);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="20" r="13" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <circle cx="22" cy="20" r="6" fill="${r}" opacity="0.8"/>
      <circle cx="22" cy="20" r="2.5" fill="${n}"/>
      <path d="M14 42 Q22 34 30 42 L30 50 Q22 46 14 50 Z" fill="${i}" stroke="${s}" stroke-width="1.5"/>
    </svg>`}var Ye=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Movimento e Presenza",subtitle:"Piano terra",icon:"mdi:motion-sensor",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Movimento e Presenza",subtitle:t.subtitle||"",icon:t.icon||"mdi:motion-sensor",color:ts.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-motion-presence-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i];return(s&&s.attributes.device_class)==="occupancy"?e?"mdi:account":"mdi:account-outline":e?"mdi:motion-sensor":"mdi:motion-sensor-off"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Gs(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),s=i.filter(c=>this.hass.states[c].state==="on").length,r=i.length,n=r?Math.round(s/r*100):0,l=s>0;return o`
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
            ${N(Zs(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${t.base}">
                ${s}<span class="count-total">/${r}</span>
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
          ${this.config.entities.map((c,d)=>{let g=typeof c=="string"?c:c.entity,p=this.hass.states[g];if(!p)return o`<div class="row missing">Entità non trovata: ${g}</div>`;let m=p.state==="on",h=this._entityLabel(c),b=this._entityIcon(c,m);return o`
              <div
                class="row ${m?"active":""}"
                @click=${u=>this._showMoreInfo(g,u)}
              >
                <ha-icon icon=${b} style="color:${m?t.text:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${m?"row-label-active":"row-label-off"}">${h}</span>
                <span class="row-status ${m?"badge-active":""}" style="color:${m?t.text:"var(--secondary-text-color)"}">
                  ${m?"Rilevato":"Libero"}
                </span>
              </div>
              ${d<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return f`
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
    `}};y("pastel-motion-presence-card",Ye);var Ke=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:motion-sensor",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${ts.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${se[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">A differenza delle card di sicurezza, qui lo stato "Rilevato" usa il colore scelto sopra (il movimento non è considerato un allarme).</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori di movimento/presenza",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return f`
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
    `}};y("pastel-motion-presence-card-editor",Ke);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-motion-presence-card",name:"Pastel Motion & Presence",description:"Card per sensori di movimento/presenza con stile pastello, conteggio attivi e popup dettagli al tap.",preview:!0});var ae={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},es=Object.keys(ae),Q={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function Qs(a){return ae[a]||ae.amber}function Xs(a,t,e=50){let i=t?Q.light:a.light,s=t?Q.base:a.base,r=t?"#fef2f2":"#ffffff",n=t?Q.text:a.text,l=Math.round(e*1.2);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4 C22 4 8 24 8 34 C8 42.5 14.3 49 22 49 C29.7 49 36 42.5 36 34 C36 24 22 4 22 4Z"
            fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <ellipse cx="18" cy="32" rx="5" ry="7" fill="${r}" opacity="0.6"/>
      <circle cx="22" cy="36" r="2.5" fill="${n}"/>
    </svg>`}var Ge=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Perdite Acqua",subtitle:"Zona Notte",icon:"mdi:water-alert",color:"blue",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Perdite Acqua",subtitle:t.subtitle||"",icon:t.icon||"mdi:water-alert",color:es.includes(t.color)?t.color:"blue",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-water-leak-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],r=s&&s.attributes.icon;return r||(e?"mdi:water-alert":"mdi:water-check")}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Qs(this.config.color),e=this._entityIds(),i=e.filter(d=>this.hass.states[d]),s=i.filter(d=>this.hass.states[d].state==="on").length,r=i.length,n=r?Math.round(s/r*100):0,l=s>0,c=e.some(d=>!this.hass.states[d]||["unknown","unavailable"].includes(this.hass.states[d].state));return o`
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
            ${N(Xs(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?Q.base:t.base}">
                ${s}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${l?"perdite rilevate":c?"dati mancanti":"tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?Q.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((d,g)=>{let p=typeof d=="string"?d:d.entity,m=this.hass.states[p];if(!m)return o`<div class="row missing">Entità non trovata: ${p}</div>`;let h=m.state==="on",b=this._entityLabel(d),u=this._entityIcon(d,h);return o`
              <div
                class="row ${h?"alarm":""}"
                @click=${_=>this._showMoreInfo(p,_)}
              >
                <ha-icon icon=${u} style="color:${h?Q.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${h?"row-label-alarm":"row-label-off"}">${b}</span>
                <span class="row-status ${h?"badge-alarm":""}" style="color:${h?Q.base:"var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(m.state)?"Non disponibile":h?"Perdita":"OK"}
                </span>
              </div>
              ${g<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return f`
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
    `}};y("pastel-water-leak-card",Ge);var Ze=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:water-alert",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${es.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${ae[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: una perdita rilevata è sempre evidenziata in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori perdita acqua",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return f`
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
    `}};y("pastel-water-leak-card-editor",Ze);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-water-leak-card",name:"Pastel Water Leak",description:"Card per sensori di perdita acqua con stile pastello, conteggio perdite e popup dettagli al tap.",preview:!0});var re={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},is=Object.keys(re),X={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function Js(a){return re[a]||re.amber}function ta(a,t,e=50){let i=t?X.light:a.light,s=t?X.base:a.base,r=t?"#fef2f2":"#fffdf5",n=t?X.text:a.text,l=Math.round(e*1);return`
    <svg width="${e}" height="${l}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="22" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <circle cx="25" cy="25" r="14" fill="${r}" opacity="0.7"/>
      <circle cx="25" cy="25" r="4" fill="${n}"/>
      <path d="M25 10 L25 16 M40 25 L34 25 M25 40 L25 34 M10 25 L16 25" stroke="${s}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    </svg>`}var Qe=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Fumo e CO",subtitle:"Salotto + Quadro Ovest",icon:"mdi:smoke-detector",color:"purple",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Fumo e CO",subtitle:t.subtitle||"",icon:t.icon||"mdi:smoke-detector",color:is.includes(t.color)?t.color:"purple",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-smoke-co-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],r=s&&s.attributes.device_class;return r==="carbon_monoxide"||r==="co"?"mdi:molecule-co2":e?"mdi:smoke-detector-variant-alert":"mdi:smoke-detector-variant"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Js(this.config.color),e=this._entityIds(),i=e.filter(d=>this.hass.states[d]),s=i.filter(d=>this.hass.states[d].state==="on").length,r=i.length,n=r?Math.round(s/r*100):0,l=s>0,c=e.some(d=>!this.hass.states[d]||["unknown","unavailable"].includes(this.hass.states[d].state));return o`
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
            ${N(ta(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?X.base:t.base}">
                ${s}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${l?"in allarme":c?"dati mancanti":"tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?X.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((d,g)=>{let p=typeof d=="string"?d:d.entity,m=this.hass.states[p];if(!m)return o`<div class="row missing">Entità non trovata: ${p}</div>`;let h=m.state==="on",b=this._entityLabel(d),u=this._entityIcon(d,h);return o`
              <div
                class="row ${h?"alarm":""}"
                @click=${_=>this._showMoreInfo(p,_)}
              >
                <ha-icon icon=${u} style="color:${h?X.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${h?"row-label-alarm":"row-label-off"}">${b}</span>
                <span class="row-status ${h?"badge-alarm":""}" style="color:${h?X.base:"var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(m.state)?"Non disponibile":h?"Allarme":"OK"}
                </span>
              </div>
              ${g<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return f`
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
    `}};y("pastel-smoke-co-card",Qe);var Xe=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:smoke-detector",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${is.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${re[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: un sensore in allarme è sempre evidenziato in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori fumo/CO",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return f`
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
    `}};y("pastel-smoke-co-card-editor",Xe);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-smoke-co-card",name:"Pastel Smoke & CO",description:"Card per sensori fumo/CO con stile pastello, conteggio allarmi e popup dettagli al tap.",preview:!0});var ss=[["mdi:thermometer","Termometro"],["mdi:home","Casa"],["mdi:sofa","Soggiorno"],["mdi:bed-double","Camera"],["mdi:door","Ingresso"],["mdi:shower","Bagno"],["mdi:desk","Studio"],["mdi:flower","Esterno"]],rt=a=>["\xB0C","\xB0F","K"].includes(a)?a:null;function ea(a,t,e){if(a===null||!t||!e)return null;let i=t==="\xB0F"?(a-32)*5/9:t==="K"?a-273.15:a;return e==="\xB0F"?i*9/5+32:e==="K"?i+273.15:i}function as(a){return!!a?.entity_id?.startsWith("sensor.")&&a.attributes?.device_class==="humidity"}function rs(a,t){let e=rt(a?.config?.unit_system?.temperature)||"\xB0C",i=rt(t.unit)||rt((t.rooms||[]).map(c=>a?.states?.[c.temp_entity]?.attributes?.unit_of_measurement).find(rt))||e,s=(t.rooms||[]).map(c=>{let d=a?.states?.[c.temp_entity],g=d?.attributes?.unit_of_measurement,p=ea(k(a,c.temp_entity),g?rt(g):i,i),m=k(a,c.hum_entity),h=m!==null&&m>=0&&m<=100?m:null;return{...c,name:c.name||d?.attributes?.friendly_name||"Ambiente",value:p,humidity:h,sourceUnit:g||i,alert:p!==null&&U(t.alert_temp)!==null&&p>=Number(t.alert_temp),humidityAlert:h!==null&&U(t.alert_hum)!==null&&h>=Number(t.alert_hum)}}),r=s.map(c=>c.value).filter(c=>c!==null),n=s.map(c=>c.humidity).filter(c=>c!==null),l=r.length?r.reduce((c,d)=>c+d,0)/r.length:null;return{unit:i,rooms:s,average:l,humidity:n.length?n.reduce((c,d)=>c+d,0)/n.length:null,min:r.length?Math.min(...r):null,max:r.length?Math.max(...r):null,valid:r.length,total:s.length,alert:s.some(c=>c.alert||c.humidityAlert)}}function U(a){return a==null||String(a).trim()===""?null:Number(a)}function os(a,t){let e=U(t.temp_min),i=U(t.temp_max);return a!==null&&Number.isFinite(e)&&Number.isFinite(i)&&i>e?Math.min(100,Math.max(0,(a-e)/(i-e)*100)):null}function ns(a){if(a.rooms!==void 0&&!Array.isArray(a.rooms))throw Error("rooms deve essere una lista di ambienti.");for(let t of a.rooms||[]){if(!t||typeof t!="object"||Array.isArray(t))throw Error("Ambiente non valido.");for(let e of["temp_entity","hum_entity"])if(t[e]!==void 0&&typeof t[e]!="string")throw Error("Scegli un sensore valido.")}for(let t of["temp_min","temp_max","alert_temp","alert_hum"])if(U(a[t])!==null&&!Number.isFinite(U(a[t])))throw Error("Inserisci valori numerici validi.");if(U(a.temp_min)!==null&&U(a.temp_max)!==null&&Number(a.temp_max)<=Number(a.temp_min))throw Error("Il massimo della scala deve superare il minimo.");if(a.unit&&!rt(a.unit))throw Error("Scegli \xB0C, \xB0F oppure K.")}async function ls(a,t){if(!a?.callApi||!t)return null;try{let e=new Date(Date.now()-72e5).toISOString(),s=((await a.callApi("GET",`history/period/${e}?filter_entity_id=${encodeURIComponent(t)}&minimal_response=true&no_attributes=true`))?.[0]||[]).filter(r=>r.state!==null&&String(r.state??"").trim()!==""&&Number.isFinite(Number(r.state)));return s.length<2?null:Number(s[s.length-1].state)-Number(s[0].state)}catch{return null}}var oe=class extends x{static get properties(){return{...super.properties,_trends:{}}}static getConfigElement(){return document.createElement("pastel-temp-card-editor")}static getStubConfig(){return{title:"Temperature",subtitle:"Comfort degli ambienti",color:"blue",show_trend:!1,rooms:[{name:"Soggiorno",icon:"mdi:sofa",temp_entity:"",hum_entity:""}]}}static get styles(){return[super.styles,f`
  .hero .reading{font-size:38px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.reading small{font-size:17px;margin-left:4px;letter-spacing:0}.hero .right{flex:1}.hero .caption{line-height:1.6}.humidity-summary{display:inline-flex;align-items:center;gap:5px;font-size:12px;margin-top:10px}.humidity-summary ha-icon{--mdc-icon-size:16px}.room{padding:16px 0;border-top:1px solid var(--divider-color,#e8ebed)}.room:last-of-type{padding-bottom:0}.room-top{display:flex;align-items:center;gap:12px}.room-icon{width:38px;height:38px;border-radius:12px;background:var(--p-tint);color:var(--p-accent);display:grid;place-items:center;flex-shrink:0}.room-icon ha-icon{--mdc-icon-size:21px}.room-info{flex:1;min-width:0}.room-name{display:block;border:0;padding:0;background:none;color:var(--p-ink);text-align:left;min-height:44px;width:100%;overflow-wrap:anywhere}.room-value{font-size:22px;font-weight:550;font-variant-numeric:tabular-nums;color:var(--p-accent);white-space:nowrap}.room-value small{font-size:12px;margin-left:3px}.room-bottom{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0 0 50px}.humidity{padding:5px 9px;min-height:32px;display:inline-flex;align-items:center;gap:4px;font-size:11px}.humidity ha-icon{--mdc-icon-size:14px}.room-status,.trend{font-size:11px;color:var(--p-muted);line-height:1.7}.alert{color:var(--error-color,#963f3b)}.scale{height:5px;background:var(--p-tint);border-radius:4px;margin:10px 0 0 50px;overflow:hidden}.scale span{display:block;height:100%;background:var(--p-accent);border-radius:4px}.metrics{margin-bottom:16px}.metric small{display:block;margin-bottom:5px}.metric .unit{margin-left:3px}.foot{line-height:1.7}.pill{flex-shrink:0}
  .rooms{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.room{border:1px solid var(--divider-color,#e8ebed);border-radius:16px;padding:14px;min-width:0}.room:last-of-type{padding-bottom:14px}.room-top{flex-wrap:wrap;gap:10px}.room-info{flex-basis:calc(100% - 48px)}.room-name{font-size:13px;line-height:1.5}.room-value{width:100%;font-size:26px;white-space:normal;overflow-wrap:anywhere}.room-bottom{margin:10px 0 0}.scale{margin:10px 0 0}.humidity{min-height:44px}
  @media(max-width:340px){ha-card{padding:16px}.hero{padding:16px}.hero svg{width:76px;height:76px}.hero .reading{font-size:30px}.room-value{font-size:19px}header{gap:9px}.pill{font-size:10px;padding:5px 8px}}
 `]}setConfig(t){ns(t),this._trendEpoch=(this._trendEpoch||0)+1,this._lastFetch=0,this._fetching=!1,this._trends={},super.setConfig(t)}appearance(t){let e={indigo:"lavender",cyan:"blue"}[t.color]||t.color;return[this.palette(e||"blue"),...Object.entries({background_color:"--p-surface",tint_color:"--p-tint",accent_color:"--p-accent",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([i])=>t[i]).map(([i,s])=>`${s}:${t[i]}`)].join(";")}updated(t){(t.has("hass")||t.has("config"))&&this.refreshTrends()}disconnectedCallback(){this._trendEpoch=(this._trendEpoch||0)+1,this._fetching=!1,this._lastFetch=0,this._trends={},super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.refreshTrends()}async refreshTrends(){if(!this.isConnected||!this.hass||!this.config||this.config.show_trend===!1||this._fetching||Date.now()-(this._lastFetch||0)<3e5)return;this._fetching=!0;let t=this._trendEpoch,e=this.hass;this._lastFetch=Date.now();let i=[...new Set((this.config.rooms||[]).map(r=>r.temp_entity).filter(Boolean))],s=await Promise.all(i.map(async r=>[r,await ls(e,r)]));t===this._trendEpoch&&(this._fetching=!1,this._trends=Object.fromEntries(s))}number(t,e=1){return t===null?"\u2014":new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:e}).format(t)}trend(t,e){let i=this._trends?.[t.temp_entity];if(i==null)return"";let s=i*(t.sourceUnit==="\xB0F"?5/9:1)*(e==="\xB0F"?9/5:1);return Math.abs(s)<.1?"Stabile \xB7 2 h":`${s>0?"\u2191 +":"\u2193 "}${this.number(s)}${e} \xB7 2 h`}render(){if(!this.config||!this.hass)return o``;let t=this.config,e=rs(this.hass,t),i=e.valid<e.total,s=e.total?e.valid?e.alert?"Soglia superata":i?"Dati parziali":`${e.valid} ${e.valid===1?"ambiente":"ambienti"}`:"Non disponibile":"Da configurare";return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:thermometer"}></ha-icon></div><div class="heading"><h2>${t.title||"Temperature"}</h2><div class="subtitle">${t.subtitle??"Comfort degli ambienti"}</div></div><span class=${e.alert?"pill alert":"pill"} role="status">${s}</span></header>
 <div class="hero">${L("temperature")}<div class="right"><div class="reading" aria-live="polite">${this.number(e.average)}<small>${e.unit}</small></div><div class="caption">${t.summary_label||(e.total===1?"Temperatura ambiente":"Temperatura media")}</div>${e.rooms.some(r=>r.hum_entity)?o`<div class="humidity-summary"><ha-icon icon="mdi:water-percent"></ha-icon>${this.number(e.humidity,0)}% umidità</div>`:""}</div></div>
 ${e.total>1&&t.show_extremes!==!1?o`<div class="metrics"><div class="metric"><small>Minima rilevata</small><strong>${this.number(e.min)}<span class="unit">${e.unit}</span></strong></div><div class="metric"><small>Massima rilevata</small><strong>${this.number(e.max)}<span class="unit">${e.unit}</span></strong></div></div>`:""}
 <div class="rooms" aria-live="polite">${e.rooms.map(r=>{let n=os(r.value,t),l=t.show_trend!==!1&&r.value!==null?this.trend(r,e.unit):"";return o`<section class="room" style=${r.color?this.palette(r.color):""}><div class="room-top"><div class="room-icon"><ha-icon icon=${r.icon||"mdi:thermometer"}></ha-icon></div><div class="room-info"><button class="room-name" aria-label=${`Dettagli temperatura ${r.name}`} ?disabled=${!r.temp_entity} @click=${()=>this.info(r.temp_entity)}>${r.name}</button></div><div class=${r.alert?"room-value alert":"room-value"}>${this.number(r.value)}<small>${e.unit}</small></div></div><div class="room-bottom">${r.hum_entity?o`<button class=${r.humidityAlert?"humidity alert":"humidity"} aria-label=${`Dettagli umidit\xE0 ${r.name}`} @click=${()=>this.info(r.hum_entity)}><ha-icon icon="mdi:water-percent"></ha-icon>${this.number(r.humidity,0)}%</button>`:""}${r.value===null?o`<span class="room-status">${r.temp_entity?"Temperatura non disponibile":"Sensore da associare"}</span>`:""}${r.hum_entity&&r.humidity===null?o`<span class="room-status">Umidità non disponibile</span>`:""}${r.alert||r.humidityAlert?o`<span class="room-status alert">Soglia superata</span>`:""}${l?o`<span class="trend">${l}</span>`:""}</div>${n!==null?o`<div class="scale" role="meter" aria-label=${`Temperatura ${r.name}`} aria-valuemin=${t.temp_min} aria-valuemax=${t.temp_max} aria-valuenow=${Math.max(Number(t.temp_min),Math.min(Number(t.temp_max),r.value))} aria-valuetext=${`${this.number(r.value)} ${e.unit}`}><span style=${`width:${n}%`}></span></div>`:""}</section>`})}</div>
 ${i&&e.valid?o`<div class="foot">Media su ${e.valid} di ${e.total} ambienti: i sensori non disponibili sono esclusi.</div>`:""}${e.total?"":o`<div class="empty">Aggiungi gli ambienti e scegli i sensori nell’editor.</div>`}</ha-card>`}};var ne=class extends T{paletteSelect(t,e,i,s=!1){let r={green:"mint",purple:"lavender",orange:"peach",indigo:"lavender",cyan:"blue"}[e]||e;return super.paletteSelect(t,r,i,s)}updateRoom(t,e){this.emit({rooms:(this.config.rooms||[]).map((i,s)=>t===s?{...i,...e}:i)})}moveRoom(t,e){let i=[...this.config.rooms||[]],s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this.emit({rooms:i}))}numberField(t,e){return o`<label>${t}<input aria-label=${t} type="number" step="any" .value=${String(this.config[e]??"")} @change=${i=>this.emit({[e]:i.target.value===""?void 0:Number(i.target.value)})}></label>`}check(t,e,i=!0){return o`<label class="check"><input type="checkbox" aria-label=${t} .checked=${this.config[e]??i} @change=${s=>this.emit({[e]:s.target.checked})}>${t}</label>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>
 <div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>
 ${this.paletteSelect("Colore card",t.color||"blue",e=>this.emit({color:e}))}
 <h3>Ambienti (${t.rooms?.length||0})</h3><p class="hint">Aggiungi un riquadro per ogni ambiente. Scegli il sensore di temperatura; l’umidità è facoltativa.</p>
 ${(t.rooms||[]).map((e,i)=>o`<section class="button-editor" aria-label=${`Configura ambiente ${i+1}`}><div class="button-title"><ha-icon icon=${e.icon||"mdi:thermometer"}></ha-icon>${e.name||`Ambiente ${i+1}`}</div>
 ${this.text("Nome ambiente",e.name,s=>this.updateRoom(i,{name:s}))}
 ${this.entity("Sensore temperatura",e.temp_entity,s=>this.updateRoom(i,{temp_entity:s}),Dt,"Cerca un sensore di temperatura")}
 ${this.entity("Sensore umidit\xE0 (facoltativo)",e.hum_entity,s=>this.updateRoom(i,{hum_entity:s}),as,"Cerca un sensore di umidit\xE0")}
 <details><summary>Icona ambiente</summary><div class="icon-options">${ss.map(([s,r])=>o`<button aria-label=${`Icona ${r}`} aria-pressed=${String((e.icon||"mdi:thermometer")===s)} @click=${()=>this.updateRoom(i,{icon:s})}><ha-icon icon=${s}></ha-icon><span>${r}</span></button>`)}</div>${this.text("Icona personalizzata (mdi:...)",e.icon,s=>this.updateRoom(i,{icon:s}))}</details>
 ${this.paletteSelect("Colore ambiente",e.color||"",s=>this.updateRoom(i,{color:s}),!0)}
 <div class="tools"><button aria-label="Sposta ambiente prima" ?disabled=${i===0} @click=${()=>this.moveRoom(i,-1)}>↑</button><button aria-label="Sposta ambiente dopo" ?disabled=${i===(t.rooms||[]).length-1} @click=${()=>this.moveRoom(i,1)}>↓</button><button @click=${()=>this.emit({rooms:t.rooms.filter((s,r)=>i!==r)})}>Rimuovi ambiente</button></div></section>`)}
 <button @click=${()=>this.emit({rooms:[...t.rooms||[],{name:"Nuovo ambiente",icon:"mdi:thermometer",temp_entity:"",hum_entity:""}]})}>Aggiungi ambiente</button>
 <details><summary>Riepilogo e altre opzioni</summary>${this.text("Etichetta riepilogo",t.summary_label,e=>this.emit({summary_label:e}))}${this.check("Mostra minima e massima","show_extremes")}${this.check("Mostra andamento delle ultime 2 ore","show_trend")}<p class="hint">Minima e massima sono le letture attuali degli ambienti, non gli estremi dello storico. L’andamento richiede lo storico Home Assistant.</p>
 <label>Unità temperatura<select aria-label="Unità temperatura" @change=${e=>this.emit({unit:e.target.value})}>${[["","Automatica dal sensore"],["\xB0C","\xB0C"],["\xB0F","\xB0F"],["K","K"]].map(([e,i])=>o`<option value=${e} ?selected=${(t.unit||"")===e}>${i}</option>`)}</select></label>
 ${this.text("Icona intestazione",t.icon,e=>this.emit({icon:e}))}
 <details><summary>Scale e soglie facoltative</summary><p class="hint">Lascia vuoti i campi per nascondere le barre e disattivare le soglie. I valori sono nell’unità visualizzata. Le barre indicano la lettura e non comandano dispositivi.</p><div class="pair">${this.numberField("Minimo scala","temp_min")}${this.numberField("Massimo scala","temp_max")}</div><div class="pair">${this.numberField("Avviso temperatura da","alert_temp")}${this.numberField("Avviso umidit\xE0 da (%)","alert_hum")}</div></details>
 <details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e valori"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],s=>this.emit({[e]:s})))}</details></details>
 </div>`}};var le={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},ds=Object.keys(le);function ia(a){return le[a]||le.blue}function cs(a){if(a==null||a==="unknown"||a==="unavailable")return!1;let t=Number(a);return!Number.isNaN(t)}function sa(a,t){let e=a.bg,i=a.light,s=a.light,r=a.base,n=t?.75:.35,l=t?"1.1s":"2.6s",c=t?"0.95s":"2.3s",d=t?"1.3s":"2.9s";return`
    <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="14" width="120" height="132" rx="14" fill="#f3f8fe" stroke="${i}" stroke-width="2"/>
      <rect x="32" y="26" width="50" height="10" rx="5" fill="${e}"/>
      <circle cx="100" cy="31" r="7" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <circle cx="118" cy="31" r="7" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <rect x="28" y="46" width="104" height="86" rx="8" fill="${e}"/>
      <rect x="34" y="52" width="92" height="74" rx="6" fill="${s}" opacity="0.5"/>

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
    </svg>`}var Je=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Lavastoviglie",subtitle:"Lavastoviglie",icon:"mdi:dishwasher",color:"blue",detection_mode:"power",power_entity:"",power_threshold:5,state_entity:""}}setConfig(t){if(!t)throw new Error("Configurazione non valida");let e=t.detection_mode==="boolean"?"boolean":"power";if(e==="power"&&!t.power_entity)throw new Error("Devi specificare power_entity quando detection_mode \xE8 'power'");if(e==="boolean"&&!t.state_entity)throw new Error("Devi specificare state_entity quando detection_mode \xE8 'boolean'");this.config={title:t.title||"Lavastoviglie",subtitle:t.subtitle||"",icon:t.icon||"mdi:dishwasher",color:ds.includes(t.color)?t.color:"blue",detection_mode:e,power_entity:t.power_entity||"",power_threshold:typeof t.power_threshold=="number"?t.power_threshold:5,state_entity:t.state_entity||""}}getCardSize(){return 4}static getConfigElement(){return document.createElement("pastel-dishwasher-card-editor")}_isOn(){if(!this.hass)return!1;if(this.config.detection_mode==="power"){let e=this.hass.states[this.config.power_entity];if(!e)return!1;let i=e.state;return cs(i)?Number(i)>this.config.power_threshold:!1}let t=this.hass.states[this.config.state_entity];return t?t.state==="on":!1}_powerWatts(){if(this.config.detection_mode!=="power")return null;let t=this.hass.states[this.config.power_entity];if(!t)return null;let e=t.state;return cs(e)?Number(e):null}_showMoreInfo(t,e){if(e&&e.stopPropagation(),!t)return;let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=ia(this.config.color),e=this._isOn(),i=this._powerWatts(),s=this.config.detection_mode==="power"?this.config.power_entity:this.config.state_entity;return o`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-text:${t.text};">

        <div class="header">
          <div class="header-left">
            <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
            <div class="header-text">
              <div class="title">${this.config.title}</div>
              <div class="subtitle">${this.config.subtitle}</div>
            </div>
          </div>
          <span class="badge" @click=${r=>this._showMoreInfo(s,r)}>
            <span class="badge-dot"></span>
            ${e?"Accesa":"Spenta"}
          </span>
        </div>

        <div class="illustration" @click=${r=>this._showMoreInfo(s,r)}>
          ${N(sa(t,e))}
        </div>

        ${this.config.detection_mode==="power"&&i!==null?o`
          <div class="power-row">
            <ha-icon icon="mdi:flash" style="color:${t.text}"></ha-icon>
            <span>${i.toFixed(0)} W</span>
          </div>
        `:""}

      </ha-card>
    `}static get styles(){return f`
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
    `}};y("pastel-dishwasher-card",Je);var ti=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:dishwasher"},i=this._config.detection_mode==="boolean"?"boolean":"power";return o`
      <div class="editor">

        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${t}
          .computeLabel=${s=>this._labelFor(s.name)}
          @value-changed=${s=>{this._config={...this._config,...s.detail.value},this._fireChanged()}}
        ></ha-form>

        <div class="color-section">
          <div class="section-label">Colore della card</div>
          <div class="color-row">
            ${ds.map(s=>o`
              <button
                class="swatch ${this._config.color===s?"selected":""}"
                style="background:${le[s].base}"
                title=${s}
                @click=${()=>this._valueChanged("color",s)}
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
              @value-changed=${s=>this._valueChanged("power_entity",s.detail.value)}
            ></ha-entity-picker>
            <ha-textfield
              label="Soglia in Watt (sopra = accesa)"
              type="number"
              .value=${String(this._config.power_threshold??5)}
              @input=${s=>this._valueChanged("power_threshold",Number(s.target.value))}
            ></ha-textfield>
          `:o`
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._config.state_entity||""}
              .includeDomains=${["binary_sensor","switch","input_boolean"]}
              label="Entità booleano (acceso/spento)"
              @value-changed=${s=>this._valueChanged("state_entity",s.detail.value)}
            ></ha-entity-picker>
          `}
        </div>

      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo",icon:"Icona"}[t]||t}static get styles(){return f`
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
    `}};y("pastel-dishwasher-card-editor",ti);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-dishwasher-card",name:"Pastel Dishwasher",description:"Card lavastoviglie con illustrazione animata, rilevamento stato da consumo o booleano, colore personalizzabile.",preview:!0});var ps={amber:{base:"#f59e0b",bg:"#fef3c7"},blue:{base:"#3b82f6",bg:"#dbeafe"},green:{base:"#10b981",bg:"#d1fae5"},pink:{base:"#ec4899",bg:"#fce7f3"},purple:{base:"#a855f7",bg:"#f3e8ff"},red:{base:"#ef4444",bg:"#fee2e2"},teal:{base:"#14b8a6",bg:"#ccfbf1"},orange:{base:"#f97316",bg:"#ffedd5"}},aa={mowing:"In funzione",docked:"Alla base",paused:"In pausa",returning:"Ritorno alla base",error:"Errore",unavailable:"Non disponibile",unknown:"Sconosciuto"};function ot(a){return a?["unknown","unavailable","",null,void 0].includes(a.state):!0}var ei=class extends v{static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.mower_entity)throw new Error("Devi specificare mower_entity");this.config={title:"Robot tagliaerba",subtitle:"Robot tagliaerba",icon:"mdi:robot-mower",color:"green",image_url:new URL("./lawn-mower.png",import.meta.url).href,...t}}getCardSize(){return 4}_fire(t){let e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_callService(t,e){!this.hass||!this.config.mower_entity||this.hass.callService(t,e,{entity_id:this.config.mower_entity})}render(){if(!this.hass||!this.config)return o``;let t=this.hass.states[this.config.mower_entity],e=t?t.state:"unavailable",i=ot(t),s=ps[this.config.color]||ps.green,r=aa[e]||e,n=this.config.battery_entity?this.hass.states[this.config.battery_entity]:null,l=this.config.area_entity?this.hass.states[this.config.area_entity]:null,c=this.config.time_remaining_entity?this.hass.states[this.config.time_remaining_entity]:null,d=this.config.blade_entity?this.hass.states[this.config.blade_entity]:null,g=this.config.zone_entity?this.hass.states[this.config.zone_entity]:null,p=n&&!ot(n)?n.state:null,m=l&&!ot(l)?l.state:null,h=c&&!ot(c)?`${Math.floor(c.state/60)}:${String(c.state%60).padStart(2,"0")}`:null,b=d&&!ot(d)?d.state:null,u=g&&!ot(g)?g.state:null,_=u&&e==="mowing",E=!i&&e!=="mowing",S=!i&&e==="mowing",P=!i&&e!=="docked"&&e!=="returning";return o`
      <ha-card style="--c-base:${s.base}; --c-bg:${s.bg};">
        <div class="header" @click=${()=>this._fire(this.config.mower_entity)}>
          <img class="icon-img" src="${this.config.image_url}" @error=${us=>{us.target.style.display="none"}} />
          <div class="titles">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
          <div class="badge">
            <span class="dot"></span>${r}
          </div>
        </div>

        ${_?o`<div class="zone-chip" @click=${()=>this._fire(this.config.zone_entity)}>
              <ha-icon icon="mdi:map-marker"></ha-icon> Zona: ${u}
            </div>`:""}

        <div class="stats">
          ${p!==null?o`<div class="stat" @click=${()=>this._fire(this.config.battery_entity)}>
                <div class="stat-label">Batteria</div>
                <div class="stat-value">${p}%</div>
              </div>`:""}
          ${m!==null?o`<div class="stat" @click=${()=>this._fire(this.config.area_entity)}>
                <div class="stat-label">Area</div>
                <div class="stat-value">${m} m²</div>
              </div>`:""}
          ${h!==null?o`<div class="stat" @click=${()=>this._fire(this.config.time_remaining_entity)}>
                <div class="stat-label">Tempo</div>
                <div class="stat-value">${h}</div>
              </div>`:""}
          ${b!==null?o`<div class="stat" @click=${()=>this._fire(this.config.blade_entity)}>
                <div class="stat-label">Lame</div>
                <div class="stat-value">${b}</div>
              </div>`:""}
        </div>

        <div class="actions">
          <button class="btn" ?disabled=${!E} @click=${()=>this._callService("lawn_mower","start_mowing")}>
            <ha-icon icon="mdi:play"></ha-icon> Avvia
          </button>
          <button class="btn" ?disabled=${!S} @click=${()=>this._callService("lawn_mower","pause")}>
            <ha-icon icon="mdi:pause"></ha-icon> Pausa
          </button>
          <button class="btn" ?disabled=${!P} @click=${()=>this._callService("lawn_mower","dock")}>
            <ha-icon icon="mdi:home-import-outline"></ha-icon> Ricarica
          </button>
        </div>
      </ha-card>
    `}static get styles(){return f`
      ha-card {
        border-radius: 28px;
        padding: 16px;
        background: var(--card-background-color, #fff);
      }
      .header {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
      }
      .icon-img {
        width: 56px;
        height: 56px;
        object-fit: contain;
        border-radius: 16px;
        background: var(--c-bg);
      }
      .titles {
        flex: 1;
        min-width: 0;
      }
      .title {
        font-size: 17px;
        font-weight: 600;
      }
      .subtitle {
        font-size: 13px;
        color: var(--c-base);
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 12px;
        background: var(--c-bg);
        color: var(--c-base);
        font-size: 11px;
        font-weight: 600;
        white-space: nowrap;
      }
      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--c-base);
      }
      .zone-chip {
        margin-top: 10px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        font-weight: 600;
        color: var(--c-base);
        background: var(--c-bg);
        padding: 4px 10px;
        border-radius: 12px;
        cursor: pointer;
      }
      .zone-chip ha-icon {
        --mdc-icon-size: 14px;
      }
      .stats {
        display: flex;
        gap: 8px;
        margin-top: 14px;
        flex-wrap: wrap;
      }
      .stat {
        flex: 1;
        min-width: 70px;
        background: var(--c-bg);
        border-radius: 14px;
        padding: 8px 10px;
        cursor: pointer;
      }
      .stat-label {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--c-base);
        opacity: 0.8;
        margin-bottom: 2px;
      }
      .stat-value {
        font-size: 15px;
        font-weight: 600;
      }
      .actions {
        display: flex;
        gap: 8px;
        margin-top: 14px;
      }
      .btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border: 1.5px solid var(--c-base);
        background: var(--c-bg);
        color: var(--c-base);
        border-radius: 16px;
        padding: 10px 4px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .btn[disabled] {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .btn:not([disabled]):hover {
        background: var(--c-base);
        color: white;
      }
    `}static getConfigElement(){return document.createElement("pastel-lawn-mower-card-editor")}static getStubConfig(){return{mower_entity:""}}},ii=class extends v{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){let e=t.target,i=e.configValue;if(!i)return;let s=t.detail&&t.detail.value!==void 0?t.detail.value:e.value;this._config={...this._config,[i]:s};let r=new CustomEvent("config-changed",{detail:{config:this._config}});this.dispatchEvent(r)}_entityPicker(t,e,i=!1){return o`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${this._config[e]||""}
        .label=${t}
        .configValue=${e}
        .required=${i}
        allow-custom-entity
        @value-changed=${this._valueChanged}
      ></ha-entity-picker>
    `}render(){return!this.hass||!this._config?o``:o`
      <div class="form">
        <ha-textfield
          label="Titolo"
          .value=${this._config.title||""}
          .configValue=${"title"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-textfield
          label="Sottotitolo"
          .value=${this._config.subtitle||""}
          .configValue=${"subtitle"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <ha-textfield
          label="URL immagine"
          .value=${this._config.image_url||""}
          .configValue=${"image_url"}
          @input=${this._valueChanged}
        ></ha-textfield>

        ${this._entityPicker("Entit\xE0 robot tagliaerba (obbligatoria)","mower_entity",!0)}
        ${this._entityPicker("Entit\xE0 batteria % (opzionale)","battery_entity")}
        ${this._entityPicker("Entit\xE0 area m\xB2 (opzionale)","area_entity")}
        ${this._entityPicker("Entit\xE0 tempo rimanente (opzionale)","time_remaining_entity")}
        ${this._entityPicker("Entit\xE0 stato lame (opzionale)","blade_entity")}
        ${this._entityPicker("Entit\xE0 zona corrente (opzionale)","zone_entity")}
      </div>
    `}static get styles(){return f`
      .form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px;
      }
    `}};y("pastel-lawn-mower-card",ei);y("pastel-lawn-mower-card-editor",ii);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-lawn-mower-card",name:"Pastel Lawn Mower",description:"Card pastello per robot tagliaerba con controlli, stato lame e zona corrente."});for(let[a,t]of Object.entries({"pastel-appliance-card":gt,"pastel-appliance-card-editor":vt,"pastel-robot-card":Lt,"pastel-robot-card-editor":bt}))customElements.get(a)?console.warn(`Pastel UI: ${a} gi\xE0 caricato; rimuovi la vecchia risorsa.`):customElements.define(a,t);for(let[a,t]of[["pastel-device-range",Kt],["pastel-lights-card",_t],["pastel-lights-card-editor",$t],["pastel-covers-card",wt],["pastel-covers-card-editor",kt],["pastel-weather-card",Gt],["pastel-weather-card-editor",Xt],["pastel-tv-card",Zt],["pastel-tv-card-editor",Jt],["pastel-temp-card",oe],["pastel-temp-card-editor",ne],["pastel-stove-card",Rt],["pastel-stove-card-editor",Ft],["pastel-script-climate-card",jt],["pastel-script-climate-card-editor",T],["pastel-alarm-card",Ut],["pastel-alarm-card-editor",Bt],["pastel-security-card",Vt],["pastel-security-card-editor",Wt]])customElements.get(a)||customElements.define(a,t);for(let[a,t]of[["light-card",_t],["light-card-editor",$t],["tapparella-card",wt],["tapparella-card-editor",kt]])customElements.get(a)||customElements.define(a,class extends t{});ai();console.info("Pastel UI 0.1.0-beta.12");
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
