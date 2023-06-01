const date = new Date();
const WEEK_DAYS = ["SUNDAY","MONDAY","TUESDAY","WEDNSDAY","THURSDAY","FRIDAY",];
const weekday = WEEK_DAYS[date.getDay()];
const day = date.getDate();
const currDay = document.querySelector('.current-date');
currDay.innerHTML = `
<div class="date">${day}</div>
<div class="weekday">${weekday}</div>
`