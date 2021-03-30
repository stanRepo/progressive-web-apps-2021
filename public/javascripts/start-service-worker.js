if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/js/sw-min.js")
    .then(function (registration) {
      return registration.update();
    })
    .catch((e) => {
      console.log(e);
    });
}
