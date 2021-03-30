export default function () {
  const elements = document.querySelectorAll(".percentageDeltaPrice");
  elements.forEach((el) => {
    if (parseFloat(el.innerText) < 0) {
      el.classList.add("redNumber");
      // el.classList.remove("redNumber");
    } else {
      // el.classList.remove("greenNumber");
      el.classList.add("greenNumber");
    }
  });
}
