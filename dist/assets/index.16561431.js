var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(t,n)=>{var s={};for(var o in t)v.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&p)for(var o of p(t))n.indexOf(o)<0&&F.call(t,o)&&(s[o]=t[o]);return s};import{c as B,r as i,j as e,M as L,L as C,N as f,a as c,b as A,d as N,e as D,A as k,n as I,f as M,C as T,T as P,g as y,B as h,I as H,h as O,i as R,s as d,D as E,k as j,l as G,R as W,m as x,o as q,p as z}from"./vendor.f6e9984e.js";const K=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};K();const g=B({palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}});function _(){const[t,n]=i.exports.useState(g.palette.primary.main);return e("div",{className:"wrapper",children:e(L,{children:e("meta",{name:"theme-color",content:t})})})}const $=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function J(){return e(C,{children:$.map((t,n)=>e(f,{to:t.url,children:c(A,{button:!0,children:[e(N,{primary:t.name}),e(D,{children:e(k,{})})]},t.name)},t.name))})}const Q=I(J)`
  
`,U=[{name:"Home",url:"/"},{name:"About",url:"/about"}],V=s=>{var o=s,{className:t}=o,n=u(o,["className"]);const r=()=>{n.toggleDrawer("left",!0,Q)},a=()=>{n.toggleDrawer("left",!1)};return e(M,{position:"static",className:t,children:e(T,{maxWidth:"xl",children:c(P,{disableGutters:!0,children:[e(y,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"BassSites"}),e(h,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:e(H,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:r,color:"inherit",children:e(O,{})})}),e(y,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"BassSites"}),e(h,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:U.map(l=>e(f,{to:l.url,children:e(R,{onClick:a,sx:{my:2,color:"black",display:"block"},children:l.name})},l.name))})]})})})},X=d(V)`
  background-color: #2D4260;
  color: #F4F5F7;
`;function Y(t){return e("div",{className:"pageLayout",children:t.children})}const Z=d(Y)`
  height: 100%;
`;function ee(s){var o=s,{className:t}=o,n=u(o,["className"]);const[r,a]=i.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(E,{className:t,anchor:r.anchor,open:r.open,variant:r.permanent,onClose:()=>{n.toggleDrawer(r.anchor,!1)},children:e(h,{className:"drawer-layout",sx:{width:r.anchor==="top"||r.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{n.toggleDrawer(r.anchor,!1)},children:n.children})})}const re=d(ee)`
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
`;function te(){return e("div",{className:"home-page"})}function oe(){return e("div",{id:""})}function ne({className:t}){const[n,s]=i.exports.useState(!1),[o,r]=i.exports.useState("left"),[a,l]=i.exports.useState(null);i.exports.useEffect(()=>{},[]);const m=(S,b,w)=>{s(b),r(S),l(w||null)};return e("div",{className:t,children:c(j,{children:[e(_,{}),c(G,{theme:g,children:[e(X,{className:"header",toggleDrawer:m}),n&&a&&e(re,{className:"side-bar",toggleDrawer:m,anchor:o,children:e(a,{})}),e(Z,{children:c(W,{children:[e(x,{path:"/",element:e(te,{})}),e(x,{path:"/about",element:e(oe,{})})]})})]})]})})}const ae=d(ne)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  a {
    text-decoration: none;
  }
`;q.render(e(z.StrictMode,{children:e(ae,{className:"app"})}),document.getElementById("root"));
