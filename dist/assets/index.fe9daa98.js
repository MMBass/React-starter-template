var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(r,n)=>{var s={};for(var o in r)v.call(r,o)&&n.indexOf(o)<0&&(s[o]=r[o]);if(r!=null&&p)for(var o of p(r))n.indexOf(o)<0&&w.call(r,o)&&(s[o]=r[o]);return s};import{c as B,r as l,j as e,M as L,L as N,N as f,a as i,b as A,d as C,e as D,A as M,s as d,f as T,C as k,T as I,B as m,I as R,g as O,h as P,i as H,D as j,k as E,l as G,R as W,m as y,n as q,o as z}from"./vendor.8d72344c.js";const K=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};K();const g=B({palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}});function U(){const[r,n]=l.exports.useState(g.palette.primary.main);return e("div",{className:"wrapper",children:e(L,{children:e("meta",{name:"theme-color",content:r})})})}const _=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function $(){return e(N,{children:_.map((r,n)=>e(f,{to:r.url,children:i(A,{button:!0,children:[e(C,{primary:r.name}),e(D,{children:e(M,{})})]},r.name)},r.name))})}const J=d($)`
  
`,x="React-starter-template",Q=[{name:"Home",url:x+"/"},{name:"About",url:x+"/about"}],V=s=>{var o=s,{className:r}=o,n=u(o,["className"]);return e(T,{position:"static",className:r,children:e(k,{maxWidth:"xl",children:i(I,{disableGutters:!0,children:[e(m,{sx:{display:{xs:"flex",md:"none"}},children:e(R,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{n.toggleDrawer("left",!0,J)},color:"inherit",children:e(O,{})})}),e(P,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),e(m,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:Q.map(a=>e(f,{to:a.url,children:e(H,{sx:{my:2,color:"black"},children:a.name})},a.name))})]})})})},X=d(V)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }

  .MuiBox-root{
    justify-content: flex-end;
  }
`;function Y(r){return e("div",{className:"pageLayout",children:r.children})}const Z=d(Y)`
  height: 100%;
`;function ee(s){var o=s,{className:r}=o,n=u(o,["className"]);const[t,a]=l.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(j,{className:r,anchor:t.anchor,open:t.open,variant:t.permanent,onClose:()=>{n.toggleDrawer(t.anchor,!1)},children:e(m,{className:"drawer-layout",sx:{width:t.anchor==="top"||t.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{n.toggleDrawer(t.anchor,!1)},children:n.children})})}const te=d(ee)`
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
`;function re(){return e("div",{className:"home-page"})}function oe(){return e("div",{className:""})}function ae({className:r}){const[n,s]=l.exports.useState(!1),[o,t]=l.exports.useState("left"),[a,c]=l.exports.useState(null);l.exports.useEffect(()=>{},[]);const h=(b,F,S)=>{s(F),t(b),c(S||null)};return e("div",{className:r,children:i(E,{children:[e(U,{}),i(G,{theme:g,children:[e(X,{className:"header",toggleDrawer:h}),n&&a&&e(te,{className:"side-bar",toggleDrawer:h,anchor:o,children:e(a,{})}),e(Z,{children:i(W,{children:[e(y,{path:"/",element:e(re,{})}),e(y,{path:"/about",element:e(oe,{})})]})})]})]})})}const ne=d(ae)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  a {
    text-decoration: none;
  }
`;q.render(e(z.StrictMode,{children:e(ne,{className:"app"})}),document.getElementById("root"));
