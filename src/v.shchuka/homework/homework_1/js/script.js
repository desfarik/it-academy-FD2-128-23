const elementBreakfast = document.querySelector(".breakfast");
const elementUpArrow = document.querySelector(".arrow-up");
const elementBreakfastList = document.querySelector(".breakfast-list");
elementUpArrow.addEventListener("click", hideList);
function hideList() {
  elementBreakfast.classList.toggle("show-radius");
  elementUpArrow.classList.toggle("arrow-up--rotate");
  elementBreakfastList.classList.toggle("hide-list");
}
