var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var u=(r,n)=>{var s={};for(var a in r)w.call(r,a)&&n.indexOf(a)<0&&(s[a]=r[a]);if(r!=null&&f)for(var a of f(r))n.indexOf(a)<0&&B.call(r,a)&&(s[a]=r[a]);return s};import{c as L,r as l,j as e,M as N,L as A,N as y,a as i,b as C,d as D,e as M,A as R,s as d,f as T,C as k,T as I,B as m,I as O,g as P,h as H,i as j,D as E,k as G,l as U,R as W,m as g,n as q,o as z}from"./vendor.8d72344c.js";const K=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};K();const x=L({palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}});function _(){const[r,n]=l.exports.useState(x.palette.primary.main);return e("div",{className:"wrapper",children:e(N,{children:e("meta",{name:"theme-color",content:r})})})}const $=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function J(){return e(A,{children:$.map((r,n)=>e(y,{to:r.url,children:i(C,{button:!0,children:[e(D,{primary:r.name}),e(M,{children:e(R,{})})]},r.name)},r.name))})}const Q=d(J)`
  
`,b="React-starter-template",V=[{name:"Home",url:b+"/"},{name:"About",url:b+"/about"}],X=s=>{var a=s,{className:r}=a,n=u(a,["className"]);return e(T,{position:"static",className:r,children:e(k,{maxWidth:"xl",children:i(I,{disableGutters:!0,children:[e(m,{sx:{display:{xs:"flex",md:"none"}},children:e(O,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{n.toggleDrawer("left",!0,Q)},color:"inherit",children:e(P,{})})}),e(H,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),e(m,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:V.map(o=>e(y,{to:o.url,children:e(j,{sx:{my:2,color:"black"},children:o.name})},o.name))})]})})})},Y=d(X)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }

  .MuiBox-root{
    justify-content: flex-end;
  }
`;function Z(r){return e("div",{className:"pageLayout",children:r.children})}const ee=d(Z)`
  height: 100%;
`;function te(s){var a=s,{className:r}=a,n=u(a,["className"]);const[t,o]=l.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(E,{className:r,anchor:t.anchor,open:t.open,variant:t.permanent,onClose:()=>{n.toggleDrawer(t.anchor,!1)},children:e(m,{className:"drawer-layout",sx:{width:t.anchor==="top"||t.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{n.toggleDrawer(t.anchor,!1)},children:n.children})})}const re=d(te)`
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
`;function ae(){return e("div",{className:"home-page"})}function oe(){return e("div",{className:""})}function ne({className:r}){const[n,s]=l.exports.useState(!1),[a,t]=l.exports.useState("left"),[o,c]=l.exports.useState(null),h="React-starter-template";l.exports.useEffect(()=>{},[]);const p=(F,S,v)=>{s(S),t(F),c(v||null)};return e("div",{className:r,children:i(G,{children:[e(_,{}),i(U,{theme:x,children:[e(Y,{className:"header",toggleDrawer:p}),n&&o&&e(re,{className:"side-bar",toggleDrawer:p,anchor:a,children:e(o,{})}),e(ee,{children:i(W,{children:[e(g,{path:h+"/",element:e(ae,{})}),e(g,{path:h+"/about",element:e(oe,{})})]})})]})]})})}const se=d(ne)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  a {
    text-decoration: none;
  }
`;q.render(e(z.StrictMode,{children:e(se,{className:"app"})}),document.getElementById("root"));
