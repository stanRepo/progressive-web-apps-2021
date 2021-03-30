# Course: Progressive Web App

This project is based on the previous course Web App From Scratch. That repository can be found [here](https://github.com/stanRepo/web-app-from-scratch-2021)

## Setup

1. Clone this repository to your device
2. Open your `Command Line Interface`.
3. Go to the directory that holds this repository
4. Create key.js and add to directory: root/src/constant/
5. Add following code to key.js:

```js
module.exports = {
  key: "&api_key=INSERT-YOUR-API-KEY",
};
```

Register for free and get your API key on [Cryptocompare](https://min-api.cryptocompare.com/)

6. Run the following command: `npm install` in `root` directory
7. Run the following command: `npm run build` in `root` directory
8. Open your browser and go to url: `localhost:3000`

## Course Contents

### Week 1

- Refactored the [WAFS](https://github.com/stanRepo/web-app-from-scratch-2021) app
- Added `Gulp Tasks` for `CSS` and `JS`. App is now Linked to `_dist` Directory
  When running command `npm run build` or `npm run dev` `JS` and `CSS` are minified before the page is served.

### Week 2

- Service Worker Added
- Service Worker Caches files and delivers them from cache when requested.
- Manifest File added

![Service Worker](/public/images/serviceWorker.JPG)

### Week 3

Lighthouse report before Optimalization:
![lighthouse Report](/public/images/lighthouseAfter.jpg)

Lighthouse report after Optimalization:

![Lighthouse Report](/public/images/lighthouseAfter2.JPG)

The biggest optimalization issue is the fetching of coin related `<img>` elements.

To illustrate this take a look at the image below
![Waterfall](/public/images/waterfallSlow.JPG)

This image was taken with Chrome DevTools using the SLOW3G simulating feature of the performance tab.
We can see here that on FIRST VIEW the images have not been cached yet. Therefore it builds up a waterfall of requests. Thanks to the service worker. These assets are cached and on REPEAT VIEW they are served from memory. In the image below we see the resulting performance:

![Waterfall](/public/images/waterfallSlow2.JPG)
