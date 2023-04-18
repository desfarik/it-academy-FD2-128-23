const date = new Date();
const WEEK_DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
const weekday = WEEK_DAYS[date.getDay()];
const day = date.getDate();
const currDate = document.querySelector('.current-date');
currDate.innerHTML = `
<div class = "date">${day}</div>
<div class = "weekday">${weekday}</div>
`

