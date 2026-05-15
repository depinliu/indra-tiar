import{c as n}from"./FloralSVG-Cu7twHdK.js";import{r as d,b as o,c as l,j as f,w as k,u as r,d as g,q as x,g as C,t as _,h as w,T as b,U as v}from"./index-Cuqp_Fen.js";const h="W3dd1ngS3cr3tK3y";function m(e,t){let c="";for(let a=0;a<e.length;a++)c+=String.fromCharCode(e.charCodeAt(a)^t.charCodeAt(a%t.length));return c}function p(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function T(e){for(e=e.replace(/-/g,"+").replace(/_/g,"/");e.length%4;)e+="=";return atob(e)}function B(e){try{const t=m(e,h);return p(t)}catch{return p(e)}}function I(e){try{const t=T(e);return m(t,h)}catch{return""}}function A(e,t){const c=JSON.stringify({id:e,name:t}),a=B(c);return`${window.location.origin}/invitation/${a}`}function E(e){try{const t=I(e);return JSON.parse(t)}catch{return null}}/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=n("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=n("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=n("CircleCheckBigIcon",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=n("CircleHelpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=n("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),H=(e,t)=>{const c=e.__vccOpts||e;for(const[a,s]of t)c[a]=s;return c},i=d(""),u=d("success");let y=null;function z(){function e(t,c="success",a=2800){clearTimeout(y),i.value=t,u.value=c,y=setTimeout(()=>{i.value=""},a)}return{message:i,type:u,show:e}}const J={__name:"ToastNotification",setup(e){const{message:t,type:c}=z();return(a,s)=>(o(),l(v,{to:"body"},[f(b,{name:"toast"},{default:k(()=>[r(t)?(o(),g("div",{key:0,class:x(["fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl font-sans text-sm max-w-xs text-center",r(c)==="error"?"bg-red-600 text-white":"bg-stone-800 text-white"])},[r(c)==="success"?(o(),l(r(M),{key:0,class:"w-4 h-4 text-sage-300 flex-shrink-0"})):(o(),l(r(N),{key:1,class:"w-4 h-4 text-red-300 flex-shrink-0"})),C(" "+_(r(t)),1)],2)):w("",!0)]),_:1})]))}};export{O as C,H as _,G as a,M as b,N as c,q as d,V as e,J as f,A as g,E as p,z as u};
