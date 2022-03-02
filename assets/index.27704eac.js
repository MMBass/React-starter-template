var D=Object.defineProperty;var p=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var P=(e,r,n)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,h=(e,r)=>{for(var n in r||(r={}))B.call(r,n)&&P(e,n,r[n]);if(p)for(var n of p(r))L.call(r,n)&&P(e,n,r[n]);return e};var u=(e,r)=>{var n={};for(var o in e)B.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&p)for(var o of p(e))r.indexOf(o)<0&&L.call(e,o)&&(n[o]=e[o]);return n};import{R as C,r as l,j as t,c as H,M as F,L as f,N,a as s,b as x,d as y,e as R,A as T,s as i,B as S,f as O,g as I,C as E,T as z,I as G,h as j,i as m,G as g,k as b,l as M,m as W,H as q,n as _,o as w,F as K,p as J,q as Q}from"./vendor.c5dbdee1.js";const U=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}};U();const v=C.createContext(void 0);function V(e){const[r,n]=l.exports.useState({}),a={toggleDrawer:(c,d,k="temporary",$)=>{n({open:c,anchor:d,permanent:k,child:$})}};return t(v.Provider,{value:h(h({},r),a),children:e.children})}const A=H({palette:{primary:{main:"#0092AB",light:"#00AECC",dark:"#2D4260"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function X(){const[e,r]=l.exports.useState(A.palette.primary.light);return t("div",{className:"wrapper",children:t(F,{children:t("meta",{name:"theme-color",content:e})})})}const Y=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function Z(){return t(f,{children:Y.map((e,r)=>t(N,{to:e.url,children:s(x,{button:!0,children:[t(y,{primary:e.name}),t(R,{children:t(T,{})})]},e.name)},r))})}const ee=i(Z)`
  
`;function te({className:e}){return t(S,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(n=>t(N,{to:n.url,children:t(O,{sx:{my:2},children:n.name})},n.name))})}const re=i(te)`
  
`,ne=n=>{var o=n,{className:e}=o,r=u(o,["className"]);const a=l.exports.useContext(v);return t(I,{position:"static",className:e,children:t(E,{maxWidth:"xl",children:s(z,{disableGutters:!0,children:[t(S,{sx:{display:{xs:"flex",md:"none"}},children:t(G,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.toggleDrawer(!0,"left","temporary",ee)},color:"inherit",children:t(j,{})})}),t(m,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),t(re,{className:"nav-bar"})]})})})},ae=i(ne)`
  background-color: ${e=>e.theme.palette.primary.dark};
  color: ${e=>e.theme.palette.secondary.main};

  button{
    color: ${e=>e.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-left: 0;
  }
`;function oe(n){var o=n,{className:e}=o,r=u(o,["className"]);return t("div",{className:e,children:r.children})}const ce=i(oe)`
  height: 100vh;
  background-color: ${e=>e.theme.palette.primary.light};
`,ie=[{name:"Home",url:"/"},{name:"About",url:"/about"}],se=[{name:"Github",url:"https://github.com/MMBass"}],le=[{name:"example@gmail.com",url:"mailto:example@gmail.com"}];function de({className:e}){return t("div",{id:"FOOTER",className:e,children:s(g,{container:!0,rowSpacing:6,columnSpacing:2,children:[t(g,{item:!0,xs:12,sm:4,children:s(f,{children:[t(b,{variant:"h5",component:"h5",children:"Pages"}),ie.map((r,n)=>t(N,{to:r.url,children:t(x,{children:t(y,{primary:r.name})},n)},n))]})}),t(g,{item:!0,xs:12,sm:4,children:s(f,{children:[t(b,{variant:"h5",component:"h5",children:"Social"}),se.map((r,n)=>t(M,{href:r.url,children:t(x,{children:t(y,{primary:r.name})},n)},n))]})}),t(g,{item:!0,xs:12,sm:4,children:s(f,{children:[t(b,{variant:"h5",component:"h5",children:"Stay Connected"}),le.map((r,n)=>t(M,{href:r.url,children:t(x,{children:t(y,{primary:r.name})},n)},n))]})})]})})}const he=i(de)`
  color: ${e=>e.theme.palette.secondary.dark};
  background-color: ${e=>e.theme.palette.secondary.light};
 
  padding: 25px 30px 30px 25px;
  
  li span{
    color: ${e=>e.theme.palette.secondary.dark};
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: #303030;
    margin: unset;
  }

`;function me(n){var o=n,{className:e}=o,r=u(o,["className"]);const a=l.exports.useContext(v);return t(W,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.toggleDrawer(!1)},children:t(S,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.toggleDrawer(!1)},children:t(a.child,{})})})}const pe=i(me)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${e=>e.theme.palette.primary.main};
    color: ${e=>e.theme.palette.secondary.main};
  }

  svg{
    color: ${e=>e.theme.palette.secondary.main};
  }

  a{
    color: ${e=>e.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function ue({className:e}){return t("div",{className:e,children:t(m,{variant:"h2",className:"page-h2",children:"Home Page"})})}const ge=i(ue)`

`;function fe({className:e}){return t("div",{className:e,children:t(m,{variant:"h2",className:"page-h2",children:"About Page"})})}const xe=i(fe)`

`;function ye({className:e}){return s("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(m,{variant:"h2",className:"page-h2",children:"404"}),t(m,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const ve=i(ye)`

`;function be({className:e}){const r=l.exports.useContext(v);return l.exports.useEffect(()=>{},[]),t("div",{className:e,children:s(q,{children:[t(X,{}),t(ae,{className:"header"}),t(ce,{children:s(_,{children:[t(w,{path:"/",element:t(ge,{className:"page"})}),t(w,{path:"/about",element:t(xe,{className:"page"})}),t(w,{path:"*",element:t(ve,{className:"page"})})]})}),r.open&&r.child&&t(pe,{className:"drawer"}),t(he,{})]})})}const we=i(be)`
  height: 100vh;
  color: ${e=>e.theme.palette.secondary.main};

  .page-h2{
    padding: 80px 0px 0px 35px;
    font-size: 40px;
    font-weight: 300;
    color: ${e=>e.theme.palette.secondary.main};
  }

  .page-h3{
    margin: 15px 0px 0px 35px;
    font-size: 35px;
    font-weight: 300;
    color: ${e=>e.theme.palette.secondary.main};
  }


  a {
    text-decoration: none;
  }
`,Ce=C.createContext(void 0);function Ne(e){const[r,n]=l.exports.useState({}),a={handleSet:()=>{n()}};return t(Ce.Provider,{value:h(h({},r),a),children:e.children})}const Se=[Ne,V];function Pe(e){return t(K,{children:Se.reduceRight((r,n)=>t(n,{children:r}),e.children)})}J.render(t(C.StrictMode,{children:t(Pe,{children:t(Q,{theme:A,children:t(we,{className:"app"})})})}),document.getElementById("root"));
