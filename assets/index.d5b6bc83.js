var L=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(t,r,o)=>r in t?L(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,m=(t,r)=>{for(var o in r||(r={}))N.call(r,o)&&v(t,o,r[o]);if(h)for(var o of h(r))w.call(r,o)&&v(t,o,r[o]);return t};var f=(t,r)=>{var o={};for(var a in t)N.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&h)for(var a of h(t))r.indexOf(a)<0&&w.call(t,a)&&(o[a]=t[a]);return o};import{c as S,R as x,r as l,j as e,M as B,L as D,N as C,a as i,b as M,d as H,e as R,A as T,s as c,B as y,f as k,g as I,C as O,T as E,I as j,h as z,i as u,k as W,H as _,l as G,m as q,n as g,F as K,o as J}from"./vendor.a844e714.js";const Q=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};Q();const b=S({typography:{},palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}}),p=x.createContext(void 0);function U(t){const[r,o]=l.exports.useState({}),n={toggleDrawer:(s,d,P="temporary",A)=>{o({open:s,anchor:d,permanent:P,child:A})}};return e(p.Provider,{value:m(m({},r),n),children:t.children})}function V(){const[t,r]=l.exports.useState(b.palette.primary.main);return e("div",{className:"wrapper",children:e(B,{children:e("meta",{name:"theme-color",content:t})})})}const X=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function Y(){return e(D,{children:X.map((t,r)=>e(C,{to:t.url,children:i(M,{button:!0,children:[e(H,{primary:t.name}),e(R,{children:e(T,{})})]},t.name)},t.name))})}const Z=c(Y)`
  
`;function $({className:t}){return e(y,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(o=>e(C,{to:o.url,children:e(k,{sx:{my:2,color:"black"},children:o.name})},o.name))})}const ee=c($)`
  
`,te=o=>{var a=o,{className:t}=a,r=f(a,["className"]);const n=l.exports.useContext(p);return e(I,{position:"static",className:t,children:e(O,{maxWidth:"xl",children:i(E,{disableGutters:!0,children:[e(y,{sx:{display:{xs:"flex",md:"none"}},children:e(j,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{n.toggleDrawer(!0,"left","temporary",Z)},color:"inherit",children:e(z,{})})}),e(u,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),e(ee,{className:"nav-bar"})]})})})},re=c(te)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-left: 0;
  }
`;function ne(t){return e("div",{className:"pageLayout",children:t.children})}const oe=c(ne)`
  height: 100%;
`;function ae(o){var a=o,{className:t}=a,r=f(a,["className"]);const n=l.exports.useContext(p);return e(W,{className:t,anchor:n.anchor,open:n.open,variant:n.permanent,onClose:()=>{n.toggleDrawer(!1)},children:e(y,{className:"drawer-layout",sx:{width:n.anchor==="top"||n.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{n.toggleDrawer(!1)},children:e(n.child,{})})})}const se=c(ae)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background: #0092AB; 
    color: #F4F5F7;
  }

  svg{
    color: #F4F5F7;
  }

  a{
    color: #F4F5F7;
    text-decoration: none;
  }
`;function ce({className:t}){return e("div",{className:t,children:e(u,{variant:"h2",className:"page-h2",children:"Home Page"})})}const ie=c(ce)`

`;function le({className:t}){return e("div",{className:t,children:e(u,{variant:"h2",className:"page-h2",children:"About Page"})})}const de=c(le)`

`;function ue({className:t}){return i("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(u,{variant:"h2",className:"page-h2",children:"404"}),e(u,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const he=c(ue)`

`;function pe({className:t}){const r=l.exports.useContext(p);return l.exports.useEffect(()=>{},[]),e("div",{className:t,children:i(_,{children:[e(V,{}),i(G,{theme:b,children:[e(re,{className:"header"}),r.open&&r.child&&e(se,{className:"drawer"}),e(oe,{children:i(q,{children:[e(g,{path:"/",element:e(ie,{className:"page"})}),e(g,{path:"/about",element:e(de,{className:"page"})}),e(g,{path:"*",element:e(he,{className:"page"})})]})})]})]})})}const me=c(pe)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  .page-h2{
    margin: 80px 0px 0px 35px;
    font-size: 40px;
    font-weight: 300;
  }

  .page-h3{
    margin: 15px 0px 0px 35px;
    font-size: 35px;
    font-weight: 300;
  }


  a {
    text-decoration: none;
  }
`,F={display:!1,content:""},fe=x.createContext(F);function ge(t){return e(fe.Provider,{value:F,children:t.children})}const xe=[ge,U];function ye(t){return e(K,{children:xe.reduceRight((r,o)=>e(o,{children:r}),t.children)})}J.render(e(x.StrictMode,{children:e(ye,{children:e(me,{className:"app"})})}),document.getElementById("root"));
