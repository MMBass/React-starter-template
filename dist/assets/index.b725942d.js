var g=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(t,n)=>{var s={};for(var a in t)v.call(t,a)&&n.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&g)for(var a of g(t))n.indexOf(a)<0&&F.call(t,a)&&(s[a]=t[a]);return s};import{c as A,r as l,j as e,M as w,L as B,N as y,a as c,b as L,d as C,e as P,A as H,s as i,B as m,f as M,g as D,C as I,T as R,I as T,h as k,i as u,D as j,H as E,k as O,R as z,l as p,m as U,n as W}from"./vendor.8a65c1c2.js";const _=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};_();const x=A({typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},palette:{primary:{main:"#00AECC"},secondary:{main:"#edf2ff"},text:{}}});function G(){const[t,n]=l.exports.useState(x.palette.primary.main);return e("div",{className:"wrapper",children:e(w,{children:e("meta",{name:"theme-color",content:t})})})}const q=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function K(){return e(B,{children:q.map((t,n)=>e(y,{to:t.url,children:c(L,{button:!0,children:[e(C,{primary:t.name}),e(P,{children:e(H,{})})]},t.name)},t.name))})}const J=i(K)`
  
`;function Q({className:t}){return e(m,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(s=>e(y,{to:s.url,children:e(M,{sx:{my:2,color:"black"},children:s.name})},s.name))})}const V=i(Q)`
  
`,X=s=>{var a=s,{className:t}=a,n=h(a,["className"]);return e(D,{position:"static",className:t,children:e(I,{maxWidth:"xl",children:c(R,{disableGutters:!0,children:[e(m,{sx:{display:{xs:"flex",md:"none"}},children:e(T,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{n.toggleDrawer("left",!0,J)},color:"inherit",children:e(k,{})})}),e(u,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),e(V,{className:"nav-bar"})]})})})},Y=i(X)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }

  .MuiBox-root{
    justify-content: flex-end;
  }
`;function Z(t){return e("div",{className:"pageLayout",children:t.children})}const $=i(Z)`
  height: 100%;
`;function ee(s){var a=s,{className:t}=a,n=h(a,["className"]);const[r,o]=l.exports.useState({permanent:"temporary",open:!0,anchor:"left"});return e(j,{className:t,anchor:r.anchor,open:r.open,variant:r.permanent,onClose:()=>{n.toggleDrawer(r.anchor,!1)},children:e(m,{className:"drawer-layout",sx:{width:r.anchor==="top"||r.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{n.toggleDrawer(r.anchor,!1)},children:n.children})})}const te=i(ee)`
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
`;function re({className:t}){return e("div",{className:t,children:e(u,{variant:"h2",className:"page-h2",children:"Home Page"})})}const ae=i(re)`

`;function ne({className:t}){return e("div",{className:t,children:e(u,{variant:"h2",className:"page-h2",children:"About Page"})})}const oe=i(ne)`

`;function se({className:t}){return c("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(u,{variant:"h2",className:"page-h2",children:"404"}),e(u,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const ie=i(se)`

`;function le({className:t}){const[n,s]=l.exports.useState(!1),[a,r]=l.exports.useState("left"),[o,d]=l.exports.useState(null);l.exports.useEffect(()=>{},[]);const f=(S,N,b)=>{s(N),r(S),d(b||null)};return e("div",{className:t,children:c(E,{children:[e(G,{}),c(O,{theme:x,children:[e(Y,{className:"header",toggleDrawer:f}),n&&o&&e(te,{className:"side-bar",toggleDrawer:f,anchor:a,children:e(o,{})}),e($,{children:c(z,{children:[e(p,{path:"/",element:e(ae,{className:"page"})}),e(p,{path:"/about",element:e(oe,{className:"page"})}),e(p,{path:"*",element:e(ie,{className:"page"})})]})})]})]})})}const ce=i(le)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  .page-h2{
    margin: 80px 0px 0px 35px;
    font-size: 40px;
    font-weight: 300;
  }

  .page-h3{
    margin: 10px 0px 0px 35px;
    font-size: 35px;
    font-weight: 300;
  }


  a {
    text-decoration: none;
  }
`;U.render(e(W.StrictMode,{children:e(ce,{className:"app"})}),document.getElementById("root"));
