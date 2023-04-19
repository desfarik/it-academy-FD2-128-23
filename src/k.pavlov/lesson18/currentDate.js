const date = new Date();
const WEEK_DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const weekDay = WEEK_DAYS[date.getDay()];
const day = date.getDate();
const currentDate = document.querySelector('.current-date');
currentDate.innerHTML = `
<div class="date">${day}</div>
<div class="weekday">${weekDay}</div>
`