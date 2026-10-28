var ls=Object.defineProperty;var cs=(a,t,e)=>t in a?ls(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var si=(a,t,e)=>cs(a,typeof t!="symbol"?t+"":t,e);var te=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,ee=(a,t,e=null,i=null)=>{for(;t!==e;){let s=t.nextSibling;a.insertBefore(t,i),t=s}},q=(a,t,e=null)=>{for(;t!==e;){let i=t.nextSibling;a.removeChild(t),t=i}};var P=`{{lit-${String(Math.random()).slice(2)}}}`,ie=`<!--${P}-->`,ai=new RegExp(`${P}|${ie}`),J="$lit$",H=class{constructor(t,e){this.parts=[],this.element=e;let i=[],s=[],r=document.createTreeWalker(e.content,133,null,!1),o=0,n=-1,c=0,{strings:d,values:{length:h}}=t;for(;c<h;){let p=r.nextNode();if(p===null){r.currentNode=s.pop();continue}if(n++,p.nodeType===1){if(p.hasAttributes()){let u=p.attributes,{length:f}=u,g=0;for(let m=0;m<f;m++)ri(u[m].name,J)&&g++;for(;g-- >0;){let m=d[c],v=yt.exec(m)[2],_=v.toLowerCase()+J,w=p.getAttribute(_);p.removeAttribute(_);let $=w.split(ai);this.parts.push({type:"attribute",index:n,name:v,strings:$}),c+=$.length-1}}p.tagName==="TEMPLATE"&&(s.push(p),r.currentNode=p.content)}else if(p.nodeType===3){let u=p.data;if(u.indexOf(P)>=0){let f=p.parentNode,g=u.split(ai),m=g.length-1;for(let v=0;v<m;v++){let _,w=g[v];if(w==="")_=N();else{let $=yt.exec(w);$!==null&&ri($[2],J)&&(w=w.slice(0,$.index)+$[1]+$[2].slice(0,-J.length)+$[3]),_=document.createTextNode(w)}f.insertBefore(_,p),this.parts.push({type:"node",index:++n})}g[m]===""?(f.insertBefore(N(),p),i.push(p)):p.data=g[m],c+=m}}else if(p.nodeType===8)if(p.data===P){let u=p.parentNode;(p.previousSibling===null||n===o)&&(n++,u.insertBefore(N(),p)),o=n,this.parts.push({type:"node",index:n}),p.nextSibling===null?p.data="":(i.push(p),n--),c++}else{let u=-1;for(;(u=p.data.indexOf(P,u+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(let p of i)p.parentNode.removeChild(p)}},ri=(a,t)=>{let e=a.length-t.length;return e>=0&&a.slice(e)===t},ot=a=>a.index!==-1,N=()=>document.createComment(""),yt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var se=133;function ae(a,t){let{element:{content:e},parts:i}=a,s=document.createTreeWalker(e,se,null,!1),r=nt(i),o=i[r],n=-1,c=0,d=[],h=null;for(;s.nextNode();){n++;let p=s.currentNode;for(p.previousSibling===h&&(h=null),t.has(p)&&(d.push(p),h===null&&(h=p)),h!==null&&c++;o!==void 0&&o.index===n;)o.index=h!==null?-1:o.index-c,r=nt(i,r),o=i[r]}d.forEach(p=>p.parentNode.removeChild(p))}var ds=a=>{let t=a.nodeType===11?0:1,e=document.createTreeWalker(a,se,null,!1);for(;e.nextNode();)t++;return t},nt=(a,t=-1)=>{for(let e=t+1;e<a.length;e++){let i=a[e];if(ot(i))return e}return-1};function oi(a,t,e=null){let{element:{content:i},parts:s}=a;if(e==null){i.appendChild(t);return}let r=document.createTreeWalker(i,se,null,!1),o=nt(s),n=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===e&&(n=ds(t),e.parentNode.insertBefore(t,e));o!==-1&&s[o].index===c;){if(n>0){for(;o!==-1;)s[o].index+=n,o=nt(s,o);return}o=nt(s,o)}}var ni=new WeakMap,re=a=>((...t)=>{let e=a(...t);return ni.set(e,!0),e}),U=a=>typeof a=="function"&&ni.has(a);var A={},_t={};var j=class{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(let i of this.__parts)i!==void 0&&i.setValue(t[e]),e++;for(let i of this.__parts)i!==void 0&&i.commit()}_clone(){let t=te?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1),r=0,o=0,n,c=s.nextNode();for(;r<i.length;){if(n=i[r],!ot(n)){this.__parts.push(void 0),r++;continue}for(;o<n.index;)o++,c.nodeName==="TEMPLATE"&&(e.push(c),s.currentNode=c.content),(c=s.nextNode())===null&&(s.currentNode=e.pop(),c=s.nextNode());if(n.type==="node"){let d=this.processor.handleTextExpression(this.options);d.insertAfterNode(c.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));r++}return te&&(document.adoptNode(t),customElements.upgrade(t)),t}};var li=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:a=>a}),ps=` ${P} `,I=class{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){let t=this.strings.length-1,e="",i=!1;for(let s=0;s<t;s++){let r=this.strings[s],o=r.lastIndexOf("<!--");i=(o>-1||i)&&r.indexOf("-->",o+1)===-1;let n=yt.exec(r);n===null?e+=r+(i?ps:ie):e+=r.substr(0,n.index)+n[1]+n[2]+J+n[3]+P}return e+=this.strings[t],e}getTemplateElement(){let t=document.createElement("template"),e=this.getHTML();return li!==void 0&&(e=li.createHTML(e)),t.innerHTML=e,t}},tt=class extends I{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){let t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),ee(e,i.firstChild),t}};var it=a=>a===null||!(typeof a=="object"||typeof a=="function"),wt=a=>Array.isArray(a)||!!(a&&a[Symbol.iterator]),et=class{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new lt(this)}_getValue(){let t=this.strings,e=t.length-1,i=this.parts;if(e===1&&t[0]===""&&t[1]===""){let r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!wt(r))return r}let s="";for(let r=0;r<e;r++){s+=t[r];let o=i[r];if(o!==void 0){let n=o.value;if(it(n)||!wt(n))s+=typeof n=="string"?n:String(n);else for(let c of n)s+=typeof c=="string"?c:String(c)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},lt=class{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==A&&(!it(t)||t!==this.value)&&(this.value=t,U(t)||(this.committer.dirty=!0))}commit(){for(;U(this.value);){let t=this.value;this.value=A,t(this)}this.value!==A&&this.committer.commit()}},O=class a{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(N()),this.endNode=t.appendChild(N())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=N()),t.__insert(this.endNode=N())}insertAfterPart(t){t.__insert(this.startNode=N()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;U(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=A,e(this)}let t=this.__pendingValue;t!==A&&(it(t)?t!==this.value&&this.__commitText(t):t instanceof I?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):wt(t)?this.__commitIterable(t):t===_t?(this.value=_t,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){let e=this.startNode.nextSibling;t=t??"";let i=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){let e=this.options.templateFactory(t);if(this.value instanceof j&&this.value.template===e)this.value.update(t.values);else{let i=new j(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());let e=this.value,i=0,s;for(let r of t)s=e[i],s===void 0&&(s=new a(this.options),e.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){q(this.startNode.parentNode,t.nextSibling,this.endNode)}},ct=class{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;U(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=A,e(this)}if(this.__pendingValue===A)return;let t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=A}},dt=class extends et{constructor(t,e,i){super(t,e,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new $t(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},$t=class extends lt{},ci=!1;(()=>{try{let a={get capture(){return ci=!0,!1}};window.addEventListener("test",a,a),window.removeEventListener("test",a,a)}catch{}})();var pt=class{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(t){this.__pendingValue=t}commit(){for(;U(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=A,r(this)}if(this.__pendingValue===A)return;let t=this.__pendingValue,e=this.value,i=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=t!=null&&(e==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=us(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=A}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}},us=a=>a&&(ci?{capture:a.capture,passive:a.passive,once:a.once}:a.capture);function oe(a){let t=W.get(a.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},W.set(a.type,t));let e=t.stringsArray.get(a.strings);if(e!==void 0)return e;let i=a.strings.join(P);return e=t.keyString.get(i),e===void 0&&(e=new H(a,a.getTemplateElement()),t.keyString.set(i,e)),t.stringsArray.set(a.strings,e),e}var W=new Map;var B=new WeakMap,ne=(a,t,e)=>{let i=B.get(t);i===void 0&&(q(t,t.firstChild),B.set(t,i=new O(Object.assign({templateFactory:oe},e))),i.appendInto(t)),i.setValue(a),i.commit()};var kt=class{handleAttributeExpressions(t,e,i,s){let r=e[0];return r==="."?new dt(t,e.slice(1),i).parts:r==="@"?[new pt(t,e.slice(1),s.eventContext)]:r==="?"?[new ct(t,e.slice(1),i)]:new et(t,e,i).parts}handleTextExpression(t){return new O(t)}},St=new kt;typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var l=(a,...t)=>new I(a,t,"html",St),z=(a,...t)=>new tt(a,t,"svg",St);var di=(a,t)=>`${a}--${t}`,zt=!0;typeof window.ShadyCSS>"u"?zt=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),zt=!1);var hs=a=>t=>{let e=di(t.type,a),i=W.get(e);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},W.set(e,i));let s=i.stringsArray.get(t.strings);if(s!==void 0)return s;let r=t.strings.join(P);if(s=i.keyString.get(r),s===void 0){let o=t.getTemplateElement();zt&&window.ShadyCSS.prepareTemplateDom(o,a),s=new H(t,o),i.keyString.set(r,s)}return i.stringsArray.set(t.strings,s),s},ms=["html","svg"],fs=a=>{ms.forEach(t=>{let e=W.get(di(t,a));e!==void 0&&e.keyString.forEach(i=>{let{element:{content:s}}=i,r=new Set;Array.from(s.querySelectorAll("style")).forEach(o=>{r.add(o)}),ae(i,r)})})},pi=new Set,gs=(a,t,e)=>{pi.add(a);let i=e?e.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:r}=s;if(r===0){window.ShadyCSS.prepareTemplateStyles(i,a);return}let o=document.createElement("style");for(let d=0;d<r;d++){let h=s[d];h.parentNode.removeChild(h),o.textContent+=h.textContent}fs(a);let n=i.content;e?oi(e,o,n.firstChild):n.insertBefore(o,n.firstChild),window.ShadyCSS.prepareTemplateStyles(i,a);let c=n.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(e){n.insertBefore(o,n.firstChild);let d=new Set;d.add(o),ae(e,d)}},ui=(a,t,e)=>{if(!e||typeof e!="object"||!e.scopeName)throw new Error("The `scopeName` option is required.");let i=e.scopeName,s=B.has(t),r=zt&&t.nodeType===11&&!!t.host,o=r&&!pi.has(i),n=o?document.createDocumentFragment():t;if(ne(a,n,Object.assign({templateFactory:hs(i)},e)),o){let c=B.get(n);B.delete(n);let d=c.value instanceof j?c.value.template:void 0;gs(i,n,d),q(t,t.firstChild),t.appendChild(n),B.set(t,c)}!s&&r&&window.ShadyCSS.styleElement(t.host)};var hi;window.JSCompiler_renameProperty=(a,t)=>a;var he={toAttribute(a,t){switch(t){case Boolean:return a?"":null;case Object:case Array:return a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){switch(t){case Boolean:return a!==null;case Number:return a===null?null:Number(a);case Object:case Array:return JSON.parse(a)}return a}},mi=(a,t)=>t!==a&&(t===t||a===a),le={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:mi},ce=1,de=4,pe=8,ue=16,me="finalized",st=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let t=[];return this._classProperties.forEach((e,i)=>{let s=this._attributeNameForProperty(i,e);s!==void 0&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((e,i)=>this._classProperties.set(i,e))}}static createProperty(t,e=le){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;let i=typeof t=="symbol"?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||le}static finalize(){let t=Object.getPrototypeOf(this);if(t.hasOwnProperty(me)||t.finalize(),this[me]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(e):[]];for(let s of i)this.createProperty(s,e[s])}}static _attributeNameForProperty(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=mi){return i(t,e)}static _propertyValueFromAttribute(t,e){let i=e.type,s=e.converter||he,r=typeof s=="function"?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(e.reflect===void 0)return;let i=e.type,s=e.converter;return(s&&s.toAttribute||he.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){let i=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=le){let s=this.constructor,r=s._attributeNameForProperty(t,i);if(r!==void 0){let o=s._propertyValueToAttribute(e,i);if(o===void 0)return;this._updateState=this._updateState|pe,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._updateState=this._updateState&~pe}}_attributeToProperty(t,e){if(this._updateState&pe)return;let i=this.constructor,s=i._attributeToPropertyMap.get(t);if(s!==void 0){let r=i.getPropertyOptions(s);this._updateState=this._updateState|ue,this[s]=i._propertyValueFromAttribute(e,r),this._updateState=this._updateState&~ue}}requestUpdateInternal(t,e,i){let s=!0;if(t!==void 0){let r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),i.reflect===!0&&!(this._updateState&ue)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|de;try{await this._updatePromise}catch{}let t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&de}get hasUpdated(){return this._updateState&ce}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1,e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(this._updateState&ce||(this._updateState=this._updateState|ce,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~de}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,i)=>this._propertyToAttribute(i,this[i],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}};hi=me;st[hi]=!0;var fi=Element.prototype,or=fi.msMatchesSelector||fi.webkitMatchesSelector;var Ct=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),ut=class{constructor(t,e){if(e!==fe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(Ct?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},gi=a=>new ut(String(a),fe),bs=a=>{if(a instanceof ut)return a.cssText;if(typeof a=="number")return a;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${a}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},b=(a,...t)=>{let e=t.reduce((i,s,r)=>i+bs(s)+a[r+1],a[0]);return new ut(e,fe)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");var bi={},x=class extends st{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let t=this.getStyles();if(Array.isArray(t)){let e=(r,o)=>r.reduceRight((n,c)=>Array.isArray(c)?e(c,n):(n.add(c),n),o),i=e(t,new Set),s=[];i.forEach(r=>s.unshift(r)),this._styles=s}else this._styles=t===void 0?[]:[t];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Ct){let i=Array.prototype.slice.call(e.cssRules).reduce((s,r)=>s+r.cssText,"");return gi(i)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){let t=this.constructor._styles;t.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(e=>e.cssText),this.localName):Ct?this.renderRoot.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){let e=this.render();super.update(t),e!==bi&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{let s=document.createElement("style");s.textContent=i.cssText,this.renderRoot.appendChild(s)}))}render(){return bi}};x.finalized=!0;x.render=ui;x.shadowRootOptions={mode:"open"};var ge={blue:["#dcecf8","#2e618c"],mint:["#ddf0e7","#306b55"],peach:["#f9e6d9","#8f5538"],lavender:["#ece5f7","#6d558c"],pink:["#f7e1ed","#8e496e"],amber:["#f5edcf","#786022"],green:["#ddf0e7","#306b55"],purple:["#ece5f7","#6d558c"],orange:["#f9e6d9","#8f5538"],teal:["#d9efec","#306b65"],red:["#f7e1df","#963f3b"]},vi=b`
 :host{display:block;--p-ink:var(--primary-text-color,#252c34);--p-muted:var(--secondary-text-color,#647078);--p-surface:var(--ha-card-background,var(--card-background-color,#fff));color:var(--p-ink);font-family:inherit}
 *{box-sizing:border-box}ha-card{display:block;padding:20px;border-radius:26px;background:var(--p-surface);border:1px solid var(--divider-color,#e8ebed);box-shadow:0 4px 18px #14283306;color:var(--p-ink)}
 header{display:flex;align-items:center;gap:12px;margin-bottom:20px}.icon{background:var(--p-tint);color:var(--p-accent);width:44px;height:44px;border-radius:15px;display:grid;place-items:center;flex-shrink:0}
 .heading{flex:1;min-width:0}h2{font-size:17px;line-height:1.3;letter-spacing:-.3px;margin:0;font-weight:650;overflow-wrap:anywhere}.subtitle,.muted{color:var(--p-muted);font-size:12px;line-height:1.6}.subtitle{margin-top:3px}.hero{background:var(--p-tint);color:var(--p-accent);border-radius:20px;padding:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;min-height:130px}.hero svg{width:98px;height:98px;flex-shrink:0}.hero .reading{font-size:32px;letter-spacing:-1px;line-height:1.2}.hero .caption{font-size:12px;margin-top:6px}.hero .right{text-align:right;min-width:0}.pill{font-size:11px;line-height:1.5;background:var(--p-tint);color:var(--p-accent);padding:6px 10px;border-radius:20px;max-width:50%;overflow-wrap:anywhere}.status{font-size:15px;font-weight:600;overflow-wrap:anywhere}
 .metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:16px}.metric{padding:13px 14px;border:1px solid var(--divider-color,#e8ebed);border-radius:16px;text-align:left;background:transparent;color:inherit;min-height:74px}.metric strong{display:block;font-size:22px;font-weight:550;letter-spacing:-.5px;font-variant-numeric:tabular-nums}.metric small{font-size:11px;color:var(--p-muted)}.metric .unit{font-size:12px;margin-left:4px;color:var(--p-muted)}
 button,select,input{font:inherit}button{cursor:pointer;touch-action:pan-y;min-height:44px;border:0;border-radius:13px;padding:10px 14px;background:var(--p-tint);color:var(--p-accent);font-weight:550;font-size:13px}button:disabled{opacity:.45;cursor:default}button:focus-visible,select:focus-visible,input:focus-visible{outline:2px solid var(--p-accent);outline-offset:3px}.actions{display:flex;gap:8px;flex-wrap:wrap}.actions button{flex:1;min-width:80px}.control{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--divider-color,#e8ebed);font-size:13px}.control span{min-width:0;overflow-wrap:anywhere}.control select{max-width:60%}select,input{background:var(--p-surface);color:var(--p-ink);border:1px solid var(--divider-color,#dce2e6);border-radius:10px;padding:10px;min-height:44px;max-width:100%}input[type=number]{width:100px}.error{background:#fae3e0;color:#8e302a;border-radius:12px;padding:12px;font-size:13px;margin-top:12px}.empty{padding:20px;color:var(--p-muted);font-size:14px;line-height:1.7}.foot{font-size:11px;color:var(--p-muted);margin-top:14px}.map{width:100%;border-radius:16px;margin-top:16px;display:block}.zones{margin-top:16px}h3{font-size:13px;font-weight:600;margin:18px 0 10px}.temperature{display:flex;gap:12px;align-items:center;justify-content:center;margin-bottom:16px}.temperature strong{font-size:30px;font-weight:550}.temperature button{font-size:20px;min-width:44px}.editor{display:grid;gap:14px;padding:12px}.editor label{display:grid;gap:6px;font-size:13px}.editor select,.editor input{width:100%}.editor .pair{display:grid;grid-template-columns:1fr 1fr;gap:10px}.editor details{border:1px solid var(--divider-color,#ddd);border-radius:14px;padding:12px}.editor summary{cursor:pointer;font-weight:600;font-size:13px}.editor .check{display:flex;align-items:center;gap:10px;margin:10px 0}.editor .check input{width:18px;min-height:18px}.editor .hint{font-size:12px;color:var(--p-muted);line-height:1.6}.editor button{min-height:44px}.section-label{font-size:10px;text-transform:uppercase;letter-spacing:1.6px;color:var(--p-muted);margin:20px 0 10px}
 @media(prefers-reduced-motion:no-preference){button{transition:filter .15s}button:hover{filter:brightness(.96)}}
`;var k=class extends x{static get properties(){return{hass:{},config:{},error:{},busy:{}}}static get styles(){return vi}setConfig(t){this.config={...t},this.error=""}getCardSize(){return 5}getGridOptions(){return{columns:6,min_columns:3,rows:"auto"}}palette(t="blue"){let[e,i]=ge[t]||ge.blue;return`--p-tint:${e};--p-accent:${i}`}info(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}async call(t,e,i={},s){if(this.busy)return;let[r,o]=String(t||"").split(".");if(!r||!o||!this.hass?.services?.[r]?.[o]){this.error="Questo comando non \xE8 disponibile.";return}this.busy=!0,this.error="";try{await this.hass.callService(r,o,{...i,...e?{entity_id:e}:{}},s)}catch(n){this.error=n.message||"Comando non riuscito."}finally{this.busy=!1}}guardPress(t){this._origin={x:t.clientX,y:t.clientY,id:t.pointerId},this._moved=!1}guardMove(t){this._origin?.id===t.pointerId&&Math.hypot(t.clientX-this._origin.x,t.clientY-this._origin.y)>10&&(this._moved=!0)}guardCancel(){this._moved=!0}guardClick(t){t.detail!==0&&this._moved&&(t.stopPropagation(),t.preventDefault())}connectedCallback(){super.connectedCallback(),this._down=t=>this.guardPress(t),this._move=t=>this.guardMove(t),this._cancel=()=>this.guardCancel(),this._click=t=>this.guardClick(t),this.addEventListener("pointerdown",this._down,!0),this.addEventListener("pointermove",this._move,!0),this.addEventListener("pointercancel",this._cancel,!0),this.addEventListener("click",this._click,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerdown",this._down,!0),this.removeEventListener("pointermove",this._move,!0),this.removeEventListener("pointercancel",this._cancel,!0),this.removeEventListener("click",this._click,!0)}feedback(){return this.error?l`<div class="error" role="alert">${this.error}</div>`:""}},Y=a=>({on:"Acceso",off:"Spento",unavailable:"Non disponibile",unknown:"Stato sconosciuto",cleaning:"In pulizia",mowing:"In taglio",docked:"Alla base",paused:"In pausa",returning:"Ritorno alla base",idle:"In attesa",error:"Richiede attenzione",running:"In funzione",washing:"Lavaggio",drying:"Asciugatura",finished:"Terminato",cool:"Raffreddamento",heat:"Riscaldamento",auto:"Automatico",heat_cool:"Caldo / freddo",dry:"Deumidificazione",fan_only:"Ventilazione"})[a]||a||"Non configurato";var F={washer:["Lavatrice","mdi:washing-machine","blue","washer|washing machine|lavatrice"],dryer:["Asciugatrice","mdi:tumble-dryer","peach","dryer|asciugatrice"],dishwasher:["Lavastoviglie","mdi:dishwasher","blue","dishwasher|lavastoviglie"],refrigerator:["Frigorifero","mdi:fridge-outline","mint","refrigerator|fridge|frigorifero"],freezer:["Congelatore","mdi:fridge-bottom","blue","freezer|congelatore"],wine_cooler:["Cantinetta","mdi:glass-wine","lavender","wine cooler|cantinetta"],oven:["Forno","mdi:stove","peach","oven|forno"],microwave:["Microonde","mdi:microwave","peach","microwave|microonde"],coffee:["Macchina del caff\xE8","mdi:coffee-maker-outline","peach","coffee|caffe|caff\xE8"],hood:["Cappa","mdi:air-filter","mint","hood|cappa"],hob:["Piano induzione","mdi:stove","peach","hob|cooktop|induzione|piano cottura|pianocottura"],dehumidifier:["Deumidificatore","mdi:air-humidifier-off","blue","dehumidifier|deumidificatore"],humidifier:["Umidificatore","mdi:air-humidifier","blue","humidifier|umidificatore"],air_purifier:["Purificatore aria","mdi:air-purifier","mint","air purifier|purificatore aria"],water_purifier:["Depuratore acqua","mdi:water-check-outline","mint","water purifier|water filter|reverse osmosis|depuratore|osmosi"],fan:["Ventilatore","mdi:fan","mint","fan|ventilatore"],ventilation:["Ventilazione","mdi:hvac","mint","ventilation|ventilazione|vmc"],water_heater:["Scaldacqua","mdi:water-boiler","peach","water heater|boiler|scaldacqua"],vacuum:["Robot pulizia","mdi:robot-vacuum","lavender","vacuum|aspirapolvere|robot pulizia"],floor_cleaner:["Lavapavimenti","mdi:vacuum-outline","lavender","floor cleaner|lavapavimenti|aspirapavimenti"],lawn_mower:["Tagliaerba","mdi:robot-mower-outline","mint","lawn mower|tagliaerba"],robot_dock:["Base di pulizia","mdi:robot-vacuum","lavender","dock|base lavaggio|base svuotamento|base di pulizia"],generic:["Dispositivo","mdi:devices","blue","^$"]},ht=["vacuum","floor_cleaner","lawn_mower","robot_dock"],Q={power:["Potenza","power"],energy:["Energia totale","energy"],cycle_energy:["Energia ciclo",null],remaining:["Tempo restante",null],progress:["Avanzamento",null],temperature:["Temperatura","temperature"],humidity:["Umidit\xE0","humidity"],battery:["Batteria","battery"],water_quality:["TDS uscita",null],water_input:["TDS ingresso",null],water_used:["Acqua erogata",null],tank:["Serbatoio",null],filter:["Filtro residuo",null],area:["Area pulita",null]},M=a=>(a||"").split(".")[0],V=a=>!!a&&!["unknown","unavailable"].includes(a.state),C=a=>a==null||String(a).trim()===""||!Number.isFinite(Number(a))?null:Number(a);function Et(a,t={}){let e=M(a?.entity_id);if(e==="vacuum"||e==="lawn_mower"||e==="water_heater")return e;if(e==="humidifier")return a.attributes?.device_class==="dehumidifier"?"dehumidifier":"humidifier";let i=[t.name_by_user,t.name,t.model,a?.attributes?.friendly_name,a?.entity_id].filter(Boolean).join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replaceAll("_"," "),s=Object.entries(F).filter(([r,o])=>r!=="generic"&&new RegExp(`(^|\\b)(${o[3]})(\\b|$)`,"i").test(i));return s.length===1?s[0][0]:"generic"}function be(a,t,e){let i=t?.entities||[],s=i.find(m=>m.entity_id===e.entity),r=e.device_id||s?.device_id,o=r?i.filter(m=>m.device_id===r&&!m.disabled_by).map(m=>m.entity_id):[e.entity].filter(Boolean),n=(t?.devices||[]).find(m=>m.id===r)||{},c=o.map(m=>a.states[m]).filter(Boolean),d=a.states[e.entity]||c.find(m=>["vacuum","lawn_mower","humidifier","water_heater","fan"].includes(M(m.entity_id)))||c[0],h={},p=[];for(let[m,[,v]]of Object.entries(Q)){let _=c.filter(w=>M(w.entity_id)==="sensor"&&(v?w.attributes?.device_class===v&&(m!=="energy"||!xi("cycle_energy",w)):xi(m,w)));_.length===1?h[m]=_[0].entity_id:_.length>1&&p.push(m)}let u=c.filter(m=>["button","select","number","switch","input_button","input_select","input_number","input_boolean","fan","humidifier"].includes(M(m.entity_id))).map(m=>({entity:m.entity_id,name:m.attributes?.friendly_name||m.entity_id})),f=c.filter(m=>["camera","image"].includes(M(m.entity_id)));return{status_entities:c.filter(m=>m.entity_id!==d?.entity_id&&(M(m.entity_id)==="binary_sensor"||M(m.entity_id)==="sensor"&&C(m.state)===null&&/filter|filtro|maintenance|manutenzione|tank|serbatoio|salt|sale|rinse|brillantante/i.test(m.entity_id+" "+m.attributes?.friendly_name))).map(m=>m.entity_id),entity:d?.entity_id||"",profile:Et(d,n),metrics:h,controls:u,map_entity:f.length===1?f[0].entity_id:"",device_id:r,ambiguous:p,siblings:o}}function xi(a,t){let e=(t.entity_id+" "+(t.attributes?.friendly_name||"")).toLowerCase();return{cycle_energy:/cycle.*energy|energia.*ciclo/,remaining:/remaining|restante|residuo.*tempo/,progress:/progress|avanzamento/,water_quality:/(tds.*(out|uscita|purified))|((out|uscita|purified).*tds)/,water_input:/(tds.*(inlet|ingresso|input))|((inlet|ingresso|input).*tds)/,water_used:/water.*(used|dispensed)|acqua.*(erogata|consumata)/,tank:/tank|serbatoio/,filter:/filter.*(life|remaining)|filtro.*residu/,area:/cleaned.*area|area.*(pulita|tagliata)/}[a]?.test(e)||!1}function yi(a,t={}){if(!a)return[];let e=M(a.entity_id),i=Number(a.attributes?.supported_features||0);return(e==="vacuum"?[[8192,"start","Avvia"],[4,"pause","Pausa"],[8,"stop","Ferma"],[16,"return_to_base","Alla base"],[512,"locate","Trova"]]:e==="lawn_mower"?[[1,"start_mowing","Taglia"],[2,"pause","Pausa"],[4,"dock","Alla base"],[8,"stop","Ferma"]]:[]).filter(([r,o])=>i&r&&t[e]?.[o]).map(([,r,o])=>({name:o,action:`${e}.${r}`,entity:a.entity_id}))}function _i(a,t){if(!V(t))return null;let e=C(t.state);if(e===null)return null;let i=t.attributes?.unit_of_measurement||"";return a==="power"?i==="kW"?{value:e*1e3,unit:"W"}:i==="W"?{value:e,unit:i}:null:a==="energy"||a==="cycle_energy"?i==="Wh"?{value:e/1e3,unit:"kWh"}:i==="kWh"?{value:e,unit:i}:null:{value:e,unit:i}}function wi(a){let t=["power","energy"],e=["cycle_energy","remaining","progress"],i=a==="water_purifier"?["water_quality","water_input","water_used","tank","filter"]:["vacuum","floor_cleaner","lawn_mower","robot_dock"].includes(a)?["battery","area","remaining","progress","tank","filter"]:["washer","dryer","dishwasher","oven","microwave","coffee"].includes(a)?[...e,"temperature","tank","filter"]:["refrigerator","freezer","wine_cooler","water_heater"].includes(a)?["temperature"]:["humidity","temperature","filter","tank"];return a==="generic"?Object.keys(Q):[...t,...i]}function D(a){let t;return a==="alarm"?t=z`<path d="M60 10 99 27 95 67 81 88 60 106 39 88 25 67 21 27Z"/><circle cx="60" cy="48" r="5"/><path d="M60 53v17"/>`:a==="dishwasher"?t=z`<rect x="21" y="10" width="78" height="99" rx="14"/><path d="M21 35h78M32 23h20M36 80h48M36 91h48"/><path d="M42 76V49M54 76V45M66 76V45M78 76V49"/>`:a==="oven"?t=z`<rect x="21" y="10" width="78" height="99" rx="14"/><rect x="32" y="44" width="56" height="50" rx="6"/><path d="M38 24h10M69 24h10M40 82h40"/>`:a==="microwave"?t=z`<rect x="10" y="28" width="100" height="67" rx="12"/><rect x="21" y="40" width="62" height="42" rx="6"/><circle cx="97" cy="49" r="3"/><circle cx="97" cy="65" r="3"/>`:a==="hob"?t=z`<rect x="13" y="17" width="94" height="86" rx="12"/><circle cx="38" cy="42" r="15"/><circle cx="80" cy="42" r="13"/><circle cx="39" cy="79" r="13"/><circle cx="80" cy="78" r="16"/>`:a==="hood"?t=z`<path d="M45 12h30v38l30 30H15l30-30Z"/><path d="M15 80v12h90V80M40 107h40M44 69h32"/>`:a==="coffee"?t=z`<rect x="25" y="13" width="70" height="94" rx="12"/><path d="M35 43h50M55 44v14M40 96h42"/><path d="M43 66h31v18H43ZM74 68h10v10H74"/>`:a==="generic"?t=z`<rect x="15" y="20" width="40" height="40" rx="10"/><rect x="65" y="20" width="40" height="40" rx="10"/><rect x="15" y="70" width="40" height="40" rx="10"/><path d="M66 90h38M85 71v38"/>`:a==="water_purifier"?t=z`<rect x="22" y="12" width="72" height="94" rx="18"/><path d="M36 36h44M42 48h32M48 61v18h25V61M48 88h25"/><path d="M60 57c-10-12 0-20 0-20s10 8 0 20Z" fill="currentColor" opacity=".25"/>`:["vacuum","floor_cleaner","robot_dock"].includes(a)?t=z`<circle cx="60" cy="64" r="42"/><circle cx="60" cy="64" r="32" opacity=".35"/><rect x="47" y="24" width="26" height="20" rx="9"/><path d="M45 82h30M56 57h8"/>`:a==="lawn_mower"?t=z`<rect x="18" y="49" width="84" height="42" rx="19"/><rect x="38" y="30" width="42" height="35" rx="14"/><circle cx="34" cy="91" r="12"/><circle cx="86" cy="91" r="12"/><path d="M49 42h20"/>`:["refrigerator","freezer","wine_cooler"].includes(a)?t=z`<rect x="27" y="9" width="65" height="101" rx="13"/><path d="M27 47h65M40 26v10M40 62v16"/>`:a==="climate"?t=z`<rect x="9" y="22" width="102" height="48" rx="13"/><path d="M20 54h80M29 64h62M32 82v16M60 82v24M88 82v16"/><circle cx="94" cy="37" r="2" fill="currentColor"/>`:["dehumidifier","humidifier","air_purifier","fan","ventilation","water_heater"].includes(a)?t=z`<rect x="28" y="13" width="64" height="95" rx="20"/><path d="M41 30h38M41 38h38M41 46h38M46 87h28"/><circle cx="60" cy="66" r="5"/>`:t=z`<rect x="21" y="10" width="78" height="99" rx="14"/><path d="M21 35h78M32 23h20"/><circle cx="60" cy="70" r="24"/><path d="M40 73q10-9 20 0t20 0" opacity=".5"/><circle cx="83" cy="23" r="3" fill="currentColor"/>`,l`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t}</svg>`}var mt=class extends k{static getConfigElement(){return document.createElement("pastel-appliance-card-editor")}static getStubConfig(){return{profile:"generic",entity:"",metrics:{},controls:[]}}setConfig(t){if(super.setConfig(t),t.controls&&!Array.isArray(t.controls))throw new Error("controls deve essere una lista");if(t.controls?.some(e=>!e||typeof e!="object"||e.action&&typeof e.action!="string"))throw new Error("Ogni controllo deve indicare entity oppure action come testo");if(t.status_entities&&!Array.isArray(t.status_entities))throw new Error("status_entities deve essere una lista");if(t.zones&&!Array.isArray(t.zones))throw new Error("zones deve essere una lista");if(t.metrics&&(typeof t.metrics!="object"||Array.isArray(t.metrics)))throw new Error("metrics deve essere un oggetto")}render(){if(!this.hass||!this.config)return l``;let t=this.config,e=F[t.profile]||F.generic,i=this.hass.states[t.entity],s=t.title||e[0],r=V(i),o=t.metrics||{};return l`<ha-card style=${this.palette(t.color||e[2])}>
   <header><div class="icon"><ha-icon icon=${e[1]}></ha-icon></div><div class="heading"><h2>${s}</h2><div class="subtitle">${t.subtitle||e[0]}</div></div><span class="pill">${Y(i?.state)}</span></header>
   <div class="hero">${D(t.profile)}<div class="right"><div class="status">${Y(i?.state)}</div><div class="caption">${i?.attributes?.friendly_name||"Scegli il dispositivo nell\u2019editor"}</div></div></div>
   ${Object.keys(o).length?l`<div class="metrics">${Object.entries(o).filter(([,n])=>n).map(([n,c])=>{let d=_i(n,this.hass.states[c]);return l`<button class="metric" @click=${()=>this.info(c)}><small>${Q[n]?.[0]||n}</small><strong>${d?new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:2}).format(d.value):"\u2014"}<span class="unit">${d?.unit||""}</span></strong></button>`})}</div>`:""}
   <div class="actions">${yi(i,this.hass.services).filter(n=>!(t.hidden_actions||[]).includes(n.action)).map(n=>l`<button ?disabled=${!r||this.busy} @click=${()=>this.call(n.action,n.entity)}>${n.name}</button>`)}</div>
   ${this.nativeSettings(i)}
   ${(t.controls||[]).map(n=>this.control(n))}
   ${(t.status_entities||[]).length?l`<h3>Stato e manutenzione</h3>${t.status_entities.map(n=>{let c=this.hass.states[n];return l`<div class="control"><span>${c?.attributes?.friendly_name||n}</span><button @click=${()=>this.info(n)}>${Y(c?.state)}</button></div>`})}`:""}
   ${this.robotExtras()}
   ${t.entity?"":l`<div class="empty">Apri l’editor, scegli un dispositivo e controlla le associazioni suggerite.</div>`}
   ${this.feedback()}
  </ha-card>`}control(t){if(t.action)return l`<div class="control"><span>${t.name||"Azione"}</span><button ?disabled=${this.busy||!this.hass.services?.[t.action.split(".")[0]]?.[t.action.split(".")[1]]} @click=${()=>this.call(t.action,t.entity,t.data||{},t.target)}>${t.button_label||"Esegui"}</button></div>`;let e=this.hass.states[t.entity],i=M(t.entity),s=t.name||e?.attributes?.friendly_name||t.entity,r=!e||e.state==="unavailable"||!["button","input_button"].includes(i)&&e.state==="unknown"||this.busy;if(["script","scene"].includes(i))return l`<div class="control"><span>${s}</span><button ?disabled=${r||!this.hass.services?.[i]?.turn_on} @click=${()=>this.call(`${i}.turn_on`,t.entity)}>Esegui</button></div>`;if(["select","input_select"].includes(i))return l`<label class="control"><span>${s}</span><select aria-label=${s} ?disabled=${r||!this.hass.services?.[i]?.select_option} .value=${e?.state||""} @change=${o=>this.call(`${i}.select_option`,t.entity,{option:o.target.value})}><option value="" disabled>Scegli</option>${(e?.attributes?.options||[]).map(o=>l`<option value=${o} ?selected=${o===e.state}>${o}</option>`)}</select></label>`;if(["number","input_number"].includes(i))return l`<label class="control"><span>${s}</span><input aria-label=${s} type="number" ?disabled=${r||!this.hass.services?.[i]?.set_value} min=${e?.attributes?.min??0} max=${e?.attributes?.max??100} step=${e?.attributes?.step??1} .value=${V(e)?e.state:""} @change=${o=>{o.target.checkValidity()&&C(o.target.value)!==null&&this.call(`${i}.set_value`,t.entity,{value:Number(o.target.value)})}}></label>`;if(["button","input_button"].includes(i))return l`<div class="control"><span>${s}</span><button ?disabled=${r||!this.hass.services?.[i]?.press} @click=${()=>this.call(`${i}.press`,t.entity)}>${t.button_label||"Esegui"}</button></div>`;if(["switch","input_boolean","fan","humidifier"].includes(i)){let o=e?.state==="on"?"turn_off":"turn_on";return l`<div class="control"><span>${s}<br><small class="muted">Alimentazione</small></span><button ?disabled=${r||!this.hass.services?.[i]?.[o]} @click=${()=>this.call(`${i}.${o}`,t.entity)}>${e?.state==="on"?"Spegni":"Accendi"}</button></div>`}return l`<div class="control"><span>${s}</span><button @click=${()=>this.info(t.entity)}>Dettagli</button></div>`}nativeSettings(t){if(!t)return"";let e=M(t.entity_id),i=t.attributes||{},s=this.hass.services?.[e]||{},r=!t||t.state==="unavailable"||!["button","input_button"].includes(e)&&t.state==="unknown"||this.busy,o=(c,d,h,p,u)=>d?.length&&s[p]?l`<label class="control"><span>${c}</span><select aria-label=${c} ?disabled=${r} @change=${f=>this.call(`${e}.${p}`,t.entity_id,{[u]:f.target.value})}>${d.map(f=>l`<option value=${f} ?selected=${f===h}>${f}</option>`)}</select></label>`:"",n=(c,d,h,p,u,f,g)=>C(d)!==null&&s[f]?l`<label class="control"><span>${c}</span><input type="number" aria-label=${c} .value=${String(d)} min=${h} max=${p} step=${u} ?disabled=${r} @change=${m=>{m.target.checkValidity()&&C(m.target.value)!==null&&this.call(`${e}.${f}`,t.entity_id,{[g]:Number(m.target.value)})}}></label>`:"";return e==="vacuum"?Number(i.supported_features)&32?o("Aspirazione",i.fan_speed_list,i.fan_speed,"set_fan_speed","fan_speed"):"":e==="humidifier"?l`${n("Umidit\xE0 desiderata",i.humidity,i.min_humidity??0,i.max_humidity??100,1,"set_humidity","humidity")}${Number(i.supported_features)&1?o("Modalit\xE0",i.available_modes,i.mode,"set_mode","mode"):""}`:e==="fan"?l`${Number(i.supported_features)&1?n("Velocit\xE0 %",i.percentage,0,100,i.percentage_step||1,"set_percentage","percentage"):""}${Number(i.supported_features)&8?o("Profilo",i.preset_modes,i.preset_mode,"set_preset_mode","preset_mode"):""}`:e==="water_heater"?l`${Number(i.supported_features)&1?n("Temperatura desiderata",i.temperature,i.min_temp??30,i.max_temp??90,1,"set_temperature","temperature"):""}${Number(i.supported_features)&2?o("Modalit\xE0",i.operation_list,i.operation_mode,"set_operation_mode","operation_mode"):""}`:""}robotExtras(){return l``}},At=class extends mt{static getConfigElement(){return document.createElement("pastel-robot-card-editor")}static getStubConfig(){return{profile:"vacuum",entity:"",metrics:{},controls:[]}}robotExtras(){let t=this.config,e=this.hass.states[t.map_entity],i=V(e)?e.attributes?.entity_picture:null,s=i&&(i.startsWith("/")&&!i.startsWith("//")||/^https?:\/\//.test(i))?this.hass.hassUrl?this.hass.hassUrl(i):i:null;return l`${s?l`<img class="map" src=${s} alt="Mappa del robot" loading="lazy">`:t.map_entity?l`<div class="foot">Mappa non disponibile.</div>`:""}
   ${(t.zones||[]).length?l`<div class="zones"><h3>Stanze e zone</h3>${t.zones.map(r=>this.control(r))}</div>`:""}`}};var Mt=new WeakMap;async function ve(a,{refresh:t=!1}={}){let e=a.connection||a;if(!t&&Mt.has(e))return Mt.get(e);let i=Promise.all([a.callWS({type:"config/entity_registry/list"}),a.callWS({type:"config/device_registry/list"})]).then(([s,r])=>({entities:s,devices:r})).catch(s=>{throw Mt.delete(e),s});return Mt.set(e,i),i}function $i(a,t,{robot:e=!1}={}){let i=new Map,s=new Set;for(let o of t.entities||[]){if(s.add(o.entity_id),o.disabled_by||!a.states[o.entity_id])continue;let n=o.device_id?`device:${o.device_id}`:`entity:${o.entity_id}`;i.has(n)||i.set(n,{device_id:o.device_id||"",entities:[]}),i.get(n).entities.push(a.states[o.entity_id])}for(let o of Object.values(a.states))s.has(o.entity_id)||i.set(`entity:${o.entity_id}`,{device_id:"",entities:[o]});let r=[];for(let[o,n]of i){let c=(t.devices||[]).find(f=>f.id===n.device_id)||{},d=Et(null,c),h=n.entities.map(f=>({s:f,profile:d!=="generic"?d:Et(f,c)})).filter(f=>f.profile!=="generic"&&(!e||ht.includes(f.profile)));if([...new Set(h.map(f=>f.profile))].length!==1)continue;let u=h.find(f=>["vacuum","lawn_mower","humidifier","water_heater","fan"].includes(M(f.s.entity_id)))||h.find(f=>/status|state|stato|operation/.test(f.s.entity_id))||h[0];r.push({key:o,device_id:n.device_id,entity:u.s.entity_id,profile:u.profile,name:c.name_by_user||c.name||u.s.attributes.friendly_name||u.s.entity_id,count:n.entities.length})}return r.sort((o,n)=>o.name.localeCompare(n.name))}var gt=class extends k{static get properties(){return{...super.properties,suggestion:{},loading:{},registry:{},showAllMetrics:{}}}updated(){this.hass&&!this._discoveryStarted&&(this._discoveryStarted=!0,this.loadDevices())}chooseCandidate(t){let e=this.detected().find(i=>i.key===t);e&&(this.emit({device_id:e.device_id,entity:e.entity,profile:e.profile,metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]}),this.suggestion={...be(this.hass,this.registry,e),profile:e.profile})}detected(){return this.hass&&this.registry?$i(this.hass,this.registry,{robot:!!this.constructor.robot}):[]}setConfig(t){super.setConfig(t),this.config={...t,metrics:{...t.metrics||{}},controls:[...t.controls||[]]}}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}async scan(){this.loading=!0,this.error="",this.suggestion=null;let t=`${this.config.entity}|${this.config.device_id}`;try{let e=await ve(this.hass,{refresh:!0});this.registry=e,t===`${this.config.entity}|${this.config.device_id}`&&(this.suggestion=be(this.hass,e,this.config))}catch{this.error="Impossibile leggere i dispositivi. Puoi comunque associare tutte le entit\xE0 manualmente."}finally{this.loading=!1}}async loadDevices(){this.loading=!0;try{this.registry=await ve(this.hass)}catch{this.error="Elenco dispositivi non disponibile: seleziona un\u2019entit\xE0."}finally{this.loading=!1}}options(t){return Object.values(this.hass.states).filter(e=>!t||t.includes(e.entity_id.split(".")[0])).sort((e,i)=>e.entity_id.localeCompare(i.entity_id))}entitySelect(t,e,i,s="Entit\xE0"){return l`<select aria-label=${s} .value=${t||""} @change=${r=>e(r.target.value)}><option value="">Nessuna</option>${this.options(i).map(r=>l`<option value=${r.entity_id} ?selected=${t===r.entity_id}>${r.attributes.friendly_name||r.entity_id} · ${r.entity_id}</option>`)}</select>`}render(){if(!this.config||!this.hass)return l``;let t=this.config,e=this.suggestion,i=this.constructor.robot;return l`<div class="editor" style=${this.palette(t.color)}>
  <label>Elettrodomestici rilevati${this.loading?l`<span class="hint">Ricerca automatica in corso…</span>`:l`<select aria-label="Elettrodomestici rilevati" @change=${s=>this.chooseCandidate(s.target.value)}><option value="">Scegli un dispositivo rilevato</option>${this.detected().map(s=>l`<option value=${s.key} ?selected=${s.device_id?t.device_id===s.device_id:t.entity===s.entity}>${F[s.profile][0]} · ${s.name} (${s.count} entità)</option>`)}</select>`}</label>
  <p class="hint">${this.registry&&!this.detected().length?"Nessun elettrodomestico riconosciuto. Puoi scegliere il dispositivo manualmente.":"Scegli un elettrodomestico: sensori e comandi collegati vengono proposti automaticamente. Verifica le associazioni prima di applicarle."}</p>
  <details><summary>Scelta manuale o dispositivo non riconosciuto</summary>
  <label>Dispositivo <button ?disabled=${this.loading} @click=${()=>this.loadDevices()}>Carica elenco dispositivi</button>${this.registry?l`<select aria-label="Dispositivo" .value=${t.device_id||""} @change=${s=>{this.suggestion=null,this.emit({device_id:s.target.value,entity:"",metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]})}}><option value="">Seleziona tramite entità</option>${this.registry.devices.map(s=>l`<option value=${s.id} ?selected=${t.device_id===s.id}>${s.name_by_user||s.name||s.model||s.id}</option>`)}</select>`:""}</label>
  <label>Entità principale ${this.entitySelect(t.entity,s=>{this.suggestion=null,this.emit({entity:s,device_id:"",metrics:{},controls:[],map_entity:"",zones:[],status_entities:[]})},null,"Entit\xE0 principale")}</label>
  <button ?disabled=${this.loading||!t.entity&&!t.device_id} @click=${()=>this.scan()}>${this.loading?"Ricerca in corso\u2026":"Cerca entit\xE0 e controlli associati"}</button>
  </details>
  ${e?l`<div class="hint">${e.siblings.length} entità associate. Profilo proposto: <strong>${F[e.profile][0]}</strong>. Le associazioni verranno salvate solo quando le applichi. ${e.ambiguous.length?`Da scegliere manualmente: ${e.ambiguous.map(s=>Q[s][0]).join(", ")}.`:""}</div><button @click=${()=>{let{siblings:s,ambiguous:r,...o}=e;this.emit({...o,profile:i&&!ht.includes(e.profile)?"vacuum":e.profile}),this.suggestion=null}}>Applica le associazioni proposte</button>`:""}
  <div class="pair"><label>Nome<input aria-label="Nome" .value=${t.title||""} @change=${s=>this.emit({title:s.target.value})}></label><label>Colore<select aria-label="Colore" @change=${s=>this.emit({color:s.target.value})}>${["blue","mint","peach","lavender","pink","amber"].map(s=>l`<option value=${s} ?selected=${(t.color||"blue")===s}>${s}</option>`)}</select></label></div>
  <label>Tipo dispositivo<select aria-label="Tipo dispositivo" @change=${s=>this.emit({profile:s.target.value})}>${Object.entries(F).filter(([s])=>!i||ht.includes(s)||s==="generic").map(([s,r])=>l`<option value=${s} ?selected=${t.profile===s}>${r[0]}</option>`)}</select></label>
  <details open><summary>Dati e consumi</summary><p class="hint">Puoi scegliere sensori esterni al dispositivo, come una presa con misurazione. L’energia del ciclo richiede un sensore dedicato.</p><label class="check"><input type="checkbox" .checked=${!!this.showAllMetrics} @change=${s=>{this.showAllMetrics=s.target.checked}}>Mostra tutti i tipi di dato</label>${Object.entries(Q).filter(([s])=>this.showAllMetrics||wi(t.profile).includes(s)||t.metrics?.[s]).map(([s,[r]])=>l`<label>${r}${this.entitySelect(t.metrics?.[s],o=>{let n={...t.metrics};o?n[s]=o:delete n[s],this.emit({metrics:n})},["sensor"],r)}</label>`)}</details>
  <details open><summary>Controlli (${t.controls?.length||0})</summary><p class="hint">Rimuovi i comandi che non vuoi mostrare. Gli interruttori sono indicati come alimentazione, mai come avvio del programma.</p>${(t.controls||[]).map((s,r)=>l`<div class="control"><span>${s.name||s.entity||s.action}</span><button aria-label=${`Rimuovi ${s.name||s.entity}`} @click=${()=>this.emit({controls:t.controls.filter((o,n)=>n!==r)})}>Rimuovi</button></div>`)}<label>Aggiungi controllo${this.entitySelect("",s=>{s&&!t.controls?.some(r=>r.entity===s)&&this.emit({controls:[...t.controls||[],{entity:s,name:this.hass.states[s]?.attributes.friendly_name||s}]})},["button","input_button","switch","input_boolean","select","input_select","number","input_number","fan","humidifier","script","scene"],"Aggiungi controllo")}</label></details>
  <details><summary>Stato e manutenzione</summary>${(t.status_entities||[]).map((s,r)=>l`<div class="control"><span>${this.hass.states[s]?.attributes?.friendly_name||s}</span><button @click=${()=>this.emit({status_entities:t.status_entities.filter((o,n)=>r!==n)})}>Rimuovi</button></div>`)}${this.entitySelect("",s=>{s&&!t.status_entities?.includes(s)&&this.emit({status_entities:[...t.status_entities||[],s]})},["sensor","binary_sensor"],"Aggiungi stato manutenzione")}</details>
  ${i?l`<details open><summary>Mappa e zone</summary><label>Mappa${this.entitySelect(t.map_entity,s=>this.emit({map_entity:s}),["image","camera"],"Mappa")}</label><p class="hint">La mappa è un’immagine fornita dall’integrazione. Per le zone associa un selettore tra i controlli oppure un pulsante/script qui sotto.</p>${(t.zones||[]).map((s,r)=>l`<div class="control"><span>${s.name||s.entity}</span><button @click=${()=>this.emit({zones:t.zones.filter((o,n)=>r!==n)})}>Rimuovi</button></div>`)}${this.entitySelect("",s=>{s&&this.emit({zones:[...t.zones||[],{entity:s,name:this.hass.states[s]?.attributes.friendly_name||s,...s.startsWith("script.")?{action:"script.turn_on"}:{}}]})},["button","input_button","script"],"Aggiungi zona")}</details>`:""}
  ${this.feedback()}
 </div>`}},ft=class extends gt{};si(ft,"robot",!0);var Tt=class extends k{static getConfigElement(){return document.createElement("pastel-climate-card-editor")}static getStubConfig(){return{entity:"",title:"Climatizzatore"}}setConfig(t){if(super.setConfig(t),t.entity&&!t.entity.startsWith("climate."))throw new Error("Scegli un\u2019entit\xE0 climate. Per comandi IR usa pastel-clima-card.")}target(t,e="temperature"){let i=this.hass.states[this.config.entity],s=i?.attributes||{};if(!V(i)||C(t)===null)return;let r=C(s.target_temp_step)||.5,o=C(s.min_temp)??7,n=C(s.max_temp)??35,c=Math.min(n,Math.max(o,Math.round((Number(t)-o)/r)*r+o));e==="target_temp_low"&&C(s.target_temp_high)!==null&&(c=Math.min(c,Number(s.target_temp_high))),e==="target_temp_high"&&C(s.target_temp_low)!==null&&(c=Math.max(c,Number(s.target_temp_low))),this.call("climate.set_temperature",i.entity_id,{[e]:Number(c.toFixed(2))})}modeControl(t,e,i,s,r,o){return!e?.length||!this.hass.services?.climate?.[s]?"":l`<label class="control"><span>${t}</span><select aria-label=${t} ?disabled=${o} @change=${n=>this.call(`climate.${s}`,this.config.entity,{[r]:n.target.value})}>${e.map(n=>l`<option value=${n} ?selected=${n===i}>${Y(n)}</option>`)}</select></label>`}render(){if(!this.hass||!this.config)return l``;let t=this.config,e=this.hass.states[t.entity],i=e?.attributes||{},s=Number(i.supported_features||0),r=!V(e)||this.busy,o=t.temp_sensor?this.hass.states[t.temp_sensor]?.state:i.current_temperature,n=t.humidity_sensor?this.hass.states[t.humidity_sensor]?.state:i.current_humidity,c=this.hass.config?.unit_system?.temperature||"\xB0C",d=t.temp_sensor?this.hass.states[t.temp_sensor]?.attributes.unit_of_measurement:c;return l`<ha-card style=${this.palette(t.color||"blue")}><header><div class="icon"><ha-icon icon="mdi:air-conditioner"></ha-icon></div><div class="heading"><h2>${t.title||i.friendly_name||"Climatizzatore"}</h2><div class="subtitle">${t.subtitle||"Comfort ambiente"}</div></div><span class="pill">${Y(e?.state)}</span></header>
 <div class="hero">${D("climate")}<div class="right"><div class="reading">${C(o)??"\u2014"}<small>${d||""}</small></div><div class="caption">Temperatura ambiente${C(n)!==null?` \xB7 ${n}% UR`:""}</div></div></div>
 ${s&1&&this.hass.services?.climate?.set_temperature?l`<div class="section-label">Temperatura desiderata</div><div class="temperature"><button aria-label="Riduci temperatura" ?disabled=${r||C(i.temperature)===null||Number(i.temperature)<=Number(i.min_temp??7)} @click=${()=>this.target(Number(i.temperature)-(Number(i.target_temp_step)||.5))}>−</button><strong>${C(i.temperature)??"\u2014"}<small>${c||""}</small></strong><button aria-label="Aumenta temperatura" ?disabled=${r||C(i.temperature)===null||Number(i.temperature)>=Number(i.max_temp??35)} @click=${()=>this.target(Number(i.temperature)+(Number(i.target_temp_step)||.5))}>+</button></div>`:""}
 ${s&2&&this.hass.services?.climate?.set_temperature?["target_temp_low","target_temp_high"].map(h=>l`<label class="control"><span>${h==="target_temp_low"?"Temperatura minima":"Temperatura massima"}</span><input type="number" aria-label=${h==="target_temp_low"?"Temperatura minima":"Temperatura massima"} min=${i.min_temp??7} max=${i.max_temp??35} step=${i.target_temp_step??.5} .value=${String(i[h]??"")} ?disabled=${r} @change=${p=>{p.target.checkValidity()&&this.target(p.target.value,h)}}></label>`):""}
 ${this.modeControl("Modalit\xE0",i.hvac_modes,e?.state,"set_hvac_mode","hvac_mode",r)}
 ${s&8?this.modeControl("Ventola",i.fan_modes,i.fan_mode,"set_fan_mode","fan_mode",r):""}
 ${s&16?this.modeControl("Profilo",i.preset_modes,i.preset_mode,"set_preset_mode","preset_mode",r):""}
 ${s&32?this.modeControl("Oscillazione",i.swing_modes,i.swing_mode,"set_swing_mode","swing_mode",r):""}
 ${e?"":l`<p class="empty">Scegli un climatizzatore nell’editor. Le modalità compaiono in base alle capacità del dispositivo.</p>`}
 ${this.feedback()}</ha-card>`}},Pt=class extends k{static get properties(){return{...super.properties}}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}render(){return!this.hass||!this.config?l``:l`<div class="editor" style=${this.palette()}><label>Titolo<input .value=${this.config.title||""} @change=${t=>this.emit({title:t.target.value})}></label>${[["entity","Climatizzatore","climate"],["temp_sensor","Sensore temperatura esterno","sensor"],["humidity_sensor","Sensore umidit\xE0 esterno","sensor"]].map(([t,e,i])=>l`<label>${e}<select @change=${s=>this.emit({[t]:s.target.value})}><option value="">Seleziona</option>${Object.values(this.hass.states).filter(s=>s.entity_id.startsWith(i+".")).map(s=>l`<option value=${s.entity_id} ?selected=${this.config[t]===s.entity_id}>${s.attributes.friendly_name||s.entity_id}</option>`)}</select></label>`)}<p class="hint">Modalità, intervalli e velocità vengono letti dal climatizzatore. I campi temp_sensor e humidity_sensor esistenti restano compatibili.</p></div>`}};function L(a,t,e){let i=a?.states?.[t];if(!i||["unknown","unavailable"].includes(i.state))return null;let s=e?i.attributes?.[e]:i.state;if(s==null||String(s).trim()===""||typeof s=="boolean")return null;let r=Number(s);return Number.isFinite(r)?r:null}function ki(a){let t=(a.steppers||[]).find(e=>e.show_as_temperature&&e.entity);return t?{entity:t.entity,attribute:t.attribute}:{entity:a.temperature_entity,attribute:a.temperature_attribute}}function vs(a,t){let e=a?.states?.[t.entity];if(!e)return null;let i=t.attribute?e.attributes?.[t.attribute]:e.state;return i==null||["unknown","unavailable"].includes(e.state)&&String(i)!==String(t.state)?null:t.operator==="not_equals"?String(i)!==String(t.state):String(i)===String(t.state)}function xe(a,t){for(let e of t.states||[]){if(!e.conditions?.length)continue;let i=e.conditions.map(o=>vs(a,o));if(e.match==="any"?i.includes(!0):i.every(o=>o===!0))return{...e,timer_entity:e.timer_entity||e.conditions.find(o=>o.entity?.startsWith("timer.")&&a?.states?.[o.entity]?.state==="active")?.entity};if((e.match==="any"||!i.includes(!1))&&i.includes(null))return{label:"Stato non disponibile",badge:"Non disponibile",unknown:!0}}if(t.entity){let e=a?.states?.[t.entity];return!e||["unknown","unavailable"].includes(e.state)?{label:"Stato non disponibile",badge:"Non disponibile",unknown:!0}:{label:e.state,badge:e.state}}return t.states?.length?{id:"off",label:t.fallback_label||"Riscaldamento spento",badge:t.fallback_badge||"Spenta"}:{label:"Stufa non configurata",badge:"Da configurare",unknown:!0}}function Si(a,t,e=Date.now()){let i=a?.states?.[t];if(!i||!["active","paused"].includes(i.state))return"";if(i.state==="active"){let s=Date.parse(i.attributes?.finishes_at);if(!Number.isFinite(s))return"";let r=Math.max(0,Math.ceil((s-e)/1e3)),o=Math.floor(r/3600),n=Math.floor(r%3600/60),c=r%60;return`${o?`${o}:`:""}${String(n).padStart(2,"0")}:${String(c).padStart(2,"0")}`}return i.attributes?.remaining||""}function ye(a){if(!a)return null;if(a.action)return{action:a.action,entity:a.entity,data:a.data||{},target:a.target};let t=a.entity?.split(".")[0],e={script:"turn_on",button:"press",input_button:"press",scene:"turn_on"}[t];return e?{action:`${t}.${e}`,entity:a.entity,data:a.data||{},target:a.target}:null}function bt(a,t){let e=ye(t);if(!e)return!1;let[i,s]=e.action.split(".");if(!a?.services?.[i]?.[s])return!1;if(e.entity){let r=a?.states?.[e.entity];if(!r||r.state==="unavailable")return!1}return!0}function zi(a){for(let t of["states","controls","steppers"])if(a[t]!==void 0&&!Array.isArray(a[t]))throw new Error(`${t} deve essere una lista.`);for(let t of a.states||[]){if(!t||typeof t!="object"||!Array.isArray(t.conditions))throw new Error("Ogni stato richiede una lista di condizioni.");if(t.match&&!["all","any"].includes(t.match))throw new Error("Le condizioni devono corrispondere a tutte oppure almeno una.");for(let e of t.conditions)if(!e||typeof e.entity!="string"||e.state===void 0||e.state===null||e.operator&&!["equals","not_equals"].includes(e.operator))throw new Error("Ogni condizione richiede entit\xE0, stato e confronto validi.")}for(let t of[...a.controls||[],...(a.steppers||[]).flatMap(e=>[e?.minus,e?.plus]).filter(Boolean)])if(!t||typeof t!="object"||Array.isArray(t)||t.entity!==void 0&&typeof t.entity!="string"||t.action!==void 0&&(typeof t.action!="string"||!/^\w+\.\w+$/.test(t.action)))throw new Error("Configura un\u2019entit\xE0 oppure un\u2019azione valida per ogni comando.");for(let t of a.steppers||[])if(!t||typeof t!="object")throw new Error("Controllo \u2212/+ non valido.");for(let t of["pellet_warning_threshold"])if(a[t]!==void 0&&(!Number.isFinite(Number(a[t]))||Number(a[t])<0||Number(a[t])>100))throw new Error("La soglia pellet deve essere compresa tra 0 e 100.")}var Nt=class extends k{static getConfigElement(){return document.createElement("pastel-stove-card-editor")}static getStubConfig(){return{title:"Stufa",subtitle:"Stufa a pellet",color:"peach",controls:[],steppers:[],states:[]}}static get styles(){return[super.styles,b`
  .stove-actions{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:0}.stove-actions button{flex:1 1 90px;min-width:80px;overflow-wrap:anywhere;display:flex;align-items:center;justify-content:center;gap:6px}.stove-actions ha-icon{--mdc-icon-size:18px;flex-shrink:0}
  .stepper{display:flex;align-items:center;gap:7px}.stepper>span{min-width:38px;text-align:center;font-variant-numeric:tabular-nums}.stepper button{width:44px;padding:10px;font-size:19px}.stepper-label{min-width:0;overflow-wrap:anywhere}.stepper-label ha-icon{--mdc-icon-size:18px;margin-right:6px;color:var(--p-accent)}
  .pellet-head{display:flex;justify-content:space-between;align-items:center;gap:5px;flex-wrap:wrap}.pellet-warning{font-size:11px;color:var(--stove-warning,#963f3b)}.pellet-track{height:5px;border-radius:4px;background:var(--p-tint);overflow:hidden;margin-top:9px}.pellet-fill{height:100%;background:var(--p-accent);border-radius:4px}.metric strong{margin-top:5px}.metric{min-height:86px}.timer{font-size:12px;margin-top:8px;font-variant-numeric:tabular-nums}.control:last-child{padding-bottom:0}.control button:disabled{opacity:.4}.stove-unknown{opacity:.5}
 `]}setConfig(t){zi(t),super.setConfig(t)}connectedCallback(){super.connectedCallback(),this._clock=setInterval(()=>{this.hass&&this.config&&xe(this.hass,this.config).timer_entity&&this.requestUpdate()},1e3)}disconnectedCallback(){clearInterval(this._clock),super.disconnectedCallback()}appearance(t){return[this.palette(t.color||"peach"),t.tint_color?`--p-tint:${t.tint_color}`:"",t.accent_color?`--p-accent:${t.accent_color}`:"",t.background_color?`--p-surface:${t.background_color}`:"",t.pellet_warning_color?`--stove-warning:${t.pellet_warning_color}`:"",t.text_color?`--p-ink:${t.text_color}`:"",t.secondary_text_color?`--p-muted:${t.secondary_text_color}`:""].filter(Boolean).join(";")}formatted(t){return t===null?"\u2014":new Intl.NumberFormat(this.hass?.locale?.language||"it",{maximumFractionDigits:1}).format(t)}run(t){if(!bt(this.hass,t)||this.busy)return;let e=ye(t);return this.call(e.action,e.entity,e.data,e.target)}illustration(t){let e=!t.unknown&&!["off","cooling"].includes(t.id);return l`<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="26" y="10" width="68" height="99" rx="14"/><path d="M26 35h68M38 23h19M45 95h30M45 101h30"/><circle cx="80" cy="23" r="2.5" fill="currentColor"/><rect x="36" y="45" width="48" height="37" rx="6"/><g opacity=${e?"1":".2"}>${z`<path d="M60 76c-14-6-12-16-7-23 0 7 4 8 6 3 1-4 4-7 4-7s-1 8 5 13c7 7 1 12-8 14Z"/>`}</g></svg>`}metric(t,e,i,s=""){return l`<button class="metric" @click=${()=>this.info(i)}><small>${t}</small><strong>${this.formatted(e)}<span class="unit">${s}</span></strong></button>`}render(){if(!this.hass||!this.config)return l``;let t=this.config,e=ki(t),i=xe(this.hass,t),s=Si(this.hass,i.timer_entity),r=L(this.hass,t.pellet_entity,t.pellet_attribute),o=r!==null&&r<Number(t.pellet_warning_threshold??20);return l`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:stove"}></ha-icon></div><div class="heading"><h2>${t.title||"Stufa"}</h2><div class="subtitle">${t.subtitle??"Stufa a pellet"}</div></div><span class="pill">${i.badge||i.label}</span></header>
  <div class="hero">${this.illustration(i)}<div class="right"><div class="status" role="status">${i.label}</div><div class="caption">${t.hero_caption??t.title??"Stufa"}</div>${s?l`<div class="timer">${s}${this.hass.states[i.timer_entity]?.state==="paused"?" \xB7 In pausa":""}</div>`:""}</div></div>
  ${e.entity||t.pellet_entity||t.ambient_entity?l`<div class="metrics">${e.entity?this.metric(t.temperature_label||"Temperatura impostata",L(this.hass,e.entity,e.attribute),e.entity,t.temperature_unit||"\xB0C"):""}${t.pellet_entity?l`<button class="metric" @click=${()=>this.info(t.pellet_entity)}><div class="pellet-head"><small>${t.pellet_label||"Pellet"}</small>${o?l`<span class="pellet-warning">${t.pellet_warning_label||"Rabbocca"}</span>`:""}</div><strong>${r===null?"\u2014":Math.round(Math.min(100,Math.max(0,r)))}<span class="unit">%</span></strong><div class="pellet-track" role="progressbar" aria-label=${t.pellet_label||"Pellet"} aria-valuemin="0" aria-valuemax="100" aria-valuenow=${r===null?"":Math.min(100,Math.max(0,r))} aria-valuetext=${r===null?"Non disponibile":`${Math.round(r)}%`}><div class="pellet-fill" style=${`width:${r===null?0:Math.min(100,Math.max(0,r))}%`}></div></div></button>`:""}${t.ambient_entity?this.metric(t.ambient_label||"Temperatura ambiente",L(this.hass,t.ambient_entity,t.ambient_attribute),t.ambient_entity,t.temperature_unit||"\xB0C"):""}</div>`:""}
  <div class="stove-actions">${(t.controls||[]).map(n=>l`<button style=${[n.color?`color:${n.color}`:"",n.background?`background:${n.background}`:""].join(";")} ?disabled=${this.busy||!bt(this.hass,n)} @click=${()=>this.run(n)}>${n.icon?l`<ha-icon icon=${n.icon}></ha-icon>`:""}${n.name||this.hass.states[n.entity]?.attributes?.friendly_name||"Esegui"}</button>`)}</div>
  ${(t.steppers||[]).map(n=>{let c=L(this.hass,n.entity,n.attribute);return l`<div class="control"><span class="stepper-label">${n.icon?l`<ha-icon icon=${n.icon}></ha-icon>`:""}${n.name||"Valore"}</span><div class="stepper"><button aria-label=${`${n.name||"Valore"} \u2212`} ?disabled=${this.busy||!bt(this.hass,n.minus)||c!==null&&n.min!==void 0&&c<=Number(n.min)} @click=${()=>this.run(n.minus)}>−</button><span aria-live="polite">${this.formatted(c)}${n.unit||""}</span><button aria-label=${`${n.name||"Valore"} +`} ?disabled=${this.busy||!bt(this.hass,n.plus)||c!==null&&n.max!==void 0&&c>=Number(n.max)} @click=${()=>this.run(n.plus)}>+</button></div></div>`})}
  ${!t.states?.length&&!t.entity?l`<div class="empty">Apri l’editor per associare stati, sensori e script della stufa.</div>`:""}${this.feedback()}</ha-card>`}};var It=class extends k{static get styles(){return[super.styles,b`.item{border-top:1px solid var(--divider-color,#ddd);padding:14px 0;display:grid;gap:10px}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button{font-size:12px;min-width:44px}.editor details>label{margin-top:12px}.condition{padding:12px;background:var(--p-tint);border-radius:12px;display:grid;gap:10px}textarea{font:inherit;min-height:70px;width:100%}.editor .pair{align-items:start}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}}`]}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}text(t,e,i,s="text"){return l`<label>${t}<input aria-label=${t} type=${s} .value=${String(e??"")} @change=${r=>i(r.target.value)}></label>`}field(t,e,i="text"){return this.text(e,this.config[t],s=>this.emit({[t]:i==="number"?s===""?void 0:Number(s):s}),i)}select(t,e,i,s){return l`<label>${t}<select aria-label=${t} @change=${r=>s(r.target.value)}>${i.map(([r,o])=>l`<option value=${r} ?selected=${e===r}>${o}</option>`)}</select></label>`}entity(t,e,i,s){let r=Object.values(this.hass.states).filter(n=>!s||s.includes(n.entity_id.split(".")[0])).sort((n,c)=>n.entity_id.localeCompare(c.entity_id));this._entityId=(this._entityId||0)+1;let o="stove-entities-"+this._entityId;return l`<label>${t}<input aria-label=${t} list=${o} .value=${e||""} placeholder=${s?.length===1&&s[0]==="script"?"Cerca o scrivi script.nome":"Cerca per nome o scrivi entity_id"} autocomplete="off" autocapitalize="none" spellcheck="false" @change=${n=>i(n.target.value.trim())}><datalist id=${o}>${r.map(n=>l`<option value=${n.entity_id} label=${n.attributes?.friendly_name||n.entity_id}></option>`)}</datalist></label>`}updateItem(t,e,i){this.emit({[t]:(this.config[t]||[]).map((s,r)=>r===e?{...s,...i}:s)})}temperatureStepper(t,e){this.emit({steppers:(this.config.steppers||[]).map((i,s)=>({...i,show_as_temperature:s===t?e:!1}))})}stepLimit(t,e,i){let s=[...this.config.steppers||[]],r={...s[t]};i===""?delete r[e]:r[e]=Number(i),s[t]=r,this.emit({steppers:s})}reorder(t,e,i){let s=[...this.config[t]||[]],r=e+i;r<0||r>=s.length||([s[e],s[r]]=[s[r],s[e]],this.emit({[t]:s}))}tools(t,e){return l`<div class="tools"><button aria-label="Sposta prima" ?disabled=${e===0} @click=${()=>this.reorder(t,e,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${e===(this.config[t]||[]).length-1} @click=${()=>this.reorder(t,e,1)}>↓</button><button @click=${()=>this.emit({[t]:this.config[t].filter((i,s)=>s!==e)})}>Rimuovi</button></div>`}actionFields(t,e,i){let s=t||{};return l`${this.entity(i,s.entity,r=>e({...s,entity:r}),["script"])}<details><summary>Azione avanzata</summary>${this.text("Servizio opzionale (dominio.azione)",s.action,r=>{let o={...s};r?o.action=r:delete o.action,e(o)})}<p class="hint">Per uno script basta selezionarlo sopra. Dati e destinazioni personalizzati restano disponibili in YAML.</p></details>`}conditionFields(t,e,i,s){let r=o=>this.updateItem("states",e,{conditions:t.conditions.map((n,c)=>c===s?{...n,...o}:n)});return l`<div class="condition">${this.entity("Entit\xE0 da controllare",i.entity,o=>r({entity:o}))}<div class="pair">${this.select("Confronto",i.operator||"equals",[["equals","Uguale a"],["not_equals","Diverso da"]],o=>r({operator:o}))}${this.text("Stato atteso",i.state,o=>r({state:o}))}</div>${this.text("Attributo opzionale",i.attribute,o=>r({attribute:o}))}<button @click=${()=>this.updateItem("states",e,{conditions:t.conditions.filter((o,n)=>n!==s)})}>Rimuovi condizione</button></div>`}render(){if(!this.hass||!this.config)return l``;let t=this.config;return l`<div class="editor" style=${this.palette(t.color||"peach")}>
  <details open><summary>Aspetto</summary><div class="pair">${this.field("title","Titolo")}${this.field("subtitle","Sottotitolo")}</div>${this.field("hero_caption","Testo sotto lo stato")}${this.field("icon","Icona (mdi:stove)")}${this.select("Palette Pastel",t.color||"peach",[["peach","Pesca"],["blue","Blu"],["mint","Menta"],["lavender","Lavanda"],["pink","Rosa"],["amber","Ambra"],["teal","Verde acqua"],["red","Rosso"]],e=>this.emit({color:e}))}<details><summary>Colori personalizzati</summary><p class="hint">Se vuoti, seguono la palette e il tema Home Assistant. Per una card sempre bianca imposta lo sfondo a #ffffff.</p>${this.field("tint_color","Sfondo delle aree colorate")}${this.field("accent_color","Colore di disegni e comandi")}${this.field("background_color","Sfondo card (opzionale)")}${this.field("text_color","Colore testo principale (opzionale)")}${this.field("secondary_text_color","Colore testo secondario (opzionale)")}</details></details>
  <details open><summary>Sensori e pellet</summary>${this.entity("Temperatura impostata",t.temperature_entity,e=>this.emit({temperature_entity:e}),t.temperature_attribute?void 0:["sensor","counter","input_number","number"])}${this.entity("Livello pellet (%)",t.pellet_entity,e=>this.emit({pellet_entity:e}),void 0)}${this.entity("Temperatura ambiente (opzionale)",t.ambient_entity,e=>this.emit({ambient_entity:e}),t.ambient_attribute?void 0:["sensor","counter","input_number","number"])}<div class="pair">${this.field("pellet_warning_threshold","Avviso pellet sotto (%)","number")}${this.field("temperature_unit","Unit\xE0 temperatura")}</div><details><summary>Testi e attributi</summary>${this.field("temperature_label","Etichetta temperatura")}${this.field("pellet_label","Etichetta pellet")}${this.field("ambient_label","Etichetta ambiente")}${this.field("pellet_warning_label","Testo avviso pellet")}${this.field("pellet_warning_color","Colore avviso pellet")}${this.field("temperature_attribute","Attributo temperatura (opzionale)")}${this.field("pellet_attribute","Attributo pellet (opzionale)")}${this.field("ambient_attribute","Attributo ambiente (opzionale)")}</details></details>
  <details open><summary>Pulsanti (${t.controls?.length||0})</summary><p class="hint">Aggiungi le funzioni che ti servono. I pulsanti vanno a capo automaticamente e seguono la palette.</p>${(t.controls||[]).map((e,i)=>l`<div class="item"><div class="pair">${this.text("Nome pulsante",e.name,s=>this.updateItem("controls",i,{name:s}))}${this.text("Icona opzionale",e.icon,s=>this.updateItem("controls",i,{icon:s}))}</div>${this.actionFields(e,s=>this.updateItem("controls",i,s),"Script da avviare")}<details><summary>Colore di questo pulsante</summary>${this.text("Colore testo opzionale",e.color,s=>this.updateItem("controls",i,{color:s}))}${this.text("Sfondo opzionale",e.background,s=>this.updateItem("controls",i,{background:s}))}</details>${this.tools("controls",i)}</div>`)}<button @click=${()=>this.emit({controls:[...t.controls||[],{name:"Nuova funzione",entity:""}]})}>Aggiungi pulsante</button></details>
  <details open><summary>Controlli −/+ (${t.steppers?.length||0})</summary><p class="hint">Scegli l’aiutante counter o input_number modificato dagli script, poi associa uno script a ciascun tasto. Il numero mostrato viene letto dall’aiutante e segue anche le modifiche esterne. Minimo e massimo sono liberi e opzionali: lasciali vuoti se gestiti dagli script.</p>${(t.steppers||[]).map((e,i)=>l`<div class="item"><div class="pair">${this.text("Nome controllo",e.name,s=>this.updateItem("steppers",i,{name:s}))}${this.text("Unit\xE0",e.unit,s=>this.updateItem("steppers",i,{unit:s}))}</div>${this.entity("Aiutante del valore",e.entity,s=>this.updateItem("steppers",i,{entity:s}),["counter","input_number"])}<label class="check"><input type="checkbox" .checked=${!!e.show_as_temperature} @change=${s=>this.temperatureStepper(i,s.target.checked)}>Mostra questo aiutante anche come temperatura impostata</label>${this.actionFields(e.minus,s=>this.updateItem("steppers",i,{minus:s}),"Script tasto \u2212")}${this.actionFields(e.plus,s=>this.updateItem("steppers",i,{plus:s}),"Script tasto +")}<details><summary>Opzioni del controllo</summary><p class="hint">Il campo aiutante suggerisce solo counter e input_number. Puoi scrivere un ID diverso per mantenere una sorgente personalizzata già utilizzata. La spunta temperatura collega anche il riquadro in alto allo stesso valore.</p>${this.text("Icona",e.icon,s=>this.updateItem("steppers",i,{icon:s}))}${this.text("Attributo opzionale",e.attribute,s=>this.updateItem("steppers",i,{attribute:s}))}<div class="pair">${this.text("Minimo opzionale",e.min,s=>this.stepLimit(i,"min",s),"number")}${this.text("Massimo opzionale",e.max,s=>this.stepLimit(i,"max",s),"number")}</div></details>${this.tools("steppers",i)}</div>`)}<button @click=${()=>this.emit({steppers:[...t.steppers||[],{name:"Nuovo controllo",entity:"",minus:{},plus:{}}]})}>Aggiungi controllo −/+</button></details>
  <details open><summary>Stati della stufa (${t.states?.length||0})</summary><p class="hint">Le regole si leggono dall’alto: vince la prima corrispondente. Per esempio «In accensione» può richiedere sia un helper acceso sia un timer attivo. La ricerca e l’editor non avviano script.</p>${(t.states||[]).map((e,i)=>l`<div class="item"><div class="pair">${this.text("Testo stato",e.label,s=>this.updateItem("states",i,{label:s}))}${this.text("Testo badge",e.badge,s=>this.updateItem("states",i,{badge:s}))}</div>${this.select("Condizioni richieste",e.match||"all",[["all","Tutte (E)"],["any","Almeno una (O)"]],s=>this.updateItem("states",i,{match:s}))}${(e.conditions||[]).map((s,r)=>this.conditionFields(e,i,s,r))}<button @click=${()=>this.updateItem("states",i,{conditions:[...e.conditions||[],{entity:"",state:"on"}]})}>Aggiungi condizione</button>${this.entity("Timer da mostrare (opzionale)",e.timer_entity,s=>this.updateItem("states",i,{timer_entity:s}),["timer"])}${this.select("Illustrazione della fiamma",e.id||"active",[["active","Visibile"],["off","Spenta"],["cooling","Raffreddamento"]],s=>this.updateItem("states",i,{id:s}))}${this.tools("states",i)}</div>`)}<button @click=${()=>this.emit({states:[...t.states||[],{label:"Nuovo stato",badge:"Stato",match:"all",conditions:[{entity:"",state:"on"}]}]})}>Aggiungi stato</button>${this.field("fallback_label","Stato quando nessuna regola corrisponde")}${this.field("fallback_badge","Badge quando nessuna regola corrisponde")}<details><summary>Stato da un’entità</summary>${this.entity("Entit\xE0 di stato opzionale",t.entity,e=>this.emit({entity:e}))}<p class="hint">Usata dopo le regole, se nessuna corrisponde. Senza entità viene usato il testo di riserva.</p></details></details>
 </div>`}};var _e=[["mdi:power","Accensione"],["mdi:power-off","Spegnimento"],["mdi:snowflake","Raffreddamento"],["mdi:fire","Riscaldamento"],["mdi:water","Deumidificazione"],["mdi:fan","Ventilazione"],["mdi:weather-night","Notte"],["mdi:sleep","Quiet"],["mdi:air-conditioner","Climatizzatore"],["mdi:thermostat","Automatico"],["mdi:thermometer","Temperatura"],["mdi:leaf","Eco"],["mdi:fan-plus","Ventola +"],["mdi:fan-minus","Ventola \u2212"],["mdi:arrow-up-down","Oscillazione"],["mdi:timer-outline","Timer"],["mdi:plus","Aumenta"],["mdi:minus","Diminuisci"],["mdi:lightning-bolt","Turbo"],["mdi:restart","Ripristino"]],Ci=[["blue","Blu"],["mint","Menta"],["peach","Pesca"],["lavender","Lavanda"],["pink","Rosa"],["amber","Ambra"],["teal","Verde acqua"],["red","Rosso"]];function Ei(a){return!!a?.entity_id?.startsWith("sensor.")&&(a.attributes?.device_class==="temperature"||["\xB0C","\xB0F","K"].includes(a.attributes?.unit_of_measurement))}function we(a,t){return!!t?.script?.startsWith("script.")&&!!a?.states?.[t.script]&&a.states[t.script].state!=="unavailable"&&!!a?.services?.script?.turn_on}function $e(a,t){if(!t||t.startsWith("script."))return null;let e=a?.states?.[t];return!e||["unknown","unavailable"].includes(e.state)?{available:!1,label:"Non disponibile"}:{available:!0,state:e.state,label:{on:"Acceso",off:"Spento",cool:"Raffreddamento",heat:"Riscaldamento",dry:"Deumidificazione",fan_only:"Ventilazione",auto:"Automatico",heat_cool:"Automatico"}[e.state]||e.state}}function Ai(a){if(a.buttons!==void 0&&!Array.isArray(a.buttons))throw new Error("buttons deve essere una lista.");if(a.temperature_entity!==void 0&&typeof a.temperature_entity!="string")throw new Error("Il sensore temperatura deve essere un ID di entit\xE0.");for(let t of a.buttons||[]){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Pulsante non valido.");if(t.script!==void 0&&(typeof t.script!="string"||t.script&&!t.script.startsWith("script.")))throw new Error("Scegli uno script per ciascun pulsante.")}}var Lt=class extends k{static getConfigElement(){return document.createElement("pastel-script-climate-card-editor")}static getStubConfig(){return{title:"Climatizzatore",subtitle:"Clima con script",color:"blue",temperature_entity:"",buttons:[{name:"Accendi",icon:"mdi:power",script:""},{name:"Raffreddamento",icon:"mdi:snowflake",script:""},{name:"Deumidifica",icon:"mdi:water",script:""},{name:"Quiet",icon:"mdi:sleep",script:""},{name:"Spegni",icon:"mdi:power-off",script:""}]}}static get styles(){return[super.styles,b`
  .reading{font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.reading small{font-size:16px;margin-left:3px;letter-spacing:0}.climate-actions{display:flex;flex-wrap:wrap;gap:8px}.climate-button{flex:1 1 110px;min-width:90px;min-height:72px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;overflow-wrap:anywhere;line-height:1.4}.climate-button ha-icon{--mdc-icon-size:23px;flex-shrink:0}.climate-button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.climate-button small{font-size:11px;font-weight:400}.hero .right{flex:1}.sensor-info{font-size:11px;color:var(--p-muted);margin:12px 0 0;overflow-wrap:anywhere}
  @media(max-width:340px){.hero{padding:16px;gap:10px}.hero svg{width:76px;height:76px}.hero .reading{font-size:28px}}
 `]}setConfig(t){Ai(t),super.setConfig(t)}appearance(t){return[this.palette(t.color||"blue"),...Object.entries({tint_color:"--p-tint",accent_color:"--p-accent",background_color:"--p-surface",text_color:"--p-ink",secondary_text_color:"--p-muted"}).filter(([e])=>t[e]).map(([e,i])=>`${i}:${t[e]}`)].join(";")}async run(t){this.busy||!we(this.hass,t)||await this.call("script.turn_on",t.script)}render(){if(!this.hass||!this.config)return l``;let t=this.config,e=this.hass.states[t.temperature_entity],i=L(this.hass,t.temperature_entity),s=e?.attributes?.unit_of_measurement||this.hass.config?.unit_system?.temperature||"\xB0C",r=$e(this.hass,t.state_entity),o=i===null?"\u2014":new Intl.NumberFormat(this.hass.locale?.language||"it",{maximumFractionDigits:1}).format(i);return l`<ha-card style=${this.appearance(t)}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:air-conditioner"}></ha-icon></div><div class="heading"><h2>${t.title||"Climatizzatore"}</h2><div class="subtitle">${t.subtitle??"Clima con script"}</div></div>${r?l`<span class="pill">${r.label}</span>`:""}</header>
  <div class="hero">${D("climate")}<div class="right"><div class="reading" aria-live="polite">${o}<small>${s}</small></div><div class="caption">${t.temperature_label||"Temperatura ambiente"}</div></div></div>
  <div class="climate-actions">${(t.buttons||[]).map(n=>{let c=$e(this.hass,n.state_entity),d=c?.available?c.state===String(n.active_state??"on"):null;return l`<button class="climate-button" style=${n.color?this.palette(n.color):""} aria-pressed=${d===null?"undefined":String(d)} ?disabled=${this.busy||!we(this.hass,n)} @click=${()=>this.run(n)}><ha-icon icon=${n.icon||"mdi:air-conditioner"}></ha-icon><span>${n.name||this.hass.states[n.script]?.attributes?.friendly_name||"Esegui"}</span>${c?l`<small>${c.available?d?n.active_label||"Attivo":n.inactive_label||"Non attivo":"Non disponibile"}</small>`:""}</button>`})}</div>
  ${t.temperature_entity?"":l`<div class="sensor-info">Scegli il sensore di temperatura nell’editor.</div>`}${t.buttons?.length?"":l`<div class="empty">Aggiungi i pulsanti e scegli gli script nell’editor.</div>`}${this.feedback()}</ha-card>`}};var at=class extends k{static get styles(){return[super.styles,b`
  .button-editor{border-top:1px solid var(--divider-color,#ddd);padding:16px 0;display:grid;gap:12px}.button-title{display:flex;gap:8px;align-items:center;font-size:14px;font-weight:600}.button-title ha-icon{color:var(--p-accent);--mdc-icon-size:22px}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button{min-width:44px;font-size:12px}.icon-options{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-top:12px}.icon-options button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-height:64px;padding:8px 4px;font-size:11px;overflow-wrap:anywhere}.icon-options button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.icon-options ha-icon{--mdc-icon-size:22px}.editor details>label{margin-top:12px}.editor h3{margin:0}.editor .hint{margin:0}@media(max-width:400px){.editor .pair{grid-template-columns:1fr}.icon-options{grid-template-columns:repeat(3,minmax(0,1fr))}}
 `]}emit(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}text(t,e,i){return l`<label>${t}<input aria-label=${t} .value=${String(e??"")} @change=${s=>i(s.target.value)}></label>`}paletteSelect(t,e,i,s=!1){return l`<label>${t}<select aria-label=${t} @change=${r=>i(r.target.value)}>${s?l`<option value="" ?selected=${!e}>Come la card</option>`:""}${Ci.map(([r,o])=>l`<option value=${r} ?selected=${e===r}>${o}</option>`)}</select></label>`}entity(t,e,i,s,r="Cerca per nome o scrivi entity_id"){let o=Object.values(this.hass.states).filter(c=>!s||s(c)).sort((c,d)=>(c.attributes?.friendly_name||c.entity_id).localeCompare(d.attributes?.friendly_name||d.entity_id));this._entityId=(this._entityId||0)+1;let n=`script-climate-entity-${this._entityId}`;return l`<label>${t}<input aria-label=${t} list=${n} .value=${e||""} placeholder=${r} autocomplete="off" autocapitalize="none" spellcheck="false" @change=${c=>i(c.target.value.trim())}><datalist id=${n}>${o.map(c=>l`<option value=${c.entity_id} label=${c.attributes?.friendly_name||c.entity_id}></option>`)}</datalist></label>`}updateButton(t,e){this.emit({buttons:(this.config.buttons||[]).map((i,s)=>t===s?{...i,...e}:i)})}move(t,e){let i=[...this.config.buttons||[]],s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this.emit({buttons:i}))}iconPicker(t,e){let i=t.icon||"mdi:air-conditioner",s=_e.find(([r])=>r===i)?.[1]||"Personalizzata";return l`<details><summary>Icona: ${s}</summary><div class="icon-options">${_e.map(([r,o])=>l`<button aria-label=${`Icona ${o}`} aria-pressed=${String(i===r)} @click=${()=>this.updateButton(e,{icon:r})}><ha-icon icon=${r}></ha-icon><span>${o}</span></button>`)}</div></details>`}render(){if(!this.hass||!this.config)return l``;let t=this.config;return l`<div class="editor" style=${this.palette(t.color||"blue")}>
  <div class="pair">${this.text("Nome card",t.title,e=>this.emit({title:e}))}${this.text("Sottotitolo",t.subtitle,e=>this.emit({subtitle:e}))}</div>
  ${this.entity("Sensore di temperatura",t.temperature_entity,e=>this.emit({temperature_entity:e}),Ei,"Cerca un sensore di temperatura")}
  ${this.paletteSelect("Colore card",t.color||"blue",e=>this.emit({color:e}))}
  <h3>Pulsanti (${t.buttons?.length||0})</h3><p class="hint">Per ogni funzione scegli lo script, il nome e l’icona. Puoi aggiungere tutti i pulsanti che ti servono.</p>
  ${(t.buttons||[]).map((e,i)=>l`<section class="button-editor" aria-label=${`Configura ${e.name||"pulsante "+(i+1)}`}><div class="button-title"><ha-icon icon=${e.icon||"mdi:air-conditioner"}></ha-icon>${e.name||"Nuovo pulsante"}</div>${this.text("Nome pulsante",e.name,s=>this.updateButton(i,{name:s}))}${this.entity("Script del pulsante",e.script,s=>this.updateButton(i,{script:s}),s=>s.entity_id.startsWith("script."),"Cerca o scrivi script.nome")}${this.iconPicker(e,i)}${this.paletteSelect("Colore pulsante",e.color||"",s=>this.updateButton(i,{color:s}),!0)}<div class="tools"><button aria-label="Sposta pulsante prima" ?disabled=${i===0} @click=${()=>this.move(i,-1)}>↑</button><button aria-label="Sposta pulsante dopo" ?disabled=${i===(t.buttons||[]).length-1} @click=${()=>this.move(i,1)}>↓</button><button @click=${()=>this.emit({buttons:t.buttons.filter((s,r)=>i!==r)})}>Rimuovi pulsante</button></div><details><summary>Indicatore di stato opzionale</summary><p class="hint">Usa un aiutante o un sensore che indica la funzione attiva. Lo stato dello script non indica se il climatizzatore è acceso.</p>${this.entity("Entit\xE0 funzione attiva",e.state_entity,s=>this.updateButton(i,{state_entity:s}),s=>!s.entity_id.startsWith("script."))}${this.text("Stato che indica attivo",e.active_state??"on",s=>this.updateButton(i,{active_state:s}))}</details></section>`)}
  <button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuovo pulsante",script:"",icon:"mdi:power"}]})}>Aggiungi pulsante</button>
  <details><summary>Altre opzioni</summary>${this.text("Etichetta temperatura",t.temperature_label,e=>this.emit({temperature_label:e}))}${this.entity("Stato del climatizzatore (opzionale)",t.state_entity,e=>this.emit({state_entity:e}),e=>!e.entity_id.startsWith("script."))}<p class="hint">Il badge compare solo se associ un’entità di stato reale. Un sensore non classificato come temperatura può essere inserito scrivendone l’ID.</p>${this.text("Icona intestazione opzionale",t.icon,e=>this.emit({icon:e}))}<details><summary>Colori personalizzati</summary>${[["background_color","Sfondo card"],["tint_color","Sfondo aree colorate"],["accent_color","Colore disegno e comandi"],["text_color","Testo principale"],["secondary_text_color","Testo secondario"]].map(([e,i])=>this.text(i,t[e],s=>this.emit({[e]:s})))}</details></details>
 </div>`}};var G=[{action:"alarm_arm_home",name:"In Casa",state:"armed_home",feature:1,icon:"mdi:home"},{action:"alarm_arm_night",name:"Notte",state:"armed_night",feature:4,icon:"mdi:weather-night"},{action:"alarm_arm_away",name:"Fuori Casa",state:"armed_away",feature:2,icon:"mdi:walk"},{action:"alarm_disarm",name:"Disattiva",state:"disarmed",feature:0,icon:"mdi:shield-off"},{action:"alarm_arm_vacation",name:"Vacanza",state:"armed_vacation",feature:32,icon:"mdi:airplane"},{action:"alarm_arm_custom_bypass",name:"Personalizzata",state:"armed_custom_bypass",feature:16,icon:"mdi:shield-half-full"},{action:"alarm_trigger",name:"Attiva sirena",state:"triggered",feature:8,icon:"mdi:alarm-light"}],ke=[["mdi:shield","Allarme"],["mdi:home","In Casa"],["mdi:weather-night","Notte"],["mdi:walk","Fuori Casa"],["mdi:shield-off","Disattiva"],["mdi:shield-lock","Protezione"],["mdi:shield-home","Perimetrale"],["mdi:airplane","Vacanza"],["mdi:alarm-light","Sirena"],["mdi:door-open","Porta"],["mdi:window-open","Finestra"],["mdi:smoke-detector","Fumo"],["mdi:molecule-co2","CO\u2082"],["mdi:molecule-co","CO"],["mdi:gas-cylinder","Gas"],["mdi:motion-sensor","Movimento"],["mdi:water-alert","Acqua"],["mdi:lock","Serratura"],["mdi:bell-outline","Notifica"],["mdi:view-dashboard-outline","Riepilogo"]],Se={disarmed:["Disattivato","Sistema non inserito"],armed_home:["In Casa","Protezione in casa"],armed_night:["Notte","Protezione notturna"],armed_away:["Fuori Casa","Protezione durante l\u2019assenza"],armed_vacation:["Vacanza","Protezione durante l\u2019assenza"],armed_custom_bypass:["Personalizzata","Protezione personalizzata"],arming:["In attivazione\u2026","Inserimento in corso"],disarming:["Disattivazione\u2026","Disinserimento in corso"],pending:["In attesa\u2026","Attesa del sistema"],triggered:["Allarme!","Segnalazione dal sistema"]};function Mi(a){return!!a&&["sensor","binary_sensor"].includes(a.entity_id?.split(".")[0])&&["smoke","gas","carbon_monoxide","carbon_dioxide","safety","problem"].includes(a.attributes?.device_class)}function ze(a,t){if(!t)return{label:"Da associare",detail:"Seleziona il pannello allarme",unknown:!0};let e=a?.states?.[t];if(!e||["unknown","unavailable"].includes(e.state))return{label:"Non disponibile",detail:"Dati non disponibili",unknown:!0};let i=Se[e.state];return{state:e.state,label:i?.[0]||e.state,detail:i?.[1]||"Stato del pannello",unknown:!i,alert:e.state==="triggered",waiting:["arming","disarming","pending"].includes(e.state)}}function Ce(a,t,e){let i=a?.states?.[t],s=G.find(r=>r.action===e);return!!t?.startsWith("alarm_control_panel.")&&!!i&&!["unknown","unavailable"].includes(i.state)&&!!s&&(!s.feature||(Number(i.attributes?.supported_features||0)&s.feature)!==0)&&!!a?.services?.alarm_control_panel?.[e]}function Ee(a,t,e){return e.kind==="script"?!!e.script?.startsWith("script.")&&!!a?.states?.[e.script]&&a.states[e.script].state!=="unavailable"&&!!a?.services?.script?.turn_on:Ce(a,t.entity,e.action)}function Ti(a,t,e){if(e.kind==="script")return!1;let i=a?.states?.[t.entity]?.attributes||{};return!!i.code_format&&(e.action==="alarm_disarm"||e.action==="alarm_trigger"||i.code_arm_required!==!1)}function Pi(a,t){if(t.kind==="alarm"){let o=ze(a,t.entity);return{...o,value:o.label,detail:o.unknown?o.detail:o.alert?"Segnalazione attiva":o.waiting?"Operazione in corso":o.state==="disarmed"?"Sistema non inserito":"Allarme inserito"}}if(t.kind==="count"){let o=L(a,t.entity,t.attribute),n=o!==null&&Number.isInteger(o)&&o>=0;return{value:n?String(o):"\u2014",detail:n?o===0?t.zero_label||"Tutte chiuse":t.open_label||"Aperture rilevate":"Dati non disponibili",unknown:!n,attention:n&&o>0}}let e=t.entities||[];if(!e.length)return{value:"Da associare",detail:"Sensori non configurati",unknown:!0};let i=!1,s=!1,r=!1;for(let o of e){let n=a?.states?.[o];if(!n||["unknown","unavailable"].includes(n.state)){i=!0;continue}if(n.state===String(t.active_state??"on")){r=!0;continue}if(n.state===String(t.normal_state??"off"))continue;let c=L(a,o),d=t.threshold===void 0||t.threshold===null||String(t.threshold).trim()===""?null:Number(t.threshold);if(c===null){i=!0;continue}if(d===null||!Number.isFinite(d)){s=!0;continue}c>=d&&(r=!0)}return r?{value:t.alert_label||"Segnalazione",detail:i||s?"Segnalazione \xB7 dati parziali":"Controlla i sensori",alert:!0,unknown:i||s}:i||s?{value:s?"Imposta soglia":"Non disponibile",detail:s?"Soglia per il sensore numerico":"Dati non disponibili",unknown:!0}:{value:t.normal_label||"OK",detail:"Nessuna segnalazione",unknown:!1}}function Ni(a){return a.some(t=>t.alert)?"Segnalazione":a.some(t=>t.attention)?"Aperture rilevate":a.some(t=>t.unknown)?"Dati parziali":a.some(t=>t.waiting)?"Operazione in corso":a.length?"Nessuna segnalazione":"Da configurare"}function Ii(a){if(a.entity!==void 0&&(typeof a.entity!="string"||a.entity&&!a.entity.startsWith("alarm_control_panel.")))throw new Error("Scegli un pannello alarm_control_panel.");if(a.buttons!==void 0&&!Array.isArray(a.buttons))throw new Error("buttons deve essere una lista.");for(let t of a.buttons||[]){if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Pulsante non valido.");if(t.kind&&!["script","panel"].includes(t.kind))throw new Error("Scegli Pannello allarme oppure Script.");if(t.script!==void 0&&(typeof t.script!="string"||t.script&&!t.script.startsWith("script.")))throw new Error("Scegli uno script valido.");if(t.action&&!G.some(e=>e.action===t.action))throw new Error("Comando allarme non valido.")}}function Li(a){if(a.tiles!==void 0&&!Array.isArray(a.tiles))throw new Error("tiles deve essere una lista.");for(let t of a.tiles||[]){if(!t||!["alarm","count","detector"].includes(t.kind))throw new Error("Tipo di riquadro non valido.");if(t.entities!==void 0&&(!Array.isArray(t.entities)||t.entities.some(e=>typeof e!="string")))throw new Error("I sensori devono essere una lista di entit\xE0.");if(t.threshold!==void 0&&!Number.isFinite(Number(t.threshold)))throw new Error("Soglia numerica non valida.")}}var Rt=class extends k{static get properties(){return{...super.properties,_pending:{},_pin:{}}}static getConfigElement(){return document.createElement("pastel-alarm-card-editor")}static getStubConfig(){return{title:"Protego",subtitle:"Sistema allarme",entity:"",color:"blue",buttons:G.slice(0,4).map(t=>({name:t.name,kind:"panel",action:t.action,state:t.state,icon:t.icon}))}}static get styles(){return[super.styles,b`.alarm-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.alarm-actions button{min-height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;overflow-wrap:anywhere}.alarm-actions ha-icon{--mdc-icon-size:21px}.alarm-actions button[aria-pressed=true]{box-shadow:inset 0 0 0 2px var(--p-accent)}.danger{color:var(--error-color,#963f3b)}.code-form{display:grid;gap:10px;padding-top:16px}.code-form label{display:grid;gap:7px;font-size:13px}.code-actions{display:flex;gap:8px}.code-actions button{flex:1}.code-form input{width:100%}.hero .right{flex:1}@media(max-width:340px){.hero{padding:16px}.hero svg{width:76px;height:76px}}`]}setConfig(t){Ii(t),this._pending=null,this._pin="",super.setConfig(t)}disconnectedCallback(){this._pin="",this._pending=null,super.disconnectedCallback()}async run(t,e){if(!(this.busy||!Ee(this.hass,this.config,t))){if(Ti(this.hass,this.config,t)&&!e){this._pending=t,this._pin="",this.error="";return}return this._pending=null,this._pin="",t.kind==="script"?this.call("script.turn_on",t.script):this.call(`alarm_control_panel.${t.action}`,this.config.entity,e?{code:e}:{})}}render(){if(!this.hass||!this.config)return l``;let t=this.config,e=ze(this.hass,t.entity),i=this._pending,s=this.hass.states[t.entity]?.attributes?.code_format==="number";return l`<ha-card style=${this.palette(t.color||"blue")}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:shield"}></ha-icon></div><div class="heading"><h2>${t.title||"Protego"}</h2><div class="subtitle">${t.subtitle??"Sistema allarme"}</div></div><span class=${e.alert?"pill danger":"pill"}>${e.label}</span></header><div class="hero">${D("alarm")}<div class="right"><div class=${e.alert?"status danger":"status"} role="status">${e.label}</div><div class="caption">${e.detail}</div></div></div><div class="alarm-actions">${(t.buttons||[]).map(r=>l`<button style=${r.color?this.palette(r.color):""} aria-pressed=${String(!!r.state&&!e.unknown&&r.state===e.state)} ?disabled=${this.busy||!Ee(this.hass,t,r)} @click=${()=>this.run(r)}><ha-icon icon=${r.icon||"mdi:shield"}></ha-icon><span>${r.name||"Esegui"}</span></button>`)}</div>
 ${i?l`<form class="code-form" @submit=${r=>{r.preventDefault();let o=this._pin;o?.trim()&&this.run(i,o)}}><label>Codice del pannello<input type="password" aria-label="Codice del pannello" inputmode=${s?"numeric":"text"} autocomplete="off" .value=${this._pin||""} @input=${r=>{this._pin=r.target.value}}></label><div class="code-actions"><button type="button" @click=${()=>{this._pending=null,this._pin=""}}>Annulla</button><button type="submit" ?disabled=${!this._pin?.trim()||this.busy}>Invia comando</button></div></form>`:""}${t.entity?"":l`<div class="empty">Scegli il pannello nell’editor. Ogni tasto può usare il pannello oppure uno script.</div>`}${this.feedback()}</ha-card>`}};var Ot=class extends k{static getConfigElement(){return document.createElement("pastel-security-card-editor")}static getStubConfig(){return{title:"Riepilogo sicurezza",subtitle:"Stato della casa",color:"mint",tiles:[{kind:"alarm",name:"Sistema allarme",entity:"",icon:"mdi:shield-check"},{kind:"count",name:"Porte aperte",entity:"",icon:"mdi:door-open"},{kind:"count",name:"Finestre aperte",entity:"",icon:"mdi:window-open"},{kind:"detector",name:"Fumo e CO\u2082",entities:[],icon:"mdi:smoke-detector"}]}}static get styles(){return[super.styles,b`.security-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.security-metric{padding:14px;border:1px solid var(--divider-color,#e8ebed);border-radius:16px;min-height:112px;min-width:0}.metric-heading{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--p-muted);line-height:1.5;min-height:20px}.metric-heading ha-icon{--mdc-icon-size:18px;flex-shrink:0;color:var(--p-accent)}.security-metric strong{display:block;font-size:24px;font-weight:550;letter-spacing:-.5px;line-height:1.3;margin-top:10px;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.security-metric small{display:block;font-size:11px;line-height:1.5;color:var(--p-muted);margin-top:5px}.security-metric.words strong{font-size:18px;letter-spacing:-.2px;margin-top:13px}.security-metric.alert strong{color:var(--error-color,#963f3b)}.security-metric.attention strong{color:var(--warning-color,#786022)}.security-metric.unknown strong{color:var(--p-muted)}.security-metric.alert.unknown strong{color:var(--error-color,#963f3b)}`]}setConfig(t){Li(t),super.setConfig(t)}render(){if(!this.hass||!this.config)return l``;let t=this.config,e=t.tiles||[],i=e.map(s=>Pi(this.hass,s));return l`<ha-card style=${this.palette(t.color||"mint")}><header><div class="icon"><ha-icon icon=${t.icon||"mdi:view-dashboard-outline"}></ha-icon></div><div class="heading"><h2>${t.title||"Riepilogo sicurezza"}</h2><div class="subtitle">${t.subtitle??"Stato della casa"}</div></div><span class="pill" role="status">${Ni(i)}</span></header><div class="security-metrics" aria-live="polite">${e.map((s,r)=>{let o=i[r];return l`<div class=${`security-metric ${s.kind==="count"?"":"words"} ${o.alert?"alert":""} ${o.attention?"attention":""} ${o.unknown?"unknown":""}`} style=${s.color?this.palette(s.color):""}><div class="metric-heading"><ha-icon icon=${s.icon||(s.kind==="alarm"?"mdi:shield-check":s.kind==="count"?"mdi:door-open":"mdi:smoke-detector")}></ha-icon><span>${s.name||"Stato"}</span></div><strong>${o.value}</strong><small>${o.detail}</small></div>`})}</div>${e.length?"":l`<div class="empty">Aggiungi i riquadri dall’editor.</div>`}</ha-card>`}};var jt=class extends at{select(t,e,i,s){return l`<label>${t}<select aria-label=${t} @change=${r=>s(r.target.value)}>${i.map(([r,o])=>l`<option value=${r} ?selected=${r===e}>${o}</option>`)}</select></label>`}iconChoices(t,e){let i=t||"mdi:shield",s=ke.find(([r])=>r===i)?.[1]||"Personalizzata";return l`<details><summary>Icona: ${s}</summary><div class="icon-options">${ke.map(([r,o])=>l`<button aria-label=${`Icona ${o}`} aria-pressed=${String(i===r)} @click=${()=>e(r)}><ha-icon icon=${r}></ha-icon><span>${o}</span></button>`)}</div></details>`}updateItem(t,e,i){this.emit({[t]:(this.config[t]||[]).map((s,r)=>r===e?{...s,...i}:s)})}itemTools(t,e){return l`<div class="tools"><button aria-label="Sposta prima" ?disabled=${e===0} @click=${()=>this.reorder(t,e,-1)}>↑</button><button aria-label="Sposta dopo" ?disabled=${e===(this.config[t]||[]).length-1} @click=${()=>this.reorder(t,e,1)}>↓</button><button @click=${()=>this.emit({[t]:this.config[t].filter((i,s)=>e!==s)})}>Rimuovi</button></div>`}reorder(t,e,i){let s=[...this.config[t]||[]],r=e+i;r<0||r>=s.length||([s[e],s[r]]=[s[r],s[e]],this.emit({[t]:s}))}heading(t,e){let i=this.config;return l`<div class="pair">${this.text("Nome card",i.title??t,s=>this.emit({title:s}))}${this.text("Sottotitolo",i.subtitle,s=>this.emit({subtitle:s}))}</div>${this.paletteSelect("Colore card",i.color||e,s=>this.emit({color:s}))}`}number(t,e,i){return l`<label>${t}<input aria-label=${t} type="number" step="any" .value=${String(e??"")} @change=${s=>i(s.target.value===""?void 0:Number(s.target.value))}></label>`}},Bt=class extends jt{render(){if(!this.hass||!this.config)return l``;let t=this.config;return l`<div class="editor" style=${this.palette(t.color||"blue")}>${this.heading("Protego","blue")}${this.entity("Pannello allarme",t.entity,e=>this.emit({entity:e}),e=>e.entity_id.startsWith("alarm_control_panel."))}<h3>Pulsanti (${t.buttons?.length||0})</h3><p class="hint">Ogni pulsante può usare una funzione del pannello oppure uno script. Lo stato mostrato viene sempre dal pannello.</p>
 ${(t.buttons||[]).map((e,i)=>l`<section class="button-editor"><div class="button-title"><ha-icon icon=${e.icon||"mdi:shield"}></ha-icon>${e.name||"Nuovo pulsante"}</div>${this.text("Nome pulsante",e.name,s=>this.updateItem("buttons",i,{name:s}))}${this.select("Tipo di comando",e.kind||"panel",[["panel","Pannello allarme"],["script","Script"]],s=>this.updateItem("buttons",i,{kind:s}))}
 ${e.kind==="script"?this.entity("Script del pulsante",e.script,s=>this.updateItem("buttons",i,{script:s}),s=>s.entity_id.startsWith("script."),"Cerca o scrivi script.nome"):this.select("Funzione del pannello",e.action||"",[["","Scegli una funzione"],...G.map(s=>[s.action,s.name+(t.entity&&!Ce(this.hass,t.entity,s.action)?" \xB7 non disponibile":"")])],s=>{let r=G.find(o=>o.action===s);this.updateItem("buttons",i,{action:s,state:r?.state||""})})}
 ${this.iconChoices(e.icon,s=>this.updateItem("buttons",i,{icon:s}))}${this.paletteSelect("Colore pulsante",e.color||"",s=>this.updateItem("buttons",i,{color:s}),!0)}${this.itemTools("buttons",i)}<details><summary>Evidenziazione del pulsante</summary>${this.select("Stato del pannello da evidenziare",e.state||"",[["","Nessuno"],...Object.entries(Se).map(([s,r])=>[s,r[0]])],s=>this.updateItem("buttons",i,{state:s}))}</details></section>`)}
 <button @click=${()=>this.emit({buttons:[...t.buttons||[],{name:"Nuovo pulsante",kind:"script",script:"",icon:"mdi:shield"}]})}>Aggiungi pulsante</button></div>`}},Ft=class extends jt{render(){if(!this.hass||!this.config)return l``;let t=this.config;return l`<div class="editor" style=${this.palette(t.color||"mint")}>${this.heading("Riepilogo sicurezza","mint")}<h3>Riquadri (${t.tiles?.length||0})</h3>
 ${(t.tiles||[]).map((e,i)=>l`<section class="button-editor"><div class="button-title"><ha-icon icon=${e.icon||"mdi:shield"}></ha-icon>${e.name||"Nuovo riquadro"}</div>${this.text("Nome riquadro",e.name,s=>this.updateItem("tiles",i,{name:s}))}${this.select("Tipo di dato",e.kind,[["alarm","Stato allarme"],["count","Conteggio aperture"],["detector","Sensori fumo, gas o segnalazione"]],s=>this.updateItem("tiles",i,{kind:s}))}
 ${e.kind==="alarm"?this.entity("Pannello allarme",e.entity,s=>this.updateItem("tiles",i,{entity:s}),s=>s.entity_id.startsWith("alarm_control_panel.")):e.kind==="count"?l`${this.entity("Entit\xE0 del conteggio",e.entity,s=>this.updateItem("tiles",i,{entity:s}),s=>["sensor","counter","input_number","number"].includes(s.entity_id.split(".")[0]))}<details><summary>Testi e attributo</summary>${this.text("Testo con zero aperture",e.zero_label,s=>this.updateItem("tiles",i,{zero_label:s}))}${this.text("Testo con aperture rilevate",e.open_label,s=>this.updateItem("tiles",i,{open_label:s}))}${this.text("Attributo opzionale",e.attribute,s=>this.updateItem("tiles",i,{attribute:s}))}</details>`:l`<p class="hint">Associa i sensori reali. Con un sensore numerico imposta la soglia di segnalazione; senza dati non viene mostrato OK. Per soglie diverse usa riquadri distinti; puoi scrivere l’ID di un sensore non classificato.</p>${(e.entities||[]).map(s=>l`<div class="control"><span>${this.hass.states[s]?.attributes?.friendly_name||s}</span><button @click=${()=>this.updateItem("tiles",i,{entities:e.entities.filter(r=>r!==s)})}>Rimuovi sensore</button></div>`)}${this.entity("Sensore da aggiungere","",s=>{s&&!e.entities?.includes(s)&&this.updateItem("tiles",i,{entities:[...e.entities||[],s]})},Mi)}${this.number("Soglia sensori numerici (\u2265)",e.threshold,s=>this.updateItem("tiles",i,{threshold:s}))}<details><summary>Stati e testi personalizzati</summary>${this.text("Stato attivo",e.active_state??"on",s=>this.updateItem("tiles",i,{active_state:s}))}${this.text("Stato normale",e.normal_state??"off",s=>this.updateItem("tiles",i,{normal_state:s}))}${this.text("Testo segnalazione",e.alert_label,s=>this.updateItem("tiles",i,{alert_label:s}))}${this.text("Testo normale",e.normal_label,s=>this.updateItem("tiles",i,{normal_label:s}))}</details>`}
 ${this.iconChoices(e.icon,s=>this.updateItem("tiles",i,{icon:s}))}${this.paletteSelect("Colore riquadro",e.color||"",s=>this.updateItem("tiles",i,{color:s}),!0)}${this.itemTools("tiles",i)}</section>`)}
 <button @click=${()=>this.emit({tiles:[...t.tiles||[],{kind:"count",name:"Nuovo riquadro",entity:"",icon:"mdi:door-open"}]})}>Aggiungi riquadro</button></div>`}};var Ri=`
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
`;function y(a,t){if(customElements.get(a)){console.warn(`Pastel UI: ${a} gi\xE0 caricato. Rimuovi la vecchia risorsa per usare la versione della suite.`);return}if(a.endsWith("-editor")){customElements.define(a,t);return}if(typeof t.prototype.requestUpdate=="function"){class i extends t{static get styles(){return[super.styles,b([Ri])]}}customElements.define(a,i)}else{class i extends t{_render(...r){let o=super._render(...r);if(this.shadowRoot&&!this.shadowRoot.querySelector("[data-pastel-polish]")){let n=document.createElement("style");n.dataset.pastelPolish="",n.textContent=Ri,this.shadowRoot.append(n)}return o}}customElements.define(a,i)}}var Oi=new WeakMap,E=re(a=>t=>{if(!(t instanceof O))throw new Error("unsafeHTML can only be used in text bindings");let e=Oi.get(t);if(e!==void 0&&it(a)&&a===e.value&&t.value===e.fragment)return;let i=document.createElement("template");i.innerHTML=a;let s=document.importNode(i.content,!0);t.setValue(s),Oi.set(t,{value:a,fragment:s})});var Vt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",glow:"#fef08a",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",glow:"#dbeafe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",glow:"#dcfce7",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",glow:"#fdf2f8",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",glow:"#ede9fe",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",glow:"#fef2f2",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",glow:"#d1fae5",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",glow:"#fff7ed",text:"#d9762a"}},ji=Object.keys(Vt);function xs(a){return Vt[a]||Vt.amber}function ys(a,t,e=56){let i=t?a.light:"#d8dde3",s=t?a.base:"#b8c0cc",r=t?a.glow:"#eef0f3",o=t?a.light:"#c7cdd6",n=t?a.base:"#aab1bd",c=t?a.text:"#8b93a1",d=Math.round(e*1.32);return`
    <svg width="${e}" height="${d}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 22 C8 14 14 8 22 8 C30 8 36 14 36 22 C36 29 32 33 30 37 L14 37 C12 33 8 29 8 22Z"
            fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <ellipse cx="22" cy="21" rx="8" ry="7" fill="${r}" opacity="0.65"/>
      <path d="M17 28 Q20 24 22 27 Q24 30 27 26" stroke="${s}" stroke-width="1.5"
            stroke-linecap="round" fill="none" opacity="0.8"/>
      <rect x="14" y="37" width="16" height="3" rx="1.5" fill="${o}"/>
      <rect x="15" y="40" width="14" height="3" rx="1.5" fill="${n}"/>
      <rect x="16" y="43" width="12" height="3" rx="1.5" fill="${c}"/>
    </svg>`}var Ae=class extends x{static get properties(){return{hass:{},config:{},_expandedEntity:{state:!0}}}static getStubConfig(){return{title:"Esterni",subtitle:"Luci esterne",icon:"mdi:outdoor-lamp",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 luce (entities: [...])");this.config={title:t.title||"Luci",subtitle:t.subtitle||"",icon:t.icon||"mdi:lightbulb-group",color:ji.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-lights-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],r=s&&s.attributes.icon;return r||(e?"mdi:lightbulb":"mdi:lightbulb-outline")}_isDimmable(t){let e=this.hass.states[t];return e?(e.attributes.supported_color_modes||[]).some(s=>["brightness","color_temp","hs","rgb","rgbw","rgbww","xy"].includes(s)):!1}_brightnessPct(t){let e=this.hass.states[t];if(!e||e.state!=="on")return 0;let i=e.attributes.brightness;return i==null?100:Math.round(i/255*100)}_toggleEntity(t,e){e&&e.stopPropagation(),this.hass.callService("homeassistant","toggle",{entity_id:t})}_toggleAll(){let t=this._entityIds(),e=t.some(i=>this.hass.states[i]&&this.hass.states[i].state==="on");this.hass.callService("homeassistant",e?"turn_off":"turn_on",{entity_id:t})}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}_setBrightness(t,e){this.hass.callService("light","turn_on",{entity_id:t,brightness_pct:Math.round(e)})}_cancelPress(){clearTimeout(this._pressTimer),this._press=null}_onPointerDown(t,e){this._cancelPress(),!(e.isPrimary===!1||e.button!==0)&&(this._press={id:t,pointerId:e.pointerId,x:e.clientX,y:e.clientY,held:!1},t&&(this._pressTimer=setTimeout(()=>{this._press&&(this._press.held=!0,this._showMoreInfo(t))},500)))}_onPointerMove(t){let e=this._press;e&&e.pointerId===t.pointerId&&Math.hypot(t.clientX-e.x,t.clientY-e.y)>10&&this._cancelPress()}_onPointerUp(t,e){this._onPointerMove(e);let i=this._press;this._cancelPress(),!(!i||i.id!==t||i.pointerId!==e.pointerId||i.held)&&(t?this._toggleEntity(t,e):this._toggleAll())}_onKeyDown(t,e){e.repeat||!["Enter"," "].includes(e.key)||(e.preventDefault(),t?this._toggleEntity(t,e):this._toggleAll())}disconnectedCallback(){this._cancelPress(),this._sliderCleanup&&this._sliderCleanup(),super.disconnectedCallback()}_onSliderPointerDown(t,e){if(e.stopPropagation(),this._cancelPress(),this._sliderCleanup&&this._sliderCleanup(),e.isPrimary===!1||e.button!==0)return;let i=e.currentTarget,s=i.getBoundingClientRect(),r=this._brightnessPct(t),o=!1,n=u=>{r=Math.round(Math.min(100,Math.max(1,(u-s.left)/s.width*100))),i.style.setProperty("--slider-value",`${r}%`),i.setAttribute("aria-valuenow",r)},c=()=>{window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",p),window.removeEventListener("blur",c),i.style.removeProperty("--slider-value"),i.setAttribute("aria-valuenow",this._brightnessPct(t)),this._sliderCleanup=null},d=u=>{if(u.pointerId!==e.pointerId)return;let f=Math.abs(u.clientX-e.clientX),g=Math.abs(u.clientY-e.clientY);if(!o&&g>10&&g>=f){c();return}f>10&&(o=!0),o&&n(u.clientX)},h=u=>{if(u.pointerId!==e.pointerId)return;let f=Math.abs(u.clientX-e.clientX),g=Math.abs(u.clientY-e.clientY);if(!o&&g>10){c();return}n(u.clientX),c(),this._setBrightness(t,r)},p=u=>{u.pointerId===e.pointerId&&c()};this._sliderCleanup=c,window.addEventListener("pointermove",d),window.addEventListener("pointerup",h),window.addEventListener("pointercancel",p),window.addEventListener("blur",c)}_onSliderKeyDown(t,e){let i={ArrowRight:5,ArrowUp:5,ArrowLeft:-5,ArrowDown:-5}[e.key];if(i===void 0&&!["Home","End"].includes(e.key))return;e.preventDefault(),e.stopPropagation();let s=e.key==="Home"?1:e.key==="End"?100:Math.min(100,Math.max(1,this._brightnessPct(t)+i));this._setBrightness(t,s)}render(){if(!this.config||!this.hass)return l``;let t=xs(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),s=i.filter(c=>this.hass.states[c].state==="on").length,r=i.length,o=r?Math.round(s/r*100):0,n=s>0;return l`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-glow:${t.glow}; --c-text:${t.text};">

        <div class="header" role="button" tabindex="0"
          aria-label=${n?"Spegni tutte le luci":"Accendi tutte le luci"}
          @pointerdown=${c=>this._onPointerDown(null,c)}
          @pointermove=${c=>this._onPointerMove(c)}
          @pointerup=${c=>this._onPointerUp(null,c)}
          @pointercancel=${()=>this._cancelPress()}
          @pointerleave=${()=>this._cancelPress()}
          @keydown=${c=>this._onKeyDown(null,c)}>

          <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle||(n?"Tocca per spegnere tutto":"Tocca per accendere tutto")}</div>
          </div>
        </div>

        <div class="panel summary">
          <div class="summary-row">
            ${E(ys(t,n,56))}
            <div class="count-block">
              <div class="count">${s}<span class="count-total">/${r}</span></div>
              <div class="count-label">luci accese</div>
            </div>
          </div>
          ${this.config.show_progress_bar?l`
            <div class="progress-track">
              <div class="progress-fill" style="width:${o}%"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((c,d)=>{let h=typeof c=="string"?c:c.entity,p=this.hass.states[h];if(!p)return l`<div class="row missing">Entità non trovata: ${h}</div>`;let u=p.state==="on",f=u&&this._isDimmable(h),g=this._entityLabel(c),m=this._entityIcon(c,u),v=this._brightnessPct(h);return l`
              <div>
                <div
                  class="row ${f?"expanded":""} ${u?"is-on":""}"
                  role="button" tabindex="0" aria-pressed=${u}
                  aria-label=${`${g}: ${u?"spegni":"accendi"}`}
                  @keydown=${_=>this._onKeyDown(h,_)}
                  @pointermove=${_=>this._onPointerMove(_)}
                  @pointercancel=${()=>this._cancelPress()}
                  @pointerdown=${_=>this._onPointerDown(h,_)}
                  @pointerup=${_=>this._onPointerUp(h,_)}
                  @pointerleave=${()=>this._cancelPress()}
                >
                  <ha-icon icon=${m} style="color:${u?t.text:"var(--secondary-text-color)"}"></ha-icon>
                  <span class="row-label ${u?"":"row-label-off"}">${g}</span>
                  <span class="row-status" style="color:${u?t.text:"var(--secondary-text-color)"}">
                    ${f?l`${v}%`:u?"Acceso":"Spento"}
                  </span>
                </div>
                ${f?l`
                  <div class="slider-wrap">
                    <div class="slider-track" role="slider" tabindex="0"
                      aria-label=${`Luminosit\xE0 ${g}`} aria-valuemin="1" aria-valuemax="100" aria-valuenow=${v}
                      @keydown=${_=>this._onSliderKeyDown(h,_)}
                      @pointerdown=${_=>this._onSliderPointerDown(h,_)}>
                      <div class="slider-fill" style="width:var(--slider-value, ${v}%)"></div>
                      <div class="slider-thumb" style="left:var(--slider-value, ${v}%)"></div>
                    </div>
                  </div>
                `:""}
              </div>
              ${d<this.config.entities.length-1?l`<div class="divider"></div>`:""}
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
    `}};y("pastel-lights-card",Ae);var Me=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_entitiesChanged(t){let e=t.detail.value||[];this._config={...this._config,entities:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return l``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"light"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:lightbulb-group",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return l`
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
            ${ji.map(i=>l`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Vt[i].base}"
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
    `}};y("pastel-lights-card-editor",Me);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-lights-card",name:"Pastel Lights Card",description:"Card per il controllo luci con stile pastello, conteggio SVG e slider luminosit\xE0.",preview:!0});var Dt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"},gray:{base:"#9ca3af",light:"#e5e7eb",bg:"#f3f4f6",text:"#6b7280"}},_s=Object.keys(Dt);function ws(a){return Dt[a]||Dt.blue}function $s(a,t){return t%2!==0&&a===t-1}var Te=class extends x{static get properties(){return{hass:{},config:{},_activating:{state:!0}}}static getStubConfig(){return{title:"",buttons:[{label:"Bottone",icon:"mdi:lightning-bolt",color:"blue",action:{type:"toggle",entity_id:""}}]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title||"",buttons:Array.isArray(t.buttons)?t.buttons:[]},this._activating={}}getCardSize(){return 1+Math.ceil((this.config.buttons||[]).length/2)}static getConfigElement(){return document.createElement("pastel-button-card-editor")}async _handleTap(t,e,i){if(i&&i.stopPropagation(),!t.action)return;try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}this._activating={...this._activating,[e]:!0},setTimeout(()=>{this._activating={...this._activating,[e]:!1}},200);let s=t.action;switch(s.type){case"toggle":s.entity_id&&this.hass.callService("homeassistant","toggle",{entity_id:s.entity_id});break;case"turn_on":if(s.entity_id){let[r]=s.entity_id.split(".");this.hass.callService(r,"turn_on",{entity_id:s.entity_id})}break;case"turn_off":if(s.entity_id){let[r]=s.entity_id.split(".");this.hass.callService(r,"turn_off",{entity_id:s.entity_id})}break;case"call_service":{let[r,o]=(s.service||"").split(".");r&&o&&this.hass.callService(r,o,s.data||{});break}case"scene":s.entity_id&&this.hass.callService("scene","turn_on",{entity_id:s.entity_id});break;case"script":s.entity_id&&this.hass.callService("script","turn_on",{entity_id:s.entity_id});break;case"navigate":s.navigation_path&&(history.pushState(null,"",s.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":s.url_path&&window.open(s.url_path,s.new_tab!==!1?"_blank":"_self");break;case"more_info":if(s.entity_id){let r=new Event("hass-more-info",{bubbles:!0,composed:!0});r.detail={entityId:s.entity_id},this.dispatchEvent(r)}break;default:break}}render(){if(!this.config||!this.hass)return l``;let t=this.config.buttons||[],e=t.length;return l`
      <ha-card>
        ${this.config.title?l`
          <div class="card-title">${this.config.title}</div>
        `:""}

        <div class="button-grid">
          ${t.map((i,s)=>{let r=ws(i.color),o=$s(s,e),n=this._activating&&this._activating[s];return l`
              <button
                class="pastel-btn ${n?"activating":""}"
                style="
                  --btn-bg: ${r.bg};
                  --btn-text: ${r.text};
                  --btn-base: ${r.base};
                  --btn-light: ${r.light};
                  ${o?"grid-column: span 2;":""}
                "
                @click=${c=>this._handleTap(i,s,c)}
              >
                ${i.icon?l`
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
    `}};y("pastel-button-card",Te);var Pe=class extends x{static get properties(){return{hass:{},_config:{state:!0},_dragIndex:{state:!0},_dragOverIndex:{state:!0}}}setConfig(t){this._config={...t,buttons:[...t.buttons||[]]},this._dragIndex=null,this._dragOverIndex=null}_fireChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_addButton(){let t=[...this._config.buttons||[],{label:"Nuovo bottone",icon:"mdi:lightning-bolt",color:"blue",action:{type:"toggle",entity_id:""}}];this._config={...this._config,buttons:t},this._fireChanged()}_removeButton(t){let e=[...this._config.buttons||[]];e.splice(t,1),this._config={...this._config,buttons:e},this._fireChanged()}_updateButton(t,e,i){let s=[...this._config.buttons||[]];s[t]={...s[t],[e]:i},this._config={...this._config,buttons:s},this._fireChanged()}_updateButtonAction(t,e,i){let s=[...this._config.buttons||[]];s[t]={...s[t],action:{...s[t].action||{},[e]:i}},this._config={...this._config,buttons:s},this._fireChanged()}_onDragStart(t,e){this._dragIndex=t,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(t))}_onDragOver(t,e){e.preventDefault(),e.dataTransfer.dropEffect="move",this._dragOverIndex=t}_onDrop(t,e){if(e.preventDefault(),this._dragIndex===null||this._dragIndex===t){this._dragIndex=null,this._dragOverIndex=null;return}let i=[...this._config.buttons||[]],[s]=i.splice(this._dragIndex,1);i.splice(t,0,s),this._config={...this._config,buttons:i},this._dragIndex=null,this._dragOverIndex=null,this._fireChanged()}_onDragEnd(){this._dragIndex=null,this._dragOverIndex=null}_renderActionFields(t,e){let i=t.action?.type||"toggle",s=["toggle","turn_on","turn_off","more_info","scene","script"].includes(i),r=i==="call_service",o=i==="navigate",n=i==="url",c=i==="scene"?["scene"]:i==="script"?["script"]:void 0;return l`
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

      ${s?l`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.action?.entity_id||""}
          .includeDomains=${c}
          label="Entità"
          @value-changed=${d=>this._updateButtonAction(e,"entity_id",d.detail.value)}
        ></ha-entity-picker>
      `:""}

      ${r?l`
        <ha-textfield
          label="Servizio (es. light.turn_on)"
          .value=${t.action?.service||""}
          @change=${d=>this._updateButtonAction(e,"service",d.target.value)}
        ></ha-textfield>
        <ha-textfield
          label="Dati JSON opzionali (es. {&quot;entity_id&quot;: &quot;light.xyz&quot;})"
          .value=${t.action?.data?JSON.stringify(t.action.data):""}
          @change=${d=>{try{let h=JSON.parse(d.target.value||"{}");this._updateButtonAction(e,"data",h)}catch{}}}
        ></ha-textfield>
      `:""}

      ${o?l`
        <ha-textfield
          label="Percorso (es. /lovelace/1)"
          .value=${t.action?.navigation_path||""}
          @change=${d=>this._updateButtonAction(e,"navigation_path",d.target.value)}
        ></ha-textfield>
      `:""}

      ${n?l`
        <ha-textfield
          label="URL"
          .value=${t.action?.url_path||""}
          @change=${d=>this._updateButtonAction(e,"url_path",d.target.value)}
        ></ha-textfield>
      `:""}
    `}render(){if(!this._config||!this.hass)return l``;let t=this._config.buttons||[];return l`
      <div class="editor">

        <ha-textfield
          label="Titolo card (opzionale)"
          .value=${this._config.title||""}
          @change=${e=>{this._config={...this._config,title:e.target.value},this._fireChanged()}}
        ></ha-textfield>

        <div class="section-label">Bottoni <span class="hint">(trascina per riordinare)</span></div>

        <div class="buttons-list">
          ${t.map((e,i)=>l`
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
                  ${_s.map(s=>l`
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
    `}};y("pastel-button-card-editor",Pe);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-button-card",name:"Pastel Button Card",description:"Griglia di bottoni pastello personalizzabili: colore, icona, etichetta e azione per ogni bottone. Layout automatico 2 colonne.",preview:!0});var qt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Fi=Object.keys(qt);function ks(a){return qt[a]||qt.blue}var Ss=["auto","window","door","gate","garage","generic"],Bi={window:{closed:"mdi:window-closed-variant",open:"mdi:window-open-variant"},door:{closed:"mdi:door-closed",open:"mdi:door-open"},gate:{closed:"mdi:gate",open:"mdi:gate-open"},garage:{closed:"mdi:garage",open:"mdi:garage-open"},generic:{closed:"mdi:square-outline",open:"mdi:square"}},zs={auto:"Automatico",window:"Finestra",door:"Porta",gate:"Cancello",garage:"Basculante",generic:"Generico"};function Cs(a,t){if(a&&a!=="auto")return a;if(!t)return"generic";let e=t.attributes?.device_class;return e==="window"?"window":e==="door"?"door":e==="gate"?"gate":e==="garage_door"?"garage":(t.entity_id?.startsWith("cover."),"generic")}function Es(a){if(!a)return!1;let t=a.state;return t==="on"||t==="open"||t==="opening"||t==="true"}function As(a,t){let e=t?"1":"0",i=t?"rotate(-50)":"rotate(0)";return`
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
    </svg>`}function Ms(a,t){let e=t?"perspective(300px) rotateY(-55deg)":"perspective(300px) rotateY(0deg)",i=t?"1":"0";return`
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
    </svg>`}function Ts(a,t){let e=t?"perspective(300px) rotateY(-70deg)":"rotateY(0deg)",i=t?"perspective(300px) rotateY(70deg)":"rotateY(0deg)",s=t?"0":"1";return`
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
    </svg>`}function Ps(a,t){let e=t?"perspective(400px) rotateX(-85deg)":"rotateX(0deg)",i=t?"1":"0",s=t?"#34c472":a.base;return`
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
    </svg>`}function Ns(a,t){let e=t?a.base:a.light;return`
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
    </svg>`}function Is(a,t,e){switch(a){case"window":return As(t,e);case"door":return Ms(t,e);case"gate":return Ts(t,e);case"garage":return Ps(t,e);default:return Ns(t,e)}}function Ls(a,t,e,i){if(i)return{count:"\u2713",label:"tutto chiuso"};let s=e==="window"?"finestr"+(a===1?"a":"e"):e==="door"?a===1?"porta":"porte":e==="gate"?a===1?"cancello":"cancelli":e==="garage"?a===1?"basculante":"basculanti":a===1?"apertura":"aperture";return{count:String(a),label:`${s} aper${a===1?"t"+(e==="window"?"a":"o"):"te"}`}}function Rs(a,t,e){return e?"Casa sicura":a===1?"Una aperta":a===t?"Tutte aperte":`${a} aperte`}function Os(a,t){let e=[...a];return t==="alpha"?e.sort((i,s)=>i.name.localeCompare(s.name)):t==="open_first"?e.sort((i,s)=>(s.open?1:0)-(i.open?1:0)):t==="closed_first"?e.sort((i,s)=>(i.open?1:0)-(s.open?1:0)):e}function js(a,t){return t==="open"?a.filter(e=>e.open):t==="closed"?a.filter(e=>!e.open):a}var Ne=class extends x{static get properties(){return{hass:{},config:{},_entities:{state:!0}}}static getStubConfig(){return{title:"Porte e Finestre",subtitle:"Piano terra",icon:"mdi:home",color:"blue",opening_type:"window",show_header:!0,show_hero:!0,show_list:!0,show_badge:!0,show_counter:!0,sort:"manual",filter:"all",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title??"Aperture",subtitle:t.subtitle??"",icon:t.icon??"mdi:home",color:Fi.includes(t.color)?t.color:"blue",opening_type:t.opening_type??"window",show_header:t.show_header??!0,show_hero:t.show_hero??!0,show_list:t.show_list??!0,show_badge:t.show_badge??!0,show_counter:t.show_counter??!0,sort:t.sort??"manual",filter:t.filter??"all",entities:Array.isArray(t.entities)?t.entities:[]},this._pressTimers={},this._tapCounters={}}getCardSize(){return 3+Math.ceil((this.config.entities||[]).length/1)}static getConfigElement(){return document.createElement("pastel-openings-card-editor")}_resolveEntities(){return(this.config.entities||[]).map(t=>{let e=typeof t=="string"?t:t.entity,i=this.hass.states[e],s=Cs(typeof t=="object"?t.type:"auto",i),r=Es(i),o=Bi[s]||Bi.generic;return{id:e,obj:i,name:typeof t=="object"&&t.name?t.name:i?.attributes?.friendly_name||e,type:s,open:r,icon:r?o.open:o.closed,tap:typeof t=="object"?t.tap_action:null,hold:typeof t=="object"?t.hold_action:null,dbl:typeof t=="object"?t.double_tap_action:null}})}_dispatchAction(t,e){if(!t){this._moreInfo(e);return}try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}switch(t.type){case"more_info":this._moreInfo(t.entity_id||e);break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id||e});break;case"turn_on":{let[i]=(t.entity_id||e).split(".");this.hass.callService(i,"turn_on",{entity_id:t.entity_id||e});break}case"turn_off":{let[i]=(t.entity_id||e).split(".");this.hass.callService(i,"turn_off",{entity_id:t.entity_id||e});break}case"call_service":{let[i,s]=(t.service||"").split(".");i&&s&&this.hass.callService(i,s,t.data||{});break}case"navigate":t.navigation_path&&(history.pushState(null,"",t.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0})));break;case"url":t.url_path&&window.open(t.url_path,t.new_tab!==!1?"_blank":"_self");break;default:this._moreInfo(e)}}_moreInfo(t){if(!t)return;let e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_onPointerDown(t,e){e.stopPropagation(),!(e.isPrimary===!1||e.button!==0)&&(this._onPointerLeave(t),this._pressOrigin={id:t.id,pointerId:e.pointerId,x:e.clientX,y:e.clientY},this._pressTimers[t.id]=setTimeout(()=>{this._pressTimers[t.id]=null,this._dispatchAction(t.hold,t.id)},500))}_onPointerUp(t,e){e.stopPropagation(),this._onPointerMove(t,e),this._pressOrigin?.pointerId===e.pointerId&&this._pressTimers[t.id]&&(clearTimeout(this._pressTimers[t.id]),this._pressTimers[t.id]=null,this._tapCounters[t.id]=(this._tapCounters[t.id]||0)+1,this._tapCounters[t.id]===1&&setTimeout(()=>{this._tapCounters[t.id]===1?(this._tapCounters[t.id]=0,this._dispatchAction(t.tap,t.id)):this._tapCounters[t.id]>1&&(this._tapCounters[t.id]=0,this._dispatchAction(t.dbl,t.id))},300))}_onPointerMove(t,e){let i=this._pressOrigin;i?.id===t.id&&i.pointerId===e.pointerId&&Math.hypot(e.clientX-i.x,e.clientY-i.y)>10&&this._onPointerLeave(t)}disconnectedCallback(){Object.values(this._pressTimers||{}).forEach(clearTimeout),this._tapCounters={},super.disconnectedCallback()}_onPointerLeave(t){clearTimeout(this._pressTimers[t.id]),this._pressTimers[t.id]=null}render(){if(!this.config||!this.hass)return l``;let t=ks(this.config.color),e=this._resolveEntities(),i=Os(e,this.config.sort),s=js(i,this.config.filter),r=e.filter(g=>g.open).length,o=e.length,n=r===0,c=(()=>{let g={};return e.forEach(m=>{g[m.type]=(g[m.type]||0)+1}),Object.entries(g).sort((m,v)=>v[1]-m[1])[0]?.[0]||"generic"})(),d=c,h=!n,{count:p,label:u}=Ls(r,o,c,n),f=Rs(r,o,n);return l`
      <ha-card style="
        --c-base:${t.base};
        --c-light:${t.light};
        --c-bg:${t.bg};
        --c-text:${t.text};
      ">
        <!-- header -->
        ${this.config.show_header?l`
          <div class="header">
            <div class="header-left">
              <ha-icon icon=${this.config.icon} style="color:var(--c-base)"></ha-icon>
              <div>
                <div class="title">${this.config.title}</div>
                ${this.config.subtitle?l`<div class="subtitle">${this.config.subtitle}</div>`:""}
              </div>
            </div>
          </div>
        `:""}

        <!-- hero -->
        ${this.config.show_hero?l`
          <div class="panel-hero ${n?"hero-safe":"hero-alert"}">
            <div class="hero-row">
              <div class="hero-illustration">
                ${E(Is(d,t,h))}
              </div>
              <div class="hero-count-block">
                ${this.config.show_counter?l`
                  <div class="hero-count ${n?"count-safe":""}">${p}</div>
                `:""}
                <div class="hero-label">${u}</div>
                ${this.config.show_badge?l`
                  <div class="hero-badge ${n?"badge-safe":"badge-alert"}">${f}</div>
                `:""}
              </div>
            </div>
          </div>
        `:""}

        <!-- list -->
        ${this.config.show_list&&s.length>0?l`
          <div class="panel-list">
            ${s.map((g,m)=>l`
              ${m>0?l`<div class="divider"></div>`:""}
              <div
                class="list-row ${g.open?"row-open":""}"
                @pointerdown=${v=>this._onPointerDown(g,v)}
                @pointerup=${v=>this._onPointerUp(g,v)}
                @pointerleave=${()=>this._onPointerLeave(g)}
                @pointermove=${v=>this._onPointerMove(g,v)}
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
    `}};y("pastel-openings-card",Ne);var Ie=class extends x{static get properties(){return{hass:{},_config:{state:!0},_entityRegistry:{state:!0}}}connectedCallback(){super.connectedCallback(),this._loadEntityRegistry()}async _loadEntityRegistry(){if(this.hass)try{let t=await this.hass.connection.sendMessagePromise({type:"config/entity_registry/list"});this._entityRegistry=t}catch{this._entityRegistry=[]}}updated(t){t.has("hass")&&this.hass&&!this._entityRegistry&&this._loadEntityRegistry()}setConfig(t){this._config={...t,entities:[...t.entities||[]]}}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_set(t,e){this._config={...this._config,[t]:e},this._fire()}_addEntity(){let t=[...this._config.entities||[],{entity:"",name:"",type:"auto",tap_action:null,hold_action:null,double_tap_action:null}];this._set("entities",t)}_removeEntity(t){let e=[...this._config.entities];e.splice(t,1),this._set("entities",e)}_updateEntity(t,e,i){let s=[...this._config.entities];s[t]={...s[t],[e]:i},this._set("entities",s)}_updateEntityAction(t,e,i,s){let r=[...this._config.entities];r[t]={...r[t],[e]:{...r[t][e]||{type:"more_info"},[i]:s}},this._set("entities",r)}_onDragStart(t,e){this._dragIdx=t,e.dataTransfer.effectAllowed="move"}_onDragOver(t,e){e.preventDefault(),this._dragOver=t}_onDrop(t,e){if(e.preventDefault(),this._dragIdx===null||this._dragIdx===t){this._dragIdx=null;return}let i=[...this._config.entities],[s]=i.splice(this._dragIdx,1);i.splice(t,0,s),this._dragIdx=null,this._set("entities",i)}_renderActionField(t,e,i){let r=((this._config.entities||[])[t]||{})[e]||{type:"more_info"},o=r.type||"more_info",n=["toggle","turn_on","turn_off","more_info"].includes(o),c=o==="call_service";return l`
      <div class="action-block">
        <div class="field-label">${i}</div>
        <select class="field-select"
          .value=${o}
          @change=${d=>this._updateEntityAction(t,e,"type",d.target.value)}>
          <option value="more_info">Apri dettagli</option>
          <option value="toggle">Toggle</option>
          <option value="turn_on">Accendi</option>
          <option value="turn_off">Spegni</option>
          <option value="call_service">Chiama servizio</option>
          <option value="navigate">Naviga</option>
          <option value="url">Apri URL</option>
        </select>
        ${n?l`
          <ha-entity-picker .hass=${this.hass} .value=${r.entity_id||""}
            label="Entità"
            @value-changed=${d=>this._updateEntityAction(t,e,"entity_id",d.detail.value)}>
          </ha-entity-picker>
        `:""}
        ${c?l`
          <ha-textfield label="Servizio" .value=${r.service||""}
            @change=${d=>this._updateEntityAction(t,e,"service",d.target.value)}>
          </ha-textfield>
        `:""}
        ${o==="navigate"?l`
          <ha-textfield label="Percorso" .value=${r.navigation_path||""}
            @change=${d=>this._updateEntityAction(t,e,"navigation_path",d.target.value)}>
          </ha-textfield>
        `:""}
        ${o==="url"?l`
          <ha-textfield label="URL" .value=${r.url_path||""}
            @change=${d=>this._updateEntityAction(t,e,"url_path",d.target.value)}>
          </ha-textfield>
        `:""}
      </div>
    `}render(){if(!this._config||!this.hass)return l``;let t=this._config;return l`
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
          ${Fi.map(e=>l`
            <button class="swatch ${t.color===e?"selected":""}"
              style="background:${qt[e].base}" title=${e}
              @click=${()=>this._set("color",e)}></button>
          `)}
        </div>

        <!-- Visibilità -->
        <div class="section-label">Visibilità</div>
        <div class="toggles-grid">
          ${[["show_header","Header"],["show_hero","Hero"],["show_list","Lista"],["show_badge","Badge"],["show_counter","Contatore"]].map(([e,i])=>l`
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
          ${(t.entities||[]).map((e,i)=>l`
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
                  ${Ss.map(s=>l`
                    <option value=${s}>${zs[s]}</option>
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
    `}};y("pastel-openings-card-editor",Ie);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-openings-card",name:"Pastel Openings Card",description:"Card universale per porte, finestre, cancelli, basculanti \u2014 illustrazioni animate, filtri, ordinamento, azioni complete. Parte della suite Pastel.",preview:!0});var Ht={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Vi=Object.keys(Ht),K={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function Bs(a){return Ht[a]||Ht.amber}function Fs(a,t,e=50){let i=t?K.light:a.light,s=t?K.base:a.base,r=t?"#fef2f2":"#fffdf5",o=t?K.text:a.text,n=Math.round(e*1.36);return`
    <svg width="${e}" height="${n}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="24" height="48" rx="3" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <rect x="14" y="10" width="16" height="40" rx="1.5" fill="${r}" opacity="0.7"/>
      <circle cx="27" cy="30" r="2" fill="${o}"/>
    </svg>`}var Le=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Porte e Finestre",subtitle:"Piano terra",icon:"mdi:home",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Porte e Finestre",subtitle:t.subtitle||"",icon:t.icon||"mdi:home",color:Vi.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-doors-windows-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],r=s&&s.attributes.device_class;return r==="window"?e?"mdi:window-open-variant":"mdi:window-closed-variant":r==="garage_door"?e?"mdi:garage-open":"mdi:garage":e?"mdi:door-open":"mdi:door-closed"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return l``;let t=Bs(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),s=i.filter(c=>this.hass.states[c].state==="on").length,r=i.length,o=r?Math.round(s/r*100):0,n=s>0;return l`
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
            ${E(Fs(t,n,50))}
            <div class="count-block">
              <div class="count" style="color:${n?K.base:t.base}">
                ${s}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${n?"aperti":"tutto chiuso"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?l`
            <div class="progress-track">
              <div class="progress-fill" style="width:${o}%; background:${n?K.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((c,d)=>{let h=typeof c=="string"?c:c.entity,p=this.hass.states[h];if(!p)return l`<div class="row missing">Entità non trovata: ${h}</div>`;let u=p.state==="on",f=this._entityLabel(c),g=this._entityIcon(c,u);return l`
              <div
                class="row ${u?"alarm":""}"
                @click=${m=>this._showMoreInfo(h,m)}
              >
                <ha-icon icon=${g} style="color:${u?K.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${u?"row-label-alarm":"row-label-off"}">${f}</span>
                <span class="row-status ${u?"badge-alarm":""}" style="color:${u?K.base:"var(--secondary-text-color)"}">
                  ${u?"Aperto":"Chiuso"}
                </span>
              </div>
              ${d<this.config.entities.length-1?l`<div class="divider"></div>`:""}
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
    `}};y("pastel-doors-windows-card",Le);var Re=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return l``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:home",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return l`
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
            ${Vi.map(i=>l`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Ht[i].base}"
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
    `}};y("pastel-doors-windows-card-editor",Re);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-doors-windows-card",name:"Pastel Doors & Windows Card",description:"Card per sensori porte/finestre con stile pastello, conteggio aperti e popup dettagli al tap.",preview:!0});var Ut={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Di=Object.keys(Ut);function Vs(a){return Ut[a]||Ut.amber}function Ds(a,t,e=50){let i=a.light,s=a.base,r="#ffffff",o=a.text,n=Math.round(e*1.36);return`
    <svg width="${e}" height="${n}" viewBox="0 0 44 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="20" r="13" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <circle cx="22" cy="20" r="6" fill="${r}" opacity="0.8"/>
      <circle cx="22" cy="20" r="2.5" fill="${o}"/>
      <path d="M14 42 Q22 34 30 42 L30 50 Q22 46 14 50 Z" fill="${i}" stroke="${s}" stroke-width="1.5"/>
    </svg>`}var Oe=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Movimento e Presenza",subtitle:"Piano terra",icon:"mdi:motion-sensor",color:"amber",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Movimento e Presenza",subtitle:t.subtitle||"",icon:t.icon||"mdi:motion-sensor",color:Di.includes(t.color)?t.color:"amber",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-motion-presence-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i];return(s&&s.attributes.device_class)==="occupancy"?e?"mdi:account":"mdi:account-outline":e?"mdi:motion-sensor":"mdi:motion-sensor-off"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return l``;let t=Vs(this.config.color),i=this._entityIds().filter(c=>this.hass.states[c]),s=i.filter(c=>this.hass.states[c].state==="on").length,r=i.length,o=r?Math.round(s/r*100):0,n=s>0;return l`
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
            ${E(Ds(t,n,50))}
            <div class="count-block">
              <div class="count" style="color:${t.base}">
                ${s}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${n?"attivi":"tutto libero"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?l`
            <div class="progress-track">
              <div class="progress-fill" style="width:${o}%; background:${t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((c,d)=>{let h=typeof c=="string"?c:c.entity,p=this.hass.states[h];if(!p)return l`<div class="row missing">Entità non trovata: ${h}</div>`;let u=p.state==="on",f=this._entityLabel(c),g=this._entityIcon(c,u);return l`
              <div
                class="row ${u?"active":""}"
                @click=${m=>this._showMoreInfo(h,m)}
              >
                <ha-icon icon=${g} style="color:${u?t.text:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${u?"row-label-active":"row-label-off"}">${f}</span>
                <span class="row-status ${u?"badge-active":""}" style="color:${u?t.text:"var(--secondary-text-color)"}">
                  ${u?"Rilevato":"Libero"}
                </span>
              </div>
              ${d<this.config.entities.length-1?l`<div class="divider"></div>`:""}
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
    `}};y("pastel-motion-presence-card",Oe);var je=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return l``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:motion-sensor",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return l`
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
            ${Di.map(i=>l`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Ut[i].base}"
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
    `}};y("pastel-motion-presence-card-editor",je);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-motion-presence-card",name:"Pastel Motion & Presence Card",description:"Card per sensori di movimento/presenza con stile pastello, conteggio attivi e popup dettagli al tap.",preview:!0});var Wt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},qi=Object.keys(Wt),X={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function qs(a){return Wt[a]||Wt.amber}function Hs(a,t,e=50){let i=t?X.light:a.light,s=t?X.base:a.base,r=t?"#fef2f2":"#ffffff",o=t?X.text:a.text,n=Math.round(e*1.2);return`
    <svg width="${e}" height="${n}" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4 C22 4 8 24 8 34 C8 42.5 14.3 49 22 49 C29.7 49 36 42.5 36 34 C36 24 22 4 22 4Z"
            fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <ellipse cx="18" cy="32" rx="5" ry="7" fill="${r}" opacity="0.6"/>
      <circle cx="22" cy="36" r="2.5" fill="${o}"/>
    </svg>`}var Be=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Perdite Acqua",subtitle:"Zona Notte",icon:"mdi:water-alert",color:"blue",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Perdite Acqua",subtitle:t.subtitle||"",icon:t.icon||"mdi:water-alert",color:qi.includes(t.color)?t.color:"blue",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-water-leak-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],r=s&&s.attributes.icon;return r||(e?"mdi:water-alert":"mdi:water-check")}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return l``;let t=qs(this.config.color),e=this._entityIds(),i=e.filter(d=>this.hass.states[d]),s=i.filter(d=>this.hass.states[d].state==="on").length,r=i.length,o=r?Math.round(s/r*100):0,n=s>0,c=e.some(d=>!this.hass.states[d]||["unknown","unavailable"].includes(this.hass.states[d].state));return l`
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
            ${E(Hs(t,n,50))}
            <div class="count-block">
              <div class="count" style="color:${n?X.base:t.base}">
                ${s}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${n?"perdite rilevate":c?"dati mancanti":"tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?l`
            <div class="progress-track">
              <div class="progress-fill" style="width:${o}%; background:${n?X.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((d,h)=>{let p=typeof d=="string"?d:d.entity,u=this.hass.states[p];if(!u)return l`<div class="row missing">Entità non trovata: ${p}</div>`;let f=u.state==="on",g=this._entityLabel(d),m=this._entityIcon(d,f);return l`
              <div
                class="row ${f?"alarm":""}"
                @click=${v=>this._showMoreInfo(p,v)}
              >
                <ha-icon icon=${m} style="color:${f?X.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${f?"row-label-alarm":"row-label-off"}">${g}</span>
                <span class="row-status ${f?"badge-alarm":""}" style="color:${f?X.base:"var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(u.state)?"Non disponibile":f?"Perdita":"OK"}
                </span>
              </div>
              ${h<this.config.entities.length-1?l`<div class="divider"></div>`:""}
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
    `}};y("pastel-water-leak-card",Be);var Fe=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return l``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:water-alert",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return l`
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
            ${qi.map(i=>l`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Wt[i].base}"
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
    `}};y("pastel-water-leak-card-editor",Fe);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-water-leak-card",name:"Pastel Water Leak Card",description:"Card per sensori di perdita acqua con stile pastello, conteggio perdite e popup dettagli al tap.",preview:!0});var Yt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Hi=Object.keys(Yt),Z={base:"#dc2626",light:"#fecaca",bg:"rgba(220,38,38,0.08)",text:"#991b1b"};function Us(a){return Yt[a]||Yt.amber}function Ws(a,t,e=50){let i=t?Z.light:a.light,s=t?Z.base:a.base,r=t?"#fef2f2":"#fffdf5",o=t?Z.text:a.text,n=Math.round(e*1);return`
    <svg width="${e}" height="${n}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="22" fill="${i}" stroke="${s}" stroke-width="1.5"/>
      <circle cx="25" cy="25" r="14" fill="${r}" opacity="0.7"/>
      <circle cx="25" cy="25" r="4" fill="${o}"/>
      <path d="M25 10 L25 16 M40 25 L34 25 M25 40 L25 34 M10 25 L16 25" stroke="${s}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    </svg>`}var Ve=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Fumo e CO",subtitle:"Salotto + Quadro Ovest",icon:"mdi:smoke-detector",color:"purple",entities:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.entities))throw new Error("Devi specificare almeno un'entit\xE0 (entities: [...])");this.config={title:t.title||"Fumo e CO",subtitle:t.subtitle||"",icon:t.icon||"mdi:smoke-detector",color:Hi.includes(t.color)?t.color:"purple",entities:t.entities,show_progress_bar:t.show_progress_bar!==!1}}getCardSize(){let t=this.config&&this.config.entities?this.config.entities.length:1;return 2+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-smoke-co-card-editor")}_entityIds(){return(this.config.entities||[]).map(t=>typeof t=="string"?t:t.entity)}_entityLabel(t){let e=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.name)return t.name;let i=this.hass.states[e];return i&&i.attributes.friendly_name||e}_entityIcon(t,e){let i=typeof t=="string"?t:t.entity;if(typeof t=="object"&&t.icon)return t.icon;let s=this.hass.states[i],r=s&&s.attributes.device_class;return r==="carbon_monoxide"||r==="co"?"mdi:molecule-co2":e?"mdi:smoke-detector-variant-alert":"mdi:smoke-detector-variant"}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return l``;let t=Us(this.config.color),e=this._entityIds(),i=e.filter(d=>this.hass.states[d]),s=i.filter(d=>this.hass.states[d].state==="on").length,r=i.length,o=r?Math.round(s/r*100):0,n=s>0,c=e.some(d=>!this.hass.states[d]||["unknown","unavailable"].includes(this.hass.states[d].state));return l`
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
            ${E(Ws(t,n,50))}
            <div class="count-block">
              <div class="count" style="color:${n?Z.base:t.base}">
                ${s}<span class="count-total">/${r}</span>
              </div>
              <div class="count-label">${n?"in allarme":c?"dati mancanti":"tutto ok"}</div>
            </div>
          </div>
          ${this.config.show_progress_bar?l`
            <div class="progress-track">
              <div class="progress-fill" style="width:${o}%; background:${n?Z.base:t.base}"></div>
            </div>
          `:""}
        </div>

        <div class="panel rows">
          ${this.config.entities.map((d,h)=>{let p=typeof d=="string"?d:d.entity,u=this.hass.states[p];if(!u)return l`<div class="row missing">Entità non trovata: ${p}</div>`;let f=u.state==="on",g=this._entityLabel(d),m=this._entityIcon(d,f);return l`
              <div
                class="row ${f?"alarm":""}"
                @click=${v=>this._showMoreInfo(p,v)}
              >
                <ha-icon icon=${m} style="color:${f?Z.base:"var(--secondary-text-color)"}"></ha-icon>
                <span class="row-label ${f?"row-label-alarm":"row-label-off"}">${g}</span>
                <span class="row-status ${f?"badge-alarm":""}" style="color:${f?Z.base:"var(--secondary-text-color)"}">
                  ${["unknown","unavailable"].includes(u.state)?"Non disponibile":f?"Allarme":"OK"}
                </span>
              </div>
              ${h<this.config.entities.length-1?l`<div class="divider"></div>`:""}
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
    `}};y("pastel-smoke-co-card",Ve);var De=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return l``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"entities",selector:{entity:{multiple:!0,domain:"binary_sensor"}}},{name:"show_progress_bar",selector:{boolean:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:smoke-detector",entities:this._config.entities||[],show_progress_bar:this._config.show_progress_bar!==!1};return l`
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
            ${Hi.map(i=>l`
              <button
                class="swatch ${this._config.color===i?"selected":""}"
                style="background:${Yt[i].base}"
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
    `}};y("pastel-smoke-co-card-editor",De);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-smoke-co-card",name:"Pastel Smoke & CO Card",description:"Card per sensori fumo/CO con stile pastello, conteggio allarmi e popup dettagli al tap.",preview:!0});var Ys="1.0.0",Gt={blue:{bg:"#dbeafe",base:"#2563eb",light:"#bfdbfe",deep:"#1d4ed8",name:"Azzurro"},green:{bg:"#dcfce7",base:"#16a34a",light:"#bbf7d0",deep:"#15803d",name:"Verde"},purple:{bg:"#ede9fe",base:"#7c3aed",light:"#ddd6fe",deep:"#6d28d9",name:"Viola"},teal:{bg:"#ccfbf1",base:"#0d9488",light:"#99f6e4",deep:"#0f766e",name:"Verde acqua"},amber:{bg:"#fef3c7",base:"#d97706",light:"#fde68a",deep:"#b45309",name:"Ambra"},pink:{bg:"#fce7f3",base:"#db2777",light:"#fbcfe8",deep:"#be185d",name:"Rosa"},indigo:{bg:"#e0e7ff",base:"#4338ca",light:"#c7d2fe",deep:"#3730a3",name:"Indaco"},cyan:{bg:"#cffafe",base:"#0891b2",light:"#a5f3fc",deep:"#0e7490",name:"Ciano"}},Yi=Object.keys(Gt),Ui={"mdi:thermometer":"M15 13V5a3 3 0 00-6 0v8a5 5 0 106 0zm-3 5a3 3 0 110-6 3 3 0 010 6z","mdi:home":"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z","mdi:door":"M8 3h10a1 1 0 011 1v16a1 1 0 01-1 1H8l-3-2V5l3-2zm6 8a1 1 0 100 2 1 1 0 000-2z","mdi:sofa":"M21 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 00-2 2v5h2v1h2v-1h10v1h2v-1h2v-5a2 2 0 00-2-2zM5 7h14v2H5V7zM3 14v-3h18v3H3z","mdi:bed-double":"M19 7H5a2 2 0 00-2 2v6H1v2h22v-2h-2V9a2 2 0 00-2-2zM5 9h14v6H5V9zM7 5h4a1 1 0 010 2H7a1 1 0 010-2zm6 0h4a1 1 0 010 2h-4a1 1 0 010-2z","mdi:shower":"M21 10H7V7a2 2 0 014 0h2a4 4 0 00-8 0v3H3a1 1 0 000 2l1 5a3 3 0 003 3h10a3 3 0 003-3l1-5a1 1 0 000-2z","mdi:bathtub":"M21 10H7V7a2 2 0 014 0h2a4 4 0 00-8 0v3H3a1 1 0 000 2l1 5a3 3 0 003 3h10a3 3 0 003-3l1-5a1 1 0 000-2z","mdi:baby-carriage":"M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.4V11h1a5 5 0 015 5v1H4v-1a5 5 0 015-5h1V9.4A4 4 0 0112 2z","mdi:flower":"M17 8C8 10 5.9 16.17 3.82 19.36L5.71 21c1-1.23 1.56-2.06 2.29-3.2C8.5 17.04 9.37 17 10 17c4 0 5-2 10-2 0-4-3-7-3-7z","mdi:gamepad-variant":"M7 6h10a5 5 0 015 5v2a5 5 0 01-5 5H7a5 5 0 01-5-5v-2a5 5 0 015-5zm0 4v2h2v-2H7zm4 0v2h2v-2h-2zm5 1a1 1 0 100 2 1 1 0 000-2zm-2 2a1 1 0 100 2 1 1 0 000-2z","mdi:water":"M12 2C6 9 4 13 4 16a8 8 0 0016 0c0-3-2-7-8-14z","mdi:alert-circle":"M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z","mdi:trending-up":"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z","mdi:trending-down":"M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z","mdi:trending-neutral":"M22 12l-4-4v3H3v2h15v3z"};function Qs(a){return Ui[a]||Ui["mdi:thermometer"]}function Qt(a,t,e=16){return`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="${t}">
    <path d="${Qs(a)}"/>
  </svg>`}function Qi(a,t,e){return Math.min(e,Math.max(t,a))}function Wi(a,t,e){return Qi((a-t)/(e-t)*100,0,100)}function Gs(a,t,e){return Qi((a-t)/(e-t)*100,2,100)}function Ks(a,t,e,i){let r=Math.max(2,Math.round(Gs(a,t,e)/100*46)),o=2+(46-r);return`<svg width="32" height="76" viewBox="0 0 32 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="2" width="7" height="46" rx="3.5" fill="${i.light}"/>
    <rect x="12" y="${o}" width="7" height="${r}" rx="3.5" fill="${i.deep}" opacity="0.9"/>
    <circle cx="15.5" cy="61" r="11" fill="${i.light}"/>
    <circle cx="15.5" cy="61" r="7.5" fill="${i.deep}" opacity="0.9"/>
    <line x1="19" y1="10" x2="26" y2="10" stroke="${i.light}" stroke-width="2" stroke-linecap="round"/>
    <line x1="19" y1="19" x2="26" y2="19" stroke="${i.light}" stroke-width="2" stroke-linecap="round"/>
    <line x1="19" y1="28" x2="26" y2="28" stroke="${i.light}" stroke-width="2" stroke-linecap="round"/>
  </svg>`}async function Xs(a,t){try{let i=`history/period/${new Date(Date.now()-72e5).toISOString()}?filter_entity_id=${t}&minimal_response=true&no_attributes=true`,s=await a.callApi("GET",i);if(!s?.[0]||s[0].length<2)return null;let r=s[0],o=parseFloat(r[0].state),n=parseFloat(r[r.length-1].state);return isNaN(o)||isNaN(n)?null:n-o}catch{return null}}function Zs(a){return a===null?"":Math.abs(a)<.1?"stabile":(a>0?"+":"")+a.toFixed(1)+"\xB0"}var qe=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._trends={},this._lastFetch=0}static getConfigElement(){return document.createElement("pastel-temp-card-editor")}static getStubConfig(){return{title:"Piano Terra",subtitle:"Temperature ambiente",color:"blue",temp_min:15,temp_max:35,alert_temp:30,alert_hum:65,show_trend:!0,rooms:[{name:"Ingresso",icon:"mdi:door",temp_entity:"",hum_entity:""},{name:"Salotto",icon:"mdi:sofa",temp_entity:"",hum_entity:""}]}}setConfig(t){if(!Array.isArray(t.rooms))throw new Error("pastel-temp-card: 'rooms' deve essere una lista");this._config={title:t.title??"Temperatura",subtitle:t.subtitle??"Temperature ambiente",color:Yi.includes(t.color)?t.color:"blue",temp_min:t.temp_min??15,temp_max:t.temp_max??35,alert_temp:t.alert_temp??30,alert_hum:t.alert_hum??65,show_trend:t.show_trend!==!1,rooms:t.rooms},this._render()}set hass(t){this._hass=t,this._render(),this._config?.show_trend&&this._maybeRefreshTrends()}getCardSize(){return 2+(this._config?.rooms?.length??0)*2}async _maybeRefreshTrends(){let t=Date.now();if(t-this._lastFetch<300*1e3)return;this._lastFetch=t;let e={};for(let i of this._config.rooms)i.temp_entity&&(e[i.temp_entity]=await Xs(this._hass,i.temp_entity));this._trends=e,this._render()}_avgTemp(){if(!this._hass)return null;let t=this._config.rooms.map(e=>parseFloat(this._hass.states[e.temp_entity]?.state)).filter(e=>!isNaN(e));return t.length?t.reduce((e,i)=>e+i,0)/t.length:null}_avgHum(){if(!this._hass)return null;let t=this._config.rooms.filter(e=>e.hum_entity).map(e=>parseFloat(this._hass.states[e.hum_entity]?.state)).filter(e=>!isNaN(e));return t.length?t.reduce((e,i)=>e+i,0)/t.length:null}_render(){if(!this._config)return;let t=this._config,e=this._hass,i=Gt[t.color],s=this._avgTemp(),r=this._avgHum(),o=s!==null?Wi(s,t.temp_min,t.temp_max):0,n="rgba(255,255,255,0.45)",c="rgba(255,255,255,0.60)",d="rgba(255,255,255,0.45)",h=t.rooms.map(p=>{let u=e?.states[p.temp_entity],f=p.hum_entity?e?.states[p.hum_entity]:null,g=u?parseFloat(u.state):null,m=f?parseFloat(f.state):null,v=g!==null&&!isNaN(g)?g.toFixed(1)+"\xB0":"--\xB0",_=m!==null&&!isNaN(m)?Math.round(m)+"%":"--%",w=g!==null?Wi(g,t.temp_min,t.temp_max):0,$=p.icon||"mdi:thermometer",T=g!==null&&g>=t.alert_temp,S=m!==null&&m>=t.alert_hum,R=T?" !":"",os=S?" \u2191":"",ii=this._trends[p.temp_entity]??null,ns=t.show_trend&&ii!==null?`<span class="room-trend">${Zs(ii)}</span>`:"";return`
        <div class="room-row">
          <div class="room-top">
            <div class="room-icon" style="background:${c}">
              ${Qt($,i.base,16)}
            </div>
            <div class="room-name">${p.name??""}</div>
            ${ns}
            <div class="room-val" style="color:${i.base}">${v}${R}</div>
          </div>
          <div class="room-bar-wrap">
            <div class="room-bar-track" style="background:${d}">
              <div class="room-bar-fill" style="width:${w}%;background:${i.base}"></div>
              <div class="room-bar-thumb" style="left:calc(${w}% - 9px)"></div>
            </div>
          </div>
          <div class="room-hum" style="background:${c};color:${i.base}">
            ${Qt("mdi:water",i.base,10)}
            ${_}${os}
          </div>
        </div>`}).join("");this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; }
        .card {
          background: ${i.bg};
          border-radius: 28px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.05);
          padding: 16px 16px 4px 16px;
          font-family: var(--primary-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
        }
        /* header */
        .card-header { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
        .card-header-icon {
          width:36px; height:36px; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          background:${c}; flex-shrink:0;
        }
        .card-title    { font-size:20px; font-weight:800; color:#1a1a2e; line-height:1.1; }
        .card-subtitle { font-size:13px; font-weight:600; color:${i.base}; margin-top:1px; }
        /* summary */
        .summary {
          background:${n}; border-radius:18px;
          padding:14px 16px 12px; margin-bottom:12px;
          display:flex; align-items:center; gap:14px;
        }
        .summary-avg   { font-size:52px; font-weight:200; line-height:1; letter-spacing:-3px; color:${i.base}; }
        .summary-unit  { font-size:20px; font-weight:400; vertical-align:super; letter-spacing:0; }
        .summary-label { font-size:11px; font-weight:600; color:${i.base}; opacity:0.5; margin-top:2px; text-transform:uppercase; letter-spacing:0.4px; }
        .summary-badge {
          display:inline-flex; align-items:center; gap:5px;
          margin-top:7px; padding:4px 10px; border-radius:10px;
          background:${c}; color:${i.base};
          font-size:11px; font-weight:700;
        }
        /* bar */
        .progress-bar  { height:5px; border-radius:3px; margin-bottom:14px; overflow:hidden; background:${d}; }
        .progress-fill { height:100%; border-radius:3px; background:${i.base}; transition:width 0.4s ease; }
        /* rows */
        .room-row { padding:10px 0; border-top:1px solid rgba(0,0,0,0.06); }
        .room-top  { display:flex; align-items:center; gap:10px; margin-bottom:7px; }
        .room-icon { width:28px; height:28px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .room-name { flex:1; font-size:14px; font-weight:700; color:#1a1a2e; }
        .room-trend{ font-size:10px; font-weight:600; color:${i.base}; opacity:0.6; }
        .room-val  { font-size:15px; font-weight:800; }
        .room-bar-wrap  { padding-left:38px; }
        .room-bar-track { position:relative; height:6px; border-radius:3px; overflow:visible; }
        .room-bar-fill  { position:absolute; left:0; top:0; height:100%; border-radius:3px; }
        .room-bar-thumb { position:absolute; top:50%; transform:translateY(-50%); width:18px; height:18px; border-radius:50%; background:white; box-shadow:0 1px 5px rgba(0,0,0,0.20); }
        .room-hum {
          display:inline-flex; align-items:center; gap:4px;
          margin-left:38px; margin-top:6px; padding:2px 8px;
          border-radius:7px; font-size:10px; font-weight:700;
        }
        .card-pad { height:12px; }
      </style>

      <div class="card">
        <div class="card-header">
          <div class="card-header-icon">
            ${Qt("mdi:thermometer",i.base,20)}
          </div>
          <div>
            <div class="card-title">${t.title}</div>
            <div class="card-subtitle">${t.subtitle}</div>
          </div>
        </div>

        <div class="summary">
          ${Ks(s??t.temp_min,t.temp_min,t.temp_max,i)}
          <div>
            <div class="summary-avg">
              ${s!==null?s.toFixed(1):"--"}<span class="summary-unit">\xB0</span>
            </div>
            <div class="summary-label">media zona</div>
            <div class="summary-badge">
              ${Qt("mdi:water",i.base,12)}
              ${r!==null?Math.round(r)+"% umidit\xE0":"-- umidit\xE0"}
            </div>
          </div>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${o}%"></div>
        </div>

        ${h}

        <div class="card-pad"></div>
      </div>`}},He=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null}setConfig(t){this._config={...t},this._render()}set hass(t){this._hass=t,this.shadowRoot.querySelectorAll("ha-entity-picker").forEach(e=>e.hass=t)}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}},bubbles:!0,composed:!0}))}_set(t,e){this._config={...this._config,[t]:e},this._fire()}_setRoom(t,e,i){let s=[...this._config.rooms||[]];s[t]={...s[t],[e]:i},this._config={...this._config,rooms:s},this._fire(),this._renderRooms()}_addRoom(){let t=[...this._config.rooms||[],{name:"",icon:"mdi:thermometer",temp_entity:"",hum_entity:""}];this._config={...this._config,rooms:t},this._fire(),this._renderRooms()}_removeRoom(t){let e=[...this._config.rooms||[]];e.splice(t,1),this._config={...this._config,rooms:e},this._fire(),this._renderRooms()}_renderRooms(){let t=this.shadowRoot.getElementById("rooms-container");if(!t)return;t.innerHTML="",(this._config.rooms||[]).forEach((i,s)=>{let r=document.createElement("div");r.className="room-editor";let o=document.createElement("div");o.className="room-row1";let n=document.createElement("div");n.className="room-num",n.textContent=s+1;let c=document.createElement("ha-textfield");c.label="Nome stanza",c.value=i.name||"",c.style.flex="1",c.addEventListener("change",f=>this._setRoom(s,"name",f.target.value));let d=document.createElement("ha-textfield");d.label="Icona (mdi:...)",d.value=i.icon||"mdi:thermometer",d.style.width="140px",d.addEventListener("change",f=>this._setRoom(s,"icon",f.target.value));let h=document.createElement("button");h.className="del-btn",h.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z"/></svg>',h.addEventListener("click",()=>this._removeRoom(s)),o.appendChild(n),o.appendChild(c),o.appendChild(d),o.appendChild(h);let p=document.createElement("ha-entity-picker");p.hass=this._hass,p.value=i.temp_entity||"",p.label="Sensore temperatura",p.includeDomains=["sensor"],p.allowCustomEntity=!0,p.addEventListener("value-changed",f=>this._setRoom(s,"temp_entity",f.detail.value));let u=document.createElement("ha-entity-picker");u.hass=this._hass,u.value=i.hum_entity||"",u.label="Sensore umidit\xE0 (opzionale)",u.includeDomains=["sensor"],u.allowCustomEntity=!0,u.addEventListener("value-changed",f=>this._setRoom(s,"hum_entity",f.detail.value)),r.appendChild(o),r.appendChild(p),r.appendChild(u),t.appendChild(r)});let e=document.createElement("button");e.className="add-btn",e.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> Aggiungi stanza',e.addEventListener("click",()=>this._addRoom()),t.appendChild(e)}_render(){if(!this._config)return;let t=this._config;this.shadowRoot.innerHTML=`
      <style>
        .editor { display:flex; flex-direction:column; gap:12px; padding:4px 0; }
        .section-title { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:var(--secondary-text-color); margin-top:6px; }
        .row2 { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .swatches { display:flex; gap:8px; flex-wrap:wrap; margin-top:4px; }
        .swatch {
          width:28px; height:28px; border-radius:50%; border:2px solid transparent;
          cursor:pointer; padding:0; transition:transform 0.12s,border-color 0.12s;
        }
        .swatch:hover { transform:scale(1.12); }
        .swatch.sel   { border-color:#1a1a2e; box-shadow:0 0 0 2px var(--card-background-color,#fff); }
        .room-editor  { background:var(--secondary-background-color); border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:6px; }
        .room-row1    { display:flex; align-items:center; gap:6px; }
        .room-num     { width:22px; height:22px; border-radius:50%; background:var(--primary-color); color:#fff; font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .del-btn      { background:none; border:none; cursor:pointer; color:var(--error-color,#f44336); padding:4px; border-radius:6px; display:flex; align-items:center; }
        ha-entity-picker { display:block; }
        .add-btn {
          display:flex; align-items:center; gap:6px; padding:8px 14px;
          border-radius:10px; border:1.5px dashed var(--divider-color);
          background:none; cursor:pointer; color:var(--primary-color);
          font-size:13px; font-weight:600; justify-content:center; width:100%;
        }
        .add-btn:hover { background:var(--secondary-background-color); }
        .toggle-row { display:flex; align-items:center; justify-content:space-between; }
        .toggle-label { font-size:13px; color:var(--primary-text-color); }
      </style>

      <div class="editor">

        <div class="section-title">Intestazione</div>
        <div class="row2">
          <ha-textfield id="f-title"    label="Titolo"       value="${t.title??""}"></ha-textfield>
          <ha-textfield id="f-subtitle" label="Sottotitolo"  value="${t.subtitle??""}"></ha-textfield>
        </div>

        <div class="section-title">Colore tema</div>
        <div class="swatches">
          ${Yi.map(i=>`
            <button class="swatch ${t.color===i?"sel":""}"
              style="background:${Gt[i].base}"
              data-color="${i}" title="${Gt[i].name}"></button>`).join("")}
        </div>

        <div class="section-title">Scala temperatura</div>
        <div class="row2">
          <ha-textfield id="f-min"   label="Min scala (\xB0C)"  type="number" value="${t.temp_min??15}"></ha-textfield>
          <ha-textfield id="f-max"   label="Max scala (\xB0C)"  type="number" value="${t.temp_max??35}"></ha-textfield>
        </div>

        <div class="section-title">Soglie alert</div>
        <div class="row2">
          <ha-textfield id="f-atemp" label="Alert caldo (\xB0C)"   type="number" value="${t.alert_temp??30}"></ha-textfield>
          <ha-textfield id="f-ahum"  label="Alert umidit\xE0 (%)"  type="number" value="${t.alert_hum??65}"></ha-textfield>
        </div>

        <div class="toggle-row">
          <span class="toggle-label">Mostra trend (2h history)</span>
          <ha-switch id="f-trend" ${t.show_trend!==!1?"checked":""}></ha-switch>
        </div>

        <div class="section-title">Stanze</div>
        <div id="rooms-container"></div>

      </div>`;let e=(i,s,r)=>{let o=this.shadowRoot.getElementById(i);o&&o.addEventListener("change",n=>this._set(s,r?r(n.target.value):n.target.value))};e("f-title","title"),e("f-subtitle","subtitle"),e("f-min","temp_min",parseFloat),e("f-max","temp_max",parseFloat),e("f-atemp","alert_temp",parseFloat),e("f-ahum","alert_hum",parseFloat),this.shadowRoot.getElementById("f-trend")?.addEventListener("change",i=>this._set("show_trend",i.target.checked)),this.shadowRoot.querySelectorAll(".swatch").forEach(i=>{i.addEventListener("click",()=>{this._set("color",i.dataset.color),this.shadowRoot.querySelectorAll(".swatch").forEach(s=>s.classList.toggle("sel",s===i))})}),this._renderRooms()}};y("pastel-temp-card",qe);y("pastel-temp-card-editor",He);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-temp-card",name:"Pastel Temp Card",description:"Card temperatura e umidit\xE0 con sfondo colorato, termometro SVG, media zona e visual editor completo.",preview:!0,documentationURL:"https://github.com/Angelofsin666/pastel-temp-card"});console.info(`%c PASTEL-TEMP-CARD %c v${Ys} `,"background:#2563eb;color:#fff;font-weight:700;padding:2px 4px;border-radius:4px 0 0 4px","background:#1d4ed8;color:#fff;font-weight:700;padding:2px 4px;border-radius:0 4px 4px 0");var Kt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Xi=Object.keys(Kt);function Js(a){return Kt[a]||Kt.amber}function Gi(a){if(a==null||a==="unknown"||a==="unavailable")return!1;let t=Number(a);return!Number.isNaN(t)}function Ki(a){return Number(a)}var Ue=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Piano Terra",icon:"mdi:home",color:"orange",temperature_attribute:"temperature",humidity_attribute:"humidity",rooms:[]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");if(!Array.isArray(t.rooms))throw new Error("Devi specificare almeno una stanza (rooms: [...])");this.config={title:t.title||"Temperature",icon:t.icon||"mdi:home",color:Xi.includes(t.color)?t.color:"orange",temperature_attribute:t.temperature_attribute||"temperature",humidity_attribute:t.humidity_attribute||"humidity",rooms:t.rooms}}getCardSize(){let t=this.config&&this.config.rooms?this.config.rooms.length:1;return 1+Math.ceil(t/2)}static getConfigElement(){return document.createElement("pastel-temp-humidity-card-editor")}_roomData(t){let e=typeof t=="string"?t:t.entity,i=this.hass.states[e],s=typeof t=="object"&&t.name?t.name:i&&i.attributes.friendly_name||e,r=typeof t=="object"&&t.subtitle?t.subtitle:"";if(!i)return{id:e,name:s,subtitle:r,hasTemp:!1,hasHum:!1};let o=i.attributes[this.config.temperature_attribute],n=i.attributes[this.config.humidity_attribute],c=Gi(o),d=Gi(n);return{id:e,name:s,subtitle:r,hasTemp:c,temp:c?Ki(o):null,hasHum:d,hum:d?Ki(n):null}}_averageTemp(t){let e=t.filter(s=>s.hasTemp);return e.length===0?null:e.reduce((s,r)=>s+r.temp,0)/e.length}_showMoreInfo(t,e){e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return l``;let t=Js(this.config.color),e=this.config.rooms.map(r=>this._roomData(r)),i=this._averageTemp(e),s=i!==null?`Media ${i.toFixed(2).replace(".",",")} \xB0C`:"Media non disponibile";return l`
      <ha-card style="--c-base:${t.base}; --c-light:${t.light}; --c-bg:${t.bg}; --c-text:${t.text};">

        <div class="header">
          <ha-icon icon=${this.config.icon} style="color:${t.base}"></ha-icon>
          <div class="header-text">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${s}</div>
          </div>
        </div>

        <div class="grid">
          ${e.map(r=>l`
            <div class="room-card" @click=${o=>this._showMoreInfo(r.id,o)}>
              <div class="room-name">${r.name}</div>
              ${r.subtitle?l`<div class="room-subtitle">${r.subtitle}</div>`:""}

              ${r.hasTemp?l`
                <div class="temp-row">
                  <span class="temp-value">${r.temp.toFixed(1)}</span>
                  <span class="temp-unit">°C</span>
                </div>
                ${r.hasHum?l`
                  <div class="hum-badge">
                    <ha-icon icon="mdi:water"></ha-icon>
                    <span>${Math.round(r.hum)}%</span>
                  </div>
                `:""}
              `:l`
                <div class="no-data">dato non disponibile</div>
              `}
            </div>
          `)}
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
        padding: 12px 14px 8px;
      }
      .header ha-icon { --mdc-icon-size: 20px; }
      .title { font-size: 17px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 11px; color: var(--c-text); margin-top: 1px; }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        padding: 4px;
      }
      .room-card {
        background: var(--c-bg);
        border-radius: 16px;
        padding: 10px 12px;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        min-height: 64px;
      }
      .room-card:active { filter: brightness(0.97); }
      .room-name {
        font-size: 12px;
        font-weight: 600;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .room-subtitle {
        font-size: 10px;
        color: var(--secondary-text-color);
        margin-top: 1px;
      }
      .temp-row {
        display: flex;
        align-items: baseline;
        gap: 3px;
        margin-top: 4px;
      }
      .temp-value {
        font-size: 24px;
        font-weight: 300;
        color: var(--c-text);
        line-height: 1;
      }
      .temp-unit {
        font-size: 12px;
        color: var(--c-text);
      }
      .hum-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        margin-top: 4px;
        padding: 2px 7px;
        border-radius: 8px;
        background: var(--c-light);
        color: var(--c-text);
        font-size: 10px;
        font-weight: 600;
      }
      .hum-badge ha-icon { --mdc-icon-size: 11px; }
      .no-data {
        margin-top: 6px;
        font-size: 11px;
        color: var(--c-text);
        opacity: 0.6;
        font-style: italic;
      }
    `}};y("pastel-temp-humidity-card",Ue);var We=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_addRoom(){let t=[...this._config.rooms||[],{entity:"",name:"",subtitle:""}];this._valueChanged("rooms",t)}_removeRoom(t){let e=[...this._config.rooms||[]];e.splice(t,1),this._valueChanged("rooms",e)}_updateRoom(t,e,i){let s=[...this._config.rooms||[]];s[t]={...s[t],[e]:i},this._valueChanged("rooms",s)}render(){if(!this._config||!this.hass)return l``;let t=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],e={title:this._config.title||"",icon:this._config.icon||"mdi:home"},i=this._config.rooms||[];return l`
      <div class="editor">

        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${t}
          .computeLabel=${s=>this._labelFor(s.name)}
          @value-changed=${s=>{this._config={...this._config,...s.detail.value},this._fireChanged()}}
        ></ha-form>

        <div class="color-section">
          <div class="color-label">Colore della card</div>
          <div class="color-row">
            ${Xi.map(s=>l`
              <button
                class="swatch ${this._config.color===s?"selected":""}"
                style="background:${Kt[s].base}"
                title=${s}
                @click=${()=>this._valueChanged("color",s)}
              ></button>
            `)}
          </div>
        </div>

        <div class="rooms-section">
          <div class="color-label">Stanze</div>
          ${i.map((s,r)=>l`
            <div class="room-row">
              <ha-entity-picker
                .hass=${this.hass}
                .value=${s.entity||""}
                .includeDomains=${["sensor"]}
                label="Entità sensore"
                @value-changed=${o=>this._updateRoom(r,"entity",o.detail.value)}
              ></ha-entity-picker>
              <ha-textfield
                label="Nome stanza (opzionale)"
                .value=${s.name||""}
                @input=${o=>this._updateRoom(r,"name",o.target.value)}
              ></ha-textfield>
              <ha-textfield
                label="Sottotitolo (opzionale)"
                .value=${s.subtitle||""}
                @input=${o=>this._updateRoom(r,"subtitle",o.target.value)}
              ></ha-textfield>
              <ha-icon-button
                .path=${"M19,13H5V11H19V13Z"}
                @click=${()=>this._removeRoom(r)}
                title="Rimuovi stanza"
              ></ha-icon-button>
            </div>
          `)}
          <button class="add-button" @click=${()=>this._addRoom()}>+ Aggiungi stanza</button>
        </div>

        <div class="hint">
          Ogni stanza usa un'unica entità sensore con gli attributi
          <code>${this._config.temperature_attribute||"temperature"}</code> e
          <code>${this._config.humidity_attribute||"humidity"}</code>.
        </div>

      </div>
    `}_labelFor(t){return{title:"Titolo",icon:"Icona"}[t]||t}static get styles(){return b`
      .editor { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
      .color-label { font-size: 14px; color: var(--primary-text-color); margin-bottom: 8px; font-weight: 500; }
      .color-row { display: flex; gap: 10px; flex-wrap: wrap; }
      .swatch {
        width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform 0.15s ease, border-color 0.15s ease;
      }
      .swatch:hover { transform: scale(1.1); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .rooms-section { display: flex; flex-direction: column; gap: 10px; }
      .room-row {
        display: flex; flex-direction: column; gap: 6px;
        padding: 10px; border-radius: 12px; background: var(--secondary-background-color, #f4f4f4);
        position: relative;
      }
      .add-button {
        padding: 10px; border-radius: 12px; border: 1px dashed var(--divider-color, #ccc);
        background: transparent; cursor: pointer; font-size: 13px; color: var(--primary-text-color);
      }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
      .hint code { background: var(--secondary-background-color, #f4f4f4); padding: 1px 4px; border-radius: 4px; }
    `}};y("pastel-temp-humidity-card-editor",We);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-temp-humidity-card",name:"Pastel Temperature & Humidity Card",description:"Griglia compatta temperatura/umidit\xE0 per stanza, ottimizzata per mobile, con stile pastello e colore personalizzabile.",preview:!0});var Xt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},Zi=Object.keys(Xt);function ta(a){return Xt[a]||Xt.blue}function ea(a){return a==null||a==="unknown"||a==="unavailable"?!1:!Number.isNaN(Number(a))}function Ye(a,t){if(!t||!a)return null;let e=a.states[t];if(!e)return null;let i=e.state;return ea(i)?Number(i):null}function ia(a,t){if(!t||!a)return null;let e=a.states[t];return e?e.state==="on"||e.state==="true"||e.state==="heat"||e.state==="cool"||e.state==="auto"||e.state==="heating"||e.state==="cooling":null}var Qe=class extends x{static get properties(){return{hass:{},config:{},_dragging:{state:!0}}}static getStubConfig(){return{title:"Salotto",subtitle:"Termostato",icon:"mdi:thermometer",color:"blue",temperature_entity:"",humidity_entity:"",target_entity:"",target_min:16,target_max:30,target_step:.5,target_service:"",modes:[{name:"Riscaldamento",icon:"mdi:fire",state_entity:"",action:{type:"toggle",entity_id:""}},{name:"Raffreddamento",icon:"mdi:snowflake",state_entity:"",action:{type:"toggle",entity_id:""}}]}}setConfig(t){if(!t)throw new Error("Configurazione non valida");this.config={title:t.title||"Termostato",subtitle:t.subtitle||"",icon:t.icon||"mdi:thermometer",color:Zi.includes(t.color)?t.color:"blue",temperature_entity:t.temperature_entity||"",humidity_entity:t.humidity_entity||"",target_entity:t.target_entity||"",target_min:t.target_min??16,target_max:t.target_max??30,target_step:t.target_step??.5,target_service:t.target_service||"",modes:Array.isArray(t.modes)?t.modes:[]}}getCardSize(){return 4}static getConfigElement(){return document.createElement("pastel-thermostat-card-editor")}_temperature(){return Ye(this.hass,this.config.temperature_entity)}_humidity(){return Ye(this.hass,this.config.humidity_entity)}_target(){return Ye(this.hass,this.config.target_entity)}_pct(t){let e=this.config.target_min,i=this.config.target_max;return Math.min(100,Math.max(0,(t-e)/(i-e)*100))}_modeIsOn(t){return ia(this.hass,t.state_entity)===!0}_showMoreInfo(t,e){if(!t)return;e&&e.stopPropagation();let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}async _callAction(t,e){if(e&&e.stopPropagation(),!!t){try{window.hapticFeedback?window.hapticFeedback("light"):navigator.vibrate&&navigator.vibrate(30)}catch{}switch(t.type){case"toggle":t.entity_id&&this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id});break;case"turn_on":if(t.entity_id){let[i]=t.entity_id.split(".");this.hass.callService(i,"turn_on",{entity_id:t.entity_id})}break;case"turn_off":if(t.entity_id){let[i]=t.entity_id.split(".");this.hass.callService(i,"turn_off",{entity_id:t.entity_id})}break;case"script":t.entity_id&&this.hass.callService("script","turn_on",{entity_id:t.entity_id});break;case"scene":t.entity_id&&this.hass.callService("scene","turn_on",{entity_id:t.entity_id});break;case"call_service":{let[i,s]=(t.service||"").split(".");i&&s&&this.hass.callService(i,s,t.data||{});break}case"more_info":this._showMoreInfo(t.entity_id,e);break;default:break}}}_adjustTarget(t){let e=this._target();if(e===null)return;let i=this.config.target_step,s=this.config.target_min,r=this.config.target_max,o=Math.min(r,Math.max(s,Math.round((e+t)*10)/10));this._setTarget(o)}_setTarget(t){let e=this.config.target_service;if(!e)return;let[i,s]=e.split(".");if(!i||!s)return;let r=this.config.target_entity;this.hass.callService(i,s,{...r?{entity_id:r}:{},...i==="number"||i==="input_number"?{value:t}:{temperature:t}})}_onSliderPointerDown(t){if(t.stopPropagation(),this._sliderCleanup?.(),t.button!==0||t.isPrimary===!1)return;let e=!1,i=t.currentTarget,s=c=>{if(c.pointerId!==t.pointerId)return;let d=Math.abs(c.clientX-t.clientX),h=Math.abs(c.clientY-t.clientY);if(!e&&h>10&&h>=d){n();return}d>10&&(e=!0)},r=c=>{if(c.pointerId!==t.pointerId)return;if(!e&&Math.abs(c.clientY-t.clientY)>10){n();return}let d=i.getBoundingClientRect(),{target_min:h,target_max:p,target_step:u}=this.config,f=Math.min(1,Math.max(0,(c.clientX-d.left)/d.width)),g=h+Math.round(f*(p-h)/u)*u;n(),this._setTarget(Math.min(p,Math.max(h,g)))},o=c=>{c.pointerId===t.pointerId&&n()},n=()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",o),window.removeEventListener("blur",n),this._sliderCleanup=null};this._sliderCleanup=n,window.addEventListener("pointermove",s),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",o),window.addEventListener("blur",n)}disconnectedCallback(){this._sliderCleanup?.(),super.disconnectedCallback()}render(){if(!this.config||!this.hass)return l``;let t=ta(this.config.color),e=this._temperature(),i=this._humidity(),s=this._target(),r=s!==null?this._pct(s):0;return l`
      <ha-card style="
        --c-base:${t.base};
        --c-light:${t.light};
        --c-bg:${t.bg};
        --c-text:${t.text};
      ">
        <!-- header -->
        <div class="header">
          <div class="header-left">
            <ha-icon icon=${this.config.icon} style="color:var(--c-base)"></ha-icon>
            <div>
              <div class="title">${this.config.title}</div>
              ${this.config.subtitle?l`<div class="subtitle">${this.config.subtitle}</div>`:""}
            </div>
          </div>
          ${e!==null?l`
            <span class="badge">
              <span class="badge-dot"></span>
              ${e.toFixed(1)}°
            </span>
          `:""}
        </div>

        <!-- summary panel -->
        <div class="panel-summary">
          <div class="summary-row">
            <!-- thermometer silhouette C -->
            <svg width="52" height="82" viewBox="0 0 36 64" fill="none"
              @click=${()=>this._showMoreInfo(this.config.temperature_entity,null)}
              style="cursor:${this.config.temperature_entity?"pointer":"default"};flex-shrink:0">
              <path d="M13 34 L13 10 Q13 5 18 5 Q23 5 23 10 L23 34 Q27 36 27 44 Q27 52 18 52 Q9 52 9 44 Q9 36 13 34Z" fill="var(--c-light)"/>
              <path d="M15.5 34.5 L15.5 22 Q15.5 19 18 19 Q20.5 19 20.5 22 L20.5 34.5 Q23.5 36 23.5 44 Q23.5 49.5 18 49.5 Q12.5 49.5 12.5 44 Q12.5 36 15.5 34.5Z" fill="var(--c-base)" opacity=".9"/>
              <circle cx="15.5" cy="42" r="2" fill="white" opacity=".45"/>
              <line x1="23" y1="14" x2="27" y2="14" stroke="var(--c-base)" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
              <line x1="23" y1="20" x2="26" y2="20" stroke="var(--c-base)" stroke-width="1.2" stroke-linecap="round" opacity=".35"/>
              <line x1="23" y1="26" x2="27" y2="26" stroke="var(--c-base)" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
            </svg>

            <div class="count-block"
              @click=${()=>this._showMoreInfo(this.config.temperature_entity,null)}>
              ${e!==null?l`
                <div class="count">${e.toFixed(1)}<span class="count-unit">°</span></div>
                <div class="count-sub">temperatura attuale</div>
              `:l`<div class="count no-data">—</div>`}
              ${i!==null?l`
                <div class="hum-badge"
                  @click=${o=>{o.stopPropagation(),this._showMoreInfo(this.config.humidity_entity,o)}}>
                  <ha-icon icon="mdi:water" style="--mdc-icon-size:12px"></ha-icon>
                  ${Math.round(i)}%
                </div>
              `:""}
            </div>
          </div>

          <!-- target + slider -->
          ${s!==null?l`
            <div class="target-row">
              <div class="target-label">Target</div>
              <div class="stepper">
                <button class="step-btn" @click=${()=>this._adjustTarget(-this.config.target_step)}>−</button>
                <div class="step-val">${s.toFixed(1)}<span class="step-unit">°</span></div>
                <button class="step-btn" @click=${()=>this._adjustTarget(this.config.target_step)}>+</button>
              </div>
            </div>
            <div class="slider-wrap">
              <div class="slider-track" id="slider-track" @pointerdown=${this._onSliderPointerDown}>
                <div class="slider-fill" style="width:${r}%"></div>
                <div class="slider-thumb" style="left:${r}%"></div>
              </div>
            </div>
          `:""}
        </div>

        <!-- modes panel -->
        ${this.config.modes.length>0?l`
          <div class="panel-modes">
            ${this.config.modes.map((o,n)=>l`
              ${n>0?l`<div class="divider"></div>`:""}
              <div class="mode-row" @click=${c=>this._callAction(o.action,c)}>
                <ha-icon icon=${o.icon||"mdi:circle"} class="mode-icon"></ha-icon>
                <span class="mode-name">${o.name||"Modalit\xE0 "+(n+1)}</span>
                <span class="mode-badge ${this._modeIsOn(o)?"is-active":""}">
                  ${this._modeIsOn(o)?"Attivo":"Off"}
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
        display: flex; align-items: center; justify-content: space-between;
        padding: 12px 14px 8px;
      }
      .header-left { display: flex; align-items: center; gap: 10px; }
      .header ha-icon { --mdc-icon-size: 20px; }
      .title { font-size: 17px; font-weight: 600; color: var(--primary-text-color); }
      .subtitle { font-size: 11px; color: var(--c-base); margin-top: 1px; }
      .badge {
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 11px; border-radius: 12px;
        background: var(--c-bg); color: var(--c-text);
        font-size: 11px; font-weight: 600; white-space: nowrap;
      }
      .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--c-base); }

      .panel-summary {
        background: var(--c-bg); border-radius: 20px; margin: 4px; padding: 14px 16px;
      }
      .summary-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .count-block { flex: 1; text-align: right; cursor: pointer; }
      .count { font-size: 54px; font-weight: 300; color: var(--c-base); line-height: 1; letter-spacing: -2px; }
      .count-unit { font-size: 26px; }
      .count.no-data { font-size: 40px; color: var(--secondary-text-color); }
      .count-sub { font-size: 12px; color: var(--secondary-text-color); margin-top: 3px; }
      .hum-badge {
        display: inline-flex; align-items: center; gap: 4px;
        margin-top: 8px; padding: 4px 10px; border-radius: 10px;
        background: var(--c-light); color: var(--c-text);
        font-size: 12px; font-weight: 600; cursor: pointer;
      }

      .target-row {
        display: flex; align-items: center; justify-content: space-between; margin-top: 14px;
      }
      .target-label { font-size: 10px; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: .05em; }
      .stepper { display: inline-flex; align-items: center; gap: 8px; }
      .step-btn {
        width: 30px; height: 30px; border-radius: 50%;
        border: 1.5px solid var(--c-base); background: transparent; color: var(--c-base);
        font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center;
        transition: all .15s; font-family: inherit;
      }
      .step-btn:active { background: var(--c-base); color: #fff; }
      .step-val { font-size: 22px; font-weight: 300; color: var(--c-base); min-width: 54px; text-align: center; }
      .step-unit { font-size: 13px; }

      .slider-wrap { margin-top: 10px; }
      .slider-track {
        height: 8px; border-radius: 4px; background: var(--c-light);
        position: relative; cursor: pointer; touch-action: pan-y;
      }
      .slider-fill { height: 100%; border-radius: 4px; background: var(--c-base); pointer-events: none; }
      .slider-thumb {
        width: 22px; height: 22px; border-radius: 50%; background: #fff;
        border: 2.5px solid var(--c-base); position: absolute; top: 50%;
        transform: translate(-50%, -50%); box-shadow: 0 1px 4px rgba(0,0,0,.2);
        pointer-events: none;
      }

      .panel-modes { background: var(--c-bg); border-radius: 20px; margin: 4px; padding: 6px; }
      .mode-row {
        display: flex; align-items: center; gap: 10px;
        padding: 13px 12px; border-radius: 14px; cursor: pointer;
        user-select: none; -webkit-tap-highlight-color: transparent;
      }
      .mode-row:active { filter: brightness(.95); }
      .mode-icon { --mdc-icon-size: 20px; color: var(--c-base); flex-shrink: 0; }
      .mode-name { font-size: 14px; font-weight: 500; color: var(--primary-text-color); flex: 1; }
      .mode-badge {
        font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 8px;
        background: var(--c-light); color: var(--c-text); transition: all .2s;
      }
      .mode-badge.is-active { background: var(--c-base); color: #fff; }
      .divider { height: .5px; background: rgba(0,0,0,.08); margin: 0 12px; }
    `}};y("pastel-thermostat-card",Qe);var Ge=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t,modes:[...t.modes||[]]}}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_set(t,e){this._config={...this._config,[t]:e},this._fire()}_setMode(t,e,i){let s=[...this._config.modes];s[t]={...s[t],[e]:i},this._config={...this._config,modes:s},this._fire()}_setModeAction(t,e,i){let s=[...this._config.modes];s[t]={...s[t],action:{...s[t].action||{},[e]:i}},this._config={...this._config,modes:s},this._fire()}_addMode(){let t=[...this._config.modes||[],{name:"Modalit\xE0",icon:"mdi:circle",state_entity:"",action:{type:"toggle",entity_id:""}}];this._set("modes",t)}_removeMode(t){let e=[...this._config.modes];e.splice(t,1),this._set("modes",e)}_renderActionFields(t,e){let i=t.action?.type||"toggle",s=["toggle","turn_on","turn_off","script","scene","more_info"].includes(i),r=i==="script"?["script"]:i==="scene"?["scene"]:void 0;return l`
      <div class="field-group">
        <label class="field-label">Tipo azione</label>
        <select class="field-select"
          .value=${i}
          @change=${o=>this._setModeAction(e,"type",o.target.value)}>
          <option value="toggle">Toggle entità</option>
          <option value="turn_on">Accendi</option>
          <option value="turn_off">Spegni</option>
          <option value="script">Lancia script</option>
          <option value="scene">Attiva scena</option>
          <option value="call_service">Chiama servizio</option>
          <option value="more_info">Apri dettagli</option>
        </select>
      </div>
      ${s?l`
        <ha-entity-picker .hass=${this.hass} .value=${t.action?.entity_id||""}
          .includeDomains=${r} label="Entità azione"
          @value-changed=${o=>this._setModeAction(e,"entity_id",o.detail.value)}>
        </ha-entity-picker>
      `:""}
      ${i==="call_service"?l`
        <ha-textfield label="Servizio (es. climate.set_temperature)"
          .value=${t.action?.service||""}
          @change=${o=>this._setModeAction(e,"service",o.target.value)}>
        </ha-textfield>
      `:""}
    `}render(){if(!this._config||!this.hass)return l``;let t=this._config;return l`
      <div class="editor">

        <ha-form .hass=${this.hass}
          .data=${{title:t.title||"",subtitle:t.subtitle||"",icon:t.icon||"mdi:thermometer"}}
          .schema=${[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]}
          .computeLabel=${e=>({title:"Titolo",subtitle:"Sottotitolo",icon:"Icona"})[e.name]||e.name}
          @value-changed=${e=>{this._config={...this._config,...e.detail.value},this._fire()}}>
        </ha-form>

        <div class="section-label">Colore</div>
        <div class="color-row">
          ${Zi.map(e=>l`
            <button class="swatch ${t.color===e?"selected":""}"
              style="background:${Xt[e].base}" title=${e}
              @click=${()=>this._set("color",e)}></button>
          `)}
        </div>

        <div class="section-label">Sensori</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.temperature_entity||""}
          .includeDomains=${["sensor"]} label="Temperatura attuale"
          @value-changed=${e=>this._set("temperature_entity",e.detail.value)}>
        </ha-entity-picker>
        <ha-entity-picker .hass=${this.hass} .value=${t.humidity_entity||""}
          .includeDomains=${["sensor"]} label="Umidità (opzionale)"
          @value-changed=${e=>this._set("humidity_entity",e.detail.value)}>
        </ha-entity-picker>

        <div class="section-label">Target temperatura</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.target_entity||""}
          label="Entità target (sensor o number)"
          @value-changed=${e=>this._set("target_entity",e.detail.value)}>
        </ha-entity-picker>
        <ha-textfield label="Servizio per impostare il target (es. climate.set_temperature)"
          .value=${t.target_service||""}
          @change=${e=>this._set("target_service",e.target.value)}>
        </ha-textfield>
        <div class="row-3">
          <ha-textfield label="Min °" type="number" .value=${String(t.target_min??16)}
            @change=${e=>this._set("target_min",Number(e.target.value))}>
          </ha-textfield>
          <ha-textfield label="Max °" type="number" .value=${String(t.target_max??30)}
            @change=${e=>this._set("target_max",Number(e.target.value))}>
          </ha-textfield>
          <ha-textfield label="Step" type="number" .value=${String(t.target_step??.5)}
            @change=${e=>this._set("target_step",Number(e.target.value))}>
          </ha-textfield>
        </div>

        <div class="section-label">Modalità</div>
        ${(t.modes||[]).map((e,i)=>l`
          <div class="mode-editor">
            <div class="mode-editor-header">
              <span class="mode-editor-title">${e.name||"Modalit\xE0 "+(i+1)}</span>
              <button class="remove-btn" @click=${()=>this._removeMode(i)}>✕</button>
            </div>
            <ha-textfield label="Nome modalità" .value=${e.name||""}
              @change=${s=>this._setMode(i,"name",s.target.value)}>
            </ha-textfield>
            <ha-icon-picker label="Icona" .value=${e.icon||""}
              @value-changed=${s=>this._setMode(i,"icon",s.detail.value)}>
            </ha-icon-picker>
            <ha-entity-picker .hass=${this.hass} .value=${e.state_entity||""}
              label="Entità per lo stato Attivo/Off"
              @value-changed=${s=>this._setMode(i,"state_entity",s.detail.value)}>
            </ha-entity-picker>
            ${this._renderActionFields(e,i)}
          </div>
        `)}
        <button class="add-button" @click=${this._addMode}>+ Aggiungi modalità</button>

      </div>
    `}static get styles(){return b`
      .editor { display: flex; flex-direction: column; gap: 12px; padding: 8px 0; }
      .section-label { font-size: 14px; font-weight: 600; color: var(--primary-text-color); margin-top: 4px; }
      .color-row { display: flex; gap: 8px; flex-wrap: wrap; }
      .swatch {
        width: 28px; height: 28px; border-radius: 50%; border: 2px solid transparent;
        cursor: pointer; padding: 0; transition: transform .15s, border-color .15s;
      }
      .swatch:hover { transform: scale(1.12); }
      .swatch.selected { border-color: var(--primary-text-color); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
      .row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
      .mode-editor {
        border: 1.5px solid var(--divider-color, #e5e7eb); border-radius: 16px;
        padding: 12px; display: flex; flex-direction: column; gap: 10px;
      }
      .mode-editor-header { display: flex; align-items: center; justify-content: space-between; }
      .mode-editor-title { font-size: 13px; font-weight: 600; color: var(--primary-text-color); }
      .remove-btn {
        background: none; border: none; cursor: pointer; font-size: 14px;
        color: var(--secondary-text-color); padding: 2px 6px; border-radius: 6px;
      }
      .remove-btn:hover { background: #fee8e8; color: #dc2626; }
      .field-group { display: flex; flex-direction: column; gap: 4px; }
      .field-label { font-size: 12px; color: var(--secondary-text-color); }
      .field-select {
        padding: 8px; border-radius: 8px; border: 1px solid var(--divider-color, #e5e7eb);
        background: var(--card-background-color, #fff); font-size: 13px;
        color: var(--primary-text-color); font-family: inherit; cursor: pointer;
      }
      .add-button {
        padding: 12px; border-radius: 12px; border: 1.5px dashed var(--divider-color, #ccc);
        background: transparent; cursor: pointer; font-size: 13px;
        color: var(--primary-text-color); font-family: inherit;
      }
      .add-button:hover { border-color: var(--primary-color, #3d9cf0); color: var(--primary-color, #3d9cf0); }
    `}};y("pastel-thermostat-card-editor",Ge);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-thermostat-card",name:"Pastel Thermostat Card",description:"Card termostato/clima completamente configurabile: sensori liberi, target con slider, modalit\xE0 personalizzabili, colore pastello.",preview:!0});var sa="1.0.0",Zt={blue:{bg:"#dbeafe",base:"#2563eb",light:"#bfdbfe",name:"Azzurro"},green:{bg:"#dcfce7",base:"#16a34a",light:"#bbf7d0",name:"Verde"},purple:{bg:"#ede9fe",base:"#7c3aed",light:"#ddd6fe",name:"Viola"},teal:{bg:"#ccfbf1",base:"#0d9488",light:"#99f6e4",name:"Verde acqua"},amber:{bg:"#fef3c7",base:"#d97706",light:"#fde68a",name:"Ambra"},pink:{bg:"#fce7f3",base:"#db2777",light:"#fbcfe8",name:"Rosa"},indigo:{bg:"#e0e7ff",base:"#4338ca",light:"#c7d2fe",name:"Indaco"},cyan:{bg:"#cffafe",base:"#0891b2",light:"#a5f3fc",name:"Ciano"},red:{bg:"#fee2e2",base:"#dc2626",light:"#fecaca",name:"Rosso"},orange:{bg:"#ffedd5",base:"#ea580c",light:"#fed7aa",name:"Arancio"}},is=Object.keys(Zt),xt={green:{bg:"#e6f9ef",base:"#34c472",name:"Verde"},red:{bg:"#fde9e9",base:"#ef4444",name:"Rosso"},blue:{bg:"#e8f3fe",base:"#3d9cf0",name:"Azzurro"},orange:{bg:"#fef3e2",base:"#f0943d",name:"Arancio"},teal:{bg:"#e6faf4",base:"#20c997",name:"Acqua"},purple:{bg:"#f3eefe",base:"#9061f9",name:"Viola"},pink:{bg:"#fce7f3",base:"#db2777",name:"Rosa"},yellow:{bg:"#fef9c3",base:"#ca8a04",name:"Giallo"}},aa=Object.keys(xt),Ji={"mdi:air-conditioner":"M21 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 00-2 2v5h2v1h2v-1h10v1h2v-1h2v-5a2 2 0 00-2-2zM5 7h14v2H5V7zM3 14v-3h18v3H3z","mdi:power":"M16.56 5.44L15.11 6.89C16.84 7.94 18 9.83 18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44C5.36 6.88 4 9.28 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM13 3h-2v10h2V3z","mdi:snowflake":"M20 11h-2.5l1.5-1.5-1.41-1.41L15 11h-2v-2l2.91-2.91L14.5 4.68 13 6.18V3h-2v3.18L9.5 4.68 8.09 6.09 11 9v2H9L6.41 8.59 5 10l1.5 1.5H4v2h2.5L5 15l1.41 1.41L9 13h2v2l-2.91 2.91 1.41 1.41L11 17.82V21h2v-3.18l1.5 1.51 1.41-1.42L13 15v-2h2l2.59 2.59L19 14.09 17.5 13H20v-2z","mdi:white-balance-sunny":"M12 7a5 5 0 100 10 5 5 0 000-10zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41","mdi:water":"M12 2C6 9 4 13 4 16a8 8 0 0016 0c0-3-2-7-8-14z","mdi:fan":"M12 12a2 2 0 100-4 2 2 0 000 4zM12 2c2 0 4 1.5 4 4 0 1.3-.7 2.4-1.7 3M12 2c-2 0-4 1.5-4 4 0 1.3.7 2.4 1.7 3M22 12c0 2-1.5 4-4 4-1.3 0-2.4-.7-3-1.7M22 12c0-2-1.5-4-4-4-1.3 0-2.4.7-3 1.7M12 22c-2 0-4-1.5-4-4 0-1.3.7-2.4 1.7-3M12 22c2 0 4-1.5 4-4 0-1.3-.7-2.4-1.7-3M2 12c0-2 1.5-4 4-4 1.3 0 2.4.7 3 1.7M2 12c0 2 1.5 4 4 4 1.3 0 2.4-.7 3-1.7","mdi:weather-night":"M17.75 4.09l-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94 3.17-.09L12 1l1.38 3-3.17.09zM21.25 11l-1.46.44-.44 1.46-.44-1.46L17.45 11l1.46-.44.44-1.46.44 1.46zM4.5 6.375l-1.1.33-.33 1.1-.33-1.1-1.09-.33 1.09-.33.33-1.1.33 1.1zM21 21l-9-9c0 0-3-2-5 0c-2 2 0 5 3 8z","mdi:thermostat":"M15 13V5a3 3 0 00-6 0v8a5 5 0 106 0zm-3 5a3 3 0 110-6 3 3 0 010 6z"};function ra(a){return Ji[a]||Ji["mdi:air-conditioner"]}function vt(a,t,e=16){return`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="${t}"><path d="${ra(a)}"/></svg>`}function ts(a,t,e){if(!t||!a)return null;let i=a.states[t];if(!i)return null;let s=t.split(".")[0];if(["switch","input_boolean","binary_sensor"].includes(s))return i.state==="on";let r=parseFloat(i.state);return isNaN(r)?i.state==="on":r>=(e??5)}function es(a,t){if(!t||!a)return!1;let e=t.split(".")[0];if(["switch","input_boolean","binary_sensor"].includes(e))return!1;let i=a.states[t];return i?!isNaN(parseFloat(i.state)):e==="sensor"}function oa(a,t,e){return Math.min(e,Math.max(t,a))}var Ke=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null}static getConfigElement(){return document.createElement("pastel-clima-card-editor")}static getStubConfig(){return{title:"Climatizzatore",subtitle:"Raffreddamento",color:"blue",temp_entity:"",hum_entity:"",power_entity:"",power_threshold:5,show_fan:!1,fan_entity:"",buttons:[{name:"Accendi",icon:"mdi:power",color:"green",action:{action:"none"}},{name:"Spegni",icon:"mdi:power",color:"red",action:{action:"none"}},{name:"Clima",icon:"mdi:snowflake",color:"blue",action:{action:"none"}},{name:"Caldo",icon:"mdi:white-balance-sunny",color:"orange",action:{action:"none"}},{name:"Deumidifica",icon:"mdi:water",color:"teal",action:{action:"none"}},{name:"Ventola",icon:"mdi:fan",color:"purple",action:{action:"none"}}]}}setConfig(t){if(!Array.isArray(t.buttons))throw new Error("pastel-clima-card: 'buttons' deve essere una lista");this._config={title:t.title??"Climatizzatore",subtitle:t.subtitle??"",color:is.includes(t.color)?t.color:"blue",temp_entity:t.temp_entity??"",hum_entity:t.hum_entity??"",power_entity:t.power_entity??"",power_threshold:t.power_threshold??5,show_fan:t.show_fan??!1,fan_entity:t.fan_entity??"",fan_label:t.fan_label??"Velocit\xE0 ventola",image_url:t.image_url??new URL("./ac-unit.svg",import.meta.url).href,buttons:t.buttons},this._render()}set hass(t){this._hass=t,this._render()}getCardSize(){return 3+Math.ceil((this._config?.buttons?.length??0)/2)+(this._config?.show_fan?1:0)}_callButtonAction(t){if(!this._hass||!t?.action)return;let e=t.action;if(!(!e.action||e.action==="none"))if(e.action==="call-service"||e.action==="perform-action"){let i=e.service||e.perform_action;if(!i)return;let[s,r]=i.split(".");this._hass.callService(s,r,e.service_data||e.data||{},e.target||{})}else if(e.action==="toggle"&&e.entity){let i=e.entity.split(".")[0];this._hass.callService(i,"toggle",{},{entity_id:e.entity})}else e.action==="navigate"&&e.navigation_path&&(history.pushState(null,"",e.navigation_path),window.dispatchEvent(new CustomEvent("location-changed")))}_render(){if(!this._config)return;let t=this._config,e=this._hass,i=Zt[t.color],s=t.temp_entity?parseFloat(e?.states[t.temp_entity]?.state):null,r=t.hum_entity?parseFloat(e?.states[t.hum_entity]?.state):null,o=s!==null&&!isNaN(s)?s.toFixed(1):"--",n=r!==null&&!isNaN(r)?Math.round(r)+"%":null,c=t.power_entity?ts(e,t.power_entity,t.power_threshold):null,d="rgba(255,255,255,0.45)",p=c!==null?`
      <div class="status-badge" style="background:rgba(255,255,255,0.65);color:${i.base}">
        <div class="status-dot" style="background:${i.base}"></div>
        ${c?"Acceso":"Spento"}
      </div>`:"",u=t.buttons.map((g,m)=>{let v=xt[g.color]||xt.blue,_=null;g.state_entity&&(_=ts(e,g.state_entity,g.state_threshold));let w=_?`box-shadow:0 0 0 2px ${v.base} inset;`:"";return`
        <button class="pbtn" data-idx="${m}" style="background:${v.bg};color:${v.base};${w}">
          ${vt(g.icon||"mdi:air-conditioner",v.base,22)}
          <span>${g.name||""}</span>
        </button>`}).join(""),f="";if(t.show_fan&&t.fan_entity){let g=e?.states[t.fan_entity],m=0,v="--";if(g){let _=t.fan_entity.split(".")[0];if(_==="input_number"||_==="number"){let w=parseFloat(g.attributes?.min??0),$=parseFloat(g.attributes?.max??100),T=parseFloat(g.state);m=oa((T-w)/($-w)*100,0,100),v=g.state}else if(_==="select"||_==="input_select"){v=g.state;let w=g.attributes?.options||[],$=w.indexOf(g.state);m=w.length>1?$/(w.length-1)*100:0}else v=g.state}f=`
        <div class="fan-row" style="background:${d}">
          <div class="fan-top">
            <div class="fan-label" style="color:${i.base}">
              ${vt("mdi:fan",i.base,16)}
              ${t.fan_label}
            </div>
            <div class="fan-value" style="color:${i.base}">${v}</div>
          </div>
          <div class="fan-track" style="background:${i.light}">
            <div class="fan-fill" style="width:${m}%;background:${i.base}"></div>
            <div class="fan-thumb" style="left:calc(${m}% - 10px)"></div>
          </div>
        </div>`}this.shadowRoot.innerHTML=`
      <style>
        :host { display:block; }
        .card {
          background: white;
          border-radius: 28px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08);
          padding: 14px;
          font-family: var(--primary-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
        }
        .header { display:flex; align-items:center; gap:10px; margin-bottom:12px; }
        .header-icon {
          width:44px; height:44px; border-radius:12px;
          background:${i.bg}; display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }
        .header-title { font-size:20px; font-weight:800; color:#1a1a2e; line-height:1.1; }
        .header-sub   { font-size:13px; font-weight:600; color:${i.base}; margin-top:1px; }
        .status-badge {
          margin-left:auto; display:flex; align-items:center; gap:6px;
          padding:6px 14px; border-radius:12px;
          font-size:13px; font-weight:700; white-space:nowrap;
        }
        .status-dot { width:8px; height:8px; border-radius:50%; }

        .main-panel {
          background:${i.bg}; border-radius:18px; padding:16px;
          margin-bottom:12px; display:flex; align-items:center; gap:10px;
        }
        .temp-block { flex:1; text-align:right; }
        .ac-photo { width:100%; max-width:150px; display:block; }
        .ac-photo-fallback { display:flex; align-items:center; }
        .temp-val { font-size:50px; font-weight:300; color:${i.base}; line-height:1; letter-spacing:-1px; }
        .temp-unit { font-size:24px; font-weight:300; }
        .temp-label { font-size:12px; color:#7b8094; margin-top:4px; }
        .hum-badge {
          display:inline-flex; align-items:center; gap:5px; margin-top:10px;
          padding:6px 14px; border-radius:14px; background:white;
          color:${i.base}; font-size:13px; font-weight:700;
        }

        .btn-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:8px; }
        .pbtn {
          border-radius:16px; border:none; padding:16px 0;
          display:flex; flex-direction:column; align-items:center; gap:7px;
          cursor:pointer; font-size:14px; font-weight:700;
          transition: transform 0.1s ease;
        }
        .pbtn:active { transform: scale(0.96); }

        .fan-row { border-radius:16px; padding:12px 16px; margin-top:4px; }
        .fan-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
        .fan-label { display:flex; align-items:center; gap:8px; font-size:14px; font-weight:700; }
        .fan-value { font-size:14px; font-weight:700; }
        .fan-track { position:relative; height:6px; border-radius:3px; }
        .fan-fill  { position:absolute; left:0; top:0; height:100%; border-radius:3px; }
        .fan-thumb { position:absolute; top:50%; transform:translateY(-50%); width:20px; height:20px; border-radius:50%; background:white; box-shadow:0 1px 5px rgba(0,0,0,0.25); }
      </style>

      <div class="card">
        <div class="header">
          <div class="header-icon">
            ${vt("mdi:air-conditioner",i.base,24)}
          </div>
          <div>
            <div class="header-title">${t.title}</div>
            <div class="header-sub">${t.subtitle}</div>
          </div>
          ${p}
        </div>

        <div class="main-panel">
          <div class="temp-block" style="text-align:left;flex:1">
            <img class="ac-photo" src="${t.image_url}" alt="Climatizzatore"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="ac-photo-fallback" style="display:none">
              ${vt("mdi:air-conditioner",i.base,64)}
            </div>
          </div>
          <div class="temp-block">
            <div class="temp-val">${o}<span class="temp-unit">\xB0</span></div>
            <div class="temp-label">Temperatura ambiente</div>
            ${n?`<div class="hum-badge">${vt("mdi:water",i.base,13)} ${n} umidit\xE0</div>`:""}
          </div>
        </div>

        <div class="btn-grid">
          ${u}
        </div>

        ${f}
      </div>`,this.shadowRoot.querySelectorAll(".pbtn").forEach(g=>{g.addEventListener("click",()=>{let m=parseInt(g.dataset.idx,10);this._callButtonAction(t.buttons[m])})})}},Xe=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null}setConfig(t){this._config={...t},this._render()}set hass(t){this._hass=t,this.shadowRoot.querySelectorAll("ha-entity-picker").forEach(e=>e.hass=t),this.shadowRoot.querySelectorAll("ha-icon-picker").forEach(e=>e.hass=t),this.shadowRoot.querySelectorAll("ha-selector").forEach(e=>e.hass=t)}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}},bubbles:!0,composed:!0}))}_set(t,e){this._config={...this._config,[t]:e},this._fire()}_setBtn(t,e,i){let s=[...this._config.buttons||[]];s[t]={...s[t],[e]:i},this._config={...this._config,buttons:s},this._fire()}_addBtn(){let t=[...this._config.buttons||[],{name:"Nuovo tasto",icon:"mdi:air-conditioner",color:"blue",action:{action:"none"},state_entity:"",state_threshold:5}];this._config={...this._config,buttons:t},this._fire(),this._renderButtons()}_removeBtn(t){let e=[...this._config.buttons||[]];e.splice(t,1),this._config={...this._config,buttons:e},this._fire(),this._renderButtons()}_moveBtn(t,e){let i=[...this._config.buttons||[]],s=t+e;s<0||s>=i.length||([i[t],i[s]]=[i[s],i[t]],this._config={...this._config,buttons:i},this._fire(),this._renderButtons())}_renderButtons(){let t=this.shadowRoot.getElementById("buttons-container");if(!t)return;t.innerHTML="";let e=(this._config.buttons||[]).length;(this._config.buttons||[]).forEach((s,r)=>{let o=document.createElement("div");o.className="btn-editor";let n=document.createElement("div");n.className="btn-row1";let c=document.createElement("div");c.className="order-wrap";let d=document.createElement("button");d.className="order-btn",d.disabled=r===0,d.title="Sposta su",d.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg>',d.addEventListener("click",()=>this._moveBtn(r,-1));let h=document.createElement("button");h.className="order-btn",h.disabled=r===e-1,h.title="Sposta gi\xF9",h.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>',h.addEventListener("click",()=>this._moveBtn(r,1)),c.appendChild(d),c.appendChild(h);let p=document.createElement("div");p.className="btn-num",p.textContent=r+1;let u=document.createElement("ha-textfield");u.label="Nome tasto",u.value=s.name||"",u.style.flex="1",u.addEventListener("change",S=>this._setBtn(r,"name",S.target.value));let f=document.createElement("button");f.className="del-btn",f.title="Rimuovi tasto",f.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z"/></svg>',f.addEventListener("click",()=>this._removeBtn(r)),n.appendChild(c),n.appendChild(p),n.appendChild(u),n.appendChild(f);let g=document.createElement("div");g.className="btn-row2";let m=document.createElement("ha-icon-picker");m.hass=this._hass,m.label="Icona",m.value=s.icon||"mdi:air-conditioner",m.style.flex="1",m.addEventListener("value-changed",S=>this._setBtn(r,"icon",S.detail.value)),g.appendChild(m);let v=document.createElement("div");v.className="color-swatches",aa.forEach(S=>{let R=document.createElement("button");R.className="mini-swatch"+(s.color===S?" sel":""),R.style.background=xt[S].base,R.title=xt[S].name,R.addEventListener("click",()=>{this._setBtn(r,"color",S),this._renderButtons()}),v.appendChild(R)});let _=document.createElement("div");_.className="mini-label",_.textContent="Azione al tocco";let w=document.createElement("ha-selector");w.hass=this._hass,w.selector={action:{}},w.value=s.action||{action:"none"},w.addEventListener("value-changed",S=>this._setBtn(r,"action",S.detail.value));let $=document.createElement("div");$.className="mini-label",$.textContent="Entit\xE0 stato attivo (opzionale)";let T=document.createElement("ha-entity-picker");if(T.hass=this._hass,T.label="Entit\xE0 (boolean o sensore)",T.value=s.state_entity||"",T.allowCustomEntity=!0,T.addEventListener("value-changed",S=>{this._setBtn(r,"state_entity",S.detail.value),this._renderButtons()}),o.appendChild(n),o.appendChild(g),o.appendChild(v),o.appendChild(_),o.appendChild(w),o.appendChild($),o.appendChild(T),s.state_entity&&es(this._hass,s.state_entity)){let S=document.createElement("ha-textfield");S.label="Soglia attivo (es. Watt)",S.type="number",S.value=s.state_threshold??5,S.addEventListener("change",R=>this._setBtn(r,"state_threshold",parseFloat(R.target.value))),o.appendChild(S)}t.appendChild(o)});let i=document.createElement("button");i.className="add-btn",i.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> Aggiungi tasto',i.addEventListener("click",()=>this._addBtn()),t.appendChild(i)}_render(){if(!this._config)return;let t=this._config,e=t.power_entity&&es(this._hass,t.power_entity);this.shadowRoot.innerHTML=`
      <style>
        .editor { display:flex; flex-direction:column; gap:12px; padding:4px 0; }
        .section-title {
          font-size:11px; font-weight:700; text-transform:uppercase;
          letter-spacing:0.6px; color:var(--secondary-text-color); margin-top:6px;
        }
        .row2 { display:grid; grid-template-columns:1fr 1fr; gap:8px; }

        .swatches { display:flex; gap:8px; flex-wrap:wrap; margin-top:4px; }
        .swatch {
          width:28px; height:28px; border-radius:50%;
          border:2px solid transparent; cursor:pointer; padding:0;
          transition:transform 0.12s, border-color 0.12s;
        }
        .swatch:hover { transform:scale(1.12); }
        .swatch.sel   { border-color:#1a1a2e; box-shadow:0 0 0 2px var(--card-background-color,#fff); }

        .toggle-row { display:flex; align-items:center; justify-content:space-between; }
        .toggle-label { font-size:13px; color:var(--primary-text-color); }

        ha-entity-picker, ha-icon-picker, ha-selector { display:block; }

        /* button editor blocks */
        .btn-editor {
          background:var(--secondary-background-color); border-radius:12px;
          padding:10px; display:flex; flex-direction:column; gap:8px;
        }
        .btn-row1 { display:flex; align-items:center; gap:6px; }
        .btn-row2 { display:flex; align-items:center; gap:6px; }

        .order-wrap { display:flex; flex-direction:column; gap:1px; flex-shrink:0; }
        .order-btn {
          background:none; border:none; cursor:pointer; color:var(--secondary-text-color);
          padding:1px; border-radius:4px; display:flex; align-items:center;
        }
        .order-btn:hover:not(:disabled) { color:var(--primary-color); background:var(--divider-color); }
        .order-btn:disabled { opacity:0.25; cursor:default; }

        .btn-num {
          width:22px; height:22px; border-radius:50%; background:var(--primary-color);
          color:#fff; font-size:11px; font-weight:700;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }
        .del-btn { background:none; border:none; cursor:pointer; color:var(--error-color,#f44336); padding:4px; border-radius:6px; display:flex; align-items:center; }
        .del-btn:hover { background:rgba(244,67,54,0.08); }

        .color-swatches { display:flex; gap:6px; flex-wrap:wrap; }
        .mini-swatch {
          width:22px; height:22px; border-radius:50%; border:2px solid transparent;
          cursor:pointer; padding:0; transition:transform 0.1s, border-color 0.1s;
        }
        .mini-swatch:hover { transform:scale(1.15); }
        .mini-swatch.sel { border-color:#1a1a2e; }

        .mini-label { font-size:11px; font-weight:600; color:var(--secondary-text-color); margin-top:2px; }

        .add-btn {
          display:flex; align-items:center; gap:6px; padding:8px 14px;
          border-radius:10px; border:1.5px dashed var(--divider-color);
          background:none; cursor:pointer; color:var(--primary-color);
          font-size:13px; font-weight:600; justify-content:center; width:100%;
        }
        .add-btn:hover { background:var(--secondary-background-color); }
      </style>

      <div class="editor">

        <div class="section-title">Intestazione</div>
        <div class="row2">
          <ha-textfield id="f-title"    label="Titolo"      value="${t.title??""}"></ha-textfield>
          <ha-textfield id="f-subtitle" label="Sottotitolo" value="${t.subtitle??""}"></ha-textfield>
        </div>

        <div class="section-title">Colore tema</div>
        <div class="swatches">
          ${is.map(r=>`
            <button class="swatch ${t.color===r?"sel":""}"
              style="background:${Zt[r].base}"
              data-color="${r}" title="${Zt[r].name}"></button>`).join("")}
        </div>

        <div class="section-title">Sensori</div>
        <div id="temp-picker-slot"></div>
        <div id="hum-picker-slot"></div>

        <div class="section-title">Immagine climatizzatore</div>
        <ha-textfield id="f-image" label="Percorso immagine (es. /local/ac-unit.png)" value="${t.image_url??"ac-unit.png"}"></ha-textfield>

        <div class="section-title">Stato Acceso/Spento</div>
        <div id="power-picker-slot"></div>
        <div id="threshold-slot"></div>

        <div class="toggle-row">
          <span class="toggle-label">Mostra slider ventola</span>
          <ha-switch id="f-show-fan" ${t.show_fan?"checked":""}></ha-switch>
        </div>
        <div id="fan-picker-slot"></div>
        <div id="fan-label-slot"></div>

        <div class="section-title">Tasti (riordina con le frecce \u25B2\u25BC)</div>
        <div id="buttons-container"></div>

      </div>`;let i=(r,o,n)=>{let c=this.shadowRoot.getElementById(r);c&&c.addEventListener("change",d=>this._set(o,n?n(d.target.value):d.target.value))};i("f-title","title"),i("f-subtitle","subtitle"),i("f-image","image_url"),this.shadowRoot.getElementById("f-show-fan")?.addEventListener("change",r=>{this._set("show_fan",r.target.checked),this._render()}),this.shadowRoot.querySelectorAll(".swatch").forEach(r=>{r.addEventListener("click",()=>{this._set("color",r.dataset.color),this.shadowRoot.querySelectorAll(".swatch").forEach(o=>o.classList.toggle("sel",o===r))})});let s=(r,o,n,c)=>{let d=this.shadowRoot.getElementById(r);if(!d)return;let h=document.createElement("ha-entity-picker");h.hass=this._hass,h.label=o,h.value=t[n]||"",c&&(h.includeDomains=c),h.allowCustomEntity=!0,h.addEventListener("value-changed",p=>{this._set(n,p.detail.value),this._render()}),d.appendChild(h)};if(s("temp-picker-slot","Sensore temperatura","temp_entity",["sensor"]),s("hum-picker-slot","Sensore umidit\xE0 (opzionale)","hum_entity",["sensor"]),s("power-picker-slot","Entit\xE0 stato (switch, boolean o sensore potenza)","power_entity"),e){let r=this.shadowRoot.getElementById("threshold-slot"),o=document.createElement("ha-textfield");o.label="Soglia acceso (es. Watt)",o.type="number",o.value=t.power_threshold??5,o.addEventListener("change",n=>this._set("power_threshold",parseFloat(n.target.value))),r.appendChild(o)}if(t.show_fan){s("fan-picker-slot","Entit\xE0 ventola (number/select)","fan_entity");let r=this.shadowRoot.getElementById("fan-label-slot"),o=document.createElement("ha-textfield");o.label="Etichetta slider ventola",o.value=t.fan_label??"Velocit\xE0 ventola",o.addEventListener("change",n=>this._set("fan_label",n.target.value)),r.appendChild(o)}this._renderButtons()}};y("pastel-clima-card",Ke);y("pastel-clima-card-editor",Xe);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-clima-card",name:"Pastel Clima Card",description:"Card climatizzatore con sfondo pastello, tasti azione configurabili, stato on/off da boolean o sensore potenza, slider ventola.",preview:!0,documentationURL:"https://github.com/Angelofsin666/pastel-clima-card"});console.info(`%c PASTEL-CLIMA-CARD %c v${sa} `,"background:#3d9cf0;color:#fff;font-weight:700;padding:2px 4px;border-radius:4px 0 0 4px","background:#2563eb;color:#fff;font-weight:700;padding:2px 4px;border-radius:0 4px 4px 0");var Jt={amber:{base:"#f59e0b",light:"#fde68a",bg:"#fef3c7",text:"#d97706"},blue:{base:"#3d9cf0",light:"#b8dafc",bg:"#e8f3fe",text:"#3d9cf0"},green:{base:"#34c472",light:"#bdeed4",bg:"#e6f9ef",text:"#1f9d5c"},pink:{base:"#ec4899",light:"#fbcfe8",bg:"#fce7f3",text:"#db2777"},purple:{base:"#9b5de5",light:"#ddd1f7",bg:"#f3ecff",text:"#8b3fd9"},red:{base:"#f05252",light:"#fac9c9",bg:"#fee8e8",text:"#e03c3c"},teal:{base:"#20c997",light:"#a8e8d3",bg:"#e6faf4",text:"#159b76"},orange:{base:"#f0943d",light:"#fcd9b0",bg:"#fef3e8",text:"#d9762a"}},as=Object.keys(Jt);function na(a){return Jt[a]||Jt.blue}function ss(a){if(a==null||a==="unknown"||a==="unavailable")return!1;let t=Number(a);return!Number.isNaN(t)}function la(a,t){let e=a.bg,i=a.light,s=a.light,r=a.base,o=t?.75:.35,n=t?"1.1s":"2.6s",c=t?"0.95s":"2.3s",d=t?"1.3s":"2.9s";return`
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

      <circle cx="50" cy="115" r="2" fill="${r}" opacity="${o}">
        <animate attributeName="cy" values="118;100;118" dur="${n}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${o};0;${o}" dur="${n}" repeatCount="indefinite"/>
      </circle>
      <circle cx="75" cy="120" r="1.6" fill="${r}" opacity="${o}">
        <animate attributeName="cy" values="122;104;122" dur="${c}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${o};0;${o}" dur="${c}" repeatCount="indefinite"/>
      </circle>
      <circle cx="95" cy="116" r="1.8" fill="${r}" opacity="${o}">
        <animate attributeName="cy" values="119;98;119" dur="${d}" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="${o};0;${o}" dur="${d}" repeatCount="indefinite"/>
      </circle>

      <circle cx="55" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <circle cx="68" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
      <circle cx="81" cy="142" r="4.5" fill="#ffffff" stroke="${i}" stroke-width="1.5"/>
    </svg>`}var Ze=class extends x{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"Lavastoviglie",subtitle:"Lavastoviglie",icon:"mdi:dishwasher",color:"blue",detection_mode:"power",power_entity:"",power_threshold:5,state_entity:""}}setConfig(t){if(!t)throw new Error("Configurazione non valida");let e=t.detection_mode==="boolean"?"boolean":"power";if(e==="power"&&!t.power_entity)throw new Error("Devi specificare power_entity quando detection_mode \xE8 'power'");if(e==="boolean"&&!t.state_entity)throw new Error("Devi specificare state_entity quando detection_mode \xE8 'boolean'");this.config={title:t.title||"Lavastoviglie",subtitle:t.subtitle||"",icon:t.icon||"mdi:dishwasher",color:as.includes(t.color)?t.color:"blue",detection_mode:e,power_entity:t.power_entity||"",power_threshold:typeof t.power_threshold=="number"?t.power_threshold:5,state_entity:t.state_entity||""}}getCardSize(){return 4}static getConfigElement(){return document.createElement("pastel-dishwasher-card-editor")}_isOn(){if(!this.hass)return!1;if(this.config.detection_mode==="power"){let e=this.hass.states[this.config.power_entity];if(!e)return!1;let i=e.state;return ss(i)?Number(i)>this.config.power_threshold:!1}let t=this.hass.states[this.config.state_entity];return t?t.state==="on":!1}_powerWatts(){if(this.config.detection_mode!=="power")return null;let t=this.hass.states[this.config.power_entity];if(!t)return null;let e=t.state;return ss(e)?Number(e):null}_showMoreInfo(t,e){if(e&&e.stopPropagation(),!t)return;let i=new Event("hass-more-info",{bubbles:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}render(){if(!this.config||!this.hass)return l``;let t=na(this.config.color),e=this._isOn(),i=this._powerWatts(),s=this.config.detection_mode==="power"?this.config.power_entity:this.config.state_entity;return l`
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
          ${E(la(t,e))}
        </div>

        ${this.config.detection_mode==="power"&&i!==null?l`
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
    `}};y("pastel-dishwasher-card",Ze);var Je=class extends x{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={...t}}_valueChanged(t,e){this._config={...this._config,[t]:e},this._fireChanged()}_fireChanged(){let t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){if(!this._config||!this.hass)return l``;let t=[{name:"title",selector:{text:{}}},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],e={title:this._config.title||"",subtitle:this._config.subtitle||"",icon:this._config.icon||"mdi:dishwasher"},i=this._config.detection_mode==="boolean"?"boolean":"power";return l`
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
            ${as.map(s=>l`
              <button
                class="swatch ${this._config.color===s?"selected":""}"
                style="background:${Jt[s].base}"
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

          ${i==="power"?l`
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
          `:l`
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
    `}};y("pastel-dishwasher-card-editor",Je);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-dishwasher-card",name:"Pastel Dishwasher Card",description:"Card lavastoviglie con illustrazione animata, rilevamento stato da consumo o booleano, colore personalizzabile.",preview:!0});var rs={amber:{base:"#f59e0b",bg:"#fef3c7"},blue:{base:"#3b82f6",bg:"#dbeafe"},green:{base:"#10b981",bg:"#d1fae5"},pink:{base:"#ec4899",bg:"#fce7f3"},purple:{base:"#a855f7",bg:"#f3e8ff"},red:{base:"#ef4444",bg:"#fee2e2"},teal:{base:"#14b8a6",bg:"#ccfbf1"},orange:{base:"#f97316",bg:"#ffedd5"}},ca={mowing:"In funzione",docked:"Alla base",paused:"In pausa",returning:"Ritorno alla base",error:"Errore",unavailable:"Non disponibile",unknown:"Sconosciuto"};function rt(a){return a?["unknown","unavailable","",null,void 0].includes(a.state):!0}var ti=class extends x{static get properties(){return{hass:{},config:{}}}setConfig(t){if(!t.mower_entity)throw new Error("Devi specificare mower_entity");this.config={title:"Robot tagliaerba",subtitle:"Robot tagliaerba",icon:"mdi:robot-mower",color:"green",image_url:new URL("./lawn-mower.png",import.meta.url).href,...t}}getCardSize(){return 4}_fire(t){let e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}_callService(t,e){!this.hass||!this.config.mower_entity||this.hass.callService(t,e,{entity_id:this.config.mower_entity})}render(){if(!this.hass||!this.config)return l``;let t=this.hass.states[this.config.mower_entity],e=t?t.state:"unavailable",i=rt(t),s=rs[this.config.color]||rs.green,r=ca[e]||e,o=this.config.battery_entity?this.hass.states[this.config.battery_entity]:null,n=this.config.area_entity?this.hass.states[this.config.area_entity]:null,c=this.config.time_remaining_entity?this.hass.states[this.config.time_remaining_entity]:null,d=this.config.blade_entity?this.hass.states[this.config.blade_entity]:null,h=this.config.zone_entity?this.hass.states[this.config.zone_entity]:null,p=o&&!rt(o)?o.state:null,u=n&&!rt(n)?n.state:null,f=c&&!rt(c)?`${Math.floor(c.state/60)}:${String(c.state%60).padStart(2,"0")}`:null,g=d&&!rt(d)?d.state:null,m=h&&!rt(h)?h.state:null,v=m&&e==="mowing",_=!i&&e!=="mowing",w=!i&&e==="mowing",$=!i&&e!=="docked"&&e!=="returning";return l`
      <ha-card style="--c-base:${s.base}; --c-bg:${s.bg};">
        <div class="header" @click=${()=>this._fire(this.config.mower_entity)}>
          <img class="icon-img" src="${this.config.image_url}" @error=${T=>{T.target.style.display="none"}} />
          <div class="titles">
            <div class="title">${this.config.title}</div>
            <div class="subtitle">${this.config.subtitle}</div>
          </div>
          <div class="badge">
            <span class="dot"></span>${r}
          </div>
        </div>

        ${v?l`<div class="zone-chip" @click=${()=>this._fire(this.config.zone_entity)}>
              <ha-icon icon="mdi:map-marker"></ha-icon> Zona: ${m}
            </div>`:""}

        <div class="stats">
          ${p!==null?l`<div class="stat" @click=${()=>this._fire(this.config.battery_entity)}>
                <div class="stat-label">Batteria</div>
                <div class="stat-value">${p}%</div>
              </div>`:""}
          ${u!==null?l`<div class="stat" @click=${()=>this._fire(this.config.area_entity)}>
                <div class="stat-label">Area</div>
                <div class="stat-value">${u} m²</div>
              </div>`:""}
          ${f!==null?l`<div class="stat" @click=${()=>this._fire(this.config.time_remaining_entity)}>
                <div class="stat-label">Tempo</div>
                <div class="stat-value">${f}</div>
              </div>`:""}
          ${g!==null?l`<div class="stat" @click=${()=>this._fire(this.config.blade_entity)}>
                <div class="stat-label">Lame</div>
                <div class="stat-value">${g}</div>
              </div>`:""}
        </div>

        <div class="actions">
          <button class="btn" ?disabled=${!_} @click=${()=>this._callService("lawn_mower","start_mowing")}>
            <ha-icon icon="mdi:play"></ha-icon> Avvia
          </button>
          <button class="btn" ?disabled=${!w} @click=${()=>this._callService("lawn_mower","pause")}>
            <ha-icon icon="mdi:pause"></ha-icon> Pausa
          </button>
          <button class="btn" ?disabled=${!$} @click=${()=>this._callService("lawn_mower","dock")}>
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
    `}static getConfigElement(){return document.createElement("pastel-lawn-mower-card-editor")}static getStubConfig(){return{mower_entity:""}}},ei=class extends x{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){let e=t.target,i=e.configValue;if(!i)return;let s=t.detail&&t.detail.value!==void 0?t.detail.value:e.value;this._config={...this._config,[i]:s};let r=new CustomEvent("config-changed",{detail:{config:this._config}});this.dispatchEvent(r)}_entityPicker(t,e,i=!1){return l`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${this._config[e]||""}
        .label=${t}
        .configValue=${e}
        .required=${i}
        allow-custom-entity
        @value-changed=${this._valueChanged}
      ></ha-entity-picker>
    `}render(){return!this.hass||!this._config?l``:l`
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
    `}};y("pastel-lawn-mower-card",ti);y("pastel-lawn-mower-card-editor",ei);window.customCards=window.customCards||[];window.customCards.push({type:"pastel-lawn-mower-card",name:"Pastel Lawn Mower Card",description:"Card pastello per robot tagliaerba con controlli, stato lame e zona corrente."});for(let[a,t]of Object.entries({"pastel-appliance-card":mt,"pastel-appliance-card-editor":gt,"pastel-robot-card":At,"pastel-robot-card-editor":ft,"pastel-climate-card":Tt,"pastel-climate-card-editor":Pt}))customElements.get(a)?console.warn(`Pastel UI: ${a} gi\xE0 caricato; rimuovi la vecchia risorsa.`):customElements.define(a,t);window.customCards=window.customCards||[];for(let[a,t,e]of[["pastel-appliance-card","Pastel Appliance","Elettrodomestici, aria e acqua. Associa i controlli del tuo dispositivo."],["pastel-robot-card","Pastel Robot","Pulizia e giardino, con mappa e zone quando disponibili."],["pastel-climate-card","Pastel Climate","Temperatura e modalit\xE0 supportate dal climatizzatore."]])window.customCards.some(i=>i.type===a)||window.customCards.push({type:a,name:t,description:e,preview:!0});for(let[a,t]of[["pastel-stove-card",Nt],["pastel-stove-card-editor",It]])customElements.get(a)||customElements.define(a,t);window.customCards.some(a=>a.type==="pastel-stove-card")||window.customCards.push({type:"pastel-stove-card",name:"Pastel Stufa",description:"Stufa a pellet: script, controlli \u2212/+, stati e livello pellet configurabili.",preview:!0});console.info("Pastel UI 0.1.0-beta.7");for(let[a,t]of[["pastel-script-climate-card",Lt],["pastel-script-climate-card-editor",at]])customElements.get(a)||customElements.define(a,t);window.customCards.some(a=>a.type==="pastel-script-climate-card")||window.customCards.push({type:"pastel-script-climate-card",name:"Pastel Clima Script",description:"Climatizzatore comandato da script: pulsanti, icone e sensore temperatura con editor semplice.",preview:!0});window.customCards=window.customCards.filter((a,t,e)=>e.findIndex(i=>i.type===a.type)===t);for(let[a,t]of[["pastel-alarm-card",Rt],["pastel-alarm-card-editor",Bt],["pastel-security-card",Ot],["pastel-security-card-editor",Ft]])customElements.get(a)||customElements.define(a,t);for(let[a,t,e]of[["pastel-alarm-card","Pastel Allarme","Nome, script o funzioni native del pannello, icone e colori personalizzabili."],["pastel-security-card","Pastel Riepilogo Sicurezza","Allarme, aperture e sensori reali con riquadri personalizzabili."]])window.customCards.some(i=>i.type===a)||window.customCards.push({type:a,name:t,description:e,preview:!0});
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
