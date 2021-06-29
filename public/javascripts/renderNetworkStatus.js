export default function renderNetworkStatus() {
  const banner = document.querySelector(".offlineBanner");

  window.addEventListener("offline", (e) => {
    banner.classList.add("slideOfflineBanner");
    console.log("LOST CONNECTION TO INTERNET");
  });
  window.addEventListener("online", (e) => {
    banner.classList.remove("slideOfflineBanner");
    console.log("NEW CONNECTION TO INTERNET");
  });


// setInterval(checkNetworkStatus(),5000)
// async function checkNetworkStatus(){

//   await fetch('/').catch(()=>{
//     window.addEventListener("offline", (e) => {
//       banner.classList.add("slideOfflineBanner");
//       console.log("LOST CONNECTION TO INTERNET");
//     });
//   })
// }

}
