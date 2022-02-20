var f=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var u=(t,n)=>{var s={};for(var a in t)F.call(t,a)&&n.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&f)for(var a of f(t))n.indexOf(a)<0&&N.call(t,a)&&(s[a]=t[a]);return s};import{c as v,r as i,j as e,M as B,L as w,N as g,a as l,b as A,d as L,e as C,A as M,s as c,B as h,f as D,g as P,C as H,T,I as R,h as k,i as I,D as O,H as E,k as j,R as W,l as m,m as _,n as z}from"./vendor.8a65c1c2.js";const G=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};G();const x=v({palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}});function q(){const[t,n]=i.exports.useState(x.palette.primary.main);return e("div",{className:"wrapper",children:e(B,{children:e("meta",{name:"theme-color",content:t})})})}const K=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function J(){return e(w,{children:K.map((t,n)=>e(g,{to:t.url,children:l(A,{button:!0,children:[e(L,{primary:t.name}),e(C,{children:e(M,{})})]},t.name)},t.name))})}const Q=c(J)`
  
`;function U({className:t}){return e(h,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(s=>e(g,{to:s.url,children:e(D,{sx:{my:2,color:"black"},children:s.name})},s.name))})}const V=c(U)`
  
`,X=s=>{var a=s,{className:t}=a,n=u(a,["className"]);return e(P,{position:"static",className:t,children:e(H,{maxWidth:"xl",children:l(T,{disableGutters:!0,children:[e(h,{sx:{display:{xs:"flex",md:"none"}},children:e(R,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{n.toggleDrawer("left",!0,Q)},color:"inherit",children:e(k,{})})}),e(I,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),e(V,{className:"nav-bar"})]})})})},Y=c(X)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }

  .MuiBox-root{
    justify-content: flex-end;
  }
`;function Z(t){return e("div",{className:"pageLayout",children:t.children})}const $=c(Z)`
  height: 100%;
`;function ee(s){var a=s,{className:t}=a,n=u(a,["className"]);const[r,o]=i.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(O,{className:t,anchor:r.anchor,open:r.open,variant:r.permanent,onClose:()=>{n.toggleDrawer(r.anchor,!1)},children:e(h,{className:"drawer-layout",sx:{width:r.anchor==="top"||r.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{n.toggleDrawer(r.anchor,!1)},children:n.children})})}const te=c(ee)`
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
`;function re(){return e("div",{className:"home-page"})}function ae(){return e("div",{className:""})}function ne({className:t}){return l("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e("p",{children:"404"}),e("p",{children:"Nothing Here"})]})}const oe=c(ne)`
       margin: 100px 0px 0px 30px;
       font-size: 40px;
`;function se({className:t}){const[n,s]=i.exports.useState(!1),[a,r]=i.exports.useState("left"),[o,d]=i.exports.useState(null);i.exports.useEffect(()=>{},[]);const p=(y,S,b)=>{s(S),r(y),d(b||null)};return e("div",{className:t,children:l(E,{children:[e(q,{}),l(j,{theme:x,children:[e(Y,{className:"header",toggleDrawer:p}),n&&o&&e(te,{className:"side-bar",toggleDrawer:p,anchor:a,children:e(o,{})}),e($,{children:l(W,{children:[e(m,{path:"/",element:e(re,{})}),e(m,{path:"/about",element:e(ae,{})}),e(m,{path:"*",element:e(oe,{className:"no-match-page"})})]})})]})]})})}const ce=c(se)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  a {
    text-decoration: none;
  }
`;_.render(e(z.StrictMode,{children:e(ce,{className:"app"})}),document.getElementById("root"));
