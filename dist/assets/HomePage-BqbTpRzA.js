import{_ as l,s as v,r as c,o as _,c as m,a as o,n as h,F as u,d as g,b as q,e as t,w as C}from"./index-rZ5X26X-.js";import{u as k,Q as x}from"./QiaoCount-CmnQ7fgN.js";const Q={class:"qiaomo"},B={__name:"XiaoMo",setup(d){const n=k(),{QiaoWord:i,QiaoCounter:a}=v(n),r=c(),s=c(!1);let p=()=>{const e=document.createElement("div");e.innerHTML=i.value,r.value.appendChild(e),setTimeout(()=>{e.className="qiaoWordDis",setTimeout(()=>{e.remove()},300)},500)};function f(){p(),s.value=!0,a.value++,setTimeout(()=>{s.value=!1},400)}return(e,E)=>(_(),m(u,null,[o("div",Q,[o("img",{src:"https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg",onClick:f,class:h({qiaoClass:s.value})},null,2)]),o("div",{class:"qiaomoWord",ref_key:"qiaomoRef",ref:r},null,512)],64))}},T=l(B,[["__scopeId","data-v-3a80a599"]]),W={class:"header"},b={class:"main"},w=g({__name:"HomePage",setup(d){return(n,i)=>{const a=q("router-link");return _(),m(u,null,[o("div",W,[t(a,{to:"/settings"},{default:C(()=>[t(x)]),_:1})]),o("div",b,[t(T)])],64)}}}),R=l(w,[["__scopeId","data-v-6e6b1b84"]]);export{R as default};