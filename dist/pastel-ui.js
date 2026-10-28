var Di=Object.defineProperty;var ji=(r,t,e)=>t in r?Di(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Fe=(r,t,e)=>ji(r,typeof t!="symbol"?t+"":t,e);var Fi=[{type:"pastel-alarm-card",name:"Pastel Alarm",description:"Alarm panel and script controls with customizable buttons.",preview:!0},{type:"pastel-security-card",name:"Pastel Security Overview",description:"Alarm status, open doors and windows, and safety sensors.",preview:!0},{type:"pastel-script-climate-card",name:"Pastel Climate AC",description:"Script-controlled air conditioning with a temperature sensor.",preview:!0},{type:"pastel-stove-card",name:"Pastel Pellet Stove",description:"Pellet stove scripts, value controls, status and pellet level.",preview:!0},{type:"pastel-appliance-card",name:"Pastel Appliance",description:"Appliance sensors and controls for air, water, laundry and kitchen devices.",preview:!0},{type:"pastel-robot-card",name:"Pastel Robot",description:"Robot cleaning and gardening controls, maps and zones.",preview:!0},{type:"pastel-lights-card",name:"Pastel Lights",description:"Light controls, brightness and status.",preview:!0},{type:"pastel-button-card",name:"Pastel Button",description:"Customizable action buttons.",preview:!0},{type:"pastel-openings-card",name:"Pastel Openings",description:"Doors, windows and other opening sensors.",preview:!0},{type:"pastel-doors-windows-card",name:"Pastel Doors & Windows",description:"Door and window status.",preview:!0},{type:"pastel-motion-presence-card",name:"Pastel Motion & Presence",description:"Motion and occupancy sensors.",preview:!0},{type:"pastel-water-leak-card",name:"Pastel Water Leak",description:"Water leak sensor status.",preview:!0},{type:"pastel-smoke-co-card",name:"Pastel Smoke & CO",description:"Smoke and carbon monoxide sensor status.",preview:!0},{type:"pastel-temp-card",name:"Pastel Temperature",description:"Room temperature tiles, optional humidity, averages and history trends.",preview:!0},{type:"pastel-dishwasher-card",name:"Pastel Dishwasher",description:"Dishwasher cycle and power monitoring.",preview:!0},{type:"pastel-lawn-mower-card",name:"Pastel Lawn Mower",description:"Lawn mower controls and battery status.",preview:!0}],Vi=new Set(["pastel-climate-card","pastel-clima-card","pastel-thermostat-card","pastel-temp-humidity-card"]);function Ve(r=window){let t=r.customCards||(r.customCards=[]),e=new Set;for(let i=0;i<t.length;)Vi.has(t[i].type)||e.has(t[i].type)?t.splice(i,1):(e.add(t[i].type),i++);for(let i of Fi){let s=t.find(a=>a.type===i.type);s?Object.assign(s,i):t.push({...i})}return t}var Yt=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Kt=(r,t,e=null,i=null)=>{for(;t!==e;){let s=t.nextSibling;r.insertBefore(t,i),t=s}},F=(r,t,e=null)=>{for(;t!==e;){let i=t.nextSibling;r.removeChild(t),t=i}};var A=`{{lit-${String(Math.random()).slice(2)}}}`,Gt=`<!--${A}-->`,Be=new RegExp(`${A}|${Gt}`),G="$lit$",V=class{constructor(t,e){this.parts=[],this.element=e;let i=[],s=[],a=document.createTreeWalker(e.content,133,null,!1),n=0,l=-1,c=0,{strings:d,values:{length:f}}=t;for(;c<f;){let u=a.nextNode();if(u===null){a.currentNode=s.pop();continue}if(l++,u.nodeType===1){if(u.hasAttributes()){let p=u.attributes,{length:m}=p,g=0;for(let h=0;h<m;h++)Ue(p[h].name,G)&&g++;for(;g-- >0;){let h=d[c],y=gt.exec(h)[2],_=y.toLowerCase()+G,k=u.getAttribute(_);u.removeAttribute(_);let P=k.split(Be);this.parts.push({type:"attribute",index:l,name:y,strings:P}),c+=P.length-1}}u.tagName==="TEMPLATE"&&(s.push(u),a.currentNode=u.content)}else if(u.nodeType===3){let p=u.data;if(p.indexOf(A)>=0){let m=u.parentNode,g=p.split(Be),h=g.length-1;for(let y=0;y<h;y++){let _,k=g[y];if(k==="")_=T();else{let P=gt.exec(k);P!==null&&Ue(P[2],G)&&(k=k.slice(0,P.index)+P[1]+P[2].slice(0,-G.length)+P[3]),_=document.createTextNode(k)}m.insertBefore(_,u),this.parts.push({type:"node",index:++l})}g[h]===""?(m.insertBefore(T(),u),i.push(u)):u.data=g[h],c+=h}}else if(u.nodeType===8)if(u.data===A){let p=u.parentNode;(u.previousSibling===null||l===n)&&(l++,p.insertBefore(T(),u)),n=l,this.parts.push({type:"node",index:l}),u.nextSibling===null?u.data="":(i.push(u),l--),c++}else{let p=-1;for(;(p=u.data.indexOf(A,p+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(let u of i)u.parentNode.removeChild(u)}},Ue=(r,t)=>{let e=r.length-t.length;return e>=0&&r.slice(e)===t},st=r=>r.index!==-1,T=()=>document.createComment(""),gt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var Qt=133;function Xt(r,t){let{element:{content:e},parts:i}=r,s=document.createTreeWalker(e,Qt,null,!1),a=rt(i),n=i[a],l=-1,c=0,d=[],f=null;for(;s.nextNode();){l++;let u=s.currentNode;for(u.previousSibling===f&&(f=null),t.has(u)&&(d.push(u),f===null&&(f=u)),f!==null&&c++;n!==void 0&&n.index===l;)n.index=f!==null?-1:n.index-c,a=rt(i,a),n=i[a]}d.forEach(u=>u.parentNode.removeChild(u))}var Bi=r=>{let t=r.nodeType===11?0:1,e=document.createTreeWalker(r,Qt,null,!1);for(;e.nextNode();)t++;return t},rt=(r,t=-1)=>{for(let e=t+1;e<r.length;e++){let i=r[e];if(st(i))return e}return-1};function qe(r,t,e=null){let{element:{content:i},parts:s}=r;if(e==null){i.appendChild(t);return}let a=document.createTreeWalker(i,Qt,null,!1),n=rt(s),l=0,c=-1;for(;a.nextNode();)for(c++,a.currentNode===e&&(l=Bi(t),e.parentNode.insertBefore(t,e));n!==-1&&s[n].index===c;){if(l>0){for(;n!==-1;)s[n].index+=l,n=rt(s,n);return}n=rt(s,n)}}var We=new WeakMap,Zt=r=>((...t)=>{let e=r(...t);return We.set(e,!0),e}),B=r=>typeof r=="function"&&We.has(r);var C={},bt={};var N=class{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(let i of this.__parts)i!==void 0&&i.setValue(t[e]),e++;for(let i of this.__parts)i!==void 0&&i.commit()}_clone(){let t=Yt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1),a=0,n=0,l,c=s.nextNode();for(;a<i.length;){if(l=i[a],!st(l)){this.__parts.push(void 0),a++;continue}for(;n<l.index;)n++,c.nodeName==="TEMPLATE"&&(e.push(c),s.currentNode=c.content),(c=s.nextNode())===null&&(s.currentNode=e.pop(),c=s.nextNode());if(l.type==="node"){let d=this.processor.handleTextExpression(this.options);d.insertAfterNode(c.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,l.name,l.strings,this.options));a++}return Yt&&(document.adoptNode(t),customElements.upgrade(t)),t}};var He=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:r=>r}),Ui=` ${A} `,I=class{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){let t=this.strings.length-1,e="",i=!1;for(let s=0;s<t;s++){let a=this.strings[s],n=a.lastIndexOf("<!--");i=(n>-1||i)&&a.indexOf("-->",n+1)===-1;let l=gt.exec(a);l===null?e+=a+(i?Ui:Gt):e+=a.substr(0,l.index)+l[1]+l[2]+G+l[3]+A}return e+=this.strings[t],e}getTemplateElement(){let t=document.createElement("template"),e=this.getHTML();return He!==void 0&&(e=He.createHTML(e)),t.innerHTML=e,t}},Q=class extends I{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){let t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),Kt(e,i.firstChild),t}};var Z=r=>r===null||!(typeof r=="object"||typeof r=="function"),vt=r=>Array.isArray(r)||!!(r&&r[Symbol.iterator]),X=class{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new at(this)}_getValue(){let t=this.strings,e=t.length-1,i=this.parts;if(e===1&&t[0]===""&&t[1]===""){let a=i[0].value;if(typeof a=="symbol")return String(a);if(typeof a=="string"||!vt(a))return a}let s="";for(let a=0;a<e;a++){s+=t[a];let n=i[a];if(n!==void 0){let l=n.value;if(Z(l)||!vt(l))s+=typeof l=="string"?l:String(l);else for(let c of l)s+=typeof c=="string"?c:String(c)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},at=class{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==C&&(!Z(t)||t!==this.value)&&(this.value=t,B(t)||(this.committer.dirty=!0))}commit(){for(;B(this.value);){let t=this.value;this.value=C,t(this)}this.value!==C&&this.committer.commit()}},M=class r{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(T()),this.endNode=t.appendChild(T())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=T()),t.__insert(this.endNode=T())}insertAfterPart(t){t.__insert(this.startNode=T()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;B(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=C,e(this)}let t=this.__pendingValue;t!==C&&(Z(t)?t!==this.value&&this.__commitText(t):t instanceof I?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):vt(t)?this.__commitIterable(t):t===bt?(this.value=bt,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){let e=this.startNode.nextSibling;t=t??"";let i=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){let e=this.options.templateFactory(t);if(this.value instanceof N&&this.value.template===e)this.value.update(t.values);else{let i=new N(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());let e=this.value,i=0,s;for(let a of t)s=e[i],s===void 0&&(s=new r(this.options),e.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(a),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){F(this.startNode.parentNode,t.nextSibling,this.endNode)}},ot=class{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;B(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=C,e(this)}if(this.__pendingValue===C)return;let t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=C}},nt=class extends X{constructor(t,e,i){super(t,e,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new yt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},yt=class extends at{},Ye=!1;(()=>{try{let r={get capture(){return Ye=!0,!1}};window.addEventListener("test",r,r),window.removeEventListener("test",r,r)}catch{}})();var lt=class{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(t){this.__pendingValue=t}commit(){for(;B(this.__pendingValue);){let a=this.__pendingValue;this.__pendingValue=C,a(this)}if(this.__pendingValue===C)return;let t=this.__pendingValue,e=this.value,i=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=t!=null&&(e==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=qi(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=C}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}},qi=r=>r&&(Ye?{capture:r.capture,passive:r.passive,once:r.once}:r.capture);function Jt(r){let t=U.get(r.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},U.set(r.type,t));let e=t.stringsArray.get(r.strings);if(e!==void 0)return e;let i=r.strings.join(A);return e=t.keyString.get(i),e===void 0&&(e=new V(r,r.getTemplateElement()),t.keyString.set(i,e)),t.stringsArray.set(r.strings,e),e}var U=new Map;var L=new WeakMap,te=(r,t,e)=>{let i=L.get(t);i===void 0&&(F(t,t.firstChild),L.set(t,i=new M(Object.assign({templateFactory:Jt},e))),i.appendInto(t)),i.setValue(r),i.commit()};var xt=class{handleAttributeExpressions(t,e,i,s){let a=e[0];return a==="."?new nt(t,e.slice(1),i).parts:a==="@"?[new lt(t,e.slice(1),s.eventContext)]:a==="?"?[new ot(t,e.slice(1),i)]:new X(t,e,i).parts}handleTextExpression(t){return new M(t)}},_t=new xt;typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var o=(r,...t)=>new I(r,t,"html",_t),w=(r,...t)=>new Q(r,t,"svg",_t);var Ke=(r,t)=>`${r}--${t}`,wt=!0;typeof window.ShadyCSS>"u"?wt=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),wt=!1);var Wi=r=>t=>{let e=Ke(t.type,r),i=U.get(e);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},U.set(e,i));let s=i.stringsArray.get(t.strings);if(s!==void 0)return s;let a=t.strings.join(A);if(s=i.keyString.get(a),s===void 0){let n=t.getTemplateElement();wt&&window.ShadyCSS.prepareTemplateDom(n,r),s=new V(t,n),i.keyString.set(a,s)}return i.stringsArray.set(t.strings,s),s},Hi=["html","svg"],Yi=r=>{Hi.forEach(t=>{let e=U.get(Ke(t,r));e!==void 0&&e.keyString.forEach(i=>{let{element:{content:s}}=i,a=new Set;Array.from(s.querySelectorAll("style")).forEach(n=>{a.add(n)}),Xt(i,a)})})},Ge=new Set,Ki=(r,t,e)=>{Ge.add(r);let i=e?e.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:a}=s;if(a===0){window.ShadyCSS.prepareTemplateStyles(i,r);return}let n=document.createElement("style");for(let d=0;d<a;d++){let f=s[d];f.parentNode.removeChild(f),n.textContent+=f.textContent}Yi(r);let l=i.content;e?qe(e,n,l.firstChild):l.insertBefore(n,l.firstChild),window.ShadyCSS.prepareTemplateStyles(i,r);let c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(e){l.insertBefore(n,l.firstChild);let d=new Set;d.add(n),Xt(e,d)}},Qe=(r,t,e)=>{if(!e||typeof e!="object"||!e.scopeName)throw new Error("The `scopeName` option is required.");let i=e.scopeName,s=L.has(t),a=wt&&t.nodeType===11&&!!t.host,n=a&&!Ge.has(i),l=n?document.createDocumentFragment():t;if(te(r,l,Object.assign({templateFactory:Wi(i)},e)),n){let c=L.get(l);L.delete(l);let d=c.value instanceof N?c.value.template:void 0;Ki(i,l,d),F(t,t.firstChild),t.appendChild(l),L.set(t,c)}!s&&a&&window.ShadyCSS.styleElement(t.host)};var Xe;window.JSCompiler_renameProperty=(r,t)=>r;var oe={toAttribute(r,t){switch(t){case Boolean:return r?"":null;case Object:case Array:return r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){switch(t){case Boolean:return r!==null;case Number:return r===null?null:Number(r);case Object:case Array:return JSON.parse(r)}return r}},Ze=(r,t)=>t!==r&&(t===t||r===r),ee={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:Ze},ie=1,se=4,re=8,ae=16,ne="finalized",J=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let t=[];return this._classProperties.forEach((e,i)=>{let s=this._attributeNameForProperty(i,e);s!==void 0&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((e,i)=>this._classProperties.set(i,e))}}static createProperty(t,e=ee){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;let i=typeof t=="symbol"?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let a=this[t];this[e]=s,this.requestUpdateInternal(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ee}static finalize(){let t=Object.getPrototypeOf(this);if(t.hasOwnProperty(ne)||t.finalize(),this[ne]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(e):[]];for(let s of i)this.createProperty(s,e[s])}}static _attributeNameForProperty(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Ze){return i(t,e)}static _propertyValueFromAttribute(t,e){let i=e.type,s=e.converter||oe,a=typeof s=="function"?s:s.fromAttribute;return a?a(t,i):t}static _propertyValueToAttribute(t,e){if(e.reflect===void 0)return;let i=e.type,s=e.converter;return(s&&s.toAttribute||oe.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){let i=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=ee){let s=this.constructor,a=s._attributeNameForProperty(t,i);if(a!==void 0){let n=s._propertyValueToAttribute(e,i);if(n===void 0)return;this._updateState=this._updateState|re,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._updateState=this._updateState&~re}}_attributeToProperty(t,e){if(this._updateState&re)return;let i=this.constructor,s=i._attributeToPropertyMap.get(t);if(s!==void 0){let a=i.getPropertyOptions(s);this._updateState=this._updateState|ae,this[s]=i._propertyValueFromAttribute(e,a),this._updateState=this._updateState&~ae}}requestUpdateInternal(t,e,i){let s=!0;if(t!==void 0){let a=this.constructor;i=i||a.getPropertyOptions(t),a._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),i.reflect===!0&&!(this._updateState&ae)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|se;try{await this._updatePromise}catch{}let t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&se}get hasUpdated(){return this._updateState&ie}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1,e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(this._updateState&ie||(this._updateState=this._updateState|ie,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~se}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,i)=>this._propertyToAttribute(i,this[i],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}};Xe=ne;J[Xe]=!0;var Je=Element.prototype,Cr=Je.msMatchesSelector||Je.webkitMatchesSelector;var $t=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),ct=class{constructor(t,e){if(e!==le)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&($t?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},ti=r=>new ct(String(r),le),Gi=r=>{if(r instanceof ct)return r.cssText;if(typeof r=="number")return r;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${r}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},b=(r,...t)=>{let e=t.reduce((i,s,a)=>i+Gi(s)+r[a+1],r[0]);return new ct(e,le)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var ei={},v=class extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let t=this.getStyles();if(Array.isArray(t)){let e=(a,n)=>a.reduceRight((l,c)=>Array.isArray(c)?e(c,l):(l.add(c),l),n),i=e(t,new Set),s=[];i.forEach(a=>s.unshift(a)),this._styles=s}else this._styles=t===void 0?[]:[t];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!$t){let i=Array.prototype.slice.call(e.cssRules).reduce((s,a)=>s+a.cssText,"");return ti(i)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){let t=this.constructor._styles;t.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(e=>e.cssText),this.localName):$t?this.renderRoot.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){let e=this.render();super.update(t),e!==ei&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{let s=document.createElement("style");s.textContent=i.cssText,this.renderRoot.appendChild(s)}))}render(){return ei}};v.finalized=!0;v.render=Qe;v.shadowRootOptions={mode:"open"};var ce={blue:["#dcecf8","#2e618c"],mint:["#ddf0e7","#306b55"],peach:["#f9e6d9","#8f5538"],lavender:["#ece5f7","#6d558c"],pink:["#f7e1ed","#8e496e"],amber:["#f5edcf","#786022"],green:["#ddf0e7","#306b55"],purple:["#ece5f7","#6d558c"],orange:["#f9e6d9","#8f5538"],teal:["#d9efec","#306b65"],red:["#f7e1df","#963f3b"]},ii=b`
 :host{display:block;--p-ink:var(--primary-text-color,#252c34);--p-muted:var(--secondary-text-color,#647078);--p-surface:var(--ha-card-background,var(--card-background-color,#fff));color:var(--p-ink);font-family:inherit}
 *{box-sizing:border-box}ha-card{display:block;padding:20px;border-radius:26px;background:var(--p-surface);border:1px solid var(--divider-color,#e8ebed);box-shadow:0 4px 18px #14283306;color:var(--p-ink)}
 header{display:flex;align-items:center;gap:12px;margin-bottom:20px}.icon{background:var(--p-tint);color:var(--p-accent);width:44px;height:44px;border-radius:15px;display:grid;place-items:center;flex-shrink:0}
 .heading{flex:1;min-width:0}h2{font-size:17px;line-height:1.3;letter-spacing:-.3px;margin:0;font-weight:650;overflow-wrap:anywhere}.subtitle,.muted{color:var(--p-muted);font-size:12px;line-height:1.6}.subtitle{margin-top:3px}.hero{background:var(--p-tint);color:var(--p-accent);border-radius:20px;padding:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;min-height:130px}.hero svg{width:98px;height:98px;flex-shrink:0}.hero .reading{font-size:32px;letter-spacing:-1px;line-height:1.2}.hero .caption{font-size:12px;margin-top:6px}.hero .right{text-align:right;min-width:0}.pill{font-size:11px;line-height:1.5;background:var(--p-tint);color:var(--p-accent);padding:6px 10px;border-radius:20px;max-width:50%;overflow-wrap:anywhere}.status{font-size:15px;font-weight:600;overflow-wrap:anywhere}
 .metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:16px}.metric{padding:13px 14px;border:1px solid var(--divider-color,#e8ebed);border-radius:16px;text-align:left;background:transparent;color:inherit;min-height:74px}.metric strong{display:block;font-size:22px;font-weight:550;letter-spacing:-.5px;font-variant-numeric:tabular-nums}.metric small{font-size:11px;color:var(--p-muted)}.metric .unit{font-size:12px;margin-left:4px;color:var(--p-muted)}
 button,select,input{font:inherit}button{cursor:pointer;touch-action:pan-y;min-height:44px;border:0;border-radius:13px;padding:10px 14px;background:var(--p-tint);color:var(--p-accent);font-weight:550;font-size:13px}button:disabled{opacity:.45;cursor:default}button:focus-visible,select:focus-visible,input:focus-visible{outline:2px solid var(--p-accent);outline-offset:3px}.actions{display:flex;gap:8px;flex-wrap:wrap}.actions button{flex:1;min-width:80px}.control{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--divider-color,#e8ebed);font-size:13px}.control span{min-width:0;overflow-wrap:anywhere}.control select{max-width:60%}select,input{background:var(--p-surface);color:var(--p-ink);border:1px solid var(--divider-color,#dce2e6);border-radius:10px;padding:10px;min-height:44px;max-width:100%}input[type=number]{width:100px}.error{background:#fae3e0;color:#8e302a;border-radius:12px;padding:12px;font-size:13px;margin-top:12px}.empty{padding:20px;color:var(--p-muted);font-size:14px;line-height:1.7}.foot{font-size:11px;color:var(--p-muted);margin-top:14px}.map{width:100%;border-radius:16px;margin-top:16px;display:block}.zones{margin-top:16px}h3{font-size:13px;font-weight:600;margin:18px 0 10px}.temperature{display:flex;gap:12px;align-items:center;justify-content:center;margin-bottom:16px}.temperature strong{font-size:30px;font-weight:550}.temperature button{font-size:20px;min-width:44px}.editor{display:grid;gap:14px;padding:12px}.editor label{display:grid;gap:6px;font-size:13px}.editor select,.editor input{width:100%}.editor .pair{display:grid;grid-template-columns:1fr 1fr;gap:10px}.editor details{border:1px solid var(--divider-color,#ddd);border-radius:14px;padding:12px}.editor summary{cursor:pointer;font-weight:600;font-size:13px}.editor .check{display:flex;align-items:center;gap:10px;margin:10px 0}.editor .check input{width:18px;min-height:18px}.editor .hint{font-size:12px;color:var(--p-muted);line-height:1.6}.editor button{min-height:44px}.section-label{font-size:10px;text-transform:uppercase;letter-spacing:1.6px;color:var(--p-muted);margin:20px 0 10px}
 @media(prefers-reduced-motion:no-preference){button{transition:filter .15s}button:hover{filter:brightness(.96)}}
`;var $=class extends v{static get properties(){return{hass:{},config:{},error:{},busy:{}}}static get styles(){return ii}setConfig(t){this.config={...t},this.error=""}getCardSize(){return 5}getGridOptions(){return{columns:6,min_columns:3,rows:"auto"}}palette(t="blue"){let[e,i]=ce[t]||ce.blue;return`--p-tint:${e};--p-accent:${i}`}info(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}async call(t,e,i={},s){if(this.busy)return;let[a,n]=String(t||"").split(".");if(!a||!n||!this.hass?.services?.[a]?.[n]){this.error="Questo comando non \xE8 disponibile.";return}this.busy=!0,this.error="";try{await this.hass.callService(a,n,{...i,...e?{entity_id:e}:{}},s)}catch(l){this.error=l.message||"Comando non riuscito."}finally{this.busy=!1}}guardPress(t){this._origin={x:t.clientX,y:t.clientY,id:t.pointerId},this._moved=!1}guardMove(t){this._origin?.id===t.pointerId&&Math.hypot(t.clientX-this._origin.x,t.clientY-this._origin.y)>10&&(this._moved=!0)}guardCancel(){this._moved=!0}guardClick(t){t.detail!==0&&this._moved&&(t.stopPropagation(),t.preventDefault())}connectedCallback(){super.connectedCallback(),this._down=t=>this.guardPress(t),this._move=t=>this.guardMove(t),this._cancel=()=>this.guardCancel(),this._click=t=>this.guardClick(t),this.addEventListener("pointerdown",this._down,!0),this.addEventListener("pointermove",this._move,!0),this.addEventListener("pointercancel",this._cancel,!0),this.addEventListener("click",this._click,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerdown",this._down,!0),this.removeEventListener("pointermove",this._move,!0),this.removeEventListener("pointercancel",this._cancel,!0),this.removeEventListener("click",this._click,!0)}feedback(){return this.error?o`<div class="error" role="alert">${this.error}</div>`:""}},kt=r=>({on:"Acceso",off:"Spento",unavailable:"Non disponibile",unknown:"Stato sconosciuto",cleaning:"In pulizia",mowing:"In taglio",docked:"Alla base",paused:"In pausa",returning:"Ritorno alla base",idle:"In attesa",error:"Richiede attenzione",running:"In funzione",washing:"Lavaggio",drying:"Asciugatura",finished:"Terminato",cool:"Raffreddamento",heat:"Riscaldamento",auto:"Automatico",heat_cool:"Caldo / freddo",dry:"Deumidificazione",fan_only:"Ventilazione"})[r]||r||"Non configurato";var R={washer:["Lavatrice","mdi:washing-machine","blue","washer|washing machine|lavatrice"],dryer:["Asciugatrice","mdi:tumble-dryer","peach","dryer|asciugatrice"],dishwasher:["Lavastoviglie","mdi:dishwasher","blue","dishwasher|lavastoviglie"],refrigerator:["Frigorifero","mdi:fridge-outline","mint","refrigerator|fridge|frigorifero"],freezer:["Congelatore","mdi:fridge-bottom","blue","freezer|congelatore"],wine_cooler:["Cantinetta","mdi:glass-wine","lavender","wine cooler|cantinetta"],oven:["Forno","mdi:stove","peach","oven|forno"],microwave:["Microonde","mdi:microwave","peach","microwave|microonde"],coffee:["Macchina del caff\xE8","mdi:coffee-maker-outline","peach","coffee|caffe|caff\xE8"],hood:["Cappa","mdi:air-filter","mint","hood|cappa"],hob:["Piano induzione","mdi:stove","peach","hob|cooktop|induzione|piano cottura|pianocottura"],dehumidifier:["Deumidificatore","mdi:air-humidifier-off","blue","dehumidifier|deumidificatore"],humidifier:["Umidificatore","mdi:air-humidifier","blue","humidifier|umidificatore"],air_purifier:["Purificatore aria","mdi:air-purifier","mint","air purifier|purificatore aria"],water_purifier:["Depuratore acqua","mdi:water-check-outline","mint","water purifier|water filter|reverse osmosis|depuratore|osmosi"],fan:["Ventilatore","mdi:fan","mint","fan|ventilatore"],ventilation:["Ventilazione","mdi:hvac","mint","ventilation|ventilazione|vmc"],water_heater:["Scaldacqua","mdi:water-boiler","peach","water heater|boiler|scaldacqua"],vacuum:["Robot pulizia","mdi:robot-vacuum","lavender","vacuum|aspirapolvere|robot pulizia"],floor_cleaner:["Lavapavimenti","mdi:vacuum-outline","lavender","floor cleaner|lavapavimenti|aspirapavimenti"],lawn_mower:["Tagliaerba","mdi:robot-mower-outline","mint","lawn mower|tagliaerba"],robot_dock:["Base di pulizia","mdi:robot-vacuum","lavender","dock|base lavaggio|base svuotamento|base di pulizia"],generic:["Dispositivo","mdi:devices","blue","^$"]},dt=["vacuum","floor_cleaner","lawn_mower","robot_dock"],q={power:["Potenza","power"],energy:["Energia totale","energy"],cycle_energy:["Energia ciclo",null],remaining:["Tempo restante",null],progress:["Avanzamento",null],temperature:["Temperatura","temperature"],humidity:["Umidit\xE0","humidity"],battery:["Batteria","battery"],water_quality:["TDS uscita",null],water_input:["TDS ingresso",null],water_used:["Acqua erogata",null],tank:["Serbatoio",null],filter:["Filtro residuo",null],area:["Area pulita",null]},z=r=>(r||"").split(".")[0],pt=r=>!!r&&!["unknown","unavailable"].includes(r.state),tt=r=>r==null||String(r).trim()===""||!Number.isFinite(Number(r))?null:Number(r);function St(r,t={}){let e=z(r?.entity_id);if(e==="vacuum"||e==="lawn_mower"||e==="water_heater")return e;if(e==="humidifier")return r.attributes?.device_class==="dehumidifier"?"dehumidifier":"humidifier";let i=[t.name_by_user,t.name,t.model,r?.attributes?.friendly_name,r?.entity_id].filter(Boolean).join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replaceAll("_"," "),s=Object.entries(R).filter(([a,n])=>a!=="generic"&&new RegExp(`(^|\\b)(${n[3]})(\\b|$)`,"i").test(i));return s.length===1?s[0][0]:"generic"}function de(r,t,e){let i=t?.entities||[],s=i.find(h=>h.entity_id===e.entity),a=e.device_id||s?.device_id,n=a?i.filter(h=>h.device_id===a&&!h.disabled_by).map(h=>h.entity_id):[e.entity].filter(Boolean),l=(t?.devices||[]).find(h=>h.id===a)||{},c=n.map(h=>r.states[h]).filter(Boolean),d=r.states[e.entity]||c.find(h=>["vacuum","lawn_mower","humidifier","water_heater","fan"].includes(z(h.entity_id)))||c[0],f={},u=[];for(let[h,[,y]]of Object.entries(q)){let _=c.filter(k=>z(k.entity_id)==="sensor"&&(y?k.attributes?.device_class===y&&(h!=="energy"||!si("cycle_energy",k)):si(h,k)));_.length===1?f[h]=_[0].entity_id:_.length>1&&u.push(h)}let p=c.filter(h=>["button","select","number","switch","input_button","input_select","input_number","input_boolean","fan","humidifier"].includes(z(h.entity_id))).map(h=>({entity:h.entity_id,name:h.attributes?.friendly_name||h.entity_id})),m=c.filter(h=>["camera","image"].includes(z(h.entity_id)));return{status_entities:c.filter(h=>h.entity_id!==d?.entity_id&&(z(h.entity_id)==="binary_sensor"||z(h.entity_id)==="sensor"&&tt(h.state)===null&&/filter|filtro|maintenance|manutenzione|tank|serbatoio|salt|sale|rinse|brillantante/i.test(h.entity_id+" "+h.attributes?.friendly_name))).map(h=>h.entity_id),entity:d?.entity_id||"",profile:St(d,l),metrics:f,controls:p,map_entity:m.length===1?m[0].entity_id:"",device_id:a,ambiguous:u,siblings:n}}function si(r,t){let e=(t.entity_id+" "+(t.attributes?.friendly_name||"")).toLowerCase();return{cycle_energy:/cycle.*energy|energia.*ciclo/,remaining:/remaining|restante|residuo.*tempo/,progress:/progress|avanzamento/,water_quality:/(tds.*(out|uscita|purified))|((out|uscita|purified).*tds)/,water_input:/(tds.*(inlet|ingresso|input))|((inlet|ingresso|input).*tds)/,water_used:/water.*(used|dispensed)|acqua.*(erogata|consumata)/,tank:/tank|serbatoio/,filter:/filter.*(life|remaining)|filtro.*residu/,area:/cleaned.*area|area.*(pulita|tagliata)/}[r]?.test(e)||!1}function ri(r,t={}){if(!r)return[];let e=z(r.entity_id),i=Number(r.attributes?.supported_features||0);return(e==="vacuum"?[[8192,"start","Avvia"],[4,"pause","Pausa"],[8,"stop","Ferma"],[16,"return_to_base","Alla base"],[512,"locate","Trova"]]:e==="lawn_mower"?[[1,"start_mowing","Taglia"],[2,"pause","Pausa"],[4,"dock","Alla base"],[8,"stop","Ferma"]]:[]).filter(([a,n])=>i&a&&t[e]?.[n]).map(([,a,n])=>({name:n,action:`${e}.${a}`,entity:r.entity_id}))}function ai(r,t){if(!pt(t))return null;let e=tt(t.state);if(e===null)return null;let i=t.attributes?.unit_of_measurement||"";return r==="power"?i==="kW"?{value:e*1e3,unit:"W"}:i==="W"?{value:e,unit:i}:null:r==="energy"||r==="cycle_energy"?i==="Wh"?{value:e/1e3,unit:"kWh"}:i==="kWh"?{value:e,unit:i}:null:{value:e,unit:i}}function oi(r){let t=["power","energy"],e=["cycle_energy","remaining","progress"],i=r==="water_purifier"?["water_quality","water_input","water_used","tank","filter"]:["vacuum","floor_cleaner","lawn_mower","robot_dock"].includes(r)?["battery","area","remaining","progress","tank","filter"]:["washer","dryer","dishwasher","oven","microwave","coffee"].includes(r)?[...e,"temperature","tank","filter"]:["refrigerator","freezer","wine_cooler","water_heater"].includes(r)?["temperature"]:["humidity","temperature","filter","tank"];return r==="generic"?Object.keys(q):[...t,...i]}function O(r){let t;return r==="temperature"?t=w`<path d="M49 66V25a11 11 0 0 1 22 0v41a23 23 0 1 1-22 0Z"/><path d="M60 40v38"/><circle cx="60" cy="87" r="9" fill="currentColor" opacity=".2"/><path d="M81 28h10M81 42h7M81 56h10"/>`:r==="alarm"?t=w`<path d="M60 10 99 27 95 67 81 88 60 106 39 88 25 67 21 27Z"/><circle cx="60" cy="48" r="5"/><path d="M60 53v17"/>`:r==="dishwasher"?t=w`<rect x="21" y="10" width="78" height="99" rx="14"/><path d="M21 35h78M32 23h20M36 80h48M36 91h48"/><path d="M42 76V49M54 76V45M66 76V45M78 76V49"/>`:r==="oven"?t=w`<rect x="21" y="10" width="78" height="99" rx="14"/><rect x="32" y="44" width="56" height="50" rx="6"/><path d="M38 24h10M69 24h10M40 82h40"/>`:r==="microwave"?t=w`<rect x="10" y="28" width="100" height="67" rx="12"/><rect x="21" y="40" width="62" height="42" rx="6"/><circle cx="97" cy="49" r="3"/><circle cx="97" cy="65" r="3"/>`:r==="hob"?t=w`<rect x="13" y="17" width="94" height="86" rx="12"/><circle cx="38" cy="42" r="15"/><circle cx="80" cy="42" r="13"/><circle cx="39" cy="79" r="13"/><circle cx="80" cy="78" r="16"/>`:r==="hood"?t=w`<path d="M45 12h30v38l30 30H15l30-30Z"/><path d="M15 80v12h90V80M40 107h40M44 69h32"/>`:r==="coffee"?t=w`<rect x="25" y="13" width="70" height="94" rx="12"/><path d="M35 43h50M55 44v14M40 96h42"/><path d="M43 66h31v18H43ZM74 68h10v10H74"/>`:r==="generic"?t=w`<rect x="15" y="20" width="40" height="40" rx="10"/><rect x="65" y="20" width="40" height="40" rx="10"/><rect x="15" y="70" width="40" height="40" rx="10"/><path d="M66 90h38M85 71v38"/>`:r==="water_purifier"?t=w`<rect x="22" y="12" width="72" height="94" rx="18"/><path d="M36 36h44M42 48h32M48 61v18h25V61M48 88h25"/><path d="M60 57c-10-12 0-20 0-20s10 8 0 20Z" fill="currentColor" opacity=".25"/>`:["vacuum","floor_cleaner","robot_dock"].includes(r)?t=w`<circle cx="60" cy="64" r="42"/><circle cx="60" cy="64" r="32" opacity=".35"/><rect x="47" y="24" width="26" height="20" rx="9"/><path d="M45 82h30M56 57h8"/>`:r==="lawn_mower"?t=w`<rect x="18" y="49" width="84" height="42" rx="19"/><rect x="38" y="30" width="42" height="35" rx="14"/><circle cx="34" cy="91" r="12"/><circle cx="86" cy="91" r="12"/><path d="M49 42h20"/>`:["refrigerator","freezer","wine_cooler"].includes(r)?t=w`<rect x="27" y="9" width="65" height="101" rx="13"/><path d="M27 47h65M40 26v10M40 62v16"/>`:r==="climate"?t=w`<rect x="9" y="22" width="102" height="48" rx="13"/><path d="M20 54h80M29 64h62M32 82v16M60 82v24M88 82v16"/><circle cx="94" cy="37" r="2" fill="currentColor"/>`:["dehumidifier","humidifier","air_purifier","fan","ventilation","water_heater"].includes(r)?t=w`<rect x="28" y="13" width="64" height="95" rx="20"/><path d="M41 30h38M41 38h38M41 46h38M46 87h28"/><circle cx="60" cy="66" r="5"/>`:t=w`<rect x="21" y="10" width="78" height="99" rx="14"/><path d="M21 35h78M32 23h20"/><circle cx="60" cy="70" r="24"/><path d="M40 73q10-9 20 0t20 0" opacity=".5"/><circle cx="83" cy="23" r="3" fill="currentColor"/>`,o`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t}</svg>`}var ut=class extends ${static getConfigElement(){return document.createElement("pastel-appliance-card-editor")}static getStubConfig(){return{profile:"generic",entity:"",metrics:{},controls:[]}}setConfig(t){if(super.setConfig(t),t.controls&&!Array.isArray(t.controls))throw new Error("controls deve essere una lista");if(t.controls?.some(e=>!e||typeof e!="object"||e.action&&typeof e.action!="string"))throw new Error("Ogni controllo deve indicare entity oppure action come testo");if(t.status_entities&&!Array.isArray(t.status_entities))throw new Error("status_entities deve essere una lista");if(t.zones&&!Array.isArray(t.zones))throw new Error("zones deve essere una lista");if(t.metrics&&(typeof t.metrics!="object"||Array.isArray(t.metrics)))throw new Error("metrics deve essere un oggetto")}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=R[t.profile]||R.generic,i=this.hass.states[t.entity],s=t.title||e[0],a=pt(i),n=t.metrics||{};return o`<ha-card style=${this.palette(t.color||e[2])}>
   <header><div class="icon"><ha-icon icon=${e[1]}></ha-icon></div><div class="heading"><h2>${s}</h2><div class="subtitle">${t.subtitle||e[0]}</div></div><span class="pill">${kt(i?.state)}</span></header>
   <div class="hero">${O(t.profile)}<div class="right"><div class="status">${kt(i?.state)}</div><div class="caption">${i?.attributes?.friendly_name||"Scegli il dispositivo nell\u2019editor"}</div></div></div>
   ${Object.keys(n).length?o`<div class="metrics">${Object.entries(n).filter(([,l])=>l).map(([l,c])=>{let d=ai(l,this.hass.states[c]);return o`<button class="metric" @click=${()=>this.info(c)}><small>${q[l]?.[0]||l}</small><strong>${d?new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:2}).format(d.value):"\u2014"}<span class="unit">${d?.unit||""}</span></strong></button>`})}</div>`:""}
   <div class="actions">${ri(i,this.hass.services).filter(l=>!(t.hidden_actions||[]).includes(l.action)).map(l=>o`<button ?disabled=${!a||this.busy} @click=${()=>this.call(l.action,l.entity)}>${l.name}</button>`)}</div>
   ${this.nativeSettings(i)}
   ${(t.controls||[]).map(l=>this.control(l))}
   ${(t.status_entities||[]).length?o`<h3>Stato e manutenzione</h3>${t.status_entities.map(l=>{let c=this.hass.states[l];return o`<div class="control"><span>${c?.attributes?.friendly_name||l}</span><button @click=${()=>this.info(l)}>${kt(c?.state)}</button></div>`})}`:""}
   ${this.robotExtras()}
   ${t.entity?"":o`<div class="empty">Apri l’editor, scegli un dispositivo e controlla le associazioni suggerite.</div>`}
   ${this.feedback()}
  </ha-card>`}control(t){if(t.action)return o`<div class="control"><span>${t.name||"Azione"}</span><button ?disabled=${this.busy||!this.hass.services?.[t.action.split(".")[0]]?.[t.action.split(".")[1]]} @click=${()=>this.call(t.action,t.entity,t.data||{},t.target)}>${t.button_label||"Esegui"}</button></div>`;let e=this.hass.states[t.entity],i=z(t.entity),s=t.name||e?.attributes?.friendly_name||t.entity,a=!e||e.state==="unavailable"||!["button","input_button"].includes(i)&&e.state==="unknown"||this.busy;if(["script","scene"].includes(i))return o`<div class="control"><span>${s}</span><button ?disabled=${a||!this.hass.services?.[i]?.turn_on} @click=${()=>this.call(`${i}.turn_on`,t.entity)}>Esegui</button></div>`;if(["select","input_select"].includes(i))return o`<label class="control"><span>${s}</span><select aria-label=${s} ?disabled=${a||!this.hass.services?.[i]?.select_option} .value=${e?.state||""} @change=${n=>this.call(`${i}.select_option`,t.entity,{option:n.target.value})}><option value="" disabled>Scegli</option>${(e?.attributes?.options||[]).map(n=>o`<option value=${n} ?selected=${n===e.state}>${n}</option>`)}</select></label>`;if(["number","input_number"].includes(i))return o`<label class="control"><span>${s}</span><input aria-label=${s} type="number" ?disabled=${a||!this.hass.services?.[i]?.set_value} min=${e?.attributes?.min??0} max=${e?.attributes?.max??100} step=${e?.attributes?.step??1} .value=${pt(e)?e.state:""} @change=${n=>{n.target.checkValidity()&&tt(n.target.value)!==null&&this.call(`${i}.set_value`,t.entity,{value:Number(n.target.value)})}}></label>`;if(["button","input_button"].includes(i))return o`<div class="control"><span>${s}</span><button ?disabled=${a||!this.hass.services?.[i]?.press} @click=${()=>this.call(`${i}.press`,t.entity)}>${t.button_label||"Esegui"}</button></div>`;if(["switch","input_boolean","fan","humidifier"].includes(i)){let n=e?.state==="on"?"turn_off":"turn_on";return o`<div class="control"><span>${s}<br><small class="muted">Alimentazione</small></span><button ?disabled=${a||!this.hass.services?.[i]?.[n]} @click=${()=>this.call(`${i}.${n}`,t.entity)}>${e?.state==="on"?"Spegni":"Accendi"}</button></div>`}return o`<div class="control"><span>${s}</span><button @click=${()=>this.info(t.entity)}>Dettagli</button></div>`}nativeSettings(t){if(!t)return"";let e=z(t.entity_id),i=t.attributes||{},s=this.hass.services?.[e]||{},a=!t||t.state==="unavailable"||!["button","input_button"].includes(e)&&t.state==="unknown"||this.busy,n=(c,d,f,u,p)=>d?.length&&s[u]?o`<label class="control"><span>${c}</span><select aria-label=${c} ?disabled=${a} @change=${m=>this.call(`${e}.${u}`,t.entity_id,{[p]:m.target.value})}>${d.map(m=>o`<option value=${m} ?selected=${m===f}>${m}</option>`)}</select></label>`:"",l=(c,d,f,u,p,m,g)=>tt(d)!==null&&s[m]?o`<label class="control"><span>${c}</span><input type="number" aria-label=${c} .value=${String(d)} min=${f} max=${u} step=${p} ?disabled=${a} @change=${h=>{h.target.checkValidity()&&tt(h.target.value)!==null&&this.call(`${e}.${m}`,t.entity_id,{[g]:Number(h.target.value)})}}></label>`:"";return e==="vacuum"?Number(i.supported_features)&32?n("Aspirazione",i.fan_speed_list,i.fan_speed,"set_fan_speed","fan_speed"):"":e==="humidifier"?o`${l("Umidit\xE0 desiderata",i.humidity,i.min_humidity??0,i.max_humidity??100,1,"set_humidity","humidity")}${Number(i.supported_features)&1?n("Modalit\xE0",i.available_modes,i.mode,"set_mode","mode"):""}`:e==="fan"?o`${Number(i.supported_features)&1?l("Velocit\xE0 %",i.percentage,0,100,i.percentage_step||1,"set_percentage","percentage"):""}${Number(i.supported_features)&8?n("Profilo",i.preset_modes,i.preset_mode,"set_preset_mode","preset_mode"):""}`:e==="water_heater"?o`${Number(i.supported_features)&1?l("Temperatura desiderata",i.temperature,i.min_temp??30,i.max_temp??90,1,"set_temperature","temperature"):""}${Number(i.supported_features)&2?n("Modalit\xE0",i.operation_list,i.operation_mode,"set_operation_mode","operation_mode"):""}`:""}robotExtras(){return o``}},Ct=class extends ut{static getConfigElement(){return document.createElement("pastel-robot-card-editor")}static getStubConfig(){return{profile:"vacuum",entity:"",metrics:{},controls:[]}}robotExtras(){let t=this.config,e=this.hass.states[t.map_entity],i=pt(e)?e.attributes?.entity_picture:null,s=i&&(i.startsWith("/")&&!i.startsWith("//")||/^https?:\/\//.test(i))?this.hass.hassUrl?this.hass.hassUrl(i):i:null;return o`${s?o`<img class="map" src=${s} alt="Mappa del robot" loading="lazy">`:t.map_entity?o`<div class="foot">Mappa non disponibile.</div>`:""}
   ${(t.zones||[]).length?o`<div class="zones"><h3>Stanze e zone</h3>${t.zones.map(a=>this.control(a))}</div>`:""}`}};var zt=new WeakMap;async function pe(r,{refresh:t=!1}={}){let e=r.connection||r;if(!t&&zt.has(e))return zt.get(e);let i=Promise.all([r.callWS({type:"config/entity_registry/list"}),r.callWS({type:"config/device_registry/list"})]).then(([s,a])=>({entities:s,devices:a})).catch(s=>{throw zt.delete(e),s});return zt.set(e,i),i}function ni(r,t,{robot:e=!1}={}){let i=new Map,s=new Set;for(let n of t.entities||[]){if(s.add(n.entity_id),n.disabled_by||!r.states[n.entity_id])continue;let l=n.device_id?`device:${n.device_id}`:`entity:${n.entity_id}`;i.has(l)||i.set(l,{device_id:n.device_id||"",entities:[]}),i.get(l).entities.push(r.states[n.entity_id])}for(let n of Object.values(r.states))s.has(n.entity_id)||i.set(`entity:${n.entity_id}`,{device_id:"",entities:[n]});let a=[];for(let[n,l]of i){let c=(t.devices||[]).find(m=>m.id===l.device_id)||{},d=St(null,c),f=l.entities.map(m=>({s:m,profile:d!=="generic"?d:St(m,c)})).filter(m=>m.profile!=="generic"&&(!e||dt.includes(m.profile)));if([...new Set(f.map(m=>m.profile))].length!==1)continue;let p=f.find(m=>["vacuum","lawn_mower","humidifier","water_heater","fan"].includes(z(m.s.entity_id)))||f.find(m=>/status|state|stato|operation/.test(m.s.entity_id))||f[0];a.push({key:n,device_id:l.device_id,entity:p.s.entity_id,profile:p.profile,name:c.name_by_user||c.name||p.s.attributes.friendly_name||p.s.entity_id,count:l.entities.length})}return a.sort((n,l)=>n.name.localeCompare(l.name))}var mt=class extends ${static get properties(){return{...super.properties,suggestion:{},loading:{},registry:{},showAllMetrics:{}}}updated(){this.hass&&!this._discoveryStarted&&(this._discoveryStarted=!0,this.loadDevices())}chooseCandidate(t){let e=this.detected().find(i=>i.key===t);e&&(this.emit({device_id:e.device_id,entity:e.entity,profile:e.profile,metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]}),this.suggestion={...de(this.hass,this.registry,e),profile:e.profile})}detected(){return this.hass&&this.registry?ni(this.hass,this.registry,{robot:!!this.constructor.robot}):[]}setConfig(t){super.setConfig(t),this.config={...t,metrics:{...t.metrics||{}},controls:[...t.controls||[]]}}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}async scan(){this.loading=!0,this.error="",this.suggestion=null;let t=`${this.config.entity}|${this.config.device_id}`;try{let e=await pe(this.hass,{refresh:!0});this.registry=e,t===`${this.config.entity}|${this.config.device_id}`&&(this.suggestion=de(this.hass,e,this.config))}catch{this.error="Impossibile leggere i dispositivi. Puoi comunque associare tutte le entit\xE0 manualmente."}finally{this.loading=!1}}async loadDevices(){this.loading=!0;try{this.registry=await pe(this.hass)}catch{this.error="Elenco dispositivi non disponibile: seleziona un\u2019entit\xE0."}finally{this.loading=!1}}options(t){return Object.values(this.hass.states).filter(e=>!t||t.includes(e.entity_id.split(".")[0])).sort((e,i)=>e.entity_id.localeCompare(i.entity_id))}entitySelect(t,e,i,s="Entit\xE0"){return o`<select aria-label=${s} .value=${t||""} @change=${a=>e(a.target.value)}><option value="">Nessuna</option>${this.options(i).map(a=>o`<option value=${a.entity_id} ?selected=${t===a.entity_id}>${a.attributes.friendly_name||a.entity_id} · ${a.entity_id}</option>`)}</select>`}render(){if(!this.config||!this.hass)return o``;let t=this.config,e=this.suggestion,i=this.constructor.robot;return o`<div class="editor" style=${this.palette(t.color)}>
  <label>Elettrodomestici rilevati${this.loading?o`<span class="hint">Ricerca automatica in corso…</span>`:o`<select aria-label="Elettrodomestici rilevati" @change=${s=>this.chooseCandidate(s.target.value)}><option value="">Scegli un dispositivo rilevato</option>${this.detected().map(s=>o`<option value=${s.key} ?selected=${s.device_id?t.device_id===s.device_id:t.entity===s.entity}>${R[s.profile][0]} · ${s.name} (${s.count} entità)</option>`)}</select>`}</label>
  <p class="hint">${this.registry&&!this.detected().length?"Nessun elettrodomestico riconosciuto. Puoi scegliere il dispositivo manualmente.":"Scegli un elettrodomestico: sensori e comandi collegati vengono proposti automaticamente. Verifica le associazioni prima di applicarle."}</p>
  <details><summary>Scelta manuale o dispositivo non riconosciuto</summary>
  <label>Dispositivo <button ?disabled=${this.loading} @click=${()=>this.loadDevices()}>Carica elenco dispositivi</button>${this.registry?o`<select aria-label="Dispositivo" .value=${t.device_id||""} @change=${s=>{this.suggestion=null,this.emit({device_id:s.target.value,entity:"",metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]})}}><option value="">Seleziona tramite entità</option>${this.registry.devices.map(s=>o`<option value=${s.id} ?selected=${t.device_id===s.id}>${s.name_by_user||s.name||s.model||s.id}</option>`)}</select>`:""}</label>
  <label>Entità principale ${this.entitySelect(t.entity,s=>{this.suggestion=null,this.emit({entity:s,device_id:"",metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]})},null,"Entit\xE0 principale")}</label>
  <button ?disabled=${this.loading||!t.entity&&!t.device_id} @click=${()=>this.scan()}>${this.loading?"Ricerca in corso\u2026":"Cerca entit\xE0 e controlli associati"}</button>
  </details>
  ${e?o`<div class="hint">${e.siblings.length} entità associate. Profilo proposto: <strong>${R[e.profile][0]}</strong>. Le associazioni verranno salvate solo quando le applichi. ${e.ambiguous.length?`Da scegliere manualmente: ${e.ambiguous.map(s=>q[s][0]).join(", ")}.`:""}</div><button @click=${()=>{let{siblings:s,ambiguous:a,...n}=e;this.emit({...n,profile:i&&!dt.includes(e.profile)?"vacuum":e.profile}),this.suggestion=null}}>Applica le associazioni proposte</button>`:""}
  <div class="pair"><label>Nome<input aria-label="Nome" .value=${t.title||""} @change=${s=>this.emit({title:s.target.value})}></label><label>Colore<select aria-label="Colore" @change=${s=>this.emit({color:s.target.value})}>${["blue","mint","peach","lavender","pink","amber"].map(s=>o`<option value=${s} ?selected=${(t.color||"blue")===s}>${s}</option>`)}</select></label></div>
  <label>Tipo dispositivo<select aria-label="Tipo dispositivo" @change=${s=>this.emit({profile:s.target.value})}>${Object.entries(R).filter(([s])=>!i||dt.includes(s)||s==="generic").map(([s,a])=>o`<option value=${s} ?selected=${t.profile===s}>${a[0]}</option>`)}</select></label>
  <details open><summary>Dati e consumi</summary><p class="hint">Puoi scegliere sensori esterni al dispositivo, come una presa con misurazione. L’energia del ciclo richiede un sensore dedicato.</p><label class="check"><input type="checkbox" .checked=${!!this.showAllMetrics} @change=${s=>{this.showAllMetrics=s.target.checked}}>Mostra tutti i tipi di dato</label>${Object.entries(q).filter(([s])=>this.showAllMetrics||oi(t.profile).includes(s)||t.metrics?.[s]).map(([s,[a]])=>o`<label>${a}${this.entitySelect(t.metrics?.[s],n=>{let l={...t.metrics};n?l[s]=n:delete l[s],this.emit({metrics:l})},["sensor"],a)}</label>`)}</details>
  <details open><summary>Controlli (${t.controls?.length||0})</summary><p class="hint">Rimuovi i comandi che non vuoi mostrare. Gli interruttori sono indicati come alimentazione, mai come avvio del programma.</p>${(t.controls||[]).map((s,a)=>o`<div class="control"><span>${s.name||s.entity||s.action}</span><button aria-label=${`Rimuovi ${s.name||s.entity}`} @click=${()=>this.emit({controls:t.controls.filter((n,l)=>l!==a)})}>Rimuovi</button></div>`)}<label>Aggiungi controllo${this.entitySelect("",s=>{s&&!t.controls?.some(a=>a.entity===s)&&this.emit({controls:[...t.controls||[],{entity:s,name:this.hass.states[s]?.attributes.friendly_name||s}]})},["button","input_button","switch","input_boolean","select","input_select","number","input_number","fan","humidifier","script","scene"],"Aggiungi controllo")}</label></details>
  <details><summary>Stato e manutenzione</summary>${(t.status_entities||[]).map((s,a)=>o`<div class="control"><span>${this.hass.states[s]?.attributes?.friendly_name||s}</span><button @click=${()=>this.emit({status_entities:t.status_entities.filter((n,l)=>a!==l)})}>Rimuovi</button></div>`)}${this.entitySelect("",s=>{s&&!t.status_entities?.includes(s)&&this.emit({status_entities:[...t.status_entities||[],s]})},["sensor","binary_sensor"],"Aggiungi stato manutenzione")}</details>
  ${i?o`<details open><summary>Mappa e zone</summary><label>Mappa${this.entitySelect(t.map_entity,s=>this.emit({map_entity:s}),["image","camera"],"Mappa")}</label><p class="hint">La mappa è un’immagine fornita dall’integrazione. Per le zone associa un selettore tra i controlli oppure un pulsante/script qui sotto.</p>${(t.zones||[]).map((s,a)=>o`<div class="control"><span>${s.name||s.entity}</span><button @click=${()=>this.emit({zones:t.zones.filter((n,l)=>a!==l)})}>Rimuovi</button></div>`)}${this.entitySelect("",s=>{s&&this.emit({zones:[...t.zones||[],{entity:s,name:this.hass.states[s]?.attributes.friendly_name||s,...s.startsWith("script.")?{action:"script.turn_on"}:{}}]})},["button","input_button","script"],"Aggiungi zona")}</details>`:""}
  ${this.feedback()}
 </div>`}},ht=class extends mt{};Fe(ht,"robot",!0);function E(r,t,e){let i=r?.states?.[t];if(!i||["unknown","unavailable"].includes(i.state))return null;let s=e?i.attributes?.[e]:i.state;if(s==null||String(s).trim()===""||typeof s=="boolean")return null;let a=Number(s);return Number.isFinite(a)?a:null}function li(r){let t=(r.steppers||[]).find(e=>e.show_as_temperature&&e.entity);return t?{entity:t.entity,attribute:t.attribute}:{entity:r.temperature_entity,attribute:r.temperature_attribute}}function Qi(r,t){let e=r?.states?.[t.entity];if(!e)return null;let i=t.attribute?e.attributes?.[t.attribute]:e.state;return i==null||["unknown","unavailable"].includes(e.state)&&String(i)!==String(t.state)?null:t.operator==="not_equals"?String(i)!==String(t.state):String(i)===String(t.state)}function ue(r,t){for(let e of t.states||[]){if(!e.conditions?.length)continue;let i=e.conditions.map(n=>Qi(r,n));if(e.match==="any"?i.includes(!0):i.every(n=>n===!0))return{...e,timer_entity:e.timer_entity||e.conditions.find(n=>n.entity?.startsWith("timer.")&&r?.states?.[n.entity]?.state==="active")?.entity};if((e.match==="any"||!i.includes(!1))&&i.includes(null))return{label:"Stato non disponibile",badge:"Non disponibile",unknown:!0}}if(t.entity){let e=r?.states?.[t.entity];return!e||["unknown","unavailable"].includes(e.state)?{label:"Stato non disponibile",badge:"Non disponibile",unknown:!0}:{label:e.state,badge:e.state}}return t.states?.length?{id:"off",label:t.fallback_label||"Riscaldamento spento",badge:t.fallback_badge||"Spenta"}:{label:"Stufa non configurata",badge:"Da configurare",unknown:!0}}function ci(r,t,e=Date.now()){let i=r?.states?.[t];if(!i||!["active","paused"].includes(i.state))return"";if(i.state==="active"){let s=Date.parse(i.attributes?.finishes_at);if(!Number.isFinite(s))return"";let a=Math.max(0,Math.ceil((s-e)/1e3)),n=Math.floor(a/3600),l=Math.floor(a%3600/60),c=a%60;return`${n?`${n}:`:""}${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`}return i.attributes?.remaining||""}function he(r){if(!r)return null;if(r.action)return{action:r.action,entity:r.entity,data:r.data||{},target:r.target};let t=r.entity?.split(".")[0],e={script:"turn_on",button:"press",input_button:"press",scene:"turn_on"}[t];return e?{action:`${t}.${e}`,entity:r.entity,data:r.data||{},target:r.target}:null}function ft(r,t){let e=he(t);if(!e)return!1;let[i,s]=e.action.split(".");if(!r?.services?.[i]?.[s])return!1;if(e.entity){let a=r?.states?.[e.entity];if(!a||a.state==="unavailable")return!1}return!0}function di(r){for(let t of["states","controls","steppers"])if(r[t]!==void 0&&!Array.isArray(r[t]))throw new Error(`${t} deve essere una lista.`);for(let t of r.states||[]){if(!t||typeof t!="object"||!Array.isArray(t.conditions))throw new Error("Ogni stato richiede una lista di condizioni.");if(t.match&&!["all","any"].includes(t.match))throw new Error("Le condizioni devono corrispondere a tutte oppure almeno una.");for(let e of t.conditions)if(!e||typeof e.entity!="string"||e.state===void 0||e.state===null||e.operator&&!["equals","not_equals"].includes(e.operator))throw new Error("Ogni condizione richiede entit\xE0, stato e confronto validi.")}for(let t of[...r.controls||[],...(r.steppers||[]).flatMap(e=>[e?.minus,e?.plus]).filter(Boolean)])if(!t||typeof t!="object"||Array.isArray(t)||t.entity!==void 0&&typeof t.entity!="string"||t.action!==void 0&&(typeof t.action!="string"||!/^\w+\.\w+$/.test(t.action)))throw new Error("Configura un\u2019entit\xE0 oppure un\u2019azione valida per ogni comando.");for(let t of r.steppers||[])if(!t||typeof t!="object")throw new Error("Controllo \u2212/+ non valido.");for(let t of["pellet_warning_threshold"])if(r[t]!==void 0&&(!Number.isFinite(Number(r[t]))||Number(r[t])<0||Number(r[t])>100))throw new Error("La soglia pellet deve essere compresa tra 0 e 100.")}var Et=class extends ${static getConfigElement(){return document.createElement("pastel-stove-card-editor")}static getStubConfig(){return{title:"Stufa",subtitle:"Stufa a pellet",color:"peach",controls:[],steppers:[],states:[]}}static get styles(){return[super.styles,b`
  .stove-actions{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:0}.stove-actions button{flex:1 1 90px;min-width:80px;overflow-wrap:anywhere;display:flex;align-items:center;justify-content:center;gap:6px}.stove-actions ha-icon{--mdc-icon-size:18px;flex-shrink:0}
  .stepper{display:flex;align-items:center;gap:7px}.stepper>span{min-width:38px;text-align:center;font-variant-numeric:tabular-nums}.stepper button{width:44px;padding:10px;font-size:19px}.stepper-label{min-width:0;overflow-wrap:anywhere}.stepper-label ha-icon{--mdc-icon-size:18px;margin-right:6px;color:var(--p-accent)}
  .pellet-head{display:flex;justify-content:space-between;align-items:center;gap:5px;flex-wrap:wrap}.pellet-warning{font-size:11px;color:var(--stove-warning,#963f3b)}.pellet-track{height:5px;border-radius:4px;background:var(--p-tint);overflow:hidden;margin-top:9px}.pellet-fill{height:100%;background:var(--p-accent);border-radius:4px}.metric strong{margin-top:5px}.metric{min-height:86px}.timer{font-size:12px;margin-top:8px;font-variant-numeric:tabular-nums}.control:last-child{padding-bottom:0}.control button:disabled{opacity:.4}.stove-unknown{opacity:.5}
 `]}setConfig(t){di(t),super.setConfig(t)}connectedCallback(){super.connectedCallback(),this._clock=setInterval(()=>{this.hass&&this.config&&ue(this.hass,this.config).timer_entity&&this.requestUpdate()},1e3)}disconnectedCallback(){clearInterval(this._clock),super.disconnectedCallback()}appearance(t){return[this.palette(t.color||"peach"),t.tint_color?`--p-tint:${t.tint_color}`:"",t.accent_color?`--p-accent:${t.accent_color}`:"",t.background_color?`--p-surface:${t.background_color}`:"",t.pellet_warning_color?`--stove-warning:${t.pellet_warning_color}`:"",t.text_color?`--p-ink:${t.text_color}`:"",t.secondary_text_color?`--p-muted:${t.secondary_text_color}`:""].filter(Boolean).join(";")}formatted(t){return t===null?"\u2014":new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:1}).format(t)}run(t){if(!ft(this.hass,t)||this.busy)return;let e=he(t);return this.call(e.action,e.entity,e.data,e.target)}illustration(t){let e=!t.unknown&&!["off","cooling"].includes(t.id);return o`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="26" y="10" width="68" height="99" rx="14"/><path d="M26 35h68M38 23h19M45 95h30M45 101h30"/><circle cx="80" cy="23" r="2.5" fill="currentColor"/><rect x="36" y="45" width="48" height="37" rx="6"/><g opacity=${e?"1":".2"}>${w`<path d="M60 76c-14-6-12-16-7-23 0 7 4 8 6 3 1-4 4-7 4-7s-1 8 5 13c7 7 1 12-8 14Z"/>`}</g></svg>`}metric(t,e,i,s=""){return o`<button class="metric" @click=${()=>this.info(i)}><small>${t}</small><strong>${this.formatted(e)}<span class="unit">${s}</span></strong></button>`}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=li(t),i=ue(this.hass,t),s=ci(this.hass,i.timer_entity),a=E(this.hass,t.pellet_entity,t.pellet_attribute),n=a!==null&&a<Number(t.pellet_warning_threshold??20);return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:stove"}></ha-icon></div><div class="heading"><h2>${t.title||"Stufa"}</h2><div class="subtitle">${t.subtitle??"Stufa a pellet"}</div></div><span class="pill">${i.badge||i.label}</span></header>
  <div class="hero">${this.illustration(i)}<div class="right"><div class="status" role="status">${i.label}</div><div class="caption">${t.hero_caption??t.title??"Stufa"}</div>${s?o`<div class="timer">${s}${this.hass.states[i.timer_entity]?.state==="paused"?" \xB7 In pausa":""}</div>`:""}</div></div>
  ${e.entity||t.pellet_entity||t.ambient_entity?o`<div class="metrics">${e.entity?this.metric(t.temperature_label||"Temperatura impostata",E(this.hass,e.entity,e.attribute),e.entity,t.temperature_unit||"\xB0C"):""}${t.pellet_entity?o`<button class="metric" @click=${()=>this.info(t.pellet_entity)}><div class="pellet-head"><small>${t.pellet_label||"Pellet"}</small>${n?o`<span class="pellet-warning">${t.pellet_warning_label||"Rabbocca"}</span>`:""}</div><strong>${a===null?"\u2014":Math.round(Math.min(100,Math.max(0,a)))}<span class="unit">%</span></strong><div class="pellet-track" role="progressbar" aria-label=${t.pellet_label||"Pellet"} aria-valuemin="0" aria-valuemax="100" aria-valuenow=${a===null?"":Math.min(100,Math.max(0,a))} aria-valuetext=${a===null?"Non disponibile":`${Math.round(a)}%`}><div class="pellet-fill" style=${`width:${a===null?0:Math.min(100,Math.max(0,a))}%`}></div></div></button>`:""}${t.ambient_entity?this.metric(t.ambient_label||"Temperatura ambiente",E(this.hass,t.ambient_entity,t.ambient_attribute),t.ambient_entity,t.temperature_unit||"\xB0C"):""}</div>`:""}
  <div class="stove-actions">${(t.controls||[]).map(l=>o`<button style=${[l.color?`color:${l.color}`:"",l.background?`background:${l.background}`:""].join(";")} ?disabled=${this.busy||!ft(this.hass,l)} @click=${()=>this.run(l)}>${l.icon?o`<ha-icon icon=${l.icon}></ha-icon>`:""}${l.name||this.hass.states[l.entity]?.attributes?.friendly_name||"Esegui"}</button>`)}</div>
  ${(t.steppers||[]).map(l=>{let c=E(this.hass,l.entity,l.attribute);return o`<div class="control"><span class="stepper-label">${l.icon?o`<ha-icon icon=${l.icon}></ha-icon>`:""}${l.name||"Valore"}</span><div class="stepper"><button aria-label=${`${l.name||"Valore"} \u2212`} ?disabled=${this.busy||!ft(this.hass,l.minus)||c!==null&&l.min!==void 0&&c<=Number(l.min)} @click=${()=>this.run(l.minus)}>−</button><span aria-live="polite">${this.formatted(c)}${l.unit||""}</span><button aria-label=${`${l.name||"Valore"} +`} ?disabled=${this.busy||!ft(this.hass,l.plus)||c!==null&&l.max!==void 0&&c>=Number(l.max)} @click=${()=>this.run(l.plus)}>+</button></div></div>`})}
  ${!t.states?.length&&!t.entity?o`<div class="empty">Apri l’editor per associare stati, sensori e script della stufa.</div>`:""}${this.feedback()}</ha-card>`}};var At=class extends ${static get styles(){return[super.styles,b`.item{border-top:1px solid var(--divider-color,#ddd);padding:14px 0;display:grid;gap:10px}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button{font-size:12px;min-width:44px}.editor details>label{margin-top:12px}.condition{padding:12px;background:var(--p-tint);border-radius:12px;display:grid;gap:10px}textarea{font:inherit;min-height:70px;width:100%}.editor .pair{align-items:start}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}}`]}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}text(t,e,i,s="text"){return o`<label>${t}<input aria-label=${t} type=${s} .value=${String(e??"")} @change=${a=>i(a.target.value)}></label>`}field(t,e,i="text"){return this.text(e,this.config[t],s=>this.emit({[t]:i==="number"?s===""?void 0:Number(s):s}),i)}select(t,e,i,s){return o`<label>${t}<select aria-label=${t} @change=${a=>s(a.target.value)}>${i.map(([a,n])=>o`<option value=${a} ?selected=${e===a}>${n}</option>`)}</select></label>`}entity(t,e,i,s){let a=Object.values(this.hass.states).filter(l=>!s||s.includes(l.entity_id.split(".")[0])).sort((l,c)=>l.entity_id.localeCompare(c.entity_id));this._entityId=(this._entityId||0)+1;let n="stove-entities-"+this._entityId;return o`<label>${t}<input aria-label=${t} list=${n} .value=${e||""} placeholder=${s?.length===1&&s[0]==="script"?"Cerca o scrivi script.nome":"Cerca per nome o scrivi entity_id"} autocomplete="off" autocapitalize="none" spellcheck="false" @change=${l=>i(l.target.value.trim())}><datalist id=${n}>${a.map(l=>o`<option value=${l.entity_id} label=${l.attributes?.friendly_name||l.entity_id}></option>`)}</datalist></label>`}updateItem(t,e,i){this.emit({[t]:(this.config[t]||[]).map((s,a)=>a===e?{...s,...i}:s)})}temperatureStepper(t,e){this.emit({steppers:(this.config.steppers||[]).map((i,s)=>({...i,show_as_temperature:s===t?e:!1}))})}stepLimit(t,e,i){let s=[...this.config.steppers||[]],a={...s[t]};i===""?delete a[e]:a[e]=Number(i),s[t]=a,this.emit({steppers:s})}reorder(t,e,i){let s=[...this.config[t]||[]],a=e+i;a<0||a>=s.length||([s[e],s[a]]=[s[a],s[e]],this.emit({[t]:s}))}tools(t,e){return o`<div class="tools"><button aria-label="Sposta prima" ?disabled=${e===0} @click=${()=>this.reorder(t,e,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${e===(this.config[t]||[]).length-1} @click=${()=>this.reorder(t,e,1)}>↓</button><button @click=${()=>this.emit({[t]:this.config[t].filter((i,s)=>s!==e)})}>Rimuovi</button></div>`}actionFields(t,e,i){let s=t||{};return o`${this.entity(i,s.entity,a=>e({...s,entity:a}),["script"])}<details><summary>Azione avanzata</summary>${this.text("Servizio opzionale (dominio.azione)",s.action,a=>{let n={...s};a?n.action=a:delete n.action,e(n)})}<p class="hint">Per uno script basta selezionarlo sopra. Dati e destinazioni personalizzati restano disponibili in YAML.</p></details>`}conditionFields(t,e,i,s){let a=n=>this.updateItem("states",e,{conditions:t.conditions.map((l,c)=>c===s?{...l,...n}:l)});return o`<div class="condition">${this.entity("Entit\xE0 da controllare",i.entity,n=>a({entity:n}))}<div class="pair">${this.select("Confronto",i.operator||"equals",[["equals","Uguale a"],["not_equals","Diverso da"]],n=>a({operator:n}))}${this.text("Stato atteso",i.state,n=>a({state:n}))}</div>${this.text("Attributo opzionale",i.attribute,n=>a({attribute:n}))}<button @click=${()=>this.updateItem("states",e,{conditions:t.conditions.filter((n,l)=>l!==s)})}>Rimuovi condizione</button></div>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"peach")}>
  <details open><summary>Aspetto</summary><div class="pair">${this.field("title","Titolo")}${this.field("subtitle","Sottotitolo")}</div>${this.field("hero_caption","Testo sotto lo stato")}${this.field("icon","Icona (mdi:stove)")}${this.select("Palette Pastel",t.color||"peach",[["peach","Pesca"],["blue","Blu"],["mint","Menta"],["lavender","Lavanda"],["pink","Rosa"],["amber","Ambra"],["teal","Verde acqua"],["red","Rosso"]],e=>this.emit({color:e}))}<details><summary>Colori personalizzati</summary><p class="hint">Se vuoti, seguono la palette e il tema Home Assistant. Per una card sempre bianca imposta lo sfondo a #ffffff.</p>${this.field("tint_color","Sfondo delle aree colorate")}${this.field("accent_color","Colore di disegni e comandi")}${this.field("background_color","Sfondo card (opzionale)")}${this.field("text_color","Colore testo principale (opzionale)")}${this.field("secondary_text_color","Colore testo secondario (opzionale)")}</details></details>
  <details open><summary>Sensori e pellet</summary>${this.entity("Temperatura impostata",t.temperature_entity,e=>this.emit({temperature_entity:e}),t.temperature_attribute?void 0:["sensor","counter","input_number","number"])}${this.entity("Livello pellet (%)",t.pellet_entity,e=>this.emit({pellet_entity:e}),void 0)}${this.entity("Temperatura ambiente (opzionale)",t.ambient_entity,e=>this.emit({ambient_entity:e}),t.ambient_attribute?void 0:["sensor","counter","input_number","number"])}<div class="pair">${this.field("pellet_warning_threshold","Avviso pellet sotto (%)","number")}${this.field("temperature_unit","Unit\xE0 temperatura")}</div><details><summary>Testi e attributi</summary>${this.field("temperature_label","Etichetta temperatura")}${this.field("pellet_label","Etichetta pellet")}${this.field("ambient_label","Etichetta ambiente")}${this.field("pellet_warning_label","Testo avviso pellet")}${this.field("pellet_warning_color","Colore avviso pellet")}${this.field("temperature_attribute","Attributo temperatura (opzionale)")}${this.field("pellet_attribute","Attributo pellet (opzionale)")}${this.field("ambient_attribute","Attributo ambiente (opzionale)")}</details></details>
  <details open><summary>Pulsanti (${t.controls?.length||0})</summary><p class="hint">Aggiungi le funzioni che ti servono. I pulsanti vanno a capo automaticamente e seguono la palette.</p>${(t.controls||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Nome pulsante",e.name,s=>this.updateItem("controls",i,{name:s}))}${this.text("Icona opzionale",e.icon,s=>this.updateItem("controls",i,{icon:s}))}</div>${this.actionFields(e,s=>this.updateItem("controls",i,s),"Script da avviare")}<details><summary>Colore di questo pulsante</summary>${this.text("Colore testo opzionale",e.color,s=>this.updateItem("controls",i,{color:s}))}${this.text("Sfondo opzionale",e.background,s=>this.updateItem("controls",i,{background:s}))}</details>${this.tools("controls",i)}</div>`)}<button @click=${()=>this.emit({controls:[...t.controls||[],{name:"Nuova funzione",entity:""}]})}>Aggiungi pulsante</button></details>
  <details open><summary>Controlli −/+ (${t.steppers?.length||0})</summary><p class="hint">Scegli l’aiutante counter o input_number modificato dagli script, poi associa uno script a ciascun tasto. Il numero mostrato viene letto dall’aiutante e segue anche le modifiche esterne. Minimo e massimo sono liberi e opzionali: lasciali vuoti se gestiti dagli script.</p>${(t.steppers||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Nome controllo",e.name,s=>this.updateItem("steppers",i,{name:s}))}${this.text("Unit\xE0",e.unit,s=>this.updateItem("steppers",i,{unit:s}))}</div>${this.entity("Aiutante del valore",e.entity,s=>this.updateItem("steppers",i,{entity:s}),["counter","input_number"])}<label class="check"><input type="checkbox" .checked=${!!e.show_as_temperature} @change=${s=>this.temperatureStepper(i,s.target.checked)}>Mostra questo aiutante anche come temperatura impostata</label>${this.actionFields(e.minus,s=>this.updateItem("steppers",i,{minus:s}),"Script tasto \u2212")}${this.actionFields(e.plus,s=>this.updateItem("steppers",i,{plus:s}),"Script tasto +")}<details><summary>Opzioni del controllo</summary><p class="hint">Il campo aiutante suggerisce solo counter e input_number. Puoi scrivere un ID diverso per mantenere una sorgente personalizzata già utilizzata. La spunta temperatura collega anche il riquadro in alto allo stesso valore.</p>${this.text("Icona",e.icon,s=>this.updateItem("steppers",i,{icon:s}))}${this.text("Attributo opzionale",e.attribute,s=>this.updateItem("steppers",i,{attribute:s}))}<div class="pair">${this.text("Minimo opzionale",e.min,s=>this.stepLimit(i,"min",s),"number")}${this.text("Massimo opzionale",e.max,s=>this.stepLimit(i,"max",s),"number")}</div></details>${this.tools("steppers",i)}</div>`)}<button @click=${()=>this.emit({steppers:[...t.steppers||[],{name:"Nuovo controllo",entity:"",minus:{},plus:{}}]})}>Aggiungi controllo −/+</button></details>
  <details open><summary>Stati della stufa (${t.states?.length||0})</summary><p class="hint">Le regole si leggono dall’alto: vince la prima corrispondente. Per esempio «In accensione» può richiedere sia un helper acceso sia un timer attivo. La ricerca e l’editor non avviano script.</p>${(t.states||[]).map((e,i)=>o`<div class="item"><div class="pair">${this.text("Testo stato",e.label,s=>this.updateItem("states",i,{label:s}))}${this.text("Testo badge",e.badge,s=>this.updateItem("states",i,{badge:s}))}</div>${this.select("Condizioni richieste",e.match||"all",[["all","Tutte (E)"],["any","Almeno una (O)"]],s=>this.updateItem("states",i,{match:s}))}${(e.conditions||[]).map((s,a)=>this.conditionFields(e,i,s,a))}<button @click=${()=>this.updateItem("states",i,{conditions:[...e.conditions||[],{entity:"",state:"on"}]})}>Aggiungi condizione</button>${this.entity("Timer da mostrare (opzionale)",e.timer_entity,s=>this.updateItem("states",i,{timer_entity:s}),["timer"])}${this.select("Illustrazione della fiamma",e.id||"active",[["active","Visibile"],["off","Spenta"],["cooling","Raffreddamento"]],s=>this.updateItem("states",i,{id:s}))}${this.tools("states",i)}</div>`)}<button @click=${()=>this.emit({states:[...t.states||[],{label:"Nuovo stato",badge:"Stato",match:"all",conditions:[{entity:"",state:"on"}]}]})}>Aggiungi stato</button>${this.field("fallback_label","Stato quando nessuna regola corrisponde")}${this.field("fallback_badge","Badge quando nessuna regola corrisponde")}<details><summary>Stato da un’entità</summary>${this.entity("Entit\xE0 di stato opzionale",t.entity,e=>this.emit({entity:e}))}<p class="hint">Usata dopo le regole, se nessuna corrisponde. Senza entità viene usato il testo di riserva.</p></details></details>
 </div>`}};var me=[["mdi:power","Accensione"],["mdi:power-off","Spegnimento"],["mdi:snowflake","Raffreddamento"],["mdi:fire","Riscaldamento"],["mdi:water","Deumidificazione"],["mdi:fan","Ventilazione"],["mdi:weather-night","Notte"],["mdi:sleep","Quiet"],["mdi:air-conditioner","Climatizzatore"],["mdi:thermostat","Automatico"],["mdi:thermometer","Temperatura"],["mdi:leaf","Eco"],["mdi:fan-plus","Ventola +"],["mdi:fan-minus","Ventola \u2212"],["mdi:arrow-up-down","Oscillazione"],["mdi:timer-outline","Timer"],["mdi:plus","Aumenta"],["mdi:minus","Diminuisci"],["mdi:lightning-bolt","Turbo"],["mdi:restart","Ripristino"]],pi=[["blue","Blu"],["mint","Menta"],["peach","Pesca"],["lavender","Lavanda"],["pink","Rosa"],["amber","Ambra"],["teal","Verde acqua"],["red","Rosso"]];function Pt(r){return!!r?.entity_id?.startsWith("sensor.")&&(r.attributes?.device_class==="temperature"||["\xB0C","\xB0F","K"].includes(r.attributes?.unit_of_measurement))}function fe(r,t){return!!t?.script?.startsWith("script.")&&!!r?.states?.[t.script]&&r.states[t.script].state!=="unavailable"&&!!r?.services?.script?.turn_on}function ge(r,t){if(!t||t.startsWith("script."))return null;let e=r?.states?.[t];return!e||["unknown","unavailable"].includes(e.state)?{available:!1,label:"Non disponibile"}:{available:!0,state:e.state,label:{on:"Acceso",off:"Spento",cool:"Raffreddamento",heat:"Riscaldamento",dry:"Deumidificazione",fan_only:"Ventilazione",auto:"Automatico",heat_cool:"Automatico"}[e.state]||e.state}}function ui(r){if(r.buttons!==void 0&&!Array.isArray(r.buttons))throw new Error("buttons deve essere una lista.");if(r.temperature_entity!==void 0&&typeof r.temperature_entity!="string")throw new Error("Il sensore temperatura deve essere un ID di entit\xE0.");for(let t of r.buttons||[]){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Pulsante non valido.");if(t.script!==void 0&&(typeof t.script!="string"||t.script&&!t.script.startsWith("script.")))throw new Error("Scegli uno script per ciascun pulsante.")}}var Tt=class extends ${static getConfigElement(){return document.createElement("pastel-script-climate-card-editor")}static getStubConfig(){return{title:"Climatizzatore",subtitle:"Clima con script",color:"blue",temperature_entity:"",buttons:[{name:"Accendi",icon:"mdi:power",script:""},{name:"Raffreddamento",icon:"mdi:snowflake",script:""},{name:"Deumidifica",icon:"mdi:water",script:""},{name:"Quiet",icon:"mdi:sleep",script:""},{name:"Spegni",icon:"mdi:power-off",script:""}]}}static get styles(){return[super.styles,b`
  .reading{font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.reading small{font-size:16px;margin-left:3px;letter-spacing:0}.climate-actions{display:flex;flex-wrap:wrap;gap:8px}.climate-button{flex:1 1 110px;min-width:90px;min-height:72px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;overflow-wrap:anywhere;line-height:1.4}.climate-button ha-icon{--mdc-icon-size:23px;flex-shrink:0}.climate-button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.climate-button small{font-size:11px;font-weight:400}.hero .right{flex:1}.sensor-info{font-size:11px;color:var(--p-muted);margin:12px 0 0;overflow-wrap:anywhere}
  @media(max-width:340px){.hero{padding:16px;gap:10px}.hero svg{width:76px;height:76px}.hero .reading{font-size:28px}}
 `]}setConfig(t){ui(t),super.setConfig(t)}appearance(t){return[this.palette(t.color||"blue"),...Object.entries({tint_color:"--p-tint",accent_color:"--p-accent",background_color:"--p-surface",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([e])=>t[e]).map(([e,i])=>`${i}:${t[e]}`)].join(";")}async run(t){this.busy||!fe(this.hass,t)||await this.call("script.turn_on",t.script)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=this.hass.states[t.temperature_entity],i=E(this.hass,t.temperature_entity),s=e?.attributes?.unit_of_measurement||this.hass.config?.unit_system?.temperature||"\xB0C",a=ge(this.hass,t.state_entity),n=i===null?"\u2014":new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:1}).format(i);return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:air-conditioner"}></ha-icon></div><div class="heading"><h2>${t.title||"Climatizzatore"}</h2><div class="subtitle">${t.subtitle??"Clima con script"}</div></div>${a?o`<span class="pill">${a.label}</span>`:""}</header>
  <div class="hero">${O("climate")}<div class="right"><div class="reading" aria-live="polite">${n}<small>${s}</small></div><div class="caption">${t.temperature_label||"Temperatura ambiente"}</div></div></div>
  <div class="climate-actions">${(t.buttons||[]).map(l=>{let c=ge(this.hass,l.state_entity),d=c?.available?c.state===String(l.active_state??"on"):null;return o`<button class="climate-button" style=${l.color?this.palette(l.color):""} aria-pressed=${d===null?"undefined":String(d)} ?disabled=${this.busy||!fe(this.hass,l)} @click=${()=>this.run(l)}><ha-icon icon=${l.icon||"mdi:air-conditioner"}></ha-icon><span>${l.name||this.hass.states[l.script]?.attributes?.friendly_name||"Esegui"}</span>${c?o`<small>${c.available?d?l.active_label||"Attivo":l.inactive_label||"Non attivo":"Non disponibile"}</small>`:""}</button>`})}</div>
  ${t.temperature_entity?"":o`<div class="sensor-info">Scegli il sensore di temperatura nell’editor.</div>`}${t.buttons?.length?"":o`<div class="empty">Aggiungi i pulsanti e scegli gli script nell’editor.</div>`}${this.feedback()}</ha-card>`}};var D=class extends ${static get styles(){return[super.styles,b`
  .button-editor{border-top:1px solid var(--divider-color,#ddd);padding:16px 0;display:grid;gap:12px}.button-title{display:flex;gap:8px;align-items:center;font-size:14px;font-weight:600}.button-title ha-icon{color:var(--p-accent);--mdc-icon-size:22px}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button{min-width:44px;font-size:12px}.icon-options{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:12px}.icon-options button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-height:64px;padding:8px 4px;font-size:11px;overflow-wrap:anywhere}.icon-options button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.icon-options ha-icon{--mdc-icon-size:22px}.editor details>label{margin-top:12px}.editor h3{margin:0}.editor .hint{margin:0}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}.icon-options{grid-template-columns:repeat(3,minmax(0,1fr))}}
 `]}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}text(t,e,i){return o`<label>${t}<input aria-label=${t} .value=${String(e??"")} @change=${s=>i(s.target.value)}></label>`}paletteSelect(t,e,i,s=!1){return o`<label>${t}<select aria-label=${t} @change=${a=>i(a.target.value)}>${s?o`<option value="" ?selected=${!e}>Come la card</option>`:""}${pi.map(([a,n])=>o`<option value=${a} ?selected=${e===a}>${n}</option>`)}</select></label>`}entity(t,e,i,s,a="Cerca per nome o scrivi entity_id"){let n=Object.values(this.hass.states).filter(c=>!s||s(c)).sort((c,d)=>(c.attributes?.friendly_name||c.entity_id).localeCompare(d.attributes?.friendly_name||d.entity_id));this._entityId=(this._entityId||0)+1;let l=`script-climate-entity-${this._entityId}`;return o`<label>${t}<input aria-label=${t} list=${l} .value=${e||""} placeholder=${a} autocomplete="off" autocapitalize="none" spellcheck="false" @change=${c=>i(c.target.value.trim())}><datalist id=${l}>${n.map(c=>o`<option value=${c.entity_id} label=${c.attributes?.friendly_name||c.entity_id}></option>`)}</datalist></label>`}updateButton(t,e){this.emit({buttons:(this.config.buttons||[]).map((i,s)=>t===s?{...i,...e}:i)})}move(t,e){let i=[...this.config.buttons||[]],s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this.emit({buttons:i}))}iconPicker(t,e){let i=t.icon||"mdi:air-conditioner",s=me.find(([a])=>a===i)?.[1]||"Personalizzata";return o`<details><summary>Icona: ${s}</summary><div class="icon-options">${me.map(([a,n])=>o`<button aria-label=${`Icona ${n}`} aria-pressed=${String(i===a)} @click=${()=>this.updateButton(e,{icon:a})}><ha-icon icon=${a}></ha-icon><span>${n}</span></button>`)}</div></details>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>
  <div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>
  ${this.entity("Sensore di temperatura",t.temperature_entity,e=>this.emit({temperature_entity:e}),Pt,"Cerca un sensore di temperatura")}
  ${this.paletteSelect("Colore card",t.color||"blue",e=>this.emit({color:e}))}
  <h3>Pulsanti (${t.buttons?.length||0})</h3><p class="hint">Per ogni funzione scegli lo script, il nome e l’icona. Puoi aggiungere tutti i pulsanti che ti servono.</p>
  ${(t.buttons||[]).map((e,i)=>o`<section class="button-editor" aria-label=${`Configura ${e.name||"pulsante "+(i+1)}`}><div class="button-title"><ha-icon icon=${e.icon||"mdi:air-conditioner"}></ha-icon>${e.name||"Nuovo pulsante"}</div>${this.text("Nome pulsante",e.name,s=>this.updateButton(i,{name:s}))}${this.entity("Script del pulsante",e.script,s=>this.updateButton(i,{script:s}),s=>s.entity_id.startsWith("script."),"Cerca o scrivi script.nome")}${this.iconPicker(e,i)}${this.paletteSelect("Colore pulsante",e.color||"",s=>this.updateButton(i,{color:s}),!0)}<div class="tools"><button aria-label="Sposta pulsante prima" ?disabled=${i===0} @click=${()=>this.move(i,-1)}>↑</button><button aria-label="Sposta pulsante dopo" ?disabled=${i===(t.buttons||[]).length-1} @click=${()=>this.move(i,1)}>↓</button><button @click=${()=>this.emit({buttons:t.buttons.filter((s,a)=>i!==a)})}>Rimuovi pulsante</button></div><details><summary>Indicatore di stato opzionale</summary><p class="hint">Usa un aiutante o un sensore che indica la funzione attiva. Lo stato dello script non indica se il climatizzatore è acceso.</p>${this.entity("Entit\xE0 funzione attiva",e.state_entity,s=>this.updateButton(i,{state_entity:s}),s=>!s.entity_id.startsWith("script."))}${this.text("Stato che indica attivo",e.active_state??"on",s=>this.updateButton(i,{active_state:s}))}</details></section>`)}
  <button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuovo pulsante",script:"",icon:"mdi:power"}]})}>Aggiungi pulsante</button>
  <details><summary>Altre opzioni</summary>${this.text("Etichetta temperatura",t.temperature_label,e=>this.emit({temperature_label:e}))}${this.entity("Stato del climatizzatore (opzionale)",t.state_entity,e=>this.emit({state_entity:e}),e=>!e.entity_id.startsWith("script."))}<p class="hint">Il badge compare solo se associ un’entità di stato reale. Un sensore non classificato come temperatura può essere inserito scrivendone l’ID.</p>${this.text("Icona intestazione opzionale",t.icon,e=>this.emit({icon:e}))}<details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],s=>this.emit({[e]:s})))}</details></details>
 </div>`}};var W=[{action:"alarm_arm_home",name:"In Casa",state:"armed_home",feature:1,icon:"mdi:home"},{action:"alarm_arm_night",name:"Notte",state:"armed_night",feature:4,icon:"mdi:weather-night"},{action:"alarm_arm_away",name:"Fuori Casa",state:"armed_away",feature:2,icon:"mdi:walk"},{action:"alarm_disarm",name:"Disattiva",state:"disarmed",feature:0,icon:"mdi:shield-off"},{action:"alarm_arm_vacation",name:"Vacanza",state:"armed_vacation",feature:32,icon:"mdi:airplane"},{action:"alarm_arm_custom_bypass",name:"Personalizzata",state:"armed_custom_bypass",feature:16,icon:"mdi:shield-half-full"},{action:"alarm_trigger",name:"Attiva sirena",state:"triggered",feature:8,icon:"mdi:alarm-light"}],be=[["mdi:shield","Allarme"],["mdi:home","In Casa"],["mdi:weather-night","Notte"],["mdi:walk","Fuori Casa"],["mdi:shield-off","Disattiva"],["mdi:shield-lock","Protezione"],["mdi:shield-home","Perimetrale"],["mdi:airplane","Vacanza"],["mdi:alarm-light","Sirena"],["mdi:door-open","Porta"],["mdi:window-open","Finestra"],["mdi:smoke-detector","Fumo"],["mdi:molecule-co2","CO\u2082"],["mdi:molecule-co","CO"],["mdi:gas-cylinder","Gas"],["mdi:motion-sensor","Movimento"],["mdi:water-alert","Acqua"],["mdi:lock","Serratura"],["mdi:bell-outline","Notifica"],["mdi:view-dashboard-outline","Riepilogo"]],ve={disarmed:["Disattivato","Sistema non inserito"],armed_home:["In Casa","Protezione in casa"],armed_night:["Notte","Protezione notturna"],armed_away:["Fuori Casa","Protezione durante l\u2019assenza"],armed_vacation:["Vacanza","Protezione durante l\u2019assenza"],armed_custom_bypass:["Personalizzata","Protezione personalizzata"],arming:["In attivazione\u2026","Inserimento in corso"],disarming:["Disattivazione\u2026","Disinserimento in corso"],pending:["In attesa\u2026","Attesa del sistema"],triggered:["Allarme!","Segnalazione dal sistema"]};function hi(r){return!!r&&["sensor","binary_sensor"].includes(r.entity_id?.split(".")[0])&&["smoke","gas","carbon_monoxide","carbon_dioxide","safety","problem"].includes(r.attributes?.device_class)}function ye(r,t){if(!t)return{label:"Da associare",detail:"Seleziona il pannello allarme",unknown:!0};let e=r?.states?.[t];if(!e||["unknown","unavailable"].includes(e.state))return{label:"Non disponibile",detail:"Dati non disponibili",unknown:!0};let i=ve[e.state];return{state:e.state,label:i?.[0]||e.state,detail:i?.[1]||"Stato del pannello",unknown:!i,alert:e.state==="triggered",waiting:["arming","disarming","pending"].includes(e.state)}}function xe(r,t,e){let i=r?.states?.[t],s=W.find(a=>a.action===e);return!!t?.startsWith("alarm_control_panel.")&&!!i&&!["unknown","unavailable"].includes(i.state)&&!!s&&(!s.feature||(Number(i.attributes?.supported_features||0)&s.feature)!==0)&&!!r?.services?.alarm_control_panel?.[e]}function _e(r,t,e){return e.kind==="script"?!!e.script?.startsWith("script.")&&!!r?.states?.[e.script]&&r.states[e.script].state!=="unavailable"&&!!r?.services?.script?.turn_on:xe(r,t.entity,e.action)}function mi(r,t,e){if(e.kind==="script")return!1;let i=r?.states?.[t.entity]?.attributes||{};return!!i.code_format&&(e.action==="alarm_disarm"||e.action==="alarm_trigger"||i.code_arm_required!==!1)}function fi(r,t){if(t.kind==="alarm"){let n=ye(r,t.entity);return{...n,value:n.label,detail:n.unknown?n.detail:n.alert?"Segnalazione attiva":n.waiting?"Operazione in corso":n.state==="disarmed"?"Sistema non inserito":"Allarme inserito"}}if(t.kind==="count"){let n=E(r,t.entity,t.attribute),l=n!==null&&Number.isInteger(n)&&n>=0;return{value:l?String(n):"\u2014",detail:l?n===0?t.zero_label||"Tutte chiuse":t.open_label||"Aperture rilevate":"Dati non disponibili",unknown:!l,attention:l&&n>0}}let e=t.entities||[];if(!e.length)return{value:"Da associare",detail:"Sensori non configurati",unknown:!0};let i=!1,s=!1,a=!1;for(let n of e){let l=r?.states?.[n];if(!l||["unknown","unavailable"].includes(l.state)){i=!0;continue}if(l.state===String(t.active_state??"on")){a=!0;continue}if(l.state===String(t.normal_state??"off"))continue;let c=E(r,n),d=t.threshold===void 0||t.threshold===null||String(t.threshold).trim()===""?null:Number(t.threshold);if(c===null){i=!0;continue}if(d===null||!Number.isFinite(d)){s=!0;continue}c>=d&&(a=!0)}return a?{value:t.alert_label||"Segnalazione",detail:i||s?"Segnalazione \xB7 dati parziali":"Controlla i sensori",alert:!0,unknown:i||s}:i||s?{value:s?"Imposta soglia":"Non disponibile",detail:s?"Soglia per il sensore numerico":"Dati non disponibili",unknown:!0}:{value:t.normal_label||"OK",detail:"Nessuna segnalazione",unknown:!1}}function gi(r){return r.some(t=>t.alert)?"Segnalazione":r.some(t=>t.attention)?"Aperture rilevate":r.some(t=>t.unknown)?"Dati parziali":r.some(t=>t.waiting)?"Operazione in corso":r.length?"Nessuna segnalazione":"Da configurare"}function bi(r){if(r.entity!==void 0&&(typeof r.entity!="string"||r.entity&&!r.entity.startsWith("alarm_control_panel.")))throw new Error("Scegli un pannello alarm_control_panel.");if(r.buttons!==void 0&&!Array.isArray(r.buttons))throw new Error("buttons deve essere una lista.");for(let t of r.buttons||[]){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Pulsante non valido.");if(t.kind&&!["script","panel"].includes(t.kind))throw new Error("Scegli Pannello allarme oppure Script.");if(t.script!==void 0&&(typeof t.script!="string"||t.script&&!t.script.startsWith("script.")))throw new Error("Scegli uno script valido.");if(t.action&&!W.some(e=>e.action===t.action))throw new Error("Comando allarme non valido.")}}function vi(r){if(r.tiles!==void 0&&!Array.isArray(r.tiles))throw new Error("tiles deve essere una lista.");for(let t of r.tiles||[]){if(!t||!["alarm","count","detector"].includes(t.kind))throw new Error("Tipo di riquadro non valido.");if(t.entities!==void 0&&(!Array.isArray(t.entities)||t.entities.some(e=>typeof e!="string")))throw new Error("I sensori devono essere una lista di entit\xE0.");if(t.threshold!==void 0&&!Number.isFinite(Number(t.threshold)))throw new Error("Soglia numerica non valida.")}}var It=class extends ${static get properties(){return{...super.properties,_pending:{},_pin:{}}}static getConfigElement(){return document.createElement("pastel-alarm-card-editor")}static getStubConfig(){return{title:"Protego",subtitle:"Sistema allarme",entity:"",color:"blue",buttons:W.slice(0,4).map(t=>({name:t.name,kind:"panel",action:t.action,state:t.state,icon:t.icon}))}}static get styles(){return[super.styles,b`.alarm-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.alarm-actions button{min-height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;overflow-wrap:anywhere}.alarm-actions ha-icon{--mdc-icon-size:21px}.alarm-actions button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.danger{color:var(--error-color,#963f3b)}.code-form{display:grid;gap:10px;padding-top:16px}.code-form label{display:grid;gap:7px;font-size:13px}.code-actions{display:flex;gap:8px}.code-actions button{flex:1}.code-form input{width:100%}.hero .right{flex:1}@media(max-width:340px){.hero{padding:16px}.hero svg{width:76px;height:76px}}`]}setConfig(t){bi(t),this._pending=null,this._pin="",super.setConfig(t)}disconnectedCallback(){this._pin="",this._pending=null,super.disconnectedCallback()}async run(t,e){if(!(this.busy||!_e(this.hass,this.config,t))){if(mi(this.hass,this.config,t)&&!e){this._pending=t,this._pin="",this.error="";return}return this._pending=null,this._pin="",t.kind==="script"?this.call("script.turn_on",t.script):this.call(`alarm_control_panel.${t.action}`,this.config.entity,e?{code:e}:{})}}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=ye(this.hass,t.entity),i=this._pending,s=this.hass.states[t.entity]?.attributes?.code_format==="number";return o`<ha-card style=${this.palette(t.color||"blue")}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:shield"}></ha-icon></div><div class="heading"><h2>${t.title||"Protego"}</h2><div class="subtitle">${t.subtitle??"Sistema allarme"}</div></div><span class=${e.alert?"pill danger":"pill"}>${e.label}</span></header><div class="hero">${O("alarm")}<div class="right"><div class=${e.alert?"status danger":"status"} role="status">${e.label}</div><div class="caption">${e.detail}</div></div></div><div class="alarm-actions">${(t.buttons||[]).map(a=>o`<button style=${a.color?this.palette(a.color):""} aria-pressed=${String(!!a.state&&!e.unknown&&a.state===e.state)} ?disabled=${this.busy||!_e(this.hass,t,a)} @click=${()=>this.run(a)}><ha-icon icon=${a.icon||"mdi:shield"}></ha-icon><span>${a.name||"Esegui"}</span></button>`)}</div>
 ${i?o`<form class="code-form" @submit=${a=>{a.preventDefault();let n=this._pin;n?.trim()&&this.run(i,n)}}><label>Codice del pannello<input type="password" aria-label="Codice del pannello" inputmode=${s?"numeric":"text"} autocomplete="off" .value=${this._pin||""} @input=${a=>{this._pin=a.target.value}}></label><div class="code-actions"><button type="button" @click=${()=>{this._pending=null,this._pin=""}}>Annulla</button><button type="submit" ?disabled=${!this._pin?.trim()||this.busy}>Invia comando</button></div></form>`:""}${t.entity?"":o`<div class="empty">Scegli il pannello nell’editor. Ogni tasto può usare il pannello oppure uno script.</div>`}${this.feedback()}</ha-card>`}};var Mt=class extends ${static getConfigElement(){return document.createElement("pastel-security-card-editor")}static getStubConfig(){return{title:"Riepilogo sicurezza",subtitle:"Stato della casa",color:"mint",tiles:[{kind:"alarm",name:"Sistema allarme",entity:"",icon:"mdi:shield-check"},{kind:"count",name:"Porte aperte",entity:"",icon:"mdi:door-open"},{kind:"count",name:"Finestre aperte",entity:"",icon:"mdi:window-open"},{kind:"detector",name:"Fumo e CO\u2082",entities:[],icon:"mdi:smoke-detector"}]}}static get styles(){return[super.styles,b`.security-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.security-metric{padding:14px;border:1px solid var(--divider-color,#e8ebed);border-radius:16px;min-height:112px;min-width:0}.metric-heading{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--p-muted);line-height:1.5;min-height:20px}.metric-heading ha-icon{--mdc-icon-size:18px;flex-shrink:0;color:var(--p-accent)}.security-metric strong{display:block;font-size:24px;font-weight:550;letter-spacing:-.5px;line-height:1.3;margin-top:10px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.security-metric small{display:block;font-size:11px;line-height:1.5;color:var(--p-muted);margin-top:5px}.security-metric.words strong{font-size:18px;letter-spacing:-.2px;margin-top:13px}.security-metric.alert strong{color:var(--error-color,#963f3b)}.security-metric.attention strong{color:var(--warning-color,#786022)}.security-metric.unknown strong{color:var(--p-muted)}.security-metric.alert.unknown strong{color:var(--error-color,#963f3b)}`]}setConfig(t){vi(t),super.setConfig(t)}render(){if(!this.hass||!this.config)return o``;let t=this.config,e=t.tiles||[],i=e.map(s=>fi(this.hass,s));return o`<ha-card style=${this.palette(t.color||"mint")}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:view-dashboard-outline"}></ha-icon></div><div class="heading"><h2>${t.title||"Riepilogo sicurezza"}</h2><div class="subtitle">${t.subtitle??"Stato della casa"}</div></div><span class="pill" role="status">${gi(i)}</span></header><div class="security-metrics" aria-live="polite">${e.map((s,a)=>{let n=i[a];return o`<div class=${`security-metric ${s.kind==="count"?"":"words"} ${n.alert?"alert":""} ${n.attention?"attention":""} ${n.unknown?"unknown":""}`} style=${s.color?this.palette(s.color):""}><div class="metric-heading"><ha-icon icon=${s.icon||(s.kind==="alarm"?"mdi:shield-check":s.kind==="count"?"mdi:door-open":"mdi:smoke-detector")}></ha-icon><span>${s.name||"Stato"}</span></div><strong>${n.value}</strong><small>${n.detail}</small></div>`})}</div>${e.length?"":o`<div class="empty">Aggiungi i riquadri dall’editor.</div>`}</ha-card>`}};var Nt=class extends D{select(t,e,i,s){return o`<label>${t}<select aria-label=${t} @change=${a=>s(a.target.value)}>${i.map(([a,n])=>o`<option value=${a} ?selected=${a===e}>${n}</option>`)}</select></label>`}iconChoices(t,e){let i=t||"mdi:shield",s=be.find(([a])=>a===i)?.[1]||"Personalizzata";return o`<details><summary>Icona: ${s}</summary><div class="icon-options">${be.map(([a,n])=>o`<button aria-label=${`Icona ${n}`} aria-pressed=${String(i===a)} @click=${()=>e(a)}><ha-icon icon=${a}></ha-icon><span>${n}</span></button>`)}</div></details>`}updateItem(t,e,i){this.emit({[t]:(this.config[t]||[]).map((s,a)=>a===e?{...s,...i}:s)})}itemTools(t,e){return o`<div class="tools"><button aria-label="Sposta prima" ?disabled=${e===0} @click=${()=>this.reorder(t,e,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${e===(this.config[t]||[]).length-1} @click=${()=>this.reorder(t,e,1)}>↓</button><button @click=${()=>this.emit({[t]:this.config[t].filter((i,s)=>e!==s)})}>Rimuovi</button></div>`}reorder(t,e,i){let s=[...this.config[t]||[]],a=e+i;a<0||a>=s.length||([s[e],s[a]]=[s[a],s[e]],this.emit({[t]:s}))}heading(t,e){let i=this.config;return o`<div class="pair">${this.text("Nome card",i.title??t,s=>this.emit({title:s}))}${this.text("Sottotitolo",i.subtitle,s=>this.emit({subtitle:s}))}</div>${this.paletteSelect("Colore card",i.color||e,s=>this.emit({color:s}))}`}number(t,e,i){return o`<label>${t}<input aria-label=${t} type="number" step="any" .value=${String(e??"")} @change=${s=>i(s.target.value===""?void 0:Number(s.target.value))}></label>`}},Lt=class extends Nt{render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>${this.heading("Protego","blue")}${this.entity("Pannello allarme",t.entity,e=>this.emit({entity:e}),e=>e.entity_id.startsWith("alarm_control_panel."))}<h3>Pulsanti (${t.buttons?.length||0})</h3><p class="hint">Ogni pulsante può usare una funzione del pannello oppure uno script. Lo stato mostrato viene sempre dal pannello.</p>
 ${(t.buttons||[]).map((e,i)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${e.icon||"mdi:shield"}></ha-icon>${e.name||"Nuovo pulsante"}</div>${this.text("Nome pulsante",e.name,s=>this.updateItem("buttons",i,{name:s}))}${this.select("Tipo di comando",e.kind||"panel",[["panel","Pannello allarme"],["script","Script"]],s=>this.updateItem("buttons",i,{kind:s}))}
 ${e.kind==="script"?this.entity("Script del pulsante",e.script,s=>this.updateItem("buttons",i,{script:s}),s=>s.entity_id.startsWith("script."),"Cerca o scrivi script.nome"):this.select("Funzione del pannello",e.action||"",[["","Scegli una funzione"],...W.map(s=>[s.action,s.name+(t.entity&&!xe(this.hass,t.entity,s.action)?" \xB7 non disponibile":"")])],s=>{let a=W.find(n=>n.action===s);this.updateItem("buttons",i,{action:s,state:a?.state||""})})}
 ${this.iconChoices(e.icon,s=>this.updateItem("buttons",i,{icon:s}))}${this.paletteSelect("Colore pulsante",e.color||"",s=>this.updateItem("buttons",i,{color:s}),!0)}${this.itemTools("buttons",i)}<details><summary>Evidenziazione del pulsante</summary>${this.select("Stato del pannello da evidenziare",e.state||"",[["","Nessuno"],...Object.entries(ve).map(([s,a])=>[s,a[0]])],s=>this.updateItem("buttons",i,{state:s}))}</details></section>`)}
 <button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuovo pulsante",kind:"script",script:"",icon:"mdi:shield"}]})}>Aggiungi pulsante</button></div>`}},Rt=class extends Nt{render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"mint")}>${this.heading("Riepilogo sicurezza","mint")}<h3>Riquadri (${t.tiles?.length||0})</h3>
 ${(t.tiles||[]).map((e,i)=>o`<section class="button-editor"><div class="button-title"><ha-icon icon=${e.icon||"mdi:shield"}></ha-icon>${e.name||"Nuovo riquadro"}</div>${this.text("Nome riquadro",e.name,s=>this.updateItem("tiles",i,{name:s}))}${this.select("Tipo di dato",e.kind,[["alarm","Stato allarme"],["count","Conteggio aperture"],["detector","Sensori fumo, gas o segnalazione"]],s=>this.updateItem("tiles",i,{kind:s}))}
 ${e.kind==="alarm"?this.entity("Pannello allarme",e.entity,s=>this.updateItem("tiles",i,{entity:s}),s=>s.entity_id.startsWith("alarm_control_panel.")):e.kind==="count"?o`${this.entity("Entit\xE0 del conteggio",e.entity,s=>this.updateItem("tiles",i,{entity:s}),s=>["sensor","counter","input_number","number"].includes(s.entity_id.split(".")[0]))}<details><summary>Testi e attributo</summary>${this.text("Testo con zero aperture",e.zero_label,s=>this.updateItem("tiles",i,{zero_label:s}))}${this.text("Testo con aperture rilevate",e.open_label,s=>this.updateItem("tiles",i,{open_label:s}))}${this.text("Attributo opzionale",e.attribute,s=>this.updateItem("tiles",i,{attribute:s}))}</details>`:o`<p class="hint">Associa i sensori reali. Con un sensore numerico imposta la soglia di segnalazione; senza dati non viene mostrato OK. Per soglie diverse usa riquadri distinti; puoi scrivere l’ID di un sensore non classificato.</p>${(e.entities||[]).map(s=>o`<div class="control"><span>${this.hass.states[s]?.attributes?.friendly_name||s}</span><button @click=${()=>this.updateItem("tiles",i,{entities:e.entities.filter(a=>a!==s)})}>Rimuovi sensore</button></div>`)}${this.entity("Sensore da aggiungere","",s=>{s&&!e.entities?.includes(s)&&this.updateItem("tiles",i,{entities:[...e.entities||[],s]})},hi)}${this.number("Soglia sensori numerici (\u2265)",e.threshold,s=>this.updateItem("tiles",i,{threshold:s}))}<details><summary>Stati e testi personalizzati</summary>${this.text("Stato attivo",e.active_state??"on",s=>this.updateItem("tiles",i,{active_state:s}))}${this.text("Stato normale",e.normal_state??"off",s=>this.updateItem("tiles",i,{normal_state:s}))}${this.text("Testo segnalazione",e.alert_label,s=>this.updateItem("tiles",i,{alert_label:s}))}${this.text("Testo normale",e.normal_label,s=>this.updateItem("tiles",i,{normal_label:s}))}</details>`}
 ${this.iconChoices(e.icon,s=>this.updateItem("tiles",i,{icon:s}))}${this.paletteSelect("Colore riquadro",e.color||"",s=>this.updateItem("tiles",i,{color:s}),!0)}${this.itemTools("tiles",i)}</section>`)}
 <button @click=${()=>this.emit({tiles:[...t.tiles||[],{kind:"count",name:"Nuovo riquadro",entity:"",icon:"mdi:door-open"}]})}>Aggiungi riquadro</button></div>`}};var yi=`
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
`;function x(r,t){if(customElements.get(r)){console.warn(`Pastel UI: ${r} gi\xE0 caricato. Rimuovi la vecchia risorsa per usare la versione della suite.`);return}if(r.endsWith("-editor")){customElements.define(r,t);return}if(typeof t.prototype.requestUpdate=="function"){class i extends t{static get styles(){return[super.styles,b([yi])]}}customElements.define(r,i)}else{class i extends t{_render(...a){let n=super._render(...a);if(this.shadowRoot&&!this.shadowRoot.querySelector("[data-pastel-polish]")){let l=document.createElement("style");l.dataset.pastelPolish="",l.textContent=yi,this.shadowRoot.append(l)}return n}}customElements.define(r,i)}}var xi=new WeakMap,S=Zt(r=>t=>{if(!(t instanceof M))throw new Error("unsafeHTML can only be used in text bindings");let e=xi.get(t);if(e!==void 0&&Z(r)&&r===e.value&&t.value===e.fragment)return;let i=document.createElement("template");i.innerHTML=r;let s=document.importNode(i.content,!0);t.setValue(s),xi.set(t,{value:r,fragment:s})});var Ot={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",glow:"#fef08a",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",glow:"#dbeafe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",glow:"#dcfce7",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",glow:"#fdf2f8",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",glow:"#ede9fe",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",glow:"#fef2f2",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",glow:"#d1fae5",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",glow:"#fff7ed",text:"#d9762a"}},_i=Object.keys(Ot);function Xi(r){return Ot[r]||Ot.amber}function Zi(r,t,e=56){let i=t?r.light:"#d8dde3",s=t?r.base:"#b8c0cc",a=t?r.glow:"#eef0f3",n=t?r.light:"#c7cdd6",l=t?r.base:"#aab1bd",c=t?r.text:"#8b93a1",d=Math.round(e*1.32);return`
    <svg width="${e}" height="${d}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 22 C8 14 14 8 22 8 C30 8 36 14 36 22 C36 29 32 33 30 37 L14 37 C12 33 8 29 8 22Z"
            fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <ellipse cx="22" cy="21" rx="8" ry="7" fill="${a}" opacity="0.65"/>
      <path d="M17 28 Q20 24 22 27 Q24 30 27 26" stroke="${s}" stroke-width="1.5"
            stroke-linecap="round" fill="none" opacity="0.8"/>
      <rect x="14" y="37" width="16" height="3" rx="1.5" fill="${n}"/>
      <rect x="15" y="40" width="14" height="3" rx="1.5" fill="${l}"/>
      <rect x="16" y="43" width="12" height="3" rx="1.5" fill="${c}"/>
    </svg>`}var we=class extends v{static get properties(){return{hass:{},config:{},_expandedEntity:{state:!0}}}static getStubConfig(){return{title:"Esterni",subtitle:"Luci esterne",icon:"mdi:outdoor-lamp",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 luce (entities: [...])");this.config={title:t.title||"Luci",subtitle:t.subtitle||"",icon:t.icon||"mdi:lightbulb-group",color:_i.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-lights-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],a=s&&s.attributes.icon;return a||(e?"mdi:lightbulb":"mdi:lightbulb-outline")}_isDimmable(t){let e=this.hass.states[t];return e?(e.attributes.supported_color_modes||[]).some(s=>["brightness","color_temp","hs","rgb","rgbw","rgbww","xy"].includes(s)):!1}_brightnessPct(t){let e=this.hass.states[t];if(!e||e.state!=="on")return 0;let i=e.attributes.brightness;return i==null?100:Math.round(i/255*100)}_toggleEntity(t,e){e&&e.stopPropagation(),this.hass.callService("homeassistant","toggle",{entity_id:t})}_toggleAll(){let t=this._entityIds(),e=t.some(i=>this.hass.states[i]&&this.hass.states[i].state==="on");this.hass.callService("homeassistant",e?"turn_off":"turn_on",{entity_id:t})}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}_setBrightness(t,e){this.hass.callService("light","turn_on",{entity_id:t,brightness_pct:Math.round(e)})}_cancelPress(){clearTimeout(this._pressTimer),this._press=null}_onPointerDown(t,e){this._cancelPress(),!(e.isPrimary===!1||e.button!==0)&&(this._press={id:t,pointerId:e.pointerId,x:e.clientX,y:e.clientY,held:!1},t&&(this._pressTimer=setTimeout(()=>{this._press&&(this._press.held=!0,this._showMoreInfo(t))},500)))}_onPointerMove(t){let e=this._press;e&&e.pointerId===t.pointerId&&Math.hypot(t.clientX-e.x,t.clientY-e.y)>10&&this._cancelPress()}_onPointerUp(t,e){this._onPointerMove(e);let i=this._press;this._cancelPress(),!(!i||i.id!==t||i.pointerId!==e.pointerId||i.held)&&(t?this._toggleEntity(t,e):this._toggleAll())}_onKeyDown(t,e){e.repeat||!["Enter"," "].includes(e.key)||(e.preventDefault(),t?this._toggleEntity(t,e):this._toggleAll())}disconnectedCallback(){this._cancelPress(),this._sliderCleanup&&this._sliderCleanup(),super.disconnectedCallback()}_onSliderPointerDown(t,e){if(e.stopPropagation(),this._cancelPress(),this._sliderCleanup&&this._sliderCleanup(),e.isPrimary===!1||e.button!==0)return;let i=e.currentTarget,s=i.getBoundingClientRect(),a=this._brightnessPct(t),n=!1,l=p=>{a=Math.round(Math.min(100,Math.max(1,(p-s.left)/s.width*100))),i.style.setProperty("--slider-value",`${a}%`),i.setAttribute("aria-valuenow",a)},c=()=>{window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",u),window.removeEventListener("blur",c),i.style.removeProperty("--slider-value"),i.setAttribute("aria-valuenow",this._brightnessPct(t)),this._sliderCleanup=null},d=p=>{if(p.pointerId!==e.pointerId)return;let m=Math.abs(p.clientX-e.clientX),g=Math.abs(p.clientY-e.clientY);if(!n&&g>10&&g>=m){c();return}m>10&&(n=!0),n&&l(p.clientX)},f=p=>{if(p.pointerId!==e.pointerId)return;let m=Math.abs(p.clientX-e.clientX),g=Math.abs(p.clientY-e.clientY);if(!n&&g>10){c();return}l(p.clientX),c(),this._setBrightness(t,a)},u=p=>{p.pointerId===e.pointerId&&c()};this._sliderCleanup=c,window.addEventListener("pointermove",d),window.addEventListener("pointerup",f),window.addEventListener("pointercancel",u),window.addEventListener("blur",c)}_onSliderKeyDown(t,e){let i={ArrowRight:5,ArrowUp:5,ArrowLeft:-5,ArrowDown:-5}[e.key];if(i===void 0&&!["Home","End"].includes(e.key))return;e.preventDefault(),e.stopPropagation();let s=e.key==="Home"?1:e.key==="End"?100:Math.min(100,Math.max(1,this._brightnessPct(t)+i));this._setBrightness(t,s)}render(){if(!this.config||!this.hass)return o``;let t=Xi(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),s=i.filter(c=>this.hass.states[c].state==="on").length,a=i.length,n=a?Math.round(s/a*100):0,l=s>0;return o`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-glow:${t.glow}; --c-text:${t.text};">

        <div class="header" role="button" tabindex="0"
          aria-label=${l?"Spegni tutte le luci":"Accendi tutte le luci"}
          @pointerdown=${c=>this._onPointerDown(null,c)}
          @pointermove=${c=>this._onPointerMove(c)}
          @pointerup=${c=>this._onPointerUp(null,c)}
          @pointercancel=${()=>this._cancelPress()}
          @pointerleave=${()=>this._cancelPress()}
          @keydown=${c=>this._onKeyDown(null,c)}>

          <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle||(l?"Tocca per spegnere tutto":"Tocca per accendere tutto")}</div>
          </div>
        </div>

        <div class="panel summary">
          <div class="summary-row">
            ${S(Zi(t,l,56))}
            <div class="count-block">
              <div class="count">${s}<span class="count-total">/${a}</span></div>
              <div class="count-label">luci accese</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((c,d)=>{let f=typeof c=="string"?c:c.entity,u=this.hass.states[f];if(!u)return o`<div class="row missing">Entità non trovata: ${f}</div>`;let p=u.state==="on",m=p&&this._isDimmable(f),g=this._entityLabel(c),h=this._entityIcon(c,p),y=this._brightnessPct(f);return o`
              <div>
                <div
                  class="row ${m?"expanded":""} ${p?"is-on":""}"
                  role="button" tabindex="0" aria-pressed=${p}
                  aria-label=${`${g}: ${p?"spegni":"accendi"}`}
                  @keydown=${_=>this._onKeyDown(f,_)}
                  @pointermove=${_=>this._onPointerMove(_)}
                  @pointercancel=${()=>this._cancelPress()}
                  @pointerdown=${_=>this._onPointerDown(f,_)}
                  @pointerup=${_=>this._onPointerUp(f,_)}
                  @pointerleave=${()=>this._cancelPress()}
                >
                  <ha-icon icon=${h} style="color:${p?t.text:"var(--secondary-text-color)"}"></ha-icon>
                  <span class="row-label ${p?"":"row-label-off"}">${g}</span>
                  <span class="row-status" style="color:${p?t.text:"var(--secondary-text-color)"}">
                    ${m?o`${y}%`:p?"Acceso":"Spento"}
                  </span>
                </div>
                ${m?o`
                  <div class="slider-wrap">
                    <div class="slider-track" role="slider" tabindex="0"
                      aria-label=${`Luminosit\xE0 ${g}`} aria-valuemin="1" aria-valuemax="100" aria-valuenow=${y}
                      @keydown=${_=>this._onSliderKeyDown(f,_)}
                      @pointerdown=${_=>this._onSliderPointerDown(f,_)}>
                      <div class="slider-fill" style="width:var(--slider-value, ${y}%)"></div>
                      <div class="slider-thumb" style="left:var(--slider-value, ${y}%)"></div>
                    </div>
                  </div>
                `:""}
              </div>
              ${d<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return b`
      :host {
        display: block;
      }
      ha-card {
        border-radius: 28px;
        background: var(--ha-card-background, #ffffff);
        border: 1px solid var(--divider-color, rgba(0,0,0,0.06));
        box-shadow: 0 3px 8px rgba(0,0,0,0.03), 0 10px 28px rgba(0,0,0,0.05);
        padding: 4px;
        overflow: hidden;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 16px 10px;
        touch-action: pan-y;
        cursor: pointer;
        user-select: none;
      }
      .header ha-icon {
        --mdc-icon-size: 22px;
        padding: 10px;
        border-radius: 14px;
        background: var(--c-bg);
      }
      .title {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .subtitle {
        font-size: 12px;
        color: var(--c-text);
        margin-top: 1px;
      }
      .panel {
        background: var(--c-bg);
        border-radius: 20px;
        margin: 4px;
      }
      .summary {
        padding: 12px 16px;
      }
      .summary-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .count-block {
        flex: 1;
        text-align: right;
        min-width: 0;
      }
      .count {
        font-size: 48px;
        font-weight: 400;
        font-variant-numeric: tabular-nums;
        color: var(--c-base);
        line-height: 1;
        letter-spacing: -1px;
      }
      .count-total {
        font-size: 22px;
        opacity: 0.65;
        margin-left: 3px;
      }
      .count-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .progress-track {
        margin-top: 12px;
        height: 6px;
        border-radius: 3px;
        background: var(--c-light);
        overflow: hidden;
      }
      .progress-fill {
        height: 100%;
        background: var(--c-base);
        transition: width 0.3s ease;
      }
      .rows {
        padding: 6px;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 13px 12px;
        min-height: 28px;
        touch-action: pan-y;
        border-radius: 16px;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .header:focus-visible, .row:focus-visible, .slider-track:focus-visible {
        outline: 2px solid var(--c-text);
        outline-offset: -2px;
      }
      .row.is-on .row-status { background: var(--c-light); }
      @media (prefers-reduced-motion: reduce) {
        .progress-fill { transition: none; }
      }
      .row.expanded {
        padding-bottom: 14px;
      }
      .row:active {
        background: rgba(0,0,0,0.04);
      }
      .row ha-icon {
        --mdc-icon-size: 22px;
        flex-shrink: 0;
      }
      .row-label {
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        flex: 1;
        min-width: 0;
        overflow-wrap: anywhere;
      }
      .row-label-off {
        opacity: 0.65;
      }
      .row-status {
        font-size: 12px;
        font-weight: 600;
        flex-shrink: 0;
        font-variant-numeric: tabular-nums;
        padding: 5px 8px;
        border-radius: 9px;
        background: rgba(255,255,255,0.4);
      }
      .row.missing {
        color: var(--error-color, red);
        font-size: 12px;
        padding: 10px 14px;
      }
      .divider {
        height: 0.5px;
        background: rgba(0,0,0,0.08);
        margin: 0 14px;
      }
      .slider-wrap {
        padding: 0 22px 4px 48px;
      }
      .slider-track {
        position: relative;
        height: 36px;
        border-radius: 4px;
        background: linear-gradient(var(--c-light), var(--c-light)) center / 100% 8px no-repeat;
        cursor: pointer;
        touch-action: pan-y;
      }
      .slider-fill {
        position: absolute;
        top: 14px; left: 0; height: 8px;
        border-radius: 4px;
        background: linear-gradient(90deg, var(--c-light), var(--c-base));
      }
      .slider-thumb {
        position: absolute;
        top: 50%;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid var(--c-base);
        box-shadow: 0 1px 4px rgba(0,0,0,0.25);
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
    `}};x("pastel-lights-card",we);var $e=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_entitiesChanged(t){let e=t.detail.value||[];this._config={...this._config,entities:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"light"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:lightbulb-group",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${_i.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Ot[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
        </div>

      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (opzionale)",icon:"Icona",entities:"Luci",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return b`
      .editor {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 8px 0;
      }
      .color-label {
        font-size: 14px;
        color: var(--primary-text-color);
        margin-bottom: 8px;
        font-weight: 500;
      }
      .color-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      .swatch {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid transparent;
        cursor: pointer;
        padding: 0;
        transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover {
        transform: scale(1.1);
      }
      .swatch.selected {
        border-color: var(--primary-text-color);
        box-shadow: 0 0 0 2px var(--card-background-color, #fff);
      }
    `}};x("pastel-lights-card-editor",$e);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-lights-card",name:"Pastel Lights",description:"Card per il controllo luci con stile pastello, conteggio SVG e slider luminosit\xE0.",preview:!0});var Dt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"},gray:{base:"#9ca3af",light:"#e5e7eb",bg:"#f3f4f6",text:"#6b7280"}},Ji=Object.keys(Dt);function ts(r){return Dt[r]||Dt.blue}function es(r,t){return t%2!==0&&r===t-1}var ke=class extends v{static get properties(){return{hass:{},config:{},_activating:{state:!0}}}static getStubConfig(){return{title:"",buttons:[{label:"Bottone",icon:"mdi:lightning-bolt",color:"blue",action:{type:"toggle",entity_id:""}}]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title||"",buttons:Array.isArray(t.buttons)?t.buttons:[]},this._activating={}}getCardSize(){return 1+Math.ceil((this.config.buttons||[]).length/2)}static getConfigElement(){return document.createElement("pastel-button-card-editor")}async _handleTap(t,e,i){if(i&&i.stopPropagation(),!t.action)return;try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}this._activating={...this._activating,[e]:!0},setTimeout(()=>{this._activating={...this._activating,[e]:!1}},200);let s=t.action;switch(s.type){case"toggle":s.entity_id&&this.hass.callService("homeassistant","toggle",{entity_id:s.entity_id});break;case"turn_on":if(s.entity_id){let[a]=s.entity_id.split(".");this.hass.callService(a,"turn_on",{entity_id:s.entity_id})}break;case"turn_off":if(s.entity_id){let[a]=s.entity_id.split(".");this.hass.callService(a,"turn_off",{entity_id:s.entity_id})}break;case"call_service":{let[a,n]=(s.service||"").split(".");a&&n&&this.hass.callService(a,n,s.data||{});break}case"scene":s.entity_id&&this.hass.callService("scene","turn_on",{entity_id:s.entity_id});break;case"script":s.entity_id&&this.hass.callService("script","turn_on",{entity_id:s.entity_id});break;case"navigate":s.navigation_path&&(history.pushState(null,"",s.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":s.url_path&&window.open(s.url_path,s.new_tab!==!1?"_blank":"_self");break;case"more_info":if(s.entity_id){let a=new Event("hass-more-info",{bubbles:!0,composed:!0});a.detail={entityId:s.entity_id},this.dispatchEvent(a)}break;default:break}}render(){if(!this.config||!this.hass)return o``;let t=this.config.buttons||[],e=t.length;return o`
      <ha-card>
        ${this.config.title?o`
          <div class="card-title">${this.config.title}</div>
        `:""}

        <div class="button-grid">
          ${t.map((i,s)=>{let a=ts(i.color),n=es(s,e),l=this._activating&&this._activating[s];return o`
              <button
                class="pastel-btn ${l?"activating":""}"
                style="
                  --btn-bg: ${a.bg};
                  --btn-text: ${a.text};
                  --btn-base: ${a.base};
                  --btn-light: ${a.light};
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
    `}static get styles(){return b`
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
    `}};x("pastel-button-card",ke);var Se=class extends v{static get properties(){return{hass:{},_config:{state:!0},_dragIndex:{state:!0},_dragOverIndex:{state:!0}}}setConfig(t){this._config={...t,buttons:[...t.buttons||[]]},this._dragIndex=null,this._dragOverIndex=null}_fireChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_addButton(){let t=[...this._config.buttons||[],{label:"Nuovo bottone",icon:"mdi:lightning-bolt",color:"blue",action:{type:"toggle",entity_id:""}}];this._config={...this._config,buttons:t},this._fireChanged()}_removeButton(t){let e=[...this._config.buttons||[]];e.splice(t,1),this._config={...this._config,buttons:e},this._fireChanged()}_updateButton(t,e,i){let s=[...this._config.buttons||[]];s[t]={...s[t],[e]:i},this._config={...this._config,buttons:s},this._fireChanged()}_updateButtonAction(t,e,i){let s=[...this._config.buttons||[]];s[t]={...s[t],action:{...s[t].action||{},[e]:i}},this._config={...this._config,buttons:s},this._fireChanged()}_onDragStart(t,e){this._dragIndex=t,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(t))}_onDragOver(t,e){e.preventDefault(),e.dataTransfer.dropEffect="move",this._dragOverIndex=t}_onDrop(t,e){if(e.preventDefault(),this._dragIndex===null||this._dragIndex===t){this._dragIndex=null,this._dragOverIndex=null;return}let i=[...this._config.buttons||[]],[s]=i.splice(this._dragIndex,1);i.splice(t,0,s),this._config={...this._config,buttons:i},this._dragIndex=null,this._dragOverIndex=null,this._fireChanged()}_onDragEnd(){this._dragIndex=null,this._dragOverIndex=null}_renderActionFields(t,e){let i=t.action?.type||"toggle",s=["toggle","turn_on","turn_off","more_info","scene","script"].includes(i),a=i==="call_service",n=i==="navigate",l=i==="url",c=i==="scene"?["scene"]:i==="script"?["script"]:void 0;return o`
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

      ${a?o`
        <ha-textfield
          label="Servizio (es. light.turn_on)"
          .value=${t.action?.service||""}
          @change=${d=>this._updateButtonAction(e,"service",d.target.value)}
        ></ha-textfield>
        <ha-textfield
          label="Dati JSON opzionali (es. {&quot;entity_id&quot;: &quot;light.xyz&quot;})"
          .value=${t.action?.data?JSON.stringify(t.action.data):""}
          @change=${d=>{try{let f=JSON.parse(d.target.value||"{}");this._updateButtonAction(e,"data",f)}catch{}}}
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
                  ${Ji.map(s=>o`
                    <button
                      class="swatch ${e.color===s?"selected":""}"
                      style="background:${Dt[s].base}"
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
    `}static get styles(){return b`
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
    `}};x("pastel-button-card-editor",Se);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-button-card",name:"Pastel Button",description:"Griglia di bottoni pastello personalizzabili: colore, icona, etichetta e azione per ogni bottone. Layout automatico 2 colonne.",preview:!0});var jt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},$i=Object.keys(jt);function is(r){return jt[r]||jt.blue}var ss=["auto","window","door","gate","garage","generic"],wi={window:{closed:"mdi:window-closed-variant",open:"mdi:window-open-variant"},door:{closed:"mdi:door-closed",open:"mdi:door-open"},gate:{closed:"mdi:gate",open:"mdi:gate-open"},garage:{closed:"mdi:garage",open:"mdi:garage-open"},generic:{closed:"mdi:square-outline",open:"mdi:square"}},rs={auto:"Automatico",window:"Finestra",door:"Porta",gate:"Cancello",garage:"Basculante",generic:"Generico"};function as(r,t){if(r&&r!=="auto")return r;if(!t)return"generic";let e=t.attributes?.device_class;return e==="window"?"window":e==="door"?"door":e==="gate"?"gate":e==="garage_door"?"garage":(t.entity_id?.startsWith("cover."),"generic")}function os(r){if(!r)return!1;let t=r.state;return t==="on"||t==="open"||t==="opening"||t==="true"}function ns(r,t){let e=t?"1":"0",i=t?"rotate(-50)":"rotate(0)";return`
    <svg width="70" height="80" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="54" height="64" rx="5" fill="#ffffff" opacity=".7"/>
      <rect x="8" y="8" width="54" height="64" rx="5" stroke="${r.base}" stroke-width="2.5"/>
      <line x1="35" y1="8" x2="35" y2="72" stroke="${r.base}" stroke-width="2" opacity=".6"/>
      <line x1="8" y1="40" x2="62" y2="40" stroke="${r.base}" stroke-width="2" opacity=".6"/>
      <circle cx="35" cy="40" r="4" fill="${r.base}" opacity=".8"/>
      <rect x="36" y="9" width="25" height="30" rx="3" fill="${r.light}"
        style="transform-origin:36px 9px;transform:${i}deg;transition:transform .5s ease"/>
      <g opacity="${e}" style="transition:opacity .4s">
        <path d="M50 20 Q58 24 50 28" stroke="${r.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" repeatCount="indefinite"/>
        </path>
        <path d="M54 30 Q62 34 54 38" stroke="${r.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.5;0" dur="2.1s" repeatCount="indefinite" begin="0.4s"/>
        </path>
        <path d="M50 46 Q58 50 50 54" stroke="${r.base}" stroke-width="1.5" stroke-linecap="round" fill="none">
          <animate attributeName="opacity" values="0;0.6;0" dur="1.6s" repeatCount="indefinite" begin="0.8s"/>
        </path>
      </g>
    </svg>`}function ls(r,t){let e=t?"perspective(300px) rotateY(-55deg)":"perspective(300px) rotateY(0deg)",i=t?"1":"0";return`
    <svg width="60" height="82" viewBox="0 0 60 82" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <rect x="5" y="4" width="50" height="74" rx="4" fill="${r.light}" stroke="${r.base}" stroke-width="2"/>
      <rect x="7" y="6" width="46" height="70" rx="3" fill="#ffffff" opacity=".85"
        style="transform-origin:7px 6px;transform:${e};transition:transform .5s ease"/>
      <circle cx="44" cy="42" r="3.5" fill="${r.base}"/>
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
    </svg>`}function cs(r,t){let e=t?"perspective(300px) rotateY(-70deg)":"rotateY(0deg)",i=t?"perspective(300px) rotateY(70deg)":"rotateY(0deg)",s=t?"0":"1";return`
    <svg width="90" height="75" viewBox="0 0 90 75" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <rect x="2"  y="8" width="10" height="56" rx="3" fill="${r.base}" opacity=".7"/>
      <rect x="78" y="8" width="10" height="56" rx="3" fill="${r.base}" opacity=".7"/>
      <g style="transform-origin:13px 36px;transform:${e};transition:transform .5s ease">
        <rect x="13" y="12" width="27" height="48" rx="2" fill="${r.light}" stroke="${r.base}" stroke-width="1.5"/>
        <line x1="13" y1="24" x2="40" y2="24" stroke="${r.base}" stroke-width="1" opacity=".4"/>
        <line x1="13" y1="36" x2="40" y2="36" stroke="${r.base}" stroke-width="1" opacity=".4"/>
        <line x1="13" y1="48" x2="40" y2="48" stroke="${r.base}" stroke-width="1" opacity=".4"/>
        <line x1="26" y1="12" x2="26" y2="60" stroke="${r.base}" stroke-width="1" opacity=".4"/>
      </g>
      <g style="transform-origin:77px 36px;transform:${i};transition:transform .5s ease">
        <rect x="50" y="12" width="27" height="48" rx="2" fill="${r.light}" stroke="${r.base}" stroke-width="1.5"/>
        <line x1="50" y1="24" x2="77" y2="24" stroke="${r.base}" stroke-width="1" opacity=".4"/>
        <line x1="50" y1="36" x2="77" y2="36" stroke="${r.base}" stroke-width="1" opacity=".4"/>
        <line x1="50" y1="48" x2="77" y2="48" stroke="${r.base}" stroke-width="1" opacity=".4"/>
        <line x1="63" y1="12" x2="63" y2="60" stroke="${r.base}" stroke-width="1" opacity=".4"/>
      </g>
      <circle cx="45" cy="36" r="5" fill="${r.base}" opacity="${s}" style="transition:opacity .3s">
        <animate attributeName="opacity" values="${t?"0":"0.9;0.5;0.9"}" dur="3s" repeatCount="indefinite"/>
      </circle>
      <rect x="2" y="64" width="86" height="4" rx="2" fill="${r.base}" opacity=".3"/>
    </svg>`}function ds(r,t){let e=t?"perspective(400px) rotateX(-85deg)":"rotateX(0deg)",i=t?"1":"0",s=t?"#34c472":r.base;return`
    <svg width="86" height="75" viewBox="0 0 86 75" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <polygon points="4,24 43,4 82,24" fill="${r.light}" stroke="${r.base}" stroke-width="2"/>
      <circle cx="43" cy="15" r="3.5" fill="${s}" style="transition:fill .4s">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      <rect x="4" y="24" width="78" height="48" rx="4" fill="${r.bg}" stroke="${r.base}" stroke-width="2"/>
      <g style="transform-origin:43px 24px;transform:${e};transition:transform .6s ease">
        <rect x="10" y="28" width="66" height="40" rx="3" fill="#ffffff" opacity=".88" stroke="${r.base}" stroke-width="1.5"/>
        <line x1="10" y1="36" x2="76" y2="36" stroke="${r.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="44" x2="76" y2="44" stroke="${r.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="52" x2="76" y2="52" stroke="${r.base}" stroke-width="1" opacity=".35"/>
        <line x1="10" y1="60" x2="76" y2="60" stroke="${r.base}" stroke-width="1" opacity=".35"/>
        <rect x="37" y="45" width="12" height="4" rx="2" fill="${r.base}" opacity=".8"/>
      </g>
      <g opacity="${i}" style="transition:opacity .4s">
        <rect x="10" y="50" width="66" height="20" rx="2" fill="${r.base}" opacity=".08"/>
        <line x1="43" y1="50" x2="43" y2="70" stroke="${r.base}" stroke-width="1" opacity=".2" stroke-dasharray="3,3"/>
      </g>
    </svg>`}function ps(r,t){let e=t?r.base:r.light;return`
    <svg width="68" height="78" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="56" height="62" rx="8" fill="${r.light}" stroke="${r.base}" stroke-width="2"/>
      <rect x="14" y="14" width="40" height="46" rx="5" fill="#ffffff" opacity=".7"/>
      <line x1="14" y1="14" x2="54" y2="60" stroke="${r.base}" stroke-width="1.5" opacity=".15"/>
      <line x1="54" y1="14" x2="14" y2="60" stroke="${r.base}" stroke-width="1.5" opacity=".15"/>
      <circle cx="34" cy="37" r="8" fill="${e}" opacity=".8" style="transition:fill .4s">
        <animate attributeName="r" values="8;9.5;8" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="34" cy="37" r="3" fill="#ffffff"/>
      <circle cx="54" cy="16" r="4" fill="${r.base}" opacity=".7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </svg>`}function us(r,t,e){switch(r){case"window":return ns(t,e);case"door":return ls(t,e);case"gate":return cs(t,e);case"garage":return ds(t,e);default:return ps(t,e)}}function hs(r,t,e,i){if(i)return{count:"\u2713",label:"tutto chiuso"};let s=e==="window"?"finestr"+(r===1?"a":"e"):e==="door"?r===1?"porta":"porte":e==="gate"?r===1?"cancello":"cancelli":e==="garage"?r===1?"basculante":"basculanti":r===1?"apertura":"aperture";return{count:String(r),label:`${s} aper${r===1?"t"+(e==="window"?"a":"o"):"te"}`}}function ms(r,t,e){return e?"Casa sicura":r===1?"Una aperta":r===t?"Tutte aperte":`${r} aperte`}function fs(r,t){let e=[...r];return t==="alpha"?e.sort((i,s)=>i.name.localeCompare(s.name)):t==="open_first"?e.sort((i,s)=>(s.open?1:0)-(i.open?1:0)):t==="closed_first"?e.sort((i,s)=>(i.open?1:0)-(s.open?1:0)):e}function gs(r,t){return t==="open"?r.filter(e=>e.open):t==="closed"?r.filter(e=>!e.open):r}var Ce=class extends v{static get properties(){return{hass:{},config:{},_entities:{state:!0}}}static getStubConfig(){return{title:"Porte e Finestre",subtitle:"Piano terra",icon:"mdi:home",color:"blue",opening_type:"window",show_header:!0,show_hero:!0,show_list:!0,show_badge:!0,show_counter:!0,sort:"manual",filter:"all",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title??"Aperture",subtitle:t.subtitle??"",icon:t.icon??"mdi:home",color:$i.includes(t.color)?t.color:"blue",opening_type:t.opening_type??"window",show_header:t.show_header??!0,show_hero:t.show_hero??!0,show_list:t.show_list??!0,show_badge:t.show_badge??!0,show_counter:t.show_counter??!0,sort:t.sort??"manual",filter:t.filter??"all",entities:Array.isArray(t.entities)?t.entities:[]},this._pressTimers={},this._tapCounters={}}getCardSize(){return 3+Math.ceil((this.config.entities||[]).length/1)}static getConfigElement(){return document.createElement("pastel-openings-card-editor")}_resolveEntities(){return(this.config.entities||[]).map(t=>{let e=typeof t=="string"?t:t.entity,i=this.hass.states[e],s=as(typeof t=="object"?t.type:"auto",i),a=os(i),n=wi[s]||wi.generic;return{id:e,obj:i,name:typeof t=="object"&&t.name?t.name:i?.attributes?.friendly_name||e,type:s,open:a,icon:a?n.open:n.closed,tap:typeof t=="object"?t.tap_action:null,hold:typeof t=="object"?t.hold_action:null,dbl:typeof t=="object"?t.double_tap_action:null}})}_dispatchAction(t,e){if(!t){this._moreInfo(e);return}try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}switch(t.type){case"more_info":this._moreInfo(t.entity_id||e);break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id||e});break;case"turn_on":{let[i]=(t.entity_id||e).split(".");this.hass.callService(i,"turn_on",{entity_id:t.entity_id||e});break}case"turn_off":{let[i]=(t.entity_id||e).split(".");this.hass.callService(i,"turn_off",{entity_id:t.entity_id||e});break}case"call_service":{let[i,s]=(t.service||"").split(".");i&&s&&this.hass.callService(i,s,t.data||{});break}case"navigate":t.navigation_path&&(history.pushState(null,"",t.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":t.url_path&&window.open(t.url_path,t.new_tab!==!1?"_blank":"_self");break;default:this._moreInfo(e)}}_moreInfo(t){if(!t)return;let e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_onPointerDown(t,e){e.stopPropagation(),!(e.isPrimary===!1||e.button!==0)&&(this._onPointerLeave(t),this._pressOrigin={id:t.id,pointerId:e.pointerId,x:e.clientX,y:e.clientY},this._pressTimers[t.id]=setTimeout(()=>{this._pressTimers[t.id]=null,this._dispatchAction(t.hold,t.id)},500))}_onPointerUp(t,e){e.stopPropagation(),this._onPointerMove(t,e),this._pressOrigin?.pointerId===e.pointerId&&this._pressTimers[t.id]&&(clearTimeout(this._pressTimers[t.id]),this._pressTimers[t.id]=null,this._tapCounters[t.id]=(this._tapCounters[t.id]||0)+1,this._tapCounters[t.id]===1&&setTimeout(()=>{this._tapCounters[t.id]===1?(this._tapCounters[t.id]=0,this._dispatchAction(t.tap,t.id)):this._tapCounters[t.id]>1&&(this._tapCounters[t.id]=0,this._dispatchAction(t.dbl,t.id))},300))}_onPointerMove(t,e){let i=this._pressOrigin;i?.id===t.id&&i.pointerId===e.pointerId&&Math.hypot(e.clientX-i.x,e.clientY-i.y)>10&&this._onPointerLeave(t)}disconnectedCallback(){Object.values(this._pressTimers||{}).forEach(clearTimeout),this._tapCounters={},super.disconnectedCallback()}_onPointerLeave(t){clearTimeout(this._pressTimers[t.id]),this._pressTimers[t.id]=null}render(){if(!this.config||!this.hass)return o``;let t=is(this.config.color),e=this._resolveEntities(),i=fs(e,this.config.sort),s=gs(i,this.config.filter),a=e.filter(g=>g.open).length,n=e.length,l=a===0,c=(()=>{let g={};return e.forEach(h=>{g[h.type]=(g[h.type]||0)+1}),Object.entries(g).sort((h,y)=>y[1]-h[1])[0]?.[0]||"generic"})(),d=c,f=!l,{count:u,label:p}=hs(a,n,c,l),m=ms(a,n,l);return o`
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
                ${S(us(d,t,f))}
              </div>
              <div class="hero-count-block">
                ${this.config.show_counter?o`
                  <div class="hero-count ${l?"count-safe":""}">${u}</div>
                `:""}
                <div class="hero-label">${p}</div>
                ${this.config.show_badge?o`
                  <div class="hero-badge ${l?"badge-safe":"badge-alert"}">${m}</div>
                `:""}
              </div>
            </div>
          </div>
        `:""}

        <!-- list -->
        ${this.config.show_list&&s.length>0?o`
          <div class="panel-list">
            ${s.map((g,h)=>o`
              ${h>0?o`<div class="divider"></div>`:""}
              <div
                class="list-row ${g.open?"row-open":""}"
                @pointerdown=${y=>this._onPointerDown(g,y)}
                @pointerup=${y=>this._onPointerUp(g,y)}
                @pointerleave=${()=>this._onPointerLeave(g)}
                @pointermove=${y=>this._onPointerMove(g,y)}
                @pointercancel=${()=>this._onPointerLeave(g)}
              >
                <ha-icon icon=${g.icon}
                  style="color:${g.open?"var(--c-text)":"var(--secondary-text-color)"}">
                </ha-icon>
                <span class="row-name ${g.open?"":"row-name-closed"}">${g.name}</span>
                <span class="row-status ${g.open?"status-open":""}">
                  ${g.open?"Aperto":"Chiuso"}
                </span>
              </div>
            `)}
          </div>
        `:""}
      </ha-card>
    `}static get styles(){return b`
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
    `}};x("pastel-openings-card",Ce);var ze=class extends v{static get properties(){return{hass:{},_config:{state:!0},_entityRegistry:{state:!0}}}connectedCallback(){super.connectedCallback(),this._loadEntityRegistry()}async _loadEntityRegistry(){if(this.hass)try{let t=await this.hass.connection.sendMessagePromise({type:"config/entity_registry/list"});this._entityRegistry=t}catch{this._entityRegistry=[]}}updated(t){t.has("hass")&&this.hass&&!this._entityRegistry&&this._loadEntityRegistry()}setConfig(t){this._config={...t,entities:[...t.entities||[]]}}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_set(t,e){this._config={...this._config,[t]:e},this._fire()}_addEntity(){let t=[...this._config.entities||[],{entity:"",name:"",type:"auto",tap_action:null,hold_action:null,double_tap_action:null}];this._set("entities",t)}_removeEntity(t){let e=[...this._config.entities];e.splice(t,1),this._set("entities",e)}_updateEntity(t,e,i){let s=[...this._config.entities];s[t]={...s[t],[e]:i},this._set("entities",s)}_updateEntityAction(t,e,i,s){let a=[...this._config.entities];a[t]={...a[t],[e]:{...a[t][e]||{type:"more_info"},[i]:s}},this._set("entities",a)}_onDragStart(t,e){this._dragIdx=t,e.dataTransfer.effectAllowed="move"}_onDragOver(t,e){e.preventDefault(),this._dragOver=t}_onDrop(t,e){if(e.preventDefault(),this._dragIdx===null||this._dragIdx===t){this._dragIdx=null;return}let i=[...this._config.entities],[s]=i.splice(this._dragIdx,1);i.splice(t,0,s),this._dragIdx=null,this._set("entities",i)}_renderActionField(t,e,i){let a=((this._config.entities||[])[t]||{})[e]||{type:"more_info"},n=a.type||"more_info",l=["toggle","turn_on","turn_off","more_info"].includes(n),c=n==="call_service";return o`
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
          <ha-entity-picker .hass=${this.hass} .value=${a.entity_id||""}
            label="Entità"
            @value-changed=${d=>this._updateEntityAction(t,e,"entity_id",d.detail.value)}>
          </ha-entity-picker>
        `:""}
        ${c?o`
          <ha-textfield label="Servizio" .value=${a.service||""}
            @change=${d=>this._updateEntityAction(t,e,"service",d.target.value)}>
          </ha-textfield>
        `:""}
        ${n==="navigate"?o`
          <ha-textfield label="Percorso" .value=${a.navigation_path||""}
            @change=${d=>this._updateEntityAction(t,e,"navigation_path",d.target.value)}>
          </ha-textfield>
        `:""}
        ${n==="url"?o`
          <ha-textfield label="URL" .value=${a.url_path||""}
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
          ${$i.map(e=>o`
            <button class="swatch ${t.color===e?"selected":""}"
              style="background:${jt[e].base}" title=${e}
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
                  ${ss.map(s=>o`
                    <option value=${s}>${rs[s]}</option>
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
    `}static get styles(){return b`
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
    `}};x("pastel-openings-card-editor",ze);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-openings-card",name:"Pastel Openings",description:"Card universale per porte, finestre, cancelli, basculanti \u2014 illustrazioni animate, filtri, ordinamento, azioni complete. Parte della suite Pastel.",preview:!0});var Ft={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},ki=Object.keys(Ft),H={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function bs(r){return Ft[r]||Ft.amber}function vs(r,t,e=50){let i=t?H.light:r.light,s=t?H.base:r.base,a=t?"#fef2f2":"#fffdf5",n=t?H.text:r.text,l=Math.round(e*1.36);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="24" height="48" rx="3" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <rect x="14" y="10" width="16" height="40" rx="1.5" fill="${a}" opacity="0.7"/>
      <circle cx="27" cy="30" r="2" fill="${n}"/>
    </svg>`}var Ee=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Porte e Finestre",subtitle:"Piano terra",icon:"mdi:home",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Porte e Finestre",subtitle:t.subtitle||"",icon:t.icon||"mdi:home",color:ki.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-doors-windows-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],a=s&&s.attributes.device_class;return a==="window"?e?"mdi:window-open-variant":"mdi:window-closed-variant":a==="garage_door"?e?"mdi:garage-open":"mdi:garage":e?"mdi:door-open":"mdi:door-closed"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=bs(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),s=i.filter(c=>this.hass.states[c].state==="on").length,a=i.length,n=a?Math.round(s/a*100):0,l=s>0;return o`
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
            ${S(vs(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?H.base:t.base}">
                ${s}<span class="count-total">/${a}</span>
              </div>
              <div class="count-label">${l?"aperti":"tutto chiuso"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?H.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((c,d)=>{let f=typeof c=="string"?c:c.entity,u=this.hass.states[f];if(!u)return o`<div class="row missing">Entità non trovata: ${f}</div>`;let p=u.state==="on",m=this._entityLabel(c),g=this._entityIcon(c,p);return o`
              <div
                class="row ${p?"alarm":""}"
                @click=${h=>this._showMoreInfo(f,h)}
              >
                <ha-icon icon=${g} style="color:${p?H.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${p?"row-label-alarm":"row-label-off"}">${m}</span>
                <span class="row-status ${p?"badge-alarm":""}" style="color:${p?H.base:"var(--secondary-text-color)"}">
                  ${p?"Aperto":"Chiuso"}
                </span>
              </div>
              ${d<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return b`
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
    `}};x("pastel-doors-windows-card",Ee);var Ae=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:home",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${ki.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Ft[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: una porta/finestra aperta è sempre evidenziata in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori porte/finestre",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return b`
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
    `}};x("pastel-doors-windows-card-editor",Ae);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-doors-windows-card",name:"Pastel Doors & Windows",description:"Card per sensori porte/finestre con stile pastello, conteggio aperti e popup dettagli al tap.",preview:!0});var Vt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Si=Object.keys(Vt);function ys(r){return Vt[r]||Vt.amber}function xs(r,t,e=50){let i=r.light,s=r.base,a="#ffffff",n=r.text,l=Math.round(e*1.36);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="20" r="13" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <circle cx="22" cy="20" r="6" fill="${a}" opacity="0.8"/>
      <circle cx="22" cy="20" r="2.5" fill="${n}"/>
      <path d="M14 42 Q22 34 30 42 L30 50 Q22 46 14 50 Z" fill="${i}" stroke="${s}" stroke-width="1.5"/>
    </svg>`}var Pe=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Movimento e Presenza",subtitle:"Piano terra",icon:"mdi:motion-sensor",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Movimento e Presenza",subtitle:t.subtitle||"",icon:t.icon||"mdi:motion-sensor",color:Si.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-motion-presence-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i];return(s&&s.attributes.device_class)==="occupancy"?e?"mdi:account":"mdi:account-outline":e?"mdi:motion-sensor":"mdi:motion-sensor-off"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=ys(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),s=i.filter(c=>this.hass.states[c].state==="on").length,a=i.length,n=a?Math.round(s/a*100):0,l=s>0;return o`
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
            ${S(xs(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${t.base}">
                ${s}<span class="count-total">/${a}</span>
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
          ${this.config.entities.map((c,d)=>{let f=typeof c=="string"?c:c.entity,u=this.hass.states[f];if(!u)return o`<div class="row missing">Entità non trovata: ${f}</div>`;let p=u.state==="on",m=this._entityLabel(c),g=this._entityIcon(c,p);return o`
              <div
                class="row ${p?"active":""}"
                @click=${h=>this._showMoreInfo(f,h)}
              >
                <ha-icon icon=${g} style="color:${p?t.text:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${p?"row-label-active":"row-label-off"}">${m}</span>
                <span class="row-status ${p?"badge-active":""}" style="color:${p?t.text:"var(--secondary-text-color)"}">
                  ${p?"Rilevato":"Libero"}
                </span>
              </div>
              ${d<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return b`
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
    `}};x("pastel-motion-presence-card",Pe);var Te=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:motion-sensor",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${Si.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Vt[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">A differenza delle card di sicurezza, qui lo stato "Rilevato" usa il colore scelto sopra (il movimento non è considerato un allarme).</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori di movimento/presenza",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return b`
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
    `}};x("pastel-motion-presence-card-editor",Te);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-motion-presence-card",name:"Pastel Motion & Presence",description:"Card per sensori di movimento/presenza con stile pastello, conteggio attivi e popup dettagli al tap.",preview:!0});var Bt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Ci=Object.keys(Bt),Y={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function _s(r){return Bt[r]||Bt.amber}function ws(r,t,e=50){let i=t?Y.light:r.light,s=t?Y.base:r.base,a=t?"#fef2f2":"#ffffff",n=t?Y.text:r.text,l=Math.round(e*1.2);return`
    <svg width="${e}" height="${l}" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4 C22 4 8 24 8 34 C8 42.5 14.3 49 22 49 C29.7 49 36 42.5 36 34 C36 24 22 4 22 4Z"
            fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <ellipse cx="18" cy="32" rx="5" ry="7" fill="${a}" opacity="0.6"/>
      <circle cx="22" cy="36" r="2.5" fill="${n}"/>
    </svg>`}var Ie=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Perdite Acqua",subtitle:"Zona Notte",icon:"mdi:water-alert",color:"blue",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Perdite Acqua",subtitle:t.subtitle||"",icon:t.icon||"mdi:water-alert",color:Ci.includes(t.color)?t.color:"blue",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-water-leak-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],a=s&&s.attributes.icon;return a||(e?"mdi:water-alert":"mdi:water-check")}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=_s(this.config.color),e=this._entityIds(),i=e.filter(d=>this.hass.states[d]),s=i.filter(d=>this.hass.states[d].state==="on").length,a=i.length,n=a?Math.round(s/a*100):0,l=s>0,c=e.some(d=>!this.hass.states[d]||["unknown","unavailable"].includes(this.hass.states[d].state));return o`
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
            ${S(ws(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?Y.base:t.base}">
                ${s}<span class="count-total">/${a}</span>
              </div>
              <div class="count-label">${l?"perdite rilevate":c?"dati mancanti":"tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?Y.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((d,f)=>{let u=typeof d=="string"?d:d.entity,p=this.hass.states[u];if(!p)return o`<div class="row missing">Entità non trovata: ${u}</div>`;let m=p.state==="on",g=this._entityLabel(d),h=this._entityIcon(d,m);return o`
              <div
                class="row ${m?"alarm":""}"
                @click=${y=>this._showMoreInfo(u,y)}
              >
                <ha-icon icon=${h} style="color:${m?Y.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${m?"row-label-alarm":"row-label-off"}">${g}</span>
                <span class="row-status ${m?"badge-alarm":""}" style="color:${m?Y.base:"var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(p.state)?"Non disponibile":m?"Perdita":"OK"}
                </span>
              </div>
              ${f<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return b`
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
    `}};x("pastel-water-leak-card",Ie);var Me=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:water-alert",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${Ci.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Bt[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: una perdita rilevata è sempre evidenziata in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori perdita acqua",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return b`
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
    `}};x("pastel-water-leak-card-editor",Me);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-water-leak-card",name:"Pastel Water Leak",description:"Card per sensori di perdita acqua con stile pastello, conteggio perdite e popup dettagli al tap.",preview:!0});var Ut={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},zi=Object.keys(Ut),K={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function $s(r){return Ut[r]||Ut.amber}function ks(r,t,e=50){let i=t?K.light:r.light,s=t?K.base:r.base,a=t?"#fef2f2":"#fffdf5",n=t?K.text:r.text,l=Math.round(e*1);return`
    <svg width="${e}" height="${l}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="22" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <circle cx="25" cy="25" r="14" fill="${a}" opacity="0.7"/>
      <circle cx="25" cy="25" r="4" fill="${n}"/>
      <path d="M25 10 L25 16 M40 25 L34 25 M25 40 L25 34 M10 25 L16 25" stroke="${s}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    </svg>`}var Ne=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Fumo e CO",subtitle:"Salotto + Quadro Ovest",icon:"mdi:smoke-detector",color:"purple",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Fumo e CO",subtitle:t.subtitle||"",icon:t.icon||"mdi:smoke-detector",color:zi.includes(t.color)?t.color:"purple",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-smoke-co-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],a=s&&s.attributes.device_class;return a==="carbon_monoxide"||a==="co"?"mdi:molecule-co2":e?"mdi:smoke-detector-variant-alert":"mdi:smoke-detector-variant"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=$s(this.config.color),e=this._entityIds(),i=e.filter(d=>this.hass.states[d]),s=i.filter(d=>this.hass.states[d].state==="on").length,a=i.length,n=a?Math.round(s/a*100):0,l=s>0,c=e.some(d=>!this.hass.states[d]||["unknown","unavailable"].includes(this.hass.states[d].state));return o`
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
            ${S(ks(t,l,50))}
            <div class="count-block">
              <div class="count" style="color:${l?K.base:t.base}">
                ${s}<span class="count-total">/${a}</span>
              </div>
              <div class="count-label">${l?"in allarme":c?"dati mancanti":"tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?o`
            <div class="progress-track">
              <div class="progress-fill" style="width:${n}%; background:${l?K.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((d,f)=>{let u=typeof d=="string"?d:d.entity,p=this.hass.states[u];if(!p)return o`<div class="row missing">Entità non trovata: ${u}</div>`;let m=p.state==="on",g=this._entityLabel(d),h=this._entityIcon(d,m);return o`
              <div
                class="row ${m?"alarm":""}"
                @click=${y=>this._showMoreInfo(u,y)}
              >
                <ha-icon icon=${h} style="color:${m?K.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${m?"row-label-alarm":"row-label-off"}">${g}</span>
                <span class="row-status ${m?"badge-alarm":""}" style="color:${m?K.base:"var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(p.state)?"Non disponibile":m?"Allarme":"OK"}
                </span>
              </div>
              ${f<this.config.entities.length-1?o`<div class="divider"></div>`:""}
            `})}
        </div>

      </ha-card>
    `}static get styles(){return b`
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
    `}};x("pastel-smoke-co-card",Ne);var Le=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:smoke-detector",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return o`
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
            ${zi.map(i=>o`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Ut[i].base}"
                title=${i}
                @click=${()=>this._valueChanged("color",i)}
              ></button>
            `)}
          </div>
          <div class="hint">Nota: un sensore in allarme è sempre evidenziato in rosso, indipendentemente dal colore scelto qui.</div>
        </div>
      </div>
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo (es. nome zona/piano)",icon:"Icona",entities:"Sensori fumo/CO",show_progress_bar:"Mostra barra di progresso"}[t]||t}static get styles(){return b`
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
    `}};x("pastel-smoke-co-card-editor",Le);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-smoke-co-card",name:"Pastel Smoke & CO",description:"Card per sensori fumo/CO con stile pastello, conteggio allarmi e popup dettagli al tap.",preview:!0});var Ei=[["mdi:thermometer","Termometro"],["mdi:home","Casa"],["mdi:sofa","Soggiorno"],["mdi:bed-double","Camera"],["mdi:door","Ingresso"],["mdi:shower","Bagno"],["mdi:desk","Studio"],["mdi:flower","Esterno"]],et=r=>["\xB0C","\xB0F","K"].includes(r)?r:null;function Ss(r,t,e){if(r===null||!t||!e)return null;let i=t==="\xB0F"?(r-32)*5/9:t==="K"?r-273.15:r;return e==="\xB0F"?i*9/5+32:e==="K"?i+273.15:i}function Ai(r){return!!r?.entity_id?.startsWith("sensor.")&&r.attributes?.device_class==="humidity"}function Pi(r,t){let e=et(r?.config?.unit_system?.temperature)||"\xB0C",i=et(t.unit)||et((t.rooms||[]).map(c=>r?.states?.[c.temp_entity]?.attributes?.unit_of_measurement).find(et))||e,s=(t.rooms||[]).map(c=>{let d=r?.states?.[c.temp_entity],f=d?.attributes?.unit_of_measurement,u=Ss(E(r,c.temp_entity),f?et(f):i,i),p=E(r,c.hum_entity),m=p!==null&&p>=0&&p<=100?p:null;return{...c,name:c.name||d?.attributes?.friendly_name||"Ambiente",value:u,humidity:m,sourceUnit:f||i,alert:u!==null&&j(t.alert_temp)!==null&&u>=Number(t.alert_temp),humidityAlert:m!==null&&j(t.alert_hum)!==null&&m>=Number(t.alert_hum)}}),a=s.map(c=>c.value).filter(c=>c!==null),n=s.map(c=>c.humidity).filter(c=>c!==null),l=a.length?a.reduce((c,d)=>c+d,0)/a.length:null;return{unit:i,rooms:s,average:l,humidity:n.length?n.reduce((c,d)=>c+d,0)/n.length:null,min:a.length?Math.min(...a):null,max:a.length?Math.max(...a):null,valid:a.length,total:s.length,alert:s.some(c=>c.alert||c.humidityAlert)}}function j(r){return r==null||String(r).trim()===""?null:Number(r)}function Ti(r,t){let e=j(t.temp_min),i=j(t.temp_max);return r!==null&&Number.isFinite(e)&&Number.isFinite(i)&&i>e?Math.min(100,Math.max(0,(r-e)/(i-e)*100)):null}function Ii(r){if(r.rooms!==void 0&&!Array.isArray(r.rooms))throw Error("rooms deve essere una lista di ambienti.");for(let t of r.rooms||[]){if(!t||typeof t!="object"||Array.isArray(t))throw Error("Ambiente non valido.");for(let e of["temp_entity","hum_entity"])if(t[e]!==void 0&&typeof t[e]!="string")throw Error("Scegli un sensore valido.")}for(let t of["temp_min","temp_max","alert_temp","alert_hum"])if(j(r[t])!==null&&!Number.isFinite(j(r[t])))throw Error("Inserisci valori numerici validi.");if(j(r.temp_min)!==null&&j(r.temp_max)!==null&&Number(r.temp_max)<=Number(r.temp_min))throw Error("Il massimo della scala deve superare il minimo.");if(r.unit&&!et(r.unit))throw Error("Scegli \xB0C, \xB0F oppure K.")}async function Mi(r,t){if(!r?.callApi||!t)return null;try{let e=new Date(Date.now()-72e5).toISOString(),s=((await r.callApi("GET",`history/period/${e}?filter_entity_id=${encodeURIComponent(t)}&minimal_response=true&no_attributes=true`))?.[0]||[]).filter(a=>a.state!==null&&String(a.state??"").trim()!==""&&Number.isFinite(Number(a.state)));return s.length<2?null:Number(s[s.length-1].state)-Number(s[0].state)}catch{return null}}var qt=class extends ${static get properties(){return{...super.properties,_trends:{}}}static getConfigElement(){return document.createElement("pastel-temp-card-editor")}static getStubConfig(){return{title:"Temperature",subtitle:"Comfort degli ambienti",color:"blue",show_trend:!1,rooms:[{name:"Soggiorno",icon:"mdi:sofa",temp_entity:"",hum_entity:""}]}}static get styles(){return[super.styles,b`
  .hero .reading{font-size:38px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.reading small{font-size:17px;margin-left:4px;letter-spacing:0}.hero .right{flex:1}.hero .caption{line-height:1.6}.humidity-summary{display:inline-flex;align-items:center;gap:5px;font-size:12px;margin-top:10px}.humidity-summary ha-icon{--mdc-icon-size:16px}.room{padding:16px 0;border-top:1px solid var(--divider-color,#e8ebed)}.room:last-of-type{padding-bottom:0}.room-top{display:flex;align-items:center;gap:12px}.room-icon{width:38px;height:38px;border-radius:12px;background:var(--p-tint);color:var(--p-accent);display:grid;place-items:center;flex-shrink:0}.room-icon ha-icon{--mdc-icon-size:21px}.room-info{flex:1;min-width:0}.room-name{display:block;border:0;padding:0;background:none;color:var(--p-ink);text-align:left;min-height:44px;width:100%;overflow-wrap:anywhere}.room-value{font-size:22px;font-weight:550;font-variant-numeric:tabular-nums;color:var(--p-accent);white-space:nowrap}.room-value small{font-size:12px;margin-left:3px}.room-bottom{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:6px 0 0 50px}.humidity{padding:5px 9px;min-height:32px;display:inline-flex;align-items:center;gap:4px;font-size:11px}.humidity ha-icon{--mdc-icon-size:14px}.room-status,.trend{font-size:11px;color:var(--p-muted);line-height:1.7}.alert{color:var(--error-color,#963f3b)}.scale{height:5px;background:var(--p-tint);border-radius:4px;margin:10px 0 0 50px;overflow:hidden}.scale span{display:block;height:100%;background:var(--p-accent);border-radius:4px}.metrics{margin-bottom:16px}.metric small{display:block;margin-bottom:5px}.metric .unit{margin-left:3px}.foot{line-height:1.7}.pill{flex-shrink:0}
  .rooms{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.room{border:1px solid var(--divider-color,#e8ebed);border-radius:16px;padding:14px;min-width:0}.room:last-of-type{padding-bottom:14px}.room-top{flex-wrap:wrap;gap:10px}.room-info{flex-basis:calc(100% - 48px)}.room-name{font-size:13px;line-height:1.5}.room-value{width:100%;font-size:26px;white-space:normal;overflow-wrap:anywhere}.room-bottom{margin:10px 0 0}.scale{margin:10px 0 0}.humidity{min-height:44px}
  @media(max-width:340px){ha-card{padding:16px}.hero{padding:16px}.hero svg{width:76px;height:76px}.hero .reading{font-size:30px}.room-value{font-size:19px}header{gap:9px}.pill{font-size:10px;padding:5px 8px}}
 `]}setConfig(t){Ii(t),this._trendEpoch=(this._trendEpoch||0)+1,this._lastFetch=0,this._fetching=!1,this._trends={},super.setConfig(t)}appearance(t){let e={indigo:"lavender",cyan:"blue"}[t.color]||t.color;return[this.palette(e||"blue"),...Object.entries({background_color:"--p-surface",tint_color:"--p-tint",accent_color:"--p-accent",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([i])=>t[i]).map(([i,s])=>`${s}:${t[i]}`)].join(";")}updated(t){(t.has("hass")||t.has("config"))&&this.refreshTrends()}disconnectedCallback(){this._trendEpoch=(this._trendEpoch||0)+1,this._fetching=!1,this._lastFetch=0,this._trends={},super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.refreshTrends()}async refreshTrends(){if(!this.isConnected||!this.hass||!this.config||this.config.show_trend===!1||this._fetching||Date.now()-(this._lastFetch||0)<3e5)return;this._fetching=!0;let t=this._trendEpoch,e=this.hass;this._lastFetch=Date.now();let i=[...new Set((this.config.rooms||[]).map(a=>a.temp_entity).filter(Boolean))],s=await Promise.all(i.map(async a=>[a,await Mi(e,a)]));t===this._trendEpoch&&(this._fetching=!1,this._trends=Object.fromEntries(s))}number(t,e=1){return t===null?"\u2014":new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:e}).format(t)}trend(t,e){let i=this._trends?.[t.temp_entity];if(i==null)return"";let s=i*(t.sourceUnit==="\xB0F"?5/9:1)*(e==="\xB0F"?9/5:1);return Math.abs(s)<.1?"Stabile \xB7 2 h":`${s>0?"\u2191 +":"\u2193 "}${this.number(s)}${e} \xB7 2 h`}render(){if(!this.config||!this.hass)return o``;let t=this.config,e=Pi(this.hass,t),i=e.valid<e.total,s=e.total?e.valid?e.alert?"Soglia superata":i?"Dati parziali":`${e.valid} ${e.valid===1?"ambiente":"ambienti"}`:"Non disponibile":"Da configurare";return o`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:thermometer"}></ha-icon></div><div class="heading"><h2>${t.title||"Temperature"}</h2><div class="subtitle">${t.subtitle??"Comfort degli ambienti"}</div></div><span class=${e.alert?"pill alert":"pill"} role="status">${s}</span></header>
 <div class="hero">${O("temperature")}<div class="right"><div class="reading" aria-live="polite">${this.number(e.average)}<small>${e.unit}</small></div><div class="caption">${t.summary_label||(e.total===1?"Temperatura ambiente":"Temperatura media")}</div>${e.rooms.some(a=>a.hum_entity)?o`<div class="humidity-summary"><ha-icon icon="mdi:water-percent"></ha-icon>${this.number(e.humidity,0)}% umidità</div>`:""}</div></div>
 ${e.total>1&&t.show_extremes!==!1?o`<div class="metrics"><div class="metric"><small>Minima rilevata</small><strong>${this.number(e.min)}<span class="unit">${e.unit}</span></strong></div><div class="metric"><small>Massima rilevata</small><strong>${this.number(e.max)}<span class="unit">${e.unit}</span></strong></div></div>`:""}
 <div class="rooms" aria-live="polite">${e.rooms.map(a=>{let n=Ti(a.value,t),l=t.show_trend!==!1&&a.value!==null?this.trend(a,e.unit):"";return o`<section class="room" style=${a.color?this.palette(a.color):""}><div class="room-top"><div class="room-icon"><ha-icon icon=${a.icon||"mdi:thermometer"}></ha-icon></div><div class="room-info"><button class="room-name" aria-label=${`Dettagli temperatura ${a.name}`} ?disabled=${!a.temp_entity} @click=${()=>this.info(a.temp_entity)}>${a.name}</button></div><div class=${a.alert?"room-value alert":"room-value"}>${this.number(a.value)}<small>${e.unit}</small></div></div><div class="room-bottom">${a.hum_entity?o`<button class=${a.humidityAlert?"humidity alert":"humidity"} aria-label=${`Dettagli umidit\xE0 ${a.name}`} @click=${()=>this.info(a.hum_entity)}><ha-icon icon="mdi:water-percent"></ha-icon>${this.number(a.humidity,0)}%</button>`:""}${a.value===null?o`<span class="room-status">${a.temp_entity?"Temperatura non disponibile":"Sensore da associare"}</span>`:""}${a.hum_entity&&a.humidity===null?o`<span class="room-status">Umidità non disponibile</span>`:""}${a.alert||a.humidityAlert?o`<span class="room-status alert">Soglia superata</span>`:""}${l?o`<span class="trend">${l}</span>`:""}</div>${n!==null?o`<div class="scale" role="meter" aria-label=${`Temperatura ${a.name}`} aria-valuemin=${t.temp_min} aria-valuemax=${t.temp_max} aria-valuenow=${Math.max(Number(t.temp_min),Math.min(Number(t.temp_max),a.value))} aria-valuetext=${`${this.number(a.value)} ${e.unit}`}><span style=${`width:${n}%`}></span></div>`:""}</section>`})}</div>
 ${i&&e.valid?o`<div class="foot">Media su ${e.valid} di ${e.total} ambienti: i sensori non disponibili sono esclusi.</div>`:""}${e.total?"":o`<div class="empty">Aggiungi gli ambienti e scegli i sensori nell’editor.</div>`}</ha-card>`}};var Wt=class extends D{paletteSelect(t,e,i,s=!1){let a={green:"mint",purple:"lavender",orange:"peach",indigo:"lavender",cyan:"blue"}[e]||e;return super.paletteSelect(t,a,i,s)}updateRoom(t,e){this.emit({rooms:(this.config.rooms||[]).map((i,s)=>t===s?{...i,...e}:i)})}moveRoom(t,e){let i=[...this.config.rooms||[]],s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this.emit({rooms:i}))}numberField(t,e){return o`<label>${t}<input aria-label=${t} type="number" step="any" .value=${String(this.config[e]??"")} @change=${i=>this.emit({[e]:i.target.value===""?void 0:Number(i.target.value)})}></label>`}check(t,e,i=!0){return o`<label class="check"><input type="checkbox" aria-label=${t} .checked=${this.config[e]??i} @change=${s=>this.emit({[e]:s.target.checked})}>${t}</label>`}render(){if(!this.hass||!this.config)return o``;let t=this.config;return o`<div class="editor" style=${this.palette(t.color||"blue")}>
 <div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>
 ${this.paletteSelect("Colore card",t.color||"blue",e=>this.emit({color:e}))}
 <h3>Ambienti (${t.rooms?.length||0})</h3><p class="hint">Aggiungi un riquadro per ogni ambiente. Scegli il sensore di temperatura; l’umidità è facoltativa.</p>
 ${(t.rooms||[]).map((e,i)=>o`<section class="button-editor" aria-label=${`Configura ambiente ${i+1}`}><div class="button-title"><ha-icon icon=${e.icon||"mdi:thermometer"}></ha-icon>${e.name||`Ambiente ${i+1}`}</div>
 ${this.text("Nome ambiente",e.name,s=>this.updateRoom(i,{name:s}))}
 ${this.entity("Sensore temperatura",e.temp_entity,s=>this.updateRoom(i,{temp_entity:s}),Pt,"Cerca un sensore di temperatura")}
 ${this.entity("Sensore umidit\xE0 (facoltativo)",e.hum_entity,s=>this.updateRoom(i,{hum_entity:s}),Ai,"Cerca un sensore di umidit\xE0")}
 <details><summary>Icona ambiente</summary><div class="icon-options">${Ei.map(([s,a])=>o`<button aria-label=${`Icona ${a}`} aria-pressed=${String((e.icon||"mdi:thermometer")===s)} @click=${()=>this.updateRoom(i,{icon:s})}><ha-icon icon=${s}></ha-icon><span>${a}</span></button>`)}</div>${this.text("Icona personalizzata (mdi:...)",e.icon,s=>this.updateRoom(i,{icon:s}))}</details>
 ${this.paletteSelect("Colore ambiente",e.color||"",s=>this.updateRoom(i,{color:s}),!0)}
 <div class="tools"><button aria-label="Sposta ambiente prima" ?disabled=${i===0} @click=${()=>this.moveRoom(i,-1)}>↑</button><button aria-label="Sposta ambiente dopo" ?disabled=${i===(t.rooms||[]).length-1} @click=${()=>this.moveRoom(i,1)}>↓</button><button @click=${()=>this.emit({rooms:t.rooms.filter((s,a)=>i!==a)})}>Rimuovi ambiente</button></div></section>`)}
 <button @click=${()=>this.emit({rooms:[...t.rooms||[],{name:"Nuovo ambiente",icon:"mdi:thermometer",temp_entity:"",hum_entity:""}]})}>Aggiungi ambiente</button>
 <details><summary>Riepilogo e altre opzioni</summary>${this.text("Etichetta riepilogo",t.summary_label,e=>this.emit({summary_label:e}))}${this.check("Mostra minima e massima","show_extremes")}${this.check("Mostra andamento delle ultime 2 ore","show_trend")}<p class="hint">Minima e massima sono le letture attuali degli ambienti, non gli estremi dello storico. L’andamento richiede lo storico Home Assistant.</p>
 <label>Unità temperatura<select aria-label="Unità temperatura" @change=${e=>this.emit({unit:e.target.value})}>${[["","Automatica dal sensore"],["\xB0C","\xB0C"],["\xB0F","\xB0F"],["K","K"]].map(([e,i])=>o`<option value=${e} ?selected=${(t.unit||"")===e}>${i}</option>`)}</select></label>
 ${this.text("Icona intestazione",t.icon,e=>this.emit({icon:e}))}
 <details><summary>Scale e soglie facoltative</summary><p class="hint">Lascia vuoti i campi per nascondere le barre e disattivare le soglie. I valori sono nell’unità visualizzata. Le barre indicano la lettura e non comandano dispositivi.</p><div class="pair">${this.numberField("Minimo scala","temp_min")}${this.numberField("Massimo scala","temp_max")}</div><div class="pair">${this.numberField("Avviso temperatura da","alert_temp")}${this.numberField("Avviso umidit\xE0 da (%)","alert_hum")}</div></details>
 <details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e valori"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],s=>this.emit({[e]:s})))}</details></details>
 </div>`}};var Ht={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Li=Object.keys(Ht);function Cs(r){return Ht[r]||Ht.blue}function Ni(r){if(r==null||r==="unknown"||r==="unavailable")return!1;let t=Number(r);return!Number.isNaN(t)}function zs(r,t){let e=r.bg,i=r.light,s=r.light,a=r.base,n=t?.75:.35,l=t?"1.1s":"2.6s",c=t?"0.95s":"2.3s",d=t?"1.3s":"2.9s";return`
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

      <circle cx="50" cy="115" r="2" fill="${a}" opacity="${n}">
        <animate attributeName="cy" values="118;100;118" dur="${l}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${n};0;${n}" dur="${l}" repeatCount="indefinite"/>
      </circle>
      <circle cx="75" cy="120" r="1.6" fill="${a}" opacity="${n}">
        <animate attributeName="cy" values="122;104;122" dur="${c}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${n};0;${n}" dur="${c}" repeatCount="indefinite"/>
      </circle>
      <circle cx="95" cy="116" r="1.8" fill="${a}" opacity="${n}">
        <animate attributeName="cy" values="119;98;119" dur="${d}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${n};0;${n}" dur="${d}" repeatCount="indefinite"/>
      </circle>

      <circle cx="55" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <circle cx="68" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <circle cx="81" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
    </svg>`}var Re=class extends v{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Lavastoviglie",subtitle:"Lavastoviglie",icon:"mdi:dishwasher",color:"blue",detection_mode:"power",power_entity:"",power_threshold:5,state_entity:""}}setConfig(t){if(!t)throw new Error("Configurazione non valida");let e=t.detection_mode==="boolean"?"boolean":"power";if(e==="power"&&!t.power_entity)throw new Error("Devi specificare power_entity quando detection_mode \xE8 'power'");if(e==="boolean"&&!t.state_entity)throw new Error("Devi specificare state_entity quando detection_mode \xE8 'boolean'");this.config={title:t.title||"Lavastoviglie",subtitle:t.subtitle||"",icon:t.icon||"mdi:dishwasher",color:Li.includes(t.color)?t.color:"blue",detection_mode:e,power_entity:t.power_entity||"",power_threshold:typeof t.power_threshold=="number"?t.power_threshold:5,state_entity:t.state_entity||""}}getCardSize(){return 4}static getConfigElement(){return document.createElement("pastel-dishwasher-card-editor")}_isOn(){if(!this.hass)return!1;if(this.config.detection_mode==="power"){let e=this.hass.states[this.config.power_entity];if(!e)return!1;let i=e.state;return Ni(i)?Number(i)>this.config.power_threshold:!1}let t=this.hass.states[this.config.state_entity];return t?t.state==="on":!1}_powerWatts(){if(this.config.detection_mode!=="power")return null;let t=this.hass.states[this.config.power_entity];if(!t)return null;let e=t.state;return Ni(e)?Number(e):null}_showMoreInfo(t,e){if(e&&e.stopPropagation(),!t)return;let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return o``;let t=Cs(this.config.color),e=this._isOn(),i=this._powerWatts(),s=this.config.detection_mode==="power"?this.config.power_entity:this.config.state_entity;return o`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-text:${t.text};">

        <div class="header">
          <div class="header-left">
            <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
            <div class="header-text">
              <div class="title">${this.config.title}</div>
              <div class="subtitle">${this.config.subtitle}</div>
            </div>
          </div>
          <span class="badge" @click=${a=>this._showMoreInfo(s,a)}>
            <span class="badge-dot"></span>
            ${e?"Accesa":"Spenta"}
          </span>
        </div>

        <div class="illustration" @click=${a=>this._showMoreInfo(s,a)}>
          ${S(zs(t,e))}
        </div>

        ${this.config.detection_mode==="power"&&i!==null?o`
          <div class="power-row">
            <ha-icon icon="mdi:flash" style="color:${t.text}"></ha-icon>
            <span>${i.toFixed(0)} W</span>
          </div>
        `:""}

      </ha-card>
    `}static get styles(){return b`
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
    `}};x("pastel-dishwasher-card",Re);var Oe=class extends v{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return o``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:dishwasher"},i=this._config.detection_mode==="boolean"?"boolean":"power";return o`
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
            ${Li.map(s=>o`
              <button
                class="swatch ${this._config.color===s?"selected":""}"
                style="background:${Ht[s].base}"
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
    `}_labelFor(t){return{title:"Titolo",subtitle:"Sottotitolo",icon:"Icona"}[t]||t}static get styles(){return b`
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
    `}};x("pastel-dishwasher-card-editor",Oe);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-dishwasher-card",name:"Pastel Dishwasher",description:"Card lavastoviglie con illustrazione animata, rilevamento stato da consumo o booleano, colore personalizzabile.",preview:!0});var Ri={amber:{base:"#f59e0b",bg:"#fef3c7"},blue:{base:"#3b82f6",bg:"#dbeafe"},green:{base:"#10b981",bg:"#d1fae5"},pink:{base:"#ec4899",bg:"#fce7f3"},purple:{base:"#a855f7",bg:"#f3e8ff"},red:{base:"#ef4444",bg:"#fee2e2"},teal:{base:"#14b8a6",bg:"#ccfbf1"},orange:{base:"#f97316",bg:"#ffedd5"}},Es={mowing:"In funzione",docked:"Alla base",paused:"In pausa",returning:"Ritorno alla base",error:"Errore",unavailable:"Non disponibile",unknown:"Sconosciuto"};function it(r){return r?["unknown","unavailable","",null,void 0].includes(r.state):!0}var De=class extends v{static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.mower_entity)throw new Error("Devi specificare mower_entity");this.config={title:"Robot tagliaerba",subtitle:"Robot tagliaerba",icon:"mdi:robot-mower",color:"green",image_url:new URL("./lawn-mower.png",import.meta.url).href,...t}}getCardSize(){return 4}_fire(t){let e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_callService(t,e){!this.hass||!this.config.mower_entity||this.hass.callService(t,e,{entity_id:this.config.mower_entity})}render(){if(!this.hass||!this.config)return o``;let t=this.hass.states[this.config.mower_entity],e=t?t.state:"unavailable",i=it(t),s=Ri[this.config.color]||Ri.green,a=Es[e]||e,n=this.config.battery_entity?this.hass.states[this.config.battery_entity]:null,l=this.config.area_entity?this.hass.states[this.config.area_entity]:null,c=this.config.time_remaining_entity?this.hass.states[this.config.time_remaining_entity]:null,d=this.config.blade_entity?this.hass.states[this.config.blade_entity]:null,f=this.config.zone_entity?this.hass.states[this.config.zone_entity]:null,u=n&&!it(n)?n.state:null,p=l&&!it(l)?l.state:null,m=c&&!it(c)?`${Math.floor(c.state/60)}:${String(c.state%60).padStart(2,"0")}`:null,g=d&&!it(d)?d.state:null,h=f&&!it(f)?f.state:null,y=h&&e==="mowing",_=!i&&e!=="mowing",k=!i&&e==="mowing",P=!i&&e!=="docked"&&e!=="returning";return o`
      <ha-card style="--c-base:${s.base}; --c-bg:${s.bg};">
        <div class="header" @click=${()=>this._fire(this.config.mower_entity)}>
          <img class="icon-img" src="${this.config.image_url}" @error=${Oi=>{Oi.target.style.display="none"}} />
          <div class="titles">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
          <div class="badge">
            <span class="dot"></span>${a}
          </div>
        </div>

        ${y?o`<div class="zone-chip" @click=${()=>this._fire(this.config.zone_entity)}>
              <ha-icon icon="mdi:map-marker"></ha-icon> Zona: ${h}
            </div>`:""}

        <div class="stats">
          ${u!==null?o`<div class="stat" @click=${()=>this._fire(this.config.battery_entity)}>
                <div class="stat-label">Batteria</div>
                <div class="stat-value">${u}%</div>
              </div>`:""}
          ${p!==null?o`<div class="stat" @click=${()=>this._fire(this.config.area_entity)}>
                <div class="stat-label">Area</div>
                <div class="stat-value">${p} m²</div>
              </div>`:""}
          ${m!==null?o`<div class="stat" @click=${()=>this._fire(this.config.time_remaining_entity)}>
                <div class="stat-label">Tempo</div>
                <div class="stat-value">${m}</div>
              </div>`:""}
          ${g!==null?o`<div class="stat" @click=${()=>this._fire(this.config.blade_entity)}>
                <div class="stat-label">Lame</div>
                <div class="stat-value">${g}</div>
              </div>`:""}
        </div>

        <div class="actions">
          <button class="btn" ?disabled=${!_} @click=${()=>this._callService("lawn_mower","start_mowing")}>
            <ha-icon icon="mdi:play"></ha-icon> Avvia
          </button>
          <button class="btn" ?disabled=${!k} @click=${()=>this._callService("lawn_mower","pause")}>
            <ha-icon icon="mdi:pause"></ha-icon> Pausa
          </button>
          <button class="btn" ?disabled=${!P} @click=${()=>this._callService("lawn_mower","dock")}>
            <ha-icon icon="mdi:home-import-outline"></ha-icon> Ricarica
          </button>
        </div>
      </ha-card>
    `}static get styles(){return b`
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
    `}static getConfigElement(){return document.createElement("pastel-lawn-mower-card-editor")}static getStubConfig(){return{mower_entity:""}}},je=class extends v{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){let e=t.target,i=e.configValue;if(!i)return;let s=t.detail&&t.detail.value!==void 0?t.detail.value:e.value;this._config={...this._config,[i]:s};let a=new CustomEvent("config-changed",{detail:{config:this._config}});this.dispatchEvent(a)}_entityPicker(t,e,i=!1){return o`
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
    `}static get styles(){return b`
      .form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px;
      }
    `}};x("pastel-lawn-mower-card",De);x("pastel-lawn-mower-card-editor",je);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-lawn-mower-card",name:"Pastel Lawn Mower",description:"Card pastello per robot tagliaerba con controlli, stato lame e zona corrente."});for(let[r,t]of Object.entries({"pastel-appliance-card":ut,"pastel-appliance-card-editor":mt,"pastel-robot-card":Ct,"pastel-robot-card-editor":ht}))customElements.get(r)?console.warn(`Pastel UI: ${r} gi\xE0 caricato; rimuovi la vecchia risorsa.`):customElements.define(r,t);for(let[r,t]of[["pastel-temp-card",qt],["pastel-temp-card-editor",Wt],["pastel-stove-card",Et],["pastel-stove-card-editor",At],["pastel-script-climate-card",Tt],["pastel-script-climate-card-editor",D],["pastel-alarm-card",It],["pastel-alarm-card-editor",Lt],["pastel-security-card",Mt],["pastel-security-card-editor",Rt]])customElements.get(r)||customElements.define(r,t);Ve();console.info("Pastel UI 0.1.0-beta.10");
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
