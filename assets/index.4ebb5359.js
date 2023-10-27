var E=Object.defineProperty,z=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))M.call(t,o)&&P(e,o,t[o]);if(x)for(var o of x(t))A.call(t,o)&&P(e,o,t[o]);return e},c=(e,t)=>z(e,G(t));var g=(e,t)=>{var o={};for(var n in e)M.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&x)for(var n of x(e))t.indexOf(n)<0&&A.call(e,n)&&(o[n]=e[n]);return o};import{R as w,r as d,j as r,c as j,M as W,L as b,N as D,a as u,b as v,d as C,e as q,A as _,s as p,B as N,f as H,g as J,C as K,T as U,I as V,h as Q,i as f,G as y,k as B,l as T,m as X,n as Y,D as Z,o as ee,p as re,q as te,t as oe,H as ne,u as $,v as ae,w as se,x as k,y as ie,z as le,S as ce,F as de,E as pe,J as ue}from"./vendor.4fbc8e79.js";const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};he();const S=w.createContext(void 0);function me(e){const[t,o]=d.exports.useState({}),i={openDrawer:(h,s,m="temporary",L)=>{o({open:h,anchor:s,permanent:m,child:L})},closeDrawer:()=>{o({})}};return r(S.Provider,{value:l(l({},t),i),children:e.children})}const R=w.createContext(void 0);function ge(e){const[t,o]=d.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),h={createLoader:(s,m)=>{t.name&&o(c(l({},t),{[s]:void 0})),o(c(l({},t),{[s]:{open:!1,color:m||"primary"}}))},openLoader:s=>{t[s]?o(c(l({},t),{[s]:c(l({},t[s]),{open:!0})})):console.error("Loader"+s+"does'nt exist")},closeLoader:s=>{t[s]?o(c(l({},t),{[s]:c(l({},t[s]),{open:!1})})):console.error("Loader"+s+"does'nt exist")}};return r(R.Provider,{value:l(l({},t),h),children:e.children})}const I=w.createContext(void 0);function fe(e){const[t,o]=d.exports.useState({main:{open:!0,severity:"warning",title:"App In Building!",message:"This is a template. create a beautiful apps from that."},snackbar:{open:!0,severity:"success",title:"",message:"This is a Snackbar!"}}),h={createBanner:(s,m,L,F)=>{t[s]&&o(c(l({},t),{[s]:void 0})),o(c(l({},t),{[s]:{open:!1,severity:m||"success",title:L||"",mesaage:F||""}}))},openBanner:s=>{t[s]?o(c(l({},t),{[s]:c(l({},t[s]),{open:!0})})):console.error("Banner"+s+"does'nt exist")},closeBanner:s=>{t[s]?o(c(l({},t),{[s]:c(l({},t[s]),{open:!1})})):console.error("Banner"+s+"does'nt exist")}};return r(I.Provider,{value:l(l({},t),h),children:e.children})}const O=j({palette:{primary:{main:"#0092AB",light:"#00AECC",dark:"#2D4260"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function xe(){const[e,t]=d.exports.useState(O.palette.primary.light);return r("div",{className:"wrapper",children:r(W,{children:r("meta",{name:"theme-color",content:e})})})}const ye=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function be(){return r(b,{children:ye.map((e,t)=>r(D,{to:e.url,children:u(v,{button:!0,children:[r(C,{primary:e.name}),r(q,{children:r(_,{})})]},e.name)},t))})}const ve=p(be)`
  
`;function Ce({className:e}){return r(N,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(o=>r(D,{to:o.url,children:r(H,{sx:{my:2},children:o.name})},o.name))})}const we=p(Ce)`
  
`,Se=o=>{var n=o,{className:e}=n,t=g(n,["className"]);const a=d.exports.useContext(S);return r(J,{position:"static",className:e,children:r(K,{maxWidth:"xl",children:u(U,{disableGutters:!0,children:[r(N,{sx:{display:{xs:"flex",md:"none"}},children:r(V,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{a.open?a.closeDrawer():a.openDrawer(!0,"left","temporary",ve)},color:"inherit",children:r(Q,{})})}),r(f,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),r(we,{className:"nav-bar"})]})})})},Le=p(Se)`
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
`;function Be(o){var n=o,{className:e}=n,t=g(n,["className"]);return r("div",{className:e,children:t.children})}const ke=p(Be)`
  height: 100vh;
  background-color: ${e=>e.theme.palette.primary.light};
`,De=[{name:"Home",url:"/"},{name:"About",url:"/about"}],Ne=[{name:"Github",url:"https://github.com/MMBass/React-starter-template"}],Pe=[{name:"example@gmail.com",url:"mailto:example@gmail.com"}];function Me({className:e}){return r("div",{id:"FOOTER",className:e,children:u(y,{container:!0,rowSpacing:6,columnSpacing:2,children:[r(y,{item:!0,xs:12,sm:4,children:u(b,{children:[r(B,{variant:"h5",component:"h5",children:"Pages"}),De.map((t,o)=>r(D,{to:t.url,children:r(v,{children:r(C,{primary:t.name})},o)},o))]})}),r(y,{item:!0,xs:12,sm:4,children:u(b,{children:[r(B,{variant:"h5",component:"h5",children:"Social"}),Ne.map((t,o)=>r(T,{href:t.url,children:r(v,{children:r(C,{primary:t.name})},o)},o))]})}),r(y,{item:!0,xs:12,sm:4,children:u(b,{children:[r(B,{variant:"h5",component:"h5",children:"Stay Connected"}),Pe.map((t,o)=>r(T,{href:t.url,children:r(v,{children:r(C,{primary:t.name})},o)},o))]})})]})})}const Ae=p(Me)`
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

`;function Te(o){var n=o,{className:e}=n,t=g(n,["className"]);const a=d.exports.useContext(S);return r(X,{className:e,anchor:a.anchor,open:a.open,variant:a.permanent,onClose:()=>{a.closeDrawer()},children:r(N,{className:"drawer-layout",sx:{width:a.anchor==="top"||a.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{a.closeDrawer()},children:r(a.child,{})})})}const $e=p(Te)`
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
`;function He({className:e}){const[t,o]=d.exports.useState(!0),n=()=>{o(!1)};return u(Y,{id:"main-modal-root",className:e,open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[r(Z,{id:"alert-dialog-title",children:"Welcome to React Starter Template"}),r(ee,{children:r(re,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),r(te,{children:r(H,{onClick:n,children:"Close"})})]})}const Re=p(He)`
  
`;function Ie(o){var n=o,{className:e}=n,t=g(n,["className"]);const[a,i]=d.exports.useState(!0);return r(oe,{className:e,open:a,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.children})}p(Ie)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Oe({className:e}){return r("div",{className:e,children:r(f,{variant:"h2",className:"page-h2",children:"Home Page"})})}const Fe=p(Oe)`

`;function Ee({className:e}){return r("div",{className:e,children:r(f,{variant:"h2",className:"page-h2",children:"About Page"})})}const ze=p(Ee)`

`;function Ge({className:e}){return u("div",{id:"NO_MATCH_WRAPPER",className:e,children:[r(f,{variant:"h2",className:"page-h2",children:"404"}),r(f,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const je=p(Ge)`

`;function We({className:e}){const t=d.exports.useContext(S),o=d.exports.useContext(R),n=d.exports.useContext(I);d.exports.useEffect(()=>{},[]);const a=i=>{n.toggleBanner(i)};return r("div",{className:e,children:u(ne,{children:[r(xe,{}),r(Le,{className:"header"}),n.main.open&&u($,{severity:"warning",children:[r(ae,{children:n.main.title}),n.main.message]}),r(ke,{children:u(se,{children:[r(k,{path:"/",element:r(Fe,{className:"page"})}),r(k,{path:"/about",element:r(ze,{className:"page"})}),r(k,{path:"*",element:r(je,{className:"page"})})]})}),t.open&&t.child&&r($e,{className:"drawer"}),o.main.open&&r(ie,{color:o.main.color||"primary"}),o.circular.open&&r(le,{color:o.main.color||"primary"}),n.snackbar.open&&r(ce,{open:n.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:r($,{onClose:()=>{a("snackbar")},severity:n.snackbar.severity,sx:{width:"100%"},children:n.snackbar.message})}),r(Re,{}),r(Ae,{})]})})}const qe=p(We)`
  height: 100vh;
  color: ${e=>e.theme.palette.secondary.main};

  .page-h2{
    padding: 30px 0px 0px 35px;
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
`,_e=[me,fe,ge];function Je(e){return r(de,{children:_e.reduceRight((t,o)=>r(o,{children:t}),e.children)})}pe.render(r(w.StrictMode,{children:r(Je,{children:r(ue,{theme:O,children:r(qe,{className:"app"})})})}),document.getElementById("root"));
