const CORE_CACHE_NAME="core-cache",CORE_ASSETS=["/","../static/style.min.css","../manifest/manifest.webmanifest","../manifest/icon-192x192.png"];self.addEventListener("install",e=>{e.waitUntil(caches.open("core-cache").then(e=>e.addAll(CORE_ASSETS)).then(()=>self.skipWaiting()))}),self.addEventListener("activate",e=>{console.log("SW - Active")}),self.addEventListener("fetch",e=>{const t=e.request;isInCoreCache(t)&&(e.respondWidth(caches.open("core-cache").then(e=>e.match(t.url))),console.log("SW - res served from CACHE"))});