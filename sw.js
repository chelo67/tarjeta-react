if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),f={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-B8jYsu3m.js",revision:null},{url:"assets/index-CMBWccv5.css",revision:null},{url:"index.html",revision:"deb0223a353fcb392694244468413e02"},{url:"registerSW.js",revision:"6830dd192f18ec64e85db09f854efa22"},{url:"icon-152x152.png",revision:"c41f188ffb4519533ded4735afe135b9"},{url:"icon-72x72.png",revision:"89f3029fc683cfadaf9fcd7d59d9c67b"},{url:"manifest.webmanifest",revision:"12bb76abad5acce216e1c977e77ab614"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
