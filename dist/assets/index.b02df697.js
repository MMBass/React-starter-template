var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(r,n)=>{var s={};for(var o in r)S.call(r,o)&&n.indexOf(o)<0&&(s[o]=r[o]);if(r!=null&&p)for(var o of p(r))n.indexOf(o)<0&&v.call(r,o)&&(s[o]=r[o]);return s};import{c as w,r as l,j as e,M as L,L as B,N as f,a as i,b as N,d as A,e as C,A as D,s as d,f as M,C as T,T as k,B as h,I as H,g as I,h as O,i as P,D as R,H as j,k as E,R as G,l as y,m as W,n as q}from"./vendor.49ff0c10.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};z();const g=w({palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}});function K(){const[r,n]=l.exports.useState(g.palette.primary.main);return e("div",{className:"wrapper",children:e(L,{children:e("meta",{name:"theme-color",content:r})})})}const _=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function $(){return e(B,{children:_.map((r,n)=>e(f,{to:r.url,children:i(N,{button:!0,children:[e(A,{primary:r.name}),e(C,{children:e(D,{})})]},r.name)},r.name))})}const J=d($)`
  
`,Q=[{name:"Home",url:"/"},{name:"About",url:"/about"}],U=s=>{var o=s,{className:r}=o,n=u(o,["className"]);return e(M,{position:"static",className:r,children:e(T,{maxWidth:"xl",children:i(k,{disableGutters:!0,children:[e(h,{sx:{display:{xs:"flex",md:"none"}},children:e(H,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{n.toggleDrawer("left",!0,J)},color:"inherit",children:e(I,{})})}),e(O,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),e(h,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:Q.map(a=>e(f,{to:a.url,children:e(P,{sx:{my:2,color:"black"},children:a.name})},a.name))})]})})})},V=d(U)`
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
`;function Z(s){var o=s,{className:r}=o,n=u(o,["className"]);const[t,a]=l.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(R,{className:r,anchor:t.anchor,open:t.open,variant:t.permanent,onClose:()=>{n.toggleDrawer(t.anchor,!1)},children:e(h,{className:"drawer-layout",sx:{width:t.anchor==="top"||t.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{n.toggleDrawer(t.anchor,!1)},children:n.children})})}const ee=d(Z)`
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
`;function te(){return e("div",{className:"home-page"})}function re(){return e("div",{className:""})}function oe({className:r}){const[n,s]=l.exports.useState(!1),[o,t]=l.exports.useState("left"),[a,c]=l.exports.useState(null);l.exports.useEffect(()=>{},[]);const m=(x,F,b)=>{s(F),t(x),c(b||null)};return e("div",{className:r,children:i(j,{children:[e(K,{}),i(E,{theme:g,children:[e(V,{className:"header",toggleDrawer:m}),n&&a&&e(ee,{className:"side-bar",toggleDrawer:m,anchor:o,children:e(a,{})}),e(Y,{children:i(G,{children:[e(y,{path:"/",element:e(te,{})}),e(y,{path:"/about",element:e(re,{})})]})})]})]})})}const ae=d(oe)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  a {
    text-decoration: none;
  }
`;W.render(e(q.StrictMode,{children:e(ae,{className:"app"})}),document.getElementById("root"));
