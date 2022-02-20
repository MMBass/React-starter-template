var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(r,a)=>{var s={};for(var n in r)S.call(r,n)&&a.indexOf(n)<0&&(s[n]=r[n]);if(r!=null&&f)for(var n of f(r))a.indexOf(n)<0&&v.call(r,n)&&(s[n]=r[n]);return s};import{c as N,r as i,j as e,M as w,L as A,N as g,a as c,b as L,d as B,e as C,A as D,s as d,f as M,C as H,T as P,B as h,I as T,g as R,h as k,i as I,D as O,H as E,k as j,R as W,l as m,m as _,n as G}from"./vendor.49ff0c10.js";const q=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};q();const y=N({palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}});function z(){const[r,a]=i.exports.useState(y.palette.primary.main);return e("div",{className:"wrapper",children:e(w,{children:e("meta",{name:"theme-color",content:r})})})}const K=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function $(){return e(A,{children:K.map((r,a)=>e(g,{to:r.url,children:c(L,{button:!0,children:[e(B,{primary:r.name}),e(C,{children:e(D,{})})]},r.name)},r.name))})}const J=d($)`
  
`,Q=[{name:"Home",url:"/"},{name:"About",url:"/about"}],U=s=>{var n=s,{className:r}=n,a=u(n,["className"]);return e(M,{position:"static",className:r,children:e(H,{maxWidth:"xl",children:c(P,{disableGutters:!0,children:[e(h,{sx:{display:{xs:"flex",md:"none"}},children:e(T,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.toggleDrawer("left",!0,J)},color:"inherit",children:e(R,{})})}),e(k,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),e(h,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:Q.map(o=>e(g,{to:o.url,children:e(I,{sx:{my:2,color:"black"},children:o.name})},o.name))})]})})})},V=d(U)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }

  .MuiBox-root{
    justify-content: flex-end;
  }
`;function X(r){return e("div",{className:"pageLayout",children:r.children})}const Y=d(X)`
  height: 100%;
`;function Z(s){var n=s,{className:r}=n,a=u(n,["className"]);const[t,o]=i.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(O,{className:r,anchor:t.anchor,open:t.open,variant:t.permanent,onClose:()=>{a.toggleDrawer(t.anchor,!1)},children:e(h,{className:"drawer-layout",sx:{width:t.anchor==="top"||t.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.toggleDrawer(t.anchor,!1)},children:a.children})})}const ee=d(Z)`
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
`;function te(){return e("div",{className:"home-page"})}function re(){return e("div",{className:""})}function ne(){return c("div",{id:"NO_MATCH_WRAPPER",children:[e("p",{children:"404"}),e("p",{children:"Nothing Here"})]})}function oe({className:r}){const[a,s]=i.exports.useState(!1),[n,t]=i.exports.useState("left"),[o,l]=i.exports.useState(null);i.exports.useEffect(()=>{},[]);const p=(x,F,b)=>{s(F),t(x),l(b||null)};return e("div",{className:r,children:c(E,{children:[e(z,{}),c(j,{theme:y,children:[e(V,{className:"header",toggleDrawer:p}),a&&o&&e(ee,{className:"side-bar",toggleDrawer:p,anchor:n,children:e(o,{})}),e(Y,{children:c(W,{children:[e(m,{path:"/",element:e(te,{})}),e(m,{path:"/about",element:e(re,{})}),e(m,{path:"*",element:e(ne,{})})]})})]})]})})}const ae=d(oe)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  a {
    text-decoration: none;
  }
`;_.render(e(G.StrictMode,{children:e(ae,{className:"app"})}),document.getElementById("root"));
