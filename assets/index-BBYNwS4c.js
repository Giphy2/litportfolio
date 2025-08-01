(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,ee=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),se=new WeakMap;let fe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ee&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&se.set(t,e))}return e}toString(){return this.cssText}};const _e=s=>new fe(typeof s=="string"?s:s+"",void 0,te),k=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new fe(t,s,te)},we=(s,e)=>{if(ee)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=L.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},oe=ee?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return _e(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xe,defineProperty:Ae,getOwnPropertyDescriptor:Se,getOwnPropertyNames:Ee,getOwnPropertySymbols:Ce,getPrototypeOf:ke}=Object,b=globalThis,ne=b.trustedTypes,Pe=ne?ne.emptyScript:"",F=b.reactiveElementPolyfillSupport,T=(s,e)=>s,R={toAttribute(s,e){switch(e){case Boolean:s=s?Pe:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},re=(s,e)=>!xe(s,e),ae={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Ae(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:o}=Se(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){const l=r==null?void 0:r.call(this);o==null||o.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=ke(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,i=[...Ee(t),...Ce(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(oe(r))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:R).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o,n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:R;this._$Em=r;const h=a.fromAttribute(t,l.type);this[r]=h??((n=this._$Ej)==null?void 0:n.get(r))??h,this._$Em=null}}requestUpdate(e,t,i){var r;if(e!==void 0){const o=this.constructor,n=this[e];if(i??(i=o.getPropertyOptions(e)),!((i.hasChanged??re)(n,t)||i.useDefault&&i.reflect&&n===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r){const{wrapped:l}=n,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[T("elementProperties")]=new Map,A[T("finalized")]=new Map,F==null||F({ReactiveElement:A}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,B=U.trustedTypes,le=B?B.createPolicy("lit-html",{createHTML:s=>s}):void 0,ge="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ve="?"+v,Oe=`<${ve}>`,x=document,D=()=>x.createComment(""),H=s=>s===null||typeof s!="object"&&typeof s!="function",ie=Array.isArray,Me=s=>ie(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",J=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,he=/>/g,y=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,pe=/"/g,be=/^(?:script|style|textarea|title)$/i,ze=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),d=ze(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ue=new WeakMap,_=x.createTreeWalker(x,129);function $e(s,e){if(!ie(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return le!==void 0?le.createHTML(e):e}const Te=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=z;for(let l=0;l<t;l++){const a=s[l];let h,u,c=-1,f=0;for(;f<a.length&&(n.lastIndex=f,u=n.exec(a),u!==null);)f=n.lastIndex,n===z?u[1]==="!--"?n=ce:u[1]!==void 0?n=he:u[2]!==void 0?(be.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=y):u[3]!==void 0&&(n=y):n===y?u[0]===">"?(n=r??z,c=-1):u[1]===void 0?c=-2:(c=n.lastIndex-u[2].length,h=u[1],n=u[3]===void 0?y:u[3]==='"'?pe:de):n===pe||n===de?n=y:n===ce||n===he?n=z:(n=y,r=void 0);const g=n===y&&s[l+1].startsWith("/>")?" ":"";o+=n===z?a+Oe:c>=0?(i.push(h),a.slice(0,c)+ge+a.slice(c)+v+g):a+v+(c===-2?l:g)}return[$e(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class j{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[h,u]=Te(e,t);if(this.el=j.createElement(h,i),_.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=_.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(ge)){const f=u[n++],g=r.getAttribute(c).split(v),I=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:I[2],strings:g,ctor:I[1]==="."?De:I[1]==="?"?He:I[1]==="@"?je:q}),r.removeAttribute(c)}else c.startsWith(v)&&(a.push({type:6,index:o}),r.removeAttribute(c));if(be.test(r.tagName)){const c=r.textContent.split(v),f=c.length-1;if(f>0){r.textContent=B?B.emptyScript:"";for(let g=0;g<f;g++)r.append(c[g],D()),_.nextNode(),a.push({type:2,index:++o});r.append(c[f],D())}}}else if(r.nodeType===8)if(r.data===ve)a.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(v,c+1))!==-1;)a.push({type:7,index:o}),c+=v.length-1}o++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function E(s,e,t=s,i){var n,l;if(e===S)return e;let r=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=H(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=E(s,r._$AS(s,e.values),r,i)),e}class Ue{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??x).importNode(t,!0);_.currentNode=r;let o=_.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new N(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new Ne(o,this,e)),this._$AV.push(h),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=_.nextNode(),n++)}return _.currentNode=x,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class N{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),H(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Me(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=j.createElement($e(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new Ue(r,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=ue.get(e.strings);return t===void 0&&ue.set(e.strings,t=new j(e)),t}k(e){ie(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new N(this.O(D()),this.O(D()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=E(this,e,t,0),n=!H(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{const l=e;let a,h;for(e=o[0],a=0;a<o.length-1;a++)h=E(this,l[i+a],t,a),h===S&&(h=this._$AH[a]),n||(n=!H(h)||h!==this._$AH[a]),h===p?e=p:e!==p&&(e+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class De extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class He extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class je extends q{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??p)===S)return;const i=this._$AH,r=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const K=U.litHtmlPolyfillSupport;K==null||K(j,N),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.1");const Ie=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new N(e.insertBefore(D(),o),o,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis;class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}}var me;m._$litElement$=!0,m.finalized=!0,(me=w.litElementHydrateSupport)==null||me.call(w,{LitElement:m});const G=w.litElementPolyfillSupport;G==null||G({LitElement:m});(w.litElementVersions??(w.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:re},Re=(s=Le,e,t)=>{const{kind:i,metadata:r}=t;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),i==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,s)},init(l){return l!==void 0&&this.C(n,void 0,s,l),l}}}if(i==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,s)}}throw Error("Unsupported decorator location: "+i)};function O(s){return(e,t)=>typeof t=="object"?Re(s,e,t):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(s){return O({...s,state:!0,attribute:!1})}var Be=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ye=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ve(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Be(e,t,r),r};let V=class extends m{constructor(){super(...arguments),this.isMenuOpen=!1}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}scrollToSection(s){const e=document.getElementById(s);e&&e.scrollIntoView({behavior:"smooth"}),this.isMenuOpen=!1}render(){return d`
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
          
            <!-- Mobile Burger Toggle -->
            <a
              role="button"
              class="navbar-burger ${this.isMenuOpen?"is-active":""}"
              aria-label="menu"
              aria-expanded="${this.isMenuOpen}"
              @click=${this.toggleMenu}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <!-- Navigation Links -->
          <div class="navbar-menu ${this.isMenuOpen?"is-active":""}">
            <div class="navbar-end">
              <a class="navbar-item" @click=${()=>this.scrollToSection("hero")}>Home</a>
              <a class="navbar-item" @click=${()=>this.scrollToSection("services")}>Services</a>
              <a class="navbar-item" @click=${()=>this.scrollToSection("projects")}>Projects</a>
              <a class="navbar-item" @click=${()=>this.scrollToSection("contact")}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    `}};V.styles=k`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar {
      padding: 1rem 0;
    }

    .navbar-brand .navbar-item {
      font-weight: 700;
      font-size: 1.75rem;
      color: #fff;
    }

    .navbar-brand .navbar-item:hover {
      color: #ffd700;
    }

    .navbar-burger span {
      background-color: white;
    }

    .navbar-menu {
      background-color: transparent;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .navbar-end {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex: 1;
    }

    .navbar-item {
      color: #f0f0f0;
      font-weight: 500;
      transition: background 0.3s, color 0.3s;
    }

    .navbar-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }
  `;ye([Y()],V.prototype,"isMenuOpen",2);V=ye([P("portfolio-header")],V);var qe=Object.getOwnPropertyDescriptor,Ye=(s,e,t,i)=>{for(var r=i>1?void 0:i?qe(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(r)||r);return r};let Z=class extends m{render(){return d`
      <section class="hero" id="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Albert Otieno</h1>
            <h2 class="subtitle">Software Engineer</h2>
            <p class="description">
              Passionate developer focused on clean, scalable, and efficient solutions.
              I specialize in modern JavaScript frameworks like React, Next.js, and Lit.
            </p>
            <div class="buttons">
              <a class="button is-white is-large" href="#projects">View My Work</a>
              <a class="button is-outlined is-large" href="#contact">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>
    `}};Z.styles=k`
    :host {
      display: block;
    }

    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .hero-body {
      padding: 6rem 1.5rem;
      max-width: 800px;
      margin: auto;
    }

    .title {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1rem;
      animation: fadeInUp 0.8s ease-out both;
    }

    .subtitle {
      font-size: 1.75rem;
      font-weight: 400;
      margin-bottom: 2rem;
      animation: fadeInUp 1s ease-out 0.3s both;
    }

    .description {
      font-size: 1.25rem;
      line-height: 1.8;
      margin-bottom: 2.5rem;
      animation: fadeInUp 1s ease-out 0.5s both;
    }

    .buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      animation: fadeInUp 1s ease-out 0.7s both;
    }

    .button {
      font-weight: 600;
      padding: 0.75rem 2rem;
      border-radius: 30px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .button.is-white {
      background: white;
      color: #667eea;
    }

    .button.is-white:hover {
      background: #f0f0f0;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .button.is-outlined {
      border: 2px solid white;
      color: white;
      background: transparent;
    }

    .button.is-outlined:hover {
      background: white;
      color: #764ba2;
      transform: translateY(-3px);
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media screen and (max-width: 768px) {
      .title {
        font-size: 2.75rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }

      .description {
        font-size: 1rem;
      }
    }
  `;Z=Ye([P("portfolio-hero")],Z);var We=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,M=(s,e,t,i)=>{for(var r=i>1?void 0:i?Fe(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&We(e,t,r),r};let $=class extends m{constructor(){super(...arguments),this.title="",this.image="",this.description="",this.link="",this.technologies=""}get technologyList(){return this.technologies.split(",").map(s=>s.trim()).filter(Boolean)}render(){return d`
      <div class="card">
        ${this.image?d`
          <div class="card-image">
            <img src="${this.image}" alt="${this.title}" loading="lazy" />
          </div>
        `:""}

        <div class="card-content">
          <p class="title">${this.title}</p>
          <div class="content">
            ${this.description}
          </div>

          ${this.technologyList.length>0?d`
            <div class="technologies">
              ${this.technologyList.map(s=>d`<span class="tech-tag">${s}</span>`)}
            </div>
          `:""}

          <a 
            class="button" 
            href="${this.link}" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    `}};$.styles=k`
    :host {
      display: block;
    }

    .card {
      height: 100%;
      transition: all 0.3s ease;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background: white;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .card-image {
      position: relative;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .card:hover .card-image img {
      transform: scale(1.05);
    }

    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #363636;
    }

    .content {
      color: #4a4a4a;
      line-height: 1.6;
      margin-bottom: 1rem;
      flex-grow: 1;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tech-tag {
      background-color: #f0f0f0;
      color: #555;
      padding: 0.25rem 0.5rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .button {
      margin-top: auto;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s ease;
      background: linear-gradient(45deg, #3273dc, #209cee);
      color: white;
      text-align: center;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      display: inline-block;
    }

    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(50, 115, 220, 0.3);
    }

    .card-image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(50, 115, 220, 0.1) 0%,
        rgba(0, 209, 178, 0.1) 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card:hover .card-image::after {
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      .card-content {
        padding: 1rem;
      }

      .title {
        font-size: 1.3rem;
      }
    }
  `;M([O({type:String})],$.prototype,"title",2);M([O({type:String})],$.prototype,"image",2);M([O({type:String})],$.prototype,"description",2);M([O({type:String})],$.prototype,"link",2);M([O({type:String})],$.prototype,"technologies",2);$=M([P("project-card")],$);var Je=Object.getOwnPropertyDescriptor,Ke=(s,e,t,i)=>{for(var r=i>1?void 0:i?Je(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(r)||r);return r};let X=class extends m{renderCard(s,e,t){return d`
      <div class="card">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="currentColor">${s}</svg>
        </div>
        <div class="title">${e}</div>
        <div class="description">${t}</div>
      </div>
    `}render(){return d`
      <section id="services">
        <div class="container">
          <div class="header">
            <h2>What I Do</h2>
            <p>
              I specialize in crafting modern, scalable, and performant web solutions that elevate digital experiences.
            </p>
          </div>

          <div class="grid">
            ${this.renderCard(d`<path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>`,"Web Development","Full-stack web applications using modern frameworks, responsive designs, and performance best practices.")}

            ${this.renderCard(d`<path d="M7 2v11h3v9l7-12h-4l4-8z"/>`,"UI/UX Design","User-centered design with clean interfaces, rapid prototyping, and smooth interactions.")}

            ${this.renderCard(d`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`,"E-Commerce","Complete storefront setups with product management, secure payment gateways, and seamless checkout flows.")}

            ${this.renderCard(d`<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`,"API Development","RESTful API development, backend integrations, and scalable architecture design.")}

            ${this.renderCard(d`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9s.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>`,"Consulting","Strategic tech consulting, performance audits, and long-term digital guidance for growing products.")}

            ${this.renderCard(d`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`,"Optimization","Speed improvements, SEO optimization, and accessibility enhancements for web platforms.")}
          </div>
        </div>
      </section>
    `}};X.styles=k`
    :host {
      display: block;
    }

    section {
      padding: 4rem 1.5rem;
      background-color: #f9f9f9;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
    }

    .header p {
      color: #555;
      font-size: 1.1rem;
      margin-top: 1rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .card {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .card:hover .description,
    .card:hover .title {
      color: white;
    }

    .icon {
      background: linear-gradient(135deg, #3273dc, #209cee);
      border-radius: 50%;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      transition: transform 0.3s ease;
    }

    .card:hover .icon {
      transform: scale(1.1);
      background: white;
    }

    .icon svg {
      width: 36px;
      height: 36px;
      color: white;
      transition: color 0.3s ease;
    }

    .card:hover .icon svg {
      color: #764ba2;
    }

    .title {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #222;
    }

    .description {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
    }
  `;X=Ke([P("services-section")],X);var Ge=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,W=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ze(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Ge(e,t,r),r};let C=class extends m{constructor(){super(...arguments),this.formData={name:"",email:"",message:""},this.isSubmitting=!1,this.errors={}}validateForm(){const s={};return this.formData.name.trim()||(s.name="Name is required"),this.formData.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)||(s.email="Invalid email format"):s.email="Email is required",this.formData.message.trim()?this.formData.message.trim().length<10&&(s.message="Message must be at least 10 characters"):s.message="Message is required",this.errors=s,Object.keys(s).length===0}async handleSubmit(s){if(s.preventDefault(),!!this.validateForm()){this.isSubmitting=!0;try{(await fetch("https://formspree.io/f/yourFormId",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.formData.name,email:this.formData.email,message:this.formData.message})})).ok?(this.formData={name:"",email:"",message:""},alert("Message sent successfully!")):alert("Failed to send. Please try again.")}catch{alert("Network error. Please try again later.")}finally{this.isSubmitting=!1}}}handleInputChange(s,e){this.formData={...this.formData,[s]:e},this.errors[s]&&(this.errors={...this.errors,[s]:""})}render(){return d`
      <div class="contact-wrapper">
        <h2 class="title">Contact Me</h2>
        <form @submit=${this.handleSubmit}>
          <div class="field">
            <label class="label">Name</label>
            <input
              class="input ${this.errors.name?"is-danger":""}"
              type="text"
              placeholder="Your name"
              .value=${this.formData.name}
              @input=${s=>this.handleInputChange("name",s.target.value)}
            />
            ${this.errors.name?d`<p class="help is-danger">${this.errors.name}</p>`:""}
          </div>

          <div class="field">
            <label class="label">Email</label>
            <input
              class="input ${this.errors.email?"is-danger":""}"
              type="email"
              placeholder="you@example.com"
              .value=${this.formData.email}
              @input=${s=>this.handleInputChange("email",s.target.value)}
            />
            ${this.errors.email?d`<p class="help is-danger">${this.errors.email}</p>`:""}
          </div>

          <div class="field">
            <label class="label">Message</label>
            <textarea
              class="textarea ${this.errors.message?"is-danger":""}"
              placeholder="Your message..."
              rows="5"
              .value=${this.formData.message}
              @input=${s=>this.handleInputChange("message",s.target.value)}
            ></textarea>
            ${this.errors.message?d`<p class="help is-danger">${this.errors.message}</p>`:""}
          </div>

          <button
            class="button ${this.isSubmitting?"is-loading":""}"
            type="submit"
            ?disabled=${this.isSubmitting}
          >
            ${this.isSubmitting?"Sending...":"Send Message"}
          </button>
        </form>
      </div>
    `}};C.styles=k`
    :host {
      display: block;
      background: #f6f8ff;
      padding: 4rem 1rem;
    }

    .contact-wrapper {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
    }

    h2.title {
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 2rem;
      color: #333;
    }

    .field {
      margin-bottom: 1.5rem;
    }

    .label {
      font-weight: 600;
      color: #444;
      margin-bottom: 0.5rem;
      display: block;
    }

    .input,
    .textarea {
      width: 100%;
      border-radius: 8px;
      border: 1px solid #ccc;
      padding: 0.75rem;
      font-size: 1rem;
      transition: border 0.3s;
    }

    .input:focus,
    .textarea:focus {
      border-color: #667eea;
      outline: none;
    }

    .input.is-danger,
    .textarea.is-danger {
      border-color: #ff3860;
    }

    .help.is-danger {
      color: #ff3860;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .button {
      background: linear-gradient(135deg, #667eea, #764ba2);
      border: none;
      padding: 0.75rem 2rem;
      color: white;
      border-radius: 30px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      width: 100%;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(50, 115, 220, 0.3);
    }

    .button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .button.is-loading::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
  `;W([Y()],C.prototype,"formData",2);W([Y()],C.prototype,"isSubmitting",2);W([Y()],C.prototype,"errors",2);C=W([P("contact-form")],C);var Xe=Object.getOwnPropertyDescriptor,Qe=(s,e,t,i)=>{for(var r=i>1?void 0:i?Xe(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(r)||r);return r};let Q=class extends m{scrollToSection(s){const e=document.getElementById(s);e&&e.scrollIntoView({behavior:"smooth"})}render(){return d`
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="social-links">
              <a 
                href="https://github.com/giphy2" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link github"
                title="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/albert-kere" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link linkedin"
                title="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://twitter.com/haterke" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link twitter"
                title="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:albertkere942@gmail.com" 
                class="social-link email"
                title="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
              </a>
            </div>

            <nav class="footer-nav">
              <a @click=${()=>this.scrollToSection("hero")}>Home</a>
              <a @click=${()=>this.scrollToSection("services")}>Services</a>
              <a @click=${()=>this.scrollToSection("projects")}>Projects</a>
              <a @click=${()=>this.scrollToSection("contact")}>Contact</a>
              <a href="/resume.pdf" target="_blank">Resume</a>
            </nav>

            <p class="copyright">
              © ${new Date().getFullYear()} Albert.
            </p>

            <p class="tech-stack">
              Built with 
              <a href="https://lit.dev" target="_blank" rel="noopener noreferrer">Lit</a>, 
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>, 
              <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">Bulma</a> 
              & TypeScript
            </p>
          </div>
        </div>
      </footer>
    `}};Q.styles=k`
    :host {
      display: block;
    }

    .footer {
      background: #363636;
      color: white;
      padding: 3rem 1.5rem 2rem;
    }

    .footer-content {
      text-align: center;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1.5rem;
    }

    .social-link:hover {
      background: var(--primary-color);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(50, 115, 220, 0.3);
      color: white;
    }

    .social-link.github:hover {
      background: #333;
    }

    .social-link.linkedin:hover {
      background: #0077b5;
    }

    .social-link.twitter:hover {
      background: #1da1f2;
    }

    .social-link.email:hover {
      background: #ea4335;
    }

    .footer-nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .footer-nav a {
      color: #b5b5b5;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-nav a:hover {
      color: white;
    }

    .copyright {
      color: #b5b5b5;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .tech-stack {
      color: #b5b5b5;
      font-size: 0.8rem;
    }

    .tech-stack a {
      color: var(--accent-color);
      text-decoration: none;
    }

    .tech-stack a:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
      .social-links {
        gap: 1rem;
      }

      .social-link {
        width: 45px;
        height: 45px;
        font-size: 1.3rem;
      }

      .footer-nav {
        gap: 1rem;
      }
    }
  `;Q=Qe([P("portfolio-footer")],Q);console.log("Developer Portfolio loaded successfully!");
