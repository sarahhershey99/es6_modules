if(!self.define){let e,t={};const s=(s,o)=>(s=new URL(s+".js",o).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let r={};const f=e=>s(e,n),c={module:{uri:n},exports:r,require:f};t[n]=Promise.all(o.map((e=>c[e]||f(e)))).then((e=>(i(...e),r)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"main.js",revision:"6f3dc37b98f6e881d3dff76fe26f00a6"}],{})}));