var h=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var m=(t,r)=>{var i={};for(var a in t)b.call(t,a)&&r.indexOf(a)<0&&(i[a]=t[a]);if(t!=null&&h)for(var a of h(t))r.indexOf(a)<0&&B.call(t,a)&&(i[a]=t[a]);return i};import{c as v,j as e,L as w,a as c,b as L,d as C,e as N,A,n as d,f as k,C as D,T as I,g as f,B as u,I as T,h as M,N as P,i as H,s as O,r as l,M as R,D as j,k as G,l as E,R as W,m as p,o as F,p as q}from"./vendor.6fef0460.js";const z=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}};z();const g=v({palette:{primary:{main:"#0052cc"},secondary:{main:"#edf2ff"}}}),K=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function _(){return e(w,{children:K.map((t,r)=>c(L,{button:!0,children:[e(C,{primary:t.name}),e(N,{children:e(A,{})})]},t.name))})}const $=d(_)`
  *{

  }
`,J=[{name:"Home",url:"/"},{name:"About",url:"/about"}],Q=i=>{var a=i,{className:t}=a,r=m(a,["className"]);const n=()=>{r.toggleDrawer("left",!0,$)},o=()=>{r.toggleDrawer("left",!1)};return e(k,{position:"static",className:t,children:e(D,{maxWidth:"xl",children:c(I,{disableGutters:!0,children:[e(f,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"BassSites"}),e(u,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:e(T,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:n,color:"inherit",children:e(M,{})})}),e(f,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"BassSites"}),e(u,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:J.map(s=>e(P,{to:s.url,children:e(H,{onClick:o,sx:{my:2,color:"black",display:"block"},children:s.name})},s.name))})]})})})},U=O(Q)`
  background-color: #fff;
  color: #757575;

  a {
    text-decoration: none;
  }
`;function V(){const[t,r]=l.exports.useState(g.palette.primary.main);return e("div",{className:"wrapper",children:e(R,{children:e("meta",{name:"theme-color",content:t})})})}function X(t){return e("div",{className:"pageLayout",children:t.children})}const Y=d(X)`
  backgroundColor: lightgray;
  height: 100vh;
`;function Z(t){const[r,i]=l.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(j,{anchor:r.anchor,open:r.open,variant:r.permanent,onClose:()=>{t.toggleDrawer(r.anchor,!1)},children:e(u,{sx:{width:r.anchor==="top"||r.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{t.toggleDrawer(r.anchor,!1)},children:t.children})})}const ee=d(Z)`
  *{
    
  }
`;function te(){return e("div",{className:"home-page"})}function re(){return e("div",{id:""})}function ne(){const[t,r]=l.exports.useState(!1),[i,a]=l.exports.useState("left"),[n,o]=l.exports.useState(null);l.exports.useEffect(()=>{},[]);const s=(y,x,S)=>{r(x),a(y),o(S||null)};return c(G,{children:[e(V,{}),c(E,{theme:g,children:[e(U,{className:"header",toggleDrawer:s}),t&&n&&e(ee,{className:"side-bar",toggleDrawer:s,anchor:i,children:e(n,{})}),e(Y,{children:c(W,{children:[e(p,{path:"/",element:e(te,{})}),e(p,{path:"/about",element:e(re,{})})]})})]})]})}F.render(e(q.StrictMode,{children:e(ne,{})}),document.getElementById("root"));