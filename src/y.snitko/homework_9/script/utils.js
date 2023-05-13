function getFirstDay(date) {
  return new Date(date.getFullYear(), date.getMonth());
}

function getLastDay(data) {
  return new Date(data.getFullYear(), data.getMonth() + 1, 0);
}

function getDaysInMonth(data) {
  return getLastDay(data).getDate();
}

function getPrevMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

function getId(date, day) {
  return `${date.getFullYear()}${date.getMonth() + 1}${day}`;
}

function storeItems() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreItems() {
  return JSON.parse(localStorage.getItem('items')) || [];
}

function storeMonth(data) {
  localStorage.setItem('selectedMonth', data) || new Date();
}

function restoreMonth() {
  return localStorage.getItem('selectedMonth') || new Date();
}

function restoreSelectedDay() {
  return (
    JSON.parse(localStorage.getItem('selectedDay')) || {
      dayOfWeek: daysOfWeek[new Date().getDay()],
      date: new Date().getDate(),
    }
  );
}
