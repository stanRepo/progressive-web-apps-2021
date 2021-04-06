if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/js/sw-min.js")
      .then(function (registration) {
        return registration.update();
      })
      .catch((e) => {
        console.log(e);
      });
  });
}
