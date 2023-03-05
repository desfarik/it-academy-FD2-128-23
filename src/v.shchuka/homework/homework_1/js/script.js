const elementBreakfast = document.querySelector(".breakfast");
const elementUpArrow = document.querySelector(".arrow-up");
elementUpArrow.addEventListener("click", hideList);
function hideList() {
  elementBreakfast.classList.toggle("breakfast--radius");
}
