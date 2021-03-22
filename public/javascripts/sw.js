const CORE_CACHE_NAME = "core-cache";
const CORE_ASSETS = [
  "/",
  "../static/style.min.css",
  "../manifest/manifest.webmanifest",
  "../manifest/icon-192x192.png",
];

self.addEventListener("install", (event) => {
  // do I even exist?
  event.waitUntil(
    caches
      .open(CORE_CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener("activate", (event) => {
  // am I active?
  console.log("SW - Active");
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (isInCoreCache(request)) {
    event.respondWidth(
      caches.open(CORE_CACHE_NAME).then((cache) => cache.match(request.url))
    );
    console.log("SW - res served from CACHE");
  }
});
