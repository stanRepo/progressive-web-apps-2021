const CORE_CACHE_NAME = "core-cache";
const CORE_ASSETS = [
  
  "/static/style.min.css",
  "/js/renderNetworkStatus-min.js",
  "/js/colorPCTChange-min.js",
  "/js/main-min.js",
  "/js/marketSentiment-min.js"

  
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


// 

self.addEventListener("fetch", (event) => {
  
  // If a request doesn't match anything in the IMG cache, get it from the network, send it to the page and add it to the cache.
  // if a fetch fails, load offline page

  var request = event.request;
  if(request.method === 'GET'){

// console.log(request.headers.get("Content-Type"))
    // check whether requesting an image 
    if(request.headers.get("Accept").includes('image/apng') && !request.url.includes('3000/static/icon')  && request.url !== 'http://localhost:3000/'){

     event.respondWith(
        // open cache
    caches.open('IMG').then(function(cache){
      // check if requested item exists in cache
      return cache.match(event.request).then(function(response){
        // if it exists return the request, else fetch request
        return response || fetch(event.request).then(function(response){
          // when fetched, put it in the cache
      
          cache.put(event.request,response.clone())
          return response
        })
      })
    })
      )


    } else{
      // not requesting an image.
      event.respondWith(
      // open cache
      caches.open('core-cache').then(function(cache){
        // check if requested item exists in cache
        return cache.match(event.request).then(function(response){
          // if it exists return the request, else fetch request
          return response || fetch(event.request)
        })
      })

   
  // fetch failed, load offline page
      .catch(function(error){
        console.error('[onfetch] Failed. Serving cached offline page')
        return caches.open('offline').then(function(cache){
          return cache.match('offline')
        })
      })
    )

    }


}})





