var F=Object.defineProperty,E=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var P=(e,r,a)=>r in e?F(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,l=(e,r)=>{for(var a in r||(r={}))D.call(r,a)&&P(e,a,r[a]);if(f)for(var a of f(r))M.call(r,a)&&P(e,a,r[a]);return e},u=(e,r)=>E(e,z(r));var m=(e,r)=>{var a={};for(var n in e)D.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&f)for(var n of f(e))r.indexOf(n)<0&&M.call(e,n)&&(a[n]=e[n]);return a};import{R as C,r as c,j as t,c as G,M as j,L as y,N as k,a as p,b,d as v,e as W,A as q,s as d,B,f as $,g as _,C as J,T as K,I as U,h as V,i as g,G as x,k as N,l as A,m as Q,n as X,D as Y,o as Z,p as ee,q as te,t as re,H as ae,u as T,v as ne,w as oe,x as L,y as ie,z as se,S as le,F as ce,E as de,J as pe}from"./vendor.97fa1b93.js";const ue=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};ue();const w=C.createContext(void 0);function he(e){const[r,a]=c.exports.useState({}),o={toggleDrawer:(i,s,h="temporary",S)=>{a({open:i,anchor:s,permanent:h,child:S})}};return t(w.Provider,{value:l(l({},r),o),children:e.children})}const H=C.createContext(void 0);function me(e){const[r,a]=c.exports.useState({main:{open:!1,color:"primary"},circular:{open:!1,color:"primary"}}),i={createLoader:(s,h)=>{r.name&&a(u(l({},r),{[s]:void 0})),a(u(l({},r),{[s]:{open:!1,color:h||"primary"}}))},toggleLoader:s=>{r.name?a(u(l({},r),{[s]:u(l({},r.name),{open:!r.name.open})})):console.error("Loader does'nt exist. Name: "+s)}};return t(H.Provider,{value:l(l({},r),i),children:e.children})}const R=C.createContext(void 0);function ge(e){const[r,a]=c.exports.useState({main:{open:!0,severity:"warning",title:"App In Building!",message:"This is a template. create a beautiful apps from that."},snackbar:{open:!0,severity:"success",title:"",message:"This is a Snackbar!"}}),i={createBanner:(s,h,S,O)=>{r[s]&&a(u(l({},r),{[s]:void 0})),a(u(l({},r),{[s]:{open:!1,severity:h||"success",title:S||"",mesaage:O||""}}))},toggleBanner:s=>{r[s]?a(u(l({},r),{[s]:u(l({},r[s]),{open:!r[s].open})})):console.error("Banner does'nt exist. Name: "+s)}};return t(R.Provider,{value:l(l({},r),i),children:e.children})}const I=G({palette:{primary:{main:"#0092AB",light:"#00AECC",dark:"#2D4260"},secondary:{main:"#edf2ff",dark:"#737373",light:"#EBECF0"}}});function fe(){const[e,r]=c.exports.useState(I.palette.primary.light);return t("div",{className:"wrapper",children:t(j,{children:t("meta",{name:"theme-color",content:e})})})}const xe=[{name:"Home",url:"/"},{name:"About",url:"/about"}];function ye(){return t(y,{children:xe.map((e,r)=>t(k,{to:e.url,children:p(b,{button:!0,children:[t(v,{primary:e.name}),t(W,{children:t(q,{})})]},e.name)},r))})}const be=d(ye)`
  
`;function ve({className:e}){return t(B,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[{name:"Home",url:"/"},{name:"About",url:"/about"}].map(a=>t(k,{to:a.url,children:t($,{sx:{my:2},children:a.name})},a.name))})}const Ce=d(ve)`
  
`,we=a=>{var n=a,{className:e}=n,r=m(n,["className"]);const o=c.exports.useContext(w);return t(_,{position:"static",className:e,children:t(J,{maxWidth:"xl",children:p(K,{disableGutters:!0,children:[t(B,{sx:{display:{xs:"flex",md:"none"}},children:t(U,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:()=>{o.toggleDrawer(!0,"left","temporary",be)},color:"inherit",children:t(V,{})})}),t(g,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:"flex"},children:"React Starter Template"}),t(Ce,{className:"nav-bar"})]})})})},Se=d(we)`
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
`;function Ne(a){var n=a,{className:e}=n,r=m(n,["className"]);return t("div",{className:e,children:r.children})}const Le=d(Ne)`
  height: 100vh;
  background-color: ${e=>e.theme.palette.primary.light};
`,ke=[{name:"Home",url:"/"},{name:"About",url:"/about"}],Be=[{name:"Github",url:"https://github.com/MMBass/React-starter-template"}],Pe=[{name:"example@gmail.com",url:"mailto:example@gmail.com"}];function De({className:e}){return t("div",{id:"FOOTER",className:e,children:p(x,{container:!0,rowSpacing:6,columnSpacing:2,children:[t(x,{item:!0,xs:12,sm:4,children:p(y,{children:[t(N,{variant:"h5",component:"h5",children:"Pages"}),ke.map((r,a)=>t(k,{to:r.url,children:t(b,{children:t(v,{primary:r.name})},a)},a))]})}),t(x,{item:!0,xs:12,sm:4,children:p(y,{children:[t(N,{variant:"h5",component:"h5",children:"Social"}),Be.map((r,a)=>t(A,{href:r.url,children:t(b,{children:t(v,{primary:r.name})},a)},a))]})}),t(x,{item:!0,xs:12,sm:4,children:p(y,{children:[t(N,{variant:"h5",component:"h5",children:"Stay Connected"}),Pe.map((r,a)=>t(A,{href:r.url,children:t(b,{children:t(v,{primary:r.name})},a)},a))]})})]})})}const Me=d(De)`
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

`;function Ae(a){var n=a,{className:e}=n,r=m(n,["className"]);const o=c.exports.useContext(w);return t(Q,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.toggleDrawer(!1)},children:t(B,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.toggleDrawer(!1)},children:t(o.child,{})})})}const Te=d(Ae)`
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
`;function $e({className:e}){const[r,a]=c.exports.useState(!0),n=()=>{a(!1)};return p(X,{id:"main-modal-root",className:e,open:r,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(Y,{id:"alert-dialog-title",children:"Welcome to React Starter Template"}),t(Z,{children:t(ee,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(te,{children:t($,{onClick:n,children:"Close"})})]})}const He=d($e)`
  
`;function Re(a){var n=a,{className:e}=n,r=m(n,["className"]);const[o,i]=c.exports.useState(!0);return t(re,{className:e,open:o,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}d(Re)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Ie({className:e}){return t("div",{className:e,children:t(g,{variant:"h2",className:"page-h2",children:"Home Page"})})}const Oe=d(Ie)`

`;function Fe({className:e}){return t("div",{className:e,children:t(g,{variant:"h2",className:"page-h2",children:"About Page"})})}const Ee=d(Fe)`

`;function ze({className:e}){return p("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(g,{variant:"h2",className:"page-h2",children:"404"}),t(g,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Ge=d(ze)`

`;function je({className:e}){const r=c.exports.useContext(w),a=c.exports.useContext(H),n=c.exports.useContext(R);c.exports.useEffect(()=>{},[]);const o=i=>{n.toggleBanner(i)};return t("div",{className:e,children:p(ae,{children:[t(fe,{}),t(Se,{className:"header"}),n.main.open&&p(T,{severity:"warning",children:[t(ne,{children:n.main.title}),n.main.message]}),t(Le,{children:p(oe,{children:[t(L,{path:"/",element:t(Oe,{className:"page"})}),t(L,{path:"/about",element:t(Ee,{className:"page"})}),t(L,{path:"*",element:t(Ge,{className:"page"})})]})}),r.open&&r.child&&t(Te,{className:"drawer"}),a.main.open&&t(ie,{color:a.main.color||"primary"}),a.circular.open&&t(se,{color:a.main.color||"primary"}),n.snackbar.open&&t(le,{open:n.snackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(T,{onClose:()=>{o("snackbar")},severity:n.snackbar.severity,sx:{width:"100%"},children:n.snackbar.message})}),t(He,{}),t(Me,{})]})})}const We=d(je)`
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
`,qe=[he,ge,me];function _e(e){return t(ce,{children:qe.reduceRight((r,a)=>t(a,{children:r}),e.children)})}de.render(t(C.StrictMode,{children:t(_e,{children:t(pe,{theme:I,children:t(We,{className:"app"})})})}),document.getElementById("root"));
