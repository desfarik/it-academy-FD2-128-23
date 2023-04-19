const MONTHS= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

let currentMonth = new Date()
renderCalendar(currentMonth)

function renderCalendar(day) {
    const element = document.querySelector('.calendar');
    element.innerHTML = `
    ${renderMonths(day)}
    ${renderWeekDays()}
    ${renderCalendarDays(date)}
    `
}


function renderMonths(date) {
    const currentMonth = MONTHS[date.getMonth()];
    return `<div class="currentMonth">${currentMonth}</div>`
}

function renderWeekDays(){
    return `<div class= 'weekdays-container'>
    ${WEEK_DAYS.map(day => `<div class="week-day">${day.slice(0,3)}</div>`).join('')}
</div>
    `
}

function getDaysInMonths(date) {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    return lastDay.getDate()
}

function renderCalendarDays(date) {
   return `<div class='days-container'>${generateMonthsDays(date)}</div>`
}

function generateMonthsDays(date) {
    const daysInMonths = getDaysInMonths(date);
    let html = '';
    for (let i = 1; i <= daysInMonths; i++) {
        html += `<div class='day'>${i}</div> `
    }
    return html
}


function goToPrev() {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    renderCalendar(currentMonth)
}

function goToNext() {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
    renderCalendar(currentMonth)
}