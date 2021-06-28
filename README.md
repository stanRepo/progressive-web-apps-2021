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
![lighthouse Report](/public/images/lighthouseAfter.JPG)

Lighthouse report after Optimalization:

![Lighthouse Report](/public/images/lighthouseAfter2.JPG)

The biggest optimalization issue is the fetching of coin related `<img>` elements.

To illustrate this take a look at the image below
![Waterfall](/public/images/waterfallSlow.JPG)

This image was taken with Chrome DevTools using the SLOW3G simulating feature of the performance tab.
We can see here that on FIRST VIEW the images have not been cached yet. Therefore it builds up a waterfall of requests. Thanks to the service worker. These assets are cached and on REPEAT VIEW they are served from memory. In the image below we see the resulting performance:

![Waterfall](/public/images/waterfallSlow2.JPG)

-----------

## Manifest
I've added a manifest.webmanifest file so the site is installable to the user. 

# Serving Offline Page

When the user is offline the page returns a precached HTML template to the browser.  This way the user can still view some relative content instead of looking at an empty screen. This is done by the following code in the sw.js file.

*First in the [install] event*

![precache Offline](/public/images/precacheOffline.SVG)

 
*Then in the [Fetch] event*

![fetch Offline](/public/images/fetchOffline.SVG)

## Checklist
[X] Rendering WAFS App
[X] Service Worker added
[X] Serving offline page when fetch fails
[X] Precaching critical assets
[X] Manifest File Added. Site is installable
[X] Service Worker Caches IMG files (crypto icons), repeat view has increased loading speed
[X] Added news articles to the offline page. Giving the user "something to do" while they're offline


---------------


# Revision

Here I will explain the stuff I've added to the previous version of this repository.

## Old Feedback
My feedback included a couple things.

1. Live Version Doesn't work. App Doesn't look nice
2. Offline page doesn't work
3. Minifying documentation incomplete

