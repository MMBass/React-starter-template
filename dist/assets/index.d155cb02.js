var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(t,a)=>{var s={};for(var o in t)S.call(t,o)&&a.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&p)for(var o of p(t))a.indexOf(o)<0&&v.call(t,o)&&(s[o]=t[o]);return s};import{c as w,r as i,j as e,M as B,L,N as f,a as c,b as A,d as N,e as C,A as D,n as k,f as I,C as M,T,B as h,I as O,g as P,h as H,i as R,s as d,D as E,k as j,l as G,R as W,m as y,o as q,p as z}from"./vendor.e99b720b.js";const K=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}};K();const g=w({palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}});function _(){const[t,a]=i.exports.useState(g.palette.primary.main);return e("div",{className:"wrapper",children:e(B,{children:e("meta",{name:"theme-color",content:t})})})}const $=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function J(){return e(L,{children:$.map((t,a)=>e(f,{to:t.url,children:c(A,{button:!0,children:[e(N,{primary:t.name}),e(C,{children:e(D,{})})]},t.name)},t.name))})}const Q=k(J)`
  
`,U=[{name:"Home",url:"/"},{name:"About",url:"/about"}],V=s=>{var o=s,{className:t}=o,a=u(o,["className"]);return e(I,{position:"static",className:t,children:e(M,{maxWidth:"xl",children:c(T,{disableGutters:!0,children:[e(h,{sx:{display:{xs:"flex",md:"none"}},children:e(O,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.toggleDrawer("left",!0,Q)},color:"inherit",children:e(P,{})})}),e(H,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"BassSites"}),e(h,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:U.map(n=>e(f,{to:n.url,children:e(R,{sx:{my:2,color:"black"},children:n.name})},n.name))})]})})})},X=d(V)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }
`;function Y(t){return e("div",{className:"pageLayout",children:t.children})}const Z=d(Y)`
  height: 100%;
`;function ee(s){var o=s,{className:t}=o,a=u(o,["className"]);const[r,n]=i.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(E,{className:t,anchor:r.anchor,open:r.open,variant:r.permanent,onClose:()=>{a.toggleDrawer(r.anchor,!1)},children:e(h,{className:"drawer-layout",sx:{width:r.anchor==="top"||r.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.toggleDrawer(r.anchor,!1)},children:a.children})})}const re=d(ee)`
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
`;function te(){return e("div",{className:"home-page"})}function oe(){return e("div",{id:""})}function ne({className:t}){const[a,s]=i.exports.useState(!1),[o,r]=i.exports.useState("left"),[n,l]=i.exports.useState(null);i.exports.useEffect(()=>{},[]);const m=(x,b,F)=>{s(b),r(x),l(F||null)};return e("div",{className:t,children:c(j,{children:[e(_,{}),c(G,{theme:g,children:[e(X,{className:"header",toggleDrawer:m}),a&&n&&e(re,{className:"side-bar",toggleDrawer:m,anchor:o,children:e(n,{})}),e(Z,{children:c(W,{children:[e(y,{path:"/",element:e(te,{})}),e(y,{path:"/about",element:e(oe,{})})]})})]})]})})}const ae=d(ne)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  a {
    text-decoration: none;
  }
`;q.render(e(z.StrictMode,{children:e(ae,{className:"app"})}),document.getElementById("root"));
