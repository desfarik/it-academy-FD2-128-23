function getDaysInMonth(date) {
  return getLastDay(date).getDate();
}

function getLastDay(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getFirstDay(date) {
  return new Date(date.getFullYear(), date.getMonth());
}

function getPrevMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

function getNextMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

function getMonthAndYear(date) {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function getCurrentDate(date) {
  return moment(new Date(+date)).format("ddd, MMM D");
}

function storeItems() {
  localStorage.setItem("items", JSON.stringify(items));
}

function restoreItems() {
  return JSON.parse(localStorage.getItem("items")) || [];
}

function getIdOfCurrentDay() {
  return new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    currentMonth.getDate()
  ).getTime();
}

function getIdOfToday() {
  let today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).getTime();
}

function processThreeTask(day, elem, counter){
  day.lastChild.hidden = true;
  day.lastChild.previousSibling.hidden = true;
  elem.removeAttribute('hidden');
  elem.textContent=`+ ${counter-1} more`;
}

function processMoreThenThreeTask(day, elem, counter){
  day.lastChild.hidden = true;
  elem.textContent = `+ ${counter-1} more`;
}
