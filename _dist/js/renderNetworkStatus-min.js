export default function renderNetworkStatus(){const e=document.querySelector(".offlineBanner");window.addEventListener("offline",n=>{e.classList.add("slideOfflineBanner"),console.log("LOST CONNECTION TO INTERNET")}),window.addEventListener("online",n=>{e.classList.remove("slideOfflineBanner"),console.log("NEW CONNECTION TO INTERNET")})}