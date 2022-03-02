var O=Object.defineProperty,I=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var P=(e,r,n)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,l=(e,r)=>{for(var n in r||(r={}))k.call(r,n)&&P(e,n,r[n]);if(g)for(var n of g(r))D.call(r,n)&&P(e,n,r[n]);return e},h=(e,r)=>I(e,E(r));var f=(e,r)=>{var n={};for(var o in e)k.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&g)for(var o of g(e))r.indexOf(o)<0&&D.call(e,o)&&(n[o]=e[o]);return n};import{R as C,r as c,j as t,c as z,M as G,L as y,N as L,a as d,b as v,d as b,e as j,A as W,s as p,B,f as T,g as q,C as _,T as K,I as V,h as J,i as m,G as x,k as S,l as A,m as Q,D as U,n as X,o as Y,p as Z,q as ee,H as te,t as M,u as re,v as ne,w as N,x as oe,y as ae,S as ie,F as se,z as le,E as ce}from"./vendor.1783829d.js";const de=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};de();const w=C.createContext(void 0);function pe(e){const[r,n]=c.exports.useState({}),a={toggleDrawer:(s,i,u="temporary",F)=>{n({open:s,anchor:i,permanent:u,child:F})}};return t(w.Provider,{value:l(l({},r),a),children:e.children})}const $=C.createContext(void 0);function he(e){const[r,n]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),s={createLoader:(i,u)=>{r.name&&n(h(l({},r),{[i]:void 0})),n(h(l({},r),{[i]:{open:!1,color:u||"primary"}}))},toggleLoader:i=>{r.name?n(h(l({},r),{[i]:h(l({},r.name),{open:!r.name.open})})):console.error("Loader does'nt exist. Name: "+i)}};return t($.Provider,{value:l(l({},r),s),children:e.children})}const H=C.createContext(void 0);function ue(e){const[r,n]=c.exports.useState({main:{open:!0,severity:"warning"},snackbar:{open:!0,severity:"success"}}),s={createBanner:(i,u)=>{r[i]&&n(h(l({},r),{[i]:void 0})),n(h(l({},r),{[i]:{open:!1,color:u||"primary"}}))},toggleBanner:i=>{r[i]?n(h(l({},r),{[i]:h(l({},r[i]),{open:!r[i].open})})):console.error("Banner does'nt exist. Name: "+i)}};return t(H.Provider,{value:l(l({},r),s),children:e.children})}const R=z({palette:{primary:{main:"#0092AB",light:"#00AECC",dark:"#2D4260"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function me(){const[e,r]=c.exports.useState(R.palette.primary.light);return t("div",{className:"wrapper",children:t(G,{children:t("meta",{name:"theme-color",content:e})})})}const ge=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function fe(){return t(y,{children:ge.map((e,r)=>t(L,{to:e.url,children:d(v,{button:!0,children:[t(b,{primary:e.name}),t(j,{children:t(W,{})})]},e.name)},r))})}const xe=p(fe)`
  
`;function ye({className:e}){return t(B,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(n=>t(L,{to:n.url,children:t(T,{sx:{my:2},children:n.name})},n.name))})}const ve=p(ye)`
  
`,be=n=>{var o=n,{className:e}=o,r=f(o,["className"]);const a=c.exports.useContext(w);return t(q,{position:"static",className:e,children:t(_,{maxWidth:"xl",children:d(K,{disableGutters:!0,children:[t(B,{sx:{display:{xs:"flex",md:"none"}},children:t(V,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.toggleDrawer(!0,"left","temporary",xe)},color:"inherit",children:t(J,{})})}),t(m,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),t(ve,{className:"nav-bar"})]})})})},Ce=p(be)`
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
`;function we(n){var o=n,{className:e}=o,r=f(o,["className"]);return t("div",{className:e,children:r.children})}const Se=p(we)`
  height: 100vh;
  background-color: ${e=>e.theme.palette.primary.light};
`,Ne=[{name:"Home",url:"/"},{name:"About",url:"/about"}],Le=[{name:"Github",url:"https://github.com/MMBass/React-starter-template"}],Be=[{name:"example@gmail.com",url:"mailto:example@gmail.com"}];function Pe({className:e}){return t("div",{id:"FOOTER",className:e,children:d(x,{container:!0,rowSpacing:6,columnSpacing:2,children:[t(x,{item:!0,xs:12,sm:4,children:d(y,{children:[t(S,{variant:"h5",component:"h5",children:"Pages"}),Ne.map((r,n)=>t(L,{to:r.url,children:t(v,{children:t(b,{primary:r.name})},n)},n))]})}),t(x,{item:!0,xs:12,sm:4,children:d(y,{children:[t(S,{variant:"h5",component:"h5",children:"Social"}),Le.map((r,n)=>t(A,{href:r.url,children:t(v,{children:t(b,{primary:r.name})},n)},n))]})}),t(x,{item:!0,xs:12,sm:4,children:d(y,{children:[t(S,{variant:"h5",component:"h5",children:"Stay Connected"}),Be.map((r,n)=>t(A,{href:r.url,children:t(v,{children:t(b,{primary:r.name})},n)},n))]})})]})})}const ke=p(Pe)`
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

`;function De(n){var o=n,{className:e}=o,r=f(o,["className"]);const a=c.exports.useContext(w);return t(Q,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.toggleDrawer(!1)},children:t(B,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.toggleDrawer(!1)},children:t(a.child,{})})})}const Ae=p(De)`
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
`;function Me({className:e}){const[r,n]=c.exports.useState(!0),o=()=>{n(!1)};return d(U,{id:"main-modal-root",className:e,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[t(X,{id:"alert-dialog-title",children:"Welcome To React Starter Template"}),t(Y,{children:t(Z,{id:"alert-dialog-description",children:"Built with love using Vite build tool, and React library."})}),t(ee,{children:t(T,{onClick:o,children:"Close"})})]})}const Te=p(Me)`
  #main-modal-root{
    z-index: 1500;
  }
`;function $e({className:e}){return t("div",{className:e,children:t(m,{variant:"h2",className:"page-h2",children:"Home Page"})})}const He=p($e)`

`;function Re({className:e}){return t("div",{className:e,children:t(m,{variant:"h2",className:"page-h2",children:"About Page"})})}const Fe=p(Re)`

`;function Oe({className:e}){return d("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(m,{variant:"h2",className:"page-h2",children:"404"}),t(m,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Ie=p(Oe)`

`;function Ee({className:e}){const r=c.exports.useContext(w),n=c.exports.useContext($),o=c.exports.useContext(H);c.exports.useEffect(()=>{},[]);const a=s=>{o.toggleBanner(s)};return t("div",{className:e,children:d(te,{children:[t(me,{}),t(Ce,{className:"header"}),o.main.open&&d(M,{severity:"warning",children:[t(re,{children:"App In Building!"}),"This is a template. create a beautiful apps from that."]}),t(Se,{children:d(ne,{children:[t(N,{path:"/",element:t(He,{className:"page"})}),t(N,{path:"/about",element:t(Fe,{className:"page"})}),t(N,{path:"*",element:t(Ie,{className:"page"})})]})}),r.open&&r.child&&t(Ae,{className:"drawer"}),n.main.open&&t(oe,{color:n.main.color||"primary"}),n.circular.open&&t(ae,{color:n.main.color||"primary"}),o.snackbar.open&&t(ie,{open:o.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(M,{onClose:()=>{a("snackbar")},severity:o.snackbar.severity,sx:{width:"100%"},children:"This is a Snackbar!"})}),t(Te,{}),t(ke,{})]})})}const ze=p(Ee)`
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

  .MuiLinearProgress-root{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`,Ge=[pe,ue,he];function je(e){return t(se,{children:Ge.reduceRight((r,n)=>t(n,{children:r}),e.children)})}le.render(t(C.StrictMode,{children:t(je,{children:t(ce,{theme:R,children:t(ze,{className:"app"})})})}),document.getElementById("root"));
