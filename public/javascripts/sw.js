const CORE_CACHE_NAME = "core-cache";
const CORE_ASSETS = ["/"];

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
});
self.addEventListener("fetch", (event) => {
  // can I do cool stuff?
  self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (isInCoreCache(request)) {
      event.respondWidth(
        caches.open(CORE_CACHE_NAME).then((cache) => cache.match(request.url))
      );
    }
  });
});
