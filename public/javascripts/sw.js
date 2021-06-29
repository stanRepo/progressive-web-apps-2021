const CORE_CACHE_NAME = "core-cache";
const CORE_ASSETS = [
  "/",
  "/static/style.min.css",
  "/manifest/manifest.webmanifest",
  "/manifest/icon-192x192.png",
  "/static/offline.html",
];

self.addEventListener("install", (event) => {
  // do I even exist?
  event.waitUntil(
    caches
      .open(CORE_CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch((e) => console.error(e))
  );

  let offlineRequest = new Request("../offline");
  event.waitUntil(
    fetch(offlineRequest).then(function (response) {
      return caches.open("offline").then(function (cache) {
        console.log("[oninstall] Cached offline page", response.url);
        return cache.put(offlineRequest, response);
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  // am I active?

  console.log("SW - Active");
  console.log(self);
  return self.clients.claim();
});

self.addEventListener("fetch", async (event) => {
  // include a check for Accept: text/html header.
  console.log("logging fetch");
  if (
    event.request.mode === "navigate" ||
    (event.request.method === "GET" &&
      event.request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      await fetch(event.request.url).catch((error) => {
        // Return the offline page
        return caches.match("/static/offline.html");
      })
    );
  } else {
    // Respond with everything else if we can
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || await fetch(event.request);
      })
    );
  }

  if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("image/png")
  ) {
    caches.open("IMG").then(function (response) {
      caches.add(request.response);
    });
  }
});

