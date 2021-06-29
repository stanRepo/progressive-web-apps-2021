# Course: Progressive Web App

This project is based on the previous course Web App From Scratch. That repository can be found [here](https://github.com/stanRepo/web-app-from-scratch-2021)


# Index

- [Course: Progressive Web App](#course--progressive-web-app)
  * [Setup](#setup)
  * [Course Contents](#course-contents)
    + [Week 1](#week-1)
    + [Week 2](#week-2)
    + [Week 3](#week-3)
  * [Manifest](#manifest)
- [Serving Offline Page](#serving-offline-page)
  * [Checklist](#checklist)
- [Revision](#revision)
  * [Old Feedback](#old-feedback)




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

Heres a list of things I did to improve my code:

1. Added X value functionality from WAFS app
2. Fixed Service worker errors
3. Caching images (crypto icons) with service worker and rendering them from cache on repeat view.

Since I collect a lot of these icons (always 100) it was of most importance to do it efficiently when repeat view happens. Below is an image of the service worker code that deals with this. It originates in the /_dist/sw.js file

![Image Requests](/public/images/ImageRequests.svg)


4. Offline page works now
5. Added news articles with API calls to the offline page

On the image below you can see a screenshot of the offline page working. The page uses server side rendering and since the page is cached when the device performs first view of the page. The API call for the articles is handled successfully and the articles appear on the offline page.

![Offline Page](/public/images/OfflinePage.jpg)

Here is the code that deals with fetching the offline page when te service worker installs

![Fetch Offline](/public/images/fetchOffline.svg)



6. added styling to offline page
7. Updated readme
8. added seperate head.ejs partial for details route
9. cleaned up unused code
10. added new js files to gulpfile for minification

11. It turned out that minifying my service worker and manifest files created errors. Thats why pre-revision I had a lot of troubles with improving my skill. After I excluded them I was able to really work on that part of the assignment. 

12. I created seperate caches for different use cases of the app. I did this only for clarity since I cache a lot of assets (especcially images). 
![caches](/public/images/caches.JPG)

13. I've made significant improvements with the Lighthouse Report Scores. Even though extra js code was added I managed to increase the loading statistics. This is seen on the images below.

Old Report (Pre Revision)            |  New Report (After Revision)
:-------------------------:|:-------------------------:
![Old Report (Pre Revision)](/public/images/lighthouseAfter2.JPG)  |  ![New Report (After Revision)](/public/images/lighthouseRevisionIncognito.JPG)

------------

The next image is a trace of the website loading in repeat view on slow3G connection speed and the same trace on repeat view on fast3G connection speed. 

Slow 3G | Fast3G
:-------------------------:|:-------------------------:
![Slow3G trace](/public/images/TimeFrameLoading.JPG)  |  ![Fast3G trace)](/public/images/TimeFrameLoadingFast.JPG)

At the green knobs on the bottom side of the image you can see the First Paint, First Contentfull Paint and the Largest Contentfull Paint. The Blue Knob shows when the DOMContentLoaded Event Triggered.


