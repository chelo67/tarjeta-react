if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const o=e=>s(e,c),d={module:{uri:c},exports:t,require:o};i[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CMBWccv5.css",revision:null},{url:"assets/index-DKNvSUwZ.js",revision:null},{url:"index.html",revision:"9b9cec9f241ad1dc65aa247b2b4c1cbd"},{url:"registerSW.js",revision:"6830dd192f18ec64e85db09f854efa22"},{url:"icon-152x152.png",revision:"c41f188ffb4519533ded4735afe135b9"},{url:"icon-72x72.png",revision:"89f3029fc683cfadaf9fcd7d59d9c67b"},{url:"manifest.webmanifest",revision:"12bb76abad5acce216e1c977e77ab614"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
