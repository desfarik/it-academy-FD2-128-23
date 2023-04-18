function getDaysInMonth(date) {
  return getLastDay(date).getDate();
}

function getLastDay(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getFirstDay(date) {
  return  new Date(date.getFullYear(), date.getMonth())
}

function getPrevMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1)
}
