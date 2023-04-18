const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
renderCalender(new Date())
function renderCalender(date) {
  const element= document.querySelector('.calendar')
  element.innerHTML = `
  ${renderMonth(date)}
  ${renderWeekDays()}
  ${ renderCalenderDays(date)}
 

  `
}


function renderMonth(date){
  const currentMonth = MONTHS[date.getMonth()]
  return `<div class = "current-month">${currentMonth}</div>`
}
function  renderWeekDays(){
return `<div class = 'weekdays-container'>
${WEEK_DAYS.map(day => `<div class = 'week-day'>${day.slice(0,3)}</div>`).join('')}
</div>`
}

function getDaysInMonth(date){
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  return lastDay.getDate()
}
function renderCalenderDays(date){
return `<div class="days-container">${generateMonthDays(date)}</div>`

}
function generateMonthDays(date){
  const daysInMonth = getDaysInMonth(date);
  let html = '';
  for (let i = 1; i <= daysInMonth; i++) {
    html += `<div class="day">${i}</div>`
  }
  return html;
}
