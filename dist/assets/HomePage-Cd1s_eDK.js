import{_ as m,s as q,r as l,o as u,c as d,a as o,u as _,n as C,F as p,d as g,b as k,e as t,w as Q}from"./index-a4PBhHhk.js";import{u as x,Q as B}from"./QiaoCount-0bW_TesZ.js";const T={class:"qiaomo"},W=["src"],b={__name:"XiaoMo",setup(f){const n=x(),{QiaoWord:i,QiaoCounter:s,QiaoSkin:c}=q(n),r=l(),a=l(!1);let v=()=>{const e=document.createElement("div");e.innerHTML=i.value,r.value.appendChild(e),setTimeout(()=>{e.className="qiaoWordDis",setTimeout(()=>{e.remove()},300)},500)};function h(){v(),a.value=!0,s.value++,setTimeout(()=>{a.value=!1},400)}return(e,R)=>(u(),d(p,null,[o("div",T,[o("img",{src:"https://gcore.jsdelivr.net/gh/wemsx/qiaomo@master/dist/icons/skin"+_(c)+".svg",onClick:h,class:C({qiaoClass:a.value,adjusted:_(c)!==0})},null,10,W)]),o("div",{class:"qiaomoWord",ref_key:"qiaomoRef",ref:r},null,512)],64))}},w=m(b,[["__scopeId","data-v-ca93b5c3"]]),E={class:"header"},H={class:"main"},N=g({__name:"HomePage",setup(f){return(n,i)=>{const s=k("router-link");return u(),d(p,null,[o("div",E,[t(s,{to:"/settings"},{default:Q(()=>[t(B)]),_:1})]),o("div",H,[t(w)])],64)}}}),j=m(N,[["__scopeId","data-v-6e6b1b84"]]);export{j as default};