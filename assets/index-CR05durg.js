const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InvitationView-CGsvqs10.js","assets/ToastNotification-B-FnMb01.js","assets/FloralSVG-BvFJDEA5.js","assets/house-D2hcDYhO.js","assets/loader-circle-C0xXXN_z.js","assets/InvitationView-BXTAvOBL.css","assets/LoginView-5VjBuIMB.js","assets/DashboardView-CJy9dppt.js","assets/DashboardView-1vzvsPZT.css","assets/NotFoundView-BTCZXGG9.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},ns=[],sn=()=>{},_p=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ma=t=>t.startsWith("onUpdate:"),ze=Object.assign,Lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zy=Object.prototype.hasOwnProperty,be=(t,e)=>Zy.call(t,e),ne=Array.isArray,rs=t=>Bi(t)==="[object Map]",ws=t=>Bi(t)==="[object Set]",Wh=t=>Bi(t)==="[object Date]",fe=t=>typeof t=="function",xe=t=>typeof t=="string",Bt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",yp=t=>(Se(t)||fe(t))&&fe(t.then)&&fe(t.catch),vp=Object.prototype.toString,Bi=t=>vp.call(t),ev=t=>Bi(t).slice(8,-1),Ep=t=>Bi(t)==="[object Object]",_a=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},tv=/-\w/g,It=ya(t=>t.replace(tv,e=>e.slice(1).toUpperCase())),nv=/\B([A-Z])/g,fr=ya(t=>t.replace(nv,"-$1").toLowerCase()),va=ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),yl=ya(t=>t?`on${va(t)}`:""),rn=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ea=t=>{const e=parseFloat(t);return isNaN(e)?t:e},rv=t=>{const e=xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Kh;const Ta=()=>Kh||(Kh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?av(r):Fc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(t)||Se(t))return t}const sv=/;(?![^(]*\))/g,iv=/:([^]+)/,ov=/\/\*[^]*?\*\//g;function av(t){const e={};return t.replace(ov,"").split(sv).forEach(n=>{if(n){const r=n.split(iv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Uc(t){let e="";if(xe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=Uc(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const lv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cv=Mc(lv);function Ip(t){return!!t||t===""}function uv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=or(t[r],e[r]);return n}function or(t,e){if(t===e)return!0;let n=Wh(t),r=Wh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Bt(t),r=Bt(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?uv(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!or(t[o],e[o]))return!1}}return String(t)===String(e)}function Bc(t,e){return t.findIndex(n=>or(n,e))}const wp=t=>!!(t&&t.__v_isRef===!0),hv=t=>xe(t)?t:t==null?"":ne(t)||Se(t)&&(t.toString===vp||!fe(t.toString))?wp(t)?hv(t.value):JSON.stringify(t,Ap,2):String(t),Ap=(t,e)=>wp(e)?Ap(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[vl(r,i)+" =>"]=s,n),{})}:ws(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vl(n))}:Bt(e)?vl(e):Se(e)&&!ne(e)&&!Ep(e)?String(e):e,vl=(t,e="")=>{var n;return Bt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Je;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Je&&(Je.active?(this.parent=Je,this.index=(Je.scopes||(Je.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Je;try{return Je=this,e()}finally{Je=n}}}on(){++this._on===1&&(this.prevScope=Je,Je=this)}off(){if(this._on>0&&--this._on===0){if(Je===this)Je=this.prevScope;else{let e=Je;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bp(t){return new Rp(t)}function Sp(){return Je}function fv(t,e=!1){Je&&Je.cleanups.push(t)}let De;const El=new WeakSet;class Pp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&(Je.active?Je.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,El.has(this)&&(El.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gh(this),Np(this);const e=De,n=Ht;De=this,Ht=!0;try{return this.fn()}finally{Dp(this),De=e,Ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$c(e);this.deps=this.depsTail=void 0,Gh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?El.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wl(this)&&this.run()}get dirty(){return Wl(this)}}let Cp=0,ai,li;function kp(t,e=!1){if(t.flags|=8,e){t.next=li,li=t;return}t.next=ai,ai=t}function jc(){Cp++}function qc(){if(--Cp>0)return;if(li){let e=li;for(li=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ai;){let e=ai;for(ai=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Np(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),$c(r),dv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Op(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Op(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ii)||(t.globalVersion=Ii,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wl(t))))return;t.flags|=2;const e=t.dep,n=De,r=Ht;De=t,Ht=!0;try{Np(t);const s=t.fn(t._value);(e.version===0||rn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Ht=r,Dp(t),t.flags&=-3}}function $c(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$c(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function dv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ht=!0;const Vp=[];function bn(){Vp.push(Ht),Ht=!1}function Sn(){const t=Vp.pop();Ht=t===void 0?!0:t}function Gh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let Ii=0;class pv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!De||!Ht||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new pv(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,xp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,Ii++,this.notify(e)}notify(e){jc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qc()}}}function xp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $o=new WeakMap,Pr=Symbol(""),Kl=Symbol(""),wi=Symbol("");function ht(t,e,n){if(Ht&&De){let r=$o.get(t);r||$o.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Hc),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const o=$o.get(t);if(!o){Ii++;return}const l=c=>{c&&c.trigger()};if(jc(),e==="clear")o.forEach(l);else{const c=ne(t),u=c&&_a(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===wi||!Bt(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(wi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Pr)),rs(t)&&l(o.get(Kl)));break;case"delete":c||(l(o.get(Pr)),rs(t)&&l(o.get(Kl)));break;case"set":rs(t)&&l(o.get(Pr));break}}qc()}function gv(t,e){const n=$o.get(t);return n&&n.get(e)}function zr(t){const e=Ee(t);return e===t?e:(ht(e,"iterate",wi),Ot(t)?e:e.map(Kt))}function Ia(t){return ht(t=Ee(t),"iterate",wi),t}function tn(t,e){return Pn(t)?cs(Rn(t)?Kt(e):e):Kt(e)}const mv={__proto__:null,[Symbol.iterator](){return Tl(this,Symbol.iterator,t=>tn(this,t))},concat(...t){return zr(this).concat(...t.map(e=>ne(e)?zr(e):e))},entries(){return Tl(this,"entries",t=>(t[1]=tn(this,t[1]),t))},every(t,e){return pn(this,"every",t,e,void 0,arguments)},filter(t,e){return pn(this,"filter",t,e,n=>n.map(r=>tn(this,r)),arguments)},find(t,e){return pn(this,"find",t,e,n=>tn(this,n),arguments)},findIndex(t,e){return pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return pn(this,"findLast",t,e,n=>tn(this,n),arguments)},findLastIndex(t,e){return pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Il(this,"includes",t)},indexOf(...t){return Il(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return Il(this,"lastIndexOf",t)},map(t,e){return pn(this,"map",t,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...t){return Hs(this,"push",t)},reduce(t,...e){return zh(this,"reduce",t,e)},reduceRight(t,...e){return zh(this,"reduceRight",t,e)},shift(){return Hs(this,"shift")},some(t,e){return pn(this,"some",t,e,void 0,arguments)},splice(...t){return Hs(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return Hs(this,"unshift",t)},values(){return Tl(this,"values",t=>tn(this,t))}};function Tl(t,e,n){const r=Ia(t),s=r[e]();return r!==t&&!Ot(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const _v=Array.prototype;function pn(t,e,n,r,s,i){const o=Ia(t),l=o!==t&&!Ot(t),c=o[e];if(c!==_v[e]){const p=c.apply(t,i);return l?Kt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,tn(t,p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function zh(t,e,n,r){const s=Ia(t),i=s!==t&&!Ot(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=tn(t,u)),n.call(this,u,tn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?tn(t,c):c}function Il(t,e,n){const r=Ee(t);ht(r,"iterate",wi);const s=r[e](...n);return(s===-1||s===!1)&&wa(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function Hs(t,e,n=[]){bn(),jc();const r=Ee(t)[e].apply(t,n);return qc(),Sn(),r}const yv=Mc("__proto__,__v_isRef,__isVue"),Mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bt));function vv(t){Bt(t)||(t=String(t));const e=Ee(this);return ht(e,"has",t),e.hasOwnProperty(t)}class Lp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Cv:jp:i?Bp:Up).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ne(e);if(!s){let c;if(o&&(c=mv[n]))return c;if(n==="hasOwnProperty")return vv}const l=Reflect.get(e,n,qe(e)?e:r);if((Bt(n)?Mp.has(n):yv(n))||(s||ht(e,"get",n),i))return l;if(qe(l)){const c=o&&_a(n)?l:l.value;return s&&Se(c)?zl(c):c}return Se(l)?s?zl(l):ji(l):l}}class Fp extends Lp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ne(e)&&_a(n);if(!this._isShallow){const u=Pn(i);if(!Ot(r)&&!Pn(r)&&(i=Ee(i),r=Ee(r)),!o&&qe(i)&&!qe(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,qe(e)?e:s);return e===Ee(s)&&(l?rn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Bt(n)||!Mp.has(n))&&ht(e,"has",n),r}ownKeys(e){return ht(e,"iterate",ne(e)?"length":Pr),Reflect.ownKeys(e)}}class Ev extends Lp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Tv=new Fp,Iv=new Ev,wv=new Fp(!0);const Gl=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function Av(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=rs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Gl:e?cs:Kt;return!e&&ht(i,"iterate",c?Kl:Pr),ze(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function To(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Rv(t,e){const n={get(s){const i=this.__v_raw,o=Ee(i),l=Ee(s);t||(rn(s,l)&&ht(o,"get",s),ht(o,"get",l));const{has:c}=Eo(o),u=e?Gl:t?cs:Kt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ht(Ee(s),"iterate",Pr),s.size},has(s){const i=this.__v_raw,o=Ee(i),l=Ee(s);return t||(rn(s,l)&&ht(o,"has",s),ht(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ee(l),u=e?Gl:t?cs:Kt;return!t&&ht(c,"iterate",Pr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return ze(n,t?{add:To("add"),set:To("set"),delete:To("delete"),clear:To("clear")}:{add(s){const i=Ee(this),o=Eo(i),l=Ee(s),c=!e&&!Ot(s)&&!Pn(s)?l:s;return o.has.call(i,c)||rn(s,c)&&o.has.call(i,s)||rn(l,c)&&o.has.call(i,l)||(i.add(c),yn(i,"add",c,c)),this},set(s,i){!e&&!Ot(i)&&!Pn(i)&&(i=Ee(i));const o=Ee(this),{has:l,get:c}=Eo(o);let u=l.call(o,s);u||(s=Ee(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?rn(i,f)&&yn(o,"set",s,i):yn(o,"add",s,i),this},delete(s){const i=Ee(this),{has:o,get:l}=Eo(i);let c=o.call(i,s);c||(s=Ee(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&yn(i,"delete",s,void 0),u},clear(){const s=Ee(this),i=s.size!==0,o=s.clear();return i&&yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Av(s,t,e)}),n}function Wc(t,e){const n=Rv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const bv={get:Wc(!1,!1)},Sv={get:Wc(!1,!0)},Pv={get:Wc(!0,!1)};const Up=new WeakMap,Bp=new WeakMap,jp=new WeakMap,Cv=new WeakMap;function kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nv(t){return t.__v_skip||!Object.isExtensible(t)?0:kv(ev(t))}function ji(t){return Pn(t)?t:Kc(t,!1,Tv,bv,Up)}function qp(t){return Kc(t,!1,wv,Sv,Bp)}function zl(t){return Kc(t,!0,Iv,Pv,jp)}function Kc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Nv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Rn(t){return Pn(t)?Rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Pn(t){return!!(t&&t.__v_isReadonly)}function Ot(t){return!!(t&&t.__v_isShallow)}function wa(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Gc(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&Tp(t,"__v_skip",!0),t}const Kt=t=>Se(t)?ji(t):t,cs=t=>Se(t)?zl(t):t;function qe(t){return t?t.__v_isRef===!0:!1}function ci(t){return $p(t,!1)}function Dv(t){return $p(t,!0)}function $p(t,e){return qe(t)?t:new Ov(t,e)}class Ov{constructor(e,n){this.dep=new Hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:Kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ot(e)||Pn(e);e=r?e:Ee(e),rn(e,n)&&(this._rawValue=e,this._value=r?e:Kt(e),this.dep.trigger())}}function Zn(t){return qe(t)?t.value:t}const Vv={get:(t,e,n)=>e==="__v_raw"?t:Zn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Hp(t){return Rn(t)?t:new Proxy(t,Vv)}function xv(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Lv(t,n);return e}class Mv{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Bt(n)?n:String(n),this._raw=Ee(e);let s=!0,i=e;if(!ne(e)||Bt(this._key)||!_a(this._key))do s=!wa(i)||Ot(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Zn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&qe(this._raw[this._key])){const n=this._object[this._key];if(qe(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return gv(this._raw,this._key)}}function Lv(t,e,n){return new Mv(t,e,n)}class Fv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return kp(this,!0),!0}get value(){const e=this.dep.track();return Op(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uv(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Fv(r,s,n)}const Io={},Ho=new WeakMap;let Ir;function Bv(t,e=!1,n=Ir){if(n){let r=Ho.get(n);r||Ho.set(n,r=[]),r.push(t)}}function jv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=$=>s?$:Ot($)||s===!1||s===0?vn($,1):vn($);let f,p,g,v,S=!1,k=!1;if(qe(t)?(p=()=>t.value,S=Ot(t)):Rn(t)?(p=()=>u(t),S=!0):ne(t)?(k=!0,S=t.some($=>Rn($)||Ot($)),p=()=>t.map($=>{if(qe($))return $.value;if(Rn($))return u($);if(fe($))return c?c($,2):$()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){bn();try{g()}finally{Sn()}}const $=Ir;Ir=f;try{return c?c(t,3,[v]):t(v)}finally{Ir=$}}:p=sn,e&&s){const $=p,X=s===!0?1/0:s;p=()=>vn($(),X)}const N=Sp(),j=()=>{f.stop(),N&&N.active&&Lc(N.effects,f)};if(i&&e){const $=e;e=(...X)=>{$(...X),j()}}let V=k?new Array(t.length).fill(Io):Io;const q=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const X=f.run();if(s||S||(k?X.some((se,w)=>rn(se,V[w])):rn(X,V))){g&&g();const se=Ir;Ir=f;try{const w=[X,V===Io?void 0:k&&V[0]===Io?[]:V,v];V=X,c?c(e,3,w):e(...w)}finally{Ir=se}}}else f.run()};return l&&l(q),f=new Pp(p),f.scheduler=o?()=>o(q,!1):q,v=$=>Bv($,!1,f),g=f.onStop=()=>{const $=Ho.get(f);if($){if(c)c($,4);else for(const X of $)X();Ho.delete(f)}},e?r?q(!0):V=f.run():o?o(q.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function vn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,qe(t))vn(t.value,e,n);else if(ne(t))for(let r=0;r<t.length;r++)vn(t[r],e,n);else if(ws(t)||rs(t))t.forEach(r=>{vn(r,e,n)});else if(Ep(t)){for(const r in t)vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Aa(s,e,n)}}function Gt(t,e,n,r){if(fe(t)){const s=qi(t,e,n,r);return s&&yp(s)&&s.catch(i=>{Aa(i,e,n)}),s}if(ne(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}}function Aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){bn(),qi(i,null,10,[t,c,u]),Sn();return}}qv(t,n,s,r,o)}function qv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const vt=[];let Zt=-1;const ss=[];let Kn=null,Jr=0;const Wp=Promise.resolve();let Wo=null;function Ra(t){const e=Wo||Wp;return t?e.then(this?t.bind(this):t):e}function $v(t){let e=Zt+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=Ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zc(t){if(!(t.flags&1)){const e=Ai(t),n=vt[vt.length-1];!n||!(t.flags&2)&&e>=Ai(n)?vt.push(t):vt.splice($v(e),0,t),t.flags|=1,Kp()}}function Kp(){Wo||(Wo=Wp.then(zp))}function Hv(t){ne(t)?ss.push(...t):Kn&&t.id===-1?Kn.splice(Jr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),Kp()}function Qh(t,e,n=Zt+1){for(;n<vt.length;n++){const r=vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Gp(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>Ai(n)-Ai(r));if(ss.length=0,Kn){Kn.push(...e);return}for(Kn=e,Jr=0;Jr<Kn.length;Jr++){const n=Kn[Jr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kn=null,Jr=0}}const Ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function zp(t){try{for(Zt=0;Zt<vt.length;Zt++){const e=vt[Zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zt<vt.length;Zt++){const e=vt[Zt];e&&(e.flags&=-2)}Zt=-1,vt.length=0,Gp(),Wo=null,(vt.length||ss.length)&&zp()}}let kt=null,Qp=null;function Ko(t){const e=kt;return kt=t,Qp=t&&t.type.__scopeId||null,e}function Wv(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qo(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&Qo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function lC(t,e){if(kt===null)return t;const n=Na(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(bn(),Gt(c,n,8,[t.el,l,t,e]),Sn())}}function No(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function Ft(t,e,n=!1){const r=ka();if(r||Cr){let s=Cr?Cr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function Kv(){return!!(ka()||Cr)}const Gv=Symbol.for("v-scx"),zv=()=>Ft(Gv);function ui(t,e,n){return Jp(t,e,n)}function Jp(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=ze({},n),c=e&&r||!e&&i!=="post";let u;if(Si){if(i==="sync"){const v=zv();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=sn,v.resume=sn,v.pause=sn,v}}const f=dt;l.call=(v,S,k)=>Gt(v,f,S,k);let p=!1;i==="post"?l.scheduler=v=>{_t(v,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,S)=>{S?v():zc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const g=jv(t,e,l);return Si&&(u?u.push(g):c&&g()),g}function Qv(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?Yp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=$i(this),l=Jp(s,i.bind(r),n);return o(),l}function Yp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $n=new WeakMap,Xp=Symbol("_vte"),Zp=t=>t.__isTeleport,Ar=t=>t&&(t.disabled||t.disabled===""),Jv=t=>t&&(t.defer||t.defer===""),Jh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Yh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ql=(t,e)=>{const n=t&&t.to;return xe(n)?e?e(n):null:n},Yv={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:f,pc:p,pbc:g,o:{insert:v,querySelector:S,createText:k,createComment:N,parentNode:j}}=u,V=Ar(e.props);let{dynamicChildren:q}=e;const $=(w,y,_)=>{w.shapeFlag&16&&f(w.children,y,_,s,i,o,l,c)},X=(w=e)=>{const y=Ar(w.props),_=w.target=Ql(w.props,S),I=Jl(_,w,k,v);_&&(o!=="svg"&&Jh(_)?o="svg":o!=="mathml"&&Yh(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),y||($(w,_,I),Ys(w,!1)))},se=w=>{const y=()=>{if($n.get(w)===y){if($n.delete(w),Ar(w.props)){const _=j(w.el)||n;$(w,_,w.anchor),Ys(w,!0)}X(w)}};$n.set(w,y),_t(y,i)};if(t==null){const w=e.el=k(""),y=e.anchor=k("");if(v(w,n,r),v(y,n,r),Jv(e.props)||i&&i.pendingBranch){se(e);return}V&&($(e,n,y),Ys(e,!0)),X()}else{e.el=t.el;const w=e.anchor=t.anchor,y=$n.get(t);if(y){y.flags|=8,$n.delete(t),se(e);return}e.targetStart=t.targetStart;const _=e.target=t.target,I=e.targetAnchor=t.targetAnchor,b=Ar(t.props),A=b?n:_,E=b?w:I;if(o==="svg"||Jh(_)?o="svg":(o==="mathml"||Yh(_))&&(o="mathml"),q?(g(t.dynamicChildren,q,A,s,i,o,l),Xc(t,e,!0)):c||p(t,e,A,E,s,i,o,l,!1),V)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):wo(e,n,w,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Te=e.target=Ql(e.props,S);Te&&wo(e,Te,null,u,0)}else b&&wo(e,_,I,u,1);Ys(e,V)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:f,target:p,props:g}=t;let v=i||!Ar(g);const S=$n.get(t);if(S&&(S.flags|=8,$n.delete(t),v=!1),p&&(s(u),s(f)),i&&s(c),o&16)for(let k=0;k<l.length;k++){const N=l[k];r(N,e,n,v,!!N.dynamicChildren)}},move:wo,hydrate:Xv};function wo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),!$n.has(t)&&(!p||Ar(f))&&c&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(l,e,n)}function Xv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:f}},p){function g(N,j){let V=j;for(;V;){if(V&&V.nodeType===8){if(V.data==="teleport start anchor")e.targetStart=V;else if(V.data==="teleport anchor"){e.targetAnchor=V,N._lpa=e.targetAnchor&&o(e.targetAnchor);break}}V=o(V)}}function v(N,j){j.anchor=p(o(N),j,l(N),n,r,s,i)}const S=e.target=Ql(e.props,c),k=Ar(e.props);if(S){const N=S._lpa||S.firstChild;e.shapeFlag&16&&(k?(v(t,e),g(S,N),e.targetAnchor||Jl(S,e,f,u,l(t)===S?t:null)):(e.anchor=o(t),g(S,N),e.targetAnchor||Jl(S,e,f,u),p(N&&o(N),e,S,n,r,s,i))),Ys(e,k)}else k&&e.shapeFlag&16&&(v(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const cC=Yv;function Ys(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Jl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Xp]=o,t&&(r(i,t,s),r(o,t,s)),o}const en=Symbol("_leaveCb"),Ws=Symbol("_enterCb");function eg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lg(()=>{t.isMounted=!0}),ug(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],tg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},ng=t=>{const e=t.subTree;return e.component?ng(e.component):e},Zv={name:"BaseTransition",props:tg,setup(t,{slots:e}){const n=ka(),r=eg();return()=>{const s=e.default&&Qc(e.default(),!0),i=s&&s.length?rg(s):n.subTree?qE():void 0;if(!i)return;const o=Ee(t),{mode:l}=o;if(r.isLeaving)return wl(i);const c=Xh(i);if(!c)return wl(i);let u=Ri(c,o,r,n,p=>u=p);c.type!==Et&&Nr(c,u);let f=n.subTree&&Xh(n.subTree);if(f&&f.type!==Et&&!Rr(f,c)&&ng(n).type!==Et){let p=Ri(f,o,r,n);if(Nr(f,p),l==="out-in"&&c.type!==Et)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},wl(i);l==="in-out"&&c.type!==Et?p.delayLeave=(g,v,S)=>{const k=sg(r,f);k[String(f.key)]=f,g[en]=()=>{v(),g[en]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function rg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Et){e=n;break}}return e}const eE=Zv;function sg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ri(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:v,onAfterLeave:S,onLeaveCancelled:k,onBeforeAppear:N,onAppear:j,onAfterAppear:V,onAppearCancelled:q}=e,$=String(t.key),X=sg(n,t),se=(_,I)=>{_&&Gt(_,r,9,I)},w=(_,I)=>{const b=I[1];se(_,I),ne(_)?_.every(A=>A.length<=1)&&b():_.length<=1&&b()},y={mode:o,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=N||c;else return;_[en]&&_[en](!0);const b=X[$];b&&Rr(t,b)&&b.el[en]&&b.el[en](),se(I,[_])},enter(_){if(X[$]===t)return;let I=u,b=f,A=p;if(!n.isMounted)if(i)I=j||u,b=V||f,A=q||p;else return;let E=!1;_[Ws]=$e=>{E||(E=!0,$e?se(A,[_]):se(b,[_]),y.delayedLeave&&y.delayedLeave(),_[Ws]=void 0)};const Te=_[Ws].bind(null,!1);I?w(I,[_,Te]):Te()},leave(_,I){const b=String(t.key);if(_[Ws]&&_[Ws](!0),n.isUnmounting)return I();se(g,[_]);let A=!1;_[en]=Te=>{A||(A=!0,I(),Te?se(k,[_]):se(S,[_]),_[en]=void 0,X[b]===t&&delete X[b])};const E=_[en].bind(null,!1);X[b]=t,v?w(v,[_,E]):E()},clone(_){const I=Ri(_,e,n,r,s);return s&&s(I),I}};return y}function wl(t){if(ba(t))return t=ar(t),t.children=null,t}function Xh(t){if(!ba(t))return Zp(t.type)&&t.children?rg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Nr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Nr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===$t?(o.patchFlag&128&&s++,r=r.concat(Qc(o.children,e,l))):(e||o.type!==Et)&&r.push(l!=null?ar(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ig(t,e){return fe(t)?ze({name:t.name},e,{setup:t}):t}function og(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Go=new WeakMap;function hi(t,e,n,r,s=!1){if(ne(t)){t.forEach((k,N)=>hi(k,e&&(ne(e)?e[N]:e),n,r,s));return}if(fi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&hi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Na(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=Ee(p),v=p===Ne?_p:k=>Zh(f,k)?!1:be(g,k),S=(k,N)=>!(N&&Zh(f,N));if(u!=null&&u!==c){if(ef(e),xe(u))f[u]=null,v(u)&&(p[u]=null);else if(qe(u)){const k=e;S(u,k.k)&&(u.value=null),k.k&&(f[k.k]=null)}}if(fe(c))qi(c,l,12,[o,f]);else{const k=xe(c),N=qe(c);if(k||N){const j=()=>{if(t.f){const V=k?v(c)?p[c]:f[c]:S()||!t.k?c.value:f[t.k];if(s)ne(V)&&Lc(V,i);else if(ne(V))V.includes(i)||V.push(i);else if(k)f[c]=[i],v(c)&&(p[c]=f[c]);else{const q=[i];S(c,t.k)&&(c.value=q),t.k&&(f[t.k]=q)}}else k?(f[c]=o,v(c)&&(p[c]=o)):N&&(S(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const V=()=>{j(),Go.delete(t)};V.id=-1,Go.set(t,V),_t(V,n)}else ef(t),j()}}}function ef(t){const e=Go.get(t);e&&(e.flags|=8,Go.delete(t))}Ta().requestIdleCallback;Ta().cancelIdleCallback;const fi=t=>!!t.type.__asyncLoader,ba=t=>t.type.__isKeepAlive;function tE(t,e){ag(t,"a",e)}function nE(t,e){ag(t,"da",e)}function ag(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ba(s.parent.vnode)&&rE(r,e,n,s),s=s.parent}}function rE(t,e,n,r){const s=Sa(e,t,r,!0);hg(()=>{Lc(r[e],s)},n)}function Sa(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{bn();const l=$i(n),c=Gt(e,n,t,o);return l(),Sn(),c});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=dt)=>{(!Si||t==="sp")&&Sa(t,(...r)=>e(...r),n)},sE=On("bm"),lg=On("m"),iE=On("bu"),cg=On("u"),ug=On("bum"),hg=On("um"),oE=On("sp"),aE=On("rtg"),lE=On("rtc");function cE(t,e=dt){Sa("ec",t,e)}const uE="components",fg=Symbol.for("v-ndc");function uC(t){return xe(t)?hE(uE,t,!1)||t:t||fg}function hE(t,e,n=!0,r=!1){const s=kt||dt;if(s){const i=s.type;{const l=YE(i,!1);if(l&&(l===e||l===It(e)||l===va(It(e))))return i}const o=tf(s[t]||i[t],e)||tf(s.appContext[t],e);return!o&&r?i:o}}function tf(t,e){return t&&(t[e]||t[It(e)]||t[va(It(e))])}function hC(t,e,n,r){let s;const i=n,o=ne(t);if(o||xe(t)){const l=o&&Rn(t);let c=!1,u=!1;l&&(c=!Ot(t),u=Pn(t),t=Ia(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?cs(Kt(t[f])):Kt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Yl=t=>t?Vg(t)?Na(t):Yl(t.parent):null,di=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yl(t.parent),$root:t=>Yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>pg(t),$forceUpdate:t=>t.f||(t.f=()=>{zc(t.update)}),$nextTick:t=>t.n||(t.n=Ra.bind(t.proxy)),$watch:t=>Qv.bind(t)}),Al=(t,e)=>t!==Ne&&!t.__isScriptSetup&&be(t,e),fE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Al(r,e))return o[e]=1,r[e];if(s!==Ne&&be(s,e))return o[e]=2,s[e];if(be(i,e))return o[e]=3,i[e];if(n!==Ne&&be(n,e))return o[e]=4,n[e];Xl&&(o[e]=0)}}const u=di[e];let f,p;if(u)return e==="$attrs"&&ht(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Ne&&be(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,be(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Al(s,e)?(s[e]=n,!0):r!==Ne&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Ne&&l[0]!=="$"&&be(t,l)||Al(e,l)||be(i,l)||be(r,l)||be(di,l)||be(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nf(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xl=!0;function dE(t){const e=pg(t),n=t.proxy,r=t.ctx;Xl=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:v,updated:S,activated:k,deactivated:N,beforeDestroy:j,beforeUnmount:V,destroyed:q,unmounted:$,render:X,renderTracked:se,renderTriggered:w,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:b,components:A,directives:E,filters:Te}=e;if(u&&pE(u,r,null),o)for(const ce in o){const me=o[ce];fe(me)&&(r[ce]=me.bind(n))}if(s){const ce=s.call(n,n);Se(ce)&&(t.data=ji(ce))}if(Xl=!0,i)for(const ce in i){const me=i[ce],bt=fe(me)?me.bind(n,n):fe(me.get)?me.get.bind(n,n):sn,jt=!fe(me)&&fe(me.set)?me.set.bind(n):sn,Vt=Ct({get:bt,set:jt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Me=>Vt.value=Me})}if(l)for(const ce in l)dg(l[ce],r,n,ce);if(c){const ce=fe(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(me=>{No(me,ce[me])})}f&&rf(f,t,"c");function Pe(ce,me){ne(me)?me.forEach(bt=>ce(bt.bind(n))):me&&ce(me.bind(n))}if(Pe(sE,p),Pe(lg,g),Pe(iE,v),Pe(cg,S),Pe(tE,k),Pe(nE,N),Pe(cE,y),Pe(lE,se),Pe(aE,w),Pe(ug,V),Pe(hg,$),Pe(oE,_),ne(I))if(I.length){const ce=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(ce,me,{get:()=>n[me],set:bt=>n[me]=bt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===sn&&(t.render=X),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),E&&(t.directives=E),_&&og(t)}function pE(t,e,n=sn){ne(t)&&(t=Zl(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Ft(s.from||r,s.default,!0):i=Ft(s.from||r):i=Ft(s),qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function rf(t,e,n){Gt(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function dg(t,e,n,r){let s=r.includes(".")?Yp(n,r):()=>n[r];if(xe(t)){const i=e[t];fe(i)&&ui(s,i)}else if(fe(t))ui(s,t.bind(n));else if(Se(t))if(ne(t))t.forEach(i=>dg(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&ui(s,i,t)}}function pg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>zo(c,u,o,!0)),zo(c,e,o)),Se(e)&&i.set(e,c),c}function zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&zo(t,i,n,!0),s&&s.forEach(o=>zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=gE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const gE={data:sf,props:of,emits:of,methods:Xs,computed:Xs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Xs,directives:Xs,watch:_E,provide:sf,inject:mE};function sf(t,e){return e?t?function(){return ze(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function mE(t,e){return Xs(Zl(t),Zl(e))}function Zl(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Xs(t,e){return t?ze(Object.create(null),t,e):e}function of(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:ze(Object.create(null),nf(t),nf(e??{})):e}function _E(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function gg(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yE=0;function vE(t,e){return function(r,s=null){fe(r)||(r=ze({},r)),s!=null&&!Se(s)&&(s=null);const i=gg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:yE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ZE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!c){const v=u._ceVNode||Tt(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,f,g),c=!0,u._container=f,f.__vue_app__=u,Na(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Gt(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Cr;Cr=u;try{return f()}finally{Cr=p}}};return u}}let Cr=null;const EE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${It(e)}Modifiers`]||t[`${fr(e)}Modifiers`];function TE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&EE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>xe(f)?f.trim():f)),o.number&&(s=n.map(Ea)));let l,c=r[l=yl(e)]||r[l=yl(It(e))];!c&&i&&(c=r[l=yl(fr(e))]),c&&Gt(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Gt(u,t,6,s)}}const IE=new WeakMap;function mg(t,e,n=!1){const r=n?IE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=u=>{const f=mg(u,e,!0);f&&(l=!0,ze(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Se(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):ze(o,i),Se(t)&&r.set(t,o),o)}function Pa(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,fr(e))||be(t,e))}function af(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:v,ctx:S,inheritAttrs:k}=t,N=Ko(t);let j,V;try{if(n.shapeFlag&4){const $=s||r,X=$;j=nn(u.call(X,$,f,p,v,g,S)),V=l}else{const $=e;j=nn($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),V=e.props?l:wE(l)}}catch($){pi.length=0,Aa($,t,1),j=Tt(Et)}let q=j;if(V&&k!==!1){const $=Object.keys(V),{shapeFlag:X}=q;$.length&&X&7&&(i&&$.some(ma)&&(V=AE(V,i)),q=ar(q,V,!1,!0))}return n.dirs&&(q=ar(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Nr(q,n.transition),j=q,Ko(N),j}const wE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},AE=(t,e)=>{const n={};for(const r in t)(!ma(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function RE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(_g(o,r,g)&&!Pa(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?lf(r,o,u):!0:!!o;return!1}function lf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(_g(e,t,i)&&!Pa(n,i))return!0}return!1}function _g(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!or(r,s):r!==s}function bE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const yg={},vg=()=>Object.create(yg),Eg=t=>Object.getPrototypeOf(t)===yg;function SE(t,e,n,r=!1){const s={},i=vg();t.propsDefaults=Object.create(null),Tg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:qp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function PE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ee(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Pa(t.emitsOptions,g))continue;const v=e[g];if(c)if(be(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const S=It(g);s[S]=ec(c,l,S,v,t,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{Tg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!be(e,p)&&((f=fr(p))===p||!be(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=ec(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&yn(t.attrs,"set","")}function Tg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(oi(c))continue;const u=e[c];let f;s&&be(s,f=It(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Pa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ee(n),u=l||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=ec(s,c,p,u[p],t,!be(u,p))}}return o}function ec(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=be(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=$i(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===fr(n))&&(r=!0))}return r}const CE=new WeakMap;function Ig(t,e,n=!1){const r=n?CE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const f=p=>{c=!0;const[g,v]=Ig(p,e,!0);ze(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Se(t)&&r.set(t,ns),ns;if(ne(i))for(let f=0;f<i.length;f++){const p=It(i[f]);cf(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=It(f);if(cf(p)){const g=i[f],v=o[p]=ne(g)||fe(g)?{type:g}:ze({},g),S=v.type;let k=!1,N=!0;if(ne(S))for(let j=0;j<S.length;++j){const V=S[j],q=fe(V)&&V.name;if(q==="Boolean"){k=!0;break}else q==="String"&&(N=!1)}else k=fe(S)&&S.name==="Boolean";v[0]=k,v[1]=N,(k||be(v,"default"))&&l.push(p)}}const u=[o,l];return Se(t)&&r.set(t,u),u}function cf(t){return t[0]!=="$"&&!oi(t)}const Jc=t=>t==="_"||t==="_ctx"||t==="$stable",Yc=t=>ne(t)?t.map(nn):[nn(t)],kE=(t,e,n)=>{if(e._n)return e;const r=Wv((...s)=>Yc(e(...s)),n);return r._c=!1,r},wg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Jc(s))continue;const i=t[s];if(fe(i))e[s]=kE(s,i,r);else if(i!=null){const o=Yc(i);e[s]=()=>o}}},Ag=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},Rg=(t,e,n)=>{for(const r in e)(n||!Jc(r))&&(t[r]=e[r])},NE=(t,e,n)=>{const r=t.slots=vg();if(t.vnode.shapeFlag&32){const s=e._;s?(Rg(r,e,n),n&&Tp(r,"_",s,!0)):wg(e,r)}else e&&Ag(t,e)},DE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Rg(s,e,n):(i=!e.$stable,wg(e,s)),o=e}else e&&(Ag(t,e),o={default:1});if(i)for(const l in s)!Jc(l)&&o[l]==null&&delete s[l]},_t=LE;function OE(t){return VE(t)}function VE(t,e){const n=Ta();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:v=sn,insertStaticContent:S}=t,k=(T,R,P,O=null,F=null,M=null,G=void 0,K=null,H=!!R.dynamicChildren)=>{if(T===R)return;T&&!Rr(T,R)&&(O=x(T),Me(T,F,M,!0),T=null),R.patchFlag===-2&&(H=!1,R.dynamicChildren=null);const{type:U,ref:ie,shapeFlag:Q}=R;switch(U){case Ca:N(T,R,P,O);break;case Et:j(T,R,P,O);break;case Do:T==null&&V(R,P,O,G);break;case $t:A(T,R,P,O,F,M,G,K,H);break;default:Q&1?X(T,R,P,O,F,M,G,K,H):Q&6?E(T,R,P,O,F,M,G,K,H):(Q&64||Q&128)&&U.process(T,R,P,O,F,M,G,K,H,ee)}ie!=null&&F?hi(ie,T&&T.ref,M,R||T,!R):ie==null&&T&&T.ref!=null&&hi(T.ref,null,M,T,!0)},N=(T,R,P,O)=>{if(T==null)r(R.el=l(R.children),P,O);else{const F=R.el=T.el;R.children!==T.children&&u(F,R.children)}},j=(T,R,P,O)=>{T==null?r(R.el=c(R.children||""),P,O):R.el=T.el},V=(T,R,P,O)=>{[T.el,T.anchor]=S(T.children,R,P,O,T.el,T.anchor)},q=({el:T,anchor:R},P,O)=>{let F;for(;T&&T!==R;)F=g(T),r(T,P,O),T=F;r(R,P,O)},$=({el:T,anchor:R})=>{let P;for(;T&&T!==R;)P=g(T),s(T),T=P;s(R)},X=(T,R,P,O,F,M,G,K,H)=>{if(R.type==="svg"?G="svg":R.type==="math"&&(G="mathml"),T==null)se(R,P,O,F,M,G,K,H);else{const U=T.el&&T.el._isVueCE?T.el:null;try{U&&U._beginPatch(),_(T,R,F,M,G,K,H)}finally{U&&U._endPatch()}}},se=(T,R,P,O,F,M,G,K)=>{let H,U;const{props:ie,shapeFlag:Q,transition:te,dirs:oe}=T;if(H=T.el=o(T.type,M,ie&&ie.is,ie),Q&8?f(H,T.children):Q&16&&y(T.children,H,null,O,F,Rl(T,M),G,K),oe&&vr(T,null,O,"created"),w(H,T,T.scopeId,G,O),ie){for(const pe in ie)pe!=="value"&&!oi(pe)&&i(H,pe,null,ie[pe],M,O);"value"in ie&&i(H,"value",null,ie.value,M),(U=ie.onVnodeBeforeMount)&&Yt(U,O,T)}oe&&vr(T,null,O,"beforeMount");const ae=xE(F,te);ae&&te.beforeEnter(H),r(H,R,P),((U=ie&&ie.onVnodeMounted)||ae||oe)&&_t(()=>{try{U&&Yt(U,O,T),ae&&te.enter(H),oe&&vr(T,null,O,"mounted")}finally{}},F)},w=(T,R,P,O,F)=>{if(P&&v(T,P),O)for(let M=0;M<O.length;M++)v(T,O[M]);if(F){let M=F.subTree;if(R===M||Pg(M.type)&&(M.ssContent===R||M.ssFallback===R)){const G=F.vnode;w(T,G,G.scopeId,G.slotScopeIds,F.parent)}}},y=(T,R,P,O,F,M,G,K,H=0)=>{for(let U=H;U<T.length;U++){const ie=T[U]=K?_n(T[U]):nn(T[U]);k(null,ie,R,P,O,F,M,G,K)}},_=(T,R,P,O,F,M,G)=>{const K=R.el=T.el;let{patchFlag:H,dynamicChildren:U,dirs:ie}=R;H|=T.patchFlag&16;const Q=T.props||Ne,te=R.props||Ne;let oe;if(P&&Er(P,!1),(oe=te.onVnodeBeforeUpdate)&&Yt(oe,P,R,T),ie&&vr(R,T,P,"beforeUpdate"),P&&Er(P,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(K,""),U?I(T.dynamicChildren,U,K,P,O,Rl(R,F),M):G||me(T,R,K,null,P,O,Rl(R,F),M,!1),H>0){if(H&16)b(K,Q,te,P,F);else if(H&2&&Q.class!==te.class&&i(K,"class",null,te.class,F),H&4&&i(K,"style",Q.style,te.style,F),H&8){const ae=R.dynamicProps;for(let pe=0;pe<ae.length;pe++){const Ae=ae[pe],Fe=Q[Ae],We=te[Ae];(We!==Fe||Ae==="value")&&i(K,Ae,Fe,We,F,P)}}H&1&&T.children!==R.children&&f(K,R.children)}else!G&&U==null&&b(K,Q,te,P,F);((oe=te.onVnodeUpdated)||ie)&&_t(()=>{oe&&Yt(oe,P,R,T),ie&&vr(R,T,P,"updated")},O)},I=(T,R,P,O,F,M,G)=>{for(let K=0;K<R.length;K++){const H=T[K],U=R[K],ie=H.el&&(H.type===$t||!Rr(H,U)||H.shapeFlag&198)?p(H.el):P;k(H,U,ie,null,O,F,M,G,!0)}},b=(T,R,P,O,F)=>{if(R!==P){if(R!==Ne)for(const M in R)!oi(M)&&!(M in P)&&i(T,M,R[M],null,F,O);for(const M in P){if(oi(M))continue;const G=P[M],K=R[M];G!==K&&M!=="value"&&i(T,M,K,G,F,O)}"value"in P&&i(T,"value",R.value,P.value,F)}},A=(T,R,P,O,F,M,G,K,H)=>{const U=R.el=T?T.el:l(""),ie=R.anchor=T?T.anchor:l("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:oe}=R;oe&&(K=K?K.concat(oe):oe),T==null?(r(U,P,O),r(ie,P,O),y(R.children||[],P,ie,F,M,G,K,H)):Q>0&&Q&64&&te&&T.dynamicChildren&&T.dynamicChildren.length===te.length?(I(T.dynamicChildren,te,P,F,M,G,K),(R.key!=null||F&&R===F.subTree)&&Xc(T,R,!0)):me(T,R,P,ie,F,M,G,K,H)},E=(T,R,P,O,F,M,G,K,H)=>{R.slotScopeIds=K,T==null?R.shapeFlag&512?F.ctx.activate(R,P,O,G,H):Te(R,P,O,F,M,G,H):$e(T,R,H)},Te=(T,R,P,O,F,M,G)=>{const K=T.component=KE(T,O,F);if(ba(T)&&(K.ctx.renderer=ee),GE(K,!1,G),K.asyncDep){if(F&&F.registerDep(K,Pe,G),!T.el){const H=K.subTree=Tt(Et);j(null,H,R,P),T.placeholder=H.el}}else Pe(K,T,R,P,F,M,G)},$e=(T,R,P)=>{const O=R.component=T.component;if(RE(T,R,P))if(O.asyncDep&&!O.asyncResolved){ce(O,R,P);return}else O.next=R,O.update();else R.el=T.el,O.vnode=R},Pe=(T,R,P,O,F,M,G)=>{const K=()=>{if(T.isMounted){let{next:Q,bu:te,u:oe,parent:ae,vnode:pe}=T;{const ot=bg(T);if(ot){Q&&(Q.el=pe.el,ce(T,Q,G)),ot.asyncDep.then(()=>{_t(()=>{T.isUnmounted||U()},F)});return}}let Ae=Q,Fe;Er(T,!1),Q?(Q.el=pe.el,ce(T,Q,G)):Q=pe,te&&ko(te),(Fe=Q.props&&Q.props.onVnodeBeforeUpdate)&&Yt(Fe,ae,Q,pe),Er(T,!0);const We=af(T),xt=T.subTree;T.subTree=We,k(xt,We,p(xt.el),x(xt),T,F,M),Q.el=We.el,Ae===null&&bE(T,We.el),oe&&_t(oe,F),(Fe=Q.props&&Q.props.onVnodeUpdated)&&_t(()=>Yt(Fe,ae,Q,pe),F)}else{let Q;const{el:te,props:oe}=R,{bm:ae,m:pe,parent:Ae,root:Fe,type:We}=T,xt=fi(R);Er(T,!1),ae&&ko(ae),!xt&&(Q=oe&&oe.onVnodeBeforeMount)&&Yt(Q,Ae,R),Er(T,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(We,T.parent?T.parent.type:void 0);const ot=T.subTree=af(T);k(null,ot,P,O,T,F,M),R.el=ot.el}if(pe&&_t(pe,F),!xt&&(Q=oe&&oe.onVnodeMounted)){const ot=R;_t(()=>Yt(Q,Ae,ot),F)}(R.shapeFlag&256||Ae&&fi(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&T.a&&_t(T.a,F),T.isMounted=!0,R=P=O=null}};T.scope.on();const H=T.effect=new Pp(K);T.scope.off();const U=T.update=H.run.bind(H),ie=T.job=H.runIfDirty.bind(H);ie.i=T,ie.id=T.uid,H.scheduler=()=>zc(ie),Er(T,!0),U()},ce=(T,R,P)=>{R.component=T;const O=T.vnode.props;T.vnode=R,T.next=null,PE(T,R.props,O,P),DE(T,R.children,P),bn(),Qh(T),Sn()},me=(T,R,P,O,F,M,G,K,H=!1)=>{const U=T&&T.children,ie=T?T.shapeFlag:0,Q=R.children,{patchFlag:te,shapeFlag:oe}=R;if(te>0){if(te&128){jt(U,Q,P,O,F,M,G,K,H);return}else if(te&256){bt(U,Q,P,O,F,M,G,K,H);return}}oe&8?(ie&16&&At(U,F,M),Q!==U&&f(P,Q)):ie&16?oe&16?jt(U,Q,P,O,F,M,G,K,H):At(U,F,M,!0):(ie&8&&f(P,""),oe&16&&y(Q,P,O,F,M,G,K,H))},bt=(T,R,P,O,F,M,G,K,H)=>{T=T||ns,R=R||ns;const U=T.length,ie=R.length,Q=Math.min(U,ie);let te;for(te=0;te<Q;te++){const oe=R[te]=H?_n(R[te]):nn(R[te]);k(T[te],oe,P,null,F,M,G,K,H)}U>ie?At(T,F,M,!0,!1,Q):y(R,P,O,F,M,G,K,H,Q)},jt=(T,R,P,O,F,M,G,K,H)=>{let U=0;const ie=R.length;let Q=T.length-1,te=ie-1;for(;U<=Q&&U<=te;){const oe=T[U],ae=R[U]=H?_n(R[U]):nn(R[U]);if(Rr(oe,ae))k(oe,ae,P,null,F,M,G,K,H);else break;U++}for(;U<=Q&&U<=te;){const oe=T[Q],ae=R[te]=H?_n(R[te]):nn(R[te]);if(Rr(oe,ae))k(oe,ae,P,null,F,M,G,K,H);else break;Q--,te--}if(U>Q){if(U<=te){const oe=te+1,ae=oe<ie?R[oe].el:O;for(;U<=te;)k(null,R[U]=H?_n(R[U]):nn(R[U]),P,ae,F,M,G,K,H),U++}}else if(U>te)for(;U<=Q;)Me(T[U],F,M,!0),U++;else{const oe=U,ae=U,pe=new Map;for(U=ae;U<=te;U++){const et=R[U]=H?_n(R[U]):nn(R[U]);et.key!=null&&pe.set(et.key,U)}let Ae,Fe=0;const We=te-ae+1;let xt=!1,ot=0;const Mn=new Array(We);for(U=0;U<We;U++)Mn[U]=0;for(U=oe;U<=Q;U++){const et=T[U];if(Fe>=We){Me(et,F,M,!0);continue}let Mt;if(et.key!=null)Mt=pe.get(et.key);else for(Ae=ae;Ae<=te;Ae++)if(Mn[Ae-ae]===0&&Rr(et,R[Ae])){Mt=Ae;break}Mt===void 0?Me(et,F,M,!0):(Mn[Mt-ae]=U+1,Mt>=ot?ot=Mt:xt=!0,k(et,R[Mt],P,null,F,M,G,K,H),Fe++)}const Ns=xt?ME(Mn):ns;for(Ae=Ns.length-1,U=We-1;U>=0;U--){const et=ae+U,Mt=R[et],ro=R[et+1],$r=et+1<ie?ro.el||Sg(ro):O;Mn[U]===0?k(null,Mt,P,$r,F,M,G,K,H):xt&&(Ae<0||U!==Ns[Ae]?Vt(Mt,P,$r,2):Ae--)}}},Vt=(T,R,P,O,F=null)=>{const{el:M,type:G,transition:K,children:H,shapeFlag:U}=T;if(U&6){Vt(T.component.subTree,R,P,O);return}if(U&128){T.suspense.move(R,P,O);return}if(U&64){G.move(T,R,P,ee);return}if(G===$t){r(M,R,P);for(let Q=0;Q<H.length;Q++)Vt(H[Q],R,P,O);r(T.anchor,R,P);return}if(G===Do){q(T,R,P);return}if(O!==2&&U&1&&K)if(O===0)K.beforeEnter(M),r(M,R,P),_t(()=>K.enter(M),F);else{const{leave:Q,delayLeave:te,afterLeave:oe}=K,ae=()=>{T.ctx.isUnmounted?s(M):r(M,R,P)},pe=()=>{M._isLeaving&&M[en](!0),Q(M,()=>{ae(),oe&&oe()})};te?te(M,ae,pe):pe()}else r(M,R,P)},Me=(T,R,P,O=!1,F=!1)=>{const{type:M,props:G,ref:K,children:H,dynamicChildren:U,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:oe,memo:ae}=T;if(Q===-2&&(F=!1),K!=null&&(bn(),hi(K,null,P,T,!0),Sn()),oe!=null&&(R.renderCache[oe]=void 0),ie&256){R.ctx.deactivate(T);return}const pe=ie&1&&te,Ae=!fi(T);let Fe;if(Ae&&(Fe=G&&G.onVnodeBeforeUnmount)&&Yt(Fe,R,T),ie&6)St(T.component,P,O);else{if(ie&128){T.suspense.unmount(P,O);return}pe&&vr(T,null,R,"beforeUnmount"),ie&64?T.type.remove(T,R,P,ee,O):U&&!U.hasOnce&&(M!==$t||Q>0&&Q&64)?At(U,R,P,!1,!0):(M===$t&&Q&384||!F&&ie&16)&&At(H,R,P),O&&Le(T)}const We=ae!=null&&oe==null;(Ae&&(Fe=G&&G.onVnodeUnmounted)||pe||We)&&_t(()=>{Fe&&Yt(Fe,R,T),pe&&vr(T,null,R,"unmounted"),We&&(T.el=null)},P)},Le=T=>{const{type:R,el:P,anchor:O,transition:F}=T;if(R===$t){xn(P,O);return}if(R===Do){$(T);return}const M=()=>{s(P),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(T.shapeFlag&1&&F&&!F.persisted){const{leave:G,delayLeave:K}=F,H=()=>G(P,M);K?K(T.el,M,H):H()}else M()},xn=(T,R)=>{let P;for(;T!==R;)P=g(T),s(T),T=P;s(R)},St=(T,R,P)=>{const{bum:O,scope:F,job:M,subTree:G,um:K,m:H,a:U}=T;uf(H),uf(U),O&&ko(O),F.stop(),M&&(M.flags|=8,Me(G,T,R,P)),K&&_t(K,R),_t(()=>{T.isUnmounted=!0},R)},At=(T,R,P,O=!1,F=!1,M=0)=>{for(let G=M;G<T.length;G++)Me(T[G],R,P,O,F)},x=T=>{if(T.shapeFlag&6)return x(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=g(T.anchor||T.el),P=R&&R[Xp];return P?g(P):R};let Y=!1;const z=(T,R,P)=>{let O;T==null?R._vnode&&(Me(R._vnode,null,null,!0),O=R._vnode.component):k(R._vnode||null,T,R,null,null,null,P),R._vnode=T,Y||(Y=!0,Qh(O),Gp(),Y=!1)},ee={p:k,um:Me,m:Vt,r:Le,mt:Te,mc:y,pc:me,pbc:I,n:x,o:t};return{render:z,hydrate:void 0,createApp:vE(z)}}function Rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xc(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=_n(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Xc(o,l)),l.type===Ca&&(l.patchFlag===-1&&(l=s[i]=_n(l)),l.el=o.el),l.type===Et&&!l.el&&(l.el=o.el)}}function ME(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function bg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bg(e)}function uf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Sg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Sg(e.subTree):null}const Pg=t=>t.__isSuspense;function LE(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Hv(t)}const $t=Symbol.for("v-fgt"),Ca=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),pi=[];let Nt=null;function Cg(t=!1){pi.push(Nt=t?null:[])}function FE(){pi.pop(),Nt=pi[pi.length-1]||null}let bi=1;function Qo(t,e=!1){bi+=t,t<0&&Nt&&e&&(Nt.hasOnce=!0)}function kg(t){return t.dynamicChildren=bi>0?Nt||ns:null,FE(),bi>0&&Nt&&Nt.push(t),t}function fC(t,e,n,r,s,i){return kg(Og(t,e,n,r,s,i,!0))}function Ng(t,e,n,r,s){return kg(Tt(t,e,n,r,s,!0))}function Jo(t){return t?t.__v_isVNode===!0:!1}function Rr(t,e){return t.type===e.type&&t.key===e.key}const Dg=({key:t})=>t??null,Oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||qe(t)||fe(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function Og(t,e=null,n=null,r=0,s=null,i=t===$t?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dg(e),ref:e&&Oo(e),scopeId:Qp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return l?(Zc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),bi>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const Tt=UE;function UE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fg)&&(t=Et),Jo(t)){const l=ar(t,e,!0);return n&&Zc(l,n),bi>0&&!i&&Nt&&(l.shapeFlag&6?Nt[Nt.indexOf(t)]=l:Nt.push(l)),l.patchFlag=-2,l}if(XE(t)&&(t=t.__vccOpts),e){e=BE(e);let{class:l,style:c}=e;l&&!xe(l)&&(e.class=Uc(l)),Se(c)&&(wa(c)&&!ne(c)&&(c=ze({},c)),e.style=Fc(c))}const o=xe(t)?1:Pg(t)?128:Zp(t)?64:Se(t)?4:fe(t)?2:0;return Og(t,e,n,r,s,o,i,!0)}function BE(t){return t?wa(t)||Eg(t)?ze({},t):t:null}function ar(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?$E(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Dg(u),ref:e&&e.ref?n&&i?ne(i)?i.concat(Oo(e)):[i,Oo(e)]:Oo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ar(t.ssContent),ssFallback:t.ssFallback&&ar(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Nr(f,c.clone(f)),f}function jE(t=" ",e=0){return Tt(Ca,null,t,e)}function dC(t,e){const n=Tt(Do,null,t);return n.staticCount=e,n}function qE(t="",e=!1){return e?(Cg(),Ng(Et,null,t)):Tt(Et,null,t)}function nn(t){return t==null||typeof t=="boolean"?Tt(Et):ne(t)?Tt($t,null,t.slice()):Jo(t)?_n(t):Tt(Ca,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ar(t)}function Zc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Eg(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[jE(e)]):n=8);t.children=e,t.shapeFlag|=n}function $E(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Uc([e.class,r.class]));else if(s==="style")e.style=Fc([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!ma(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){Gt(t,e,7,[n,r])}const HE=gg();let WE=0;function KE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||HE,i={uid:WE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ig(r,s),emitsOptions:mg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=TE.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const ka=()=>dt||kt;let Yo,tc;{const t=Ta(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),tc=e("__VUE_SSR_SETTERS__",n=>Si=n)}const $i=t=>{const e=dt;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},hf=()=>{dt&&dt.scope.off(),Yo(null)};function Vg(t){return t.vnode.shapeFlag&4}let Si=!1;function GE(t,e=!1,n=!1){e&&tc(e);const{props:r,children:s}=t.vnode,i=Vg(t);SE(t,r,i,e),NE(t,s,n||e);const o=i?zE(t,e):void 0;return e&&tc(!1),o}function zE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fE);const{setup:r}=n;if(r){bn();const s=t.setupContext=r.length>1?JE(t):null,i=$i(t),o=qi(r,t,0,[t.props,s]),l=yp(o);if(Sn(),i(),(l||t.sp)&&!fi(t)&&og(t),l){if(o.then(hf,hf),e)return o.then(c=>{ff(t,c)}).catch(c=>{Aa(c,t,0)});t.asyncDep=o}else ff(t,o)}else xg(t)}function ff(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Hp(e)),xg(t)}function xg(t,e,n){const r=t.type;t.render||(t.render=r.render||sn);{const s=$i(t);bn();try{dE(t)}finally{Sn(),s()}}}const QE={get(t,e){return ht(t,"get",""),t[e]}};function JE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,QE),slots:t.slots,emit:t.emit,expose:e}}function Na(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hp(Gc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)},has(e,n){return n in e||n in di}})):t.proxy}function YE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function XE(t){return fe(t)&&"__vccOpts"in t}const Ct=(t,e)=>Uv(t,e,Si);function eu(t,e,n){try{Qo(-1);const r=arguments.length;return r===2?Se(e)&&!ne(e)?Jo(e)?Tt(t,null,[e]):Tt(t,e):Tt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jo(n)&&(n=[n]),Tt(t,e,n))}finally{Qo(1)}}const ZE="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nc;const df=typeof window<"u"&&window.trustedTypes;if(df)try{nc=df.createPolicy("vue",{createHTML:t=>t})}catch{}const Mg=nc?t=>nc.createHTML(t):t=>t,eT="http://www.w3.org/2000/svg",tT="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,pf=mn&&mn.createElement("template"),nT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mn.createElementNS(eT,t):e==="mathml"?mn.createElementNS(tT,t):n?mn.createElement(t,{is:n}):mn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{pf.innerHTML=Mg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=pf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Bn="transition",Ks="animation",us=Symbol("_vtc"),Lg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fg=ze({},tg,Lg),rT=t=>(t.displayName="Transition",t.props=Fg,t),pC=rT((t,{slots:e})=>eu(eE,Ug(t),e)),Tr=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},gf=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Ug(t){const e={};for(const A in t)A in Lg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,S=sT(s),k=S&&S[0],N=S&&S[1],{onBeforeEnter:j,onEnter:V,onEnterCancelled:q,onLeave:$,onLeaveCancelled:X,onBeforeAppear:se=j,onAppear:w=V,onAppearCancelled:y=q}=e,_=(A,E,Te,$e)=>{A._enterCancelled=$e,Hn(A,E?f:l),Hn(A,E?u:o),Te&&Te()},I=(A,E)=>{A._isLeaving=!1,Hn(A,p),Hn(A,v),Hn(A,g),E&&E()},b=A=>(E,Te)=>{const $e=A?w:V,Pe=()=>_(E,A,Te);Tr($e,[E,Pe]),mf(()=>{Hn(E,A?c:i),Xt(E,A?f:l),gf($e)||_f(E,r,k,Pe)})};return ze(e,{onBeforeEnter(A){Tr(j,[A]),Xt(A,i),Xt(A,o)},onBeforeAppear(A){Tr(se,[A]),Xt(A,c),Xt(A,u)},onEnter:b(!1),onAppear:b(!0),onLeave(A,E){A._isLeaving=!0;const Te=()=>I(A,E);Xt(A,p),A._enterCancelled?(Xt(A,g),rc(A)):(rc(A),Xt(A,g)),mf(()=>{A._isLeaving&&(Hn(A,p),Xt(A,v),gf($)||_f(A,r,N,Te))}),Tr($,[A,Te])},onEnterCancelled(A){_(A,!1,void 0,!0),Tr(q,[A])},onAppearCancelled(A){_(A,!0,void 0,!0),Tr(y,[A])},onLeaveCancelled(A){I(A),Tr(X,[A])}})}function sT(t){if(t==null)return null;if(Se(t))return[bl(t.enter),bl(t.leave)];{const e=bl(t);return[e,e]}}function bl(t){return rv(t)}function Xt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[us]||(t[us]=new Set)).add(e)}function Hn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[us];n&&(n.delete(e),n.size||(t[us]=void 0))}function mf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let iT=0;function _f(t,e,n,r){const s=t._endId=++iT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Bg(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=v=>{v.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,g)}function Bg(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${Bn}Delay`),i=r(`${Bn}Duration`),o=yf(s,i),l=r(`${Ks}Delay`),c=r(`${Ks}Duration`),u=yf(l,c);let f=null,p=0,g=0;e===Bn?o>0&&(f=Bn,p=o,g=i.length):e===Ks?u>0&&(f=Ks,p=u,g=c.length):(p=Math.max(o,u),f=p>0?o>u?Bn:Ks:null,g=f?f===Bn?i.length:c.length:0);const v=f===Bn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Bn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:v}}function yf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>vf(n)+vf(t[r])))}function vf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function rc(t){return(t?t.ownerDocument:document).body.offsetHeight}function oT(t,e,n){const r=t[us];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xo=Symbol("_vod"),jg=Symbol("_vsh"),gC={name:"show",beforeMount(t,{value:e},{transition:n}){t[Xo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Gs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Gs(t,!0),r.enter(t)):r.leave(t,()=>{Gs(t,!1)}):Gs(t,e))},beforeUnmount(t,{value:e}){Gs(t,e)}};function Gs(t,e){t.style.display=e?t[Xo]:"none",t[jg]=!e}const aT=Symbol(""),lT=/(?:^|;)\s*display\s*:/;function cT(t,e,n){const r=t.style,s=xe(n);let i=!1;if(n&&!s){if(e)if(xe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Zs(r,l,"")}else for(const o in e)n[o]==null&&Zs(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?hT(t,o,!xe(e)&&e?e[o]:void 0,l)||Zs(r,o,l):Zs(r,o,"")}}else if(s){if(e!==n){const o=r[aT];o&&(n+=";"+o),r.cssText=n,i=lT.test(n)}}else e&&t.removeAttribute("style");Xo in t&&(t[Xo]=i?r.display:"",t[jg]&&(r.display="none"))}const Ef=/\s*!important$/;function Zs(t,e,n){if(ne(n))n.forEach(r=>Zs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uT(t,e);Ef.test(n)?t.setProperty(fr(r),n.replace(Ef,""),"important"):t[r]=n}}const Tf=["Webkit","Moz","ms"],Sl={};function uT(t,e){const n=Sl[e];if(n)return n;let r=It(e);if(r!=="filter"&&r in t)return Sl[e]=r;r=va(r);for(let s=0;s<Tf.length;s++){const i=Tf[s]+r;if(i in t)return Sl[e]=i}return e}function hT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&xe(r)&&n===r}const If="http://www.w3.org/1999/xlink";function wf(t,e,n,r,s,i=cv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(If,e.slice(6,e.length)):t.setAttributeNS(If,e,n):n==null||i&&!Ip(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Bt(n)?String(n):n)}function Af(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Mg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ip(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function En(t,e,n,r){t.addEventListener(e,n,r)}function fT(t,e,n,r){t.removeEventListener(e,n,r)}const Rf=Symbol("_vei");function dT(t,e,n,r,s=null){const i=t[Rf]||(t[Rf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=pT(e);if(r){const u=i[e]=_T(r,s);En(t,l,u,c)}else o&&(fT(t,l,o,c),i[e]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function pT(t){let e;if(bf.test(t)){e={};let r;for(;r=t.match(bf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fr(t.slice(2)),e]}let Pl=0;const gT=Promise.resolve(),mT=()=>Pl||(gT.then(()=>Pl=0),Pl=Date.now());function _T(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(yT(r,n.value),e,5,[r])};return n.value=t,n.attached=mT(),n}function yT(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?oT(t,r,o):e==="style"?cT(t,n,r):ga(e)?ma(e)||dT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ET(t,e,r,o))?(Af(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wf(t,e,r,o,i,e!=="value")):t._isVueCE&&(TT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!xe(r)))?Af(t,It(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wf(t,e,r,o))};function ET(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sf(e)&&xe(n)?!1:e in t}function TT(t,e){const n=t._def.props;if(!n)return!1;const r=It(e);return Array.isArray(n)?n.some(s=>It(s)===r):Object.keys(n).some(s=>It(s)===r)}const qg=new WeakMap,$g=new WeakMap,Zo=Symbol("_moveCb"),Pf=Symbol("_enterCb"),IT=t=>(delete t.props.mode,t),wT=IT({name:"TransitionGroup",props:ze({},Fg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ka(),r=eg();let s,i;return cg(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!ST(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(AT),s.forEach(RT);const l=s.filter(bT);rc(n.vnode.el),l.forEach(c=>{const u=c.el,f=u.style;Xt(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=u[Zo]=g=>{g&&g.target!==u||(!g||g.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",p),u[Zo]=null,Hn(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Ee(t),l=Ug(o);let c=o.tag||$t;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),Nr(f,Ri(f,l,r,n)),qg.set(f,Hg(f.el)))}i=e.default?Qc(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&Nr(f,Ri(f,l,r,n))}return Tt(c,null,i)}}}),mC=wT;function AT(t){const e=t.el;e[Zo]&&e[Zo](),e[Pf]&&e[Pf]()}function RT(t){$g.set(t,Hg(t.el))}function bT(t){const e=qg.get(t),n=$g.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el,o=i.style,l=i.getBoundingClientRect();let c=1,u=1;return i.offsetWidth&&(c=l.width/i.offsetWidth),i.offsetHeight&&(u=l.height/i.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(c-1)<.01&&(c=1),Math.abs(u-1)<.01&&(u=1),o.transform=o.webkitTransform=`translate(${r/c}px,${s/u}px)`,o.transitionDuration="0s",t}}function Hg(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function ST(t,e,n){const r=t.cloneNode(),s=t[us];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Bg(r);return i.removeChild(r),o}const lr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>ko(e,n):e};function PT(t){t.target.composing=!0}function Cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ut=Symbol("_assign");function kf(t,e,n){return e&&(t=t.trim()),n&&(t=Ea(t)),t}const Nf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ut]=lr(s);const i=r||s.props&&s.props.type==="number";En(t,e?"change":"input",o=>{o.target.composing||t[Ut](kf(t.value,n,i))}),(n||i)&&En(t,"change",()=>{t.value=kf(t.value,n,i)}),e||(En(t,"compositionstart",PT),En(t,"compositionend",Cf),En(t,"change",Cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ut]=lr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ea(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},CT={deep:!0,created(t,e,n){t[Ut]=lr(n),En(t,"change",()=>{const r=t._modelValue,s=hs(t),i=t.checked,o=t[Ut];if(ne(r)){const l=Bc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(ws(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Wg(t,i))})},mounted:Df,beforeUpdate(t,e,n){t[Ut]=lr(n),Df(t,e,n)}};function Df(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ne(e))s=Bc(e,r.props.value)>-1;else if(ws(e))s=e.has(r.props.value);else{if(e===n)return;s=or(e,Wg(t,!0))}t.checked!==s&&(t.checked=s)}const kT={created(t,{value:e},n){t.checked=or(e,n.props.value),t[Ut]=lr(n),En(t,"change",()=>{t[Ut](hs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Ut]=lr(r),e!==n&&(t.checked=or(e,r.props.value))}},NT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ws(e);En(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ea(hs(o)):hs(o));t[Ut](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ra(()=>{t._assigning=!1})}),t[Ut]=lr(r)},mounted(t,{value:e}){Of(t,e)},beforeUpdate(t,e,n){t[Ut]=lr(n)},updated(t,{value:e}){t._assigning||Of(t,e)}};function Of(t,e){const n=t.multiple,r=ne(e);if(!(n&&!r&&!ws(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=hs(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Bc(e,l)>-1}else o.selected=e.has(l);else if(or(hs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function hs(t){return"_value"in t?t._value:t.value}function Wg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const _C={created(t,e,n){Ao(t,e,n,null,"created")},mounted(t,e,n){Ao(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Ao(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Ao(t,e,n,r,"updated")}};function DT(t,e){switch(t){case"SELECT":return NT;case"TEXTAREA":return Nf;default:switch(e){case"checkbox":return CT;case"radio":return kT;default:return Nf}}}function Ao(t,e,n,r,s){const o=DT(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const OT=["ctrl","shift","alt","meta"],VT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>OT.some(n=>t[`${n}Key`]&&!e.includes(n))},yC=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=VT[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},xT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vC=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=fr(s.key);if(e.some(o=>o===i||xT[o]===i))return t(s)}))},MT=ze({patchProp:vT},nT);let Vf;function LT(){return Vf||(Vf=OE(MT))}const FT=((...t)=>{const e=LT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=BT(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,UT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function UT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function BT(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Kg;const Da=t=>Kg=t,Gg=Symbol();function sc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var gi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(gi||(gi={}));function jT(){const t=bp(!0),e=t.run(()=>ci({}));let n=[],r=[];const s=Gc({install(i){Da(s),s._a=i,i.provide(Gg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const zg=()=>{};function xf(t,e,n,r=zg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Sp()&&fv(s),s}function Qr(t,...e){t.slice().forEach(n=>{n(...e)})}const qT=t=>t(),Mf=Symbol(),Cl=Symbol();function ic(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];sc(s)&&sc(r)&&t.hasOwnProperty(n)&&!qe(r)&&!Rn(r)?t[n]=ic(s,r):t[n]=r}return t}const $T=Symbol();function HT(t){return!sc(t)||!t.hasOwnProperty($T)}const{assign:Wn}=Object;function WT(t){return!!(qe(t)&&t.effect)}function KT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=xv(n.state.value[t]);return Wn(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=Gc(Ct(()=>{Da(n);const v=n._s.get(t);return o[g].call(v,v)})),p),{}))}return c=Qg(t,u,e,n,r,!0),c}function Qg(t,e,n={},r,s,i){let o;const l=Wn({actions:{}},n),c={deep:!0};let u,f,p=[],g=[],v;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={});let k;function N(y){let _;u=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:gi.patchFunction,storeId:t,events:v}):(ic(r.state.value[t],y),_={type:gi.patchObject,payload:y,storeId:t,events:v});const I=k=Symbol();Ra().then(()=>{k===I&&(u=!0)}),f=!0,Qr(p,_,r.state.value[t])}const j=i?function(){const{state:_}=n,I=_?_():{};this.$patch(b=>{Wn(b,I)})}:zg;function V(){o.stop(),p=[],g=[],r._s.delete(t)}const q=(y,_="")=>{if(Mf in y)return y[Cl]=_,y;const I=function(){Da(r);const b=Array.from(arguments),A=[],E=[];function Te(ce){A.push(ce)}function $e(ce){E.push(ce)}Qr(g,{args:b,name:I[Cl],store:X,after:Te,onError:$e});let Pe;try{Pe=y.apply(this&&this.$id===t?this:X,b)}catch(ce){throw Qr(E,ce),ce}return Pe instanceof Promise?Pe.then(ce=>(Qr(A,ce),ce)).catch(ce=>(Qr(E,ce),Promise.reject(ce))):(Qr(A,Pe),Pe)};return I[Mf]=!0,I[Cl]=_,I},$={_p:r,$id:t,$onAction:xf.bind(null,g),$patch:N,$reset:j,$subscribe(y,_={}){const I=xf(p,y,_.detached,()=>b()),b=o.run(()=>ui(()=>r.state.value[t],A=>{(_.flush==="sync"?f:u)&&y({storeId:t,type:gi.direct,events:v},A)},Wn({},c,_)));return I},$dispose:V},X=ji($);r._s.set(t,X);const w=(r._a&&r._a.runWithContext||qT)(()=>r._e.run(()=>(o=bp()).run(()=>e({action:q}))));for(const y in w){const _=w[y];if(qe(_)&&!WT(_)||Rn(_))i||(S&&HT(_)&&(qe(_)?_.value=S[y]:ic(_,S[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const I=q(_,y);w[y]=I,l.actions[y]=_}}return Wn(X,w),Wn(Ee(X),w),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{Wn(_,y)})}}),r._p.forEach(y=>{Wn(X,o.run(()=>y({store:X,app:r._a,pinia:r,options:l})))}),S&&i&&n.hydrate&&n.hydrate(X.$state,S),u=!0,f=!0,X}/*! #__NO_SIDE_EFFECTS__ */function GT(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=Kv();return l=l||(u?Ft(Gg,null):null),l&&Da(l),l=Kg,l._s.has(r)||(i?Qg(r,e,s,l):KT(r,s,l)),l._s.get(r)}return o.$id=r,o}const zT="modulepreload",QT=function(t){return"/"+t},Lf={},zs=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(u=>{if(u=QT(u),u in Lf)return;Lf[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":zT,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((v,S)=>{g.addEventListener("load",v),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Yr=typeof document<"u";function Jg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function JT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Jg(t.default)}const Re=Object.assign;function kl(t,e){const n={};for(const r in e){const s=e[r];n[r]=zt(s)?s.map(t):t(s)}return n}const mi=()=>{},zt=Array.isArray;function Ff(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Yg=/#/g,YT=/&/g,XT=/\//g,ZT=/=/g,eI=/\?/g,Xg=/\+/g,tI=/%5B/g,nI=/%5D/g,Zg=/%5E/g,rI=/%60/g,em=/%7B/g,sI=/%7C/g,tm=/%7D/g,iI=/%20/g;function tu(t){return t==null?"":encodeURI(""+t).replace(sI,"|").replace(tI,"[").replace(nI,"]")}function oI(t){return tu(t).replace(em,"{").replace(tm,"}").replace(Zg,"^")}function oc(t){return tu(t).replace(Xg,"%2B").replace(iI,"+").replace(Yg,"%23").replace(YT,"%26").replace(rI,"`").replace(em,"{").replace(tm,"}").replace(Zg,"^")}function aI(t){return oc(t).replace(ZT,"%3D")}function lI(t){return tu(t).replace(Yg,"%23").replace(eI,"%3F")}function cI(t){return lI(t).replace(XT,"%2F")}function Pi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const uI=/\/$/,hI=t=>t.replace(uI,"");function Nl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=gI(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Pi(o)}}function fI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fs(e.matched[r],n.matched[s])&&nm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!pI(t[n],e[n]))return!1;return!0}function pI(t,e){return zt(t)?Bf(t,e):zt(e)?Bf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Bf(t,e){return zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ac=(function(t){return t.pop="pop",t.push="push",t})({}),Dl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function mI(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hI(t)}const _I=/^[^#]+#/;function yI(t,e){return t.replace(_I,"#")+e}function vI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function EI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jf(t,e){return(history.state?history.state.position-e:-1)+t}const lc=new Map;function TI(t,e){lc.set(t,e)}function II(t){const e=lc.get(t);return lc.delete(t),e}function wI(t){return typeof t=="string"||t&&typeof t=="object"}function rm(t){return typeof t=="string"||typeof t=="symbol"}let je=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const sm=Symbol("");je.MATCHER_NOT_FOUND+"",je.NAVIGATION_GUARD_REDIRECT+"",je.NAVIGATION_ABORTED+"",je.NAVIGATION_CANCELLED+"",je.NAVIGATION_DUPLICATED+"";function ds(t,e){return Re(new Error,{type:t,[sm]:!0},e)}function gn(t,e){return t instanceof Error&&sm in t&&(e==null||!!(t.type&e))}const AI=["params","query","hash"];function RI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of AI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function bI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Xg," "),i=s.indexOf("="),o=Pi(i<0?s:s.slice(0,i)),l=i<0?null:Pi(s.slice(i+1));if(o in e){let c=e[o];zt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function qf(t){let e="";for(let n in t){const r=t[n];if(n=aI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(zt(r)?r.map(s=>s&&oc(s)):[r&&oc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function SI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const PI=Symbol(""),$f=Symbol(""),Va=Symbol(""),nu=Symbol(""),cc=Symbol("");function Qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(ds(je.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):wI(g)?c(ds(je.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Ol(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Jg(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Gn(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=JT(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&Gn(g,n,r,o,l,s)()}))}}return i}function CI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>fs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>fs(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let kI=()=>location.protocol+"//"+location.host;function im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Uf(l,"")}return Uf(n,t)+r+s}function NI(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const v=im(t,location),S=n.value,k=e.value;let N=0;if(g){if(n.value=v,e.value=g,o&&o===S){o=null;return}N=k?g.position-k.position:0}else r(v);s.forEach(j=>{j(n.value,S,{delta:N,type:ac.pop,direction:N?N>0?Dl.forward:Dl.back:Dl.unknown})})};function c(){o=n.value}function u(g){s.push(g);const v=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Re({},g.state,{scroll:Oa()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function Hf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Oa():null}}function DI(t){const{history:e,location:n}=window,r={value:im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:kI()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](g)}}function o(c,u){i(c,Re({},e.state,Hf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Re({},s.value,e.state,{forward:c,scroll:Oa()});i(f.current,f,!0),i(c,Re({},Hf(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function OI(t){t=mI(t);const e=DI(t),n=NI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:yI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let br=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Qe=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Qe||{});const VI={type:br.Static,value:""},xI=/[a-zA-Z0-9_]/;function MI(t){if(!t)return[[]];if(t==="/")return[[VI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=Qe.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===Qe.Static?i.push({type:br.Static,value:u}):n===Qe.Param||n===Qe.ParamRegExp||n===Qe.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:br.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Qe.ParamRegExp){r=n,n=Qe.EscapeNext;continue}switch(n){case Qe.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Qe.Param):g();break;case Qe.EscapeNext:g(),n=r;break;case Qe.Param:c==="("?n=Qe.ParamRegExp:xI.test(c)?g():(p(),n=Qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Qe.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Qe.ParamRegExpEnd:f+=c;break;case Qe.ParamRegExpEnd:p(),n=Qe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Qe.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Wf="[^/]+?",LI={sensitive:!1,strict:!1,start:!0,end:!0};var yt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(yt||{});const FI=/[.+*?^${}()[\]/\\]/g;function UI(t,e){const n=Re({},LI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[yt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let v=yt.Segment+(n.sensitive?yt.BonusCaseSensitive:0);if(g.type===br.Static)p||(s+="/"),s+=g.value.replace(FI,"\\$&"),v+=yt.Static;else if(g.type===br.Param){const{value:S,repeatable:k,optional:N,regexp:j}=g;i.push({name:S,repeatable:k,optional:N});const V=j||Wf;if(V!==Wf){v+=yt.BonusCustomRegExp;try{`${V}`}catch($){throw new Error(`Invalid custom RegExp for param "${S}" (${V}): `+$.message)}}let q=k?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;p||(q=N&&u.length<2?`(?:/${q})`:"/"+q),N&&(q+="?"),s+=q,v+=yt.Dynamic,N&&(v+=yt.BonusOptional),k&&(v+=yt.BonusRepeatable),V===".*"&&(v+=yt.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=yt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const v=f[g]||"",S=i[g-1];p[S.name]=v&&S.repeatable?v.split("/"):v}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of g)if(v.type===br.Static)f+=v.value;else if(v.type===br.Param){const{value:S,repeatable:k,optional:N}=v,j=S in u?u[S]:"";if(zt(j)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const V=zt(j)?j.join("/"):j;if(!V)if(N)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=V}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function BI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===yt.Static+yt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===yt.Static+yt.Segment?1:-1:0}function om(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=BI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Kf(r))return 1;if(Kf(s))return-1}return s.length-r.length}function Kf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jI={strict:!1,end:!0,sensitive:!1};function qI(t,e,n){const r=UI(MI(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $I(t,e){const n=[],r=new Map;e=Ff(jI,e);function s(p){return r.get(p)}function i(p,g,v){const S=!v,k=zf(p);k.aliasOf=v&&v.record;const N=Ff(e,p),j=[k];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const X of $)j.push(zf(Re({},k,{components:v?v.record.components:k.components,path:X,aliasOf:v?v.record:k})))}let V,q;for(const $ of j){const{path:X}=$;if(g&&X[0]!=="/"){const se=g.record.path,w=se[se.length-1]==="/"?"":"/";$.path=g.record.path+(X&&w+X)}if(V=qI($,g,N),v?v.alias.push(V):(q=q||V,q!==V&&q.alias.push(V),S&&p.name&&!Qf(V)&&o(p.name)),am(V)&&c(V),k.children){const se=k.children;for(let w=0;w<se.length;w++)i(se[w],V,v&&v.children[w])}v=v||V}return q?()=>{o(q)}:mi}function o(p){if(rm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=KI(p,n);n.splice(g,0,p),p.record.name&&!Qf(p)&&r.set(p.record.name,p)}function u(p,g){let v,S={},k,N;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw ds(je.MATCHER_NOT_FOUND,{location:p});N=v.record.name,S=Re(Gf(g.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Gf(p.params,v.keys.map(q=>q.name))),k=v.stringify(S)}else if(p.path!=null)k=p.path,v=n.find(q=>q.re.test(k)),v&&(S=v.parse(k),N=v.record.name);else{if(v=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!v)throw ds(je.MATCHER_NOT_FOUND,{location:p,currentLocation:g});N=v.record.name,S=Re({},g.params,p.params),k=v.stringify(S)}const j=[];let V=v;for(;V;)j.unshift(V.record),V=V.parent;return{name:N,path:k,params:S,matched:j,meta:WI(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Gf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function zf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:HI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function HI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Qf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WI(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function KI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;om(t,e[i])<0?r=i:n=i+1}const s=GI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function GI(t){let e=t;for(;e=e.parent;)if(am(e)&&om(t,e)===0)return e}function am({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Jf(t){const e=Ft(Va),n=Ft(nu),r=Ct(()=>{const c=Zn(t.to);return e.resolve(c)}),s=Ct(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(fs.bind(null,f));if(g>-1)return g;const v=Yf(c[u-2]);return u>1&&Yf(f)===v&&p[p.length-1].path!==v?p.findIndex(fs.bind(null,c[u-2])):g}),i=Ct(()=>s.value>-1&&XI(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&nm(n.params,r.value.params));function l(c={}){if(YI(c)){const u=e[Zn(t.replace)?"replace":"push"](Zn(t.to)).catch(mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function zI(t){return t.length===1?t[0]:t}const QI=ig({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Jf,setup(t,{slots:e}){const n=ji(Jf(t)),{options:r}=Ft(Va),s=Ct(()=>({[Xf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zI(e.default(n));return t.custom?i:eu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),JI=QI;function YI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!zt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xf=(t,e,n)=>t??e??n,ZI=ig({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ft(cc),s=Ct(()=>t.route||r.value),i=Ft($f,0),o=Ct(()=>{let u=Zn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Ct(()=>s.value.matched[o.value]);No($f,Ct(()=>o.value+1)),No(PI,l),No(cc,s);const c=ci();return ui(()=>[c.value,l.value,t.name],([u,f,p],[g,v,S])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!fs(f,v)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return Zf(n.default,{Component:g,route:u});const v=p.props[f],S=v?v===!0?u.params:typeof v=="function"?v(u):v:null,N=eu(g,Re({},S,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Zf(n.default,{Component:N,route:u})||N}}});function Zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lm=ZI;function ew(t){const e=$I(t.routes,t),n=t.parseQuery||bI,r=t.stringifyQuery||qf,s=t.history,i=Qs(),o=Qs(),l=Qs(),c=Dv(jn);let u=jn;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=kl.bind(null,x=>""+x),p=kl.bind(null,cI),g=kl.bind(null,Pi);function v(x,Y){let z,ee;return rm(x)?(z=e.getRecordMatcher(x),ee=Y):ee=x,e.addRoute(ee,z)}function S(x){const Y=e.getRecordMatcher(x);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(x=>x.record)}function N(x){return!!e.getRecordMatcher(x)}function j(x,Y){if(Y=Re({},Y||c.value),typeof x=="string"){const P=Nl(n,x,Y.path),O=e.resolve({path:P.path},Y),F=s.createHref(P.fullPath);return Re(P,O,{params:g(O.params),hash:Pi(P.hash),redirectedFrom:void 0,href:F})}let z;if(x.path!=null)z=Re({},x,{path:Nl(n,x.path,Y.path).path});else{const P=Re({},x.params);for(const O in P)P[O]==null&&delete P[O];z=Re({},x,{params:p(P)}),Y.params=p(Y.params)}const ee=e.resolve(z,Y),ge=x.hash||"";ee.params=f(g(ee.params));const T=fI(r,Re({},x,{hash:oI(ge),path:ee.path})),R=s.createHref(T);return Re({fullPath:T,hash:ge,query:r===qf?SI(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:R})}function V(x){return typeof x=="string"?Nl(n,x,c.value.path):Re({},x)}function q(x,Y){if(u!==x)return ds(je.NAVIGATION_CANCELLED,{from:Y,to:x})}function $(x){return w(x)}function X(x){return $(Re(V(x),{replace:!0}))}function se(x,Y){const z=x.matched[x.matched.length-1];if(z&&z.redirect){const{redirect:ee}=z;let ge=typeof ee=="function"?ee(x,Y):ee;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=V(ge):{path:ge},ge.params={}),Re({query:x.query,hash:x.hash,params:ge.path!=null?{}:x.params},ge)}}function w(x,Y){const z=u=j(x),ee=c.value,ge=x.state,T=x.force,R=x.replace===!0,P=se(z,ee);if(P)return w(Re(V(P),{state:typeof P=="object"?Re({},ge,P.state):ge,force:T,replace:R}),Y||z);const O=z;O.redirectedFrom=Y;let F;return!T&&dI(r,ee,z)&&(F=ds(je.NAVIGATION_DUPLICATED,{to:O,from:ee}),Vt(ee,ee,!0,!1)),(F?Promise.resolve(F):I(O,ee)).catch(M=>gn(M)?gn(M,je.NAVIGATION_GUARD_REDIRECT)?M:jt(M):me(M,O,ee)).then(M=>{if(M){if(gn(M,je.NAVIGATION_GUARD_REDIRECT))return w(Re({replace:R},V(M.to),{state:typeof M.to=="object"?Re({},ge,M.to.state):ge,force:T}),Y||O)}else M=A(O,ee,!0,R,ge);return b(O,ee,M),M})}function y(x,Y){const z=q(x,Y);return z?Promise.reject(z):Promise.resolve()}function _(x){const Y=xn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function I(x,Y){let z;const[ee,ge,T]=CI(x,Y);z=Ol(ee.reverse(),"beforeRouteLeave",x,Y);for(const P of ee)P.leaveGuards.forEach(O=>{z.push(Gn(O,x,Y))});const R=y.bind(null,x,Y);return z.push(R),At(z).then(()=>{z=[];for(const P of i.list())z.push(Gn(P,x,Y));return z.push(R),At(z)}).then(()=>{z=Ol(ge,"beforeRouteUpdate",x,Y);for(const P of ge)P.updateGuards.forEach(O=>{z.push(Gn(O,x,Y))});return z.push(R),At(z)}).then(()=>{z=[];for(const P of T)if(P.beforeEnter)if(zt(P.beforeEnter))for(const O of P.beforeEnter)z.push(Gn(O,x,Y));else z.push(Gn(P.beforeEnter,x,Y));return z.push(R),At(z)}).then(()=>(x.matched.forEach(P=>P.enterCallbacks={}),z=Ol(T,"beforeRouteEnter",x,Y,_),z.push(R),At(z))).then(()=>{z=[];for(const P of o.list())z.push(Gn(P,x,Y));return z.push(R),At(z)}).catch(P=>gn(P,je.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function b(x,Y,z){l.list().forEach(ee=>_(()=>ee(x,Y,z)))}function A(x,Y,z,ee,ge){const T=q(x,Y);if(T)return T;const R=Y===jn,P=Yr?history.state:{};z&&(ee||R?s.replace(x.fullPath,Re({scroll:R&&P&&P.scroll},ge)):s.push(x.fullPath,ge)),c.value=x,Vt(x,Y,z,R),jt()}let E;function Te(){E||(E=s.listen((x,Y,z)=>{if(!St.listening)return;const ee=j(x),ge=se(ee,St.currentRoute.value);if(ge){w(Re(ge,{replace:!0,force:!0}),ee).catch(mi);return}u=ee;const T=c.value;Yr&&TI(jf(T.fullPath,z.delta),Oa()),I(ee,T).catch(R=>gn(R,je.NAVIGATION_ABORTED|je.NAVIGATION_CANCELLED)?R:gn(R,je.NAVIGATION_GUARD_REDIRECT)?(w(Re(V(R.to),{force:!0}),ee).then(P=>{gn(P,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===ac.pop&&s.go(-1,!1)}).catch(mi),Promise.reject()):(z.delta&&s.go(-z.delta,!1),me(R,ee,T))).then(R=>{R=R||A(ee,T,!1),R&&(z.delta&&!gn(R,je.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===ac.pop&&gn(R,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ee,T,R)}).catch(mi)}))}let $e=Qs(),Pe=Qs(),ce;function me(x,Y,z){jt(x);const ee=Pe.list();return ee.length?ee.forEach(ge=>ge(x,Y,z)):console.error(x),Promise.reject(x)}function bt(){return ce&&c.value!==jn?Promise.resolve():new Promise((x,Y)=>{$e.add([x,Y])})}function jt(x){return ce||(ce=!x,Te(),$e.list().forEach(([Y,z])=>x?z(x):Y()),$e.reset()),x}function Vt(x,Y,z,ee){const{scrollBehavior:ge}=t;if(!Yr||!ge)return Promise.resolve();const T=!z&&II(jf(x.fullPath,0))||(ee||!z)&&history.state&&history.state.scroll||null;return Ra().then(()=>ge(x,Y,T)).then(R=>R&&EI(R)).catch(R=>me(R,x,Y))}const Me=x=>s.go(x);let Le;const xn=new Set,St={currentRoute:c,listening:!0,addRoute:v,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:k,resolve:j,options:t,push:$,replace:X,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Pe.add,isReady:bt,install(x){x.component("RouterLink",JI),x.component("RouterView",lm),x.config.globalProperties.$router=St,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Zn(c)}),Yr&&!Le&&c.value===jn&&(Le=!0,$(s.location).catch(ee=>{}));const Y={};for(const ee in jn)Object.defineProperty(Y,ee,{get:()=>c.value[ee],enumerable:!0});x.provide(Va,St),x.provide(nu,qp(Y)),x.provide(cc,c);const z=x.unmount;xn.add(x),x.unmount=function(){xn.delete(x),xn.size<1&&(u=jn,E&&E(),E=null,c.value=jn,Le=!1,ce=!1),z()}}};function At(x){return x.reduce((Y,z)=>Y.then(()=>_(z)),Promise.resolve())}return St}function EC(){return Ft(Va)}function TC(t){return Ft(nu)}var ed={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(g=64)),r.push(n[f],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new nw;const g=i<<2|l>>4;if(r.push(g),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rw=function(t){const e=cm(t);return um.encodeByteArray(e,!0)},ea=function(t){return rw(t).replace(/\./g,"")},hm=function(t){try{return um.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=()=>sw().__FIREBASE_DEFAULTS__,ow=()=>{if(typeof process>"u"||typeof ed>"u")return;const t=ed.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hm(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return iw()||ow()||aw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fm=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lw=t=>{const e=fm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dm=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},pm=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ea(JSON.stringify(n)),ea(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function fw(){var t;const e=(t=xa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mw(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _w(){return!fw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yw(){try{return typeof indexedDB=="object"}catch{return!1}}function vw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ew,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Tw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function Tw(t,e){return t.replace(Iw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Iw=/\{\$([^}]+)}/g;function ww(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(td(i)&&td(o)){if(!ta(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function td(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Aw(t,e){const n=new Rw(t,e);return n.subscribe.bind(n)}class Rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vl),s.error===void 0&&(s.error=Vl),s.complete===void 0&&(s.complete=Vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cw(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pw(t){return t===wr?void 0:t}function Cw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const Nw={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Dw=ye.INFO,Ow={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Vw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ow[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ru{constructor(e){this.name=e,this._logLevel=Dw,this._logHandler=Vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const xw=(t,e)=>e.some(n=>t instanceof n);let nd,rd;function Mw(){return nd||(nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lw(){return rd||(rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gm=new WeakMap,uc=new WeakMap,mm=new WeakMap,xl=new WeakMap,su=new WeakMap;function Fw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gm.set(n,t)}).catch(()=>{}),su.set(e,t),e}function Uw(t){if(uc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});uc.set(t,e)}let hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return uc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bw(t){hc=t(hc)}function jw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ml(this),e,...n);return mm.set(r,e.sort?e.sort():[e]),er(r)}:Lw().includes(t)?function(...e){return t.apply(Ml(this),e),er(gm.get(this))}:function(...e){return er(t.apply(Ml(this),e))}}function qw(t){return typeof t=="function"?jw(t):(t instanceof IDBTransaction&&Uw(t),xw(t,Mw())?new Proxy(t,hc):t)}function er(t){if(t instanceof IDBRequest)return Fw(t);if(xl.has(t))return xl.get(t);const e=qw(t);return e!==t&&(xl.set(t,e),su.set(e,t)),e}const Ml=t=>su.get(t);function $w(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",c=>{r(er(o.result),c.oldVersion,c.newVersion,er(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Hw=["get","getKey","getAll","getAllKeys","count"],Ww=["put","add","delete","clear"],Ll=new Map;function sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ll.get(e))return Ll.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ww.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Ll.set(e,i),i}Bw(t=>({...t,get:(e,n,r)=>sd(e,n)||t.get(e,n,r),has:(e,n)=>!!sd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",id="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new ru("@firebase/app"),zw="@firebase/app-compat",Qw="@firebase/analytics-compat",Jw="@firebase/analytics",Yw="@firebase/app-check-compat",Xw="@firebase/app-check",Zw="@firebase/auth",eA="@firebase/auth-compat",tA="@firebase/database",nA="@firebase/data-connect",rA="@firebase/database-compat",sA="@firebase/functions",iA="@firebase/functions-compat",oA="@firebase/installations",aA="@firebase/installations-compat",lA="@firebase/messaging",cA="@firebase/messaging-compat",uA="@firebase/performance",hA="@firebase/performance-compat",fA="@firebase/remote-config",dA="@firebase/remote-config-compat",pA="@firebase/storage",gA="@firebase/storage-compat",mA="@firebase/firestore",_A="@firebase/vertexai-preview",yA="@firebase/firestore-compat",vA="firebase",EA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="[DEFAULT]",TA={[fc]:"fire-core",[zw]:"fire-core-compat",[Jw]:"fire-analytics",[Qw]:"fire-analytics-compat",[Xw]:"fire-app-check",[Yw]:"fire-app-check-compat",[Zw]:"fire-auth",[eA]:"fire-auth-compat",[tA]:"fire-rtdb",[nA]:"fire-data-connect",[rA]:"fire-rtdb-compat",[sA]:"fire-fn",[iA]:"fire-fn-compat",[oA]:"fire-iid",[aA]:"fire-iid-compat",[lA]:"fire-fcm",[cA]:"fire-fcm-compat",[uA]:"fire-perf",[hA]:"fire-perf-compat",[fA]:"fire-rc",[dA]:"fire-rc-compat",[pA]:"fire-gcs",[gA]:"fire-gcs-compat",[mA]:"fire-fst",[yA]:"fire-fst-compat",[_A]:"fire-vertex","fire-js":"fire-js",[vA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Map,IA=new Map,pc=new Map;function od(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(pc.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;pc.set(e,t);for(const n of na.values())od(n,t);for(const n of IA.values())od(n,t);return!0}function iu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Hi("app","Firebase",wA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=EA;function _m(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw tr.create("bad-app-name",{appName:String(s)});if(n||(n=dm()),!n)throw tr.create("no-options");const i=na.get(s);if(i){if(ta(n,i.options)&&ta(r,i.config))return i;throw tr.create("duplicate-app",{appName:s})}const o=new kw(s);for(const c of pc.values())o.addComponent(c);const l=new AA(n,r,o);return na.set(s,l),l}function ym(t=dc){const e=na.get(t);if(!e&&t===dc&&dm())return _m();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let s=(r=TA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}ps(new Dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="firebase-heartbeat-database",bA=1,Ci="firebase-heartbeat-store";let Fl=null;function vm(){return Fl||(Fl=$w(RA,bA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Fl}async function SA(t){try{const n=(await vm()).transaction(Ci),r=await n.objectStore(Ci).get(Em(t));return await n.done,r}catch(e){if(e instanceof Vn)Cn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function ad(t,e){try{const r=(await vm()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,Em(t)),await r.done}catch(n){if(n instanceof Vn)Cn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function Em(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=1024,CA=720*60*60*1e3;class kA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ld();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=CA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ld(),{heartbeatsToSend:r,unsentEntries:s}=NA(this._heartbeatsCache.heartbeats),i=ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function ld(){return new Date().toISOString().substring(0,10)}function NA(t,e=PA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yw()?vw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cd(t){return ea(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){ps(new Dr("platform-logger",e=>new Kw(e),"PRIVATE")),ps(new Dr("heartbeat",e=>new kA(e),"PRIVATE")),nr(fc,id,t),nr(fc,id,"esm2017"),nr("fire-js","")}OA("");var VA="firebase",xA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(VA,xA,"app");var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,Tm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(I,b,A){for(var E=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)E[Te-2]=arguments[Te];return y.prototype[b].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)I[b]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(b=0;16>b;++b)I[b]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],b=w.g[2];var A=w.g[3],E=y+(A^_&(b^A))+I[0]+3614090360&4294967295;y=_+(E<<7&4294967295|E>>>25),E=A+(b^y&(_^b))+I[1]+3905402710&4294967295,A=y+(E<<12&4294967295|E>>>20),E=b+(_^A&(y^_))+I[2]+606105819&4294967295,b=A+(E<<17&4294967295|E>>>15),E=_+(y^b&(A^y))+I[3]+3250441966&4294967295,_=b+(E<<22&4294967295|E>>>10),E=y+(A^_&(b^A))+I[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(b^y&(_^b))+I[5]+1200080426&4294967295,A=y+(E<<12&4294967295|E>>>20),E=b+(_^A&(y^_))+I[6]+2821735955&4294967295,b=A+(E<<17&4294967295|E>>>15),E=_+(y^b&(A^y))+I[7]+4249261313&4294967295,_=b+(E<<22&4294967295|E>>>10),E=y+(A^_&(b^A))+I[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(b^y&(_^b))+I[9]+2336552879&4294967295,A=y+(E<<12&4294967295|E>>>20),E=b+(_^A&(y^_))+I[10]+4294925233&4294967295,b=A+(E<<17&4294967295|E>>>15),E=_+(y^b&(A^y))+I[11]+2304563134&4294967295,_=b+(E<<22&4294967295|E>>>10),E=y+(A^_&(b^A))+I[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(b^y&(_^b))+I[13]+4254626195&4294967295,A=y+(E<<12&4294967295|E>>>20),E=b+(_^A&(y^_))+I[14]+2792965006&4294967295,b=A+(E<<17&4294967295|E>>>15),E=_+(y^b&(A^y))+I[15]+1236535329&4294967295,_=b+(E<<22&4294967295|E>>>10),E=y+(b^A&(_^b))+I[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^b&(y^_))+I[6]+3225465664&4294967295,A=y+(E<<9&4294967295|E>>>23),E=b+(y^_&(A^y))+I[11]+643717713&4294967295,b=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(b^A))+I[0]+3921069994&4294967295,_=b+(E<<20&4294967295|E>>>12),E=y+(b^A&(_^b))+I[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^b&(y^_))+I[10]+38016083&4294967295,A=y+(E<<9&4294967295|E>>>23),E=b+(y^_&(A^y))+I[15]+3634488961&4294967295,b=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(b^A))+I[4]+3889429448&4294967295,_=b+(E<<20&4294967295|E>>>12),E=y+(b^A&(_^b))+I[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^b&(y^_))+I[14]+3275163606&4294967295,A=y+(E<<9&4294967295|E>>>23),E=b+(y^_&(A^y))+I[3]+4107603335&4294967295,b=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(b^A))+I[8]+1163531501&4294967295,_=b+(E<<20&4294967295|E>>>12),E=y+(b^A&(_^b))+I[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^b&(y^_))+I[2]+4243563512&4294967295,A=y+(E<<9&4294967295|E>>>23),E=b+(y^_&(A^y))+I[7]+1735328473&4294967295,b=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(b^A))+I[12]+2368359562&4294967295,_=b+(E<<20&4294967295|E>>>12),E=y+(_^b^A)+I[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^b)+I[8]+2272392833&4294967295,A=y+(E<<11&4294967295|E>>>21),E=b+(A^y^_)+I[11]+1839030562&4294967295,b=A+(E<<16&4294967295|E>>>16),E=_+(b^A^y)+I[14]+4259657740&4294967295,_=b+(E<<23&4294967295|E>>>9),E=y+(_^b^A)+I[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^b)+I[4]+1272893353&4294967295,A=y+(E<<11&4294967295|E>>>21),E=b+(A^y^_)+I[7]+4139469664&4294967295,b=A+(E<<16&4294967295|E>>>16),E=_+(b^A^y)+I[10]+3200236656&4294967295,_=b+(E<<23&4294967295|E>>>9),E=y+(_^b^A)+I[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^b)+I[0]+3936430074&4294967295,A=y+(E<<11&4294967295|E>>>21),E=b+(A^y^_)+I[3]+3572445317&4294967295,b=A+(E<<16&4294967295|E>>>16),E=_+(b^A^y)+I[6]+76029189&4294967295,_=b+(E<<23&4294967295|E>>>9),E=y+(_^b^A)+I[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^b)+I[12]+3873151461&4294967295,A=y+(E<<11&4294967295|E>>>21),E=b+(A^y^_)+I[15]+530742520&4294967295,b=A+(E<<16&4294967295|E>>>16),E=_+(b^A^y)+I[2]+3299628645&4294967295,_=b+(E<<23&4294967295|E>>>9),E=y+(b^(_|~A))+I[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~b))+I[7]+1126891415&4294967295,A=y+(E<<10&4294967295|E>>>22),E=b+(y^(A|~_))+I[14]+2878612391&4294967295,b=A+(E<<15&4294967295|E>>>17),E=_+(A^(b|~y))+I[5]+4237533241&4294967295,_=b+(E<<21&4294967295|E>>>11),E=y+(b^(_|~A))+I[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~b))+I[3]+2399980690&4294967295,A=y+(E<<10&4294967295|E>>>22),E=b+(y^(A|~_))+I[10]+4293915773&4294967295,b=A+(E<<15&4294967295|E>>>17),E=_+(A^(b|~y))+I[1]+2240044497&4294967295,_=b+(E<<21&4294967295|E>>>11),E=y+(b^(_|~A))+I[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~b))+I[15]+4264355552&4294967295,A=y+(E<<10&4294967295|E>>>22),E=b+(y^(A|~_))+I[6]+2734768916&4294967295,b=A+(E<<15&4294967295|E>>>17),E=_+(A^(b|~y))+I[13]+1309151649&4294967295,_=b+(E<<21&4294967295|E>>>11),E=y+(b^(_|~A))+I[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~b))+I[11]+3174756917&4294967295,A=y+(E<<10&4294967295|E>>>22),E=b+(y^(A|~_))+I[2]+718787259&4294967295,b=A+(E<<15&4294967295|E>>>17),E=_+(A^(b|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,I=this.B,b=this.h,A=0;A<y;){if(b==0)for(;A<=_;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<y;)if(I[b++]=w.charCodeAt(A++),b==this.blockSize){s(this,I),b=0;break}}else for(;A<y;)if(I[b++]=w[A++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)w[_++]=this.g[y]>>>I&255;return w};function i(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],I=!0,b=w.length-1;0<=b;b--){var A=w[b]|0;I&&A==y||(_[b]=A,I=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(u(-w));for(var y=[],_=1,I=0;w>=_;I++)y[I]=w/_|0,_*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return N(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,b=0;b<w.length;b+=8){var A=Math.min(8,w.length-b),E=parseInt(w.substring(b,b+A),y);8>A?(A=u(Math.pow(y,A)),I=I.j(A).add(u(E))):(I=I.j(_),I=I.add(u(E)))}return I}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(k(this))return"-"+N(this).toString(w);for(var y=u(Math.pow(w,6)),_=this,I="";;){var b=$(_,y).g;_=j(_,b.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=b,S(_))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=j(this,w),k(w)?-1:S(w)?0:1};function N(w){for(var y=w.g.length,_=[],I=0;I<y;I++)_[I]=~w.g[I];return new o(_,~w.h).add(g)}t.abs=function(){return k(this)?N(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0,b=0;b<=y;b++){var A=I+(this.i(b)&65535)+(w.i(b)&65535),E=(A>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=E>>>16,A&=65535,E&=65535,_[b]=E<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function j(w,y){return w.add(N(y))}t.j=function(w){if(S(this)||S(w))return p;if(k(this))return k(w)?N(this).j(N(w)):N(N(this).j(w));if(k(w))return N(this.j(N(w)));if(0>this.l(v)&&0>w.l(v))return u(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<w.g.length;b++){var A=this.i(I)>>>16,E=this.i(I)&65535,Te=w.i(b)>>>16,$e=w.i(b)&65535;_[2*I+2*b]+=E*$e,V(_,2*I+2*b),_[2*I+2*b+1]+=A*$e,V(_,2*I+2*b+1),_[2*I+2*b+1]+=E*Te,V(_,2*I+2*b+1),_[2*I+2*b+2]+=A*Te,V(_,2*I+2*b+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new o(_,0)};function V(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function q(w,y){this.g=w,this.h=y}function $(w,y){if(S(y))throw Error("division by zero");if(S(w))return new q(p,p);if(k(w))return y=$(N(w),y),new q(N(y.g),N(y.h));if(k(y))return y=$(w,N(y)),new q(N(y.g),y.h);if(30<w.g.length){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=y;0>=I.l(w);)_=X(_),I=X(I);var b=se(_,1),A=se(I,1);for(I=se(I,2),_=se(_,2);!S(I);){var E=A.add(I);0>=E.l(w)&&(b=b.add(_),A=E),I=se(I,1),_=se(_,1)}return y=j(w,b.j(y)),new q(b,y)}for(b=p;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(_),E=A.j(y);k(E)||0<E.l(w);)_-=I,A=u(_),E=A.j(y);S(A)&&(A=g),b=b.add(A),w=j(w,E)}return new q(b,w)}t.A=function(w){return $(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&w.i(I);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|w.i(I);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^w.i(I);return new o(_,this.h^w.h)};function X(w){for(var y=w.g.length+1,_=[],I=0;I<y;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(_,w.h)}function se(w,y){var _=y>>5;y%=32;for(var I=w.g.length-_,b=[],A=0;A<I;A++)b[A]=0<y?w.i(A+_)>>>y|w.i(A+_+1)<<32-y:w.i(A+_);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,kr=o}).apply(typeof ud<"u"?ud:typeof self<"u"?self:typeof window<"u"?window:{});var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Im,ni,wm,Vo,gc,Am,Rm,bm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ro=="object"&&Ro];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,D){for(var W=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)W[ke-2]=arguments[ke];return h.prototype[C].apply(m,W)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=a.length||0,D=m.length||0;a.length=C+D;for(let W=0;W<D;W++)a[C+W]=m[W]}else a.push(m)}}class j{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var X=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function se(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let D=0;D<_.length;D++)d=_[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function A(a){l.setTimeout(()=>{throw a},0)}function E(){var a=bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Te{constructor(){this.h=this.g=null}add(h,d){const m=$e.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var $e=new j(()=>new Pe,a=>a.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,bt=new Te,jt=()=>{const a=l.Promise.resolve(void 0);ce=()=>{a.then(Vt)}};var Vt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){A(d)}var h=$e;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}me=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var xn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function St(a,h){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{$(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&St.aa.h.call(this)}}S(St,Le);var At={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),Y=0;function z(a,h,d,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=C,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ge(a){this.src=a,this.g={},this.h=0}ge.prototype.add=function(a,h,d,m,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var W=R(a,h,m,C);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new z(h,this.src,D,!!m,C),h.fa=d,a.push(h)),h};function T(a,h){var d=h.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,h,void 0),D;(D=0<=C)&&Array.prototype.splice.call(m,C,1),D&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function R(a,h,d,m){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==m)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),O={};function F(a,h,d,m,C){if(Array.isArray(h)){for(var D=0;D<h.length;D++)F(a,h[D],d,m,C);return null}return d=oe(d),a&&a[x]?a.K(h,d,u(m)?!!m.capture:!1,C):M(a,h,d,!1,m,C)}function M(a,h,d,m,C,D){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,ke=Q(a);if(ke||(a[P]=ke=new ge(a)),d=ke.add(h,d,m,W,D),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)xn||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(U(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function K(a,h,d,m,C){if(Array.isArray(h))for(var D=0;D<h.length;D++)K(a,h[D],d,m,C);else m=u(m)?!!m.capture:!!m,d=oe(d),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=R(D,d,m,C),-1<d&&(ee(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=R(h,d,m,C)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])T(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(U(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Q(h))?(T(d,a),d.h==0&&(d.src=null,h[P]=null)):ee(a)}}}function U(a){return a in O?O[a]:O[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new St(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&H(a),a=d.call(m,h)}return a}function Q(a){return a=a[P],a instanceof ge?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ae(){Me.call(this),this.i=new ge(this),this.M=this,this.F=null}S(ae,Me),ae.prototype[x]=!0,ae.prototype.removeEventListener=function(a,h,d,m){K(this,a,h,d,m)};function pe(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Le(h,a);else if(h instanceof Le)h.target=h.target||a;else{var C=h;h=new Le(m,a),I(h,C)}if(C=!0,d)for(var D=d.length-1;0<=D;D--){var W=h.g=d[D];C=Ae(W,m,!0,h)&&C}if(W=h.g=a,C=Ae(W,m,!0,h)&&C,C=Ae(W,m,!1,h)&&C,d)for(D=0;D<d.length;D++)W=h.g=d[D],C=Ae(W,m,!1,h)&&C}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)ee(d[m]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},ae.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Ae(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,D=0;D<h.length;++D){var W=h[D];if(W&&!W.da&&W.capture==d){var ke=W.listener,tt=W.ha||W.src;W.fa&&T(a.i,W),C=ke.call(tt,m)!==!1&&C}}return C&&!m.defaultPrevented}function Fe(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function We(a){a.g=Fe(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class xt extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(a){Me.call(this),this.h=a,this.g={}}S(ot,Me);var Mn=[];function Ns(a){se(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}ot.prototype.N=function(){ot.aa.N.call(this),Ns(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,Mt=l.JSON.parse,ro=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function $r(){}$r.prototype.h=null;function eh(a){return a.h||(a.h=a.i())}function th(){}var Ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sl(){Le.call(this,"d")}S(sl,Le);function il(){Le.call(this,"c")}S(il,Le);var gr={},nh=null;function so(){return nh=nh||new ae}gr.La="serverreachability";function rh(a){Le.call(this,gr.La,a)}S(rh,Le);function Os(a){const h=so();pe(h,new rh(h))}gr.STAT_EVENT="statevent";function sh(a,h){Le.call(this,gr.STAT_EVENT,a),this.stat=h}S(sh,Le);function gt(a){const h=so();pe(h,new sh(h,a))}gr.Ma="timingevent";function ih(a,h){Le.call(this,gr.Ma,a),this.size=h}S(ih,Le);function Vs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function xs(){this.g=!0}xs.prototype.xa=function(){this.g=!1};function ky(a,h,d,m,C,D){a.info(function(){if(a.g)if(D)for(var W="",ke=D.split("&"),tt=0;tt<ke.length;tt++){var Ie=ke[tt].split("=");if(1<Ie.length){var at=Ie[0];Ie=Ie[1];var lt=at.split("_");W=2<=lt.length&&lt[1]=="type"?W+(at+"="+Ie+"&"):W+(at+"=redacted&")}}else W=null;else W=D;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function Ny(a,h,d,m,C,D,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+d+`
`+D+" "+W})}function Hr(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Oy(a,d)+(m?" "+m:"")})}function Dy(a,h){a.info(function(){return"TIMEOUT: "+h})}xs.prototype.info=function(){};function Oy(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return et(d)}catch{return h}}var io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ol;function oo(){}S(oo,$r),oo.prototype.g=function(){return new XMLHttpRequest},oo.prototype.i=function(){return{}},ol=new oo;function Ln(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ah}function ah(){this.i=null,this.g="",this.h=!1}var lh={},al={};function ll(a,h,d){a.L=1,a.v=uo(fn(h)),a.m=d,a.P=!0,ch(a,null)}function ch(a,h){a.F=Date.now(),ao(a),a.A=fn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),wh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new ah,a.g=jh(a.j,d?h:null,!a.m),0<a.O&&(a.M=new xt(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Mn[0]=C.toString()),C=Mn);for(var D=0;D<C.length;D++){var W=F(d,C[D],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Os(),ky(a.i,a.u,a.A,a.l,a.R,a.m)}Ln.prototype.ca=function(a){a=a.target;const h=this.M;h&&dn(a)==3?h.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const lt=dn(this.g);var h=this.g.Ba();const Gr=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||kh(this.g)))){this.J||lt!=4||h==7||(h==8||0>=Gr?Os(3):Os(2)),cl(this);var d=this.g.Z();this.X=d;t:if(uh(this)){var m=kh(this.g);a="";var C=m.length,D=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Ms(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(D&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,Ny(this.i,this.u,this.A,this.l,this.R,lt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,tt=this.g;if((ke=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(ke)){var Ie=ke;break t}}Ie=null}if(d=Ie)Hr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ul(this,d);else{this.o=!1,this.s=3,gt(12),mr(this),Ms(this);break e}}if(this.P){d=!0;let qt;for(;!this.J&&this.C<W.length;)if(qt=Vy(this,W),qt==al){lt==4&&(this.s=4,gt(14),d=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==lh){this.s=4,gt(15),Hr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Hr(this.i,this.l,qt,null),ul(this,qt);if(uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||W.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Hr(this.i,this.l,W,"[Invalid Chunked Response]"),mr(this),Ms(this);else if(0<W.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ml(at),at.M=!0,gt(11))}}else Hr(this.i,this.l,W,null),ul(this,W);lt==4&&mr(this),this.o&&!this.J&&(lt==4?Lh(this.j,this):(this.o=!1,ao(this)))}else Yy(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),mr(this),Ms(this)}}}catch{}finally{}};function uh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Vy(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?al:(d=Number(h.substring(d,m)),isNaN(d)?lh:(m+=1,m+d>h.length?al:(h=h.slice(m,m+d),a.C=m+d,h)))}Ln.prototype.cancel=function(){this.J=!0,mr(this)};function ao(a){a.S=Date.now()+a.I,hh(a,a.I)}function hh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vs(g(a.ba,a),h)}function cl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Dy(this.i,this.A),this.L!=2&&(Os(),gt(17)),mr(this),this.s=2,Ms(this)):hh(this,this.S-a)};function Ms(a){a.j.G==0||a.J||Lh(a.j,a)}function mr(a){cl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ns(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ul(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||hl(d.h,a))){if(!a.K&&hl(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)_o(d),go(d);else break e;gl(d),gt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Vs(g(d.Za,d),6e3));if(1>=ph(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((a.K||d.g==a)&&_o(d),!V(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Ie=C[h];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const at=Ie[3];at!=null&&(d.la=at,d.j.info("VER="+d.la));const lt=Ie[4];lt!=null&&(d.Aa=lt,d.j.info("SVER="+d.Aa));const Gr=Ie[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(m=1.5*Gr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const qt=a.g;if(qt){const vo=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var D=m.h;D.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(fl(D,D.h),D.h=null))}if(m.D){const _l=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;_l&&(m.ya=_l,Oe(m.I,m.D,_l))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=a;if(m.qa=Bh(m,m.J?m.ia:null,m.W),W.K){gh(m.h,W);var ke=W,tt=m.L;tt&&(ke.I=tt),ke.B&&(cl(ke),ao(ke)),m.g=W}else xh(m);0<d.i.length&&mo(d)}else Ie[0]!="stop"&&Ie[0]!="close"||yr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?yr(d,7):pl(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Os(4)}catch{}}var xy=class{constructor(a,h){this.g=a,this.map=h}};function fh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ph(a){return a.h?1:a.g?a.g.size:0}function hl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function fl(a,h){a.g?a.g.add(h):a.h=h}function gh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}fh.prototype.cancel=function(){if(this.i=mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function My(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function Ly(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function _h(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Ly(a),m=My(a),C=m.length,D=0;D<C;D++)h.call(void 0,m[D],d&&d[D],a)}var yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fy(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var D=a[d].substring(0,m);C=a[d].substring(m+1)}else D=a[d];h(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,lo(this,a.j),this.o=a.o,this.g=a.g,co(this,a.s),this.l=a.l;var h=a.i,d=new Us;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),vh(this,d),this.m=a.m}else a&&(h=String(a).match(yh))?(this.h=!1,lo(this,h[1]||"",!0),this.o=Ls(h[2]||""),this.g=Ls(h[3]||"",!0),co(this,h[4]),this.l=Ls(h[5]||"",!0),vh(this,h[6]||"",!0),this.m=Ls(h[7]||"")):(this.h=!1,this.i=new Us(null,this.h))}_r.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Fs(h,Eh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Fs(h,Eh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Fs(d,d.charAt(0)=="/"?jy:By,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Fs(d,$y)),a.join("")};function fn(a){return new _r(a)}function lo(a,h,d){a.j=d?Ls(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function co(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function vh(a,h,d){h instanceof Us?(a.i=h,Hy(a.i,a.h)):(d||(h=Fs(h,qy)),a.i=new Us(h,a.h))}function Oe(a,h,d){a.i.set(h,d)}function uo(a){return Oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ls(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Uy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Uy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Eh=/[#\/\?@]/g,By=/[#\?:]/g,jy=/[#\?]/g,qy=/[#\?@]/g,$y=/#/g;function Us(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&Fy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Us.prototype,t.add=function(a,h){Fn(this),this.i=null,a=Wr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Th(a,h){Fn(a),h=Wr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ih(a,h){return Fn(a),h=Wr(a,h),a.g.has(h)}t.forEach=function(a,h){Fn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(h,C,m,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const C=a[m];for(let D=0;D<C.length;D++)d.push(h[m])}return d},t.V=function(a){Fn(this);let h=[];if(typeof a=="string")Ih(this,a)&&(h=h.concat(this.g.get(Wr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Fn(this),this.i=null,a=Wr(this,a),Ih(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function wh(a,h,d){Th(a,h),0<d.length&&(a.i=null,a.g.set(Wr(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const D=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var C=D;W[m]!==""&&(C+="="+encodeURIComponent(String(W[m]))),a.push(C)}}return this.i=a.join("&")};function Wr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Hy(a,h){h&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(Th(this,m),wh(this,C,d))},a)),a.j=h}function Wy(a,h){const d=new xs;if(l.Image){const m=new Image;m.onload=v(Un,d,"TestLoadImage: loaded",!0,h,m),m.onerror=v(Un,d,"TestLoadImage: error",!1,h,m),m.onabort=v(Un,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=v(Un,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Ky(a,h){const d=new xs,m=new AbortController,C=setTimeout(()=>{m.abort(),Un(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(C),D.ok?Un(d,"TestPingServer: ok",!0,h):Un(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Un(d,"TestPingServer: error",!1,h)})}function Un(a,h,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function Gy(){this.g=new ro}function zy(a,h,d){const m=d||"";try{_h(a,function(C,D){let W=C;u(C)&&(W=et(C)),h.push(m+D+"="+encodeURIComponent(W))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function ho(a){this.l=a.Ub||null,this.j=a.eb||!1}S(ho,$r),ho.prototype.g=function(){return new fo(this.l,this.j)},ho.prototype.i=(function(a){return function(){return a}})({});function fo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(fo,ae),t=fo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ah(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ah(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Bs(this):js(this),this.readyState==3&&Ah(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},t.Qa=function(a){this.g&&(this.response=a,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,js(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rh(a){let h="";return se(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function dl(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Rh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Oe(a,h,d))}function Be(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Be,ae);var Qy=/^https?$/i,Jy=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ol.g(),this.v=this.o?eh(this.o):eh(ol),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){bh(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jy,h,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,W]of d)this.g.setRequestHeader(D,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ch(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){bh(this,D)}};function bh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Sh(a),po(a)}function Sh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ph(this):this.bb())},t.bb=function(){Ph(this)};function Ph(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dn(a)!=4||a.Z()!=2)){if(a.u&&dn(a)==4)Fe(a.Ea,0,a);else if(pe(a,"readystatechange"),dn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=W===0){var C=String(a.D).match(yh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Qy.test(C?C.toLowerCase():"")}d=m}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var D=2<dn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Sh(a)}}finally{po(a)}}}}function po(a,h){if(a.g){Ch(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ch(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Mt(h)}};function kh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yy(a){const h={};a=(a.g&&2<=dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(V(a[m]))continue;var d=b(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[C]||[];h[C]=D,D.push(d)}w(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Nh(a){this.Aa=0,this.i=[],this.j=new xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qs("baseRetryDelayMs",5e3,a),this.cb=qs("retryDelaySeedMs",1e4,a),this.Wa=qs("forwardChannelMaxRetries",2,a),this.wa=qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new fh(a&&a.concurrentRequestLimit),this.Da=new Gy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){gt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Bh(this,null,this.W),mo(this)};function pl(a){if(Dh(a),a.G==3){var h=a.U++,d=fn(a.I);if(Oe(d,"SID",a.K),Oe(d,"RID",h),Oe(d,"TYPE","terminate"),$s(a,d),h=new Ln(a,a.j,h),h.L=2,h.v=uo(fn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=jh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ao(h)}Uh(a)}function go(a){a.g&&(ml(a),a.g.cancel(),a.g=null)}function Dh(a){go(a),a.u&&(l.clearTimeout(a.u),a.u=null),_o(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function mo(a){if(!dh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ce||jt(),me||(ce(),me=!0),bt.add(h,a),a.B=0}}function Xy(a,h){return ph(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vs(g(a.Ga,a,h),Fh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Ln(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Vh(this,C,h),d=fn(this.I),Oe(d,"RID",a),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),$s(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(Rh(D)))+"&"+h:this.m&&dl(d,this.m,D)),fl(this.h,C),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",h),Oe(d,"SID","null"),C.T=!0,ll(C,d,null)):ll(C,d,h),this.G=2}}else this.G==3&&(a?Oh(this,a):this.i.length==0||dh(this.h)||Oh(this))};function Oh(a,h){var d;h?d=h.l:d=a.U++;const m=fn(a.I);Oe(m,"SID",a.K),Oe(m,"RID",d),Oe(m,"AID",a.T),$s(a,m),a.m&&a.o&&dl(m,a.m,a.o),d=new Ln(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Vh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),fl(a.h,d),ll(d,m,h)}function $s(a,h){a.H&&se(a.H,function(d,m){Oe(h,m,d)}),a.l&&_h({},function(d,m){Oe(h,m,d)})}function Vh(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const W=["count="+d];D==-1?0<d?(D=C[0].g,W.push("ofs="+D)):D=0:W.push("ofs="+D);let ke=!0;for(let tt=0;tt<d;tt++){let Ie=C[tt].g;const at=C[tt].map;if(Ie-=D,0>Ie)D=Math.max(0,C[tt].g-100),ke=!1;else try{zy(at,W,"req"+Ie+"_")}catch{m&&m(at)}}if(ke){m=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function xh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ce||jt(),me||(ce(),me=!0),bt.add(h,a),a.v=0}}function gl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vs(g(a.Fa,a),Fh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Mh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),go(this),Mh(this))};function ml(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Mh(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=fn(a.qa);Oe(h,"RID","rpc"),Oe(h,"SID",a.K),Oe(h,"AID",a.T),Oe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Oe(h,"TO",a.ja),Oe(h,"TYPE","xmlhttp"),$s(a,h),a.m&&a.o&&dl(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=uo(fn(h)),d.m=null,d.P=!0,ch(d,a)}t.Za=function(){this.C!=null&&(this.C=null,go(this),gl(this),gt(19))};function _o(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Lh(a,h){var d=null;if(a.g==h){_o(a),ml(a),a.g=null;var m=2}else if(hl(a.h,h))d=h.D,gh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=so(),pe(m,new ih(m,d)),mo(a)}else xh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&Xy(a,h)||m==2&&gl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Fh(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function yr(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new _r(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||lo(m,"https"),uo(m),C?Wy(m.toString(),d):Ky(m.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(h),Uh(a),Dh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Uh(a){if(a.G=0,a.ka=[],a.l){const h=mh(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Bh(a,h,d){var m=d instanceof _r?fn(d):new _r(d);if(m.g!="")h&&(m.g=h+"."+m.g),co(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var D=new _r(null);m&&lo(D,m),h&&(D.g=h),C&&co(D,C),d&&(D.l=d),m=D}return d=a.D,h=a.ya,d&&h&&Oe(m,d,h),Oe(m,"VER",a.la),$s(a,m),m}function jh(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new ho({eb:d})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qh(){}t=qh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yo(){}yo.prototype.g=function(a,h){return new Pt(a,h)};function Pt(a,h){ae.call(this),this.g=new Nh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Kr(this)}S(Pt,ae),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){pl(this.g)},Pt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=et(a),a=d);h.i.push(new xy(h.Ya++,a)),h.G==3&&mo(h)},Pt.prototype.N=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,Pt.aa.N.call(this)};function $h(a){sl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S($h,sl);function Hh(){il.call(this),this.status=1}S(Hh,il);function Kr(a){this.g=a}S(Kr,qh),Kr.prototype.ua=function(){pe(this.g,"a")},Kr.prototype.ta=function(a){pe(this.g,new $h(a))},Kr.prototype.sa=function(a){pe(this.g,new Hh)},Kr.prototype.ra=function(){pe(this.g,"b")},yo.prototype.createWebChannel=yo.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,bm=function(){return new yo},Rm=function(){return so()},Am=gr,gc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,Vo=io,oh.COMPLETE="complete",wm=oh,th.EventType=Ds,Ds.OPEN="a",Ds.CLOSE="b",Ds.ERROR="c",Ds.MESSAGE="d",ae.prototype.listen=ae.prototype.K,ni=th,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Im=Be}).apply(typeof Ro<"u"?Ro:typeof self<"u"?self:typeof window<"u"?window:{});const hd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new ru("@firebase/firestore");function Js(){return Or.logLevel}function Z(t,...e){if(Or.logLevel<=ye.DEBUG){const n=e.map(ou);Or.debug(`Firestore (${Rs}): ${t}`,...n)}}function kn(t,...e){if(Or.logLevel<=ye.ERROR){const n=e.map(ou);Or.error(`Firestore (${Rs}): ${t}`,...n)}}function gs(t,...e){if(Or.logLevel<=ye.WARN){const n=e.map(ou);Or.warn(`Firestore (${Rs}): ${t}`,...n)}}function ou(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function Ce(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ut.UNAUTHENTICATED)))}shutdown(){}}class LA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class FA{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new Sm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new ut(e)}}class UA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new UA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable((()=>n(ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new jA(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$A(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Ye(0,0))}static max(){return new he(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends ki{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ve(n)}static emptyPath(){return new Ve([])}}const HA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends ki{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return HA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new J(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ve.fromString(e))}static fromName(e){return new re(Ve.fromString(e).popFirst(5))}static empty(){return new re(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ve(e.slice()))}}function WA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new cr(s,re.empty(),e)}function KA(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(he.min(),re.empty(),-1)}static max(){return new cr(he.max(),re.empty(),-1)}}function GA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==zA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):B.reject(n)}static resolve(e){return new B(((n,r)=>{n(e)}))}static reject(e){return new B(((n,r)=>{r(e)}))}static waitFor(e){return new B(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next((s=>s?B.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new B(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new B(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function JA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}au.oe=-1;function Ma(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function YA(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new st(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new km("Invalid base64 string: "+i):i}})(e);return new it(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const XA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=XA.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cu(t){const e=t.mapValue.fields.__previous_value__;return lu(e)?cu(e):e}function Ni(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={mapValue:{}};function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lu(t)?4:tR(t)?9007199254740991:eR(t)?10:11:ue()}function hn(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),l=ur(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Vr(s.bytesValue).isEqual(Vr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),l=He(i.doubleValue);return o===l?ra(o)===ra(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fd(o)!==fd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!hn(o[c],l[c])))return!1;return!0})(t,e);default:return ue()}}function Oi(t,e){return(t.values||[]).find((n=>hn(n,e)))!==void 0}function _s(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=He(i.integerValue||i.doubleValue),c=He(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return pd(t.timestampValue,e.timestampValue);case 4:return pd(Ni(t),Ni(e));case 5:return we(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Vr(i),c=Vr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=we(l[u],c[u]);if(f!==0)return f}return we(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=we(He(i.latitude),He(o.latitude));return l!==0?l:we(He(i.longitude),He(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return gd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=we(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:gd(v,S)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=we(c[p],f[p]);if(g!==0)return g;const v=_s(l[c[p]],u[f[p]]);if(v!==0)return v}return we(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ue()}}function pd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=ur(t),r=ur(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function gd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function ys(t){return mc(t)}function mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Vr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=mc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${mc(n.fields[o])}`;return s+"}"})(t.mapValue):ue()}function md(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _c(t){return!!t&&"integerValue"in t}function uu(t){return!!t&&"arrayValue"in t}function _d(t){return!!t&&"nullValue"in t}function yd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xo(t){return!!t&&"mapValue"in t}function eR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function _i(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=_i(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_i(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_i(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=_i(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Rt(_i(this.value))}}function Nm(t){const e=[];return Ur(t.fields,((n,r)=>{const s=new rt([n]);if(xo(r)){const i=Nm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,he.min(),he.min(),he.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,he.min(),he.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,he.min(),he.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.position=e,this.inclusive=n}}function vd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ed(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function nR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{}class Ge extends Dm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sR(e,n,r):n==="array-contains"?new aR(e,r):n==="in"?new lR(e,r):n==="not-in"?new cR(e,r):n==="array-contains-any"?new uR(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iR(e,r):new oR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends Dm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Qt(e,n)}matches(e){return Om(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Om(t){return t.op==="and"}function Vm(t){return rR(t)&&Om(t)}function rR(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function yc(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(Vm(t))return t.filters.map((e=>yc(e))).join(",");{const e=t.filters.map((n=>yc(n))).join(",");return`${t.op}(${e})`}}function xm(t,e){return t instanceof Ge?(function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)})(t,e):t instanceof Qt?(function(r,s){return s instanceof Qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&xm(o,s.filters[l])),!0):!1})(t,e):void ue()}function Mm(t){return t instanceof Ge?(function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`})(t):t instanceof Qt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Mm).join(" ,")+"}"})(t):"Filter"}class sR extends Ge{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class iR extends Ge{constructor(e,n){super(e,"in",n),this.keys=Lm("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class oR extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Lm("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Lm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>re.fromName(r.referenceValue)))}class aR extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uu(n)&&Oi(n.arrayValue,this.value)}}class lR extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oi(this.value.arrayValue,n)}}class cR extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oi(this.value.arrayValue,n)}}class uR extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Oi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Td(t,e=null,n=[],r=[],s=null,i=null,o=null){return new hR(t,e,n,r,s,i,o)}function hu(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>yc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ys(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ys(r))).join(",")),e.ue=n}return e.ue}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ed(t.startAt,e.startAt)&&Ed(t.endAt,e.endAt)}function vc(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fR(t,e,n,r,s,i,o,l){return new bs(t,e,n,r,s,i,o,l)}function La(t){return new bs(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fm(t){return t.collectionGroup!==null}function yi(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new st(rt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Vi(i,r))})),n.has(rt.keyField().canonicalString())||e.ce.push(new Vi(rt.keyField(),r))}return e.ce}function on(t){const e=de(t);return e.le||(e.le=dR(e,yi(t))),e.le}function dR(t,e){if(t.limitType==="F")return Td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Vi(s.field,i)}));const n=t.endAt?new sa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sa(t.startAt.position,t.startAt.inclusive):null;return Td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ec(t,e){const n=t.filters.concat([e]);return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tc(t,e,n){return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return fu(on(t),on(e))&&t.limitType===e.limitType}function Um(t){return`${hu(on(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Mm(s))).join(", ")}]`),Ma(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ys(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ys(s))).join(",")),`Target(${r})`})(on(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of yi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=vd(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,yi(r),s)||r.endAt&&!(function(o,l,c){const u=vd(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,yi(r),s))})(t,e)}function pR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bm(t){return(e,n)=>{let r=!1;for(const s of yi(t)){const i=gR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gR(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?_s(c,u):ue()})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Cm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new Ue(re.comparator);function Nn(){return mR}const jm=new Ue(re.comparator);function ri(...t){let e=jm;for(const n of t)e=e.insert(n.key,n);return e}function qm(t){let e=jm;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Sr(){return vi()}function $m(){return vi()}function vi(){return new Ss((t=>t.toString()),((t,e)=>t.isEqual(e)))}const _R=new Ue(re.comparator),yR=new st(re.comparator);function _e(...t){let e=yR;for(const n of t)e=e.add(n);return e}const vR=new st(we);function ER(){return vR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function Hm(t){return{integerValue:""+t}}function TR(t,e){return YA(e)?Hm(e):du(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this._=void 0}}function IR(t,e,n){return t instanceof xi?(function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lu(i)&&(i=cu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}})(n,e):t instanceof Mi?Km(t,e):t instanceof Li?Gm(t,e):(function(s,i){const o=Wm(s,i),l=wd(o)+wd(s.Pe);return _c(o)&&_c(s.Pe)?Hm(l):du(s.serializer,l)})(t,e)}function wR(t,e,n){return t instanceof Mi?Km(t,e):t instanceof Li?Gm(t,e):n}function Wm(t,e){return t instanceof ia?(function(r){return _c(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class xi extends Ba{}class Mi extends Ba{constructor(e){super(),this.elements=e}}function Km(t,e){const n=zm(e);for(const r of t.elements)n.some((s=>hn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Li extends Ba{constructor(e){super(),this.elements=e}}function Gm(t,e){let n=zm(e);for(const r of t.elements)n=n.filter((s=>!hn(s,r)));return{arrayValue:{values:n}}}class ia extends Ba{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function wd(t){return He(t.integerValue||t.doubleValue)}function zm(t){return uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.field=e,this.transform=n}}function RR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Mi&&s instanceof Mi||r instanceof Li&&s instanceof Li?ms(r.elements,s.elements,hn):r instanceof ia&&s instanceof ia?hn(r.Pe,s.Pe):r instanceof xi&&s instanceof xi})(t.transform,e.transform)}class bR{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function Qm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pu(t.key,Wt.none()):new zi(t.key,t.data,Wt.none());{const n=t.data,r=Rt.empty();let s=new st(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new dr(t.key,r,new Dt(s.toArray()),Wt.none())}}function SR(t,e,n){t instanceof zi?(function(s,i,o){const l=s.value.clone(),c=Rd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof dr?(function(s,i,o){if(!Mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Rd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Jm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ei(t,e,n,r){return t instanceof zi?(function(i,o,l,c){if(!Mo(i.precondition,o))return l;const u=i.value.clone(),f=bd(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof dr?(function(i,o,l,c){if(!Mo(i.precondition,o))return l;const u=bd(i.fieldTransforms,c,o),f=o.data;return f.setAll(Jm(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function PR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Wm(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function Ad(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,((i,o)=>RR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zi extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jm(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Rd(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,wR(o,l,n[s]))}return r}function bd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,IR(i,o,e))}return r}class pu extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CR extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&SR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$m();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Qm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,((n,r)=>Ad(n,r)))&&ms(this.baseMutations,e.baseMutations,((n,r)=>Ad(n,r)))}}class gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=(function(){return _R})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ve;function OR(t){switch(t){default:return ue();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Ym(t){if(t===void 0)return kn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ke.OK:return L.OK;case Ke.CANCELLED:return L.CANCELLED;case Ke.UNKNOWN:return L.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return L.INTERNAL;case Ke.UNAVAILABLE:return L.UNAVAILABLE;case Ke.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ke.NOT_FOUND:return L.NOT_FOUND;case Ke.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ke.ABORTED:return L.ABORTED;case Ke.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ke.DATA_LOSS:return L.DATA_LOSS;default:return ue()}}(ve=Ke||(Ke={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new kr([4294967295,4294967295],0);function Sd(t){const e=VR().encode(t),n=new Tm;return n.update(e),new Uint8Array(n.digest())}function Pd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kr([n,r],0),new kr([s,i],0)]}class mu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new si(`Invalid padding: ${n}`);if(r<0)throw new si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new si(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=kr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(kr.fromNumber(r)));return s.compare(xR)===1&&(s=new kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Sd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mu(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.Ie===0)return;const n=Sd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qa(he.min(),s,new Ue(we),Nn(),_e())}}class Qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qi(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Xm{constructor(e,n){this.targetId=e,this.me=n}}class Zm{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cd{constructor(){this.fe=0,this.ge=Nd(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}})),new Qi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Nd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class MR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nn(),this.qe=kd(),this.Qe=new Ue(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,(n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach(((r,s)=>{this.ze(s)&&n(s)}))}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(vc(i))if(r===0){const o=new re(i.path);this.Ue(n,o,ft.newNoDocument(o,he.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Vr(r).toUint8Array()}catch(c){if(c instanceof km)return gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new mu(o,s,i)}catch(c){return gs(c instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)})),s}rt(e){const n=new Map;this.Be.forEach(((i,o)=>{const l=this.Je(o);if(l){if(i.current&&vc(l.target)){const c=new re(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ft.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}}));let r=_e();this.qe.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ke.forEach(((i,o)=>o.setReadTime(e)));const s=new qa(e,n,this.Qe,this.ke,r);return this.ke=Nn(),this.qe=kd(),this.Qe=new Ue(we),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Cd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new st(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cd),this.Le.getRemoteKeysForTarget(e).forEach((n=>{this.Ue(e,n,null)}))}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function kd(){return new Ue(re.comparator)}function Nd(){return new Ue(re.comparator)}const LR={asc:"ASCENDING",desc:"DESCENDING"},FR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UR={and:"AND",or:"OR"};class BR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ic(t,e){return t.useProto3Json||Ma(e)?e:{value:e}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jR(t,e){return oa(t,e.toTimestamp())}function an(t){return Ce(!!t),he.fromTimestamp((function(n){const r=ur(n);return new Ye(r.seconds,r.nanos)})(t))}function _u(t,e){return wc(t,e).canonicalString()}function wc(t,e){const n=(function(s){return new Ve(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function t_(t){const e=Ve.fromString(t);return Ce(o_(e)),e}function Ac(t,e){return _u(t.databaseId,e.path)}function Ul(t,e){const n=t_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(r_(n))}function n_(t,e){return _u(t.databaseId,e)}function qR(t){const e=t_(t);return e.length===4?Ve.emptyPath():r_(e)}function Rc(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function r_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dd(t,e,n){return{name:Ac(t,e),fields:n.value.mapValue.fields}}function $R(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ce(f===void 0||typeof f=="string"),it.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),it.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?L.UNKNOWN:Ym(u.code);return new J(f,u.message||"")})(o);n=new Zm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ul(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):he.min(),l=new Rt({mapValue:{fields:r.document.fields}}),c=ft.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Lo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ul(t,r.document),i=r.readTime?an(r.readTime):he.min(),o=ft.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Lo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ul(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new DR(s,i),l=r.targetId;n=new Xm(l,o)}}return n}function HR(t,e){let n;if(e instanceof zi)n={update:Dd(t,e.key,e.value)};else if(e instanceof pu)n={delete:Ac(t,e.key)};else if(e instanceof dr)n={update:Dd(t,e.key,e.data),updateMask:ZR(e.fieldMask)};else{if(!(e instanceof CR))return ue();n={verify:Ac(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Li)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:jR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()})(t,e.precondition)),n}function WR(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map((n=>(function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(he.min())&&(o=an(i)),new bR(o,s.transformResults||[])})(n,e)))):[]}function KR(t,e){return{documents:[n_(t,e.path)]}}function GR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=n_(t,s);const i=(function(u){if(u.length!==0)return i_(Qt.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(g){return{field:Zr(g.field),direction:JR(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ic(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{_t:n,parent:s}}function zR(t){let e=qR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=s_(p);return g instanceof Qt&&Vm(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(S){return new Vi(es(S.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(g)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let g;return g=typeof p=="object"?p.value:p,Ma(g)?null:g})(n.limit));let c=null;n.startAt&&(c=(function(p){const g=!!p.before,v=p.values||[];return new sa(v,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const g=!p.before,v=p.values||[];return new sa(v,g)})(n.endAt)),fR(e,s,o,i,l,"F",c,u)}function QR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=es(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=es(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}})(t):t.fieldFilter!==void 0?(function(n){return Ge.create(es(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Qt.create(n.compositeFilter.filters.map((r=>s_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}})(n.compositeFilter.op))})(t):ue()}function JR(t){return LR[t]}function YR(t){return FR[t]}function XR(t){return UR[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function es(t){return rt.fromServerFormat(t.fieldPath)}function i_(t){return t instanceof Ge?(function(n){if(n.op==="=="){if(yd(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NAN"}};if(_d(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yd(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NAN"}};if(_d(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(n.field),op:YR(n.op),value:n.value}}})(t):t instanceof Qt?(function(n){const r=n.getFilters().map((s=>i_(s)));return r.length===1?r[0]:{compositeFilter:{op:XR(n.op),filters:r}}})(t):ue()}function ZR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function o_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,s,i=he.min(),o=he.min(),l=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.ct=e}}function tb(t){const e=zR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.un=new rb}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(cr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class rb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vs(0)}static kn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.changes=new Ss((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ei(r.mutation,s,Dt.empty(),Ye.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=Sr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ri();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Nn();const o=vi(),l=(function(){return vi()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof dr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ei(f.mutation,u,f.mutation.getFieldMask(),Ye.now())):o.set(u.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new ib(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=vi();let s=new Ue(((o,l)=>o-l)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Dt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=$m();f.forEach((g=>{if(!i.has(g)){const v=Qm(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Sr());let l=-1,c=i;return o.next((u=>B.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{c=c.insert(f,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,_e()))).next((f=>({batchId:l,changes:qm(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((r=>{let s=ri();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ri();return this.indexManager.getCollectionParents(e,i).next((l=>B.forEach(l,(c=>{const u=(function(p,g){return new bs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))}));let l=ri();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Ei(f.mutation,u,Dt.empty(),Ye.now()),Ua(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}})(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,(function(s){return{name:s.name,query:tb(s.bundledQuery),readTime:an(s.readTime)}})(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.overlays=new Ue(re.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return B.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.ht(e,n,i)})),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Sr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Sr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return B.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NR(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.Tr=new st(Ze.Er),this.dr=new st(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach((r=>this.removeReference(r,n)))}gr(e){const n=new re(new Ve([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],(o=>{this.Vr(o),i.push(o.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Ve([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new st(Ze.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],(o=>{const l=this.Dr(o.wr);i.push(l)})),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(we);return n.forEach((s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],(l=>{r=r.add(l.wr)}))})),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new re(i),0);let l=new st(we);return this.br.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)}),o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach((r=>{const s=this.Dr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,(s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.br=r}))}On(e){}containsKey(e,n){const r=new Ze(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.Mr=e,this.docs=(function(){return new Ue(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Nn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))})),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Nn();const o=n.path,l=new re(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||GA(KA(f),r)<=0||(s.has(f.key)||Ua(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return B.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new fb(this)}getSize(e){return B.resolve(this.size)}}class fb extends sb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)})),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.persistence=e,this.Nr=new Ss((n=>hu(n)),fu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yu,this.targetCount=0,this.kr=vs.Bn()}forEachTarget(e,n){return this.Nr.forEach(((r,s)=>n(s))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),B.waitFor(i).next((()=>s))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new au(0),this.Kr=!1,this.Kr=!0,this.$r=new cb,this.referenceDelegate=e(this),this.Ur=new db(this),this.indexManager=new nb,this.remoteDocumentCache=(function(s){return new hb(s)})((r=>this.referenceDelegate.Wr(r))),this.serializer=new eb(n),this.Gr=new ab(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new ub(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new gb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next((i=>this.referenceDelegate.jr(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Hr(e,n){return B.or(Object.values(this.qr).map((r=>()=>r.containsKey(e,n))))}}class gb extends QA{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.Jr=new yu,this.Yr=null}static Zr(e){return new vu(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach((s=>this.Xr.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.Xr.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,(r=>{const s=re.fromPath(r);return this.ei(e,s).next((i=>{i||n.removeEntry(s,he.min())}))})).next((()=>(this.Yr=null,n.apply(e))))}updateLimboDocument(e,n){return this.ei(e,n).next((r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())}))}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return _w()?8:JA(pt())>0?6:4})()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Zi(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new mb;return this.Xi(e,n,o).next((l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)}))})).next((()=>i.result))}es(e,n,r,s){return r.documentReadCount<this.ji?(Js()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Js()<=ye.DEBUG&&Z("QueryEngine","Query:",Xr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Js()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):B.resolve())}Yi(e,n){if(Id(n))return B.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Tc(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Tc(n,null,"F")):this.rs(e,u,n,c)}))))})))))}Zi(e,n,r,s){return Id(n)||s.isEqual(he.min())?B.resolve(null):this.Ji.getDocuments(e,r).next((i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(Js()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xr(n)),this.rs(e,o,n,WA(s,-1)).next((l=>l)))}))}ts(e,n){let r=new st(Bm(e));return n.forEach(((s,i)=>{Ua(e,i)&&(r=r.add(i))})),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Js()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.Ji.getDocumentsMatchingQuery(e,n,cr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ue(we),this._s=new Ss((i=>hu(i)),fu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ob(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.os)))}}function vb(t,e,n,r){return new yb(t,e,n,r)}async function a_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({hs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function Eb(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,g=p.keys();let v=B.resolve();return g.forEach((S=>{v=v.next((()=>f.getEntry(c,S))).next((k=>{const N=u.docVersions.get(S);Ce(N!==null),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),v.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=_e();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function l_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Ur.getLastRemoteSnapshotVersion(n)))}function Tb(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p))));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(it.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(k,N,j){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(g,v,f)&&l.push(n.Ur.updateTargetData(i,v))}));let c=Nn(),u=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(Ib(i,o,e.documentUpdates).next((f=>{c=f.Ps,u=f.Is}))),!r.isEqual(he.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next((p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return B.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.os=s,i)))}function Ib(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Nn();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ps:o,Is:s}}))}function wb(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Ab(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Ur.getTargetData(r,e).next((i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next((o=>(s=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r}))}async function bc(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Gi(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Od(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=de(c),g=p._s.get(f);return g!==void 0?B.resolve(p.os.get(g)):p.Ur.getTargetData(u,f)})(r,o,on(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e()))).next((l=>(Rb(r,pR(e),l),{documents:l,Ts:i})))))}function Rb(t,e,n){let r=t.us.get(e)||he.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.us.set(e,r)}class Vd{constructor(){this.activeTargetIds=ER()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bb{constructor(){this.so=new Vd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Vd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po=null;function Bl(){return Po===null?Po=(function(){return 268435456+Math.round(2147483648*Math.random())})():Po++,"0x"+Po.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class kb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Bl(),c=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then((f=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,f),f)),(f=>{throw gs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f}))}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rs})(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((i,o)=>n[o]=i)),s&&s.headers.forEach(((i,o)=>n[o]=i))}xo(n,r){const s=Pb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Bl();return new Promise(((o,l)=>{const c=new Im;c.setWithCredentials(!0),c.listenOnce(wm.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case Vo.NO_ERROR:const f=c.getResponseJson();Z(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Vo.TIMEOUT:Z(ct,`RPC '${e}' ${i} timed out`),l(new J(L.DEADLINE_EXCEEDED,"Request time out"));break;case Vo.HTTP_ERROR:const p=c.getStatus();if(Z(ct,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const S=(function(N){const j=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(j)>=0?j:L.UNKNOWN})(v.status);l(new J(S,v.message))}else l(new J(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new J(L.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(ct,`RPC '${e}' ${i} completed.`)}}));const u=JSON.stringify(s);Z(ct,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)}))}Bo(e,n,r){const s=Bl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bm(),l=Rm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(ct,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,v=!1;const S=new Cb({Io:N=>{v?Z(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(Z(ct,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(ct,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},To:()=>p.close()}),k=(N,j,V)=>{N.listen(j,(q=>{try{V(q)}catch($){setTimeout((()=>{throw $}),0)}}))};return k(p,ni.EventType.OPEN,(()=>{v||(Z(ct,`RPC '${e}' stream ${s} transport opened.`),S.yo())})),k(p,ni.EventType.CLOSE,(()=>{v||(v=!0,Z(ct,`RPC '${e}' stream ${s} transport closed`),S.So())})),k(p,ni.EventType.ERROR,(N=>{v||(v=!0,gs(ct,`RPC '${e}' stream ${s} transport errored:`,N),S.So(new J(L.UNAVAILABLE,"The operation could not be completed")))})),k(p,ni.EventType.MESSAGE,(N=>{var j;if(!v){const V=N.data[0];Ce(!!V);const q=V,$=q.error||((j=q[0])===null||j===void 0?void 0:j.error);if($){Z(ct,`RPC '${e}' stream ${s} received error:`,$);const X=$.status;let se=(function(_){const I=Ke[_];if(I!==void 0)return Ym(I)})(X),w=$.message;se===void 0&&(se=L.INTERNAL,w="Unknown error status: "+X+" with message "+$.message),v=!0,S.So(new J(se,w)),p.close()}else Z(ct,`RPC '${e}' stream ${s} received:`,V),S.bo(V)}})),k(l,Am.STAT_EVENT,(N=>{N.stat===gc.PROXY?Z(ct,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===gc.NOPROXY&&Z(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.wo()}),0),S}}function jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){return new BR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new c_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.Yo===n&&this.P_(r,s)}),(r=>{e((()=>{const s=new J(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)}))}))}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo((()=>{r((()=>this.listener.Eo()))})),this.stream.Ro((()=>{r((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((s=>{r((()=>this.I_(s)))})),this.stream.onMessage((s=>{r((()=>++this.e_==1?this.E_(s):this.onNext(s)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget((()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Nb extends u_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=$R(this.serializer,e),r=(function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?an(o.readTime):he.min()})(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Rc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=vc(c)?{documents:KR(i,c)}:{query:GR(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=e_(i,o.resumeToken);const u=Ic(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=oa(i,o.snapshotVersion.toTimestamp());const u=Ic(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=QR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Rc(this.serializer),n.removeTarget=e,this.a_(n)}}class Db extends u_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=WR(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Rc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>HR(this.serializer,r)))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Mo(e,wc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(L.UNKNOWN,i.toString())}))}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Lo(e,wc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(L.UNKNOWN,o.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Vb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((o=>{r.enqueueAndForget((async()=>{Br(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await(async function(c){const u=de(c);u.L_.add(4),await Ji(u),u.q_.set("Unknown"),u.L_.delete(4),await Ha(u)})(this))}))})),this.q_=new Vb(r,s)}}async function Ha(t){if(Br(t))for(const e of t.B_)await e(!0)}async function Ji(t){for(const e of t.B_)await e(!1)}function h_(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Au(n)?wu(n):Ps(n).r_()&&Iu(n,e))}function Tu(t,e){const n=de(t),r=Ps(n);n.N_.delete(e),r.r_()&&f_(n,e),n.N_.size===0&&(r.r_()?r.o_():Br(n)&&n.q_.set("Unknown"))}function Iu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).A_(e)}function f_(t,e){t.Q_.xe(e),Ps(t).R_(e)}function wu(t){t.Q_=new MR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.q_.v_()}function Au(t){return Br(t)&&!Ps(t).n_()&&t.N_.size>0}function Br(t){return de(t).L_.size===0}function d_(t){t.Q_=void 0}async function Mb(t){t.q_.set("Online")}async function Lb(t){t.N_.forEach(((e,n)=>{Iu(t,e)}))}async function Fb(t,e){d_(t),Au(t)?(t.q_.M_(e),wu(t)):t.q_.set("Unknown")}async function Ub(t,e,n){if(t.q_.set("Online"),e instanceof Zm&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))})(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await aa(t,r)}else if(e instanceof Lo?t.Q_.Ke(e):e instanceof Xm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await l_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(u);f&&i.N_.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(it.EMPTY_BYTE_STRING,f.snapshotVersion)),f_(i,c);const p=new Xn(f.target,c,u,f.sequenceNumber);Iu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await aa(t,r)}}async function aa(t,e,n){if(!Gi(e))throw e;t.L_.add(1),await Ji(t),t.q_.set("Offline"),n||(n=()=>l_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ha(t)}))}function p_(t,e){return e().catch((n=>aa(t,n,e)))}async function Wa(t){const e=de(t),n=hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Bb(e);)try{const s=await wb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,jb(e,s)}catch(s){await aa(e,s)}g_(e)&&m_(e)}function Bb(t){return Br(t)&&t.O_.length<10}function jb(t,e){t.O_.push(e);const n=hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function g_(t){return Br(t)&&!hr(t).n_()&&t.O_.length>0}function m_(t){hr(t).start()}async function qb(t){hr(t).p_()}async function $b(t){const e=hr(t);for(const n of t.O_)e.m_(n.mutations)}async function Hb(t,e,n){const r=t.O_.shift(),s=gu.from(r,e,n);await p_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Wa(t)}async function Wb(t,e){e&&hr(t).V_&&await(async function(r,s){if((function(o){return OR(o)&&o!==L.ABORTED})(s.code)){const i=r.O_.shift();hr(r).s_(),await p_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Wa(r)}})(t,e),g_(t)&&m_(t)}async function Md(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Br(n);n.L_.add(3),await Ji(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ha(n)}async function Kb(t,e){const n=de(t);e?(n.L_.delete(2),await Ha(n)):e||(n.L_.add(2),await Ji(n),n.q_.set("Unknown"))}function Ps(t){return t.K_||(t.K_=(function(n,r,s){const i=de(n);return i.w_(),new Nb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Eo:Mb.bind(null,t),Ro:Lb.bind(null,t),mo:Fb.bind(null,t),d_:Ub.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),Au(t)?wu(t):t.q_.set("Unknown")):(await t.K_.stop(),d_(t))}))),t.K_}function hr(t){return t.U_||(t.U_=(function(n,r,s){const i=de(n);return i.w_(),new Db(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:qb.bind(null,t),mo:Wb.bind(null,t),f_:$b.bind(null,t),g_:Hb.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await Wa(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ru(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bu(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Gi(t))return new J(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=ri(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.W_=new Ue(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Es{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Es(e,n,is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class zb{constructor(){this.queries=Fd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Fd(),i.forEach(((o,l)=>{for(const c of l.j_)c.onError(r)}))})(this,new J(L.ABORTED,"Firestore shutting down"))}}function Fd(){return new Ss((t=>Um(t)),Fa)}async function __(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Gb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=bu(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Su(n)}async function y_(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Qb(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Su(n)}function Jb(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Su(t){t.Y_.forEach((e=>{e.next()}))}var Sc,Ud;(Ud=Sc||(Sc={})).ea="default",Ud.Cache="cache";class v_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.key=e}}class T_{constructor(e){this.key=e}}class Yb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=Bm(e),this.Ra=new is(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ld,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),v=Ua(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;g&&v?g.data.isEqual(v.data)?S!==k&&(r.track({type:3,doc:v}),N=!0):this.ga(g,v)||(r.track({type:2,doc:v}),N=!0,(c&&this.Aa(v,c)>0||u&&this.Aa(v,u)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),N=!0):g&&!v&&(r.track({type:1,doc:g}),N=!0,(c||u)&&(l=!0)),N&&(v?(o=o.add(v),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort(((f,p)=>(function(v,S){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(v)-k(S)})(f.type,p.type)||this.Aa(f.doc,p.doc))),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Es(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ld,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((n=>this.Ta=this.Ta.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ta=this.Ta.delete(n))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach((r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))}));const n=[];return e.forEach((r=>{this.da.has(r)||n.push(new T_(r))})),this.da.forEach((r=>{e.has(r)||n.push(new E_(r))})),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Es.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Xb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Zb{constructor(e){this.key=e,this.va=!1}}class e0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ss((l=>Um(l)),Fa),this.Ma=new Map,this.xa=new Set,this.Oa=new Ue(re.comparator),this.Na=new Map,this.La=new yu,this.Ba={},this.ka=new Map,this.qa=vs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function t0(t,e,n=!0){const r=S_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await I_(r,e,n,!0),s}async function n0(t,e){const n=S_(t);await I_(n,e,!0,!1)}async function I_(t,e,n,r){const s=await Ab(t.localStore,on(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await r0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&h_(t.remoteStore,s),l}async function r0(t,e,n,r,s){t.Ka=(p,g,v)=>(async function(k,N,j,V){let q=N.view.ma(j);q.ns&&(q=await Od(k.localStore,N.query,!1).then((({documents:w})=>N.view.ma(w,q))));const $=V&&V.targetChanges.get(N.targetId),X=V&&V.targetMismatches.get(N.targetId)!=null,se=N.view.applyChanges(q,k.isPrimaryClient,$,X);return jd(k,N.targetId,se.wa),se.snapshot})(t,p,g,v);const i=await Od(t.localStore,e,!0),o=new Yb(e,i.Ts),l=o.ma(i.documents),c=Qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);jd(t,n,u.wa);const f=new Xb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function s0(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter((o=>!Fa(o,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Tu(r.remoteStore,s.targetId),Pc(r,s.targetId)})).catch(Ki)):(Pc(r,s.targetId),await bc(r.localStore,s.targetId,!0))}async function i0(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tu(n.remoteStore,r.targetId))}async function o0(t,e,n){const r=d0(t);try{const s=await(function(o,l){const c=de(o),u=Ye.now(),f=l.reduce(((v,S)=>v.add(S.key)),_e());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let S=Nn(),k=_e();return c.cs.getEntries(v,f).next((N=>{S=N,S.forEach(((j,V)=>{V.isValidDocument()||(k=k.add(j))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,S))).next((N=>{p=N;const j=[];for(const V of l){const q=PR(V,p.get(V.key).overlayedDocument);q!=null&&j.push(new dr(V.key,q,Nm(q.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,j,l)})).next((N=>{g=N;const j=N.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(v,N.batchId,j)}))})).then((()=>({batchId:g.batchId,changes:qm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ue(we)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u})(r,s.batchId,n),await Yi(r,s.changes),await Wa(r.remoteStore)}catch(s){const i=bu(s,"Failed to persist write");n.reject(i)}}async function w_(t,e){const n=de(t);try{const r=await Tb(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))})),await Yi(n,r,e)}catch(r){await Ki(r)}}function Bd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach(((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=de(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const g of p.j_)g.Z_(l)&&(u=!0)})),u&&Su(c)})(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function a0(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ue(re.comparator);o=o.insert(i,ft.newNoDocument(i,he.min()));const l=_e().add(i),c=new qa(he.min(),new Map,new Ue(we),o,l);await w_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Pu(r)}else await bc(r.localStore,e,!1).then((()=>Pc(r,e,n))).catch(Ki)}async function l0(t,e){const n=de(t),r=e.batch.batchId;try{const s=await Eb(n.localStore,e);R_(n,r,null),A_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yi(n,s)}catch(s){await Ki(s)}}async function c0(t,e,n){const r=de(t);try{const s=await(function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Ce(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);R_(r,e,n),A_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yi(r,s)}catch(s){await Ki(s)}}function A_(t,e){(t.ka.get(e)||[]).forEach((n=>{n.resolve()})),t.ka.delete(e)}function R_(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Pc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((r=>{t.La.containsKey(r)||b_(t,r)}))}function b_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Tu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Pu(t))}function jd(t,e,n){for(const r of n)r instanceof E_?(t.La.addReference(r.key,e),u0(t,r)):r instanceof T_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||b_(t,r.key)):ue()}function u0(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),Pu(t))}function Pu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new Zb(n)),t.Oa=t.Oa.insert(n,r),h_(t.remoteStore,new Xn(on(La(n.path)),r,"TargetPurposeLimboResolution",au.oe))}}async function Yi(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach(((l,c)=>{o.push(r.Ka(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Eu.Wi(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.Ca.d_(s),await(async function(c,u){const f=de(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>B.forEach(u,(g=>B.forEach(g.$i,(v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v))).next((()=>B.forEach(g.Ui,(v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))))))}catch(p){if(!Gi(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=f.os.get(g),S=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(g,k)}}})(r.localStore,i))}async function h0(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await a_(n.localStore,e);n.currentUser=e,(function(i,o){i.ka.forEach((l=>{l.forEach((c=>{c.reject(new J(L.CANCELLED,o))}))})),i.ka.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yi(n,r.hs)}}function f0(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function S_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=w_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=f0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=a0.bind(null,e),e.Ca.d_=Qb.bind(null,e.eventManager),e.Ca.$a=Jb.bind(null,e.eventManager),e}function d0(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=l0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c0.bind(null,e),e}class la{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$a(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return vb(this.persistence,new _b,e.initialUser,this.serializer)}Ga(e){return new pb(vu.Zr,this.serializer)}Wa(e){return new bb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}la.provider={build:()=>new la};class Cc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=h0.bind(null,this.syncEngine),await Kb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new zb})()}createDatastore(e){const n=$a(e.databaseInfo.databaseId),r=(function(i){return new kb(i)})(e.databaseInfo);return(function(i,o,l,c){return new Ob(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new xb(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Bd(this.syncEngine,n,0)),(function(){return xd.D()?new xd:new Sb})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new e0(s,i,o,l,c,u);return f&&(p.Qa=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=de(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ji(i),i.k_.shutdown(),i.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cc.provider={build:()=>new Cc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=Pm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ql(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await a_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await g0(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Md(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Md(e.remoteStore,s))),t._onlineComponents=e}async function g0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await ql(t,new la)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await ql(t,new la);return t._offlineComponents}async function C_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await qd(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await qd(t,new Cc))),t._onlineComponents}function m0(t){return C_(t).then((e=>e.syncEngine))}async function kc(t){const e=await C_(t),n=e.eventManager;return n.onListen=t0.bind(null,e.syncEngine),n.onUnlisten=s0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=n0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=i0.bind(null,e.syncEngine),n}function _0(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new P_({next:g=>{f.Za(),o.enqueueAndForget((()=>y_(i,p)));const v=g.docs.has(l);!v&&g.fromCache?u.reject(new J(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?u.reject(new J(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new v_(La(l.path),f,{includeMetadataChanges:!0,_a:!0});return __(i,p)})(await kc(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e,n){if(!n)throw new J(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function y0(t,e,n,r){if(e===!0&&r===!0)throw new J(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hd(t){if(!re.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wd(t){if(re.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ka(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ka(t);throw new J(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}y0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ga{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kd(e),e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new MA;switch(r.type){case"firstParty":return new BA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=$d.get(n);r&&(Z("ComponentProvider","Removing Datastore"),$d.delete(n),r.terminate())})(this),Promise.resolve()}}function v0(t,e,n,r={}){var s;const i=(t=ln(t,Ga))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ut.MOCK_USER;else{l=uw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new J(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(u)}t._authCredentials=new LA(new Sm(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jr(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class sr extends jr{constructor(e,n,r){super(e,n,La(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new re(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function za(t,e,...n){if(t=Xe(t),N_("collection","path",e),t instanceof Ga){const r=Ve.fromString(e,...n);return Wd(r),new sr(t,null,r)}{if(!(t instanceof wt||t instanceof sr))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Wd(r),new sr(t.firestore,null,r)}}function Qa(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=Pm.newId()),N_("doc","path",e),t instanceof Ga){const r=Ve.fromString(e,...n);return Hd(r),new wt(t,null,new re(r))}{if(!(t instanceof wt||t instanceof sr))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Hd(r),new wt(t.firestore,t instanceof sr?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new c_(this,"async_queue_retry"),this.Vu=()=>{const r=jl();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=jl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const n=new rr;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const n=this.mu.then((()=>(this.du=!0,e().catch((r=>{this.Eu=r,this.du=!1;const s=(function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l})(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r})).then((r=>(this.du=!1,r))))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Ru.createAndSchedule(this,e,n,r,(i=>this.yu(i)));return this.Tu.push(s),s}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function zd(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Mr extends Ga{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gd(e),this._firestoreClient=void 0,await e}}}function E0(t,e){const n=typeof t=="object"?t:ym(),r=typeof t=="string"?t:"(default)",s=iu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lw("firestore");i&&v0(s,...i)}return s}function Cu(t){if(t._terminated)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||T0(t),t._firestoreClient}function T0(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new ZA(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,k_(f.experimentalLongPollingOptions),f.useFetchStreams)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new p0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(it.fromBase64String(e))}catch(n){throw new J(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=/^__.*__$/;class w0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new zi(e,this.data,n,this.fieldTransforms)}}class D_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function O_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Du{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ca(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(O_(this.Cu)&&I0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class A0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$a(e)}Qu(e,n,r,s=!1){return new Du({Cu:e,methodName:n,qu:r,path:rt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ou(t){const e=t._freezeSettings(),n=$a(t._databaseId);return new A0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function R0(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);xu("Data must be an object, but it was:",o,r);const l=V_(r,o);let c,u;if(i.merge)c=new Dt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Nc(e,p,n);if(!o.contains(g))throw new J(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);M_(f,g)||f.push(g)}c=new Dt(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new w0(new Rt(l),c,u)}class Xa extends Ya{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xa}}class Vu extends Ya{_toFieldTransform(e){return new AR(e.path,new xi)}isEqual(e){return e instanceof Vu}}function b0(t,e,n,r){const s=t.Qu(1,e,n);xu("Data must be an object, but it was:",s,r);const i=[],o=Rt.empty();Ur(r,((c,u)=>{const f=Mu(e,c,n);u=Xe(u);const p=s.Nu(f);if(u instanceof Xa)i.push(f);else{const g=Xi(u,p);g!=null&&(i.push(f),o.set(f,g))}}));const l=new Dt(i);return new D_(o,l,s.fieldTransforms)}function S0(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Nc(e,r,n)],c=[s];if(i.length%2!=0)throw new J(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Nc(e,i[g])),c.push(i[g+1]);const u=[],f=Rt.empty();for(let g=l.length-1;g>=0;--g)if(!M_(u,l[g])){const v=l[g];let S=c[g];S=Xe(S);const k=o.Nu(v);if(S instanceof Xa)u.push(v);else{const N=Xi(S,k);N!=null&&(u.push(v),f.set(v,N))}}const p=new Dt(u);return new D_(f,p,o.fieldTransforms)}function P0(t,e,n,r=!1){return Xi(n,t.Qu(r?4:3,e))}function Xi(t,e){if(x_(t=Xe(t)))return xu("Unsupported field value:",e,t),V_(t,e);if(t instanceof Ya)return(function(r,s){if(!O_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=Xi(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:oa(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(s.serializer,i)}}if(r instanceof ku)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:e_(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_u(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nu)return(function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map((c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return du(l.serializer,c)}))}}}}}})(r,s);throw s.Bu(`Unsupported field value: ${Ka(r)}`)})(t,e)}function V_(t,e){const n={};return Cm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,((r,s)=>{const i=Xi(s,e.Mu(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function x_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof ku||t instanceof Ts||t instanceof wt||t instanceof Ya||t instanceof Nu)}function xu(t,e,n){if(!x_(n)||!(function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)})(n)){const r=Ka(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Nc(t,e,n){if((e=Xe(e))instanceof Ja)return e._internalPath;if(typeof e=="string")return Mu(t,e);throw ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const C0=new RegExp("[~\\*/\\[\\]]");function Mu(t,e,n){if(e.search(C0)>=0)throw ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ja(...e.split("."))._internalPath}catch{throw ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ca(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new J(L.INVALID_ARGUMENT,l+t+c)}function M_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new k0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class k0 extends L_{data(){return super.data()}}function Lu(t,e){return typeof e=="string"?Mu(t,e):e instanceof Ja?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fu{}class F_ extends Fu{}function U_(t,e,...n){let r=[];e instanceof Fu&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof Bu)).length,l=i.filter((c=>c instanceof Uu)).length;if(o>1||o>0&&l>0)throw new J(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Uu extends F_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uu(e,n,r)}_apply(e){const n=this._parse(e);return j_(e._query,n),new jr(e.firestore,e.converter,Ec(e._query,n))}_parse(e){const n=Ou(e.firestore);return(function(i,o,l,c,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Jd(p,f);const v=[];for(const S of p)v.push(Qd(c,i,S));g={arrayValue:{values:v}}}else g=Qd(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Jd(p,f),g=P0(l,o,p,f==="in"||f==="not-in");return Ge.create(u,f,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Bu extends Fu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)j_(o,c),o=Ec(o,c)})(e._query,n),new jr(e.firestore,e.converter,Ec(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ju extends F_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ju(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vi(i,o)})(e._query,this._field,this._direction);return new jr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new bs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function B_(t,e="asc"){const n=e,r=Lu("orderBy",t);return ju._create(r,n)}function Qd(t,e,n){if(typeof(n=Xe(n))=="string"){if(n==="")throw new J(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fm(e)&&n.indexOf("/")!==-1)throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!re.isDocumentKey(r))throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return md(t,new re(r))}if(n instanceof wt)return md(t,n._key);throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ka(n)}.`)}function Jd(t,e){if(!Array.isArray(t)||t.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function j_(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class D0{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ur(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>He(o.doubleValue)));return new Nu(i)}convertGeoPoint(e){return new ku(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ce(o_(r));const s=new Di(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class q_ extends L_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fo extends q_{data(e={}){return super.data(e)}}class V0{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ii(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ii(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ii(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:x0(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function x0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){t=ln(t,wt);const e=ln(t.firestore,Mr);return _0(Cu(e),t._key).then((n=>K_(e,t,n)))}class $_ extends D0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function L0(t,e,n,...r){t=ln(t,wt);const s=ln(t.firestore,Mr),i=Ou(s);let o;return o=typeof(e=Xe(e))=="string"||e instanceof Ja?S0(i,"updateDoc",t._key,e,n,r):b0(i,"updateDoc",t._key,e),qu(s,[o.toMutation(t._key,Wt.exists(!0))])}function F0(t){return qu(ln(t.firestore,Mr),[new pu(t._key,Wt.none())])}function H_(t,e){const n=ln(t.firestore,Mr),r=Qa(t),s=O0(t.converter,e);return qu(n,[R0(Ou(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then((()=>r))}function W_(t,...e){var n,r,s;t=Xe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||zd(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(zd(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof wt)u=ln(t.firestore,Mr),f=La(t._key.path),c={next:p=>{e[o]&&e[o](K_(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=ln(t,jr);u=ln(p.firestore,Mr),f=p._query;const g=new $_(u);c={next:v=>{e[o]&&e[o](new V0(u,g,p,v))},error:e[o+1],complete:e[o+2]},N0(t._query)}return(function(g,v,S,k){const N=new P_(k),j=new v_(v,N,S);return g.asyncQueue.enqueueAndForget((async()=>__(await kc(g),j))),()=>{N.Za(),g.asyncQueue.enqueueAndForget((async()=>y_(await kc(g),j)))}})(Cu(u),f,l,c)}function qu(t,e){return(function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget((async()=>o0(await m0(r),s,i))),i.promise})(Cu(t),e)}function K_(t,e,n){const r=n.docs.get(e._key),s=new $_(t);return new q_(t,s,e._key,r,new ii(n.hasPendingWrites,n.fromCache),e.converter)}function Dc(){return new Vu("serverTimestamp")}(function(e,n=!0){(function(s){Rs=s})(As),ps(new Dr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Mr(new FA(r.getProvider("auth-internal")),new qA(r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),nr(hd,"4.7.3",e),nr(hd,"4.7.3","esm2017")})();function $u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function G_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U0=G_,z_=new Hi("auth","Firebase",G_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new ru("@firebase/auth");function B0(t,...e){ua.logLevel<=ye.WARN&&ua.warn(`Auth (${As}): ${t}`,...e)}function Uo(t,...e){ua.logLevel<=ye.ERROR&&ua.error(`Auth (${As}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Hu(t,...e)}function cn(t,...e){return Hu(t,...e)}function Q_(t,e,n){const r=Object.assign(Object.assign({},U0()),{[e]:n});return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function ir(t){return Q_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return z_.create(t,...e)}function le(t,e,...n){if(!t)throw Hu(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function Dn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function j0(){return Yd()==="http:"||Yd()==="https:"}function Yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j0()||pw()||"connection"in navigator)?navigator.onLine:!0}function $0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=hw()||gw()}get(){return q0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new Zi(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pr(t,e,n,r,s={}){return Y_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Wi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return dw()||(u.referrerPolicy="no-referrer"),J_.fetch()(X_(t,t.config.apiHost,n,l),u)})}async function Y_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},H0),e);try{const s=new G0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Co(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Co(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Q_(t,f,u);Jt(t,f)}}catch(s){if(s instanceof Vn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function Za(t,e,n,r,s={}){const i=await pr(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function X_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Wu(t.config,s):`${t.config.apiScheme}://${s}`}function K0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class G0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),W0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function Xd(t){return t!==void 0&&t.enterprise!==void 0}class z0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return K0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Q0(t,e){return pr(t,"GET","/v2/recaptchaConfig",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(t,e){return pr(t,"POST","/v1/accounts:delete",e)}async function Z_(t,e){return pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Y0(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),s=Ku(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ti($l(s.auth_time)),issuedAtTime:Ti($l(s.iat)),expirationTime:Ti($l(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $l(t){return Number(t)*1e3}function Ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=hm(n);return s?JSON.parse(s):(Uo("Failed to decode base64 JWT payload"),null)}catch(s){return Uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zd(t){const e=Ku(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&X0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function X0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fi(t,Z_(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ey(i.providerUserInfo):[],l=tS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function eS(t){const e=Xe(t);await ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ey(t){return t.map(e=>{var{providerId:n}=e,r=$u(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(t,e){const n=await Y_(t,{},async()=>{const r=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=X_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",J_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rS(t,e){return pr(t,"POST","/v2/accounts:revokeToken",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Zd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new os;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$u(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Y0(this,e)}reload(){return eS(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await Fi(this,J0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:$,isAnonymous:X,providerData:se,stsTokenManager:w}=n;le(q&&w,e,"internal-error");const y=os.fromJSON(this.name,w);le(typeof q=="string",e,"internal-error"),qn(p,e.name),qn(g,e.name),le(typeof $=="boolean",e,"internal-error"),le(typeof X=="boolean",e,"internal-error"),qn(v,e.name),qn(S,e.name),qn(k,e.name),qn(N,e.name),qn(j,e.name),qn(V,e.name);const _=new wn({uid:q,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:X,photoURL:S,phoneNumber:v,tenantId:k,stsTokenManager:y,createdAt:j,lastLoginAt:V});return se&&Array.isArray(se)&&(_.providerData=se.map(I=>Object.assign({},I))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new os;s.updateFromServerResponse(n);const i=new wn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ha(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ey(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new os;l.updateFromIdToken(r);const c=new wn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Map;function An(t){Dn(t instanceof Function,"Expected a class definition");let e=ep.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ep.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ty.type="NONE";const tp=ty;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(An(tp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||An(tp);const o=Bo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const p=wn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new as(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new as(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ay(e))return"Blackberry";if(ly(e))return"Webos";if(ry(e))return"Safari";if((e.includes("chrome/")||sy(e))&&!e.includes("edge/"))return"Chrome";if(oy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ny(t=pt()){return/firefox\//i.test(t)}function ry(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sy(t=pt()){return/crios\//i.test(t)}function iy(t=pt()){return/iemobile/i.test(t)}function oy(t=pt()){return/android/i.test(t)}function ay(t=pt()){return/blackberry/i.test(t)}function ly(t=pt()){return/webos/i.test(t)}function Gu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sS(t=pt()){var e;return Gu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iS(){return mw()&&document.documentMode===10}function cy(t=pt()){return Gu(t)||oy(t)||ly(t)||ay(t)||/windows phone/i.test(t)||iy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t,e=[]){let n;switch(t){case"Browser":n=np(pt());break;case"Worker":n=`${np(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e={}){return pr(t,"GET","/v2/passwordPolicy",qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=6;class cS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rp(this),this.idTokenSubscription=new rp(this),this.beforeStateQueue=new oS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Z_(this,{idToken:e}),r=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(ir(this));const n=e?Xe(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aS(this),n=new cS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&B0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cs(t){return Xe(t)}class rp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aw(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hS(t){el=t}function hy(t){return el.loadJS(t)}function fS(){return el.recaptchaEnterpriseScript}function dS(){return el.gapiScript}function pS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gS="recaptcha-enterprise",mS="NO_RECAPTCHA";class _S{constructor(e){this.type=gS,this.auth=Cs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Q0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new z0(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Xd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(mS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Xd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=fS();c.length!==0&&(c+=l),hy(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function sp(t,e,n,r=!1){const s=new _S(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ip(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await sp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t,e){const n=iu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ta(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function vS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ES(t,e,n){const r=Cs(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fy(e),{host:o,port:l}=TS(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),IS()}function fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TS(t){const e=fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:op(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:op(o)}}}function op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function wS(t,e){return pr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(t,e){return Za(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function bS(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends zu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ip(e,n,"signInWithPassword",AS);case"emailLink":return RS(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ip(e,r,"signUpPassword",wS);case"emailLink":return bS(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return Za(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="http://localhost";class Lr extends zu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$u(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Lr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:SS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CS(t){const e=ei(ti(t)).link,n=e?ei(ti(e)).deep_link_id:null,r=ei(ti(t)).deep_link_id;return(r?ei(ti(r)).link:null)||r||n||e||t}class Qu{constructor(e){var n,r,s,i,o,l;const c=ei(ti(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=PS((s=c.mode)!==null&&s!==void 0?s:null);le(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=CS(e);try{return new Qu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return Ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qu.parseLink(n);return le(r,"argument-error"),Ui._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends dy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends eo{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends eo{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends eo{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wn._fromIdTokenResponse(e,r,s),o=ap(r);return new Is({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ap(r);return new Is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ap(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new fa(e,n,r,s)}}function py(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(t,i,e,r):i})}async function kS(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(ir(r));const s="reauthenticate";try{const i=await Fi(t,py(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=Ku(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),Is._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(t,e,n=!1){if(Tn(t.app))return Promise.reject(ir(t));const r="signIn",s=await py(t,r,e),i=await Is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function DS(t,e){return gy(Cs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t){const e=Cs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function VS(t,e,n){return Tn(t.app)?Promise.reject(ir(t)):DS(Xe(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&OS(t),r})}function xS(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function MS(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function LS(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function FS(t){return Xe(t).signOut()}const da="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=1e3,BS=10;class _y extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);iS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_y.type="LOCAL";const jS=_y;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yy.type="SESSION";const vy=yy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await qS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ju("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function HS(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function WS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GS(){return Ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="firebaseLocalStorageDb",zS=1,pa="firebaseLocalStorage",Iy="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nl(t,e){return t.transaction([pa],e?"readwrite":"readonly").objectStore(pa)}function QS(){const t=indexedDB.deleteDatabase(Ty);return new to(t).toPromise()}function xc(){const t=indexedDB.open(Ty,zS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pa,{keyPath:Iy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pa)?e(r):(r.close(),await QS(),e(await xc()))})})}async function lp(t,e,n){const r=nl(t,!0).put({[Iy]:e,value:n});return new to(r).toPromise()}async function JS(t,e){const n=nl(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function cp(t,e){const n=nl(t,!0).delete(e);return new to(n).toPromise()}const YS=800,XS=3;class wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tl._getInstance(GS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WS(),!this.activeServiceWorker)return;this.sender=new $S(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await lp(e,da,"1"),await cp(e,da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=nl(s,!1).getAll();return new to(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wy.type="LOCAL";const ZS=wy;new Zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t,e){return e?An(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends zu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tP(t){return gy(t.auth,new Yu(t),t.bypassAuthState)}function nP(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),NS(n,new Yu(t),t.bypassAuthState)}async function rP(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),kS(n,new Yu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tP;case"linkViaPopup":case"linkViaRedirect":return rP;case"reauthViaPopup":case"reauthViaRedirect":return nP;default:Jt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=new Zi(2e3,1e4);class ts extends Ay{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sP.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="pendingRedirect",jo=new Map;class oP extends Ay{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await aP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aP(t,e){const n=uP(e),r=cP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lP(t,e){jo.set(t._key(),e)}function cP(t){return An(t._redirectPersistence)}function uP(t){return Bo(iP,t.config.apiKey,t.name)}async function hP(t,e,n=!1){if(Tn(t.app))return Promise.reject(ir(t));const r=Cs(t),s=eP(r,e),o=await new oP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=600*1e3;class dP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ry(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fP&&this.cachedEventUids.clear(),this.cachedEventUids.has(up(e))}saveEventToCache(e){this.cachedEventUids.add(up(e)),this.lastProcessedEventTime=Date.now()}}function up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ry({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ry(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e={}){return pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_P=/^https?/;async function yP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gP(t);for(const n of e)try{if(vP(n))return}catch{}Jt(t,"unauthorized-domain")}function vP(t){const e=Oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_P.test(n))return!1;if(mP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=new Zi(3e4,6e4);function hp(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TP(t){return new Promise((e,n)=>{var r,s,i;function o(){hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(cn(t,"network-request-failed"))},timeout:EP.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const l=pS("iframefcb");return un()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},hy(`${dS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw qo=null,e})}let qo=null;function IP(t){return qo=qo||TP(t),qo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new Zi(5e3,15e3),AP="__/auth/iframe",RP="emulator/auth/iframe",bP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PP(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wu(e,RP):`https://${t.config.authDomain}/${AP}`,r={apiKey:e.apiKey,appName:t.name,v:As},s=SP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Wi(r).slice(1)}`}async function CP(t){const e=await IP(t),n=un().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:PP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=un().setTimeout(()=>{i(o)},wP.get());function c(){un().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NP=500,DP=600,OP="_blank",VP="http://localhost";class fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xP(t,e,n,r=NP,s=DP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},kP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=pt().toLowerCase();n&&(l=sy(u)?OP:n),ny(u)&&(e=e||VP,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[v,S])=>`${g}${v}=${S},`,"");if(sS(u)&&l!=="_self")return MP(e||"",l),new fp(null);const p=window.open(e||"",l,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new fp(p)}function MP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP="__/auth/handler",FP="emulator/auth/handler",UP=encodeURIComponent("fac");async function dp(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:s};if(e instanceof dy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ww(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${UP}=${encodeURIComponent(c)}`:"";return`${BP(t)}?${Wi(l).slice(1)}${u}`}function BP({config:t}){return t.emulator?Wu(t,FP):`https://${t.authDomain}/${LP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="webStorageSupport";class jP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vy,this._completeRedirectFn=hP,this._overrideRedirectResult=lP}async _openPopup(e,n,r,s){var i;Dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await dp(e,n,r,Oc(),s);return xP(e,o,Ju())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dp(e,n,r,Oc(),s);return HS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CP(e),r=new dP(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hl];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cy()||ry()||Gu()}}const qP=jP;var pp="@firebase/auth",gp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WP(t){ps(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uy(t)},u=new uS(r,s,i,c);return vS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ps(new Dr("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(r=>new $P(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(pp,gp,HP(t)),nr(pp,gp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=300,GP=pm("authIdTokenMaxAge")||KP;let mp=null;const zP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GP)return;const s=n==null?void 0:n.token;mp!==s&&(mp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QP(t=ym()){const e=iu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yS(t,{popupRedirectResolver:qP,persistence:[ZS,jS,vy]}),r=pm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zP(i.toString());MS(n,o,()=>o(n.currentUser)),xS(n,l=>o(l))}}const s=fm("auth");return s&&ES(n,`http://${s}`),n}function JP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",JP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WP("Browser");const YP={apiKey:"AIzaSyA8_zaCEwLZIRL14ces2OTee3lAsqDPtCE",authDomain:"devinitelywithyu.firebaseapp.com",projectId:"devinitelywithyu",storageBucket:"devinitelywithyu.firebasestorage.app",messagingSenderId:"490951877501",appId:"1:490951877501:web:62964adb54d10e650aa214"},by=_m(YP),Fr=E0(by),Xu=QP(by),XP=(t,e)=>VS(Xu,t,e),ZP=()=>FS(Xu),eC=t=>LS(Xu,t),no="indra-guests",Sy="indra-rsvp";async function RC(t){return(await H_(za(Fr,no),{...t,createdAt:Dc(),rsvpStatus:"pending",rsvpGuests:0})).id}function bC(t){const e=U_(za(Fr,no),B_("createdAt","desc"));return W_(e,n=>{t(n.docs.map(r=>{var s,i;return{id:r.id,...r.data(),createdAt:((i=(s=r.data().createdAt)==null?void 0:s.toDate)==null?void 0:i.call(s))??new Date}}))})}async function SC(t){await F0(Qa(Fr,no,t))}async function PC(t){try{return await H_(za(Fr,Sy),{...t,createdAt:Dc()}),t.guestId&&await L0(Qa(Fr,no,t.guestId),{rsvpStatus:t.attendance,rsvpGuests:t.guests??0,rsvpMessage:t.message??"",rsvpAt:Dc()}),{success:!0}}catch(e){return{success:!1,error:e.message}}}async function CC(t){try{const e=await M0(Qa(Fr,no,t));if(!e.exists())return null;const n=e.data();return!n.rsvpStatus||n.rsvpStatus==="pending"?null:{name:n.name??"",attendance:n.rsvpStatus??"",guests:n.rsvpGuests??0,message:n.rsvpMessage??""}}catch{return null}}function kC(t){const e=U_(za(Fr,Sy),B_("createdAt","desc"));return W_(e,n=>{t(n.docs.map(r=>{var s,i;return{id:r.id,...r.data(),createdAt:((i=(s=r.data().createdAt)==null?void 0:s.toDate)==null?void 0:i.call(s))??new Date}}).filter(r=>{var s;return(s=r.message)==null?void 0:s.trim()}))})}const rl={coverPhoto:"/gallery/00cover.jpeg",groom:{firstName:"Indra",lastName:"Suhendra",fullName:"Imanuel suhendra, S.H.",photo:"/gallery/00indra.png",fatherName:"Kaseni",motherName:"Simah (✝️)",instagram:"imanuel_suhendra"},bride:{firstName:"Tiar",lastName:"Lamtiar",fullName:"Lamtiar Sianipar, S.Sos.",photo:"/gallery/00tiar3.png",fatherName:"A. Sianipar (✝️) (Opung debora )",motherName:" M. Tambunan",instagram:"sianipar.tiar"},heroPhoto:"/gallery/00cover2.jpeg",gallery:[{src:"/gallery/a1.jpeg",alt:"Foto 1"},{src:"/gallery/a2.jpeg",alt:"Foto 2"},{src:"/gallery/a3.jpeg",alt:"Foto 3"},{src:"/gallery/a4.jpeg",alt:"Foto 4"},{src:"/gallery/a5.jpeg",alt:"Foto 5"},{src:"/gallery/a6.jpeg",alt:"Foto 6"},{src:"/gallery/a7.jpeg",alt:"Foto 7"},{src:"/gallery/a8.jpeg",alt:"Foto 8"},{src:"/gallery/a9.jpeg",alt:"Foto 9"},{src:"/gallery/a10.jpeg",alt:"Foto 10"},{src:"/gallery/a11.jpeg",alt:"Foto 11"},{src:"/gallery/a12.jpeg",alt:"Foto 12"},{src:"/gallery/a13.jpeg",alt:"Foto 13"},{src:"/gallery/a14.jpeg",alt:"Foto 14"},{src:"/gallery/a15.jpeg",alt:"Foto 15"},{src:"/gallery/a16.jpeg",alt:"Foto 16"},{src:"/gallery/a17.jpeg",alt:"Foto 17"},{src:"/gallery/a18.jpeg",alt:"Foto 18"},{src:"/gallery/a19.jpeg",alt:"Foto 19"},{src:"/gallery/a20.jpeg",alt:"Foto 20"},{src:"/gallery/a21.jpeg",alt:"Foto 21"},{src:"/gallery/a22.jpeg",alt:"Foto 22"},{src:"/gallery/a23.jpeg",alt:"Foto 23"},{src:"/gallery/a24.jpeg",alt:"Foto 24"},{src:"/gallery/a25.jpeg",alt:"Foto 25"},{src:"/gallery/a26.jpeg",alt:"Foto 26"},{src:"/gallery/a27.jpeg",alt:"Foto 27"},{src:"/gallery/a28.jpeg",alt:"Foto 28"},{src:"/gallery/a29.jpeg",alt:"Foto 29"},{src:"/gallery/a30.jpeg",alt:"Foto 30"},{src:"/gallery/a31.jpeg",alt:"Foto 31"}],loveStory:[{year:"2025",month:"April",title:"Awal bertemu",story:"Berawal dari pertemuan kebersamaan komunitas Gereja antara Gereja GPdI Koba dan GPdI Toboali di bulan April 2025  dan saat itu kami mulai saling mengenal dan disaat itu juga kami sudah mulai ada perasaan.",photo:"",icon:"star",side:"left"},{year:"2025",month:"Oktober",title:"Jatuh Cinta",story:"Dan selanjutnya kami semakin sering berkumunikasi lewat media sosial Instagram sehingga kami mulai ada perasan yang sama.",photo:"",icon:"coffee",side:"right"},{year:"2025",month:"Desember",title:"Pacaran",story:"Dan di bulan 12 tanggal 20 2025 kami sepakat untuk menjalin hubungan yang lebih serius.",photo:"",icon:"heart",side:"left"},{year:"2025",month:"April",title:"Lamaran",story:"Setelah beberapa waktu kita menjalin hubungan akhirnya kami melaksanakan lamaran dan pertemuan kedua belah pihak keluarga tanggal 10 April 2026.",photo:"",icon:"map",side:"right"},{year:"2026",month:"Juni",title:"Menuju Altar",story:"Dan kini, kami siap melangkah ke babak baru. Di hadapan Tuhan, keluarga, dan orang-orang terkasih, kami akan mengucapkan janji setia kami. Sebuah kisah cinta yang baru saja dimulai.",photo:"",icon:"church",side:"right"}],events:[{id:"holy-matrimony",type:"ceremony",title:"Holy Matrimony",subtitle:"Ibadah Pemberkatan Nikah",date:"2026-06-06",dateLabel:"Sabtu, 06 Juni 2026",timeStart:"09.00 WIB",timeEnd:"Selesai",venue:"GPdI Lebong Siarang",address:"Lr. Hamidison, Jl. Mr. Sudarman Ganda Subrata No.65, Sukajaya, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961",mapsUrl:"https://maps.app.goo.gl/eQfqg1gu5XgHHsTWA"},{id:"reception",type:"reception",title:"Wedding Reception",subtitle:"Pesta Perayaan Pernikahan",date:"2026-06-06",dateLabel:"Sabtu, 06 Juni 2026",timeStart:"12.00 WIB",timeEnd:"Selesai",venue:"Hayo Hotel",address:"Jl. Malaka IV No.16, Bukit Sangkal, Kec. Kalidoni, Kota Palembang, Sumatera Selatan 30114",mapsUrl:"https://maps.app.goo.gl/Aixp5geYr8Rx3nUH9"}],weddingDate:"2026-06-06T09:00:00",rsvpDeadline:"01 Juni 2026",bibleVerse:{text:"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.",reference:"Matius 19:6"},closingVerse:{text:"Kiranya Engkau sekarang berkenan memberkati keluarga hamba-Mu ini, supaya tetap ada di hadapan-Mu untuk selama-lamanya. Sebab apa yang Engkau berkati, ya TUHAN, diberkati untuk selama-lamanya.",reference:"1 Tawarikh 17:27"},countdownVerse:{text:"Dua orang lebih baik daripada seorang diri...",reference:"Pengkhotbah 4:9"},bankAccounts:[{bank:"BNI",number:"1995081286",name:"Imanuel Suhendra"},{bank:"Mandiri",number:"1130006371979",name:"Lamtiar Sianipar"}],giftAddress:"Jl . Ampera bukit Langkik RT. 06 RW. 02 Kec. Toboali, Kab. Bangka Selatan (Tb Obed Jaya)",musicSrc:"/musics/music.mp3",contact:{whatsapp:"",email:""}},tC=rl.groom.firstName,nC=rl.bride.firstName,rC=`${tC} & ${nC}`;function NC(){const t=rl.events[0],e=t.date.replaceAll("-",""),n=encodeURIComponent(`The Wedding of ${rC}`),r=encodeURIComponent(t.address);return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${n}&dates=${e}T090000/${e}T140000&location=${r}`}const Py=GT("auth",()=>{const t=ci(null),e=ci(!0),n=ci(""),r=Ct(()=>!!t.value);function s(){eC(l=>{t.value=l,e.value=!1})}async function i(l,c){n.value="";try{const u=rl.admin;return await XP(l,c),{success:!0}}catch(u){const f={"auth/user-not-found":"Akun tidak ditemukan.","auth/wrong-password":"Password salah.","auth/invalid-email":"Format email tidak valid.","auth/invalid-credential":"Username atau password salah."};return n.value=f[u.code]||"Login gagal. Periksa kredensial Anda.",{success:!1,error:n.value}}}async function o(){var l;if((l=t.value)!=null&&l.isLocal){t.value=null;return}await ZP()}return{user:t,loading:e,isLoggedIn:r,loginError:n,init:s,login:i,logout:o}}),sC=[{path:"/invitation/:token",name:"Invitation",component:()=>zs(()=>import("./InvitationView-CGsvqs10.js"),__vite__mapDeps([0,1,2,3,4,5])),meta:{title:"Undangan Pernikahan"}},{path:"/",name:"Home",component:()=>zs(()=>import("./InvitationView-CGsvqs10.js"),__vite__mapDeps([0,1,2,3,4,5])),meta:{title:"Undangan Pernikahan"}},{path:"/admin",redirect:"/admin/dashboard"},{path:"/admin/login",name:"AdminLogin",component:()=>zs(()=>import("./LoginView-5VjBuIMB.js"),__vite__mapDeps([6,2,4])),meta:{title:"Admin Login",guestOnly:!0}},{path:"/admin/dashboard",name:"AdminDashboard",component:()=>zs(()=>import("./DashboardView-CJy9dppt.js"),__vite__mapDeps([7,2,1,4,8])),meta:{title:"Admin Dashboard",requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>zs(()=>import("./NotFoundView-BTCZXGG9.js"),__vite__mapDeps([9,2,3]))}],Cy=ew({history:OI(),routes:sC,scrollBehavior(t,e,n){return n||(t.hash?{el:t.hash,behavior:"smooth"}:{top:0})}});Cy.beforeEach(async t=>{const e=Py();if(e.loading&&await new Promise(n=>{const r=setInterval(()=>{e.loading||(clearInterval(r),n())},50)}),document.title=t.meta.title?`${t.meta.title} | Wedding`:"Wedding Invitation",t.meta.requiresAuth&&!e.isLoggedIn)return{name:"AdminLogin",query:{redirect:t.fullPath}};if(t.meta.guestOnly&&e.isLoggedIn)return{name:"AdminDashboard"}});const iC={__name:"App",setup(t){return(e,n)=>(Cg(),Ng(Zn(lm)))}},Zu=FT(iC),oC=jT();Zu.use(oC);Zu.use(Cy);const aC=Py();aC.init();Zu.mount("#app");export{lC as A,Nf as B,kT as C,NT as D,PC as E,$t as F,kC as G,mC as H,gC as I,TC as J,Py as K,_C as L,EC as M,GT as N,bC as O,RC as P,SC as Q,JI as R,rC as S,pC as T,cC as U,eu as V,hg as a,Cg as b,Ng as c,fC as d,Og as e,rl as f,jE as g,qE as h,yC as i,Tt as j,hC as k,dC as l,uC as m,Fc as n,lg as o,NC as p,Uc as q,ci as r,Ct as s,hv as t,Zn as u,vC as v,Wv as w,Ra as x,CC as y,ji as z};
