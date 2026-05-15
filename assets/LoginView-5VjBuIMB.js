import{K as g,d as y,j as a,e as t,i as _,u as s,A as f,B as M,L,c as d,t as x,h as I,g as v,w as E,R as V,z as U,r as h,M as j,J as A,b as n}from"./index-CR05durg.js";import{c as l,_ as u}from"./FloralSVG-BvFJDEA5.js";import{L as B}from"./loader-circle-C0xXXN_z.js";/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=l("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=l("EyeOffIcon",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=l("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=l("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=l("LogInIcon",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=l("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),P={class:"min-h-screen bg-gradient-to-br from-cream-100 via-sage-50 to-cream-200 flex items-center justify-center px-4 relative overflow-hidden"},S={class:"w-full max-w-sm"},H={class:"text-center mb-8"},K={class:"flex justify-center mb-4"},O={class:"card p-8"},T={class:"relative"},$={class:"relative"},J=["type"],W={key:0,class:"font-sans text-red-500 text-xs text-center bg-red-50 py-2 px-3 rounded-lg"},F=["disabled"],G={class:"text-center mt-5"},ee={__name:"LoginView",setup(Q){const p=g(),w=j(),k=A(),r=h(!1),i=h(!1),o=U({email:"",password:""});async function b(){r.value=!0;const m=await p.login(o.email,o.password);if(r.value=!1,m.success){const e=k.query.redirect||"/admin/dashboard";w.push(e)}}return(m,e)=>(n(),y("div",P,[a(u,{position:"corner-tl",class:"absolute top-0 left-0 w-44 opacity-50 pointer-events-none"}),a(u,{position:"corner-br",class:"absolute bottom-0 right-0 w-44 opacity-50 pointer-events-none"}),t("div",S,[t("div",H,[t("div",K,[a(u,{position:"flower-sm",class:"w-14 h-14 animate-float"})]),e[3]||(e[3]=t("h1",{class:"font-display text-3xl text-stone-800 italic mb-1"},"Admin Panel",-1)),e[4]||(e[4]=t("p",{class:"font-sans text-stone-400 text-xs tracking-widest uppercase"},"Wedding Invitation",-1))]),t("div",O,[t("form",{onSubmit:_(b,["prevent"]),class:"space-y-4"},[t("div",null,[e[5]||(e[5]=t("label",{class:"label"},"Username / Email",-1)),t("div",T,[a(s(D),{class:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300"}),f(t("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>o.email=c),type:"text",required:"",autocomplete:"username",placeholder:"admin",class:"input-field pl-9"},null,512),[[M,o.email]])])]),t("div",null,[e[6]||(e[6]=t("label",{class:"label"},"Password",-1)),t("div",$,[a(s(R),{class:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300"}),f(t("input",{"onUpdate:modelValue":e[1]||(e[1]=c=>o.password=c),type:i.value?"text":"password",required:"",autocomplete:"current-password",placeholder:"••••••••",class:"input-field pl-9 pr-10"},null,8,J),[[L,o.password]]),t("button",{type:"button",onClick:e[2]||(e[2]=c=>i.value=!i.value),class:"absolute right-3 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-500"},[i.value?(n(),d(s(C),{key:0,class:"w-4 h-4"})):(n(),d(s(N),{key:1,class:"w-4 h-4"}))])])]),s(p).loginError?(n(),y("p",W,x(s(p).loginError),1)):I("",!0),t("button",{type:"submit",disabled:r.value,class:"btn-primary w-full flex items-center justify-center gap-2 mt-2"},[r.value?(n(),d(s(B),{key:0,class:"w-4 h-4 animate-spin"})):(n(),d(s(q),{key:1,class:"w-4 h-4"})),v(" "+x(r.value?"Masuk...":"Masuk"),1)],8,F)],32)]),t("div",G,[a(s(V),{to:"/",class:"font-sans text-xs text-sage-500 hover:text-sage-700 transition-colors inline-flex items-center gap-1"},{default:E(()=>[a(s(z),{class:"w-3 h-3"}),e[7]||(e[7]=v(" Kembali ke Undangan ",-1))]),_:1})])])]))}};export{ee as default};
