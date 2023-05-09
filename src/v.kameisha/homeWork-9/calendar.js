let currentMonth = new Date();
renderCalender(currentMonth);

function renderCalender(date) {
  const element = document.querySelector('.calendar');
  element.innerHTML = `
  ${renderMonth(date)}
  ${renderWeekDays()}
  ${renderCalenderDays(date)}
  `;
}
let shownMonth = document.querySelector('#bdaymonth');
shownMonth.value = moment(new Date(currentMonth)).format("YYYY-MM");
renderCalender(currentMonth);

function renderMonth(date) {
  const currentMonth = MONTHS[date.getMonth()];
  return ;
}

function renderWeekDays() {
  return `<div class = 'weekdays-container'>
${WEEK_DAYS.map(day => `<div class = 'week-day'>${day.slice(0, 3)}</div>`)
    .join('')}
</div>`;
}



function generatePrevMonthDays(date) {
  const dayCount = getFirstDay(date).getDay();
  const prevMonth = getPrevMonth(date);
  const daysInMonth = getDaysInMonth(prevMonth);
  const days = [];
  for (let i = dayCount; i > 0; i--) {
    days.push(daysInMonth - i + 1);
  }
  return days.map(day => `<div class='day prev-month-day'>${day}</div>`)
    .join('');
}

function generateNextMonthDays(date) {
  const lastDAyOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);
  const dayCount = 6 -lastDAyOfMonth.getDay();
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
  const days = [];
  for (let i = 1; i <= dayCount; i++) {
    days.push(i);
  }
  return days.map(day => `<div class='day next-month-day'>${day}</div>`)
    .join('');
}

function renderCalenderDays(date) {
  return `<div class="days-container">
${generatePrevMonthDays(date)}
${generateMonthDays(date)}
${generateNextMonthDays(date)}
</div>`;

}

function generateMonthDays(date) {
  const daysInMonth = getDaysInMonth(date);
  let html = '';
  for (let i = 1; i <= daysInMonth; i++) {
    html += `<div class="day">${i}</div>`;
    
  }

  return html;
}
function goToPrev() {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
  renderCalender(currentMonth);
}
function goToNext() {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
  renderCalender(currentMonth);
}