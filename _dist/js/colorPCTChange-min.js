export default function(){document.querySelectorAll(".percentageDeltaPrice").forEach(e=>{parseFloat(e.innerText)<0?e.classList.add("redNumber"):e.classList.add("greenNumber")})}