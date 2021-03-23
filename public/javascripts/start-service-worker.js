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
const banner = document.querySelector(".offlineBanner");

window.addEventListener("offline", (e) => {
  banner.classList.add("slideOfflineBanner");
  console.log("LOST CONNECTION TO INTERNET");
});
window.addEventListener("online", (e) => {
  banner.classList.remove("slideOfflineBanner");
  console.log("NEW CONNECTION TO INTERNET");
});
